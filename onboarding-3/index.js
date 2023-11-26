

const cardData = [
    {
        img: "https://raw.githubusercontent.com/dazzlerabhi30800/assets-for-coding/df89bf7f80961e3f2c20ecb35d7297fc0defc6b0/connect.svg",
        title: "Connect multiple accounts",
        about: "Stay connected to any platform you are used to, Starting from Twitter, instagram, Slack or whatever.",
        form: true,
    },
    {
        img: "https://raw.githubusercontent.com/dazzlerabhi30800/assets-for-coding/df89bf7f80961e3f2c20ecb35d7297fc0defc6b0/messaging.svg",
        title: "Smart messaging system",
        about: "View your messages without leaving the video you currently watched",
        form: true,
    },
    {
        img: "https://raw.githubusercontent.com/dazzlerabhi30800/assets-for-coding/df89bf7f80961e3f2c20ecb35d7297fc0defc6b0/data-analysis.svg",
        title: "Instand data analysis",
        about: "View and analyse all your activities grouped systematically for you to get conclusions",
        form: false,
    }
]

const main = document.querySelector('main');




// Event Listener


main.innerHTML = cardData.map(card => {
    let { img, title, about, form } = card;
    return `
    <div class="card">
    <img src=${img} alt=${title} >
    <h1>${title}</h1>
    <p>${about}</p>
    ${form ?
            `
        <form onsubmit="handleSubmit(event);">
        <input type="text" placeholder="Skip">
        <button class="btn"><i class="fas fa-arrow-right"></i></button>
        </form>
        `
            :
            `
        <button class="btn started">Get Started<i class="fas fa-arrow-right"></i></button>
        
        `
        }
    </div>
    `
}).join('');


function handleSubmit(event) {
    event.preventDefault();
}

