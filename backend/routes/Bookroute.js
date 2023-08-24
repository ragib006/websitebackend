const express = require("express");

const router = express.Router();


const {Createnewbook,GetallBook,featuredBook,BookSearch,getProducts,singleBook,updateBook,deleteBook} = require('../controllers/Bookcontroller')


//router.get("/ragib",(req,res)=> {   

//   res.send("Hellow")

//})

//http://localhost:5000/api/createnewbook
 router.post("/createnewbook",Createnewbook)

//http://localhost:5000/api/getallbook
 router.get("/getallbook",GetallBook)


//filter featuredBook

 router.get("/filterbook",featuredBook)

 //BookSearch

//localhost:5000/api/booksearch?keyword=Engineering
router.get('/booksearch',BookSearch)

//getlistof book
//localhost:5000/api/getlistbook
router.get('/getlistbook',getProducts)


//get single book
//localhost:5000/api/singlebook/:id
router.get('/singlebook/:id',singleBook)

//update book


//localhost:5000/api/updatebook/:id
router.put('/updatebook/:id',updateBook)

//deleteBook


//localhost:5000/api/deletebook/:id
router.delete('/deletebook/:id',deleteBook)









module.exports = router;