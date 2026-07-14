const express=require("express");
const app=express();
// app.use("/hi",(req,res)=>{
//     res.send("Namste Pratham");
// })


app.use("/",(req,res)=>{
    res.send("hello hello");
})

app.use("/hi",(req,res)=>{
    res.send("hello hello");
})

app.use("/test",(req,res)=>{
    res.send("hello");
})

app.listen(3000,()=>{
    console.log("Server running");
})