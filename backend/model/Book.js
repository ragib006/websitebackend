const mongoose = require("mongoose");



const bookSchema = mongoose.Schema({   
   


     name:{
        type:"String",
        required:true

     },

        author:{
        type:"String",
        required:true

     },

       thumbnail:{
        type:"String",
      
        default:"https://res.cloudinary.com/ragibhasan006/image/upload/v1617109096/aloiae2hbmx2bsrkhq0a.jpg"

         },

        price:{
        type:"String",
        required:true

       },

        rating:{
        type:"String",
        required:true

       },

        featured:{
        type:"String",
        required:true

       },


      
 



},{timestamps:true})



const Book = mongoose.model("Book",bookSchema);

module.exports = Book