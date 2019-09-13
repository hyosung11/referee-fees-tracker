// app.js file contains all of the functions that call controllers

// setup
const app = angular.module('RefereeApp', [])

// GameController as the controller for the game-cards
app.controller('GameController', ['$http', function ($http) {
  // declare controller variable to be at the level of the app.controller
  const controller = this

  this.getGames = function () {
    $http({
      method: 'GET',
      url: '/games',
    }).then(function (response) {
        controller.games = response.data // set value on success
        console.log(response)
    }, function () {
        console.log('error')
    })
  }

  this.getGames() // call immediately once controller is instantiated

  // create game function
  this.createGame = function () {
    $http({
      method: 'POST',
      url: '/games',
      data: {
        date: this.date,
        time: this.time,
        location: this.location,
        competition: this.competition,
        home: this.home,
        away: this.away,
        fee: this.fee,
        paymentType: this.paymentType,
        received: this.received,
        note: this.note
      }
    }).then(
      function (response) {
        controller.getGames()
        console.log(response)
      }, function () {
          console.log(error)
      }
    )
  }

}]) // closes app.controller - GameController


// ==== USER FUNCTIONS ==== //

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
