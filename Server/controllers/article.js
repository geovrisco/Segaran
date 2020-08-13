const {Article} = require('../models')

class ArticleController {
    static create(request, response, next) {
        Article.create({
            title: request.body.title,
            text: request.body.text,
            category: request.body.category,
            picture: request.body.picture,
            media: request.body.media,
            date: request.body.date
        })
        .then(result => {
            response.json(result)
        })
        .catch(error => {
            next(error)
        })
    }

    static findAll(request, response, next){
        Article.findAll({order:[['updatedAt','DESC']]})
        .then(data=>{
            response.json(data)
        })
        .catch(error =>{
            next(error)
        })
    }

    static findById(request, response, next){
        Article.findOne({where:{id:request.params.id}})
        .then(data => {
            if (data){
                response.json(data)
            } else {
                throw ({code:404, message:'data tidak ditemukan'})
            }
        })
        .catch(error => {
            next(error)
        })
    }

    static deleteById(request, response, next){
        let articleData = null
        Article.findOne({where:{id:request.params.id}})
        .then(data => {
            if(data){
                articleData = data
                return Article.destroy({where:{id:request.params.id}})
            }else{
                throw ({code:404, messaage:'data tidak ditemukan'})
            }
        })
        .then(result => {
            response.json({message:`sukses delete article ${articleData.id}`})
        })
        .catch(error => {
            next(error)
        })
    }

    static update (request, response, next){
        Article.findOne({where:{id:request.params.id}})
        .then(data => {
            if (data){
                return Article.update({
                    title: request.body.title,
                    text: request.body.text,
                    category: request.body.category,
                    picture: request.body.picture,
                    media: request.body.media,
                    date: request.body.date
                }, {where:{id:request.params.id}})
            }else {
                throw ({code:404, message:'data tidak ditemukan'})
            }
        })
        .then(data => {
            response.json(data)
        })
        .catch(error => {
            next(error)
        })
    }
}

module.exports = ArticleController