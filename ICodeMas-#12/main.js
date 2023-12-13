const articleData = [
  {
    title: "Free Shipping",
    desc: "Free Shipping on all orders over $19.99",
    img: "https://icodethis.com/images/iCodeMas/free_shipping.png",
  },
  {
    title: "Money back guaranted",
    desc: "Within 30 days of purchase",
    img: "https://icodethis.com/images/iCodeMas/money_back.png",
  },
  {
    title: "Online Support",
    desc: "Our online support is here for you.",
    img: "https://icodethis.com/images/iCodeMas/online_support.png",
  },
];

const mainWrapper = document.querySelector("main");

mainWrapper.innerHTML = articleData
  .map(
    (item) =>
      `
  <article class="item">
    <img src=${item.img} alt=${item.title} />
    <div class="info">
      <h1>${item.title}</h1>
      <p>${item.desc}</p>
    </div>
  </article>
`,
  )
  .join("");
