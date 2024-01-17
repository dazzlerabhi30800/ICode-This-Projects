const projects = [
  {
    logo: "M",
    title: "Marketing",
    classname: "one",
  },
  {
    logo: "FL",
    title: "Feature lists",
    classname: "two",
  },
  {
    logo: "bd",
    title: "boardme development",
    classname: "three",
  },
  {
    logo: "Ud",
    title: "UIDD development",
    classname: "four",
  },
];
const projectWrapper = document.querySelector(".projects--wrapper");

projectWrapper.innerHTML = projects
  .map((project) => {
    return `
<div class="project flex flex-col gap-3 text-center">
              <div
                class="project--icon ${project.classname} rounded-2xl text-[1rem] sm:text-p[1.3rem] md:text-[2.5rem] text-white font-bold"
              >
                ${project.logo}
              </div>
              <p class="text-xs font-medium">${project.title}</p>
            </div>
`;
  })
  .join("");

const addButton = `
<div class="project flex flex-col gap-3 text-center text-gray-500">
<div
class="project--icon add  rounded-2xl text-[1rem] sm:text-p[1.3rem] md:text-[2.5rem]  border border-gray-500 font-bold"
>
<i class="fas fa-plus"></i> 
</div>
<p class="text-xs font-medium">Add a project</p>
</div>
`;
projectWrapper.insertAdjacentHTML("beforeend", addButton);
