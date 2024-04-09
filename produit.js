document.addEventListener("DOMContentLoaded", function() {
    // Fonction pour la fonctionnalité de diapositive
    function initializeSlideFunctionality(slides, nextBtnId, prevBtnId) {
        let currentSlide = 0;

        function nextSlide() {
            slides[currentSlide].style.display = 'none';
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].style.display = 'block';
        }

        function prevSlide() {
            slides[currentSlide].style.display = 'none';
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            slides[currentSlide].style.display = 'block';
        }

        const nextBtn = document.getElementById(nextBtnId);
        nextBtn.addEventListener('click', nextSlide);

        const prevBtn = document.getElementById(prevBtnId);
        prevBtn.addEventListener('click', prevSlide);

        for (let i = 1; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
    }

    // Premier ensemble de diapositives
    const slides1 = document.querySelectorAll('.items');
    initializeSlideFunctionality(slides1, 'nextBtn', 'prevBtn');

    // Deuxième ensemble de diapositives
    const slides2 = document.querySelectorAll('.items2');
    initializeSlideFunctionality(slides2, 'nextBtn2', 'prevBtn2');

    // Troisième ensemble de diapositives
    const slides3 = document.querySelectorAll('.items3');
    initializeSlideFunctionality(slides3, 'nextBtn3', 'prevBtn3');

    // Quatrième ensemble de diapositives
    const slides4 = document.querySelectorAll('.items4');
    initializeSlideFunctionality(slides4, 'nextBtn4', 'prevBtn4');

    // Cinquième ensemble de diapositives
    const slides5 = document.querySelectorAll('.items5');
    initializeSlideFunctionality(slides5, 'nextBtn5', 'prevBtn5');

    // Sixième ensemble de diapositives
    const slides6 = document.querySelectorAll('.items6');
    initializeSlideFunctionality(slides6, 'nextBtn6', 'prevBtn6');

    // Septième ensemble de diapositives
    const slides7 = document.querySelectorAll('.items7');
    initializeSlideFunctionality(slides7, 'nextBtn7', 'prevBtn7');
});
