module.exports.copy = function(obj) {
  var newObj = {};
  for (var prop in obj) {
    newObj[prop] = obj[prop];
  }
  return newObj;
};

module.exports.extend = function(dest, src) {
  for (var prop in src) {
    dest[prop] = src[prop];
  }
  return dest;
};

module.exports.hasElems = function(obj, array) {
  var bool = false;
  var bool2 = false;
  var boolArray = [];
  
  for (var i = 0; i < array.length; i++) {
    for (var prop in obj) {
      if (array[i] === prop) {
        bool = true;
        break;
      }
      else {
        bool = false;
        continue;
      }
    }
    boolArray.push(bool);
  }

  for (var i = 0; i < boolArray.length; i++) {
    if (boolArray[i] === false) {
      bool2 = false;
      break;
    }
    else {
      bool2 = true;
      continue;
    }
  }
  
  if (boolArray == false) {
    return true;
  }
  else {
    return bool2;  
  }
};