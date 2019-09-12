// app.js file contains all of the functions that call controllers

// setup
const app = angular.module('RefereeApp', [])

// app.controller is the controller for all functions
app.controller('MainController', function() {
  this.hello = 'started this app'
})
