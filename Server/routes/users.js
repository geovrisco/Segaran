const userRouter = require('express').Router()
const UserController = require ('../controllers/user.js')
const admAuthorize = require('../middleware/authorization')
const authenticator = require('../middleware/authenticator')
const userAuthoriz= require('../middleware/userAuthorize')

userRouter.post('/register',UserController.Register)
userRouter.post('/login', UserController.login)

userRouter.use(authenticator)
userRouter.put('/:id', userAuthoriz ,UserController.update)

userRouter.use(admAuthorize)
userRouter.get('/',UserController.allUser)



module.exports = userRouter