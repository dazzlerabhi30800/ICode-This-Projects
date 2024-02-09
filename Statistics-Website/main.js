const cardData = [
    {
        title: "Price calculator",
        desc: "How much does 1 Eur in 1963 equal in today's time? Adjust the rent?",
        classname: "one",
    },
    {
        title: "Name Stastics",
        desc: "How much does 1 Eur in 1963 equal in today's time? Adjust the rent?",
        classname: "two",
    },
    {
        title: "Stats Table",
        desc: "Find detailed tables with time and create your own",
        classname: "three",
    },
];

const featureData = [
    {
        title: "Calendar",
        desc: "see then advance release of calendars in 2021",
        link: "Go to calendar",
    },
    {
        title: "Subscribe to news",
        desc: "Get the latest statistics releases and publications by e-mail",
        link: "Receive e-mail alerts",
    },
    {
        title: "API",
        desc: "Easily retrieve and integrate Statistics with your own system",
        link: "Open API",
    },
];

const cardWrapper = document.querySelector(".card--wrapper");
const featureWrapper = document.querySelector(".features--wrapper");

cardWrapper.innerHTML = cardData
    .map((item) => {
        let { title, desc, classname } = item;
        return `
<div class="card ${classname}">
          <h2>${title}</h2>
          <p>
            ${desc}
          </p>
          <button class="btn">Calculate price changes? <i class="fas fa-chevron-right"></i> </button>
        </div>

`;
    })
    .join("");

featureWrapper.innerHTML = featureData
    .map((item) => {
        let { title, desc, link } = item;
        return `
<div class="feature">
          <h2>${title}</h2>
          <p>${desc}</p>
          <a href="javascript:;">${link}</a>
        </div>
`;
    })
    .join("");
