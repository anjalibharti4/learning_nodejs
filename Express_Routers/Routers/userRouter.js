import express from "express"

let router = express.Router()

router.get("/",(req,resp)=>{
    return resp.json({"msg":"user root request"})
})
router.post("/create",(req,resp)=>{
    return resp.json({"msg":"user post request"})
})
router.put("/update",(req, resp)=>{
    return resp.json({"msg":"user put request"})
})
router.delete("/delete",(req,resp)=>{
    return resp.json({"msg":"user delete request"})
})
export default router;