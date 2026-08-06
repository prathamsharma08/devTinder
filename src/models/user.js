const mongoose=require("mongoose");
const Schema=new mongoose.Schema({
    firstName:
    {
        type:String,
        required:true,
        minlength:4
    },
    lastName:
    {
        type:String,
        required:true
    },
    emailId:
    {
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    Password:
    {
        type:String,
        required:true
    },
    age:
    {
        type:Number,
        min:18
    },
    gender:
    {
        type:String,
    },
    photoUrl:{
        type:String
    },
    about:{
        type:String,
        default:"This is an default Description"
    },
    skills:{
        type:[String] 
    }
})
const User=mongoose.model("User",Schema);
module.exports=User;