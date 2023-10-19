// POO

// Object Literal
const product = {
    name: "Tablet",
    price: 500,
}

// Object Constructor

function Product(name, price, available) {
    this.name = name;
    this.price = price;
    this.available = available;
}

// Create functions that are only utilized in an specific object.
Product.prototype.formatProduct = function () {
    return `The product ${this.name} has a price of $ ${this.price}.`;
}

function Client(name, surname) {
    this.name = name;
    this.surname = surname;
}

Client.prototype.formatClient = function () {
    return `The name of the client is: ${this.name} ${this.surname}.`;
}

const product2 = new Product("Curved Monitor 48'", 800, true);
const product3 = new Product("Laptop", 300, false);
const product4 = new Product("Gamer Keyboard", 50, true);
const product5 = new Product("Gamer Mouse", 40, false);

const client = new Client("Claudio", "Morales");

console.log(product2, product3, product4, product5);

console.log(product2.formatProduct());
console.log(product3.formatProduct());
console.log(product4.formatProduct());
console.log(product5.formatProduct());
console.log(client.formatClient());

// The class name have to always start in mayus.
