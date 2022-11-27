
$(function(){
    $('section#conteudo article div.btn').click(function(){
        $(this).siblings('p.box').slideToggle();
    })
});

