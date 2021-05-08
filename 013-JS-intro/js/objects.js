//Object creation
const obj1 = {};
const obj2 = Object();
const obj3 = new Object();

// const cat1 = {
//   name: "Vasiliy",
//   color: "red",
//   isMale: true,
// };
// console.log("cat1 :>> ", cat1);

// const cat2 = {
//   name: "Murka",
//   color: "black",
//   isMale: false,
// };

// cat1.breed = "siamiz";
// console.log("cat1 :>> ", cat1);

// const property = prompt("input property");
// alert(cat1[property]);

//bmi - индекс массы тела
// const man1 = {
//   name: "John",
//   hairColor: "blond",
//   EyeColor: "blue",
//   height: 1.65,
//   weight: 64,
//   age: 36,
//   isMale: true,
//   "phone Number": "0686002568",
//   bmi: function () {
//     return this.weight / this.height ** 2;
//   },
//   fullName: function () {
//     return this.name + " " + this.age;
//   },
// };

// console.log("man1 :>> ", man1);

// alert(man1.bmi());

// alert(man1.fullName());

// alert(man1.name + " " + man1.age);

// fullName () {
//     return man1.name + " " + man1.age);
// };

function Cat(catName, color, isMale, isFurnitureDamage) {
  this.name = catName;
  this.color = color;
  this.isMale = isMale;
  this.isFurnitureDamage = isFurnitureDamage;
}

// const man1 = {
//   name: "John",
//   hairColor: "blond",
//   EyeColor: "blue",
//   height: 1.65,
//   weight: 64,
//   age: 36,
//   isMale: true,
//   "phone Number": "0686002568",
//   bmi: function () {
//     return this.weight / this.height ** 2;
//   },
//   fullName: function () {
//     return this.name + " " + this.age;
//   },
// };

// console.log("man1 :>> ", man1);

function Human(firstName, surname, age, isMale) {
  this.name = firstName;
  this.surname = surname;
  this.age = age;
  this.isMale = isMale;
}

const human2 = new Human("Nick", "Nicksurnamne", 54, true);
console.log("human2 :>> ", human2);
const human3 = new Human("Wick", "Wicksurnamne", 32, false);
console.log("human3 :>> ", human3);

console.log("Human :>> ", Human);
