//@desc Register a Users
//@route POST /api/v1/users/register
//@access public


//import the user model
const User = require('../../models/Users/User')

exports.Register = async(req,res)=>{
    console.log(req.body)
    const user = new User({
        //then check for the details here
    })
    res.status(201).json({
        message:'Register the user'
    })
}