let menuButton = document.querySelector('.toggleMenu');
let dropMenu = document.querySelector('.dropMenu');

menuButton.addEventListener('click', function(){
    dropMenu.classList.toggle('change');
})