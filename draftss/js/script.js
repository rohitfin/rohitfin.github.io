$(document).ready(function(){
    
    $(window).resize(function() {
        var screenWidth = window.innerWidth;
            if(screenWidth <= 1024){
                $('.header-left').addClass('d-none');
            } else {
                $('.header-left').removeClass('d-none');
            }

            console.log(11);
    });

    
    $('.header-left-button').click(function(){
        $('.header-left').toggleClass('d-none');
    });


});

