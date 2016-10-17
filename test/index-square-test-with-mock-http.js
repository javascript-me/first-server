var assert = require("assert");

var events = require('events').EventEmitter;
var util = require('util');
var myhttp = function () {
    this.statusCode = 200;
    var _this = this;
    this.get = function (options, cb) {
        cb(_this);
        return _this;
    };
};
util.inherits(myhttp, events);

describe("Square service", function () {

    it("should response square result", function (done) {

        //var http = require("http");
        var http = new myhttp();

        http.get("http://10.22.16.61:5555/square?a=30", function (response) {

            assert.equal(true, response.statusCode == 200);

            var result = "";

            response.on("data", function (chunk) {
                result += chunk;
            });

            response.on("end", function () {
                var expectedResult = "900";
                assert.equal(expectedResult, result);
                done();

            });
        });

        http.statusCode = 200;
        http.emit('data', 900);
        http.emit('end');
    });
});


