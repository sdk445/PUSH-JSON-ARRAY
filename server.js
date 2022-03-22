const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config() //env 
const app = express()
app.use(bodyParser.json({ type: 'application/*+json' }))
// mongo connection
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Db connection working'))


// initialize parent router
const parentRouter = require('./routes/parentRoutes')
app.use('/parents', parentRouter)


//server listening settings
app.listen(process.env.PORT || 3000, () => console.log('Server running on', process.env.PORT))
