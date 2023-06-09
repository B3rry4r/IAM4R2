// toggle navbar //
let menuIcon = document.querySelector('#menuIcon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick= () => {

    navbar.classList.toggle('active')
}


// scroll section active links //

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        };
    });

    //STICKY NAVBAR
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    //REMOVE STICKY NAVBAR WHEN CLICKING ON LINK //SCROLL
    navbar.classList.remove('active')
};


//scroll reveal

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.homeContent, .heading', { origin: 'top' });
 ScrollReveal().reveal('.homeImg, .serviceContainer, .portfolioBox, .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.homeContent h1 , .aboutImg', { origin: 'left' });
 ScrollReveal().reveal('.homeContent p , .aboutContent', { origin: 'right' });

 //typedjs

 const typed = new Typed('.multipleText', {
    strings: ['Programmer','Full-Stack Web Developer', 'MERN Stack Developer', 'Grapghics Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
 })