

const asyncHandler = require('express-async-handler')

const Book = require('../model/Book')



//create new book
const Createnewbook = asyncHandler( async (req,res) => {

      const {name,author,thumbnail,price,rating,featured} = req.body;


              const book = await Book.create({

                  name,
                  author,
                  thumbnail,
                  price,
                  rating,
                  featured

              })

               if(book){

                 res.json({

                     _id:book._id,
                     name:book.name,
                     author:book.author,
                     thumbnail:book.thumbnail,
                     price:book.price,
                     rating:book.rating,
                     featured:book.featured



                 })

               }else{

                 res.status(401).json({message:'Invalid Book Data'})

               }


})




//get all book
const GetallBook = asyncHandler( async(req,res)=>{


  try{


          const getallbook = await Book.find();

          res.status(200).json(getallbook)



  }catch(error){


res.status(401).json({message:error})



  }

})




//single sook



const singleBook = asyncHandler(async(req,res)=>{
          

      try{

       const book = await Book.findById(req.params.id);

          res.status(200).json(book)


      }catch(error){

         res.status(404).json(error)

      }

})




//FilterfeaturedBook




const featuredBook = asyncHandler( async(req,res)=>{

 try {
    const featuredProducts = await Book.find({ featured: true });

     res.status(200).json(featuredProducts);
  
  } catch (error) {
    console.error('Error fetching featured products:', error);
    res.status(500).json({ error: 'An error occurred' });
  }


})








//Book search
const BookSearch = asyncHandler(async (req,res) => { 


try{


     const keyword = req.query.search ? {


    $or: [

       { name: { $regex:req.query.search, $options: "i"}},
       { author: { $regex:req.query.search, $options: "i"}},

    ]


    } : {}
   
  const book = await Book.find(keyword)


  res.status(200).json({search:book})





}catch(error){



   console.log(error)

}

      


})





//getbook with searching

 const getProducts = asyncHandler( async (req,res) => {




  const keyword = req.query.keyword ? {  

      name:{
          
          $regex:req.query.keyword,
          $options:'i'


      }


  }:{}

   

  const products = await Book.find({ ...keyword });
   res.json(products)

})





//updatebook

const updateBook = asyncHandler(async(req,res)=>{
          

      try{

          const updateBook = await Book.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true});

          res.status(200).json(updateBook)


      }catch(error){




         res.status(404).json(error)

      }

})



//deleteBook

const deleteBook = asyncHandler(async(req,res)=>{
          

      try{

       await Book.findByIdAndDelete(req.params.id);

          res.status(200).json('Book Delete SuccessFully')


      }catch(error){

         res.status(404).json(error)

      }

})













module.exports = {Createnewbook,GetallBook,featuredBook,BookSearch,getProducts,singleBook,updateBook,deleteBook}