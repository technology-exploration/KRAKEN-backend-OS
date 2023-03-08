/**
 * Copyright Lynkeus 2020. All Rights Reserved.
 *
 * @file A library implementing the API for the smart contract User Credentials
 * @author Alexandros Tragkas
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContract = void 0;
const TYPE = 'UserContract';
/* Local */
const libUtil_1 = require("./libUtil");
const libSignOffline_1 = require("./libSignOffline");
/* Constants */
const userContract = 'UserContract';
const createUserTx = 'CreateUser';
const updateUserTx = 'UpdateUser';
const readUserTx = 'ReadUser';
const deleteUserTx = 'DeleteUser';
const getAllUsersTx = 'GetAllUsers';
/* Logging */
const logger = (0, libUtil_1.getLogger)(TYPE);
/**
 * @classdesc API for the User Credentials contract
 *
 * @class
 */
class UserContract {
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
     * Create a new user
     * Smart contract transaction
     *
     * @param {String} userID The user's ID
     * @param {User} User The User object
     * @returns null on success, else error
     */
    async createUser(userID, User) {
        const method = 'createUser';
        logger.start(method);
        let res = null;
        // let gateway;
        try {
            // gateway = await connectGateway(userID);
            // const network = await gateway.getNetwork(this.channelID);
            // const contract = network.getContract(this.chaincodeID, userContract);
            const transaction = { fcn: userContract + ':' + createUserTx, args: [(0, libUtil_1.prettyJSONString)(User)] };
            res = await (0, libSignOffline_1.sendTransaction)(userID, transaction, this.channelID, this.chaincodeID);
            logger.debug('%s - transaction response: %s', method, res);
            // await contract.submitTransaction(createUserTx, prettyJSONString(User));
        }
        catch (e) {
            res = this.handleError(e, method);
        }
        // if(gateway) {gateway.disconnect();}
        return res;
    }
    /**
     * Update a user
     * Smart contract transaction
     *
     * @param {String} userID The user's ID
     * @param {User} User The User object
     * @returns null on success, else error
     */
    async updateUser(userID, User) {
        const method = 'updateUser';
        logger.start(method);
        let res = null;
        // let gateway;
        try {
            // gateway = await connectGateway(userID);
            // const network = await gateway.getNetwork(this.channelID);
            // const contract = network.getContract(this.chaincodeID, userContract);
            const transaction = { fcn: userContract + ':' + updateUserTx, args: [(0, libUtil_1.prettyJSONString)(User)] };
            res = await (0, libSignOffline_1.sendTransaction)(userID, transaction, this.channelID, this.chaincodeID);
            logger.debug('%s - transaction response: %s', method, res);
            // await contract.submitTransaction(updateUserTx, prettyJSONString(User));
        }
        catch (e) {
            res = this.handleError(e, method);
        }
        // if(gateway) {gateway.disconnect();}
        return res;
    }
    /**
     * Read a user
     * Smart contract transaction
     *
     * @param {String} userID The user's ID
     * @param {String} username The username to query
     * @returns {User} The User Object on success, else error
     */
    async readUser(userID, username) {
        const method = 'readUser';
        logger.start(method);
        let res = null;
        let gateway;
        try {
            gateway = await (0, libUtil_1.connectGateway)(userID);
            const network = await gateway.getNetwork(this.channelID);
            const contract = network.getContract(this.chaincodeID, userContract);
            // const transaction = ..
            // logger.debug('%s - transaction: ', transaction);
            res = await contract.evaluateTransaction(readUserTx, username);
            res = (0, libUtil_1.prettyJSON)(res);
            logger.debug('%s - result user: %s', method, res);
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
     * Delete a user (owner or ADMIN authorized. only owner atm)
     * Smart contract transaction
     *
     * @param {String} userID The user's ID
     * @param {String} username The username of user to delete
     * USERNAME IS USED ONLY FOR ADMIN ACCESS.
     * THE USERNAME AT THE CHAINCODE LEVEL IS OBTAINED FROM
     * THE CALLER'S CERTIFICATE
     * @returns {Error} null on success, else error
     */
    async deleteUser(userID, username) {
        const method = 'deleteUser';
        logger.start(method);
        let res = null;
        try {
            // gateway = await connectGateway(userID);
            // const network = await gateway.getNetwork(this.channelID);
            // const contract = network.getContract(this.chaincodeID, userContract);
            const transaction = { fcn: userContract + ':' + deleteUserTx, args: [username] };
            logger.debug('%s - %s', method, (0, libUtil_1.prettyJSONString)(transaction));
            await (0, libSignOffline_1.sendTransaction)(userID, transaction, this.channelID, this.chaincodeID);
            // await contract.submitTransaction(deleteUserTx, username);
        }
        catch (e) {
            res = this.handleError(e, method);
        }
        return res;
    }
    /**
     * Query all users
     *
     * @param {String} clientID The client's ID
     * @returns {Object} Array of user objects
     */
    async getUsers(clientID) {
        const method = 'getUsers';
        // logger.start(method);
        let res = null;
        let gateway;
        try {
            gateway = await (0, libUtil_1.connectGateway)(clientID);
            const network = await gateway.getNetwork(this.channelID);
            const contract = network.getContract(this.chaincodeID, userContract);
            // const transaction = ..
            // logger.debug('%s - transaction: ', transaction);
            res = await contract.evaluateTransaction(getAllUsersTx);
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
exports.UserContract = UserContract;
