/**
 * Copyright Lynkeus 2020. All Rights Reserved.
 *
 * @file API for MongoDB interaction
 * @module libQuery
 * @author Alexandros Tragkas
 */
'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
const TYPE = 'Query';
/* Dependencies */
const _ = __importStar(require("lodash"));
const libUtil_1 = require("./libUtil");
/* Logging */
const logger = (0, libUtil_1.getLogger)(TYPE);
/**
 * @classdesc Implementation of queries to the Cache Database
 *
 * @class
 * */
class Query {
    /**
     * @constructor
     */
    constructor(offDB) {
        this.offchainDB = offDB;
    }
    /**
    * Get all agreements from DB
    *
    * @returns {Array} Array of Agreement Objects
    */
    async queryAgreements() {
        try {
            let res = await this.offchainDB.readAgreements();
            return res;
        }
        catch (e) {
            logger.error(e);
            throw e;
        }
    }
    /**
     * Get all users from DB
     *
     * @returns {Users[]} Array of User Objects
     */
    async queryUsers() {
        try {
            let res = await this.offchainDB.readUsers();
            return res;
        }
        catch (e) {
            logger.error(e);
            throw e;
        }
    }
    /**
     * Get specific user by ID from DB
     *
     * @returns {Agreement} The User
     */
    async queryUserByID(userID) {
        try {
            let data = await this.offchainDB.readUserData(userID);
            return data;
        }
        catch (e) {
            logger.error(e);
            throw e;
        }
    }
    /**
     * Get all products from DB
     *
     * @returns {Product[]} Array of Product Objects
     */
    async queryProducts() {
        try {
            let res = await this.offchainDB.readProducts();
            return res;
        }
        catch (e) {
            logger.error(e);
            throw e;
        }
    }
    /**
     * Get product details by ID from DB
     *
     * @param {String} productID The ID (hash) of the product
     * @returns {Product} The Product
     */
    async queryProductByID(productID) {
        try {
            let res = await this.offchainDB.readProductData(productID);
            return res;
        }
        catch (e) {
            logger.error(e);
            throw e;
        }
    }
    /**
     * Query products by User
     *
     * @param {String} userID The user's ID
     * @returns {Product[]} Array of Product Objects
     */
    async queryProductsByUser(userID) {
        try {
            let filter = { owner: userID };
            let res = await this.offchainDB.readProductsByFilter(filter);
            return res;
        }
        catch (e) {
            logger.error(e);
            throw e;
        }
    }
    /**
     * Get catalogue (All products + expiration date)
     *
     * @returns {Array} Array of Product Objects
     */
    async queryCatalogue() {
        try {
            let res = await this.offchainDB.readCatalogue();
            return res;
        }
        catch (e) {
            logger.error(e);
            throw e;
        }
    }
    /**
     * Match purposes buyer to policy
     *
     * @param {Array<string>} buyerPurpose Buyer's purposes of buying
     * @param {Array<string>} dataPurpose  Product's policy purposes
     * @returns {Boolean} True if purposes match, else false
     */
    matchPurpose(buyerPurpose, dataPurpose) {
        try {
            const result = !_.isEmpty(_.intersection(buyerPurpose, dataPurpose));
            return result;
        }
        catch (e) {
            logger.error(e);
            throw e;
        }
    }
    /**
     * Filtering algorithm
     *
     * @param {String} userID The ID of the user
     * @returns {Product[]} Array of Product Objects matched to purposes
     */
    async queryFilteredProducts(userID) {
        const method = 'queryFilteredProducts';
        logger.start(method);
        let filteredData = [];
        try {
            const buyer = await this.queryUserByID(userID);
            logger.debug('%s - ', method, buyer);
            // if (!buyer) {
            // 	throw new Error('User `${userID}` does not exist.')
            // } 
            if (buyer.isBuyer === false) {
                throw new Error('User is not a registered buyer');
            }
            // TODO: filter products with seller's certificate
            const products = await this.queryCatalogue();
            logger.debug('%s - Total Products Count: ', method, products.length);
            products.forEach((product, index) => {
                // Exclude owner
                if (product.owner === buyer.username) {
                    return;
                }
                // Exclude expired certificates
                else if (new Date(product.seller.validTo).getTime() < (new Date().getTime())) {
                    return;
                }
                // Add matched policy products to new array (Non blurred)
                else if (this.matchPurpose(buyer.purposes, product.policy.purposes)) {
                    product.matched = true;
                }
                // Add non matched policy products to new array (Blurred)
                else {
                    product.matched = false;
                }
                filteredData.push(product);
            });
            logger.debug('%s - Filtered Products Count: ', method, filteredData.length);
            return filteredData;
        }
        catch (e) {
            logger.error('%s - ', method, e);
            throw e;
        }
    }
    /**
     * Queries the history of transactions for a specific product
     *
     * @param {String} productID The product's ID (hash)
     * @returns {Array} Array of Agreement Objects
     * */
    async queryTransactionHistoryForProduct(productID) {
        try {
            const filter = { productID: productID };
            let res = await this.offchainDB.readTransactionsByFilter(filter);
            return res;
        }
        catch (e) {
            logger.error(e);
            throw e;
        }
    }
}
exports.Query = Query;
