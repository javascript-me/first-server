var http = require("http");

var adder = require("./adder");
var multiplier = require("./multiplier");

function onRequest(request, response) {

    response.writeHead(404, {"Content-Type": "text/html"});

    response.write("7 + 8 = " + adder.add(7, 8) + "<br />");
    response.write("7 * 3 = " + multiplier.multiply(7, 3) + "<br />");

    response.end();
}

http.createServer(onRequest).listen("3333");

console.log("Start It! http://localhost:3333");
