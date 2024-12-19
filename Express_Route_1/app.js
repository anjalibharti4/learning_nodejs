import express from "express"

let app = express()

/* API URL:http//127.0.0.1:8000/
Method Type:get
Required Fields:None
Access Type: public */
app.get("/read",(req,resp)=>{
    resp.send("root request")
})

app.post("/create",(req,resp)=>{
    return resp.json({"message":"create request"})
})

app.put("/update",(req,resp)=>{
    resp.send("update request")
})

app.listen(8000,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log(`server is running`)
})