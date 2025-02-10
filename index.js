require("dotenv").config()
const express = require("express");
const cors = require("cors")
require('./database/dataConnect')
const router =require('./routes/router')



const Pserver =express()


Pserver.use(cors())
Pserver.use(express.json())
Pserver.use(router)
const PORT = process.env.PORT || 3000;



Pserver.listen(PORT,()=>{
    console.log(`My Pfserver is runing is runing at PORT :http://localhost:${PORT} and waiting for client request`);
    
})

Pserver.get("/",(req,res)=>{
    res.status(200).send(`<h1 style={{"color":"red"}}>My Pserver is runing at PORT : ${PORT}</h1>`)
})

Pserver.get('/register',(req,res)=>{
    res.status(200).send('Hello from Pserver')
})
