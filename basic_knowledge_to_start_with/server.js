// http module launch a server, and send requests
// https module launch a ssl server.
 
const http = require('http');
const server = http.createServer((req,res) => {
  console.log(req);
  // manipulating res or response.
  res.setHeader('Content-Type','text/html')
  res.write('<html>')
  res.write('<head><title>my first page</title></head>')
  res.write('<body><h1>HI</h1></body>')
  res.write('</html>')
  res.end();
});
server.listen(3000);
// read about the node lifestyle and event loop.

