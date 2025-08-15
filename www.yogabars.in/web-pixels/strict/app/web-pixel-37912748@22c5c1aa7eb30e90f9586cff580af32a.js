(() => {
    var V = Object.create;
    var A = Object.defineProperty;
    var L = Object.getOwnPropertyDescriptor;
    var W = Object.getOwnPropertyNames;
    var F = Object.getPrototypeOf,
        G = Object.prototype.hasOwnProperty;
    var O = (t, e) => () => (t && (e = t(t = 0)), e);
    var X = (t, e) => () => (e || t((e = {
        exports: {}
    }).exports, e), e.exports);
    var $ = (t, e, o, i) => {
        if (e && typeof e == "object" || typeof e == "function")
            for (let c of W(e)) !G.call(t, c) && c !== o && A(t, c, {
                get: () => e[c],
                enumerable: !(i = L(e, c)) || i.enumerable
            });
        return t
    };
    var B = (t, e, o) => (o = t != null ? V(F(t)) : {}, $(e || !t || !t.__esModule ? A(o, "default", {
        value: t,
        enumerable: !0
    }) : o, t));
    var R = (t, e, o) => new Promise((i, c) => {
        var s = d => {
                try {
                    n(o.next(d))
                } catch (r) {
                    c(r)
                }
            },
            E = d => {
                try {
                    n(o.throw(d))
                } catch (r) {
                    c(r)
                }
            },
            n = d => d.done ? i(d.value) : Promise.resolve(d.value).then(s, E);
        n((o = o.apply(t, e)).next())
    });
    var k, N = O(() => {
        k = "WebPixel::Render"
    });
    var h, H = O(() => {
        N();
        h = t => shopify.extend(k, t)
    });
    var P = O(() => {
        H()
    });
    var U = O(() => {
        P()
    });
    var K = X(b => {
        U();

        function v({
            data: t,
            url: e,
            browser: o,
            appType: i,
            appId: c,
            eventId: s
        }) {
            o.sendBeacon(e, JSON.stringify({
                events: t,
                metadata: {
                    eventId: s,
                    appType: i,
                    appId: c
                }
            }))
        }
        var S = {
                SESSION: "foxify_session",
                VISITOR: "foxify_visitor",
                PAGE_VIEW: "foxify_page_view",
                ADD_TO_CART: "foxify_add_to_cart",
                CLICKS: "foxify_clicks"
            },
            T = {
                SESSION: "session",
                PAGE_VIEW: "page_view",
                ADD_TO_CART: "add_to_cart",
                CLICKS: "clicks",
                PRODUCT_REACHED_CHECKOUT: "product_reached_checkout",
                REACHED_CHECKOUT: "reached_checkout"
            },
            M = t => t.replace(/^[?#]/g, "").split("&").reduce((o, i) => {
                var E;
                let [c, s] = (E = i == null ? void 0 : i.split("=")) != null ? E : [];
                return s && (o[c] = s), o
            }, {}),
            D = (t, e) => `${t?`${t}_`:""}${e}`;
        h(({
            settings: t,
            analytics: e,
            browser: o
        }) => {
            let [i, c, s] = t.configs.split(","), E = t.appType;
            e.subscribe(D(E, S.PAGE_VIEW), n => {
                let {
                    clientId: d,
                    timestamp: r,
                    customData: {
                        foxifyEventId: I,
                        shop: _,
                        pageId: f,
                        pageType: y,
                        defaultPage: p,
                        templateId: l
                    },
                    id: a
                } = n;
                v({
                    data: [{
                        metric: T.PAGE_VIEW,
                        payload: {
                            shop: _,
                            pageId: f,
                            pageType: y,
                            defaultPage: p,
                            templateId: l,
                            clientId: d,
                            timestamp: r
                        }
                    }],
                    url: s,
                    browser: o,
                    eventId: I || a,
                    appId: c,
                    appType: i
                })
            }), e.subscribe(D(E, S.ADD_TO_CART), n => {
                let {
                    clientId: d,
                    timestamp: r,
                    customData: {
                        shop: I,
                        pageId: _,
                        pageType: f,
                        defaultPage: y,
                        templateId: p,
                        productId: l,
                        variantId: a,
                        foxifyEventId: g
                    },
                    id: u
                } = n;
                v({
                    data: [{
                        metric: T.ADD_TO_CART,
                        payload: {
                            shop: I,
                            pageId: _,
                            pageType: f,
                            defaultPage: y,
                            templateId: p,
                            productId: l,
                            variantId: a,
                            clientId: d,
                            timestamp: r
                        }
                    }],
                    url: s,
                    browser: o,
                    eventId: g || u,
                    appId: c,
                    appType: i
                })
            }), e.subscribe(D(E, S.CLICKS), n => {
                let {
                    clientId: d,
                    timestamp: r,
                    customData: {
                        shop: I,
                        pageId: _,
                        pageType: f,
                        defaultPage: y,
                        templateId: p,
                        url: l,
                        foxifyEventId: a
                    },
                    id: g
                } = n;
                v({
                    data: [{
                        metric: T.CLICKS,
                        payload: {
                            shop: I,
                            pageId: _,
                            pageType: f,
                            defaultPage: y,
                            templateId: p,
                            url: l,
                            clientId: d,
                            timestamp: r
                        }
                    }],
                    url: s,
                    browser: o,
                    eventId: a || g,
                    appId: c,
                    appType: i
                })
            }), e.subscribe(D(E, S.SESSION), n => {
                let {
                    clientId: d,
                    timestamp: r,
                    customData: {
                        shop: I,
                        pageId: _,
                        pageType: f,
                        defaultPage: y,
                        templateId: p,
                        url: l,
                        foxifyEventId: a
                    },
                    id: g
                } = n;
                v({
                    data: [{
                        metric: T.SESSION,
                        payload: {
                            shop: I,
                            pageId: _,
                            pageType: f,
                            defaultPage: y,
                            templateId: p,
                            url: l,
                            clientId: d,
                            timestamp: r
                        }
                    }],
                    url: s,
                    browser: o,
                    eventId: a || g,
                    appId: c,
                    appType: i
                })
            }), e.subscribe("checkout_started", n => R(null, null, function*() {
                let d = yield o.cookie.get("_foxify_shop"), {
                    context: {
                        document: r
                    },
                    clientId: I,
                    timestamp: _,
                    data: {
                        checkout: {
                            lineItems: f
                        }
                    },
                    id: y
                } = n, p = [], l = f.reduce((u, m) => {
                    let C = m.id,
                        x = m.variant.product.id;
                    return u[C] = x, u
                }, {}), a = M(r.location.search);
                if (a != null && a.f_id && (a == null ? void 0 : a.f_s) === "buynow") {
                    let u = f == null ? void 0 : f.find(C => (C == null ? void 0 : C.id) == a.f_id),
                        m = a == null ? void 0 : a.p_id;
                    p.push({
                        metric: T.ADD_TO_CART,
                        payload: {
                            pageId: m,
                            shop: d,
                            variantId: a.f_id,
                            productId: u.variant.product.id,
                            clientId: I,
                            timestamp: _
                        }
                    }), p.push({
                        metric: T.PRODUCT_REACHED_CHECKOUT,
                        payload: {
                            pageId: m,
                            shop: d,
                            variantId: a.f_id,
                            productId: u.variant.product.id,
                            clientId: I,
                            timestamp: _
                        }
                    })
                }
                let g = n.data.checkout.attributes.filter(u => u.key.includes("_Foxify_"));
                for (let u of g) {
                    let {
                        key: m
                    } = u, [C, x] = m.replace("_Foxify_", "").split(":");
                    p.push({
                        metric: T.PRODUCT_REACHED_CHECKOUT,
                        payload: {
                            pageId: x,
                            shop: d,
                            variantId: C,
                            productId: l[C],
                            clientId: I,
                            timestamp: _
                        }
                    })
                }
                p != null && p.length && (p.push({
                    metric: T.REACHED_CHECKOUT,
                    payload: {
                        shop: d,
                        clientId: I,
                        timestamp: _
                    }
                }), v({
                    data: p,
                    browser: o,
                    url: s,
                    eventId: y,
                    appId: c,
                    appType: i
                }))
            }))
        })
    });
    var dt = B(K());
})();