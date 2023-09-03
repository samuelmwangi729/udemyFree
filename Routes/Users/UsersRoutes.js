const express = require('express')
const {Register} = require('../../controllers/Users/Users.js')
//create the extress router 

const usersRouter = express.Router()

usersRouter.post('/api/v1/users/register',Register)

//export the route 
module.exports = usersRouter;