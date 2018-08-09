const assert = require('chai').assert;
const app = require('../index');
// const sayHello = require('../index').sayHello;
// const addNumbers = require('../index').addNumbers;

describe('Index', function(){
    it('app should return hello', function(){
        assert.equal(app.sayHello(),'hello');
    })

    it('app should return string output', function(){
        assert.typeOf(app.sayHello(),'string');
    })

    it('add numbers should be above 5', function(){
        let result = app.addNumbers(4,2);
        assert.isAbove(result,5);
    })

    it('add numbers should return number', function(){
        let result = app.addNumbers(1,2);
        assert.typeOf(result,'number');
    })
})