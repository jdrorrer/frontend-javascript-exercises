module.exports.formLetter = function(firstName, senderName, message) {
  return "Hello " + firstName + ",\n\n" + message + "\n\n" + "Sincerely,\n" + senderName;
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
  var newString = bigString.substring(startA, endA) + bigString.substring(startB, endB);
  return newString;
};

module.exports.findFirstMatch = function(text, searchString) {
  return text.indexOf(searchString);
};

module.exports.findLastMatch = function(text, searchString) {
  return text.lastIndexOf(searchString);
};

module.exports.substringBetweenMatches = function(text, searchString) {
  var searchIndex = text.indexOf(searchString);
  var searchLastIndex = text.lastIndexOf(searchString);
  var searchLength = searchString.length;
  return text.substring(searchIndex + searchLength,searchLastIndex);
};