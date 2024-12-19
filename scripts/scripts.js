// dots slider

const slides = document.querySelector('.hero-slides');
const dots = document.querySelectorAll('.hero-dot');

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        // Remove 'active' class from all dots
        dots.forEach(d => d.classList.remove('hero-dot__active'));
        dot.classList.add('hero-dot__active');

        // Move the slides
        slides.style.transform = `translateX(-${index * 100}%)`;
    });
});


//newsSlider

const newsSlider = document.querySelector('.news-slider');
const leftButton = document.querySelector('.news-slider-button.left');
const rightButton = document.querySelector('.news-slider-button.right');

// Calculate the width of a single item
const itemWidth = document.querySelector('.news-item').offsetWidth + 10; // Add margin (5px each side)

// Scroll left sequentially
leftButton.addEventListener('click', () => {
    newsSlider.scrollLeft -= itemWidth; // Move one item to the left
});

// Scroll right sequentially
rightButton.addEventListener('click', () => {
    newsSlider.scrollLeft += itemWidth; // Move one item to the right
});
