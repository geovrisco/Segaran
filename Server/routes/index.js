const Router = require('express').Router()
const articleRouter = require('./article')
const userRouter = require('./users')

Router.get('/test', (request,response) => {
    response.json('Server is Running')
})

// Router.use('/articles',articleRouter)
Router.use('/users', userRouter)
Router.use('/articles',articleRouter)



module.exports = Router