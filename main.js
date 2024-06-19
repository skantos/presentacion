const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const texts = [
    "Hola, soy Samuel Gajardo", 
    "Programador Front End", 
    "Y mi amigo Erick Alvarez", 
    "me contrató para desarrollar esta página", 
    "en contra de mi voluntad"
];
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

var swyper = new Swper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});
