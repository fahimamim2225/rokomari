$(document).ready(function(){
    // slider
    $(".slider").slick({
        dots: true,
        prevArrow: "<span><i class='fa-solid fa-chevron-left'></i></span>",
        nextArrow: "<span class='right_arrow'><i class='fa-solid fa-chevron-right'></i></span>",
        autoplay: true,
        autoplaySpeed: 3000,
    });

    // -------------
    $(".rsp_details").slick({
        dots: false,
        prevArrow: "<span><i class='fa-solid fa-chevron-left'></i></span>",
        nextArrow: "<span class='right_arrow'><i class='fa-solid fa-chevron-right'></i></span>",
        slidesToShow: 5,
        slidesToScroll: 3,
    });

    // magnific popup
    $('.image-link').magnificPopup({
        type:'image',
        gallery:{
            enabled:true,
        }
    });

    // tabs
    $(document).ready( function() {
        tabify( '#tabs' );
    });

    $(document).ready( function() {
        tabify( '#tabs_2' );
    });

    $(document).ready( function() {
        tabify( '#tabs_3' );
    });
});



