let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

// �������������� ������������ �������
setInterval(() => {
    changeSlide(1);
}, 3000); // 3000 �� = 3 �������

// �������� ������ �����
showSlide(currentSlide);