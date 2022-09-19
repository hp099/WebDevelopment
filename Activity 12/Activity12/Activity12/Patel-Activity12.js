$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 20,
        randomStart: true,
        moveSlides: 1,
        captions: true,
        pause: 3000,
        pager:true,
        pagerSelector: $("#id_pager"),
        pagerType: 'short'
    });
});