var uniqueRandomArray = require('unique-random-array')
var topics = require('./topics.json');

module.exports = {
  all: topics,
  random: uniqueRandomArray(topics)
};
