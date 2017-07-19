// # **Instructions**

// * Using the previous example as a guide, create an app that has two web servers.
// * One that listens on port 7000 and one that listens on port 7500.
// * The one listening on port 7000 will always tell the user something good about themselves.
// * The one listening on 7500 will always tell the user something bad about themselves.
// * Make sure you create a Github repo and commit this code!

// **Bonus**

// * Look for other ways to expand what your server can do. As possibilities:
//   * Generate the good/bad phrase randomly from a list of predefined phrases
//   * Use the `twitter` package inside the response to also return a random tweet

// // Here we require/import the HTTP module
// var http = require("http");

// // Here we define a port to listen to
// var PORT = 8080;

// // Here we create a generic function to handle requests and responses
// function handleRequest(request, response) {

//   // The below statement is triggered (client-side) when the user visits the PORT URL
//   response.end("It Works!! Path Hit: " + request.url);
// }

// // Here we use the Node HTTP package to create our server.
// // We then pass it the handleRequest function to empower it with functionality.
// var server = http.createServer(handleRequest);

// // Here we start our server so that it can begin listening to client requests.
// server.listen(PORT, function() {

//   // The below statement is triggered (server-side) when a user visits the PORT URL
//   console.log("Server listening on: http://localhost:%s", PORT);

// });

var http = require('http');

var firstPORT = 7000;
var secondPORT = 7500;

function handleGoodRequest(request, response) {
    response.end("You look great!");
};

function handleBadRequest(request, response) {
    response.end("You look awful!");
}

var goodServer = http.createServer(handleGoodRequest);
var badServer = http.createServer(handleBadRequest);

goodServer.listen(firstPORT, function() {
    console.log("good server connected at: http://localhost:%s", firstPORT)
})

badServer.listen(secondPORT, function() {
    console.log("bad server connected at: http://localhost:%s", secondPORT)
})