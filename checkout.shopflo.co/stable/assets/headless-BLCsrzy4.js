var _t = Object.defineProperty,
    Wt = Object.defineProperties;
var qt = Object.getOwnPropertyDescriptors;
var we = Object.getOwnPropertySymbols;
var at = Object.prototype.hasOwnProperty,
    it = Object.prototype.propertyIsEnumerable;
var ut = (e, t, n) => t in e ? _t(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    L = (e, t) => {
        for (var n in t || (t = {})) at.call(t, n) && ut(e, n, t[n]);
        if (we)
            for (var n of we(t)) it.call(t, n) && ut(e, n, t[n]);
        return e
    },
    N = (e, t) => Wt(e, qt(t));
var C = (e, t) => {
    var n = {};
    for (var r in e) at.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && we)
        for (var r of we(e)) t.indexOf(r) < 0 && it.call(e, r) && (n[r] = e[r]);
    return n
};
import {
    r as i,
    R as h,
    T as me,
    a as Vt
} from "./react-core-C02-NrKc.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b379eae4-f447-4c40-bf47-446e0bb8572e", e._sentryDebugIdIdentifier = "sentry-dbid-b379eae4-f447-4c40-bf47-446e0bb8572e")
    } catch (n) {}
})();
var Yt = Object.defineProperty,
    Kt = (e, t, n) => t in e ? Yt(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    Me = (e, t, n) => (Kt(e, typeof t != "symbol" ? t + "" : t, n), n);
let Gt = class {
        constructor() {
            Me(this, "current", this.detect()), Me(this, "handoffState", "pending"), Me(this, "currentId", 0)
        }
        set(t) {
            this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t)
        }
        reset() {
            this.set(this.detect())
        }
        nextId() {
            return ++this.currentId
        }
        get isServer() {
            return this.current === "server"
        }
        get isClient() {
            return this.current === "client"
        }
        detect() {
            return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client"
        }
        handoff() {
            this.handoffState === "pending" && (this.handoffState = "complete")
        }
        get isHandoffComplete() {
            return this.handoffState === "complete"
        }
    },
    B = new Gt,
    k = (e, t) => {
        B.isServer ? i.useEffect(e, t) : i.useLayoutEffect(e, t)
    };

function U(e) {
    let t = i.useRef(e);
    return k(() => {
        t.current = e
    }, [e]), t
}
let y = function(e) {
    let t = U(e);
    return h.useCallback((...n) => t.current(...n), [t])
};

function De(e) {
    typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch(t => setTimeout(() => {
        throw t
    }))
}

function te() {
    let e = [],
        t = {
            addEventListener(n, r, l, u) {
                return n.addEventListener(r, l, u), t.add(() => n.removeEventListener(r, l, u))
            },
            requestAnimationFrame(...n) {
                let r = requestAnimationFrame(...n);
                return t.add(() => cancelAnimationFrame(r))
            },
            nextFrame(...n) {
                return t.requestAnimationFrame(() => t.requestAnimationFrame(...n))
            },
            setTimeout(...n) {
                let r = setTimeout(...n);
                return t.add(() => clearTimeout(r))
            },
            microTask(...n) {
                let r = {
                    current: !0
                };
                return De(() => {
                    r.current && n[0]()
                }), t.add(() => {
                    r.current = !1
                })
            },
            style(n, r, l) {
                let u = n.style.getPropertyValue(r);
                return Object.assign(n.style, {
                    [r]: l
                }), this.add(() => {
                    Object.assign(n.style, {
                        [r]: u
                    })
                })
            },
            group(n) {
                let r = te();
                return n(r), this.add(() => r.dispose())
            },
            add(n) {
                return e.push(n), () => {
                    let r = e.indexOf(n);
                    if (r >= 0)
                        for (let l of e.splice(r, 1)) l()
                }
            },
            dispose() {
                for (let n of e.splice(0)) n()
            }
        };
    return t
}

function Ge() {
    let [e] = i.useState(te);
    return i.useEffect(() => () => e.dispose(), [e]), e
}

function Xt() {
    let e = typeof document == "undefined";
    return "useSyncExternalStore" in me ? (t => t.useSyncExternalStore)(me)(() => () => {}, () => !1, () => !e) : !1
}

function ue() {
    let e = Xt(),
        [t, n] = i.useState(B.isHandoffComplete);
    return t && B.isHandoffComplete === !1 && n(!1), i.useEffect(() => {
        t !== !0 && n(!0)
    }, [t]), i.useEffect(() => B.handoff(), []), e ? !1 : t
}
var st;
let Y = (st = h.useId) != null ? st : function() {
    let e = ue(),
        [t, n] = h.useState(e ? () => B.nextId() : null);
    return k(() => {
        t === null && n(B.nextId())
    }, [t]), t != null ? "" + t : void 0
};

function P(e, t, ...n) {
    if (e in t) {
        let l = t[e];
        return typeof l == "function" ? l(...n) : l
    }
    let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(l=>`"${l}"`).join(", ")}.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, P), r
}

function Xe(e) {
    return B.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
}
let Ue = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(",");
var Q = (e => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Q || {}),
    vt = (e => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(vt || {}),
    zt = (e => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(zt || {});

function Qt(e = document.body) {
    return e == null ? [] : Array.from(e.querySelectorAll(Ue)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)))
}
var gt = (e => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(gt || {});

function Zt(e, t = 0) {
    var n;
    return e === ((n = Xe(e)) == null ? void 0 : n.body) ? !1 : P(t, {
        0() {
            return e.matches(Ue)
        },
        1() {
            let r = e;
            for (; r !== null;) {
                if (r.matches(Ue)) return !0;
                r = r.parentElement
            }
            return !1
        }
    })
}
var Jt = (e => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Jt || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", e => {
    e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
}, !0), document.addEventListener("click", e => {
    e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "")
}, !0));

function ee(e) {
    e == null || e.focus({
        preventScroll: !0
    })
}
let en = ["textarea", "input"].join(",");

function tn(e) {
    var t, n;
    return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, en)) != null ? n : !1
}

function nn(e, t = n => n) {
    return e.slice().sort((n, r) => {
        let l = t(n),
            u = t(r);
        if (l === null || u === null) return 0;
        let o = l.compareDocumentPosition(u);
        return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
    })
}

function Se(e, t, {
    sorted: n = !0,
    relativeTo: r = null,
    skipElements: l = []
} = {}) {
    let u = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
        o = Array.isArray(e) ? n ? nn(e) : e : Qt(e);
    l.length > 0 && o.length > 1 && (o = o.filter(m => !l.includes(m))), r = r != null ? r : u.activeElement;
    let a = (() => {
            if (t & 5) return 1;
            if (t & 10) return -1;
            throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
        })(),
        s = (() => {
            if (t & 1) return 0;
            if (t & 2) return Math.max(0, o.indexOf(r)) - 1;
            if (t & 4) return Math.max(0, o.indexOf(r)) + 1;
            if (t & 8) return o.length - 1;
            throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
        })(),
        d = t & 32 ? {
            preventScroll: !0
        } : {},
        c = 0,
        f = o.length,
        g;
    do {
        if (c >= f || c + f <= 0) return 0;
        let m = s + c;
        if (t & 16) m = (m + f) % f;
        else {
            if (m < 0) return 3;
            if (m >= f) return 1
        }
        g = o[m], g == null || g.focus(d), c += a
    } while (g !== u.activeElement);
    return t & 6 && tn(g) && g.select(), 2
}

function ht() {
    return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
}

function rn() {
    return /Android/gi.test(window.navigator.userAgent)
}

function ln() {
    return ht() || rn()
}

function $e(e, t, n) {
    let r = U(t);
    i.useEffect(() => {
        function l(u) {
            r.current(u)
        }
        return document.addEventListener(e, l, n), () => document.removeEventListener(e, l, n)
    }, [e, n])
}

function Et(e, t, n) {
    let r = U(t);
    i.useEffect(() => {
        function l(u) {
            r.current(u)
        }
        return window.addEventListener(e, l, n), () => window.removeEventListener(e, l, n)
    }, [e, n])
}

function on(e, t, n = !0) {
    let r = i.useRef(!1);
    i.useEffect(() => {
        requestAnimationFrame(() => {
            r.current = n
        })
    }, [n]);

    function l(o, a) {
        if (!r.current || o.defaultPrevented) return;
        let s = a(o);
        if (s === null || !s.getRootNode().contains(s) || !s.isConnected) return;
        let d = function c(f) {
            return typeof f == "function" ? c(f()) : Array.isArray(f) || f instanceof Set ? f : [f]
        }(e);
        for (let c of d) {
            if (c === null) continue;
            let f = c instanceof HTMLElement ? c : c.current;
            if (f != null && f.contains(s) || o.composed && o.composedPath().includes(f)) return
        }
        return !Zt(s, gt.Loose) && s.tabIndex !== -1 && o.preventDefault(), t(o, s)
    }
    let u = i.useRef(null);
    $e("pointerdown", o => {
        var a, s;
        r.current && (u.current = ((s = (a = o.composedPath) == null ? void 0 : a.call(o)) == null ? void 0 : s[0]) || o.target)
    }, !0), $e("mousedown", o => {
        var a, s;
        r.current && (u.current = ((s = (a = o.composedPath) == null ? void 0 : a.call(o)) == null ? void 0 : s[0]) || o.target)
    }, !0), $e("click", o => {
        ln() || u.current && (l(o, () => u.current), u.current = null)
    }, !0), $e("touchend", o => l(o, () => o.target instanceof HTMLElement ? o.target : null), !0), Et("blur", o => l(o, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
}

function ve(...e) {
    return i.useMemo(() => Xe(...e), [...e])
}

function ct(e) {
    var t;
    if (e.type) return e.type;
    let n = (t = e.as) != null ? t : "button";
    if (typeof n == "string" && n.toLowerCase() === "button") return "button"
}

function un(e, t) {
    let [n, r] = i.useState(() => ct(e));
    return k(() => {
        r(ct(e))
    }, [e.type, e.as]), k(() => {
        n || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && r("button")
    }, [n, t]), n
}
let bt = Symbol();

function yt(e, t = !0) {
    return Object.assign(e, {
        [bt]: t
    })
}

function x(...e) {
    let t = i.useRef(e);
    i.useEffect(() => {
        t.current = e
    }, [e]);
    let n = y(r => {
        for (let l of t.current) l != null && (typeof l == "function" ? l(r) : l.current = r)
    });
    return e.every(r => r == null || (r == null ? void 0 : r[bt])) ? void 0 : n
}

function ze(e, t) {
    let n = i.useRef([]),
        r = y(e);
    i.useEffect(() => {
        let l = [...n.current];
        for (let [u, o] of t.entries())
            if (n.current[u] !== o) {
                let a = r(t, l);
                return n.current = t, a
            }
    }, [r, ...t])
}

function Pe(...e) {
    return Array.from(new Set(e.flatMap(t => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ")
}
var oe = (e => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(oe || {}),
    V = (e => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(V || {});

function F({
    ourProps: e,
    theirProps: t,
    slot: n,
    defaultTag: r,
    features: l,
    visible: u = !0,
    name: o,
    mergeRefs: a
}) {
    a = a != null ? a : an;
    let s = $t(t, e);
    if (u) return Te(s, n, r, o, a);
    let d = l != null ? l : 0;
    if (d & 2) {
        let c = s,
            {
                static: g = !1
            } = c,
            m = C(c, ["static"]);
        if (g) return Te(m, n, r, o, a)
    }
    if (d & 1) {
        let f = s,
            {
                unmount: g = !0
            } = f,
            m = C(f, ["unmount"]);
        return P(g ? 0 : 1, {
            0() {
                return null
            },
            1() {
                return Te(N(L({}, m), {
                    hidden: !0,
                    style: {
                        display: "none"
                    }
                }), n, r, o, a)
            }
        })
    }
    return Te(s, n, r, o, a)
}

function Te(e, t = {}, n, r, l) {
    let g = Ie(e, ["unmount", "static"]),
        {
            as: u = n,
            children: o,
            refName: a = "ref"
        } = g,
        s = C(g, ["as", "children", "refName"]),
        d = e.ref !== void 0 ? {
            [a]: e.ref
        } : {},
        c = typeof o == "function" ? o(t) : o;
    "className" in s && s.className && typeof s.className == "function" && (s.className = s.className(t));
    let f = {};
    if (t) {
        let m = !1,
            v = [];
        for (let [b, p] of Object.entries(t)) typeof p == "boolean" && (m = !0), p === !0 && v.push(b);
        m && (f["data-headlessui-state"] = v.join(" "))
    }
    if (u === i.Fragment && Object.keys(dt(s)).length > 0) {
        if (!i.isValidElement(c) || Array.isArray(c) && c.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(s).map(p => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(p => `  - ${p}`).join(`
`)].join(`
`));
        let m = c.props,
            v = typeof(m == null ? void 0 : m.className) == "function" ? (...p) => Pe(m == null ? void 0 : m.className(...p), s.className) : Pe(m == null ? void 0 : m.className, s.className),
            b = v ? {
                className: v
            } : {};
        return i.cloneElement(c, Object.assign({}, $t(c.props, dt(Ie(s, ["ref"]))), f, d, {
            ref: l(c.ref, d.ref)
        }, b))
    }
    return i.createElement(u, Object.assign({}, Ie(s, ["ref"]), u !== i.Fragment && d, u !== i.Fragment && f), c)
}

function wt() {
    let e = i.useRef([]),
        t = i.useCallback(n => {
            for (let r of e.current) r != null && (typeof r == "function" ? r(n) : r.current = n)
        }, []);
    return (...n) => {
        if (!n.every(r => r == null)) return e.current = n, t
    }
}

function an(...e) {
    return e.every(t => t == null) ? void 0 : t => {
        for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t)
    }
}

function $t(...e) {
    if (e.length === 0) return {};
    if (e.length === 1) return e[0];
    let t = {},
        n = {};
    for (let r of e)
        for (let l in r) l.startsWith("on") && typeof r[l] == "function" ? (n[l] != null || (n[l] = []), n[l].push(r[l])) : t[l] = r[l];
    if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map(r => [r, void 0])));
    for (let r in n) Object.assign(t, {
        [r](l, ...u) {
            let o = n[r];
            for (let a of o) {
                if ((l instanceof Event || (l == null ? void 0 : l.nativeEvent) instanceof Event) && l.defaultPrevented) return;
                a(l, ...u)
            }
        }
    });
    return t
}

function R(e) {
    var t;
    return Object.assign(i.forwardRef(e), {
        displayName: (t = e.displayName) != null ? t : e.name
    })
}

function dt(e) {
    let t = Object.assign({}, e);
    for (let n in t) t[n] === void 0 && delete t[n];
    return t
}

function Ie(e, t = []) {
    let n = Object.assign({}, e);
    for (let r of t) r in n && delete n[r];
    return n
}
let sn = "div";
var Ce = (e => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ce || {});

function cn(e, t) {
    var n;
    let o = e,
        {
            features: r = 1
        } = o,
        l = C(o, ["features"]),
        u = {
            ref: t,
            "aria-hidden": (r & 2) === 2 ? !0 : (n = l["aria-hidden"]) != null ? n : void 0,
            hidden: (r & 4) === 4 ? !0 : void 0,
            style: L({
                position: "fixed",
                top: 1,
                left: 1,
                width: 1,
                height: 0,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                borderWidth: "0"
            }, (r & 4) === 4 && (r & 2) !== 2 && {
                display: "none"
            })
        };
    return F({
        ourProps: u,
        theirProps: l,
        slot: {},
        defaultTag: sn,
        name: "Hidden"
    })
}
let _e = R(cn),
    Qe = i.createContext(null);
Qe.displayName = "OpenClosedContext";
var D = (e => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(D || {});

function Re() {
    return i.useContext(Qe)
}

function Tt({
    value: e,
    children: t
}) {
    return h.createElement(Qe.Provider, {
        value: e
    }, t)
}

function dn(e) {
    function t() {
        document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t))
    }
    typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", t), t())
}
let q = [];
dn(() => {
    function e(t) {
        t.target instanceof HTMLElement && t.target !== document.body && q[0] !== t.target && (q.unshift(t.target), q = q.filter(n => n != null && n.isConnected), q.splice(10))
    }
    window.addEventListener("click", e, {
        capture: !0
    }), window.addEventListener("mousedown", e, {
        capture: !0
    }), window.addEventListener("focus", e, {
        capture: !0
    }), document.body.addEventListener("click", e, {
        capture: !0
    }), document.body.addEventListener("mousedown", e, {
        capture: !0
    }), document.body.addEventListener("focus", e, {
        capture: !0
    })
});

function St(e) {
    let t = e.parentElement,
        n = null;
    for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
    let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
    return r && fn(n) ? !1 : r
}

function fn(e) {
    if (!e) return !1;
    let t = e.previousElementSibling;
    for (; t !== null;) {
        if (t instanceof HTMLLegendElement) return !1;
        t = t.previousElementSibling
    }
    return !0
}
var Z = (e => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Z || {});

function Pt(e, t, n, r) {
    let l = U(n);
    i.useEffect(() => {
        e = e != null ? e : window;

        function u(o) {
            l.current(o)
        }
        return e.addEventListener(t, u, r), () => e.removeEventListener(t, u, r)
    }, [e, t, r])
}

function ge() {
    let e = i.useRef(!1);
    return k(() => (e.current = !0, () => {
        e.current = !1
    }), []), e
}

function Ct(e) {
    let t = y(e),
        n = i.useRef(!1);
    i.useEffect(() => (n.current = !1, () => {
        n.current = !0, De(() => {
            n.current && t()
        })
    }), [t])
}
var pe = (e => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(pe || {});

function pn() {
    let e = i.useRef(0);
    return Et("keydown", t => {
        t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0)
    }, !0), e
}

function Lt(e) {
    if (!e) return new Set;
    if (typeof e == "function") return new Set(e());
    let t = new Set;
    for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
    return t
}
let mn = "div";
var Dt = (e => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Dt || {});

function vn(e, t) {
    let n = i.useRef(null),
        r = x(n, t),
        b = e,
        {
            initialFocus: l,
            containers: u,
            features: o = 30
        } = b,
        a = C(b, ["initialFocus", "containers", "features"]);
    ue() || (o = 1);
    let s = ve(n);
    En({
        ownerDocument: s
    }, !!(o & 16));
    let d = bn({
        ownerDocument: s,
        container: n,
        initialFocus: l
    }, !!(o & 2));
    yn({
        ownerDocument: s,
        container: n,
        containers: u,
        previousActiveElement: d
    }, !!(o & 8));
    let c = pn(),
        f = y(p => {
            let w = n.current;
            w && ($ => $())(() => {
                P(c.current, {
                    [pe.Forwards]: () => {
                        Se(w, Q.First, {
                            skipElements: [p.relatedTarget]
                        })
                    },
                    [pe.Backwards]: () => {
                        Se(w, Q.Last, {
                            skipElements: [p.relatedTarget]
                        })
                    }
                })
            })
        }),
        g = Ge(),
        m = i.useRef(!1),
        v = {
            ref: r,
            onKeyDown(p) {
                p.key == "Tab" && (m.current = !0, g.requestAnimationFrame(() => {
                    m.current = !1
                }))
            },
            onBlur(p) {
                let w = Lt(u);
                n.current instanceof HTMLElement && w.add(n.current);
                let $ = p.relatedTarget;
                $ instanceof HTMLElement && $.dataset.headlessuiFocusGuard !== "true" && (Rt(w, $) || (m.current ? Se(n.current, P(c.current, {
                    [pe.Forwards]: () => Q.Next,
                    [pe.Backwards]: () => Q.Previous
                }) | Q.WrapAround, {
                    relativeTo: p.target
                }) : p.target instanceof HTMLElement && ee(p.target)))
            }
        };
    return h.createElement(h.Fragment, null, !!(o & 4) && h.createElement(_e, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: f,
        features: Ce.Focusable
    }), F({
        ourProps: v,
        theirProps: a,
        defaultTag: mn,
        name: "FocusTrap"
    }), !!(o & 4) && h.createElement(_e, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: f,
        features: Ce.Focusable
    }))
}
let gn = R(vn),
    de = Object.assign(gn, {
        features: Dt
    });

function hn(e = !0) {
    let t = i.useRef(q.slice());
    return ze(([n], [r]) => {
        r === !0 && n === !1 && De(() => {
            t.current.splice(0)
        }), r === !1 && n === !0 && (t.current = q.slice())
    }, [e, q, t]), y(() => {
        var n;
        return (n = t.current.find(r => r != null && r.isConnected)) != null ? n : null
    })
}

function En({
    ownerDocument: e
}, t) {
    let n = hn(t);
    ze(() => {
        t || (e == null ? void 0 : e.activeElement) === (e == null ? void 0 : e.body) && ee(n())
    }, [t]), Ct(() => {
        t && ee(n())
    })
}

function bn({
    ownerDocument: e,
    container: t,
    initialFocus: n
}, r) {
    let l = i.useRef(null),
        u = ge();
    return ze(() => {
        if (!r) return;
        let o = t.current;
        o && De(() => {
            if (!u.current) return;
            let a = e == null ? void 0 : e.activeElement;
            if (n != null && n.current) {
                if ((n == null ? void 0 : n.current) === a) {
                    l.current = a;
                    return
                }
            } else if (o.contains(a)) {
                l.current = a;
                return
            }
            n != null && n.current ? ee(n.current) : Se(o, Q.First) === vt.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), l.current = e == null ? void 0 : e.activeElement
        })
    }, [r]), l
}

function yn({
    ownerDocument: e,
    container: t,
    containers: n,
    previousActiveElement: r
}, l) {
    let u = ge();
    Pt(e == null ? void 0 : e.defaultView, "focus", o => {
        if (!l || !u.current) return;
        let a = Lt(n);
        t.current instanceof HTMLElement && a.add(t.current);
        let s = r.current;
        if (!s) return;
        let d = o.target;
        d && d instanceof HTMLElement ? Rt(a, d) ? (r.current = d, ee(d)) : (o.preventDefault(), o.stopPropagation(), ee(s)) : ee(r.current)
    }, !0)
}

function Rt(e, t) {
    for (let n of e)
        if (n.contains(t)) return !0;
    return !1
}
let Ft = i.createContext(!1);

function wn() {
    return i.useContext(Ft)
}

function We(e) {
    return h.createElement(Ft.Provider, {
        value: e.force
    }, e.children)
}

function $n(e) {
    let t = wn(),
        n = i.useContext(Ot),
        r = ve(e),
        [l, u] = i.useState(() => {
            if (!t && n !== null || B.isServer) return null;
            let o = r == null ? void 0 : r.getElementById("headlessui-portal-root");
            if (o) return o;
            if (r === null) return null;
            let a = r.createElement("div");
            return a.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(a)
        });
    return i.useEffect(() => {
        l !== null && (r != null && r.body.contains(l) || r == null || r.body.appendChild(l))
    }, [l, r]), i.useEffect(() => {
        t || n !== null && u(n.current)
    }, [n, u, t]), l
}
let Tn = i.Fragment;

function Sn(e, t) {
    let n = e,
        r = i.useRef(null),
        l = x(yt(c => {
            r.current = c
        }), t),
        u = ve(r),
        o = $n(r),
        [a] = i.useState(() => {
            var c;
            return B.isServer ? null : (c = u == null ? void 0 : u.createElement("div")) != null ? c : null
        }),
        s = i.useContext(qe),
        d = ue();
    return k(() => {
        !o || !a || o.contains(a) || (a.setAttribute("data-headlessui-portal", ""), o.appendChild(a))
    }, [o, a]), k(() => {
        if (a && s) return s.register(a)
    }, [s, a]), Ct(() => {
        var c;
        !o || !a || (a instanceof Node && o.contains(a) && o.removeChild(a), o.childNodes.length <= 0 && ((c = o.parentElement) == null || c.removeChild(o)))
    }), d ? !o || !a ? null : Vt.createPortal(F({
        ourProps: {
            ref: l
        },
        theirProps: n,
        defaultTag: Tn,
        name: "Portal"
    }), a) : null
}
let Pn = i.Fragment,
    Ot = i.createContext(null);

function Cn(e, t) {
    let u = e,
        {
            target: n
        } = u,
        r = C(u, ["target"]),
        l = {
            ref: x(t)
        };
    return h.createElement(Ot.Provider, {
        value: n
    }, F({
        ourProps: l,
        theirProps: r,
        defaultTag: Pn,
        name: "Popover.Group"
    }))
}
let qe = i.createContext(null);

function Ln() {
    let e = i.useContext(qe),
        t = i.useRef([]),
        n = y(u => (t.current.push(u), e && e.register(u), () => r(u))),
        r = y(u => {
            let o = t.current.indexOf(u);
            o !== -1 && t.current.splice(o, 1), e && e.unregister(u)
        }),
        l = i.useMemo(() => ({
            register: n,
            unregister: r,
            portals: t
        }), [n, r, t]);
    return [t, i.useMemo(() => function({
        children: u
    }) {
        return h.createElement(qe.Provider, {
            value: l
        }, u)
    }, [l])]
}
let Dn = R(Sn),
    Rn = R(Cn),
    Ve = Object.assign(Dn, {
        Group: Rn
    });

function Fn(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
const On = typeof Object.is == "function" ? Object.is : Fn,
    {
        useState: kn,
        useEffect: xn,
        useLayoutEffect: Nn,
        useDebugValue: Mn
    } = me;

function In(e, t, n) {
    const r = t(),
        [{
            inst: l
        }, u] = kn({
            inst: {
                value: r,
                getSnapshot: t
            }
        });
    return Nn(() => {
        l.value = r, l.getSnapshot = t, Ae(l) && u({
            inst: l
        })
    }, [e, r, t]), xn(() => (Ae(l) && u({
        inst: l
    }), e(() => {
        Ae(l) && u({
            inst: l
        })
    })), [e]), Mn(r), r
}

function Ae(e) {
    const t = e.getSnapshot,
        n = e.value;
    try {
        const r = t();
        return !On(n, r)
    } catch (r) {
        return !0
    }
}

function An(e, t, n) {
    return t()
}
const Hn = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined",
    jn = !Hn,
    Bn = jn ? An : In,
    Un = "useSyncExternalStore" in me ? (e => e.useSyncExternalStore)(me) : Bn;

function _n(e) {
    return Un(e.subscribe, e.getSnapshot, e.getSnapshot)
}

function Wn(e, t) {
    let n = e(),
        r = new Set;
    return {
        getSnapshot() {
            return n
        },
        subscribe(l) {
            return r.add(l), () => r.delete(l)
        },
        dispatch(l, ...u) {
            let o = t[l].call(n, ...u);
            o && (n = o, r.forEach(a => a()))
        }
    }
}

function qn() {
    let e;
    return {
        before({
            doc: t
        }) {
            var n;
            let r = t.documentElement;
            e = ((n = t.defaultView) != null ? n : window).innerWidth - r.clientWidth
        },
        after({
            doc: t,
            d: n
        }) {
            let r = t.documentElement,
                l = r.clientWidth - r.offsetWidth,
                u = e - l;
            n.style(r, "paddingRight", `${u}px`)
        }
    }
}

function Vn() {
    return ht() ? {
        before({
            doc: e,
            d: t,
            meta: n
        }) {
            function r(l) {
                return n.containers.flatMap(u => u()).some(u => u.contains(l))
            }
            t.microTask(() => {
                var l;
                if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
                    let a = te();
                    a.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => a.dispose()))
                }
                let u = (l = window.scrollY) != null ? l : window.pageYOffset,
                    o = null;
                t.addEventListener(e, "click", a => {
                    if (a.target instanceof HTMLElement) try {
                        let s = a.target.closest("a");
                        if (!s) return;
                        let {
                            hash: d
                        } = new URL(s.href), c = e.querySelector(d);
                        c && !r(c) && (o = c)
                    } catch (s) {}
                }, !0), t.addEventListener(e, "touchstart", a => {
                    if (a.target instanceof HTMLElement)
                        if (r(a.target)) {
                            let s = a.target;
                            for (; s.parentElement && r(s.parentElement);) s = s.parentElement;
                            t.style(s, "overscrollBehavior", "contain")
                        } else t.style(a.target, "touchAction", "none")
                }), t.addEventListener(e, "touchmove", a => {
                    if (a.target instanceof HTMLElement)
                        if (r(a.target)) {
                            let s = a.target;
                            for (; s.parentElement && s.dataset.headlessuiPortal !== "" && !(s.scrollHeight > s.clientHeight || s.scrollWidth > s.clientWidth);) s = s.parentElement;
                            s.dataset.headlessuiPortal === "" && a.preventDefault()
                        } else a.preventDefault()
                }, {
                    passive: !1
                }), t.add(() => {
                    var a;
                    let s = (a = window.scrollY) != null ? a : window.pageYOffset;
                    u !== s && window.scrollTo(0, u), o && o.isConnected && (o.scrollIntoView({
                        block: "nearest"
                    }), o = null)
                })
            })
        }
    } : {}
}

function Yn() {
    return {
        before({
            doc: e,
            d: t
        }) {
            t.style(e.documentElement, "overflow", "hidden")
        }
    }
}

function Kn(e) {
    let t = {};
    for (let n of e) Object.assign(t, n(t));
    return t
}
let J = Wn(() => new Map, {
    PUSH(e, t) {
        var n;
        let r = (n = this.get(e)) != null ? n : {
            doc: e,
            count: 0,
            d: te(),
            meta: new Set
        };
        return r.count++, r.meta.add(t), this.set(e, r), this
    },
    POP(e, t) {
        let n = this.get(e);
        return n && (n.count--, n.meta.delete(t)), this
    },
    SCROLL_PREVENT({
        doc: e,
        d: t,
        meta: n
    }) {
        let r = {
                doc: e,
                d: t,
                meta: Kn(n)
            },
            l = [Vn(), qn(), Yn()];
        l.forEach(({
            before: u
        }) => u == null ? void 0 : u(r)), l.forEach(({
            after: u
        }) => u == null ? void 0 : u(r))
    },
    SCROLL_ALLOW({
        d: e
    }) {
        e.dispose()
    },
    TEARDOWN({
        doc: e
    }) {
        this.delete(e)
    }
});
J.subscribe(() => {
    let e = J.getSnapshot(),
        t = new Map;
    for (let [n] of e) t.set(n, n.documentElement.style.overflow);
    for (let n of e.values()) {
        let r = t.get(n.doc) === "hidden",
            l = n.count !== 0;
        (l && !r || !l && r) && J.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && J.dispatch("TEARDOWN", n)
    }
});

function Gn(e, t, n) {
    let r = _n(J),
        l = e ? r.get(e) : void 0,
        u = l ? l.count > 0 : !1;
    return k(() => {
        if (!(!e || !t)) return J.dispatch("PUSH", e, n), () => J.dispatch("POP", e, n)
    }, [t, e]), u
}
let He = new Map,
    fe = new Map;

function ft(e, t = !0) {
    k(() => {
        var n;
        if (!t) return;
        let r = typeof e == "function" ? e() : e.current;
        if (!r) return;

        function l() {
            var o;
            if (!r) return;
            let a = (o = fe.get(r)) != null ? o : 1;
            if (a === 1 ? fe.delete(r) : fe.set(r, a - 1), a !== 1) return;
            let s = He.get(r);
            s && (s["aria-hidden"] === null ? r.removeAttribute("aria-hidden") : r.setAttribute("aria-hidden", s["aria-hidden"]), r.inert = s.inert, He.delete(r))
        }
        let u = (n = fe.get(r)) != null ? n : 0;
        return fe.set(r, u + 1), u !== 0 || (He.set(r, {
            "aria-hidden": r.getAttribute("aria-hidden"),
            inert: r.inert
        }), r.setAttribute("aria-hidden", "true"), r.inert = !0), l
    }, [e, t])
}

function Xn({
    defaultContainers: e = [],
    portals: t,
    mainTreeNodeRef: n
} = {}) {
    var r;
    let l = i.useRef((r = n == null ? void 0 : n.current) != null ? r : null),
        u = ve(l),
        o = y(() => {
            var a, s, d;
            let c = [];
            for (let f of e) f !== null && (f instanceof HTMLElement ? c.push(f) : "current" in f && f.current instanceof HTMLElement && c.push(f.current));
            if (t != null && t.current)
                for (let f of t.current) c.push(f);
            for (let f of (a = u == null ? void 0 : u.querySelectorAll("html > *, body > *")) != null ? a : []) f !== document.body && f !== document.head && f instanceof HTMLElement && f.id !== "headlessui-portal-root" && (f.contains(l.current) || f.contains((d = (s = l.current) == null ? void 0 : s.getRootNode()) == null ? void 0 : d.host) || c.some(g => f.contains(g)) || c.push(f));
            return c
        });
    return {
        resolveContainers: o,
        contains: y(a => o().some(s => s.contains(a))),
        mainTreeNodeRef: l,
        MainTreeNode: i.useMemo(() => function() {
            return n != null ? null : h.createElement(_e, {
                features: Ce.Hidden,
                ref: l
            })
        }, [l, n])
    }
}
let Ze = i.createContext(() => {});
Ze.displayName = "StackContext";
var Ye = (e => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Ye || {});

function zn() {
    return i.useContext(Ze)
}

function Qn({
    children: e,
    onUpdate: t,
    type: n,
    element: r,
    enabled: l
}) {
    let u = zn(),
        o = y((...a) => {
            t == null || t(...a), u(...a)
        });
    return k(() => {
        let a = l === void 0 || l === !0;
        return a && o(0, n, r), () => {
            a && o(1, n, r)
        }
    }, [o, n, r, l]), h.createElement(Ze.Provider, {
        value: o
    }, e)
}
let kt = i.createContext(null);

function xt() {
    let e = i.useContext(kt);
    if (e === null) {
        let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
        throw Error.captureStackTrace && Error.captureStackTrace(t, xt), t
    }
    return e
}

function Zn() {
    let [e, t] = i.useState([]);
    return [e.length > 0 ? e.join(" ") : void 0, i.useMemo(() => function(n) {
        let r = y(u => (t(o => [...o, u]), () => t(o => {
                let a = o.slice(),
                    s = a.indexOf(u);
                return s !== -1 && a.splice(s, 1), a
            }))),
            l = i.useMemo(() => ({
                register: r,
                slot: n.slot,
                name: n.name,
                props: n.props
            }), [r, n.slot, n.name, n.props]);
        return h.createElement(kt.Provider, {
            value: l
        }, n.children)
    }, [t])]
}
let Jn = "p";

function er(e, t) {
    let n = Y(),
        s = e,
        {
            id: r = `headlessui-description-${n}`
        } = s,
        l = C(s, ["id"]),
        u = xt(),
        o = x(t);
    k(() => u.register(r), [r, u.register]);
    let a = N(L({
        ref: o
    }, u.props), {
        id: r
    });
    return F({
        ourProps: a,
        theirProps: l,
        slot: u.slot || {},
        defaultTag: Jn,
        name: u.name || "Description"
    })
}
let tr = R(er),
    nr = Object.assign(tr, {});
var rr = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(rr || {}),
    lr = (e => (e[e.SetTitleId = 0] = "SetTitleId", e))(lr || {});
let or = {
        0(e, t) {
            return e.titleId === t.id ? e : N(L({}, e), {
                titleId: t.id
            })
        }
    },
    Le = i.createContext(null);
Le.displayName = "DialogContext";

function he(e) {
    let t = i.useContext(Le);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, he), n
    }
    return t
}

function ur(e, t, n = () => [document.body]) {
    Gn(e, t, r => {
        var l;
        return {
            containers: [...(l = r.containers) != null ? l : [], n]
        }
    })
}

function ar(e, t) {
    return P(t.type, or, e, t)
}
let ir = "div",
    sr = oe.RenderStrategy | oe.Static;

function cr(e, t) {
    let n = Y(),
        ot = e,
        {
            id: r = `headlessui-dialog-${n}`,
            open: l,
            onClose: u,
            initialFocus: o,
            role: a = "dialog",
            __demoMode: s = !1
        } = ot,
        d = C(ot, ["id", "open", "onClose", "initialFocus", "role", "__demoMode"]),
        [c, f] = i.useState(0),
        g = i.useRef(!1);
    a = function() {
        return a === "dialog" || a === "alertdialog" ? a : (g.current || (g.current = !0, console.warn(`Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")
    }();
    let m = Re();
    l === void 0 && m !== null && (l = (m & D.Open) === D.Open);
    let v = i.useRef(null),
        b = x(v, t),
        p = ve(v),
        w = e.hasOwnProperty("open") || m !== null,
        $ = e.hasOwnProperty("onClose");
    if (!w && !$) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
    if (!w) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
    if (!$) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
    if (typeof l != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${l}`);
    if (typeof u != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${u}`);
    let E = l ? 0 : 1,
        [T, I] = i.useReducer(ar, {
            titleId: null,
            descriptionId: null,
            panelRef: i.createRef()
        }),
        O = y(() => u(!1)),
        ne = y(S => I({
            type: 0,
            id: S
        })),
        K = ue() ? s ? !1 : E === 0 : !1,
        A = c > 1,
        G = i.useContext(Le) !== null,
        [ae, re] = Ln(),
        ie = {
            get current() {
                var S;
                return (S = T.panelRef.current) != null ? S : v.current
            }
        },
        {
            resolveContainers: se,
            mainTreeNodeRef: X,
            MainTreeNode: xe
        } = Xn({
            portals: ae,
            defaultContainers: [ie]
        }),
        z = A ? "parent" : "leaf",
        Ee = m !== null ? (m & D.Closing) === D.Closing : !1,
        Ne = G || Ee ? !1 : K,
        le = i.useCallback(() => {
            var S, j;
            return (j = Array.from((S = p == null ? void 0 : p.querySelectorAll("body > *")) != null ? S : []).find(M => M.id === "headlessui-portal-root" ? !1 : M.contains(X.current) && M instanceof HTMLElement)) != null ? j : null
        }, [X]);
    ft(le, Ne);
    let ce = A ? !0 : K,
        _ = i.useCallback(() => {
            var S, j;
            return (j = Array.from((S = p == null ? void 0 : p.querySelectorAll("[data-headlessui-portal]")) != null ? S : []).find(M => M.contains(X.current) && M instanceof HTMLElement)) != null ? j : null
        }, [X]);
    ft(_, ce), on(se, S => {
        S.preventDefault(), O()
    }, !(!K || A));
    let be = !(A || E !== 0);
    Pt(p == null ? void 0 : p.defaultView, "keydown", S => {
        be && (S.defaultPrevented || S.key === Z.Escape && (S.preventDefault(), S.stopPropagation(), O()))
    }), ur(p, !(Ee || E !== 0 || G), se), i.useEffect(() => {
        if (E !== 0 || !v.current) return;
        let S = new ResizeObserver(j => {
            for (let M of j) {
                let ye = M.target.getBoundingClientRect();
                ye.x === 0 && ye.y === 0 && ye.width === 0 && ye.height === 0 && O()
            }
        });
        return S.observe(v.current), () => S.disconnect()
    }, [E, v, O]);
    let [Ht, jt] = Zn(), Bt = i.useMemo(() => [{
        dialogState: E,
        close: O,
        setTitleId: ne
    }, T], [E, T, O, ne]), lt = i.useMemo(() => ({
        open: E === 0
    }), [E]), Ut = {
        ref: b,
        id: r,
        role: a,
        "aria-modal": E === 0 ? !0 : void 0,
        "aria-labelledby": T.titleId,
        "aria-describedby": Ht
    };
    return h.createElement(Qn, {
        type: "Dialog",
        enabled: E === 0,
        element: v,
        onUpdate: y((S, j) => {
            j === "Dialog" && P(S, {
                [Ye.Add]: () => f(M => M + 1),
                [Ye.Remove]: () => f(M => M - 1)
            })
        })
    }, h.createElement(We, {
        force: !0
    }, h.createElement(Ve, null, h.createElement(Le.Provider, {
        value: Bt
    }, h.createElement(Ve.Group, {
        target: v
    }, h.createElement(We, {
        force: !1
    }, h.createElement(jt, {
        slot: lt,
        name: "Dialog.Description"
    }, h.createElement(de, {
        initialFocus: o,
        containers: se,
        features: K ? P(z, {
            parent: de.features.RestoreFocus,
            leaf: de.features.All & ~de.features.FocusLock
        }) : de.features.None
    }, h.createElement(re, null, F({
        ourProps: Ut,
        theirProps: d,
        slot: lt,
        defaultTag: ir,
        features: sr,
        visible: E === 0,
        name: "Dialog"
    }))))))))), h.createElement(xe, null))
}
let dr = "div";

function fr(e, t) {
    let n = Y(),
        c = e,
        {
            id: r = `headlessui-dialog-overlay-${n}`
        } = c,
        l = C(c, ["id"]),
        [{
            dialogState: u,
            close: o
        }] = he("Dialog.Overlay"),
        a = x(t),
        s = y(f => {
            if (f.target === f.currentTarget) {
                if (St(f.currentTarget)) return f.preventDefault();
                f.preventDefault(), f.stopPropagation(), o()
            }
        }),
        d = i.useMemo(() => ({
            open: u === 0
        }), [u]);
    return F({
        ourProps: {
            ref: a,
            id: r,
            "aria-hidden": !0,
            onClick: s
        },
        theirProps: l,
        slot: d,
        defaultTag: dr,
        name: "Dialog.Overlay"
    })
}
let pr = "div";

function mr(e, t) {
    let n = Y(),
        d = e,
        {
            id: r = `headlessui-dialog-backdrop-${n}`
        } = d,
        l = C(d, ["id"]),
        [{
            dialogState: u
        }, o] = he("Dialog.Backdrop"),
        a = x(t);
    i.useEffect(() => {
        if (o.panelRef.current === null) throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")
    }, [o.panelRef]);
    let s = i.useMemo(() => ({
        open: u === 0
    }), [u]);
    return h.createElement(We, {
        force: !0
    }, h.createElement(Ve, null, F({
        ourProps: {
            ref: a,
            id: r,
            "aria-hidden": !0
        },
        theirProps: l,
        slot: s,
        defaultTag: pr,
        name: "Dialog.Backdrop"
    })))
}
let vr = "div";

function gr(e, t) {
    let n = Y(),
        c = e,
        {
            id: r = `headlessui-dialog-panel-${n}`
        } = c,
        l = C(c, ["id"]),
        [{
            dialogState: u
        }, o] = he("Dialog.Panel"),
        a = x(t, o.panelRef),
        s = i.useMemo(() => ({
            open: u === 0
        }), [u]),
        d = y(f => {
            f.stopPropagation()
        });
    return F({
        ourProps: {
            ref: a,
            id: r,
            onClick: d
        },
        theirProps: l,
        slot: s,
        defaultTag: vr,
        name: "Dialog.Panel"
    })
}
let hr = "h2";

function Er(e, t) {
    let n = Y(),
        d = e,
        {
            id: r = `headlessui-dialog-title-${n}`
        } = d,
        l = C(d, ["id"]),
        [{
            dialogState: u,
            setTitleId: o
        }] = he("Dialog.Title"),
        a = x(t);
    i.useEffect(() => (o(r), () => o(null)), [r, o]);
    let s = i.useMemo(() => ({
        open: u === 0
    }), [u]);
    return F({
        ourProps: {
            ref: a,
            id: r
        },
        theirProps: l,
        slot: s,
        defaultTag: hr,
        name: "Dialog.Title"
    })
}
let br = R(cr),
    yr = R(mr),
    wr = R(gr),
    $r = R(fr),
    Tr = R(Er),
    ol = Object.assign(br, {
        Backdrop: yr,
        Panel: wr,
        Overlay: $r,
        Title: Tr,
        Description: nr
    });
var pt;
let Sr = (pt = h.startTransition) != null ? pt : function(e) {
    e()
};
var Pr = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Pr || {}),
    Cr = (e => (e[e.ToggleDisclosure = 0] = "ToggleDisclosure", e[e.CloseDisclosure = 1] = "CloseDisclosure", e[e.SetButtonId = 2] = "SetButtonId", e[e.SetPanelId = 3] = "SetPanelId", e[e.LinkPanel = 4] = "LinkPanel", e[e.UnlinkPanel = 5] = "UnlinkPanel", e))(Cr || {});
let Lr = {
        0: e => N(L({}, e), {
            disclosureState: P(e.disclosureState, {
                0: 1,
                1: 0
            })
        }),
        1: e => e.disclosureState === 1 ? e : N(L({}, e), {
            disclosureState: 1
        }),
        4(e) {
            return e.linkedPanel === !0 ? e : N(L({}, e), {
                linkedPanel: !0
            })
        },
        5(e) {
            return e.linkedPanel === !1 ? e : N(L({}, e), {
                linkedPanel: !1
            })
        },
        2(e, t) {
            return e.buttonId === t.buttonId ? e : N(L({}, e), {
                buttonId: t.buttonId
            })
        },
        3(e, t) {
            return e.panelId === t.panelId ? e : N(L({}, e), {
                panelId: t.panelId
            })
        }
    },
    Je = i.createContext(null);
Je.displayName = "DisclosureContext";

function et(e) {
    let t = i.useContext(Je);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, et), n
    }
    return t
}
let tt = i.createContext(null);
tt.displayName = "DisclosureAPIContext";

function Nt(e) {
    let t = i.useContext(tt);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, Nt), n
    }
    return t
}
let nt = i.createContext(null);
nt.displayName = "DisclosurePanelContext";

function Dr() {
    return i.useContext(nt)
}

function Rr(e, t) {
    return P(t.type, Lr, e, t)
}
let Fr = i.Fragment;

function Or(e, t) {
    let p = e,
        {
            defaultOpen: n = !1
        } = p,
        r = C(p, ["defaultOpen"]),
        l = i.useRef(null),
        u = x(t, yt(w => {
            l.current = w
        }, e.as === void 0 || e.as === i.Fragment)),
        o = i.useRef(null),
        a = i.useRef(null),
        s = i.useReducer(Rr, {
            disclosureState: n ? 0 : 1,
            linkedPanel: !1,
            buttonRef: a,
            panelRef: o,
            buttonId: null,
            panelId: null
        }),
        [{
            disclosureState: d,
            buttonId: c
        }, f] = s,
        g = y(w => {
            f({
                type: 1
            });
            let $ = Xe(l);
            if (!$ || !c) return;
            let E = w ? w instanceof HTMLElement ? w : w.current instanceof HTMLElement ? w.current : $.getElementById(c) : $.getElementById(c);
            E == null || E.focus()
        }),
        m = i.useMemo(() => ({
            close: g
        }), [g]),
        v = i.useMemo(() => ({
            open: d === 0,
            close: g
        }), [d, g]),
        b = {
            ref: u
        };
    return h.createElement(Je.Provider, {
        value: s
    }, h.createElement(tt.Provider, {
        value: m
    }, h.createElement(Tt, {
        value: P(d, {
            0: D.Open,
            1: D.Closed
        })
    }, F({
        ourProps: b,
        theirProps: r,
        slot: v,
        defaultTag: Fr,
        name: "Disclosure"
    }))))
}
let kr = "button";

function xr(e, t) {
    let n = Y(),
        $ = e,
        {
            id: r = `headlessui-disclosure-button-${n}`
        } = $,
        l = C($, ["id"]),
        [u, o] = et("Disclosure.Button"),
        a = Dr(),
        s = a === null ? !1 : a === u.panelId,
        d = i.useRef(null),
        c = x(d, t, s ? null : u.buttonRef),
        f = wt();
    i.useEffect(() => {
        if (!s) return o({
            type: 2,
            buttonId: r
        }), () => {
            o({
                type: 2,
                buttonId: null
            })
        }
    }, [r, o, s]);
    let g = y(E => {
            var T;
            if (s) {
                if (u.disclosureState === 1) return;
                switch (E.key) {
                    case Z.Space:
                    case Z.Enter:
                        E.preventDefault(), E.stopPropagation(), o({
                            type: 0
                        }), (T = u.buttonRef.current) == null || T.focus();
                        break
                }
            } else switch (E.key) {
                case Z.Space:
                case Z.Enter:
                    E.preventDefault(), E.stopPropagation(), o({
                        type: 0
                    });
                    break
            }
        }),
        m = y(E => {
            switch (E.key) {
                case Z.Space:
                    E.preventDefault();
                    break
            }
        }),
        v = y(E => {
            var T;
            St(E.currentTarget) || e.disabled || (s ? (o({
                type: 0
            }), (T = u.buttonRef.current) == null || T.focus()) : o({
                type: 0
            }))
        }),
        b = i.useMemo(() => ({
            open: u.disclosureState === 0
        }), [u]),
        p = un(e, d),
        w = s ? {
            ref: c,
            type: p,
            onKeyDown: g,
            onClick: v
        } : {
            ref: c,
            id: r,
            type: p,
            "aria-expanded": u.disclosureState === 0,
            "aria-controls": u.linkedPanel ? u.panelId : void 0,
            onKeyDown: g,
            onKeyUp: m,
            onClick: v
        };
    return F({
        mergeRefs: f,
        ourProps: w,
        theirProps: l,
        slot: b,
        defaultTag: kr,
        name: "Disclosure.Button"
    })
}
let Nr = "div",
    Mr = oe.RenderStrategy | oe.Static;

function Ir(e, t) {
    let n = Y(),
        v = e,
        {
            id: r = `headlessui-disclosure-panel-${n}`
        } = v,
        l = C(v, ["id"]),
        [u, o] = et("Disclosure.Panel"),
        {
            close: a
        } = Nt("Disclosure.Panel"),
        s = wt(),
        d = x(t, u.panelRef, b => {
            Sr(() => o({
                type: b ? 4 : 5
            }))
        });
    i.useEffect(() => (o({
        type: 3,
        panelId: r
    }), () => {
        o({
            type: 3,
            panelId: null
        })
    }), [r, o]);
    let c = Re(),
        f = c !== null ? (c & D.Open) === D.Open : u.disclosureState === 0,
        g = i.useMemo(() => ({
            open: u.disclosureState === 0,
            close: a
        }), [u, a]),
        m = {
            ref: d,
            id: r
        };
    return h.createElement(nt.Provider, {
        value: u.panelId
    }, F({
        mergeRefs: s,
        ourProps: m,
        theirProps: l,
        slot: g,
        defaultTag: Nr,
        features: Mr,
        visible: f,
        name: "Disclosure.Panel"
    }))
}
let Ar = R(Or),
    Hr = R(xr),
    jr = R(Ir),
    ul = Object.assign(Ar, {
        Button: Hr,
        Panel: jr
    });

function Br(e = 0) {
    let [t, n] = i.useState(e), r = ge(), l = i.useCallback(s => {
        r.current && n(d => d | s)
    }, [t, r]), u = i.useCallback(s => !!(t & s), [t]), o = i.useCallback(s => {
        r.current && n(d => d & ~s)
    }, [n, r]), a = i.useCallback(s => {
        r.current && n(d => d ^ s)
    }, [n]);
    return {
        flags: t,
        addFlag: l,
        hasFlag: u,
        removeFlag: o,
        toggleFlag: a
    }
}

function Ur(e) {
    let t = {
        called: !1
    };
    return (...n) => {
        if (!t.called) return t.called = !0, e(...n)
    }
}

function je(e, ...t) {
    e && t.length > 0 && e.classList.add(...t)
}

function Be(e, ...t) {
    e && t.length > 0 && e.classList.remove(...t)
}

function _r(e, t) {
    let n = te();
    if (!e) return n.dispose;
    let {
        transitionDuration: r,
        transitionDelay: l
    } = getComputedStyle(e), [u, o] = [r, l].map(s => {
        let [d = 0] = s.split(",").filter(Boolean).map(c => c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3).sort((c, f) => f - c);
        return d
    }), a = u + o;
    if (a !== 0) {
        n.group(d => {
            d.setTimeout(() => {
                t(), d.dispose()
            }, a), d.addEventListener(e, "transitionrun", c => {
                c.target === c.currentTarget && d.dispose()
            })
        });
        let s = n.addEventListener(e, "transitionend", d => {
            d.target === d.currentTarget && (t(), s())
        })
    } else t();
    return n.add(() => t()), n.dispose
}

function Wr(e, t, n, r) {
    let l = n ? "enter" : "leave",
        u = te(),
        o = r !== void 0 ? Ur(r) : () => {};
    l === "enter" && (e.removeAttribute("hidden"), e.style.display = "");
    let a = P(l, {
            enter: () => t.enter,
            leave: () => t.leave
        }),
        s = P(l, {
            enter: () => t.enterTo,
            leave: () => t.leaveTo
        }),
        d = P(l, {
            enter: () => t.enterFrom,
            leave: () => t.leaveFrom
        });
    return Be(e, ...t.base, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), je(e, ...t.base, ...a, ...d), u.nextFrame(() => {
        Be(e, ...t.base, ...a, ...d), je(e, ...t.base, ...a, ...s), _r(e, () => (Be(e, ...t.base, ...a), je(e, ...t.base, ...t.entered), o()))
    }), u.dispose
}

function qr({
    immediate: e,
    container: t,
    direction: n,
    classes: r,
    onStart: l,
    onStop: u
}) {
    let o = ge(),
        a = Ge(),
        s = U(n);
    k(() => {
        e && (s.current = "enter")
    }, [e]), k(() => {
        let d = te();
        a.add(d.dispose);
        let c = t.current;
        if (c && s.current !== "idle" && o.current) return d.dispose(), l.current(s.current), d.add(Wr(c, r.current, s.current === "enter", () => {
            d.dispose(), u.current(s.current)
        })), d.dispose
    }, [n])
}

function W(e = "") {
    return e.split(/\s+/).filter(t => t.length > 1)
}
let Fe = i.createContext(null);
Fe.displayName = "TransitionContext";
var Vr = (e => (e.Visible = "visible", e.Hidden = "hidden", e))(Vr || {});

function Yr() {
    let e = i.useContext(Fe);
    if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    return e
}

function Kr() {
    let e = i.useContext(Oe);
    if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    return e
}
let Oe = i.createContext(null);
Oe.displayName = "NestingContext";

function ke(e) {
    return "children" in e ? ke(e.children) : e.current.filter(({
        el: t
    }) => t.current !== null).filter(({
        state: t
    }) => t === "visible").length > 0
}

function Mt(e, t) {
    let n = U(e),
        r = i.useRef([]),
        l = ge(),
        u = Ge(),
        o = y((m, v = V.Hidden) => {
            let b = r.current.findIndex(({
                el: p
            }) => p === m);
            b !== -1 && (P(v, {
                [V.Unmount]() {
                    r.current.splice(b, 1)
                },
                [V.Hidden]() {
                    r.current[b].state = "hidden"
                }
            }), u.microTask(() => {
                var p;
                !ke(r) && l.current && ((p = n.current) == null || p.call(n))
            }))
        }),
        a = y(m => {
            let v = r.current.find(({
                el: b
            }) => b === m);
            return v ? v.state !== "visible" && (v.state = "visible") : r.current.push({
                el: m,
                state: "visible"
            }), () => o(m, V.Unmount)
        }),
        s = i.useRef([]),
        d = i.useRef(Promise.resolve()),
        c = i.useRef({
            enter: [],
            leave: [],
            idle: []
        }),
        f = y((m, v, b) => {
            s.current.splice(0), t && (t.chains.current[v] = t.chains.current[v].filter(([p]) => p !== m)), t == null || t.chains.current[v].push([m, new Promise(p => {
                s.current.push(p)
            })]), t == null || t.chains.current[v].push([m, new Promise(p => {
                Promise.all(c.current[v].map(([w, $]) => $)).then(() => p())
            })]), v === "enter" ? d.current = d.current.then(() => t == null ? void 0 : t.wait.current).then(() => b(v)) : b(v)
        }),
        g = y((m, v, b) => {
            Promise.all(c.current[v].splice(0).map(([p, w]) => w)).then(() => {
                var p;
                (p = s.current.shift()) == null || p()
            }).then(() => b(v))
        });
    return i.useMemo(() => ({
        children: r,
        register: a,
        unregister: o,
        onStart: f,
        onStop: g,
        wait: d,
        chains: c
    }), [a, o, r, f, g, c, d])
}

function Gr() {}
let Xr = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

function mt(e) {
    var t;
    let n = {};
    for (let r of Xr) n[r] = (t = e[r]) != null ? t : Gr;
    return n
}

function zr(e) {
    let t = i.useRef(mt(e));
    return i.useEffect(() => {
        t.current = mt(e)
    }, [e]), t
}
let Qr = "div",
    It = oe.RenderStrategy;

function Zr(e, t) {
    var n, r;
    let be = e,
        {
            beforeEnter: l,
            afterEnter: u,
            beforeLeave: o,
            afterLeave: a,
            enter: s,
            enterFrom: d,
            enterTo: c,
            entered: f,
            leave: g,
            leaveFrom: m,
            leaveTo: v
        } = be,
        b = C(be, ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave", "enter", "enterFrom", "enterTo", "entered", "leave", "leaveFrom", "leaveTo"]),
        p = i.useRef(null),
        w = x(p, t),
        $ = (n = b.unmount) == null || n ? V.Unmount : V.Hidden,
        {
            show: E,
            appear: T,
            initial: I
        } = Yr(),
        [O, ne] = i.useState(E ? "visible" : "hidden"),
        K = Kr(),
        {
            register: A,
            unregister: G
        } = K;
    i.useEffect(() => A(p), [A, p]), i.useEffect(() => {
        if ($ === V.Hidden && p.current) {
            if (E && O !== "visible") {
                ne("visible");
                return
            }
            return P(O, {
                hidden: () => G(p),
                visible: () => A(p)
            })
        }
    }, [O, p, A, G, E, $]);
    let ae = U({
            base: W(b.className),
            enter: W(s),
            enterFrom: W(d),
            enterTo: W(c),
            entered: W(f),
            leave: W(g),
            leaveFrom: W(m),
            leaveTo: W(v)
        }),
        re = zr({
            beforeEnter: l,
            afterEnter: u,
            beforeLeave: o,
            afterLeave: a
        }),
        ie = ue();
    i.useEffect(() => {
        if (ie && O === "visible" && p.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
    }, [p, O, ie]);
    let se = I && !T,
        X = T && E && I,
        xe = !ie || se ? "idle" : E ? "enter" : "leave",
        z = Br(0),
        Ee = y(H => P(H, {
            enter: () => {
                z.addFlag(D.Opening), re.current.beforeEnter()
            },
            leave: () => {
                z.addFlag(D.Closing), re.current.beforeLeave()
            },
            idle: () => {}
        })),
        Ne = y(H => P(H, {
            enter: () => {
                z.removeFlag(D.Opening), re.current.afterEnter()
            },
            leave: () => {
                z.removeFlag(D.Closing), re.current.afterLeave()
            },
            idle: () => {}
        })),
        le = Mt(() => {
            ne("hidden"), G(p)
        }, K),
        ce = i.useRef(!1);
    qr({
        immediate: X,
        container: p,
        classes: ae,
        direction: xe,
        onStart: U(H => {
            ce.current = !0, le.onStart(p, H, Ee)
        }),
        onStop: U(H => {
            ce.current = !1, le.onStop(p, H, Ne), H === "leave" && !ke(le) && (ne("hidden"), G(p))
        })
    });
    let _ = b,
        rt = {
            ref: w
        };
    return X ? _ = N(L({}, _), {
        className: Pe(b.className, ...ae.current.enter, ...ae.current.enterFrom)
    }) : ce.current && (_.className = Pe(b.className, (r = p.current) == null ? void 0 : r.className), _.className === "" && delete _.className), h.createElement(Oe.Provider, {
        value: le
    }, h.createElement(Tt, {
        value: P(O, {
            visible: D.Open,
            hidden: D.Closed
        }) | z.flags
    }, F({
        ourProps: rt,
        theirProps: _,
        defaultTag: Qr,
        features: It,
        visible: O === "visible",
        name: "Transition.Child"
    })))
}

function Jr(e, t) {
    let E = e,
        {
            show: n,
            appear: r = !1,
            unmount: l = !0
        } = E,
        u = C(E, ["show", "appear", "unmount"]),
        o = i.useRef(null),
        a = x(o, t);
    ue();
    let s = Re();
    if (n === void 0 && s !== null && (n = (s & D.Open) === D.Open), ![!0, !1].includes(n)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
    let [d, c] = i.useState(n ? "visible" : "hidden"), f = Mt(() => {
        c("hidden")
    }), [g, m] = i.useState(!0), v = i.useRef([n]);
    k(() => {
        g !== !1 && v.current[v.current.length - 1] !== n && (v.current.push(n), m(!1))
    }, [v, n]);
    let b = i.useMemo(() => ({
        show: n,
        appear: r,
        initial: g
    }), [n, r, g]);
    i.useEffect(() => {
        if (n) c("visible");
        else if (!ke(f)) c("hidden");
        else {
            let T = o.current;
            if (!T) return;
            let I = T.getBoundingClientRect();
            I.x === 0 && I.y === 0 && I.width === 0 && I.height === 0 && c("hidden")
        }
    }, [n, f]);
    let p = {
            unmount: l
        },
        w = y(() => {
            var T;
            g && m(!1), (T = e.beforeEnter) == null || T.call(e)
        }),
        $ = y(() => {
            var T;
            g && m(!1), (T = e.beforeLeave) == null || T.call(e)
        });
    return h.createElement(Oe.Provider, {
        value: f
    }, h.createElement(Fe.Provider, {
        value: b
    }, F({
        ourProps: N(L({}, p), {
            as: i.Fragment,
            children: h.createElement(At, N(L(L({
                ref: a
            }, p), u), {
                beforeEnter: w,
                beforeLeave: $
            }))
        }),
        theirProps: {},
        defaultTag: i.Fragment,
        features: It,
        visible: d === "visible",
        name: "Transition"
    })))
}

function el(e, t) {
    let n = i.useContext(Fe) !== null,
        r = Re() !== null;
    return h.createElement(h.Fragment, null, !n && r ? h.createElement(Ke, L({
        ref: t
    }, e)) : h.createElement(At, L({
        ref: t
    }, e)))
}
let Ke = R(Jr),
    At = R(Zr),
    tl = R(el),
    al = Object.assign(Ke, {
        Child: tl,
        Root: Ke
    });
export {
    ul as A, ol as _, al as q
};
//# sourceMappingURL=headless-BLCsrzy4.js.map