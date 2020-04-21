// exercise 1
let dragon = {
  name: "Tanya",
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`;
    }
  },
};

let lizard = {
  name: "Kiki",
  fight() {
    return 1;
  },
};
// Don't do this, bad performance. Show with bind.
lizard.__proto__ = dragon;
dragon.isPrototypeOf(lizard);
console.log(lizard.fire);
console.log(lizard.sing());
const lizardFire = dragon.sing.bind(lizard);
console.log(lizardFire());

// exercise 2
//Every Prototype chain links to a prototype object{}
function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.__proto__;
Function.prototype;
multiplyBy5.__proto__.__proto__;
Object.prototype;
multiplyBy5.__proto__.__proto__.__proto__;
typeof Object;
typeof {};
// only functions have property property 😲

//exercise 4
// Create our own prototypes:
var human = { mortal: true };
var socrates = Object.create(human);
human.isPrototypeOf(socrates); // true

// exercise 5
//Exercise - extend the functionality of a built in object

//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.

new Date("1900-10-10").lastYear();
//'1899'

//#Bonus
// Mofify .map() to print '🗺' at the end of each item.
console.log([1, 2, 3].map());
//1🗺, 2🗺, 3🗺

// my answer(s)
// #1
Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
};
// #bonus
Array.prototype.map = function () {
  const result = [];
  this.forEach((item) => {
    result.push(item + "🗺");
  });
  return result;
};
// andrei's answer(s)
//Array.map() => to print '🗺'
Array.prototype.map = function () {
  // what happens with arrow function here?
  arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i] + "🗺");
  }
  return arr;
};
console.log([1, 2, 3].map());

//Date object => to have method .yesterday() which shows you yesterday's day in 'YYYY-MM-DD' format.
Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
};

new Date("1900-10-10").lastYear();
// don't worry if you didn't get this... we will expand on this later.

// exercise 6
// How would you be able to create your own .bind() method using call or apply.

// Hint:

Function.prototype.bind = function () {};

// my answer(s)
Function.prototype.bind = function (thisKeyWord) {
  const self = this;
  return () => {
    return self.apply(thisKeyWord, arguments);
  };
};
// andrei's answer
Function.prototype.bind = function (whoIsCallingMe) {
  const self = this;
  return function () {
    return self.apply(whoIsCallingMe, arguments);
  };
};
