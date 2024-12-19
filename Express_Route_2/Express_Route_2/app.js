import express from "express"

let app = express()

/* API URL:http//127.0.0.1:8000/
Method Type:get
Required Fields:None
Access Type: public */
app.get("/",(req,resp)=>{
    resp.send("root request")
})

app.post("/",(req,resp)=>{
    return resp.json({"message":"create request"})
})

app.put("/",(req,resp)=>{
    resp.send("update request")
})
app.delete("/",(req,resp)=>{
    return resp.json({"message":"delete request"})
})

app.listen(8000,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log(`server is running`)
})