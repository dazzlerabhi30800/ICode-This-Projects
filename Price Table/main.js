const mainData = [
  {
    title: "Free",
    price: "$0",
    tagline: "Free for your whole team",
    usedFor: "For individuals or teams looking to organize anything.",
    buttonText: "Get Started",
    buttonColor: "bg-pink-300",
  },
  {
    title: "Standard",
    price: "$6",
    tagline: "Per user per month",
    usedFor: "For teams that need to manage more work.",
    buttonText: "Upgrade Now",
    buttonColor: "bg-teal-300",
  },
  {
    title: "Premium",
    price: "$12",
    tagline: "Per user per month",
    usedFor: "Best for teams that need to track multiple projects.",
    buttonText: "Try for free",
    buttonColor: "bg-yellow-300",
  },
];

const mainWrapper = document.querySelector("main");

mainWrapper.innerHTML = mainData
  .map((data) => {
    let { title, price, tagline, usedFor, buttonText, buttonColor } = data;
    return `
<div class="flex flex-col gap-2 p-6">
        <p class="text-black font-medium text-lg">${title}</p>
        <h1 class="text-4xl font-bold">${price}</h1>
        <small class="text-base font-medium">${tagline}</small>
        <h2 class="my-6 font-semibold">${usedFor}</h2>
        <button class="w-fit py-3 px-8 ${buttonColor} font-medium text-lg rounded-md shadow-md transition ease-in-out duration-300 hover:brightness-90">${buttonText}</button>
      </div>
    `;
  })
  .join("");
