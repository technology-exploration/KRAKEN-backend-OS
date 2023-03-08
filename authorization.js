const jwt = require('jsonwebtoken')

// process.env.ACCESS_TOKEN_SECRET = require('crypto').randomBytes(64).toString('hex')

const createSession = (userId) => jwt.sign({
    issuer: "KRAKEN",
    subject: userId,
    expirationTime: Math.floor(Date.now() / 1000) + 21600 // 6 hours expiration
}, process.env.ACCESS_TOKEN_SECRET)

const createLongSession = (userId) => jwt.sign({
    issuer: "KRAKEN",
    subject: userId,
    expirationTime: Math.floor(Date.now() / 1000) + 3.154e+7 // 1 year expiration
}, process.env.ACCESS_TOKEN_SECRET)

const authentication = (req, res, next) => {
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1]
    if(!token){
        res.sendStatus(401)
    } else {
        if (token == process.env.WATCHER_ACCESS_TOKEN){
            req.authorization = {
                subject: "watcher"
            }
            next()
        } else {
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, authorization) => {
                if (err) {
                    res.sendStatus(403)
                } else {
                    if (authorization.expirationTime < Date.now()/1000){
                        res.sendStatus(401)
                    } else {
                        req.authorization = {
                            subject: authorization.subject,
                            lastLogin: (new Date((authorization.expirationTime-21600)*1000)).toISOString()
                        }
                        next()
                    }
                }
            })
        }
    }
}

module.exports = {
    createSession,
    createLongSession,
    authentication
}