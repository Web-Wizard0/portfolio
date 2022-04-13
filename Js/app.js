var hamburger = document.getElementById('hamburger');
var navLink = document.getElementById('nav-link');
let header = document.getElementById('header');

window.addEventListener('scroll', ( ) => {

    if  (window.scrollY > header.offsetHeight+50) {
        header.classList.add('active');
    }else {
        header.classList.remove('active');
    }

})


hamburger.addEventListener('click', ( )=> {
    hamburger.classList.toggle('active');
    navLink.classList.toggle('active');
    
    
    document.onclick = function (e) {
        if(e.target.id !== 'hamburger' && e.target.id !== 'navLink'){
            hamburger.classList.remove('active');
            navLink.classList.remove('active');
        }
    }
    
});

