const forms = document.querySelectorAll('form');

// forms.forEach(form => {
//     form.onclick = (e) => {
//         e.preventDefault();
//     }
// })
for(const form of forms) {
    form.onclick = (e) => {
        e.preventDefault();
    }
}

