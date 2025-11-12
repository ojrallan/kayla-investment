let toggleBtn = document.getElementById("nav-toggle");
let toggleIcon = document.getElementById("toggle-icon");

let slideMenu = document.getElementById("slide-menu");

console.log(toggleIcon.getAttribute("src"));

console.log(toggleBtn.classList);

window.addEventListener("scroll", () => {
  closeSlide();
  closeModal();
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

const carImages = {
  blackcxv: [
    "/images/cars/cxv-black-front.jpg",
    "/images/cars/cxv-black-rear.jpg",
    "/images/cars/cxv-black-interior.jpg",
    "/images/cars/cxv-black-interior-2.jpg",
  ],
  stoneFielder: [
    "/images/cars/fielder-stone-front.jpg",
    "/images/cars/fielder-stone-front-2.jpg",
    "/images/cars/fielder-stone-rear.jpg",
  ],
  whiteForester: [
    "/images/cars/forester-white-front-2.jpg",
    "/images/cars/forester-white-interior.jpg",
    "/images/cars/forester-white-rear.jpg",
  ],
  redcxv: [
    "/images/cars/cxv-red-front-2.jpg",
    "/images/cars/cxv-red-interior.jpg",
    "/images/cars/cxv-red-front.jpg",
    "/images/cars/cxv-red-rear.jpg",
  ],
  blackForester: [
    "/images/cars/forester-black-front.jpg",
    "/images/cars/forester-black-interior.jpg",
  ],
  greenForester: [
    "/images/cars/forester-green-front-2.jpg",
    "/images/cars/forester-green-back.jpg",
    "/images/cars/forester-green-interior.jpg",
    "/images/cars/forester-green-rear.jpg",
  ],
  blackNoah: [
    "/images/cars/noah-black-front.jpg",
    "/images/cars/noah-black-interior.jpg",
    "/images/cars/noah-black-rear-2.jpg",
  ],
};

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.getElementById("closeBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentMake = null;
let currentIndex = 0;

// 🔘 View Images button click
const viewButtons = document.querySelectorAll(".view-images-btn");

viewButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentMake = btn.dataset.make;
    currentIndex = 0;
    openModal();
  });
});

function openModal() {
  modal.classList.remove("hidden");
  updateModalImage();
}

function closeModal() {
  modal.classList.add("hidden");
}

function updateModalImage() {
  const images = carImages[currentMake];
  modalImg.src = images[currentIndex];
}

function nextImage() {
  const images = carImages[currentMake];
  currentIndex = (currentIndex + 1) % images.length;
  updateModalImage();
}

function prevImage() {
  const images = carImages[currentMake];
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateModalImage();
}

// 🎛️ Event listeners
closeBtn.addEventListener("click", closeModal);
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

// Close when clicking outside
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// 🖐️ Swipe support for mobile
let startX = 0;
modalImg.addEventListener("touchstart", (e) => (startX = e.touches[0].clientX));
modalImg.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) nextImage(); // swipe left
  else if (endX - startX > 50) prevImage(); // swipe right
});

// ⌨️ Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (modal.classList.contains("hidden")) return;
  if (e.key === "ArrowRight") nextImage();
  if (e.key === "ArrowLeft") prevImage();
  if (e.key === "Escape") closeModal();
});
