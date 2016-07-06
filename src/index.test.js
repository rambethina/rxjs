import { assert } from 'chai';
import starWars from './index';

describe('all topics', function(){
  it('should list all', function(){
    assert.isDefined(starWars.all, 'returns an object');
  });
});
