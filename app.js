// const {auth} = require("./src/middlewares/auth");
const express=require("express");
require("./src/config/database");
const User=require("./src/models/user")
const app=express();
const connectDB=require("./src/config/database")
app.post("/signup",(req,res)=>{
    const userObj=new User({
        firstName:"Pratham",
        lastName:"Sharma",
        emailId:"ps467@gmail.com",
        password:"1234"
    })
    userObj.save();
    res.send("User Added Successfully")
})

// app.use("/hi",(req,res)=>{
//     res.send("Namste Pratham");
// }
// app.get("/admin",auth,(req,res)=>{
//     res.send("admin access allowed")
// })
// app.use("/user",(req,res,next)=>{
//     next();
// },(req,res,next)=>{
    // res.send("response2");
    // res.send("response3");
//     next();
//     res.send("response2");

// },
// (req,res,next)=>{
//      res.send("response3");
//     next();
// })
// app.get("/userdetails",(req,res)=>{
//     res.send("get user data");
// })
// app.use("/",(err,req,res,next)=>{
//     if(err){
//         res.status(500).send("something went wrong")
//     }
// })
connectDB().then(()=>{
    console.log("connected")
    app.listen(3000,(req,res)=>{
    console.log(`listening at $3000`);
})
})
.catch((err)=>{
    console.log("database cannot be connected")
})
