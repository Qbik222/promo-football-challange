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
  var apiURL = 'https://fav-prom.com/api_wheel_2025';
  var mainPage = document.querySelector(".fav-page"),
    popupsWrap = document.querySelector(".popup"),
    showPopupBtns = document.querySelectorAll(".info-icon"),
    popupItems = document.querySelectorAll(".popup__item"),
    choseBlock = document.querySelector(".chose"),
    resultBlock = document.querySelector(".result"),
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.part-btn'),
    redirectBtns = document.querySelectorAll('.btn-join'),
    choseBtns = document.querySelectorAll(".chose__card-btn"),
    choseCards = document.querySelectorAll(".chose__card");
  var ukLeng = document.querySelector('#ukLeng');
  var enLeng = document.querySelector('#enLeng');
  var locale = 'uk';
  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var userStatus = false,
    difficult = "_easy";
  var i18nData = {};
  var debug = true,
    translateState = false;
  var userId;
  userId = 7777777;
  // userId = 100300268

  var setPageState = function setPageState() {
    if (userStatus) {
      toggleBlocks(choseBlock, "choseHide", resultBlock, "resultShow", difficult, userStatus);
    }
  };
  var InitPage = function InitPage() {
    setPageState();
  };
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
      var c = 0;
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
    participateBtns.forEach(function (authBtn, i) {
      authBtn.addEventListener('click', function (e) {
        e.preventDefault();
        participate();
      });
    });
  }
  function participate() {
    if (!userId) {
      return;
    }
    var params = {
      userid: userId
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
      setupPage();
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
  function translateKey(key) {
    if (!key) {
      return;
    }
    return i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
  }
  function displayUserSpins(spins) {
    var spinItem = document.querySelector('.spins-row');
    var noSpinItem = document.querySelector('.no-spins');

    // console.log(spins)

    if (!spins || spins.length === 0) {
      spinItem.classList.add('hide');
      noSpinItem.classList.remove('hide');
      return;
    }

    // const spinsContainer = document.querySelector('.spins-row');
    spinItem.innerHTML = "\n       <div class=\"spins-row-head\">\n            <div class=\"content-date\" data-translate=\"mySpinsDate\"></div>\n            <div class=\"content-prize\" data-translate=\"mySpinsPrize\"></div>\n        </div>\n        ";
    spinItem.classList.remove('hide');
    noSpinItem.classList.add('hide');
    // console.log(noSpinItem)

    spins.forEach(function (spin) {
      var spinDate = new Date(spin.date);
      var formattedDate = spinDate.toLocaleDateString('uk-UA');
      var spinName = translateKey(spin.name) || '';
      var spinElement = document.createElement('div');
      spinElement.classList.add('spins-row-item');
      spinElement.innerHTML = "\n            <span class=\"content-date\">".concat(formattedDate, "</span>\n            <span class=\"content-prize\">").concat(spinName, "</span>\n        ");
      spinItem.appendChild(spinElement);
    });
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
          console.log(res.userid);
          participateBtns.forEach(function (item) {
            return item.classList.add('hide');
          });
          redirectBtns.forEach(function (item) {
            return item.classList.remove('hide');
          });
          setChoseCards(choseCards);
          if (debug) {
            // res.pointsPerDay = 30;
            // res.spinAllowed = true;
            // res.spinsStreak = 3;
            res.spins = [];
          }
          displayUserSpins(res.spins);
        } else {
          choseBtns.forEach(function (item) {
            return item.classList.add('hide');
          });
          participateBtns.forEach(function (item) {
            return item.classList.remove('hide');
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
      var _iterator3 = _createForOfIteratorHelper(choseBtns),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var choseBtn = _step3.value;
          choseBtn.classList.add('hide');
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var _iterator4 = _createForOfIteratorHelper(unauthMsgs),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _unauthMes = _step4.value;
          _unauthMes.classList.remove('hide');
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return Promise.resolve(false);
    }
  }
  loadTranslations().then(init);
  function setChoseCards(cards) {
    var difficults = ["_easy", "_medium", "_hight"];
    cards.forEach(function (card) {
      card.addEventListener("click", function (e) {
        if (e.target.classList.contains("info-icon")) {
          return;
        }
        difficults.forEach(function (item) {
          if (card.classList.contains(item)) {
            toggleBlocks(choseBlock, "choseHide", resultBlock, "resultShow", item, userStatus);
          }
        });
      });
    });
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
  startCountdown('.welcome__timer', '2025-01-31T23:59:59');
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
  function toggleBlocks(hideBlock, hideClass, showBlock, showClass, state, userStatus) {
    mainPage.classList.add(state);
    hideBlock.classList.add(hideClass);
    if (!userStatus) {
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
            var btn = document.querySelector(".result__btn");
            you.classList.add('showYou');
            setTimeout(function () {
              btn.classList.add("showBtn");
            }, 200);
          }, 2700);
        }
        setTimeout(function () {
          item.classList.add("showItem");
        }, 250 * items.length - i * 250);
      });
    });
  }
  document.querySelector('.welcome__scroll').addEventListener('click', function () {
    var targetBlock = document.querySelector('.chose');
    targetBlock.scrollIntoView({
      behavior: 'smooth'
    });
  });
  var startBonusEasy = 300,
    startBonusMedium = 700,
    startBonusHight = 1500,
    streakBonusEasy = 200,
    streakBonusMedium = 200,
    streakBonusHight = 500,
    streak = 5;
  var saveBetEasy = saveBetCalc(startBonusEasy, streak, streakBonusEasy, false),
    saveBetMedium = saveBetCalc(startBonusMedium, streak, streakBonusMedium, false),
    saveBetHeight = saveBetCalc(startBonusHight, streak, streakBonusHight, true);
  function saveBetCalc(startBonus, streak, streakBonus, difficult) {
    for (var i = 4; i <= streak; i++) {
      if (!difficult) {
        i === 10 ? startBonus += 1000 : startBonus += streakBonus;
      } else {
        i >= 9 ? startBonus += 1000 : startBonus += streakBonus;
      }
    }
    return startBonus;
  }
  console.log(saveBetEasy, saveBetMedium, saveBetHeight);

  //for test
  var menuBtn = document.querySelector(".menu-btn"),
    menu = document.querySelector(".menu-test"),
    easyBtn = document.querySelector(".easy"),
    mediumBtn = document.querySelector(".medium"),
    hightBtn = document.querySelector(".hight"),
    noStateBtn = document.querySelector(".not-join"),
    darkBtn = document.querySelector(".dark");
  function changeStatePage(btn, state) {
    btn.addEventListener("click", function () {
      mainPage.className = "fav-page";
      if (state) {
        toggleBlocks(choseBlock, "choseHide", resultBlock, "resultShow", state, userStatus);
      }
    });
  }
  changeStatePage(easyBtn, "_easy");
  changeStatePage(mediumBtn, "_medium");
  changeStatePage(hightBtn, "_hight");
  menuBtn.addEventListener("click", function () {
    menu.classList.toggle("hide");
  });
  darkBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
  });

  // changeStatePage(noStateBtn, false)
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwb3B1cHNXcmFwIiwic2hvd1BvcHVwQnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwb3B1cEl0ZW1zIiwiY2hvc2VCbG9jayIsInJlc3VsdEJsb2NrIiwidW5hdXRoTXNncyIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImNob3NlQnRucyIsImNob3NlQ2FyZHMiLCJ1a0xlbmciLCJlbkxlbmciLCJsb2NhbGUiLCJ1c2VyU3RhdHVzIiwiZGlmZmljdWx0IiwiaTE4bkRhdGEiLCJkZWJ1ZyIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwic2V0UGFnZVN0YXRlIiwidG9nZ2xlQmxvY2tzIiwiSW5pdFBhZ2UiLCJzZXR1cFBhZ2UiLCJpbml0Iiwid2luZG93Iiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImlkIiwiY2hlY2tVc2VyQXV0aCIsInRoZW4iLCJjIiwiaSIsInNldEludGVydmFsIiwiZ191c2VyX2lkIiwiY2xlYXJJbnRlcnZhbCIsImZvckVhY2giLCJhdXRoQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhcnRpY2lwYXRlIiwicGFyYW1zIiwidXNlcmlkIiwicmVxdWVzdCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwiaXRlbSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImxvYWRUcmFuc2xhdGlvbnMiLCJmZXRjaCIsImpzb24iLCJ0cmFuc2xhdGUiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsImVsZW1zIiwibGVuZ3RoIiwiZWxlbSIsImtleSIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsInJlbW92ZUF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJ0cmFuc2xhdGVLZXkiLCJkaXNwbGF5VXNlclNwaW5zIiwic3BpbnMiLCJzcGluSXRlbSIsIm5vU3Bpbkl0ZW0iLCJzcGluIiwic3BpbkRhdGUiLCJEYXRlIiwiZGF0ZSIsImZvcm1hdHRlZERhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJzcGluTmFtZSIsIm5hbWUiLCJzcGluRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImVsZW1lbnQiLCJiYXNlQ3NzQ2xhc3MiLCJsYW5nIiwibGluayIsImV4dHJhT3B0aW9ucyIsImhlYWRlcnMiLCJ1bmF1dGhNZXMiLCJzZXRDaG9zZUNhcmRzIiwicGFydGljaXBhdGVCdG4iLCJjaG9zZUJ0biIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2FyZHMiLCJkaWZmaWN1bHRzIiwiY2FyZCIsInRhcmdldCIsImNvbnRhaW5zIiwic2V0UG9wdXAiLCJ3cmFwIiwicG9wdXBOYW1lIiwiYnRucyIsInBvcHVwIiwiY2xvc2VQb3B1cCIsInN0eWxlIiwib3ZlcmZsb3ciLCJidG4iLCJwYXJlbnROb2RlIiwiY2xvc2VCdG4iLCJzdGFydENvdW50ZG93biIsInNlbGVjdG9yIiwiZW5kRGF0ZSIsImVsZW1lbnRzIiwiZXJyb3IiLCJ0YXJnZXREYXRlIiwiZ2V0VGltZSIsInVwZGF0ZVRpbWVyIiwibm93IiwidGltZUxlZnQiLCJpbnRlcnZhbElkIiwic2V0VGltZXJWYWx1ZXMiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInZhbHVlcyIsInZhbHVlIiwiaW5kZXgiLCJ0ZXh0Q29udGVudCIsIm1vbml0b3JWaXNpYmlsaXR5IiwiYW5pbWF0aW9uIiwiZGVsYXkiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJzZXRUaW1lb3V0Iiwib2JzZXJ2ZSIsImhpZGVCbG9jayIsImhpZGVDbGFzcyIsInNob3dCbG9jayIsInNob3dDbGFzcyIsImRpc3BsYXkiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzaG93UmVzdWx0QmxvY2siLCJpdGVtcyIsInlvdSIsInRhcmdldEJsb2NrIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsInN0YXJ0Qm9udXNFYXN5Iiwic3RhcnRCb251c01lZGl1bSIsInN0YXJ0Qm9udXNIaWdodCIsInN0cmVha0JvbnVzRWFzeSIsInN0cmVha0JvbnVzTWVkaXVtIiwic3RyZWFrQm9udXNIaWdodCIsInN0cmVhayIsInNhdmVCZXRFYXN5Iiwic2F2ZUJldENhbGMiLCJzYXZlQmV0TWVkaXVtIiwic2F2ZUJldEhlaWdodCIsInN0YXJ0Qm9udXMiLCJzdHJlYWtCb251cyIsIm1lbnVCdG4iLCJtZW51IiwiZWFzeUJ0biIsIm1lZGl1bUJ0biIsImhpZ2h0QnRuIiwibm9TdGF0ZUJ0biIsImRhcmtCdG4iLCJjaGFuZ2VTdGF0ZVBhZ2UiLCJjbGFzc05hbWUiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsQ0FBQyxZQUFZO0VBQ1QsSUFBTUEsTUFBTSxHQUFHLHFDQUFxQztFQUVwRCxJQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUNoREMsVUFBVSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDN0NFLGFBQWEsR0FBR0gsUUFBUSxDQUFDSSxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7SUFDdkRDLFVBQVUsR0FBR0wsUUFBUSxDQUFDSSxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7SUFDdERFLFVBQVUsR0FBR04sUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQzdDTSxXQUFXLEdBQUdQLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUMvQ08sVUFBVSxHQUFHUixRQUFRLENBQUNJLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztJQUNyREssZUFBZSxHQUFHVCxR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RWIsVUFBVSxDQUFDO01BQ3ZGO0lBQ0osQ0FBQyxDQUFDO0VBQ047RUFHQXlLLGVBQWUsQ0FBQ0wsT0FBTyxFQUFFLE9BQU8sQ0FBQztFQUNqQ0ssZUFBZSxDQUFDSixTQUFTLEVBQUUsU0FBUyxDQUFDO0VBQ3JDSSxlQUFlLENBQUNILFFBQVEsRUFBRSxRQUFRLENBQUM7RUFFbkNKLE9BQU8sQ0FBQ3ZJLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO0lBQ25Dd0ksSUFBSSxDQUFDM0gsU0FBUyxDQUFDbUksTUFBTSxDQUFDLE1BQU0sQ0FBQztFQUNqQyxDQUFDLENBQUM7RUFFRkgsT0FBTyxDQUFDN0ksZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7SUFDbkMzQyxRQUFRLENBQUNtRCxJQUFJLENBQUNLLFNBQVMsQ0FBQ21JLE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDMUMsQ0FBQyxDQUFDOztFQUVGO0FBQ0osQ0FBQyxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfd2hlZWxfMjAyNSdcblxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbiAgICAgICAgcG9wdXBzV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBcIiksXG4gICAgICAgIHNob3dQb3B1cEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmluZm8taWNvblwiKSxcbiAgICAgICAgcG9wdXBJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wdXBfX2l0ZW1cIiksXG4gICAgICAgIGNob3NlQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNob3NlXCIpLFxuICAgICAgICByZXN1bHRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0XCIpLFxuICAgICAgICB1bmF1dGhNc2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKSxcbiAgICAgICAgcGFydGljaXBhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcnQtYnRuJyksXG4gICAgICAgIHJlZGlyZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tam9pbicpLFxuICAgICAgICBjaG9zZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNob3NlX19jYXJkLWJ0blwiKSxcbiAgICAgICAgY2hvc2VDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hvc2VfX2NhcmRcIilcblxuICAgIGNvbnN0IHVrTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1a0xlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cblxuICAgIGxldCBsb2NhbGUgPSAndWsnO1xuXG4gICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IHVzZXJTdGF0dXMgPSBmYWxzZSxcbiAgICAgICAgZGlmZmljdWx0ID0gXCJfZWFzeVwiXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCBkZWJ1ZyA9IHRydWUsXG4gICAgICAgIHRyYW5zbGF0ZVN0YXRlID0gZmFsc2U7XG4gICAgbGV0IHVzZXJJZDtcbiAgICB1c2VySWQgPSA3Nzc3Nzc3O1xuICAgIC8vIHVzZXJJZCA9IDEwMDMwMDI2OFxuXG5cbiAgICBjb25zdCBzZXRQYWdlU3RhdGUgPSAoKSA9PiB7XG4gICAgICAgaWYodXNlclN0YXR1cyl7XG4gICAgICAgICAgIHRvZ2dsZUJsb2NrcyhjaG9zZUJsb2NrLCBcImNob3NlSGlkZVwiLCByZXN1bHRCbG9jaywgXCJyZXN1bHRTaG93XCIsIGRpZmZpY3VsdCwgdXNlclN0YXR1cylcbiAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIGNvbnN0IEluaXRQYWdlID0gKCkgPT4ge1xuICAgICAgICBzZXRQYWdlU3RhdGUoKVxuICAgIH1cbiAgICBmdW5jdGlvbiBzZXR1cFBhZ2UoKSB7XG4gICAgICAgIEluaXRQYWdlKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKS50aGVuKHNldHVwUGFnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVja1VzZXJBdXRoKCkudGhlbihzZXR1cFBhZ2UpO1xuICAgICAgICAgICAgbGV0IGMgPSAwO1xuICAgICAgICAgICAgdmFyIGkgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGMgPCA1MCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoISF3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpLnRoZW4oc2V0dXBQYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaCgoYXV0aEJ0biwgaSkgPT4ge1xuICAgICAgICAgICAgYXV0aEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFydGljaXBhdGUoKSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7dXNlcmlkOiB1c2VySWR9O1xuICAgICAgICByZXF1ZXN0KCcvdXNlcicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgc2V0dXBQYWdlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChgJHthcGlVUkx9L3RyYW5zbGF0ZXMvJHtsb2NhbGV9YCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcblxuICAgICAgICAgICAgICAgIHZhciBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29yayFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYWxlID09PSAnZW4nKSB7XG4gICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdlbicpO1xuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZUtleShrZXkpIHtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXJTcGlucyhzcGlucykge1xuICAgICAgICBjb25zdCBzcGluSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGlucy1yb3cnKTtcbiAgICAgICAgY29uc3Qgbm9TcGluSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uby1zcGlucycpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNwaW5zKVxuXG4gICAgICAgIGlmICghc3BpbnMgfHwgc3BpbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBzcGluSXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICBub1NwaW5JdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnN0IHNwaW5zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwaW5zLXJvdycpO1xuICAgICAgICBzcGluSXRlbS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgYFxuICAgICAgIDxkaXYgY2xhc3M9XCJzcGlucy1yb3ctaGVhZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtZGF0ZVwiIGRhdGEtdHJhbnNsYXRlPVwibXlTcGluc0RhdGVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXByaXplXCIgZGF0YS10cmFuc2xhdGU9XCJteVNwaW5zUHJpemVcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcblxuICAgICAgICBzcGluSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIG5vU3Bpbkl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhub1NwaW5JdGVtKVxuXG4gICAgICAgIHNwaW5zLmZvckVhY2goc3BpbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcGluRGF0ZSA9IG5ldyBEYXRlKHNwaW4uZGF0ZSk7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gc3BpbkRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCd1ay1VQScpO1xuICAgICAgICAgICAgY29uc3Qgc3Bpbk5hbWUgPSB0cmFuc2xhdGVLZXkoc3Bpbi5uYW1lKSB8fCAnJztcblxuICAgICAgICAgICAgY29uc3Qgc3BpbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHNwaW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NwaW5zLXJvdy1pdGVtJyk7XG5cbiAgICAgICAgICAgIHNwaW5FbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudC1kYXRlXCI+JHtmb3JtYXR0ZWREYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudC1wcml6ZVwiPiR7c3Bpbk5hbWV9PC9zcGFuPlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICBzcGluSXRlbS5hcHBlbmRDaGlsZChzcGluRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50LCBiYXNlQ3NzQ2xhc3MpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsndWsnLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGJhc2VDc3NDbGFzcyArIGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChiYXNlQ3NzQ2xhc3MgKyBsb2NhbGUpO1xuICAgIH1cblxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfT9ub2NhY2hlPTFgKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMudXNlcmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENob3NlQ2FyZHMoY2hvc2VDYXJkcylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlcy5wb2ludHNQZXJEYXkgPSAzMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXMuc3BpbkFsbG93ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlcy5zcGluc1N0cmVhayA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnNwaW5zID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VXNlclNwaW5zKHJlcy5zcGlucyk7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hvc2VCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBkaXNwbGF5VXNlclNwaW5zKDApO1xuICAgICAgICAgICAgZm9yIChsZXQgcGFydGljaXBhdGVCdG4gb2YgcGFydGljaXBhdGVCdG5zKSB7XG4gICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgY2hvc2VCdG4gb2YgY2hvc2VCdG5zKSB7XG4gICAgICAgICAgICAgICAgY2hvc2VCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKVxuICAgICAgICAudGhlbihpbml0KTtcblxuICAgIGZ1bmN0aW9uIHNldENob3NlQ2FyZHMoY2FyZHMpe1xuICAgICAgICBjb25zdCBkaWZmaWN1bHRzID0gW1wiX2Vhc3lcIiwgXCJfbWVkaXVtXCIsIFwiX2hpZ2h0XCJdXG5cblxuICAgICAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT57XG4gICAgICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaW5mby1pY29uXCIpKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRpZmZpY3VsdHMuZm9yRWFjaChpdGVtID0+e1xuICAgICAgICAgICAgICAgICAgICBpZihjYXJkLmNsYXNzTGlzdC5jb250YWlucyhpdGVtKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVCbG9ja3MoY2hvc2VCbG9jaywgXCJjaG9zZUhpZGVcIiwgcmVzdWx0QmxvY2ssIFwicmVzdWx0U2hvd1wiLCBpdGVtLCB1c2VyU3RhdHVzKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRQb3B1cCAod3JhcCwgcG9wdXBOYW1lLCBidG5zLCBwb3B1cEl0ZW1zKXtcbiAgICAgICAgbGV0IHBvcHVwID0gd3JhcC5xdWVyeVNlbGVjdG9yKGAuJHtwb3B1cE5hbWV9YClcblxuICAgICAgICB3cmFwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgICAgICBlLnRhcmdldCA9PT0gd3JhcCA/IGNsb3NlUG9wdXAoKSA6IG51bGxcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBjbG9zZVBvcHVwID0gKCkgPT57XG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX2FjdGl2ZVwiKVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgICAgICB3cmFwLmNsYXNzTGlzdC5hZGQoXCJfb3BhY2l0eVwiKVxuICAgICAgICB9XG5cbiAgICAgICAgYnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgICBpZihidG4ucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhwb3B1cE5hbWUpKXtcbiAgICAgICAgICAgICAgICBidG4ucGFyZW50Tm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgICAgICAgICBpZihlLnRhcmdldCA9PT0gYnRuKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgICAgICAgICBwb3B1cEl0ZW1zLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIilcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9hY3RpdmVcIilcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgd3JhcC5jbGFzc0xpc3QucmVtb3ZlKFwiX29wYWNpdHlcIilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGxldCBjbG9zZUJ0biA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Nsb3NlXCIpXG4gICAgICAgICAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VQb3B1cCgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzZXRQb3B1cChwb3B1cHNXcmFwLCBcIl9lYXN5XCIsIHNob3dQb3B1cEJ0bnMsIHBvcHVwSXRlbXMpXG4gICAgc2V0UG9wdXAocG9wdXBzV3JhcCwgXCJfbWVkaXVtXCIsIHNob3dQb3B1cEJ0bnMsIHBvcHVwSXRlbXMpXG4gICAgc2V0UG9wdXAocG9wdXBzV3JhcCwgXCJfaGlnaHRcIiwgc2hvd1BvcHVwQnRucywgcG9wdXBJdGVtcylcbiAgICBzZXRQb3B1cChwb3B1cHNXcmFwLCBcIl9ub3RpZnlcIiwgc2hvd1BvcHVwQnRucywgcG9wdXBJdGVtcylcblxuICAgIGZ1bmN0aW9uIHN0YXJ0Q291bnRkb3duKHNlbGVjdG9yLCBlbmREYXRlKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtzZWxlY3Rvcn0gLndlbGNvbWVfX3RpbWVyLWl0ZW0tbnVtYCk7XG4gICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggIT09IDQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgc2VsZWN0b3IhJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YXJnZXREYXRlID0gbmV3IERhdGUoZW5kRGF0ZSkuZ2V0VGltZSgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWVyKCkge1xuICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCB0aW1lTGVmdCA9IHRhcmdldERhdGUgLSBub3c7XG5cbiAgICAgICAgICAgIGlmICh0aW1lTGVmdCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lclZhbHVlcyhbMCwgMCwgMCwgMF0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IodGltZUxlZnQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHRpbWVMZWZ0ICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVyVmFsdWVzKFtkYXlzLCBob3VycywgbWludXRlcywgc2Vjb25kc10pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0VGltZXJWYWx1ZXModmFsdWVzKSB7XG4gICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaW5kZXhdLnRleHRDb250ZW50ID0gdmFsdWUgPCAxMCA/IGAwJHt2YWx1ZX1gIDogdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZVRpbWVyKCk7XG4gICAgICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh1cGRhdGVUaW1lciwgMTAwMCk7XG4gICAgfVxuXG4gICAgc3RhcnRDb3VudGRvd24oJy53ZWxjb21lX190aW1lcicsICcyMDI1LTAxLTMxVDIzOjU5OjU5Jyk7XG5cbiAgICBmdW5jdGlvbiBtb25pdG9yVmlzaWJpbGl0eShzZWxlY3RvciwgYW5pbWF0aW9uLCBkZWxheSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFbGVtZW50IG5vdCBmb3VuZCEnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYW5pbWF0aW9uKVxuICAgICAgICAgICAgICAgICAgICB9LCBkZWxheSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICB9XG5cbiAgICBtb25pdG9yVmlzaWJpbGl0eSgnLm5vdGlmeV9fcGVycycsIFwic2hvd1pldXNcIiwgMCk7XG4gICAgbW9uaXRvclZpc2liaWxpdHkoJy5ub3RpZnlfX3BlcnMtYnVibGUnLCBcInNob3daZXVzQnVibGVcIiwgMTIwMCk7XG4gICAgbW9uaXRvclZpc2liaWxpdHkoJy5jaG9zZV9fcGVycy1idWJsZScsIFwic2hvd1pldXNCdWJsZVwiLCAwKTtcbiAgICBtb25pdG9yVmlzaWJpbGl0eSgnLmNob3NlX19jYXJkLl9lYXN5JywgXCJzaG93Q2FyZFwiLCA0MDApO1xuICAgIG1vbml0b3JWaXNpYmlsaXR5KCcuY2hvc2VfX2NhcmQuX21lZGl1bScsIFwic2hvd0NhcmRcIiwgODAwKTtcbiAgICBtb25pdG9yVmlzaWJpbGl0eSgnLmNob3NlX19jYXJkLl9oaWdodCcsIFwic2hvd0NhcmRcIiwgMTIwMCk7XG5cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUJsb2NrcyAoaGlkZUJsb2NrLCBoaWRlQ2xhc3MsIHNob3dCbG9jaywgc2hvd0NsYXNzLCBzdGF0ZSwgdXNlclN0YXR1cyl7XG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoc3RhdGUpXG4gICAgICAgIGhpZGVCbG9jay5jbGFzc0xpc3QuYWRkKGhpZGVDbGFzcylcbiAgICAgICAgaWYoIXVzZXJTdGF0dXMpe1xuICAgICAgICAgICAgaGlkZUJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT57XG4gICAgICAgICAgICAgICAgc2hvd0Jsb2NrLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAgICAgICAgIHNob3dCbG9jay5zdHlsZS5oZWlnaHQgPSBoaWRlQmxvY2suY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICAgICAgaGlkZUJsb2NrLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgc2hvd1Jlc3VsdEJsb2NrKHNob3dCbG9jaywgc2hvd0NsYXNzKVxuICAgICAgICAgICAgICAgIH0sIDUwKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzaG93QmxvY2suc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICBzaG93QmxvY2suc3R5bGUuaGVpZ2h0ID0gaGlkZUJsb2NrLmNsaWVudEhlaWdodFxuICAgICAgICAgICAgaGlkZUJsb2NrLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgICAgICBzaG93UmVzdWx0QmxvY2soc2hvd0Jsb2NrLCBzaG93Q2xhc3MpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dSZXN1bHRCbG9jayhzaG93QmxvY2ssIHNob3dDbGFzcyl7XG4gICAgICAgIHNob3dCbG9jay5jbGFzc0xpc3QuYWRkKHNob3dDbGFzcylcbiAgICAgICAgc2hvd0Jsb2NrLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICBsZXQgaXRlbXMgPSBzaG93QmxvY2sucXVlcnlTZWxlY3RvckFsbChcIi5yZXN1bHRfX2JldHMtaXRlbVwiKVxuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaSkgPT57XG4gICAgICAgICAgICAgICAgaWYoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJ5b3VcIikpe1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHlvdSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRfX2JldHMteW91XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRfX2J0blwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgeW91LmNsYXNzTGlzdC5hZGQoJ3Nob3dZb3UnKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcInNob3dCdG5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMClcbiAgICAgICAgICAgICAgICAgICAgfSwgMjcwMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICB9LCAyNTAgKiBpdGVtcy5sZW5ndGggLSBpICogMjUwKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VsY29tZV9fc2Nyb2xsJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNob3NlJyk7XG4gICAgICAgIHRhcmdldEJsb2NrLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgIH0pO1xuXG5cbiAgICBsZXQgc3RhcnRCb251c0Vhc3kgPSAzMDAsXG4gICAgICAgIHN0YXJ0Qm9udXNNZWRpdW0gPSA3MDAsXG4gICAgICAgIHN0YXJ0Qm9udXNIaWdodCA9IDE1MDAsXG4gICAgICAgIHN0cmVha0JvbnVzRWFzeSA9IDIwMCxcbiAgICAgICAgc3RyZWFrQm9udXNNZWRpdW0gPSAyMDAsXG4gICAgICAgIHN0cmVha0JvbnVzSGlnaHQgPSA1MDAsXG4gICAgICAgIHN0cmVhayA9IDVcblxuICAgIGNvbnN0IHNhdmVCZXRFYXN5ID0gc2F2ZUJldENhbGMoc3RhcnRCb251c0Vhc3ksIHN0cmVhaywgc3RyZWFrQm9udXNFYXN5LCBmYWxzZSksXG4gICAgICAgICAgc2F2ZUJldE1lZGl1bSA9IHNhdmVCZXRDYWxjKHN0YXJ0Qm9udXNNZWRpdW0sIHN0cmVhaywgc3RyZWFrQm9udXNNZWRpdW0sIGZhbHNlKSxcbiAgICAgICAgICBzYXZlQmV0SGVpZ2h0ID0gc2F2ZUJldENhbGMoc3RhcnRCb251c0hpZ2h0LCBzdHJlYWssIHN0cmVha0JvbnVzSGlnaHQsIHRydWUpXG5cbiAgICBmdW5jdGlvbiBzYXZlQmV0Q2FsYyhzdGFydEJvbnVzLCBzdHJlYWssIHN0cmVha0JvbnVzLCBkaWZmaWN1bHQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDQ7IGkgPD0gc3RyZWFrOyBpKyspIHtcbiAgICAgICAgICAgIGlmKCFkaWZmaWN1bHQpe1xuICAgICAgICAgICAgICAgIGkgPT09IDEwID8gc3RhcnRCb251cyArPSAxMDAwIDogc3RhcnRCb251cyArPSBzdHJlYWtCb251c1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgaSA+PSA5ID8gc3RhcnRCb251cyArPSAxMDAwIDogc3RhcnRCb251cyArPSBzdHJlYWtCb251c1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0YXJ0Qm9udXM7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coc2F2ZUJldEVhc3ksIHNhdmVCZXRNZWRpdW0sIHNhdmVCZXRIZWlnaHQpXG5cblxuICAgIC8vZm9yIHRlc3RcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKSxcbiAgICAgICAgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0XCIpLFxuICAgICAgICBlYXN5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lYXN5XCIpLFxuICAgICAgICBtZWRpdW1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lZGl1bVwiKSxcbiAgICAgICAgaGlnaHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpZ2h0XCIpLFxuICAgICAgICBub1N0YXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3Qtam9pblwiKSxcbiAgICAgICAgZGFya0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFya1wiKVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlU3RhdGVQYWdlIChidG4sIHN0YXRlKXtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTmFtZSA9IFwiZmF2LXBhZ2VcIlxuICAgICAgICAgICAgaWYoc3RhdGUpe1xuICAgICAgICAgICAgICAgIHRvZ2dsZUJsb2NrcyhjaG9zZUJsb2NrLCBcImNob3NlSGlkZVwiLCByZXN1bHRCbG9jaywgXCJyZXN1bHRTaG93XCIsIHN0YXRlLCB1c2VyU3RhdHVzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgY2hhbmdlU3RhdGVQYWdlKGVhc3lCdG4sIFwiX2Vhc3lcIilcbiAgICBjaGFuZ2VTdGF0ZVBhZ2UobWVkaXVtQnRuLCBcIl9tZWRpdW1cIilcbiAgICBjaGFuZ2VTdGF0ZVBhZ2UoaGlnaHRCdG4sIFwiX2hpZ2h0XCIpXG5cbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKVxuICAgIH0pXG5cbiAgICBkYXJrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiKVxuICAgIH0pXG5cbiAgICAvLyBjaGFuZ2VTdGF0ZVBhZ2Uobm9TdGF0ZUJ0biwgZmFsc2UpXG59KSgpOyJdfQ==
