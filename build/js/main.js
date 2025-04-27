"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function () {
  var _document$querySelect;
  var apiURL = 'https://fav-prom.com/api_football_challenge_2';
  var mainPage = document.querySelector(".fav-page"),
    popupsWrap = document.querySelector(".popup"),
    showPopupBtns = document.querySelectorAll(".info-icon"),
    popupItems = document.querySelectorAll(".popup__item"),
    choseBlock = document.querySelector(".chose"),
    resultBlock = document.querySelector(".result"),
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.part-btn'),
    redirectBtns = document.querySelectorAll('.btn-join'),
    choseCards = document.querySelectorAll(".chose__card");
  var ukLeng = document.querySelector('#ukLeng');
  var enLeng = document.querySelector('#enLeng');
  var difficults = ["_easy", "_medium", "_hight"];
  var modeMap = {
    "novice": "_easy",
    "experienced": "_medium",
    "insane": "_hight",
    "_easy": "novice",
    "_medium": "experienced",
    "_hight": "insane"
  };
  var locale = sessionStorage.getItem("locale") ? sessionStorage.getItem("locale") : "uk";
  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var debug = false;
  var mockBets = [{
    id: 388310247,
    betDate: '2025-04-20T12:00:00',
    status: 'win'
  }, {
    id: 388310247,
    betDate: '2025-04-20T12:00:00',
    status: 'win'
  }, {
    id: 388310248,
    betDate: '2025-04-19T15:30:00',
    status: 'lose'
  }, {
    id: 388310248,
    betDate: '2025-04-19T15:30:00',
    status: 'win'
  }, {
    id: 388310248,
    betDate: '2025-04-19T15:30:00',
    status: 'lose'
  }, {
    id: 388310248,
    betDate: '2025-04-19T15:30:00',
    status: 'lose'
  }, {
    id: 388310248,
    betDate: '2025-04-19T15:30:00',
    status: 'lose'
  }, {
    id: 388310249,
    betDate: '2025-04-18T09:15:00',
    status: undefined
  }];
  var mockUsers = [{
    userid: 388310247,
    bet: 10
  }, {
    userid: 123456789,
    bet: 9
  }, {
    userid: 100300368,
    bet: 8
  }, {
    userid: 100300168,
    bet: 8
  }, {
    userid: 100300068,
    bet: 8
  }, {
    userid: 100308268,
    bet: 8
  }, {
    userid: 111222333,
    bet: 7
  }, {
    userid: 111222343,
    bet: 7
  }, {
    userid: 111222353,
    bet: 6
  }, {
    userid: 111222363,
    bet: 5
  }, {
    userid: 444555666,
    bet: 5
  }, {
    userid: 100300268,
    bet: 6
  }];
  sessionStorage.removeItem("userMode");
  var i18nData = {};
  var translateState = true;
  var userMode;
  var userId = sessionStorage.getItem('userId') ? Number(sessionStorage.getItem('userId')) : null;
  userId;
  function init() {
    renderUsers(); // для локального запуску
    if (window.store) {
      var state = window.store.getState();
      userId = state.auth.isAuthorized && state.auth.id || '';
      checkUserAuth();
      renderUsers();
    } else {
      checkUserAuth();
      var c = 0;
      var i = setInterval(function () {
        if (c < 50) {
          if (!!window.g_user_id) {
            userId = window.g_user_id;
            checkUserAuth();
            renderUsers();
            clearInterval(i);
          }
        } else {
          renderUsers();
          clearInterval(i);
        }
      }, 200);
    }
  }
  function participate(mode) {
    if (!userId || !mode) {
      return;
    }
    var params = {
      userid: userId,
      mode: mode
    };
    request('/user', {
      method: 'POST',
      body: JSON.stringify(params)
    }).then(function (res) {
      participateBtns.forEach(function (item) {
        return item.classList.add('hide');
      });
      redirectBtns.forEach(function (item) {
        return item.classList.remove('hide');
      });
      var css = modeMap[mode];
      toggleBlocks(choseBlock, "choseHide", resultBlock, "resultShow", css, true);
    });
  }
  function loadTranslations() {
    return fetch("".concat(apiURL, "/translates/").concat(locale)).then(function (res) {
      return res.json();
    }).then(function (json) {
      i18nData = json;
      translate();
      var mutationObserver = new MutationObserver(function (mutations) {
        translate();
      });
      mutationObserver.observe(document.getElementById("football-challenge"), {
        childList: true,
        subtree: true
      });
    });
  }
  function translate() {
    var elems = document.querySelectorAll('[data-translate]');
    if (elems && elems.length) {
      if (translateState) {
        elems.forEach(function (elem) {
          var key = elem.getAttribute('data-translate');
          elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
          elem.removeAttribute('data-translate');
        });
      } else {
        console.log("translation work!");
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
    var bets = userInfo.bets.slice(0, 20);
    // let bets = [{betDate: new Date(), status: 'undefined'}]
    console.log(userInfo);
    refreshBets(bets);
    displayBetsHistory(bets);
    refreshLastUpdatedDate(userInfo);
  }
  function refreshLastUpdatedDate(userInfo) {
    var dateContainer = document.querySelector('.result__last-upd');
    var span = document.getElementById('lastUpd');
    if (userInfo.lastUpdate) {
      span.innerHTML = formatDate(userInfo.lastUpdate);
      dateContainer.classList.remove('hide');
    } else {
      // dateContainer.classList.add('hide');
    }
  }
  function formatDate(date) {
    var localDate = new Date(date);
    var day = String(localDate.getDate()).padStart(2, '0');
    var month = String(localDate.getMonth() + 1).padStart(2, '0');
    var hours = String(localDate.getHours()).padStart(2, '0');
    var minutes = String(localDate.getMinutes()).padStart(2, '0');
    return "".concat(day, ".").concat(month, " ").concat(hours, ":").concat(minutes);
  }
  function refreshBets(bets) {
    var divs = document.querySelectorAll('.result__bets-item');
    for (var i = 0; i < bets.length; i++) {
      var element = divs[i];
      var bet = bets[i];
      element.classList.remove('you');
      element.classList.remove('_done');
      element.classList.remove('_fail');
      var status = '_fail';
      if (bet.status === 'win') {
        status = '_done';
      } else if (!bet.status || bet.status === 'undefined') {
        status = 'you';
      }
      element.classList.add(status);
    }
  }
  function displayBetsHistory(bets) {
    // return;
    var spinItem = document.querySelector('.spins-row');
    var noSpinItem = document.querySelector('.no-spins');
    var noBets = !bets || bets.length === 0;
    if (noBets && !debug) {
      console.log(noBets, debug);
      spinItem.classList.add('hide');
      noSpinItem.classList.remove('hide');
      return;
    }
    if (debug) {
      bets = mockBets;
    }
    console.log(bets);
    spinItem.innerHTML = "\n       <div class=\"spins-row-head\">\n            <div class=\"content-date\" data-translate=\"myBetDate\"></div>\n            <div class=\"content-prize\" data-translate=\"myBetPrize\"></div>\n            <div class=\"content-status\" data-translate=\"myBetStatus\"></div>\n        </div>\n        ";
    spinItem.classList.remove('hide');
    noSpinItem.classList.add('hide');
    var upd = 0;
    bets.forEach(function (spin) {
      var spinDate = new Date(spin.betDate);
      var formattedDate = spinDate.toLocaleDateString('uk-UA').slice(0, 5);
      var status = resolveStatusTranslation(spin.status);
      if (status) {
        var spinElement = document.createElement('div');
        spinElement.classList.add('spins-row-item');
        var isWin = spin.win;
        var statusClass = isWin ? '_done' : '';
        spinElement.innerHTML = "\n                    <span class=\"content-date\">".concat(formattedDate, "</span>\n                    <span class=\"content-prize\">ID:").concat(spin.betId, "</span>\n                    <span class=\"content-status ").concat(statusClass, "\"></span>\n                ");
        spinItem.appendChild(spinElement);
        upd++;
      }
    });
    if (upd === 0) {
      spinItem.classList.add('hide');
      noSpinItem.classList.remove('hide');
    }
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
    for (var _i = 0, _arr = ['uk', 'en']; _i < _arr.length; _i++) {
      var lang = _arr[_i];
      element.classList.remove(baseCssClass + lang);
    }
    element.classList.add(baseCssClass + locale);
  }
  var request = function request(link, extraOptions) {
    return fetch(apiURL + link, _objectSpread({
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }, extraOptions || {})).then(function (res) {
      return res.json();
    });
  };
  function checkUserAuth() {
    if (userId) {
      var _iterator = _createForOfIteratorHelper(unauthMsgs),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var unauthMes = _step.value;
          unauthMes.classList.add('hide');
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return request("/favuser/".concat(userId, "?nocache=1")).then(function (res) {
        if (res.userid) {
          participateBtns.forEach(function (item) {
            return item.classList.add('hide');
          });
          redirectBtns.forEach(function (item) {
            return item.classList.remove('hide');
          });
          if (res.mode) {
            userMode = res.mode;
          }
          sessionStorage.setItem("userMode", userMode);
          var css = modeMap[res.mode];
          toggleBlocks(choseBlock, "choseHide", resultBlock, "resultShow", css, false);
          console.log(res);
          displayUserInfo(res);
        } else {
          initChooseCards(choseCards);
          participateBtns.forEach(function (item) {
            return item.classList.remove('hide');
          });
          redirectBtns.forEach(function (item) {
            return item.classList.add('hide');
          });
        }
      });
    } else {
      // displayUserSpins(0);
      var _iterator2 = _createForOfIteratorHelper(participateBtns),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var participateBtn = _step2.value;
          participateBtn.classList.add('hide');
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var _iterator3 = _createForOfIteratorHelper(unauthMsgs),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _unauthMes = _step3.value;
          _unauthMes.classList.remove('hide');
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return Promise.resolve(false);
    }
  }
  function renderUsers() {
    console.log("render");
    if (debug) {
      populateUsersTable(mockUsers, userId);
      return;
    }
    userMode = sessionStorage.getItem("userMode");
    request("/users/").then(function (data) {
      var users = data.filter(function (user) {
        return user.mode === userMode;
      });
      console.log(users);
      populateUsersTable(users, userId);
    });
  }
  function populateUsersTable(users, currentUserId) {
    var youRow = document.querySelector('#tableOther');
    var tableBody = document.querySelector('#table');
    if (!(users !== null && users !== void 0 && users.length) || currentUserId === undefined) return; // додано перевірку на currentUserId

    // Очищення
    youRow.innerHTML = '';
    tableBody.innerHTML = '';
    users.sort(function (a, b) {
      return b.bet - a.bet;
    });
    users.forEach(function (user, index) {
      var isCurrentUser = user.userid === currentUserId;
      var isTopUser = false;
      if (index <= 5 && isCurrentUser) {
        isTopUser = true;
      }
      displayUser(user, isCurrentUser, index + 1, isCurrentUser && !isTopUser ? youRow : tableBody);
    });
  }
  function displayUser(user, isCurrentUser, place, target) {
    console.log(target);
    var userIdDisplay = isCurrentUser ? user.userid : maskUserId(user.userid);
    var row = document.createElement('div');
    row.classList.add('table__row');
    console.log(target);
    if (isCurrentUser) {
      // Створення елементу 'you' та вставка його після елементу з місцем
      var youText = document.createElement('div');
      youText.classList.add('table__row-item', '_you-text');
      youText.setAttribute('data-translate', 'you');
      row.innerHTML = "\n            <div class=\"table__row-item\">".concat(place, "</div>\n        ");

      // Додаємо "you" текст після місця
      row.appendChild(youText);

      // Потім додаємо userId та ставку
      var userIdDiv = document.createElement('div');
      userIdDiv.classList.add('table__row-item');
      userIdDiv.textContent = userIdDisplay;
      var betDiv = document.createElement('div');
      betDiv.classList.add('table__row-item');
      betDiv.textContent = user.winCount;
      row.appendChild(userIdDiv);
      row.appendChild(betDiv);
      row.classList.add('_you');
      // target.innerHTML = ''; // очищаємо target перед додаванням нового контенту
    } else {
      console.log(row);
      // Для інших користувачів, додаємо без зміни структури
      row.innerHTML = "\n            <div class=\"table__row-item\">".concat(place, "</div>\n            <div class=\"table__row-item\">").concat(userIdDisplay, "</div>\n            <div class=\"table__row-item\">").concat(user.winCount, "</div>\n        ");
      console.log(row);
    }
    target.appendChild(row);
  }
  function maskUserId(userId) {
    return "**" + userId.toString().slice(2);
  }
  loadTranslations().then(init);
  var inited = false;
  function initChooseCards(cards) {
    if (inited) {
      return;
    }
    cards.forEach(function (card) {
      card.addEventListener("click", function (e) {
        if (e.target.classList.contains("info-icon")) {
          return;
        }
        for (var i = 0; i < difficults.length; i++) {
          var item = difficults[i];
          if (card.classList.contains(item)) {
            var mode = modeMap[item];
            participate(mode);
            setTimeout(function () {
              checkUserAuth();
              renderUsers();
            }, 200);
            break;
          }
        }
      });
    });
    inited = true;
  }
  function setPopup(wrap, popupName, btns, popupItems) {
    var popup = wrap.querySelector(".".concat(popupName));
    wrap.addEventListener("click", function (e) {
      e.target === wrap ? closePopup() : null;
    });
    var closePopup = function closePopup() {
      popup.classList.remove("_active");
      document.body.style.overflow = "auto";
      wrap.classList.add("_opacity");
    };
    btns.forEach(function (btn) {
      if (btn.parentNode.parentNode.classList.contains(popupName)) {
        btn.parentNode.addEventListener("click", function (e) {
          if (e.target === btn) {
            e.preventDefault();
          }
        });
        btn.addEventListener("click", function () {
          popupItems.forEach(function (item) {
            item.classList.remove("_active");
          });
          popup.classList.add("_active");
          document.body.style.overflow = "hidden";
          wrap.classList.remove("_opacity");
        });
        var closeBtn = popup.querySelector(".popup__close");
        closeBtn.addEventListener("click", function () {
          closePopup();
        });
      }
    });
  }
  setPopup(popupsWrap, "_easy", showPopupBtns, popupItems);
  setPopup(popupsWrap, "_medium", showPopupBtns, popupItems);
  setPopup(popupsWrap, "_hight", showPopupBtns, popupItems);
  setPopup(popupsWrap, "_notify", showPopupBtns, popupItems);
  function startCountdown(selector, endDate) {
    var elements = document.querySelectorAll("".concat(selector, " .welcome__timer-item-num"));
    if (elements.length !== 4) {
      console.error('Invalid selector!');
      return;
    }
    var targetDate = new Date(endDate).getTime();
    function updateTimer() {
      var now = new Date().getTime();
      var timeLeft = targetDate - now;
      if (timeLeft <= 0) {
        clearInterval(intervalId);
        setTimerValues([0, 0, 0, 0]);
        return;
      }
      var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      var hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      var minutes = Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60));
      var seconds = Math.floor(timeLeft % (1000 * 60) / 1000);
      setTimerValues([days, hours, minutes, seconds]);
    }
    function setTimerValues(values) {
      values.forEach(function (value, index) {
        elements[index].textContent = value < 10 ? "0".concat(value) : value;
      });
    }
    updateTimer();
    var intervalId = setInterval(updateTimer, 1000);
  }
  startCountdown('.welcome__timer', '2025-06-30T23:59:59');
  function monitorVisibility(selector, animation, delay) {
    var element = document.querySelector(selector);
    if (!element) {
      console.error('Element not found!');
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setTimeout(function () {
            element.classList.add(animation);
          }, delay);
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
  function toggleBlocks(hideBlock, hideClass, showBlock, showClass, state, animate) {
    mainPage.classList.add(state, locale);
    hideBlock.classList.add(hideClass);
    var drops = showBlock.querySelectorAll(".drop");
    drops.forEach(function (item) {
      difficults.forEach(function (state) {
        item.classList.remove(state);
      });
    });
    drops[0].classList.add(state);
    if (animate) {
      hideBlock.addEventListener("animationend", function () {
        showBlock.style.display = "flex";
        showBlock.style.height = hideBlock.clientHeight;
        hideBlock.classList.add("hide");
        setTimeout(function () {
          showResultBlock(showBlock, showClass);
        }, 50);
      });
    } else {
      showBlock.style.display = "flex";
      showBlock.style.height = hideBlock.clientHeight;
      hideBlock.classList.add("hide");
      showResultBlock(showBlock, showClass);
    }
  }
  function showResultBlock(showBlock, showClass) {
    showBlock.classList.add(showClass);
    showBlock.style.height = "auto";
    setTimeout(function () {
      var items = showBlock.querySelectorAll(".result__bets-item");
      items.forEach(function (item, i) {
        if (item.classList.contains("you")) {
          setTimeout(function () {
            var you = item.querySelector(".result__bets-you");
            you.classList.add('showYou');
          }, 2700);
        }
        setTimeout(function () {
          var btns = document.querySelectorAll(".result__btn");
          btns.forEach(function (btn) {
            btn.classList.add("showBtn");
          });
        }, 2900);
        setTimeout(function () {
          item.classList.add("showItem");
        }, 250 * items.length - i * 250);
      });
    });
  }
  document.querySelector(".toChose").addEventListener('click', function (e) {
    e.stopPropagation();
    var targetElement = document.getElementById("chose");
    var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 2;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });

  //test

  document.querySelector(".menu-btn").addEventListener("click", function () {
    document.querySelector(".menu-test").classList.toggle("hide");
  });
  document.querySelector(".hight-btn").addEventListener("click", function () {
    difficults.forEach(function (css) {
      mainPage.classList.remove(css);
    });
    toggleBlocks(choseBlock, "choseHide", resultBlock, "resultShow", "_hight", true);
  });
  document.querySelector(".easy-btn").addEventListener("click", function () {
    difficults.forEach(function (css) {
      mainPage.classList.remove(css);
    });
    toggleBlocks(choseBlock, "choseHide", resultBlock, "resultShow", "_easy", true);
  });
  document.querySelector(".medium-btn").addEventListener("click", function () {
    difficults.forEach(function (css) {
      mainPage.classList.remove(css);
    });
    toggleBlocks(choseBlock, "choseHide", resultBlock, "resultShow", "_medium", true);
  });
  (_document$querySelect = document.querySelector('.auth-btn')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.addEventListener('click', function () {
    var hasId = sessionStorage.getItem('userId');
    hasId ? sessionStorage.removeItem('userId') : sessionStorage.setItem('userId', '100300268');
    location.reload();
  });
  document.querySelector(".lng-btn").addEventListener("click", function () {
    var currentLocale = sessionStorage.getItem("locale");
    if (currentLocale === "en") {
      sessionStorage.removeItem("locale");
    } else {
      sessionStorage.setItem("locale", "en");
    }
    location.reload();
  });
  document.querySelector(".dark-btn").addEventListener("click", function () {
    document.body.classList.toggle("dark");
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwb3B1cHNXcmFwIiwic2hvd1BvcHVwQnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwb3B1cEl0ZW1zIiwiY2hvc2VCbG9jayIsInJlc3VsdEJsb2NrIiwidW5hdXRoTXNncyIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImNob3NlQ2FyZHMiLCJ1a0xlbmciLCJlbkxlbmciLCJkaWZmaWN1bHRzIiwibW9kZU1hcCIsImxvY2FsZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImRlYnVnIiwibW9ja0JldHMiLCJpZCIsImJldERhdGUiLCJzdGF0dXMiLCJ1bmRlZmluZWQiLCJtb2NrVXNlcnMiLCJ1c2VyaWQiLCJiZXQiLCJyZW1vdmVJdGVtIiwiaTE4bkRhdGEiLCJ0cmFuc2xhdGVTdGF0ZSIsInVzZXJNb2RlIiwidXNlcklkIiwiTnVtYmVyIiwiaW5pdCIsInJlbmRlclVzZXJzIiwid2luZG93Iiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImNoZWNrVXNlckF1dGgiLCJjIiwiaSIsInNldEludGVydmFsIiwiZ191c2VyX2lkIiwiY2xlYXJJbnRlcnZhbCIsInBhcnRpY2lwYXRlIiwibW9kZSIsInBhcmFtcyIsInJlcXVlc3QiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJmb3JFYWNoIiwiaXRlbSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImNzcyIsInRvZ2dsZUJsb2NrcyIsImxvYWRUcmFuc2xhdGlvbnMiLCJmZXRjaCIsImpzb24iLCJ0cmFuc2xhdGUiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm9ic2VydmUiLCJnZXRFbGVtZW50QnlJZCIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJlbGVtcyIsImxlbmd0aCIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwidHJhbnNsYXRlS2V5IiwiZGVmYXVsdFZhbCIsImRpc3BsYXlVc2VySW5mbyIsInVzZXJJbmZvIiwiYmV0cyIsInNsaWNlIiwicmVmcmVzaEJldHMiLCJkaXNwbGF5QmV0c0hpc3RvcnkiLCJyZWZyZXNoTGFzdFVwZGF0ZWREYXRlIiwiZGF0ZUNvbnRhaW5lciIsInNwYW4iLCJsYXN0VXBkYXRlIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJsb2NhbERhdGUiLCJEYXRlIiwiZGF5IiwiU3RyaW5nIiwiZ2V0RGF0ZSIsInBhZFN0YXJ0IiwibW9udGgiLCJnZXRNb250aCIsImhvdXJzIiwiZ2V0SG91cnMiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsImRpdnMiLCJlbGVtZW50Iiwic3Bpbkl0ZW0iLCJub1NwaW5JdGVtIiwibm9CZXRzIiwidXBkIiwic3BpbiIsInNwaW5EYXRlIiwiZm9ybWF0dGVkRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInJlc29sdmVTdGF0dXNUcmFuc2xhdGlvbiIsInNwaW5FbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImlzV2luIiwid2luIiwic3RhdHVzQ2xhc3MiLCJiZXRJZCIsImFwcGVuZENoaWxkIiwiYmFzZUNzc0NsYXNzIiwibGFuZyIsImxpbmsiLCJleHRyYU9wdGlvbnMiLCJoZWFkZXJzIiwidW5hdXRoTWVzIiwic2V0SXRlbSIsImluaXRDaG9vc2VDYXJkcyIsInBhcnRpY2lwYXRlQnRuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJkYXRhIiwidXNlcnMiLCJmaWx0ZXIiLCJ1c2VyIiwiY3VycmVudFVzZXJJZCIsInlvdVJvdyIsInRhYmxlQm9keSIsInNvcnQiLCJhIiwiYiIsImluZGV4IiwiaXNDdXJyZW50VXNlciIsImlzVG9wVXNlciIsImRpc3BsYXlVc2VyIiwicGxhY2UiLCJ0YXJnZXQiLCJ1c2VySWREaXNwbGF5IiwibWFza1VzZXJJZCIsInJvdyIsInlvdVRleHQiLCJzZXRBdHRyaWJ1dGUiLCJ1c2VySWREaXYiLCJ0ZXh0Q29udGVudCIsImJldERpdiIsIndpbkNvdW50IiwidG9TdHJpbmciLCJpbml0ZWQiLCJjYXJkcyIsImNhcmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvbnRhaW5zIiwic2V0VGltZW91dCIsInNldFBvcHVwIiwid3JhcCIsInBvcHVwTmFtZSIsImJ0bnMiLCJwb3B1cCIsImNsb3NlUG9wdXAiLCJzdHlsZSIsIm92ZXJmbG93IiwiYnRuIiwicGFyZW50Tm9kZSIsInByZXZlbnREZWZhdWx0IiwiY2xvc2VCdG4iLCJzdGFydENvdW50ZG93biIsInNlbGVjdG9yIiwiZW5kRGF0ZSIsImVsZW1lbnRzIiwiZXJyb3IiLCJ0YXJnZXREYXRlIiwiZ2V0VGltZSIsInVwZGF0ZVRpbWVyIiwibm93IiwidGltZUxlZnQiLCJpbnRlcnZhbElkIiwic2V0VGltZXJWYWx1ZXMiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwic2Vjb25kcyIsInZhbHVlcyIsInZhbHVlIiwibW9uaXRvclZpc2liaWxpdHkiLCJhbmltYXRpb24iLCJkZWxheSIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImhpZGVCbG9jayIsImhpZGVDbGFzcyIsInNob3dCbG9jayIsInNob3dDbGFzcyIsImFuaW1hdGUiLCJkcm9wcyIsImRpc3BsYXkiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzaG93UmVzdWx0QmxvY2siLCJpdGVtcyIsInlvdSIsInN0b3BQcm9wYWdhdGlvbiIsInRhcmdldEVsZW1lbnQiLCJ0YXJnZXRQb3NpdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG8iLCJi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RUFBRSxJQUFJLENBQUM7SUFDMUM7SUFFQW1HLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFO0VBQ3JCLENBQUMsQ0FBQztFQUVGNU8sUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMwSyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSztJQUMvRDNLLFFBQVEsQ0FBQ3FELElBQUksQ0FBQ08sU0FBUyxDQUFDNkssTUFBTSxDQUFDLE1BQU0sQ0FBQztFQUMxQyxDQUFDLENBQUM7QUFFTixDQUFDLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9mb290YmFsbF9jaGFsbGVuZ2VfMidcblxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbiAgICAgICAgcG9wdXBzV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBcIiksXG4gICAgICAgIHNob3dQb3B1cEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmluZm8taWNvblwiKSxcbiAgICAgICAgcG9wdXBJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wdXBfX2l0ZW1cIiksXG4gICAgICAgIGNob3NlQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNob3NlXCIpLFxuICAgICAgICByZXN1bHRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0XCIpLFxuICAgICAgICB1bmF1dGhNc2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKSxcbiAgICAgICAgcGFydGljaXBhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcnQtYnRuJyksXG4gICAgICAgIHJlZGlyZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tam9pbicpLFxuICAgICAgICBjaG9zZUNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaG9zZV9fY2FyZFwiKVxuXG4gICAgY29uc3QgdWtMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VrTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGNvbnN0IGRpZmZpY3VsdHMgPSBbXCJfZWFzeVwiLCBcIl9tZWRpdW1cIiwgXCJfaGlnaHRcIl07XG4gICAgY29uc3QgbW9kZU1hcCA9IHtcIm5vdmljZVwiOiBcIl9lYXN5XCIsIFwiZXhwZXJpZW5jZWRcIjogXCJfbWVkaXVtXCIsIFwiaW5zYW5lXCI6IFwiX2hpZ2h0XCIsIFwiX2Vhc3lcIjogXCJub3ZpY2VcIiwgXCJfbWVkaXVtXCI6IFwiZXhwZXJpZW5jZWRcIiwgXCJfaGlnaHRcIjogXCJpbnNhbmVcIn07XG5cbiAgICBsZXQgbG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSA/IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgOiBcInVrXCJcblxuXG4gICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IGRlYnVnID0gZmFsc2VcblxuICAgIGNvbnN0IG1vY2tCZXRzID0gW1xuICAgICAgICB7IGlkOiAzODgzMTAyNDcsIGJldERhdGU6ICcyMDI1LTA0LTIwVDEyOjAwOjAwJywgc3RhdHVzOiAnd2luJyB9LFxuICAgICAgICB7IGlkOiAzODgzMTAyNDcsIGJldERhdGU6ICcyMDI1LTA0LTIwVDEyOjAwOjAwJywgc3RhdHVzOiAnd2luJyB9LFxuICAgICAgICB7IGlkOiAzODgzMTAyNDgsIGJldERhdGU6ICcyMDI1LTA0LTE5VDE1OjMwOjAwJywgc3RhdHVzOiAnbG9zZScgfSxcbiAgICAgICAgeyBpZDogMzg4MzEwMjQ4LCBiZXREYXRlOiAnMjAyNS0wNC0xOVQxNTozMDowMCcsIHN0YXR1czogJ3dpbicgfSxcbiAgICAgICAgeyBpZDogMzg4MzEwMjQ4LCBiZXREYXRlOiAnMjAyNS0wNC0xOVQxNTozMDowMCcsIHN0YXR1czogJ2xvc2UnIH0sXG4gICAgICAgIHsgaWQ6IDM4ODMxMDI0OCwgYmV0RGF0ZTogJzIwMjUtMDQtMTlUMTU6MzA6MDAnLCBzdGF0dXM6ICdsb3NlJyB9LFxuICAgICAgICB7IGlkOiAzODgzMTAyNDgsIGJldERhdGU6ICcyMDI1LTA0LTE5VDE1OjMwOjAwJywgc3RhdHVzOiAnbG9zZScgfSxcbiAgICAgICAgeyBpZDogMzg4MzEwMjQ5LCBiZXREYXRlOiAnMjAyNS0wNC0xOFQwOToxNTowMCcsIHN0YXR1czogdW5kZWZpbmVkIH0sXG4gICAgXTtcblxuICAgIGNvbnN0IG1vY2tVc2VycyA9IFtcbiAgICAgICAgeyB1c2VyaWQ6IDM4ODMxMDI0NywgYmV0OiAxMCB9LFxuICAgICAgICB7IHVzZXJpZDogMTIzNDU2Nzg5LCBiZXQ6IDkgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDM2OCwgYmV0OiA4IH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAxNjgsIGJldDogOCB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMDY4LCBiZXQ6IDggfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwODI2OCwgYmV0OiA4IH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMTEyMjIzMzMsIGJldDogNyB9LFxuICAgICAgICB7IHVzZXJpZDogMTExMjIyMzQzLCBiZXQ6IDcgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDExMTIyMjM1MywgYmV0OiA2IH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMTEyMjIzNjMsIGJldDogNSB9LFxuICAgICAgICB7IHVzZXJpZDogNDQ0NTU1NjY2LCBiZXQ6IDUgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDI2OCwgYmV0OiA2IH0sXG4gICAgXTtcblxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyTW9kZVwiKVxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGUgPSB0cnVlO1xuICAgIGxldCB1c2VyTW9kZTtcbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJykgPyBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJykpIDogbnVsbDtcbiAgICB1c2VySWQ7XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICByZW5kZXJVc2VycygpIC8vINC00LvRjyDQu9C+0LrQsNC70YzQvdC+0LPQviDQt9Cw0L/Rg9GB0LrRg1xuICAgICAgICBpZiAod2luZG93LnN0b3JlKSB7XG4gICAgICAgICAgICB2YXIgc3RhdGUgPSB3aW5kb3cuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG4gICAgICAgICAgICByZW5kZXJVc2VycygpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG4gICAgICAgICAgICBsZXQgYyA9IDA7XG4gICAgICAgICAgICB2YXIgaSA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoYyA8IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIXdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJVc2VycygpXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVXNlcnMoKVxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgZnVuY3Rpb24gcGFydGljaXBhdGUobW9kZSkge1xuICAgICAgICBpZiAoIXVzZXJJZCB8fCAhbW9kZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyYW1zID0ge3VzZXJpZDogdXNlcklkLCBtb2RlfTtcbiAgICAgICAgcmVxdWVzdCgnL3VzZXInLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgIGNvbnN0IGNzcyA9IG1vZGVNYXBbbW9kZV07XG4gICAgICAgICAgICB0b2dnbGVCbG9ja3MoY2hvc2VCbG9jaywgXCJjaG9zZUhpZGVcIiwgcmVzdWx0QmxvY2ssIFwicmVzdWx0U2hvd1wiLCBjc3MsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2goYCR7YXBpVVJMfS90cmFuc2xhdGVzLyR7bG9jYWxlfWApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb290YmFsbC1jaGFsbGVuZ2VcIiksIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2xhdGlvbiB3b3JrIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdlbicpIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ2VuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSwgZGVmYXVsdFZhbCkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8IGRlZmF1bHRWYWwgfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VySW5mbyh1c2VySW5mbykge1xuICAgICAgICBjb25zdCBiZXRzID0gdXNlckluZm8uYmV0cy5zbGljZSgwLCAyMCk7XG4gICAgICAgIC8vIGxldCBiZXRzID0gW3tiZXREYXRlOiBuZXcgRGF0ZSgpLCBzdGF0dXM6ICd1bmRlZmluZWQnfV1cbiAgICAgICAgY29uc29sZS5sb2codXNlckluZm8pXG4gICAgICAgIHJlZnJlc2hCZXRzKGJldHMpO1xuICAgICAgICBkaXNwbGF5QmV0c0hpc3RvcnkoYmV0cyk7XG4gICAgICAgIHJlZnJlc2hMYXN0VXBkYXRlZERhdGUodXNlckluZm8pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMYXN0VXBkYXRlZERhdGUodXNlckluZm8pIHtcbiAgICAgICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRfX2xhc3QtdXBkJyk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFzdFVwZCcpO1xuICAgICAgICBpZiAodXNlckluZm8ubGFzdFVwZGF0ZSkge1xuICAgICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSBmb3JtYXREYXRlKHVzZXJJbmZvLmxhc3RVcGRhdGUpO1xuICAgICAgICAgICAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBkYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuICAgICAgICBjb25zdCBsb2NhbERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgY29uc3QgZGF5ID0gU3RyaW5nKGxvY2FsRGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gU3RyaW5nKGxvY2FsRGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgaG91cnMgPSBTdHJpbmcobG9jYWxEYXRlLmdldEhvdXJzKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBTdHJpbmcobG9jYWxEYXRlLmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgcmV0dXJuIGAke2RheX0uJHttb250aH0gJHtob3Vyc306JHttaW51dGVzfWA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaEJldHMoYmV0cykge1xuICAgICAgICBjb25zdCBkaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3VsdF9fYmV0cy1pdGVtJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRpdnNbaV07XG4gICAgICAgICAgICBjb25zdCBiZXQgPSBiZXRzW2ldO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd5b3UnKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnX2RvbmUnKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnX2ZhaWwnKTtcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSAnX2ZhaWwnO1xuICAgICAgICAgICAgaWYgKGJldC5zdGF0dXMgPT09ICd3aW4nKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzID0gJ19kb25lJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWJldC5zdGF0dXMgfHwgYmV0LnN0YXR1cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSAneW91JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChzdGF0dXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpc3BsYXlCZXRzSGlzdG9yeShiZXRzKSB7XG4gICAgICAgIC8vIHJldHVybjtcbiAgICAgICAgY29uc3Qgc3Bpbkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BpbnMtcm93Jyk7XG4gICAgICAgIGNvbnN0IG5vU3Bpbkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm8tc3BpbnMnKTtcblxuICAgICAgICBjb25zdCBub0JldHMgPSAhYmV0cyB8fCBiZXRzLmxlbmd0aCA9PT0gMDtcblxuICAgICAgICBpZiAobm9CZXRzICYmICFkZWJ1Zykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobm9CZXRzLCBkZWJ1ZylcbiAgICAgICAgICAgIHNwaW5JdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIG5vU3Bpbkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZGVidWcpe1xuICAgICAgICAgICAgYmV0cyA9IG1vY2tCZXRzXG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhiZXRzKVxuXG4gICAgICAgIHNwaW5JdGVtLmlubmVySFRNTCA9XG4gICAgICAgICAgICBgXG4gICAgICAgPGRpdiBjbGFzcz1cInNwaW5zLXJvdy1oZWFkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1kYXRlXCIgZGF0YS10cmFuc2xhdGU9XCJteUJldERhdGVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXByaXplXCIgZGF0YS10cmFuc2xhdGU9XCJteUJldFByaXplXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1zdGF0dXNcIiBkYXRhLXRyYW5zbGF0ZT1cIm15QmV0U3RhdHVzXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICBzcGluSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIG5vU3Bpbkl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG4gICAgICAgIGxldCB1cGQgPSAwO1xuICAgICAgICBiZXRzLmZvckVhY2goc3BpbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcGluRGF0ZSA9IG5ldyBEYXRlKHNwaW4uYmV0RGF0ZSk7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gc3BpbkRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCd1ay1VQScpLnNsaWNlKDAsIDUpO1xuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gcmVzb2x2ZVN0YXR1c1RyYW5zbGF0aW9uKHNwaW4uc3RhdHVzKTtcblxuICAgICAgICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwaW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgc3BpbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3BpbnMtcm93LWl0ZW0nKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGlzV2luID0gc3Bpbi53aW47XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzQ2xhc3MgPSBpc1dpbiA/ICdfZG9uZScgOiAnJztcblxuICAgICAgICAgICAgICAgIHNwaW5FbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb250ZW50LWRhdGVcIj4ke2Zvcm1hdHRlZERhdGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbnRlbnQtcHJpemVcIj5JRDoke3NwaW4uYmV0SWR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbnRlbnQtc3RhdHVzICR7c3RhdHVzQ2xhc3N9XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgc3Bpbkl0ZW0uYXBwZW5kQ2hpbGQoc3BpbkVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHVwZCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodXBkID09PSAwKSB7XG4gICAgICAgICAgICBzcGluSXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICBub1NwaW5JdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc29sdmVTdGF0dXNUcmFuc2xhdGlvbihzdGF0dXMpIHtcbiAgICAgICAgaWYgKCFzdGF0dXMgfHwgc3RhdHVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZUtleSgnYmV0VW5kZWZpbmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ3dpbicpIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGVLZXkoJ3dpbkJldCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0dXMgPT09ICdsb3NlJykge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZUtleSgnbG9zZUJldCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQsIGJhc2VDc3NDbGFzcykge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYmFzZUNzc0NsYXNzICsgbGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGJhc2VDc3NDbGFzcyArIGxvY2FsZSk7XG4gICAgfVxuXG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdChgL2ZhdnVzZXIvJHt1c2VySWR9P25vY2FjaGU9MWApXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMubW9kZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyTW9kZSA9IHJlcy5tb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VyTW9kZVwiLCB1c2VyTW9kZSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3NzID0gbW9kZU1hcFtyZXMubW9kZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVCbG9ja3MoY2hvc2VCbG9jaywgXCJjaG9zZUhpZGVcIiwgcmVzdWx0QmxvY2ssIFwicmVzdWx0U2hvd1wiLCBjc3MsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlVc2VySW5mbyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdENob29zZUNhcmRzKGNob3NlQ2FyZHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBkaXNwbGF5VXNlclNwaW5zKDApO1xuICAgICAgICAgICAgZm9yIChsZXQgcGFydGljaXBhdGVCdG4gb2YgcGFydGljaXBhdGVCdG5zKSB7XG4gICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlclwiKVxuICAgICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZShtb2NrVXNlcnMsIHVzZXJJZCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB1c2VyTW9kZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VyTW9kZVwiKVxuXG4gICAgICAgIHJlcXVlc3QoYC91c2Vycy9gKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgbGV0IHVzZXJzID0gZGF0YS5maWx0ZXIodXNlciA9PiB1c2VyLm1vZGUgPT09IHVzZXJNb2RlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJzKVxuICAgICAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCB1c2VySWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIGN1cnJlbnRVc2VySWQpIHtcbiAgICAgICAgY29uc3QgeW91Um93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlT3RoZXInKTtcbiAgICAgICAgY29uc3QgdGFibGVCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlJyk7XG5cbiAgICAgICAgaWYgKCF1c2Vycz8ubGVuZ3RoIHx8IGN1cnJlbnRVc2VySWQgPT09IHVuZGVmaW5lZCkgcmV0dXJuOyAvLyDQtNC+0LTQsNC90L4g0L/QtdGA0LXQstGW0YDQutGDINC90LAgY3VycmVudFVzZXJJZFxuXG4gICAgICAgIC8vINCe0YfQuNGJ0LXQvdC90Y9cbiAgICAgICAgeW91Um93LmlubmVySFRNTCA9ICcnO1xuICAgICAgICB0YWJsZUJvZHkuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgdXNlcnMuc29ydCgoYSwgYikgPT4gYi5iZXQgLSBhLmJldCk7XG5cbiAgICAgICAgdXNlcnMuZm9yRWFjaCgodXNlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ3VycmVudFVzZXIgPSB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZDtcbiAgICAgICAgICAgIGxldCBpc1RvcFVzZXIgPSBmYWxzZVxuXG4gICAgICAgICAgICBpZihpbmRleCA8PSA1ICYmIGlzQ3VycmVudFVzZXIpe1xuICAgICAgICAgICAgICAgaXNUb3BVc2VyID0gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCBpbmRleCArIDEsIGlzQ3VycmVudFVzZXIgJiYgIWlzVG9wVXNlciA/IHlvdVJvdyA6IHRhYmxlQm9keSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIHBsYWNlLCB0YXJnZXQpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpXG5cbiAgICAgICAgY29uc3QgdXNlcklkRGlzcGxheSA9IGlzQ3VycmVudFVzZXIgPyB1c2VyLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlci51c2VyaWQpO1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpXG5cbiAgICAgICAgaWYgKGlzQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIC8vINCh0YLQstC+0YDQtdC90L3RjyDQtdC70LXQvNC10L3RgtGDICd5b3UnINGC0LAg0LLRgdGC0LDQstC60LAg0LnQvtCz0L4g0L/RltGB0LvRjyDQtdC70LXQvNC10L3RgtGDINC3INC80ZbRgdGG0LXQvFxuICAgICAgICAgICAgY29uc3QgeW91VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgeW91VGV4dC5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93LWl0ZW0nLCAnX3lvdS10ZXh0Jyk7XG4gICAgICAgICAgICB5b3VUZXh0LnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCAneW91Jyk7XG5cbiAgICAgICAgICAgIHJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+JHtwbGFjZX08L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgLy8g0JTQvtC00LDRlNC80L4gXCJ5b3VcIiDRgtC10LrRgdGCINC/0ZbRgdC70Y8g0LzRltGB0YbRj1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHlvdVRleHQpO1xuXG4gICAgICAgICAgICAvLyDQn9C+0YLRltC8INC00L7QtNCw0ZTQvNC+IHVzZXJJZCDRgtCwINGB0YLQsNCy0LrRg1xuICAgICAgICAgICAgY29uc3QgdXNlcklkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1c2VySWREaXYuY2xhc3NMaXN0LmFkZCgndGFibGVfX3Jvdy1pdGVtJyk7XG4gICAgICAgICAgICB1c2VySWREaXYudGV4dENvbnRlbnQgPSB1c2VySWREaXNwbGF5O1xuXG4gICAgICAgICAgICBjb25zdCBiZXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJldERpdi5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93LWl0ZW0nKTtcbiAgICAgICAgICAgIGJldERpdi50ZXh0Q29udGVudCA9IHVzZXIud2luQ291bnQ7XG5cbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh1c2VySWREaXYpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGJldERpdik7XG5cbiAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdfeW91Jyk7XG4gICAgICAgICAgICAvLyB0YXJnZXQuaW5uZXJIVE1MID0gJyc7IC8vINC+0YfQuNGJ0LDRlNC80L4gdGFyZ2V0INC/0LXRgNC10LQg0LTQvtC00LDQstCw0L3QvdGP0Lwg0L3QvtCy0L7Qs9C+INC60L7QvdGC0LXQvdGC0YNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvdylcbiAgICAgICAgICAgIC8vINCU0LvRjyDRltC90YjQuNGFINC60L7RgNC40YHRgtGD0LLQsNGH0ZbQsiwg0LTQvtC00LDRlNC80L4g0LHQtdC3INC30LzRltC90Lgg0YHRgtGA0YPQutGC0YPRgNC4XG4gICAgICAgICAgICByb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPiR7cGxhY2V9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+JHt1c2VySWREaXNwbGF5fTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPiR7dXNlci53aW5Db3VudH08L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvdylcblxuXG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBtYXNrVXNlcklkKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gXCIqKlwiICsgdXNlcklkLnRvU3RyaW5nKCkuc2xpY2UoMik7XG4gICAgfVxuXG5cbiAgICBsb2FkVHJhbnNsYXRpb25zKClcbiAgICAgICAgLnRoZW4oaW5pdCk7XG5cbiAgICBsZXQgaW5pdGVkID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gaW5pdENob29zZUNhcmRzKGNhcmRzKXtcbiAgICAgICAgaWYgKGluaXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FyZHMuZm9yRWFjaChjYXJkID0+e1xuICAgICAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImluZm8taWNvblwiKSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZmZpY3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRpZmZpY3VsdHNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJkLmNsYXNzTGlzdC5jb250YWlucyhpdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kZSA9IG1vZGVNYXBbaXRlbV07XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZShtb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyVXNlcnMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgaW5pdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRQb3B1cCh3cmFwLCBwb3B1cE5hbWUsIGJ0bnMsIHBvcHVwSXRlbXMpe1xuICAgICAgICBsZXQgcG9wdXAgPSB3cmFwLnF1ZXJ5U2VsZWN0b3IoYC4ke3BvcHVwTmFtZX1gKVxuXG4gICAgICAgIHdyYXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgIGUudGFyZ2V0ID09PSB3cmFwID8gY2xvc2VQb3B1cCgpIDogbnVsbFxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGNsb3NlUG9wdXAgPSAoKSA9PntcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJfYWN0aXZlXCIpXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgICAgIHdyYXAuY2xhc3NMaXN0LmFkZChcIl9vcGFjaXR5XCIpXG4gICAgICAgIH1cblxuICAgICAgICBidG5zLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgICAgIGlmKGJ0bi5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKHBvcHVwTmFtZSkpe1xuICAgICAgICAgICAgICAgIGJ0bi5wYXJlbnROb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0ID09PSBidG4pe1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwSXRlbXMuZm9yRWFjaChpdGVtID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiX2FjdGl2ZVwiKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiX2FjdGl2ZVwiKVxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICB3cmFwLmNsYXNzTGlzdC5yZW1vdmUoXCJfb3BhY2l0eVwiKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgbGV0IGNsb3NlQnRuID0gcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fY2xvc2VcIilcbiAgICAgICAgICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlUG9wdXAoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2V0UG9wdXAocG9wdXBzV3JhcCwgXCJfZWFzeVwiLCBzaG93UG9wdXBCdG5zLCBwb3B1cEl0ZW1zKVxuICAgIHNldFBvcHVwKHBvcHVwc1dyYXAsIFwiX21lZGl1bVwiLCBzaG93UG9wdXBCdG5zLCBwb3B1cEl0ZW1zKVxuICAgIHNldFBvcHVwKHBvcHVwc1dyYXAsIFwiX2hpZ2h0XCIsIHNob3dQb3B1cEJ0bnMsIHBvcHVwSXRlbXMpXG4gICAgc2V0UG9wdXAocG9wdXBzV3JhcCwgXCJfbm90aWZ5XCIsIHNob3dQb3B1cEJ0bnMsIHBvcHVwSXRlbXMpXG5cbiAgICBmdW5jdGlvbiBzdGFydENvdW50ZG93bihzZWxlY3RvciwgZW5kRGF0ZSkge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7c2VsZWN0b3J9IC53ZWxjb21lX190aW1lci1pdGVtLW51bWApO1xuICAgICAgICBpZiAoZWxlbWVudHMubGVuZ3RoICE9PSA0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHNlbGVjdG9yIScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0RGF0ZSA9IG5ldyBEYXRlKGVuZERhdGUpLmdldFRpbWUoKTtcblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVUaW1lcigpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY29uc3QgdGltZUxlZnQgPSB0YXJnZXREYXRlIC0gbm93O1xuXG4gICAgICAgICAgICBpZiAodGltZUxlZnQgPD0gMCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZXJWYWx1ZXMoWzAsIDAsIDAsIDBdKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKHRpbWVMZWZ0IC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcigodGltZUxlZnQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigodGltZUxlZnQgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAlICgxMDAwICogNjApKSAvIDEwMDApO1xuXG4gICAgICAgICAgICBzZXRUaW1lclZhbHVlcyhbZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHNdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNldFRpbWVyVmFsdWVzKHZhbHVlcykge1xuICAgICAgICAgICAgdmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2luZGV4XS50ZXh0Q29udGVudCA9IHZhbHVlIDwgMTAgPyBgMCR7dmFsdWV9YCA6IHZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVUaW1lcigpO1xuICAgICAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwodXBkYXRlVGltZXIsIDEwMDApO1xuICAgIH1cblxuICAgIHN0YXJ0Q291bnRkb3duKCcud2VsY29tZV9fdGltZXInLCAnMjAyNS0wNi0zMFQyMzo1OTo1OScpO1xuXG4gICAgZnVuY3Rpb24gbW9uaXRvclZpc2liaWxpdHkoc2VsZWN0b3IsIGFuaW1hdGlvbiwgZGVsYXkpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRWxlbWVudCBub3QgZm91bmQhJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGFuaW1hdGlvbilcbiAgICAgICAgICAgICAgICAgICAgfSwgZGVsYXkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgbW9uaXRvclZpc2liaWxpdHkoJy5ub3RpZnlfX3BlcnMnLCBcInNob3daZXVzXCIsIDApO1xuICAgIG1vbml0b3JWaXNpYmlsaXR5KCcubm90aWZ5X19wZXJzLWJ1YmxlJywgXCJzaG93WmV1c0J1YmxlXCIsIDEyMDApO1xuICAgIG1vbml0b3JWaXNpYmlsaXR5KCcuY2hvc2VfX3BlcnMtYnVibGUnLCBcInNob3daZXVzQnVibGVcIiwgMCk7XG4gICAgbW9uaXRvclZpc2liaWxpdHkoJy5jaG9zZV9fY2FyZC5fZWFzeScsIFwic2hvd0NhcmRcIiwgNDAwKTtcbiAgICBtb25pdG9yVmlzaWJpbGl0eSgnLmNob3NlX19jYXJkLl9tZWRpdW0nLCBcInNob3dDYXJkXCIsIDgwMCk7XG4gICAgbW9uaXRvclZpc2liaWxpdHkoJy5jaG9zZV9fY2FyZC5faGlnaHQnLCBcInNob3dDYXJkXCIsIDEyMDApO1xuXG5cbiAgICBmdW5jdGlvbiB0b2dnbGVCbG9ja3MoaGlkZUJsb2NrLCBoaWRlQ2xhc3MsIHNob3dCbG9jaywgc2hvd0NsYXNzLCBzdGF0ZSwgYW5pbWF0ZSl7XG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoc3RhdGUsIGxvY2FsZSlcbiAgICAgICAgaGlkZUJsb2NrLmNsYXNzTGlzdC5hZGQoaGlkZUNsYXNzKVxuICAgICAgICBsZXQgZHJvcHMgPSBzaG93QmxvY2sucXVlcnlTZWxlY3RvckFsbChcIi5kcm9wXCIpXG4gICAgICAgIGRyb3BzLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgIGRpZmZpY3VsdHMuZm9yRWFjaChzdGF0ZSA9PntcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoc3RhdGUpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBkcm9wc1swXS5jbGFzc0xpc3QuYWRkKHN0YXRlKVxuICAgICAgICBpZihhbmltYXRlKXtcbiAgICAgICAgICAgIGhpZGVCbG9jay5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+e1xuXG4gICAgICAgICAgICAgICAgc2hvd0Jsb2NrLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAgICAgICAgIHNob3dCbG9jay5zdHlsZS5oZWlnaHQgPSBoaWRlQmxvY2suY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICAgICAgaGlkZUJsb2NrLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgc2hvd1Jlc3VsdEJsb2NrKHNob3dCbG9jaywgc2hvd0NsYXNzKVxuICAgICAgICAgICAgICAgIH0sIDUwKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzaG93QmxvY2suc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICBzaG93QmxvY2suc3R5bGUuaGVpZ2h0ID0gaGlkZUJsb2NrLmNsaWVudEhlaWdodFxuICAgICAgICAgICAgaGlkZUJsb2NrLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgICAgICBzaG93UmVzdWx0QmxvY2soc2hvd0Jsb2NrLCBzaG93Q2xhc3MpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dSZXN1bHRCbG9jayhzaG93QmxvY2ssIHNob3dDbGFzcyl7XG4gICAgICAgIHNob3dCbG9jay5jbGFzc0xpc3QuYWRkKHNob3dDbGFzcylcbiAgICAgICAgc2hvd0Jsb2NrLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICBsZXQgaXRlbXMgPSBzaG93QmxvY2sucXVlcnlTZWxlY3RvckFsbChcIi5yZXN1bHRfX2JldHMtaXRlbVwiKVxuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaSkgPT57XG4gICAgICAgICAgICAgICAgaWYoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJ5b3VcIikpe1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHlvdSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRfX2JldHMteW91XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB5b3UuY2xhc3NMaXN0LmFkZCgnc2hvd1lvdScpXG4gICAgICAgICAgICAgICAgICAgIH0sIDI3MDApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZXN1bHRfX2J0blwiKVxuICAgICAgICAgICAgICAgICAgICBidG5zLmZvckVhY2goYnRuID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJzaG93QnRuXCIpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSwgMjkwMClcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgIH0sIDI1MCAqIGl0ZW1zLmxlbmd0aCAtIGkgKiAyNTApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9DaG9zZVwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hvc2VcIik7XG4gICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gdGFyZ2V0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSAyO1xuXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICB0b3A6IHRhcmdldFBvc2l0aW9uLFxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vdGVzdFxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpXG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlnaHQtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgZGlmZmljdWx0cy5mb3JFYWNoKGNzcyA9PntcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoY3NzKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRvZ2dsZUJsb2NrcyhjaG9zZUJsb2NrLCBcImNob3NlSGlkZVwiLCByZXN1bHRCbG9jaywgXCJyZXN1bHRTaG93XCIsIFwiX2hpZ2h0XCIsIHRydWUpO1xuICAgIH0pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lYXN5LWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGRpZmZpY3VsdHMuZm9yRWFjaChjc3MgPT57XG4gICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKGNzcylcbiAgICAgICAgfSlcbiAgICAgICAgdG9nZ2xlQmxvY2tzKGNob3NlQmxvY2ssIFwiY2hvc2VIaWRlXCIsIHJlc3VsdEJsb2NrLCBcInJlc3VsdFNob3dcIiwgXCJfZWFzeVwiLCB0cnVlKTtcbiAgICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVkaXVtLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGRpZmZpY3VsdHMuZm9yRWFjaChjc3MgPT57XG4gICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKGNzcylcbiAgICAgICAgfSlcbiAgICAgICAgdG9nZ2xlQmxvY2tzKGNob3NlQmxvY2ssIFwiY2hvc2VIaWRlXCIsIHJlc3VsdEJsb2NrLCBcInJlc3VsdFNob3dcIiwgXCJfbWVkaXVtXCIsIHRydWUpO1xuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXV0aC1idG4nKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhc0lkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XG4gICAgICAgIGhhc0lkID8gc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcklkJykgOiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VySWQnLCAnMTAwMzAwMjY4Jyk7XG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sbmctYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRMb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpO1xuXG4gICAgICAgIGlmIChjdXJyZW50TG9jYWxlID09PSBcImVuXCIpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwiZW5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFyay1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpXG4gICAgfSlcblxufSkoKTtcbiJdfQ==
