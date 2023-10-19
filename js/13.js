// Combine Objects

const product = {
    productName: "20\" Monitor",
    price: 300,
    available: true,
}

const measures = {
    weight: "1kg",
    measure: "1m",
}

const newProduct = {...product, ...measures};

console.log(product);
console.log(newProduct);