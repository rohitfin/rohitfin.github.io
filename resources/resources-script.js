$(document).ready(function(){
    console.log($('body').width());

    // toggle button
    $('.nav_btn').click(function(){
        $('.nav_btn').toggleClass('change');
        $('.nav_links').slideToggle(500);
    });

    // nav background    
    $(window).scroll(function(){
        var position = $(window).scrollTop();
        if(position >= 100){
            $('header').addClass('header-bg');
        }
        else{
            $('header').removeClass('header-bg');
        }
    });

    // smooth scrolling
    $('.nav_links a').click(function(link){
        link.preventDefault();
        var ac = $(this).attr('href');
        $('html,body').stop().animate({
            scrollTop: $(ac).offset().top - 70
        }, 2000);

    });








});