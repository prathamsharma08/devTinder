// const {auth} = require("./src/middlewares/auth");
const express=require("express");
require("./src/config/database");
const User=require("./src/models/user")
const app=express();
const connectDB=require("./src/config/database")
app.use(express.json())
// app.post("/signup",async (req,res)=>{
    //console.log(req.body);})
    // const userObj=new User({
    //     firstName:"Pratham",
    //     lastName:"Sharma",
    //     emailId:"ps467@gmail.com",
    //     Password:"1234"
    // })
    app.get('/getuser',async (req,res)=>{
         //const emailId=req.body.emailId;
        try{
   // const user=await User.find({emailId:emailId});
    const user=await User.find({});
    res.send(user)
}

catch(err){
    res.status(500).end("error")
}
    })
    app.post('/update',async(req,res)=>{
    const emailId=req.body.emailId;
    try{
    const user=await User.findOneAndUpdate({emailId:emailId},{$set:{
        emailId:"pratham05@gmail.com"
    }})
    await user.save()
    res.send("saved")}
    catch(err){
        res.status(500).send("error");
    }
})
app.delete("/user",async(req,res)=>{
    const userId=req.body.userId;
    try{
        const user=await User.findByIdAndDelete(userId);
        res.send("user deleted successfully");
    }
    catch(err){
        res.status(400).send("something went wrong");
    }
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
app.patch("/user",async(req,res)=>{
    const userId=req.body.userId;
    const data=req.body;
    try{
        const user=await User.findByIdAndUpdate({_id:userId},data);
        res.send("User Updated Sucessfully");
    }
    catch(err){
        res.status(400).send("Something went wrong");
    }



}) 
// javascript object doesnot have a string in key whereas json hs sting in both key and value
// use middleware whne we we are doing req.body as or code udnerstands javascript object only
// patch and put diff
// explore mongoose documentation
// options in model.findoneandupdate methor
// update user with emailid
