const mongoose =  require('mongoose')
const {isEmail} =  require('validator')
const UserSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:[true,'First Name is Required']
    },
    lastName:{
        type:String,
        required:[true,'last Name is Required']
    },
    username:{
        type:String,
        required:[true,'Username Is Required']
    },
    email:{
        type:String,
        required:[true,'User Email Is Required'],
        unique:true,
        validate:[(val)=>{
            isEmail
        },'Please Enter a Valid Email']
    },
    password:{
        type:String,
        required:true,
        minlength:[8,'Password Must be 8 Characters']
    },
    isStaff:{
        type:String,
        enum:['yes','no'],
        default:'no'
    },
    userLevel:{
        type:String,
        enum:['Admin','Writer','Client','Marketer'],
        default:'Client'
    },
    accountStatus:{
        type:String,
        enum:['Active','Dormant','Suspended'],
        required:true,
        default:'Active'
    },
    lastLogin:{
        type:Date,
        default:Date.now()
    },
    isVerified:{
        type:String,
        dafault:false
    },
    profilePicture:{
        type:String,
        default:""
    },
    coverPicture:{
        type:String,
        default:""
    },
    passwordResetToken:{
        type:String,
        default:""
    },
    passwordResetTokenExpiry:{
        type:Date,
        default:""
    },
    accountVerificationToken:{
        type:String,
        default:""
    },
    accountVerificationTokenExpiry:{
        type:Date,
        default:""
    },
},{timestamps:true})


//export the schemas
const User = mongoose.model('User',UserSchema)

module.exports = User