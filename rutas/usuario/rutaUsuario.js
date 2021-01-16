const rutas = require('express').Router() //
const { check, body, validationResult } = require('express-validator');
const token = require('../../middlewares/token')

const userController = require('../../Controlador/usuarios/usuarioController')

// rutas.post('/', (req, res) => {
   
// userController.Create(req, res)


//   })

  rutas.post('/',token.validationAll, body('correo')
                                .isEmail()
                                .withMessage('no tiene el formato correcto'),
                                
                  check('password')
                                .isLength({ min: 5 })
                                .withMessage('largo mínimo 5 caracteres')
                                .matches(/\d/)
                                .withMessage('debe contener números'),
                                (req, res) => {
                                    
                                    const errors = validationResult(req);
                                    if (!errors.isEmpty()) {
                                      return res.status(400).json({ errors: errors.array() });
                                    }
                                  res.json(req.user)
                                  //  userController.Create(req,res)

                                  })

module.exports = rutas

