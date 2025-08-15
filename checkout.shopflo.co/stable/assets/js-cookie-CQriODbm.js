/*! js-cookie v3.0.5 | MIT */
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {},
            o = new e.Error().stack;
        o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "9f69031e-0d22-4315-bd02-4d2fc037172d", e._sentryDebugIdIdentifier = "sentry-dbid-9f69031e-0d22-4315-bd02-4d2fc037172d")
    } catch (d) {}
})();

function p(e) {
    for (var o = 1; o < arguments.length; o++) {
        var d = arguments[o];
        for (var f in d) e[f] = d[f]
    }
    return e
}
var l = {
    read: function(e) {
        return e[0] === '"' && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    },
    write: function(e) {
        return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
    }
};

function u(e, o) {
    function d(r, c, n) {
        if (typeof document != "undefined") {
            n = p({}, o, n), typeof n.expires == "number" && (n.expires = new Date(Date.now() + n.expires * 864e5)), n.expires && (n.expires = n.expires.toUTCString()), r = encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var i = "";
            for (var t in n) n[t] && (i += "; " + t, n[t] !== !0 && (i += "=" + n[t].split(";")[0]));
            return document.cookie = r + "=" + e.write(c, r) + i
        }
    }

    function f(r) {
        if (!(typeof document == "undefined" || arguments.length && !r)) {
            for (var c = document.cookie ? document.cookie.split("; ") : [], n = {}, i = 0; i < c.length; i++) {
                var t = c[i].split("="),
                    g = t.slice(1).join("=");
                try {
                    var s = decodeURIComponent(t[0]);
                    if (n[s] = e.read(g, s), r === s) break
                } catch (a) {}
            }
            return r ? n[r] : n
        }
    }
    return Object.create({
        set: d,
        get: f,
        remove: function(r, c) {
            d(r, "", p({}, c, {
                expires: -1
            }))
        },
        withAttributes: function(r) {
            return u(this.converter, p({}, this.attributes, r))
        },
        withConverter: function(r) {
            return u(p({}, this.converter, r), this.attributes)
        }
    }, {
        attributes: {
            value: Object.freeze(o)
        },
        converter: {
            value: Object.freeze(e)
        }
    })
}
var v = u(l, {
    path: "/"
});
export {
    v as a
};
//# sourceMappingURL=js-cookie-CQriODbm.js.map