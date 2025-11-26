// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Hero Carousel
    const heroTrack = document.querySelector('.carousel-track');
    const heroSlides = document.querySelectorAll('.carousel-slide');
    const heroIndicators = document.querySelectorAll('.carousel-indicators .indicator');
    const heroPrevBtn = document.querySelector('.carousel-prev');
    const heroNextBtn = document.querySelector('.carousel-next');
    let heroCurrentIndex = 0;
    const heroTotalSlides = heroSlides.length;

    // Destinations Carousel
    const destinationsTrack = document.querySelector('.destinations-track');
    const destinationCards = document.querySelectorAll('.destination-card');
    const destPrevBtn = document.querySelector('.destinations-carousel .prev-btn');
    const destNextBtn = document.querySelector('.destinations-carousel .next-btn');
    let destCurrentIndex = 0;
    const cardsPerView = Math.floor(destinationsTrack.offsetWidth / destinationCards[0].offsetWidth);

    // Testimonials Carousel
    const testimonialsTrack = document.querySelector('.testimonials-track');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const testimonialIndicators = document.querySelectorAll('.testimonial-indicators .indicator');
    let testimonialCurrentIndex = 0;

    // Hero Carousel Functions
    function updateHeroCarousel() {
        heroTrack.style.transform = `translateX(-${heroCurrentIndex * 33.333}%)`;
        
        // Update indicators
        heroIndicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === heroCurrentIndex);
        });
    }

    function nextHeroSlide() {
        heroCurrentIndex = (heroCurrentIndex + 1) % heroTotalSlides;
        updateHeroCarousel();
    }

    function prevHeroSlide() {
        heroCurrentIndex = (heroCurrentIndex - 1 + heroTotalSlides) % heroTotalSlides;
        updateHeroCarousel();
    }

    // Auto-play for hero carousel
    let heroInterval = setInterval(nextHeroSlide, 5000);

    // Pause auto-play on hover
    const heroCarousel = document.querySelector('.hero-carousel');
    heroCarousel.addEventListener('mouseenter', () => clearInterval(heroInterval));
    heroCarousel.addEventListener('mouseleave', () => {
        heroInterval = setInterval(nextHeroSlide, 5000);
    });

    // Destinations Carousel Functions
    function updateDestinationsCarousel() {
        const cardWidth = destinationCards[0].offsetWidth + 32; // width + gap
        destinationsTrack.style.transform = `translateX(-${destCurrentIndex * cardWidth}px)`;
    }

    function nextDestSlide() {
        const maxIndex = destinationCards.length - cardsPerView;
        if (destCurrentIndex < maxIndex) {
            destCurrentIndex++;
            updateDestinationsCarousel();
        }
    }

    function prevDestSlide() {
        if (destCurrentIndex > 0) {
            destCurrentIndex--;
            updateDestinationsCarousel();
        }
    }

    // Testimonials Carousel Functions
    function updateTestimonialsCarousel() {
        testimonialsTrack.style.transform = `translateX(-${testimonialCurrentIndex * 100}%)`;
        
        // Update indicators
        testimonialIndicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === testimonialCurrentIndex);
        });
    }

    function nextTestimonialSlide() {
        testimonialCurrentIndex = (testimonialCurrentIndex + 1) % testimonialCards.length;
        updateTestimonialsCarousel();
    }

    // Auto-play for testimonials
    setInterval(nextTestimonialSlide, 6000);

    // Event Listeners
    heroPrevBtn.addEventListener('click', prevHeroSlide);
    heroNextBtn.addEventListener('click', nextHeroSlide);

    destPrevBtn.addEventListener('click', prevDestSlide);
    destNextBtn.addEventListener('click', nextDestSlide);

    // Indicator clicks for hero carousel
    heroIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            heroCurrentIndex = index;
            updateHeroCarousel();
        });
    });

    // Indicator clicks for testimonials
    testimonialIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            testimonialCurrentIndex = index;
            updateTestimonialsCarousel();
        });
    });

    // Responsive adjustments
    window.addEventListener('resize', () => {
        // Recalculate cards per view for destinations carousel
        const newCardsPerView = Math.floor(destinationsTrack.offsetWidth / destinationCards[0].offsetWidth);
        if (newCardsPerView !== cardsPerView) {
            destCurrentIndex = 0;
            updateDestinationsCarousel();
        }
    });

    // Hover effects for destination cards
    document.querySelectorAll('.destination-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('img').style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseleave', function() {
            this.querySelector('img').style.transform = 'scale(1)';
        });
    });
});