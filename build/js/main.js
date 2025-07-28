"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
(function () {
  var _document$querySelect;
  var apiURL = 'https://fav-prom.com/api_footbal_challenge_august';
  var mainPage = document.querySelector(".fav-page"),
    popupsWrap = document.querySelector(".popup"),
    showPopupBtns = document.querySelectorAll(".info-icon"),
    popupItems = document.querySelectorAll(".popup__item"),
    choseBlock = document.querySelector(".chose"),
    resultBlock = document.querySelector(".result"),
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.part-btn'),
    redirectBtns = document.querySelectorAll('.btn-join'),
    choseCards = document.querySelectorAll(".chose__card"),
    choseCardsInfo = document.querySelectorAll(".chose__card-info"),
    welcomeLock = document.querySelector(".welcome__lock"),
    welcomeTimer = document.querySelector(".welcome__timer"),
    loader = document.querySelector(".spinner-overlay");
  // images = document.querySelectorAll("picture")

  // welcomeLock.classList.add("hide")
  // welcomeTimer.classList.add("hide")

  document.body.style.overflow = "hidden";
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

  // let locale = "en"
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
  var i18nData = {};
  var translateState = true;
  // let userId = null;

  var userId = sessionStorage.getItem('userId') ? Number(sessionStorage.getItem('userId')) : null;
  function init() {
    return _init.apply(this, arguments);
  }
  function _init() {
    _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var attempts, maxAttempts, attemptInterval, tryDetectUserId, quickCheckAndRender, waitForUserId;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            quickCheckAndRender = function _quickCheckAndRender() {
              checkUserAuth();
              renderUsers();
            };
            tryDetectUserId = function _tryDetectUserId() {
              if (window.store) {
                var state = window.store.getState();
                userId = state.auth.isAuthorized && state.auth.id || '';
              } else if (window.g_user_id) {
                userId = window.g_user_id;
              }
            };
            attempts = 0;
            maxAttempts = 20;
            attemptInterval = 50;
            waitForUserId = new Promise(function (resolve) {
              var interval = setInterval(function () {
                tryDetectUserId();
                if (userId || attempts >= maxAttempts) {
                  quickCheckAndRender();
                  clearInterval(interval);
                  resolve();
                }
                attempts++;
              }, attemptInterval);
            });
            _context.next = 8;
            return waitForUserId;
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _init.apply(this, arguments);
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
        console.log("translation works!");
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
    var bets = userInfo.bets;
    // let bets = [{betDate: new Date(), status: 'undefined'}]

    displayBetsHistory(bets);
    refreshLastUpdatedDate(userInfo);
    bets = userInfo.bets.sort(function (a, b) {
      return new Date(b.betDate) - new Date(a.betDate);
    }).slice(0, 10).reverse();
    refreshBets(bets);
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
    // return;
    var spinItem = document.querySelector('.spins-row');
    var noSpinItem = document.querySelector('.no-spins');
    var noBets = !bets || bets.length === 0;
    if (noBets && !debug) {
      // console.log(noBets, debug)
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
        var isWin = spin.status === "win";
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
  function reportError(err) {
    var reportData = {
      origin: window.location.href,
      userid: userId,
      errorText: (err === null || err === void 0 ? void 0 : err.error) || (err === null || err === void 0 ? void 0 : err.text) || (err === null || err === void 0 ? void 0 : err.message) || 'Unknown error',
      type: (err === null || err === void 0 ? void 0 : err.name) || 'UnknownError',
      stack: (err === null || err === void 0 ? void 0 : err.stack) || ''
    };
    fetch('https://fav-prom.com/api-cms/reports/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reportData)
    })["catch"](console.warn);
  }
  function request(link, extraOptions) {
    return fetch(apiURL + link, _objectSpread({
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }, extraOptions || {})).then(function (res) {
      if (!res.ok) throw new Error('API error');
      return res.json();
    })["catch"](function (err) {
      console.error('API request failed:', err);

      // reportError(err);

      // document.querySelector('.fav-page').style.display = 'none';
      // if (window.location.href.startsWith("https://www.favbet.hr/")) {
      //     window.location.href = '/promocije/promocija/stub/';
      // } else {
      //     window.location.href = '/promos/promo/stub/';
      // }

      return Promise.reject(err);
    });
  }
  function checkUserAuth() {
    var loadTime = 200;
    setTimeout(function () {
      if (userId) {
        setTimeout(function () {
          welcomeTimer.classList.remove("hide");
        }, 300);
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
        var _iterator2 = _createForOfIteratorHelper(choseCardsInfo),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var info = _step2.value;
            info.classList.remove('hide');
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        return request("/favuser/".concat(userId, "?nocache=1")).then(function (res) {
          if (res.userid) {
            participateBtns.forEach(function (item) {
              return item.classList.add('hide');
            });
            redirectBtns.forEach(function (item) {
              return item.classList.remove('hide');
            });
            welcomeLock.classList.add("hide");
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
            welcomeLock.classList.remove("hide");
          }
          loader.classList.add("hide");
          document.body.style.overflow = "auto";
          mainPage.classList.remove("loading");
        });
      } else {
        // displayUserSpins(0);
        var _iterator3 = _createForOfIteratorHelper(choseCardsInfo),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _info = _step3.value;
            _info.classList.add('hide');
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        var _iterator4 = _createForOfIteratorHelper(participateBtns),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var participateBtn = _step4.value;
            participateBtn.classList.add('hide');
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        var _iterator5 = _createForOfIteratorHelper(unauthMsgs),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _unauthMes = _step5.value;
            _unauthMes.classList.remove('hide');
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        welcomeLock.classList.remove("hide");
        setTimeout(function () {
          welcomeTimer.classList.remove("hide");
        }, 300);
        loader.classList.add("hide");
        document.body.style.overflow = "auto";
        mainPage.classList.remove("loading");
        return Promise.resolve(false);
      }
    }, loadTime);
  }
  function renderUsers() {
    if (debug) {
      populateUsersTable(mockUsers, userId);
      return;
    }
    request("/users/").then(function (data) {
      var user = data.find(function (user) {
        return user.userid === userId;
      });
      var mode = user ? user.mode : null;
      var users = data.filter(function (user) {
        return user.mode === mode;
      });
      populateUsersTable(users, userId);
    });
  }
  function populateUsersTable(users, currentUserId) {
    var _users;
    var youRow = document.querySelector('#tableOther');
    var tableBody = document.querySelector('#table');
    if (!((_users = users) !== null && _users !== void 0 && _users.length) || currentUserId === undefined) return;
    youRow.innerHTML = '';
    tableBody.innerHTML = '';
    users = users.sort(function (a, b) {
      return b.winCount - a.winCount;
    });
    users.forEach(function (user, index) {
      var isCurrentUser = user.userid === currentUserId;
      var isTopUser = false;
      if (index <= 5 && isCurrentUser) {
        isTopUser = true;
      }
      if (index >= 20 && !isCurrentUser) return;
      displayUser(user, isCurrentUser, index + 1, isCurrentUser && !isTopUser ? youRow : tableBody);
    });
  }
  function displayUser(user, isCurrentUser, place, target) {
    var userIdDisplay = isCurrentUser ? user.userid : maskUserId(user.userid);
    var row = document.createElement('div');
    row.classList.add('table__row');
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
    } else {
      row.innerHTML = "\n            <div class=\"table__row-item\">".concat(place, "</div>\n            <div class=\"table__row-item\">").concat(userIdDisplay, "</div>\n            <div class=\"table__row-item\">").concat(user.winCount, "</div>\n        ");
    }
    target.appendChild(row);
  }
  function maskUserId(userId) {
    return "****" + userId.toString().slice(4);
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
  startCountdown('.welcome__timer', '2025-05-11T23:59:59+03:00');
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
    if (currentLocale === "uk") {
      sessionStorage.removeItem("locale");
    } else {
      sessionStorage.setItem("locale", "uk");
    }
    location.reload();
  });
  document.querySelector(".dark-btn").addEventListener("click", function () {
    document.body.classList.toggle("dark");
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwb3B1cHNXcmFwIiwic2hvd1BvcHVwQnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwb3B1cEl0ZW1zIiwiY2hvc2VCbG9jayIsInJlc3VsdEJsb2NrIiwidW5hdXRoTXNncyIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImNob3NlQ2FyZHMiLCJjaG9zZUNhcmRzSW5mbyIsIndlbGNvbWVMb2NrIiwid2VsY29tZVRpbWVyIiwibG9hZGVyIiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJ1a0xlbmciLCJlbkxlbmciLCJkaWZmaWN1bHRzIiwibW9kZU1hcCIsImxvY2FsZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImRlYnVnIiwibW9ja0JldHMiLCJpZCIsImJldERhdGUiLCJzdGF0dXMiLCJ1bmRlZmluZWQiLCJtb2NrVXNlcnMiLCJ1c2VyaWQiLCJiZXQiLCJpMThuRGF0YSIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwiTnVtYmVyIiwiaW5pdCIsInRyeURldGVjdFVzZXJJZCIsInF1aWNrQ2hlY2tBbmRSZW5kZXIiLCJjaGVja1VzZXJBdXRoIiwicmVuZGVyVXNlcnMiLCJ3aW5kb3ciLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiZ191c2VyX2lkIiwiYXR0ZW1wdHMiLCJtYXhBdHRlbXB0cyIsImF0dGVtcHRJbnRlcnZhbCIsIndhaXRGb3JVc2VySWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicGFydGljaXBhdGUiLCJtb2RlIiwicGFyYW1zIiwicmVxdWVzdCIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwiZm9yRWFjaCIsIml0ZW0iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjc3MiLCJ0b2dnbGVCbG9ja3MiLCJsb2FkVHJhbnNsYXRpb25zIiwiZmV0Y2giLCJqc29uIiwidHJhbnNsYXRlIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJvYnNlcnZlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiZWxlbXMiLCJsZW5ndGgiLCJlbGVtIiwia2V5IiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwicmVtb3ZlQXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsInJlZnJlc2hMb2NhbGl6ZWRDbGFzcyIsInRyYW5zbGF0ZUtleSIsImRlZmF1bHRWYWwiLCJkaXNwbGF5VXNlckluZm8iLCJ1c2VySW5mbyIsImJldHMiLCJkaXNwbGF5QmV0c0hpc3RvcnkiLCJyZWZyZXNoTGFzdFVwZGF0ZWREYXRlIiwic29ydCIsImEiLCJiIiwiRGF0ZSIsInNsaWNlIiwicmV2ZXJzZSIsInJlZnJlc2hCZXRzIiwiZGF0ZUNvbnRhaW5lciIsInNwYW4iLCJsYXN0VXBkYXRlIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJsb2NhbERhdGUiLCJkYXkiLCJTdHJpbmciLCJnZXREYXRlIiwicGFkU3RhcnQiLCJtb250aCIsImdldE1vbnRoIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiZGl2cyIsImkiLCJlbGVtZW50Iiwic3Bpbkl0ZW0iLCJub1NwaW5JdGVtIiwibm9CZXRzIiwidXBkIiwic3BpbiIsInNwaW5EYXRlIiwiZm9ybWF0dGVkRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInJlc29sdmVTdGF0dXNUcmFuc2xhdGlvbiIsInNwaW5FbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImlzV2luIiwic3RhdHVzQ2xhc3MiLCJiZXRJZCIsImFwcGVuZENoaWxkIiwiYmFzZUNzc0NsYXNzIiwibGFuZyIsInJlcG9ydEVycm9yIiwiZXJyIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yVGV4dCIsImVycm9yIiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwiaGVhZGVycyIsIndhcm4iLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwib2siLCJFcnJvciIsInJlamVjdCIsImxvYWRUaW1lIiwic2V0VGltZW91dCIsInVuYXV0aE1lcyIsImluZm8iLCJpbml0Q2hvb3NlQ2FyZHMiLCJwYXJ0aWNpcGF0ZUJ0biIsInBvcHVsYXRlVXNlcnNUYWJsZSIsImRhdGEiLCJ1c2VyIiwiZmluZCIsInVzZXJzIiwiZmlsdGVyIiwiY3VycmVudFVzZXJJZCIsInlvdVJvdyIsInRhYmxlQm9keSIsIndpbkNvdW50IiwiaW5kZXgiLCJpc0N1cnJlbnRVc2VyIiwiaXNUb3BVc2VyIiwiZGlzcGxheVVzZXIiLCJwbGFjZSIsInRhcmdldCIsInVzZXJJZERpc3BsYXkiLCJtYXNrVXNlcklkIiwicm93IiwieW91VGV4dCIsInNldEF0dHJpYnV0ZSIsInVzZXJJZERpdiIsInRleHRDb250ZW50IiwiYmV0RGl2IiwidG9TdHJpbmciLCJpbml0ZWQiLCJjYXJkcyIsImNhcmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvbnRhaW5zIiwic2V0UG9wdXAiLCJ3cmFwIiwicG9wdXBOYW1lIiwiYnRucyIsInBvcHVwIiwiY2xvc2VQb3B1cCIsImJ0biIsInBhcmVudE5vZGUiLCJwcmV2ZW50RGVmYXVsdCIsImNsb3NlQnRuIiwic3RhcnRDb3VudGRvd24iLCJzZWxlY3RvciIsImVuZERhdGUiLCJlbGVtZW50cyIsInRhcmdldERhdGUiLCJnZXRUaW1lIiwidXBkYXRlVGltZXIiLCJub3ciLCJ0aW1lTGVmdCIsImludGVydmFsSWQiLCJzZXRUaW1lclZhbHVlcyIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwidmFsdWVzIiwidmFsdWUiLCJtb25pdG9yVmlzaWJpbGl0eSIsImFuaW1hdGlvbiIsImRlbGF5Iiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiaGlkZUJsb2NrIiwiaGlkZUNsYXNzIiwic2hvd0Jsb2NrIiwic2hvd0NsYXNzIiwiYW5pbWF0ZSIsImRyb3BzIiwiZGlzcGxheSIsImhlaWdodCIsImNsaWVudEhlaWdodCIsInNob3dSZXN1bHRCbG9jayIsIml0ZW1zIiwieW91Iiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0RWxlbWVudCIsInRhcmdldFBvc2l0aW9uIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwicGFnZVlPZmZzZXQiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwidG9nZ2xlIiwiaGFzSWQiLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsInJlbG9hZCIsImN1cnJlbnRMb2NhbGUiXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsQ0FBQyxZQUFZO0VBQUE7RUFDVCxJQUFNQSxNQUFNLEdBQUcsbURBQW1EO0VBRWxFLElBQU1DLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQ2hEQyxVQUFVLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUM3Q0UsYUFBYSxHQUFHSCxRQUFRLENBQUNJLGdCQUFnQixDQUFDLFlBQVksQ0FBQztJQUN2REMsVUFBVSxHQUFHTCxRQUFRLENBQUNJLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztJQUN0REUsVUFBVSxHQUFHTixRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDN0NNLFdBQVcsR0FBR1AsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQy9DTyxVQUFVLEdBQUdSLFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0lBQ3JESyxlQUFlLEdBQUdULFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBQ3hE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QkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSztJQUMvRHpNLFFBQVEsQ0FBQ2dCLElBQUksQ0FBQ3VELFNBQVMsQ0FBQzRMLE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDMUMsQ0FBQyxDQUFDO0FBRU4sQ0FBQyxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfZm9vdGJhbF9jaGFsbGVuZ2VfYXVndXN0J1xuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICBwb3B1cHNXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKSxcbiAgICAgICAgc2hvd1BvcHVwQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5mby1pY29uXCIpLFxuICAgICAgICBwb3B1cEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9faXRlbVwiKSxcbiAgICAgICAgY2hvc2VCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hvc2VcIiksXG4gICAgICAgIHJlc3VsdEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRcIiksXG4gICAgICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFydC1idG4nKSxcbiAgICAgICAgcmVkaXJlY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1qb2luJyksXG4gICAgICAgIGNob3NlQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNob3NlX19jYXJkXCIpLFxuICAgICAgICBjaG9zZUNhcmRzSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hvc2VfX2NhcmQtaW5mb1wiKSxcbiAgICAgICAgd2VsY29tZUxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlbGNvbWVfX2xvY2tcIiksXG4gICAgICAgIHdlbGNvbWVUaW1lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VsY29tZV9fdGltZXJcIiksXG4gICAgICAgIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Bpbm5lci1vdmVybGF5XCIpXG4gICAgICAgIC8vIGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJwaWN0dXJlXCIpXG5cbiAgICAvLyB3ZWxjb21lTG9jay5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgIC8vIHdlbGNvbWVUaW1lci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCJcblxuXG4gICAgY29uc3QgdWtMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VrTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGNvbnN0IGRpZmZpY3VsdHMgPSBbXCJfZWFzeVwiLCBcIl9tZWRpdW1cIiwgXCJfaGlnaHRcIl07XG4gICAgY29uc3QgbW9kZU1hcCA9IHtcIm5vdmljZVwiOiBcIl9lYXN5XCIsIFwiZXhwZXJpZW5jZWRcIjogXCJfbWVkaXVtXCIsIFwiaW5zYW5lXCI6IFwiX2hpZ2h0XCIsIFwiX2Vhc3lcIjogXCJub3ZpY2VcIiwgXCJfbWVkaXVtXCI6IFwiZXhwZXJpZW5jZWRcIiwgXCJfaGlnaHRcIjogXCJpbnNhbmVcIn07XG5cbiAgICAvLyBsZXQgbG9jYWxlID0gXCJlblwiXG4gICAgbGV0IGxvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgPyBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpIDogXCJ1a1wiXG5cbiAgICBpZiAodWtMZW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSBmYWxzZVxuXG4gICAgY29uc3QgbW9ja0JldHMgPSBbXG4gICAgICAgIHsgaWQ6IDM4ODMxMDI0NywgYmV0RGF0ZTogJzIwMjUtMDQtMjBUMTI6MDA6MDAnLCBzdGF0dXM6ICd3aW4nIH0sXG4gICAgICAgIHsgaWQ6IDM4ODMxMDI0NywgYmV0RGF0ZTogJzIwMjUtMDQtMjBUMTI6MDA6MDAnLCBzdGF0dXM6ICd3aW4nIH0sXG4gICAgICAgIHsgaWQ6IDM4ODMxMDI0OCwgYmV0RGF0ZTogJzIwMjUtMDQtMTlUMTU6MzA6MDAnLCBzdGF0dXM6ICdsb3NlJyB9LFxuICAgICAgICB7IGlkOiAzODgzMTAyNDgsIGJldERhdGU6ICcyMDI1LTA0LTE5VDE1OjMwOjAwJywgc3RhdHVzOiAnd2luJyB9LFxuICAgICAgICB7IGlkOiAzODgzMTAyNDgsIGJldERhdGU6ICcyMDI1LTA0LTE5VDE1OjMwOjAwJywgc3RhdHVzOiAnbG9zZScgfSxcbiAgICAgICAgeyBpZDogMzg4MzEwMjQ4LCBiZXREYXRlOiAnMjAyNS0wNC0xOVQxNTozMDowMCcsIHN0YXR1czogJ2xvc2UnIH0sXG4gICAgICAgIHsgaWQ6IDM4ODMxMDI0OCwgYmV0RGF0ZTogJzIwMjUtMDQtMTlUMTU6MzA6MDAnLCBzdGF0dXM6ICdsb3NlJyB9LFxuICAgICAgICB7IGlkOiAzODgzMTAyNDksIGJldERhdGU6ICcyMDI1LTA0LTE4VDA5OjE1OjAwJywgc3RhdHVzOiB1bmRlZmluZWQgfSxcbiAgICBdO1xuXG4gICAgY29uc3QgbW9ja1VzZXJzID0gW1xuICAgICAgICB7IHVzZXJpZDogMzg4MzEwMjQ3LCBiZXQ6IDEwIH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMjM0NTY3ODksIGJldDogOSB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMzY4LCBiZXQ6IDggfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDE2OCwgYmV0OiA4IH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAwNjgsIGJldDogOCB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzA4MjY4LCBiZXQ6IDggfSxcbiAgICAgICAgeyB1c2VyaWQ6IDExMTIyMjMzMywgYmV0OiA3IH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMTEyMjIzNDMsIGJldDogNyB9LFxuICAgICAgICB7IHVzZXJpZDogMTExMjIyMzUzLCBiZXQ6IDYgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDExMTIyMjM2MywgYmV0OiA1IH0sXG4gICAgICAgIHsgdXNlcmlkOiA0NDQ1NTU2NjYsIGJldDogNSB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMjY4LCBiZXQ6IDYgfSxcbiAgICBdO1xuXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZSA9IHRydWU7XG4gICAgLy8gbGV0IHVzZXJJZCA9IG51bGw7XG5cbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJykgPyBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJykpIDogbnVsbDtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjA7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRJbnRlcnZhbCA9IDUwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyeURldGVjdFVzZXJJZCgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcXVpY2tDaGVja0FuZFJlbmRlcigpIHtcbiAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICAgICAgICAgIHJlbmRlclVzZXJzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWl0Rm9yVXNlcklkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeURldGVjdFVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgfHwgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tDaGVja0FuZFJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgICAgfSwgYXR0ZW1wdEludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKG1vZGUpIHtcbiAgICAgICAgaWYgKCF1c2VySWQgfHwgIW1vZGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt1c2VyaWQ6IHVzZXJJZCwgbW9kZX07XG4gICAgICAgIHJlcXVlc3QoJy91c2VyJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICBjb25zdCBjc3MgPSBtb2RlTWFwW21vZGVdO1xuICAgICAgICAgICAgdG9nZ2xlQmxvY2tzKGNob3NlQmxvY2ssIFwiY2hvc2VIaWRlXCIsIHJlc3VsdEJsb2NrLCBcInJlc3VsdFNob3dcIiwgY3NzLCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke2FwaVVSTH0vdHJhbnNsYXRlcy8ke2xvY2FsZX1gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9vdGJhbGwtY2hhbGxlbmdlXCIpLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29ya3MhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2FsZSA9PT0gJ2VuJykge1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnZW4nKTtcbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVLZXkoa2V5LCBkZWZhdWx0VmFsKSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGkxOG5EYXRhW2tleV0gfHwgZGVmYXVsdFZhbCB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXJJbmZvKHVzZXJJbmZvKSB7XG4gICAgICAgIGxldCBiZXRzID0gdXNlckluZm8uYmV0c1xuICAgICAgICAvLyBsZXQgYmV0cyA9IFt7YmV0RGF0ZTogbmV3IERhdGUoKSwgc3RhdHVzOiAndW5kZWZpbmVkJ31dXG5cbiAgICAgICAgZGlzcGxheUJldHNIaXN0b3J5KGJldHMpO1xuICAgICAgICByZWZyZXNoTGFzdFVwZGF0ZWREYXRlKHVzZXJJbmZvKTtcbiAgICAgICAgYmV0cyA9IHVzZXJJbmZvLmJldHNcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShiLmJldERhdGUpIC0gbmV3IERhdGUoYS5iZXREYXRlKSlcbiAgICAgICAgICAgIC5zbGljZSgwLCAxMClcbiAgICAgICAgICAgIC5yZXZlcnNlKCk7XG4gICAgICAgIHJlZnJlc2hCZXRzKGJldHMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMYXN0VXBkYXRlZERhdGUodXNlckluZm8pIHtcbiAgICAgICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRfX2xhc3QtdXBkJyk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFzdFVwZCcpO1xuICAgICAgICBpZiAodXNlckluZm8ubGFzdFVwZGF0ZSkge1xuICAgICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSBmb3JtYXREYXRlKHVzZXJJbmZvLmxhc3RVcGRhdGUpO1xuICAgICAgICAgICAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuICAgICAgICBjb25zdCBsb2NhbERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgY29uc3QgZGF5ID0gU3RyaW5nKGxvY2FsRGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gU3RyaW5nKGxvY2FsRGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgaG91cnMgPSBTdHJpbmcobG9jYWxEYXRlLmdldEhvdXJzKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBTdHJpbmcobG9jYWxEYXRlLmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgcmV0dXJuIGAke2RheX0uJHttb250aH0gJHtob3Vyc306JHttaW51dGVzfWA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaEJldHMoYmV0cykge1xuICAgICAgICBjb25zdCBkaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3VsdF9fYmV0cy1pdGVtJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRpdnNbaV07XG4gICAgICAgICAgICBjb25zdCBiZXQgPSBiZXRzW2ldO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd5b3UnKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnX2RvbmUnKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnX2ZhaWwnKTtcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSAnX2ZhaWwnO1xuICAgICAgICAgICAgaWYgKGJldC5zdGF0dXMgPT09ICd3aW4nKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzID0gJ19kb25lJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWJldC5zdGF0dXMgfHwgYmV0LnN0YXR1cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSAneW91JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChzdGF0dXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpc3BsYXlCZXRzSGlzdG9yeShiZXRzKSB7XG4gICAgICAgIC8vIHJldHVybjtcbiAgICAgICAgY29uc3Qgc3Bpbkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BpbnMtcm93Jyk7XG4gICAgICAgIGNvbnN0IG5vU3Bpbkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm8tc3BpbnMnKTtcblxuICAgICAgICBjb25zdCBub0JldHMgPSAhYmV0cyB8fCBiZXRzLmxlbmd0aCA9PT0gMDtcblxuICAgICAgICBpZiAobm9CZXRzICYmICFkZWJ1Zykge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobm9CZXRzLCBkZWJ1ZylcbiAgICAgICAgICAgIHNwaW5JdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIG5vU3Bpbkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZGVidWcpe1xuICAgICAgICAgICAgYmV0cyA9IG1vY2tCZXRzXG4gICAgICAgIH1cblxuXG4gICAgICAgIHNwaW5JdGVtLmlubmVySFRNTCA9XG4gICAgICAgICAgICBgXG4gICAgICAgPGRpdiBjbGFzcz1cInNwaW5zLXJvdy1oZWFkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1kYXRlXCIgZGF0YS10cmFuc2xhdGU9XCJteUJldERhdGVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXByaXplXCIgZGF0YS10cmFuc2xhdGU9XCJteUJldFByaXplXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1zdGF0dXNcIiBkYXRhLXRyYW5zbGF0ZT1cIm15QmV0U3RhdHVzXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICBzcGluSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIG5vU3Bpbkl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG4gICAgICAgIGxldCB1cGQgPSAwO1xuICAgICAgICBiZXRzLmZvckVhY2goc3BpbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcGluRGF0ZSA9IG5ldyBEYXRlKHNwaW4uYmV0RGF0ZSk7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gc3BpbkRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCd1ay1VQScpLnNsaWNlKDAsIDUpO1xuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gcmVzb2x2ZVN0YXR1c1RyYW5zbGF0aW9uKHNwaW4uc3RhdHVzKTtcblxuICAgICAgICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwaW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgc3BpbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3BpbnMtcm93LWl0ZW0nKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGlzV2luID0gc3Bpbi5zdGF0dXMgPT09IFwid2luXCI7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzQ2xhc3MgPSBpc1dpbiA/ICdfZG9uZScgOiAnJztcblxuICAgICAgICAgICAgICAgIHNwaW5FbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb250ZW50LWRhdGVcIj4ke2Zvcm1hdHRlZERhdGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbnRlbnQtcHJpemVcIj5JRDoke3NwaW4uYmV0SWR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbnRlbnQtc3RhdHVzICR7c3RhdHVzQ2xhc3N9XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgc3Bpbkl0ZW0uYXBwZW5kQ2hpbGQoc3BpbkVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHVwZCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodXBkID09PSAwKSB7XG4gICAgICAgICAgICBzcGluSXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICBub1NwaW5JdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc29sdmVTdGF0dXNUcmFuc2xhdGlvbihzdGF0dXMpIHtcbiAgICAgICAgaWYgKCFzdGF0dXMgfHwgc3RhdHVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZUtleSgnYmV0VW5kZWZpbmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ3dpbicpIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGVLZXkoJ3dpbkJldCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0dXMgPT09ICdsb3NlJykge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZUtleSgnbG9zZUJldCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQsIGJhc2VDc3NDbGFzcykge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYmFzZUNzc0NsYXNzICsgbGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGJhc2VDc3NDbGFzcyArIGxvY2FsZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVxdWVzdCAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignQVBJIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cblxuICAgICAgICAgICAgICAgIC8vIHJlcG9ydEVycm9yKGVycik7XG5cbiAgICAgICAgICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIC8vIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgIC8vICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGxldCBsb2FkVGltZSA9IDIwMDtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICB3ZWxjb21lVGltZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcblxuICAgICAgICAgICAgICAgIH0sIDMwMClcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5mbyBvZiBjaG9zZUNhcmRzSW5mbykge1xuICAgICAgICAgICAgICAgICAgICBpbmZvLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfT9ub2NhY2hlPTFgKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWxjb21lTG9jay5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNzcyA9IG1vZGVNYXBbcmVzLm1vZGVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUJsb2NrcyhjaG9zZUJsb2NrLCBcImNob3NlSGlkZVwiLCByZXN1bHRCbG9jaywgXCJyZXN1bHRTaG93XCIsIGNzcywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlVc2VySW5mbyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0Q2hvb3NlQ2FyZHMoY2hvc2VDYXJkcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2VsY29tZUxvY2suY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5VXNlclNwaW5zKDApO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5mbyBvZiBjaG9zZUNhcmRzSW5mbykge1xuICAgICAgICAgICAgICAgICAgICBpbmZvLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcGFydGljaXBhdGVCdG4gb2YgcGFydGljaXBhdGVCdG5zKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3ZWxjb21lTG9jay5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHdlbGNvbWVUaW1lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgIH0sIDMwMClcbiAgICAgICAgICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBsb2FkVGltZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJVc2VycygpIHtcbiAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUobW9ja1VzZXJzLCB1c2VySWQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cblxuICAgICAgICByZXF1ZXN0KGAvdXNlcnMvYCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBkYXRhLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gdXNlcklkKTtcbiAgICAgICAgICAgIGNvbnN0IG1vZGUgPSB1c2VyID8gdXNlci5tb2RlIDogbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJzID0gZGF0YS5maWx0ZXIodXNlciA9PiB1c2VyLm1vZGUgPT09IG1vZGUpXG4gICAgICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIHVzZXJJZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCkge1xuICAgICAgICBjb25zdCB5b3VSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGVPdGhlcicpO1xuICAgICAgICBjb25zdCB0YWJsZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGUnKTtcblxuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGggfHwgY3VycmVudFVzZXJJZCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgICAgICAgeW91Um93LmlubmVySFRNTCA9ICcnO1xuICAgICAgICB0YWJsZUJvZHkuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgdXNlcnMgPSB1c2Vycy5zb3J0KChhLCBiKSA9PiBiLndpbkNvdW50IC0gYS53aW5Db3VudCk7XG5cblxuICAgICAgICB1c2Vycy5mb3JFYWNoKCh1c2VyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50VXNlciA9IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkO1xuICAgICAgICAgICAgbGV0IGlzVG9wVXNlciA9IGZhbHNlXG5cbiAgICAgICAgICAgIGlmKGluZGV4IDw9IDUgJiYgaXNDdXJyZW50VXNlcil7XG4gICAgICAgICAgICAgICBpc1RvcFVzZXIgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihpbmRleCA+PSAyMCAmJiAhaXNDdXJyZW50VXNlcikgcmV0dXJuXG5cbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIGluZGV4ICsgMSwgaXNDdXJyZW50VXNlciAmJiAhaXNUb3BVc2VyID8geW91Um93IDogdGFibGVCb2R5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXIodXNlciwgaXNDdXJyZW50VXNlciwgcGxhY2UsIHRhcmdldCkge1xuXG5cblxuICAgICAgICBjb25zdCB1c2VySWREaXNwbGF5ID0gaXNDdXJyZW50VXNlciA/IHVzZXIudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyLnVzZXJpZCk7XG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG5cbiAgICAgICAgaWYgKGlzQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIC8vINCh0YLQstC+0YDQtdC90L3RjyDQtdC70LXQvNC10L3RgtGDICd5b3UnINGC0LAg0LLRgdGC0LDQstC60LAg0LnQvtCz0L4g0L/RltGB0LvRjyDQtdC70LXQvNC10L3RgtGDINC3INC80ZbRgdGG0LXQvFxuICAgICAgICAgICAgY29uc3QgeW91VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgeW91VGV4dC5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93LWl0ZW0nLCAnX3lvdS10ZXh0Jyk7XG4gICAgICAgICAgICB5b3VUZXh0LnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCAneW91Jyk7XG5cblxuICAgICAgICAgICAgcm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj4ke3BsYWNlfTwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICAvLyDQlNC+0LTQsNGU0LzQviBcInlvdVwiINGC0LXQutGB0YIg0L/RltGB0LvRjyDQvNGW0YHRhtGPXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoeW91VGV4dCk7XG5cbiAgICAgICAgICAgIC8vINCf0L7RgtGW0Lwg0LTQvtC00LDRlNC80L4gdXNlcklkINGC0LAg0YHRgtCw0LLQutGDXG4gICAgICAgICAgICBjb25zdCB1c2VySWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVzZXJJZERpdi5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93LWl0ZW0nKTtcbiAgICAgICAgICAgIHVzZXJJZERpdi50ZXh0Q29udGVudCA9IHVzZXJJZERpc3BsYXk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJldERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYmV0RGl2LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3ctaXRlbScpO1xuICAgICAgICAgICAgYmV0RGl2LnRleHRDb250ZW50ID0gdXNlci53aW5Db3VudDtcblxuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHVzZXJJZERpdik7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoYmV0RGl2KTtcblxuICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ195b3UnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+JHtwbGFjZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj4ke3VzZXJJZERpc3BsYXl9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+JHt1c2VyLndpbkNvdW50fTwvZGl2PlxuICAgICAgICBgO1xuXG5cbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQocm93KTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIG1hc2tVc2VySWQodXNlcklkKSB7XG4gICAgICAgIHJldHVybiBcIioqKipcIiArIHVzZXJJZC50b1N0cmluZygpLnNsaWNlKDQpO1xuICAgIH1cblxuXG4gICAgbG9hZFRyYW5zbGF0aW9ucygpXG4gICAgICAgIC50aGVuKGluaXQpO1xuXG4gICAgbGV0IGluaXRlZCA9IGZhbHNlO1xuICAgIGZ1bmN0aW9uIGluaXRDaG9vc2VDYXJkcyhjYXJkcyl7XG4gICAgICAgIGlmIChpbml0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PntcbiAgICAgICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJpbmZvLWljb25cIikpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWZmaWN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkaWZmaWN1bHRzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZC5jbGFzc0xpc3QuY29udGFpbnMoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGUgPSBtb2RlTWFwW2l0ZW1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGUobW9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMClcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIGluaXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0UG9wdXAod3JhcCwgcG9wdXBOYW1lLCBidG5zLCBwb3B1cEl0ZW1zKXtcbiAgICAgICAgbGV0IHBvcHVwID0gd3JhcC5xdWVyeVNlbGVjdG9yKGAuJHtwb3B1cE5hbWV9YClcblxuICAgICAgICB3cmFwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgICAgICBlLnRhcmdldCA9PT0gd3JhcCA/IGNsb3NlUG9wdXAoKSA6IG51bGxcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBjbG9zZVBvcHVwID0gKCkgPT57XG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX2FjdGl2ZVwiKVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgICAgICB3cmFwLmNsYXNzTGlzdC5hZGQoXCJfb3BhY2l0eVwiKVxuICAgICAgICB9XG5cbiAgICAgICAgYnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgICBpZihidG4ucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhwb3B1cE5hbWUpKXtcbiAgICAgICAgICAgICAgICBidG4ucGFyZW50Tm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgICAgICAgICBpZihlLnRhcmdldCA9PT0gYnRuKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgICAgICAgICBwb3B1cEl0ZW1zLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIilcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9hY3RpdmVcIilcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgd3JhcC5jbGFzc0xpc3QucmVtb3ZlKFwiX29wYWNpdHlcIilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGxldCBjbG9zZUJ0biA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Nsb3NlXCIpXG4gICAgICAgICAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgICAgICAgICBjbG9zZVBvcHVwKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNldFBvcHVwKHBvcHVwc1dyYXAsIFwiX2Vhc3lcIiwgc2hvd1BvcHVwQnRucywgcG9wdXBJdGVtcylcbiAgICBzZXRQb3B1cChwb3B1cHNXcmFwLCBcIl9tZWRpdW1cIiwgc2hvd1BvcHVwQnRucywgcG9wdXBJdGVtcylcbiAgICBzZXRQb3B1cChwb3B1cHNXcmFwLCBcIl9oaWdodFwiLCBzaG93UG9wdXBCdG5zLCBwb3B1cEl0ZW1zKVxuICAgIHNldFBvcHVwKHBvcHVwc1dyYXAsIFwiX25vdGlmeVwiLCBzaG93UG9wdXBCdG5zLCBwb3B1cEl0ZW1zKVxuXG4gICAgZnVuY3Rpb24gc3RhcnRDb3VudGRvd24oc2VsZWN0b3IsIGVuZERhdGUpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke3NlbGVjdG9yfSAud2VsY29tZV9fdGltZXItaXRlbS1udW1gKTtcbiAgICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCAhPT0gNCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBzZWxlY3RvciEnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhcmdldERhdGUgPSBuZXcgRGF0ZShlbmREYXRlKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlVGltZXIoKSB7XG4gICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVMZWZ0ID0gdGFyZ2V0RGF0ZSAtIG5vdztcblxuICAgICAgICAgICAgaWYgKHRpbWVMZWZ0IDw9IDApIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVyVmFsdWVzKFswLCAwLCAwLCAwXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcih0aW1lTGVmdCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoKHRpbWVMZWZ0ICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKHRpbWVMZWZ0ICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigodGltZUxlZnQgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcblxuICAgICAgICAgICAgc2V0VGltZXJWYWx1ZXMoW2RheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzXSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzZXRUaW1lclZhbHVlcyh2YWx1ZXMpIHtcbiAgICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpbmRleF0udGV4dENvbnRlbnQgPSB2YWx1ZSA8IDEwID8gYDAke3ZhbHVlfWAgOiB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlVGltZXIoKTtcbiAgICAgICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHVwZGF0ZVRpbWVyLCAxMDAwKTtcbiAgICB9XG5cbiAgICBzdGFydENvdW50ZG93bignLndlbGNvbWVfX3RpbWVyJywgJzIwMjUtMDUtMTFUMjM6NTk6NTkrMDM6MDAnKTtcblxuICAgIGZ1bmN0aW9uIG1vbml0b3JWaXNpYmlsaXR5KHNlbGVjdG9yLCBhbmltYXRpb24sIGRlbGF5KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VsZW1lbnQgbm90IGZvdW5kIScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChhbmltYXRpb24pXG4gICAgICAgICAgICAgICAgICAgIH0sIGRlbGF5KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIH1cblxuXG4gICAgbW9uaXRvclZpc2liaWxpdHkoJy5ub3RpZnlfX3BlcnMnLCBcInNob3daZXVzXCIsIDApO1xuICAgIG1vbml0b3JWaXNpYmlsaXR5KCcubm90aWZ5X19wZXJzLWJ1YmxlJywgXCJzaG93WmV1c0J1YmxlXCIsIDEyMDApO1xuICAgIG1vbml0b3JWaXNpYmlsaXR5KCcuY2hvc2VfX3BlcnMtYnVibGUnLCBcInNob3daZXVzQnVibGVcIiwgMCk7XG4gICAgbW9uaXRvclZpc2liaWxpdHkoJy5jaG9zZV9fY2FyZC5fZWFzeScsIFwic2hvd0NhcmRcIiwgNDAwKTtcbiAgICBtb25pdG9yVmlzaWJpbGl0eSgnLmNob3NlX19jYXJkLl9tZWRpdW0nLCBcInNob3dDYXJkXCIsIDgwMCk7XG4gICAgbW9uaXRvclZpc2liaWxpdHkoJy5jaG9zZV9fY2FyZC5faGlnaHQnLCBcInNob3dDYXJkXCIsIDEyMDApO1xuXG5cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUJsb2NrcyhoaWRlQmxvY2ssIGhpZGVDbGFzcywgc2hvd0Jsb2NrLCBzaG93Q2xhc3MsIHN0YXRlLCBhbmltYXRlKXtcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZChzdGF0ZSwgbG9jYWxlKVxuICAgICAgICBoaWRlQmxvY2suY2xhc3NMaXN0LmFkZChoaWRlQ2xhc3MpXG4gICAgICAgIGxldCBkcm9wcyA9IHNob3dCbG9jay5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyb3BcIilcbiAgICAgICAgZHJvcHMuZm9yRWFjaChpdGVtID0+e1xuICAgICAgICAgICAgZGlmZmljdWx0cy5mb3JFYWNoKHN0YXRlID0+e1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShzdGF0ZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIGRyb3BzWzBdLmNsYXNzTGlzdC5hZGQoc3RhdGUpXG4gICAgICAgIGlmKGFuaW1hdGUpe1xuICAgICAgICAgICAgaGlkZUJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT57XG5cbiAgICAgICAgICAgICAgICBzaG93QmxvY2suc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICAgICAgc2hvd0Jsb2NrLnN0eWxlLmhlaWdodCA9IGhpZGVCbG9jay5jbGllbnRIZWlnaHRcbiAgICAgICAgICAgICAgICBoaWRlQmxvY2suY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICBzaG93UmVzdWx0QmxvY2soc2hvd0Jsb2NrLCBzaG93Q2xhc3MpXG4gICAgICAgICAgICAgICAgfSwgNTApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNob3dCbG9jay5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgICAgIHNob3dCbG9jay5zdHlsZS5oZWlnaHQgPSBoaWRlQmxvY2suY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICBoaWRlQmxvY2suY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgIHNob3dSZXN1bHRCbG9jayhzaG93QmxvY2ssIHNob3dDbGFzcylcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd1Jlc3VsdEJsb2NrKHNob3dCbG9jaywgc2hvd0NsYXNzKXtcbiAgICAgICAgc2hvd0Jsb2NrLmNsYXNzTGlzdC5hZGQoc2hvd0NsYXNzKVxuICAgICAgICBzaG93QmxvY2suc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IHNob3dCbG9jay5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlc3VsdF9fYmV0cy1pdGVtXCIpXG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpKSA9PntcbiAgICAgICAgICAgICAgICBpZihpdGVtLmNsYXNzTGlzdC5jb250YWlucyhcInlvdVwiKSl7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeW91ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdF9fYmV0cy15b3VcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHlvdS5jbGFzc0xpc3QuYWRkKCdzaG93WW91JylcbiAgICAgICAgICAgICAgICAgICAgfSwgMjcwMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlc3VsdF9fYnRuXCIpXG4gICAgICAgICAgICAgICAgICAgIGJ0bnMuZm9yRWFjaChidG4gPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcInNob3dCdG5cIilcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LCAyOTAwKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcInNob3dJdGVtXCIpXG4gICAgICAgICAgICAgICAgfSwgMjUwICogaXRlbXMubGVuZ3RoIC0gaSAqIDI1MClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b0Nob3NlXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaG9zZVwiKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSB0YXJnZXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCAtIDI7XG5cbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgIHRvcDogdGFyZ2V0UG9zaXRpb24sXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy90ZXN0XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRlc3RcIikuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIilcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaWdodC1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBkaWZmaWN1bHRzLmZvckVhY2goY3NzID0+e1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShjc3MpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdG9nZ2xlQmxvY2tzKGNob3NlQmxvY2ssIFwiY2hvc2VIaWRlXCIsIHJlc3VsdEJsb2NrLCBcInJlc3VsdFNob3dcIiwgXCJfaGlnaHRcIiwgdHJ1ZSk7XG4gICAgfSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVhc3ktYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgZGlmZmljdWx0cy5mb3JFYWNoKGNzcyA9PntcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoY3NzKVxuICAgICAgICB9KVxuICAgICAgICB0b2dnbGVCbG9ja3MoY2hvc2VCbG9jaywgXCJjaG9zZUhpZGVcIiwgcmVzdWx0QmxvY2ssIFwicmVzdWx0U2hvd1wiLCBcIl9lYXN5XCIsIHRydWUpO1xuICAgIH0pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZWRpdW0tYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgZGlmZmljdWx0cy5mb3JFYWNoKGNzcyA9PntcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoY3NzKVxuICAgICAgICB9KVxuICAgICAgICB0b2dnbGVCbG9ja3MoY2hvc2VCbG9jaywgXCJjaG9zZUhpZGVcIiwgcmVzdWx0QmxvY2ssIFwicmVzdWx0U2hvd1wiLCBcIl9tZWRpdW1cIiwgdHJ1ZSk7XG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdXRoLWJ0bicpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaGFzSWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcbiAgICAgICAgaGFzSWQgPyBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VySWQnKSA6IHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXJJZCcsICcxMDAzMDAyNjgnKTtcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxuZy1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudExvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIik7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRMb2NhbGUgPT09IFwidWtcIikge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIiwgXCJ1a1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXJrLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIilcbiAgICB9KVxuXG59KSgpO1xuIl19
