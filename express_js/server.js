// http module launch a server, and send requests
// https module launch a ssl server.
const express = require('express')
const app = express();
 
app.use((req,res,next)=>{
    console.log('another middleware');
     res.send('<h1>hello from express!</h1>');
})
console.log(2);
app.listen(3000);
// const server = http.createServer(app);
// server.listen(3000);
// read about the node lifestyle and event loop.

