// Functions with parameters and arguments

function add(n1 = 0, n2 = 0) { // n1 and n2 are parameters
    console.log(n1 + n2);
 }
 
add(10, 5);
add(3, 3);
add(3, 6);
add(1);

const add2 = function(n1, n2) {
    console.log(n1 + n2);
 }
 
add2(5, 10);