function errorHandler(error, request,response,next) {
    console.log(error,'=======================')
   if(error.errors){
       let errorsArray = []
       for (let i = 0; i<error.errors.length; i++){
           errorsArray.push(error.errors[i].message)
       }
       response.status(400).json({message:errorsArray})
   }
   if(error.code){
       response.status(error.code).json({message:error.message})
   }
   if(error.name==='JsonWebTokenError'){
       response.status(403).json({message:'user harus login terlebih dahulu'})
   }    

   if(!error.code && !error.errors){
       console.log(error)
       response.status(500).json({message:'internal server error'})
   }
}

module.exports = errorHandler