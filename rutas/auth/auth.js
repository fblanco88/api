const rutas = require('express').Router() 
const loginController = require('../../Controlador/auth/loginController')
const { check, body, validationResult } = require('express-validator');

// rutas.post('/login', (req, res) => {
//     res.send('listo para logear')
//   })

  rutas.post('/login', body('correo')
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

                        loginController.login(req,res)

    })



module.exports = rutas