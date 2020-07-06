const {User} = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const comparePassword = require('../helpers/comparePassword')
require('dotenv').config()

class UserController{

    static Register(request, response, next) {
        User.findOne({where:{email:request.body.email}})
        .then(data => {
            if (data) {
                throw({code:400, message:'email sudah pernah dipakai'})
            }else {
                return User.create({
                    name: request.body.name,
                    fullname: request.body.fullname,
                    dob: request.body.dob,
                    address: request.body.address,
                    phone1: request.body.phone1,
                    phone2: request.body.phone2,
                    gender: request.body.gender,
                    email: request.body.email,
                    password: request.body.password,
                    role: request.body.role
                })
            }
        })
        .then(result => {
            response.json(result)
        })
        .catch(error => {
           next(error)
        })
    }

    static login (request, response, next){
        let userData = null
        User.findOne({where:{email:request.body.email}})
        .then(result => {
            if (!result){
                throw ({code:404, message:'user id tidak ditemukan'})
            } else {
                userData = result
                return comparePassword(request.body.password, userData.password)
            }
        })
        .then(compareResult => {
            console.log(compareResult)
            if (compareResult){
                var token = jwt.sign({id:userData.id, name:userData.name, role:userData.role,},process.env.SECRET)
                response.json({
                    token:token,
                    name:userData.name,
                    role:userData.role,
                    id:userData.id
                })
            } else {
              throw({code:403, message:'user id tidak ditemukan!'})
            }
        })
        .catch(error => {
            next (error)
        })
    }

    static update(request, response, next){
      User.update(
        {
          name:request.body.name,
          fullname: request.body.fullname,
          dob: request.body.dob,
          address: request.body.address,
          phone1: request.body.phone1,
          phone2: request.body.phone2,
          gender: request.body.gender,
        },
        {
          where:{id:request.params.id}
        }
      )
      .then(data=>{
        response.json(data)
      })
      .catch(err =>{
        next(err)
      })
    }

    static allUser(request, response, next){
      User.findAll()
      .then(data=>{
        response.json(data)
      })
      .catch(error =>{
        next(error)
      })
    }

    static findOne (request,response, next){
      User.findOne({where:{id:request.params.id}})
      .then(data => {
        response.json(data)
      })
      .catch(error =>{
        next(error)
      })
    }

    static findByMonth(request, response ,next){
      let result = []
      let currentDate = new Date()
      let currentMonth = currentDate.getMonth()
      User.findAll()
      .then(list => {
        for (let i = 0; i < list.length; i++){
          let date = new Date (list[i].dob)
          let month = date.getMonth()
          console.log('date : ',date,'month : ',month)
          if (month == currentMonth){
            result.push(list[i])
          }
          console.log(currentMonth)
        }
        response.json({
          total:result.length,
          data:result
        })
      })
    }

}

module.exports = UserController