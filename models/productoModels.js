const mongoose = require('../bin/mongodb')

const productosSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        uppercase:true,
        required: true
    },
    sku:String,
    description:String,
    price:Number,
    quantity:{ type: Number, min: 1, max: 999999 },
})

module.exports=mongoose.model("products",productosSchema);