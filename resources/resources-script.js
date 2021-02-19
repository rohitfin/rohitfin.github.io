$(document).ready(function(){
    console.log($('body').width());

    // smooth scrolling
    $('.nav_links a').click(function(link){
        link.preventDefault();
        var ac = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(ac).offset().top -80
        }, 2000);

    });








});