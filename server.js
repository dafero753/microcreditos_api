const app = require('./app')
const CONFIG = require("./config/config")

app.listen(CONFIG.PORT, ()=>{
    console.log("server initialized on port: " + CONFIG.PORT)
})
