const form = document.getElementById("contact-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

const formMessage = document.getElementById("form-message");


form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Clear old error messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formMessage.textContent = "";

    let isValid = true;


    // Check name
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }


    // Check email
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Please enter your email.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }


    // Check message
    const message = messageInput.value.trim();

    if (message === "") {
        messageError.textContent = "Please write a message.";
        isValid = false;
    } else if (message.length < 10) {
        messageError.textContent =
            "Please write at least 10 characters.";
        isValid = false;
    }


    if (isValid) {
        formMessage.textContent =
    "Your details are valid. Message sending will be connected before deployment.";


    }

});

const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");
const menuIcon = document.getElementById("menu-icon");

const navItems = document.querySelectorAll(".nav-links a");


menuButton.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("active");

    menuIcon.classList.toggle("fa-bars", !isOpen);
    menuIcon.classList.toggle("fa-xmark", isOpen);

    menuButton.setAttribute("aria-expanded", isOpen);

});


navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuIcon.classList.add("fa-bars");
        menuIcon.classList.remove("fa-xmark");

        menuButton.setAttribute("aria-expanded", "false");

    });

});