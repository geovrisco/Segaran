const bcrypt = require('bcrypt')

function comparePassword(password, hash){
    return bcrypt.compare (password, hash)

}

module.exports = comparePassword