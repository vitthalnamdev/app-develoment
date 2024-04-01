// http module launch a server, and send requests
// https module launch a ssl server.
const path = require('path');
 
const adminroutes= require('./routes/admin.js');
const shoproutes = require('./routes/shop.js');
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}));
// actually this admin filter just check the starting of the dir and go further deeper
// into the files code if this matches, in there it will not check the /admin keyword.
// and check afterwards.


  // if you want to serve file statistically i.e. look for a css code from the sended html file, 
    // then you have to define a middleware like below..
 //app.use(express.static(path.join(__dirname,'routes')));
 app.use('/admin',adminroutes);
 app.use(shoproutes);
 
app.use((req,res,next)=> {
  res.sendFile('./routes/view/404.html' , { root : __dirname});
}) 
console.log(2);
app.listen(3000);
// const server = http.createServer(app);
// server.listen(3000);
// read about the node lifestyle and event loop.

