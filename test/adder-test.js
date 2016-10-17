var adder = require("../src/adder");
var assert = require("chai").assert;

describe("add()", function(){

    it("should return 3 when a is 1 and b is 2", function(){
        assert.equal(3, adder.add(1, 2));
    });

});

