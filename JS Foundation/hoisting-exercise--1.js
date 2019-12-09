/* NOTES
1- Only ** var and function ** -> get hoisted
2-only function expressions get hoisted 
3- let and const -> ** DO NOT GET HOISTED **
*/

/* FIRST EXERCISE */
// console.log(one);
// var one;
// one = 1;
// console.log(one);

// one = 2;

// console.log(one);

/* SECOND EXERCISE */
//   function first() {
//     console.log("helllow");
//   }
//   function first() {
//     console.log("byeeeee");}
//   first();

/* THIRD EXERCISE */
const favouriteFood = "pizza";
const printMyFood = function() {
  console.log(`haha , hoisting got you so good !!!`, favouriteFood);
  const favouriteFood = "ghormeh sabzi";
  console.log(`after being assigned a value`, favouriteFood);
};

printMyFood();
