

var rutas = require('express').Router() //


rutas.get('/', (req, res) => {
  res.send('Estás conectado a nuestra API')
})

// router.get('/', function (req, res) {
//     res.status(200).json({ message: 'Estás conectado a nuestra API' })
//   })


const usuarios = require('./usuario/rutaUsuario')
rutas.use('/usuario',usuarios)



const auth = require('./auth/auth')
rutas.use('/auth',auth)





module.exports = rutas