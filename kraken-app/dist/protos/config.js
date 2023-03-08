"use strict";
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
exports.config = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.15.6
 * source: config.proto
 * git: https://github.com/thesayyn/protoc-gen-ts
 *  */
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var config;
(function (config) {
    class RevokedCertificate extends pb_1.Message {
        constructor(data) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("certificate" in data && data.certificate != undefined) {
                    this.certificate = data.certificate;
                }
                if ("revoked" in data && data.revoked != undefined) {
                    this.revoked = data.revoked;
                }
            }
        }
        get certificate() {
            return pb_1.Message.getField(this, 1);
        }
        set certificate(value) {
            pb_1.Message.setField(this, 1, value);
        }
        get revoked() {
            return pb_1.Message.getField(this, 2);
        }
        set revoked(value) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data) {
            const message = new RevokedCertificate({});
            if (data.certificate != null) {
                message.certificate = data.certificate;
            }
            if (data.revoked != null) {
                message.revoked = data.revoked;
            }
            return message;
        }
        toObject() {
            const data = {};
            if (this.certificate != null) {
                data.certificate = this.certificate;
            }
            if (this.revoked != null) {
                data.revoked = this.revoked;
            }
            return data;
        }
        serialize(w) {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.certificate === "string" && this.certificate.length)
                writer.writeString(1, this.certificate);
            if (this.revoked !== undefined)
                writer.writeBool(2, this.revoked);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes) {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RevokedCertificate();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.certificate = reader.readString();
                        break;
                    case 2:
                        message.revoked = reader.readBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary() {
            return this.serialize();
        }
        static deserializeBinary(bytes) {
            return RevokedCertificate.deserialize(bytes);
        }
    }
    config.RevokedCertificate = RevokedCertificate;
    class Empty extends pb_1.Message {
        constructor(data) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data) {
            const message = new Empty({});
            return message;
        }
        toObject() {
            const data = {};
            return data;
        }
        serialize(w) {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes) {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Empty();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary() {
            return this.serialize();
        }
        static deserializeBinary(bytes) {
            return Empty.deserialize(bytes);
        }
    }
    config.Empty = Empty;
    class Message extends pb_1.Message {
        constructor(data) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("message" in data && data.message != undefined) {
                    this.message = data.message;
                }
            }
        }
        get message() {
            return pb_1.Message.getField(this, 1);
        }
        set message(value) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data) {
            const message = new Message({});
            if (data.message != null) {
                message.message = data.message;
            }
            return message;
        }
        toObject() {
            const data = {};
            if (this.message != null) {
                data.message = this.message;
            }
            return data;
        }
        serialize(w) {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.message === "string" && this.message.length)
                writer.writeString(1, this.message);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes) {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Message();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.message = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary() {
            return this.serialize();
        }
        static deserializeBinary(bytes) {
            return Message.deserialize(bytes);
        }
    }
    config.Message = Message;
    class Error extends pb_1.Message {
        constructor(data) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("code" in data && data.code != undefined) {
                    this.code = data.code;
                }
                if ("message" in data && data.message != undefined) {
                    this.message = data.message;
                }
            }
        }
        get code() {
            return pb_1.Message.getField(this, 1);
        }
        set code(value) {
            pb_1.Message.setField(this, 1, value);
        }
        get message() {
            return pb_1.Message.getField(this, 2);
        }
        set message(value) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data) {
            const message = new Error({});
            if (data.code != null) {
                message.code = data.code;
            }
            if (data.message != null) {
                message.message = data.message;
            }
            return message;
        }
        toObject() {
            const data = {};
            if (this.code != null) {
                data.code = this.code;
            }
            if (this.message != null) {
                data.message = this.message;
            }
            return data;
        }
        serialize(w) {
            const writer = w || new pb_1.BinaryWriter();
            if (this.code !== undefined)
                writer.writeInt32(1, this.code);
            if (typeof this.message === "string" && this.message.length)
                writer.writeString(2, this.message);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes) {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Error();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.code = reader.readInt32();
                        break;
                    case 2:
                        message.message = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary() {
            return this.serialize();
        }
        static deserializeBinary(bytes) {
            return Error.deserialize(bytes);
        }
    }
    config.Error = Error;
    class CRLUpdateResponse extends pb_1.Message {
        constructor(data) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("status" in data && data.status != undefined) {
                    this.status = data.status;
                }
                if ("message" in data && data.message != undefined) {
                    this.message = data.message;
                }
                if ("error" in data && data.error != undefined) {
                    this.error = data.error;
                }
            }
        }
        get status() {
            return pb_1.Message.getField(this, 1);
        }
        set status(value) {
            pb_1.Message.setField(this, 1, value);
        }
        get message() {
            return pb_1.Message.getField(this, 2);
        }
        set message(value) {
            pb_1.Message.setField(this, 2, value);
        }
        get error() {
            return pb_1.Message.getWrapperField(this, Error, 3);
        }
        set error(value) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        static fromObject(data) {
            const message = new CRLUpdateResponse({});
            if (data.status != null) {
                message.status = data.status;
            }
            if (data.message != null) {
                message.message = data.message;
            }
            if (data.error != null) {
                message.error = Error.fromObject(data.error);
            }
            return message;
        }
        toObject() {
            const data = {};
            if (this.status != null) {
                data.status = this.status;
            }
            if (this.message != null) {
                data.message = this.message;
            }
            if (this.error != null) {
                data.error = this.error.toObject();
            }
            return data;
        }
        serialize(w) {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.status === "string" && this.status.length)
                writer.writeString(1, this.status);
            if (typeof this.message === "string" && this.message.length)
                writer.writeString(2, this.message);
            if (this.error !== undefined)
                writer.writeMessage(3, this.error, () => this.error.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes) {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CRLUpdateResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.status = reader.readString();
                        break;
                    case 2:
                        message.message = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.error, () => message.error = Error.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary() {
            return this.serialize();
        }
        static deserializeBinary(bytes) {
            return CRLUpdateResponse.deserialize(bytes);
        }
    }
    config.CRLUpdateResponse = CRLUpdateResponse;
    class UnimplementedOperationService {
    }
    UnimplementedOperationService.definition = {
        updateCRL: {
            path: "/config.Operation/updateCRL",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => RevokedCertificate.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => CRLUpdateResponse.deserialize(new Uint8Array(bytes))
        }
    };
    config.UnimplementedOperationService = UnimplementedOperationService;
    class OperationClient extends grpc_1.makeGenericClientConstructor(UnimplementedOperationService.definition, "Operation", {}) {
        constructor(address, credentials, options) {
            super(address, credentials, options);
            this.updateCRL = (message, metadata, options, callback) => {
                return super.updateCRL(message, metadata, options, callback);
            };
        }
    }
    config.OperationClient = OperationClient;
    class UnimplementedCommunicationService {
    }
    UnimplementedCommunicationService.definition = {
        message: {
            path: "/config.Communication/message",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => Message.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => Message.deserialize(new Uint8Array(bytes))
        }
    };
    config.UnimplementedCommunicationService = UnimplementedCommunicationService;
    class CommunicationClient extends grpc_1.makeGenericClientConstructor(UnimplementedCommunicationService.definition, "Communication", {}) {
        constructor(address, credentials, options) {
            super(address, credentials, options);
            this.message = (message, metadata, options, callback) => {
                return super.message(message, metadata, options, callback);
            };
        }
    }
    config.CommunicationClient = CommunicationClient;
})(config = exports.config || (exports.config = {}));
