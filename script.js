// burger

let burgerBtn = document.querySelector(".burger");
let xMark = document.querySelector(".xMark");
let mobileMenu = document.querySelector(".mobile_menu");

burgerBtn.addEventListener("click", () => {
  xMark.style.display = "block";
  burgerBtn.style.display = "none";
  mobileMenu.style.left = "0";
});

xMark.addEventListener("click", () => {
  burgerBtn.style.display = "block";
  xMark.style.display = "none";
  mobileMenu.style.left = "-100%";
});

// cards hover

let cardHover = document.querySelector(".cards2_hover");
let figure = document.querySelector(".individualcards2");
let remowe = document.querySelector(".cards2_text");

figure.addEventListener("mouseenter", () => {
  remowe.style.display = "none";
  cardHover.style.display = "block";
});

figure.addEventListener("mouseleave", () => {
  remowe.style.display = "block";
  cardHover.style.display = "none";
});
