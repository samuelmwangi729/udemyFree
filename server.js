const express  = require('express')
const connDb = require('./DB')
const app = express()

//set the server to listen to port 8080
const SERVER_PORT = process.env.PORT || 3000
app.listen(8080,()=>{
    //connect to the database when the server starts
    connDb()
    console.log(`Server Running on Port ${SERVER_PORT}`)
})