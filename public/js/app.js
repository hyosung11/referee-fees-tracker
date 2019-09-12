// app.js file contains all of the functions that call controllers

// setup
const app = angular.module('RefereeApp', [])

// app.controller is the controller for all functions
app.controller('MainController', function() {
  this.hello = 'Welcome to the Referee Fees Tracker'

  this.games = [
    {
      date: '20190909',
      time: '19:00',
      location: 'Westwood High School',
      competition: 'Big North - BCSOA',
      home: 'Westwood',
      away: 'River Dell',
      fee: 80,
      payment: 'check',
      status: 'pending',
      note: 'worked with Scott Riker'
    },
    {
      date: '20190909',
      time: '19:00',
      location: 'Westwood High School',
      competition: 'Big North - BCSOA',
      home: 'Westwood',
      away: 'River Dell',
      fee: 80,
      payment: 'check',
      status: 'pending',
      note: 'worked with Scott Riker'
    },
    {
      date: '20190909',
      time: '19:00',
      location: 'Westwood High School',
      competition: 'Big North - BCSOA',
      home: 'Westwood',
      away: 'River Dell',
      fee: 80,
      payment: 'check',
      status: 'pending',
      note: 'worked with Scott Riker'
    },
    {
      date: '20190909',
      time: '19:00',
      location: 'Westwood High School',
      competition: 'Big North - BCSOA',
      home: 'Westwood',
      away: 'River Dell',
      fee: 80,
      payment: 'check',
      status: 'pending',
      note: 'worked with Scott Riker'
    },
    {
      date: '20190909',
      time: '19:00',
      location: 'Westwood High School',
      competition: 'Big North - BCSOA',
      home: 'Westwood',
      away: 'River Dell',
      fee: 80,
      payment: 'check',
      status: 'pending',
      note: 'worked with Scott Riker'
    }
  ];
}) // closes app controller
