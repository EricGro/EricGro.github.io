const navbutton = document.getElementById("navbutton");
const navbar = document.getElementById("navbar");
navbar.style.display = "none";

navbutton.addEventListener("click", () => {
  navbar.style.display === "none" ? navbar.style.display = "block" : navbar.style.display = "none";
});

window.addEventListener("resize", () => {
});