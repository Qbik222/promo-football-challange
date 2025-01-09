const mainPage = document.querySelector(".fav-page"),
    popupsWrap = document.querySelector(".popup"),
    showPopupBtns = document.querySelectorAll(".info-icon"),
    popupItems = document.querySelectorAll(".popup__item")

function setPopup (wrap, popupName, btns, popupItems){
    let popup = wrap.querySelector(`.${popupName}`)

    btns.forEach(btn => {
        if(btn.parentNode.parentNode.classList.contains(popupName)){
            btn.addEventListener("click", () =>{
                popupItems.forEach(item =>{
                    item.classList.remove("_active")
                })
                popup.classList.add("_active")
                document.body.style.overflow = "hidden"
                wrap.classList.remove("_opacity")
            })
            let closeBtn = popup.querySelector(".popup__close")
            closeBtn.addEventListener("click", () =>{
                popup.classList.remove("_active")
                document.body.style.overflow = "auto"
                wrap.classList.add("_opacity")
            })
        }
    })
}

setPopup(popupsWrap, "_easy", showPopupBtns, popupItems)
setPopup(popupsWrap, "_medium", showPopupBtns, popupItems)
setPopup(popupsWrap, "_hight", showPopupBtns, popupItems)
setPopup(popupsWrap, "_notify", showPopupBtns, popupItems)

function startCountdown(selector, endDate) {
    const timerDays = document.querySelector(`${selector} .welcome__timer-item:nth-child(1) .welcome__timer-item-num`),
        timerHours = document.querySelector(`${selector} .welcome__timer-item:nth-child(2) .welcome__timer-item-num`),
        timerMinutes = document.querySelector(`${selector} .welcome__timer-item:nth-child(3) .welcome__timer-item-num`),
        timerSeconds = document.querySelector(`${selector} .welcome__timer-item:nth-child(4) .welcome__timer-item-num`);

    const targetDate = new Date(endDate).getTime();

    const countdown = setInterval(() => {
        const now = new Date().getTime(),
            timeLeft = targetDate - now,
            days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
            hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
            seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        timerDays.textContent = days < 10 ? `0${days}` : days;
        timerHours.textContent = hours < 10 ? `0${hours}` : hours;
        timerMinutes.textContent = minutes < 10 ? `0${minutes}` : minutes;
        timerSeconds.textContent = seconds < 10 ? `0${seconds}` : seconds;

        if (timeLeft < 0) {
            clearInterval(countdown);
            timerDays.textContent = '00';
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
    }, 1000);
}

startCountdown('.welcome__timer', '2025-01-31T23:59:59');



//for test
const menuBtn = document.querySelector(".menu-btn"),
    menu = document.querySelector(".menu-test"),
    easyBtn = document.querySelector(".easy"),
    mediumBtn = document.querySelector(".medium"),
    hightBtn = document.querySelector(".hight"),
    noStateBtn = document.querySelector(".not-join")

function changeStatePage (btn, state){
    btn.addEventListener("click", () =>{
        mainPage.className = "fav-page"
        if(state){
            mainPage.classList.add(state)
        }
    })
}

changeStatePage(easyBtn, "_easy")
changeStatePage(mediumBtn, "_medium")
changeStatePage(hightBtn, "_hight")
changeStatePage(noStateBtn, false)
