/**
 * Copyright Lynkeus 2021. All Rights Reserved.
 *
 * @file A library implementing the API for the smart contract Agreement
 * @author Alexandros Tragkas
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgreementContract = void 0;
const TYPE = 'AgreementContract';
/* Dependencies */
const libUtil_1 = require("./libUtil");
/* Constants */
const agreementContract = 'AgreementContract';
const updateAgreementTx = 'UpdateAgreement';
const getAgreementsTx = 'GetTransactions';
const getAgreementTx = 'GetAgreement';
/* Logging */
const logger = (0, libUtil_1.getLogger)(TYPE);
/**
 * @classdesc API for the Agreement contract
 *
 * @class
 */
class AgreementContract {
    /**
     * Construct a DataContract object.
     *
     * @param {String} channelID - The channel's ID the chaincode is instantiated
     * @param {String} chaincodeID - The chaincode's ID
     */
    constructor(channelID, chaincodeID) {
        this.channelID = channelID;
        this.chaincodeID = chaincodeID;
    }
    /**
     * Error handler for contract API
     *
     * @ignore
     * @param {Error} e The error object
     * @param {String} method The function's name
     */
    handleError(e, method) {
        logger.error('%s - ', method, e.message);
        return e;
    }
    /**
     * Update an agreement (Org Client only)
     *
     * @param {String} clientID The client's ID
     * @param {String} transactionID The tx/agreement's ID
     * @param {String} status The new status to update (Paid/Access)
     * @returns {String} null on success, error on failure
     */
    async updateAgreement(clientID, transactionID, status) {
        const method = 'updateAgreement';
        logger.start(method);
        let res = null;
        let gateway;
        try {
            gateway = await (0, libUtil_1.connectGateway)(clientID);
            const network = await gateway.getNetwork(this.channelID);
            const contract = network.getContract(this.chaincodeID, agreementContract);
            res = await contract.submitTransaction(updateAgreementTx, transactionID, status);
        }
        catch (e) {
            res = this.handleError(e, method);
        }
        if (gateway) {
            gateway.disconnect();
        }
        return res;
    }
    /**
     * Fetch an agreement
     *
     * @param {String} clientID The client's ID
     * @param {String} transactionID The agreement's ID
     * @returns {Object} The agreement if found
     */
    async getAgreement(clientID, transactionID) {
        const method = 'getAgreement';
        logger.start(method);
        let res = null;
        let gateway;
        try {
            gateway = await (0, libUtil_1.connectGateway)(clientID);
            const network = await gateway.getNetwork(this.channelID);
            const contract = network.getContract(this.chaincodeID, agreementContract);
            res = await contract.evaluateTransaction(getAgreementTx, transactionID);
            res = (0, libUtil_1.prettyJSON)(res);
        }
        catch (e) {
            res = this.handleError(e, method);
        }
        if (gateway) {
            gateway.disconnect();
        }
        return res;
    }
    /**
     * Get All agreements
     *
     * @param {String} clientID The client's ID
     * @returns {Agreement[]} Array of agreements
     */
    async getAgreements(clientID) {
        const method = 'getAgreements';
        logger.start(method);
        let res = null;
        let gateway;
        try {
            gateway = await (0, libUtil_1.connectGateway)(clientID);
            const network = await gateway.getNetwork(this.channelID);
            const contract = network.getContract(this.chaincodeID, agreementContract);
            res = await contract.evaluateTransaction(getAgreementsTx);
            res = (0, libUtil_1.prettyJSON)(res);
            if (!res) {
                res = [];
            }
        }
        catch (e) {
            res = this.handleError(e, method);
        }
        if (gateway) {
            gateway.disconnect();
        }
        return res;
    }
}
exports.AgreementContract = AgreementContract;
