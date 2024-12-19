import fs from 'fs'
import path from 'path'
import http from 'http'

let server = http.createServer((req, resp)=>{
    let url = req.url
    console.log(url)
    if(req.url ==='/' || req.url === '/index'){
        fs.readFile(path.join(process.cwd(),'view','index.html'), 'utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data)
        })
    }
    if(req.url === "/about"){
        fs.readFile(path.join(process.cwd(),'view','about.html'), 'utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data)
        })

    }

    if(req.url === "/contact"){
        fs.readFile(path.join(process.cwd(),'view','contact.html'), 'utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data)
        })

    }

})

server.listen(8000, '127.0.0.1',(err)=>{
    if(err) throw err
    console.log(`server is running..http//:127.0.0.1/8000`)
})