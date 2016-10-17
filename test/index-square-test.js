
var assert = require("chai").assert;

describe("Square service", function () {

    it("should response square result", function (done) {

        var http = require("http");

        http.get("http://localhost:5555/square?a=30", function (response) {

            assert.equal(response.statusCode, 200);

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

    });

});