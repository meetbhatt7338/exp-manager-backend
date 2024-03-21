const bcrypt  = require('bcryptjs')


const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}//end of hashPassword


const comparePassword = async (password, hashedPassword) => {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
}//end of comparePassword
  
  module.exports = {
      hashPassword,
      comparePassword
  }