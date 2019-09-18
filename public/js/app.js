// app.js file contains all of the functions that call controllers

// setup
const app = angular.module('RefereeApp', [])

// GameController as the controller for the game functions
app.controller('GameController', ['$http', function ($http) {
  // include path enables the use of partials
  this.includePath = 'partials/home.html'
  this.changeInclude = (path) => {
    this.includePath = 'partials/' + path + '.html'
  }
  // declare controller variable to be at the level of the app.controller
  const controller = this
  // this.indexOfEditFormToShow = null

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
        controller.pushGame(response) // push the game into the user's gameList
        console.log(response)
      }, function () {
          console.log(error)
      }
    )
  }

  // push new game to user's gameList
  this.pushGame = function (newGame) {
    $http({
      method: 'PUT',
      url:'/users/' + controller.loggedInID,
      data: {
        game: newGame.data
      }
    }).then(
      function (response) {
        console.log('push new game response: ' + response)
        controller.getUserGames()
      }, function (error) {
          console.log(error)
          controller.getUserGames()
      }
    )
  }

  // get/read games from user's gameList
  this.getUserGames = function() {
    $http({
      method: 'GET',
      url: '/users/' + controller.loggedInID
    }).then(
      function (response) {
        controller.games = response.data // set value on success
        console.log('games to be displayed on the page: ')

        controller.totalEarned = 0
        controller.totalReceived = 0
        controller.totalOwed = 0

        for (let i = 0; i < controller.games.length; i++) {
          controller.totalEarned += controller.games[i].fee
          if (controller.games[i].received) {
          controller.totalReceived += controller.games[i].fee
          }
          console.log(controller.games[i].fee);
          console.log(controller.games[i]._id + '')
        } controller.totalOwed = controller.totalEarned - controller.totalReceived
        console.log(controller.totalOwed)
        console.log(controller.totalEarned)
        console.log(controller.totalReceived)
    }, function (error) {
        console.log(error)
    })
  }

  // update/edit a game
  this.editGame = function (game) {
    $http({
      method: 'PUT',
      url: '/games/' + game._id,
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
          console.log('updated game received from game controller: ', response)
          controller.replaceGame(response) // delete the old version, add the new
          controller.indexOfEditFormToShow = null
    }, function (error) {
      console.log(error)
   })
  }

  // replace the updated game in the gameList
  this.replaceGame = function (updatedGame) {
    console.log('updatedGame to be sent in as a replacement: ' + updatedGame.data._id)
    $http({
      method: 'PUT',
      url: '/users/' + controller.loggedInID + '/' + updatedGame.data._id,
      data: {
        game: updatedGame.data
      }
    }).then(
      function (response) {
        console.log('response received from replacement: ', response)
        controller.getUserGames()
      }, function (error) {
          console.log(error)
          controller.getUserGames()
      }
    )
  }

  // DELETE a game from user's gameList
  this.deleteGame = function (game) {
    $http({
      method: 'DELETE',
      url: '/users/' + controller.loggedInID + '/' + game._id
    }).then(
      function (response) {
        console.log(response)
        controller.getUserGames()
    }, function (error) {
        console.log(error)
        controller.getUserGames()
    })
  }

// ==== USER FUNCTIONS ==== //

// AuthController as the controller for authorization
// app.controller('AuthController', ['$http', function($http) {
//   const controller = this

  // create user
  this.createUser = function() {
    console.log(this.username)
    console.log(this.password)
    $http({
      method: 'POST',
      url: '/users',
      data: {
        username:this.newUsername,
        password:this.newPassword,
        gameList: []
      }
    }).then (
      function(response) {
        controller.newUsername = null
        controller.newPassword = null
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
        controller.goApp() // go from login to the app
      },
      function(error){
        console.log(error)
        alert('login failed')
      }
    )
  }

  // go to the referee fees tracker app //
  this.goApp = function() {
    console.log('getting user info')
    $http({
      method:'GET',
      url:'/app'
    }).then(
      function(response) {
        controller.loggedInUsername = response.data.username
        controller.loggedInID = response.data._id
        controller.getUserGames()
      },
      function(error){
        console.log(error)
      }
    )
  }

  // user logout //
  this.logOut = function() {
    console.log('logout button clicked')
    $http({
      method:'DELETE',
      url:'/sessions'
    }).then(
      function(response){
        console.log(response)
        controller.loggedInUsername = null
        controller.getUserGames()
      },
      function(error) {
        console.log(error)
      }
    )
  }
}])
