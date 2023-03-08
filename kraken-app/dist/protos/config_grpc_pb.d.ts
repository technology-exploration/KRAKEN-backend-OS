// package: config
// file: config.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as config_pb from "./config_pb";

interface IOperationService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    updateCRL: IOperationService_IupdateCRL;
}

interface IOperationService_IupdateCRL extends grpc.MethodDefinition<config_pb.RevokedCertificate, config_pb.CRLUpdateResponse> {
    path: "/config.Operation/updateCRL";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<config_pb.RevokedCertificate>;
    requestDeserialize: grpc.deserialize<config_pb.RevokedCertificate>;
    responseSerialize: grpc.serialize<config_pb.CRLUpdateResponse>;
    responseDeserialize: grpc.deserialize<config_pb.CRLUpdateResponse>;
}

export const OperationService: IOperationService;

export interface IOperationServer {
    updateCRL: grpc.handleUnaryCall<config_pb.RevokedCertificate, config_pb.CRLUpdateResponse>;
}

export interface IOperationClient {
    updateCRL(request: config_pb.RevokedCertificate, callback: (error: grpc.ServiceError | null, response: config_pb.CRLUpdateResponse) => void): grpc.ClientUnaryCall;
    updateCRL(request: config_pb.RevokedCertificate, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: config_pb.CRLUpdateResponse) => void): grpc.ClientUnaryCall;
    updateCRL(request: config_pb.RevokedCertificate, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: config_pb.CRLUpdateResponse) => void): grpc.ClientUnaryCall;
}

export class OperationClient extends grpc.Client implements IOperationClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public updateCRL(request: config_pb.RevokedCertificate, callback: (error: grpc.ServiceError | null, response: config_pb.CRLUpdateResponse) => void): grpc.ClientUnaryCall;
    public updateCRL(request: config_pb.RevokedCertificate, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: config_pb.CRLUpdateResponse) => void): grpc.ClientUnaryCall;
    public updateCRL(request: config_pb.RevokedCertificate, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: config_pb.CRLUpdateResponse) => void): grpc.ClientUnaryCall;
}

interface ICommunicationService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    message: ICommunicationService_Imessage;
}

interface ICommunicationService_Imessage extends grpc.MethodDefinition<config_pb.Message, config_pb.Message> {
    path: "/config.Communication/message";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<config_pb.Message>;
    requestDeserialize: grpc.deserialize<config_pb.Message>;
    responseSerialize: grpc.serialize<config_pb.Message>;
    responseDeserialize: grpc.deserialize<config_pb.Message>;
}

export const CommunicationService: ICommunicationService;

export interface ICommunicationServer {
    message: grpc.handleUnaryCall<config_pb.Message, config_pb.Message>;
}

export interface ICommunicationClient {
    message(request: config_pb.Message, callback: (error: grpc.ServiceError | null, response: config_pb.Message) => void): grpc.ClientUnaryCall;
    message(request: config_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: config_pb.Message) => void): grpc.ClientUnaryCall;
    message(request: config_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: config_pb.Message) => void): grpc.ClientUnaryCall;
}

export class CommunicationClient extends grpc.Client implements ICommunicationClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public message(request: config_pb.Message, callback: (error: grpc.ServiceError | null, response: config_pb.Message) => void): grpc.ClientUnaryCall;
    public message(request: config_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: config_pb.Message) => void): grpc.ClientUnaryCall;
    public message(request: config_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: config_pb.Message) => void): grpc.ClientUnaryCall;
}
