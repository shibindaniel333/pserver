const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true

    },
    userId:{
        type:String,
    }
})



const users = mongoose.model('User', userSchema);
module.exports = users;