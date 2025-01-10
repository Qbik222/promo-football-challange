const mainPage = document.querySelector(".fav-page"),
    popupsWrap = document.querySelector(".popup"),
    showPopupBtns = document.querySelectorAll(".info-icon"),
    popupItems = document.querySelectorAll(".popup__item"),
    choseBlock = document.querySelector(".chose"),
    resultBlock = document.querySelector(".result")

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
    const elements = document.querySelectorAll(`${selector} .welcome__timer-item-num`);
    if (elements.length !== 4) {
        console.error('Invalid selector!');
        return;
    }

    const targetDate = new Date(endDate).getTime();

    function updateTimer() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            clearInterval(intervalId);
            setTimerValues([0, 0, 0, 0]);
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        setTimerValues([days, hours, minutes, seconds]);
    }

    function setTimerValues(values) {
        values.forEach((value, index) => {
            elements[index].textContent = value < 10 ? `0${value}` : value;
        });
    }

    updateTimer();
    const intervalId = setInterval(updateTimer, 1000);
}

startCountdown('.welcome__timer', '2025-01-31T23:59:59');

function monitorVisibility(selector, animation, delay) {
    const element = document.querySelector(selector);

    if (!element) {
        console.error('Element not found!');
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(() =>{
                    element.classList.add(animation)
                }, delay)
            }
        });
    });

    observer.observe(element);
}

monitorVisibility('.notify__pers', "showZeus", 0);
monitorVisibility('.notify__pers-buble', "showZeusBuble", 1200);
monitorVisibility('.chose__pers-buble', "showZeusBuble", 0);
monitorVisibility('.chose__card._easy', "showCard", 400);
monitorVisibility('.chose__card._medium', "showCard", 800);
monitorVisibility('.chose__card._hight', "showCard", 1200);


function toggleBlocks (hideBlock, hideClass, showBlock, showClass, state){
    mainPage.classList.add(state)
    hideBlock.classList.add(hideClass)
    hideBlock.addEventListener("animationend", () =>{
        showBlock.style.display = "flex"
        showBlock.style.height = hideBlock.clientHeight
        hideBlock.classList.add("_hidden")
        setTimeout(() =>{
            showBlock.classList.add(showClass)
            showBlock.style.height = "auto"
            setTimeout(() =>{
                let items = showBlock.querySelectorAll(".result__bets-item")
                items.forEach((item, i) =>{
                    if(item.classList.contains("you")){
                        setTimeout(() =>{
                            let you = item.querySelector(".result__bets-you")
                            let btn = document.querySelector(".result__btn")
                            you.classList.add('showYou')
                            setTimeout(() =>{
                                btn.classList.add("showBtn")
                            }, 200)
                        }, 2700)
                    }
                    setTimeout(() =>{
                        item.classList.add("showItem")
                    }, 250 * items.length - i * 250)
                })
            })
        }, 50)
    })
}

//for test
const menuBtn = document.querySelector(".menu-btn"),
    menu = document.querySelector(".menu-test"),
    easyBtn = document.querySelector(".easy"),
    mediumBtn = document.querySelector(".medium"),
    hightBtn = document.querySelector(".hight"),
    noStateBtn = document.querySelector(".not-join"),
    darkBtn = document.querySelector(".dark")

function changeStatePage (btn, state){
    btn.addEventListener("click", () =>{
        mainPage.className = "fav-page"
        if(state){
            toggleBlocks(choseBlock, "choseHide", resultBlock, "resultShow", state)
        }
    })
}


changeStatePage(easyBtn, "_easy")
changeStatePage(mediumBtn, "_medium")
changeStatePage(hightBtn, "_hight")

menuBtn.addEventListener("click", () =>{
    menu.classList.toggle("_hidden")
})

darkBtn.addEventListener("click", () =>{
    document.body.classList.toggle("dark")
})

// changeStatePage(noStateBtn, false)
