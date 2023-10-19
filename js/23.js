// Switch

const paymentMethod = "cash";

switch (paymentMethod) {
    case "credit card":
        console.log("You made the payment with credit card.");
        break;
    case "cheque":
        console.log("You will make the payment with a cheque, we have to verify the funds before.");
        break;
    case "cash":
        console.log("You made the payment with cahs.");
        break;
    default:
        console.log("You haven't made the payment yet.");
        break;
}