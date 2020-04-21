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


// exercise 2
// my answer
const heaveyDuty =()=>{
  const bigArray = new Array(7000).fill('hey there')
  return (index)=>bigArray[index]
}

const getBigArrayByIndex=heaveyDuty();
getBigArrayByIndex(5)
// andrei's answer

function heavyDuty(item) {
  const bigArray = new Array(7000).fill('😄')
  console.log('created!');
  return bigArray[item]
}

heavyDuty(699)
heavyDuty(699)
heavyDuty(699)
const getHeavyDuty = heavyDuty2();
getHeavyDuty(699)
getHeavyDuty(699)
getHeavyDuty(699)

// but i dont want to pollute the global namespace..
function heavyDuty2() {
  const bigArray = new Array(7000).fill('😄')
  console.log('created Again!')
  return function(item) {
    return bigArray[item]
  }
}


// exercise 3
const makeNuclearButton = () => {
  let timeWithoutDestruction = 0;
  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;
  const launch = () => {
    timeWithoutDestruction = -1;
    return '💥';
  }

  setInterval(passTime, 1000);
  return {totalPeaceTime}
}

const ww3 = makeNuclearButton();
ww3.totalPeaceTime()

// exercise 4 
let view ; 
function initialize(){
  view="🎂"
  console.log('view has been set')
}

initialize()
initialize()
initialize()
console.log(view)
// objective: turn it into a function that can only be called once 
//my answer(s)
function initialize (){
  let hasItBeenInitialized=false;
  let view;
  return ()=>{
   if(!hasItBeenInitialized) {
     view="🎂"
  console.log('view has been set')
  hasItBeenInitialized=true;
  
  }
  }
}
const controller=initialize()
controller();
controller();
// andrei's answer
let view;
function initialize() {
  let called = 0;
  return function() {
    if (called > 0) {
      return
    } else {
      view = '🏔';
      called = true;
      console.log('view has been set!')
    }

  }
}

const start = initialize();
start();
start();
start();
console.log(view)

// exercise #(5+1)
const array=[1,2,3,4]
for(var i=0; i < array.length; i++) {
  setTimeout(function(){
    console.log('I am at index ' + i)
  }, 3000)
}
// change it in an order to print 1,2,3,4

// my answer 
// with let
for (let i=0;i<array.length;i++){
  setTimeout(() => {
    console.log('i am at index '+ (i+1))
  }, 3000);
}
 
// with closures and IIFE
for (let i=0;i<array.length;i++){
  (()=>{
    var test=i;
    setTimeout(() => {
    console.log('i am at index '+ (test))
  }, 3000);
  })()
}

// andrei's answer
// const array = [1,2,3,4];
// for(let i=0; i < array.length; i++) {
//   setTimeout(function(){
//     console.log('I am at index ' + array[i])
//   }, 3000)
// }


const array = [1,2,3,4];
for(var i=0; i < array.length; i++) {
  (function(closureI) {
    setTimeout(function(){
      console.log('I am at index ' + array[closureI])
    }, 3000)
  })(i)
}