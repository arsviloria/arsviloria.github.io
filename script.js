document.querySelectorAll('.slideshow-container').forEach((container) => {
    const slides = container.querySelectorAll('.slide');
    const dots = container.querySelectorAll('.dot');
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');
 
    let current = 0;

 
    function showSlide(index) {
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;
        current = index;
 
        slides.forEach((slide) => (slide.style.display = 'none'));
        dots.forEach((dot) => dot.classList.remove('active'));
 
        slides[current].style.display = 'block';
        if (dots[current]) dots[current].classList.add('active');
    }
 
   
 
    prevBtn.addEventListener('click', () => {
        showSlide(current - 1);
        
    });
 
    nextBtn.addEventListener('click', () => {
        showSlide(current + 1);
        
    });
 
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            showSlide(i);
            
        });
    });
 
    showSlide(0);
});
 
var sidemenu = document.getElementById("sidemenu");
function openmenu (){
    sidemenu.style.right = "0";
}
function closemenu (){
    sidemenu.style.right = "-200px";
}
