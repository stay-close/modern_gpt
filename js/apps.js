const menuBar = document.querySelector('.menu_bar i');
const mainMenu = document.querySelector('.main_menu nav ul');


menuBar.addEventListener('click', (e) => {
    mainMenu.classList.toggle('menu_show')
})