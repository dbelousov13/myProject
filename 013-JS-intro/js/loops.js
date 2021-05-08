// while (true) {
//   alert("Loop");
// }

// const stepsCount = 5;
// let stepNumber = 0;

// while (stepNumber++ < stepsCount) {
//   console.log("10 step");
//   console.log("90 degree");
// }

// let i = 5;
// let result = 0;

// while (i <= 10) {
//   result = result + i;
//   i = i + 2;
// }

// for (let i = 10; i >= 0; i -= 1) {
//   console.log("i :>> ", i);
// }

const wantedValue = 7;
let Value;

do {
  Value = Number(prompt("Enter value:"));
} while (Value !== wantedValue);

alert("You are right");
