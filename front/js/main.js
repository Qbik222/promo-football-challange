(function () {
    const apiURL = 'https://fav-prom.com/api_football_challenge_2'

    const mainPage = document.querySelector(".fav-page"),
        popupsWrap = document.querySelector(".popup"),
        showPopupBtns = document.querySelectorAll(".info-icon"),
        popupItems = document.querySelectorAll(".popup__item"),
        choseBlock = document.querySelector(".chose"),
        resultBlock = document.querySelector(".result"),
        unauthMsgs = document.querySelectorAll('.unauth-msg'),
        participateBtns = document.querySelectorAll('.part-btn'),
        redirectBtns = document.querySelectorAll('.btn-join'),
        choseCards = document.querySelectorAll(".chose__card")

    const ukLeng = document.querySelector('#ukLeng');
    const enLeng = document.querySelector('#enLeng');

    const difficults = ["_easy", "_medium", "_hight"];
    const modeMap = {"novice": "_easy", "experienced": "_medium", "insane": "_hight", "_easy": "novice", "_medium": "experienced", "_hight": "insane"};

    let locale = sessionStorage.getItem("locale") ? sessionStorage.getItem("locale") : "uk"


    if (ukLeng) locale = 'uk';
    if (enLeng) locale = 'en';

    let debug = true

    let i18nData = {};
    const translateState = true;
    let userId;
    userId = 100300268

    function init() {
        if (window.store) {
            var state = window.store.getState();
            userId = state.auth.isAuthorized && state.auth.id || '';
            checkUserAuth();
        } else {
            checkUserAuth();
            let c = 0;
            var i = setInterval(function () {
                if (c < 50) {
                    if (!!window.g_user_id) {
                        userId = window.g_user_id;
                        checkUserAuth();
                        clearInterval(i);
                    }
                } else {
                    clearInterval(i);
                }
            }, 200);
        }
    }

    function participate(mode) {
        if (!userId || !mode) {
            return;
        }

        const params = {userid: userId, mode};
        request('/user', {
            method: 'POST',
            body: JSON.stringify(params)
        }).then(res => {
            participateBtns.forEach(item => item.classList.add('hide'));
            redirectBtns.forEach(item => item.classList.remove('hide'));
            const css = modeMap[mode];
            toggleBlocks(choseBlock, "choseHide", resultBlock, "resultShow", css, true);
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

    function translateKey(key, defaultVal) {
        if (!key) {
            return;
        }
        return i18nData[key] || defaultVal || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
    }

    function displayUserInfo(userInfo) {
        const bets = userInfo.bets.slice(0, 10);
        // let bets = [{betDate: new Date(), status: 'undefined'}]
        refreshBets(bets);
        displayBetsHistory(bets);
        refreshLastUpdatedDate(userInfo);
    }

    function refreshLastUpdatedDate(userInfo) {
        const dateContainer = document.querySelector('.result__last-upd');
        const span = document.getElementById('lastUpd');
        if (userInfo.lastUpdate) {
            span.innerHTML = formatDate(userInfo.lastUpdate);
            dateContainer.classList.remove('hide');
        } else {
            dateContainer.classList.add('hide');
        }
    }

    function formatDate(date) {
        const localDate = new Date(date);
        const day = String(localDate.getDate()).padStart(2, '0');
        const month = String(localDate.getMonth() + 1).padStart(2, '0');
        const hours = String(localDate.getHours()).padStart(2, '0');
        const minutes = String(localDate.getMinutes()).padStart(2, '0');
        return `${day}.${month} ${hours}:${minutes}`;
    }

    function refreshBets(bets) {
        const divs = document.querySelectorAll('.result__bets-item');
        for (let i = 0; i < bets.length; i++) {
            const element = divs[i];
            const bet = bets[i];
            element.classList.remove('you');
            element.classList.remove('_done');
            element.classList.remove('_fail');
            let status = '_fail';
            if (bet.status === 'win') {
                status = '_done';
            } else if (!bet.status || bet.status === 'undefined') {
                status = 'you';
            }
            element.classList.add(status);
        }
    }

    function displayBetsHistory(bets) {
        const spinItem = document.querySelector('.spins-row');
        const noSpinItem = document.querySelector('.no-spins');

        // const noBets = !bets || bets.length === 0;
        //
        // if (noBets && !debug) {
        //     console.log(noBets, debug)
        //     spinItem.classList.add('hide');
        //     noSpinItem.classList.remove('hide');
        //     return;
        // }

       //  spinItem.innerHTML =
       //      `
       // <div class="spins-row-head">
       //      <div class="content-date" data-translate="mySpinsDate"></div>
       //      <div class="content-prize" data-translate="mySpinsPrize"></div>
       //  </div>
       //  `;
       //  spinItem.classList.remove('hide');
       //  noSpinItem.classList.add('hide');
       //
       //  let upd = 0;
       //  bets.forEach(spin => {
       //      const spinDate = new Date(spin.betDate);
       //      const formattedDate = spinDate.toLocaleDateString('uk-UA');
       //      const status = resolveStatusTranslation(spin.status);
       //
       //      if (status) {
       //          const spinElement = document.createElement('div');
       //          spinElement.classList.add('spins-row-item');
       //
       //          spinElement.innerHTML = `
       //              <span class="content-date">${formattedDate}</span>
       //              <span class="content-prize">${status}</span>
       //          `;
       //          spinItem.appendChild(spinElement);
       //          upd++;
       //      }
       //  });
       //
       //  if (upd === 0) {
       //      spinItem.classList.add('hide');
       //      noSpinItem.classList.remove('hide');
       //  }
    }

    function resolveStatusTranslation(status) {
        if (!status || status === 'undefined') {
            return translateKey('betUndefined');
        }
        if (status === 'win') {
            return translateKey('winBet');
        }
        if (status === 'lose') {
            return translateKey('loseBet');
        }
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
                        participateBtns.forEach(item => item.classList.add('hide'));
                        redirectBtns.forEach(item => item.classList.remove('hide'));

                        const css = modeMap[res.mode];
                        toggleBlocks(choseBlock, "choseHide", resultBlock, "resultShow", css, false);
                        displayUserInfo(res);
                    } else {
                        initChooseCards(choseCards);
                        participateBtns.forEach(item => item.classList.remove('hide'));
                        redirectBtns.forEach(item => item.classList.remove('hide'));
                    }
                })
        } else {
            // displayUserSpins(0);
            for (let participateBtn of participateBtns) {
                participateBtn.classList.add('hide');
            }
            for (const unauthMes of unauthMsgs) {
                unauthMes.classList.remove('hide');
            }
            return Promise.resolve(false);
        }
    }

    loadTranslations()
        .then(init);

    let inited = false;
    function initChooseCards(cards){
        if (inited) {
            return;
        }

        cards.forEach(card =>{
            card.addEventListener("click", (e) =>{
                if(e.target.classList.contains("info-icon")){
                    return
                }
                for (let i = 0; i < difficults.length; i++) {
                    const item = difficults[i];
                    if (card.classList.contains(item)) {
                        const mode = modeMap[item];
                        participate(mode);
                        break;
                    }
                }
            })
        });
        inited = true;
    }

    function setPopup(wrap, popupName, btns, popupItems){
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

    startCountdown('.welcome__timer', '2025-01-30T23:59:59');

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


    function toggleBlocks(hideBlock, hideClass, showBlock, showClass, state, animate){
        mainPage.classList.add(state, locale)
        hideBlock.classList.add(hideClass)
        let drops = showBlock.querySelectorAll(".drop")
        drops.forEach(item =>{
            difficults.forEach(state =>{
                item.classList.remove(state)
            })
        })
        drops[0].classList.add(state)
        if(animate){
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
                        you.classList.add('showYou')
                    }, 2700)
                }
                setTimeout(() =>{
                    let btns = document.querySelectorAll(".result__btn")
                    btns.forEach(btn =>{
                        btn.classList.add("showBtn")
                    })
                }, 2900)
                setTimeout(() =>{
                    item.classList.add("showItem")
                }, 250 * items.length - i * 250)
            })
        })
    }

    //test

    document.querySelector(".hight-btn").addEventListener("click", () =>{
        difficults.forEach(css =>{
            mainPage.classList.remove(css)
        })

        toggleBlocks(choseBlock, "choseHide", resultBlock, "resultShow", "_hight", true);
    })
    document.querySelector(".easy-btn").addEventListener("click", () =>{
        difficults.forEach(css =>{
            mainPage.classList.remove(css)
        })
        toggleBlocks(choseBlock, "choseHide", resultBlock, "resultShow", "_easy", true);
    })
    document.querySelector(".medium-btn").addEventListener("click", () =>{
        difficults.forEach(css =>{
            mainPage.classList.remove(css)
        })
        toggleBlocks(choseBlock, "choseHide", resultBlock, "resultShow", "_medium", true);
    })
})();
