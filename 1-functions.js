const assertEquals = require("./assert-helper");

/* ---------------------- EXERCISE 1 ---------------------- */
// Define a function that returns 'hello world'
function hello() {
  return "hello world";
}

// Assertions (do not change)
assertEquals(hello(), "hello world");

/* ---------------------- EXERCISE 2 ---------------------- */
// Define a function, greet(personName), that returns 'hello specificPersonName'. If no name is supplied, return 'hello world'
function greet(name) {
  if (name === undefined) {
    return "hello world";
  } else {
    return "hello " + name;
  }
}

// Assertions (do not change)
assertEquals(greet("tom"), "hello tom");
assertEquals(greet(), "hello world");

/* ---------------------- EXERCISE 3 ---------------------- */
// Define a function, add2Numbers(num1, num2), to return the sum of 2 values
const add2Numbers = (num1, num2) => {
  return num1 + num2;
};

// Assertions (do not change)
assertEquals(add2Numbers(1, 1), 2);
assertEquals(add2Numbers(100, 1), 101);

/* ---------------------- EXERCISE 4 ---------------------- */
// Define a function, invertCase(someString), that returns the input string with its
// case inverted
const invertCase = someString => {
  const array = Array.from(someString);
  const inverterArray = array.map(function(alpha) {
    if (alpha === alpha.toUpperCase()) {
      return alpha.toLowerCase();
    } else {
      return alpha.toUpperCase();
    }
  });
  const arrayJoin = inverterArray.join("");
  return arrayJoin;
  console.log(arrayJoin);
};

// Assertions (do not change)
assertEquals(invertCase("Hello"), "hELLO");
assertEquals(invertCase("hELLO wORLD"), "Hello World");
