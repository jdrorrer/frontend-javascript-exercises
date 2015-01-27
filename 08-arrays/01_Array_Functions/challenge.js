module.exports.reversePlusOne = function(array) {
  var result = [];
  for (var i = 0, j = array.length; i < j; i++) {
    result[i] = array.pop();
  }
  result.unshift(1);
  return result;
};

module.exports.plusesEverywhere = function(array) {
  var result = "";
  for (var i = 0, j = array.length; i < j; i++) {
    if (i < (j - 1)) {
      result += array[i] + "+"; 
    }
    else {
      result += array[i];
    }
  }
  return result;
};

module.exports.arrayQuantityPlusOne = function(array) {
  return array.length + 1;
};