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
    welcomeTimer = document.querySelector(".welcome__timer");
  welcomeLock.classList.add("hide");
  welcomeTimer.classList.add("hide");
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
    var youRow = document.querySelector('#tableOther');
    var tableBody = document.querySelector('#table');
    if (!(users !== null && users !== void 0 && users.length) || currentUserId === undefined) return;
    youRow.innerHTML = '';
    tableBody.innerHTML = '';
    users.sort(function (a, b) {
      return b.winCount - a.winCount;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwb3B1cHNXcmFwIiwic2hvd1BvcHVwQnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwb3B1cEl0ZW1zIiwiY2hvc2VCbG9jayIsInJlc3VsdEJsb2NrIiwidW5hdXRoTXNncyIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImNob3NlQ2FyZHMiLCJjaG9zZUNhcmRzSW5mbyIsIndlbGNvbWVMb2NrIiwid2VsY29tZVRpbWVyIiwiY2xhc3NMaXN0IiwiYWRkIiwidWtMZW5nIiwiZW5MZW5nIiwiZGlmZmljdWx0cyIsIm1vZGVNYXAiLCJsb2NhbGUiLCJkZWJ1ZyIsIm1vY2tCZXRzIiwiaWQiLCJiZXREYXRlIiwic3RhdHVzIiwidW5kZWZpbmVkIiwibW9ja1VzZXJzIiwidXNlcmlkIiwiYmV0IiwiaTE4bkRhdGEiLCJ0cmFuc2xhdGVTdGF0ZSIsInVzZXJJZCIsImluaXQiLCJ0cnlEZXRlY3RVc2VySWQiLCJxdWlja0NoZWNrQW5kUmVuZGVyIiwiY2hlY2tVc2VyQXV0aCIsInJlbmRlclVzZXJzIiwid2luZG93Iiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImdfdXNlcl9pZCIsImF0dGVtcHRzIiwibWF4QXR0ZW1wdHMiLCJhdHRlbXB0SW50ZXJ2YWwiLCJ3YWl0Rm9yVXNlcklkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInBhcnRpY2lwYXRlIiwibW9kZSIsInBhcmFtcyIsInJlcXVlc3QiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJmb3JFYWNoIiwiaXRlbSIsInJlbW92ZSIsImNzcyIsInRvZ2dsZUJsb2NrcyIsImxvYWRUcmFuc2xhdGlvbnMiLCJmZXRjaCIsImpzb24iLCJ0cmFuc2xhdGUiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm9ic2VydmUiLCJnZXRFbGVtZW50QnlJZCIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJlbGVtcyIsImxlbmd0aCIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwidHJhbnNsYXRlS2V5IiwiZGVmYXVsdFZhbCIsImRpc3BsYXlVc2VySW5mbyIsInVzZXJJbmZvIiwiYmV0cyIsImRpc3BsYXlCZXRzSGlzdG9yeSIsInJlZnJlc2hMYXN0VXBkYXRlZERhdGUiLCJzb3J0IiwiYSIsImIiLCJEYXRlIiwic2xpY2UiLCJyZXZlcnNlIiwicmVmcmVzaEJldHMiLCJkYXRlQ29udGFpbmVyIiwic3BhbiIsImxhc3RVcGRhdGUiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImxvY2FsRGF0ZSIsImRheSIsIlN0cmluZyIsImdldERhdGUiLCJwYWRTdGFydCIsIm1vbnRoIiwiZ2V0TW9udGgiLCJob3VycyIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJkaXZzIiwiaSIsImVsZW1lbnQiLCJzcGluSXRlbSIsIm5vU3Bpbkl0ZW0iLCJub0JldHMiLCJ1cGQiLCJzcGluIiwic3BpbkRhdGUiLCJmb3JtYXR0ZWREYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwicmVzb2x2ZVN0YXR1c1RyYW5zbGF0aW9uIiwic3BpbkVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaXNXaW4iLCJzdGF0dXNDbGFzcyIsImJldElkIiwiYXBwZW5kQ2hpbGQiLCJiYXNlQ3NzQ2xhc3MiLCJsYW5nIiwicmVwb3J0RXJyb3IiLCJlcnIiLCJyZXBvcnREYXRhIiwib3JpZ2luIiwibG9jYXRpb24iLCJocmVmIiwiZXJyb3JUZXh0IiwiZXJyb3IiLCJ0ZXh0IiwibWVzc2FnZSIsInR5cGUiLCJuYW1lIiwic3RhY2siLCJoZWFkZXJzIiwid2FybiIsImxpbmsiLCJleHRyYU9wdGlvbnMiLCJvayIsIkVycm9yIiwic3R5bGUiLCJkaXNwbGF5Iiwic3RhcnRzV2l0aCIsInJlamVjdCIsInNldFRpbWVvdXQiLCJ1bmF1dGhNZXMiLCJpbmZvIiwiaW5pdENob29zZUNhcmRzIiwicGFydGljaXBhdGVCdG4iLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJkYXRhIiwidXNlciIsImZpbmQiLCJ1c2VycyIsImZpbHRlciIsImN1cnJlbnRVc2VySWQiLCJ5b3VSb3ciLCJ0YWJsZUJvZHkiLCJ3aW5Db3VudCIsImluZGV4IiwiaXNDdXJyZW50VXNlciIsImlzVG9wVXNlciIsImRpc3BsYXlVc2VyIiwicGxhY2UiLCJ0YXJnZXQiLCJ1c2VySWREaXNwbGF5IiwibWFza1VzZXJJZCIsInJvdyIsInlvdVRleHQiLCJzZXRBdHRyaWJ1dGUiLCJ1c2VySWREaXYiLCJ0ZXh0Q29udGVudCIsImJldERpdiIsInRvU3RyaW5nIiwiaW5pdGVkIiwiY2FyZHMiLCJjYXJkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb250YWlucyIsInNldFBvcHVwIiwid3JhcCIsInBvcHVwTmFtZSIsImJ0bnMiLCJwb3B1cCIsImNsb3NlUG9wdXAiLCJvdmVyZmxvdyIsImJ0biIsInBhcmVudE5vZGUiLCJwcmV2ZW50RGVmYXVsdCIsImNsb3NlQnRuIiwic3RhcnRDb3VudGRvd24iLCJzZWxlY3RvciIsImVuZERhdGUiLCJlbGVtZW50cyIsInRhcmdldERhdGUiLCJnZXRUaW1lIiwidXBkYXRlVGltZXIiLCJub3ciLCJ0aW1lTGVmdCIsImludGVydmFsSWQiLCJzZXRUaW1lclZhbHVlcyIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwidmFsdWVzIiwidmFsdWUiLCJtb25pdG9yVmlzaWJpbGl0eSIsImFuaW1hdGlvbiIsImRlbGF5Iiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiaGlkZUJsb2NrIiwiaGlkZUNsYXNzIiwic2hvd0Jsb2NrIiwic2hvd0NsYXNzIiwiYW5pbWF0ZSIsImRyb3BzIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2hvd1Jlc3VsdEJsb2NrIiwiaXRlbXMiLCJ5b3UiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXRFbGVtZW50IiwidGFyZ2V0UG9zaXRpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsQ0FBQyxZQUFZO0VBQ1QsSUFBTUEsTUFBTSxHQUFHLCtDQUErQztFQUU5RCxJQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUNoREMsVUFBVSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDN0NFLGFBQWEsR0FBR0gsUUFBUSxDQUFDSSxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7SUFDdkRDLFVBQVUsR0FBR0wsUUFBUSxDQUFDSSxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7SUFDdERFLFVBQVUsR0FBR04sUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQzdDTSxXQUFXLEdBQUdQLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUMvQ08sVUFBVSxHQUFHUixRQUFRLENBQUNJLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztJQUNyREssZUFBZSxHQUFHVCxRQUFRLENBQUNJLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztJQUN4RE0sWUFBWSxHQUFHVixRQUFRLENBQUNJLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztJQUNyRE8sVUFBVSxHQUFHWCxRQUFRLENBQUNJLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztJQUN0RFEsY0FBYyxHQUFH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UUFDTixDQUFDLEVBQUUsSUFBSSxDQUFDO1FBQ1JvSixVQUFVLENBQUMsWUFBSztVQUNabEcsSUFBSSxDQUFDbkQsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO1FBQ2xDLENBQUMsRUFBRSxHQUFHLEdBQUdxTyxLQUFLLENBQUNuSyxNQUFNLEdBQUd3QyxDQUFDLEdBQUcsR0FBRyxDQUFDO01BQ3BDLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOO0VBRUExSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQ29NLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVQyxDQUFDLEVBQUU7SUFDdEVBLENBQUMsQ0FBQ2lELGVBQWUsRUFBRTtJQUNuQixJQUFNQyxhQUFhLEdBQUd4UCxRQUFRLENBQUM4RSxjQUFjLENBQUMsT0FBTyxDQUFDO0lBQ3RELElBQU0ySyxjQUFjLEdBQUdELGFBQWEsQ0FBQ0UscUJBQXFCLEVBQUUsQ0FBQ0MsR0FBRyxHQUFHcE4sTUFBTSxDQUFDcU4sV0FBVyxHQUFHLENBQUM7SUFFekZyTixNQUFNLENBQUNzTixRQUFRLENBQUM7TUFDWkYsR0FBRyxFQUFFRixjQUFjO01BQ25CSyxRQUFRLEVBQUU7SUFDZCxDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7O0VBRUY7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUVKLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX2Zvb3RiYWxsX2NoYWxsZW5nZV8yJ1xuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICBwb3B1cHNXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKSxcbiAgICAgICAgc2hvd1BvcHVwQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5mby1pY29uXCIpLFxuICAgICAgICBwb3B1cEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9faXRlbVwiKSxcbiAgICAgICAgY2hvc2VCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hvc2VcIiksXG4gICAgICAgIHJlc3VsdEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRcIiksXG4gICAgICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFydC1idG4nKSxcbiAgICAgICAgcmVkaXJlY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1qb2luJyksXG4gICAgICAgIGNob3NlQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNob3NlX19jYXJkXCIpLFxuICAgICAgICBjaG9zZUNhcmRzSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hvc2VfX2NhcmQtaW5mb1wiKSxcbiAgICAgICAgd2VsY29tZUxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlbGNvbWVfX2xvY2tcIiksXG4gICAgICAgIHdlbGNvbWVUaW1lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VsY29tZV9fdGltZXJcIilcblxuICAgIHdlbGNvbWVMb2NrLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgd2VsY29tZVRpbWVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG5cbiAgICBjb25zdCB1a0xlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWtMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgY29uc3QgZGlmZmljdWx0cyA9IFtcIl9lYXN5XCIsIFwiX21lZGl1bVwiLCBcIl9oaWdodFwiXTtcbiAgICBjb25zdCBtb2RlTWFwID0ge1wibm92aWNlXCI6IFwiX2Vhc3lcIiwgXCJleHBlcmllbmNlZFwiOiBcIl9tZWRpdW1cIiwgXCJpbnNhbmVcIjogXCJfaGlnaHRcIiwgXCJfZWFzeVwiOiBcIm5vdmljZVwiLCBcIl9tZWRpdW1cIjogXCJleHBlcmllbmNlZFwiLCBcIl9oaWdodFwiOiBcImluc2FuZVwifTtcblxuICAgIGxldCBsb2NhbGUgPSBcImVuXCJcblxuXG4gICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IGRlYnVnID0gZmFsc2VcblxuICAgIGNvbnN0IG1vY2tCZXRzID0gW1xuICAgICAgICB7IGlkOiAzODgzMTAyNDcsIGJldERhdGU6ICcyMDI1LTA0LTIwVDEyOjAwOjAwJywgc3RhdHVzOiAnd2luJyB9LFxuICAgICAgICB7IGlkOiAzODgzMTAyNDcsIGJldERhdGU6ICcyMDI1LTA0LTIwVDEyOjAwOjAwJywgc3RhdHVzOiAnd2luJyB9LFxuICAgICAgICB7IGlkOiAzODgzMTAyNDgsIGJldERhdGU6ICcyMDI1LTA0LTE5VDE1OjMwOjAwJywgc3RhdHVzOiAnbG9zZScgfSxcbiAgICAgICAgeyBpZDogMzg4MzEwMjQ4LCBiZXREYXRlOiAnMjAyNS0wNC0xOVQxNTozMDowMCcsIHN0YXR1czogJ3dpbicgfSxcbiAgICAgICAgeyBpZDogMzg4MzEwMjQ4LCBiZXREYXRlOiAnMjAyNS0wNC0xOVQxNTozMDowMCcsIHN0YXR1czogJ2xvc2UnIH0sXG4gICAgICAgIHsgaWQ6IDM4ODMxMDI0OCwgYmV0RGF0ZTogJzIwMjUtMDQtMTlUMTU6MzA6MDAnLCBzdGF0dXM6ICdsb3NlJyB9LFxuICAgICAgICB7IGlkOiAzODgzMTAyNDgsIGJldERhdGU6ICcyMDI1LTA0LTE5VDE1OjMwOjAwJywgc3RhdHVzOiAnbG9zZScgfSxcbiAgICAgICAgeyBpZDogMzg4MzEwMjQ5LCBiZXREYXRlOiAnMjAyNS0wNC0xOFQwOToxNTowMCcsIHN0YXR1czogdW5kZWZpbmVkIH0sXG4gICAgXTtcblxuICAgIGNvbnN0IG1vY2tVc2VycyA9IFtcbiAgICAgICAgeyB1c2VyaWQ6IDM4ODMxMDI0NywgYmV0OiAxMCB9LFxuICAgICAgICB7IHVzZXJpZDogMTIzNDU2Nzg5LCBiZXQ6IDkgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDM2OCwgYmV0OiA4IH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAxNjgsIGJldDogOCB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMDY4LCBiZXQ6IDggfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwODI2OCwgYmV0OiA4IH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMTEyMjIzMzMsIGJldDogNyB9LFxuICAgICAgICB7IHVzZXJpZDogMTExMjIyMzQzLCBiZXQ6IDcgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDExMTIyMjM1MywgYmV0OiA2IH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMTEyMjIzNjMsIGJldDogNSB9LFxuICAgICAgICB7IHVzZXJpZDogNDQ0NTU1NjY2LCBiZXQ6IDUgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDI2OCwgYmV0OiA2IH0sXG4gICAgXTtcblxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGUgPSB0cnVlO1xuICAgIGxldCB1c2VySWQgPSBudWxsO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSA1MDtcbiAgICAgICAgY29uc3QgYXR0ZW1wdEludGVydmFsID0gMjAwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyeURldGVjdFVzZXJJZCgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcXVpY2tDaGVja0FuZFJlbmRlcigpIHtcbiAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICAgICAgICAgIHJlbmRlclVzZXJzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWl0Rm9yVXNlcklkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeURldGVjdFVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKTtcblxuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgfHwgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgICAgIH0sIGF0dGVtcHRJbnRlcnZhbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JVc2VySWQ7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBwYXJ0aWNpcGF0ZShtb2RlKSB7XG4gICAgICAgIGlmICghdXNlcklkIHx8ICFtb2RlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7dXNlcmlkOiB1c2VySWQsIG1vZGV9O1xuICAgICAgICByZXF1ZXN0KCcvdXNlcicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgY29uc3QgY3NzID0gbW9kZU1hcFttb2RlXTtcbiAgICAgICAgICAgIHRvZ2dsZUJsb2NrcyhjaG9zZUJsb2NrLCBcImNob3NlSGlkZVwiLCByZXN1bHRCbG9jaywgXCJyZXN1bHRTaG93XCIsIGNzcywgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChgJHthcGlVUkx9L3RyYW5zbGF0ZXMvJHtsb2NhbGV9YCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcblxuICAgICAgICAgICAgICAgIHZhciBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvb3RiYWxsLWNoYWxsZW5nZVwiKSwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmtzIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdlbicpIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ2VuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSwgZGVmYXVsdFZhbCkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8IGRlZmF1bHRWYWwgfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VySW5mbyh1c2VySW5mbykge1xuICAgICAgICBsZXQgYmV0cyA9IHVzZXJJbmZvLmJldHNcbiAgICAgICAgLy8gbGV0IGJldHMgPSBbe2JldERhdGU6IG5ldyBEYXRlKCksIHN0YXR1czogJ3VuZGVmaW5lZCd9XVxuXG4gICAgICAgIGRpc3BsYXlCZXRzSGlzdG9yeShiZXRzKTtcbiAgICAgICAgcmVmcmVzaExhc3RVcGRhdGVkRGF0ZSh1c2VySW5mbyk7XG4gICAgICAgIGJldHMgPSB1c2VySW5mby5iZXRzXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYi5iZXREYXRlKSAtIG5ldyBEYXRlKGEuYmV0RGF0ZSkpXG4gICAgICAgICAgICAuc2xpY2UoMCwgMTApXG4gICAgICAgICAgICAucmV2ZXJzZSgpO1xuICAgICAgICByZWZyZXNoQmV0cyhiZXRzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTGFzdFVwZGF0ZWREYXRlKHVzZXJJbmZvKSB7XG4gICAgICAgIGNvbnN0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0X19sYXN0LXVwZCcpO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhc3RVcGQnKTtcbiAgICAgICAgaWYgKHVzZXJJbmZvLmxhc3RVcGRhdGUpIHtcbiAgICAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gZm9ybWF0RGF0ZSh1c2VySW5mby5sYXN0VXBkYXRlKTtcbiAgICAgICAgICAgIGRhdGVDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcbiAgICAgICAgY29uc3QgbG9jYWxEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgICAgIGNvbnN0IGRheSA9IFN0cmluZyhsb2NhbERhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCBtb250aCA9IFN0cmluZyhsb2NhbERhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gU3RyaW5nKGxvY2FsRGF0ZS5nZXRIb3VycygpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCBtaW51dGVzID0gU3RyaW5nKGxvY2FsRGF0ZS5nZXRNaW51dGVzKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIHJldHVybiBgJHtkYXl9LiR7bW9udGh9ICR7aG91cnN9OiR7bWludXRlc31gO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hCZXRzKGJldHMpIHtcbiAgICAgICAgY29uc3QgZGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXN1bHRfX2JldHMtaXRlbScpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkaXZzW2ldO1xuICAgICAgICAgICAgY29uc3QgYmV0ID0gYmV0c1tpXTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgneW91Jyk7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ19kb25lJyk7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ19mYWlsJyk7XG4gICAgICAgICAgICBsZXQgc3RhdHVzID0gJ19mYWlsJztcbiAgICAgICAgICAgIGlmIChiZXQuc3RhdHVzID09PSAnd2luJykge1xuICAgICAgICAgICAgICAgIHN0YXR1cyA9ICdfZG9uZSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFiZXQuc3RhdHVzIHx8IGJldC5zdGF0dXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzID0gJ3lvdSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoc3RhdHVzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBkaXNwbGF5QmV0c0hpc3RvcnkoYmV0cykge1xuICAgICAgICAvLyByZXR1cm47XG4gICAgICAgIGNvbnN0IHNwaW5JdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwaW5zLXJvdycpO1xuICAgICAgICBjb25zdCBub1NwaW5JdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vLXNwaW5zJyk7XG5cbiAgICAgICAgY29uc3Qgbm9CZXRzID0gIWJldHMgfHwgYmV0cy5sZW5ndGggPT09IDA7XG5cbiAgICAgICAgaWYgKG5vQmV0cyAmJiAhZGVidWcpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5vQmV0cywgZGVidWcpXG4gICAgICAgICAgICBzcGluSXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICBub1NwaW5JdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGRlYnVnKXtcbiAgICAgICAgICAgIGJldHMgPSBtb2NrQmV0c1xuICAgICAgICB9XG5cblxuICAgICAgICBzcGluSXRlbS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgYFxuICAgICAgIDxkaXYgY2xhc3M9XCJzcGlucy1yb3ctaGVhZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtZGF0ZVwiIGRhdGEtdHJhbnNsYXRlPVwibXlCZXREYXRlXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1wcml6ZVwiIGRhdGEtdHJhbnNsYXRlPVwibXlCZXRQcml6ZVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtc3RhdHVzXCIgZGF0YS10cmFuc2xhdGU9XCJteUJldFN0YXR1c1wiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgc3Bpbkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBub1NwaW5JdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblxuICAgICAgICBsZXQgdXBkID0gMDtcbiAgICAgICAgYmV0cy5mb3JFYWNoKHNwaW4gPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3BpbkRhdGUgPSBuZXcgRGF0ZShzcGluLmJldERhdGUpO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IHNwaW5EYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygndWstVUEnKS5zbGljZSgwLCA1KTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IHJlc29sdmVTdGF0dXNUcmFuc2xhdGlvbihzcGluLnN0YXR1cyk7XG5cbiAgICAgICAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcGluRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHNwaW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NwaW5zLXJvdy1pdGVtJyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpc1dpbiA9IHNwaW4uc3RhdHVzID09PSBcIndpblwiO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c0NsYXNzID0gaXNXaW4gPyAnX2RvbmUnIDogJyc7XG5cbiAgICAgICAgICAgICAgICBzcGluRWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudC1kYXRlXCI+JHtmb3JtYXR0ZWREYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb250ZW50LXByaXplXCI+SUQ6JHtzcGluLmJldElkfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb250ZW50LXN0YXR1cyAke3N0YXR1c0NsYXNzfVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgIHNwaW5JdGVtLmFwcGVuZENoaWxkKHNwaW5FbGVtZW50KTtcbiAgICAgICAgICAgICAgICB1cGQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHVwZCA9PT0gMCkge1xuICAgICAgICAgICAgc3Bpbkl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgbm9TcGluSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNvbHZlU3RhdHVzVHJhbnNsYXRpb24oc3RhdHVzKSB7XG4gICAgICAgIGlmICghc3RhdHVzIHx8IHN0YXR1cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGVLZXkoJ2JldFVuZGVmaW5lZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0dXMgPT09ICd3aW4nKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRlS2V5KCd3aW5CZXQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdHVzID09PSAnbG9zZScpIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGVLZXkoJ2xvc2VCZXQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50LCBiYXNlQ3NzQ2xhc3MpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsndWsnLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGJhc2VDc3NDbGFzcyArIGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChiYXNlQ3NzQ2xhc3MgKyBsb2NhbGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcG9ydEVycm9yKGVycikge1xuICAgICAgICBjb25zdCByZXBvcnREYXRhID0ge1xuICAgICAgICAgICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxuICAgICAgICAgICAgZXJyb3JUZXh0OiBlcnI/LmVycm9yIHx8IGVycj8udGV4dCB8fCBlcnI/Lm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3InLFxuICAgICAgICAgICAgdHlwZTogZXJyPy5uYW1lIHx8ICdVbmtub3duRXJyb3InLFxuICAgICAgICAgICAgc3RhY2s6IGVycj8uc3RhY2sgfHwgJydcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpLWNtcy9yZXBvcnRzL2FkZCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXBvcnREYXRhKVxuICAgICAgICB9KS5jYXRjaChjb25zb2xlLndhcm4pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignQVBJIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cbiAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihlcnIpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1VzZXJBdXRoKCkge1xuICAgICAgICBpZiAodXNlcklkKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgIHdlbGNvbWVUaW1lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuXG4gICAgICAgICAgICB9LCAzMDApXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgaW5mbyBvZiBjaG9zZUNhcmRzSW5mbykge1xuICAgICAgICAgICAgICAgIGluZm8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfT9ub2NhY2hlPTFgKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VsY29tZUxvY2suY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNzcyA9IG1vZGVNYXBbcmVzLm1vZGVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQmxvY2tzKGNob3NlQmxvY2ssIFwiY2hvc2VIaWRlXCIsIHJlc3VsdEJsb2NrLCBcInJlc3VsdFNob3dcIiwgY3NzLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VXNlckluZm8ocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRDaG9vc2VDYXJkcyhjaG9zZUNhcmRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWxjb21lTG9jay5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGRpc3BsYXlVc2VyU3BpbnMoMCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGluZm8gb2YgY2hvc2VDYXJkc0luZm8pIHtcbiAgICAgICAgICAgICAgICBpbmZvLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IHBhcnRpY2lwYXRlQnRuIG9mIHBhcnRpY2lwYXRlQnRucykge1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2VsY29tZUxvY2suY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgd2VsY29tZVRpbWVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgICAgICAgICB9LCAzMDApXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzKCkge1xuICAgICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZShtb2NrVXNlcnMsIHVzZXJJZCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuXG4gICAgICAgIHJlcXVlc3QoYC91c2Vycy9gKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXNlciA9IGRhdGEuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSB1c2VySWQpO1xuICAgICAgICAgICAgY29uc3QgbW9kZSA9IHVzZXIgPyB1c2VyLm1vZGUgOiBudWxsO1xuICAgICAgICAgICAgY29uc3QgdXNlcnMgPSBkYXRhLmZpbHRlcih1c2VyID0+IHVzZXIubW9kZSA9PT0gbW9kZSlcbiAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgdXNlcklkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkKSB7XG4gICAgICAgIGNvbnN0IHlvdVJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZU90aGVyJyk7XG4gICAgICAgIGNvbnN0IHRhYmxlQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZScpO1xuXG4gICAgICAgIGlmICghdXNlcnM/Lmxlbmd0aCB8fCBjdXJyZW50VXNlcklkID09PSB1bmRlZmluZWQpIHJldHVybjtcblxuICAgICAgICB5b3VSb3cuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRhYmxlQm9keS5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICB1c2Vycy5zb3J0KChhLCBiKSA9PiBiLndpbkNvdW50IC0gYS53aW5Db3VudCk7XG5cblxuICAgICAgICB1c2Vycy5mb3JFYWNoKCh1c2VyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50VXNlciA9IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkO1xuICAgICAgICAgICAgbGV0IGlzVG9wVXNlciA9IGZhbHNlXG5cbiAgICAgICAgICAgIGlmKGluZGV4IDw9IDUgJiYgaXNDdXJyZW50VXNlcil7XG4gICAgICAgICAgICAgICBpc1RvcFVzZXIgPSB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIGluZGV4ICsgMSwgaXNDdXJyZW50VXNlciAmJiAhaXNUb3BVc2VyID8geW91Um93IDogdGFibGVCb2R5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXIodXNlciwgaXNDdXJyZW50VXNlciwgcGxhY2UsIHRhcmdldCkge1xuXG5cbiAgICAgICAgY29uc3QgdXNlcklkRGlzcGxheSA9IGlzQ3VycmVudFVzZXIgPyB1c2VyLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlci51c2VyaWQpO1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuXG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICAvLyDQodGC0LLQvtGA0LXQvdC90Y8g0LXQu9C10LzQtdC90YLRgyAneW91JyDRgtCwINCy0YHRgtCw0LLQutCwINC50L7Qs9C+INC/0ZbRgdC70Y8g0LXQu9C10LzQtdC90YLRgyDQtyDQvNGW0YHRhtC10LxcbiAgICAgICAgICAgIGNvbnN0IHlvdVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHlvdVRleHQuY2xhc3NMaXN0LmFkZCgndGFibGVfX3Jvdy1pdGVtJywgJ195b3UtdGV4dCcpO1xuICAgICAgICAgICAgeW91VGV4dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgJ3lvdScpO1xuXG5cbiAgICAgICAgICAgIHJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+JHtwbGFjZX08L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgLy8g0JTQvtC00LDRlNC80L4gXCJ5b3VcIiDRgtC10LrRgdGCINC/0ZbRgdC70Y8g0LzRltGB0YbRj1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHlvdVRleHQpO1xuXG4gICAgICAgICAgICAvLyDQn9C+0YLRltC8INC00L7QtNCw0ZTQvNC+IHVzZXJJZCDRgtCwINGB0YLQsNCy0LrRg1xuICAgICAgICAgICAgY29uc3QgdXNlcklkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1c2VySWREaXYuY2xhc3NMaXN0LmFkZCgndGFibGVfX3Jvdy1pdGVtJyk7XG4gICAgICAgICAgICB1c2VySWREaXYudGV4dENvbnRlbnQgPSB1c2VySWREaXNwbGF5O1xuXG4gICAgICAgICAgICBjb25zdCBiZXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJldERpdi5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93LWl0ZW0nKTtcbiAgICAgICAgICAgIGJldERpdi50ZXh0Q29udGVudCA9IHVzZXIud2luQ291bnQ7XG5cbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh1c2VySWREaXYpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGJldERpdik7XG5cbiAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdfeW91Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPiR7cGxhY2V9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+JHt1c2VySWREaXNwbGF5fTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPiR7dXNlci53aW5Db3VudH08L2Rpdj5cbiAgICAgICAgYDtcblxuXG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBtYXNrVXNlcklkKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gXCIqKioqXCIgKyB1c2VySWQudG9TdHJpbmcoKS5zbGljZSg0KTtcbiAgICB9XG5cblxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKVxuICAgICAgICAudGhlbihpbml0KTtcblxuICAgIGxldCBpbml0ZWQgPSBmYWxzZTtcbiAgICBmdW5jdGlvbiBpbml0Q2hvb3NlQ2FyZHMoY2FyZHMpe1xuICAgICAgICBpZiAoaW5pdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT57XG4gICAgICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaW5mby1pY29uXCIpKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlmZmljdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZGlmZmljdWx0c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RlID0gbW9kZU1hcFtpdGVtXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlKG1vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja1VzZXJBdXRoKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJVc2VycygpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDApXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICBpbml0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFBvcHVwKHdyYXAsIHBvcHVwTmFtZSwgYnRucywgcG9wdXBJdGVtcyl7XG4gICAgICAgIGxldCBwb3B1cCA9IHdyYXAucXVlcnlTZWxlY3RvcihgLiR7cG9wdXBOYW1lfWApXG5cbiAgICAgICAgd3JhcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgZS50YXJnZXQgPT09IHdyYXAgPyBjbG9zZVBvcHVwKCkgOiBudWxsXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgY2xvc2VQb3B1cCA9ICgpID0+e1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIilcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICAgICAgd3JhcC5jbGFzc0xpc3QuYWRkKFwiX29wYWNpdHlcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgICAgaWYoYnRuLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMocG9wdXBOYW1lKSl7XG4gICAgICAgICAgICAgICAgYnRuLnBhcmVudE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgICAgICAgICAgaWYoZS50YXJnZXQgPT09IGJ0bil7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBJdGVtcy5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJfYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgIHdyYXAuY2xhc3NMaXN0LnJlbW92ZShcIl9vcGFjaXR5XCIpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBsZXQgY2xvc2VCdG4gPSBwb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19jbG9zZVwiKVxuICAgICAgICAgICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VQb3B1cCgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzZXRQb3B1cChwb3B1cHNXcmFwLCBcIl9lYXN5XCIsIHNob3dQb3B1cEJ0bnMsIHBvcHVwSXRlbXMpXG4gICAgc2V0UG9wdXAocG9wdXBzV3JhcCwgXCJfbWVkaXVtXCIsIHNob3dQb3B1cEJ0bnMsIHBvcHVwSXRlbXMpXG4gICAgc2V0UG9wdXAocG9wdXBzV3JhcCwgXCJfaGlnaHRcIiwgc2hvd1BvcHVwQnRucywgcG9wdXBJdGVtcylcbiAgICBzZXRQb3B1cChwb3B1cHNXcmFwLCBcIl9ub3RpZnlcIiwgc2hvd1BvcHVwQnRucywgcG9wdXBJdGVtcylcblxuICAgIGZ1bmN0aW9uIHN0YXJ0Q291bnRkb3duKHNlbGVjdG9yLCBlbmREYXRlKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtzZWxlY3Rvcn0gLndlbGNvbWVfX3RpbWVyLWl0ZW0tbnVtYCk7XG4gICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggIT09IDQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgc2VsZWN0b3IhJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YXJnZXREYXRlID0gbmV3IERhdGUoZW5kRGF0ZSkuZ2V0VGltZSgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWVyKCkge1xuICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCB0aW1lTGVmdCA9IHRhcmdldERhdGUgLSBub3c7XG5cbiAgICAgICAgICAgIGlmICh0aW1lTGVmdCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lclZhbHVlcyhbMCwgMCwgMCwgMF0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IodGltZUxlZnQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHRpbWVMZWZ0ICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVyVmFsdWVzKFtkYXlzLCBob3VycywgbWludXRlcywgc2Vjb25kc10pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0VGltZXJWYWx1ZXModmFsdWVzKSB7XG4gICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaW5kZXhdLnRleHRDb250ZW50ID0gdmFsdWUgPCAxMCA/IGAwJHt2YWx1ZX1gIDogdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZVRpbWVyKCk7XG4gICAgICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh1cGRhdGVUaW1lciwgMTAwMCk7XG4gICAgfVxuXG4gICAgc3RhcnRDb3VudGRvd24oJy53ZWxjb21lX190aW1lcicsICcyMDI1LTA1LTExVDIzOjU5OjU5Jyk7XG5cbiAgICBmdW5jdGlvbiBtb25pdG9yVmlzaWJpbGl0eShzZWxlY3RvciwgYW5pbWF0aW9uLCBkZWxheSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFbGVtZW50IG5vdCBmb3VuZCEnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYW5pbWF0aW9uKVxuICAgICAgICAgICAgICAgICAgICB9LCBkZWxheSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICB9XG5cblxuICAgIG1vbml0b3JWaXNpYmlsaXR5KCcubm90aWZ5X19wZXJzJywgXCJzaG93WmV1c1wiLCAwKTtcbiAgICBtb25pdG9yVmlzaWJpbGl0eSgnLm5vdGlmeV9fcGVycy1idWJsZScsIFwic2hvd1pldXNCdWJsZVwiLCAxMjAwKTtcbiAgICBtb25pdG9yVmlzaWJpbGl0eSgnLmNob3NlX19wZXJzLWJ1YmxlJywgXCJzaG93WmV1c0J1YmxlXCIsIDApO1xuICAgIG1vbml0b3JWaXNpYmlsaXR5KCcuY2hvc2VfX2NhcmQuX2Vhc3knLCBcInNob3dDYXJkXCIsIDQwMCk7XG4gICAgbW9uaXRvclZpc2liaWxpdHkoJy5jaG9zZV9fY2FyZC5fbWVkaXVtJywgXCJzaG93Q2FyZFwiLCA4MDApO1xuICAgIG1vbml0b3JWaXNpYmlsaXR5KCcuY2hvc2VfX2NhcmQuX2hpZ2h0JywgXCJzaG93Q2FyZFwiLCAxMjAwKTtcblxuXG5cbiAgICBmdW5jdGlvbiB0b2dnbGVCbG9ja3MoaGlkZUJsb2NrLCBoaWRlQ2xhc3MsIHNob3dCbG9jaywgc2hvd0NsYXNzLCBzdGF0ZSwgYW5pbWF0ZSl7XG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoc3RhdGUsIGxvY2FsZSlcbiAgICAgICAgaGlkZUJsb2NrLmNsYXNzTGlzdC5hZGQoaGlkZUNsYXNzKVxuICAgICAgICBsZXQgZHJvcHMgPSBzaG93QmxvY2sucXVlcnlTZWxlY3RvckFsbChcIi5kcm9wXCIpXG4gICAgICAgIGRyb3BzLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgIGRpZmZpY3VsdHMuZm9yRWFjaChzdGF0ZSA9PntcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoc3RhdGUpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBkcm9wc1swXS5jbGFzc0xpc3QuYWRkKHN0YXRlKVxuICAgICAgICBpZihhbmltYXRlKXtcbiAgICAgICAgICAgIGhpZGVCbG9jay5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+e1xuXG4gICAgICAgICAgICAgICAgc2hvd0Jsb2NrLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAgICAgICAgIHNob3dCbG9jay5zdHlsZS5oZWlnaHQgPSBoaWRlQmxvY2suY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICAgICAgaGlkZUJsb2NrLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgc2hvd1Jlc3VsdEJsb2NrKHNob3dCbG9jaywgc2hvd0NsYXNzKVxuICAgICAgICAgICAgICAgIH0sIDUwKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzaG93QmxvY2suc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICBzaG93QmxvY2suc3R5bGUuaGVpZ2h0ID0gaGlkZUJsb2NrLmNsaWVudEhlaWdodFxuICAgICAgICAgICAgaGlkZUJsb2NrLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgICAgICBzaG93UmVzdWx0QmxvY2soc2hvd0Jsb2NrLCBzaG93Q2xhc3MpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dSZXN1bHRCbG9jayhzaG93QmxvY2ssIHNob3dDbGFzcyl7XG4gICAgICAgIHNob3dCbG9jay5jbGFzc0xpc3QuYWRkKHNob3dDbGFzcylcbiAgICAgICAgc2hvd0Jsb2NrLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICBsZXQgaXRlbXMgPSBzaG93QmxvY2sucXVlcnlTZWxlY3RvckFsbChcIi5yZXN1bHRfX2JldHMtaXRlbVwiKVxuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaSkgPT57XG4gICAgICAgICAgICAgICAgaWYoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJ5b3VcIikpe1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHlvdSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRfX2JldHMteW91XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB5b3UuY2xhc3NMaXN0LmFkZCgnc2hvd1lvdScpXG4gICAgICAgICAgICAgICAgICAgIH0sIDI3MDApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZXN1bHRfX2J0blwiKVxuICAgICAgICAgICAgICAgICAgICBidG5zLmZvckVhY2goYnRuID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJzaG93QnRuXCIpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSwgMjkwMClcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgIH0sIDI1MCAqIGl0ZW1zLmxlbmd0aCAtIGkgKiAyNTApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9DaG9zZVwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hvc2VcIik7XG4gICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gdGFyZ2V0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSAyO1xuXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICB0b3A6IHRhcmdldFBvc2l0aW9uLFxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIC8vdGVzdFxuICAgIC8vXG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpXG4gICAgLy8gfSlcbiAgICAvL1xuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlnaHQtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAvLyAgICAgZGlmZmljdWx0cy5mb3JFYWNoKGNzcyA9PntcbiAgICAvLyAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoY3NzKVxuICAgIC8vICAgICB9KVxuICAgIC8vXG4gICAgLy8gICAgIHRvZ2dsZUJsb2NrcyhjaG9zZUJsb2NrLCBcImNob3NlSGlkZVwiLCByZXN1bHRCbG9jaywgXCJyZXN1bHRTaG93XCIsIFwiX2hpZ2h0XCIsIHRydWUpO1xuICAgIC8vIH0pXG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lYXN5LWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgLy8gICAgIGRpZmZpY3VsdHMuZm9yRWFjaChjc3MgPT57XG4gICAgLy8gICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKGNzcylcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgdG9nZ2xlQmxvY2tzKGNob3NlQmxvY2ssIFwiY2hvc2VIaWRlXCIsIHJlc3VsdEJsb2NrLCBcInJlc3VsdFNob3dcIiwgXCJfZWFzeVwiLCB0cnVlKTtcbiAgICAvLyB9KVxuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVkaXVtLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgLy8gICAgIGRpZmZpY3VsdHMuZm9yRWFjaChjc3MgPT57XG4gICAgLy8gICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKGNzcylcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgdG9nZ2xlQmxvY2tzKGNob3NlQmxvY2ssIFwiY2hvc2VIaWRlXCIsIHJlc3VsdEJsb2NrLCBcInJlc3VsdFNob3dcIiwgXCJfbWVkaXVtXCIsIHRydWUpO1xuICAgIC8vIH0pXG4gICAgLy9cbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXV0aC1idG4nKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGhhc0lkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XG4gICAgLy8gICAgIGhhc0lkID8gc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcklkJykgOiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VySWQnLCAnMTAwMzAwMjY4Jyk7XG4gICAgLy8gICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIC8vIH0pO1xuICAgIC8vXG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sbmctYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGN1cnJlbnRMb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpO1xuICAgIC8vXG4gICAgLy8gICAgIGlmIChjdXJyZW50TG9jYWxlID09PSBcInVrXCIpIHtcbiAgICAvLyAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbGVcIik7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwidWtcIik7XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAvLyB9KTtcbiAgICAvL1xuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFyay1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgIC8vICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpXG4gICAgLy8gfSlcblxufSkoKTtcbiJdfQ==
