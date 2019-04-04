var wrapLog = function (callback, name) {

  return function() {

    // arguments is going to be an array --> if you want to transform it into an array use Array.from
    // arguments are going to be the arguments from the main function - the mother function - all of them --> for exemple (5, 3)
    // function callback is called, because ou dont know wich function this is going to be, soh you use the argument name.
    // ... is called spread and it is used to go trough the arguments, it doesn matter how many they are - you can do that with arguments from a function or anythig else you want! - "take everything" and then you follow with where you need to take the things from, in this case, the arguments.
    // you are going to call the function that is callback with the variables from this function so basically, it is going to execute with all the original arguments it is supposed to use.
    return `${name}(${Array.from(arguments)}) => ${callback(...arguments)}`
  }

};

var area = function (x, y) {
  return x * y;
};
var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6
// console.log(logArea(5, 3)); // area(5, 3) => 15
// console.log(logArea(3, 2)); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24
// console.log(logVolume(5, 3, 2)); // volume(5, 3, 2) => 30
// console.log(logVolume(3, 2, 4)); // volume(3, 2, 4) => 24
