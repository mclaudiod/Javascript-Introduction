// Arrow Functions

const add2 = (n1, n2) => console.log(n1 + n2);
add2(5, 10);

const learning = technology => console.log(`Learning ${technology}`);
learning("JavaScript");

// Array Methods 15.js

const months = new Array("January", "February", "March", "April", "May");

const cart = [
    { name: "20\" Monitor", price: 500 },
    { name: "50\" TV", price: 700 },
    { name: "Tablet", price: 300 },
    { name: "Headphones", price: 200 },
    { name: "Keyboard", price: 50 },
    { name: "Cellphone", price: 500 },
    { name: "Horns", price: 300 },
    { name: "Laptop", price: 800 },
];

// forEach

months.forEach(month => {
    if(month == "March") {
        console.log("March does exist");
    }
});

// Some ideal for Objects Arrays

result = cart.some(product => product.name === "Cellphone");

console.log(result);

// Reduce

result = cart.reduce((total, product) => total + product.price, 0);

console.log(result);

// Filter

result = cart.filter(product => product.price > 400);

console.log(result);

result = cart.filter(product => {
    return product.name !== "Cellphone"
});

console.log(result);