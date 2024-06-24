const hamburger = document.querySelector("header #hamburger");
const dropdownMenu = document.getElementById("dropdownMenu");
const nav = document.querySelector("nav");

// dropdown hamburger menu
hamburger.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
  if (hamburger.classList.contains("fa-bars")) {
    hamburger.classList.remove("fa-bars");
    hamburger.classList.add("fa-xmark");
  } else {
    hamburger.classList.remove("fa-xmark");
    hamburger.classList.add("fa-bars");
  }
});
