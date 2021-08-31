$('.banner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    cssEase: 'linear',
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
$('.caseStudy__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
    arrows: false,
    dots: true,
    responsive: [{
        //     breakpoint: 992,
        //     settings: {
        //         slidesToShow: 2
        //     }
        // },
        // {
        //     breakpoint: 576,
        //     settings: {
        //         slidesToShow: 1
        //     }
    }]
});
$('.caseStudy-album').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.caseStudy-album-nav',
    responsive: [{
        //     breakpoint: 992,
        //     settings: {
        //         slidesToShow: 2
        //     }
        // },
        // {
        //     breakpoint: 576,
        //     settings: {
        //         slidesToShow: 1
        //     }
    }]
});

$('.caseStudy-album-nav').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.caseStudy-album',

});