const fetch = require('node-fetch')
const webSocket = require('ws')
const kcitCommunication = require('./kcitCommunication')
const krerCommunication = require('./krerCommunication')
const infocertApiClient = require('./infocertApiClient')

const credentialIssuanceCallback = {
    call: undefined
}

const recognizedDidCallback = {
    call: undefined
}

const didConnectionStates = {
    requested: 0,
    accepted: 1
}
const RegistrationVCStates = {
    pending: 0,
    completed: 1
}

const verificationCredentialStates = {
    pending: 0,
    completed: 1
}

class DidConnection{
    constructor(invitationID, did){
        this.invitationID = invitationID
        this.state = didConnectionStates.requested
        this.id = undefined
        this.ws = undefined
        this.did = did
    }
    info() {
        return {
            state: this.state,
            id: this.id,
            invitationID: this.invitationID
        }
    }
}
class RegistrationVC{
    constructor(piid, registrationInfo, didConnection){
        this.piid = piid
        this.registrationInfo = registrationInfo
        this.didConnection = didConnection
        this.state = RegistrationVCStates.pending
    }
}

class PendingVerification{
    constructor(piid, didConnection){
        this.piid = piid
        this.didConnection = didConnection
        this.state = verificationCredentialStates.pending
    }
}

const didConnections = new Map()
const pendingVCs = new Map()
const pendingVerifications = new Map()

const didConnection = (did) => {
    const body = { alias:"Marketplace", public: did }
    return fetch(
        `http://${process.env.BROKER_ENDPOINT}/connections/generate-invitation`,
        {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
    .then(res => res.json())
    .then((invitation) => {
        console.log(invitation)
        didConnections.set(invitation.invitation["@id"], new DidConnection(invitation.invitation["@id"], did))
        //console.log("DID connections:", didConnections)
        return invitation
    })  
}

const registration = (data) => {
    const body = {
        connectionID: didConnections.get(data.invitationID).id,
        type: "RegistrationForm",
        credentialSubject: data.registrationInfo,
        credentialID: "http://example.com/1234",
        comment: "Registering Marketplace",
        issuerDID: didConnections.get(data.invitationID).did
    }
    console.log(didConnections.get(data.invitationID).did)
    return fetch(
        `http://${process.env.BROKER_ENDPOINT}/issue-credential/issue`,
        {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
    .then(res => res.json())
    .then((agentData) => {
        let VC = new RegistrationVC(agentData.piid, data.registrationInfo, didConnections.get(data.invitationID).info())
        console.log("new pending VC: ", VC)
        pendingVCs.set(agentData.piid, VC)
    })
}

const didConnectionAcceptance = (notification) => {
    const didConnection = didConnections.get(notification.Message.properties.invitationID)
    if (notification.Message.stateID == "completed" && didConnection.state == didConnectionStates.requested){
        didConnection.state = didConnectionStates.accepted
        didConnection.id = notification.Message.properties.connectionID
        didConnection.ws.send(
            JSON.stringify({
                topic: "did-connection",
                content: {
                    status: "completed"
                }
            })
        )
    }
    //console.log("DID connections:", didConnections)
}

const requestProof = (data) => {
    console.log(didConnections.get(data.invitationID).id)
    const body = {
        comment: "Requesting proof",
        connectionID: didConnections.get(data.invitationID).id,
        type: [
            "DeputeAuthorization"            
        ]// "VerifiableCredential","DeputeAuthorization", "RegistrationForm"
      }
    return fetch(
        `http://${process.env.BROKER_ENDPOINT}/present-proof/request-proof`,
        {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
    .then(res => res.json())
    .then((pendingVerificationData) => {
        let pedningVerification = new PendingVerification(pendingVerificationData.piid, didConnections.get(data.invitationID).info())
        pendingVerifications.set(pendingVerificationData.piid, pedningVerification)
    })
}

const recognizedDid = (notification) => {
    const didConnection = didConnections.get(notification.Message.invitationID)
    recognizedDidCallback.call(notification.Message.connectionID).then((token) => {
        didConnection.ws.send(
            JSON.stringify({
                topic: "did-connection",
                content: {
                    status: "token-generated",
                    token: token
                }
            }),
            () => {
                didConnection.ws.close()
                didConnections.delete(notification.Message.invitationID)
            }
        )
    })
}
const sendRequestProofResult = (notification) => {
    if (notification.Message.stateID == "done"){
        const didConnection = didConnections.get(pendingVerifications.get(notification.Message.properties.piid).didConnection.invitationID)
        const verifiableCredential = JSON.parse(Buffer.from((notification.Message.message['presentations~attach'][0].data.base64.content), 'base64')).verifiableCredential[0]
        return infocertApiClient.getAccessToken()
        .then((token) => token)
        .then((token) => {
            return krerCommunication.isCredentialActive(verifiableCredential.id, token).then((result) => {
                if(!result){
                    didConnection.ws.send(
                        JSON.stringify({
                            topic: "request-proof",
                            content: {
                                data: "Verifiable credential ID is not active",
                                status: "CredentialIdNotActive"
                            }
                        }),
                        () => {
                            // didConnection.ws.close()
                            // didConnections.delete(pendingVerifications.get(notification.Message.properties.piid).didConnection.invitationID)
                        }
                    )
                    throw new Error('Verifiable credential ID is not active')
                } else {
                    return token
                }
            })
        })
        .then((token) => {
            console.log('Company Did')
            console.log(verifiableCredential.issuer)
            return kcitCommunication.isCompanyActive(verifiableCredential.issuer, token).then((active) => {
                if(!active){
                    didConnection.ws.send(
                        JSON.stringify({
                            topic: "request-proof",
                            content: {
                                data: "Company did is not active",
                                status: "CompanyDidNotActive"
                            }
                        }),
                        () => {
                            // didConnection.ws.close()
                            // didConnections.delete(pendingVerifications.get(notification.Message.properties.piid).didConnection.invitationID)
                        }
                    )
                    throw new Error('Company did is not active')
                } else {
                    return token
                }
            })
        })
        .then((token) => {
            didConnection.ws.send(
                JSON.stringify({
                    topic: "request-proof",
                    content: {
                        data: notification.Message.message['presentations~attach'][0].data.base64.content,
                        status: "pending"
                    }
                }),
                () => {
                    // didConnection.ws.close()
                    // didConnections.delete(pendingVerifications.get(notification.Message.properties.piid).didConnection.invitationID)
                }
            )
        })
        .catch((err) => {
            console.error(err)
        })
    }
}

const ssiCredentialIssued = (notification) => {
    if (notification.Message.stateID == "done"){
        const VC = pendingVCs.get(notification.Message.properties.piid)
        if(VC.state == RegistrationVCStates.pending){
            VC.state = RegistrationVCStates.completed
            credentialIssuanceCallback.call(VC).then(()=> {
                const didConnection = didConnections.get(VC.didConnection.invitationID)
                didConnection.ws.send(
                    JSON.stringify({
                        topic: "issue-credential",
                        content: {
                            status: "completed"
                        }
                    }),
                    () => {
                        didConnection.ws.close()
                        didConnections.delete(VC.didConnection.invitationID)
                    }
                )
            })
        }
    }
}

const webhookNotification = (notification) => {
    switch(notification.topic){
        case "didexchange_states":
            didConnectionAcceptance(notification)
            break
        case "generic-invite":
            recognizedDid(notification)
            break
        case "issue-credential_states":
            ssiCredentialIssued(notification)
            break
        case "present-proof_states":
            console.log("present proof state: ", notification)
            sendRequestProofResult(notification)
            break
    }
}

const setCredentialIssuanceCallback = (callback) => {
    credentialIssuanceCallback.call = callback
    Object.freeze(credentialIssuanceCallback)
}

const setRecognizedDidCallback = (callback) => {
    recognizedDidCallback.call = callback
    Object.freeze(recognizedDidCallback)
}

const wss = new webSocket.Server({ port: process.env.WS_PORT })

wss.on("connection", function connection(ws) {
    console.log("connection established")
    ws.on("message", function incoming(message) {
        console.log('received: %s', message)
        message = JSON.parse(message)
        if (message.topic == "did-connection-subscription" && didConnections.get(message.content.id)){
            didConnections.get(message.content.id).ws = ws
        }
        //console.log(didConnections)
    })
})

module.exports = {
    didConnection,
    registration,
    webhookNotification,
    requestProof,

    setCredentialIssuanceCallback, // this function can be called only once
    setRecognizedDidCallback       // this function can be called only once
}