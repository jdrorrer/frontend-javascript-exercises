module.exports.favoriteNumber = function(favNum, guess) {
  if (guess > favNum) {
    return "Too high";
  } 
  else if (guess < favNum) {
    return "Too low";
  } 
  else {
    return "You got it!";
  }
};

module.exports.checkLock = function(a, b, c, d) {
  if ((a == 3 || a == 5 || a == 7) && b == 2 && (5 <= c && c <= 100) && (d < 9 || d > 20)) {
    return "correct";
  }
  else {
    return "incorrect";
  }
};

module.exports.canIGet = function(item, money) {
  if (money >= 1 && item == 'Apple Sticker') {
    return true;
  }
  else if (money >= 999 && item == 'MacBook Air') {
    return true;
  }
  else if (money >= 1299 && item == 'MacBook Pro') {
    return true;
  }
  else if (money >= 2499 && item == 'Mac Pro') {
    return true;
  }
  else {
    return false;
  }
};