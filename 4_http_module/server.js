const http = require("http");
const path = require("path");
const port = 3000;
const hostName = "127.0.0.1"


const myServer = http.createServer((req,res) => {

    res.end("Its my First Server");

});

myServer.listen(port, ()=> {
    console.log(`Server is running successfully at ${hostName}:${port}`);
});


