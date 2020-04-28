// example #1
// factory function make/create
function createElf(name, weapon) {
  //we can also have closures here to hide properties from being changed.
  return {
    name: name,
    weapon: weapon,
    atack() {
      return "atack with " + weapon;
    },
  };
}
const sam = createElf("Sam", "bow");
const peter = createElf("Peter", "bow");

sam.atack();

// example #2
const elfFunctions = {
  attack: function () {
    return "atack with " + this.weapon;
  },
};
function createElf(name, weapon) {
  //Object.create creates __proto__ link
  newElf = Object.create(elfFunctions);
  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
}

const sam = createElf("Sam", "bow");
const peter = createElf("Peter", "bow");
sam.attack();

//   example #3
//Constructor Functions
function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

Elf.prototype.attack = function () {
  return "atack with " + this.weapon;
};
const sam = new Elf("Sam", "bow");
const peter = new Elf("Peter", "bow");
sam.attack();
