const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView:2,
    centeredSlides: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        }
    },

});

const telInputs = document.querySelectorAll(".formPhone");

const prefixNumber = (str) => {
  if (str === "7") {
    return "7 (";
  }
  if (str === "8") {
    return "8 (";
  }
  if (str === "9") {
    return "7 (9";
  }
  return "7 (";
};

// ======================================
telInputs.forEach((el)=>{
    el.addEventListener("input", (e) => {
        const value = el.value.replace(/\D+/g, "");
        const numberLength = 11;
      
        let result;
        if (el.value.includes("+8") || el.value[0] === "8") {
          result = "";
        } else {
          result = "+";
        }
      
        //
        for (let i = 0; i < value.length && i < numberLength; i++) {
          switch (i) {
            case 0:
              result += prefixNumber(value[i]);
              continue;
            case 4:
              result += ") ";
              break;
            case 7:
              result += "-";
              break;
            case 9:
              result += "-";
              break;
            default:
              break;
          }
          result += value[i];
        }
        //
        el.value = result;
      });
})


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

const popupFeedbackWindow = document.querySelector(".popupFeedback");
const popupFeedbackOpen = document.querySelectorAll(".feedbackFormOpen");
const popupFeedbackWindowClose = popupFeedbackWindow.querySelector(".closeBtn");

const burgerMenu = document.querySelector(".burgerMenu");
const burgerMenuLinks = burgerMenu.querySelectorAll("a");
const openBurgerMenu = document.querySelector(".openBurger");

openBurgerMenu.addEventListener('click', ()=>{
    popupOverlay.classList.toggle('active');
    burgerMenu.classList.toggle('active');
})
burgerMenuLinks.forEach((el)=>{
    el.addEventListener('click', ()=>{
        burgerMenu.classList.remove('active');
        popupOverlay.classList.remove('active');
    });

})
popupFeedbackOpen.forEach((el)=>{
    el.addEventListener('click', (e)=>{
        e.preventDefault();
        popupFeedbackWindow.classList.add('active');
        popupOverlay.classList.add('active');
    })

});
popupFeedbackWindowClose.addEventListener('click', ()=>{
    popupFeedbackWindow.classList.remove('active');
    popupOverlay.classList.remove('active');
});

const toUpBtn = document.querySelector(".toUpBtn");

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
    el.addEventListener('click', (e)=>{
        e.preventDefault();
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
    popupFeedbackWindow.classList.remove('active');

    burgerMenu.classList.remove('active');
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
    clientsRows[0].innerHTML = firstRow;
    clientsRows[1].innerHTML = secondRow;
}
toUpBtn.addEventListener('click', ()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

function numbersAnimation() {
    const elements = {'years': document.querySelector(".numbers__item--years"), 'companies': document.querySelector(".numbers__item--companies"), 'specialists': document.querySelector(".numbers__item--specialists"), 'projects': document.querySelector(".numbers__item--projects")};

    const numbersValues = {'years': 15, 'companies': 70, 'specialists': 10, 'projects': 100};
    const yearsVal = 15;
    const companiesVal = 70;
    const specialistsVal = 10;
    const projectsVal = 100;

    setInterval(()=>{
        for(let [key,el] of Object.entries(elements)) {
            if(el.dataset.count<=numbersValues[key]) {
                let newVal = el.dataset.count++;
                el.querySelector('.number').textContent = newVal;

                if(el.dataset.count>numbersValues[key] && el.dataset.count>30) {
                    el.querySelector('.number').textContent += '+';
                }
            }
        }
    }, 200);
}
document.addEventListener("DOMContentLoaded", ()=>{
    setClientsElements();
    numbersAnimation();
});