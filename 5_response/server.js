const http = require("http");
const port = 3000;
const server = http.createServer((req,res) => {
    res.writeHead(208, {"Content-Type":"text/html"});
    res.write("<h1>Hello</h1>")
    res.write("<h1>Hello</h1>")
    res.write("<h1>Hello</h1>")
    res.write("<h1>Hello</h1>")
    res.end();
})


server.listen(port,() => { 
    console.log("Server Start Successfully");
})














