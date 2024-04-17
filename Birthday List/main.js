const birthdayData = [
  {
    name: "Bertie Yates",
    age: "29 years",
    image: "https://randomuser.me/api/portraits/women/81.jpg",
  },
  {
    name: "Hester Hogan",
    age: "32 years",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    name: "Larry Little",
    age: "36 years",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },

  {
    name: "Sean Walsh",
    age: "34 years",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Lala Gardner",
    age: "29 years",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
  },
];

const birthdayContainer = document.querySelector(".birthday--container");

birthdayContainer.innerHTML = birthdayData
  .map(
    (data) =>
      `
<div class="flex gap-3 items-center">
          <img
            src=${data.image}
            class="w-[60px] h-[60px] rounded-[50%] object-cover drop-shadow-lg"
            alt=${data.name}
          />
          <div class="flex flex-col">
            <h2 class="font-semibold text-base">${data.name}</h2>
            <p class="text-gray-500 font-medium">${data.age}</p>
          </div>
        </div>
  `
  )
  .join("");
