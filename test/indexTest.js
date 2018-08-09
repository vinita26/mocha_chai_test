const assert = require('chai').assert;
const app = require('../index');
// const sayHello = require('../index').sayHello;
// const addNumbers = require('../index').addNumbers;

//Results
sayHelloResult= app.sayHello();
addNumbersResult = app.addNumbers(4,3)
describe('Index', function(){
    describe('sayHello()', function(){
        it('app should return hello', function(){
            assert.equal(sayHelloResult,'hello');
        })
    
        it('app should return string output', function(){
            assert.typeOf(sayHelloResult,'string');
        }) 
    })
    
    describe('addNumbers()',function(){
        it('add numbers should be above 5', function(){
            //let result = app.addNumbers(4,2);
            assert.isAbove(addNumbersResult,5);
        })
    
        it('add numbers should return number', function(){
            //let result = app.addNumbers(1,2);
            assert.typeOf(addNumbersResult,'number');
        })
    })
})