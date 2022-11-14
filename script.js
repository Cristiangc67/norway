
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
    if(scrollValue >= 700){
        nav.classList.add('navchange')
    }else{
        nav.classList.remove('navchange')
    }

}
/* 700 */
window.addEventListener('scroll', cambiarNav);