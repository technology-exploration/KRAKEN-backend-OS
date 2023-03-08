window.lunrData = {
  "index": {
    "version": "1.0.0",
    "fields": [
      {
        "name": "longname",
        "boost": 1000
      },
      {
        "name": "name",
        "boost": 500
      },
      {
        "name": "tags",
        "boost": 300
      },
      {
        "name": "kind",
        "boost": 110
      },
      {
        "name": "title",
        "boost": 100
      },
      {
        "name": "summary",
        "boost": 70
      },
      {
        "name": "description",
        "boost": 50
      },
      {
        "name": "body",
        "boost": 1
      }
    ],
    "ref": "id",
    "tokenizer": "default",
    "documentStore": {
      "store": {
        "index.html": [
          "api",
          "app",
          "base",
          "bootstrap",
          "handlebar",
          "index",
          "jsdoc3",
          "kraken",
          "readm",
          "templat"
        ],
        "global.html": [
          "document",
          "global"
        ],
        "list_class.html": [
          "class",
          "document",
          "list",
          "list:class"
        ],
        "list_module.html": [
          "document",
          "list",
          "list:modul",
          "modul"
        ],
        "Query.html": [
          "cach",
          "class",
          "databas",
          "implement",
          "queri"
        ],
        "Query.html#queryAgreements": [
          "agreement",
          "array",
          "db",
          "function",
          "lt;async&gt",
          "query#queryagr",
          "queryagr"
        ],
        "Query.html#queryUsers": [
          "array",
          "db",
          "function",
          "lt;async&gt",
          "query#queryus",
          "queryus",
          "user"
        ],
        "Query.html#queryUserByID": [
          "db",
          "function",
          "id",
          "lt;async&gt",
          "object",
          "query#queryuserbyid",
          "queryuserbyid",
          "specif",
          "user"
        ],
        "Query.html#queryProducts": [
          "array",
          "db",
          "function",
          "lt;async&gt",
          "product",
          "query#queryproduct",
          "queryproduct"
        ],
        "Query.html#queryProductByID": [
          "db",
          "detail",
          "function",
          "id",
          "lt;async&gt",
          "object",
          "product",
          "productid",
          "query#queryproductbyid",
          "queryproductbyid"
        ],
        "Query.html#queryProductsByUser": [
          "array",
          "function",
          "lt;async&gt",
          "product",
          "queri",
          "query#queryproductsbyus",
          "queryproductsbyus",
          "user",
          "userid"
        ],
        "Query.html#queryCatalogue": [
          "array",
          "catalogu",
          "date",
          "expir",
          "function",
          "lt;async&gt",
          "product",
          "query#querycatalogu",
          "querycatalogu"
        ],
        "Query.html#matchPurpose": [
          "bool",
          "buyer",
          "buyerpurpos",
          "datapurpos",
          "function",
          "match",
          "matchpurpos",
          "polici",
          "purpos",
          "query#matchpurpos"
        ],
        "Query.html#queryFilteredProducts": [
          "algorithm",
          "array",
          "filter",
          "function",
          "lt;async&gt",
          "query#queryfilteredproduct",
          "queryfilteredproduct",
          "userid"
        ],
        "Query.html#queryTransactionHistoryForProduct": [
          "array",
          "function",
          "histori",
          "lt;async&gt",
          "product",
          "productid",
          "queri",
          "query#querytransactionhistoryforproduct",
          "querytransactionhistoryforproduct",
          "specif",
          "transact"
        ],
        "AgreementContract.html": [
          "agreement",
          "agreementcontract",
          "api",
          "class",
          "contract"
        ],
        "AgreementContract.html#updateAgreement": [
          "agreement",
          "agreementcontract#updateagr",
          "client",
          "clientid",
          "function",
          "lt;async&gt",
          "org",
          "statu",
          "string",
          "transactionid",
          "updat",
          "updateagr"
        ],
        "AgreementContract.html#getAgreement": [
          "agreement",
          "agreementcontract#getagr",
          "clientid",
          "fetch",
          "function",
          "getagr",
          "lt;async&gt",
          "object",
          "transactionid"
        ],
        "AgreementContract.html#getAgreements": [
          "agreement",
          "agreementcontract#getagr",
          "array",
          "clientid",
          "function",
          "getagr",
          "lt;async&gt"
        ],
        "DataContract.html": [
          "api",
          "catalogu",
          "class",
          "contract",
          "data",
          "datacontract"
        ],
        "DataContract.html#createProduct": [
          "creat",
          "createproduct",
          "datacontract#createproduct",
          "function",
          "lt;async&gt",
          "product",
          "string",
          "submit",
          "transact",
          "userid"
        ],
        "DataContract.html#updateProduct": [
          "datacontract#updateproduct",
          "error",
          "exist",
          "function",
          "lt;async&gt",
          "product",
          "submit",
          "transact",
          "updat",
          "updateproduct",
          "userid"
        ],
        "DataContract.html#readProduct": [
          "datacontract#readproduct",
          "evalu",
          "fetch",
          "function",
          "ledger",
          "lt;async&gt",
          "object",
          "product",
          "productid",
          "readproduct",
          "transact",
          "userid"
        ],
        "DataContract.html#buyProduct": [
          "buy",
          "buyer",
          "buyerparam",
          "buyproduct",
          "datacontract#buyproduct",
          "function",
          "lt;async&gt",
          "product",
          "productid",
          "string",
          "submit",
          "transact",
          "user",
          "userid"
        ],
        "DataContract.html#deleteProduct": [
          "datacontract#deleteproduct",
          "delet",
          "deleteproduct",
          "error",
          "function",
          "lt;async&gt",
          "product",
          "productid",
          "state",
          "submit",
          "transact",
          "userid"
        ],
        "DataContract.html#getProducts": [
          "array",
          "clientid",
          "datacontract#getproduct",
          "function",
          "getproduct",
          "lt;async&gt",
          "product",
          "queri"
        ],
        "CAServices.html": [
          "api",
          "ca",
          "caservic",
          "class",
          "fabric",
          "implement",
          "servic"
        ],
        "CAServices.html#getIdentityContextFromWallet": [
          "caservices#getidentitycontextfromwallet",
          "function",
          "getidentitycontextfromwallet",
          "ident",
          "lt;async&gt",
          "object",
          "userid",
          "wallet"
        ],
        "CAServices.html#createCA": [
          "base",
          "ca",
          "caservices#createca",
          "ccp.yaml",
          "creat",
          "createca",
          "exist",
          "file",
          "function",
          "instanc",
          "local",
          "object",
          "path",
          "system"
        ],
        "CAServices.html#isAdmin": [
          "admin",
          "appuserid",
          "bool",
          "ca",
          "caservices#isadmin",
          "check",
          "function",
          "isadmin",
          "lt;async&gt",
          "org'",
          "regist",
          "user"
        ],
        "CAServices.html#updateUser": [
          "appuserid",
          "bool",
          "ca",
          "caservices#updateus",
          "function",
          "identityrequest",
          "lt;async&gt",
          "updat",
          "updateus",
          "user"
        ],
        "CAServices.html#deleteUser": [
          "appuserid",
          "ca",
          "caservices#deleteus",
          "deleteus",
          "forc",
          "function",
          "lt;async&gt",
          "number",
          "remov",
          "user"
        ],
        "CAServices.html#registerAppUser": [
          "appuserid",
          "appuserrol",
          "ca",
          "caservices#registerappus",
          "function",
          "lt;async&gt",
          "number",
          "organization'",
          "regist",
          "registerappus",
          "user"
        ],
        "CAServices.html#enrollAppUser": [
          "appuserid",
          "caservices#enrollappus",
          "csr",
          "enrol",
          "enrollappus",
          "function",
          "lt;async&gt",
          "number",
          "obtain",
          "registr",
          "secret",
          "user"
        ],
        "CAServices.html#importMSP": [
          "caservices#importmsp",
          "exist",
          "folder",
          "function",
          "import",
          "importmsp",
          "local",
          "lt;async&gt",
          "msp",
          "number",
          "userid",
          "wallet"
        ],
        "CAServices.html#exportMSP": [
          "caservices#exportmsp",
          "exist",
          "exportmsp",
          "folder",
          "function",
          "import",
          "local",
          "lt;async&gt",
          "msp",
          "number",
          "userid",
          "wallet"
        ],
        "CAServices.html#reenrollAppUser": [
          "attrreq",
          "caservices#reenrollappus",
          "csr",
          "function",
          "lt;async&gt",
          "object",
          "obtain",
          "reenrollappus",
          "registr",
          "renrol",
          "secret",
          "signingident",
          "user"
        ],
        "CAServices.html#revokeCertificate": [
          "caservices#revokecertif",
          "certif",
          "function",
          "lt;async&gt",
          "orgusersca",
          "reason",
          "revok",
          "revokecertif",
          "specif",
          "string",
          "user"
        ],
        "CAServices.html#getCertificateBySerial": [
          "ca",
          "caservices#getcertificatebyseri",
          "certif",
          "fetch",
          "function",
          "getcertificatebyseri",
          "lt;async&gt",
          "number",
          "serial",
          "string"
        ],
        "CAServices.html#getExpirationDate": [
          "appuserid",
          "caservices#getexpirationd",
          "certif",
          "date",
          "expir",
          "function",
          "getexpirationd",
          "isod",
          "lt;async&gt",
          "max",
          "user'"
        ],
        "CAServices.html#addRevokedCertificate": [
          "add",
          "addrevokedcertif",
          "caservices#addrevokedcertif",
          "certif",
          "file",
          "function",
          "local",
          "revok"
        ],
        "UserContract.html": [
          "api",
          "class",
          "contract",
          "credenti",
          "user",
          "usercontract"
        ],
        "UserContract.html#createUser": [
          "contract",
          "creat",
          "createus",
          "function",
          "lt;async&gt",
          "new",
          "smart",
          "transact",
          "user",
          "usercontract#createus",
          "userid"
        ],
        "UserContract.html#updateUser": [
          "contract",
          "function",
          "lt;async&gt",
          "smart",
          "transact",
          "updat",
          "updateus",
          "user",
          "usercontract#updateus",
          "userid"
        ],
        "UserContract.html#readUser": [
          "contract",
          "function",
          "lt;async&gt",
          "object",
          "read",
          "readus",
          "smart",
          "transact",
          "user",
          "usercontract#readus",
          "userid",
          "usernam"
        ],
        "UserContract.html#deleteUser": [
          "admin",
          "atm",
          "author",
          "contract",
          "delet",
          "deleteus",
          "error",
          "function",
          "lt;async&gt",
          "owner",
          "smart",
          "transact",
          "user",
          "usercontract#deleteus",
          "userid",
          "usernam"
        ],
        "UserContract.html#getUsers": [
          "clientid",
          "function",
          "getus",
          "lt;async&gt",
          "object",
          "queri",
          "user",
          "usercontract#getus"
        ],
        "Grpc.html": [
          "channel",
          "class",
          "config",
          "crl",
          "function",
          "grpc",
          "implement",
          "includ",
          "main",
          "oper",
          "organization'",
          "peer",
          "remot",
          "trigger",
          "updat"
        ],
        "Grpc.html#sendMessage": [
          "function",
          "grpc#sendmessag",
          "messag",
          "msg",
          "send",
          "sendmessag",
          "test"
        ],
        "Grpc.html#triggerCRLUpdate": [
          "crlupdaterequest",
          "crlupdaterespons",
          "function",
          "grpc#triggercrlupd",
          "lt;async&gt",
          "request",
          "send",
          "triggercrlupd"
        ],
        "OffchainDB.html": [
          "class",
          "construct",
          "object",
          "offchaindb"
        ],
        "OffchainDB.html#initDB": [
          "db",
          "function",
          "initdb",
          "initi",
          "lt;async&gt",
          "offchaindb#initdb"
        ],
        "OffchainDB.html#openConnection": [
          "connect",
          "db",
          "function",
          "lt;async&gt",
          "offchaindb#openconnect",
          "open",
          "openconnect"
        ],
        "OffchainDB.html#closeConnection": [
          "close",
          "closeconnect",
          "connect",
          "db",
          "function",
          "lt;async&gt",
          "offchaindb#closeconnect"
        ],
        "OffchainDB.html#updateInventory": [
          "function",
          "inventori",
          "key",
          "lt;async&gt",
          "offchaindb#updateinventori",
          "op",
          "owner",
          "productid",
          "updat",
          "updateinventori",
          "user"
        ],
        "OffchainDB.html#writeUserData": [
          "data",
          "db",
          "function",
          "key",
          "lt;async&gt",
          "offchaindb#writeuserdata",
          "user",
          "write",
          "writeuserdata"
        ],
        "OffchainDB.html#updateUserData": [
          "data",
          "db",
          "function",
          "key",
          "lt;async&gt",
          "offchaindb#updateuserdata",
          "updat",
          "updateuserdata",
          "user"
        ],
        "OffchainDB.html#deleteUserData": [
          "data",
          "db",
          "delet",
          "deleteuserdata",
          "function",
          "key",
          "lt;async&gt",
          "offchaindb#deleteuserdata",
          "user"
        ],
        "OffchainDB.html#writeProductData": [
          "data",
          "db",
          "function",
          "key",
          "lt;async&gt",
          "offchaindb#writeproductdata",
          "product",
          "write",
          "writeproductdata"
        ],
        "OffchainDB.html#updateProductData": [
          "data",
          "db",
          "function",
          "key",
          "lt;async&gt",
          "offchaindb#updateproductdata",
          "product",
          "updat",
          "updateproductdata"
        ],
        "OffchainDB.html#deleteProductData": [
          "data",
          "db",
          "delet",
          "deleteproductdata",
          "function",
          "key",
          "lt;async&gt",
          "offchaindb#deleteproductdata",
          "product"
        ],
        "OffchainDB.html#writeAgreement": [
          "agreement",
          "data",
          "db",
          "function",
          "key",
          "lt;async&gt",
          "offchaindb#writeagr",
          "write",
          "writeagr"
        ],
        "OffchainDB.html#updateAgreement": [
          "agrem",
          "data",
          "db",
          "function",
          "key",
          "lt;async&gt",
          "offchaindb#updateagr",
          "updat",
          "updateagr"
        ],
        "OffchainDB.html#readUsers": [
          "array.&lt;object&gt",
          "function",
          "lt;async&gt",
          "offchaindb#readus",
          "queri",
          "readus",
          "user"
        ],
        "OffchainDB.html#readUserData": [
          "function",
          "lt;async&gt",
          "object",
          "offchaindb#readuserdata",
          "queri",
          "readuserdata",
          "user",
          "userid"
        ],
        "OffchainDB.html#readProducts": [
          "array.&lt;object&gt",
          "function",
          "lt;async&gt",
          "offchaindb#readproduct",
          "product",
          "queri",
          "readproduct"
        ],
        "OffchainDB.html#readCatalogue": [
          "array",
          "certif",
          "databas",
          "date",
          "expir",
          "fetch",
          "function",
          "join",
          "lt;async&gt",
          "offchaindb#readcatalogu",
          "owner'",
          "product",
          "readcatalogu"
        ],
        "OffchainDB.html#readProductsByFilter": [
          "array.&lt;object&gt",
          "filter",
          "function",
          "lt;async&gt",
          "offchaindb#readproductsbyfilt",
          "product",
          "queri",
          "readproductsbyfilt"
        ],
        "OffchainDB.html#readAgreements": [
          "array.&lt;object&gt",
          "filter",
          "function",
          "lt;async&gt",
          "offchaindb#readagr",
          "product",
          "queri",
          "readagr"
        ],
        "OffchainDB.html#readProductData": [
          "function",
          "lt;async&gt",
          "object",
          "offchaindb#readproductdata",
          "product",
          "productid",
          "queri",
          "readproductdata"
        ],
        "OffchainDB.html#eventHandler": [
          "db",
          "event",
          "eventdata",
          "eventhandl",
          "eventnam",
          "function",
          "handl",
          "lt;async&gt",
          "offchaindb#eventhandl",
          "oper"
        ],
        "OffchainDB.html#dbExists": [
          "bool",
          "check",
          "db",
          "dbexist",
          "exist",
          "function",
          "lt;async&gt",
          "offchaindb#dbexist"
        ],
        "module-libBlockListener.html": [
          "block",
          "event",
          "handl",
          "implement",
          "libblocklisten",
          "librari",
          "listen",
          "modul",
          "module:libblocklisten"
        ],
        "module-liCrypto.html": [
          "crypto",
          "function",
          "implement",
          "licrypto",
          "modul",
          "module:licrypto",
          "relat"
        ],
        "module-libSignOffline.html": [
          "implement",
          "libsignofflin",
          "modul",
          "module:libsignofflin",
          "offlin",
          "sign",
          "transact"
        ],
        "module-libUtil.html": [
          "function",
          "helper",
          "libutil",
          "modul",
          "module:libutil"
        ]
      },
      "length": 76
    },
    "tokenStore": {
      "root": {
        "docs": {},
        "a": {
          "docs": {},
          "p": {
            "docs": {},
            "i": {
              "docs": {
                "index.html": {
                  "ref": "index.html",
                  "tf": 200
                },
                "AgreementContract.html": {
                  "ref": "AgreementContract.html",
                  "tf": 16.666666666666664
                },
                "DataContract.html": {
                  "ref": "DataContract.html",
                  "tf": 12.5
                },
                "CAServices.html": {
                  "ref": "CAServices.html",
                  "tf": 10
                },
                "UserContract.html": {
                  "ref": "UserContract.html",
                  "tf": 12.5
                }
              }
            },
            "p": {
              "docs": {
                "index.html": {
                  "ref": "index.html",
                  "tf": 200
                }
              },
              "u": {
                "docs": {},
                "s": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "d": {
                          "docs": {
                            "CAServices.html#isAdmin": {
                              "ref": "CAServices.html#isAdmin",
                              "tf": 25
                            },
                            "CAServices.html#updateUser": {
                              "ref": "CAServices.html#updateUser",
                              "tf": 20
                            },
                            "CAServices.html#deleteUser": {
                              "ref": "CAServices.html#deleteUser",
                              "tf": 20
                            },
                            "CAServices.html#registerAppUser": {
                              "ref": "CAServices.html#registerAppUser",
                              "tf": 20
                            },
                            "CAServices.html#enrollAppUser": {
                              "ref": "CAServices.html#enrollAppUser",
                              "tf": 16.666666666666664
                            },
                            "CAServices.html#getExpirationDate": {
                              "ref": "CAServices.html#getExpirationDate",
                              "tf": 25
                            }
                          }
                        }
                      },
                      "r": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "l": {
                            "docs": {
                              "CAServices.html#registerAppUser": {
                                "ref": "CAServices.html#registerAppUser",
                                "tf": 20
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "g": {
            "docs": {},
            "r": {
              "docs": {},
              "e": {
                "docs": {},
                "e": {
                  "docs": {},
                  "m": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "t": {
                          "docs": {
                            "Query.html#queryAgreements": {
                              "ref": "Query.html#queryAgreements",
                              "tf": 25
                            },
                            "AgreementContract.html": {
                              "ref": "AgreementContract.html",
                              "tf": 16.666666666666664
                            },
                            "AgreementContract.html#updateAgreement": {
                              "ref": "AgreementContract.html#updateAgreement",
                              "tf": 12.5
                            },
                            "AgreementContract.html#getAgreement": {
                              "ref": "AgreementContract.html#getAgreement",
                              "tf": 25
                            },
                            "AgreementContract.html#getAgreements": {
                              "ref": "AgreementContract.html#getAgreements",
                              "tf": 50
                            },
                            "OffchainDB.html#writeAgreement": {
                              "ref": "OffchainDB.html#writeAgreement",
                              "tf": 16.666666666666664
                            }
                          },
                          "c": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "c": {
                                        "docs": {},
                                        "t": {
                                          "docs": {
                                            "AgreementContract.html": {
                                              "ref": "AgreementContract.html",
                                              "tf": 1900
                                            }
                                          },
                                          "#": {
                                            "docs": {},
                                            "u": {
                                              "docs": {},
                                              "p": {
                                                "docs": {},
                                                "d": {
                                                  "docs": {},
                                                  "a": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "a": {
                                                          "docs": {},
                                                          "g": {
                                                            "docs": {},
                                                            "r": {
                                                              "docs": {
                                                                "AgreementContract.html#updateAgreement": {
                                                                  "ref": "AgreementContract.html#updateAgreement",
                                                                  "tf": 1150
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "g": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {},
                                                  "a": {
                                                    "docs": {},
                                                    "g": {
                                                      "docs": {},
                                                      "r": {
                                                        "docs": {
                                                          "AgreementContract.html#getAgreement": {
                                                            "ref": "AgreementContract.html#getAgreement",
                                                            "tf": 1150
                                                          },
                                                          "AgreementContract.html#getAgreements": {
                                                            "ref": "AgreementContract.html#getAgreements",
                                                            "tf": 1150
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "m": {
                  "docs": {
                    "OffchainDB.html#updateAgreement": {
                      "ref": "OffchainDB.html#updateAgreement",
                      "tf": 16.666666666666664
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "r": {
              "docs": {},
              "a": {
                "docs": {},
                "y": {
                  "docs": {
                    "Query.html#queryAgreements": {
                      "ref": "Query.html#queryAgreements",
                      "tf": 33.33333333333333
                    },
                    "Query.html#queryUsers": {
                      "ref": "Query.html#queryUsers",
                      "tf": 33.33333333333333
                    },
                    "Query.html#queryProducts": {
                      "ref": "Query.html#queryProducts",
                      "tf": 33.33333333333333
                    },
                    "Query.html#queryProductsByUser": {
                      "ref": "Query.html#queryProductsByUser",
                      "tf": 25
                    },
                    "Query.html#queryCatalogue": {
                      "ref": "Query.html#queryCatalogue",
                      "tf": 33.33333333333333
                    },
                    "Query.html#queryFilteredProducts": {
                      "ref": "Query.html#queryFilteredProducts",
                      "tf": 25
                    },
                    "Query.html#queryTransactionHistoryForProduct": {
                      "ref": "Query.html#queryTransactionHistoryForProduct",
                      "tf": 25
                    },
                    "AgreementContract.html#getAgreements": {
                      "ref": "AgreementContract.html#getAgreements",
                      "tf": 25
                    },
                    "DataContract.html#getProducts": {
                      "ref": "DataContract.html#getProducts",
                      "tf": 25
                    },
                    "OffchainDB.html#readCatalogue": {
                      "ref": "OffchainDB.html#readCatalogue",
                      "tf": 33.33333333333333
                    }
                  },
                  ".": {
                    "docs": {},
                    "&": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          ";": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "b": {
                                "docs": {},
                                "j": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "&": {
                                          "docs": {},
                                          "g": {
                                            "docs": {},
                                            "t": {
                                              "docs": {
                                                "OffchainDB.html#readUsers": {
                                                  "ref": "OffchainDB.html#readUsers",
                                                  "tf": 33.33333333333333
                                                },
                                                "OffchainDB.html#readProducts": {
                                                  "ref": "OffchainDB.html#readProducts",
                                                  "tf": 33.33333333333333
                                                },
                                                "OffchainDB.html#readProductsByFilter": {
                                                  "ref": "OffchainDB.html#readProductsByFilter",
                                                  "tf": 25
                                                },
                                                "OffchainDB.html#readAgreements": {
                                                  "ref": "OffchainDB.html#readAgreements",
                                                  "tf": 33.33333333333333
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "l": {
            "docs": {},
            "g": {
              "docs": {},
              "o": {
                "docs": {},
                "r": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "h": {
                        "docs": {},
                        "m": {
                          "docs": {
                            "Query.html#queryFilteredProducts": {
                              "ref": "Query.html#queryFilteredProducts",
                              "tf": 25
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "d": {
            "docs": {},
            "m": {
              "docs": {},
              "i": {
                "docs": {},
                "n": {
                  "docs": {
                    "CAServices.html#isAdmin": {
                      "ref": "CAServices.html#isAdmin",
                      "tf": 8.333333333333332
                    },
                    "UserContract.html#deleteUser": {
                      "ref": "UserContract.html#deleteUser",
                      "tf": 5
                    }
                  }
                }
              }
            },
            "d": {
              "docs": {
                "CAServices.html#addRevokedCertificate": {
                  "ref": "CAServices.html#addRevokedCertificate",
                  "tf": 10
                }
              },
              "r": {
                "docs": {},
                "e": {
                  "docs": {},
                  "v": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "k": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "d": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "f": {
                                        "docs": {
                                          "CAServices.html#addRevokedCertificate": {
                                            "ref": "CAServices.html#addRevokedCertificate",
                                            "tf": 700
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            "t": {
              "docs": {},
              "r": {
                "docs": {},
                "r": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "q": {
                      "docs": {
                        "CAServices.html#reenrollAppUser": {
                          "ref": "CAServices.html#reenrollAppUser",
                          "tf": 16.666666666666664
                        }
                      }
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {
                "UserContract.html#deleteUser": {
                  "ref": "UserContract.html#deleteUser",
                  "tf": 5
                }
              }
            }
          },
          "u": {
            "docs": {},
            "t": {
              "docs": {},
              "h": {
                "docs": {},
                "o": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "UserContract.html#deleteUser": {
                        "ref": "UserContract.html#deleteUser",
                        "tf": 5
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "b": {
          "docs": {},
          "a": {
            "docs": {},
            "s": {
              "docs": {},
              "e": {
                "docs": {
                  "index.html": {
                    "ref": "index.html",
                    "tf": 14
                  },
                  "CAServices.html#createCA": {
                    "ref": "CAServices.html#createCA",
                    "tf": 4.545454545454546
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "o": {
              "docs": {},
              "t": {
                "docs": {},
                "s": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "p": {
                          "docs": {
                            "index.html": {
                              "ref": "index.html",
                              "tf": 14
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "l": {
                "docs": {
                  "Query.html#matchPurpose": {
                    "ref": "Query.html#matchPurpose",
                    "tf": 25
                  },
                  "CAServices.html#isAdmin": {
                    "ref": "CAServices.html#isAdmin",
                    "tf": 25
                  },
                  "CAServices.html#updateUser": {
                    "ref": "CAServices.html#updateUser",
                    "tf": 20
                  },
                  "OffchainDB.html#dbExists": {
                    "ref": "OffchainDB.html#dbExists",
                    "tf": 33.33333333333333
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "y": {
              "docs": {
                "DataContract.html#buyProduct": {
                  "ref": "DataContract.html#buyProduct",
                  "tf": 7.142857142857142
                }
              },
              "e": {
                "docs": {},
                "r": {
                  "docs": {
                    "Query.html#matchPurpose": {
                      "ref": "Query.html#matchPurpose",
                      "tf": 12.5
                    },
                    "DataContract.html#buyProduct": {
                      "ref": "DataContract.html#buyProduct",
                      "tf": 7.142857142857142
                    }
                  },
                  "p": {
                    "docs": {},
                    "u": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "p": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "s": {
                              "docs": {
                                "Query.html#matchPurpose": {
                                  "ref": "Query.html#matchPurpose",
                                  "tf": 25
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "a": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "m": {
                            "docs": {
                              "DataContract.html#buyProduct": {
                                "ref": "DataContract.html#buyProduct",
                                "tf": 16.666666666666664
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "p": {
                "docs": {},
                "r": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "d": {
                      "docs": {},
                      "u": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "t": {
                            "docs": {
                              "DataContract.html#buyProduct": {
                                "ref": "DataContract.html#buyProduct",
                                "tf": 673.8095238095237
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "l": {
            "docs": {},
            "o": {
              "docs": {},
              "c": {
                "docs": {},
                "k": {
                  "docs": {
                    "module-libBlockListener.html": {
                      "ref": "module-libBlockListener.html",
                      "tf": 8.333333333333332
                    }
                  }
                }
              }
            }
          }
        },
        "h": {
          "docs": {},
          "a": {
            "docs": {},
            "n": {
              "docs": {},
              "d": {
                "docs": {},
                "l": {
                  "docs": {
                    "OffchainDB.html#eventHandler": {
                      "ref": "OffchainDB.html#eventHandler",
                      "tf": 12.5
                    },
                    "module-libBlockListener.html": {
                      "ref": "module-libBlockListener.html",
                      "tf": 8.333333333333332
                    }
                  },
                  "e": {
                    "docs": {},
                    "b": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "r": {
                          "docs": {
                            "index.html": {
                              "ref": "index.html",
                              "tf": 14
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "s": {
              "docs": {},
              "t": {
                "docs": {},
                "o": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "i": {
                      "docs": {
                        "Query.html#queryTransactionHistoryForProduct": {
                          "ref": "Query.html#queryTransactionHistoryForProduct",
                          "tf": 10
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "l": {
              "docs": {},
              "p": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "module-libUtil.html": {
                        "ref": "module-libUtil.html",
                        "tf": 25
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "i": {
          "docs": {},
          "n": {
            "docs": {},
            "d": {
              "docs": {},
              "e": {
                "docs": {},
                "x": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 1300
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "t": {
                "docs": {},
                "a": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "c": {
                      "docs": {
                        "CAServices.html#createCA": {
                          "ref": "CAServices.html#createCA",
                          "tf": 4.545454545454546
                        }
                      }
                    }
                  }
                }
              }
            },
            "c": {
              "docs": {},
              "l": {
                "docs": {},
                "u": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "Grpc.html": {
                        "ref": "Grpc.html",
                        "tf": 3.8461538461538463
                      }
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "t": {
                "docs": {},
                "d": {
                  "docs": {},
                  "b": {
                    "docs": {
                      "OffchainDB.html#initDB": {
                        "ref": "OffchainDB.html#initDB",
                        "tf": 700
                      }
                    }
                  }
                },
                "i": {
                  "docs": {
                    "OffchainDB.html#initDB": {
                      "ref": "OffchainDB.html#initDB",
                      "tf": 25
                    }
                  }
                }
              }
            },
            "v": {
              "docs": {},
              "e": {
                "docs": {},
                "n": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "i": {
                          "docs": {
                            "OffchainDB.html#updateInventory": {
                              "ref": "OffchainDB.html#updateInventory",
                              "tf": 16.666666666666664
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "m": {
            "docs": {},
            "p": {
              "docs": {},
              "l": {
                "docs": {},
                "e": {
                  "docs": {},
                  "m": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "t": {
                          "docs": {
                            "Query.html": {
                              "ref": "Query.html",
                              "tf": 12.5
                            },
                            "CAServices.html": {
                              "ref": "CAServices.html",
                              "tf": 10
                            },
                            "Grpc.html": {
                              "ref": "Grpc.html",
                              "tf": 3.8461538461538463
                            },
                            "module-libBlockListener.html": {
                              "ref": "module-libBlockListener.html",
                              "tf": 8.333333333333332
                            },
                            "module-liCrypto.html": {
                              "ref": "module-liCrypto.html",
                              "tf": 12.5
                            },
                            "module-libSignOffline.html": {
                              "ref": "module-libSignOffline.html",
                              "tf": 12.5
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "o": {
                "docs": {},
                "r": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "CAServices.html#importMSP": {
                        "ref": "CAServices.html#importMSP",
                        "tf": 8.333333333333332
                      },
                      "CAServices.html#exportMSP": {
                        "ref": "CAServices.html#exportMSP",
                        "tf": 8.333333333333332
                      }
                    },
                    "m": {
                      "docs": {},
                      "s": {
                        "docs": {},
                        "p": {
                          "docs": {
                            "CAServices.html#importMSP": {
                              "ref": "CAServices.html#importMSP",
                              "tf": 675
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "d": {
            "docs": {
              "Query.html#queryUserByID": {
                "ref": "Query.html#queryUserByID",
                "tf": 12.5
              },
              "Query.html#queryProductByID": {
                "ref": "Query.html#queryProductByID",
                "tf": 12.5
              }
            },
            "e": {
              "docs": {},
              "n": {
                "docs": {},
                "t": {
                  "docs": {
                    "CAServices.html#getIdentityContextFromWallet": {
                      "ref": "CAServices.html#getIdentityContextFromWallet",
                      "tf": 25
                    }
                  },
                  "i": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "y": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "q": {
                              "docs": {},
                              "u": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "s": {
                                    "docs": {},
                                    "t": {
                                      "docs": {
                                        "CAServices.html#updateUser": {
                                          "ref": "CAServices.html#updateUser",
                                          "tf": 20
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "s": {
            "docs": {},
            "a": {
              "docs": {},
              "d": {
                "docs": {},
                "m": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "n": {
                      "docs": {
                        "CAServices.html#isAdmin": {
                          "ref": "CAServices.html#isAdmin",
                          "tf": 675
                        }
                      }
                    }
                  }
                }
              }
            },
            "o": {
              "docs": {},
              "d": {
                "docs": {
                  "CAServices.html#getExpirationDate": {
                    "ref": "CAServices.html#getExpirationDate",
                    "tf": 25
                  }
                }
              }
            }
          }
        },
        "j": {
          "docs": {},
          "s": {
            "docs": {},
            "d": {
              "docs": {},
              "o": {
                "docs": {},
                "c": {
                  "3": {
                    "docs": {
                      "index.html": {
                        "ref": "index.html",
                        "tf": 14
                      }
                    }
                  },
                  "docs": {}
                }
              }
            }
          },
          "o": {
            "docs": {},
            "i": {
              "docs": {},
              "n": {
                "docs": {
                  "OffchainDB.html#readCatalogue": {
                    "ref": "OffchainDB.html#readCatalogue",
                    "tf": 6.25
                  }
                }
              }
            }
          }
        },
        "k": {
          "docs": {},
          "r": {
            "docs": {},
            "a": {
              "docs": {},
              "k": {
                "docs": {},
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "index.html": {
                        "ref": "index.html",
                        "tf": 200
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "y": {
              "docs": {
                "OffchainDB.html#updateInventory": {
                  "ref": "OffchainDB.html#updateInventory",
                  "tf": 16.666666666666664
                },
                "OffchainDB.html#writeUserData": {
                  "ref": "OffchainDB.html#writeUserData",
                  "tf": 25
                },
                "OffchainDB.html#updateUserData": {
                  "ref": "OffchainDB.html#updateUserData",
                  "tf": 25
                },
                "OffchainDB.html#deleteUserData": {
                  "ref": "OffchainDB.html#deleteUserData",
                  "tf": 25
                },
                "OffchainDB.html#writeProductData": {
                  "ref": "OffchainDB.html#writeProductData",
                  "tf": 25
                },
                "OffchainDB.html#updateProductData": {
                  "ref": "OffchainDB.html#updateProductData",
                  "tf": 25
                },
                "OffchainDB.html#deleteProductData": {
                  "ref": "OffchainDB.html#deleteProductData",
                  "tf": 25
                },
                "OffchainDB.html#writeAgreement": {
                  "ref": "OffchainDB.html#writeAgreement",
                  "tf": 25
                },
                "OffchainDB.html#updateAgreement": {
                  "ref": "OffchainDB.html#updateAgreement",
                  "tf": 25
                }
              }
            }
          }
        },
        "r": {
          "docs": {},
          "e": {
            "docs": {},
            "a": {
              "docs": {},
              "d": {
                "docs": {
                  "UserContract.html#readUser": {
                    "ref": "UserContract.html#readUser",
                    "tf": 10
                  }
                },
                "m": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 110
                    }
                  }
                },
                "p": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "d": {
                        "docs": {},
                        "u": {
                          "docs": {},
                          "c": {
                            "docs": {},
                            "t": {
                              "docs": {
                                "DataContract.html#readProduct": {
                                  "ref": "DataContract.html#readProduct",
                                  "tf": 678.3333333333334
                                },
                                "OffchainDB.html#readProducts": {
                                  "ref": "OffchainDB.html#readProducts",
                                  "tf": 683.3333333333334
                                }
                              },
                              "s": {
                                "docs": {},
                                "b": {
                                  "docs": {},
                                  "y": {
                                    "docs": {},
                                    "f": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "l": {
                                          "docs": {},
                                          "t": {
                                            "docs": {
                                              "OffchainDB.html#readProductsByFilter": {
                                                "ref": "OffchainDB.html#readProductsByFilter",
                                                "tf": 675
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "d": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "a": {
                                      "docs": {
                                        "OffchainDB.html#readProductData": {
                                          "ref": "OffchainDB.html#readProductData",
                                          "tf": 675
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "u": {
                  "docs": {},
                  "s": {
                    "docs": {
                      "UserContract.html#readUser": {
                        "ref": "UserContract.html#readUser",
                        "tf": 670
                      },
                      "OffchainDB.html#readUsers": {
                        "ref": "OffchainDB.html#readUsers",
                        "tf": 683.3333333333334
                      }
                    },
                    "e": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "d": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "a": {
                                "docs": {
                                  "OffchainDB.html#readUserData": {
                                    "ref": "OffchainDB.html#readUserData",
                                    "tf": 675
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "c": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "l": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "g": {
                              "docs": {},
                              "u": {
                                "docs": {
                                  "OffchainDB.html#readCatalogue": {
                                    "ref": "OffchainDB.html#readCatalogue",
                                    "tf": 683.3333333333334
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "a": {
                  "docs": {},
                  "g": {
                    "docs": {},
                    "r": {
                      "docs": {
                        "OffchainDB.html#readAgreements": {
                          "ref": "OffchainDB.html#readAgreements",
                          "tf": 683.3333333333334
                        }
                      }
                    }
                  }
                }
              },
              "s": {
                "docs": {},
                "o": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "CAServices.html#revokeCertificate": {
                        "ref": "CAServices.html#revokeCertificate",
                        "tf": 20
                      }
                    }
                  }
                }
              }
            },
            "g": {
              "docs": {},
              "i": {
                "docs": {},
                "s": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "CAServices.html#isAdmin": {
                        "ref": "CAServices.html#isAdmin",
                        "tf": 8.333333333333332
                      },
                      "CAServices.html#registerAppUser": {
                        "ref": "CAServices.html#registerAppUser",
                        "tf": 12.5
                      }
                    },
                    "e": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "p": {
                            "docs": {},
                            "p": {
                              "docs": {},
                              "u": {
                                "docs": {},
                                "s": {
                                  "docs": {
                                    "CAServices.html#registerAppUser": {
                                      "ref": "CAServices.html#registerAppUser",
                                      "tf": 670
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "r": {
                      "docs": {
                        "CAServices.html#enrollAppUser": {
                          "ref": "CAServices.html#enrollAppUser",
                          "tf": 10
                        },
                        "CAServices.html#reenrollAppUser": {
                          "ref": "CAServices.html#reenrollAppUser",
                          "tf": 10
                        }
                      }
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "o": {
                "docs": {},
                "v": {
                  "docs": {
                    "CAServices.html#deleteUser": {
                      "ref": "CAServices.html#deleteUser",
                      "tf": 16.666666666666664
                    }
                  }
                },
                "t": {
                  "docs": {
                    "Grpc.html": {
                      "ref": "Grpc.html",
                      "tf": 3.8461538461538463
                    }
                  }
                }
              }
            },
            "e": {
              "docs": {},
              "n": {
                "docs": {},
                "r": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "p": {
                            "docs": {},
                            "p": {
                              "docs": {},
                              "u": {
                                "docs": {},
                                "s": {
                                  "docs": {
                                    "CAServices.html#reenrollAppUser": {
                                      "ref": "CAServices.html#reenrollAppUser",
                                      "tf": 666.6666666666666
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "r": {
                "docs": {},
                "o": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "CAServices.html#reenrollAppUser": {
                        "ref": "CAServices.html#reenrollAppUser",
                        "tf": 10
                      }
                    }
                  }
                }
              }
            },
            "v": {
              "docs": {},
              "o": {
                "docs": {},
                "k": {
                  "docs": {
                    "CAServices.html#revokeCertificate": {
                      "ref": "CAServices.html#revokeCertificate",
                      "tf": 10
                    },
                    "CAServices.html#addRevokedCertificate": {
                      "ref": "CAServices.html#addRevokedCertificate",
                      "tf": 10
                    }
                  },
                  "e": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "f": {
                                "docs": {
                                  "CAServices.html#revokeCertificate": {
                                    "ref": "CAServices.html#revokeCertificate",
                                    "tf": 670
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "q": {
              "docs": {},
              "u": {
                "docs": {},
                "e": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Grpc.html#triggerCRLUpdate": {
                          "ref": "Grpc.html#triggerCRLUpdate",
                          "tf": 25
                        }
                      }
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "a": {
                "docs": {},
                "t": {
                  "docs": {
                    "module-liCrypto.html": {
                      "ref": "module-liCrypto.html",
                      "tf": 12.5
                    }
                  }
                }
              }
            }
          }
        },
        "t": {
          "docs": {},
          "e": {
            "docs": {},
            "m": {
              "docs": {},
              "p": {
                "docs": {},
                "l": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "index.html": {
                          "ref": "index.html",
                          "tf": 14
                        }
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "t": {
                "docs": {
                  "Grpc.html#sendMessage": {
                    "ref": "Grpc.html#sendMessage",
                    "tf": 16.666666666666664
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "a": {
              "docs": {},
              "n": {
                "docs": {},
                "s": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "Query.html#queryTransactionHistoryForProduct": {
                            "ref": "Query.html#queryTransactionHistoryForProduct",
                            "tf": 10
                          },
                          "DataContract.html#createProduct": {
                            "ref": "DataContract.html#createProduct",
                            "tf": 10
                          },
                          "DataContract.html#updateProduct": {
                            "ref": "DataContract.html#updateProduct",
                            "tf": 8.333333333333332
                          },
                          "DataContract.html#readProduct": {
                            "ref": "DataContract.html#readProduct",
                            "tf": 8.333333333333332
                          },
                          "DataContract.html#buyProduct": {
                            "ref": "DataContract.html#buyProduct",
                            "tf": 7.142857142857142
                          },
                          "DataContract.html#deleteProduct": {
                            "ref": "DataContract.html#deleteProduct",
                            "tf": 7.142857142857142
                          },
                          "UserContract.html#createUser": {
                            "ref": "UserContract.html#createUser",
                            "tf": 8.333333333333332
                          },
                          "UserContract.html#updateUser": {
                            "ref": "UserContract.html#updateUser",
                            "tf": 10
                          },
                          "UserContract.html#readUser": {
                            "ref": "UserContract.html#readUser",
                            "tf": 10
                          },
                          "UserContract.html#deleteUser": {
                            "ref": "UserContract.html#deleteUser",
                            "tf": 5
                          },
                          "module-libSignOffline.html": {
                            "ref": "module-libSignOffline.html",
                            "tf": 12.5
                          }
                        },
                        "i": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "d": {
                                  "docs": {
                                    "AgreementContract.html#updateAgreement": {
                                      "ref": "AgreementContract.html#updateAgreement",
                                      "tf": 16.666666666666664
                                    },
                                    "AgreementContract.html#getAgreement": {
                                      "ref": "AgreementContract.html#getAgreement",
                                      "tf": 20
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "g": {
                "docs": {},
                "g": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "r": {
                      "docs": {
                        "Grpc.html": {
                          "ref": "Grpc.html",
                          "tf": 3.8461538461538463
                        }
                      },
                      "c": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "u": {
                              "docs": {},
                              "p": {
                                "docs": {},
                                "d": {
                                  "docs": {
                                    "Grpc.html#triggerCRLUpdate": {
                                      "ref": "Grpc.html#triggerCRLUpdate",
                                      "tf": 675
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "d": {
          "docs": {},
          "o": {
            "docs": {},
            "c": {
              "docs": {},
              "u": {
                "docs": {},
                "m": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "global.html": {
                            "ref": "global.html",
                            "tf": 35
                          },
                          "list_class.html": {
                            "ref": "list_class.html",
                            "tf": 35
                          },
                          "list_module.html": {
                            "ref": "list_module.html",
                            "tf": 35
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "t": {
              "docs": {},
              "a": {
                "docs": {
                  "DataContract.html": {
                    "ref": "DataContract.html",
                    "tf": 12.5
                  },
                  "OffchainDB.html#writeUserData": {
                    "ref": "OffchainDB.html#writeUserData",
                    "tf": 25
                  },
                  "OffchainDB.html#updateUserData": {
                    "ref": "OffchainDB.html#updateUserData",
                    "tf": 25
                  },
                  "OffchainDB.html#deleteUserData": {
                    "ref": "OffchainDB.html#deleteUserData",
                    "tf": 25
                  },
                  "OffchainDB.html#writeProductData": {
                    "ref": "OffchainDB.html#writeProductData",
                    "tf": 25
                  },
                  "OffchainDB.html#updateProductData": {
                    "ref": "OffchainDB.html#updateProductData",
                    "tf": 25
                  },
                  "OffchainDB.html#deleteProductData": {
                    "ref": "OffchainDB.html#deleteProductData",
                    "tf": 25
                  },
                  "OffchainDB.html#writeAgreement": {
                    "ref": "OffchainDB.html#writeAgreement",
                    "tf": 25
                  },
                  "OffchainDB.html#updateAgreement": {
                    "ref": "OffchainDB.html#updateAgreement",
                    "tf": 25
                  }
                },
                "b": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "s": {
                      "docs": {
                        "Query.html": {
                          "ref": "Query.html",
                          "tf": 12.5
                        },
                        "OffchainDB.html#readCatalogue": {
                          "ref": "OffchainDB.html#readCatalogue",
                          "tf": 6.25
                        }
                      }
                    }
                  }
                },
                "p": {
                  "docs": {},
                  "u": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "p": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "s": {
                            "docs": {
                              "Query.html#matchPurpose": {
                                "ref": "Query.html#matchPurpose",
                                "tf": 25
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "c": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "DataContract.html": {
                                    "ref": "DataContract.html",
                                    "tf": 1900
                                  }
                                },
                                "#": {
                                  "docs": {},
                                  "c": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "p": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "d": {
                                                      "docs": {},
                                                      "u": {
                                                        "docs": {},
                                                        "c": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {
                                                              "DataContract.html#createProduct": {
                                                                "ref": "DataContract.html#createProduct",
                                                                "tf": 1150
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "u": {
                                    "docs": {},
                                    "p": {
                                      "docs": {},
                                      "d": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "p": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "d": {
                                                      "docs": {},
                                                      "u": {
                                                        "docs": {},
                                                        "c": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {
                                                              "DataContract.html#updateProduct": {
                                                                "ref": "DataContract.html#updateProduct",
                                                                "tf": 1150
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "r": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "d": {
                                          "docs": {},
                                          "p": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "d": {
                                                  "docs": {},
                                                  "u": {
                                                    "docs": {},
                                                    "c": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {
                                                          "DataContract.html#readProduct": {
                                                            "ref": "DataContract.html#readProduct",
                                                            "tf": 1150
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "b": {
                                    "docs": {},
                                    "u": {
                                      "docs": {},
                                      "y": {
                                        "docs": {},
                                        "p": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "d": {
                                                "docs": {},
                                                "u": {
                                                  "docs": {},
                                                  "c": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {
                                                        "DataContract.html#buyProduct": {
                                                          "ref": "DataContract.html#buyProduct",
                                                          "tf": 1150
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "d": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "p": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "d": {
                                                      "docs": {},
                                                      "u": {
                                                        "docs": {},
                                                        "c": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {
                                                              "DataContract.html#deleteProduct": {
                                                                "ref": "DataContract.html#deleteProduct",
                                                                "tf": 1150
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "g": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "p": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "d": {
                                                "docs": {},
                                                "u": {
                                                  "docs": {},
                                                  "c": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {
                                                        "DataContract.html#getProducts": {
                                                          "ref": "DataContract.html#getProducts",
                                                          "tf": 1150
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "e": {
                "docs": {
                  "Query.html#queryCatalogue": {
                    "ref": "Query.html#queryCatalogue",
                    "tf": 12.5
                  },
                  "CAServices.html#getExpirationDate": {
                    "ref": "CAServices.html#getExpirationDate",
                    "tf": 10
                  },
                  "OffchainDB.html#readCatalogue": {
                    "ref": "OffchainDB.html#readCatalogue",
                    "tf": 6.25
                  }
                }
              }
            }
          },
          "b": {
            "docs": {
              "Query.html#queryAgreements": {
                "ref": "Query.html#queryAgreements",
                "tf": 25
              },
              "Query.html#queryUsers": {
                "ref": "Query.html#queryUsers",
                "tf": 25
              },
              "Query.html#queryUserByID": {
                "ref": "Query.html#queryUserByID",
                "tf": 12.5
              },
              "Query.html#queryProducts": {
                "ref": "Query.html#queryProducts",
                "tf": 25
              },
              "Query.html#queryProductByID": {
                "ref": "Query.html#queryProductByID",
                "tf": 12.5
              },
              "OffchainDB.html#initDB": {
                "ref": "OffchainDB.html#initDB",
                "tf": 25
              },
              "OffchainDB.html#openConnection": {
                "ref": "OffchainDB.html#openConnection",
                "tf": 16.666666666666664
              },
              "OffchainDB.html#closeConnection": {
                "ref": "OffchainDB.html#closeConnection",
                "tf": 16.666666666666664
              },
              "OffchainDB.html#writeUserData": {
                "ref": "OffchainDB.html#writeUserData",
                "tf": 16.666666666666664
              },
              "OffchainDB.html#updateUserData": {
                "ref": "OffchainDB.html#updateUserData",
                "tf": 16.666666666666664
              },
              "OffchainDB.html#deleteUserData": {
                "ref": "OffchainDB.html#deleteUserData",
                "tf": 16.666666666666664
              },
              "OffchainDB.html#writeProductData": {
                "ref": "OffchainDB.html#writeProductData",
                "tf": 16.666666666666664
              },
              "OffchainDB.html#updateProductData": {
                "ref": "OffchainDB.html#updateProductData",
                "tf": 16.666666666666664
              },
              "OffchainDB.html#deleteProductData": {
                "ref": "OffchainDB.html#deleteProductData",
                "tf": 16.666666666666664
              },
              "OffchainDB.html#writeAgreement": {
                "ref": "OffchainDB.html#writeAgreement",
                "tf": 16.666666666666664
              },
              "OffchainDB.html#updateAgreement": {
                "ref": "OffchainDB.html#updateAgreement",
                "tf": 16.666666666666664
              },
              "OffchainDB.html#eventHandler": {
                "ref": "OffchainDB.html#eventHandler",
                "tf": 12.5
              },
              "OffchainDB.html#dbExists": {
                "ref": "OffchainDB.html#dbExists",
                "tf": 16.666666666666664
              }
            },
            "e": {
              "docs": {},
              "x": {
                "docs": {},
                "i": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "OffchainDB.html#dbExists": {
                          "ref": "OffchainDB.html#dbExists",
                          "tf": 683.3333333333334
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "t": {
              "docs": {},
              "a": {
                "docs": {},
                "i": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "Query.html#queryProductByID": {
                        "ref": "Query.html#queryProductByID",
                        "tf": 12.5
                      }
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "e": {
                "docs": {},
                "t": {
                  "docs": {
                    "DataContract.html#deleteProduct": {
                      "ref": "DataContract.html#deleteProduct",
                      "tf": 14.285714285714285
                    },
                    "UserContract.html#deleteUser": {
                      "ref": "UserContract.html#deleteUser",
                      "tf": 5
                    },
                    "OffchainDB.html#deleteUserData": {
                      "ref": "OffchainDB.html#deleteUserData",
                      "tf": 16.666666666666664
                    },
                    "OffchainDB.html#deleteProductData": {
                      "ref": "OffchainDB.html#deleteProductData",
                      "tf": 16.666666666666664
                    }
                  },
                  "e": {
                    "docs": {},
                    "p": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "d": {
                            "docs": {},
                            "u": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "t": {
                                  "docs": {
                                    "DataContract.html#deleteProduct": {
                                      "ref": "DataContract.html#deleteProduct",
                                      "tf": 677.1428571428571
                                    }
                                  },
                                  "d": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "a": {
                                          "docs": {
                                            "OffchainDB.html#deleteProductData": {
                                              "ref": "OffchainDB.html#deleteProductData",
                                              "tf": 675
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "u": {
                      "docs": {},
                      "s": {
                        "docs": {
                          "CAServices.html#deleteUser": {
                            "ref": "CAServices.html#deleteUser",
                            "tf": 670
                          },
                          "UserContract.html#deleteUser": {
                            "ref": "UserContract.html#deleteUser",
                            "tf": 670
                          }
                        },
                        "e": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "d": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "a": {
                                    "docs": {
                                      "OffchainDB.html#deleteUserData": {
                                        "ref": "OffchainDB.html#deleteUserData",
                                        "tf": 675
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "g": {
          "docs": {},
          "l": {
            "docs": {},
            "o": {
              "docs": {},
              "b": {
                "docs": {},
                "a": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "global.html": {
                        "ref": "global.html",
                        "tf": 2045
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "t": {
              "docs": {},
              "a": {
                "docs": {},
                "g": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "AgreementContract.html#getAgreement": {
                        "ref": "AgreementContract.html#getAgreement",
                        "tf": 670
                      },
                      "AgreementContract.html#getAgreements": {
                        "ref": "AgreementContract.html#getAgreements",
                        "tf": 675
                      }
                    }
                  }
                }
              },
              "p": {
                "docs": {},
                "r": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "d": {
                      "docs": {},
                      "u": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "t": {
                            "docs": {
                              "DataContract.html#getProducts": {
                                "ref": "DataContract.html#getProducts",
                                "tf": 675
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "i": {
                "docs": {},
                "d": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "y": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "x": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "f": {
                                              "docs": {},
                                              "r": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "m": {
                                                    "docs": {},
                                                    "w": {
                                                      "docs": {},
                                                      "a": {
                                                        "docs": {},
                                                        "l": {
                                                          "docs": {},
                                                          "l": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "t": {
                                                                "docs": {
                                                                  "CAServices.html#getIdentityContextFromWallet": {
                                                                    "ref": "CAServices.html#getIdentityContextFromWallet",
                                                                    "tf": 675
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "c": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "f": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "b": {
                                      "docs": {},
                                      "y": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "i": {
                                                "docs": {
                                                  "CAServices.html#getCertificateBySerial": {
                                                    "ref": "CAServices.html#getCertificateBySerial",
                                                    "tf": 675
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "e": {
                "docs": {},
                "x": {
                  "docs": {},
                  "p": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "n": {
                                  "docs": {},
                                  "d": {
                                    "docs": {
                                      "CAServices.html#getExpirationDate": {
                                        "ref": "CAServices.html#getExpirationDate",
                                        "tf": 675
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "u": {
                "docs": {},
                "s": {
                  "docs": {
                    "UserContract.html#getUsers": {
                      "ref": "UserContract.html#getUsers",
                      "tf": 675
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "p": {
              "docs": {},
              "c": {
                "docs": {
                  "Grpc.html": {
                    "ref": "Grpc.html",
                    "tf": 1900
                  }
                },
                "#": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "d": {
                          "docs": {},
                          "m": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "s": {
                                "docs": {},
                                "s": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "g": {
                                      "docs": {
                                        "Grpc.html#sendMessage": {
                                          "ref": "Grpc.html#sendMessage",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "t": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "g": {
                          "docs": {},
                          "g": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "c": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "l": {
                                      "docs": {},
                                      "u": {
                                        "docs": {},
                                        "p": {
                                          "docs": {},
                                          "d": {
                                            "docs": {
                                              "Grpc.html#triggerCRLUpdate": {
                                                "ref": "Grpc.html#triggerCRLUpdate",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "c": {
          "docs": {},
          "l": {
            "docs": {},
            "a": {
              "docs": {},
              "s": {
                "docs": {},
                "s": {
                  "docs": {
                    "list_class.html": {
                      "ref": "list_class.html",
                      "tf": 635
                    },
                    "Query.html": {
                      "ref": "Query.html",
                      "tf": 110
                    },
                    "AgreementContract.html": {
                      "ref": "AgreementContract.html",
                      "tf": 110
                    },
                    "DataContract.html": {
                      "ref": "DataContract.html",
                      "tf": 110
                    },
                    "CAServices.html": {
                      "ref": "CAServices.html",
                      "tf": 110
                    },
                    "UserContract.html": {
                      "ref": "UserContract.html",
                      "tf": 110
                    },
                    "Grpc.html": {
                      "ref": "Grpc.html",
                      "tf": 110
                    },
                    "OffchainDB.html": {
                      "ref": "OffchainDB.html",
                      "tf": 110
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "e": {
                "docs": {},
                "n": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "AgreementContract.html#updateAgreement": {
                        "ref": "AgreementContract.html#updateAgreement",
                        "tf": 12.5
                      }
                    },
                    "i": {
                      "docs": {},
                      "d": {
                        "docs": {
                          "AgreementContract.html#updateAgreement": {
                            "ref": "AgreementContract.html#updateAgreement",
                            "tf": 16.666666666666664
                          },
                          "AgreementContract.html#getAgreement": {
                            "ref": "AgreementContract.html#getAgreement",
                            "tf": 20
                          },
                          "AgreementContract.html#getAgreements": {
                            "ref": "AgreementContract.html#getAgreements",
                            "tf": 25
                          },
                          "DataContract.html#getProducts": {
                            "ref": "DataContract.html#getProducts",
                            "tf": 25
                          },
                          "UserContract.html#getUsers": {
                            "ref": "UserContract.html#getUsers",
                            "tf": 25
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "o": {
              "docs": {},
              "s": {
                "docs": {},
                "e": {
                  "docs": {
                    "OffchainDB.html#closeConnection": {
                      "ref": "OffchainDB.html#closeConnection",
                      "tf": 16.666666666666664
                    }
                  },
                  "c": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "OffchainDB.html#closeConnection": {
                                    "ref": "OffchainDB.html#closeConnection",
                                    "tf": 700
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {
              "CAServices.html": {
                "ref": "CAServices.html",
                "tf": 10
              },
              "CAServices.html#createCA": {
                "ref": "CAServices.html#createCA",
                "tf": 4.545454545454546
              },
              "CAServices.html#isAdmin": {
                "ref": "CAServices.html#isAdmin",
                "tf": 8.333333333333332
              },
              "CAServices.html#updateUser": {
                "ref": "CAServices.html#updateUser",
                "tf": 16.666666666666664
              },
              "CAServices.html#deleteUser": {
                "ref": "CAServices.html#deleteUser",
                "tf": 16.666666666666664
              },
              "CAServices.html#registerAppUser": {
                "ref": "CAServices.html#registerAppUser",
                "tf": 12.5
              },
              "CAServices.html#getCertificateBySerial": {
                "ref": "CAServices.html#getCertificateBySerial",
                "tf": 10
              }
            },
            "c": {
              "docs": {},
              "h": {
                "docs": {
                  "Query.html": {
                    "ref": "Query.html",
                    "tf": 12.5
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "a": {
                "docs": {},
                "l": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "g": {
                      "docs": {},
                      "u": {
                        "docs": {
                          "Query.html#queryCatalogue": {
                            "ref": "Query.html#queryCatalogue",
                            "tf": 12.5
                          },
                          "DataContract.html": {
                            "ref": "DataContract.html",
                            "tf": 12.5
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {},
                  "v": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "c": {
                        "docs": {
                          "CAServices.html": {
                            "ref": "CAServices.html",
                            "tf": 1900
                          }
                        },
                        "e": {
                          "docs": {},
                          "s": {
                            "docs": {},
                            "#": {
                              "docs": {},
                              "g": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "d": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "n": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {},
                                                  "y": {
                                                    "docs": {},
                                                    "c": {
                                                      "docs": {},
                                                      "o": {
                                                        "docs": {},
                                                        "n": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "x": {
                                                                "docs": {},
                                                                "t": {
                                                                  "docs": {},
                                                                  "f": {
                                                                    "docs": {},
                                                                    "r": {
                                                                      "docs": {},
                                                                      "o": {
                                                                        "docs": {},
                                                                        "m": {
                                                                          "docs": {},
                                                                          "w": {
                                                                            "docs": {},
                                                                            "a": {
                                                                              "docs": {},
                                                                              "l": {
                                                                                "docs": {},
                                                                                "l": {
                                                                                  "docs": {},
                                                                                  "e": {
                                                                                    "docs": {},
                                                                                    "t": {
                                                                                      "docs": {
                                                                                        "CAServices.html#getIdentityContextFromWallet": {
                                                                                          "ref": "CAServices.html#getIdentityContextFromWallet",
                                                                                          "tf": 1150
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "c": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "i": {
                                              "docs": {},
                                              "f": {
                                                "docs": {},
                                                "i": {
                                                  "docs": {},
                                                  "c": {
                                                    "docs": {},
                                                    "a": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "b": {
                                                            "docs": {},
                                                            "y": {
                                                              "docs": {},
                                                              "s": {
                                                                "docs": {},
                                                                "e": {
                                                                  "docs": {},
                                                                  "r": {
                                                                    "docs": {},
                                                                    "i": {
                                                                      "docs": {
                                                                        "CAServices.html#getCertificateBySerial": {
                                                                          "ref": "CAServices.html#getCertificateBySerial",
                                                                          "tf": 1150
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "e": {
                                      "docs": {},
                                      "x": {
                                        "docs": {},
                                        "p": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "a": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {},
                                                  "i": {
                                                    "docs": {},
                                                    "o": {
                                                      "docs": {},
                                                      "n": {
                                                        "docs": {},
                                                        "d": {
                                                          "docs": {
                                                            "CAServices.html#getExpirationDate": {
                                                              "ref": "CAServices.html#getExpirationDate",
                                                              "tf": 1150
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "c": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            "a": {
                                              "docs": {
                                                "CAServices.html#createCA": {
                                                  "ref": "CAServices.html#createCA",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "i": {
                                "docs": {},
                                "s": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "d": {
                                      "docs": {},
                                      "m": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "n": {
                                            "docs": {
                                              "CAServices.html#isAdmin": {
                                                "ref": "CAServices.html#isAdmin",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "m": {
                                  "docs": {},
                                  "p": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "m": {
                                            "docs": {},
                                            "s": {
                                              "docs": {},
                                              "p": {
                                                "docs": {
                                                  "CAServices.html#importMSP": {
                                                    "ref": "CAServices.html#importMSP",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "u": {
                                "docs": {},
                                "p": {
                                  "docs": {},
                                  "d": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "u": {
                                            "docs": {},
                                            "s": {
                                              "docs": {
                                                "CAServices.html#updateUser": {
                                                  "ref": "CAServices.html#updateUser",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "d": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "u": {
                                            "docs": {},
                                            "s": {
                                              "docs": {
                                                "CAServices.html#deleteUser": {
                                                  "ref": "CAServices.html#deleteUser",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "r": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "g": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "s": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "a": {
                                                "docs": {},
                                                "p": {
                                                  "docs": {},
                                                  "p": {
                                                    "docs": {},
                                                    "u": {
                                                      "docs": {},
                                                      "s": {
                                                        "docs": {
                                                          "CAServices.html#registerAppUser": {
                                                            "ref": "CAServices.html#registerAppUser",
                                                            "tf": 1150
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "e": {
                                    "docs": {},
                                    "n": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "l": {
                                            "docs": {},
                                            "l": {
                                              "docs": {},
                                              "a": {
                                                "docs": {},
                                                "p": {
                                                  "docs": {},
                                                  "p": {
                                                    "docs": {},
                                                    "u": {
                                                      "docs": {},
                                                      "s": {
                                                        "docs": {
                                                          "CAServices.html#reenrollAppUser": {
                                                            "ref": "CAServices.html#reenrollAppUser",
                                                            "tf": 1150
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "v": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "k": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "r": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {},
                                                  "i": {
                                                    "docs": {},
                                                    "f": {
                                                      "docs": {
                                                        "CAServices.html#revokeCertificate": {
                                                          "ref": "CAServices.html#revokeCertificate",
                                                          "tf": 1150
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "e": {
                                "docs": {},
                                "n": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        "l": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "p": {
                                              "docs": {},
                                              "p": {
                                                "docs": {},
                                                "u": {
                                                  "docs": {},
                                                  "s": {
                                                    "docs": {
                                                      "CAServices.html#enrollAppUser": {
                                                        "ref": "CAServices.html#enrollAppUser",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "x": {
                                  "docs": {},
                                  "p": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "m": {
                                            "docs": {},
                                            "s": {
                                              "docs": {},
                                              "p": {
                                                "docs": {
                                                  "CAServices.html#exportMSP": {
                                                    "ref": "CAServices.html#exportMSP",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "a": {
                                "docs": {},
                                "d": {
                                  "docs": {},
                                  "d": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "v": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "k": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "d": {
                                                  "docs": {},
                                                  "c": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "r": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {},
                                                          "i": {
                                                            "docs": {},
                                                            "f": {
                                                              "docs": {
                                                                "CAServices.html#addRevokedCertificate": {
                                                                  "ref": "CAServices.html#addRevokedCertificate",
                                                                  "tf": 1150
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "n": {
              "docs": {},
              "t": {
                "docs": {},
                "r": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "AgreementContract.html": {
                            "ref": "AgreementContract.html",
                            "tf": 16.666666666666664
                          },
                          "DataContract.html": {
                            "ref": "DataContract.html",
                            "tf": 12.5
                          },
                          "UserContract.html": {
                            "ref": "UserContract.html",
                            "tf": 12.5
                          },
                          "UserContract.html#createUser": {
                            "ref": "UserContract.html#createUser",
                            "tf": 8.333333333333332
                          },
                          "UserContract.html#updateUser": {
                            "ref": "UserContract.html#updateUser",
                            "tf": 10
                          },
                          "UserContract.html#readUser": {
                            "ref": "UserContract.html#readUser",
                            "tf": 10
                          },
                          "UserContract.html#deleteUser": {
                            "ref": "UserContract.html#deleteUser",
                            "tf": 5
                          }
                        }
                      }
                    }
                  }
                }
              },
              "f": {
                "docs": {},
                "i": {
                  "docs": {},
                  "g": {
                    "docs": {
                      "Grpc.html": {
                        "ref": "Grpc.html",
                        "tf": 3.8461538461538463
                      }
                    }
                  }
                }
              },
              "s": {
                "docs": {},
                "t": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "u": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "t": {
                          "docs": {
                            "OffchainDB.html": {
                              "ref": "OffchainDB.html",
                              "tf": 16.666666666666664
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "n": {
                "docs": {},
                "e": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "OffchainDB.html#openConnection": {
                          "ref": "OffchainDB.html#openConnection",
                          "tf": 16.666666666666664
                        },
                        "OffchainDB.html#closeConnection": {
                          "ref": "OffchainDB.html#closeConnection",
                          "tf": 16.666666666666664
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "e": {
              "docs": {},
              "a": {
                "docs": {},
                "t": {
                  "docs": {
                    "DataContract.html#createProduct": {
                      "ref": "DataContract.html#createProduct",
                      "tf": 10
                    },
                    "CAServices.html#createCA": {
                      "ref": "CAServices.html#createCA",
                      "tf": 4.545454545454546
                    },
                    "UserContract.html#createUser": {
                      "ref": "UserContract.html#createUser",
                      "tf": 8.333333333333332
                    }
                  },
                  "e": {
                    "docs": {},
                    "p": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "d": {
                            "docs": {},
                            "u": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "t": {
                                  "docs": {
                                    "DataContract.html#createProduct": {
                                      "ref": "DataContract.html#createProduct",
                                      "tf": 680
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "c": {
                      "docs": {},
                      "a": {
                        "docs": {
                          "CAServices.html#createCA": {
                            "ref": "CAServices.html#createCA",
                            "tf": 700
                          }
                        }
                      }
                    },
                    "u": {
                      "docs": {},
                      "s": {
                        "docs": {
                          "UserContract.html#createUser": {
                            "ref": "UserContract.html#createUser",
                            "tf": 675
                          }
                        }
                      }
                    }
                  }
                }
              },
              "d": {
                "docs": {},
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "i": {
                        "docs": {
                          "UserContract.html": {
                            "ref": "UserContract.html",
                            "tf": 12.5
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {
                "Grpc.html": {
                  "ref": "Grpc.html",
                  "tf": 3.8461538461538463
                }
              },
              "u": {
                "docs": {},
                "p": {
                  "docs": {},
                  "d": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "q": {
                                "docs": {},
                                "u": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "s": {
                                      "docs": {},
                                      "t": {
                                        "docs": {
                                          "Grpc.html#triggerCRLUpdate": {
                                            "ref": "Grpc.html#triggerCRLUpdate",
                                            "tf": 25
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "s": {
                                "docs": {},
                                "p": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "n": {
                                      "docs": {},
                                      "s": {
                                        "docs": {
                                          "Grpc.html#triggerCRLUpdate": {
                                            "ref": "Grpc.html#triggerCRLUpdate",
                                            "tf": 25
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "y": {
              "docs": {},
              "p": {
                "docs": {},
                "t": {
                  "docs": {},
                  "o": {
                    "docs": {
                      "module-liCrypto.html": {
                        "ref": "module-liCrypto.html",
                        "tf": 12.5
                      }
                    }
                  }
                }
              }
            }
          },
          "c": {
            "docs": {},
            "p": {
              "docs": {},
              ".": {
                "docs": {},
                "y": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "m": {
                      "docs": {},
                      "l": {
                        "docs": {
                          "CAServices.html#createCA": {
                            "ref": "CAServices.html#createCA",
                            "tf": 9.090909090909092
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "h": {
            "docs": {},
            "e": {
              "docs": {},
              "c": {
                "docs": {},
                "k": {
                  "docs": {
                    "CAServices.html#isAdmin": {
                      "ref": "CAServices.html#isAdmin",
                      "tf": 8.333333333333332
                    },
                    "OffchainDB.html#dbExists": {
                      "ref": "OffchainDB.html#dbExists",
                      "tf": 16.666666666666664
                    }
                  }
                }
              }
            },
            "a": {
              "docs": {},
              "n": {
                "docs": {},
                "n": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "l": {
                      "docs": {
                        "Grpc.html": {
                          "ref": "Grpc.html",
                          "tf": 3.8461538461538463
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "s": {
            "docs": {},
            "r": {
              "docs": {
                "CAServices.html#enrollAppUser": {
                  "ref": "CAServices.html#enrollAppUser",
                  "tf": 16.666666666666664
                },
                "CAServices.html#reenrollAppUser": {
                  "ref": "CAServices.html#reenrollAppUser",
                  "tf": 16.666666666666664
                }
              }
            }
          },
          "e": {
            "docs": {},
            "r": {
              "docs": {},
              "t": {
                "docs": {},
                "i": {
                  "docs": {},
                  "f": {
                    "docs": {
                      "CAServices.html#revokeCertificate": {
                        "ref": "CAServices.html#revokeCertificate",
                        "tf": 30
                      },
                      "CAServices.html#getCertificateBySerial": {
                        "ref": "CAServices.html#getCertificateBySerial",
                        "tf": 10
                      },
                      "CAServices.html#getExpirationDate": {
                        "ref": "CAServices.html#getExpirationDate",
                        "tf": 10
                      },
                      "CAServices.html#addRevokedCertificate": {
                        "ref": "CAServices.html#addRevokedCertificate",
                        "tf": 60
                      },
                      "OffchainDB.html#readCatalogue": {
                        "ref": "OffchainDB.html#readCatalogue",
                        "tf": 6.25
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "l": {
          "docs": {},
          "i": {
            "docs": {},
            "s": {
              "docs": {},
              "t": {
                "docs": {
                  "list_class.html": {
                    "ref": "list_class.html",
                    "tf": 110
                  },
                  "list_module.html": {
                    "ref": "list_module.html",
                    "tf": 110
                  }
                },
                ":": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "s": {
                            "docs": {
                              "list_class.html": {
                                "ref": "list_class.html",
                                "tf": 1300
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "m": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "d": {
                        "docs": {},
                        "u": {
                          "docs": {},
                          "l": {
                            "docs": {
                              "list_module.html": {
                                "ref": "list_module.html",
                                "tf": 1300
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "module-libBlockListener.html": {
                        "ref": "module-libBlockListener.html",
                        "tf": 8.333333333333332
                      }
                    }
                  }
                }
              }
            },
            "b": {
              "docs": {},
              "b": {
                "docs": {},
                "l": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "k": {
                        "docs": {},
                        "l": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "s": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "n": {
                                    "docs": {
                                      "module-libBlockListener.html": {
                                        "ref": "module-libBlockListener.html",
                                        "tf": 600
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "r": {
                "docs": {},
                "a": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "i": {
                      "docs": {
                        "module-libBlockListener.html": {
                          "ref": "module-libBlockListener.html",
                          "tf": 8.333333333333332
                        }
                      }
                    }
                  }
                }
              },
              "s": {
                "docs": {},
                "i": {
                  "docs": {},
                  "g": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "f": {
                          "docs": {},
                          "f": {
                            "docs": {},
                            "l": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "n": {
                                  "docs": {
                                    "module-libSignOffline.html": {
                                      "ref": "module-libSignOffline.html",
                                      "tf": 600
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "u": {
                "docs": {},
                "t": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "l": {
                      "docs": {
                        "module-libUtil.html": {
                          "ref": "module-libUtil.html",
                          "tf": 600
                        }
                      }
                    }
                  }
                }
              }
            },
            "c": {
              "docs": {},
              "r": {
                "docs": {},
                "y": {
                  "docs": {},
                  "p": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "o": {
                        "docs": {
                          "module-liCrypto.html": {
                            "ref": "module-liCrypto.html",
                            "tf": 600
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            ";": {
              "docs": {},
              "a": {
                "docs": {},
                "s": {
                  "docs": {},
                  "y": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "&": {
                          "docs": {},
                          "g": {
                            "docs": {},
                            "t": {
                              "docs": {
                                "Query.html#queryAgreements": {
                                  "ref": "Query.html#queryAgreements",
                                  "tf": 33.33333333333333
                                },
                                "Query.html#queryUsers": {
                                  "ref": "Query.html#queryUsers",
                                  "tf": 33.33333333333333
                                },
                                "Query.html#queryUserByID": {
                                  "ref": "Query.html#queryUserByID",
                                  "tf": 33.33333333333333
                                },
                                "Query.html#queryProducts": {
                                  "ref": "Query.html#queryProducts",
                                  "tf": 33.33333333333333
                                },
                                "Query.html#queryProductByID": {
                                  "ref": "Query.html#queryProductByID",
                                  "tf": 25
                                },
                                "Query.html#queryProductsByUser": {
                                  "ref": "Query.html#queryProductsByUser",
                                  "tf": 25
                                },
                                "Query.html#queryCatalogue": {
                                  "ref": "Query.html#queryCatalogue",
                                  "tf": 33.33333333333333
                                },
                                "Query.html#queryFilteredProducts": {
                                  "ref": "Query.html#queryFilteredProducts",
                                  "tf": 25
                                },
                                "Query.html#queryTransactionHistoryForProduct": {
                                  "ref": "Query.html#queryTransactionHistoryForProduct",
                                  "tf": 25
                                },
                                "AgreementContract.html#updateAgreement": {
                                  "ref": "AgreementContract.html#updateAgreement",
                                  "tf": 16.666666666666664
                                },
                                "AgreementContract.html#getAgreement": {
                                  "ref": "AgreementContract.html#getAgreement",
                                  "tf": 20
                                },
                                "AgreementContract.html#getAgreements": {
                                  "ref": "AgreementContract.html#getAgreements",
                                  "tf": 25
                                },
                                "DataContract.html#createProduct": {
                                  "ref": "DataContract.html#createProduct",
                                  "tf": 20
                                },
                                "DataContract.html#updateProduct": {
                                  "ref": "DataContract.html#updateProduct",
                                  "tf": 20
                                },
                                "DataContract.html#readProduct": {
                                  "ref": "DataContract.html#readProduct",
                                  "tf": 20
                                },
                                "DataContract.html#buyProduct": {
                                  "ref": "DataContract.html#buyProduct",
                                  "tf": 16.666666666666664
                                },
                                "DataContract.html#deleteProduct": {
                                  "ref": "DataContract.html#deleteProduct",
                                  "tf": 20
                                },
                                "DataContract.html#getProducts": {
                                  "ref": "DataContract.html#getProducts",
                                  "tf": 25
                                },
                                "CAServices.html#getIdentityContextFromWallet": {
                                  "ref": "CAServices.html#getIdentityContextFromWallet",
                                  "tf": 25
                                },
                                "CAServices.html#isAdmin": {
                                  "ref": "CAServices.html#isAdmin",
                                  "tf": 25
                                },
                                "CAServices.html#updateUser": {
                                  "ref": "CAServices.html#updateUser",
                                  "tf": 20
                                },
                                "CAServices.html#deleteUser": {
                                  "ref": "CAServices.html#deleteUser",
                                  "tf": 20
                                },
                                "CAServices.html#registerAppUser": {
                                  "ref": "CAServices.html#registerAppUser",
                                  "tf": 20
                                },
                                "CAServices.html#enrollAppUser": {
                                  "ref": "CAServices.html#enrollAppUser",
                                  "tf": 16.666666666666664
                                },
                                "CAServices.html#importMSP": {
                                  "ref": "CAServices.html#importMSP",
                                  "tf": 25
                                },
                                "CAServices.html#exportMSP": {
                                  "ref": "CAServices.html#exportMSP",
                                  "tf": 25
                                },
                                "CAServices.html#reenrollAppUser": {
                                  "ref": "CAServices.html#reenrollAppUser",
                                  "tf": 16.666666666666664
                                },
                                "CAServices.html#revokeCertificate": {
                                  "ref": "CAServices.html#revokeCertificate",
                                  "tf": 20
                                },
                                "CAServices.html#getCertificateBySerial": {
                                  "ref": "CAServices.html#getCertificateBySerial",
                                  "tf": 25
                                },
                                "CAServices.html#getExpirationDate": {
                                  "ref": "CAServices.html#getExpirationDate",
                                  "tf": 25
                                },
                                "UserContract.html#createUser": {
                                  "ref": "UserContract.html#createUser",
                                  "tf": 25
                                },
                                "UserContract.html#updateUser": {
                                  "ref": "UserContract.html#updateUser",
                                  "tf": 25
                                },
                                "UserContract.html#readUser": {
                                  "ref": "UserContract.html#readUser",
                                  "tf": 20
                                },
                                "UserContract.html#deleteUser": {
                                  "ref": "UserContract.html#deleteUser",
                                  "tf": 20
                                },
                                "UserContract.html#getUsers": {
                                  "ref": "UserContract.html#getUsers",
                                  "tf": 25
                                },
                                "Grpc.html#triggerCRLUpdate": {
                                  "ref": "Grpc.html#triggerCRLUpdate",
                                  "tf": 25
                                },
                                "OffchainDB.html#initDB": {
                                  "ref": "OffchainDB.html#initDB",
                                  "tf": 50
                                },
                                "OffchainDB.html#openConnection": {
                                  "ref": "OffchainDB.html#openConnection",
                                  "tf": 50
                                },
                                "OffchainDB.html#closeConnection": {
                                  "ref": "OffchainDB.html#closeConnection",
                                  "tf": 50
                                },
                                "OffchainDB.html#updateInventory": {
                                  "ref": "OffchainDB.html#updateInventory",
                                  "tf": 16.666666666666664
                                },
                                "OffchainDB.html#writeUserData": {
                                  "ref": "OffchainDB.html#writeUserData",
                                  "tf": 25
                                },
                                "OffchainDB.html#updateUserData": {
                                  "ref": "OffchainDB.html#updateUserData",
                                  "tf": 25
                                },
                                "OffchainDB.html#deleteUserData": {
                                  "ref": "OffchainDB.html#deleteUserData",
                                  "tf": 25
                                },
                                "OffchainDB.html#writeProductData": {
                                  "ref": "OffchainDB.html#writeProductData",
                                  "tf": 25
                                },
                                "OffchainDB.html#updateProductData": {
                                  "ref": "OffchainDB.html#updateProductData",
                                  "tf": 25
                                },
                                "OffchainDB.html#deleteProductData": {
                                  "ref": "OffchainDB.html#deleteProductData",
                                  "tf": 25
                                },
                                "OffchainDB.html#writeAgreement": {
                                  "ref": "OffchainDB.html#writeAgreement",
                                  "tf": 25
                                },
                                "OffchainDB.html#updateAgreement": {
                                  "ref": "OffchainDB.html#updateAgreement",
                                  "tf": 25
                                },
                                "OffchainDB.html#readUsers": {
                                  "ref": "OffchainDB.html#readUsers",
                                  "tf": 33.33333333333333
                                },
                                "OffchainDB.html#readUserData": {
                                  "ref": "OffchainDB.html#readUserData",
                                  "tf": 25
                                },
                                "OffchainDB.html#readProducts": {
                                  "ref": "OffchainDB.html#readProducts",
                                  "tf": 33.33333333333333
                                },
                                "OffchainDB.html#readCatalogue": {
                                  "ref": "OffchainDB.html#readCatalogue",
                                  "tf": 33.33333333333333
                                },
                                "OffchainDB.html#readProductsByFilter": {
                                  "ref": "OffchainDB.html#readProductsByFilter",
                                  "tf": 25
                                },
                                "OffchainDB.html#readAgreements": {
                                  "ref": "OffchainDB.html#readAgreements",
                                  "tf": 33.33333333333333
                                },
                                "OffchainDB.html#readProductData": {
                                  "ref": "OffchainDB.html#readProductData",
                                  "tf": 25
                                },
                                "OffchainDB.html#eventHandler": {
                                  "ref": "OffchainDB.html#eventHandler",
                                  "tf": 25
                                },
                                "OffchainDB.html#dbExists": {
                                  "ref": "OffchainDB.html#dbExists",
                                  "tf": 33.33333333333333
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "d": {
              "docs": {},
              "g": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "DataContract.html#readProduct": {
                        "ref": "DataContract.html#readProduct",
                        "tf": 8.333333333333332
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "c": {
              "docs": {},
              "a": {
                "docs": {},
                "l": {
                  "docs": {
                    "CAServices.html#createCA": {
                      "ref": "CAServices.html#createCA",
                      "tf": 4.545454545454546
                    },
                    "CAServices.html#importMSP": {
                      "ref": "CAServices.html#importMSP",
                      "tf": 8.333333333333332
                    },
                    "CAServices.html#exportMSP": {
                      "ref": "CAServices.html#exportMSP",
                      "tf": 8.333333333333332
                    },
                    "CAServices.html#addRevokedCertificate": {
                      "ref": "CAServices.html#addRevokedCertificate",
                      "tf": 10
                    }
                  }
                }
              }
            }
          }
        },
        "m": {
          "docs": {},
          "o": {
            "docs": {},
            "d": {
              "docs": {},
              "u": {
                "docs": {},
                "l": {
                  "docs": {
                    "list_module.html": {
                      "ref": "list_module.html",
                      "tf": 635
                    },
                    "module-libBlockListener.html": {
                      "ref": "module-libBlockListener.html",
                      "tf": 110
                    },
                    "module-liCrypto.html": {
                      "ref": "module-liCrypto.html",
                      "tf": 110
                    },
                    "module-libSignOffline.html": {
                      "ref": "module-libSignOffline.html",
                      "tf": 110
                    },
                    "module-libUtil.html": {
                      "ref": "module-libUtil.html",
                      "tf": 110
                    }
                  },
                  "e": {
                    "docs": {},
                    ":": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "b": {
                            "docs": {},
                            "b": {
                              "docs": {},
                              "l": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "c": {
                                    "docs": {},
                                    "k": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "s": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "n": {
                                                  "docs": {
                                                    "module-libBlockListener.html": {
                                                      "ref": "module-libBlockListener.html",
                                                      "tf": 1300
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "s": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "g": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "f": {
                                        "docs": {},
                                        "f": {
                                          "docs": {},
                                          "l": {
                                            "docs": {},
                                            "i": {
                                              "docs": {},
                                              "n": {
                                                "docs": {
                                                  "module-libSignOffline.html": {
                                                    "ref": "module-libSignOffline.html",
                                                    "tf": 1300
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "u": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "l": {
                                    "docs": {
                                      "module-libUtil.html": {
                                        "ref": "module-libUtil.html",
                                        "tf": 1300
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "c": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "y": {
                                "docs": {},
                                "p": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "o": {
                                      "docs": {
                                        "module-liCrypto.html": {
                                          "ref": "module-liCrypto.html",
                                          "tf": 1300
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "t": {
              "docs": {},
              "c": {
                "docs": {},
                "h": {
                  "docs": {
                    "Query.html#matchPurpose": {
                      "ref": "Query.html#matchPurpose",
                      "tf": 12.5
                    }
                  },
                  "p": {
                    "docs": {},
                    "u": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "p": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "s": {
                              "docs": {
                                "Query.html#matchPurpose": {
                                  "ref": "Query.html#matchPurpose",
                                  "tf": 675
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "x": {
              "docs": {
                "CAServices.html#getExpirationDate": {
                  "ref": "CAServices.html#getExpirationDate",
                  "tf": 10
                }
              }
            },
            "i": {
              "docs": {},
              "n": {
                "docs": {
                  "Grpc.html": {
                    "ref": "Grpc.html",
                    "tf": 3.8461538461538463
                  }
                }
              }
            }
          },
          "s": {
            "docs": {},
            "p": {
              "docs": {
                "CAServices.html#importMSP": {
                  "ref": "CAServices.html#importMSP",
                  "tf": 8.333333333333332
                },
                "CAServices.html#exportMSP": {
                  "ref": "CAServices.html#exportMSP",
                  "tf": 8.333333333333332
                }
              }
            },
            "g": {
              "docs": {
                "Grpc.html#sendMessage": {
                  "ref": "Grpc.html#sendMessage",
                  "tf": 33.33333333333333
                }
              }
            }
          },
          "e": {
            "docs": {},
            "s": {
              "docs": {},
              "s": {
                "docs": {},
                "a": {
                  "docs": {},
                  "g": {
                    "docs": {
                      "Grpc.html#sendMessage": {
                        "ref": "Grpc.html#sendMessage",
                        "tf": 49.99999999999999
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "q": {
          "docs": {},
          "u": {
            "docs": {},
            "e": {
              "docs": {},
              "r": {
                "docs": {},
                "i": {
                  "docs": {
                    "Query.html": {
                      "ref": "Query.html",
                      "tf": 1912.5
                    },
                    "Query.html#queryProductsByUser": {
                      "ref": "Query.html#queryProductsByUser",
                      "tf": 16.666666666666664
                    },
                    "Query.html#queryTransactionHistoryForProduct": {
                      "ref": "Query.html#queryTransactionHistoryForProduct",
                      "tf": 10
                    },
                    "DataContract.html#getProducts": {
                      "ref": "DataContract.html#getProducts",
                      "tf": 25
                    },
                    "UserContract.html#getUsers": {
                      "ref": "UserContract.html#getUsers",
                      "tf": 25
                    },
                    "OffchainDB.html#readUsers": {
                      "ref": "OffchainDB.html#readUsers",
                      "tf": 25
                    },
                    "OffchainDB.html#readUserData": {
                      "ref": "OffchainDB.html#readUserData",
                      "tf": 25
                    },
                    "OffchainDB.html#readProducts": {
                      "ref": "OffchainDB.html#readProducts",
                      "tf": 25
                    },
                    "OffchainDB.html#readProductsByFilter": {
                      "ref": "OffchainDB.html#readProductsByFilter",
                      "tf": 16.666666666666664
                    },
                    "OffchainDB.html#readAgreements": {
                      "ref": "OffchainDB.html#readAgreements",
                      "tf": 16.666666666666664
                    },
                    "OffchainDB.html#readProductData": {
                      "ref": "OffchainDB.html#readProductData",
                      "tf": 25
                    }
                  }
                },
                "y": {
                  "docs": {},
                  "#": {
                    "docs": {},
                    "q": {
                      "docs": {},
                      "u": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "y": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "g": {
                                  "docs": {},
                                  "r": {
                                    "docs": {
                                      "Query.html#queryAgreements": {
                                        "ref": "Query.html#queryAgreements",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              },
                              "u": {
                                "docs": {},
                                "s": {
                                  "docs": {
                                    "Query.html#queryUsers": {
                                      "ref": "Query.html#queryUsers",
                                      "tf": 1150
                                    }
                                  },
                                  "e": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "b": {
                                        "docs": {},
                                        "y": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "d": {
                                              "docs": {
                                                "Query.html#queryUserByID": {
                                                  "ref": "Query.html#queryUserByID",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "p": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "d": {
                                      "docs": {},
                                      "u": {
                                        "docs": {},
                                        "c": {
                                          "docs": {},
                                          "t": {
                                            "docs": {
                                              "Query.html#queryProducts": {
                                                "ref": "Query.html#queryProducts",
                                                "tf": 1150
                                              }
                                            },
                                            "b": {
                                              "docs": {},
                                              "y": {
                                                "docs": {},
                                                "i": {
                                                  "docs": {},
                                                  "d": {
                                                    "docs": {
                                                      "Query.html#queryProductByID": {
                                                        "ref": "Query.html#queryProductByID",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "s": {
                                              "docs": {},
                                              "b": {
                                                "docs": {},
                                                "y": {
                                                  "docs": {},
                                                  "u": {
                                                    "docs": {},
                                                    "s": {
                                                      "docs": {
                                                        "Query.html#queryProductsByUser": {
                                                          "ref": "Query.html#queryProductsByUser",
                                                          "tf": 1150
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "c": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "g": {
                                            "docs": {},
                                            "u": {
                                              "docs": {
                                                "Query.html#queryCatalogue": {
                                                  "ref": "Query.html#queryCatalogue",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "f": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "d": {
                                              "docs": {},
                                              "p": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "d": {
                                                      "docs": {},
                                                      "u": {
                                                        "docs": {},
                                                        "c": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {
                                                              "Query.html#queryFilteredProducts": {
                                                                "ref": "Query.html#queryFilteredProducts",
                                                                "tf": 1150
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "t": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "n": {
                                      "docs": {},
                                      "s": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "n": {
                                                    "docs": {},
                                                    "h": {
                                                      "docs": {},
                                                      "i": {
                                                        "docs": {},
                                                        "s": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {},
                                                            "o": {
                                                              "docs": {},
                                                              "r": {
                                                                "docs": {},
                                                                "y": {
                                                                  "docs": {},
                                                                  "f": {
                                                                    "docs": {},
                                                                    "o": {
                                                                      "docs": {},
                                                                      "r": {
                                                                        "docs": {},
                                                                        "p": {
                                                                          "docs": {},
                                                                          "r": {
                                                                            "docs": {},
                                                                            "o": {
                                                                              "docs": {},
                                                                              "d": {
                                                                                "docs": {},
                                                                                "u": {
                                                                                  "docs": {},
                                                                                  "c": {
                                                                                    "docs": {},
                                                                                    "t": {
                                                                                      "docs": {
                                                                                        "Query.html#queryTransactionHistoryForProduct": {
                                                                                          "ref": "Query.html#queryTransactionHistoryForProduct",
                                                                                          "tf": 1150
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "m": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "c": {
                            "docs": {},
                            "h": {
                              "docs": {},
                              "p": {
                                "docs": {},
                                "u": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "p": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "s": {
                                          "docs": {
                                            "Query.html#matchPurpose": {
                                              "ref": "Query.html#matchPurpose",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "a": {
                    "docs": {},
                    "g": {
                      "docs": {},
                      "r": {
                        "docs": {
                          "Query.html#queryAgreements": {
                            "ref": "Query.html#queryAgreements",
                            "tf": 683.3333333333334
                          }
                        }
                      }
                    }
                  },
                  "u": {
                    "docs": {},
                    "s": {
                      "docs": {
                        "Query.html#queryUsers": {
                          "ref": "Query.html#queryUsers",
                          "tf": 683.3333333333334
                        }
                      },
                      "e": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "b": {
                            "docs": {},
                            "y": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "d": {
                                  "docs": {
                                    "Query.html#queryUserByID": {
                                      "ref": "Query.html#queryUserByID",
                                      "tf": 683.3333333333334
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "p": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "d": {
                          "docs": {},
                          "u": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "Query.html#queryProducts": {
                                    "ref": "Query.html#queryProducts",
                                    "tf": 683.3333333333334
                                  }
                                },
                                "b": {
                                  "docs": {},
                                  "y": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "d": {
                                        "docs": {
                                          "Query.html#queryProductByID": {
                                            "ref": "Query.html#queryProductByID",
                                            "tf": 675
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "s": {
                                  "docs": {},
                                  "b": {
                                    "docs": {},
                                    "y": {
                                      "docs": {},
                                      "u": {
                                        "docs": {},
                                        "s": {
                                          "docs": {
                                            "Query.html#queryProductsByUser": {
                                              "ref": "Query.html#queryProductsByUser",
                                              "tf": 675
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "c": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "g": {
                                "docs": {},
                                "u": {
                                  "docs": {
                                    "Query.html#queryCatalogue": {
                                      "ref": "Query.html#queryCatalogue",
                                      "tf": 683.3333333333334
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "f": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "d": {
                                  "docs": {},
                                  "p": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "d": {
                                          "docs": {},
                                          "u": {
                                            "docs": {},
                                            "c": {
                                              "docs": {},
                                              "t": {
                                                "docs": {
                                                  "Query.html#queryFilteredProducts": {
                                                    "ref": "Query.html#queryFilteredProducts",
                                                    "tf": 675
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "t": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "s": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "n": {
                                        "docs": {},
                                        "h": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "s": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "r": {
                                                    "docs": {},
                                                    "y": {
                                                      "docs": {},
                                                      "f": {
                                                        "docs": {},
                                                        "o": {
                                                          "docs": {},
                                                          "r": {
                                                            "docs": {},
                                                            "p": {
                                                              "docs": {},
                                                              "r": {
                                                                "docs": {},
                                                                "o": {
                                                                  "docs": {},
                                                                  "d": {
                                                                    "docs": {},
                                                                    "u": {
                                                                      "docs": {},
                                                                      "c": {
                                                                        "docs": {},
                                                                        "t": {
                                                                          "docs": {
                                                                            "Query.html#queryTransactionHistoryForProduct": {
                                                                              "ref": "Query.html#queryTransactionHistoryForProduct",
                                                                              "tf": 675
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "f": {
          "docs": {},
          "u": {
            "docs": {},
            "n": {
              "docs": {},
              "c": {
                "docs": {},
                "t": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "n": {
                        "docs": {
                          "Query.html#queryAgreements": {
                            "ref": "Query.html#queryAgreements",
                            "tf": 110
                          },
                          "Query.html#queryUsers": {
                            "ref": "Query.html#queryUsers",
                            "tf": 110
                          },
                          "Query.html#queryUserByID": {
                            "ref": "Query.html#queryUserByID",
                            "tf": 110
                          },
                          "Query.html#queryProducts": {
                            "ref": "Query.html#queryProducts",
                            "tf": 110
                          },
                          "Query.html#queryProductByID": {
                            "ref": "Query.html#queryProductByID",
                            "tf": 110
                          },
                          "Query.html#queryProductsByUser": {
                            "ref": "Query.html#queryProductsByUser",
                            "tf": 110
                          },
                          "Query.html#queryCatalogue": {
                            "ref": "Query.html#queryCatalogue",
                            "tf": 110
                          },
                          "Query.html#matchPurpose": {
                            "ref": "Query.html#matchPurpose",
                            "tf": 110
                          },
                          "Query.html#queryFilteredProducts": {
                            "ref": "Query.html#queryFilteredProducts",
                            "tf": 110
                          },
                          "Query.html#queryTransactionHistoryForProduct": {
                            "ref": "Query.html#queryTransactionHistoryForProduct",
                            "tf": 110
                          },
                          "AgreementContract.html#updateAgreement": {
                            "ref": "AgreementContract.html#updateAgreement",
                            "tf": 110
                          },
                          "AgreementContract.html#getAgreement": {
                            "ref": "AgreementContract.html#getAgreement",
                            "tf": 110
                          },
                          "AgreementContract.html#getAgreements": {
                            "ref": "AgreementContract.html#getAgreements",
                            "tf": 110
                          },
                          "DataContract.html#createProduct": {
                            "ref": "DataContract.html#createProduct",
                            "tf": 110
                          },
                          "DataContract.html#updateProduct": {
                            "ref": "DataContract.html#updateProduct",
                            "tf": 110
                          },
                          "DataContract.html#readProduct": {
                            "ref": "DataContract.html#readProduct",
                            "tf": 110
                          },
                          "DataContract.html#buyProduct": {
                            "ref": "DataContract.html#buyProduct",
                            "tf": 110
                          },
                          "DataContract.html#deleteProduct": {
                            "ref": "DataContract.html#deleteProduct",
                            "tf": 110
                          },
                          "DataContract.html#getProducts": {
                            "ref": "DataContract.html#getProducts",
                            "tf": 110
                          },
                          "CAServices.html#getIdentityContextFromWallet": {
                            "ref": "CAServices.html#getIdentityContextFromWallet",
                            "tf": 110
                          },
                          "CAServices.html#createCA": {
                            "ref": "CAServices.html#createCA",
                            "tf": 110
                          },
                          "CAServices.html#isAdmin": {
                            "ref": "CAServices.html#isAdmin",
                            "tf": 110
                          },
                          "CAServices.html#updateUser": {
                            "ref": "CAServices.html#updateUser",
                            "tf": 110
                          },
                          "CAServices.html#deleteUser": {
                            "ref": "CAServices.html#deleteUser",
                            "tf": 110
                          },
                          "CAServices.html#registerAppUser": {
                            "ref": "CAServices.html#registerAppUser",
                            "tf": 110
                          },
                          "CAServices.html#enrollAppUser": {
                            "ref": "CAServices.html#enrollAppUser",
                            "tf": 110
                          },
                          "CAServices.html#importMSP": {
                            "ref": "CAServices.html#importMSP",
                            "tf": 110
                          },
                          "CAServices.html#exportMSP": {
                            "ref": "CAServices.html#exportMSP",
                            "tf": 110
                          },
                          "CAServices.html#reenrollAppUser": {
                            "ref": "CAServices.html#reenrollAppUser",
                            "tf": 110
                          },
                          "CAServices.html#revokeCertificate": {
                            "ref": "CAServices.html#revokeCertificate",
                            "tf": 110
                          },
                          "CAServices.html#getCertificateBySerial": {
                            "ref": "CAServices.html#getCertificateBySerial",
                            "tf": 110
                          },
                          "CAServices.html#getExpirationDate": {
                            "ref": "CAServices.html#getExpirationDate",
                            "tf": 110
                          },
                          "CAServices.html#addRevokedCertificate": {
                            "ref": "CAServices.html#addRevokedCertificate",
                            "tf": 110
                          },
                          "UserContract.html#createUser": {
                            "ref": "UserContract.html#createUser",
                            "tf": 110
                          },
                          "UserContract.html#updateUser": {
                            "ref": "UserContract.html#updateUser",
                            "tf": 110
                          },
                          "UserContract.html#readUser": {
                            "ref": "UserContract.html#readUser",
                            "tf": 110
                          },
                          "UserContract.html#deleteUser": {
                            "ref": "UserContract.html#deleteUser",
                            "tf": 110
                          },
                          "UserContract.html#getUsers": {
                            "ref": "UserContract.html#getUsers",
                            "tf": 110
                          },
                          "Grpc.html": {
                            "ref": "Grpc.html",
                            "tf": 3.8461538461538463
                          },
                          "Grpc.html#sendMessage": {
                            "ref": "Grpc.html#sendMessage",
                            "tf": 110
                          },
                          "Grpc.html#triggerCRLUpdate": {
                            "ref": "Grpc.html#triggerCRLUpdate",
                            "tf": 110
                          },
                          "OffchainDB.html#initDB": {
                            "ref": "OffchainDB.html#initDB",
                            "tf": 110
                          },
                          "OffchainDB.html#openConnection": {
                            "ref": "OffchainDB.html#openConnection",
                            "tf": 110
                          },
                          "OffchainDB.html#closeConnection": {
                            "ref": "OffchainDB.html#closeConnection",
                            "tf": 110
                          },
                          "OffchainDB.html#updateInventory": {
                            "ref": "OffchainDB.html#updateInventory",
                            "tf": 110
                          },
                          "OffchainDB.html#writeUserData": {
                            "ref": "OffchainDB.html#writeUserData",
                            "tf": 110
                          },
                          "OffchainDB.html#updateUserData": {
                            "ref": "OffchainDB.html#updateUserData",
                            "tf": 110
                          },
                          "OffchainDB.html#deleteUserData": {
                            "ref": "OffchainDB.html#deleteUserData",
                            "tf": 110
                          },
                          "OffchainDB.html#writeProductData": {
                            "ref": "OffchainDB.html#writeProductData",
                            "tf": 110
                          },
                          "OffchainDB.html#updateProductData": {
                            "ref": "OffchainDB.html#updateProductData",
                            "tf": 110
                          },
                          "OffchainDB.html#deleteProductData": {
                            "ref": "OffchainDB.html#deleteProductData",
                            "tf": 110
                          },
                          "OffchainDB.html#writeAgreement": {
                            "ref": "OffchainDB.html#writeAgreement",
                            "tf": 110
                          },
                          "OffchainDB.html#updateAgreement": {
                            "ref": "OffchainDB.html#updateAgreement",
                            "tf": 110
                          },
                          "OffchainDB.html#readUsers": {
                            "ref": "OffchainDB.html#readUsers",
                            "tf": 110
                          },
                          "OffchainDB.html#readUserData": {
                            "ref": "OffchainDB.html#readUserData",
                            "tf": 110
                          },
                          "OffchainDB.html#readProducts": {
                            "ref": "OffchainDB.html#readProducts",
                            "tf": 110
                          },
                          "OffchainDB.html#readCatalogue": {
                            "ref": "OffchainDB.html#readCatalogue",
                            "tf": 110
                          },
                          "OffchainDB.html#readProductsByFilter": {
                            "ref": "OffchainDB.html#readProductsByFilter",
                            "tf": 110
                          },
                          "OffchainDB.html#readAgreements": {
                            "ref": "OffchainDB.html#readAgreements",
                            "tf": 110
                          },
                          "OffchainDB.html#readProductData": {
                            "ref": "OffchainDB.html#readProductData",
                            "tf": 110
                          },
                          "OffchainDB.html#eventHandler": {
                            "ref": "OffchainDB.html#eventHandler",
                            "tf": 110
                          },
                          "OffchainDB.html#dbExists": {
                            "ref": "OffchainDB.html#dbExists",
                            "tf": 110
                          },
                          "module-liCrypto.html": {
                            "ref": "module-liCrypto.html",
                            "tf": 12.5
                          },
                          "module-libUtil.html": {
                            "ref": "module-libUtil.html",
                            "tf": 25
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "l": {
              "docs": {},
              "t": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Query.html#queryFilteredProducts": {
                        "ref": "Query.html#queryFilteredProducts",
                        "tf": 25
                      },
                      "OffchainDB.html#readProductsByFilter": {
                        "ref": "OffchainDB.html#readProductsByFilter",
                        "tf": 41.666666666666664
                      },
                      "OffchainDB.html#readAgreements": {
                        "ref": "OffchainDB.html#readAgreements",
                        "tf": 16.666666666666664
                      }
                    }
                  }
                }
              },
              "e": {
                "docs": {
                  "CAServices.html#createCA": {
                    "ref": "CAServices.html#createCA",
                    "tf": 4.545454545454546
                  },
                  "CAServices.html#addRevokedCertificate": {
                    "ref": "CAServices.html#addRevokedCertificate",
                    "tf": 10
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "t": {
              "docs": {},
              "c": {
                "docs": {},
                "h": {
                  "docs": {
                    "AgreementContract.html#getAgreement": {
                      "ref": "AgreementContract.html#getAgreement",
                      "tf": 25
                    },
                    "DataContract.html#readProduct": {
                      "ref": "DataContract.html#readProduct",
                      "tf": 8.333333333333332
                    },
                    "CAServices.html#getCertificateBySerial": {
                      "ref": "CAServices.html#getCertificateBySerial",
                      "tf": 10
                    },
                    "OffchainDB.html#readCatalogue": {
                      "ref": "OffchainDB.html#readCatalogue",
                      "tf": 6.25
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "b": {
              "docs": {},
              "r": {
                "docs": {},
                "i": {
                  "docs": {},
                  "c": {
                    "docs": {
                      "CAServices.html": {
                        "ref": "CAServices.html",
                        "tf": 10
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "r": {
              "docs": {},
              "c": {
                "docs": {
                  "CAServices.html#deleteUser": {
                    "ref": "CAServices.html#deleteUser",
                    "tf": 20
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "d": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "CAServices.html#importMSP": {
                        "ref": "CAServices.html#importMSP",
                        "tf": 8.333333333333332
                      },
                      "CAServices.html#exportMSP": {
                        "ref": "CAServices.html#exportMSP",
                        "tf": 8.333333333333332
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "u": {
          "docs": {},
          "s": {
            "docs": {},
            "e": {
              "docs": {},
              "r": {
                "docs": {
                  "Query.html#queryUsers": {
                    "ref": "Query.html#queryUsers",
                    "tf": 25
                  },
                  "Query.html#queryUserByID": {
                    "ref": "Query.html#queryUserByID",
                    "tf": 12.5
                  },
                  "Query.html#queryProductsByUser": {
                    "ref": "Query.html#queryProductsByUser",
                    "tf": 16.666666666666664
                  },
                  "DataContract.html#buyProduct": {
                    "ref": "DataContract.html#buyProduct",
                    "tf": 7.142857142857142
                  },
                  "CAServices.html#isAdmin": {
                    "ref": "CAServices.html#isAdmin",
                    "tf": 8.333333333333332
                  },
                  "CAServices.html#updateUser": {
                    "ref": "CAServices.html#updateUser",
                    "tf": 16.666666666666664
                  },
                  "CAServices.html#deleteUser": {
                    "ref": "CAServices.html#deleteUser",
                    "tf": 16.666666666666664
                  },
                  "CAServices.html#registerAppUser": {
                    "ref": "CAServices.html#registerAppUser",
                    "tf": 12.5
                  },
                  "CAServices.html#enrollAppUser": {
                    "ref": "CAServices.html#enrollAppUser",
                    "tf": 10
                  },
                  "CAServices.html#reenrollAppUser": {
                    "ref": "CAServices.html#reenrollAppUser",
                    "tf": 10
                  },
                  "CAServices.html#revokeCertificate": {
                    "ref": "CAServices.html#revokeCertificate",
                    "tf": 10
                  },
                  "UserContract.html": {
                    "ref": "UserContract.html",
                    "tf": 12.5
                  },
                  "UserContract.html#createUser": {
                    "ref": "UserContract.html#createUser",
                    "tf": 33.33333333333333
                  },
                  "UserContract.html#updateUser": {
                    "ref": "UserContract.html#updateUser",
                    "tf": 35
                  },
                  "UserContract.html#readUser": {
                    "ref": "UserContract.html#readUser",
                    "tf": 10
                  },
                  "UserContract.html#deleteUser": {
                    "ref": "UserContract.html#deleteUser",
                    "tf": 5
                  },
                  "UserContract.html#getUsers": {
                    "ref": "UserContract.html#getUsers",
                    "tf": 25
                  },
                  "OffchainDB.html#updateInventory": {
                    "ref": "OffchainDB.html#updateInventory",
                    "tf": 16.666666666666664
                  },
                  "OffchainDB.html#writeUserData": {
                    "ref": "OffchainDB.html#writeUserData",
                    "tf": 16.666666666666664
                  },
                  "OffchainDB.html#updateUserData": {
                    "ref": "OffchainDB.html#updateUserData",
                    "tf": 16.666666666666664
                  },
                  "OffchainDB.html#deleteUserData": {
                    "ref": "OffchainDB.html#deleteUserData",
                    "tf": 16.666666666666664
                  },
                  "OffchainDB.html#readUsers": {
                    "ref": "OffchainDB.html#readUsers",
                    "tf": 25
                  },
                  "OffchainDB.html#readUserData": {
                    "ref": "OffchainDB.html#readUserData",
                    "tf": 25
                  }
                },
                "i": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "Query.html#queryProductsByUser": {
                        "ref": "Query.html#queryProductsByUser",
                        "tf": 25
                      },
                      "Query.html#queryFilteredProducts": {
                        "ref": "Query.html#queryFilteredProducts",
                        "tf": 25
                      },
                      "DataContract.html#createProduct": {
                        "ref": "DataContract.html#createProduct",
                        "tf": 20
                      },
                      "DataContract.html#updateProduct": {
                        "ref": "DataContract.html#updateProduct",
                        "tf": 20
                      },
                      "DataContract.html#readProduct": {
                        "ref": "DataContract.html#readProduct",
                        "tf": 20
                      },
                      "DataContract.html#buyProduct": {
                        "ref": "DataContract.html#buyProduct",
                        "tf": 16.666666666666664
                      },
                      "DataContract.html#deleteProduct": {
                        "ref": "DataContract.html#deleteProduct",
                        "tf": 20
                      },
                      "CAServices.html#getIdentityContextFromWallet": {
                        "ref": "CAServices.html#getIdentityContextFromWallet",
                        "tf": 25
                      },
                      "CAServices.html#importMSP": {
                        "ref": "CAServices.html#importMSP",
                        "tf": 25
                      },
                      "CAServices.html#exportMSP": {
                        "ref": "CAServices.html#exportMSP",
                        "tf": 25
                      },
                      "UserContract.html#createUser": {
                        "ref": "UserContract.html#createUser",
                        "tf": 25
                      },
                      "UserContract.html#updateUser": {
                        "ref": "UserContract.html#updateUser",
                        "tf": 25
                      },
                      "UserContract.html#readUser": {
                        "ref": "UserContract.html#readUser",
                        "tf": 20
                      },
                      "UserContract.html#deleteUser": {
                        "ref": "UserContract.html#deleteUser",
                        "tf": 20
                      },
                      "OffchainDB.html#readUserData": {
                        "ref": "OffchainDB.html#readUserData",
                        "tf": 25
                      }
                    }
                  }
                },
                "'": {
                  "docs": {
                    "CAServices.html#getExpirationDate": {
                      "ref": "CAServices.html#getExpirationDate",
                      "tf": 10
                    }
                  }
                },
                "c": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "UserContract.html": {
                                    "ref": "UserContract.html",
                                    "tf": 1900
                                  }
                                },
                                "#": {
                                  "docs": {},
                                  "c": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "u": {
                                                "docs": {},
                                                "s": {
                                                  "docs": {
                                                    "UserContract.html#createUser": {
                                                      "ref": "UserContract.html#createUser",
                                                      "tf": 1150
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "u": {
                                    "docs": {},
                                    "p": {
                                      "docs": {},
                                      "d": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "u": {
                                                "docs": {},
                                                "s": {
                                                  "docs": {
                                                    "UserContract.html#updateUser": {
                                                      "ref": "UserContract.html#updateUser",
                                                      "tf": 1150
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "r": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "d": {
                                          "docs": {},
                                          "u": {
                                            "docs": {},
                                            "s": {
                                              "docs": {
                                                "UserContract.html#readUser": {
                                                  "ref": "UserContract.html#readUser",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "d": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "u": {
                                                "docs": {},
                                                "s": {
                                                  "docs": {
                                                    "UserContract.html#deleteUser": {
                                                      "ref": "UserContract.html#deleteUser",
                                                      "tf": 1150
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "g": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "u": {
                                          "docs": {},
                                          "s": {
                                            "docs": {
                                              "UserContract.html#getUsers": {
                                                "ref": "UserContract.html#getUsers",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "n": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "m": {
                      "docs": {
                        "UserContract.html#readUser": {
                          "ref": "UserContract.html#readUser",
                          "tf": 20
                        },
                        "UserContract.html#deleteUser": {
                          "ref": "UserContract.html#deleteUser",
                          "tf": 20
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "p": {
            "docs": {},
            "d": {
              "docs": {},
              "a": {
                "docs": {},
                "t": {
                  "docs": {
                    "AgreementContract.html#updateAgreement": {
                      "ref": "AgreementContract.html#updateAgreement",
                      "tf": 12.5
                    },
                    "DataContract.html#updateProduct": {
                      "ref": "DataContract.html#updateProduct",
                      "tf": 8.333333333333332
                    },
                    "CAServices.html#updateUser": {
                      "ref": "CAServices.html#updateUser",
                      "tf": 16.666666666666664
                    },
                    "UserContract.html#updateUser": {
                      "ref": "UserContract.html#updateUser",
                      "tf": 10
                    },
                    "Grpc.html": {
                      "ref": "Grpc.html",
                      "tf": 3.8461538461538463
                    },
                    "OffchainDB.html#updateInventory": {
                      "ref": "OffchainDB.html#updateInventory",
                      "tf": 16.666666666666664
                    },
                    "OffchainDB.html#updateUserData": {
                      "ref": "OffchainDB.html#updateUserData",
                      "tf": 16.666666666666664
                    },
                    "OffchainDB.html#updateProductData": {
                      "ref": "OffchainDB.html#updateProductData",
                      "tf": 16.666666666666664
                    },
                    "OffchainDB.html#updateAgreement": {
                      "ref": "OffchainDB.html#updateAgreement",
                      "tf": 16.666666666666664
                    }
                  },
                  "e": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "g": {
                        "docs": {},
                        "r": {
                          "docs": {
                            "AgreementContract.html#updateAgreement": {
                              "ref": "AgreementContract.html#updateAgreement",
                              "tf": 666.6666666666666
                            },
                            "OffchainDB.html#updateAgreement": {
                              "ref": "OffchainDB.html#updateAgreement",
                              "tf": 675
                            }
                          }
                        }
                      }
                    },
                    "p": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "d": {
                            "docs": {},
                            "u": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "t": {
                                  "docs": {
                                    "DataContract.html#updateProduct": {
                                      "ref": "DataContract.html#updateProduct",
                                      "tf": 678.3333333333334
                                    }
                                  },
                                  "d": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "a": {
                                          "docs": {
                                            "OffchainDB.html#updateProductData": {
                                              "ref": "OffchainDB.html#updateProductData",
                                              "tf": 675
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "u": {
                      "docs": {},
                      "s": {
                        "docs": {
                          "CAServices.html#updateUser": {
                            "ref": "CAServices.html#updateUser",
                            "tf": 670
                          },
                          "UserContract.html#updateUser": {
                            "ref": "UserContract.html#updateUser",
                            "tf": 675
                          }
                        },
                        "e": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "d": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "a": {
                                    "docs": {
                                      "OffchainDB.html#updateUserData": {
                                        "ref": "OffchainDB.html#updateUserData",
                                        "tf": 675
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "i": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "v": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "i": {
                                      "docs": {
                                        "OffchainDB.html#updateInventory": {
                                          "ref": "OffchainDB.html#updateInventory",
                                          "tf": 666.6666666666666
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "o": {
          "docs": {},
          "b": {
            "docs": {},
            "j": {
              "docs": {},
              "e": {
                "docs": {},
                "c": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "Query.html#queryUserByID": {
                        "ref": "Query.html#queryUserByID",
                        "tf": 33.33333333333333
                      },
                      "Query.html#queryProductByID": {
                        "ref": "Query.html#queryProductByID",
                        "tf": 25
                      },
                      "AgreementContract.html#getAgreement": {
                        "ref": "AgreementContract.html#getAgreement",
                        "tf": 20
                      },
                      "DataContract.html#readProduct": {
                        "ref": "DataContract.html#readProduct",
                        "tf": 20
                      },
                      "CAServices.html#getIdentityContextFromWallet": {
                        "ref": "CAServices.html#getIdentityContextFromWallet",
                        "tf": 25
                      },
                      "CAServices.html#createCA": {
                        "ref": "CAServices.html#createCA",
                        "tf": 50
                      },
                      "CAServices.html#reenrollAppUser": {
                        "ref": "CAServices.html#reenrollAppUser",
                        "tf": 16.666666666666664
                      },
                      "UserContract.html#readUser": {
                        "ref": "UserContract.html#readUser",
                        "tf": 20
                      },
                      "UserContract.html#getUsers": {
                        "ref": "UserContract.html#getUsers",
                        "tf": 25
                      },
                      "OffchainDB.html": {
                        "ref": "OffchainDB.html",
                        "tf": 16.666666666666664
                      },
                      "OffchainDB.html#readUserData": {
                        "ref": "OffchainDB.html#readUserData",
                        "tf": 25
                      },
                      "OffchainDB.html#readProductData": {
                        "ref": "OffchainDB.html#readProductData",
                        "tf": 25
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "a": {
                "docs": {},
                "i": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "CAServices.html#enrollAppUser": {
                        "ref": "CAServices.html#enrollAppUser",
                        "tf": 10
                      },
                      "CAServices.html#reenrollAppUser": {
                        "ref": "CAServices.html#reenrollAppUser",
                        "tf": 10
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "g": {
              "docs": {
                "AgreementContract.html#updateAgreement": {
                  "ref": "AgreementContract.html#updateAgreement",
                  "tf": 12.5
                }
              },
              "'": {
                "docs": {
                  "CAServices.html#isAdmin": {
                    "ref": "CAServices.html#isAdmin",
                    "tf": 8.333333333333332
                  }
                }
              },
              "a": {
                "docs": {},
                "n": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "z": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "'": {
                                  "docs": {
                                    "CAServices.html#registerAppUser": {
                                      "ref": "CAServices.html#registerAppUser",
                                      "tf": 12.5
                                    },
                                    "Grpc.html": {
                                      "ref": "Grpc.html",
                                      "tf": 3.8461538461538463
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "u": {
                "docs": {},
                "s": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "s": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "a": {
                            "docs": {
                              "CAServices.html#revokeCertificate": {
                                "ref": "CAServices.html#revokeCertificate",
                                "tf": 10
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "w": {
            "docs": {},
            "n": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {
                    "UserContract.html#deleteUser": {
                      "ref": "UserContract.html#deleteUser",
                      "tf": 10
                    },
                    "OffchainDB.html#updateInventory": {
                      "ref": "OffchainDB.html#updateInventory",
                      "tf": 16.666666666666664
                    }
                  },
                  "'": {
                    "docs": {
                      "OffchainDB.html#readCatalogue": {
                        "ref": "OffchainDB.html#readCatalogue",
                        "tf": 6.25
                      }
                    }
                  }
                }
              }
            }
          },
          "p": {
            "docs": {
              "OffchainDB.html#updateInventory": {
                "ref": "OffchainDB.html#updateInventory",
                "tf": 16.666666666666664
              }
            },
            "e": {
              "docs": {},
              "r": {
                "docs": {
                  "Grpc.html": {
                    "ref": "Grpc.html",
                    "tf": 3.8461538461538463
                  },
                  "OffchainDB.html#eventHandler": {
                    "ref": "OffchainDB.html#eventHandler",
                    "tf": 12.5
                  }
                }
              },
              "n": {
                "docs": {
                  "OffchainDB.html#openConnection": {
                    "ref": "OffchainDB.html#openConnection",
                    "tf": 16.666666666666664
                  }
                },
                "c": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "c": {
                            "docs": {},
                            "t": {
                              "docs": {
                                "OffchainDB.html#openConnection": {
                                  "ref": "OffchainDB.html#openConnection",
                                  "tf": 700
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "f": {
            "docs": {},
            "f": {
              "docs": {},
              "c": {
                "docs": {},
                "h": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "d": {
                          "docs": {},
                          "b": {
                            "docs": {
                              "OffchainDB.html": {
                                "ref": "OffchainDB.html",
                                "tf": 1916.6666666666667
                              }
                            },
                            "#": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "n": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "d": {
                                        "docs": {},
                                        "b": {
                                          "docs": {
                                            "OffchainDB.html#initDB": {
                                              "ref": "OffchainDB.html#initDB",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "o": {
                                "docs": {},
                                "p": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "n": {
                                      "docs": {},
                                      "c": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "n": {
                                            "docs": {},
                                            "n": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "c": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {
                                                      "OffchainDB.html#openConnection": {
                                                        "ref": "OffchainDB.html#openConnection",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "c": {
                                "docs": {},
                                "l": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "s": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "c": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "n": {
                                              "docs": {},
                                              "n": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "c": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {
                                                        "OffchainDB.html#closeConnection": {
                                                          "ref": "OffchainDB.html#closeConnection",
                                                          "tf": 1150
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "u": {
                                "docs": {},
                                "p": {
                                  "docs": {},
                                  "d": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "n": {
                                              "docs": {},
                                              "v": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "n": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {},
                                                      "o": {
                                                        "docs": {},
                                                        "r": {
                                                          "docs": {},
                                                          "i": {
                                                            "docs": {
                                                              "OffchainDB.html#updateInventory": {
                                                                "ref": "OffchainDB.html#updateInventory",
                                                                "tf": 1150
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "u": {
                                            "docs": {},
                                            "s": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  "d": {
                                                    "docs": {},
                                                    "a": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {},
                                                        "a": {
                                                          "docs": {
                                                            "OffchainDB.html#updateUserData": {
                                                              "ref": "OffchainDB.html#updateUserData",
                                                              "tf": 1150
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "p": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "d": {
                                                  "docs": {},
                                                  "u": {
                                                    "docs": {},
                                                    "c": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {},
                                                        "d": {
                                                          "docs": {},
                                                          "a": {
                                                            "docs": {},
                                                            "t": {
                                                              "docs": {},
                                                              "a": {
                                                                "docs": {
                                                                  "OffchainDB.html#updateProductData": {
                                                                    "ref": "OffchainDB.html#updateProductData",
                                                                    "tf": 1150
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "a": {
                                            "docs": {},
                                            "g": {
                                              "docs": {},
                                              "r": {
                                                "docs": {
                                                  "OffchainDB.html#updateAgreement": {
                                                    "ref": "OffchainDB.html#updateAgreement",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "w": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "u": {
                                          "docs": {},
                                          "s": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "r": {
                                                "docs": {},
                                                "d": {
                                                  "docs": {},
                                                  "a": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {},
                                                      "a": {
                                                        "docs": {
                                                          "OffchainDB.html#writeUserData": {
                                                            "ref": "OffchainDB.html#writeUserData",
                                                            "tf": 1150
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "p": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "d": {
                                                "docs": {},
                                                "u": {
                                                  "docs": {},
                                                  "c": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {},
                                                      "d": {
                                                        "docs": {},
                                                        "a": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {},
                                                            "a": {
                                                              "docs": {
                                                                "OffchainDB.html#writeProductData": {
                                                                  "ref": "OffchainDB.html#writeProductData",
                                                                  "tf": 1150
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "a": {
                                          "docs": {},
                                          "g": {
                                            "docs": {},
                                            "r": {
                                              "docs": {
                                                "OffchainDB.html#writeAgreement": {
                                                  "ref": "OffchainDB.html#writeAgreement",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "d": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "u": {
                                            "docs": {},
                                            "s": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  "d": {
                                                    "docs": {},
                                                    "a": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {},
                                                        "a": {
                                                          "docs": {
                                                            "OffchainDB.html#deleteUserData": {
                                                              "ref": "OffchainDB.html#deleteUserData",
                                                              "tf": 1150
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "p": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "d": {
                                                  "docs": {},
                                                  "u": {
                                                    "docs": {},
                                                    "c": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {},
                                                        "d": {
                                                          "docs": {},
                                                          "a": {
                                                            "docs": {},
                                                            "t": {
                                                              "docs": {},
                                                              "a": {
                                                                "docs": {
                                                                  "OffchainDB.html#deleteProductData": {
                                                                    "ref": "OffchainDB.html#deleteProductData",
                                                                    "tf": 1150
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "b": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "x": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "t": {
                                            "docs": {
                                              "OffchainDB.html#dbExists": {
                                                "ref": "OffchainDB.html#dbExists",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "r": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "d": {
                                      "docs": {},
                                      "u": {
                                        "docs": {},
                                        "s": {
                                          "docs": {
                                            "OffchainDB.html#readUsers": {
                                              "ref": "OffchainDB.html#readUsers",
                                              "tf": 1150
                                            }
                                          },
                                          "e": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "d": {
                                                "docs": {},
                                                "a": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "a": {
                                                      "docs": {
                                                        "OffchainDB.html#readUserData": {
                                                          "ref": "OffchainDB.html#readUserData",
                                                          "tf": 1150
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "p": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "d": {
                                              "docs": {},
                                              "u": {
                                                "docs": {},
                                                "c": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {
                                                      "OffchainDB.html#readProducts": {
                                                        "ref": "OffchainDB.html#readProducts",
                                                        "tf": 1150
                                                      }
                                                    },
                                                    "s": {
                                                      "docs": {},
                                                      "b": {
                                                        "docs": {},
                                                        "y": {
                                                          "docs": {},
                                                          "f": {
                                                            "docs": {},
                                                            "i": {
                                                              "docs": {},
                                                              "l": {
                                                                "docs": {},
                                                                "t": {
                                                                  "docs": {
                                                                    "OffchainDB.html#readProductsByFilter": {
                                                                      "ref": "OffchainDB.html#readProductsByFilter",
                                                                      "tf": 1150
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "d": {
                                                      "docs": {},
                                                      "a": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {},
                                                          "a": {
                                                            "docs": {
                                                              "OffchainDB.html#readProductData": {
                                                                "ref": "OffchainDB.html#readProductData",
                                                                "tf": 1150
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "c": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "l": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "g": {
                                                    "docs": {},
                                                    "u": {
                                                      "docs": {
                                                        "OffchainDB.html#readCatalogue": {
                                                          "ref": "OffchainDB.html#readCatalogue",
                                                          "tf": 1150
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "a": {
                                        "docs": {},
                                        "g": {
                                          "docs": {},
                                          "r": {
                                            "docs": {
                                              "OffchainDB.html#readAgreements": {
                                                "ref": "OffchainDB.html#readAgreements",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "e": {
                                "docs": {},
                                "v": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "n": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "h": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "n": {
                                              "docs": {},
                                              "d": {
                                                "docs": {},
                                                "l": {
                                                  "docs": {
                                                    "OffchainDB.html#eventHandler": {
                                                      "ref": "OffchainDB.html#eventHandler",
                                                      "tf": 1150
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "l": {
                "docs": {},
                "i": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "module-libSignOffline.html": {
                        "ref": "module-libSignOffline.html",
                        "tf": 12.5
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "s": {
          "docs": {},
          "p": {
            "docs": {},
            "e": {
              "docs": {},
              "c": {
                "docs": {},
                "i": {
                  "docs": {},
                  "f": {
                    "docs": {
                      "Query.html#queryUserByID": {
                        "ref": "Query.html#queryUserByID",
                        "tf": 12.5
                      },
                      "Query.html#queryTransactionHistoryForProduct": {
                        "ref": "Query.html#queryTransactionHistoryForProduct",
                        "tf": 10
                      },
                      "CAServices.html#revokeCertificate": {
                        "ref": "CAServices.html#revokeCertificate",
                        "tf": 10
                      }
                    }
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            "a": {
              "docs": {},
              "t": {
                "docs": {},
                "u": {
                  "docs": {
                    "AgreementContract.html#updateAgreement": {
                      "ref": "AgreementContract.html#updateAgreement",
                      "tf": 16.666666666666664
                    }
                  }
                },
                "e": {
                  "docs": {
                    "DataContract.html#deleteProduct": {
                      "ref": "DataContract.html#deleteProduct",
                      "tf": 7.142857142857142
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "i": {
                "docs": {},
                "n": {
                  "docs": {},
                  "g": {
                    "docs": {
                      "AgreementContract.html#updateAgreement": {
                        "ref": "AgreementContract.html#updateAgreement",
                        "tf": 16.666666666666664
                      },
                      "DataContract.html#createProduct": {
                        "ref": "DataContract.html#createProduct",
                        "tf": 20
                      },
                      "DataContract.html#buyProduct": {
                        "ref": "DataContract.html#buyProduct",
                        "tf": 16.666666666666664
                      },
                      "CAServices.html#revokeCertificate": {
                        "ref": "CAServices.html#revokeCertificate",
                        "tf": 20
                      },
                      "CAServices.html#getCertificateBySerial": {
                        "ref": "CAServices.html#getCertificateBySerial",
                        "tf": 25
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "b": {
              "docs": {},
              "m": {
                "docs": {},
                "i": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "DataContract.html#createProduct": {
                        "ref": "DataContract.html#createProduct",
                        "tf": 10
                      },
                      "DataContract.html#updateProduct": {
                        "ref": "DataContract.html#updateProduct",
                        "tf": 8.333333333333332
                      },
                      "DataContract.html#buyProduct": {
                        "ref": "DataContract.html#buyProduct",
                        "tf": 7.142857142857142
                      },
                      "DataContract.html#deleteProduct": {
                        "ref": "DataContract.html#deleteProduct",
                        "tf": 7.142857142857142
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "r": {
              "docs": {},
              "v": {
                "docs": {},
                "i": {
                  "docs": {},
                  "c": {
                    "docs": {
                      "CAServices.html": {
                        "ref": "CAServices.html",
                        "tf": 10
                      }
                    }
                  }
                }
              },
              "i": {
                "docs": {},
                "a": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "CAServices.html#getCertificateBySerial": {
                        "ref": "CAServices.html#getCertificateBySerial",
                        "tf": 35
                      }
                    }
                  }
                }
              }
            },
            "c": {
              "docs": {},
              "r": {
                "docs": {},
                "e": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "CAServices.html#enrollAppUser": {
                        "ref": "CAServices.html#enrollAppUser",
                        "tf": 26.666666666666664
                      },
                      "CAServices.html#reenrollAppUser": {
                        "ref": "CAServices.html#reenrollAppUser",
                        "tf": 10
                      }
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "d": {
                "docs": {
                  "Grpc.html#sendMessage": {
                    "ref": "Grpc.html#sendMessage",
                    "tf": 16.666666666666664
                  },
                  "Grpc.html#triggerCRLUpdate": {
                    "ref": "Grpc.html#triggerCRLUpdate",
                    "tf": 25
                  }
                },
                "m": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "s": {
                      "docs": {},
                      "s": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "g": {
                            "docs": {
                              "Grpc.html#sendMessage": {
                                "ref": "Grpc.html#sendMessage",
                                "tf": 683.3333333333334
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "y": {
            "docs": {},
            "s": {
              "docs": {},
              "t": {
                "docs": {},
                "e": {
                  "docs": {},
                  "m": {
                    "docs": {
                      "CAServices.html#createCA": {
                        "ref": "CAServices.html#createCA",
                        "tf": 4.545454545454546
                      }
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "g": {
              "docs": {},
              "n": {
                "docs": {
                  "module-libSignOffline.html": {
                    "ref": "module-libSignOffline.html",
                    "tf": 12.5
                  }
                },
                "i": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "g": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "d": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "CAServices.html#reenrollAppUser": {
                                    "ref": "CAServices.html#reenrollAppUser",
                                    "tf": 16.666666666666664
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "m": {
            "docs": {},
            "a": {
              "docs": {},
              "r": {
                "docs": {},
                "t": {
                  "docs": {
                    "UserContract.html#createUser": {
                      "ref": "UserContract.html#createUser",
                      "tf": 8.333333333333332
                    },
                    "UserContract.html#updateUser": {
                      "ref": "UserContract.html#updateUser",
                      "tf": 10
                    },
                    "UserContract.html#readUser": {
                      "ref": "UserContract.html#readUser",
                      "tf": 10
                    },
                    "UserContract.html#deleteUser": {
                      "ref": "UserContract.html#deleteUser",
                      "tf": 5
                    }
                  }
                }
              }
            }
          }
        },
        "p": {
          "docs": {},
          "r": {
            "docs": {},
            "o": {
              "docs": {},
              "d": {
                "docs": {},
                "u": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Query.html#queryProducts": {
                          "ref": "Query.html#queryProducts",
                          "tf": 25
                        },
                        "Query.html#queryProductByID": {
                          "ref": "Query.html#queryProductByID",
                          "tf": 12.5
                        },
                        "Query.html#queryProductsByUser": {
                          "ref": "Query.html#queryProductsByUser",
                          "tf": 16.666666666666664
                        },
                        "Query.html#queryCatalogue": {
                          "ref": "Query.html#queryCatalogue",
                          "tf": 12.5
                        },
                        "Query.html#queryTransactionHistoryForProduct": {
                          "ref": "Query.html#queryTransactionHistoryForProduct",
                          "tf": 10
                        },
                        "DataContract.html#createProduct": {
                          "ref": "DataContract.html#createProduct",
                          "tf": 30
                        },
                        "DataContract.html#updateProduct": {
                          "ref": "DataContract.html#updateProduct",
                          "tf": 28.333333333333332
                        },
                        "DataContract.html#readProduct": {
                          "ref": "DataContract.html#readProduct",
                          "tf": 8.333333333333332
                        },
                        "DataContract.html#buyProduct": {
                          "ref": "DataContract.html#buyProduct",
                          "tf": 7.142857142857142
                        },
                        "DataContract.html#deleteProduct": {
                          "ref": "DataContract.html#deleteProduct",
                          "tf": 7.142857142857142
                        },
                        "DataContract.html#getProducts": {
                          "ref": "DataContract.html#getProducts",
                          "tf": 25
                        },
                        "OffchainDB.html#writeProductData": {
                          "ref": "OffchainDB.html#writeProductData",
                          "tf": 16.666666666666664
                        },
                        "OffchainDB.html#updateProductData": {
                          "ref": "OffchainDB.html#updateProductData",
                          "tf": 16.666666666666664
                        },
                        "OffchainDB.html#deleteProductData": {
                          "ref": "OffchainDB.html#deleteProductData",
                          "tf": 16.666666666666664
                        },
                        "OffchainDB.html#readProducts": {
                          "ref": "OffchainDB.html#readProducts",
                          "tf": 25
                        },
                        "OffchainDB.html#readCatalogue": {
                          "ref": "OffchainDB.html#readCatalogue",
                          "tf": 6.25
                        },
                        "OffchainDB.html#readProductsByFilter": {
                          "ref": "OffchainDB.html#readProductsByFilter",
                          "tf": 16.666666666666664
                        },
                        "OffchainDB.html#readAgreements": {
                          "ref": "OffchainDB.html#readAgreements",
                          "tf": 16.666666666666664
                        },
                        "OffchainDB.html#readProductData": {
                          "ref": "OffchainDB.html#readProductData",
                          "tf": 25
                        }
                      },
                      "i": {
                        "docs": {},
                        "d": {
                          "docs": {
                            "Query.html#queryProductByID": {
                              "ref": "Query.html#queryProductByID",
                              "tf": 25
                            },
                            "Query.html#queryTransactionHistoryForProduct": {
                              "ref": "Query.html#queryTransactionHistoryForProduct",
                              "tf": 25
                            },
                            "DataContract.html#readProduct": {
                              "ref": "DataContract.html#readProduct",
                              "tf": 20
                            },
                            "DataContract.html#buyProduct": {
                              "ref": "DataContract.html#buyProduct",
                              "tf": 16.666666666666664
                            },
                            "DataContract.html#deleteProduct": {
                              "ref": "DataContract.html#deleteProduct",
                              "tf": 20
                            },
                            "OffchainDB.html#updateInventory": {
                              "ref": "OffchainDB.html#updateInventory",
                              "tf": 16.666666666666664
                            },
                            "OffchainDB.html#readProductData": {
                              "ref": "OffchainDB.html#readProductData",
                              "tf": 25
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "l": {
              "docs": {},
              "i": {
                "docs": {},
                "c": {
                  "docs": {},
                  "i": {
                    "docs": {
                      "Query.html#matchPurpose": {
                        "ref": "Query.html#matchPurpose",
                        "tf": 12.5
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "r": {
              "docs": {},
              "p": {
                "docs": {},
                "o": {
                  "docs": {},
                  "s": {
                    "docs": {
                      "Query.html#matchPurpose": {
                        "ref": "Query.html#matchPurpose",
                        "tf": 12.5
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "t": {
              "docs": {},
              "h": {
                "docs": {
                  "CAServices.html#createCA": {
                    "ref": "CAServices.html#createCA",
                    "tf": 4.545454545454546
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "e": {
              "docs": {},
              "r": {
                "docs": {
                  "Grpc.html": {
                    "ref": "Grpc.html",
                    "tf": 3.8461538461538463
                  }
                }
              }
            }
          }
        },
        "e": {
          "docs": {},
          "x": {
            "docs": {},
            "p": {
              "docs": {},
              "i": {
                "docs": {},
                "r": {
                  "docs": {
                    "Query.html#queryCatalogue": {
                      "ref": "Query.html#queryCatalogue",
                      "tf": 12.5
                    },
                    "CAServices.html#getExpirationDate": {
                      "ref": "CAServices.html#getExpirationDate",
                      "tf": 10
                    },
                    "OffchainDB.html#readCatalogue": {
                      "ref": "OffchainDB.html#readCatalogue",
                      "tf": 6.25
                    }
                  }
                }
              },
              "o": {
                "docs": {},
                "r": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "m": {
                      "docs": {},
                      "s": {
                        "docs": {},
                        "p": {
                          "docs": {
                            "CAServices.html#exportMSP": {
                              "ref": "CAServices.html#exportMSP",
                              "tf": 675
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "s": {
                "docs": {},
                "t": {
                  "docs": {
                    "DataContract.html#updateProduct": {
                      "ref": "DataContract.html#updateProduct",
                      "tf": 8.333333333333332
                    },
                    "CAServices.html#createCA": {
                      "ref": "CAServices.html#createCA",
                      "tf": 4.545454545454546
                    },
                    "CAServices.html#importMSP": {
                      "ref": "CAServices.html#importMSP",
                      "tf": 8.333333333333332
                    },
                    "CAServices.html#exportMSP": {
                      "ref": "CAServices.html#exportMSP",
                      "tf": 8.333333333333332
                    },
                    "OffchainDB.html#dbExists": {
                      "ref": "OffchainDB.html#dbExists",
                      "tf": 16.666666666666664
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "r": {
              "docs": {},
              "o": {
                "docs": {},
                "r": {
                  "docs": {
                    "DataContract.html#updateProduct": {
                      "ref": "DataContract.html#updateProduct",
                      "tf": 20
                    },
                    "DataContract.html#deleteProduct": {
                      "ref": "DataContract.html#deleteProduct",
                      "tf": 20
                    },
                    "UserContract.html#deleteUser": {
                      "ref": "UserContract.html#deleteUser",
                      "tf": 20
                    }
                  }
                }
              }
            }
          },
          "v": {
            "docs": {},
            "a": {
              "docs": {},
              "l": {
                "docs": {},
                "u": {
                  "docs": {
                    "DataContract.html#readProduct": {
                      "ref": "DataContract.html#readProduct",
                      "tf": 8.333333333333332
                    }
                  }
                }
              }
            },
            "e": {
              "docs": {},
              "n": {
                "docs": {},
                "t": {
                  "docs": {
                    "OffchainDB.html#eventHandler": {
                      "ref": "OffchainDB.html#eventHandler",
                      "tf": 12.5
                    },
                    "module-libBlockListener.html": {
                      "ref": "module-libBlockListener.html",
                      "tf": 8.333333333333332
                    }
                  },
                  "d": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "a": {
                          "docs": {
                            "OffchainDB.html#eventHandler": {
                              "ref": "OffchainDB.html#eventHandler",
                              "tf": 25
                            }
                          }
                        }
                      }
                    }
                  },
                  "h": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "d": {
                          "docs": {},
                          "l": {
                            "docs": {
                              "OffchainDB.html#eventHandler": {
                                "ref": "OffchainDB.html#eventHandler",
                                "tf": 675
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "n": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "m": {
                        "docs": {
                          "OffchainDB.html#eventHandler": {
                            "ref": "OffchainDB.html#eventHandler",
                            "tf": 25
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "n": {
            "docs": {},
            "r": {
              "docs": {},
              "o": {
                "docs": {},
                "l": {
                  "docs": {
                    "CAServices.html#enrollAppUser": {
                      "ref": "CAServices.html#enrollAppUser",
                      "tf": 10
                    }
                  },
                  "l": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "p": {
                        "docs": {},
                        "p": {
                          "docs": {},
                          "u": {
                            "docs": {},
                            "s": {
                              "docs": {
                                "CAServices.html#enrollAppUser": {
                                  "ref": "CAServices.html#enrollAppUser",
                                  "tf": 666.6666666666666
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "w": {
          "docs": {},
          "a": {
            "docs": {},
            "l": {
              "docs": {},
              "l": {
                "docs": {},
                "e": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "CAServices.html#getIdentityContextFromWallet": {
                        "ref": "CAServices.html#getIdentityContextFromWallet",
                        "tf": 25
                      },
                      "CAServices.html#importMSP": {
                        "ref": "CAServices.html#importMSP",
                        "tf": 8.333333333333332
                      },
                      "CAServices.html#exportMSP": {
                        "ref": "CAServices.html#exportMSP",
                        "tf": 8.333333333333332
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "i": {
              "docs": {},
              "t": {
                "docs": {},
                "e": {
                  "docs": {
                    "OffchainDB.html#writeUserData": {
                      "ref": "OffchainDB.html#writeUserData",
                      "tf": 16.666666666666664
                    },
                    "OffchainDB.html#writeProductData": {
                      "ref": "OffchainDB.html#writeProductData",
                      "tf": 16.666666666666664
                    },
                    "OffchainDB.html#writeAgreement": {
                      "ref": "OffchainDB.html#writeAgreement",
                      "tf": 16.666666666666664
                    }
                  },
                  "u": {
                    "docs": {},
                    "s": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "d": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "a": {
                                  "docs": {
                                    "OffchainDB.html#writeUserData": {
                                      "ref": "OffchainDB.html#writeUserData",
                                      "tf": 675
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "p": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "d": {
                          "docs": {},
                          "u": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "d": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "a": {
                                        "docs": {
                                          "OffchainDB.html#writeProductData": {
                                            "ref": "OffchainDB.html#writeProductData",
                                            "tf": 675
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "a": {
                    "docs": {},
                    "g": {
                      "docs": {},
                      "r": {
                        "docs": {
                          "OffchainDB.html#writeAgreement": {
                            "ref": "OffchainDB.html#writeAgreement",
                            "tf": 675
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "n": {
          "docs": {},
          "u": {
            "docs": {},
            "m": {
              "docs": {},
              "b": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "CAServices.html#deleteUser": {
                        "ref": "CAServices.html#deleteUser",
                        "tf": 20
                      },
                      "CAServices.html#registerAppUser": {
                        "ref": "CAServices.html#registerAppUser",
                        "tf": 20
                      },
                      "CAServices.html#enrollAppUser": {
                        "ref": "CAServices.html#enrollAppUser",
                        "tf": 16.666666666666664
                      },
                      "CAServices.html#importMSP": {
                        "ref": "CAServices.html#importMSP",
                        "tf": 25
                      },
                      "CAServices.html#exportMSP": {
                        "ref": "CAServices.html#exportMSP",
                        "tf": 25
                      },
                      "CAServices.html#getCertificateBySerial": {
                        "ref": "CAServices.html#getCertificateBySerial",
                        "tf": 10
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "w": {
              "docs": {
                "UserContract.html#createUser": {
                  "ref": "UserContract.html#createUser",
                  "tf": 8.333333333333332
                }
              }
            }
          }
        }
      },
      "length": 684
    },
    "corpusTokens": [
      "add",
      "addrevokedcertif",
      "admin",
      "agreement",
      "agreementcontract",
      "agreementcontract#getagr",
      "agreementcontract#updateagr",
      "agrem",
      "algorithm",
      "api",
      "app",
      "appuserid",
      "appuserrol",
      "array",
      "array.&lt;object&gt",
      "atm",
      "attrreq",
      "author",
      "base",
      "block",
      "bool",
      "bootstrap",
      "buy",
      "buyer",
      "buyerparam",
      "buyerpurpos",
      "buyproduct",
      "ca",
      "cach",
      "caservic",
      "caservices#addrevokedcertif",
      "caservices#createca",
      "caservices#deleteus",
      "caservices#enrollappus",
      "caservices#exportmsp",
      "caservices#getcertificatebyseri",
      "caservices#getexpirationd",
      "caservices#getidentitycontextfromwallet",
      "caservices#importmsp",
      "caservices#isadmin",
      "caservices#reenrollappus",
      "caservices#registerappus",
      "caservices#revokecertif",
      "caservices#updateus",
      "catalogu",
      "ccp.yaml",
      "certif",
      "channel",
      "check",
      "class",
      "client",
      "clientid",
      "close",
      "closeconnect",
      "config",
      "connect",
      "construct",
      "contract",
      "creat",
      "createca",
      "createproduct",
      "createus",
      "credenti",
      "crl",
      "crlupdaterequest",
      "crlupdaterespons",
      "crypto",
      "csr",
      "data",
      "databas",
      "datacontract",
      "datacontract#buyproduct",
      "datacontract#createproduct",
      "datacontract#deleteproduct",
      "datacontract#getproduct",
      "datacontract#readproduct",
      "datacontract#updateproduct",
      "datapurpos",
      "date",
      "db",
      "dbexist",
      "delet",
      "deleteproduct",
      "deleteproductdata",
      "deleteus",
      "deleteuserdata",
      "detail",
      "document",
      "enrol",
      "enrollappus",
      "error",
      "evalu",
      "event",
      "eventdata",
      "eventhandl",
      "eventnam",
      "exist",
      "expir",
      "exportmsp",
      "fabric",
      "fetch",
      "file",
      "filter",
      "folder",
      "forc",
      "function",
      "getagr",
      "getcertificatebyseri",
      "getexpirationd",
      "getidentitycontextfromwallet",
      "getproduct",
      "getus",
      "global",
      "grpc",
      "grpc#sendmessag",
      "grpc#triggercrlupd",
      "handl",
      "handlebar",
      "helper",
      "histori",
      "id",
      "ident",
      "identityrequest",
      "implement",
      "import",
      "importmsp",
      "includ",
      "index",
      "initdb",
      "initi",
      "instanc",
      "inventori",
      "isadmin",
      "isod",
      "join",
      "jsdoc3",
      "key",
      "kraken",
      "ledger",
      "libblocklisten",
      "librari",
      "libsignofflin",
      "libutil",
      "licrypto",
      "list",
      "list:class",
      "list:modul",
      "listen",
      "local",
      "lt;async&gt",
      "main",
      "match",
      "matchpurpos",
      "max",
      "messag",
      "modul",
      "module:libblocklisten",
      "module:libsignofflin",
      "module:libutil",
      "module:licrypto",
      "msg",
      "msp",
      "new",
      "number",
      "object",
      "obtain",
      "offchaindb",
      "offchaindb#closeconnect",
      "offchaindb#dbexist",
      "offchaindb#deleteproductdata",
      "offchaindb#deleteuserdata",
      "offchaindb#eventhandl",
      "offchaindb#initdb",
      "offchaindb#openconnect",
      "offchaindb#readagr",
      "offchaindb#readcatalogu",
      "offchaindb#readproduct",
      "offchaindb#readproductdata",
      "offchaindb#readproductsbyfilt",
      "offchaindb#readus",
      "offchaindb#readuserdata",
      "offchaindb#updateagr",
      "offchaindb#updateinventori",
      "offchaindb#updateproductdata",
      "offchaindb#updateuserdata",
      "offchaindb#writeagr",
      "offchaindb#writeproductdata",
      "offchaindb#writeuserdata",
      "offlin",
      "op",
      "open",
      "openconnect",
      "oper",
      "org",
      "org'",
      "organization'",
      "orgusersca",
      "owner",
      "owner'",
      "path",
      "peer",
      "polici",
      "product",
      "productid",
      "purpos",
      "queri",
      "query#matchpurpos",
      "query#queryagr",
      "query#querycatalogu",
      "query#queryfilteredproduct",
      "query#queryproduct",
      "query#queryproductbyid",
      "query#queryproductsbyus",
      "query#querytransactionhistoryforproduct",
      "query#queryus",
      "query#queryuserbyid",
      "queryagr",
      "querycatalogu",
      "queryfilteredproduct",
      "queryproduct",
      "queryproductbyid",
      "queryproductsbyus",
      "querytransactionhistoryforproduct",
      "queryus",
      "queryuserbyid",
      "read",
      "readagr",
      "readcatalogu",
      "readm",
      "readproduct",
      "readproductdata",
      "readproductsbyfilt",
      "readus",
      "readuserdata",
      "reason",
      "reenrollappus",
      "regist",
      "registerappus",
      "registr",
      "relat",
      "remot",
      "remov",
      "renrol",
      "request",
      "revok",
      "revokecertif",
      "secret",
      "send",
      "sendmessag",
      "serial",
      "servic",
      "sign",
      "signingident",
      "smart",
      "specif",
      "state",
      "statu",
      "string",
      "submit",
      "system",
      "templat",
      "test",
      "transact",
      "transactionid",
      "trigger",
      "triggercrlupd",
      "updat",
      "updateagr",
      "updateinventori",
      "updateproduct",
      "updateproductdata",
      "updateus",
      "updateuserdata",
      "user",
      "user'",
      "usercontract",
      "usercontract#createus",
      "usercontract#deleteus",
      "usercontract#getus",
      "usercontract#readus",
      "usercontract#updateus",
      "userid",
      "usernam",
      "wallet",
      "write",
      "writeagr",
      "writeproductdata",
      "writeuserdata"
    ],
    "pipeline": [
      "trimmer",
      "stopWordFilter",
      "stemmer"
    ]
  },
  "store": {
    "index.html": {
      "id": "index.html",
      "kind": "readme",
      "title": "KRAKEN App API",
      "longname": "index",
      "name": "KRAKEN App API",
      "tags": "index",
      "summary": "A Bootstrap and Handlebars based template for JSDoc3.",
      "description": "",
      "body": ""
    },
    "global.html": {
      "id": "global.html",
      "kind": "global",
      "title": "Globals",
      "longname": "global",
      "name": "Globals",
      "tags": "global",
      "summary": "All documented globals.",
      "description": "",
      "body": ""
    },
    "list_class.html": {
      "id": "list_class.html",
      "kind": "list",
      "title": "Classes",
      "longname": "list:class",
      "name": "Classes",
      "tags": "list:class",
      "summary": "All documented classes.",
      "description": "",
      "body": ""
    },
    "list_module.html": {
      "id": "list_module.html",
      "kind": "list",
      "title": "Modules",
      "longname": "list:module",
      "name": "Modules",
      "tags": "list:module",
      "summary": "All documented modules.",
      "description": "",
      "body": ""
    },
    "Query.html": {
      "id": "Query.html",
      "kind": "class",
      "title": "Query",
      "longname": "Query",
      "name": "Query",
      "tags": "Query",
      "summary": "",
      "description": "Implementation of queries to the Cache Database",
      "body": ""
    },
    "Query.html#queryAgreements": {
      "id": "Query.html#queryAgreements",
      "kind": "function",
      "title": "&lt;async&gt; queryAgreements() → {Array}",
      "longname": "Query#queryAgreements",
      "name": "queryAgreements",
      "tags": "Query#queryAgreements queryAgreements",
      "summary": "",
      "description": "Get all agreements from DB"
    },
    "Query.html#queryUsers": {
      "id": "Query.html#queryUsers",
      "kind": "function",
      "title": "&lt;async&gt; queryUsers() → {Array}",
      "longname": "Query#queryUsers",
      "name": "queryUsers",
      "tags": "Query#queryUsers queryUsers",
      "summary": "",
      "description": "Get all users from DB"
    },
    "Query.html#queryUserByID": {
      "id": "Query.html#queryUserByID",
      "kind": "function",
      "title": "&lt;async&gt; queryUserByID() → {Object}",
      "longname": "Query#queryUserByID",
      "name": "queryUserByID",
      "tags": "Query#queryUserByID queryUserByID",
      "summary": "",
      "description": "Get specific user by ID from DB"
    },
    "Query.html#queryProducts": {
      "id": "Query.html#queryProducts",
      "kind": "function",
      "title": "&lt;async&gt; queryProducts() → {Array}",
      "longname": "Query#queryProducts",
      "name": "queryProducts",
      "tags": "Query#queryProducts queryProducts",
      "summary": "",
      "description": "Get all products from DB"
    },
    "Query.html#queryProductByID": {
      "id": "Query.html#queryProductByID",
      "kind": "function",
      "title": "&lt;async&gt; queryProductByID( productID ) → {Object}",
      "longname": "Query#queryProductByID",
      "name": "queryProductByID",
      "tags": "Query#queryProductByID queryProductByID",
      "summary": "",
      "description": "Get product details by ID from DB"
    },
    "Query.html#queryProductsByUser": {
      "id": "Query.html#queryProductsByUser",
      "kind": "function",
      "title": "&lt;async&gt; queryProductsByUser( userID ) → {Array}",
      "longname": "Query#queryProductsByUser",
      "name": "queryProductsByUser",
      "tags": "Query#queryProductsByUser queryProductsByUser",
      "summary": "",
      "description": "Query products by User"
    },
    "Query.html#queryCatalogue": {
      "id": "Query.html#queryCatalogue",
      "kind": "function",
      "title": "&lt;async&gt; queryCatalogue() → {Array}",
      "longname": "Query#queryCatalogue",
      "name": "queryCatalogue",
      "tags": "Query#queryCatalogue queryCatalogue",
      "summary": "",
      "description": "Get catalogue (All products + expiration date)"
    },
    "Query.html#matchPurpose": {
      "id": "Query.html#matchPurpose",
      "kind": "function",
      "title": "matchPurpose( buyerPurpose, dataPurpose ) → {Bool}",
      "longname": "Query#matchPurpose",
      "name": "matchPurpose",
      "tags": "Query#matchPurpose matchPurpose",
      "summary": "",
      "description": "Match purposes buyer to policy"
    },
    "Query.html#queryFilteredProducts": {
      "id": "Query.html#queryFilteredProducts",
      "kind": "function",
      "title": "&lt;async&gt; queryFilteredProducts( userID ) → {Array}",
      "longname": "Query#queryFilteredProducts",
      "name": "queryFilteredProducts",
      "tags": "Query#queryFilteredProducts queryFilteredProducts",
      "summary": "",
      "description": "Filtering algorithm"
    },
    "Query.html#queryTransactionHistoryForProduct": {
      "id": "Query.html#queryTransactionHistoryForProduct",
      "kind": "function",
      "title": "&lt;async&gt; queryTransactionHistoryForProduct( productID ) → {Array}",
      "longname": "Query#queryTransactionHistoryForProduct",
      "name": "queryTransactionHistoryForProduct",
      "tags": "Query#queryTransactionHistoryForProduct queryTransactionHistoryForProduct",
      "summary": "",
      "description": "Queries the history of transactions for a specific product"
    },
    "AgreementContract.html": {
      "id": "AgreementContract.html",
      "kind": "class",
      "title": "AgreementContract",
      "longname": "AgreementContract",
      "name": "AgreementContract",
      "tags": "AgreementContract",
      "summary": "",
      "description": "API for the Agreement contract",
      "body": ""
    },
    "AgreementContract.html#updateAgreement": {
      "id": "AgreementContract.html#updateAgreement",
      "kind": "function",
      "title": "&lt;async&gt; updateAgreement( clientID, transactionID, status ) → {String}",
      "longname": "AgreementContract#updateAgreement",
      "name": "updateAgreement",
      "tags": "AgreementContract#updateAgreement updateAgreement",
      "summary": "",
      "description": "Update an agreement (Org Client only)"
    },
    "AgreementContract.html#getAgreement": {
      "id": "AgreementContract.html#getAgreement",
      "kind": "function",
      "title": "&lt;async&gt; getAgreement( clientID, transactionID ) → {Object}",
      "longname": "AgreementContract#getAgreement",
      "name": "getAgreement",
      "tags": "AgreementContract#getAgreement getAgreement",
      "summary": "",
      "description": "Fetch an agreement"
    },
    "AgreementContract.html#getAgreements": {
      "id": "AgreementContract.html#getAgreements",
      "kind": "function",
      "title": "&lt;async&gt; getAgreements( clientID ) → {Array}",
      "longname": "AgreementContract#getAgreements",
      "name": "getAgreements",
      "tags": "AgreementContract#getAgreements getAgreements",
      "summary": "",
      "description": "Get All agreements"
    },
    "DataContract.html": {
      "id": "DataContract.html",
      "kind": "class",
      "title": "DataContract",
      "longname": "DataContract",
      "name": "DataContract",
      "tags": "DataContract",
      "summary": "",
      "description": "API for the Data Catalogue contract",
      "body": ""
    },
    "DataContract.html#createProduct": {
      "id": "DataContract.html#createProduct",
      "kind": "function",
      "title": "&lt;async&gt; createProduct( userID, Product ) → {String}",
      "longname": "DataContract#createProduct",
      "name": "createProduct",
      "tags": "DataContract#createProduct createProduct",
      "summary": "",
      "description": "Submit CreateProduct transaction Create a product"
    },
    "DataContract.html#updateProduct": {
      "id": "DataContract.html#updateProduct",
      "kind": "function",
      "title": "&lt;async&gt; updateProduct( userID, Product ) → {Error}",
      "longname": "DataContract#updateProduct",
      "name": "updateProduct",
      "tags": "DataContract#updateProduct updateProduct",
      "summary": "",
      "description": "Submit UpdateProduct Transaction Updates an existing product"
    },
    "DataContract.html#readProduct": {
      "id": "DataContract.html#readProduct",
      "kind": "function",
      "title": "&lt;async&gt; readProduct( userID, productID ) → {Object}",
      "longname": "DataContract#readProduct",
      "name": "readProduct",
      "tags": "DataContract#readProduct readProduct",
      "summary": "",
      "description": "Evaluate ReadProduct Transaction Fetch a product from ledger"
    },
    "DataContract.html#buyProduct": {
      "id": "DataContract.html#buyProduct",
      "kind": "function",
      "title": "&lt;async&gt; buyProduct( userID, productID, buyerParams ) → {String}",
      "longname": "DataContract#buyProduct",
      "name": "buyProduct",
      "tags": "DataContract#buyProduct buyProduct",
      "summary": "",
      "description": "Submit BuyProduct Transaction Buy a product as a buyer user"
    },
    "DataContract.html#deleteProduct": {
      "id": "DataContract.html#deleteProduct",
      "kind": "function",
      "title": "&lt;async&gt; deleteProduct( userID, productID ) → {Error}",
      "longname": "DataContract#deleteProduct",
      "name": "deleteProduct",
      "tags": "DataContract#deleteProduct deleteProduct",
      "summary": "",
      "description": "Submit DeleteProduct Transaction Delete a product (Delete a State)"
    },
    "DataContract.html#getProducts": {
      "id": "DataContract.html#getProducts",
      "kind": "function",
      "title": "&lt;async&gt; getProducts( clientID ) → {Array}",
      "longname": "DataContract#getProducts",
      "name": "getProducts",
      "tags": "DataContract#getProducts getProducts",
      "summary": "",
      "description": "Query All Products"
    },
    "CAServices.html": {
      "id": "CAServices.html",
      "kind": "class",
      "title": "CAServices",
      "longname": "CAServices",
      "name": "CAServices",
      "tags": "CAServices",
      "summary": "",
      "description": "API Implementation for Fabric CA Services",
      "body": ""
    },
    "CAServices.html#getIdentityContextFromWallet": {
      "id": "CAServices.html#getIdentityContextFromWallet",
      "kind": "function",
      "title": "&lt;async&gt; getIdentityContextFromWallet( userID ) → {Object}",
      "longname": "CAServices#getIdentityContextFromWallet",
      "name": "getIdentityContextFromWallet",
      "tags": "CAServices#getIdentityContextFromWallet getIdentityContextFromWallet",
      "summary": "",
      "description": "Get identity from Wallet"
    },
    "CAServices.html#createCA": {
      "id": "CAServices.html#createCA",
      "kind": "function",
      "title": "createCA() → {Object}",
      "longname": "CAServices#createCA",
      "name": "createCA",
      "tags": "CAServices#createCA createCA",
      "summary": "",
      "description": "Creates CA instance based on existing ccp.yaml on local file system at path: ../ccp.yaml"
    },
    "CAServices.html#isAdmin": {
      "id": "CAServices.html#isAdmin",
      "kind": "function",
      "title": "&lt;async&gt; isAdmin( appUserID ) → {Bool}",
      "longname": "CAServices#isAdmin",
      "name": "isAdmin",
      "tags": "CAServices#isAdmin isAdmin",
      "summary": "",
      "description": "Checks if a user is registered as admin on the org's CA"
    },
    "CAServices.html#updateUser": {
      "id": "CAServices.html#updateUser",
      "kind": "function",
      "title": "&lt;async&gt; updateUser( appUserID, identityRequest ) → {Bool}",
      "longname": "CAServices#updateUser",
      "name": "updateUser",
      "tags": "CAServices#updateUser updateUser",
      "summary": "",
      "description": "Updates a user on the CA"
    },
    "CAServices.html#deleteUser": {
      "id": "CAServices.html#deleteUser",
      "kind": "function",
      "title": "&lt;async&gt; deleteUser( appUserID, force ) → {Number}",
      "longname": "CAServices#deleteUser",
      "name": "deleteUser",
      "tags": "CAServices#deleteUser deleteUser",
      "summary": "",
      "description": "Removes a user from the CA"
    },
    "CAServices.html#registerAppUser": {
      "id": "CAServices.html#registerAppUser",
      "kind": "function",
      "title": "&lt;async&gt; registerAppUser( appUserID, appUserRole ) → {Number}",
      "longname": "CAServices#registerAppUser",
      "name": "registerAppUser",
      "tags": "CAServices#registerAppUser registerAppUser",
      "summary": "",
      "description": "Register a user to the organization's CA"
    },
    "CAServices.html#enrollAppUser": {
      "id": "CAServices.html#enrollAppUser",
      "kind": "function",
      "title": "&lt;async&gt; enrollAppUser( appUserID, secret, csr ) → {Number}",
      "longname": "CAServices#enrollAppUser",
      "name": "enrollAppUser",
      "tags": "CAServices#enrollAppUser enrollAppUser",
      "summary": "",
      "description": "Enrolls a user with the secret obtained from registration"
    },
    "CAServices.html#importMSP": {
      "id": "CAServices.html#importMSP",
      "kind": "function",
      "title": "&lt;async&gt; importMSP( userID ) → {Number}",
      "longname": "CAServices#importMSP",
      "name": "importMSP",
      "tags": "CAServices#importMSP importMSP",
      "summary": "",
      "description": "Import existing MSP to local Wallet folder"
    },
    "CAServices.html#exportMSP": {
      "id": "CAServices.html#exportMSP",
      "kind": "function",
      "title": "&lt;async&gt; exportMSP( userID ) → {Number}",
      "longname": "CAServices#exportMSP",
      "name": "exportMSP",
      "tags": "CAServices#exportMSP exportMSP",
      "summary": "",
      "description": "Import existing MSP to local Wallet folder"
    },
    "CAServices.html#reenrollAppUser": {
      "id": "CAServices.html#reenrollAppUser",
      "kind": "function",
      "title": "&lt;async&gt; reenrollAppUser( csr, signingIdentity, attrReqs ) → {Object}",
      "longname": "CAServices#reenrollAppUser",
      "name": "reenrollAppUser",
      "tags": "CAServices#reenrollAppUser reenrollAppUser",
      "summary": "",
      "description": "Renrolls a user with the secret obtained from registration"
    },
    "CAServices.html#revokeCertificate": {
      "id": "CAServices.html#revokeCertificate",
      "kind": "function",
      "title": "&lt;async&gt; revokeCertificate( certificate, reason ) → {String}",
      "longname": "CAServices#revokeCertificate",
      "name": "revokeCertificate",
      "tags": "CAServices#revokeCertificate revokeCertificate",
      "summary": "",
      "description": "Revoke a specific certificate of a user of OrgUsersCA"
    },
    "CAServices.html#getCertificateBySerial": {
      "id": "CAServices.html#getCertificateBySerial",
      "kind": "function",
      "title": "&lt;async&gt; getCertificateBySerial( serial ) → {String}",
      "longname": "CAServices#getCertificateBySerial",
      "name": "getCertificateBySerial",
      "tags": "CAServices#getCertificateBySerial getCertificateBySerial",
      "summary": "",
      "description": "Fetch a certificate by serial number from CA"
    },
    "CAServices.html#getExpirationDate": {
      "id": "CAServices.html#getExpirationDate",
      "kind": "function",
      "title": "&lt;async&gt; getExpirationDate( appUserID ) → {ISODate}",
      "longname": "CAServices#getExpirationDate",
      "name": "getExpirationDate",
      "tags": "CAServices#getExpirationDate getExpirationDate",
      "summary": "",
      "description": "Get a user's max expiration date among their certificates"
    },
    "CAServices.html#addRevokedCertificate": {
      "id": "CAServices.html#addRevokedCertificate",
      "kind": "function",
      "title": "addRevokedCertificate( certificate )",
      "longname": "CAServices#addRevokedCertificate",
      "name": "addRevokedCertificate",
      "tags": "CAServices#addRevokedCertificate addRevokedCertificate",
      "summary": "",
      "description": "Add a revoked certificate to a local file"
    },
    "UserContract.html": {
      "id": "UserContract.html",
      "kind": "class",
      "title": "UserContract",
      "longname": "UserContract",
      "name": "UserContract",
      "tags": "UserContract",
      "summary": "",
      "description": "API for the User Credentials contract",
      "body": ""
    },
    "UserContract.html#createUser": {
      "id": "UserContract.html#createUser",
      "kind": "function",
      "title": "&lt;async&gt; createUser( userID, User )",
      "longname": "UserContract#createUser",
      "name": "createUser",
      "tags": "UserContract#createUser createUser",
      "summary": "",
      "description": "Create a new user Smart contract transaction"
    },
    "UserContract.html#updateUser": {
      "id": "UserContract.html#updateUser",
      "kind": "function",
      "title": "&lt;async&gt; updateUser( userID, User )",
      "longname": "UserContract#updateUser",
      "name": "updateUser",
      "tags": "UserContract#updateUser updateUser",
      "summary": "",
      "description": "Update a user Smart contract transaction"
    },
    "UserContract.html#readUser": {
      "id": "UserContract.html#readUser",
      "kind": "function",
      "title": "&lt;async&gt; readUser( userID, username ) → {Object}",
      "longname": "UserContract#readUser",
      "name": "readUser",
      "tags": "UserContract#readUser readUser",
      "summary": "",
      "description": "Read a user Smart contract transaction"
    },
    "UserContract.html#deleteUser": {
      "id": "UserContract.html#deleteUser",
      "kind": "function",
      "title": "&lt;async&gt; deleteUser( userID, username ) → {Error}",
      "longname": "UserContract#deleteUser",
      "name": "deleteUser",
      "tags": "UserContract#deleteUser deleteUser",
      "summary": "",
      "description": "Delete a user (owner or ADMIN authorized. only owner atm) Smart contract transaction"
    },
    "UserContract.html#getUsers": {
      "id": "UserContract.html#getUsers",
      "kind": "function",
      "title": "&lt;async&gt; getUsers( clientID ) → {Object}",
      "longname": "UserContract#getUsers",
      "name": "getUsers",
      "tags": "UserContract#getUsers getUsers",
      "summary": "",
      "description": "Query all users"
    },
    "Grpc.html": {
      "id": "Grpc.html",
      "kind": "class",
      "title": "Grpc",
      "longname": "Grpc",
      "name": "Grpc",
      "tags": "Grpc",
      "summary": "",
      "description": "Implementation of remote operations to an organization's peer. Main functionality is to trigger a channel config update to include CRL",
      "body": ""
    },
    "Grpc.html#sendMessage": {
      "id": "Grpc.html#sendMessage",
      "kind": "function",
      "title": "sendMessage( msg ) → {Message}",
      "longname": "Grpc#sendMessage",
      "name": "sendMessage",
      "tags": "Grpc#sendMessage sendMessage",
      "summary": "",
      "description": "Send a test message"
    },
    "Grpc.html#triggerCRLUpdate": {
      "id": "Grpc.html#triggerCRLUpdate",
      "kind": "function",
      "title": "&lt;async&gt; triggerCRLUpdate( request ) → {crlUpdateResponse}",
      "longname": "Grpc#triggerCRLUpdate",
      "name": "triggerCRLUpdate",
      "tags": "Grpc#triggerCRLUpdate triggerCRLUpdate",
      "summary": "",
      "description": "Send a crlUpdateRequest"
    },
    "OffchainDB.html": {
      "id": "OffchainDB.html",
      "kind": "class",
      "title": "OffchainDB",
      "longname": "OffchainDB",
      "name": "OffchainDB",
      "tags": "OffchainDB",
      "summary": "",
      "description": "Construct an OffchainDB Object",
      "body": ""
    },
    "OffchainDB.html#initDB": {
      "id": "OffchainDB.html#initDB",
      "kind": "function",
      "title": "&lt;async&gt; initDB()",
      "longname": "OffchainDB#initDB",
      "name": "initDB",
      "tags": "OffchainDB#initDB initDB",
      "summary": "",
      "description": "Initialize the DB"
    },
    "OffchainDB.html#openConnection": {
      "id": "OffchainDB.html#openConnection",
      "kind": "function",
      "title": "&lt;async&gt; openConnection()",
      "longname": "OffchainDB#openConnection",
      "name": "openConnection",
      "tags": "OffchainDB#openConnection openConnection",
      "summary": "",
      "description": "Open connection to DB"
    },
    "OffchainDB.html#closeConnection": {
      "id": "OffchainDB.html#closeConnection",
      "kind": "function",
      "title": "&lt;async&gt; closeConnection()",
      "longname": "OffchainDB#closeConnection",
      "name": "closeConnection",
      "tags": "OffchainDB#closeConnection closeConnection",
      "summary": "",
      "description": "Close connection to DB"
    },
    "OffchainDB.html#updateInventory": {
      "id": "OffchainDB.html#updateInventory",
      "kind": "function",
      "title": "&lt;async&gt; updateInventory( owner, productID, key, op )",
      "longname": "OffchainDB#updateInventory",
      "name": "updateInventory",
      "tags": "OffchainDB#updateInventory updateInventory",
      "summary": "",
      "description": "Updates the inventory of the user"
    },
    "OffchainDB.html#writeUserData": {
      "id": "OffchainDB.html#writeUserData",
      "kind": "function",
      "title": "&lt;async&gt; writeUserData( data, key )",
      "longname": "OffchainDB#writeUserData",
      "name": "writeUserData",
      "tags": "OffchainDB#writeUserData writeUserData",
      "summary": "",
      "description": "Write user in DB"
    },
    "OffchainDB.html#updateUserData": {
      "id": "OffchainDB.html#updateUserData",
      "kind": "function",
      "title": "&lt;async&gt; updateUserData( data, key )",
      "longname": "OffchainDB#updateUserData",
      "name": "updateUserData",
      "tags": "OffchainDB#updateUserData updateUserData",
      "summary": "",
      "description": "Update user in DB"
    },
    "OffchainDB.html#deleteUserData": {
      "id": "OffchainDB.html#deleteUserData",
      "kind": "function",
      "title": "&lt;async&gt; deleteUserData( data, key )",
      "longname": "OffchainDB#deleteUserData",
      "name": "deleteUserData",
      "tags": "OffchainDB#deleteUserData deleteUserData",
      "summary": "",
      "description": "Delete user in DB"
    },
    "OffchainDB.html#writeProductData": {
      "id": "OffchainDB.html#writeProductData",
      "kind": "function",
      "title": "&lt;async&gt; writeProductData( data, key )",
      "longname": "OffchainDB#writeProductData",
      "name": "writeProductData",
      "tags": "OffchainDB#writeProductData writeProductData",
      "summary": "",
      "description": "Write product in DB"
    },
    "OffchainDB.html#updateProductData": {
      "id": "OffchainDB.html#updateProductData",
      "kind": "function",
      "title": "&lt;async&gt; updateProductData( data, key )",
      "longname": "OffchainDB#updateProductData",
      "name": "updateProductData",
      "tags": "OffchainDB#updateProductData updateProductData",
      "summary": "",
      "description": "Update product in DB"
    },
    "OffchainDB.html#deleteProductData": {
      "id": "OffchainDB.html#deleteProductData",
      "kind": "function",
      "title": "&lt;async&gt; deleteProductData( data, key )",
      "longname": "OffchainDB#deleteProductData",
      "name": "deleteProductData",
      "tags": "OffchainDB#deleteProductData deleteProductData",
      "summary": "",
      "description": "Delete a product in DB"
    },
    "OffchainDB.html#writeAgreement": {
      "id": "OffchainDB.html#writeAgreement",
      "kind": "function",
      "title": "&lt;async&gt; writeAgreement( data, key )",
      "longname": "OffchainDB#writeAgreement",
      "name": "writeAgreement",
      "tags": "OffchainDB#writeAgreement writeAgreement",
      "summary": "",
      "description": "Write an agreement in DB"
    },
    "OffchainDB.html#updateAgreement": {
      "id": "OffchainDB.html#updateAgreement",
      "kind": "function",
      "title": "&lt;async&gt; updateAgreement( data, key )",
      "longname": "OffchainDB#updateAgreement",
      "name": "updateAgreement",
      "tags": "OffchainDB#updateAgreement updateAgreement",
      "summary": "",
      "description": "Update an agremeent in DB"
    },
    "OffchainDB.html#readUsers": {
      "id": "OffchainDB.html#readUsers",
      "kind": "function",
      "title": "&lt;async&gt; readUsers() → {Array.&lt;Object&gt;}",
      "longname": "OffchainDB#readUsers",
      "name": "readUsers",
      "tags": "OffchainDB#readUsers readUsers",
      "summary": "",
      "description": "Query All Users"
    },
    "OffchainDB.html#readUserData": {
      "id": "OffchainDB.html#readUserData",
      "kind": "function",
      "title": "&lt;async&gt; readUserData( userID ) → {Object}",
      "longname": "OffchainDB#readUserData",
      "name": "readUserData",
      "tags": "OffchainDB#readUserData readUserData",
      "summary": "",
      "description": "Query User"
    },
    "OffchainDB.html#readProducts": {
      "id": "OffchainDB.html#readProducts",
      "kind": "function",
      "title": "&lt;async&gt; readProducts() → {Array.&lt;Object&gt;}",
      "longname": "OffchainDB#readProducts",
      "name": "readProducts",
      "tags": "OffchainDB#readProducts readProducts",
      "summary": "",
      "description": "Query All Products"
    },
    "OffchainDB.html#readCatalogue": {
      "id": "OffchainDB.html#readCatalogue",
      "kind": "function",
      "title": "&lt;async&gt; readCatalogue() → {Array}",
      "longname": "OffchainDB#readCatalogue",
      "name": "readCatalogue",
      "tags": "OffchainDB#readCatalogue readCatalogue",
      "summary": "",
      "description": "Fetch all products from database joined with the owner's certificate expiration date"
    },
    "OffchainDB.html#readProductsByFilter": {
      "id": "OffchainDB.html#readProductsByFilter",
      "kind": "function",
      "title": "&lt;async&gt; readProductsByFilter( filter ) → {Array.&lt;Object&gt;}",
      "longname": "OffchainDB#readProductsByFilter",
      "name": "readProductsByFilter",
      "tags": "OffchainDB#readProductsByFilter readProductsByFilter",
      "summary": "",
      "description": "Query All Products by filter"
    },
    "OffchainDB.html#readAgreements": {
      "id": "OffchainDB.html#readAgreements",
      "kind": "function",
      "title": "&lt;async&gt; readAgreements() → {Array.&lt;Object&gt;}",
      "longname": "OffchainDB#readAgreements",
      "name": "readAgreements",
      "tags": "OffchainDB#readAgreements readAgreements",
      "summary": "",
      "description": "Query All Products by filter"
    },
    "OffchainDB.html#readProductData": {
      "id": "OffchainDB.html#readProductData",
      "kind": "function",
      "title": "&lt;async&gt; readProductData( productID ) → {Object}",
      "longname": "OffchainDB#readProductData",
      "name": "readProductData",
      "tags": "OffchainDB#readProductData readProductData",
      "summary": "",
      "description": "Query Product"
    },
    "OffchainDB.html#eventHandler": {
      "id": "OffchainDB.html#eventHandler",
      "kind": "function",
      "title": "&lt;async&gt; eventHandler( eventName, eventData )",
      "longname": "OffchainDB#eventHandler",
      "name": "eventHandler",
      "tags": "OffchainDB#eventHandler eventHandler",
      "summary": "",
      "description": "Handle events and DB operations"
    },
    "OffchainDB.html#dbExists": {
      "id": "OffchainDB.html#dbExists",
      "kind": "function",
      "title": "&lt;async&gt; dbExists() → {bool}",
      "longname": "OffchainDB#dbExists",
      "name": "dbExists",
      "tags": "OffchainDB#dbExists dbExists",
      "summary": "",
      "description": "Check if DB exists"
    },
    "module-libBlockListener.html": {
      "id": "module-libBlockListener.html",
      "kind": "module",
      "title": "libBlockListener",
      "longname": "module:libBlockListener",
      "name": "libBlockListener",
      "tags": "module:libBlockListener",
      "summary": "",
      "description": "A library implementing the block listening and event handling",
      "body": ""
    },
    "module-liCrypto.html": {
      "id": "module-liCrypto.html",
      "kind": "module",
      "title": "liCrypto",
      "longname": "module:liCrypto",
      "name": "liCrypto",
      "tags": "module:liCrypto",
      "summary": "",
      "description": "Implementation of Crypto related functionalities",
      "body": ""
    },
    "module-libSignOffline.html": {
      "id": "module-libSignOffline.html",
      "kind": "module",
      "title": "libSignOffline",
      "longname": "module:libSignOffline",
      "name": "libSignOffline",
      "tags": "module:libSignOffline",
      "summary": "",
      "description": "Implementation of offline transaction signing",
      "body": ""
    },
    "module-libUtil.html": {
      "id": "module-libUtil.html",
      "kind": "module",
      "title": "libUtil",
      "longname": "module:libUtil",
      "name": "libUtil",
      "tags": "module:libUtil",
      "summary": "",
      "description": "Helper functions",
      "body": ""
    }
  }
};