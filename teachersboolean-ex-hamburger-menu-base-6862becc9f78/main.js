// mostrare / nascondere il menu principale

// seleziono l'icona e l'hamburger-menu
const hamburger = document.querySelector('i');

const openHamburger = document.querySelector('.hamburger-menu')

// diamo un display block all'hamburger-menu quando avviene l'evento "click"
hamburger.addEventListener('click', function(){
    openHamburger.style.display = 'block';
})