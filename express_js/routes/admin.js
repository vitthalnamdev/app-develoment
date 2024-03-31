const express= require('express')
const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    console.log("ok")
    res.sendFile('./view/admin.html' , { root : __dirname});
    
  //  res.send('<form action="/admin/product" method = "POST"><input type="text" name="title"><button type ="submit">Add product</button></form>')
})
// app.get for filtering get request,
// app.post for filtering post request.
router.post('/add-product',(req,res,next)=>{
 
  console.log(req.body);
  res.redirect('/product')
})


module.exports = router;