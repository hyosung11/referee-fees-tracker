// session.js - controller for sessions

// dependencies
const express = require('express')
const router = express.Router()
const User = require('../models/user.js')
const bcrypt = require('bcrypt')

// sessions controller routes 
