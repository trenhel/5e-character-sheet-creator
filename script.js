let menuButton = document.querySelector('.toggleMenu');
let dropMenu = document.querySelector('.dropMenu');

function menu(){
    if (dropMenu.style.display != 'flex'){
        dropMenu.style.display = 'flex';
    } else {
        dropMenu.style.display = 'none';
    }
}

menuButton.onclick = menu;