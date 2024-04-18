const carousel = document.querySelector(".swiper-slide");
const dragging = (e) =>{
    console.lo(e.pageX);
}

carousel.addEventListener("mousemove", dragging);