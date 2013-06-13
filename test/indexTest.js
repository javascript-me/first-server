
var assert = require("assert");

describe("GET request", function () {
    it("should return success", function (done) {
        var http = require("http");
        http.get("http://localhost:3333", function (response) {
            assert.equal("200", response.statusCode);
            var result = "";
            response.on("data", function (chunk) {
                result += chunk;
            });
            response.on("end", function () {
                assert.equal("7 + 8 = 15<br />7 * 8 = 56<br />", result);
                done();
            });
        });

    });
});