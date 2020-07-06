const userRouter = require('express').Router()
const UserController = require ('../controllers/user.js')
userRouter.get('/',UserController.allUser)
userRouter.get('/month',UserController.findByMonth)
userRouter.get('/:id',UserController.findOne)
userRouter.post('/register',UserController.Register)
userRouter.post('/login', UserController.login)
userRouter.put('/:id',UserController.update)



module.exports = userRouter