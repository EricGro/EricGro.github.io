const navbutton = document.getElementById("navbutton");
const navbar = document.getElementById("navbar");
navbar.style.display = "none";

const modals = document.getElementsByClassName("mdl");
const modalBox = document.getElementsByClassName("modal")[0];
const modalImage = document.getElementById("mImg");
const modalClose = document.getElementById("close");
modalBox.style.display = "none";

const testText = document.getElementById("tt");

navbutton.addEventListener("click", (event) => {
  const e = event.currentTarget;
  navbar.style.display === "none" ? navbar.style.display = "block" : navbar.style.display = "none";
  console.log(getComputedStyle(e, null).display + " : " + e.nodeName);
}, false);

Array.prototype.forEach.call(modals, function(element) {
  element.addEventListener("click", (event) => {
    modalImage.src = event.currentTarget.src;
    modalBox.style.display = "block";
  })
});

modalClose.addEventListener("click", (event) => {
  const e = event.currentTarget;
  modalBox.style.display = "none";
  console.log(getComputedStyle(e, null).display + " : " + e.nodeName);
}, false);

window.addEventListener("resize", () => {
  console.log(testText.innerHTML);
});