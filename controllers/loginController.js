module.exports={
    login:function(req,res,next){
        console.log(req.body)
        res.send('Usuario Loggeado');
    },
    update:function(req,res,next){
        console.log(req.params)
        console.log(req.body)
        res.send('Password Actualizado');
    }
}