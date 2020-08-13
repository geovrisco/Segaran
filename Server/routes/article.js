const ArticleRoute = require('express').Router()
const ArticleController = require('../controllers/article')
const authenticator = require('../middleware/authenticator')
const authorization = require('../middleware/authorization')

ArticleRoute.get('/', ArticleController.findAll)
ArticleRoute.get('/:id', ArticleController.findById)
ArticleRoute.use(authenticator,authorization)
ArticleRoute.post('/',  ArticleController.create)
ArticleRoute.put('/:id',  ArticleController.update)
ArticleRoute.delete('/:id', ArticleController.deleteById)

module.exports = ArticleRoute