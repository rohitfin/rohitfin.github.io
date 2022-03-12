$(document).ready(function(){
    var largeProductImg = $('.large__product');
    $('.product__item').click(function(){
        var imgSrc = $(this).attr('src');
        var largeProductImgSrc = $('.large__product').attr('src');
        // console.log(src);
        $(this).attr('src', largeProductImgSrc);
        largeProductImg.attr('src', imgSrc);

    });



});