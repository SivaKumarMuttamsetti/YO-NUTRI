(() => {
    var it = Object.create;
    var q = Object.defineProperty,
        st = Object.defineProperties,
        ot = Object.getOwnPropertyDescriptor,
        ct = Object.getOwnPropertyDescriptors,
        lt = Object.getOwnPropertyNames,
        F = Object.getOwnPropertySymbols,
        ut = Object.getPrototypeOf,
        X = Object.prototype.hasOwnProperty,
        dt = Object.prototype.propertyIsEnumerable;
    var Q = (r, e, c) => e in r ? q(r, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: c
        }) : r[e] = c,
        V = (r, e) => {
            for (var c in e || (e = {})) X.call(e, c) && Q(r, c, e[c]);
            if (F)
                for (var c of F(e)) dt.call(e, c) && Q(r, c, e[c]);
            return r
        },
        M = (r, e) => st(r, ct(e));
    var E = (r, e) => () => (r && (e = r(r = 0)), e);
    var ft = (r, e) => () => (e || r((e = {
        exports: {}
    }).exports, e), e.exports);
    var _t = (r, e, c, T) => {
        if (e && typeof e == "object" || typeof e == "function")
            for (let m of lt(e)) !X.call(r, m) && m !== c && q(r, m, {
                get: () => e[m],
                enumerable: !(T = ot(e, m)) || T.enumerable
            });
        return r
    };
    var pt = (r, e, c) => (c = r != null ? it(ut(r)) : {}, _t(e || !r || !r.__esModule ? q(c, "default", {
        value: r,
        enumerable: !0
    }) : c, r));
    var l = (r, e, c) => new Promise((T, m) => {
        var N = h => {
                try {
                    k(c.next(h))
                } catch (C) {
                    m(C)
                }
            },
            b = h => {
                try {
                    k(c.throw(h))
                } catch (C) {
                    m(C)
                }
            },
            k = h => h.done ? T(h.value) : Promise.resolve(h.value).then(N, b);
        k((c = c.apply(r, e)).next())
    });
    var z, B = E(() => {
        z = "WebPixel::Render"
    });
    var D, G = E(() => {
        B();
        D = r => shopify.extend(z, r)
    });
    var K = E(() => {
        G()
    });
    var Y = E(() => {
        K()
    });
    var Z = ft(g => {
        Y();
        D(T => l(g, [T], function*({
            analytics: r,
            browser: e,
            settings: c
        }) {
            self.cookieLock = 0;
            let m = !1,
                N = !1,
                b = !1,
                k = null,
                h = null;

            function C(t) {
                return l(this, null, function*() {
                    function n() {
                        return crypto.randomUUID ? crypto.randomUUID().toString() : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, u => (+u ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +u / 4).toString(16))
                    }

                    function i(u) {
                        return l(this, null, function*() {
                            let f = new TextEncoder,
                                y = yield crypto.subtle.digest("SHA-1", f.encode(u));
                            return Array.from(new Uint8Array(y)).map(I => I.toString(16).padStart(2, "0")).join("")
                        })
                    }

                    function a(u) {
                        var f = u.length;
                        return u.charAt(--f) === "." && (u = u.slice(0, f)), u.slice(0, 2) === "*." && (u = u.slice(1)), u
                    }
                    let _ = t.context.document.location.hostname,
                        s = a(_),
                        p = (yield i(s + ("/" || "/"))).slice(0, 4),
                        S = `_dht_id.${p}`,
                        o = `_dht_ses.${p}`,
                        x = `_sp_id.${p}`,
                        j = `_sp_ses.${p}`,
                        $ = parseInt(Math.round(new Date().getTime() / 1e3));

                    function rt() {
                        return l(this, null, function*() {
                            return (yield e.cookie.get(o)) ? !0 : (yield e.cookie.set(`${o}=*;max-age=1800;path=/;secure=true`), !1)
                        })
                    }
                    let nt = 0;

                    function ht() {
                        return l(this, null, function*() {
                            return nt += 1, 0
                        })
                    }
                    for (; self.cookieLock === 1;) yield new Promise(u => setTimeout(u, 100));
                    self.cookieLock = 1;
                    try {
                        let u = yield e.cookie.get(S);
                        if (u) {
                            let f = u.split(".");
                            if (yield rt()) return [f[0], f[5], f[2], !1]; {
                                let y = n(),
                                    I = f[0],
                                    A = parseInt(f[2]) + 1,
                                    L = f[1],
                                    O = $,
                                    P = f[3],
                                    R = `${I}.${L}.${A}.${O}.${P}.${y}`;
                                return yield e.cookie.set(`${S}=${R};max-age=63072000;path=/;secure=true`), [I, y, A, !0]
                            }
                        } else {
                            let f = n(),
                                y = n(),
                                I = 0,
                                A = $,
                                L = $,
                                O = -1,
                                P = yield e.cookie.get(x);
                            if (P) {
                                let U = P.split(".");
                                U.length === 6 && (f = U[5], y = U[0], I = parseInt(U[2]), A = U[1], O = U[3])
                            }
                            yield e.cookie.set(`${o}=*;max-age=1800;path=/;secure`);
                            let R = `${y}.${A}.${I}.${L}.${O}.${f}`;
                            return yield e.cookie.set(`${S}=${R};max-age=63072000;path=/;secure=true`), [y, f, I, !0]
                        }
                    } finally {
                        self.cookieLock = 0
                    }
                })
            }

            function J(t, n) {
                let i = null,
                    a = null,
                    _ = null;
                return t ? t.pathname.startsWith("/collections/") && t.pathname.indexOf("/products/") === -1 ? (i = "collection", a = t.pathname.split("/")[2]) : t.pathname.startsWith("/search") ? (i = "search", _ = t.searchParams.get("q")) : t.hostname !== n.hostname ? i = "external" : i = "internal" : i = "external", {
                    funnel_attr_type: i,
                    funnel_attr_collection_handle: a,
                    funnel_attr_search_query: _
                }
            }

            function H(t, n, i) {
                return l(this, null, function*() {
                    let a = new URL(t),
                        _ = n ? new URL(n) : null,
                        s = null,
                        d = null,
                        p = null;
                    if (i.name === "product_added_to_cart") {
                        if (N || a.pathname.startsWith("/collections/") && a.pathname.indexOf("/products/") === -1) return s = "collection", d = a.pathname.split("/")[2], {
                            funnel_attr_url: t,
                            funnel_attr_referer: n,
                            funnel_attr_type: s,
                            funnel_attr_collection_handle: d,
                            funnel_attr_search_query: p
                        };
                        if (b || a.pathname.startsWith("/search")) return s = "search", p = a.searchParams.get("q"), {
                            funnel_attr_url: t,
                            funnel_attr_referer: n,
                            funnel_attr_type: s,
                            funnel_attr_collection_handle: d,
                            funnel_attr_search_query: p
                        };
                        if (a.pathname.indexOf("/products/") !== -1) {
                            let S = i.data.cartLine.merchandise.product.id,
                                o = yield et(S);
                            return o ? V({
                                funnel_attr_url: t,
                                funnel_attr_referer: n
                            }, J(new URL(o), a)) : V({
                                funnel_attr_url: t,
                                funnel_attr_referer: n
                            }, J(_, a))
                        }
                    } else return i.name === "collection_viewed" ? (s = "collection", d = a.pathname.split("/")[2], {
                        funnel_attr_url: t,
                        funnel_attr_referer: n,
                        funnel_attr_type: s,
                        funnel_attr_collection_handle: d,
                        funnel_attr_search_query: p
                    }) : i.name === "search_submitted" ? (s = "search", p = a.searchParams.get("q"), {
                        funnel_attr_url: t,
                        funnel_attr_referer: n,
                        funnel_attr_type: s,
                        funnel_attr_collection_handle: d,
                        funnel_attr_search_query: p
                    }) : V({
                        funnel_attr_url: t,
                        funnel_attr_referer: n
                    }, J(_, a))
                })
            }

            function W(t) {
                return l(this, null, function*() {
                    let i = JSON.parse((yield e.localStorage.getItem("dht_pctxs")) || "{}")[t] || {},
                        a = [];
                    return i.last_add_to_cart && a.push(M(V({}, i.last_add_to_cart), {
                        type: "last_add_to_cart",
                        product_variant_id: t.toString()
                    })), a
                })
            }

            function v(t, n, i) {
                return l(this, null, function*() {
                    let a = JSON.parse((yield e.localStorage.getItem("dht_pctxs")) || "{}"),
                        _ = a[t] || {};
                    a[t] = _, n.name === "product_added_to_cart" && (_.last_add_to_cart = V({
                        ts: i
                    }, yield H(n.locationUrl, n.referrer, n)));
                    for (id in a) {
                        let s = a[id];
                        for (ctxId in s)(s[ctxId].ts || 0) < i - 14 * 24 * 3600 && delete s[ctxId];
                        Object.keys(s).length === 0 && delete a[id]
                    }
                    return yield e.localStorage.setItem("dht_pctxs", JSON.stringify(a)), _
                })
            }

            function tt(t, n) {
                return l(this, null, function*() {
                    let i = (yield e.sessionStorage.getItem("dht_pctxs")) || "{}",
                        a = JSON.parse(i);
                    a[t] || (a[t] = n, yield e.sessionStorage.setItem("dht_pctxs", JSON.stringify(a)))
                })
            }

            function et(t) {
                return l(this, null, function*() {
                    let n = (yield e.sessionStorage.getItem("dht_pctxs")) || "{}";
                    return JSON.parse(n)[t]
                })
            }

            function at(t) {
                if (!k) return null;
                let n = t.context.document.location.search;
                if (!n) return null;
                let a = new URLSearchParams(n).get("variant");
                if (!a) return null;
                let _ = /[^0-9]+/i;
                if (a = a.replace(_, ""), !a || h && a === h) return null;
                let s = JSON.parse(k);
                return s.name = "variant_viewed", s.data.productVariant.id = a, s.data.productVariant.image = null, s.data.productVariant.price = null, s.data.productVariant.sku = null, s.data.productVariant.title = null, s.data.productVariant.untranslatedTitle = null, h = a, s
            }

            function w(t) {
                return l(this, null, function*() {
                    if (t.name === "clicked") {
                        let o = at(t);
                        if (o) t = o;
                        else return
                    }
                    let n = yield C(t), i = n[0], a = n[1], _ = n[2], s = n[3];
                    t.locationUrl = t.context.document.location.href, t.referrer = t.context.document.referrer, t.domainUserId = i, t.sessionId = a, t.sessionIdx = _;
                    let d = yield e.localStorage.getItem("dht_csess");
                    if (s || !d ? (d = {
                            url: t.locationUrl,
                            session_id: a,
                            domain_user_id: i,
                            user_agent: t.context.navigator.userAgent,
                            referrer: t.referrer
                        }, yield e.localStorage.setItem("dht_csess", JSON.stringify(d))) : d = JSON.parse(d), t.name === "product_viewed" || t.name === "variant_viewed") {
                        k = JSON.stringify(t), h = t.data.productVariant.id.toString();
                        let o = t.data.productVariant.product.id;
                        tt(o, t.referrer), m = !0
                    }
                    t.name === "collection_viewed" && (N = !0), t.name === "search_submitted" && (b = !0);
                    let p = parseInt(Date.now() / 1e3 | 0);
                    if (t.name === "product_added_to_cart") {
                        let o = t.data.cartLine.merchandise.id;
                        yield v(o, t, p), t.attribution = yield W(o)
                    }
                    if (t.name === "checkout_completed" || t.name === "checkout_started") {
                        let o = t.data.checkout.lineItems,
                            x = [];
                        for (let j of o) {
                            let $ = j.variant.id;
                            x.push(...yield W($))
                        }
                        t.attribution = x
                    }
                    if (t.name !== "page_viewed") {
                        let o = t.attribution || [];
                        if (o.length > 0)
                            for (let x of o) x.session_landing_url = d.url, x.session_landing_referer = d.referrer;
                        else o = [V({
                            session_landing_url: d.url,
                            session_landing_referer: d.referrer,
                            ts: p
                        }, yield H(t.locationUrl, t.referrer, t))];
                        t.attribution = o
                    } else t.attribution = [];
                    let S = {
                        method: "POST",
                        body: JSON.stringify(t),
                        headers: new Headers({
                            "Content-Type": "application/json; charset=UTF-8"
                        })
                    };
                    fetch(`https://collector-hub.dhatma.com/com.shopify.web.pixel/v2024.01?aid=${c.accountID}&e=${t.name}`, S).then(o => o.text()).then(o => {})
                })
            }
            r.subscribe("product_added_to_cart", t => l(g, null, function*() {
                yield w(t)
            })), r.subscribe("collection_viewed", t => l(g, null, function*() {
                yield w(t)
            })), r.subscribe("search_submitted", t => l(g, null, function*() {
                yield w(t)
            })), r.subscribe("product_viewed", t => l(g, null, function*() {
                yield w(t)
            })), r.subscribe("page_viewed", t => l(g, null, function*() {
                yield w(t)
            })), r.subscribe("checkout_started", t => l(g, null, function*() {
                yield w(t)
            })), r.subscribe("checkout_completed", t => l(g, null, function*() {
                yield w(t)
            })), r.subscribe("clicked", t => l(g, null, function*() {
                yield w(t)
            }))
        }))
    });
    var $t = pt(Z());
})();