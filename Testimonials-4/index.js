const feedbackData = [
  {
    review:
      "Absolutely thrilled with the experience! The service exceeded my expectations in every way. The team was incredibly responsive and went above and beyond to address my needs. I couldn't be happier with the results. 10/10 would recommend",
    img: "https://randomuser.me/api/portraits/men/54.jpg",
    name: "Michael Johnson",
  },

  {
    review:
      " Both interactive and highly adaptable. Buy this now. Thank you for making it painless, pleasant and most of all hassle free!",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "John V. Bellany",
  },

  {
    review:
      "Your service exceeded my expectations! The attention to detail and promptness made the experience truly exceptional. I'm impressed and grateful for the fantastic service you provided. Keep up the great work!",
    img: "https://randomuser.me/api/portraits/women/49.jpg",
    name: "Rowena Mcleod",
  },
];

const swiperWrapper = document.querySelector(".swiper-wrapper");

swiperWrapper.innerHTML = feedbackData.map((item, index) => {
  const {review, img, name} = item;
  return `
        <div class="swiper-slide slide-${index+1}">
            <div class="innerSlide">
              <p class="review">
                  ${review}
                </p>
              <div class="info">
                <img
                  src=${img}
                  alt=${name}
                />
                <h2>${name}</h2>
                <p>Founder & CEO, The Company</p>
              </div>
            </div>
          </div>

`;
}).join('');


const swiper = new Swiper('.mySwiper', {
  sliderPerView: 1,
  centeredSlides: true,
  speed: 500,
  mouseWheel: true,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  }
})
