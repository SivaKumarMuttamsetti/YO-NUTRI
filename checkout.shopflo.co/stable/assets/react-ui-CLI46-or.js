import {
    r as f,
    R as l
} from "./react-core-C02-NrKc.js";
import {
    P as a
} from "./vendor-DWBJvUkq.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {},
            o = new e.Error().stack;
        o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "dbf831e2-4121-4501-9247-bbcef54af823", e._sentryDebugIdIdentifier = "sentry-dbid-dbf831e2-4121-4501-9247-bbcef54af823")
    } catch (r) {}
})();

function p() {
    return p = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, p.apply(this, arguments)
}

function He(e, o) {
    if (e == null) return {};
    var r = Ae(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function Ae(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var Q = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = He(e, ["color", "size"]);
    return l.createElement("svg", p({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "10"
    }), l.createElement("line", {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "12"
    }), l.createElement("line", {
        x1: "12",
        y1: "16",
        x2: "12.01",
        y2: "16"
    }))
});
Q.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
Q.displayName = "AlertCircle";

function c() {
    return c = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, c.apply(this, arguments)
}

function Ve(e, o) {
    if (e == null) return {};
    var r = De(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function De(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var Y = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = Ve(e, ["color", "size"]);
    return l.createElement("svg", c({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("path", {
        d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
    }), l.createElement("line", {
        x1: "12",
        y1: "9",
        x2: "12",
        y2: "13"
    }), l.createElement("line", {
        x1: "12",
        y1: "17",
        x2: "12.01",
        y2: "17"
    }))
});
Y.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
Y.displayName = "AlertTriangle";

function u() {
    return u = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, u.apply(this, arguments)
}

function Fe(e, o) {
    if (e == null) return {};
    var r = Ue(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function Ue(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var ee = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = Fe(e, ["color", "size"]);
    return l.createElement("svg", u({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("line", {
        x1: "19",
        y1: "12",
        x2: "5",
        y2: "12"
    }), l.createElement("polyline", {
        points: "12 19 5 12 12 5"
    }))
});
ee.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
ee.displayName = "ArrowLeft";

function g() {
    return g = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, g.apply(this, arguments)
}

function qe(e, o) {
    if (e == null) return {};
    var r = Xe(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function Xe(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var te = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = qe(e, ["color", "size"]);
    return l.createElement("svg", g({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("line", {
        x1: "5",
        y1: "12",
        x2: "19",
        y2: "12"
    }), l.createElement("polyline", {
        points: "12 5 19 12 12 19"
    }))
});
te.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
te.displayName = "ArrowRight";

function v() {
    return v = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, v.apply(this, arguments)
}

function Ge(e, o) {
    if (e == null) return {};
    var r = Ze(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function Ze(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var re = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = Ge(e, ["color", "size"]);
    return l.createElement("svg", v({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("path", {
        d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
    }))
});
re.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
re.displayName = "Bookmark";

function y() {
    return y = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, y.apply(this, arguments)
}

function Je(e, o) {
    if (e == null) return {};
    var r = Ke(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function Ke(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var ne = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = Je(e, ["color", "size"]);
    return l.createElement("svg", y({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("rect", {
        x: "2",
        y: "7",
        width: "20",
        height: "14",
        rx: "2",
        ry: "2"
    }), l.createElement("path", {
        d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
    }))
});
ne.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
ne.displayName = "Briefcase";

function h() {
    return h = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, h.apply(this, arguments)
}

function Qe(e, o) {
    if (e == null) return {};
    var r = Ye(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function Ye(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var oe = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = Qe(e, ["color", "size"]);
    return l.createElement("svg", h({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("polyline", {
        points: "20 6 9 17 4 12"
    }))
});
oe.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
oe.displayName = "Check";

function O() {
    return O = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, O.apply(this, arguments)
}

function et(e, o) {
    if (e == null) return {};
    var r = tt(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function tt(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var ie = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = et(e, ["color", "size"]);
    return l.createElement("svg", O({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("polyline", {
        points: "6 9 12 15 18 9"
    }))
});
ie.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
ie.displayName = "ChevronDown";

function m() {
    return m = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, m.apply(this, arguments)
}

function rt(e, o) {
    if (e == null) return {};
    var r = nt(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function nt(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var ae = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = rt(e, ["color", "size"]);
    return l.createElement("svg", m({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("polyline", {
        points: "15 18 9 12 15 6"
    }))
});
ae.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
ae.displayName = "ChevronLeft";

function b() {
    return b = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, b.apply(this, arguments)
}

function ot(e, o) {
    if (e == null) return {};
    var r = it(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function it(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var le = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = ot(e, ["color", "size"]);
    return l.createElement("svg", b({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("polyline", {
        points: "9 18 15 12 9 6"
    }))
});
le.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
le.displayName = "ChevronRight";

function d() {
    return d = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, d.apply(this, arguments)
}

function at(e, o) {
    if (e == null) return {};
    var r = lt(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function lt(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var se = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = at(e, ["color", "size"]);
    return l.createElement("svg", d({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("polyline", {
        points: "18 15 12 9 6 15"
    }))
});
se.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
se.displayName = "ChevronUp";

function w() {
    return w = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, w.apply(this, arguments)
}

function st(e, o) {
    if (e == null) return {};
    var r = ft(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function ft(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var fe = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = st(e, ["color", "size"]);
    return l.createElement("svg", w({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("rect", {
        x: "9",
        y: "9",
        width: "13",
        height: "13",
        rx: "2",
        ry: "2"
    }), l.createElement("path", {
        d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
    }))
});
fe.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
fe.displayName = "Copy";

function j() {
    return j = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, j.apply(this, arguments)
}

function pt(e, o) {
    if (e == null) return {};
    var r = ct(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function ct(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var pe = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = pt(e, ["color", "size"]);
    return l.createElement("svg", j({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("path", {
        d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
    }))
});
pe.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
pe.displayName = "Edit2";

function x() {
    return x = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, x.apply(this, arguments)
}

function ut(e, o) {
    if (e == null) return {};
    var r = gt(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function gt(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var ce = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = ut(e, ["color", "size"]);
    return l.createElement("svg", x({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("path", {
        d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
    }), l.createElement("path", {
        d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
    }))
});
ce.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
ce.displayName = "Edit";

function z() {
    return z = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, z.apply(this, arguments)
}

function vt(e, o) {
    if (e == null) return {};
    var r = yt(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function yt(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var ue = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = vt(e, ["color", "size"]);
    return l.createElement("svg", z({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("path", {
        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
    }), l.createElement("polyline", {
        points: "14 2 14 8 20 8"
    }), l.createElement("line", {
        x1: "16",
        y1: "13",
        x2: "8",
        y2: "13"
    }), l.createElement("line", {
        x1: "16",
        y1: "17",
        x2: "8",
        y2: "17"
    }), l.createElement("polyline", {
        points: "10 9 9 9 8 9"
    }))
});
ue.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
ue.displayName = "FileText";

function k() {
    return k = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, k.apply(this, arguments)
}

function ht(e, o) {
    if (e == null) return {};
    var r = Ot(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function Ot(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var ge = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = ht(e, ["color", "size"]);
    return l.createElement("svg", k({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("polyline", {
        points: "20 12 20 22 4 22 4 12"
    }), l.createElement("rect", {
        x: "2",
        y: "7",
        width: "20",
        height: "5"
    }), l.createElement("line", {
        x1: "12",
        y1: "22",
        x2: "12",
        y2: "7"
    }), l.createElement("path", {
        d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"
    }), l.createElement("path", {
        d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"
    }))
});
ge.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
ge.displayName = "Gift";

function P() {
    return P = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, P.apply(this, arguments)
}

function mt(e, o) {
    if (e == null) return {};
    var r = bt(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function bt(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var ve = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = mt(e, ["color", "size"]);
    return l.createElement("svg", P({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("path", {
        d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
    }))
});
ve.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
ve.displayName = "Heart";

function $() {
    return $ = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, $.apply(this, arguments)
}

function dt(e, o) {
    if (e == null) return {};
    var r = wt(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function wt(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var ye = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = dt(e, ["color", "size"]);
    return l.createElement("svg", $({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("path", {
        d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
    }), l.createElement("polyline", {
        points: "9 22 9 12 15 12 15 22"
    }))
});
ye.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
ye.displayName = "Home";

function E() {
    return E = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, E.apply(this, arguments)
}

function jt(e, o) {
    if (e == null) return {};
    var r = xt(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function xt(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var he = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = jt(e, ["color", "size"]);
    return l.createElement("svg", E({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "10"
    }), l.createElement("line", {
        x1: "12",
        y1: "16",
        x2: "12",
        y2: "12"
    }), l.createElement("line", {
        x1: "12",
        y1: "8",
        x2: "12.01",
        y2: "8"
    }))
});
he.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
he.displayName = "Info";

function L() {
    return L = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, L.apply(this, arguments)
}

function zt(e, o) {
    if (e == null) return {};
    var r = kt(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function kt(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var Oe = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = zt(e, ["color", "size"]);
    return l.createElement("svg", L({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("line", {
        x1: "12",
        y1: "2",
        x2: "12",
        y2: "6"
    }), l.createElement("line", {
        x1: "12",
        y1: "18",
        x2: "12",
        y2: "22"
    }), l.createElement("line", {
        x1: "4.93",
        y1: "4.93",
        x2: "7.76",
        y2: "7.76"
    }), l.createElement("line", {
        x1: "16.24",
        y1: "16.24",
        x2: "19.07",
        y2: "19.07"
    }), l.createElement("line", {
        x1: "2",
        y1: "12",
        x2: "6",
        y2: "12"
    }), l.createElement("line", {
        x1: "18",
        y1: "12",
        x2: "22",
        y2: "12"
    }), l.createElement("line", {
        x1: "4.93",
        y1: "19.07",
        x2: "7.76",
        y2: "16.24"
    }), l.createElement("line", {
        x1: "16.24",
        y1: "7.76",
        x2: "19.07",
        y2: "4.93"
    }))
});
Oe.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
Oe.displayName = "Loader";

function _() {
    return _ = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, _.apply(this, arguments)
}

function Pt(e, o) {
    if (e == null) return {};
    var r = $t(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function $t(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var me = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = Pt(e, ["color", "size"]);
    return l.createElement("svg", _({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("rect", {
        x: "3",
        y: "11",
        width: "18",
        height: "11",
        rx: "2",
        ry: "2"
    }), l.createElement("path", {
        d: "M7 11V7a5 5 0 0 1 10 0v4"
    }))
});
me.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
me.displayName = "Lock";

function W() {
    return W = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, W.apply(this, arguments)
}

function Et(e, o) {
    if (e == null) return {};
    var r = Lt(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function Lt(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var be = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = Et(e, ["color", "size"]);
    return l.createElement("svg", W({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("path", {
        d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
    }), l.createElement("polyline", {
        points: "16 17 21 12 16 7"
    }), l.createElement("line", {
        x1: "21",
        y1: "12",
        x2: "9",
        y2: "12"
    }))
});
be.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
be.displayName = "LogOut";

function T() {
    return T = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, T.apply(this, arguments)
}

function _t(e, o) {
    if (e == null) return {};
    var r = Wt(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function Wt(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var de = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = _t(e, ["color", "size"]);
    return l.createElement("svg", T({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("path", {
        d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
    }), l.createElement("polyline", {
        points: "22,6 12,13 2,6"
    }))
});
de.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
de.displayName = "Mail";

function C() {
    return C = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, C.apply(this, arguments)
}

function Tt(e, o) {
    if (e == null) return {};
    var r = Ct(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function Ct(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var we = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = Tt(e, ["color", "size"]);
    return l.createElement("svg", C({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("path", {
        d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
    }), l.createElement("circle", {
        cx: "12",
        cy: "10",
        r: "3"
    }))
});
we.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
we.displayName = "MapPin";

function B() {
    return B = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, B.apply(this, arguments)
}

function Bt(e, o) {
    if (e == null) return {};
    var r = It(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function It(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var je = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = Bt(e, ["color", "size"]);
    return l.createElement("svg", B({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("line", {
        x1: "5",
        y1: "12",
        x2: "19",
        y2: "12"
    }))
});
je.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
je.displayName = "Minus";

function I() {
    return I = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, I.apply(this, arguments)
}

function St(e, o) {
    if (e == null) return {};
    var r = Rt(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function Rt(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var xe = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = St(e, ["color", "size"]);
    return l.createElement("svg", I({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "1"
    }), l.createElement("circle", {
        cx: "12",
        cy: "5",
        r: "1"
    }), l.createElement("circle", {
        cx: "12",
        cy: "19",
        r: "1"
    }))
});
xe.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
xe.displayName = "MoreVertical";

function S() {
    return S = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, S.apply(this, arguments)
}

function Nt(e, o) {
    if (e == null) return {};
    var r = Mt(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function Mt(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var ze = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = Nt(e, ["color", "size"]);
    return l.createElement("svg", S({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("path", {
        d: "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"
    }))
});
ze.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
ze.displayName = "Paperclip";

function R() {
    return R = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, R.apply(this, arguments)
}

function Ht(e, o) {
    if (e == null) return {};
    var r = At(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function At(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var ke = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = Ht(e, ["color", "size"]);
    return l.createElement("svg", R({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("line", {
        x1: "19",
        y1: "5",
        x2: "5",
        y2: "19"
    }), l.createElement("circle", {
        cx: "6.5",
        cy: "6.5",
        r: "2.5"
    }), l.createElement("circle", {
        cx: "17.5",
        cy: "17.5",
        r: "2.5"
    }))
});
ke.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
ke.displayName = "Percent";

function N() {
    return N = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, N.apply(this, arguments)
}

function Vt(e, o) {
    if (e == null) return {};
    var r = Dt(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function Dt(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var Pe = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = Vt(e, ["color", "size"]);
    return l.createElement("svg", N({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("path", {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    }))
});
Pe.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
Pe.displayName = "Phone";

function M() {
    return M = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, M.apply(this, arguments)
}

function Ft(e, o) {
    if (e == null) return {};
    var r = Ut(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function Ut(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var $e = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = Ft(e, ["color", "size"]);
    return l.createElement("svg", M({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "10"
    }), l.createElement("line", {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "16"
    }), l.createElement("line", {
        x1: "8",
        y1: "12",
        x2: "16",
        y2: "12"
    }))
});
$e.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
$e.displayName = "PlusCircle";

function H() {
    return H = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, H.apply(this, arguments)
}

function qt(e, o) {
    if (e == null) return {};
    var r = Xt(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function Xt(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var Ee = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = qt(e, ["color", "size"]);
    return l.createElement("svg", H({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("line", {
        x1: "12",
        y1: "5",
        x2: "12",
        y2: "19"
    }), l.createElement("line", {
        x1: "5",
        y1: "12",
        x2: "19",
        y2: "12"
    }))
});
Ee.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
Ee.displayName = "Plus";

function A() {
    return A = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, A.apply(this, arguments)
}

function Gt(e, o) {
    if (e == null) return {};
    var r = Zt(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function Zt(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var Le = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = Gt(e, ["color", "size"]);
    return l.createElement("svg", A({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("path", {
        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
    }))
});
Le.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
Le.displayName = "Shield";

function V() {
    return V = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, V.apply(this, arguments)
}

function Jt(e, o) {
    if (e == null) return {};
    var r = Kt(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function Kt(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var _e = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = Jt(e, ["color", "size"]);
    return l.createElement("svg", V({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("circle", {
        cx: "9",
        cy: "21",
        r: "1"
    }), l.createElement("circle", {
        cx: "20",
        cy: "21",
        r: "1"
    }), l.createElement("path", {
        d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
    }))
});
_e.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
_e.displayName = "ShoppingCart";

function D() {
    return D = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, D.apply(this, arguments)
}

function Qt(e, o) {
    if (e == null) return {};
    var r = Yt(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function Yt(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var We = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = Qt(e, ["color", "size"]);
    return l.createElement("svg", D({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("polygon", {
        points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
    }))
});
We.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
We.displayName = "Star";

function F() {
    return F = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, F.apply(this, arguments)
}

function er(e, o) {
    if (e == null) return {};
    var r = tr(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function tr(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var Te = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = er(e, ["color", "size"]);
    return l.createElement("svg", F({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("path", {
        d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
    }), l.createElement("line", {
        x1: "7",
        y1: "7",
        x2: "7.01",
        y2: "7"
    }))
});
Te.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
Te.displayName = "Tag";

function U() {
    return U = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, U.apply(this, arguments)
}

function rr(e, o) {
    if (e == null) return {};
    var r = nr(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function nr(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var Ce = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = rr(e, ["color", "size"]);
    return l.createElement("svg", U({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("polyline", {
        points: "3 6 5 6 21 6"
    }), l.createElement("path", {
        d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
    }), l.createElement("line", {
        x1: "10",
        y1: "11",
        x2: "10",
        y2: "17"
    }), l.createElement("line", {
        x1: "14",
        y1: "11",
        x2: "14",
        y2: "17"
    }))
});
Ce.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
Ce.displayName = "Trash2";

function q() {
    return q = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, q.apply(this, arguments)
}

function or(e, o) {
    if (e == null) return {};
    var r = ir(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function ir(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var Be = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = or(e, ["color", "size"]);
    return l.createElement("svg", q({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("rect", {
        x: "1",
        y: "3",
        width: "15",
        height: "13"
    }), l.createElement("polygon", {
        points: "16 8 20 8 23 11 23 16 16 16 16 8"
    }), l.createElement("circle", {
        cx: "5.5",
        cy: "18.5",
        r: "2.5"
    }), l.createElement("circle", {
        cx: "18.5",
        cy: "18.5",
        r: "2.5"
    }))
});
Be.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
Be.displayName = "Truck";

function X() {
    return X = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, X.apply(this, arguments)
}

function ar(e, o) {
    if (e == null) return {};
    var r = lr(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function lr(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var Ie = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = ar(e, ["color", "size"]);
    return l.createElement("svg", X({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("path", {
        d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
    }), l.createElement("circle", {
        cx: "9",
        cy: "7",
        r: "4"
    }), l.createElement("path", {
        d: "M23 21v-2a4 4 0 0 0-3-3.87"
    }), l.createElement("path", {
        d: "M16 3.13a4 4 0 0 1 0 7.75"
    }))
});
Ie.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
Ie.displayName = "Users";

function G() {
    return G = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, G.apply(this, arguments)
}

function sr(e, o) {
    if (e == null) return {};
    var r = fr(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function fr(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var Se = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = sr(e, ["color", "size"]);
    return l.createElement("svg", G({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("path", {
        d: "M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"
    }))
});
Se.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
Se.displayName = "Wind";

function Z() {
    return Z = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, Z.apply(this, arguments)
}

function pr(e, o) {
    if (e == null) return {};
    var r = cr(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function cr(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var Re = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = pr(e, ["color", "size"]);
    return l.createElement("svg", Z({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "10"
    }), l.createElement("line", {
        x1: "15",
        y1: "9",
        x2: "9",
        y2: "15"
    }), l.createElement("line", {
        x1: "9",
        y1: "9",
        x2: "15",
        y2: "15"
    }))
});
Re.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
Re.displayName = "XCircle";

function J() {
    return J = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, J.apply(this, arguments)
}

function ur(e, o) {
    if (e == null) return {};
    var r = gr(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function gr(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var Ne = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = ur(e, ["color", "size"]);
    return l.createElement("svg", J({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), l.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    }))
});
Ne.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
Ne.displayName = "X";

function K() {
    return K = Object.assign || function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }
        return e
    }, K.apply(this, arguments)
}

function vr(e, o) {
    if (e == null) return {};
    var r = yr(e, o),
        t, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
}

function yr(e, o) {
    if (e == null) return {};
    var r = {},
        t = Object.keys(e),
        n, i;
    for (i = 0; i < t.length; i++) n = t[i], !(o.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var Me = f.forwardRef(function(e, o) {
    var r = e.color,
        t = r === void 0 ? "currentColor" : r,
        n = e.size,
        i = n === void 0 ? 24 : n,
        s = vr(e, ["color", "size"]);
    return l.createElement("svg", K({
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, s), l.createElement("polygon", {
        points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
    }))
});
Me.propTypes = {
    color: a.string,
    size: a.oneOfType([a.string, a.number])
};
Me.displayName = "Zap";
export {
    Q as A, ne as B, ie as C, ce as E, ue as F, ge as G, ve as H, he as I, me as L, je as M, ze as P, _e as S, Ce as T, Ie as U, Se as W, Ne as X, Me as Z, Oe as a, pe as b, le as c, Ee as d, ee as e, Te as f, te as g, oe as h, Y as i, Be as j, Re as k, ae as l, We as m, xe as n, se as o, ye as p, we as q, $e as r, Pe as s, de as t, be as u, fe as v, Le as w, re as x, ke as y
};
//# sourceMappingURL=react-ui-CLI46-or.js.map