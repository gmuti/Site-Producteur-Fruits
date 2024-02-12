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