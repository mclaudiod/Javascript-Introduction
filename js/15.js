// Array Methods

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

months.forEach(function(month) {
    if(month == "March") {
        console.log("March does exist");
    }
});

// Includes

let result = months.includes("December");
console.log(result);

// Some ideal for Objects Arrays

result = cart.some(function(product) {
    return product.name === "Cellphone"
});

console.log(result);

// Reduce

result = cart.reduce(function(total, product) {
    return total + product.price
}, 0);

console.log(result);

// Filter

result = cart.filter(function(product) {
    return product.price > 400
});

console.log(result);

result = cart.filter(function(product) {
    return product.name !== "Cellphone"
});

console.log(result);