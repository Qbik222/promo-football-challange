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
    choseCardsInfo = document.querySelectorAll(".chose__card-info");
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
  sessionStorage.removeItem("userMode");
  var i18nData = {};
  var translateState = true;
  var userMode;
  var userId = null;
  function init() {
    return _init.apply(this, arguments);
  } // function init() {
  //     if (window.store) {
  //         var state = window.store.getState();
  //         userId = state.auth.isAuthorized && state.auth.id || '';
  //         checkUserAuth();
  //         renderUsers()
  //     } else {
  //         let c = 0;
  //         var i = setInterval(function () {
  //             if (c < 50) {
  //                 if (!!window.g_user_id) {
  //                     userId = window.g_user_id;
  //                     checkUserAuth();
  //                     renderUsers()
  //                     clearInterval(i);
  //                 }
  //             } else {
  //                 checkUserAuth();
  //                 renderUsers()
  //                 clearInterval(i);
  //             }
  //             checkUserAuth();
  //             renderUsers()
  //         }, 200);
  //     }
  //     // checkUserAuth() // для локального тесту
  //     // renderUsers() // для локального тесту
  // }
  //
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
    var bets = userInfo.bets.slice(0, 20);
    // let bets = [{betDate: new Date(), status: 'undefined'}]
    console.log(userInfo);
    refreshBets(bets);
    displayBetsHistory(bets);
    refreshLastUpdatedDate(userInfo);
  }
  function refreshLastUpdatedDate(userInfo) {
    console.log(userInfo);
    var dateContainer = document.querySelector('.result__last-upd');
    var span = document.getElementById('lastUpd');
    if (userInfo.date) {
      span.innerHTML = formatDate(userInfo.date);
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
      console.log(noBets, debug);
      spinItem.classList.add('hide');
      noSpinItem.classList.remove('hide');
      return;
    }
    if (debug) {
      bets = mockBets;
    }
    console.log(bets);
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
      var _iterator2 = _createForOfIteratorHelper(choseCardsInfo),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var info = _step2.value;
          info.classList.add('hide');
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
          if (res.mode) {
            userMode = res.mode;
          }
          sessionStorage.setItem("userMode", userMode);
          var css = modeMap[res.mode];
          toggleBlocks(choseBlock, "choseHide", resultBlock, "resultShow", css, false);
          console.log(res);
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
      return Promise.resolve(false);
    }
  }
  function renderUsers() {
    console.log("render");
    if (debug) {
      populateUsersTable(mockUsers, userId);
      return;
    }

    // userMode = sessionStorage.getItem("userMode")

    request("/users/").then(function (data) {
      var user = data.find(function (user) {
        return user.userid === userId;
      });
      var mode = user ? user.mode : null;
      var users = data.filter(function (user) {
        return user.mode === mode;
      });
      console.log(users);
      populateUsersTable(users, userId);
    });
  }
  function populateUsersTable(users, currentUserId) {
    var youRow = document.querySelector('#tableOther');
    var tableBody = document.querySelector('#table');
    if (!(users !== null && users !== void 0 && users.length) || currentUserId === undefined) return;

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
      betDiv.textContent = user.winCount;
      row.appendChild(userIdDiv);
      row.appendChild(betDiv);
      row.classList.add('_you');
    } else {
      console.log(row);
      row.innerHTML = "\n            <div class=\"table__row-item\">".concat(place, "</div>\n            <div class=\"table__row-item\">").concat(userIdDisplay, "</div>\n            <div class=\"table__row-item\">").concat(user.winCount, "</div>\n        ");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwb3B1cHNXcmFwIiwic2hvd1BvcHVwQnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwb3B1cEl0ZW1zIiwiY2hvc2VCbG9jayIsInJlc3VsdEJsb2NrIiwidW5hdXRoTXNncyIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImNob3NlQ2FyZHMiLCJjaG9zZUNhcmRzSW5mbyIsInVrTGVuZyIsImVuTGVuZyIsImRpZmZpY3VsdHMiLCJtb2RlTWFwIiwibG9jYWxlIiwiZGVidWciLCJtb2NrQmV0cyIsImlkIiwiYmV0RGF0ZSIsInN0YXR1cyIsInVuZGVmaW5lZCIsIm1vY2tVc2VycyIsInVzZXJpZCIsImJldCIsInNlc3Npb25TdG9yYWdlIiwicmVtb3ZlSXRlbSIsImkxOG5EYXRhIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VyTW9kZSIsInVzZXJJZCIsImluaXQiLCJ0cnlEZXRlY3RVc2VySWQiLCJxdWlja0NoZWNrQW5kUmVuZGVyIiwiY2hlY2tVc2VyQXV0aCIsInJlbmRlclVzZXJzIiwid2luZG93Iiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImdfdXNlcl9pZCIsImF0dGVtcHRzIiwibWF4QXR0ZW1wdHMiLCJhdHRlbXB0SW50ZXJ2YWwiLCJ3YWl0Rm9yVXNlcklkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInBhcnRpY2lwYXRlIiwibW9kZSIsInBhcmFtcyIsInJlcXVlc3QiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJmb3JFYWNoIiwiaXRlbSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImNzcyIsInRvZ2dsZUJsb2NrcyIsImxvYWRUcmFuc2xhdGlvbnMiLCJmZXRjaCIsImpzb24iLCJ0cmFuc2xhdGUiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm9ic2VydmUiLCJnZXRFbGVtZW50QnlJZCIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJlbGVtcyIsImxlbmd0aCIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwidHJhbnNsYXRlS2V5IiwiZGVmYXVsdFZhbCIsImRpc3BsYXlVc2VySW5mbyIsInVzZXJJbmZvIiwiYmV0cyIsInNsaWNlIiwicmVmcmVzaEJldHMiLCJkaXNwbGF5QmV0c0hpc3RvcnkiLCJyZWZyZXNoTGFzdFVwZGF0ZWREYXRlIiwiZGF0ZUNvbnRhaW5lciIsInNwYW4iLCJkYXRlIiwiZm9ybWF0RGF0ZSIsImxvY2FsRGF0ZSIsIkRhdGUiLCJkYXkiLCJTdHJpbmciLCJnZXREYXRlIiwicGFkU3RhcnQiLCJtb250aCIsImdldE1vbnRoIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiZGl2cyIsImkiLCJlbGVtZW50Iiwic3Bpbkl0ZW0iLCJub1NwaW5JdGVtIiwibm9CZXRzIiwidXBkIiwic3BpbiIsInNwaW5EYXRlIiwiZm9ybWF0dGVkRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInJlc29sdmVTdGF0dXNUcmFuc2xhdGlvbiIsInNwaW5FbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImlzV2luIiwic3RhdHVzQ2xhc3MiLCJiZXRJZCIsImFwcGVuZENoaWxkIiwiYmFzZUNzc0NsYXNzIiwibGFuZyIsImxpbmsiLCJleHRyYU9wdGlvbnMiLCJoZWFkZXJzIiwidW5hdXRoTWVzIiwiaW5mbyIsInNldEl0ZW0iLCJpbml0Q2hvb3NlQ2FyZHMiLCJwYXJ0aWNpcGF0ZUJ0biIsInBvcHVsYXRlVXNlcnNUYWJsZSIsImRhdGEiLCJ1c2VyIiwiZmluZCIsInVzZXJzIiwiZmlsdGVyIiwiY3VycmVudFVzZXJJZCIsInlvdVJvdyIsInRhYmxlQm9keSIsInNvcnQiLCJhIiwiYiIsImluZGV4IiwiaXNDdXJyZW50VXNlciIsImlzVG9wVXNlciIsImRpc3BsYXlVc2VyIiwicGxhY2UiLCJ0YXJnZXQiLCJ1c2VySWREaXNwbGF5IiwibWFza1VzZXJJZCIsInJvdyIsInlvdVRleHQiLCJzZXRBdHRyaWJ1dGUiLCJ1c2VySWREaXYiLCJ0ZXh0Q29udGVudCIsImJldERpdiIsIndpbkNvdW50IiwidG9TdHJpbmciLCJpbml0ZWQiLCJjYXJkcyIsImNhcmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvbnRhaW5zIiwic2V0VGltZW91dCIsInNldFBvcHVwIiwid3JhcCIsInBvcHVwTmFtZSIsImJ0bnMiLCJwb3B1cCIsImNsb3NlUG9wdXAiLCJzdHlsZSIsIm92ZXJmbG93IiwiYnRuIiwicGFyZW50Tm9kZSIsInByZXZlbnREZWZhdWx0IiwiY2xvc2VCdG4iLCJzdGFydENvdW50ZG93biIsInNlbGVjdG9yIiwiZW5kRGF0ZSIsImVsZW1lbnRzIiwiZXJyb3IiLCJ0YXJnZXREYXRlIiwiZ2V0VGltZSIsInVwZGF0ZVRpbWVyIiwibm93IiwidGltZUxlZnQiLCJpbnRlcnZhbElkIiwic2V0VGltZXJWYWx1ZXMiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwic2Vjb25kcyIsInZhbHVlcyIsInZhbHVlIiwibW9uaXRvclZpc2liaWxpdHkiLCJhbmltYXRpb24iLCJkZWxheSIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImhpZGVCbG9jayIsImhpZGVDbGFzcyIsInNob3dCbG9jayIsInNob3dDbGFzcyIsImFuaW1hdGUiLCJkcm9wcyIsImRpc3BsYXkiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzaG93UmVzdWx0QmxvY2siLCJpdGVtcyIsInlvdSIsInN0b3BQcm9wYWdhdGlvbiIsInRhcmdldEVsZW1lbnQiLCJ0YXJnZXRQb3NpdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsInRvZ2dsZSIsImhhc0lkIiwiZ2V0SXRlbSIsImxvY2F0aW9uIiwicmVsb2FkIiwiY3VycmVudExvY2FsZSJdLCJtYXBwaW5ncyI6Ijs7OytDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxDQUFDLFlBQVk7RUFBQTtFQUNULElBQU1BLE1BQU0sR0FBRywrQ0FBK0M7RUFFOUQsSUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDaERDLFVBQVUsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQzdDRSxhQUFhLEdBQUdILFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUMsWUFBWSxDQUFDO0lBQ3ZEQyxVQUFVLEdBQUdMLFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUMsY0FBYyxDQUFDO0lBQ3RERSxVQUFVLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUM3Q00sV0FBVyxHQUFHUCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDL0NPLFVBQVUsR0FBR1IsUUFBUSxDQUFDSSxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7SUFDckRLLGVBQWUsR0FBR1QsUUFBUSxDQUFDSSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFDeERNLFlBQVksR0FBR1YsUUFBUSxDQUFDSSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFDckRPLFVBQVUsR0FBR1gsUUFBUSxDQUFDSSxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7SUFDdERRLGNBQWMsR0FBR1osUUFBUSxDQUFDSSxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztFQUVuRSxJQUFNUyxNQUFNLEdBQUdiLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMs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LEVBQUUsSUFBSSxDQUFDO0lBQzFDO0lBRUFtRyxRQUFRLENBQUNDLE1BQU0sRUFBRTtFQUNyQixDQUFDLENBQUM7RUFFRmxQLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDK0ssZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7SUFDL0RoTCxRQUFRLENBQUMyRCxJQUFJLENBQUNPLFNBQVMsQ0FBQzRLLE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDMUMsQ0FBQyxDQUFDO0FBRU4sQ0FBQyxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfZm9vdGJhbGxfY2hhbGxlbmdlXzInXG5cbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4gICAgICAgIHBvcHVwc1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpLFxuICAgICAgICBzaG93UG9wdXBCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbmZvLWljb25cIiksXG4gICAgICAgIHBvcHVwSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19pdGVtXCIpLFxuICAgICAgICBjaG9zZUJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaG9zZVwiKSxcbiAgICAgICAgcmVzdWx0QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdFwiKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0bicpLFxuICAgICAgICByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWpvaW4nKSxcbiAgICAgICAgY2hvc2VDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hvc2VfX2NhcmRcIiksXG4gICAgICAgIGNob3NlQ2FyZHNJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaG9zZV9fY2FyZC1pbmZvXCIpXG5cbiAgICBjb25zdCB1a0xlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWtMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgY29uc3QgZGlmZmljdWx0cyA9IFtcIl9lYXN5XCIsIFwiX21lZGl1bVwiLCBcIl9oaWdodFwiXTtcbiAgICBjb25zdCBtb2RlTWFwID0ge1wibm92aWNlXCI6IFwiX2Vhc3lcIiwgXCJleHBlcmllbmNlZFwiOiBcIl9tZWRpdW1cIiwgXCJpbnNhbmVcIjogXCJfaGlnaHRcIiwgXCJfZWFzeVwiOiBcIm5vdmljZVwiLCBcIl9tZWRpdW1cIjogXCJleHBlcmllbmNlZFwiLCBcIl9oaWdodFwiOiBcImluc2FuZVwifTtcblxuICAgIGxldCBsb2NhbGUgPSBcImVuXCJcblxuXG4gICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IGRlYnVnID0gZmFsc2VcblxuICAgIGNvbnN0IG1vY2tCZXRzID0gW1xuICAgICAgICB7IGlkOiAzODgzMTAyNDcsIGJldERhdGU6ICcyMDI1LTA0LTIwVDEyOjAwOjAwJywgc3RhdHVzOiAnd2luJyB9LFxuICAgICAgICB7IGlkOiAzODgzMTAyNDcsIGJldERhdGU6ICcyMDI1LTA0LTIwVDEyOjAwOjAwJywgc3RhdHVzOiAnd2luJyB9LFxuICAgICAgICB7IGlkOiAzODgzMTAyNDgsIGJldERhdGU6ICcyMDI1LTA0LTE5VDE1OjMwOjAwJywgc3RhdHVzOiAnbG9zZScgfSxcbiAgICAgICAgeyBpZDogMzg4MzEwMjQ4LCBiZXREYXRlOiAnMjAyNS0wNC0xOVQxNTozMDowMCcsIHN0YXR1czogJ3dpbicgfSxcbiAgICAgICAgeyBpZDogMzg4MzEwMjQ4LCBiZXREYXRlOiAnMjAyNS0wNC0xOVQxNTozMDowMCcsIHN0YXR1czogJ2xvc2UnIH0sXG4gICAgICAgIHsgaWQ6IDM4ODMxMDI0OCwgYmV0RGF0ZTogJzIwMjUtMDQtMTlUMTU6MzA6MDAnLCBzdGF0dXM6ICdsb3NlJyB9LFxuICAgICAgICB7IGlkOiAzODgzMTAyNDgsIGJldERhdGU6ICcyMDI1LTA0LTE5VDE1OjMwOjAwJywgc3RhdHVzOiAnbG9zZScgfSxcbiAgICAgICAgeyBpZDogMzg4MzEwMjQ5LCBiZXREYXRlOiAnMjAyNS0wNC0xOFQwOToxNTowMCcsIHN0YXR1czogdW5kZWZpbmVkIH0sXG4gICAgXTtcblxuICAgIGNvbnN0IG1vY2tVc2VycyA9IFtcbiAgICAgICAgeyB1c2VyaWQ6IDM4ODMxMDI0NywgYmV0OiAxMCB9LFxuICAgICAgICB7IHVzZXJpZDogMTIzNDU2Nzg5LCBiZXQ6IDkgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDM2OCwgYmV0OiA4IH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAxNjgsIGJldDogOCB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMDY4LCBiZXQ6IDggfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwODI2OCwgYmV0OiA4IH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMTEyMjIzMzMsIGJldDogNyB9LFxuICAgICAgICB7IHVzZXJpZDogMTExMjIyMzQzLCBiZXQ6IDcgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDExMTIyMjM1MywgYmV0OiA2IH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMTEyMjIzNjMsIGJldDogNSB9LFxuICAgICAgICB7IHVzZXJpZDogNDQ0NTU1NjY2LCBiZXQ6IDUgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDI2OCwgYmV0OiA2IH0sXG4gICAgXTtcblxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyTW9kZVwiKVxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGUgPSB0cnVlO1xuICAgIGxldCB1c2VyTW9kZTtcbiAgICBsZXQgdXNlcklkID0gbnVsbDtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gNTA7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRJbnRlcnZhbCA9IDIwMDtcblxuICAgICAgICBmdW5jdGlvbiB0cnlEZXRlY3RVc2VySWQoKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnN0b3JlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB3aW5kb3cuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKSB7XG4gICAgICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG4gICAgICAgICAgICByZW5kZXJVc2VycygpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2FpdEZvclVzZXJJZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnlEZXRlY3RVc2VySWQoKTtcbiAgICAgICAgICAgICAgICBxdWlja0NoZWNrQW5kUmVuZGVyKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodXNlcklkIHx8IGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgICAgICB9LCBhdHRlbXB0SW50ZXJ2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yVXNlcklkO1xuICAgIH1cblxuXG4gICAgLy8gZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAvLyAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgIC8vICAgICAgICAgdmFyIHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgLy8gICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgIC8vICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgIC8vICAgICAgICAgcmVuZGVyVXNlcnMoKVxuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgbGV0IGMgPSAwO1xuICAgIC8vICAgICAgICAgdmFyIGkgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKGMgPCA1MCkge1xuICAgIC8vICAgICAgICAgICAgICAgICBpZiAoISF3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmVuZGVyVXNlcnMoKVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgcmVuZGVyVXNlcnMoKVxuICAgIC8vICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGkpO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG4gICAgLy8gICAgICAgICAgICAgcmVuZGVyVXNlcnMoKVxuICAgIC8vICAgICAgICAgfSwgMjAwKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICAvLyBjaGVja1VzZXJBdXRoKCkgLy8g0LTQu9GPINC70L7QutCw0LvRjNC90L7Qs9C+INGC0LXRgdGC0YNcbiAgICAvLyAgICAgLy8gcmVuZGVyVXNlcnMoKSAvLyDQtNC70Y8g0LvQvtC60LDQu9GM0L3QvtCz0L4g0YLQtdGB0YLRg1xuICAgIC8vIH1cbiAgICAvL1xuXG5cbiAgICBmdW5jdGlvbiBwYXJ0aWNpcGF0ZShtb2RlKSB7XG4gICAgICAgIGlmICghdXNlcklkIHx8ICFtb2RlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7dXNlcmlkOiB1c2VySWQsIG1vZGV9O1xuICAgICAgICByZXF1ZXN0KCcvdXNlcicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgY29uc3QgY3NzID0gbW9kZU1hcFttb2RlXTtcbiAgICAgICAgICAgIHRvZ2dsZUJsb2NrcyhjaG9zZUJsb2NrLCBcImNob3NlSGlkZVwiLCByZXN1bHRCbG9jaywgXCJyZXN1bHRTaG93XCIsIGNzcywgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChgJHthcGlVUkx9L3RyYW5zbGF0ZXMvJHtsb2NhbGV9YCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcblxuICAgICAgICAgICAgICAgIHZhciBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvb3RiYWxsLWNoYWxsZW5nZVwiKSwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmshXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2FsZSA9PT0gJ2VuJykge1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnZW4nKTtcbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVLZXkoa2V5LCBkZWZhdWx0VmFsKSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGkxOG5EYXRhW2tleV0gfHwgZGVmYXVsdFZhbCB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXJJbmZvKHVzZXJJbmZvKSB7XG4gICAgICAgIGNvbnN0IGJldHMgPSB1c2VySW5mby5iZXRzLnNsaWNlKDAsIDIwKTtcbiAgICAgICAgLy8gbGV0IGJldHMgPSBbe2JldERhdGU6IG5ldyBEYXRlKCksIHN0YXR1czogJ3VuZGVmaW5lZCd9XVxuICAgICAgICBjb25zb2xlLmxvZyh1c2VySW5mbylcbiAgICAgICAgcmVmcmVzaEJldHMoYmV0cyk7XG4gICAgICAgIGRpc3BsYXlCZXRzSGlzdG9yeShiZXRzKTtcbiAgICAgICAgcmVmcmVzaExhc3RVcGRhdGVkRGF0ZSh1c2VySW5mbyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExhc3RVcGRhdGVkRGF0ZSh1c2VySW5mbykge1xuICAgICAgICBjb25zb2xlLmxvZyh1c2VySW5mbylcbiAgICAgICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRfX2xhc3QtdXBkJyk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFzdFVwZCcpO1xuICAgICAgICBpZiAodXNlckluZm8uZGF0ZSkge1xuICAgICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSBmb3JtYXREYXRlKHVzZXJJbmZvLmRhdGUpO1xuICAgICAgICAgICAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuICAgICAgICBjb25zdCBsb2NhbERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgY29uc3QgZGF5ID0gU3RyaW5nKGxvY2FsRGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gU3RyaW5nKGxvY2FsRGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgaG91cnMgPSBTdHJpbmcobG9jYWxEYXRlLmdldEhvdXJzKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBTdHJpbmcobG9jYWxEYXRlLmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgcmV0dXJuIGAke2RheX0uJHttb250aH0gJHtob3Vyc306JHttaW51dGVzfWA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaEJldHMoYmV0cykge1xuICAgICAgICBjb25zdCBkaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3VsdF9fYmV0cy1pdGVtJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRpdnNbaV07XG4gICAgICAgICAgICBjb25zdCBiZXQgPSBiZXRzW2ldO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd5b3UnKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnX2RvbmUnKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnX2ZhaWwnKTtcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSAnX2ZhaWwnO1xuICAgICAgICAgICAgaWYgKGJldC5zdGF0dXMgPT09ICd3aW4nKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzID0gJ19kb25lJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWJldC5zdGF0dXMgfHwgYmV0LnN0YXR1cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSAneW91JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChzdGF0dXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpc3BsYXlCZXRzSGlzdG9yeShiZXRzKSB7XG4gICAgICAgIC8vIHJldHVybjtcbiAgICAgICAgY29uc3Qgc3Bpbkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BpbnMtcm93Jyk7XG4gICAgICAgIGNvbnN0IG5vU3Bpbkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm8tc3BpbnMnKTtcblxuICAgICAgICBjb25zdCBub0JldHMgPSAhYmV0cyB8fCBiZXRzLmxlbmd0aCA9PT0gMDtcblxuICAgICAgICBpZiAobm9CZXRzICYmICFkZWJ1Zykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobm9CZXRzLCBkZWJ1ZylcbiAgICAgICAgICAgIHNwaW5JdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIG5vU3Bpbkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZGVidWcpe1xuICAgICAgICAgICAgYmV0cyA9IG1vY2tCZXRzXG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhiZXRzKVxuXG4gICAgICAgIHNwaW5JdGVtLmlubmVySFRNTCA9XG4gICAgICAgICAgICBgXG4gICAgICAgPGRpdiBjbGFzcz1cInNwaW5zLXJvdy1oZWFkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1kYXRlXCIgZGF0YS10cmFuc2xhdGU9XCJteUJldERhdGVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXByaXplXCIgZGF0YS10cmFuc2xhdGU9XCJteUJldFByaXplXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1zdGF0dXNcIiBkYXRhLXRyYW5zbGF0ZT1cIm15QmV0U3RhdHVzXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICBzcGluSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIG5vU3Bpbkl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG4gICAgICAgIGxldCB1cGQgPSAwO1xuICAgICAgICBiZXRzLmZvckVhY2goc3BpbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcGluRGF0ZSA9IG5ldyBEYXRlKHNwaW4uYmV0RGF0ZSk7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gc3BpbkRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCd1ay1VQScpLnNsaWNlKDAsIDUpO1xuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gcmVzb2x2ZVN0YXR1c1RyYW5zbGF0aW9uKHNwaW4uc3RhdHVzKTtcblxuICAgICAgICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwaW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgc3BpbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3BpbnMtcm93LWl0ZW0nKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGlzV2luID0gc3Bpbi5zdGF0dXMgPT09IFwid2luXCI7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzQ2xhc3MgPSBpc1dpbiA/ICdfZG9uZScgOiAnJztcblxuICAgICAgICAgICAgICAgIHNwaW5FbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb250ZW50LWRhdGVcIj4ke2Zvcm1hdHRlZERhdGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbnRlbnQtcHJpemVcIj5JRDoke3NwaW4uYmV0SWR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbnRlbnQtc3RhdHVzICR7c3RhdHVzQ2xhc3N9XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgc3Bpbkl0ZW0uYXBwZW5kQ2hpbGQoc3BpbkVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHVwZCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodXBkID09PSAwKSB7XG4gICAgICAgICAgICBzcGluSXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICBub1NwaW5JdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc29sdmVTdGF0dXNUcmFuc2xhdGlvbihzdGF0dXMpIHtcbiAgICAgICAgaWYgKCFzdGF0dXMgfHwgc3RhdHVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZUtleSgnYmV0VW5kZWZpbmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ3dpbicpIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGVLZXkoJ3dpbkJldCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0dXMgPT09ICdsb3NlJykge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZUtleSgnbG9zZUJldCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQsIGJhc2VDc3NDbGFzcykge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYmFzZUNzc0NsYXNzICsgbGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGJhc2VDc3NDbGFzcyArIGxvY2FsZSk7XG4gICAgfVxuXG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGluZm8gb2YgY2hvc2VDYXJkc0luZm8pIHtcbiAgICAgICAgICAgICAgICBpbmZvLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnVzZXJpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5tb2RlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJNb2RlID0gcmVzLm1vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJNb2RlXCIsIHVzZXJNb2RlKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjc3MgPSBtb2RlTWFwW3Jlcy5tb2RlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUJsb2NrcyhjaG9zZUJsb2NrLCBcImNob3NlSGlkZVwiLCByZXN1bHRCbG9jaywgXCJyZXN1bHRTaG93XCIsIGNzcywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVVzZXJJbmZvKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0Q2hvb3NlQ2FyZHMoY2hvc2VDYXJkcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGRpc3BsYXlVc2VyU3BpbnMoMCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGluZm8gb2YgY2hvc2VDYXJkc0luZm8pIHtcbiAgICAgICAgICAgICAgICBpbmZvLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IHBhcnRpY2lwYXRlQnRuIG9mIHBhcnRpY2lwYXRlQnRucykge1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJVc2VycygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXJcIilcbiAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUobW9ja1VzZXJzLCB1c2VySWQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXNlck1vZGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlck1vZGVcIilcblxuICAgICAgICByZXF1ZXN0KGAvdXNlcnMvYCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBkYXRhLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gdXNlcklkKTtcbiAgICAgICAgICAgIGNvbnN0IG1vZGUgPSB1c2VyID8gdXNlci5tb2RlIDogbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJzID0gZGF0YS5maWx0ZXIodXNlciA9PiB1c2VyLm1vZGUgPT09IG1vZGUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codXNlcnMpO1xuICAgICAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCB1c2VySWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIGN1cnJlbnRVc2VySWQpIHtcbiAgICAgICAgY29uc3QgeW91Um93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlT3RoZXInKTtcbiAgICAgICAgY29uc3QgdGFibGVCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlJyk7XG5cbiAgICAgICAgaWYgKCF1c2Vycz8ubGVuZ3RoIHx8IGN1cnJlbnRVc2VySWQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gICAgICAgIC8vINCe0YfQuNGJ0LXQvdC90Y9cbiAgICAgICAgeW91Um93LmlubmVySFRNTCA9ICcnO1xuICAgICAgICB0YWJsZUJvZHkuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgdXNlcnMuc29ydCgoYSwgYikgPT4gYi5iZXQgLSBhLmJldCk7XG5cbiAgICAgICAgdXNlcnMuZm9yRWFjaCgodXNlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ3VycmVudFVzZXIgPSB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZDtcbiAgICAgICAgICAgIGxldCBpc1RvcFVzZXIgPSBmYWxzZVxuXG4gICAgICAgICAgICBpZihpbmRleCA8PSA1ICYmIGlzQ3VycmVudFVzZXIpe1xuICAgICAgICAgICAgICAgaXNUb3BVc2VyID0gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCBpbmRleCArIDEsIGlzQ3VycmVudFVzZXIgJiYgIWlzVG9wVXNlciA/IHlvdVJvdyA6IHRhYmxlQm9keSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIHBsYWNlLCB0YXJnZXQpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpXG5cbiAgICAgICAgY29uc3QgdXNlcklkRGlzcGxheSA9IGlzQ3VycmVudFVzZXIgPyB1c2VyLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlci51c2VyaWQpO1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpXG5cbiAgICAgICAgaWYgKGlzQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIC8vINCh0YLQstC+0YDQtdC90L3RjyDQtdC70LXQvNC10L3RgtGDICd5b3UnINGC0LAg0LLRgdGC0LDQstC60LAg0LnQvtCz0L4g0L/RltGB0LvRjyDQtdC70LXQvNC10L3RgtGDINC3INC80ZbRgdGG0LXQvFxuICAgICAgICAgICAgY29uc3QgeW91VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgeW91VGV4dC5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93LWl0ZW0nLCAnX3lvdS10ZXh0Jyk7XG4gICAgICAgICAgICB5b3VUZXh0LnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCAneW91Jyk7XG5cbiAgICAgICAgICAgIHJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+JHtwbGFjZX08L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgLy8g0JTQvtC00LDRlNC80L4gXCJ5b3VcIiDRgtC10LrRgdGCINC/0ZbRgdC70Y8g0LzRltGB0YbRj1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHlvdVRleHQpO1xuXG4gICAgICAgICAgICAvLyDQn9C+0YLRltC8INC00L7QtNCw0ZTQvNC+IHVzZXJJZCDRgtCwINGB0YLQsNCy0LrRg1xuICAgICAgICAgICAgY29uc3QgdXNlcklkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1c2VySWREaXYuY2xhc3NMaXN0LmFkZCgndGFibGVfX3Jvdy1pdGVtJyk7XG4gICAgICAgICAgICB1c2VySWREaXYudGV4dENvbnRlbnQgPSB1c2VySWREaXNwbGF5O1xuXG4gICAgICAgICAgICBjb25zdCBiZXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJldERpdi5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93LWl0ZW0nKTtcbiAgICAgICAgICAgIGJldERpdi50ZXh0Q29udGVudCA9IHVzZXIud2luQ291bnQ7XG5cbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh1c2VySWREaXYpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGJldERpdik7XG5cbiAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdfeW91Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyb3cpXG4gICAgICAgICAgICByb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPiR7cGxhY2V9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+JHt1c2VySWREaXNwbGF5fTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPiR7dXNlci53aW5Db3VudH08L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvdylcblxuXG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBtYXNrVXNlcklkKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gXCIqKlwiICsgdXNlcklkLnRvU3RyaW5nKCkuc2xpY2UoMik7XG4gICAgfVxuXG5cbiAgICBsb2FkVHJhbnNsYXRpb25zKClcbiAgICAgICAgLnRoZW4oaW5pdCk7XG5cbiAgICBsZXQgaW5pdGVkID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gaW5pdENob29zZUNhcmRzKGNhcmRzKXtcbiAgICAgICAgaWYgKGluaXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FyZHMuZm9yRWFjaChjYXJkID0+e1xuICAgICAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImluZm8taWNvblwiKSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZmZpY3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRpZmZpY3VsdHNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJkLmNsYXNzTGlzdC5jb250YWlucyhpdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kZSA9IG1vZGVNYXBbaXRlbV07XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZShtb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyVXNlcnMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgaW5pdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRQb3B1cCh3cmFwLCBwb3B1cE5hbWUsIGJ0bnMsIHBvcHVwSXRlbXMpe1xuICAgICAgICBsZXQgcG9wdXAgPSB3cmFwLnF1ZXJ5U2VsZWN0b3IoYC4ke3BvcHVwTmFtZX1gKVxuXG4gICAgICAgIHdyYXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgIGUudGFyZ2V0ID09PSB3cmFwID8gY2xvc2VQb3B1cCgpIDogbnVsbFxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGNsb3NlUG9wdXAgPSAoKSA9PntcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJfYWN0aXZlXCIpXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgICAgIHdyYXAuY2xhc3NMaXN0LmFkZChcIl9vcGFjaXR5XCIpXG4gICAgICAgIH1cblxuICAgICAgICBidG5zLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgICAgIGlmKGJ0bi5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKHBvcHVwTmFtZSkpe1xuICAgICAgICAgICAgICAgIGJ0bi5wYXJlbnROb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0ID09PSBidG4pe1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwSXRlbXMuZm9yRWFjaChpdGVtID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiX2FjdGl2ZVwiKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiX2FjdGl2ZVwiKVxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICB3cmFwLmNsYXNzTGlzdC5yZW1vdmUoXCJfb3BhY2l0eVwiKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgbGV0IGNsb3NlQnRuID0gcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fY2xvc2VcIilcbiAgICAgICAgICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlUG9wdXAoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2V0UG9wdXAocG9wdXBzV3JhcCwgXCJfZWFzeVwiLCBzaG93UG9wdXBCdG5zLCBwb3B1cEl0ZW1zKVxuICAgIHNldFBvcHVwKHBvcHVwc1dyYXAsIFwiX21lZGl1bVwiLCBzaG93UG9wdXBCdG5zLCBwb3B1cEl0ZW1zKVxuICAgIHNldFBvcHVwKHBvcHVwc1dyYXAsIFwiX2hpZ2h0XCIsIHNob3dQb3B1cEJ0bnMsIHBvcHVwSXRlbXMpXG4gICAgc2V0UG9wdXAocG9wdXBzV3JhcCwgXCJfbm90aWZ5XCIsIHNob3dQb3B1cEJ0bnMsIHBvcHVwSXRlbXMpXG5cbiAgICBmdW5jdGlvbiBzdGFydENvdW50ZG93bihzZWxlY3RvciwgZW5kRGF0ZSkge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7c2VsZWN0b3J9IC53ZWxjb21lX190aW1lci1pdGVtLW51bWApO1xuICAgICAgICBpZiAoZWxlbWVudHMubGVuZ3RoICE9PSA0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHNlbGVjdG9yIScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0RGF0ZSA9IG5ldyBEYXRlKGVuZERhdGUpLmdldFRpbWUoKTtcblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVUaW1lcigpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY29uc3QgdGltZUxlZnQgPSB0YXJnZXREYXRlIC0gbm93O1xuXG4gICAgICAgICAgICBpZiAodGltZUxlZnQgPD0gMCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZXJWYWx1ZXMoWzAsIDAsIDAsIDBdKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKHRpbWVMZWZ0IC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcigodGltZUxlZnQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigodGltZUxlZnQgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAlICgxMDAwICogNjApKSAvIDEwMDApO1xuXG4gICAgICAgICAgICBzZXRUaW1lclZhbHVlcyhbZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHNdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNldFRpbWVyVmFsdWVzKHZhbHVlcykge1xuICAgICAgICAgICAgdmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2luZGV4XS50ZXh0Q29udGVudCA9IHZhbHVlIDwgMTAgPyBgMCR7dmFsdWV9YCA6IHZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVUaW1lcigpO1xuICAgICAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwodXBkYXRlVGltZXIsIDEwMDApO1xuICAgIH1cblxuICAgIHN0YXJ0Q291bnRkb3duKCcud2VsY29tZV9fdGltZXInLCAnMjAyNS0wNS0xMVQyMzo1OTo1OScpO1xuXG4gICAgZnVuY3Rpb24gbW9uaXRvclZpc2liaWxpdHkoc2VsZWN0b3IsIGFuaW1hdGlvbiwgZGVsYXkpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRWxlbWVudCBub3QgZm91bmQhJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGFuaW1hdGlvbilcbiAgICAgICAgICAgICAgICAgICAgfSwgZGVsYXkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgfVxuXG5cbiAgICBtb25pdG9yVmlzaWJpbGl0eSgnLm5vdGlmeV9fcGVycycsIFwic2hvd1pldXNcIiwgMCk7XG4gICAgbW9uaXRvclZpc2liaWxpdHkoJy5ub3RpZnlfX3BlcnMtYnVibGUnLCBcInNob3daZXVzQnVibGVcIiwgMTIwMCk7XG4gICAgbW9uaXRvclZpc2liaWxpdHkoJy5jaG9zZV9fcGVycy1idWJsZScsIFwic2hvd1pldXNCdWJsZVwiLCAwKTtcbiAgICBtb25pdG9yVmlzaWJpbGl0eSgnLmNob3NlX19jYXJkLl9lYXN5JywgXCJzaG93Q2FyZFwiLCA0MDApO1xuICAgIG1vbml0b3JWaXNpYmlsaXR5KCcuY2hvc2VfX2NhcmQuX21lZGl1bScsIFwic2hvd0NhcmRcIiwgODAwKTtcbiAgICBtb25pdG9yVmlzaWJpbGl0eSgnLmNob3NlX19jYXJkLl9oaWdodCcsIFwic2hvd0NhcmRcIiwgMTIwMCk7XG5cblxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlQmxvY2tzKGhpZGVCbG9jaywgaGlkZUNsYXNzLCBzaG93QmxvY2ssIHNob3dDbGFzcywgc3RhdGUsIGFuaW1hdGUpe1xuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKHN0YXRlLCBsb2NhbGUpXG4gICAgICAgIGhpZGVCbG9jay5jbGFzc0xpc3QuYWRkKGhpZGVDbGFzcylcbiAgICAgICAgbGV0IGRyb3BzID0gc2hvd0Jsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJvcFwiKVxuICAgICAgICBkcm9wcy5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICBkaWZmaWN1bHRzLmZvckVhY2goc3RhdGUgPT57XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKHN0YXRlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgZHJvcHNbMF0uY2xhc3NMaXN0LmFkZChzdGF0ZSlcbiAgICAgICAgaWYoYW5pbWF0ZSl7XG4gICAgICAgICAgICBoaWRlQmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PntcblxuICAgICAgICAgICAgICAgIHNob3dCbG9jay5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgICAgICAgICBzaG93QmxvY2suc3R5bGUuaGVpZ2h0ID0gaGlkZUJsb2NrLmNsaWVudEhlaWdodFxuICAgICAgICAgICAgICAgIGhpZGVCbG9jay5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHNob3dSZXN1bHRCbG9jayhzaG93QmxvY2ssIHNob3dDbGFzcylcbiAgICAgICAgICAgICAgICB9LCA1MClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2hvd0Jsb2NrLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAgICAgc2hvd0Jsb2NrLnN0eWxlLmhlaWdodCA9IGhpZGVCbG9jay5jbGllbnRIZWlnaHRcbiAgICAgICAgICAgIGhpZGVCbG9jay5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgc2hvd1Jlc3VsdEJsb2NrKHNob3dCbG9jaywgc2hvd0NsYXNzKVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93UmVzdWx0QmxvY2soc2hvd0Jsb2NrLCBzaG93Q2xhc3Mpe1xuICAgICAgICBzaG93QmxvY2suY2xhc3NMaXN0LmFkZChzaG93Q2xhc3MpXG4gICAgICAgIHNob3dCbG9jay5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIlxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgbGV0IGl0ZW1zID0gc2hvd0Jsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVzdWx0X19iZXRzLWl0ZW1cIilcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+e1xuICAgICAgICAgICAgICAgIGlmKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwieW91XCIpKXtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB5b3UgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0X19iZXRzLXlvdVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgeW91LmNsYXNzTGlzdC5hZGQoJ3Nob3dZb3UnKVxuICAgICAgICAgICAgICAgICAgICB9LCAyNzAwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICBsZXQgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVzdWx0X19idG5cIilcbiAgICAgICAgICAgICAgICAgICAgYnRucy5mb3JFYWNoKGJ0biA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwic2hvd0J0blwiKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sIDI5MDApXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICB9LCAyNTAgKiBpdGVtcy5sZW5ndGggLSBpICogMjUwKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvQ2hvc2VcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNob3NlXCIpO1xuICAgICAgICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IHRhcmdldEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0IC0gMjtcblxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgdG9wOiB0YXJnZXRQb3NpdGlvbixcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvL3Rlc3RcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpZ2h0LWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGRpZmZpY3VsdHMuZm9yRWFjaChjc3MgPT57XG4gICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKGNzcylcbiAgICAgICAgfSlcblxuICAgICAgICB0b2dnbGVCbG9ja3MoY2hvc2VCbG9jaywgXCJjaG9zZUhpZGVcIiwgcmVzdWx0QmxvY2ssIFwicmVzdWx0U2hvd1wiLCBcIl9oaWdodFwiLCB0cnVlKTtcbiAgICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWFzeS1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBkaWZmaWN1bHRzLmZvckVhY2goY3NzID0+e1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShjc3MpXG4gICAgICAgIH0pXG4gICAgICAgIHRvZ2dsZUJsb2NrcyhjaG9zZUJsb2NrLCBcImNob3NlSGlkZVwiLCByZXN1bHRCbG9jaywgXCJyZXN1bHRTaG93XCIsIFwiX2Vhc3lcIiwgdHJ1ZSk7XG4gICAgfSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lZGl1bS1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBkaWZmaWN1bHRzLmZvckVhY2goY3NzID0+e1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShjc3MpXG4gICAgICAgIH0pXG4gICAgICAgIHRvZ2dsZUJsb2NrcyhjaG9zZUJsb2NrLCBcImNob3NlSGlkZVwiLCByZXN1bHRCbG9jaywgXCJyZXN1bHRTaG93XCIsIFwiX21lZGl1bVwiLCB0cnVlKTtcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1dGgtYnRuJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBoYXNJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xuICAgICAgICBoYXNJZCA/IHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJJZCcpIDogc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndXNlcklkJywgJzEwMDMwMDI2OCcpO1xuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG5nLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50TG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKTtcblxuICAgICAgICBpZiAoY3VycmVudExvY2FsZSA9PT0gXCJ1a1wiKSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLCBcInVrXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhcmstYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiKVxuICAgIH0pXG5cbn0pKCk7XG4iXX0=
