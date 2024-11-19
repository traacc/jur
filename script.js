const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView:5.5,
    //centeredSlides: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

const consultingBtns = document.querySelectorAll(".container .tabBtn");
const consultingLists = document.querySelectorAll(".container .consulting__list");
const runningLines = document.querySelectorAll(".runningLine .text");

consultingBtns.forEach((el, index)=>{
    el.addEventListener('click', ()=>{
        consultingBtns.forEach((el)=>{el.classList.remove('active')});
        consultingLists.forEach((el)=>{el.classList.remove('active')});
        runningLines.forEach((el)=>{el.classList.remove('active')});

        el.classList.add('active');
        consultingLists[index].classList.add('active');
        runningLines[index].classList.add('active');
    });
});