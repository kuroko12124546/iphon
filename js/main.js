const btn = document.querySelector('.menu-btm');
const nav = document.querySelector('.nav');

btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open');
});
