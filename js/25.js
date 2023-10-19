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

// For Each

cart.forEach(product => console.log(product.name));

// Map

const array = cart.map(product => `${product.name} - ${product.price}`);

console.log(array);

// The difference between For Each and Map is that For Each is utilized to show things in the console or print it in the html, it's literally made to iterate and show results but if you want to create a new array map is the way to go