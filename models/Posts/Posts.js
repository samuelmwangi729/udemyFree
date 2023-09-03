const mongoose  =  require('mongoose')
const User = require('../Users/User')
const Comment = require('../Comments/Comments')
const postSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,'Post title Is Required']
    },
    postImage:{
        type:String,
        default:''
    },
    postContent:{
        type:String,
        required:[true,'Content Is required']
    },
    Shares:{
        type:Number,
        default:0
    },
    Author:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:User
    },
    postViews:{
        type:Number,
        default:0
    },
    postLikes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:User
        }
    ],
    postDislikes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:User
        }
    ],
    postComments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:Comment
        }
    ],
    Category:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:Category
    },
    schedulePost:{
        type:Date,
        default:null
    },
},{timestamps:true})

const Post = mongoose.model('Post',postSchema)

module.exports = Post