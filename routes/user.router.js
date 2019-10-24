let express = require("express")
let userController = require("../controllers/user.controller")

let userRouter = express.Router()

userRouter
// Obtener todos los usuarios

    .get('/', userController.getAllUsers)
    .post('/login', userController.login)

// crear un usuario
    .post('/create', userController.find, userController.generateHash, userController.createUsers)
    /*
    .post('/create', (req, res)=>{
        res.send("Los users")
    })*/
// eliminar un usuario
    .delete('/delete/:_id', userController.deleteUsers)
    /*
    .delete('/delete', (req, res)=>{
        res.send("Eliminados")
    })*/
// actualizar un usuario
    .put('/update/_id', userController.updateUsers)
    /*

    .put('/update', (req, res)=>{
        res.send("Update")
    })*/


module.exports = userRouter