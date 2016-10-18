var http = require("http");
var url = require('url');

function onRequest(request, response) {

    if (request.url == "/favicon.ico")
    {
        response.end();
        return;
    }

    var usrParts = url.parse(request.url, true);
    var a = Number(usrParts.query.a);
    console.log("[" + new Date().toLocaleString() + "] url: " + request.url + ", a: " + a);

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("" + a * a);

    response.end();
}

http.createServer(onRequest).listen("5555");

console.log("[Open either link]");
console.log("==================");
console.log("http://10.22.16.61:5555/square?a=20");
console.log("http://localhost:5555/square?a=20");
