# PostIt's Server


![PostIts-min](https://user-images.githubusercontent.com/73439151/99552244-af7d2b00-29b4-11eb-962d-9877b1f5e6ae.gif)

Server Repo

The server that will send and update data recieved from the PostIt's clients side website.

## Installation

* Clone and download this repo.
* Run `npm install`
* Run `npm start` to start the server

## Technologies

* Express and body parser
* CORS
* FileSystem (fs)
* nyc istanbul
* Supertest
* Mocha
* Chai

## Process

We started by looking at the requirements of the website and then creating a design based on them. We created a plan in a shared in google docs on what we wanted to complete and allocated a time frame for each feature.


After the planning and designing process we started to mob program the initial HTML, Javascript and Server side JavaScript. This was done in order to have a basic functioning website before we branch and work on specific features.

We merged and pushed to the git repo everytime a new feature was completed.


## Wins & Challenges
### Wins

* Testing the id for the comment.
* 100% coverage in the nyc.
* Enetering new data into the external json file.
* Entering new comments and emojis on existing posts.

### Challenges

* Rewriting existing data in the external file.


## Features
* Posting and Getting data from external file.
* Saving data to external file.

## Future Features
* Connecting to database.