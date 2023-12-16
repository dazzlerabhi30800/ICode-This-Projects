const main = document.querySelector("main");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let pageCount = 1;
let currentPage = 1;
let pageIndex = 5 * pageCount;
let lastPage = 16;

function populateArr() {
  main.innerHTML = Array(16)
    .fill(6)
    .map((_, index) => {
      if (
        index + 1 === currentPage ||
        index + 1 === currentPage - 1 ||
        index + 1 === currentPage + 1 ||
        index + 1 === lastPage
      ) {
        return `
        <button onclick="handleActive(${
          index + 1
        })" style="display: block" class=${
          currentPage === index + 1 ? "active" : "page"
        }>${index + 1}</button>
        ${
          index + 1 === currentPage + 1 &&
          index + 1 !== lastPage &&
          index + 1 !== lastPage - 1
            ? "..."
            : currentPage === lastPage - 2 && index + 1 === lastPage - 2
              ? "..."
              : ""
        }
      `;
      }
      return `
      <button style="display: none" class="page">${index + 1}</button>
      `;
    })
    .join("");
}

populateArr();

function handleActive(page) {
  currentPage = parseInt(page);
  populateArr();
}

prevBtn.addEventListener("click", () => {
  currentPage = currentPage - 1 <= 1 ? 1 : currentPage - 1;
  populateArr();
});

nextBtn.addEventListener("click", () => {
  currentPage = currentPage + 1 >= 16 ? 16 : currentPage + 1;
  populateArr();
});
