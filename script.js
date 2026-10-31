
let currentSlide = 0;

const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
    if (index < 0 || index >= totalSlides) return;

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

    currentSlide = index;

    document.getElementById("slideNumber").textContent =
        `${currentSlide + 1} / ${totalSlides}`;

    document.getElementById("progressBar").style.width =
        `${((currentSlide + 1) / totalSlides) * 100}%`;

    document.getElementById("prevBtn").disabled =
        currentSlide === 0;

    document.getElementById("nextBtn").disabled =
        currentSlide === totalSlides - 1;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        nextSlide();
    }

    if (event.key === "ArrowLeft") {
        prevSlide();
    }
});

showSlide(0);
