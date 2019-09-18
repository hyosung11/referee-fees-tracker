const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
    date: String,
    time: String,
    location: String,
    competition: String,
    home: String,
    away: String,
    fee: {type: Number, default: 0},
    paymentType: String,
    received: Boolean,
    note: String
})

const Games = mongoose.model('Game', gameSchema)

module.exports = Games
