const slides=document.querySelectorAll(".gallery-item")
const lightbox=document.getElementById("lightbox")
const imageModal=document.querySelector(".image-modal")
slides.forEach(slide=>{slide.onclick=(e)=>{lightbox.showModal()
imageModal.src=e.target.src}});let slideIndex=0;function showSlides(index){slideIndex+=index;if(slideIndex>=slides.length){slideIndex=0}
if(slideIndex<0){slideIndex=slides.length-1}
imageModal.src=slides[slideIndex].src}
lightbox.addEventListener("click",(e)=>{if(e.target===lightbox){lightbox.close()}})
