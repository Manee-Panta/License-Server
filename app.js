const http=require("http");
require("dotenv").config()
const readline=require("readline");
const bcryptjs=require("bcryptjs");
const express=require("express")
const app=express();
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000'
}));



let encryptionKey;
app.use(express.json())

// generating the hashed value of encryption key
bcryptjs.genSalt(10,(err,salt)=>{
    bcryptjs.hash(process.env.KEY,salt,(err,hash)=>{
        encryptionKey=hash;
    })
})

// server listening at port 3000
app.listen(4000,()=>{
    console.log("Server is listening at port 4000...");
})

app.post("/",(req,res)=>{

    let {key}=req.body;
  

    bcryptjs.compare(key,encryptionKey,(err,isMatch)=>{
        console.log(key)
        console.log(encryptionKey)
        // if encryption key entered is valid than only the user can access the page
        if(isMatch){
            res.json({msg:"valid"})
        }

        else{
            res.json({msg:"invalid"})
        }
    })
})

