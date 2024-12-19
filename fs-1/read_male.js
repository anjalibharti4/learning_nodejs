import fs from 'fs'

fs.readFile("users.json","utf-8",(err,data)=>{

    if(err) throw err
    let employees = JSON.parse(data)
    console.log(typeof employees)
    let emps = []
    for(let emp of employees){
        if(emp.gender == "Male")
            emps.push(emp)
    }
    fs.writeFile('male.json', JSON.stringify(emps),(err)=>{
        if(err) throw err
        console.log('File created successfully')
    })

})
