const array = [0, 87, 1, 45, 4, 28, 3];

function getMaxNumber(arr) {
  let currentMaxNumber;
  arr.forEach(item => {
    if (!currentMaxNumber) {
      currentMaxNumber = item;
    } else {
      currentMaxNumber = currentMaxNumber < item ? item : currentMaxNumber;
    }
  });
  return currentMaxNumber;
}

console.log(getMaxNumber(array)); // should return 3

// hint:call,apply,bind
