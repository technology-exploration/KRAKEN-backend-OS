/**
 * Copyright Lynkeus 2020. All Rights Reserved.
 *
 * @file Implementation of Crypto related functionalities
 * @module liCrypto
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
exports.getCertExpirationDate = exports.getCertSerialAndAKI = exports.decodeCertificate = exports.generateKeysCSR = exports.generateIdentity = exports.isValidX509 = exports.isValidIdentity = void 0;
const TYPE = 'Crypto';
const libUtil_1 = require("./libUtil");
const crypto_1 = require("crypto");
const x509_1 = require("@fidm/x509");
const jsrsasign = __importStar(require("jsrsasign"));
const asn1 = jsrsasign.KJUR.asn1;
const libSignOffline_1 = require("./libSignOffline");
/* Logging */
const logger = (0, libUtil_1.getLogger)(TYPE);
/* Crypto specifics */
const CRYPTO_ALGORITHM = 'ec';
const KEY_OPTIONS = {
    namedCurve: 'prime256v1',
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
    }
};
function isValidIdentity(signerX509Identity) {
    const method = 'verifyIdentity';
    try {
        (0, libSignOffline_1.signTransaction)(signerX509Identity, 'a message to sign');
        return true;
    }
    catch (e) {
        logger.error('%s - %s', method, e.message);
        return false;
    }

}
exports.isValidIdentity = isValidIdentity;

/**
 * Verify the validity of an x509 certificate
 *
 * @param {String} certificate PEM encoded x509 Certificate
 * @returns {Bool}
 * */
function isValidX509(certificate) {
    const x509 = new crypto_1.X509Certificate(certificate);
    return x509.verify(x509.publicKey);
}
exports.isValidX509 = isValidX509;
/**
 * Generate Identity Object of user
 *
 * @param {CryptoMaterial} CryptoMaterial Contains the user's crypto material and csr
 * @returns {EX509Identity} An identity object as specified by Fabric Node SDK
 */
function generateIdentity(cryptoMaterial) {
    const method = 'generateIdentity';
    logger.start(method);
    const identity = {
        credentials: {
            certificate: cryptoMaterial.enrollment.certificate,
            privateKey: cryptoMaterial.privateKey.toString()
        },
        mspId: cryptoMaterial.mspId,
        type: 'X.509',
        version: 1
    };
    logger.debug('%s - Identity cert: ', method, identity.credentials.certificate);
    return identity;
}
exports.generateIdentity = generateIdentity;
/**
 * Generate key pair and CSR
 *
 * @param {string} userID The enrollment ID
 * @param {string} orgMSP The organization's mspID
 * @returns {CryptoMaterial} Contains keys and csr
 */
async function generateKeysCSR(userID, orgMSP) {
    const method = 'generateKeysCSR';
    logger.start(method);
    logger.info('%s - Generating Crypto Material for user', method, userID);
    let csrPem;
    return new Promise(function (resolve, reject) {
        try {
            // Generate key pair
            // let keys = forge.pki.rsa.generateKeyPair(2048);
            (0, crypto_1.generateKeyPair)(CRYPTO_ALGORITHM, KEY_OPTIONS, function (err, publicKey, privateKey) {
                if (err) {
                    throw err;
                }
                logger.debug('%s - public Key: ', method, publicKey);
                try {
                    const subjectDN = 'CN=' + userID;
                    const csr = new asn1.csr.CertificationRequest({
                        subject: { str: asn1.x509.X500Name.ldapToOneline(subjectDN) },
                        sbjpubkey: publicKey.toString(),
                        sigalg: 'SHA256withECDSA',
                        sbjprvkey: privateKey.toString(),
                    });
                    // sign certification request
                    csr.sign();
                    // convert certification request to PEM-format
                    csrPem = csr.getPEM();
                    const result = {
                        mspId: orgMSP,
                        subjectDN: subjectDN,
                        csr: csrPem,
                        privateKey: privateKey,
                        publicKey: publicKey,
                        enrollment: {}
                    };
                    logger.debug('%s - CSR PEM: ', method, csrPem);
                    resolve(result);
                }
                catch (e) {
                    logger.error('%s - ', method, e.message);
                    reject(e);
                }
            });
        }
        catch (e) {
            logger.error('%s - ', method, e.message);
            throw e;
        }
    });
}
exports.generateKeysCSR = generateKeysCSR;
/**
 * Decode a PEM Certificate
 *
 * @returns {Object} The Certificate in JSON
 * */
function decodeCertificate(certificate) {
    const method = 'decodeCertificate';
    return x509_1.Certificate.fromPEM((0, libUtil_1.toBuffer)(certificate));
}
exports.decodeCertificate = decodeCertificate;
function getCertSerialAndAKI(certificate) {
    const method = 'getCertSerialAndAuthorityNumber';
    // logger.start(method);
    const certJSON = decodeCertificate(certificate);
    return {
        serial: certJSON.serialNumber,
        aki: certJSON.authorityKeyIdentifier
    };
}
exports.getCertSerialAndAKI = getCertSerialAndAKI;
function getCertExpirationDate(certificate) {
    const method = 'getCertExpirationDate';
    // logger.start(method);
    const certJSON = decodeCertificate(certificate);
    return certJSON.validTo;
}
exports.getCertExpirationDate = getCertExpirationDate;
