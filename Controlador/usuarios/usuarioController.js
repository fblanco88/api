const modelUser = require('../../modelos/usuarios/usuario')
const bcrypt = require('../../interceptors/bcrypt')


exports.Create = function (req,res){

    req.body.password = bcrypt.encrypt(req.body.password)


    
    const modelousuario = new modelUser(req.body)
    modelUser.Create(modelousuario,function(err,usu){
        if (err) res.send(err);
            res.json(usu.insertId)

    })
    //res.json(req.body)

}