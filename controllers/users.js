// users.js - controller for users, including games stored in users

// dependencies
const express = require('express')
const router = express.Router()
const User = require('..models/user.js')
const bcrypt = require('bcrypt')

// user controller routes

// create user
router.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password,
    bcrypt.genSaltSync(10))
    User.create(req.body, (error, createdUser) => {
      res.status(201).json({
        status: 201,
        message: 'user created'
      })
    })
  })

module.exports = router

// push a CREATED game to a user's gameList
