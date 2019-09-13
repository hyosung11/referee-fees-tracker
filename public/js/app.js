// app.js file contains all of the functions that call controllers

// setup
const app = angular.module('RefereeApp', [])

// GameController as the controller for the game-cards
app.controller('GameController', ['$http', function ($http) {
  // declare controller variable to be at the level of the app.controller
  const controller = this
  this.hello = 'Welcome to the Referee Fees Tracker'
}]) // closes app.controller - GameController



// AuthController as the controller for authorization
app.controller('AuthController', ['$http', function($http) {
  const controller = this

  // create user
  this.createUser = function() {
    console.log(this.username)
    console.log(this.password)
    $http({
      method: 'POST',
      url: '/users',
      data: {
        username:this.username,
        password:this.password
      }
    }).then (
      function(response) {
        controller.username = null
        controller.password = null
        console.log(response)
        alert('user created, please click login button')
      },
      function(error) {
        console.log(error)
      }
    )
  }

  this.logIn = function() {
    $http({
      method:'POST',
      url:'/sessions',
      data: {
        username:this.username,
        password:this.password
      }
    }).then(
      function(response){
        console.log(response)
        controller.username = null
        controller.password = null
        controller.goApp()
      },
      function(error){
        console.log(error);
      }
    )
  }

  this.logOut = function() {
    console.log('logout button clicked')
    $http({
      method:'DELETE',
      url:'/sessions'
    }).then(
      function(response){
        console.log(response)
        controller.loggedInUsername = null
      },
      function(error){
        console.log(error)
      }
    )
  }

  this.goApp = function() {
    console.log('getting user info')
    $http({
      method:'GET',
      url:'/app'
    }).then(
      function(response) {
        controller.loggedInUsername = response.data.username;
      },
      function(error){
        console.log(error);
      }
    )
  }
}])
