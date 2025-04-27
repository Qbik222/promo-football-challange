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
  userId = 100302270;
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
      if (bet.win) {
        status = '_done';
      } else if (bet.win === undefined || bet.win === 'undefined') {
        status = 'you';
      }
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
    request("/users/").then(function (data) {
      var users = data.users;
      console.log(data);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwb3B1cHNXcmFwIiwic2hvd1BvcHVwQnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwb3B1cEl0ZW1zIiwiY2hvc2VCbG9jayIsInJlc3VsdEJsb2NrIiwidW5hdXRoTXNncyIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImNob3NlQ2FyZHMiLCJ1a0xlbmciLCJlbkxlbmciLCJkaWZmaWN1bHRzIiwibW9kZU1hcCIsImxvY2FsZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImRlYnVnIiwibW9ja0JldHMiLCJpZCIsImJldERhdGUiLCJzdGF0dXMiLCJ1bmRlZmluZWQiLCJtb2NrVXNlcnMiLCJ1c2VyaWQiLCJiZXQiLCJpMThuRGF0YSIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwiTnVtYmVyIiwiaW5pdCIsInJlbmRlclVzZXJzIiwid2luZG93Iiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImNoZWNrVXNlckF1dGgiLCJjIiwiaSIsInNldEludGVydmFsIiwiZ191c2VyX2lkIiwiY2xlYXJJbnRlcnZhbCIsInBhcnRpY2lwYXRlIiwibW9kZSIsInBhcmFtcyIsInJlcXVlc3QiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJmb3JFYWNoIiwiaXRlbSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImNzcyIsInRvZ2dsZUJsb2NrcyIsImxvYWRUcmFuc2xhdGlvbnMiLCJmZXRjaCIsImpzb24iLCJ0cmFuc2xhdGUiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm9ic2VydmUiLCJnZXRFbGVtZW50QnlJZCIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJlbGVtcyIsImxlbmd0aCIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwidHJhbnNsYXRlS2V5IiwiZGVmYXVsdFZhbCIsImRpc3BsYXlVc2VySW5mbyIsInVzZXJJbmZvIiwiYmV0cyIsInNsaWNlIiwicmVmcmVzaEJldHMiLCJkaXNwbGF5QmV0c0hpc3RvcnkiLCJyZWZyZXNoTGFzdFVwZGF0ZWREYXRlIiwiZGF0ZUNvbnRhaW5lciIsInNwYW4iLCJsYXN0VXBkYXRlIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJsb2NhbERhdGUiLCJEYXRlIiwiZGF5IiwiU3RyaW5nIiwiZ2V0RGF0ZSIsInBhZFN0YXJ0IiwibW9udGgiLCJnZXRNb250aCIsImhvdXJzIiwiZ2V0SG91cnMiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsImRpdnMiLCJlbGVtZW50Iiwid2luIiwic3Bpbkl0ZW0iLCJub1NwaW5JdGVtIiwibm9CZXRzIiwidXBkIiwic3BpbiIsInNwaW5EYXRlIiwiZm9ybWF0dGVkRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInJlc29sdmVTdGF0dXNUcmFuc2xhdGlvbiIsInNwaW5FbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImlzV2luIiwic3RhdHVzQ2xhc3MiLCJhcHBlbmRDaGlsZCIsImJhc2VDc3NDbGFzcyIsImxhbmciLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiaGVhZGVycyIsInVuYXV0aE1lcyIsImluaXRDaG9vc2VDYXJkcyIsInBhcnRpY2lwYXRlQnRuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJkYXRhIiwidXNlcnMiLCJjdXJyZW50VXNlcklkIiwieW91Um93IiwidGFibGVCb2R5Iiwic29ydCIsImEiLCJiIiwidXNlciIsImluZGV4IiwiaXNDdXJyZW50VXNlciIsImlzVG9wVXNlciIsImRpc3BsYXlVc2VyIiwicGxhY2UiLCJ0YXJnZXQiLCJ1c2VySWREaXNwbGF5IiwibWFza1VzZXJJZCIsInJvdyIsInlvdVRleHQiLCJzZXRBdHRyaWJ1dGUiLCJ1c2VySWREaXYiLCJ0ZXh0Q29udGVudCIsImJldERpdiIsInRvU3RyaW5nIiwiaW5pdGVkIiwiY2FyZHMiLCJjYXJkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb250YWlucyIsInNldFBvcHVwIiwid3JhcCIsInBvcHVwTmFtZSIsImJ0bnMiLCJwb3B1cCIsImNsb3NlUG9wdXAiLCJzdHlsZSIsIm92ZXJmbG93IiwiYnRuIiwicGFyZW50Tm9kZSIsInByZXZlbnREZWZhdWx0IiwiY2xvc2VCdG4iLCJzdGFydENvdW50ZG93biIsInNlbGVjdG9yIiwiZW5kRGF0ZSIsImVsZW1lbnRzIiwiZXJyb3IiLCJ0YXJnZXREYXRlIiwiZ2V0VGltZSIsInVwZGF0ZVRpbWVyIiwibm93IiwidGltZUxlZnQiLCJpbnRlcnZhbElkIiwic2V0VGltZXJWYWx1ZXMiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwic2Vjb25kcyIsInZhbHVlcyIsInZhbHVlIiwibW9uaXRvclZpc2liaWxpdHkiLCJhbmltYXRpb24iLCJkZWxheSIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInNldFRpbWVvdXQiLCJoaWRlQmxvY2siLCJoaWRlQ2xhc3MiLCJzaG93QmxvY2siLCJzaG93Q2xhc3MiLCJhbmltYXRlIiwiZHJvcHMiLCJkaXNwbGF5IiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2hvd1Jlc3VsdEJsb2NrIiwiaXRlbXMiLCJ5b3UiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXRFbGVtZW50IiwidGFyZ2V0UG9zaXRpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJ0b2dnbGUiLCJoYXNJZCIsInJlbW92ZUl0ZW0iLCJzZXRJdGVtIiwibG9jYXRpb24iLCJy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O0lBQzNGQyxRQUFRLENBQUNDLE1BQU0sRUFBRTtFQUNyQixDQUFDLENBQUM7RUFFRnhPLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDb0ssZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07SUFDL0QsSUFBTW9FLGFBQWEsR0FBR3hOLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUV0RCxJQUFJdU4sYUFBYSxLQUFLLElBQUksRUFBRTtNQUN4QnhOLGNBQWMsQ0FBQ29OLFVBQVUsQ0FBQyxRQUFRLENBQUM7SUFDdkMsQ0FBQyxNQUFNO01BQ0hwTixjQUFjLENBQUNxTixPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQztJQUMxQztJQUVBQyxRQUFRLENBQUNDLE1BQU0sRUFBRTtFQUNyQixDQUFDLENBQUM7RUFFRnhPLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDb0ssZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7SUFDL0RySyxRQUFRLENBQUNtRCxJQUFJLENBQUNPLFNBQVMsQ0FBQ3lLLE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDMUMsQ0FBQyxDQUFDO0FBRU4sQ0FBQyxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfZm9vdGJhbGxfY2hhbGxlbmdlXzInXG5cbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4gICAgICAgIHBvcHVwc1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpLFxuICAgICAgICBzaG93UG9wdXBCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbmZvLWljb25cIiksXG4gICAgICAgIHBvcHVwSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19pdGVtXCIpLFxuICAgICAgICBjaG9zZUJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaG9zZVwiKSxcbiAgICAgICAgcmVzdWx0QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdFwiKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0bicpLFxuICAgICAgICByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWpvaW4nKSxcbiAgICAgICAgY2hvc2VDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hvc2VfX2NhcmRcIilcblxuICAgIGNvbnN0IHVrTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1a0xlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBjb25zdCBkaWZmaWN1bHRzID0gW1wiX2Vhc3lcIiwgXCJfbWVkaXVtXCIsIFwiX2hpZ2h0XCJdO1xuICAgIGNvbnN0IG1vZGVNYXAgPSB7XCJub3ZpY2VcIjogXCJfZWFzeVwiLCBcImV4cGVyaWVuY2VkXCI6IFwiX21lZGl1bVwiLCBcImluc2FuZVwiOiBcIl9oaWdodFwiLCBcIl9lYXN5XCI6IFwibm92aWNlXCIsIFwiX21lZGl1bVwiOiBcImV4cGVyaWVuY2VkXCIsIFwiX2hpZ2h0XCI6IFwiaW5zYW5lXCJ9O1xuXG4gICAgbGV0IGxvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgPyBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpIDogXCJ1a1wiXG5cblxuICAgIGlmICh1a0xlbmcpIGxvY2FsZSA9ICd1ayc7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuICAgIGxldCBkZWJ1ZyA9IHRydWVcblxuICAgIGNvbnN0IG1vY2tCZXRzID0gW1xuICAgICAgICB7IGlkOiAzODgzMTAyNDcsIGJldERhdGU6ICcyMDI1LTA0LTIwVDEyOjAwOjAwJywgc3RhdHVzOiAnd2luJyB9LFxuICAgICAgICB7IGlkOiAzODgzMTAyNDcsIGJldERhdGU6ICcyMDI1LTA0LTIwVDEyOjAwOjAwJywgc3RhdHVzOiAnd2luJyB9LFxuICAgICAgICB7IGlkOiAzODgzMTAyNDgsIGJldERhdGU6ICcyMDI1LTA0LTE5VDE1OjMwOjAwJywgc3RhdHVzOiAnbG9zZScgfSxcbiAgICAgICAgeyBpZDogMzg4MzEwMjQ4LCBiZXREYXRlOiAnMjAyNS0wNC0xOVQxNTozMDowMCcsIHN0YXR1czogJ3dpbicgfSxcbiAgICAgICAgeyBpZDogMzg4MzEwMjQ4LCBiZXREYXRlOiAnMjAyNS0wNC0xOVQxNTozMDowMCcsIHN0YXR1czogJ2xvc2UnIH0sXG4gICAgICAgIHsgaWQ6IDM4ODMxMDI0OCwgYmV0RGF0ZTogJzIwMjUtMDQtMTlUMTU6MzA6MDAnLCBzdGF0dXM6ICdsb3NlJyB9LFxuICAgICAgICB7IGlkOiAzODgzMTAyNDgsIGJldERhdGU6ICcyMDI1LTA0LTE5VDE1OjMwOjAwJywgc3RhdHVzOiAnbG9zZScgfSxcbiAgICAgICAgeyBpZDogMzg4MzEwMjQ5LCBiZXREYXRlOiAnMjAyNS0wNC0xOFQwOToxNTowMCcsIHN0YXR1czogdW5kZWZpbmVkIH0sXG4gICAgXTtcblxuICAgIGNvbnN0IG1vY2tVc2VycyA9IFtcbiAgICAgICAgeyB1c2VyaWQ6IDM4ODMxMDI0NywgYmV0OiAxMCB9LFxuICAgICAgICB7IHVzZXJpZDogMTIzNDU2Nzg5LCBiZXQ6IDkgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDM2OCwgYmV0OiA4IH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAxNjgsIGJldDogOCB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMDY4LCBiZXQ6IDggfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwODI2OCwgYmV0OiA4IH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMTEyMjIzMzMsIGJldDogNyB9LFxuICAgICAgICB7IHVzZXJpZDogMTExMjIyMzQzLCBiZXQ6IDcgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDExMTIyMjM1MywgYmV0OiA2IH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMTEyMjIzNjMsIGJldDogNSB9LFxuICAgICAgICB7IHVzZXJpZDogNDQ0NTU1NjY2LCBiZXQ6IDUgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDI2OCwgYmV0OiA2IH0sXG4gICAgXTtcblxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGUgPSB0cnVlO1xuICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSA/IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSkgOiBudWxsO1xuICAgIHVzZXJJZCA9IDEwMDMwMjI3MFxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgcmVuZGVyVXNlcnMoKSAvLyDQtNC70Y8g0LvQvtC60LDQu9GM0L3QvtCz0L4g0LfQsNC/0YPRgdC60YNcbiAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICAgICAgcmVuZGVyVXNlcnMoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICAgICAgbGV0IGMgPSAwO1xuICAgICAgICAgICAgdmFyIGkgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGMgPCA1MCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoISF3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyVXNlcnMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKClcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKG1vZGUpIHtcbiAgICAgICAgaWYgKCF1c2VySWQgfHwgIW1vZGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt1c2VyaWQ6IHVzZXJJZCwgbW9kZX07XG4gICAgICAgIHJlcXVlc3QoJy91c2VyJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICBjb25zdCBjc3MgPSBtb2RlTWFwW21vZGVdO1xuICAgICAgICAgICAgdG9nZ2xlQmxvY2tzKGNob3NlQmxvY2ssIFwiY2hvc2VIaWRlXCIsIHJlc3VsdEJsb2NrLCBcInJlc3VsdFNob3dcIiwgY3NzLCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke2FwaVVSTH0vdHJhbnNsYXRlcy8ke2xvY2FsZX1gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9vdGJhbGwtY2hhbGxlbmdlXCIpLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29yayFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYWxlID09PSAnZW4nKSB7XG4gICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdlbicpO1xuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZUtleShrZXksIGRlZmF1bHRWYWwpIHtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaTE4bkRhdGFba2V5XSB8fCBkZWZhdWx0VmFsIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlckluZm8odXNlckluZm8pIHtcbiAgICAgICAgY29uc3QgYmV0cyA9IHVzZXJJbmZvLmJldHMuc2xpY2UoMCwgMTApO1xuICAgICAgICAvLyBsZXQgYmV0cyA9IFt7YmV0RGF0ZTogbmV3IERhdGUoKSwgc3RhdHVzOiAndW5kZWZpbmVkJ31dXG4gICAgICAgIHJlZnJlc2hCZXRzKGJldHMpO1xuICAgICAgICBkaXNwbGF5QmV0c0hpc3RvcnkoYmV0cyk7XG4gICAgICAgIHJlZnJlc2hMYXN0VXBkYXRlZERhdGUodXNlckluZm8pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMYXN0VXBkYXRlZERhdGUodXNlckluZm8pIHtcbiAgICAgICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRfX2xhc3QtdXBkJyk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFzdFVwZCcpO1xuICAgICAgICBpZiAodXNlckluZm8ubGFzdFVwZGF0ZSkge1xuICAgICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSBmb3JtYXREYXRlKHVzZXJJbmZvLmxhc3RVcGRhdGUpO1xuICAgICAgICAgICAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBkYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuICAgICAgICBjb25zdCBsb2NhbERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgY29uc3QgZGF5ID0gU3RyaW5nKGxvY2FsRGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gU3RyaW5nKGxvY2FsRGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgaG91cnMgPSBTdHJpbmcobG9jYWxEYXRlLmdldEhvdXJzKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBTdHJpbmcobG9jYWxEYXRlLmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgcmV0dXJuIGAke2RheX0uJHttb250aH0gJHtob3Vyc306JHttaW51dGVzfWA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaEJldHMoYmV0cykge1xuICAgICAgICBjb25zdCBkaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3VsdF9fYmV0cy1pdGVtJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRpdnNbaV07XG4gICAgICAgICAgICBjb25zdCBiZXQgPSBiZXRzW2ldO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd5b3UnKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnX2RvbmUnKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnX2ZhaWwnKTtcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSAnX2ZhaWwnO1xuICAgICAgICAgICAgaWYgKGJldC53aW4pIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSAnX2RvbmUnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChiZXQud2luID09PSB1bmRlZmluZWQgfHwgYmV0LndpbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSAneW91JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheUJldHNIaXN0b3J5KGJldHMpIHtcbiAgICAgICAgLy8gcmV0dXJuO1xuICAgICAgICBjb25zdCBzcGluSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGlucy1yb3cnKTtcbiAgICAgICAgY29uc3Qgbm9TcGluSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uby1zcGlucycpO1xuXG4gICAgICAgIGNvbnN0IG5vQmV0cyA9ICFiZXRzIHx8IGJldHMubGVuZ3RoID09PSAwO1xuXG4gICAgICAgIGlmIChub0JldHMgJiYgIWRlYnVnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhub0JldHMsIGRlYnVnKVxuICAgICAgICAgICAgc3Bpbkl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgbm9TcGluSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZihkZWJ1Zyl7XG4gICAgICAgICAgICBiZXRzID0gbW9ja0JldHNcbiAgICAgICAgfVxuXG4gICAgICAgIHNwaW5JdGVtLmlubmVySFRNTCA9XG4gICAgICAgICAgICBgXG4gICAgICAgPGRpdiBjbGFzcz1cInNwaW5zLXJvdy1oZWFkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1kYXRlXCIgZGF0YS10cmFuc2xhdGU9XCJteUJldERhdGVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXByaXplXCIgZGF0YS10cmFuc2xhdGU9XCJteUJldFByaXplXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1zdGF0dXNcIiBkYXRhLXRyYW5zbGF0ZT1cIm15QmV0U3RhdHVzXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICBzcGluSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIG5vU3Bpbkl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG4gICAgICAgIGxldCB1cGQgPSAwO1xuICAgICAgICBiZXRzLmZvckVhY2goc3BpbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcGluRGF0ZSA9IG5ldyBEYXRlKHNwaW4uYmV0RGF0ZSk7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gc3BpbkRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCd1ay1VQScpLnNsaWNlKDAsIDUpO1xuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gcmVzb2x2ZVN0YXR1c1RyYW5zbGF0aW9uKHNwaW4uc3RhdHVzKTtcblxuICAgICAgICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwaW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgc3BpbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3BpbnMtcm93LWl0ZW0nKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGlzV2luID0gc3Bpbi5zdGF0dXMgPT09ICd3aW4nO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c0NsYXNzID0gaXNXaW4gPyAnX2RvbmUnIDogJyc7XG5cbiAgICAgICAgICAgICAgICBzcGluRWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudC1kYXRlXCI+JHtmb3JtYXR0ZWREYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb250ZW50LXByaXplXCI+SUQ6JHtzcGluLmlkfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb250ZW50LXN0YXR1cyAke3N0YXR1c0NsYXNzfVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgIHNwaW5JdGVtLmFwcGVuZENoaWxkKHNwaW5FbGVtZW50KTtcbiAgICAgICAgICAgICAgICB1cGQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHVwZCA9PT0gMCkge1xuICAgICAgICAgICAgc3Bpbkl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgbm9TcGluSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNvbHZlU3RhdHVzVHJhbnNsYXRpb24oc3RhdHVzKSB7XG4gICAgICAgIGlmICghc3RhdHVzIHx8IHN0YXR1cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGVLZXkoJ2JldFVuZGVmaW5lZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0dXMgPT09ICd3aW4nKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRlS2V5KCd3aW5CZXQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdHVzID09PSAnbG9zZScpIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGVLZXkoJ2xvc2VCZXQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50LCBiYXNlQ3NzQ2xhc3MpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsndWsnLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGJhc2VDc3NDbGFzcyArIGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChiYXNlQ3NzQ2xhc3MgKyBsb2NhbGUpO1xuICAgIH1cblxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfT9ub2NhY2hlPTFgKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjc3MgPSBtb2RlTWFwW3Jlcy5tb2RlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUJsb2NrcyhjaG9zZUJsb2NrLCBcImNob3NlSGlkZVwiLCByZXN1bHRCbG9jaywgXCJyZXN1bHRTaG93XCIsIGNzcywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVVzZXJJbmZvKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0Q2hvb3NlQ2FyZHMoY2hvc2VDYXJkcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGRpc3BsYXlVc2VyU3BpbnMoMCk7XG4gICAgICAgICAgICBmb3IgKGxldCBwYXJ0aWNpcGF0ZUJ0biBvZiBwYXJ0aWNpcGF0ZUJ0bnMpIHtcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVXNlcnMoKSB7XG4gICAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKG1vY2tVc2VycywgdXNlcklkKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QoYC91c2Vycy9gKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgbGV0IHVzZXJzID0gZGF0YS51c2VycztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIHVzZXJJZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCkge1xuICAgICAgICBjb25zdCB5b3VSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGVPdGhlcicpO1xuICAgICAgICBjb25zdCB0YWJsZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGUnKTtcblxuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGggfHwgY3VycmVudFVzZXJJZCA9PT0gdW5kZWZpbmVkKSByZXR1cm47IC8vINC00L7QtNCw0L3QviDQv9C10YDQtdCy0ZbRgNC60YMg0L3QsCBjdXJyZW50VXNlcklkXG5cbiAgICAgICAgLy8g0J7Rh9C40YnQtdC90L3Rj1xuICAgICAgICB5b3VSb3cuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRhYmxlQm9keS5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICB1c2Vycy5zb3J0KChhLCBiKSA9PiBiLmJldCAtIGEuYmV0KTtcblxuICAgICAgICB1c2Vycy5mb3JFYWNoKCh1c2VyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50VXNlciA9IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkO1xuICAgICAgICAgICAgbGV0IGlzVG9wVXNlciA9IGZhbHNlXG5cbiAgICAgICAgICAgIGlmKGluZGV4IDw9IDUgJiYgaXNDdXJyZW50VXNlcil7XG4gICAgICAgICAgICAgICBpc1RvcFVzZXIgPSB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIGluZGV4ICsgMSwgaXNDdXJyZW50VXNlciAmJiAhaXNUb3BVc2VyID8geW91Um93IDogdGFibGVCb2R5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXIodXNlciwgaXNDdXJyZW50VXNlciwgcGxhY2UsIHRhcmdldCkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRhcmdldClcblxuICAgICAgICBjb25zdCB1c2VySWREaXNwbGF5ID0gaXNDdXJyZW50VXNlciA/IHVzZXIudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyLnVzZXJpZCk7XG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRhcmdldClcblxuICAgICAgICBpZiAoaXNDdXJyZW50VXNlcikge1xuICAgICAgICAgICAgLy8g0KHRgtCy0L7RgNC10L3QvdGPINC10LvQtdC80LXQvdGC0YMgJ3lvdScg0YLQsCDQstGB0YLQsNCy0LrQsCDQudC+0LPQviDQv9GW0YHQu9GPINC10LvQtdC80LXQvdGC0YMg0Lcg0LzRltGB0YbQtdC8XG4gICAgICAgICAgICBjb25zdCB5b3VUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB5b3VUZXh0LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3ctaXRlbScsICdfeW91LXRleHQnKTtcbiAgICAgICAgICAgIHlvdVRleHQuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsICd5b3UnKTtcblxuICAgICAgICAgICAgcm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj4ke3BsYWNlfTwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICAvLyDQlNC+0LTQsNGU0LzQviBcInlvdVwiINGC0LXQutGB0YIg0L/RltGB0LvRjyDQvNGW0YHRhtGPXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoeW91VGV4dCk7XG5cbiAgICAgICAgICAgIC8vINCf0L7RgtGW0Lwg0LTQvtC00LDRlNC80L4gdXNlcklkINGC0LAg0YHRgtCw0LLQutGDXG4gICAgICAgICAgICBjb25zdCB1c2VySWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVzZXJJZERpdi5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93LWl0ZW0nKTtcbiAgICAgICAgICAgIHVzZXJJZERpdi50ZXh0Q29udGVudCA9IHVzZXJJZERpc3BsYXk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJldERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYmV0RGl2LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3ctaXRlbScpO1xuICAgICAgICAgICAgYmV0RGl2LnRleHRDb250ZW50ID0gdXNlci5iZXQ7XG5cbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh1c2VySWREaXYpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGJldERpdik7XG5cbiAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdfeW91Jyk7XG4gICAgICAgICAgICAvLyB0YXJnZXQuaW5uZXJIVE1MID0gJyc7IC8vINC+0YfQuNGJ0LDRlNC80L4gdGFyZ2V0INC/0LXRgNC10LQg0LTQvtC00LDQstCw0L3QvdGP0Lwg0L3QvtCy0L7Qs9C+INC60L7QvdGC0LXQvdGC0YNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvdylcbiAgICAgICAgICAgIC8vINCU0LvRjyDRltC90YjQuNGFINC60L7RgNC40YHRgtGD0LLQsNGH0ZbQsiwg0LTQvtC00LDRlNC80L4g0LHQtdC3INC30LzRltC90Lgg0YHRgtGA0YPQutGC0YPRgNC4XG4gICAgICAgICAgICByb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPiR7cGxhY2V9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+JHt1c2VySWREaXNwbGF5fTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPiR7dXNlci5iZXR9PC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyb3cpXG5cblxuICAgICAgICB9XG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gbWFza1VzZXJJZCh1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIFwiKipcIiArIHVzZXJJZC50b1N0cmluZygpLnNsaWNlKDIpO1xuICAgIH1cblxuXG4gICAgbG9hZFRyYW5zbGF0aW9ucygpXG4gICAgICAgIC50aGVuKGluaXQpO1xuXG4gICAgbGV0IGluaXRlZCA9IGZhbHNlO1xuICAgIGZ1bmN0aW9uIGluaXRDaG9vc2VDYXJkcyhjYXJkcyl7XG4gICAgICAgIGlmIChpbml0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PntcbiAgICAgICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJpbmZvLWljb25cIikpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWZmaWN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkaWZmaWN1bHRzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZC5jbGFzc0xpc3QuY29udGFpbnMoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGUgPSBtb2RlTWFwW2l0ZW1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGUobW9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICBpbml0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFBvcHVwKHdyYXAsIHBvcHVwTmFtZSwgYnRucywgcG9wdXBJdGVtcyl7XG4gICAgICAgIGxldCBwb3B1cCA9IHdyYXAucXVlcnlTZWxlY3RvcihgLiR7cG9wdXBOYW1lfWApXG5cbiAgICAgICAgd3JhcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgZS50YXJnZXQgPT09IHdyYXAgPyBjbG9zZVBvcHVwKCkgOiBudWxsXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgY2xvc2VQb3B1cCA9ICgpID0+e1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIilcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICAgICAgd3JhcC5jbGFzc0xpc3QuYWRkKFwiX29wYWNpdHlcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgICAgaWYoYnRuLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMocG9wdXBOYW1lKSl7XG4gICAgICAgICAgICAgICAgYnRuLnBhcmVudE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgICAgICAgICAgaWYoZS50YXJnZXQgPT09IGJ0bil7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBJdGVtcy5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJfYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgIHdyYXAuY2xhc3NMaXN0LnJlbW92ZShcIl9vcGFjaXR5XCIpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBsZXQgY2xvc2VCdG4gPSBwb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19jbG9zZVwiKVxuICAgICAgICAgICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VQb3B1cCgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzZXRQb3B1cChwb3B1cHNXcmFwLCBcIl9lYXN5XCIsIHNob3dQb3B1cEJ0bnMsIHBvcHVwSXRlbXMpXG4gICAgc2V0UG9wdXAocG9wdXBzV3JhcCwgXCJfbWVkaXVtXCIsIHNob3dQb3B1cEJ0bnMsIHBvcHVwSXRlbXMpXG4gICAgc2V0UG9wdXAocG9wdXBzV3JhcCwgXCJfaGlnaHRcIiwgc2hvd1BvcHVwQnRucywgcG9wdXBJdGVtcylcbiAgICBzZXRQb3B1cChwb3B1cHNXcmFwLCBcIl9ub3RpZnlcIiwgc2hvd1BvcHVwQnRucywgcG9wdXBJdGVtcylcblxuICAgIGZ1bmN0aW9uIHN0YXJ0Q291bnRkb3duKHNlbGVjdG9yLCBlbmREYXRlKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtzZWxlY3Rvcn0gLndlbGNvbWVfX3RpbWVyLWl0ZW0tbnVtYCk7XG4gICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggIT09IDQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgc2VsZWN0b3IhJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YXJnZXREYXRlID0gbmV3IERhdGUoZW5kRGF0ZSkuZ2V0VGltZSgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWVyKCkge1xuICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCB0aW1lTGVmdCA9IHRhcmdldERhdGUgLSBub3c7XG5cbiAgICAgICAgICAgIGlmICh0aW1lTGVmdCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lclZhbHVlcyhbMCwgMCwgMCwgMF0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IodGltZUxlZnQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHRpbWVMZWZ0ICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVyVmFsdWVzKFtkYXlzLCBob3VycywgbWludXRlcywgc2Vjb25kc10pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0VGltZXJWYWx1ZXModmFsdWVzKSB7XG4gICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaW5kZXhdLnRleHRDb250ZW50ID0gdmFsdWUgPCAxMCA/IGAwJHt2YWx1ZX1gIDogdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZVRpbWVyKCk7XG4gICAgICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh1cGRhdGVUaW1lciwgMTAwMCk7XG4gICAgfVxuXG4gICAgc3RhcnRDb3VudGRvd24oJy53ZWxjb21lX190aW1lcicsICcyMDI1LTA2LTMwVDIzOjU5OjU5Jyk7XG5cbiAgICBmdW5jdGlvbiBtb25pdG9yVmlzaWJpbGl0eShzZWxlY3RvciwgYW5pbWF0aW9uLCBkZWxheSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFbGVtZW50IG5vdCBmb3VuZCEnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYW5pbWF0aW9uKVxuICAgICAgICAgICAgICAgICAgICB9LCBkZWxheSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICB9XG5cbiAgICBtb25pdG9yVmlzaWJpbGl0eSgnLm5vdGlmeV9fcGVycycsIFwic2hvd1pldXNcIiwgMCk7XG4gICAgbW9uaXRvclZpc2liaWxpdHkoJy5ub3RpZnlfX3BlcnMtYnVibGUnLCBcInNob3daZXVzQnVibGVcIiwgMTIwMCk7XG4gICAgbW9uaXRvclZpc2liaWxpdHkoJy5jaG9zZV9fcGVycy1idWJsZScsIFwic2hvd1pldXNCdWJsZVwiLCAwKTtcbiAgICBtb25pdG9yVmlzaWJpbGl0eSgnLmNob3NlX19jYXJkLl9lYXN5JywgXCJzaG93Q2FyZFwiLCA0MDApO1xuICAgIG1vbml0b3JWaXNpYmlsaXR5KCcuY2hvc2VfX2NhcmQuX21lZGl1bScsIFwic2hvd0NhcmRcIiwgODAwKTtcbiAgICBtb25pdG9yVmlzaWJpbGl0eSgnLmNob3NlX19jYXJkLl9oaWdodCcsIFwic2hvd0NhcmRcIiwgMTIwMCk7XG5cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUJsb2NrcyhoaWRlQmxvY2ssIGhpZGVDbGFzcywgc2hvd0Jsb2NrLCBzaG93Q2xhc3MsIHN0YXRlLCBhbmltYXRlKXtcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZChzdGF0ZSwgbG9jYWxlKVxuICAgICAgICBoaWRlQmxvY2suY2xhc3NMaXN0LmFkZChoaWRlQ2xhc3MpXG4gICAgICAgIGxldCBkcm9wcyA9IHNob3dCbG9jay5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyb3BcIilcbiAgICAgICAgZHJvcHMuZm9yRWFjaChpdGVtID0+e1xuICAgICAgICAgICAgZGlmZmljdWx0cy5mb3JFYWNoKHN0YXRlID0+e1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShzdGF0ZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIGRyb3BzWzBdLmNsYXNzTGlzdC5hZGQoc3RhdGUpXG4gICAgICAgIGlmKGFuaW1hdGUpe1xuICAgICAgICAgICAgaGlkZUJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT57XG5cbiAgICAgICAgICAgICAgICBzaG93QmxvY2suc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICAgICAgc2hvd0Jsb2NrLnN0eWxlLmhlaWdodCA9IGhpZGVCbG9jay5jbGllbnRIZWlnaHRcbiAgICAgICAgICAgICAgICBoaWRlQmxvY2suY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICBzaG93UmVzdWx0QmxvY2soc2hvd0Jsb2NrLCBzaG93Q2xhc3MpXG4gICAgICAgICAgICAgICAgfSwgNTApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNob3dCbG9jay5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgICAgIHNob3dCbG9jay5zdHlsZS5oZWlnaHQgPSBoaWRlQmxvY2suY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICBoaWRlQmxvY2suY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgIHNob3dSZXN1bHRCbG9jayhzaG93QmxvY2ssIHNob3dDbGFzcylcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd1Jlc3VsdEJsb2NrKHNob3dCbG9jaywgc2hvd0NsYXNzKXtcbiAgICAgICAgc2hvd0Jsb2NrLmNsYXNzTGlzdC5hZGQoc2hvd0NsYXNzKVxuICAgICAgICBzaG93QmxvY2suc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IHNob3dCbG9jay5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlc3VsdF9fYmV0cy1pdGVtXCIpXG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpKSA9PntcbiAgICAgICAgICAgICAgICBpZihpdGVtLmNsYXNzTGlzdC5jb250YWlucyhcInlvdVwiKSl7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeW91ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdF9fYmV0cy15b3VcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHlvdS5jbGFzc0xpc3QuYWRkKCdzaG93WW91JylcbiAgICAgICAgICAgICAgICAgICAgfSwgMjcwMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlc3VsdF9fYnRuXCIpXG4gICAgICAgICAgICAgICAgICAgIGJ0bnMuZm9yRWFjaChidG4gPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcInNob3dCdG5cIilcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LCAyOTAwKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcInNob3dJdGVtXCIpXG4gICAgICAgICAgICAgICAgfSwgMjUwICogaXRlbXMubGVuZ3RoIC0gaSAqIDI1MClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b0Nob3NlXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaG9zZVwiKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSB0YXJnZXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCAtIDI7XG5cbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgIHRvcDogdGFyZ2V0UG9zaXRpb24sXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy90ZXN0XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRlc3RcIikuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIilcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaWdodC1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBkaWZmaWN1bHRzLmZvckVhY2goY3NzID0+e1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShjc3MpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdG9nZ2xlQmxvY2tzKGNob3NlQmxvY2ssIFwiY2hvc2VIaWRlXCIsIHJlc3VsdEJsb2NrLCBcInJlc3VsdFNob3dcIiwgXCJfaGlnaHRcIiwgdHJ1ZSk7XG4gICAgfSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVhc3ktYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgZGlmZmljdWx0cy5mb3JFYWNoKGNzcyA9PntcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoY3NzKVxuICAgICAgICB9KVxuICAgICAgICB0b2dnbGVCbG9ja3MoY2hvc2VCbG9jaywgXCJjaG9zZUhpZGVcIiwgcmVzdWx0QmxvY2ssIFwicmVzdWx0U2hvd1wiLCBcIl9lYXN5XCIsIHRydWUpO1xuICAgIH0pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZWRpdW0tYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgZGlmZmljdWx0cy5mb3JFYWNoKGNzcyA9PntcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoY3NzKVxuICAgICAgICB9KVxuICAgICAgICB0b2dnbGVCbG9ja3MoY2hvc2VCbG9jaywgXCJjaG9zZUhpZGVcIiwgcmVzdWx0QmxvY2ssIFwicmVzdWx0U2hvd1wiLCBcIl9tZWRpdW1cIiwgdHJ1ZSk7XG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdXRoLWJ0bicpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaGFzSWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcbiAgICAgICAgaGFzSWQgPyBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VySWQnKSA6IHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXJJZCcsICcxMDAzMDAyNjgnKTtcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxuZy1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudExvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIik7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRMb2NhbGUgPT09IFwiZW5cIikge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIiwgXCJlblwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXJrLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIilcbiAgICB9KVxuXG59KSgpO1xuIl19
