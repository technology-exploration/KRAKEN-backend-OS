## Logging

Use console for console stdout or filepath for file
```bash
export APP_LOGGING='{"debug":"console"}'
export APP_LOGGING='{"debug":"debug.log"}'
```

<!-- Implementation -->

## Libraries

### libUser.js 
Fabric CA client functionality -- admin page

### libUserContract 
User CRUD functionality and queries

### libDataContract
Product CRUD functionality and queries

### libBlockListener
Implements the Smart Contract event listener to catch data updates

### libReplicateDB
Implementation on replicating the ledger on a MongoDB 

### libQuery
Functions implementing query operations on the MongoDB

### libUtil
Helper functions


## Create Doc

```bash
npm run doc
open ./docs/index.html
```