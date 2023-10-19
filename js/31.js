// Notifications

const button = document.querySelector("#button");

button.addEventListener("click", () => {
    Notification.requestPermission()
        .then(result => console.log("The result is:", result));
});

if (Notification.permission == "granted") {
    new Notification("This is a Notification", {
        //icon: "img/ccj.png",
        body: "This is the text of the Notification"
    })
};