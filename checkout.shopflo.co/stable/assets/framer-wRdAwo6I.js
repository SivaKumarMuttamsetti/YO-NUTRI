var Xi = Object.defineProperty,
    Yi = Object.defineProperties;
var qi = Object.getOwnPropertyDescriptors;
var Ft = Object.getOwnPropertySymbols;
var rn = Object.prototype.hasOwnProperty,
    an = Object.prototype.propertyIsEnumerable;
var Qt = Math.pow,
    on = (t, e, n) => e in t ? Xi(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n,
    g = (t, e) => {
        for (var n in e || (e = {})) rn.call(e, n) && on(t, n, e[n]);
        if (Ft)
            for (var n of Ft(e)) an.call(e, n) && on(t, n, e[n]);
        return t
    },
    A = (t, e) => Yi(t, qi(e));
var U = (t, e) => {
    var n = {};
    for (var s in t) rn.call(t, s) && e.indexOf(s) < 0 && (n[s] = t[s]);
    if (t != null && Ft)
        for (var s of Ft(t)) e.indexOf(s) < 0 && an.call(t, s) && (n[s] = t[s]);
    return n
};
import {
    r as x,
    j as H,
    g as De,
    h as D,
    i as St,
    n as $,
    k as Me,
    t as ft,
    v as Zi,
    l as X,
    s as G,
    o as Ps,
    p as Ji,
    q as Qi,
    w as to,
    x as Ss,
    y as eo,
    z as bs,
    A as bt,
    B as I,
    C as Z,
    D as no,
    E as so,
    F as ln,
    G as io,
    H as Re,
    I as oo,
    J as Vs,
    K as ro,
    L as ws,
    M as As,
    N as Cs,
    O as te,
    P as ao,
    Q as lo
} from "./react-core-C02-NrKc.js";
(function() {
    try {
        var t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {},
            e = new t.Error().stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "fc51c1d7-8249-43e3-9af1-aa3ca71be611", t._sentryDebugIdIdentifier = "sentry-dbid-fc51c1d7-8249-43e3-9af1-aa3ca71be611")
    } catch (n) {}
})();
const Ee = x.createContext({});

function Le(t) {
    const e = x.useRef(null);
    return e.current === null && (e.current = t()), e.current
}
const Be = typeof window != "undefined",
    Ds = Be ? x.useLayoutEffect : x.useEffect,
    Rt = x.createContext(null),
    ke = x.createContext({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
    });
class co extends x.Component {
    getSnapshotBeforeUpdate(e) {
        const n = this.props.childRef.current;
        if (n && e.isPresent && !this.props.isPresent) {
            const s = n.offsetParent,
                i = s instanceof HTMLElement && s.offsetWidth || 0,
                r = this.props.sizeRef.current;
            r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft, r.right = i - r.width - r.left
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}

function uo({
    children: t,
    isPresent: e,
    anchorX: n
}) {
    const s = x.useId(),
        i = x.useRef(null),
        r = x.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            right: 0
        }),
        {
            nonce: o
        } = x.useContext(ke);
    return x.useInsertionEffect(() => {
        const {
            width: a,
            height: l,
            top: u,
            left: c,
            right: h
        } = r.current;
        if (e || !i.current || !a || !l) return;
        const f = n === "left" ? `left: ${c}` : `right: ${h}`;
        i.current.dataset.motionPopId = s;
        const d = document.createElement("style");
        return o && (d.nonce = o), document.head.appendChild(d), d.sheet && d.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${l}px !important;
            ${f}px !important;
            top: ${u}px !important;
          }
        `), () => {
            document.head.removeChild(d)
        }
    }, [e]), H.jsx(co, {
        isPresent: e,
        childRef: i,
        sizeRef: r,
        children: x.cloneElement(t, {
            ref: i
        })
    })
}
const ho = ({
    children: t,
    initial: e,
    isPresent: n,
    onExitComplete: s,
    custom: i,
    presenceAffectsLayout: r,
    mode: o,
    anchorX: a
}) => {
    const l = Le(fo),
        u = x.useId(),
        c = x.useCallback(f => {
            l.set(f, !0);
            for (const d of l.values())
                if (!d) return;
            s && s()
        }, [l, s]),
        h = x.useMemo(() => ({
            id: u,
            initial: e,
            isPresent: n,
            custom: i,
            onExitComplete: c,
            register: f => (l.set(f, !1), () => l.delete(f))
        }), r ? [Math.random(), c] : [n, c]);
    return x.useMemo(() => {
        l.forEach((f, d) => l.set(d, !1))
    }, [n]), x.useEffect(() => {
        !n && !l.size && s && s()
    }, [n]), o === "popLayout" && (t = H.jsx(uo, {
        isPresent: n,
        anchorX: a,
        children: t
    })), H.jsx(Rt.Provider, {
        value: h,
        children: t
    })
};

function fo() {
    return new Map
}

function Ms(t = !0) {
    const e = x.useContext(Rt);
    if (e === null) return [!0, null];
    const {
        isPresent: n,
        onExitComplete: s,
        register: i
    } = e, r = x.useId();
    x.useEffect(() => {
        if (t) return i(r)
    }, [t]);
    const o = x.useCallback(() => t && s && s(r), [r, s, t]);
    return !n && s ? [!1, o] : [!0]
}
const jt = t => t.key || "";

function cn(t) {
    const e = [];
    return x.Children.forEach(t, n => {
        x.isValidElement(n) && e.push(n)
    }), e
}
const wc = ({
        children: t,
        custom: e,
        initial: n = !0,
        onExitComplete: s,
        presenceAffectsLayout: i = !0,
        mode: r = "sync",
        propagate: o = !1,
        anchorX: a = "left"
    }) => {
        const [l, u] = Ms(o), c = x.useMemo(() => cn(t), [t]), h = o && !l ? [] : c.map(jt), f = x.useRef(!0), d = x.useRef(c), m = Le(() => new Map), [p, v] = x.useState(c), [y, b] = x.useState(c);
        Ds(() => {
            f.current = !1, d.current = c;
            for (let T = 0; T < y.length; T++) {
                const w = jt(y[T]);
                h.includes(w) ? m.delete(w) : m.get(w) !== !0 && m.set(w, !1)
            }
        }, [y, h.length, h.join("-")]);
        const P = [];
        if (c !== p) {
            let T = [...c];
            for (let w = 0; w < y.length; w++) {
                const M = y[w],
                    V = jt(M);
                h.includes(V) || (T.splice(w, 0, M), P.push(M))
            }
            return r === "wait" && P.length && (T = P), b(cn(T)), v(c), null
        }
        const {
            forceRender: C
        } = x.useContext(Ee);
        return H.jsx(H.Fragment, {
            children: y.map(T => {
                const w = jt(T),
                    M = o && !l ? !1 : c === y || h.includes(w),
                    V = () => {
                        if (m.has(w)) m.set(w, !0);
                        else return;
                        let B = !0;
                        m.forEach(N => {
                            N || (B = !1)
                        }), B && (C == null || C(), b(d.current), o && (u == null || u()), s && s())
                    };
                return H.jsx(ho, {
                    isPresent: M,
                    initial: !f.current || n ? void 0 : !1,
                    custom: e,
                    presenceAffectsLayout: i,
                    mode: r,
                    onExitComplete: M ? void 0 : V,
                    anchorX: a,
                    children: T
                }, w)
            })
        })
    },
    Rs = x.createContext({
        strict: !1
    }),
    un = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    },
    dt = {};
for (const t in un) dt[t] = {
    isEnabled: e => un[t].some(n => !!e[n])
};

function mo(t) {
    for (const e in t) dt[e] = g(g({}, dt[e]), t[e])
}
const po = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function Kt(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || po.has(t)
}
let Es = t => !Kt(t);

function go(t) {
    t && (Es = e => e.startsWith("on") ? !Kt(e) : t(e))
}
try {
    go(require("@emotion/is-prop-valid").default)
} catch (t) {}

function yo(t, e, n) {
    const s = {};
    for (const i in t) i === "values" && typeof t.values == "object" || (Es(i) || n === !0 && Kt(i) || !e && !Kt(i) || t.draggable && i.startsWith("onDrag")) && (s[i] = t[i]);
    return s
}

function vo(t) {
    if (typeof Proxy == "undefined") return t;
    const e = new Map,
        n = (...s) => t(...s);
    return new Proxy(n, {
        get: (s, i) => i === "create" ? t : (e.has(i) || e.set(i, t(i)), e.get(i))
    })
}
const Ht = x.createContext({});

function Xt(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function"
}

function Vt(t) {
    return typeof t == "string" || Array.isArray(t)
}
const Fe = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    je = ["initial", ...Fe];

function Yt(t) {
    return Xt(t.animate) || je.some(e => Vt(t[e]))
}

function Ls(t) {
    return !!(Yt(t) || t.variants)
}

function xo(t, e) {
    if (Yt(t)) {
        const {
            initial: n,
            animate: s
        } = t;
        return {
            initial: n === !1 || Vt(n) ? n : void 0,
            animate: Vt(s) ? s : void 0
        }
    }
    return t.inherit !== !1 ? e : {}
}

function To(t) {
    const {
        initial: e,
        animate: n
    } = xo(t, x.useContext(Ht));
    return x.useMemo(() => ({
        initial: e,
        animate: n
    }), [hn(e), hn(n)])
}

function hn(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const Po = Symbol.for("motionComponentSymbol");

function at(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}

function So(t, e, n) {
    return x.useCallback(s => {
        s && t.onMount && t.onMount(s), e && (s ? e.mount(s) : e.unmount()), n && (typeof n == "function" ? n(s) : at(n) && (n.current = s))
    }, [e])
}
const Ie = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    bo = "framerAppearId",
    Bs = "data-" + Ie(bo),
    ks = x.createContext({});

function Vo(t, e, n, s, i) {
    var p, v;
    const {
        visualElement: r
    } = x.useContext(Ht), o = x.useContext(Rs), a = x.useContext(Rt), l = x.useContext(ke).reducedMotion, u = x.useRef(null);
    s = s || o.renderer, !u.current && s && (u.current = s(t, {
        visualState: e,
        parent: r,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: l
    }));
    const c = u.current,
        h = x.useContext(ks);
    c && !c.projection && i && (c.type === "html" || c.type === "svg") && wo(u.current, n, i, h);
    const f = x.useRef(!1);
    x.useInsertionEffect(() => {
        c && f.current && c.update(n, a)
    });
    const d = n[Bs],
        m = x.useRef(!!d && !((p = window.MotionHandoffIsComplete) != null && p.call(window, d)) && ((v = window.MotionHasOptimisedAnimation) == null ? void 0 : v.call(window, d)));
    return Ds(() => {
        c && (f.current = !0, window.MotionIsMounted = !0, c.updateFeatures(), De.render(c.render), m.current && c.animationState && c.animationState.animateChanges())
    }), x.useEffect(() => {
        c && (!m.current && c.animationState && c.animationState.animateChanges(), m.current && (queueMicrotask(() => {
            var y;
            (y = window.MotionHandoffMarkAsComplete) == null || y.call(window, d)
        }), m.current = !1))
    }), c
}

function wo(t, e, n, s) {
    const {
        layoutId: i,
        layout: r,
        drag: o,
        dragConstraints: a,
        layoutScroll: l,
        layoutRoot: u
    } = e;
    t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : Fs(t.parent)), t.projection.setOptions({
        layoutId: i,
        layout: r,
        alwaysMeasureLayout: !!o || a && at(a),
        visualElement: t,
        animationType: typeof r == "string" ? r : "both",
        initialPromotionConfig: s,
        layoutScroll: l,
        layoutRoot: u
    })
}

function Fs(t) {
    if (t) return t.options.allowProjection !== !1 ? t.projection : Fs(t.parent)
}

function Ao({
    preloadedFeatures: t,
    createVisualElement: e,
    useRender: n,
    useVisualState: s,
    Component: i
}) {
    var a, l;
    t && mo(t);

    function r(u, c) {
        let h;
        const f = A(g(g({}, x.useContext(ke)), u), {
                layoutId: Co(u)
            }),
            {
                isStatic: d
            } = f,
            m = To(u),
            p = s(u, d);
        if (!d && Be) {
            Do();
            const v = Mo(f);
            h = v.MeasureLayout, m.visualElement = Vo(i, p, f, e, v.ProjectionNode)
        }
        return H.jsxs(Ht.Provider, {
            value: m,
            children: [h && m.visualElement ? H.jsx(h, g({
                visualElement: m.visualElement
            }, f)) : null, n(i, u, So(p, m.visualElement, c), p, d, m.visualElement)]
        })
    }
    r.displayName = `motion.${typeof i=="string"?i:`create(${(l=(a=i.displayName)!=null?a:i.name)!=null?l:""})`}`;
    const o = x.forwardRef(r);
    return o[Po] = i, o
}

function Co({
    layoutId: t
}) {
    const e = x.useContext(Ee).id;
    return e && t !== void 0 ? e + "-" + t : t
}

function Do(t, e) {
    x.useContext(Rs).strict
}

function Mo(t) {
    const {
        drag: e,
        layout: n
    } = dt;
    if (!e && !n) return {};
    const s = g(g({}, e), n);
    return {
        MeasureLayout: e != null && e.isEnabled(t) || n != null && n.isEnabled(t) ? s.MeasureLayout : void 0,
        ProjectionNode: s.ProjectionNode
    }
}
const js = t => e => typeof e == "string" && e.startsWith(t),
    Oe = js("--"),
    Ro = js("var(--"),
    Ne = t => Ro(t) ? Eo.test(t.split("/*")[0].trim()) : !1,
    Eo = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    wt = {};

function Lo(t) {
    for (const e in t) wt[e] = t[e], Oe(e) && (wt[e].isCSSVariable = !0)
}
const pt = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    ot = new Set(pt);

function Is(t, {
    layout: e,
    layoutId: n
}) {
    return ot.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!wt[t] || t === "opacity")
}
const F = t => !!(t && t.getVelocity),
    Os = (t, e) => e && typeof t == "number" ? e.transform(t) : t,
    Y = (t, e, n) => n > e ? e : n < t ? t : n,
    gt = {
        test: t => typeof t == "number",
        parse: parseFloat,
        transform: t => t
    },
    At = A(g({}, gt), {
        transform: t => Y(0, 1, t)
    }),
    It = A(g({}, gt), {
        default: 1
    }),
    Et = t => ({
        test: e => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
        parse: parseFloat,
        transform: e => `${e}${t}`
    }),
    q = Et("deg"),
    _ = Et("%"),
    S = Et("px"),
    Bo = Et("vh"),
    ko = Et("vw"),
    fn = A(g({}, _), {
        parse: t => _.parse(t) / 100,
        transform: t => _.transform(t * 100)
    }),
    Fo = {
        borderWidth: S,
        borderTopWidth: S,
        borderRightWidth: S,
        borderBottomWidth: S,
        borderLeftWidth: S,
        borderRadius: S,
        radius: S,
        borderTopLeftRadius: S,
        borderTopRightRadius: S,
        borderBottomRightRadius: S,
        borderBottomLeftRadius: S,
        width: S,
        maxWidth: S,
        height: S,
        maxHeight: S,
        top: S,
        right: S,
        bottom: S,
        left: S,
        padding: S,
        paddingTop: S,
        paddingRight: S,
        paddingBottom: S,
        paddingLeft: S,
        margin: S,
        marginTop: S,
        marginRight: S,
        marginBottom: S,
        marginLeft: S,
        backgroundPositionX: S,
        backgroundPositionY: S
    },
    jo = {
        rotate: q,
        rotateX: q,
        rotateY: q,
        rotateZ: q,
        scale: It,
        scaleX: It,
        scaleY: It,
        scaleZ: It,
        skew: q,
        skewX: q,
        skewY: q,
        distance: S,
        translateX: S,
        translateY: S,
        translateZ: S,
        x: S,
        y: S,
        z: S,
        perspective: S,
        transformPerspective: S,
        opacity: At,
        originX: fn,
        originY: fn,
        originZ: S
    },
    dn = A(g({}, gt), {
        transform: Math.round
    }),
    Ue = A(g(g({}, Fo), jo), {
        zIndex: dn,
        size: S,
        fillOpacity: At,
        strokeOpacity: At,
        numOctaves: dn
    }),
    Io = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    Oo = pt.length;

function No(t, e, n) {
    let s = "",
        i = !0;
    for (let r = 0; r < Oo; r++) {
        const o = pt[r],
            a = t[o];
        if (a === void 0) continue;
        let l = !0;
        if (typeof a == "number" ? l = a === (o.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
            const u = Os(a, Ue[o]);
            if (!l) {
                i = !1;
                const c = Io[o] || o;
                s += `${c}(${u}) `
            }
            n && (e[o] = u)
        }
    }
    return s = s.trim(), n ? s = n(e, i ? "" : s) : i && (s = "none"), s
}

function Ke(t, e, n) {
    const {
        style: s,
        vars: i,
        transformOrigin: r
    } = t;
    let o = !1,
        a = !1;
    for (const l in e) {
        const u = e[l];
        if (ot.has(l)) {
            o = !0;
            continue
        } else if (Oe(l)) {
            i[l] = u;
            continue
        } else {
            const c = Os(u, Ue[l]);
            l.startsWith("origin") ? (a = !0, r[l] = c) : s[l] = c
        }
    }
    if (e.transform || (o || n ? s.transform = No(e, t.transform, n) : s.transform && (s.transform = "none")), a) {
        const {
            originX: l = "50%",
            originY: u = "50%",
            originZ: c = 0
        } = r;
        s.transformOrigin = `${l} ${u} ${c}`
    }
}
const We = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});

function Ns(t, e, n) {
    for (const s in e) !F(e[s]) && !Is(s, n) && (t[s] = e[s])
}

function Uo({
    transformTemplate: t
}, e) {
    return x.useMemo(() => {
        const n = We();
        return Ke(n, e, t), Object.assign({}, n.vars, n.style)
    }, [e])
}

function Ko(t, e) {
    const n = t.style || {},
        s = {};
    return Ns(s, n, t), Object.assign(s, Uo(t, e)), s
}

function Wo(t, e) {
    const n = {},
        s = Ko(t, e);
    return t.drag && t.dragListener !== !1 && (n.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = t.drag === !0 ? "none" : `pan-${t.drag==="x"?"y":"x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = s, n
}
const $o = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function $e(t) {
    return typeof t != "string" || t.includes("-") ? !1 : !!($o.indexOf(t) > -1 || /[A-Z]/u.test(t))
}
const Go = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    _o = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function zo(t, e, n = 1, s = 0, i = !0) {
    t.pathLength = 1;
    const r = i ? Go : _o;
    t[r.offset] = S.transform(-s);
    const o = S.transform(e),
        a = S.transform(n);
    t[r.array] = `${o} ${a}`
}

function mn(t, e, n) {
    return typeof t == "string" ? t : S.transform(e + n * t)
}

function Ho(t, e, n) {
    const s = mn(e, t.x, t.width),
        i = mn(n, t.y, t.height);
    return `${s} ${i}`
}

function Ge(t, f, c, h) {
    var d = f,
        {
            attrX: e,
            attrY: n,
            attrScale: s,
            originX: i,
            originY: r,
            pathLength: o,
            pathSpacing: a = 1,
            pathOffset: l = 0
        } = d,
        u = U(d, ["attrX", "attrY", "attrScale", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
    if (Ke(t, u, h), c) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return
    }
    t.attrs = t.style, t.style = {};
    const {
        attrs: m,
        style: p,
        dimensions: v
    } = t;
    m.transform && (v && (p.transform = m.transform), delete m.transform), v && (i !== void 0 || r !== void 0 || p.transform) && (p.transformOrigin = Ho(v, i !== void 0 ? i : .5, r !== void 0 ? r : .5)), e !== void 0 && (m.x = e), n !== void 0 && (m.y = n), s !== void 0 && (m.scale = s), o !== void 0 && zo(m, o, a, l, !1)
}
const Us = () => A(g({}, We()), {
        attrs: {}
    }),
    _e = t => typeof t == "string" && t.toLowerCase() === "svg";

function Xo(t, e, n, s) {
    const i = x.useMemo(() => {
        const r = Us();
        return Ge(r, e, _e(s), t.transformTemplate), A(g({}, r.attrs), {
            style: g({}, r.style)
        })
    }, [e]);
    if (t.style) {
        const r = {};
        Ns(r, t.style, t), i.style = g(g({}, r), i.style)
    }
    return i
}

function Yo(t = !1) {
    return (n, s, i, {
        latestValues: r
    }, o) => {
        const l = ($e(n) ? Xo : Wo)(s, r, o, n),
            u = yo(s, typeof n == "string", t),
            c = n !== x.Fragment ? A(g(g({}, u), l), {
                ref: i
            }) : {},
            {
                children: h
            } = s,
            f = x.useMemo(() => F(h) ? h.get() : h, [h]);
        return x.createElement(n, A(g({}, c), {
            children: f
        }))
    }
}

function pn(t) {
    const e = [{}, {}];
    return t == null || t.values.forEach((n, s) => {
        e[0][s] = n.get(), e[1][s] = n.getVelocity()
    }), e
}

function ze(t, e, n, s) {
    if (typeof e == "function") {
        const [i, r] = pn(s);
        e = e(n !== void 0 ? n : t.custom, i, r)
    }
    if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
        const [i, r] = pn(s);
        e = e(n !== void 0 ? n : t.custom, i, r)
    }
    return e
}
const he = t => Array.isArray(t),
    qo = t => !!(t && typeof t == "object" && t.mix && t.toValue),
    Zo = t => he(t) ? t[t.length - 1] || 0 : t;

function Nt(t) {
    const e = F(t) ? t.get() : t;
    return qo(e) ? e.toValue() : e
}

function Jo({
    scrapeMotionValuesFromProps: t,
    createRenderState: e,
    onUpdate: n
}, s, i, r) {
    const o = {
        latestValues: Qo(s, i, r, t),
        renderState: e()
    };
    return n && (o.onMount = a => n(g({
        props: s,
        current: a
    }, o)), o.onUpdate = a => n(a)), o
}
const Ks = t => (e, n) => {
    const s = x.useContext(Ht),
        i = x.useContext(Rt),
        r = () => Jo(t, e, s, i);
    return n ? r() : Le(r)
};

function Qo(t, e, n, s) {
    const i = {},
        r = s(t, {});
    for (const d in r) i[d] = Nt(r[d]);
    let {
        initial: o,
        animate: a
    } = t;
    const l = Yt(t),
        u = Ls(t);
    e && u && !l && t.inherit !== !1 && (o === void 0 && (o = e.initial), a === void 0 && (a = e.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || o === !1;
    const h = c ? a : o;
    if (h && typeof h != "boolean" && !Xt(h)) {
        const d = Array.isArray(h) ? h : [h];
        for (let m = 0; m < d.length; m++) {
            const p = ze(t, d[m]);
            if (p) {
                const f = p,
                    {
                        transitionEnd: v,
                        transition: y
                    } = f,
                    b = U(f, ["transitionEnd", "transition"]);
                for (const P in b) {
                    let C = b[P];
                    if (Array.isArray(C)) {
                        const T = c ? C.length - 1 : 0;
                        C = C[T]
                    }
                    C !== null && (i[P] = C)
                }
                for (const P in v) i[P] = v[P]
            }
        }
    }
    return i
}

function He(t, e, n) {
    var r;
    const {
        style: s
    } = t, i = {};
    for (const o in s)(F(s[o]) || e.style && F(e.style[o]) || Is(o, t) || ((r = n == null ? void 0 : n.getValue(o)) == null ? void 0 : r.liveStyle) !== void 0) && (i[o] = s[o]);
    return i
}
const tr = {
    useVisualState: Ks({
        scrapeMotionValuesFromProps: He,
        createRenderState: We
    })
};

function Ws(t, e) {
    try {
        e.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
    } catch (n) {
        e.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    }
}

function $s(t, {
    style: e,
    vars: n
}, s, i) {
    Object.assign(t.style, e, i && i.getProjectionStyles(s));
    for (const r in n) t.style.setProperty(r, n[r])
}
const Gs = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function _s(t, e, n, s) {
    $s(t, e, void 0, s);
    for (const i in e.attrs) t.setAttribute(Gs.has(i) ? i : Ie(i), e.attrs[i])
}

function zs(t, e, n) {
    const s = He(t, e, n);
    for (const i in t)
        if (F(t[i]) || F(e[i])) {
            const r = pt.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            s[r] = t[i]
        }
    return s
}
const gn = ["x", "y", "width", "height", "cx", "cy", "r"],
    er = {
        useVisualState: Ks({
            scrapeMotionValuesFromProps: zs,
            createRenderState: Us,
            onUpdate: ({
                props: t,
                prevProps: e,
                current: n,
                renderState: s,
                latestValues: i
            }) => {
                if (!n) return;
                let r = !!t.drag;
                if (!r) {
                    for (const a in i)
                        if (ot.has(a)) {
                            r = !0;
                            break
                        }
                }
                if (!r) return;
                let o = !e;
                if (e)
                    for (let a = 0; a < gn.length; a++) {
                        const l = gn[a];
                        t[l] !== e[l] && (o = !0)
                    }
                o && D.read(() => {
                    Ws(n, s), D.render(() => {
                        Ge(s, i, _e(n.tagName), t.transformTemplate), _s(n, s)
                    })
                })
            }
        })
    };

function nr(t, e) {
    return function(s, {
        forwardMotionProps: i
    } = {
        forwardMotionProps: !1
    }) {
        const r = $e(s) ? er : tr,
            o = A(g({}, r), {
                preloadedFeatures: t,
                useRender: Yo(i),
                createVisualElement: e,
                Component: s
            });
        return Ao(o)
    }
}

function Ct(t, e, n) {
    const s = t.getProps();
    return ze(s, e, n !== void 0 ? n : s.custom, t)
}
const Hs = new Set(["width", "height", "top", "left", "right", "bottom", ...pt]);

function sr(t, e, n) {
    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, St(n))
}

function ir(t, e) {
    let o = Ct(t, e) || {},
        {
            transitionEnd: s = {},
            transition: i = {}
        } = o,
        r = U(o, ["transitionEnd", "transition"]);
    r = g(g({}, r), s);
    for (const a in r) {
        const l = Zo(r[a]);
        sr(t, a, l)
    }
}

function or(t) {
    return !!(F(t) && t.add)
}

function fe(t, e) {
    const n = t.getValue("willChange");
    if (or(n)) return n.add(e)
}

function Xs(t) {
    return t.props[Bs]
}
const Ys = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
    rr = 1e-7,
    ar = 12;

function lr(t, e, n, s, i) {
    let r, o, a = 0;
    do o = e + (n - e) / 2, r = Ys(o, s, i) - t, r > 0 ? n = o : e = o; while (Math.abs(r) > rr && ++a < ar);
    return o
}

function Lt(t, e, n, s) {
    if (t === e && n === s) return $;
    const i = r => lr(r, 0, 1, t, n);
    return r => r === 0 || r === 1 ? r : Ys(i(r), e, s)
}
const qs = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
    Zs = t => e => 1 - t(1 - e),
    Js = Lt(.33, 1.53, .69, .99),
    Xe = Zs(Js),
    Qs = qs(Xe),
    ti = t => (t *= 2) < 1 ? .5 * Xe(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
    Ye = t => 1 - Math.sin(Math.acos(t)),
    ei = Zs(Ye),
    ni = qs(Ye),
    si = t => /^0[^.\s]+$/u.test(t);

function cr(t) {
    return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || si(t) : !0
}
const vt = t => Math.round(t * 1e5) / 1e5,
    qe = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function ur(t) {
    return t == null
}
const hr = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    Ze = (t, e) => n => !!(typeof n == "string" && hr.test(n) && n.startsWith(t) || e && !ur(n) && Object.prototype.hasOwnProperty.call(n, e)),
    ii = (t, e, n) => s => {
        if (typeof s != "string") return s;
        const [i, r, o, a] = s.match(qe);
        return {
            [t]: parseFloat(i),
            [e]: parseFloat(r),
            [n]: parseFloat(o),
            alpha: a !== void 0 ? parseFloat(a) : 1
        }
    },
    fr = t => Y(0, 255, t),
    ee = A(g({}, gt), {
        transform: t => Math.round(fr(t))
    }),
    nt = {
        test: Ze("rgb", "red"),
        parse: ii("red", "green", "blue"),
        transform: ({
            red: t,
            green: e,
            blue: n,
            alpha: s = 1
        }) => "rgba(" + ee.transform(t) + ", " + ee.transform(e) + ", " + ee.transform(n) + ", " + vt(At.transform(s)) + ")"
    };

function dr(t) {
    let e = "",
        n = "",
        s = "",
        i = "";
    return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), s = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), s = t.substring(3, 4), i = t.substring(4, 5), e += e, n += n, s += s, i += i), {
        red: parseInt(e, 16),
        green: parseInt(n, 16),
        blue: parseInt(s, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const de = {
        test: Ze("#"),
        parse: dr,
        transform: nt.transform
    },
    lt = {
        test: Ze("hsl", "hue"),
        parse: ii("hue", "saturation", "lightness"),
        transform: ({
            hue: t,
            saturation: e,
            lightness: n,
            alpha: s = 1
        }) => "hsla(" + Math.round(t) + ", " + _.transform(vt(e)) + ", " + _.transform(vt(n)) + ", " + vt(At.transform(s)) + ")"
    },
    k = {
        test: t => nt.test(t) || de.test(t) || lt.test(t),
        parse: t => nt.test(t) ? nt.parse(t) : lt.test(t) ? lt.parse(t) : de.parse(t),
        transform: t => typeof t == "string" ? t : t.hasOwnProperty("red") ? nt.transform(t) : lt.transform(t)
    },
    mr = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function pr(t) {
    var e, n;
    return isNaN(t) && typeof t == "string" && (((e = t.match(qe)) == null ? void 0 : e.length) || 0) + (((n = t.match(mr)) == null ? void 0 : n.length) || 0) > 0
}
const oi = "number",
    ri = "color",
    gr = "var",
    yr = "var(",
    yn = "${}",
    vr = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function Dt(t) {
    const e = t.toString(),
        n = [],
        s = {
            color: [],
            number: [],
            var: []
        },
        i = [];
    let r = 0;
    const a = e.replace(vr, l => (k.test(l) ? (s.color.push(r), i.push(ri), n.push(k.parse(l))) : l.startsWith(yr) ? (s.var.push(r), i.push(gr), n.push(l)) : (s.number.push(r), i.push(oi), n.push(parseFloat(l))), ++r, yn)).split(yn);
    return {
        values: n,
        split: a,
        indexes: s,
        types: i
    }
}

function ai(t) {
    return Dt(t).values
}

function li(t) {
    const {
        split: e,
        types: n
    } = Dt(t), s = e.length;
    return i => {
        let r = "";
        for (let o = 0; o < s; o++)
            if (r += e[o], i[o] !== void 0) {
                const a = n[o];
                a === oi ? r += vt(i[o]) : a === ri ? r += k.transform(i[o]) : r += i[o]
            }
        return r
    }
}
const xr = t => typeof t == "number" ? 0 : t;

function Tr(t) {
    const e = ai(t);
    return li(t)(e.map(xr))
}
const J = {
        test: pr,
        parse: ai,
        createTransformer: li,
        getAnimatableNone: Tr
    },
    Pr = new Set(["brightness", "contrast", "saturate", "opacity"]);

function Sr(t) {
    const [e, n] = t.slice(0, -1).split("(");
    if (e === "drop-shadow") return t;
    const [s] = n.match(qe) || [];
    if (!s) return t;
    const i = n.replace(s, "");
    let r = Pr.has(e) ? 1 : 0;
    return s !== n && (r *= 100), e + "(" + r + i + ")"
}
const br = /\b([a-z-]*)\(.*?\)/gu,
    me = A(g({}, J), {
        getAnimatableNone: t => {
            const e = t.match(br);
            return e ? e.map(Sr).join(" ") : t
        }
    }),
    Vr = A(g({}, Ue), {
        color: k,
        backgroundColor: k,
        outlineColor: k,
        fill: k,
        stroke: k,
        borderColor: k,
        borderTopColor: k,
        borderRightColor: k,
        borderBottomColor: k,
        borderLeftColor: k,
        filter: me,
        WebkitFilter: me
    }),
    ci = t => Vr[t];

function ui(t, e) {
    let n = ci(t);
    return n !== me && (n = J), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
}
const wr = new Set(["auto", "none", "0"]);

function Ar(t, e, n) {
    let s = 0,
        i;
    for (; s < t.length && !i;) {
        const r = t[s];
        typeof r == "string" && !wr.has(r) && Dt(r).values.length && (i = t[s]), s++
    }
    if (i && n)
        for (const r of e) t[r] = ui(n, i)
}
const st = t => t * 180 / Math.PI,
    pe = t => {
        const e = st(Math.atan2(t[1], t[0]));
        return ge(e)
    },
    Cr = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: t => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
        rotate: pe,
        rotateZ: pe,
        skewX: t => st(Math.atan(t[1])),
        skewY: t => st(Math.atan(t[2])),
        skew: t => (Math.abs(t[1]) + Math.abs(t[2])) / 2
    },
    ge = t => (t = t % 360, t < 0 && (t += 360), t),
    vn = pe,
    xn = t => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
    Tn = t => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
    Dr = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: xn,
        scaleY: Tn,
        scale: t => (xn(t) + Tn(t)) / 2,
        rotateX: t => ge(st(Math.atan2(t[6], t[5]))),
        rotateY: t => ge(st(Math.atan2(-t[2], t[0]))),
        rotateZ: vn,
        rotate: vn,
        skewX: t => st(Math.atan(t[4])),
        skewY: t => st(Math.atan(t[1])),
        skew: t => (Math.abs(t[1]) + Math.abs(t[4])) / 2
    };

function Pn(t) {
    return t.includes("scale") ? 1 : 0
}

function ye(t, e) {
    if (!t || t === "none") return Pn(e);
    const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let s, i;
    if (n) s = Dr, i = n;
    else {
        const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        s = Cr, i = a
    }
    if (!i) return Pn(e);
    const r = s[e],
        o = i[1].split(",").map(Rr);
    return typeof r == "function" ? r(o) : o[r]
}
const Mr = (t, e) => {
    const {
        transform: n = "none"
    } = getComputedStyle(t);
    return ye(n, e)
};

function Rr(t) {
    return parseFloat(t.trim())
}
const Sn = t => t === gt || t === S,
    Er = new Set(["x", "y", "z"]),
    Lr = pt.filter(t => !Er.has(t));

function Br(t) {
    const e = [];
    return Lr.forEach(n => {
        const s = t.getValue(n);
        s !== void 0 && (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0))
    }), e
}
const mt = {
    width: ({
        x: t
    }, {
        paddingLeft: e = "0",
        paddingRight: n = "0"
    }) => t.max - t.min - parseFloat(e) - parseFloat(n),
    height: ({
        y: t
    }, {
        paddingTop: e = "0",
        paddingBottom: n = "0"
    }) => t.max - t.min - parseFloat(e) - parseFloat(n),
    top: (t, {
        top: e
    }) => parseFloat(e),
    left: (t, {
        left: e
    }) => parseFloat(e),
    bottom: ({
        y: t
    }, {
        top: e
    }) => parseFloat(e) + (t.max - t.min),
    right: ({
        x: t
    }, {
        left: e
    }) => parseFloat(e) + (t.max - t.min),
    x: (t, {
        transform: e
    }) => ye(e, "x"),
    y: (t, {
        transform: e
    }) => ye(e, "y")
};
mt.translateX = mt.x;
mt.translateY = mt.y;
const it = new Set;
let ve = !1,
    xe = !1;

function hi() {
    if (xe) {
        const t = Array.from(it).filter(s => s.needsMeasurement),
            e = new Set(t.map(s => s.element)),
            n = new Map;
        e.forEach(s => {
            const i = Br(s);
            i.length && (n.set(s, i), s.render())
        }), t.forEach(s => s.measureInitialState()), e.forEach(s => {
            s.render();
            const i = n.get(s);
            i && i.forEach(([r, o]) => {
                var a;
                (a = s.getValue(r)) == null || a.set(o)
            })
        }), t.forEach(s => s.measureEndState()), t.forEach(s => {
            s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY)
        })
    }
    xe = !1, ve = !1, it.forEach(t => t.complete()), it.clear()
}

function fi() {
    it.forEach(t => {
        t.readKeyframes(), t.needsMeasurement && (xe = !0)
    })
}

function kr() {
    fi(), hi()
}
class Je {
    constructor(e, n, s, i, r, o = !1) {
        this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = s, this.motionValue = i, this.element = r, this.isAsync = o
    }
    scheduleResolve() {
        this.isScheduled = !0, this.isAsync ? (it.add(this), ve || (ve = !0, D.read(fi), D.resolveKeyframes(hi))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: e,
            name: n,
            element: s,
            motionValue: i
        } = this;
        for (let r = 0; r < e.length; r++)
            if (e[r] === null)
                if (r === 0) {
                    const o = i == null ? void 0 : i.get(),
                        a = e[e.length - 1];
                    if (o !== void 0) e[0] = o;
                    else if (s && n) {
                        const l = s.readValue(n, a);
                        l != null && (e[0] = l)
                    }
                    e[0] === void 0 && (e[0] = a), i && o === void 0 && i.set(e[0])
                } else e[r] = e[r - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), it.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1, it.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const di = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
    Fr = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function jr(t) {
    const e = Fr.exec(t);
    if (!e) return [, ];
    const [, n, s, i] = e;
    return [`--${n!=null?n:s}`, i]
}

function mi(t, e, n = 1) {
    const [s, i] = jr(t);
    if (!s) return;
    const r = window.getComputedStyle(e).getPropertyValue(s);
    if (r) {
        const o = r.trim();
        return di(o) ? parseFloat(o) : o
    }
    return Ne(i) ? mi(i, e, n + 1) : i
}
const pi = t => e => e.test(t),
    Ir = {
        test: t => t === "auto",
        parse: t => t
    },
    gi = [gt, S, _, q, ko, Bo, Ir],
    bn = t => gi.find(pi(t));
class yi extends Je {
    constructor(e, n, s, i, r) {
        super(e, n, s, i, r, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: e,
            element: n,
            name: s
        } = this;
        if (!n || !n.current) return;
        super.readKeyframes();
        for (let l = 0; l < e.length; l++) {
            let u = e[l];
            if (typeof u == "string" && (u = u.trim(), Ne(u))) {
                const c = mi(u, n.current);
                c !== void 0 && (e[l] = c), l === e.length - 1 && (this.finalKeyframe = u)
            }
        }
        if (this.resolveNoneKeyframes(), !Hs.has(s) || e.length !== 2) return;
        const [i, r] = e, o = bn(i), a = bn(r);
        if (o !== a)
            if (Sn(o) && Sn(a))
                for (let l = 0; l < e.length; l++) {
                    const u = e[l];
                    typeof u == "string" && (e[l] = parseFloat(u))
                } else this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: e,
            name: n
        } = this, s = [];
        for (let i = 0; i < e.length; i++) cr(e[i]) && s.push(i);
        s.length && Ar(e, s, n)
    }
    measureInitialState() {
        const {
            element: e,
            unresolvedKeyframes: n,
            name: s
        } = this;
        if (!e || !e.current) return;
        s === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = mt[s](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && e.getValue(s, i).jump(i, !1)
    }
    measureEndState() {
        var a;
        const {
            element: e,
            name: n,
            unresolvedKeyframes: s
        } = this;
        if (!e || !e.current) return;
        const i = e.getValue(n);
        i && i.jump(this.measuredOrigin, !1);
        const r = s.length - 1,
            o = s[r];
        s[r] = mt[n](e.measureViewportBox(), window.getComputedStyle(e.current)), o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o), (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach(([l, u]) => {
            e.getValue(l).set(u)
        }), this.resolveNoneKeyframes()
    }
}
const Vn = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (J.test(t) || t === "0") && !t.startsWith("url("));

function Or(t) {
    const e = t[0];
    if (t.length === 1) return !0;
    for (let n = 0; n < t.length; n++)
        if (t[n] !== e) return !0
}

function Nr(t, e, n, s) {
    const i = t[0];
    if (i === null) return !1;
    if (e === "display" || e === "visibility") return !0;
    const r = t[t.length - 1],
        o = Vn(i, e),
        a = Vn(r, e);
    return !o || !a ? !1 : Or(t) || (n === "spring" || Me(n)) && s
}
const Ur = t => t !== null;

function qt(t, {
    repeat: e,
    repeatType: n = "loop"
}, s) {
    const i = t.filter(Ur),
        r = e && n !== "loop" && e % 2 === 1 ? 0 : i.length - 1;
    return !r || s === void 0 ? i[r] : s
}
const Kr = 40;
class vi {
    constructor(l) {
        var u = l,
            {
                autoplay: e = !0,
                delay: n = 0,
                type: s = "keyframes",
                repeat: i = 0,
                repeatDelay: r = 0,
                repeatType: o = "loop"
            } = u,
            a = U(u, ["autoplay", "delay", "type", "repeat", "repeatDelay", "repeatType"]);
        this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = ft.now(), this.options = g({
            autoplay: e,
            delay: n,
            type: s,
            repeat: i,
            repeatDelay: r,
            repeatType: o
        }, a), this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > Kr ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && kr(), this._resolved
    }
    onKeyframesResolved(e, n) {
        this.resolvedAt = ft.now(), this.hasAttemptedResolve = !0;
        const {
            name: s,
            type: i,
            velocity: r,
            delay: o,
            onComplete: a,
            onUpdate: l,
            isGenerator: u
        } = this.options;
        if (!u && !Nr(e, s, i, r))
            if (o) this.options.duration = 0;
            else {
                l && l(qt(e, this.options, n)), a && a(), this.resolveFinishedPromise();
                return
            }
        const c = this.initPlayback(e, n);
        c !== !1 && (this._resolved = g({
            keyframes: e,
            finalKeyframe: n
        }, c), this.onPostResolved())
    }
    onPostResolved() {}
    then(e, n) {
        return this.currentFinishedPromise.then(e, n)
    }
    flatten() {
        this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear")
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(e => {
            this.resolveFinishedPromise = e
        })
    }
}
const R = (t, e, n) => t + (e - t) * n;

function ne(t, e, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
}

function Wr({
    hue: t,
    saturation: e,
    lightness: n,
    alpha: s
}) {
    t /= 360, e /= 100, n /= 100;
    let i = 0,
        r = 0,
        o = 0;
    if (!e) i = r = o = n;
    else {
        const a = n < .5 ? n * (1 + e) : n + e - n * e,
            l = 2 * n - a;
        i = ne(l, a, t + 1 / 3), r = ne(l, a, t), o = ne(l, a, t - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(r * 255),
        blue: Math.round(o * 255),
        alpha: s
    }
}

function Wt(t, e) {
    return n => n > 0 ? e : t
}
const se = (t, e, n) => {
        const s = t * t,
            i = n * (e * e - s) + s;
        return i < 0 ? 0 : Math.sqrt(i)
    },
    $r = [de, nt, lt],
    Gr = t => $r.find(e => e.test(t));

function wn(t) {
    const e = Gr(t);
    if (!e) return !1;
    let n = e.parse(t);
    return e === lt && (n = Wr(n)), n
}
const An = (t, e) => {
        const n = wn(t),
            s = wn(e);
        if (!n || !s) return Wt(t, e);
        const i = g({}, n);
        return r => (i.red = se(n.red, s.red, r), i.green = se(n.green, s.green, r), i.blue = se(n.blue, s.blue, r), i.alpha = R(n.alpha, s.alpha, r), nt.transform(i))
    },
    _r = (t, e) => n => e(t(n)),
    Bt = (...t) => t.reduce(_r),
    Te = new Set(["none", "hidden"]);

function zr(t, e) {
    return Te.has(t) ? n => n <= 0 ? t : e : n => n >= 1 ? e : t
}

function Hr(t, e) {
    return n => R(t, e, n)
}

function Qe(t) {
    return typeof t == "number" ? Hr : typeof t == "string" ? Ne(t) ? Wt : k.test(t) ? An : qr : Array.isArray(t) ? xi : typeof t == "object" ? k.test(t) ? An : Xr : Wt
}

function xi(t, e) {
    const n = [...t],
        s = n.length,
        i = t.map((r, o) => Qe(r)(r, e[o]));
    return r => {
        for (let o = 0; o < s; o++) n[o] = i[o](r);
        return n
    }
}

function Xr(t, e) {
    const n = g(g({}, t), e),
        s = {};
    for (const i in n) t[i] !== void 0 && e[i] !== void 0 && (s[i] = Qe(t[i])(t[i], e[i]));
    return i => {
        for (const r in s) n[r] = s[r](i);
        return n
    }
}

function Yr(t, e) {
    var i;
    const n = [],
        s = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let r = 0; r < e.values.length; r++) {
        const o = e.types[r],
            a = t.indexes[o][s[o]],
            l = (i = t.values[a]) != null ? i : 0;
        n[r] = l, s[o]++
    }
    return n
}
const qr = (t, e) => {
    const n = J.createTransformer(e),
        s = Dt(t),
        i = Dt(e);
    return s.indexes.var.length === i.indexes.var.length && s.indexes.color.length === i.indexes.color.length && s.indexes.number.length >= i.indexes.number.length ? Te.has(t) && !i.values.length || Te.has(e) && !s.values.length ? zr(t, e) : Bt(xi(Yr(s, i), i.values), n) : Wt(t, e)
};

function Ti(t, e, n) {
    return typeof t == "number" && typeof e == "number" && typeof n == "number" ? R(t, e, n) : Qe(t)(t, e)
}
const Zr = 5;

function Pi(t, e, n) {
    const s = Math.max(e - Zr, 0);
    return Zi(n - t(s), e - s)
}
const E = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: .3,
        visualDuration: .3,
        restSpeed: {
            granular: .01,
            default: 2
        },
        restDelta: {
            granular: .005,
            default: .5
        },
        minDuration: .01,
        maxDuration: 10,
        minDamping: .05,
        maxDamping: 1
    },
    Cn = .001;

function Jr({
    duration: t = E.duration,
    bounce: e = E.bounce,
    velocity: n = E.velocity,
    mass: s = E.mass
}) {
    let i, r, o = 1 - e;
    o = Y(E.minDamping, E.maxDamping, o), t = Y(E.minDuration, E.maxDuration, X(t)), o < 1 ? (i = u => {
        const c = u * o,
            h = c * t,
            f = c - n,
            d = Pe(u, o),
            m = Math.exp(-h);
        return Cn - f / d * m
    }, r = u => {
        const h = u * o * t,
            f = h * n + n,
            d = Math.pow(o, 2) * Math.pow(u, 2) * t,
            m = Math.exp(-h),
            p = Pe(Math.pow(u, 2), o);
        return (-i(u) + Cn > 0 ? -1 : 1) * ((f - d) * m) / p
    }) : (i = u => {
        const c = Math.exp(-u * t),
            h = (u - n) * t + 1;
        return -.001 + c * h
    }, r = u => {
        const c = Math.exp(-u * t),
            h = (n - u) * (t * t);
        return c * h
    });
    const a = 5 / t,
        l = ta(i, r, a);
    if (t = G(t), isNaN(l)) return {
        stiffness: E.stiffness,
        damping: E.damping,
        duration: t
    }; {
        const u = Math.pow(l, 2) * s;
        return {
            stiffness: u,
            damping: o * 2 * Math.sqrt(s * u),
            duration: t
        }
    }
}
const Qr = 12;

function ta(t, e, n) {
    let s = n;
    for (let i = 1; i < Qr; i++) s = s - t(s) / e(s);
    return s
}

function Pe(t, e) {
    return t * Math.sqrt(1 - e * e)
}
const ea = ["duration", "bounce"],
    na = ["stiffness", "damping", "mass"];

function Dn(t, e) {
    return e.some(n => t[n] !== void 0)
}

function sa(t) {
    let e = g({
        velocity: E.velocity,
        stiffness: E.stiffness,
        damping: E.damping,
        mass: E.mass,
        isResolvedFromDuration: !1
    }, t);
    if (!Dn(t, na) && Dn(t, ea))
        if (t.visualDuration) {
            const n = t.visualDuration,
                s = 2 * Math.PI / (n * 1.2),
                i = s * s,
                r = 2 * Y(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
            e = A(g({}, e), {
                mass: E.mass,
                stiffness: i,
                damping: r
            })
        } else {
            const n = Jr(t);
            e = A(g(g({}, e), n), {
                mass: E.mass
            }), e.isResolvedFromDuration = !0
        }
    return e
}

function $t(t = E.visualDuration, e = E.bounce) {
    const n = typeof t != "object" ? {
        visualDuration: t,
        keyframes: [0, 1],
        bounce: e
    } : t;
    let {
        restSpeed: s,
        restDelta: i
    } = n;
    const r = n.keyframes[0],
        o = n.keyframes[n.keyframes.length - 1],
        a = {
            done: !1,
            value: r
        },
        {
            stiffness: l,
            damping: u,
            mass: c,
            duration: h,
            velocity: f,
            isResolvedFromDuration: d
        } = sa(A(g({}, n), {
            velocity: -X(n.velocity || 0)
        })),
        m = f || 0,
        p = u / (2 * Math.sqrt(l * c)),
        v = o - r,
        y = X(Math.sqrt(l / c)),
        b = Math.abs(v) < 5;
    s || (s = b ? E.restSpeed.granular : E.restSpeed.default), i || (i = b ? E.restDelta.granular : E.restDelta.default);
    let P;
    if (p < 1) {
        const T = Pe(y, p);
        P = w => {
            const M = Math.exp(-p * y * w);
            return o - M * ((m + p * y * v) / T * Math.sin(T * w) + v * Math.cos(T * w))
        }
    } else if (p === 1) P = T => o - Math.exp(-y * T) * (v + (m + y * v) * T);
    else {
        const T = y * Math.sqrt(p * p - 1);
        P = w => {
            const M = Math.exp(-p * y * w),
                V = Math.min(T * w, 300);
            return o - M * ((m + p * y * v) * Math.sinh(V) + T * v * Math.cosh(V)) / T
        }
    }
    const C = {
        calculatedDuration: d && h || null,
        next: T => {
            const w = P(T);
            if (d) a.done = T >= h;
            else {
                let M = 0;
                p < 1 && (M = T === 0 ? G(m) : Pi(P, T, w));
                const V = Math.abs(M) <= s,
                    B = Math.abs(o - w) <= i;
                a.done = V && B
            }
            return a.value = a.done ? o : w, a
        },
        toString: () => {
            const T = Math.min(Ps(C), Ji),
                w = Qi(M => C.next(T * M).value, T, 30);
            return T + "ms " + w
        },
        toTransition: () => {}
    };
    return C
}
$t.applyToOptions = t => {
    const e = to(t, 100, $t);
    return t.ease = Ss() ? e.ease : "easeOut", t.duration = G(e.duration), t.type = "keyframes", t
};

function Mn({
    keyframes: t,
    velocity: e = 0,
    power: n = .8,
    timeConstant: s = 325,
    bounceDamping: i = 10,
    bounceStiffness: r = 500,
    modifyTarget: o,
    min: a,
    max: l,
    restDelta: u = .5,
    restSpeed: c
}) {
    const h = t[0],
        f = {
            done: !1,
            value: h
        },
        d = V => a !== void 0 && V < a || l !== void 0 && V > l,
        m = V => a === void 0 ? l : l === void 0 || Math.abs(a - V) < Math.abs(l - V) ? a : l;
    let p = n * e;
    const v = h + p,
        y = o === void 0 ? v : o(v);
    y !== v && (p = y - h);
    const b = V => -p * Math.exp(-V / s),
        P = V => y + b(V),
        C = V => {
            const B = b(V),
                N = P(V);
            f.done = Math.abs(B) <= u, f.value = f.done ? y : N
        };
    let T, w;
    const M = V => {
        d(f.value) && (T = V, w = $t({
            keyframes: [f.value, m(f.value)],
            velocity: Pi(P, V, f.value),
            damping: i,
            stiffness: r,
            restDelta: u,
            restSpeed: c
        }))
    };
    return M(0), {
        calculatedDuration: null,
        next: V => {
            let B = !1;
            return !w && T === void 0 && (B = !0, C(V), M(V)), T !== void 0 && V >= T ? w.next(V - T) : (!B && C(V), f)
        }
    }
}
const ia = Lt(.42, 0, 1, 1),
    oa = Lt(0, 0, .58, 1),
    Si = Lt(.42, 0, .58, 1),
    ra = t => Array.isArray(t) && typeof t[0] != "number",
    aa = {
        linear: $,
        easeIn: ia,
        easeInOut: Si,
        easeOut: oa,
        circIn: Ye,
        circInOut: ni,
        circOut: ei,
        backIn: Xe,
        backInOut: Qs,
        backOut: Js,
        anticipate: ti
    },
    Rn = t => {
        if (eo(t)) {
            bs(t.length === 4);
            const [e, n, s, i] = t;
            return Lt(e, n, s, i)
        } else if (typeof t == "string") return aa[t];
        return t
    };

function la(t, e, n) {
    const s = [],
        i = n || Ti,
        r = t.length - 1;
    for (let o = 0; o < r; o++) {
        let a = i(t[o], t[o + 1]);
        if (e) {
            const l = Array.isArray(e) ? e[o] || $ : e;
            a = Bt(l, a)
        }
        s.push(a)
    }
    return s
}

function ca(t, e, {
    clamp: n = !0,
    ease: s,
    mixer: i
} = {}) {
    const r = t.length;
    if (bs(r === e.length), r === 1) return () => e[0];
    if (r === 2 && e[0] === e[1]) return () => e[1];
    const o = t[0] === t[1];
    t[0] > t[r - 1] && (t = [...t].reverse(), e = [...e].reverse());
    const a = la(e, s, i),
        l = a.length,
        u = c => {
            if (o && c < t[0]) return e[0];
            let h = 0;
            if (l > 1)
                for (; h < t.length - 2 && !(c < t[h + 1]); h++);
            const f = bt(t[h], t[h + 1], c);
            return a[h](f)
        };
    return n ? c => u(Y(t[0], t[r - 1], c)) : u
}

function ua(t, e) {
    const n = t[t.length - 1];
    for (let s = 1; s <= e; s++) {
        const i = bt(0, e, s);
        t.push(R(n, 1, i))
    }
}

function ha(t) {
    const e = [0];
    return ua(e, t.length - 1), e
}

function fa(t, e) {
    return t.map(n => n * e)
}

function da(t, e) {
    return t.map(() => e || Si).splice(0, t.length - 1)
}

function Gt({
    duration: t = 300,
    keyframes: e,
    times: n,
    ease: s = "easeInOut"
}) {
    const i = ra(s) ? s.map(Rn) : Rn(s),
        r = {
            done: !1,
            value: e[0]
        },
        o = fa(n && n.length === e.length ? n : ha(e), t),
        a = ca(o, e, {
            ease: Array.isArray(i) ? i : da(e, i)
        });
    return {
        calculatedDuration: t,
        next: l => (r.value = a(l), r.done = l >= t, r)
    }
}
const ma = t => {
        const e = ({
            timestamp: n
        }) => t(n);
        return {
            start: () => D.update(e, !0),
            stop: () => Z(e),
            now: () => I.isProcessing ? I.timestamp : ft.now()
        }
    },
    pa = {
        decay: Mn,
        inertia: Mn,
        tween: Gt,
        keyframes: Gt,
        spring: $t
    },
    ga = t => t / 100;
class tn extends vi {
    constructor(e) {
        super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
            if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
            this.teardown();
            const {
                onStop: l
            } = this.options;
            l && l()
        };
        const {
            name: n,
            motionValue: s,
            element: i,
            keyframes: r
        } = this.options, o = (i == null ? void 0 : i.KeyframeResolver) || Je, a = (l, u) => this.onKeyframesResolved(l, u);
        this.resolver = new o(r, a, n, s, i), this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(e) {
        const {
            type: n = "keyframes",
            repeat: s = 0,
            repeatDelay: i = 0,
            repeatType: r,
            velocity: o = 0
        } = this.options, a = Me(n) ? n : pa[n] || Gt;
        let l, u;
        a !== Gt && typeof e[0] != "number" && (l = Bt(ga, Ti(e[0], e[1])), e = [0, 100]);
        const c = a(A(g({}, this.options), {
            keyframes: e
        }));
        r === "mirror" && (u = a(A(g({}, this.options), {
            keyframes: [...e].reverse(),
            velocity: -o
        }))), c.calculatedDuration === null && (c.calculatedDuration = Ps(c));
        const {
            calculatedDuration: h
        } = c, f = h + i, d = f * (s + 1) - i;
        return {
            generator: c,
            mirroredGenerator: u,
            mapPercentToKeyframes: l,
            calculatedDuration: h,
            resolvedDuration: f,
            totalDuration: d
        }
    }
    onPostResolved() {
        const {
            autoplay: e = !0
        } = this.options;
        this.play(), this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState
    }
    tick(e, n = !1) {
        const {
            resolved: s
        } = this;
        if (!s) {
            const {
                keyframes: V
            } = this.options;
            return {
                done: !0,
                value: V[V.length - 1]
            }
        }
        const {
            finalKeyframe: i,
            generator: r,
            mirroredGenerator: o,
            mapPercentToKeyframes: a,
            keyframes: l,
            calculatedDuration: u,
            totalDuration: c,
            resolvedDuration: h
        } = s;
        if (this.startTime === null) return r.next(0);
        const {
            delay: f,
            repeat: d,
            repeatType: m,
            repeatDelay: p,
            onUpdate: v
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - c / this.speed, this.startTime)), n ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
        const y = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
            b = this.speed >= 0 ? y < 0 : y > c;
        this.currentTime = Math.max(y, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let P = this.currentTime,
            C = r;
        if (d) {
            const V = Math.min(this.currentTime, c) / h;
            let B = Math.floor(V),
                N = V % 1;
            !N && V >= 1 && (N = 1), N === 1 && B--, B = Math.min(B, d + 1), !!(B % 2) && (m === "reverse" ? (N = 1 - N, p && (N -= p / h)) : m === "mirror" && (C = o)), P = Y(0, 1, N) * h
        }
        const T = b ? {
            done: !1,
            value: l[0]
        } : C.next(P);
        a && (T.value = a(T.value));
        let {
            done: w
        } = T;
        !b && u !== null && (w = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        const M = this.holdTime === null && (this.state === "finished" || this.state === "running" && w);
        return M && i !== void 0 && (T.value = qt(l, this.options, i)), v && v(T.value), M && this.finish(), T
    }
    get duration() {
        const {
            resolved: e
        } = this;
        return e ? X(e.calculatedDuration) : 0
    }
    get time() {
        return X(this.currentTime)
    }
    set time(e) {
        e = G(e), this.currentTime = e, this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(e) {
        const n = this.playbackSpeed !== e;
        this.playbackSpeed = e, n && (this.time = X(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped) return;
        const {
            driver: e = ma,
            onPlay: n,
            startTime: s
        } = this.options;
        this.driver || (this.driver = e(r => this.tick(r))), n && n();
        const i = this.driver.now();
        this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = s != null ? s : this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        var e;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused", this.holdTime = (e = this.currentTime) != null ? e : 0
    }
    complete() {
        this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
    }
    finish() {
        this.teardown(), this.state = "finished";
        const {
            onComplete: e
        } = this.options;
        e && e()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(e) {
        return this.startTime = 0, this.tick(e, !0)
    }
    get finished() {
        return this.currentFinishedPromise
    }
}
const ya = new Set(["opacity", "clipPath", "filter", "transform"]),
    va = no(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    _t = 10,
    xa = 2e4;

function Ta(t) {
    return Me(t.type) || t.type === "spring" || !io(t.ease)
}

function Pa(t, e) {
    const n = new tn(A(g({}, e), {
        keyframes: t,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    }));
    let s = {
        done: !1,
        value: t[0]
    };
    const i = [];
    let r = 0;
    for (; !s.done && r < xa;) s = n.sample(r), i.push(s.value), r += _t;
    return {
        times: void 0,
        keyframes: i,
        duration: r - _t,
        ease: "linear"
    }
}
const bi = {
    anticipate: ti,
    backInOut: Qs,
    circInOut: ni
};

function Sa(t) {
    return t in bi
}
class En extends vi {
    constructor(e) {
        super(e);
        const {
            name: n,
            motionValue: s,
            element: i,
            keyframes: r
        } = this.options;
        this.resolver = new yi(r, (o, a) => this.onKeyframesResolved(o, a), n, s, i), this.resolver.scheduleResolve()
    }
    initPlayback(e, n) {
        let {
            duration: s = 300,
            times: i,
            ease: r,
            type: o,
            motionValue: a,
            name: l,
            startTime: u
        } = this.options;
        if (!a.owner || !a.owner.current) return !1;
        if (typeof r == "string" && Ss() && Sa(r) && (r = bi[r]), Ta(this.options)) {
            const h = this.options,
                {
                    onComplete: f,
                    onUpdate: d,
                    motionValue: m,
                    element: p
                } = h,
                v = U(h, ["onComplete", "onUpdate", "motionValue", "element"]),
                y = Pa(e, v);
            e = y.keyframes, e.length === 1 && (e[1] = e[0]), s = y.duration, i = y.times, r = y.ease, o = "keyframes"
        }
        const c = so(a.owner.current, l, e, A(g({}, this.options), {
            duration: s,
            times: i,
            ease: r
        }));
        return c.startTime = u != null ? u : this.calcStartTime(), this.pendingTimeline ? (ln(c, this.pendingTimeline), this.pendingTimeline = void 0) : c.onfinish = () => {
            const {
                onComplete: f
            } = this.options;
            a.set(qt(e, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise()
        }, {
            animation: c,
            duration: s,
            times: i,
            type: o,
            ease: r,
            keyframes: e
        }
    }
    get duration() {
        const {
            resolved: e
        } = this;
        if (!e) return 0;
        const {
            duration: n
        } = e;
        return X(n)
    }
    get time() {
        const {
            resolved: e
        } = this;
        if (!e) return 0;
        const {
            animation: n
        } = e;
        return X(n.currentTime || 0)
    }
    set time(e) {
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: s
        } = n;
        s.currentTime = G(e)
    }
    get speed() {
        const {
            resolved: e
        } = this;
        if (!e) return 1;
        const {
            animation: n
        } = e;
        return n.playbackRate
    }
    get finished() {
        return this.resolved.animation.finished
    }
    set speed(e) {
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: s
        } = n;
        s.playbackRate = e
    }
    get state() {
        const {
            resolved: e
        } = this;
        if (!e) return "idle";
        const {
            animation: n
        } = e;
        return n.playState
    }
    get startTime() {
        const {
            resolved: e
        } = this;
        if (!e) return null;
        const {
            animation: n
        } = e;
        return n.startTime
    }
    attachTimeline(e) {
        if (!this._resolved) this.pendingTimeline = e;
        else {
            const {
                resolved: n
            } = this;
            if (!n) return $;
            const {
                animation: s
            } = n;
            ln(s, e)
        }
        return $
    }
    play() {
        if (this.isStopped) return;
        const {
            resolved: e
        } = this;
        if (!e) return;
        const {
            animation: n
        } = e;
        n.playState === "finished" && this.updateFinishedPromise(), n.play()
    }
    pause() {
        const {
            resolved: e
        } = this;
        if (!e) return;
        const {
            animation: n
        } = e;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
        this.resolveFinishedPromise(), this.updateFinishedPromise();
        const {
            resolved: e
        } = this;
        if (!e) return;
        const {
            animation: n,
            keyframes: s,
            duration: i,
            type: r,
            ease: o,
            times: a
        } = e;
        if (n.playState === "idle" || n.playState === "finished") return;
        if (this.time) {
            const u = this.options,
                {
                    motionValue: c,
                    onUpdate: h,
                    onComplete: f,
                    element: d
                } = u,
                m = U(u, ["motionValue", "onUpdate", "onComplete", "element"]),
                p = new tn(A(g({}, m), {
                    keyframes: s,
                    duration: i,
                    type: r,
                    ease: o,
                    times: a,
                    isGenerator: !0
                })),
                v = G(this.time);
            c.setWithVelocity(p.sample(v - _t).value, p.sample(v).value, _t)
        }
        const {
            onStop: l
        } = this.options;
        l && l(), this.cancel()
    }
    complete() {
        const {
            resolved: e
        } = this;
        e && e.animation.finish()
    }
    cancel() {
        const {
            resolved: e
        } = this;
        e && e.animation.cancel()
    }
    static supports(e) {
        const {
            motionValue: n,
            name: s,
            repeatDelay: i,
            repeatType: r,
            damping: o,
            type: a
        } = e;
        if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return !1;
        const {
            onUpdate: l,
            transformTemplate: u
        } = n.owner.getProps();
        return va() && s && ya.has(s) && (s !== "transform" || !u) && !l && !i && r !== "mirror" && o !== 0 && a !== "inertia"
    }
}
const ba = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    Va = t => ({
        type: "spring",
        stiffness: 550,
        damping: t === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    wa = {
        type: "keyframes",
        duration: .8
    },
    Aa = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    Ca = (t, {
        keyframes: e
    }) => e.length > 2 ? wa : ot.has(t) ? t.startsWith("scale") ? Va(e[1]) : ba : Aa;

function Da(h) {
    var f = h,
        {
            when: t,
            delay: e,
            delayChildren: n,
            staggerChildren: s,
            staggerDirection: i,
            repeat: r,
            repeatType: o,
            repeatDelay: a,
            from: l,
            elapsed: u
        } = f,
        c = U(f, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]);
    return !!Object.keys(c).length
}
const en = (t, e, n, s = {}, i, r) => o => {
    const a = Re(s, t) || {},
        l = a.delay || s.delay || 0;
    let {
        elapsed: u = 0
    } = s;
    u = u - G(l);
    let c = A(g({
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: e.getVelocity()
    }, a), {
        delay: -u,
        onUpdate: f => {
            e.set(f), a.onUpdate && a.onUpdate(f)
        },
        onComplete: () => {
            o(), a.onComplete && a.onComplete()
        },
        name: t,
        motionValue: e,
        element: r ? void 0 : i
    });
    Da(a) || (c = g(g({}, c), Ca(t, c))), c.duration && (c.duration = G(c.duration)), c.repeatDelay && (c.repeatDelay = G(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
    let h = !1;
    if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (h = !0)), c.allowFlatten = !a.type && !a.ease, h && !r && e.get() !== void 0) {
        const f = qt(c.keyframes, a);
        if (f !== void 0) return D.update(() => {
            c.onUpdate(f), c.onComplete()
        }), new oo([])
    }
    return !r && En.supports(c) ? new En(c) : new tn(c)
};

function Ma({
    protectedKeys: t,
    needsAnimating: e
}, n) {
    const s = t.hasOwnProperty(n) && e[n] !== !0;
    return e[n] = !1, s
}

function Vi(t, e, {
    delay: n = 0,
    transitionOverride: s,
    type: i
} = {}) {
    var h;
    let c = e,
        {
            transition: r = t.getDefaultTransition(),
            transitionEnd: o
        } = c,
        a = U(c, ["transition", "transitionEnd"]);
    s && (r = s);
    const l = [],
        u = i && t.animationState && t.animationState.getState()[i];
    for (const f in a) {
        const d = t.getValue(f, (h = t.latestValues[f]) != null ? h : null),
            m = a[f];
        if (m === void 0 || u && Ma(u, f)) continue;
        const p = g({
            delay: n
        }, Re(r || {}, f));
        let v = !1;
        if (window.MotionHandoffAnimation) {
            const b = Xs(t);
            if (b) {
                const P = window.MotionHandoffAnimation(b, f, D);
                P !== null && (p.startTime = P, v = !0)
            }
        }
        fe(t, f), d.start(en(f, d, m, t.shouldReduceMotion && Hs.has(f) ? {
            type: !1
        } : p, t, v));
        const y = d.animation;
        y && l.push(y)
    }
    return o && Promise.all(l).then(() => {
        D.update(() => {
            o && ir(t, o)
        })
    }), l
}

function Se(t, e, n = {}) {
    var l;
    const s = Ct(t, e, n.type === "exit" ? (l = t.presenceContext) == null ? void 0 : l.custom : void 0);
    let {
        transition: i = t.getDefaultTransition() || {}
    } = s || {};
    n.transitionOverride && (i = n.transitionOverride);
    const r = s ? () => Promise.all(Vi(t, s, n)) : () => Promise.resolve(),
        o = t.variantChildren && t.variantChildren.size ? (u = 0) => {
            const {
                delayChildren: c = 0,
                staggerChildren: h,
                staggerDirection: f
            } = i;
            return Ra(t, e, c + u, h, f, n)
        } : () => Promise.resolve(),
        {
            when: a
        } = i;
    if (a) {
        const [u, c] = a === "beforeChildren" ? [r, o] : [o, r];
        return u().then(() => c())
    } else return Promise.all([r(), o(n.delay)])
}

function Ra(t, e, n = 0, s = 0, i = 1, r) {
    const o = [],
        a = (t.variantChildren.size - 1) * s,
        l = i === 1 ? (u = 0) => u * s : (u = 0) => a - u * s;
    return Array.from(t.variantChildren).sort(Ea).forEach((u, c) => {
        u.notify("AnimationStart", e), o.push(Se(u, e, A(g({}, r), {
            delay: n + l(c)
        })).then(() => u.notify("AnimationComplete", e)))
    }), Promise.all(o)
}

function Ea(t, e) {
    return t.sortNodePosition(e)
}

function La(t, e, n = {}) {
    t.notify("AnimationStart", e);
    let s;
    if (Array.isArray(e)) {
        const i = e.map(r => Se(t, r, n));
        s = Promise.all(i)
    } else if (typeof e == "string") s = Se(t, e, n);
    else {
        const i = typeof e == "function" ? Ct(t, e, n.custom) : e;
        s = Promise.all(Vi(t, i, n))
    }
    return s.then(() => {
        t.notify("AnimationComplete", e)
    })
}

function wi(t, e) {
    if (!Array.isArray(e)) return !1;
    const n = e.length;
    if (n !== t.length) return !1;
    for (let s = 0; s < n; s++)
        if (e[s] !== t[s]) return !1;
    return !0
}
const Ba = je.length;

function Ai(t) {
    if (!t) return;
    if (!t.isControllingVariants) {
        const n = t.parent ? Ai(t.parent) || {} : {};
        return t.props.initial !== void 0 && (n.initial = t.props.initial), n
    }
    const e = {};
    for (let n = 0; n < Ba; n++) {
        const s = je[n],
            i = t.props[s];
        (Vt(i) || i === !1) && (e[s] = i)
    }
    return e
}
const ka = [...Fe].reverse(),
    Fa = Fe.length;

function ja(t) {
    return e => Promise.all(e.map(({
        animation: n,
        options: s
    }) => La(t, n, s)))
}

function Ia(t) {
    let e = ja(t),
        n = Ln(),
        s = !0;
    const i = l => (u, c) => {
        var f;
        const h = Ct(t, c, l === "exit" ? (f = t.presenceContext) == null ? void 0 : f.custom : void 0);
        if (h) {
            const d = h,
                {
                    transition: m,
                    transitionEnd: p
                } = d,
                v = U(d, ["transition", "transitionEnd"]);
            u = g(g(g({}, u), v), p)
        }
        return u
    };

    function r(l) {
        e = l(t)
    }

    function o(l) {
        const {
            props: u
        } = t, c = Ai(t.parent) || {}, h = [], f = new Set;
        let d = {},
            m = 1 / 0;
        for (let v = 0; v < Fa; v++) {
            const y = ka[v],
                b = n[y],
                P = u[y] !== void 0 ? u[y] : c[y],
                C = Vt(P),
                T = y === l ? b.isActive : null;
            T === !1 && (m = v);
            let w = P === c[y] && P !== u[y] && C;
            if (w && s && t.manuallyAnimateOnMount && (w = !1), b.protectedKeys = g({}, d), !b.isActive && T === null || !P && !b.prevProp || Xt(P) || typeof P == "boolean") continue;
            const M = Oa(b.prevProp, P);
            let V = M || y === l && b.isActive && !w && C || v > m && C,
                B = !1;
            const N = Array.isArray(P) ? P : [P];
            let rt = N.reduce(i(y), {});
            T === !1 && (rt = {});
            const {
                prevResolvedValues: nn = {}
            } = b, Hi = g(g({}, nn), rt), sn = j => {
                V = !0, f.has(j) && (B = !0, f.delete(j)), b.needsAnimating[j] = !0;
                const z = t.getValue(j);
                z && (z.liveStyle = !1)
            };
            for (const j in Hi) {
                const z = rt[j],
                    Zt = nn[j];
                if (d.hasOwnProperty(j)) continue;
                let Jt = !1;
                he(z) && he(Zt) ? Jt = !wi(z, Zt) : Jt = z !== Zt, Jt ? z != null ? sn(j) : f.add(j) : z !== void 0 && f.has(j) ? sn(j) : b.protectedKeys[j] = !0
            }
            b.prevProp = P, b.prevResolvedValues = rt, b.isActive && (d = g(g({}, d), rt)), s && t.blockInitialAnimation && (V = !1), V && (!(w && M) || B) && h.push(...N.map(j => ({
                animation: j,
                options: {
                    type: y
                }
            })))
        }
        if (f.size) {
            const v = {};
            if (typeof u.initial != "boolean") {
                const y = Ct(t, Array.isArray(u.initial) ? u.initial[0] : u.initial);
                y && y.transition && (v.transition = y.transition)
            }
            f.forEach(y => {
                const b = t.getBaseTarget(y),
                    P = t.getValue(y);
                P && (P.liveStyle = !0), v[y] = b != null ? b : null
            }), h.push({
                animation: v
            })
        }
        let p = !!h.length;
        return s && (u.initial === !1 || u.initial === u.animate) && !t.manuallyAnimateOnMount && (p = !1), s = !1, p ? e(h) : Promise.resolve()
    }

    function a(l, u) {
        var h;
        if (n[l].isActive === u) return Promise.resolve();
        (h = t.variantChildren) == null || h.forEach(f => {
            var d;
            return (d = f.animationState) == null ? void 0 : d.setActive(l, u)
        }), n[l].isActive = u;
        const c = o(l);
        for (const f in n) n[f].protectedKeys = {};
        return c
    }
    return {
        animateChanges: o,
        setActive: a,
        setAnimateFunction: r,
        getState: () => n,
        reset: () => {
            n = Ln(), s = !0
        }
    }
}

function Oa(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !wi(e, t) : !1
}

function tt(t = !1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function Ln() {
    return {
        animate: tt(!0),
        whileInView: tt(),
        whileHover: tt(),
        whileTap: tt(),
        whileDrag: tt(),
        whileFocus: tt(),
        exit: tt()
    }
}
class Q {
    constructor(e) {
        this.isMounted = !1, this.node = e
    }
    update() {}
}
class Na extends Q {
    constructor(e) {
        super(e), e.animationState || (e.animationState = Ia(e))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: e
        } = this.node.getProps();
        Xt(e) && (this.unmountControls = e.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: e
        } = this.node.getProps(), {
            animate: n
        } = this.node.prevProps || {};
        e !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var e;
        this.node.animationState.reset(), (e = this.unmountControls) == null || e.call(this)
    }
}
let Ua = 0;
class Ka extends Q {
    constructor() {
        super(...arguments), this.id = Ua++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: e,
            onExitComplete: n
        } = this.node.presenceContext, {
            isPresent: s
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || e === s) return;
        const i = this.node.animationState.setActive("exit", !e);
        n && !e && i.then(() => {
            n(this.id)
        })
    }
    mount() {
        const {
            register: e,
            onExitComplete: n
        } = this.node.presenceContext || {};
        n && n(this.id), e && (this.unmount = e(this.id))
    }
    unmount() {}
}
const Wa = {
    animation: {
        Feature: Na
    },
    exit: {
        Feature: Ka
    }
};

function Mt(t, e, n, s = {
    passive: !0
}) {
    return t.addEventListener(e, n, s), () => t.removeEventListener(e, n)
}

function kt(t) {
    return {
        point: {
            x: t.pageX,
            y: t.pageY
        }
    }
}
const $a = t => e => Vs(e) && t(e, kt(e));

function xt(t, e, n, s) {
    return Mt(t, e, $a(n), s)
}

function Ci({
    top: t,
    left: e,
    right: n,
    bottom: s
}) {
    return {
        x: {
            min: e,
            max: n
        },
        y: {
            min: t,
            max: s
        }
    }
}

function Ga({
    x: t,
    y: e
}) {
    return {
        top: e.min,
        right: t.max,
        bottom: e.max,
        left: t.min
    }
}

function _a(t, e) {
    if (!e) return t;
    const n = e({
            x: t.left,
            y: t.top
        }),
        s = e({
            x: t.right,
            y: t.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: s.y,
        right: s.x
    }
}
const Di = 1e-4,
    za = 1 - Di,
    Ha = 1 + Di,
    Mi = .01,
    Xa = 0 - Mi,
    Ya = 0 + Mi;

function O(t) {
    return t.max - t.min
}

function qa(t, e, n) {
    return Math.abs(t - e) <= n
}

function Bn(t, e, n, s = .5) {
    t.origin = s, t.originPoint = R(e.min, e.max, t.origin), t.scale = O(n) / O(e), t.translate = R(n.min, n.max, t.origin) - t.originPoint, (t.scale >= za && t.scale <= Ha || isNaN(t.scale)) && (t.scale = 1), (t.translate >= Xa && t.translate <= Ya || isNaN(t.translate)) && (t.translate = 0)
}

function Tt(t, e, n, s) {
    Bn(t.x, e.x, n.x, s ? s.originX : void 0), Bn(t.y, e.y, n.y, s ? s.originY : void 0)
}

function kn(t, e, n) {
    t.min = n.min + e.min, t.max = t.min + O(e)
}

function Za(t, e, n) {
    kn(t.x, e.x, n.x), kn(t.y, e.y, n.y)
}

function Fn(t, e, n) {
    t.min = e.min - n.min, t.max = t.min + O(e)
}

function Pt(t, e, n) {
    Fn(t.x, e.x, n.x), Fn(t.y, e.y, n.y)
}
const jn = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    ct = () => ({
        x: jn(),
        y: jn()
    }),
    In = () => ({
        min: 0,
        max: 0
    }),
    L = () => ({
        x: In(),
        y: In()
    });

function W(t) {
    return [t("x"), t("y")]
}

function ie(t) {
    return t === void 0 || t === 1
}

function be({
    scale: t,
    scaleX: e,
    scaleY: n
}) {
    return !ie(t) || !ie(e) || !ie(n)
}

function et(t) {
    return be(t) || Ri(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}

function Ri(t) {
    return On(t.x) || On(t.y)
}

function On(t) {
    return t && t !== "0%"
}

function zt(t, e, n) {
    const s = t - n,
        i = e * s;
    return n + i
}

function Nn(t, e, n, s, i) {
    return i !== void 0 && (t = zt(t, i, s)), zt(t, n, s) + e
}

function Ve(t, e = 0, n = 1, s, i) {
    t.min = Nn(t.min, e, n, s, i), t.max = Nn(t.max, e, n, s, i)
}

function Ei(t, {
    x: e,
    y: n
}) {
    Ve(t.x, e.translate, e.scale, e.originPoint), Ve(t.y, n.translate, n.scale, n.originPoint)
}
const Un = .999999999999,
    Kn = 1.0000000000001;

function Ja(t, e, n, s = !1) {
    const i = n.length;
    if (!i) return;
    e.x = e.y = 1;
    let r, o;
    for (let a = 0; a < i; a++) {
        r = n[a], o = r.projectionDelta;
        const {
            visualElement: l
        } = r.options;
        l && l.props.style && l.props.style.display === "contents" || (s && r.options.layoutScroll && r.scroll && r !== r.root && ht(t, {
            x: -r.scroll.offset.x,
            y: -r.scroll.offset.y
        }), o && (e.x *= o.x.scale, e.y *= o.y.scale, Ei(t, o)), s && et(r.latestValues) && ht(t, r.latestValues))
    }
    e.x < Kn && e.x > Un && (e.x = 1), e.y < Kn && e.y > Un && (e.y = 1)
}

function ut(t, e) {
    t.min = t.min + e, t.max = t.max + e
}

function Wn(t, e, n, s, i = .5) {
    const r = R(t.min, t.max, i);
    Ve(t, e, n, r, s)
}

function ht(t, e) {
    Wn(t.x, e.x, e.scaleX, e.scale, e.originX), Wn(t.y, e.y, e.scaleY, e.scale, e.originY)
}

function Li(t, e) {
    return Ci(_a(t.getBoundingClientRect(), e))
}

function Qa(t, e, n) {
    const s = Li(t, n),
        {
            scroll: i
        } = e;
    return i && (ut(s.x, i.offset.x), ut(s.y, i.offset.y)), s
}
const Bi = ({
        current: t
    }) => t ? t.ownerDocument.defaultView : null,
    $n = (t, e) => Math.abs(t - e);

function tl(t, e) {
    const n = $n(t.x, e.x),
        s = $n(t.y, e.y);
    return Math.sqrt(Qt(n, 2) + Qt(s, 2))
}
class ki {
    constructor(e, n, {
        transformPagePoint: s,
        contextWindow: i,
        dragSnapToOrigin: r = !1
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const h = re(this.lastMoveEventInfo, this.history),
                    f = this.startEvent !== null,
                    d = tl(h.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!f && !d) return;
                const {
                    point: m
                } = h, {
                    timestamp: p
                } = I;
                this.history.push(A(g({}, m), {
                    timestamp: p
                }));
                const {
                    onStart: v,
                    onMove: y
                } = this.handlers;
                f || (v && v(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), y && y(this.lastMoveEvent, h)
            }, this.handlePointerMove = (h, f) => {
                this.lastMoveEvent = h, this.lastMoveEventInfo = oe(f, this.transformPagePoint), D.update(this.updatePoint, !0)
            }, this.handlePointerUp = (h, f) => {
                this.end();
                const {
                    onEnd: d,
                    onSessionEnd: m,
                    resumeAnimation: p
                } = this.handlers;
                if (this.dragSnapToOrigin && p && p(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const v = re(h.type === "pointercancel" ? this.lastMoveEventInfo : oe(f, this.transformPagePoint), this.history);
                this.startEvent && d && d(h, v), m && m(h, v)
            }, !Vs(e)) return;
        this.dragSnapToOrigin = r, this.handlers = n, this.transformPagePoint = s, this.contextWindow = i || window;
        const o = kt(e),
            a = oe(o, this.transformPagePoint),
            {
                point: l
            } = a,
            {
                timestamp: u
            } = I;
        this.history = [A(g({}, l), {
            timestamp: u
        })];
        const {
            onSessionStart: c
        } = n;
        c && c(e, re(a, this.history)), this.removeListeners = Bt(xt(this.contextWindow, "pointermove", this.handlePointerMove), xt(this.contextWindow, "pointerup", this.handlePointerUp), xt(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(e) {
        this.handlers = e
    }
    end() {
        this.removeListeners && this.removeListeners(), Z(this.updatePoint)
    }
}

function oe(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}

function Gn(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}

function re({
    point: t
}, e) {
    return {
        point: t,
        delta: Gn(t, Fi(e)),
        offset: Gn(t, el(e)),
        velocity: nl(e, .1)
    }
}

function el(t) {
    return t[0]
}

function Fi(t) {
    return t[t.length - 1]
}

function nl(t, e) {
    if (t.length < 2) return {
        x: 0,
        y: 0
    };
    let n = t.length - 1,
        s = null;
    const i = Fi(t);
    for (; n >= 0 && (s = t[n], !(i.timestamp - s.timestamp > G(e)));) n--;
    if (!s) return {
        x: 0,
        y: 0
    };
    const r = X(i.timestamp - s.timestamp);
    if (r === 0) return {
        x: 0,
        y: 0
    };
    const o = {
        x: (i.x - s.x) / r,
        y: (i.y - s.y) / r
    };
    return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
}

function sl(t, {
    min: e,
    max: n
}, s) {
    return e !== void 0 && t < e ? t = s ? R(e, t, s.min) : Math.max(t, e) : n !== void 0 && t > n && (t = s ? R(n, t, s.max) : Math.min(t, n)), t
}

function _n(t, e, n) {
    return {
        min: e !== void 0 ? t.min + e : void 0,
        max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
    }
}

function il(t, {
    top: e,
    left: n,
    bottom: s,
    right: i
}) {
    return {
        x: _n(t.x, n, i),
        y: _n(t.y, e, s)
    }
}

function zn(t, e) {
    let n = e.min - t.min,
        s = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([n, s] = [s, n]), {
        min: n,
        max: s
    }
}

function ol(t, e) {
    return {
        x: zn(t.x, e.x),
        y: zn(t.y, e.y)
    }
}

function rl(t, e) {
    let n = .5;
    const s = O(t),
        i = O(e);
    return i > s ? n = bt(e.min, e.max - s, t.min) : s > i && (n = bt(t.min, t.max - i, e.min)), Y(0, 1, n)
}

function al(t, e) {
    const n = {};
    return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n
}
const we = .35;

function ll(t = we) {
    return t === !1 ? t = 0 : t === !0 && (t = we), {
        x: Hn(t, "left", "right"),
        y: Hn(t, "top", "bottom")
    }
}

function Hn(t, e, n) {
    return {
        min: Xn(t, e),
        max: Xn(t, n)
    }
}

function Xn(t, e) {
    return typeof t == "number" ? t : t[e] || 0
}
const cl = new WeakMap;
class ul {
    constructor(e) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = L(), this.visualElement = e
    }
    start(e, {
        snapToCursor: n = !1
    } = {}) {
        const {
            presenceContext: s
        } = this.visualElement;
        if (s && s.isPresent === !1) return;
        const i = c => {
                const {
                    dragSnapToOrigin: h
                } = this.getProps();
                h ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(kt(c).point)
            },
            r = (c, h) => {
                const {
                    drag: f,
                    dragPropagation: d,
                    onDragStart: m
                } = this.getProps();
                if (f && !d && (this.openDragLock && this.openDragLock(), this.openDragLock = ro(f), !this.openDragLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), W(v => {
                    let y = this.getAxisMotionValue(v).get() || 0;
                    if (_.test(y)) {
                        const {
                            projection: b
                        } = this.visualElement;
                        if (b && b.layout) {
                            const P = b.layout.layoutBox[v];
                            P && (y = O(P) * (parseFloat(y) / 100))
                        }
                    }
                    this.originPoint[v] = y
                }), m && D.postRender(() => m(c, h)), fe(this.visualElement, "transform");
                const {
                    animationState: p
                } = this.visualElement;
                p && p.setActive("whileDrag", !0)
            },
            o = (c, h) => {
                const {
                    dragPropagation: f,
                    dragDirectionLock: d,
                    onDirectionLock: m,
                    onDrag: p
                } = this.getProps();
                if (!f && !this.openDragLock) return;
                const {
                    offset: v
                } = h;
                if (d && this.currentDirection === null) {
                    this.currentDirection = hl(v), this.currentDirection !== null && m && m(this.currentDirection);
                    return
                }
                this.updateAxis("x", h.point, v), this.updateAxis("y", h.point, v), this.visualElement.render(), p && p(c, h)
            },
            a = (c, h) => this.stop(c, h),
            l = () => W(c => {
                var h;
                return this.getAnimationState(c) === "paused" && ((h = this.getAxisMotionValue(c).animation) == null ? void 0 : h.play())
            }),
            {
                dragSnapToOrigin: u
            } = this.getProps();
        this.panSession = new ki(e, {
            onSessionStart: i,
            onStart: r,
            onMove: o,
            onSessionEnd: a,
            resumeAnimation: l
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            contextWindow: Bi(this.visualElement)
        })
    }
    stop(e, n) {
        const s = this.isDragging;
        if (this.cancel(), !s) return;
        const {
            velocity: i
        } = n;
        this.startAnimation(i);
        const {
            onDragEnd: r
        } = this.getProps();
        r && D.postRender(() => r(e, n))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: e,
            animationState: n
        } = this.visualElement;
        e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: s
        } = this.getProps();
        !s && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1)
    }
    updateAxis(e, n, s) {
        const {
            drag: i
        } = this.getProps();
        if (!s || !Ot(e, i, this.currentDirection)) return;
        const r = this.getAxisMotionValue(e);
        let o = this.originPoint[e] + s[e];
        this.constraints && this.constraints[e] && (o = sl(o, this.constraints[e], this.elastic[e])), r.set(o)
    }
    resolveConstraints() {
        var r;
        const {
            dragConstraints: e,
            dragElastic: n
        } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (r = this.visualElement.projection) == null ? void 0 : r.layout, i = this.constraints;
        e && at(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && s ? this.constraints = il(s.layoutBox, e) : this.constraints = !1, this.elastic = ll(n), i !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && W(o => {
            this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = al(s.layoutBox[o], this.constraints[o]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: e,
            onMeasureDragConstraints: n
        } = this.getProps();
        if (!e || !at(e)) return !1;
        const s = e.current,
            {
                projection: i
            } = this.visualElement;
        if (!i || !i.layout) return !1;
        const r = Qa(s, i.root, this.visualElement.getTransformPagePoint());
        let o = ol(i.layout.layoutBox, r);
        if (n) {
            const a = n(Ga(o));
            this.hasMutatedConstraints = !!a, a && (o = Ci(a))
        }
        return o
    }
    startAnimation(e) {
        const {
            drag: n,
            dragMomentum: s,
            dragElastic: i,
            dragTransition: r,
            dragSnapToOrigin: o,
            onDragTransitionEnd: a
        } = this.getProps(), l = this.constraints || {}, u = W(c => {
            if (!Ot(c, n, this.currentDirection)) return;
            let h = l && l[c] || {};
            o && (h = {
                min: 0,
                max: 0
            });
            const f = i ? 200 : 1e6,
                d = i ? 40 : 1e7,
                m = g(g({
                    type: "inertia",
                    velocity: s ? e[c] : 0,
                    bounceStiffness: f,
                    bounceDamping: d,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10
                }, r), h);
            return this.startAxisValueAnimation(c, m)
        });
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(e, n) {
        const s = this.getAxisMotionValue(e);
        return fe(this.visualElement, e), s.start(en(e, s, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        W(e => this.getAxisMotionValue(e).stop())
    }
    pauseAnimation() {
        W(e => {
            var n;
            return (n = this.getAxisMotionValue(e).animation) == null ? void 0 : n.pause()
        })
    }
    getAnimationState(e) {
        var n;
        return (n = this.getAxisMotionValue(e).animation) == null ? void 0 : n.state
    }
    getAxisMotionValue(e) {
        const n = `_drag${e.toUpperCase()}`,
            s = this.visualElement.getProps(),
            i = s[n];
        return i || this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0)
    }
    snapToCursor(e) {
        W(n => {
            const {
                drag: s
            } = this.getProps();
            if (!Ot(n, s, this.currentDirection)) return;
            const {
                projection: i
            } = this.visualElement, r = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {
                    min: o,
                    max: a
                } = i.layout.layoutBox[n];
                r.set(e[n] - R(o, a, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: e,
            dragConstraints: n
        } = this.getProps(), {
            projection: s
        } = this.visualElement;
        if (!at(n) || !s || !this.constraints) return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        W(o => {
            const a = this.getAxisMotionValue(o);
            if (a && this.constraints !== !1) {
                const l = a.get();
                i[o] = rl({
                    min: l,
                    max: l
                }, this.constraints[o])
            }
        });
        const {
            transformTemplate: r
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = r ? r({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.resolveConstraints(), W(o => {
            if (!Ot(o, e, null)) return;
            const a = this.getAxisMotionValue(o),
                {
                    min: l,
                    max: u
                } = this.constraints[o];
            a.set(R(l, u, i[o]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        cl.set(this.visualElement, this);
        const e = this.visualElement.current,
            n = xt(e, "pointerdown", l => {
                const {
                    drag: u,
                    dragListener: c = !0
                } = this.getProps();
                u && c && this.start(l)
            }),
            s = () => {
                const {
                    dragConstraints: l
                } = this.getProps();
                at(l) && l.current && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: i
            } = this.visualElement,
            r = i.addEventListener("measure", s);
        i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), D.read(s);
        const o = Mt(window, "resize", () => this.scalePositionWithinConstraints()),
            a = i.addEventListener("didUpdate", ({
                delta: l,
                hasLayoutChanged: u
            }) => {
                this.isDragging && u && (W(c => {
                    const h = this.getAxisMotionValue(c);
                    h && (this.originPoint[c] += l[c].translate, h.set(h.get() + l[c].translate))
                }), this.visualElement.render())
            });
        return () => {
            o(), n(), r(), a && a()
        }
    }
    getProps() {
        const e = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: s = !1,
                dragPropagation: i = !1,
                dragConstraints: r = !1,
                dragElastic: o = we,
                dragMomentum: a = !0
            } = e;
        return A(g({}, e), {
            drag: n,
            dragDirectionLock: s,
            dragPropagation: i,
            dragConstraints: r,
            dragElastic: o,
            dragMomentum: a
        })
    }
}

function Ot(t, e, n) {
    return (e === !0 || e === t) && (n === null || n === t)
}

function hl(t, e = 10) {
    let n = null;
    return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n
}
class fl extends Q {
    constructor(e) {
        super(e), this.removeGroupControls = $, this.removeListeners = $, this.controls = new ul(e)
    }
    mount() {
        const {
            dragControls: e
        } = this.node.getProps();
        e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || $
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const Yn = t => (e, n) => {
    t && D.postRender(() => t(e, n))
};
class dl extends Q {
    constructor() {
        super(...arguments), this.removePointerDownListener = $
    }
    onPointerDown(e) {
        this.session = new ki(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Bi(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: e,
            onPanStart: n,
            onPan: s,
            onPanEnd: i
        } = this.node.getProps();
        return {
            onSessionStart: Yn(e),
            onStart: Yn(n),
            onMove: s,
            onEnd: (r, o) => {
                delete this.session, i && D.postRender(() => i(r, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = xt(this.node.current, "pointerdown", e => this.onPointerDown(e))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
const Ut = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};

function qn(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const yt = {
        correct: (t, e) => {
            if (!e.target) return t;
            if (typeof t == "string")
                if (S.test(t)) t = parseFloat(t);
                else return t;
            const n = qn(t, e.target.x),
                s = qn(t, e.target.y);
            return `${n}% ${s}%`
        }
    },
    ml = {
        correct: (t, {
            treeScale: e,
            projectionDelta: n
        }) => {
            const s = t,
                i = J.parse(t);
            if (i.length > 5) return s;
            const r = J.createTransformer(t),
                o = typeof i[0] != "number" ? 1 : 0,
                a = n.x.scale * e.x,
                l = n.y.scale * e.y;
            i[0 + o] /= a, i[1 + o] /= l;
            const u = R(a, l, .5);
            return typeof i[2 + o] == "number" && (i[2 + o] /= u), typeof i[3 + o] == "number" && (i[3 + o] /= u), r(i)
        }
    };
class pl extends x.Component {
    componentDidMount() {
        const {
            visualElement: e,
            layoutGroup: n,
            switchLayoutGroup: s,
            layoutId: i
        } = this.props, {
            projection: r
        } = e;
        Lo(gl), r && (n.group && n.group.add(r), s && s.register && i && s.register(r), r.root.didUpdate(), r.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), r.setOptions(A(g({}, r.options), {
            onExitComplete: () => this.safeToRemove()
        }))), Ut.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(e) {
        const {
            layoutDependency: n,
            visualElement: s,
            drag: i,
            isPresent: r
        } = this.props, o = s.projection;
        return o && (o.isPresent = r, i || e.layoutDependency !== n || n === void 0 || e.isPresent !== r ? o.willUpdate() : this.safeToRemove(), e.isPresent !== r && (r ? o.promote() : o.relegate() || D.postRender(() => {
            const a = o.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: e
        } = this.props.visualElement;
        e && (e.root.didUpdate(), De.postRender(() => {
            !e.currentAnimation && e.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: e,
            layoutGroup: n,
            switchLayoutGroup: s
        } = this.props, {
            projection: i
        } = e;
        i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), s && s.deregister && s.deregister(i))
    }
    safeToRemove() {
        const {
            safeToRemove: e
        } = this.props;
        e && e()
    }
    render() {
        return null
    }
}

function ji(t) {
    const [e, n] = Ms(), s = x.useContext(Ee);
    return H.jsx(pl, A(g({}, t), {
        layoutGroup: s,
        switchLayoutGroup: x.useContext(ks),
        isPresent: e,
        safeToRemove: n
    }))
}
const gl = {
    borderRadius: A(g({}, yt), {
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    }),
    borderTopLeftRadius: yt,
    borderTopRightRadius: yt,
    borderBottomLeftRadius: yt,
    borderBottomRightRadius: yt,
    boxShadow: ml
};

function yl(t, e, n) {
    const s = F(t) ? t : St(t);
    return s.start(en("", s, e, n)), s.animation
}

function vl(t) {
    return t instanceof SVGElement && t.tagName !== "svg"
}
const xl = (t, e) => t.depth - e.depth;
class Tl {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(e) {
        ws(this.children, e), this.isDirty = !0
    }
    remove(e) {
        As(this.children, e), this.isDirty = !0
    }
    forEach(e) {
        this.isDirty && this.children.sort(xl), this.isDirty = !1, this.children.forEach(e)
    }
}

function Pl(t, e) {
    const n = ft.now(),
        s = ({
            timestamp: i
        }) => {
            const r = i - n;
            r >= e && (Z(s), t(r - e))
        };
    return D.read(s, !0), () => Z(s)
}
const Ii = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    Sl = Ii.length,
    Zn = t => typeof t == "string" ? parseFloat(t) : t,
    Jn = t => typeof t == "number" || S.test(t);

function bl(t, e, n, s, i, r) {
    i ? (t.opacity = R(0, n.opacity !== void 0 ? n.opacity : 1, Vl(s)), t.opacityExit = R(e.opacity !== void 0 ? e.opacity : 1, 0, wl(s))) : r && (t.opacity = R(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, s));
    for (let o = 0; o < Sl; o++) {
        const a = `border${Ii[o]}Radius`;
        let l = Qn(e, a),
            u = Qn(n, a);
        if (l === void 0 && u === void 0) continue;
        l || (l = 0), u || (u = 0), l === 0 || u === 0 || Jn(l) === Jn(u) ? (t[a] = Math.max(R(Zn(l), Zn(u), s), 0), (_.test(u) || _.test(l)) && (t[a] += "%")) : t[a] = u
    }(e.rotate || n.rotate) && (t.rotate = R(e.rotate || 0, n.rotate || 0, s))
}

function Qn(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius
}
const Vl = Oi(0, .5, ei),
    wl = Oi(.5, .95, $);

function Oi(t, e, n) {
    return s => s < t ? 0 : s > e ? 1 : n(bt(t, e, s))
}

function ts(t, e) {
    t.min = e.min, t.max = e.max
}

function K(t, e) {
    ts(t.x, e.x), ts(t.y, e.y)
}

function es(t, e) {
    t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
}

function ns(t, e, n, s, i) {
    return t -= e, t = zt(t, 1 / n, s), i !== void 0 && (t = zt(t, 1 / i, s)), t
}

function Al(t, e = 0, n = 1, s = .5, i, r = t, o = t) {
    if (_.test(e) && (e = parseFloat(e), e = R(o.min, o.max, e / 100) - o.min), typeof e != "number") return;
    let a = R(r.min, r.max, s);
    t === r && (a -= e), t.min = ns(t.min, e, n, a, i), t.max = ns(t.max, e, n, a, i)
}

function ss(t, e, [n, s, i], r, o) {
    Al(t, e[n], e[s], e[i], e.scale, r, o)
}
const Cl = ["x", "scaleX", "originX"],
    Dl = ["y", "scaleY", "originY"];

function is(t, e, n, s) {
    ss(t.x, e, Cl, n ? n.x : void 0, s ? s.x : void 0), ss(t.y, e, Dl, n ? n.y : void 0, s ? s.y : void 0)
}

function os(t) {
    return t.translate === 0 && t.scale === 1
}

function Ni(t) {
    return os(t.x) && os(t.y)
}

function rs(t, e) {
    return t.min === e.min && t.max === e.max
}

function Ml(t, e) {
    return rs(t.x, e.x) && rs(t.y, e.y)
}

function as(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
}

function Ui(t, e) {
    return as(t.x, e.x) && as(t.y, e.y)
}

function ls(t) {
    return O(t.x) / O(t.y)
}

function cs(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
}
class Rl {
    constructor() {
        this.members = []
    }
    add(e) {
        ws(this.members, e), e.scheduleRender()
    }
    remove(e) {
        if (As(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(e) {
        const n = this.members.findIndex(i => e === i);
        if (n === 0) return !1;
        let s;
        for (let i = n; i >= 0; i--) {
            const r = this.members[i];
            if (r.isPresent !== !1) {
                s = r;
                break
            }
        }
        return s ? (this.promote(s), !0) : !1
    }
    promote(e, n) {
        const s = this.lead;
        if (e !== s && (this.prevLead = s, this.lead = e, e.show(), s)) {
            s.instance && s.scheduleRender(), e.scheduleRender(), e.resumeFrom = s, n && (e.resumeFrom.preserveOpacity = !0), s.snapshot && (e.snapshot = s.snapshot, e.snapshot.latestValues = s.animationValues || s.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            const {
                crossfade: i
            } = e.options;
            i === !1 && s.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(e => {
            const {
                options: n,
                resumingFrom: s
            } = e;
            n.onExitComplete && n.onExitComplete(), s && s.options.onExitComplete && s.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(e => {
            e.instance && e.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function El(t, e, n) {
    let s = "";
    const i = t.x.translate / e.x,
        r = t.y.translate / e.y,
        o = (n == null ? void 0 : n.z) || 0;
    if ((i || r || o) && (s = `translate3d(${i}px, ${r}px, ${o}px) `), (e.x !== 1 || e.y !== 1) && (s += `scale(${1/e.x}, ${1/e.y}) `), n) {
        const {
            transformPerspective: u,
            rotate: c,
            rotateX: h,
            rotateY: f,
            skewX: d,
            skewY: m
        } = n;
        u && (s = `perspective(${u}px) ${s}`), c && (s += `rotate(${c}deg) `), h && (s += `rotateX(${h}deg) `), f && (s += `rotateY(${f}deg) `), d && (s += `skewX(${d}deg) `), m && (s += `skewY(${m}deg) `)
    }
    const a = t.x.scale * e.x,
        l = t.y.scale * e.y;
    return (a !== 1 || l !== 1) && (s += `scale(${a}, ${l})`), s || "none"
}
const ae = ["", "X", "Y", "Z"],
    Ll = {
        visibility: "hidden"
    },
    us = 1e3;
let Bl = 0;

function le(t, e, n, s) {
    const {
        latestValues: i
    } = e;
    i[t] && (n[t] = i[t], e.setStaticValue(t, 0), s && (s[t] = 0))
}

function Ki(t) {
    if (t.hasCheckedOptimisedAppear = !0, t.root === t) return;
    const {
        visualElement: e
    } = t.options;
    if (!e) return;
    const n = Xs(e);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {
            layout: i,
            layoutId: r
        } = t.options;
        window.MotionCancelOptimisedAnimation(n, "transform", D, !(i || r))
    }
    const {
        parent: s
    } = t;
    s && !s.hasCheckedOptimisedAppear && Ki(s)
}

function Wi({
    attachResizeListener: t,
    defaultParent: e,
    measureScroll: n,
    checkIsScrollRoot: s,
    resetTransform: i
}) {
    return class {
        constructor(o = {}, a = e == null ? void 0 : e()) {
            this.id = Bl++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, this.nodes.forEach(jl), this.nodes.forEach(Kl), this.nodes.forEach(Wl), this.nodes.forEach(Il)
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = o, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Tl)
        }
        addEventListener(o, a) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new Cs), this.eventHandlers.get(o).add(a)
        }
        notifyListeners(o, ...a) {
            const l = this.eventHandlers.get(o);
            l && l.notify(...a)
        }
        hasListeners(o) {
            return this.eventHandlers.has(o)
        }
        mount(o, a = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = vl(o), this.instance = o;
            const {
                layoutId: l,
                layout: u,
                visualElement: c
            } = this.options;
            if (c && !c.current && c.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), t) {
                let h;
                const f = () => this.root.updateBlockedByResize = !1;
                t(o, () => {
                    this.root.updateBlockedByResize = !0, h && h(), h = Pl(f, 250), Ut.hasAnimatedSinceResize && (Ut.hasAnimatedSinceResize = !1, this.nodes.forEach(fs))
                })
            }
            l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({
                delta: h,
                hasLayoutChanged: f,
                hasRelativeLayoutChanged: d,
                layout: m
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const p = this.options.transition || c.getDefaultTransition() || Hl,
                    {
                        onLayoutAnimationStart: v,
                        onLayoutAnimationComplete: y
                    } = c.getProps(),
                    b = !this.targetLayout || !Ui(this.targetLayout, m),
                    P = !f && d;
                if (this.options.layoutRoot || this.resumeFrom || P || f && (b || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(h, P);
                    const C = A(g({}, Re(p, "layout")), {
                        onPlay: v,
                        onComplete: y
                    });
                    (c.shouldReduceMotion || this.options.layoutRoot) && (C.delay = 0, C.type = !1), this.startAnimation(C)
                } else f || fs(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = m
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Z(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach($l), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: o
            } = this.options;
            return o && o.getProps().transformTemplate
        }
        willUpdate(o = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Ki(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const h = this.path[c];
                h.shouldResetTransform = !0, h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(!1)
            }
            const {
                layoutId: a,
                layout: l
            } = this.options;
            if (a === void 0 && !l) return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(hs);
                return
            }
            this.isUpdating || this.nodes.forEach(Nl), this.isUpdating = !1, this.nodes.forEach(Ul), this.nodes.forEach(kl), this.nodes.forEach(Fl), this.clearAllSnapshots();
            const a = ft.now();
            I.delta = Y(0, 1e3 / 60, a - I.timestamp), I.timestamp = a, I.isProcessing = !0, te.update.process(I), te.preRender.process(I), te.render.process(I), I.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, De.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(Ol), this.sharedNodes.forEach(Gl)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, D.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            D.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !O(this.snapshot.measuredBox.x) && !O(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
            const o = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = L(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: a
            } = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
        }
        updateScroll(o = "measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1), a) {
                const l = s(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: o,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!i) return;
            const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                a = this.projectionDelta && !Ni(this.projectionDelta),
                l = this.getTransformTemplate(),
                u = l ? l(this.latestValues, "") : void 0,
                c = u !== this.prevTransformTemplateValue;
            o && (a || et(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(o = !0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return o && (l = this.removeTransform(l)), Xl(l), {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var u;
            const {
                visualElement: o
            } = this.options;
            if (!o) return L();
            const a = o.measureViewportBox();
            if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(Yl))) {
                const {
                    scroll: c
                } = this.root;
                c && (ut(a.x, c.offset.x), ut(a.y, c.offset.y))
            }
            return a
        }
        removeElementScroll(o) {
            var l;
            const a = L();
            if (K(a, o), (l = this.scroll) != null && l.wasRoot) return a;
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u],
                    {
                        scroll: h,
                        options: f
                    } = c;
                c !== this.root && h && f.layoutScroll && (h.wasRoot && K(a, o), ut(a.x, h.offset.x), ut(a.y, h.offset.y))
            }
            return a
        }
        applyTransform(o, a = !1) {
            const l = L();
            K(l, o);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !a && c.options.layoutScroll && c.scroll && c !== c.root && ht(l, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }), et(c.latestValues) && ht(l, c.latestValues)
            }
            return et(this.latestValues) && ht(l, this.latestValues), l
        }
        removeTransform(o) {
            const a = L();
            K(a, o);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !et(u.latestValues)) continue;
                be(u.latestValues) && u.updateSnapshot();
                const c = L(),
                    h = u.measurePageBox();
                K(c, h), is(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return et(this.latestValues) && is(a, this.latestValues), a
        }
        setTargetDelta(o) {
            this.targetDelta = o, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(o) {
            this.options = A(g(g({}, this.options), o), {
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0
            })
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== I.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(o = !1) {
            var f;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const l = !!this.resumingFrom || this !== a;
            if (!(o || l && this.isSharedProjectionDirty || this.isProjectionDirty || (f = this.parent) != null && f.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: c,
                layoutId: h
            } = this.options;
            if (!(!this.layout || !(c || h))) {
                if (this.resolvedRelativeTargetAt = I.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const d = this.getClosestProjectingParent();
                    d && d.layout && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = L(), this.relativeTargetOrigin = L(), Pt(this.relativeTargetOrigin, this.layout.layoutBox, d.layout.layoutBox), K(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = L(), this.targetWithTransforms = L()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Za(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : K(this.target, this.layout.layoutBox), Ei(this.target, this.targetDelta)) : K(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                    this.attemptToResolveRelativeTarget = !1;
                    const d = this.getClosestProjectingParent();
                    d && !!d.resumingFrom == !!this.resumingFrom && !d.options.layoutScroll && d.target && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = L(), this.relativeTargetOrigin = L(), Pt(this.relativeTargetOrigin, this.target, d.target), K(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || be(this.parent.latestValues) || Ri(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var m;
            const o = this.getLead(),
                a = !!this.resumingFrom || this !== o;
            let l = !0;
            if ((this.isProjectionDirty || (m = this.parent) != null && m.isProjectionDirty) && (l = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === I.timestamp && (l = !1), l) return;
            const {
                layout: u,
                layoutId: c
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || c)) return;
            K(this.layoutCorrected, this.layout.layoutBox);
            const h = this.treeScale.x,
                f = this.treeScale.y;
            Ja(this.layoutCorrected, this.treeScale, this.path, a), o.layout && !o.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (o.target = o.layout.layoutBox, o.targetWithTransforms = L());
            const {
                target: d
            } = o;
            if (!d) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (es(this.prevProjectionDelta.x, this.projectionDelta.x), es(this.prevProjectionDelta.y, this.projectionDelta.y)), Tt(this.projectionDelta, this.layoutCorrected, d, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== f || !cs(this.projectionDelta.x, this.prevProjectionDelta.x) || !cs(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", d))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(o = !0) {
            var a;
            if ((a = this.options.visualElement) == null || a.scheduleRender(), o) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = ct(), this.projectionDelta = ct(), this.projectionDeltaWithTransform = ct()
        }
        setAnimationOrigin(o, a = !1) {
            const l = this.snapshot,
                u = l ? l.latestValues : {},
                c = g({}, this.latestValues),
                h = ct();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
            const f = L(),
                d = l ? l.source : void 0,
                m = this.layout ? this.layout.source : void 0,
                p = d !== m,
                v = this.getStack(),
                y = !v || v.members.length <= 1,
                b = !!(p && !y && this.options.crossfade === !0 && !this.path.some(zl));
            this.animationProgress = 0;
            let P;
            this.mixTargetDelta = C => {
                const T = C / 1e3;
                ds(h.x, o.x, T), ds(h.y, o.y, T), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Pt(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), _l(this.relativeTarget, this.relativeTargetOrigin, f, T), P && Ml(this.relativeTarget, P) && (this.isProjectionDirty = !1), P || (P = L()), K(P, this.relativeTarget)), p && (this.animationValues = c, bl(c, u, this.latestValues, T, b, y)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = T
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(o) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Z(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = D.update(() => {
                Ut.hasAnimatedSinceResize = !0, this.currentAnimation = yl(0, us, A(g({}, o), {
                    onUpdate: a => {
                        this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a)
                    },
                    onStop: () => {},
                    onComplete: () => {
                        o.onComplete && o.onComplete(), this.completeAnimation()
                    }
                })), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const o = this.getStack();
            o && o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(us), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {
                targetWithTransforms: a,
                target: l,
                layout: u,
                latestValues: c
            } = o;
            if (!(!a || !l || !u)) {
                if (this !== o && this.layout && u && $i(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || L();
                    const h = O(this.layout.layoutBox.x);
                    l.x.min = o.target.x.min, l.x.max = l.x.min + h;
                    const f = O(this.layout.layoutBox.y);
                    l.y.min = o.target.y.min, l.y.max = l.y.min + f
                }
                K(a, l), ht(a, c), Tt(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
            }
        }
        registerSharedNode(o, a) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new Rl), this.sharedNodes.get(o).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0
        }
        getLead() {
            var a;
            const {
                layoutId: o
            } = this.options;
            return o ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this
        }
        getPrevLead() {
            var a;
            const {
                layoutId: o
            } = this.options;
            return o ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: o
            } = this.options;
            if (o) return this.root.sharedNodes.get(o)
        }
        promote({
            needsReset: o,
            transition: a,
            preserveFollowOpacity: l
        } = {}) {
            const u = this.getStack();
            u && u.promote(this, l), o && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: o
            } = this.options;
            if (!o) return;
            let a = !1;
            const {
                latestValues: l
            } = o;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a) return;
            const u = {};
            l.z && le("z", o, u, this.animationValues);
            for (let c = 0; c < ae.length; c++) le(`rotate${ae[c]}`, o, u, this.animationValues), le(`skew${ae[c]}`, o, u, this.animationValues);
            o.render();
            for (const c in u) o.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
            o.scheduleRender()
        }
        getProjectionStyles(o) {
            var d, m;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return Ll;
            const a = {
                    visibility: ""
                },
                l = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, a.opacity = "", a.pointerEvents = Nt(o == null ? void 0 : o.pointerEvents) || "", a.transform = l ? l(this.latestValues, "") : "none", a;
            const u = this.getLead();
            if (!this.projectionDelta || !this.layout || !u.target) {
                const p = {};
                return this.options.layoutId && (p.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, p.pointerEvents = Nt(o == null ? void 0 : o.pointerEvents) || ""), this.hasProjected && !et(this.latestValues) && (p.transform = l ? l({}, "") : "none", this.hasProjected = !1), p
            }
            const c = u.animationValues || u.latestValues;
            this.applyTransformsToTarget(), a.transform = El(this.projectionDeltaWithTransform, this.treeScale, c), l && (a.transform = l(c, a.transform));
            const {
                x: h,
                y: f
            } = this.projectionDelta;
            a.transformOrigin = `${h.origin*100}% ${f.origin*100}% 0`, u.animationValues ? a.opacity = u === this ? (m = (d = c.opacity) != null ? d : this.latestValues.opacity) != null ? m : 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : a.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
            for (const p in wt) {
                if (c[p] === void 0) continue;
                const {
                    correct: v,
                    applyTo: y,
                    isCSSVariable: b
                } = wt[p], P = a.transform === "none" ? c[p] : v(c[p], u);
                if (y) {
                    const C = y.length;
                    for (let T = 0; T < C; T++) a[y[T]] = P
                } else b ? this.options.visualElement.renderState.vars[p] = P : a[p] = P
            }
            return this.options.layoutId && (a.pointerEvents = u === this ? Nt(o == null ? void 0 : o.pointerEvents) || "" : "none"), a
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(o => {
                var a;
                return (a = o.currentAnimation) == null ? void 0 : a.stop()
            }), this.root.nodes.forEach(hs), this.root.sharedNodes.clear()
        }
    }
}

function kl(t) {
    t.updateLayout()
}

function Fl(t) {
    var n;
    const e = ((n = t.resumeFrom) == null ? void 0 : n.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
        const {
            layoutBox: s,
            measuredBox: i
        } = t.layout, {
            animationType: r
        } = t.options, o = e.source !== t.layout.source;
        r === "size" ? W(h => {
            const f = o ? e.measuredBox[h] : e.layoutBox[h],
                d = O(f);
            f.min = s[h].min, f.max = f.min + d
        }) : $i(r, e.layoutBox, s) && W(h => {
            const f = o ? e.measuredBox[h] : e.layoutBox[h],
                d = O(s[h]);
            f.max = f.min + d, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[h].max = t.relativeTarget[h].min + d)
        });
        const a = ct();
        Tt(a, s, e.layoutBox);
        const l = ct();
        o ? Tt(l, t.applyTransform(i, !0), e.measuredBox) : Tt(l, s, e.layoutBox);
        const u = !Ni(a);
        let c = !1;
        if (!t.resumeFrom) {
            const h = t.getClosestProjectingParent();
            if (h && !h.resumeFrom) {
                const {
                    snapshot: f,
                    layout: d
                } = h;
                if (f && d) {
                    const m = L();
                    Pt(m, e.layoutBox, f.layoutBox);
                    const p = L();
                    Pt(p, s, d.layoutBox), Ui(m, p) || (c = !0), h.options.layoutRoot && (t.relativeTarget = p, t.relativeTargetOrigin = m, t.relativeParent = h)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: s,
            snapshot: e,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeLayoutChanged: c
        })
    } else if (t.isLead()) {
        const {
            onExitComplete: s
        } = t.options;
        s && s()
    }
    t.options.transition = void 0
}

function jl(t) {
    t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}

function Il(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}

function Ol(t) {
    t.clearSnapshot()
}

function hs(t) {
    t.clearMeasurements()
}

function Nl(t) {
    t.isLayoutDirty = !1
}

function Ul(t) {
    const {
        visualElement: e
    } = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
}

function fs(t) {
    t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
}

function Kl(t) {
    t.resolveTargetDelta()
}

function Wl(t) {
    t.calcProjection()
}

function $l(t) {
    t.resetSkewAndRotation()
}

function Gl(t) {
    t.removeLeadSnapshot()
}

function ds(t, e, n) {
    t.translate = R(e.translate, 0, n), t.scale = R(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
}

function ms(t, e, n, s) {
    t.min = R(e.min, n.min, s), t.max = R(e.max, n.max, s)
}

function _l(t, e, n, s) {
    ms(t.x, e.x, n.x, s), ms(t.y, e.y, n.y, s)
}

function zl(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}
const Hl = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    ps = t => typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
    gs = ps("applewebkit/") && !ps("chrome/") ? Math.round : $;

function ys(t) {
    t.min = gs(t.min), t.max = gs(t.max)
}

function Xl(t) {
    ys(t.x), ys(t.y)
}

function $i(t, e, n) {
    return t === "position" || t === "preserve-aspect" && !qa(ls(e), ls(n), .2)
}

function Yl(t) {
    var e;
    return t !== t.root && ((e = t.scroll) == null ? void 0 : e.wasRoot)
}
const ql = Wi({
        attachResizeListener: (t, e) => Mt(t, "resize", e),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    ce = {
        current: void 0
    },
    Gi = Wi({
        measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
        }),
        defaultParent: () => {
            if (!ce.current) {
                const t = new ql({});
                t.mount(window), t.setOptions({
                    layoutScroll: !0
                }), ce.current = t
            }
            return ce.current
        },
        resetTransform: (t, e) => {
            t.style.transform = e !== void 0 ? e : "none"
        },
        checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
    }),
    Zl = {
        pan: {
            Feature: dl
        },
        drag: {
            Feature: fl,
            ProjectionNode: Gi,
            MeasureLayout: ji
        }
    };

function vs(t, e, n) {
    const {
        props: s
    } = t;
    t.animationState && s.whileHover && t.animationState.setActive("whileHover", n === "Start");
    const i = "onHover" + n,
        r = s[i];
    r && D.postRender(() => r(e, kt(e)))
}
class Jl extends Q {
    mount() {
        const {
            current: e
        } = this.node;
        e && (this.unmount = ao(e, (n, s) => (vs(this.node, s, "Start"), i => vs(this.node, i, "End"))))
    }
    unmount() {}
}
class Ql extends Q {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let e = !1;
        try {
            e = this.node.current.matches(":focus-visible")
        } catch (n) {
            e = !0
        }!e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = Bt(Mt(this.node.current, "focus", () => this.onFocus()), Mt(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}

function xs(t, e, n) {
    const {
        props: s
    } = t;
    if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
    t.animationState && s.whileTap && t.animationState.setActive("whileTap", n === "Start");
    const i = "onTap" + (n === "End" ? "" : n),
        r = s[i];
    r && D.postRender(() => r(e, kt(e)))
}
class tc extends Q {
    mount() {
        const {
            current: e
        } = this.node;
        e && (this.unmount = lo(e, (n, s) => (xs(this.node, s, "Start"), (i, {
            success: r
        }) => xs(this.node, i, r ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const Ae = new WeakMap,
    ue = new WeakMap,
    ec = t => {
        const e = Ae.get(t.target);
        e && e(t)
    },
    nc = t => {
        t.forEach(ec)
    };

function sc(n) {
    var s = n,
        {
            root: t
        } = s,
        e = U(s, ["root"]);
    const i = t || document;
    ue.has(i) || ue.set(i, {});
    const r = ue.get(i),
        o = JSON.stringify(e);
    return r[o] || (r[o] = new IntersectionObserver(nc, g({
        root: t
    }, e))), r[o]
}

function ic(t, e, n) {
    const s = sc(e);
    return Ae.set(t, n), s.observe(t), () => {
        Ae.delete(t), s.unobserve(t)
    }
}
const oc = {
    some: 0,
    all: 1
};
class rc extends Q {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: e = {}
        } = this.node.getProps(), {
            root: n,
            margin: s,
            amount: i = "some",
            once: r
        } = e, o = {
            root: n ? n.current : void 0,
            rootMargin: s,
            threshold: typeof i == "number" ? i : oc[i]
        }, a = l => {
            const {
                isIntersecting: u
            } = l;
            if (this.isInView === u || (this.isInView = u, r && !u && this.hasEnteredView)) return;
            u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {
                onViewportEnter: c,
                onViewportLeave: h
            } = this.node.getProps(), f = u ? c : h;
            f && f(l)
        };
        return ic(this.node.current, o, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver == "undefined") return;
        const {
            props: e,
            prevProps: n
        } = this.node;
        ["amount", "margin", "root"].some(ac(e, n)) && this.startObserver()
    }
    unmount() {}
}

function ac({
    viewport: t = {}
}, {
    viewport: e = {}
} = {}) {
    return n => t[n] !== e[n]
}
const lc = {
        inView: {
            Feature: rc
        },
        tap: {
            Feature: tc
        },
        focus: {
            Feature: Ql
        },
        hover: {
            Feature: Jl
        }
    },
    cc = {
        layout: {
            ProjectionNode: Gi,
            MeasureLayout: ji
        }
    },
    Ce = {
        current: null
    },
    _i = {
        current: !1
    };

function uc() {
    if (_i.current = !0, !!Be)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)"),
                e = () => Ce.current = t.matches;
            t.addListener(e), e()
        } else Ce.current = !1
}
const hc = [...gi, k, J],
    fc = t => hc.find(pi(t)),
    dc = new WeakMap;

function mc(t, e, n) {
    for (const s in e) {
        const i = e[s],
            r = n[s];
        if (F(i)) t.addValue(s, i);
        else if (F(r)) t.addValue(s, St(i, {
            owner: t
        }));
        else if (r !== i)
            if (t.hasValue(s)) {
                const o = t.getValue(s);
                o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i)
            } else {
                const o = t.getStaticValue(s);
                t.addValue(s, St(o !== void 0 ? o : i, {
                    owner: t
                }))
            }
    }
    for (const s in n) e[s] === void 0 && t.removeValue(s);
    return e
}
const Ts = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class pc {
    scrapeMotionValuesFromProps(e, n, s) {
        return {}
    }
    constructor({
        parent: e,
        props: n,
        presenceContext: s,
        reducedMotionConfig: i,
        blockInitialAnimation: r,
        visualState: o
    }, a = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = Je, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const m = ft.now();
            this.renderScheduledAt < m && (this.renderScheduledAt = m, D.render(this.render, !1, !0))
        };
        const {
            latestValues: l,
            renderState: u,
            onUpdate: c
        } = o;
        this.onUpdate = c, this.latestValues = l, this.baseTarget = g({}, l), this.initialValues = n.initial ? g({}, l) : {}, this.renderState = u, this.parent = e, this.props = n, this.presenceContext = s, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!r, this.isControllingVariants = Yt(n), this.isVariantNode = Ls(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);
        const d = this.scrapeMotionValuesFromProps(n, {}, this),
            {
                willChange: h
            } = d,
            f = U(d, ["willChange"]);
        for (const m in f) {
            const p = f[m];
            l[m] !== void 0 && F(p) && p.set(l[m], !1)
        }
    }
    mount(e) {
        this.current = e, dc.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, s) => this.bindToMotionValue(s, n)), _i.current || uc(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ce.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        this.projection && this.projection.unmount(), Z(this.notifyUpdate), Z(this.render), this.valueSubscriptions.forEach(e => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const e in this.events) this.events[e].clear();
        for (const e in this.features) {
            const n = this.features[e];
            n && (n.unmount(), n.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(e, n) {
        this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
        const s = ot.has(e);
        s && this.onBindTransform && this.onBindTransform();
        const i = n.on("change", a => {
                this.latestValues[e] = a, this.props.onUpdate && D.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = !0)
            }),
            r = n.on("renderRequest", this.scheduleRender);
        let o;
        window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, () => {
            i(), r(), o && o(), n.owner && n.stop()
        })
    }
    sortNodePosition(e) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
    }
    updateFeatures() {
        let e = "animation";
        for (e in dt) {
            const n = dt[e];
            if (!n) continue;
            const {
                isEnabled: s,
                Feature: i
            } = n;
            if (!this.features[e] && i && s(this.props) && (this.features[e] = new i(this)), this.features[e]) {
                const r = this.features[e];
                r.isMounted ? r.update() : (r.mount(), r.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : L()
    }
    getStaticValue(e) {
        return this.latestValues[e]
    }
    setStaticValue(e, n) {
        this.latestValues[e] = n
    }
    update(e, n) {
        (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
        for (let s = 0; s < Ts.length; s++) {
            const i = Ts[s];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
            const r = "on" + i,
                o = e[r];
            o && (this.propEventSubscriptions[i] = this.on(i, o))
        }
        this.prevMotionValues = mc(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this)
    }
    getProps() {
        return this.props
    }
    getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(e) {
        const n = this.getClosestVariantNode();
        if (n) return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e)
    }
    addValue(e, n) {
        const s = this.values.get(e);
        n !== s && (s && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get())
    }
    removeValue(e) {
        this.values.delete(e);
        const n = this.valueSubscriptions.get(e);
        n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
        return this.values.has(e)
    }
    getValue(e, n) {
        if (this.props.values && this.props.values[e]) return this.props.values[e];
        let s = this.values.get(e);
        return s === void 0 && n !== void 0 && (s = St(n === null ? void 0 : n, {
            owner: this
        }), this.addValue(e, s)), s
    }
    readValue(e, n) {
        var i;
        let s = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (i = this.getBaseTargetFromProps(this.props, e)) != null ? i : this.readValueFromInstance(this.current, e, this.options);
        return s != null && (typeof s == "string" && (di(s) || si(s)) ? s = parseFloat(s) : !fc(s) && J.test(n) && (s = ui(e, n)), this.setBaseTarget(e, F(s) ? s.get() : s)), F(s) ? s.get() : s
    }
    setBaseTarget(e, n) {
        this.baseTarget[e] = n
    }
    getBaseTarget(e) {
        var r;
        const {
            initial: n
        } = this.props;
        let s;
        if (typeof n == "string" || typeof n == "object") {
            const o = ze(this.props, n, (r = this.presenceContext) == null ? void 0 : r.custom);
            o && (s = o[e])
        }
        if (n && s !== void 0) return s;
        const i = this.getBaseTargetFromProps(this.props, e);
        return i !== void 0 && !F(i) ? i : this.initialValues[e] !== void 0 && s === void 0 ? void 0 : this.baseTarget[e]
    }
    on(e, n) {
        return this.events[e] || (this.events[e] = new Cs), this.events[e].add(n)
    }
    notify(e, ...n) {
        this.events[e] && this.events[e].notify(...n)
    }
}
class zi extends pc {
    constructor() {
        super(...arguments), this.KeyframeResolver = yi
    }
    sortInstanceNodePosition(e, n) {
        return e.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(e, n) {
        return e.style ? e.style[n] : void 0
    }
    removeValueFromRenderState(e, {
        vars: n,
        style: s
    }) {
        delete n[e], delete s[e]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: e
        } = this.props;
        F(e) && (this.childSubscription = e.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }))
    }
}

function gc(t) {
    return window.getComputedStyle(t)
}
class yc extends zi {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = $s
    }
    readValueFromInstance(e, n) {
        if (ot.has(n)) return Mr(e, n); {
            const s = gc(e),
                i = (Oe(n) ? s.getPropertyValue(n) : s[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(e, {
        transformPagePoint: n
    }) {
        return Li(e, n)
    }
    build(e, n, s) {
        Ke(e, n, s.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, n, s) {
        return He(e, n, s)
    }
}
class vc extends zi {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = L, this.updateDimensions = () => {
            this.current && !this.renderState.dimensions && Ws(this.current, this.renderState)
        }
    }
    getBaseTargetFromProps(e, n) {
        return e[n]
    }
    readValueFromInstance(e, n) {
        if (ot.has(n)) {
            const s = ci(n);
            return s && s.default || 0
        }
        return n = Gs.has(n) ? n : Ie(n), e.getAttribute(n)
    }
    scrapeMotionValuesFromProps(e, n, s) {
        return zs(e, n, s)
    }
    onBindTransform() {
        this.current && !this.renderState.dimensions && D.postRender(this.updateDimensions)
    }
    build(e, n, s) {
        Ge(e, n, this.isSVGTag, s.transformTemplate)
    }
    renderInstance(e, n, s, i) {
        _s(e, n, s, i)
    }
    mount(e) {
        this.isSVGTag = _e(e.tagName), super.mount(e)
    }
}
const xc = (t, e) => $e(t) ? new vc(e) : new yc(e, {
        allowProjection: t !== x.Fragment
    }),
    Tc = nr(g(g(g(g({}, Wa), lc), Zl), cc), xc),
    Cc = vo(Tc);

function Dc() {
    const t = x.useContext(Rt);
    return t ? t.custom : void 0
}
export {
    wc as A, Cc as m, Dc as u
};
//# sourceMappingURL=framer-wRdAwo6I.js.map