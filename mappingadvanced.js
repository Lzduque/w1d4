var words = ["ground", "control", "to", "major", "tom"];

var newMap = function(data, fnName) {
  var newArray = [];
  data.forEach((value) => newArray.push(fnName(value)));
  return newArray;
}

var countLength = newMap(words, function(word) {
  return word.length;
});

var upperCase = newMap(words, function(word) {
  return word.toUpperCase();
});

var reverseWords = newMap(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(countLength);
console.log(upperCase);
console.log(reverseWords);


// var lengths = words.map(word => word.length);
// console.log(lengths);


// var upperCase = words.map(function(word) {
//   return word.toUpperCase();
// });
// console.log(upperCase);

// var reverse = words.map(word => word.split('').reverse().join(''));
// console.log(reverse);

// //var wordsLength  = function(word) {
//   return word.length;
// };

// var lengths = word.map(wordsLength);
// console.log(lengths);