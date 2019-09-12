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

// export the games router
module.exports = router
