const productData = [
    {
        img: "https://images.unsplash.com/photo-1459156212016-c812468e2115?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Plants",
    },
    {
        img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Desserts",
    },
    {
        img: "https://images.unsplash.com/photo-1617048931430-5eb626d81e71?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Accessories",
    },
];

const productContainer = document.querySelector(".product--container");

productContainer.innerHTML = productData.map((product) => {
    let { title, img } = product;
    return `
      <div class="product">
            <img
              src=${img}
              alt=${title}
            />
            <h2>${title}</h2>
            <button class="select--btn">Select</button>
          </div>

`;
}).join('');


const products = document.querySelectorAll('.product');

products.forEach(product => {
    product.addEventListener('click', () => {
        products.forEach(product => product.classList.remove('active'));
        product.classList.add('active');
    })
})
