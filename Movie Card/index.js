const movieInfoWrapper = document.querySelector(".movie--info");

const movieData = [
  {
    title: "Actors",
    target: "actor",
    names: [
      "Oscar Isaac",
      "Mark Hamil",
      "Daisy Ridley",
      "John Boyega",
      "Kelly Marie Tran",
    ],
  },
  {
    title: "Director",
    target: "director",
    names: ["Rion Johnson"],
  },
  {
    title: "ScreenWriter",
    target: "screenwriter",
    names: ["Rion Johnson"],
  },
  {
    title: "Producers",
    target: "producer",
    names: ["Kathleen Kennedy Johnson", "Ram Bergman"],
  },
];

movieInfoWrapper.innerHTML = movieData
  .map(
    (info) =>
      `
    <div class="movie--container ${info.target}">
    <h3>${info.title}</h3>
    <ul>
    ${info.names.map((name) => `<li>${name}</li>`).join("")}
    </ul>
   </div> 
    `
  )
  .join("");

function f(x) {
  x = "x-" + x;
  return function (y) {
    y = "y-" + x;
    return function (z) {
      return "z-" + y;
    };
  };
}

let g = f("a")("b")("c");
console.log(g);
