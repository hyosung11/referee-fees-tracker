// games.js controller for games

// dependencies
const express = require('express')
const router = express.Router()
const Games = require('../models/game.js')

// game controller routes

// create game
router.post('/', (req, res) => {
  Games.create(req.body, (error, createdGame) => {
    res.json(createdGame)
    console.log('created game: ', createdGame)
  })
})

// index route
router.get('/', (req, res) => {
  Games.find({}, (error, foundGames) => {
    res.json(foundGames)
  })
})

// export the games router
module.exports = router
