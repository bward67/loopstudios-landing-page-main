const navMobileMenu = document.querySelector(".nav-mobile-menu");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");

hamburgerIcon.addEventListener("click", () => {
  navMobileMenu.classList.toggle("show");
  hamburgerIcon.classList.add("no-show");
});

closeIcon.addEventListener("click", () => {
  navMobileMenu.classList.remove("show");
  hamburgerIcon.classList.remove("no-show");
});
