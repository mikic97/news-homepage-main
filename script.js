"use strict";

const menu = document.querySelector(".menu");
const links = document.querySelector(".links");
const closeImage = document.querySelector(".close_image");

menu.addEventListener("click", function () {
  links.classList.remove("links");
  links.classList.add("modal_window", "links1");
  closeImage.classList.add("close_menu");
});
if (menu.style.display === "none") {
  menu.style.display = "block";
}

closeImage.addEventListener("click", function () {
  links.classList.add("links");
  links.classList.remove("modal_window", "links1");
  closeImage.classList.remove("close_menu");

  if (menu.style.display === "block") {
    menu.style.display = "none";
  }
});
