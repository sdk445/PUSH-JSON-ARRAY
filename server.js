const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config() //env 
const app = express()
// various parsing methods
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// mongoDB connection
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Db connection working'))


// initialize parent router
const parentRouter = require('./routes/parentRoutes')
app.use('/parents', parentRouter)

//landing page instructions
app.get('/', (req, res) => { 
    res.send('Welcome to the Parent-Child Relationship API. Please use the following endpoints to interact with the database: \n/parents \n/parents/:id *i have also implimented delete and update routes* , GITHUB LINK -"https://github.com/sdk445/PUSH-JSON-ARRAY.git" // master branch')
  
})


//server config settings
app.listen(process.env.PORT || 3000, () => console.log('Server running on', process.env.PORT))
