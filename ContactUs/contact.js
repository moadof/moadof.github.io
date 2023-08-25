document.getElementById("contactForm").addEventListener("submit", function (event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !subject || !message) {
        alert("All fields are required.");
        event.preventDefault();
        return;
    }
});
