// session.js - controller for sessions

// dependencies
const express = require('express')
const router = express.Router()
const User = require('../models/user.js')
const bcrypt = require('bcrypt')

// sessions controller routes

// create session
router.post('/', (req, res) => {
  User.findOne({username:req.body.username}, (error, foundUser) => {
    if (foundUser) {
      if(bcrypt.compareSync(req.body.password, foundUser.password)) {
        req.session.currentUser = foundUser
        res.status(201).json({
          status: 201,
          message: 'session created'
        }) else {
          console.log('hit the else statement => login failed')
          res.status(401).json({
            status: 401,
            message: 'login failed'
          })
        }
      }
    }
  })
})
