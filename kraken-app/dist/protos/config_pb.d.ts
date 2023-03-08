// package: config
// file: config.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class RevokedCertificate extends jspb.Message { 
    getCertificate(): string;
    setCertificate(value: string): RevokedCertificate;
    getRevoked(): boolean;
    setRevoked(value: boolean): RevokedCertificate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RevokedCertificate.AsObject;
    static toObject(includeInstance: boolean, msg: RevokedCertificate): RevokedCertificate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RevokedCertificate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RevokedCertificate;
    static deserializeBinaryFromReader(message: RevokedCertificate, reader: jspb.BinaryReader): RevokedCertificate;
}

export namespace RevokedCertificate {
    export type AsObject = {
        certificate: string,
        revoked: boolean,
    }
}

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class Message extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): Message;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Message.AsObject;
    static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Message;
    static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
    export type AsObject = {
        message: string,
    }
}

export class Error extends jspb.Message { 
    getCode(): number;
    setCode(value: number): Error;
    getMessage(): string;
    setMessage(value: string): Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
    export type AsObject = {
        code: number,
        message: string,
    }
}

export class CRLUpdateResponse extends jspb.Message { 
    getStatus(): string;
    setStatus(value: string): CRLUpdateResponse;
    getMessage(): string;
    setMessage(value: string): CRLUpdateResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): Error | undefined;
    setError(value?: Error): CRLUpdateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CRLUpdateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CRLUpdateResponse): CRLUpdateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CRLUpdateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CRLUpdateResponse;
    static deserializeBinaryFromReader(message: CRLUpdateResponse, reader: jspb.BinaryReader): CRLUpdateResponse;
}

export namespace CRLUpdateResponse {
    export type AsObject = {
        status: string,
        message: string,
        error?: Error.AsObject,
    }
}
