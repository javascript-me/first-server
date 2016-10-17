var http = require("http");

var adder = require("./adder");
var multiplier = require("./multiplier");

var querystring = require('querystring');

function onRequest(request, response) {

    var url = require('url');
    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;
    console.log(query);

    response.writeHead(404, {"Content-Type": "text/html"});

    response.write("7 + 8 = " + adder.add(7, 8) + "<br />");
    response.write("7 * 3 = " + multiplier.multiply(7, 3) + "<br />");

    response.end();
}

http.createServer(onRequest).listen("3333");

console.log("Start It! http://localhost:3333");
