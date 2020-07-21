const mongoose = require('../bin/mongodb')

const usuarioSchema = new mongoose.Schema({
    dni:{
        type: Number,
        unique:true,
        required: true
    },
    nombre:{type:String, required: true},
    apellido:{type:String, required: true},
    telefono:String,
    email:{type:String, required: true},
    updated: { type: Date, default: Date.now },
})

module.exports=mongoose.model("users",usuarioSchema);