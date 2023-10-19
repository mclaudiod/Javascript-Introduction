// Arrays

const number = [10, 20, 30, 40, 50];

number.push(60, 70, 80); //Adds to the end of the array

number.unshift(-10, -20, -30); //Adds to the start of the array

console.table(number);

const months = new Array("January", "February", "March", "April", "May");

months.pop(); //Deletes the last element

months.shift(); //Deletes the first element

months.slice(1,1); //Deletes determinate element

console.table(months);

// Access the values inside an array

console.log(number[0]);
console.log(number[1]);
console.log(number[2]);
console.log(number[3]);
console.log(number[4]);

// Know the extension of an array

console.log(number.length);

number.forEach(function(number){
    console.log(number);
});

// Rest Operator or Spread Operador

const newMonths = [...months, "June"];

console.log(newMonths);