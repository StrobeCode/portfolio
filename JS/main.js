// JavaScript for the Hamburger Menu
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
});
