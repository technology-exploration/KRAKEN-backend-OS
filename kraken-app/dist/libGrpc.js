/**
 * Copyright Lynkeus 2020. All Rights Reserved.
 *
 * @file API for RPC application-peer
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
exports.GrpcClient = void 0;
const TYPE = 'Grpc';
/* Init */
const libUtil_1 = require("./libUtil");
const grpc = __importStar(require("@grpc/grpc-js"));
const config_1 = require("./protos/config");
/* Logging */
const logger = (0, libUtil_1.getLogger)(TYPE);
/**
 * @typedef {Object} config.Message
 * @property {String} config.Message
 *
 */
/**
 * @typedef {Object} config.RevokedCertificate
 * @property {String} certificate - The certificate to send to server
 * @property {Bool}   revoked - The status of the certificate
 */
/**
 * @typedef {Object} config.CRLUpdateResponse
 * @property {String} status - Response status
 * @property {String} config.Message - Response config.Message
 * @property {Error}  error  - Response error if something occured
 * */
/**
 * @classdesc Implementation of remote operations to an
 * organization's peer. Main functionality is to trigger
 * a channel config update to include CRL
 *
 * @class
 */
class GrpcClient {
    /**
     * Construct a GRPC Object
     *
     * @param {String} endpoint The peer's endpoint
     * */
    constructor(endpoint) {
        this.endpoint = endpoint;
        this.stubCommunication = new config_1.config.CommunicationClient(endpoint, grpc.credentials.createInsecure());
        this.stubOperation = new config_1.config.OperationClient(endpoint, grpc.credentials.createInsecure());
    }
    /**
     * Send a test config.Message
     *
     * @param {String} msg The config.Message to send
     * @returns {config.Message} Response of the server
     * */
    Message(msg) {
        const method = 'sendconfig.Message';
        logger.debug('%s - Sending config.Message %s', method, msg);
        if (!msg) {
            logger.error('Missing parameter: config.Message');
            throw new Error('Missing parameter: config.Message');
        }
        return this.stubCommunication.Message({ "config.Message": msg }, function (err, response) {
            if (err) {
                logger.error(err);
            }
            else {
                logger.debug('Received: ', response);
            }
            return response;
        });
    }
    /**
     * Send a crlUpdateRequest
     *
     * @param {config.RevokedCertificate} request - The request to send to the endpoint
     * @returns {config.CRLUpdateResponse} response - The response of the operation
     * */
    async triggerCRLUpdate(request) {
        const method = 'triggerCRLUpdate';
        logger.debug('%s - Trigger CRL Update on peer %s and request: %s', method, this.endpoint, request);
        if (!request.certificate || !request.revoked) {
            throw new Error("Client request is not in config.RevokedCertificate format");
        }
        return this.stubOperation.updateCRL(request, function (err, response) {
            if (err) {
                logger.error(err);
            }
            else {
                logger.debug('Received: ', response);
            }
            return response;
        });
    }
}
exports.GrpcClient = GrpcClient;
