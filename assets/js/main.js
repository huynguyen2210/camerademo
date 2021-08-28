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
$('.videoSystem__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // fade: true,
    arrows: false,
    dots: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});