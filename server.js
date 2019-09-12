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
  saveUniniatialzed: false
}))

// connect to the database
mongoose.connect('mongodb://localhost:27017/referee', {useNewUrlParser: true})

// announce that the connection has been opened
mongoose.connection.once('open', () => {
  console.log('connected to mongo ...')
})

// listener
app.listen(PORT, () => {
  console.log('Breathing easily ...' , PORT)
})
