import {
    V as D,
    W as Ve,
    P as i,
    X as _,
    Y as We,
    Z as qe,
    $ as Ze,
    a0 as He,
    a1 as ze,
    a2 as Ye,
    a3 as ue,
    a4 as ve,
    a5 as Je,
    a6 as Xe
} from "./vendor-DWBJvUkq.js";
import {
    r as L,
    R as c,
    V as Qe
} from "./react-core-C02-NrKc.js";
import {
    c as K
} from "./vendor-styling-BudEvoL3.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {},
            n = new e.Error().stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b270ddf4-1cda-4490-8f6a-f8e49b4f58b8", e._sentryDebugIdIdentifier = "sentry-dbid-b270ddf4-1cda-4490-8f6a-f8e49b4f58b8")
    } catch (r) {}
})();

function he(e) {
    var n = e.inputFormat,
        r = e.country,
        t = e.metadata;
    return n === "NATIONAL_PART_OF_INTERNATIONAL" ? "+".concat(D(r, t)) : ""
}

function J(e, n) {
    return n && (e = e.slice(n.length), e[0] === " " && (e = e.slice(1))), e
}

function et(e, n, r) {
    if (!(r && r.ignoreRest)) {
        var t = function(o) {
            if (r) switch (o) {
                case "end":
                    r.ignoreRest = !0;
                    break
            }
        };
        return Ve(e, n, t)
    }
}

function Ce(e) {
    var n = e.onKeyDown,
        r = e.inputFormat;
    return L.useCallback(function(t) {
        if (t.keyCode === nt && r === "INTERNATIONAL" && t.target instanceof HTMLInputElement && tt(t.target) === rt.length) {
            t.preventDefault();
            return
        }
        n && n(t)
    }, [n, r])
}

function tt(e) {
    return e.selectionStart
}
var nt = 8,
    rt = "+",
    at = ["onKeyDown", "country", "inputFormat", "metadata", "international", "withCountryCallingCode"];

function X() {
    return X = Object.assign ? Object.assign.bind() : function(e) {
        for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, X.apply(this, arguments)
}

function ot(e, n) {
    if (e == null) return {};
    var r = it(e, n),
        t, a;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (a = 0; a < o.length; a++) t = o[a], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function it(e, n) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        a, o;
    for (o = 0; o < t.length; o++) a = t[o], !(n.indexOf(a) >= 0) && (r[a] = e[a]);
    return r
}

function ut(e) {
    function n(r, t) {
        var a = r.onKeyDown,
            o = r.country,
            u = r.inputFormat,
            l = r.metadata,
            s = l === void 0 ? e : l;
        r.international, r.withCountryCallingCode;
        var p = ot(r, at),
            m = L.useCallback(function(y) {
                var v = new _(o, s),
                    b = he({
                        inputFormat: u,
                        country: o,
                        metadata: s
                    }),
                    S = v.input(b + y),
                    f = v.getTemplate();
                return b && (S = J(S, b), f && (f = J(f, b))), {
                    text: S,
                    template: f
                }
            }, [o, s]),
            g = Ce({
                onKeyDown: a,
                inputFormat: u
            });
        return c.createElement(Qe, X({}, p, {
            ref: t,
            parse: et,
            format: m,
            onKeyDown: g
        }))
    }
    return n = c.forwardRef(n), n.propTypes = {
        value: i.string.isRequired,
        onChange: i.func.isRequired,
        onKeyDown: i.func,
        country: i.string,
        inputFormat: i.oneOf(["INTERNATIONAL", "NATIONAL_PART_OF_INTERNATIONAL", "NATIONAL", "INTERNATIONAL_OR_NATIONAL"]).isRequired,
        metadata: i.object
    }, n
}
const lt = ut();
var ct = ["value", "onChange", "onKeyDown", "country", "inputFormat", "metadata", "inputComponent", "international", "withCountryCallingCode"];

function Q() {
    return Q = Object.assign ? Object.assign.bind() : function(e) {
        for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, Q.apply(this, arguments)
}

function st(e, n) {
    if (e == null) return {};
    var r = ft(e, n),
        t, a;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (a = 0; a < o.length; a++) t = o[a], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function ft(e, n) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        a, o;
    for (o = 0; o < t.length; o++) a = t[o], !(n.indexOf(a) >= 0) && (r[a] = e[a]);
    return r
}

function pt(e) {
    function n(r, t) {
        var a = r.value,
            o = r.onChange,
            u = r.onKeyDown,
            l = r.country,
            s = r.inputFormat,
            p = r.metadata,
            m = p === void 0 ? e : p,
            g = r.inputComponent,
            y = g === void 0 ? "input" : g;
        r.international, r.withCountryCallingCode;
        var v = st(r, ct),
            b = he({
                inputFormat: s,
                country: l,
                metadata: m
            }),
            S = L.useCallback(function(d) {
                var h = We(d.target.value);
                if (h === a) {
                    var I = le(b, h, l, m);
                    I.indexOf(d.target.value) === 0 && (h = h.slice(0, -1))
                }
                o(h)
            }, [b, a, o, l, m]),
            f = Ce({
                onKeyDown: u,
                inputFormat: s
            });
        return c.createElement(y, Q({}, v, {
            ref: t,
            value: le(b, a, l, m),
            onChange: S,
            onKeyDown: f
        }))
    }
    return n = c.forwardRef(n), n.propTypes = {
        value: i.string.isRequired,
        onChange: i.func.isRequired,
        onKeyDown: i.func,
        country: i.string,
        inputFormat: i.oneOf(["INTERNATIONAL", "NATIONAL_PART_OF_INTERNATIONAL", "NATIONAL", "INTERNATIONAL_OR_NATIONAL"]).isRequired,
        metadata: i.object,
        inputComponent: i.elementType
    }, n
}
const dt = pt();

function le(e, n, r, t) {
    return J(qe(e + n, r, t), e)
}
var yt = ["value", "onChange", "options", "disabled", "readOnly"],
    mt = ["value", "options", "className", "iconComponent", "getIconAspectRatio", "arrowComponent", "unicodeFlags"];

function gt(e, n) {
    var r = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
    if (r) return (r = r.call(e)).next.bind(r);
    if (Array.isArray(e) || (r = bt(e)) || n) {
        r && (e = r);
        var t = 0;
        return function() {
            return t >= e.length ? {
                done: !0
            } : {
                done: !1,
                value: e[t++]
            }
        }
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function bt(e, n) {
    if (e) {
        if (typeof e == "string") return ce(e, n);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ce(e, n)
    }
}

function ce(e, n) {
    (n == null || n > e.length) && (n = e.length);
    for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
    return t
}

function k() {
    return k = Object.assign ? Object.assign.bind() : function(e) {
        for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, k.apply(this, arguments)
}

function Oe(e, n) {
    if (e == null) return {};
    var r = vt(e, n),
        t, a;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (a = 0; a < o.length; a++) t = o[a], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function vt(e, n) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        a, o;
    for (o = 0; o < t.length; o++) a = t[o], !(n.indexOf(a) >= 0) && (r[a] = e[a]);
    return r
}

function Se(e) {
    var n = e.value,
        r = e.onChange,
        t = e.options,
        a = e.disabled,
        o = e.readOnly,
        u = Oe(e, yt),
        l = L.useCallback(function(s) {
            var p = s.target.value;
            r(p === "ZZ" ? void 0 : p)
        }, [r]);
    return L.useMemo(function() {
        return Pe(t, n)
    }, [t, n]), c.createElement("select", k({}, u, {
        disabled: a || o,
        readOnly: o,
        value: n || "ZZ",
        onChange: l
    }), t.map(function(s) {
        var p = s.value,
            m = s.label,
            g = s.divider;
        return c.createElement("option", {
            key: g ? "|" : p || "ZZ",
            value: g ? "|" : p || "ZZ",
            disabled: !!g,
            style: g ? ht : void 0
        }, m)
    }))
}
Se.propTypes = {
    value: i.string,
    onChange: i.func.isRequired,
    options: i.arrayOf(i.shape({
        value: i.string,
        label: i.string,
        divider: i.bool
    })).isRequired,
    disabled: i.bool,
    readOnly: i.bool
};
var ht = {
    fontSize: "1px",
    backgroundColor: "currentColor",
    color: "inherit"
};

function Ie(e) {
    var n = e.value,
        r = e.options,
        t = e.className,
        a = e.iconComponent;
    e.getIconAspectRatio;
    var o = e.arrowComponent,
        u = o === void 0 ? Ct : o,
        l = e.unicodeFlags,
        s = Oe(e, mt),
        p = L.useMemo(function() {
            return Pe(r, n)
        }, [r, n]);
    return c.createElement("div", {
        className: "PhoneInputCountry"
    }, c.createElement(Se, k({}, s, {
        value: n,
        options: r,
        className: K("PhoneInputCountrySelect", t)
    })), p && (l && n ? c.createElement("div", {
        className: "PhoneInputCountryIconUnicode"
    }, Ze(n)) : c.createElement(a, {
        "aria-hidden": !0,
        country: n,
        label: p.label,
        aspectRatio: l ? 1 : void 0
    })), c.createElement(u, null))
}
Ie.propTypes = {
    iconComponent: i.elementType,
    arrowComponent: i.elementType,
    unicodeFlags: i.bool
};

function Ct() {
    return c.createElement("div", {
        className: "PhoneInputCountrySelectArrow"
    })
}

function Pe(e, n) {
    for (var r = gt(e), t; !(t = r()).done;) {
        var a = t.value;
        if (!a.divider && Ot(a.value, n)) return a
    }
}

function Ot(e, n) {
    return e == null ? n == null : e === n
}
var St = ["country", "countryName", "flags", "flagUrl"];

function ee() {
    return ee = Object.assign ? Object.assign.bind() : function(e) {
        for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, ee.apply(this, arguments)
}

function It(e, n) {
    if (e == null) return {};
    var r = Pt(e, n),
        t, a;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (a = 0; a < o.length; a++) t = o[a], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function Pt(e, n) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        a, o;
    for (o = 0; o < t.length; o++) a = t[o], !(n.indexOf(a) >= 0) && (r[a] = e[a]);
    return r
}

function ae(e) {
    var n = e.country,
        r = e.countryName,
        t = e.flags,
        a = e.flagUrl,
        o = It(e, St);
    return t && t[n] ? t[n]({
        title: r
    }) : c.createElement("img", ee({}, o, {
        alt: r,
        role: r ? void 0 : "presentation",
        src: a.replace("{XX}", n).replace("{xx}", n.toLowerCase())
    }))
}
ae.propTypes = {
    country: i.string.isRequired,
    countryName: i.string.isRequired,
    flags: i.objectOf(i.elementType),
    flagUrl: i.string.isRequired
};
var Nt = ["aspectRatio"],
    At = ["title"],
    wt = ["title"];

function V() {
    return V = Object.assign ? Object.assign.bind() : function(e) {
        for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, V.apply(this, arguments)
}

function oe(e, n) {
    if (e == null) return {};
    var r = Et(e, n),
        t, a;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (a = 0; a < o.length; a++) t = o[a], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function Et(e, n) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        a, o;
    for (o = 0; o < t.length; o++) a = t[o], !(n.indexOf(a) >= 0) && (r[a] = e[a]);
    return r
}

function q(e) {
    var n = e.aspectRatio,
        r = oe(e, Nt);
    return n === 1 ? c.createElement(Ae, r) : c.createElement(Ne, r)
}
q.propTypes = {
    title: i.string.isRequired,
    aspectRatio: i.number
};

function Ne(e) {
    var n = e.title,
        r = oe(e, At);
    return c.createElement("svg", V({}, r, {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 75 50"
    }), c.createElement("title", null, n), c.createElement("g", {
        className: "PhoneInputInternationalIconGlobe",
        stroke: "currentColor",
        fill: "none",
        strokeWidth: "2",
        strokeMiterlimit: "10"
    }, c.createElement("path", {
        strokeLinecap: "round",
        d: "M47.2,36.1C48.1,36,49,36,50,36c7.4,0,14,1.7,18.5,4.3"
    }), c.createElement("path", {
        d: "M68.6,9.6C64.2,12.3,57.5,14,50,14c-7.4,0-14-1.7-18.5-4.3"
    }), c.createElement("line", {
        x1: "26",
        y1: "25",
        x2: "74",
        y2: "25"
    }), c.createElement("line", {
        x1: "50",
        y1: "1",
        x2: "50",
        y2: "49"
    }), c.createElement("path", {
        strokeLinecap: "round",
        d: "M46.3,48.7c1.2,0.2,2.5,0.3,3.7,0.3c13.3,0,24-10.7,24-24S63.3,1,50,1S26,11.7,26,25c0,2,0.3,3.9,0.7,5.8"
    }), c.createElement("path", {
        strokeLinecap: "round",
        d: "M46.8,48.2c1,0.6,2.1,0.8,3.2,0.8c6.6,0,12-10.7,12-24S56.6,1,50,1S38,11.7,38,25c0,1.4,0.1,2.7,0.2,4c0,0.1,0,0.2,0,0.2"
    })), c.createElement("path", {
        className: "PhoneInputInternationalIconPhone",
        stroke: "none",
        fill: "currentColor",
        d: "M12.4,17.9c2.9-2.9,5.4-4.8,0.3-11.2S4.1,5.2,1.3,8.1C-2,11.4,1.1,23.5,13.1,35.6s24.3,15.2,27.5,11.9c2.8-2.8,7.8-6.3,1.4-11.5s-8.3-2.6-11.2,0.3c-2,2-7.2-2.2-11.7-6.7S10.4,19.9,12.4,17.9z"
    }))
}
Ne.propTypes = {
    title: i.string.isRequired
};

function Ae(e) {
    var n = e.title,
        r = oe(e, wt);
    return c.createElement("svg", V({}, r, {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 50 50"
    }), c.createElement("title", null, n), c.createElement("g", {
        className: "PhoneInputInternationalIconGlobe",
        stroke: "currentColor",
        fill: "none",
        strokeWidth: "2",
        strokeLinecap: "round"
    }, c.createElement("path", {
        d: "M8.45,13A21.44,21.44,0,1,1,37.08,41.56"
    }), c.createElement("path", {
        d: "M19.36,35.47a36.9,36.9,0,0,1-2.28-13.24C17.08,10.39,21.88.85,27.8.85s10.72,9.54,10.72,21.38c0,6.48-1.44,12.28-3.71,16.21"
    }), c.createElement("path", {
        d: "M17.41,33.4A39,39,0,0,1,27.8,32.06c6.62,0,12.55,1.5,16.48,3.86"
    }), c.createElement("path", {
        d: "M44.29,8.53c-3.93,2.37-9.86,3.88-16.49,3.88S15.25,10.9,11.31,8.54"
    }), c.createElement("line", {
        x1: "27.8",
        y1: "0.85",
        x2: "27.8",
        y2: "34.61"
    }), c.createElement("line", {
        x1: "15.2",
        y1: "22.23",
        x2: "49.15",
        y2: "22.23"
    })), c.createElement("path", {
        className: "PhoneInputInternationalIconPhone",
        stroke: "transparent",
        fill: "currentColor",
        d: "M9.42,26.64c2.22-2.22,4.15-3.59.22-8.49S3.08,17,.93,19.17c-2.49,2.48-.13,11.74,9,20.89s18.41,11.5,20.89,9c2.15-2.15,5.91-4.77,1-8.71s-6.27-2-8.49.22c-1.55,1.55-5.48-1.69-8.86-5.08S7.87,28.19,9.42,26.64Z"
    }))
}
Ae.propTypes = {
    title: i.string.isRequired
};

function jt(e) {
    if (e.length < 2 || e[0] !== "+") return !1;
    for (var n = 1; n < e.length;) {
        var r = e.charCodeAt(n);
        if (!(r >= 48 && r <= 57)) return !1;
        n++
    }
    return !0
}

function we(e) {
    jt(e) || console.error("[react-phone-number-input] Expected the initial `value` to be a E.164 phone number. Got", e)
}

function Tt(e, n) {
    var r = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
    if (r) return (r = r.call(e)).next.bind(r);
    if (Array.isArray(e) || (r = Rt(e)) || n) {
        r && (e = r);
        var t = 0;
        return function() {
            return t >= e.length ? {
                done: !0
            } : {
                done: !1,
                value: e[t++]
            }
        }
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function Rt(e, n) {
    if (e) {
        if (typeof e == "string") return se(e, n);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return se(e, n)
    }
}

function se(e, n) {
    (n == null || n > e.length) && (n = e.length);
    for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
    return t
}

function Mt(e, n) {
    if (!n) return e;
    for (var r = [], t = [], a = r, o = function() {
            var p = l.value;
            if (p === "|") a.push({
                divider: !0
            });
            else if (p === "..." || p === "…") a = t;
            else {
                var m;
                p === "🌐" ? m = void 0 : m = p;
                var g = e.indexOf(e.filter(function(v) {
                        return v.value === m
                    })[0]),
                    y = e[g];
                e.splice(g, 1), a.push(y)
            }
        }, u = Tt(n), l; !(l = u()).done;) o();
    return r.concat(e).concat(t)
}

function Ft(e, n) {
    if (e && (e = e.filter(function(r) {
            switch (r) {
                case "🌐":
                case "|":
                case "...":
                case "…":
                    return !0;
                default:
                    return Z(r, n)
            }
        }), e.length > 0)) return e
}

function Z(e, n) {
    return He(e, n) ? !0 : (console.error("Country not found: ".concat(e)), !1)
}

function Ee(e, n) {
    return e && (e = e.filter(function(r) {
        return Z(r, n)
    }), e.length === 0 && (e = void 0)), e
}
var Lt = ["country", "label", "aspectRatio"];

function te() {
    return te = Object.assign ? Object.assign.bind() : function(e) {
        for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, te.apply(this, arguments)
}

function Bt(e, n) {
    if (e == null) return {};
    var r = xt(e, n),
        t, a;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (a = 0; a < o.length; a++) t = o[a], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function xt(e, n) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        a, o;
    for (o = 0; o < t.length; o++) a = t[o], !(n.indexOf(a) >= 0) && (r[a] = e[a]);
    return r
}

function je(e) {
    var n = e.flags,
        r = e.flagUrl,
        t = e.flagComponent,
        a = e.internationalIcon;

    function o(u) {
        var l = u.country,
            s = u.label,
            p = u.aspectRatio,
            m = Bt(u, Lt),
            g = a === q ? p : void 0;
        return c.createElement("div", te({}, m, {
            className: K("PhoneInputCountryIcon", {
                "PhoneInputCountryIcon--square": g === 1,
                "PhoneInputCountryIcon--border": l
            })
        }), l ? c.createElement(t, {
            country: l,
            countryName: s,
            flags: n,
            flagUrl: r,
            className: "PhoneInputCountryIconImg"
        }) : c.createElement(a, {
            title: s,
            aspectRatio: g,
            className: "PhoneInputCountryIconImg"
        }))
    }
    return o.propTypes = {
        country: i.string,
        label: i.string.isRequired,
        aspectRatio: i.number
    }, o
}
je({
    flagUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg",
    flagComponent: ae,
    internationalIcon: q
});

function $t(e, n) {
    var r = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
    if (r) return (r = r.call(e)).next.bind(r);
    if (Array.isArray(e) || (r = Ut(e)) || n) {
        r && (e = r);
        var t = 0;
        return function() {
            return t >= e.length ? {
                done: !0
            } : {
                done: !1,
                value: e[t++]
            }
        }
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function Ut(e, n) {
    if (e) {
        if (typeof e == "string") return fe(e, n);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return fe(e, n)
    }
}

function fe(e, n) {
    (n == null || n > e.length) && (n = e.length);
    for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
    return t
}

function Dt(e, n) {
    for (var r = $t(e), t; !(t = r()).done;) {
        var a = t.value;
        a && _t(a, n)
    }
}

function _t(e, n) {
    typeof e == "function" ? e(n) : e.current = n
}
var Te = i.shape({
        country_calling_codes: i.object.isRequired,
        countries: i.object.isRequired
    }),
    Re = i.objectOf(i.string);

function E(e, n) {
    var r = "+" + D(e, n);
    return r
}

function Gt(e) {
    var n = e.value,
        r = e.phoneNumber,
        t = e.defaultCountry,
        a = e.getAnyCountry,
        o = e.countries,
        u = e.required,
        l = e.metadata,
        s;
    return r && r.country ? s = r.country : t && (!n || M(n, t, l)) && (s = t), o && o.indexOf(s) < 0 && (s = void 0), !s && u && o && o.length > 0 && (s = a()), s
}

function Kt(e) {
    var n = e.countries,
        r = e.countryNames,
        t = e.addInternationalOption,
        a = e.compareStringsLocales,
        o = e.compareStrings;
    o || (o = zt);
    var u = n.map(function(l) {
        return {
            value: l,
            label: r[l] || l
        }
    });
    return u.sort(function(l, s) {
        return o(l.label, s.label, a)
    }), t && u.unshift({
        label: r.ZZ
    }), u
}

function Me(e, n) {
    return ze(e || "", n)
}

function kt(e) {
    return e.formatNational().replace(/\D/g, "")
}

function Vt(e, n) {
    var r = n.prevCountry,
        t = n.newCountry,
        a = n.metadata,
        o = n.useNationalFormat;
    if (r === t) return e;
    if (!e) return o ? "" : t ? E(t, a) : "";
    if (t) {
        if (e[0] === "+") {
            if (o) return e.indexOf("+" + D(t, a)) === 0 ? Yt(e, t, a) : "";
            if (r) {
                var u = E(t, a);
                return e.indexOf(u) === 0 ? e : u
            } else {
                var l = E(t, a);
                return e.indexOf(l) === 0 ? e : l
            }
        }
    } else if (e[0] !== "+") return R(e, r, a) || "";
    return e
}

function R(e, n, r) {
    if (e) {
        if (e[0] === "+") {
            if (e === "+") return;
            var t = new _(n, r);
            return t.input(e), t.getNumberValue()
        }
        if (n) {
            var a = Le(e, n, r);
            return "+".concat(D(n, r)).concat(a || "")
        }
    }
}

function Wt(e, n, r) {
    var t = Le(e, n, r);
    if (t) {
        var a = t.length - qt(n, r);
        if (a > 0) return e.slice(0, e.length - a)
    }
    return e
}

function qt(e, n) {
    return n = new Ye(n), n.selectNumberingPlan(e), n.numberingPlan.possibleLengths()[n.numberingPlan.possibleLengths().length - 1]
}

function Fe(e, n) {
    var r = n.country,
        t = n.countries,
        a = n.defaultCountry,
        o = n.latestCountrySelectedByUser,
        u = n.required,
        l = n.metadata;
    if (e === "+") return r;
    var s = Ht(e, l);
    if (s) return !t || t.indexOf(s) >= 0 ? s : void 0;
    if (r) {
        if (M(e, r, l)) {
            if (o && M(e, o, l)) return o;
            if (a && M(e, a, l)) return a;
            if (!u) return
        } else if (!u) return
    }
    return r
}

function Zt(e, n) {
    var r = n.prevPhoneDigits,
        t = n.country,
        a = n.defaultCountry,
        o = n.latestCountrySelectedByUser,
        u = n.countryRequired,
        l = n.getAnyCountry,
        s = n.countries,
        p = n.international,
        m = n.limitMaxLength,
        g = n.countryCallingCodeEditable,
        y = n.metadata;
    if (p && g === !1 && t) {
        var v = E(t, y);
        if (e.indexOf(v) !== 0) {
            var b, S = e && e[0] !== "+";
            return S ? (e = v + e, b = R(e, t, y)) : e = v, {
                phoneDigits: e,
                value: b,
                country: t
            }
        }
    }
    p === !1 && t && e && e[0] === "+" && (e = pe(e, t, y)), e && t && m && (e = Wt(e, t, y)), e && e[0] !== "+" && (!t || p) && (e = "+" + e), !e && r && r[0] === "+" && (p ? t = void 0 : t = a), e === "+" && r && r[0] === "+" && r.length > 1 && (t = void 0);
    var f;
    return e && (e[0] === "+" && (e === "+" || t && E(t, y).indexOf(e) === 0) ? f = void 0 : f = R(e, t, y)), f && (t = Fe(f, {
        country: t,
        countries: s,
        defaultCountry: a,
        latestCountrySelectedByUser: o,
        required: !1,
        metadata: y
    }), p === !1 && t && e && e[0] === "+" && (e = pe(e, t, y), f = R(e, t, y))), !t && u && (t = a || l()), {
        phoneDigits: e,
        country: t,
        value: f
    }
}

function pe(e, n, r) {
    if (e.indexOf(E(n, r)) === 0) {
        var t = new _(n, r);
        t.input(e);
        var a = t.getNumber();
        return a ? a.formatNational().replace(/\D/g, "") : ""
    } else return e.replace(/\D/g, "")
}

function Ht(e, n) {
    var r = new _(null, n);
    return r.input(e), r.getCountry()
}

function zt(e, n, r) {
    return String.prototype.localeCompare ? e.localeCompare(n, r) : e < n ? -1 : e > n ? 1 : 0
}

function Yt(e, n, r) {
    if (n) {
        var t = "+" + D(n, r);
        if (e.length < t.length) {
            if (t.indexOf(e) === 0) return ""
        } else if (e.indexOf(t) === 0) return e.slice(t.length)
    }
    for (var a = 0, o = Object.keys(r.country_calling_codes); a < o.length; a++) {
        var u = o[a];
        if (e.indexOf(u) === 1) return e.slice(1 + u.length)
    }
    return ""
}

function Le(e, n, r) {
    var t = new _(n, r);
    t.input(e);
    var a = t.getNumber();
    return a && a.nationalNumber
}

function M(e, n, r) {
    for (var t = E(n, r), a = 0; a < e.length && a < t.length;) {
        if (e[a] !== t[a]) return !1;
        a++
    }
    return !0
}

function Be(e) {
    var n = e.value,
        r = e.phoneNumber,
        t = e.defaultCountry,
        a = e.international,
        o = e.useNationalFormat,
        u = e.metadata;
    return (a === !1 || o) && r && r.country ? kt(r) : !n && a && t ? E(t, u) : n
}

function U(e) {
    "@babel/helpers - typeof";
    return U = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n
    } : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, U(e)
}

function de(e, n) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var t = Object.getOwnPropertySymbols(e);
        n && (t = t.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable
        })), r.push.apply(r, t)
    }
    return r
}

function G(e) {
    for (var n = 1; n < arguments.length; n++) {
        var r = arguments[n] != null ? arguments[n] : {};
        n % 2 ? de(Object(r), !0).forEach(function(t) {
            Jt(e, t, r[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : de(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
        })
    }
    return e
}

function Jt(e, n, r) {
    return n = Xt(n), n in e ? Object.defineProperty(e, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = r, e
}

function Xt(e) {
    var n = Qt(e, "string");
    return U(n) == "symbol" ? n : n + ""
}

function Qt(e, n) {
    if (U(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var t = r.call(e, n);
        if (U(t) != "object") return t;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (n === "string" ? String : Number)(e)
}

function en(e, n, r) {
    var t = e.metadata,
        a = e.countries,
        o = e.defaultCountry,
        u = e.value,
        l = e.reset,
        s = e.international,
        p = e.displayInitialValueAsLocalNumber,
        m = e.initialValueFormat,
        g = n.defaultCountry,
        y = n.value,
        v = n.reset;
    r.country;
    var b = r.value,
        S = r.hasUserSelectedACountry,
        f = r.latestCountrySelectedByUser,
        d = function(x) {
            return Be(G(G({}, x), {}, {
                international: s,
                useNationalFormat: p || m === "national",
                metadata: t
            }))
        };
    if (l !== v) return {
        phoneDigits: d({
            value: void 0,
            defaultCountry: o
        }),
        value: void 0,
        country: o,
        latestCountrySelectedByUser: void 0,
        hasUserSelectedACountry: void 0
    };
    if (o !== g) {
        var h = !o || Z(o, t),
            I = !b || s && b === d({
                value: void 0,
                defaultCountry: g
            }),
            j = !u && I;
        if (!S && h && j) return {
            country: o,
            phoneDigits: d({
                value: void 0,
                defaultCountry: o
            }),
            value: void 0
        }
    }
    if (!ye(u, y) && !ye(u, b)) {
        var O, C;
        if (u) {
            u && we(u), O = Me(u, t);
            var A = Ee(a, t);
            O && O.country ? (!A || A.indexOf(O.country) >= 0) && (C = O.country) : (C = Fe(u, {
                country: void 0,
                countries: A,
                metadata: t
            }), C || o && u.indexOf(E(o, t)) === 0 && (C = o))
        }
        var w;
        if (u) {
            if (f) {
                var P = C ? f === C : M(u, f, t);
                P ? C || (C = f) : w = {
                    latestCountrySelectedByUser: void 0
                }
            }
        } else w = {
            latestCountrySelectedByUser: void 0,
            hasUserSelectedACountry: void 0
        };
        return G(G({}, w), {}, {
            phoneDigits: d({
                phoneNumber: O,
                value: u,
                defaultCountry: o
            }),
            value: u,
            country: u ? C : o
        })
    }
}

function ye(e, n) {
    return e === null && (e = void 0), n === null && (n = void 0), e === n
}
var tn = ["name", "disabled", "readOnly", "autoComplete", "style", "className", "inputRef", "inputComponent", "numberInputProps", "smartCaret", "countrySelectComponent", "countrySelectProps", "containerComponent", "containerComponentProps", "defaultCountry", "countries", "countryOptionsOrder", "labels", "flags", "flagComponent", "flagUrl", "addInternationalOption", "internationalIcon", "displayInitialValueAsLocalNumber", "initialValueFormat", "onCountryChange", "limitMaxLength", "countryCallingCodeEditable", "focusInputOnCountrySelection", "reset", "metadata", "international", "locales"];

function B(e) {
    "@babel/helpers - typeof";
    return B = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n
    } : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, B(e)
}

function me(e, n) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var t = Object.getOwnPropertySymbols(e);
        n && (t = t.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable
        })), r.push.apply(r, t)
    }
    return r
}

function xe(e) {
    for (var n = 1; n < arguments.length; n++) {
        var r = arguments[n] != null ? arguments[n] : {};
        n % 2 ? me(Object(r), !0).forEach(function(t) {
            N(e, t, r[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : me(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
        })
    }
    return e
}

function F() {
    return F = Object.assign ? Object.assign.bind() : function(e) {
        for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, F.apply(this, arguments)
}

function nn(e, n) {
    if (e == null) return {};
    var r = rn(e, n),
        t, a;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (a = 0; a < o.length; a++) t = o[a], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function rn(e, n) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        a, o;
    for (o = 0; o < t.length; o++) a = t[o], !(n.indexOf(a) >= 0) && (r[a] = e[a]);
    return r
}

function an(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
}

function ge(e, n) {
    for (var r = 0; r < n.length; r++) {
        var t = n[r];
        t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, Ue(t.key), t)
    }
}

function on(e, n, r) {
    return n && ge(e.prototype, n), r && ge(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function un(e, n, r) {
    return n = W(n), ln(e, $e() ? Reflect.construct(n, r || [], W(e).constructor) : n.apply(e, r))
}

function ln(e, n) {
    if (n && (B(n) === "object" || typeof n == "function")) return n;
    if (n !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return cn(e)
}

function cn(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function $e() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch (n) {}
    return ($e = function() {
        return !!e
    })()
}

function W(e) {
    return W = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, W(e)
}

function sn(e, n) {
    if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), n && ne(e, n)
}

function ne(e, n) {
    return ne = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, a) {
        return t.__proto__ = a, t
    }, ne(e, n)
}

function N(e, n, r) {
    return n = Ue(n), n in e ? Object.defineProperty(e, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = r, e
}

function Ue(e) {
    var n = fn(e, "string");
    return B(n) == "symbol" ? n : n + ""
}

function fn(e, n) {
    if (B(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var t = r.call(e, n);
        if (B(t) != "object") return t;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (n === "string" ? String : Number)(e)
}
var pn = function(e) {
        function n(r) {
            var t;
            an(this, n), t = un(this, n, [r]), N(t, "setInputRef", function(f) {
                Dt([t.props.inputRef, t.inputRef], f)
            }), N(t, "isCountrySupportedWithError", function(f) {
                var d = t.props.metadata;
                return Z(f, d)
            }), N(t, "onCountryChange", function(f) {
                var d = t.props,
                    h = d.international,
                    I = d.metadata,
                    j = d.onChange,
                    O = d.focusInputOnCountrySelection,
                    C = t.state,
                    A = C.phoneDigits,
                    w = C.country,
                    P = Vt(A, {
                        prevCountry: w,
                        newCountry: f,
                        metadata: I,
                        useNationalFormat: !h
                    }),
                    T = R(P, f, I);
                O && t.inputRef.current.focus(), t.setState({
                    country: f,
                    latestCountrySelectedByUser: f,
                    hasUserSelectedACountry: !0,
                    phoneDigits: P,
                    value: T
                }, function() {
                    j(T)
                })
            }), N(t, "onChange", function(f) {
                var d = t.props,
                    h = d.defaultCountry,
                    I = d.onChange,
                    j = d.addInternationalOption,
                    O = d.international,
                    C = d.limitMaxLength,
                    A = d.countryCallingCodeEditable,
                    w = d.metadata,
                    P = t.state,
                    T = P.countries,
                    x = P.phoneDigits,
                    Ke = P.country,
                    H = P.latestCountrySelectedByUser,
                    z = Zt(f, {
                        prevPhoneDigits: x,
                        country: Ke,
                        countryRequired: !j,
                        defaultCountry: h,
                        latestCountrySelectedByUser: H,
                        getAnyCountry: function() {
                            return t.getFirstSupportedCountry({
                                countries: T
                            })
                        },
                        countries: T,
                        international: O,
                        limitMaxLength: C,
                        countryCallingCodeEditable: A,
                        metadata: w
                    }),
                    ie = z.phoneDigits,
                    ke = z.country,
                    $ = z.value,
                    Y = {
                        phoneDigits: ie,
                        value: $,
                        country: ke
                    };
                H && $ && !M($, H, w) && (Y.latestCountrySelectedByUser = void 0), A === !1 && !$ && ie === t.state.phoneDigits && (Y.forceRerender = {}), t.setState(Y, function() {
                    return I($)
                })
            }), N(t, "_onFocus", function() {
                return t.setState({
                    isFocused: !0
                })
            }), N(t, "_onBlur", function() {
                return t.setState({
                    isFocused: !1
                })
            }), N(t, "onFocus", function(f) {
                t._onFocus();
                var d = t.props.onFocus;
                d && d(f)
            }), N(t, "onBlur", function(f) {
                var d = t.props.onBlur;
                t._onBlur(), d && d(f)
            }), N(t, "onCountryFocus", function(f) {
                t._onFocus();
                var d = t.props.countrySelectProps;
                if (d) {
                    var h = d.onFocus;
                    h && h(f)
                }
            }), N(t, "onCountryBlur", function(f) {
                t._onBlur();
                var d = t.props.countrySelectProps;
                if (d) {
                    var h = d.onBlur;
                    h && h(f)
                }
            }), t.inputRef = c.createRef();
            var a = t.props,
                o = a.value;
            a.labels;
            var u = a.international,
                l = a.addInternationalOption,
                s = a.displayInitialValueAsLocalNumber,
                p = a.initialValueFormat,
                m = a.metadata,
                g = t.props,
                y = g.defaultCountry,
                v = g.countries;
            y && (t.isCountrySupportedWithError(y) || (y = void 0)), o && we(o), v = Ee(v, m);
            var b = Me(o, m);
            t.CountryIcon = je(t.props);
            var S = Gt({
                value: o,
                phoneNumber: b,
                defaultCountry: y,
                required: !l,
                countries: v || ue(m),
                getAnyCountry: function() {
                    return t.getFirstSupportedCountry({
                        countries: v
                    })
                },
                metadata: m
            });
            return t.state = {
                props: t.props,
                country: S,
                countries: v,
                phoneDigits: Be({
                    value: o,
                    phoneNumber: b,
                    defaultCountry: y,
                    international: u,
                    useNationalFormat: s || p === "national",
                    metadata: m
                }),
                value: o
            }, t
        }
        return sn(n, e), on(n, [{
            key: "componentDidMount",
            value: function() {
                var t = this.props.onCountryChange,
                    a = this.props.defaultCountry,
                    o = this.state.country;
                t && (a && (this.isCountrySupportedWithError(a) || (a = void 0)), o !== a && t(o))
            }
        }, {
            key: "componentDidUpdate",
            value: function(t, a) {
                var o = this.props.onCountryChange,
                    u = this.state.country;
                o && u !== a.country && o(u)
            }
        }, {
            key: "getCountrySelectOptions",
            value: function(t) {
                var a = t.countries,
                    o = this.props,
                    u = o.international,
                    l = o.countryCallingCodeEditable,
                    s = o.countryOptionsOrder,
                    p = o.addInternationalOption,
                    m = o.labels,
                    g = o.locales,
                    y = o.metadata;
                return this.useMemoCountrySelectOptions(function() {
                    return Mt(Kt({
                        countries: a || ue(y),
                        countryNames: m,
                        addInternationalOption: u && l === !1 ? !1 : p,
                        compareStringsLocales: g
                    }), Ft(s, y))
                }, [a, s, p, m, y])
            }
        }, {
            key: "useMemoCountrySelectOptions",
            value: function(t, a) {
                return (!this.countrySelectOptionsMemoDependencies || !yn(a, this.countrySelectOptionsMemoDependencies)) && (this.countrySelectOptionsMemo = t(), this.countrySelectOptionsMemoDependencies = a), this.countrySelectOptionsMemo
            }
        }, {
            key: "getFirstSupportedCountry",
            value: function(t) {
                var a = t.countries,
                    o = this.getCountrySelectOptions({
                        countries: a
                    });
                return o[0].value
            }
        }, {
            key: "render",
            value: function() {
                var t = this.props,
                    a = t.name,
                    o = t.disabled,
                    u = t.readOnly,
                    l = t.autoComplete,
                    s = t.style,
                    p = t.className;
                t.inputRef;
                var m = t.inputComponent,
                    g = t.numberInputProps,
                    y = t.smartCaret,
                    v = t.countrySelectComponent,
                    b = t.countrySelectProps,
                    S = t.containerComponent,
                    f = t.containerComponentProps;
                t.defaultCountry, t.countries, t.countryOptionsOrder;
                var d = t.labels;
                t.flags, t.flagComponent, t.flagUrl, t.addInternationalOption, t.internationalIcon, t.displayInitialValueAsLocalNumber, t.initialValueFormat, t.onCountryChange, t.limitMaxLength, t.countryCallingCodeEditable, t.focusInputOnCountrySelection, t.reset;
                var h = t.metadata,
                    I = t.international;
                t.locales;
                var j = nn(t, tn),
                    O = this.state,
                    C = O.country,
                    A = O.countries,
                    w = O.phoneDigits,
                    P = O.isFocused,
                    T = y ? lt : dt,
                    x = this.getCountrySelectOptions({
                        countries: A
                    });
                return c.createElement(S, F({
                    style: s,
                    className: K(p, "PhoneInput", {
                        "PhoneInput--focus": P,
                        "PhoneInput--disabled": o,
                        "PhoneInput--readOnly": u
                    })
                }, f), c.createElement(v, F({
                    name: a ? "".concat(a, "Country") : void 0,
                    "aria-label": d.country
                }, b, {
                    value: C,
                    options: x,
                    onChange: this.onCountryChange,
                    onFocus: this.onCountryFocus,
                    onBlur: this.onCountryBlur,
                    disabled: o || b && b.disabled,
                    readOnly: u || b && b.readOnly,
                    iconComponent: this.CountryIcon
                })), c.createElement(T, F({
                    ref: this.setInputRef,
                    type: "tel",
                    autoComplete: l
                }, g, j, {
                    inputFormat: I === !0 ? "INTERNATIONAL" : I === !1 ? "NATIONAL" : "INTERNATIONAL_OR_NATIONAL",
                    international: I ? !0 : void 0,
                    withCountryCallingCode: I ? !0 : void 0,
                    name: a,
                    metadata: h,
                    country: C,
                    value: w || "",
                    onChange: this.onChange,
                    onFocus: this.onFocus,
                    onBlur: this.onBlur,
                    disabled: o,
                    readOnly: u,
                    inputComponent: m,
                    className: K("PhoneInputInput", g && g.className, j.className)
                })))
            }
        }], [{
            key: "getDerivedStateFromProps",
            value: function(t, a) {
                return xe({
                    props: t
                }, en(t, a.props, a))
            }
        }])
    }(c.PureComponent),
    De = c.forwardRef(function(e, n) {
        return c.createElement(pn, F({}, dn(e), {
            inputRef: n
        }))
    });
De.propTypes = {
    value: i.string,
    onChange: i.func.isRequired,
    onFocus: i.func,
    onBlur: i.func,
    disabled: i.bool,
    readOnly: i.bool,
    autoComplete: i.string,
    initialValueFormat: i.oneOf(["national"]),
    displayInitialValueAsLocalNumber: i.bool,
    defaultCountry: i.string,
    countries: i.arrayOf(i.string),
    labels: Re,
    locales: i.oneOfType([i.string, i.arrayOf(i.string)]),
    flagUrl: i.string,
    flags: i.objectOf(i.elementType),
    flagComponent: i.elementType,
    addInternationalOption: i.bool,
    internationalIcon: i.elementType,
    countryOptionsOrder: i.arrayOf(i.string),
    style: i.object,
    className: i.string,
    countrySelectComponent: i.elementType,
    countrySelectProps: i.object,
    inputComponent: i.elementType,
    numberInputProps: i.object,
    containerComponent: i.elementType,
    containerComponentProps: i.object,
    smartCaret: i.bool,
    international: i.bool,
    limitMaxLength: i.bool,
    countryCallingCodeEditable: i.bool,
    metadata: Te,
    onCountryChange: i.func,
    focusInputOnCountrySelection: i.bool
};
var be = {
    autoComplete: "tel",
    countrySelectComponent: Ie,
    flagComponent: ae,
    flagUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg",
    internationalIcon: q,
    inputComponent: "input",
    containerComponent: "div",
    reset: i.any,
    smartCaret: !0,
    addInternationalOption: !0,
    countryCallingCodeEditable: !0,
    focusInputOnCountrySelection: !0
};

function dn(e) {
    e = xe({}, e);
    for (var n in be) e[n] === void 0 && (e[n] = be[n]);
    return e
}

function yn(e, n) {
    if (e.length !== n.length) return !1;
    for (var r = 0; r < e.length;) {
        if (e[r] !== n[r]) return !1;
        r++
    }
    return !0
}
const mn = {
    ext: "ext.",
    country: "Phone number country",
    phone: "Phone",
    AB: "Abkhazia",
    AC: "Ascension Island",
    AD: "Andorra",
    AE: "United Arab Emirates",
    AF: "Afghanistan",
    AG: "Antigua and Barbuda",
    AI: "Anguilla",
    AL: "Albania",
    AM: "Armenia",
    AO: "Angola",
    AQ: "Antarctica",
    AR: "Argentina",
    AS: "American Samoa",
    AT: "Austria",
    AU: "Australia",
    AW: "Aruba",
    AX: "Åland Islands",
    AZ: "Azerbaijan",
    BA: "Bosnia and Herzegovina",
    BB: "Barbados",
    BD: "Bangladesh",
    BE: "Belgium",
    BF: "Burkina Faso",
    BG: "Bulgaria",
    BH: "Bahrain",
    BI: "Burundi",
    BJ: "Benin",
    BL: "Saint Barthélemy",
    BM: "Bermuda",
    BN: "Brunei Darussalam",
    BO: "Bolivia",
    BQ: "Bonaire, Sint Eustatius and Saba",
    BR: "Brazil",
    BS: "Bahamas",
    BT: "Bhutan",
    BV: "Bouvet Island",
    BW: "Botswana",
    BY: "Belarus",
    BZ: "Belize",
    CA: "Canada",
    CC: "Cocos (Keeling) Islands",
    CD: "Congo, Democratic Republic of the",
    CF: "Central African Republic",
    CG: "Congo",
    CH: "Switzerland",
    CI: "Cote d'Ivoire",
    CK: "Cook Islands",
    CL: "Chile",
    CM: "Cameroon",
    CN: "China",
    CO: "Colombia",
    CR: "Costa Rica",
    CU: "Cuba",
    CV: "Cape Verde",
    CW: "Curaçao",
    CX: "Christmas Island",
    CY: "Cyprus",
    CZ: "Czech Republic",
    DE: "Germany",
    DJ: "Djibouti",
    DK: "Denmark",
    DM: "Dominica",
    DO: "Dominican Republic",
    DZ: "Algeria",
    EC: "Ecuador",
    EE: "Estonia",
    EG: "Egypt",
    EH: "Western Sahara",
    ER: "Eritrea",
    ES: "Spain",
    ET: "Ethiopia",
    FI: "Finland",
    FJ: "Fiji",
    FK: "Falkland Islands",
    FM: "Federated States of Micronesia",
    FO: "Faroe Islands",
    FR: "France",
    GA: "Gabon",
    GB: "United Kingdom",
    GD: "Grenada",
    GE: "Georgia",
    GF: "French Guiana",
    GG: "Guernsey",
    GH: "Ghana",
    GI: "Gibraltar",
    GL: "Greenland",
    GM: "Gambia",
    GN: "Guinea",
    GP: "Guadeloupe",
    GQ: "Equatorial Guinea",
    GR: "Greece",
    GS: "South Georgia and the South Sandwich Islands",
    GT: "Guatemala",
    GU: "Guam",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HK: "Hong Kong",
    HM: "Heard Island and McDonald Islands",
    HN: "Honduras",
    HR: "Croatia",
    HT: "Haiti",
    HU: "Hungary",
    ID: "Indonesia",
    IE: "Ireland",
    IL: "Israel",
    IM: "Isle of Man",
    IN: "India",
    IO: "British Indian Ocean Territory",
    IQ: "Iraq",
    IR: "Iran",
    IS: "Iceland",
    IT: "Italy",
    JE: "Jersey",
    JM: "Jamaica",
    JO: "Jordan",
    JP: "Japan",
    KE: "Kenya",
    KG: "Kyrgyzstan",
    KH: "Cambodia",
    KI: "Kiribati",
    KM: "Comoros",
    KN: "Saint Kitts and Nevis",
    KP: "North Korea",
    KR: "South Korea",
    KW: "Kuwait",
    KY: "Cayman Islands",
    KZ: "Kazakhstan",
    LA: "Laos",
    LB: "Lebanon",
    LC: "Saint Lucia",
    LI: "Liechtenstein",
    LK: "Sri Lanka",
    LR: "Liberia",
    LS: "Lesotho",
    LT: "Lithuania",
    LU: "Luxembourg",
    LV: "Latvia",
    LY: "Libya",
    MA: "Morocco",
    MC: "Monaco",
    MD: "Moldova",
    ME: "Montenegro",
    MF: "Saint Martin (French Part)",
    MG: "Madagascar",
    MH: "Marshall Islands",
    MK: "North Macedonia",
    ML: "Mali",
    MM: "Myanmar",
    MN: "Mongolia",
    MO: "Macao",
    MP: "Northern Mariana Islands",
    MQ: "Martinique",
    MR: "Mauritania",
    MS: "Montserrat",
    MT: "Malta",
    MU: "Mauritius",
    MV: "Maldives",
    MW: "Malawi",
    MX: "Mexico",
    MY: "Malaysia",
    MZ: "Mozambique",
    NA: "Namibia",
    NC: "New Caledonia",
    NE: "Niger",
    NF: "Norfolk Island",
    NG: "Nigeria",
    NI: "Nicaragua",
    NL: "Netherlands",
    NO: "Norway",
    NP: "Nepal",
    NR: "Nauru",
    NU: "Niue",
    NZ: "New Zealand",
    OM: "Oman",
    OS: "South Ossetia",
    PA: "Panama",
    PE: "Peru",
    PF: "French Polynesia",
    PG: "Papua New Guinea",
    PH: "Philippines",
    PK: "Pakistan",
    PL: "Poland",
    PM: "Saint Pierre and Miquelon",
    PN: "Pitcairn",
    PR: "Puerto Rico",
    PS: "Palestine",
    PT: "Portugal",
    PW: "Palau",
    PY: "Paraguay",
    QA: "Qatar",
    RE: "Reunion",
    RO: "Romania",
    RS: "Serbia",
    RU: "Russia",
    RW: "Rwanda",
    SA: "Saudi Arabia",
    SB: "Solomon Islands",
    SC: "Seychelles",
    SD: "Sudan",
    SE: "Sweden",
    SG: "Singapore",
    SH: "Saint Helena",
    SI: "Slovenia",
    SJ: "Svalbard and Jan Mayen",
    SK: "Slovakia",
    SL: "Sierra Leone",
    SM: "San Marino",
    SN: "Senegal",
    SO: "Somalia",
    SR: "Suriname",
    SS: "South Sudan",
    ST: "Sao Tome and Principe",
    SV: "El Salvador",
    SX: "Sint Maarten",
    SY: "Syria",
    SZ: "Swaziland",
    TA: "Tristan da Cunha",
    TC: "Turks and Caicos Islands",
    TD: "Chad",
    TF: "French Southern Territories",
    TG: "Togo",
    TH: "Thailand",
    TJ: "Tajikistan",
    TK: "Tokelau",
    TL: "Timor-Leste",
    TM: "Turkmenistan",
    TN: "Tunisia",
    TO: "Tonga",
    TR: "Turkey",
    TT: "Trinidad and Tobago",
    TV: "Tuvalu",
    TW: "Taiwan",
    TZ: "Tanzania",
    UA: "Ukraine",
    UG: "Uganda",
    UM: "United States Minor Outlying Islands",
    US: "United States",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VA: "Holy See (Vatican City State)",
    VC: "Saint Vincent and the Grenadines",
    VE: "Venezuela",
    VG: "Virgin Islands, British",
    VI: "Virgin Islands, U.S.",
    VN: "Vietnam",
    VU: "Vanuatu",
    WF: "Wallis and Futuna",
    WS: "Samoa",
    XK: "Kosovo",
    YE: "Yemen",
    YT: "Mayotte",
    ZA: "South Africa",
    ZM: "Zambia",
    ZW: "Zimbabwe",
    ZZ: "International"
};
var gn = ["metadata", "labels"];

function re() {
    return re = Object.assign ? Object.assign.bind() : function(e) {
        for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, re.apply(this, arguments)
}

function bn(e, n) {
    if (e == null) return {};
    var r = vn(e, n),
        t, a;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (a = 0; a < o.length; a++) t = o[a], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function vn(e, n) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        a, o;
    for (o = 0; o < t.length; o++) a = t[o], !(n.indexOf(a) >= 0) && (r[a] = e[a]);
    return r
}

function _e(e) {
    var n = c.forwardRef(function(r, t) {
        var a = r.metadata,
            o = a === void 0 ? e : a,
            u = r.labels,
            l = u === void 0 ? mn : u,
            s = bn(r, gn);
        return c.createElement(De, re({}, s, {
            ref: t,
            metadata: o,
            labels: l
        }))
    });
    return n.propTypes = {
        metadata: Te,
        labels: Re
    }, n
}
_e();

function Ge(e, n) {
    var r = Array.prototype.slice.call(n);
    return r.push(ve), e.apply(this, r)
}
const In = _e(ve);

function Pn() {
    return Ge(Je, arguments)
}

function Nn() {
    return Ge(Xe, arguments)
}
export {
    In as P, Pn as a, Nn as i
};
//# sourceMappingURL=react-phone-input-BECxSqfY.js.map