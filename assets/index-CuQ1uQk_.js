(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function mm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Md = { exports: {} },
  ys = {},
  Nd = { exports: {} },
  V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kr = Symbol.for("react.element"),
  vm = Symbol.for("react.portal"),
  gm = Symbol.for("react.fragment"),
  ym = Symbol.for("react.strict_mode"),
  wm = Symbol.for("react.profiler"),
  xm = Symbol.for("react.provider"),
  Sm = Symbol.for("react.context"),
  Cm = Symbol.for("react.forward_ref"),
  Tm = Symbol.for("react.suspense"),
  Pm = Symbol.for("react.memo"),
  Em = Symbol.for("react.lazy"),
  ou = Symbol.iterator;
function km(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ou && e[ou]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Rd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  _d = Object.assign,
  Od = {};
function Qn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Od),
    (this.updater = n || Rd);
}
Qn.prototype.isReactComponent = {};
Qn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Qn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ld() {}
Ld.prototype = Qn.prototype;
function Dl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Od),
    (this.updater = n || Rd);
}
var zl = (Dl.prototype = new Ld());
zl.constructor = Dl;
_d(zl, Qn.prototype);
zl.isPureReactComponent = !0;
var lu = Array.isArray,
  Ad = Object.prototype.hasOwnProperty,
  Fl = { current: null },
  Vd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Id(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Ad.call(t, r) && !Vd.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: Kr,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Fl.current,
  };
}
function jm(e, t) {
  return {
    $$typeof: Kr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Bl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Kr;
}
function Mm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var au = /\/+/g;
function bs(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Mm("" + e.key)
    : t.toString(36);
}
function Ti(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Kr:
          case vm:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + bs(o, 0) : r),
      lu(i)
        ? ((n = ""),
          e != null && (n = e.replace(au, "$&/") + "/"),
          Ti(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Bl(i) &&
            (i = jm(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(au, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), lu(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = r + bs(s, l);
      o += Ti(s, t, n, a, i);
    }
  else if (((a = km(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(s = e.next()).done; )
      (s = s.value), (a = r + bs(s, l++)), (o += Ti(s, t, n, a, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function ri(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ti(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function Nm(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var we = { current: null },
  Pi = { transition: null },
  Rm = {
    ReactCurrentDispatcher: we,
    ReactCurrentBatchConfig: Pi,
    ReactCurrentOwner: Fl,
  };
V.Children = {
  map: ri,
  forEach: function (e, t, n) {
    ri(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ri(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ri(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Bl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
V.Component = Qn;
V.Fragment = gm;
V.Profiler = wm;
V.PureComponent = Dl;
V.StrictMode = ym;
V.Suspense = Tm;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rm;
V.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = _d({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = Fl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Ad.call(t, a) &&
        !Vd.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Kr, type: e.type, key: i, ref: s, props: r, _owner: o };
};
V.createContext = function (e) {
  return (
    (e = {
      $$typeof: Sm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: xm, _context: e }),
    (e.Consumer = e)
  );
};
V.createElement = Id;
V.createFactory = function (e) {
  var t = Id.bind(null, e);
  return (t.type = e), t;
};
V.createRef = function () {
  return { current: null };
};
V.forwardRef = function (e) {
  return { $$typeof: Cm, render: e };
};
V.isValidElement = Bl;
V.lazy = function (e) {
  return { $$typeof: Em, _payload: { _status: -1, _result: e }, _init: Nm };
};
V.memo = function (e, t) {
  return { $$typeof: Pm, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function (e) {
  var t = Pi.transition;
  Pi.transition = {};
  try {
    e();
  } finally {
    Pi.transition = t;
  }
};
V.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
V.useCallback = function (e, t) {
  return we.current.useCallback(e, t);
};
V.useContext = function (e) {
  return we.current.useContext(e);
};
V.useDebugValue = function () {};
V.useDeferredValue = function (e) {
  return we.current.useDeferredValue(e);
};
V.useEffect = function (e, t) {
  return we.current.useEffect(e, t);
};
V.useId = function () {
  return we.current.useId();
};
V.useImperativeHandle = function (e, t, n) {
  return we.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function (e, t) {
  return we.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function (e, t) {
  return we.current.useLayoutEffect(e, t);
};
V.useMemo = function (e, t) {
  return we.current.useMemo(e, t);
};
V.useReducer = function (e, t, n) {
  return we.current.useReducer(e, t, n);
};
V.useRef = function (e) {
  return we.current.useRef(e);
};
V.useState = function (e) {
  return we.current.useState(e);
};
V.useSyncExternalStore = function (e, t, n) {
  return we.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function () {
  return we.current.useTransition();
};
V.version = "18.2.0";
Nd.exports = V;
var _ = Nd.exports;
const jt = mm(_);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _m = _,
  Om = Symbol.for("react.element"),
  Lm = Symbol.for("react.fragment"),
  Am = Object.prototype.hasOwnProperty,
  Vm = _m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Im = { key: !0, ref: !0, __self: !0, __source: !0 };
function Dd(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Am.call(t, r) && !Im.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Om,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Vm.current,
  };
}
ys.Fragment = Lm;
ys.jsx = Dd;
ys.jsxs = Dd;
Md.exports = ys;
var v = Md.exports,
  jo = {},
  zd = { exports: {} },
  Le = {},
  Fd = { exports: {} },
  Bd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, O) {
    var L = j.length;
    j.push(O);
    e: for (; 0 < L; ) {
      var Q = (L - 1) >>> 1,
        te = j[Q];
      if (0 < i(te, O)) (j[Q] = O), (j[L] = te), (L = Q);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var O = j[0],
      L = j.pop();
    if (L !== O) {
      j[0] = L;
      e: for (var Q = 0, te = j.length, ti = te >>> 1; Q < ti; ) {
        var Qt = 2 * (Q + 1) - 1,
          Bs = j[Qt],
          Yt = Qt + 1,
          ni = j[Yt];
        if (0 > i(Bs, L))
          Yt < te && 0 > i(ni, Bs)
            ? ((j[Q] = ni), (j[Yt] = L), (Q = Yt))
            : ((j[Q] = Bs), (j[Qt] = L), (Q = Qt));
        else if (Yt < te && 0 > i(ni, L)) (j[Q] = ni), (j[Yt] = L), (Q = Yt);
        else break e;
      }
    }
    return O;
  }
  function i(j, O) {
    var L = j.sortIndex - O.sortIndex;
    return L !== 0 ? L : j.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    g = !1,
    y = !1,
    w = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(j) {
    for (var O = n(u); O !== null; ) {
      if (O.callback === null) r(u);
      else if (O.startTime <= j)
        r(u), (O.sortIndex = O.expirationTime), t(a, O);
      else break;
      O = n(u);
    }
  }
  function x(j) {
    if (((w = !1), p(j), !y))
      if (n(a) !== null) (y = !0), je(S);
      else {
        var O = n(u);
        O !== null && Gt(x, O.startTime - j);
      }
  }
  function S(j, O) {
    (y = !1), w && ((w = !1), m(T), (T = -1)), (g = !0);
    var L = f;
    try {
      for (
        p(O), d = n(a);
        d !== null && (!(d.expirationTime > O) || (j && !b()));

      ) {
        var Q = d.callback;
        if (typeof Q == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var te = Q(d.expirationTime <= O);
          (O = e.unstable_now()),
            typeof te == "function" ? (d.callback = te) : d === n(a) && r(a),
            p(O);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var ti = !0;
      else {
        var Qt = n(u);
        Qt !== null && Gt(x, Qt.startTime - O), (ti = !1);
      }
      return ti;
    } finally {
      (d = null), (f = L), (g = !1);
    }
  }
  var P = !1,
    k = null,
    T = -1,
    A = 5,
    N = -1;
  function b() {
    return !(e.unstable_now() - N < A);
  }
  function Xe() {
    if (k !== null) {
      var j = e.unstable_now();
      N = j;
      var O = !0;
      try {
        O = k(!0, j);
      } finally {
        O ? Ze() : ((P = !1), (k = null));
      }
    } else P = !1;
  }
  var Ze;
  if (typeof h == "function")
    Ze = function () {
      h(Xe);
    };
  else if (typeof MessageChannel < "u") {
    var ke = new MessageChannel(),
      Z = ke.port2;
    (ke.port1.onmessage = Xe),
      (Ze = function () {
        Z.postMessage(null);
      });
  } else
    Ze = function () {
      E(Xe, 0);
    };
  function je(j) {
    (k = j), P || ((P = !0), Ze());
  }
  function Gt(j, O) {
    T = E(function () {
      j(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), je(S));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (A = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (j) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = f;
      }
      var L = f;
      f = O;
      try {
        return j();
      } finally {
        f = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, O) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var L = f;
      f = j;
      try {
        return O();
      } finally {
        f = L;
      }
    }),
    (e.unstable_scheduleCallback = function (j, O, L) {
      var Q = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? Q + L : Q))
          : (L = Q),
        j)
      ) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return (
        (te = L + te),
        (j = {
          id: c++,
          callback: O,
          priorityLevel: j,
          startTime: L,
          expirationTime: te,
          sortIndex: -1,
        }),
        L > Q
          ? ((j.sortIndex = L),
            t(u, j),
            n(a) === null &&
              j === n(u) &&
              (w ? (m(T), (T = -1)) : (w = !0), Gt(x, L - Q)))
          : ((j.sortIndex = te), t(a, j), y || g || ((y = !0), je(S))),
        j
      );
    }),
    (e.unstable_shouldYield = b),
    (e.unstable_wrapCallback = function (j) {
      var O = f;
      return function () {
        var L = f;
        f = O;
        try {
          return j.apply(this, arguments);
        } finally {
          f = L;
        }
      };
    });
})(Bd);
Fd.exports = Bd;
var Dm = Fd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bd = _,
  _e = Dm;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ud = new Set(),
  Er = {};
function pn(e, t) {
  Bn(e, t), Bn(e + "Capture", t);
}
function Bn(e, t) {
  for (Er[e] = t, e = 0; e < t.length; e++) Ud.add(t[e]);
}
var ht = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Mo = Object.prototype.hasOwnProperty,
  zm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  uu = {},
  cu = {};
function Fm(e) {
  return Mo.call(cu, e)
    ? !0
    : Mo.call(uu, e)
    ? !1
    : zm.test(e)
    ? (cu[e] = !0)
    : ((uu[e] = !0), !1);
}
function Bm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function bm(e, t, n, r) {
  if (t === null || typeof t > "u" || Bm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function xe(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new xe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ae[t] = new xe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ae[e] = new xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ae[e] = new xe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ae[e] = new xe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ae[e] = new xe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ae[e] = new xe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ae[e] = new xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var bl = /[\-:]([a-z])/g;
function Ul(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(bl, Ul);
    ae[t] = new xe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(bl, Ul);
    ae[t] = new xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(bl, Ul);
  ae[t] = new xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ae[e] = new xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ae.xlinkHref = new xe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ae[e] = new xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function $l(e, t, n, r) {
  var i = ae.hasOwnProperty(t) ? ae[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (bm(t, n, i, r) && (n = null),
    r || i === null
      ? Fm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var gt = bd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ii = Symbol.for("react.element"),
  yn = Symbol.for("react.portal"),
  wn = Symbol.for("react.fragment"),
  Wl = Symbol.for("react.strict_mode"),
  No = Symbol.for("react.profiler"),
  $d = Symbol.for("react.provider"),
  Wd = Symbol.for("react.context"),
  Hl = Symbol.for("react.forward_ref"),
  Ro = Symbol.for("react.suspense"),
  _o = Symbol.for("react.suspense_list"),
  Kl = Symbol.for("react.memo"),
  xt = Symbol.for("react.lazy"),
  Hd = Symbol.for("react.offscreen"),
  du = Symbol.iterator;
function qn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (du && e[du]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var K = Object.assign,
  Us;
function lr(e) {
  if (Us === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Us = (t && t[1]) || "";
    }
  return (
    `
` +
    Us +
    e
  );
}
var $s = !1;
function Ws(e, t) {
  if (!e || $s) return "";
  $s = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          l = s.length - 1;
        1 <= o && 0 <= l && i[o] !== s[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== s[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== s[l])) {
                var a =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    ($s = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? lr(e) : "";
}
function Um(e) {
  switch (e.tag) {
    case 5:
      return lr(e.type);
    case 16:
      return lr("Lazy");
    case 13:
      return lr("Suspense");
    case 19:
      return lr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ws(e.type, !1)), e;
    case 11:
      return (e = Ws(e.type.render, !1)), e;
    case 1:
      return (e = Ws(e.type, !0)), e;
    default:
      return "";
  }
}
function Oo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case wn:
      return "Fragment";
    case yn:
      return "Portal";
    case No:
      return "Profiler";
    case Wl:
      return "StrictMode";
    case Ro:
      return "Suspense";
    case _o:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Wd:
        return (e.displayName || "Context") + ".Consumer";
      case $d:
        return (e._context.displayName || "Context") + ".Provider";
      case Hl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Kl:
        return (
          (t = e.displayName || null), t !== null ? t : Oo(e.type) || "Memo"
        );
      case xt:
        (t = e._payload), (e = e._init);
        try {
          return Oo(e(t));
        } catch {}
    }
  return null;
}
function $m(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Oo(t);
    case 8:
      return t === Wl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function zt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Kd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Wm(e) {
  var t = Kd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function si(e) {
  e._valueTracker || (e._valueTracker = Wm(e));
}
function Gd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Kd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function zi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Lo(e, t) {
  var n = t.checked;
  return K({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function fu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = zt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Qd(e, t) {
  (t = t.checked), t != null && $l(e, "checked", t, !1);
}
function Ao(e, t) {
  Qd(e, t);
  var n = zt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Vo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Vo(e, t.type, zt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function hu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Vo(e, t, n) {
  (t !== "number" || zi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ar = Array.isArray;
function An(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + zt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Io(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return K({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function pu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (ar(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: zt(n) };
}
function Yd(e, t) {
  var n = zt(t.value),
    r = zt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function mu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Xd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Do(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Xd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var oi,
  Zd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        oi = oi || document.createElement("div"),
          oi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = oi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function kr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var fr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Hm = ["Webkit", "ms", "Moz", "O"];
Object.keys(fr).forEach(function (e) {
  Hm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (fr[t] = fr[e]);
  });
});
function qd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (fr.hasOwnProperty(e) && fr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Jd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = qd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Km = K(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function zo(e, t) {
  if (t) {
    if (Km[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function Fo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Bo = null;
function Gl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var bo = null,
  Vn = null,
  In = null;
function vu(e) {
  if ((e = Yr(e))) {
    if (typeof bo != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = Ts(t)), bo(e.stateNode, e.type, t));
  }
}
function ef(e) {
  Vn ? (In ? In.push(e) : (In = [e])) : (Vn = e);
}
function tf() {
  if (Vn) {
    var e = Vn,
      t = In;
    if (((In = Vn = null), vu(e), t)) for (e = 0; e < t.length; e++) vu(t[e]);
  }
}
function nf(e, t) {
  return e(t);
}
function rf() {}
var Hs = !1;
function sf(e, t, n) {
  if (Hs) return e(t, n);
  Hs = !0;
  try {
    return nf(e, t, n);
  } finally {
    (Hs = !1), (Vn !== null || In !== null) && (rf(), tf());
  }
}
function jr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ts(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var Uo = !1;
if (ht)
  try {
    var Jn = {};
    Object.defineProperty(Jn, "passive", {
      get: function () {
        Uo = !0;
      },
    }),
      window.addEventListener("test", Jn, Jn),
      window.removeEventListener("test", Jn, Jn);
  } catch {
    Uo = !1;
  }
function Gm(e, t, n, r, i, s, o, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var hr = !1,
  Fi = null,
  Bi = !1,
  $o = null,
  Qm = {
    onError: function (e) {
      (hr = !0), (Fi = e);
    },
  };
function Ym(e, t, n, r, i, s, o, l, a) {
  (hr = !1), (Fi = null), Gm.apply(Qm, arguments);
}
function Xm(e, t, n, r, i, s, o, l, a) {
  if ((Ym.apply(this, arguments), hr)) {
    if (hr) {
      var u = Fi;
      (hr = !1), (Fi = null);
    } else throw Error(C(198));
    Bi || ((Bi = !0), ($o = u));
  }
}
function mn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function of(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function gu(e) {
  if (mn(e) !== e) throw Error(C(188));
}
function Zm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = mn(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return gu(i), e;
        if (s === r) return gu(i), t;
        s = s.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (l === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (l === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function lf(e) {
  return (e = Zm(e)), e !== null ? af(e) : null;
}
function af(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = af(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var uf = _e.unstable_scheduleCallback,
  yu = _e.unstable_cancelCallback,
  qm = _e.unstable_shouldYield,
  Jm = _e.unstable_requestPaint,
  X = _e.unstable_now,
  e0 = _e.unstable_getCurrentPriorityLevel,
  Ql = _e.unstable_ImmediatePriority,
  cf = _e.unstable_UserBlockingPriority,
  bi = _e.unstable_NormalPriority,
  t0 = _e.unstable_LowPriority,
  df = _e.unstable_IdlePriority,
  ws = null,
  tt = null;
function n0(e) {
  if (tt && typeof tt.onCommitFiberRoot == "function")
    try {
      tt.onCommitFiberRoot(ws, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ge = Math.clz32 ? Math.clz32 : s0,
  r0 = Math.log,
  i0 = Math.LN2;
function s0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((r0(e) / i0) | 0)) | 0;
}
var li = 64,
  ai = 4194304;
function ur(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ui(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (r = ur(l)) : ((s &= o), s !== 0 && (r = ur(s)));
  } else (o = n & ~i), o !== 0 ? (r = ur(o)) : s !== 0 && (r = ur(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ge(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function o0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function l0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - Ge(s),
      l = 1 << o,
      a = i[o];
    a === -1
      ? (!(l & n) || l & r) && (i[o] = o0(l, t))
      : a <= t && (e.expiredLanes |= l),
      (s &= ~l);
  }
}
function Wo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ff() {
  var e = li;
  return (li <<= 1), !(li & 4194240) && (li = 64), e;
}
function Ks(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Gr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ge(t)),
    (e[t] = n);
}
function a0(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ge(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function Yl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ge(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var D = 0;
function hf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var pf,
  Xl,
  mf,
  vf,
  gf,
  Ho = !1,
  ui = [],
  Mt = null,
  Nt = null,
  Rt = null,
  Mr = new Map(),
  Nr = new Map(),
  Tt = [],
  u0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function wu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Mt = null;
      break;
    case "dragenter":
    case "dragleave":
      Nt = null;
      break;
    case "mouseover":
    case "mouseout":
      Rt = null;
      break;
    case "pointerover":
    case "pointerout":
      Mr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Nr.delete(t.pointerId);
  }
}
function er(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = Yr(t)), t !== null && Xl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function c0(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Mt = er(Mt, e, t, n, r, i)), !0;
    case "dragenter":
      return (Nt = er(Nt, e, t, n, r, i)), !0;
    case "mouseover":
      return (Rt = er(Rt, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return Mr.set(s, er(Mr.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), Nr.set(s, er(Nr.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function yf(e) {
  var t = tn(e.target);
  if (t !== null) {
    var n = mn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = of(n)), t !== null)) {
          (e.blockedOn = t),
            gf(e.priority, function () {
              mf(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ei(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ko(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Bo = r), n.target.dispatchEvent(r), (Bo = null);
    } else return (t = Yr(n)), t !== null && Xl(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function xu(e, t, n) {
  Ei(e) && n.delete(t);
}
function d0() {
  (Ho = !1),
    Mt !== null && Ei(Mt) && (Mt = null),
    Nt !== null && Ei(Nt) && (Nt = null),
    Rt !== null && Ei(Rt) && (Rt = null),
    Mr.forEach(xu),
    Nr.forEach(xu);
}
function tr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ho ||
      ((Ho = !0),
      _e.unstable_scheduleCallback(_e.unstable_NormalPriority, d0)));
}
function Rr(e) {
  function t(i) {
    return tr(i, e);
  }
  if (0 < ui.length) {
    tr(ui[0], e);
    for (var n = 1; n < ui.length; n++) {
      var r = ui[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Mt !== null && tr(Mt, e),
      Nt !== null && tr(Nt, e),
      Rt !== null && tr(Rt, e),
      Mr.forEach(t),
      Nr.forEach(t),
      n = 0;
    n < Tt.length;
    n++
  )
    (r = Tt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Tt.length && ((n = Tt[0]), n.blockedOn === null); )
    yf(n), n.blockedOn === null && Tt.shift();
}
var Dn = gt.ReactCurrentBatchConfig,
  $i = !0;
function f0(e, t, n, r) {
  var i = D,
    s = Dn.transition;
  Dn.transition = null;
  try {
    (D = 1), Zl(e, t, n, r);
  } finally {
    (D = i), (Dn.transition = s);
  }
}
function h0(e, t, n, r) {
  var i = D,
    s = Dn.transition;
  Dn.transition = null;
  try {
    (D = 4), Zl(e, t, n, r);
  } finally {
    (D = i), (Dn.transition = s);
  }
}
function Zl(e, t, n, r) {
  if ($i) {
    var i = Ko(e, t, n, r);
    if (i === null) no(e, t, r, Wi, n), wu(e, r);
    else if (c0(i, e, t, n, r)) r.stopPropagation();
    else if ((wu(e, r), t & 4 && -1 < u0.indexOf(e))) {
      for (; i !== null; ) {
        var s = Yr(i);
        if (
          (s !== null && pf(s),
          (s = Ko(e, t, n, r)),
          s === null && no(e, t, r, Wi, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else no(e, t, r, null, n);
  }
}
var Wi = null;
function Ko(e, t, n, r) {
  if (((Wi = null), (e = Gl(r)), (e = tn(e)), e !== null))
    if (((t = mn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = of(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Wi = e), null;
}
function wf(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (e0()) {
        case Ql:
          return 1;
        case cf:
          return 4;
        case bi:
        case t0:
          return 16;
        case df:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Et = null,
  ql = null,
  ki = null;
function xf() {
  if (ki) return ki;
  var e,
    t = ql,
    n = t.length,
    r,
    i = "value" in Et ? Et.value : Et.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (ki = i.slice(e, 1 < r ? 1 - r : void 0));
}
function ji(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ci() {
  return !0;
}
function Su() {
  return !1;
}
function Ae(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? ci
        : Su),
      (this.isPropagationStopped = Su),
      this
    );
  }
  return (
    K(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ci));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ci));
      },
      persist: function () {},
      isPersistent: ci,
    }),
    t
  );
}
var Yn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Jl = Ae(Yn),
  Qr = K({}, Yn, { view: 0, detail: 0 }),
  p0 = Ae(Qr),
  Gs,
  Qs,
  nr,
  xs = K({}, Qr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ea,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== nr &&
            (nr && e.type === "mousemove"
              ? ((Gs = e.screenX - nr.screenX), (Qs = e.screenY - nr.screenY))
              : (Qs = Gs = 0),
            (nr = e)),
          Gs);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Qs;
    },
  }),
  Cu = Ae(xs),
  m0 = K({}, xs, { dataTransfer: 0 }),
  v0 = Ae(m0),
  g0 = K({}, Qr, { relatedTarget: 0 }),
  Ys = Ae(g0),
  y0 = K({}, Yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  w0 = Ae(y0),
  x0 = K({}, Yn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  S0 = Ae(x0),
  C0 = K({}, Yn, { data: 0 }),
  Tu = Ae(C0),
  T0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  P0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  E0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function k0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = E0[e]) ? !!t[e] : !1;
}
function ea() {
  return k0;
}
var j0 = K({}, Qr, {
    key: function (e) {
      if (e.key) {
        var t = T0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ji(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? P0[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ea,
    charCode: function (e) {
      return e.type === "keypress" ? ji(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ji(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  M0 = Ae(j0),
  N0 = K({}, xs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Pu = Ae(N0),
  R0 = K({}, Qr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ea,
  }),
  _0 = Ae(R0),
  O0 = K({}, Yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  L0 = Ae(O0),
  A0 = K({}, xs, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  V0 = Ae(A0),
  I0 = [9, 13, 27, 32],
  ta = ht && "CompositionEvent" in window,
  pr = null;
ht && "documentMode" in document && (pr = document.documentMode);
var D0 = ht && "TextEvent" in window && !pr,
  Sf = ht && (!ta || (pr && 8 < pr && 11 >= pr)),
  Eu = " ",
  ku = !1;
function Cf(e, t) {
  switch (e) {
    case "keyup":
      return I0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Tf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var xn = !1;
function z0(e, t) {
  switch (e) {
    case "compositionend":
      return Tf(t);
    case "keypress":
      return t.which !== 32 ? null : ((ku = !0), Eu);
    case "textInput":
      return (e = t.data), e === Eu && ku ? null : e;
    default:
      return null;
  }
}
function F0(e, t) {
  if (xn)
    return e === "compositionend" || (!ta && Cf(e, t))
      ? ((e = xf()), (ki = ql = Et = null), (xn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Sf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var B0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ju(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!B0[e.type] : t === "textarea";
}
function Pf(e, t, n, r) {
  ef(r),
    (t = Hi(t, "onChange")),
    0 < t.length &&
      ((n = new Jl("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var mr = null,
  _r = null;
function b0(e) {
  Vf(e, 0);
}
function Ss(e) {
  var t = Tn(e);
  if (Gd(t)) return e;
}
function U0(e, t) {
  if (e === "change") return t;
}
var Ef = !1;
if (ht) {
  var Xs;
  if (ht) {
    var Zs = "oninput" in document;
    if (!Zs) {
      var Mu = document.createElement("div");
      Mu.setAttribute("oninput", "return;"),
        (Zs = typeof Mu.oninput == "function");
    }
    Xs = Zs;
  } else Xs = !1;
  Ef = Xs && (!document.documentMode || 9 < document.documentMode);
}
function Nu() {
  mr && (mr.detachEvent("onpropertychange", kf), (_r = mr = null));
}
function kf(e) {
  if (e.propertyName === "value" && Ss(_r)) {
    var t = [];
    Pf(t, _r, e, Gl(e)), sf(b0, t);
  }
}
function $0(e, t, n) {
  e === "focusin"
    ? (Nu(), (mr = t), (_r = n), mr.attachEvent("onpropertychange", kf))
    : e === "focusout" && Nu();
}
function W0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ss(_r);
}
function H0(e, t) {
  if (e === "click") return Ss(t);
}
function K0(e, t) {
  if (e === "input" || e === "change") return Ss(t);
}
function G0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ye = typeof Object.is == "function" ? Object.is : G0;
function Or(e, t) {
  if (Ye(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Mo.call(t, i) || !Ye(e[i], t[i])) return !1;
  }
  return !0;
}
function Ru(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function _u(e, t) {
  var n = Ru(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ru(n);
  }
}
function jf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? jf(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Mf() {
  for (var e = window, t = zi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = zi(e.document);
  }
  return t;
}
function na(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Q0(e) {
  var t = Mf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    jf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && na(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = _u(n, s));
        var o = _u(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Y0 = ht && "documentMode" in document && 11 >= document.documentMode,
  Sn = null,
  Go = null,
  vr = null,
  Qo = !1;
function Ou(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Qo ||
    Sn == null ||
    Sn !== zi(r) ||
    ((r = Sn),
    "selectionStart" in r && na(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (vr && Or(vr, r)) ||
      ((vr = r),
      (r = Hi(Go, "onSelect")),
      0 < r.length &&
        ((t = new Jl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Sn))));
}
function di(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Cn = {
    animationend: di("Animation", "AnimationEnd"),
    animationiteration: di("Animation", "AnimationIteration"),
    animationstart: di("Animation", "AnimationStart"),
    transitionend: di("Transition", "TransitionEnd"),
  },
  qs = {},
  Nf = {};
ht &&
  ((Nf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Cn.animationend.animation,
    delete Cn.animationiteration.animation,
    delete Cn.animationstart.animation),
  "TransitionEvent" in window || delete Cn.transitionend.transition);
function Cs(e) {
  if (qs[e]) return qs[e];
  if (!Cn[e]) return e;
  var t = Cn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Nf) return (qs[e] = t[n]);
  return e;
}
var Rf = Cs("animationend"),
  _f = Cs("animationiteration"),
  Of = Cs("animationstart"),
  Lf = Cs("transitionend"),
  Af = new Map(),
  Lu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function $t(e, t) {
  Af.set(e, t), pn(t, [e]);
}
for (var Js = 0; Js < Lu.length; Js++) {
  var eo = Lu[Js],
    X0 = eo.toLowerCase(),
    Z0 = eo[0].toUpperCase() + eo.slice(1);
  $t(X0, "on" + Z0);
}
$t(Rf, "onAnimationEnd");
$t(_f, "onAnimationIteration");
$t(Of, "onAnimationStart");
$t("dblclick", "onDoubleClick");
$t("focusin", "onFocus");
$t("focusout", "onBlur");
$t(Lf, "onTransitionEnd");
Bn("onMouseEnter", ["mouseout", "mouseover"]);
Bn("onMouseLeave", ["mouseout", "mouseover"]);
Bn("onPointerEnter", ["pointerout", "pointerover"]);
Bn("onPointerLeave", ["pointerout", "pointerover"]);
pn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
pn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
pn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
pn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
pn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
pn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var cr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  q0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(cr));
function Au(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Xm(r, t, void 0, e), (e.currentTarget = null);
}
function Vf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== s && i.isPropagationStopped())) break e;
          Au(i, l, u), (s = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== s && i.isPropagationStopped())
          )
            break e;
          Au(i, l, u), (s = a);
        }
    }
  }
  if (Bi) throw ((e = $o), (Bi = !1), ($o = null), e);
}
function F(e, t) {
  var n = t[Jo];
  n === void 0 && (n = t[Jo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (If(t, e, 2, !1), n.add(r));
}
function to(e, t, n) {
  var r = 0;
  t && (r |= 4), If(n, e, r, t);
}
var fi = "_reactListening" + Math.random().toString(36).slice(2);
function Lr(e) {
  if (!e[fi]) {
    (e[fi] = !0),
      Ud.forEach(function (n) {
        n !== "selectionchange" && (q0.has(n) || to(n, !1, e), to(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[fi] || ((t[fi] = !0), to("selectionchange", !1, t));
  }
}
function If(e, t, n, r) {
  switch (wf(t)) {
    case 1:
      var i = f0;
      break;
    case 4:
      i = h0;
      break;
    default:
      i = Zl;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Uo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function no(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = tn(l)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = s = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  sf(function () {
    var u = s,
      c = Gl(n),
      d = [];
    e: {
      var f = Af.get(e);
      if (f !== void 0) {
        var g = Jl,
          y = e;
        switch (e) {
          case "keypress":
            if (ji(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = M0;
            break;
          case "focusin":
            (y = "focus"), (g = Ys);
            break;
          case "focusout":
            (y = "blur"), (g = Ys);
            break;
          case "beforeblur":
          case "afterblur":
            g = Ys;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Cu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = v0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = _0;
            break;
          case Rf:
          case _f:
          case Of:
            g = w0;
            break;
          case Lf:
            g = L0;
            break;
          case "scroll":
            g = p0;
            break;
          case "wheel":
            g = V0;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = S0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Pu;
        }
        var w = (t & 4) !== 0,
          E = !w && e === "scroll",
          m = w ? (f !== null ? f + "Capture" : null) : f;
        w = [];
        for (var h = u, p; h !== null; ) {
          p = h;
          var x = p.stateNode;
          if (
            (p.tag === 5 &&
              x !== null &&
              ((p = x),
              m !== null && ((x = jr(h, m)), x != null && w.push(Ar(h, x, p)))),
            E)
          )
            break;
          h = h.return;
        }
        0 < w.length &&
          ((f = new g(f, y, null, n, c)), d.push({ event: f, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Bo &&
            (y = n.relatedTarget || n.fromElement) &&
            (tn(y) || y[pt]))
        )
          break e;
        if (
          (g || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? tn(y) : null),
              y !== null &&
                ((E = mn(y)), y !== E || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((w = Cu),
            (x = "onMouseLeave"),
            (m = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Pu),
              (x = "onPointerLeave"),
              (m = "onPointerEnter"),
              (h = "pointer")),
            (E = g == null ? f : Tn(g)),
            (p = y == null ? f : Tn(y)),
            (f = new w(x, h + "leave", g, n, c)),
            (f.target = E),
            (f.relatedTarget = p),
            (x = null),
            tn(c) === u &&
              ((w = new w(m, h + "enter", y, n, c)),
              (w.target = p),
              (w.relatedTarget = E),
              (x = w)),
            (E = x),
            g && y)
          )
            t: {
              for (w = g, m = y, h = 0, p = w; p; p = gn(p)) h++;
              for (p = 0, x = m; x; x = gn(x)) p++;
              for (; 0 < h - p; ) (w = gn(w)), h--;
              for (; 0 < p - h; ) (m = gn(m)), p--;
              for (; h--; ) {
                if (w === m || (m !== null && w === m.alternate)) break t;
                (w = gn(w)), (m = gn(m));
              }
              w = null;
            }
          else w = null;
          g !== null && Vu(d, f, g, w, !1),
            y !== null && E !== null && Vu(d, E, y, w, !0);
        }
      }
      e: {
        if (
          ((f = u ? Tn(u) : window),
          (g = f.nodeName && f.nodeName.toLowerCase()),
          g === "select" || (g === "input" && f.type === "file"))
        )
          var S = U0;
        else if (ju(f))
          if (Ef) S = K0;
          else {
            S = W0;
            var P = $0;
          }
        else
          (g = f.nodeName) &&
            g.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (S = H0);
        if (S && (S = S(e, u))) {
          Pf(d, S, n, c);
          break e;
        }
        P && P(e, f, u),
          e === "focusout" &&
            (P = f._wrapperState) &&
            P.controlled &&
            f.type === "number" &&
            Vo(f, "number", f.value);
      }
      switch (((P = u ? Tn(u) : window), e)) {
        case "focusin":
          (ju(P) || P.contentEditable === "true") &&
            ((Sn = P), (Go = u), (vr = null));
          break;
        case "focusout":
          vr = Go = Sn = null;
          break;
        case "mousedown":
          Qo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Qo = !1), Ou(d, n, c);
          break;
        case "selectionchange":
          if (Y0) break;
        case "keydown":
        case "keyup":
          Ou(d, n, c);
      }
      var k;
      if (ta)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        xn
          ? Cf(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Sf &&
          n.locale !== "ko" &&
          (xn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && xn && (k = xf())
            : ((Et = c),
              (ql = "value" in Et ? Et.value : Et.textContent),
              (xn = !0))),
        (P = Hi(u, T)),
        0 < P.length &&
          ((T = new Tu(T, e, null, n, c)),
          d.push({ event: T, listeners: P }),
          k ? (T.data = k) : ((k = Tf(n)), k !== null && (T.data = k)))),
        (k = D0 ? z0(e, n) : F0(e, n)) &&
          ((u = Hi(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Tu("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = k)));
    }
    Vf(d, t);
  });
}
function Ar(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Hi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = jr(e, n)),
      s != null && r.unshift(Ar(e, s, i)),
      (s = jr(e, t)),
      s != null && r.push(Ar(e, s, i))),
      (e = e.return);
  }
  return r;
}
function gn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Vu(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = jr(n, s)), a != null && o.unshift(Ar(n, a, l)))
        : i || ((a = jr(n, s)), a != null && o.push(Ar(n, a, l)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var J0 = /\r\n?/g,
  ev = /\u0000|\uFFFD/g;
function Iu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      J0,
      `
`
    )
    .replace(ev, "");
}
function hi(e, t, n) {
  if (((t = Iu(t)), Iu(e) !== t && n)) throw Error(C(425));
}
function Ki() {}
var Yo = null,
  Xo = null;
function Zo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var qo = typeof setTimeout == "function" ? setTimeout : void 0,
  tv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Du = typeof Promise == "function" ? Promise : void 0,
  nv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Du < "u"
      ? function (e) {
          return Du.resolve(null).then(e).catch(rv);
        }
      : qo;
function rv(e) {
  setTimeout(function () {
    throw e;
  });
}
function ro(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Rr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Rr(t);
}
function _t(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function zu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Xn = Math.random().toString(36).slice(2),
  et = "__reactFiber$" + Xn,
  Vr = "__reactProps$" + Xn,
  pt = "__reactContainer$" + Xn,
  Jo = "__reactEvents$" + Xn,
  iv = "__reactListeners$" + Xn,
  sv = "__reactHandles$" + Xn;
function tn(e) {
  var t = e[et];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[pt] || n[et])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = zu(e); e !== null; ) {
          if ((n = e[et])) return n;
          e = zu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Yr(e) {
  return (
    (e = e[et] || e[pt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Tn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function Ts(e) {
  return e[Vr] || null;
}
var el = [],
  Pn = -1;
function Wt(e) {
  return { current: e };
}
function B(e) {
  0 > Pn || ((e.current = el[Pn]), (el[Pn] = null), Pn--);
}
function z(e, t) {
  Pn++, (el[Pn] = e.current), (e.current = t);
}
var Ft = {},
  me = Wt(Ft),
  Te = Wt(!1),
  un = Ft;
function bn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ft;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Pe(e) {
  return (e = e.childContextTypes), e != null;
}
function Gi() {
  B(Te), B(me);
}
function Fu(e, t, n) {
  if (me.current !== Ft) throw Error(C(168));
  z(me, t), z(Te, n);
}
function Df(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(C(108, $m(e) || "Unknown", i));
  return K({}, n, r);
}
function Qi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ft),
    (un = me.current),
    z(me, e),
    z(Te, Te.current),
    !0
  );
}
function Bu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = Df(e, t, un)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      B(Te),
      B(me),
      z(me, e))
    : B(Te),
    z(Te, n);
}
var st = null,
  Ps = !1,
  io = !1;
function zf(e) {
  st === null ? (st = [e]) : st.push(e);
}
function ov(e) {
  (Ps = !0), zf(e);
}
function Ht() {
  if (!io && st !== null) {
    io = !0;
    var e = 0,
      t = D;
    try {
      var n = st;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (st = null), (Ps = !1);
    } catch (i) {
      throw (st !== null && (st = st.slice(e + 1)), uf(Ql, Ht), i);
    } finally {
      (D = t), (io = !1);
    }
  }
  return null;
}
var En = [],
  kn = 0,
  Yi = null,
  Xi = 0,
  De = [],
  ze = 0,
  cn = null,
  ot = 1,
  lt = "";
function Zt(e, t) {
  (En[kn++] = Xi), (En[kn++] = Yi), (Yi = e), (Xi = t);
}
function Ff(e, t, n) {
  (De[ze++] = ot), (De[ze++] = lt), (De[ze++] = cn), (cn = e);
  var r = ot;
  e = lt;
  var i = 32 - Ge(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - Ge(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (ot = (1 << (32 - Ge(t) + i)) | (n << i) | r),
      (lt = s + e);
  } else (ot = (1 << s) | (n << i) | r), (lt = e);
}
function ra(e) {
  e.return !== null && (Zt(e, 1), Ff(e, 1, 0));
}
function ia(e) {
  for (; e === Yi; )
    (Yi = En[--kn]), (En[kn] = null), (Xi = En[--kn]), (En[kn] = null);
  for (; e === cn; )
    (cn = De[--ze]),
      (De[ze] = null),
      (lt = De[--ze]),
      (De[ze] = null),
      (ot = De[--ze]),
      (De[ze] = null);
}
var Re = null,
  Ne = null,
  U = !1,
  Ke = null;
function Bf(e, t) {
  var n = Fe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function bu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Re = e), (Ne = _t(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Re = e), (Ne = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = cn !== null ? { id: ot, overflow: lt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Fe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Re = e),
            (Ne = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function tl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function nl(e) {
  if (U) {
    var t = Ne;
    if (t) {
      var n = t;
      if (!bu(e, t)) {
        if (tl(e)) throw Error(C(418));
        t = _t(n.nextSibling);
        var r = Re;
        t && bu(e, t)
          ? Bf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (Re = e));
      }
    } else {
      if (tl(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (Re = e);
    }
  }
}
function Uu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Re = e;
}
function pi(e) {
  if (e !== Re) return !1;
  if (!U) return Uu(e), (U = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Zo(e.type, e.memoizedProps))),
    t && (t = Ne))
  ) {
    if (tl(e)) throw (bf(), Error(C(418)));
    for (; t; ) Bf(e, t), (t = _t(t.nextSibling));
  }
  if ((Uu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ne = _t(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ne = null;
    }
  } else Ne = Re ? _t(e.stateNode.nextSibling) : null;
  return !0;
}
function bf() {
  for (var e = Ne; e; ) e = _t(e.nextSibling);
}
function Un() {
  (Ne = Re = null), (U = !1);
}
function sa(e) {
  Ke === null ? (Ke = [e]) : Ke.push(e);
}
var lv = gt.ReactCurrentBatchConfig;
function We(e, t) {
  if (e && e.defaultProps) {
    (t = K({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Zi = Wt(null),
  qi = null,
  jn = null,
  oa = null;
function la() {
  oa = jn = qi = null;
}
function aa(e) {
  var t = Zi.current;
  B(Zi), (e._currentValue = t);
}
function rl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function zn(e, t) {
  (qi = e),
    (oa = jn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ce = !0), (e.firstContext = null));
}
function be(e) {
  var t = e._currentValue;
  if (oa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), jn === null)) {
      if (qi === null) throw Error(C(308));
      (jn = e), (qi.dependencies = { lanes: 0, firstContext: e });
    } else jn = jn.next = e;
  return t;
}
var nn = null;
function ua(e) {
  nn === null ? (nn = [e]) : nn.push(e);
}
function Uf(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), ua(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    mt(e, r)
  );
}
function mt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var St = !1;
function ca(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function $f(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ut(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ot(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      mt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), ua(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    mt(e, n)
  );
}
function Mi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Yl(e, n);
  }
}
function $u(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ji(e, t, n, r) {
  var i = e.updateQueue;
  St = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), o === null ? (s = u) : (o.next = u), (o = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== o &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var d = i.baseState;
    (o = 0), (c = u = a = null), (l = s);
    do {
      var f = l.lane,
        g = l.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            w = l;
          switch (((f = t), (g = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == "function")) {
                d = y.call(g, d, f);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (f = typeof y == "function" ? y.call(g, d, f) : y),
                f == null)
              )
                break e;
              d = K({}, d, f);
              break e;
            case 2:
              St = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [l]) : f.push(l));
      } else
        (g = {
          eventTime: g,
          lane: f,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (a = d)) : (c = c.next = g),
          (o |= f);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (f = l),
          (l = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = d),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (fn |= o), (e.lanes = o), (e.memoizedState = d);
  }
}
function Wu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(C(191, i));
        i.call(r);
      }
    }
}
var Wf = new bd.Component().refs;
function il(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : K({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Es = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? mn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      i = At(e),
      s = ut(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Ot(e, s, i)),
      t !== null && (Qe(t, e, i, r), Mi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      i = At(e),
      s = ut(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Ot(e, s, i)),
      t !== null && (Qe(t, e, i, r), Mi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ye(),
      r = At(e),
      i = ut(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Ot(e, i, r)),
      t !== null && (Qe(t, e, r, n), Mi(t, e, r));
  },
};
function Hu(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Or(n, r) || !Or(i, s)
      : !0
  );
}
function Hf(e, t, n) {
  var r = !1,
    i = Ft,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = be(s))
      : ((i = Pe(t) ? un : me.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? bn(e, i) : Ft)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Es),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Ku(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Es.enqueueReplaceState(t, t.state, null);
}
function sl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Wf), ca(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = be(s))
    : ((s = Pe(t) ? un : me.current), (i.context = bn(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (il(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Es.enqueueReplaceState(i, i.state, null),
      Ji(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function rr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var l = i.refs;
            l === Wf && (l = i.refs = {}),
              o === null ? delete l[s] : (l[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function mi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Gu(e) {
  var t = e._init;
  return t(e._payload);
}
function Kf(e) {
  function t(m, h) {
    if (e) {
      var p = m.deletions;
      p === null ? ((m.deletions = [h]), (m.flags |= 16)) : p.push(h);
    }
  }
  function n(m, h) {
    if (!e) return null;
    for (; h !== null; ) t(m, h), (h = h.sibling);
    return null;
  }
  function r(m, h) {
    for (m = new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
    return m;
  }
  function i(m, h) {
    return (m = Vt(m, h)), (m.index = 0), (m.sibling = null), m;
  }
  function s(m, h, p) {
    return (
      (m.index = p),
      e
        ? ((p = m.alternate),
          p !== null
            ? ((p = p.index), p < h ? ((m.flags |= 2), h) : p)
            : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    );
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, h, p, x) {
    return h === null || h.tag !== 6
      ? ((h = fo(p, m.mode, x)), (h.return = m), h)
      : ((h = i(h, p)), (h.return = m), h);
  }
  function a(m, h, p, x) {
    var S = p.type;
    return S === wn
      ? c(m, h, p.props.children, x, p.key)
      : h !== null &&
        (h.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === xt &&
            Gu(S) === h.type))
      ? ((x = i(h, p.props)), (x.ref = rr(m, h, p)), (x.return = m), x)
      : ((x = Ai(p.type, p.key, p.props, null, m.mode, x)),
        (x.ref = rr(m, h, p)),
        (x.return = m),
        x);
  }
  function u(m, h, p, x) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== p.containerInfo ||
      h.stateNode.implementation !== p.implementation
      ? ((h = ho(p, m.mode, x)), (h.return = m), h)
      : ((h = i(h, p.children || [])), (h.return = m), h);
  }
  function c(m, h, p, x, S) {
    return h === null || h.tag !== 7
      ? ((h = ln(p, m.mode, x, S)), (h.return = m), h)
      : ((h = i(h, p)), (h.return = m), h);
  }
  function d(m, h, p) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = fo("" + h, m.mode, p)), (h.return = m), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ii:
          return (
            (p = Ai(h.type, h.key, h.props, null, m.mode, p)),
            (p.ref = rr(m, null, h)),
            (p.return = m),
            p
          );
        case yn:
          return (h = ho(h, m.mode, p)), (h.return = m), h;
        case xt:
          var x = h._init;
          return d(m, x(h._payload), p);
      }
      if (ar(h) || qn(h))
        return (h = ln(h, m.mode, p, null)), (h.return = m), h;
      mi(m, h);
    }
    return null;
  }
  function f(m, h, p, x) {
    var S = h !== null ? h.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return S !== null ? null : l(m, h, "" + p, x);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ii:
          return p.key === S ? a(m, h, p, x) : null;
        case yn:
          return p.key === S ? u(m, h, p, x) : null;
        case xt:
          return (S = p._init), f(m, h, S(p._payload), x);
      }
      if (ar(p) || qn(p)) return S !== null ? null : c(m, h, p, x, null);
      mi(m, p);
    }
    return null;
  }
  function g(m, h, p, x, S) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (m = m.get(p) || null), l(h, m, "" + x, S);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ii:
          return (m = m.get(x.key === null ? p : x.key) || null), a(h, m, x, S);
        case yn:
          return (m = m.get(x.key === null ? p : x.key) || null), u(h, m, x, S);
        case xt:
          var P = x._init;
          return g(m, h, p, P(x._payload), S);
      }
      if (ar(x) || qn(x)) return (m = m.get(p) || null), c(h, m, x, S, null);
      mi(h, x);
    }
    return null;
  }
  function y(m, h, p, x) {
    for (
      var S = null, P = null, k = h, T = (h = 0), A = null;
      k !== null && T < p.length;
      T++
    ) {
      k.index > T ? ((A = k), (k = null)) : (A = k.sibling);
      var N = f(m, k, p[T], x);
      if (N === null) {
        k === null && (k = A);
        break;
      }
      e && k && N.alternate === null && t(m, k),
        (h = s(N, h, T)),
        P === null ? (S = N) : (P.sibling = N),
        (P = N),
        (k = A);
    }
    if (T === p.length) return n(m, k), U && Zt(m, T), S;
    if (k === null) {
      for (; T < p.length; T++)
        (k = d(m, p[T], x)),
          k !== null &&
            ((h = s(k, h, T)), P === null ? (S = k) : (P.sibling = k), (P = k));
      return U && Zt(m, T), S;
    }
    for (k = r(m, k); T < p.length; T++)
      (A = g(k, m, T, p[T], x)),
        A !== null &&
          (e && A.alternate !== null && k.delete(A.key === null ? T : A.key),
          (h = s(A, h, T)),
          P === null ? (S = A) : (P.sibling = A),
          (P = A));
    return (
      e &&
        k.forEach(function (b) {
          return t(m, b);
        }),
      U && Zt(m, T),
      S
    );
  }
  function w(m, h, p, x) {
    var S = qn(p);
    if (typeof S != "function") throw Error(C(150));
    if (((p = S.call(p)), p == null)) throw Error(C(151));
    for (
      var P = (S = null), k = h, T = (h = 0), A = null, N = p.next();
      k !== null && !N.done;
      T++, N = p.next()
    ) {
      k.index > T ? ((A = k), (k = null)) : (A = k.sibling);
      var b = f(m, k, N.value, x);
      if (b === null) {
        k === null && (k = A);
        break;
      }
      e && k && b.alternate === null && t(m, k),
        (h = s(b, h, T)),
        P === null ? (S = b) : (P.sibling = b),
        (P = b),
        (k = A);
    }
    if (N.done) return n(m, k), U && Zt(m, T), S;
    if (k === null) {
      for (; !N.done; T++, N = p.next())
        (N = d(m, N.value, x)),
          N !== null &&
            ((h = s(N, h, T)), P === null ? (S = N) : (P.sibling = N), (P = N));
      return U && Zt(m, T), S;
    }
    for (k = r(m, k); !N.done; T++, N = p.next())
      (N = g(k, m, T, N.value, x)),
        N !== null &&
          (e && N.alternate !== null && k.delete(N.key === null ? T : N.key),
          (h = s(N, h, T)),
          P === null ? (S = N) : (P.sibling = N),
          (P = N));
    return (
      e &&
        k.forEach(function (Xe) {
          return t(m, Xe);
        }),
      U && Zt(m, T),
      S
    );
  }
  function E(m, h, p, x) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === wn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case ii:
          e: {
            for (var S = p.key, P = h; P !== null; ) {
              if (P.key === S) {
                if (((S = p.type), S === wn)) {
                  if (P.tag === 7) {
                    n(m, P.sibling),
                      (h = i(P, p.props.children)),
                      (h.return = m),
                      (m = h);
                    break e;
                  }
                } else if (
                  P.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === xt &&
                    Gu(S) === P.type)
                ) {
                  n(m, P.sibling),
                    (h = i(P, p.props)),
                    (h.ref = rr(m, P, p)),
                    (h.return = m),
                    (m = h);
                  break e;
                }
                n(m, P);
                break;
              } else t(m, P);
              P = P.sibling;
            }
            p.type === wn
              ? ((h = ln(p.props.children, m.mode, x, p.key)),
                (h.return = m),
                (m = h))
              : ((x = Ai(p.type, p.key, p.props, null, m.mode, x)),
                (x.ref = rr(m, h, p)),
                (x.return = m),
                (m = x));
          }
          return o(m);
        case yn:
          e: {
            for (P = p.key; h !== null; ) {
              if (h.key === P)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === p.containerInfo &&
                  h.stateNode.implementation === p.implementation
                ) {
                  n(m, h.sibling),
                    (h = i(h, p.children || [])),
                    (h.return = m),
                    (m = h);
                  break e;
                } else {
                  n(m, h);
                  break;
                }
              else t(m, h);
              h = h.sibling;
            }
            (h = ho(p, m.mode, x)), (h.return = m), (m = h);
          }
          return o(m);
        case xt:
          return (P = p._init), E(m, h, P(p._payload), x);
      }
      if (ar(p)) return y(m, h, p, x);
      if (qn(p)) return w(m, h, p, x);
      mi(m, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = i(h, p)), (h.return = m), (m = h))
          : (n(m, h), (h = fo(p, m.mode, x)), (h.return = m), (m = h)),
        o(m))
      : n(m, h);
  }
  return E;
}
var $n = Kf(!0),
  Gf = Kf(!1),
  Xr = {},
  nt = Wt(Xr),
  Ir = Wt(Xr),
  Dr = Wt(Xr);
function rn(e) {
  if (e === Xr) throw Error(C(174));
  return e;
}
function da(e, t) {
  switch ((z(Dr, t), z(Ir, e), z(nt, Xr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Do(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Do(t, e));
  }
  B(nt), z(nt, t);
}
function Wn() {
  B(nt), B(Ir), B(Dr);
}
function Qf(e) {
  rn(Dr.current);
  var t = rn(nt.current),
    n = Do(t, e.type);
  t !== n && (z(Ir, e), z(nt, n));
}
function fa(e) {
  Ir.current === e && (B(nt), B(Ir));
}
var $ = Wt(0);
function es(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var so = [];
function ha() {
  for (var e = 0; e < so.length; e++)
    so[e]._workInProgressVersionPrimary = null;
  so.length = 0;
}
var Ni = gt.ReactCurrentDispatcher,
  oo = gt.ReactCurrentBatchConfig,
  dn = 0,
  H = null,
  J = null,
  ne = null,
  ts = !1,
  gr = !1,
  zr = 0,
  av = 0;
function ue() {
  throw Error(C(321));
}
function pa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ye(e[n], t[n])) return !1;
  return !0;
}
function ma(e, t, n, r, i, s) {
  if (
    ((dn = s),
    (H = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ni.current = e === null || e.memoizedState === null ? fv : hv),
    (e = n(r, i)),
    gr)
  ) {
    s = 0;
    do {
      if (((gr = !1), (zr = 0), 25 <= s)) throw Error(C(301));
      (s += 1),
        (ne = J = null),
        (t.updateQueue = null),
        (Ni.current = pv),
        (e = n(r, i));
    } while (gr);
  }
  if (
    ((Ni.current = ns),
    (t = J !== null && J.next !== null),
    (dn = 0),
    (ne = J = H = null),
    (ts = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function va() {
  var e = zr !== 0;
  return (zr = 0), e;
}
function Je() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ne === null ? (H.memoizedState = ne = e) : (ne = ne.next = e), ne;
}
function Ue() {
  if (J === null) {
    var e = H.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = J.next;
  var t = ne === null ? H.memoizedState : ne.next;
  if (t !== null) (ne = t), (J = e);
  else {
    if (e === null) throw Error(C(310));
    (J = e),
      (e = {
        memoizedState: J.memoizedState,
        baseState: J.baseState,
        baseQueue: J.baseQueue,
        queue: J.queue,
        next: null,
      }),
      ne === null ? (H.memoizedState = ne = e) : (ne = ne.next = e);
  }
  return ne;
}
function Fr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function lo(e) {
  var t = Ue(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = J,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var l = (o = null),
      a = null,
      u = s;
    do {
      var c = u.lane;
      if ((dn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = d), (o = r)) : (a = a.next = d),
          (H.lanes |= c),
          (fn |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    a === null ? (o = r) : (a.next = l),
      Ye(r, t.memoizedState) || (Ce = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (H.lanes |= s), (fn |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ao(e) {
  var t = Ue(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    Ye(s, t.memoizedState) || (Ce = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Yf() {}
function Xf(e, t) {
  var n = H,
    r = Ue(),
    i = t(),
    s = !Ye(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Ce = !0)),
    (r = r.queue),
    ga(Jf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (ne !== null && ne.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Br(9, qf.bind(null, n, r, i, t), void 0, null),
      re === null)
    )
      throw Error(C(349));
    dn & 30 || Zf(n, t, i);
  }
  return i;
}
function Zf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function qf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), eh(t) && th(e);
}
function Jf(e, t, n) {
  return n(function () {
    eh(t) && th(e);
  });
}
function eh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ye(e, n);
  } catch {
    return !0;
  }
}
function th(e) {
  var t = mt(e, 1);
  t !== null && Qe(t, e, 1, -1);
}
function Qu(e) {
  var t = Je();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Fr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = dv.bind(null, H, e)),
    [t.memoizedState, e]
  );
}
function Br(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function nh() {
  return Ue().memoizedState;
}
function Ri(e, t, n, r) {
  var i = Je();
  (H.flags |= e),
    (i.memoizedState = Br(1 | t, n, void 0, r === void 0 ? null : r));
}
function ks(e, t, n, r) {
  var i = Ue();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (J !== null) {
    var o = J.memoizedState;
    if (((s = o.destroy), r !== null && pa(r, o.deps))) {
      i.memoizedState = Br(t, n, s, r);
      return;
    }
  }
  (H.flags |= e), (i.memoizedState = Br(1 | t, n, s, r));
}
function Yu(e, t) {
  return Ri(8390656, 8, e, t);
}
function ga(e, t) {
  return ks(2048, 8, e, t);
}
function rh(e, t) {
  return ks(4, 2, e, t);
}
function ih(e, t) {
  return ks(4, 4, e, t);
}
function sh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function oh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ks(4, 4, sh.bind(null, t, e), n)
  );
}
function ya() {}
function lh(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && pa(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ah(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && pa(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function uh(e, t, n) {
  return dn & 21
    ? (Ye(n, t) || ((n = ff()), (H.lanes |= n), (fn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ce = !0)), (e.memoizedState = n));
}
function uv(e, t) {
  var n = D;
  (D = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = oo.transition;
  oo.transition = {};
  try {
    e(!1), t();
  } finally {
    (D = n), (oo.transition = r);
  }
}
function ch() {
  return Ue().memoizedState;
}
function cv(e, t, n) {
  var r = At(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    dh(e))
  )
    fh(t, n);
  else if (((n = Uf(e, t, n, r)), n !== null)) {
    var i = ye();
    Qe(n, e, r, i), hh(n, t, r);
  }
}
function dv(e, t, n) {
  var r = At(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (dh(e)) fh(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          l = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Ye(l, o))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), ua(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Uf(e, t, i, r)),
      n !== null && ((i = ye()), Qe(n, e, r, i), hh(n, t, r));
  }
}
function dh(e) {
  var t = e.alternate;
  return e === H || (t !== null && t === H);
}
function fh(e, t) {
  gr = ts = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function hh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Yl(e, n);
  }
}
var ns = {
    readContext: be,
    useCallback: ue,
    useContext: ue,
    useEffect: ue,
    useImperativeHandle: ue,
    useInsertionEffect: ue,
    useLayoutEffect: ue,
    useMemo: ue,
    useReducer: ue,
    useRef: ue,
    useState: ue,
    useDebugValue: ue,
    useDeferredValue: ue,
    useTransition: ue,
    useMutableSource: ue,
    useSyncExternalStore: ue,
    useId: ue,
    unstable_isNewReconciler: !1,
  },
  fv = {
    readContext: be,
    useCallback: function (e, t) {
      return (Je().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: be,
    useEffect: Yu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ri(4194308, 4, sh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ri(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ri(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Je();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Je();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = cv.bind(null, H, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Je();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Qu,
    useDebugValue: ya,
    useDeferredValue: function (e) {
      return (Je().memoizedState = e);
    },
    useTransition: function () {
      var e = Qu(!1),
        t = e[0];
      return (e = uv.bind(null, e[1])), (Je().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = H,
        i = Je();
      if (U) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), re === null)) throw Error(C(349));
        dn & 30 || Zf(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        Yu(Jf.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Br(9, qf.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Je(),
        t = re.identifierPrefix;
      if (U) {
        var n = lt,
          r = ot;
        (n = (r & ~(1 << (32 - Ge(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = zr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = av++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  hv = {
    readContext: be,
    useCallback: lh,
    useContext: be,
    useEffect: ga,
    useImperativeHandle: oh,
    useInsertionEffect: rh,
    useLayoutEffect: ih,
    useMemo: ah,
    useReducer: lo,
    useRef: nh,
    useState: function () {
      return lo(Fr);
    },
    useDebugValue: ya,
    useDeferredValue: function (e) {
      var t = Ue();
      return uh(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = lo(Fr)[0],
        t = Ue().memoizedState;
      return [e, t];
    },
    useMutableSource: Yf,
    useSyncExternalStore: Xf,
    useId: ch,
    unstable_isNewReconciler: !1,
  },
  pv = {
    readContext: be,
    useCallback: lh,
    useContext: be,
    useEffect: ga,
    useImperativeHandle: oh,
    useInsertionEffect: rh,
    useLayoutEffect: ih,
    useMemo: ah,
    useReducer: ao,
    useRef: nh,
    useState: function () {
      return ao(Fr);
    },
    useDebugValue: ya,
    useDeferredValue: function (e) {
      var t = Ue();
      return J === null ? (t.memoizedState = e) : uh(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = ao(Fr)[0],
        t = Ue().memoizedState;
      return [e, t];
    },
    useMutableSource: Yf,
    useSyncExternalStore: Xf,
    useId: ch,
    unstable_isNewReconciler: !1,
  };
function Hn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Um(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function uo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ol(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var mv = typeof WeakMap == "function" ? WeakMap : Map;
function ph(e, t, n) {
  (n = ut(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      is || ((is = !0), (vl = r)), ol(e, t);
    }),
    n
  );
}
function mh(e, t, n) {
  (n = ut(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        ol(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        ol(e, t),
          typeof r != "function" &&
            (Lt === null ? (Lt = new Set([this])) : Lt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Xu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new mv();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Nv.bind(null, e, t, n)), t.then(e, e));
}
function Zu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function qu(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ut(-1, 1)), (t.tag = 2), Ot(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var vv = gt.ReactCurrentOwner,
  Ce = !1;
function ve(e, t, n, r) {
  t.child = e === null ? Gf(t, null, n, r) : $n(t, e.child, n, r);
}
function Ju(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    zn(t, i),
    (r = ma(e, t, n, r, s, i)),
    (n = va()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        vt(e, t, i))
      : (U && n && ra(t), (t.flags |= 1), ve(e, t, r, i), t.child)
  );
}
function ec(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !ka(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), vh(e, t, s, r, i))
      : ((e = Ai(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Or), n(o, r) && e.ref === t.ref)
    )
      return vt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Vt(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function vh(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Or(s, r) && e.ref === t.ref)
      if (((Ce = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ce = !0);
      else return (t.lanes = e.lanes), vt(e, t, i);
  }
  return ll(e, t, n, r, i);
}
function gh(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        z(Nn, Me),
        (Me |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          z(Nn, Me),
          (Me |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        z(Nn, Me),
        (Me |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      z(Nn, Me),
      (Me |= r);
  return ve(e, t, i, n), t.child;
}
function yh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ll(e, t, n, r, i) {
  var s = Pe(n) ? un : me.current;
  return (
    (s = bn(t, s)),
    zn(t, i),
    (n = ma(e, t, n, r, s, i)),
    (r = va()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        vt(e, t, i))
      : (U && r && ra(t), (t.flags |= 1), ve(e, t, n, i), t.child)
  );
}
function tc(e, t, n, r, i) {
  if (Pe(n)) {
    var s = !0;
    Qi(t);
  } else s = !1;
  if ((zn(t, i), t.stateNode === null))
    _i(e, t), Hf(t, n, r), sl(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var a = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = be(u))
      : ((u = Pe(n) ? un : me.current), (u = bn(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && Ku(t, o, r, u)),
      (St = !1);
    var f = t.memoizedState;
    (o.state = f),
      Ji(t, r, o, i),
      (a = t.memoizedState),
      l !== r || f !== a || Te.current || St
        ? (typeof c == "function" && (il(t, n, c, r), (a = t.memoizedState)),
          (l = St || Hu(t, n, l, r, f, a, u))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = u),
          (r = l))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      $f(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : We(t.type, l)),
      (o.props = u),
      (d = t.pendingProps),
      (f = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = be(a))
        : ((a = Pe(n) ? un : me.current), (a = bn(t, a)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== d || f !== a) && Ku(t, o, r, a)),
      (St = !1),
      (f = t.memoizedState),
      (o.state = f),
      Ji(t, r, o, i);
    var y = t.memoizedState;
    l !== d || f !== y || Te.current || St
      ? (typeof g == "function" && (il(t, n, g, r), (y = t.memoizedState)),
        (u = St || Hu(t, n, u, r, f, y, a) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, y, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, y, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = a),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return al(e, t, n, r, s, i);
}
function al(e, t, n, r, i, s) {
  yh(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Bu(t, n, !1), vt(e, t, s);
  (r = t.stateNode), (vv.current = t);
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = $n(t, e.child, null, s)), (t.child = $n(t, null, l, s)))
      : ve(e, t, l, s),
    (t.memoizedState = r.state),
    i && Bu(t, n, !0),
    t.child
  );
}
function wh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Fu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Fu(e, t.context, !1),
    da(e, t.containerInfo);
}
function nc(e, t, n, r, i) {
  return Un(), sa(i), (t.flags |= 256), ve(e, t, n, r), t.child;
}
var ul = { dehydrated: null, treeContext: null, retryLane: 0 };
function cl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function xh(e, t, n) {
  var r = t.pendingProps,
    i = $.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    z($, i & 1),
    e === null)
  )
    return (
      nl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Ns(o, r, 0, null)),
              (e = ln(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = cl(n)),
              (t.memoizedState = ul),
              e)
            : wa(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return gv(e, t, o, r, l, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Vt(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (s = Vt(l, s)) : ((s = ln(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? cl(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = ul),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Vt(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function wa(e, t) {
  return (
    (t = Ns({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function vi(e, t, n, r) {
  return (
    r !== null && sa(r),
    $n(t, e.child, null, n),
    (e = wa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function gv(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = uo(Error(C(422)))), vi(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = Ns({ mode: "visible", children: r.children }, i, 0, null)),
        (s = ln(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && $n(t, e.child, null, o),
        (t.child.memoizedState = cl(o)),
        (t.memoizedState = ul),
        s);
  if (!(t.mode & 1)) return vi(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (s = Error(C(419))), (r = uo(s, r, void 0)), vi(e, t, o, r);
  }
  if (((l = (o & e.childLanes) !== 0), Ce || l)) {
    if (((r = re), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), mt(e, i), Qe(r, e, i, -1));
    }
    return Ea(), (r = uo(Error(C(421)))), vi(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Rv.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Ne = _t(i.nextSibling)),
      (Re = t),
      (U = !0),
      (Ke = null),
      e !== null &&
        ((De[ze++] = ot),
        (De[ze++] = lt),
        (De[ze++] = cn),
        (ot = e.id),
        (lt = e.overflow),
        (cn = t)),
      (t = wa(t, r.children)),
      (t.flags |= 4096),
      t);
}
function rc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), rl(e.return, t, n);
}
function co(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function Sh(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((ve(e, t, r.children, n), (r = $.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && rc(e, n, t);
        else if (e.tag === 19) rc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((z($, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && es(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          co(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && es(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        co(t, !0, n, null, s);
        break;
      case "together":
        co(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function _i(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function vt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (fn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Vt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Vt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function yv(e, t, n) {
  switch (t.tag) {
    case 3:
      wh(t), Un();
      break;
    case 5:
      Qf(t);
      break;
    case 1:
      Pe(t.type) && Qi(t);
      break;
    case 4:
      da(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      z(Zi, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (z($, $.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? xh(e, t, n)
          : (z($, $.current & 1),
            (e = vt(e, t, n)),
            e !== null ? e.sibling : null);
      z($, $.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Sh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        z($, $.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), gh(e, t, n);
  }
  return vt(e, t, n);
}
var Ch, dl, Th, Ph;
Ch = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
dl = function () {};
Th = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), rn(nt.current);
    var s = null;
    switch (n) {
      case "input":
        (i = Lo(e, i)), (r = Lo(e, r)), (s = []);
        break;
      case "select":
        (i = K({}, i, { value: void 0 })),
          (r = K({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = Io(e, i)), (r = Io(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ki);
    }
    zo(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Er.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                l[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (s = s || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Er.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && F("scroll", e),
                  s || l === a || (s = []))
                : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Ph = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ir(e, t) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ce(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function wv(e, t, n) {
  var r = t.pendingProps;
  switch ((ia(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ce(t), null;
    case 1:
      return Pe(t.type) && Gi(), ce(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Wn(),
        B(Te),
        B(me),
        ha(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (pi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ke !== null && (wl(Ke), (Ke = null)))),
        dl(e, t),
        ce(t),
        null
      );
    case 5:
      fa(t);
      var i = rn(Dr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Th(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return ce(t), null;
        }
        if (((e = rn(nt.current)), pi(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[et] = t), (r[Vr] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              F("cancel", r), F("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              F("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < cr.length; i++) F(cr[i], r);
              break;
            case "source":
              F("error", r);
              break;
            case "img":
            case "image":
            case "link":
              F("error", r), F("load", r);
              break;
            case "details":
              F("toggle", r);
              break;
            case "input":
              fu(r, s), F("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                F("invalid", r);
              break;
            case "textarea":
              pu(r, s), F("invalid", r);
          }
          zo(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var l = s[o];
              o === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      hi(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      hi(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : Er.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  F("scroll", r);
            }
          switch (n) {
            case "input":
              si(r), hu(r, s, !0);
              break;
            case "textarea":
              si(r), mu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Ki);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Xd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[et] = t),
            (e[Vr] = r),
            Ch(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Fo(n, r)), n)) {
              case "dialog":
                F("cancel", e), F("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                F("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < cr.length; i++) F(cr[i], e);
                i = r;
                break;
              case "source":
                F("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                F("error", e), F("load", e), (i = r);
                break;
              case "details":
                F("toggle", e), (i = r);
                break;
              case "input":
                fu(e, r), (i = Lo(e, r)), F("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = K({}, r, { value: void 0 })),
                  F("invalid", e);
                break;
              case "textarea":
                pu(e, r), (i = Io(e, r)), F("invalid", e);
                break;
              default:
                i = r;
            }
            zo(n, i), (l = i);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? Jd(e, a)
                  : s === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Zd(e, a))
                  : s === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && kr(e, a)
                    : typeof a == "number" && kr(e, "" + a)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Er.hasOwnProperty(s)
                      ? a != null && s === "onScroll" && F("scroll", e)
                      : a != null && $l(e, s, a, o));
              }
            switch (n) {
              case "input":
                si(e), hu(e, r, !1);
                break;
              case "textarea":
                si(e), mu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + zt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? An(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      An(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Ki);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ce(t), null;
    case 6:
      if (e && t.stateNode != null) Ph(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = rn(Dr.current)), rn(nt.current), pi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[et] = t),
            (s = r.nodeValue !== n) && ((e = Re), e !== null))
          )
            switch (e.tag) {
              case 3:
                hi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  hi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[et] = t),
            (t.stateNode = r);
      }
      return ce(t), null;
    case 13:
      if (
        (B($),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && Ne !== null && t.mode & 1 && !(t.flags & 128))
          bf(), Un(), (t.flags |= 98560), (s = !1);
        else if (((s = pi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(C(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(C(317));
            s[et] = t;
          } else
            Un(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ce(t), (s = !1);
        } else Ke !== null && (wl(Ke), (Ke = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || $.current & 1 ? ee === 0 && (ee = 3) : Ea())),
          t.updateQueue !== null && (t.flags |= 4),
          ce(t),
          null);
    case 4:
      return (
        Wn(), dl(e, t), e === null && Lr(t.stateNode.containerInfo), ce(t), null
      );
    case 10:
      return aa(t.type._context), ce(t), null;
    case 17:
      return Pe(t.type) && Gi(), ce(t), null;
    case 19:
      if ((B($), (s = t.memoizedState), s === null)) return ce(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) ir(s, !1);
        else {
          if (ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = es(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    ir(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return z($, ($.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            X() > Kn &&
            ((t.flags |= 128), (r = !0), ir(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = es(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ir(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !U)
            )
              return ce(t), null;
          } else
            2 * X() - s.renderingStartTime > Kn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ir(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = X()),
          (t.sibling = null),
          (n = $.current),
          z($, r ? (n & 1) | 2 : n & 1),
          t)
        : (ce(t), null);
    case 22:
    case 23:
      return (
        Pa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Me & 1073741824 && (ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ce(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function xv(e, t) {
  switch ((ia(t), t.tag)) {
    case 1:
      return (
        Pe(t.type) && Gi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Wn(),
        B(Te),
        B(me),
        ha(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return fa(t), null;
    case 13:
      if ((B($), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        Un();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return B($), null;
    case 4:
      return Wn(), null;
    case 10:
      return aa(t.type._context), null;
    case 22:
    case 23:
      return Pa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var gi = !1,
  fe = !1,
  Sv = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function Mn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        G(e, t, r);
      }
    else n.current = null;
}
function fl(e, t, n) {
  try {
    n();
  } catch (r) {
    G(e, t, r);
  }
}
var ic = !1;
function Cv(e, t) {
  if (((Yo = $i), (e = Mf()), na(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var g;
              d !== n || (i !== 0 && d.nodeType !== 3) || (l = o + i),
                d !== s || (r !== 0 && d.nodeType !== 3) || (a = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (g = d.firstChild) !== null;

            )
              (f = d), (d = g);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === i && (l = o),
                f === s && ++c === r && (a = o),
                (g = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = g;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Xo = { focusedElem: e, selectionRange: n }, $i = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    E = y.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : We(t.type, w),
                      E
                    );
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (x) {
          G(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (y = ic), (ic = !1), y;
}
function yr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && fl(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function js(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function hl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Eh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Eh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[et], delete t[Vr], delete t[Jo], delete t[iv], delete t[sv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function kh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function sc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || kh(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function pl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ki));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (pl(e, t, n), e = e.sibling; e !== null; ) pl(e, t, n), (e = e.sibling);
}
function ml(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ml(e, t, n), e = e.sibling; e !== null; ) ml(e, t, n), (e = e.sibling);
}
var ie = null,
  He = !1;
function yt(e, t, n) {
  for (n = n.child; n !== null; ) jh(e, t, n), (n = n.sibling);
}
function jh(e, t, n) {
  if (tt && typeof tt.onCommitFiberUnmount == "function")
    try {
      tt.onCommitFiberUnmount(ws, n);
    } catch {}
  switch (n.tag) {
    case 5:
      fe || Mn(n, t);
    case 6:
      var r = ie,
        i = He;
      (ie = null),
        yt(e, t, n),
        (ie = r),
        (He = i),
        ie !== null &&
          (He
            ? ((e = ie),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ie.removeChild(n.stateNode));
      break;
    case 18:
      ie !== null &&
        (He
          ? ((e = ie),
            (n = n.stateNode),
            e.nodeType === 8
              ? ro(e.parentNode, n)
              : e.nodeType === 1 && ro(e, n),
            Rr(e))
          : ro(ie, n.stateNode));
      break;
    case 4:
      (r = ie),
        (i = He),
        (ie = n.stateNode.containerInfo),
        (He = !0),
        yt(e, t, n),
        (ie = r),
        (He = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !fe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && fl(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      yt(e, t, n);
      break;
    case 1:
      if (
        !fe &&
        (Mn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          G(n, t, l);
        }
      yt(e, t, n);
      break;
    case 21:
      yt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((fe = (r = fe) || n.memoizedState !== null), yt(e, t, n), (fe = r))
        : yt(e, t, n);
      break;
    default:
      yt(e, t, n);
  }
}
function oc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Sv()),
      t.forEach(function (r) {
        var i = _v.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function $e(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ie = l.stateNode), (He = !1);
              break e;
            case 3:
              (ie = l.stateNode.containerInfo), (He = !0);
              break e;
            case 4:
              (ie = l.stateNode.containerInfo), (He = !0);
              break e;
          }
          l = l.return;
        }
        if (ie === null) throw Error(C(160));
        jh(s, o, i), (ie = null), (He = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        G(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Mh(t, e), (t = t.sibling);
}
function Mh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (($e(t, e), qe(e), r & 4)) {
        try {
          yr(3, e, e.return), js(3, e);
        } catch (w) {
          G(e, e.return, w);
        }
        try {
          yr(5, e, e.return);
        } catch (w) {
          G(e, e.return, w);
        }
      }
      break;
    case 1:
      $e(t, e), qe(e), r & 512 && n !== null && Mn(n, n.return);
      break;
    case 5:
      if (
        ($e(t, e),
        qe(e),
        r & 512 && n !== null && Mn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          kr(i, "");
        } catch (w) {
          G(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && s.type === "radio" && s.name != null && Qd(i, s),
              Fo(l, o);
            var u = Fo(l, s);
            for (o = 0; o < a.length; o += 2) {
              var c = a[o],
                d = a[o + 1];
              c === "style"
                ? Jd(i, d)
                : c === "dangerouslySetInnerHTML"
                ? Zd(i, d)
                : c === "children"
                ? kr(i, d)
                : $l(i, c, d, u);
            }
            switch (l) {
              case "input":
                Ao(i, s);
                break;
              case "textarea":
                Yd(i, s);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var g = s.value;
                g != null
                  ? An(i, !!s.multiple, g, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? An(i, !!s.multiple, s.defaultValue, !0)
                      : An(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[Vr] = s;
          } catch (w) {
            G(e, e.return, w);
          }
      }
      break;
    case 6:
      if (($e(t, e), qe(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (w) {
          G(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        ($e(t, e), qe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Rr(t.containerInfo);
        } catch (w) {
          G(e, e.return, w);
        }
      break;
    case 4:
      $e(t, e), qe(e);
      break;
    case 13:
      $e(t, e),
        qe(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Ca = X())),
        r & 4 && oc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((fe = (u = fe) || c), $e(t, e), (fe = u)) : $e(t, e),
        qe(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (M = e, c = e.child; c !== null; ) {
            for (d = M = c; M !== null; ) {
              switch (((f = M), (g = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  yr(4, f, f.return);
                  break;
                case 1:
                  Mn(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (w) {
                      G(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Mn(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    ac(d);
                    continue;
                  }
              }
              g !== null ? ((g.return = f), (M = g)) : ac(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = d.stateNode),
                      (a = d.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = qd("display", o)));
              } catch (w) {
                G(e, e.return, w);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (w) {
                G(e, e.return, w);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      $e(t, e), qe(e), r & 4 && oc(e);
      break;
    case 21:
      break;
    default:
      $e(t, e), qe(e);
  }
}
function qe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (kh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (kr(i, ""), (r.flags &= -33));
          var s = sc(e);
          ml(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = sc(e);
          pl(e, l, o);
          break;
        default:
          throw Error(C(161));
      }
    } catch (a) {
      G(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Tv(e, t, n) {
  (M = e), Nh(e);
}
function Nh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var i = M,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || gi;
      if (!o) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || fe;
        l = gi;
        var u = fe;
        if (((gi = o), (fe = a) && !u))
          for (M = i; M !== null; )
            (o = M),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? uc(i)
                : a !== null
                ? ((a.return = o), (M = a))
                : uc(i);
        for (; s !== null; ) (M = s), Nh(s), (s = s.sibling);
        (M = i), (gi = l), (fe = u);
      }
      lc(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (M = s)) : lc(e);
  }
}
function lc(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              fe || js(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !fe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : We(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && Wu(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Wu(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Rr(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        fe || (t.flags & 512 && hl(t));
      } catch (f) {
        G(t, t.return, f);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function ac(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function uc(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            js(4, t);
          } catch (a) {
            G(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              G(t, i, a);
            }
          }
          var s = t.return;
          try {
            hl(t);
          } catch (a) {
            G(t, s, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            hl(t);
          } catch (a) {
            G(t, o, a);
          }
      }
    } catch (a) {
      G(t, t.return, a);
    }
    if (t === e) {
      M = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (M = l);
      break;
    }
    M = t.return;
  }
}
var Pv = Math.ceil,
  rs = gt.ReactCurrentDispatcher,
  xa = gt.ReactCurrentOwner,
  Be = gt.ReactCurrentBatchConfig,
  I = 0,
  re = null,
  q = null,
  oe = 0,
  Me = 0,
  Nn = Wt(0),
  ee = 0,
  br = null,
  fn = 0,
  Ms = 0,
  Sa = 0,
  wr = null,
  Se = null,
  Ca = 0,
  Kn = 1 / 0,
  it = null,
  is = !1,
  vl = null,
  Lt = null,
  yi = !1,
  kt = null,
  ss = 0,
  xr = 0,
  gl = null,
  Oi = -1,
  Li = 0;
function ye() {
  return I & 6 ? X() : Oi !== -1 ? Oi : (Oi = X());
}
function At(e) {
  return e.mode & 1
    ? I & 2 && oe !== 0
      ? oe & -oe
      : lv.transition !== null
      ? (Li === 0 && (Li = ff()), Li)
      : ((e = D),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : wf(e.type))),
        e)
    : 1;
}
function Qe(e, t, n, r) {
  if (50 < xr) throw ((xr = 0), (gl = null), Error(C(185)));
  Gr(e, n, r),
    (!(I & 2) || e !== re) &&
      (e === re && (!(I & 2) && (Ms |= n), ee === 4 && Pt(e, oe)),
      Ee(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((Kn = X() + 500), Ps && Ht()));
}
function Ee(e, t) {
  var n = e.callbackNode;
  l0(e, t);
  var r = Ui(e, e === re ? oe : 0);
  if (r === 0)
    n !== null && yu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && yu(n), t === 1))
      e.tag === 0 ? ov(cc.bind(null, e)) : zf(cc.bind(null, e)),
        nv(function () {
          !(I & 6) && Ht();
        }),
        (n = null);
    else {
      switch (hf(r)) {
        case 1:
          n = Ql;
          break;
        case 4:
          n = cf;
          break;
        case 16:
          n = bi;
          break;
        case 536870912:
          n = df;
          break;
        default:
          n = bi;
      }
      n = Dh(n, Rh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Rh(e, t) {
  if (((Oi = -1), (Li = 0), I & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (Fn() && e.callbackNode !== n) return null;
  var r = Ui(e, e === re ? oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = os(e, r);
  else {
    t = r;
    var i = I;
    I |= 2;
    var s = Oh();
    (re !== e || oe !== t) && ((it = null), (Kn = X() + 500), on(e, t));
    do
      try {
        jv();
        break;
      } catch (l) {
        _h(e, l);
      }
    while (!0);
    la(),
      (rs.current = s),
      (I = i),
      q !== null ? (t = 0) : ((re = null), (oe = 0), (t = ee));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Wo(e)), i !== 0 && ((r = i), (t = yl(e, i)))), t === 1)
    )
      throw ((n = br), on(e, 0), Pt(e, r), Ee(e, X()), n);
    if (t === 6) Pt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Ev(i) &&
          ((t = os(e, r)),
          t === 2 && ((s = Wo(e)), s !== 0 && ((r = s), (t = yl(e, s)))),
          t === 1))
      )
        throw ((n = br), on(e, 0), Pt(e, r), Ee(e, X()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          qt(e, Se, it);
          break;
        case 3:
          if (
            (Pt(e, r), (r & 130023424) === r && ((t = Ca + 500 - X()), 10 < t))
          ) {
            if (Ui(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ye(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = qo(qt.bind(null, e, Se, it), t);
            break;
          }
          qt(e, Se, it);
          break;
        case 4:
          if ((Pt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Ge(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = X() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Pv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = qo(qt.bind(null, e, Se, it), r);
            break;
          }
          qt(e, Se, it);
          break;
        case 5:
          qt(e, Se, it);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Ee(e, X()), e.callbackNode === n ? Rh.bind(null, e) : null;
}
function yl(e, t) {
  var n = wr;
  return (
    e.current.memoizedState.isDehydrated && (on(e, t).flags |= 256),
    (e = os(e, t)),
    e !== 2 && ((t = Se), (Se = n), t !== null && wl(t)),
    e
  );
}
function wl(e) {
  Se === null ? (Se = e) : Se.push.apply(Se, e);
}
function Ev(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!Ye(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Pt(e, t) {
  for (
    t &= ~Sa,
      t &= ~Ms,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ge(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function cc(e) {
  if (I & 6) throw Error(C(327));
  Fn();
  var t = Ui(e, 0);
  if (!(t & 1)) return Ee(e, X()), null;
  var n = os(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Wo(e);
    r !== 0 && ((t = r), (n = yl(e, r)));
  }
  if (n === 1) throw ((n = br), on(e, 0), Pt(e, t), Ee(e, X()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    qt(e, Se, it),
    Ee(e, X()),
    null
  );
}
function Ta(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((Kn = X() + 500), Ps && Ht());
  }
}
function hn(e) {
  kt !== null && kt.tag === 0 && !(I & 6) && Fn();
  var t = I;
  I |= 1;
  var n = Be.transition,
    r = D;
  try {
    if (((Be.transition = null), (D = 1), e)) return e();
  } finally {
    (D = r), (Be.transition = n), (I = t), !(I & 6) && Ht();
  }
}
function Pa() {
  (Me = Nn.current), B(Nn);
}
function on(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), tv(n)), q !== null))
    for (n = q.return; n !== null; ) {
      var r = n;
      switch ((ia(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Gi();
          break;
        case 3:
          Wn(), B(Te), B(me), ha();
          break;
        case 5:
          fa(r);
          break;
        case 4:
          Wn();
          break;
        case 13:
          B($);
          break;
        case 19:
          B($);
          break;
        case 10:
          aa(r.type._context);
          break;
        case 22:
        case 23:
          Pa();
      }
      n = n.return;
    }
  if (
    ((re = e),
    (q = e = Vt(e.current, null)),
    (oe = Me = t),
    (ee = 0),
    (br = null),
    (Sa = Ms = fn = 0),
    (Se = wr = null),
    nn !== null)
  ) {
    for (t = 0; t < nn.length; t++)
      if (((n = nn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    nn = null;
  }
  return e;
}
function _h(e, t) {
  do {
    var n = q;
    try {
      if ((la(), (Ni.current = ns), ts)) {
        for (var r = H.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        ts = !1;
      }
      if (
        ((dn = 0),
        (ne = J = H = null),
        (gr = !1),
        (zr = 0),
        (xa.current = null),
        n === null || n.return === null)
      ) {
        (ee = 1), (br = t), (q = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          l = n,
          a = t;
        if (
          ((t = oe),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = Zu(o);
          if (g !== null) {
            (g.flags &= -257),
              qu(g, o, l, s, t),
              g.mode & 1 && Xu(s, u, t),
              (t = g),
              (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Xu(s, u, t), Ea();
              break e;
            }
            a = Error(C(426));
          }
        } else if (U && l.mode & 1) {
          var E = Zu(o);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              qu(E, o, l, s, t),
              sa(Hn(a, l));
            break e;
          }
        }
        (s = a = Hn(a, l)),
          ee !== 4 && (ee = 2),
          wr === null ? (wr = [s]) : wr.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var m = ph(s, a, t);
              $u(s, m);
              break e;
            case 1:
              l = a;
              var h = s.type,
                p = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (Lt === null || !Lt.has(p))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var x = mh(s, l, t);
                $u(s, x);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Ah(n);
    } catch (S) {
      (t = S), q === n && n !== null && (q = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Oh() {
  var e = rs.current;
  return (rs.current = ns), e === null ? ns : e;
}
function Ea() {
  (ee === 0 || ee === 3 || ee === 2) && (ee = 4),
    re === null || (!(fn & 268435455) && !(Ms & 268435455)) || Pt(re, oe);
}
function os(e, t) {
  var n = I;
  I |= 2;
  var r = Oh();
  (re !== e || oe !== t) && ((it = null), on(e, t));
  do
    try {
      kv();
      break;
    } catch (i) {
      _h(e, i);
    }
  while (!0);
  if ((la(), (I = n), (rs.current = r), q !== null)) throw Error(C(261));
  return (re = null), (oe = 0), ee;
}
function kv() {
  for (; q !== null; ) Lh(q);
}
function jv() {
  for (; q !== null && !qm(); ) Lh(q);
}
function Lh(e) {
  var t = Ih(e.alternate, e, Me);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ah(e) : (q = t),
    (xa.current = null);
}
function Ah(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = xv(n, t)), n !== null)) {
        (n.flags &= 32767), (q = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ee = 6), (q = null);
        return;
      }
    } else if (((n = wv(n, t, Me)), n !== null)) {
      q = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      q = t;
      return;
    }
    q = t = e;
  } while (t !== null);
  ee === 0 && (ee = 5);
}
function qt(e, t, n) {
  var r = D,
    i = Be.transition;
  try {
    (Be.transition = null), (D = 1), Mv(e, t, n, r);
  } finally {
    (Be.transition = i), (D = r);
  }
  return null;
}
function Mv(e, t, n, r) {
  do Fn();
  while (kt !== null);
  if (I & 6) throw Error(C(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (a0(e, s),
    e === re && ((q = re = null), (oe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      yi ||
      ((yi = !0),
      Dh(bi, function () {
        return Fn(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Be.transition), (Be.transition = null);
    var o = D;
    D = 1;
    var l = I;
    (I |= 4),
      (xa.current = null),
      Cv(e, n),
      Mh(n, e),
      Q0(Xo),
      ($i = !!Yo),
      (Xo = Yo = null),
      (e.current = n),
      Tv(n),
      Jm(),
      (I = l),
      (D = o),
      (Be.transition = s);
  } else e.current = n;
  if (
    (yi && ((yi = !1), (kt = e), (ss = i)),
    (s = e.pendingLanes),
    s === 0 && (Lt = null),
    n0(n.stateNode),
    Ee(e, X()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (is) throw ((is = !1), (e = vl), (vl = null), e);
  return (
    ss & 1 && e.tag !== 0 && Fn(),
    (s = e.pendingLanes),
    s & 1 ? (e === gl ? xr++ : ((xr = 0), (gl = e))) : (xr = 0),
    Ht(),
    null
  );
}
function Fn() {
  if (kt !== null) {
    var e = hf(ss),
      t = Be.transition,
      n = D;
    try {
      if (((Be.transition = null), (D = 16 > e ? 16 : e), kt === null))
        var r = !1;
      else {
        if (((e = kt), (kt = null), (ss = 0), I & 6)) throw Error(C(331));
        var i = I;
        for (I |= 4, M = e.current; M !== null; ) {
          var s = M,
            o = s.child;
          if (M.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (M = u; M !== null; ) {
                  var c = M;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yr(8, c, s);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (M = d);
                  else
                    for (; M !== null; ) {
                      c = M;
                      var f = c.sibling,
                        g = c.return;
                      if ((Eh(c), c === u)) {
                        M = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = g), (M = f);
                        break;
                      }
                      M = g;
                    }
                }
              }
              var y = s.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var E = w.sibling;
                    (w.sibling = null), (w = E);
                  } while (w !== null);
                }
              }
              M = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (M = o);
          else
            e: for (; M !== null; ) {
              if (((s = M), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    yr(9, s, s.return);
                }
              var m = s.sibling;
              if (m !== null) {
                (m.return = s.return), (M = m);
                break e;
              }
              M = s.return;
            }
        }
        var h = e.current;
        for (M = h; M !== null; ) {
          o = M;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) (p.return = o), (M = p);
          else
            e: for (o = h; M !== null; ) {
              if (((l = M), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      js(9, l);
                  }
                } catch (S) {
                  G(l, l.return, S);
                }
              if (l === o) {
                M = null;
                break e;
              }
              var x = l.sibling;
              if (x !== null) {
                (x.return = l.return), (M = x);
                break e;
              }
              M = l.return;
            }
        }
        if (
          ((I = i), Ht(), tt && typeof tt.onPostCommitFiberRoot == "function")
        )
          try {
            tt.onPostCommitFiberRoot(ws, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (D = n), (Be.transition = t);
    }
  }
  return !1;
}
function dc(e, t, n) {
  (t = Hn(n, t)),
    (t = ph(e, t, 1)),
    (e = Ot(e, t, 1)),
    (t = ye()),
    e !== null && (Gr(e, 1, t), Ee(e, t));
}
function G(e, t, n) {
  if (e.tag === 3) dc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        dc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Lt === null || !Lt.has(r)))
        ) {
          (e = Hn(n, e)),
            (e = mh(t, e, 1)),
            (t = Ot(t, e, 1)),
            (e = ye()),
            t !== null && (Gr(t, 1, e), Ee(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Nv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ye()),
    (e.pingedLanes |= e.suspendedLanes & n),
    re === e &&
      (oe & n) === n &&
      (ee === 4 || (ee === 3 && (oe & 130023424) === oe && 500 > X() - Ca)
        ? on(e, 0)
        : (Sa |= n)),
    Ee(e, t);
}
function Vh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ai), (ai <<= 1), !(ai & 130023424) && (ai = 4194304))
      : (t = 1));
  var n = ye();
  (e = mt(e, t)), e !== null && (Gr(e, t, n), Ee(e, n));
}
function Rv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Vh(e, n);
}
function _v(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  r !== null && r.delete(t), Vh(e, n);
}
var Ih;
Ih = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Te.current) Ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ce = !1), yv(e, t, n);
      Ce = !!(e.flags & 131072);
    }
  else (Ce = !1), U && t.flags & 1048576 && Ff(t, Xi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      _i(e, t), (e = t.pendingProps);
      var i = bn(t, me.current);
      zn(t, n), (i = ma(null, t, r, e, i, n));
      var s = va();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Pe(r) ? ((s = !0), Qi(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            ca(t),
            (i.updater = Es),
            (t.stateNode = i),
            (i._reactInternals = t),
            sl(t, r, e, n),
            (t = al(null, t, r, !0, s, n)))
          : ((t.tag = 0), U && s && ra(t), ve(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (_i(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Lv(r)),
          (e = We(r, e)),
          i)
        ) {
          case 0:
            t = ll(null, t, r, e, n);
            break e;
          case 1:
            t = tc(null, t, r, e, n);
            break e;
          case 11:
            t = Ju(null, t, r, e, n);
            break e;
          case 14:
            t = ec(null, t, r, We(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : We(r, i)),
        ll(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : We(r, i)),
        tc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((wh(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          $f(e, t),
          Ji(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = Hn(Error(C(423)), t)), (t = nc(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Hn(Error(C(424)), t)), (t = nc(e, t, r, n, i));
            break e;
          } else
            for (
              Ne = _t(t.stateNode.containerInfo.firstChild),
                Re = t,
                U = !0,
                Ke = null,
                n = Gf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Un(), r === i)) {
            t = vt(e, t, n);
            break e;
          }
          ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Qf(t),
        e === null && nl(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Zo(r, i) ? (o = null) : s !== null && Zo(r, s) && (t.flags |= 32),
        yh(e, t),
        ve(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && nl(t), null;
    case 13:
      return xh(e, t, n);
    case 4:
      return (
        da(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = $n(t, null, r, n)) : ve(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : We(r, i)),
        Ju(e, t, r, i, n)
      );
    case 7:
      return ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          z(Zi, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (Ye(s.value, o)) {
            if (s.children === i.children && !Te.current) {
              t = vt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                o = s.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      (a = ut(-1, n & -n)), (a.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      rl(s.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(C(341));
                (o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  rl(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        ve(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        zn(t, n),
        (i = be(i)),
        (r = r(i)),
        (t.flags |= 1),
        ve(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = We(r, t.pendingProps)),
        (i = We(r.type, i)),
        ec(e, t, r, i, n)
      );
    case 15:
      return vh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : We(r, i)),
        _i(e, t),
        (t.tag = 1),
        Pe(r) ? ((e = !0), Qi(t)) : (e = !1),
        zn(t, n),
        Hf(t, r, i),
        sl(t, r, i, n),
        al(null, t, r, !0, e, n)
      );
    case 19:
      return Sh(e, t, n);
    case 22:
      return gh(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function Dh(e, t) {
  return uf(e, t);
}
function Ov(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Fe(e, t, n, r) {
  return new Ov(e, t, n, r);
}
function ka(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Lv(e) {
  if (typeof e == "function") return ka(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Hl)) return 11;
    if (e === Kl) return 14;
  }
  return 2;
}
function Vt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Fe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ai(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) ka(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case wn:
        return ln(n.children, i, s, t);
      case Wl:
        (o = 8), (i |= 8);
        break;
      case No:
        return (
          (e = Fe(12, n, t, i | 2)), (e.elementType = No), (e.lanes = s), e
        );
      case Ro:
        return (e = Fe(13, n, t, i)), (e.elementType = Ro), (e.lanes = s), e;
      case _o:
        return (e = Fe(19, n, t, i)), (e.elementType = _o), (e.lanes = s), e;
      case Hd:
        return Ns(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case $d:
              o = 10;
              break e;
            case Wd:
              o = 9;
              break e;
            case Hl:
              o = 11;
              break e;
            case Kl:
              o = 14;
              break e;
            case xt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Fe(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function ln(e, t, n, r) {
  return (e = Fe(7, e, r, t)), (e.lanes = n), e;
}
function Ns(e, t, n, r) {
  return (
    (e = Fe(22, e, r, t)),
    (e.elementType = Hd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function fo(e, t, n) {
  return (e = Fe(6, e, null, t)), (e.lanes = n), e;
}
function ho(e, t, n) {
  return (
    (t = Fe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Av(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ks(0)),
    (this.expirationTimes = Ks(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ks(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function ja(e, t, n, r, i, s, o, l, a) {
  return (
    (e = new Av(e, t, n, l, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Fe(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ca(s),
    e
  );
}
function Vv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: yn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function zh(e) {
  if (!e) return Ft;
  e = e._reactInternals;
  e: {
    if (mn(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Pe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Pe(n)) return Df(e, n, t);
  }
  return t;
}
function Fh(e, t, n, r, i, s, o, l, a) {
  return (
    (e = ja(n, r, !0, e, i, s, o, l, a)),
    (e.context = zh(null)),
    (n = e.current),
    (r = ye()),
    (i = At(n)),
    (s = ut(r, i)),
    (s.callback = t ?? null),
    Ot(n, s, i),
    (e.current.lanes = i),
    Gr(e, i, r),
    Ee(e, r),
    e
  );
}
function Rs(e, t, n, r) {
  var i = t.current,
    s = ye(),
    o = At(i);
  return (
    (n = zh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ut(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ot(i, t, o)),
    e !== null && (Qe(e, i, o, s), Mi(e, i, o)),
    o
  );
}
function ls(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function fc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ma(e, t) {
  fc(e, t), (e = e.alternate) && fc(e, t);
}
function Iv() {
  return null;
}
var Bh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Na(e) {
  this._internalRoot = e;
}
_s.prototype.render = Na.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  Rs(e, t, null, null);
};
_s.prototype.unmount = Na.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    hn(function () {
      Rs(null, e, null, null);
    }),
      (t[pt] = null);
  }
};
function _s(e) {
  this._internalRoot = e;
}
_s.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = vf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++);
    Tt.splice(n, 0, e), n === 0 && yf(e);
  }
};
function Ra(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Os(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function hc() {}
function Dv(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = ls(o);
        s.call(u);
      };
    }
    var o = Fh(t, r, e, 0, null, !1, !1, "", hc);
    return (
      (e._reactRootContainer = o),
      (e[pt] = o.current),
      Lr(e.nodeType === 8 ? e.parentNode : e),
      hn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = ls(a);
      l.call(u);
    };
  }
  var a = ja(e, 0, !1, null, null, !1, !1, "", hc);
  return (
    (e._reactRootContainer = a),
    (e[pt] = a.current),
    Lr(e.nodeType === 8 ? e.parentNode : e),
    hn(function () {
      Rs(t, a, n, r);
    }),
    a
  );
}
function Ls(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = ls(o);
        l.call(a);
      };
    }
    Rs(t, o, e, i);
  } else o = Dv(n, t, e, i, r);
  return ls(o);
}
pf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ur(t.pendingLanes);
        n !== 0 &&
          (Yl(t, n | 1), Ee(t, X()), !(I & 6) && ((Kn = X() + 500), Ht()));
      }
      break;
    case 13:
      hn(function () {
        var r = mt(e, 1);
        if (r !== null) {
          var i = ye();
          Qe(r, e, 1, i);
        }
      }),
        Ma(e, 1);
  }
};
Xl = function (e) {
  if (e.tag === 13) {
    var t = mt(e, 134217728);
    if (t !== null) {
      var n = ye();
      Qe(t, e, 134217728, n);
    }
    Ma(e, 134217728);
  }
};
mf = function (e) {
  if (e.tag === 13) {
    var t = At(e),
      n = mt(e, t);
    if (n !== null) {
      var r = ye();
      Qe(n, e, t, r);
    }
    Ma(e, t);
  }
};
vf = function () {
  return D;
};
gf = function (e, t) {
  var n = D;
  try {
    return (D = e), t();
  } finally {
    D = n;
  }
};
bo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ao(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ts(r);
            if (!i) throw Error(C(90));
            Gd(r), Ao(r, i);
          }
        }
      }
      break;
    case "textarea":
      Yd(e, n);
      break;
    case "select":
      (t = n.value), t != null && An(e, !!n.multiple, t, !1);
  }
};
nf = Ta;
rf = hn;
var zv = { usingClientEntryPoint: !1, Events: [Yr, Tn, Ts, ef, tf, Ta] },
  sr = {
    findFiberByHostInstance: tn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Fv = {
    bundleType: sr.bundleType,
    version: sr.version,
    rendererPackageName: sr.rendererPackageName,
    rendererConfig: sr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: gt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = lf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: sr.findFiberByHostInstance || Iv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var wi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wi.isDisabled && wi.supportsFiber)
    try {
      (ws = wi.inject(Fv)), (tt = wi);
    } catch {}
}
Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zv;
Le.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ra(t)) throw Error(C(200));
  return Vv(e, t, null, n);
};
Le.createRoot = function (e, t) {
  if (!Ra(e)) throw Error(C(299));
  var n = !1,
    r = "",
    i = Bh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = ja(e, 1, !1, null, null, n, !1, r, i)),
    (e[pt] = t.current),
    Lr(e.nodeType === 8 ? e.parentNode : e),
    new Na(t)
  );
};
Le.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = lf(t)), (e = e === null ? null : e.stateNode), e;
};
Le.flushSync = function (e) {
  return hn(e);
};
Le.hydrate = function (e, t, n) {
  if (!Os(t)) throw Error(C(200));
  return Ls(null, e, t, !0, n);
};
Le.hydrateRoot = function (e, t, n) {
  if (!Ra(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = Bh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Fh(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[pt] = t.current),
    Lr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new _s(t);
};
Le.render = function (e, t, n) {
  if (!Os(t)) throw Error(C(200));
  return Ls(null, e, t, !1, n);
};
Le.unmountComponentAtNode = function (e) {
  if (!Os(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (hn(function () {
        Ls(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[pt] = null);
        });
      }),
      !0)
    : !1;
};
Le.unstable_batchedUpdates = Ta;
Le.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Os(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Ls(e, t, n, !1, r);
};
Le.version = "18.2.0-next-9e3b772b8-20220608";
function bh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bh);
    } catch (e) {
      console.error(e);
    }
}
bh(), (zd.exports = Le);
var Bv = zd.exports,
  pc = Bv;
(jo.createRoot = pc.createRoot), (jo.hydrateRoot = pc.hydrateRoot);
function bv() {
  return v.jsxs("div", {
    className:
      "fixed z-[999] w-full px-20 py-8 font-['NeueMontreal'] flex justify-between items-center",
    children: [
      v.jsx("div", {
        className: "logo",
        children: v.jsxs("svg", {
          width: "72",
          height: "30",
          viewBox: "0 0 72 30",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            v.jsx("path", {
              d: "M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z",
              fill: "currentColor",
            }),
            v.jsx("path", {
              d: "M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z",
              fill: "currentColor",
            }),
            v.jsx("path", {
              d: "M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z",
              fill: "currentColor",
            }),
            v.jsx("path", {
              d: "M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z",
              fill: "currentColor",
            }),
            v.jsx("path", {
              d: "M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z",
              fill: "currentColor",
            }),
          ],
        }),
      }),
      v.jsx("div", {
        className: "links flex gap-10",
        children: [
          "Services",
          "Our Work",
          "About Us",
          "Insights",
          "Contact",
        ].map((e, t) =>
          v.jsxs(
            "a",
            {
              className: `text-lg font-light capitalize ${t === 4 && "ml-32"}`,
              children: [" ", e, " "],
            },
            t
          )
        ),
      }),
    ],
  });
}
const Uh = _.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  As = _.createContext({}),
  _a = _.createContext(null),
  Oa = typeof document < "u",
  $h = Oa ? _.useLayoutEffect : _.useEffect,
  Wh = _.createContext({ strict: !1 }),
  La = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Uv = "framerAppearId",
  Hh = "data-" + La(Uv),
  $v = { skipAnimations: !1, useManualTiming: !1 };
class mc {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function Wv(e) {
  let t = new mc(),
    n = new mc(),
    r = 0,
    i = !1,
    s = !1;
  const o = new WeakSet(),
    l = {
      schedule: (a, u = !1, c = !1) => {
        const d = c && i,
          f = d ? t : n;
        return u && o.add(a), f.add(a) && d && i && (r = t.order.length), a;
      },
      cancel: (a) => {
        n.remove(a), o.delete(a);
      },
      process: (a) => {
        if (i) {
          s = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let u = 0; u < r; u++) {
            const c = t.order[u];
            o.has(c) && (l.schedule(c), e()), c(a);
          }
        (i = !1), s && ((s = !1), l.process(a));
      },
    };
  return l;
}
const xi = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  Hv = 40;
function Kh(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = xi.reduce((d, f) => ((d[f] = Wv(() => (n = !0))), d), {}),
    o = (d) => {
      s[d].process(i);
    },
    l = () => {
      const d = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(d - i.timestamp, Hv), 1)),
        (i.timestamp = d),
        (i.isProcessing = !0),
        xi.forEach(o),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(l));
    },
    a = () => {
      (n = !0), (r = !0), i.isProcessing || e(l);
    };
  return {
    schedule: xi.reduce((d, f) => {
      const g = s[f];
      return (d[f] = (y, w = !1, E = !1) => (n || a(), g.schedule(y, w, E))), d;
    }, {}),
    cancel: (d) => xi.forEach((f) => s[f].cancel(d)),
    state: i,
    steps: s,
  };
}
const { schedule: Aa, cancel: Mx } = Kh(queueMicrotask, !1);
function Kv(e, t, n, r) {
  const { visualElement: i } = _.useContext(As),
    s = _.useContext(Wh),
    o = _.useContext(_a),
    l = _.useContext(Uh).reducedMotion,
    a = _.useRef();
  (r = r || s.renderer),
    !a.current &&
      r &&
      (a.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: o,
        blockInitialAnimation: o ? o.initial === !1 : !1,
        reducedMotionConfig: l,
      }));
  const u = a.current;
  _.useInsertionEffect(() => {
    u && u.update(n, o);
  });
  const c = _.useRef(!!(n[Hh] && !window.HandoffComplete));
  return (
    $h(() => {
      u &&
        (Aa.postRender(u.render),
        c.current && u.animationState && u.animationState.animateChanges());
    }),
    _.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        c.current && ((c.current = !1), (window.HandoffComplete = !0)));
    }),
    u
  );
}
function Rn(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Gv(e, t, n) {
  return _.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Rn(n) && (n.current = r));
    },
    [t]
  );
}
function Ur(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Vs(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Va = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Ia = ["initial", ...Va];
function Is(e) {
  return Vs(e.animate) || Ia.some((t) => Ur(e[t]));
}
function Gh(e) {
  return !!(Is(e) || e.variants);
}
function Qv(e, t) {
  if (Is(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Ur(n) ? n : void 0,
      animate: Ur(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Yv(e) {
  const { initial: t, animate: n } = Qv(e, _.useContext(As));
  return _.useMemo(() => ({ initial: t, animate: n }), [vc(t), vc(n)]);
}
function vc(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const gc = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  $r = {};
for (const e in gc) $r[e] = { isEnabled: (t) => gc[e].some((n) => !!t[n]) };
function Xv(e) {
  for (const t in e) $r[t] = { ...$r[t], ...e[t] };
}
const Qh = _.createContext({}),
  Yh = _.createContext({}),
  Zv = Symbol.for("motionComponentSymbol");
function qv({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && Xv(e);
  function s(l, a) {
    let u;
    const c = { ..._.useContext(Uh), ...l, layoutId: Jv(l) },
      { isStatic: d } = c,
      f = Yv(l),
      g = r(l, d);
    if (!d && Oa) {
      f.visualElement = Kv(i, g, c, t);
      const y = _.useContext(Yh),
        w = _.useContext(Wh).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(c, w, e, y));
    }
    return v.jsxs(As.Provider, {
      value: f,
      children: [
        u && f.visualElement
          ? v.jsx(u, { visualElement: f.visualElement, ...c })
          : null,
        n(i, l, Gv(g, f.visualElement, a), g, d, f.visualElement),
      ],
    });
  }
  const o = _.forwardRef(s);
  return (o[Zv] = i), o;
}
function Jv({ layoutId: e }) {
  const t = _.useContext(Qh).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function eg(e) {
  function t(r, i = {}) {
    return qv(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
const tg = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Da(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(tg.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
const as = {};
function ng(e) {
  Object.assign(as, e);
}
const Zr = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  vn = new Set(Zr);
function Xh(e, { layout: t, layoutId: n }) {
  return (
    vn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!as[e] || e === "opacity"))
  );
}
const he = (e) => !!(e && e.getVelocity),
  rg = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  ig = Zr.length;
function sg(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let s = "";
  for (let o = 0; o < ig; o++) {
    const l = Zr[o];
    if (e[l] !== void 0) {
      const a = rg[l] || l;
      s += `${a}(${e[l]}) `;
    }
  }
  return (
    t && !e.z && (s += "translateZ(0)"),
    (s = s.trim()),
    i ? (s = i(e, r ? "" : s)) : n && r && (s = "none"),
    s
  );
}
const Zh = (e) => (t) => typeof t == "string" && t.startsWith(e),
  qh = Zh("--"),
  og = Zh("var(--"),
  za = (e) => (og(e) ? lg.test(e.split("/*")[0].trim()) : !1),
  lg =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  ag = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Bt = (e, t, n) => (n > t ? t : n < e ? e : n),
  Zn = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Sr = { ...Zn, transform: (e) => Bt(0, 1, e) },
  Si = { ...Zn, default: 1 },
  Cr = (e) => Math.round(e * 1e5) / 1e5,
  Fa = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  ug =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  cg =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function qr(e) {
  return typeof e == "string";
}
const Jr = (e) => ({
    test: (t) => qr(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  wt = Jr("deg"),
  rt = Jr("%"),
  R = Jr("px"),
  dg = Jr("vh"),
  fg = Jr("vw"),
  yc = {
    ...rt,
    parse: (e) => rt.parse(e) / 100,
    transform: (e) => rt.transform(e * 100),
  },
  wc = { ...Zn, transform: Math.round },
  Jh = {
    borderWidth: R,
    borderTopWidth: R,
    borderRightWidth: R,
    borderBottomWidth: R,
    borderLeftWidth: R,
    borderRadius: R,
    radius: R,
    borderTopLeftRadius: R,
    borderTopRightRadius: R,
    borderBottomRightRadius: R,
    borderBottomLeftRadius: R,
    width: R,
    maxWidth: R,
    height: R,
    maxHeight: R,
    size: R,
    top: R,
    right: R,
    bottom: R,
    left: R,
    padding: R,
    paddingTop: R,
    paddingRight: R,
    paddingBottom: R,
    paddingLeft: R,
    margin: R,
    marginTop: R,
    marginRight: R,
    marginBottom: R,
    marginLeft: R,
    rotate: wt,
    rotateX: wt,
    rotateY: wt,
    rotateZ: wt,
    scale: Si,
    scaleX: Si,
    scaleY: Si,
    scaleZ: Si,
    skew: wt,
    skewX: wt,
    skewY: wt,
    distance: R,
    translateX: R,
    translateY: R,
    translateZ: R,
    x: R,
    y: R,
    z: R,
    perspective: R,
    transformPerspective: R,
    opacity: Sr,
    originX: yc,
    originY: yc,
    originZ: R,
    zIndex: wc,
    backgroundPositionX: R,
    backgroundPositionY: R,
    fillOpacity: Sr,
    strokeOpacity: Sr,
    numOctaves: wc,
  };
function Ba(e, t, n, r) {
  const { style: i, vars: s, transform: o, transformOrigin: l } = e;
  let a = !1,
    u = !1,
    c = !0;
  for (const d in t) {
    const f = t[d];
    if (qh(d)) {
      s[d] = f;
      continue;
    }
    const g = Jh[d],
      y = ag(f, g);
    if (vn.has(d)) {
      if (((a = !0), (o[d] = y), !c)) continue;
      f !== (g.default || 0) && (c = !1);
    } else d.startsWith("origin") ? ((u = !0), (l[d] = y)) : (i[d] = y);
  }
  if (
    (t.transform ||
      (a || r
        ? (i.transform = sg(e.transform, n, c, r))
        : i.transform && (i.transform = "none")),
    u)
  ) {
    const { originX: d = "50%", originY: f = "50%", originZ: g = 0 } = l;
    i.transformOrigin = `${d} ${f} ${g}`;
  }
}
const ba = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function ep(e, t, n) {
  for (const r in t) !he(t[r]) && !Xh(r, n) && (e[r] = t[r]);
}
function hg({ transformTemplate: e }, t, n) {
  return _.useMemo(() => {
    const r = ba();
    return (
      Ba(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function pg(e, t, n) {
  const r = e.style || {},
    i = {};
  return ep(i, r, e), Object.assign(i, hg(e, t, n)), i;
}
function mg(e, t, n) {
  const r = {},
    i = pg(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const vg = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function us(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    vg.has(e)
  );
}
let tp = (e) => !us(e);
function gg(e) {
  e && (tp = (t) => (t.startsWith("on") ? !us(t) : e(t)));
}
try {
  gg(require("@emotion/is-prop-valid").default);
} catch {}
function yg(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((tp(i) ||
        (n === !0 && us(i)) ||
        (!t && !us(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function xc(e, t, n) {
  return typeof e == "string" ? e : R.transform(t + n * e);
}
function wg(e, t, n) {
  const r = xc(t, e.x, e.width),
    i = xc(n, e.y, e.height);
  return `${r} ${i}`;
}
const xg = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Sg = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Cg(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? xg : Sg;
  e[s.offset] = R.transform(-r);
  const o = R.transform(t),
    l = R.transform(n);
  e[s.array] = `${o} ${l}`;
}
function Ua(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: o,
    pathSpacing: l = 1,
    pathOffset: a = 0,
    ...u
  },
  c,
  d,
  f
) {
  if ((Ba(e, u, c, f), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: g, style: y, dimensions: w } = e;
  g.transform && (w && (y.transform = g.transform), delete g.transform),
    w &&
      (i !== void 0 || s !== void 0 || y.transform) &&
      (y.transformOrigin = wg(
        w,
        i !== void 0 ? i : 0.5,
        s !== void 0 ? s : 0.5
      )),
    t !== void 0 && (g.x = t),
    n !== void 0 && (g.y = n),
    r !== void 0 && (g.scale = r),
    o !== void 0 && Cg(g, o, l, a, !1);
}
const np = () => ({ ...ba(), attrs: {} }),
  $a = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Tg(e, t, n, r) {
  const i = _.useMemo(() => {
    const s = np();
    return (
      Ua(s, t, { enableHardwareAcceleration: !1 }, $a(r), e.transformTemplate),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    ep(s, e.style, e), (i.style = { ...s, ...i.style });
  }
  return i;
}
function Pg(e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const a = (Da(n) ? Tg : mg)(r, s, o, n),
      u = yg(r, typeof n == "string", e),
      c = n !== _.Fragment ? { ...u, ...a, ref: i } : {},
      { children: d } = r,
      f = _.useMemo(() => (he(d) ? d.get() : d), [d]);
    return _.createElement(n, { ...c, children: f });
  };
}
function rp(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n) e.style.setProperty(s, n[s]);
}
const ip = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function sp(e, t, n, r) {
  rp(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(ip.has(i) ? i : La(i), t.attrs[i]);
}
function Wa(e, t, n) {
  var r;
  const { style: i } = e,
    s = {};
  for (const o in i)
    (he(i[o]) ||
      (t.style && he(t.style[o])) ||
      Xh(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (s[o] = i[o]);
  return s;
}
function op(e, t, n) {
  const r = Wa(e, t, n);
  for (const i in e)
    if (he(e[i]) || he(t[i])) {
      const s =
        Zr.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[s] = e[i];
    }
  return r;
}
function Ha(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
function lp(e) {
  const t = _.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const xl = (e) => Array.isArray(e),
  Eg = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  kg = (e) => (xl(e) ? e[e.length - 1] || 0 : e);
function Vi(e) {
  const t = he(e) ? e.get() : e;
  return Eg(t) ? t.toValue() : t;
}
function jg(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  s
) {
  const o = { latestValues: Mg(r, i, s, e), renderState: t() };
  return n && (o.mount = (l) => n(r, l, o)), o;
}
const ap = (e) => (t, n) => {
  const r = _.useContext(As),
    i = _.useContext(_a),
    s = () => jg(e, t, r, i);
  return n ? s() : lp(s);
};
function Mg(e, t, n, r) {
  const i = {},
    s = r(e, {});
  for (const f in s) i[f] = Vi(s[f]);
  let { initial: o, animate: l } = e;
  const a = Is(e),
    u = Gh(e);
  t &&
    u &&
    !a &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), l === void 0 && (l = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const d = c ? l : o;
  return (
    d &&
      typeof d != "boolean" &&
      !Vs(d) &&
      (Array.isArray(d) ? d : [d]).forEach((g) => {
        const y = Ha(e, g);
        if (!y) return;
        const { transitionEnd: w, transition: E, ...m } = y;
        for (const h in m) {
          let p = m[h];
          if (Array.isArray(p)) {
            const x = c ? p.length - 1 : 0;
            p = p[x];
          }
          p !== null && (i[h] = p);
        }
        for (const h in w) i[h] = w[h];
      }),
    i
  );
}
const pe = (e) => e,
  {
    schedule: le,
    cancel: bt,
    state: se,
    steps: po,
  } = Kh(typeof requestAnimationFrame < "u" ? requestAnimationFrame : pe, !0),
  Ng = {
    useVisualState: ap({
      scrapeMotionValuesFromProps: op,
      createRenderState: np,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        le.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          le.render(() => {
            Ua(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              $a(t.tagName),
              e.transformTemplate
            ),
              sp(t, n);
          });
      },
    }),
  },
  Rg = {
    useVisualState: ap({
      scrapeMotionValuesFromProps: Wa,
      createRenderState: ba,
    }),
  };
function _g(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(Da(e) ? Ng : Rg),
    preloadedFeatures: n,
    useRender: Pg(t),
    createVisualElement: r,
    Component: e,
  };
}
function at(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const up = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Ds(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const Og = (e) => (t) => up(t) && e(t, Ds(t));
function ct(e, t, n, r) {
  return at(e, t, Og(n), r);
}
const Lg = (e, t) => (n) => t(e(n)),
  dt = (...e) => e.reduce(Lg);
function cp(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const Sc = cp("dragHorizontal"),
  Cc = cp("dragVertical");
function dp(e) {
  let t = !1;
  if (e === "y") t = Cc();
  else if (e === "x") t = Sc();
  else {
    const n = Sc(),
      r = Cc();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function fp() {
  const e = dp(!0);
  return e ? (e(), !1) : !0;
}
class Kt {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function Tc(e, t) {
  const n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    i = (s, o) => {
      if (s.pointerType === "touch" || fp()) return;
      const l = e.getProps();
      e.animationState &&
        l.whileHover &&
        e.animationState.setActive("whileHover", t);
      const a = l[r];
      a && a(s, o);
    };
  return ct(e.current, n, i, { passive: !e.getProps()[r] });
}
class Ag extends Kt {
  mount() {
    this.unmount = dt(Tc(this.node, !0), Tc(this.node, !1));
  }
  unmount() {}
}
class Vg extends Kt {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = dt(
      at(this.node.current, "focus", () => this.onFocus()),
      at(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const hp = (e, t) => (t ? (e === t ? !0 : hp(e, t.parentElement)) : !1);
function mo(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Ds(n));
}
class Ig extends Kt {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = pe),
      (this.removeEndListeners = pe),
      (this.removeAccessibleListeners = pe),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          s = ct(
            window,
            "pointerup",
            (l, a) => {
              if (!this.checkPressEnd()) return;
              const {
                onTap: u,
                onTapCancel: c,
                globalTapTarget: d,
              } = this.node.getProps();
              !d && !hp(this.node.current, l.target)
                ? c && c(l, a)
                : u && u(l, a);
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          o = ct(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = dt(s, o)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (s) => {
            if (s.key !== "Enter" || this.isPressing) return;
            const o = (l) => {
              l.key !== "Enter" ||
                !this.checkPressEnd() ||
                mo("up", (a, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && c(a, u);
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = at(this.node.current, "keyup", o)),
              mo("down", (l, a) => {
                this.startPress(l, a);
              });
          },
          n = at(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && mo("cancel", (s, o) => this.cancelPress(s, o));
          },
          i = at(this.node.current, "blur", r);
        this.removeAccessibleListeners = dt(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && r(t, n);
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !fp()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && r(t, n);
  }
  mount() {
    const t = this.node.getProps(),
      n = ct(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = at(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = dt(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Sl = new WeakMap(),
  vo = new WeakMap(),
  Dg = (e) => {
    const t = Sl.get(e.target);
    t && t(e);
  },
  zg = (e) => {
    e.forEach(Dg);
  };
function Fg({ root: e, ...t }) {
  const n = e || document;
  vo.has(n) || vo.set(n, {});
  const r = vo.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(zg, { root: e, ...t })), r[i];
}
function Bg(e, t, n) {
  const r = Fg(t);
  return (
    Sl.set(e, n),
    r.observe(e),
    () => {
      Sl.delete(e), r.unobserve(e);
    }
  );
}
const bg = { some: 0, all: 1 };
class Ug extends Kt {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : bg[i],
      },
      l = (a) => {
        const { isIntersecting: u } = a;
        if (
          this.isInView === u ||
          ((this.isInView = u), s && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(a);
      };
    return Bg(this.node.current, o, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some($g(t, n)) && this.startObserver();
  }
  unmount() {}
}
function $g({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Wg = {
  inView: { Feature: Ug },
  tap: { Feature: Ig },
  focus: { Feature: Vg },
  hover: { Feature: Ag },
};
function pp(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Hg(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function Kg(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function zs(e, t, n) {
  const r = e.getProps();
  return Ha(r, t, n !== void 0 ? n : r.custom, Hg(e), Kg(e));
}
const It = (e) => e * 1e3,
  ft = (e) => e / 1e3,
  Gg = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Qg = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Yg = { type: "keyframes", duration: 0.8 },
  Xg = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Zg = (e, { keyframes: t }) =>
    t.length > 2
      ? Yg
      : vn.has(e)
      ? e.startsWith("scale")
        ? Qg(t[1])
        : Gg
      : Xg;
function qg({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: o,
  repeatDelay: l,
  from: a,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function Ka(e, t) {
  return e[t] || e.default || e;
}
const Jg = (e) => e !== null;
function Fs(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(Jg),
    s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r;
}
let Ii;
function ey() {
  Ii = void 0;
}
const Dt = {
    now: () => (
      Ii === void 0 &&
        Dt.set(
          se.isProcessing || $v.useManualTiming
            ? se.timestamp
            : performance.now()
        ),
      Ii
    ),
    set: (e) => {
      (Ii = e), queueMicrotask(ey);
    },
  },
  mp = (e) => /^0[^.\s]+$/u.test(e);
function ty(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || mp(e)
    : !0;
}
let vp = pe;
const gp = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  ny = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function ry(e) {
  const t = ny.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function yp(e, t, n = 1) {
  const [r, i] = ry(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return gp(o) ? parseFloat(o) : o;
  }
  return za(i) ? yp(i, t, n + 1) : i;
}
const iy = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  Pc = (e) => e === Zn || e === R,
  Ec = (e, t) => parseFloat(e.split(", ")[t]),
  kc =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return Ec(i[1], t);
      {
        const s = r.match(/^matrix\((.+)\)$/u);
        return s ? Ec(s[1], e) : 0;
      }
    },
  sy = new Set(["x", "y", "z"]),
  oy = Zr.filter((e) => !sy.has(e));
function ly(e) {
  const t = [];
  return (
    oy.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Gn = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: kc(4, 13),
  y: kc(5, 14),
};
Gn.translateX = Gn.x;
Gn.translateY = Gn.y;
const wp = (e) => (t) => t.test(e),
  ay = { test: (e) => e === "auto", parse: (e) => e },
  xp = [Zn, R, rt, wt, fg, dg, ay],
  jc = (e) => xp.find(wp(e)),
  an = new Set();
let Cl = !1,
  Tl = !1;
function Sp() {
  if (Tl) {
    const e = Array.from(an).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = ly(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, o]) => {
            var l;
            (l = r.getValue(s)) === null || l === void 0 || l.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Tl = !1), (Cl = !1), an.forEach((e) => e.complete()), an.clear();
}
function Cp() {
  an.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Tl = !0);
  });
}
function uy() {
  Cp(), Sp();
}
class Ga {
  constructor(t, n, r, i, s, o = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (an.add(this),
          Cl || ((Cl = !0), le.read(Cp), le.resolveKeyframes(Sp)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const o = i == null ? void 0 : i.get(),
            l = t[t.length - 1];
          if (o !== void 0) t[0] = o;
          else if (r && n) {
            const a = r.readValue(n, l);
            a != null && (t[0] = a);
          }
          t[0] === void 0 && (t[0] = l), i && o === void 0 && i.set(t[0]);
        } else t[s] = t[s - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      an.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), an.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Qa = (e, t) => (n) =>
    !!(
      (qr(n) && cg.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Tp = (e, t, n) => (r) => {
    if (!qr(r)) return r;
    const [i, s, o, l] = r.match(Fa);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    };
  },
  cy = (e) => Bt(0, 255, e),
  go = { ...Zn, transform: (e) => Math.round(cy(e)) },
  sn = {
    test: Qa("rgb", "red"),
    parse: Tp("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      go.transform(e) +
      ", " +
      go.transform(t) +
      ", " +
      go.transform(n) +
      ", " +
      Cr(Sr.transform(r)) +
      ")",
  };
function dy(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Pl = { test: Qa("#"), parse: dy, transform: sn.transform },
  _n = {
    test: Qa("hsl", "hue"),
    parse: Tp("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      rt.transform(Cr(t)) +
      ", " +
      rt.transform(Cr(n)) +
      ", " +
      Cr(Sr.transform(r)) +
      ")",
  },
  de = {
    test: (e) => sn.test(e) || Pl.test(e) || _n.test(e),
    parse: (e) =>
      sn.test(e) ? sn.parse(e) : _n.test(e) ? _n.parse(e) : Pl.parse(e),
    transform: (e) =>
      qr(e) ? e : e.hasOwnProperty("red") ? sn.transform(e) : _n.transform(e),
  };
function fy(e) {
  var t, n;
  return (
    isNaN(e) &&
    qr(e) &&
    (((t = e.match(Fa)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(ug)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Pp = "number",
  Ep = "color",
  hy = "var",
  py = "var(",
  Mc = "${}",
  my =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function cs(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const l = t
    .replace(
      my,
      (a) => (
        de.test(a)
          ? (r.color.push(s), i.push(Ep), n.push(de.parse(a)))
          : a.startsWith(py)
          ? (r.var.push(s), i.push(hy), n.push(a))
          : (r.number.push(s), i.push(Pp), n.push(parseFloat(a))),
        ++s,
        Mc
      )
    )
    .split(Mc);
  return { values: n, split: l, indexes: r, types: i };
}
function kp(e) {
  return cs(e).values;
}
function jp(e) {
  const { split: t, types: n } = cs(e),
    r = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < r; o++)
      if (((s += t[o]), i[o] !== void 0)) {
        const l = n[o];
        l === Pp
          ? (s += Cr(i[o]))
          : l === Ep
          ? (s += de.transform(i[o]))
          : (s += i[o]);
      }
    return s;
  };
}
const vy = (e) => (typeof e == "number" ? 0 : e);
function gy(e) {
  const t = kp(e);
  return jp(e)(t.map(vy));
}
const Ut = {
    test: fy,
    parse: kp,
    createTransformer: jp,
    getAnimatableNone: gy,
  },
  yy = new Set(["brightness", "contrast", "saturate", "opacity"]);
function wy(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Fa) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = yy.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + i + ")";
}
const xy = /\b([a-z-]*)\(.*?\)/gu,
  El = {
    ...Ut,
    getAnimatableNone: (e) => {
      const t = e.match(xy);
      return t ? t.map(wy).join(" ") : e;
    },
  },
  Sy = {
    ...Jh,
    color: de,
    backgroundColor: de,
    outlineColor: de,
    fill: de,
    stroke: de,
    borderColor: de,
    borderTopColor: de,
    borderRightColor: de,
    borderBottomColor: de,
    borderLeftColor: de,
    filter: El,
    WebkitFilter: El,
  },
  Ya = (e) => Sy[e];
function Mp(e, t) {
  let n = Ya(e);
  return (
    n !== El && (n = Ut), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
function Cy(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; )
    typeof e[r] == "string" && e[r] !== "none" && e[r] !== "0" && (i = e[r]),
      r++;
  if (i && n) for (const s of t) e[s] = Mp(n, i);
}
class Np extends Ga {
  constructor(t, n, r, i) {
    super(t, n, r, i, i == null ? void 0 : i.owner, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n.current) return;
    super.readKeyframes();
    for (let a = 0; a < t.length; a++) {
      const u = t[a];
      if (typeof u == "string" && za(u)) {
        const c = yp(u, n.current);
        c !== void 0 && (t[a] = c),
          a === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (!iy.has(r) || t.length !== 2) return this.resolveNoneKeyframes();
    const [i, s] = t,
      o = jc(i),
      l = jc(s);
    if (o !== l)
      if (Pc(o) && Pc(l))
        for (let a = 0; a < t.length; a++) {
          const u = t[a];
          typeof u == "string" && (t[a] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) ty(t[i]) && r.push(i);
    r.length && Cy(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Gn[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n.current) return;
    const s = n.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const o = i.length - 1,
      l = i[o];
    (i[o] = Gn[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([a, u]) => {
          n.getValue(a).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function Ty(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Nc = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (Ut.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function Py(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Ey(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  const s = e[e.length - 1],
    o = Nc(i, t),
    l = Nc(s, t);
  return !o || !l ? !1 : Py(e) || (n === "spring" && r);
}
class Rp {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = "loop",
    ...l
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: o,
        ...l,
      }),
      this.updateFinishedPromise();
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && uy(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    this.hasAttemptedResolve = !0;
    const {
      name: r,
      type: i,
      velocity: s,
      delay: o,
      onComplete: l,
      onUpdate: a,
      isGenerator: u,
    } = this.options;
    if (!u && !Ey(t, r, i, s))
      if (o) this.options.duration = 0;
      else {
        a == null || a(Fs(t, this.options, n)),
          l == null || l(),
          this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function _p(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const ky = 5;
function Op(e, t, n) {
  const r = Math.max(t - ky, 0);
  return _p(n - e(r), t - r);
}
const yo = 0.001,
  jy = 0.01,
  My = 10,
  Ny = 0.05,
  Ry = 1;
function _y({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i,
    s,
    o = 1 - t;
  (o = Bt(Ny, Ry, o)),
    (e = Bt(jy, My, ft(e))),
    o < 1
      ? ((i = (u) => {
          const c = u * o,
            d = c * e,
            f = c - n,
            g = kl(u, o),
            y = Math.exp(-d);
          return yo - (f / g) * y;
        }),
        (s = (u) => {
          const d = u * o * e,
            f = d * n + n,
            g = Math.pow(o, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-d),
            w = kl(Math.pow(u, 2), o);
          return ((-i(u) + yo > 0 ? -1 : 1) * ((f - g) * y)) / w;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -yo + c * d;
        }),
        (s = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const l = 5 / e,
    a = Ly(i, s, l);
  if (((e = It(e)), isNaN(a)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(a, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
  }
}
const Oy = 12;
function Ly(e, t, n) {
  let r = n;
  for (let i = 1; i < Oy; i++) r = r - e(r) / t(r);
  return r;
}
function kl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Ay = ["duration", "bounce"],
  Vy = ["stiffness", "damping", "mass"];
function Rc(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Iy(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Rc(e, Vy) && Rc(e, Ay)) {
    const n = _y(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Lp({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    s = e[e.length - 1],
    o = { done: !1, value: i },
    {
      stiffness: l,
      damping: a,
      mass: u,
      duration: c,
      velocity: d,
      isResolvedFromDuration: f,
    } = Iy({ ...r, velocity: -ft(r.velocity || 0) }),
    g = d || 0,
    y = a / (2 * Math.sqrt(l * u)),
    w = s - i,
    E = ft(Math.sqrt(l / u)),
    m = Math.abs(w) < 5;
  n || (n = m ? 0.01 : 2), t || (t = m ? 0.005 : 0.5);
  let h;
  if (y < 1) {
    const p = kl(E, y);
    h = (x) => {
      const S = Math.exp(-y * E * x);
      return (
        s - S * (((g + y * E * w) / p) * Math.sin(p * x) + w * Math.cos(p * x))
      );
    };
  } else if (y === 1) h = (p) => s - Math.exp(-E * p) * (w + (g + E * w) * p);
  else {
    const p = E * Math.sqrt(y * y - 1);
    h = (x) => {
      const S = Math.exp(-y * E * x),
        P = Math.min(p * x, 300);
      return (
        s - (S * ((g + y * E * w) * Math.sinh(P) + p * w * Math.cosh(P))) / p
      );
    };
  }
  return {
    calculatedDuration: (f && c) || null,
    next: (p) => {
      const x = h(p);
      if (f) o.done = p >= c;
      else {
        let S = g;
        p !== 0 && (y < 1 ? (S = Op(h, p, x)) : (S = 0));
        const P = Math.abs(S) <= n,
          k = Math.abs(s - x) <= t;
        o.done = P && k;
      }
      return (o.value = o.done ? s : x), o;
    },
  };
}
function _c({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: l,
  max: a,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    g = (T) => (l !== void 0 && T < l) || (a !== void 0 && T > a),
    y = (T) =>
      l === void 0
        ? a
        : a === void 0 || Math.abs(l - T) < Math.abs(a - T)
        ? l
        : a;
  let w = n * t;
  const E = d + w,
    m = o === void 0 ? E : o(E);
  m !== E && (w = m - d);
  const h = (T) => -w * Math.exp(-T / r),
    p = (T) => m + h(T),
    x = (T) => {
      const A = h(T),
        N = p(T);
      (f.done = Math.abs(A) <= u), (f.value = f.done ? m : N);
    };
  let S, P;
  const k = (T) => {
    g(f.value) &&
      ((S = T),
      (P = Lp({
        keyframes: [f.value, y(f.value)],
        velocity: Op(p, T, f.value),
        damping: i,
        stiffness: s,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    k(0),
    {
      calculatedDuration: null,
      next: (T) => {
        let A = !1;
        return (
          !P && S === void 0 && ((A = !0), x(T), k(T)),
          S !== void 0 && T >= S ? P.next(T - S) : (!A && x(T), f)
        );
      },
    }
  );
}
const Ap = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Dy = 1e-7,
  zy = 12;
function Fy(e, t, n, r, i) {
  let s,
    o,
    l = 0;
  do (o = t + (n - t) / 2), (s = Ap(o, r, i) - e), s > 0 ? (n = o) : (t = o);
  while (Math.abs(s) > Dy && ++l < zy);
  return o;
}
function ei(e, t, n, r) {
  if (e === t && n === r) return pe;
  const i = (s) => Fy(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : Ap(i(s), t, r));
}
const By = ei(0.42, 0, 1, 1),
  by = ei(0, 0, 0.58, 1),
  Vp = ei(0.42, 0, 0.58, 1),
  Uy = (e) => Array.isArray(e) && typeof e[0] != "number",
  Ip = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Dp = (e) => (t) => 1 - e(1 - t),
  Xa = (e) => 1 - Math.sin(Math.acos(e)),
  zp = Dp(Xa),
  $y = Ip(Xa),
  Fp = ei(0.33, 1.53, 0.69, 0.99),
  Za = Dp(Fp),
  Wy = Ip(Za),
  Hy = (e) =>
    (e *= 2) < 1 ? 0.5 * Za(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Ky = {
    linear: pe,
    easeIn: By,
    easeInOut: Vp,
    easeOut: by,
    circIn: Xa,
    circInOut: $y,
    circOut: zp,
    backIn: Za,
    backInOut: Wy,
    backOut: Fp,
    anticipate: Hy,
  },
  Oc = (e) => {
    if (Array.isArray(e)) {
      vp(e.length === 4);
      const [t, n, r, i] = e;
      return ei(t, n, r, i);
    } else if (typeof e == "string") return Ky[e];
    return e;
  },
  Wr = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  W = (e, t, n) => e + (t - e) * n;
function wo(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function Gy({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l;
    (i = wo(a, l, e + 1 / 3)), (s = wo(a, l, e)), (o = wo(a, l, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
const xo = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  Qy = [Pl, sn, _n],
  Yy = (e) => Qy.find((t) => t.test(e));
function Lc(e) {
  const t = Yy(e);
  let n = t.parse(e);
  return t === _n && (n = Gy(n)), n;
}
const Ac = (e, t) => {
  const n = Lc(e),
    r = Lc(t),
    i = { ...n };
  return (s) => (
    (i.red = xo(n.red, r.red, s)),
    (i.green = xo(n.green, r.green, s)),
    (i.blue = xo(n.blue, r.blue, s)),
    (i.alpha = W(n.alpha, r.alpha, s)),
    sn.transform(i)
  );
};
function jl(e, t) {
  return (n) => (n > 0 ? t : e);
}
function Xy(e, t) {
  return (n) => W(e, t, n);
}
function qa(e) {
  return typeof e == "number"
    ? Xy
    : typeof e == "string"
    ? za(e)
      ? jl
      : de.test(e)
      ? Ac
      : Jy
    : Array.isArray(e)
    ? Bp
    : typeof e == "object"
    ? de.test(e)
      ? Ac
      : Zy
    : jl;
}
function Bp(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, o) => qa(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++) n[o] = i[o](s);
    return n;
  };
}
function Zy(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = qa(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function qy(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const o = t.types[s],
      l = e.indexes[o][i[o]],
      a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
    (r[s] = a), i[o]++;
  }
  return r;
}
const Jy = (e, t) => {
  const n = Ut.createTransformer(t),
    r = cs(e),
    i = cs(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? dt(Bp(qy(r, i), i.values), n)
    : jl(e, t);
};
function bp(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? W(e, t, n)
    : qa(e)(e, t);
}
function e1(e, t, n) {
  const r = [],
    i = n || bp,
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let l = i(e[o], e[o + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[o] || pe : t;
      l = dt(a, l);
    }
    r.push(l);
  }
  return r;
}
function t1(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if ((vp(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const o = e1(t, r, i),
    l = o.length,
    a = (u) => {
      let c = 0;
      if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = Wr(e[c], e[c + 1], u);
      return o[c](d);
    };
  return n ? (u) => a(Bt(e[0], e[s - 1], u)) : a;
}
function n1(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Wr(0, t, r);
    e.push(W(n, 1, i));
  }
}
function r1(e) {
  const t = [0];
  return n1(t, e.length - 1), t;
}
function i1(e, t) {
  return e.map((n) => n * t);
}
function s1(e, t) {
  return e.map(() => t || Vp).splice(0, e.length - 1);
}
function ds({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = Uy(r) ? r.map(Oc) : Oc(r),
    s = { done: !1, value: t[0] },
    o = i1(n && n.length === t.length ? n : r1(t), e),
    l = t1(o, t, { ease: Array.isArray(i) ? i : s1(t, i) });
  return {
    calculatedDuration: e,
    next: (a) => ((s.value = l(a)), (s.done = a >= e), s),
  };
}
const Vc = 2e4;
function o1(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Vc; ) (t += n), (r = e.next(t));
  return t >= Vc ? 1 / 0 : t;
}
const l1 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => le.update(t, !0),
      stop: () => bt(t),
      now: () => (se.isProcessing ? se.timestamp : Dt.now()),
    };
  },
  a1 = { decay: _c, inertia: _c, tween: ds, keyframes: ds, spring: Lp },
  u1 = (e) => e / 100;
class Ja extends Rp {
  constructor({ KeyframeResolver: t = Ga, ...n }) {
    super(n),
      (this.holdTime = null),
      (this.startTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      });
    const { name: r, motionValue: i, keyframes: s } = this.options,
      o = (l, a) => this.onKeyframesResolved(l, a);
    r && i && i.owner
      ? (this.resolver = i.owner.resolveKeyframes(s, o, r, i))
      : (this.resolver = new t(s, o, r, i)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: s,
        velocity: o = 0,
      } = this.options,
      l = a1[n] || ds;
    let a, u;
    l !== ds &&
      typeof t[0] != "number" &&
      ((a = dt(u1, bp(t[0], t[1]))), (t = [0, 100]));
    const c = l({ ...this.options, keyframes: t });
    s === "mirror" &&
      (u = l({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      c.calculatedDuration === null && (c.calculatedDuration = o1(c));
    const { calculatedDuration: d } = c,
      f = d + i,
      g = f * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: a,
      calculatedDuration: d,
      resolvedDuration: f,
      totalDuration: g,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: T } = this.options;
      return { done: !0, value: T[T.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: s,
      mirroredGenerator: o,
      mapPercentToKeyframes: l,
      keyframes: a,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: d,
    } = r;
    if (this.startTime === null) return s.next(0);
    const {
      delay: f,
      repeat: g,
      repeatType: y,
      repeatDelay: w,
      onUpdate: E,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const m = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
      h = this.speed >= 0 ? m < 0 : m > c;
    (this.currentTime = Math.max(m, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let p = this.currentTime,
      x = s;
    if (g) {
      const T = Math.min(this.currentTime, c) / d;
      let A = Math.floor(T),
        N = T % 1;
      !N && T >= 1 && (N = 1),
        N === 1 && A--,
        (A = Math.min(A, g + 1)),
        !!(A % 2) &&
          (y === "reverse"
            ? ((N = 1 - N), w && (N -= w / d))
            : y === "mirror" && (x = o)),
        (p = Bt(0, 1, N) * d);
    }
    const S = h ? { done: !1, value: a[0] } : x.next(p);
    l && (S.value = l(S.value));
    let { done: P } = S;
    !h &&
      u !== null &&
      (P = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const k =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && P));
    return (
      k && i !== void 0 && (S.value = Fs(a, this.options, i)),
      E && E(S.value),
      k && this.finish(),
      S
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? ft(t.calculatedDuration) : 0;
  }
  get time() {
    return ft(this.currentTime);
  }
  set time(t) {
    (t = It(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = ft(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = l1, onPlay: n } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), n && n();
    const r = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : (!this.startTime || this.state === "finished") && (this.startTime = r),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const Up = (e) => Array.isArray(e) && typeof e[0] == "number";
function $p(e) {
  return !!(
    !e ||
    (typeof e == "string" && e in eu) ||
    Up(e) ||
    (Array.isArray(e) && e.every($p))
  );
}
const dr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  eu = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: dr([0, 0.65, 0.55, 1]),
    circOut: dr([0.55, 0, 1, 0.45]),
    backIn: dr([0.31, 0.01, 0.66, -0.59]),
    backOut: dr([0.33, 1.53, 0.69, 0.99]),
  };
function c1(e) {
  return Wp(e) || eu.easeOut;
}
function Wp(e) {
  if (e) return Up(e) ? dr(e) : Array.isArray(e) ? e.map(c1) : eu[e];
}
function d1(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: l,
    times: a,
  } = {}
) {
  const u = { [t]: n };
  a && (u.offset = a);
  const c = Wp(l);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: s + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
const f1 = Ty(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  h1 = new Set(["opacity", "clipPath", "filter", "transform"]),
  fs = 10,
  p1 = 2e4;
function m1(e) {
  return e.type === "spring" || e.name === "backgroundColor" || !$p(e.ease);
}
function v1(e, t) {
  const n = new Ja({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let s = 0;
  for (; !r.done && s < p1; ) (r = n.sample(s)), i.push(r.value), (s += fs);
  return { times: void 0, keyframes: i, duration: s - fs, ease: "linear" };
}
class Ic extends Rp {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, keyframes: i } = this.options;
    (this.resolver = new Np(i, (s, o) => this.onKeyframesResolved(s, o), n, r)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: i = 300,
      times: s,
      ease: o,
      type: l,
      motionValue: a,
      name: u,
    } = this.options;
    if (!(!((r = a.owner) === null || r === void 0) && r.current)) return !1;
    if (m1(this.options)) {
      const { onComplete: d, onUpdate: f, motionValue: g, ...y } = this.options,
        w = v1(t, y);
      (t = w.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = w.duration),
        (s = w.times),
        (o = w.ease),
        (l = "keyframes");
    }
    const c = d1(a.owner.current, u, t, {
      ...this.options,
      duration: i,
      times: s,
      ease: o,
    });
    return (
      (c.startTime = Dt.now()),
      this.pendingTimeline
        ? ((c.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
        : (c.onfinish = () => {
            const { onComplete: d } = this.options;
            a.set(Fs(t, this.options, n)),
              d && d(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: c, duration: i, times: s, type: l, ease: o, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return ft(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return ft(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = It(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return pe;
      const { animation: r } = n;
      (r.timeline = t), (r.onfinish = null);
    }
    return pe;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: s,
      ease: o,
      times: l,
    } = t;
    if (!(n.playState === "idle" || n.playState === "finished")) {
      if (this.time) {
        const {
            motionValue: a,
            onUpdate: u,
            onComplete: c,
            ...d
          } = this.options,
          f = new Ja({
            ...d,
            keyframes: r,
            duration: i,
            type: s,
            ease: o,
            times: l,
            isGenerator: !0,
          }),
          g = It(this.time);
        a.setWithVelocity(f.sample(g - fs).value, f.sample(g).value, fs);
      }
      this.cancel();
    }
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: s,
      damping: o,
      type: l,
    } = t;
    return (
      f1() &&
      r &&
      h1.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      s !== "mirror" &&
      o !== 0 &&
      l !== "inertia"
    );
  }
}
const tu =
  (e, t, n, r = {}, i, s) =>
  (o) => {
    const l = Ka(r, e) || {},
      a = l.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - It(a);
    let c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...l,
      delay: -u,
      onUpdate: (f) => {
        t.set(f), l.onUpdate && l.onUpdate(f);
      },
      onComplete: () => {
        o(), l.onComplete && l.onComplete();
      },
      name: e,
      motionValue: t,
      element: s ? void 0 : i,
    };
    qg(l) || (c = { ...c, ...Zg(e, c) }),
      c.duration && (c.duration = It(c.duration)),
      c.repeatDelay && (c.repeatDelay = It(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        ((c.duration = 0), c.delay === 0 && (d = !0)),
      d && !s && t.get() !== void 0)
    ) {
      const f = Fs(c.keyframes, l);
      if (f !== void 0) {
        le.update(() => {
          c.onUpdate(f), c.onComplete();
        });
        return;
      }
    }
    return !s && Ic.supports(c) ? new Ic(c) : new Ja(c);
  };
function hs(e) {
  return !!(he(e) && e.add);
}
function nu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ru(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class iu {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return nu(this.subscriptions, t), () => ru(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Dc = 30,
  g1 = (e) => !isNaN(parseFloat(e));
class y1 {
  constructor(t, n = {}) {
    (this.version = "11.1.7"),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const s = Dt.now();
        this.updatedAt !== s && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.canTrackVelocity = g1(this.current)),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t), (this.updatedAt = Dt.now());
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new iu());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            le.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Dt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Dc
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Dc);
    return _p(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Hr(e, t) {
  return new y1(e, t);
}
function w1(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Hr(n));
}
function su(e, t) {
  const n = zs(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const l = kg(s[o]);
    w1(e, o, l);
  }
}
function x1({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Hp(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s;
  let { transition: o = e.getDefaultTransition(), transitionEnd: l, ...a } = t;
  const u = e.getValue("willChange");
  r && (o = r);
  const c = [],
    d = i && e.animationState && e.animationState.getState()[i];
  for (const f in a) {
    const g = e.getValue(
        f,
        (s = e.latestValues[f]) !== null && s !== void 0 ? s : null
      ),
      y = a[f];
    if (y === void 0 || (d && x1(d, f))) continue;
    const w = { delay: n, elapsed: 0, ...Ka(o || {}, f) };
    let E = !1;
    if (window.HandoffAppearAnimations) {
      const p = e.getProps()[Hh];
      if (p) {
        const x = window.HandoffAppearAnimations(p, f);
        x !== null && ((w.elapsed = x), (E = !0));
      }
    }
    g.start(
      tu(f, g, y, e.shouldReduceMotion && vn.has(f) ? { type: !1 } : w, e, E)
    );
    const m = g.animation;
    m && (hs(u) && (u.add(f), m.then(() => u.remove(f))), c.push(m));
  }
  return (
    l &&
      Promise.all(c).then(() => {
        le.update(() => {
          l && su(e, l);
        });
      }),
    c
  );
}
function Ml(e, t, n = {}) {
  var r;
  const i = zs(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: s = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(Hp(e, i, n)) : () => Promise.resolve(),
    l =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = s;
            return S1(e, t, c + u, d, f, n);
          }
        : () => Promise.resolve(),
    { when: a } = s;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [o, l] : [l, o];
    return u().then(() => c());
  } else return Promise.all([o(), l(n.delay)]);
}
function S1(e, t, n = 0, r = 0, i = 1, s) {
  const o = [],
    l = (e.variantChildren.size - 1) * r,
    a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(C1)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          o.push(
            Ml(u, t, { ...s, delay: n + a(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(o)
  );
}
function C1(e, t) {
  return e.sortNodePosition(t);
}
function Kp(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => Ml(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Ml(e, t, n);
  else {
    const i = typeof t == "function" ? zs(e, t, n.custom) : t;
    r = Promise.all(Hp(e, i, n));
  }
  return r.then(() => {
    le.postRender(() => {
      e.notify("AnimationComplete", t);
    });
  });
}
const T1 = [...Va].reverse(),
  P1 = Va.length;
function E1(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => Kp(e, n, r)));
}
function k1(e) {
  let t = E1(e);
  const n = M1();
  let r = !0;
  const i = (a) => (u, c) => {
    var d;
    const f = zs(
      e,
      c,
      a === "exit"
        ? (d = e.presenceContext) === null || d === void 0
          ? void 0
          : d.custom
        : void 0
    );
    if (f) {
      const { transition: g, transitionEnd: y, ...w } = f;
      u = { ...u, ...w, ...y };
    }
    return u;
  };
  function s(a) {
    t = a(e);
  }
  function o(a) {
    const u = e.getProps(),
      c = e.getVariantContext(!0) || {},
      d = [],
      f = new Set();
    let g = {},
      y = 1 / 0;
    for (let E = 0; E < P1; E++) {
      const m = T1[E],
        h = n[m],
        p = u[m] !== void 0 ? u[m] : c[m],
        x = Ur(p),
        S = m === a ? h.isActive : null;
      S === !1 && (y = E);
      let P = p === c[m] && p !== u[m] && x;
      if (
        (P && r && e.manuallyAnimateOnMount && (P = !1),
        (h.protectedKeys = { ...g }),
        (!h.isActive && S === null) ||
          (!p && !h.prevProp) ||
          Vs(p) ||
          typeof p == "boolean")
      )
        continue;
      let T =
          j1(h.prevProp, p) ||
          (m === a && h.isActive && !P && x) ||
          (E > y && x),
        A = !1;
      const N = Array.isArray(p) ? p : [p];
      let b = N.reduce(i(m), {});
      S === !1 && (b = {});
      const { prevResolvedValues: Xe = {} } = h,
        Ze = { ...Xe, ...b },
        ke = (Z) => {
          (T = !0),
            f.has(Z) && ((A = !0), f.delete(Z)),
            (h.needsAnimating[Z] = !0);
          const je = e.getValue(Z);
          je && (je.liveStyle = !1);
        };
      for (const Z in Ze) {
        const je = b[Z],
          Gt = Xe[Z];
        if (g.hasOwnProperty(Z)) continue;
        let j = !1;
        xl(je) && xl(Gt) ? (j = !pp(je, Gt)) : (j = je !== Gt),
          j
            ? je != null
              ? ke(Z)
              : f.add(Z)
            : je !== void 0 && f.has(Z)
            ? ke(Z)
            : (h.protectedKeys[Z] = !0);
      }
      (h.prevProp = p),
        (h.prevResolvedValues = b),
        h.isActive && (g = { ...g, ...b }),
        r && e.blockInitialAnimation && (T = !1),
        T &&
          (!P || A) &&
          d.push(...N.map((Z) => ({ animation: Z, options: { type: m } })));
    }
    if (f.size) {
      const E = {};
      f.forEach((m) => {
        const h = e.getBaseTarget(m),
          p = e.getValue(m);
        p && (p.liveStyle = !0), (E[m] = h ?? null);
      }),
        d.push({ animation: E });
    }
    let w = !!d.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (w = !1),
      (r = !1),
      w ? t(d) : Promise.resolve()
    );
  }
  function l(a, u) {
    var c;
    if (n[a].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((f) => {
        var g;
        return (g = f.animationState) === null || g === void 0
          ? void 0
          : g.setActive(a, u);
      }),
      (n[a].isActive = u);
    const d = o(a);
    for (const f in n) n[f].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: o,
    setActive: l,
    setAnimateFunction: s,
    getState: () => n,
  };
}
function j1(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !pp(t, e) : !1;
}
function Xt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function M1() {
  return {
    animate: Xt(!0),
    whileInView: Xt(),
    whileHover: Xt(),
    whileTap: Xt(),
    whileDrag: Xt(),
    whileFocus: Xt(),
    exit: Xt(),
  };
}
class N1 extends Kt {
  constructor(t) {
    super(t), t.animationState || (t.animationState = k1(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Vs(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let R1 = 0;
class _1 extends Kt {
  constructor() {
    super(...arguments), (this.id = R1++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const O1 = { animation: { Feature: N1 }, exit: { Feature: _1 } },
  zc = (e, t) => Math.abs(e - t);
function L1(e, t) {
  const n = zc(e.x, t.x),
    r = zc(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Gp {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = Co(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          g = L1(d.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !g) return;
        const { point: y } = d,
          { timestamp: w } = se;
        this.history.push({ ...y, timestamp: w });
        const { onStart: E, onMove: m } = this.handlers;
        f ||
          (E && E(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, f) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = So(f, this.transformPagePoint)),
          le.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, f) => {
        this.end();
        const { onEnd: g, onSessionEnd: y, resumeAnimation: w } = this.handlers;
        if (
          (this.dragSnapToOrigin && w && w(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const E = Co(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : So(f, this.transformPagePoint),
          this.history
        );
        this.startEvent && g && g(d, E), y && y(d, E);
      }),
      !up(t))
    )
      return;
    (this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const o = Ds(t),
      l = So(o, this.transformPagePoint),
      { point: a } = l,
      { timestamp: u } = se;
    this.history = [{ ...a, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Co(l, this.history)),
      (this.removeListeners = dt(
        ct(this.contextWindow, "pointermove", this.handlePointerMove),
        ct(this.contextWindow, "pointerup", this.handlePointerUp),
        ct(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), bt(this.updatePoint);
  }
}
function So(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Fc(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Co({ point: e }, t) {
  return {
    point: e,
    delta: Fc(e, Qp(t)),
    offset: Fc(e, A1(t)),
    velocity: V1(t, 0.1),
  };
}
function A1(e) {
  return e[0];
}
function Qp(e) {
  return e[e.length - 1];
}
function V1(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = Qp(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > It(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const s = ft(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function Oe(e) {
  return e.max - e.min;
}
function Nl(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Bc(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = W(t.min, t.max, e.origin)),
    (e.scale = Oe(n) / Oe(t)),
    (Nl(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = W(n.min, n.max, e.origin) - e.originPoint),
    (Nl(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Tr(e, t, n, r) {
  Bc(e.x, t.x, n.x, r ? r.originX : void 0),
    Bc(e.y, t.y, n.y, r ? r.originY : void 0);
}
function bc(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Oe(t));
}
function I1(e, t, n) {
  bc(e.x, t.x, n.x), bc(e.y, t.y, n.y);
}
function Uc(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Oe(t));
}
function Pr(e, t, n) {
  Uc(e.x, t.x, n.x), Uc(e.y, t.y, n.y);
}
function D1(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? W(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? W(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function $c(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function z1(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: $c(e.x, n, i), y: $c(e.y, t, r) };
}
function Wc(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function F1(e, t) {
  return { x: Wc(e.x, t.x), y: Wc(e.y, t.y) };
}
function B1(e, t) {
  let n = 0.5;
  const r = Oe(e),
    i = Oe(t);
  return (
    i > r
      ? (n = Wr(t.min, t.max - r, e.min))
      : r > i && (n = Wr(e.min, e.max - i, t.min)),
    Bt(0, 1, n)
  );
}
function b1(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Rl = 0.35;
function U1(e = Rl) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Rl),
    { x: Hc(e, "left", "right"), y: Hc(e, "top", "bottom") }
  );
}
function Hc(e, t, n) {
  return { min: Kc(e, t), max: Kc(e, n) };
}
function Kc(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Gc = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  On = () => ({ x: Gc(), y: Gc() }),
  Qc = () => ({ min: 0, max: 0 }),
  Y = () => ({ x: Qc(), y: Qc() });
function Ie(e) {
  return [e("x"), e("y")];
}
function Yp({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function $1({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function W1(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function To(e) {
  return e === void 0 || e === 1;
}
function _l({ scale: e, scaleX: t, scaleY: n }) {
  return !To(e) || !To(t) || !To(n);
}
function Jt(e) {
  return (
    _l(e) ||
    Xp(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Xp(e) {
  return Yc(e.x) || Yc(e.y);
}
function Yc(e) {
  return e && e !== "0%";
}
function ps(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Xc(e, t, n, r, i) {
  return i !== void 0 && (e = ps(e, i, r)), ps(e, n, r) + t;
}
function Ol(e, t = 0, n = 1, r, i) {
  (e.min = Xc(e.min, t, n, r, i)), (e.max = Xc(e.max, t, n, r, i));
}
function Zp(e, { x: t, y: n }) {
  Ol(e.x, t.translate, t.scale, t.originPoint),
    Ol(e.y, n.translate, n.scale, n.originPoint);
}
function H1(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, o;
  for (let l = 0; l < i; l++) {
    (s = n[l]), (o = s.projectionDelta);
    const a = s.instance;
    (a && a.style && a.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        Ln(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Zp(e, o)),
      r && Jt(s.latestValues) && Ln(e, s.latestValues));
  }
  (t.x = Zc(t.x)), (t.y = Zc(t.y));
}
function Zc(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function Ct(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function qc(e, t, [n, r, i]) {
  const s = t[i] !== void 0 ? t[i] : 0.5,
    o = W(e.min, e.max, s);
  Ol(e, t[n], t[r], o, t.scale);
}
const K1 = ["x", "scaleX", "originX"],
  G1 = ["y", "scaleY", "originY"];
function Ln(e, t) {
  qc(e.x, t, K1), qc(e.y, t, G1);
}
function qp(e, t) {
  return Yp(W1(e.getBoundingClientRect(), t));
}
function Q1(e, t, n) {
  const r = qp(e, n),
    { scroll: i } = t;
  return i && (Ct(r.x, i.offset.x), Ct(r.y, i.offset.y)), r;
}
const Jp = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  Y1 = new WeakMap();
class X1 {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Y()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Ds(c, "page").point);
      },
      s = (c, d) => {
        const { drag: f, dragPropagation: g, onDragStart: y } = this.getProps();
        if (
          f &&
          !g &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = dp(f)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ie((E) => {
            let m = this.getAxisMotionValue(E).get() || 0;
            if (rt.test(m)) {
              const { projection: h } = this.visualElement;
              if (h && h.layout) {
                const p = h.layout.layoutBox[E];
                p && (m = Oe(p) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[E] = m;
          }),
          y && y(c, d);
        const { animationState: w } = this.visualElement;
        w && w.setActive("whileDrag", !0);
      },
      o = (c, d) => {
        const {
          dragPropagation: f,
          dragDirectionLock: g,
          onDirectionLock: y,
          onDrag: w,
        } = this.getProps();
        if (!f && !this.openGlobalLock) return;
        const { offset: E } = d;
        if (g && this.currentDirection === null) {
          (this.currentDirection = Z1(E)),
            this.currentDirection !== null && y && y(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, E),
          this.updateAxis("y", d.point, E),
          this.visualElement.render(),
          w && w(c, d);
      },
      l = (c, d) => this.stop(c, d),
      a = () =>
        Ie((c) => {
          var d;
          return (
            this.getAnimationState(c) === "paused" &&
            ((d = this.getAxisMotionValue(c).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Gp(
      t,
      {
        onSessionStart: i,
        onStart: s,
        onMove: o,
        onSessionEnd: l,
        resumeAnimation: a,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: Jp(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && s(t, n);
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Ci(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (o = D1(o, this.constraints[t], this.elastic[t])),
      s.set(o);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      s = this.constraints;
    n && Rn(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = z1(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = U1(r)),
      s !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ie((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = b1(i.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Rn(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = Q1(r, i.root, this.visualElement.getTransformPagePoint());
    let o = F1(i.layout.layoutBox, s);
    if (n) {
      const l = n($1(o));
      (this.hasMutatedConstraints = !!l), l && (o = Yp(l));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: l,
      } = this.getProps(),
      a = this.constraints || {},
      u = Ie((c) => {
        if (!Ci(c, n, this.currentDirection)) return;
        let d = (a && a[c]) || {};
        o && (d = { min: 0, max: 0 });
        const f = i ? 200 : 1e6,
          g = i ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...d,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(tu(t, r, 0, n, this.visualElement));
  }
  stopAnimation() {
    Ie((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Ie((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Ie((n) => {
      const { drag: r } = this.getProps();
      if (!Ci(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: l } = i.layout.layoutBox[n];
        s.set(t[n] - W(o, l, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Rn(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Ie((o) => {
      const l = this.getAxisMotionValue(o);
      if (l && this.constraints !== !1) {
        const a = l.get();
        i[o] = B1({ min: a, max: a }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Ie((o) => {
        if (!Ci(o, t, null)) return;
        const l = this.getAxisMotionValue(o),
          { min: a, max: u } = this.constraints[o];
        l.set(W(a, u, i[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Y1.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = ct(t, "pointerdown", (a) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(a);
      }),
      r = () => {
        const { dragConstraints: a } = this.getProps();
        Rn(a) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const o = at(window, "resize", () => this.scalePositionWithinConstraints()),
      l = i.addEventListener(
        "didUpdate",
        ({ delta: a, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Ie((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += a[c].translate),
                d.set(d.get() + a[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      o(), n(), s(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = Rl,
        dragMomentum: l = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: l,
    };
  }
}
function Ci(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Z1(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class q1 extends Kt {
  constructor(t) {
    super(t),
      (this.removeGroupControls = pe),
      (this.removeListeners = pe),
      (this.controls = new X1(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || pe);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Jc = (e) => (t, n) => {
  e && e(t, n);
};
class J1 extends Kt {
  constructor() {
    super(...arguments), (this.removePointerDownListener = pe);
  }
  onPointerDown(t) {
    this.session = new Gp(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Jp(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Jc(t),
      onStart: Jc(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && i(s, o);
      },
    };
  }
  mount() {
    this.removePointerDownListener = ct(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function ew() {
  const e = _.useContext(_a);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = _.useId();
  return _.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const Di = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function ed(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const or = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (R.test(e)) e = parseFloat(e);
        else return e;
      const n = ed(e, t.target.x),
        r = ed(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  tw = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Ut.parse(e);
      if (i.length > 5) return r;
      const s = Ut.createTransformer(e),
        o = typeof i[0] != "number" ? 1 : 0,
        l = n.x.scale * t.x,
        a = n.y.scale * t.y;
      (i[0 + o] /= l), (i[1 + o] /= a);
      const u = W(l, a, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
      );
    },
  };
class nw extends _.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    ng(rw),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Di.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = s),
        i || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              le.postRender(() => {
                const l = o.getStack();
                (!l || !l.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Aa.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function em(e) {
  const [t, n] = ew(),
    r = _.useContext(Qh);
  return v.jsx(nw, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: _.useContext(Yh),
    isPresent: t,
    safeToRemove: n,
  });
}
const rw = {
    borderRadius: {
      ...or,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: or,
    borderTopRightRadius: or,
    borderBottomLeftRadius: or,
    borderBottomRightRadius: or,
    boxShadow: tw,
  },
  tm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  iw = tm.length,
  td = (e) => (typeof e == "string" ? parseFloat(e) : e),
  nd = (e) => typeof e == "number" || R.test(e);
function sw(e, t, n, r, i, s) {
  i
    ? ((e.opacity = W(0, n.opacity !== void 0 ? n.opacity : 1, ow(r))),
      (e.opacityExit = W(t.opacity !== void 0 ? t.opacity : 1, 0, lw(r))))
    : s &&
      (e.opacity = W(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let o = 0; o < iw; o++) {
    const l = `border${tm[o]}Radius`;
    let a = rd(t, l),
      u = rd(n, l);
    if (a === void 0 && u === void 0) continue;
    a || (a = 0),
      u || (u = 0),
      a === 0 || u === 0 || nd(a) === nd(u)
        ? ((e[l] = Math.max(W(td(a), td(u), r), 0)),
          (rt.test(u) || rt.test(a)) && (e[l] += "%"))
        : (e[l] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = W(t.rotate || 0, n.rotate || 0, r));
}
function rd(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const ow = nm(0, 0.5, zp),
  lw = nm(0.5, 0.95, pe);
function nm(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Wr(e, t, r)));
}
function id(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Ve(e, t) {
  id(e.x, t.x), id(e.y, t.y);
}
function sd(e, t, n, r, i) {
  return (
    (e -= t), (e = ps(e, 1 / n, r)), i !== void 0 && (e = ps(e, 1 / i, r)), e
  );
}
function aw(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (rt.test(t) &&
      ((t = parseFloat(t)), (t = W(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let l = W(s.min, s.max, r);
  e === s && (l -= t),
    (e.min = sd(e.min, t, n, l, i)),
    (e.max = sd(e.max, t, n, l, i));
}
function od(e, t, [n, r, i], s, o) {
  aw(e, t[n], t[r], t[i], t.scale, s, o);
}
const uw = ["x", "scaleX", "originX"],
  cw = ["y", "scaleY", "originY"];
function ld(e, t, n, r) {
  od(e.x, t, uw, n ? n.x : void 0, r ? r.x : void 0),
    od(e.y, t, cw, n ? n.y : void 0, r ? r.y : void 0);
}
function ad(e) {
  return e.translate === 0 && e.scale === 1;
}
function rm(e) {
  return ad(e.x) && ad(e.y);
}
function dw(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function im(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function ud(e) {
  return Oe(e.x) / Oe(e.y);
}
class fw {
  constructor() {
    this.members = [];
  }
  add(t) {
    nu(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (ru(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function cd(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: d,
      rotateY: f,
      skewX: g,
      skewY: y,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      d && (r += `rotateX(${d}deg) `),
      f && (r += `rotateY(${f}deg) `),
      g && (r += `skewX(${g}deg) `),
      y && (r += `skewY(${y}deg) `);
  }
  const l = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`), r || "none";
}
const hw = (e, t) => e.depth - t.depth;
class pw {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    nu(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    ru(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(hw),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function mw(e, t) {
  const n = Dt.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (bt(r), e(s - t));
    };
  return le.read(r, !0), () => bt(r);
}
function vw(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function gw(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function yw(e, t, n) {
  const r = he(e) ? e : Hr(e);
  return r.start(tu("", r, t, n)), r.animation;
}
const Po = ["", "X", "Y", "Z"],
  ww = { visibility: "hidden" },
  dd = 1e3;
let xw = 0;
const en = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function Eo(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function sm({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, l = t == null ? void 0 : t()) {
      (this.id = xw++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (en.totalNodes =
              en.resolvedTargetDeltas =
              en.recalculatedProjection =
                0),
            this.nodes.forEach(Tw),
            this.nodes.forEach(Mw),
            this.nodes.forEach(Nw),
            this.nodes.forEach(Pw),
            vw(en);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0);
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new pw());
    }
    addEventListener(o, l) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new iu()),
        this.eventHandlers.get(o).add(l)
      );
    }
    notifyListeners(o, ...l) {
      const a = this.eventHandlers.get(o);
      a && a.notify(...l);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, l = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = gw(o)), (this.instance = o);
      const { layoutId: a, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        l && (u || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = mw(f, 250)),
            Di.hasAnimatedSinceResize &&
              ((Di.hasAnimatedSinceResize = !1), this.nodes.forEach(hd));
        });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: g,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const w =
                  this.options.transition || c.getDefaultTransition() || Aw,
                { onLayoutAnimationStart: E, onLayoutAnimationComplete: m } =
                  c.getProps(),
                h = !this.targetLayout || !im(this.targetLayout, y) || g,
                p = !f && g;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                p ||
                (f && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, p);
                const x = { ...Ka(w, "layout"), onPlay: E, onComplete: m };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((x.delay = 0), (x.type = !1)),
                  this.startAnimation(x);
              } else
                f || hd(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        bt(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Rw),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: l, layout: a } = this.options;
      if (l === void 0 && !a) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(fd);
        return;
      }
      this.isUpdating || this.nodes.forEach(kw),
        (this.isUpdating = !1),
        window.HandoffCancelAllAnimations &&
          window.HandoffCancelAllAnimations(),
        this.nodes.forEach(jw),
        this.nodes.forEach(Sw),
        this.nodes.forEach(Cw),
        this.clearAllSnapshots();
      const l = Dt.now();
      (se.delta = Bt(0, 1e3 / 60, l - se.timestamp)),
        (se.timestamp = l),
        (se.isProcessing = !0),
        po.update.process(se),
        po.preRender.process(se),
        po.render.process(se),
        (se.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Aa.read(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Ew), this.sharedNodes.forEach(_w);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        le.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      le.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Y()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l &&
        l.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0
        );
    }
    updateScroll(o = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === o &&
        (l = !1),
        l &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: o,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const o = this.isLayoutDirty || this.shouldResetTransform,
        l = this.projectionDelta && !rm(this.projectionDelta),
        a = this.getTransformTemplate(),
        u = a ? a(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      o &&
        (l || Jt(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return (
        o && (a = this.removeTransform(a)),
        Vw(a),
        {
          animationId: this.root.animationId,
          measuredBox: l,
          layoutBox: a,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: o } = this.options;
      if (!o) return Y();
      const l = o.measureViewportBox(),
        { scroll: a } = this.root;
      return a && (Ct(l.x, a.offset.x), Ct(l.y, a.offset.y)), l;
    }
    removeElementScroll(o) {
      const l = Y();
      Ve(l, o);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a],
          { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            Ve(l, o);
            const { scroll: f } = this.root;
            f && (Ct(l.x, -f.offset.x), Ct(l.y, -f.offset.y));
          }
          Ct(l.x, c.offset.x), Ct(l.y, c.offset.y);
        }
      }
      return l;
    }
    applyTransform(o, l = !1) {
      const a = Y();
      Ve(a, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !l &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Ln(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Jt(c.latestValues) && Ln(a, c.latestValues);
      }
      return Jt(this.latestValues) && Ln(a, this.latestValues), a;
    }
    removeTransform(o) {
      const l = Y();
      Ve(l, o);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a];
        if (!u.instance || !Jt(u.latestValues)) continue;
        _l(u.latestValues) && u.updateSnapshot();
        const c = Y(),
          d = u.measurePageBox();
        Ve(c, d),
          ld(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Jt(this.latestValues) && ld(l, this.latestValues), l;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== se.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var l;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== a;
      if (
        !(
          o ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((l = this.parent) === null || l === void 0) &&
            l.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = se.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Y()),
              (this.relativeTargetOrigin = Y()),
              Pr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                g.layout.layoutBox
              ),
              Ve(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Y()), (this.targetWithTransforms = Y())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                I1(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Ve(this.target, this.layout.layoutBox),
                Zp(this.target, this.targetDelta))
              : Ve(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g &&
            !!g.resumingFrom == !!this.resumingFrom &&
            !g.options.layoutScroll &&
            g.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = g),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Y()),
                (this.relativeTargetOrigin = Y()),
                Pr(this.relativeTargetOrigin, this.target, g.target),
                Ve(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          en.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          _l(this.parent.latestValues) ||
          Xp(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const l = this.getLead(),
        a = !!this.resumingFrom || this !== l;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (u = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === se.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      Ve(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        g = this.treeScale.y;
      H1(this.layoutCorrected, this.treeScale, this.path, a),
        l.layout &&
          !l.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((l.target = l.layout.layoutBox), (l.targetWithTransforms = Y()));
      const { target: y } = l;
      if (!y) {
        this.projectionTransform &&
          ((this.projectionDelta = On()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = On()),
        (this.projectionDeltaWithTransform = On()));
      const w = this.projectionTransform;
      Tr(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.projectionTransform = cd(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== w ||
          this.treeScale.x !== f ||
          this.treeScale.y !== g) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        en.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), o)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(o, l = !1) {
      const a = this.snapshot,
        u = a ? a.latestValues : {},
        c = { ...this.latestValues },
        d = On();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l);
      const f = Y(),
        g = a ? a.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        w = g !== y,
        E = this.getStack(),
        m = !E || E.members.length <= 1,
        h = !!(w && !m && this.options.crossfade === !0 && !this.path.some(Lw));
      this.animationProgress = 0;
      let p;
      (this.mixTargetDelta = (x) => {
        const S = x / 1e3;
        pd(d.x, o.x, S),
          pd(d.y, o.y, S),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Pr(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Ow(this.relativeTarget, this.relativeTargetOrigin, f, S),
            p && dw(this.relativeTarget, p) && (this.isProjectionDirty = !1),
            p || (p = Y()),
            Ve(p, this.relativeTarget)),
          w &&
            ((this.animationValues = c), sw(c, u, this.latestValues, S, h, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (bt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = le.update(() => {
          (Di.hasAnimatedSinceResize = !0),
            (this.currentAnimation = yw(0, dd, {
              ...o,
              onUpdate: (l) => {
                this.mixTargetDelta(l), o.onUpdate && o.onUpdate(l);
              },
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(dd),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: l,
        target: a,
        layout: u,
        latestValues: c,
      } = o;
      if (!(!l || !a || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          om(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          a = this.target || Y();
          const d = Oe(this.layout.layoutBox.x);
          (a.x.min = o.target.x.min), (a.x.max = a.x.min + d);
          const f = Oe(this.layout.layoutBox.y);
          (a.y.min = o.target.y.min), (a.y.max = a.y.min + f);
        }
        Ve(l, a),
          Ln(l, c),
          Tr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
      }
    }
    registerSharedNode(o, l) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new fw()),
        this.sharedNodes.get(o).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(l)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: l } = this.options;
      return l
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: l } = this.options;
      return l
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: l, preserveFollowOpacity: a } = {}) {
      const u = this.getStack();
      u && u.promote(this, a),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        l && this.setOptions({ transition: l });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let l = !1;
      const { latestValues: a } = o;
      if (
        ((a.z ||
          a.rotate ||
          a.rotateX ||
          a.rotateY ||
          a.rotateZ ||
          a.skewX ||
          a.skewY) &&
          (l = !0),
        !l)
      )
        return;
      const u = {};
      a.z && Eo("z", o, u, this.animationValues);
      for (let c = 0; c < Po.length; c++)
        Eo(`rotate${Po[c]}`, o, u, this.animationValues),
          Eo(`skew${Po[c]}`, o, u, this.animationValues);
      o.render();
      for (const c in u)
        o.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var l, a;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return ww;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Vi(o == null ? void 0 : o.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const w = {};
        return (
          this.options.layoutId &&
            ((w.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (w.pointerEvents = Vi(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !Jt(this.latestValues) &&
            ((w.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          w
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = cd(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        c && (u.transform = c(f, u.transform));
      const { x: g, y } = this.projectionDelta;
      (u.transformOrigin = `${g.origin * 100}% ${y.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (a =
                    (l = f.opacity) !== null && l !== void 0
                      ? l
                      : this.latestValues.opacity) !== null && a !== void 0
                  ? a
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (const w in as) {
        if (f[w] === void 0) continue;
        const { correct: E, applyTo: m } = as[w],
          h = u.transform === "none" ? f[w] : E(f[w], d);
        if (m) {
          const p = m.length;
          for (let x = 0; x < p; x++) u[m[x]] = h;
        } else u[w] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            d === this
              ? Vi(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var l;
        return (l = o.currentAnimation) === null || l === void 0
          ? void 0
          : l.stop();
      }),
        this.root.nodes.forEach(fd),
        this.root.sharedNodes.clear();
    }
  };
}
function Sw(e) {
  e.updateLayout();
}
function Cw(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = n.source !== e.layout.source;
    s === "size"
      ? Ie((d) => {
          const f = o ? n.measuredBox[d] : n.layoutBox[d],
            g = Oe(f);
          (f.min = r[d].min), (f.max = f.min + g);
        })
      : om(s, n.layoutBox, r) &&
        Ie((d) => {
          const f = o ? n.measuredBox[d] : n.layoutBox[d],
            g = Oe(r[d]);
          (f.max = f.min + g),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + g));
        });
    const l = On();
    Tr(l, r, n.layoutBox);
    const a = On();
    o ? Tr(a, e.applyTransform(i, !0), n.measuredBox) : Tr(a, r, n.layoutBox);
    const u = !rm(l);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: g } = d;
        if (f && g) {
          const y = Y();
          Pr(y, n.layoutBox, f.layoutBox);
          const w = Y();
          Pr(w, r, g.layoutBox),
            im(y, w) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = w),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function Tw(e) {
  en.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Pw(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Ew(e) {
  e.clearSnapshot();
}
function fd(e) {
  e.clearMeasurements();
}
function kw(e) {
  e.isLayoutDirty = !1;
}
function jw(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function hd(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function Mw(e) {
  e.resolveTargetDelta();
}
function Nw(e) {
  e.calcProjection();
}
function Rw(e) {
  e.resetSkewAndRotation();
}
function _w(e) {
  e.removeLeadSnapshot();
}
function pd(e, t, n) {
  (e.translate = W(t.translate, 0, n)),
    (e.scale = W(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function md(e, t, n, r) {
  (e.min = W(t.min, n.min, r)), (e.max = W(t.max, n.max, r));
}
function Ow(e, t, n, r) {
  md(e.x, t.x, n.x, r), md(e.y, t.y, n.y, r);
}
function Lw(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Aw = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  vd = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  gd = vd("applewebkit/") && !vd("chrome/") ? Math.round : pe;
function yd(e) {
  (e.min = gd(e.min)), (e.max = gd(e.max));
}
function Vw(e) {
  yd(e.x), yd(e.y);
}
function om(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !Nl(ud(t), ud(n), 0.2))
  );
}
const Iw = sm({
    attachResizeListener: (e, t) => at(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  ko = { current: void 0 },
  lm = sm({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!ko.current) {
        const e = new Iw({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (ko.current = e);
      }
      return ko.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  Dw = {
    pan: { Feature: J1 },
    drag: { Feature: q1, ProjectionNode: lm, MeasureLayout: em },
  },
  Ll = { current: null },
  am = { current: !1 };
function zw() {
  if (((am.current = !0), !!Oa))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Ll.current = e.matches);
      e.addListener(t), t();
    } else Ll.current = !1;
}
function Fw(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const s = t[i],
      o = n[i];
    if (he(s)) e.addValue(i, s), hs(r) && r.add(i);
    else if (he(o)) e.addValue(i, Hr(s, { owner: e })), hs(r) && r.remove(i);
    else if (o !== s)
      if (e.hasValue(i)) {
        const l = e.getValue(i);
        l.liveStyle === !0 ? l.jump(s) : l.hasAnimated || l.set(s);
      } else {
        const l = e.getStaticValue(i);
        e.addValue(i, Hr(l !== void 0 ? l : s, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const wd = new WeakMap(),
  Bw = [...xp, de, Ut],
  bw = (e) => Bw.find(wp(e)),
  um = Object.keys($r),
  Uw = um.length,
  xd = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  $w = Ia.length;
function cm(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : cm(e.parent);
}
class Ww {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: s,
      visualState: o,
    },
    l = {}
  ) {
    (this.resolveKeyframes = (f, g, y, w) =>
      new this.KeyframeResolver(f, g, y, w, this)),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Ga),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => le.render(this.render, !1, !0));
    const { latestValues: a, renderState: u } = o;
    (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = l),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = Is(n)),
      (this.isVariantNode = Gh(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const f in d) {
      const g = d[f];
      a[f] !== void 0 && he(g) && (g.set(a[f], !1), hs(c) && c.add(f));
    }
  }
  mount(t) {
    (this.current = t),
      wd.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      am.current || zw(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Ll.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    var t;
    wd.delete(this.current),
      this.projection && this.projection.unmount(),
      bt(this.notifyUpdate),
      bt(this.render),
      this.valueSubscriptions.forEach((n) => n()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const n in this.events) this.events[n].clear();
    for (const n in this.features)
      (t = this.features[n]) === null || t === void 0 || t.unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = vn.has(t),
      i = n.on("change", (o) => {
        (this.latestValues[t] = o),
          this.props.onUpdate && le.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      s = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), s(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, i, s) {
    let o, l;
    for (let a = 0; a < Uw; a++) {
      const u = um[a],
        {
          isEnabled: c,
          Feature: d,
          ProjectionNode: f,
          MeasureLayout: g,
        } = $r[u];
      f && (o = f),
        c(n) &&
          (!this.features[u] && d && (this.features[u] = new d(this)),
          g && (l = g));
    }
    if (
      (this.type === "html" || this.type === "svg") &&
      !this.projection &&
      o
    ) {
      this.projection = new o(this.latestValues, cm(this.parent));
      const {
        layoutId: a,
        layout: u,
        drag: c,
        dragConstraints: d,
        layoutScroll: f,
        layoutRoot: g,
      } = n;
      this.projection.setOptions({
        layoutId: a,
        layout: u,
        alwaysMeasureLayout: !!c || (d && Rn(d)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: s,
        layoutScroll: f,
        layoutRoot: g,
      });
    }
    return l;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Y();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < xd.length; r++) {
      const i = xd[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = Fw(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < $w; r++) {
      const i = Ia[r],
        s = this.props[i];
      (Ur(s) || s === !1) && (n[i] = s);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Hr(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (gp(i) || mp(i))
          ? (i = parseFloat(i))
          : !bw(i) && Ut.test(n) && (i = Mp(t, n)),
        this.setBaseTarget(t, he(i) ? i.get() : i)),
      he(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const o = Ha(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      o && (i = o[t]);
    }
    if (r && i !== void 0) return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !he(s)
      ? s
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new iu()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class dm extends Ww {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Np);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function Hw(e) {
  return window.getComputedStyle(e);
}
class Kw extends dm {
  constructor() {
    super(...arguments), (this.type = "html");
  }
  readValueFromInstance(t, n) {
    if (vn.has(n)) {
      const r = Ya(n);
      return (r && r.default) || 0;
    } else {
      const r = Hw(t),
        i = (qh(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return qp(t, n);
  }
  build(t, n, r, i) {
    Ba(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Wa(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    he(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    rp(t, n, r, i);
  }
}
class Gw extends dm {
  constructor() {
    super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (vn.has(n)) {
      const r = Ya(n);
      return (r && r.default) || 0;
    }
    return (n = ip.has(n) ? n : La(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return Y();
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return op(t, n, r);
  }
  build(t, n, r, i) {
    Ua(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    sp(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = $a(t.tagName)), super.mount(t);
  }
}
const Qw = (e, t) =>
    Da(e)
      ? new Gw(t, { enableHardwareAcceleration: !1 })
      : new Kw(t, {
          allowProjection: e !== _.Fragment,
          enableHardwareAcceleration: !0,
        }),
  Yw = { layout: { ProjectionNode: lm, MeasureLayout: em } },
  Xw = { ...O1, ...Wg, ...Dw, ...Yw },
  ge = eg((e, t) => _g(e, t, Xw, Qw));
function Zw(e) {
  e.values.forEach((t) => t.stop());
}
function Al(e, t) {
  [...t].reverse().forEach((r) => {
    const i = e.getVariant(r);
    i && su(e, i),
      e.variantChildren &&
        e.variantChildren.forEach((s) => {
          Al(s, t);
        });
  });
}
function qw(e, t) {
  if (Array.isArray(t)) return Al(e, t);
  if (typeof t == "string") return Al(e, [t]);
  su(e, t);
}
function Jw() {
  const e = new Set(),
    t = {
      subscribe(n) {
        return e.add(n), () => void e.delete(n);
      },
      start(n, r) {
        const i = [];
        return (
          e.forEach((s) => {
            i.push(Kp(s, n, { transitionOverride: r }));
          }),
          Promise.all(i)
        );
      },
      set(n) {
        return e.forEach((r) => {
          qw(r, n);
        });
      },
      stop() {
        e.forEach((n) => {
          Zw(n);
        });
      },
      mount() {
        return () => {
          t.stop();
        };
      },
    };
  return t;
}
function ex() {
  const e = lp(Jw);
  return $h(e.mount, []), e;
}
const Sd = ex;
var fm = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Cd = jt.createContext && jt.createContext(fm),
  tx = ["attr", "size", "title"];
function nx(e, t) {
  if (e == null) return {};
  var n = rx(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function rx(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function ms() {
  return (
    (ms = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ms.apply(this, arguments)
  );
}
function Td(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function vs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Td(Object(n), !0).forEach(function (r) {
          ix(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Td(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function ix(e, t, n) {
  return (
    (t = sx(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function sx(e) {
  var t = ox(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function ox(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function hm(e) {
  return (
    e &&
    e.map((t, n) =>
      jt.createElement(t.tag, vs({ key: n }, t.attr), hm(t.child))
    )
  );
}
function lx(e) {
  return (t) =>
    jt.createElement(ax, ms({ attr: vs({}, e.attr) }, t), hm(e.child));
}
function ax(e) {
  var t = (n) => {
    var { attr: r, size: i, title: s } = e,
      o = nx(e, tx),
      l = i || n.size || "1em",
      a;
    return (
      n.className && (a = n.className),
      e.className && (a = (a ? a + " " : "") + e.className),
      jt.createElement(
        "svg",
        ms(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: a,
            style: vs(vs({ color: e.color || n.color }, n.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        s && jt.createElement("title", null, s),
        e.children
      )
    );
  };
  return Cd !== void 0
    ? jt.createElement(Cd.Consumer, null, (n) => t(n))
    : t(fm);
}
function ux(e) {
  return lx({
    tag: "svg",
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z",
        },
        child: [],
      },
    ],
  })(e);
}
function cx() {
  return v.jsxs("div", {
    "data-scroll": !0,
    "data-scroll-section": !0,
    "data-scroll-speed": "-.3",
    className: "w-full h-screen pt-1 bg-zinc-100",
    children: [
      v.jsx("div", {
        className: "textStracture mt-52 px-20",
        children: ["we create", "eye-opening", "presentations"].map((e, t) =>
          v.jsx(
            "div",
            {
              className: "masker",
              children: v.jsxs("div", {
                className: "w-fit flex ",
                children: [
                  t === 1 &&
                    v.jsx(ge.div, {
                      initial: { width: 0 },
                      animate: { width: "9vw" },
                      transition: { ease: [0.76, 0, 0.24, 1], duration: 1 },
                      className:
                        "mr-[1vw] w-[9vw] rounded-md h-[5.7vw] relative top-[2.8vw] ",
                      children: v.jsx("img", {
                        src: "/src/assets/Media/content-image01.jpg",
                        alt: "",
                        className: "w-[9vw] h-[5.7vw]",
                      }),
                    }),
                  v.jsx("h1", {
                    className:
                      "pt-[2vw] -mb-[1vw] uppercase text-[9vw] leading-[6.25vw]  font-[FoundersGrotesk] ",
                    children: e,
                  }),
                ],
              }),
            },
            t
          )
        ),
      }),
      v.jsxs("div", {
        className:
          "border-t-[1px] border-zinc-700 mt-[1vw] flex justify-between items-center py-5 px-20",
        children: [
          [
            "For public and privete companies",
            "From the first pitch to IPO",
          ].map((e, t) =>
            v.jsx(
              "p",
              {
                className: "text-base font-light tracking-tight leading-none",
                children: e,
              },
              t
            )
          ),
          v.jsxs("div", {
            className: "start flex items-center gap-5",
            children: [
              v.jsx("div", {
                className:
                  "px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase",
                children: "Start the Project",
              }),
              v.jsx("div", {
                className:
                  "w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-400",
                children: v.jsx("span", {
                  className: "rotate-[45deg]",
                  children: v.jsx(ux, {}),
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function dx() {
  return v.jsx("div", {
    className: "w-full -translate-y-[1vw] ",
    children: v.jsx("div", {
      "data-scroll": !0,
      "data-scroll-section": !0,
      "data-scroll-speed": ".2",
      className: "w-full py-20  rounded-tl-3xl rounded-tr-3xl bg-[#004d43]",
      children: v.jsxs("div", {
        className:
          "text  text-white flex gap-10  overflow-hidden whitespace-nowrap pr-20",
        children: [
          v.jsx(ge.h1, {
            initial: { X: "0" },
            animate: { x: "-100%" },
            transition: { repeat: 1 / 0, ease: "linear", duration: 10 },
            className:
              "text-[24vw] leading-none font-[FoundersGroteskCondensed] font-semibold  uppercase pt-10 -mb-[7vw]",
            children: "we are ochi",
          }),
          v.jsx(ge.h1, {
            initial: { X: "0" },
            animate: { x: "-100%" },
            transition: { repeat: 1 / 0, ease: "linear", duration: 10 },
            className:
              "text-[24vw] leading-none font-[FoundersGroteskCondensed] font-semibold  uppercase pt-10 -mb-[7vw]",
            children: "we are ochi",
          }),
          v.jsx(ge.h1, {
            initial: { X: "0" },
            animate: { x: "-100%" },
            transition: { repeat: 1 / 0, ease: "linear", duration: 10 },
            className:
              "text-[24vw] leading-none font-[FoundersGroteskCondensed] font-semibold  uppercase pt-10 -mb-[7vw]",
            children: "we are ochi",
          }),
          v.jsx(ge.h1, {
            initial: { X: "0" },
            animate: { x: "-100%" },
            transition: { repeat: 1 / 0, ease: "linear", duration: 10 },
            className:
              "text-[24vw] leading-none font-[FoundersGroteskCondensed] font-semibold  uppercase pt-10 -mb-[7vw]",
            children: "we are ochi",
          }),
          v.jsx(ge.h1, {
            initial: { X: "0" },
            animate: { x: "-100%" },
            transition: { repeat: 1 / 0, ease: "linear", duration: 10 },
            className:
              "text-[24vw] leading-none font-[FoundersGroteskCondensed] font-semibold  uppercase pt-10 -mb-[7vw]",
            children: "we are ochi",
          }),
          v.jsx(ge.h1, {
            initial: { X: "0" },
            animate: { x: "-100%" },
            transition: { repeat: 1 / 0, ease: "linear", duration: 10 },
            className:
              "text-[24vw] leading-none font-[FoundersGroteskCondensed] font-semibold  uppercase pt-10 -mb-[7vw]",
            children: "we are ochi",
          }),
        ],
      }),
    }),
  });
}
function fx() {
  return v.jsxs("div", {
    "data-scroll": !0,
    "data-scroll-section": !0,
    "data-scroll-speed": "-.05",
    className:
      "relative w-full -mt-[11vw] mb-[1vw] p-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black",
    children: [
      v.jsx("h1", {
        className: "font-[NeueMontreal] text-[4vw] leading-[4.5vw]",
        children:
          "Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.",
      }),
      v.jsx("div", {
        className: "w-full border-t-[1px] mt-20 border-[#a1b562]",
        children: v.jsxs("div", {
          className:
            "text-container py-7 flex justify-between font-[NeueMontreal]",
          children: [
            v.jsx("div", {
              className: "left-side px-5",
              children: v.jsx("h1", { children: "What you can expect:" }),
            }),
            v.jsxs("div", {
              className: "right-side flex gap-[10vw] px-36",
              children: [
                v.jsxs("div", {
                  className: "center",
                  children: [
                    v.jsx("p", {
                      className: "w-[15vw]  mb-7",
                      children:
                        "We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.",
                    }),
                    v.jsx("p", {
                      className: "w-[15vw]",
                      children:
                        "We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.",
                    }),
                  ],
                }),
                v.jsx("div", {
                  className: "rightEnd mt-[6.5vw]",
                  children: v.jsxs("p", {
                    children: [
                      v.jsx("h1", { children: "S:" }),
                      v.jsx("br", {}),
                      v.jsxs("ul", {
                        children: [
                          v.jsx("li", { children: "instagram" }),
                          v.jsx("li", { children: "Linkedin" }),
                          v.jsx("li", { children: "Behance" }),
                          v.jsx("li", { children: "Facebook" }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      v.jsxs("div", {
        className:
          "w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]",
        children: [
          v.jsxs("div", {
            className: "w-1/2",
            children: [
              v.jsx("h1", { className: "text-7xl", children: "Our approch: " }),
              v.jsxs("button", {
                className:
                  "uppercase  flex gap-10 items-center px-10 py-6 bg-zinc-900 rounded-full text-white mt-10",
                children: [
                  "Read more",
                  v.jsx("div", {
                    className: "w-2 h-2 bg-zinc-100 rounded-full",
                  }),
                ],
              }),
            ],
          }),
          v.jsx("div", {
            className: "w-[50vw] h-[51vh]",
            children: v.jsx("img", {
              src: "/src/assets/Media/Homepage-Photo-1326x939.jpg",
              alt: "",
              className: "object-cover rounded-3xl",
            }),
          }),
        ],
      }),
    ],
  });
}
function hx() {
  const [e, t] = _.useState(0);
  return (
    _.useEffect(() => {
      window.addEventListener("mousemove", (n) => {
        let r = n.clientX,
          i = n.clientY,
          s = r - window.innerWidth / 2,
          o = i - window.innerHeight / 2;
        var l = Math.atan2(o, s) * (180 / Math.PI);
        t(l - 100);
      });
    }),
    v.jsx("div", {
      className: "eyes w-full h-screen overflow-hidden",
      children: v.jsx("div", {
        "data-scroll": !0,
        "data-scroll-speed": "-.9",
        className:
          "relative w-full h-full bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg)]",
        children: v.jsxs("div", {
          className:
            "absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ",
          children: [
            v.jsx("div", {
              className:
                "w-[15vw] h-[15vw]  rounded-full flex items-center justify-center bg-zinc-100",
              children: v.jsx("div", {
                className:
                  "relative w-2/3 h-2/3 rounded-full items-center justify-center bg-zinc-900",
                children: v.jsx("div", {
                  style: { transform: `translate(-50%, -50%) rotate(${e}deg)` },
                  className:
                    "line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 ",
                  children: v.jsx("div", {
                    className: "w-10 h-10 rounded-full  bg-zinc-100",
                  }),
                }),
              }),
            }),
            v.jsx("div", {
              className:
                "w-[15vw] h-[15vw] rounded-full flex items-center justify-center bg-zinc-100",
              children: v.jsx("div", {
                className:
                  "relative w-2/3 h-2/3 rounded-full items-center justify-center bg-zinc-900",
                children: v.jsx("div", {
                  style: { transform: `translate(-50%, -50%) rotate(${e}deg)` },
                  className:
                    "line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10  ",
                  children: v.jsx("div", {
                    className: "w-10 h-10 rounded-full  bg-zinc-100",
                  }),
                }),
              }),
            }),
          ],
        }),
      }),
    })
  );
}
function px() {
  const e = [Sd(), Sd()],
    t = (r) => {
      e[r].start({ y: "0" });
    },
    n = (r) => {
      e[r].start({ y: "100%" });
    };
  return v.jsxs("div", {
    className: "w-full py-20",
    children: [
      v.jsx("div", {
        className: "w-full px-20 border-b-[1px] border-zinc-400 pb-10",
        children: v.jsx("h1", {
          className: "text-7xl font-[NeueMontreal] tracking-tight",
          children: "Featured projects",
        }),
      }),
      v.jsx("div", {
        className: "px-10",
        children: v.jsxs("div", {
          className: "cards w-full flex gap-10 mt-10",
          children: [
            v.jsxs(ge.div, {
              onHoverStart: () => t(0),
              onHoverEnd: () => n(0),
              className: "cardContaine relative w-1/2 h-[75vh]",
              children: [
                v.jsx("h1", {
                  className:
                    "absolute flex overflow-hidden text-[#cdea68] right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl",
                  children: "FYDE"
                    .split("")
                    .map((r, i) =>
                      v.jsx(ge.span, {
                        initial: { y: "100%" },
                        animate: e[0],
                        transition: {
                          ease: [0.22, 1, 0.36, 1],
                          delay: i * 0.05,
                        },
                        className: "inline-block",
                        children: r,
                      })
                    ),
                }),
                v.jsx("div", {
                  className: "card w-full h-full overflow-hidden rounded-xl",
                  children: v.jsx("img", {
                    className: "w-full h-full bg-cover",
                    src: "/src/assets/Media/Fyde_Illustration_Crypto_2-1326x1101.png",
                    alt: "",
                  }),
                }),
                v.jsxs("div", {
                  className: "btn-lines flex gap-3",
                  children: [
                    v.jsx("div", {
                      className:
                        "px-5 py-2 mt-5 w-[5vw] border-[1px] border-zinc-900 text-zinc-950   rounded-full font-light text-md uppercase",
                      children: "audit",
                    }),
                    v.jsx("div", {
                      className:
                        "px-5 py-2 mt-5 w-[9vw] border-[1px] border-zinc-900 text-zinc-950   rounded-full font-light text-md uppercase",
                      children: "copywriting",
                    }),
                    v.jsx("div", {
                      className:
                        "px-5 py-2 mt-5 w-[8vw] border-[1px] border-zinc-900 text-zinc-950   rounded-full font-light text-md uppercase",
                      children: "slaes deck",
                    }),
                    v.jsx("div", {
                      className:
                        "px-5 py-2 mt-5 w-[10vw] border-[1px] border-zinc-900 text-zinc-950   rounded-full font-light text-md uppercase",
                      children: "slides design",
                    }),
                  ],
                }),
              ],
            }),
            v.jsxs(ge.div, {
              onHoverStart: () => t(1),
              onHoverEnd: () => n(1),
              className: "cardContaine relative w-1/2 h-[75vh]",
              children: [
                v.jsx("h1", {
                  className:
                    "absolute flex overflow-hidden text-[#cdea68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl",
                  children: "VISE"
                    .split("")
                    .map((r, i) =>
                      v.jsx(ge.span, {
                        initial: { y: "100%" },
                        animate: e[1],
                        transition: {
                          ease: [0.22, 1, 0.36, 1],
                          delay: i * 0.05,
                        },
                        className: "inline-block",
                        children: r,
                      })
                    ),
                }),
                v.jsx("div", {
                  className: "card w-full h-full overflow-hidden rounded-xl",
                  children: v.jsx("img", {
                    className: "w-full h-full bg-cover",
                    src: "/src/assets/Media/Vise_front2-1326x1101.jpg",
                    alt: "",
                  }),
                }),
                v.jsxs("div", {
                  className: "btn-lines flex gap-3",
                  children: [
                    v.jsx("div", {
                      className:
                        "px-5 py-2 mt-5 w-[6vw] border-[1px] border-zinc-900 text-zinc-950   rounded-full font-light text-md uppercase",
                      children: "agency",
                    }),
                    v.jsx("div", {
                      className:
                        "px-5 py-2 mt-5 w-[14vw] border-[1px] border-zinc-900 text-zinc-950   rounded-full font-light text-md uppercase",
                      children: "company presentation",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      v.jsx("div", {
        className: "px-10",
        children: v.jsxs("div", {
          className: "cards w-full flex gap-10 mt-1",
          children: [
            v.jsx("div", {
              className:
                "DOt absolute w-[1vw] h-[2vh] mt-[6.7vw] translate-x-[.50vw] rounded-full bg-black",
            }),
            v.jsx("h1", {
              className:
                "t1 absolute z-10  py-5  text-2xl px-[5vw] mt-[5vw] -translate-x-[3vw]",
              children: "TRAWA",
            }),
            v.jsxs(ge.div, {
              onHoverStart: () => t(0),
              onHoverEnd: () => n(0),
              className: "cardContaine relative w-1/2 h-[75vh] mt-[9vw]",
              children: [
                v.jsx("h1", {
                  className:
                    "absolute flex overflow-hidden text-[#cdea68] right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl",
                  children: "TRAWA"
                    .split("")
                    .map((r, i) =>
                      v.jsx(ge.span, {
                        initial: { y: "100%" },
                        animate: e[0],
                        transition: {
                          ease: [0.22, 1, 0.36, 1],
                          delay: i * 0.05,
                        },
                        className: "inline-block",
                        children: r,
                      })
                    ),
                }),
                v.jsx("div", {
                  className: "card w-full h-full overflow-hidden rounded-xl",
                  children: v.jsx("img", {
                    className: "w-full h-full bg-cover",
                    src: "/src/assets/Media/feature2.jpg",
                    alt: "",
                  }),
                }),
                v.jsxs("div", {
                  className: "btn-lines flex gap-3",
                  children: [
                    v.jsx("div", {
                      className:
                        "px-5 py-2 mt-5 w-[10vw] border-[1px] border-zinc-900 text-zinc-950   rounded-full font-light text-md uppercase",
                      children: "brand identity",
                    }),
                    v.jsx("div", {
                      className:
                        "px-5 py-2 mt-5 w-[11vw] border-[1px] border-zinc-900 text-zinc-950   rounded-full font-light text-md uppercase",
                      children: "design research",
                    }),
                    v.jsx("div", {
                      className:
                        "px-5 py-2 mt-5 w-[11vw] border-[1px] border-zinc-900 text-zinc-950   rounded-full font-light text-md uppercase",
                      children: "investor check",
                    }),
                  ],
                }),
              ],
            }),
            v.jsx("div", {
              className:
                "DOt absolute w-[1vw] h-[2vh] left-[50%] mt-[6.7vw] translate-x-[3.5vw] rounded-full bg-black",
            }),
            v.jsx("h1", {
              className:
                "t2 absolute z-10  py-5 left-[50%] text-2xl px-[5vw] mt-[5vw]",
              children: "PREMIUM BLEND",
            }),
            v.jsxs(ge.div, {
              onHoverStart: () => t(1),
              onHoverEnd: () => n(1),
              className: "cardContaine relative w-1/2 h-[75vh] mt-[9vw]",
              children: [
                v.jsx("h1", {
                  className:
                    "absolute overflow-hidden flex text-[#cdea68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-nowrap leading-none tracking-tighter text-8xl",
                  children: "PREMIUM BLEND"
                    .split("")
                    .map((r, i) =>
                      v.jsx(ge.span, {
                        initial: { y: "100%" },
                        animate: e[1],
                        transition: {
                          ease: [0.22, 1, 0.36, 1],
                          delay: i * 0.05,
                        },
                        className: "inline-block",
                        children: r,
                      })
                    ),
                }),
                v.jsx("div", {
                  className: "card w-full h-full overflow-hidden rounded-xl",
                  children: v.jsx("img", {
                    className: "w-full h-full bg-cover",
                    src: "/src/assets/Media/feature2a.png",
                    alt: "",
                  }),
                }),
                v.jsx("div", {
                  className: "btn-lines flex gap-3",
                  children: v.jsx("div", {
                    className:
                      "px-5 py-2 mt-5 w-[11vw] border-[1px] border-zinc-900 text-zinc-950   rounded-full font-light text-md uppercase",
                    children: "brand template",
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      v.jsx("div", {
        className: "center-btn translate-y-[5vw] translate-x-[40%] mb-[5vw]",
        children: v.jsxs("button", {
          className:
            "uppercase  flex gap-10 items-center px-10 py-6 bg-zinc-900 rounded-full text-white mt-10 uppercase",
          children: [
            "view all case studies",
            v.jsx("div", { className: "w-2 h-2 bg-zinc-100 rounded-full" }),
          ],
        }),
      }),
    ],
  });
}
function mx() {
  return v.jsxs("div", {
    className: "w-full h-screen flex items-center px-32 gap-5 mt-[7vw]",
    children: [
      v.jsx("div", {
        className: "cardContainer w-1/2 h-[50vh]",
        children: v.jsxs("div", {
          className:
            "card relative w-full h-full flex items-center justify-center rounded-xl bg-[#004d43]",
          children: [
            v.jsx("img", {
              className: "w-32",
              src: "/src/assets/Media/Cards-ochi-logo.svg",
              alt: "",
            }),
            v.jsx("button", {
              className:
                "absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 text-lime-300 border-lime-300",
              children: "©2019-2022",
            }),
          ],
        }),
      }),
      v.jsxs("div", {
        className: "cardContainer w-1/2 h-[50vh] flex gap-5",
        children: [
          v.jsxs("div", {
            className:
              "card relative w-full h-full flex items-center justify-center rounded-xl bg-[#311010]",
            children: [
              v.jsx("img", {
                className: "w-32",
                src: "/src/assets/Media/logo-2.svg",
                alt: "",
              }),
              v.jsx("button", {
                className:
                  "absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 text-white border-white uppercase ",
                children: "rating 5.0 on clutch",
              }),
            ],
          }),
          v.jsxs("div", {
            className:
              "card relative w-full h-full flex items-center justify-center rounded-xl bg-slate-950",
            children: [
              v.jsx("img", {
                className: "w-32",
                src: "/src/assets/Media/logo-3.png",
                alt: "",
              }),
              v.jsx("button", {
                className:
                  "absolute px-4 py-1 -translate-x-5 border-2 rounded-full left-10 bottom-10 text-white border-white uppercase",
                children: "businness bootcamp alumni",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function vx() {
  return v.jsxs("div", {
    className: "w-full h-screen ",
    children: [
      v.jsx("div", {
        className: "w-full px-20 border-b-[1px] border-zinc-400 pb-10",
        children: v.jsx("h1", {
          className: "text-7xl font-[NeueMontreal] tracking-tight",
          children: "Clients' reviews",
        }),
      }),
      v.jsxs("div", {
        className: "containers flex mt-5",
        children: [
          v.jsxs("div", {
            className: "first-container w-1/2 font-[NeueMontreal] ",
            children: [
              v.jsxs("div", {
                className: "left-side flex justify-between ",
                children: [
                  v.jsx("h1", {
                    className: "text-2xl px-[3vw]",
                    children: "Karmen Ventures",
                  }),
                  v.jsx("h1", {
                    className: "text-2xl -translate-x-[7vw]",
                    children: "Services",
                  }),
                ],
              }),
              v.jsx("div", {
                className: "btn absolute  mt-[10%] translate-x-[30vw]",
                children: v.jsxs("div", {
                  className: "t1 uppercase",
                  children: [
                    v.jsx("h1", {
                      className:
                        "mb-7 px-5 py-2 border-[2px] border-black rounded-full text-2xl",
                      children: "investor deck",
                    }),
                    v.jsx("h1", {
                      className:
                        "mb-7 px-5 py-2 border-[2px] border-black rounded-full text-2xl",
                      children: "sales deck",
                    }),
                  ],
                }),
              }),
            ],
          }),
          v.jsxs("div", {
            className: "second-containe w-1/2 font-[NeueMontreal] ",
            children: [
              v.jsxs("div", {
                className: "right-side flex justify-between",
                children: [
                  v.jsx("h1", {
                    className: "text-2xl",
                    children: "Karmen Ventures",
                  }),
                  v.jsx("h1", {
                    className:
                      "text-2xl -translate-x-[1.5vw] text-zinc-500 uppercase",
                    children: "read",
                  }),
                ],
              }),
              v.jsxs("div", {
                className: "image",
                children: [
                  v.jsx("img", {
                    className: "w-[10vw] mt-[20%] rounded-xl",
                    src: "/src/assets/Media/willam.png",
                    alt: "",
                  }),
                  v.jsx("div", {
                    className: "font-line w-[29vw]",
                    children: v.jsx("p", {
                      className: "py-5",
                      children:
                        "They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5",
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      v.jsxs("div", {
        className: "table w-full px-7   font-[NeueMontreal] ",
        children: [
          v.jsxs("div", {
            className:
              "list w-full h-[3vw]  border-t-[1px] border-b-[1px] border-black flex justify-between  items-center px-[5vw] text-zinc-500",
            children: [
              v.jsx("h1", { children: "Planetly" }),
              v.jsx("h1", { children: "Nina Walloch" }),
              v.jsx("h1", { children: "READ" }),
            ],
          }),
          v.jsxs("div", {
            className:
              "list w-full h-[3vw]  border-b-[1px] border-black flex justify-between items-center px-[5vw]",
            children: [
              v.jsx("h1", { children: "Workiz Easy" }),
              v.jsx("h1", { children: "Tomer Levy" }),
              v.jsx("h1", { children: "READ" }),
            ],
          }),
          v.jsxs("div", {
            className:
              "list w-full h-[3vw]  border-b-[1px] border-black flex justify-between items-center px-[5vw]",
            children: [
              v.jsx("h1", { children: "Premium Blend" }),
              v.jsx("h1", { children: "Ellen Kim" }),
              v.jsx("h1", { children: "READ" }),
            ],
          }),
          v.jsxs("div", {
            className:
              "list w-full h-[3vw]  border-b-[1px] border-black flex justify-between items-center px-[5vw]",
            children: [
              v.jsx("h1", { children: "Planetly" }),
              v.jsx("h1", { children: "Brendan Goss" }),
              v.jsx("h1", { children: "READ" }),
            ],
          }),
          v.jsxs("div", {
            className:
              "list w-full h-[3vw]  border-b-[1px] border-black flex justify-between items-center px-[5vw]",
            children: [
              v.jsx("h1", { children: "Officevibe" }),
              v.jsx("h1", { children: "Raff Labrie" }),
              v.jsx("h1", { children: "READ" }),
            ],
          }),
          v.jsxs("div", {
            className:
              "list w-full h-[3vw]  border-b-[1px] border-black flex justify-between items-center px-[5vw]",
            children: [
              v.jsx("h1", { children: "Orderlion" }),
              v.jsx("h1", { children: "Stefan Strohmerh" }),
              v.jsx("h1", { children: "READ" }),
            ],
          }),
          v.jsxs("div", {
            className:
              "list w-full h-[3vw]  border-b-[1px] border-black flex justify-between items-center px-[5vw]",
            children: [
              v.jsx("h1", { children: "Officevibe" }),
              v.jsx("h1", { children: "Jaci Smith" }),
              v.jsx("h1", { children: "READ" }),
            ],
          }),
          v.jsxs("div", {
            className:
              "list w-full h-[3vw]  border-b-[1px] border-black flex justify-between items-center px-[5vw]",
            children: [
              v.jsx("h1", { children: "Black Book" }),
              v.jsx("h1", { children: "Nina Walloch" }),
              v.jsx("h1", { children: "READ" }),
            ],
          }),
          v.jsxs("div", {
            className:
              "list w-full h-[3vw]  border-b-[1px] border-black flex justify-between items-center px-[5vw]",
            children: [
              v.jsx("h1", { children: "Trawa Energy" }),
              v.jsx("h1", { children: "David Budde" }),
              v.jsx("h1", { children: "READ" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function gx() {
  return v.jsxs("div", {
    className:
      "flex gap-5 w-full h-screen p-20 -translate-y-[13vw] bg-zinc-200 font-[FoundersGrotesk]",
    children: [
      v.jsxs("div", {
        className: "w-1/2 h-full flex flex-col justify-between ",
        children: [
          v.jsxs("div", {
            className: "heading",
            children: [
              v.jsx("h1", {
                className: "text-[8vw] uppercase leading-none -mb-10",
                children: "Eye-",
              }),
              v.jsx("h1", {
                className: "text-[8vw] uppercase leading-none -mb-10",
                children: "Opening",
              }),
            ],
          }),
          v.jsxs("svg", {
            width: "72",
            height: "30",
            viewBox: "0 0 72 30",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              v.jsx("path", {
                d: "M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z",
                fill: "currentColor",
              }),
              v.jsx("path", {
                d: "M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z",
                fill: "currentColor",
              }),
              v.jsx("path", {
                d: "M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z",
                fill: "currentColor",
              }),
              v.jsx("path", {
                d: "M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z",
                fill: "currentColor",
              }),
              v.jsx("path", {
                d: "M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z",
                fill: "currentColor",
              }),
            ],
          }),
        ],
      }),
      v.jsxs("div", {
        className: "w-1/2",
        children: [
          v.jsx("h1", {
            className: "text-[8vw] uppercase leading-none -mb-10 ",
            children: "presentation",
          }),
          v.jsxs("div", {
            className: "details mt-20 font-[NeueMontreal]",
            children: [
              v.jsx("h1", { children: "S:" }),
              v.jsx("a", {
                className: "block text-xl font-light",
                href: "#",
                children: "FaceBook",
              }),
              v.jsx("a", {
                className: "block text-xl font-light",
                href: "#",
                children: "Instagram",
              }),
              v.jsx("a", {
                className: "block text-xl font-light",
                href: "#",
                children: "Twiter",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Vl() {
  return (
    (Vl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Vl.apply(this, arguments)
  );
}
function gs(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
let yx = class {
    advance(t) {
      var n;
      if (!this.isRunning) return;
      let r = !1;
      if (this.lerp)
        (this.value =
          ((i = this.value),
          (s = this.to),
          (1 - (o = 1 - Math.exp(-60 * this.lerp * t))) * i + o * s)),
          Math.round(this.value) === this.to &&
            ((this.value = this.to), (r = !0));
      else {
        this.currentTime += t;
        const l = gs(0, this.currentTime / this.duration, 1);
        r = l >= 1;
        const a = r ? 1 : this.easing(l);
        this.value = this.from + (this.to - this.from) * a;
      }
      var i, s, o;
      (n = this.onUpdate) == null || n.call(this, this.value, r),
        r && this.stop();
    }
    stop() {
      this.isRunning = !1;
    }
    fromTo(
      t,
      n,
      {
        lerp: r = 0.1,
        duration: i = 1,
        easing: s = (a) => a,
        onStart: o,
        onUpdate: l,
      }
    ) {
      (this.from = this.value = t),
        (this.to = n),
        (this.lerp = r),
        (this.duration = i),
        (this.easing = s),
        (this.currentTime = 0),
        (this.isRunning = !0),
        o == null || o(),
        (this.onUpdate = l);
    }
  },
  wx = class {
    constructor({ wrapper: t, content: n, autoResize: r = !0 } = {}) {
      if (
        ((this.resize = () => {
          this.onWrapperResize(), this.onContentResize();
        }),
        (this.onWrapperResize = () => {
          this.wrapper === window
            ? ((this.width = window.innerWidth),
              (this.height = window.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        }),
        (this.onContentResize = () => {
          (this.scrollHeight = this.content.scrollHeight),
            (this.scrollWidth = this.content.scrollWidth);
        }),
        (this.wrapper = t),
        (this.content = n),
        r)
      ) {
        const i = (function (s, o) {
          let l;
          return function () {
            let a = arguments,
              u = this;
            clearTimeout(l),
              (l = setTimeout(function () {
                s.apply(u, a);
              }, 250));
          };
        })(this.resize);
        this.wrapper !== window &&
          ((this.wrapperResizeObserver = new ResizeObserver(i)),
          this.wrapperResizeObserver.observe(this.wrapper)),
          (this.contentResizeObserver = new ResizeObserver(i)),
          this.contentResizeObserver.observe(this.content);
      }
      this.resize();
    }
    destroy() {
      var t, n;
      (t = this.wrapperResizeObserver) == null || t.disconnect(),
        (n = this.contentResizeObserver) == null || n.disconnect();
    }
    get limit() {
      return {
        x: this.scrollWidth - this.width,
        y: this.scrollHeight - this.height,
      };
    }
  },
  pm = class {
    constructor() {
      this.events = {};
    }
    emit(t, ...n) {
      let r = this.events[t] || [];
      for (let i = 0, s = r.length; i < s; i++) r[i](...n);
    }
    on(t, n) {
      var r;
      return (
        ((r = this.events[t]) != null && r.push(n)) || (this.events[t] = [n]),
        () => {
          var i;
          this.events[t] =
            (i = this.events[t]) == null ? void 0 : i.filter((s) => n !== s);
        }
      );
    }
    off(t, n) {
      var r;
      this.events[t] =
        (r = this.events[t]) == null ? void 0 : r.filter((i) => n !== i);
    }
    destroy() {
      this.events = {};
    }
  },
  xx = class {
    constructor(
      t,
      { wheelMultiplier: n = 1, touchMultiplier: r = 2, normalizeWheel: i = !1 }
    ) {
      (this.onTouchStart = (s) => {
        const { clientX: o, clientY: l } = s.targetTouches
          ? s.targetTouches[0]
          : s;
        (this.touchStart.x = o),
          (this.touchStart.y = l),
          (this.lastDelta = { x: 0, y: 0 });
      }),
        (this.onTouchMove = (s) => {
          const { clientX: o, clientY: l } = s.targetTouches
              ? s.targetTouches[0]
              : s,
            a = -(o - this.touchStart.x) * this.touchMultiplier,
            u = -(l - this.touchStart.y) * this.touchMultiplier;
          (this.touchStart.x = o),
            (this.touchStart.y = l),
            (this.lastDelta = { x: a, y: u }),
            this.emitter.emit("scroll", { deltaX: a, deltaY: u, event: s });
        }),
        (this.onTouchEnd = (s) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: s,
          });
        }),
        (this.onWheel = (s) => {
          let { deltaX: o, deltaY: l } = s;
          this.normalizeWheel &&
            ((o = gs(-100, o, 100)), (l = gs(-100, l, 100))),
            (o *= this.wheelMultiplier),
            (l *= this.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: o, deltaY: l, event: s });
        }),
        (this.element = t),
        (this.wheelMultiplier = n),
        (this.touchMultiplier = r),
        (this.normalizeWheel = i),
        (this.touchStart = { x: null, y: null }),
        (this.emitter = new pm()),
        this.element.addEventListener("wheel", this.onWheel, { passive: !1 }),
        this.element.addEventListener("touchstart", this.onTouchStart, {
          passive: !1,
        }),
        this.element.addEventListener("touchmove", this.onTouchMove, {
          passive: !1,
        }),
        this.element.addEventListener("touchend", this.onTouchEnd, {
          passive: !1,
        });
    }
    on(t, n) {
      return this.emitter.on(t, n);
    }
    destroy() {
      this.emitter.destroy(),
        this.element.removeEventListener("wheel", this.onWheel, {
          passive: !1,
        }),
        this.element.removeEventListener("touchstart", this.onTouchStart, {
          passive: !1,
        }),
        this.element.removeEventListener("touchmove", this.onTouchMove, {
          passive: !1,
        }),
        this.element.removeEventListener("touchend", this.onTouchEnd, {
          passive: !1,
        });
    }
  },
  Sx = class {
    constructor({
      wrapper: t = window,
      content: n = document.documentElement,
      wheelEventsTarget: r = t,
      eventsTarget: i = r,
      smoothWheel: s = !0,
      smoothTouch: o = !1,
      syncTouch: l = !1,
      syncTouchLerp: a = 0.1,
      __iosNoInertiaSyncTouchLerp: u = 0.4,
      touchInertiaMultiplier: c = 35,
      duration: d,
      easing: f = (S) => Math.min(1, 1.001 - Math.pow(2, -10 * S)),
      lerp: g = !d && 0.1,
      infinite: y = !1,
      orientation: w = "vertical",
      gestureOrientation: E = "vertical",
      touchMultiplier: m = 1,
      wheelMultiplier: h = 1,
      normalizeWheel: p = !1,
      autoResize: x = !0,
    } = {}) {
      (this.onVirtualScroll = ({ deltaX: S, deltaY: P, event: k }) => {
        if (k.ctrlKey) return;
        const T = k.type.includes("touch"),
          A = k.type.includes("wheel");
        if (
          (this.options.gestureOrientation === "both" && S === 0 && P === 0) ||
          (this.options.gestureOrientation === "vertical" && P === 0) ||
          (this.options.gestureOrientation === "horizontal" && S === 0) ||
          (T &&
            this.options.gestureOrientation === "vertical" &&
            this.scroll === 0 &&
            !this.options.infinite &&
            P <= 0)
        )
          return;
        let N = k.composedPath();
        if (
          ((N = N.slice(0, N.indexOf(this.rootElement))),
          N.find((ke) => {
            var Z;
            return (
              (ke.hasAttribute == null
                ? void 0
                : ke.hasAttribute("data-lenis-prevent")) ||
              (T &&
                (ke.hasAttribute == null
                  ? void 0
                  : ke.hasAttribute("data-lenis-prevent-touch"))) ||
              (A &&
                (ke.hasAttribute == null
                  ? void 0
                  : ke.hasAttribute("data-lenis-prevent-wheel"))) ||
              ((Z = ke.classList) == null ? void 0 : Z.contains("lenis"))
            );
          }))
        )
          return;
        if (this.isStopped || this.isLocked) return void k.preventDefault();
        if (
          ((this.isSmooth =
            ((this.options.smoothTouch || this.options.syncTouch) && T) ||
            (this.options.smoothWheel && A)),
          !this.isSmooth)
        )
          return (this.isScrolling = !1), void this.animate.stop();
        k.preventDefault();
        let b = P;
        this.options.gestureOrientation === "both"
          ? (b = Math.abs(P) > Math.abs(S) ? P : S)
          : this.options.gestureOrientation === "horizontal" && (b = S);
        const Xe = T && this.options.syncTouch,
          Ze = T && k.type === "touchend" && Math.abs(b) > 1;
        Ze && (b = this.velocity * this.options.touchInertiaMultiplier),
          this.scrollTo(
            this.targetScroll + b,
            Vl(
              { programmatic: !1 },
              Xe && {
                lerp: Ze
                  ? this.syncTouchLerp
                  : this.options.__iosNoInertiaSyncTouchLerp,
              }
            )
          );
      }),
        (this.onNativeScroll = () => {
          if (!this.__preventNextScrollEvent && !this.isScrolling) {
            const S = this.animatedScroll;
            (this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.velocity = 0),
              (this.direction = Math.sign(this.animatedScroll - S)),
              this.emit();
          }
        }),
        (window.lenisVersion = "1.0.29"),
        (t !== document.documentElement && t !== document.body) || (t = window),
        (this.options = {
          wrapper: t,
          content: n,
          wheelEventsTarget: r,
          eventsTarget: i,
          smoothWheel: s,
          smoothTouch: o,
          syncTouch: l,
          syncTouchLerp: a,
          __iosNoInertiaSyncTouchLerp: u,
          touchInertiaMultiplier: c,
          duration: d,
          easing: f,
          lerp: g,
          infinite: y,
          gestureOrientation: E,
          orientation: w,
          touchMultiplier: m,
          wheelMultiplier: h,
          normalizeWheel: p,
          autoResize: x,
        }),
        (this.animate = new yx()),
        (this.emitter = new pm()),
        (this.dimensions = new wx({ wrapper: t, content: n, autoResize: x })),
        this.toggleClass("lenis", !0),
        (this.velocity = 0),
        (this.isLocked = !1),
        (this.isStopped = !1),
        (this.isSmooth = l || s || o),
        (this.isScrolling = !1),
        (this.targetScroll = this.animatedScroll = this.actualScroll),
        this.options.wrapper.addEventListener("scroll", this.onNativeScroll, {
          passive: !1,
        }),
        (this.virtualScroll = new xx(i, {
          touchMultiplier: m,
          wheelMultiplier: h,
          normalizeWheel: p,
        })),
        this.virtualScroll.on("scroll", this.onVirtualScroll);
    }
    destroy() {
      this.emitter.destroy(),
        this.options.wrapper.removeEventListener(
          "scroll",
          this.onNativeScroll,
          { passive: !1 }
        ),
        this.virtualScroll.destroy(),
        this.dimensions.destroy(),
        this.toggleClass("lenis", !1),
        this.toggleClass("lenis-smooth", !1),
        this.toggleClass("lenis-scrolling", !1),
        this.toggleClass("lenis-stopped", !1),
        this.toggleClass("lenis-locked", !1);
    }
    on(t, n) {
      return this.emitter.on(t, n);
    }
    off(t, n) {
      return this.emitter.off(t, n);
    }
    setScroll(t) {
      this.isHorizontal
        ? (this.rootElement.scrollLeft = t)
        : (this.rootElement.scrollTop = t);
    }
    resize() {
      this.dimensions.resize();
    }
    emit() {
      this.emitter.emit("scroll", this);
    }
    reset() {
      (this.isLocked = !1),
        (this.isScrolling = !1),
        (this.animatedScroll = this.targetScroll = this.actualScroll),
        (this.velocity = 0),
        this.animate.stop();
    }
    start() {
      (this.isStopped = !1), this.reset();
    }
    stop() {
      (this.isStopped = !0), this.animate.stop(), this.reset();
    }
    raf(t) {
      const n = t - (this.time || t);
      (this.time = t), this.animate.advance(0.001 * n);
    }
    scrollTo(
      t,
      {
        offset: n = 0,
        immediate: r = !1,
        lock: i = !1,
        duration: s = this.options.duration,
        easing: o = this.options.easing,
        lerp: l = !s && this.options.lerp,
        onComplete: a = null,
        force: u = !1,
        programmatic: c = !0,
      } = {}
    ) {
      if ((!this.isStopped && !this.isLocked) || u) {
        if (["top", "left", "start"].includes(t)) t = 0;
        else if (["bottom", "right", "end"].includes(t)) t = this.limit;
        else {
          var d;
          let f;
          if (
            (typeof t == "string"
              ? (f = document.querySelector(t))
              : (d = t) != null && d.nodeType && (f = t),
            f)
          ) {
            if (this.options.wrapper !== window) {
              const y = this.options.wrapper.getBoundingClientRect();
              n -= this.isHorizontal ? y.left : y.top;
            }
            const g = f.getBoundingClientRect();
            t = (this.isHorizontal ? g.left : g.top) + this.animatedScroll;
          }
        }
        if (typeof t == "number") {
          if (
            ((t += n),
            (t = Math.round(t)),
            this.options.infinite
              ? c && (this.targetScroll = this.animatedScroll = this.scroll)
              : (t = gs(0, t, this.limit)),
            r)
          )
            return (
              (this.animatedScroll = this.targetScroll = t),
              this.setScroll(this.scroll),
              this.reset(),
              void (a == null || a(this))
            );
          if (!c) {
            if (t === this.targetScroll) return;
            this.targetScroll = t;
          }
          this.animate.fromTo(this.animatedScroll, t, {
            duration: s,
            easing: o,
            lerp: l,
            onStart: () => {
              i && (this.isLocked = !0), (this.isScrolling = !0);
            },
            onUpdate: (f, g) => {
              (this.isScrolling = !0),
                (this.velocity = f - this.animatedScroll),
                (this.direction = Math.sign(this.velocity)),
                (this.animatedScroll = f),
                this.setScroll(this.scroll),
                c && (this.targetScroll = f),
                g || this.emit(),
                g &&
                  (this.reset(),
                  this.emit(),
                  a == null || a(this),
                  (this.__preventNextScrollEvent = !0),
                  requestAnimationFrame(() => {
                    delete this.__preventNextScrollEvent;
                  }));
            },
          });
        }
      }
    }
    get rootElement() {
      return this.options.wrapper === window
        ? document.documentElement
        : this.options.wrapper;
    }
    get limit() {
      return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
    }
    get isHorizontal() {
      return this.options.orientation === "horizontal";
    }
    get actualScroll() {
      return this.isHorizontal
        ? this.rootElement.scrollLeft
        : this.rootElement.scrollTop;
    }
    get scroll() {
      return this.options.infinite
        ? ((this.animatedScroll % (t = this.limit)) + t) % t
        : this.animatedScroll;
      var t;
    }
    get progress() {
      return this.limit === 0 ? 1 : this.scroll / this.limit;
    }
    get isSmooth() {
      return this.__isSmooth;
    }
    set isSmooth(t) {
      this.__isSmooth !== t &&
        ((this.__isSmooth = t), this.toggleClass("lenis-smooth", t));
    }
    get isScrolling() {
      return this.__isScrolling;
    }
    set isScrolling(t) {
      this.__isScrolling !== t &&
        ((this.__isScrolling = t), this.toggleClass("lenis-scrolling", t));
    }
    get isStopped() {
      return this.__isStopped;
    }
    set isStopped(t) {
      this.__isStopped !== t &&
        ((this.__isStopped = t), this.toggleClass("lenis-stopped", t));
    }
    get isLocked() {
      return this.__isLocked;
    }
    set isLocked(t) {
      this.__isLocked !== t &&
        ((this.__isLocked = t), this.toggleClass("lenis-locked", t));
    }
    get className() {
      let t = "lenis";
      return (
        this.isStopped && (t += " lenis-stopped"),
        this.isLocked && (t += " lenis-locked"),
        this.isScrolling && (t += " lenis-scrolling"),
        this.isSmooth && (t += " lenis-smooth"),
        t
      );
    }
    toggleClass(t, n) {
      this.rootElement.classList.toggle(t, n),
        this.emitter.emit("className change", this);
    }
  };
function Il() {
  return (
    (Il = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Il.apply(this, arguments)
  );
}
class Pd {
  constructor({
    scrollElements: t,
    rootMargin: n = "-1px -1px -1px -1px",
    IORaf: r,
  }) {
    (this.scrollElements = void 0),
      (this.rootMargin = void 0),
      (this.IORaf = void 0),
      (this.observer = void 0),
      (this.scrollElements = t),
      (this.rootMargin = n),
      (this.IORaf = r),
      this._init();
  }
  _init() {
    this.observer = new IntersectionObserver(
      (t) => {
        t.forEach((n) => {
          const r = this.scrollElements.find((i) => i.$el === n.target);
          n.isIntersecting
            ? (r && (r.isAlreadyIntersected = !0), this._setInview(n))
            : r && r.isAlreadyIntersected && this._setOutOfView(n);
        });
      },
      { rootMargin: this.rootMargin }
    );
    for (const t of this.scrollElements) this.observe(t.$el);
  }
  destroy() {
    this.observer.disconnect();
  }
  observe(t) {
    t && this.observer.observe(t);
  }
  unobserve(t) {
    t && this.observer.unobserve(t);
  }
  _setInview(t) {
    const n = this.scrollElements.find((r) => r.$el === t.target);
    this.IORaf && (n == null || n.setInteractivityOn()),
      !this.IORaf && (n == null || n.setInview());
  }
  _setOutOfView(t) {
    const n = this.scrollElements.find((r) => r.$el === t.target);
    this.IORaf && (n == null || n.setInteractivityOff()),
      !this.IORaf && (n == null || n.setOutOfView()),
      (n != null && n.attributes.scrollRepeat) ||
        this.IORaf ||
        this.unobserve(t.target);
  }
}
function Ed(e, t, n, r, i) {
  return n + (((i - e) / (t - e)) * (r - n) || 0);
}
function kd(e, t) {
  return e.reduce((n, r) => (Math.abs(r - t) < Math.abs(n - t) ? r : n));
}
class Cx {
  constructor({
    $el: t,
    id: n,
    modularInstance: r,
    subscribeElementUpdateFn: i,
    unsubscribeElementUpdateFn: s,
    needRaf: o,
    scrollOrientation: l,
  }) {
    var a, u, c, d, f;
    (this.$el = void 0),
      (this.id = void 0),
      (this.needRaf = void 0),
      (this.attributes = void 0),
      (this.scrollOrientation = void 0),
      (this.isAlreadyIntersected = void 0),
      (this.intersection = void 0),
      (this.metrics = void 0),
      (this.currentScroll = void 0),
      (this.translateValue = void 0),
      (this.progress = void 0),
      (this.lastProgress = void 0),
      (this.modularInstance = void 0),
      (this.progressModularModules = void 0),
      (this.isInview = void 0),
      (this.isInteractive = void 0),
      (this.isInFold = void 0),
      (this.isFirstResize = void 0),
      (this.subscribeElementUpdateFn = void 0),
      (this.unsubscribeElementUpdateFn = void 0),
      (this.$el = t),
      (this.id = n),
      (this.needRaf = o),
      (this.scrollOrientation = l),
      (this.modularInstance = r),
      (this.subscribeElementUpdateFn = i),
      (this.unsubscribeElementUpdateFn = s),
      (this.attributes = {
        scrollClass:
          (a = this.$el.dataset.scrollClass) != null ? a : "is-inview",
        scrollOffset: (u = this.$el.dataset.scrollOffset) != null ? u : "0,0",
        scrollPosition:
          (c = this.$el.dataset.scrollPosition) != null ? c : "start,end",
        scrollModuleProgress: this.$el.dataset.scrollModuleProgress != null,
        scrollCssProgress: this.$el.dataset.scrollCssProgress != null,
        scrollEventProgress:
          (d = this.$el.dataset.scrollEventProgress) != null ? d : null,
        scrollSpeed:
          this.$el.dataset.scrollSpeed != null
            ? parseFloat(this.$el.dataset.scrollSpeed)
            : null,
        scrollRepeat: this.$el.dataset.scrollRepeat != null,
        scrollCall: (f = this.$el.dataset.scrollCall) != null ? f : null,
        scrollCallSelf: this.$el.dataset.scrollCallSelf != null,
        scrollIgnoreFold: this.$el.dataset.scrollIgnoreFold != null,
        scrollEnableTouchSpeed: this.$el.dataset.scrollEnableTouchSpeed != null,
      }),
      (this.intersection = { start: 0, end: 0 }),
      (this.metrics = { offsetStart: 0, offsetEnd: 0, bcr: {} }),
      (this.currentScroll =
        this.scrollOrientation === "vertical"
          ? window.scrollY
          : window.scrollX),
      (this.translateValue = 0),
      (this.progress = 0),
      (this.lastProgress = null),
      (this.progressModularModules = []),
      (this.isInview = !1),
      (this.isInteractive = !1),
      (this.isAlreadyIntersected = !1),
      (this.isInFold = !1),
      (this.isFirstResize = !0),
      this._init();
  }
  _init() {
    this.needRaf &&
      (this.modularInstance &&
        this.attributes.scrollModuleProgress &&
        this._getProgressModularModules(),
      this._resize());
  }
  onResize({ currentScroll: t }) {
    (this.currentScroll = t), this._resize();
  }
  onRender({ currentScroll: t, smooth: n }) {
    const r =
      this.scrollOrientation === "vertical"
        ? window.innerHeight
        : window.innerWidth;
    if (
      ((this.currentScroll = t),
      this._computeProgress(),
      this.attributes.scrollSpeed && !isNaN(this.attributes.scrollSpeed))
    )
      if (this.attributes.scrollEnableTouchSpeed || n) {
        if (this.isInFold) {
          const i = Math.max(0, this.progress);
          this.translateValue = i * r * this.attributes.scrollSpeed * -1;
        } else {
          const i = Ed(0, 1, -1, 1, this.progress);
          this.translateValue = i * r * this.attributes.scrollSpeed * -1;
        }
        this.$el.style.transform =
          this.scrollOrientation === "vertical"
            ? `translate3d(0, ${this.translateValue}px, 0)`
            : `translate3d(${this.translateValue}px, 0, 0)`;
      } else
        this.translateValue &&
          (this.$el.style.transform = "translate3d(0, 0, 0)"),
          (this.translateValue = 0);
  }
  setInview() {
    if (this.isInview) return;
    (this.isInview = !0), this.$el.classList.add(this.attributes.scrollClass);
    const t = this._getScrollCallFrom();
    this.attributes.scrollCall && this._dispatchCall("enter", t);
  }
  setOutOfView() {
    if (!this.isInview || !this.attributes.scrollRepeat) return;
    (this.isInview = !1),
      this.$el.classList.remove(this.attributes.scrollClass);
    const t = this._getScrollCallFrom();
    this.attributes.scrollCall && this._dispatchCall("leave", t);
  }
  setInteractivityOn() {
    this.isInteractive ||
      ((this.isInteractive = !0), this.subscribeElementUpdateFn(this));
  }
  setInteractivityOff() {
    this.isInteractive &&
      ((this.isInteractive = !1),
      this.unsubscribeElementUpdateFn(this),
      this.lastProgress != null &&
        this._computeProgress(kd([0, 1], this.lastProgress)));
  }
  _resize() {
    (this.metrics.bcr = this.$el.getBoundingClientRect()),
      this._computeMetrics(),
      this._computeIntersection(),
      this.isFirstResize &&
        ((this.isFirstResize = !1), this.isInFold && this.setInview());
  }
  _computeMetrics() {
    const { top: t, left: n, height: r, width: i } = this.metrics.bcr,
      s =
        this.scrollOrientation === "vertical"
          ? window.innerHeight
          : window.innerWidth,
      o = this.scrollOrientation === "vertical" ? r : i;
    (this.metrics.offsetStart =
      this.currentScroll +
      (this.scrollOrientation === "vertical" ? t : n) -
      this.translateValue),
      (this.metrics.offsetEnd = this.metrics.offsetStart + o),
      (this.isInFold =
        this.metrics.offsetStart < s && !this.attributes.scrollIgnoreFold);
  }
  _computeIntersection() {
    const t =
        this.scrollOrientation === "vertical"
          ? window.innerHeight
          : window.innerWidth,
      n =
        this.scrollOrientation === "vertical"
          ? this.metrics.bcr.height
          : this.metrics.bcr.width,
      r = this.attributes.scrollOffset.split(","),
      i = r[0] != null ? r[0].trim() : "0",
      s = r[1] != null ? r[1].trim() : "0",
      o = this.attributes.scrollPosition.split(",");
    let l = o[0] != null ? o[0].trim() : "start";
    const a = o[1] != null ? o[1].trim() : "end",
      u = i.includes("%")
        ? t * parseInt(i.replace("%", "").trim()) * 0.01
        : parseInt(i),
      c = s.includes("%")
        ? t * parseInt(s.replace("%", "").trim()) * 0.01
        : parseInt(s);
    switch ((this.isInFold && (l = "fold"), l)) {
      case "start":
      default:
        this.intersection.start = this.metrics.offsetStart - t + u;
        break;
      case "middle":
        this.intersection.start = this.metrics.offsetStart - t + u + 0.5 * n;
        break;
      case "end":
        this.intersection.start = this.metrics.offsetStart - t + u + n;
        break;
      case "fold":
        this.intersection.start = 0;
    }
    switch (a) {
      case "start":
        this.intersection.end = this.metrics.offsetStart - c;
        break;
      case "middle":
        this.intersection.end = this.metrics.offsetStart - c + 0.5 * n;
        break;
      default:
        this.intersection.end = this.metrics.offsetStart - c + n;
    }
    if (this.intersection.end <= this.intersection.start)
      switch (a) {
        case "start":
        default:
          this.intersection.end = this.intersection.start + 1;
          break;
        case "middle":
          this.intersection.end = this.intersection.start + 0.5 * n;
          break;
        case "end":
          this.intersection.end = this.intersection.start + n;
      }
  }
  _computeProgress(t) {
    const n =
      t ??
      ((r = Ed(
        this.intersection.start,
        this.intersection.end,
        0,
        1,
        this.currentScroll
      )) < 0
        ? 0
        : r > 1
        ? 1
        : r);
    var r;
    if (((this.progress = n), n != this.lastProgress)) {
      if (
        ((this.lastProgress = n),
        this.attributes.scrollCssProgress && this._setCssProgress(n),
        this.attributes.scrollEventProgress && this._setCustomEventProgress(n),
        this.attributes.scrollModuleProgress)
      )
        for (const i of this.progressModularModules)
          this.modularInstance &&
            this.modularInstance.call(
              "onScrollProgress",
              n,
              i.moduleName,
              i.moduleId
            );
      n > 0 && n < 1 && this.setInview(),
        n === 0 && this.setOutOfView(),
        n === 1 && this.setOutOfView();
    }
  }
  _setCssProgress(t = 0) {
    this.$el.style.setProperty("--progress", t.toString());
  }
  _setCustomEventProgress(t = 0) {
    const n = this.attributes.scrollEventProgress;
    if (!n) return;
    const r = new CustomEvent(n, { detail: { target: this.$el, progress: t } });
    window.dispatchEvent(r);
  }
  _getProgressModularModules() {
    if (!this.modularInstance) return;
    const t = Object.keys(this.$el.dataset).filter((r) => r.includes("module")),
      n = Object.entries(this.modularInstance.modules);
    if (t.length)
      for (const r of t) {
        const i = this.$el.dataset[r];
        if (!i) return;
        for (const s of n) {
          const [o, l] = s;
          i in l &&
            this.progressModularModules.push({ moduleName: o, moduleId: i });
        }
      }
  }
  _getScrollCallFrom() {
    const t = kd(
      [this.intersection.start, this.intersection.end],
      this.currentScroll
    );
    return this.intersection.start === t ? "start" : "end";
  }
  _dispatchCall(t, n) {
    var r, i;
    const s = (r = this.attributes.scrollCall) == null ? void 0 : r.split(","),
      o = (i = this.attributes) == null ? void 0 : i.scrollCallSelf;
    if (s && s.length > 1) {
      var l;
      const [a, u, c] = s;
      let d;
      (d = o ? this.$el.dataset[`module${u.trim()}`] : c),
        this.modularInstance &&
          this.modularInstance.call(
            a.trim(),
            { target: this.$el, way: t, from: n },
            u.trim(),
            (l = d) == null ? void 0 : l.trim()
          );
    } else if (s) {
      const [a] = s,
        u = new CustomEvent(a, {
          detail: { target: this.$el, way: t, from: n },
        });
      window.dispatchEvent(u);
    }
  }
}
const Tx = [
  "scrollOffset",
  "scrollPosition",
  "scrollModuleProgress",
  "scrollCssProgress",
  "scrollEventProgress",
  "scrollSpeed",
];
class Px {
  constructor({
    $el: t,
    modularInstance: n,
    triggerRootMargin: r,
    rafRootMargin: i,
    scrollOrientation: s,
  }) {
    (this.$scrollContainer = void 0),
      (this.modularInstance = void 0),
      (this.triggerRootMargin = void 0),
      (this.rafRootMargin = void 0),
      (this.scrollElements = void 0),
      (this.triggeredScrollElements = void 0),
      (this.RAFScrollElements = void 0),
      (this.scrollElementsToUpdate = void 0),
      (this.IOTriggerInstance = void 0),
      (this.IORafInstance = void 0),
      (this.scrollOrientation = void 0),
      t
        ? ((this.$scrollContainer = t),
          (this.modularInstance = n),
          (this.scrollOrientation = s),
          (this.triggerRootMargin = r ?? "-1px -1px -1px -1px"),
          (this.rafRootMargin = i ?? "100% 100% 100% 100%"),
          (this.scrollElements = []),
          (this.triggeredScrollElements = []),
          (this.RAFScrollElements = []),
          (this.scrollElementsToUpdate = []),
          this._init())
        : console.error("Please provide a DOM Element as scrollContainer");
  }
  _init() {
    const t = this.$scrollContainer.querySelectorAll("[data-scroll]"),
      n = Array.from(t);
    this._subscribeScrollElements(n),
      (this.IOTriggerInstance = new Pd({
        scrollElements: [...this.triggeredScrollElements],
        rootMargin: this.triggerRootMargin,
        IORaf: !1,
      })),
      (this.IORafInstance = new Pd({
        scrollElements: [...this.RAFScrollElements],
        rootMargin: this.rafRootMargin,
        IORaf: !0,
      }));
  }
  destroy() {
    this.IOTriggerInstance.destroy(),
      this.IORafInstance.destroy(),
      this._unsubscribeAllScrollElements();
  }
  onResize({ currentScroll: t }) {
    for (const n of this.RAFScrollElements) n.onResize({ currentScroll: t });
  }
  onRender({ currentScroll: t, smooth: n }) {
    for (const r of this.scrollElementsToUpdate)
      r.onRender({ currentScroll: t, smooth: n });
  }
  removeScrollElements(t) {
    const n = t.querySelectorAll("[data-scroll]");
    if (n.length) {
      for (let r = 0; r < this.triggeredScrollElements.length; r++) {
        const i = this.triggeredScrollElements[r];
        Array.from(n).indexOf(i.$el) > -1 &&
          (this.IOTriggerInstance.unobserve(i.$el),
          this.triggeredScrollElements.splice(r, 1));
      }
      for (let r = 0; r < this.RAFScrollElements.length; r++) {
        const i = this.RAFScrollElements[r];
        Array.from(n).indexOf(i.$el) > -1 &&
          (this.IORafInstance.unobserve(i.$el),
          this.RAFScrollElements.splice(r, 1));
      }
      n.forEach((r) => {
        const i = this.scrollElementsToUpdate.find((o) => o.$el === r),
          s = this.scrollElements.find((o) => o.$el === r);
        i && this._unsubscribeElementUpdate(i),
          s &&
            (this.scrollElements = this.scrollElements.filter(
              (o) => o.id != s.id
            ));
      });
    }
  }
  addScrollElements(t) {
    const n = t.querySelectorAll("[data-scroll]"),
      r = [];
    this.scrollElements.forEach((o) => {
      r.push(o.id);
    });
    const i = Math.max(...r) + 1,
      s = Array.from(n);
    this._subscribeScrollElements(s, i, !0);
  }
  _subscribeScrollElements(t, n = 0, r = !1) {
    for (let i = 0; i < t.length; i++) {
      const s = t[i],
        o = this._checkRafNeeded(s),
        l = new Cx({
          $el: s,
          id: n + i,
          scrollOrientation: this.scrollOrientation,
          modularInstance: this.modularInstance,
          subscribeElementUpdateFn: this._subscribeElementUpdate.bind(this),
          unsubscribeElementUpdateFn: this._unsubscribeElementUpdate.bind(this),
          needRaf: o,
        });
      this.scrollElements.push(l),
        o
          ? (this.RAFScrollElements.push(l),
            r &&
              (this.IORafInstance.scrollElements.push(l),
              this.IORafInstance.observe(l.$el)))
          : (this.triggeredScrollElements.push(l),
            r &&
              (this.IOTriggerInstance.scrollElements.push(l),
              this.IOTriggerInstance.observe(l.$el)));
    }
  }
  _unsubscribeAllScrollElements() {
    (this.scrollElements = []),
      (this.RAFScrollElements = []),
      (this.triggeredScrollElements = []),
      (this.scrollElementsToUpdate = []);
  }
  _subscribeElementUpdate(t) {
    this.scrollElementsToUpdate.push(t);
  }
  _unsubscribeElementUpdate(t) {
    this.scrollElementsToUpdate = this.scrollElementsToUpdate.filter(
      (n) => n.id != t.id
    );
  }
  _checkRafNeeded(t) {
    let n = [...Tx];
    const r = (i) => {
      n = n.filter((s) => s != i);
    };
    if (t.dataset.scrollOffset) {
      if (
        t.dataset.scrollOffset
          .split(",")
          .map((i) => i.replace("%", "").trim())
          .join(",") != "0,0"
      )
        return !0;
      r("scrollOffset");
    } else r("scrollOffset");
    if (t.dataset.scrollPosition) {
      if (t.dataset.scrollPosition.trim() != "top,bottom") return !0;
      r("scrollPosition");
    } else r("scrollPosition");
    if (t.dataset.scrollSpeed && !isNaN(parseFloat(t.dataset.scrollSpeed)))
      return !0;
    r("scrollSpeed");
    for (const i of n) if (i in t.dataset) return !0;
    return !1;
  }
}
class Ex {
  constructor({ resizeElements: t, resizeCallback: n = () => {} }) {
    (this.$resizeElements = void 0),
      (this.isFirstObserve = void 0),
      (this.observer = void 0),
      (this.resizeCallback = void 0),
      (this.$resizeElements = t),
      (this.resizeCallback = n),
      (this.isFirstObserve = !0),
      this._init();
  }
  _init() {
    this.observer = new ResizeObserver((t) => {
      var n;
      !this.isFirstObserve &&
        ((n = this.resizeCallback) == null || n.call(this)),
        (this.isFirstObserve = !1);
    });
    for (const t of this.$resizeElements) this.observer.observe(t);
  }
  destroy() {
    this.observer.disconnect();
  }
}
const jd = {
  wrapper: window,
  content: document.documentElement,
  eventsTarget: window,
  lerp: 0.1,
  duration: 0.75,
  orientation: "vertical",
  gestureOrientation: "vertical",
  smoothWheel: !0,
  smoothTouch: !1,
  syncTouch: !1,
  syncTouchLerp: 0.1,
  touchInertiaMultiplier: 35,
  wheelMultiplier: 1,
  touchMultiplier: 2,
  normalizeWheel: !1,
  autoResize: !0,
  easing: (e) => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
};
class kx {
  constructor({
    lenisOptions: t = {},
    modularInstance: n,
    triggerRootMargin: r,
    rafRootMargin: i,
    autoResize: s = !0,
    autoStart: o = !0,
    scrollCallback: l = () => {},
    initCustomTicker: a,
    destroyCustomTicker: u,
  } = {}) {
    (this.rafPlaying = void 0),
      (this.lenisInstance = void 0),
      (this.coreInstance = void 0),
      (this.lenisOptions = void 0),
      (this.modularInstance = void 0),
      (this.triggerRootMargin = void 0),
      (this.rafRootMargin = void 0),
      (this.rafInstance = void 0),
      (this.autoResize = void 0),
      (this.autoStart = void 0),
      (this.ROInstance = void 0),
      (this.initCustomTicker = void 0),
      (this.destroyCustomTicker = void 0),
      (this._onRenderBind = void 0),
      (this._onResizeBind = void 0),
      (this._onScrollToBind = void 0),
      (this.lenisOptions = Il({}, jd, t)),
      Object.assign(this, {
        lenisOptions: t,
        modularInstance: n,
        triggerRootMargin: r,
        rafRootMargin: i,
        autoResize: s,
        autoStart: o,
        scrollCallback: l,
        initCustomTicker: a,
        destroyCustomTicker: u,
      }),
      (this._onRenderBind = this._onRender.bind(this)),
      (this._onScrollToBind = this._onScrollTo.bind(this)),
      (this._onResizeBind = this._onResize.bind(this)),
      (this.rafPlaying = !1),
      this._init();
  }
  _init() {
    var t;
    (this.lenisInstance = new Sx({
      wrapper: this.lenisOptions.wrapper,
      content: this.lenisOptions.content,
      eventsTarget: this.lenisOptions.eventsTarget,
      lerp: this.lenisOptions.lerp,
      duration: this.lenisOptions.duration,
      orientation: this.lenisOptions.orientation,
      gestureOrientation: this.lenisOptions.gestureOrientation,
      smoothWheel: this.lenisOptions.smoothWheel,
      smoothTouch: this.lenisOptions.smoothTouch,
      syncTouch: this.lenisOptions.syncTouch,
      syncTouchLerp: this.lenisOptions.syncTouchLerp,
      touchInertiaMultiplier: this.lenisOptions.touchInertiaMultiplier,
      wheelMultiplier: this.lenisOptions.wheelMultiplier,
      touchMultiplier: this.lenisOptions.touchMultiplier,
      normalizeWheel: this.lenisOptions.normalizeWheel,
      easing: this.lenisOptions.easing,
    })),
      (t = this.lenisInstance) == null || t.on("scroll", this.scrollCallback),
      document.documentElement.setAttribute(
        "data-scroll-orientation",
        this.lenisInstance.options.orientation
      ),
      requestAnimationFrame(() => {
        (this.coreInstance = new Px({
          $el: this.lenisInstance.rootElement,
          modularInstance: this.modularInstance,
          triggerRootMargin: this.triggerRootMargin,
          rafRootMargin: this.rafRootMargin,
          scrollOrientation: this.lenisInstance.options.orientation,
        })),
          this._bindEvents(),
          this.initCustomTicker && !this.destroyCustomTicker
            ? console.warn(
                "initCustomTicker callback is declared, but destroyCustomTicker is not. Please pay attention. It could cause trouble."
              )
            : !this.initCustomTicker &&
              this.destroyCustomTicker &&
              console.warn(
                "destroyCustomTicker callback is declared, but initCustomTicker is not. Please pay attention. It could cause trouble."
              ),
          this.autoStart && this.start();
      });
  }
  destroy() {
    var t;
    this.stop(),
      this._unbindEvents(),
      this.lenisInstance.destroy(),
      (t = this.coreInstance) == null || t.destroy(),
      requestAnimationFrame(() => {
        var n;
        (n = this.coreInstance) == null || n.destroy();
      });
  }
  _bindEvents() {
    this._bindScrollToEvents(),
      this.autoResize &&
        ("ResizeObserver" in window
          ? (this.ROInstance = new Ex({
              resizeElements: [document.body],
              resizeCallback: this._onResizeBind,
            }))
          : window.addEventListener("resize", this._onResizeBind));
  }
  _unbindEvents() {
    this._unbindScrollToEvents(),
      this.autoResize &&
        ("ResizeObserver" in window
          ? this.ROInstance && this.ROInstance.destroy()
          : window.removeEventListener("resize", this._onResizeBind));
  }
  _bindScrollToEvents(t) {
    const n = t || this.lenisInstance.rootElement,
      r = n == null ? void 0 : n.querySelectorAll("[data-scroll-to]");
    r != null &&
      r.length &&
      r.forEach((i) => {
        i.addEventListener("click", this._onScrollToBind, !1);
      });
  }
  _unbindScrollToEvents(t) {
    const n = t || this.lenisInstance.rootElement,
      r = n == null ? void 0 : n.querySelectorAll("[data-scroll-to]");
    r != null &&
      r.length &&
      r.forEach((i) => {
        i.removeEventListener("click", this._onScrollToBind, !1);
      });
  }
  _onResize() {
    requestAnimationFrame(() => {
      var t;
      (t = this.coreInstance) == null ||
        t.onResize({ currentScroll: this.lenisInstance.scroll });
    });
  }
  _onRender() {
    var t, n;
    (t = this.lenisInstance) == null || t.raf(Date.now()),
      (n = this.coreInstance) == null ||
        n.onRender({
          currentScroll: this.lenisInstance.scroll,
          smooth: this.lenisInstance.isSmooth,
        });
  }
  _onScrollTo(t) {
    var n;
    t.preventDefault();
    const r = (n = t.currentTarget) != null ? n : null;
    if (!r) return;
    const i = r.getAttribute("data-scroll-to-href") || r.getAttribute("href"),
      s = r.getAttribute("data-scroll-to-offset") || 0,
      o =
        r.getAttribute("data-scroll-to-duration") ||
        this.lenisOptions.duration ||
        jd.duration;
    i &&
      this.scrollTo(i, {
        offset: typeof s == "string" ? parseInt(s) : s,
        duration: typeof o == "string" ? parseInt(o) : o,
      });
  }
  start() {
    var t;
    this.rafPlaying ||
      ((t = this.lenisInstance) == null || t.start(),
      (this.rafPlaying = !0),
      this.initCustomTicker
        ? this.initCustomTicker(this._onRenderBind)
        : this._raf());
  }
  stop() {
    var t;
    this.rafPlaying &&
      ((t = this.lenisInstance) == null || t.stop(),
      (this.rafPlaying = !1),
      this.destroyCustomTicker
        ? this.destroyCustomTicker(this._onRenderBind)
        : this.rafInstance && cancelAnimationFrame(this.rafInstance));
  }
  removeScrollElements(t) {
    var n;
    t
      ? (this._unbindScrollToEvents(t),
        (n = this.coreInstance) == null || n.removeScrollElements(t))
      : console.error("Please provide a DOM Element as $oldContainer");
  }
  addScrollElements(t) {
    var n;
    t
      ? ((n = this.coreInstance) == null || n.addScrollElements(t),
        requestAnimationFrame(() => {
          this._bindScrollToEvents(t);
        }))
      : console.error("Please provide a DOM Element as $newContainer");
  }
  resize() {
    this._onResizeBind();
  }
  scrollTo(t, n) {
    var r;
    (r = this.lenisInstance) == null ||
      r.scrollTo(t, {
        offset: n == null ? void 0 : n.offset,
        lerp: n == null ? void 0 : n.lerp,
        duration: n == null ? void 0 : n.duration,
        immediate: n == null ? void 0 : n.immediate,
        lock: n == null ? void 0 : n.lock,
        force: n == null ? void 0 : n.force,
        easing: n == null ? void 0 : n.easing,
        onComplete: n == null ? void 0 : n.onComplete,
      });
  }
  _raf() {
    this._onRenderBind(),
      (this.rafInstance = requestAnimationFrame(() => this._raf()));
  }
}
function jx() {
  return (
    new kx(),
    v.jsxs("div", {
      className: "w-full h-screen text-black bg-zinc-200",
      children: [
        v.jsx(bv, {}),
        v.jsx(cx, {}),
        v.jsx(dx, {}),
        v.jsx(fx, {}),
        v.jsx(hx, {}),
        v.jsx(px, {}),
        v.jsx(vx, {}),
        v.jsx(mx, {}),
        v.jsx(gx, {}),
      ],
    })
  );
}
jo.createRoot(document.getElementById("root")).render(
  v.jsx(jt.StrictMode, { children: v.jsx(jx, {}) })
);
