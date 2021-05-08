function hello() {
  alert("Приветствие");
}

// hello();
// hello();
// hello();
// hello();

const pers1 = "Grut";
// helloTo(pers1);
// helloTo("Vasya");
// helloTo(undefined);
// helloTo(5);

// function helloTo(name) {
//   alert("Hello, " + name);
// }

let x = prompt("Input x");

const d = deg4(x);
console.log("d :>> ", d);

/**
 *
 * @param {number} chislo число возводимое в 4 степень
 * @returns {number} число в 4-ой степени
 */
function deg4(chislo) {
  // chislo**4
  return chislo ** 4;
}

const roots = SquareEquation(x);
console.log("roots :>> ", roots);

/**
 *
 * @param {*} koren
 * @param {*} koren1
 * @returns
 */
function SquareEquation(koren) {
  return Math.sqrt(koren);
}
