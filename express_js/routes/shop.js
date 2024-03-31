const Path = require('path');
const express= require('express')
const router = express.Router();
// actualy get request check the exact current directory while 
// use does not. in case of just '/'
router.get('/product',(req,res,next)=>{
   // res.sendFile(path.join(__dirname), 'view','shop.html');
  res.sendFile('./view/shop.html' , { root : __dirname});
})

module.exports = router;