const mongoose = require('mongoose')

const connDb = async ()=>{
    try{
        //connect to the database 
        await mongoose.connect('mongodb+srv://samuelmwangi729:JyAlrg3HPY0Ct5Gu@udemyfree.e1ys72x.mongodb.net/UdemyFree?retryWrites=true&w=majority')
        .then((res)=>{
            console.log('connection to the database successful')
        })
    }catch(err){
        //catch an error if any 
        console.log('Could not connect to the database')
    }
}

module.exports = connDb