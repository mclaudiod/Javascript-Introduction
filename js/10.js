// Objects

const product = {
    productName : "20\" Monitor",
    price : 300,
    available : true,
}

console.log(product);

console.log(product.price);

console.log(product["price"]);

// Add new properties
product.image = "image.jpg";

// Delete properties
delete product.available;

console.log(product);