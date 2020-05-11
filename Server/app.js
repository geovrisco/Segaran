const express = require('express')
const  app = express()
const cors = require('cors')
require ('dotenv').config()
const PORT = process.env.PORT || 3000
const Router = require('./routes/index')
const errorHandler = require('./helpers/ErrorHandler')

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/', Router)
app.use(errorHandler)
app.listen(PORT, () => {
    console.log('apps running on PORT : ', PORT)
})
