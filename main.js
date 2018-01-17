const navbutton = document.getElementById("navbutton");
const navbar = document.getElementById("navbar");

navbutton.addEventListener("click", () => {
  if(navbar.style.display === "none") navbar.style.display = "block";
  else navbar.style.display = "none";
});

window.addEventListener("resize", () => {
});