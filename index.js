require('dotenv').config()
const http = require('http')
const process = require('process')
const fetch = require('node-fetch')
const util = require('util')
const express = require('express')
const app = express()
const cors = require('cors')
const dataunion = require('./dataunion')
const handler = require('./handler')
const mpcCommunication = require('./mpcCommunication')
const ssiCommunication = require('./ssiCommunication')
const dbCommunication = require('./dbCommunication')
let blcCommunication
const authorization = require('./authorization')
const mailer = require('./mailer')
const { StreamrClient, StreamPermission } = require('streamr-client')
const swaggerJsDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")
const port = process.env.PORT
const elasticUrl = process.env.NODE_ENV === 'test'
    ? process.env.TEST_ELASTIC_URL
    : process.env.ELASTIC_URL
const elasticToken = process.env.ELASTIC_AUTH_TOKEN
const marketPlaceDid = process.env.MARKETPLACE_DID

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "KRAKEN backend API",
        description: "KRAKEN API Documentation",
        contact: {
          name: "Amazing Developer"
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT}`,
                description: "Development server"
            }
        ]
      }
    },
    apis: ["index.js"]
  }

const blockchain = !(process.argv[2] === '--exclude-blockchain' || process.argv[3] === '--exclude-blockchain')
const mpc = !(process.argv[2] === '--exclude-mpc' || process.argv[3] === '--exclude-mpc')

if(blockchain)
    blcCommunication = require('./blockchainCommunication')

console.log(blockchain ? 'Including blockchain' : 'Excluding blockchain')
console.log(mpc ? 'Including MPC' : 'Excluding MPC')

app.use(handler.error())
app.use(cors())
app.use(express.json())

const makeIdWithSize = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')
//size is 64
const makeId = () => makeIdWithSize(64)

const elasticQuery = (req, size) => {
    let queryJson
    if(req.query.sector == 'Education'){
        queryJson = JSON.stringify({ "query": { "bool": { "must": [ { "bool": { "should": [ { "prefix": { "name":req.query.search } },
            { "prefix": { "description":req.query.search } }, { "prefix": { "tags.text":req.query.search } }, { "match": { "tags.text":req.query.search } } ] } },
            {"bool":{"should":[{"prefix":{"course":req.query.course}},{"match":{"course":req.query.course}}]}},
            { "match": { "state": "DEPLOYED" } }, { "match": { "sector": "Education" } }, { "match": { "university": "TU Graz" } }, {"prefix":{"category": req.query.category}}, {"prefix":{"studyProgram":req.query.studyProgram}} ] } }, "from": 0, "size": size });
    }
    if(req.query.search != ''){
        if(req.query.sector != 'Education'){
            queryJson = JSON.stringify({"query":{"bool":{"must":[{"bool":{"should":[{"prefix":{"name":req.query.search}},{"prefix":{"description":req.query.search}},
            {"prefix":{"tags.text":req.query.search}},{"match":{"tags.text":req.query.search}}]}},{"match":{"state":"DEPLOYED"}},{"match":{"sector":"Health & wellness"}}]}},"from":0,"size":size});
        }
    } else{
        if(req.query.sector != 'Education'){
            queryJson = JSON.stringify({"query":{"bool":{"must":[{"bool":{"should":[{"prefix":{"name":""}},{"prefix":{"description":""}},
            {"prefix":{"tags.text":""}},{"match":{"tags.text":""}}]}},{"match":{"state":"DEPLOYED"}},{"match":{"sector":"Health & wellness"}}]}},"from":0,"size":size});
        }
        if(req.query.sector == ''){
            queryJson = JSON.stringify({"query":{"bool":{"must":[{"bool":{"should":[{"prefix":{"name":""}},{"prefix":{"description":""}},
            {"prefix":{"tags.text":""}},{"match":{"tags.text":""}}]}},{"match":{"state":"DEPLOYED"}}]}},"from":0,"size":size});
        }
    }
    return queryJson
}
const swaggerDocs = swaggerJsDoc(swaggerOptions)
swaggerDocs.explorer = true
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

ssiCommunication.setCredentialIssuanceCallback(async (credential) => {
    const userId = makeId()
    if(blockchain){
        try{
            console.log('registerUser')
            await blcCommunication.registerUser(userId, credential)
        } catch(err){
            return Promise.reject(err)
        }
    }
    try{
        await mailer.sendRegistrationConfirmationEmail(userId, credential.registrationInfo.email)
    } catch (err) {
        console.log('error while sending registration email: ', err)
    }
    return dbCommunication.storeUserCredential(userId, credential)
})

ssiCommunication.setRecognizedDidCallback( (connectionId) => new Promise((resolve, reject) => {
    dbCommunication.getUserCredential(connectionId).then((credential) => {
        const userId = credential._id
        if(userId)
            resolve(authorization.createSession(userId))
        else
            reject("user unrecognized")
    }).catch(err => reject(err))
}))

const streamr = new StreamrClient({
    auth: {
        privateKey: process.env.PRIVATE_KEY,
    }
})

// Routes

const joinrequestHandler = dataunion.getJoinRequestHandler(streamr.grantPermissions, dbCommunication.getProductByBeneficiaryAddress, dataunion.httpPostDataUnionJoinRequest)
/**
 * @swagger
 * /dataunion/:dataunionaddress/joinrequest:
 *   post:
 *     description:
 *     responses:
 *       '201':
 *         description: Successfully joined data union
 *       '500':
 *         description: Internal server error
 */
app.post('/dataunion/:dataUnionAddress/joinrequest', authorization.authentication, joinrequestHandler)

/**
 * @swagger
 * /did-connection:
 *    get:
 *      description: Request did connection invitation
 *      responses:
 *        '200':
 *          description: Successfully provided invitation
 *        '500':
 *          description: Internal server error
 */
app.get('/did-connection', (req, res) => {
    console.log("DID connection request")

    ssiCommunication.didConnection(marketPlaceDid)
    .then((invitation) => {
        console.log(invitation)
        res.status(200).json(invitation)
    })
    .catch(err => {
        console.error(err)
        res.status(500).send()
    })
})

/**
 * @swagger
 * /signup:
 *    post:
 *      description: Signup request
 *      parameters:
 *        - in: body
 *          name: user
 *          description: The user to create.
 *          schema:
 *            type: object
 *            required:
 *              - invitationID
 *            properties:
 *              invitationID:
 *                type: string
 *              registrationInfo:
 *                type: object
 *                properties:
 *                  firstName:
 *                    type: string
 *                  givenName:
 *                    type: string
 *                  email:
 *                    type: string
 *                  countryOfResidence:
 *                    type: string
 *                  over18:
 *                    type: boolean
 *                  institutionalAffiliation:
 *                    type: boolean
 *                  privatelyContacted:
 *                    type: string
 *                  institution:
 *                    type: string
 *                  typeOfInstitution:
 *                    type: string
 *                  legalSurname:
 *                    type: string
 *                  legalName:
 *                    type: string
 *                  officerEmail:
 *                    type: string
 *                  privacyConsent:
 *                    type: string
 *                  consent:
 *                    type: string
 *      responses:
 *        '200':
 *          description: Successfully created user
 *        '500':
 *          description: Server error
 */
app.post('/signup', (req, res) => {
    console.log("received signup request")
    console.log("body: ", req.body)
    ssiCommunication.registration(req.body)
    .then(
        res.status(200).send()
    )
    .catch(err => {
        console.error(err)
        res.status(500).send()
    })
})

/**
 * @swagger
 * /request-proof:
 *    post:
 *      description: Request proof of institutional affiliation
 *      responses:
 *        '200':
 *          description: Successfully provided piid
 *        '500':
 *          description: Internal server error
 */
app.post('/request-proof', (req, res) => {
    console.log("received proof request")
    console.log("body: ", req.body)
    ssiCommunication.requestProof(req.body)
    .then((verificationResult) => {
        console.log(verificationResult)
        res.status(200).json(verificationResult)
    })
    .catch(err => {
        console.error(err)
        res.status(500).send()
    })
})


/**
 * @swagger
 * /ssi-webhook:
 *    post:
 *      description: Webhook interface for SSI agent broker
 *      parameters:
 *        - in: body
 *          name: request
 *          description: The request from the SSI agent Broker.
 *          schema:
 *            type: object
 *      responses:
 *        '201':
 *          description: Successfully created user
 */
app.post('/ssi-webhook', (req, res) => {
    console.log("SSI webhook post request")
    console.log("body:", util.inspect(req.body, false, null, true))

    ssiCommunication.webhookNotification(req.body)

    res.status(200).send()
})

/**
 * @swagger
 * /deleteProduct/{id}:
 *    post:
 *      description: Product deletion (see parameters in database definition)
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: Alphanumeric ID of the product to get
 *      responses:
 *        '200':
 *          description: Successfully created product
 *        '500':
 *          description: Internal server error
 *        '403':
 *          description: Unauthorized
 */
app.post('/deleteProduct/:id', authorization.authentication, async (req, res) => {
    console.log("POST deleteProduct")
    const userId = req.authorization.subject
    
    dbCommunication.getProduct(req.params.id).then((product) => {
        console.log("Deleting product: ", product)
        console.log("USER ID: ", userId)
        if(userId != product.ownerId){
            res.status(403).send()
        } else {
            console.log("Deleting product: ", req.params.id)
            dbCommunication.deleteProductById(req.params.id)
            .then( ()=> res.status(200).send() )
            .catch( ()=> res.status(500).send() )
        }
    })
})

/**
 * @swagger
 * /deleteUser:
 *    post:
 *      description: User deletion
 *      responses:
 *        '200':
 *          description: Successfully created product
 *        '403':
 *          description: Unauthorized
 */
app.post('/deleteUser', authorization.authentication, async (req, res) => {
    console.log("Deleting user")
    const userId = req.authorization.subject
    const userInfo = await dbCommunication.getUserCredentialById(userId)
    console.log("Deleting user ", userInfo)
    //delete products
    await dbCommunication.deleteUserProducts(userId)
    //revoke credential

    //delete user
    await dbCommunication.deleteUserCredentialById(userId)
    res.status(200).send()
})

/**
 * @swagger
 * /products:
 *    get:
 *      description: Request all published products
 *      responses:
 *        '200':
 *          description: Successfully provided products
 *        '500':
 *          description: Internal server error
 */
app.get('/products', (req, res) => {
    console.log("GET: /products")
    console.log(req.query)
    fetch(elasticUrl, {
        method: 'POST',
        headers: {
            "Authorization": `Basic ${elasticToken}`,
            "Content-Type": "application/json",
        },
        body: elasticQuery(req, 40),
        redirect: 'follow'
     })
    .then(response => response.text())
    .then(result => {
        var json = JSON.parse(result)
        console.log(json)
        res.status(200).json(json.hits.hits.map((x) => x._source))
    })
    .catch(error => {
        console.error(error)
        res.status(404).send()
    });
})

/**
 * @swagger
 * /products:
 *    post:
 *      description: list of suggestions on provided text for data product search functionality
 *      parameters:
 *        - in: body
 *          name: query.prefix.tag
 *          description: prefix
 *          schema:
 *            type: string
 *      responses:
 *        '200':
 *          description: Successfully provided list
 *        '500':
 *          description: Internal server error
 */
app.post('/suggestions', (req, res) => {
    console.log("POST: /suggestions")
    console.log(req.body)
    var raw = JSON.stringify({"query":{"prefix":{"tags.text":req.body.query?.prefix.tag}}});
    fetch(elasticUrl, {
        method: 'POST',
        headers: {
            "Authorization": `Basic ${elasticToken}`,
            "Content-Type": "application/json",
        },
        body: raw,
        redirect: 'follow'
     })
    .then(response => response.text())
    .then(result => {
        var json = JSON.parse(result)
        let suggestionArray = []
        json.hits.hits.map((x) => {
            if(suggestionArray.length==0 || suggestionArray.some((item) => x._source.tags.some((insideTag) => insideTag.text!=item.tag))){
                suggestionArray.push({tag: x._source.tags.filter((tagObject) => (tagObject.text.toLowerCase().startsWith(req.body.query?.prefix.tag)))[0].text, id: x._source.id})
            }
        })
        res.status(200).json(suggestionArray)
    })
    .catch(error => {
        console.error(error)
        res.status(404).send()
    });
})

/**
 * @swagger
 * /products:
 *    post:
 *      description: Product publication (see parameters in database definition)
 *      parameters:
 *        - in: body
 *          name: product
 *          description: The object of the new product.
 *          schema:
 *            type: object
 *      responses:
 *        '200':
 *          description: Successfully created product
 *        '500':
 *          description: Internal server error
 */
app.post('/products', authorization.authentication, async (req, res) => {

    const userId = req.authorization.subject

    console.log("POST: /products")
    console.log(req.body)

    const date = (new Date(Date.now())).toISOString()

    const newProduct = req.body

    newProduct.created = date
    const userInfo = (await dbCommunication.getUserCredentialById(userId)).registrationInfo
    newProduct.owner = `${userInfo.firstName} ${userInfo.givenName}`
    newProduct.updated = date
    newProduct.ownerId = userId
    newProduct.imageUrl = "https://kraken-img.s3.amazonaws.com/kraken-img.jpeg" // to update
    newProduct.streams = []
    newProduct.description = "description"
    newProduct.shortDescription = "short description"
    newProduct.sector = "Health and wellness"
    newProduct.category = "Diploma"
    newProduct.university = "TU Graz"
    newProduct.studyProgram = "Bachelor"
    newProduct.course = "Geodesy"

    newProduct.policies = {
        personalData: false,
        sensitiveData: false,
        personalDataOfOthers: false,
        inclPersonalInfo: false,
        hasconsent: false,
        protectionType: "Encryption",
        secondUseConsent: false,
        recipientType: [],
        transferToCountry: "false",
        storagePeriod: 20,
        approvedOrgs: [],
    }

    console.log("REQUEST:")
    console.log(newProduct)

    if(blockchain){
        console.log('Submit CreateProduct Transaction on the Permissioning blockchain')
        const blockchainProduct = {
            name: newProduct.name,
            price: newProduct.pricePerSecond,
            desc: newProduct.description,
            sector: newProduct.sector,
            policy: {
                inclPersonalInfo: false,
                hasconsent: false,
                purposes: ['marketing'],//'marketing', 'publicly_funded_research', 'managment', 'private_research', 'automated', 'study_recommendations', 'job_offers', 'statistical_research'
                protectionType: "Encryption", //newProduct.type === "STREAMS" ? "Encryption" : "",
                secondUseConsent: false,
                recipientType: ['public_hospitals', 'private_hospitals'],
                transferToCountry: "false",
                storagePeriod: 10,
                approvedOrgs: [''],
                approvedUsers: newProduct.policies.approvedUsers,
            },
            productType: newProduct.type,
        }
        console.log(blockchainProduct)
        console.log('createProduct')
        console.log('USERID ', userId)
        blcCommunication.createProduct(userId, blockchainProduct)
            .then( id => {
                newProduct.id = id.toString()
                console.log('ID ', id)
                console.log("FINAL:")
                console.log(newProduct)
                dbCommunication.storeProduct(newProduct).then((data) => res.status(200).json(data))
                .catch(err => {
                    console.error(err)
                    res.status(500).send()
                })
            })
    }
    else{
        newProduct.id = makeId()
        dbCommunication.storeProduct(newProduct).then( (data) => res.status(200).json(data) )
        .catch(err => {
            console.error(err)
            res.status(500).send()
        })
    }
})

const getProductAuthMiddleware = (req, res, next) => {
    dbCommunication.getProduct(req.params.id).then( (data) => {
        req.product = data._doc
        if (req.product.state == "DEPLOYED"){
            console.log("no authorization needed")
            const {_id, __v, ...product} = req.product
            // req.product = product
            res.status(200).json(req.product)
        } else{
         next()
        }
    })
    .catch(err => {
        console.error(err)
        res.status(404).send()
    })
}

/**
 * @swagger
 * /products/{id}:
 *    get:
 *      description: Request specific product
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: Alphanumeric ID of the product to get
 *      responses:
 *        '200':
 *          description: Successfully provided product
 *        '403':
 *          description: User not authorised
 */
app.get('/products/:id', [getProductAuthMiddleware, authorization.authentication], (req, res) => {
    const userId = req.authorization.subject
    const {ownerId, _id, __v, ...product} = req.product
    console.log("user ", userId, "trying to access ", req.product)
    if (userId == ownerId){
        console.log("user authorized")
        res.status(200).json(product)
    } else {
        console.log("user not authorized")
        res.status(403).send()
    }
})

const extractPurposes = (policies) => {
    const translations = {
        marketing: "marketing",
        managment: "managment",
        publicly_funded_research: "publicly_funded_research",
        automated: "automated",
        private_research: "private_research",
        study_recommendations: "study_recommendations",
        job_offers: "job_offers",
        statistical_research: "statistical_research"
    }
    const ret = []
    for (const key in policies){
        if(translations[key] && policies[key])
            ret.push(translations[key])
    }
    return ret
}

/**
 * @swagger
 * /products/{id}:
 *    put:
 *      description: Product publication (see parameters in database definition)
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: Alphanumeric ID of the product to get
 *        - in: body
 *          name: product
 *          description: The object of the new product.
 *          schema:
 *            type: object
 *      responses:
 *        '200':
 *          description: Successfully created product
 *        '500':
 *          description: Internal server error
 */
app.put('/products/:id', authorization.authentication, async (req, res) => { // TO DO GENERAL SECURITY CHECK
    console.log("PUT product id: ", req.params.id)
    console.log("body: ", req.body)

    const userId = req.authorization.subject
    const newProduct = req.body
    dbCommunication.getProduct(req.params.id).then(async (oldProduct) => {
        if(userId != oldProduct.ownerId){
            res.status(403).send()
        } else {
            // user is authorized
            try{
                if (blockchain){
                    const extractedPurposes = extractPurposes(newProduct.purposes)
                    const automatedConsequences = newProduct.automatedConsequences

                    const blockchainProduct = {
                        id: newProduct.id,
                        name: newProduct.name,
                        price: Number(newProduct.pricePerSecond),
                        desc: newProduct.description,
                        sector: newProduct.sector,
                        policy: {
                            inclPersonalInfo: newProduct.policies.personalData,
                            hasconsent: newProduct.policies.personalDataOfOthers,
                            purposes: extractedPurposes,
                            protectionType: newProduct.policies.protectionType,
                            secondUseConsent: newProduct.policies.secondUseConsent,
                            recipientType: newProduct.policies.recipientType,
                            transferToCountry: newProduct.policies.transferToCountry,
                            storagePeriod: Number(newProduct.policies.storagePeriod),
                            ...(extractedPurposes.includes('automated') && {automated: Object.keys(automatedConsequences).map((key) => (key) ) }),
                            approvedOrgs: (newProduct.type == "BATCH" || newProduct.type == "STREAMS") && newProduct.sector == "Health and wellness" ? ['dc8088314f61ffe9d18909608e1a3ef35cf179817a3ae0b8a6c30ebc4a1f0dd8'] : [] ,
                            approvedUsers: newProduct.policies.approvedUsers
                        },
                        productType: newProduct.type
                    }
                    console.log('BLOCKCHAIN PRODUCT ', blockchainProduct)
                    try{
                        console.log('updateProduct')
                        await blcCommunication.updateProduct(userId, blockchainProduct)
                    }catch(err){
                        console.log(err)
                        res.status(500).send()
                    }
                }
                if(mpc && newProduct.datasetInfo && newProduct.datasetInfo.keyShares && newProduct.datasetInfo.datasetUrl && newProduct.type === "BATCH"){
                    await mpcCommunication.uploadKeyShares(newProduct.id, newProduct.datasetInfo.keyShares)
                    console.log('KEY SHARES ', newProduct.datasetInfo.keyShares)
                }
            } catch(err){
                console.log(err)
                res.status(500).send()
            }
            dbCommunication.updateProduct(newProduct).then((data) => res.status(200).json(data)).catch(err => res.status(500).send(err)) // before it was req.body
        }
    }).catch((err) => {
        console.log(err)
        res.status(404).send()
    })
})
/**
 * @swagger
 * /products/{id}/streams:
 *    get:
 *      description: Request specific product's streams
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: Alphanumeric ID of the product to get
 *      responses:
 *        '200':
 *          description: Successfully provided product
 */
app.get('/products/:id/streams', (req, res) => {
    console.log("GET: product streams, id:")
    console.log(req.params.id)

    res.status(200).json([])
})

/**
 * @swagger
 * /products/{id}/keyRequest:
 *    post:
 *      description: Batch data product key request
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: Alphanumeric ID of the product to get
 *        - in: body
 *          name: subscriber key
 *          description: Aggregation key and public key of the subscriber.
 *          schema:
 *            type: object
 *            required:
 *              - aggregationKey
 *              - subscriberPubKey
 *            properties:
 *              aggregationKey:
 *                type: string
 *              subscriberPubKey:
 *                type: string
 *      responses:
 *        '200':
 *          description: Successfully provided key
 *        '404':
 *          description: Product not found
 *        '500':
 *          description: Internal server error
 */
app.post('/products/:id/keyRequest', authorization.authentication, async (req, res) => {
    console.log("POST product key request id: ", req.params.id)
    console.log("body: ", req.body)

    const userId = req.authorization.subject
    if(mpc){
        dbCommunication.getValidSubscription(userId, req.params.id).then(() => {
            mpcCommunication.keyRequest(req.params.id, req.body.aggregationKey, req.body.subscriberPubKey).then(async (responses) => {
                console.log("received responses: ", responses)
                const key = JSON.parse(responses[0].Body).KeyResult
                if(blockchain){
                    try{
                        const transactionId = (await dbCommunication.getAccessEligibility(userId, req.params.id)).transactionId
                        console.log('declareBuyerAccess keyrequest')
                        await blcCommunication.declareBuyerAccess(transactionId)
                    } catch(err){
                        console.log(err)
                        res.status(500).send()
                    }
                }
                res.status(200).send(key)
            })
            .catch(err => {
                console.error(err)
                res.status(500).send()
            })
        }).catch((err) => {
            console.log(err)
            res.status(404).send()
        })
    }
    else{
        res.status(500).json({msg: "Internal server error, contact administrator"})
    }
})
/**
 * @swagger
 * /products/computation:
 *    post:
 *      description: Request computation for multiple analytics products
 *      parameters:
 *        - in: body
 *          name: productIds
 *          description: Array of product ids to perform computation on
 *          schema:
 *            type: array
 *        - in: body
 *          name: subscriberPubKey
 *          description: public key
 *          schema:
 *            type: string
 *      responses:
 *        '200':
 *          description: Successfully executed computation and updated subscription database
 *        '500':
 *          description: Error during performing mpc computation
 *        '403':
 *          description: There is a problem with subscriptions
 *        '404':
 *          description: Problem with dataset urls
 */
app.post('/products/computation', authorization.authentication, async (req, res) => {
    console.log("body: ", req.body)
    console.log("POST analytics product computation id: ", req.body.productId)

    const userId = req.authorization.subject
    const productIds = req.body.productId;
    dbCommunication.getProductsByIdList(productIds).then((products) => {
        if(mpc){
            dbCommunication.getValidAnalyticsSubscriptions(userId, productIds).then((subscriptions) => {
                console.log('subscriptions')
                console.log(subscriptions.length)
                console.log('consumed')
                if(subscriptions.length != 0 && subscriptions.filter((subscription) => subscription.consumed).length == 0){
                    console.log('4')
                    let productsString = ''
                    let productsIdsString = ''
                    console.log(products)
                    products.forEach((product) => {
                        productsString += product.datasetInfo.datasetUrl + ' '
                        productsIdsString += product.id + ','.replace(/,\s*$/, "")
                    })
                    productsString = productsString.substring(0, productsString.length - 1)
                    console.log(productsString)
                    mpcCommunication.analyticsComputation(productsString, req.body.subscriberPubKey, productsIdsString).then(async (responses) => {
                        console.log("received responses: ", responses)
                        if(blockchain){
                            try{
                                productIds.forEach(async (productId) => {
                                    const transaction = await dbCommunication.getAccessEligibility(userId, productId)
                                    const transactionId = transaction.transactionId
                                    console.log('declareBuyerAccess computation')
                                    await blcCommunication.declareBuyerAccess(transactionId)
                                })
                            } catch(err){
                                console.log(err)
                                res.status(500).send()
                            }
                        }
                        dbCommunication.updateSubscriptions(subscriptions).then(()=>res.status(200).send(responses))
                    }).catch(err => {
                        console.error(err)
                        res.status(500).send()
                    })
                } else {
                    if(subscriptions.length == 0){
                        res.status(403).send({msg:'There are no subscriptions for these products' })
                    } else {
                        res.status(403).send({msg:'Some products already have been consumed. Requests for following products are not consumed yet', productIds: subscriptions.filter((subscription) => !subscription.consumed).map(((subscription) => subscription.product.id))})
                    }
                }
            }).catch((err) => {
                console.log(err)
                res.status(404).send()
            })
        }else{
            res.status(500).json({msg: "Internal server error, contact administrator"})
        }
    })
})

/**
 * @swagger
 * /products/{id}/deployFree:
 *    post:
 *      description: Free Data product publication
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: Alphanumeric ID of the product to get
 *      responses:
 *        '200':
 *          description: Successfully published
 *        '404':
 *          description: Product not found
 *        '500':
 *          description: Internal server error
 */
app.post('/products/:id/deployFree', authorization.authentication, (req, res) => {
    const userId = req.authorization.subject
    console.log("POST product deployFree id: ", req.params.id)

    dbCommunication.getProductOwnerId(req.params.id).then((productOwnerId) => {
        if(productOwnerId != userId){
            res.status(403).send()
        } else {
            // user is authorized
            dbCommunication.updateProduct({id: req.params.id, state: "DEPLOYED"})
            .then( (product) => res.status(200).json(product) )
            .catch( (err) => {
                console.error(err)
                res.status(500).send()
            })
        }
    }).catch((err) => {
        console.error(err)
        res.status(404).send()
    })
})

/**
 * @swagger
 * /products/{id}/setDeploying:
 *    post:
 *      description: Set data product in deploying state
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: Alphanumeric ID of the product to get
 *      responses:
 *        '200':
 *          description: Successfully set in deploying
 *        '404':
 *          description: Product not found
 *        '500':
 *          description: Internal server error
 */
app.post('/products/:id/setDeploying', authorization.authentication, (req, res) => {
    const userId = req.authorization.subject
    console.log("POST product setDeploying id: ", req.params.id)

    dbCommunication.getProductOwnerId(req.params.id).then((productOwnerId) => {
        if(productOwnerId != userId){
            res.status(403).send()
        } else {
            // user is authorized
            dbCommunication.updateProduct({id: req.params.id, state: "DEPLOYING"})
            .then( (product) => res.status(200).json(product) )
            .catch( (err) => {
                console.error(err)
                res.status(500).send()
            })
        }
    }).catch((err) => {
        console.error(err)
        res.status(404).send()
    })
})

/**
 * @swagger
 * /products/{id}/setDeployed:
 *    post:
 *      description: Paid data product publication
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: Alphanumeric ID of the product to get
 *      responses:
 *        '200':
 *          description: Successfully published
 *        '404':
 *          description: Product not found
 *        '500':
 *          description: Internal server error
 */
app.post('/products/:id/setDeployed', authorization.authentication, (req, res) => {
    const userId = req.authorization.subject
    console.log("POST product setDeployed id: ", req.params.id)

    dbCommunication.getProduct(req.params.id).then((product) => {
        if(userId != "watcher"){
            res.status(403).send()
        } else {
            // user is authorized
            dbCommunication.updateProduct({id: req.params.id, state: "DEPLOYED"})
            .then( (product) => res.status(200).json(product) )
            .catch( (err) => {
                console.error(err)
                res.status(500).send()
            })
        }
    }).catch((err) => {
        console.error(err)
        res.status(404).send()
    })
})

const purposesTranslator = (purposes) => {
    const translations = {
        marketing: "Marketing",
        managment: "Business",
        publicly_funded_research: "PubliclyFundedResearch",
        automated: "AutomatedDecisionMaking",
        private_research: "PrivateResearch",
        study_recommendations: "study_recommendations",
        job_offers: "job_offers",
        statistical_research: "statistical_research"
    }
    const ret = []
    purposes.forEach((el) => ret.push(translations[el]))
    return ret
}

/**
 * @swagger
 * /products/{id}/stateEligibleBuyer:
 *    post:
 *      description: Request eligibility to purchase a data product
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: Alphanumeric ID of the product to get
 *        - in: body
 *          name: purposes
 *          description: Purposes stated by the data consumer to consume a data product.
 *          schema:
 *            type: object
 *            required:
 *              - purposes
 *            properties:
 *              purposes:
 *                type: object
 *                properties:
 *                  purposes:
 *                    type: object
 *      responses:
 *        '200':
 *          description: Success
 *        '404':
 *          description: Product not found
 *        '500':
 *          description: Internal server error
 */
app.post('/products/:id/stateEligibleBuyer', authorization.authentication, async (req, res) => {
    const userId = req.authorization.subject
    console.log("POST product buyer eligibility check, id: ", req.params.id)
    console.log("body: ", req.body)

    dbCommunication.getProduct(req.params.id).then(async (product) => {
        if(product.state != "DEPLOYED"){
            res.status(404).send()
        } else {
            try{
                if (blockchain) {
                    const purposes = {purposes: purposesTranslator(req.body.purposes.purposes ? req.body.purposes.purposes: [])}
                    result = await blcCommunication.eligibilityCheck(userId, req.params.id, purposes) // no need for await as it's not a promise
                    console.log(result)
                    if (typeof result == "string"){
                        if(result == "not eligible"){
                            res.status(500).send('not eligible')
                        } else {
                            await dbCommunication.storeAccessEligibility({
                                userId: userId,
                                address: req.body.address,
                                transactionId: result,
                                product: await dbCommunication.getProduct(req.params.id)
                            })
                            res.status(200).send('eligible')
                        }
                    } else {
                        console.log("typeof is not a string")
                        res.status(500).send()
                    }
                } else {
                    await dbCommunication.storeAccessEligibility({
                        userId: userId,
                        address: req.body.address,
                        transactionId: "no need for this",
                        product: await dbCommunication.getProduct(req.params.id)
                    })
                    res.status(200).json('eligible')
                }
            } catch(err){
                console.log(err)
                res.status(500).send(err)
            }
        }
    }).catch((err) => {
        console.error(err)
        res.status(404).send()
    })
})

/**
 * @swagger
 * /subscriptions:
 *    post:
 *      description: Subscribe to a product
 *      parameters:
 *        - in: body
 *          name: subscription details
 *          description: Details needed for the subscription
 *          schema:
 *            type: object
 *            required:
 *              - address
 *              - product
 *              - endsAt
 *            properties:
 *              address:
 *                type: string
 *              product:
 *                type: string
 *              endsAt:
 *                type: number
 *      responses:
 *        '204':
 *          description: Success
 *        '404':
 *          description: Product not found
 *        '500':
 *          description: Internal server error
 */
app.post('/subscriptions', authorization.authentication, async (req, res) => {
    const userId = req.authorization.subject
    console.log("POST product subscription, body: ", req.body)

    if (userId == "watcher"){
        dbCommunication.getAccessEligibilityByAddress(req.body.address, req.body.product).then( async (accessEligibility) => {
            const date = (new Date(Date.now())).toISOString()
            const product = await dbCommunication.getProduct(req.body.product);
            const endsAt = (new Date(req.body.endsAt * 1000)).toISOString()
            const sub = {
                userId: accessEligibility.userId,
                address: req.body.address,
                dateCreated: date,
                lastUpdated: date,
                product: product,
            }
            if(product.type !== 'ANALYTICS'){
                sub.endsAt = endsAt
                sub.purposeOfUse = req.body.purposeOfUse,
                sub.automatedDecision = req.body.automatedDecision,
                sub.categoriesOfData = req.body.categoriesOfData,
                sub.countryToTransfer = req.body.countryToTransfer,
                sub.safeguards = req.body.safeguards,
                sub.period = req.body.period
            }
            if(product.type !== 'ANALYTICS' && product.priceCurrency === 'EUR'){
                sub.pending = true
            }
            if(product.type !== 'ANALYTICS' && product.priceCurrency === 'DATA'){
                sub.pending = false
            }
            for (let i = 0; i < product.streams.length; i++) {
                const streamId = product.streams[i]
                const permission = {
                    user: req.body.address,
                    permissions: [
                        StreamPermission.SUBSCRIBE,
                    ],
                }
                await streamrClient.grantPermissions(streamId, permission)
            }
            if(product.type !== 'ANALYTICS'){
                sub.endsAt = endsAt
            }
            if(blockchain){
                console.log('declareBuyerPayment')
                console.log(accessEligibility.transactionId)
                await blcCommunication.declareBuyerPayment(accessEligibility.transactionId)
            }
            dbCommunication.storeSubscription(sub).then(()=>res.status(204).send())
        })
        .catch((err) => {
            console.error(err)
            res.status(404).send()
        })
    } else {
        dbCommunication.getProduct(req.body.product).then((product) => {

            if(product.state == "DEPLOYED" && product.priceCurrency === 'EUR'){
                dbCommunication.getAccessEligibility(userId, req.body.product).then(async (accessEligibility) => {
                    const date = (new Date(Date.now())).toISOString()
                    const endsAt = (new Date(req.body.endsAt * 1000)).toISOString()
                    const sub = {
                        userId: userId,
                        address: req.body.address,
                        endsAt: endsAt,
                        dateCreated: date,
                        lastUpdated: date,
                        product: product,
                        pending: req.body.pending,
                        purposeOfUse: req.body.purposeOfUse,
                        automatedDecision: req.body.automatedDecision,
                        categoriesOfData: req.body.categoriesOfData,
                        countryToTransfer: req.body.countryToTransfer,
                        safeguards: req.body.safeguards,
                        timeAndPrice:  req.body.timeAndPrice,
                        period: req.body.period
                    }
                    product.streams.forEach(async (streamId) => {
                        await streamrClient.grantPermissions({
                            user: req.body.address,
                            permissions: [
                                StreamPermission.SUBSCIBE,
                            ],
                        })
                    })
                    if(blockchain){
                        try{
                            await blcCommunication.declareBuyerPayment(accessEligibility.transactionId)
                        } catch(err) {
                            console.error(err)
                            res.status(500).send()
                        }
                    }
                    dbCommunication.storeSubscription(sub).then(()=>res.status(204).send()).catch(err => res.status(500).send(err))
                })
                .catch((err) => {
                    console.error(err)
                    res.status(404).send()
                })

            } else if(product.state == "DEPLOYED" && product.price == 0){
                dbCommunication.getAccessEligibility(userId, req.body.product).then(async (accessEligibility) => {
                    const date = (new Date(Date.now())).toISOString()
                    const endsAt = (new Date(req.body.endsAt * 1000)).toISOString()
                    const sub = {
                        userId: userId,
                        address: req.body.address,
                        endsAt: endsAt,
                        dateCreated: date,
                        lastUpdated: date,
                        product: product,
                        pending: false,
                        purposeOfUse: req.body.purposeOfUse,
                        automatedDecision: req.body.automatedDecision,
                        categoriesOfData: req.body.categoriesOfData,
                        countryToTransfer: req.body.countryToTransfer,
                        safeguards: req.body.safeguards,
                        timeAndPrice:  req.body.timeAndPrice,
                    }
                    product.streams.forEach(async (streamId) => {
                        await streamrClient.grantPermissions({
                            user: req.body.address,
                            permissions: [
                                StreamPermission.SUBSCIBE,
                            ],
                        })
                    })
                    if(blockchain){
                        try{
                            await blcCommunication.declareBuyerPayment(accessEligibility.transactionId)
                        } catch(err) {
                            console.error(err)
                            res.status(500).send()
                        }
                    }
                    dbCommunication.storeSubscription(sub).then(()=>res.status(204).send()).catch(err => res.status(500).send(err))
                })
                .catch((err) => {
                    console.error(err)
                    res.status(404).send()
                })
            } else {
                res.status(404).send()
            }
        })
        .catch((err) => {
            console.error(err)
            res.status(404).send()
        })
    }
})

/**
 * @swagger
 * /subscriptions:
 *    get:
 *      description: Request user's subscriptions
 *      responses:
 *        '200':
 *          description: Successfully provided subscriptions
 *        '500':
 *          description: Internal server error
 */
app.get('/subscriptions', authorization.authentication, async (req, res) => {
    const userId = req.authorization.subject
    console.log("GET user subscriptions")

    dbCommunication.getUserSubscriptions(userId).then((subscriptions) => {
        res.status(200).json(subscriptions)
    })
    .catch(err => {
        console.error(err)
        res.status(500).send()
    })
})


/**
 * @swagger
 * /subscriptions/{id}:
 *    get:
 *      description: get subscriptions by product id
 *      responses:
 *        '200':
 *          description: Successfully provided subscriptions
 *        '500':
 *          description: Internal server error
 */
app.get('/subscriptions/:id', authorization.authentication, async (req, res) => {
    const productId = req.params.id
    console.log("GET product subscriptions")

    dbCommunication.getValidProductSubscriptions(productId).then((subscriptions) => {
        res.status(200).json(subscriptions)
    })
    .catch(err => {
        console.error(err)
        res.status(500).send()
    })
})


app.get('/fiatsubscriptions', authorization.authentication, async (req, res) => {
    const userId = req.authorization.subject
    console.log("GET product subscriptions")

    dbCommunication.getFiatProductSubscriptions(userId).then((subscriptions) => {
        res.status(200).json(subscriptions)
    })
    .catch(err => {
        console.error(err)
        res.status(500).send()
    })
})

/**
 * @swagger
 * /products/:id/permissions/me:
 *    get:
 *      description: Request user's permissions on specific product
 *      responses:
 *        '200':
 *          description: Successfully provided permissions
 */
app.get('/products/:id/permissions/me', (req, res) => {
    console.log("GET: permissions, id:")
    res.status(200).json(
        [
            {
            id: 703524818,
            user: '0x4d2cfd0f1a60f57ab39b9e4d93fbe37820563034',
            operation: 'product_get'
            },
            {
            id: 703524819,
            user: '0x4d2cfd0f1a60f57ab39b9e4d93fbe37820563034',
            operation: 'product_edit'
            },
            {
            id: 703524820,
            user: '0x4d2cfd0f1a60f57ab39b9e4d93fbe37820563034',
            operation: 'product_delete'
            },
            {
            id: 703524821,
            user: '0x4d2cfd0f1a60f57ab39b9e4d93fbe37820563034',
            operation: 'product_share'
            }
        ]
    )
})

/**
 * @swagger
 * /users/me:
 *    get:
 *      description: Request user's registration info
 *      responses:
 *        '200':
 *          description: Successfully provided info
 */
app.get('/users/me', authorization.authentication, (req, res) => {
    dbCommunication.getUserCredentialById(req.authorization.subject).then((user) => {
        console.log("GET/users/me: ", user)
        res.status(200).json({
            name: `${user.registrationInfo.firstName} ${user.registrationInfo.givenName}`,
            username: user.registrationInfo.email,
            imageUrlSmall: null,
            imageUrlLarge: null,
            lastLogin: req.authorization.lastLogin,
            email: user.registrationInfo.email,
            institutionalAffiliation: user.registrationInfo.institutionalAffiliation,
            countryOfResidence: user.registrationInfo.countryOfResidence,
            over18: user.registrationInfo.over18,
            privatelyContacted: user.registrationInfo.privatelyContacted,
            institution: user.registrationInfo.institution,
            typeOfInstitution: user.registrationInfo.typeOfInstitution,
            legalSurname: user.registrationInfo.legalSurname,
            legalName: user.registrationInfo.legalName,
            officerEmail: user.registrationInfo.officerEmail,
            fiatPayment: user.registrationInfo.fiatPayment,
            invoicingName: user.registrationInfo.invoicingName,
            invoicingAddress: user.registrationInfo.invoicingAddress,
            invoicingZipCode: user.registrationInfo.invoicingZipCode,
            invoicingCountry: user.registrationInfo.invoicingCountry,
            paymentInstructions: user.registrationInfo.paymentInstructions
        })
    })
})

/**
 * @swagger
 * /users/:id/productSeller:
 *    get:
 *      description: get User by id
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: Id of the seller user id
 *      responses:
 *        '200':
 *          description: Successfully provided info
 *        '400':
 *          description: Bad Request
 */
app.get('/users/:id/productSeller', authorization.authentication, (req, res) => {
        const sellerId = req.params.id
         dbCommunication.getUserCredentialById(sellerId)
         .then((user) => res.status(200).json({
            name: `${user.registrationInfo.firstName} ${user.registrationInfo.givenName}`,
            username: user.registrationInfo.email,
            email: user.registrationInfo.email,
            institutionalAffiliation: user.registrationInfo.institutionalAffiliation,
            countryOfResidence: user.registrationInfo.countryOfResidence,
            privatelyContacted: user.registrationInfo.privatelyContacted,
            institution: user.registrationInfo.institution,
            typeOfInstitution: user.registrationInfo.typeOfInstitution,
            legalSurname: user.registrationInfo.legalSurname,
            legalName: user.registrationInfo.legalName,
            officerEmail: user.registrationInfo.officerEmail,
            fiatPayment: user.registrationInfo.fiatPayment,
            invoicingName: user.registrationInfo.invoicingName,
            invoicingAddress: user.registrationInfo.invoicingAddress,
            invoicingZipCode: user.registrationInfo.invoicingZipCode,
            invoicingCountry: user.registrationInfo.invoicingCountry,
            paymentInstructions: user.registrationInfo.paymentInstructions
        }))
         .catch((err) => {
            console.error(err)
            res.status(400).send()
         })
})

app.get('/usersEmail/:email', authorization.authentication, (req, res) => {
    const email = req.params.email
    console.log('EMAIL: ', email)
    dbCommunication.getUserByEmail(email)
    .then((user) => {
        if(user){
           res.status(200).json(user._id)
        } else {
            res.status(200).json(false)
        }
        })
    .catch((err) => {
        console.error(err)
        res.status(400).send()
     })
})

/**
 * @swagger
 * /users/me/products:
 *    get:
 *      description: Request user's own products
 *      responses:
 *        '200':
 *          description: Successfully provided products
 *        '500':
 *          description: Internal server error
 */
app.get('/users/me/products', authorization.authentication, (req, res) => {
    const userId = req.authorization.subject
    dbCommunication.getUserProducts(userId).then((data) => {
        res.status(200).json(data)
    }).catch((err) => {
        console.error(err)
        res.status(500).send()
    })
})

app.get('/product/subscriptions', authorization.authentication, (req, res) => {
    const userId = req.authorization.subject
    dbCommunication.getSubscriptions().then((data) => {
        res.status(200).json(data)
    }).catch((err) => {
        console.error(err)
        res.status(500).send()
    })
})

app.get('/userSubscription/:id', authorization.authentication, (req, res) => {
    const userId = req.authorization.subject
    const productId = req.params.id
    console.log('PRODUCT ID ', productId)
    console.log('USERID ', userId)

    dbCommunication.getSubscription(userId, productId).then((data) => {
        res.status(200).json(data)
    }).catch((err) => {
        console.error(err)
        res.status(500).send()
    })
})

app.get('/pendingSubscriptions', authorization.authentication, (req, res) => {
    const userId = req.authorization.subject
    dbCommunication.getPendingSubscriptions().then((data) => {
        res.status(200).json(data)
    }).catch((err) => {
        console.error(err)
        res.status(500).send()
    })
})

/**
 * @swagger
 * /reencryption.wasm.gz:
 *    get:
 *      description: Request wasm file needed for Batch data product key encryption
 */
 app.get('/reencryption.wasm.gz', (req, res) => {
    console.log("GET: reencryption.wasm.gz")
    res.sendFile('./reencryption.wasm.gz', { root: __dirname })
})

/**
 * @swagger
 * /kraken_wasm.wasm:
 *    get:
 *      description: Request wasm file needed for Analytics data product dataset encryption
 */
app.get('/kraken_wasm.wasm', (req, res) => {
    console.log("GET: kraken_wasm.wasm")
    res.sendFile('./kraken_wasm.wasm', { root: __dirname })
})

/**
 * @swagger
 * /mpcNode1PubKey:
 *    get:
 *      description: Request public key of first MPC node
 */
 app.get('/mpcNode1PubKey', (req, res) => {
    console.log("GET: mpcNode1PubKey")
    res.sendFile('./node1_XLAB_hpre_mpc_pub.txt', { root: __dirname })
})

app.get('/mpcNode2PubKey', (req, res) => {
    console.log("GET: mpcNode2PubKey")
    res.sendFile('./node2_TX_hpre_mpc_pubtxt.txt', { root: __dirname })
})

app.get('/mpcNode3PubKey', (req, res) => {
    console.log("GET: mpcNode3PubKey")
    res.sendFile('./node3_ATOS_hpre_mpc_pub.txt', { root: __dirname })
})

app.get('/mpcNode1PubKeyAnalytics', (req, res) => {
    console.log("GET: mpcNode1PubKeyAnalytics")
    res.sendFile('./node1_XLAB_pub.txt', { root: __dirname })
})

app.get('/mpcNode2PubKeyAnalytics', (req, res) => {
    console.log("GET: mpcNode2PubKeyAnalytics")
    res.sendFile('./node2_TX_pub.txt', { root: __dirname })
})

app.get('/mpcNode3PubKeyAnalytics', (req, res) => {
    console.log("GET: mpcNode3PubKeyAnalytics")
    res.sendFile('./node3_ATOS_pub.txt', { root: __dirname })
})

app.get('/proofKey2.txt', (req, res) => {
    console.log("GET: proofKey2.txt")
    res.sendFile('./proofKey2.txt', { root: __dirname })
})

const srv = http.createServer(app)
const invalidExitArg = 128
const signals = Object.freeze({
    'SIGINT': 2,
    'SIGTERM': 15,
})
Object.keys(signals).forEach((signal) => {
    process.on(signal, () => {
        srv.close()
        const exitCode = invalidExitArg + signals[signal]
        process.exit(exitCode)
    })
})
srv.listen(port, "0.0.0.0", () => {
    console.log(`KRAKEN backend listening at http://localhost:${port}`)
})

module.exports = app