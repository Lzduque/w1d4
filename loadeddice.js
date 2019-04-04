function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var counter = -1;

  return function() {
    if(counter === list.lenght) {
      counter = - 1;
    } else {
      counter ++;
    }
    return list[counter];
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
