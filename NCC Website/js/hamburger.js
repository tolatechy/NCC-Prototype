let ham = document.querySelector("#hamburger");
let close = document.querySelector("#close");
let nav = document.querySelector("#nameblock nav");


ham.addEventListener('click',showNav, false);
close.addEventListener('click',hideNav, false);

function showNav(){
nav.setAttribute('class', 'show');
}


function hideNav(){
nav.setAttribute('class', '');
}
