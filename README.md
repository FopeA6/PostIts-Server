# PostIt's - Server Repository

[![License: MIT](https://img.shields.io/badge/Licence-MIT-green.svg)](https://opensource.org/licenses/MIT)

![PostIts-min](https://user-images.githubusercontent.com/73439151/99552244-af7d2b00-29b4-11eb-962d-9877b1f5e6ae.gif)

The server that will send and update data recieved from the PostIt's clients side website.

## Installation

* Clone and download this repo.

## Usage
* Open the terminal
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

The project started with the analysis of the website requirements based on which a rough design was sketched using Figma. We then created a plan in a shared Google Docs file where we outlined what features we wanted to include, allocated a time frame for each one and logged our progress and remaining tasks.


After the planning and designing step, we worked on the initial HTML, Javascript and Server-side JavaScript by mob programming. This step ensured we had a basic functioning website before we split tasks and worked on specific features individually.

Everytime a new functioning feature was completed, its branch was merged to the Development branch and pushed to the main git repository. At the end all final changes were merged with the master branch.

## Code Snippets

Server post method

```javascript
server.post('/posts', (req, res)=>{
    const reqBody = req.body;
    const newPostKey = Object.keys(data).length;
    const newPost = {
        name: reqBody.name,
        post: reqBody.post,
        gif: reqBody.gif,
        emoji: reqBody.emoji,
        comments: []
    }
    data[newPostKey] = newPost;
    const newData = JSON.stringify(data, null, 2);
    fs.writeFileSync('postData.json', newData);

    res.status(201).send(data);
})
```


## Wins & Challenges
### Wins

* Testing the ID of comments.
* Achieving 100% coverage in the nyc.
* Storing new data into the external json file.
* Entering new comments and emojis on existing posts.

### Challenges

* Rewriting existing data in the external file.


## Features
* Posting and Getting data from an external file.
* Saving data to an external file.

## Future Features
* Ability to connect to a database.

## Licence

* [MIT Licence](https://opensource.org/licenses/mit-license.php)

To visit the site click this [link](https://postits.netlify.app/).
Here is the url for our API `https://postits-site.herokuapp.com/posts`.
