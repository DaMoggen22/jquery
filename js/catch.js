$(function(){
    $('#page').css('background-color','yellow');
    $('h2').css('letter-spacing','5px');
    $('[href="#"]').attr('href', 'https://pl.wikipedia.org/wiki/Język_programowania');
    $('.link').css({'color': 'black','text-decoration': 'none'});
    /*$('a').odd().css({
        'color': 'white',
        'text-decoration': 'none',
        'background-color': 'black',
    })*/
    $('a').even().not('#pierwszy').css({
        'color': 'white',
        'text-decoration': 'none',
        'background-color': 'black',
    })
});