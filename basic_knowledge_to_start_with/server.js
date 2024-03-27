// http module launch a server, and send requests
// https module launch a ssl server.
 
const http = require('http');
const routes = require('./routes')
const server = http.createServer(routes)
server.listen(3000);
// read about the node lifestyle and event loop.

