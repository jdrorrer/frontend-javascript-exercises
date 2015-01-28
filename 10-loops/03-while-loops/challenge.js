module.exports.stream = function(conditionalFn, actionFn) {
  while (conditionalFn() === true) {
    actionFn();
  }
};

module.exports.sumNumbers = function(numArray) {
  var sum = 0;
  var i = 0;
  while (i < numArray.length) {
    sum += numArray[i];
    i++;
  }
  return sum;
};

