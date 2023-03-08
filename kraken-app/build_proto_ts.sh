#!/bin/bash

ABSOLUTE_PATH=${PWD}
SOURCE=${ABSOLUTE_PATH}/kraken-app/lib/protos/
DEST=${ABSOLUTE_PATH}/kraken-app/lib/protos/

# Generate JavaScript code
./node_modules/.bin/grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${SOURCE} \
    --grpc_out=${DEST} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ${DEST} \
    ${SOURCE}*.proto

# Generate TypeScript code (d.ts)
./node_modules/.bin/grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=${DEST} \
    --proto_path ${SOURCE} \
    ${SOURCE}/*.proto