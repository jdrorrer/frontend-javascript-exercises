module.exports.addItem = function(item, array) {
  var last = array[array.length-1];
  if (item === last) {
    return array;
  }
  else {
    array.push(item);
    return array;
  }
};

module.exports.reverseSortedList = function(array) {
  sortedArray = array.sort();
  reverseSortedArray = sortedArray.reverse();
  return reverseSortedArray;
};