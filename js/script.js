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
            $('nav, .navbar_brand').addClass('nav_bg');
        }
        else{
            $('nav, .navbar_brand').removeClass('nav_bg');
        }
    });






});