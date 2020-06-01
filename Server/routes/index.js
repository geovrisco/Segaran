const Router = require('express').Router()
const articleRouter = require('./article')
const userRouter = require('./users')
const {saveToken,handlePushTokens} = require('../helpers/PushNotification')

Router.get('/test', (request,response) => {
    response.json('Server is Running')
})

// Router.use('/articles',articleRouter)
Router.use('/users', userRouter)
Router.use('/articles',articleRouter)
Router.post('/token', (request, response) => {
  saveToken(request.body.token.value)
  console.log('received push token : ', request.body.token.value)
  response.status(200).send(('received push token : ', request.body.token.value))
})

Router.post('/message', (request, response) =>{
  handlePushTokens(request.body);
  console.log('received message with  title :  ',request.body.title)
  response.status(200).send(('received message with  title :  ',request.body.title))
})



module.exports = Router