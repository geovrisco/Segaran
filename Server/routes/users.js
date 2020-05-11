const userRouter = require('express').Router()
const UserController = require ('../controllers/user.js')

userRouter.post('/register',UserController.Register)
userRouter.post('/login', UserController.login)



module.exports = userRouter