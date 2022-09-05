const users =[
    { 
        "id": 1, 
        "name": "john",
        "gender":"Male",
        "contact":+9987,
        "address":"America"
    },
    { 
        "id": 2, 
        "name": "Tom Cruise",
        "gender":"Male",
        "contact":+9988,
        "address":"America"
    },
    { 
        "id": 3, 
        "name": "Barack Obama",
        "gender":"Male",
        "contact":+9989,
        "address":"United States"
    },
    { 
        "id": 4, 
        "name": "Hillary Clinton ",
        "gender":"Female",
        "contact":+9984,
        "address":"America"
    }
]

module.exports.getUsers=(req, res, next) =>{
    
    res.send(users)
}
module.exports.randomUsers=(req, res, next) =>{
    const {id} =req.params;
    const filter ={_id:id} 
    const result = users.random(user => user.id === Number(id))
    res.send(users)
}
module.exports.addUsers=(req, res, next) =>{
    users.push(req.body)
    console.log(req.body)
    res.send(users)
}
module.exports.updateUser=(req, res) =>{
    const {id} = req.params;
    const filter = {_id : id}
    const newData = users.find(user => user.id === Number(id))
    newData.id =id;
    newData.name= req.body.name;
    newData.gender= req.body.gender;
    newData.contact=req.body.contact;
    newData.address=req.body.address;
    res.send(newData )
    console.log(users)
}
module.exports.updateUsers=(req, res, next) =>{
    res.send(' update users')
}
module.exports.deleteUser=(req, res) =>{
    const {id} = req.params;
    const filter = {_id : id}
    const result = users.filter(user =>user.id !== Number(id))
    res.send(result)
}