const Router = require('express').Router()
const articleRouter = require('./article')
const userRouter = require('./users')
const {handlePushTokens,saveToken} = require('../helpers/pushNotifications')

Router.get('/test', (request,response) => {
    response.json('Server is Running')
})


Router.use('/users', userRouter)
Router.use('/articles',articleRouter)

Router.post('/token',(request, response) =>{
  saveToken(request.body.token.value);
  console.log('received token',request.body.token.value)
  response.send('received push token',request.body.token.value)
})

Router.post('/message',(request,response) =>{
  handlePushTokens(request.body)
  console.log('received message',request.body.title)
  response.send('received push token',request.body.title)
})



module.exports = Router