let checkboxData = [
  {
    name: "Introduction",
    select: false,
    id: 1,
  },
  {
    name: "Information architecture",
    select: false,
    id: 2,
  },
  {
    name: "Data and Security",
    select: false,
    id: 3,
  },
];

const curriculumWrapper = document.querySelector(".curriculum--wrapper");

function populateCurriculum() {
  curriculumWrapper.innerHTML = checkboxData
    .map((item) => {
      let { name, id } = item;
      return `
      <div class="curriculum">
       <input type="checkbox"  id="checkbox${id}" />  
          <label class="label--checkbox" for="checkbox${id}"
            ><i class="fas fa-check"></i
          ></label>
          <div class="info">
            <h3>Chapter ${id}</h3>
            <p>${name}</p>
          </div>
        </div>
`;
    })
    .join("");
}

populateCurriculum();

const curriculums = document.querySelectorAll(".curriculum");
// console.log(curriculums);

curriculums.forEach((curriculum) => {
  curriculum.addEventListener("click", () => {
    const input = curriculum.querySelector("input");
    if (input.checked) {
      curriculum.classList.add("active");
    } else {
      curriculum.classList.remove("active");
    }
  });
});
