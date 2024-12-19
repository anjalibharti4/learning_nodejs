import http from "http"

let server = http.createServer((req, resp)=>{
    resp.end("Hello good morning Rahul Gandhi jiiii")
})

server.listen(8000,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log("server is running...")
})