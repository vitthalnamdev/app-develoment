// http module launch a server, and send requests
// https module launch a ssl server.
 
const http = require('http');
const fs= require('fs');
const server = http.createServer((req,res) => {
  console.log(req);
  const url = req.url;
  const method = req.method;
  if(url==='/')
  {  
   res.setHeader('Content-Type','text/html')
  res.write('<html>')
  res.write('<head><title>my second page</title></head>')
  res.write('<body><form action="/message" method = "POST"> <input type = "text" name="message"><button type"submit">Send</button></body>')
  res.write('</html>')
  return res.end();
  }
  if(url==='/message' && method=='POST')
  {
    const body=[];
    req.on('data',(chunk)=>{
      console.log(chunk);
      body.push(chunk);
    })
    req.on('end',()=>{
      const parsedBody= Buffer.concat(body).toString();
      // .split function is of string and can split a string into many parts from the given sign.
       const message= parsedBody.split('=')[1];
       fs.writeFileSync('message.txt',message);
       res.statusCode=302;
    })       
    res.setHeader('Location','/');
    return res.end(); 
  }
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

