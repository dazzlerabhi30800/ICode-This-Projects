const sortButton = document.querySelector('.dropdown--btn');
const arrow = sortButton.querySelector('i');
const dropdown = document.querySelector('.rating--wrapper');

let show = false;

sortButton.onclick = () => {
    if(show) {
        show = false;
        dropdown.classList.remove('show');
        arrow.classList.remove('bi-chevron-up');
    }
    else {
        show = true;
        dropdown.classList.add('show');
        arrow.classList.add('bi-chevron-up');
    }
}