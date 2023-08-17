const btnMobile = document.getElementById('btn-mobile')

function toggleMenu() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active');



}



btnMobile.addEventListener('click', toggleMenu);


const infoProduto = document.getElementById('info-produto')

function infoProdutoo() {
    const li = document.getElementByI('info-produto')
    li.classList.toggle('in');



}



infoProduto.addEventListener('click', infoProdutoo);