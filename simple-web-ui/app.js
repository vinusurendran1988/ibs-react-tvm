

// using DOM api

let box = document.querySelector('.alert-info');
let hideBtn = document.querySelector('.btn-danger');
let showBtn = document.querySelector('.btn-primary');
hideBtn.addEventListener('click', () => {
    box.style.display = 'none';
})
showBtn.addEventListener('click', () => {
    box.style.display = '';
})