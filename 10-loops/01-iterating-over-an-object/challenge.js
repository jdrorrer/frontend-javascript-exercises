module.exports.getKeys = function(obj) {
  var propArray = [];
  for (var prop in obj) {
    propArray.push(prop);
  }
  return propArray;
};

module.exports.getValues = function(obj) {
  var valArray = [];
  for (var prop in obj) {
    valArray.push(obj[prop]);
  }
  return valArray;
};

module.exports.objectToArray = function(obj) {
  var stringArray = [];
  for (var prop in obj) {
    stringArray.push(prop + " is " + obj[prop]);
  }
  return stringArray;
};