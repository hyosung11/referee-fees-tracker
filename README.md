# Referee Fees Tracker
GA SEIR-Stitch Final Project

1. Introduction
  - The Referee Fees Tracker is a fullstack CRUD application that enables a referee to register an account, authenticate, and then create, read, update and delete game cards. Each game card represents a game that the referee has officiated. The game cards have data fields for all relevant information and most importantly a way for the referee to keep track of fees earned, fees received, and fees owed.

2. User Stories
  - As a referee, I want to keep track of the games I have officiated, so that I know if and when I’ve been paid, the amount I’m owed and by whom, and the total amount I’ve earned.
  - As a referee, I want to create an account with a username and password, so that I can refer back to my games log.
  - As a referee, I want to add games to my log with the date, time, location, home team, away team, type of competition, fee amount, whether I was paid on site, the amount of the fee, type of payment, date when payment received. (CREATE)
  - As a referee, I want to see the list of games that I have officiated by date, time, location, competition, home team, and away team. (READ)
  - As a referee, I want to edit a game log. (UPDATE)
  - As a referee, I want to delete a game if I’ve made a mistake or the game was cancelled or for some other reason. (DELETE)
  - As a referee, I want to be able to search games by date, time, location, home team, and away team.

3. Explanation of Technologies Used
  - This application was built with the MEAN stack which refers to a collection of JavaScript based technologies used in web development. MEAN is an acronym for MongoDB, ExpressJS, AngularJS and Node.js. Additionally, authentication leverages bcrypt to protect and verify passwords. Partials were used for the different views of this single page application. The app is hosted on Heroku.

4. Unsolved Problems
  - I ran out of time to implement a search feature, so I would like to add that in the future.
  - Also, as an upgrade to the user experience, I would like to toggle the colors of the game cards based on whether the referee had been paid for that game from red to green.

5. Notes
  - I've learned a lot over the thirteen weeks of this course. I look at back at my first project and see how far I've come. Simultaneously, I realize how little I know as I've gotten a broad but shallow introduction to software engineering. As the training wheels come off I eagerly anticipate embracing desired difficulties to build cool stuff. 

6. The Referee Fees Tracker link is: http://referee-fees-tracker.herokuapp.com/
