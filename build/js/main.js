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
      card.addEventListener("click", function () {
        // console.log(card)
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwb3B1cHNXcmFwIiwic2hvd1BvcHVwQnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwb3B1cEl0ZW1zIiwiY2hvc2VCbG9jayIsInJlc3VsdEJsb2NrIiwidW5hdXRoTXNncyIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImNob3NlQnRucyIsImNob3NlQ2FyZHMiLCJ1a0xlbmciLCJlbkxlbmciLCJsb2NhbGUiLCJ1c2VyU3RhdHVzIiwiZGlmZmljdWx0IiwiaTE4bkRhdGEiLCJkZWJ1ZyIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwic2V0UGFnZVN0YXRlIiwidG9nZ2xlQmxvY2tzIiwiSW5pdFBhZ2UiLCJzZXR1cFBhZ2UiLCJpbml0Iiwid2luZG93Iiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImlkIiwiY2hlY2tVc2VyQXV0aCIsInRoZW4iLCJjIiwiaSIsInNldEludGVydmFsIiwiZ191c2VyX2lkIiwiY2xlYXJJbnRlcnZhbCIsImZvckVhY2giLCJhdXRoQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhcnRpY2lwYXRlIiwicGFyYW1zIiwidXNlcmlkIiwicmVxdWVzdCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwiaXRlbSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImxvYWRUcmFuc2xhdGlvbnMiLCJmZXRjaCIsImpzb24iLCJ0cmFuc2xhdGUiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsImVsZW1zIiwibGVuZ3RoIiwiZWxlbSIsImtleSIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsInJlbW92ZUF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJ0cmFuc2xhdGVLZXkiLCJkaXNwbGF5VXNlclNwaW5zIiwic3BpbnMiLCJzcGluSXRlbSIsIm5vU3Bpbkl0ZW0iLCJzcGluIiwic3BpbkRhdGUiLCJEYXRlIiwiZGF0ZSIsImZvcm1hdHRlZERhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJzcGluTmFtZSIsIm5hbWUiLCJzcGluRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImVsZW1lbnQiLCJiYXNlQ3NzQ2xhc3MiLCJsYW5nIiwibGluayIsImV4dHJhT3B0aW9ucyIsImhlYWRlcnMiLCJ1bmF1dGhNZXMiLCJzZXRDaG9zZUNhcmRzIiwicGFydGljaXBhdGVCdG4iLCJjaG9zZUJ0biIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2FyZHMiLCJkaWZmaWN1bHRzIiwiY2FyZCIsImNvbnRhaW5zIiwic2V0UG9wdXAiLCJ3cmFwIiwicG9wdXBOYW1lIiwiYnRucyIsInBvcHVwIiwidGFyZ2V0IiwiY2xvc2VQb3B1cCIsInN0eWxlIiwib3ZlcmZsb3ciLCJidG4iLCJwYXJlbnROb2RlIiwiY2xvc2VCdG4iLCJzdGFydENvdW50ZG93biIsInNlbGVjdG9yIiwiZW5kRGF0ZSIsImVsZW1lbnRzIiwiZXJyb3IiLCJ0YXJnZXREYXRlIiwiZ2V0VGltZSIsInVwZGF0ZVRpbWVyIiwibm93IiwidGltZUxlZnQiLCJpbnRlcnZhbElkIiwic2V0VGltZXJWYWx1ZXMiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInZhbHVlcyIsInZhbHVlIiwiaW5kZXgiLCJ0ZXh0Q29udGVudCIsIm1vbml0b3JWaXNpYmlsaXR5IiwiYW5pbWF0aW9uIiwiZGVsYXkiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJzZXRUaW1lb3V0Iiwib2JzZXJ2ZSIsImhpZGVCbG9jayIsImhpZGVDbGFzcyIsInNob3dCbG9jayIsInNob3dDbGFzcyIsImRpc3BsYXkiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzaG93UmVzdWx0QmxvY2siLCJpdGVtcyIsInlvdSIsIm1lbnVCdG4iLCJtZW51IiwiZWFzeUJ0biIsIm1lZGl1bUJ0biIsImhpZ2h0QnRuIiwibm9TdGF0ZUJ0biIsImRhcmtCdG4iLCJjaGFuZ2VTdGF0ZVBhZ2UiLCJjbGFzc05hbWUiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsQ0FBQyxZQUFZO0VBQ1QsSUFBTUEsTUFBTSxHQUFHLHFDQUFxQztFQUVwRCxJQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUNoREMsVUFBVSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDN0NFLGFBQWEsR0FBR0gsUUFBUSxDQUFDSSxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7SUFDdkRDLFVBQVUsR0FBR0wsUUFBUSxDQUFDSSxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7SUFDdERFLFVBQVUsR0FBR04sUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQzdDTSxXQUFXLEdBQUdQLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUMvQ08sVUFBVSxHQUFHUixRQUFRLENBQUNJLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztJQUNyREssZUFBZSxHQUFHVCxRQUFRLENBQUNJLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztJQUN4RE0sWUFBWSxHQUFHVixRQUFRLENBQUNJLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztJQUNyRE8sU0FBUyxHQUFHWCxRQUFRLENBQUNJLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDO0lBQ3pEUSxVQUFVLEdBQUdaLFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUMsY0FBYyxDQUFDO0VBRTFELElBQU1TLE1BQU0sR0FBR2IsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0VBQ2hELElBQU1hLE1BQU0sR0FBR2QsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0VBR2hELElBQUljLE1BQU0sR0FBRyxJQUFJO0VBRWpCLElBQUlGLE1BQU0sRUFBRUUsTUFBTSxHQUFHLElBQUk7RUFDekIsSUFBSUQsTUFBTSxFQUFFQyxNQUFNLEdBQUcsSUFBSTtFQUV6QixJQUFJQyxVQUFVLEdBQUcsS0FBSztJQUNsQkMsU0FBUyxHQUFHLE9BQU87RUFFdkIsSUFBSUMsUUFBUSxHQUFHLENBQUMsQ0FBQztFQUNqQixJQUFNQyxLQUFLLEdBQUcsSUFBSTtJQUNkQyxjQUFjLEdBQUcsS0FBSztFQUMxQixJQUFJQyxNQUFNO0VBQ1ZBLE1BQU0sR0FBRyxPQUFPO0VBQ2hCOztFQUdBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFZLEdBQVM7SUFDeEIsSUFBR04sVUFBVSxFQUFDO01BQ1ZPLFlBQVksQ0FBQ2pCLFVBQVUsRUFBRSxXQUFXLEVBQUVDLFdBQVcsRUFBRSxZQUFZLEVBQUVVLFNBQVMsRUFBRUQsVUFBVSxDQUFDO0lBQzNGO0VBQ0gsQ0FBQztFQUlELElBQU1RLFFBQVEsR0FBRyxTQUFYQSxRQUFRLEdBQVM7SUFDbkJGLFlBQVksRUFBRTtFQUNsQixDQUFDO0VBQ0QsU0FBU0csU0FBUyxHQUFHO0lBQ2pCRCxRQUFRLEVBQUU7RUFDZDtFQUNBLFNBQVNFLElBQUksR0FBRztJQUNaLElBQUlDLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFO01BQ2QsSUFBSUMsS0FBSyxHQUFHRixNQUFNLENBQUNDLEtBQUssQ0FBQ0UsUUFBUSxFQUFFO01BQ25DVCxNQUFNLEdBQUdRLEtBQUssQ0FBQ0UsSUFBSSxDQUFDQyxZQUFZLElBQUlILEtBQUssQ0FBQ0UsSUFBSSxDQUFDRSxFQUFFLElBQUksRUFBRTtNQUN2REMsYUFBYSxFQUFFLENBQUNDLElBQUksQ0FBQ1YsU0FBUyxDQUFDO0lBQ25DLENBQUMsTUFBTTtNQUNIUyxhQUFhLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDVixTQUFTLENBQUM7TUFDL0IsSUFBSVcsQ0FBQyxHQUFHLENBQUM7TUFDVCxJQUFJQyxDQUFDLEdBQUdDLFdBQVcsQ0FBQyxZQUFZO1FBQzVCLElBQUlGLENBQUMsR0FBRyxFQUFFLEVBQUU7VUFDUixJQUFJLENBQUMsQ0FBQ1QsTUFBTSxDQUFDWSxTQUFTLEVBQUU7WUFDcEJsQixNQUFNLEdBQUdNLE1BQU0sQ0FBQ1ksU0FBUztZQUN6QkwsYUFBYSxFQUFFLENBQUNDLElBQUksQ0FBQ1YsU0FBUyxDQUFDO1lBQy9CZSxhQUFhLENBQUNILENBQUMsQ0FBQztVQUNwQjtRQUNKLENBQUMsTUFBTTtVQUNIRyxhQUFhLENBQUNILENBQUMsQ0FBQztRQUNwQjtNQUNKLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDWDtJQUVBNUIsZUFBZSxDQUFDZ0MsT0FBTyxDQUFDLFVBQUNDLE9BQU8sRUFBRUwsQ0FBQyxFQUFLO01BQ3BDSyxPQUFPLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDQyxDQUFDLEVBQUs7UUFDckNBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO1FBQ2xCQyxXQUFXLEVBQUU7TUFDakIsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ047RUFFQSxTQUFTQSxXQUFXLEdBQUc7SUFDbkIsSUFBSSxDQUFDekIsTUFBTSxFQUFFO01BQ1Q7SUFDSjtJQUVBLElBQU0wQixNQUFNLEdBQUc7TUFBQ0MsTUFBTSxFQUFFM0I7SUFBTSxDQUFDO0lBQy9CNEIsT0FBTyxDQUFDLE9BQU8sRUFBRTtNQUNiQyxNQUFNLEVBQUUsTUFBTTtNQUNkQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDTixNQUFNO0lBQy9CLENBQUMsQ0FBQyxDQUFDWixJQUFJLENBQUMsVUFBQW1CLEdBQUcsRUFBSTtNQUNYN0MsZUFBZSxDQUFDZ0MsT0FBTyxDQUFDLFVBQUFjLElBQUk7UUFBQSxPQUFJQSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUFBLEVBQUM7TUFDM0QvQyxZQUFZLENBQUMrQixPQUFPLENBQUMsVUFBQWMsSUFBSTtRQUFBLE9BQUlBLElBQUksQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDO01BQUEsRUFBQztNQUMzRGpDLFNBQVMsRUFBRTtJQUNmLENBQUMsQ0FBQztFQUNOO0VBRUEsU0FBU2tDLGdCQUFnQixHQUFHO0lBQ3hCLE9BQU9DLEtBQUssV0FBSTlELE1BQU0seUJBQWVpQixNQUFNLEVBQUcsQ0FBQ29CLElBQUksQ0FBQyxVQUFBbUIsR0FBRztNQUFBLE9BQUlBLEdBQUcsQ0FBQ08sSUFBSSxFQUFFO0lBQUEsRUFBQyxDQUNqRTFCLElBQUksQ0FBQyxVQUFBMEIsSUFBSSxFQUFJO01BQ1YzQyxRQUFRLEdBQUcyQyxJQUFJO01BQ2ZDLFNBQVMsRUFBRTtNQUVYLElBQUlDLGdCQUFnQixHQUFHLElBQUlDLGdCQUFnQixDQUFDLFVBQVVDLFNBQVMsRUFBRTtRQUM3REgsU0FBUyxFQUFFO01BQ2YsQ0FBQyxDQUFDO0lBRU4sQ0FBQyxDQUFDO0VBQ1Y7RUFFQSxTQUFTQSxTQUFTLEdBQUc7SUFDakIsSUFBTUksS0FBSyxHQUFHbEUsUUFBUSxDQUFDSSxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQztJQUMzRCxJQUFJOEQsS0FBSyxJQUFJQSxLQUFLLENBQUNDLE1BQU0sRUFBRTtNQUN2QixJQUFHL0MsY0FBYyxFQUFDO1FBQ2Q4QyxLQUFLLENBQUN6QixPQUFPLENBQUMsVUFBQTJCLElBQUksRUFBSTtVQUNsQixJQUFNQyxHQUFHLEdBQUdELElBQUksQ0FBQ0UsWUFBWSxDQUFDLGdCQUFnQixDQUFDO1VBQy9DRixJQUFJLENBQUNHLFNBQVMsR0FBR3JELFFBQVEsQ0FBQ21ELEdBQUcsQ0FBQyxJQUFJLDBDQUEwQyxHQUFHQSxHQUFHO1VBQ2xGRCxJQUFJLENBQUNJLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUMxQyxDQUFDLENBQUM7TUFDTixDQUFDLE1BQUk7UUFDRkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7TUFDbkM7SUFDSjtJQUNBLElBQUkzRCxNQUFNLEtBQUssSUFBSSxFQUFFO01BQ2pCaEIsUUFBUSxDQUFDeUQsU0FBUyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQ2hDO0lBQ0FrQixxQkFBcUIsRUFBRTtFQUMzQjtFQUVBLFNBQVNDLFlBQVksQ0FBQ1AsR0FBRyxFQUFFO0lBQ3ZCLElBQUksQ0FBQ0EsR0FBRyxFQUFFO01BQ047SUFDSjtJQUNBLE9BQU9uRCxRQUFRLENBQUNtRCxHQUFHLENBQUMsSUFBSSwwQ0FBMEMsR0FBR0EsR0FBRztFQUM1RTtFQUVBLFNBQVNRLGdCQUFnQixDQUFDQyxLQUFLLEVBQUU7SUFDN0IsSUFBTUMsUUFBUSxHQUFHL0UsUUFBUSxDQUFDQyxhQUFhLENBQUMsWUFBWSxDQUFDO0lBQ3JELElBQU0rRSxVQUFVLEdBQUdoRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7O0lBRXREOztJQUVBLElBQUksQ0FBQzZFLEtBQUssSUFBSUEsS0FBSyxDQUFDWCxNQUFNLEtBQUssQ0FBQyxFQUFFO01BQzlCWSxRQUFRLENBQUN2QixTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDOUJ1QixVQUFVLENBQUN4QixTQUFTLENBQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUM7TUFDbkM7SUFDSjs7SUFFQTtJQUNBcUIsUUFBUSxDQUFDUixTQUFTLHNPQU1qQjtJQUVEUSxRQUFRLENBQUN2QixTQUFTLENBQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDakNzQixVQUFVLENBQUN4QixTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDaEM7O0lBRUFxQixLQUFLLENBQUNyQyxPQUFPLENBQUMsVUFBQXdDLElBQUksRUFBSTtNQUNsQixJQUFNQyxRQUFRLEdBQUcsSUFBSUMsSUFBSSxDQUFDRixJQUFJLENBQUNHLElBQUksQ0FBQztNQUNwQyxJQUFNQyxhQUFhLEdBQUdILFFBQVEsQ0FBQ0ksa0JBQWtCLENBQUMsT0FBTyxDQUFDO01BQzFELElBQU1DLFFBQVEsR0FBR1gsWUFBWSxDQUFDSyxJQUFJLENBQUNPLElBQUksQ0FBQyxJQUFJLEVBQUU7TUFFOUMsSUFBTUMsV0FBVyxHQUFHekYsUUFBUSxDQUFDMEYsYUFBYSxDQUFDLEtBQUssQ0FBQztNQUNqREQsV0FBVyxDQUFDakMsU0FBUyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7TUFFM0NnQyxXQUFXLENBQUNsQixTQUFTLHdEQUNRYyxhQUFhLGdFQUNaRSxRQUFRLHNCQUN6QztNQUVHUixRQUFRLENBQUNZLFdBQVcsQ0FBQ0YsV0FBVyxDQUFDO0lBQ3JDLENBQUMsQ0FBQztFQUNOO0VBRUEsU0FBU2QscUJBQXFCLENBQUNpQixPQUFPLEVBQUVDLFlBQVksRUFBRTtJQUNsRCxJQUFJLENBQUNELE9BQU8sRUFBRTtNQUNWO0lBQ0o7SUFDQSx3QkFBbUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLDBCQUFFO01BQTVCLElBQU1FLElBQUk7TUFDWEYsT0FBTyxDQUFDcEMsU0FBUyxDQUFDRSxNQUFNLENBQUNtQyxZQUFZLEdBQUdDLElBQUksQ0FBQztJQUNqRDtJQUNBRixPQUFPLENBQUNwQyxTQUFTLENBQUNDLEdBQUcsQ0FBQ29DLFlBQVksR0FBRzlFLE1BQU0sQ0FBQztFQUNoRDtFQUdBLElBQU1rQyxPQUFPLEdBQUcsU0FBVkEsT0FBTyxDQUFhOEMsSUFBSSxFQUFFQyxZQUFZLEVBQUU7SUFDMUMsT0FBT3BDLEtBQUssQ0FBQzlELE1BQU0sR0FBR2lHLElBQUk7TUFDdEJFLE9BQU8sRUFBRTtRQUNMLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsY0FBYyxFQUFFO01BQ3BCO0lBQUMsR0FDR0QsWUFBWSxJQUFJLENBQUMsQ0FBQyxFQUN4QixDQUFDN0QsSUFBSSxDQUFDLFVBQUFtQixHQUFHO01BQUEsT0FBSUEsR0FBRyxDQUFDTyxJQUFJLEVBQUU7SUFBQSxFQUFDO0VBQzlCLENBQUM7RUFFRCxTQUFTM0IsYUFBYSxHQUFHO0lBQ3JCLElBQUliLE1BQU0sRUFBRTtNQUFBLDJDQUNnQmIsVUFBVTtRQUFBO01BQUE7UUFBbEMsb0RBQW9DO1VBQUEsSUFBekIwRixTQUFTO1VBQ2hCQSxTQUFTLENBQUMxQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDbkM7TUFBQztRQUFBO01BQUE7UUFBQTtNQUFBO01BQ0QsT0FBT1IsT0FBTyxvQkFBYTVCLE1BQU0sZ0JBQWEsQ0FDekNjLElBQUksQ0FBQyxVQUFBbUIsR0FBRyxFQUFJO1FBQ1QsSUFBSUEsR0FBRyxDQUFDTixNQUFNLEVBQUU7VUFDWnlCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDcEIsR0FBRyxDQUFDTixNQUFNLENBQUM7VUFDdkJ2QyxlQUFlLENBQUNnQyxPQUFPLENBQUMsVUFBQWMsSUFBSTtZQUFBLE9BQUlBLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1VBQUEsRUFBQztVQUMzRC9DLFlBQVksQ0FBQytCLE9BQU8sQ0FBQyxVQUFBYyxJQUFJO1lBQUEsT0FBSUEsSUFBSSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUM7VUFBQSxFQUFDO1VBQzNEeUMsYUFBYSxDQUFDdkYsVUFBVSxDQUFDO1VBQ3pCLElBQUlPLEtBQUssRUFBRTtZQUNQO1lBQ0E7WUFDQTtZQUNBbUMsR0FBRyxDQUFDd0IsS0FBSyxHQUFHLEVBQUU7VUFDbEI7VUFDQUQsZ0JBQWdCLENBQUN2QixHQUFHLENBQUN3QixLQUFLLENBQUM7UUFDL0IsQ0FBQyxNQUFJO1VBQ0RuRSxTQUFTLENBQUM4QixPQUFPLENBQUMsVUFBQWMsSUFBSTtZQUFBLE9BQUlBLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1VBQUEsRUFBQztVQUNyRGhELGVBQWUsQ0FBQ2dDLE9BQU8sQ0FBQyxVQUFBYyxJQUFJO1lBQUEsT0FBSUEsSUFBSSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUM7VUFBQSxFQUFDO1FBQ2xFO01BQ0osQ0FBQyxDQUFDO0lBQ1YsQ0FBQyxNQUFNO01BQ0g7TUFBQSw0Q0FDMkJqRCxlQUFlO1FBQUE7TUFBQTtRQUExQyx1REFBNEM7VUFBQSxJQUFuQzJGLGNBQWM7VUFDbkJBLGNBQWMsQ0FBQzVDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUN4QztNQUFDO1FBQUE7TUFBQTtRQUFBO01BQUE7TUFBQSw0Q0FDb0I5QyxTQUFTO1FBQUE7TUFBQTtRQUE5Qix1REFBZ0M7VUFBQSxJQUF2QjBGLFFBQVE7VUFDYkEsUUFBUSxDQUFDN0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ2xDO01BQUM7UUFBQTtNQUFBO1FBQUE7TUFBQTtNQUFBLDRDQUN1QmpELFVBQVU7UUFBQTtNQUFBO1FBQWxDLHVEQUFvQztVQUFBLElBQXpCMEYsVUFBUztVQUNoQkEsVUFBUyxDQUFDMUMsU0FBUyxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ3RDO01BQUM7UUFBQTtNQUFBO1FBQUE7TUFBQTtNQUNELE9BQU80QyxPQUFPLENBQUNDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDakM7RUFDSjtFQUVBNUMsZ0JBQWdCLEVBQUUsQ0FDYnhCLElBQUksQ0FBQ1QsSUFBSSxDQUFDO0VBRWYsU0FBU3lFLGFBQWEsQ0FBQ0ssS0FBSyxFQUFDO0lBQ3pCLElBQU1DLFVBQVUsR0FBRyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDO0lBR2pERCxLQUFLLENBQUMvRCxPQUFPLENBQUMsVUFBQWlFLElBQUksRUFBRztNQUNqQkEsSUFBSSxDQUFDL0QsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7UUFDaEM7UUFDQThELFVBQVUsQ0FBQ2hFLE9BQU8sQ0FBQyxVQUFBYyxJQUFJLEVBQUc7VUFDdEIsSUFBR21ELElBQUksQ0FBQ2xELFNBQVMsQ0FBQ21ELFFBQVEsQ0FBQ3BELElBQUksQ0FBQyxFQUFDO1lBQzdCaEMsWUFBWSxDQUFDakIsVUFBVSxFQUFFLFdBQVcsRUFBRUMsV0FBVyxFQUFFLFlBQVksRUFBRWdELElBQUksRUFBRXZDLFVBQVUsQ0FBQztVQUN0RjtRQUNKLENBQUMsQ0FBQztNQUVOLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOO0VBRUEsU0FBUzRGLFFBQVEsQ0FBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBRTFHLFVBQVUsRUFBQztJQUNqRCxJQUFJMkcsS0FBSyxHQUFHSCxJQUFJLENBQUM1RyxhQUFhLFlBQUs2RyxTQUFTLEVBQUc7SUFFL0NELElBQUksQ0FBQ2xFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDQyxDQUFDLEVBQUk7TUFDakNBLENBQUMsQ0FBQ3FFLE1BQU0sS0FBS0osSUFBSSxHQUFHSyxVQUFVLEVBQUUsR0FBRyxJQUFJO0lBQzNDLENBQUMsQ0FBQztJQUVGLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFVLEdBQVE7TUFDcEJGLEtBQUssQ0FBQ3hELFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFNBQVMsQ0FBQztNQUNqQzFELFFBQVEsQ0FBQ21ELElBQUksQ0FBQ2dFLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLE1BQU07TUFDckNQLElBQUksQ0FBQ3JELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztJQUNsQyxDQUFDO0lBRURzRCxJQUFJLENBQUN0RSxPQUFPLENBQUMsVUFBQTRFLEdBQUcsRUFBSTtNQUNoQixJQUFHQSxHQUFHLENBQUNDLFVBQVUsQ0FBQ0EsVUFBVSxDQUFDOUQsU0FBUyxDQUFDbUQsUUFBUSxDQUFDRyxTQUFTLENBQUMsRUFBQztRQUN2RE8sR0FBRyxDQUFDQyxVQUFVLENBQUMzRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsQ0FBQyxFQUFJO1VBQzNDLElBQUdBLENBQUMsQ0FBQ3FFLE1BQU0sS0FBS0ksR0FBRyxFQUFDO1lBQ2hCekUsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7VUFDdEI7UUFDSixDQUFDLENBQUM7UUFDRndFLEdBQUcsQ0FBQzFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO1VBQy9CdEMsVUFBVSxDQUFDb0MsT0FBTyxDQUFDLFVBQUFjLElBQUksRUFBRztZQUN0QkEsSUFBSSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxTQUFTLENBQUM7VUFDcEMsQ0FBQyxDQUFDO1VBQ0ZzRCxLQUFLLENBQUN4RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7VUFDOUJ6RCxRQUFRLENBQUNtRCxJQUFJLENBQUNnRSxLQUFLLENBQUNDLFFBQVEsR0FBRyxRQUFRO1VBQ3ZDUCxJQUFJLENBQUNyRCxTQUFTLENBQUNFLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDckMsQ0FBQyxDQUFDO1FBQ0YsSUFBSTZELFFBQVEsR0FBR1AsS0FBSyxDQUFDL0csYUFBYSxDQUFDLGVBQWUsQ0FBQztRQUNuRHNILFFBQVEsQ0FBQzVFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO1VBQ2hDdUUsVUFBVSxFQUFFO1FBQ3BCLENBQUMsQ0FBQztNQUNOO0lBQ0osQ0FBQyxDQUFDO0VBQ047RUFFQU4sUUFBUSxDQUFDMUcsVUFBVSxFQUFFLE9BQU8sRUFBRUMsYUFBYSxFQUFFRSxVQUFVLENBQUM7RUFDeER1RyxRQUFRLENBQUMxRyxVQUFVLEVBQUUsU0FBUyxFQUFFQyxhQUFhLEVBQUVFLFVBQVUsQ0FBQztFQUMxRHVHLFFBQVEsQ0FBQzFHLFVBQVUsRUFBRSxRQUFRLEVBQUVDLGFBQWEsRUFBRUUsVUFBVSxDQUFDO0VBQ3pEdUcsUUFBUSxDQUFDMUcsVUFBVSxFQUFFLFNBQVMsRUFBRUMsYUFBYSxFQUFFRSxVQUFVLENBQUM7RUFFMUQsU0FBU21ILGNBQWMsQ0FBQ0MsUUFBUSxFQUFFQyxPQUFPLEVBQUU7SUFDdkMsSUFBTUMsUUFBUSxHQUFHM0gsUUFBUSxDQUFDSSxnQkFBZ0IsV0FBSXFILFFBQVEsK0JBQTRCO0lBQ2xGLElBQUlFLFFBQVEsQ0FBQ3hELE1BQU0sS0FBSyxDQUFDLEVBQUU7TUFDdkJNLE9BQU8sQ0FBQ21ELEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztNQUNsQztJQUNKO0lBRUEsSUFBTUMsVUFBVSxHQUFHLElBQUkxQyxJQUFJLENBQUN1QyxPQUFPLENBQUMsQ0FBQ0ksT0FBTyxFQUFFO0lBRTlDLFNBQVNDLFdBQVcsR0FBRztNQUNuQixJQUFNQyxHQUFHLEdBQUcsSUFBSTdDLElBQUksRUFBRSxDQUFDMkMsT0FBTyxFQUFFO01BQ2hDLElBQU1HLFFBQVEsR0FBR0osVUFBVSxHQUFHRyxHQUFHO01BRWpDLElBQUlDLFFBQVEsSUFBSSxDQUFDLEVBQUU7UUFDZnpGLGFBQWEsQ0FBQzBGLFVBQVUsQ0FBQztRQUN6QkMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUI7TUFDSjtNQUVBLElBQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNMLFFBQVEsSUFBSSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztNQUN6RCxJQUFNTSxLQUFLLEdBQUdGLElBQUksQ0FBQ0MsS0FBSyxDQUFFTCxRQUFRLElBQUksSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUssSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztNQUMvRSxJQUFNTyxPQUFPLEdBQUdILElBQUksQ0FBQ0MsS0FBSyxDQUFFTCxRQUFRLElBQUksSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7TUFDdkUsSUFBTVEsT0FBTyxHQUFHSixJQUFJLENBQUNDLEtBQUssQ0FBRUwsUUFBUSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsR0FBSSxJQUFJLENBQUM7TUFFM0RFLGNBQWMsQ0FBQyxDQUFDQyxJQUFJLEVBQUVHLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxPQUFPLENBQUMsQ0FBQztJQUNuRDtJQUVBLFNBQVNOLGNBQWMsQ0FBQ08sTUFBTSxFQUFFO01BQzVCQSxNQUFNLENBQUNqRyxPQUFPLENBQUMsVUFBQ2tHLEtBQUssRUFBRUMsS0FBSyxFQUFLO1FBQzdCakIsUUFBUSxDQUFDaUIsS0FBSyxDQUFDLENBQUNDLFdBQVcsR0FBR0YsS0FBSyxHQUFHLEVBQUUsY0FBT0EsS0FBSyxJQUFLQSxLQUFLO01BQ2xFLENBQUMsQ0FBQztJQUNOO0lBRUFaLFdBQVcsRUFBRTtJQUNiLElBQU1HLFVBQVUsR0FBRzVGLFdBQVcsQ0FBQ3lGLFdBQVcsRUFBRSxJQUFJLENBQUM7RUFDckQ7RUFFQVAsY0FBYyxDQUFDLGlCQUFpQixFQUFFLHFCQUFxQixDQUFDO0VBRXhELFNBQVNzQixpQkFBaUIsQ0FBQ3JCLFFBQVEsRUFBRXNCLFNBQVMsRUFBRUMsS0FBSyxFQUFFO0lBQ25ELElBQU1wRCxPQUFPLEdBQUc1RixRQUFRLENBQUNDLGFBQWEsQ0FBQ3dILFFBQVEsQ0FBQztJQUVoRCxJQUFJLENBQUM3QixPQUFPLEVBQUU7TUFDVm5CLE9BQU8sQ0FBQ21ELEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztNQUNuQztJQUNKO0lBRUEsSUFBTXFCLFFBQVEsR0FBRyxJQUFJQyxvQkFBb0IsQ0FBQyxVQUFDQyxPQUFPLEVBQUs7TUFDbkRBLE9BQU8sQ0FBQzFHLE9BQU8sQ0FBQyxVQUFDMkcsS0FBSyxFQUFLO1FBQ3ZCLElBQUlBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO1VBQ3RCQyxVQUFVLENBQUMsWUFBSztZQUNaMUQsT0FBTyxDQUFDcEMsU0FBUyxDQUFDQyxHQUFHLENBQUNzRixTQUFTLENBQUM7VUFDcEMsQ0FBQyxFQUFFQyxLQUFLLENBQUM7UUFDYjtNQUNKLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztJQUVGQyxRQUFRLENBQUNNLE9BQU8sQ0FBQzNELE9BQU8sQ0FBQztFQUM3QjtFQUVBa0QsaUJBQWlCLENBQUMsZUFBZSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7RUFDakRBLGlCQUFpQixDQUFDLHFCQUFxQixFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUM7RUFDL0RBLGlCQUFpQixDQUFDLG9CQUFvQixFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7RUFDM0RBLGlCQUFpQixDQUFDLG9CQUFvQixFQUFFLFVBQVUsRUFBRSxHQUFHLENBQUM7RUFDeERBLGlCQUFpQixDQUFDLHNCQUFzQixFQUFFLFVBQVUsRUFBRSxHQUFHLENBQUM7RUFDMURBLGlCQUFpQixDQUFDLHFCQUFxQixFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUM7RUFHMUQsU0FBU3ZILFlBQVksQ0FBRWlJLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTlILEtBQUssRUFBRWIsVUFBVSxFQUFDO0lBQ2pGakIsUUFBUSxDQUFDeUQsU0FBUyxDQUFDQyxHQUFHLENBQUM1QixLQUFLLENBQUM7SUFDN0IySCxTQUFTLENBQUNoRyxTQUFTLENBQUNDLEdBQUcsQ0FBQ2dHLFNBQVMsQ0FBQztJQUNsQyxJQUFHLENBQUN6SSxVQUFVLEVBQUM7TUFDWHdJLFNBQVMsQ0FBQzdHLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxZQUFLO1FBQzVDK0csU0FBUyxDQUFDdkMsS0FBSyxDQUFDeUMsT0FBTyxHQUFHLE1BQU07UUFDaENGLFNBQVMsQ0FBQ3ZDLEtBQUssQ0FBQzBDLE1BQU0sR0FBR0wsU0FBUyxDQUFDTSxZQUFZO1FBQy9DTixTQUFTLENBQUNoRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDL0I2RixVQUFVLENBQUMsWUFBSztVQUNaUyxlQUFlLENBQUNMLFNBQVMsRUFBRUMsU0FBUyxDQUFDO1FBQ3pDLENBQUMsRUFBRSxFQUFFLENBQUM7TUFDVixDQUFDLENBQUM7SUFDTixDQUFDLE1BQUk7TUFDREQsU0FBUyxDQUFDdkMsS0FBSyxDQUFDeUMsT0FBTyxHQUFHLE1BQU07TUFDaENGLFNBQVMsQ0FBQ3ZDLEtBQUssQ0FBQzBDLE1BQU0sR0FBR0wsU0FBUyxDQUFDTSxZQUFZO01BQy9DTixTQUFTLENBQUNoRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDL0JzRyxlQUFlLENBQUNMLFNBQVMsRUFBRUMsU0FBUyxDQUFDO0lBQ3pDO0VBRUo7RUFFQSxTQUFTSSxlQUFlLENBQUNMLFNBQVMsRUFBRUMsU0FBUyxFQUFDO0lBQzFDRCxTQUFTLENBQUNsRyxTQUFTLENBQUNDLEdBQUcsQ0FBQ2tHLFNBQVMsQ0FBQztJQUNsQ0QsU0FBUyxDQUFDdkMsS0FBSyxDQUFDMEMsTUFBTSxHQUFHLE1BQU07SUFDL0JQLFVBQVUsQ0FBQyxZQUFLO01BQ1osSUFBSVUsS0FBSyxHQUFHTixTQUFTLENBQUN0SixnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQztNQUM1RDRKLEtBQUssQ0FBQ3ZILE9BQU8sQ0FBQyxVQUFDYyxJQUFJLEVBQUVsQixDQUFDLEVBQUk7UUFDdEIsSUFBR2tCLElBQUksQ0FBQ0MsU0FBUyxDQUFDbUQsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFDO1VBQzlCMkMsVUFBVSxDQUFDLFlBQUs7WUFDWixJQUFJVyxHQUFHLEdBQUcxRyxJQUFJLENBQUN0RCxhQUFhLENBQUMsbUJBQW1CLENBQUM7WUFDakQsSUFBSW9ILEdBQUcsR0FBR3JILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQztZQUNoRGdLLEdBQUcsQ0FBQ3pHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztZQUM1QjZGLFVBQVUsQ0FBQyxZQUFLO2NBQ1pqQyxHQUFHLENBQUM3RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7WUFDaEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztVQUNYLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDWjtRQUNBNkYsVUFBVSxDQUFDLFlBQUs7VUFDWi9GLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO1FBQ2xDLENBQUMsRUFBRSxHQUFHLEdBQUd1RyxLQUFLLENBQUM3RixNQUFNLEdBQUc5QixDQUFDLEdBQUcsR0FBRyxDQUFDO01BQ3BDLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOOztFQUVBO0VBQ0EsSUFBTTZILE9BQU8sR0FBR2xLLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUMvQ2tLLElBQUksR0FBR25LLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQztJQUMzQ21LLE9BQU8sR0FBR3BLLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztJQUN6Q29LLFNBQVMsR0FBR3JLLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUM3Q3FLLFFBQVEsR0FBR3RLLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUMzQ3NLLFVBQVUsR0FBR3ZLLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUNoRHVLLE9BQU8sR0FBR3hLLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUU3QyxTQUFTd0ssZUFBZSxDQUFFcEQsR0FBRyxFQUFFeEYsS0FBSyxFQUFDO0lBQ2pDd0YsR0FBRyxDQUFDMUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7TUFDL0I1QyxRQUFRLENBQUMySyxTQUFTLEdBQUcsVUFBVTtNQUMvQixJQUFHN0ksS0FBSyxFQUFDO1FBQ0xOLFlBQVksQ0FBQ2pCLFVBQVUsRUFBRSxXQUFXLEVBQUVDLFdBQVcsRUFBRSxZQUFZLEVBQUVzQixLQUFLLEVBQUViLFVBQVUsQ0FBQztNQUN2RjtJQUNKLENBQUMsQ0FBQztFQUNOO0VBR0F5SixlQUFlLENBQUNMLE9BQU8sRUFBRSxPQUFPLENBQUM7RUFDakNLLGVBQWUsQ0FBQ0osU0FBUyxFQUFFLFNBQVMsQ0FBQztFQUNyQ0ksZUFBZSxDQUFDSCxRQUFRLEVBQUUsUUFBUSxDQUFDO0VBRW5DSixPQUFPLENBQUN2SCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSztJQUNuQ3dILElBQUksQ0FBQzNHLFNBQVMsQ0FBQ21ILE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDakMsQ0FBQyxDQUFDO0VBRUZILE9BQU8sQ0FBQzdILGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO0lBQ25DM0MsUUFBUSxDQUFDbUQsSUFBSSxDQUFDSyxTQUFTLENBQUNtSCxNQUFNLENBQUMsTUFBTSxDQUFDO0VBQzFDLENBQUMsQ0FBQzs7RUFFRjtBQUNKLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX3doZWVsXzIwMjUnXG5cbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4gICAgICAgIHBvcHVwc1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpLFxuICAgICAgICBzaG93UG9wdXBCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbmZvLWljb25cIiksXG4gICAgICAgIHBvcHVwSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19pdGVtXCIpLFxuICAgICAgICBjaG9zZUJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaG9zZVwiKSxcbiAgICAgICAgcmVzdWx0QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdFwiKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0bicpLFxuICAgICAgICByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWpvaW4nKSxcbiAgICAgICAgY2hvc2VCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaG9zZV9fY2FyZC1idG5cIiksXG4gICAgICAgIGNob3NlQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNob3NlX19jYXJkXCIpXG5cbiAgICBjb25zdCB1a0xlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWtMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG5cbiAgICBsZXQgbG9jYWxlID0gJ3VrJztcblxuICAgIGlmICh1a0xlbmcpIGxvY2FsZSA9ICd1ayc7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuICAgIGxldCB1c2VyU3RhdHVzID0gZmFsc2UsXG4gICAgICAgIGRpZmZpY3VsdCA9IFwiX2Vhc3lcIlxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgZGVidWcgPSB0cnVlLFxuICAgICAgICB0cmFuc2xhdGVTdGF0ZSA9IGZhbHNlO1xuICAgIGxldCB1c2VySWQ7XG4gICAgdXNlcklkID0gNzc3Nzc3NztcbiAgICAvLyB1c2VySWQgPSAxMDAzMDAyNjhcblxuXG4gICAgY29uc3Qgc2V0UGFnZVN0YXRlID0gKCkgPT4ge1xuICAgICAgIGlmKHVzZXJTdGF0dXMpe1xuICAgICAgICAgICB0b2dnbGVCbG9ja3MoY2hvc2VCbG9jaywgXCJjaG9zZUhpZGVcIiwgcmVzdWx0QmxvY2ssIFwicmVzdWx0U2hvd1wiLCBkaWZmaWN1bHQsIHVzZXJTdGF0dXMpXG4gICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBjb25zdCBJbml0UGFnZSA9ICgpID0+IHtcbiAgICAgICAgc2V0UGFnZVN0YXRlKClcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0dXBQYWdlKCkge1xuICAgICAgICBJbml0UGFnZSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBpZiAod2luZG93LnN0b3JlKSB7XG4gICAgICAgICAgICB2YXIgc3RhdGUgPSB3aW5kb3cuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICBjaGVja1VzZXJBdXRoKCkudGhlbihzZXR1cFBhZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpLnRoZW4oc2V0dXBQYWdlKTtcbiAgICAgICAgICAgIGxldCBjID0gMDtcbiAgICAgICAgICAgIHZhciBpID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChjIDwgNTApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhd2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKS50aGVuKHNldHVwUGFnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goKGF1dGhCdG4sIGkpID0+IHtcbiAgICAgICAgICAgIGF1dGhCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyYW1zID0ge3VzZXJpZDogdXNlcklkfTtcbiAgICAgICAgcmVxdWVzdCgnL3VzZXInLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgIHNldHVwUGFnZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2goYCR7YXBpVVJMfS90cmFuc2xhdGVzLyR7bG9jYWxlfWApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmshXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2FsZSA9PT0gJ2VuJykge1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnZW4nKTtcbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVLZXkoa2V5KSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyU3BpbnMoc3BpbnMpIHtcbiAgICAgICAgY29uc3Qgc3Bpbkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BpbnMtcm93Jyk7XG4gICAgICAgIGNvbnN0IG5vU3Bpbkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm8tc3BpbnMnKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzcGlucylcblxuICAgICAgICBpZiAoIXNwaW5zIHx8IHNwaW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgc3Bpbkl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgbm9TcGluSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zdCBzcGluc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGlucy1yb3cnKTtcbiAgICAgICAgc3Bpbkl0ZW0uaW5uZXJIVE1MID1cbiAgICAgICAgICAgIGBcbiAgICAgICA8ZGl2IGNsYXNzPVwic3BpbnMtcm93LWhlYWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWRhdGVcIiBkYXRhLXRyYW5zbGF0ZT1cIm15U3BpbnNEYXRlXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1wcml6ZVwiIGRhdGEtdHJhbnNsYXRlPVwibXlTcGluc1ByaXplXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgXG5cbiAgICAgICAgc3Bpbkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBub1NwaW5JdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobm9TcGluSXRlbSlcblxuICAgICAgICBzcGlucy5mb3JFYWNoKHNwaW4gPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3BpbkRhdGUgPSBuZXcgRGF0ZShzcGluLmRhdGUpO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IHNwaW5EYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygndWstVUEnKTtcbiAgICAgICAgICAgIGNvbnN0IHNwaW5OYW1lID0gdHJhbnNsYXRlS2V5KHNwaW4ubmFtZSkgfHwgJyc7XG5cbiAgICAgICAgICAgIGNvbnN0IHNwaW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBzcGluRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzcGlucy1yb3ctaXRlbScpO1xuXG4gICAgICAgICAgICBzcGluRWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbnRlbnQtZGF0ZVwiPiR7Zm9ybWF0dGVkRGF0ZX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbnRlbnQtcHJpemVcIj4ke3NwaW5OYW1lfTwvc3Bhbj5cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgc3Bpbkl0ZW0uYXBwZW5kQ2hpbGQoc3BpbkVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCwgYmFzZUNzc0NsYXNzKSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ3VrJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShiYXNlQ3NzQ2xhc3MgKyBsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYmFzZUNzc0NsYXNzICsgbG9jYWxlKTtcbiAgICB9XG5cblxuICAgIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1VzZXJBdXRoKCkge1xuICAgICAgICBpZiAodXNlcklkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnVzZXJpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLnVzZXJpZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDaG9zZUNhcmRzKGNob3NlQ2FyZHMpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXMucG9pbnRzUGVyRGF5ID0gMzA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVzLnNwaW5BbGxvd2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXMuc3BpbnNTdHJlYWsgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zcGlucyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVVzZXJTcGlucyhyZXMuc3BpbnMpO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNob3NlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZGlzcGxheVVzZXJTcGlucygwKTtcbiAgICAgICAgICAgIGZvciAobGV0IHBhcnRpY2lwYXRlQnRuIG9mIHBhcnRpY2lwYXRlQnRucykge1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGNob3NlQnRuIG9mIGNob3NlQnRucykge1xuICAgICAgICAgICAgICAgIGNob3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkVHJhbnNsYXRpb25zKClcbiAgICAgICAgLnRoZW4oaW5pdCk7XG5cbiAgICBmdW5jdGlvbiBzZXRDaG9zZUNhcmRzKGNhcmRzKXtcbiAgICAgICAgY29uc3QgZGlmZmljdWx0cyA9IFtcIl9lYXN5XCIsIFwiX21lZGl1bVwiLCBcIl9oaWdodFwiXVxuXG5cbiAgICAgICAgY2FyZHMuZm9yRWFjaChjYXJkID0+e1xuICAgICAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY2FyZClcbiAgICAgICAgICAgICAgICBkaWZmaWN1bHRzLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgICAgICAgICAgaWYoY2FyZC5jbGFzc0xpc3QuY29udGFpbnMoaXRlbSkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQmxvY2tzKGNob3NlQmxvY2ssIFwiY2hvc2VIaWRlXCIsIHJlc3VsdEJsb2NrLCBcInJlc3VsdFNob3dcIiwgaXRlbSwgdXNlclN0YXR1cylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0UG9wdXAgKHdyYXAsIHBvcHVwTmFtZSwgYnRucywgcG9wdXBJdGVtcyl7XG4gICAgICAgIGxldCBwb3B1cCA9IHdyYXAucXVlcnlTZWxlY3RvcihgLiR7cG9wdXBOYW1lfWApXG5cbiAgICAgICAgd3JhcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgZS50YXJnZXQgPT09IHdyYXAgPyBjbG9zZVBvcHVwKCkgOiBudWxsXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgY2xvc2VQb3B1cCA9ICgpID0+e1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIilcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICAgICAgd3JhcC5jbGFzc0xpc3QuYWRkKFwiX29wYWNpdHlcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgICAgaWYoYnRuLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMocG9wdXBOYW1lKSl7XG4gICAgICAgICAgICAgICAgYnRuLnBhcmVudE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgICAgICAgICAgaWYoZS50YXJnZXQgPT09IGJ0bil7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBJdGVtcy5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJfYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgIHdyYXAuY2xhc3NMaXN0LnJlbW92ZShcIl9vcGFjaXR5XCIpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBsZXQgY2xvc2VCdG4gPSBwb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19jbG9zZVwiKVxuICAgICAgICAgICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlUG9wdXAoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2V0UG9wdXAocG9wdXBzV3JhcCwgXCJfZWFzeVwiLCBzaG93UG9wdXBCdG5zLCBwb3B1cEl0ZW1zKVxuICAgIHNldFBvcHVwKHBvcHVwc1dyYXAsIFwiX21lZGl1bVwiLCBzaG93UG9wdXBCdG5zLCBwb3B1cEl0ZW1zKVxuICAgIHNldFBvcHVwKHBvcHVwc1dyYXAsIFwiX2hpZ2h0XCIsIHNob3dQb3B1cEJ0bnMsIHBvcHVwSXRlbXMpXG4gICAgc2V0UG9wdXAocG9wdXBzV3JhcCwgXCJfbm90aWZ5XCIsIHNob3dQb3B1cEJ0bnMsIHBvcHVwSXRlbXMpXG5cbiAgICBmdW5jdGlvbiBzdGFydENvdW50ZG93bihzZWxlY3RvciwgZW5kRGF0ZSkge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7c2VsZWN0b3J9IC53ZWxjb21lX190aW1lci1pdGVtLW51bWApO1xuICAgICAgICBpZiAoZWxlbWVudHMubGVuZ3RoICE9PSA0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHNlbGVjdG9yIScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0RGF0ZSA9IG5ldyBEYXRlKGVuZERhdGUpLmdldFRpbWUoKTtcblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVUaW1lcigpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY29uc3QgdGltZUxlZnQgPSB0YXJnZXREYXRlIC0gbm93O1xuXG4gICAgICAgICAgICBpZiAodGltZUxlZnQgPD0gMCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZXJWYWx1ZXMoWzAsIDAsIDAsIDBdKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKHRpbWVMZWZ0IC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcigodGltZUxlZnQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigodGltZUxlZnQgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAlICgxMDAwICogNjApKSAvIDEwMDApO1xuXG4gICAgICAgICAgICBzZXRUaW1lclZhbHVlcyhbZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHNdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNldFRpbWVyVmFsdWVzKHZhbHVlcykge1xuICAgICAgICAgICAgdmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2luZGV4XS50ZXh0Q29udGVudCA9IHZhbHVlIDwgMTAgPyBgMCR7dmFsdWV9YCA6IHZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVUaW1lcigpO1xuICAgICAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwodXBkYXRlVGltZXIsIDEwMDApO1xuICAgIH1cblxuICAgIHN0YXJ0Q291bnRkb3duKCcud2VsY29tZV9fdGltZXInLCAnMjAyNS0wMS0zMVQyMzo1OTo1OScpO1xuXG4gICAgZnVuY3Rpb24gbW9uaXRvclZpc2liaWxpdHkoc2VsZWN0b3IsIGFuaW1hdGlvbiwgZGVsYXkpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRWxlbWVudCBub3QgZm91bmQhJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGFuaW1hdGlvbilcbiAgICAgICAgICAgICAgICAgICAgfSwgZGVsYXkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgbW9uaXRvclZpc2liaWxpdHkoJy5ub3RpZnlfX3BlcnMnLCBcInNob3daZXVzXCIsIDApO1xuICAgIG1vbml0b3JWaXNpYmlsaXR5KCcubm90aWZ5X19wZXJzLWJ1YmxlJywgXCJzaG93WmV1c0J1YmxlXCIsIDEyMDApO1xuICAgIG1vbml0b3JWaXNpYmlsaXR5KCcuY2hvc2VfX3BlcnMtYnVibGUnLCBcInNob3daZXVzQnVibGVcIiwgMCk7XG4gICAgbW9uaXRvclZpc2liaWxpdHkoJy5jaG9zZV9fY2FyZC5fZWFzeScsIFwic2hvd0NhcmRcIiwgNDAwKTtcbiAgICBtb25pdG9yVmlzaWJpbGl0eSgnLmNob3NlX19jYXJkLl9tZWRpdW0nLCBcInNob3dDYXJkXCIsIDgwMCk7XG4gICAgbW9uaXRvclZpc2liaWxpdHkoJy5jaG9zZV9fY2FyZC5faGlnaHQnLCBcInNob3dDYXJkXCIsIDEyMDApO1xuXG5cbiAgICBmdW5jdGlvbiB0b2dnbGVCbG9ja3MgKGhpZGVCbG9jaywgaGlkZUNsYXNzLCBzaG93QmxvY2ssIHNob3dDbGFzcywgc3RhdGUsIHVzZXJTdGF0dXMpe1xuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKHN0YXRlKVxuICAgICAgICBoaWRlQmxvY2suY2xhc3NMaXN0LmFkZChoaWRlQ2xhc3MpXG4gICAgICAgIGlmKCF1c2VyU3RhdHVzKXtcbiAgICAgICAgICAgIGhpZGVCbG9jay5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+e1xuICAgICAgICAgICAgICAgIHNob3dCbG9jay5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgICAgICAgICBzaG93QmxvY2suc3R5bGUuaGVpZ2h0ID0gaGlkZUJsb2NrLmNsaWVudEhlaWdodFxuICAgICAgICAgICAgICAgIGhpZGVCbG9jay5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHNob3dSZXN1bHRCbG9jayhzaG93QmxvY2ssIHNob3dDbGFzcylcbiAgICAgICAgICAgICAgICB9LCA1MClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2hvd0Jsb2NrLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAgICAgc2hvd0Jsb2NrLnN0eWxlLmhlaWdodCA9IGhpZGVCbG9jay5jbGllbnRIZWlnaHRcbiAgICAgICAgICAgIGhpZGVCbG9jay5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgc2hvd1Jlc3VsdEJsb2NrKHNob3dCbG9jaywgc2hvd0NsYXNzKVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93UmVzdWx0QmxvY2soc2hvd0Jsb2NrLCBzaG93Q2xhc3Mpe1xuICAgICAgICBzaG93QmxvY2suY2xhc3NMaXN0LmFkZChzaG93Q2xhc3MpXG4gICAgICAgIHNob3dCbG9jay5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIlxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgbGV0IGl0ZW1zID0gc2hvd0Jsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVzdWx0X19iZXRzLWl0ZW1cIilcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+e1xuICAgICAgICAgICAgICAgIGlmKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwieW91XCIpKXtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB5b3UgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0X19iZXRzLXlvdVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0X19idG5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHlvdS5jbGFzc0xpc3QuYWRkKCdzaG93WW91JylcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJzaG93QnRuXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDApXG4gICAgICAgICAgICAgICAgICAgIH0sIDI3MDApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcInNob3dJdGVtXCIpXG4gICAgICAgICAgICAgICAgfSwgMjUwICogaXRlbXMubGVuZ3RoIC0gaSAqIDI1MClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy9mb3IgdGVzdFxuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpLFxuICAgICAgICBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRlc3RcIiksXG4gICAgICAgIGVhc3lCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVhc3lcIiksXG4gICAgICAgIG1lZGl1bUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVkaXVtXCIpLFxuICAgICAgICBoaWdodEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlnaHRcIiksXG4gICAgICAgIG5vU3RhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdC1qb2luXCIpLFxuICAgICAgICBkYXJrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXJrXCIpXG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VTdGF0ZVBhZ2UgKGJ0biwgc3RhdGUpe1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NOYW1lID0gXCJmYXYtcGFnZVwiXG4gICAgICAgICAgICBpZihzdGF0ZSl7XG4gICAgICAgICAgICAgICAgdG9nZ2xlQmxvY2tzKGNob3NlQmxvY2ssIFwiY2hvc2VIaWRlXCIsIHJlc3VsdEJsb2NrLCBcInJlc3VsdFNob3dcIiwgc3RhdGUsIHVzZXJTdGF0dXMpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBjaGFuZ2VTdGF0ZVBhZ2UoZWFzeUJ0biwgXCJfZWFzeVwiKVxuICAgIGNoYW5nZVN0YXRlUGFnZShtZWRpdW1CdG4sIFwiX21lZGl1bVwiKVxuICAgIGNoYW5nZVN0YXRlUGFnZShoaWdodEJ0biwgXCJfaGlnaHRcIilcblxuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpXG4gICAgfSlcblxuICAgIGRhcmtCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpXG4gICAgfSlcblxuICAgIC8vIGNoYW5nZVN0YXRlUGFnZShub1N0YXRlQnRuLCBmYWxzZSlcbn0pKCk7Il19
