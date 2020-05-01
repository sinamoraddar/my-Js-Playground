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
