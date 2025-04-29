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

  welcomeLock.classList.add("hide");
  welcomeTimer.classList.add("hide");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwb3B1cHNXcmFwIiwic2hvd1BvcHVwQnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwb3B1cEl0ZW1zIiwiY2hvc2VCbG9jayIsInJlc3VsdEJsb2NrIiwidW5hdXRoTXNncyIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImNob3NlQ2FyZHMiLCJjaG9zZUNhcmRzSW5mbyIsIndlbGNvbWVMb2NrIiwid2VsY29tZVRpbWVyIiwibG9hZGVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJ1a0xlbmciLCJlbkxlbmciLCJkaWZmaWN1bHRzIiwibW9kZU1hcCIsImxvY2FsZSIsImRlYnVnIiwibW9ja0JldHMiLCJpZCIsImJldERhdGUiLCJzdGF0dXMiLCJ1bmRlZmluZWQiLCJtb2NrVXNlcnMiLCJ1c2VyaWQiLCJiZXQiLCJpMThuRGF0YSIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwiaW5pdCIsInRyeURldGVjdFVzZXJJZCIsInF1aWNrQ2hlY2tBbmRSZW5kZXIiLCJjaGVja1VzZXJBdXRoIiwicmVuZGVyVXNlcnMiLCJ3aW5kb3ciLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiZ191c2VyX2lkIiwiYXR0ZW1wdHMiLCJtYXhBdHRlbXB0cyIsImF0dGVtcHRJbnRlcnZhbCIsIndhaXRGb3JVc2VySWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicGFydGljaXBhdGUiLCJtb2RlIiwicGFyYW1zIiwicmVxdWVzdCIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwiZm9yRWFjaCIsIml0ZW0iLCJyZW1vdmUiLCJjc3MiLCJ0b2dnbGVCbG9ja3MiLCJsb2FkVHJhbnNsYXRpb25zIiwiZmV0Y2giLCJqc29uIiwidHJhbnNsYXRlIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJvYnNlcnZlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiZWxlbXMiLCJsZW5ndGgiLCJlbGVtIiwia2V5IiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwicmVtb3ZlQXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsInJlZnJlc2hMb2NhbGl6ZWRDbGFzcyIsInRyYW5zbGF0ZUtleSIsImRlZmF1bHRWYWwiLCJkaXNwbGF5VXNlckluZm8iLCJ1c2VySW5mbyIsImJldHMiLCJkaXNwbGF5QmV0c0hpc3RvcnkiLCJyZWZyZXNoTGFzdFVwZGF0ZWREYXRlIiwic29ydCIsImEiLCJiIiwiRGF0ZSIsInNsaWNlIiwicmV2ZXJzZSIsInJlZnJlc2hCZXRzIiwiZGF0ZUNvbnRhaW5lciIsInNwYW4iLCJsYXN0VXBkYXRlIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJsb2NhbERhdGUiLCJkYXkiLCJTdHJpbmciLCJnZXREYXRlIiwicGFkU3RhcnQiLCJtb250aCIsImdldE1vbnRoIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiZGl2cyIsImkiLCJlbGVtZW50Iiwic3Bpbkl0ZW0iLCJub1NwaW5JdGVtIiwibm9CZXRzIiwidXBkIiwic3BpbiIsInNwaW5EYXRlIiwiZm9ybWF0dGVkRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInJlc29sdmVTdGF0dXNUcmFuc2xhdGlvbiIsInNwaW5FbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImlzV2luIiwic3RhdHVzQ2xhc3MiLCJiZXRJZCIsImFwcGVuZENoaWxkIiwiYmFzZUNzc0NsYXNzIiwibGFuZyIsInJlcG9ydEVycm9yIiwiZXJyIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yVGV4dCIsImVycm9yIiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwiaGVhZGVycyIsIndhcm4iLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwib2siLCJFcnJvciIsImRpc3BsYXkiLCJzdGFydHNXaXRoIiwicmVqZWN0IiwibG9hZFRpbWUiLCJzZXRUaW1lb3V0IiwidW5hdXRoTWVzIiwiaW5mbyIsImluaXRDaG9vc2VDYXJkcyIsInBhcnRpY2lwYXRlQnRuIiwicG9wdWxhdGVVc2Vyc1RhYmxlIiwiZGF0YSIsInVzZXIiLCJmaW5kIiwidXNlcnMiLCJmaWx0ZXIiLCJjdXJyZW50VXNlcklkIiwieW91Um93IiwidGFibGVCb2R5Iiwid2luQ291bnQiLCJpbmRleCIsImlzQ3VycmVudFVzZXIiLCJpc1RvcFVzZXIiLCJkaXNwbGF5VXNlciIsInBsYWNlIiwidGFyZ2V0IiwidXNlcklkRGlzcGxheSIsIm1hc2tVc2VySWQiLCJyb3ciLCJ5b3VUZXh0Iiwic2V0QXR0cmlidXRlIiwidXNlcklkRGl2IiwidGV4dENvbnRlbnQiLCJiZXREaXYiLCJ0b1N0cmluZyIsImluaXRlZCIsImNhcmRzIiwiY2FyZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY29udGFpbnMiLCJzZXRQb3B1cCIsIndyYXAiLCJwb3B1cE5hbWUiLCJidG5zIiwicG9wdXAiLCJjbG9zZVBvcHVwIiwiYnRuIiwicGFyZW50Tm9kZSIsInByZXZlbnREZWZhdWx0IiwiY2xvc2VCdG4iLCJzdGFydENvdW50ZG93biIsInNlbGVjdG9yIiwiZW5kRGF0ZSIsImVsZW1lbnRzIiwidGFyZ2V0RGF0ZSIsImdldFRpbWUiLCJ1cGRhdGVUaW1lciIsIm5vdyIsInRpbWVMZWZ0IiwiaW50ZXJ2YWxJZCIsInNldFRpbWVyVmFsdWVzIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJ2YWx1ZXMiLCJ2YWx1ZSIsIm1vbml0b3JWaXNpYmlsaXR5IiwiYW5pbWF0aW9uIiwiZGVsYXkiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJoaWRlQmxvY2siLCJoaWRlQ2xhc3MiLCJzaG93QmxvY2siLCJzaG93Q2xhc3MiLCJhbmltYXRlIiwiZHJvcHMiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzaG93UmVzdWx0QmxvY2siLCJpdGVtcyIsInlvdSIsInN0b3BQcm9wYWdhdGlvbiIsInRhcmdldEVsZW1lbnQiLCJ0YXJnZXRQb3NpdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciJdLCJtYXBwaW5ncyI6Ijs7OytDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxDQUFDLFlBQVk7RUFDVCxJQUFNQSxNQUFNLEdBQUcsK0NBQStDO0VBRTlELElBQU1DLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQ2hEQyxVQUFVLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUM3Q0UsYUFBYSxHQUFHSCxRQUFRLENBQUNJLGdCQUFnQixDQUFDLFlBQVksQ0FBQztJQUN2REMsVUFBVSxHQUFHTCxRQUFRLENBQUNJLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztJQUN0REUsVUFBVSxHQUFHTixRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDN0NNLFdBQVcsR0FBR1AsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQy9DTyxVQUFVLEdBQUdSLFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0lBQ3JESyxlQUFlLEdBQUdULFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBQ3hETSxZQUFZLEdBQUdWLFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBQ3JETyxVQUFVLEdBQUdYLFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUMsY0FBYyxD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QUNuQixJQUFNQyxhQUFhLEdBQUcxUCxRQUFRLENBQUNpRixjQUFjLENBQUMsT0FBTyxDQUFDO0lBQ3RELElBQU0wSyxjQUFjLEdBQUdELGFBQWEsQ0FBQ0UscUJBQXFCLEVBQUUsQ0FBQ0MsR0FBRyxHQUFHbE4sTUFBTSxDQUFDbU4sV0FBVyxHQUFHLENBQUM7SUFFekZuTixNQUFNLENBQUNvTixRQUFRLENBQUM7TUFDWkYsR0FBRyxFQUFFRixjQUFjO01BQ25CSyxRQUFRLEVBQUU7SUFDZCxDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7O0VBRUY7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUVKLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX2Zvb3RiYWxsX2NoYWxsZW5nZV8yJ1xuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICBwb3B1cHNXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKSxcbiAgICAgICAgc2hvd1BvcHVwQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5mby1pY29uXCIpLFxuICAgICAgICBwb3B1cEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9faXRlbVwiKSxcbiAgICAgICAgY2hvc2VCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hvc2VcIiksXG4gICAgICAgIHJlc3VsdEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRcIiksXG4gICAgICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFydC1idG4nKSxcbiAgICAgICAgcmVkaXJlY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1qb2luJyksXG4gICAgICAgIGNob3NlQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNob3NlX19jYXJkXCIpLFxuICAgICAgICBjaG9zZUNhcmRzSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hvc2VfX2NhcmQtaW5mb1wiKSxcbiAgICAgICAgd2VsY29tZUxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlbGNvbWVfX2xvY2tcIiksXG4gICAgICAgIHdlbGNvbWVUaW1lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VsY29tZV9fdGltZXJcIiksXG4gICAgICAgIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Bpbm5lci1vdmVybGF5XCIpXG4gICAgICAgIC8vIGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJwaWN0dXJlXCIpXG5cbiAgICB3ZWxjb21lTG9jay5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgIHdlbGNvbWVUaW1lci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCJcblxuXG4gICAgY29uc3QgdWtMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VrTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGNvbnN0IGRpZmZpY3VsdHMgPSBbXCJfZWFzeVwiLCBcIl9tZWRpdW1cIiwgXCJfaGlnaHRcIl07XG4gICAgY29uc3QgbW9kZU1hcCA9IHtcIm5vdmljZVwiOiBcIl9lYXN5XCIsIFwiZXhwZXJpZW5jZWRcIjogXCJfbWVkaXVtXCIsIFwiaW5zYW5lXCI6IFwiX2hpZ2h0XCIsIFwiX2Vhc3lcIjogXCJub3ZpY2VcIiwgXCJfbWVkaXVtXCI6IFwiZXhwZXJpZW5jZWRcIiwgXCJfaGlnaHRcIjogXCJpbnNhbmVcIn07XG5cbiAgICBsZXQgbG9jYWxlID0gXCJlblwiXG5cblxuICAgIGlmICh1a0xlbmcpIGxvY2FsZSA9ICd1ayc7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuICAgIGxldCBkZWJ1ZyA9IGZhbHNlXG5cbiAgICBjb25zdCBtb2NrQmV0cyA9IFtcbiAgICAgICAgeyBpZDogMzg4MzEwMjQ3LCBiZXREYXRlOiAnMjAyNS0wNC0yMFQxMjowMDowMCcsIHN0YXR1czogJ3dpbicgfSxcbiAgICAgICAgeyBpZDogMzg4MzEwMjQ3LCBiZXREYXRlOiAnMjAyNS0wNC0yMFQxMjowMDowMCcsIHN0YXR1czogJ3dpbicgfSxcbiAgICAgICAgeyBpZDogMzg4MzEwMjQ4LCBiZXREYXRlOiAnMjAyNS0wNC0xOVQxNTozMDowMCcsIHN0YXR1czogJ2xvc2UnIH0sXG4gICAgICAgIHsgaWQ6IDM4ODMxMDI0OCwgYmV0RGF0ZTogJzIwMjUtMDQtMTlUMTU6MzA6MDAnLCBzdGF0dXM6ICd3aW4nIH0sXG4gICAgICAgIHsgaWQ6IDM4ODMxMDI0OCwgYmV0RGF0ZTogJzIwMjUtMDQtMTlUMTU6MzA6MDAnLCBzdGF0dXM6ICdsb3NlJyB9LFxuICAgICAgICB7IGlkOiAzODgzMTAyNDgsIGJldERhdGU6ICcyMDI1LTA0LTE5VDE1OjMwOjAwJywgc3RhdHVzOiAnbG9zZScgfSxcbiAgICAgICAgeyBpZDogMzg4MzEwMjQ4LCBiZXREYXRlOiAnMjAyNS0wNC0xOVQxNTozMDowMCcsIHN0YXR1czogJ2xvc2UnIH0sXG4gICAgICAgIHsgaWQ6IDM4ODMxMDI0OSwgYmV0RGF0ZTogJzIwMjUtMDQtMThUMDk6MTU6MDAnLCBzdGF0dXM6IHVuZGVmaW5lZCB9LFxuICAgIF07XG5cbiAgICBjb25zdCBtb2NrVXNlcnMgPSBbXG4gICAgICAgIHsgdXNlcmlkOiAzODgzMTAyNDcsIGJldDogMTAgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEyMzQ1Njc4OSwgYmV0OiA5IH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAzNjgsIGJldDogOCB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMTY4LCBiZXQ6IDggfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDA2OCwgYmV0OiA4IH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDgyNjgsIGJldDogOCB9LFxuICAgICAgICB7IHVzZXJpZDogMTExMjIyMzMzLCBiZXQ6IDcgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDExMTIyMjM0MywgYmV0OiA3IH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMTEyMjIzNTMsIGJldDogNiB9LFxuICAgICAgICB7IHVzZXJpZDogMTExMjIyMzYzLCBiZXQ6IDUgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDQ0NDU1NTY2NiwgYmV0OiA1IH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAyNjgsIGJldDogNiB9LFxuICAgIF07XG5cblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gdHJ1ZTtcbiAgICBsZXQgdXNlcklkID0gbnVsbDtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gNTA7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRJbnRlcnZhbCA9IDIwMDtcblxuICAgICAgICBmdW5jdGlvbiB0cnlEZXRlY3RVc2VySWQoKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnN0b3JlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB3aW5kb3cuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKSB7XG4gICAgICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG4gICAgICAgICAgICByZW5kZXJVc2VycygpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2FpdEZvclVzZXJJZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnlEZXRlY3RVc2VySWQoKTtcbiAgICAgICAgICAgICAgICBxdWlja0NoZWNrQW5kUmVuZGVyKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodXNlcklkIHx8IGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgICAgICB9LCBhdHRlbXB0SW50ZXJ2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yVXNlcklkO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gcGFydGljaXBhdGUobW9kZSkge1xuICAgICAgICBpZiAoIXVzZXJJZCB8fCAhbW9kZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyYW1zID0ge3VzZXJpZDogdXNlcklkLCBtb2RlfTtcbiAgICAgICAgcmVxdWVzdCgnL3VzZXInLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgIGNvbnN0IGNzcyA9IG1vZGVNYXBbbW9kZV07XG4gICAgICAgICAgICB0b2dnbGVCbG9ja3MoY2hvc2VCbG9jaywgXCJjaG9zZUhpZGVcIiwgcmVzdWx0QmxvY2ssIFwicmVzdWx0U2hvd1wiLCBjc3MsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2goYCR7YXBpVVJMfS90cmFuc2xhdGVzLyR7bG9jYWxlfWApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb290YmFsbC1jaGFsbGVuZ2VcIiksIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2xhdGlvbiB3b3JrcyFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYWxlID09PSAnZW4nKSB7XG4gICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdlbicpO1xuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZUtleShrZXksIGRlZmF1bHRWYWwpIHtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaTE4bkRhdGFba2V5XSB8fCBkZWZhdWx0VmFsIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlckluZm8odXNlckluZm8pIHtcbiAgICAgICAgbGV0IGJldHMgPSB1c2VySW5mby5iZXRzXG4gICAgICAgIC8vIGxldCBiZXRzID0gW3tiZXREYXRlOiBuZXcgRGF0ZSgpLCBzdGF0dXM6ICd1bmRlZmluZWQnfV1cblxuICAgICAgICBkaXNwbGF5QmV0c0hpc3RvcnkoYmV0cyk7XG4gICAgICAgIHJlZnJlc2hMYXN0VXBkYXRlZERhdGUodXNlckluZm8pO1xuICAgICAgICBiZXRzID0gdXNlckluZm8uYmV0c1xuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGIuYmV0RGF0ZSkgLSBuZXcgRGF0ZShhLmJldERhdGUpKVxuICAgICAgICAgICAgLnNsaWNlKDAsIDEwKVxuICAgICAgICAgICAgLnJldmVyc2UoKTtcbiAgICAgICAgcmVmcmVzaEJldHMoYmV0cyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExhc3RVcGRhdGVkRGF0ZSh1c2VySW5mbykge1xuICAgICAgICBjb25zdCBkYXRlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdF9fbGFzdC11cGQnKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXN0VXBkJyk7XG4gICAgICAgIGlmICh1c2VySW5mby5sYXN0VXBkYXRlKSB7XG4gICAgICAgICAgICBzcGFuLmlubmVySFRNTCA9IGZvcm1hdERhdGUodXNlckluZm8ubGFzdFVwZGF0ZSk7XG4gICAgICAgICAgICBkYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gICAgICAgIGNvbnN0IGxvY2FsRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgICAgICBjb25zdCBkYXkgPSBTdHJpbmcobG9jYWxEYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgbW9udGggPSBTdHJpbmcobG9jYWxEYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCBob3VycyA9IFN0cmluZyhsb2NhbERhdGUuZ2V0SG91cnMoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgbWludXRlcyA9IFN0cmluZyhsb2NhbERhdGUuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICByZXR1cm4gYCR7ZGF5fS4ke21vbnRofSAke2hvdXJzfToke21pbnV0ZXN9YDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoQmV0cyhiZXRzKSB7XG4gICAgICAgIGNvbnN0IGRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzdWx0X19iZXRzLWl0ZW0nKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZGl2c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGJldCA9IGJldHNbaV07XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3lvdScpO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdfZG9uZScpO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdfZmFpbCcpO1xuICAgICAgICAgICAgbGV0IHN0YXR1cyA9ICdfZmFpbCc7XG4gICAgICAgICAgICBpZiAoYmV0LnN0YXR1cyA9PT0gJ3dpbicpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSAnX2RvbmUnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghYmV0LnN0YXR1cyB8fCBiZXQuc3RhdHVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHN0YXR1cyA9ICd5b3UnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHN0YXR1cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzcGxheUJldHNIaXN0b3J5KGJldHMpIHtcbiAgICAgICAgLy8gcmV0dXJuO1xuICAgICAgICBjb25zdCBzcGluSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGlucy1yb3cnKTtcbiAgICAgICAgY29uc3Qgbm9TcGluSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uby1zcGlucycpO1xuXG4gICAgICAgIGNvbnN0IG5vQmV0cyA9ICFiZXRzIHx8IGJldHMubGVuZ3RoID09PSAwO1xuXG4gICAgICAgIGlmIChub0JldHMgJiYgIWRlYnVnKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhub0JldHMsIGRlYnVnKVxuICAgICAgICAgICAgc3Bpbkl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgbm9TcGluSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZihkZWJ1Zyl7XG4gICAgICAgICAgICBiZXRzID0gbW9ja0JldHNcbiAgICAgICAgfVxuXG5cbiAgICAgICAgc3Bpbkl0ZW0uaW5uZXJIVE1MID1cbiAgICAgICAgICAgIGBcbiAgICAgICA8ZGl2IGNsYXNzPVwic3BpbnMtcm93LWhlYWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWRhdGVcIiBkYXRhLXRyYW5zbGF0ZT1cIm15QmV0RGF0ZVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtcHJpemVcIiBkYXRhLXRyYW5zbGF0ZT1cIm15QmV0UHJpemVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXN0YXR1c1wiIGRhdGEtdHJhbnNsYXRlPVwibXlCZXRTdGF0dXNcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgIHNwaW5JdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgbm9TcGluSXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cbiAgICAgICAgbGV0IHVwZCA9IDA7XG4gICAgICAgIGJldHMuZm9yRWFjaChzcGluID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNwaW5EYXRlID0gbmV3IERhdGUoc3Bpbi5iZXREYXRlKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBzcGluRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ3VrLVVBJykuc2xpY2UoMCwgNSk7XG4gICAgICAgICAgICBjb25zdCBzdGF0dXMgPSByZXNvbHZlU3RhdHVzVHJhbnNsYXRpb24oc3Bpbi5zdGF0dXMpO1xuXG4gICAgICAgICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3BpbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBzcGluRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzcGlucy1yb3ctaXRlbScpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgaXNXaW4gPSBzcGluLnN0YXR1cyA9PT0gXCJ3aW5cIjtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNDbGFzcyA9IGlzV2luID8gJ19kb25lJyA6ICcnO1xuXG4gICAgICAgICAgICAgICAgc3BpbkVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbnRlbnQtZGF0ZVwiPiR7Zm9ybWF0dGVkRGF0ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudC1wcml6ZVwiPklEOiR7c3Bpbi5iZXRJZH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudC1zdGF0dXMgJHtzdGF0dXNDbGFzc31cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICBzcGluSXRlbS5hcHBlbmRDaGlsZChzcGluRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdXBkKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh1cGQgPT09IDApIHtcbiAgICAgICAgICAgIHNwaW5JdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIG5vU3Bpbkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVN0YXR1c1RyYW5zbGF0aW9uKHN0YXR1cykge1xuICAgICAgICBpZiAoIXN0YXR1cyB8fCBzdGF0dXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRlS2V5KCdiZXRVbmRlZmluZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdHVzID09PSAnd2luJykge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZUtleSgnd2luQmV0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ2xvc2UnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRlS2V5KCdsb3NlQmV0Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCwgYmFzZUNzc0NsYXNzKSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ3VrJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShiYXNlQ3NzQ2xhc3MgKyBsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYmFzZUNzc0NsYXNzICsgbG9jYWxlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBvcnRFcnJvcihlcnIpIHtcbiAgICAgICAgY29uc3QgcmVwb3J0RGF0YSA9IHtcbiAgICAgICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGVycm9yVGV4dDogZXJyPy5lcnJvciB8fCBlcnI/LnRleHQgfHwgZXJyPy5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJyxcbiAgICAgICAgICAgIHR5cGU6IGVycj8ubmFtZSB8fCAnVW5rbm93bkVycm9yJyxcbiAgICAgICAgICAgIHN0YWNrOiBlcnI/LnN0YWNrIHx8ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaS1jbXMvcmVwb3J0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVwb3J0RGF0YSlcbiAgICAgICAgfSkuY2F0Y2goY29uc29sZS53YXJuKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgbGV0IGxvYWRUaW1lID0gMjAwO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHdlbGNvbWVUaW1lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuXG4gICAgICAgICAgICAgICAgfSwgMzAwKVxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbmZvIG9mIGNob3NlQ2FyZHNJbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZm8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdChgL2ZhdnVzZXIvJHt1c2VySWR9P25vY2FjaGU9MWApXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnVzZXJpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlbGNvbWVMb2NrLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3NzID0gbW9kZU1hcFtyZXMubW9kZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQmxvY2tzKGNob3NlQmxvY2ssIFwiY2hvc2VIaWRlXCIsIHJlc3VsdEJsb2NrLCBcInJlc3VsdFNob3dcIiwgY3NzLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVVzZXJJbmZvKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRDaG9vc2VDYXJkcyhjaG9zZUNhcmRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWxjb21lTG9jay5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGRpc3BsYXlVc2VyU3BpbnMoMCk7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbmZvIG9mIGNob3NlQ2FyZHNJbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZm8uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwYXJ0aWNpcGF0ZUJ0biBvZiBwYXJ0aWNpcGF0ZUJ0bnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdlbGNvbWVMb2NrLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgd2VsY29tZVRpbWVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgICAgICAgICAgICAgfSwgMzAwKVxuICAgICAgICAgICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGxvYWRUaW1lKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzKCkge1xuICAgICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZShtb2NrVXNlcnMsIHVzZXJJZCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuXG4gICAgICAgIHJlcXVlc3QoYC91c2Vycy9gKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXNlciA9IGRhdGEuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSB1c2VySWQpO1xuICAgICAgICAgICAgY29uc3QgbW9kZSA9IHVzZXIgPyB1c2VyLm1vZGUgOiBudWxsO1xuICAgICAgICAgICAgY29uc3QgdXNlcnMgPSBkYXRhLmZpbHRlcih1c2VyID0+IHVzZXIubW9kZSA9PT0gbW9kZSlcbiAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgdXNlcklkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkKSB7XG4gICAgICAgIGNvbnN0IHlvdVJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZU90aGVyJyk7XG4gICAgICAgIGNvbnN0IHRhYmxlQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZScpO1xuXG4gICAgICAgIGlmICghdXNlcnM/Lmxlbmd0aCB8fCBjdXJyZW50VXNlcklkID09PSB1bmRlZmluZWQpIHJldHVybjtcblxuICAgICAgICB5b3VSb3cuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRhYmxlQm9keS5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICB1c2VycyA9IHVzZXJzLnNvcnQoKGEsIGIpID0+IGIud2luQ291bnQgLSBhLndpbkNvdW50KTtcblxuXG4gICAgICAgIHVzZXJzLmZvckVhY2goKHVzZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0N1cnJlbnRVc2VyID0gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQ7XG4gICAgICAgICAgICBsZXQgaXNUb3BVc2VyID0gZmFsc2VcblxuICAgICAgICAgICAgaWYoaW5kZXggPD0gNSAmJiBpc0N1cnJlbnRVc2VyKXtcbiAgICAgICAgICAgICAgIGlzVG9wVXNlciA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGluZGV4ID49IDIwICYmICFpc0N1cnJlbnRVc2VyKSByZXR1cm5cblxuICAgICAgICAgICAgZGlzcGxheVVzZXIodXNlciwgaXNDdXJyZW50VXNlciwgaW5kZXggKyAxLCBpc0N1cnJlbnRVc2VyICYmICFpc1RvcFVzZXIgPyB5b3VSb3cgOiB0YWJsZUJvZHkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCBwbGFjZSwgdGFyZ2V0KSB7XG5cblxuICAgICAgICBjb25zdCB1c2VySWREaXNwbGF5ID0gaXNDdXJyZW50VXNlciA/IHVzZXIudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyLnVzZXJpZCk7XG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG5cbiAgICAgICAgaWYgKGlzQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIC8vINCh0YLQstC+0YDQtdC90L3RjyDQtdC70LXQvNC10L3RgtGDICd5b3UnINGC0LAg0LLRgdGC0LDQstC60LAg0LnQvtCz0L4g0L/RltGB0LvRjyDQtdC70LXQvNC10L3RgtGDINC3INC80ZbRgdGG0LXQvFxuICAgICAgICAgICAgY29uc3QgeW91VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgeW91VGV4dC5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93LWl0ZW0nLCAnX3lvdS10ZXh0Jyk7XG4gICAgICAgICAgICB5b3VUZXh0LnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCAneW91Jyk7XG5cblxuICAgICAgICAgICAgcm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj4ke3BsYWNlfTwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICAvLyDQlNC+0LTQsNGU0LzQviBcInlvdVwiINGC0LXQutGB0YIg0L/RltGB0LvRjyDQvNGW0YHRhtGPXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoeW91VGV4dCk7XG5cbiAgICAgICAgICAgIC8vINCf0L7RgtGW0Lwg0LTQvtC00LDRlNC80L4gdXNlcklkINGC0LAg0YHRgtCw0LLQutGDXG4gICAgICAgICAgICBjb25zdCB1c2VySWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVzZXJJZERpdi5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93LWl0ZW0nKTtcbiAgICAgICAgICAgIHVzZXJJZERpdi50ZXh0Q29udGVudCA9IHVzZXJJZERpc3BsYXk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJldERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYmV0RGl2LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3ctaXRlbScpO1xuICAgICAgICAgICAgYmV0RGl2LnRleHRDb250ZW50ID0gdXNlci53aW5Db3VudDtcblxuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHVzZXJJZERpdik7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoYmV0RGl2KTtcblxuICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ195b3UnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+JHtwbGFjZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj4ke3VzZXJJZERpc3BsYXl9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+JHt1c2VyLndpbkNvdW50fTwvZGl2PlxuICAgICAgICBgO1xuXG5cbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQocm93KTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIG1hc2tVc2VySWQodXNlcklkKSB7XG4gICAgICAgIHJldHVybiBcIioqKipcIiArIHVzZXJJZC50b1N0cmluZygpLnNsaWNlKDQpO1xuICAgIH1cblxuXG4gICAgbG9hZFRyYW5zbGF0aW9ucygpXG4gICAgICAgIC50aGVuKGluaXQpO1xuXG4gICAgbGV0IGluaXRlZCA9IGZhbHNlO1xuICAgIGZ1bmN0aW9uIGluaXRDaG9vc2VDYXJkcyhjYXJkcyl7XG4gICAgICAgIGlmIChpbml0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PntcbiAgICAgICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJpbmZvLWljb25cIikpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWZmaWN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkaWZmaWN1bHRzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZC5jbGFzc0xpc3QuY29udGFpbnMoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGUgPSBtb2RlTWFwW2l0ZW1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGUobW9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMClcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIGluaXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0UG9wdXAod3JhcCwgcG9wdXBOYW1lLCBidG5zLCBwb3B1cEl0ZW1zKXtcbiAgICAgICAgbGV0IHBvcHVwID0gd3JhcC5xdWVyeVNlbGVjdG9yKGAuJHtwb3B1cE5hbWV9YClcblxuICAgICAgICB3cmFwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgICAgICBlLnRhcmdldCA9PT0gd3JhcCA/IGNsb3NlUG9wdXAoKSA6IG51bGxcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBjbG9zZVBvcHVwID0gKCkgPT57XG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX2FjdGl2ZVwiKVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgICAgICB3cmFwLmNsYXNzTGlzdC5hZGQoXCJfb3BhY2l0eVwiKVxuICAgICAgICB9XG5cbiAgICAgICAgYnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgICBpZihidG4ucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhwb3B1cE5hbWUpKXtcbiAgICAgICAgICAgICAgICBidG4ucGFyZW50Tm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgICAgICAgICBpZihlLnRhcmdldCA9PT0gYnRuKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgICAgICAgICBwb3B1cEl0ZW1zLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIilcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9hY3RpdmVcIilcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgd3JhcC5jbGFzc0xpc3QucmVtb3ZlKFwiX29wYWNpdHlcIilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGxldCBjbG9zZUJ0biA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Nsb3NlXCIpXG4gICAgICAgICAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgICAgICAgICBjbG9zZVBvcHVwKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNldFBvcHVwKHBvcHVwc1dyYXAsIFwiX2Vhc3lcIiwgc2hvd1BvcHVwQnRucywgcG9wdXBJdGVtcylcbiAgICBzZXRQb3B1cChwb3B1cHNXcmFwLCBcIl9tZWRpdW1cIiwgc2hvd1BvcHVwQnRucywgcG9wdXBJdGVtcylcbiAgICBzZXRQb3B1cChwb3B1cHNXcmFwLCBcIl9oaWdodFwiLCBzaG93UG9wdXBCdG5zLCBwb3B1cEl0ZW1zKVxuICAgIHNldFBvcHVwKHBvcHVwc1dyYXAsIFwiX25vdGlmeVwiLCBzaG93UG9wdXBCdG5zLCBwb3B1cEl0ZW1zKVxuXG4gICAgZnVuY3Rpb24gc3RhcnRDb3VudGRvd24oc2VsZWN0b3IsIGVuZERhdGUpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke3NlbGVjdG9yfSAud2VsY29tZV9fdGltZXItaXRlbS1udW1gKTtcbiAgICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCAhPT0gNCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBzZWxlY3RvciEnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhcmdldERhdGUgPSBuZXcgRGF0ZShlbmREYXRlKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlVGltZXIoKSB7XG4gICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVMZWZ0ID0gdGFyZ2V0RGF0ZSAtIG5vdztcblxuICAgICAgICAgICAgaWYgKHRpbWVMZWZ0IDw9IDApIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVyVmFsdWVzKFswLCAwLCAwLCAwXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcih0aW1lTGVmdCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoKHRpbWVMZWZ0ICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKHRpbWVMZWZ0ICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigodGltZUxlZnQgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcblxuICAgICAgICAgICAgc2V0VGltZXJWYWx1ZXMoW2RheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzXSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzZXRUaW1lclZhbHVlcyh2YWx1ZXMpIHtcbiAgICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpbmRleF0udGV4dENvbnRlbnQgPSB2YWx1ZSA8IDEwID8gYDAke3ZhbHVlfWAgOiB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlVGltZXIoKTtcbiAgICAgICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHVwZGF0ZVRpbWVyLCAxMDAwKTtcbiAgICB9XG5cbiAgICBzdGFydENvdW50ZG93bignLndlbGNvbWVfX3RpbWVyJywgJzIwMjUtMDUtMTFUMjM6NTk6NTknKTtcblxuICAgIGZ1bmN0aW9uIG1vbml0b3JWaXNpYmlsaXR5KHNlbGVjdG9yLCBhbmltYXRpb24sIGRlbGF5KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VsZW1lbnQgbm90IGZvdW5kIScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChhbmltYXRpb24pXG4gICAgICAgICAgICAgICAgICAgIH0sIGRlbGF5KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIH1cblxuXG4gICAgbW9uaXRvclZpc2liaWxpdHkoJy5ub3RpZnlfX3BlcnMnLCBcInNob3daZXVzXCIsIDApO1xuICAgIG1vbml0b3JWaXNpYmlsaXR5KCcubm90aWZ5X19wZXJzLWJ1YmxlJywgXCJzaG93WmV1c0J1YmxlXCIsIDEyMDApO1xuICAgIG1vbml0b3JWaXNpYmlsaXR5KCcuY2hvc2VfX3BlcnMtYnVibGUnLCBcInNob3daZXVzQnVibGVcIiwgMCk7XG4gICAgbW9uaXRvclZpc2liaWxpdHkoJy5jaG9zZV9fY2FyZC5fZWFzeScsIFwic2hvd0NhcmRcIiwgNDAwKTtcbiAgICBtb25pdG9yVmlzaWJpbGl0eSgnLmNob3NlX19jYXJkLl9tZWRpdW0nLCBcInNob3dDYXJkXCIsIDgwMCk7XG4gICAgbW9uaXRvclZpc2liaWxpdHkoJy5jaG9zZV9fY2FyZC5faGlnaHQnLCBcInNob3dDYXJkXCIsIDEyMDApO1xuXG5cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUJsb2NrcyhoaWRlQmxvY2ssIGhpZGVDbGFzcywgc2hvd0Jsb2NrLCBzaG93Q2xhc3MsIHN0YXRlLCBhbmltYXRlKXtcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZChzdGF0ZSwgbG9jYWxlKVxuICAgICAgICBoaWRlQmxvY2suY2xhc3NMaXN0LmFkZChoaWRlQ2xhc3MpXG4gICAgICAgIGxldCBkcm9wcyA9IHNob3dCbG9jay5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyb3BcIilcbiAgICAgICAgZHJvcHMuZm9yRWFjaChpdGVtID0+e1xuICAgICAgICAgICAgZGlmZmljdWx0cy5mb3JFYWNoKHN0YXRlID0+e1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShzdGF0ZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIGRyb3BzWzBdLmNsYXNzTGlzdC5hZGQoc3RhdGUpXG4gICAgICAgIGlmKGFuaW1hdGUpe1xuICAgICAgICAgICAgaGlkZUJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT57XG5cbiAgICAgICAgICAgICAgICBzaG93QmxvY2suc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICAgICAgc2hvd0Jsb2NrLnN0eWxlLmhlaWdodCA9IGhpZGVCbG9jay5jbGllbnRIZWlnaHRcbiAgICAgICAgICAgICAgICBoaWRlQmxvY2suY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICBzaG93UmVzdWx0QmxvY2soc2hvd0Jsb2NrLCBzaG93Q2xhc3MpXG4gICAgICAgICAgICAgICAgfSwgNTApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNob3dCbG9jay5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgICAgIHNob3dCbG9jay5zdHlsZS5oZWlnaHQgPSBoaWRlQmxvY2suY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICBoaWRlQmxvY2suY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgIHNob3dSZXN1bHRCbG9jayhzaG93QmxvY2ssIHNob3dDbGFzcylcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd1Jlc3VsdEJsb2NrKHNob3dCbG9jaywgc2hvd0NsYXNzKXtcbiAgICAgICAgc2hvd0Jsb2NrLmNsYXNzTGlzdC5hZGQoc2hvd0NsYXNzKVxuICAgICAgICBzaG93QmxvY2suc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IHNob3dCbG9jay5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlc3VsdF9fYmV0cy1pdGVtXCIpXG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpKSA9PntcbiAgICAgICAgICAgICAgICBpZihpdGVtLmNsYXNzTGlzdC5jb250YWlucyhcInlvdVwiKSl7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeW91ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdF9fYmV0cy15b3VcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHlvdS5jbGFzc0xpc3QuYWRkKCdzaG93WW91JylcbiAgICAgICAgICAgICAgICAgICAgfSwgMjcwMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlc3VsdF9fYnRuXCIpXG4gICAgICAgICAgICAgICAgICAgIGJ0bnMuZm9yRWFjaChidG4gPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcInNob3dCdG5cIilcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LCAyOTAwKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcInNob3dJdGVtXCIpXG4gICAgICAgICAgICAgICAgfSwgMjUwICogaXRlbXMubGVuZ3RoIC0gaSAqIDI1MClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b0Nob3NlXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaG9zZVwiKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSB0YXJnZXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCAtIDI7XG5cbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgIHRvcDogdGFyZ2V0UG9zaXRpb24sXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gLy90ZXN0XG4gICAgLy9cbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAvLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRlc3RcIikuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIilcbiAgICAvLyB9KVxuICAgIC8vXG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaWdodC1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgIC8vICAgICBkaWZmaWN1bHRzLmZvckVhY2goY3NzID0+e1xuICAgIC8vICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShjc3MpXG4gICAgLy8gICAgIH0pXG4gICAgLy9cbiAgICAvLyAgICAgdG9nZ2xlQmxvY2tzKGNob3NlQmxvY2ssIFwiY2hvc2VIaWRlXCIsIHJlc3VsdEJsb2NrLCBcInJlc3VsdFNob3dcIiwgXCJfaGlnaHRcIiwgdHJ1ZSk7XG4gICAgLy8gfSlcbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVhc3ktYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAvLyAgICAgZGlmZmljdWx0cy5mb3JFYWNoKGNzcyA9PntcbiAgICAvLyAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoY3NzKVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgICB0b2dnbGVCbG9ja3MoY2hvc2VCbG9jaywgXCJjaG9zZUhpZGVcIiwgcmVzdWx0QmxvY2ssIFwicmVzdWx0U2hvd1wiLCBcIl9lYXN5XCIsIHRydWUpO1xuICAgIC8vIH0pXG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZWRpdW0tYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAvLyAgICAgZGlmZmljdWx0cy5mb3JFYWNoKGNzcyA9PntcbiAgICAvLyAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoY3NzKVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgICB0b2dnbGVCbG9ja3MoY2hvc2VCbG9jaywgXCJjaG9zZUhpZGVcIiwgcmVzdWx0QmxvY2ssIFwicmVzdWx0U2hvd1wiLCBcIl9tZWRpdW1cIiwgdHJ1ZSk7XG4gICAgLy8gfSlcbiAgICAvL1xuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdXRoLWJ0bicpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyAgICAgY29uc3QgaGFzSWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcbiAgICAvLyAgICAgaGFzSWQgPyBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VySWQnKSA6IHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXJJZCcsICcxMDAzMDAyNjgnKTtcbiAgICAvLyAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgLy8gfSk7XG4gICAgLy9cbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxuZy1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyAgICAgY29uc3QgY3VycmVudExvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIik7XG4gICAgLy9cbiAgICAvLyAgICAgaWYgKGN1cnJlbnRMb2NhbGUgPT09IFwidWtcIikge1xuICAgIC8vICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsZVwiKTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIiwgXCJ1a1wiKTtcbiAgICAvLyAgICAgfVxuICAgIC8vXG4gICAgLy8gICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIC8vIH0pO1xuICAgIC8vXG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXJrLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgLy8gICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIilcbiAgICAvLyB9KVxuXG59KSgpO1xuIl19
