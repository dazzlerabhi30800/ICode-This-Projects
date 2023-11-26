const playerSlider = document.getElementById("slider");
const tracks = document.querySelector(".tracks");
const currentTime = document.querySelector(".current-time");
let totalDuration = 198;
console.log(currentTime);

playerSlider.oninput = function (e) {
  const target = e.currentTarget;
  const value = target.value;
  const max = target.max;

  let totalTime = Math.floor((totalDuration * value) / max);
  let seconds = Math.floor(totalTime % 60);
  let minutes = Math.floor(totalTime / 60);
  const backgroundPercent = (value / max) * 100;

  playerSlider.style.backgroundSize = `${backgroundPercent}% 100%`;
  currentTime.textContent = `${minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

const trackData = [
  {
    name: "Circles",
    duration: "04:13",
  },
  {
    name: "Wolves",
    duration: "03:45",
  },
  {
    name: "Intentions",
    duration: "03:50",
  },

  {
    name: "Yummy",
    duration: "03:35",
  },

  {
    name: "Needs",
    duration: "02:57",
  },

  {
    name: "Say So",
    duration: "02:58",
  },
];

tracks.innerHTML = trackData
  .map((data) => {
    return `
    <div
            class="track flex justify-between items-center border-b border-gray-400"
          >
            <p>${data.name}</p>
            <span>${data.duration}</span>
          </div>
    `;
  })
  .join("");
