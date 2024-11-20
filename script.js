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
const consultingItems = document.querySelectorAll(".container .consulting__list .consulting__item");
const runningLines = document.querySelectorAll(".runningLine .text");
const clientsRows = document.querySelectorAll(".clients .clients__list .clients__row");

const popupWindow = document.querySelector(".popup");
const popupWindowHeader = popupWindow.querySelector(".popup__header");
const popupWindowTitle = popupWindow.querySelector(".title");
const popupWindowText = popupWindow.querySelector(".popup__content");
const popupClose = popupWindow.querySelector(".closeBtn");
const popupOverlay = document.querySelector(".popupOverlay");

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
consultingItems.forEach((el)=>{
    el.addEventListener('click', ()=>{
        popupWindow.classList.add('active');
        popupOverlay.classList.add('active');
        popupWindowTitle.textContent = el.querySelector('.title').textContent;
        popupWindowText.textContent = el.querySelector('.text').textContent;
        
        popupWindowHeader.style.backgroundImage = `url("${el.querySelector('.image img').src}")`;
    });
});
popupClose.addEventListener('click', ()=>{
    popupWindow.classList.remove('active');
    popupOverlay.classList.remove('active');
});
popupOverlay.addEventListener('click', ()=>{
    popupWindow.classList.remove('active');
    popupOverlay.classList.remove('active');
});

function setClientsElements(){
    let width = window.innerWidth;
    let firstRow = clientsRows[0].innerHTML;
    let secondRow = clientsRows[1].innerHTML;

    let countRepeatRows = Math.ceil(width/500);

    for(let i=0; i<countRepeatRows;i++) {
        firstRow += firstRow;
        secondRow += secondRow;
    }
    console.log(firstRow);
    clientsRows[0].innerHTML = firstRow;
    clientsRows[1].innerHTML = secondRow;
}

document.addEventListener("DOMContentLoaded", ()=>{
    setClientsElements()
});