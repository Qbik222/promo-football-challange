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
  var i18nData = {};
  var translateState = true;
  var userId;
  userId = 100300268;
  function init() {
    if (window.store) {
      var state = window.store.getState();
      userId = state.auth.isAuthorized && state.auth.id || '';
      checkUserAuth();
    } else {
      checkUserAuth();
      var c = 0;
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
      dateContainer.classList.add('hide');
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
    var spinItem = document.querySelector('.spins-row');
    var noSpinItem = document.querySelector('.no-spins');

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
  startCountdown('.welcome__timer', '2025-01-30T23:59:59');
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

  //test

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
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwb3B1cHNXcmFwIiwic2hvd1BvcHVwQnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwb3B1cEl0ZW1zIiwiY2hvc2VCbG9jayIsInJlc3VsdEJsb2NrIiwidW5hdXRoTXNncyIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImNob3NlQ2FyZHMiLCJ1a0xlbmciLCJlbkxlbmciLCJkaWZmaWN1bHRzIiwibW9kZU1hcCIsImxvY2FsZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImRlYnVnIiwiaTE4bkRhdGEiLCJ0cmFuc2xhdGVTdGF0ZSIsInVzZXJJZCIsImluaXQiLCJ3aW5kb3ciLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJjaGVja1VzZXJBdXRoIiwiYyIsImkiLCJzZXRJbnRlcnZhbCIsImdfdXNlcl9pZCIsImNsZWFySW50ZXJ2YWwiLCJwYXJ0aWNpcGF0ZSIsIm1vZGUiLCJwYXJhbXMiLCJ1c2VyaWQiLCJyZXF1ZXN0IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwiZm9yRWFjaCIsIml0ZW0iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjc3MiLCJ0b2dnbGVCbG9ja3MiLCJsb2FkVHJhbnNsYXRpb25zIiwiZmV0Y2giLCJqc29uIiwidHJhbnNsYXRlIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJlbGVtcyIsImxlbmd0aCIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwidHJhbnNsYXRlS2V5IiwiZGVmYXVsdFZhbCIsImRpc3BsYXlVc2VySW5mbyIsInVzZXJJbmZvIiwiYmV0cyIsInNsaWNlIiwicmVmcmVzaEJldHMiLCJkaXNwbGF5QmV0c0hpc3RvcnkiLCJyZWZyZXNoTGFzdFVwZGF0ZWREYXRlIiwiZGF0ZUNvbnRhaW5lciIsInNwYW4iLCJnZXRFbGVtZW50QnlJZCIsImxhc3RVcGRhdGUiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImxvY2FsRGF0ZSIsIkRhdGUiLCJkYXkiLCJTdHJpbmciLCJnZXREYXRlIiwicGFkU3RhcnQiLCJtb250aCIsImdldE1vbnRoIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiZGl2cyIsImVsZW1lbnQiLCJiZXQiLCJzdGF0dXMiLCJzcGluSXRlbSIsIm5vU3Bpbkl0ZW0iLCJyZXNvbHZlU3RhdHVzVHJhbnNsYXRpb24iLCJiYXNlQ3NzQ2xhc3MiLCJsYW5nIiwibGluayIsImV4dHJhT3B0aW9ucyIsImhlYWRlcnMiLCJ1bmF1dGhNZXMiLCJpbml0Q2hvb3NlQ2FyZHMiLCJwYXJ0aWNpcGF0ZUJ0biIsIlByb21pc2UiLCJyZXNvbHZlIiwiaW5pdGVkIiwiY2FyZHMiLCJjYXJkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJjb250YWlucyIsInNldFBvcHVwIiwid3JhcCIsInBvcHVwTmFtZSIsImJ0bnMiLCJwb3B1cCIsImNsb3NlUG9wdXAiLCJzdHlsZSIsIm92ZXJmbG93IiwiYnRuIiwicGFyZW50Tm9kZSIsInByZXZlbnREZWZhdWx0IiwiY2xvc2VCdG4iLCJzdGFydENvdW50ZG93biIsInNlbGVjdG9yIiwiZW5kRGF0ZSIsImVsZW1lbnRzIiwiZXJyb3IiLCJ0YXJnZXREYXRlIiwiZ2V0VGltZSIsInVwZGF0ZVRpbWVyIiwibm93IiwidGltZUxlZnQiLCJpbnRlcnZhbElkIiwic2V0VGltZXJWYWx1ZXMiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwic2Vjb25kcyIsInZhbHVlcyIsInZhbHVlIiwiaW5kZXgiLCJ0ZXh0Q29udGVudCIsIm1vbml0b3JWaXNpYmlsaXR5IiwiYW5pbWF0aW9uIiwiZGVsYXkiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJzZXRUaW1lb3V0Iiwib2JzZXJ2ZSIsImhpZGVCbG9jayIsImhpZGVDbGFzcyIsInNob3dCbG9jayIsInNob3dDbGFzcyIsImFuaW1hdGUiLCJkcm9wcyIsImRpc3BsYXkiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzaG93UmVzdWx0QmxvY2siLCJpdGVtcyIsInlvdSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxDQUFDLFlBQVk7RUFDVCxJQUFNQSxNQUFNLEdBQUcsK0NBQStDO0VBRTlELElBQU1DLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQ2hEQyxVQUFVLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUM3Q0UsYUFBYSxHQUFHSCxRQUFRLENBQUNJLGdCQUFnQixDQUFDLFlBQVksQ0FBQztJQUN2REMsVUFBVSxHQUFHTCxRQUFRLENBQUNJLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztJQUN0REUsVUFBVSxHQUFHTixRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDN0NNLFdBQVcsR0FBR1AsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQy9DTyxVQUFVLEdBQUdSLFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0lBQ3JESyxlQUFlLEdBQUdULFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBQ3hETSxZQUFZLEdBQUdWLFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBQ3JETyxVQUFVLEdBQUdYLFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUMsY0FBYyxDQUFDO0VBRTFELElBQU1RLE1BQU0sR0FBR1osUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0VBQ2hELElBQU1ZLE1BQU0sR0FBR2IsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0VBRWhELElBQU1hLFVBQVUsR0FBRyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDO0VBQ2pELElBQU1DLE9BQU8sR0FBRztJQUFDLFFBQVEsRUFBRSxPQUFPO0lBQUUsYUFBYSxFQUFFLFNBQVM7SUFBRSxRQUFRLEVBQUUsUUFBUTtJQUFFLE9BQU8sRUFBRSxRQUFRO0lBQUUsU0FBUyxFQUFFLGFBQWE7SUFBRSxRQUFRLEVBQUU7RUFBUSxDQUFDO0VBRWxKLElBQUlDLE1BQU0sR0FBR0MsY0FBYyxDQUFDQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUdELGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUk7RUFHdkYsSUFBSU4sTUFBTSxFQUFFSSxNQUFNLEdBQUcsSUFBSTtFQUN6QixJQUFJSCxNQUFNLEVBQUVHLE1BQU0sR0FBRyxJQUFJO0VBRXpCLElBQUlHLEtBQUssR0FBRyxJQUFJO0VBRWhCLElBQUlDLFFBQVEsR0FBRyxDQUFDLENBQUM7RUFDakIsSUFBTUMsY0FBYyxHQUFHLElBQUk7RUFDM0IsSUFBSUMsTUFBTTtFQUNWQSxNQUFNLEdBQUcsU0FBUztFQUVsQixTQUFTQyxJQUFJLEdBQUc7SUFDWixJQUFJQyxNQUFNLENBQUNDLEtBQUssRUFBRTtNQUNkLElBQUlDLEtBQUssR0FBR0YsTUFBTSxDQUFDQyxLQUFLLENBQUNFLFFBQVEsRUFBRTtNQUNuQ0wsTUFBTSxHQUFHSSxLQUFLLENBQUNFLElBQUksQ0FBQ0MsWUFBWSxJQUFJSCxLQUFLLENBQUNFLElBQUksQ0FBQ0UsRUFBRSxJQUFJLEVBQUU7TUFDdkRDLGFBQWEsRUFBRTtJQUNuQixDQUFDLE1BQU07TUFDSEEsYUFBYSxFQUFFO01BQ2YsSUFBSUMsQ0FBQyxHQUFHLENBQUM7TUFDVCxJQUFJQyxDQUFDLEdBQUdDLFdBQVcsQ0FBQyxZQUFZO1FBQzVCLElBQUlGLENBQUMsR0FBRyxFQUFFLEVBQUU7VUFDUixJQUFJLENBQUMsQ0FBQ1IsTUFBTSxDQUFDVyxTQUFTLEVBQUU7WUFDcEJiLE1BQU0sR0FBR0UsTUFBTSxDQUFDVyxTQUFTO1lBQ3pCSixhQUFhLEVBQUU7WUFDZkssYUFBYSxDQUFDSCxDQUFDLENBQUM7VUFDcEI7UUFDSixDQUFDLE1BQU07VUFDSEcsYUFBYSxDQUFDSCxDQUFDLENBQUM7UUFDcEI7TUFDSixDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ1g7RUFDSjtFQUVBLFNBQVNJLFdBQVcsQ0FBQ0MsSUFBSSxFQUFFO0lBQ3ZCLElBQUksQ0FBQ2hCLE1BQU0sSUFBSSxDQUFDZ0IsSUFBSSxFQUFFO01BQ2xCO0lBQ0o7SUFFQSxJQUFNQyxNQUFNLEdBQUc7TUFBQ0MsTUFBTSxFQUFFbEIsTUFBTTtNQUFFZ0IsSUFBSSxFQUFKQTtJQUFJLENBQUM7SUFDckNHLE9BQU8sQ0FBQyxPQUFPLEVBQUU7TUFDYkMsTUFBTSxFQUFFLE1BQU07TUFDZEMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ04sTUFBTTtJQUMvQixDQUFDLENBQUMsQ0FBQ08sSUFBSSxDQUFDLFVBQUFDLEdBQUcsRUFBSTtNQUNYdEMsZUFBZSxDQUFDdUMsT0FBTyxDQUFDLFVBQUFDLElBQUk7UUFBQSxPQUFJQSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUFBLEVBQUM7TUFDM0R6QyxZQUFZLENBQUNzQyxPQUFPLENBQUMsVUFBQUMsSUFBSTtRQUFBLE9BQUlBLElBQUksQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDO01BQUEsRUFBQztNQUMzRCxJQUFNQyxHQUFHLEdBQUd0QyxPQUFPLENBQUN1QixJQUFJLENBQUM7TUFDekJnQixZQUFZLENBQUNoRCxVQUFVLEVBQUUsV0FBVyxFQUFFQyxXQUFXLEVBQUUsWUFBWSxFQUFFOEMsR0FBRyxFQUFFLElBQUksQ0FBQztJQUMvRSxDQUFDLENBQUM7RUFDTjtFQUVBLFNBQVNFLGdCQUFnQixHQUFHO0lBQ3hCLE9BQU9DLEtBQUssV0FBSTFELE1BQU0seUJBQWVrQixNQUFNLEVBQUcsQ0FBQzhCLElBQUksQ0FBQyxVQUFBQyxHQUFHO01BQUEsT0FBSUEsR0FBRyxDQUFDVSxJQUFJLEVBQUU7SUFBQSxFQUFDLENBQ2pFWCxJQUFJLENBQUMsVUFBQVcsSUFBSSxFQUFJO01BQ1ZyQyxRQUFRLEdBQUdxQyxJQUFJO01BQ2ZDLFNBQVMsRUFBRTtNQUVYLElBQUlDLGdCQUFnQixHQUFHLElBQUlDLGdCQUFnQixDQUFDLFVBQVVDLFNBQVMsRUFBRTtRQUM3REgsU0FBUyxFQUFFO01BQ2YsQ0FBQyxDQUFDO0lBRU4sQ0FBQyxDQUFDO0VBQ1Y7RUFFQSxTQUFTQSxTQUFTLEdBQUc7SUFDakIsSUFBTUksS0FBSyxHQUFHOUQsUUFBUSxDQUFDSSxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQztJQUMzRCxJQUFJMEQsS0FBSyxJQUFJQSxLQUFLLENBQUNDLE1BQU0sRUFBRTtNQUN2QixJQUFHMUMsY0FBYyxFQUFDO1FBQ2R5QyxLQUFLLENBQUNkLE9BQU8sQ0FBQyxVQUFBZ0IsSUFBSSxFQUFJO1VBQ2xCLElBQU1DLEdBQUcsR0FBR0QsSUFBSSxDQUFDRSxZQUFZLENBQUMsZ0JBQWdCLENBQUM7VUFDL0NGLElBQUksQ0FBQ0csU0FBUyxHQUFHL0MsUUFBUSxDQUFDNkMsR0FBRyxDQUFDLElBQUksMENBQTBDLEdBQUdBLEdBQUc7VUFDbEZELElBQUksQ0FBQ0ksZUFBZSxDQUFDLGdCQUFnQixDQUFDO1FBQzFDLENBQUMsQ0FBQztNQUNOLENBQUMsTUFBSTtRQUNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztNQUNwQztJQUNKO0lBQ0EsSUFBSXRELE1BQU0sS0FBSyxJQUFJLEVBQUU7TUFDakJqQixRQUFRLENBQUNtRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDaEM7SUFDQW9CLHFCQUFxQixFQUFFO0VBQzNCO0VBRUEsU0FBU0MsWUFBWSxDQUFDUCxHQUFHLEVBQUVRLFVBQVUsRUFBRTtJQUNuQyxJQUFJLENBQUNSLEdBQUcsRUFBRTtNQUNOO0lBQ0o7SUFDQSxPQUFPN0MsUUFBUSxDQUFDNkMsR0FBRyxDQUFDLElBQUlRLFVBQVUsSUFBSSwwQ0FBMEMsR0FBR1IsR0FBRztFQUMxRjtFQUVBLFNBQVNTLGVBQWUsQ0FBQ0MsUUFBUSxFQUFFO0lBQy9CLElBQU1DLElBQUksR0FBR0QsUUFBUSxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ3ZDO0lBQ0FDLFdBQVcsQ0FBQ0YsSUFBSSxDQUFDO0lBQ2pCRyxrQkFBa0IsQ0FBQ0gsSUFBSSxDQUFDO0lBQ3hCSSxzQkFBc0IsQ0FBQ0wsUUFBUSxDQUFDO0VBQ3BDO0VBRUEsU0FBU0ssc0JBQXNCLENBQUNMLFFBQVEsRUFBRTtJQUN0QyxJQUFNTSxhQUFhLEdBQUdqRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztJQUNqRSxJQUFNaUYsSUFBSSxHQUFHbEYsUUFBUSxDQUFDbUYsY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUMvQyxJQUFJUixRQUFRLENBQUNTLFVBQVUsRUFBRTtNQUNyQkYsSUFBSSxDQUFDZixTQUFTLEdBQUdrQixVQUFVLENBQUNWLFFBQVEsQ0FBQ1MsVUFBVSxDQUFDO01BQ2hESCxhQUFhLENBQUMvQixTQUFTLENBQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDMUMsQ0FBQyxNQUFNO01BQ0g2QixhQUFhLENBQUMvQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDdkM7RUFDSjtFQUVBLFNBQVNrQyxVQUFVLENBQUNDLElBQUksRUFBRTtJQUN0QixJQUFNQyxTQUFTLEdBQUcsSUFBSUMsSUFBSSxDQUFDRixJQUFJLENBQUM7SUFDaEMsSUFBTUcsR0FBRyxHQUFHQyxNQUFNLENBQUNILFNBQVMsQ0FBQ0ksT0FBTyxFQUFFLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDeEQsSUFBTUMsS0FBSyxHQUFHSCxNQUFNLENBQUNILFNBQVMsQ0FBQ08sUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUNGLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQy9ELElBQU1HLEtBQUssR0FBR0wsTUFBTSxDQUFDSCxTQUFTLENBQUNTLFFBQVEsRUFBRSxDQUFDLENBQUNKLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQzNELElBQU1LLE9BQU8sR0FBR1AsTUFBTSxDQUFDSCxTQUFTLENBQUNXLFVBQVUsRUFBRSxDQUFDLENBQUNOLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQy9ELGlCQUFVSCxHQUFHLGNBQUlJLEtBQUssY0FBSUUsS0FBSyxjQUFJRSxPQUFPO0VBQzlDO0VBRUEsU0FBU25CLFdBQVcsQ0FBQ0YsSUFBSSxFQUFFO0lBQ3ZCLElBQU11QixJQUFJLEdBQUduRyxRQUFRLENBQUNJLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDO0lBQzVELEtBQUssSUFBSTZCLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRzJDLElBQUksQ0FBQ2IsTUFBTSxFQUFFOUIsQ0FBQyxFQUFFLEVBQUU7TUFDbEMsSUFBTW1FLE9BQU8sR0FBR0QsSUFBSSxDQUFDbEUsQ0FBQyxDQUFDO01BQ3ZCLElBQU1vRSxHQUFHLEdBQUd6QixJQUFJLENBQUMzQyxDQUFDLENBQUM7TUFDbkJtRSxPQUFPLENBQUNsRCxTQUFTLENBQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUM7TUFDL0JnRCxPQUFPLENBQUNsRCxTQUFTLENBQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUM7TUFDakNnRCxPQUFPLENBQUNsRCxTQUFTLENBQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUM7TUFDakMsSUFBSWtELE1BQU0sR0FBRyxPQUFPO01BQ3BCLElBQUlELEdBQUcsQ0FBQ0MsTUFBTSxLQUFLLEtBQUssRUFBRTtRQUN0QkEsTUFBTSxHQUFHLE9BQU87TUFDcEIsQ0FBQyxNQUFNLElBQUksQ0FBQ0QsR0FBRyxDQUFDQyxNQUFNLElBQUlELEdBQUcsQ0FBQ0MsTUFBTSxLQUFLLFdBQVcsRUFBRTtRQUNsREEsTUFBTSxHQUFHLEtBQUs7TUFDbEI7TUFDQUYsT0FBTyxDQUFDbEQsU0FBUyxDQUFDQyxHQUFHLENBQUNtRCxNQUFNLENBQUM7SUFDakM7RUFDSjtFQUVBLFNBQVN2QixrQkFBa0IsQ0FBQ0gsSUFBSSxFQUFFO0lBQzlCLElBQU0yQixRQUFRLEdBQUd2RyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxZQUFZLENBQUM7SUFDckQsSUFBTXVHLFVBQVUsR0FBR3hHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQzs7SUFFdEQ7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFFRDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFDSDs7RUFFQSxTQUFTd0csd0JBQXdCLENBQUNILE1BQU0sRUFBRTtJQUN0QyxJQUFJLENBQUNBLE1BQU0sSUFBSUEsTUFBTSxLQUFLLFdBQVcsRUFBRTtNQUNuQyxPQUFPOUIsWUFBWSxDQUFDLGNBQWMsQ0FBQztJQUN2QztJQUNBLElBQUk4QixNQUFNLEtBQUssS0FBSyxFQUFFO01BQ2xCLE9BQU85QixZQUFZLENBQUMsUUFBUSxDQUFDO0lBQ2pDO0lBQ0EsSUFBSThCLE1BQU0sS0FBSyxNQUFNLEVBQUU7TUFDbkIsT0FBTzlCLFlBQVksQ0FBQyxTQUFTLENBQUM7SUFDbEM7RUFDSjtFQUVBLFNBQVNELHFCQUFxQixDQUFDNkIsT0FBTyxFQUFFTSxZQUFZLEVBQUU7SUFDbEQsSUFBSSxDQUFDTixPQUFPLEVBQUU7TUFDVjtJQUNKO0lBQ0Esd0JBQW1CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQywwQkFBRTtNQUE1QixJQUFNTyxJQUFJO01BQ1hQLE9BQU8sQ0FBQ2xELFNBQVMsQ0FBQ0UsTUFBTSxDQUFDc0QsWUFBWSxHQUFHQyxJQUFJLENBQUM7SUFDakQ7SUFDQVAsT0FBTyxDQUFDbEQsU0FBUyxDQUFDQyxHQUFHLENBQUN1RCxZQUFZLEdBQUcxRixNQUFNLENBQUM7RUFDaEQ7RUFHQSxJQUFNeUIsT0FBTyxHQUFHLFNBQVZBLE9BQU8sQ0FBYW1FLElBQUksRUFBRUMsWUFBWSxFQUFFO0lBQzFDLE9BQU9yRCxLQUFLLENBQUMxRCxNQUFNLEdBQUc4RyxJQUFJO01BQ3RCRSxPQUFPLEVBQUU7UUFDTCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLGNBQWMsRUFBRTtNQUNwQjtJQUFDLEdBQ0dELFlBQVksSUFBSSxDQUFDLENBQUMsRUFDeEIsQ0FBQy9ELElBQUksQ0FBQyxVQUFBQyxHQUFHO01BQUEsT0FBSUEsR0FBRyxDQUFDVSxJQUFJLEVBQUU7SUFBQSxFQUFDO0VBQzlCLENBQUM7RUFFRCxTQUFTMUIsYUFBYSxHQUFHO0lBQ3JCLElBQUlULE1BQU0sRUFBRTtNQUFBLDJDQUNnQmQsVUFBVTtRQUFBO01BQUE7UUFBbEMsb0RBQW9DO1VBQUEsSUFBekJ1RyxTQUFTO1VBQ2hCQSxTQUFTLENBQUM3RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDbkM7TUFBQztRQUFBO01BQUE7UUFBQTtNQUFBO01BQ0QsT0FBT1YsT0FBTyxvQkFBYW5CLE1BQU0sZ0JBQWEsQ0FDekN3QixJQUFJLENBQUMsVUFBQUMsR0FBRyxFQUFJO1FBQ1QsSUFBSUEsR0FBRyxDQUFDUCxNQUFNLEVBQUU7VUFDWi9CLGVBQWUsQ0FBQ3VDLE9BQU8sQ0FBQyxVQUFBQyxJQUFJO1lBQUEsT0FBSUEsSUFBSSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7VUFBQSxFQUFDO1VBQzNEekMsWUFBWSxDQUFDc0MsT0FBTyxDQUFDLFVBQUFDLElBQUk7WUFBQSxPQUFJQSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQztVQUFBLEVBQUM7VUFFM0QsSUFBTUMsR0FBRyxHQUFHdEMsT0FBTyxDQUFDZ0MsR0FBRyxDQUFDVCxJQUFJLENBQUM7VUFDN0JnQixZQUFZLENBQUNoRCxVQUFVLEVBQUUsV0FBVyxFQUFFQyxXQUFXLEVBQUUsWUFBWSxFQUFFOEMsR0FBRyxFQUFFLEtBQUssQ0FBQztVQUM1RXFCLGVBQWUsQ0FBQzNCLEdBQUcsQ0FBQztRQUN4QixDQUFDLE1BQU07VUFDSGlFLGVBQWUsQ0FBQ3JHLFVBQVUsQ0FBQztVQUMzQkYsZUFBZSxDQUFDdUMsT0FBTyxDQUFDLFVBQUFDLElBQUk7WUFBQSxPQUFJQSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQztVQUFBLEVBQUM7VUFDOUQxQyxZQUFZLENBQUNzQyxPQUFPLENBQUMsVUFBQUMsSUFBSTtZQUFBLE9BQUlBLElBQUksQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDO1VBQUEsRUFBQztRQUMvRDtNQUNKLENBQUMsQ0FBQztJQUNWLENBQUMsTUFBTTtNQUNIO01BQUEsNENBQzJCM0MsZUFBZTtRQUFBO01BQUE7UUFBMUMsdURBQTRDO1VBQUEsSUFBbkN3RyxjQUFjO1VBQ25CQSxjQUFjLENBQUMvRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDeEM7TUFBQztRQUFBO01BQUE7UUFBQTtNQUFBO01BQUEsNENBQ3VCM0MsVUFBVTtRQUFBO01BQUE7UUFBbEMsdURBQW9DO1VBQUEsSUFBekJ1RyxVQUFTO1VBQ2hCQSxVQUFTLENBQUM3RCxTQUFTLENBQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDdEM7TUFBQztRQUFBO01BQUE7UUFBQTtNQUFBO01BQ0QsT0FBTzhELE9BQU8sQ0FBQ0MsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUNqQztFQUNKO0VBRUE1RCxnQkFBZ0IsRUFBRSxDQUNiVCxJQUFJLENBQUN2QixJQUFJLENBQUM7RUFFZixJQUFJNkYsTUFBTSxHQUFHLEtBQUs7RUFDbEIsU0FBU0osZUFBZSxDQUFDSyxLQUFLLEVBQUM7SUFDM0IsSUFBSUQsTUFBTSxFQUFFO01BQ1I7SUFDSjtJQUVBQyxLQUFLLENBQUNyRSxPQUFPLENBQUMsVUFBQXNFLElBQUksRUFBRztNQUNqQkEsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsQ0FBQyxFQUFJO1FBQ2pDLElBQUdBLENBQUMsQ0FBQ0MsTUFBTSxDQUFDdkUsU0FBUyxDQUFDd0UsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFDO1VBQ3hDO1FBQ0o7UUFDQSxLQUFLLElBQUl6RixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUduQixVQUFVLENBQUNpRCxNQUFNLEVBQUU5QixDQUFDLEVBQUUsRUFBRTtVQUN4QyxJQUFNZ0IsSUFBSSxHQUFHbkMsVUFBVSxDQUFDbUIsQ0FBQyxDQUFDO1VBQzFCLElBQUlxRixJQUFJLENBQUNwRSxTQUFTLENBQUN3RSxRQUFRLENBQUN6RSxJQUFJLENBQUMsRUFBRTtZQUMvQixJQUFNWCxJQUFJLEdBQUd2QixPQUFPLENBQUNrQyxJQUFJLENBQUM7WUFDMUJaLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDO1lBQ2pCO1VBQ0o7UUFDSjtNQUNKLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztJQUNGOEUsTUFBTSxHQUFHLElBQUk7RUFDakI7RUFFQSxTQUFTTyxRQUFRLENBQUNDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQUV6SCxVQUFVLEVBQUM7SUFDaEQsSUFBSTBILEtBQUssR0FBR0gsSUFBSSxDQUFDM0gsYUFBYSxZQUFLNEgsU0FBUyxFQUFHO0lBRS9DRCxJQUFJLENBQUNMLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDQyxDQUFDLEVBQUk7TUFDakNBLENBQUMsQ0FBQ0MsTUFBTSxLQUFLRyxJQUFJLEdBQUdJLFVBQVUsRUFBRSxHQUFHLElBQUk7SUFDM0MsQ0FBQyxDQUFDO0lBRUYsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQVUsR0FBUTtNQUNwQkQsS0FBSyxDQUFDN0UsU0FBUyxDQUFDRSxNQUFNLENBQUMsU0FBUyxDQUFDO01BQ2pDcEQsUUFBUSxDQUFDMkMsSUFBSSxDQUFDc0YsS0FBSyxDQUFDQyxRQUFRLEdBQUcsTUFBTTtNQUNyQ04sSUFBSSxDQUFDMUUsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO0lBQ2xDLENBQUM7SUFFRDJFLElBQUksQ0FBQzlFLE9BQU8sQ0FBQyxVQUFBbUYsR0FBRyxFQUFJO01BQ2hCLElBQUdBLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDQSxVQUFVLENBQUNsRixTQUFTLENBQUN3RSxRQUFRLENBQUNHLFNBQVMsQ0FBQyxFQUFDO1FBQ3ZETSxHQUFHLENBQUNDLFVBQVUsQ0FBQ2IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNDLENBQUMsRUFBSTtVQUMzQyxJQUFHQSxDQUFDLENBQUNDLE1BQU0sS0FBS1UsR0FBRyxFQUFDO1lBQ2hCWCxDQUFDLENBQUNhLGNBQWMsRUFBRTtVQUN0QjtRQUNKLENBQUMsQ0FBQztRQUNGRixHQUFHLENBQUNaLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO1VBQy9CbEgsVUFBVSxDQUFDMkMsT0FBTyxDQUFDLFVBQUFDLElBQUksRUFBRztZQUN0QkEsSUFBSSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxTQUFTLENBQUM7VUFDcEMsQ0FBQyxDQUFDO1VBQ0YyRSxLQUFLLENBQUM3RSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7VUFDOUJuRCxRQUFRLENBQUMyQyxJQUFJLENBQUNzRixLQUFLLENBQUNDLFFBQVEsR0FBRyxRQUFRO1VBQ3ZDTixJQUFJLENBQUMxRSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDckMsQ0FBQyxDQUFDO1FBQ0YsSUFBSWtGLFFBQVEsR0FBR1AsS0FBSyxDQUFDOUgsYUFBYSxDQUFDLGVBQWUsQ0FBQztRQUNuRHFJLFFBQVEsQ0FBQ2YsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7VUFDcENTLFVBQVUsRUFBRTtRQUNoQixDQUFDLENBQUM7TUFDTjtJQUNKLENBQUMsQ0FBQztFQUNOO0VBRUFMLFFBQVEsQ0FBQ3pILFVBQVUsRUFBRSxPQUFPLEVBQUVDLGFBQWEsRUFBRUUsVUFBVSxDQUFDO0VBQ3hEc0gsUUFBUSxDQUFDekgsVUFBVSxFQUFFLFNBQVMsRUFBRUMsYUFBYSxFQUFFRSxVQUFVLENBQUM7RUFDMURzSCxRQUFRLENBQUN6SCxVQUFVLEVBQUUsUUFBUSxFQUFFQyxhQUFhLEVBQUVFLFVBQVUsQ0FBQztFQUN6RHNILFFBQVEsQ0FBQ3pILFVBQVUsRUFBRSxTQUFTLEVBQUVDLGFBQWEsRUFBRUUsVUFBVSxDQUFDO0VBRTFELFNBQVNrSSxjQUFjLENBQUNDLFFBQVEsRUFBRUMsT0FBTyxFQUFFO0lBQ3ZDLElBQU1DLFFBQVEsR0FBRzFJLFFBQVEsQ0FBQ0ksZ0JBQWdCLFdBQUlvSSxRQUFRLCtCQUE0QjtJQUNsRixJQUFJRSxRQUFRLENBQUMzRSxNQUFNLEtBQUssQ0FBQyxFQUFFO01BQ3ZCTSxPQUFPLENBQUNzRSxLQUFLLENBQUMsbUJBQW1CLENBQUM7TUFDbEM7SUFDSjtJQUVBLElBQU1DLFVBQVUsR0FBRyxJQUFJcEQsSUFBSSxDQUFDaUQsT0FBTyxDQUFDLENBQUNJLE9BQU8sRUFBRTtJQUU5QyxTQUFTQyxXQUFXLEdBQUc7TUFDbkIsSUFBTUMsR0FBRyxHQUFHLElBQUl2RCxJQUFJLEVBQUUsQ0FBQ3FELE9BQU8sRUFBRTtNQUNoQyxJQUFNRyxRQUFRLEdBQUdKLFVBQVUsR0FBR0csR0FBRztNQUVqQyxJQUFJQyxRQUFRLElBQUksQ0FBQyxFQUFFO1FBQ2Y1RyxhQUFhLENBQUM2RyxVQUFVLENBQUM7UUFDekJDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVCO01BQ0o7TUFFQSxJQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDTCxRQUFRLElBQUksSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7TUFDekQsSUFBTWpELEtBQUssR0FBR3FELElBQUksQ0FBQ0MsS0FBSyxDQUFFTCxRQUFRLElBQUksSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUssSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztNQUMvRSxJQUFNL0MsT0FBTyxHQUFHbUQsSUFBSSxDQUFDQyxLQUFLLENBQUVMLFFBQVEsSUFBSSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFLLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztNQUN2RSxJQUFNTSxPQUFPLEdBQUdGLElBQUksQ0FBQ0MsS0FBSyxDQUFFTCxRQUFRLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFJLElBQUksQ0FBQztNQUUzREUsY0FBYyxDQUFDLENBQUNDLElBQUksRUFBRXBELEtBQUssRUFBRUUsT0FBTyxFQUFFcUQsT0FBTyxDQUFDLENBQUM7SUFDbkQ7SUFFQSxTQUFTSixjQUFjLENBQUNLLE1BQU0sRUFBRTtNQUM1QkEsTUFBTSxDQUFDdkcsT0FBTyxDQUFDLFVBQUN3RyxLQUFLLEVBQUVDLEtBQUssRUFBSztRQUM3QmYsUUFBUSxDQUFDZSxLQUFLLENBQUMsQ0FBQ0MsV0FBVyxHQUFHRixLQUFLLEdBQUcsRUFBRSxjQUFPQSxLQUFLLElBQUtBLEtBQUs7TUFDbEUsQ0FBQyxDQUFDO0lBQ047SUFFQVYsV0FBVyxFQUFFO0lBQ2IsSUFBTUcsVUFBVSxHQUFHL0csV0FBVyxDQUFDNEcsV0FBVyxFQUFFLElBQUksQ0FBQztFQUNyRDtFQUVBUCxjQUFjLENBQUMsaUJBQWlCLEVBQUUscUJBQXFCLENBQUM7RUFFeEQsU0FBU29CLGlCQUFpQixDQUFDbkIsUUFBUSxFQUFFb0IsU0FBUyxFQUFFQyxLQUFLLEVBQUU7SUFDbkQsSUFBTXpELE9BQU8sR0FBR3BHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDdUksUUFBUSxDQUFDO0lBRWhELElBQUksQ0FBQ3BDLE9BQU8sRUFBRTtNQUNWL0IsT0FBTyxDQUFDc0UsS0FBSyxDQUFDLG9CQUFvQixDQUFDO01BQ25DO0lBQ0o7SUFFQSxJQUFNbUIsUUFBUSxHQUFHLElBQUlDLG9CQUFvQixDQUFDLFVBQUNDLE9BQU8sRUFBSztNQUNuREEsT0FBTyxDQUFDaEgsT0FBTyxDQUFDLFVBQUNpSCxLQUFLLEVBQUs7UUFDdkIsSUFBSUEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7VUFDdEJDLFVBQVUsQ0FBQyxZQUFLO1lBQ1ovRCxPQUFPLENBQUNsRCxTQUFTLENBQUNDLEdBQUcsQ0FBQ3lHLFNBQVMsQ0FBQztVQUNwQyxDQUFDLEVBQUVDLEtBQUssQ0FBQztRQUNiO01BQ0osQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0lBRUZDLFFBQVEsQ0FBQ00sT0FBTyxDQUFDaEUsT0FBTyxDQUFDO0VBQzdCO0VBRUF1RCxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztFQUNqREEsaUJBQWlCLENBQUMscUJBQXFCLEVBQUUsZUFBZSxFQUFFLElBQUksQ0FBQztFQUMvREEsaUJBQWlCLENBQUMsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztFQUMzREEsaUJBQWlCLENBQUMsb0JBQW9CLEVBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQztFQUN4REEsaUJBQWlCLENBQUMsc0JBQXNCLEVBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQztFQUMxREEsaUJBQWlCLENBQUMscUJBQXFCLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQztFQUcxRCxTQUFTckcsWUFBWSxDQUFDK0csU0FBUyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFOUksS0FBSyxFQUFFK0ksT0FBTyxFQUFDO0lBQzdFMUssUUFBUSxDQUFDbUQsU0FBUyxDQUFDQyxHQUFHLENBQUN6QixLQUFLLEVBQUVWLE1BQU0sQ0FBQztJQUNyQ3FKLFNBQVMsQ0FBQ25ILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDbUgsU0FBUyxDQUFDO0lBQ2xDLElBQUlJLEtBQUssR0FBR0gsU0FBUyxDQUFDbkssZ0JBQWdCLENBQUMsT0FBTyxDQUFDO0lBQy9Dc0ssS0FBSyxDQUFDMUgsT0FBTyxDQUFDLFVBQUFDLElBQUksRUFBRztNQUNqQm5DLFVBQVUsQ0FBQ2tDLE9BQU8sQ0FBQyxVQUFBdEIsS0FBSyxFQUFHO1FBQ3ZCdUIsSUFBSSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQzFCLEtBQUssQ0FBQztNQUNoQyxDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7SUFDRmdKLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ3hILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDekIsS0FBSyxDQUFDO0lBQzdCLElBQUcrSSxPQUFPLEVBQUM7TUFDUEosU0FBUyxDQUFDOUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLFlBQUs7UUFFNUNnRCxTQUFTLENBQUN0QyxLQUFLLENBQUMwQyxPQUFPLEdBQUcsTUFBTTtRQUNoQ0osU0FBUyxDQUFDdEMsS0FBSyxDQUFDMkMsTUFBTSxHQUFHUCxTQUFTLENBQUNRLFlBQVk7UUFDL0NSLFNBQVMsQ0FBQ25ILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUMvQmdILFVBQVUsQ0FBQyxZQUFLO1VBQ1pXLGVBQWUsQ0FBQ1AsU0FBUyxFQUFFQyxTQUFTLENBQUM7UUFDekMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztNQUNWLENBQUMsQ0FBQztJQUNOLENBQUMsTUFBSTtNQUNERCxTQUFTLENBQUN0QyxLQUFLLENBQUMwQyxPQUFPLEdBQUcsTUFBTTtNQUNoQ0osU0FBUyxDQUFDdEMsS0FBSyxDQUFDMkMsTUFBTSxHQUFHUCxTQUFTLENBQUNRLFlBQVk7TUFDL0NSLFNBQVMsQ0FBQ25ILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUMvQjJILGVBQWUsQ0FBQ1AsU0FBUyxFQUFFQyxTQUFTLENBQUM7SUFDekM7RUFFSjtFQUVBLFNBQVNNLGVBQWUsQ0FBQ1AsU0FBUyxFQUFFQyxTQUFTLEVBQUM7SUFDMUNELFNBQVMsQ0FBQ3JILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDcUgsU0FBUyxDQUFDO0lBQ2xDRCxTQUFTLENBQUN0QyxLQUFLLENBQUMyQyxNQUFNLEdBQUcsTUFBTTtJQUMvQlQsVUFBVSxDQUFDLFlBQUs7TUFDWixJQUFJWSxLQUFLLEdBQUdSLFNBQVMsQ0FBQ25LLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDO01BQzVEMkssS0FBSyxDQUFDL0gsT0FBTyxDQUFDLFVBQUNDLElBQUksRUFBRWhCLENBQUMsRUFBSTtRQUN0QixJQUFHZ0IsSUFBSSxDQUFDQyxTQUFTLENBQUN3RSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUM7VUFDOUJ5QyxVQUFVLENBQUMsWUFBSztZQUNaLElBQUlhLEdBQUcsR0FBRy9ILElBQUksQ0FBQ2hELGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztZQUNqRCtLLEdBQUcsQ0FBQzlILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztVQUNoQyxDQUFDLEVBQUUsSUFBSSxDQUFDO1FBQ1o7UUFDQWdILFVBQVUsQ0FBQyxZQUFLO1VBQ1osSUFBSXJDLElBQUksR0FBRzlILFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUMsY0FBYyxDQUFDO1VBQ3BEMEgsSUFBSSxDQUFDOUUsT0FBTyxDQUFDLFVBQUFtRixHQUFHLEVBQUc7WUFDZkEsR0FBRyxDQUFDakYsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO1VBQ2hDLENBQUMsQ0FBQztRQUNOLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDUmdILFVBQVUsQ0FBQyxZQUFLO1VBQ1psSCxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztRQUNsQyxDQUFDLEVBQUUsR0FBRyxHQUFHNEgsS0FBSyxDQUFDaEgsTUFBTSxHQUFHOUIsQ0FBQyxHQUFHLEdBQUcsQ0FBQztNQUNwQyxDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTjs7RUFFQTs7RUFFQWpDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDc0gsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7SUFDaEV6RyxVQUFVLENBQUNrQyxPQUFPLENBQUMsVUFBQUssR0FBRyxFQUFHO01BQ3JCdEQsUUFBUSxDQUFDbUQsU0FBUyxDQUFDRSxNQUFNLENBQUNDLEdBQUcsQ0FBQztJQUNsQyxDQUFDLENBQUM7SUFFRkMsWUFBWSxDQUFDaEQsVUFBVSxFQUFFLFdBQVcsRUFBRUMsV0FBVyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDO0VBQ3BGLENBQUMsQ0FBQztFQUNGUCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQ3NILGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO0lBQy9EekcsVUFBVSxDQUFDa0MsT0FBTyxDQUFDLFVBQUFLLEdBQUcsRUFBRztNQUNyQnRELFFBQVEsQ0FBQ21ELFNBQVMsQ0FBQ0UsTUFBTSxDQUFDQyxHQUFHLENBQUM7SUFDbEMsQ0FBQyxDQUFDO0lBQ0ZDLFlBQVksQ0FBQ2hELFVBQVUsRUFBRSxXQUFXLEVBQUVDLFdBQVcsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQztFQUNuRixDQUFDLENBQUM7RUFDRlAsUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUNzSCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSztJQUNqRXpHLFVBQVUsQ0FBQ2tDLE9BQU8sQ0FBQyxVQUFBSyxHQUFHLEVBQUc7TUFDckJ0RCxRQUFRLENBQUNtRCxTQUFTLENBQUNFLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDO0lBQ2xDLENBQUMsQ0FBQztJQUNGQyxZQUFZLENBQUNoRCxVQUFVLEVBQUUsV0FBVyxFQUFFQyxXQUFXLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUM7RUFDckYsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfZm9vdGJhbGxfY2hhbGxlbmdlXzInXG5cbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4gICAgICAgIHBvcHVwc1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpLFxuICAgICAgICBzaG93UG9wdXBCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbmZvLWljb25cIiksXG4gICAgICAgIHBvcHVwSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19pdGVtXCIpLFxuICAgICAgICBjaG9zZUJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaG9zZVwiKSxcbiAgICAgICAgcmVzdWx0QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdFwiKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0bicpLFxuICAgICAgICByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWpvaW4nKSxcbiAgICAgICAgY2hvc2VDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hvc2VfX2NhcmRcIilcblxuICAgIGNvbnN0IHVrTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1a0xlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBjb25zdCBkaWZmaWN1bHRzID0gW1wiX2Vhc3lcIiwgXCJfbWVkaXVtXCIsIFwiX2hpZ2h0XCJdO1xuICAgIGNvbnN0IG1vZGVNYXAgPSB7XCJub3ZpY2VcIjogXCJfZWFzeVwiLCBcImV4cGVyaWVuY2VkXCI6IFwiX21lZGl1bVwiLCBcImluc2FuZVwiOiBcIl9oaWdodFwiLCBcIl9lYXN5XCI6IFwibm92aWNlXCIsIFwiX21lZGl1bVwiOiBcImV4cGVyaWVuY2VkXCIsIFwiX2hpZ2h0XCI6IFwiaW5zYW5lXCJ9O1xuXG4gICAgbGV0IGxvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgPyBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpIDogXCJ1a1wiXG5cblxuICAgIGlmICh1a0xlbmcpIGxvY2FsZSA9ICd1ayc7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuICAgIGxldCBkZWJ1ZyA9IHRydWVcblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gdHJ1ZTtcbiAgICBsZXQgdXNlcklkO1xuICAgIHVzZXJJZCA9IDEwMDMwMDI2OFxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICAgICAgbGV0IGMgPSAwO1xuICAgICAgICAgICAgdmFyIGkgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGMgPCA1MCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoISF3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKG1vZGUpIHtcbiAgICAgICAgaWYgKCF1c2VySWQgfHwgIW1vZGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt1c2VyaWQ6IHVzZXJJZCwgbW9kZX07XG4gICAgICAgIHJlcXVlc3QoJy91c2VyJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICBjb25zdCBjc3MgPSBtb2RlTWFwW21vZGVdO1xuICAgICAgICAgICAgdG9nZ2xlQmxvY2tzKGNob3NlQmxvY2ssIFwiY2hvc2VIaWRlXCIsIHJlc3VsdEJsb2NrLCBcInJlc3VsdFNob3dcIiwgY3NzLCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke2FwaVVSTH0vdHJhbnNsYXRlcy8ke2xvY2FsZX1gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29yayFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYWxlID09PSAnZW4nKSB7XG4gICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdlbicpO1xuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZUtleShrZXksIGRlZmF1bHRWYWwpIHtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaTE4bkRhdGFba2V5XSB8fCBkZWZhdWx0VmFsIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlckluZm8odXNlckluZm8pIHtcbiAgICAgICAgY29uc3QgYmV0cyA9IHVzZXJJbmZvLmJldHMuc2xpY2UoMCwgMTApO1xuICAgICAgICAvLyBsZXQgYmV0cyA9IFt7YmV0RGF0ZTogbmV3IERhdGUoKSwgc3RhdHVzOiAndW5kZWZpbmVkJ31dXG4gICAgICAgIHJlZnJlc2hCZXRzKGJldHMpO1xuICAgICAgICBkaXNwbGF5QmV0c0hpc3RvcnkoYmV0cyk7XG4gICAgICAgIHJlZnJlc2hMYXN0VXBkYXRlZERhdGUodXNlckluZm8pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMYXN0VXBkYXRlZERhdGUodXNlckluZm8pIHtcbiAgICAgICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRfX2xhc3QtdXBkJyk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFzdFVwZCcpO1xuICAgICAgICBpZiAodXNlckluZm8ubGFzdFVwZGF0ZSkge1xuICAgICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSBmb3JtYXREYXRlKHVzZXJJbmZvLmxhc3RVcGRhdGUpO1xuICAgICAgICAgICAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuICAgICAgICBjb25zdCBsb2NhbERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgY29uc3QgZGF5ID0gU3RyaW5nKGxvY2FsRGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gU3RyaW5nKGxvY2FsRGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgaG91cnMgPSBTdHJpbmcobG9jYWxEYXRlLmdldEhvdXJzKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBTdHJpbmcobG9jYWxEYXRlLmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgcmV0dXJuIGAke2RheX0uJHttb250aH0gJHtob3Vyc306JHttaW51dGVzfWA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaEJldHMoYmV0cykge1xuICAgICAgICBjb25zdCBkaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3VsdF9fYmV0cy1pdGVtJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRpdnNbaV07XG4gICAgICAgICAgICBjb25zdCBiZXQgPSBiZXRzW2ldO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd5b3UnKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnX2RvbmUnKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnX2ZhaWwnKTtcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSAnX2ZhaWwnO1xuICAgICAgICAgICAgaWYgKGJldC5zdGF0dXMgPT09ICd3aW4nKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzID0gJ19kb25lJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWJldC5zdGF0dXMgfHwgYmV0LnN0YXR1cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSAneW91JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChzdGF0dXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheUJldHNIaXN0b3J5KGJldHMpIHtcbiAgICAgICAgY29uc3Qgc3Bpbkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BpbnMtcm93Jyk7XG4gICAgICAgIGNvbnN0IG5vU3Bpbkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm8tc3BpbnMnKTtcblxuICAgICAgICAvLyBjb25zdCBub0JldHMgPSAhYmV0cyB8fCBiZXRzLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gaWYgKG5vQmV0cyAmJiAhZGVidWcpIHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKG5vQmV0cywgZGVidWcpXG4gICAgICAgIC8vICAgICBzcGluSXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIC8vICAgICBub1NwaW5JdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgLy8gICAgIHJldHVybjtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgLy8gIHNwaW5JdGVtLmlubmVySFRNTCA9XG4gICAgICAgLy8gICAgICBgXG4gICAgICAgLy8gPGRpdiBjbGFzcz1cInNwaW5zLXJvdy1oZWFkXCI+XG4gICAgICAgLy8gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1kYXRlXCIgZGF0YS10cmFuc2xhdGU9XCJteVNwaW5zRGF0ZVwiPjwvZGl2PlxuICAgICAgIC8vICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtcHJpemVcIiBkYXRhLXRyYW5zbGF0ZT1cIm15U3BpbnNQcml6ZVwiPjwvZGl2PlxuICAgICAgIC8vICA8L2Rpdj5cbiAgICAgICAvLyAgYDtcbiAgICAgICAvLyAgc3Bpbkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgIC8vICBub1NwaW5JdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAvL1xuICAgICAgIC8vICBsZXQgdXBkID0gMDtcbiAgICAgICAvLyAgYmV0cy5mb3JFYWNoKHNwaW4gPT4ge1xuICAgICAgIC8vICAgICAgY29uc3Qgc3BpbkRhdGUgPSBuZXcgRGF0ZShzcGluLmJldERhdGUpO1xuICAgICAgIC8vICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IHNwaW5EYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygndWstVUEnKTtcbiAgICAgICAvLyAgICAgIGNvbnN0IHN0YXR1cyA9IHJlc29sdmVTdGF0dXNUcmFuc2xhdGlvbihzcGluLnN0YXR1cyk7XG4gICAgICAgLy9cbiAgICAgICAvLyAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAvLyAgICAgICAgICBjb25zdCBzcGluRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgIC8vICAgICAgICAgIHNwaW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NwaW5zLXJvdy1pdGVtJyk7XG4gICAgICAgLy9cbiAgICAgICAvLyAgICAgICAgICBzcGluRWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgLy8gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudC1kYXRlXCI+JHtmb3JtYXR0ZWREYXRlfTwvc3Bhbj5cbiAgICAgICAvLyAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb250ZW50LXByaXplXCI+JHtzdGF0dXN9PC9zcGFuPlxuICAgICAgIC8vICAgICAgICAgIGA7XG4gICAgICAgLy8gICAgICAgICAgc3Bpbkl0ZW0uYXBwZW5kQ2hpbGQoc3BpbkVsZW1lbnQpO1xuICAgICAgIC8vICAgICAgICAgIHVwZCsrO1xuICAgICAgIC8vICAgICAgfVxuICAgICAgIC8vICB9KTtcbiAgICAgICAvL1xuICAgICAgIC8vICBpZiAodXBkID09PSAwKSB7XG4gICAgICAgLy8gICAgICBzcGluSXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgLy8gICAgICBub1NwaW5JdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAvLyAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc29sdmVTdGF0dXNUcmFuc2xhdGlvbihzdGF0dXMpIHtcbiAgICAgICAgaWYgKCFzdGF0dXMgfHwgc3RhdHVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZUtleSgnYmV0VW5kZWZpbmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ3dpbicpIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGVLZXkoJ3dpbkJldCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0dXMgPT09ICdsb3NlJykge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZUtleSgnbG9zZUJldCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQsIGJhc2VDc3NDbGFzcykge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYmFzZUNzc0NsYXNzICsgbGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGJhc2VDc3NDbGFzcyArIGxvY2FsZSk7XG4gICAgfVxuXG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdChgL2ZhdnVzZXIvJHt1c2VySWR9P25vY2FjaGU9MWApXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNzcyA9IG1vZGVNYXBbcmVzLm1vZGVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQmxvY2tzKGNob3NlQmxvY2ssIFwiY2hvc2VIaWRlXCIsIHJlc3VsdEJsb2NrLCBcInJlc3VsdFNob3dcIiwgY3NzLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VXNlckluZm8ocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRDaG9vc2VDYXJkcyhjaG9zZUNhcmRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZGlzcGxheVVzZXJTcGlucygwKTtcbiAgICAgICAgICAgIGZvciAobGV0IHBhcnRpY2lwYXRlQnRuIG9mIHBhcnRpY2lwYXRlQnRucykge1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkVHJhbnNsYXRpb25zKClcbiAgICAgICAgLnRoZW4oaW5pdCk7XG5cbiAgICBsZXQgaW5pdGVkID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gaW5pdENob29zZUNhcmRzKGNhcmRzKXtcbiAgICAgICAgaWYgKGluaXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FyZHMuZm9yRWFjaChjYXJkID0+e1xuICAgICAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImluZm8taWNvblwiKSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZmZpY3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRpZmZpY3VsdHNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJkLmNsYXNzTGlzdC5jb250YWlucyhpdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kZSA9IG1vZGVNYXBbaXRlbV07XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZShtb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIGluaXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0UG9wdXAod3JhcCwgcG9wdXBOYW1lLCBidG5zLCBwb3B1cEl0ZW1zKXtcbiAgICAgICAgbGV0IHBvcHVwID0gd3JhcC5xdWVyeVNlbGVjdG9yKGAuJHtwb3B1cE5hbWV9YClcblxuICAgICAgICB3cmFwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgICAgICBlLnRhcmdldCA9PT0gd3JhcCA/IGNsb3NlUG9wdXAoKSA6IG51bGxcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBjbG9zZVBvcHVwID0gKCkgPT57XG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX2FjdGl2ZVwiKVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgICAgICB3cmFwLmNsYXNzTGlzdC5hZGQoXCJfb3BhY2l0eVwiKVxuICAgICAgICB9XG5cbiAgICAgICAgYnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgICBpZihidG4ucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhwb3B1cE5hbWUpKXtcbiAgICAgICAgICAgICAgICBidG4ucGFyZW50Tm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgICAgICAgICBpZihlLnRhcmdldCA9PT0gYnRuKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgICAgICAgICBwb3B1cEl0ZW1zLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIilcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9hY3RpdmVcIilcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgd3JhcC5jbGFzc0xpc3QucmVtb3ZlKFwiX29wYWNpdHlcIilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGxldCBjbG9zZUJ0biA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Nsb3NlXCIpXG4gICAgICAgICAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgICAgICAgICBjbG9zZVBvcHVwKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNldFBvcHVwKHBvcHVwc1dyYXAsIFwiX2Vhc3lcIiwgc2hvd1BvcHVwQnRucywgcG9wdXBJdGVtcylcbiAgICBzZXRQb3B1cChwb3B1cHNXcmFwLCBcIl9tZWRpdW1cIiwgc2hvd1BvcHVwQnRucywgcG9wdXBJdGVtcylcbiAgICBzZXRQb3B1cChwb3B1cHNXcmFwLCBcIl9oaWdodFwiLCBzaG93UG9wdXBCdG5zLCBwb3B1cEl0ZW1zKVxuICAgIHNldFBvcHVwKHBvcHVwc1dyYXAsIFwiX25vdGlmeVwiLCBzaG93UG9wdXBCdG5zLCBwb3B1cEl0ZW1zKVxuXG4gICAgZnVuY3Rpb24gc3RhcnRDb3VudGRvd24oc2VsZWN0b3IsIGVuZERhdGUpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke3NlbGVjdG9yfSAud2VsY29tZV9fdGltZXItaXRlbS1udW1gKTtcbiAgICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCAhPT0gNCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBzZWxlY3RvciEnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhcmdldERhdGUgPSBuZXcgRGF0ZShlbmREYXRlKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlVGltZXIoKSB7XG4gICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVMZWZ0ID0gdGFyZ2V0RGF0ZSAtIG5vdztcblxuICAgICAgICAgICAgaWYgKHRpbWVMZWZ0IDw9IDApIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVyVmFsdWVzKFswLCAwLCAwLCAwXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcih0aW1lTGVmdCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoKHRpbWVMZWZ0ICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKHRpbWVMZWZ0ICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigodGltZUxlZnQgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcblxuICAgICAgICAgICAgc2V0VGltZXJWYWx1ZXMoW2RheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzXSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzZXRUaW1lclZhbHVlcyh2YWx1ZXMpIHtcbiAgICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpbmRleF0udGV4dENvbnRlbnQgPSB2YWx1ZSA8IDEwID8gYDAke3ZhbHVlfWAgOiB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlVGltZXIoKTtcbiAgICAgICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHVwZGF0ZVRpbWVyLCAxMDAwKTtcbiAgICB9XG5cbiAgICBzdGFydENvdW50ZG93bignLndlbGNvbWVfX3RpbWVyJywgJzIwMjUtMDEtMzBUMjM6NTk6NTknKTtcblxuICAgIGZ1bmN0aW9uIG1vbml0b3JWaXNpYmlsaXR5KHNlbGVjdG9yLCBhbmltYXRpb24sIGRlbGF5KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VsZW1lbnQgbm90IGZvdW5kIScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChhbmltYXRpb24pXG4gICAgICAgICAgICAgICAgICAgIH0sIGRlbGF5KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIG1vbml0b3JWaXNpYmlsaXR5KCcubm90aWZ5X19wZXJzJywgXCJzaG93WmV1c1wiLCAwKTtcbiAgICBtb25pdG9yVmlzaWJpbGl0eSgnLm5vdGlmeV9fcGVycy1idWJsZScsIFwic2hvd1pldXNCdWJsZVwiLCAxMjAwKTtcbiAgICBtb25pdG9yVmlzaWJpbGl0eSgnLmNob3NlX19wZXJzLWJ1YmxlJywgXCJzaG93WmV1c0J1YmxlXCIsIDApO1xuICAgIG1vbml0b3JWaXNpYmlsaXR5KCcuY2hvc2VfX2NhcmQuX2Vhc3knLCBcInNob3dDYXJkXCIsIDQwMCk7XG4gICAgbW9uaXRvclZpc2liaWxpdHkoJy5jaG9zZV9fY2FyZC5fbWVkaXVtJywgXCJzaG93Q2FyZFwiLCA4MDApO1xuICAgIG1vbml0b3JWaXNpYmlsaXR5KCcuY2hvc2VfX2NhcmQuX2hpZ2h0JywgXCJzaG93Q2FyZFwiLCAxMjAwKTtcblxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlQmxvY2tzKGhpZGVCbG9jaywgaGlkZUNsYXNzLCBzaG93QmxvY2ssIHNob3dDbGFzcywgc3RhdGUsIGFuaW1hdGUpe1xuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKHN0YXRlLCBsb2NhbGUpXG4gICAgICAgIGhpZGVCbG9jay5jbGFzc0xpc3QuYWRkKGhpZGVDbGFzcylcbiAgICAgICAgbGV0IGRyb3BzID0gc2hvd0Jsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJvcFwiKVxuICAgICAgICBkcm9wcy5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICBkaWZmaWN1bHRzLmZvckVhY2goc3RhdGUgPT57XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKHN0YXRlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgZHJvcHNbMF0uY2xhc3NMaXN0LmFkZChzdGF0ZSlcbiAgICAgICAgaWYoYW5pbWF0ZSl7XG4gICAgICAgICAgICBoaWRlQmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PntcblxuICAgICAgICAgICAgICAgIHNob3dCbG9jay5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgICAgICAgICBzaG93QmxvY2suc3R5bGUuaGVpZ2h0ID0gaGlkZUJsb2NrLmNsaWVudEhlaWdodFxuICAgICAgICAgICAgICAgIGhpZGVCbG9jay5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHNob3dSZXN1bHRCbG9jayhzaG93QmxvY2ssIHNob3dDbGFzcylcbiAgICAgICAgICAgICAgICB9LCA1MClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2hvd0Jsb2NrLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAgICAgc2hvd0Jsb2NrLnN0eWxlLmhlaWdodCA9IGhpZGVCbG9jay5jbGllbnRIZWlnaHRcbiAgICAgICAgICAgIGhpZGVCbG9jay5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgc2hvd1Jlc3VsdEJsb2NrKHNob3dCbG9jaywgc2hvd0NsYXNzKVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93UmVzdWx0QmxvY2soc2hvd0Jsb2NrLCBzaG93Q2xhc3Mpe1xuICAgICAgICBzaG93QmxvY2suY2xhc3NMaXN0LmFkZChzaG93Q2xhc3MpXG4gICAgICAgIHNob3dCbG9jay5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIlxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgbGV0IGl0ZW1zID0gc2hvd0Jsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVzdWx0X19iZXRzLWl0ZW1cIilcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+e1xuICAgICAgICAgICAgICAgIGlmKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwieW91XCIpKXtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB5b3UgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0X19iZXRzLXlvdVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgeW91LmNsYXNzTGlzdC5hZGQoJ3Nob3dZb3UnKVxuICAgICAgICAgICAgICAgICAgICB9LCAyNzAwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICBsZXQgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVzdWx0X19idG5cIilcbiAgICAgICAgICAgICAgICAgICAgYnRucy5mb3JFYWNoKGJ0biA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwic2hvd0J0blwiKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sIDI5MDApXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICB9LCAyNTAgKiBpdGVtcy5sZW5ndGggLSBpICogMjUwKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvL3Rlc3RcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlnaHQtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgZGlmZmljdWx0cy5mb3JFYWNoKGNzcyA9PntcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoY3NzKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRvZ2dsZUJsb2NrcyhjaG9zZUJsb2NrLCBcImNob3NlSGlkZVwiLCByZXN1bHRCbG9jaywgXCJyZXN1bHRTaG93XCIsIFwiX2hpZ2h0XCIsIHRydWUpO1xuICAgIH0pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lYXN5LWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGRpZmZpY3VsdHMuZm9yRWFjaChjc3MgPT57XG4gICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKGNzcylcbiAgICAgICAgfSlcbiAgICAgICAgdG9nZ2xlQmxvY2tzKGNob3NlQmxvY2ssIFwiY2hvc2VIaWRlXCIsIHJlc3VsdEJsb2NrLCBcInJlc3VsdFNob3dcIiwgXCJfZWFzeVwiLCB0cnVlKTtcbiAgICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVkaXVtLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGRpZmZpY3VsdHMuZm9yRWFjaChjc3MgPT57XG4gICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKGNzcylcbiAgICAgICAgfSlcbiAgICAgICAgdG9nZ2xlQmxvY2tzKGNob3NlQmxvY2ssIFwiY2hvc2VIaWRlXCIsIHJlc3VsdEJsb2NrLCBcInJlc3VsdFNob3dcIiwgXCJfbWVkaXVtXCIsIHRydWUpO1xuICAgIH0pXG59KSgpO1xuIl19
