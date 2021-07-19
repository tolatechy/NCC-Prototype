var faqs = document.querySelectorAll("#faqs article header");

faqLen = faqs.length;

for ($i=0; $i<faqLen; $i++){
faqs[$i].addEventListener('click', showMessage, false );
}

function showMessage(){

if ( this.parentNode.getAttribute('class') == 'open' ) {
this.parentNode.setAttribute('class', '');
this.getElementsByTagName('span')[0].innerHTML ="[+]";
}
else  {
this.parentNode.setAttribute('class', 'open');
this.getElementsByTagName('span')[0].innerHTML ="[-]";
}


}
