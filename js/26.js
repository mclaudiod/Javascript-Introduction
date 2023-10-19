// This

const reservation = {
    name: "Claudio",
    surname: "Morales",
    total: 5000,
    payed: false,
    information: function () {
        console.log(`The client ${this.name} ${this.surname} has made a reservation and their total to pay is ${this.total}$.`);
    }
}

reservation.information();

// The difference between function and the arrow function is that the function can make reference to a propierty of a given object while the arrow function always makes reference to a variable from the window