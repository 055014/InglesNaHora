// scroll para seções
$( document ).ready(function() {
let navBtn = $('.nav-item');
let introducao = $('#introducao');
let regulares = $('#regulares');
let irregulares =$('#irregulares');
let quiz =$('#quiz')
let equipe = $('#equipe');
let contato = $('#contato');

let scrollTo = '';

$(navBtn).click(function() {

let btnId = $(this).attr("id");
console.log(btnId);

if (btnId == "intro-menu") {
    scrollTo = introducao;
}
else if (btnId == "reg-menu") {
    scrollTo == regulares;
}
else if (btnId == "irreg-menu") {
    scrollTo == irregulares;

}
else if(btnId == "quiz-menu") {
    scrollTo == quiz;
}

else if (btnId == "eq-menu"){
     scrollTo == equipe;
}
else if (btnId == "cont-menu"){
    scrollTo == contato;
}

 $([document.documentElement, document.body]).animate ({
scrollTop: $(scrollTo).offset().top - 70
 }, 1800);

})

})
