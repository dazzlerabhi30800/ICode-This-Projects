let itemData = [
  {
    name: "Gingerbread Man Cookie",
    price: 12.99,
  },
  {
    name: "Star-shaped Cookie",
    price: 12.99,
  },
  {
    name: "Christmas Tree Cookie",
    price: 13.99,
  },
  {
    name: "Chocolate Chip Cookie",
    price: 11.99,
  },
  {
    name: "Oatmeal Raisin Cookie",
    price: 14.99,
  },
];
const itemsWrapper = document.querySelector(".items--wrapper");
const searchString = document.getElementById("search--input");
const quantity = document.querySelector(".quantity");

const populateItems = (data) => {
  itemsWrapper.innerHTML = data
    .map((item) => {
      return `
        <div class="item">
            <div class="item--info">
            <span class="block"></span>
            <p class="name">${item.name}</p>
            </div>
            <span class="price">$${item.price}</span>
          </div>
            `;
    })
    .join("");
  quantity.textContent = data.length;
};
populateItems(itemData);

searchString.oninput = (e) => {
  const { value } = e.target;
  const filteredData = itemData.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase()),
  );
  populateItems(filteredData);
};

document.querySelector("form").onsubmit = (e) => {
  e.preventDefault();
};
