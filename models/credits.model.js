let mongoose = require("mongoose")

let Schema = mongoose.Schema

let creditSchema = new Schema({

    user:{
        type: Schema.Types.ObjectId,
        ref: "User",    
    },

    valor:{
        type: Number,
        required: true
    },

    plazo: {
        type: Number,
        required: true
    },

    interes:{
        type:Number,
        default: 0.02,
    },

    cuota_mensual:{
        type:Number,
    },

    Solicitud: {
        type:Boolean,
    },

    aprobado:{
        type: Boolean,
    },

    fecha_solicitud:{
        type:Date,
        default: Date.now
    },

    fecha_aprobación:{
        type:Date,
    }
})

module.exports = mongoose.model('Credit', creditSchema)