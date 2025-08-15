import {
    b as z,
    _ as ce,
    c as fe,
    S as Z,
    g as I,
    T as pe,
    U as le
} from "./vendor-DWBJvUkq.js";
import {
    r as l
} from "./react-core-C02-NrKc.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e8fef2d3-526a-4afb-855e-909cf9b917f9", e._sentryDebugIdIdentifier = "sentry-dbid-e8fef2d3-526a-4afb-855e-909cf9b917f9")
    } catch (n) {}
})();
var ve = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
    ge = {
        "&amp;": "&",
        "&#38;": "&",
        "&lt;": "<",
        "&#60;": "<",
        "&gt;": ">",
        "&#62;": ">",
        "&apos;": "'",
        "&#39;": "'",
        "&quot;": '"',
        "&#34;": '"',
        "&nbsp;": " ",
        "&#160;": " ",
        "&copy;": "©",
        "&#169;": "©",
        "&reg;": "®",
        "&#174;": "®",
        "&hellip;": "…",
        "&#8230;": "…",
        "&#x2F;": "/",
        "&#47;": "/"
    },
    ye = function(t) {
        return ge[t]
    },
    me = function(t) {
        return t.replace(ve, ye)
    };

function q(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(p) {
            return Object.getOwnPropertyDescriptor(e, p).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? q(Object(n), !0).forEach(function(r) {
            z(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
var $ = {
        bindI18n: "languageChanged",
        bindI18nStore: "",
        transEmptyNodeValue: "",
        transSupportBasicHtmlNodes: !0,
        transWrapTextNodes: "",
        transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
        useSuspense: !0,
        unescape: me
    },
    _, ee = l.createContext();

function de() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    $ = R(R({}, $), e)
}

function te() {
    return $
}
var be = function() {
    function e() {
        fe(this, e), this.usedNamespaces = {}
    }
    return ce(e, [{
        key: "addUsedNamespaces",
        value: function(n) {
            var r = this;
            n.forEach(function(p) {
                r.usedNamespaces[p] || (r.usedNamespaces[p] = !0)
            })
        }
    }, {
        key: "getUsedNamespaces",
        value: function() {
            return Object.keys(this.usedNamespaces)
        }
    }]), e
}();

function Oe(e) {
    _ = e
}

function ne() {
    return _
}
var Ie = {
    type: "3rdParty",
    init: function(t) {
        de(t.options.react), Oe(t)
    }
};

function F() {
    if (console && console.warn) {
        for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        typeof n[0] == "string" && (n[0] = "react-i18next:: ".concat(n[0])), (e = console).warn.apply(e, n)
    }
}
var Y = {};

function L() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    typeof t[0] == "string" && Y[t[0]] || (typeof t[0] == "string" && (Y[t[0]] = new Date), F.apply(void 0, t))
}

function X(e, t, n) {
    e.loadNamespaces(t, function() {
        if (e.isInitialized) n();
        else {
            var r = function p() {
                setTimeout(function() {
                    e.off("initialized", p)
                }, 0), n()
            };
            e.on("initialized", r)
        }
    })
}

function he(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
        r = t.languages[0],
        p = t.options ? t.options.fallbackLng : !1,
        o = t.languages[t.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    var a = function(b, v) {
        var S = t.services.backendConnector.state["".concat(b, "|").concat(v)];
        return S === -1 || S === 2
    };
    return n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !a(t.isLanguageChangingTo, e) ? !1 : !!(t.hasResourceBundle(r, e) || !t.services.backendConnector.backend || t.options.resources && !t.options.partialBundledLanguages || a(r, e) && (!p || a(o, e)))
}

function je(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!t.languages || !t.languages.length) return L("i18n.languages were undefined or empty", t.languages), !0;
    var r = t.options.ignoreJSONStructure !== void 0;
    return r ? t.hasLoadedNamespace(e, {
        precheck: function(o, a) {
            if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !a(o.isLanguageChangingTo, e)) return !1
        }
    }) : he(e, t, n)
}
var we = ["format"],
    Ne = ["children", "count", "parent", "i18nKey", "context", "tOptions", "values", "defaults", "components", "ns", "i18n", "t", "shouldUnescape"];

function G(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(p) {
            return Object.getOwnPropertyDescriptor(e, p).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? G(Object(n), !0).forEach(function(r) {
            z(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : G(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}

function K(e, t) {
    if (!e) return !1;
    var n = e.props ? e.props.children : e.children;
    return t ? n.length > 0 : !!n
}

function U(e) {
    return e ? e.props ? e.props.children : e.children : []
}

function Pe(e) {
    return Object.prototype.toString.call(e) !== "[object Array]" ? !1 : e.every(function(t) {
        return l.isValidElement(t)
    })
}

function C(e) {
    return Array.isArray(e) ? e : [e]
}

function Ee(e, t) {
    var n = m({}, t);
    return n.props = Object.assign(e.props, t.props), n
}

function re(e, t) {
    if (!e) return "";
    var n = "",
        r = C(e),
        p = t.transSupportBasicHtmlNodes && t.transKeepBasicHtmlNodesFor ? t.transKeepBasicHtmlNodesFor : [];
    return r.forEach(function(o, a) {
        if (typeof o == "string") n += "".concat(o);
        else if (l.isValidElement(o)) {
            var j = Object.keys(o.props).length,
                b = p.indexOf(o.type) > -1,
                v = o.props.children;
            if (!v && b && j === 0) n += "<".concat(o.type, "/>");
            else if (!v && (!b || j !== 0)) n += "<".concat(a, "></").concat(a, ">");
            else if (o.props.i18nIsDynamicList) n += "<".concat(a, "></").concat(a, ">");
            else if (b && j === 1 && typeof v == "string") n += "<".concat(o.type, ">").concat(v, "</").concat(o.type, ">");
            else {
                var S = re(v, t);
                n += "<".concat(a, ">").concat(S, "</").concat(a, ">")
            }
        } else if (o === null) F("Trans: the passed in value is invalid - seems you passed in a null child.");
        else if (I(o) === "object") {
            var E = o.format,
                d = Z(o, we),
                w = Object.keys(d);
            if (w.length === 1) {
                var N = E ? "".concat(w[0], ", ").concat(E) : w[0];
                n += "{{".concat(N, "}}")
            } else F("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", o)
        } else F("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", o)
    }), n
}

function xe(e, t, n, r, p, o) {
    if (t === "") return [];
    var a = r.transKeepBasicHtmlNodesFor || [],
        j = t && new RegExp(a.join("|")).test(t);
    if (!e && !j) return [t];
    var b = {};

    function v(O) {
        var P = C(O);
        P.forEach(function(u) {
            typeof u != "string" && (K(u) ? v(U(u)) : I(u) === "object" && !l.isValidElement(u) && Object.assign(b, u))
        })
    }
    v(e);
    var S = pe.parse("<0>".concat(t, "</0>")),
        E = m(m({}, b), p);

    function d(O, P, u) {
        var f = U(O),
            x = N(f, P.children, u);
        return Pe(f) && x.length === 0 ? f : x
    }

    function w(O, P, u, f, x) {
        O.dummy && (O.children = P), u.push(l.cloneElement(O, m(m({}, O.props), {}, {
            key: f
        }), x ? void 0 : P))
    }

    function N(O, P, u) {
        var f = C(O),
            x = C(P);
        return x.reduce(function(i, s, g) {
            var h = s.children && s.children[0] && s.children[0].content && n.services.interpolator.interpolate(s.children[0].content, E, n.language);
            if (s.type === "tag") {
                var y = f[parseInt(s.name, 10)];
                !y && u.length === 1 && u[0][s.name] && (y = u[0][s.name]), y || (y = {});
                var c = Object.keys(s.attrs).length !== 0 ? Ee({
                        props: s.attrs
                    }, y) : y,
                    T = l.isValidElement(c),
                    H = T && K(s, !0) && !s.voidElement,
                    D = j && I(c) === "object" && c.dummy && !T,
                    A = I(e) === "object" && e !== null && Object.hasOwnProperty.call(e, s.name);
                if (typeof c == "string") {
                    var B = n.services.interpolator.interpolate(c, E, n.language);
                    i.push(B)
                } else if (K(c) || H) {
                    var ae = d(c, s, u);
                    w(c, ae, i, g)
                } else if (D) {
                    var se = N(f, s.children, u);
                    i.push(l.cloneElement(c, m(m({}, c.props), {}, {
                        key: g
                    }), se))
                } else if (Number.isNaN(parseFloat(s.name)))
                    if (A) {
                        var oe = d(c, s, u);
                        w(c, oe, i, g, s.voidElement)
                    } else if (r.transSupportBasicHtmlNodes && a.indexOf(s.name) > -1)
                    if (s.voidElement) i.push(l.createElement(s.name, {
                        key: "".concat(s.name, "-").concat(g)
                    }));
                    else {
                        var ie = N(f, s.children, u);
                        i.push(l.createElement(s.name, {
                            key: "".concat(s.name, "-").concat(g)
                        }, ie))
                    }
                else if (s.voidElement) i.push("<".concat(s.name, " />"));
                else {
                    var ue = N(f, s.children, u);
                    i.push("<".concat(s.name, ">").concat(ue, "</").concat(s.name, ">"))
                } else if (I(c) === "object" && !T) {
                    var W = s.children[0] ? h : null;
                    W && i.push(W)
                } else s.children.length === 1 && h ? i.push(l.cloneElement(c, m(m({}, c.props), {}, {
                    key: g
                }), h)) : i.push(l.cloneElement(c, m(m({}, c.props), {}, {
                    key: g
                })))
            } else if (s.type === "text") {
                var J = r.transWrapTextNodes,
                    M = o ? r.unescape(n.services.interpolator.interpolate(s.content, E, n.language)) : n.services.interpolator.interpolate(s.content, E, n.language);
                J ? i.push(l.createElement(J, {
                    key: "".concat(s.name, "-").concat(g)
                }, M)) : i.push(M)
            }
            return i
        }, [])
    }
    var k = N([{
        dummy: !0,
        children: e || []
    }], S, C(e || []));
    return U(k[0])
}

function Ce(e) {
    var t = e.children,
        n = e.count,
        r = e.parent,
        p = e.i18nKey,
        o = e.context,
        a = e.tOptions,
        j = a === void 0 ? {} : a,
        b = e.values,
        v = e.defaults,
        S = e.components,
        E = e.ns,
        d = e.i18n,
        w = e.t,
        N = e.shouldUnescape,
        k = Z(e, Ne),
        O = l.useContext(ee) || {},
        P = O.i18n,
        u = O.defaultNS,
        f = d || P || ne();
    if (!f) return L("You will need to pass in an i18next instance by using i18nextReactModule"), t;
    var x = w || f.t.bind(f) || function(B) {
        return B
    };
    o && (j.context = o);
    var i = m(m({}, te()), f.options && f.options.react),
        s = E || x.ns || u || f.options && f.options.defaultNS;
    s = typeof s == "string" ? [s] : s || ["translation"];
    var g = v || re(t, i) || i.transEmptyNodeValue || p,
        h = i.hashTransKey,
        y = p || (h ? h(g) : g),
        c = b ? j.interpolation : {
            interpolation: m(m({}, j.interpolation), {}, {
                prefix: "#$?",
                suffix: "?$#"
            })
        },
        T = m(m(m(m({}, j), {}, {
            count: n
        }, b), c), {}, {
            defaultValue: g,
            ns: s
        }),
        H = y ? x(y, T) : g,
        D = xe(S || t, H, f, i, T, N),
        A = r !== void 0 ? r : i.defaultTransParent;
    return A ? l.createElement(A, k, D) : D
}

function Q(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(p) {
            return Object.getOwnPropertyDescriptor(e, p).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function V(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Q(Object(n), !0).forEach(function(r) {
            z(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Q(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
var Se = function(t, n) {
    var r = l.useRef();
    return l.useEffect(function() {
        r.current = t
    }, [t, n]), r.current
};

function De(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        n = t.i18n,
        r = l.useContext(ee) || {},
        p = r.i18n,
        o = r.defaultNS,
        a = n || p || ne();
    if (a && !a.reportNamespaces && (a.reportNamespaces = new be), !a) {
        L("You will need to pass in an i18next instance by using initReactI18next");
        var j = function(y) {
                return Array.isArray(y) ? y[y.length - 1] : y
            },
            b = [j, {}, !1];
        return b.t = j, b.i18n = {}, b.ready = !1, b
    }
    a.options.react && a.options.react.wait !== void 0 && L("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
    var v = V(V(V({}, te()), a.options.react), t),
        S = v.useSuspense,
        E = v.keyPrefix,
        d = o || a.options && a.options.defaultNS;
    d = typeof d == "string" ? [d] : d || ["translation"], a.reportNamespaces.addUsedNamespaces && a.reportNamespaces.addUsedNamespaces(d);
    var w = (a.isInitialized || a.initializedStoreOnce) && d.every(function(h) {
        return je(h, a, v)
    });

    function N() {
        return a.getFixedT(null, v.nsMode === "fallback" ? d : d[0], E)
    }
    var k = l.useState(N),
        O = le(k, 2),
        P = O[0],
        u = O[1],
        f = d.join(),
        x = Se(f),
        i = l.useRef(!0);
    l.useEffect(function() {
        var h = v.bindI18n,
            y = v.bindI18nStore;
        i.current = !0, !w && !S && X(a, d, function() {
            i.current && u(N)
        }), w && x && x !== f && i.current && u(N);

        function c() {
            i.current && u(N)
        }
        return h && a && a.on(h, c), y && a && a.store.on(y, c),
            function() {
                i.current = !1, h && a && h.split(" ").forEach(function(T) {
                    return a.off(T, c)
                }), y && a && y.split(" ").forEach(function(T) {
                    return a.store.off(T, c)
                })
            }
    }, [a, f]);
    var s = l.useRef(!0);
    l.useEffect(function() {
        i.current && !s.current && u(N), s.current = !1
    }, [a, E]);
    var g = [P, a, w];
    if (g.t = P, g.i18n = a, g.ready = w, w || !w && !S) return g;
    throw new Promise(function(h) {
        X(a, d, function() {
            h()
        })
    })
}
export {
    Ce as T, Ie as i, De as u
};
//# sourceMappingURL=react-i18next-_5H4tnk_.js.map