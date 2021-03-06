const mongoose = require('mongoose')
const Schema = mongoose.Schema
const GameSchema = mongoose.model('Game').schema

const userSchema = Schema({
  username: String,
  password: String,
  // embed games in user
  gameList: [GameSchema]
})

const User = mongoose.model('User', userSchema)

module.exports = User
