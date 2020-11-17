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

server.post('/posts/:id', (req, res)=>{
    const reqBody = req.body;
    const postId = req.params.id;

    const commentData = {
        name: reqBody.name,
        comment: reqBody.comment
    }

    const commentArray = data[postId].comments
    commentArray[commentArray.length] = commentData;

    const newData = JSON.stringify(data, null, 2);
    fs.writeFileSync('postData.json', newData);

    res.status(201).send(data);
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