import http from "http"
import fs from "fs"
import path from 'path'
let server = http.createServer((req, resp) => {
    let url = req.url
    if (req.url === '/' || req.url === '/index') {
        fs.readFile(path.join(process.cwd(),'view','index.html'), 'utf-8', (err, data) => {
            if (err) throw err
            resp.end(data)
        })
    }
    
})

server.listen(8000, '127.0.0.1', (err) => {
    if (err) throw err
    console.log(`server is running...${8000}`)
})