const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


const texts = ["Hola, soy samuel gajardo", "Programador Front End", "Y mi amigo erick alvarez", "me contrato para desarrollar esta pagina", "en contra de mi voluntad "];
let index = 0;
let isDeleting = false;
let currentTextIndex = 0;

function typeWriter() {
    const currentText = texts[currentTextIndex];
    const delay = isDeleting ? 50 : 50; // Velocidad de escritura y borrado

    if (!isDeleting && index < currentText.length) {
        document.querySelector('.animated-text').textContent += currentText.charAt(index);
        index++;
        setTimeout(typeWriter, delay);
    } else if (isDeleting && index >= 0) {
        const newText = currentText.substring(0, index);
        document.querySelector('.animated-text').textContent = newText;
        index--;
        setTimeout(typeWriter, delay);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            currentTextIndex = (currentTextIndex + 1) % texts.length;
        }
        setTimeout(typeWriter, 1000); // Espera antes de cambiar de texto
    }
}

typeWriter();


document.addEventListener('DOMContentLoaded', () => {
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;
    let currentIndex = 0;
    const intervalTime = 4000; // 4 segundos por imagen

    function moveToNextImage() {
        currentIndex++;
        if (currentIndex === totalImages / 2) {
            carouselImages.style.transition = 'none';
            carouselImages.style.transform = 'translateX(0)';
            currentIndex = 0;
            setTimeout(() => {
                carouselImages.style.transition = 'transform 1s ease';
                moveToNextImage();
            }, 50);
        } else {
            carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }

    setInterval(moveToNextImage, intervalTime);
});
