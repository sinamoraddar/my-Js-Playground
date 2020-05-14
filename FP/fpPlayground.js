// Amazon shopping exercise
const user = {
  name: "Kim",
  active: true,
  cart: [],
  purchases: [],
};

//Implement a cart feature:
//   my answer
// 1. Add items to cart.
const addToCart = (itemsArray) => {
  // 2. Add 3% tax to item in cart
  const newItemsArray = itemsArray.map(({ price, ...item }) => ({
    ...item,
    price: price + (price * 3) / 100,
  }));
  // 3. Buy item: cart --> purchases
  user = {
    ...user,
    cart: [...cart, ...newItemsArray],
    purchases: [...purchases, ...newItemsArray],
  };
  // 4. Empty cart
  user = { ...user, cart: [] };
};

//Bonus:
// accept refunds.
const refund = (currentItem) => {
  const newCart = user.cart.filter((item) => item !== currentItem);
  const newPurchase = user.purchase.filter((item) => item !== currentItem);
  user = { ...user, cart: newCart, purchase: newPurchase };
};
// Track user history.
const trackHistory = (activity) => {
  user = {
    ...user,
    history: history !== undefined ? [...history, activity] : [activity],
  };
};

// andrei's answer

const user = {
  name: "Kim",
  active: true,
  cart: [],
  purchases: [],
};
const history1 = [];
const compose = (f, g) => (...args) => f(g(...args));
const pipe = (f, g) => (...args) => g(f(...args));
const purchaseItem = (...fns) => fns.reduce(compose);
const purchaseItem2 = (...fns) => fns.reduce(pipe);
purchaseItem2(
  addItemToCart,
  applyTaxToItems,
  buyItem,
  emptyUserCart
)(user, { name: "laptop", price: 60 });
// purchaseItem(
//   emptyUserCart,
//   buyItem,
//   applyTaxToItems,
//   addItemToCart
// )(user, {name: 'laptop', price: 50})
function addItemToCart(user, item) {
  history1.push(user);
  const updatedCart = user.cart.concat(item);
  return Object.assign({}, user, { cart: updatedCart });
}

function applyTaxToItems(user) {
  history1.push(user);
  const { cart } = user;
  const taxRate = 1.3;
  const updatedCart = cart.map((item) => {
    return {
      name: item.name,
      price: item.price * taxRate,
    };
  });
  return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user) {
  history1.push(user);
  const itemsInCart = user.cart;
  return Object.assign({}, user, { purchases: itemsInCart });
}
function emptyUserCart(user) {
  history1.push(user);
  return Object.assign({}, user, { cart: [] });
}

// function refundItem() {}

// function getUserState() {}

// function goBack() {}

// function goForward() {}

// example 1
//Side effects:
const array = [1, 2, 3];
function mutateArray(arr) {
  arr.pop();
}
function mutateArray2(arr) {
  arr.forEach((item) => arr.push(1));
}
//The order of the function calls will matter.
mutateArray(array);
mutateArray2(array);
array;
// map and concat methods can fix this issue of mutation

// Idempotence:
function notGood() {
  return Math.random();
  // new Date();
}

function good() {
  return 5;
}

Math.abs(Math.abs(10));

// immutability
const obj = { name: "Andrei" };
function clone(obj) {
  return { ...obj }; // this is pure
}

function updateName(obj) {
  const obj2 = clone(obj);
  obj2.name = "Nana";
  return obj2;
}

const updatedObj = updateName(obj);
console.log(obj, updatedObj);

//HOF
const hof = (fn) => fn(5);
hof(function a(x) {
  return x;
});
//Closure
const closure = function () {
  let count = 55;
  return function getCounter() {
    return count;
  };
};

const getCounter = closure();
getCounter();
getCounter();
getCounter();
//Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(5)(20);
const multiplyBy5 = curriedMultiply(5);
multiplyBy5(20);
//Partial Application
const multiply = (a, b, c) => a * b * c;
const partialMultiplyBy5 = multiply.bind(null, 5);
partialMultiplyBy5(10, 20);

//learn to cache
function addTo80(n) {
  return n + 80;
}

addTo80(5);

let cache = {};
function memoizeAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log("long time");
    const answer = n + 80;
    cache[n] = answer;
    return answer;
  }
}

// console.log(1, memoizeAddTo80(6))
// // console.log(cache)
// // console.log('-----------')
// console.log(2, memoizeAddTo80(6))

// let's make that better with no global scope. This is closure in javascript so.
function memoizeAddTo80(n) {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("long time");
      const answer = n + 80;
      cache[n] = answer;
      return answer;
    }
  };
}

const memoized = memoizeAddTo80();
console.log(1, memoized(6));
// console.log(cache)
// console.log('-----------')
console.log(2, memoized(6));

// compose
fn1(fn2(fn3(50)));

compose(fn1, fn2, fn3)(50); //Right to lext
pipe(fn3, fn2, fn1)(50); //left to right

const compose = (f, g) => (a) => f(g(a));
const pipe = (f, g) => (a) => g(f(a));
const multiplyBy3AndAbsolute = compose((num) => num * 3, Math.abs);
console.log(multiplyBy3AndAbsolute(-50));
