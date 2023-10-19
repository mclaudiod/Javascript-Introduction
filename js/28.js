// Classes

class Product {
    constructor(name, price, available) {
        this.name = name;
        this.price = price;
        this.available = available;
    }

    formatProduct() {
        return `The product ${this.name} has a price of $ ${this.price}`;
    }
}

const product2 = new Product("Curved Monitor 48'", 800, true);
const product3 = new Product("Laptop", 300, false);
const product4 = new Product("Gamer Keyboard", 50, true);
const product5 = new Product("Gamer Mouse", 40, false);

console.log(product2, product3, product4, product5);

console.log(product2.formatProduct());
console.log(product3.formatProduct());
console.log(product4.formatProduct());
console.log(product5.formatProduct());

// Inheritance

class Book extends Product {
    constructor (name, price, isbn) {
        super(name, price);
        this.isbn = isbn;
    }

    formatProduct() {
        return `${super.formatProduct()} and it's ISBN is ${this.isbn}`;
    }
}

const book = new Book("The Revolution of JavaScript", 120, "4554465465756752");

console.log(book.formatProduct());