const jwt = require('jsonwebtoken');
const secret = 'secret'

const generateToken =(user)=>{

    const token = jwt.sign(user,secret);
    return token;
}

const validateToken = (token)=>{
    try {
        const decode = jwt.verify(token , secret);
        return decode;
    } catch (err) {
        return err;
    }
}

module.exports = {
    generateToken,
    validateToken
}