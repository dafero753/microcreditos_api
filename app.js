let express = require('express')
let userRouter = require("./routes/user.router")
let bodyParser = require("body-parser")
let creditRouter = require("./routes/credit.router")
const cookieParser = require("cookie-parser")
const cors = require('cors')


let app = express()
// Use cors
app.use(cors())

// Puede recibir la informacion en formato JSON
app.use(bodyParser.json())
// Active use cookies
app.use(cookieParser())

// Configuramos la primer ruta
app.get("/", (req, res)=>{
    res.send("respuesta desde /")
})

// Confg de la ruta para la gestion de usuarios
app.use("/api/users", userRouter)

// Confg. de la ruta para la gestion de creditos
app.use("/api/credits", creditRouter)

module.exports = app
