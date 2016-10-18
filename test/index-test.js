
var assert = require("chai").assert;

describe("Call service", function () {

    it("should response html text in Promise way", function (done) {

        var promise = new Promise(
            function (resolve, reject) {
                var http = require("http");
                http.get("http://localhost:3333", function (response) {
                    if (response.statusCode == 200)
                    {
                        resolve(response);
                    }
                    else
                    {
                        reject(response);
                    }
                });
            }
        );

        promise.then(
            function (response) {
                assert.equal("200", response.statusCode);
                var result = "";
                response.on("data", function (chunk) {
                    result += chunk;
                });

                response.on("end", function () {
                    var expectedResult = "7 + 8 = 15<br />7 * 3 = 21<br />";
                    assert.equal(expectedResult, result);
                    done();
                });
            }
        ).catch(function (response) {
            assert.equal("404", response.statusCode);
            done();
        });
    });

    it("should response html text", function (done) {

        var http = require("http");

        http.get("http://localhost:3333", function (response) {

            assert.equal(response.statusCode, 200);

            var result = "";

            response.on("data", function (chunk) {
                result += chunk;
            });

            response.on("end", function () {

                var expectedResult = "7 + 8 = 15<br />7 * 3 = 21<br />";

                assert.equal(expectedResult, result);
                done();

            });
        });

    });

});

it("should run the asynchronous test correctly", function (done) {

    setTimeout(function () {

        assert.equal(2, 2);
        done();

    }, 200);

});