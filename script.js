const text = "Junior Full Stack Developer passionate about building modern web applications";
const element = document.getElementById("typed-text");
let index = 0;

function typeWriter() {
    if (index < text.length) {
        element.textContent += text[index];
        index++;
        setTimeout(typeWriter, 50);
    }
}

typeWriter();

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let valid = true;

    if (name === "") {
        document.getElementById("name-error").textContent = "Name is required";
        valid = false;
    } else {
        document.getElementById("name-error").textContent = "";
    }

    if (email === "") { 
        document.getElementById("email-error").textContent = "Email is required";
        valid = false;
    } else if (!email.includes("@")) {
        document.getElementById("email-error").textContent = "Enter a valid email";
        valid = false;
    } else {
        document.getElementById("email-error").textContent = "";
    }

    if (message === "") {
        document.getElementById("message-error").textContent = "Message is required";
        valid = false;
    } else {
        document.getElementById("message-error").textContent = "";
    }

    if (valid) {
        document.getElementById("success-msg").textContent = "✅ Message sent successfully!";
        document.getElementById("contact-form").reset();
    }
});