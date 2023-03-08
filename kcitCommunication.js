/**
 * KCIT COMMUNICATION 
 * 
 * @author Alexandros Tragkas
 * 
 */

const fetch = require('node-fetch')
require('dotenv').config()

const KCIT_ENDPOINT = process.env.KCIT_ENDPOINT

function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

/**
 * Get all Active Companies
 * 
 */
const getActiveCompanies = (kcitToken) => {
    return fetch(
        `${KCIT_ENDPOINT}/activeCompanies`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${kcitToken}`
            }
        }
    ).then(res => res.json())
}

/**
 * Get company by DID.
 * The DID gets converted to base64 for the request
 *  
 */
const getCompanyByDID = (DID, kcitToken) => {
    method = 'getCompanyByDID'
    DID_64 = Buffer.from(DID).toString('base64')
    return fetch(
        `${KCIT_ENDPOINT}/activeCompanies/did/${DID_64}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Authorization': `Bearer ${kcitToken}`
            }
        }
    ).then(res => {
        if (res.status !== 200) {
            console.log('%s - Error: Failed to fetch, status: %s, reason: %s', method, res.status, res.statusText)
        }

        if (res.status === 403) {
            console.log('%s - Error: Invalid KCIT token', method)
        }

        if (res.body._readableState.length) {
            return res.json()
        } else {
            return {}
        }
    }).then(data => {
        return data
    })
}


/**
 * Check if company is Active in KCIT
 * 
 */
const isCompanyActive = (DID, KCIT_TOKEN) => {

    return getCompanyByDID(DID, KCIT_TOKEN).then((company) => {
        if (company && company.ENABLED) {
            return true
        }

        return false
    })
}

module.exports = {
    getActiveCompanies,
    isCompanyActive,
    getCompanyByDID
}



// // Test
// console.log('heerehere')
// DID="paolopaolopaolo"
// isCompanyActiveAndSame(DID).then(res => console.log(res))