// http module launch a server, and send requests
// https module launch a ssl server.
const express = require('express')
const bodyParser = require('body-parser')
const adminroutes= require('./routes/admin.js');
const shoproutes = require('./routes/shop.js');
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
// actually this admin filter just check the starting of the dir and go further deeper
// into the files code if this matches, in there it will not check the /admin keyword.
// and check afterwards.
app.use('/admin',shoproutes);
app.use('/admin',adminroutes);
app.use((req,res,next)=> {
  res.status(404).send('<h1>page not found</h1>')
}) 
console.log(2);
app.listen(3000);
// const server = http.createServer(app);
// server.listen(3000);
// read about the node lifestyle and event loop.

