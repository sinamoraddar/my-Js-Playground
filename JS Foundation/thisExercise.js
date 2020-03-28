// Run this code, and you will see there is an issue. How would you fix it?

const character = {
  name: "Simon",
  getCharacter() {
    return this.name;
  }
};

const giveMeTheCharacterNOW = character.getCharacter;
//How Would you fix this?
console.log("?", giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't

/* MY SOLUTION */
const giveMeTheCharacterNOW = character.getCharacter.bind(character);

/* ANDREI'S SOLUTION */
const giveMeTheCharacterNOW = character.getCharacter.bind(character);
