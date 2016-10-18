var http = require("http");
var url = require("url");
var machine = require("./machine");

function onRequest(request, response) {

    var usrParts = url.parse(request.url, true);

    if (usrParts.pathname.toLowerCase() != "/square")
    {
        response.write("Wrong URL! ");
        response.end();
        return;
    }

    var a = Number(usrParts.query.a);
    console.log("[" + new Date().toLocaleString() + "] url: " + request.url + ", a: " + a);

    response.write("" + a * a);
    response.end();
}

http.createServer(onRequest).listen("5555");


console.log("===================================");
console.log("http://" + machine.localIP + ":5555/square?a=20");
console.log("http://localhost:5555/square?a=20");
