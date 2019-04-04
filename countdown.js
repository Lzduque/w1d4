var countdownGenerator = function (x) {
  var value = x + 1; // add 1 so when we subtract 1 in the first time inside the countdown function, the result will be 3!

  return function countdown() {
    value --;

    if(value === 0) {
      return 'Blast Off!'
    } else if (value < 0) {
      return 'Rockets already gone, bub!';
    } else {
      return `T-minus ${value}...`;
    }
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
