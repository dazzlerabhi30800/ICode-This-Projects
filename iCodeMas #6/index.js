const cartData = [
    {
        name: "Christmas Tree Decoration",
        img: "https://github.com/dazzlerabhi30800/assets-for-coding/blob/main/ICodeThis/ICodeMas%20%236/christmas-tree.png?raw=true",
        price: 19.99,
        new: true,
        stock: true,
    },

    {
        name: "Gift Box",
        img: "https://github.com/dazzlerabhi30800/assets-for-coding/blob/main/ICodeThis/ICodeMas%20%236/gift-box.png?raw=true",
        price: 9.99,
        new: false,
        actual: 12.99,
        discount: 23
    },

    {
        name: "Gingerbread Man Cookie",
        img: "https://github.com/dazzlerabhi30800/assets-for-coding/blob/main/ICodeThis/ICodeMas%20%236/man-cookie.png?raw=true",
        price: 12.99,
        new: false,
        stock: true,
    },
    {
        name: "Snowflake Decoration",
        img: "https://github.com/dazzlerabhi30800/assets-for-coding/blob/main/ICodeThis/ICodeMas%20%236/snowflake.png?raw=true",
        price: 4.99,
        new: false,
    },
    {
        name: "Star-shaped Cookie",
        img: "https://github.com/dazzlerabhi30800/assets-for-coding/blob/main/ICodeThis/ICodeMas%20%236/star-cookie.png?raw=true",
        price: 12.99,
        new: false,
    },

    {
        name: "Santa's Hat",
        img: "https://github.com/dazzlerabhi30800/assets-for-coding/blob/main/ICodeThis/ICodeMas%20%236/santa-hat.png?raw=true",
        price: 39.99,
        new: false,
    },

    {
        name: "Candy Cane",
        img: "https://github.com/dazzlerabhi30800/assets-for-coding/blob/main/ICodeThis/ICodeMas%20%236/candy-cane.png?raw=true",
        price: 8.99,
        new: false,
    },
    {
        name: "Snowman Decoration",
        img: "https://github.com/dazzlerabhi30800/assets-for-coding/blob/main/ICodeThis/ICodeMas%20%236/snowman.png?raw=true",
        price: 39.99,
        new: false,
    },
    {
        name: "Christmas Ball",
        img: "https://github.com/dazzlerabhi30800/assets-for-coding/blob/main/ICodeThis/ICodeMas%20%236/christmas-ball.png?raw=true",
        price: 4.99,
        new: false,
    },
    {
        name: "Christmas Red Socks",
        img: "https://github.com/dazzlerabhi30800/assets-for-coding/blob/main/ICodeThis/ICodeMas%20%236/red-socks.png?raw=true",
        price: 29.99,
        new: false,
    },
    {
        name: "Red Ribbon",
        img: "https://github.com/dazzlerabhi30800/assets-for-coding/blob/main/ICodeThis/ICodeMas%20%236/red-ribbon.png?raw=true",
        price: 3.99,
        new: false,
    },
    {
        name: "Christmas Tree Cookie",
        img: "https://github.com/dazzlerabhi30800/assets-for-coding/blob/main/ICodeThis/ICodeMas%20%236/tree-cookie.png?raw=true",
        price: 13.99,
        new: false,
    },
]
const main = document.querySelector('main');


main.innerHTML = cartData.map((item, index) => {
    let { name, img, price, stock, discount, actual } = item;
    return (
        `
    <div class="item">
            <div class="img--container">
                <img class="product--img"
                    src=${img}
                    alt=${name} />
                ${stock ? `<button class="add--cart--btn">Add to Cart ${item.new ? `<i class="fas fa-cart-shopping">` : ""}</i></button>` : ""}
                ${discount ? `<span class="badge discount">-${item.discount}%</span>` : ""}
                ${item.new ? `<span class="badge new">new</span>` : ""}
            </div>
            <div class="product--info">
                <h1>${name}</h1>
                <div class="price">
                    <p>$${price}</p>
                    ${actual ? `<span class="actual--price">$${actual}</span>` : ""}
                </div >
            </div >
        </div >
    `
    )
}).join("")