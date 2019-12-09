"use strict";
function weird() {
  /* var */ height = 50;
}
// weird();
// console.log(height);

var heyThere = function drawing() {
  //do something
  console.log("draw");
};

drawing();
/* 
// Weird Javascript #1 - it asks global scope for height. Global scope says: ummm... no but here I just created it for you.
// ps this isn't allowed in strict mode. We call this leakage of global variables.
function weird() {
    height = 50
  }
  
  var heyhey = function doodle() {
    // code here
  }
  
  heyhey();
  doodle(); // Error! because it is enclosed in its own scope. */
