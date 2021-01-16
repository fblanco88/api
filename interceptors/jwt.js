var jwt = require('jsonwebtoken');
var privateKey = 'appspecial'


exports.jwt = function(dataUser){

    return { type: 'Bearer',
                token: jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                data: dataUser
            }, privateKey)
}
    
}