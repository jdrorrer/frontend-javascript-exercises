module.exports.newArray = function(a, b, c, d) {
  return [a, b, c, d];
};

module.exports.firstAndLast = function(array) {
  var first = array.shift();
  var last = array.pop();
  return [first, last];
};