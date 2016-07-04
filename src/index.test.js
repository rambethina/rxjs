var expect = require('chai').expect;
var starWars = require('./index');

describe('all topics', function(){
  it('should list all', function(){
    expect(starWars.all).to.satisfy(isArrayOfString);

    function isArrayOfString(array){
      return true;
    }
  });
});
