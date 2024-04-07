const productContainer = document.getElementById('productContainer');
const products = document.querySelectorAll('.productp');
const productss = document.querySelectorAll('.productpp');
const angleIncrement = (2 * Math.PI) / products.length;
const angleIncrements = (2 * Math.PI) / productss.length;
let angle = 0;

products.forEach((product, index) => {
  const x = 170 + 220 * Math.cos(angle);
  const y = 170 + 220 * Math.sin(angle);

  product.style.transform = `translate(${x}px, ${y}px)`;
  angle += angleIncrement;
});

productss.forEach((product, index) => {
    const x = 190 + 210 * Math.cos(angle);
    const y = 190 + 210 * Math.sin(angle);
  
    product.style.transform = `translate(${x}px, ${y}px)`;
    angle += angleIncrements;
  });

let rotationAngle = 0;

function rotateProducts() {
  rotationAngle += 0.005;
  productContainer.style.transform = `rotateX(30deg) rotateZ(${rotationAngle}rad)`;

  requestAnimationFrame(rotateProducts);
}

/********************* */

let imgBx = document.querySelectorAll('.imgBx');
let contentBx = document.querySelectorAll('.contentBx');

for(let i=0; i<imgBx.length; i++){
    imgBx[i].addEventListener('mouseover', function(){
        for(let i=0; i<contentBx.length; i++){
            contentBx[i].className = 'contentBx';
        }
        document.getElementById(this.dataset.id).className = 'contentBx active';

        for(let i=0; i<imgBx.length; i++){
            imgBx[i].className = 'imgBx';
        }
        this.className = 'imgBx active';
    })
}

/******************* */

let ccontentBx = document.querySelectorAll('.CContentBx');

for(let i=0; i<imgBx.length; i++){
    imgBx[i].addEventListener('mouseover', function(){
        for(let i=0; i<ccontentBx.length; i++){
            ccontentBx[i].className = 'CContentBx';
        }
        document.getElementById(this.dataset.id).className = 'CContentBx active';

        for(let i=0; i<imgBx.length; i++){
            imgBx[i].className = 'imgBx';
        }
        this.className = 'imgBx active';
    })
}

/******************* dialog produits **********************/


// Fonction pour initialiser les dialogues et les boutons de navigation
function initializeDialogs() {
    const openBtns = document.querySelectorAll('.openbtn');
    const closeBtns = document.querySelectorAll('.closebtn');
    const dialogs = document.querySelectorAll('dialog');

    openBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            dialogs[index].showModal();
            showSlide(index, 0); // Afficher le premier slide lorsque le dialogue s'ouvre
        });
    });

    closeBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            btn.closest('dialog').close();
        });
    });

    const prevBtns = document.querySelectorAll('.prevBtn');
    const nextBtns = document.querySelectorAll('.nextBtn');

    prevBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const currentDialog = btn.closest('dialog');
            const currentIndex = Array.from(dialogs).indexOf(currentDialog);
            showPreviousSlide(currentIndex);
        });
    });

    nextBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const currentDialog = btn.closest('dialog');
            const currentIndex = Array.from(dialogs).indexOf(currentDialog);
            showNextSlide(currentIndex);
        });
    });
}

// Fonction pour afficher le slide précédent
function showPreviousSlide(dialogIndex) {
    const slides = document.querySelectorAll('dialog')[dialogIndex].querySelectorAll('.slide');
    const currentSlide = Array.from(slides).findIndex((slide) => slide.classList.contains('active'));
    let prevSlide = (currentSlide - 1 + slides.length) % slides.length;
    if (prevSlide === -1) {
        prevSlide = slides.length - 1;
    }
    showSlide(dialogIndex, prevSlide);
}

// Fonction pour afficher le slide suivant
function showNextSlide(dialogIndex) {
    const slides = document.querySelectorAll('dialog')[dialogIndex].querySelectorAll('.slide');
    const currentSlide = Array.from(slides).findIndex((slide) => slide.classList.contains('active'));
    const nextSlide = (currentSlide + 1) % slides.length;
    showSlide(dialogIndex, nextSlide);
}

// Fonction pour afficher un slide spécifique
function showSlide(dialogIndex, slideIndex) {
    const slides = document.querySelectorAll('dialog')[dialogIndex].querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

// Appeler la fonction d'initialisation lorsque le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
    initializeDialogs();
});
