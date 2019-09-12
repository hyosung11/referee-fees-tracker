// app.js file contains all of the functions that call controllers

// setup
const app = angular.module('RefereeApp', [])

// app.controller is the controller for authorization
app.controller('AuthController', ['$http', function($http) {
  const controller = this
  this.createUser = function() {
    $http({
      method: 'POST',
      url: '/users',
      data: {
        username:this.username,
        password:this.password
      }
    }).then (
      function(response) {
        controller.username = null;
        controller.password = null;
        console.log(response);
      },
      function(error) {
        console.log(error);
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

// app.controller('MainController', ['$http', function ($http)
//   const controller = this
//   this.hello = 'Welcome to the Referee Fees Tracker'
//
// }]) // closes app.controller

// app.controller('MainController', function() {
//
//
//
//   this.games = [
//     {
//       date: '20190909',
//       time: '19:00',
//       location: 'Westwood High School',
//       competition: 'Big North - BCSOA',
//       home: 'Westwood',
//       away: 'River Dell',
//       fee: 80,
//       payment: 'check',
//       status: 'pending',
//       note: 'worked with Scott Riker'
//     },
//     {
//       date: '20190909',
//       time: '19:00',
//       location: 'Westwood High School',
//       competition: 'Big North - BCSOA',
//       home: 'Westwood',
//       away: 'River Dell',
//       fee: 80,
//       payment: 'check',
//       status: 'pending',
//       note: 'worked with Scott Riker'
//     },
//     {
//       date: '20190909',
//       time: '19:00',
//       location: 'Westwood High School',
//       competition: 'Big North - BCSOA',
//       home: 'Westwood',
//       away: 'River Dell',
//       fee: 80,
//       payment: 'check',
//       status: 'pending',
//       note: 'worked with Scott Riker'
//     },
//     {
//       date: '20190909',
//       time: '19:00',
//       location: 'Westwood High School',
//       competition: 'Big North - BCSOA',
//       home: 'Westwood',
//       away: 'River Dell',
//       fee: 80,
//       payment: 'check',
//       status: 'pending',
//       note: 'worked with Scott Riker'
//     },
//     {
//       date: '20190909',
//       time: '19:00',
//       location: 'Westwood High School',
//       competition: 'Big North - BCSOA',
//       home: 'Westwood',
//       away: 'River Dell',
//       fee: 80,
//       payment: 'check',
//       status: 'pending',
//       note: 'worked with Scott Riker'
//     }
//   ]
//   const controller = this
// }) // closes app controller
