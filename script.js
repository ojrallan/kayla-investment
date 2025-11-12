let toggleBtn = document.getElementById("nav-toggle");
let toggleIcon = document.getElementById("toggle-icon");

let slideMenu = document.getElementById("slide-menu");

console.log(toggleIcon.getAttribute("src"));

console.log(toggleBtn.classList);

window.addEventListener("scroll", () => {
  closeSlide();
});

toggleBtn.addEventListener("click", () => {
  if (toggleIcon.getAttribute("src") === "/images/hamb-menu2.png") {
    openSlide();
  } else {
    closeSlide();
  }
});

function openSlide() {
  toggleIcon.setAttribute("src", "/images/cross.png");
  slideMenu.classList.remove("hidden");
  setTimeout(() => slideMenu.classList.add("opacity-100"), 10);
}

function closeSlide() {
  toggleIcon.setAttribute("src", "/images/hamb-menu2.png");
  slideMenu.classList.add("hidden");
  slideMenu.classList.remove("opacity-100");
}
