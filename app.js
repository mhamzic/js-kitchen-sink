// let myName = "Mirza";
// console.log(myName);
// const numberOfStates = 50;
// console.log(numberOfStates);
// let result = 5 + 4;
// console.log(result);

// function sayHello() {
//   alert("Hello World");
// }

// sayHello();

function checkAge(name, age) {
  let message;
  if (age < 21) {
    message = `Sorry ${name}, you are not old enough to view this page!`;
  } else {
    message = `Welcome ${name}!`;
  }
  alert(message);
}

// checkAge("Charles", 21);
// checkAge("Aby", 27);
// checkAge("James", 18);
// checkAge("john", 17);

// let vegetables = ["paradajz", "paprika", "krastavac", "luk"];
// for (let i = 0; i < vegetables.length; i++) {
//   console.log(vegetables[i]);
// }

let nameAndAge = [
  {
    name: "John",
    age: 22
  },
  {
    name: "Mark",
    age: 18
  },
  {
    name: "Ann",
    age: 30
  },
  {
    name: "Frank",
    age: 12
  }
];

// for (let index = 0; index < nameAndAge.length; index++) {
//   checkAge(nameAndAge[index].name, nameAndAge[index].age);
// }

function getLength(string) {
  return string.length;
}

myStringLength = getLength("Hello World");

if (myStringLength % 2 == 0) {
  console.log("The world is nice and even!");
} else {
  console.log("The world is an odd place!");
}
