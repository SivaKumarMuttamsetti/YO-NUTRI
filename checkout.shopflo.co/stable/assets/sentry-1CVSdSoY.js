var si = Object.defineProperty,
    ii = Object.defineProperties;
var oi = Object.getOwnPropertyDescriptors;
var he = Object.getOwnPropertySymbols;
var Yn = Object.prototype.hasOwnProperty,
    zn = Object.prototype.propertyIsEnumerable;
var Wn = (t, e, n) => e in t ? si(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n,
    f = (t, e) => {
        for (var n in e || (e = {})) Yn.call(e, n) && Wn(t, n, e[n]);
        if (he)
            for (var n of he(e)) zn.call(e, n) && Wn(t, n, e[n]);
        return t
    },
    w = (t, e) => ii(t, oi(e));
var Xn = (t, e) => {
    var n = {};
    for (var r in t) Yn.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
    if (t != null && he)
        for (var r of he(t)) e.indexOf(r) < 0 && zn.call(t, r) && (n[r] = t[r]);
    return n
};
var Ye = (t, e, n) => new Promise((r, s) => {
    var i = c => {
            try {
                a(n.next(c))
            } catch (u) {
                s(u)
            }
        },
        o = c => {
            try {
                a(n.throw(c))
            } catch (u) {
                s(u)
            }
        },
        a = c => c.done ? r(c.value) : Promise.resolve(c.value).then(i, o);
    a((n = n.apply(t, e)).next())
});
import {
    r as ai
} from "./react-core-C02-NrKc.js";
(function() {
    try {
        var t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {},
            e = new t.Error().stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "28921e1d-f178-4a08-9329-64b8ac01286d", t._sentryDebugIdIdentifier = "sentry-dbid-28921e1d-f178-4a08-9329-64b8ac01286d")
    } catch (n) {}
})();
var ci = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {};
ci.SENTRY_RELEASE = {
    id: "checkout-ui-stable-eb55cad09ae77f0524379304f54936dc0b4bb327"
};
const y = typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__,
    yt = "8.55.0",
    b = globalThis;

function Fe(t, e, n) {
    const r = b,
        s = r.__SENTRY__ = r.__SENTRY__ || {},
        i = s[yt] = s[yt] || {};
    return i[t] || (i[t] = e())
}
const gt = typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__,
    ui = "Sentry Logger ",
    sn = ["debug", "info", "warn", "error", "log", "assert", "trace"],
    xe = {};

function Ct(t) {
    if (!("console" in b)) return t();
    const e = b.console,
        n = {},
        r = Object.keys(xe);
    r.forEach(s => {
        const i = xe[s];
        n[s] = e[s], e[s] = i
    });
    try {
        return t()
    } finally {
        r.forEach(s => {
            e[s] = n[s]
        })
    }
}

function di() {
    let t = !1;
    const e = {
        enable: () => {
            t = !0
        },
        disable: () => {
            t = !1
        },
        isEnabled: () => t
    };
    return gt ? sn.forEach(n => {
        e[n] = (...r) => {
            t && Ct(() => {
                b.console[n](`${ui}[${n}]:`, ...r)
            })
        }
    }) : sn.forEach(n => {
        e[n] = () => {}
    }), e
}
const m = Fe("logger", di),
    Gr = 50,
    vt = "?",
    Vn = /\(error: (.*)\)/,
    Kn = /captureMessage|captureException/;

function Wr(...t) {
    const e = t.sort((n, r) => n[0] - r[0]).map(n => n[1]);
    return (n, r = 0, s = 0) => {
        const i = [],
            o = n.split(`
`);
        for (let a = r; a < o.length; a++) {
            const c = o[a];
            if (c.length > 1024) continue;
            const u = Vn.test(c) ? c.replace(Vn, "$1") : c;
            if (!u.match(/\S*Error: /)) {
                for (const l of e) {
                    const d = l(u);
                    if (d) {
                        i.push(d);
                        break
                    }
                }
                if (i.length >= Gr + s) break
            }
        }
        return li(i.slice(s))
    }
}

function fi(t) {
    return Array.isArray(t) ? Wr(...t) : t
}

function li(t) {
    if (!t.length) return [];
    const e = Array.from(t);
    return /sentryWrapped/.test(ge(e).function || "") && e.pop(), e.reverse(), Kn.test(ge(e).function || "") && (e.pop(), Kn.test(ge(e).function || "") && e.pop()), e.slice(0, Gr).map(n => w(f({}, n), {
        filename: n.filename || ge(e).filename,
        function: n.function || vt
    }))
}

function ge(t) {
    return t[t.length - 1] || {}
}
const ze = "<anonymous>";

function it(t) {
    try {
        return !t || typeof t != "function" ? ze : t.name || ze
    } catch (e) {
        return ze
    }
}

function Jn(t) {
    const e = t.exception;
    if (e) {
        const n = [];
        try {
            return e.values.forEach(r => {
                r.stacktrace.frames && n.push(...r.stacktrace.frames)
            }), n
        } catch (r) {
            return
        }
    }
}
const ke = {},
    Zn = {};

function _t(t, e) {
    ke[t] = ke[t] || [], ke[t].push(e)
}

function St(t, e) {
    if (!Zn[t]) {
        Zn[t] = !0;
        try {
            e()
        } catch (n) {
            gt && m.error(`Error while instrumenting ${t}`, n)
        }
    }
}

function z(t, e) {
    const n = t && ke[t];
    if (n)
        for (const r of n) try {
            r(e)
        } catch (s) {
            gt && m.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${it(r)}
Error:`, s)
        }
}
let Xe = null;

function Yr(t) {
    const e = "error";
    _t(e, t), St(e, pi)
}

function pi() {
    Xe = b.onerror, b.onerror = function(t, e, n, r, s) {
        return z("error", {
            column: r,
            error: s,
            line: n,
            msg: t,
            url: e
        }), Xe ? Xe.apply(this, arguments) : !1
    }, b.onerror.__SENTRY_INSTRUMENTED__ = !0
}
let Ve = null;

function zr(t) {
    const e = "unhandledrejection";
    _t(e, t), St(e, mi)
}

function mi() {
    Ve = b.onunhandledrejection, b.onunhandledrejection = function(t) {
        return z("unhandledrejection", t), Ve ? Ve.apply(this, arguments) : !0
    }, b.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
}

function Ot() {
    return Rn(b), b
}

function Rn(t) {
    const e = t.__SENTRY__ = t.__SENTRY__ || {};
    return e.version = e.version || yt, e[yt] = e[yt] || {}
}
const Xr = Object.prototype.toString;

function Nn(t) {
    switch (Xr.call(t)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
        case "[object WebAssembly.Exception]":
            return !0;
        default:
            return ot(t, Error)
    }
}

function Gt(t, e) {
    return Xr.call(t) === `[object ${e}]`
}

function Vr(t) {
    return Gt(t, "ErrorEvent")
}

function Qn(t) {
    return Gt(t, "DOMError")
}

function hi(t) {
    return Gt(t, "DOMException")
}

function st(t) {
    return Gt(t, "String")
}

function An(t) {
    return typeof t == "object" && t !== null && "__sentry_template_string__" in t && "__sentry_template_values__" in t
}

function Cn(t) {
    return t === null || An(t) || typeof t != "object" && typeof t != "function"
}

function Ht(t) {
    return Gt(t, "Object")
}

function He(t) {
    return typeof Event != "undefined" && ot(t, Event)
}

function gi(t) {
    return typeof Element != "undefined" && ot(t, Element)
}

function _i(t) {
    return Gt(t, "RegExp")
}

function Ue(t) {
    return !!(t && t.then && typeof t.then == "function")
}

function Si(t) {
    return Ht(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
}

function ot(t, e) {
    try {
        return t instanceof e
    } catch (n) {
        return !1
    }
}

function Kr(t) {
    return !!(typeof t == "object" && t !== null && (t.__isVue || t._isVue))
}
const $t = b,
    yi = 80;

function wt(t, e = {}) {
    if (!t) return "<unknown>";
    try {
        let n = t;
        const r = 5,
            s = [];
        let i = 0,
            o = 0;
        const a = " > ",
            c = a.length;
        let u;
        const l = Array.isArray(e) ? e : e.keyAttrs,
            d = !Array.isArray(e) && e.maxStringLength || yi;
        for (; n && i++ < r && (u = Ei(n, l), !(u === "html" || i > 1 && o + s.length * c + u.length >= d));) s.push(u), o += u.length, n = n.parentNode;
        return s.reverse().join(a)
    } catch (n) {
        return "<unknown>"
    }
}

function Ei(t, e) {
    const n = t,
        r = [];
    if (!n || !n.tagName) return "";
    if ($t.HTMLElement && n instanceof HTMLElement && n.dataset) {
        if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
        if (n.dataset.sentryElement) return n.dataset.sentryElement
    }
    r.push(n.tagName.toLowerCase());
    const s = e && e.length ? e.filter(o => n.getAttribute(o)).map(o => [o, n.getAttribute(o)]) : null;
    if (s && s.length) s.forEach(o => {
        r.push(`[${o[0]}="${o[1]}"]`)
    });
    else {
        n.id && r.push(`#${n.id}`);
        const o = n.className;
        if (o && st(o)) {
            const a = o.split(/\s+/);
            for (const c of a) r.push(`.${c}`)
        }
    }
    const i = ["aria-label", "type", "name", "title", "alt"];
    for (const o of i) {
        const a = n.getAttribute(o);
        a && r.push(`[${o}="${a}"]`)
    }
    return r.join("")
}

function bi() {
    try {
        return $t.document.location.href
    } catch (t) {
        return ""
    }
}

function Ti(t) {
    return $t.document && $t.document.querySelector ? $t.document.querySelector(t) : null
}

function Jr(t) {
    if (!$t.HTMLElement) return null;
    let e = t;
    const n = 5;
    for (let r = 0; r < n; r++) {
        if (!e) return null;
        if (e instanceof HTMLElement) {
            if (e.dataset.sentryComponent) return e.dataset.sentryComponent;
            if (e.dataset.sentryElement) return e.dataset.sentryElement
        }
        e = e.parentNode
    }
    return null
}

function Ft(t, e = 0) {
    return typeof t != "string" || e === 0 || t.length <= e ? t : `${t.slice(0,e)}...`
}

function tr(t, e) {
    if (!Array.isArray(t)) return "";
    const n = [];
    for (let r = 0; r < t.length; r++) {
        const s = t[r];
        try {
            Kr(s) ? n.push("[VueViewModel]") : n.push(String(s))
        } catch (i) {
            n.push("[value cannot be serialized]")
        }
    }
    return n.join(e)
}

function Ii(t, e, n = !1) {
    return st(t) ? _i(e) ? e.test(t) : st(e) ? n ? t === e : t.includes(e) : !1 : !1
}

function Et(t, e = [], n = !1) {
    return e.some(r => Ii(t, r, n))
}

function G(t, e, n) {
    if (!(e in t)) return;
    const r = t[e],
        s = n(r);
    typeof s == "function" && Zr(s, r);
    try {
        t[e] = s
    } catch (i) {
        gt && m.log(`Failed to replace method "${e}" in object`, t)
    }
}

function V(t, e, n) {
    try {
        Object.defineProperty(t, e, {
            value: n,
            writable: !0,
            configurable: !0
        })
    } catch (r) {
        gt && m.log(`Failed to add non-enumerable property "${e}" to object`, t)
    }
}

function Zr(t, e) {
    try {
        const n = e.prototype || {};
        t.prototype = e.prototype = n, V(t, "__sentry_original__", e)
    } catch (n) {}
}

function On(t) {
    return t.__sentry_original__
}

function Qr(t) {
    if (Nn(t)) return f({
        message: t.message,
        name: t.name,
        stack: t.stack
    }, nr(t));
    if (He(t)) {
        const e = f({
            type: t.type,
            target: er(t.target),
            currentTarget: er(t.currentTarget)
        }, nr(t));
        return typeof CustomEvent != "undefined" && ot(t, CustomEvent) && (e.detail = t.detail), e
    } else return t
}

function er(t) {
    try {
        return gi(t) ? wt(t) : Object.prototype.toString.call(t)
    } catch (e) {
        return "<unknown>"
    }
}

function nr(t) {
    if (typeof t == "object" && t !== null) {
        const e = {};
        for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e
    } else return {}
}

function vi(t, e = 40) {
    const n = Object.keys(Qr(t));
    n.sort();
    const r = n[0];
    if (!r) return "[object has no keys]";
    if (r.length >= e) return Ft(r, e);
    for (let s = n.length; s > 0; s--) {
        const i = n.slice(0, s).join(", ");
        if (!(i.length > e)) return s === n.length ? i : Ft(i, e)
    }
    return ""
}

function L(t) {
    return on(t, new Map)
}

function on(t, e) {
    if (wi(t)) {
        const n = e.get(t);
        if (n !== void 0) return n;
        const r = {};
        e.set(t, r);
        for (const s of Object.getOwnPropertyNames(t)) typeof t[s] != "undefined" && (r[s] = on(t[s], e));
        return r
    }
    if (Array.isArray(t)) {
        const n = e.get(t);
        if (n !== void 0) return n;
        const r = [];
        return e.set(t, r), t.forEach(s => {
            r.push(on(s, e))
        }), r
    }
    return t
}

function wi(t) {
    if (!Ht(t)) return !1;
    try {
        const e = Object.getPrototypeOf(t).constructor.name;
        return !e || e === "Object"
    } catch (e) {
        return !0
    }
}
const ts = 1e3;

function se() {
    return Date.now() / ts
}

function ki() {
    const {
        performance: t
    } = b;
    if (!t || !t.now) return se;
    const e = Date.now() - t.now(),
        n = t.timeOrigin == null ? e : t.timeOrigin;
    return () => (n + t.now()) / ts
}
const U = ki(),
    j = (() => {
        const {
            performance: t
        } = b;
        if (!t || !t.now) return;
        const e = 3600 * 1e3,
            n = t.now(),
            r = Date.now(),
            s = t.timeOrigin ? Math.abs(t.timeOrigin + n - r) : e,
            i = s < e,
            o = t.timing && t.timing.navigationStart,
            c = typeof o == "number" ? Math.abs(o + n - r) : e,
            u = c < e;
        return i || u ? s <= c ? t.timeOrigin : o : r
    })();

function X() {
    const t = b,
        e = t.crypto || t.msCrypto;
    let n = () => Math.random() * 16;
    try {
        if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
        e && e.getRandomValues && (n = () => {
            const r = new Uint8Array(1);
            return e.getRandomValues(r), r[0]
        })
    } catch (r) {}
    return ("10000000100040008000" + 1e11).replace(/[018]/g, r => (r ^ (n() & 15) >> r / 4).toString(16))
}

function es(t) {
    return t.exception && t.exception.values ? t.exception.values[0] : void 0
}

function lt(t) {
    const {
        message: e,
        event_id: n
    } = t;
    if (e) return e;
    const r = es(t);
    return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
}

function an(t, e, n) {
    const r = t.exception = t.exception || {},
        s = r.values = r.values || [],
        i = s[0] = s[0] || {};
    i.value || (i.value = e || ""), i.type || (i.type = "Error")
}

function Ut(t, e) {
    const n = es(t);
    if (!n) return;
    const r = {
            type: "generic",
            handled: !0
        },
        s = n.mechanism;
    if (n.mechanism = f(f(f({}, r), s), e), e && "data" in e) {
        const i = f(f({}, s && s.data), e.data);
        n.mechanism.data = i
    }
}

function rr(t) {
    if (Ri(t)) return !0;
    try {
        V(t, "__sentry_captured__", !0)
    } catch (e) {}
    return !1
}

function Ri(t) {
    try {
        return t.__sentry_captured__
    } catch (e) {}
}
var tt;
(function(t) {
    t[t.PENDING = 0] = "PENDING";
    const n = 1;
    t[t.RESOLVED = n] = "RESOLVED";
    const r = 2;
    t[t.REJECTED = r] = "REJECTED"
})(tt || (tt = {}));

function kt(t) {
    return new Y(e => {
        e(t)
    })
}

function Pe(t) {
    return new Y((e, n) => {
        n(t)
    })
}
class Y {
    constructor(e) {
        Y.prototype.__init.call(this), Y.prototype.__init2.call(this), Y.prototype.__init3.call(this), Y.prototype.__init4.call(this), this._state = tt.PENDING, this._handlers = [];
        try {
            e(this._resolve, this._reject)
        } catch (n) {
            this._reject(n)
        }
    }
    then(e, n) {
        return new Y((r, s) => {
            this._handlers.push([!1, i => {
                if (!e) r(i);
                else try {
                    r(e(i))
                } catch (o) {
                    s(o)
                }
            }, i => {
                if (!n) s(i);
                else try {
                    r(n(i))
                } catch (o) {
                    s(o)
                }
            }]), this._executeHandlers()
        })
    } catch (e) {
        return this.then(n => n, e)
    } finally(e) {
        return new Y((n, r) => {
            let s, i;
            return this.then(o => {
                i = !1, s = o, e && e()
            }, o => {
                i = !0, s = o, e && e()
            }).then(() => {
                if (i) {
                    r(s);
                    return
                }
                n(s)
            })
        })
    }
    __init() {
        this._resolve = e => {
            this._setResult(tt.RESOLVED, e)
        }
    }
    __init2() {
        this._reject = e => {
            this._setResult(tt.REJECTED, e)
        }
    }
    __init3() {
        this._setResult = (e, n) => {
            if (this._state === tt.PENDING) {
                if (Ue(n)) {
                    n.then(this._resolve, this._reject);
                    return
                }
                this._state = e, this._value = n, this._executeHandlers()
            }
        }
    }
    __init4() {
        this._executeHandlers = () => {
            if (this._state === tt.PENDING) return;
            const e = this._handlers.slice();
            this._handlers = [], e.forEach(n => {
                n[0] || (this._state === tt.RESOLVED && n[1](this._value), this._state === tt.REJECTED && n[2](this._value), n[0] = !0)
            })
        }
    }
}

function Ni(t) {
    const e = U(),
        n = {
            sid: X(),
            init: !0,
            timestamp: e,
            started: e,
            duration: 0,
            status: "ok",
            errors: 0,
            ignoreDuration: !1,
            toJSON: () => Ci(n)
        };
    return t && Bt(n, t), n
}

function Bt(t, e = {}) {
    if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), !t.did && !e.did && (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || U(), e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = e.sid.length === 32 ? e.sid : X()), e.init !== void 0 && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), typeof e.started == "number" && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
    else if (typeof e.duration == "number") t.duration = e.duration;
    else {
        const n = t.timestamp - t.started;
        t.duration = n >= 0 ? n : 0
    }
    e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), typeof e.errors == "number" && (t.errors = e.errors), e.status && (t.status = e.status)
}

function Ai(t, e) {
    let n = {};
    t.status === "ok" && (n = {
        status: "exited"
    }), Bt(t, n)
}

function Ci(t) {
    return L({
        sid: `${t.sid}`,
        init: t.init,
        started: new Date(t.started * 1e3).toISOString(),
        timestamp: new Date(t.timestamp * 1e3).toISOString(),
        status: t.status,
        errors: t.errors,
        did: typeof t.did == "number" || typeof t.did == "string" ? `${t.did}` : void 0,
        duration: t.duration,
        abnormal_mechanism: t.abnormal_mechanism,
        attrs: {
            release: t.release,
            environment: t.environment,
            ip_address: t.ipAddress,
            user_agent: t.userAgent
        }
    })
}

function pt() {
    return X()
}

function mt() {
    return X().substring(16)
}

function Be(t, e, n = 2) {
    if (!e || typeof e != "object" || n <= 0) return e;
    if (t && e && Object.keys(e).length === 0) return t;
    const r = f({}, t);
    for (const s in e) Object.prototype.hasOwnProperty.call(e, s) && (r[s] = Be(r[s], e[s], n - 1));
    return r
}
const cn = "_sentrySpan";

function ne(t, e) {
    e ? V(t, cn, e) : delete t[cn]
}

function De(t) {
    return t[cn]
}
const Oi = 100;
class xn {
    constructor() {
        this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
            traceId: pt(),
            spanId: mt()
        }
    }
    clone() {
        const e = new xn;
        return e._breadcrumbs = [...this._breadcrumbs], e._tags = f({}, this._tags), e._extra = f({}, this._extra), e._contexts = f({}, this._contexts), this._contexts.flags && (e._contexts.flags = {
            values: [...this._contexts.flags.values]
        }), e._user = this._user, e._level = this._level, e._session = this._session, e._transactionName = this._transactionName, e._fingerprint = this._fingerprint, e._eventProcessors = [...this._eventProcessors], e._requestSession = this._requestSession, e._attachments = [...this._attachments], e._sdkProcessingMetadata = f({}, this._sdkProcessingMetadata), e._propagationContext = f({}, this._propagationContext), e._client = this._client, e._lastEventId = this._lastEventId, ne(e, De(this)), e
    }
    setClient(e) {
        this._client = e
    }
    setLastEventId(e) {
        this._lastEventId = e
    }
    getClient() {
        return this._client
    }
    lastEventId() {
        return this._lastEventId
    }
    addScopeListener(e) {
        this._scopeListeners.push(e)
    }
    addEventProcessor(e) {
        return this._eventProcessors.push(e), this
    }
    setUser(e) {
        return this._user = e || {
            email: void 0,
            id: void 0,
            ip_address: void 0,
            username: void 0
        }, this._session && Bt(this._session, {
            user: e
        }), this._notifyScopeListeners(), this
    }
    getUser() {
        return this._user
    }
    getRequestSession() {
        return this._requestSession
    }
    setRequestSession(e) {
        return this._requestSession = e, this
    }
    setTags(e) {
        return this._tags = f(f({}, this._tags), e), this._notifyScopeListeners(), this
    }
    setTag(e, n) {
        return this._tags = w(f({}, this._tags), {
            [e]: n
        }), this._notifyScopeListeners(), this
    }
    setExtras(e) {
        return this._extra = f(f({}, this._extra), e), this._notifyScopeListeners(), this
    }
    setExtra(e, n) {
        return this._extra = w(f({}, this._extra), {
            [e]: n
        }), this._notifyScopeListeners(), this
    }
    setFingerprint(e) {
        return this._fingerprint = e, this._notifyScopeListeners(), this
    }
    setLevel(e) {
        return this._level = e, this._notifyScopeListeners(), this
    }
    setTransactionName(e) {
        return this._transactionName = e, this._notifyScopeListeners(), this
    }
    setContext(e, n) {
        return n === null ? delete this._contexts[e] : this._contexts[e] = n, this._notifyScopeListeners(), this
    }
    setSession(e) {
        return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this
    }
    getSession() {
        return this._session
    }
    update(e) {
        if (!e) return this;
        const n = typeof e == "function" ? e(this) : e,
            [r, s] = n instanceof Rt ? [n.getScopeData(), n.getRequestSession()] : Ht(n) ? [e, e.requestSession] : [],
            {
                tags: i,
                extra: o,
                user: a,
                contexts: c,
                level: u,
                fingerprint: l = [],
                propagationContext: d
            } = r || {};
        return this._tags = f(f({}, this._tags), i), this._extra = f(f({}, this._extra), o), this._contexts = f(f({}, this._contexts), c), a && Object.keys(a).length && (this._user = a), u && (this._level = u), l.length && (this._fingerprint = l), d && (this._propagationContext = d), s && (this._requestSession = s), this
    }
    clear() {
        return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._session = void 0, ne(this, void 0), this._attachments = [], this.setPropagationContext({
            traceId: pt()
        }), this._notifyScopeListeners(), this
    }
    addBreadcrumb(e, n) {
        const r = typeof n == "number" ? n : Oi;
        if (r <= 0) return this;
        const s = f({
            timestamp: se()
        }, e);
        return this._breadcrumbs.push(s), this._breadcrumbs.length > r && (this._breadcrumbs = this._breadcrumbs.slice(-r), this._client && this._client.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this
    }
    getLastBreadcrumb() {
        return this._breadcrumbs[this._breadcrumbs.length - 1]
    }
    clearBreadcrumbs() {
        return this._breadcrumbs = [], this._notifyScopeListeners(), this
    }
    addAttachment(e) {
        return this._attachments.push(e), this
    }
    clearAttachments() {
        return this._attachments = [], this
    }
    getScopeData() {
        return {
            breadcrumbs: this._breadcrumbs,
            attachments: this._attachments,
            contexts: this._contexts,
            tags: this._tags,
            extra: this._extra,
            user: this._user,
            level: this._level,
            fingerprint: this._fingerprint || [],
            eventProcessors: this._eventProcessors,
            propagationContext: this._propagationContext,
            sdkProcessingMetadata: this._sdkProcessingMetadata,
            transactionName: this._transactionName,
            span: De(this)
        }
    }
    setSDKProcessingMetadata(e) {
        return this._sdkProcessingMetadata = Be(this._sdkProcessingMetadata, e, 2), this
    }
    setPropagationContext(e) {
        return this._propagationContext = f({
            spanId: mt()
        }, e), this
    }
    getPropagationContext() {
        return this._propagationContext
    }
    captureException(e, n) {
        const r = n && n.event_id ? n.event_id : X();
        if (!this._client) return m.warn("No client configured on scope - will not capture exception!"), r;
        const s = new Error("Sentry syntheticException");
        return this._client.captureException(e, w(f({
            originalException: e,
            syntheticException: s
        }, n), {
            event_id: r
        }), this), r
    }
    captureMessage(e, n, r) {
        const s = r && r.event_id ? r.event_id : X();
        if (!this._client) return m.warn("No client configured on scope - will not capture message!"), s;
        const i = new Error(e);
        return this._client.captureMessage(e, n, w(f({
            originalException: e,
            syntheticException: i
        }, r), {
            event_id: s
        }), this), s
    }
    captureEvent(e, n) {
        const r = n && n.event_id ? n.event_id : X();
        return this._client ? (this._client.captureEvent(e, w(f({}, n), {
            event_id: r
        }), this), r) : (m.warn("No client configured on scope - will not capture event!"), r)
    }
    _notifyScopeListeners() {
        this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(e => {
            e(this)
        }), this._notifyingListeners = !1)
    }
}
const Rt = xn;

function xi() {
    return Fe("defaultCurrentScope", () => new Rt)
}

function Pi() {
    return Fe("defaultIsolationScope", () => new Rt)
}
class Di {
    constructor(e, n) {
        let r;
        e ? r = e : r = new Rt;
        let s;
        n ? s = n : s = new Rt, this._stack = [{
            scope: r
        }], this._isolationScope = s
    }
    withScope(e) {
        const n = this._pushScope();
        let r;
        try {
            r = e(n)
        } catch (s) {
            throw this._popScope(), s
        }
        return Ue(r) ? r.then(s => (this._popScope(), s), s => {
            throw this._popScope(), s
        }) : (this._popScope(), r)
    }
    getClient() {
        return this.getStackTop().client
    }
    getScope() {
        return this.getStackTop().scope
    }
    getIsolationScope() {
        return this._isolationScope
    }
    getStackTop() {
        return this._stack[this._stack.length - 1]
    }
    _pushScope() {
        const e = this.getScope().clone();
        return this._stack.push({
            client: this.getClient(),
            scope: e
        }), e
    }
    _popScope() {
        return this._stack.length <= 1 ? !1 : !!this._stack.pop()
    }
}

function jt() {
    const t = Ot(),
        e = Rn(t);
    return e.stack = e.stack || new Di(xi(), Pi())
}

function Li(t) {
    return jt().withScope(t)
}

function Mi(t, e) {
    const n = jt();
    return n.withScope(() => (n.getStackTop().scope = t, e(t)))
}

function sr(t) {
    return jt().withScope(() => t(jt().getIsolationScope()))
}

function $i() {
    return {
        withIsolationScope: sr,
        withScope: Li,
        withSetScope: Mi,
        withSetIsolationScope: (t, e) => sr(e),
        getCurrentScope: () => jt().getScope(),
        getIsolationScope: () => jt().getIsolationScope()
    }
}

function Wt(t) {
    const e = Rn(t);
    return e.acs ? e.acs : $i()
}

function R() {
    const t = Ot();
    return Wt(t).getCurrentScope()
}

function ct() {
    const t = Ot();
    return Wt(t).getIsolationScope()
}

function Fi() {
    return Fe("globalScope", () => new Rt)
}

function Pn(...t) {
    const e = Ot(),
        n = Wt(e);
    if (t.length === 2) {
        const [r, s] = t;
        return r ? n.withSetScope(r, s) : n.withScope(s)
    }
    return n.withScope(t[0])
}

function I() {
    return R().getClient()
}

function Hi(t) {
    const e = t.getPropagationContext(),
        {
            traceId: n,
            spanId: r,
            parentSpanId: s
        } = e;
    return L({
        trace_id: n,
        span_id: r,
        parent_span_id: s
    })
}
const Ui = "_sentryMetrics";

function un(t) {
    const e = t[Ui];
    if (!e) return;
    const n = {};
    for (const [, [r, s]] of e)(n[r] || (n[r] = [])).push(L(s));
    return n
}
const rt = "sentry.source",
    ns = "sentry.sample_rate",
    Nt = "sentry.op",
    P = "sentry.origin",
    dn = "sentry.idle_span_finish_reason",
    je = "sentry.measurement_unit",
    qe = "sentry.measurement_value",
    ir = "sentry.custom_span_name",
    Bi = "sentry.profile_id",
    Dn = "sentry.exclusive_time",
    ji = 0,
    rs = 1,
    x = 2;

function qi(t) {
    if (t < 400 && t >= 100) return {
        code: rs
    };
    if (t >= 400 && t < 500) switch (t) {
        case 401:
            return {
                code: x,
                message: "unauthenticated"
            };
        case 403:
            return {
                code: x,
                message: "permission_denied"
            };
        case 404:
            return {
                code: x,
                message: "not_found"
            };
        case 409:
            return {
                code: x,
                message: "already_exists"
            };
        case 413:
            return {
                code: x,
                message: "failed_precondition"
            };
        case 429:
            return {
                code: x,
                message: "resource_exhausted"
            };
        case 499:
            return {
                code: x,
                message: "cancelled"
            };
        default:
            return {
                code: x,
                message: "invalid_argument"
            }
    }
    if (t >= 500 && t < 600) switch (t) {
        case 501:
            return {
                code: x,
                message: "unimplemented"
            };
        case 503:
            return {
                code: x,
                message: "unavailable"
            };
        case 504:
            return {
                code: x,
                message: "deadline_exceeded"
            };
        default:
            return {
                code: x,
                message: "internal_error"
            }
    }
    return {
        code: x,
        message: "unknown_error"
    }
}

function ss(t, e) {
    t.setAttribute("http.response.status_code", e);
    const n = qi(e);
    n.message !== "unknown_error" && t.setStatus(n)
}
const Ln = "sentry-",
    Gi = /^sentry-/,
    Wi = 8192;

function is(t) {
    const e = zi(t);
    if (!e) return;
    const n = Object.entries(e).reduce((r, [s, i]) => {
        if (s.match(Gi)) {
            const o = s.slice(Ln.length);
            r[o] = i
        }
        return r
    }, {});
    if (Object.keys(n).length > 0) return n
}

function Yi(t) {
    if (!t) return;
    const e = Object.entries(t).reduce((n, [r, s]) => (s && (n[`${Ln}${r}`] = s), n), {});
    return Xi(e)
}

function zi(t) {
    if (!(!t || !st(t) && !Array.isArray(t))) return Array.isArray(t) ? t.reduce((e, n) => {
        const r = or(n);
        return Object.entries(r).forEach(([s, i]) => {
            e[s] = i
        }), e
    }, {}) : or(t)
}

function or(t) {
    return t.split(",").map(e => e.split("=").map(n => decodeURIComponent(n.trim()))).reduce((e, [n, r]) => (n && r && (e[n] = r), e), {})
}

function Xi(t) {
    if (Object.keys(t).length !== 0) return Object.entries(t).reduce((e, [n, r], s) => {
        const i = `${encodeURIComponent(n)}=${encodeURIComponent(r)}`,
            o = s === 0 ? i : `${e},${i}`;
        return o.length > Wi ? (gt && m.warn(`Not adding key: ${n} with val: ${r} to baggage header due to exceeding baggage size limits.`), e) : o
    }, "")
}
const os = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

function Vi(t) {
    if (!t) return;
    const e = t.match(os);
    if (!e) return;
    let n;
    return e[3] === "1" ? n = !0 : e[3] === "0" && (n = !1), {
        traceId: e[1],
        parentSampled: n,
        parentSpanId: e[2]
    }
}

function Ki(t, e) {
    const n = Vi(t),
        r = is(e);
    if (!n || !n.traceId) return {
        traceId: pt(),
        spanId: mt()
    };
    const {
        traceId: s,
        parentSpanId: i,
        parentSampled: o
    } = n, a = mt();
    return {
        traceId: s,
        parentSpanId: i,
        spanId: a,
        sampled: o,
        dsc: r || {}
    }
}

function as(t = pt(), e = mt(), n) {
    let r = "";
    return n !== void 0 && (r = n ? "-1" : "-0"), `${t}-${e}${r}`
}
const cs = 0,
    us = 1;
let ar = !1;

function Ji(t) {
    const {
        spanId: e,
        traceId: n
    } = t.spanContext(), {
        data: r,
        op: s,
        parent_span_id: i,
        status: o,
        origin: a
    } = T(t);
    return L({
        parent_span_id: i,
        span_id: e,
        trace_id: n,
        data: r,
        op: s,
        status: o,
        origin: a
    })
}

function Zi(t) {
    const {
        spanId: e,
        traceId: n,
        isRemote: r
    } = t.spanContext(), s = r ? e : T(t).parent_span_id, i = r ? mt() : e;
    return L({
        parent_span_id: s,
        span_id: i,
        trace_id: n
    })
}

function Qi(t) {
    const {
        traceId: e,
        spanId: n
    } = t.spanContext(), r = xt(t);
    return as(e, n, r)
}

function bt(t) {
    return typeof t == "number" ? cr(t) : Array.isArray(t) ? t[0] + t[1] / 1e9 : t instanceof Date ? cr(t.getTime()) : U()
}

function cr(t) {
    return t > 9999999999 ? t / 1e3 : t
}

function T(t) {
    if (eo(t)) return t.getSpanJSON();
    try {
        const {
            spanId: e,
            traceId: n
        } = t.spanContext();
        if (to(t)) {
            const {
                attributes: r,
                startTime: s,
                name: i,
                endTime: o,
                parentSpanId: a,
                status: c
            } = t;
            return L({
                span_id: e,
                trace_id: n,
                data: r,
                description: i,
                parent_span_id: a,
                start_timestamp: bt(s),
                timestamp: bt(o) || void 0,
                status: ds(c),
                op: r[Nt],
                origin: r[P],
                _metrics_summary: un(t)
            })
        }
        return {
            span_id: e,
            trace_id: n
        }
    } catch (e) {
        return {}
    }
}

function to(t) {
    const e = t;
    return !!e.attributes && !!e.startTime && !!e.name && !!e.endTime && !!e.status
}

function eo(t) {
    return typeof t.getSpanJSON == "function"
}

function xt(t) {
    const {
        traceFlags: e
    } = t.spanContext();
    return e === us
}

function ds(t) {
    if (!(!t || t.code === ji)) return t.code === rs ? "ok" : t.message || "unknown_error"
}
const Tt = "_sentryChildSpans",
    fn = "_sentryRootSpan";

function fs(t, e) {
    const n = t[fn] || t;
    V(e, fn, n), t[Tt] ? t[Tt].add(e) : V(t, Tt, new Set([e]))
}

function no(t, e) {
    t[Tt] && t[Tt].delete(e)
}

function Re(t) {
    const e = new Set;

    function n(r) {
        if (!e.has(r) && xt(r)) {
            e.add(r);
            const s = r[Tt] ? Array.from(r[Tt]) : [];
            for (const i of s) n(i)
        }
    }
    return n(t), Array.from(e)
}

function F(t) {
    return t[fn] || t
}

function H() {
    const t = Ot(),
        e = Wt(t);
    return e.getActiveSpan ? e.getActiveSpan() : De(R())
}

function ls() {
    ar || (Ct(() => {
        console.warn("[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly.")
    }), ar = !0)
}
let ur = !1;

function ro() {
    ur || (ur = !0, Yr(ln), zr(ln))
}

function ln() {
    const t = H(),
        e = t && F(t);
    if (e) {
        const n = "internal_error";
        y && m.log(`[Tracing] Root span: ${n} -> Global error occurred`), e.setStatus({
            code: x,
            message: n
        })
    }
}
ln.tag = "sentry_tracingErrorCallback";
const ps = "_sentryScope",
    ms = "_sentryIsolationScope";

function so(t, e, n) {
    t && (V(t, ms, n), V(t, ps, e))
}

function dr(t) {
    return {
        scope: t[ps],
        isolationScope: t[ms]
    }
}

function ht(t) {
    if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return !1;
    const e = I(),
        n = t || e && e.getOptions();
    return !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
}
class Yt {
    constructor(e = {}) {
        this._traceId = e.traceId || pt(), this._spanId = e.spanId || mt()
    }
    spanContext() {
        return {
            spanId: this._spanId,
            traceId: this._traceId,
            traceFlags: cs
        }
    }
    end(e) {}
    setAttribute(e, n) {
        return this
    }
    setAttributes(e) {
        return this
    }
    setStatus(e) {
        return this
    }
    updateName(e) {
        return this
    }
    isRecording() {
        return !1
    }
    addEvent(e, n, r) {
        return this
    }
    addLink(e) {
        return this
    }
    addLinks(e) {
        return this
    }
    recordException(e, n) {}
}
const Mn = "production",
    hs = "_frozenDsc";

function fr(t, e) {
    V(t, hs, e)
}

function gs(t, e) {
    const n = e.getOptions(),
        {
            publicKey: r
        } = e.getDsn() || {},
        s = L({
            environment: n.environment || Mn,
            release: n.release,
            public_key: r,
            trace_id: t
        });
    return e.emit("createDsc", s), s
}

function _s(t, e) {
    const n = e.getPropagationContext();
    return n.dsc || gs(n.traceId, t)
}

function zt(t) {
    const e = I();
    if (!e) return {};
    const n = F(t),
        r = n[hs];
    if (r) return r;
    const s = n.spanContext().traceState,
        i = s && s.get("sentry.dsc"),
        o = i && is(i);
    if (o) return o;
    const a = gs(t.spanContext().traceId, e),
        c = T(n),
        u = c.data || {},
        l = u[ns];
    l != null && (a.sample_rate = `${l}`);
    const d = u[rt],
        p = c.description;
    return d !== "url" && p && (a.transaction = p), ht() && (a.sampled = String(xt(n))), e.emit("createDsc", a, n), a
}

function io(t) {
    if (!y) return;
    const {
        description: e = "< unknown name >",
        op: n = "< unknown op >",
        parent_span_id: r
    } = T(t), {
        spanId: s
    } = t.spanContext(), i = xt(t), o = F(t), a = o === t, c = `[Tracing] Starting ${i?"sampled":"unsampled"} ${a?"root ":""}span`, u = [`op: ${n}`, `name: ${e}`, `ID: ${s}`];
    if (r && u.push(`parent ID: ${r}`), !a) {
        const {
            op: l,
            description: d
        } = T(o);
        u.push(`root ID: ${o.spanContext().spanId}`), l && u.push(`root op: ${l}`), d && u.push(`root description: ${d}`)
    }
    m.log(`${c}
  ${u.join(`
  `)}`)
}

function oo(t) {
    if (!y) return;
    const {
        description: e = "< unknown name >",
        op: n = "< unknown op >"
    } = T(t), {
        spanId: r
    } = t.spanContext(), i = F(t) === t, o = `[Tracing] Finishing "${n}" ${i?"root ":""}span "${e}" with ID ${r}`;
    m.log(o)
}

function Ss(t) {
    if (typeof t == "boolean") return Number(t);
    const e = typeof t == "string" ? parseFloat(t) : t;
    if (typeof e != "number" || isNaN(e) || e < 0 || e > 1) {
        y && m.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`);
        return
    }
    return e
}

function ao(t, e) {
    if (!ht(t)) return [!1];
    const n = ct().getScopeData().sdkProcessingMetadata.normalizedRequest,
        r = w(f({}, e), {
            normalizedRequest: e.normalizedRequest || n
        });
    let s;
    typeof t.tracesSampler == "function" ? s = t.tracesSampler(r) : r.parentSampled !== void 0 ? s = r.parentSampled : typeof t.tracesSampleRate != "undefined" ? s = t.tracesSampleRate : s = 1;
    const i = Ss(s);
    return i === void 0 ? (y && m.warn("[Tracing] Discarding transaction because of invalid sample rate."), [!1]) : i ? Math.random() < i ? [!0, i] : (y && m.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(s)})`), [!1, i]) : (y && m.log(`[Tracing] Discarding transaction because ${typeof t.tracesSampler=="function"?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0"}`), [!1, i])
}
const co = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

function uo(t) {
    return t === "http" || t === "https"
}

function ie(t, e = !1) {
    const {
        host: n,
        path: r,
        pass: s,
        port: i,
        projectId: o,
        protocol: a,
        publicKey: c
    } = t;
    return `${a}://${c}${e&&s?`:${s}`:""}@${n}${i?`:${i}`:""}/${r&&`${r}/`}${o}`
}

function fo(t) {
    const e = co.exec(t);
    if (!e) {
        Ct(() => {
            console.error(`Invalid Sentry Dsn: ${t}`)
        });
        return
    }
    const [n, r, s = "", i = "", o = "", a = ""] = e.slice(1);
    let c = "",
        u = a;
    const l = u.split("/");
    if (l.length > 1 && (c = l.slice(0, -1).join("/"), u = l.pop()), u) {
        const d = u.match(/^\d+/);
        d && (u = d[0])
    }
    return ys({
        host: i,
        pass: s,
        path: c,
        projectId: u,
        port: o,
        protocol: n,
        publicKey: r
    })
}

function ys(t) {
    return {
        protocol: t.protocol,
        publicKey: t.publicKey || "",
        pass: t.pass || "",
        host: t.host,
        port: t.port || "",
        path: t.path || "",
        projectId: t.projectId
    }
}

function lo(t) {
    if (!gt) return !0;
    const {
        port: e,
        projectId: n,
        protocol: r
    } = t;
    return ["protocol", "publicKey", "host", "projectId"].find(o => t[o] ? !1 : (m.error(`Invalid Sentry Dsn: ${o} missing`), !0)) ? !1 : n.match(/^\d+$/) ? uo(r) ? e && isNaN(parseInt(e, 10)) ? (m.error(`Invalid Sentry Dsn: Invalid port ${e}`), !1) : !0 : (m.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1) : (m.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1)
}

function po(t) {
    const e = typeof t == "string" ? fo(t) : ys(t);
    if (!(!e || !lo(e))) return e
}

function mo() {
    const t = typeof WeakSet == "function",
        e = t ? new WeakSet : [];

    function n(s) {
        if (t) return e.has(s) ? !0 : (e.add(s), !1);
        for (let i = 0; i < e.length; i++)
            if (e[i] === s) return !0;
        return e.push(s), !1
    }

    function r(s) {
        if (t) e.delete(s);
        else
            for (let i = 0; i < e.length; i++)
                if (e[i] === s) {
                    e.splice(i, 1);
                    break
                }
    }
    return [n, r]
}

function et(t, e = 100, n = 1 / 0) {
    try {
        return pn("", t, e, n)
    } catch (r) {
        return {
            ERROR: `**non-serializable** (${r})`
        }
    }
}

function Es(t, e = 3, n = 100 * 1024) {
    const r = et(t, e);
    return So(r) > n ? Es(t, e - 1, n) : r
}

function pn(t, e, n = 1 / 0, r = 1 / 0, s = mo()) {
    const [i, o] = s;
    if (e == null || ["boolean", "string"].includes(typeof e) || typeof e == "number" && Number.isFinite(e)) return e;
    const a = ho(t, e);
    if (!a.startsWith("[object ")) return a;
    if (e.__sentry_skip_normalization__) return e;
    const c = typeof e.__sentry_override_normalization_depth__ == "number" ? e.__sentry_override_normalization_depth__ : n;
    if (c === 0) return a.replace("object ", "");
    if (i(e)) return "[Circular ~]";
    const u = e;
    if (u && typeof u.toJSON == "function") try {
        const h = u.toJSON();
        return pn("", h, c - 1, r, s)
    } catch (h) {}
    const l = Array.isArray(e) ? [] : {};
    let d = 0;
    const p = Qr(e);
    for (const h in p) {
        if (!Object.prototype.hasOwnProperty.call(p, h)) continue;
        if (d >= r) {
            l[h] = "[MaxProperties ~]";
            break
        }
        const g = p[h];
        l[h] = pn(h, g, c - 1, r, s), d++
    }
    return o(e), l
}

function ho(t, e) {
    try {
        if (t === "domain" && e && typeof e == "object" && e._events) return "[Domain]";
        if (t === "domainEmitter") return "[DomainEmitter]";
        if (typeof global != "undefined" && e === global) return "[Global]";
        if (typeof window != "undefined" && e === window) return "[Window]";
        if (typeof document != "undefined" && e === document) return "[Document]";
        if (Kr(e)) return "[VueViewModel]";
        if (Si(e)) return "[SyntheticEvent]";
        if (typeof e == "number" && !Number.isFinite(e)) return `[${e}]`;
        if (typeof e == "function") return `[Function: ${it(e)}]`;
        if (typeof e == "symbol") return `[${String(e)}]`;
        if (typeof e == "bigint") return `[BigInt: ${String(e)}]`;
        const n = go(e);
        return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`
    } catch (n) {
        return `**non-serializable** (${n})`
    }
}

function go(t) {
    const e = Object.getPrototypeOf(t);
    return e ? e.constructor.name : "null prototype"
}

function _o(t) {
    return ~-encodeURI(t).split(/%..|./).length
}

function So(t) {
    return _o(JSON.stringify(t))
}

function Xt(t, e = []) {
    return [t, e]
}

function yo(t, e) {
    const [n, r] = t;
    return [n, [...r, e]]
}

function lr(t, e) {
    const n = t[1];
    for (const r of n) {
        const s = r[0].type;
        if (e(r, s)) return !0
    }
    return !1
}

function mn(t) {
    return b.__SENTRY__ && b.__SENTRY__.encodePolyfill ? b.__SENTRY__.encodePolyfill(t) : new TextEncoder().encode(t)
}

function Eo(t) {
    const [e, n] = t;
    let r = JSON.stringify(e);

    function s(i) {
        typeof r == "string" ? r = typeof i == "string" ? r + i : [mn(r), i] : r.push(typeof i == "string" ? mn(i) : i)
    }
    for (const i of n) {
        const [o, a] = i;
        if (s(`
${JSON.stringify(o)}
`), typeof a == "string" || a instanceof Uint8Array) s(a);
        else {
            let c;
            try {
                c = JSON.stringify(a)
            } catch (u) {
                c = JSON.stringify(et(a))
            }
            s(c)
        }
    }
    return typeof r == "string" ? r : bo(r)
}

function bo(t) {
    const e = t.reduce((s, i) => s + i.length, 0),
        n = new Uint8Array(e);
    let r = 0;
    for (const s of t) n.set(s, r), r += s.length;
    return n
}

function To(t) {
    return [{
        type: "span"
    }, t]
}

function Io(t) {
    const e = typeof t.data == "string" ? mn(t.data) : t.data;
    return [L({
        type: "attachment",
        length: e.length,
        filename: t.filename,
        content_type: t.contentType,
        attachment_type: t.attachmentType
    }), e]
}
const vo = {
    session: "session",
    sessions: "session",
    attachment: "attachment",
    transaction: "transaction",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile: "profile",
    profile_chunk: "profile",
    replay_event: "replay",
    replay_recording: "replay",
    check_in: "monitor",
    feedback: "feedback",
    span: "span",
    statsd: "metric_bucket",
    raw_security: "security"
};

function pr(t) {
    return vo[t]
}

function bs(t) {
    if (!t || !t.sdk) return;
    const {
        name: e,
        version: n
    } = t.sdk;
    return {
        name: e,
        version: n
    }
}

function wo(t, e, n, r) {
    const s = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
    return f(f(f({
        event_id: t.event_id,
        sent_at: new Date().toISOString()
    }, e && {
        sdk: e
    }), !!n && r && {
        dsn: ie(r)
    }), s && {
        trace: L(f({}, s))
    })
}

function ko(t, e) {
    return e && (t.sdk = t.sdk || {}, t.sdk.name = t.sdk.name || e.name, t.sdk.version = t.sdk.version || e.version, t.sdk.integrations = [...t.sdk.integrations || [], ...e.integrations || []], t.sdk.packages = [...t.sdk.packages || [], ...e.packages || []]), t
}

function Ro(t, e, n, r) {
    const s = bs(n),
        i = f(f({
            sent_at: new Date().toISOString()
        }, s && {
            sdk: s
        }), !!r && e && {
            dsn: ie(e)
        }),
        o = "aggregates" in t ? [{
            type: "sessions"
        }, t] : [{
            type: "session"
        }, t.toJSON()];
    return Xt(i, [o])
}

function No(t, e, n, r) {
    const s = bs(n),
        i = t.type && t.type !== "replay_event" ? t.type : "event";
    ko(t, n && n.sdk);
    const o = wo(t, s, r, e);
    return delete t.sdkProcessingMetadata, Xt(o, [
        [{
            type: i
        }, t]
    ])
}

function Ao(t, e) {
    function n(l) {
        return !!l.trace_id && !!l.public_key
    }
    const r = zt(t[0]),
        s = e && e.getDsn(),
        i = e && e.getOptions().tunnel,
        o = f(f({
            sent_at: new Date().toISOString()
        }, n(r) && {
            trace: r
        }), !!i && s && {
            dsn: ie(s)
        }),
        a = e && e.getOptions().beforeSendSpan,
        c = a ? l => {
            const d = a(T(l));
            return d || ls(), d
        } : l => T(l),
        u = [];
    for (const l of t) {
        const d = c(l);
        d && u.push(To(d))
    }
    return Xt(o, u)
}

function Co(t, e, n, r = H()) {
    const s = r && F(r);
    s && (y && m.log(`[Measurement] Setting measurement on root span: ${t} = ${e} ${n}`), s.addEvent(t, {
        [qe]: e,
        [je]: n
    }))
}

function mr(t) {
    if (!t || t.length === 0) return;
    const e = {};
    return t.forEach(n => {
        const r = n.attributes || {},
            s = r[je],
            i = r[qe];
        typeof s == "string" && typeof i == "number" && (e[n.name] = {
            value: i,
            unit: s
        })
    }), e
}
const hr = 1e3;
class $n {
    constructor(e = {}) {
        this._traceId = e.traceId || pt(), this._spanId = e.spanId || mt(), this._startTime = e.startTimestamp || U(), this._attributes = {}, this.setAttributes(f({
            [P]: "manual",
            [Nt]: e.op
        }, e.attributes)), this._name = e.name, e.parentSpanId && (this._parentSpanId = e.parentSpanId), "sampled" in e && (this._sampled = e.sampled), e.endTimestamp && (this._endTime = e.endTimestamp), this._events = [], this._isStandaloneSpan = e.isStandalone, this._endTime && this._onSpanEnded()
    }
    addLink(e) {
        return this
    }
    addLinks(e) {
        return this
    }
    recordException(e, n) {}
    spanContext() {
        const {
            _spanId: e,
            _traceId: n,
            _sampled: r
        } = this;
        return {
            spanId: e,
            traceId: n,
            traceFlags: r ? us : cs
        }
    }
    setAttribute(e, n) {
        return n === void 0 ? delete this._attributes[e] : this._attributes[e] = n, this
    }
    setAttributes(e) {
        return Object.keys(e).forEach(n => this.setAttribute(n, e[n])), this
    }
    updateStartTime(e) {
        this._startTime = bt(e)
    }
    setStatus(e) {
        return this._status = e, this
    }
    updateName(e) {
        return this._name = e, this.setAttribute(rt, "custom"), this
    }
    end(e) {
        this._endTime || (this._endTime = bt(e), oo(this), this._onSpanEnded())
    }
    getSpanJSON() {
        return L({
            data: this._attributes,
            description: this._name,
            op: this._attributes[Nt],
            parent_span_id: this._parentSpanId,
            span_id: this._spanId,
            start_timestamp: this._startTime,
            status: ds(this._status),
            timestamp: this._endTime,
            trace_id: this._traceId,
            origin: this._attributes[P],
            _metrics_summary: un(this),
            profile_id: this._attributes[Bi],
            exclusive_time: this._attributes[Dn],
            measurements: mr(this._events),
            is_segment: this._isStandaloneSpan && F(this) === this || void 0,
            segment_id: this._isStandaloneSpan ? F(this).spanContext().spanId : void 0
        })
    }
    isRecording() {
        return !this._endTime && !!this._sampled
    }
    addEvent(e, n, r) {
        y && m.log("[Tracing] Adding an event to span:", e);
        const s = gr(n) ? n : r || U(),
            i = gr(n) ? {} : n || {},
            o = {
                name: e,
                time: bt(s),
                attributes: i
            };
        return this._events.push(o), this
    }
    isStandaloneSpan() {
        return !!this._isStandaloneSpan
    }
    _onSpanEnded() {
        const e = I();
        if (e && e.emit("spanEnd", this), !(this._isStandaloneSpan || this === F(this))) return;
        if (this._isStandaloneSpan) {
            this._sampled ? xo(Ao([this], e)) : (y && m.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."), e && e.recordDroppedEvent("sample_rate", "span"));
            return
        }
        const r = this._convertSpanToTransaction();
        r && (dr(this).scope || R()).captureEvent(r)
    }
    _convertSpanToTransaction() {
        if (!_r(T(this))) return;
        this._name || (y && m.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>");
        const {
            scope: e,
            isolationScope: n
        } = dr(this), s = (e || R()).getClient() || I();
        if (this._sampled !== !0) {
            y && m.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."), s && s.recordDroppedEvent("sample_rate", "transaction");
            return
        }
        const o = Re(this).filter(d => d !== this && !Oo(d)).map(d => T(d)).filter(_r),
            a = this._attributes[rt];
        delete this._attributes[ir], o.forEach(d => {
            d.data && delete d.data[ir]
        });
        const c = f({
                contexts: {
                    trace: Ji(this)
                },
                spans: o.length > hr ? o.sort((d, p) => d.start_timestamp - p.start_timestamp).slice(0, hr) : o,
                start_timestamp: this._startTime,
                timestamp: this._endTime,
                transaction: this._name,
                type: "transaction",
                sdkProcessingMetadata: f({
                    capturedSpanScope: e,
                    capturedSpanIsolationScope: n
                }, L({
                    dynamicSamplingContext: zt(this)
                })),
                _metrics_summary: un(this)
            }, a && {
                transaction_info: {
                    source: a
                }
            }),
            u = mr(this._events);
        return u && Object.keys(u).length && (y && m.log("[Measurements] Adding measurements to transaction event", JSON.stringify(u, void 0, 2)), c.measurements = u), c
    }
}

function gr(t) {
    return t && typeof t == "number" || t instanceof Date || Array.isArray(t)
}

function _r(t) {
    return !!t.start_timestamp && !!t.timestamp && !!t.span_id && !!t.trace_id
}

function Oo(t) {
    return t instanceof $n && t.isStandaloneSpan()
}

function xo(t) {
    const e = I();
    if (!e) return;
    const n = t[1];
    if (!n || n.length === 0) {
        e.recordDroppedEvent("before_send", "span");
        return
    }
    e.sendEnvelope(t)
}
const Ts = "__SENTRY_SUPPRESS_TRACING__";

function oe(t) {
    const e = vs();
    if (e.startInactiveSpan) return e.startInactiveSpan(t);
    const n = Do(t),
        {
            forceTransaction: r,
            parentSpan: s
        } = t;
    return (t.scope ? o => Pn(t.scope, o) : s !== void 0 ? o => Is(s, o) : o => o())(() => {
        const o = R(),
            a = Mo(o);
        return t.onlyIfParent && !a ? new Yt : Po({
            parentSpan: a,
            spanArguments: n,
            forceTransaction: r,
            scope: o
        })
    })
}

function Is(t, e) {
    const n = vs();
    return n.withActiveSpan ? n.withActiveSpan(t, e) : Pn(r => (ne(r, t || void 0), e(r)))
}

function Po({
    parentSpan: t,
    spanArguments: e,
    forceTransaction: n,
    scope: r
}) {
    if (!ht()) return new Yt;
    const s = ct();
    let i;
    if (t && !n) i = Lo(t, r, e), fs(t, i);
    else if (t) {
        const o = zt(t),
            {
                traceId: a,
                spanId: c
            } = t.spanContext(),
            u = xt(t);
        i = Sr(f({
            traceId: a,
            parentSpanId: c
        }, e), r, u), fr(i, o)
    } else {
        const {
            traceId: o,
            dsc: a,
            parentSpanId: c,
            sampled: u
        } = f(f({}, s.getPropagationContext()), r.getPropagationContext());
        i = Sr(f({
            traceId: o,
            parentSpanId: c
        }, e), r, u), a && fr(i, a)
    }
    return io(i), so(i, r, s), i
}

function Do(t) {
    const e = t.experimental || {},
        n = f({
            isStandalone: e.standalone
        }, t);
    if (t.startTime) {
        const r = f({}, n);
        return r.startTimestamp = bt(t.startTime), delete r.startTime, r
    }
    return n
}

function vs() {
    const t = Ot();
    return Wt(t)
}

function Sr(t, e, n) {
    const r = I(),
        s = r && r.getOptions() || {},
        {
            name: i = "",
            attributes: o
        } = t,
        [a, c] = e.getScopeData().sdkProcessingMetadata[Ts] ? [!1] : ao(s, {
            name: i,
            parentSampled: n,
            attributes: o,
            transactionContext: {
                name: i,
                parentSampled: n
            }
        }),
        u = new $n(w(f({}, t), {
            attributes: f({
                [rt]: "custom"
            }, t.attributes),
            sampled: a
        }));
    return c !== void 0 && u.setAttribute(ns, c), r && r.emit("spanStart", u), u
}

function Lo(t, e, n) {
    const {
        spanId: r,
        traceId: s
    } = t.spanContext(), i = e.getScopeData().sdkProcessingMetadata[Ts] ? !1 : xt(t), o = i ? new $n(w(f({}, n), {
        parentSpanId: r,
        traceId: s,
        sampled: i
    })) : new Yt({
        traceId: s
    });
    fs(t, o);
    const a = I();
    return a && (a.emit("spanStart", o), n.endTimestamp && a.emit("spanEnd", o)), o
}

function Mo(t) {
    const e = De(t);
    if (!e) return;
    const n = I();
    return (n ? n.getOptions() : {}).parentSpanIsAlwaysRootSpan ? F(e) : e
}
const Ne = {
        idleTimeout: 1e3,
        finalTimeout: 3e4,
        childSpanTimeout: 15e3
    },
    $o = "heartbeatFailed",
    Fo = "idleTimeout",
    Ho = "finalTimeout",
    Uo = "externalFinish";

function ws(t, e = {}) {
    const n = new Map;
    let r = !1,
        s, i = Uo,
        o = !e.disableAutoFinish;
    const a = [],
        {
            idleTimeout: c = Ne.idleTimeout,
            finalTimeout: u = Ne.finalTimeout,
            childSpanTimeout: l = Ne.childSpanTimeout,
            beforeSpanEnd: d
        } = e,
        p = I();
    if (!p || !ht()) return new Yt;
    const h = R(),
        g = H(),
        v = Bo(t);
    v.end = new Proxy(v.end, {
        apply(E, C, W) {
            d && d(v);
            const [O, ...$] = W, q = O || U(), k = bt(q), Dt = Re(v).filter(ft => ft !== v);
            if (!Dt.length) return M(k), Reflect.apply(E, C, [k, ...$]);
            const le = Dt.map(ft => T(ft).timestamp).filter(ft => !!ft),
                pe = le.length ? Math.max(...le) : void 0,
                Lt = T(v).start_timestamp,
                me = Math.min(Lt ? Lt + u / 1e3 : 1 / 0, Math.max(Lt || -1 / 0, Math.min(k, pe || 1 / 0)));
            return M(me), Reflect.apply(E, C, [me, ...$])
        }
    });

    function A() {
        s && (clearTimeout(s), s = void 0)
    }

    function J(E) {
        A(), s = setTimeout(() => {
            !r && n.size === 0 && o && (i = Fo, v.end(E))
        }, c)
    }

    function ut(E) {
        s = setTimeout(() => {
            !r && o && (i = $o, v.end(E))
        }, l)
    }

    function dt(E) {
        A(), n.set(E, !0);
        const C = U();
        ut(C + l / 1e3)
    }

    function fe(E) {
        if (n.has(E) && n.delete(E), n.size === 0) {
            const C = U();
            J(C + c / 1e3)
        }
    }

    function M(E) {
        r = !0, n.clear(), a.forEach(k => k()), ne(h, g);
        const C = T(v),
            {
                start_timestamp: W
            } = C;
        if (!W) return;
        (C.data || {})[dn] || v.setAttribute(dn, i), m.log(`[Tracing] Idle span "${C.op}" finished`);
        const $ = Re(v).filter(k => k !== v);
        let q = 0;
        $.forEach(k => {
            k.isRecording() && (k.setStatus({
                code: x,
                message: "cancelled"
            }), k.end(E), y && m.log("[Tracing] Cancelling span since span ended early", JSON.stringify(k, void 0, 2)));
            const Dt = T(k),
                {
                    timestamp: le = 0,
                    start_timestamp: pe = 0
                } = Dt,
                Lt = pe <= E,
                me = (u + c) / 1e3,
                ft = le - pe <= me;
            if (y) {
                const Gn = JSON.stringify(k, void 0, 2);
                Lt ? ft || m.log("[Tracing] Discarding span since it finished after idle span final timeout", Gn) : m.log("[Tracing] Discarding span since it happened after idle span was finished", Gn)
            }(!ft || !Lt) && (no(v, k), q++)
        }), q > 0 && v.setAttribute("sentry.idle_span_discarded_spans", q)
    }
    return a.push(p.on("spanStart", E => {
        if (r || E === v || T(E).timestamp) return;
        Re(v).includes(E) && dt(E.spanContext().spanId)
    })), a.push(p.on("spanEnd", E => {
        r || fe(E.spanContext().spanId)
    })), a.push(p.on("idleSpanEnableAutoFinish", E => {
        E === v && (o = !0, J(), n.size && ut())
    })), e.disableAutoFinish || J(), setTimeout(() => {
        r || (v.setStatus({
            code: x,
            message: "deadline_exceeded"
        }), i = Ho, v.end())
    }, u), v
}

function Bo(t) {
    const e = oe(t);
    return ne(R(), e), y && m.log("[Tracing] Started span is an idle span"), e
}

function hn(t, e, n, r = 0) {
    return new Y((s, i) => {
        const o = t[r];
        if (e === null || typeof o != "function") s(e);
        else {
            const a = o(f({}, e), n);
            y && o.id && a === null && m.log(`Event processor "${o.id}" dropped event`), Ue(a) ? a.then(c => hn(t, c, n, r + 1).then(s)).then(null, i) : hn(t, a, n, r + 1).then(s).then(null, i)
        }
    })
}
let _e, yr, Se;

function jo(t) {
    const e = b._sentryDebugIds;
    if (!e) return {};
    const n = Object.keys(e);
    return Se && n.length === yr || (yr = n.length, Se = n.reduce((r, s) => {
        _e || (_e = {});
        const i = _e[s];
        if (i) r[i[0]] = i[1];
        else {
            const o = t(s);
            for (let a = o.length - 1; a >= 0; a--) {
                const c = o[a],
                    u = c && c.filename,
                    l = e[s];
                if (u && l) {
                    r[u] = l, _e[s] = [u, l];
                    break
                }
            }
        }
        return r
    }, {})), Se
}

function qo(t, e) {
    const {
        fingerprint: n,
        span: r,
        breadcrumbs: s,
        sdkProcessingMetadata: i
    } = e;
    Go(t, e), r && zo(t, r), Xo(t, n), Wo(t, s), Yo(t, i)
}

function Er(t, e) {
    const {
        extra: n,
        tags: r,
        user: s,
        contexts: i,
        level: o,
        sdkProcessingMetadata: a,
        breadcrumbs: c,
        fingerprint: u,
        eventProcessors: l,
        attachments: d,
        propagationContext: p,
        transactionName: h,
        span: g
    } = e;
    ye(t, "extra", n), ye(t, "tags", r), ye(t, "user", s), ye(t, "contexts", i), t.sdkProcessingMetadata = Be(t.sdkProcessingMetadata, a, 2), o && (t.level = o), h && (t.transactionName = h), g && (t.span = g), c.length && (t.breadcrumbs = [...t.breadcrumbs, ...c]), u.length && (t.fingerprint = [...t.fingerprint, ...u]), l.length && (t.eventProcessors = [...t.eventProcessors, ...l]), d.length && (t.attachments = [...t.attachments, ...d]), t.propagationContext = f(f({}, t.propagationContext), p)
}

function ye(t, e, n) {
    t[e] = Be(t[e], n, 1)
}

function Go(t, e) {
    const {
        extra: n,
        tags: r,
        user: s,
        contexts: i,
        level: o,
        transactionName: a
    } = e, c = L(n);
    c && Object.keys(c).length && (t.extra = f(f({}, c), t.extra));
    const u = L(r);
    u && Object.keys(u).length && (t.tags = f(f({}, u), t.tags));
    const l = L(s);
    l && Object.keys(l).length && (t.user = f(f({}, l), t.user));
    const d = L(i);
    d && Object.keys(d).length && (t.contexts = f(f({}, d), t.contexts)), o && (t.level = o), a && t.type !== "transaction" && (t.transaction = a)
}

function Wo(t, e) {
    const n = [...t.breadcrumbs || [], ...e];
    t.breadcrumbs = n.length ? n : void 0
}

function Yo(t, e) {
    t.sdkProcessingMetadata = f(f({}, t.sdkProcessingMetadata), e)
}

function zo(t, e) {
    t.contexts = f({
        trace: Zi(e)
    }, t.contexts), t.sdkProcessingMetadata = f({
        dynamicSamplingContext: zt(e)
    }, t.sdkProcessingMetadata);
    const n = F(e),
        r = T(n).description;
    r && !t.transaction && t.type === "transaction" && (t.transaction = r)
}

function Xo(t, e) {
    t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [], e && (t.fingerprint = t.fingerprint.concat(e)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
}

function Vo(t, e, n, r, s, i) {
    const {
        normalizeDepth: o = 3,
        normalizeMaxBreadth: a = 1e3
    } = t, c = w(f({}, e), {
        event_id: e.event_id || n.event_id || X(),
        timestamp: e.timestamp || se()
    }), u = n.integrations || t.integrations.map(A => A.name);
    Ko(c, t), Qo(c, u), s && s.emit("applyFrameMetadata", e), e.type === void 0 && Jo(c, t.stackParser);
    const l = ea(r, n.captureContext);
    n.mechanism && Ut(c, n.mechanism);
    const d = s ? s.getEventProcessors() : [],
        p = Fi().getScopeData();
    if (i) {
        const A = i.getScopeData();
        Er(p, A)
    }
    if (l) {
        const A = l.getScopeData();
        Er(p, A)
    }
    const h = [...n.attachments || [], ...p.attachments];
    h.length && (n.attachments = h), qo(c, p);
    const g = [...d, ...p.eventProcessors];
    return hn(g, c, n).then(A => (A && Zo(A), typeof o == "number" && o > 0 ? ta(A, o, a) : A))
}

function Ko(t, e) {
    const {
        environment: n,
        release: r,
        dist: s,
        maxValueLength: i = 250
    } = e;
    t.environment = t.environment || n || Mn, !t.release && r && (t.release = r), !t.dist && s && (t.dist = s), t.message && (t.message = Ft(t.message, i));
    const o = t.exception && t.exception.values && t.exception.values[0];
    o && o.value && (o.value = Ft(o.value, i));
    const a = t.request;
    a && a.url && (a.url = Ft(a.url, i))
}

function Jo(t, e) {
    const n = jo(e);
    try {
        t.exception.values.forEach(r => {
            r.stacktrace.frames.forEach(s => {
                n && s.filename && (s.debug_id = n[s.filename])
            })
        })
    } catch (r) {}
}

function Zo(t) {
    const e = {};
    try {
        t.exception.values.forEach(r => {
            r.stacktrace.frames.forEach(s => {
                s.debug_id && (s.abs_path ? e[s.abs_path] = s.debug_id : s.filename && (e[s.filename] = s.debug_id), delete s.debug_id)
            })
        })
    } catch (r) {}
    if (Object.keys(e).length === 0) return;
    t.debug_meta = t.debug_meta || {}, t.debug_meta.images = t.debug_meta.images || [];
    const n = t.debug_meta.images;
    Object.entries(e).forEach(([r, s]) => {
        n.push({
            type: "sourcemap",
            code_file: r,
            debug_id: s
        })
    })
}

function Qo(t, e) {
    e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [...t.sdk.integrations || [], ...e])
}

function ta(t, e, n) {
    if (!t) return null;
    const r = f(f(f(f(f({}, t), t.breadcrumbs && {
        breadcrumbs: t.breadcrumbs.map(s => f(f({}, s), s.data && {
            data: et(s.data, e, n)
        }))
    }), t.user && {
        user: et(t.user, e, n)
    }), t.contexts && {
        contexts: et(t.contexts, e, n)
    }), t.extra && {
        extra: et(t.extra, e, n)
    });
    return t.contexts && t.contexts.trace && r.contexts && (r.contexts.trace = t.contexts.trace, t.contexts.trace.data && (r.contexts.trace.data = et(t.contexts.trace.data, e, n))), t.spans && (r.spans = t.spans.map(s => f(f({}, s), s.data && {
        data: et(s.data, e, n)
    }))), t.contexts && t.contexts.flags && r.contexts && (r.contexts.flags = et(t.contexts.flags, 3, n)), r
}

function ea(t, e) {
    if (!e) return t;
    const n = t ? t.clone() : new Rt;
    return n.update(e), n
}

function na(t, e) {
    return R().captureException(t, void 0)
}

function ks(t, e) {
    return R().captureEvent(t, e)
}

function ra(t, e) {
    ct().setContext(t, e)
}

function sa() {
    const t = I();
    return !!t && t.getOptions().enabled !== !1 && !!t.getTransport()
}

function br(t) {
    const e = I(),
        n = ct(),
        r = R(),
        {
            release: s,
            environment: i = Mn
        } = e && e.getOptions() || {},
        {
            userAgent: o
        } = b.navigator || {},
        a = Ni(f(f({
            release: s,
            environment: i,
            user: r.getUser() || n.getUser()
        }, o && {
            userAgent: o
        }), t)),
        c = n.getSession();
    return c && c.status === "ok" && Bt(c, {
        status: "exited"
    }), Rs(), n.setSession(a), r.setSession(a), a
}

function Rs() {
    const t = ct(),
        e = R(),
        n = e.getSession() || t.getSession();
    n && Ai(n), Ns(), t.setSession(), e.setSession()
}

function Ns() {
    const t = ct(),
        e = R(),
        n = I(),
        r = e.getSession() || t.getSession();
    r && n && n.captureSession(r)
}

function Tr(t = !1) {
    if (t) {
        Rs();
        return
    }
    Ns()
}
const ia = "7";

function oa(t) {
    const e = t.protocol ? `${t.protocol}:` : "",
        n = t.port ? `:${t.port}` : "";
    return `${e}//${t.host}${n}${t.path?`/${t.path}`:""}/api/`
}

function aa(t) {
    return `${oa(t)}${t.projectId}/envelope/`
}

function ca(t, e) {
    const n = {
        sentry_version: ia
    };
    return t.publicKey && (n.sentry_key = t.publicKey), e && (n.sentry_client = `${e.name}/${e.version}`), new URLSearchParams(n).toString()
}

function ua(t, e, n) {
    return e || `${aa(t)}?${ca(t,n)}`
}
const Ir = [];

function da(t) {
    const e = {};
    return t.forEach(n => {
        const {
            name: r
        } = n, s = e[r];
        s && !s.isDefaultInstance && n.isDefaultInstance || (e[r] = n)
    }), Object.values(e)
}

function fa(t) {
    const e = t.defaultIntegrations || [],
        n = t.integrations;
    e.forEach(o => {
        o.isDefaultInstance = !0
    });
    let r;
    if (Array.isArray(n)) r = [...e, ...n];
    else if (typeof n == "function") {
        const o = n(e);
        r = Array.isArray(o) ? o : [o]
    } else r = e;
    const s = da(r),
        i = s.findIndex(o => o.name === "Debug");
    if (i > -1) {
        const [o] = s.splice(i, 1);
        s.push(o)
    }
    return s
}

function la(t, e) {
    const n = {};
    return e.forEach(r => {
        r && As(t, r, n)
    }), n
}

function vr(t, e) {
    for (const n of e) n && n.afterAllSetup && n.afterAllSetup(t)
}

function As(t, e, n) {
    if (n[e.name]) {
        y && m.log(`Integration skipped because it was already installed: ${e.name}`);
        return
    }
    if (n[e.name] = e, Ir.indexOf(e.name) === -1 && typeof e.setupOnce == "function" && (e.setupOnce(), Ir.push(e.name)), e.setup && typeof e.setup == "function" && e.setup(t), typeof e.preprocessEvent == "function") {
        const r = e.preprocessEvent.bind(e);
        t.on("preprocessEvent", (s, i) => r(s, i, t))
    }
    if (typeof e.processEvent == "function") {
        const r = e.processEvent.bind(e),
            s = Object.assign((i, o) => r(i, o, t), {
                id: e.name
            });
        t.addEventProcessor(s)
    }
    y && m.log(`Integration installed: ${e.name}`)
}

function pa(t, e, n) {
    const r = [{
        type: "client_report"
    }, {
        timestamp: se(),
        discarded_events: t
    }];
    return Xt(e ? {
        dsn: e
    } : {}, [r])
}
class K extends Error {
    constructor(e, n = "warn") {
        super(e), this.message = e, this.logLevel = n
    }
}
const wr = "Not capturing exception because it's already been captured.";
class ma {
    constructor(e) {
        if (this._options = e, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], e.dsn ? this._dsn = po(e.dsn) : y && m.warn("No DSN provided, client will not send events."), this._dsn) {
            const s = ua(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
            this._transport = e.transport(w(f({
                tunnel: this._options.tunnel,
                recordDroppedEvent: this.recordDroppedEvent.bind(this)
            }, e.transportOptions), {
                url: s
            }))
        }
        const r = ["enableTracing", "tracesSampleRate", "tracesSampler"].find(s => s in e && e[s] == null);
        r && Ct(() => {
            console.warn(`[Sentry] Deprecation warning: \`${r}\` is set to undefined, which leads to tracing being enabled. In v9, a value of \`undefined\` will result in tracing being disabled.`)
        })
    }
    captureException(e, n, r) {
        const s = X();
        if (rr(e)) return y && m.log(wr), s;
        const i = f({
            event_id: s
        }, n);
        return this._process(this.eventFromException(e, i).then(o => this._captureEvent(o, i, r))), i.event_id
    }
    captureMessage(e, n, r, s) {
        const i = f({
                event_id: X()
            }, r),
            o = An(e) ? e : String(e),
            a = Cn(e) ? this.eventFromMessage(o, n, i) : this.eventFromException(e, i);
        return this._process(a.then(c => this._captureEvent(c, i, s))), i.event_id
    }
    captureEvent(e, n, r) {
        const s = X();
        if (n && n.originalException && rr(n.originalException)) return y && m.log(wr), s;
        const i = f({
                event_id: s
            }, n),
            a = (e.sdkProcessingMetadata || {}).capturedSpanScope;
        return this._process(this._captureEvent(e, i, a || r)), i.event_id
    }
    captureSession(e) {
        typeof e.release != "string" ? y && m.warn("Discarded session because of missing or non-string release") : (this.sendSession(e), Bt(e, {
            init: !1
        }))
    }
    getDsn() {
        return this._dsn
    }
    getOptions() {
        return this._options
    }
    getSdkMetadata() {
        return this._options._metadata
    }
    getTransport() {
        return this._transport
    }
    flush(e) {
        const n = this._transport;
        return n ? (this.emit("flush"), this._isClientDoneProcessing(e).then(r => n.flush(e).then(s => r && s))) : kt(!0)
    }
    close(e) {
        return this.flush(e).then(n => (this.getOptions().enabled = !1, this.emit("close"), n))
    }
    getEventProcessors() {
        return this._eventProcessors
    }
    addEventProcessor(e) {
        this._eventProcessors.push(e)
    }
    init() {
        (this._isEnabled() || this._options.integrations.some(({
            name: e
        }) => e.startsWith("Spotlight"))) && this._setupIntegrations()
    }
    getIntegrationByName(e) {
        return this._integrations[e]
    }
    addIntegration(e) {
        const n = this._integrations[e.name];
        As(this, e, this._integrations), n || vr(this, [e])
    }
    sendEvent(e, n = {}) {
        this.emit("beforeSendEvent", e, n);
        let r = No(e, this._dsn, this._options._metadata, this._options.tunnel);
        for (const i of n.attachments || []) r = yo(r, Io(i));
        const s = this.sendEnvelope(r);
        s && s.then(i => this.emit("afterSendEvent", e, i), null)
    }
    sendSession(e) {
        const n = Ro(e, this._dsn, this._options._metadata, this._options.tunnel);
        this.sendEnvelope(n)
    }
    recordDroppedEvent(e, n, r) {
        if (this._options.sendClientReports) {
            const s = typeof r == "number" ? r : 1,
                i = `${e}:${n}`;
            y && m.log(`Recording outcome: "${i}"${s>1?` (${s} times)`:""}`), this._outcomes[i] = (this._outcomes[i] || 0) + s
        }
    }
    on(e, n) {
        const r = this._hooks[e] = this._hooks[e] || [];
        return r.push(n), () => {
            const s = r.indexOf(n);
            s > -1 && r.splice(s, 1)
        }
    }
    emit(e, ...n) {
        const r = this._hooks[e];
        r && r.forEach(s => s(...n))
    }
    sendEnvelope(e) {
        return this.emit("beforeEnvelope", e), this._isEnabled() && this._transport ? this._transport.send(e).then(null, n => (y && m.error("Error while sending envelope:", n), n)) : (y && m.error("Transport disabled"), kt({}))
    }
    _setupIntegrations() {
        const {
            integrations: e
        } = this._options;
        this._integrations = la(this, e), vr(this, e)
    }
    _updateSessionFromEvent(e, n) {
        let r = n.level === "fatal",
            s = !1;
        const i = n.exception && n.exception.values;
        if (i) {
            s = !0;
            for (const c of i) {
                const u = c.mechanism;
                if (u && u.handled === !1) {
                    r = !0;
                    break
                }
            }
        }
        const o = e.status === "ok";
        (o && e.errors === 0 || o && r) && (Bt(e, w(f({}, r && {
            status: "crashed"
        }), {
            errors: e.errors || Number(s || r)
        })), this.captureSession(e))
    }
    _isClientDoneProcessing(e) {
        return new Y(n => {
            let r = 0;
            const s = 1,
                i = setInterval(() => {
                    this._numProcessing == 0 ? (clearInterval(i), n(!0)) : (r += s, e && r >= e && (clearInterval(i), n(!1)))
                }, s)
        })
    }
    _isEnabled() {
        return this.getOptions().enabled !== !1 && this._transport !== void 0
    }
    _prepareEvent(e, n, r = R(), s = ct()) {
        const i = this.getOptions(),
            o = Object.keys(this._integrations);
        return !n.integrations && o.length > 0 && (n.integrations = o), this.emit("preprocessEvent", e, n), e.type || s.setLastEventId(e.event_id || n.event_id), Vo(i, e, n, r, this, s).then(a => {
            if (a === null) return a;
            a.contexts = f({
                trace: Hi(r)
            }, a.contexts);
            const c = _s(this, r);
            return a.sdkProcessingMetadata = f({
                dynamicSamplingContext: c
            }, a.sdkProcessingMetadata), a
        })
    }
    _captureEvent(e, n = {}, r) {
        return this._processEvent(e, n, r).then(s => s.event_id, s => {
            y && (s instanceof K && s.logLevel === "log" ? m.log(s.message) : m.warn(s))
        })
    }
    _processEvent(e, n, r) {
        const s = this.getOptions(),
            {
                sampleRate: i
            } = s,
            o = Os(e),
            a = Cs(e),
            c = e.type || "error",
            u = `before send for type \`${c}\``,
            l = typeof i == "undefined" ? void 0 : Ss(i);
        if (a && typeof l == "number" && Math.random() > l) return this.recordDroppedEvent("sample_rate", "error", e), Pe(new K(`Discarding event because it's not included in the random sample (sampling rate = ${i})`, "log"));
        const d = c === "replay_event" ? "replay" : c,
            h = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
        return this._prepareEvent(e, n, r, h).then(g => {
            if (g === null) throw this.recordDroppedEvent("event_processor", d, e), new K("An event processor returned `null`, will not send event.", "log");
            if (n.data && n.data.__sentry__ === !0) return g;
            const A = ga(this, s, g, n);
            return ha(A, u)
        }).then(g => {
            if (g === null) {
                if (this.recordDroppedEvent("before_send", d, e), o) {
                    const ut = 1 + (e.spans || []).length;
                    this.recordDroppedEvent("before_send", "span", ut)
                }
                throw new K(`${u} returned \`null\`, will not send event.`, "log")
            }
            const v = r && r.getSession();
            if (!o && v && this._updateSessionFromEvent(v, g), o) {
                const J = g.sdkProcessingMetadata && g.sdkProcessingMetadata.spanCountBeforeProcessing || 0,
                    ut = g.spans ? g.spans.length : 0,
                    dt = J - ut;
                dt > 0 && this.recordDroppedEvent("before_send", "span", dt)
            }
            const A = g.transaction_info;
            if (o && A && g.transaction !== e.transaction) {
                const J = "custom";
                g.transaction_info = w(f({}, A), {
                    source: J
                })
            }
            return this.sendEvent(g, n), g
        }).then(null, g => {
            throw g instanceof K ? g : (this.captureException(g, {
                data: {
                    __sentry__: !0
                },
                originalException: g
            }), new K(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${g}`))
        })
    }
    _process(e) {
        this._numProcessing++, e.then(n => (this._numProcessing--, n), n => (this._numProcessing--, n))
    }
    _clearOutcomes() {
        const e = this._outcomes;
        return this._outcomes = {}, Object.entries(e).map(([n, r]) => {
            const [s, i] = n.split(":");
            return {
                reason: s,
                category: i,
                quantity: r
            }
        })
    }
    _flushOutcomes() {
        y && m.log("Flushing outcomes...");
        const e = this._clearOutcomes();
        if (e.length === 0) {
            y && m.log("No outcomes to send");
            return
        }
        if (!this._dsn) {
            y && m.log("No dsn provided, will not send outcomes");
            return
        }
        y && m.log("Sending outcomes:", e);
        const n = pa(e, this._options.tunnel && ie(this._dsn));
        this.sendEnvelope(n)
    }
}

function ha(t, e) {
    const n = `${e} must return \`null\` or a valid event.`;
    if (Ue(t)) return t.then(r => {
        if (!Ht(r) && r !== null) throw new K(n);
        return r
    }, r => {
        throw new K(`${e} rejected with ${r}`)
    });
    if (!Ht(t) && t !== null) throw new K(n);
    return t
}

function ga(t, e, n, r) {
    const {
        beforeSend: s,
        beforeSendTransaction: i,
        beforeSendSpan: o
    } = e;
    if (Cs(n) && s) return s(n, r);
    if (Os(n)) {
        if (n.spans && o) {
            const a = [];
            for (const c of n.spans) {
                const u = o(c);
                u ? a.push(u) : (ls(), t.recordDroppedEvent("before_send", "span"))
            }
            n.spans = a
        }
        if (i) {
            if (n.spans) {
                const a = n.spans.length;
                n.sdkProcessingMetadata = w(f({}, n.sdkProcessingMetadata), {
                    spanCountBeforeProcessing: a
                })
            }
            return i(n, r)
        }
    }
    return n
}

function Cs(t) {
    return t.type === void 0
}

function Os(t) {
    return t.type === "transaction"
}

function _a(t, e) {
    e.debug === !0 && (y ? m.enable() : Ct(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
    })), R().update(e.initialScope);
    const r = new t(e);
    return Sa(r), r.init(), r
}

function Sa(t) {
    R().setClient(t)
}

function ya(t) {
    const e = [];

    function n() {
        return t === void 0 || e.length < t
    }

    function r(o) {
        return e.splice(e.indexOf(o), 1)[0] || Promise.resolve(void 0)
    }

    function s(o) {
        if (!n()) return Pe(new K("Not adding Promise because buffer limit was reached."));
        const a = o();
        return e.indexOf(a) === -1 && e.push(a), a.then(() => r(a)).then(null, () => r(a).then(null, () => {})), a
    }

    function i(o) {
        return new Y((a, c) => {
            let u = e.length;
            if (!u) return a(!0);
            const l = setTimeout(() => {
                o && o > 0 && a(!1)
            }, o);
            e.forEach(d => {
                kt(d).then(() => {
                    --u || (clearTimeout(l), a(!0))
                }, c)
            })
        })
    }
    return {
        $: e,
        add: s,
        drain: i
    }
}
const Ea = 60 * 1e3;

function ba(t, e = Date.now()) {
    const n = parseInt(`${t}`, 10);
    if (!isNaN(n)) return n * 1e3;
    const r = Date.parse(`${t}`);
    return isNaN(r) ? Ea : r - e
}

function Ta(t, e) {
    return t[e] || t.all || 0
}

function Ia(t, e, n = Date.now()) {
    return Ta(t, e) > n
}

function va(t, {
    statusCode: e,
    headers: n
}, r = Date.now()) {
    const s = f({}, t),
        i = n && n["x-sentry-rate-limits"],
        o = n && n["retry-after"];
    if (i)
        for (const a of i.trim().split(",")) {
            const [c, u, , , l] = a.split(":", 5), d = parseInt(c, 10), p = (isNaN(d) ? 60 : d) * 1e3;
            if (!u) s.all = r + p;
            else
                for (const h of u.split(";")) h === "metric_bucket" ? (!l || l.split(";").includes("custom")) && (s[h] = r + p) : s[h] = r + p
        } else o ? s.all = r + ba(o, r) : e === 429 && (s.all = r + 60 * 1e3);
    return s
}
const wa = 64;

function ka(t, e, n = ya(t.bufferSize || wa)) {
    let r = {};
    const s = o => n.drain(o);

    function i(o) {
        const a = [];
        if (lr(o, (d, p) => {
                const h = pr(p);
                if (Ia(r, h)) {
                    const g = kr(d, p);
                    t.recordDroppedEvent("ratelimit_backoff", h, g)
                } else a.push(d)
            }), a.length === 0) return kt({});
        const c = Xt(o[0], a),
            u = d => {
                lr(c, (p, h) => {
                    const g = kr(p, h);
                    t.recordDroppedEvent(d, pr(h), g)
                })
            },
            l = () => e({
                body: Eo(c)
            }).then(d => (d.statusCode !== void 0 && (d.statusCode < 200 || d.statusCode >= 300) && y && m.warn(`Sentry responded with status code ${d.statusCode} to sent event.`), r = va(r, d), d), d => {
                throw u("network_error"), d
            });
        return n.add(l).then(d => d, d => {
            if (d instanceof K) return y && m.error("Skipped sending event because buffer is full."), u("queue_overflow"), kt({});
            throw d
        })
    }
    return {
        send: i,
        flush: s
    }
}

function kr(t, e) {
    if (!(e !== "event" && e !== "transaction")) return Array.isArray(t) ? t[1] : void 0
}

function xs(t, e, n = [e], r = "npm") {
    const s = t._metadata || {};
    s.sdk || (s.sdk = {
        name: `sentry.javascript.${e}`,
        packages: n.map(i => ({
            name: `${r}:@sentry/${i}`,
            version: yt
        })),
        version: yt
    }), t._metadata = s
}

function Ps(t = {}) {
    const e = I();
    if (!sa() || !e) return {};
    const n = Ot(),
        r = Wt(n);
    if (r.getTraceData) return r.getTraceData(t);
    const s = R(),
        i = t.span || H(),
        o = i ? Qi(i) : Ra(s),
        a = i ? zt(i) : _s(e, s),
        c = Yi(a);
    return os.test(o) ? {
        "sentry-trace": o,
        baggage: c
    } : (m.warn("Invalid sentry-trace data. Cannot generate trace data"), {})
}

function Ra(t) {
    const {
        traceId: e,
        sampled: n,
        spanId: r
    } = t.getPropagationContext();
    return as(e, r, n)
}
const Na = 100;

function At(t, e) {
    const n = I(),
        r = ct();
    if (!n) return;
    const {
        beforeBreadcrumb: s = null,
        maxBreadcrumbs: i = Na
    } = n.getOptions();
    if (i <= 0) return;
    const o = se(),
        a = f({
            timestamp: o
        }, t),
        c = s ? Ct(() => s(a, e)) : a;
    c !== null && (n.emit && n.emit("beforeAddBreadcrumb", c, e), r.addBreadcrumb(c, i))
}
let Rr;
const Aa = "FunctionToString",
    Nr = new WeakMap,
    Ca = () => ({
        name: Aa,
        setupOnce() {
            Rr = Function.prototype.toString;
            try {
                Function.prototype.toString = function(...t) {
                    const e = On(this),
                        n = Nr.has(I()) && e !== void 0 ? e : this;
                    return Rr.apply(n, t)
                }
            } catch (t) {}
        },
        setup(t) {
            Nr.set(t, !0)
        }
    }),
    Oa = Ca,
    xa = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, "undefined is not an object (evaluating 'a.L')", `can't redefine non-configurable property "solana"`, "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler", /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/],
    Pa = "InboundFilters",
    Da = (t = {}) => ({
        name: Pa,
        processEvent(e, n, r) {
            const s = r.getOptions(),
                i = Ma(t, s);
            return $a(e, i) ? null : e
        }
    }),
    La = Da;

function Ma(t = {}, e = {}) {
    return {
        allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
        denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
        ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ...t.disableErrorDefaults ? [] : xa],
        ignoreTransactions: [...t.ignoreTransactions || [], ...e.ignoreTransactions || []],
        ignoreInternal: t.ignoreInternal !== void 0 ? t.ignoreInternal : !0
    }
}

function $a(t, e) {
    return e.ignoreInternal && qa(t) ? (y && m.warn(`Event dropped due to being internal Sentry Error.
Event: ${lt(t)}`), !0) : Fa(t, e.ignoreErrors) ? (y && m.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${lt(t)}`), !0) : Wa(t) ? (y && m.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${lt(t)}`), !0) : Ha(t, e.ignoreTransactions) ? (y && m.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${lt(t)}`), !0) : Ua(t, e.denyUrls) ? (y && m.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${lt(t)}.
Url: ${Le(t)}`), !0) : Ba(t, e.allowUrls) ? !1 : (y && m.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${lt(t)}.
Url: ${Le(t)}`), !0)
}

function Fa(t, e) {
    return t.type || !e || !e.length ? !1 : ja(t).some(n => Et(n, e))
}

function Ha(t, e) {
    if (t.type !== "transaction" || !e || !e.length) return !1;
    const n = t.transaction;
    return n ? Et(n, e) : !1
}

function Ua(t, e) {
    if (!e || !e.length) return !1;
    const n = Le(t);
    return n ? Et(n, e) : !1
}

function Ba(t, e) {
    if (!e || !e.length) return !0;
    const n = Le(t);
    return n ? Et(n, e) : !0
}

function ja(t) {
    const e = [];
    t.message && e.push(t.message);
    let n;
    try {
        n = t.exception.values[t.exception.values.length - 1]
    } catch (r) {}
    return n && n.value && (e.push(n.value), n.type && e.push(`${n.type}: ${n.value}`)), e
}

function qa(t) {
    try {
        return t.exception.values[0].type === "SentryError"
    } catch (e) {}
    return !1
}

function Ga(t = []) {
    for (let e = t.length - 1; e >= 0; e--) {
        const n = t[e];
        if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]") return n.filename || null
    }
    return null
}

function Le(t) {
    try {
        let e;
        try {
            e = t.exception.values[0].stacktrace.frames
        } catch (n) {}
        return e ? Ga(e) : null
    } catch (e) {
        return y && m.error(`Cannot extract url for event ${lt(t)}`), null
    }
}

function Wa(t) {
    return t.type || !t.exception || !t.exception.values || t.exception.values.length === 0 ? !1 : !t.message && !t.exception.values.some(e => e.stacktrace || e.type && e.type !== "Error" || e.value)
}

function Ya(t, e, n = 250, r, s, i, o) {
    if (!i.exception || !i.exception.values || !o || !ot(o.originalException, Error)) return;
    const a = i.exception.values.length > 0 ? i.exception.values[i.exception.values.length - 1] : void 0;
    a && (i.exception.values = za(gn(t, e, s, o.originalException, r, i.exception.values, a, 0), n))
}

function gn(t, e, n, r, s, i, o, a) {
    if (i.length >= n + 1) return i;
    let c = [...i];
    if (ot(r[s], Error)) {
        Ar(o, a);
        const u = t(e, r[s]),
            l = c.length;
        Cr(u, s, l, a), c = gn(t, e, n, r[s], s, [u, ...c], u, l)
    }
    return Array.isArray(r.errors) && r.errors.forEach((u, l) => {
        if (ot(u, Error)) {
            Ar(o, a);
            const d = t(e, u),
                p = c.length;
            Cr(d, `errors[${l}]`, p, a), c = gn(t, e, n, u, s, [d, ...c], d, p)
        }
    }), c
}

function Ar(t, e) {
    t.mechanism = t.mechanism || {
        type: "generic",
        handled: !0
    }, t.mechanism = w(f(f({}, t.mechanism), t.type === "AggregateError" && {
        is_exception_group: !0
    }), {
        exception_id: e
    })
}

function Cr(t, e, n, r) {
    t.mechanism = t.mechanism || {
        type: "generic",
        handled: !0
    }, t.mechanism = w(f({}, t.mechanism), {
        type: "chained",
        source: e,
        exception_id: n,
        parent_id: r
    })
}

function za(t, e) {
    return t.map(n => (n.value && (n.value = Ft(n.value, e)), n))
}

function It(t) {
    if (!t) return {};
    const e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!e) return {};
    const n = e[6] || "",
        r = e[8] || "";
    return {
        host: e[4],
        path: e[5],
        protocol: e[2],
        search: n,
        hash: r,
        relative: e[5] + n + r
    }
}

function Xa(t) {
    const e = "console";
    _t(e, t), St(e, Va)
}

function Va() {
    "console" in b && sn.forEach(function(t) {
        t in b.console && G(b.console, t, function(e) {
            return xe[t] = e,
                function(...n) {
                    z("console", {
                        args: n,
                        level: t
                    });
                    const s = xe[t];
                    s && s.apply(b.console, n)
                }
        })
    })
}

function Ka(t) {
    return t === "warn" ? "warning" : ["fatal", "error", "warning", "log", "info", "debug"].includes(t) ? t : "log"
}
const Ja = "Dedupe",
    Za = () => {
        let t;
        return {
            name: Ja,
            processEvent(e) {
                if (e.type) return e;
                try {
                    if (tc(e, t)) return y && m.warn("Event dropped due to being a duplicate of previously captured event."), null
                } catch (n) {}
                return t = e
            }
        }
    },
    Qa = Za;

function tc(t, e) {
    return e ? !!(ec(t, e) || nc(t, e)) : !1
}

function ec(t, e) {
    const n = t.message,
        r = e.message;
    return !(!n && !r || n && !r || !n && r || n !== r || !Ls(t, e) || !Ds(t, e))
}

function nc(t, e) {
    const n = Or(e),
        r = Or(t);
    return !(!n || !r || n.type !== r.type || n.value !== r.value || !Ls(t, e) || !Ds(t, e))
}

function Ds(t, e) {
    let n = Jn(t),
        r = Jn(e);
    if (!n && !r) return !0;
    if (n && !r || !n && r || (n = n, r = r, r.length !== n.length)) return !1;
    for (let s = 0; s < r.length; s++) {
        const i = r[s],
            o = n[s];
        if (i.filename !== o.filename || i.lineno !== o.lineno || i.colno !== o.colno || i.function !== o.function) return !1
    }
    return !0
}

function Ls(t, e) {
    let n = t.fingerprint,
        r = e.fingerprint;
    if (!n && !r) return !0;
    if (n && !r || !n && r) return !1;
    n = n, r = r;
    try {
        return n.join("") === r.join("")
    } catch (s) {
        return !1
    }
}

function Or(t) {
    return t.exception && t.exception.values && t.exception.values[0]
}

function rc(t, e, n, r, s = "auto.http.browser") {
    if (!t.fetchData) return;
    const i = ht() && e(t.fetchData.url);
    if (t.endTimestamp && i) {
        const p = t.fetchData.__span;
        if (!p) return;
        const h = r[p];
        h && (oc(h, t), delete r[p]);
        return
    }
    const {
        method: o,
        url: a
    } = t.fetchData, c = ic(a), u = c ? It(c).host : void 0, l = !!H(), d = i && l ? oe({
        name: `${o} ${a}`,
        attributes: {
            url: a,
            type: "fetch",
            "http.method": o,
            "http.url": c,
            "server.address": u,
            [P]: s,
            [Nt]: "http.client"
        }
    }) : new Yt;
    if (t.fetchData.__span = d.spanContext().spanId, r[d.spanContext().spanId] = d, n(t.fetchData.url)) {
        const p = t.args[0],
            h = t.args[1] || {},
            g = sc(p, h, ht() && l ? d : void 0);
        g && (t.args[1] = h, h.headers = g)
    }
    return d
}

function sc(t, e, n) {
    const r = Ps({
            span: n
        }),
        s = r["sentry-trace"],
        i = r.baggage;
    if (!s) return;
    const o = e.headers || (ac(t) ? t.headers : void 0);
    if (o)
        if (cc(o)) {
            const a = new Headers(o);
            if (a.set("sentry-trace", s), i) {
                const c = a.get("baggage");
                if (c) {
                    const u = Ee(c);
                    a.set("baggage", u ? `${u},${i}` : i)
                } else a.set("baggage", i)
            }
            return a
        } else if (Array.isArray(o)) {
        const a = [...o.filter(c => !(Array.isArray(c) && c[0] === "sentry-trace")).map(c => {
            if (Array.isArray(c) && c[0] === "baggage" && typeof c[1] == "string") {
                const [u, l, ...d] = c;
                return [u, Ee(l), ...d]
            } else return c
        }), ["sentry-trace", s]];
        return i && a.push(["baggage", i]), a
    } else {
        const a = "baggage" in o ? o.baggage : void 0;
        let c = [];
        return Array.isArray(a) ? c = a.map(u => typeof u == "string" ? Ee(u) : u).filter(u => u === "") : a && c.push(Ee(a)), i && c.push(i), w(f({}, o), {
            "sentry-trace": s,
            baggage: c.length > 0 ? c.join(",") : void 0
        })
    } else return f({}, r)
}

function ic(t) {
    try {
        return new URL(t).href
    } catch (e) {
        return
    }
}

function oc(t, e) {
    if (e.response) {
        ss(t, e.response.status);
        const n = e.response && e.response.headers && e.response.headers.get("content-length");
        if (n) {
            const r = parseInt(n);
            r > 0 && t.setAttribute("http.response_content_length", r)
        }
    } else e.error && t.setStatus({
        code: x,
        message: "internal_error"
    });
    t.end()
}

function Ee(t) {
    return t.split(",").filter(e => !e.split("=")[0].startsWith(Ln)).join(",")
}

function ac(t) {
    return typeof Request != "undefined" && ot(t, Request)
}

function cc(t) {
    return typeof Headers != "undefined" && ot(t, Headers)
}

function Ms(t) {
    if (t !== void 0) return t >= 400 && t < 500 ? "warning" : t >= 500 ? "error" : void 0
}
const _n = b;

function $s() {
    if (!("fetch" in _n)) return !1;
    try {
        return new Headers, new Request("http://www.example.com"), new Response, !0
    } catch (t) {
        return !1
    }
}

function Sn(t) {
    return t && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
}

function uc() {
    if (typeof EdgeRuntime == "string") return !0;
    if (!$s()) return !1;
    if (Sn(_n.fetch)) return !0;
    let t = !1;
    const e = _n.document;
    if (e && typeof e.createElement == "function") try {
        const n = e.createElement("iframe");
        n.hidden = !0, e.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = Sn(n.contentWindow.fetch)), e.head.removeChild(n)
    } catch (n) {
        gt && m.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n)
    }
    return t
}

function Fs(t, e) {
    const n = "fetch";
    _t(n, t), St(n, () => Hs(void 0, e))
}

function dc(t) {
    const e = "fetch-body-resolved";
    _t(e, t), St(e, () => Hs(lc))
}

function Hs(t, e = !1) {
    e && !uc() || G(b, "fetch", function(n) {
        return function(...r) {
            const s = new Error,
                {
                    method: i,
                    url: o
                } = pc(r),
                a = {
                    args: r,
                    fetchData: {
                        method: i,
                        url: o
                    },
                    startTimestamp: U() * 1e3,
                    virtualError: s
                };
            return t || z("fetch", f({}, a)), n.apply(b, r).then(c => Ye(this, null, function*() {
                return t ? t(c) : z("fetch", w(f({}, a), {
                    endTimestamp: U() * 1e3,
                    response: c
                })), c
            }), c => {
                throw z("fetch", w(f({}, a), {
                    endTimestamp: U() * 1e3,
                    error: c
                })), Nn(c) && c.stack === void 0 && (c.stack = s.stack, V(c, "framesToPop", 1)), c
            })
        }
    })
}

function fc(t, e) {
    return Ye(this, null, function*() {
        if (t && t.body) {
            const n = t.body,
                r = n.getReader(),
                s = setTimeout(() => {
                    n.cancel().then(null, () => {})
                }, 90 * 1e3);
            let i = !0;
            for (; i;) {
                let o;
                try {
                    o = setTimeout(() => {
                        n.cancel().then(null, () => {})
                    }, 5e3);
                    const {
                        done: a
                    } = yield r.read();
                    clearTimeout(o), a && (e(), i = !1)
                } catch (a) {
                    i = !1
                } finally {
                    clearTimeout(o)
                }
            }
            clearTimeout(s), r.releaseLock(), n.cancel().then(null, () => {})
        }
    })
}

function lc(t) {
    let e;
    try {
        e = t.clone()
    } catch (n) {
        return
    }
    fc(e, () => {
        z("fetch-body-resolved", {
            endTimestamp: U() * 1e3,
            response: t
        })
    })
}

function yn(t, e) {
    return !!t && typeof t == "object" && !!t[e]
}

function xr(t) {
    return typeof t == "string" ? t : t ? yn(t, "url") ? t.url : t.toString ? t.toString() : "" : ""
}

function pc(t) {
    if (t.length === 0) return {
        method: "GET",
        url: ""
    };
    if (t.length === 2) {
        const [n, r] = t;
        return {
            url: xr(n),
            method: yn(r, "method") ? String(r.method).toUpperCase() : "GET"
        }
    }
    const e = t[0];
    return {
        url: xr(e),
        method: yn(e, "method") ? String(e.method).toUpperCase() : "GET"
    }
}

function mc() {
    return "npm"
}
const be = b;

function hc() {
    const t = be.chrome,
        e = t && t.app && t.app.runtime,
        n = "history" in be && !!be.history.pushState && !!be.history.replaceState;
    return !e && n
}
const S = b;
let En = 0;

function Us() {
    return En > 0
}

function gc() {
    En++, setTimeout(() => {
        En--
    })
}

function qt(t, e = {}) {
    function n(s) {
        return typeof s == "function"
    }
    if (!n(t)) return t;
    try {
        const s = t.__sentry_wrapped__;
        if (s) return typeof s == "function" ? s : t;
        if (On(t)) return t
    } catch (s) {
        return t
    }
    const r = function(...s) {
        try {
            const i = s.map(o => qt(o, e));
            return t.apply(this, i)
        } catch (i) {
            throw gc(), Pn(o => {
                o.addEventProcessor(a => (e.mechanism && (an(a, void 0), Ut(a, e.mechanism)), a.extra = w(f({}, a.extra), {
                    arguments: s
                }), a)), na(i)
            }), i
        }
    };
    try {
        for (const s in t) Object.prototype.hasOwnProperty.call(t, s) && (r[s] = t[s])
    } catch (s) {}
    Zr(r, t), V(t, "__sentry_wrapped__", r);
    try {
        Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
            get() {
                return t.name
            }
        })
    } catch (s) {}
    return r
}
const Q = typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__;

function Fn(t, e) {
    const n = Hn(t, e),
        r = {
            type: bc(e),
            value: Tc(e)
        };
    return n.length && (r.stacktrace = {
        frames: n
    }), r.type === void 0 && r.value === "" && (r.value = "Unrecoverable error caught"), r
}

function _c(t, e, n, r) {
    const s = I(),
        i = s && s.getOptions().normalizeDepth,
        o = Rc(e),
        a = {
            __serialized__: Es(e, i)
        };
    if (o) return {
        exception: {
            values: [Fn(t, o)]
        },
        extra: a
    };
    const c = {
        exception: {
            values: [{
                type: He(e) ? e.constructor.name : r ? "UnhandledRejection" : "Error",
                value: wc(e, {
                    isUnhandledRejection: r
                })
            }]
        },
        extra: a
    };
    if (n) {
        const u = Hn(t, n);
        u.length && (c.exception.values[0].stacktrace = {
            frames: u
        })
    }
    return c
}

function Ke(t, e) {
    return {
        exception: {
            values: [Fn(t, e)]
        }
    }
}

function Hn(t, e) {
    const n = e.stacktrace || e.stack || "",
        r = yc(e),
        s = Ec(e);
    try {
        return t(n, r, s)
    } catch (i) {}
    return []
}
const Sc = /Minified React error #\d+;/i;

function yc(t) {
    return t && Sc.test(t.message) ? 1 : 0
}

function Ec(t) {
    return typeof t.framesToPop == "number" ? t.framesToPop : 0
}

function Bs(t) {
    return typeof WebAssembly != "undefined" && typeof WebAssembly.Exception != "undefined" ? t instanceof WebAssembly.Exception : !1
}

function bc(t) {
    const e = t && t.name;
    return !e && Bs(t) ? t.message && Array.isArray(t.message) && t.message.length == 2 ? t.message[0] : "WebAssembly.Exception" : e
}

function Tc(t) {
    const e = t && t.message;
    return e ? e.error && typeof e.error.message == "string" ? e.error.message : Bs(t) && Array.isArray(t.message) && t.message.length == 2 ? t.message[1] : e : "No error message"
}

function Ic(t, e, n, r) {
    const s = n && n.syntheticException || void 0,
        i = Un(t, e, s, r);
    return Ut(i), i.level = "error", n && n.event_id && (i.event_id = n.event_id), kt(i)
}

function vc(t, e, n = "info", r, s) {
    const i = r && r.syntheticException || void 0,
        o = bn(t, e, i, s);
    return o.level = n, r && r.event_id && (o.event_id = r.event_id), kt(o)
}

function Un(t, e, n, r, s) {
    let i;
    if (Vr(e) && e.error) return Ke(t, e.error);
    if (Qn(e) || hi(e)) {
        const o = e;
        if ("stack" in e) i = Ke(t, e);
        else {
            const a = o.name || (Qn(o) ? "DOMError" : "DOMException"),
                c = o.message ? `${a}: ${o.message}` : a;
            i = bn(t, c, n, r), an(i, c)
        }
        return "code" in o && (i.tags = w(f({}, i.tags), {
            "DOMException.code": `${o.code}`
        })), i
    }
    return Nn(e) ? Ke(t, e) : Ht(e) || He(e) ? (i = _c(t, e, n, s), Ut(i, {
        synthetic: !0
    }), i) : (i = bn(t, e, n, r), an(i, `${e}`), Ut(i, {
        synthetic: !0
    }), i)
}

function bn(t, e, n, r) {
    const s = {};
    if (r && n) {
        const i = Hn(t, n);
        i.length && (s.exception = {
            values: [{
                value: e,
                stacktrace: {
                    frames: i
                }
            }]
        }), Ut(s, {
            synthetic: !0
        })
    }
    if (An(e)) {
        const {
            __sentry_template_string__: i,
            __sentry_template_values__: o
        } = e;
        return s.logentry = {
            message: i,
            params: o
        }, s
    }
    return s.message = e, s
}

function wc(t, {
    isUnhandledRejection: e
}) {
    const n = vi(t),
        r = e ? "promise rejection" : "exception";
    return Vr(t) ? `Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\`` : He(t) ? `Event \`${kc(t)}\` (type=${t.type}) captured as ${r}` : `Object captured as ${r} with keys: ${n}`
}

function kc(t) {
    try {
        const e = Object.getPrototypeOf(t);
        return e ? e.constructor.name : void 0
    } catch (e) {}
}

function Rc(t) {
    for (const e in t)
        if (Object.prototype.hasOwnProperty.call(t, e)) {
            const n = t[e];
            if (n instanceof Error) return n
        }
}

function Nc(t, {
    metadata: e,
    tunnel: n,
    dsn: r
}) {
    const s = f(f({
            event_id: t.event_id,
            sent_at: new Date().toISOString()
        }, e && e.sdk && {
            sdk: {
                name: e.sdk.name,
                version: e.sdk.version
            }
        }), !!n && !!r && {
            dsn: ie(r)
        }),
        i = Ac(t);
    return Xt(s, [i])
}

function Ac(t) {
    return [{
        type: "user_report"
    }, t]
}
class Cc extends ma {
    constructor(e) {
        const n = f({
                parentSpanIsAlwaysRootSpan: !0
            }, e),
            r = S.SENTRY_SDK_SOURCE || mc();
        xs(n, "browser", ["browser"], r), super(n), n.sendClientReports && S.document && S.document.addEventListener("visibilitychange", () => {
            S.document.visibilityState === "hidden" && this._flushOutcomes()
        })
    }
    eventFromException(e, n) {
        return Ic(this._options.stackParser, e, n, this._options.attachStacktrace)
    }
    eventFromMessage(e, n = "info", r) {
        return vc(this._options.stackParser, e, n, r, this._options.attachStacktrace)
    }
    captureUserFeedback(e) {
        if (!this._isEnabled()) {
            Q && m.warn("SDK not enabled, will not capture user feedback.");
            return
        }
        const n = Nc(e, {
            metadata: this.getSdkMetadata(),
            dsn: this.getDsn(),
            tunnel: this.getOptions().tunnel
        });
        this.sendEnvelope(n)
    }
    _prepareEvent(e, n, r) {
        return e.platform = e.platform || "javascript", super._prepareEvent(e, n, r)
    }
}
const Bn = typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__,
    Oc = (t, e) => t > e[1] ? "poor" : t > e[0] ? "needs-improvement" : "good",
    Vt = (t, e, n, r) => {
        let s, i;
        return o => {
            e.value >= 0 && (o || r) && (i = e.value - (s || 0), (i || s === void 0) && (s = e.value, e.delta = i, e.rating = Oc(e.value, n), t(e)))
        }
    },
    _ = b,
    xc = () => `v4-${Date.now()}-${Math.floor(Math.random()*(9e12-1))+1e12}`,
    ae = (t = !0) => {
        const e = _.performance && _.performance.getEntriesByType && _.performance.getEntriesByType("navigation")[0];
        if (!t || e && e.responseStart > 0 && e.responseStart < performance.now()) return e
    },
    ce = () => {
        const t = ae();
        return t && t.activationStart || 0
    },
    Kt = (t, e) => {
        const n = ae();
        let r = "navigate";
        return n && (_.document && _.document.prerendering || ce() > 0 ? r = "prerender" : _.document && _.document.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))), {
            name: t,
            value: typeof e == "undefined" ? -1 : e,
            rating: "good",
            delta: 0,
            entries: [],
            id: xc(),
            navigationType: r
        }
    },
    Pt = (t, e, n) => {
        try {
            if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                const r = new PerformanceObserver(s => {
                    Promise.resolve().then(() => {
                        e(s.getEntries())
                    })
                });
                return r.observe(Object.assign({
                    type: t,
                    buffered: !0
                }, n || {})), r
            }
        } catch (r) {}
    },
    Jt = t => {
        const e = n => {
            (n.type === "pagehide" || _.document && _.document.visibilityState === "hidden") && t(n)
        };
        _.document && (addEventListener("visibilitychange", e, !0), addEventListener("pagehide", e, !0))
    },
    Ge = t => {
        let e = !1;
        return () => {
            e || (t(), e = !0)
        }
    };
let Qt = -1;
const Pc = () => _.document.visibilityState === "hidden" && !_.document.prerendering ? 0 : 1 / 0,
    Me = t => {
        _.document.visibilityState === "hidden" && Qt > -1 && (Qt = t.type === "visibilitychange" ? t.timeStamp : 0, Lc())
    },
    Dc = () => {
        addEventListener("visibilitychange", Me, !0), addEventListener("prerenderingchange", Me, !0)
    },
    Lc = () => {
        removeEventListener("visibilitychange", Me, !0), removeEventListener("prerenderingchange", Me, !0)
    },
    We = () => (_.document && Qt < 0 && (Qt = Pc(), Dc()), {
        get firstHiddenTime() {
            return Qt
        }
    }),
    ue = t => {
        _.document && _.document.prerendering ? addEventListener("prerenderingchange", () => t(), !0) : t()
    },
    Mc = [1800, 3e3],
    $c = (t, e = {}) => {
        ue(() => {
            const n = We(),
                r = Kt("FCP");
            let s;
            const o = Pt("paint", a => {
                a.forEach(c => {
                    c.name === "first-contentful-paint" && (o.disconnect(), c.startTime < n.firstHiddenTime && (r.value = Math.max(c.startTime - ce(), 0), r.entries.push(c), s(!0)))
                })
            });
            o && (s = Vt(t, r, Mc, e.reportAllChanges))
        })
    },
    Fc = [.1, .25],
    Hc = (t, e = {}) => {
        $c(Ge(() => {
            const n = Kt("CLS", 0);
            let r, s = 0,
                i = [];
            const o = c => {
                    c.forEach(u => {
                        if (!u.hadRecentInput) {
                            const l = i[0],
                                d = i[i.length - 1];
                            s && l && d && u.startTime - d.startTime < 1e3 && u.startTime - l.startTime < 5e3 ? (s += u.value, i.push(u)) : (s = u.value, i = [u])
                        }
                    }), s > n.value && (n.value = s, n.entries = i, r())
                },
                a = Pt("layout-shift", o);
            a && (r = Vt(t, n, Fc, e.reportAllChanges), Jt(() => {
                o(a.takeRecords()), r(!0)
            }), setTimeout(r, 0))
        }))
    },
    Uc = [100, 300],
    Bc = (t, e = {}) => {
        ue(() => {
            const n = We(),
                r = Kt("FID");
            let s;
            const i = c => {
                    c.startTime < n.firstHiddenTime && (r.value = c.processingStart - c.startTime, r.entries.push(c), s(!0))
                },
                o = c => {
                    c.forEach(i)
                },
                a = Pt("first-input", o);
            s = Vt(t, r, Uc, e.reportAllChanges), a && Jt(Ge(() => {
                o(a.takeRecords()), a.disconnect()
            }))
        })
    };
let js = 0,
    Je = 1 / 0,
    Te = 0;
const jc = t => {
    t.forEach(e => {
        e.interactionId && (Je = Math.min(Je, e.interactionId), Te = Math.max(Te, e.interactionId), js = Te ? (Te - Je) / 7 + 1 : 0)
    })
};
let Tn;
const qc = () => Tn ? js : performance.interactionCount || 0,
    Gc = () => {
        "interactionCount" in performance || Tn || (Tn = Pt("event", jc, {
            type: "event",
            buffered: !0,
            durationThreshold: 0
        }))
    },
    nt = [],
    Ze = new Map,
    Wc = 40;
let Yc = 0;
const zc = () => qc() - Yc,
    Xc = () => {
        const t = Math.min(nt.length - 1, Math.floor(zc() / 50));
        return nt[t]
    },
    Qe = 10,
    Vc = [],
    Kc = t => {
        if (Vc.forEach(r => r(t)), !(t.interactionId || t.entryType === "first-input")) return;
        const e = nt[nt.length - 1],
            n = Ze.get(t.interactionId);
        if (n || nt.length < Qe || e && t.duration > e.latency) {
            if (n) t.duration > n.latency ? (n.entries = [t], n.latency = t.duration) : t.duration === n.latency && t.startTime === (n.entries[0] && n.entries[0].startTime) && n.entries.push(t);
            else {
                const r = {
                    id: t.interactionId,
                    latency: t.duration,
                    entries: [t]
                };
                Ze.set(r.id, r), nt.push(r)
            }
            nt.sort((r, s) => s.latency - r.latency), nt.length > Qe && nt.splice(Qe).forEach(r => Ze.delete(r.id))
        }
    },
    qs = t => {
        const e = _.requestIdleCallback || _.setTimeout;
        let n = -1;
        return t = Ge(t), _.document && _.document.visibilityState === "hidden" ? t() : (n = e(t), Jt(t)), n
    },
    Jc = [200, 500],
    Zc = (t, e = {}) => {
        "PerformanceEventTiming" in _ && "interactionId" in PerformanceEventTiming.prototype && ue(() => {
            Gc();
            const n = Kt("INP");
            let r;
            const s = o => {
                    qs(() => {
                        o.forEach(Kc);
                        const a = Xc();
                        a && a.latency !== n.value && (n.value = a.latency, n.entries = a.entries, r())
                    })
                },
                i = Pt("event", s, {
                    durationThreshold: e.durationThreshold != null ? e.durationThreshold : Wc
                });
            r = Vt(t, n, Jc, e.reportAllChanges), i && (i.observe({
                type: "first-input",
                buffered: !0
            }), Jt(() => {
                s(i.takeRecords()), r(!0)
            }))
        })
    },
    Qc = [2500, 4e3],
    Pr = {},
    tu = (t, e = {}) => {
        ue(() => {
            const n = We(),
                r = Kt("LCP");
            let s;
            const i = a => {
                    e.reportAllChanges || (a = a.slice(-1)), a.forEach(c => {
                        c.startTime < n.firstHiddenTime && (r.value = Math.max(c.startTime - ce(), 0), r.entries = [c], s())
                    })
                },
                o = Pt("largest-contentful-paint", i);
            if (o) {
                s = Vt(t, r, Qc, e.reportAllChanges);
                const a = Ge(() => {
                    Pr[r.id] || (i(o.takeRecords()), o.disconnect(), Pr[r.id] = !0, s(!0))
                });
                ["keydown", "click"].forEach(c => {
                    _.document && addEventListener(c, () => qs(a), {
                        once: !0,
                        capture: !0
                    })
                }), Jt(a)
            }
        })
    },
    eu = [800, 1800],
    In = t => {
        _.document && _.document.prerendering ? ue(() => In(t)) : _.document && _.document.readyState !== "complete" ? addEventListener("load", () => In(t), !0) : setTimeout(t, 0)
    },
    nu = (t, e = {}) => {
        const n = Kt("TTFB"),
            r = Vt(t, n, eu, e.reportAllChanges);
        In(() => {
            const s = ae();
            s && (n.value = Math.max(s.responseStart - ce(), 0), n.entries = [s], r(!0))
        })
    },
    te = {},
    $e = {};
let Gs, Ws, Ys, zs, Xs;

function Vs(t, e = !1) {
    return de("cls", t, au, Gs, e)
}

function ru(t, e = !1) {
    return de("lcp", t, uu, Ys, e)
}

function su(t) {
    return de("fid", t, cu, Ws)
}

function iu(t) {
    return de("ttfb", t, du, zs)
}

function ou(t) {
    return de("inp", t, fu, Xs)
}

function re(t, e) {
    return Ks(t, e), $e[t] || (lu(t), $e[t] = !0), Js(t, e)
}

function Zt(t, e) {
    const n = te[t];
    if (!(!n || !n.length))
        for (const r of n) try {
            r(e)
        } catch (s) {
            Bn && m.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${it(r)}
Error:`, s)
        }
}

function au() {
    return Hc(t => {
        Zt("cls", {
            metric: t
        }), Gs = t
    }, {
        reportAllChanges: !0
    })
}

function cu() {
    return Bc(t => {
        Zt("fid", {
            metric: t
        }), Ws = t
    })
}

function uu() {
    return tu(t => {
        Zt("lcp", {
            metric: t
        }), Ys = t
    }, {
        reportAllChanges: !0
    })
}

function du() {
    return nu(t => {
        Zt("ttfb", {
            metric: t
        }), zs = t
    })
}

function fu() {
    return Zc(t => {
        Zt("inp", {
            metric: t
        }), Xs = t
    })
}

function de(t, e, n, r, s = !1) {
    Ks(t, e);
    let i;
    return $e[t] || (i = n(), $e[t] = !0), r && e({
        metric: r
    }), Js(t, e, s ? i : void 0)
}

function lu(t) {
    const e = {};
    t === "event" && (e.durationThreshold = 0), Pt(t, n => {
        Zt(t, {
            entries: n
        })
    }, e)
}

function Ks(t, e) {
    te[t] = te[t] || [], te[t].push(e)
}

function Js(t, e, n) {
    return () => {
        n && n();
        const r = te[t];
        if (!r) return;
        const s = r.indexOf(e);
        s !== -1 && r.splice(s, 1)
    }
}

function pu(t) {
    return "duration" in t
}

function tn(t) {
    return typeof t == "number" && isFinite(t)
}

function at(t, e, n, s) {
    var r = Xn(s, []);
    const i = T(t).start_timestamp;
    return i && i > e && typeof t.updateStartTime == "function" && t.updateStartTime(e), Is(t, () => {
        const o = oe(f({
            startTime: e
        }, r));
        return o && o.end(n), o
    })
}

function Zs(t) {
    const e = I();
    if (!e) return;
    const {
        name: n,
        transaction: r,
        attributes: s,
        startTime: i
    } = t, {
        release: o,
        environment: a
    } = e.getOptions(), c = e.getIntegrationByName("Replay"), u = c && c.getReplayId(), l = R(), d = l.getUser(), p = d !== void 0 ? d.email || d.id || d.ip_address : void 0;
    let h;
    try {
        h = l.getScopeData().contexts.profile.profile_id
    } catch (v) {}
    const g = f({
        release: o,
        environment: a,
        user: p || void 0,
        profile_id: h || void 0,
        replay_id: u || void 0,
        transaction: r,
        "user_agent.original": _.navigator && _.navigator.userAgent
    }, s);
    return oe({
        name: n,
        attributes: g,
        startTime: i,
        experimental: {
            standalone: !0
        }
    })
}

function jn() {
    return _ && _.addEventListener && _.performance
}

function N(t) {
    return t / 1e3
}

function Qs(t) {
    let e = "unknown",
        n = "unknown",
        r = "";
    for (const s of t) {
        if (s === "/") {
            [e, n] = t.split("/");
            break
        }
        if (!isNaN(Number(s))) {
            e = r === "h" ? "http" : r, n = t.split(r)[1];
            break
        }
        r += s
    }
    return r === t && (e = r), {
        name: e,
        version: n
    }
}

function mu() {
    let t = 0,
        e, n;
    if (!gu()) return;
    let r = !1;

    function s() {
        r || (r = !0, n && hu(t, e, n), i())
    }
    const i = Vs(({
        metric: o
    }) => {
        const a = o.entries[o.entries.length - 1];
        a && (t = o.value, e = a)
    }, !0);
    Jt(() => {
        s()
    }), setTimeout(() => {
        const o = I();
        if (!o) return;
        const a = o.on("startNavigationSpan", () => {
                s(), a && a()
            }),
            c = H(),
            u = c && F(c),
            l = u && T(u);
        l && l.op === "pageload" && (n = u.spanContext().spanId)
    }, 0)
}

function hu(t, e, n) {
    Bn && m.log(`Sending CLS span (${t})`);
    const r = N((j || 0) + (e && e.startTime || 0)),
        s = R().getScopeData().transactionName,
        i = e ? wt(e.sources[0] && e.sources[0].node) : "Layout shift",
        o = L({
            [P]: "auto.http.browser.cls",
            [Nt]: "ui.webvital.cls",
            [Dn]: e && e.duration || 0,
            "sentry.pageload.span_id": n
        }),
        a = Zs({
            name: i,
            transaction: s,
            attributes: o,
            startTime: r
        });
    a && (a.addEvent("cls", {
        [je]: "",
        [qe]: t
    }), a.end(r))
}

function gu() {
    try {
        return PerformanceObserver.supportedEntryTypes.includes("layout-shift")
    } catch (t) {
        return !1
    }
}
const _u = 2147483647;
let Dr = 0,
    D = {},
    B, ee;

function Su({
    recordClsStandaloneSpans: t
}) {
    const e = jn();
    if (e && j) {
        e.mark && _.performance.mark("sentry-tracing-init");
        const n = vu(),
            r = Iu(),
            s = wu(),
            i = t ? mu() : Tu();
        return () => {
            n(), r(), s(), i && i()
        }
    }
    return () => {}
}

function yu() {
    re("longtask", ({
        entries: t
    }) => {
        const e = H();
        if (!e) return;
        const {
            op: n,
            start_timestamp: r
        } = T(e);
        for (const s of t) {
            const i = N(j + s.startTime),
                o = N(s.duration);
            n === "navigation" && r && i < r || at(e, i, i + o, {
                name: "Main UI thread blocked",
                op: "ui.long-task",
                attributes: {
                    [P]: "auto.ui.browser.metrics"
                }
            })
        }
    })
}

function Eu() {
    new PerformanceObserver(e => {
        const n = H();
        if (n)
            for (const r of e.getEntries()) {
                if (!r.scripts[0]) continue;
                const s = N(j + r.startTime),
                    {
                        start_timestamp: i,
                        op: o
                    } = T(n);
                if (o === "navigation" && i && s < i) continue;
                const a = N(r.duration),
                    c = {
                        [P]: "auto.ui.browser.metrics"
                    },
                    u = r.scripts[0],
                    {
                        invoker: l,
                        invokerType: d,
                        sourceURL: p,
                        sourceFunctionName: h,
                        sourceCharPosition: g
                    } = u;
                c["browser.script.invoker"] = l, c["browser.script.invoker_type"] = d, p && (c["code.filepath"] = p), h && (c["code.function"] = h), g !== -1 && (c["browser.script.source_char_position"] = g), at(n, s, s + a, {
                    name: "Main UI thread blocked",
                    op: "ui.long-animation-frame",
                    attributes: c
                })
            }
    }).observe({
        type: "long-animation-frame",
        buffered: !0
    })
}

function bu() {
    re("event", ({
        entries: t
    }) => {
        const e = H();
        if (e) {
            for (const n of t)
                if (n.name === "click") {
                    const r = N(j + n.startTime),
                        s = N(n.duration),
                        i = {
                            name: wt(n.target),
                            op: `ui.interaction.${n.name}`,
                            startTime: r,
                            attributes: {
                                [P]: "auto.ui.browser.metrics"
                            }
                        },
                        o = Jr(n.target);
                    o && (i.attributes["ui.component_name"] = o), at(e, r, r + s, i)
                }
        }
    })
}

function Tu() {
    return Vs(({
        metric: t
    }) => {
        const e = t.entries[t.entries.length - 1];
        e && (D.cls = {
            value: t.value,
            unit: ""
        }, ee = e)
    }, !0)
}

function Iu() {
    return ru(({
        metric: t
    }) => {
        const e = t.entries[t.entries.length - 1];
        e && (D.lcp = {
            value: t.value,
            unit: "millisecond"
        }, B = e)
    }, !0)
}

function vu() {
    return su(({
        metric: t
    }) => {
        const e = t.entries[t.entries.length - 1];
        if (!e) return;
        const n = N(j),
            r = N(e.startTime);
        D.fid = {
            value: t.value,
            unit: "millisecond"
        }, D["mark.fid"] = {
            value: n + r,
            unit: "second"
        }
    })
}

function wu() {
    return iu(({
        metric: t
    }) => {
        t.entries[t.entries.length - 1] && (D.ttfb = {
            value: t.value,
            unit: "millisecond"
        })
    })
}

function ku(t, e) {
    const n = jn();
    if (!n || !n.getEntries || !j) return;
    const r = N(j),
        s = n.getEntries(),
        {
            op: i,
            start_timestamp: o
        } = T(t);
    if (s.slice(Dr).forEach(a => {
            const c = N(a.startTime),
                u = N(Math.max(0, a.duration));
            if (!(i === "navigation" && o && r + c < o)) switch (a.entryType) {
                case "navigation":
                    {
                        Nu(t, a, r);
                        break
                    }
                case "mark":
                case "paint":
                case "measure":
                    {
                        Ru(t, a, c, u, r);
                        const l = We(),
                            d = a.startTime < l.firstHiddenTime;a.name === "first-paint" && d && (D.fp = {
                            value: a.startTime,
                            unit: "millisecond"
                        }),
                        a.name === "first-contentful-paint" && d && (D.fcp = {
                            value: a.startTime,
                            unit: "millisecond"
                        });
                        break
                    }
                case "resource":
                    {
                        Ou(t, a, a.name, c, u, r);
                        break
                    }
            }
        }), Dr = Math.max(s.length - 1, 0), xu(t), i === "pageload") {
        Du(D);
        const a = D["mark.fid"];
        a && D.fid && (at(t, a.value, a.value + N(D.fid.value), {
            name: "first input delay",
            op: "ui.action",
            attributes: {
                [P]: "auto.ui.browser.metrics"
            }
        }), delete D["mark.fid"]), (!("fcp" in D) || !e.recordClsOnPageloadSpan) && delete D.cls, Object.entries(D).forEach(([c, u]) => {
            Co(c, u.value, u.unit)
        }), t.setAttribute("performance.timeOrigin", r), t.setAttribute("performance.activationStart", ce()), Pu(t)
    }
    B = void 0, ee = void 0, D = {}
}

function Ru(t, e, n, r, s) {
    const i = ae(!1),
        o = N(i ? i.requestStart : 0),
        a = s + Math.max(n, o),
        c = s + n,
        u = c + r,
        l = {
            [P]: "auto.resource.browser.metrics"
        };
    return a !== c && (l["sentry.browser.measure_happened_before_request"] = !0, l["sentry.browser.measure_start_time"] = a), at(t, a, u, {
        name: e.name,
        op: e.entryType,
        attributes: l
    }), a
}

function Nu(t, e, n) {
    ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(r => {
        Ie(t, e, r, n)
    }), Ie(t, e, "secureConnection", n, "TLS/SSL"), Ie(t, e, "fetch", n, "cache"), Ie(t, e, "domainLookup", n, "DNS"), Cu(t, e, n)
}

function Ie(t, e, n, r, s = n) {
    const i = Au(n),
        o = e[i],
        a = e[`${n}Start`];
    !a || !o || at(t, r + N(a), r + N(o), {
        op: `browser.${s}`,
        name: e.name,
        attributes: {
            [P]: "auto.ui.browser.metrics"
        }
    })
}

function Au(t) {
    return t === "secureConnection" ? "connectEnd" : t === "fetch" ? "domainLookupStart" : `${t}End`
}

function Cu(t, e, n) {
    const r = n + N(e.requestStart),
        s = n + N(e.responseEnd),
        i = n + N(e.responseStart);
    e.responseEnd && (at(t, r, s, {
        op: "browser.request",
        name: e.name,
        attributes: {
            [P]: "auto.ui.browser.metrics"
        }
    }), at(t, i, s, {
        op: "browser.response",
        name: e.name,
        attributes: {
            [P]: "auto.ui.browser.metrics"
        }
    }))
}

function Ou(t, e, n, r, s, i) {
    if (e.initiatorType === "xmlhttprequest" || e.initiatorType === "fetch") return;
    const o = It(n),
        a = {
            [P]: "auto.resource.browser.metrics"
        };
    en(a, e, "transferSize", "http.response_transfer_size"), en(a, e, "encodedBodySize", "http.response_content_length"), en(a, e, "decodedBodySize", "http.decoded_response_content_length");
    const c = e.deliveryType;
    c != null && (a["http.response_delivery_type"] = c);
    const u = e.renderBlockingStatus;
    u && (a["resource.render_blocking_status"] = u), o.protocol && (a["url.scheme"] = o.protocol.split(":").pop()), o.host && (a["server.address"] = o.host), a["url.same_origin"] = n.includes(_.location.origin);
    const {
        name: l,
        version: d
    } = Qs(e.nextHopProtocol);
    a["network.protocol.name"] = l, a["network.protocol.version"] = d;
    const p = i + r,
        h = p + s;
    at(t, p, h, {
        name: n.replace(_.location.origin, ""),
        op: e.initiatorType ? `resource.${e.initiatorType}` : "resource.other",
        attributes: a
    })
}

function xu(t) {
    const e = _.navigator;
    if (!e) return;
    const n = e.connection;
    n && (n.effectiveType && t.setAttribute("effectiveConnectionType", n.effectiveType), n.type && t.setAttribute("connectionType", n.type), tn(n.rtt) && (D["connection.rtt"] = {
        value: n.rtt,
        unit: "millisecond"
    })), tn(e.deviceMemory) && t.setAttribute("deviceMemory", `${e.deviceMemory} GB`), tn(e.hardwareConcurrency) && t.setAttribute("hardwareConcurrency", String(e.hardwareConcurrency))
}

function Pu(t) {
    B && (B.element && t.setAttribute("lcp.element", wt(B.element)), B.id && t.setAttribute("lcp.id", B.id), B.url && t.setAttribute("lcp.url", B.url.trim().slice(0, 200)), B.loadTime != null && t.setAttribute("lcp.loadTime", B.loadTime), B.renderTime != null && t.setAttribute("lcp.renderTime", B.renderTime), t.setAttribute("lcp.size", B.size)), ee && ee.sources && ee.sources.forEach((e, n) => t.setAttribute(`cls.source.${n+1}`, wt(e.node)))
}

function en(t, e, n, r) {
    const s = e[n];
    s != null && s < _u && (t[r] = s)
}

function Du(t) {
    const e = ae(!1);
    if (!e) return;
    const {
        responseStart: n,
        requestStart: r
    } = e;
    r <= n && (t["ttfb.requestTime"] = {
        value: n - r,
        unit: "millisecond"
    })
}
const Lu = 1e3;
let Lr, vn, wn;

function Mu(t) {
    const e = "dom";
    _t(e, t), St(e, $u)
}

function $u() {
    if (!_.document) return;
    const t = z.bind(null, "dom"),
        e = Mr(t, !0);
    _.document.addEventListener("click", e, !1), _.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach(n => {
        const s = _[n],
            i = s && s.prototype;
        !i || !i.hasOwnProperty || !i.hasOwnProperty("addEventListener") || (G(i, "addEventListener", function(o) {
            return function(a, c, u) {
                if (a === "click" || a == "keypress") try {
                    const l = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {},
                        d = l[a] = l[a] || {
                            refCount: 0
                        };
                    if (!d.handler) {
                        const p = Mr(t);
                        d.handler = p, o.call(this, a, p, u)
                    }
                    d.refCount++
                } catch (l) {}
                return o.call(this, a, c, u)
            }
        }), G(i, "removeEventListener", function(o) {
            return function(a, c, u) {
                if (a === "click" || a == "keypress") try {
                    const l = this.__sentry_instrumentation_handlers__ || {},
                        d = l[a];
                    d && (d.refCount--, d.refCount <= 0 && (o.call(this, a, d.handler, u), d.handler = void 0, delete l[a]), Object.keys(l).length === 0 && delete this.__sentry_instrumentation_handlers__)
                } catch (l) {}
                return o.call(this, a, c, u)
            }
        }))
    })
}

function Fu(t) {
    if (t.type !== vn) return !1;
    try {
        if (!t.target || t.target._sentryId !== wn) return !1
    } catch (e) {}
    return !0
}

function Hu(t, e) {
    return t !== "keypress" ? !1 : !e || !e.tagName ? !0 : !(e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable)
}

function Mr(t, e = !1) {
    return n => {
        if (!n || n._sentryCaptured) return;
        const r = Uu(n);
        if (Hu(n.type, r)) return;
        V(n, "_sentryCaptured", !0), r && !r._sentryId && V(r, "_sentryId", X());
        const s = n.type === "keypress" ? "input" : n.type;
        Fu(n) || (t({
            event: n,
            name: s,
            global: e
        }), vn = n.type, wn = r ? r._sentryId : void 0), clearTimeout(Lr), Lr = _.setTimeout(() => {
            wn = void 0, vn = void 0
        }, Lu)
    }
}

function Uu(t) {
    try {
        return t.target
    } catch (e) {
        return null
    }
}
let ve;

function qn(t) {
    const e = "history";
    _t(e, t), St(e, Bu)
}

function Bu() {
    if (!hc()) return;
    const t = _.onpopstate;
    _.onpopstate = function(...n) {
        const r = _.location.href,
            s = ve;
        if (ve = r, z("history", {
                from: s,
                to: r
            }), t) try {
            return t.apply(this, n)
        } catch (o) {}
    };

    function e(n) {
        return function(...r) {
            const s = r.length > 2 ? r[2] : void 0;
            if (s) {
                const i = ve,
                    o = String(s);
                ve = o, z("history", {
                    from: i,
                    to: o
                })
            }
            return n.apply(this, r)
        }
    }
    G(_.history, "pushState", e), G(_.history, "replaceState", e)
}
const Ae = {};

function ju(t) {
    const e = Ae[t];
    if (e) return e;
    let n = _[t];
    if (Sn(n)) return Ae[t] = n.bind(_);
    const r = _.document;
    if (r && typeof r.createElement == "function") try {
        const s = r.createElement("iframe");
        s.hidden = !0, r.head.appendChild(s);
        const i = s.contentWindow;
        i && i[t] && (n = i[t]), r.head.removeChild(s)
    } catch (s) {
        Bn && m.warn(`Could not create sandbox iframe for ${t} check, bailing to window.${t}: `, s)
    }
    return n && (Ae[t] = n.bind(_))
}

function $r(t) {
    Ae[t] = void 0
}
const Mt = "__sentry_xhr_v3__";

function ti(t) {
    const e = "xhr";
    _t(e, t), St(e, qu)
}

function qu() {
    if (!_.XMLHttpRequest) return;
    const t = XMLHttpRequest.prototype;
    t.open = new Proxy(t.open, {
        apply(e, n, r) {
            const s = new Error,
                i = U() * 1e3,
                o = st(r[0]) ? r[0].toUpperCase() : void 0,
                a = Gu(r[1]);
            if (!o || !a) return e.apply(n, r);
            n[Mt] = {
                method: o,
                url: a,
                request_headers: {}
            }, o === "POST" && a.match(/sentry_key/) && (n.__sentry_own_request__ = !0);
            const c = () => {
                const u = n[Mt];
                if (u && n.readyState === 4) {
                    try {
                        u.status_code = n.status
                    } catch (d) {}
                    const l = {
                        endTimestamp: U() * 1e3,
                        startTimestamp: i,
                        xhr: n,
                        virtualError: s
                    };
                    z("xhr", l)
                }
            };
            return "onreadystatechange" in n && typeof n.onreadystatechange == "function" ? n.onreadystatechange = new Proxy(n.onreadystatechange, {
                apply(u, l, d) {
                    return c(), u.apply(l, d)
                }
            }) : n.addEventListener("readystatechange", c), n.setRequestHeader = new Proxy(n.setRequestHeader, {
                apply(u, l, d) {
                    const [p, h] = d, g = l[Mt];
                    return g && st(p) && st(h) && (g.request_headers[p.toLowerCase()] = h), u.apply(l, d)
                }
            }), e.apply(n, r)
        }
    }), t.send = new Proxy(t.send, {
        apply(e, n, r) {
            const s = n[Mt];
            if (!s) return e.apply(n, r);
            r[0] !== void 0 && (s.body = r[0]);
            const i = {
                startTimestamp: U() * 1e3,
                xhr: n
            };
            return z("xhr", i), e.apply(n, r)
        }
    })
}

function Gu(t) {
    if (st(t)) return t;
    try {
        return t.toString()
    } catch (e) {}
}
const nn = [],
    Ce = new Map;

function Wu() {
    if (jn() && j) {
        const e = Yu();
        return () => {
            e()
        }
    }
    return () => {}
}
const Fr = {
    click: "click",
    pointerdown: "click",
    pointerup: "click",
    mousedown: "click",
    mouseup: "click",
    touchstart: "click",
    touchend: "click",
    mouseover: "hover",
    mouseout: "hover",
    mouseenter: "hover",
    mouseleave: "hover",
    pointerover: "hover",
    pointerout: "hover",
    pointerenter: "hover",
    pointerleave: "hover",
    dragstart: "drag",
    dragend: "drag",
    drag: "drag",
    dragenter: "drag",
    dragleave: "drag",
    dragover: "drag",
    drop: "drag",
    keydown: "press",
    keyup: "press",
    keypress: "press",
    input: "press"
};

function Yu() {
    return ou(({
        metric: t
    }) => {
        if (t.value == null) return;
        const e = t.entries.find(g => g.duration === t.value && Fr[g.name]);
        if (!e) return;
        const {
            interactionId: n
        } = e, r = Fr[e.name], s = N(j + e.startTime), i = N(t.value), o = H(), a = o ? F(o) : void 0, u = (n != null ? Ce.get(n) : void 0) || a, l = u ? T(u).description : R().getScopeData().transactionName, d = wt(e.target), p = L({
            [P]: "auto.http.browser.inp",
            [Nt]: `ui.interaction.${r}`,
            [Dn]: e.duration
        }), h = Zs({
            name: d,
            transaction: l,
            attributes: p,
            startTime: s
        });
        h && (h.addEvent("inp", {
            [je]: "millisecond",
            [qe]: t.value
        }), h.end(s + i))
    })
}

function zu(t) {
    const e = ({
        entries: n
    }) => {
        const r = H(),
            s = r && F(r);
        n.forEach(i => {
            if (!pu(i) || !s) return;
            const o = i.interactionId;
            if (o != null && !Ce.has(o)) {
                if (nn.length > 10) {
                    const a = nn.shift();
                    Ce.delete(a)
                }
                nn.push(o), Ce.set(o, s)
            }
        })
    };
    re("event", e), re("first-input", e)
}

function Xu(t, e = ju("fetch")) {
    let n = 0,
        r = 0;

    function s(i) {
        const o = i.body.length;
        n += o, r++;
        const a = f({
            body: i.body,
            method: "POST",
            referrerPolicy: "origin",
            headers: t.headers,
            keepalive: n <= 6e4 && r < 15
        }, t.fetchOptions);
        if (!e) return $r("fetch"), Pe("No fetch implementation available");
        try {
            return e(t.url, a).then(c => (n -= o, r--, {
                statusCode: c.status,
                headers: {
                    "x-sentry-rate-limits": c.headers.get("X-Sentry-Rate-Limits"),
                    "retry-after": c.headers.get("Retry-After")
                }
            }))
        } catch (c) {
            return $r("fetch"), n -= o, r--, Pe(c)
        }
    }
    return ka(t, s)
}
const Vu = 30,
    Ku = 50;

function kn(t, e, n, r) {
    const s = {
        filename: t,
        function: e === "<anonymous>" ? vt : e,
        in_app: !0
    };
    return n !== void 0 && (s.lineno = n), r !== void 0 && (s.colno = r), s
}
const Ju = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
    Zu = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    Qu = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    td = t => {
        const e = Ju.exec(t);
        if (e) {
            const [, r, s, i] = e;
            return kn(r, vt, +s, +i)
        }
        const n = Zu.exec(t);
        if (n) {
            if (n[2] && n[2].indexOf("eval") === 0) {
                const o = Qu.exec(n[2]);
                o && (n[2] = o[1], n[3] = o[2], n[4] = o[3])
            }
            const [s, i] = ei(n[1] || vt, n[2]);
            return kn(i, s, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0)
        }
    },
    ed = [Vu, td],
    nd = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    rd = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    sd = t => {
        const e = nd.exec(t);
        if (e) {
            if (e[3] && e[3].indexOf(" > eval") > -1) {
                const i = rd.exec(e[3]);
                i && (e[1] = e[1] || "eval", e[3] = i[1], e[4] = i[2], e[5] = "")
            }
            let r = e[3],
                s = e[1] || vt;
            return [s, r] = ei(s, r), kn(r, s, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
        }
    },
    id = [Ku, sd],
    od = [ed, id],
    ad = Wr(...od),
    ei = (t, e) => {
        const n = t.indexOf("safari-extension") !== -1,
            r = t.indexOf("safari-web-extension") !== -1;
        return n || r ? [t.indexOf("@") !== -1 ? t.split("@")[0] : vt, n ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e]
    },
    we = 1024,
    cd = "Breadcrumbs",
    ud = (t = {}) => {
        const e = f({
            console: !0,
            dom: !0,
            fetch: !0,
            history: !0,
            sentry: !0,
            xhr: !0
        }, t);
        return {
            name: cd,
            setup(n) {
                e.console && Xa(pd(n)), e.dom && Mu(ld(n, e.dom)), e.xhr && ti(md(n)), e.fetch && Fs(hd(n)), e.history && qn(gd(n)), e.sentry && n.on("beforeSendEvent", fd(n))
            }
        }
    },
    dd = ud;

function fd(t) {
    return function(n) {
        I() === t && At({
            category: `sentry.${n.type==="transaction"?"transaction":"event"}`,
            event_id: n.event_id,
            level: n.level,
            message: lt(n)
        }, {
            event: n
        })
    }
}

function ld(t, e) {
    return function(r) {
        if (I() !== t) return;
        let s, i, o = typeof e == "object" ? e.serializeAttribute : void 0,
            a = typeof e == "object" && typeof e.maxStringLength == "number" ? e.maxStringLength : void 0;
        a && a > we && (Q && m.warn(`\`dom.maxStringLength\` cannot exceed ${we}, but a value of ${a} was configured. Sentry will use ${we} instead.`), a = we), typeof o == "string" && (o = [o]);
        try {
            const u = r.event,
                l = _d(u) ? u.target : u;
            s = wt(l, {
                keyAttrs: o,
                maxStringLength: a
            }), i = Jr(l)
        } catch (u) {
            s = "<unknown>"
        }
        if (s.length === 0) return;
        const c = {
            category: `ui.${r.name}`,
            message: s
        };
        i && (c.data = {
            "ui.component_name": i
        }), At(c, {
            event: r.event,
            name: r.name,
            global: r.global
        })
    }
}

function pd(t) {
    return function(n) {
        if (I() !== t) return;
        const r = {
            category: "console",
            data: {
                arguments: n.args,
                logger: "console"
            },
            level: Ka(n.level),
            message: tr(n.args, " ")
        };
        if (n.level === "assert")
            if (n.args[0] === !1) r.message = `Assertion failed: ${tr(n.args.slice(1)," ")||"console.assert"}`, r.data.arguments = n.args.slice(1);
            else return;
        At(r, {
            input: n.args,
            level: n.level
        })
    }
}

function md(t) {
    return function(n) {
        if (I() !== t) return;
        const {
            startTimestamp: r,
            endTimestamp: s
        } = n, i = n.xhr[Mt];
        if (!r || !s || !i) return;
        const {
            method: o,
            url: a,
            status_code: c,
            body: u
        } = i, l = {
            method: o,
            url: a,
            status_code: c
        }, d = {
            xhr: n.xhr,
            input: u,
            startTimestamp: r,
            endTimestamp: s
        }, p = Ms(c);
        At({
            category: "xhr",
            data: l,
            type: "http",
            level: p
        }, d)
    }
}

function hd(t) {
    return function(n) {
        if (I() !== t) return;
        const {
            startTimestamp: r,
            endTimestamp: s
        } = n;
        if (s && !(n.fetchData.url.match(/sentry_key/) && n.fetchData.method === "POST"))
            if (n.error) {
                const i = n.fetchData,
                    o = {
                        data: n.error,
                        input: n.args,
                        startTimestamp: r,
                        endTimestamp: s
                    };
                At({
                    category: "fetch",
                    data: i,
                    level: "error",
                    type: "http"
                }, o)
            } else {
                const i = n.response,
                    o = w(f({}, n.fetchData), {
                        status_code: i && i.status
                    }),
                    a = {
                        input: n.args,
                        response: i,
                        startTimestamp: r,
                        endTimestamp: s
                    },
                    c = Ms(o.status_code);
                At({
                    category: "fetch",
                    data: o,
                    type: "http",
                    level: c
                }, a)
            }
    }
}

function gd(t) {
    return function(n) {
        if (I() !== t) return;
        let r = n.from,
            s = n.to;
        const i = It(S.location.href);
        let o = r ? It(r) : void 0;
        const a = It(s);
        (!o || !o.path) && (o = i), i.protocol === a.protocol && i.host === a.host && (s = a.relative), i.protocol === o.protocol && i.host === o.host && (r = o.relative), At({
            category: "navigation",
            data: {
                from: r,
                to: s
            }
        })
    }
}

function _d(t) {
    return !!t && !!t.target
}
const Sd = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
    yd = "BrowserApiErrors",
    Ed = (t = {}) => {
        const e = f({
            XMLHttpRequest: !0,
            eventTarget: !0,
            requestAnimationFrame: !0,
            setInterval: !0,
            setTimeout: !0
        }, t);
        return {
            name: yd,
            setupOnce() {
                e.setTimeout && G(S, "setTimeout", Hr), e.setInterval && G(S, "setInterval", Hr), e.requestAnimationFrame && G(S, "requestAnimationFrame", Td), e.XMLHttpRequest && "XMLHttpRequest" in S && G(XMLHttpRequest.prototype, "send", Id);
                const n = e.eventTarget;
                n && (Array.isArray(n) ? n : Sd).forEach(vd)
            }
        }
    },
    bd = Ed;

function Hr(t) {
    return function(...e) {
        const n = e[0];
        return e[0] = qt(n, {
            mechanism: {
                data: {
                    function: it(t)
                },
                handled: !1,
                type: "instrument"
            }
        }), t.apply(this, e)
    }
}

function Td(t) {
    return function(e) {
        return t.apply(this, [qt(e, {
            mechanism: {
                data: {
                    function: "requestAnimationFrame",
                    handler: it(t)
                },
                handled: !1,
                type: "instrument"
            }
        })])
    }
}

function Id(t) {
    return function(...e) {
        const n = this;
        return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(s => {
            s in n && typeof n[s] == "function" && G(n, s, function(i) {
                const o = {
                        mechanism: {
                            data: {
                                function: s,
                                handler: it(i)
                            },
                            handled: !1,
                            type: "instrument"
                        }
                    },
                    a = On(i);
                return a && (o.mechanism.data.handler = it(a)), qt(i, o)
            })
        }), t.apply(this, e)
    }
}

function vd(t) {
    const n = S[t],
        r = n && n.prototype;
    !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (G(r, "addEventListener", function(s) {
        return function(i, o, a) {
            try {
                wd(o) && (o.handleEvent = qt(o.handleEvent, {
                    mechanism: {
                        data: {
                            function: "handleEvent",
                            handler: it(o),
                            target: t
                        },
                        handled: !1,
                        type: "instrument"
                    }
                }))
            } catch (c) {}
            return s.apply(this, [i, qt(o, {
                mechanism: {
                    data: {
                        function: "addEventListener",
                        handler: it(o),
                        target: t
                    },
                    handled: !1,
                    type: "instrument"
                }
            }), a])
        }
    }), G(r, "removeEventListener", function(s) {
        return function(i, o, a) {
            try {
                const c = o.__sentry_wrapped__;
                c && s.call(this, i, c, a)
            } catch (c) {}
            return s.call(this, i, o, a)
        }
    }))
}

function wd(t) {
    return typeof t.handleEvent == "function"
}
const kd = () => ({
        name: "BrowserSession",
        setupOnce() {
            if (typeof S.document == "undefined") {
                Q && m.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
                return
            }
            br({
                ignoreDuration: !0
            }), Tr(), qn(({
                from: t,
                to: e
            }) => {
                t !== void 0 && t !== e && (br({
                    ignoreDuration: !0
                }), Tr())
            })
        }
    }),
    Rd = "GlobalHandlers",
    Nd = (t = {}) => {
        const e = f({
            onerror: !0,
            onunhandledrejection: !0
        }, t);
        return {
            name: Rd,
            setupOnce() {
                Error.stackTraceLimit = 50
            },
            setup(n) {
                e.onerror && (Cd(n), Ur("onerror")), e.onunhandledrejection && (Od(n), Ur("onunhandledrejection"))
            }
        }
    },
    Ad = Nd;

function Cd(t) {
    Yr(e => {
        const {
            stackParser: n,
            attachStacktrace: r
        } = ni();
        if (I() !== t || Us()) return;
        const {
            msg: s,
            url: i,
            line: o,
            column: a,
            error: c
        } = e, u = Dd(Un(n, c || s, void 0, r, !1), i, o, a);
        u.level = "error", ks(u, {
            originalException: c,
            mechanism: {
                handled: !1,
                type: "onerror"
            }
        })
    })
}

function Od(t) {
    zr(e => {
        const {
            stackParser: n,
            attachStacktrace: r
        } = ni();
        if (I() !== t || Us()) return;
        const s = xd(e),
            i = Cn(s) ? Pd(s) : Un(n, s, void 0, r, !0);
        i.level = "error", ks(i, {
            originalException: s,
            mechanism: {
                handled: !1,
                type: "onunhandledrejection"
            }
        })
    })
}

function xd(t) {
    if (Cn(t)) return t;
    try {
        if ("reason" in t) return t.reason;
        if ("detail" in t && "reason" in t.detail) return t.detail.reason
    } catch (e) {}
    return t
}

function Pd(t) {
    return {
        exception: {
            values: [{
                type: "UnhandledRejection",
                value: `Non-Error promise rejection captured with value: ${String(t)}`
            }]
        }
    }
}

function Dd(t, e, n, r) {
    const s = t.exception = t.exception || {},
        i = s.values = s.values || [],
        o = i[0] = i[0] || {},
        a = o.stacktrace = o.stacktrace || {},
        c = a.frames = a.frames || [],
        u = r,
        l = n,
        d = st(e) && e.length > 0 ? e : bi();
    return c.length === 0 && c.push({
        colno: u,
        filename: d,
        function: vt,
        in_app: !0,
        lineno: l
    }), t
}

function Ur(t) {
    Q && m.log(`Global Handler attached: ${t}`)
}

function ni() {
    const t = I();
    return t && t.getOptions() || {
        stackParser: () => [],
        attachStacktrace: !1
    }
}
const Ld = () => ({
        name: "HttpContext",
        preprocessEvent(t) {
            if (!S.navigator && !S.location && !S.document) return;
            const e = t.request && t.request.url || S.location && S.location.href,
                {
                    referrer: n
                } = S.document || {},
                {
                    userAgent: r
                } = S.navigator || {},
                s = f(f(f({}, t.request && t.request.headers), n && {
                    Referer: n
                }), r && {
                    "User-Agent": r
                }),
                i = w(f(f({}, t.request), e && {
                    url: e
                }), {
                    headers: s
                });
            t.request = i
        }
    }),
    Md = "cause",
    $d = 5,
    Fd = "LinkedErrors",
    Hd = (t = {}) => {
        const e = t.limit || $d,
            n = t.key || Md;
        return {
            name: Fd,
            preprocessEvent(r, s, i) {
                const o = i.getOptions();
                Ya(Fn, o.stackParser, o.maxValueLength, n, e, r, s)
            }
        }
    },
    Ud = Hd;

function Bd(t) {
    const e = [La(), Oa(), bd(), dd(), Ad(), Ud(), Qa(), Ld()];
    return t.autoSessionTracking !== !1 && e.push(kd()), e
}

function jd(t = {}) {
    const e = {
        defaultIntegrations: Bd(t),
        release: typeof __SENTRY_RELEASE__ == "string" ? __SENTRY_RELEASE__ : S.SENTRY_RELEASE && S.SENTRY_RELEASE.id ? S.SENTRY_RELEASE.id : void 0,
        autoSessionTracking: !0,
        sendClientReports: !0
    };
    return t.defaultIntegrations == null && delete t.defaultIntegrations, f(f({}, e), t)
}

function qd() {
    const t = typeof S.window != "undefined" && S;
    if (!t) return !1;
    const e = t.chrome ? "chrome" : "browser",
        n = t[e],
        r = n && n.runtime && n.runtime.id,
        s = S.location && S.location.href || "",
        i = ["chrome-extension:", "moz-extension:", "ms-browser-extension:", "safari-web-extension:"],
        o = !!r && S === S.top && i.some(c => s.startsWith(`${c}//`)),
        a = typeof t.nw != "undefined";
    return !!r && !o && !a
}

function Gd(t = {}) {
    const e = jd(t);
    if (!e.skipBrowserExtensionCheck && qd()) {
        Ct(() => {
            console.error("[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/")
        });
        return
    }
    Q && ($s() || m.warn("No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill."));
    const n = w(f({}, e), {
        stackParser: fi(e.stackParser || ad),
        integrations: fa(e),
        transport: e.transport || Xu
    });
    return _a(Cc, n)
}
const Br = new WeakMap,
    rn = new Map,
    Oe = {
        traceFetch: !0,
        traceXHR: !0,
        enableHTTPTimings: !0,
        trackFetchStreamPerformance: !1
    };

function Wd(t, e) {
    const {
        traceFetch: n,
        traceXHR: r,
        trackFetchStreamPerformance: s,
        shouldCreateSpanForRequest: i,
        enableHTTPTimings: o,
        tracePropagationTargets: a
    } = f({
        traceFetch: Oe.traceFetch,
        traceXHR: Oe.traceXHR,
        trackFetchStreamPerformance: Oe.trackFetchStreamPerformance
    }, e), c = typeof i == "function" ? i : d => !0, u = d => Xd(d, a), l = {};
    n && (t.addEventProcessor(d => (d.type === "transaction" && d.spans && d.spans.forEach(p => {
        if (p.op === "http.client") {
            const h = rn.get(p.span_id);
            h && (p.timestamp = h / 1e3, rn.delete(p.span_id))
        }
    }), d)), s && dc(d => {
        if (d.response) {
            const p = Br.get(d.response);
            p && d.endTimestamp && rn.set(p, d.endTimestamp)
        }
    }), Fs(d => {
        const p = rc(d, c, u, l);
        if (d.response && d.fetchData.__span && Br.set(d.response, d.fetchData.__span), p) {
            const h = ri(d.fetchData.url),
                g = h ? It(h).host : void 0;
            p.setAttributes({
                "http.url": h,
                "server.address": g
            })
        }
        o && p && jr(p)
    })), r && ti(d => {
        const p = Vd(d, c, u, l);
        o && p && jr(p)
    })
}

function Yd(t) {
    return t.entryType === "resource" && "initiatorType" in t && typeof t.nextHopProtocol == "string" && (t.initiatorType === "fetch" || t.initiatorType === "xmlhttprequest")
}

function jr(t) {
    const {
        url: e
    } = T(t).data || {};
    if (!e || typeof e != "string") return;
    const n = re("resource", ({
        entries: r
    }) => {
        r.forEach(s => {
            Yd(s) && s.name.endsWith(e) && (zd(s).forEach(o => t.setAttribute(...o)), setTimeout(n))
        })
    })
}

function Z(t = 0) {
    return ((j || performance.timeOrigin) + t) / 1e3
}

function zd(t) {
    const {
        name: e,
        version: n
    } = Qs(t.nextHopProtocol), r = [];
    return r.push(["network.protocol.version", n], ["network.protocol.name", e]), j ? [...r, ["http.request.redirect_start", Z(t.redirectStart)],
        ["http.request.fetch_start", Z(t.fetchStart)],
        ["http.request.domain_lookup_start", Z(t.domainLookupStart)],
        ["http.request.domain_lookup_end", Z(t.domainLookupEnd)],
        ["http.request.connect_start", Z(t.connectStart)],
        ["http.request.secure_connection_start", Z(t.secureConnectionStart)],
        ["http.request.connection_end", Z(t.connectEnd)],
        ["http.request.request_start", Z(t.requestStart)],
        ["http.request.response_start", Z(t.responseStart)],
        ["http.request.response_end", Z(t.responseEnd)]
    ] : r
}

function Xd(t, e) {
    const n = S.location && S.location.href;
    if (n) {
        let r, s;
        try {
            r = new URL(t, n), s = new URL(n).origin
        } catch (o) {
            return !1
        }
        const i = r.origin === s;
        return e ? Et(r.toString(), e) || i && Et(r.pathname, e) : i
    } else {
        const r = !!t.match(/^\/(?!\/)/);
        return e ? Et(t, e) : r
    }
}

function Vd(t, e, n, r) {
    const s = t.xhr,
        i = s && s[Mt];
    if (!s || s.__sentry_own_request__ || !i) return;
    const o = ht() && e(i.url);
    if (t.endTimestamp && o) {
        const d = s.__sentry_xhr_span_id__;
        if (!d) return;
        const p = r[d];
        p && i.status_code !== void 0 && (ss(p, i.status_code), p.end(), delete r[d]);
        return
    }
    const a = ri(i.url),
        c = a ? It(a).host : void 0,
        u = !!H(),
        l = o && u ? oe({
            name: `${i.method} ${i.url}`,
            attributes: {
                type: "xhr",
                "http.method": i.method,
                "http.url": a,
                url: i.url,
                "server.address": c,
                [P]: "auto.http.browser",
                [Nt]: "http.client"
            }
        }) : new Yt;
    return s.__sentry_xhr_span_id__ = l.spanContext().spanId, r[s.__sentry_xhr_span_id__] = l, n(i.url) && Kd(s, ht() && u ? l : void 0), l
}

function Kd(t, e) {
    const {
        "sentry-trace": n,
        baggage: r
    } = Ps({
        span: e
    });
    n && Jd(t, n, r)
}

function Jd(t, e, n) {
    try {
        t.setRequestHeader("sentry-trace", e), n && t.setRequestHeader("baggage", n)
    } catch (r) {}
}

function ri(t) {
    try {
        return new URL(t, S.location.origin).href
    } catch (e) {
        return
    }
}

function Zd() {
    S && S.document ? S.document.addEventListener("visibilitychange", () => {
        const t = H();
        if (!t) return;
        const e = F(t);
        if (S.document.hidden && e) {
            const n = "cancelled",
                {
                    op: r,
                    status: s
                } = T(e);
            Q && m.log(`[Tracing] Transaction: ${n} -> since tab moved to the background, op: ${r}`), s || e.setStatus({
                code: x,
                message: n
            }), e.setAttribute("sentry.cancellation_reason", "document.hidden"), e.end()
        }
    }) : Q && m.warn("[Tracing] Could not set up background tab detection due to lack of global document")
}
const Qd = "BrowserTracing",
    tf = f(w(f({}, Ne), {
        instrumentNavigation: !0,
        instrumentPageLoad: !0,
        markBackgroundSpan: !0,
        enableLongTask: !0,
        enableLongAnimationFrame: !0,
        enableInp: !0,
        _experiments: {}
    }), Oe),
    af = (t = {}) => {
        ro();
        const {
            enableInp: e,
            enableLongTask: n,
            enableLongAnimationFrame: r,
            _experiments: {
                enableInteractions: s,
                enableStandaloneClsSpans: i
            },
            beforeStartSpan: o,
            idleTimeout: a,
            finalTimeout: c,
            childSpanTimeout: u,
            markBackgroundSpan: l,
            traceFetch: d,
            traceXHR: p,
            trackFetchStreamPerformance: h,
            shouldCreateSpanForRequest: g,
            enableHTTPTimings: v,
            instrumentPageLoad: A,
            instrumentNavigation: J
        } = f(f({}, tf), t), ut = Su({
            recordClsStandaloneSpans: i || !1
        });
        e && Wu(), r && b.PerformanceObserver && PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes("long-animation-frame") ? Eu() : n && yu(), s && bu();
        const dt = {
            name: void 0,
            source: void 0
        };

        function fe(M, E) {
            const C = E.op === "pageload",
                W = o ? o(E) : E,
                O = W.attributes || {};
            E.name !== W.name && (O[rt] = "custom", W.attributes = O), dt.name = W.name, dt.source = O[rt];
            const $ = ws(W, {
                idleTimeout: a,
                finalTimeout: c,
                childSpanTimeout: u,
                disableAutoFinish: C,
                beforeSpanEnd: k => {
                    ut(), ku(k, {
                        recordClsOnPageloadSpan: !i
                    })
                }
            });

            function q() {
                ["interactive", "complete"].includes(S.document.readyState) && M.emit("idleSpanEnableAutoFinish", $)
            }
            return C && S.document && (S.document.addEventListener("readystatechange", () => {
                q()
            }), q()), $
        }
        return {
            name: Qd,
            afterAllSetup(M) {
                let E, C = S.location && S.location.href;

                function W() {
                    E && !T(E).timestamp && (Q && m.log(`[Tracing] Finishing current active span with op: ${T(E).op}`), E.end())
                }
                M.on("startNavigationSpan", O => {
                    I() === M && (W(), E = fe(M, f({
                        op: "navigation"
                    }, O)))
                }), M.on("startPageLoadSpan", (O, $ = {}) => {
                    if (I() !== M) return;
                    W();
                    const q = $.sentryTrace || qr("sentry-trace"),
                        k = $.baggage || qr("baggage"),
                        Dt = Ki(q, k);
                    R().setPropagationContext(Dt), E = fe(M, f({
                        op: "pageload"
                    }, O))
                }), M.on("spanEnd", O => {
                    const $ = T(O).op;
                    if (O !== F(O) || $ !== "navigation" && $ !== "pageload") return;
                    const q = R(),
                        k = q.getPropagationContext();
                    q.setPropagationContext(w(f({}, k), {
                        sampled: k.sampled !== void 0 ? k.sampled : xt(O),
                        dsc: k.dsc || zt(O)
                    }))
                }), S.location && (A && ef(M, {
                    name: S.location.pathname,
                    startTime: j ? j / 1e3 : void 0,
                    attributes: {
                        [rt]: "url",
                        [P]: "auto.pageload.browser"
                    }
                }), J && qn(({
                    to: O,
                    from: $
                }) => {
                    if ($ === void 0 && C && C.indexOf(O) !== -1) {
                        C = void 0;
                        return
                    }
                    $ !== O && (C = void 0, nf(M, {
                        name: S.location.pathname,
                        attributes: {
                            [rt]: "url",
                            [P]: "auto.navigation.browser"
                        }
                    }))
                })), l && Zd(), s && rf(a, c, u, dt), e && zu(), Wd(M, {
                    traceFetch: d,
                    traceXHR: p,
                    trackFetchStreamPerformance: h,
                    tracePropagationTargets: M.getOptions().tracePropagationTargets,
                    shouldCreateSpanForRequest: g,
                    enableHTTPTimings: v
                })
            }
        }
    };

function ef(t, e, n) {
    t.emit("startPageLoadSpan", e, n), R().setTransactionName(e.name);
    const r = H();
    return (r && T(r).op) === "pageload" ? r : void 0
}

function nf(t, e) {
    ct().setPropagationContext({
        traceId: pt()
    }), R().setPropagationContext({
        traceId: pt()
    }), t.emit("startNavigationSpan", e), R().setTransactionName(e.name);
    const n = H();
    return (n && T(n).op) === "navigation" ? n : void 0
}

function qr(t) {
    const e = Ti(`meta[name=${t}]`);
    return e ? e.getAttribute("content") : void 0
}

function rf(t, e, n, r) {
    let s;
    const i = () => {
        const o = "ui.action.click",
            a = H(),
            c = a && F(a);
        if (c) {
            const u = T(c).op;
            if (["navigation", "pageload"].includes(u)) {
                Q && m.warn(`[Tracing] Did not create ${o} span because a pageload or navigation span is in progress.`);
                return
            }
        }
        if (s && (s.setAttribute(dn, "interactionInterrupted"), s.end(), s = void 0), !r.name) {
            Q && m.warn(`[Tracing] Did not create ${o} transaction because _latestRouteName is missing.`);
            return
        }
        s = ws({
            name: r.name,
            op: o,
            attributes: {
                [rt]: r.source || "url"
            }
        }, {
            idleTimeout: t,
            finalTimeout: e,
            childSpanTimeout: n
        })
    };
    S.document && addEventListener("click", i, {
        once: !1,
        capture: !0
    })
}

function cf(t) {
    const e = f({}, t);
    return xs(e, "react"), ra("react", {
        version: ai.version
    }), Gd(e)
}
export {
    af as b, cf as i, Pn as w
};
//# sourceMappingURL=sentry-1CVSdSoY.js.map