let mongoose = require("mongoose")
let User = require("../models/user.model")

let connectionString = "mongodb://app:1234@localhost:27017/microcreditos_db"
mongoose.connect(connectionString)

// Get all users

const getAllUsers = (req, res)=>{
    // Call to bd

    res.send("Get all users")
}

const createUsers = (req, res)=>{
    // Call to bd
    //console.log('create', req.body)

    //Buscar si la cedula del usuario ya existe
    User.findOne({id: req.body.id})
    .then((Response)=>{
        console.log("user", Response)
    })
    .catch((error)=>{
        console.log("error", error)

        newUser.save()
        .then((Response)=>{
            console.log("response", Response)
            // send response in Json format
            res.status(201).send({"Mensaje": "Esta perfectamente creado", "status": 201})
        })
        .catch((error)=>{
            console.log("Error:", error.message)
            // send response in Json format
            res.status(400).send({"Error": error.message, "status": 400})
        })
    
    })
    
}


    /*
    let newUser = new User(req.body)

    newUser.save()
    .then((Response)=>{
        console.log("response", Response)
        // send response in Json format
        res.status(201).send({"Mensaje": "Esta perfectamente creado", "status": 201})
    })
    .catch((error)=>{
        console.log("Error:", error.message)
        // send response in Json format
        res.status(400).send({"Error": error.message, "status": 400})
    })

    
}
*/
const deleteUsers = (req, res)=>{
    // Call to bd

    res.send("Delete all users")
}

const updateUsers = (req, res)=>{
    // Call to bd

    res.send("Update all users")
}

module.exports = {
    getAllUsers,
    createUsers,
    deleteUsers,
    updateUsers
}