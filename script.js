const termSelect = document.getElementById('termSelect');

function initGallery(container) {
    const allSlides = Array.from(container.querySelectorAll('.slide'));
    const dotsContainer = container.querySelector('.dots');
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');

    let activeSlides = [];
    let current = 0;

    function renderDots() {
        dotsContainer.innerHTML = '';
        activeSlides.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => showSlide(i));
            dotsContainer.appendChild(dot);
        });
    }

    function showSlide(index) {
        if (activeSlides.length === 0) return;
        if (index >= activeSlides.length) index = 0;
        if (index < 0) index = activeSlides.length - 1;
        current = index;

        allSlides.forEach((slide) => (slide.style.display = 'none'));
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot) => dot.classList.remove('active'));

        activeSlides[current].style.display = 'block';
        if (dots[current]) dots[current].classList.add('active');
    }

    function setTerm(term) {
        activeSlides = allSlides.filter((slide) => slide.dataset.term === term);
        renderDots();
        showSlide(0);
    }

    prevBtn.addEventListener('click', () => showSlide(current - 1));
    nextBtn.addEventListener('click', () => showSlide(current + 1));

    container.setTerm = setTerm;
    setTerm(termSelect.value);
}

document.querySelectorAll('.slideshow-container').forEach(initGallery);

termSelect.addEventListener('change', () => {
    document.querySelectorAll('.slideshow-container').forEach((container) => {
        container.setTerm(termSelect.value);
    });
});

var sidemenu = document.getElementById("sidemenu");
function openmenu (){
    sidemenu.style.right = "0";
}
function closemenu (){
    sidemenu.style.right = "-200px";
}
