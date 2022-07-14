const http = require("http");
const fs = require("fs");
const port = 5500;
const hostName = "127.0.0.1";

const server = http.createServer((req,res)=> {

    const handleReadFile = (fileName,statusCode) => {
        fs.readFile(fileName, (err,data)=> {
            res.writeHead(statusCode,{"Content-Type":"text/html"})
            res.write(data);
            res.end()
        })
    }

    if(req.url === "/") {
       handleReadFile("./views/index.html",200)
    } else {
        handleReadFile(`./views${req.url}.html`,200)
    } 
})



server.listen(port,hostName, ()=> {
    console.log(`Running Successfully at http://${hostName}:${port}`);
})





