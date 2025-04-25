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
  var debug = true;
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
  var i18nData = {};
  var translateState = true;
  var userId = sessionStorage.getItem('userId') ? Number(sessionStorage.getItem('userId')) : null;
  // userId = 100300268

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
    var bets = userInfo.bets.slice(0, 10);
    // let bets = [{betDate: new Date(), status: 'undefined'}]
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
        var isWin = spin.status === 'win';
        var statusClass = isWin ? '_done' : '';
        spinElement.innerHTML = "\n                    <span class=\"content-date\">".concat(formattedDate, "</span>\n                    <span class=\"content-prize\">ID:").concat(spin.id, "</span>\n                    <span class=\"content-status ").concat(statusClass, "\"></span>\n                ");
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
          var css = modeMap[res.mode];
          toggleBlocks(choseBlock, "choseHide", resultBlock, "resultShow", css, false);
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
    if (debug) {
      populateUsersTable(mockUsers, userId);
      return;
    }
    request("/users/".concat(currentTabTable)).then(function (data) {
      var users = data.users;
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
      betDiv.textContent = user.bet;
      row.appendChild(userIdDiv);
      row.appendChild(betDiv);
      row.classList.add('_you');
      // target.innerHTML = ''; // очищаємо target перед додаванням нового контенту
    } else {
      console.log(row);
      // Для інших користувачів, додаємо без зміни структури
      row.innerHTML = "\n            <div class=\"table__row-item\">".concat(place, "</div>\n            <div class=\"table__row-item\">").concat(userIdDisplay, "</div>\n            <div class=\"table__row-item\">").concat(user.bet, "</div>\n        ");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwb3B1cHNXcmFwIiwic2hvd1BvcHVwQnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwb3B1cEl0ZW1zIiwiY2hvc2VCbG9jayIsInJlc3VsdEJsb2NrIiwidW5hdXRoTXNncyIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImNob3NlQ2FyZHMiLCJ1a0xlbmciLCJlbkxlbmciLCJkaWZmaWN1bHRzIiwibW9kZU1hcCIsImxvY2FsZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImRlYnVnIiwibW9ja0JldHMiLCJpZCIsImJldERhdGUiLCJzdGF0dXMiLCJ1bmRlZmluZWQiLCJtb2NrVXNlcnMiLCJ1c2VyaWQiLCJiZXQiLCJpMThuRGF0YSIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwiTnVtYmVyIiwiaW5pdCIsInJlbmRlclVzZXJzIiwid2luZG93Iiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImNoZWNrVXNlckF1dGgiLCJjIiwiaSIsInNldEludGVydmFsIiwiZ191c2VyX2lkIiwiY2xlYXJJbnRlcnZhbCIsInBhcnRpY2lwYXRlIiwibW9kZSIsInBhcmFtcyIsInJlcXVlc3QiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJmb3JFYWNoIiwiaXRlbSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImNzcyIsInRvZ2dsZUJsb2NrcyIsImxvYWRUcmFuc2xhdGlvbnMiLCJmZXRjaCIsImpzb24iLCJ0cmFuc2xhdGUiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm9ic2VydmUiLCJnZXRFbGVtZW50QnlJZCIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJlbGVtcyIsImxlbmd0aCIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwidHJhbnNsYXRlS2V5IiwiZGVmYXVsdFZhbCIsImRpc3BsYXlVc2VySW5mbyIsInVzZXJJbmZvIiwiYmV0cyIsInNsaWNlIiwicmVmcmVzaEJldHMiLCJkaXNwbGF5QmV0c0hpc3RvcnkiLCJyZWZyZXNoTGFzdFVwZGF0ZWREYXRlIiwiZGF0ZUNvbnRhaW5lciIsInNwYW4iLCJsYXN0VXBkYXRlIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJsb2NhbERhdGUiLCJEYXRlIiwiZGF5IiwiU3RyaW5nIiwiZ2V0RGF0ZSIsInBhZFN0YXJ0IiwibW9udGgiLCJnZXRNb250aCIsImhvdXJzIiwiZ2V0SG91cnMiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsImRpdnMiLCJlbGVtZW50Iiwic3Bpbkl0ZW0iLCJub1NwaW5JdGVtIiwibm9CZXRzIiwidXBkIiwic3BpbiIsInNwaW5EYXRlIiwiZm9ybWF0dGVkRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInJlc29sdmVTdGF0dXNUcmFuc2xhdGlvbiIsInNwaW5FbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImlzV2luIiwic3RhdHVzQ2xhc3MiLCJhcHBlbmRDaGlsZCIsImJhc2VDc3NDbGFzcyIsImxhbmciLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiaGVhZGVycyIsInVuYXV0aE1lcyIsImluaXRDaG9vc2VDYXJkcyIsInBhcnRpY2lwYXRlQnRuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VGFiVGFibGUiLCJkYXRhIiwidXNlcnMiLCJjdXJyZW50VXNlcklkIiwieW91Um93IiwidGFibGVCb2R5Iiwic29ydCIsImEiLCJiIiwidXNlciIsImluZGV4IiwiaXNDdXJyZW50VXNlciIsImlzVG9wVXNlciIsImRpc3BsYXlVc2VyIiwicGxhY2UiLCJ0YXJnZXQiLCJ1c2VySWREaXNwbGF5IiwibWFza1VzZXJJZCIsInJvdyIsInlvdVRleHQiLCJzZXRBdHRyaWJ1dGUiLCJ1c2VySWREaXYiLCJ0ZXh0Q29udGVudCIsImJldERpdiIsInRvU3RyaW5nIiwiaW5pdGVkIiwiY2FyZHMiLCJjYXJkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb250YWlucyIsInNldFBvcHVwIiwid3JhcCIsInBvcHVwTmFtZSIsImJ0bnMiLCJwb3B1cCIsImNsb3NlUG9wdXAiLCJzdHlsZSIsIm92ZXJmbG93IiwiYnRuIiwicGFyZW50Tm9kZSIsInByZXZlbnREZWZhdWx0IiwiY2xvc2VCdG4iLCJzdGFydENvdW50ZG93biIsInNlbGVjdG9yIiwiZW5kRGF0ZSIsImVsZW1lbnRzIiwiZXJyb3IiLCJ0YXJnZXREYXRlIiwiZ2V0VGltZSIsInVwZGF0ZVRpbWVyIiwibm93IiwidGltZUxlZnQiLCJpbnRlcnZhbElkIiwic2V0VGltZXJWYWx1ZXMiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwic2Vjb25kcyIsInZhbHVlcyIsInZhbHVlIiwibW9uaXRvclZpc2liaWxpdHkiLCJhbmltYXRpb24iLCJkZWxheSIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInNldFRpbWVvdXQiLCJoaWRlQmxvY2siLCJoaWRlQ2xhc3MiLCJzaG93QmxvY2siLCJzaG93Q2xhc3MiLCJhbmltYXRlIiwiZHJvcHMiLCJkaXNwbGF5IiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2hvd1Jlc3VsdEJsb2NrIiwiaXRlbXMiLCJ5b3UiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXRFbGVtZW50IiwidGFyZ2V0UG9zaXRpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJ0b2dnbGUiLCJoYXNJZCIsInJlbW92ZUl0ZW0iLCJzZXRJdGVtIiwi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UUFBUSxFQUFFLFdBQVcsQ0FBQztJQUMzRkMsUUFBUSxDQUFDQyxNQUFNLEVBQUU7RUFDckIsQ0FBQyxDQUFDO0VBRUZ4TyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQ29LLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQy9ELElBQU1vRSxhQUFhLEdBQUd4TixjQUFjLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFFdEQsSUFBSXVOLGFBQWEsS0FBSyxJQUFJLEVBQUU7TUFDeEJ4TixjQUFjLENBQUNvTixVQUFVLENBQUMsUUFBUSxDQUFDO0lBQ3ZDLENBQUMsTUFBTTtNQUNIcE4sY0FBYyxDQUFDcU4sT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7SUFDMUM7SUFFQUMsUUFBUSxDQUFDQyxNQUFNLEVBQUU7RUFDckIsQ0FBQyxDQUFDO0VBRUZ4TyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQ29LLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO0lBQy9EckssUUFBUSxDQUFDbUQsSUFBSSxDQUFDTyxTQUFTLENBQUN5SyxNQUFNLENBQUMsTUFBTSxDQUFDO0VBQzFDLENBQUMsQ0FBQztBQUVOLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX2Zvb3RiYWxsX2NoYWxsZW5nZV8yJ1xuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICBwb3B1cHNXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKSxcbiAgICAgICAgc2hvd1BvcHVwQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5mby1pY29uXCIpLFxuICAgICAgICBwb3B1cEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9faXRlbVwiKSxcbiAgICAgICAgY2hvc2VCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hvc2VcIiksXG4gICAgICAgIHJlc3VsdEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRcIiksXG4gICAgICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFydC1idG4nKSxcbiAgICAgICAgcmVkaXJlY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1qb2luJyksXG4gICAgICAgIGNob3NlQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNob3NlX19jYXJkXCIpXG5cbiAgICBjb25zdCB1a0xlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWtMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgY29uc3QgZGlmZmljdWx0cyA9IFtcIl9lYXN5XCIsIFwiX21lZGl1bVwiLCBcIl9oaWdodFwiXTtcbiAgICBjb25zdCBtb2RlTWFwID0ge1wibm92aWNlXCI6IFwiX2Vhc3lcIiwgXCJleHBlcmllbmNlZFwiOiBcIl9tZWRpdW1cIiwgXCJpbnNhbmVcIjogXCJfaGlnaHRcIiwgXCJfZWFzeVwiOiBcIm5vdmljZVwiLCBcIl9tZWRpdW1cIjogXCJleHBlcmllbmNlZFwiLCBcIl9oaWdodFwiOiBcImluc2FuZVwifTtcblxuICAgIGxldCBsb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpID8gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSA6IFwidWtcIlxuXG5cbiAgICBpZiAodWtMZW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSB0cnVlXG5cbiAgICBjb25zdCBtb2NrQmV0cyA9IFtcbiAgICAgICAgeyBpZDogMzg4MzEwMjQ3LCBiZXREYXRlOiAnMjAyNS0wNC0yMFQxMjowMDowMCcsIHN0YXR1czogJ3dpbicgfSxcbiAgICAgICAgeyBpZDogMzg4MzEwMjQ3LCBiZXREYXRlOiAnMjAyNS0wNC0yMFQxMjowMDowMCcsIHN0YXR1czogJ3dpbicgfSxcbiAgICAgICAgeyBpZDogMzg4MzEwMjQ4LCBiZXREYXRlOiAnMjAyNS0wNC0xOVQxNTozMDowMCcsIHN0YXR1czogJ2xvc2UnIH0sXG4gICAgICAgIHsgaWQ6IDM4ODMxMDI0OCwgYmV0RGF0ZTogJzIwMjUtMDQtMTlUMTU6MzA6MDAnLCBzdGF0dXM6ICd3aW4nIH0sXG4gICAgICAgIHsgaWQ6IDM4ODMxMDI0OCwgYmV0RGF0ZTogJzIwMjUtMDQtMTlUMTU6MzA6MDAnLCBzdGF0dXM6ICdsb3NlJyB9LFxuICAgICAgICB7IGlkOiAzODgzMTAyNDgsIGJldERhdGU6ICcyMDI1LTA0LTE5VDE1OjMwOjAwJywgc3RhdHVzOiAnbG9zZScgfSxcbiAgICAgICAgeyBpZDogMzg4MzEwMjQ4LCBiZXREYXRlOiAnMjAyNS0wNC0xOVQxNTozMDowMCcsIHN0YXR1czogJ2xvc2UnIH0sXG4gICAgICAgIHsgaWQ6IDM4ODMxMDI0OSwgYmV0RGF0ZTogJzIwMjUtMDQtMThUMDk6MTU6MDAnLCBzdGF0dXM6IHVuZGVmaW5lZCB9LFxuICAgIF07XG5cbiAgICBjb25zdCBtb2NrVXNlcnMgPSBbXG4gICAgICAgIHsgdXNlcmlkOiAzODgzMTAyNDcsIGJldDogMTAgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEyMzQ1Njc4OSwgYmV0OiA5IH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAzNjgsIGJldDogOCB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMTY4LCBiZXQ6IDggfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDA2OCwgYmV0OiA4IH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDgyNjgsIGJldDogOCB9LFxuICAgICAgICB7IHVzZXJpZDogMTExMjIyMzMzLCBiZXQ6IDcgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDExMTIyMjM0MywgYmV0OiA3IH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMTEyMjIzNTMsIGJldDogNiB9LFxuICAgICAgICB7IHVzZXJpZDogMTExMjIyMzYzLCBiZXQ6IDUgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDQ0NDU1NTY2NiwgYmV0OiA1IH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAyNjgsIGJldDogNiB9LFxuICAgIF07XG5cblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gdHJ1ZTtcbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJykgPyBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJykpIDogbnVsbDtcbiAgICAvLyB1c2VySWQgPSAxMDAzMDAyNjhcblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHJlbmRlclVzZXJzKCkgLy8g0LTQu9GPINC70L7QutCw0LvRjNC90L7Qs9C+INC30LDQv9GD0YHQutGDXG4gICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICAgICAgICAgIHJlbmRlclVzZXJzKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICAgICAgICAgIGxldCBjID0gMDtcbiAgICAgICAgICAgIHZhciBpID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChjIDwgNTApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhd2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJVc2VycygpXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiBwYXJ0aWNpcGF0ZShtb2RlKSB7XG4gICAgICAgIGlmICghdXNlcklkIHx8ICFtb2RlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7dXNlcmlkOiB1c2VySWQsIG1vZGV9O1xuICAgICAgICByZXF1ZXN0KCcvdXNlcicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgY29uc3QgY3NzID0gbW9kZU1hcFttb2RlXTtcbiAgICAgICAgICAgIHRvZ2dsZUJsb2NrcyhjaG9zZUJsb2NrLCBcImNob3NlSGlkZVwiLCByZXN1bHRCbG9jaywgXCJyZXN1bHRTaG93XCIsIGNzcywgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChgJHthcGlVUkx9L3RyYW5zbGF0ZXMvJHtsb2NhbGV9YCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcblxuICAgICAgICAgICAgICAgIHZhciBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvb3RiYWxsLWNoYWxsZW5nZVwiKSwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmshXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2FsZSA9PT0gJ2VuJykge1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnZW4nKTtcbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVLZXkoa2V5LCBkZWZhdWx0VmFsKSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGkxOG5EYXRhW2tleV0gfHwgZGVmYXVsdFZhbCB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXJJbmZvKHVzZXJJbmZvKSB7XG4gICAgICAgIGNvbnN0IGJldHMgPSB1c2VySW5mby5iZXRzLnNsaWNlKDAsIDEwKTtcbiAgICAgICAgLy8gbGV0IGJldHMgPSBbe2JldERhdGU6IG5ldyBEYXRlKCksIHN0YXR1czogJ3VuZGVmaW5lZCd9XVxuICAgICAgICByZWZyZXNoQmV0cyhiZXRzKTtcbiAgICAgICAgZGlzcGxheUJldHNIaXN0b3J5KGJldHMpO1xuICAgICAgICByZWZyZXNoTGFzdFVwZGF0ZWREYXRlKHVzZXJJbmZvKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTGFzdFVwZGF0ZWREYXRlKHVzZXJJbmZvKSB7XG4gICAgICAgIGNvbnN0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0X19sYXN0LXVwZCcpO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhc3RVcGQnKTtcbiAgICAgICAgaWYgKHVzZXJJbmZvLmxhc3RVcGRhdGUpIHtcbiAgICAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gZm9ybWF0RGF0ZSh1c2VySW5mby5sYXN0VXBkYXRlKTtcbiAgICAgICAgICAgIGRhdGVDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcbiAgICAgICAgY29uc3QgbG9jYWxEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgICAgIGNvbnN0IGRheSA9IFN0cmluZyhsb2NhbERhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCBtb250aCA9IFN0cmluZyhsb2NhbERhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gU3RyaW5nKGxvY2FsRGF0ZS5nZXRIb3VycygpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCBtaW51dGVzID0gU3RyaW5nKGxvY2FsRGF0ZS5nZXRNaW51dGVzKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIHJldHVybiBgJHtkYXl9LiR7bW9udGh9ICR7aG91cnN9OiR7bWludXRlc31gO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hCZXRzKGJldHMpIHtcbiAgICAgICAgY29uc3QgZGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXN1bHRfX2JldHMtaXRlbScpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkaXZzW2ldO1xuICAgICAgICAgICAgY29uc3QgYmV0ID0gYmV0c1tpXTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgneW91Jyk7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ19kb25lJyk7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ19mYWlsJyk7XG4gICAgICAgICAgICBsZXQgc3RhdHVzID0gJ19mYWlsJztcbiAgICAgICAgICAgIGlmIChiZXQuc3RhdHVzID09PSAnd2luJykge1xuICAgICAgICAgICAgICAgIHN0YXR1cyA9ICdfZG9uZSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFiZXQuc3RhdHVzIHx8IGJldC5zdGF0dXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzID0gJ3lvdSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoc3RhdHVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlCZXRzSGlzdG9yeShiZXRzKSB7XG4gICAgICAgIC8vIHJldHVybjtcbiAgICAgICAgY29uc3Qgc3Bpbkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BpbnMtcm93Jyk7XG4gICAgICAgIGNvbnN0IG5vU3Bpbkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm8tc3BpbnMnKTtcblxuICAgICAgICBjb25zdCBub0JldHMgPSAhYmV0cyB8fCBiZXRzLmxlbmd0aCA9PT0gMDtcblxuICAgICAgICBpZiAobm9CZXRzICYmICFkZWJ1Zykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobm9CZXRzLCBkZWJ1ZylcbiAgICAgICAgICAgIHNwaW5JdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIG5vU3Bpbkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZGVidWcpe1xuICAgICAgICAgICAgYmV0cyA9IG1vY2tCZXRzXG4gICAgICAgIH1cblxuICAgICAgICBzcGluSXRlbS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgYFxuICAgICAgIDxkaXYgY2xhc3M9XCJzcGlucy1yb3ctaGVhZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtZGF0ZVwiIGRhdGEtdHJhbnNsYXRlPVwibXlCZXREYXRlXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1wcml6ZVwiIGRhdGEtdHJhbnNsYXRlPVwibXlCZXRQcml6ZVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtc3RhdHVzXCIgZGF0YS10cmFuc2xhdGU9XCJteUJldFN0YXR1c1wiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgc3Bpbkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBub1NwaW5JdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblxuICAgICAgICBsZXQgdXBkID0gMDtcbiAgICAgICAgYmV0cy5mb3JFYWNoKHNwaW4gPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3BpbkRhdGUgPSBuZXcgRGF0ZShzcGluLmJldERhdGUpO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IHNwaW5EYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygndWstVUEnKS5zbGljZSgwLCA1KTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IHJlc29sdmVTdGF0dXNUcmFuc2xhdGlvbihzcGluLnN0YXR1cyk7XG5cbiAgICAgICAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcGluRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHNwaW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NwaW5zLXJvdy1pdGVtJyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpc1dpbiA9IHNwaW4uc3RhdHVzID09PSAnd2luJztcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNDbGFzcyA9IGlzV2luID8gJ19kb25lJyA6ICcnO1xuXG4gICAgICAgICAgICAgICAgc3BpbkVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbnRlbnQtZGF0ZVwiPiR7Zm9ybWF0dGVkRGF0ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudC1wcml6ZVwiPklEOiR7c3Bpbi5pZH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudC1zdGF0dXMgJHtzdGF0dXNDbGFzc31cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICBzcGluSXRlbS5hcHBlbmRDaGlsZChzcGluRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdXBkKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh1cGQgPT09IDApIHtcbiAgICAgICAgICAgIHNwaW5JdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIG5vU3Bpbkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVN0YXR1c1RyYW5zbGF0aW9uKHN0YXR1cykge1xuICAgICAgICBpZiAoIXN0YXR1cyB8fCBzdGF0dXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRlS2V5KCdiZXRVbmRlZmluZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdHVzID09PSAnd2luJykge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZUtleSgnd2luQmV0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ2xvc2UnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRlS2V5KCdsb3NlQmV0Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCwgYmFzZUNzc0NsYXNzKSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ3VrJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShiYXNlQ3NzQ2xhc3MgKyBsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYmFzZUNzc0NsYXNzICsgbG9jYWxlKTtcbiAgICB9XG5cblxuICAgIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1VzZXJBdXRoKCkge1xuICAgICAgICBpZiAodXNlcklkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnVzZXJpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3NzID0gbW9kZU1hcFtyZXMubW9kZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVCbG9ja3MoY2hvc2VCbG9jaywgXCJjaG9zZUhpZGVcIiwgcmVzdWx0QmxvY2ssIFwicmVzdWx0U2hvd1wiLCBjc3MsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlVc2VySW5mbyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdENob29zZUNhcmRzKGNob3NlQ2FyZHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBkaXNwbGF5VXNlclNwaW5zKDApO1xuICAgICAgICAgICAgZm9yIChsZXQgcGFydGljaXBhdGVCdG4gb2YgcGFydGljaXBhdGVCdG5zKSB7XG4gICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzKCkge1xuICAgICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZShtb2NrVXNlcnMsIHVzZXJJZCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0KGAvdXNlcnMvJHtjdXJyZW50VGFiVGFibGV9YCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGxldCB1c2VycyA9IGRhdGEudXNlcnM7XG4gICAgICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIHVzZXJJZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCkge1xuICAgICAgICBjb25zdCB5b3VSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGVPdGhlcicpO1xuICAgICAgICBjb25zdCB0YWJsZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGUnKTtcblxuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGggfHwgY3VycmVudFVzZXJJZCA9PT0gdW5kZWZpbmVkKSByZXR1cm47IC8vINC00L7QtNCw0L3QviDQv9C10YDQtdCy0ZbRgNC60YMg0L3QsCBjdXJyZW50VXNlcklkXG5cbiAgICAgICAgLy8g0J7Rh9C40YnQtdC90L3Rj1xuICAgICAgICB5b3VSb3cuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRhYmxlQm9keS5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICB1c2Vycy5zb3J0KChhLCBiKSA9PiBiLmJldCAtIGEuYmV0KTtcblxuICAgICAgICB1c2Vycy5mb3JFYWNoKCh1c2VyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50VXNlciA9IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkO1xuICAgICAgICAgICAgbGV0IGlzVG9wVXNlciA9IGZhbHNlXG5cbiAgICAgICAgICAgIGlmKGluZGV4IDw9IDUgJiYgaXNDdXJyZW50VXNlcil7XG4gICAgICAgICAgICAgICBpc1RvcFVzZXIgPSB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIGluZGV4ICsgMSwgaXNDdXJyZW50VXNlciAmJiAhaXNUb3BVc2VyID8geW91Um93IDogdGFibGVCb2R5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXIodXNlciwgaXNDdXJyZW50VXNlciwgcGxhY2UsIHRhcmdldCkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRhcmdldClcblxuICAgICAgICBjb25zdCB1c2VySWREaXNwbGF5ID0gaXNDdXJyZW50VXNlciA/IHVzZXIudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyLnVzZXJpZCk7XG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRhcmdldClcblxuICAgICAgICBpZiAoaXNDdXJyZW50VXNlcikge1xuICAgICAgICAgICAgLy8g0KHRgtCy0L7RgNC10L3QvdGPINC10LvQtdC80LXQvdGC0YMgJ3lvdScg0YLQsCDQstGB0YLQsNCy0LrQsCDQudC+0LPQviDQv9GW0YHQu9GPINC10LvQtdC80LXQvdGC0YMg0Lcg0LzRltGB0YbQtdC8XG4gICAgICAgICAgICBjb25zdCB5b3VUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB5b3VUZXh0LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3ctaXRlbScsICdfeW91LXRleHQnKTtcbiAgICAgICAgICAgIHlvdVRleHQuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsICd5b3UnKTtcblxuICAgICAgICAgICAgcm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj4ke3BsYWNlfTwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICAvLyDQlNC+0LTQsNGU0LzQviBcInlvdVwiINGC0LXQutGB0YIg0L/RltGB0LvRjyDQvNGW0YHRhtGPXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoeW91VGV4dCk7XG5cbiAgICAgICAgICAgIC8vINCf0L7RgtGW0Lwg0LTQvtC00LDRlNC80L4gdXNlcklkINGC0LAg0YHRgtCw0LLQutGDXG4gICAgICAgICAgICBjb25zdCB1c2VySWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVzZXJJZERpdi5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93LWl0ZW0nKTtcbiAgICAgICAgICAgIHVzZXJJZERpdi50ZXh0Q29udGVudCA9IHVzZXJJZERpc3BsYXk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJldERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYmV0RGl2LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3ctaXRlbScpO1xuICAgICAgICAgICAgYmV0RGl2LnRleHRDb250ZW50ID0gdXNlci5iZXQ7XG5cbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh1c2VySWREaXYpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGJldERpdik7XG5cbiAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdfeW91Jyk7XG4gICAgICAgICAgICAvLyB0YXJnZXQuaW5uZXJIVE1MID0gJyc7IC8vINC+0YfQuNGJ0LDRlNC80L4gdGFyZ2V0INC/0LXRgNC10LQg0LTQvtC00LDQstCw0L3QvdGP0Lwg0L3QvtCy0L7Qs9C+INC60L7QvdGC0LXQvdGC0YNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvdylcbiAgICAgICAgICAgIC8vINCU0LvRjyDRltC90YjQuNGFINC60L7RgNC40YHRgtGD0LLQsNGH0ZbQsiwg0LTQvtC00LDRlNC80L4g0LHQtdC3INC30LzRltC90Lgg0YHRgtGA0YPQutGC0YPRgNC4XG4gICAgICAgICAgICByb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPiR7cGxhY2V9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+JHt1c2VySWREaXNwbGF5fTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPiR7dXNlci5iZXR9PC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyb3cpXG5cblxuICAgICAgICB9XG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gbWFza1VzZXJJZCh1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIFwiKipcIiArIHVzZXJJZC50b1N0cmluZygpLnNsaWNlKDIpO1xuICAgIH1cblxuXG4gICAgbG9hZFRyYW5zbGF0aW9ucygpXG4gICAgICAgIC50aGVuKGluaXQpO1xuXG4gICAgbGV0IGluaXRlZCA9IGZhbHNlO1xuICAgIGZ1bmN0aW9uIGluaXRDaG9vc2VDYXJkcyhjYXJkcyl7XG4gICAgICAgIGlmIChpbml0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PntcbiAgICAgICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJpbmZvLWljb25cIikpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWZmaWN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkaWZmaWN1bHRzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZC5jbGFzc0xpc3QuY29udGFpbnMoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGUgPSBtb2RlTWFwW2l0ZW1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGUobW9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICBpbml0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFBvcHVwKHdyYXAsIHBvcHVwTmFtZSwgYnRucywgcG9wdXBJdGVtcyl7XG4gICAgICAgIGxldCBwb3B1cCA9IHdyYXAucXVlcnlTZWxlY3RvcihgLiR7cG9wdXBOYW1lfWApXG5cbiAgICAgICAgd3JhcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgZS50YXJnZXQgPT09IHdyYXAgPyBjbG9zZVBvcHVwKCkgOiBudWxsXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgY2xvc2VQb3B1cCA9ICgpID0+e1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIilcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICAgICAgd3JhcC5jbGFzc0xpc3QuYWRkKFwiX29wYWNpdHlcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgICAgaWYoYnRuLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMocG9wdXBOYW1lKSl7XG4gICAgICAgICAgICAgICAgYnRuLnBhcmVudE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgICAgICAgICAgaWYoZS50YXJnZXQgPT09IGJ0bil7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBJdGVtcy5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJfYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgIHdyYXAuY2xhc3NMaXN0LnJlbW92ZShcIl9vcGFjaXR5XCIpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBsZXQgY2xvc2VCdG4gPSBwb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19jbG9zZVwiKVxuICAgICAgICAgICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VQb3B1cCgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzZXRQb3B1cChwb3B1cHNXcmFwLCBcIl9lYXN5XCIsIHNob3dQb3B1cEJ0bnMsIHBvcHVwSXRlbXMpXG4gICAgc2V0UG9wdXAocG9wdXBzV3JhcCwgXCJfbWVkaXVtXCIsIHNob3dQb3B1cEJ0bnMsIHBvcHVwSXRlbXMpXG4gICAgc2V0UG9wdXAocG9wdXBzV3JhcCwgXCJfaGlnaHRcIiwgc2hvd1BvcHVwQnRucywgcG9wdXBJdGVtcylcbiAgICBzZXRQb3B1cChwb3B1cHNXcmFwLCBcIl9ub3RpZnlcIiwgc2hvd1BvcHVwQnRucywgcG9wdXBJdGVtcylcblxuICAgIGZ1bmN0aW9uIHN0YXJ0Q291bnRkb3duKHNlbGVjdG9yLCBlbmREYXRlKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtzZWxlY3Rvcn0gLndlbGNvbWVfX3RpbWVyLWl0ZW0tbnVtYCk7XG4gICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggIT09IDQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgc2VsZWN0b3IhJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YXJnZXREYXRlID0gbmV3IERhdGUoZW5kRGF0ZSkuZ2V0VGltZSgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWVyKCkge1xuICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCB0aW1lTGVmdCA9IHRhcmdldERhdGUgLSBub3c7XG5cbiAgICAgICAgICAgIGlmICh0aW1lTGVmdCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lclZhbHVlcyhbMCwgMCwgMCwgMF0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IodGltZUxlZnQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHRpbWVMZWZ0ICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVyVmFsdWVzKFtkYXlzLCBob3VycywgbWludXRlcywgc2Vjb25kc10pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0VGltZXJWYWx1ZXModmFsdWVzKSB7XG4gICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaW5kZXhdLnRleHRDb250ZW50ID0gdmFsdWUgPCAxMCA/IGAwJHt2YWx1ZX1gIDogdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZVRpbWVyKCk7XG4gICAgICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh1cGRhdGVUaW1lciwgMTAwMCk7XG4gICAgfVxuXG4gICAgc3RhcnRDb3VudGRvd24oJy53ZWxjb21lX190aW1lcicsICcyMDI1LTA2LTMwVDIzOjU5OjU5Jyk7XG5cbiAgICBmdW5jdGlvbiBtb25pdG9yVmlzaWJpbGl0eShzZWxlY3RvciwgYW5pbWF0aW9uLCBkZWxheSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFbGVtZW50IG5vdCBmb3VuZCEnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYW5pbWF0aW9uKVxuICAgICAgICAgICAgICAgICAgICB9LCBkZWxheSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICB9XG5cbiAgICBtb25pdG9yVmlzaWJpbGl0eSgnLm5vdGlmeV9fcGVycycsIFwic2hvd1pldXNcIiwgMCk7XG4gICAgbW9uaXRvclZpc2liaWxpdHkoJy5ub3RpZnlfX3BlcnMtYnVibGUnLCBcInNob3daZXVzQnVibGVcIiwgMTIwMCk7XG4gICAgbW9uaXRvclZpc2liaWxpdHkoJy5jaG9zZV9fcGVycy1idWJsZScsIFwic2hvd1pldXNCdWJsZVwiLCAwKTtcbiAgICBtb25pdG9yVmlzaWJpbGl0eSgnLmNob3NlX19jYXJkLl9lYXN5JywgXCJzaG93Q2FyZFwiLCA0MDApO1xuICAgIG1vbml0b3JWaXNpYmlsaXR5KCcuY2hvc2VfX2NhcmQuX21lZGl1bScsIFwic2hvd0NhcmRcIiwgODAwKTtcbiAgICBtb25pdG9yVmlzaWJpbGl0eSgnLmNob3NlX19jYXJkLl9oaWdodCcsIFwic2hvd0NhcmRcIiwgMTIwMCk7XG5cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUJsb2NrcyhoaWRlQmxvY2ssIGhpZGVDbGFzcywgc2hvd0Jsb2NrLCBzaG93Q2xhc3MsIHN0YXRlLCBhbmltYXRlKXtcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZChzdGF0ZSwgbG9jYWxlKVxuICAgICAgICBoaWRlQmxvY2suY2xhc3NMaXN0LmFkZChoaWRlQ2xhc3MpXG4gICAgICAgIGxldCBkcm9wcyA9IHNob3dCbG9jay5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyb3BcIilcbiAgICAgICAgZHJvcHMuZm9yRWFjaChpdGVtID0+e1xuICAgICAgICAgICAgZGlmZmljdWx0cy5mb3JFYWNoKHN0YXRlID0+e1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShzdGF0ZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIGRyb3BzWzBdLmNsYXNzTGlzdC5hZGQoc3RhdGUpXG4gICAgICAgIGlmKGFuaW1hdGUpe1xuICAgICAgICAgICAgaGlkZUJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT57XG5cbiAgICAgICAgICAgICAgICBzaG93QmxvY2suc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICAgICAgc2hvd0Jsb2NrLnN0eWxlLmhlaWdodCA9IGhpZGVCbG9jay5jbGllbnRIZWlnaHRcbiAgICAgICAgICAgICAgICBoaWRlQmxvY2suY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICBzaG93UmVzdWx0QmxvY2soc2hvd0Jsb2NrLCBzaG93Q2xhc3MpXG4gICAgICAgICAgICAgICAgfSwgNTApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNob3dCbG9jay5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgICAgIHNob3dCbG9jay5zdHlsZS5oZWlnaHQgPSBoaWRlQmxvY2suY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICBoaWRlQmxvY2suY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgIHNob3dSZXN1bHRCbG9jayhzaG93QmxvY2ssIHNob3dDbGFzcylcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd1Jlc3VsdEJsb2NrKHNob3dCbG9jaywgc2hvd0NsYXNzKXtcbiAgICAgICAgc2hvd0Jsb2NrLmNsYXNzTGlzdC5hZGQoc2hvd0NsYXNzKVxuICAgICAgICBzaG93QmxvY2suc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IHNob3dCbG9jay5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlc3VsdF9fYmV0cy1pdGVtXCIpXG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpKSA9PntcbiAgICAgICAgICAgICAgICBpZihpdGVtLmNsYXNzTGlzdC5jb250YWlucyhcInlvdVwiKSl7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeW91ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdF9fYmV0cy15b3VcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHlvdS5jbGFzc0xpc3QuYWRkKCdzaG93WW91JylcbiAgICAgICAgICAgICAgICAgICAgfSwgMjcwMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlc3VsdF9fYnRuXCIpXG4gICAgICAgICAgICAgICAgICAgIGJ0bnMuZm9yRWFjaChidG4gPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcInNob3dCdG5cIilcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LCAyOTAwKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcInNob3dJdGVtXCIpXG4gICAgICAgICAgICAgICAgfSwgMjUwICogaXRlbXMubGVuZ3RoIC0gaSAqIDI1MClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b0Nob3NlXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaG9zZVwiKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSB0YXJnZXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCAtIDI7XG5cbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgIHRvcDogdGFyZ2V0UG9zaXRpb24sXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy90ZXN0XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRlc3RcIikuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIilcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaWdodC1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBkaWZmaWN1bHRzLmZvckVhY2goY3NzID0+e1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShjc3MpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdG9nZ2xlQmxvY2tzKGNob3NlQmxvY2ssIFwiY2hvc2VIaWRlXCIsIHJlc3VsdEJsb2NrLCBcInJlc3VsdFNob3dcIiwgXCJfaGlnaHRcIiwgdHJ1ZSk7XG4gICAgfSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVhc3ktYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgZGlmZmljdWx0cy5mb3JFYWNoKGNzcyA9PntcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoY3NzKVxuICAgICAgICB9KVxuICAgICAgICB0b2dnbGVCbG9ja3MoY2hvc2VCbG9jaywgXCJjaG9zZUhpZGVcIiwgcmVzdWx0QmxvY2ssIFwicmVzdWx0U2hvd1wiLCBcIl9lYXN5XCIsIHRydWUpO1xuICAgIH0pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZWRpdW0tYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgZGlmZmljdWx0cy5mb3JFYWNoKGNzcyA9PntcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoY3NzKVxuICAgICAgICB9KVxuICAgICAgICB0b2dnbGVCbG9ja3MoY2hvc2VCbG9jaywgXCJjaG9zZUhpZGVcIiwgcmVzdWx0QmxvY2ssIFwicmVzdWx0U2hvd1wiLCBcIl9tZWRpdW1cIiwgdHJ1ZSk7XG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdXRoLWJ0bicpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaGFzSWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcbiAgICAgICAgaGFzSWQgPyBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VySWQnKSA6IHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXJJZCcsICcxMDAzMDAyNjgnKTtcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxuZy1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudExvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIik7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRMb2NhbGUgPT09IFwiZW5cIikge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIiwgXCJlblwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXJrLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIilcbiAgICB9KVxuXG59KSgpO1xuIl19
