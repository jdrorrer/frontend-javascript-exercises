module.exports.sumNumbers = function(numArray) {
  sum = 0;
  for (var i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  return sum;
};

module.exports.splitAndLowerCaseString = function(inputString) {
  var splitArray = inputString.split(',');
  var lowerCaseArray = [];
  for (var i = 0; i < splitArray.length; i++) {
    lowerCaseArray.push(splitArray[i].toLowerCase());
  }
  return lowerCaseArray;
};

module.exports.addIndex = function(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(i + " is " + array[i]);
  }
  return newArray;
};
