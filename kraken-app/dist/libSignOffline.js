/**
 * Copyright Lynkeus 2021. All Rights Reserved.
 *
 * @file Implementation of offline transaction signing
 * @module libSignOffline
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
exports.sendTransaction = exports.getSignerCtx = exports.getEndorsementPayload = exports.getChannelCtx = exports.sendCommit = exports.buildSignCommit = exports.sendEndorsement = exports.buildSignEndorsement = exports.signTransaction = exports.getIdentityContext = void 0;
const TYPE = 'SignOffline';
/* Dependencies */
const fabric_common_1 = require("fabric-common");
const fabric_network_1 = require("fabric-network");
const dotenv = __importStar(require("dotenv"));
const crypto = __importStar(require("crypto"));
const util = __importStar(require("util"));
const path = __importStar(require("path"));
const elliptic = require('elliptic');
const { KEYUTIL } = require('jsrsasign');
dotenv.config({ path: __dirname + '/.env' });
const Util = __importStar(require("./libUtil"));
const walletPath = path.join(process.env.WALLET_PATH);
const logger = Util.getLogger(TYPE);
const clientID = process.env.CLIENT;
// const revokedCertificates: string = path.resolve(process.env.REVOKED_CERTS_PATH!)
// interface Transaction
// interface Signer
// interface SignatureHeader
// interface Identity
// interface SignatureHeaderBuffer {
// 	nonce: number
// }
function _preventMalleability(sig) {
    const curve = elliptic.curves.p256;
    const halfOrder = curve.n.shrn(1);
    if (sig.s.cmp(halfOrder) === 1) {
        const bigNum = curve.n;
        sig.s = bigNum.sub(sig.s);
    }
    return sig;
}
function getValidEndorsementResponse(endorsementResponses) {
    return endorsementResponses.find((endorsementResponse) => endorsementResponse.endorsement);
}
function newEndorsementError(proposalResponse) {
    let _a, _b;
    const errorInfos = [];
    for (const error of proposalResponse.errors) {
        const errorInfo = {
            peer: (_a = error === null || error === void 0 ? void 0 : error.connection) === null || _a === void 0 ? void 0 : _a.name,
            status: 'grpc',
            message: error.message
        };
        errorInfos.push(errorInfo);
    }
    for (const endorsement of proposalResponse.responses) {
        const errorInfo = {
            peer: (_b = endorsement === null || endorsement === void 0 ? void 0 : endorsement.connection) === null || _b === void 0 ? void 0 : _b.name,
            status: endorsement.response.status,
            message: endorsement.response.message
        };
        errorInfos.push(errorInfo);
    }
    const messages = ['No valid responses from any peers. Errors:'];
    for (const errorInfo of errorInfos) {
        messages.push(util.format('peer=%s, status=%s, message=%s', errorInfo.peer, errorInfo.status, errorInfo.message));
    }
    // return messages;
    let error = new Error();
    error.message = Util.prettyJSONString(errorInfos);
    return error;
}
function getResponsePayload(proposalResponse) {
    const validEndorsementResponse = getValidEndorsementResponse(proposalResponse.responses);
    if (!validEndorsementResponse) {
        const error = newEndorsementError(proposalResponse);
        throw error;
    }
    return validEndorsementResponse.response.payload;
}
// Construct an Identity context
async function getIdentityContext(name, x509identity) {
    const user = fabric_common_1.User.createUser(name, '', x509identity.mspId, x509identity.credentials.certificate, x509identity.credentials.privateKey);
    // Signer x509identityContext
    const client = new fabric_common_1.Client('IDX client');
    const userIdx = client.newIdentityContext(user);
    return userIdx;
}
exports.getIdentityContext = getIdentityContext;
/**
 * Sign a transaction manually
 *
 */
function signTransaction(signerX509Identity, proposalBytes) {
    const method = 'signTransaction';
    logger.start(method);
    const hashAlgo = 'sha256';
    try {
        const hash = crypto.createHash(hashAlgo);
        hash.update(proposalBytes);
        const digest = hash.digest('hex');
        const privateKeyPEM = signerX509Identity.credentials.privateKey;
        const { prvKeyHex } = KEYUTIL.getKey(privateKeyPEM); // convert the pem encoded key to hex encoded private key
        const EC = elliptic.ec;
        const ecdsaCurve = elliptic.curves.p256;
        const ecdsa = new EC(ecdsaCurve);
        const signKey = ecdsa.keyFromPrivate(prvKeyHex, 'hex');
        let sig = ecdsa.sign(Buffer.from(digest, 'hex'), signKey);
        sig = _preventMalleability(sig);
        const signature = Buffer.from(sig.toDER());
        logger.debug('%s - transaction signed', method);
        return signature;
    }
    catch (e) {
        logger.error('%s - %s', method, e.message);
        throw e;
    }
}
exports.signTransaction = signTransaction;
async function buildSignEndorsement(signer, transaction, endorsement) {
    const method = 'buildSignEndorsement';
    logger.start(method);
    try {
        const signerCtx = signer.signerCtx;
        const signerX509Identity = signer.signerX509Identity;
        // Build proposal
        const proposalBytes = endorsement.build(signerCtx, transaction);
        // Sign proposal
        const signature = signTransaction(signerX509Identity, proposalBytes);
        // Sign endorsement
        endorsement.sign(signature);
        logger.debug('%s - proposal ready to send to peers', method);
        return endorsement;
    }
    catch (e) {
        logger.error('%s - %s', method, e.message);
        throw e;
    }
}
exports.buildSignEndorsement = buildSignEndorsement;
/* Send to endorsing peers */
async function sendEndorsement(endorsement, channel) {
    const method = 'sendEndorsement';
    logger.start(method);
    try {
        let proposalSendRequest = {};
        proposalSendRequest.requestTimeout = 30000;
        // Set endorsers
        proposalSendRequest.targets = Array.from(channel.getEndorsers().values());
        // Send endorsement
        const proposalResponses = await endorsement.send(proposalSendRequest);
        logger.debug('%s - transaction endorsed with proposal response: %s', method, getResponsePayload(proposalResponses).toString());
        return { proposalResponses, endorsement };
    }
    catch (e) {
        logger.error('%s - %s', method, e.message[0].message);
        // logger.error(e);
        throw e;
    }
    // Construct request
}
exports.sendEndorsement = sendEndorsement;
async function buildSignCommit(signer, endorsement) {
    const method = 'buildSignCommit';
    logger.start(method);
    try {
        const signerCtx = signer.signerCtx;
        const commit = endorsement.newCommit();
        commit.build(signerCtx);
        commit.sign(signerCtx);
        logger.debug('%s - commit ready to send to orderers', method);
        return commit;
    }
    catch (e) {
        logger.error('%s - %s', method, e.message);
        throw e;
    }
}
exports.buildSignCommit = buildSignCommit;
async function sendCommit(commit, channel) {
    const method = 'sendCommit';
    logger.start(method);
    try {
        // Construct request
        const commitSendRequest = {};
        commitSendRequest.requestTimeout = 30000;
        // Set committers (orderers)
        commitSendRequest.targets = Array.from(channel.getCommitters().values());
        const commitResponse = await commit.send(commitSendRequest);
        logger.debug('%s - commit sent, obtained response %j: ', method, commitResponse);
        return commitResponse;
    }
    catch (e) {
        logger.error('%s - %s', method, e.message);
        throw e;
    }
}
exports.sendCommit = sendCommit;
/**
 * Get { Endorsement } instance
 *
 *
 *
 */
async function getChannelCtx(clientID, channelID, chaincodeID) {
    const method = 'getChannelCtx';
    logger.start(method);
    const gateway = await Util.connectGateway(clientID);
    // @ts-ignore
    const channel = gateway.client.channels.get(channelID); 
    logger.debug('%s - : %s', method, channel);
    const endorsement = channel.newEndorsement(chaincodeID);
    return { channel, endorsement };
}
exports.getChannelCtx = getChannelCtx;
async function getEndorsementPayload(endorsement, channel) {
    const method = 'getEndorsementPayload';
    logger.start(method);
    const endorsementResponse = await sendEndorsement(endorsement, channel);
    const proposalResponses = endorsementResponse.proposalResponses;
    endorsement = endorsementResponse.endorsement;
    const transactionResult = getResponsePayload(proposalResponses).toString();
    return { endorsement, transactionResult };
}
exports.getEndorsementPayload = getEndorsementPayload;
async function getSignerCtx(signerID, walletPath) {
    const method = 'getSignerCtx';
    logger.start(method);
    logger.debug('%s - signerID: %s', method, signerID);
    /* User Imports file ... */
    /* Handle to get credentials in an .id format */
    const wallet = await fabric_network_1.Wallets.newFileSystemWallet(walletPath);
    const signerX509Identity = await wallet.get(signerID);
    if (!signerX509Identity) {
        throw new Error('Identity not found in wallet');
    }
    const signerCtx = await getIdentityContext(signerID, signerX509Identity);
    return { signerCtx, signerX509Identity };
}
exports.getSignerCtx = getSignerCtx;
/**
 * Create, Sign and Commit transaction
 *
 *
 */
async function sendTransaction(signerID, transaction, channelID, chaincodeID) {
    const method = 'sendTransaction';
    logger.debug('%s - Creating transaction %s with SignerID: ', method, transaction.fcn, signerID);
    // let gateway = null;
    try {
        /* Backend
        *
        */
        const channelCtx = await getChannelCtx(clientID, channelID, chaincodeID);
        const channel = channelCtx.channel;
        let endorsement = channelCtx.endorsement;
        /* Browser
        *
        */
        // Get Signer CTX
        const signer = await getSignerCtx(signerID, walletPath);
        // Create Transaction (Build and sign endorsement)
        endorsement = await buildSignEndorsement(signer, transaction, endorsement);
        /* Backend
        *
        */
        // Check for expired certificate 
        // const signatureHeader = decodeSignatureHeader(endorsement._action.header.signature_header)
        // const certificate = signatureHeader.creator.id_bytes.toString()
        // if (isRevoked(certificate)) {
        // 	throw new Error('Certificate is revoked.')
        // }
        // Gather endorsements
        const endorsementPayload = await getEndorsementPayload(endorsement, channel);
        const transactionResult = endorsementPayload.transactionResult;
        const signed_endorsement = endorsementPayload.endorsement;
        // console.log(endorsementPayload)
        /* Browser
        *
        */
        // Build and sign commit
        const commit = await buildSignCommit(signer, signed_endorsement);
        /* Backend
        *
        */
        // Send commit
        const commitResponse = await sendCommit(commit, channel);
        if (commitResponse.status === 'SUCCESS') {
            logger.debug('%s - Transaction committed successfully: result: ', method, transactionResult);
            return transactionResult;
        }
        else {
            logger.error('%s - failed to commit transaction', method);
            return commitResponse;
        }
    }
    catch (e) {
        // logger.error('%s - ', method, e.message);
        throw e;
    }
    // finally {
    // 	if (gateway) {gateway.disconnect();}
    // }
}
exports.sendTransaction = sendTransaction;
