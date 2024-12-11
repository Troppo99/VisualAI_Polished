// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-report"); // Sesuaikan ID

hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik untuk hide sidebar
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});