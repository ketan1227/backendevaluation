const express=require("express")
const {connection}=require("./db")
const {userRouter}=require("./Routes/userRoutes")
require("dotenv").config()
const app=express()

app.use(express.json())
app.use("/users",userRouter)


app.listen(process.env.port,async()=>{
    try{
        await connection
console.log("connected to DB")
    }
    catch(err){
console.log("err")
    }

    console.log(`server is running ${process.env.port}`)
})