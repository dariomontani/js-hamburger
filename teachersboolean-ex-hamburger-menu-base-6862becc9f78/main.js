// mostrare / nascondere il menu principale

// seleziono l'icona e l'hamburger-menu
const openHamburger = document.querySelector('i');

const hamburger = document.querySelector('.hamburger-menu');

// diamo un display block all'hamburger-menu quando avviene l'evento "click"
openHamburger.addEventListener('click', function(){
    hamburger.style.display = 'block';
})

// selezioniamo l'icona close
const closeHamburger = document.querySelector('.close');

// diamo un display none all'hamburger-menu quando avviene l'evento "click"
closeHamburger.addEventListener('click', function(){
    hamburger.style.display = 'none';
})
