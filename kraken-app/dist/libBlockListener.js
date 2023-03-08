/**
 * Copyright Lynkeus 2020. All Rights Reserved.
 *
 * @file A library implementing the block listening and event handling
 * @module libBlockListener
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
exports.removeBlockListener = exports.createBlockListener = void 0;
const TYPE = 'BlockListener';
/* Dependencies */
const fs = __importStar(require("fs"));
const process = __importStar(require("process"));
/* Local */
const Util = __importStar(require("./libUtil"));
const libReplicateDB_1 = require("./libReplicateDB");
/* Env */
const blockPath = process.env.BLOCK_PATH;
/* Logging */
const logger = Util.getLogger(TYPE);
/* Init */
var offchainDB = new libReplicateDB_1.OffchainDB();
/**
 * Handle the event's transaction data
 *
 * @async
 * @param {Object} transactionData The data of event
 * @param {number} blockNum The current block number
 */
async function handleTransactionData(transactionData, blockNum) {
    const method = 'handleTransactionData';
    // logger.start(method);
    try {
        // CERTIFICATE OF TRANSACTION CREATOR
        const creator = transactionData.actions[0].header.creator;
        // console.log(`    - submitted by: ${creator.mspid}-${creator.id_bytes.toString('UTF-8')}`);
        // TRANSACTION PROPOSAL RESPONSE PAYLOAD
        // console.log(transactionData.actions[0].payload)
        const transactionPayload = transactionData.actions[0].payload.action.proposal_response_payload;
        // console.log(transactionPayload);
        const eventName = transactionPayload.extension.events.event_name;
        // console.log(transactionPayload.extension);
        // RESPONSE STATUS OF TRANSACTION
        const response = transactionPayload.extension.response;
        // console.log("%j", response);
        // const readSet = transactionPayload.extension.results.ns_rwset[1].rwset.reads[1];
        // const writeSet = transactionPayload.extension.results.ns_rwset[1].rwset.writes[0].value;
        // EVENT RESULT
        let eventResult = transactionPayload.extension.events.payload;
        // eventResult = Buffer.concat([eventResult, Buffer.from(transactionData.timestamp, 'utf8')]);
        // console.log(eventResult.timestamp)
        // console.log('Request result: ', Util.prettyJSON(eventResult));
        // console.log('        Trigger some other function...', Util.prettyJSON(eventResult));
        // console.info('Transaction event result');
        if (eventResult.toString() === null ||
            eventResult.toString() === undefined ||
            !eventResult.toString()) {
            return;
        }
        if (response.status !== 200) {
            console.log('Block was not committed');
            return;
        }
        // logger.debug('%s - passing event to DB: ', method, eventName);
        await offchainDB.eventHandler(eventName, eventResult);
        // const chaincode = transactionData.actions[0].payload.chaincode_proposal_payload.input.chaincode_spec;
    }
    catch (e) {
        logger.fatal('%s - ', method, e.message);
    }
}
/**
 * Create a listener for blocks
 * to extract the transaction data
 *
 * @param {String} userID The user's id from wallet
 * @param {String} channelID The channel name
 * @returns {Listener} The block listener object
 */
async function createBlockListener(userID, channelID) {
    const method = 'createBlockListener';
    logger.start(method);
    try {
        await offchainDB.openConnection();
        const gateway = await Util.connectGateway(userID);
        logger.debug('%s - %s - %s ', method, userID, channelID);
        const network = await gateway.getNetwork(channelID);
        let listener = async (event) => {
            const timestamp = event.blockData.data.data[0].payload.header.channel_header.timestamp;
            const blockNum = Number(event.blockNumber);
            const transEvents = event.getTransactionEvents();
            for (let transEvent of transEvents) {
                if (transEvent.isValid) {
                    transEvent.transactionData.timestamp = timestamp;
                    handleTransactionData(transEvent.transactionData, blockNum);
                }
            }
            fs.writeFileSync(blockPath, (blockNum + 1).toString());
        };
        const nextBlock = Number(fs.readFileSync(blockPath, 'utf-8'));
        const options = {
            startBlock: nextBlock
        };
        await network.addBlockListener(listener, options);
        return listener;
    }
    catch (e) {
        logger.error('%s - ', method, e);
        throw e;
    }
}
exports.createBlockListener = createBlockListener;
/**
 * Remove block listener
 *
 * @param {String} userID The user's id from wallet
 * @param {String} channelID The channel name
 * @param {Listener} listener The listener to remove
 */
async function removeBlockListener(userID, channelID, listener) {
    const method = 'removeBlockListener';
    logger.start(method);
    try {
        await offchainDB.closeConnection();
        const gateway = await Util.connectGateway(userID);
        const network = await gateway.getNetwork(channelID);
        await network.removeBlockListener(listener);
    }
    catch (e) {
        logger.error('%s - ', method, e);
    }
}
exports.removeBlockListener = removeBlockListener;
