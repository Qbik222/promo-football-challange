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
  var apiURL = 'https://fav-prom.com/api_football_challange';
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
  var difficults = ["_easy", "_medium", "_hight"];
  var locale = sessionStorage.getItem("locale") ? sessionStorage.getItem("locale") : "uk";
  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var userStatus = false,
    difficult = "_easy";
  var i18nData = {};
  var debug = true,
    translateState = true;
  var userId;
  userId = Number(sessionStorage.getItem("userId"));
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
    cards.forEach(function (card) {
      card.addEventListener("click", function (e) {
        if (e.target.classList.contains("info-icon")) {
          return;
        }
        difficults.forEach(function (item) {
          if (card.classList.contains(item)) {
            difficult = item;
            toggleBlocks(choseBlock, "choseHide", resultBlock, "resultShow", difficult, userStatus);
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
    mainPage.classList.add(state, locale);
    hideBlock.classList.add(hideClass);
    var drops = showBlock.querySelectorAll(".drop");
    drops.forEach(function (item) {
      difficults.forEach(function (state) {
        item.classList.remove(state);
      });
    });
    drops[0].classList.add(state);
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
            var btns = document.querySelectorAll(".result__btn");
            you.classList.add('showYou');
            setTimeout(function () {
              btns.forEach(function (btn) {
                btn.classList.add("showBtn");
              });
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

  // console.log(saveBetEasy, saveBetMedium, saveBetHeight)

  //for test
  var menuBtn = document.querySelector(".menu-btn"),
    menu = document.querySelector(".menu-test"),
    easyBtn = document.querySelector(".easy"),
    mediumBtn = document.querySelector(".medium"),
    hightBtn = document.querySelector(".hight"),
    lngBtn = document.querySelector(".en"),
    darkBtn = document.querySelector(".dark"),
    authBtn = document.querySelector(".auth");
  function changeStatePage(btn, state) {
    btn.addEventListener("click", function () {
      mainPage.className = "fav-page";
      if (state) {
        toggleBlocks(choseBlock, "choseHide", resultBlock, "resultShow", state, userStatus);
      }
    });
  }
  lngBtn.addEventListener("click", function () {
    if (locale === "uk") {
      sessionStorage.setItem("locale", "en");
      window.location.reload();
      return;
    }
    if (locale === "en") {
      sessionStorage.setItem("locale", "uk");
      window.location.reload();
      return;
    }
  });
  authBtn.addEventListener("click", function () {
    userId ? sessionStorage.removeItem("userId") : sessionStorage.setItem("userId", '100300268');
    window.location.reload();
  });
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwb3B1cHNXcmFwIiwic2hvd1BvcHVwQnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwb3B1cEl0ZW1zIiwiY2hvc2VCbG9jayIsInJlc3VsdEJsb2NrIiwidW5hdXRoTXNncyIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImNob3NlQnRucyIsImNob3NlQ2FyZHMiLCJ1a0xlbmciLCJlbkxlbmciLCJkaWZmaWN1bHRzIiwibG9jYWxlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlclN0YXR1cyIsImRpZmZpY3VsdCIsImkxOG5EYXRhIiwiZGVidWciLCJ0cmFuc2xhdGVTdGF0ZSIsInVzZXJJZCIsIk51bWJlciIsInNldFBhZ2VTdGF0ZSIsInRvZ2dsZUJsb2NrcyIsIkluaXRQYWdlIiwic2V0dXBQYWdlIiwiaW5pdCIsIndpbmRvdyIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImNoZWNrVXNlckF1dGgiLCJ0aGVuIiwiYyIsImkiLCJzZXRJbnRlcnZhbCIsImdfdXNlcl9pZCIsImNsZWFySW50ZXJ2YWwiLCJmb3JFYWNoIiwiYXV0aEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJwYXJ0aWNpcGF0ZSIsInBhcmFtcyIsInVzZXJpZCIsInJlcXVlc3QiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsIml0ZW0iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJsb2FkVHJhbnNsYXRpb25zIiwiZmV0Y2giLCJqc29uIiwidHJhbnNsYXRlIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJlbGVtcyIsImxlbmd0aCIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwidHJhbnNsYXRlS2V5IiwiZGlzcGxheVVzZXJTcGlucyIsInNwaW5zIiwic3Bpbkl0ZW0iLCJub1NwaW5JdGVtIiwic3BpbiIsInNwaW5EYXRlIiwiRGF0ZSIsImRhdGUiLCJmb3JtYXR0ZWREYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwic3Bpbk5hbWUiLCJuYW1lIiwic3BpbkVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJlbGVtZW50IiwiYmFzZUNzc0NsYXNzIiwibGFuZyIsImxpbmsiLCJleHRyYU9wdGlvbnMiLCJoZWFkZXJzIiwidW5hdXRoTWVzIiwic2V0Q2hvc2VDYXJkcyIsInBhcnRpY2lwYXRlQnRuIiwiY2hvc2VCdG4iLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhcmRzIiwiY2FyZCIsInRhcmdldCIsImNvbnRhaW5zIiwic2V0UG9wdXAiLCJ3cmFwIiwicG9wdXBOYW1lIiwiYnRucyIsInBvcHVwIiwiY2xvc2VQb3B1cCIsInN0eWxlIiwib3ZlcmZsb3ciLCJidG4iLCJwYXJlbnROb2RlIiwiY2xvc2VCdG4iLCJzdGFydENvdW50ZG93biIsInNlbGVjdG9yIiwiZW5kRGF0ZSIsImVsZW1lbnRzIiwiZXJyb3IiLCJ0YXJnZXREYXRlIiwiZ2V0VGltZSIsInVwZGF0ZVRpbWVyIiwibm93IiwidGltZUxlZnQiLCJpbnRlcnZhbElkIiwic2V0VGltZXJWYWx1ZXMiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInZhbHVlcyIsInZhbHVlIiwiaW5kZXgiLCJ0ZXh0Q29udGVudCIsIm1vbml0b3JWaXNpYmlsaXR5IiwiYW5pbWF0aW9uIiwiZGVsYXkiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJzZXRUaW1lb3V0Iiwib2JzZXJ2ZSIsImhpZGVCbG9jayIsImhpZGVDbGFzcyIsInNob3dCbG9jayIsInNob3dDbGFzcyIsImRyb3BzIiwiZGlzcGxheSIsImhlaWdodCIsImNsaWVudEhlaWdodCIsInNob3dSZXN1bHRCbG9jayIsIml0ZW1zIiwieW91IiwidGFyZ2V0QmxvY2siLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwic3RhcnRCb251c0Vhc3kiLCJzdGFydEJvbnVzTWVkaXVtIiwic3RhcnRCb251c0hpZ2h0Iiwic3RyZWFrQm9udXNFYXN5Iiwic3RyZWFrQm9udXNNZWRpdW0iLCJzdHJlYWtCb251c0hpZ2h0Iiwic3RyZWFrIiwic2F2ZUJldEVhc3kiLCJzYXZlQmV0Q2FsYyIsInNhdmVCZXRNZWRpdW0iLCJzYXZlQmV0SGVpZ2h0Iiwic3RhcnRCb251cyIsInN0cmVha0JvbnVzIiwibWVudUJ0biIsIm1lbnUiLCJlYXN5QnRuIiwibWVkaXVtQnRuIiwiaGlnaHRCdG4iLCJsbmdCdG4iLCJkYXJrQnRuIiwiY2hhbmdlU3RhdGVQYWdlIiwiY2xhc3NOYW1lIiwic2V0SXRlbSIsImxvY2F0aW9uIiwicmVsb2FkIiwicmVtb3ZlSXRlbSIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxDQUFDLFlBQVk7RUFDVCxJQUFNQSxNQUFNLEdBQUcsNkNBQTZDO0VBRTVELElBQU1DLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQ2hEQyxVQUFVLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUM3Q0UsYUFBYSxHQUFHSCxRQUFRLENBQUNJLGdCQUFnQixDQUFDLFlBQVksQ0FBQztJQUN2REMsVUFBVSxHQUFHTCxRQUFRLENBQUNJLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztJQUN0REUsVUFBVSxHQUFHTixRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDN0NNLFdBQVcsR0FBR1AsUUFBUSxDQUFDQyxhQUFhLENB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QU0sQ0FBQ2lLLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFO01BQ3hCO0lBQ0o7RUFDSixDQUFDLENBQUM7RUFHRm5KLE9BQU8sQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7SUFDbkN2QixNQUFNLEdBQUdQLGNBQWMsQ0FBQ2lMLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBR2pMLGNBQWMsQ0FBQzhLLE9BQU8sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDO0lBQzVGaEssTUFBTSxDQUFDaUssUUFBUSxDQUFDQyxNQUFNLEVBQUU7RUFDNUIsQ0FBQyxDQUFDO0VBRUZKLGVBQWUsQ0FBQ0wsT0FBTyxFQUFFLE9BQU8sQ0FBQztFQUNqQ0ssZUFBZSxDQUFDSixTQUFTLEVBQUUsU0FBUyxDQUFDO0VBQ3JDSSxlQUFlLENBQUNILFFBQVEsRUFBRSxRQUFRLENBQUM7RUFFbkNKLE9BQU8sQ0FBQ3ZJLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO0lBQ25Dd0ksSUFBSSxDQUFDM0gsU0FBUyxDQUFDdUksTUFBTSxDQUFDLE1BQU0sQ0FBQztFQUNqQyxDQUFDLENBQUM7RUFFRlAsT0FBTyxDQUFDN0ksZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7SUFDbkMvQyxRQUFRLENBQUN1RCxJQUFJLENBQUNLLFNBQVMsQ0FBQ3VJLE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDMUMsQ0FBQyxDQUFDOztFQUVGO0FBQ0osQ0FBQyxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfZm9vdGJhbGxfY2hhbGxhbmdlJ1xuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICBwb3B1cHNXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKSxcbiAgICAgICAgc2hvd1BvcHVwQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5mby1pY29uXCIpLFxuICAgICAgICBwb3B1cEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9faXRlbVwiKSxcbiAgICAgICAgY2hvc2VCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hvc2VcIiksXG4gICAgICAgIHJlc3VsdEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRcIiksXG4gICAgICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFydC1idG4nKSxcbiAgICAgICAgcmVkaXJlY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1qb2luJyksXG4gICAgICAgIGNob3NlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hvc2VfX2NhcmQtYnRuXCIpLFxuICAgICAgICBjaG9zZUNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaG9zZV9fY2FyZFwiKVxuXG4gICAgY29uc3QgdWtMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VrTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGNvbnN0IGRpZmZpY3VsdHMgPSBbXCJfZWFzeVwiLCBcIl9tZWRpdW1cIiwgXCJfaGlnaHRcIl1cblxuICAgIGxldCBsb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpID8gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSA6IFwidWtcIlxuICAgIFxuXG4gICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IHVzZXJTdGF0dXMgPSBmYWxzZSxcbiAgICAgICAgZGlmZmljdWx0ID0gXCJfZWFzeVwiXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCBkZWJ1ZyA9IHRydWUsXG4gICAgICAgIHRyYW5zbGF0ZVN0YXRlID0gdHJ1ZTtcbiAgICBsZXQgdXNlcklkO1xuICAgIHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKTtcbiAgICAvLyB1c2VySWQgPSAxMDAzMDAyNjhcblxuXG4gICAgY29uc3Qgc2V0UGFnZVN0YXRlID0gKCkgPT4ge1xuICAgICAgIGlmKHVzZXJTdGF0dXMpe1xuICAgICAgICAgICB0b2dnbGVCbG9ja3MoY2hvc2VCbG9jaywgXCJjaG9zZUhpZGVcIiwgcmVzdWx0QmxvY2ssIFwicmVzdWx0U2hvd1wiLCBkaWZmaWN1bHQsIHVzZXJTdGF0dXMpXG4gICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBjb25zdCBJbml0UGFnZSA9ICgpID0+IHtcbiAgICAgICAgc2V0UGFnZVN0YXRlKClcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0dXBQYWdlKCkge1xuICAgICAgICBJbml0UGFnZSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBpZiAod2luZG93LnN0b3JlKSB7XG4gICAgICAgICAgICB2YXIgc3RhdGUgPSB3aW5kb3cuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICBjaGVja1VzZXJBdXRoKCkudGhlbihzZXR1cFBhZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpLnRoZW4oc2V0dXBQYWdlKTtcbiAgICAgICAgICAgIGxldCBjID0gMDtcbiAgICAgICAgICAgIHZhciBpID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChjIDwgNTApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhd2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKS50aGVuKHNldHVwUGFnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goKGF1dGhCdG4sIGkpID0+IHtcbiAgICAgICAgICAgIGF1dGhCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyYW1zID0ge3VzZXJpZDogdXNlcklkfTtcbiAgICAgICAgcmVxdWVzdCgnL3VzZXInLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgIHNldHVwUGFnZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2goYCR7YXBpVVJMfS90cmFuc2xhdGVzLyR7bG9jYWxlfWApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmshXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2FsZSA9PT0gJ2VuJykge1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnZW4nKTtcbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVLZXkoa2V5KSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyU3BpbnMoc3BpbnMpIHtcbiAgICAgICAgY29uc3Qgc3Bpbkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BpbnMtcm93Jyk7XG4gICAgICAgIGNvbnN0IG5vU3Bpbkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm8tc3BpbnMnKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzcGlucylcblxuICAgICAgICBpZiAoIXNwaW5zIHx8IHNwaW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgc3Bpbkl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgbm9TcGluSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zdCBzcGluc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGlucy1yb3cnKTtcbiAgICAgICAgc3Bpbkl0ZW0uaW5uZXJIVE1MID1cbiAgICAgICAgICAgIGBcbiAgICAgICA8ZGl2IGNsYXNzPVwic3BpbnMtcm93LWhlYWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWRhdGVcIiBkYXRhLXRyYW5zbGF0ZT1cIm15U3BpbnNEYXRlXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1wcml6ZVwiIGRhdGEtdHJhbnNsYXRlPVwibXlTcGluc1ByaXplXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgXG5cbiAgICAgICAgc3Bpbkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBub1NwaW5JdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobm9TcGluSXRlbSlcblxuICAgICAgICBzcGlucy5mb3JFYWNoKHNwaW4gPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3BpbkRhdGUgPSBuZXcgRGF0ZShzcGluLmRhdGUpO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IHNwaW5EYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygndWstVUEnKTtcbiAgICAgICAgICAgIGNvbnN0IHNwaW5OYW1lID0gdHJhbnNsYXRlS2V5KHNwaW4ubmFtZSkgfHwgJyc7XG5cbiAgICAgICAgICAgIGNvbnN0IHNwaW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBzcGluRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzcGlucy1yb3ctaXRlbScpO1xuXG4gICAgICAgICAgICBzcGluRWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbnRlbnQtZGF0ZVwiPiR7Zm9ybWF0dGVkRGF0ZX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbnRlbnQtcHJpemVcIj4ke3NwaW5OYW1lfTwvc3Bhbj5cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgc3Bpbkl0ZW0uYXBwZW5kQ2hpbGQoc3BpbkVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCwgYmFzZUNzc0NsYXNzKSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ3VrJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShiYXNlQ3NzQ2xhc3MgKyBsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYmFzZUNzc0NsYXNzICsgbG9jYWxlKTtcbiAgICB9XG5cblxuICAgIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1VzZXJBdXRoKCkge1xuICAgICAgICBpZiAodXNlcklkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnVzZXJpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLnVzZXJpZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDaG9zZUNhcmRzKGNob3NlQ2FyZHMpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXMucG9pbnRzUGVyRGF5ID0gMzA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVzLnNwaW5BbGxvd2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXMuc3BpbnNTdHJlYWsgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zcGlucyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVVzZXJTcGlucyhyZXMuc3BpbnMpO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNob3NlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZGlzcGxheVVzZXJTcGlucygwKTtcbiAgICAgICAgICAgIGZvciAobGV0IHBhcnRpY2lwYXRlQnRuIG9mIHBhcnRpY2lwYXRlQnRucykge1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGNob3NlQnRuIG9mIGNob3NlQnRucykge1xuICAgICAgICAgICAgICAgIGNob3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkVHJhbnNsYXRpb25zKClcbiAgICAgICAgLnRoZW4oaW5pdCk7XG5cblxuICAgIGZ1bmN0aW9uIHNldENob3NlQ2FyZHMoY2FyZHMpe1xuXG5cbiAgICAgICAgY2FyZHMuZm9yRWFjaChjYXJkID0+e1xuICAgICAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImluZm8taWNvblwiKSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkaWZmaWN1bHRzLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgICAgICAgICAgaWYoY2FyZC5jbGFzc0xpc3QuY29udGFpbnMoaXRlbSkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlmZmljdWx0ID0gaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQmxvY2tzKGNob3NlQmxvY2ssIFwiY2hvc2VIaWRlXCIsIHJlc3VsdEJsb2NrLCBcInJlc3VsdFNob3dcIiwgZGlmZmljdWx0LCB1c2VyU3RhdHVzKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRQb3B1cCAod3JhcCwgcG9wdXBOYW1lLCBidG5zLCBwb3B1cEl0ZW1zKXtcbiAgICAgICAgbGV0IHBvcHVwID0gd3JhcC5xdWVyeVNlbGVjdG9yKGAuJHtwb3B1cE5hbWV9YClcblxuICAgICAgICB3cmFwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgICAgICBlLnRhcmdldCA9PT0gd3JhcCA/IGNsb3NlUG9wdXAoKSA6IG51bGxcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBjbG9zZVBvcHVwID0gKCkgPT57XG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX2FjdGl2ZVwiKVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgICAgICB3cmFwLmNsYXNzTGlzdC5hZGQoXCJfb3BhY2l0eVwiKVxuICAgICAgICB9XG5cbiAgICAgICAgYnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgICBpZihidG4ucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhwb3B1cE5hbWUpKXtcbiAgICAgICAgICAgICAgICBidG4ucGFyZW50Tm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgICAgICAgICBpZihlLnRhcmdldCA9PT0gYnRuKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgICAgICAgICBwb3B1cEl0ZW1zLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIilcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9hY3RpdmVcIilcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgd3JhcC5jbGFzc0xpc3QucmVtb3ZlKFwiX29wYWNpdHlcIilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGxldCBjbG9zZUJ0biA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Nsb3NlXCIpXG4gICAgICAgICAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VQb3B1cCgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzZXRQb3B1cChwb3B1cHNXcmFwLCBcIl9lYXN5XCIsIHNob3dQb3B1cEJ0bnMsIHBvcHVwSXRlbXMpXG4gICAgc2V0UG9wdXAocG9wdXBzV3JhcCwgXCJfbWVkaXVtXCIsIHNob3dQb3B1cEJ0bnMsIHBvcHVwSXRlbXMpXG4gICAgc2V0UG9wdXAocG9wdXBzV3JhcCwgXCJfaGlnaHRcIiwgc2hvd1BvcHVwQnRucywgcG9wdXBJdGVtcylcbiAgICBzZXRQb3B1cChwb3B1cHNXcmFwLCBcIl9ub3RpZnlcIiwgc2hvd1BvcHVwQnRucywgcG9wdXBJdGVtcylcblxuICAgIGZ1bmN0aW9uIHN0YXJ0Q291bnRkb3duKHNlbGVjdG9yLCBlbmREYXRlKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtzZWxlY3Rvcn0gLndlbGNvbWVfX3RpbWVyLWl0ZW0tbnVtYCk7XG4gICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggIT09IDQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgc2VsZWN0b3IhJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YXJnZXREYXRlID0gbmV3IERhdGUoZW5kRGF0ZSkuZ2V0VGltZSgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWVyKCkge1xuICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCB0aW1lTGVmdCA9IHRhcmdldERhdGUgLSBub3c7XG5cbiAgICAgICAgICAgIGlmICh0aW1lTGVmdCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lclZhbHVlcyhbMCwgMCwgMCwgMF0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IodGltZUxlZnQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHRpbWVMZWZ0ICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVyVmFsdWVzKFtkYXlzLCBob3VycywgbWludXRlcywgc2Vjb25kc10pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0VGltZXJWYWx1ZXModmFsdWVzKSB7XG4gICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaW5kZXhdLnRleHRDb250ZW50ID0gdmFsdWUgPCAxMCA/IGAwJHt2YWx1ZX1gIDogdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZVRpbWVyKCk7XG4gICAgICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh1cGRhdGVUaW1lciwgMTAwMCk7XG4gICAgfVxuXG4gICAgc3RhcnRDb3VudGRvd24oJy53ZWxjb21lX190aW1lcicsICcyMDI1LTAxLTMxVDIzOjU5OjU5Jyk7XG5cbiAgICBmdW5jdGlvbiBtb25pdG9yVmlzaWJpbGl0eShzZWxlY3RvciwgYW5pbWF0aW9uLCBkZWxheSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFbGVtZW50IG5vdCBmb3VuZCEnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYW5pbWF0aW9uKVxuICAgICAgICAgICAgICAgICAgICB9LCBkZWxheSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICB9XG5cbiAgICBtb25pdG9yVmlzaWJpbGl0eSgnLm5vdGlmeV9fcGVycycsIFwic2hvd1pldXNcIiwgMCk7XG4gICAgbW9uaXRvclZpc2liaWxpdHkoJy5ub3RpZnlfX3BlcnMtYnVibGUnLCBcInNob3daZXVzQnVibGVcIiwgMTIwMCk7XG4gICAgbW9uaXRvclZpc2liaWxpdHkoJy5jaG9zZV9fcGVycy1idWJsZScsIFwic2hvd1pldXNCdWJsZVwiLCAwKTtcbiAgICBtb25pdG9yVmlzaWJpbGl0eSgnLmNob3NlX19jYXJkLl9lYXN5JywgXCJzaG93Q2FyZFwiLCA0MDApO1xuICAgIG1vbml0b3JWaXNpYmlsaXR5KCcuY2hvc2VfX2NhcmQuX21lZGl1bScsIFwic2hvd0NhcmRcIiwgODAwKTtcbiAgICBtb25pdG9yVmlzaWJpbGl0eSgnLmNob3NlX19jYXJkLl9oaWdodCcsIFwic2hvd0NhcmRcIiwgMTIwMCk7XG5cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUJsb2NrcyAoaGlkZUJsb2NrLCBoaWRlQ2xhc3MsIHNob3dCbG9jaywgc2hvd0NsYXNzLCBzdGF0ZSwgdXNlclN0YXR1cyl7XG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoc3RhdGUsIGxvY2FsZSlcbiAgICAgICAgaGlkZUJsb2NrLmNsYXNzTGlzdC5hZGQoaGlkZUNsYXNzKVxuICAgICAgICBsZXQgZHJvcHMgPSBzaG93QmxvY2sucXVlcnlTZWxlY3RvckFsbChcIi5kcm9wXCIpXG4gICAgICAgIGRyb3BzLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgIGRpZmZpY3VsdHMuZm9yRWFjaChzdGF0ZSA9PntcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoc3RhdGUpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBkcm9wc1swXS5jbGFzc0xpc3QuYWRkKHN0YXRlKVxuICAgICAgICBpZighdXNlclN0YXR1cyl7XG4gICAgICAgICAgICBoaWRlQmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PntcblxuICAgICAgICAgICAgICAgIHNob3dCbG9jay5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgICAgICAgICBzaG93QmxvY2suc3R5bGUuaGVpZ2h0ID0gaGlkZUJsb2NrLmNsaWVudEhlaWdodFxuICAgICAgICAgICAgICAgIGhpZGVCbG9jay5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHNob3dSZXN1bHRCbG9jayhzaG93QmxvY2ssIHNob3dDbGFzcylcbiAgICAgICAgICAgICAgICB9LCA1MClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2hvd0Jsb2NrLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAgICAgc2hvd0Jsb2NrLnN0eWxlLmhlaWdodCA9IGhpZGVCbG9jay5jbGllbnRIZWlnaHRcbiAgICAgICAgICAgIGhpZGVCbG9jay5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgc2hvd1Jlc3VsdEJsb2NrKHNob3dCbG9jaywgc2hvd0NsYXNzKVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93UmVzdWx0QmxvY2soc2hvd0Jsb2NrLCBzaG93Q2xhc3Mpe1xuICAgICAgICBzaG93QmxvY2suY2xhc3NMaXN0LmFkZChzaG93Q2xhc3MpXG4gICAgICAgIHNob3dCbG9jay5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIlxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgbGV0IGl0ZW1zID0gc2hvd0Jsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVzdWx0X19iZXRzLWl0ZW1cIilcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+e1xuICAgICAgICAgICAgICAgIGlmKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwieW91XCIpKXtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB5b3UgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0X19iZXRzLXlvdVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlc3VsdF9fYnRuXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB5b3UuY2xhc3NMaXN0LmFkZCgnc2hvd1lvdScpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bnMuZm9yRWFjaChidG4gPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwic2hvd0J0blwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDApXG4gICAgICAgICAgICAgICAgICAgIH0sIDI3MDApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcInNob3dJdGVtXCIpXG4gICAgICAgICAgICAgICAgfSwgMjUwICogaXRlbXMubGVuZ3RoIC0gaSAqIDI1MClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlbGNvbWVfX3Njcm9sbCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB0YXJnZXRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaG9zZScpO1xuICAgICAgICB0YXJnZXRCbG9jay5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICB9KTtcblxuXG4gICAgbGV0IHN0YXJ0Qm9udXNFYXN5ID0gMzAwLFxuICAgICAgICBzdGFydEJvbnVzTWVkaXVtID0gNzAwLFxuICAgICAgICBzdGFydEJvbnVzSGlnaHQgPSAxNTAwLFxuICAgICAgICBzdHJlYWtCb251c0Vhc3kgPSAyMDAsXG4gICAgICAgIHN0cmVha0JvbnVzTWVkaXVtID0gMjAwLFxuICAgICAgICBzdHJlYWtCb251c0hpZ2h0ID0gNTAwLFxuICAgICAgICBzdHJlYWsgPSA1XG5cbiAgICBjb25zdCBzYXZlQmV0RWFzeSA9IHNhdmVCZXRDYWxjKHN0YXJ0Qm9udXNFYXN5LCBzdHJlYWssIHN0cmVha0JvbnVzRWFzeSwgZmFsc2UpLFxuICAgICAgICAgIHNhdmVCZXRNZWRpdW0gPSBzYXZlQmV0Q2FsYyhzdGFydEJvbnVzTWVkaXVtLCBzdHJlYWssIHN0cmVha0JvbnVzTWVkaXVtLCBmYWxzZSksXG4gICAgICAgICAgc2F2ZUJldEhlaWdodCA9IHNhdmVCZXRDYWxjKHN0YXJ0Qm9udXNIaWdodCwgc3RyZWFrLCBzdHJlYWtCb251c0hpZ2h0LCB0cnVlKVxuXG4gICAgZnVuY3Rpb24gc2F2ZUJldENhbGMoc3RhcnRCb251cywgc3RyZWFrLCBzdHJlYWtCb251cywgZGlmZmljdWx0KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSA0OyBpIDw9IHN0cmVhazsgaSsrKSB7XG4gICAgICAgICAgICBpZighZGlmZmljdWx0KXtcbiAgICAgICAgICAgICAgICBpID09PSAxMCA/IHN0YXJ0Qm9udXMgKz0gMTAwMCA6IHN0YXJ0Qm9udXMgKz0gc3RyZWFrQm9udXNcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGkgPj0gOSA/IHN0YXJ0Qm9udXMgKz0gMTAwMCA6IHN0YXJ0Qm9udXMgKz0gc3RyZWFrQm9udXNcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGFydEJvbnVzO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKHNhdmVCZXRFYXN5LCBzYXZlQmV0TWVkaXVtLCBzYXZlQmV0SGVpZ2h0KVxuXG5cbiAgICAvL2ZvciB0ZXN0XG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIiksXG4gICAgICAgIG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKSxcbiAgICAgICAgZWFzeUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWFzeVwiKSxcbiAgICAgICAgbWVkaXVtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZWRpdW1cIiksXG4gICAgICAgIGhpZ2h0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaWdodFwiKSxcbiAgICAgICAgbG5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lblwiKSxcbiAgICAgICAgZGFya0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFya1wiKSxcbiAgICAgICAgYXV0aEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0aFwiKVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlU3RhdGVQYWdlIChidG4sIHN0YXRlKXtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTmFtZSA9IFwiZmF2LXBhZ2VcIlxuICAgICAgICAgICAgaWYoc3RhdGUpe1xuICAgICAgICAgICAgICAgIHRvZ2dsZUJsb2NrcyhjaG9zZUJsb2NrLCBcImNob3NlSGlkZVwiLCByZXN1bHRCbG9jaywgXCJyZXN1bHRTaG93XCIsIHN0YXRlLCB1c2VyU3RhdHVzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGxuZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGlmKGxvY2FsZSA9PT0gXCJ1a1wiKXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIiwgXCJlblwiKVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZihsb2NhbGUgPT09IFwiZW5cIil7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwidWtcIilcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICB9KVxuXG5cbiAgICBhdXRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgdXNlcklkID8gc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKSA6IHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgJzEwMDMwMDI2OCcpXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pXG5cbiAgICBjaGFuZ2VTdGF0ZVBhZ2UoZWFzeUJ0biwgXCJfZWFzeVwiKVxuICAgIGNoYW5nZVN0YXRlUGFnZShtZWRpdW1CdG4sIFwiX21lZGl1bVwiKVxuICAgIGNoYW5nZVN0YXRlUGFnZShoaWdodEJ0biwgXCJfaGlnaHRcIilcblxuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpXG4gICAgfSlcblxuICAgIGRhcmtCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpXG4gICAgfSlcblxuICAgIC8vIGNoYW5nZVN0YXRlUGFnZShub1N0YXRlQnRuLCBmYWxzZSlcbn0pKCk7Il19
