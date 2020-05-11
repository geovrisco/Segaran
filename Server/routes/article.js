const ArticleRoute = require('express').Router()
const ArticleController = require('../controllers/article')
const authenticator = require('../middleware/authenticator')
const authorization = require('../middleware/authorization')

ArticleRoute.get('/', ArticleController.findAll)
ArticleRoute.get('/:id', ArticleController.findById)
ArticleRoute.post('/', authenticator, authorization,  ArticleController.create)
ArticleRoute.put('/:id', authenticator, authorization,  ArticleController.update)
ArticleRoute.delete('/:id', authenticator, authorization, ArticleController.deleteById)

module.exports = ArticleRoute