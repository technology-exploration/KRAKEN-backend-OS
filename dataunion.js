const fetch = require('node-fetch')
const { StreamPermission } = require('streamr-client')

async function httpPostDataUnionJoinRequest(url, memberAddress, dataUnionAddress) {
  const postBody = {
    member: memberAddress,
    dataUnion: dataUnionAddress,
  }
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postBody)
  }
  return new Promise(async (resolve, reject) => {
    await fetch(url, options)
    .then(async (response) => {
      const json = await response.json()
      if (response.status >= 400) {
        reject(json)
      } else {
        resolve(json)
      }
    })
    .catch((err) => {
      reject(JSON.stringify(err))
    })
  })
}

function getJoinRequestHandler(grantPermissionsFunc, getProductByBeneficiaryAddressFunc, httpPostDataUnionJoinRequestFunc) {
  return async function(req, res) {
    const dataUnionAddress = req.body.dataUnion
    const memberAddress = req.body.member
    // product.beneficiaryAddress is data union contract address
    const product = await getProductByBeneficiaryAddressFunc(dataUnionAddress)
    if (product === undefined || product.beneficiaryAddress === undefined || product.beneficiaryAddress.toLowerCase() != dataUnionAddress.toLowerCase()) {
      res.status(404).json()
      return
    }
    if (req.authorization.subject !== product.ownerId) {
      res.status(403).json()
      return
    }
    try {
      for (let i = 0; i < product.streams.length; i++) {
        const streamId = product.streams[i]
        await grantPermissionsFunc(streamId, memberAddress).catch((err) => {
          throw err
        })
      }
    } catch (err) {
      res.status(500).json({
        error: {
          message: err.message,
        }
      })
      return
    }
    const url = () => {
      let dataUnionServer = "http://3.68.33.228:8080"
      if (process.env.DATA_UNION_SERVER !== undefined) {
        dataUnionServer = process.env.DATA_UNION_SERVER
      }
      return `${dataUnionServer}/api/join`
    }
    await httpPostDataUnionJoinRequestFunc(url(), memberAddress, dataUnionAddress)
      .then((response) => {
        // Do HTTP POST to data union join request server
        const jsonResponse = {
          dataUnionAddress: response.dataUnion,
          memberAddress: response.member,
        }
        res.status(201).json(jsonResponse)
      })
      .catch((err) => {
        res.status(404).json({
          error: {
            message: err,
          }
        })
      })
  }
}

module.exports = {
  getJoinRequestHandler,
  httpPostDataUnionJoinRequest,
}
