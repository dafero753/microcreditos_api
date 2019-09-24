let express = require('express')
let userRouter = require("./routes/user.router")
let bodyParser = require("body-parser")


let app = express()

// Puede recibir la informacion en formato JSON
app.use(bodyParser.json())

// Configuramos la primer ruta
app.get("/", (req, res)=>{
    res.send("respuesta desde /")
})

// Confg de la ruta para la gestion de usuarios
app.use("/api/users", userRouter)


module.exports = app
