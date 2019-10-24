const mongoose = require("mongoose")
const User = require("../models/user.model")
const DB = require("../config/database")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


// Get all users

const getAllUsers = async (req, res) => {
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
const generateHash = async (req, res, next) => {
    let my_hash = ""

    console.log("GENERATE HASH", req.body.clave)

    await bcrypt.hash(req.body.clave, 10).then((hash)=>{
       
        req.body.clave = hash

        next()
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
const updateUsers = async (req, res) => {
    //Open DB
    DB.connect()

    await User.findById(req.params._id)
        .then(async (userFound) => {
            // Way 1
            //User.update(userFound, req.body)
            // Way 2
            //userFound.update(req.body)
            //WAY 3
            let userToSave = Object.assign(userFound, req.body)
            await userToSave.save()

                .then(() => {
                    res.send("Udated")
                })
                .catch(() => {
                    res.send("No")
                })
        })
        .catch(() => {
            res.send("error")
        })
}
/*
const login = async (res, req) => {
    DB.connect()
    // Validar usuario
    await User.findOne({"email": req.body.email})
    .then( async (Response)=>{
        console.log("Hash en DB", Response.clave)
        console.log("Clave de usuario", req.body.clave, req.body.clave.trim())
        // compracion
        await bcrypt.compare(req.body.clave.trim(), Response.clave)
        .then((status)=>{
            console.log("status", status)
            // is status is true, generate token


        })
    })
    .catch((error)=>{
        console.log("Incorret user", error)
    })

    jwt.sign("id", "123456"), "texto", (err, token) => {
        console.log("TOKEN", token)
    }
    DB.disconnect()
}
*/

const generateToken = (value)=>{
    
}
// Login
const login = async (req, res) => {

    DB.connect()

    // Validate user
    await User.findOne({"email": req.body.email})
    .then( async (response)=>{
        console.log("HASH en BD", response.clave)
        console.log("Clave usuario", req.body.clave,  req.body.clave.trim())
        
        // Compare clave with hash
        await bcrypt.compare(req.body.clave.trim(), response.clave)
        .then((status)=>{
            console.log("STATUS ", status)
            // if status is true, generate token
            if (status){
                jwt.sign({"email":req.doby.email}, Response.clave, (error, token) =>{
                   // res.send({"token": token})
                   //send a cookie
                   res.cookie("token", token)
                   res.send("ok")
                })
            }
            
        })
        .catch((error)=>{
            console.log("Incorrect user", error)
        })
    })
    .catch((error)=>{
        console.log("Error", error)
    })

    DB.disconnect()
}


module.exports = {
    getAllUsers,
    createUsers,
    deleteUsers,
    updateUsers,
    generateHash,
    login,
    find
}