var jwt = require('jsonwebtoken');
var privateKey = 'appspecial'


//token usuario
exports.validationUser = function (req,res,next){
if (!req.headers.authorization) return res.status(403).json({ error:true, message: 'Sin credenciales' })
var token = req.headers.authorization.split(' ')
if (!token[1]) return res.status(403).json({ error:true, message: 'token mal formed' })

return jwt.verify(token[1], privateKey, function(err, decoded) {
    if (err) {
        return res.json(err)
      /*
        err = {
          name: 'JsonWebTokenError',
          message: 'jwt malformed'
        }
      */
    }
    
    if (decoded.data.rol === 'user'){
      req.user = decoded.data
      next()
    }
    return res.status(403).json({ error:true, message: 'rol no correspondiente, comuniquese al 22300' })
   
  });

}

//token admin
exports.validationAdmin = function (req,res,next){
  if (!req.headers.authorization) return res.status(403).json({ error:true, message: 'Sin credenciales' })
  var token = req.headers.authorization.split(' ')
  if (!token[1]) return res.status(403).json({ error:true, message: 'token mal formed' })
  
  return jwt.verify(token[1], privateKey, function(err, decoded) {
      if (err) {
          return res.json(err)
        /*
          err = {
            name: 'JsonWebTokenError',
            message: 'jwt malformed'
          }
        */
      }
      
      if (decoded.data.rol === 'admin'){
        req.user = decoded.data
        next()
      }
      return res.status(403).json({ error:true, message: 'rol no correspondiente, comuniquese al 22300' })
     
    });
  
  }


  //token moderador
  exports.validationMod = function (req,res,next){
    if (!req.headers.authorization) return res.status(403).json({ error:true, message: 'Sin credenciales' })
    var token = req.headers.authorization.split(' ')
    if (!token[1]) return res.status(403).json({ error:true, message: 'token mal formed' })
    
    return jwt.verify(token[1], privateKey, function(err, decoded) {
        if (err) {
            return res.json(err)
          /*
            err = {
              name: 'JsonWebTokenError',
              message: 'jwt malformed'
            }
          */
        }
        
        if (decoded.data.rol === 'moderador'){
          req.user = decoded.data
          next()
        }
        return res.status(403).json({ error:true, message: 'rol no correspondiente, comuniquese al 22300' })
       
      });
    
    }


    //token para todo
    exports.validationAll = function (req,res,next){
      if (!req.headers.authorization) return res.status(403).json({ error:true, message: 'Sin credenciales' })
      var token = req.headers.authorization.split(' ')
      if (!token[1]) return res.status(403).json({ error:true, message: 'token mal formed' })
      
      return jwt.verify(token[1], privateKey, function(err, decoded) {
          if (err) {
              return res.json(err)
            /*
              err = {
                name: 'JsonWebTokenError',
                message: 'jwt malformed'
              }
            */
          }
          
        
            req.user = decoded.data
            next()
         
         
        });
      
      }
