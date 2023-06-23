const menu = document.querySelector('.hamburger');
const menuLinks = document.querySelector('.nav__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});


const picElement = document.querySelectorAll('.best');
picElement.forEach((el) => observer.observe(el));
