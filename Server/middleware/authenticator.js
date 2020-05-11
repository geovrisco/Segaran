
const jwt = require('jsonwebtoken')
require('dotenv').config()
function authenticator (request, response, next){

    const token = request.headers.token
    try {
        let decoded = jwt.verify(token, process.env.SECRET)
        request.authenticateData = decoded
        next()
    } catch (error) {
        next(error)
    }

}

module.exports = authenticator