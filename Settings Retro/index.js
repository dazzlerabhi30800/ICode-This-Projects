const modesWrapper = document.querySelector('.modes__wrapper');
const settingsWrapper = document.querySelector('.settings__wrapper');
const rangeSlider = document.querySelector('#brightness-range');
const brightnessToggler = document.querySelectorAll('.brightness .toggler');
console.log(brightnessToggler);




const modeData = ["Airplane mode", "WI-FI", "BlueTooth", "Notifications"]
const settingsData = ["Software Update", "General Settings", "Apps", "Storage", "Data Usage", "Security", "Other Settings"]


modesWrapper.innerHTML = modeData.map(mode => {
    return `
    <div class="mode">
        <p class="mode--name">${mode}</p>
        <div onclick="handleToggle(event)" class="toggler"></div>
    </div>
    `
}).join("");


const handleToggle = (event) => {
    event.currentTarget.classList.toggle("active");
}


settingsWrapper.innerHTML = settingsData.map(setting => (
    `
    <div class="setting">
        <p>${setting}</p>
        <i class="fas fa-chevron-right"></i>
    </div>
    `
)).join("");




rangeSlider.oninput = (e) => {
    const target = e.currentTarget
    const value = target.value;
    const max = target.max;
    const progress = (value / max) * 100;

    rangeSlider.style.backgroundSize = `${progress}% 100%`;
}



brightnessToggler.forEach(toggler => {
    toggler.addEventListener('click', () => {
        toggler.classList.toggle('active');
    })
})