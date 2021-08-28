$('.banner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
    responsive: [{
            breakpoint: 576,
            settings: {
                dots: false,
            }
        }

    ]
});