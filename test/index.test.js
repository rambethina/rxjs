import { assert } from 'chai';
import starWars from '../src/index';
import { square, diag } from '../src/feature_modules/lib';

describe('all topics', function(){
  it('should list all', function(){
    assert.isDefined(starWars.all, 'returns an object');
  });
});

describe('run square function', function(){
  it('should return square of number', function(){
    assert(square(2) === 4, 'Square of 2 should be 4');
  });
});

describe('run diag function', function(){
  it('should return diag of numbers', function(){
    console.log('square root :'+diag(2, 2));
    assert(diag(2, 2) === 2.8284271247461903, 'Square of 2 should be 4');
  });
});
