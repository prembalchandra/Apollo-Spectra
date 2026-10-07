document.addEventListener('DOMContentLoaded', () => {
    if (typeof Swiper === 'undefined') return;

    // 0. Diagnostic Offers Mobile Slider
    const diagnosticOfferEl = document.querySelector('.diagnostic-offer-swiper');
    if (diagnosticOfferEl) {
        let diagnosticSwiper = null;
        const mobileMediaQuery = window.matchMedia('(max-width: 768px)');

        const handleDiagnosticSwiper = (e) => {
            const isMobile = e ? e.matches : mobileMediaQuery.matches;
            if (isMobile) {
                if (!diagnosticSwiper) {
                    diagnosticSwiper = new Swiper('.diagnostic-offer-swiper', {
                        slidesPerView: 1,
                        spaceBetween: 16,
                        grabCursor: true,
                        speed: 500,
                        loop: true,
                        autoplay: {
                            delay: 3500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        },
                        pagination: {
                            el: '.diagnostic-offer-pagination',
                            clickable: true,
                        },
                    });
                }
            } else {
                if (diagnosticSwiper) {
                    diagnosticSwiper.destroy(true, true);
                    diagnosticSwiper = null;
                }
            }
        };

        handleDiagnosticSwiper();
        if (mobileMediaQuery.addEventListener) {
            mobileMediaQuery.addEventListener('change', handleDiagnosticSwiper);
        } else {
            mobileMediaQuery.addListener(handleDiagnosticSwiper);
        }
        window.addEventListener('resize', () => {
            handleDiagnosticSwiper();
        });
    }

    // 1. Why Consider Robotic Knee Replacement Slider
    const whyConsiderEl = document.querySelector('.why-consider-swiper');
    if (whyConsiderEl) {
        new Swiper('.why-consider-swiper', {
            slidesPerView: 1,
            spaceBetween: 16,
            grabCursor: true,
            speed: 600,
            autoplay: {
                delay: 4500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            pagination: {
                el: '.why-consider-pagination',
                clickable: true,
            },
            breakpoints: {
                540: {
                    slidesPerView: 2,
                    spaceBetween: 18,
                },
                900: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 22,
                }
            }
        });
    }

    // 2. Specialised Care Beyond Technology Slider
    const specialisedCareEl = document.querySelector('.specialised-care-swiper');
    if (specialisedCareEl) {
        new Swiper('.specialised-care-swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            grabCursor: true,
            speed: 600,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            pagination: {
                el: '.specialised-care-pagination',
                clickable: true,
            },
            breakpoints: {
                600: {
                    slidesPerView: 2,
                    spaceBetween: 22,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 26,
                }
            }
        });
    }

    // 3. Testimonials Slider
    const testimonialsEl = document.querySelector('.testimonials-swiper');
    if (testimonialsEl) {
        new Swiper('.testimonials-swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            grabCursor: true,
            loop: true,
            speed: 600,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            navigation: {
                nextEl: '.testimonial-arrow-next',
                prevEl: '.testimonial-arrow-prev',
            },
            pagination: {
                el: '.testimonials-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 26,
                },
                1280: {
                    slidesPerView: 2,
                    spaceBetween: 28,
                }
            }
        });
    }
});
