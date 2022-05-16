const backwards = document.querySelector('.profile .direction .backwards');
const forwards = document.querySelector('.profile .direction .forwards');
const image = document.querySelector('.profile .img');
const text = document.querySelector('.content-2 .content-2-item');

forwards.addEventListener('click', ()=>{
    image.parentElement.classList.add('team');
    text.parentElement.classList.add('team');
})
backwards.addEventListener('click', ()=>{
    image.parentElement.classList.remove('team');
    text.parentElement.classList.remove('team');
})