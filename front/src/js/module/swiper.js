//для advantages

$(document).ready(function () {
    var swiper = new Swiper(".advantagesSwiper", {
        slidesPerView: 1,
        pagination: {
            el: '.pagination.swiper-pagination',
            type: 'fraction',
            // renderFraction: true,
            // dynamicBullets: true,
        },
        navigation: {
            nextEl: '.advantages-row .swiper-button-next',
            prevEl: '.advantages-row .swiper-button-prev',
        }
    });
    var swiper2 = new Swiper(".evenSwiper", {
        navigation: {
            nextEl: '.swiper-button-next.even-more',
            prevEl: '.swiper-button-prev.even-more',
        }
    });
    var swiper3 = new Swiper(".venueSwiper", {
        navigation: {
            nextEl: '.swiper-button-next.venue-more',
            prevEl: '.swiper-button-prev.venue-more',
        }
    });
})

