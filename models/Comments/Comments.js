const mongoose  = require('mongoose')
const User = require('../Users/User')
const Post = require('../Posts/Posts')
//create a schema 
const commentSchema = mongoose.Schema({
    //create the comments and link them to the posts 
    author :{
        type:mongoose.Schema.Types.ObjectId,
        ref:User
    },
    content:{
        type:String,
        required:true
    },
    post :{
        type:mongoose.Schema.Types.ObjectId,
        ref:Post
    },
    commentStatus:{
        type:String,
        enum:['Active','Inactive'],
        default:'Active'
    }
},{timestamps:true})

//export the models 
const Comment = mongoose.model('Comment',commentSchema)

module.exports = Comment