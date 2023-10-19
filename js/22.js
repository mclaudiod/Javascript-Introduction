// Control Structures or Conditionals

// === equal to
// !== different to
// > bigger than
// < smaller than

const score = 1000;

if(score !== 1000) {
    console.log("It's not equal.");
} else {
    console.log("The score is equal to 1000.");
}

const cash = 1000;
const cart = 800;

if(cash > cart) {
    console.log("The user can pay.");
} else {
    console.log("Insufficient Funds.");
}

const role = "ADMINISTRATOR";

if(role === "ADMINISTRATOR") {
    console.log("You have unlimited access.");
} else if(role === "EDITOR") {
    console.log("You have limited access.");
} else {
    console.log("You don't have access.");
}