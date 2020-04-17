// DEFINITION:
// Higher-order functions are functions that take other
//  functions as arguments or return functions as their
//  results. Taking an other function as an argument is
// often referred as a callback function, because it is
// called back by the higher-order function. This is a concept
//  that Javascript uses a lot
const multiplyBy = (base, number) => console.log(number * base);
const multiplyByTwo = (number) => multiplyBy(2, number);
const multiplyByTen = (number) => multiplyBy(10, number);

//with binding
// const multiplyByTwo = multiplyBy.bind(undefined, 2);
// const multiplyByTen = multiplyBy.bind(undefined, 10);
multiplyByTwo(3);
multiplyByTen(5);

//ANDREI'S ANSWER
const multiplyBy = (num1) => (num2) => num1 * num2;

const multiplyByTwo = multiplyBy(2);
const multiplyByTen = multiplyBy(10);
