
// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

    menuBtn.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("open");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // ADD HERE: Apne bhai ka asli email address likhein
    const ownerEmail = "YOUR_EMAIL@gmail.com";

    const subject = encodeURIComponent("Portfolio Contact - " + name);

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\nMessage: " + message
    );

    window.location.href =
        "mailto:" + ownerEmail +
        "?subject=" + subject +
        "&body=" + body;
});

// Automatic Copyright Year
document.getElementById("year").textContent =
    new Date().getFullYear();
