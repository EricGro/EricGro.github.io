const navbutton = document.getElementById("navbutton");
const navbar = document.getElementById("navbar");
navbar.style.display = "none";

navbutton.addEventListener("click", () => {
  if(navbar.style.display === "none") navbar.style.display = "block";
  else navbar.style.display = "none";
});

window.addEventListener("resize", () => {
});