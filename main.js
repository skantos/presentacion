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
    const carousel = document.querySelector('.carousel ul');
    let interval = setInterval(() => {
        let currentMargin = parseInt(window.getComputedStyle(carousel).marginLeft);
        if (currentMargin <= -300 * (carousel.children.length - 1)) {
            carousel.style.marginLeft = '0%';
        } else {
            carousel.style.marginLeft = `${currentMargin - 100}%`;
        }
    }, 4000); // Adjust the timing as needed
});
