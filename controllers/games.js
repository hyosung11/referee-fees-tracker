// games.js controller for games

// dependencies
const express = require('express')
const router = express.Router()
const Games = require('../models/game.js')

// GAME CONTROLLER ROUTES

// create game
router.post('/', (req, res) => {
  Games.create(req.body, (error, createdGame) => {
    res.json(createdGame)
    console.log('created game: ', createdGame)
  })
})

// update game
router.put('/:id', (req, res) => {
  Games.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedGame) => {
      res.json(updatedGame)
      console.log('updated game: ', updatedGame)
  })
})

// export the games router
module.exports = router
