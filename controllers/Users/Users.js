//@desc Register a Users
//@route POST /api/v1/users/register
//@access public


//import the user model
const User = require('../../models/Users/User')

module.exports.Register = async(req,res)=>{
    try{
        const user = User.create({
            //then check for the details here
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            username:req.body.username,
            email:req.body.email,
        })
        if(user){
            //
        }else{
            console.log('error happened')
        }
    }catch(e){
        console.log('could not create user')
    }
}