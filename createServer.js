//all the server data and logic
//don't forget to export
const e = require('express');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const fs = require('fs');
const rawData = fs.readFileSync('postData.json');
const data = JSON.parse(rawData);


let server = express();
server.use(cors());
server.use(bodyParser.json());

server.get('/', (req, res)=>{
    res.status(200).send('Hello user, check all posts with /posts')
})

server.get('/posts', (req, res)=>{
    res.status(200).send(data);
})

// function postNote(name, post, gif, emoji){
//     let newNote = {
//         name: name,
//         post: post,
//         git: gif,
//         emoji: emoji,
//         comment: []
//     };
//     const key = (Object.keys(data)).length;
//     data[key] = newNote;
//     let newData = JSON.stringify(data, null, 2);
//     fs.writeFileSync('posts.json', newData);
// }

// postNote("amy", "brooklyn nine nine", "", "");
// postNote("jake", "nine-nine!", "", "");



module.exports = server;