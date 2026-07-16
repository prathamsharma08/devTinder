const express=require("express");
const app=express();
// app.use("/hi",(req,res)=>{
//     res.send("Namste Pratham");
// })

app.use("/user",(req,res,next)=>{
    next();
    
},(req,res,next)=>{
    // res.send("response2");
    // res.send("response3");
    next();
    res.send("response2");
    
},
(req,res,next)=>{
     res.send("response3");
    next();
})
app.listen(3000,(req,res)=>{
    console.log(`listening at $3000`);
})