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

// example #4
class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "atack with " + this.weapon;
  }
}

const fiona = new Elf("Fiona", "ninja stars");
console.log(fiona instanceof Elf); //
const ben = new Elf("Ben", "bow");
fiona.attack();

// example #5
// new binding
function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(this);
}

const person1 = new Person("Xavier", 55);

//implicit binding
const person = {
  name: "Karen",
  age: 40,
  hi() {
    console.log("hi" + this.name);
  },
};

person.hi();

//explicit binding
const person3 = {
  name: "Karen",
  age: 40,
  hi: function () {
    console.log("hi" + this.setTimeout);
  }.bind(window),
};

person3.hi();

// arrow functions
const person4 = {
  name: "Karen",
  age: 40,
  hi: function () {
    var inner = () => {
      console.log("hi " + this.name);
    };
    return inner();
  },
};

person4.hi();

// example #6

class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "atack with " + this.weapon;
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    // console.log('what am i?', this); this gives an error
    super(name, weapon);
    console.log("what am i?", this);
    this.type = type;
  }
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }
  makeFort() {
    // this is like extending our prototype.
    return "strongest fort in the world made";
  }
}

const houseElf = new Elf("Dolby", "cloth", "house");
//houseElf.makeFort() // error
const shrek = new Ogre("Shrek", "club", "green");
shrek.makeFort();

// exercise

class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "atack with " + this.weapon;
  }
}
//Polymorphism--
//Extend the Character class to have a Queen class. The output of the below code should be:
const victoria = new Queen("Victoria", "army", "hearts"); // create a new instace with the queen having (name, weapon, type). Type inlcudes: 'hearts', 'clubs', 'spades', 'diamonds'

victoria.attack(); // will console.log the attack() method in Character class AND will return another string: 'I am the Victoria of hearts, now bow down to me! '

/* my answer */

class Queen extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }
  attack() {
    console.log(super.attack());
    console.log("I am the Victoria of hearts, now bow down to me!");
  }
}
/* andrei's answer */

class Queen extends Character {
  constructor(name, weapon, kind) {
    super(name, weapon);
    this.kind = kind;
  }
  attack() {
    console.log(super.attack());
    return `I am the ${this.name} of ${this.kind}, now bow down to me! `;
  }
}
