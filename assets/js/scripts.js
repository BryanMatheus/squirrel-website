const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");
const navbar = document.querySelector(".navbar");

toggleButton.addEventListener("click", function () {
  navbarLinks.classList.toggle("active");
});

