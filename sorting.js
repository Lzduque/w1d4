var array = [10, 2, 5, 1, 9];
array.sort((a,b) => a - b);

//////

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort((obj1, obj2) => {
  if(obj1.name === obj2.name){// age descendent
    return obj2.age - obj1.age;
  } else {
    return obj1.name > obj2.name;
  }
});

