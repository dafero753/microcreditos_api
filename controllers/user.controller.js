let mongoose = require("mongoose")
let User = require("../models/user.model")
let DB = require("../config/database")


// Get all users

const getAllUsers = async (req, res) => {
    console.log("getAllUsers()", DB.connection)
    //open DB
    DB.connect()


    await User.find()
        .then((Response) => {
            res.status(200).send({
                "Users": Response
            })
        })
        .catch((error) => {
            res.status(500).send({
                "error": error.message
            })
        })

        //Close DB
        DB.disconnect()
}

// crear el middelware
const find = (req, res, next) => {

    //open DB
    DB.connect()

    User.findOne({
            id: req.body.id
        })
        .then((Response) => {
            console.log("user", Response)
            //if null then create

            if (Response !== null) {
                return res.status(500).send({
                    "error": "Usuario ya existe"
                })
            } else {
                next()
            }
        })
        .catch((error) => {
            console.log("error", error.message)
         //Close DB
        DB.disconnect()
        })
   
}

const createUsers = async (req, res) => {
    // Crear nuevo usuario cuando no exista

    //open DB
    DB.connect() 
    
    let newUser = new User(req.body)

    

    await newUser.save()
        .then((Response) => {
            // send response in Json format
            res.status(201).send({
                "Mensaje": "Esta perfectamente creado",
                "status": 201
            })
        })
        .catch((error) => {
            // send response in Json format
            res.status(400).send({
                "Error": error.message,
                "status": 400
            })
        })
    //Close DB
    DB.disconnect()
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
const deleteUsers = async (req, res) => {

    //open DB
    DB.connect()

    await User.findById(req.params._id)
        .then(async (userFound) => {
            //Delete user
            await userFound.remove()
                .then((userDelete) => {
                    //The user has been delete
                    res.status(200).send({
                        "message": "User delete"
                    })
                })
                .catch(() => {
                    res.status(500).send({
                        "error": error.message
                    })
                })
        })
        .catch((error) => {
            res.status(500).send({
                "error": error.message
            })
        })
    
        //Close DB
    DB.disconnect()

    //res.send({"_id": req.params._id})
}


// Update an user
const updateUser = async (req, res) => {
    //Open DB
    DB.connect()

    await User.findById(req.params._id)
    .then(async (userFound)=>{
        // Way 1
        //User.update(userFound, req.body)
        // Way 2
        //userFound.update(req.body)
        //WAY 3
        let userToSave = Object.assign(userFound, req.body)
        await userToSave.save()

        .then(()=>{
            res.send("Udated")
        })
        .catch(()=>{
            res.send("No")
        })
    })
    .catch(()=>{
        res.send("error")
    })
}

module.exports = {
    getAllUsers,
    createUsers,
    deleteUsers,
    updateUsers,
    find
}