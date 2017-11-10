var addModules = require('./appModules');
var doSomethingVerySlow = require('./appModules');

var chai = require("chai");

chai.should();

describe("addValue function", function () {
    describe("core functionality", function () {
        it("sould return sum of two parameters", function () {
            var actual = addModules.addValues(3, 5);

            actual.should.equal(8);

        });
        it("sould return sum of two parameters", function () {
            var actual = addModules.addValues(3, 5);

            actual.should.equal(8);

        });
    });
});
describe("doSomethingVerySlow", function () {
    it("should return 'done' when it is completed", function () {
        addModules.doSomethingVerySlow(function (result) {
            result.should.equal("not done");
            done();
            
        });
        
    });

});
