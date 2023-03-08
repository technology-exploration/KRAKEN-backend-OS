const WebSocket = require("ws")
// const nodes = ["ws://localhost:5555/ws", "ws://localhost:5556/ws", "ws://localhost:5557/ws"]
const nodes = (process.env.MPC_NODES_URLS).split(",")
const nodesNumber = nodes.length
const nodesPassword = process.env.MPC_NODES_PASSWORD

console.log("MPC setting: ", nodes, nodesNumber, nodesPassword)

const makeIdWithSize = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')
//size is 64
const makeId = () => makeIdWithSize(64)

module.exports.uploadKeyShares = (productId, shares) => {
    const promises = []
    const requestInitTime = Date.now()
    for (let i=0; i < nodesNumber; i++){
        const socket = new WebSocket(nodes[i], nodesPassword)
        socket.onerror = error => console.log(`Socket Error of node ${i}: `, error)
        promises[i] = new Promise((resolve, reject) => {
            socket.onmessage = function(event) {
                let msg = JSON.parse(event.data)
                console.log(`Received response from node ${i}: ${JSON.stringify(msg)}`)
                socket.close()
                resolve(msg)
            }
            setTimeout(()=>{
                reject(`Timeout of 3 seconds for node ${i} expired`)
                socket.close()
            }, 5000)
        })
        socket.onopen = () => {
            console.log(`Successfully Connected to node ${i}`)
            let transaction = {
                ProductId: productId,
                Key: shares[i]
            }
    
            let msg = {
                RequestId: makeId(),
                Task: "save_key",
                Body: JSON.stringify(transaction),
                time: requestInitTime
            }
    
            console.log(`Sending share storage request to node ${i}:`, msg)
    
            socket.send(JSON.stringify(msg))
        }
    }

    return Promise.all(promises)
}

module.exports.analyticsComputation = (link, subscriberPubKey, productIdsString) => {
    const promises = []
    const requestInitTime = Date.now()
    for (let i=0; i < nodesNumber; i++){
        const socket = new WebSocket(nodes[i], nodesPassword)
        socket.onerror = error => console.log(`Socket Error of node ${i}: `, error)
        promises[i] = new Promise((resolve, reject) => {
            socket.onmessage = function(event) {
                var msg = JSON.parse(event.data);
                console.log(`Received response from node ${i}: ${JSON.stringify(msg)}`)
                res = msg.Body;
                socket.close();
                resolve(res);
            }
            setTimeout(()=>{
                socket.close()
                reject(`Timeout of 30 seconds for node ${i} expired`)
            }, 3000000)
        })
        socket.onopen = () => {
            console.log(`Successfully Connected to node ${i}`)
            var computation_request = {
                Program: "stats",
                Input: link, //"https://unilj-my.sharepoint.com/:t:/g/personal/tilen_marc_fmf_uni-lj_si/EVXan3OtjOdJmYyM7J7lqJYBK6aDPoN9Bku8fEk9dcu4Ig?e=FMmUWk&download=1"
                Params: "",
                ReceiverPubKey: subscriberPubKey,
                DatasetsId: productIdsString,
            };
    
            var msg = {
                RequestId: makeId(),
                Task: "computation",
                Body: JSON.stringify(computation_request),
                time: requestInitTime
            };
    
            console.log(`Sending key computation request to node ${i}:`, msg)
    
            socket.send(JSON.stringify(msg))
        }
    }
    return Promise.all(promises)
}

module.exports.keyRequest = (productId, aggregationKey, subscriberPubKey) => {
    const promises = []
    const requestInitTime = Date.now()
    for (let i=0; i < nodesNumber; i++){
        const socket = new WebSocket(nodes[i], nodesPassword)
        socket.onerror = error => console.log(`Socket Error of node ${i}: `, error)
        promises[i] = new Promise((resolve, reject) => {
            socket.onmessage = function(event) {
                let msg = JSON.parse(event.data)
                console.log(`Received response from node ${i}: ${JSON.stringify(msg)}`)
                socket.close()
                resolve(msg)
            }
            setTimeout(()=>{
                socket.close()
                reject(`Timeout of 30 seconds for node ${i} expired`)
            }, 30000)
        })
        socket.onopen = () => {
            console.log(`Successfully Connected to node ${i}`)
            let transaction = {
                ProductId: productId,
                ReceiverPk: subscriberPubKey,
            }

            i == 0 ? transaction.AggrKey = aggregationKey : null
    
            let msg = {
                RequestId: makeId(),
                Task: "provide_key",
                Body: JSON.stringify(transaction),
                time: requestInitTime
            }
    
            console.log(`Sending key computation request to node ${i}:`, msg)
    
            socket.send(JSON.stringify(msg))
        }
    }
    return Promise.all(promises)
}