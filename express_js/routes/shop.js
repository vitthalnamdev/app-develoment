const express= require('express')
const router = express.Router();
// actualy get request check the exact current directory while 
// use does not. in case of just '/'
router.get('/',(req,res,next)=>{
    res.send('<h1>HELLO</h1>')
})

module.exports = router;