let express = require("express")
let userController = require("../controllers/user.controller")

let userRouter = express.Router()

userRouter
// Obtener todos los usuarios

    .get('/', userController.getAllUsers)

// crear un usuario
    .post('/create', userController.createUsers)
    /*
    .post('/create', (req, res)=>{
        res.send("Los users")
    })*/
// eliminar un usuario
    .delete('/delete', userController.deleteUsers)
    /*
    .delete('/delete', (req, res)=>{
        res.send("Eliminados")
    })*/
// actualizar un usuario
    .put('/update', userController.updateUsers)
    /*

    .put('/update', (req, res)=>{
        res.send("Update")
    })*/

module.exports = userRouter