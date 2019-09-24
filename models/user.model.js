let mongoose = require("mongoose")

let schema = mongoose.Schema

let userSchema = new schema({
    id: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    creado: {
        type: Date,
        default: Date.now,
    },
    cedula: Number
})

module.exports = mongoose.model('User', userSchema)