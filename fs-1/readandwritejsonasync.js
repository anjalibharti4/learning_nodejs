import fs from 'fs'

/* fs.readFile('users.json','utf-8',(err,data)=>{
    if(err) throw err
    let users = JSON.parse(data)
    for(let user of users){
        console.log(user.first_name)
    }
}) */

    fs.readFile('users.json','utf-8',(err,data)=>{
        if(err) throw err  

        fs.writeFile('emp.json',data,(err)=>{
            if(err) throw err
            console.log("Employee file created")
        })
    })