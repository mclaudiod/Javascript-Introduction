// Promises

const authenticatedUser = new Promise ( (resolve, reject) => {
    const auth = true;

    if (auth) {
        resolve("Authenticated User"); // The promise is fulfilled
    } else {
        reject("Failed to login"); // The promise is not fulfilled
    }
});

authenticatedUser
    .then (function (result) {
        console.log(result);
    })
    .catch (function (error) {
        console.log(error);
    });

// In promises exist three values
// Fulfilled : The promise is fulfilled
// Pending : The promise is neither fulfilled nor rejected
// Reject : The promise is rejected