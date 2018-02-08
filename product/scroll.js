var nav = document.querySelector('.scroll-bg');

function teste() {
   
    if (window.pageYOffset >= 100) {
        nav.classList.add('nav-scroll');
    } else {
        nav.classList.remove('nav-scroll');
    }

 }


window.addEventListener('scroll', teste);