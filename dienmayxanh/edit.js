var slideIndex = 1;
const showSlides = (n) => {
    console.log('t');
    const slides = document.getElementsByClassName("mySlides");
    slides[0].style.display = "block";
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
showSlides(slideIndex);
const plusSlides = (n) => {
    showSlides(slideIndex += n);
}