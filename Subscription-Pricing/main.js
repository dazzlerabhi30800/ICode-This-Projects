
const subscriptions = document.querySelectorAll('.subscription');
const checkboxes = document.querySelectorAll('label');

checkboxes.forEach(( checkbox,  index ) => {
    checkbox.addEventListener('click', () => {
        subscriptions.forEach(sub => sub.classList.remove('active'));
        subscriptions[index].classList.add('active');
    })
})
