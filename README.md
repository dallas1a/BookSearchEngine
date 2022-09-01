# BookSearchEngine

This is application is to be able to utilize Google Book search api to find books and save books to your profile. A user is given a signup page where those parameters 
become a users login credentials and give them a token using JSONwebtoken that validates their ability to save books to their profile. This project uses react.js, node.js
mongodb to create the database and the server connection and apollo client to communicate with graphql for proper querying and communication throughout the application.
This app is deployed on heroku utilizing the mongodb connection. A user cannot save books without being logged in but can look at saved books and delete them after
credential validation. 

There were issues with sign up and login after converting the file from restful api to graphql. 

The deployed link to the project can be found here https://booksearcheng-app.herokuapp.com/

I have a attached a screenshot of the application. 

![2022-08-31 (16)](https://user-images.githubusercontent.com/100645317/187826451-16971161-7bd7-481d-a433-25ce3402721a.png)
