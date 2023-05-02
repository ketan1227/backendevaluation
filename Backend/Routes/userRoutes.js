const express=require("express")
const { userModel } = require("../Usermodel")
const userRouter=express.Router()

userRouter.post("/register",async (req,res)=>{
    const {email,password,name,gender}=req.body
try{
    bcrypt.hash(password,4,async (err,hash)=>{
        const user=new userModel({email,name,gender,password:hash})
        await user.save()
        res.send({"msg":"New user has been successfully register"})
    })
    
}
catch{
    res.send({"err":"registration failed"})
}
})

userRouter.post("/login", async (req,res)=>{
const {email,password}=req.body
try{
const user=await userModel.findOne({email,password})
if(user){
    res.send({"msg":"Login successfull"})
}else{
    res.send({"err":"login unsuccessfull"})
}
}
catch{
res.send({"err":"error in login route"})
}
})

module.exports={
    userRouter
}
