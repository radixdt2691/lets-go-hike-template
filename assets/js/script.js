window.onscroll = function() {myFunction()};

var header = document.getElementById("navbar");
var nav = document.getElementById("myTopnav");
var logo = document.getElementById("main-logo");
var links = document.querySelectorAll("#nav-links");
var togglebtn = document.getElementById("btn-nav");
var sticky = header.offsetTop;

function changeIcon(){
    togglebtn.classList.toggle("fa-bars");
    togglebtn.classList.toggle("fa-xmark");
}
function myFunction() {
if (window.pageYOffset > sticky) {
    header.classList.add("sticky","top-0","shadow","fixed-border");
    nav.classList.add("justify-start","p-10");
    logo.classList.add("img-fluid");
    for (var i = 0; i < links.length; i++) {
        links[i].classList.add('font-25');
    }
} else {
    header.classList.remove("sticky","top-0","shadow","fixed-border");
    nav.classList.remove("justify-start","p-10");
    logo.classList.remove("img-fluid");
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('font-25');
    }
}
}
