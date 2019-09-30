let mongoose = require("mongoose")
const { DB_CONNECTION } = require("../config/config")

module.exports = {
    // Variable que indica estado actual
    connection: false,

    // Function to do connect
    connect: ()=>{
        // if connection is active, return to connection
        if(this.connection) return this.connection

        // Connect to bd
        mongoose.connect(DB_CONNECTION)
        .then((connection)=>{
            console.log("CONNECTION", connection)
        })
        .catch((error)=>{
            console.log("error:", error)
        })
    },
    disconnect: ()=>{
        mongoose.connection.close()
    }
}