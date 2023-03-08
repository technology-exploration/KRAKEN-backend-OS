/**
 * KRER COMMUNICATION
 * 
 * @author Alexandros Tragkas
 */

const fetch = require('node-fetch')
require('dotenv').config()

/* ENDPOINTS */
const KRER_ENDPOINT = process.env.KRER_ENDPOINT
const KRER_API_STATUS = `${KRER_ENDPOINT}/credential/status`
const KRER_API_ADD = `${KRER_ENDPOINT}/credential/add`
const KRER_API_UPDATE = `${KRER_ENDPOINT}/credential/update`

/**
 * Credential status
 * 
 */
const credentialStatus = {
	inactive: 'inactive',
	active: 'active',
	revoked: 'revoked'
}

/*
credentialModel = {
  "credentialID": "string",
  "lastModificationDate": "string",
  "modificationReason": "string",
  "proofOfControl": "string",
  "status": "string"
}
*/

/**
 * Add Credential
 * 
 */
const addCredential = (credential) => {
    const body = credential
    return fetch(
        `${KRER_API_ADD}`,
        {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            }
        }
    )
}

/**
 * Update Credential
 * 
 */
const updateCredential = (credential) => {
    const body = credential
    return fetch(
        `${KRER_API_UPDATE}`,
        {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            }
        }
    )
}

/**
 * Get status of a credential
 * 
 */
const getCredentialStatus = (credentialID, kcitToken) => {
    credential_64 = Buffer.from(credentialID).toString('base64')
    return fetch(
        `${KRER_API_STATUS}/${credential_64}`,
        {
            method: 'GET',
            headers: {
                // 'Content-Type': 'application/json',
                'Accept': '*/*',
                'Authorization': `Bearer ${kcitToken}`
            }
        }
    ).then(res => res.json())
}

/**
 * Check if a credential is Active
 * 
 */
const isCredentialActive = (credentialID, kcitToken) => {
	return getCredentialStatus(credentialID, kcitToken).then((credential) => {
   		if (credential.credentialStatus === credentialStatus.active) {
   			return true
   		}
   		return false
	})
}

/**
 * Check if a credential is Revoked
 * 
 */
const isCredentialRevoked = (credentialID) => {
	return getCredentialStatus(credentialID).then(credential => {
   		if (credential.status === credentialStatus.revoked) {
   			return true
   		}
   		return false
	})
}

module.exports = {
    isCredentialRevoked,
    isCredentialActive,
    getCredentialStatus,
    addCredential,
    updateCredential
}


// Test
// let credentialID = 'test6'
// const credential = {
//   credentialID: credentialID,
//   lastModificationDate: "string",
//   modificationReason: "string",
//   proofOfControl: "string",
//   status: "revoked"
// }

// // addCredential(credential)
// updateCredential(credential)
// // .then(res => console.log(res))
// // getCredentialStatus(credentialID)
// // .then(res => console.log(res))
// isCredentialActive(credentialID)
// isCredentialRevoked(credentialID)
// .then(res => console.log(res))
