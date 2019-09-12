// server.js is the entry point that sets everything up

// dependencies
const express = require('express')
const app = express()

require('dotenv').config()
const mongoose = require('mongoose')
const session = require('express-session')
const db = mongoose.connection
const PORT = process.env.PORT || 3000

// middleware
app.use(express.static('public'))
app.use(express.json()) // middleware that parses JSON
app.use(session({
  secret: 'lightenup',
  resave: false,
  saveUninitialized: false
}))

// Database
const FINAL_PROJECT_DB = process.env.FINAL_PROJECT_DB

// Fix Deprecation Warnings from Mongoose
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

// connect to the database
console.log(FINAL_PROJECT_DB)
mongoose.connect(FINAL_PROJECT_DB, {useNewUrlParser: true, useUnifiedTopology: true})

// announce that the connection has been opened
mongoose.connection.once('open', () => {
  console.log('connected to mongo ...')
})

// user session route
app.get('/app', (req, res) => {
  if(req.session.currentUser) {
    res.json(req.session.currentUser)
  } else {
    res.status(401).json({ // status 401 when user needs to login
      status: 401,
      message: 'not logged in'
    })
  }
})

// controllers
const gamesController = require('./controllers/games.js')
app.use('/games', gamesController)

const userController = require('./controllers/users.js')
app.use('/users', userController);

const sessionsController = require('./controllers/sessions.js')
app.use('/sessions', sessionsController)

// listener
app.listen(PORT, () => {
  console.log('Breathing easily ...' , PORT)
})
