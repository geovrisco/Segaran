function authorization (request, response ,next){
    if (request.authenticateData.role==='admin'){
        next()
    } else {
        let error = {
            code:403,
            message: 'user tidak memiliki akses'
        }
        next(error)
    }
}

module.exports=authorization