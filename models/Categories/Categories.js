const mongoose = require('mongoose')
const Post = require('../Posts/Posts')
const categoriesSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,'Category Title is Required']
    },
    posts:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }
},{timestamps:true})

//export the models 
const Category = mongoose.models('Category',categoriesSchema)

module.exports = Category