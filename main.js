const express = require('express') // 
const app = express()
const port = 3000

bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const sql =require('./Config/conexion')

//vamos a buscar las rutas
var ruta =require('./rutas/rutas')

// se aplican a la aplicacion
app.use('/',ruta) 

//sql.conexion()

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})












