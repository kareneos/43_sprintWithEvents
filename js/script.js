$(document).ready(function(){
    $('ul li')
        .hover(function() {
            $(this).animate({ left: 20 }, 'fast');
        }, function() {
            $(this).animate({ left: 0 }, 'fast');
        });
    $(".tresFlores .grisf").mouseover(function(){
        $(this).css("background-color", "#E58974");
    });
    $(".tresFlores .grisf").mouseleave(function(){
        $(this).css("background-color", "#C85E9E");
    });
    $("input").focus(function(){
        $(this).addClass("white");
    });
    $('#iconos i').click(function(){
       $(this).css("background-color", "#E58974");
    });
});