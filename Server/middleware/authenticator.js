
const jwt = require('jsonwebtoken')
require('dotenv').config()
function authenticator (request, response, next){
  console.log(request.headers.token)
    const token = request.headers.token
    try {
        let decoded = jwt.verify(token, process.env.SECRET)
        console.log(decoded)
        request.authenticateData = decoded
        next()
    } catch (error) {
      // console.log(error)
        next(error)
    }

}

module.exports = authenticator