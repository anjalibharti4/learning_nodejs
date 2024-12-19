import express from 'express'
import path from 'path'
 let app = express();
 // API url: http://lh:8000/
 app.get('/',(req, resp)=>{
        resp.send('root request')
        
 })
 //API url: http://lh:8000/index
 app.get("/index",(req, resp)=>{
    resp.sendFile(path.join(process.cwd(),"index.html"))
 })

 app.get('/user',(req, resp)=>{
    resp.send('user request')
    
 })

 app.listen(8000,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log(`server is running...http://127.0.0.1:8000`)
 })