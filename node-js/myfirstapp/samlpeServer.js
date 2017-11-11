var http = require("http");
var hostname = "127.0.0.1";
var port = 3000;
var name = {
    "name" : "marko",
    "surname" : "milicevic"
}



var server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(JSON.stringify(name));
    res.end("<body><button>Hello World my friend!</button></body>");
});

server.listen(port, hostname, () =>{
    console.log("Server running at http://" + hostname + ':' + port + "/");
})