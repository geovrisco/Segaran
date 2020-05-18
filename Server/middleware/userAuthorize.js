function userAuthorization(request, response, next){
  console.log(request.params.id, request.authenticateData.id)
  if(request.params.id==request.authenticateData.id){
    next()
  } else {
    let error = {
      code:403,
      message: 'user tidak memiliki akses'
    }
    next(error)
  }
}

module.exports = userAuthorization