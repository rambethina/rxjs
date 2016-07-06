import _ from 'lodash';

export const sqrt = Math.sqrt;

export function square(x) {
  return x * x;
}

export function diag(x, y) {
  return sqrt(square(x) + square(y));
}
//Named exports

export function sizeOfArray(){
  return _.size([1, 2, 3]);
}
