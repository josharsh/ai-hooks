"use strict";

function _typeof(o) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              "function" == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? "symbol"
              : typeof o;
          }),
    _typeof(o)
  );
}
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;
var _express = _interopRequireWildcard(require("express"));
var _axios = require("axios");
function _getRequireWildcardCache(e) {
  if ("function" != typeof WeakMap) return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(e) {
    return e ? t : r;
  })(e);
}
function _interopRequireWildcard(e, r) {
  if (!r && e && e.__esModule) return e;
  if (null === e || ("object" != _typeof(e) && "function" != typeof e)) return { default: e };
  var t = _getRequireWildcardCache(r);
  if (t && t.has(e)) return t.get(e);
  var n = { __proto__: null },
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e)
    if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : (n[u] = e[u]);
    }
  return (n["default"] = e), t && t.set(e, n), n;
}
function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
    function _regeneratorRuntime() {
      return e;
    };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o =
      Object.defineProperty ||
      function (t, e, r) {
        t[e] = r.value;
      },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return (
      Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }),
      t[e]
    );
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return (t[e] = r);
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return { type: "normal", arg: t.call(e, r) };
    } catch (t) {
      return { type: "throw", arg: t };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p));
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await")
          ? e.resolve(h.__await).then(
              function (t) {
                invoke("next", t, i, a);
              },
              function (t) {
                invoke("throw", t, i, a);
              }
            )
          : e.resolve(h).then(
              function (t) {
                (u.value = t), i(u);
              },
              function (t) {
                return invoke("throw", t, i, a);
              }
            );
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return (r = r
          ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
          : callInvokeWithMethodAndArg());
      },
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return { value: t, done: !0 };
      }
      for (n.method = i, n.arg = a; ; ) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;
        else if ("throw" === n.method) {
          if (o === h) throw ((o = s), n.arg);
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (((o = n.done ? s : l), p.arg === y)) continue;
          return { value: p.arg, done: n.done };
        }
        "throw" === p.type && ((o = s), (n.method = "throw"), (n.arg = p.arg));
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t)
      return (
        (r.delegate = null),
        ("throw" === n &&
          e.iterator["return"] &&
          ((r.method = "return"), (r.arg = t), maybeInvokeDelegate(e, r), "throw" === r.method)) ||
          ("return" !== n &&
            ((r.method = "throw"),
            (r.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
        y
      );
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y;
    var a = i.arg;
    return a
      ? a.done
        ? ((r[e.resultName] = a.value),
          (r.next = e.nextLoc),
          "return" !== r.method && ((r.method = "next"), (r.arg = t)),
          (r.delegate = null),
          y)
        : a
      : ((r.method = "throw"),
        (r.arg = new TypeError("iterator result is not an object")),
        (r.delegate = null),
        y);
  }
  function pushTryEntry(t) {
    var e = { tryLoc: t[0] };
    1 in t && (e.catchLoc = t[1]),
      2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
      this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    (e.type = "normal"), delete e.arg, (t.completion = e);
  }
  function Context(t) {
    (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length; )
              if (n.call(e, o)) return (next.value = e[o]), (next.done = !1), next;
            return (next.value = t), (next.done = !0), next;
          };
        return (i.next = i);
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return (
    (GeneratorFunction.prototype = GeneratorFunctionPrototype),
    o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }),
    o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }),
    (GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction")),
    (e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }),
    (e.mark = function (t) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
          : ((t.__proto__ = GeneratorFunctionPrototype), define(t, u, "GeneratorFunction")),
        (t.prototype = Object.create(g)),
        t
      );
    }),
    (e.awrap = function (t) {
      return { __await: t };
    }),
    defineIteratorMethods(AsyncIterator.prototype),
    define(AsyncIterator.prototype, c, function () {
      return this;
    }),
    (e.AsyncIterator = AsyncIterator),
    (e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r)
        ? a
        : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
    }),
    defineIteratorMethods(g),
    define(g, u, "Generator"),
    define(g, a, function () {
      return this;
    }),
    define(g, "toString", function () {
      return "[object Generator]";
    }),
    (e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return (
        r.reverse(),
        function next() {
          for (; r.length; ) {
            var t = r.pop();
            if (t in e) return (next.value = t), (next.done = !1), next;
          }
          return (next.done = !0), next;
        }
      );
    }),
    (e.values = values),
    (Context.prototype = {
      constructor: Context,
      reset: function reset(e) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = t),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = t),
          this.tryEntries.forEach(resetTryEntry),
          !e)
        )
          for (var r in this)
            "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function stop() {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return (
            (a.type = "throw"),
            (a.arg = e),
            (r.next = n),
            o && ((r.method = "next"), (r.arg = t)),
            !!o
          );
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw new Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i &&
          ("break" === t || "continue" === t) &&
          i.tryLoc <= e &&
          e <= i.finallyLoc &&
          (i = null);
        var a = i ? i.completion : {};
        return (
          (a.type = t),
          (a.arg = e),
          i ? ((this.method = "next"), (this.next = i.finallyLoc), y) : this.complete(a)
        );
      },
      complete: function complete(t, e) {
        if ("throw" === t.type) throw t.arg;
        return (
          "break" === t.type || "continue" === t.type
            ? (this.next = t.arg)
            : "return" === t.type
              ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
              : "normal" === t.type && e && (this.next = e),
          y
        );
      },
      finish: function finish(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t)
            return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function _catch(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(e, r, n) {
        return (
          (this.delegate = { iterator: values(e), resultName: r, nextLoc: n }),
          "next" === this.method && (this.arg = t),
          y
        );
      },
    }),
    e
  );
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
var app = (0, _express["default"])();
app.use((0, _express.json)());
var startServer = function startServer(apiKey) {
  var port = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7731;
  if (!apiKey) {
    throw new Error("OpenAI API key is required to start the server");
  }
  console.log("Inside Server.js");
  app.post(
    "/generate-image",
    /*#__PURE__*/ (function () {
      var _ref = _asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(req, res) {
          var response;
          return _regeneratorRuntime().wrap(
            function _callee$(_context) {
              while (1)
                switch ((_context.prev = _context.next)) {
                  case 0:
                    console.log("Inside Generate Image API");
                    _context.prev = 1;
                    _context.next = 4;
                    return (0, _axios.post)(
                      "https://api.openai.com/v1/images/generate",
                      {
                        model: "dall-e-3",
                        prompt: req.body.prompt,
                        size: "1024x1024",
                        quality: "standard",
                        n: 1,
                      },
                      {
                        headers: {
                          Authorization: "Bearer ".concat(apiKey),
                        },
                      }
                    );
                  case 4:
                    response = _context.sent;
                    res.json({
                      imageUrl: response.data.data[0].url,
                    });
                    _context.next = 11;
                    break;
                  case 8:
                    _context.prev = 8;
                    _context.t0 = _context["catch"](1);
                    res.status(500).send("Error in image generation");
                  case 11:
                  case "end":
                    return _context.stop();
                }
            },
            _callee,
            null,
            [[1, 8]]
          );
        })
      );
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    })()
  );
  app.listen(port, function () {
    console.log("Server running on port ".concat(port));
  });
};
var _default = (exports["default"] = startServer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXhwcmVzcyIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9heGlvcyIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJvIiwidmFsdWUiLCJTeW1ib2wiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiaW5mbyIsImVycm9yIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJhcHAiLCJleHByZXNzIiwidXNlIiwianNvbiIsInN0YXJ0U2VydmVyIiwiYXBpS2V5IiwicG9ydCIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwiX3JlZiIsIl9jYWxsZWUiLCJyZXEiLCJyZXMiLCJyZXNwb25zZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJtb2RlbCIsInByb21wdCIsImJvZHkiLCJzaXplIiwicXVhbGl0eSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY29uY2F0IiwiaW1hZ2VVcmwiLCJkYXRhIiwidXJsIiwidDAiLCJzdGF0dXMiLCJzZW5kIiwiX3giLCJfeDIiLCJsaXN0ZW4iLCJfZGVmYXVsdCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi9zcmMvc2VydmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzLCB7IGpzb24gfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHsgcG9zdCB9IGZyb20gXCJheGlvc1wiO1xuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGpzb24oKSk7XG5cbmNvbnN0IHN0YXJ0U2VydmVyID0gKGFwaUtleSwgcG9ydCA9IDc3MzEpID0+IHtcbiAgaWYgKCFhcGlLZXkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJPcGVuQUkgQVBJIGtleSBpcyByZXF1aXJlZCB0byBzdGFydCB0aGUgc2VydmVyXCIpO1xuICB9XG5cbiAgY29uc29sZS5sb2coXCJJbnNpZGUgU2VydmVyLmpzXCIpO1xuICBhcHAucG9zdChcIi9nZW5lcmF0ZS1pbWFnZVwiLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkluc2lkZSBHZW5lcmF0ZSBJbWFnZSBBUElcIik7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcG9zdChcbiAgICAgICAgXCJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2ltYWdlcy9nZW5lcmF0ZVwiLFxuICAgICAgICB7XG4gICAgICAgICAgbW9kZWw6IFwiZGFsbC1lLTNcIixcbiAgICAgICAgICBwcm9tcHQ6IHJlcS5ib2R5LnByb21wdCxcbiAgICAgICAgICBzaXplOiBcIjEwMjR4MTAyNFwiLFxuICAgICAgICAgIHF1YWxpdHk6IFwic3RhbmRhcmRcIixcbiAgICAgICAgICBuOiAxLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FwaUtleX1gLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHJlcy5qc29uKHsgaW1hZ2VVcmw6IHJlc3BvbnNlLmRhdGEuZGF0YVswXS51cmwgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKFwiRXJyb3IgaW4gaW1hZ2UgZ2VuZXJhdGlvblwiKTtcbiAgICB9XG4gIH0pO1xuXG4gIGFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgcnVubmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdGFydFNlcnZlcjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUFBLFFBQUEsR0FBQUMsdUJBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtBQUE2QixTQUFBRSx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQUosd0JBQUFJLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxJQUFBSCxNQUFBLENBQUFJLFNBQUEsQ0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFqQixDQUFBLEVBQUFjLENBQUEsU0FBQUksQ0FBQSxHQUFBUixDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFJLENBQUEsS0FBQUEsQ0FBQSxD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
