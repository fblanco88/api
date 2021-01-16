const sql = require('../../Config/conexion')


const roles = ['user','publisher','admin']

const  user = function (user){
    this.correo = user.correo
    this.password = user.password
    this.nombres = user.nombres
    this.apellidos = user.apellidos
    this.foto = user.foto
    this.rol = user.rol || 'user'
    this.modificado_en = new Date()
    this.creado_en = new Date()
}

user.Create = function(newuser,result){
sql.connection.query('insert into usuarios set ?',newuser, function(err,res){
    if(err){
        console.error('error : ', err)
    }else{
        result(null, res)
    }

} )




}


user.findOne = function (user,result){
    sql.connection.query('SELECT * FROM USUARIOS WHERE ?', user, function (err, res) {
        if (err) {
            console.log('error', err)
        } else {
            result(null, res[0])
        }
    })

}


user.deleteJson = function (user){
    delete user.password
    delete user.modificado_en
    delete user.creado_en
    delete user.estado
    return user
}



module.exports = user