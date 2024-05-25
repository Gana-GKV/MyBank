//import express
const express=require('express')

const cors=require('cors')

//impoer logic
const logic=require('./service/logic')
//Server creation
const server=express()

//Convert json to js
server.use(express.json())
//connect to front-end
server.use(cors({origin:'http://localhost:4200'}))

//set port
server.listen(3000,()=>{
    console.log("------------Server Started at port number 3000-----------");
})

//server resolve

server.post('/getexe',(req,res)=>{
    res.send("....post request........")
})

//Register post
server.post('/register',(req,res)=>{
    logic.register(req.body.acno,req.body.uname,req.body.psw).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
//Login Post
server.post('/login',(req,res)=>{
    logic.login(req.body.acno,req.body.psw).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
//Profile view : Get
//account statement : Get
//Delete Account : Delete
