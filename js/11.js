// Objects

const product = {
    productName : "20\" Monitor",
    price : 300,
    available : true,
}

// Traditional way

const productPrice = product.price;
const productName = product.productName;

console.log(productPrice);
console.log(productName);

// Destructuring

const {price, productName} = product;

console.log(product);
console.log(productName);