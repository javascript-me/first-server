
var assert = require("assert");

describe("Square service", function () {

    it("should response square result", function (done) {

        var http = require("http");

        http.get("http://10.22.16.61:8080/square?a=30", function (response) {

            assert.equal(true, response.statusCode == 200 || response.statusCode == 404);

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