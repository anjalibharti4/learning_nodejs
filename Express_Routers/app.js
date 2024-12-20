import express from "express"
import dotenv from "dotenv"
import userRouter from "./Routers/userRouter.js"
let app = express()
dotenv.config({"path":"./Config/dev.config"})
let port= process.env.PORT
let host = process.env.HOSTNAME

app.get("/",(req, resp)=>{
    return resp.json({"msg":"root requests"})
})

app.use("/user", userRouter)


app.listen(port,host,(err)=>{
    if(err) throw err
    console.log(`server is running...http://${host}:${port}/`)
})