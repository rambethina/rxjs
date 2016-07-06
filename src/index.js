import uniqueRandomArray from 'unique-random-array';
import topics from './topics.json';

module.exports = {
  all: topics,
  random: uniqueRandomArray(topics)

};
