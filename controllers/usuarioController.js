const usuariosModel = require("../models/usuarioModels")

module.exports={
    getAll: async function(req, res, next) {
        console.log(req.query)
        try{
            let usuarios = await usuariosModel.find({})
            res.json(usuarios)
        }catch(e){
            next(e)
        }
        
        
    },
    getById: async function(req, res, next) {
        console.log(req.params)
        try{
            let usuario = await usuariosModel.findById(req.params.id)

            res.json(usuario)
        }catch(e){
            next(e)
        }
    },
    create: async function(req,res,next){
        console.log(req.body)
        try{
            let usuario = new usuariosModel({
                dni:req.body.dni,
                nombre:req.body.nombre,
                apellido:req.body.apellido,
                telefono:req.body.telefono,
                email:req.body.email
            })
            let documento = await usuario.save()
            res.json(documento)
        }catch(e){
            next(e)
        }
        
    },
    update:async function(req,res,next){
        try{
            let usuario = await usuariosModel.update({_id:req.params.id},req.body,{multi:false})
            res.json(usuario)
        }catch(e){
            next(e)
        }
    },
    delete:async function(req,res,next){
        try{
            let usuario = await usuariosModel.deleteOne({_id:req.params.id})
            res.json(usuario)
        }catch(e){
            next(e)
        }
        res.send('usuario post');
    }
}