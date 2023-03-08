const fetch = require("node-fetch")
const mongoose = require('mongoose')

const mongoDB = process.env.NODE_ENV === 'test' 
    ? process.env.TEST_DB_ACCESS_CREDENTIALS
    : process.env.DB_ACCESS_CREDENTIALS
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const PendingChanges = new mongoose.Schema({
    adminFee: Number,
    requiresWhitelist: Boolean,
})
const TermsOfUse = new mongoose.Schema({
    commercialUse: Boolean,
    redistribution: Boolean,
    reselling: Boolean,
    storage: Boolean,
    termsName: String,
    termsUrl: String,
})
const FileStructureAndFormats = new mongoose.Schema({
    filename: String,
    format: String,
    filesize: Number,
})

const Purposes = new mongoose.Schema({
    marketing: Boolean,
    publicly_funded_research: Boolean,
    private_research: Boolean,
    managment: Boolean,
    automated: Boolean,
    study_recommendations: Boolean,
    job_offers: Boolean,
    statistical_research: Boolean,
})

const AutomatedConsequences = new mongoose.Schema({
    automated_placing: Boolean,
    hiring_assessments: Boolean,
    clinical_risks_assessment: Boolean,
    diagnostic_or_treatment: Boolean,
})

const Policies =  new mongoose.Schema({
    hasconsent: Boolean,
    protectionType: String,
    secondUseConsent: Boolean,
    recipientType: [String],
    transferToCountry: String,
    storagePeriod: Number,
    whoCanAccessData: [String],
    personalData: Boolean,
    sensitiveData: Boolean,
    personalDataOfOthers: Boolean,
    marketing: Boolean,
    publicly_funded_research: Boolean,
    private_research: Boolean,
    managment: Boolean,
    automated: Boolean,
    approvedUsers:[String],
    approvedOrgs:[String],
})

const ContactDetails = new mongoose.Schema({
    url: String,
    email: String,
    social1: String,
    social2: String,
    social3: String,
    social4: String,
})
const checkOntologyFunc = (tag) => {
    return fetch(`https://id.nlm.nih.gov/mesh/lookup/term?label=${encodeURIComponent(tag.text)}&match=exact&limit=1`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((response) => (response.json()))
        .then(
            (json) => (json.length > 0 ? true : false),
            (error) => (console.log(error)),
        )
}

const DatasetInfo = new mongoose.Schema({
    keyShares: [String],
    datasetUrl: String,
    randomNonce: String,
    publisherPubKey: String,
    fileName: String
})

const DataUnionDetails = new mongoose.Schema({
    members: [String],
    joinRequests: [String],
    adminId: String,
})

const SharingCountries = new mongoose.Schema({
    euCountries: Boolean,
    thirdCountries: Boolean,
    allOther: Boolean
})

const ProductSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    id: {type: String, required: true},
    owner: String,
    ownerId: {type: String, required: true},
    ownerAddress: String,
    beneficiaryAddress: String,
    adminFee: {type: Number, default: 0, min: 0},
    name: {type: String, default: "NEW KRAKEN PRODUCT"},
    description: String,
    shortDescription: String,
    university: String,
    studyProgram: String,
    course: String,
    tags: {
        type: [],
        validate: {
          validator: function(tags) {
             return Promise.all(tags.map(checkOntologyFunc)).then(data => !data.includes(false))
          },
          message: props => `${props.value} contains tag which is not part of ontology API`,
        },
    },
    formats: FileStructureAndFormats,
    imageUrl: String,
    newImageToUpload: Object,
    thumbnailUrl: String,
    state: {type: String, default: "NOT_DEPLOYED", enum: ["NOT_DEPLOYED", "DEPLOYING", "DEPLOYED"]},
    created: Date,
    updated: {
        type: Date,
        required: (d) => ( d > this.created )
    },
    category: String,
    streams: [],
    previewStream: Object,
    previewConfigJson: String,
    minimumSubscriptionInSeconds: {type: Number, default: 0, min: 0},
    pricePerSecond: {type: Number, default: 0, min: 0},
    priceCurrency: {type: String, default: "DATA", enum: ["DATA", "EUR"]},
    timeUnit: {type: String, default: "hour", enum: ["hour", "day", "month", "year"]},
    price: String,
    isFree: Boolean,
    type: {
        type: String, 
        default: "BATCH", 
        enum: ["BATCH", "ANALYTICS", "STREAMS"],
        validate: {
            validator: function(type) {
                if (type === "BATCH") {
                    return this.datasetInfo && !!this.datasetInfo.datasetUrl && !!this.datasetInfo.randomNonce && !!this.datasetInfo.publisherPubKey && this.datasetInfo.keyShares.length > 0
                } else if(type === "ANALYTICS"){
                    return this.datasetInfo && !!this.datasetInfo.datasetUrl
                }
            },
            message: props => `Object doesn't contain neccessary fields for ${props.value} data type`,
          },
    },
    sector: String,
    anonymizeDataset: Boolean,
    requiresWhitelist: Boolean,
    pendingChanges: PendingChanges,
    termsOfUse: TermsOfUse,
    contact: ContactDetails,
    policies: Policies,
    datasetInfo: DatasetInfo,
    dataUnionDetails: DataUnionDetails,
    dataShareCountries: SharingCountries,
    columnVariables: [String],
    numberOfRecords: Number,
    purposes: Purposes,
    automatedConsequences: AutomatedConsequences
  })
const ProductModel = mongoose.model('ProductModel', ProductSchema)

ProductSchema.path('type').validate(function (type) {
    if(type === "ANALYTICS" && this.purposes){
        return false;
    }
  }, 'purposes field cannot be part of analytics product');


const PurposeOfUse = new mongoose.Schema({
    marketing: Boolean,
    publicly_funded_research: Boolean,
    private_research: Boolean,
    managment: Boolean,
    automated: Boolean,
    study_recommendations: Boolean,
    job_offers: Boolean,
    statistical_research: Boolean,
})

const AutomatedDecision = new mongoose.Schema({
    clinical_risks_assessment: Boolean,
    diagnostic_or_treatment: Boolean,
    hiring_assessments: Boolean,
    automated_placing: Boolean,
})


const CategoriesOfData = new mongoose.Schema({
    patients_medical_records: Boolean,
    genetic_data: Boolean,
    imaging_data: Boolean,
    mobile_data: Boolean,
    grades: Boolean,
    diplomas: Boolean,
    matriculation:  Boolean
})

const CountryToTransfer = new mongoose.Schema({
    EUCountry: Boolean,
    nonEU: Boolean,
    nonEUCountry: String,
    noAdeqDecision: Boolean,
    noAdeqDecisionCountry: String,
})

const Period = new mongoose.Schema({
    period: String,
    periodNumber: Number,
})


const SubscriptionSchema = new mongoose.Schema({
    consumed: {
        type: Boolean,
        default: false
    },
    pending: Boolean,
    userId: String,
    address: String,
    endsAt: Date,
    dateCreated: Date,
    lastUpdated: Date,
    product: ProductSchema,
    purposeOfUse: PurposeOfUse,
    automatedDecision: AutomatedDecision,
    categoriesOfData: CategoriesOfData,
    countryToTransfer: CountryToTransfer,
    safeguards: String,
    period: Period,
})

const SubscriptionModel = mongoose.model('SubscriptionModel', SubscriptionSchema)

SubscriptionSchema.path('endsAt').validate(function (endsAt) {
    if(endsAt !== null && this.product.type === "ANALYTICS"){
        return false;
    }
  }, 'endsAt field cannot be part of analytics product');


const AccessEligibilitySchema = new mongoose.Schema({
    userId: String,
    address: String,
    transactionId: String, // in case the blockchain is connected
    product: ProductSchema
})
const AccessEligibilityModel = mongoose.model('AccessEligibilityModel', AccessEligibilitySchema)

const DidConnectionSchema = new mongoose.Schema({
    state: {
        type: Number,
        enum: [0,1]
    },
    id: String,
    invitationID: String
})
const RegistrationInfoSchema = new mongoose.Schema({
    firstName: String,
    givenName: String,
    email: String,
    institutionalAffiliation: String,
    countryOfResidence: String,
    over18: String,
    privatelyContacted: String,
    institution: String,
    typeOfInstitution: String,
    legalSurname: String,
    legalName: String,
    officerEmail: String,
    fiatPayment: String,
    invoicingName: String,
    invoicingAddress: String,
    invoicingZipCode: String,
    invoicingCountry: String,
    paymentInstructions: String,
    privacyConsent: String,
    providerConsumerConsent: String,
    consent: String,
})
const UserCredentialSchema = new mongoose.Schema({
    _id: String,
    registrationInfo: RegistrationInfoSchema,
    didConnection: DidConnectionSchema,
    state: {
        type: Number,
        enum: [0,1]
    }
})

const UserCredentialModel = mongoose.model('UserCredentialModel', UserCredentialSchema)

const getProducts = () => ProductModel.find({state: "DEPLOYED"})
const storeProduct = (productInput) => {
    let newProduct = new ProductModel(productInput)
    newProduct._id = productInput.id
    return newProduct.save()
}
const getProduct = (id) => ProductModel.findOne({_id: id})
const getProductsByIdList = (ids) => ProductModel.find({'_id': { $in: ids} })
const getProductOwnerId = (id) => new Promise((resolve, reject) => {
    ProductModel.findOne({_id: id}, "ownerId")
    .then(data => resolve(data.ownerId))
    .catch(err => reject(err))
})
const getProductByBeneficiaryAddress = (beneficiaryAddress) => new Promise((resolve, reject) => {
    ProductModel.findOne({beneficiaryAddress: beneficiaryAddress})
        .then((p) => resolve(p))
        .catch((err) => reject(err))
})
const updateProduct = async (productInput) => {
    let dbProduct = await getProduct(productInput.id)
    Object.assign(dbProduct, productInput)
    return dbProduct.save()
}
const getUserProducts = (ownerId) => ProductModel.find({ownerId: ownerId})
const updateSubscriptions = (subscriptions) => SubscriptionModel.updateMany( {"_id": { $in: subscriptions.map((subscription) =>  subscription._id)}} ,{$set: { "consumed": true}})
const deleteProductById = (id) => ProductModel.deleteOne({"_id": id})
const deleteUserProducts = (ownerId) => ProductModel.deleteMany({ownerId: ownerId})
const storeSubscription = (subscription) => (new SubscriptionModel(subscription)).save()

// const getUserProductSubscriptions = SubscriptionModel.find({ 'userId': userId, 'product.priceCurrency': 'EUR' }, 'product');
const getSubscriptions = () => SubscriptionModel.find({pending: false})
const getPendingSubscriptions = () => SubscriptionModel.find({pending: true})
const getSubscription = (userId, productId) => SubscriptionModel.findOne({userId: userId, "product._id": productId})
const getValidSubscription = (userId, productId) => SubscriptionModel.findOne({userId: userId, "product._id": productId}).where('endsAt').gt(new Date())
const getValidSubscriptions = (userId, productIds) => SubscriptionModel.find({userId: userId, "product._id": { $in: productIds}}).where('endsAt').gt(new Date())
const getValidProductSubscriptions = (productIds) => SubscriptionModel.find({"product._id": { $in: productIds}, pending: false}).where('endsAt').gt(new Date())
const getFiatProductSubscriptions = (userId) => SubscriptionModel.find({"product.ownerId": userId , "product.priceCurrency": 'EUR'}).where('endsAt').gt(new Date())
const getValidAnalyticsSubscriptions = (userId, productIds) => SubscriptionModel.find({userId: userId, "product._id": { $in: productIds}}).where({ $or: [ { endsAt: { $exists:false } }, { endsAt: {$gt: new Date()} } ]})
const getUserSubscriptions = (userId) => SubscriptionModel.find({userId: userId})

const storeAccessEligibility = (accessEligibility) => (new AccessEligibilityModel(accessEligibility)).save()
const getAccessEligibility = (userId, productId) => AccessEligibilityModel.findOne({userId: userId, "product._id": productId})
const getAccessEligibilityByAddress = (address, productId) => AccessEligibilityModel.findOne({address: address, "product._id": productId})

const storeUserCredential = (userId, credential) => {
    let newCredential = new UserCredentialModel(credential)
    newCredential._id = userId
    return newCredential.save()
}
const getUserCredential = (connectionId) => UserCredentialModel.findOne({"didConnection.id": connectionId})
const getUserCredentialById = (id) => UserCredentialModel.findOne({"_id": id})
const getUserByEmail = (email) => UserCredentialModel.findOne({"registrationInfo.email": email})
const deleteUserCredentialById = (id) => UserCredentialModel.deleteOne({"_id": id})

module.exports = {
    ProductModel,
    getProducts,
    storeProduct,
    getProduct,
    getProductOwnerId,
    updateProduct,
    getPendingSubscriptions,
    getUserProducts,
    getProductsByIdList,
    getProductByBeneficiaryAddress,
    getValidSubscriptions,
    getFiatProductSubscriptions,
    getValidProductSubscriptions,
    getValidAnalyticsSubscriptions,
    deleteProductById,
    deleteUserProducts,

    updateSubscriptions,
    storeSubscription,
    getSubscriptions,
    getSubscription,
    getValidSubscription,
    getUserSubscriptions,

    storeAccessEligibility,
    getAccessEligibility,
    getAccessEligibilityByAddress,

    storeUserCredential,
    getUserCredential,
    getUserCredentialById,
    deleteUserCredentialById,
    getUserByEmail
}

// const Email = "email"
// const user = {
//     credentialID: String,
//     name: String,
//     surname: String,
//     email: Email,
//     isOrg: Boolean,
//     org: { // <== OPTIONAL
//         instType: String,
//         orgName: String,
//         dpoFirstName: String,
//         dpoLastName: String,
//         dpoEmail: Email,
//         active: Boolean
//     }
// }
