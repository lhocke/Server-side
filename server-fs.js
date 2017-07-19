var http = require("http");
var url = require("url");
var fs = require("fs");

var PORT = 7000;

function handleRequest(req, res) {
    var urlParts = url.parse(req.url);

    switch(urlParts.pathname) {
        case "/":
        displayIndex(urlParts.pathname, req, res)
        break;
        case "/food":
        displayFood(urlParts.pathname, req, res)
        break;
        case "/movies":
        displayMovies(urlParts.pathname, req, res)
        break;
        case "/frameworks":
        displayFrameworks(url.pathname, req, res)
        break;
    }
}

function displayIndex(url, req, res) {
    fs.readFile(__dirname + "/index.html", function(err, data){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);
    });

}

function displayMovies(url, req, res) {
    fs.readFile(__dirname + "/movies.html", function(err, data){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);
    });
}
 function displayFood(url, req, res) {
    fs.readFile(__dirname + "/food.html", function(err, data){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);
    });
}

function displayFrameworks(url, req, res) {
    fs.readFile(__dirname + "/frameworks.html", function(err, data){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);
    });
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log("Listening at: http://localhost:%s", PORT)
})