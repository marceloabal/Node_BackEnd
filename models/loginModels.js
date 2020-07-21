const mongoose = require('../bin/mongodb')

const loginSchema = new mongoose.Schema({
    email:{type:String, unique:true, required: true},
    password:{type:String, required: true},
    updated: { type: Date, default: Date.now }
})

module.exports=mongoose.model("login",loginSchema);