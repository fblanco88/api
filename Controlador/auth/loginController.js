const modelUser = require('../../modelos/usuarios/usuario')
const bcrypt = require('../../interceptors/bcrypt')
const jwt = require('../../interceptors/jwt').jwt



exports.login =  function (req,res){

modelUser.findOne({correo:req.body.correo},'correo,id,password',function(error,result){
    if (error) res.send(error);

    if (!result) res.status(400).send({ error:true, message: 'Correo  incorrecto' })
    if (bcrypt.compare(result.password, req.body.password) ){
       // res.json(result)
        res.json(jwt(modelUser.deleteJson(result)))

    }else{

        res.status(400).send({ error:true, message: 'Contraseña invalida' })
    }

   
}


)


}