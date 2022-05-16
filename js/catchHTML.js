$(function () {
    const $lista_ul_html = $('ul').html();
    console.log($lista_ul_html)

    const $lista_li_html = $('li').html();
    console.log($lista_li_html)

    const $lista_ul_text = $('ul').text();
    console.log($lista_ul_text)

    const $lista_li_text = $('li').eq(2).text();
    console.log($lista_li_text)

    // let $lista_append = $('ul').html();
    // $('ol').append($lista_append);
    //
    // $lista_append = $('ul').text();
    // $('p').append($lista_append)
    //
    //
    //
    // let $lista_ul = $('li').eq(2).html();
    // $('li').eq(2).remove();
    // $('ul').prepend('<li>' + $lista_ul + '</li>');
});