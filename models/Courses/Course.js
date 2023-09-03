const mongoose = require('mongoose')
const Category = require('../Categories/Categories')
const courseCategorySchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,'Course title is Required']
    },
    Icon:{
        type:String,
        default:''
    }
},{timesamps:true})
const courseSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,'Course title is required']
    },
    image:{
        type:String,
        default:''
    },
    description:{
        type:String,
        required:[true,'Course Description Required']
    },
    author:{
        type:String,
        default:''
    },
    courseLink:{
        type:String,
        default:'',
        required:[true,'The course Link is required']
    },
    coursecategory:{
        type:mongoose.Schema.Types.ObjectId,
        refs:courseCategory
    }
})
const courseCategory = mongoose.models('Category',courseCategorySchema)
const Course = mongoose.models('Category',courseSchema)

module.exports = {courseCategory,Course}