const navLinks = document.querySelectorAll('nav a');
const testimonialData = [
    {
        rating: 5,
        title: "The High Reelers",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id quam elementum, feugiat mi nec, ultrices nunc. Fusce magna tortor, bibendum ut nisl vitae, posuere congue ligula. Morbi sagittis porttitor vulputate. Curabitur rutrum sapien nec vulputate vulputate. Integer efficitur dui at leo rhoncus, ac aliquam quam placerat.",
    },

    {
        rating: 5,
        title: "Fellowship investments",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id quam elementum, feugiat mi nec, ultrices nunc. Fusce magna tortor, bibendum ut nisl vitae, posuere congue ligula. Morbi sagittis porttitor vulputate. Curabitur rutrum sapien nec vulputate vulputate. Integer efficitur dui at leo rhoncus, ac aliquam quam placerat.",
    },
    {
        rating: 3,
        title: "Fresh Start",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id quam elementum, feugiat mi nec, ultrices nunc. Fusce magna tortor, bibendum ut nisl vitae, posuere congue ligula. Morbi sagittis porttitor vulputate. Curabitur rutrum sapien nec vulputate vulputate. Integer efficitur dui at leo rhoncus, ac aliquam quam placerat.",
    },

    {
        rating: 4,
        title: "Libera",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id quam elementum, feugiat mi nec, ultrices nunc. Fusce magna tortor, bibendum ut nisl vitae, posuere congue ligula. Morbi sagittis porttitor vulputate. Curabitur rutrum sapien nec vulputate vulputate. Integer efficitur dui at leo rhoncus, ac aliquam quam placerat.",
    },

    {
        rating: 4,
        title: "McDade's",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id quam elementum, feugiat mi nec, ultrices nunc. Fusce magna tortor, bibendum ut nisl vitae, posuere congue ligula. Morbi sagittis porttitor vulputate. Curabitur rutrum sapien nec vulputate vulputate. Integer efficitur dui at leo rhoncus, ac aliquam quam placerat.",
    },

    {
        rating: 5,
        title: "Sherman's",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id quam elementum, feugiat mi nec, ultrices nunc. Fusce magna tortor, bibendum ut nisl vitae, posuere congue ligula. Morbi sagittis porttitor vulputate. Curabitur rutrum sapien nec vulputate vulputate. Integer efficitur dui at leo rhoncus, ac aliquam quam placerat.",
    },
]



const testimonialsWrapper = document.querySelector('.testimonials--wrapper');


testimonialsWrapper.innerHTML = testimonialData.map((data) => {
    return `
        <div class="testimonial">
            <div class="rating--wrapper">
            ${[...Array(5)].map((star, index) => {
        return `
                <span class=${(index + 1) <= data.rating ? "highlight star" : "star"} >&#x2605;</span>
                `
    }).join('')}
            </div>
            <h1>${data.title}</h1>
            <p class="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              cumque.
            </p>
            <button class="btn">
              see project <i class="fas fa-chevron-right"></i>
            </button>
          </div>
    `
}).join('');


[...Array(5)].map((data, index) => {
    console.log(index);
})





navLinks.forEach((link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    })
}))