const supertest = require('supertest')
const express = require('express')
const handler = require('../handler')
const dataunion = require('../dataunion')
const http = require('http')
const { expect } = require('chai')

describe('Data Union', () => {
  let app
  let srv

  beforeEach(() => {
    app = express()
    app.use(handler.error())
    app.use(express.json())
  })

  afterEach(() => {
    srv.close()
    app = undefined
    srv = undefined
  })

  const dataUnionAddress = '0x509289EbaCAbE2d0988f518401cf59084e8bA901'
  const memberAddress = '0x4c83d6ceDa7c6814757E68f643C18C351c044C9A'
  const grantPermissionsFunc = async (streamId, user) => {
    return Promise.resolve()
  }
  const grantPermissionsErrorFunc = async (streamId, user) => {
    return Promise.reject(new Error('mocked permission error'))
  }
  const getProduct = async (beneficiaryAddress) => {
    return {
      beneficiaryAddress: beneficiaryAddress,
      ownerId: 'someone',
      streams: [
        '0x0910A43Da19cBfa82DF324d21C8486087096c1fa/foobar',
        '0x65e7632EFd4624a58c1cA9b5395b73bd160AfB61/abc',
      ],
    }
  }
  const getProductNotFound = async (beneficiaryAddress) => {
    return undefined
  }
  const httpPostOk = async (url, memberAddress, dataUnion) => {
    return Promise.resolve({
      dataUnion: dataUnion,
      member: memberAddress,
    })
  }
  const httpPostError = async (url, memberAddress) => {
    return Promise.reject(new Error('test mock error'))
  }

  const testCases = [
    {
      name: 'handle join data union request',
      dataUnionAddress: dataUnionAddress,
      memberAddress: memberAddress,
      grantPermissionsFunc: grantPermissionsFunc,
      getProductFunc: getProduct,
      httpPostFunc: httpPostOk,
      expectedStatusCode: 201,
    },
    {
      name: 'handle join data union request: join server error',
      dataUnionAddress: dataUnionAddress,
      memberAddress: memberAddress,
      grantPermissionsFunc: grantPermissionsFunc,
      getProductFunc: getProductNotFound,
      httpPostFunc: undefined,
      expectedStatusCode: 404,
    },
    {
      name: 'handle join data union request: data union product not found',
      dataUnionAddress: dataUnionAddress,
      memberAddress: memberAddress,
      grantPermissionsFunc: grantPermissionsFunc,
      getProductFunc: getProduct,
      httpPostFunc: httpPostError,
      expectedStatusCode: 404,
    },
    {
      name: 'handle join data union request: streamr client permission error',
      dataUnionAddress: dataUnionAddress,
      memberAddress: memberAddress,
      grantPermissionsFunc: grantPermissionsErrorFunc,
      getProductFunc: getProduct,
      httpPostFunc: httpPostOk,
      expectedStatusCode: 500,
    },
  ]
  testCases.forEach((tc) => {
    it(tc.name, async () => {
      app.post('/api/join', dataunion.getJoinRequestHandler(tc.grantPermissionsFunc, tc.getProductFunc, tc.httpPostFunc))
      srv = http.createServer(app)

      app.request.authorization = {
        subject: 'someone'
      }
      const response = await supertest(app)
        .post(`/api/join`)
        .set('Content-Type', 'application/json')
        .send({
          member: tc.memberAddress,
          dataUnion: tc.dataUnionAddress,
        })
      expect(response.statusCode).equal(tc.expectedStatusCode)
      expect(response.headers['content-type']).equal('application/json; charset=utf-8')
      if (response.statusCode === 201) {
        expect(response.body.dataUnionAddress).equal(tc.dataUnionAddress)
        expect(response.body.memberAddress).equal(tc.memberAddress)
      }
    })
  })
})
