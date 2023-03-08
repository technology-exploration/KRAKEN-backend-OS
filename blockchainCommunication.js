const {
	UserContract,
	DataContract,
	AgreementContract,
	CAServices
} = require('./kraken-app')

const client = process.env.CLIENT
const channelID = process.env.CHANNEL_ID
const chaincodeID = process.env.CHAINCODE_ID
const BLOCK_DELAY = process.env.BLOCK_DELAY
const registrar = process.env.REGISTRAR
const peerEndpoint = process.env.PEER_ENDPOINT
let dataContract = new DataContract(channelID, chaincodeID);
let agreementContract = new AgreementContract(channelID, chaincodeID);
let userContract = new UserContract(channelID, chaincodeID);
// const walletPath = path.join(process.env.WALLET_PATH)
let msp
let ca;
if (registrar === 'lynkeusRegistrar') {
	ca = new CAServices('lynkeus', 'ca-lynkeus', 'LynkeusMSP', registrar, peerEndpoint);
} else {
	ca = new CAServices('tex', 'ca-tex', 'TexMSP', registrar, peerEndpoint);
}
ca.importMSP('lynkeusRegistrar', true).then(data => msp = data)
ca.importMSP(client, false).then(data => msp = data)

const registerUser = async (userId, credential) => {
    console.log(credential)
    let userObj
    if(credential.registrationInfo.institutionalAffiliation === 'Yes'){
        userObj = {
            username: userId,
            isOrg: true,
            isMemberOf: "dc8088314f61ffe9d18909608e1a3ef35cf179817a3ae0b8a6c30ebc4a1f0dd8",
            org: {
                instType: credential.registrationInfo.typeOfInstitution,
                orgName:credential.registrationInfo.institution,
                dpoFirstName: credential.registrationInfo.legalName,
                dpoLastName: credential.registrationInfo.legalSurname,
                dpoEmail: credential.registrationInfo.officerEmail,
                active:true,
                members: []
            },
            isBuyer:true,
            purposes: ['marketing', 'publicly_funded_research', 'managment', 'private_research', 'automated', 'study_recommendations', 'job_offers', 'statistical_research']
        }
    } else {
        userObj = {
            username: userId,
            isOrg: false,
            isBuyer:true,
            isMemberOf: "",
            active: true,
            purposes: ['marketing', 'publicly_funded_research', 'managment', 'private_research', 'automated', 'study_recommendations', 'job_offers', 'statistical_research']
        }
    }
    const org = 'lynkeus'
    const adminUserId = registrar
    const appUserRole = 'client'
    const orgMSP = 'LynkeusUsersMSP'
    const secret = 'secret'

    try{
        await ca.registerAppUser(userId, appUserRole, secret)
        await ca.enrollAppUser(userId, secret)
    } catch (err){
        return Promise.reject(err)
    }

    return userContract.createUser(userId, userObj)
}

const createProduct = (userId, product) => dataContract.createProduct(userId, product)

const updateProduct = (userId, product) => dataContract.updateProduct(userId, product)

const eligibilityCheck = (userId, productId, purposes) => new Promise(async (resolve, reject) => {
    try{
        result = await dataContract.buyProduct(userId, productId, purposes)
        if((typeof result) == "string"){
            setTimeout(() => resolve(result), BLOCK_DELAY)
        } else {
            reject('not eligible')
        }
    } catch(err) {
        reject(err)
    }
})

const declareBuyerPayment = (transactionId) => {
    agreementContract.updateAgreement(client, transactionId, "Paid")
}

const declareBuyerAccess = (transactionID) => {
    agreementContract.updateAgreement(client, transactionID, "Access")
}

module.exports = {
    registerUser,

    createProduct,
    updateProduct,

    eligibilityCheck,

    declareBuyerPayment,
    declareBuyerAccess,
}
