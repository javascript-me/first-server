
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
                assert.equal("7 + 8 = 15<br />7 * 3 = 21<br />", result);
                done();
            });
        });

    });
});

it("Test setInterval", function (done) {
    setInterval(function () {
        assert.equal(2, 2);
        done();
    }, 200);
})