// In JavaScript functions are always loaded first than anything else
// Function Declaration

function add() {
   console.log(10 + 10);
}

add();

// Function Expression

const add2 = function() {
   console.log(3 + 3);
}

add2();

// IIFE

(function() {
   console.log("This is a function.");
})();