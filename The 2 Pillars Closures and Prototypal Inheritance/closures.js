// closures: are some kind of variable chain between different scopes,
// it usually happens when A FUNCTION RUNS ,GETS POPPED OF THE STACK BUT RETURNS A FUNCTION WHICH
// HAS SOME REFERENCES TO THE INNER SCOPE OF ITS PARENT FUNCTION=> THAT'S WHAT WE CALL CLOSURES

// A closure is the combination of a function bundled together (enclosed) with references to its
//  surrounding state (the lexical environment). ... In JavaScript, closures are created every
//  time a function is created, at function creation time

// /* EXAMPLE */
// function a() {
//   let grandpa = "grandpa";
//   return function b() {
//     let father = "father";
//     return function c() {
//       let son = "son";
//       return `${grandpa} > ${father} > ${son}`;
//     };
//   };
// }

// a();

// //closures and higher order function
// function boo(string) {
//   return function (name) {
//     return function (name2) {
//       console.log(`hi ${name2}`);
//     };
//   };
// }

// const boo2 = (string) => (name) => (name2) => console.log(`hi ${name2}`);

// boo("hi")("john")("tanya");

// // AHH! HOW DOES IT REMEMBER THIS 5 years from now?
// booString = boo2("sing");
// booStringName = booString("John");
// booStringNameName2 = booStringName("tanya");

// exercise1
function callMeMaybe() {
  const callMe = "Hi!";
  setTimeout(function () {
    console.log(callMe);
  }, 4000);
}

callMeMaybe();
