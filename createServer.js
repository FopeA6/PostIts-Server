//all the server data and logic
//don't forget to export
const e = require('express');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


let server = express();
server.use(cors());
server.use(bodyParser.json());





module.exports = server;