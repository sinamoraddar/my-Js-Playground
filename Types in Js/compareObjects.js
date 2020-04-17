var user1 = { name: "nerd", org: "dev" };
var user2 = { nae: "ned", org: "dev" };
var eq = user1 == user2;
console.log(eq); // gives false
// my solutions
let eq2 = JSON.stringify(user1) === JSON.stringify(user2);
console.log("eq2", eq2);

let eq3;
Object.keys(user1).forEach(key => {
  user2[key] !== undefined
    ? user1[key] === user2[key]
      ? (eq3 = true)
      : (eq3 = false)
    : false;
});
console.log("eq3", eq3);
