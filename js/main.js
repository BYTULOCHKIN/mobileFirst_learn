"use strict";

const burgerButton = document.querySelector(".nav-burger");
const navMenuSmall = document.querySelector(".nav-menu_small");
const windowWidth = document.documentElement.clientWidth;
const navLanguage = document.querySelector(".nav__language");

burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("active");
  navMenuSmall.classList.toggle("active");
});
