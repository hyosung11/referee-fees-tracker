// app.js file contains all of the functions that call controllers

// setup
const app = angular.module('RefereeApp', [])

// app.controller is the controller for authorization
app.controller('AuthController', ['$http', function($http) {
  const controller = this
  this.createUser = () => {
    $http({
      method: 'POST',
      url: '/users',
      data: {
        username: this.username,
        password: this.password
      }
    }).then (response) => {
      console.log(response)
    }, () => {
      console.log('error')
    }
  }

  this.logIn = () => {
    $http({
      method: 'POST',
      url: '/sessions'
      data: {
        username: this.username,
        password: this.password
      }
    }).then (response) => {
        console.log(response)
    }, () => {
        console.log('error')
    }
  }

  this.goApp = () => {
    $http({
      method: 'GET',
      url: '/app'
    }).then (response) => {
        controller.loggedInUsername = response.data.username
    }, () => {
        console.log('error')
    }
  }

  this.logOut = () => {
    $http({
      method: 'DELETE',
      url '/sessions'
    }).then (response) => {
        console.log(response)
    }, (error) => {
        console.log();
    }
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
