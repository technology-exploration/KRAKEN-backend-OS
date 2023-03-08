// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var config_pb = require('./config_pb.js');

function serialize_config_CRLUpdateResponse(arg) {
  if (!(arg instanceof config_pb.CRLUpdateResponse)) {
    throw new Error('Expected argument of type config.CRLUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_config_CRLUpdateResponse(buffer_arg) {
  return config_pb.CRLUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_config_Message(arg) {
  if (!(arg instanceof config_pb.Message)) {
    throw new Error('Expected argument of type config.Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_config_Message(buffer_arg) {
  return config_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_config_RevokedCertificate(arg) {
  if (!(arg instanceof config_pb.RevokedCertificate)) {
    throw new Error('Expected argument of type config.RevokedCertificate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_config_RevokedCertificate(buffer_arg) {
  return config_pb.RevokedCertificate.deserializeBinary(new Uint8Array(buffer_arg));
}


var OperationService = exports.OperationService = {
  updateCRL: {
    path: '/config.Operation/updateCRL',
    requestStream: false,
    responseStream: false,
    requestType: config_pb.RevokedCertificate,
    responseType: config_pb.CRLUpdateResponse,
    requestSerialize: serialize_config_RevokedCertificate,
    requestDeserialize: deserialize_config_RevokedCertificate,
    responseSerialize: serialize_config_CRLUpdateResponse,
    responseDeserialize: deserialize_config_CRLUpdateResponse,
  },
};

exports.OperationClient = grpc.makeGenericClientConstructor(OperationService);
var CommunicationService = exports.CommunicationService = {
  message: {
    path: '/config.Communication/message',
    requestStream: false,
    responseStream: false,
    requestType: config_pb.Message,
    responseType: config_pb.Message,
    requestSerialize: serialize_config_Message,
    requestDeserialize: deserialize_config_Message,
    responseSerialize: serialize_config_Message,
    responseDeserialize: deserialize_config_Message,
  },
};

exports.CommunicationClient = grpc.makeGenericClientConstructor(CommunicationService);
