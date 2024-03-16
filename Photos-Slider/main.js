const galleryWrapper = document.querySelector(".gallery--wrapper");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const galleryContainer = document.querySelector(".gallery--container");

const imageData = [
  "https://images.unsplash.com/photo-1706820643404-71812d9d7d3a?q=80&w=2129&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1710421871838-029427bed6b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682687982049-b3d433368cd1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1705374464124-42c35f96da9f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1705385343724-45fd07735547?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682687220198-88e9bdea9931?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

function populateGallery() {
  galleryContainer.innerHTML = imageData
    .map(
      (img, index) =>
        `
    <img src=${img} alt="image-${index + 1}" />
    `
    )
    .join("");
}
document.addEventListener("DOMContentLoaded", () => {
  populateGallery();
});

prevBtn.onclick = () => handleScroll(-1);
nextBtn.onclick = () => handleScroll(1);

function handleScroll(dir) {
  if (dir === 1) {
    galleryContainer.scrollLeft += 100;
  } else {
    galleryContainer.scrollLeft -= 100;
  }
  handleButton();
}

function handleButton() {
  const totalWidth =
    galleryContainer.scrollWidth - galleryContainer.offsetWidth;
  if (galleryContainer.scrollLeft === 0) {
    prevBtn.disabled = true;
    nextBtn.disabled = false;
  } else if (galleryContainer.scrollLeft >= totalWidth) {
    prevBtn.disabled = false;
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}

window.addEventListener("load", () => {
  setTimeout(() => {
    handleButton();
  }, 200);
});
