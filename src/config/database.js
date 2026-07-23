const mongoose=require("mongoose");
const connectDB=async ()=>{
    await mongoose.connect("mongodb+srv://Pratham_Sharma:Pratham88@cluster0.8wn2mhj.mongodb.net/?appName=Cluster0")
}
module.exports=connectDB;