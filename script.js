document.querySelector('#hamburguer').addEventListener(
    'click', (a) =>{
        a.currentTarget.classList.toggle('activated');
    });


const observer = new IntersectionObserver((entries) => {
    for (const entry of entries)  {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    };
});

const hiddenElements = document.querySelectorAll('.hidden');

for (const hiddenItem of hiddenElements) {
    observer.observe(hiddenItem);
}

const images = document.querySelectorAll('.imageg');
const bigImage = document.querySelector('#imagebig');
const imageTitle = document.querySelector('#imagetitle');
for (const image of images) {
    image.addEventListener('click', ()=>{
         for (const image of images) {
            image.classList.remove('selection');
         }
        bigImage.src=image.src;
        imageTitle
        image.classList.add('selection');
        
    })    
}

const nav = document.querySelector('nav');
function cambiarNav(){
    let scrollValue =window.scrollY;
    console.log(scrollValue);
    if(scrollValue >= 550){
        nav.classList.add('navchange');
    }else{
        nav.classList.remove('navchange');
    }

}
window.addEventListener('scroll', cambiarNav);

const buttonBa = document.querySelector('#buttonba');
const buttonEs = document.querySelector('#buttones');
const buttonPr = document.querySelector('#buttonpr');

const cardBa = document.querySelector('#cardba');
const cardEs = document.querySelector('#cardes');
const cardPr = document.querySelector('#cardpr');
const allCards = document.querySelectorAll('.price-card');


buttonBa.addEventListener('click', ()=>{
    console.log(cardBa)
    for (const car of allCards) {
        car.classList.remove('selected-card');
        car.classList.add('d-none');
    }
    cardBa.classList.remove('d-none');
    cardBa.classList.add('selected-card');
});


buttonEs.addEventListener('click', ()=>{
    console.log(cardEs)
    for (const car of allCards) {
        car.classList.remove('selected-card');
        car.classList.add('d-none');
    }
    cardEs.classList.remove('d-none');
    cardEs.classList.add('selected-card');
});
buttonPr.addEventListener('click', ()=>{
    console.log(cardPr)
    for (const car of allCards) {
        car.classList.remove('selected-card');
        car.classList.add('d-none');
    }
    cardPr.classList.remove('d-none');
    cardPr.classList.add('selected-card');
});

