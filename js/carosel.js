let slideIndex1 = 0; // Unique index for the first slider
    const slides1 = document.querySelectorAll('.quote-slide');

    function showSlide1(n) {
        if (n < 0) {
            slideIndex1 = slides1.length - 1;
        } else if (n >= slides1.length) {
            slideIndex1 = 0;
        }

        slides1.forEach((slide, index) => {
            if (index === slideIndex1) {
                slide.style.display = 'block';
                // Add animation classes here
                slide.querySelector('.quote-author-box').classList.add('slide-from-right');
                slide.querySelector('.quote-main-box').classList.add('slide-from-left');
            } else {
                slide.style.display = 'none';
                // Remove animation classes from other slides
                slide.querySelector('.quote-author-box').classList.remove('slide-from-right');
                slide.querySelector('.quote-main-box').classList.remove('slide-from-left');
            }
        });
    }

    function nextSlide1() {
        slideIndex1++;
        showSlide1(slideIndex1);
    }

    function prevSlide1() {
        slideIndex1--;
        showSlide1(slideIndex1);
    }

    // Initial display for the first slider
    showSlide1(slideIndex1);

    // Auto-advance slides every 5 seconds for the first slider
    setInterval(nextSlide1, 7000);

   
    // for Slider

    const slickopts = {
        slidesToShow: 4,
        slidesToScroll: 1,
        rows: 1,
        responsive: [
            { breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            { breakpoint: 776,
                settings: {
                    slidesToShow: 1,
                    rows: 1
                }
            }]
    };

    $('.carousel').slick({
        ...slickopts,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Set autoplay speed in milliseconds (in this example, 2 seconds)
        prevArrow: false, // Hide the default previous button
        nextArrow: false // Hide the default next button
    });

    // Previous Button Click Event
    $('.prev-btn-t-n').on('click', function() {
        $('.carousel').slick('slickPrev');
    });

    // Next Button Click Event
    $('.next-btn-t-n').on('click', function() {
        $('.carousel').slick('slickNext');
    });

    