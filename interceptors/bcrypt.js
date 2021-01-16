const bcrypt = require('bcrypt');
const saltRounds = 10;

// function encrypt(password){
// const salt = bcrypt.genSaltSync(saltRounds);
// return bcrypt.hashSync(myPlaintextPassword, salt);
// }
// exports.encrypt = encrypt(password)




exports.encrypt = function(password) {
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt);

}


 exports.compare =  function(userpassword, password ){

    if (bcrypt.compareSync(password,userpassword)){
        return true
    } else {
        return false
    }

}