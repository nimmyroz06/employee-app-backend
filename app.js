const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const employee=require("/models/employee")

const app=express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("employee app")
})

app.post("/view",(req,res)=>{
    res.send("view employees")
})

app.listen(8080,()=>{
    console.log("server start")
})