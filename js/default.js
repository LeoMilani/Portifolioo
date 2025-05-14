$(document).ready(function () {
    $('header ul li a').on('click', function (e) {
        e.preventDefault();
        let idElemento = $(this).attr('href');
        let posElemento = $(idElemento).offset().top;
        window.scrollTo({ top: posElemento, behavior: 'smooth' });
    });
});

