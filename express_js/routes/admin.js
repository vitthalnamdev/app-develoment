const express= require('express')
const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    console.log("ok")
    res.send('<form action="/admin/product" method = "POST"><input type="text" name="title"><button type ="submit">Add product</button></form>')
})
// app.get for filtering get request,
// app.post for filtering post request.
router.post('/product',(req,res,next)=>{
  console.log(req.body);
  res.redirect('/')
})


module.exports = router;