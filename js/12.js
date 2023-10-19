// "use strict"; // Run JavaScript in strict mode
// Objects

const product = {
    productName : "20\" Monitor",
    price : 300,
    available : true,
}

Object.seal(product); // .freeze (You cannot add nor modify properties of an object) .seal (You cannot add properties)

product.image = "image.jpg";

product.price = "NEW PRICE";

delete product.price;

console.log(product);