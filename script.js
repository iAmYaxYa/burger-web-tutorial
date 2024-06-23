const navbarLinks = document.querySelector(".navbar .links");
const toggleMenuBtn = document.querySelector(".navbar .toggle-menu-btn");
const toggleMenuIcon = document.querySelector(".navbar .toggle-menu-btn i");
const navbarLinkItems = document.querySelectorAll(".navbar .links li a");

// TOGGLE LINKS
const toggleLinks = () => {
  navbarLinks.classList.toggle("show");
  toggleMenuIcon.classList.toggle("fa-xmark");
};

toggleMenuBtn.addEventListener("click", toggleLinks);

// NAVBAR LINK ITEMS
navbarLinkItems.forEach((link) => {
  link.addEventListener("click", toggleLinks);
});

// INITIALIZE AOS
AOS.init();