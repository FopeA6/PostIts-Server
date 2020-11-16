//import from createServer
//this will start the server
const server = require('./createServer');

const port = 3000;

server.listen(port, ()=> console.log(`The server for PostIt's is now online on localhost ${port}`));