// users.js - controller for users, including games stored in users

// dependencies
const express = require('express')
const router = express.Router()
const User = require('../models/user.js')
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

// push a CREATED game to a user's gameList
router.put('/:id', (req, res) => {
  User.findById(req.params.id, (error, foundUser) => {
    console.log(foundUser)
    console.log(req.body.game)
    foundUser.gameList.push(req.body.game)
    foundUser.save((error, savedUser) => {
      // save the updated foundUser
    })
    console.log(foundUser)
    res.status(201).json({
      status: 201,
      message: 'game stored in user'
    })
  })
})

// READ games from user's gameList
router.get('/:id', (req, res) => {
  User.findById(req.params.id, (error, foundUser) => {
    if (error) {
      console.log(error)
    } else {
      // console.log('read this: ', foundUser.gameList);
      res.json(foundUser.gameList)
    }
  })
})

// UPDATE a game from user's gameList
router.put('/:user/:id', (req, res) => {
  User.findById(req.params.user, (error, foundUser) => {
    if (error) {
      console.log(error)
    } else {
      // Find the index of the job in the user's jobList
      console.log('req.params: ', req.params);
      let idString = req.params.id.toString();
      console.log('idString: ', idString);

      let checkID = []
      for (let i = 0; i < foundUser.gameList.length; i++) {
        checkID[i] = foundUser.gameList[i]._id.toString()
      }
      console.log('checkID: ', checkID);

      function isRightIndex (gameNo) {
        return (gameNo == idString)
      }
      let index = checkID.findIndex(isRightIndex)

      console.log(index);

      if (index !== -1) {
        // remove the original game from the gameList and add the updated game
        foundUser.gameList.splice(index, 1, req.body.game)
        foundUser.save((error, savedUser) => {
          // save the updated foundUser
        })
        console.log('foundUser after replacement splice: ', foundUser);
        res.json(foundUser)
      } else {
        res.status(400).json({
          status: 400,
          message: 'unsuccessful attempt to update selected game'
        })
      }
    }
  })
})

// DELETE a game from user's gameList
router.delete('/:user/:id', (req, res) => {
  User.findById(req.params.user, (error, foundUser) => {
    if (error) {
      console.log(error)
    } else {
      console.log('req.params: ', req.params)
      let idString = req.params.id.toString()
      console.log(idString);

      let checkID = [];
      for (let i = 0; i < foundUser.gameList.length; i++) {
        checkID[i] = foundUser.gameList[i]._id.toString()
      }
      console.log('checkID: ', checkID);

      function isRightIndex (gameNo) {
        return (gameNo == idString)
      }
      let index = checkID.findIndex(isRightIndex)

      console.log(index);

      if (index !== -1) {
        // foundUser.jobList.splice(0, 1)
        foundUser.gameList.splice(index, 1)
        foundUser.save((error, savedUser) => {
          // save the updated foundUser
        })
        console.log('foundUser after delete splice: ', foundUser);
        // res.json(foundUser)
        res.status(201).json({
          status: 201,
          message: 'game deleted from gameList array'
        })
      } else {
        res.status(400).json({
          status: 400,
          message: 'unsuccessful attempt to delete selected game'
        })
      }
    }
  })
})

// export the user's router 
module.exports = router
