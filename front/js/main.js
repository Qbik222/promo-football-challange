(function () {
    const apiURL = 'https://fav-prom.com/api_wheel_2025'

    const mainPage = document.querySelector(".fav-page"),
        popupsWrap = document.querySelector(".popup"),
        showPopupBtns = document.querySelectorAll(".info-icon"),
        popupItems = document.querySelectorAll(".popup__item"),
        choseBlock = document.querySelector(".chose"),
        resultBlock = document.querySelector(".result"),
        unauthMsgs = document.querySelectorAll('.unauth-msg'),
        participateBtns = document.querySelectorAll('.part-btn'),
        redirectBtns = document.querySelectorAll('.btn-join'),
        choseBtns = document.querySelectorAll(".chose__card-btn"),
        choseCards = document.querySelectorAll(".chose__card")

    const ukLeng = document.querySelector('#ukLeng');
    const enLeng = document.querySelector('#enLeng');


    let locale = 'uk';

    if (ukLeng) locale = 'uk';
    if (enLeng) locale = 'en';

    let userStatus = false,
        difficult = "_easy"

    let i18nData = {};
    const debug = true,
        translateState = false;
    let userId;
    userId = 7777777;
    // userId = 100300268


    const setPageState = () => {
       if(userStatus){
           toggleBlocks(choseBlock, "choseHide", resultBlock, "resultShow", difficult, userStatus)
       }
    }



    const InitPage = () => {
        setPageState()
    }
    function setupPage() {
        InitPage();
    }
    function init() {
        if (window.store) {
            var state = window.store.getState();
            userId = state.auth.isAuthorized && state.auth.id || '';
            checkUserAuth().then(setupPage);
        } else {
            checkUserAuth().then(setupPage);
            let c = 0;
            var i = setInterval(function () {
                if (c < 50) {
                    if (!!window.g_user_id) {
                        userId = window.g_user_id;
                        checkUserAuth().then(setupPage);
                        clearInterval(i);
                    }
                } else {
                    clearInterval(i);
                }
            }, 200);
        }

        participateBtns.forEach((authBtn, i) => {
            authBtn.addEventListener('click', (e) => {
                e.preventDefault();
                participate();
            });
        });
    }

    function participate() {
        if (!userId) {
            return;
        }

        const params = {userid: userId};
        request('/user', {
            method: 'POST',
            body: JSON.stringify(params)
        }).then(res => {
            participateBtns.forEach(item => item.classList.add('hide'));
            redirectBtns.forEach(item => item.classList.remove('hide'));
            setupPage();
        });
    }

    function loadTranslations() {
        return fetch(`${apiURL}/translates/${locale}`).then(res => res.json())
            .then(json => {
                i18nData = json;
                translate();

                var mutationObserver = new MutationObserver(function (mutations) {
                    translate();
                });

            });
    }

    function translate() {
        const elems = document.querySelectorAll('[data-translate]')
        if (elems && elems.length) {
            if(translateState){
                elems.forEach(elem => {
                    const key = elem.getAttribute('data-translate');
                    elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
                    elem.removeAttribute('data-translate');
                })
            }else{
               console.log("translation work!")
            }
        }
        if (locale === 'en') {
            mainPage.classList.add('en');
        }
        refreshLocalizedClass();
    }

    function translateKey(key) {
        if (!key) {
            return;
        }
        return i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
    }

    function displayUserSpins(spins) {
        const spinItem = document.querySelector('.spins-row');
        const noSpinItem = document.querySelector('.no-spins');

        // console.log(spins)

        if (!spins || spins.length === 0) {
            spinItem.classList.add('hide');
            noSpinItem.classList.remove('hide');
            return;
        }

        // const spinsContainer = document.querySelector('.spins-row');
        spinItem.innerHTML =
            `
       <div class="spins-row-head">
            <div class="content-date" data-translate="mySpinsDate"></div>
            <div class="content-prize" data-translate="mySpinsPrize"></div>
        </div>
        `

        spinItem.classList.remove('hide');
        noSpinItem.classList.add('hide');
        // console.log(noSpinItem)

        spins.forEach(spin => {
            const spinDate = new Date(spin.date);
            const formattedDate = spinDate.toLocaleDateString('uk-UA');
            const spinName = translateKey(spin.name) || '';

            const spinElement = document.createElement('div');
            spinElement.classList.add('spins-row-item');

            spinElement.innerHTML = `
            <span class="content-date">${formattedDate}</span>
            <span class="content-prize">${spinName}</span>
        `;

            spinItem.appendChild(spinElement);
        });
    }

    function refreshLocalizedClass(element, baseCssClass) {
        if (!element) {
            return;
        }
        for (const lang of ['uk', 'en']) {
            element.classList.remove(baseCssClass + lang);
        }
        element.classList.add(baseCssClass + locale);
    }


    const request = function (link, extraOptions) {
        return fetch(apiURL + link, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            ...(extraOptions || {})
        }).then(res => res.json())
    }

    function checkUserAuth() {
        if (userId) {
            for (const unauthMes of unauthMsgs) {
                unauthMes.classList.add('hide');
            }
            return request(`/favuser/${userId}?nocache=1`)
                .then(res => {
                    if (res.userid) {
                        console.log(res.userid)
                        participateBtns.forEach(item => item.classList.add('hide'));
                        redirectBtns.forEach(item => item.classList.remove('hide'));
                        setChoseCards(choseCards)
                        if (debug) {
                            // res.pointsPerDay = 30;
                            // res.spinAllowed = true;
                            // res.spinsStreak = 3;
                            res.spins = [];
                        }
                        displayUserSpins(res.spins);
                    }else{
                        choseBtns.forEach(item => item.classList.add('hide'));
                        participateBtns.forEach(item => item.classList.remove('hide'));
                    }
                })
        } else {
            // displayUserSpins(0);
            for (let participateBtn of participateBtns) {
                participateBtn.classList.add('hide');
            }
            for (let choseBtn of choseBtns) {
                choseBtn.classList.add('hide');
            }
            for (const unauthMes of unauthMsgs) {
                unauthMes.classList.remove('hide');
            }
            return Promise.resolve(false);
        }
    }

    loadTranslations()
        .then(init);

    function setChoseCards(cards){
        const difficults = ["_easy", "_medium", "_hight"]


        cards.forEach(card =>{
            card.addEventListener("click", () =>{
                // console.log(card)
                difficults.forEach(item =>{
                    if(card.classList.contains(item)){
                        toggleBlocks(choseBlock, "choseHide", resultBlock, "resultShow", item, userStatus)
                    }
                })

            })
        })
    }

    function setPopup (wrap, popupName, btns, popupItems){
        let popup = wrap.querySelector(`.${popupName}`)

        wrap.addEventListener("click", (e) =>{
            e.target === wrap ? closePopup() : null
        })

        const closePopup = () =>{
            popup.classList.remove("_active")
            document.body.style.overflow = "auto"
            wrap.classList.add("_opacity")
        }

        btns.forEach(btn => {
            if(btn.parentNode.parentNode.classList.contains(popupName)){
                btn.parentNode.addEventListener("click", (e) =>{
                    if(e.target === btn){
                        e.preventDefault()
                    }
                })
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
                        closePopup()
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


    function toggleBlocks (hideBlock, hideClass, showBlock, showClass, state, userStatus){
        mainPage.classList.add(state)
        hideBlock.classList.add(hideClass)
        if(!userStatus){
            hideBlock.addEventListener("animationend", () =>{
                showBlock.style.display = "flex"
                showBlock.style.height = hideBlock.clientHeight
                hideBlock.classList.add("hide")
                setTimeout(() =>{
                    showResultBlock(showBlock, showClass)
                }, 50)
            })
        }else{
            showBlock.style.display = "flex"
            showBlock.style.height = hideBlock.clientHeight
            hideBlock.classList.add("hide")
            showResultBlock(showBlock, showClass)
        }

    }

    function showResultBlock(showBlock, showClass){
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
    }

    document.querySelector('.welcome__scroll').addEventListener('click', function () {
        const targetBlock = document.querySelector('.chose');
        targetBlock.scrollIntoView({ behavior: 'smooth' });
    });


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
                toggleBlocks(choseBlock, "choseHide", resultBlock, "resultShow", state, userStatus)
            }
        })
    }


    changeStatePage(easyBtn, "_easy")
    changeStatePage(mediumBtn, "_medium")
    changeStatePage(hightBtn, "_hight")

    menuBtn.addEventListener("click", () =>{
        menu.classList.toggle("hide")
    })

    darkBtn.addEventListener("click", () =>{
        document.body.classList.toggle("dark")
    })

    // changeStatePage(noStateBtn, false)
})();