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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwb3B1cHNXcmFwIiwic2hvd1BvcHVwQnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwb3B1cEl0ZW1zIiwiY2hvc2VCbG9jayIsInJlc3VsdEJsb2NrIiwidW5hdXRoTXNncyIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImNob3NlQ2FyZHMiLCJjaG9zZUNhcmRzSW5mbyIsIndlbGNvbWVMb2NrIiwid2VsY29tZVRpbWVyIiwibG9hZGVyIiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJ1a0xlbmciLCJlbkxlbmciLCJkaWZmaWN1bHRzIiwibW9kZU1hcCIsImxvY2FsZSIsImRlYnVnIiwibW9ja0JldHMiLCJpZCIsImJldERhdGUiLCJzdGF0dXMiLCJ1bmRlZmluZWQiLCJtb2NrVXNlcnMiLCJ1c2VyaWQiLCJiZXQiLCJpMThuRGF0YSIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwiaW5pdCIsInRyeURldGVjdFVzZXJJZCIsInF1aWNrQ2hlY2tBbmRSZW5kZXIiLCJjaGVja1VzZXJBdXRoIiwicmVuZGVyVXNlcnMiLCJ3aW5kb3ciLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiZ191c2VyX2lkIiwiYXR0ZW1wdHMiLCJtYXhBdHRlbXB0cyIsImF0dGVtcHRJbnRlcnZhbCIsIndhaXRGb3JVc2VySWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicGFydGljaXBhdGUiLCJtb2RlIiwicGFyYW1zIiwicmVxdWVzdCIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwiZm9yRWFjaCIsIml0ZW0iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjc3MiLCJ0b2dnbGVCbG9ja3MiLCJsb2FkVHJhbnNsYXRpb25zIiwiZmV0Y2giLCJqc29uIiwidHJhbnNsYXRlIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJvYnNlcnZlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiZWxlbXMiLCJsZW5ndGgiLCJlbGVtIiwia2V5IiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwicmVtb3ZlQXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsInJlZnJlc2hMb2NhbGl6ZWRDbGFzcyIsInRyYW5zbGF0ZUtleSIsImRlZmF1bHRWYWwiLCJkaXNwbGF5VXNlckluZm8iLCJ1c2VySW5mbyIsImJldHMiLCJkaXNwbGF5QmV0c0hpc3RvcnkiLCJyZWZyZXNoTGFzdFVwZGF0ZWREYXRlIiwic29ydCIsImEiLCJiIiwiRGF0ZSIsInNsaWNlIiwicmV2ZXJzZSIsInJlZnJlc2hCZXRzIiwiZGF0ZUNvbnRhaW5lciIsInNwYW4iLCJsYXN0VXBkYXRlIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJsb2NhbERhdGUiLCJkYXkiLCJTdHJpbmciLCJnZXREYXRlIiwicGFkU3RhcnQiLCJtb250aCIsImdldE1vbnRoIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiZGl2cyIsImkiLCJlbGVtZW50Iiwic3Bpbkl0ZW0iLCJub1NwaW5JdGVtIiwibm9CZXRzIiwidXBkIiwic3BpbiIsInNwaW5EYXRlIiwiZm9ybWF0dGVkRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInJlc29sdmVTdGF0dXNUcmFuc2xhdGlvbiIsInNwaW5FbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImlzV2luIiwic3RhdHVzQ2xhc3MiLCJiZXRJZCIsImFwcGVuZENoaWxkIiwiYmFzZUNzc0NsYXNzIiwibGFuZyIsInJlcG9ydEVycm9yIiwiZXJyIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yVGV4dCIsImVycm9yIiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwiaGVhZGVycyIsIndhcm4iLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwib2siLCJFcnJvciIsInJlamVjdCIsImxvYWRUaW1lIiwic2V0VGltZW91dCIsInVuYXV0aE1lcyIsImluZm8iLCJpbml0Q2hvb3NlQ2FyZHMiLCJwYXJ0aWNpcGF0ZUJ0biIsInBvcHVsYXRlVXNlcnNUYWJsZSIsImRhdGEiLCJ1c2VyIiwiZmluZCIsInVzZXJzIiwiZmlsdGVyIiwiY3VycmVudFVzZXJJZCIsInlvdVJvdyIsInRhYmxlQm9keSIsIndpbkNvdW50IiwiaW5kZXgiLCJpc0N1cnJlbnRVc2VyIiwiaXNUb3BVc2VyIiwiZGlzcGxheVVzZXIiLCJwbGFjZSIsInRhcmdldCIsInVzZXJJZERpc3BsYXkiLCJtYXNrVXNlcklkIiwicm93IiwieW91VGV4dCIsInNldEF0dHJpYnV0ZSIsInVzZXJJZERpdiIsInRleHRDb250ZW50IiwiYmV0RGl2IiwidG9TdHJpbmciLCJpbml0ZWQiLCJjYXJkcyIsImNhcmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvbnRhaW5zIiwic2V0UG9wdXAiLCJ3cmFwIiwicG9wdXBOYW1lIiwiYnRucyIsInBvcHVwIiwiY2xvc2VQb3B1cCIsImJ0biIsInBhcmVudE5vZGUiLCJwcmV2ZW50RGVmYXVsdCIsImNsb3NlQnRuIiwic3RhcnRDb3VudGRvd24iLCJzZWxlY3RvciIsImVuZERhdGUiLCJlbGVtZW50cyIsInRhcmdldERhdGUiLCJnZXRUaW1lIiwidXBkYXRlVGltZXIiLCJub3ciLCJ0aW1lTGVmdCIsImludGVydmFsSWQiLCJzZXRUaW1lclZhbHVlcyIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwidmFsdWVzIiwidmFsdWUiLCJtb25pdG9yVmlzaWJpbGl0eSIsImFuaW1hdGlvbiIsImRlbGF5Iiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiaGlkZUJsb2NrIiwiaGlkZUNsYXNzIiwic2hvd0Jsb2NrIiwic2hvd0NsYXNzIiwiYW5pbWF0ZSIsImRyb3BzIiwiZGlzcGxheSIsImhlaWdodCIsImNsaWVudEhlaWdodCIsInNob3dSZXN1bHRCbG9jayIsIml0ZW1zIiwieW91Iiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0RWxlbWVudCIsInRhcmdldFBvc2l0aW9uIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwicGFnZVlPZmZzZXQiLCJzY3JvbGxUbyIsImJlaGF2aW9yIl0sIm1hcHBpbmdzIjoiOzs7K0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLENBQUMsWUFBWTtFQUNULElBQU1BLE1BQU0sR0FBRywrQ0FBK0M7RUFFOUQsSUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDaERDLFVBQVUsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQzdDRSxhQUFhLEdBQUdILFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUMsWUFBWSxDQUFDO0lBQ3ZEQyxVQUFVLEdBQUdMLFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUMsY0FBYyxDQUFDO0lBQ3RERSxVQUFVLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUM3Q00sV0FBVyxHQUFHUCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDL0NPLFVBQVUsR0FBR1IsUUFBUSxDQUFDSSxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7SUFDckRLLGVBQWUsR0FBR1QsUUFBUSxDQUFDSSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFDeERNLFlBQVksR0FBR1YsUUFBUSxDQUFDSSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFDckRPLFVBQVUsR0FBR1gsUUFBUSxDQUFDSSxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7SUFDdERRLGNB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O0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUVKLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX2Zvb3RiYWxsX2NoYWxsZW5nZV8yJ1xuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICBwb3B1cHNXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKSxcbiAgICAgICAgc2hvd1BvcHVwQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5mby1pY29uXCIpLFxuICAgICAgICBwb3B1cEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9faXRlbVwiKSxcbiAgICAgICAgY2hvc2VCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hvc2VcIiksXG4gICAgICAgIHJlc3VsdEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRcIiksXG4gICAgICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFydC1idG4nKSxcbiAgICAgICAgcmVkaXJlY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1qb2luJyksXG4gICAgICAgIGNob3NlQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNob3NlX19jYXJkXCIpLFxuICAgICAgICBjaG9zZUNhcmRzSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hvc2VfX2NhcmQtaW5mb1wiKSxcbiAgICAgICAgd2VsY29tZUxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlbGNvbWVfX2xvY2tcIiksXG4gICAgICAgIHdlbGNvbWVUaW1lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VsY29tZV9fdGltZXJcIiksXG4gICAgICAgIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Bpbm5lci1vdmVybGF5XCIpXG4gICAgICAgIC8vIGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJwaWN0dXJlXCIpXG5cbiAgICAvLyB3ZWxjb21lTG9jay5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgIC8vIHdlbGNvbWVUaW1lci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCJcblxuXG4gICAgY29uc3QgdWtMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VrTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGNvbnN0IGRpZmZpY3VsdHMgPSBbXCJfZWFzeVwiLCBcIl9tZWRpdW1cIiwgXCJfaGlnaHRcIl07XG4gICAgY29uc3QgbW9kZU1hcCA9IHtcIm5vdmljZVwiOiBcIl9lYXN5XCIsIFwiZXhwZXJpZW5jZWRcIjogXCJfbWVkaXVtXCIsIFwiaW5zYW5lXCI6IFwiX2hpZ2h0XCIsIFwiX2Vhc3lcIjogXCJub3ZpY2VcIiwgXCJfbWVkaXVtXCI6IFwiZXhwZXJpZW5jZWRcIiwgXCJfaGlnaHRcIjogXCJpbnNhbmVcIn07XG5cbiAgICBsZXQgbG9jYWxlID0gXCJlblwiXG5cblxuICAgIGlmICh1a0xlbmcpIGxvY2FsZSA9ICd1ayc7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuICAgIGxldCBkZWJ1ZyA9IGZhbHNlXG5cbiAgICBjb25zdCBtb2NrQmV0cyA9IFtcbiAgICAgICAgeyBpZDogMzg4MzEwMjQ3LCBiZXREYXRlOiAnMjAyNS0wNC0yMFQxMjowMDowMCcsIHN0YXR1czogJ3dpbicgfSxcbiAgICAgICAgeyBpZDogMzg4MzEwMjQ3LCBiZXREYXRlOiAnMjAyNS0wNC0yMFQxMjowMDowMCcsIHN0YXR1czogJ3dpbicgfSxcbiAgICAgICAgeyBpZDogMzg4MzEwMjQ4LCBiZXREYXRlOiAnMjAyNS0wNC0xOVQxNTozMDowMCcsIHN0YXR1czogJ2xvc2UnIH0sXG4gICAgICAgIHsgaWQ6IDM4ODMxMDI0OCwgYmV0RGF0ZTogJzIwMjUtMDQtMTlUMTU6MzA6MDAnLCBzdGF0dXM6ICd3aW4nIH0sXG4gICAgICAgIHsgaWQ6IDM4ODMxMDI0OCwgYmV0RGF0ZTogJzIwMjUtMDQtMTlUMTU6MzA6MDAnLCBzdGF0dXM6ICdsb3NlJyB9LFxuICAgICAgICB7IGlkOiAzODgzMTAyNDgsIGJldERhdGU6ICcyMDI1LTA0LTE5VDE1OjMwOjAwJywgc3RhdHVzOiAnbG9zZScgfSxcbiAgICAgICAgeyBpZDogMzg4MzEwMjQ4LCBiZXREYXRlOiAnMjAyNS0wNC0xOVQxNTozMDowMCcsIHN0YXR1czogJ2xvc2UnIH0sXG4gICAgICAgIHsgaWQ6IDM4ODMxMDI0OSwgYmV0RGF0ZTogJzIwMjUtMDQtMThUMDk6MTU6MDAnLCBzdGF0dXM6IHVuZGVmaW5lZCB9LFxuICAgIF07XG5cbiAgICBjb25zdCBtb2NrVXNlcnMgPSBbXG4gICAgICAgIHsgdXNlcmlkOiAzODgzMTAyNDcsIGJldDogMTAgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEyMzQ1Njc4OSwgYmV0OiA5IH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAzNjgsIGJldDogOCB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMTY4LCBiZXQ6IDggfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDA2OCwgYmV0OiA4IH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDgyNjgsIGJldDogOCB9LFxuICAgICAgICB7IHVzZXJpZDogMTExMjIyMzMzLCBiZXQ6IDcgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDExMTIyMjM0MywgYmV0OiA3IH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMTEyMjIzNTMsIGJldDogNiB9LFxuICAgICAgICB7IHVzZXJpZDogMTExMjIyMzYzLCBiZXQ6IDUgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDQ0NDU1NTY2NiwgYmV0OiA1IH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAyNjgsIGJldDogNiB9LFxuICAgIF07XG5cblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gdHJ1ZTtcbiAgICBsZXQgdXNlcklkID0gbnVsbDtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjA7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRJbnRlcnZhbCA9IDUwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyeURldGVjdFVzZXJJZCgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcXVpY2tDaGVja0FuZFJlbmRlcigpIHtcbiAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICAgICAgICAgIHJlbmRlclVzZXJzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWl0Rm9yVXNlcklkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeURldGVjdFVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgfHwgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tDaGVja0FuZFJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgICAgfSwgYXR0ZW1wdEludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKG1vZGUpIHtcbiAgICAgICAgaWYgKCF1c2VySWQgfHwgIW1vZGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt1c2VyaWQ6IHVzZXJJZCwgbW9kZX07XG4gICAgICAgIHJlcXVlc3QoJy91c2VyJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICBjb25zdCBjc3MgPSBtb2RlTWFwW21vZGVdO1xuICAgICAgICAgICAgdG9nZ2xlQmxvY2tzKGNob3NlQmxvY2ssIFwiY2hvc2VIaWRlXCIsIHJlc3VsdEJsb2NrLCBcInJlc3VsdFNob3dcIiwgY3NzLCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke2FwaVVSTH0vdHJhbnNsYXRlcy8ke2xvY2FsZX1gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9vdGJhbGwtY2hhbGxlbmdlXCIpLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29ya3MhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2FsZSA9PT0gJ2VuJykge1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnZW4nKTtcbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVLZXkoa2V5LCBkZWZhdWx0VmFsKSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGkxOG5EYXRhW2tleV0gfHwgZGVmYXVsdFZhbCB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXJJbmZvKHVzZXJJbmZvKSB7XG4gICAgICAgIGxldCBiZXRzID0gdXNlckluZm8uYmV0c1xuICAgICAgICAvLyBsZXQgYmV0cyA9IFt7YmV0RGF0ZTogbmV3IERhdGUoKSwgc3RhdHVzOiAndW5kZWZpbmVkJ31dXG5cbiAgICAgICAgZGlzcGxheUJldHNIaXN0b3J5KGJldHMpO1xuICAgICAgICByZWZyZXNoTGFzdFVwZGF0ZWREYXRlKHVzZXJJbmZvKTtcbiAgICAgICAgYmV0cyA9IHVzZXJJbmZvLmJldHNcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShiLmJldERhdGUpIC0gbmV3IERhdGUoYS5iZXREYXRlKSlcbiAgICAgICAgICAgIC5zbGljZSgwLCAxMClcbiAgICAgICAgICAgIC5yZXZlcnNlKCk7XG4gICAgICAgIHJlZnJlc2hCZXRzKGJldHMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMYXN0VXBkYXRlZERhdGUodXNlckluZm8pIHtcbiAgICAgICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRfX2xhc3QtdXBkJyk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFzdFVwZCcpO1xuICAgICAgICBpZiAodXNlckluZm8ubGFzdFVwZGF0ZSkge1xuICAgICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSBmb3JtYXREYXRlKHVzZXJJbmZvLmxhc3RVcGRhdGUpO1xuICAgICAgICAgICAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuICAgICAgICBjb25zdCBsb2NhbERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgY29uc3QgZGF5ID0gU3RyaW5nKGxvY2FsRGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gU3RyaW5nKGxvY2FsRGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgaG91cnMgPSBTdHJpbmcobG9jYWxEYXRlLmdldEhvdXJzKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBTdHJpbmcobG9jYWxEYXRlLmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgcmV0dXJuIGAke2RheX0uJHttb250aH0gJHtob3Vyc306JHttaW51dGVzfWA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaEJldHMoYmV0cykge1xuICAgICAgICBjb25zdCBkaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3VsdF9fYmV0cy1pdGVtJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRpdnNbaV07XG4gICAgICAgICAgICBjb25zdCBiZXQgPSBiZXRzW2ldO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd5b3UnKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnX2RvbmUnKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnX2ZhaWwnKTtcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSAnX2ZhaWwnO1xuICAgICAgICAgICAgaWYgKGJldC5zdGF0dXMgPT09ICd3aW4nKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzID0gJ19kb25lJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWJldC5zdGF0dXMgfHwgYmV0LnN0YXR1cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSAneW91JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChzdGF0dXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpc3BsYXlCZXRzSGlzdG9yeShiZXRzKSB7XG4gICAgICAgIC8vIHJldHVybjtcbiAgICAgICAgY29uc3Qgc3Bpbkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BpbnMtcm93Jyk7XG4gICAgICAgIGNvbnN0IG5vU3Bpbkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm8tc3BpbnMnKTtcblxuICAgICAgICBjb25zdCBub0JldHMgPSAhYmV0cyB8fCBiZXRzLmxlbmd0aCA9PT0gMDtcblxuICAgICAgICBpZiAobm9CZXRzICYmICFkZWJ1Zykge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobm9CZXRzLCBkZWJ1ZylcbiAgICAgICAgICAgIHNwaW5JdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIG5vU3Bpbkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZGVidWcpe1xuICAgICAgICAgICAgYmV0cyA9IG1vY2tCZXRzXG4gICAgICAgIH1cblxuXG4gICAgICAgIHNwaW5JdGVtLmlubmVySFRNTCA9XG4gICAgICAgICAgICBgXG4gICAgICAgPGRpdiBjbGFzcz1cInNwaW5zLXJvdy1oZWFkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1kYXRlXCIgZGF0YS10cmFuc2xhdGU9XCJteUJldERhdGVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXByaXplXCIgZGF0YS10cmFuc2xhdGU9XCJteUJldFByaXplXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1zdGF0dXNcIiBkYXRhLXRyYW5zbGF0ZT1cIm15QmV0U3RhdHVzXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICBzcGluSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIG5vU3Bpbkl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG4gICAgICAgIGxldCB1cGQgPSAwO1xuICAgICAgICBiZXRzLmZvckVhY2goc3BpbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcGluRGF0ZSA9IG5ldyBEYXRlKHNwaW4uYmV0RGF0ZSk7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gc3BpbkRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCd1ay1VQScpLnNsaWNlKDAsIDUpO1xuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gcmVzb2x2ZVN0YXR1c1RyYW5zbGF0aW9uKHNwaW4uc3RhdHVzKTtcblxuICAgICAgICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwaW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgc3BpbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3BpbnMtcm93LWl0ZW0nKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGlzV2luID0gc3Bpbi5zdGF0dXMgPT09IFwid2luXCI7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzQ2xhc3MgPSBpc1dpbiA/ICdfZG9uZScgOiAnJztcblxuICAgICAgICAgICAgICAgIHNwaW5FbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb250ZW50LWRhdGVcIj4ke2Zvcm1hdHRlZERhdGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbnRlbnQtcHJpemVcIj5JRDoke3NwaW4uYmV0SWR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbnRlbnQtc3RhdHVzICR7c3RhdHVzQ2xhc3N9XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgc3Bpbkl0ZW0uYXBwZW5kQ2hpbGQoc3BpbkVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHVwZCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodXBkID09PSAwKSB7XG4gICAgICAgICAgICBzcGluSXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICBub1NwaW5JdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc29sdmVTdGF0dXNUcmFuc2xhdGlvbihzdGF0dXMpIHtcbiAgICAgICAgaWYgKCFzdGF0dXMgfHwgc3RhdHVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZUtleSgnYmV0VW5kZWZpbmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ3dpbicpIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGVLZXkoJ3dpbkJldCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0dXMgPT09ICdsb3NlJykge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZUtleSgnbG9zZUJldCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQsIGJhc2VDc3NDbGFzcykge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYmFzZUNzc0NsYXNzICsgbGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGJhc2VDc3NDbGFzcyArIGxvY2FsZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVxdWVzdCAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignQVBJIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cblxuICAgICAgICAgICAgICAgIC8vIHJlcG9ydEVycm9yKGVycik7XG5cbiAgICAgICAgICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIC8vIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgIC8vICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGxldCBsb2FkVGltZSA9IDIwMDtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICB3ZWxjb21lVGltZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcblxuICAgICAgICAgICAgICAgIH0sIDMwMClcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5mbyBvZiBjaG9zZUNhcmRzSW5mbykge1xuICAgICAgICAgICAgICAgICAgICBpbmZvLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfT9ub2NhY2hlPTFgKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWxjb21lTG9jay5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNzcyA9IG1vZGVNYXBbcmVzLm1vZGVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUJsb2NrcyhjaG9zZUJsb2NrLCBcImNob3NlSGlkZVwiLCByZXN1bHRCbG9jaywgXCJyZXN1bHRTaG93XCIsIGNzcywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlVc2VySW5mbyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0Q2hvb3NlQ2FyZHMoY2hvc2VDYXJkcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2VsY29tZUxvY2suY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5VXNlclNwaW5zKDApO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5mbyBvZiBjaG9zZUNhcmRzSW5mbykge1xuICAgICAgICAgICAgICAgICAgICBpbmZvLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcGFydGljaXBhdGVCdG4gb2YgcGFydGljaXBhdGVCdG5zKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3ZWxjb21lTG9jay5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHdlbGNvbWVUaW1lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgIH0sIDMwMClcbiAgICAgICAgICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBsb2FkVGltZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJVc2VycygpIHtcbiAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUobW9ja1VzZXJzLCB1c2VySWQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cblxuICAgICAgICByZXF1ZXN0KGAvdXNlcnMvYCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBkYXRhLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gdXNlcklkKTtcbiAgICAgICAgICAgIGNvbnN0IG1vZGUgPSB1c2VyID8gdXNlci5tb2RlIDogbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJzID0gZGF0YS5maWx0ZXIodXNlciA9PiB1c2VyLm1vZGUgPT09IG1vZGUpXG4gICAgICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIHVzZXJJZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCkge1xuICAgICAgICBjb25zdCB5b3VSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGVPdGhlcicpO1xuICAgICAgICBjb25zdCB0YWJsZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGUnKTtcblxuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGggfHwgY3VycmVudFVzZXJJZCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgICAgICAgeW91Um93LmlubmVySFRNTCA9ICcnO1xuICAgICAgICB0YWJsZUJvZHkuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgdXNlcnMgPSB1c2Vycy5zb3J0KChhLCBiKSA9PiBiLndpbkNvdW50IC0gYS53aW5Db3VudCk7XG5cblxuICAgICAgICB1c2Vycy5mb3JFYWNoKCh1c2VyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50VXNlciA9IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkO1xuICAgICAgICAgICAgbGV0IGlzVG9wVXNlciA9IGZhbHNlXG5cbiAgICAgICAgICAgIGlmKGluZGV4IDw9IDUgJiYgaXNDdXJyZW50VXNlcil7XG4gICAgICAgICAgICAgICBpc1RvcFVzZXIgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihpbmRleCA+PSAyMCAmJiAhaXNDdXJyZW50VXNlcikgcmV0dXJuXG5cbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIGluZGV4ICsgMSwgaXNDdXJyZW50VXNlciAmJiAhaXNUb3BVc2VyID8geW91Um93IDogdGFibGVCb2R5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXIodXNlciwgaXNDdXJyZW50VXNlciwgcGxhY2UsIHRhcmdldCkge1xuXG5cbiAgICAgICAgY29uc3QgdXNlcklkRGlzcGxheSA9IGlzQ3VycmVudFVzZXIgPyB1c2VyLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlci51c2VyaWQpO1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuXG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICAvLyDQodGC0LLQvtGA0LXQvdC90Y8g0LXQu9C10LzQtdC90YLRgyAneW91JyDRgtCwINCy0YHRgtCw0LLQutCwINC50L7Qs9C+INC/0ZbRgdC70Y8g0LXQu9C10LzQtdC90YLRgyDQtyDQvNGW0YHRhtC10LxcbiAgICAgICAgICAgIGNvbnN0IHlvdVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHlvdVRleHQuY2xhc3NMaXN0LmFkZCgndGFibGVfX3Jvdy1pdGVtJywgJ195b3UtdGV4dCcpO1xuICAgICAgICAgICAgeW91VGV4dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgJ3lvdScpO1xuXG5cbiAgICAgICAgICAgIHJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+JHtwbGFjZX08L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgLy8g0JTQvtC00LDRlNC80L4gXCJ5b3VcIiDRgtC10LrRgdGCINC/0ZbRgdC70Y8g0LzRltGB0YbRj1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHlvdVRleHQpO1xuXG4gICAgICAgICAgICAvLyDQn9C+0YLRltC8INC00L7QtNCw0ZTQvNC+IHVzZXJJZCDRgtCwINGB0YLQsNCy0LrRg1xuICAgICAgICAgICAgY29uc3QgdXNlcklkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1c2VySWREaXYuY2xhc3NMaXN0LmFkZCgndGFibGVfX3Jvdy1pdGVtJyk7XG4gICAgICAgICAgICB1c2VySWREaXYudGV4dENvbnRlbnQgPSB1c2VySWREaXNwbGF5O1xuXG4gICAgICAgICAgICBjb25zdCBiZXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJldERpdi5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93LWl0ZW0nKTtcbiAgICAgICAgICAgIGJldERpdi50ZXh0Q29udGVudCA9IHVzZXIud2luQ291bnQ7XG5cbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh1c2VySWREaXYpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGJldERpdik7XG5cbiAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdfeW91Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPiR7cGxhY2V9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+JHt1c2VySWREaXNwbGF5fTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPiR7dXNlci53aW5Db3VudH08L2Rpdj5cbiAgICAgICAgYDtcblxuXG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBtYXNrVXNlcklkKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gXCIqKioqXCIgKyB1c2VySWQudG9TdHJpbmcoKS5zbGljZSg0KTtcbiAgICB9XG5cblxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKVxuICAgICAgICAudGhlbihpbml0KTtcblxuICAgIGxldCBpbml0ZWQgPSBmYWxzZTtcbiAgICBmdW5jdGlvbiBpbml0Q2hvb3NlQ2FyZHMoY2FyZHMpe1xuICAgICAgICBpZiAoaW5pdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT57XG4gICAgICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaW5mby1pY29uXCIpKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlmZmljdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZGlmZmljdWx0c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RlID0gbW9kZU1hcFtpdGVtXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlKG1vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja1VzZXJBdXRoKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJVc2VycygpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDApXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICBpbml0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFBvcHVwKHdyYXAsIHBvcHVwTmFtZSwgYnRucywgcG9wdXBJdGVtcyl7XG4gICAgICAgIGxldCBwb3B1cCA9IHdyYXAucXVlcnlTZWxlY3RvcihgLiR7cG9wdXBOYW1lfWApXG5cbiAgICAgICAgd3JhcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgZS50YXJnZXQgPT09IHdyYXAgPyBjbG9zZVBvcHVwKCkgOiBudWxsXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgY2xvc2VQb3B1cCA9ICgpID0+e1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIilcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICAgICAgd3JhcC5jbGFzc0xpc3QuYWRkKFwiX29wYWNpdHlcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgICAgaWYoYnRuLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMocG9wdXBOYW1lKSl7XG4gICAgICAgICAgICAgICAgYnRuLnBhcmVudE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgICAgICAgICAgaWYoZS50YXJnZXQgPT09IGJ0bil7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBJdGVtcy5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJfYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgIHdyYXAuY2xhc3NMaXN0LnJlbW92ZShcIl9vcGFjaXR5XCIpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBsZXQgY2xvc2VCdG4gPSBwb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19jbG9zZVwiKVxuICAgICAgICAgICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VQb3B1cCgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzZXRQb3B1cChwb3B1cHNXcmFwLCBcIl9lYXN5XCIsIHNob3dQb3B1cEJ0bnMsIHBvcHVwSXRlbXMpXG4gICAgc2V0UG9wdXAocG9wdXBzV3JhcCwgXCJfbWVkaXVtXCIsIHNob3dQb3B1cEJ0bnMsIHBvcHVwSXRlbXMpXG4gICAgc2V0UG9wdXAocG9wdXBzV3JhcCwgXCJfaGlnaHRcIiwgc2hvd1BvcHVwQnRucywgcG9wdXBJdGVtcylcbiAgICBzZXRQb3B1cChwb3B1cHNXcmFwLCBcIl9ub3RpZnlcIiwgc2hvd1BvcHVwQnRucywgcG9wdXBJdGVtcylcblxuICAgIGZ1bmN0aW9uIHN0YXJ0Q291bnRkb3duKHNlbGVjdG9yLCBlbmREYXRlKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtzZWxlY3Rvcn0gLndlbGNvbWVfX3RpbWVyLWl0ZW0tbnVtYCk7XG4gICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggIT09IDQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgc2VsZWN0b3IhJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YXJnZXREYXRlID0gbmV3IERhdGUoZW5kRGF0ZSkuZ2V0VGltZSgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWVyKCkge1xuICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCB0aW1lTGVmdCA9IHRhcmdldERhdGUgLSBub3c7XG5cbiAgICAgICAgICAgIGlmICh0aW1lTGVmdCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lclZhbHVlcyhbMCwgMCwgMCwgMF0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IodGltZUxlZnQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHRpbWVMZWZ0ICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVyVmFsdWVzKFtkYXlzLCBob3VycywgbWludXRlcywgc2Vjb25kc10pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0VGltZXJWYWx1ZXModmFsdWVzKSB7XG4gICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaW5kZXhdLnRleHRDb250ZW50ID0gdmFsdWUgPCAxMCA/IGAwJHt2YWx1ZX1gIDogdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZVRpbWVyKCk7XG4gICAgICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh1cGRhdGVUaW1lciwgMTAwMCk7XG4gICAgfVxuXG4gICAgc3RhcnRDb3VudGRvd24oJy53ZWxjb21lX190aW1lcicsICcyMDI1LTA1LTExVDIzOjU5OjU5KzAzOjAwJyk7XG5cbiAgICBmdW5jdGlvbiBtb25pdG9yVmlzaWJpbGl0eShzZWxlY3RvciwgYW5pbWF0aW9uLCBkZWxheSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFbGVtZW50IG5vdCBmb3VuZCEnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYW5pbWF0aW9uKVxuICAgICAgICAgICAgICAgICAgICB9LCBkZWxheSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICB9XG5cblxuICAgIG1vbml0b3JWaXNpYmlsaXR5KCcubm90aWZ5X19wZXJzJywgXCJzaG93WmV1c1wiLCAwKTtcbiAgICBtb25pdG9yVmlzaWJpbGl0eSgnLm5vdGlmeV9fcGVycy1idWJsZScsIFwic2hvd1pldXNCdWJsZVwiLCAxMjAwKTtcbiAgICBtb25pdG9yVmlzaWJpbGl0eSgnLmNob3NlX19wZXJzLWJ1YmxlJywgXCJzaG93WmV1c0J1YmxlXCIsIDApO1xuICAgIG1vbml0b3JWaXNpYmlsaXR5KCcuY2hvc2VfX2NhcmQuX2Vhc3knLCBcInNob3dDYXJkXCIsIDQwMCk7XG4gICAgbW9uaXRvclZpc2liaWxpdHkoJy5jaG9zZV9fY2FyZC5fbWVkaXVtJywgXCJzaG93Q2FyZFwiLCA4MDApO1xuICAgIG1vbml0b3JWaXNpYmlsaXR5KCcuY2hvc2VfX2NhcmQuX2hpZ2h0JywgXCJzaG93Q2FyZFwiLCAxMjAwKTtcblxuXG5cbiAgICBmdW5jdGlvbiB0b2dnbGVCbG9ja3MoaGlkZUJsb2NrLCBoaWRlQ2xhc3MsIHNob3dCbG9jaywgc2hvd0NsYXNzLCBzdGF0ZSwgYW5pbWF0ZSl7XG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoc3RhdGUsIGxvY2FsZSlcbiAgICAgICAgaGlkZUJsb2NrLmNsYXNzTGlzdC5hZGQoaGlkZUNsYXNzKVxuICAgICAgICBsZXQgZHJvcHMgPSBzaG93QmxvY2sucXVlcnlTZWxlY3RvckFsbChcIi5kcm9wXCIpXG4gICAgICAgIGRyb3BzLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgIGRpZmZpY3VsdHMuZm9yRWFjaChzdGF0ZSA9PntcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoc3RhdGUpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBkcm9wc1swXS5jbGFzc0xpc3QuYWRkKHN0YXRlKVxuICAgICAgICBpZihhbmltYXRlKXtcbiAgICAgICAgICAgIGhpZGVCbG9jay5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+e1xuXG4gICAgICAgICAgICAgICAgc2hvd0Jsb2NrLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAgICAgICAgIHNob3dCbG9jay5zdHlsZS5oZWlnaHQgPSBoaWRlQmxvY2suY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICAgICAgaGlkZUJsb2NrLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgc2hvd1Jlc3VsdEJsb2NrKHNob3dCbG9jaywgc2hvd0NsYXNzKVxuICAgICAgICAgICAgICAgIH0sIDUwKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzaG93QmxvY2suc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICBzaG93QmxvY2suc3R5bGUuaGVpZ2h0ID0gaGlkZUJsb2NrLmNsaWVudEhlaWdodFxuICAgICAgICAgICAgaGlkZUJsb2NrLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgICAgICBzaG93UmVzdWx0QmxvY2soc2hvd0Jsb2NrLCBzaG93Q2xhc3MpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dSZXN1bHRCbG9jayhzaG93QmxvY2ssIHNob3dDbGFzcyl7XG4gICAgICAgIHNob3dCbG9jay5jbGFzc0xpc3QuYWRkKHNob3dDbGFzcylcbiAgICAgICAgc2hvd0Jsb2NrLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICBsZXQgaXRlbXMgPSBzaG93QmxvY2sucXVlcnlTZWxlY3RvckFsbChcIi5yZXN1bHRfX2JldHMtaXRlbVwiKVxuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaSkgPT57XG4gICAgICAgICAgICAgICAgaWYoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJ5b3VcIikpe1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHlvdSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRfX2JldHMteW91XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB5b3UuY2xhc3NMaXN0LmFkZCgnc2hvd1lvdScpXG4gICAgICAgICAgICAgICAgICAgIH0sIDI3MDApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZXN1bHRfX2J0blwiKVxuICAgICAgICAgICAgICAgICAgICBidG5zLmZvckVhY2goYnRuID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJzaG93QnRuXCIpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSwgMjkwMClcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgIH0sIDI1MCAqIGl0ZW1zLmxlbmd0aCAtIGkgKiAyNTApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9DaG9zZVwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hvc2VcIik7XG4gICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gdGFyZ2V0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSAyO1xuXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICB0b3A6IHRhcmdldFBvc2l0aW9uLFxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIC8vdGVzdFxuICAgIC8vXG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpXG4gICAgLy8gfSlcbiAgICAvL1xuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlnaHQtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAvLyAgICAgZGlmZmljdWx0cy5mb3JFYWNoKGNzcyA9PntcbiAgICAvLyAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoY3NzKVxuICAgIC8vICAgICB9KVxuICAgIC8vXG4gICAgLy8gICAgIHRvZ2dsZUJsb2NrcyhjaG9zZUJsb2NrLCBcImNob3NlSGlkZVwiLCByZXN1bHRCbG9jaywgXCJyZXN1bHRTaG93XCIsIFwiX2hpZ2h0XCIsIHRydWUpO1xuICAgIC8vIH0pXG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lYXN5LWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgLy8gICAgIGRpZmZpY3VsdHMuZm9yRWFjaChjc3MgPT57XG4gICAgLy8gICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKGNzcylcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgdG9nZ2xlQmxvY2tzKGNob3NlQmxvY2ssIFwiY2hvc2VIaWRlXCIsIHJlc3VsdEJsb2NrLCBcInJlc3VsdFNob3dcIiwgXCJfZWFzeVwiLCB0cnVlKTtcbiAgICAvLyB9KVxuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVkaXVtLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgLy8gICAgIGRpZmZpY3VsdHMuZm9yRWFjaChjc3MgPT57XG4gICAgLy8gICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKGNzcylcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgdG9nZ2xlQmxvY2tzKGNob3NlQmxvY2ssIFwiY2hvc2VIaWRlXCIsIHJlc3VsdEJsb2NrLCBcInJlc3VsdFNob3dcIiwgXCJfbWVkaXVtXCIsIHRydWUpO1xuICAgIC8vIH0pXG4gICAgLy9cbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXV0aC1idG4nKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGhhc0lkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XG4gICAgLy8gICAgIGhhc0lkID8gc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcklkJykgOiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VySWQnLCAnMTAwMzAwMjY4Jyk7XG4gICAgLy8gICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIC8vIH0pO1xuICAgIC8vXG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sbmctYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGN1cnJlbnRMb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpO1xuICAgIC8vXG4gICAgLy8gICAgIGlmIChjdXJyZW50TG9jYWxlID09PSBcInVrXCIpIHtcbiAgICAvLyAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbGVcIik7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwidWtcIik7XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAvLyB9KTtcbiAgICAvL1xuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFyay1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgIC8vICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpXG4gICAgLy8gfSlcblxufSkoKTtcbiJdfQ==
