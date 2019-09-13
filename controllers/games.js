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

// index/read route
router.get('/', (req, res) => {
  Games.find({}, (error, foundGames) => {
    res.json(foundGames)
  })
})

// delete route
router.delete('/:id', (req, res) => {
  Games.findByIdAndRemove(req.params.id, (error, deletedGame) => {
    res.json(deletedGame)
  })
})

// update route 
router.put('/:id', (req, res) => {
  Games.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedGame) => {
      res.json(updatedGame)
  })
})

// export the games router
module.exports = router
