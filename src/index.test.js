var assert = require('chai').assert;
var starWars = require('./index');

describe('all topics', function(){
  it('should list all', function(){
    assert.isDefined(starWars.all, 'returns an object');
  });
});
