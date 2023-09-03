const express  = require('express')
const usersRouter = require('./Routes/Users/UsersRoutes')
const connDb = require('./config/DB')
const app = express()

//set the server to listen to port 8080
const SERVER_PORT = process.env.PORT || 8080
app.listen(SERVER_PORT,()=>{
    //connect to the database when the server starts
    connDb()
    console.log(`Server Running on Port ${SERVER_PORT}`)
})
app.use(express.json())
app.use(usersRouter)
// in case the url does not match the given routes
app.use((req,res)=>{
    res.status(404).json({
        message:'Invalid EndPoint'
    })
 })