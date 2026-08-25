document.querySelectorAll('.slideshow-container').forEach((container) => {
    const slides = container.querySelectorAll('.slide');
    const dots = container.querySelectorAll('.dot');
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');
 
    let current = 0;
    let timer = null;
 
    function showSlide(index) {
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;
        current = index;
 
        slides.forEach((slide) => (slide.style.display = 'none'));
        dots.forEach((dot) => dot.classList.remove('active'));
 
        slides[current].style.display = 'block';
        if (dots[current]) dots[current].classList.add('active');
    }
 
    function startAutoplay() {
        timer = setInterval(() => showSlide(current + 1), 4000);
    }
 
    function resetAutoplay() {
        clearInterval(timer);
        startAutoplay();
    }
 
    prevBtn.addEventListener('click', () => {
        showSlide(current - 1);
        resetAutoplay();
    });
 
    nextBtn.addEventListener('click', () => {
        showSlide(current + 1);
        resetAutoplay();
    });
 
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            showSlide(i);
            resetAutoplay();
        });
    });
 
    showSlide(0);
    startAutoplay();
});
 
