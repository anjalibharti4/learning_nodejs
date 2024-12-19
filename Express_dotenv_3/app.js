import express from "express"
import dotenv from "dotenv"

let app= express()
dotenv.config({'path':'./config/dev.env'})
let port = process.env.port
let host = process.env.LOCALHOST

app.get("/test",(req,resp)=>{
    return resp.json({"message": "test request"})
    
})

app.listen(port,host,(err)=>{
    if(err) throw err
    console.log(`server is running..http://${host}/${port}/`)
})