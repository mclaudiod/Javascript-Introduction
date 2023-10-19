// Async / Await

function downloadNewClients() {
    return new Promise(resolve => {
        console.log("Downloading new clients, please wait...");

        setTimeout( () => {
            resolve("The clients have been downloaded.");
        }, 5000);
    });
}

function downloadLastOrders() {
    return new Promise(resolve => {
        console.log("Downloading last orders, please wait...");

        setTimeout( () => {
            resolve("The orders have been downloaded.");
        }, 5000);
    });
}

async function app() {
    try {
        // const clients = await downloadNewClients();
        // const orders = await downloadLastOrders();
        // console.log(clients);
        // console.log(orders);

        const result = await Promise.all([downloadNewClients(), downloadLastOrders()]);
        console.log(result[0]);
        console.log(result[1]);
    } catch (error) {
        console.log(error);
    }
}

app();