const nodeFetch = require('node-fetch')

globalThis.fetch = nodeFetch
globalThis.Request = nodeFetch.Request
globalThis.Response = nodeFetch.Response