import fs from 'fs'

let data = fs.readFileSync("users.json",'utf-8')
console.log(data)
let users = JSON.parse(data)//JSON.parse use for convert string to object because we can not iterate string 
for(let user of users){
    console.log(user.first_name)
}

fs.writeFileSync("data.json",data)
console.log("file created")



