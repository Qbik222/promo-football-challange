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
    choseCards = document.querySelectorAll(".chose__card"),
    choseCardsInfo = document.querySelectorAll(".chose__card-info"),
    welcomeLock = document.querySelector(".welcome__lock"),
    welcomeTimer = document.querySelector(".welcome__timer"),
    loader = document.querySelector(".spinner-overlay");
  welcomeLock.classList.add("hide");
  welcomeTimer.classList.add("hide");
  mainPage.style.overflow = "hidden";
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
  var locale = "en";
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
  var userId = null;
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
            maxAttempts = 50;
            attemptInterval = 200;
            waitForUserId = new Promise(function (resolve) {
              var interval = setInterval(function () {
                tryDetectUserId();
                quickCheckAndRender();
                if (userId || attempts >= maxAttempts) {
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
  var request = function request(link, extraOptions) {
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
      reportError(err);
      document.querySelector('.fav-page').style.display = 'none';
      if (window.location.href.startsWith("https://www.favbet.hr/")) {
        window.location.href = '/promocije/promocija/stub/';
      } else {
        window.location.href = '/promos/promo/stub/';
      }
      return Promise.reject(err);
    });
  };
  function checkUserAuth() {
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
        mainPage.style.overflow = "auto";
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
      mainPage.style.overflow = "auto";
      return Promise.resolve(false);
    }
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
  startCountdown('.welcome__timer', '2025-05-11T23:59:59');
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

  // //test
  //
  // document.querySelector(".menu-btn").addEventListener("click", () =>{
  //     document.querySelector(".menu-test").classList.toggle("hide")
  // })
  //
  // document.querySelector(".hight-btn").addEventListener("click", () =>{
  //     difficults.forEach(css =>{
  //         mainPage.classList.remove(css)
  //     })
  //
  //     toggleBlocks(choseBlock, "choseHide", resultBlock, "resultShow", "_hight", true);
  // })
  // document.querySelector(".easy-btn").addEventListener("click", () =>{
  //     difficults.forEach(css =>{
  //         mainPage.classList.remove(css)
  //     })
  //     toggleBlocks(choseBlock, "choseHide", resultBlock, "resultShow", "_easy", true);
  // })
  // document.querySelector(".medium-btn").addEventListener("click", () =>{
  //     difficults.forEach(css =>{
  //         mainPage.classList.remove(css)
  //     })
  //     toggleBlocks(choseBlock, "choseHide", resultBlock, "resultShow", "_medium", true);
  // })
  //
  // document.querySelector('.auth-btn')?.addEventListener('click', () => {
  //     const hasId = sessionStorage.getItem('userId');
  //     hasId ? sessionStorage.removeItem('userId') : sessionStorage.setItem('userId', '100300268');
  //     location.reload();
  // });
  //
  // document.querySelector(".lng-btn").addEventListener("click", () => {
  //     const currentLocale = sessionStorage.getItem("locale");
  //
  //     if (currentLocale === "uk") {
  //         sessionStorage.removeItem("locale");
  //     } else {
  //         sessionStorage.setItem("locale", "uk");
  //     }
  //
  //     location.reload();
  // });
  //
  // document.querySelector(".dark-btn").addEventListener("click", () =>{
  //     document.body.classList.toggle("dark")
  // })
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwb3B1cHNXcmFwIiwic2hvd1BvcHVwQnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwb3B1cEl0ZW1zIiwiY2hvc2VCbG9jayIsInJlc3VsdEJsb2NrIiwidW5hdXRoTXNncyIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImNob3NlQ2FyZHMiLCJjaG9zZUNhcmRzSW5mbyIsIndlbGNvbWVMb2NrIiwid2VsY29tZVRpbWVyIiwibG9hZGVyIiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGUiLCJvdmVyZmxvdyIsInVrTGVuZyIsImVuTGVuZyIsImRpZmZpY3VsdHMiLCJtb2RlTWFwIiwibG9jYWxlIiwiZGVidWciLCJtb2NrQmV0cyIsImlkIiwiYmV0RGF0ZSIsInN0YXR1cyIsInVuZGVmaW5lZCIsIm1vY2tVc2VycyIsInVzZXJpZCIsImJldCIsImkxOG5EYXRhIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsImNoZWNrVXNlckF1dGgiLCJyZW5kZXJVc2VycyIsIndpbmRvdyIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJnX3VzZXJfaWQiLCJhdHRlbXB0cyIsIm1heEF0dGVtcHRzIiwiYXR0ZW1wdEludGVydmFsIiwid2FpdEZvclVzZXJJZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJwYXJ0aWNpcGF0ZSIsIm1vZGUiLCJwYXJhbXMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwiZm9yRWFjaCIsIml0ZW0iLCJyZW1vdmUiLCJjc3MiLCJ0b2dnbGVCbG9ja3MiLCJsb2FkVHJhbnNsYXRpb25zIiwiZmV0Y2giLCJqc29uIiwidHJhbnNsYXRlIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJvYnNlcnZlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiZWxlbXMiLCJsZW5ndGgiLCJlbGVtIiwia2V5IiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwicmVtb3ZlQXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsInJlZnJlc2hMb2NhbGl6ZWRDbGFzcyIsInRyYW5zbGF0ZUtleSIsImRlZmF1bHRWYWwiLCJkaXNwbGF5VXNlckluZm8iLCJ1c2VySW5mbyIsImJldHMiLCJkaXNwbGF5QmV0c0hpc3RvcnkiLCJyZWZyZXNoTGFzdFVwZGF0ZWREYXRlIiwic29ydCIsImEiLCJiIiwiRGF0ZSIsInNsaWNlIiwicmV2ZXJzZSIsInJlZnJlc2hCZXRzIiwiZGF0ZUNvbnRhaW5lciIsInNwYW4iLCJsYXN0VXBkYXRlIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJsb2NhbERhdGUiLCJkYXkiLCJTdHJpbmciLCJnZXREYXRlIiwicGFkU3RhcnQiLCJtb250aCIsImdldE1vbnRoIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiZGl2cyIsImkiLCJlbGVtZW50Iiwic3Bpbkl0ZW0iLCJub1NwaW5JdGVtIiwibm9CZXRzIiwidXBkIiwic3BpbiIsInNwaW5EYXRlIiwiZm9ybWF0dGVkRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInJlc29sdmVTdGF0dXNUcmFuc2xhdGlvbiIsInNwaW5FbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImlzV2luIiwic3RhdHVzQ2xhc3MiLCJiZXRJZCIsImFwcGVuZENoaWxkIiwiYmFzZUNzc0NsYXNzIiwibGFuZyIsInJlcG9ydEVycm9yIiwiZXJyIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yVGV4dCIsImVycm9yIiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwiaGVhZGVycyIsIndhcm4iLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwib2siLCJFcnJvciIsImRpc3BsYXkiLCJzdGFydHNXaXRoIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInVuYXV0aE1lcyIsImluZm8iLCJpbml0Q2hvb3NlQ2FyZHMiLCJwYXJ0aWNpcGF0ZUJ0biIsInBvcHVsYXRlVXNlcnNUYWJsZSIsImRhdGEiLCJ1c2VyIiwiZmluZCIsInVzZXJzIiwiZmlsdGVyIiwiY3VycmVudFVzZXJJZCIsInlvdVJvdyIsInRhYmxlQm9keSIsIndpbkNvdW50IiwiaW5kZXgiLCJpc0N1cnJlbnRVc2VyIiwiaXNUb3BVc2VyIiwiZGlzcGxheVVzZXIiLCJwbGFjZSIsInRhcmdldCIsInVzZXJJZERpc3BsYXkiLCJtYXNrVXNlcklkIiwicm93IiwieW91VGV4dCIsInNldEF0dHJpYnV0ZSIsInVzZXJJZERpdiIsInRleHRDb250ZW50IiwiYmV0RGl2IiwidG9TdHJpbmciLCJpbml0ZWQiLCJjYXJkcyIsImNhcmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvbnRhaW5zIiwic2V0UG9wdXAiLCJ3cmFwIiwicG9wdXBOYW1lIiwiYnRucyIsInBvcHVwIiwiY2xvc2VQb3B1cCIsImJ0biIsInBhcmVudE5vZGUiLCJwcmV2ZW50RGVmYXVsdCIsImNsb3NlQnRuIiwic3RhcnRDb3VudGRvd24iLCJzZWxlY3RvciIsImVuZERhdGUiLCJlbGVtZW50cyIsInRhcmdldERhdGUiLCJnZXRUaW1lIiwidXBkYXRlVGltZXIiLCJub3ciLCJ0aW1lTGVmdCIsImludGVydmFsSWQiLCJzZXRUaW1lclZhbHVlcyIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwidmFsdWVzIiwidmFsdWUiLCJtb25pdG9yVmlzaWJpbGl0eSIsImFuaW1hdGlvbiIsImRlbGF5Iiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiaGlkZUJsb2NrIiwiaGlkZUNsYXNzIiwic2hvd0Jsb2NrIiwic2hvd0NsYXNzIiwiYW5pbWF0ZSIsImRyb3BzIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2hvd1Jlc3VsdEJsb2NrIiwiaXRlbXMiLCJ5b3UiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXRFbGVtZW50IiwidGFyZ2V0UG9zaXRpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsQ0FBQyxZQUFZO0VBQ1QsSUFBTUEsTUFBTSxHQUFHLCtDQUErQztFQUU5RCxJQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUNoREMsVUFBVSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDN0NFLGFBQWEsR0FBR0gsUUFBUSxDQUFDSSxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7SUFDdkRDLFVBQVUsR0FBR0wsUUFBUSxDQUFDSSxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7SUFDdERFLFVBQVUsR0FBR04sUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQzdDTSxXQUFXLEdBQUdQLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUMvQ08sVUFBVSxHQUFHUixRQUFRLENBQUNJLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztJQUNyREssZUFBZSxHQUFHVCxRQUFRLENBQUNJLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztJQUN4RE0sWUFBWSxHQUFHVixRQUFRLENBQUNJLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztJQUNyRE8sVUFBVSxHQUFHWCxRQUFRLENBQUNJLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztJQUN0RFEs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LENBQUMsQ0FBQzs7RUFFRjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBRUosQ0FBQyxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfZm9vdGJhbGxfY2hhbGxlbmdlXzInXG5cbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4gICAgICAgIHBvcHVwc1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpLFxuICAgICAgICBzaG93UG9wdXBCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbmZvLWljb25cIiksXG4gICAgICAgIHBvcHVwSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19pdGVtXCIpLFxuICAgICAgICBjaG9zZUJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaG9zZVwiKSxcbiAgICAgICAgcmVzdWx0QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdFwiKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0bicpLFxuICAgICAgICByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWpvaW4nKSxcbiAgICAgICAgY2hvc2VDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hvc2VfX2NhcmRcIiksXG4gICAgICAgIGNob3NlQ2FyZHNJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaG9zZV9fY2FyZC1pbmZvXCIpLFxuICAgICAgICB3ZWxjb21lTG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VsY29tZV9fbG9ja1wiKSxcbiAgICAgICAgd2VsY29tZVRpbWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWxjb21lX190aW1lclwiKSxcbiAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLW92ZXJsYXlcIilcblxuICAgIHdlbGNvbWVMb2NrLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgd2VsY29tZVRpbWVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG5cbiAgICBtYWluUGFnZS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCJcblxuICAgIGNvbnN0IHVrTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1a0xlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBjb25zdCBkaWZmaWN1bHRzID0gW1wiX2Vhc3lcIiwgXCJfbWVkaXVtXCIsIFwiX2hpZ2h0XCJdO1xuICAgIGNvbnN0IG1vZGVNYXAgPSB7XCJub3ZpY2VcIjogXCJfZWFzeVwiLCBcImV4cGVyaWVuY2VkXCI6IFwiX21lZGl1bVwiLCBcImluc2FuZVwiOiBcIl9oaWdodFwiLCBcIl9lYXN5XCI6IFwibm92aWNlXCIsIFwiX21lZGl1bVwiOiBcImV4cGVyaWVuY2VkXCIsIFwiX2hpZ2h0XCI6IFwiaW5zYW5lXCJ9O1xuXG4gICAgbGV0IGxvY2FsZSA9IFwiZW5cIlxuXG5cbiAgICBpZiAodWtMZW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSBmYWxzZVxuXG4gICAgY29uc3QgbW9ja0JldHMgPSBbXG4gICAgICAgIHsgaWQ6IDM4ODMxMDI0NywgYmV0RGF0ZTogJzIwMjUtMDQtMjBUMTI6MDA6MDAnLCBzdGF0dXM6ICd3aW4nIH0sXG4gICAgICAgIHsgaWQ6IDM4ODMxMDI0NywgYmV0RGF0ZTogJzIwMjUtMDQtMjBUMTI6MDA6MDAnLCBzdGF0dXM6ICd3aW4nIH0sXG4gICAgICAgIHsgaWQ6IDM4ODMxMDI0OCwgYmV0RGF0ZTogJzIwMjUtMDQtMTlUMTU6MzA6MDAnLCBzdGF0dXM6ICdsb3NlJyB9LFxuICAgICAgICB7IGlkOiAzODgzMTAyNDgsIGJldERhdGU6ICcyMDI1LTA0LTE5VDE1OjMwOjAwJywgc3RhdHVzOiAnd2luJyB9LFxuICAgICAgICB7IGlkOiAzODgzMTAyNDgsIGJldERhdGU6ICcyMDI1LTA0LTE5VDE1OjMwOjAwJywgc3RhdHVzOiAnbG9zZScgfSxcbiAgICAgICAgeyBpZDogMzg4MzEwMjQ4LCBiZXREYXRlOiAnMjAyNS0wNC0xOVQxNTozMDowMCcsIHN0YXR1czogJ2xvc2UnIH0sXG4gICAgICAgIHsgaWQ6IDM4ODMxMDI0OCwgYmV0RGF0ZTogJzIwMjUtMDQtMTlUMTU6MzA6MDAnLCBzdGF0dXM6ICdsb3NlJyB9LFxuICAgICAgICB7IGlkOiAzODgzMTAyNDksIGJldERhdGU6ICcyMDI1LTA0LTE4VDA5OjE1OjAwJywgc3RhdHVzOiB1bmRlZmluZWQgfSxcbiAgICBdO1xuXG4gICAgY29uc3QgbW9ja1VzZXJzID0gW1xuICAgICAgICB7IHVzZXJpZDogMzg4MzEwMjQ3LCBiZXQ6IDEwIH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMjM0NTY3ODksIGJldDogOSB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMzY4LCBiZXQ6IDggfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDE2OCwgYmV0OiA4IH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAwNjgsIGJldDogOCB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzA4MjY4LCBiZXQ6IDggfSxcbiAgICAgICAgeyB1c2VyaWQ6IDExMTIyMjMzMywgYmV0OiA3IH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMTEyMjIzNDMsIGJldDogNyB9LFxuICAgICAgICB7IHVzZXJpZDogMTExMjIyMzUzLCBiZXQ6IDYgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDExMTIyMjM2MywgYmV0OiA1IH0sXG4gICAgICAgIHsgdXNlcmlkOiA0NDQ1NTU2NjYsIGJldDogNSB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMjY4LCBiZXQ6IDYgfSxcbiAgICBdO1xuXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZSA9IHRydWU7XG4gICAgbGV0IHVzZXJJZCA9IG51bGw7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgICAgICBjb25zdCBtYXhBdHRlbXB0cyA9IDUwO1xuICAgICAgICBjb25zdCBhdHRlbXB0SW50ZXJ2YWwgPSAyMDA7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBxdWlja0NoZWNrQW5kUmVuZGVyKCkge1xuICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICAgICAgcmVuZGVyVXNlcnMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdhaXRGb3JVc2VySWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5RGV0ZWN0VXNlcklkKCk7XG4gICAgICAgICAgICAgICAgcXVpY2tDaGVja0FuZFJlbmRlcigpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJZCB8fCBhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgICAgfSwgYXR0ZW1wdEludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKG1vZGUpIHtcbiAgICAgICAgaWYgKCF1c2VySWQgfHwgIW1vZGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt1c2VyaWQ6IHVzZXJJZCwgbW9kZX07XG4gICAgICAgIHJlcXVlc3QoJy91c2VyJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICBjb25zdCBjc3MgPSBtb2RlTWFwW21vZGVdO1xuICAgICAgICAgICAgdG9nZ2xlQmxvY2tzKGNob3NlQmxvY2ssIFwiY2hvc2VIaWRlXCIsIHJlc3VsdEJsb2NrLCBcInJlc3VsdFNob3dcIiwgY3NzLCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke2FwaVVSTH0vdHJhbnNsYXRlcy8ke2xvY2FsZX1gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9vdGJhbGwtY2hhbGxlbmdlXCIpLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29ya3MhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2FsZSA9PT0gJ2VuJykge1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnZW4nKTtcbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVLZXkoa2V5LCBkZWZhdWx0VmFsKSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGkxOG5EYXRhW2tleV0gfHwgZGVmYXVsdFZhbCB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXJJbmZvKHVzZXJJbmZvKSB7XG4gICAgICAgIGxldCBiZXRzID0gdXNlckluZm8uYmV0c1xuICAgICAgICAvLyBsZXQgYmV0cyA9IFt7YmV0RGF0ZTogbmV3IERhdGUoKSwgc3RhdHVzOiAndW5kZWZpbmVkJ31dXG5cbiAgICAgICAgZGlzcGxheUJldHNIaXN0b3J5KGJldHMpO1xuICAgICAgICByZWZyZXNoTGFzdFVwZGF0ZWREYXRlKHVzZXJJbmZvKTtcbiAgICAgICAgYmV0cyA9IHVzZXJJbmZvLmJldHNcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShiLmJldERhdGUpIC0gbmV3IERhdGUoYS5iZXREYXRlKSlcbiAgICAgICAgICAgIC5zbGljZSgwLCAxMClcbiAgICAgICAgICAgIC5yZXZlcnNlKCk7XG4gICAgICAgIHJlZnJlc2hCZXRzKGJldHMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMYXN0VXBkYXRlZERhdGUodXNlckluZm8pIHtcbiAgICAgICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRfX2xhc3QtdXBkJyk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFzdFVwZCcpO1xuICAgICAgICBpZiAodXNlckluZm8ubGFzdFVwZGF0ZSkge1xuICAgICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSBmb3JtYXREYXRlKHVzZXJJbmZvLmxhc3RVcGRhdGUpO1xuICAgICAgICAgICAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuICAgICAgICBjb25zdCBsb2NhbERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgY29uc3QgZGF5ID0gU3RyaW5nKGxvY2FsRGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gU3RyaW5nKGxvY2FsRGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgaG91cnMgPSBTdHJpbmcobG9jYWxEYXRlLmdldEhvdXJzKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBTdHJpbmcobG9jYWxEYXRlLmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgcmV0dXJuIGAke2RheX0uJHttb250aH0gJHtob3Vyc306JHttaW51dGVzfWA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaEJldHMoYmV0cykge1xuICAgICAgICBjb25zdCBkaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3VsdF9fYmV0cy1pdGVtJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRpdnNbaV07XG4gICAgICAgICAgICBjb25zdCBiZXQgPSBiZXRzW2ldO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd5b3UnKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnX2RvbmUnKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnX2ZhaWwnKTtcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSAnX2ZhaWwnO1xuICAgICAgICAgICAgaWYgKGJldC5zdGF0dXMgPT09ICd3aW4nKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzID0gJ19kb25lJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWJldC5zdGF0dXMgfHwgYmV0LnN0YXR1cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSAneW91JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChzdGF0dXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpc3BsYXlCZXRzSGlzdG9yeShiZXRzKSB7XG4gICAgICAgIC8vIHJldHVybjtcbiAgICAgICAgY29uc3Qgc3Bpbkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BpbnMtcm93Jyk7XG4gICAgICAgIGNvbnN0IG5vU3Bpbkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm8tc3BpbnMnKTtcblxuICAgICAgICBjb25zdCBub0JldHMgPSAhYmV0cyB8fCBiZXRzLmxlbmd0aCA9PT0gMDtcblxuICAgICAgICBpZiAobm9CZXRzICYmICFkZWJ1Zykge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobm9CZXRzLCBkZWJ1ZylcbiAgICAgICAgICAgIHNwaW5JdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIG5vU3Bpbkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZGVidWcpe1xuICAgICAgICAgICAgYmV0cyA9IG1vY2tCZXRzXG4gICAgICAgIH1cblxuXG4gICAgICAgIHNwaW5JdGVtLmlubmVySFRNTCA9XG4gICAgICAgICAgICBgXG4gICAgICAgPGRpdiBjbGFzcz1cInNwaW5zLXJvdy1oZWFkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1kYXRlXCIgZGF0YS10cmFuc2xhdGU9XCJteUJldERhdGVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXByaXplXCIgZGF0YS10cmFuc2xhdGU9XCJteUJldFByaXplXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1zdGF0dXNcIiBkYXRhLXRyYW5zbGF0ZT1cIm15QmV0U3RhdHVzXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICBzcGluSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIG5vU3Bpbkl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG4gICAgICAgIGxldCB1cGQgPSAwO1xuICAgICAgICBiZXRzLmZvckVhY2goc3BpbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcGluRGF0ZSA9IG5ldyBEYXRlKHNwaW4uYmV0RGF0ZSk7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gc3BpbkRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCd1ay1VQScpLnNsaWNlKDAsIDUpO1xuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gcmVzb2x2ZVN0YXR1c1RyYW5zbGF0aW9uKHNwaW4uc3RhdHVzKTtcblxuICAgICAgICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwaW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgc3BpbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3BpbnMtcm93LWl0ZW0nKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGlzV2luID0gc3Bpbi5zdGF0dXMgPT09IFwid2luXCI7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzQ2xhc3MgPSBpc1dpbiA/ICdfZG9uZScgOiAnJztcblxuICAgICAgICAgICAgICAgIHNwaW5FbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb250ZW50LWRhdGVcIj4ke2Zvcm1hdHRlZERhdGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbnRlbnQtcHJpemVcIj5JRDoke3NwaW4uYmV0SWR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbnRlbnQtc3RhdHVzICR7c3RhdHVzQ2xhc3N9XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgc3Bpbkl0ZW0uYXBwZW5kQ2hpbGQoc3BpbkVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHVwZCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodXBkID09PSAwKSB7XG4gICAgICAgICAgICBzcGluSXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICBub1NwaW5JdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc29sdmVTdGF0dXNUcmFuc2xhdGlvbihzdGF0dXMpIHtcbiAgICAgICAgaWYgKCFzdGF0dXMgfHwgc3RhdHVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZUtleSgnYmV0VW5kZWZpbmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ3dpbicpIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGVLZXkoJ3dpbkJldCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0dXMgPT09ICdsb3NlJykge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZUtleSgnbG9zZUJldCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQsIGJhc2VDc3NDbGFzcykge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYmFzZUNzc0NsYXNzICsgbGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGJhc2VDc3NDbGFzcyArIGxvY2FsZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdBUEkgZXJyb3InKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyKTtcblxuICAgICAgICAgICAgICAgIHJlcG9ydEVycm9yKGVycik7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgd2VsY29tZVRpbWVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG5cbiAgICAgICAgICAgIH0sIDMwMClcbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBpbmZvIG9mIGNob3NlQ2FyZHNJbmZvKSB7XG4gICAgICAgICAgICAgICAgaW5mby5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdChgL2ZhdnVzZXIvJHt1c2VySWR9P25vY2FjaGU9MWApXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWxjb21lTG9jay5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3NzID0gbW9kZU1hcFtyZXMubW9kZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVCbG9ja3MoY2hvc2VCbG9jaywgXCJjaG9zZUhpZGVcIiwgcmVzdWx0QmxvY2ssIFwicmVzdWx0U2hvd1wiLCBjc3MsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlVc2VySW5mbyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdENob29zZUNhcmRzKGNob3NlQ2FyZHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlbGNvbWVMb2NrLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgICAgICAgICAgICAgIG1haW5QYWdlLnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZGlzcGxheVVzZXJTcGlucygwKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaW5mbyBvZiBjaG9zZUNhcmRzSW5mbykge1xuICAgICAgICAgICAgICAgIGluZm8uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgcGFydGljaXBhdGVCdG4gb2YgcGFydGljaXBhdGVCdG5zKSB7XG4gICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3ZWxjb21lTG9jay5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICB3ZWxjb21lVGltZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAgICAgICAgIH0sIDMwMClcbiAgICAgICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgbWFpblBhZ2Uuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJVc2VycygpIHtcbiAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUobW9ja1VzZXJzLCB1c2VySWQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cblxuICAgICAgICByZXF1ZXN0KGAvdXNlcnMvYCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBkYXRhLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gdXNlcklkKTtcbiAgICAgICAgICAgIGNvbnN0IG1vZGUgPSB1c2VyID8gdXNlci5tb2RlIDogbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJzID0gZGF0YS5maWx0ZXIodXNlciA9PiB1c2VyLm1vZGUgPT09IG1vZGUpXG4gICAgICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIHVzZXJJZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCkge1xuICAgICAgICBjb25zdCB5b3VSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGVPdGhlcicpO1xuICAgICAgICBjb25zdCB0YWJsZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGUnKTtcblxuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGggfHwgY3VycmVudFVzZXJJZCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgICAgICAgeW91Um93LmlubmVySFRNTCA9ICcnO1xuICAgICAgICB0YWJsZUJvZHkuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgdXNlcnMgPSB1c2Vycy5zb3J0KChhLCBiKSA9PiBiLndpbkNvdW50IC0gYS53aW5Db3VudCk7XG5cblxuICAgICAgICB1c2Vycy5mb3JFYWNoKCh1c2VyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50VXNlciA9IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkO1xuICAgICAgICAgICAgbGV0IGlzVG9wVXNlciA9IGZhbHNlXG5cbiAgICAgICAgICAgIGlmKGluZGV4IDw9IDUgJiYgaXNDdXJyZW50VXNlcil7XG4gICAgICAgICAgICAgICBpc1RvcFVzZXIgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihpbmRleCA+PSAyMCAmJiAhaXNDdXJyZW50VXNlcikgcmV0dXJuXG5cbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIGluZGV4ICsgMSwgaXNDdXJyZW50VXNlciAmJiAhaXNUb3BVc2VyID8geW91Um93IDogdGFibGVCb2R5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXIodXNlciwgaXNDdXJyZW50VXNlciwgcGxhY2UsIHRhcmdldCkge1xuXG5cbiAgICAgICAgY29uc3QgdXNlcklkRGlzcGxheSA9IGlzQ3VycmVudFVzZXIgPyB1c2VyLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlci51c2VyaWQpO1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuXG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICAvLyDQodGC0LLQvtGA0LXQvdC90Y8g0LXQu9C10LzQtdC90YLRgyAneW91JyDRgtCwINCy0YHRgtCw0LLQutCwINC50L7Qs9C+INC/0ZbRgdC70Y8g0LXQu9C10LzQtdC90YLRgyDQtyDQvNGW0YHRhtC10LxcbiAgICAgICAgICAgIGNvbnN0IHlvdVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHlvdVRleHQuY2xhc3NMaXN0LmFkZCgndGFibGVfX3Jvdy1pdGVtJywgJ195b3UtdGV4dCcpO1xuICAgICAgICAgICAgeW91VGV4dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgJ3lvdScpO1xuXG5cbiAgICAgICAgICAgIHJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+JHtwbGFjZX08L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgLy8g0JTQvtC00LDRlNC80L4gXCJ5b3VcIiDRgtC10LrRgdGCINC/0ZbRgdC70Y8g0LzRltGB0YbRj1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHlvdVRleHQpO1xuXG4gICAgICAgICAgICAvLyDQn9C+0YLRltC8INC00L7QtNCw0ZTQvNC+IHVzZXJJZCDRgtCwINGB0YLQsNCy0LrRg1xuICAgICAgICAgICAgY29uc3QgdXNlcklkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1c2VySWREaXYuY2xhc3NMaXN0LmFkZCgndGFibGVfX3Jvdy1pdGVtJyk7XG4gICAgICAgICAgICB1c2VySWREaXYudGV4dENvbnRlbnQgPSB1c2VySWREaXNwbGF5O1xuXG4gICAgICAgICAgICBjb25zdCBiZXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJldERpdi5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93LWl0ZW0nKTtcbiAgICAgICAgICAgIGJldERpdi50ZXh0Q29udGVudCA9IHVzZXIud2luQ291bnQ7XG5cbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh1c2VySWREaXYpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGJldERpdik7XG5cbiAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdfeW91Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPiR7cGxhY2V9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+JHt1c2VySWREaXNwbGF5fTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPiR7dXNlci53aW5Db3VudH08L2Rpdj5cbiAgICAgICAgYDtcblxuXG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBtYXNrVXNlcklkKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gXCIqKioqXCIgKyB1c2VySWQudG9TdHJpbmcoKS5zbGljZSg0KTtcbiAgICB9XG5cblxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKVxuICAgICAgICAudGhlbihpbml0KTtcblxuICAgIGxldCBpbml0ZWQgPSBmYWxzZTtcbiAgICBmdW5jdGlvbiBpbml0Q2hvb3NlQ2FyZHMoY2FyZHMpe1xuICAgICAgICBpZiAoaW5pdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT57XG4gICAgICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaW5mby1pY29uXCIpKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlmZmljdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZGlmZmljdWx0c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RlID0gbW9kZU1hcFtpdGVtXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlKG1vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja1VzZXJBdXRoKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJVc2VycygpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDApXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICBpbml0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFBvcHVwKHdyYXAsIHBvcHVwTmFtZSwgYnRucywgcG9wdXBJdGVtcyl7XG4gICAgICAgIGxldCBwb3B1cCA9IHdyYXAucXVlcnlTZWxlY3RvcihgLiR7cG9wdXBOYW1lfWApXG5cbiAgICAgICAgd3JhcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgZS50YXJnZXQgPT09IHdyYXAgPyBjbG9zZVBvcHVwKCkgOiBudWxsXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgY2xvc2VQb3B1cCA9ICgpID0+e1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIilcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICAgICAgd3JhcC5jbGFzc0xpc3QuYWRkKFwiX29wYWNpdHlcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgICAgaWYoYnRuLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMocG9wdXBOYW1lKSl7XG4gICAgICAgICAgICAgICAgYnRuLnBhcmVudE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgICAgICAgICAgaWYoZS50YXJnZXQgPT09IGJ0bil7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBJdGVtcy5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJfYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgIHdyYXAuY2xhc3NMaXN0LnJlbW92ZShcIl9vcGFjaXR5XCIpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBsZXQgY2xvc2VCdG4gPSBwb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19jbG9zZVwiKVxuICAgICAgICAgICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VQb3B1cCgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzZXRQb3B1cChwb3B1cHNXcmFwLCBcIl9lYXN5XCIsIHNob3dQb3B1cEJ0bnMsIHBvcHVwSXRlbXMpXG4gICAgc2V0UG9wdXAocG9wdXBzV3JhcCwgXCJfbWVkaXVtXCIsIHNob3dQb3B1cEJ0bnMsIHBvcHVwSXRlbXMpXG4gICAgc2V0UG9wdXAocG9wdXBzV3JhcCwgXCJfaGlnaHRcIiwgc2hvd1BvcHVwQnRucywgcG9wdXBJdGVtcylcbiAgICBzZXRQb3B1cChwb3B1cHNXcmFwLCBcIl9ub3RpZnlcIiwgc2hvd1BvcHVwQnRucywgcG9wdXBJdGVtcylcblxuICAgIGZ1bmN0aW9uIHN0YXJ0Q291bnRkb3duKHNlbGVjdG9yLCBlbmREYXRlKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtzZWxlY3Rvcn0gLndlbGNvbWVfX3RpbWVyLWl0ZW0tbnVtYCk7XG4gICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggIT09IDQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgc2VsZWN0b3IhJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YXJnZXREYXRlID0gbmV3IERhdGUoZW5kRGF0ZSkuZ2V0VGltZSgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWVyKCkge1xuICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCB0aW1lTGVmdCA9IHRhcmdldERhdGUgLSBub3c7XG5cbiAgICAgICAgICAgIGlmICh0aW1lTGVmdCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lclZhbHVlcyhbMCwgMCwgMCwgMF0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IodGltZUxlZnQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHRpbWVMZWZ0ICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVyVmFsdWVzKFtkYXlzLCBob3VycywgbWludXRlcywgc2Vjb25kc10pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0VGltZXJWYWx1ZXModmFsdWVzKSB7XG4gICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaW5kZXhdLnRleHRDb250ZW50ID0gdmFsdWUgPCAxMCA/IGAwJHt2YWx1ZX1gIDogdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZVRpbWVyKCk7XG4gICAgICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh1cGRhdGVUaW1lciwgMTAwMCk7XG4gICAgfVxuXG4gICAgc3RhcnRDb3VudGRvd24oJy53ZWxjb21lX190aW1lcicsICcyMDI1LTA1LTExVDIzOjU5OjU5Jyk7XG5cbiAgICBmdW5jdGlvbiBtb25pdG9yVmlzaWJpbGl0eShzZWxlY3RvciwgYW5pbWF0aW9uLCBkZWxheSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFbGVtZW50IG5vdCBmb3VuZCEnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYW5pbWF0aW9uKVxuICAgICAgICAgICAgICAgICAgICB9LCBkZWxheSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICB9XG5cblxuICAgIG1vbml0b3JWaXNpYmlsaXR5KCcubm90aWZ5X19wZXJzJywgXCJzaG93WmV1c1wiLCAwKTtcbiAgICBtb25pdG9yVmlzaWJpbGl0eSgnLm5vdGlmeV9fcGVycy1idWJsZScsIFwic2hvd1pldXNCdWJsZVwiLCAxMjAwKTtcbiAgICBtb25pdG9yVmlzaWJpbGl0eSgnLmNob3NlX19wZXJzLWJ1YmxlJywgXCJzaG93WmV1c0J1YmxlXCIsIDApO1xuICAgIG1vbml0b3JWaXNpYmlsaXR5KCcuY2hvc2VfX2NhcmQuX2Vhc3knLCBcInNob3dDYXJkXCIsIDQwMCk7XG4gICAgbW9uaXRvclZpc2liaWxpdHkoJy5jaG9zZV9fY2FyZC5fbWVkaXVtJywgXCJzaG93Q2FyZFwiLCA4MDApO1xuICAgIG1vbml0b3JWaXNpYmlsaXR5KCcuY2hvc2VfX2NhcmQuX2hpZ2h0JywgXCJzaG93Q2FyZFwiLCAxMjAwKTtcblxuXG5cbiAgICBmdW5jdGlvbiB0b2dnbGVCbG9ja3MoaGlkZUJsb2NrLCBoaWRlQ2xhc3MsIHNob3dCbG9jaywgc2hvd0NsYXNzLCBzdGF0ZSwgYW5pbWF0ZSl7XG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoc3RhdGUsIGxvY2FsZSlcbiAgICAgICAgaGlkZUJsb2NrLmNsYXNzTGlzdC5hZGQoaGlkZUNsYXNzKVxuICAgICAgICBsZXQgZHJvcHMgPSBzaG93QmxvY2sucXVlcnlTZWxlY3RvckFsbChcIi5kcm9wXCIpXG4gICAgICAgIGRyb3BzLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgIGRpZmZpY3VsdHMuZm9yRWFjaChzdGF0ZSA9PntcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoc3RhdGUpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBkcm9wc1swXS5jbGFzc0xpc3QuYWRkKHN0YXRlKVxuICAgICAgICBpZihhbmltYXRlKXtcbiAgICAgICAgICAgIGhpZGVCbG9jay5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+e1xuXG4gICAgICAgICAgICAgICAgc2hvd0Jsb2NrLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAgICAgICAgIHNob3dCbG9jay5zdHlsZS5oZWlnaHQgPSBoaWRlQmxvY2suY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICAgICAgaGlkZUJsb2NrLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgc2hvd1Jlc3VsdEJsb2NrKHNob3dCbG9jaywgc2hvd0NsYXNzKVxuICAgICAgICAgICAgICAgIH0sIDUwKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzaG93QmxvY2suc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICBzaG93QmxvY2suc3R5bGUuaGVpZ2h0ID0gaGlkZUJsb2NrLmNsaWVudEhlaWdodFxuICAgICAgICAgICAgaGlkZUJsb2NrLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgICAgICBzaG93UmVzdWx0QmxvY2soc2hvd0Jsb2NrLCBzaG93Q2xhc3MpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dSZXN1bHRCbG9jayhzaG93QmxvY2ssIHNob3dDbGFzcyl7XG4gICAgICAgIHNob3dCbG9jay5jbGFzc0xpc3QuYWRkKHNob3dDbGFzcylcbiAgICAgICAgc2hvd0Jsb2NrLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICBsZXQgaXRlbXMgPSBzaG93QmxvY2sucXVlcnlTZWxlY3RvckFsbChcIi5yZXN1bHRfX2JldHMtaXRlbVwiKVxuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaSkgPT57XG4gICAgICAgICAgICAgICAgaWYoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJ5b3VcIikpe1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHlvdSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRfX2JldHMteW91XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB5b3UuY2xhc3NMaXN0LmFkZCgnc2hvd1lvdScpXG4gICAgICAgICAgICAgICAgICAgIH0sIDI3MDApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZXN1bHRfX2J0blwiKVxuICAgICAgICAgICAgICAgICAgICBidG5zLmZvckVhY2goYnRuID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJzaG93QnRuXCIpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSwgMjkwMClcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgIH0sIDI1MCAqIGl0ZW1zLmxlbmd0aCAtIGkgKiAyNTApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9DaG9zZVwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hvc2VcIik7XG4gICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gdGFyZ2V0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSAyO1xuXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICB0b3A6IHRhcmdldFBvc2l0aW9uLFxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIC8vdGVzdFxuICAgIC8vXG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpXG4gICAgLy8gfSlcbiAgICAvL1xuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlnaHQtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAvLyAgICAgZGlmZmljdWx0cy5mb3JFYWNoKGNzcyA9PntcbiAgICAvLyAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoY3NzKVxuICAgIC8vICAgICB9KVxuICAgIC8vXG4gICAgLy8gICAgIHRvZ2dsZUJsb2NrcyhjaG9zZUJsb2NrLCBcImNob3NlSGlkZVwiLCByZXN1bHRCbG9jaywgXCJyZXN1bHRTaG93XCIsIFwiX2hpZ2h0XCIsIHRydWUpO1xuICAgIC8vIH0pXG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lYXN5LWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgLy8gICAgIGRpZmZpY3VsdHMuZm9yRWFjaChjc3MgPT57XG4gICAgLy8gICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKGNzcylcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgdG9nZ2xlQmxvY2tzKGNob3NlQmxvY2ssIFwiY2hvc2VIaWRlXCIsIHJlc3VsdEJsb2NrLCBcInJlc3VsdFNob3dcIiwgXCJfZWFzeVwiLCB0cnVlKTtcbiAgICAvLyB9KVxuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVkaXVtLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgLy8gICAgIGRpZmZpY3VsdHMuZm9yRWFjaChjc3MgPT57XG4gICAgLy8gICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKGNzcylcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgdG9nZ2xlQmxvY2tzKGNob3NlQmxvY2ssIFwiY2hvc2VIaWRlXCIsIHJlc3VsdEJsb2NrLCBcInJlc3VsdFNob3dcIiwgXCJfbWVkaXVtXCIsIHRydWUpO1xuICAgIC8vIH0pXG4gICAgLy9cbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXV0aC1idG4nKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGhhc0lkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XG4gICAgLy8gICAgIGhhc0lkID8gc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcklkJykgOiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VySWQnLCAnMTAwMzAwMjY4Jyk7XG4gICAgLy8gICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIC8vIH0pO1xuICAgIC8vXG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sbmctYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGN1cnJlbnRMb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpO1xuICAgIC8vXG4gICAgLy8gICAgIGlmIChjdXJyZW50TG9jYWxlID09PSBcInVrXCIpIHtcbiAgICAvLyAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbGVcIik7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwidWtcIik7XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAvLyB9KTtcbiAgICAvL1xuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFyay1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgIC8vICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpXG4gICAgLy8gfSlcblxufSkoKTtcbiJdfQ==
