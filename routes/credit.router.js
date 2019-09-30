let express = require("express")
let creditController = require("../controllers/credits.controller")

let creditRouter = express.Router()

creditRouter

// Obtener todos los creditos

.get('/', creditController.getAllCredits)

// crear un usuario
.post('/create', creditController.find, creditController.createCredits)

// eliminar un usuario
.delete('/delete/:_id', creditController.deleteCredits)

// actualizar un usuario
.put('/update/_id', creditController.updateCredits)

module.exports = creditRouter