var so = Object.defineProperty,
    lo = Object.defineProperties;
var co = Object.getOwnPropertyDescriptors;
var fe = Object.getOwnPropertySymbols;
var jn = Object.prototype.hasOwnProperty,
    Gn = Object.prototype.propertyIsEnumerable;
var Bn = (t, n, e) => n in t ? so(t, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : t[n] = e,
    z = (t, n) => {
        for (var e in n || (n = {})) jn.call(n, e) && Bn(t, e, n[e]);
        if (fe)
            for (var e of fe(n)) Gn.call(n, e) && Bn(t, e, n[e]);
        return t
    },
    ut = (t, n) => lo(t, co(n));
var Qt = (t, n) => {
    var e = {};
    for (var r in t) jn.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
    if (t != null && fe)
        for (var r of fe(t)) n.indexOf(r) < 0 && Gn.call(t, r) && (e[r] = t[r]);
    return e
};
var st = (t, n, e) => new Promise((r, i) => {
    var o = u => {
            try {
                d(e.next(u))
            } catch (s) {
                i(s)
            }
        },
        a = u => {
            try {
                d(e.throw(u))
            } catch (s) {
                i(s)
            }
        },
        d = u => u.done ? r(u.value) : Promise.resolve(u.value).then(o, a);
    d((e = e.apply(t, n)).next())
});
import "./sentry-1CVSdSoY.js";
import {
    g as fn,
    c as fo
} from "./index-BpOda8Pq.js";
(function() {
    try {
        var t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {},
            n = new t.Error().stack;
        n && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[n] = "8bfe0b85-7205-4ea3-9383-fc9f165a7d68", t._sentryDebugIdIdentifier = "sentry-dbid-8bfe0b85-7205-4ea3-9383-fc9f165a7d68")
    } catch (e) {}
})();
var Yr = {
        exports: {}
    },
    zr = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(t) {
    function n(b, N) {
        var w = b.length;
        b.push(N);
        t: for (; 0 < w;) {
            var I = w - 1 >>> 1,
                D = b[I];
            if (0 < i(D, N)) b[I] = N, b[w] = D, w = I;
            else break t
        }
    }

    function e(b) {
        return b.length === 0 ? null : b[0]
    }

    function r(b) {
        if (b.length === 0) return null;
        var N = b[0],
            w = b.pop();
        if (w !== N) {
            b[0] = w;
            t: for (var I = 0, D = b.length, K = D >>> 1; I < K;) {
                var W = 2 * (I + 1) - 1,
                    nt = b[W],
                    Q = W + 1,
                    U = b[Q];
                if (0 > i(nt, w)) Q < D && 0 > i(U, nt) ? (b[I] = U, b[Q] = w, I = Q) : (b[I] = nt, b[W] = w, I = W);
                else if (Q < D && 0 > i(U, w)) b[I] = U, b[Q] = w, I = Q;
                else break t
            }
        }
        return N
    }

    function i(b, N) {
        var w = b.sortIndex - N.sortIndex;
        return w !== 0 ? w : b.id - N.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        t.unstable_now = function() {
            return o.now()
        }
    } else {
        var a = Date,
            d = a.now();
        t.unstable_now = function() {
            return a.now() - d
        }
    }
    var u = [],
        s = [],
        f = 1,
        l = null,
        c = 3,
        p = !1,
        $ = !1,
        g = !1,
        h = typeof setTimeout == "function" ? setTimeout : null,
        m = typeof clearTimeout == "function" ? clearTimeout : null,
        y = typeof setImmediate != "undefined" ? setImmediate : null;
    typeof navigator != "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function v(b) {
        for (var N = e(s); N !== null;) {
            if (N.callback === null) r(s);
            else if (N.startTime <= b) r(s), N.sortIndex = N.expirationTime, n(u, N);
            else break;
            N = e(s)
        }
    }

    function P(b) {
        if (g = !1, v(b), !$)
            if (e(u) !== null) $ = !0, k(C);
            else {
                var N = e(s);
                N !== null && B(P, N.startTime - b)
            }
    }

    function C(b, N) {
        $ = !1, g && (g = !1, m(S), S = -1), p = !0;
        var w = c;
        try {
            for (v(N), l = e(u); l !== null && (!(l.expirationTime > N) || b && !_());) {
                var I = l.callback;
                if (typeof I == "function") {
                    l.callback = null, c = l.priorityLevel;
                    var D = I(l.expirationTime <= N);
                    N = t.unstable_now(), typeof D == "function" ? l.callback = D : l === e(u) && r(u), v(N)
                } else r(u);
                l = e(u)
            }
            if (l !== null) var K = !0;
            else {
                var W = e(s);
                W !== null && B(P, W.startTime - N), K = !1
            }
            return K
        } finally {
            l = null, c = w, p = !1
        }
    }
    var O = !1,
        x = null,
        S = -1,
        A = 5,
        T = -1;

    function _() {
        return !(t.unstable_now() - T < A)
    }

    function L() {
        if (x !== null) {
            var b = t.unstable_now();
            T = b;
            var N = !0;
            try {
                N = x(!0, b)
            } finally {
                N ? M() : (O = !1, x = null)
            }
        } else O = !1
    }
    var M;
    if (typeof y == "function") M = function() {
        y(L)
    };
    else if (typeof MessageChannel != "undefined") {
        var F = new MessageChannel,
            R = F.port2;
        F.port1.onmessage = L, M = function() {
            R.postMessage(null)
        }
    } else M = function() {
        h(L, 0)
    };

    function k(b) {
        x = b, O || (O = !0, M())
    }

    function B(b, N) {
        S = h(function() {
            b(t.unstable_now())
        }, N)
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(b) {
        b.callback = null
    }, t.unstable_continueExecution = function() {
        $ || p || ($ = !0, k(C))
    }, t.unstable_forceFrameRate = function(b) {
        0 > b || 125 < b ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < b ? Math.floor(1e3 / b) : 5
    }, t.unstable_getCurrentPriorityLevel = function() {
        return c
    }, t.unstable_getFirstCallbackNode = function() {
        return e(u)
    }, t.unstable_next = function(b) {
        switch (c) {
            case 1:
            case 2:
            case 3:
                var N = 3;
                break;
            default:
                N = c
        }
        var w = c;
        c = N;
        try {
            return b()
        } finally {
            c = w
        }
    }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(b, N) {
        switch (b) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                b = 3
        }
        var w = c;
        c = b;
        try {
            return N()
        } finally {
            c = w
        }
    }, t.unstable_scheduleCallback = function(b, N, w) {
        var I = t.unstable_now();
        switch (typeof w == "object" && w !== null ? (w = w.delay, w = typeof w == "number" && 0 < w ? I + w : I) : w = I, b) {
            case 1:
                var D = -1;
                break;
            case 2:
                D = 250;
                break;
            case 5:
                D = 1073741823;
                break;
            case 4:
                D = 1e4;
                break;
            default:
                D = 5e3
        }
        return D = w + D, b = {
            id: f++,
            callback: N,
            priorityLevel: b,
            startTime: w,
            expirationTime: D,
            sortIndex: -1
        }, w > I ? (b.sortIndex = w, n(s, b), e(u) === null && b === e(s) && (g ? (m(S), S = -1) : g = !0, B(P, w - I))) : (b.sortIndex = D, n(u, b), $ || p || ($ = !0, k(C))), b
    }, t.unstable_shouldYield = _, t.unstable_wrapCallback = function(b) {
        var N = c;
        return function() {
            var w = c;
            c = N;
            try {
                return b.apply(this, arguments)
            } finally {
                c = w
            }
        }
    }
})(zr);
Yr.exports = zr;
var D1 = Yr.exports;

function $o(t, n) {
    if (t == null) return {};
    var e = {};
    for (var r in t)
        if ({}.hasOwnProperty.call(t, r)) {
            if (n.indexOf(r) !== -1) continue;
            e[r] = t[r]
        }
    return e
}

function L1(t, n) {
    if (t == null) return {};
    var e, r, i = $o(t, n);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        for (r = 0; r < o.length; r++) e = o[r], n.indexOf(e) === -1 && {}.propertyIsEnumerable.call(t, e) && (i[e] = t[e])
    }
    return i
}

function Xt(t) {
    "@babel/helpers - typeof";
    return Xt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n
    } : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, Xt(t)
}

function ho(t, n) {
    if (Xt(t) != "object" || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (e !== void 0) {
        var r = e.call(t, n);
        if (Xt(r) != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (n === "string" ? String : Number)(t)
}

function Zr(t) {
    var n = ho(t, "string");
    return Xt(n) == "symbol" ? n : n + ""
}

function M1(t, n, e) {
    return (n = Zr(n)) in t ? Object.defineProperty(t, n, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = e, t
}
var go = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
};
const po = fn(go);
var mo = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;

function Hn(t) {
    var n = {
            type: "tag",
            name: "",
            voidElement: !1,
            attrs: {},
            children: []
        },
        e = t.match(/<\/?([^\s]+?)[/\s>]/);
    if (e && (n.name = e[1], (po[e[1]] || t.charAt(t.length - 2) === "/") && (n.voidElement = !0), n.name.startsWith("!--"))) {
        var r = t.indexOf("-->");
        return {
            type: "comment",
            comment: r !== -1 ? t.slice(4, r) : ""
        }
    }
    for (var i = new RegExp(mo), o = null;
        (o = i.exec(t)) !== null;)
        if (o[0].trim())
            if (o[1]) {
                var a = o[1].trim(),
                    d = [a, ""];
                a.indexOf("=") > -1 && (d = a.split("=")), n.attrs[d[0]] = d[1], i.lastIndex--
            } else o[2] && (n.attrs[o[2]] = o[3].trim().substring(1, o[3].length - 1));
    return n
}
var yo = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
    vo = /^\s*$/,
    bo = Object.create(null);

function Jr(t, n) {
    switch (n.type) {
        case "text":
            return t + n.content;
        case "tag":
            return t += "<" + n.name + (n.attrs ? function(e) {
                var r = [];
                for (var i in e) r.push(i + '="' + e[i] + '"');
                return r.length ? " " + r.join(" ") : ""
            }(n.attrs) : "") + (n.voidElement ? "/>" : ">"), n.voidElement ? t : t + n.children.reduce(Jr, "") + "</" + n.name + ">";
        case "comment":
            return t + "<!--" + n.comment + "-->"
    }
}
var k1 = {
    parse: function(t, n) {
        n || (n = {}), n.components || (n.components = bo);
        var e, r = [],
            i = [],
            o = -1,
            a = !1;
        if (t.indexOf("<") !== 0) {
            var d = t.indexOf("<");
            r.push({
                type: "text",
                content: d === -1 ? t : t.substring(0, d)
            })
        }
        return t.replace(yo, function(u, s) {
            if (a) {
                if (u !== "</" + e.name + ">") return;
                a = !1
            }
            var f, l = u.charAt(1) !== "/",
                c = u.startsWith("<!--"),
                p = s + u.length,
                $ = t.charAt(p);
            if (c) {
                var g = Hn(u);
                return o < 0 ? (r.push(g), r) : ((f = i[o]).children.push(g), r)
            }
            if (l && (o++, (e = Hn(u)).type === "tag" && n.components[e.name] && (e.type = "component", a = !0), e.voidElement || a || !$ || $ === "<" || e.children.push({
                    type: "text",
                    content: t.slice(p, t.indexOf("<", p))
                }), o === 0 && r.push(e), (f = i[o - 1]) && f.children.push(e), i[o] = e), (!l || e.voidElement) && (o > -1 && (e.voidElement || e.name === u.slice(2, -1)) && (o--, e = o === -1 ? r : i[o]), !a && $ !== "<" && $)) {
                f = o === -1 ? r : i[o].children;
                var h = t.indexOf("<", p),
                    m = t.slice(p, h === -1 ? void 0 : h);
                vo.test(m) && (m = " "), (h > -1 && o + f.length >= 0 || m !== " ") && f.push({
                    type: "text",
                    content: m
                })
            }
        }), r
    },
    stringify: function(t) {
        return t.reduce(function(n, e) {
            return n + Jr("", e)
        }, "")
    }
};

function B1(t, n) {
    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
}

function Un(t, n) {
    for (var e = 0; e < n.length; e++) {
        var r = n[e];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Zr(r.key), r)
    }
}

function j1(t, n, e) {
    return n && Un(t.prototype, n), e && Un(t, e), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}

function Qr(t) {
    if (Array.isArray(t)) return t
}

function Po(t, n) {
    var e = t == null ? null : typeof Symbol != "undefined" && t[Symbol.iterator] || t["@@iterator"];
    if (e != null) {
        var r, i, o, a, d = [],
            u = !0,
            s = !1;
        try {
            if (o = (e = e.call(t)).next, n !== 0)
                for (; !(u = (r = o.call(e)).done) && (d.push(r.value), d.length !== n); u = !0);
        } catch (f) {
            s = !0, i = f
        } finally {
            try {
                if (!u && e.return != null && (a = e.return(), Object(a) !== a)) return
            } finally {
                if (s) throw i
            }
        }
        return d
    }
}

function Wn(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var e = 0, r = Array(n); e < n; e++) r[e] = t[e];
    return r
}

function qr(t, n) {
    if (t) {
        if (typeof t == "string") return Wn(t, n);
        var e = {}.toString.call(t).slice(8, -1);
        return e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set" ? Array.from(t) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Wn(t, n) : void 0
    }
}

function ti() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function G1(t, n) {
    return Qr(t) || Po(t, n) || qr(t, n) || ti()
}

function Co(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}

function Xe(t, n) {
    return Xe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, r) {
        return e.__proto__ = r, e
    }, Xe(t, n)
}

function H1(t, n) {
    if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), n && Xe(t, n)
}

function U1(t, n) {
    if (n && (Xt(n) == "object" || typeof n == "function")) return n;
    if (n !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return Co(t)
}

function Vn(t) {
    return Vn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, Vn(t)
}

function No(t) {
    if (typeof Symbol != "undefined" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t)
}

function W1(t) {
    return Qr(t) || No(t) || qr(t) || ti()
}
var ei = {
        exports: {}
    },
    wo = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    xo = wo,
    Ao = xo;

function ni() {}

function ri() {}
ri.resetWarningCache = ni;
var Eo = function() {
    function t(r, i, o, a, d, u) {
        if (u !== Ao) {
            var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw s.name = "Invariant Violation", s
        }
    }
    t.isRequired = t;

    function n() {
        return t
    }
    var e = {
        array: t,
        bigint: t,
        bool: t,
        func: t,
        number: t,
        object: t,
        string: t,
        symbol: t,
        any: t,
        arrayOf: n,
        element: t,
        elementType: t,
        instanceOf: n,
        node: t,
        objectOf: n,
        oneOf: n,
        oneOfType: n,
        shape: n,
        exact: n,
        checkPropTypes: ri,
        resetWarningCache: ni
    };
    return e.PropTypes = e, e
};
ei.exports = Eo();
var So = ei.exports;
const V1 = fn(So);
var Kn = Object.prototype.hasOwnProperty;

function Xn(t, n) {
    var e, r;
    if (t === n) return !0;
    if (t && n && (e = t.constructor) === n.constructor) {
        if (e === Date) return t.getTime() === n.getTime();
        if (e === RegExp) return t.toString() === n.toString();
        if (e === Array) {
            if ((r = t.length) === n.length)
                for (; r-- && Xn(t[r], n[r]););
            return r === -1
        }
        if (!e || typeof t == "object") {
            r = 0;
            for (e in t)
                if (Kn.call(t, e) && ++r && !Kn.call(n, e) || !(e in n) || !Xn(t[e], n[e])) return !1;
            return Object.keys(n).length === r
        }
    }
    return t !== t && n !== n
}
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ee() {
    return ee = Object.assign ? Object.assign.bind() : function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var e = arguments[n];
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
        }
        return t
    }, ee.apply(this, arguments)
}
var Wt;
(function(t) {
    t.Pop = "POP", t.Push = "PUSH", t.Replace = "REPLACE"
})(Wt || (Wt = {}));
const Yn = "popstate";

function K1(t) {
    t === void 0 && (t = {});

    function n(r, i) {
        let {
            pathname: o,
            search: a,
            hash: d
        } = r.location;
        return Ye("", {
            pathname: o,
            search: a,
            hash: d
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }

    function e(r, i) {
        return typeof i == "string" ? i : oi(i)
    }
    return To(n, e, null, t)
}

function Vt(t, n) {
    if (t === !1 || t === null || typeof t == "undefined") throw new Error(n)
}

function ii(t, n) {
    if (!t) {
        typeof console != "undefined" && console.warn(n);
        try {
            throw new Error(n)
        } catch (e) {}
    }
}

function Oo() {
    return Math.random().toString(36).substr(2, 8)
}

function zn(t, n) {
    return {
        usr: t.state,
        key: t.key,
        idx: n
    }
}

function Ye(t, n, e, r) {
    return e === void 0 && (e = null), ee({
        pathname: typeof t == "string" ? t : t.pathname,
        search: "",
        hash: ""
    }, typeof n == "string" ? Ae(n) : n, {
        state: e,
        key: n && n.key || r || Oo()
    })
}

function oi(t) {
    let {
        pathname: n = "/",
        search: e = "",
        hash: r = ""
    } = t;
    return e && e !== "?" && (n += e.charAt(0) === "?" ? e : "?" + e), r && r !== "#" && (n += r.charAt(0) === "#" ? r : "#" + r), n
}

function Ae(t) {
    let n = {};
    if (t) {
        let e = t.indexOf("#");
        e >= 0 && (n.hash = t.substr(e), t = t.substr(0, e));
        let r = t.indexOf("?");
        r >= 0 && (n.search = t.substr(r), t = t.substr(0, r)), t && (n.pathname = t)
    }
    return n
}

function To(t, n, e, r) {
    r === void 0 && (r = {});
    let {
        window: i = document.defaultView,
        v5Compat: o = !1
    } = r, a = i.history, d = Wt.Pop, u = null, s = f();
    s == null && (s = 0, a.replaceState(ee({}, a.state, {
        idx: s
    }), ""));

    function f() {
        return (a.state || {
            idx: null
        }).idx
    }

    function l() {
        d = Wt.Pop;
        let h = f(),
            m = h == null ? null : h - s;
        s = h, u && u({
            action: d,
            location: g.location,
            delta: m
        })
    }

    function c(h, m) {
        d = Wt.Push;
        let y = Ye(g.location, h, m);
        s = f() + 1;
        let v = zn(y, s),
            P = g.createHref(y);
        try {
            a.pushState(v, "", P)
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError") throw C;
            i.location.assign(P)
        }
        o && u && u({
            action: d,
            location: g.location,
            delta: 1
        })
    }

    function p(h, m) {
        d = Wt.Replace;
        let y = Ye(g.location, h, m);
        s = f();
        let v = zn(y, s),
            P = g.createHref(y);
        a.replaceState(v, "", P), o && u && u({
            action: d,
            location: g.location,
            delta: 0
        })
    }

    function $(h) {
        let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
            y = typeof h == "string" ? h : oi(h);
        return y = y.replace(/ $/, "%20"), Vt(m, "No window.location.(origin|href) available to create URL for href: " + y), new URL(y, m)
    }
    let g = {
        get action() {
            return d
        },
        get location() {
            return t(i, a)
        },
        listen(h) {
            if (u) throw new Error("A history only accepts one active listener");
            return i.addEventListener(Yn, l), u = h, () => {
                i.removeEventListener(Yn, l), u = null
            }
        },
        createHref(h) {
            return n(i, h)
        },
        createURL: $,
        encodeLocation(h) {
            let m = $(h);
            return {
                pathname: m.pathname,
                search: m.search,
                hash: m.hash
            }
        },
        push: c,
        replace: p,
        go(h) {
            return a.go(h)
        }
    };
    return g
}
var Zn;
(function(t) {
    t.data = "data", t.deferred = "deferred", t.redirect = "redirect", t.error = "error"
})(Zn || (Zn = {}));

function X1(t, n, e) {
    return e === void 0 && (e = "/"), _o(t, n, e)
}

function _o(t, n, e, r) {
    let i = typeof n == "string" ? Ae(n) : n,
        o = Vo(i.pathname || "/", e);
    if (o == null) return null;
    let a = ai(t);
    Io(a);
    let d = null;
    for (let u = 0; d == null && u < a.length; ++u) {
        let s = Wo(o);
        d = Go(a[u], s)
    }
    return d
}

function ai(t, n, e, r) {
    n === void 0 && (n = []), e === void 0 && (e = []), r === void 0 && (r = "");
    let i = (o, a, d) => {
        let u = {
            relativePath: d === void 0 ? o.path || "" : d,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: a,
            route: o
        };
        u.relativePath.startsWith("/") && (Vt(u.relativePath.startsWith(r), 'Absolute route path "' + u.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), u.relativePath = u.relativePath.slice(r.length));
        let s = me([r, u.relativePath]),
            f = e.concat(u);
        o.children && o.children.length > 0 && (Vt(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + s + '".')), ai(o.children, n, f, s)), !(o.path == null && !o.index) && n.push({
            path: s,
            score: Bo(s, o.index),
            routesMeta: f
        })
    };
    return t.forEach((o, a) => {
        var d;
        if (o.path === "" || !((d = o.path) != null && d.includes("?"))) i(o, a);
        else
            for (let u of di(o.path)) i(o, a, u)
    }), n
}

function di(t) {
    let n = t.split("/");
    if (n.length === 0) return [];
    let [e, ...r] = n, i = e.endsWith("?"), o = e.replace(/\?$/, "");
    if (r.length === 0) return i ? [o, ""] : [o];
    let a = di(r.join("/")),
        d = [];
    return d.push(...a.map(u => u === "" ? o : [o, u].join("/"))), i && d.push(...a), d.map(u => t.startsWith("/") && u === "" ? "/" : u)
}

function Io(t) {
    t.sort((n, e) => n.score !== e.score ? e.score - n.score : jo(n.routesMeta.map(r => r.childrenIndex), e.routesMeta.map(r => r.childrenIndex)))
}
const Fo = /^:[\w-]+$/,
    Ro = 3,
    Do = 2,
    Lo = 1,
    Mo = 10,
    ko = -2,
    Jn = t => t === "*";

function Bo(t, n) {
    let e = t.split("/"),
        r = e.length;
    return e.some(Jn) && (r += ko), n && (r += Do), e.filter(i => !Jn(i)).reduce((i, o) => i + (Fo.test(o) ? Ro : o === "" ? Lo : Mo), r)
}

function jo(t, n) {
    return t.length === n.length && t.slice(0, -1).every((r, i) => r === n[i]) ? t[t.length - 1] - n[n.length - 1] : 0
}

function Go(t, n, e) {
    let {
        routesMeta: r
    } = t, i = {}, o = "/", a = [];
    for (let d = 0; d < r.length; ++d) {
        let u = r[d],
            s = d === r.length - 1,
            f = o === "/" ? n : n.slice(o.length) || "/",
            l = Ho({
                path: u.relativePath,
                caseSensitive: u.caseSensitive,
                end: s
            }, f),
            c = u.route;
        if (!l) return null;
        Object.assign(i, l.params), a.push({
            params: i,
            pathname: me([o, l.pathname]),
            pathnameBase: zo(me([o, l.pathnameBase])),
            route: c
        }), l.pathnameBase !== "/" && (o = me([o, l.pathnameBase]))
    }
    return a
}

function Ho(t, n) {
    typeof t == "string" && (t = {
        path: t,
        caseSensitive: !1,
        end: !0
    });
    let [e, r] = Uo(t.path, t.caseSensitive, t.end), i = n.match(e);
    if (!i) return null;
    let o = i[0],
        a = o.replace(/(.)\/+$/, "$1"),
        d = i.slice(1);
    return {
        params: r.reduce((s, f, l) => {
            let {
                paramName: c,
                isOptional: p
            } = f;
            if (c === "*") {
                let g = d[l] || "";
                a = o.slice(0, o.length - g.length).replace(/(.)\/+$/, "$1")
            }
            const $ = d[l];
            return p && !$ ? s[c] = void 0 : s[c] = ($ || "").replace(/%2F/g, "/"), s
        }, {}),
        pathname: o,
        pathnameBase: a,
        pattern: t
    }
}

function Uo(t, n, e) {
    n === void 0 && (n = !1), e === void 0 && (e = !0), ii(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
    let r = [],
        i = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (a, d, u) => (r.push({
            paramName: d,
            isOptional: u != null
        }), u ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return t.endsWith("*") ? (r.push({
        paramName: "*"
    }), i += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : e ? i += "\\/*$" : t !== "" && t !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, n ? void 0 : "i"), r]
}

function Wo(t) {
    try {
        return t.split("/").map(n => decodeURIComponent(n).replace(/\//g, "%2F")).join("/")
    } catch (n) {
        return ii(!1, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + n + ").")), t
    }
}

function Vo(t, n) {
    if (n === "/") return t;
    if (!t.toLowerCase().startsWith(n.toLowerCase())) return null;
    let e = n.endsWith("/") ? n.length - 1 : n.length,
        r = t.charAt(e);
    return r && r !== "/" ? null : t.slice(e) || "/"
}

function Ko(t, n) {
    n === void 0 && (n = "/");
    let {
        pathname: e,
        search: r = "",
        hash: i = ""
    } = typeof t == "string" ? Ae(t) : t;
    return {
        pathname: e ? e.startsWith("/") ? e : Xo(e, n) : n,
        search: Zo(r),
        hash: Jo(i)
    }
}

function Xo(t, n) {
    let e = n.replace(/\/+$/, "").split("/");
    return t.split("/").forEach(i => {
        i === ".." ? e.length > 1 && e.pop() : i !== "." && e.push(i)
    }), e.length > 1 ? e.join("/") : "/"
}

function je(t, n, e, r) {
    return "Cannot include a '" + t + "' character in a manually specified " + ("`to." + n + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + e + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function Yo(t) {
    return t.filter((n, e) => e === 0 || n.route.path && n.route.path.length > 0)
}

function Y1(t, n) {
    let e = Yo(t);
    return n ? e.map((r, i) => i === e.length - 1 ? r.pathname : r.pathnameBase) : e.map(r => r.pathnameBase)
}

function z1(t, n, e, r) {
    r === void 0 && (r = !1);
    let i;
    typeof t == "string" ? i = Ae(t) : (i = ee({}, t), Vt(!i.pathname || !i.pathname.includes("?"), je("?", "pathname", "search", i)), Vt(!i.pathname || !i.pathname.includes("#"), je("#", "pathname", "hash", i)), Vt(!i.search || !i.search.includes("#"), je("#", "search", "hash", i)));
    let o = t === "" || i.pathname === "",
        a = o ? "/" : i.pathname,
        d;
    if (a == null) d = e;
    else {
        let l = n.length - 1;
        if (!r && a.startsWith("..")) {
            let c = a.split("/");
            for (; c[0] === "..";) c.shift(), l -= 1;
            i.pathname = c.join("/")
        }
        d = l >= 0 ? n[l] : "/"
    }
    let u = Ko(i, d),
        s = a && a !== "/" && a.endsWith("/"),
        f = (o || a === ".") && e.endsWith("/");
    return !u.pathname.endsWith("/") && (s || f) && (u.pathname += "/"), u
}
const me = t => t.join("/").replace(/\/\/+/g, "/"),
    zo = t => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
    Zo = t => !t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t,
    Jo = t => !t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t;

function Z1(t) {
    return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data" in t
}
const ui = ["post", "put", "patch", "delete"];
new Set(ui);
const Qo = ["get", ...ui];
new Set(Qo);
let qo = {
        data: ""
    },
    ta = t => typeof window == "object" ? ((t ? t.querySelector("#_goober") : window._goober) || Object.assign((t || document.head).appendChild(document.createElement("style")), {
        innerHTML: " ",
        id: "_goober"
    })).firstChild : t || qo,
    ea = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
    na = /\/\*[^]*?\*\/|  +/g,
    Qn = /\n+/g,
    Tt = (t, n) => {
        let e = "",
            r = "",
            i = "";
        for (let o in t) {
            let a = t[o];
            o[0] == "@" ? o[1] == "i" ? e = o + " " + a + ";" : r += o[1] == "f" ? Tt(a, o) : o + "{" + Tt(a, o[1] == "k" ? "" : n) + "}" : typeof a == "object" ? r += Tt(a, n ? n.replace(/([^,])+/g, d => o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, u => /&/.test(u) ? u.replace(/&/g, d) : d ? d + " " + u : u)) : o) : a != null && (o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, "-$&").toLowerCase(), i += Tt.p ? Tt.p(o, a) : o + ":" + a + ";")
        }
        return e + (n && i ? n + "{" + i + "}" : i) + r
    },
    Nt = {},
    si = t => {
        if (typeof t == "object") {
            let n = "";
            for (let e in t) n += e + si(t[e]);
            return n
        }
        return t
    },
    ra = (t, n, e, r, i) => {
        let o = si(t),
            a = Nt[o] || (Nt[o] = (u => {
                let s = 0,
                    f = 11;
                for (; s < u.length;) f = 101 * f + u.charCodeAt(s++) >>> 0;
                return "go" + f
            })(o));
        if (!Nt[a]) {
            let u = o !== t ? t : (s => {
                let f, l, c = [{}];
                for (; f = ea.exec(s.replace(na, ""));) f[4] ? c.shift() : f[3] ? (l = f[3].replace(Qn, " ").trim(), c.unshift(c[0][l] = c[0][l] || {})) : c[0][f[1]] = f[2].replace(Qn, " ").trim();
                return c[0]
            })(t);
            Nt[a] = Tt(i ? {
                ["@keyframes " + a]: u
            } : u, e ? "" : "." + a)
        }
        let d = e && Nt.g ? Nt.g : null;
        return e && (Nt.g = Nt[a]), ((u, s, f, l) => {
            l ? s.data = s.data.replace(l, u) : s.data.indexOf(u) === -1 && (s.data = f ? u + s.data : s.data + u)
        })(Nt[a], n, r, d), a
    },
    ia = (t, n, e) => t.reduce((r, i, o) => {
        let a = n[o];
        if (a && a.call) {
            let d = a(e),
                u = d && d.props && d.props.className || /^go/.test(d) && d;
            a = u ? "." + u : d && typeof d == "object" ? d.props ? "" : Tt(d, "") : d === !1 ? "" : d
        }
        return r + i + (a == null ? "" : a)
    }, "");

function $n(t) {
    let n = this || {},
        e = t.call ? t(n.p) : t;
    return ra(e.unshift ? e.raw ? ia(e, [].slice.call(arguments, 1), n.p) : e.reduce((r, i) => Object.assign(r, i && i.call ? i(n.p) : i), {}) : e, ta(n.target), n.g, n.o, n.k)
}
let li, ze, Ze;
$n.bind({
    g: 1
});
let J1 = $n.bind({
    k: 1
});

function Q1(t, n, e, r) {
    Tt.p = n, li = t, ze = e, Ze = r
}

function q1(t, n) {
    let e = this || {};
    return function() {
        let r = arguments;

        function i(o, a) {
            let d = Object.assign({}, o),
                u = d.className || i.className;
            e.p = Object.assign({
                theme: ze && ze()
            }, d), e.o = / *go\d+/.test(u), d.className = $n.apply(e, r) + (u ? " " + u : "");
            let s = t;
            return t[0] && (s = d.as || t, delete d.as), Ze && s[0] && Ze(d), li(s, d)
        }
        return i
    }
}
var ci = {
    exports: {}
};
(function(t, n) {
    (function(e, r) {
        t.exports = r()
    })(fo, function() {
        Array.isArray || (Array.isArray = function(o) {
            return Object.prototype.toString.call(o) === "[object Array]"
        });

        function e(o) {
            for (var a = [], d = 0, u = o.length; d < u; d++) a.indexOf(o[d]) === -1 && a.push(o[d]);
            return a
        }
        var r = {},
            i = {
                "==": function(o, a) {
                    return o == a
                },
                "===": function(o, a) {
                    return o === a
                },
                "!=": function(o, a) {
                    return o != a
                },
                "!==": function(o, a) {
                    return o !== a
                },
                ">": function(o, a) {
                    return o > a
                },
                ">=": function(o, a) {
                    return o >= a
                },
                "<": function(o, a, d) {
                    return d === void 0 ? o < a : o < a && a < d
                },
                "<=": function(o, a, d) {
                    return d === void 0 ? o <= a : o <= a && a <= d
                },
                "!!": function(o) {
                    return r.truthy(o)
                },
                "!": function(o) {
                    return !r.truthy(o)
                },
                "%": function(o, a) {
                    return o % a
                },
                log: function(o) {
                    return console.log(o), o
                },
                in: function(o, a) {
                    return !a || typeof a.indexOf == "undefined" ? !1 : a.indexOf(o) !== -1
                },
                cat: function() {
                    return Array.prototype.join.call(arguments, "")
                },
                substr: function(o, a, d) {
                    if (d < 0) {
                        var u = String(o).substr(a);
                        return u.substr(0, u.length + d)
                    }
                    return String(o).substr(a, d)
                },
                "+": function() {
                    return Array.prototype.reduce.call(arguments, function(o, a) {
                        return parseFloat(o, 10) + parseFloat(a, 10)
                    }, 0)
                },
                "*": function() {
                    return Array.prototype.reduce.call(arguments, function(o, a) {
                        return parseFloat(o, 10) * parseFloat(a, 10)
                    })
                },
                "-": function(o, a) {
                    return a === void 0 ? -o : o - a
                },
                "/": function(o, a) {
                    return o / a
                },
                min: function() {
                    return Math.min.apply(this, arguments)
                },
                max: function() {
                    return Math.max.apply(this, arguments)
                },
                merge: function() {
                    return Array.prototype.reduce.call(arguments, function(o, a) {
                        return o.concat(a)
                    }, [])
                },
                var: function(o, a) {
                    var d = a === void 0 ? null : a,
                        u = this;
                    if (typeof o == "undefined" || o === "" || o === null) return u;
                    for (var s = String(o).split("."), f = 0; f < s.length; f++)
                        if (u == null || (u = u[s[f]], u === void 0)) return d;
                    return u
                },
                missing: function() {
                    for (var o = [], a = Array.isArray(arguments[0]) ? arguments[0] : arguments, d = 0; d < a.length; d++) {
                        var u = a[d],
                            s = r.apply({
                                var: u
                            }, this);
                        (s === null || s === "") && o.push(u)
                    }
                    return o
                },
                missing_some: function(o, a) {
                    var d = r.apply({
                        missing: a
                    }, this);
                    return a.length - d.length >= o ? [] : d
                }
            };
        return r.is_logic = function(o) {
            return typeof o == "object" && o !== null && !Array.isArray(o) && Object.keys(o).length === 1
        }, r.truthy = function(o) {
            return Array.isArray(o) && o.length === 0 ? !1 : !!o
        }, r.get_operator = function(o) {
            return Object.keys(o)[0]
        }, r.get_values = function(o) {
            return o[r.get_operator(o)]
        }, r.apply = function(o, a) {
            if (Array.isArray(o)) return o.map(function(h) {
                return r.apply(h, a)
            });
            if (!r.is_logic(o)) return o;
            var d = r.get_operator(o),
                u = o[d],
                s, f, l, c, p;
            if (Array.isArray(u) || (u = [u]), d === "if" || d == "?:") {
                for (s = 0; s < u.length - 1; s += 2)
                    if (r.truthy(r.apply(u[s], a))) return r.apply(u[s + 1], a);
                return u.length === s + 1 ? r.apply(u[s], a) : null
            } else if (d === "and") {
                for (s = 0; s < u.length; s += 1)
                    if (f = r.apply(u[s], a), !r.truthy(f)) return f;
                return f
            } else if (d === "or") {
                for (s = 0; s < u.length; s += 1)
                    if (f = r.apply(u[s], a), r.truthy(f)) return f;
                return f
            } else {
                if (d === "filter") return c = r.apply(u[0], a), l = u[1], Array.isArray(c) ? c.filter(function(h) {
                    return r.truthy(r.apply(l, h))
                }) : [];
                if (d === "map") return c = r.apply(u[0], a), l = u[1], Array.isArray(c) ? c.map(function(h) {
                    return r.apply(l, h)
                }) : [];
                if (d === "reduce") return c = r.apply(u[0], a), l = u[1], p = typeof u[2] != "undefined" ? r.apply(u[2], a) : null, Array.isArray(c) ? c.reduce(function(h, m) {
                    return r.apply(l, {
                        current: m,
                        accumulator: h
                    })
                }, p) : p;
                if (d === "all") {
                    if (c = r.apply(u[0], a), l = u[1], !Array.isArray(c) || !c.length) return !1;
                    for (s = 0; s < c.length; s += 1)
                        if (!r.truthy(r.apply(l, c[s]))) return !1;
                    return !0
                } else if (d === "none") {
                    if (c = r.apply(u[0], a), l = u[1], !Array.isArray(c) || !c.length) return !0;
                    for (s = 0; s < c.length; s += 1)
                        if (r.truthy(r.apply(l, c[s]))) return !1;
                    return !0
                } else if (d === "some") {
                    if (c = r.apply(u[0], a), l = u[1], !Array.isArray(c) || !c.length) return !1;
                    for (s = 0; s < c.length; s += 1)
                        if (r.truthy(r.apply(l, c[s]))) return !0;
                    return !1
                }
            }
            if (u = u.map(function(h) {
                    return r.apply(h, a)
                }), i.hasOwnProperty(d) && typeof i[d] == "function") return i[d].apply(a, u);
            if (d.indexOf(".") > 0) {
                var $ = String(d).split("."),
                    g = i;
                for (s = 0; s < $.length; s++) {
                    if (!g.hasOwnProperty($[s])) throw new Error("Unrecognized operation " + d + " (failed at " + $.slice(0, s + 1).join(".") + ")");
                    g = g[$[s]]
                }
                return g.apply(a, u)
            }
            throw new Error("Unrecognized operation " + d)
        }, r.uses_data = function(o) {
            var a = [];
            if (r.is_logic(o)) {
                var d = r.get_operator(o),
                    u = o[d];
                Array.isArray(u) || (u = [u]), d === "var" ? a.push(u[0]) : u.forEach(function(s) {
                    a.push.apply(a, r.uses_data(s))
                })
            }
            return e(a)
        }, r.add_operation = function(o, a) {
            i[o] = a
        }, r.rm_operation = function(o) {
            delete i[o]
        }, r.rule_like = function(o, a) {
            if (a === o || a === "@") return !0;
            if (a === "number") return typeof o == "number";
            if (a === "string") return typeof o == "string";
            if (a === "array") return Array.isArray(o) && !r.is_logic(o);
            if (r.is_logic(a)) {
                if (r.is_logic(o)) {
                    var d = r.get_operator(a),
                        u = r.get_operator(o);
                    if (d === "@" || d === u) return r.rule_like(r.get_values(o, !1), r.get_values(a, !1))
                }
                return !1
            }
            if (Array.isArray(a))
                if (Array.isArray(o)) {
                    if (a.length !== o.length) return !1;
                    for (var s = 0; s < a.length; s += 1)
                        if (!r.rule_like(o[s], a[s])) return !1;
                    return !0
                } else return !1;
            return !1
        }, r
    })
})(ci);
var oa = ci.exports;
const tl = fn(oa),
    el = {
        version: 4,
        country_calling_codes: {
            1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"],
            7: ["RU", "KZ"],
            20: ["EG"],
            27: ["ZA"],
            30: ["GR"],
            31: ["NL"],
            32: ["BE"],
            33: ["FR"],
            34: ["ES"],
            36: ["HU"],
            39: ["IT", "VA"],
            40: ["RO"],
            41: ["CH"],
            43: ["AT"],
            44: ["GB", "GG", "IM", "JE"],
            45: ["DK"],
            46: ["SE"],
            47: ["NO", "SJ"],
            48: ["PL"],
            49: ["DE"],
            51: ["PE"],
            52: ["MX"],
            53: ["CU"],
            54: ["AR"],
            55: ["BR"],
            56: ["CL"],
            57: ["CO"],
            58: ["VE"],
            60: ["MY"],
            61: ["AU", "CC", "CX"],
            62: ["ID"],
            63: ["PH"],
            64: ["NZ"],
            65: ["SG"],
            66: ["TH"],
            81: ["JP"],
            82: ["KR"],
            84: ["VN"],
            86: ["CN"],
            90: ["TR"],
            91: ["IN"],
            92: ["PK"],
            93: ["AF"],
            94: ["LK"],
            95: ["MM"],
            98: ["IR"],
            211: ["SS"],
            212: ["MA", "EH"],
            213: ["DZ"],
            216: ["TN"],
            218: ["LY"],
            220: ["GM"],
            221: ["SN"],
            222: ["MR"],
            223: ["ML"],
            224: ["GN"],
            225: ["CI"],
            226: ["BF"],
            227: ["NE"],
            228: ["TG"],
            229: ["BJ"],
            230: ["MU"],
            231: ["LR"],
            232: ["SL"],
            233: ["GH"],
            234: ["NG"],
            235: ["TD"],
            236: ["CF"],
            237: ["CM"],
            238: ["CV"],
            239: ["ST"],
            240: ["GQ"],
            241: ["GA"],
            242: ["CG"],
            243: ["CD"],
            244: ["AO"],
            245: ["GW"],
            246: ["IO"],
            247: ["AC"],
            248: ["SC"],
            249: ["SD"],
            250: ["RW"],
            251: ["ET"],
            252: ["SO"],
            253: ["DJ"],
            254: ["KE"],
            255: ["TZ"],
            256: ["UG"],
            257: ["BI"],
            258: ["MZ"],
            260: ["ZM"],
            261: ["MG"],
            262: ["RE", "YT"],
            263: ["ZW"],
            264: ["NA"],
            265: ["MW"],
            266: ["LS"],
            267: ["BW"],
            268: ["SZ"],
            269: ["KM"],
            290: ["SH", "TA"],
            291: ["ER"],
            297: ["AW"],
            298: ["FO"],
            299: ["GL"],
            350: ["GI"],
            351: ["PT"],
            352: ["LU"],
            353: ["IE"],
            354: ["IS"],
            355: ["AL"],
            356: ["MT"],
            357: ["CY"],
            358: ["FI", "AX"],
            359: ["BG"],
            370: ["LT"],
            371: ["LV"],
            372: ["EE"],
            373: ["MD"],
            374: ["AM"],
            375: ["BY"],
            376: ["AD"],
            377: ["MC"],
            378: ["SM"],
            380: ["UA"],
            381: ["RS"],
            382: ["ME"],
            383: ["XK"],
            385: ["HR"],
            386: ["SI"],
            387: ["BA"],
            389: ["MK"],
            420: ["CZ"],
            421: ["SK"],
            423: ["LI"],
            500: ["FK"],
            501: ["BZ"],
            502: ["GT"],
            503: ["SV"],
            504: ["HN"],
            505: ["NI"],
            506: ["CR"],
            507: ["PA"],
            508: ["PM"],
            509: ["HT"],
            590: ["GP", "BL", "MF"],
            591: ["BO"],
            592: ["GY"],
            593: ["EC"],
            594: ["GF"],
            595: ["PY"],
            596: ["MQ"],
            597: ["SR"],
            598: ["UY"],
            599: ["CW", "BQ"],
            670: ["TL"],
            672: ["NF"],
            673: ["BN"],
            674: ["NR"],
            675: ["PG"],
            676: ["TO"],
            677: ["SB"],
            678: ["VU"],
            679: ["FJ"],
            680: ["PW"],
            681: ["WF"],
            682: ["CK"],
            683: ["NU"],
            685: ["WS"],
            686: ["KI"],
            687: ["NC"],
            688: ["TV"],
            689: ["PF"],
            690: ["TK"],
            691: ["FM"],
            692: ["MH"],
            850: ["KP"],
            852: ["HK"],
            853: ["MO"],
            855: ["KH"],
            856: ["LA"],
            880: ["BD"],
            886: ["TW"],
            960: ["MV"],
            961: ["LB"],
            962: ["JO"],
            963: ["SY"],
            964: ["IQ"],
            965: ["KW"],
            966: ["SA"],
            967: ["YE"],
            968: ["OM"],
            970: ["PS"],
            971: ["AE"],
            972: ["IL"],
            973: ["BH"],
            974: ["QA"],
            975: ["BT"],
            976: ["MN"],
            977: ["NP"],
            992: ["TJ"],
            993: ["TM"],
            994: ["AZ"],
            995: ["GE"],
            996: ["KG"],
            998: ["UZ"]
        },
        countries: {
            AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]],
            AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9],
                [
                    ["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]],
                    ["(\\d{4})(\\d{4})", "$1 $2", ["1"]],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]
                ]
            ],
            AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12],
                [
                    ["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]],
                    ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"],
                    ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]
                ], "0"
            ],
            AF: ["93", "00", "[2-7]\\d{8}", [9],
                [
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]
                ], "0"
            ],
            AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"],
            AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"],
            AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9],
                [
                    ["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"],
                    ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"],
                    ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]
                ], "0"
            ],
            AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8],
                [
                    ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"],
                    ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"],
                    ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"],
                    ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]
                ], "0"
            ],
            AO: ["244", "00", "[29]\\d{8}", [9],
                [
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]
                ]
            ],
            AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11],
                [
                    ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1],
                    ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1],
                    ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"],
                    ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"],
                    ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"],
                    ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]
                ], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"
            ],
            AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"],
            AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                [
                    ["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"],
                    ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"],
                    ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"],
                    ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"],
                    ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"],
                    ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]
                ], "0"
            ],
            AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12],
                [
                    ["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"],
                    ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
                    ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]
                ], "0", 0, "(183[12])|0", 0, 0, 0, [
                    ["(?:(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|7(?:[013-57-9]\\d|2[0-8]))\\d|3(?:(?:[0-3589]\\d|6[1-9]|7[0-35-9])\\d|4(?:[0-578]\\d|90)))\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|3\\d\\d)|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]],
                    ["4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]],
                    ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                    ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]],
                    ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
                    ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]
                ], "0011"
            ],
            AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]
                ]
            ],
            AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"],
            AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9],
                [
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"],
                    ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]
                ], "0"
            ],
            BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9],
                [
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]
                ], "0"
            ],
            BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"],
            BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10],
                [
                    ["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"],
                    ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"],
                    ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|2[23]"], "0$1"],
                    ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]
                ], "0"
            ],
            BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9],
                [
                    ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"],
                    ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]
                ], "0"
            ],
            BF: ["226", "00", "[025-7]\\d{7}", [8],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]
                ]
            ],
            BG: ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12],
                [
                    ["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"],
                    ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"],
                    ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]
                ], "0"
            ],
            BH: ["973", "00", "[136-9]\\d{7}", [8],
                [
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]
                ]
            ],
            BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]
                ]
            ],
            BJ: ["229", "00", "(?:01\\d|[24-689])\\d{7}", [8, 10],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["0"]]
                ]
            ],
            BL: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [
                ["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"],
                ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"],
                ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]
            ]],
            BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"],
            BN: ["673", "00", "[2-578]\\d{6}", [7],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]
                ]
            ],
            BO: ["591", "00(?:1\\d)?", "8001\\d{5}|(?:[2-467]\\d|50)\\d{6}", [8, 9],
                [
                    ["(\\d)(\\d{7})", "$1 $2", ["[235]|4[46]"]],
                    ["(\\d{8})", "$1", ["[67]"]],
                    ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]
                ], "0", 0, "0(1\\d)?"
            ],
            BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"],
            BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11],
                [
                    ["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]],
                    ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"],
                    ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"],
                    ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]
                ], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"
            ],
            BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"],
            BT: ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8],
                [
                    ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]
                ]
            ],
            BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10],
                [
                    ["(\\d{2})(\\d{5})", "$1 $2", ["90"]],
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]],
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]],
                    ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]],
                    ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]
                ]
            ],
            BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11],
                [
                    ["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"],
                    ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"],
                    ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"],
                    ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"],
                    ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]
                ], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"
            ],
            BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11],
                [
                    ["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]],
                    ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]
                ]
            ],
            CA: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [
                ["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\\d{6}", [10]],
                ["", [10]],
                ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]],
                ["900[2-9]\\d{6}", [10]],
                ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:2[125-9]|33|44|66|77|88)|6(?:22|33))[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]
            ]],
            CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [
                ["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]],
                ["4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]],
                ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
                ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]
            ], "0011"],
            CD: ["243", "00", "(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}", [7, 8, 9, 10],
                [
                    ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                    ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"],
                    ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"],
                    ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["5"], "0$1"]
                ], "0"
            ],
            CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]
                ]
            ],
            CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9],
                [
                    ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]
                ]
            ],
            CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9, 12],
                [
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]
                ], "0"
            ],
            CI: ["225", "00", "[02]\\d{9}", [10],
                [
                    ["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]
                ]
            ],
            CK: ["682", "00", "[2-578]\\d{4}", [5],
                [
                    ["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]
                ]
            ],
            CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11],
                [
                    ["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]],
                    ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"],
                    ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"],
                    ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]],
                    ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                    ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]
                ]
            ],
            CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]],
                    ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]
                ]
            ],
            CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}", [7, 8, 9, 10, 11, 12],
                [
                    ["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]", "(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"], "0$1"],
                    ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]],
                    ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1],
                    ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]],
                    ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1],
                    ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1],
                    ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]],
                    ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]
                ], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"
            ],
            CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:46|60\\d\\d)\\d{6}|(?:1\\d|[39])\\d{9}", [8, 10, 11],
                [
                    ["(\\d{4})(\\d{4})", "$1 $2", ["46"]],
                    ["(\\d{3})(\\d{7})", "$1 $2", ["6|90"], "($1)"],
                    ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|91"]],
                    ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]
                ], "0", 0, "0([3579]|4(?:[14]4|56))?"
            ],
            CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10],
                [
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]
                ], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"
            ],
            CU: ["53", "119", "(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}", [6, 7, 8, 10],
                [
                    ["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"],
                    ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"],
                    ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"],
                    ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]
                ], "0"
            ],
            CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7],
                [
                    ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]
                ]
            ],
            CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]],
                    ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]
                ], 0, 0, 0, 0, 0, "[69]"
            ],
            CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [
                ["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]],
                ["4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]],
                ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
                ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]
            ], "0011"],
            CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8],
                [
                    ["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]
                ]
            ],
            CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9, 10, 11, 12],
                [
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]],
                    ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]],
                    ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
                    ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
                ]
            ],
            DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                [
                    ["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"],
                    ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"],
                    ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"],
                    ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"],
                    ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"],
                    ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"],
                    ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"],
                    ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"],
                    ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"],
                    ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"],
                    ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                    ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"],
                    ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"],
                    ["(\\d{5})(\\d{6})", "$1 $2", ["15[03568]", "15(?:[0568]|31)"], "0$1"],
                    ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"],
                    ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]
                ], "0"
            ],
            DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]
                ]
            ],
            DK: ["45", "00", "[2-9]\\d{7}", [8],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]
                ]
            ],
            DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"],
            DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"],
            DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]
                ], "0"
            ],
            EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11],
                [
                    ["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                    ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]
                ], "0"
            ],
            EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]],
                    ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]],
                    ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]],
                    ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]
                ]
            ],
            EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10],
                [
                    ["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"],
                    ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                    ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]
                ], "0"
            ],
            EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"],
            ER: ["291", "00", "[178]\\d{6}", [7],
                [
                    ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]
                ], "0"
            ],
            ES: ["34", "00", "[5-9]\\d{8}", [9],
                [
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]
                ]
            ],
            ET: ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9],
                [
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]
                ], "0"
            ],
            FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12],
                [
                    ["(\\d{5})", "$1", ["20[2-59]"], "0$1"],
                    ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"],
                    ["(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"],
                    ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"],
                    ["(\\d)(\\d{4,9})", "$1 $2", ["(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"]
                ], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"
            ],
            FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]],
                    ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]
                ], 0, 0, 0, 0, 0, 0, 0, "00"
            ],
            FK: ["500", "00", "[2-7]\\d{4}", [5]],
            FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]
                ]
            ],
            FO: ["298", "00", "[2-9]\\d{5}", [6],
                [
                    ["(\\d{6})", "$1", ["[2-9]"]]
                ], 0, 0, "(10(?:01|[12]0|88))"
            ],
            FR: ["33", "00", "[1-9]\\d{8}", [9],
                [
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"],
                    ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]
                ], "0"
            ],
            GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8],
                [
                    ["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]
                ], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"
            ],
            GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"],
                    ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"],
                    ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"],
                    ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"],
                    ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"],
                    ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]
                ], "0", 0, 0, 0, 0, 0, [
                    ["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-35])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]],
                    ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]],
                    ["80[08]\\d{7}|800\\d{6}|8001111"],
                    ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]],
                    ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]],
                    ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]],
                    ["56\\d{8}", [10]]
                ], 0, " x"
            ],
            GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"],
            GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9],
                [
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]
                ], "0"
            ],
            GF: ["594", "00", "(?:[56]94\\d|7093)\\d{5}|(?:80|9\\d)\\d{7}", [9],
                [
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]|9[47]"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]
                ], "0"
            ],
            GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0", "1481$1", 0, 0, [
                ["1481[25-9]\\d{5}", [10]],
                ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]],
                ["80[08]\\d{7}|800\\d{6}|8001111"],
                ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]],
                ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]],
                ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]],
                ["56\\d{8}", [10]]
            ]],
            GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9],
                [
                    ["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]
                ], "0"
            ],
            GI: ["350", "00", "(?:[25]\\d|60)\\d{6}", [8],
                [
                    ["(\\d{3})(\\d{5})", "$1 $2", ["2"]]
                ]
            ],
            GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]
                ]
            ],
            GM: ["220", "00", "[2-9]\\d{6}", [7],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                ]
            ],
            GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]
                ]
            ],
            GP: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9],
                [
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
                ], "0", 0, 0, 0, 0, 0, [
                    ["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"],
                    ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"],
                    ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]
                ]
            ],
            GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9],
                [
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]],
                    ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]
                ]
            ],
            GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12],
                [
                    ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]],
                    ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]],
                    ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]
                ]
            ],
            GT: ["502", "00", "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", [8, 11],
                [
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]],
                    ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                ]
            ],
            GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "671$1", 0, "671"],
            GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["40"]],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]
                ]
            ],
            GY: ["592", "001", "(?:[2-8]\\d{3}|9008)\\d{3}", [7],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                ]
            ],
            HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11],
                [
                    ["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]],
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
                    ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
                ], 0, 0, 0, 0, 0, 0, 0, "00"
            ],
            HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11],
                [
                    ["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]
                ]
            ],
            HR: ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9],
                [
                    ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"],
                    ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6|7[245]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]
                ], "0"
            ],
            HT: ["509", "00", "(?:[2-489]\\d|55)\\d{6}", [8],
                [
                    ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]
                ]
            ],
            HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9],
                [
                    ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"],
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"],
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]
                ], "06"
            ],
            ID: ["62", "00[89]", "00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                [
                    ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]],
                    ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"],
                    ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"],
                    ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"],
                    ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"],
                    ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"],
                    ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"],
                    ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]
                ], "0"
            ],
            IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10],
                [
                    ["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"],
                    ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"],
                    ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"],
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"],
                    ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
                    ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"],
                    ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]
                ], "0"
            ],
            IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12],
                [
                    ["(\\d{4})(\\d{3})", "$1-$2", ["125"]],
                    ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]],
                    ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                    ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]],
                    ["(\\d{4})(\\d{6})", "$1-$2", ["159"]],
                    ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]],
                    ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]
                ], "0"
            ],
            IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0", "1624$1", 0, "74576|(?:16|7[56])24"],
            IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13],
                [
                    ["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1],
                    ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1],
                    ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1],
                    ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1],
                    ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1],
                    ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1],
                    ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]
                ], "0"
            ],
            IO: ["246", "00", "3\\d{6}", [7],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["3"]]
                ]
            ],
            IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10],
                [
                    ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                ], "0"
            ],
            IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10],
                [
                    ["(\\d{4,5})", "$1", ["96"], "0$1"],
                    ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                    ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]
                ], "0"
            ],
            IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]
                ], 0, 0, 0, 0, 0, 0, 0, "00"
            ],
            IT: ["39", "00", "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11, 12],
                [
                    ["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]],
                    ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]],
                    ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]],
                    ["(\\d{4})(\\d{4})", "$1 $2", ["894"]],
                    ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]],
                    ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]|43"]],
                    ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]],
                    ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
                    ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]],
                    ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]
                ], 0, 0, 0, 0, 0, 0, [
                    ["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}", [6, 7, 8, 9, 10, 11]],
                    ["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]],
                    ["80(?:0\\d{3}|3)\\d{3}", [6, 9]],
                    ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]],
                    ["1(?:78\\d|99)\\d{6}", [9, 10]],
                    ["3[2-8]\\d{9,10}", [11, 12]], 0, 0, ["55\\d{8}", [10]],
                    ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]
                ]
            ],
            JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0", "1534$1", 0, 0, [
                ["1534[0-24-8]\\d{5}"],
                ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"],
                ["80(?:07(?:35|81)|8901)\\d{4}"],
                ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"],
                ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"],
                ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"],
                ["56\\d{8}"]
            ]],
            JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"],
            JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9],
                [
                    ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"],
                    ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"],
                    ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"],
                    ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                ], "0"
            ],
            JP: ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                [
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"],
                    ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"],
                    ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"],
                    ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"]
                ], "0", 0, "(000[259]\\d{6})$|(?:(?:003768)0?)|0", "$1"
            ],
            KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10],
                [
                    ["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"],
                    ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
                ], "0"
            ],
            KG: ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10],
                [
                    ["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]
                ], "0"
            ],
            KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10],
                [
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"],
                    ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                ], "0"
            ],
            KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"],
            KM: ["269", "00", "[3478]\\d{6}", [7],
                [
                    ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]
                ]
            ],
            KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"],
            KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10],
                [
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"],
                    ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]
                ], "0"
            ],
            KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14],
                [
                    ["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"],
                    ["(\\d{4})(\\d{4})", "$1-$2", ["1"]],
                    ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[36]0|8"], "0$1"],
                    ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"],
                    ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                    ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]
                ], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"
            ],
            KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8],
                [
                    ["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]],
                    ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]
                ]
            ],
            KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"],
            KZ: ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33|7", 0, "8~10"],
            LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10],
                [
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[0135-9]"], "0$1"],
                    ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]
                ], "0"
            ],
            LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8],
                [
                    ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]
                ], "0"
            ],
            LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"],
            LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9],
                [
                    ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]
                ], "0", 0, "(1001)|0"
            ],
            LK: ["94", "00", "[1-9]\\d{8}", [9],
                [
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]
                ], "0"
            ],
            LR: ["231", "00", "(?:[245]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9],
                [
                    ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|[56]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-578]"], "0$1"]
                ], "0"
            ],
            LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8],
                [
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]
                ]
            ],
            LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8],
                [
                    ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(0-$1)", 1],
                    ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0 $1", 1],
                    ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(0-$1)", 1],
                    ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(0-$1)", 1]
                ], "0", 0, "[08]"
            ],
            LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11],
                [
                    ["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],
                    ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],
                    ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]],
                    ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]
                ], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"
            ],
            LV: ["371", "00", "(?:[268]\\d|90)\\d{6}", [8],
                [
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]
                ]
            ],
            LY: ["218", "00", "[2-9]\\d{8}", [9],
                [
                    ["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]
                ], "0"
            ],
            MA: ["212", "00", "[5-8]\\d{8}", [9],
                [
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"],
                    ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-46-9]|3[3-9]|9)|8(?:0[89]|92)"], "0$1"],
                    ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"],
                    ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]
                ], "0", 0, 0, 0, 0, 0, [
                    ["5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"],
                    ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-467]|5[0-3]|8[0-5]))\\d{6}"],
                    ["80[0-7]\\d{6}"],
                    ["89\\d{7}"], 0, 0, 0, 0, ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]
                ]
            ],
            MC: ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9],
                [
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]],
                    ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]
                ], "0"
            ],
            MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8],
                [
                    ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]
                ], "0"
            ],
            ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9],
                [
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]
                ], "0"
            ],
            MF: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [
                ["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"],
                ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"],
                ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]
            ]],
            MG: ["261", "00", "[23]\\d{8}", [9],
                [
                    ["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]
                ], "0", 0, "([24-9]\\d{6})$|0", "20$1"
            ],
            MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7],
                [
                    ["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]
                ], "1"
            ],
            MK: ["389", "00", "[2-578]\\d{7}", [8],
                [
                    ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"],
                    ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]
                ], "0"
            ],
            ML: ["223", "00", "[24-9]\\d{7}", [8],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]
                ]
            ],
            MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10],
                [
                    ["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"],
                    ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]"], "0$1"],
                    ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|452|678|86", "[12]|452|6788|86"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"],
                    ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"],
                    ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"],
                    ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"],
                    ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]
                ], "0"
            ],
            MN: ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10],
                [
                    ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"],
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]],
                    ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"],
                    ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"],
                    ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]
                ], "0"
            ],
            MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8],
                [
                    ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]
                ]
            ],
            MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"],
            MQ: ["596", "00", "(?:596\\d|7091)\\d{5}|(?:69|[89]\\d)\\d{7}", [9],
                [
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]|8(?:0[6-9]|[36])"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
                ], "0"
            ],
            MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]
                ]
            ],
            MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"],
            MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8],
                [
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]
                ]
            ],
            MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]],
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]],
                    ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]
                ], 0, 0, 0, 0, 0, 0, 0, "020"
            ],
            MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10],
                [
                    ["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]
                ], 0, 0, 0, 0, 0, 0, 0, "00"
            ],
            MW: ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9],
                [
                    ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]
                ], "0"
            ],
            MX: ["52", "0[09]", "[2-9]\\d{9}", [10],
                [
                    ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"]],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"]]
                ], 0, 0, 0, 0, 0, 0, 0, "00"
            ],
            MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10],
                [
                    ["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"],
                    ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"],
                    ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"],
                    ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]
                ], "0"
            ],
            MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9],
                [
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]
                ]
            ],
            NA: ["264", "00", "[68]\\d{7,8}", [8, 9],
                [
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]
                ], "0"
            ],
            NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]
                ]
            ],
            NE: ["227", "00", "[027-9]\\d{7}", [8],
                [
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[0467]"]]
                ]
            ],
            NF: ["672", "00", "[13]\\d{5}", [6],
                [
                    ["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]],
                    ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]
                ], 0, 0, "([0-258]\\d{4})$", "3$1"
            ],
            NG: ["234", "009", "38\\d{6}|[78]\\d{9,13}|(?:20|9\\d)\\d{8}", [8, 10, 11, 12, 13, 14],
                [
                    ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["3"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["20[129]"], "0$1"],
                    ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                    ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"],
                    ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]
                ], "0"
            ],
            NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8],
                [
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]
                ]
            ],
            NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11],
                [
                    ["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"],
                    ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"],
                    ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]
                ], "0"
            ],
            NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8],
                [
                    ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]
                ], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"
            ],
            NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11],
                [
                    ["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"],
                    ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"],
                    ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]
                ], "0"
            ],
            NR: ["674", "00", "(?:444|(?:55|8\\d)\\d|666)\\d{4}", [7],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]
                ]
            ],
            NU: ["683", "00", "(?:[4-7]|888\\d)\\d{3}", [4, 7],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["8"]]
                ]
            ],
            NZ: ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10],
                [
                    ["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"],
                    ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"],
                    ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]
                ], "0", 0, 0, 0, 0, 0, 0, "00"
            ],
            OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9],
                [
                    ["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]],
                    ["(\\d{2})(\\d{6})", "$1 $2", ["2"]],
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]
                ]
            ],
            PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11],
                [
                    ["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]],
                    ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]
                ]
            ],
            PE: ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9],
                [
                    ["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"],
                    ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"],
                    ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]
                ], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "
            ],
            PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]
                ]
            ],
            PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]],
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]
                ], 0, 0, 0, 0, 0, 0, 0, "00"
            ],
            PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13],
                [
                    ["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"],
                    ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"],
                    ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"],
                    ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                    ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                    ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]
                ], "0"
            ],
            PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12],
                [
                    ["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"],
                    ["(\\d{4})(\\d{5})", "$1 $2", ["1"]],
                    ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"],
                    ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"],
                    ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"],
                    ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"],
                    ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]
                ], "0"
            ],
            PL: ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10],
                [
                    ["(\\d{5})", "$1", ["19"]],
                    ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]],
                    ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],
                    ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]],
                    ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]],
                    ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]
                ]
            ],
            PM: ["508", "00", "[45]\\d{5}|(?:708|8\\d\\d)\\d{6}", [6, 9],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
                ], "0"
            ],
            PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"],
            PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10],
                [
                    ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"],
                    ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                ], "0"
            ],
            PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9],
                [
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]
                ]
            ],
            PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                ]
            ],
            PY: ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11],
                [
                    ["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"],
                    ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"],
                    ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"],
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]],
                    ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"],
                    ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]
                ], "0"
            ],
            QA: ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["2[16]|8"]],
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]
                ]
            ],
            RE: ["262", "00", "709\\d{6}|(?:26|[689]\\d)\\d{7}", [9],
                [
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-9]"], "0$1"]
                ], "0", 0, 0, 0, 0, 0, [
                    ["26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"],
                    ["(?:69(?:2\\d\\d|3(?:[06][0-6]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))|7092[0-3])\\d{4}"],
                    ["80\\d{7}"],
                    ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-6]|76(?:2[278]|3[0-37]))\\d{4}"],
                    ["8(?:1[019]|2[0156]|84|90)\\d{6}"]
                ]
            ],
            RO: ["40", "00", "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}", [6, 9],
                [
                    ["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"],
                    ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"]
                ], "0", 0, 0, 0, 0, 0, 0, 0, " int "
            ],
            RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12],
                [
                    ["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"],
                    ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]
                ], "0"
            ],
            RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14],
                [
                    ["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1],
                    ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1],
                    ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1],
                    ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]
                ], "8", 0, 0, 0, 0, "3[04-689]|[489]", 0, "8~10"
            ],
            RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]
                ], "0"
            ],
            SA: ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10],
                [
                    ["(\\d{4})(\\d{5})", "$1 $2", ["9"]],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]
                ], "0"
            ],
            SB: ["677", "0[01]", "[6-9]\\d{6}|[1-6]\\d{4}", [5, 7],
                [
                    ["(\\d{2})(\\d{5})", "$1 $2", ["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"]]
                ]
            ],
            SC: ["248", "010|0[0-2]", "(?:[2489]\\d|64)\\d{5}", [7],
                [
                    ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]
                ], 0, 0, 0, 0, 0, 0, 0, "00"
            ],
            SD: ["249", "00", "[19]\\d{8}", [9],
                [
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]
                ], "0"
            ],
            SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10, 12],
                [
                    ["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"],
                    ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"],
                    ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"],
                    ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"],
                    ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"],
                    ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"],
                    ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"],
                    ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"],
                    ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"],
                    ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]
                ], "0"
            ],
            SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11],
                [
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-9]|[1-9])"]],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
                    ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]],
                    ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                ]
            ],
            SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"],
            SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8],
                [
                    ["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"],
                    ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"],
                    ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]
                ], "0", 0, 0, 0, 0, 0, 0, "00"
            ],
            SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"],
            SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9],
                [
                    ["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"],
                    ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"],
                    ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]
                ], "0"
            ],
            SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8],
                [
                    ["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]
                ], "0"
            ],
            SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]],
                    ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]
                ], 0, 0, "([89]\\d{5})$", "0549$1"
            ],
            SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9],
                [
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
                    ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]
                ]
            ],
            SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9],
                [
                    ["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]],
                    ["(\\d{6})", "$1", ["[134]"]],
                    ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],
                    ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]],
                    ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|7[67]|9[2-9]"]]
                ], "0"
            ],
            SR: ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]],
                    ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]],
                    ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]
                ]
            ],
            SS: ["211", "00", "[19]\\d{8}", [9],
                [
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]
                ], "0"
            ],
            ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]
                ]
            ],
            SV: ["503", "00", "[267]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?", [7, 8, 11],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]],
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]],
                    ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]
                ]
            ],
            SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"],
            SY: ["963", "00", "[1-359]\\d{8}|[1-5]\\d{7}", [8, 9],
                [
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-4]|5[1-3]"], "0$1", 1],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[59]"], "0$1", 1]
                ], "0"
            ],
            SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9],
                [
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]],
                    ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]
                ]
            ],
            TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"],
            TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"],
            TD: ["235", "00|16", "(?:22|[689]\\d|77)\\d{6}", [8],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-9]"]]
                ], 0, 0, 0, 0, 0, 0, 0, "00"
            ],
            TG: ["228", "00", "[279]\\d{7}", [8],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]
                ]
            ],
            TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13],
                [
                    ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"],
                    ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                ], "0"
            ],
            TJ: ["992", "810", "[0-57-9]\\d{8}", [9],
                [
                    ["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]],
                    ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]],
                    ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3(?:[1245]|3[12])"]],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]
                ], 0, 0, 0, 0, 0, 0, 0, "8~10"
            ],
            TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]],
            TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]],
                    ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]
                ]
            ],
            TM: ["993", "810", "(?:[1-6]\\d|71)\\d{6}", [8],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"],
                    ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"],
                    ["(\\d{2})(\\d{6})", "$1 $2", ["[67]"], "8 $1"]
                ], "8", 0, 0, 0, 0, 0, 0, "8~10"
            ],
            TN: ["216", "00", "[2-57-9]\\d{7}", [8],
                [
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]
                ]
            ],
            TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7],
                [
                    ["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],
                    ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]
                ]
            ],
            TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13],
                [
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1],
                    ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"], "0$1", 1],
                    ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1],
                    ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]
                ], "0"
            ],
            TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"],
            TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7],
                [
                    ["(\\d{2})(\\d{3})", "$1 $2", ["2"]],
                    ["(\\d{2})(\\d{4})", "$1 $2", ["90"]],
                    ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]
                ]
            ],
            TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11],
                [
                    ["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"],
                    ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"],
                    ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]
                ], "0", 0, 0, 0, 0, 0, 0, 0, "#"
            ],
            TZ: ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9],
                [
                    ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"],
                    ["(\\d{2})(\\d{7})", "$1 $2", ["5"]],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]
                ], "0"
            ],
            UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10],
                [
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"],
                    ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
                ], "0", 0, 0, 0, 0, 0, 0, "0~0"
            ],
            UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9],
                [
                    ["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"],
                    ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"],
                    ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]
                ], "0"
            ],
            US: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10],
                [
                    ["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1],
                    ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]
                ], "1", 0, 0, 0, 0, 0, [
                    ["(?:3052(?:0[0-8]|[1-9]\\d)|5056(?:[0-35-9]\\d|4[468]))\\d{4}|(?:2742|305[3-9]|472[247-9]|505[2-57-9]|983[2-47-9])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-47-9]|1[02-9]|2[0135-79]|3[0-24679]|4[167]|5[0-2]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"],
                    [""],
                    ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                    ["900[2-9]\\d{6}"],
                    ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"], 0, 0, 0, ["305209\\d{4}"]
                ]
            ],
            UY: ["598", "0(?:0|1[3-9]\\d)", "0004\\d{2,9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", [6, 7, 8, 9, 10, 11, 12, 13],
                [
                    ["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]],
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]],
                    ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]],
                    ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]
                ], "0", 0, 0, 0, 0, 0, 0, "00", " int. "
            ],
            UZ: ["998", "00", "(?:20|33|[5-9]\\d)\\d{7}", [9],
                [
                    ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"]]
                ]
            ],
            VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11, 12], 0, 0, 0, 0, 0, 0, "06698"],
            VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"],
            VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10],
                [
                    ["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]
                ], "0"
            ],
            VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"],
            VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"],
            VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10],
                [
                    ["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1],
                    ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1],
                    ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", 1],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1],
                    ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1],
                    ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]
                ], "0"
            ],
            VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]
                ]
            ],
            WF: ["681", "00", "(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}", [6, 9],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[47-9]"]],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]
                ]
            ],
            WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10],
                [
                    ["(\\d{5})", "$1", ["[2-5]|6[1-9]"]],
                    ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]],
                    ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]
                ]
            ],
            XK: ["383", "00", "2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9, 10, 11, 12],
                [
                    ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2|39"], "0$1"],
                    ["(\\d{2})(\\d{7,10})", "$1 $2", ["3"], "0$1"]
                ], "0"
            ],
            YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9],
                [
                    ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]
                ], "0"
            ],
            YT: ["262", "00", "7093\\d{5}|(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [
                ["269(?:0[0-467]|15|5[0-4]|6\\d|[78]0)\\d{4}"],
                ["(?:639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])|7093[5-7])\\d{4}"],
                ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]
            ]],
            ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10],
                [
                    ["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]
                ], "0"
            ],
            ZM: ["260", "00", "800\\d{6}|(?:21|63|[79]\\d)\\d{7}", [9],
                [
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"],
                    ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]
                ], "0"
            ],
            ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10],
                [
                    ["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"],
                    ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"],
                    ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"],
                    ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"],
                    ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"],
                    ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"],
                    ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]
                ], "0"
            ]
        },
        nonGeographic: {
            800: ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8],
                [
                    ["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]
                ], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]
            ],
            808: ["808", 0, "[1-9]\\d{7}", [8],
                [
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]
                ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]
            ],
            870: ["870", 0, "7\\d{11}|[235-7]\\d{8}", [9, 12],
                [
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-7]"]]
                ], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"], 0, 0, 0, 0, 0, 0, ["2\\d{8}", [9]]]
            ],
            878: ["878", 0, "10\\d{10}", [12],
                [
                    ["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]
                ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]
            ],
            881: ["881", 0, "6\\d{9}|[0-36-9]\\d{8}", [9, 10],
                [
                    ["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]],
                    ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]
                ], 0, 0, 0, 0, 0, 0, [0, ["6\\d{9}|[0-36-9]\\d{8}"]]
            ],
            882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12],
                [
                    ["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]],
                    ["(\\d{2})(\\d{6})", "$1 $2", ["49"]],
                    ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]],
                    ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]],
                    ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]],
                    ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]],
                    ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]],
                    ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]
                ], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, ["348[57]\\d{7}", [11]], 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]
            ],
            883: ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12],
                [
                    ["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]],
                    ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]],
                    ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]
                ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]
            ],
            888: ["888", 0, "\\d{11}", [11],
                [
                    ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]
                ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]
            ],
            979: ["979", 0, "[1359]\\d{8}", [9],
                [
                    ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]
                ], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]
            ]
        }
    };

function qn(t, n) {
    t = t.split("-"), n = n.split("-");
    for (var e = t[0].split("."), r = n[0].split("."), i = 0; i < 3; i++) {
        var o = Number(e[i]),
            a = Number(r[i]);
        if (o > a) return 1;
        if (a > o) return -1;
        if (!isNaN(o) && isNaN(a)) return 1;
        if (isNaN(o) && !isNaN(a)) return -1
    }
    return t[1] && n[1] ? t[1] > n[1] ? 1 : t[1] < n[1] ? -1 : 0 : !t[1] && n[1] ? 1 : t[1] && !n[1] ? -1 : 0
}
var aa = {}.constructor;

function kt(t) {
    return t != null && t.constructor === aa
}

function Je(t) {
    "@babel/helpers - typeof";
    return Je = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n
    } : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, Je(t)
}

function Ee(t, n) {
    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
}

function da(t, n) {
    for (var e = 0; e < n.length; e++) {
        var r = n[e];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
}

function Se(t, n, e) {
    return n && da(t.prototype, n), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}
var ua = "1.2.0",
    sa = "1.7.35",
    tr = " ext. ",
    la = /^\d+$/,
    X = function() {
        function t(n) {
            Ee(this, t), fi(n), this.metadata = n, $i.call(this, n)
        }
        return Se(t, [{
            key: "getCountries",
            value: function() {
                return Object.keys(this.metadata.countries).filter(function(e) {
                    return e !== "001"
                })
            }
        }, {
            key: "getCountryMetadata",
            value: function(e) {
                return this.metadata.countries[e]
            }
        }, {
            key: "nonGeographic",
            value: function() {
                if (!(this.v1 || this.v2 || this.v3)) return this.metadata.nonGeographic || this.metadata.nonGeographical
            }
        }, {
            key: "hasCountry",
            value: function(e) {
                return this.getCountryMetadata(e) !== void 0
            }
        }, {
            key: "hasCallingCode",
            value: function(e) {
                if (this.getCountryCodesForCallingCode(e)) return !0;
                if (this.nonGeographic()) {
                    if (this.nonGeographic()[e]) return !0
                } else {
                    var r = this.countryCallingCodes()[e];
                    if (r && r.length === 1 && r[0] === "001") return !0
                }
            }
        }, {
            key: "isNonGeographicCallingCode",
            value: function(e) {
                return this.nonGeographic() ? !!this.nonGeographic()[e] : !this.getCountryCodesForCallingCode(e)
            }
        }, {
            key: "country",
            value: function(e) {
                return this.selectNumberingPlan(e)
            }
        }, {
            key: "selectNumberingPlan",
            value: function(e, r) {
                if (e && la.test(e) && (r = e, e = null), e && e !== "001") {
                    if (!this.hasCountry(e)) throw new Error("Unknown country: ".concat(e));
                    this.numberingPlan = new er(this.getCountryMetadata(e), this)
                } else if (r) {
                    if (!this.hasCallingCode(r)) throw new Error("Unknown calling code: ".concat(r));
                    this.numberingPlan = new er(this.getNumberingPlanMetadata(r), this)
                } else this.numberingPlan = void 0;
                return this
            }
        }, {
            key: "getCountryCodesForCallingCode",
            value: function(e) {
                var r = this.countryCallingCodes()[e];
                if (r) return r.length === 1 && r[0].length === 3 ? void 0 : r
            }
        }, {
            key: "getCountryCodeForCallingCode",
            value: function(e) {
                var r = this.getCountryCodesForCallingCode(e);
                if (r) return r[0]
            }
        }, {
            key: "getNumberingPlanMetadata",
            value: function(e) {
                var r = this.getCountryCodeForCallingCode(e);
                if (r) return this.getCountryMetadata(r);
                if (this.nonGeographic()) {
                    var i = this.nonGeographic()[e];
                    if (i) return i
                } else {
                    var o = this.countryCallingCodes()[e];
                    if (o && o.length === 1 && o[0] === "001") return this.metadata.countries["001"]
                }
            }
        }, {
            key: "countryCallingCode",
            value: function() {
                return this.numberingPlan.callingCode()
            }
        }, {
            key: "IDDPrefix",
            value: function() {
                return this.numberingPlan.IDDPrefix()
            }
        }, {
            key: "defaultIDDPrefix",
            value: function() {
                return this.numberingPlan.defaultIDDPrefix()
            }
        }, {
            key: "nationalNumberPattern",
            value: function() {
                return this.numberingPlan.nationalNumberPattern()
            }
        }, {
            key: "possibleLengths",
            value: function() {
                return this.numberingPlan.possibleLengths()
            }
        }, {
            key: "formats",
            value: function() {
                return this.numberingPlan.formats()
            }
        }, {
            key: "nationalPrefixForParsing",
            value: function() {
                return this.numberingPlan.nationalPrefixForParsing()
            }
        }, {
            key: "nationalPrefixTransformRule",
            value: function() {
                return this.numberingPlan.nationalPrefixTransformRule()
            }
        }, {
            key: "leadingDigits",
            value: function() {
                return this.numberingPlan.leadingDigits()
            }
        }, {
            key: "hasTypes",
            value: function() {
                return this.numberingPlan.hasTypes()
            }
        }, {
            key: "type",
            value: function(e) {
                return this.numberingPlan.type(e)
            }
        }, {
            key: "ext",
            value: function() {
                return this.numberingPlan.ext()
            }
        }, {
            key: "countryCallingCodes",
            value: function() {
                return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes
            }
        }, {
            key: "chooseCountryByCountryCallingCode",
            value: function(e) {
                return this.selectNumberingPlan(e)
            }
        }, {
            key: "hasSelectedNumberingPlan",
            value: function() {
                return this.numberingPlan !== void 0
            }
        }]), t
    }(),
    er = function() {
        function t(n, e) {
            Ee(this, t), this.globalMetadataObject = e, this.metadata = n, $i.call(this, e.metadata)
        }
        return Se(t, [{
            key: "callingCode",
            value: function() {
                return this.metadata[0]
            }
        }, {
            key: "getDefaultCountryMetadataForRegion",
            value: function() {
                return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode())
            }
        }, {
            key: "IDDPrefix",
            value: function() {
                if (!(this.v1 || this.v2)) return this.metadata[1]
            }
        }, {
            key: "defaultIDDPrefix",
            value: function() {
                if (!(this.v1 || this.v2)) return this.metadata[12]
            }
        }, {
            key: "nationalNumberPattern",
            value: function() {
                return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2]
            }
        }, {
            key: "possibleLengths",
            value: function() {
                if (!this.v1) return this.metadata[this.v2 ? 2 : 3]
            }
        }, {
            key: "_getFormats",
            value: function(e) {
                return e[this.v1 ? 2 : this.v2 ? 3 : 4]
            }
        }, {
            key: "formats",
            value: function() {
                var e = this,
                    r = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
                return r.map(function(i) {
                    return new ca(i, e)
                })
            }
        }, {
            key: "nationalPrefix",
            value: function() {
                return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5]
            }
        }, {
            key: "_getNationalPrefixFormattingRule",
            value: function(e) {
                return e[this.v1 ? 4 : this.v2 ? 5 : 6]
            }
        }, {
            key: "nationalPrefixFormattingRule",
            value: function() {
                return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion())
            }
        }, {
            key: "_nationalPrefixForParsing",
            value: function() {
                return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7]
            }
        }, {
            key: "nationalPrefixForParsing",
            value: function() {
                return this._nationalPrefixForParsing() || this.nationalPrefix()
            }
        }, {
            key: "nationalPrefixTransformRule",
            value: function() {
                return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8]
            }
        }, {
            key: "_getNationalPrefixIsOptionalWhenFormatting",
            value: function() {
                return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9]
            }
        }, {
            key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
            value: function() {
                return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion())
            }
        }, {
            key: "leadingDigits",
            value: function() {
                return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10]
            }
        }, {
            key: "types",
            value: function() {
                return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11]
            }
        }, {
            key: "hasTypes",
            value: function() {
                return this.types() && this.types().length === 0 ? !1 : !!this.types()
            }
        }, {
            key: "type",
            value: function(e) {
                if (this.hasTypes() && nr(this.types(), e)) return new $a(nr(this.types(), e), this)
            }
        }, {
            key: "ext",
            value: function() {
                return this.v1 || this.v2 ? tr : this.metadata[13] || tr
            }
        }]), t
    }(),
    ca = function() {
        function t(n, e) {
            Ee(this, t), this._format = n, this.metadata = e
        }
        return Se(t, [{
            key: "pattern",
            value: function() {
                return this._format[0]
            }
        }, {
            key: "format",
            value: function() {
                return this._format[1]
            }
        }, {
            key: "leadingDigitsPatterns",
            value: function() {
                return this._format[2] || []
            }
        }, {
            key: "nationalPrefixFormattingRule",
            value: function() {
                return this._format[3] || this.metadata.nationalPrefixFormattingRule()
            }
        }, {
            key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
            value: function() {
                return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
            }
        }, {
            key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
            value: function() {
                return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
            }
        }, {
            key: "usesNationalPrefix",
            value: function() {
                return !!(this.nationalPrefixFormattingRule() && !fa.test(this.nationalPrefixFormattingRule()))
            }
        }, {
            key: "internationalFormat",
            value: function() {
                return this._format[5] || this.format()
            }
        }]), t
    }(),
    fa = /^\(?\$1\)?$/,
    $a = function() {
        function t(n, e) {
            Ee(this, t), this.type = n, this.metadata = e
        }
        return Se(t, [{
            key: "pattern",
            value: function() {
                return this.metadata.v1 ? this.type : this.type[0]
            }
        }, {
            key: "possibleLengths",
            value: function() {
                if (!this.metadata.v1) return this.type[1] || this.metadata.possibleLengths()
            }
        }]), t
    }();

function nr(t, n) {
    switch (n) {
        case "FIXED_LINE":
            return t[0];
        case "MOBILE":
            return t[1];
        case "TOLL_FREE":
            return t[2];
        case "PREMIUM_RATE":
            return t[3];
        case "PERSONAL_NUMBER":
            return t[4];
        case "VOICEMAIL":
            return t[5];
        case "UAN":
            return t[6];
        case "PAGER":
            return t[7];
        case "VOIP":
            return t[8];
        case "SHARED_COST":
            return t[9]
    }
}

function fi(t) {
    if (!t) throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
    if (!kt(t) || !kt(t.countries)) throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(kt(t) ? "an object of shape: { " + Object.keys(t).join(", ") + " }" : "a " + ha(t) + ": " + t, "."))
}
var ha = function(n) {
    return Je(n)
};

function hn(t, n) {
    if (n = new X(n), n.hasCountry(t)) return n.country(t).countryCallingCode();
    throw new Error("Unknown country: ".concat(t))
}

function ga(t, n) {
    return n.countries.hasOwnProperty(t)
}

function $i(t) {
    var n = t.version;
    typeof n == "number" ? (this.v1 = n === 1, this.v2 = n === 2, this.v3 = n === 3, this.v4 = n === 4) : n ? qn(n, ua) === -1 ? this.v2 = !0 : qn(n, sa) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0
}

function Oe(t, n) {
    return pa(t, void 0, n)
}

function pa(t, n, e) {
    var r = e.type(n),
        i = r && r.possibleLengths() || e.possibleLengths();
    if (!i) return "IS_POSSIBLE";
    var o = t.length,
        a = i[0];
    return a === o ? "IS_POSSIBLE" : a > o ? "TOO_SHORT" : i[i.length - 1] < o ? "TOO_LONG" : i.indexOf(o, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH"
}

function ma(t, n, e) {
    if (n === void 0 && (n = {}), e = new X(e), n.v2) {
        if (!t.countryCallingCode) throw new Error("Invalid phone number object passed");
        e.selectNumberingPlan(t.countryCallingCode)
    } else {
        if (!t.phone) return !1;
        if (t.country) {
            if (!e.hasCountry(t.country)) throw new Error("Unknown country: ".concat(t.country));
            e.country(t.country)
        } else {
            if (!t.countryCallingCode) throw new Error("Invalid phone number object passed");
            e.selectNumberingPlan(t.countryCallingCode)
        }
    }
    if (e.possibleLengths()) return hi(t.phone || t.nationalNumber, e);
    if (t.countryCallingCode && e.isNonGeographicCallingCode(t.countryCallingCode)) return !0;
    throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.')
}

function hi(t, n) {
    switch (Oe(t, n)) {
        case "IS_POSSIBLE":
            return !0;
        default:
            return !1
    }
}

function xt(t, n) {
    return t = t || "", new RegExp("^(?:" + n + ")$").test(t)
}

function ya(t, n) {
    var e = typeof Symbol != "undefined" && t[Symbol.iterator] || t["@@iterator"];
    if (e) return (e = e.call(t)).next.bind(e);
    if (Array.isArray(t) || (e = va(t)) || n) {
        e && (t = e);
        var r = 0;
        return function() {
            return r >= t.length ? {
                done: !0
            } : {
                done: !1,
                value: t[r++]
            }
        }
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function va(t, n) {
    if (t) {
        if (typeof t == "string") return rr(t, n);
        var e = Object.prototype.toString.call(t).slice(8, -1);
        if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
        if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return rr(t, n)
    }
}

function rr(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
    return r
}
var ba = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];

function gn(t, n, e) {
    if (n = n || {}, !(!t.country && !t.countryCallingCode)) {
        e = new X(e), e.selectNumberingPlan(t.country, t.countryCallingCode);
        var r = n.v2 ? t.nationalNumber : t.phone;
        if (xt(r, e.nationalNumberPattern())) {
            if (Ge(r, "FIXED_LINE", e)) return e.type("MOBILE") && e.type("MOBILE").pattern() === "" || !e.type("MOBILE") || Ge(r, "MOBILE", e) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
            for (var i = ya(ba), o; !(o = i()).done;) {
                var a = o.value;
                if (Ge(r, a, e)) return a
            }
        }
    }
}

function Ge(t, n, e) {
    return n = e.type(n), !n || !n.pattern() || n.possibleLengths() && n.possibleLengths().indexOf(t.length) < 0 ? !1 : xt(t, n.pattern())
}

function Pa(t, n, e) {
    if (n = n || {}, e = new X(e), e.selectNumberingPlan(t.country, t.countryCallingCode), e.hasTypes()) return gn(t, n, e.metadata) !== void 0;
    var r = n.v2 ? t.nationalNumber : t.phone;
    return xt(r, e.nationalNumberPattern())
}

function Ca(t, n, e) {
    var r = new X(e),
        i = r.getCountryCodesForCallingCode(t);
    return i ? i.filter(function(o) {
        return Na(n, o, e)
    }) : []
}

function Na(t, n, e) {
    var r = new X(e);
    return r.selectNumberingPlan(n), r.numberingPlan.possibleLengths().indexOf(t.length) >= 0
}
var pn = 2,
    wa = 17,
    xa = 3,
    et = "0-9０-９٠-٩۰-۹",
    Aa = "-‐-―−ー－",
    Ea = "／/",
    Sa = "．.",
    Oa = "  ­​⁠　",
    Ta = "()（）［］\\[\\]",
    _a = "~⁓∼～",
    ft = "".concat(Aa).concat(Ea).concat(Sa).concat(Oa).concat(Ta).concat(_a),
    Te = "+＋",
    Ia = new RegExp("([" + et + "])");

function gi(t, n, e, r) {
    if (n) {
        var i = new X(r);
        i.selectNumberingPlan(n, e);
        var o = new RegExp(i.IDDPrefix());
        if (t.search(o) === 0) {
            t = t.slice(t.match(o)[0].length);
            var a = t.match(Ia);
            if (!(a && a[1] != null && a[1].length > 0 && a[1] === "0")) return t
        }
    }
}

function Qe(t, n) {
    if (t && n.numberingPlan.nationalPrefixForParsing()) {
        var e = new RegExp("^(?:" + n.numberingPlan.nationalPrefixForParsing() + ")"),
            r = e.exec(t);
        if (r) {
            var i, o, a = r.length - 1,
                d = a > 0 && r[a];
            if (n.nationalPrefixTransformRule() && d) i = t.replace(e, n.nationalPrefixTransformRule()), a > 1 && (o = r[1]);
            else {
                var u = r[0];
                i = t.slice(u.length), d && (o = r[1])
            }
            var s;
            if (d) {
                var f = t.indexOf(r[1]),
                    l = t.slice(0, f);
                l === n.numberingPlan.nationalPrefix() && (s = n.numberingPlan.nationalPrefix())
            } else s = r[0];
            return {
                nationalNumber: i,
                nationalPrefix: s,
                carrierCode: o
            }
        }
    }
    return {
        nationalNumber: t
    }
}

function qe(t, n) {
    var e = Qe(t, n),
        r = e.carrierCode,
        i = e.nationalNumber;
    if (i !== t) {
        if (!Fa(t, i, n)) return {
            nationalNumber: t
        };
        if (n.possibleLengths() && !Ra(i, n)) return {
            nationalNumber: t
        }
    }
    return {
        nationalNumber: i,
        carrierCode: r
    }
}

function Fa(t, n, e) {
    return !(xt(t, e.nationalNumberPattern()) && !xt(n, e.nationalNumberPattern()))
}

function Ra(t, n) {
    switch (Oe(t, n)) {
        case "TOO_SHORT":
        case "INVALID_LENGTH":
            return !1;
        default:
            return !0
    }
}

function pi(t, n, e, r) {
    var i = n ? hn(n, r) : e;
    if (t.indexOf(i) === 0) {
        r = new X(r), r.selectNumberingPlan(n, e);
        var o = t.slice(i.length),
            a = qe(o, r),
            d = a.nationalNumber,
            u = qe(t, r),
            s = u.nationalNumber;
        if (!xt(s, r.nationalNumberPattern()) && xt(d, r.nationalNumberPattern()) || Oe(s, r) === "TOO_LONG") return {
            countryCallingCode: i,
            number: o
        }
    }
    return {
        number: t
    }
}

function mn(t, n, e, r) {
    if (!t) return {};
    var i;
    if (t[0] !== "+") {
        var o = gi(t, n, e, r);
        if (o && o !== t) i = !0, t = "+" + o;
        else {
            if (n || e) {
                var a = pi(t, n, e, r),
                    d = a.countryCallingCode,
                    u = a.number;
                if (d) return {
                    countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
                    countryCallingCode: d,
                    number: u
                }
            }
            return {
                number: t
            }
        }
    }
    if (t[1] === "0") return {};
    r = new X(r);
    for (var s = 2; s - 1 <= xa && s <= t.length;) {
        var f = t.slice(1, s);
        if (r.hasCallingCode(f)) return r.selectNumberingPlan(f), {
            countryCallingCodeSource: i ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
            countryCallingCode: f,
            number: t.slice(s)
        };
        s++
    }
    return {}
}

function mi(t) {
    return t.replace(new RegExp("[".concat(ft, "]+"), "g"), " ").trim()
}
var yi = /(\$\d)/;

function vi(t, n, e) {
    var r = e.useInternationalFormat,
        i = e.withNationalPrefix;
    e.carrierCode, e.metadata;
    var o = t.replace(new RegExp(n.pattern()), r ? n.internationalFormat() : i && n.nationalPrefixFormattingRule() ? n.format().replace(yi, n.nationalPrefixFormattingRule()) : n.format());
    return r ? mi(o) : o
}
var Da = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;

function La(t, n, e) {
    var r = new X(e);
    if (r.selectNumberingPlan(t, n), r.defaultIDDPrefix()) return r.defaultIDDPrefix();
    if (Da.test(r.IDDPrefix())) return r.IDDPrefix()
}
var Ma = ";ext=",
    Ht = function(n) {
        return "([".concat(et, "]{1,").concat(n, "})")
    };

function bi(t) {
    var n = "20",
        e = "15",
        r = "9",
        i = "6",
        o = "[  \\t,]*",
        a = "[:\\.．]?[  \\t,-]*",
        d = "#?",
        u = "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)",
        s = "(?:[xｘ#＃~～]|int|ｉｎｔ)",
        f = "[- ]+",
        l = "[  \\t]*",
        c = "(?:,{2}|;)",
        p = Ma + Ht(n),
        $ = o + u + a + Ht(n) + d,
        g = o + s + a + Ht(r) + d,
        h = f + Ht(i) + "#",
        m = l + c + a + Ht(e) + d,
        y = l + "(?:,)+" + a + Ht(r) + d;
    return p + "|" + $ + "|" + g + "|" + h + "|" + m + "|" + y
}
var ka = "[" + et + "]{" + pn + "}",
    Ba = "[" + Te + "]{0,1}(?:[" + ft + "]*[" + et + "]){3,}[" + ft + et + "]*",
    ja = new RegExp("^[" + Te + "]{0,1}(?:[" + ft + "]*[" + et + "]){1,2}$", "i"),
    Ga = Ba + "(?:" + bi() + ")?",
    Ha = new RegExp("^" + ka + "$|^" + Ga + "$", "i");

function Ua(t) {
    return t.length >= pn && Ha.test(t)
}

function Wa(t) {
    return ja.test(t)
}

function Va(t) {
    var n = t.number,
        e = t.ext;
    if (!n) return "";
    if (n[0] !== "+") throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
    return "tel:".concat(n).concat(e ? ";ext=" + e : "")
}

function Ka(t, n) {
    var e = typeof Symbol != "undefined" && t[Symbol.iterator] || t["@@iterator"];
    if (e) return (e = e.call(t)).next.bind(e);
    if (Array.isArray(t) || (e = Xa(t)) || n) {
        e && (t = e);
        var r = 0;
        return function() {
            return r >= t.length ? {
                done: !0
            } : {
                done: !1,
                value: t[r++]
            }
        }
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function Xa(t, n) {
    if (t) {
        if (typeof t == "string") return ir(t, n);
        var e = Object.prototype.toString.call(t).slice(8, -1);
        if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
        if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return ir(t, n)
    }
}

function ir(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
    return r
}

function or(t, n) {
    var e = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        n && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(t, i).enumerable
        })), e.push.apply(e, r)
    }
    return e
}

function ar(t) {
    for (var n = 1; n < arguments.length; n++) {
        var e = arguments[n] != null ? arguments[n] : {};
        n % 2 ? or(Object(e), !0).forEach(function(r) {
            Ya(t, r, e[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : or(Object(e)).forEach(function(r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r))
        })
    }
    return t
}

function Ya(t, n, e) {
    return n in t ? Object.defineProperty(t, n, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = e, t
}
var dr = {
    formatExtension: function(n, e, r) {
        return "".concat(n).concat(r.ext()).concat(e)
    }
};

function za(t, n, e, r) {
    if (e ? e = ar(ar({}, dr), e) : e = dr, r = new X(r), t.country && t.country !== "001") {
        if (!r.hasCountry(t.country)) throw new Error("Unknown country: ".concat(t.country));
        r.country(t.country)
    } else if (t.countryCallingCode) r.selectNumberingPlan(t.countryCallingCode);
    else return t.phone || "";
    var i = r.countryCallingCode(),
        o = e.v2 ? t.nationalNumber : t.phone,
        a;
    switch (n) {
        case "NATIONAL":
            return o ? (a = Pe(o, t.carrierCode, "NATIONAL", r, e), He(a, t.ext, r, e.formatExtension)) : "";
        case "INTERNATIONAL":
            return o ? (a = Pe(o, null, "INTERNATIONAL", r, e), a = "+".concat(i, " ").concat(a), He(a, t.ext, r, e.formatExtension)) : "+".concat(i);
        case "E.164":
            return "+".concat(i).concat(o);
        case "RFC3966":
            return Va({
                number: "+".concat(i).concat(o),
                ext: t.ext
            });
        case "IDD":
            if (!e.fromCountry) return;
            var d = Ja(o, t.carrierCode, i, e.fromCountry, r);
            return He(d, t.ext, r, e.formatExtension);
        default:
            throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(n, '"'))
    }
}

function Pe(t, n, e, r, i) {
    var o = Za(r.formats(), t);
    return o ? vi(t, o, {
        useInternationalFormat: e === "INTERNATIONAL",
        withNationalPrefix: !(o.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && i && i.nationalPrefix === !1),
        carrierCode: n,
        metadata: r
    }) : t
}

function Za(t, n) {
    for (var e = Ka(t), r; !(r = e()).done;) {
        var i = r.value;
        if (i.leadingDigitsPatterns().length > 0) {
            var o = i.leadingDigitsPatterns()[i.leadingDigitsPatterns().length - 1];
            if (n.search(o) !== 0) continue
        }
        if (xt(n, i.pattern())) return i
    }
}

function He(t, n, e, r) {
    return n ? r(t, n, e) : t
}

function Ja(t, n, e, r, i) {
    var o = hn(r, i.metadata);
    if (o === e) {
        var a = Pe(t, n, "NATIONAL", i);
        return e === "1" ? e + " " + a : a
    }
    var d = La(r, void 0, i.metadata);
    if (d) return "".concat(d, " ").concat(e, " ").concat(Pe(t, null, "INTERNATIONAL", i))
}

function ur(t, n) {
    var e = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        n && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(t, i).enumerable
        })), e.push.apply(e, r)
    }
    return e
}

function sr(t) {
    for (var n = 1; n < arguments.length; n++) {
        var e = arguments[n] != null ? arguments[n] : {};
        n % 2 ? ur(Object(e), !0).forEach(function(r) {
            Qa(t, r, e[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : ur(Object(e)).forEach(function(r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r))
        })
    }
    return t
}

function Qa(t, n, e) {
    return n in t ? Object.defineProperty(t, n, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = e, t
}

function qa(t, n) {
    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
}

function td(t, n) {
    for (var e = 0; e < n.length; e++) {
        var r = n[e];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
}

function ed(t, n, e) {
    return n && td(t.prototype, n), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}
var Pi = function() {
        function t(n, e, r) {
            if (qa(this, t), !n) throw new TypeError("First argument is required");
            if (typeof n != "string") throw new TypeError("First argument must be a string");
            if (typeof n == "string") {
                if (n[0] === "+" && !e) throw new TypeError("`metadata` argument not passed");
                if (kt(e) && kt(e.countries)) {
                    r = e;
                    var i = n;
                    if (!id.test(i)) throw new Error('Invalid `number` argument passed: must consist of a "+" followed by digits');
                    var o = mn(i, void 0, void 0, r),
                        a = o.countryCallingCode,
                        d = o.number;
                    if (e = d, n = a, !e) throw new Error("Invalid `number` argument passed: too short")
                }
            }
            if (!e) throw new TypeError("`nationalNumber` argument is required");
            if (typeof e != "string") throw new TypeError("`nationalNumber` argument must be a string");
            fi(r);
            var u = rd(n, r),
                s = u.country,
                f = u.countryCallingCode;
            this.country = s, this.countryCallingCode = f, this.nationalNumber = e, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.getMetadata = function() {
                return r
            }
        }
        return ed(t, [{
            key: "setExt",
            value: function(e) {
                this.ext = e
            }
        }, {
            key: "getPossibleCountries",
            value: function() {
                return this.country ? [this.country] : Ca(this.countryCallingCode, this.nationalNumber, this.getMetadata())
            }
        }, {
            key: "isPossible",
            value: function() {
                return ma(this, {
                    v2: !0
                }, this.getMetadata())
            }
        }, {
            key: "isValid",
            value: function() {
                return Pa(this, {
                    v2: !0
                }, this.getMetadata())
            }
        }, {
            key: "isNonGeographic",
            value: function() {
                var e = new X(this.getMetadata());
                return e.isNonGeographicCallingCode(this.countryCallingCode)
            }
        }, {
            key: "isEqual",
            value: function(e) {
                return this.number === e.number && this.ext === e.ext
            }
        }, {
            key: "getType",
            value: function() {
                return gn(this, {
                    v2: !0
                }, this.getMetadata())
            }
        }, {
            key: "format",
            value: function(e, r) {
                return za(this, e, r ? sr(sr({}, r), {}, {
                    v2: !0
                }) : {
                    v2: !0
                }, this.getMetadata())
            }
        }, {
            key: "formatNational",
            value: function(e) {
                return this.format("NATIONAL", e)
            }
        }, {
            key: "formatInternational",
            value: function(e) {
                return this.format("INTERNATIONAL", e)
            }
        }, {
            key: "getURI",
            value: function(e) {
                return this.format("RFC3966", e)
            }
        }]), t
    }(),
    nd = function(n) {
        return /^[A-Z]{2}$/.test(n)
    };

function rd(t, n) {
    var e, r, i = new X(n);
    return nd(t) ? (e = t, i.selectNumberingPlan(e), r = i.countryCallingCode()) : r = t, {
        country: e,
        countryCallingCode: r
    }
}
var id = /^\+\d+$/;

function tn(t) {
    "@babel/helpers - typeof";
    return tn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n
    } : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, tn(t)
}

function od(t, n, e) {
    return Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}

function ad(t, n) {
    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
}

function dd(t, n) {
    if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), n && ne(t, n)
}

function ud(t) {
    var n = Ni();
    return function() {
        var r = re(t),
            i;
        if (n) {
            var o = re(this).constructor;
            i = Reflect.construct(r, arguments, o)
        } else i = r.apply(this, arguments);
        return sd(this, i)
    }
}

function sd(t, n) {
    if (n && (tn(n) === "object" || typeof n == "function")) return n;
    if (n !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return Ci(t)
}

function Ci(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}

function en(t) {
    var n = typeof Map == "function" ? new Map : void 0;
    return en = function(r) {
        if (r === null || !ld(r)) return r;
        if (typeof r != "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof n != "undefined") {
            if (n.has(r)) return n.get(r);
            n.set(r, i)
        }

        function i() {
            return ye(r, arguments, re(this).constructor)
        }
        return i.prototype = Object.create(r.prototype, {
            constructor: {
                value: i,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), ne(i, r)
    }, en(t)
}

function ye(t, n, e) {
    return Ni() ? ye = Reflect.construct : ye = function(i, o, a) {
        var d = [null];
        d.push.apply(d, o);
        var u = Function.bind.apply(i, d),
            s = new u;
        return a && ne(s, a.prototype), s
    }, ye.apply(null, arguments)
}

function Ni() {
    if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch (t) {
        return !1
    }
}

function ld(t) {
    return Function.toString.call(t).indexOf("[native code]") !== -1
}

function ne(t, n) {
    return ne = Object.setPrototypeOf || function(r, i) {
        return r.__proto__ = i, r
    }, ne(t, n)
}

function re(t) {
    return re = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    }, re(t)
}
var wt = function(t) {
        dd(e, t);
        var n = ud(e);

        function e(r) {
            var i;
            return ad(this, e), i = n.call(this, r), Object.setPrototypeOf(Ci(i), e.prototype), i.name = i.constructor.name, i
        }
        return od(e)
    }(en(Error)),
    lr = new RegExp("(?:" + bi() + ")$", "i");

function cd(t) {
    var n = t.search(lr);
    if (n < 0) return {};
    for (var e = t.slice(0, n), r = t.match(lr), i = 1; i < r.length;) {
        if (r[i]) return {
            number: e,
            ext: r[i]
        };
        i++
    }
}

function fd(t, n) {
    var e = typeof Symbol != "undefined" && t[Symbol.iterator] || t["@@iterator"];
    if (e) return (e = e.call(t)).next.bind(e);
    if (Array.isArray(t) || (e = $d(t)) || n) {
        e && (t = e);
        var r = 0;
        return function() {
            return r >= t.length ? {
                done: !0
            } : {
                done: !1,
                value: t[r++]
            }
        }
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function $d(t, n) {
    if (t) {
        if (typeof t == "string") return cr(t, n);
        var e = Object.prototype.toString.call(t).slice(8, -1);
        if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
        if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return cr(t, n)
    }
}

function cr(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
    return r
}
var hd = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    "０": "0",
    "１": "1",
    "２": "2",
    "３": "3",
    "４": "4",
    "５": "5",
    "６": "6",
    "７": "7",
    "８": "8",
    "９": "9",
    "٠": "0",
    "١": "1",
    "٢": "2",
    "٣": "3",
    "٤": "4",
    "٥": "5",
    "٦": "6",
    "٧": "7",
    "٨": "8",
    "٩": "9",
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9"
};

function wi(t) {
    return hd[t]
}

function Ce(t) {
    for (var n = "", e = fd(t.split("")), r; !(r = e()).done;) {
        var i = r.value,
            o = wi(i);
        o && (n += o)
    }
    return n
}

function gd(t, n) {
    var e = typeof Symbol != "undefined" && t[Symbol.iterator] || t["@@iterator"];
    if (e) return (e = e.call(t)).next.bind(e);
    if (Array.isArray(t) || (e = pd(t)) || n) {
        e && (t = e);
        var r = 0;
        return function() {
            return r >= t.length ? {
                done: !0
            } : {
                done: !1,
                value: t[r++]
            }
        }
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function pd(t, n) {
    if (t) {
        if (typeof t == "string") return fr(t, n);
        var e = Object.prototype.toString.call(t).slice(8, -1);
        if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
        if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return fr(t, n)
    }
}

function fr(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
    return r
}

function $r(t) {
    for (var n = "", e = gd(t.split("")), r; !(r = e()).done;) {
        var i = r.value;
        n += md(i, n) || ""
    }
    return n
}

function md(t, n, e) {
    if (t === "+") {
        if (n) {
            typeof e == "function" && e("end");
            return
        }
        return "+"
    }
    return wi(t)
}

function yd(t, n) {
    var e = typeof Symbol != "undefined" && t[Symbol.iterator] || t["@@iterator"];
    if (e) return (e = e.call(t)).next.bind(e);
    if (Array.isArray(t) || (e = vd(t)) || n) {
        e && (t = e);
        var r = 0;
        return function() {
            return r >= t.length ? {
                done: !0
            } : {
                done: !1,
                value: t[r++]
            }
        }
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function vd(t, n) {
    if (t) {
        if (typeof t == "string") return hr(t, n);
        var e = Object.prototype.toString.call(t).slice(8, -1);
        if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
        if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return hr(t, n)
    }
}

function hr(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
    return r
}

function xi(t, n) {
    var e = n.countries;
    n.defaultCountry;
    var r = n.metadata;
    r = new X(r);
    for (var i = yd(e), o; !(o = i()).done;) {
        var a = o.value;
        if (r.country(a), r.leadingDigits()) {
            if (t && t.search(r.leadingDigits()) === 0) return a
        } else if (gn({
                phone: t,
                country: a
            }, void 0, r.metadata)) return a
    }
}

function Ai(t, n) {
    var e = n.nationalNumber,
        r = n.defaultCountry,
        i = n.metadata,
        o = i.getCountryCodesForCallingCode(t);
    if (o) return o.length === 1 ? o[0] : xi(e, {
        countries: o,
        defaultCountry: r,
        metadata: i.metadata
    })
}
var Ei = "+",
    bd = "[\\-\\.\\(\\)]?",
    gr = "([" + et + "]|" + bd + ")",
    Pd = "^\\" + Ei + gr + "*[" + et + "]" + gr + "*$",
    Cd = new RegExp(Pd, "g"),
    nn = et,
    Nd = "[" + nn + "]+((\\-)*[" + nn + "])*",
    wd = "a-zA-Z",
    xd = "[" + wd + "]+((\\-)*[" + nn + "])*",
    Ad = "^(" + Nd + "\\.)*" + xd + "\\.?$",
    Ed = new RegExp(Ad, "g"),
    pr = "tel:",
    rn = ";phone-context=",
    Sd = ";isub=";

function Od(t) {
    var n = t.indexOf(rn);
    if (n < 0) return null;
    var e = n + rn.length;
    if (e >= t.length) return "";
    var r = t.indexOf(";", e);
    return r >= 0 ? t.substring(e, r) : t.substring(e)
}

function Td(t) {
    return t === null ? !0 : t.length === 0 ? !1 : Cd.test(t) || Ed.test(t)
}

function _d(t, n) {
    var e = n.extractFormattedPhoneNumber,
        r = Od(t);
    if (!Td(r)) throw new wt("NOT_A_NUMBER");
    var i;
    if (r === null) i = e(t) || "";
    else {
        i = "", r.charAt(0) === Ei && (i += r);
        var o = t.indexOf(pr),
            a;
        o >= 0 ? a = o + pr.length : a = 0;
        var d = t.indexOf(rn);
        i += t.substring(a, d)
    }
    var u = i.indexOf(Sd);
    if (u > 0 && (i = i.substring(0, u)), i !== "") return i
}
var Id = 250,
    Fd = new RegExp("[" + Te + et + "]"),
    Rd = new RegExp("[^" + et + "#]+$");

function Dd(t, n, e) {
    if (n = n || {}, e = new X(e), n.defaultCountry && !e.hasCountry(n.defaultCountry)) throw n.v2 ? new wt("INVALID_COUNTRY") : new Error("Unknown country: ".concat(n.defaultCountry));
    var r = Md(t, n.v2, n.extract),
        i = r.number,
        o = r.ext,
        a = r.error;
    if (!i) {
        if (n.v2) throw a === "TOO_SHORT" ? new wt("TOO_SHORT") : new wt("NOT_A_NUMBER");
        return {}
    }
    var d = Bd(i, n.defaultCountry, n.defaultCallingCode, e),
        u = d.country,
        s = d.nationalNumber,
        f = d.countryCallingCode,
        l = d.countryCallingCodeSource,
        c = d.carrierCode;
    if (!e.hasSelectedNumberingPlan()) {
        if (n.v2) throw new wt("INVALID_COUNTRY");
        return {}
    }
    if (!s || s.length < pn) {
        if (n.v2) throw new wt("TOO_SHORT");
        return {}
    }
    if (s.length > wa) {
        if (n.v2) throw new wt("TOO_LONG");
        return {}
    }
    if (n.v2) {
        var p = new Pi(f, s, e.metadata);
        return u && (p.country = u), c && (p.carrierCode = c), o && (p.ext = o), p.__countryCallingCodeSource = l, p
    }
    var $ = (n.extended ? e.hasSelectedNumberingPlan() : u) ? xt(s, e.nationalNumberPattern()) : !1;
    return n.extended ? {
        country: u,
        countryCallingCode: f,
        carrierCode: c,
        valid: $,
        possible: $ ? !0 : !!(n.extended === !0 && e.possibleLengths() && hi(s, e)),
        phone: s,
        ext: o
    } : $ ? kd(u, s, o) : {}
}

function Ld(t, n, e) {
    if (t) {
        if (t.length > Id) {
            if (e) throw new wt("TOO_LONG");
            return
        }
        if (n === !1) return t;
        var r = t.search(Fd);
        if (!(r < 0)) return t.slice(r).replace(Rd, "")
    }
}

function Md(t, n, e) {
    var r = _d(t, {
        extractFormattedPhoneNumber: function(a) {
            return Ld(a, e, n)
        }
    });
    if (!r) return {};
    if (!Ua(r)) return Wa(r) ? {
        error: "TOO_SHORT"
    } : {};
    var i = cd(r);
    return i.ext ? i : {
        number: r
    }
}

function kd(t, n, e) {
    var r = {
        country: t,
        phone: n
    };
    return e && (r.ext = e), r
}

function Bd(t, n, e, r) {
    var i = mn($r(t), n, e, r.metadata),
        o = i.countryCallingCodeSource,
        a = i.countryCallingCode,
        d = i.number,
        u;
    if (a) r.selectNumberingPlan(a);
    else if (d && (n || e)) r.selectNumberingPlan(n, e), n && (u = n), a = e || hn(n, r.metadata);
    else return {};
    if (!d) return {
        countryCallingCodeSource: o,
        countryCallingCode: a
    };
    var s = qe($r(d), r),
        f = s.nationalNumber,
        l = s.carrierCode,
        c = Ai(a, {
            nationalNumber: f,
            defaultCountry: n,
            metadata: r
        });
    return c && (u = c, c === "001" || r.country(u)), {
        country: u,
        countryCallingCode: a,
        countryCallingCodeSource: o,
        nationalNumber: f,
        carrierCode: l
    }
}

function mr(t, n) {
    var e = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        n && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(t, i).enumerable
        })), e.push.apply(e, r)
    }
    return e
}

function yr(t) {
    for (var n = 1; n < arguments.length; n++) {
        var e = arguments[n] != null ? arguments[n] : {};
        n % 2 ? mr(Object(e), !0).forEach(function(r) {
            jd(t, r, e[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : mr(Object(e)).forEach(function(r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r))
        })
    }
    return t
}

function jd(t, n, e) {
    return n in t ? Object.defineProperty(t, n, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = e, t
}

function Gd(t, n, e) {
    return Dd(t, yr(yr({}, n), {}, {
        v2: !0
    }), e)
}

function vr(t, n) {
    var e = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        n && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(t, i).enumerable
        })), e.push.apply(e, r)
    }
    return e
}

function Hd(t) {
    for (var n = 1; n < arguments.length; n++) {
        var e = arguments[n] != null ? arguments[n] : {};
        n % 2 ? vr(Object(e), !0).forEach(function(r) {
            Ud(t, r, e[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : vr(Object(e)).forEach(function(r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r))
        })
    }
    return t
}

function Ud(t, n, e) {
    return n in t ? Object.defineProperty(t, n, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = e, t
}

function Wd(t, n) {
    return Yd(t) || Xd(t, n) || Kd(t, n) || Vd()
}

function Vd() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function Kd(t, n) {
    if (t) {
        if (typeof t == "string") return br(t, n);
        var e = Object.prototype.toString.call(t).slice(8, -1);
        if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
        if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return br(t, n)
    }
}

function br(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
    return r
}

function Xd(t, n) {
    var e = t == null ? null : typeof Symbol != "undefined" && t[Symbol.iterator] || t["@@iterator"];
    if (e != null) {
        var r = [],
            i = !0,
            o = !1,
            a, d;
        try {
            for (e = e.call(t); !(i = (a = e.next()).done) && (r.push(a.value), !(n && r.length === n)); i = !0);
        } catch (u) {
            o = !0, d = u
        } finally {
            try {
                !i && e.return != null && e.return()
            } finally {
                if (o) throw d
            }
        }
        return r
    }
}

function Yd(t) {
    if (Array.isArray(t)) return t
}

function yn(t) {
    var n = Array.prototype.slice.call(t),
        e = Wd(n, 4),
        r = e[0],
        i = e[1],
        o = e[2],
        a = e[3],
        d, u, s;
    if (typeof r == "string") d = r;
    else throw new TypeError("A text for parsing must be a string.");
    if (!i || typeof i == "string") a ? (u = o, s = a) : (u = void 0, s = o), i && (u = Hd({
        defaultCountry: i
    }, u));
    else if (kt(i)) o ? (u = i, s = o) : s = i;
    else throw new Error("Invalid second argument: ".concat(i));
    return {
        text: d,
        options: u,
        metadata: s
    }
}

function Pr(t, n) {
    var e = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        n && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(t, i).enumerable
        })), e.push.apply(e, r)
    }
    return e
}

function Cr(t) {
    for (var n = 1; n < arguments.length; n++) {
        var e = arguments[n] != null ? arguments[n] : {};
        n % 2 ? Pr(Object(e), !0).forEach(function(r) {
            zd(t, r, e[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : Pr(Object(e)).forEach(function(r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r))
        })
    }
    return t
}

function zd(t, n, e) {
    return n in t ? Object.defineProperty(t, n, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = e, t
}

function vn(t, n, e) {
    n && n.defaultCountry && !ga(n.defaultCountry, e) && (n = Cr(Cr({}, n), {}, {
        defaultCountry: void 0
    }));
    try {
        return Gd(t, n, e)
    } catch (r) {
        if (!(r instanceof wt)) throw r
    }
}

function nl() {
    var t = yn(arguments),
        n = t.text,
        e = t.options,
        r = t.metadata;
    return vn(n, e, r)
}

function Nr(t, n) {
    var e = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        n && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(t, i).enumerable
        })), e.push.apply(e, r)
    }
    return e
}

function wr(t) {
    for (var n = 1; n < arguments.length; n++) {
        var e = arguments[n] != null ? arguments[n] : {};
        n % 2 ? Nr(Object(e), !0).forEach(function(r) {
            Zd(t, r, e[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : Nr(Object(e)).forEach(function(r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r))
        })
    }
    return t
}

function Zd(t, n, e) {
    return n in t ? Object.defineProperty(t, n, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = e, t
}

function rl() {
    var t = yn(arguments),
        n = t.text,
        e = t.options,
        r = t.metadata;
    e = wr(wr({}, e), {}, {
        extract: !1
    });
    var i = vn(n, e, r);
    return i && i.isValid() || !1
}

function xr(t, n) {
    var e = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        n && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(t, i).enumerable
        })), e.push.apply(e, r)
    }
    return e
}

function Ar(t) {
    for (var n = 1; n < arguments.length; n++) {
        var e = arguments[n] != null ? arguments[n] : {};
        n % 2 ? xr(Object(e), !0).forEach(function(r) {
            Jd(t, r, e[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : xr(Object(e)).forEach(function(r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r))
        })
    }
    return t
}

function Jd(t, n, e) {
    return n in t ? Object.defineProperty(t, n, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = e, t
}

function il() {
    var t = yn(arguments),
        n = t.text,
        e = t.options,
        r = t.metadata;
    e = Ar(Ar({}, e), {}, {
        extract: !1
    });
    var i = vn(n, e, r);
    return i && i.isPossible() || !1
}

function Qd(t, n) {
    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
}

function qd(t, n) {
    for (var e = 0; e < n.length; e++) {
        var r = n[e];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
}

function tu(t, n, e) {
    return n && qd(t.prototype, n), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}
var eu = function() {
    function t(n) {
        var e = n.onCountryChange,
            r = n.onCallingCodeChange;
        Qd(this, t), this.onCountryChange = e, this.onCallingCodeChange = r
    }
    return tu(t, [{
        key: "reset",
        value: function(e) {
            var r = e.country,
                i = e.callingCode;
            this.international = !1, this.missingPlus = !1, this.IDDPrefix = void 0, this.callingCode = void 0, this.digits = "", this.resetNationalSignificantNumber(), this.initCountryAndCallingCode(r, i)
        }
    }, {
        key: "resetNationalSignificantNumber",
        value: function() {
            this.nationalSignificantNumber = this.getNationalDigits(), this.nationalSignificantNumberMatchesInput = !0, this.nationalPrefix = void 0, this.carrierCode = void 0, this.complexPrefixBeforeNationalSignificantNumber = void 0
        }
    }, {
        key: "update",
        value: function(e) {
            for (var r = 0, i = Object.keys(e); r < i.length; r++) {
                var o = i[r];
                this[o] = e[o]
            }
        }
    }, {
        key: "initCountryAndCallingCode",
        value: function(e, r) {
            this.setCountry(e), this.setCallingCode(r)
        }
    }, {
        key: "setCountry",
        value: function(e) {
            this.country = e, this.onCountryChange(e)
        }
    }, {
        key: "setCallingCode",
        value: function(e) {
            this.callingCode = e, this.onCallingCodeChange(e, this.country)
        }
    }, {
        key: "startInternationalNumber",
        value: function(e, r) {
            this.international = !0, this.initCountryAndCallingCode(e, r)
        }
    }, {
        key: "appendDigits",
        value: function(e) {
            this.digits += e
        }
    }, {
        key: "appendNationalSignificantNumberDigits",
        value: function(e) {
            this.nationalSignificantNumber += e
        }
    }, {
        key: "getNationalDigits",
        value: function() {
            return this.international ? this.digits.slice((this.IDDPrefix ? this.IDDPrefix.length : 0) + (this.callingCode ? this.callingCode.length : 0)) : this.digits
        }
    }, {
        key: "getDigitsWithoutInternationalPrefix",
        value: function() {
            return this.international && this.IDDPrefix ? this.digits.slice(this.IDDPrefix.length) : this.digits
        }
    }]), t
}();

function nu(t, n) {
    var e = typeof Symbol != "undefined" && t[Symbol.iterator] || t["@@iterator"];
    if (e) return (e = e.call(t)).next.bind(e);
    if (Array.isArray(t) || (e = ru(t)) || n) {
        e && (t = e);
        var r = 0;
        return function() {
            return r >= t.length ? {
                done: !0
            } : {
                done: !1,
                value: t[r++]
            }
        }
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function ru(t, n) {
    if (t) {
        if (typeof t == "string") return Er(t, n);
        var e = Object.prototype.toString.call(t).slice(8, -1);
        if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
        if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Er(t, n)
    }
}

function Er(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
    return r
}
var lt = "x",
    Ue = new RegExp(lt);

function ve(t, n) {
    if (n < 1) return "";
    for (var e = ""; n > 1;) n & 1 && (e += t), n >>= 1, t += t;
    return e + t
}

function Sr(t, n) {
    return t[n] === ")" && n++, iu(t.slice(0, n))
}

function iu(t) {
    for (var n = [], e = 0; e < t.length;) t[e] === "(" ? n.push(e) : t[e] === ")" && n.pop(), e++;
    var r = 0,
        i = "";
    n.push(t.length);
    for (var o = 0, a = n; o < a.length; o++) {
        var d = a[o];
        i += t.slice(r, d), r = d + 1
    }
    return i
}

function ou(t, n, e) {
    for (var r = nu(e.split("")), i; !(i = r()).done;) {
        var o = i.value;
        if (t.slice(n + 1).search(Ue) < 0) return;
        n = t.search(Ue), t = t.replace(Ue, o)
    }
    return [t, n]
}

function au(t, n, e) {
    var r = e.metadata,
        i = e.shouldTryNationalPrefixFormattingRule,
        o = e.getSeparatorAfterNationalPrefix,
        a = new RegExp("^(?:".concat(n.pattern(), ")$"));
    if (a.test(t.nationalSignificantNumber)) return uu(t, n, {
        metadata: r,
        shouldTryNationalPrefixFormattingRule: i,
        getSeparatorAfterNationalPrefix: o
    })
}

function du(t, n) {
    return Oe(t, n) === "IS_POSSIBLE"
}

function uu(t, n, e) {
    var r = e.metadata,
        i = e.shouldTryNationalPrefixFormattingRule,
        o = e.getSeparatorAfterNationalPrefix;
    if (t.nationalSignificantNumber, t.international, t.nationalPrefix, t.carrierCode, i(n)) {
        var a = Or(t, n, {
            useNationalPrefixFormattingRule: !0,
            getSeparatorAfterNationalPrefix: o,
            metadata: r
        });
        if (a) return a
    }
    return Or(t, n, {
        useNationalPrefixFormattingRule: !1,
        getSeparatorAfterNationalPrefix: o,
        metadata: r
    })
}

function Or(t, n, e) {
    var r = e.metadata,
        i = e.useNationalPrefixFormattingRule,
        o = e.getSeparatorAfterNationalPrefix,
        a = vi(t.nationalSignificantNumber, n, {
            carrierCode: t.carrierCode,
            useInternationalFormat: t.international,
            withNationalPrefix: i,
            metadata: r
        });
    if (i || (t.nationalPrefix ? a = t.nationalPrefix + o(n) + a : t.complexPrefixBeforeNationalSignificantNumber && (a = t.complexPrefixBeforeNationalSignificantNumber + " " + a)), su(a, t)) return a
}

function su(t, n) {
    return Ce(t) === n.getNationalDigits()
}

function lu(t, n) {
    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
}

function cu(t, n) {
    for (var e = 0; e < n.length; e++) {
        var r = n[e];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
}

function fu(t, n, e) {
    return n && cu(t.prototype, n), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}
var $u = function() {
    function t() {
        lu(this, t)
    }
    return fu(t, [{
        key: "parse",
        value: function(e) {
            if (this.context = [{
                    or: !0,
                    instructions: []
                }], this.parsePattern(e), this.context.length !== 1) throw new Error("Non-finalized contexts left when pattern parse ended");
            var r = this.context[0],
                i = r.branches,
                o = r.instructions;
            if (i) return {
                op: "|",
                args: i.concat([We(o)])
            };
            if (o.length === 0) throw new Error("Pattern is required");
            return o.length === 1 ? o[0] : o
        }
    }, {
        key: "startContext",
        value: function(e) {
            this.context.push(e)
        }
    }, {
        key: "endContext",
        value: function() {
            this.context.pop()
        }
    }, {
        key: "getContext",
        value: function() {
            return this.context[this.context.length - 1]
        }
    }, {
        key: "parsePattern",
        value: function(e) {
            if (!e) throw new Error("Pattern is required");
            var r = e.match(pu);
            if (!r) {
                if (gu.test(e)) throw new Error("Illegal characters found in a pattern: ".concat(e));
                this.getContext().instructions = this.getContext().instructions.concat(e.split(""));
                return
            }
            var i = r[1],
                o = e.slice(0, r.index),
                a = e.slice(r.index + i.length);
            switch (i) {
                case "(?:":
                    o && this.parsePattern(o), this.startContext({
                        or: !0,
                        instructions: [],
                        branches: []
                    });
                    break;
                case ")":
                    if (!this.getContext().or) throw new Error('")" operator must be preceded by "(?:" operator');
                    if (o && this.parsePattern(o), this.getContext().instructions.length === 0) throw new Error('No instructions found after "|" operator in an "or" group');
                    var d = this.getContext(),
                        u = d.branches;
                    u.push(We(this.getContext().instructions)), this.endContext(), this.getContext().instructions.push({
                        op: "|",
                        args: u
                    });
                    break;
                case "|":
                    if (!this.getContext().or) throw new Error('"|" operator can only be used inside "or" groups');
                    if (o && this.parsePattern(o), !this.getContext().branches)
                        if (this.context.length === 1) this.getContext().branches = [];
                        else throw new Error('"branches" not found in an "or" group context');
                    this.getContext().branches.push(We(this.getContext().instructions)), this.getContext().instructions = [];
                    break;
                case "[":
                    o && this.parsePattern(o), this.startContext({
                        oneOfSet: !0
                    });
                    break;
                case "]":
                    if (!this.getContext().oneOfSet) throw new Error('"]" operator must be preceded by "[" operator');
                    this.endContext(), this.getContext().instructions.push({
                        op: "[]",
                        args: hu(o)
                    });
                    break;
                default:
                    throw new Error("Unknown operator: ".concat(i))
            }
            a && this.parsePattern(a)
        }
    }]), t
}();

function hu(t) {
    for (var n = [], e = 0; e < t.length;) {
        if (t[e] === "-") {
            if (e === 0 || e === t.length - 1) throw new Error("Couldn't parse a one-of set pattern: ".concat(t));
            for (var r = t[e - 1].charCodeAt(0) + 1, i = t[e + 1].charCodeAt(0) - 1, o = r; o <= i;) n.push(String.fromCharCode(o)), o++
        } else n.push(t[e]);
        e++
    }
    return n
}
var gu = /[\(\)\[\]\?\:\|]/,
    pu = new RegExp("(\\||\\(\\?\\:|\\)|\\[|\\])");

function We(t) {
    return t.length === 1 ? t[0] : t
}

function Tr(t, n) {
    var e = typeof Symbol != "undefined" && t[Symbol.iterator] || t["@@iterator"];
    if (e) return (e = e.call(t)).next.bind(e);
    if (Array.isArray(t) || (e = mu(t)) || n) {
        e && (t = e);
        var r = 0;
        return function() {
            return r >= t.length ? {
                done: !0
            } : {
                done: !1,
                value: t[r++]
            }
        }
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function mu(t, n) {
    if (t) {
        if (typeof t == "string") return _r(t, n);
        var e = Object.prototype.toString.call(t).slice(8, -1);
        if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
        if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return _r(t, n)
    }
}

function _r(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
    return r
}

function yu(t, n) {
    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
}

function vu(t, n) {
    for (var e = 0; e < n.length; e++) {
        var r = n[e];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
}

function bu(t, n, e) {
    return n && vu(t.prototype, n), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}
var Pu = function() {
    function t(n) {
        yu(this, t), this.matchTree = new $u().parse(n)
    }
    return bu(t, [{
        key: "match",
        value: function(e) {
            var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                i = r.allowOverflow;
            if (!e) throw new Error("String is required");
            var o = on(e.split(""), this.matchTree, !0);
            if (o && o.match && delete o.matchedChars, !(o && o.overflow && !i)) return o
        }
    }]), t
}();

function on(t, n, e) {
    if (typeof n == "string") {
        var r = t.join("");
        return n.indexOf(r) === 0 ? t.length === n.length ? {
            match: !0,
            matchedChars: t
        } : {
            partialMatch: !0
        } : r.indexOf(n) === 0 ? e && t.length > n.length ? {
            overflow: !0
        } : {
            match: !0,
            matchedChars: t.slice(0, n.length)
        } : void 0
    }
    if (Array.isArray(n)) {
        for (var i = t.slice(), o = 0; o < n.length;) {
            var a = n[o],
                d = on(i, a, e && o === n.length - 1);
            if (d) {
                if (d.overflow) return d;
                if (d.match) {
                    if (i = i.slice(d.matchedChars.length), i.length === 0) return o === n.length - 1 ? {
                        match: !0,
                        matchedChars: t
                    } : {
                        partialMatch: !0
                    }
                } else {
                    if (d.partialMatch) return {
                        partialMatch: !0
                    };
                    throw new Error(`Unsupported match result:
`.concat(JSON.stringify(d, null, 2)))
                }
            } else return;
            o++
        }
        return e ? {
            overflow: !0
        } : {
            match: !0,
            matchedChars: t.slice(0, t.length - i.length)
        }
    }
    switch (n.op) {
        case "|":
            for (var u, s = Tr(n.args), f; !(f = s()).done;) {
                var l = f.value,
                    c = on(t, l, e);
                if (c) {
                    if (c.overflow) return c;
                    if (c.match) return {
                        match: !0,
                        matchedChars: c.matchedChars
                    };
                    if (c.partialMatch) u = !0;
                    else throw new Error(`Unsupported match result:
`.concat(JSON.stringify(c, null, 2)))
                }
            }
            return u ? {
                partialMatch: !0
            } : void 0;
        case "[]":
            for (var p = Tr(n.args), $; !($ = p()).done;) {
                var g = $.value;
                if (t[0] === g) return t.length === 1 ? {
                    match: !0,
                    matchedChars: t
                } : e ? {
                    overflow: !0
                } : {
                    match: !0,
                    matchedChars: [g]
                }
            }
            return;
        default:
            throw new Error("Unsupported instruction tree: ".concat(n))
    }
}

function Ir(t, n) {
    var e = typeof Symbol != "undefined" && t[Symbol.iterator] || t["@@iterator"];
    if (e) return (e = e.call(t)).next.bind(e);
    if (Array.isArray(t) || (e = Cu(t)) || n) {
        e && (t = e);
        var r = 0;
        return function() {
            return r >= t.length ? {
                done: !0
            } : {
                done: !1,
                value: t[r++]
            }
        }
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function Cu(t, n) {
    if (t) {
        if (typeof t == "string") return Fr(t, n);
        var e = Object.prototype.toString.call(t).slice(8, -1);
        if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
        if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Fr(t, n)
    }
}

function Fr(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
    return r
}

function Nu(t, n) {
    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
}

function wu(t, n) {
    for (var e = 0; e < n.length; e++) {
        var r = n[e];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
}

function xu(t, n, e) {
    return n && wu(t.prototype, n), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}
var an = "9",
    Au = 15,
    Eu = ve(an, Au),
    Su = /[- ]/,
    Ou = function() {
        return /\[([^\[\]])*\]/g
    },
    Tu = function() {
        return /\d(?=[^,}][^,}])/g
    },
    _u = new RegExp("[" + ft + "]*\\$1[" + ft + "]*(\\$\\d[" + ft + "]*)*$"),
    Rr = 3,
    Iu = function() {
        function t(n) {
            n.state;
            var e = n.metadata;
            Nu(this, t), this.metadata = e, this.resetFormat()
        }
        return xu(t, [{
            key: "resetFormat",
            value: function() {
                this.chosenFormat = void 0, this.template = void 0, this.nationalNumberTemplate = void 0, this.populatedNationalNumberTemplate = void 0, this.populatedNationalNumberTemplatePosition = -1
            }
        }, {
            key: "reset",
            value: function(e, r) {
                this.resetFormat(), e ? (this.isNANP = e.callingCode() === "1", this.matchingFormats = e.formats(), r.nationalSignificantNumber && this.narrowDownMatchingFormats(r)) : (this.isNANP = void 0, this.matchingFormats = [])
            }
        }, {
            key: "format",
            value: function(e, r) {
                var i = this;
                if (du(r.nationalSignificantNumber, this.metadata))
                    for (var o = Ir(this.matchingFormats), a; !(a = o()).done;) {
                        var d = a.value,
                            u = au(r, d, {
                                metadata: this.metadata,
                                shouldTryNationalPrefixFormattingRule: function(f) {
                                    return i.shouldTryNationalPrefixFormattingRule(f, {
                                        international: r.international,
                                        nationalPrefix: r.nationalPrefix
                                    })
                                },
                                getSeparatorAfterNationalPrefix: function(f) {
                                    return i.getSeparatorAfterNationalPrefix(f)
                                }
                            });
                        if (u) return this.resetFormat(), this.chosenFormat = d, this.setNationalNumberTemplate(u.replace(/\d/g, lt), r), this.populatedNationalNumberTemplate = u, this.populatedNationalNumberTemplatePosition = this.template.lastIndexOf(lt), u
                    }
                return this.formatNationalNumberWithNextDigits(e, r)
            }
        }, {
            key: "formatNationalNumberWithNextDigits",
            value: function(e, r) {
                var i = this.chosenFormat,
                    o = this.chooseFormat(r);
                if (o) return o === i ? this.formatNextNationalNumberDigits(e) : this.formatNextNationalNumberDigits(r.getNationalDigits())
            }
        }, {
            key: "narrowDownMatchingFormats",
            value: function(e) {
                var r = this,
                    i = e.nationalSignificantNumber,
                    o = e.nationalPrefix,
                    a = e.international,
                    d = i,
                    u = d.length - Rr;
                u < 0 && (u = 0), this.matchingFormats = this.matchingFormats.filter(function(s) {
                    return r.formatSuits(s, a, o) && r.formatMatches(s, d, u)
                }), this.chosenFormat && this.matchingFormats.indexOf(this.chosenFormat) === -1 && this.resetFormat()
            }
        }, {
            key: "formatSuits",
            value: function(e, r, i) {
                return !(i && !e.usesNationalPrefix() && !e.nationalPrefixIsOptionalWhenFormattingInNationalFormat() || !r && !i && e.nationalPrefixIsMandatoryWhenFormattingInNationalFormat())
            }
        }, {
            key: "formatMatches",
            value: function(e, r, i) {
                var o = e.leadingDigitsPatterns().length;
                if (o === 0) return !0;
                i = Math.min(i, o - 1);
                var a = e.leadingDigitsPatterns()[i];
                if (r.length < Rr) try {
                    return new Pu(a).match(r, {
                        allowOverflow: !0
                    }) !== void 0
                } catch (d) {
                    return console.error(d), !0
                }
                return new RegExp("^(".concat(a, ")")).test(r)
            }
        }, {
            key: "getFormatFormat",
            value: function(e, r) {
                return r ? e.internationalFormat() : e.format()
            }
        }, {
            key: "chooseFormat",
            value: function(e) {
                for (var r = this, i = function() {
                        var s = a.value;
                        return r.chosenFormat === s ? "break" : _u.test(r.getFormatFormat(s, e.international)) ? r.createTemplateForFormat(s, e) ? (r.chosenFormat = s, "break") : (r.matchingFormats = r.matchingFormats.filter(function(f) {
                            return f !== s
                        }), "continue") : "continue"
                    }, o = Ir(this.matchingFormats.slice()), a; !(a = o()).done;) {
                    var d = i();
                    if (d === "break") break
                }
                return this.chosenFormat || this.resetFormat(), this.chosenFormat
            }
        }, {
            key: "createTemplateForFormat",
            value: function(e, r) {
                if (!(e.pattern().indexOf("|") >= 0)) {
                    var i = this.getTemplateForFormat(e, r);
                    if (i) return this.setNationalNumberTemplate(i, r), !0
                }
            }
        }, {
            key: "getSeparatorAfterNationalPrefix",
            value: function(e) {
                return this.isNANP || e && e.nationalPrefixFormattingRule() && Su.test(e.nationalPrefixFormattingRule()) ? " " : ""
            }
        }, {
            key: "getInternationalPrefixBeforeCountryCallingCode",
            value: function(e, r) {
                var i = e.IDDPrefix,
                    o = e.missingPlus;
                return i ? r && r.spacing === !1 ? i : i + " " : o ? "" : "+"
            }
        }, {
            key: "getTemplate",
            value: function(e) {
                if (this.template) {
                    for (var r = -1, i = 0, o = e.international ? this.getInternationalPrefixBeforeCountryCallingCode(e, {
                            spacing: !1
                        }) : ""; i < o.length + e.getDigitsWithoutInternationalPrefix().length;) r = this.template.indexOf(lt, r + 1), i++;
                    return Sr(this.template, r + 1)
                }
            }
        }, {
            key: "setNationalNumberTemplate",
            value: function(e, r) {
                this.nationalNumberTemplate = e, this.populatedNationalNumberTemplate = e, this.populatedNationalNumberTemplatePosition = -1, r.international ? this.template = this.getInternationalPrefixBeforeCountryCallingCode(r).replace(/[\d\+]/g, lt) + ve(lt, r.callingCode.length) + " " + e : this.template = e
            }
        }, {
            key: "getTemplateForFormat",
            value: function(e, r) {
                var i = r.nationalSignificantNumber,
                    o = r.international,
                    a = r.nationalPrefix,
                    d = r.complexPrefixBeforeNationalSignificantNumber,
                    u = e.pattern();
                u = u.replace(Ou(), "\\d").replace(Tu(), "\\d");
                var s = Eu.match(u)[0];
                if (!(i.length > s.length)) {
                    var f = new RegExp("^" + u + "$"),
                        l = i.replace(/\d/g, an);
                    f.test(l) && (s = l);
                    var c = this.getFormatFormat(e, o),
                        p;
                    if (this.shouldTryNationalPrefixFormattingRule(e, {
                            international: o,
                            nationalPrefix: a
                        })) {
                        var $ = c.replace(yi, e.nationalPrefixFormattingRule());
                        if (Ce(e.nationalPrefixFormattingRule()) === (a || "") + Ce("$1") && (c = $, p = !0, a))
                            for (var g = a.length; g > 0;) c = c.replace(/\d/, lt), g--
                    }
                    var h = s.replace(new RegExp(u), c).replace(new RegExp(an, "g"), lt);
                    return p || (d ? h = ve(lt, d.length) + " " + h : a && (h = ve(lt, a.length) + this.getSeparatorAfterNationalPrefix(e) + h)), o && (h = mi(h)), h
                }
            }
        }, {
            key: "formatNextNationalNumberDigits",
            value: function(e) {
                var r = ou(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition, e);
                if (!r) {
                    this.resetFormat();
                    return
                }
                return this.populatedNationalNumberTemplate = r[0], this.populatedNationalNumberTemplatePosition = r[1], Sr(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition + 1)
            }
        }, {
            key: "shouldTryNationalPrefixFormattingRule",
            value: function(e, r) {
                var i = r.international,
                    o = r.nationalPrefix;
                if (e.nationalPrefixFormattingRule()) {
                    var a = e.usesNationalPrefix();
                    if (a && o || !a && !i) return !0
                }
            }
        }]), t
    }();

function Si(t, n) {
    return Lu(t) || Du(t, n) || Ru(t, n) || Fu()
}

function Fu() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function Ru(t, n) {
    if (t) {
        if (typeof t == "string") return Dr(t, n);
        var e = Object.prototype.toString.call(t).slice(8, -1);
        if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
        if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Dr(t, n)
    }
}

function Dr(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
    return r
}

function Du(t, n) {
    var e = t == null ? null : typeof Symbol != "undefined" && t[Symbol.iterator] || t["@@iterator"];
    if (e != null) {
        var r = [],
            i = !0,
            o = !1,
            a, d;
        try {
            for (e = e.call(t); !(i = (a = e.next()).done) && (r.push(a.value), !(n && r.length === n)); i = !0);
        } catch (u) {
            o = !0, d = u
        } finally {
            try {
                !i && e.return != null && e.return()
            } finally {
                if (o) throw d
            }
        }
        return r
    }
}

function Lu(t) {
    if (Array.isArray(t)) return t
}

function Mu(t, n) {
    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
}

function ku(t, n) {
    for (var e = 0; e < n.length; e++) {
        var r = n[e];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
}

function Bu(t, n, e) {
    return n && ku(t.prototype, n), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}
var ju = "[" + ft + et + "]+",
    Gu = new RegExp("^" + ju + "$", "i"),
    Hu = "(?:[" + Te + "][" + ft + et + "]*|[" + ft + et + "]+)",
    Uu = new RegExp("[^" + ft + et + "]+.*$"),
    Wu = /[^\d\[\]]/,
    Vu = function() {
        function t(n) {
            var e = n.defaultCountry,
                r = n.defaultCallingCode,
                i = n.metadata,
                o = n.onNationalSignificantNumberChange;
            Mu(this, t), this.defaultCountry = e, this.defaultCallingCode = r, this.metadata = i, this.onNationalSignificantNumberChange = o
        }
        return Bu(t, [{
            key: "input",
            value: function(e, r) {
                var i = Yu(e),
                    o = Si(i, 2),
                    a = o[0],
                    d = o[1],
                    u = Ce(a),
                    s;
                return d && (r.digits || (r.startInternationalNumber(), u || (s = !0))), u && this.inputDigits(u, r), {
                    digits: u,
                    justLeadingPlus: s
                }
            }
        }, {
            key: "inputDigits",
            value: function(e, r) {
                var i = r.digits,
                    o = i.length < 3 && i.length + e.length >= 3;
                if (r.appendDigits(e), o && this.extractIddPrefix(r), this.isWaitingForCountryCallingCode(r)) {
                    if (!this.extractCountryCallingCode(r)) return
                } else r.appendNationalSignificantNumberDigits(e);
                r.international || this.hasExtractedNationalSignificantNumber || this.extractNationalSignificantNumber(r.getNationalDigits(), function(a) {
                    return r.update(a)
                })
            }
        }, {
            key: "isWaitingForCountryCallingCode",
            value: function(e) {
                var r = e.international,
                    i = e.callingCode;
                return r && !i
            }
        }, {
            key: "extractCountryCallingCode",
            value: function(e) {
                var r = mn("+" + e.getDigitsWithoutInternationalPrefix(), this.defaultCountry, this.defaultCallingCode, this.metadata.metadata),
                    i = r.countryCallingCode,
                    o = r.number;
                if (i) return e.setCallingCode(i), e.update({
                    nationalSignificantNumber: o
                }), !0
            }
        }, {
            key: "reset",
            value: function(e) {
                if (e) {
                    this.hasSelectedNumberingPlan = !0;
                    var r = e._nationalPrefixForParsing();
                    this.couldPossiblyExtractAnotherNationalSignificantNumber = r && Wu.test(r)
                } else this.hasSelectedNumberingPlan = void 0, this.couldPossiblyExtractAnotherNationalSignificantNumber = void 0
            }
        }, {
            key: "extractNationalSignificantNumber",
            value: function(e, r) {
                if (this.hasSelectedNumberingPlan) {
                    var i = Qe(e, this.metadata),
                        o = i.nationalPrefix,
                        a = i.nationalNumber,
                        d = i.carrierCode;
                    if (a !== e) return this.onExtractedNationalNumber(o, d, a, e, r), !0
                }
            }
        }, {
            key: "extractAnotherNationalSignificantNumber",
            value: function(e, r, i) {
                if (!this.hasExtractedNationalSignificantNumber) return this.extractNationalSignificantNumber(e, i);
                if (this.couldPossiblyExtractAnotherNationalSignificantNumber) {
                    var o = Qe(e, this.metadata),
                        a = o.nationalPrefix,
                        d = o.nationalNumber,
                        u = o.carrierCode;
                    if (d !== r) return this.onExtractedNationalNumber(a, u, d, e, i), !0
                }
            }
        }, {
            key: "onExtractedNationalNumber",
            value: function(e, r, i, o, a) {
                var d, u, s = o.lastIndexOf(i);
                if (s >= 0 && s === o.length - i.length) {
                    u = !0;
                    var f = o.slice(0, s);
                    f !== e && (d = f)
                }
                a({
                    nationalPrefix: e,
                    carrierCode: r,
                    nationalSignificantNumber: i,
                    nationalSignificantNumberMatchesInput: u,
                    complexPrefixBeforeNationalSignificantNumber: d
                }), this.hasExtractedNationalSignificantNumber = !0, this.onNationalSignificantNumberChange()
            }
        }, {
            key: "reExtractNationalSignificantNumber",
            value: function(e) {
                if (this.extractAnotherNationalSignificantNumber(e.getNationalDigits(), e.nationalSignificantNumber, function(r) {
                        return e.update(r)
                    })) return !0;
                if (this.extractIddPrefix(e)) return this.extractCallingCodeAndNationalSignificantNumber(e), !0;
                if (this.fixMissingPlus(e)) return this.extractCallingCodeAndNationalSignificantNumber(e), !0
            }
        }, {
            key: "extractIddPrefix",
            value: function(e) {
                var r = e.international,
                    i = e.IDDPrefix,
                    o = e.digits;
                if (e.nationalSignificantNumber, !(r || i)) {
                    var a = gi(o, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata);
                    if (a !== void 0 && a !== o) return e.update({
                        IDDPrefix: o.slice(0, o.length - a.length)
                    }), this.startInternationalNumber(e, {
                        country: void 0,
                        callingCode: void 0
                    }), !0
                }
            }
        }, {
            key: "fixMissingPlus",
            value: function(e) {
                if (!e.international) {
                    var r = pi(e.digits, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata),
                        i = r.countryCallingCode;
                    if (r.number, i) return e.update({
                        missingPlus: !0
                    }), this.startInternationalNumber(e, {
                        country: e.country,
                        callingCode: i
                    }), !0
                }
            }
        }, {
            key: "startInternationalNumber",
            value: function(e, r) {
                var i = r.country,
                    o = r.callingCode;
                e.startInternationalNumber(i, o), e.nationalSignificantNumber && (e.resetNationalSignificantNumber(), this.onNationalSignificantNumberChange(), this.hasExtractedNationalSignificantNumber = void 0)
            }
        }, {
            key: "extractCallingCodeAndNationalSignificantNumber",
            value: function(e) {
                this.extractCountryCallingCode(e) && this.extractNationalSignificantNumber(e.getNationalDigits(), function(r) {
                    return e.update(r)
                })
            }
        }]), t
    }();

function Ku(t) {
    var n = t.search(Hu);
    if (!(n < 0)) {
        t = t.slice(n);
        var e;
        return t[0] === "+" && (e = !0, t = t.slice(1)), t = t.replace(Uu, ""), e && (t = "+" + t), t
    }
}

function Xu(t) {
    var n = Ku(t) || "";
    return n[0] === "+" ? [n.slice(1), !0] : [n]
}

function Yu(t) {
    var n = Xu(t),
        e = Si(n, 2),
        r = e[0],
        i = e[1];
    return Gu.test(r) || (r = ""), [r, i]
}

function zu(t, n) {
    return qu(t) || Qu(t, n) || Ju(t, n) || Zu()
}

function Zu() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function Ju(t, n) {
    if (t) {
        if (typeof t == "string") return Lr(t, n);
        var e = Object.prototype.toString.call(t).slice(8, -1);
        if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
        if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Lr(t, n)
    }
}

function Lr(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
    return r
}

function Qu(t, n) {
    var e = t == null ? null : typeof Symbol != "undefined" && t[Symbol.iterator] || t["@@iterator"];
    if (e != null) {
        var r = [],
            i = !0,
            o = !1,
            a, d;
        try {
            for (e = e.call(t); !(i = (a = e.next()).done) && (r.push(a.value), !(n && r.length === n)); i = !0);
        } catch (u) {
            o = !0, d = u
        } finally {
            try {
                !i && e.return != null && e.return()
            } finally {
                if (o) throw d
            }
        }
        return r
    }
}

function qu(t) {
    if (Array.isArray(t)) return t
}

function ts(t, n) {
    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
}

function es(t, n) {
    for (var e = 0; e < n.length; e++) {
        var r = n[e];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
}

function ns(t, n, e) {
    return n && es(t.prototype, n), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}
var rs = function() {
    function t(n, e) {
        ts(this, t), this.metadata = new X(e);
        var r = this.getCountryAndCallingCode(n),
            i = zu(r, 2),
            o = i[0],
            a = i[1];
        this.defaultCountry = o, this.defaultCallingCode = a, this.reset()
    }
    return ns(t, [{
        key: "getCountryAndCallingCode",
        value: function(e) {
            var r, i;
            return e && (kt(e) ? (r = e.defaultCountry, i = e.defaultCallingCode) : r = e), r && !this.metadata.hasCountry(r) && (r = void 0), [r, i]
        }
    }, {
        key: "input",
        value: function(e) {
            var r = this.parser.input(e, this.state),
                i = r.digits,
                o = r.justLeadingPlus;
            if (o) this.formattedOutput = "+";
            else if (i) {
                this.determineTheCountryIfNeeded(), this.state.nationalSignificantNumber && this.formatter.narrowDownMatchingFormats(this.state);
                var a;
                if (this.metadata.hasSelectedNumberingPlan() && (a = this.formatter.format(i, this.state)), a === void 0 && this.parser.reExtractNationalSignificantNumber(this.state)) {
                    this.determineTheCountryIfNeeded();
                    var d = this.state.getNationalDigits();
                    d && (a = this.formatter.format(d, this.state))
                }
                this.formattedOutput = a ? this.getFullNumber(a) : this.getNonFormattedNumber()
            }
            return this.formattedOutput
        }
    }, {
        key: "reset",
        value: function() {
            var e = this;
            return this.state = new eu({
                onCountryChange: function(i) {
                    e.country = i
                },
                onCallingCodeChange: function(i, o) {
                    e.metadata.selectNumberingPlan(o, i), e.formatter.reset(e.metadata.numberingPlan, e.state), e.parser.reset(e.metadata.numberingPlan)
                }
            }), this.formatter = new Iu({
                state: this.state,
                metadata: this.metadata
            }), this.parser = new Vu({
                defaultCountry: this.defaultCountry,
                defaultCallingCode: this.defaultCallingCode,
                metadata: this.metadata,
                state: this.state,
                onNationalSignificantNumberChange: function() {
                    e.determineTheCountryIfNeeded(), e.formatter.reset(e.metadata.numberingPlan, e.state)
                }
            }), this.state.reset({
                country: this.defaultCountry,
                callingCode: this.defaultCallingCode
            }), this.formattedOutput = "", this
        }
    }, {
        key: "isInternational",
        value: function() {
            return this.state.international
        }
    }, {
        key: "getCallingCode",
        value: function() {
            if (this.isInternational()) return this.state.callingCode
        }
    }, {
        key: "getCountryCallingCode",
        value: function() {
            return this.getCallingCode()
        }
    }, {
        key: "getCountry",
        value: function() {
            var e = this.state.digits;
            if (e) return this._getCountry()
        }
    }, {
        key: "_getCountry",
        value: function() {
            var e = this.state.country;
            return e
        }
    }, {
        key: "determineTheCountryIfNeeded",
        value: function() {
            (!this.state.country || this.isCountryCallingCodeAmbiguous()) && this.determineTheCountry()
        }
    }, {
        key: "getFullNumber",
        value: function(e) {
            var r = this;
            if (this.isInternational()) {
                var i = function(d) {
                        return r.formatter.getInternationalPrefixBeforeCountryCallingCode(r.state, {
                            spacing: !!d
                        }) + d
                    },
                    o = this.state.callingCode;
                return i(o ? e ? "".concat(o, " ").concat(e) : o : "".concat(this.state.getDigitsWithoutInternationalPrefix()))
            }
            return e
        }
    }, {
        key: "getNonFormattedNationalNumberWithPrefix",
        value: function() {
            var e = this.state,
                r = e.nationalSignificantNumber,
                i = e.complexPrefixBeforeNationalSignificantNumber,
                o = e.nationalPrefix,
                a = r,
                d = i || o;
            return d && (a = d + a), a
        }
    }, {
        key: "getNonFormattedNumber",
        value: function() {
            var e = this.state.nationalSignificantNumberMatchesInput;
            return this.getFullNumber(e ? this.getNonFormattedNationalNumberWithPrefix() : this.state.getNationalDigits())
        }
    }, {
        key: "getNonFormattedTemplate",
        value: function() {
            var e = this.getNonFormattedNumber();
            if (e) return e.replace(/[\+\d]/g, lt)
        }
    }, {
        key: "isCountryCallingCodeAmbiguous",
        value: function() {
            var e = this.state.callingCode,
                r = this.metadata.getCountryCodesForCallingCode(e);
            return r && r.length > 1
        }
    }, {
        key: "determineTheCountry",
        value: function() {
            this.state.setCountry(Ai(this.isInternational() ? this.state.callingCode : this.defaultCallingCode, {
                nationalNumber: this.state.nationalSignificantNumber,
                defaultCountry: this.defaultCountry,
                metadata: this.metadata
            }))
        }
    }, {
        key: "getNumberValue",
        value: function() {
            var e = this.state,
                r = e.digits,
                i = e.callingCode,
                o = e.country,
                a = e.nationalSignificantNumber;
            if (r) {
                if (this.isInternational()) return i ? "+" + i + a : "+" + r;
                if (o || i) {
                    var d = o ? this.metadata.countryCallingCode() : i;
                    return "+" + d + a
                }
            }
        }
    }, {
        key: "getNumber",
        value: function() {
            var e = this.state,
                r = e.nationalSignificantNumber,
                i = e.carrierCode,
                o = e.callingCode,
                a = this._getCountry();
            if (r && !(!a && !o)) {
                if (a && a === this.defaultCountry) {
                    var d = new X(this.metadata.metadata);
                    d.selectNumberingPlan(a);
                    var u = d.numberingPlan.callingCode(),
                        s = this.metadata.getCountryCodesForCallingCode(u);
                    if (s.length > 1) {
                        var f = xi(r, {
                            countries: s,
                            defaultCountry: this.defaultCountry,
                            metadata: this.metadata.metadata
                        });
                        f && (a = f)
                    }
                }
                var l = new Pi(a || o, r, this.metadata.metadata);
                return i && (l.carrierCode = i), l
            }
        }
    }, {
        key: "isPossible",
        value: function() {
            var e = this.getNumber();
            return e ? e.isPossible() : !1
        }
    }, {
        key: "isValid",
        value: function() {
            var e = this.getNumber();
            return e ? e.isValid() : !1
        }
    }, {
        key: "getNationalNumber",
        value: function() {
            return this.state.nationalSignificantNumber
        }
    }, {
        key: "getChars",
        value: function() {
            return (this.state.international ? "+" : "") + this.state.digits
        }
    }, {
        key: "getTemplate",
        value: function() {
            return this.formatter.getTemplate(this.state) || this.getNonFormattedTemplate() || ""
        }
    }]), t
}();

function ol(t) {
    return new X(t).getCountries()
}

function al(t, n, e) {
    return e || (e = n, n = void 0), new rs(n, e).input(t)
}

function dl(t) {
    return Mr(t[0]) + Mr(t[1])
}

function Mr(t) {
    return String.fromCodePoint(127397 + t.toUpperCase().charCodeAt(0))
}

function ul(t, n, {
    checkForDefaultPrevented: e = !0
} = {}) {
    return function(i) {
        if (t == null || t(i), e === !1 || !i.defaultPrevented) return n == null ? void 0 : n(i)
    }
}
const is = ["top", "right", "bottom", "left"],
    _t = Math.min,
    it = Math.max,
    Ne = Math.round,
    $e = Math.floor,
    vt = t => ({
        x: t,
        y: t
    }),
    os = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    as = {
        start: "end",
        end: "start"
    };

function dn(t, n, e) {
    return it(t, _t(n, e))
}

function At(t, n) {
    return typeof t == "function" ? t(n) : t
}

function Et(t) {
    return t.split("-")[0]
}

function zt(t) {
    return t.split("-")[1]
}

function bn(t) {
    return t === "x" ? "y" : "x"
}

function Pn(t) {
    return t === "y" ? "height" : "width"
}

function It(t) {
    return ["top", "bottom"].includes(Et(t)) ? "y" : "x"
}

function Cn(t) {
    return bn(It(t))
}

function ds(t, n, e) {
    e === void 0 && (e = !1);
    const r = zt(t),
        i = Cn(t),
        o = Pn(i);
    let a = i === "x" ? r === (e ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return n.reference[o] > n.floating[o] && (a = we(a)), [a, we(a)]
}

function us(t) {
    const n = we(t);
    return [un(t), n, un(n)]
}

function un(t) {
    return t.replace(/start|end/g, n => as[n])
}

function ss(t, n, e) {
    const r = ["left", "right"],
        i = ["right", "left"],
        o = ["top", "bottom"],
        a = ["bottom", "top"];
    switch (t) {
        case "top":
        case "bottom":
            return e ? n ? i : r : n ? r : i;
        case "left":
        case "right":
            return n ? o : a;
        default:
            return []
    }
}

function ls(t, n, e, r) {
    const i = zt(t);
    let o = ss(Et(t), e === "start", r);
    return i && (o = o.map(a => a + "-" + i), n && (o = o.concat(o.map(un)))), o
}

function we(t) {
    return t.replace(/left|right|bottom|top/g, n => os[n])
}

function cs(t) {
    return z({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }, t)
}

function Oi(t) {
    return typeof t != "number" ? cs(t) : {
        top: t,
        right: t,
        bottom: t,
        left: t
    }
}

function xe(t) {
    const {
        x: n,
        y: e,
        width: r,
        height: i
    } = t;
    return {
        width: r,
        height: i,
        top: e,
        left: n,
        right: n + r,
        bottom: e + i,
        x: n,
        y: e
    }
}

function kr(t, n, e) {
    let {
        reference: r,
        floating: i
    } = t;
    const o = It(n),
        a = Cn(n),
        d = Pn(a),
        u = Et(n),
        s = o === "y",
        f = r.x + r.width / 2 - i.width / 2,
        l = r.y + r.height / 2 - i.height / 2,
        c = r[d] / 2 - i[d] / 2;
    let p;
    switch (u) {
        case "top":
            p = {
                x: f,
                y: r.y - i.height
            };
            break;
        case "bottom":
            p = {
                x: f,
                y: r.y + r.height
            };
            break;
        case "right":
            p = {
                x: r.x + r.width,
                y: l
            };
            break;
        case "left":
            p = {
                x: r.x - i.width,
                y: l
            };
            break;
        default:
            p = {
                x: r.x,
                y: r.y
            }
    }
    switch (zt(n)) {
        case "start":
            p[a] -= c * (e && s ? -1 : 1);
            break;
        case "end":
            p[a] += c * (e && s ? -1 : 1);
            break
    }
    return p
}
const fs = (t, n, e) => st(void 0, null, function*() {
    const {
        placement: r = "bottom",
        strategy: i = "absolute",
        middleware: o = [],
        platform: a
    } = e, d = o.filter(Boolean), u = yield a.isRTL == null ? void 0 : a.isRTL(n);
    let s = yield a.getElementRects({
        reference: t,
        floating: n,
        strategy: i
    }), {
        x: f,
        y: l
    } = kr(s, r, u), c = r, p = {}, $ = 0;
    for (let g = 0; g < d.length; g++) {
        const {
            name: h,
            fn: m
        } = d[g], {
            x: y,
            y: v,
            data: P,
            reset: C
        } = yield m({
            x: f,
            y: l,
            initialPlacement: r,
            placement: c,
            strategy: i,
            middlewareData: p,
            rects: s,
            platform: a,
            elements: {
                reference: t,
                floating: n
            }
        });
        f = y != null ? y : f, l = v != null ? v : l, p = ut(z({}, p), {
            [h]: z(z({}, p[h]), P)
        }), C && $ <= 50 && ($++, typeof C == "object" && (C.placement && (c = C.placement), C.rects && (s = C.rects === !0 ? yield a.getElementRects({
            reference: t,
            floating: n,
            strategy: i
        }): C.rects), {
            x: f,
            y: l
        } = kr(s, c, u)), g = -1)
    }
    return {
        x: f,
        y: l,
        placement: c,
        strategy: i,
        middlewareData: p
    }
});

function ie(t, n) {
    return st(this, null, function*() {
        var e;
        n === void 0 && (n = {});
        const {
            x: r,
            y: i,
            platform: o,
            rects: a,
            elements: d,
            strategy: u
        } = t, {
            boundary: s = "clippingAncestors",
            rootBoundary: f = "viewport",
            elementContext: l = "floating",
            altBoundary: c = !1,
            padding: p = 0
        } = At(n, t), $ = Oi(p), h = d[c ? l === "floating" ? "reference" : "floating" : l], m = xe(yield o.getClippingRect({
            element: (e = yield o.isElement == null ? void 0 : o.isElement(h)) == null || e ? h : h.contextElement || (yield o.getDocumentElement == null ? void 0 : o.getDocumentElement(d.floating)),
            boundary: s,
            rootBoundary: f,
            strategy: u
        })), y = l === "floating" ? {
            x: r,
            y: i,
            width: a.floating.width,
            height: a.floating.height
        } : a.reference, v = yield o.getOffsetParent == null ? void 0 : o.getOffsetParent(d.floating), P = (yield o.isElement == null ? void 0 : o.isElement(v)) ? (yield o.getScale == null ? void 0 : o.getScale(v)) || {
            x: 1,
            y: 1
        } : {
            x: 1,
            y: 1
        }, C = xe(o.convertOffsetParentRelativeRectToViewportRelativeRect ? yield o.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: d,
            rect: y,
            offsetParent: v,
            strategy: u
        }): y);
        return {
            top: (m.top - C.top + $.top) / P.y,
            bottom: (C.bottom - m.bottom + $.bottom) / P.y,
            left: (m.left - C.left + $.left) / P.x,
            right: (C.right - m.right + $.right) / P.x
        }
    })
}
const $s = t => ({
        name: "arrow",
        options: t,
        fn(e) {
            return st(this, null, function*() {
                const {
                    x: r,
                    y: i,
                    placement: o,
                    rects: a,
                    platform: d,
                    elements: u,
                    middlewareData: s
                } = e, {
                    element: f,
                    padding: l = 0
                } = At(t, e) || {};
                if (f == null) return {};
                const c = Oi(l),
                    p = {
                        x: r,
                        y: i
                    },
                    $ = Cn(o),
                    g = Pn($),
                    h = yield d.getDimensions(f), m = $ === "y", y = m ? "top" : "left", v = m ? "bottom" : "right", P = m ? "clientHeight" : "clientWidth", C = a.reference[g] + a.reference[$] - p[$] - a.floating[g], O = p[$] - a.reference[$], x = yield d.getOffsetParent == null ? void 0 : d.getOffsetParent(f);
                let S = x ? x[P] : 0;
                (!S || !(yield d.isElement == null ? void 0 : d.isElement(x))) && (S = u.floating[P] || a.floating[g]);
                const A = C / 2 - O / 2,
                    T = S / 2 - h[g] / 2 - 1,
                    _ = _t(c[y], T),
                    L = _t(c[v], T),
                    M = _,
                    F = S - h[g] - L,
                    R = S / 2 - h[g] / 2 + A,
                    k = dn(M, R, F),
                    B = !s.arrow && zt(o) != null && R !== k && a.reference[g] / 2 - (R < M ? _ : L) - h[g] / 2 < 0,
                    b = B ? R < M ? R - M : R - F : 0;
                return {
                    [$]: p[$] + b,
                    data: z({
                        [$]: k,
                        centerOffset: R - k - b
                    }, B && {
                        alignmentOffset: b
                    }),
                    reset: B
                }
            })
        }
    }),
    hs = function(t) {
        return t === void 0 && (t = {}), {
            name: "flip",
            options: t,
            fn(e) {
                return st(this, null, function*() {
                    var r, i;
                    const {
                        placement: o,
                        middlewareData: a,
                        rects: d,
                        initialPlacement: u,
                        platform: s,
                        elements: f
                    } = e, R = At(t, e), {
                        mainAxis: l = !0,
                        crossAxis: c = !0,
                        fallbackPlacements: p,
                        fallbackStrategy: $ = "bestFit",
                        fallbackAxisSideDirection: g = "none",
                        flipAlignment: h = !0
                    } = R, m = Qt(R, ["mainAxis", "crossAxis", "fallbackPlacements", "fallbackStrategy", "fallbackAxisSideDirection", "flipAlignment"]);
                    if ((r = a.arrow) != null && r.alignmentOffset) return {};
                    const y = Et(o),
                        v = It(u),
                        P = Et(u) === u,
                        C = yield s.isRTL == null ? void 0 : s.isRTL(f.floating), O = p || (P || !h ? [we(u)] : us(u)), x = g !== "none";
                    !p && x && O.push(...ls(u, h, g, C));
                    const S = [u, ...O],
                        A = yield ie(e, m), T = [];
                    let _ = ((i = a.flip) == null ? void 0 : i.overflows) || [];
                    if (l && T.push(A[y]), c) {
                        const k = ds(o, d, C);
                        T.push(A[k[0]], A[k[1]])
                    }
                    if (_ = [..._, {
                            placement: o,
                            overflows: T
                        }], !T.every(k => k <= 0)) {
                        var L, M;
                        const k = (((L = a.flip) == null ? void 0 : L.index) || 0) + 1,
                            B = S[k];
                        if (B) return {
                            data: {
                                index: k,
                                overflows: _
                            },
                            reset: {
                                placement: B
                            }
                        };
                        let b = (M = _.filter(N => N.overflows[0] <= 0).sort((N, w) => N.overflows[1] - w.overflows[1])[0]) == null ? void 0 : M.placement;
                        if (!b) switch ($) {
                            case "bestFit":
                                {
                                    var F;
                                    const N = (F = _.filter(w => {
                                        if (x) {
                                            const I = It(w.placement);
                                            return I === v || I === "y"
                                        }
                                        return !0
                                    }).map(w => [w.placement, w.overflows.filter(I => I > 0).reduce((I, D) => I + D, 0)]).sort((w, I) => w[1] - I[1])[0]) == null ? void 0 : F[0];N && (b = N);
                                    break
                                }
                            case "initialPlacement":
                                b = u;
                                break
                        }
                        if (o !== b) return {
                            reset: {
                                placement: b
                            }
                        }
                    }
                    return {}
                })
            }
        }
    };

function Br(t, n) {
    return {
        top: t.top - n.height,
        right: t.right - n.width,
        bottom: t.bottom - n.height,
        left: t.left - n.width
    }
}

function jr(t) {
    return is.some(n => t[n] >= 0)
}
const gs = function(t) {
    return t === void 0 && (t = {}), {
        name: "hide",
        options: t,
        fn(e) {
            return st(this, null, function*() {
                const {
                    rects: r
                } = e, a = At(t, e), {
                    strategy: i = "referenceHidden"
                } = a, o = Qt(a, ["strategy"]);
                switch (i) {
                    case "referenceHidden":
                        {
                            const d = yield ie(e, ut(z({}, o), {
                                elementContext: "reference"
                            })), u = Br(d, r.reference);
                            return {
                                data: {
                                    referenceHiddenOffsets: u,
                                    referenceHidden: jr(u)
                                }
                            }
                        }
                    case "escaped":
                        {
                            const d = yield ie(e, ut(z({}, o), {
                                altBoundary: !0
                            })), u = Br(d, r.floating);
                            return {
                                data: {
                                    escapedOffsets: u,
                                    escaped: jr(u)
                                }
                            }
                        }
                    default:
                        return {}
                }
            })
        }
    }
};

function ps(t, n) {
    return st(this, null, function*() {
        const {
            placement: e,
            platform: r,
            elements: i
        } = t, o = yield r.isRTL == null ? void 0 : r.isRTL(i.floating), a = Et(e), d = zt(e), u = It(e) === "y", s = ["left", "top"].includes(a) ? -1 : 1, f = o && u ? -1 : 1, l = At(n, t);
        let {
            mainAxis: c,
            crossAxis: p,
            alignmentAxis: $
        } = typeof l == "number" ? {
            mainAxis: l,
            crossAxis: 0,
            alignmentAxis: null
        } : {
            mainAxis: l.mainAxis || 0,
            crossAxis: l.crossAxis || 0,
            alignmentAxis: l.alignmentAxis
        };
        return d && typeof $ == "number" && (p = d === "end" ? $ * -1 : $), u ? {
            x: p * f,
            y: c * s
        } : {
            x: c * s,
            y: p * f
        }
    })
}
const ms = function(t) {
        return t === void 0 && (t = 0), {
            name: "offset",
            options: t,
            fn(e) {
                return st(this, null, function*() {
                    var r, i;
                    const {
                        x: o,
                        y: a,
                        placement: d,
                        middlewareData: u
                    } = e, s = yield ps(e, t);
                    return d === ((r = u.offset) == null ? void 0 : r.placement) && (i = u.arrow) != null && i.alignmentOffset ? {} : {
                        x: o + s.x,
                        y: a + s.y,
                        data: ut(z({}, s), {
                            placement: d
                        })
                    }
                })
            }
        }
    },
    ys = function(t) {
        return t === void 0 && (t = {}), {
            name: "shift",
            options: t,
            fn(e) {
                return st(this, null, function*() {
                    const {
                        x: r,
                        y: i,
                        placement: o
                    } = e, m = At(t, e), {
                        mainAxis: a = !0,
                        crossAxis: d = !1,
                        limiter: u = {
                            fn: y => {
                                let {
                                    x: v,
                                    y: P
                                } = y;
                                return {
                                    x: v,
                                    y: P
                                }
                            }
                        }
                    } = m, s = Qt(m, ["mainAxis", "crossAxis", "limiter"]), f = {
                        x: r,
                        y: i
                    }, l = yield ie(e, s), c = It(Et(o)), p = bn(c);
                    let $ = f[p],
                        g = f[c];
                    if (a) {
                        const y = p === "y" ? "top" : "left",
                            v = p === "y" ? "bottom" : "right",
                            P = $ + l[y],
                            C = $ - l[v];
                        $ = dn(P, $, C)
                    }
                    if (d) {
                        const y = c === "y" ? "top" : "left",
                            v = c === "y" ? "bottom" : "right",
                            P = g + l[y],
                            C = g - l[v];
                        g = dn(P, g, C)
                    }
                    const h = u.fn(ut(z({}, e), {
                        [p]: $,
                        [c]: g
                    }));
                    return ut(z({}, h), {
                        data: {
                            x: h.x - r,
                            y: h.y - i,
                            enabled: {
                                [p]: a,
                                [c]: d
                            }
                        }
                    })
                })
            }
        }
    },
    vs = function(t) {
        return t === void 0 && (t = {}), {
            options: t,
            fn(n) {
                const {
                    x: e,
                    y: r,
                    placement: i,
                    rects: o,
                    middlewareData: a
                } = n, {
                    offset: d = 0,
                    mainAxis: u = !0,
                    crossAxis: s = !0
                } = At(t, n), f = {
                    x: e,
                    y: r
                }, l = It(i), c = bn(l);
                let p = f[c],
                    $ = f[l];
                const g = At(d, n),
                    h = typeof g == "number" ? {
                        mainAxis: g,
                        crossAxis: 0
                    } : z({
                        mainAxis: 0,
                        crossAxis: 0
                    }, g);
                if (u) {
                    const v = c === "y" ? "height" : "width",
                        P = o.reference[c] - o.floating[v] + h.mainAxis,
                        C = o.reference[c] + o.reference[v] - h.mainAxis;
                    p < P ? p = P : p > C && (p = C)
                }
                if (s) {
                    var m, y;
                    const v = c === "y" ? "width" : "height",
                        P = ["top", "left"].includes(Et(i)),
                        C = o.reference[l] - o.floating[v] + (P && ((m = a.offset) == null ? void 0 : m[l]) || 0) + (P ? 0 : h.crossAxis),
                        O = o.reference[l] + o.reference[v] + (P ? 0 : ((y = a.offset) == null ? void 0 : y[l]) || 0) - (P ? h.crossAxis : 0);
                    $ < C ? $ = C : $ > O && ($ = O)
                }
                return {
                    [c]: p,
                    [l]: $
                }
            }
        }
    },
    bs = function(t) {
        return t === void 0 && (t = {}), {
            name: "size",
            options: t,
            fn(e) {
                return st(this, null, function*() {
                    var r, i;
                    const {
                        placement: o,
                        rects: a,
                        platform: d,
                        elements: u
                    } = e, _ = At(t, e), {
                        apply: s = () => {}
                    } = _, f = Qt(_, ["apply"]), l = yield ie(e, f), c = Et(o), p = zt(o), $ = It(o) === "y", {
                        width: g,
                        height: h
                    } = a.floating;
                    let m, y;
                    c === "top" || c === "bottom" ? (m = c, y = p === ((yield d.isRTL == null ? void 0 : d.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (y = c, m = p === "end" ? "top" : "bottom");
                    const v = h - l.top - l.bottom,
                        P = g - l.left - l.right,
                        C = _t(h - l[m], v),
                        O = _t(g - l[y], P),
                        x = !e.middlewareData.shift;
                    let S = C,
                        A = O;
                    if ((r = e.middlewareData.shift) != null && r.enabled.x && (A = P), (i = e.middlewareData.shift) != null && i.enabled.y && (S = v), x && !p) {
                        const L = it(l.left, 0),
                            M = it(l.right, 0),
                            F = it(l.top, 0),
                            R = it(l.bottom, 0);
                        $ ? A = g - 2 * (L !== 0 || M !== 0 ? L + M : it(l.left, l.right)) : S = h - 2 * (F !== 0 || R !== 0 ? F + R : it(l.top, l.bottom))
                    }
                    yield s(ut(z({}, e), {
                        availableWidth: A,
                        availableHeight: S
                    }));
                    const T = yield d.getDimensions(u.floating);
                    return g !== T.width || h !== T.height ? {
                        reset: {
                            rects: !0
                        }
                    } : {}
                })
            }
        }
    };

function _e() {
    return typeof window != "undefined"
}

function Zt(t) {
    return Ti(t) ? (t.nodeName || "").toLowerCase() : "#document"
}

function ot(t) {
    var n;
    return (t == null || (n = t.ownerDocument) == null ? void 0 : n.defaultView) || window
}

function Pt(t) {
    var n;
    return (n = (Ti(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : n.documentElement
}

function Ti(t) {
    return _e() ? t instanceof Node || t instanceof ot(t).Node : !1
}

function ht(t) {
    return _e() ? t instanceof Element || t instanceof ot(t).Element : !1
}

function bt(t) {
    return _e() ? t instanceof HTMLElement || t instanceof ot(t).HTMLElement : !1
}

function Gr(t) {
    return !_e() || typeof ShadowRoot == "undefined" ? !1 : t instanceof ShadowRoot || t instanceof ot(t).ShadowRoot
}

function se(t) {
    const {
        overflow: n,
        overflowX: e,
        overflowY: r,
        display: i
    } = gt(t);
    return /auto|scroll|overlay|hidden|clip/.test(n + r + e) && !["inline", "contents"].includes(i)
}

function Ps(t) {
    return ["table", "td", "th"].includes(Zt(t))
}

function Ie(t) {
    return [":popover-open", ":modal"].some(n => {
        try {
            return t.matches(n)
        } catch (e) {
            return !1
        }
    })
}

function Nn(t) {
    const n = wn(),
        e = ht(t) ? gt(t) : t;
    return ["transform", "translate", "scale", "rotate", "perspective"].some(r => e[r] ? e[r] !== "none" : !1) || (e.containerType ? e.containerType !== "normal" : !1) || !n && (e.backdropFilter ? e.backdropFilter !== "none" : !1) || !n && (e.filter ? e.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(r => (e.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (e.contain || "").includes(r))
}

function Cs(t) {
    let n = Ft(t);
    for (; bt(n) && !Yt(n);) {
        if (Nn(n)) return n;
        if (Ie(n)) return null;
        n = Ft(n)
    }
    return null
}

function wn() {
    return typeof CSS == "undefined" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}

function Yt(t) {
    return ["html", "body", "#document"].includes(Zt(t))
}

function gt(t) {
    return ot(t).getComputedStyle(t)
}

function Fe(t) {
    return ht(t) ? {
        scrollLeft: t.scrollLeft,
        scrollTop: t.scrollTop
    } : {
        scrollLeft: t.scrollX,
        scrollTop: t.scrollY
    }
}

function Ft(t) {
    if (Zt(t) === "html") return t;
    const n = t.assignedSlot || t.parentNode || Gr(t) && t.host || Pt(t);
    return Gr(n) ? n.host : n
}

function _i(t) {
    const n = Ft(t);
    return Yt(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : bt(n) && se(n) ? n : _i(n)
}

function oe(t, n, e) {
    var r;
    n === void 0 && (n = []), e === void 0 && (e = !0);
    const i = _i(t),
        o = i === ((r = t.ownerDocument) == null ? void 0 : r.body),
        a = ot(i);
    if (o) {
        const d = sn(a);
        return n.concat(a, a.visualViewport || [], se(i) ? i : [], d && e ? oe(d) : [])
    }
    return n.concat(i, oe(i, [], e))
}

function sn(t) {
    return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
}

function Ii(t) {
    const n = gt(t);
    let e = parseFloat(n.width) || 0,
        r = parseFloat(n.height) || 0;
    const i = bt(t),
        o = i ? t.offsetWidth : e,
        a = i ? t.offsetHeight : r,
        d = Ne(e) !== o || Ne(r) !== a;
    return d && (e = o, r = a), {
        width: e,
        height: r,
        $: d
    }
}

function xn(t) {
    return ht(t) ? t : t.contextElement
}

function Kt(t) {
    const n = xn(t);
    if (!bt(n)) return vt(1);
    const e = n.getBoundingClientRect(),
        {
            width: r,
            height: i,
            $: o
        } = Ii(n);
    let a = (o ? Ne(e.width) : e.width) / r,
        d = (o ? Ne(e.height) : e.height) / i;
    return (!a || !Number.isFinite(a)) && (a = 1), (!d || !Number.isFinite(d)) && (d = 1), {
        x: a,
        y: d
    }
}
const Ns = vt(0);

function Fi(t) {
    const n = ot(t);
    return !wn() || !n.visualViewport ? Ns : {
        x: n.visualViewport.offsetLeft,
        y: n.visualViewport.offsetTop
    }
}

function ws(t, n, e) {
    return n === void 0 && (n = !1), !e || n && e !== ot(t) ? !1 : n
}

function Bt(t, n, e, r) {
    n === void 0 && (n = !1), e === void 0 && (e = !1);
    const i = t.getBoundingClientRect(),
        o = xn(t);
    let a = vt(1);
    n && (r ? ht(r) && (a = Kt(r)) : a = Kt(t));
    const d = ws(o, e, r) ? Fi(o) : vt(0);
    let u = (i.left + d.x) / a.x,
        s = (i.top + d.y) / a.y,
        f = i.width / a.x,
        l = i.height / a.y;
    if (o) {
        const c = ot(o),
            p = r && ht(r) ? ot(r) : r;
        let $ = c,
            g = sn($);
        for (; g && r && p !== $;) {
            const h = Kt(g),
                m = g.getBoundingClientRect(),
                y = gt(g),
                v = m.left + (g.clientLeft + parseFloat(y.paddingLeft)) * h.x,
                P = m.top + (g.clientTop + parseFloat(y.paddingTop)) * h.y;
            u *= h.x, s *= h.y, f *= h.x, l *= h.y, u += v, s += P, $ = ot(g), g = sn($)
        }
    }
    return xe({
        width: f,
        height: l,
        x: u,
        y: s
    })
}

function An(t, n) {
    const e = Fe(t).scrollLeft;
    return n ? n.left + e : Bt(Pt(t)).left + e
}

function Ri(t, n, e) {
    e === void 0 && (e = !1);
    const r = t.getBoundingClientRect(),
        i = r.left + n.scrollLeft - (e ? 0 : An(t, r)),
        o = r.top + n.scrollTop;
    return {
        x: i,
        y: o
    }
}

function xs(t) {
    let {
        elements: n,
        rect: e,
        offsetParent: r,
        strategy: i
    } = t;
    const o = i === "fixed",
        a = Pt(r),
        d = n ? Ie(n.floating) : !1;
    if (r === a || d && o) return e;
    let u = {
            scrollLeft: 0,
            scrollTop: 0
        },
        s = vt(1);
    const f = vt(0),
        l = bt(r);
    if ((l || !l && !o) && ((Zt(r) !== "body" || se(a)) && (u = Fe(r)), bt(r))) {
        const p = Bt(r);
        s = Kt(r), f.x = p.x + r.clientLeft, f.y = p.y + r.clientTop
    }
    const c = a && !l && !o ? Ri(a, u, !0) : vt(0);
    return {
        width: e.width * s.x,
        height: e.height * s.y,
        x: e.x * s.x - u.scrollLeft * s.x + f.x + c.x,
        y: e.y * s.y - u.scrollTop * s.y + f.y + c.y
    }
}

function As(t) {
    return Array.from(t.getClientRects())
}

function Es(t) {
    const n = Pt(t),
        e = Fe(t),
        r = t.ownerDocument.body,
        i = it(n.scrollWidth, n.clientWidth, r.scrollWidth, r.clientWidth),
        o = it(n.scrollHeight, n.clientHeight, r.scrollHeight, r.clientHeight);
    let a = -e.scrollLeft + An(t);
    const d = -e.scrollTop;
    return gt(r).direction === "rtl" && (a += it(n.clientWidth, r.clientWidth) - i), {
        width: i,
        height: o,
        x: a,
        y: d
    }
}

function Ss(t, n) {
    const e = ot(t),
        r = Pt(t),
        i = e.visualViewport;
    let o = r.clientWidth,
        a = r.clientHeight,
        d = 0,
        u = 0;
    if (i) {
        o = i.width, a = i.height;
        const s = wn();
        (!s || s && n === "fixed") && (d = i.offsetLeft, u = i.offsetTop)
    }
    return {
        width: o,
        height: a,
        x: d,
        y: u
    }
}

function Os(t, n) {
    const e = Bt(t, !0, n === "fixed"),
        r = e.top + t.clientTop,
        i = e.left + t.clientLeft,
        o = bt(t) ? Kt(t) : vt(1),
        a = t.clientWidth * o.x,
        d = t.clientHeight * o.y,
        u = i * o.x,
        s = r * o.y;
    return {
        width: a,
        height: d,
        x: u,
        y: s
    }
}

function Hr(t, n, e) {
    let r;
    if (n === "viewport") r = Ss(t, e);
    else if (n === "document") r = Es(Pt(t));
    else if (ht(n)) r = Os(n, e);
    else {
        const i = Fi(t);
        r = {
            x: n.x - i.x,
            y: n.y - i.y,
            width: n.width,
            height: n.height
        }
    }
    return xe(r)
}

function Di(t, n) {
    const e = Ft(t);
    return e === n || !ht(e) || Yt(e) ? !1 : gt(e).position === "fixed" || Di(e, n)
}

function Ts(t, n) {
    const e = n.get(t);
    if (e) return e;
    let r = oe(t, [], !1).filter(d => ht(d) && Zt(d) !== "body"),
        i = null;
    const o = gt(t).position === "fixed";
    let a = o ? Ft(t) : t;
    for (; ht(a) && !Yt(a);) {
        const d = gt(a),
            u = Nn(a);
        !u && d.position === "fixed" && (i = null), (o ? !u && !i : !u && d.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || se(a) && !u && Di(t, a)) ? r = r.filter(f => f !== a) : i = d, a = Ft(a)
    }
    return n.set(t, r), r
}

function _s(t) {
    let {
        element: n,
        boundary: e,
        rootBoundary: r,
        strategy: i
    } = t;
    const a = [...e === "clippingAncestors" ? Ie(n) ? [] : Ts(n, this._c) : [].concat(e), r],
        d = a[0],
        u = a.reduce((s, f) => {
            const l = Hr(n, f, i);
            return s.top = it(l.top, s.top), s.right = _t(l.right, s.right), s.bottom = _t(l.bottom, s.bottom), s.left = it(l.left, s.left), s
        }, Hr(n, d, i));
    return {
        width: u.right - u.left,
        height: u.bottom - u.top,
        x: u.left,
        y: u.top
    }
}

function Is(t) {
    const {
        width: n,
        height: e
    } = Ii(t);
    return {
        width: n,
        height: e
    }
}

function Fs(t, n, e) {
    const r = bt(n),
        i = Pt(n),
        o = e === "fixed",
        a = Bt(t, !0, o, n);
    let d = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const u = vt(0);
    if (r || !r && !o)
        if ((Zt(n) !== "body" || se(i)) && (d = Fe(n)), r) {
            const c = Bt(n, !0, o, n);
            u.x = c.x + n.clientLeft, u.y = c.y + n.clientTop
        } else i && (u.x = An(i));
    const s = i && !r && !o ? Ri(i, d) : vt(0),
        f = a.left + d.scrollLeft - u.x - s.x,
        l = a.top + d.scrollTop - u.y - s.y;
    return {
        x: f,
        y: l,
        width: a.width,
        height: a.height
    }
}

function Ve(t) {
    return gt(t).position === "static"
}

function Ur(t, n) {
    if (!bt(t) || gt(t).position === "fixed") return null;
    if (n) return n(t);
    let e = t.offsetParent;
    return Pt(t) === e && (e = e.ownerDocument.body), e
}

function Li(t, n) {
    const e = ot(t);
    if (Ie(t)) return e;
    if (!bt(t)) {
        let i = Ft(t);
        for (; i && !Yt(i);) {
            if (ht(i) && !Ve(i)) return i;
            i = Ft(i)
        }
        return e
    }
    let r = Ur(t, n);
    for (; r && Ps(r) && Ve(r);) r = Ur(r, n);
    return r && Yt(r) && Ve(r) && !Nn(r) ? e : r || Cs(t) || e
}
const Rs = function(t) {
    return st(this, null, function*() {
        const n = this.getOffsetParent || Li,
            e = this.getDimensions,
            r = yield e(t.floating);
        return {
            reference: Fs(t.reference, yield n(t.floating), t.strategy),
            floating: {
                x: 0,
                y: 0,
                width: r.width,
                height: r.height
            }
        }
    })
};

function Ds(t) {
    return gt(t).direction === "rtl"
}
const Ls = {
    convertOffsetParentRelativeRectToViewportRelativeRect: xs,
    getDocumentElement: Pt,
    getClippingRect: _s,
    getOffsetParent: Li,
    getElementRects: Rs,
    getClientRects: As,
    getDimensions: Is,
    getScale: Kt,
    isElement: ht,
    isRTL: Ds
};

function Mi(t, n) {
    return t.x === n.x && t.y === n.y && t.width === n.width && t.height === n.height
}

function Ms(t, n) {
    let e = null,
        r;
    const i = Pt(t);

    function o() {
        var d;
        clearTimeout(r), (d = e) == null || d.disconnect(), e = null
    }

    function a(d, u) {
        d === void 0 && (d = !1), u === void 0 && (u = 1), o();
        const s = t.getBoundingClientRect(),
            {
                left: f,
                top: l,
                width: c,
                height: p
            } = s;
        if (d || n(), !c || !p) return;
        const $ = $e(l),
            g = $e(i.clientWidth - (f + c)),
            h = $e(i.clientHeight - (l + p)),
            m = $e(f),
            v = {
                rootMargin: -$ + "px " + -g + "px " + -h + "px " + -m + "px",
                threshold: it(0, _t(1, u)) || 1
            };
        let P = !0;

        function C(O) {
            const x = O[0].intersectionRatio;
            if (x !== u) {
                if (!P) return a();
                x ? a(!1, x) : r = setTimeout(() => {
                    a(!1, 1e-7)
                }, 1e3)
            }
            x === 1 && !Mi(s, t.getBoundingClientRect()) && a(), P = !1
        }
        try {
            e = new IntersectionObserver(C, ut(z({}, v), {
                root: i.ownerDocument
            }))
        } catch (O) {
            e = new IntersectionObserver(C, v)
        }
        e.observe(t)
    }
    return a(!0), o
}

function sl(t, n, e, r) {
    r === void 0 && (r = {});
    const {
        ancestorScroll: i = !0,
        ancestorResize: o = !0,
        elementResize: a = typeof ResizeObserver == "function",
        layoutShift: d = typeof IntersectionObserver == "function",
        animationFrame: u = !1
    } = r, s = xn(t), f = i || o ? [...s ? oe(s) : [], ...oe(n)] : [];
    f.forEach(m => {
        i && m.addEventListener("scroll", e, {
            passive: !0
        }), o && m.addEventListener("resize", e)
    });
    const l = s && d ? Ms(s, e) : null;
    let c = -1,
        p = null;
    a && (p = new ResizeObserver(m => {
        let [y] = m;
        y && y.target === s && p && (p.unobserve(n), cancelAnimationFrame(c), c = requestAnimationFrame(() => {
            var v;
            (v = p) == null || v.observe(n)
        })), e()
    }), s && !u && p.observe(s), p.observe(n));
    let $, g = u ? Bt(t) : null;
    u && h();

    function h() {
        const m = Bt(t);
        g && !Mi(g, m) && e(), g = m, $ = requestAnimationFrame(h)
    }
    return e(), () => {
        var m;
        f.forEach(y => {
            i && y.removeEventListener("scroll", e), o && y.removeEventListener("resize", e)
        }), l == null || l(), (m = p) == null || m.disconnect(), p = null, u && cancelAnimationFrame($)
    }
}
const ll = ms,
    cl = ys,
    fl = hs,
    $l = bs,
    hl = gs,
    gl = $s,
    pl = vs,
    ml = (t, n, e) => {
        const r = new Map,
            i = z({
                platform: Ls
            }, e),
            o = ut(z({}, i.platform), {
                _c: r
            });
        return fs(t, n, ut(z({}, i), {
            platform: o
        }))
    };
var ks = function(t) {
        if (typeof document == "undefined") return null;
        var n = Array.isArray(t) ? t[0] : t;
        return n.ownerDocument.body
    },
    Ut = new WeakMap,
    he = new WeakMap,
    ge = {},
    Ke = 0,
    ki = function(t) {
        return t && (t.host || ki(t.parentNode))
    },
    Bs = function(t, n) {
        return n.map(function(e) {
            if (t.contains(e)) return e;
            var r = ki(e);
            return r && t.contains(r) ? r : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null)
        }).filter(function(e) {
            return !!e
        })
    },
    js = function(t, n, e, r) {
        var i = Bs(n, Array.isArray(t) ? t : [t]);
        ge[e] || (ge[e] = new WeakMap);
        var o = ge[e],
            a = [],
            d = new Set,
            u = new Set(i),
            s = function(l) {
                !l || d.has(l) || (d.add(l), s(l.parentNode))
            };
        i.forEach(s);
        var f = function(l) {
            !l || u.has(l) || Array.prototype.forEach.call(l.children, function(c) {
                if (d.has(c)) f(c);
                else try {
                    var p = c.getAttribute(r),
                        $ = p !== null && p !== "false",
                        g = (Ut.get(c) || 0) + 1,
                        h = (o.get(c) || 0) + 1;
                    Ut.set(c, g), o.set(c, h), a.push(c), g === 1 && $ && he.set(c, !0), h === 1 && c.setAttribute(e, "true"), $ || c.setAttribute(r, "true")
                } catch (m) {
                    console.error("aria-hidden: cannot operate on ", c, m)
                }
            })
        };
        return f(n), d.clear(), Ke++,
            function() {
                a.forEach(function(l) {
                    var c = Ut.get(l) - 1,
                        p = o.get(l) - 1;
                    Ut.set(l, c), o.set(l, p), c || (he.has(l) || l.removeAttribute(r), he.delete(l)), p || l.removeAttribute(e)
                }), Ke--, Ke || (Ut = new WeakMap, Ut = new WeakMap, he = new WeakMap, ge = {})
            }
    },
    yl = function(t, n, e) {
        e === void 0 && (e = "data-aria-hidden");
        var r = Array.from(Array.isArray(t) ? t : [t]),
            i = ks(t);
        return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live]"))), js(r, i, e, "aria-hidden")) : function() {
            return null
        }
    },
    Wr = function() {
        return Wr = Object.assign || function(n) {
            for (var e, r = 1, i = arguments.length; r < i; r++) {
                e = arguments[r];
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o])
            }
            return n
        }, Wr.apply(this, arguments)
    };

function vl(t, n) {
    var e = {};
    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++) n.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (e[r[i]] = t[r[i]]);
    return e
}

function bl(t, n, e) {
    if (e || arguments.length === 2)
        for (var r = 0, i = n.length, o; r < i; r++)(o || !(r in n)) && (o || (o = Array.prototype.slice.call(n, 0, r)), o[r] = n[r]);
    return t.concat(o || Array.prototype.slice.call(n))
}
var Pl = function() {
        if (typeof __webpack_nonce__ != "undefined") return __webpack_nonce__
    },
    Gs = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
    },
    Bi = {
        MODE_NUMBER: 1,
        MODE_ALPHA_NUM: 2,
        MODE_8BIT_BYTE: 4,
        MODE_KANJI: 8
    },
    Hs = Bi;

function ji(t) {
    this.mode = Hs.MODE_8BIT_BYTE, this.data = t
}
ji.prototype = {
    getLength: function(t) {
        return this.data.length
    },
    write: function(t) {
        for (var n = 0; n < this.data.length; n++) t.put(this.data.charCodeAt(n), 8)
    }
};
var Us = ji,
    pe = Gs;

function mt(t, n) {
    this.totalCount = t, this.dataCount = n
}
mt.RS_BLOCK_TABLE = [
    [1, 26, 19],
    [1, 26, 16],
    [1, 26, 13],
    [1, 26, 9],
    [1, 44, 34],
    [1, 44, 28],
    [1, 44, 22],
    [1, 44, 16],
    [1, 70, 55],
    [1, 70, 44],
    [2, 35, 17],
    [2, 35, 13],
    [1, 100, 80],
    [2, 50, 32],
    [2, 50, 24],
    [4, 25, 9],
    [1, 134, 108],
    [2, 67, 43],
    [2, 33, 15, 2, 34, 16],
    [2, 33, 11, 2, 34, 12],
    [2, 86, 68],
    [4, 43, 27],
    [4, 43, 19],
    [4, 43, 15],
    [2, 98, 78],
    [4, 49, 31],
    [2, 32, 14, 4, 33, 15],
    [4, 39, 13, 1, 40, 14],
    [2, 121, 97],
    [2, 60, 38, 2, 61, 39],
    [4, 40, 18, 2, 41, 19],
    [4, 40, 14, 2, 41, 15],
    [2, 146, 116],
    [3, 58, 36, 2, 59, 37],
    [4, 36, 16, 4, 37, 17],
    [4, 36, 12, 4, 37, 13],
    [2, 86, 68, 2, 87, 69],
    [4, 69, 43, 1, 70, 44],
    [6, 43, 19, 2, 44, 20],
    [6, 43, 15, 2, 44, 16],
    [4, 101, 81],
    [1, 80, 50, 4, 81, 51],
    [4, 50, 22, 4, 51, 23],
    [3, 36, 12, 8, 37, 13],
    [2, 116, 92, 2, 117, 93],
    [6, 58, 36, 2, 59, 37],
    [4, 46, 20, 6, 47, 21],
    [7, 42, 14, 4, 43, 15],
    [4, 133, 107],
    [8, 59, 37, 1, 60, 38],
    [8, 44, 20, 4, 45, 21],
    [12, 33, 11, 4, 34, 12],
    [3, 145, 115, 1, 146, 116],
    [4, 64, 40, 5, 65, 41],
    [11, 36, 16, 5, 37, 17],
    [11, 36, 12, 5, 37, 13],
    [5, 109, 87, 1, 110, 88],
    [5, 65, 41, 5, 66, 42],
    [5, 54, 24, 7, 55, 25],
    [11, 36, 12],
    [5, 122, 98, 1, 123, 99],
    [7, 73, 45, 3, 74, 46],
    [15, 43, 19, 2, 44, 20],
    [3, 45, 15, 13, 46, 16],
    [1, 135, 107, 5, 136, 108],
    [10, 74, 46, 1, 75, 47],
    [1, 50, 22, 15, 51, 23],
    [2, 42, 14, 17, 43, 15],
    [5, 150, 120, 1, 151, 121],
    [9, 69, 43, 4, 70, 44],
    [17, 50, 22, 1, 51, 23],
    [2, 42, 14, 19, 43, 15],
    [3, 141, 113, 4, 142, 114],
    [3, 70, 44, 11, 71, 45],
    [17, 47, 21, 4, 48, 22],
    [9, 39, 13, 16, 40, 14],
    [3, 135, 107, 5, 136, 108],
    [3, 67, 41, 13, 68, 42],
    [15, 54, 24, 5, 55, 25],
    [15, 43, 15, 10, 44, 16],
    [4, 144, 116, 4, 145, 117],
    [17, 68, 42],
    [17, 50, 22, 6, 51, 23],
    [19, 46, 16, 6, 47, 17],
    [2, 139, 111, 7, 140, 112],
    [17, 74, 46],
    [7, 54, 24, 16, 55, 25],
    [34, 37, 13],
    [4, 151, 121, 5, 152, 122],
    [4, 75, 47, 14, 76, 48],
    [11, 54, 24, 14, 55, 25],
    [16, 45, 15, 14, 46, 16],
    [6, 147, 117, 4, 148, 118],
    [6, 73, 45, 14, 74, 46],
    [11, 54, 24, 16, 55, 25],
    [30, 46, 16, 2, 47, 17],
    [8, 132, 106, 4, 133, 107],
    [8, 75, 47, 13, 76, 48],
    [7, 54, 24, 22, 55, 25],
    [22, 45, 15, 13, 46, 16],
    [10, 142, 114, 2, 143, 115],
    [19, 74, 46, 4, 75, 47],
    [28, 50, 22, 6, 51, 23],
    [33, 46, 16, 4, 47, 17],
    [8, 152, 122, 4, 153, 123],
    [22, 73, 45, 3, 74, 46],
    [8, 53, 23, 26, 54, 24],
    [12, 45, 15, 28, 46, 16],
    [3, 147, 117, 10, 148, 118],
    [3, 73, 45, 23, 74, 46],
    [4, 54, 24, 31, 55, 25],
    [11, 45, 15, 31, 46, 16],
    [7, 146, 116, 7, 147, 117],
    [21, 73, 45, 7, 74, 46],
    [1, 53, 23, 37, 54, 24],
    [19, 45, 15, 26, 46, 16],
    [5, 145, 115, 10, 146, 116],
    [19, 75, 47, 10, 76, 48],
    [15, 54, 24, 25, 55, 25],
    [23, 45, 15, 25, 46, 16],
    [13, 145, 115, 3, 146, 116],
    [2, 74, 46, 29, 75, 47],
    [42, 54, 24, 1, 55, 25],
    [23, 45, 15, 28, 46, 16],
    [17, 145, 115],
    [10, 74, 46, 23, 75, 47],
    [10, 54, 24, 35, 55, 25],
    [19, 45, 15, 35, 46, 16],
    [17, 145, 115, 1, 146, 116],
    [14, 74, 46, 21, 75, 47],
    [29, 54, 24, 19, 55, 25],
    [11, 45, 15, 46, 46, 16],
    [13, 145, 115, 6, 146, 116],
    [14, 74, 46, 23, 75, 47],
    [44, 54, 24, 7, 55, 25],
    [59, 46, 16, 1, 47, 17],
    [12, 151, 121, 7, 152, 122],
    [12, 75, 47, 26, 76, 48],
    [39, 54, 24, 14, 55, 25],
    [22, 45, 15, 41, 46, 16],
    [6, 151, 121, 14, 152, 122],
    [6, 75, 47, 34, 76, 48],
    [46, 54, 24, 10, 55, 25],
    [2, 45, 15, 64, 46, 16],
    [17, 152, 122, 4, 153, 123],
    [29, 74, 46, 14, 75, 47],
    [49, 54, 24, 10, 55, 25],
    [24, 45, 15, 46, 46, 16],
    [4, 152, 122, 18, 153, 123],
    [13, 74, 46, 32, 75, 47],
    [48, 54, 24, 14, 55, 25],
    [42, 45, 15, 32, 46, 16],
    [20, 147, 117, 4, 148, 118],
    [40, 75, 47, 7, 76, 48],
    [43, 54, 24, 22, 55, 25],
    [10, 45, 15, 67, 46, 16],
    [19, 148, 118, 6, 149, 119],
    [18, 75, 47, 31, 76, 48],
    [34, 54, 24, 34, 55, 25],
    [20, 45, 15, 61, 46, 16]
];
mt.getRSBlocks = function(t, n) {
    var e = mt.getRsBlockTable(t, n);
    if (e == null) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + n);
    for (var r = e.length / 3, i = new Array, o = 0; o < r; o++)
        for (var a = e[o * 3 + 0], d = e[o * 3 + 1], u = e[o * 3 + 2], s = 0; s < a; s++) i.push(new mt(d, u));
    return i
};
mt.getRsBlockTable = function(t, n) {
    switch (n) {
        case pe.L:
            return mt.RS_BLOCK_TABLE[(t - 1) * 4 + 0];
        case pe.M:
            return mt.RS_BLOCK_TABLE[(t - 1) * 4 + 1];
        case pe.Q:
            return mt.RS_BLOCK_TABLE[(t - 1) * 4 + 2];
        case pe.H:
            return mt.RS_BLOCK_TABLE[(t - 1) * 4 + 3];
        default:
            return
    }
};
var Ws = mt;

function Gi() {
    this.buffer = new Array, this.length = 0
}
Gi.prototype = {
    get: function(t) {
        var n = Math.floor(t / 8);
        return (this.buffer[n] >>> 7 - t % 8 & 1) == 1
    },
    put: function(t, n) {
        for (var e = 0; e < n; e++) this.putBit((t >>> n - e - 1 & 1) == 1)
    },
    getLengthInBits: function() {
        return this.length
    },
    putBit: function(t) {
        var n = Math.floor(this.length / 8);
        this.buffer.length <= n && this.buffer.push(0), t && (this.buffer[n] |= 128 >>> this.length % 8), this.length++
    }
};
var Vs = Gi,
    ct = {
        glog: function(t) {
            if (t < 1) throw new Error("glog(" + t + ")");
            return ct.LOG_TABLE[t]
        },
        gexp: function(t) {
            for (; t < 0;) t += 255;
            for (; t >= 256;) t -= 255;
            return ct.EXP_TABLE[t]
        },
        EXP_TABLE: new Array(256),
        LOG_TABLE: new Array(256)
    };
for (var J = 0; J < 8; J++) ct.EXP_TABLE[J] = 1 << J;
for (var J = 8; J < 256; J++) ct.EXP_TABLE[J] = ct.EXP_TABLE[J - 4] ^ ct.EXP_TABLE[J - 5] ^ ct.EXP_TABLE[J - 6] ^ ct.EXP_TABLE[J - 8];
for (var J = 0; J < 255; J++) ct.LOG_TABLE[ct.EXP_TABLE[J]] = J;
var Hi = ct,
    Mt = Hi;

function be(t, n) {
    if (t.length == null) throw new Error(t.length + "/" + n);
    for (var e = 0; e < t.length && t[e] == 0;) e++;
    this.num = new Array(t.length - e + n);
    for (var r = 0; r < t.length - e; r++) this.num[r] = t[r + e]
}
be.prototype = {
    get: function(t) {
        return this.num[t]
    },
    getLength: function() {
        return this.num.length
    },
    multiply: function(t) {
        for (var n = new Array(this.getLength() + t.getLength() - 1), e = 0; e < this.getLength(); e++)
            for (var r = 0; r < t.getLength(); r++) n[e + r] ^= Mt.gexp(Mt.glog(this.get(e)) + Mt.glog(t.get(r)));
        return new be(n, 0)
    },
    mod: function(t) {
        if (this.getLength() - t.getLength() < 0) return this;
        for (var n = Mt.glog(this.get(0)) - Mt.glog(t.get(0)), e = new Array(this.getLength()), r = 0; r < this.getLength(); r++) e[r] = this.get(r);
        for (var r = 0; r < t.getLength(); r++) e[r] ^= Mt.gexp(Mt.glog(t.get(r)) + n);
        return new be(e, 0).mod(t)
    }
};
var Ui = be,
    dt = Bi,
    Vr = Ui,
    Ks = Hi,
    Ot = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    },
    Z = {
        PATTERN_POSITION_TABLE: [
            [],
            [6, 18],
            [6, 22],
            [6, 26],
            [6, 30],
            [6, 34],
            [6, 22, 38],
            [6, 24, 42],
            [6, 26, 46],
            [6, 28, 50],
            [6, 30, 54],
            [6, 32, 58],
            [6, 34, 62],
            [6, 26, 46, 66],
            [6, 26, 48, 70],
            [6, 26, 50, 74],
            [6, 30, 54, 78],
            [6, 30, 56, 82],
            [6, 30, 58, 86],
            [6, 34, 62, 90],
            [6, 28, 50, 72, 94],
            [6, 26, 50, 74, 98],
            [6, 30, 54, 78, 102],
            [6, 28, 54, 80, 106],
            [6, 32, 58, 84, 110],
            [6, 30, 58, 86, 114],
            [6, 34, 62, 90, 118],
            [6, 26, 50, 74, 98, 122],
            [6, 30, 54, 78, 102, 126],
            [6, 26, 52, 78, 104, 130],
            [6, 30, 56, 82, 108, 134],
            [6, 34, 60, 86, 112, 138],
            [6, 30, 58, 86, 114, 142],
            [6, 34, 62, 90, 118, 146],
            [6, 30, 54, 78, 102, 126, 150],
            [6, 24, 50, 76, 102, 128, 154],
            [6, 28, 54, 80, 106, 132, 158],
            [6, 32, 58, 84, 110, 136, 162],
            [6, 26, 54, 82, 110, 138, 166],
            [6, 30, 58, 86, 114, 142, 170]
        ],
        G15: 1335,
        G18: 7973,
        G15_MASK: 21522,
        getBCHTypeInfo: function(t) {
            for (var n = t << 10; Z.getBCHDigit(n) - Z.getBCHDigit(Z.G15) >= 0;) n ^= Z.G15 << Z.getBCHDigit(n) - Z.getBCHDigit(Z.G15);
            return (t << 10 | n) ^ Z.G15_MASK
        },
        getBCHTypeNumber: function(t) {
            for (var n = t << 12; Z.getBCHDigit(n) - Z.getBCHDigit(Z.G18) >= 0;) n ^= Z.G18 << Z.getBCHDigit(n) - Z.getBCHDigit(Z.G18);
            return t << 12 | n
        },
        getBCHDigit: function(t) {
            for (var n = 0; t != 0;) n++, t >>>= 1;
            return n
        },
        getPatternPosition: function(t) {
            return Z.PATTERN_POSITION_TABLE[t - 1]
        },
        getMask: function(t, n, e) {
            switch (t) {
                case Ot.PATTERN000:
                    return (n + e) % 2 == 0;
                case Ot.PATTERN001:
                    return n % 2 == 0;
                case Ot.PATTERN010:
                    return e % 3 == 0;
                case Ot.PATTERN011:
                    return (n + e) % 3 == 0;
                case Ot.PATTERN100:
                    return (Math.floor(n / 2) + Math.floor(e / 3)) % 2 == 0;
                case Ot.PATTERN101:
                    return n * e % 2 + n * e % 3 == 0;
                case Ot.PATTERN110:
                    return (n * e % 2 + n * e % 3) % 2 == 0;
                case Ot.PATTERN111:
                    return (n * e % 3 + (n + e) % 2) % 2 == 0;
                default:
                    throw new Error("bad maskPattern:" + t)
            }
        },
        getErrorCorrectPolynomial: function(t) {
            for (var n = new Vr([1], 0), e = 0; e < t; e++) n = n.multiply(new Vr([1, Ks.gexp(e)], 0));
            return n
        },
        getLengthInBits: function(t, n) {
            if (1 <= n && n < 10) switch (t) {
                case dt.MODE_NUMBER:
                    return 10;
                case dt.MODE_ALPHA_NUM:
                    return 9;
                case dt.MODE_8BIT_BYTE:
                    return 8;
                case dt.MODE_KANJI:
                    return 8;
                default:
                    throw new Error("mode:" + t)
            } else if (n < 27) switch (t) {
                case dt.MODE_NUMBER:
                    return 12;
                case dt.MODE_ALPHA_NUM:
                    return 11;
                case dt.MODE_8BIT_BYTE:
                    return 16;
                case dt.MODE_KANJI:
                    return 10;
                default:
                    throw new Error("mode:" + t)
            } else if (n < 41) switch (t) {
                case dt.MODE_NUMBER:
                    return 14;
                case dt.MODE_ALPHA_NUM:
                    return 13;
                case dt.MODE_8BIT_BYTE:
                    return 16;
                case dt.MODE_KANJI:
                    return 12;
                default:
                    throw new Error("mode:" + t)
            } else throw new Error("type:" + n)
        },
        getLostPoint: function(t) {
            for (var n = t.getModuleCount(), e = 0, r = 0; r < n; r++)
                for (var i = 0; i < n; i++) {
                    for (var o = 0, a = t.isDark(r, i), d = -1; d <= 1; d++)
                        if (!(r + d < 0 || n <= r + d))
                            for (var u = -1; u <= 1; u++) i + u < 0 || n <= i + u || d == 0 && u == 0 || a == t.isDark(r + d, i + u) && o++;
                    o > 5 && (e += 3 + o - 5)
                }
            for (var r = 0; r < n - 1; r++)
                for (var i = 0; i < n - 1; i++) {
                    var s = 0;
                    t.isDark(r, i) && s++, t.isDark(r + 1, i) && s++, t.isDark(r, i + 1) && s++, t.isDark(r + 1, i + 1) && s++, (s == 0 || s == 4) && (e += 3)
                }
            for (var r = 0; r < n; r++)
                for (var i = 0; i < n - 6; i++) t.isDark(r, i) && !t.isDark(r, i + 1) && t.isDark(r, i + 2) && t.isDark(r, i + 3) && t.isDark(r, i + 4) && !t.isDark(r, i + 5) && t.isDark(r, i + 6) && (e += 40);
            for (var i = 0; i < n; i++)
                for (var r = 0; r < n - 6; r++) t.isDark(r, i) && !t.isDark(r + 1, i) && t.isDark(r + 2, i) && t.isDark(r + 3, i) && t.isDark(r + 4, i) && !t.isDark(r + 5, i) && t.isDark(r + 6, i) && (e += 40);
            for (var f = 0, i = 0; i < n; i++)
                for (var r = 0; r < n; r++) t.isDark(r, i) && f++;
            var l = Math.abs(100 * f / n / n - 50) / 5;
            return e += l * 10, e
        }
    },
    Xs = Z,
    Ys = Us,
    Wi = Ws,
    Vi = Vs,
    Rt = Xs,
    zs = Ui;

function yt(t, n) {
    this.typeNumber = t, this.errorCorrectLevel = n, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
}
var at = yt.prototype;
at.addData = function(t) {
    var n = new Ys(t);
    this.dataList.push(n), this.dataCache = null
};
at.isDark = function(t, n) {
    if (t < 0 || this.moduleCount <= t || n < 0 || this.moduleCount <= n) throw new Error(t + "," + n);
    return this.modules[t][n]
};
at.getModuleCount = function() {
    return this.moduleCount
};
at.make = function() {
    if (this.typeNumber < 1) {
        var t = 1;
        for (t = 1; t < 40; t++) {
            for (var n = Wi.getRSBlocks(t, this.errorCorrectLevel), e = new Vi, r = 0, i = 0; i < n.length; i++) r += n[i].dataCount;
            for (var i = 0; i < this.dataList.length; i++) {
                var o = this.dataList[i];
                e.put(o.mode, 4), e.put(o.getLength(), Rt.getLengthInBits(o.mode, t)), o.write(e)
            }
            if (e.getLengthInBits() <= r * 8) break
        }
        this.typeNumber = t
    }
    this.makeImpl(!1, this.getBestMaskPattern())
};
at.makeImpl = function(t, n) {
    this.moduleCount = this.typeNumber * 4 + 17, this.modules = new Array(this.moduleCount);
    for (var e = 0; e < this.moduleCount; e++) {
        this.modules[e] = new Array(this.moduleCount);
        for (var r = 0; r < this.moduleCount; r++) this.modules[e][r] = null
    }
    this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, n), this.typeNumber >= 7 && this.setupTypeNumber(t), this.dataCache == null && (this.dataCache = yt.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, n)
};
at.setupPositionProbePattern = function(t, n) {
    for (var e = -1; e <= 7; e++)
        if (!(t + e <= -1 || this.moduleCount <= t + e))
            for (var r = -1; r <= 7; r++) n + r <= -1 || this.moduleCount <= n + r || (0 <= e && e <= 6 && (r == 0 || r == 6) || 0 <= r && r <= 6 && (e == 0 || e == 6) || 2 <= e && e <= 4 && 2 <= r && r <= 4 ? this.modules[t + e][n + r] = !0 : this.modules[t + e][n + r] = !1)
};
at.getBestMaskPattern = function() {
    for (var t = 0, n = 0, e = 0; e < 8; e++) {
        this.makeImpl(!0, e);
        var r = Rt.getLostPoint(this);
        (e == 0 || t > r) && (t = r, n = e)
    }
    return n
};
at.createMovieClip = function(t, n, e) {
    var r = t.createEmptyMovieClip(n, e),
        i = 1;
    this.make();
    for (var o = 0; o < this.modules.length; o++)
        for (var a = o * i, d = 0; d < this.modules[o].length; d++) {
            var u = d * i,
                s = this.modules[o][d];
            s && (r.beginFill(0, 100), r.moveTo(u, a), r.lineTo(u + i, a), r.lineTo(u + i, a + i), r.lineTo(u, a + i), r.endFill())
        }
    return r
};
at.setupTimingPattern = function() {
    for (var t = 8; t < this.moduleCount - 8; t++) this.modules[t][6] == null && (this.modules[t][6] = t % 2 == 0);
    for (var n = 8; n < this.moduleCount - 8; n++) this.modules[6][n] == null && (this.modules[6][n] = n % 2 == 0)
};
at.setupPositionAdjustPattern = function() {
    for (var t = Rt.getPatternPosition(this.typeNumber), n = 0; n < t.length; n++)
        for (var e = 0; e < t.length; e++) {
            var r = t[n],
                i = t[e];
            if (this.modules[r][i] == null)
                for (var o = -2; o <= 2; o++)
                    for (var a = -2; a <= 2; a++) o == -2 || o == 2 || a == -2 || a == 2 || o == 0 && a == 0 ? this.modules[r + o][i + a] = !0 : this.modules[r + o][i + a] = !1
        }
};
at.setupTypeNumber = function(t) {
    for (var n = Rt.getBCHTypeNumber(this.typeNumber), e = 0; e < 18; e++) {
        var r = !t && (n >> e & 1) == 1;
        this.modules[Math.floor(e / 3)][e % 3 + this.moduleCount - 8 - 3] = r
    }
    for (var e = 0; e < 18; e++) {
        var r = !t && (n >> e & 1) == 1;
        this.modules[e % 3 + this.moduleCount - 8 - 3][Math.floor(e / 3)] = r
    }
};
at.setupTypeInfo = function(t, n) {
    for (var e = this.errorCorrectLevel << 3 | n, r = Rt.getBCHTypeInfo(e), i = 0; i < 15; i++) {
        var o = !t && (r >> i & 1) == 1;
        i < 6 ? this.modules[i][8] = o : i < 8 ? this.modules[i + 1][8] = o : this.modules[this.moduleCount - 15 + i][8] = o
    }
    for (var i = 0; i < 15; i++) {
        var o = !t && (r >> i & 1) == 1;
        i < 8 ? this.modules[8][this.moduleCount - i - 1] = o : i < 9 ? this.modules[8][15 - i - 1 + 1] = o : this.modules[8][15 - i - 1] = o
    }
    this.modules[this.moduleCount - 8][8] = !t
};
at.mapData = function(t, n) {
    for (var e = -1, r = this.moduleCount - 1, i = 7, o = 0, a = this.moduleCount - 1; a > 0; a -= 2)
        for (a == 6 && a--;;) {
            for (var d = 0; d < 2; d++)
                if (this.modules[r][a - d] == null) {
                    var u = !1;
                    o < t.length && (u = (t[o] >>> i & 1) == 1);
                    var s = Rt.getMask(n, r, a - d);
                    s && (u = !u), this.modules[r][a - d] = u, i--, i == -1 && (o++, i = 7)
                }
            if (r += e, r < 0 || this.moduleCount <= r) {
                r -= e, e = -e;
                break
            }
        }
};
yt.PAD0 = 236;
yt.PAD1 = 17;
yt.createData = function(t, n, e) {
    for (var r = Wi.getRSBlocks(t, n), i = new Vi, o = 0; o < e.length; o++) {
        var a = e[o];
        i.put(a.mode, 4), i.put(a.getLength(), Rt.getLengthInBits(a.mode, t)), a.write(i)
    }
    for (var d = 0, o = 0; o < r.length; o++) d += r[o].dataCount;
    if (i.getLengthInBits() > d * 8) throw new Error("code length overflow. (" + i.getLengthInBits() + ">" + d * 8 + ")");
    for (i.getLengthInBits() + 4 <= d * 8 && i.put(0, 4); i.getLengthInBits() % 8 != 0;) i.putBit(!1);
    for (; !(i.getLengthInBits() >= d * 8 || (i.put(yt.PAD0, 8), i.getLengthInBits() >= d * 8));) i.put(yt.PAD1, 8);
    return yt.createBytes(i, r)
};
yt.createBytes = function(t, n) {
    for (var e = 0, r = 0, i = 0, o = new Array(n.length), a = new Array(n.length), d = 0; d < n.length; d++) {
        var u = n[d].dataCount,
            s = n[d].totalCount - u;
        r = Math.max(r, u), i = Math.max(i, s), o[d] = new Array(u);
        for (var f = 0; f < o[d].length; f++) o[d][f] = 255 & t.buffer[f + e];
        e += u;
        var l = Rt.getErrorCorrectPolynomial(s),
            c = new zs(o[d], l.getLength() - 1),
            p = c.mod(l);
        a[d] = new Array(l.getLength() - 1);
        for (var f = 0; f < a[d].length; f++) {
            var $ = f + p.getLength() - a[d].length;
            a[d][f] = $ >= 0 ? p.get($) : 0
        }
    }
    for (var g = 0, f = 0; f < n.length; f++) g += n[f].totalCount;
    for (var h = new Array(g), m = 0, f = 0; f < r; f++)
        for (var d = 0; d < n.length; d++) f < o[d].length && (h[m++] = o[d][f]);
    for (var f = 0; f < i; f++)
        for (var d = 0; d < n.length; d++) f < a[d].length && (h[m++] = a[d][f]);
    return h
};
var Cl = yt;

function En(t) {
    return typeof t == "number"
}

function ln(t) {
    return typeof t == "string"
}

function Re(t) {
    return typeof t == "boolean"
}

function Kr(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}

function H(t) {
    return Math.abs(t)
}

function Sn(t) {
    return Math.sign(t)
}

function te(t, n) {
    return H(t - n)
}

function Zs(t, n) {
    if (t === 0 || n === 0 || H(t) <= H(n)) return 0;
    const e = te(H(t), H(n));
    return H(e / t)
}

function Js(t) {
    return Math.round(t * 100) / 100
}

function ae(t) {
    return de(t).map(Number)
}

function $t(t) {
    return t[le(t)]
}

function le(t) {
    return Math.max(0, t.length - 1)
}

function On(t, n) {
    return n === le(t)
}

function Xr(t, n = 0) {
    return Array.from(Array(t), (e, r) => n + r)
}

function de(t) {
    return Object.keys(t)
}

function Ki(t, n) {
    return [t, n].reduce((e, r) => (de(r).forEach(i => {
        const o = e[i],
            a = r[i],
            d = Kr(o) && Kr(a);
        e[i] = d ? Ki(o, a) : a
    }), e), {})
}

function cn(t, n) {
    return typeof n.MouseEvent != "undefined" && t instanceof n.MouseEvent
}

function Qs(t, n) {
    const e = {
        start: r,
        center: i,
        end: o
    };

    function r() {
        return 0
    }

    function i(u) {
        return o(u) / 2
    }

    function o(u) {
        return n - u
    }

    function a(u, s) {
        return ln(t) ? e[t](u) : t(n, u, s)
    }
    return {
        measure: a
    }
}

function ue() {
    let t = [];

    function n(i, o, a, d = {
        passive: !0
    }) {
        let u;
        if ("addEventListener" in i) i.addEventListener(o, a, d), u = () => i.removeEventListener(o, a, d);
        else {
            const s = i;
            s.addListener(a), u = () => s.removeListener(a)
        }
        return t.push(u), r
    }

    function e() {
        t = t.filter(i => i())
    }
    const r = {
        add: n,
        clear: e
    };
    return r
}

function qs(t, n, e, r) {
    const i = ue(),
        o = 1e3 / 60;
    let a = null,
        d = 0,
        u = 0;

    function s() {
        i.add(t, "visibilitychange", () => {
            t.hidden && $()
        })
    }

    function f() {
        p(), i.clear()
    }

    function l(h) {
        if (!u) return;
        a || (a = h, e(), e());
        const m = h - a;
        for (a = h, d += m; d >= o;) e(), d -= o;
        const y = d / o;
        r(y), u && (u = n.requestAnimationFrame(l))
    }

    function c() {
        u || (u = n.requestAnimationFrame(l))
    }

    function p() {
        n.cancelAnimationFrame(u), a = null, d = 0, u = 0
    }

    function $() {
        a = null, d = 0
    }
    return {
        init: s,
        destroy: f,
        start: c,
        stop: p,
        update: e,
        render: r
    }
}

function t1(t, n) {
    const e = n === "rtl",
        r = t === "y",
        i = r ? "y" : "x",
        o = r ? "x" : "y",
        a = !r && e ? -1 : 1,
        d = f(),
        u = l();

    function s($) {
        const {
            height: g,
            width: h
        } = $;
        return r ? g : h
    }

    function f() {
        return r ? "top" : e ? "right" : "left"
    }

    function l() {
        return r ? "bottom" : e ? "left" : "right"
    }

    function c($) {
        return $ * a
    }
    return {
        scroll: i,
        cross: o,
        startEdge: d,
        endEdge: u,
        measureSize: s,
        direction: c
    }
}

function jt(t = 0, n = 0) {
    const e = H(t - n);

    function r(s) {
        return s < t
    }

    function i(s) {
        return s > n
    }

    function o(s) {
        return r(s) || i(s)
    }

    function a(s) {
        return o(s) ? r(s) ? t : n : s
    }

    function d(s) {
        return e ? s - e * Math.ceil((s - n) / e) : s
    }
    return {
        length: e,
        max: n,
        min: t,
        constrain: a,
        reachedAny: o,
        reachedMax: i,
        reachedMin: r,
        removeOffset: d
    }
}

function Xi(t, n, e) {
    const {
        constrain: r
    } = jt(0, t), i = t + 1;
    let o = a(n);

    function a(c) {
        return e ? H((i + c) % i) : r(c)
    }

    function d() {
        return o
    }

    function u(c) {
        return o = a(c), l
    }

    function s(c) {
        return f().set(d() + c)
    }

    function f() {
        return Xi(t, d(), e)
    }
    const l = {
        get: d,
        set: u,
        add: s,
        clone: f
    };
    return l
}

function e1(t, n, e, r, i, o, a, d, u, s, f, l, c, p, $, g, h, m, y) {
    const {
        cross: v,
        direction: P
    } = t, C = ["INPUT", "SELECT", "TEXTAREA"], O = {
        passive: !1
    }, x = ue(), S = ue(), A = jt(50, 225).constrain(p.measure(20)), T = {
        mouse: 300,
        touch: 400
    }, _ = {
        mouse: 500,
        touch: 600
    }, L = $ ? 43 : 25;
    let M = !1,
        F = 0,
        R = 0,
        k = !1,
        B = !1,
        b = !1,
        N = !1;

    function w(E) {
        if (!y) return;

        function j(tt) {
            (Re(y) || y(E, tt)) && Q(tt)
        }
        const V = n;
        x.add(V, "dragstart", tt => tt.preventDefault(), O).add(V, "touchmove", () => {}, O).add(V, "touchend", () => {}).add(V, "touchstart", j).add(V, "mousedown", j).add(V, "touchcancel", Y).add(V, "contextmenu", Y).add(V, "click", rt, !0)
    }

    function I() {
        x.clear(), S.clear()
    }

    function D() {
        const E = N ? e : n;
        S.add(E, "touchmove", U, O).add(E, "touchend", Y).add(E, "mousemove", U, O).add(E, "mouseup", Y)
    }

    function K(E) {
        const j = E.nodeName || "";
        return C.includes(j)
    }

    function W() {
        return ($ ? _ : T)[N ? "mouse" : "touch"]
    }

    function nt(E, j) {
        const V = l.add(Sn(E) * -1),
            tt = f.byDistance(E, !$).distance;
        return $ || H(E) < A ? tt : h && j ? tt * .5 : f.byIndex(V.get(), 0).distance
    }

    function Q(E) {
        const j = cn(E, r);
        N = j, b = $ && j && !E.buttons && M, M = te(i.get(), a.get()) >= 2, !(j && E.button !== 0) && (K(E.target) || (k = !0, o.pointerDown(E), s.useFriction(0).useDuration(0), i.set(a), D(), F = o.readPoint(E), R = o.readPoint(E, v), c.emit("pointerDown")))
    }

    function U(E) {
        if (!cn(E, r) && E.touches.length >= 2) return Y(E);
        const V = o.readPoint(E),
            tt = o.readPoint(E, v),
            pt = te(V, F),
            Ct = te(tt, R);
        if (!B && !N && (!E.cancelable || (B = pt > Ct, !B))) return Y(E);
        const Dt = o.pointerMove(E);
        pt > g && (b = !0), s.useFriction(.3).useDuration(.75), d.start(), i.add(P(Dt)), E.preventDefault()
    }

    function Y(E) {
        const V = f.byDistance(0, !1).index !== l.get(),
            tt = o.pointerUp(E) * W(),
            pt = nt(P(tt), V),
            Ct = Zs(tt, pt),
            Dt = L - 10 * Ct,
            St = m + Ct / 50;
        B = !1, k = !1, S.clear(), s.useDuration(Dt).useFriction(St), u.distance(pt, !$), N = !1, c.emit("pointerUp")
    }

    function rt(E) {
        b && (E.stopPropagation(), E.preventDefault(), b = !1)
    }

    function q() {
        return k
    }
    return {
        init: w,
        destroy: I,
        pointerDown: q
    }
}

function n1(t, n) {
    let r, i;

    function o(l) {
        return l.timeStamp
    }

    function a(l, c) {
        const $ = `client${(c||t.scroll)==="x"?"X":"Y"}`;
        return (cn(l, n) ? l : l.touches[0])[$]
    }

    function d(l) {
        return r = l, i = l, a(l)
    }

    function u(l) {
        const c = a(l) - a(i),
            p = o(l) - o(r) > 170;
        return i = l, p && (r = l), c
    }

    function s(l) {
        if (!r || !i) return 0;
        const c = a(i) - a(r),
            p = o(l) - o(r),
            $ = o(l) - o(i) > 170,
            g = c / p;
        return p && !$ && H(g) > .1 ? g : 0
    }
    return {
        pointerDown: d,
        pointerMove: u,
        pointerUp: s,
        readPoint: a
    }
}

function r1() {
    function t(e) {
        const {
            offsetTop: r,
            offsetLeft: i,
            offsetWidth: o,
            offsetHeight: a
        } = e;
        return {
            top: r,
            right: i + o,
            bottom: r + a,
            left: i,
            width: o,
            height: a
        }
    }
    return {
        measure: t
    }
}

function i1(t) {
    function n(r) {
        return t * (r / 100)
    }
    return {
        measure: n
    }
}

function o1(t, n, e, r, i, o, a) {
    const d = [t].concat(r);
    let u, s, f = [],
        l = !1;

    function c(h) {
        return i.measureSize(a.measure(h))
    }

    function p(h) {
        if (!o) return;
        s = c(t), f = r.map(c);

        function m(y) {
            for (const v of y) {
                if (l) return;
                const P = v.target === t,
                    C = r.indexOf(v.target),
                    O = P ? s : f[C],
                    x = c(P ? t : r[C]);
                if (H(x - O) >= .5) {
                    h.reInit(), n.emit("resize");
                    break
                }
            }
        }
        u = new ResizeObserver(y => {
            (Re(o) || o(h, y)) && m(y)
        }), e.requestAnimationFrame(() => {
            d.forEach(y => u.observe(y))
        })
    }

    function $() {
        l = !0, u && u.disconnect()
    }
    return {
        init: p,
        destroy: $
    }
}

function a1(t, n, e, r, i, o) {
    let a = 0,
        d = 0,
        u = i,
        s = o,
        f = t.get(),
        l = 0;

    function c() {
        const O = r.get() - t.get(),
            x = !u;
        let S = 0;
        return x ? (a = 0, e.set(r), t.set(r), S = O) : (e.set(t), a += O / u, a *= s, f += a, t.add(a), S = f - l), d = Sn(S), l = f, C
    }

    function p() {
        const O = r.get() - n.get();
        return H(O) < .001
    }

    function $() {
        return u
    }

    function g() {
        return d
    }

    function h() {
        return a
    }

    function m() {
        return v(i)
    }

    function y() {
        return P(o)
    }

    function v(O) {
        return u = O, C
    }

    function P(O) {
        return s = O, C
    }
    const C = {
        direction: g,
        duration: $,
        velocity: h,
        seek: c,
        settled: p,
        useBaseFriction: y,
        useBaseDuration: m,
        useFriction: P,
        useDuration: v
    };
    return C
}

function d1(t, n, e, r, i) {
    const o = i.measure(10),
        a = i.measure(50),
        d = jt(.1, .99);
    let u = !1;

    function s() {
        return !(u || !t.reachedAny(e.get()) || !t.reachedAny(n.get()))
    }

    function f(p) {
        if (!s()) return;
        const $ = t.reachedMin(n.get()) ? "min" : "max",
            g = H(t[$] - n.get()),
            h = e.get() - n.get(),
            m = d.constrain(g / a);
        e.subtract(h * m), !p && H(h) < o && (e.set(t.constrain(e.get())), r.useDuration(25).useBaseFriction())
    }

    function l(p) {
        u = !p
    }
    return {
        shouldConstrain: s,
        constrain: f,
        toggleActive: l
    }
}

function u1(t, n, e, r, i) {
    const o = jt(-n + t, 0),
        a = l(),
        d = f(),
        u = c();

    function s($, g) {
        return te($, g) <= 1
    }

    function f() {
        const $ = a[0],
            g = $t(a),
            h = a.lastIndexOf($),
            m = a.indexOf(g) + 1;
        return jt(h, m)
    }

    function l() {
        return e.map(($, g) => {
            const {
                min: h,
                max: m
            } = o, y = o.constrain($), v = !g, P = On(e, g);
            return v ? m : P || s(h, y) ? h : s(m, y) ? m : y
        }).map($ => parseFloat($.toFixed(3)))
    }

    function c() {
        if (n <= t + i) return [o.max];
        if (r === "keepSnaps") return a;
        const {
            min: $,
            max: g
        } = d;
        return a.slice($, g)
    }
    return {
        snapsContained: u,
        scrollContainLimit: d
    }
}

function s1(t, n, e) {
    const r = n[0],
        i = e ? r - t : $t(n);
    return {
        limit: jt(i, r)
    }
}

function l1(t, n, e, r) {
    const o = n.min + .1,
        a = n.max + .1,
        {
            reachedMin: d,
            reachedMax: u
        } = jt(o, a);

    function s(c) {
        return c === 1 ? u(e.get()) : c === -1 ? d(e.get()) : !1
    }

    function f(c) {
        if (!s(c)) return;
        const p = t * (c * -1);
        r.forEach($ => $.add(p))
    }
    return {
        loop: f
    }
}

function c1(t) {
    const {
        max: n,
        length: e
    } = t;

    function r(o) {
        const a = o - n;
        return e ? a / -e : 0
    }
    return {
        get: r
    }
}

function f1(t, n, e, r, i) {
    const {
        startEdge: o,
        endEdge: a
    } = t, {
        groupSlides: d
    } = i, u = l().map(n.measure), s = c(), f = p();

    function l() {
        return d(r).map(g => $t(g)[a] - g[0][o]).map(H)
    }

    function c() {
        return r.map(g => e[o] - g[o]).map(g => -H(g))
    }

    function p() {
        return d(s).map(g => g[0]).map((g, h) => g + u[h])
    }
    return {
        snaps: s,
        snapsAligned: f
    }
}

function $1(t, n, e, r, i, o) {
    const {
        groupSlides: a
    } = i, {
        min: d,
        max: u
    } = r, s = f();

    function f() {
        const c = a(o),
            p = !t || n === "keepSnaps";
        return e.length === 1 ? [o] : p ? c : c.slice(d, u).map(($, g, h) => {
            const m = !g,
                y = On(h, g);
            if (m) {
                const v = $t(h[0]) + 1;
                return Xr(v)
            }
            if (y) {
                const v = le(o) - $t(h)[0] + 1;
                return Xr(v, $t(h)[0])
            }
            return $
        })
    }
    return {
        slideRegistry: s
    }
}

function h1(t, n, e, r, i) {
    const {
        reachedAny: o,
        removeOffset: a,
        constrain: d
    } = r;

    function u($) {
        return $.concat().sort((g, h) => H(g) - H(h))[0]
    }

    function s($) {
        const g = t ? a($) : d($),
            h = n.map((y, v) => ({
                diff: f(y - g, 0),
                index: v
            })).sort((y, v) => H(y.diff) - H(v.diff)),
            {
                index: m
            } = h[0];
        return {
            index: m,
            distance: g
        }
    }

    function f($, g) {
        const h = [$, $ + e, $ - e];
        if (!t) return $;
        if (!g) return u(h);
        const m = h.filter(y => Sn(y) === g);
        return m.length ? u(m) : $t(h) - e
    }

    function l($, g) {
        const h = n[$] - i.get(),
            m = f(h, g);
        return {
            index: $,
            distance: m
        }
    }

    function c($, g) {
        const h = i.get() + $,
            {
                index: m,
                distance: y
            } = s(h),
            v = !t && o(h);
        if (!g || v) return {
            index: m,
            distance: $
        };
        const P = n[m] - y,
            C = $ + f(P, 0);
        return {
            index: m,
            distance: C
        }
    }
    return {
        byDistance: c,
        byIndex: l,
        shortcut: f
    }
}

function g1(t, n, e, r, i, o, a) {
    function d(l) {
        const c = l.distance,
            p = l.index !== n.get();
        o.add(c), c && (r.duration() ? t.start() : (t.update(), t.render(1), t.update())), p && (e.set(n.get()), n.set(l.index), a.emit("select"))
    }

    function u(l, c) {
        const p = i.byDistance(l, c);
        d(p)
    }

    function s(l, c) {
        const p = n.clone().set(l),
            $ = i.byIndex(p.get(), c);
        d($)
    }
    return {
        distance: u,
        index: s
    }
}

function p1(t, n, e, r, i, o, a, d) {
    const u = {
        passive: !0,
        capture: !0
    };
    let s = 0;

    function f(p) {
        if (!d) return;

        function $(g) {
            if (new Date().getTime() - s > 10) return;
            a.emit("slideFocusStart"), t.scrollLeft = 0;
            const y = e.findIndex(v => v.includes(g));
            En(y) && (i.useDuration(0), r.index(y, 0), a.emit("slideFocus"))
        }
        o.add(document, "keydown", l, !1), n.forEach((g, h) => {
            o.add(g, "focus", m => {
                (Re(d) || d(p, m)) && $(h)
            }, u)
        })
    }

    function l(p) {
        p.code === "Tab" && (s = new Date().getTime())
    }
    return {
        init: f
    }
}

function qt(t) {
    let n = t;

    function e() {
        return n
    }

    function r(u) {
        n = a(u)
    }

    function i(u) {
        n += a(u)
    }

    function o(u) {
        n -= a(u)
    }

    function a(u) {
        return En(u) ? u : u.get()
    }
    return {
        get: e,
        set: r,
        add: i,
        subtract: o
    }
}

function Yi(t, n) {
    const e = t.scroll === "x" ? a : d,
        r = n.style;
    let i = null,
        o = !1;

    function a(c) {
        return `translate3d(${c}px,0px,0px)`
    }

    function d(c) {
        return `translate3d(0px,${c}px,0px)`
    }

    function u(c) {
        if (o) return;
        const p = Js(t.direction(c));
        p !== i && (r.transform = e(p), i = p)
    }

    function s(c) {
        o = !c
    }

    function f() {
        o || (r.transform = "", n.getAttribute("style") || n.removeAttribute("style"))
    }
    return {
        clear: f,
        to: u,
        toggleActive: s
    }
}

function m1(t, n, e, r, i, o, a, d, u) {
    const f = ae(i),
        l = ae(i).reverse(),
        c = m().concat(y());

    function p(x, S) {
        return x.reduce((A, T) => A - i[T], S)
    }

    function $(x, S) {
        return x.reduce((A, T) => p(A, S) > 0 ? A.concat([T]) : A, [])
    }

    function g(x) {
        return o.map((S, A) => ({
            start: S - r[A] + .5 + x,
            end: S + n - .5 + x
        }))
    }

    function h(x, S, A) {
        const T = g(S);
        return x.map(_ => {
            const L = A ? 0 : -e,
                M = A ? e : 0,
                F = A ? "end" : "start",
                R = T[_][F];
            return {
                index: _,
                loopPoint: R,
                slideLocation: qt(-1),
                translate: Yi(t, u[_]),
                target: () => d.get() > R ? L : M
            }
        })
    }

    function m() {
        const x = a[0],
            S = $(l, x);
        return h(S, e, !1)
    }

    function y() {
        const x = n - a[0] - 1,
            S = $(f, x);
        return h(S, -e, !0)
    }

    function v() {
        return c.every(({
            index: x
        }) => {
            const S = f.filter(A => A !== x);
            return p(S, n) <= .1
        })
    }

    function P() {
        c.forEach(x => {
            const {
                target: S,
                translate: A,
                slideLocation: T
            } = x, _ = S();
            _ !== T.get() && (A.to(_), T.set(_))
        })
    }

    function C() {
        c.forEach(x => x.translate.clear())
    }
    return {
        canLoop: v,
        clear: C,
        loop: P,
        loopPoints: c
    }
}

function y1(t, n, e) {
    let r, i = !1;

    function o(u) {
        if (!e) return;

        function s(f) {
            for (const l of f)
                if (l.type === "childList") {
                    u.reInit(), n.emit("slidesChanged");
                    break
                }
        }
        r = new MutationObserver(f => {
            i || (Re(e) || e(u, f)) && s(f)
        }), r.observe(t, {
            childList: !0
        })
    }

    function a() {
        r && r.disconnect(), i = !0
    }
    return {
        init: o,
        destroy: a
    }
}

function v1(t, n, e, r) {
    const i = {};
    let o = null,
        a = null,
        d, u = !1;

    function s() {
        d = new IntersectionObserver($ => {
            u || ($.forEach(g => {
                const h = n.indexOf(g.target);
                i[h] = g
            }), o = null, a = null, e.emit("slidesInView"))
        }, {
            root: t.parentElement,
            threshold: r
        }), n.forEach($ => d.observe($))
    }

    function f() {
        d && d.disconnect(), u = !0
    }

    function l($) {
        return de(i).reduce((g, h) => {
            const m = parseInt(h),
                {
                    isIntersecting: y
                } = i[m];
            return ($ && y || !$ && !y) && g.push(m), g
        }, [])
    }

    function c($ = !0) {
        if ($ && o) return o;
        if (!$ && a) return a;
        const g = l($);
        return $ && (o = g), $ || (a = g), g
    }
    return {
        init: s,
        destroy: f,
        get: c
    }
}

function b1(t, n, e, r, i, o) {
    const {
        measureSize: a,
        startEdge: d,
        endEdge: u
    } = t, s = e[0] && i, f = $(), l = g(), c = e.map(a), p = h();

    function $() {
        if (!s) return 0;
        const y = e[0];
        return H(n[d] - y[d])
    }

    function g() {
        if (!s) return 0;
        const y = o.getComputedStyle($t(r));
        return parseFloat(y.getPropertyValue(`margin-${u}`))
    }

    function h() {
        return e.map((y, v, P) => {
            const C = !v,
                O = On(P, v);
            return C ? c[v] + f : O ? c[v] + l : P[v + 1][d] - y[d]
        }).map(H)
    }
    return {
        slideSizes: c,
        slideSizesWithGaps: p,
        startGap: f,
        endGap: l
    }
}

function P1(t, n, e, r, i, o, a, d, u) {
    const {
        startEdge: s,
        endEdge: f,
        direction: l
    } = t, c = En(e);

    function p(m, y) {
        return ae(m).filter(v => v % y === 0).map(v => m.slice(v, v + y))
    }

    function $(m) {
        return m.length ? ae(m).reduce((y, v, P) => {
            const C = $t(y) || 0,
                O = C === 0,
                x = v === le(m),
                S = i[s] - o[C][s],
                A = i[s] - o[v][f],
                T = !r && O ? l(a) : 0,
                _ = !r && x ? l(d) : 0,
                L = H(A - _ - (S + T));
            return P && L > n + u && y.push(v), x && y.push(m.length), y
        }, []).map((y, v, P) => {
            const C = Math.max(P[v - 1] || 0);
            return m.slice(C, y)
        }) : []
    }

    function g(m) {
        return c ? p(m, e) : $(m)
    }
    return {
        groupSlides: g
    }
}

function C1(t, n, e, r, i, o, a) {
    const {
        align: d,
        axis: u,
        direction: s,
        startIndex: f,
        loop: l,
        duration: c,
        dragFree: p,
        dragThreshold: $,
        inViewThreshold: g,
        slidesToScroll: h,
        skipSnaps: m,
        containScroll: y,
        watchResize: v,
        watchSlides: P,
        watchDrag: C,
        watchFocus: O
    } = o, x = 2, S = r1(), A = S.measure(n), T = e.map(S.measure), _ = t1(u, s), L = _.measureSize(A), M = i1(L), F = Qs(d, L), R = !l && !!y, k = l || !!y, {
        slideSizes: B,
        slideSizesWithGaps: b,
        startGap: N,
        endGap: w
    } = b1(_, A, T, e, k, i), I = P1(_, L, h, l, A, T, N, w, x), {
        snaps: D,
        snapsAligned: K
    } = f1(_, F, A, T, I), W = -$t(D) + $t(b), {
        snapsContained: nt,
        scrollContainLimit: Q
    } = u1(L, W, K, y, x), U = R ? nt : K, {
        limit: Y
    } = s1(W, U, l), rt = Xi(le(U), f, l), q = rt.clone(), G = ae(e), E = ({
        dragHandler: Gt,
        scrollBody: ke,
        scrollBounds: Be,
        options: {
            loop: ce
        }
    }) => {
        ce || Be.constrain(Gt.pointerDown()), ke.seek()
    }, j = ({
        scrollBody: Gt,
        translate: ke,
        location: Be,
        offsetLocation: ce,
        previousLocation: to,
        scrollLooper: eo,
        slideLooper: no,
        dragHandler: ro,
        animation: io,
        eventHandler: Fn,
        scrollBounds: oo,
        options: {
            loop: Rn
        }
    }, Dn) => {
        const Ln = Gt.settled(),
            ao = !oo.shouldConstrain(),
            Mn = Rn ? Ln : Ln && ao,
            kn = Mn && !ro.pointerDown();
        kn && io.stop();
        const uo = Be.get() * Dn + to.get() * (1 - Dn);
        ce.set(uo), Rn && (eo.loop(Gt.direction()), no.loop()), ke.to(ce.get()), kn && Fn.emit("settle"), Mn || Fn.emit("scroll")
    }, V = qs(r, i, () => E(Me), Gt => j(Me, Gt)), tt = .68, pt = U[rt.get()], Ct = qt(pt), Dt = qt(pt), St = qt(pt), Lt = qt(pt), Jt = a1(Ct, St, Dt, Lt, c, tt), De = h1(l, U, W, Y, Lt), Le = g1(V, rt, q, Jt, De, Lt, a), Tn = c1(Y), _n = ue(), Qi = v1(n, e, a, g), {
        slideRegistry: In
    } = $1(R, y, U, Q, I, G), qi = p1(t, e, In, Le, Jt, _n, a, O), Me = {
        ownerDocument: r,
        ownerWindow: i,
        eventHandler: a,
        containerRect: A,
        slideRects: T,
        animation: V,
        axis: _,
        dragHandler: e1(_, t, r, i, Lt, n1(_, i), Ct, V, Le, Jt, De, rt, a, M, p, $, m, tt, C),
        eventStore: _n,
        percentOfView: M,
        index: rt,
        indexPrevious: q,
        limit: Y,
        location: Ct,
        offsetLocation: St,
        previousLocation: Dt,
        options: o,
        resizeHandler: o1(n, a, i, e, _, v, S),
        scrollBody: Jt,
        scrollBounds: d1(Y, St, Lt, Jt, M),
        scrollLooper: l1(W, Y, St, [Ct, St, Dt, Lt]),
        scrollProgress: Tn,
        scrollSnapList: U.map(Tn.get),
        scrollSnaps: U,
        scrollTarget: De,
        scrollTo: Le,
        slideLooper: m1(_, L, W, B, b, D, U, St, e),
        slideFocus: qi,
        slidesHandler: y1(n, a, P),
        slidesInView: Qi,
        slideIndexes: G,
        slideRegistry: In,
        slidesToScroll: I,
        target: Lt,
        translate: Yi(_, n)
    };
    return Me
}

function N1() {
    let t = {},
        n;

    function e(s) {
        n = s
    }

    function r(s) {
        return t[s] || []
    }

    function i(s) {
        return r(s).forEach(f => f(n, s)), u
    }

    function o(s, f) {
        return t[s] = r(s).concat([f]), u
    }

    function a(s, f) {
        return t[s] = r(s).filter(l => l !== f), u
    }

    function d() {
        t = {}
    }
    const u = {
        init: e,
        emit: i,
        off: a,
        on: o,
        clear: d
    };
    return u
}
const w1 = {
    align: "center",
    axis: "x",
    container: null,
    slides: null,
    containScroll: "trimSnaps",
    direction: "ltr",
    slidesToScroll: 1,
    inViewThreshold: 0,
    breakpoints: {},
    dragFree: !1,
    dragThreshold: 10,
    loop: !1,
    skipSnaps: !1,
    duration: 25,
    startIndex: 0,
    active: !0,
    watchDrag: !0,
    watchResize: !0,
    watchSlides: !0,
    watchFocus: !0
};

function x1(t) {
    function n(o, a) {
        return Ki(o, a || {})
    }

    function e(o) {
        const a = o.breakpoints || {},
            d = de(a).filter(u => t.matchMedia(u).matches).map(u => a[u]).reduce((u, s) => n(u, s), {});
        return n(o, d)
    }

    function r(o) {
        return o.map(a => de(a.breakpoints || {})).reduce((a, d) => a.concat(d), []).map(t.matchMedia)
    }
    return {
        mergeOptions: n,
        optionsAtMedia: e,
        optionsMediaQueries: r
    }
}

function A1(t) {
    let n = [];

    function e(o, a) {
        return n = a.filter(({
            options: d
        }) => t.optionsAtMedia(d).active !== !1), n.forEach(d => d.init(o, t)), a.reduce((d, u) => Object.assign(d, {
            [u.name]: u
        }), {})
    }

    function r() {
        n = n.filter(o => o.destroy())
    }
    return {
        init: e,
        destroy: r
    }
}

function zi(t, n, e) {
    const r = t.ownerDocument,
        i = r.defaultView,
        o = x1(i),
        a = A1(o),
        d = ue(),
        u = N1(),
        {
            mergeOptions: s,
            optionsAtMedia: f,
            optionsMediaQueries: l
        } = o,
        {
            on: c,
            off: p,
            emit: $
        } = u,
        g = _;
    let h = !1,
        m, y = s(w1, zi.globalOptions),
        v = s(y),
        P = [],
        C, O, x;

    function S() {
        const {
            container: G,
            slides: E
        } = v;
        O = (ln(G) ? t.querySelector(G) : G) || t.children[0];
        const V = ln(E) ? O.querySelectorAll(E) : E;
        x = [].slice.call(V || O.children)
    }

    function A(G) {
        const E = C1(t, O, x, r, i, G, u);
        if (G.loop && !E.slideLooper.canLoop()) {
            const j = Object.assign({}, G, {
                loop: !1
            });
            return A(j)
        }
        return E
    }

    function T(G, E) {
        h || (y = s(y, G), v = f(y), P = E || P, S(), m = A(v), l([y, ...P.map(({
            options: j
        }) => j)]).forEach(j => d.add(j, "change", _)), v.active && (m.translate.to(m.location.get()), m.animation.init(), m.slidesInView.init(), m.slideFocus.init(q), m.eventHandler.init(q), m.resizeHandler.init(q), m.slidesHandler.init(q), m.options.loop && m.slideLooper.loop(), O.offsetParent && x.length && m.dragHandler.init(q), C = a.init(q, P)))
    }

    function _(G, E) {
        const j = I();
        L(), T(s({
            startIndex: j
        }, G), E), u.emit("reInit")
    }

    function L() {
        m.dragHandler.destroy(), m.eventStore.clear(), m.translate.clear(), m.slideLooper.clear(), m.resizeHandler.destroy(), m.slidesHandler.destroy(), m.slidesInView.destroy(), m.animation.destroy(), a.destroy(), d.clear()
    }

    function M() {
        h || (h = !0, d.clear(), L(), u.emit("destroy"), u.clear())
    }

    function F(G, E, j) {
        !v.active || h || (m.scrollBody.useBaseFriction().useDuration(E === !0 ? 0 : v.duration), m.scrollTo.index(G, j || 0))
    }

    function R(G) {
        const E = m.index.add(1).get();
        F(E, G, -1)
    }

    function k(G) {
        const E = m.index.add(-1).get();
        F(E, G, 1)
    }

    function B() {
        return m.index.add(1).get() !== I()
    }

    function b() {
        return m.index.add(-1).get() !== I()
    }

    function N() {
        return m.scrollSnapList
    }

    function w() {
        return m.scrollProgress.get(m.offsetLocation.get())
    }

    function I() {
        return m.index.get()
    }

    function D() {
        return m.indexPrevious.get()
    }

    function K() {
        return m.slidesInView.get()
    }

    function W() {
        return m.slidesInView.get(!1)
    }

    function nt() {
        return C
    }

    function Q() {
        return m
    }

    function U() {
        return t
    }

    function Y() {
        return O
    }

    function rt() {
        return x
    }
    const q = {
        canScrollNext: B,
        canScrollPrev: b,
        containerNode: Y,
        internalEngine: Q,
        destroy: M,
        off: p,
        on: c,
        emit: $,
        plugins: nt,
        previousScrollSnap: D,
        reInit: g,
        rootNode: U,
        scrollNext: R,
        scrollPrev: k,
        scrollProgress: w,
        scrollSnapList: N,
        scrollTo: F,
        selectedScrollSnap: I,
        slideNodes: rt,
        slidesInView: K,
        slidesNotInView: W
    };
    return T(n, e), setTimeout(() => u.emit("init"), 0), q
}
zi.globalOptions = void 0;
const E1 = {
    active: !0,
    breakpoints: {},
    delay: 4e3,
    jump: !1,
    playOnInit: !0,
    stopOnFocusIn: !0,
    stopOnInteraction: !0,
    stopOnMouseEnter: !1,
    stopOnLastSnap: !1,
    rootNode: null
};

function S1(t, n) {
    const e = t.scrollSnapList();
    return typeof n == "number" ? e.map(() => n) : n(e, t)
}

function O1(t, n) {
    const e = t.rootNode();
    return n && n(e) || e
}

function Zi(t = {}) {
    let n, e, r, i, o = null,
        a = 0,
        d = !1,
        u = !1,
        s = !1,
        f = !1;

    function l(F, R) {
        e = F;
        const {
            mergeOptions: k,
            optionsAtMedia: B
        } = R, b = k(E1, Zi.globalOptions), N = k(b, t);
        if (n = B(N), e.scrollSnapList().length <= 1) return;
        f = n.jump, r = !1, i = S1(e, n.delay);
        const {
            eventStore: w,
            ownerDocument: I
        } = e.internalEngine(), D = !!e.internalEngine().options.watchDrag, K = O1(e, n.rootNode);
        w.add(I, "visibilitychange", m), D && e.on("pointerDown", v), D && !n.stopOnInteraction && e.on("pointerUp", P), n.stopOnMouseEnter && w.add(K, "mouseenter", C), n.stopOnMouseEnter && !n.stopOnInteraction && w.add(K, "mouseleave", O), n.stopOnFocusIn && e.on("slideFocusStart", h), n.stopOnFocusIn && !n.stopOnInteraction && w.add(e.containerNode(), "focusout", g), n.playOnInit && g()
    }

    function c() {
        e.off("pointerDown", v).off("pointerUp", P).off("slideFocusStart", h), h(), r = !0, d = !1
    }

    function p() {
        const {
            ownerWindow: F
        } = e.internalEngine();
        F.clearTimeout(a), a = F.setTimeout(_, i[e.selectedScrollSnap()]), o = new Date().getTime(), e.emit("autoplay:timerset")
    }

    function $() {
        const {
            ownerWindow: F
        } = e.internalEngine();
        F.clearTimeout(a), a = 0, o = null, e.emit("autoplay:timerstopped")
    }

    function g() {
        if (!r) {
            if (y()) {
                s = !0;
                return
            }
            d || e.emit("autoplay:play"), p(), d = !0
        }
    }

    function h() {
        r || (d && e.emit("autoplay:stop"), $(), d = !1)
    }

    function m() {
        if (y()) return s = d, h();
        s && g()
    }

    function y() {
        const {
            ownerDocument: F
        } = e.internalEngine();
        return F.visibilityState === "hidden"
    }

    function v() {
        u || h()
    }

    function P() {
        u || g()
    }

    function C() {
        u = !0, h()
    }

    function O() {
        u = !1, g()
    }

    function x(F) {
        typeof F != "undefined" && (f = F), g()
    }

    function S() {
        d && h()
    }

    function A() {
        d && g()
    }

    function T() {
        return d
    }

    function _() {
        const {
            index: F
        } = e.internalEngine(), R = F.clone().add(1).get(), k = e.scrollSnapList().length - 1, B = n.stopOnLastSnap && R === k;
        if (e.canScrollNext() ? e.scrollNext(f) : e.scrollTo(0, f), e.emit("autoplay:select"), B) return h();
        g()
    }

    function L() {
        if (!o) return null;
        const F = i[e.selectedScrollSnap()],
            R = new Date().getTime() - o;
        return F - R
    }
    return {
        name: "autoplay",
        options: t,
        init: l,
        destroy: c,
        play: x,
        stop: S,
        reset: A,
        isPlaying: T,
        timeUntilNext: L
    }
}
Zi.globalOptions = void 0;
const T1 = {
    direction: "forward",
    speed: 2,
    startDelay: 1e3,
    active: !0,
    breakpoints: {},
    playOnInit: !0,
    stopOnFocusIn: !0,
    stopOnInteraction: !0,
    stopOnMouseEnter: !1,
    rootNode: null
};

function _1(t, n) {
    const e = t.rootNode();
    return n && n(e) || e
}

function Ji(t = {}) {
    let n, e, r, i, o = 0,
        a = !1,
        d = !1,
        u;

    function s(A, T) {
        e = A;
        const {
            mergeOptions: _,
            optionsAtMedia: L
        } = T, M = _(T1, Ji.globalOptions), F = _(M, t);
        if (n = L(F), e.scrollSnapList().length <= 1) return;
        i = n.startDelay, r = !1, u = e.internalEngine().scrollBody;
        const {
            eventStore: R
        } = e.internalEngine(), k = !!e.internalEngine().options.watchDrag, B = _1(e, n.rootNode);
        k && e.on("pointerDown", $), k && !n.stopOnInteraction && e.on("pointerUp", g), n.stopOnMouseEnter && R.add(B, "mouseenter", h), n.stopOnMouseEnter && !n.stopOnInteraction && R.add(B, "mouseleave", m), n.stopOnFocusIn && e.on("slideFocusStart", c), n.stopOnFocusIn && !n.stopOnInteraction && R.add(e.containerNode(), "focusout", l), n.playOnInit && l()
    }

    function f() {
        e.off("pointerDown", $).off("pointerUp", g).off("slideFocusStart", c).off("settle", y), c(), r = !0, a = !1
    }

    function l() {
        if (r || a) return;
        e.emit("autoScroll:play");
        const A = e.internalEngine(),
            {
                ownerWindow: T
            } = A;
        o = T.setTimeout(() => {
            A.scrollBody = p(A), A.animation.start()
        }, i), a = !0
    }

    function c() {
        if (r || !a) return;
        e.emit("autoScroll:stop");
        const A = e.internalEngine(),
            {
                ownerWindow: T
            } = A;
        A.scrollBody = u, T.clearTimeout(o), o = 0, a = !1
    }

    function p(A) {
        const {
            location: T,
            previousLocation: _,
            offsetLocation: L,
            target: M,
            scrollTarget: F,
            index: R,
            indexPrevious: k,
            limit: {
                reachedMin: B,
                reachedMax: b,
                constrain: N
            },
            options: {
                loop: w
            }
        } = A, I = n.direction === "forward" ? -1 : 1, D = () => rt;
        let K = 0,
            W = 0,
            nt = T.get(),
            Q = 0,
            U = !1;

        function Y() {
            let q = 0;
            _.set(T), K = I * n.speed, nt += K, T.add(K), M.set(T), q = nt - Q, W = Math.sign(q), Q = nt;
            const G = F.byDistance(0, !1).index;
            R.get() !== G && (k.set(R.get()), R.set(G), e.emit("select"));
            const E = n.direction === "forward" ? B(L.get()) : b(L.get());
            if (!w && E) {
                U = !0;
                const j = N(T.get());
                T.set(j), M.set(T), c()
            }
            return rt
        }
        const rt = {
            direction: () => W,
            duration: () => -1,
            velocity: () => K,
            settled: () => U,
            seek: Y,
            useBaseFriction: D,
            useBaseDuration: D,
            useFriction: D,
            useDuration: D
        };
        return rt
    }

    function $() {
        d || c()
    }

    function g() {
        d || v()
    }

    function h() {
        d = !0, c()
    }

    function m() {
        d = !1, l()
    }

    function y() {
        e.off("settle", y), l()
    }

    function v() {
        e.on("settle", y)
    }

    function P(A) {
        typeof A != "undefined" && (i = A), l()
    }

    function C() {
        a && c()
    }

    function O() {
        a && (c(), v())
    }

    function x() {
        return a
    }
    return {
        name: "autoScroll",
        options: t,
        init: s,
        destroy: f,
        play: P,
        stop: C,
        reset: O,
        isPlaying: x
    }
}
Ji.globalOptions = void 0;
export {
    dl as $, Wt as A, pl as B, gl as C, sl as D, Wr as E, vl as F, Pl as G, bl as H, yl as I, So as J, Gs as K, zi as L, J1 as M, $n as N, q1 as O, V1 as P, Cl as Q, Q1 as R, L1 as S, k1 as T, G1 as U, hn as V, md as W, rs as X, $r as Y, al as Z, j1 as _, H1 as a, ga as a0, nl as a1, X as a2, ol as a3, el as a4, rl as a5, il as a6, K1 as a7, Zi as a8, Ji as a9, M1 as b, B1 as c, Vn as d, U1 as e, Co as f, Xt as g, W1 as h, Xn as i, tl as j, Vt as k, Y1 as l, me as m, Vo as n, X1 as o, Ae as p, Z1 as q, z1 as r, D1 as s, ul as t, ml as u, ll as v, cl as w, fl as x, $l as y, hl as z
};
//# sourceMappingURL=vendor-DWBJvUkq.js.map