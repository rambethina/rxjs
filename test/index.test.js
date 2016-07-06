import { assert } from 'chai';
import starWars from '../src/index';
import { square, diag, sizeOfArray } from '../src/feature_modules/lib';

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

describe('test lodash', function(){
  it('check size', function(){
    console.log('Size of Array :'+sizeOfArray([2, 3, 4]));
    assert(sizeOfArray([2, 3, 4]) === 3, 'Size of Array is 3');
  });
});
