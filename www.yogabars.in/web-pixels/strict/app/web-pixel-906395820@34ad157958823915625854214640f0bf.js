(() => {
    var x = Object.create;
    var y = Object.defineProperty;
    var R = Object.getOwnPropertyDescriptor;
    var D = Object.getOwnPropertyNames;
    var I = Object.getPrototypeOf,
        P = Object.prototype.hasOwnProperty;
    var p = (r, o) => () => (r && (o = r(r = 0)), o);
    var b = (r, o) => () => (o || r((o = {
        exports: {}
    }).exports, o), o.exports);
    var v = (r, o, n, l) => {
        if (o && typeof o == "object" || typeof o == "function")
            for (let c of D(o)) !P.call(r, c) && c !== n && y(r, c, {
                get: () => o[c],
                enumerable: !(l = R(o, c)) || l.enumerable
            });
        return r
    };
    var A = (r, o, n) => (n = r != null ? x(I(r)) : {}, v(o || !r || !r.__esModule ? y(n, "default", {
        value: r,
        enumerable: !0
    }) : n, r));
    var _ = (r, o, n) => new Promise((l, c) => {
        var h = a => {
                try {
                    t(n.next(a))
                } catch (s) {
                    c(s)
                }
            },
            g = a => {
                try {
                    t(n.throw(a))
                } catch (s) {
                    c(s)
                }
            },
            t = a => a.done ? l(a.value) : Promise.resolve(a.value).then(h, g);
        t((n = n.apply(r, o)).next())
    });
    var E, S = p(() => {
        E = "WebPixel::Render"
    });
    var m, T = p(() => {
        S();
        m = r => shopify.extend(E, r)
    });
    var N = p(() => {
        T()
    });
    var w = p(() => {
        N()
    });
    var O = b(f => {
        w();
        var k = "jdgm_rs_referral",
            J = "jdgm_widget_interactions",
            K = 6;
        m(({
            analytics: r,
            browser: o,
            init: n
        }) => {
            let l = t => _(null, null, function*() {
                    let a = yield o.localStorage.getItem(t);
                    return a && a.length > 0 ? JSON.parse(a) : null
                }),
                c = () => _(null, null, function*() {
                    try {
                        let t = yield l(k);
                        return t ? ((t.id == null || t.id == null) && (t.id = (Math.random() * 1e16).toString(36).substring(0, 10), yield o.localStorage.setItem(k, JSON.stringify(t))), t) : null
                    } catch (t) {
                        return null
                    }
                }),
                h = t => _(null, null, function*() {
                    try {
                        let a = yield l(J);
                        if (!a) return null;
                        let s = t.lineItems.map(e => {
                                var i, u;
                                return (u = (i = e == null ? void 0 : e.variant) == null ? void 0 : i.product) == null ? void 0 : u.id
                            }),
                            d = {
                                events: {},
                                bought_products_count: s.length
                            };
                        return s.map(e => {
                            let i = a[e];
                            i && (d.events[e] = i)
                        }), d
                    } catch (a) {
                        return null
                    }
                }),
                g = (t, a, s) => {
                    var i;
                    let d = s.token || "",
                        e = new URLSearchParams;
                    return e.set("shop_domain", n.data.shop.myshopifyDomain), e.set("order_external_id", (i = s.order) == null ? void 0 : i.id), e.set("order_checkout_token", d.substr(d.length - K)), t && (e.set("cookie_set_at", t.createdAt), e.set("referral_data", JSON.stringify(t.referralData)), e.set("other_referral_count", t.otherReferralCount), e.set("last_other_referral_data", JSON.stringify(t.lastOtherReferralData)), e.set("has_expired", t.hasExpired), e.set("tracked_at", Date.now()), e.set("cookie_id", t.id), e.set("mobile_device", n.context.window.innerWidth <= 767)), a && e.set("trusted_transactions", JSON.stringify(a)), e
                };
            r.subscribe("checkout_completed", t => _(null, null, function*() {
                var e;
                let a = (e = t == null ? void 0 : t.data) == null ? void 0 : e.checkout;
                if (!a || !o || !n) return;
                let s = yield c(), d = yield h(a);
                if (s || d) {
                    let i = g(s, d, a);
                    try {
                        if (!(yield fetch("https://judge.me/api/v1/orders/track", {
                                method: "POST",
                                body: i
                            })).ok) throw new Error("Judge.me could not process data.")
                    } catch (u) {
                        console.warn(u);
                        return
                    }
                }
            }))
        })
    });
    var q = A(O());
})();