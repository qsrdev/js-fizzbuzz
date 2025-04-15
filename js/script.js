let fizznumber = 3;
let buzznumber = 5;

for (let i = 1; i <= 100; i++)
  if (i % fizznumber === 0 && i % buzznumber === 0) {
    console.log("FizzBuzz");
  } else if (i % fizznumber === 0) {
    console.log("Fizz");
  } else if (i % buzznumber === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
