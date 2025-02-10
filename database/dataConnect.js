const mongoose = require('mongoose')
const connectString = process.env.DBCONNECTIONSTRING

mongoose.connect(connectString).then(res=>{
    console.log("Connected to MongoDB")
}).catch((err)=>{
    console.log("Error connecting to MongoDB")
})