(() => {
    var Fe = Object.create;
    var _e = Object.defineProperty;
    var we = Object.getOwnPropertyDescriptor;
    var Ge = Object.getOwnPropertyNames;
    var Qe = Object.getPrototypeOf,
        Ye = Object.prototype.hasOwnProperty;
    var L = (e, u) => () => (e && (u = e(e = 0)), u);
    var g = (e, u) => () => (u || e((u = {
        exports: {}
    }).exports, u), u.exports);
    var Ze = (e, u, t, n) => {
        if (u && typeof u == "object" || typeof u == "function")
            for (let r of Ge(u)) !Ye.call(e, r) && r !== t && _e(e, r, {
                get: () => u[r],
                enumerable: !(n = we(u, r)) || n.enumerable
            });
        return e
    };
    var je = (e, u, t) => (t = e != null ? Fe(Qe(e)) : {}, Ze(u || !e || !e.__esModule ? _e(t, "default", {
        value: e,
        enumerable: !0
    }) : t, e));
    var C = (e, u, t) => new Promise((n, r) => {
        var f = l => {
                try {
                    a(t.next(l))
                } catch (o) {
                    r(o)
                }
            },
            i = l => {
                try {
                    a(t.throw(l))
                } catch (o) {
                    r(o)
                }
            },
            a = l => l.done ? n(l.value) : Promise.resolve(l.value).then(f, i);
        a((t = t.apply(e, u)).next())
    });
    var ve, pe = L(() => {
        ve = "WebPixel::Render"
    });
    var b, he = L(() => {
        pe();
        b = e => shopify.extend(ve, e)
    });
    var ye = L(() => {
        he()
    });
    var me = L(() => {
        ye()
    });
    var te = g(ee => {
        "use strict";
        Object.defineProperty(ee, "__esModule", {
            value: !0
        });
        ee.default = be;
        var V, ze = new Uint8Array(16);

        function be() {
            if (!V && (V = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !V)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return V(ze)
        }
    });
    var Ie = g(k => {
        "use strict";
        Object.defineProperty(k, "__esModule", {
            value: !0
        });
        k.default = void 0;
        var et = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
        k.default = et
    });
    var A = g(J => {
        "use strict";
        Object.defineProperty(J, "__esModule", {
            value: !0
        });
        J.default = void 0;
        var tt = nt(Ie());

        function nt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function rt(e) {
            return typeof e == "string" && tt.default.test(e)
        }
        var ft = rt;
        J.default = ft
    });
    var x = g(D => {
        "use strict";
        Object.defineProperty(D, "__esModule", {
            value: !0
        });
        D.default = void 0;
        D.unsafeStringify = Oe;
        var ut = it(A());

        function it(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var _ = [];
        for (let e = 0; e < 256; ++e) _.push((e + 256).toString(16).slice(1));

        function Oe(e, u = 0) {
            return _[e[u + 0]] + _[e[u + 1]] + _[e[u + 2]] + _[e[u + 3]] + "-" + _[e[u + 4]] + _[e[u + 5]] + "-" + _[e[u + 6]] + _[e[u + 7]] + "-" + _[e[u + 8]] + _[e[u + 9]] + "-" + _[e[u + 10]] + _[e[u + 11]] + _[e[u + 12]] + _[e[u + 13]] + _[e[u + 14]] + _[e[u + 15]]
        }

        function at(e, u = 0) {
            let t = Oe(e, u);
            if (!(0, ut.default)(t)) throw TypeError("Stringified UUID is invalid");
            return t
        }
        var lt = at;
        D.default = lt
    });
    var Se = g(W => {
        "use strict";
        Object.defineProperty(W, "__esModule", {
            value: !0
        });
        W.default = void 0;
        var ot = dt(te()),
            ct = x();

        function dt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var qe, ne, re = 0,
            fe = 0;

        function st(e, u, t) {
            let n = u && t || 0,
                r = u || new Array(16);
            e = e || {};
            let f = e.node || qe,
                i = e.clockseq !== void 0 ? e.clockseq : ne;
            if (f == null || i == null) {
                let s = e.random || (e.rng || ot.default)();
                f == null && (f = qe = [s[0] | 1, s[1], s[2], s[3], s[4], s[5]]), i == null && (i = ne = (s[6] << 8 | s[7]) & 16383)
            }
            let a = e.msecs !== void 0 ? e.msecs : Date.now(),
                l = e.nsecs !== void 0 ? e.nsecs : fe + 1,
                o = a - re + (l - fe) / 1e4;
            if (o < 0 && e.clockseq === void 0 && (i = i + 1 & 16383), (o < 0 || a > re) && e.nsecs === void 0 && (l = 0), l >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            re = a, fe = l, ne = i, a += 122192928e5;
            let d = ((a & 268435455) * 1e4 + l) % 4294967296;
            r[n++] = d >>> 24 & 255, r[n++] = d >>> 16 & 255, r[n++] = d >>> 8 & 255, r[n++] = d & 255;
            let m = a / 4294967296 * 1e4 & 268435455;
            r[n++] = m >>> 8 & 255, r[n++] = m & 255, r[n++] = m >>> 24 & 15 | 16, r[n++] = m >>> 16 & 255, r[n++] = i >>> 8 | 128, r[n++] = i & 255;
            for (let s = 0; s < 6; ++s) r[n + s] = f[s];
            return u || (0, ct.unsafeStringify)(r)
        }
        var gt = st;
        W.default = gt
    });
    var ue = g($ => {
        "use strict";
        Object.defineProperty($, "__esModule", {
            value: !0
        });
        $.default = void 0;
        var _t = vt(A());

        function vt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function pt(e) {
            if (!(0, _t.default)(e)) throw TypeError("Invalid UUID");
            let u, t = new Uint8Array(16);
            return t[0] = (u = parseInt(e.slice(0, 8), 16)) >>> 24, t[1] = u >>> 16 & 255, t[2] = u >>> 8 & 255, t[3] = u & 255, t[4] = (u = parseInt(e.slice(9, 13), 16)) >>> 8, t[5] = u & 255, t[6] = (u = parseInt(e.slice(14, 18), 16)) >>> 8, t[7] = u & 255, t[8] = (u = parseInt(e.slice(19, 23), 16)) >>> 8, t[9] = u & 255, t[10] = (u = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255, t[11] = u / 4294967296 & 255, t[12] = u >>> 24 & 255, t[13] = u >>> 16 & 255, t[14] = u >>> 8 & 255, t[15] = u & 255, t
        }
        var ht = pt;
        $.default = ht
    });
    var ie = g(P => {
        "use strict";
        Object.defineProperty(P, "__esModule", {
            value: !0
        });
        P.URL = P.DNS = void 0;
        P.default = qt;
        var yt = x(),
            mt = It(ue());

        function It(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function Ot(e) {
            e = unescape(encodeURIComponent(e));
            let u = [];
            for (let t = 0; t < e.length; ++t) u.push(e.charCodeAt(t));
            return u
        }
        var Pe = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
        P.DNS = Pe;
        var Ue = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
        P.URL = Ue;

        function qt(e, u, t) {
            function n(r, f, i, a) {
                var l;
                if (typeof r == "string" && (r = Ot(r)), typeof f == "string" && (f = (0, mt.default)(f)), ((l = f) === null || l === void 0 ? void 0 : l.length) !== 16) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
                let o = new Uint8Array(16 + r.length);
                if (o.set(f), o.set(r, f.length), o = t(o), o[6] = o[6] & 15 | u, o[8] = o[8] & 63 | 128, i) {
                    a = a || 0;
                    for (let d = 0; d < 16; ++d) i[a + d] = o[d];
                    return i
                }
                return (0, yt.unsafeStringify)(o)
            }
            try {
                n.name = e
            } catch (r) {}
            return n.DNS = Pe, n.URL = Ue, n
        }
    });
    var Re = g(K => {
        "use strict";
        Object.defineProperty(K, "__esModule", {
            value: !0
        });
        K.default = void 0;

        function St(e) {
            if (typeof e == "string") {
                let u = unescape(encodeURIComponent(e));
                e = new Uint8Array(u.length);
                for (let t = 0; t < u.length; ++t) e[t] = u.charCodeAt(t)
            }
            return Pt(Ut(Mt(e), e.length * 8))
        }

        function Pt(e) {
            let u = [],
                t = e.length * 32,
                n = "0123456789abcdef";
            for (let r = 0; r < t; r += 8) {
                let f = e[r >> 5] >>> r % 32 & 255,
                    i = parseInt(n.charAt(f >>> 4 & 15) + n.charAt(f & 15), 16);
                u.push(i)
            }
            return u
        }

        function Me(e) {
            return (e + 64 >>> 9 << 4) + 14 + 1
        }

        function Ut(e, u) {
            e[u >> 5] |= 128 << u % 32, e[Me(u) - 1] = u;
            let t = 1732584193,
                n = -271733879,
                r = -1732584194,
                f = 271733878;
            for (let i = 0; i < e.length; i += 16) {
                let a = t,
                    l = n,
                    o = r,
                    d = f;
                t = v(t, n, r, f, e[i], 7, -680876936), f = v(f, t, n, r, e[i + 1], 12, -389564586), r = v(r, f, t, n, e[i + 2], 17, 606105819), n = v(n, r, f, t, e[i + 3], 22, -1044525330), t = v(t, n, r, f, e[i + 4], 7, -176418897), f = v(f, t, n, r, e[i + 5], 12, 1200080426), r = v(r, f, t, n, e[i + 6], 17, -1473231341), n = v(n, r, f, t, e[i + 7], 22, -45705983), t = v(t, n, r, f, e[i + 8], 7, 1770035416), f = v(f, t, n, r, e[i + 9], 12, -1958414417), r = v(r, f, t, n, e[i + 10], 17, -42063), n = v(n, r, f, t, e[i + 11], 22, -1990404162), t = v(t, n, r, f, e[i + 12], 7, 1804603682), f = v(f, t, n, r, e[i + 13], 12, -40341101), r = v(r, f, t, n, e[i + 14], 17, -1502002290), n = v(n, r, f, t, e[i + 15], 22, 1236535329), t = p(t, n, r, f, e[i + 1], 5, -165796510), f = p(f, t, n, r, e[i + 6], 9, -1069501632), r = p(r, f, t, n, e[i + 11], 14, 643717713), n = p(n, r, f, t, e[i], 20, -373897302), t = p(t, n, r, f, e[i + 5], 5, -701558691), f = p(f, t, n, r, e[i + 10], 9, 38016083), r = p(r, f, t, n, e[i + 15], 14, -660478335), n = p(n, r, f, t, e[i + 4], 20, -405537848), t = p(t, n, r, f, e[i + 9], 5, 568446438), f = p(f, t, n, r, e[i + 14], 9, -1019803690), r = p(r, f, t, n, e[i + 3], 14, -187363961), n = p(n, r, f, t, e[i + 8], 20, 1163531501), t = p(t, n, r, f, e[i + 13], 5, -1444681467), f = p(f, t, n, r, e[i + 2], 9, -51403784), r = p(r, f, t, n, e[i + 7], 14, 1735328473), n = p(n, r, f, t, e[i + 12], 20, -1926607734), t = h(t, n, r, f, e[i + 5], 4, -378558), f = h(f, t, n, r, e[i + 8], 11, -2022574463), r = h(r, f, t, n, e[i + 11], 16, 1839030562), n = h(n, r, f, t, e[i + 14], 23, -35309556), t = h(t, n, r, f, e[i + 1], 4, -1530992060), f = h(f, t, n, r, e[i + 4], 11, 1272893353), r = h(r, f, t, n, e[i + 7], 16, -155497632), n = h(n, r, f, t, e[i + 10], 23, -1094730640), t = h(t, n, r, f, e[i + 13], 4, 681279174), f = h(f, t, n, r, e[i], 11, -358537222), r = h(r, f, t, n, e[i + 3], 16, -722521979), n = h(n, r, f, t, e[i + 6], 23, 76029189), t = h(t, n, r, f, e[i + 9], 4, -640364487), f = h(f, t, n, r, e[i + 12], 11, -421815835), r = h(r, f, t, n, e[i + 15], 16, 530742520), n = h(n, r, f, t, e[i + 2], 23, -995338651), t = y(t, n, r, f, e[i], 6, -198630844), f = y(f, t, n, r, e[i + 7], 10, 1126891415), r = y(r, f, t, n, e[i + 14], 15, -1416354905), n = y(n, r, f, t, e[i + 5], 21, -57434055), t = y(t, n, r, f, e[i + 12], 6, 1700485571), f = y(f, t, n, r, e[i + 3], 10, -1894986606), r = y(r, f, t, n, e[i + 10], 15, -1051523), n = y(n, r, f, t, e[i + 1], 21, -2054922799), t = y(t, n, r, f, e[i + 8], 6, 1873313359), f = y(f, t, n, r, e[i + 15], 10, -30611744), r = y(r, f, t, n, e[i + 6], 15, -1560198380), n = y(n, r, f, t, e[i + 13], 21, 1309151649), t = y(t, n, r, f, e[i + 4], 6, -145523070), f = y(f, t, n, r, e[i + 11], 10, -1120210379), r = y(r, f, t, n, e[i + 2], 15, 718787259), n = y(n, r, f, t, e[i + 9], 21, -343485551), t = S(t, a), n = S(n, l), r = S(r, o), f = S(f, d)
            }
            return [t, n, r, f]
        }

        function Mt(e) {
            if (e.length === 0) return [];
            let u = e.length * 8,
                t = new Uint32Array(Me(u));
            for (let n = 0; n < u; n += 8) t[n >> 5] |= (e[n / 8] & 255) << n % 32;
            return t
        }

        function S(e, u) {
            let t = (e & 65535) + (u & 65535);
            return (e >> 16) + (u >> 16) + (t >> 16) << 16 | t & 65535
        }

        function Rt(e, u) {
            return e << u | e >>> 32 - u
        }

        function H(e, u, t, n, r, f) {
            return S(Rt(S(S(u, e), S(n, f)), r), t)
        }

        function v(e, u, t, n, r, f, i) {
            return H(u & t | ~u & n, e, u, r, f, i)
        }

        function p(e, u, t, n, r, f, i) {
            return H(u & n | t & ~n, e, u, r, f, i)
        }

        function h(e, u, t, n, r, f, i) {
            return H(u ^ t ^ n, e, u, r, f, i)
        }

        function y(e, u, t, n, r, f, i) {
            return H(t ^ (u | ~n), e, u, r, f, i)
        }
        var At = St;
        K.default = At
    });
    var De = g(B => {
        "use strict";
        Object.defineProperty(B, "__esModule", {
            value: !0
        });
        B.default = void 0;
        var Dt = Ae(ie()),
            xt = Ae(Re());

        function Ae(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Tt = (0, Dt.default)("v3", 48, xt.default),
            Nt = Tt;
        B.default = Nt
    });
    var xe = g(X => {
        "use strict";
        Object.defineProperty(X, "__esModule", {
            value: !0
        });
        X.default = void 0;
        var Et = typeof crypto != "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
            Lt = {
                randomUUID: Et
            };
        X.default = Lt
    });
    var Ee = g(F => {
        "use strict";
        Object.defineProperty(F, "__esModule", {
            value: !0
        });
        F.default = void 0;
        var Te = Ne(xe()),
            Ct = Ne(te()),
            Vt = x();

        function Ne(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function kt(e, u, t) {
            if (Te.default.randomUUID && !u && !e) return Te.default.randomUUID();
            e = e || {};
            let n = e.random || (e.rng || Ct.default)();
            if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, u) {
                t = t || 0;
                for (let r = 0; r < 16; ++r) u[t + r] = n[r];
                return u
            }
            return (0, Vt.unsafeStringify)(n)
        }
        var Jt = kt;
        F.default = Jt
    });
    var Le = g(w => {
        "use strict";
        Object.defineProperty(w, "__esModule", {
            value: !0
        });
        w.default = void 0;

        function Wt(e, u, t, n) {
            switch (e) {
                case 0:
                    return u & t ^ ~u & n;
                case 1:
                    return u ^ t ^ n;
                case 2:
                    return u & t ^ u & n ^ t & n;
                case 3:
                    return u ^ t ^ n
            }
        }

        function ae(e, u) {
            return e << u | e >>> 32 - u
        }

        function $t(e) {
            let u = [1518500249, 1859775393, 2400959708, 3395469782],
                t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
            if (typeof e == "string") {
                let i = unescape(encodeURIComponent(e));
                e = [];
                for (let a = 0; a < i.length; ++a) e.push(i.charCodeAt(a))
            } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
            e.push(128);
            let n = e.length / 4 + 2,
                r = Math.ceil(n / 16),
                f = new Array(r);
            for (let i = 0; i < r; ++i) {
                let a = new Uint32Array(16);
                for (let l = 0; l < 16; ++l) a[l] = e[i * 64 + l * 4] << 24 | e[i * 64 + l * 4 + 1] << 16 | e[i * 64 + l * 4 + 2] << 8 | e[i * 64 + l * 4 + 3];
                f[i] = a
            }
            f[r - 1][14] = (e.length - 1) * 8 / Math.pow(2, 32), f[r - 1][14] = Math.floor(f[r - 1][14]), f[r - 1][15] = (e.length - 1) * 8 & 4294967295;
            for (let i = 0; i < r; ++i) {
                let a = new Uint32Array(80);
                for (let c = 0; c < 16; ++c) a[c] = f[i][c];
                for (let c = 16; c < 80; ++c) a[c] = ae(a[c - 3] ^ a[c - 8] ^ a[c - 14] ^ a[c - 16], 1);
                let l = t[0],
                    o = t[1],
                    d = t[2],
                    m = t[3],
                    s = t[4];
                for (let c = 0; c < 80; ++c) {
                    let M = Math.floor(c / 20),
                        T = ae(l, 5) + Wt(M, o, d, m) + s + u[M] + a[c] >>> 0;
                    s = m, m = d, d = ae(o, 30) >>> 0, o = l, l = T
                }
                t[0] = t[0] + l >>> 0, t[1] = t[1] + o >>> 0, t[2] = t[2] + d >>> 0, t[3] = t[3] + m >>> 0, t[4] = t[4] + s >>> 0
            }
            return [t[0] >> 24 & 255, t[0] >> 16 & 255, t[0] >> 8 & 255, t[0] & 255, t[1] >> 24 & 255, t[1] >> 16 & 255, t[1] >> 8 & 255, t[1] & 255, t[2] >> 24 & 255, t[2] >> 16 & 255, t[2] >> 8 & 255, t[2] & 255, t[3] >> 24 & 255, t[3] >> 16 & 255, t[3] >> 8 & 255, t[3] & 255, t[4] >> 24 & 255, t[4] >> 16 & 255, t[4] >> 8 & 255, t[4] & 255]
        }
        var Ht = $t;
        w.default = Ht
    });
    var Ve = g(G => {
        "use strict";
        Object.defineProperty(G, "__esModule", {
            value: !0
        });
        G.default = void 0;
        var Kt = Ce(ie()),
            Bt = Ce(Le());

        function Ce(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Xt = (0, Kt.default)("v5", 80, Bt.default),
            Ft = Xt;
        G.default = Ft
    });
    var ke = g(Q => {
        "use strict";
        Object.defineProperty(Q, "__esModule", {
            value: !0
        });
        Q.default = void 0;
        var wt = "00000000-0000-0000-0000-000000000000";
        Q.default = wt
    });
    var Je = g(Y => {
        "use strict";
        Object.defineProperty(Y, "__esModule", {
            value: !0
        });
        Y.default = void 0;
        var Gt = Qt(A());

        function Qt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function Yt(e) {
            if (!(0, Gt.default)(e)) throw TypeError("Invalid UUID");
            return parseInt(e.slice(14, 15), 16)
        }
        var Zt = Yt;
        Y.default = Zt
    });
    var We = g(I => {
        "use strict";
        Object.defineProperty(I, "__esModule", {
            value: !0
        });
        Object.defineProperty(I, "NIL", {
            enumerable: !0,
            get: function() {
                return tn.default
            }
        });
        Object.defineProperty(I, "parse", {
            enumerable: !0,
            get: function() {
                return un.default
            }
        });
        Object.defineProperty(I, "stringify", {
            enumerable: !0,
            get: function() {
                return fn.default
            }
        });
        Object.defineProperty(I, "v1", {
            enumerable: !0,
            get: function() {
                return jt.default
            }
        });
        Object.defineProperty(I, "v3", {
            enumerable: !0,
            get: function() {
                return zt.default
            }
        });
        Object.defineProperty(I, "v4", {
            enumerable: !0,
            get: function() {
                return bt.default
            }
        });
        Object.defineProperty(I, "v5", {
            enumerable: !0,
            get: function() {
                return en.default
            }
        });
        Object.defineProperty(I, "validate", {
            enumerable: !0,
            get: function() {
                return rn.default
            }
        });
        Object.defineProperty(I, "version", {
            enumerable: !0,
            get: function() {
                return nn.default
            }
        });
        var jt = q(Se()),
            zt = q(De()),
            bt = q(Ee()),
            en = q(Ve()),
            tn = q(ke()),
            nn = q(Je()),
            rn = q(A()),
            fn = q(x()),
            un = q(ue());

        function q(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    });
    var He = g(Z => {
        me();
        var {
            v4: an
        } = We(), $e = "https://apishopify.openinapp.com/api/v1";
        console.log("Pixel Extension Version: 0.0.1");
        b(r => C(Z, [r], function*({
            configuration: e,
            analytics: u,
            browser: t,
            init: n
        }) {
            u.subscribe("product_added_to_cart", i => C(Z, null, function*() {
                var m, s;
                console.log("Shobhan -> Added to cart event triggered!!");
                let a = yield(m = t == null ? void 0 : t.localStorage) == null ? void 0 : m.getItem("oia_shopify").then(c => c).catch(c => {
                    console.log(c)
                }), l = yield(s = t == null ? void 0 : t.sessionStorage) == null ? void 0 : s.getItem("openinapp").then(c => c).catch(c => {
                    console.log(c)
                }), o = JSON.parse(a), d = {
                    event: i,
                    storedetail: o
                };
                a && l ? d.isOIA = !0 : d.isOIA = !1, fetch(`${$e}/event/addToCart`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(d)
                })
            }));
            let f;
            try {
                let {
                    window: i
                } = n.context;
                f = i
            } catch (i) {
                console.log(i)
            }
            u.subscribe("page_viewed", i => C(Z, null, function*() {
                var a, l, o, d, m, s, c, M, T, le, oe;
                try {
                    let N = (o = (l = new URL((a = f == null ? void 0 : f.location) == null ? void 0 : a.href)) == null ? void 0 : l.searchParams) == null ? void 0 : o.get("utm_content"),
                        ce = (s = (m = new URL((d = f == null ? void 0 : f.location) == null ? void 0 : d.href)) == null ? void 0 : m.searchParams) == null ? void 0 : s.get("utm_sessionId"),
                        Ke = an(),
                        E = yield(c = t == null ? void 0 : t.sessionStorage) == null ? void 0 : c.getItem("sessionId").then(R => R).catch(R => (console.log(R), !1));
                    if (console.log("page view triggering..."), N === "oia" && ce)(M = t == null ? void 0 : t.sessionStorage) == null || M.setItem("openinapp", N), (T = t == null ? void 0 : t.sessionStorage) == null || T.setItem("sessionId", ce);
                    else if (!E) {
                        let Be = function(O, j = 5e4, U = 500) {
                            return new Promise((z, Xe) => {
                                let de = 0,
                                    se = setInterval(() => {
                                        let ge = t.localStorage.getItem(O);
                                        ge ? (clearInterval(se), z(ge)) : de > j && (clearInterval(se), Xe(`Timeout waiting for ${O}`)), de += U
                                    }, U)
                            })
                        };
                        (le = t == null ? void 0 : t.sessionStorage) == null || le.setItem("sessionId", Ke);
                        let R = yield(oe = t == null ? void 0 : t.sessionStorage) == null ? void 0 : oe.getItem("openinapp").then(O => O).catch(O => {
                            console.log(O)
                        });
                        Be("oia_shopify").then(O => {
                            if (O) {
                                let j = JSON.parse(O),
                                    U = {
                                        event: i,
                                        storedetail: j
                                    };
                                console.log("page view | entering..."), R ? U.isOIA = !0 : U.isOIA = !1, fetch(`${$e}/visit/store-visit`, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(U)
                                }).catch(z => console.error("Error:", z))
                            }
                        })
                    }
                    console.log(E ? "sessionidffggg found" : "sessionid not found ", E)
                } catch (N) {
                    console.log(N)
                }
            }))
        }))
    });
    var Cn = je(He());
})();