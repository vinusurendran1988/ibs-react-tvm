console.log('-app.js-');

document.addEventListener('DOMContentLoaded', () => {

    // using DOM API

    // step-1 : query DOM elements
    // let alertBox = document.querySelector('.alert');
    // let hideBtn = document.querySelector('.btn-danger');
    // let showBtn = document.querySelector('.btn-primary');
    // let hungryBtn = document.querySelector('.btn-success');
    // // step-2 : bind event-listeners & update DOM with result
    // hideBtn.addEventListener('click', function (e) {
    //     alertBox.style.display = 'none';
    // });
    // showBtn.addEventListener('click', function (e) {
    //     alertBox.style.display = '';
    // });
    // hungryBtn.addEventListener('click', function (e) {
    //     alertBox.innerText = "enjoy with biryani";
    // })

    //----------------------------------------------------------

    // let images = [
    //     './images/1.jpeg',
    //     './images/2.jpeg',
    //     './images/3.jpeg',
    //     './images/4.jpeg',
    //     './images/5.jpeg'
    // ];
    // let imgEle = document.querySelector('#imgEle');
    // let startBtn = document.querySelector('#startBtn');
    // let stopBtn = document.querySelector('#stopBtn');

    // startBtn.addEventListener('click', e => {
    //     let idx = 0;
    //     let interval = setInterval(() => {
    //         let imagePath = images[idx];
    //         imgEle.src = imagePath;
    //         idx++;
    //         if (idx === images.length) { idx = 0 }
    //     }, 1000);

    //     stopBtn.addEventListener('click', e => {
    //         clearInterval(interval);
    //     })

    // })

    //----------------------------------------------------------
    // using XHR or Fetch API to n/w call asynchronously
    let todosBtn = document.getElementById('todosBtn');
    let todosBox = document.getElementById('todos-box');
    todosBtn.addEventListener('click', e => {
        // XHR or Fetach api
        let url = "https://jsonplaceholder.typicode.com/todos?_limit=1"
        fetch(url)
            .then(resp => resp.json())
            .then(todos => todosBox.innerText = JSON.stringify(todos))
    })
    //----------------------------------------------------------
});