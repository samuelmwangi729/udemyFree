const bcrypt = require('bcrypt')
const User = require('../../models/Users/User')
//@desc Register a Users
//@route POST /api/v1/users/register
//@access public

//import the user model

module.exports.Register = async (req,res)=>{
    let errors={}
    try {
        const {firstName,lastName,username,email,password} = req.body
        //check if the user exists in the database
        const user =  await User.findOne({email})
        if(user){
            throw new Error('User Already exists')
        }else{
            const newUser = new User({
                firstName,
                lastName,
                username,
                email,
                password
            })
            //generate the salt and hash the password 
            const salt = await bcrypt.genSalt(30)
            //generate the hashed password
            newUser.password = await bcrypt.hash(password,salt)
            await newUser.save()
            res.status(201).json({
                status:'Success',
                message:'User Created',
                _id:newUser?._id,
                email:newUser?.email,
                userLevel:newUser?.userLevel,
                password:newUser?.password
            })
        }
        // res.json({user})
    } catch (error) {
        if(error.message.includes('User validation failed')){
            //get individual objects 
            Object.values(error.errors).forEach(({properties})=>{
                if(properties.message.includes('Path')){
                    errors[properties.path]='Password Is required'
                }else{
                    errors[properties.path]=properties.message
                }
            })
        }else{
            res.json({
                status:'failed',
                error:error.message
            })
        }
    }

    }
    
    // console.log(req.body)
    // res.status(201).json({
    //     data:'sam'
    // }