// For Loop

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(`The number ${i} is even.`)
    } else {
        console.log(`The number ${i} is odd.`)
    }
}

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

for (let i = 0; i < cart.length; i++) {
    console.log(cart[i]);
}

// While Loop

let i = 1; // Index

while (i <= 10) { // Condition
    console.log(i);
    i++; // Increment
}

i = 1;

while (i <= 100) {
    if (i % 2 === 0) {
        console.log(`The number ${i} is even.`);
    } else {
        console.log(`The number ${i} is odd.`);
    }
    i++;
}

i = 0;

while (i < cart.length) {
    console.log(cart[i]);
    i++;
}

// Do While Loop

i = 1;

do {
    console.log(i);
    i++;
} while (i <= 10);

// The difference between While and Do While is that While doesn't execude the code if the conditions are not met but Do While does it at least once because the condition for it is at the end