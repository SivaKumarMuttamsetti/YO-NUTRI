var ae = Object.defineProperty;
var K = Object.getOwnPropertySymbols;
var ce = Object.prototype.hasOwnProperty,
    de = Object.prototype.propertyIsEnumerable;
var Q = (e, r, t) => r in e ? ae(e, r, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[r] = t,
    Y = (e, r) => {
        for (var t in r || (r = {})) ce.call(r, t) && Q(e, t, r[t]);
        if (K)
            for (var t of K(r)) de.call(r, t) && Q(e, t, r[t]);
        return e
    };
import {
    g as pe
} from "./index-BpOda8Pq.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {},
            r = new e.Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "17e9c05e-759d-443b-8278-3094c67c525b", e._sentryDebugIdIdentifier = "sentry-dbid-17e9c05e-759d-443b-8278-3094c67c525b")
    } catch (t) {}
})();
var re = {
    exports: {}
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
    (function() {
        var r = {}.hasOwnProperty;

        function t() {
            for (var o = "", i = 0; i < arguments.length; i++) {
                var s = arguments[i];
                s && (o = a(o, n(s)))
            }
            return o
        }

        function n(o) {
            if (typeof o == "string" || typeof o == "number") return o;
            if (typeof o != "object") return "";
            if (Array.isArray(o)) return t.apply(null, o);
            if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) return o.toString();
            var i = "";
            for (var s in o) r.call(o, s) && o[s] && (i = a(i, s));
            return i
        }

        function a(o, i) {
            return i ? o ? o + " " + i : o + i : o
        }
        e.exports ? (t.default = t, e.exports = t) : window.classNames = t
    })()
})(re);
var ue = re.exports;
const Je = pe(ue),
    B = "-",
    be = e => {
        const r = fe(e),
            {
                conflictingClassGroups: t,
                conflictingClassGroupModifiers: n
            } = e;
        return {
            getClassGroupId: i => {
                const s = i.split(B);
                return s[0] === "" && s.length !== 1 && s.shift(), te(s, r) || ge(i)
            },
            getConflictingClassGroupIds: (i, s) => {
                const u = t[i] || [];
                return s && n[i] ? [...u, ...n[i]] : u
            }
        }
    },
    te = (e, r) => {
        var i;
        if (e.length === 0) return r.classGroupId;
        const t = e[0],
            n = r.nextPart.get(t),
            a = n ? te(e.slice(1), n) : void 0;
        if (a) return a;
        if (r.validators.length === 0) return;
        const o = e.join(B);
        return (i = r.validators.find(({
            validator: s
        }) => s(o))) == null ? void 0 : i.classGroupId
    },
    D = /^\[(.+)\]$/,
    ge = e => {
        if (D.test(e)) {
            const r = D.exec(e)[1],
                t = r == null ? void 0 : r.substring(0, r.indexOf(":"));
            if (t) return "arbitrary.." + t
        }
    },
    fe = e => {
        const {
            theme: r,
            prefix: t
        } = e, n = {
            nextPart: new Map,
            validators: []
        };
        return he(Object.entries(e.classGroups), t).forEach(([o, i]) => {
            $(i, n, o, r)
        }), n
    },
    $ = (e, r, t, n) => {
        e.forEach(a => {
            if (typeof a == "string") {
                const o = a === "" ? r : ee(r, a);
                o.classGroupId = t;
                return
            }
            if (typeof a == "function") {
                if (me(a)) {
                    $(a(n), r, t, n);
                    return
                }
                r.validators.push({
                    validator: a,
                    classGroupId: t
                });
                return
            }
            Object.entries(a).forEach(([o, i]) => {
                $(i, ee(r, o), t, n)
            })
        })
    },
    ee = (e, r) => {
        let t = e;
        return r.split(B).forEach(n => {
            t.nextPart.has(n) || t.nextPart.set(n, {
                nextPart: new Map,
                validators: []
            }), t = t.nextPart.get(n)
        }), t
    },
    me = e => e.isThemeGetter,
    he = (e, r) => r ? e.map(([t, n]) => {
        const a = n.map(o => typeof o == "string" ? r + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([i, s]) => [r + i, s])) : o);
        return [t, a]
    }) : e,
    ye = e => {
        if (e < 1) return {
            get: () => {},
            set: () => {}
        };
        let r = 0,
            t = new Map,
            n = new Map;
        const a = (o, i) => {
            t.set(o, i), r++, r > e && (r = 0, n = t, t = new Map)
        };
        return {
            get(o) {
                let i = t.get(o);
                if (i !== void 0) return i;
                if ((i = n.get(o)) !== void 0) return a(o, i), i
            },
            set(o, i) {
                t.has(o) ? t.set(o, i) : a(o, i)
            }
        }
    },
    oe = "!",
    xe = e => {
        const {
            separator: r,
            experimentalParseClassName: t
        } = e, n = r.length === 1, a = r[0], o = r.length, i = s => {
            const u = [];
            let g = 0,
                m = 0,
                y;
            for (let p = 0; p < s.length; p++) {
                let f = s[p];
                if (g === 0) {
                    if (f === a && (n || s.slice(p, p + o) === r)) {
                        u.push(s.slice(m, p)), m = p + o;
                        continue
                    }
                    if (f === "/") {
                        y = p;
                        continue
                    }
                }
                f === "[" ? g++ : f === "]" && g--
            }
            const x = u.length === 0 ? s : s.substring(m),
                v = x.startsWith(oe),
                w = v ? x.substring(1) : x,
                b = y && y > m ? y - m : void 0;
            return {
                modifiers: u,
                hasImportantModifier: v,
                baseClassName: w,
                maybePostfixModifierPosition: b
            }
        };
        return t ? s => t({
            className: s,
            parseClassName: i
        }) : i
    },
    we = e => {
        if (e.length <= 1) return e;
        const r = [];
        let t = [];
        return e.forEach(n => {
            n[0] === "[" ? (r.push(...t.sort(), n), t = []) : t.push(n)
        }), r.push(...t.sort()), r
    },
    ve = e => Y({
        cache: ye(e.cacheSize),
        parseClassName: xe(e)
    }, be(e)),
    ke = /\s+/,
    Ce = (e, r) => {
        const {
            parseClassName: t,
            getClassGroupId: n,
            getConflictingClassGroupIds: a
        } = r, o = [], i = e.trim().split(ke);
        let s = "";
        for (let u = i.length - 1; u >= 0; u -= 1) {
            const g = i[u],
                {
                    modifiers: m,
                    hasImportantModifier: y,
                    baseClassName: x,
                    maybePostfixModifierPosition: v
                } = t(g);
            let w = !!v,
                b = n(w ? x.substring(0, v) : x);
            if (!b) {
                if (!w) {
                    s = g + (s.length > 0 ? " " + s : s);
                    continue
                }
                if (b = n(x), !b) {
                    s = g + (s.length > 0 ? " " + s : s);
                    continue
                }
                w = !1
            }
            const p = we(m).join(":"),
                f = y ? p + oe : p,
                h = f + b;
            if (o.includes(h)) continue;
            o.push(h);
            const I = a(b, w);
            for (let A = 0; A < I.length; ++A) {
                const E = I[A];
                o.push(f + E)
            }
            s = g + (s.length > 0 ? " " + s : s)
        }
        return s
    };

function ze() {
    let e = 0,
        r, t, n = "";
    for (; e < arguments.length;)(r = arguments[e++]) && (t = ne(r)) && (n && (n += " "), n += t);
    return n
}
const ne = e => {
    if (typeof e == "string") return e;
    let r, t = "";
    for (let n = 0; n < e.length; n++) e[n] && (r = ne(e[n])) && (t && (t += " "), t += r);
    return t
};

function Se(e, ...r) {
    let t, n, a, o = i;

    function i(u) {
        const g = r.reduce((m, y) => y(m), e());
        return t = ve(g), n = t.cache.get, a = t.cache.set, o = s, s(u)
    }

    function s(u) {
        const g = n(u);
        if (g) return g;
        const m = Ce(u, t);
        return a(u, m), m
    }
    return function() {
        return o(ze.apply(null, arguments))
    }
}
const c = e => {
        const r = t => t[e] || [];
        return r.isThemeGetter = !0, r
    },
    se = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    Ae = /^\d+\/\d+$/,
    Me = new Set(["px", "full", "screen"]),
    Ge = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    Ie = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    Re = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    Pe = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    je = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    C = e => M(e) || Me.has(e) || Ae.test(e),
    z = e => G(e, "length", Ve),
    M = e => !!e && !Number.isNaN(Number(e)),
    V = e => G(e, "number", M),
    P = e => !!e && Number.isInteger(Number(e)),
    Ee = e => e.endsWith("%") && M(e.slice(0, -1)),
    l = e => se.test(e),
    S = e => Ge.test(e),
    Ne = new Set(["length", "size", "percentage"]),
    Te = e => G(e, Ne, ie),
    Le = e => G(e, "position", ie),
    _e = new Set(["image", "url"]),
    Oe = e => G(e, _e, Be),
    We = e => G(e, "", $e),
    j = () => !0,
    G = (e, r, t) => {
        const n = se.exec(e);
        return n ? n[1] ? typeof r == "string" ? n[1] === r : r.has(n[1]) : t(n[2]) : !1
    },
    Ve = e => Ie.test(e) && !Re.test(e),
    ie = () => !1,
    $e = e => Pe.test(e),
    Be = e => je.test(e),
    Fe = () => {
        const e = c("colors"),
            r = c("spacing"),
            t = c("blur"),
            n = c("brightness"),
            a = c("borderColor"),
            o = c("borderRadius"),
            i = c("borderSpacing"),
            s = c("borderWidth"),
            u = c("contrast"),
            g = c("grayscale"),
            m = c("hueRotate"),
            y = c("invert"),
            x = c("gap"),
            v = c("gradientColorStops"),
            w = c("gradientColorStopPositions"),
            b = c("inset"),
            p = c("margin"),
            f = c("opacity"),
            h = c("padding"),
            I = c("saturate"),
            A = c("scale"),
            E = c("sepia"),
            F = c("skew"),
            U = c("space"),
            q = c("translate"),
            L = () => ["auto", "contain", "none"],
            _ = () => ["auto", "hidden", "clip", "visible", "scroll"],
            O = () => ["auto", l, r],
            d = () => [l, r],
            J = () => ["", C, z],
            N = () => ["auto", M, l],
            X = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
            T = () => ["solid", "dashed", "dotted", "double", "none"],
            Z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            W = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            R = () => ["", "0", l],
            H = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            k = () => [M, l];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [j],
                spacing: [C, z],
                blur: ["none", "", S, l],
                brightness: k(),
                borderColor: [e],
                borderRadius: ["none", "", "full", S, l],
                borderSpacing: d(),
                borderWidth: J(),
                contrast: k(),
                grayscale: R(),
                hueRotate: k(),
                invert: R(),
                gap: d(),
                gradientColorStops: [e],
                gradientColorStopPositions: [Ee, z],
                inset: O(),
                margin: O(),
                opacity: k(),
                padding: d(),
                saturate: k(),
                scale: k(),
                sepia: R(),
                skew: k(),
                space: d(),
                translate: d()
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", "video", l]
                }],
                container: ["container"],
                columns: [{
                    columns: [S]
                }],
                "break-after": [{
                    "break-after": H()
                }],
                "break-before": [{
                    "break-before": H()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: [...X(), l]
                }],
                overflow: [{
                    overflow: _()
                }],
                "overflow-x": [{
                    "overflow-x": _()
                }],
                "overflow-y": [{
                    "overflow-y": _()
                }],
                overscroll: [{
                    overscroll: L()
                }],
                "overscroll-x": [{
                    "overscroll-x": L()
                }],
                "overscroll-y": [{
                    "overscroll-y": L()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: [b]
                }],
                "inset-x": [{
                    "inset-x": [b]
                }],
                "inset-y": [{
                    "inset-y": [b]
                }],
                start: [{
                    start: [b]
                }],
                end: [{
                    end: [b]
                }],
                top: [{
                    top: [b]
                }],
                right: [{
                    right: [b]
                }],
                bottom: [{
                    bottom: [b]
                }],
                left: [{
                    left: [b]
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: ["auto", P, l]
                }],
                basis: [{
                    basis: O()
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["wrap", "wrap-reverse", "nowrap"]
                }],
                flex: [{
                    flex: ["1", "auto", "initial", "none", l]
                }],
                grow: [{
                    grow: R()
                }],
                shrink: [{
                    shrink: R()
                }],
                order: [{
                    order: ["first", "last", "none", P, l]
                }],
                "grid-cols": [{
                    "grid-cols": [j]
                }],
                "col-start-end": [{
                    col: ["auto", {
                        span: ["full", P, l]
                    }, l]
                }],
                "col-start": [{
                    "col-start": N()
                }],
                "col-end": [{
                    "col-end": N()
                }],
                "grid-rows": [{
                    "grid-rows": [j]
                }],
                "row-start-end": [{
                    row: ["auto", {
                        span: [P, l]
                    }, l]
                }],
                "row-start": [{
                    "row-start": N()
                }],
                "row-end": [{
                    "row-end": N()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": ["auto", "min", "max", "fr", l]
                }],
                "auto-rows": [{
                    "auto-rows": ["auto", "min", "max", "fr", l]
                }],
                gap: [{
                    gap: [x]
                }],
                "gap-x": [{
                    "gap-x": [x]
                }],
                "gap-y": [{
                    "gap-y": [x]
                }],
                "justify-content": [{
                    justify: ["normal", ...W()]
                }],
                "justify-items": [{
                    "justify-items": ["start", "end", "center", "stretch"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", "start", "end", "center", "stretch"]
                }],
                "align-content": [{
                    content: ["normal", ...W(), "baseline"]
                }],
                "align-items": [{
                    items: ["start", "end", "center", "baseline", "stretch"]
                }],
                "align-self": [{
                    self: ["auto", "start", "end", "center", "stretch", "baseline"]
                }],
                "place-content": [{
                    "place-content": [...W(), "baseline"]
                }],
                "place-items": [{
                    "place-items": ["start", "end", "center", "baseline", "stretch"]
                }],
                "place-self": [{
                    "place-self": ["auto", "start", "end", "center", "stretch"]
                }],
                p: [{
                    p: [h]
                }],
                px: [{
                    px: [h]
                }],
                py: [{
                    py: [h]
                }],
                ps: [{
                    ps: [h]
                }],
                pe: [{
                    pe: [h]
                }],
                pt: [{
                    pt: [h]
                }],
                pr: [{
                    pr: [h]
                }],
                pb: [{
                    pb: [h]
                }],
                pl: [{
                    pl: [h]
                }],
                m: [{
                    m: [p]
                }],
                mx: [{
                    mx: [p]
                }],
                my: [{
                    my: [p]
                }],
                ms: [{
                    ms: [p]
                }],
                me: [{
                    me: [p]
                }],
                mt: [{
                    mt: [p]
                }],
                mr: [{
                    mr: [p]
                }],
                mb: [{
                    mb: [p]
                }],
                ml: [{
                    ml: [p]
                }],
                "space-x": [{
                    "space-x": [U]
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": [U]
                }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{
                    w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", l, r]
                }],
                "min-w": [{
                    "min-w": [l, r, "min", "max", "fit"]
                }],
                "max-w": [{
                    "max-w": [l, r, "none", "full", "min", "max", "fit", "prose", {
                        screen: [S]
                    }, S]
                }],
                h: [{
                    h: [l, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "min-h": [{
                    "min-h": [l, r, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "max-h": [{
                    "max-h": [l, r, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                size: [{
                    size: [l, r, "auto", "min", "max", "fit"]
                }],
                "font-size": [{
                    text: ["base", S, z]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", V]
                }],
                "font-family": [{
                    font: [j]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", l]
                }],
                "line-clamp": [{
                    "line-clamp": ["none", M, V]
                }],
                leading: [{
                    leading: ["none", "tight", "snug", "normal", "relaxed", "loose", C, l]
                }],
                "list-image": [{
                    "list-image": ["none", l]
                }],
                "list-style-type": [{
                    list: ["none", "disc", "decimal", l]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "placeholder-color": [{
                    placeholder: [e]
                }],
                "placeholder-opacity": [{
                    "placeholder-opacity": [f]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "text-color": [{
                    text: [e]
                }],
                "text-opacity": [{
                    "text-opacity": [f]
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...T(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: ["auto", "from-font", C, z]
                }],
                "underline-offset": [{
                    "underline-offset": ["auto", C, l]
                }],
                "text-decoration-color": [{
                    decoration: [e]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: d()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", l]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", l]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-opacity": [{
                    "bg-opacity": [f]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: [...X(), Le]
                }],
                "bg-repeat": [{
                    bg: ["no-repeat", {
                        repeat: ["", "x", "y", "round", "space"]
                    }]
                }],
                "bg-size": [{
                    bg: ["auto", "cover", "contain", Te]
                }],
                "bg-image": [{
                    bg: ["none", {
                        "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, Oe]
                }],
                "bg-color": [{
                    bg: [e]
                }],
                "gradient-from-pos": [{
                    from: [w]
                }],
                "gradient-via-pos": [{
                    via: [w]
                }],
                "gradient-to-pos": [{
                    to: [w]
                }],
                "gradient-from": [{
                    from: [v]
                }],
                "gradient-via": [{
                    via: [v]
                }],
                "gradient-to": [{
                    to: [v]
                }],
                rounded: [{
                    rounded: [o]
                }],
                "rounded-s": [{
                    "rounded-s": [o]
                }],
                "rounded-e": [{
                    "rounded-e": [o]
                }],
                "rounded-t": [{
                    "rounded-t": [o]
                }],
                "rounded-r": [{
                    "rounded-r": [o]
                }],
                "rounded-b": [{
                    "rounded-b": [o]
                }],
                "rounded-l": [{
                    "rounded-l": [o]
                }],
                "rounded-ss": [{
                    "rounded-ss": [o]
                }],
                "rounded-se": [{
                    "rounded-se": [o]
                }],
                "rounded-ee": [{
                    "rounded-ee": [o]
                }],
                "rounded-es": [{
                    "rounded-es": [o]
                }],
                "rounded-tl": [{
                    "rounded-tl": [o]
                }],
                "rounded-tr": [{
                    "rounded-tr": [o]
                }],
                "rounded-br": [{
                    "rounded-br": [o]
                }],
                "rounded-bl": [{
                    "rounded-bl": [o]
                }],
                "border-w": [{
                    border: [s]
                }],
                "border-w-x": [{
                    "border-x": [s]
                }],
                "border-w-y": [{
                    "border-y": [s]
                }],
                "border-w-s": [{
                    "border-s": [s]
                }],
                "border-w-e": [{
                    "border-e": [s]
                }],
                "border-w-t": [{
                    "border-t": [s]
                }],
                "border-w-r": [{
                    "border-r": [s]
                }],
                "border-w-b": [{
                    "border-b": [s]
                }],
                "border-w-l": [{
                    "border-l": [s]
                }],
                "border-opacity": [{
                    "border-opacity": [f]
                }],
                "border-style": [{
                    border: [...T(), "hidden"]
                }],
                "divide-x": [{
                    "divide-x": [s]
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": [s]
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{
                    "divide-opacity": [f]
                }],
                "divide-style": [{
                    divide: T()
                }],
                "border-color": [{
                    border: [a]
                }],
                "border-color-x": [{
                    "border-x": [a]
                }],
                "border-color-y": [{
                    "border-y": [a]
                }],
                "border-color-s": [{
                    "border-s": [a]
                }],
                "border-color-e": [{
                    "border-e": [a]
                }],
                "border-color-t": [{
                    "border-t": [a]
                }],
                "border-color-r": [{
                    "border-r": [a]
                }],
                "border-color-b": [{
                    "border-b": [a]
                }],
                "border-color-l": [{
                    "border-l": [a]
                }],
                "divide-color": [{
                    divide: [a]
                }],
                "outline-style": [{
                    outline: ["", ...T()]
                }],
                "outline-offset": [{
                    "outline-offset": [C, l]
                }],
                "outline-w": [{
                    outline: [C, z]
                }],
                "outline-color": [{
                    outline: [e]
                }],
                "ring-w": [{
                    ring: J()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: [e]
                }],
                "ring-opacity": [{
                    "ring-opacity": [f]
                }],
                "ring-offset-w": [{
                    "ring-offset": [C, z]
                }],
                "ring-offset-color": [{
                    "ring-offset": [e]
                }],
                shadow: [{
                    shadow: ["", "inner", "none", S, We]
                }],
                "shadow-color": [{
                    shadow: [j]
                }],
                opacity: [{
                    opacity: [f]
                }],
                "mix-blend": [{
                    "mix-blend": [...Z(), "plus-lighter", "plus-darker"]
                }],
                "bg-blend": [{
                    "bg-blend": Z()
                }],
                filter: [{
                    filter: ["", "none"]
                }],
                blur: [{
                    blur: [t]
                }],
                brightness: [{
                    brightness: [n]
                }],
                contrast: [{
                    contrast: [u]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", S, l]
                }],
                grayscale: [{
                    grayscale: [g]
                }],
                "hue-rotate": [{
                    "hue-rotate": [m]
                }],
                invert: [{
                    invert: [y]
                }],
                saturate: [{
                    saturate: [I]
                }],
                sepia: [{
                    sepia: [E]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none"]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": [t]
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [n]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [u]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": [g]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [m]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": [y]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [f]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [I]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": [E]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": [i]
                }],
                "border-spacing-x": [{
                    "border-spacing-x": [i]
                }],
                "border-spacing-y": [{
                    "border-spacing-y": [i]
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", l]
                }],
                duration: [{
                    duration: k()
                }],
                ease: [{
                    ease: ["linear", "in", "out", "in-out", l]
                }],
                delay: [{
                    delay: k()
                }],
                animate: [{
                    animate: ["none", "spin", "ping", "pulse", "bounce", l]
                }],
                transform: [{
                    transform: ["", "gpu", "none"]
                }],
                scale: [{
                    scale: [A]
                }],
                "scale-x": [{
                    "scale-x": [A]
                }],
                "scale-y": [{
                    "scale-y": [A]
                }],
                rotate: [{
                    rotate: [P, l]
                }],
                "translate-x": [{
                    "translate-x": [q]
                }],
                "translate-y": [{
                    "translate-y": [q]
                }],
                "skew-x": [{
                    "skew-x": [F]
                }],
                "skew-y": [{
                    "skew-y": [F]
                }],
                "transform-origin": [{
                    origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", l]
                }],
                accent: [{
                    accent: ["auto", e]
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", l]
                }],
                "caret-color": [{
                    caret: [e]
                }],
                "pointer-events": [{
                    "pointer-events": ["none", "auto"]
                }],
                resize: [{
                    resize: ["none", "y", "x", ""]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": d()
                }],
                "scroll-mx": [{
                    "scroll-mx": d()
                }],
                "scroll-my": [{
                    "scroll-my": d()
                }],
                "scroll-ms": [{
                    "scroll-ms": d()
                }],
                "scroll-me": [{
                    "scroll-me": d()
                }],
                "scroll-mt": [{
                    "scroll-mt": d()
                }],
                "scroll-mr": [{
                    "scroll-mr": d()
                }],
                "scroll-mb": [{
                    "scroll-mb": d()
                }],
                "scroll-ml": [{
                    "scroll-ml": d()
                }],
                "scroll-p": [{
                    "scroll-p": d()
                }],
                "scroll-px": [{
                    "scroll-px": d()
                }],
                "scroll-py": [{
                    "scroll-py": d()
                }],
                "scroll-ps": [{
                    "scroll-ps": d()
                }],
                "scroll-pe": [{
                    "scroll-pe": d()
                }],
                "scroll-pt": [{
                    "scroll-pt": d()
                }],
                "scroll-pr": [{
                    "scroll-pr": d()
                }],
                "scroll-pb": [{
                    "scroll-pb": d()
                }],
                "scroll-pl": [{
                    "scroll-pl": d()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", l]
                }],
                fill: [{
                    fill: [e, "none"]
                }],
                "stroke-w": [{
                    stroke: [C, z, V]
                }],
                stroke: [{
                    stroke: [e, "none"]
                }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            }
        }
    },
    Xe = Se(Fe);

function le(e) {
    var r, t, n = "";
    if (typeof e == "string" || typeof e == "number") n += e;
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (r = 0; r < e.length; r++) e[r] && (t = le(e[r])) && (n && (n += " "), n += t);
        else
            for (r in e) e[r] && (n && (n += " "), n += r);
    return n
}

function Ze() {
    for (var e, r, t = 0, n = ""; t < arguments.length;)(e = arguments[t++]) && (r = le(e)) && (n && (n += " "), n += r);
    return n
}
export {
    Ze as a, Je as c, Xe as t
};
//# sourceMappingURL=vendor-styling-BudEvoL3.js.map