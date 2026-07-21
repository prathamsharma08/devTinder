const auth=(req,res,next)=>{
    const token="1234";
    if(!token){
        res.status(401).json({
        message:"unauthorized"    
        })
    }
    next();
}
module.exports={auth}