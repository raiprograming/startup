const express =require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app=express();
const path=require("path");

app.use(express.static("client/build"));

const port=process.env.PORT;

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})

    //app.get("/",(req,res)=>{
      //  res.json({"msg":"app is running"});
    //})
app.listen(port,()=>{
    console.log("server is rocking on port 8084");
});





