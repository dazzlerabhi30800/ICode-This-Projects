const profileWrapper = document.querySelector(".profile--wrapper");
const imageGallery = document.querySelector(".image--gallery");
const numbers = document.querySelectorAll(".number");

const galleryData = [
    "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1682687218904-de46ed992b58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1243&q=80",
    "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1495299854461-e2398466085b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1612693322311-5de725f079dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1233&q=80",
    "https://images.unsplash.com/photo-1613157666708-a4b80ae7ce67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1479030160180-b1860951d696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://plus.unsplash.com/premium_photo-1673697240036-b64ea721b98f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1648886419372-9ecf9662e2e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    "https://images.unsplash.com/photo-1648886419349-07a8e456e7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1148&q=80",
    "https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
];

const profileData = [
    {
        name: "Leslie Shaul",
        image: "https://randomuser.me/api/portraits/women/86.jpg",
        location: "New York, NY",
        profession: "Photographer, Art Fair Marketing Advisor",
        downloads: "2.5k",
    },

    {
        name: "Corlisss Britton",
        image: "https://randomuser.me/api/portraits/women/31.jpg",
        location: "Tamarac, FL",
        profession: "Graphic designer, art director, photographer",
        downloads: "3.5k",
    },

    {
        name: "Jannie Flores",
        image: "https://randomuser.me/api/portraits/women/76.jpg",
        location: "New Orleans, LA",
        profession: "Professional marketer and photographer",
        downloads: "4.2k",
    },
];

imageGallery.innerHTML = galleryData
    .map((img) => {
        return `
    <img src=${img} alt="nature" />
    `;
    })
    .join("");

profileWrapper.innerHTML = profileData
    .map((profile) => {
        let { name, image, location, profession, downloads } = profile;
        return `
    <div class="profile">
        <div data-downloads=${downloads} class="profile--img">
            <img
            src=${image}
            alt=${name}
            />
        </div>
        <div class="info">
            <h1>${name} <span>${location}</span></h1>
            <p>${profession}</p>
            <p>www.website.com</p>
        </div>
    </div>
    `;
    })
    .join("");

numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        numbers.forEach((number) => number.classList.remove("active"));
        e.currentTarget.classList.add("active");
    });
});





