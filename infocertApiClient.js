const fetch = require('node-fetch')
const kcitEndpoint = process.env.KCIT_ENDPOINT
const krerEndpoint = process.env.KRER_ENDPOINT
const openIdURL = process.env.OPENID_CONNECT

const grantType = process.env.OPENID_GRANT_TYPE
const clientId = process.env.OPENID_CLIENT_ID
const username = process.env.OPENID_USERNAME
const password = process.env.OPENID_PASSWORD
const cleintSecret = process.env.OPENID_CLIENT_SECRET

let accessToken
let lastAccess

const getAccessToken = () => {
    console.log('accessing old token for infocertApi?')
    console.log(lastAccess && lastAccess + 36000 > Date.now()/1000)
    if(lastAccess && lastAccess + 36000 > Date.now()/1000){
        return new Promise(async (resolve, reject) => {
            resolve(accessToken)
        })
    } else {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                'grant_type': grantType,
                'client_id': clientId,
                'username': username,
                'password': password,
                'client_secret' : cleintSecret
            })
            }
        return fetch(openIdURL, options)
            .then((response) => response.json())
            .then(
                (json) => {
                    lastAccess = Date.now()/1000
                    accessToken = json.access_token
                    return accessToken
                },
                (error) => (console.log(error)),
            )
    }
}

module.exports = {
    getAccessToken
}