var http = require("http");

var adder = require("./adder");
var url = require('url');

function onRequest(request, response) {

    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;
    var a = Number(query.a);

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("" + a * a);

    response.end();
}

http.createServer(onRequest).listen("5555");

console.log("Open link like: http://10.22.16.61:5555/square?a=20");
