// Functions that return values

let total = 0

function addCart(price) {
    return total += price;
}

function addTaxes(total) {
    return 1.15 * total;
}

total = addCart(200);
total = addCart(400);
total = addCart(600);

console.log(total);

const finalTotal = addTaxes(total);

console.log(`The final total to pay with taxis is: $${finalTotal}`);