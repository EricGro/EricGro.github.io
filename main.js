const navbutton = document.getElementById("navbutton");
const navbar = document.getElementById("navbar");

navbutton.addEventListener("click", () => {
  alert(navbar.style.display);
});

window.addEventListener("resize", () => {
});
