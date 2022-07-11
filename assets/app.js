/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.scss in this case)
import './styles/app.scss';

// start the Stimulus application
import './bootstrap';


$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});

document.addEventListener("DOMContentLoaded", function(){
    let topBtn = document.getElementById('btnToTop');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
            document.getElementById('navbar_top').classList.remove('bg-menu');
            document.getElementById('navbar_top').classList.add('bgmenu-scrol');
            topBtn.style.display = "block";
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
            document.getElementById('navbar_top').classList.add('bg-menu');
            document.getElementById('navbar_top').classList.remove('bgmenu-scrol');
            topBtn.style.display = "none";
        }
    });

    if (window.innerWidth > 992) {

        document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){

            everyitem.addEventListener('mouseover', function(e){

                let el_link = this.querySelector('a[data-bs-toggle]');

                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }

            });
            everyitem.addEventListener('mouseleave', function(e){
                let el_link = this.querySelector('a[data-bs-toggle]');

                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }


            })
        });

    }
});


$(document).ready(function () {
    $("#btnToTop").on('click', function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
})

$(document).ready(function () {
    if (window.matchMedia("(max-width: 425px)").matches) {
        document.getElementById('inputGroup').classList.add('input-group-sm');
    } else {
        /* the view port is less than 400 pixels wide */
    }

})
AOS.init();

var typed = new Typed(".services",{
    strings : [
        "Accompagnement entrepreneurial...",
        "Developpement de la jeunesse...",
        "Digital management...",
        "Suivi fiscal et comptable..."
    ],
    typeSpeed: 100,
    backSpeed: 100,
    loop: false,
    cursorChar: '|',
    showCursor: true,
    autoInsertCss: true,
})
