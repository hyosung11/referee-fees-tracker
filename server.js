// server.js is the entry point that sets everything up

// dependencies
const express = require('express')
const app = express()

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

// connect to the database
mongoose.connect('mongodb://localhost:27017/referee', {useNewUrlParser: true})

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
