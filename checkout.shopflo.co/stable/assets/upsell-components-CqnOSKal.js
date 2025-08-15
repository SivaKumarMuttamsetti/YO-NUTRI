var Ye = Object.defineProperty,
    Fe = Object.defineProperties;
var $e = Object.getOwnPropertyDescriptors;
var De = Object.getOwnPropertySymbols;
var He = Object.prototype.hasOwnProperty,
    We = Object.prototype.propertyIsEnumerable;
var Ce = (t, e, o) => e in t ? Ye(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : t[e] = o,
    me = (t, e) => {
        for (var o in e || (e = {})) He.call(e, o) && Ce(t, o, e[o]);
        if (De)
            for (var o of De(e)) We.call(e, o) && Ce(t, o, e[o]);
        return t
    },
    ge = (t, e) => Fe(t, $e(e));
var ae = (t, e, o) => new Promise((p, g) => {
    var _ = d => {
            try {
                b(o.next(d))
            } catch (m) {
                g(m)
            }
        },
        L = d => {
            try {
                b(o.throw(d))
            } catch (m) {
                g(m)
            }
        },
        b = d => d.done ? p(d.value) : Promise.resolve(d.value).then(_, L);
    b((o = o.apply(t, e)).next())
});
import {
    r as E,
    m as $,
    j as s,
    R as Ge,
    u as Ke
} from "./react-core-C02-NrKc.js";
import {
    u as Ae
} from "./react-router-dom-C_20INan.js";
import {
    u as je,
    f as Ne,
    i as Ee,
    b as Re,
    K as Be,
    X as Pe,
    a as ke,
    p as Se,
    q as Te,
    E as Oe,
    w as G,
    a0 as be,
    A as ne,
    d as X,
    S as le,
    a2 as Le,
    aj as ve,
    Q as qe,
    J as xe,
    R as Xe,
    x as ze,
    D as Qe,
    T as Je,
    U as Ze,
    e as es,
    am as ss,
    bW as ts,
    k as as,
    m as ns,
    Z as ls,
    bX as we,
    bY as is,
    bZ as rs,
    by as he,
    c as os
} from "./lib-D7WRmHWF.js";
import {
    d as Ue,
    O as Me,
    c as cs,
    D as ds,
    a as ms,
    i as hs,
    P as fs,
    U as xs,
    E as us,
    F as gs,
    H as _s,
    J as ys,
    j as fe
} from "./common-components-DhcySBak.js";
import {
    j as Ie
} from "./assests-8-RYiWy6.js";
import "./sentry-1CVSdSoY.js";
import {
    H as Ss,
    d as pe,
    X as Ts,
    M as bs
} from "./react-ui-CLI46-or.js";
import {
    A as _e,
    W as Is
} from "./components-DLiBXlgf.js";
(function() {
    try {
        var t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {},
            e = new t.Error().stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "ca484f23-4c54-42c2-a867-a94015001160", t._sentryDebugIdIdentifier = "sentry-dbid-ca484f23-4c54-42c2-a867-a94015001160")
    } catch (o) {}
})();
const ye = ({
        isDiscounted: t,
        product: e,
        openVariantSelector: o,
        keyIdentifier: p,
        position: g
    }) => {
        const {
            t: _
        } = je(), [L] = Ae(), {
            state: {
                checkoutId: b,
                checkoutView: d,
                billing: m,
                initialCheckoutStep: V,
                checkoutValidations: z,
                wishlistConfig: C
            },
            actions: {
                setCheckoutView: Q,
                setCheckoutModal: H,
                setShippingHandles: Y,
                updateCheckoutBasedOnCheckoutResponse: J,
                setCartDialog: W,
                setCheckoutValidations: ie,
                setRawCheckoutObject: re
            }
        } = Ne(), {
            state: {
                isAuthenticated: U
            }
        } = Ee(), {
            state: {
                merchant: B
            }
        } = Re(), {
            state: {
                wishlistedItems: P
            },
            actions: {
                isWishlisted: F,
                refreshWishlist: I
            }
        } = Be(), {
            actions: {
                mutatePayment: O
            }
        } = Pe(), {
            sendAnalyticsEvent: k
        } = ke(), [Z, v] = E.useState(!1), w = E.useMemo(() => {
            var l;
            return (l = e == null ? void 0 : e.variants) == null ? void 0 : l.filter(n => !(n != null && n.outOfStock))
        }, [e]), a = E.useCallback(l => ae(void 0, null, function*() {
            var r, h, S, T, R, c, N, x, oe, ee, ue, ce;
            if (l) {
                o(e);
                return
            }
            if (g === "EMPTY_CART") {
                v(!0), Se(Te.ADD_TO_CART, {
                    item: {
                        id: (h = (r = e == null ? void 0 : e.variants) == null ? void 0 : r[0]) == null ? void 0 : h.variantId,
                        quantity: 1
                    }
                });
                return
            }
            const n = {
                items: [{
                    variant_id: (T = (S = e == null ? void 0 : e.variants) == null ? void 0 : S[0]) == null ? void 0 : T.variantId,
                    quantity: 1
                }]
            };
            try {
                v(!0);
                const M = U ? `/checkout/${b}/upsell` : `/api/v1/checkout/${b}/upsell`,
                    u = yield Oe(M, n, U ? "KRATOS_PRIVATE" : "KRATOS");
                if (!u) {
                    G(_("unable_to_add"));
                    return
                }
                if (re(u), k({
                        eventName: X.UPSELL_PRODUCT_ADDED,
                        eventType: "click",
                        eventFor: [ne.SF_ANALYTICS, ne.FACEBOOK_PIXEL],
                        context: g === "CART" ? "cart" : "checkout",
                        metaData: {
                            upsellData: {
                                position: g,
                                productId: e.productId,
                                UpSellSection: "generic",
                                groupIds: e.upsellIds,
                                upsoldItems: [{
                                    productId: e.productId,
                                    variantId: e.variants[0].variantId,
                                    quantity: 1,
                                    itemTotal: e.variants[0].currentPrice
                                }]
                            },
                            checkoutItems: be(u == null ? void 0 : u.items)
                        }
                    }), k({
                        eventName: X.FLO_ADDED_TO_CART_UI,
                        eventType: "click",
                        eventFor: [ne.FACEBOOK_PIXEL],
                        metaData: {
                            checkoutItems: be(u == null ? void 0 : u.items)
                        }
                    }), le(_("upsell_product_added")), J(u), !((c = (R = u == null ? void 0 : u.pricing) == null ? void 0 : R.serviceable) != null ? c : !1) && g !== "CART") {
                    d === "PAYMENTS" && V !== "PAYMENTS" && Q("ADDRESS_LIST"), d === "PAYMENTS" && V === "PAYMENTS" && (ie(ge(me({}, z), {
                        address: {
                            isValid: !1
                        }
                    })), H("ADDRESS_LIST")), G(_("serviceability_error"), 5e3);
                    return
                }
                const se = (N = u == null ? void 0 : u.metadata) == null ? void 0 : N.available_shipping_handles,
                    te = (oe = (x = u == null ? void 0 : u.metadata) == null ? void 0 : x.show_shipping_handle_selector) != null ? oe : !1;
                if (Y(se), se.length > 0 && te && d === "PAYMENTS" && V !== "PAYMENTS") H("SHIPPING_HANDLES");
                else {
                    O(), $([`/checkout/${b}/rewards`, Le.KRATOS_PRIVATE]);
                    const Ve = L.get("tokenId");
                    $(ve({
                        isAuthenticated: U,
                        checkoutId: b,
                        tokenId: Ve
                    })), U ? $([`/checkout/${b}/discount`, "KRATOS_PRIVATE"]) : $([`/checkout/${b}/discount`, "KRATOS_PUBLIC"]), $("UPI_INTENT")
                }
            } catch (M) {
                const u = (ce = (ue = (ee = M == null ? void 0 : M.response) == null ? void 0 : ee.data) == null ? void 0 : ue.error) == null ? void 0 : ce.message;
                G(u != null ? u : _("coupon_not_found"))
            } finally {
                v(!1)
            }
        }), [e, m, b, d, U]), D = E.useMemo(() => {
            var l, n, r, h, S, T, R;
            return t && ((n = (l = e == null ? void 0 : e.variants) == null ? void 0 : l[0]) != null && n.discountedPrice) ? (((h = (r = e == null ? void 0 : e.variants) == null ? void 0 : r[0]) == null ? void 0 : h.currentPrice) - ((S = e == null ? void 0 : e.variants) == null ? void 0 : S[0].discountedPrice)) * 100 / ((R = (T = e == null ? void 0 : e.variants) == null ? void 0 : T[0]) == null ? void 0 : R.currentPrice) : 0
        }, [e.variants]), A = E.useMemo(() => {
            var l, n, r, h, S, T;
            return t && ((n = (l = e == null ? void 0 : e.variants) == null ? void 0 : l[0]) != null && n.discountedPrice) ? (h = (r = e == null ? void 0 : e.variants) == null ? void 0 : r[0]) == null ? void 0 : h.discountedPrice : (T = (S = e == null ? void 0 : e.variants) == null ? void 0 : S[0]) == null ? void 0 : T.currentPrice
        }, []), i = E.useMemo(() => {
            var l, n;
            return (n = (l = e == null ? void 0 : e.variants) == null ? void 0 : l[0]) == null ? void 0 : n.currentPrice
        }, [e, B, t]), f = E.useMemo(() => {
            var l, n, r, h;
            return C != null && C.isEnabled ? !(g === "CART" && !((n = (l = C == null ? void 0 : C.config) == null ? void 0 : l.cart) != null && n.enabled) || g === "PAYMENT_PAGE" && !((h = (r = C == null ? void 0 : C.config) == null ? void 0 : r.checkout) != null && h.enabled)) : !1
        }, [g, B]), y = E.useMemo(() => {
            var l, n;
            return F((n = (l = e == null ? void 0 : e.variants) == null ? void 0 : l[0]) == null ? void 0 : n.variantId)
        }, [P, e == null ? void 0 : e.variants]), j = () => ae(void 0, null, function*() {
            var l, n, r, h, S, T, R;
            if (!U && g === "CART") {
                if (ze() && !Qe()) {
                    let c = new URL(document.location.href),
                        N = new URLSearchParams(c.search);
                    N.delete("page"), N.append("checkoutId", b), c.search = N.toString(), Se(Te.PARENT_REDIRECT, {
                        redirectUrl: c.href,
                        clearCart: !1
                    });
                    return
                }
                W("cartAuthentication");
                return
            }
            if (!U) {
                Je(_("login_to_add_to_wishlist"), 3e3);
                return
            }
            try {
                const c = yield Ze((l = B == null ? void 0 : B.merchantId) != null ? l : "", (r = (n = e == null ? void 0 : e.variants) == null ? void 0 : n[0]) == null ? void 0 : r.variantId);
                if (c != null && c.error) throw c == null ? void 0 : c.error;
                c && (le(_("added_to_wishlist"), 3e3), k({
                    eventName: X.ADDED_TO_WISHLIST,
                    eventType: "flo_action",
                    metaData: {
                        wishlistData: {
                            variantId: (S = (h = e == null ? void 0 : e.variants) == null ? void 0 : h[0]) == null ? void 0 : S.variantId,
                            variantName: (R = (T = e == null ? void 0 : e.variants) == null ? void 0 : T[0]) == null ? void 0 : R.name,
                            productId: e == null ? void 0 : e.productId,
                            productName: e == null ? void 0 : e.name,
                            parent: "UPSELL"
                        }
                    }
                }))
            } catch (c) {
                console.error(c), G(_("error_adding_to_wishlist"), 3e3)
            } finally {
                I()
            }
        }), K = () => ae(void 0, null, function*() {
            var l, n, r, h, S, T, R;
            try {
                const c = yield Xe((l = B == null ? void 0 : B.merchantId) != null ? l : "", (r = (n = e == null ? void 0 : e.variants) == null ? void 0 : n[0]) == null ? void 0 : r.variantId);
                if (c != null && c.error) throw c == null ? void 0 : c.error;
                c && (le(_("removed_from_wishlist"), 3e3), k({
                    eventName: X.REMOVED_FROM_WISHLIST,
                    eventType: "flo_action",
                    metaData: {
                        wishlistData: {
                            variantId: (S = (h = e == null ? void 0 : e.variants) == null ? void 0 : h[0]) == null ? void 0 : S.variantId,
                            variantName: (R = (T = e == null ? void 0 : e.variants) == null ? void 0 : T[0]) == null ? void 0 : R.name,
                            productId: e == null ? void 0 : e.productId,
                            productName: e == null ? void 0 : e.name,
                            parent: "UPSELL"
                        }
                    }
                }))
            } catch (c) {
                console.error(c), G(_("error_removing_from_wishlist"), 3e3)
            } finally {
                I()
            }
        }), q = E.useMemo(() => {
            var n, r;
            const l = (r = (n = e == null ? void 0 : e.variants) == null ? void 0 : n[0]) == null ? void 0 : r.imageLink;
            return qe(l, Ie)
        }, [e]);
        return s.jsxs("li", {
            className: "relative flex max-h-36 min-w-[180px] max-w-[180px] snap-start flex-col gap-3 overflow-hidden rounded-xl border border-carbon-lighter p-2",
            "data-sentry-component": "UpSellProductCard",
            "data-sentry-source-file": "UpSellProductCard.tsx",
            children: [s.jsxs("div", {
                className: "flex flex-row gap-2",
                children: [s.jsx("img", {
                    src: q,
                    onError: l => {
                        l.currentTarget.src = Ie
                    },
                    alt: "Cart Item",
                    className: "h-[4.875rem] w-[4.875rem] min-w-[4.875rem] rounded-lg border border-gray-light object-cover",
                    draggable: !1
                }), s.jsxs("div", {
                    className: "flex flex-col space-y-2",
                    children: [s.jsx("p", {
                        className: "mt-1 w-[76px] text-wrap text-xs font-medium text-coal-dark",
                        children: xe(e == null ? void 0 : e.name, 32)
                    }), !!(w != null && w.length) && s.jsx("button", {
                        onClick: () => {
                            var l, n;
                            ((l = e == null ? void 0 : e.variants) == null ? void 0 : l.length) > 1 && a(((n = e == null ? void 0 : e.variants) == null ? void 0 : n.length) > 1)
                        },
                        className: "flex flex-row space-x-0.5 text-xxs font-medium text-coal-light",
                        children: s.jsx("span", {
                            children: (w == null ? void 0 : w.length) > 1 ? `${w.length} options` : ""
                        })
                    })]
                }), f && !t && s.jsx("div", {
                    className: `absolute border-b top-0 left-[1px] border-r h-6 w-6 z-10 bg-white ${y?"text-primary-dark border-primary-light":"text-gray-dark border-gray-light"} p-1 rounded-tl-md rounded-br-lg cursor-pointer`,
                    onClick: () => y ? K() : j(),
                    children: s.jsx(Ss, {
                        className: `h-4 w-4 ${y?"fill-primary-dark":""}`,
                        strokeWidth: 2.5
                    })
                })]
            }), s.jsxs("div", {
                className: "flex items-center justify-between",
                children: [s.jsx("div", {
                    className: "",
                    children: s.jsx(Ue, {
                        total: A,
                        compareAt: t ? i : void 0,
                        orientation: "vertical",
                        customCSS: "!flex-col !items-start !text-sm",
                        "data-sentry-element": "Price",
                        "data-sentry-source-file": "UpSellProductCard.tsx"
                    })
                }), s.jsxs("button", {
                    onClick: () => {
                        var l;
                        return a(((l = e == null ? void 0 : e.variants) == null ? void 0 : l.length) > 1)
                    },
                    className: "flex items-center justify-center space-x-1 rounded-lg border-2 border-yay-dark p-2 text-sm font-medium text-yay-dark",
                    children: [s.jsx(pe, {
                        size: 16,
                        "data-sentry-element": "Plus",
                        "data-sentry-source-file": "UpSellProductCard.tsx"
                    }), s.jsx("span", {
                        children: _("add").toUpperCase()
                    })]
                })]
            }), Math.round(D) > 0 ? s.jsxs("div", {
                className: "jusitfy-center absolute -left-[2px] -top-[2px] flex flex-col rounded-br-xl border border-carbon-lighter bg-yay-dark px-2 py-1 text-xxs font-semibold text-white",
                children: [s.jsxs("span", {
                    children: [Math.round(D), "%"]
                }), s.jsx("span", {
                    children: "OFF"
                })]
            }) : s.jsx(s.Fragment, {}), Z && s.jsx(Me, {})]
        }, p)
    },
    As = ({
        upsellProduct: t,
        isVariantSelectorOpen: e,
        closeVariantSelector: o,
        position: p
    }) => {
        var w;
        const {
            t: g
        } = je(), [_] = Ae(), {
            state: {
                checkoutId: L,
                checkoutView: b,
                billing: d,
                initialCheckoutStep: m,
                checkoutValidations: V
            },
            actions: {
                setCheckoutView: z,
                setCheckoutModal: C,
                setShippingHandles: Q,
                updateCheckoutBasedOnCheckoutResponse: H,
                setCheckoutValidations: Y,
                setRawCheckoutObject: J
            }
        } = Ne(), {
            state: {
                isAuthenticated: W
            }
        } = Ee(), {
            state: {
                merchant: ie
            }
        } = Re(), {
            state: {
                user: re
            }
        } = es(), {
            sendAnalyticsEvent: U
        } = ke(), {
            actions: {
                mutatePayment: B
            }
        } = Pe(), [P, F] = E.useState(!1), [I, O] = E.useState({}), k = (a, D) => {
            const A = me({}, I);
            if (D < 1) {
                delete A[a], O(A);
                return
            }
            A[a] = D, O(A)
        }, Z = () => {
            O({}), o()
        }, v = () => ae(void 0, null, function*() {
            var D, A, i, f, y, j, K, q, l, n, r, h, S, T, R, c;
            if (!((D = Object.keys(I)) != null && D.length)) {
                o();
                return
            }
            if (p === "EMPTY_CART") {
                F(!0), Se(Te.ADD_TO_CART, {
                    item: (A = Object.keys(I)) == null ? void 0 : A.map((N, x) => ({
                        id: N,
                        quantity: I[N]
                    }))
                });
                return
            }
            const a = {
                items: (i = Object.keys(I)) == null ? void 0 : i.map((N, x) => ({
                    variant_id: N,
                    quantity: I[N]
                }))
            };
            try {
                F(!0);
                const N = W ? `/checkout/${L}/upsell` : `/api/v1/checkout/${L}/upsell`,
                    x = yield Oe(N, a, W ? "KRATOS_PRIVATE" : "KRATOS");
                if (!x) {
                    G(g("unable_to_add"));
                    return
                }
                J(x), U({
                    eventName: X.UPSELL_PRODUCT_ADDED,
                    eventType: "click",
                    eventFor: [ne.SF_ANALYTICS],
                    context: "checkout",
                    metaData: {
                        upsellData: {
                            position: p,
                            productId: t == null ? void 0 : t.productId,
                            upsellSection: "generic",
                            groupIds: t == null ? void 0 : t.upsellIds,
                            upsoldItems: (f = Object.keys(I)) == null ? void 0 : f.map((M, u) => {
                                var se;
                                const de = (se = t == null ? void 0 : t.variants) == null ? void 0 : se.find(te => (te == null ? void 0 : te.variantId) === M);
                                return {
                                    productId: t == null ? void 0 : t.productId,
                                    variantId: M,
                                    quantity: I[M],
                                    itemTotal: de == null ? void 0 : de.currentPrice
                                }
                            })
                        },
                        checkoutItems: be(x == null ? void 0 : x.items)
                    }
                }), o(), le(g((y = a == null ? void 0 : a.items) != null && y.length || ((K = (j = a == null ? void 0 : a.items) == null ? void 0 : j[0]) == null ? void 0 : K.quantity) > 1 ? "upsell_multiple_product_added" : "upsell_product_added"));
                const oe = (q = ts(x.pricing)) != null ? q : {
                    total_payable: 0,
                    sub_total: 0,
                    total: 0,
                    tax: 0,
                    rewards: 0,
                    discount: 0,
                    shipping: 0,
                    cod: 0,
                    cod_enabled: !1,
                    taxes_included: !0,
                    serviceable: !0,
                    prepaid_total: 0,
                    prepaid_discount: 0,
                    original_sub_total: 0
                };
                d.shipping !== oe.shipping && le(g("shipping_fee_updated")), H(x);
                const ee = (l = x == null ? void 0 : x.metadata) == null ? void 0 : l.available_shipping_handles;
                if (Q(ee), !((r = (n = x == null ? void 0 : x.pricing) == null ? void 0 : n.serviceable) != null ? r : !1) && p !== "CART") {
                    b === "PAYMENTS" && m !== "PAYMENTS" && z("ADDRESS_LIST"), b === "PAYMENTS" && m === "PAYMENTS" && (Y(ge(me({}, V), {
                        address: {
                            isValid: !1
                        }
                    })), C("ADDRESS_LIST")), G(g("serviceability_error"), 5e3);
                    return
                }
                const ce = (S = (h = x == null ? void 0 : x.metadata) == null ? void 0 : h.show_shipping_handle_selector) != null ? S : !1;
                if (ee.length > 0 && ce && b === "PAYMENTS" && m !== "PAYMENTS") C("SHIPPING_HANDLES");
                else {
                    B(), $([`/checkout/${L}/rewards`, Le.KRATOS_PRIVATE]);
                    const M = _.get("tokenId");
                    $(ve({
                        isAuthenticated: W,
                        checkoutId: L,
                        tokenId: M
                    })), W ? $([`/checkout/${L}/discount`, "KRATOS_PRIVATE"]) : $([`/checkout/${L}/discount`, "KRATOS_PUBLIC"]), $("UPI_INTENT")
                }
            } catch (N) {
                const x = (c = (R = (T = N == null ? void 0 : N.response) == null ? void 0 : T.data) == null ? void 0 : R.error) == null ? void 0 : c.message;
                G(x != null ? x : g("coupon_not_found"))
            } finally {
                F(!1)
            }
        });
        return t ? s.jsxs(s.Fragment, {
            children: [s.jsxs(cs, {
                isOpen: e,
                modalType: "UPSELL_VARIANT_SELECTOR",
                dialogOverlay: !0,
                translateAxis: "y",
                customClass: "overflow-scroll md:!top-auto md:absolute h-full rounded-t-2xl max-h-[50vh]",
                "data-sentry-element": "GenericDialog",
                "data-sentry-source-file": "UpSellVariantsSelectorDialog.tsx",
                children: [s.jsx(ds, {
                    className: "!bg-white !px-4",
                    "data-sentry-element": "DialogHeader",
                    "data-sentry-source-file": "UpSellVariantsSelectorDialog.tsx",
                    children: s.jsxs("div", {
                        className: "flex h-full w-full flex-row items-center justify-between py-[1.125rem]",
                        children: [s.jsx("div", {
                            className: "flex flex-row items-center justify-start gap-2",
                            children: s.jsxs("h1", {
                                className: "text-base font-medium break-words",
                                children: [" ", xe(t == null ? void 0 : t.name, 40), " "]
                            })
                        }), s.jsx(Ts, {
                            className: "h-5 w-5 cursor-pointer",
                            onClick: Z,
                            "data-sentry-element": "X",
                            "data-sentry-source-file": "UpSellVariantsSelectorDialog.tsx"
                        })]
                    })
                }), s.jsx(ms, {
                    className: "scrollbar-hide pb-20 pt-12",
                    "data-sentry-element": "DialogBody",
                    "data-sentry-source-file": "UpSellVariantsSelectorDialog.tsx",
                    children: s.jsx("ul", {
                        className: "flex flex-col space-y-2 px-3",
                        children: (w = t == null ? void 0 : t.variants) == null ? void 0 : w.map((a, D) => {
                            var j;
                            const A = I[a == null ? void 0 : a.variantId],
                                i = (a == null ? void 0 : a.inventoryPolicy) === "DENY" && (a == null ? void 0 : a.inventoryQuantity) <= A,
                                f = () => a.isDiscountedUpsell && a.discountedPrice ? (a.currentPrice - a.discountedPrice) * 100 / a.currentPrice : 0,
                                y = a.isDiscountedUpsell && a.discountedPrice ? a.discountedPrice : a.currentPrice;
                            return s.jsx("li", {
                                className: "flex w-full snap-start flex-col gap-3 py-2 ",
                                children: s.jsxs("div", {
                                    className: "flex flex-row space-x-2",
                                    children: [s.jsx("img", {
                                        src: ss((j = a == null ? void 0 : a.imageLink) != null ? j : Ie, ".jpg", "_small"),
                                        alt: "Cart Item",
                                        className: "h-[5rem] min-h-[5rem] w-[5rem] min-w-[5rem] rounded-lg border border-gray-light object-cover"
                                    }), s.jsxs("div", {
                                        className: "flex w-full flex-col space-y-1",
                                        children: [s.jsxs("div", {
                                            className: "flex flex-col space-y-1",
                                            children: [s.jsx("p", {
                                                className: "mt-1 text-sm font-medium text-coal-dark break-words",
                                                children: xe(t == null ? void 0 : t.name, 40)
                                            }), s.jsx("div", {
                                                className: "flex flex-row space-x-1 text-xs font-medium text-coal-dark",
                                                children: s.jsx("span", {
                                                    children: xe(a == null ? void 0 : a.name, 40)
                                                })
                                            })]
                                        }), s.jsx(Ue, {
                                            total: y,
                                            compareAt: a.currentPrice,
                                            orientation: "horizontal"
                                        }), a.isDiscountedUpsell && !!Math.round(f()) && s.jsxs("span", {
                                            className: "text-sm font-medium text-yay-dark",
                                            children: [Math.round(f()), "% off"]
                                        })]
                                    }), s.jsx("div", {
                                        className: "flex flex-col items-center justify-center",
                                        children: A ? s.jsxs("div", {
                                            className: "flex flex-row items-center justify-between space-x-1.5 rounded-md border-2 border-primary-dark px-2.5 py-1",
                                            children: [s.jsx("button", {
                                                onClick: () => k(a == null ? void 0 : a.variantId, A - 1),
                                                children: s.jsx(bs, {
                                                    className: "h-4 w-4"
                                                })
                                            }), s.jsx("label", {
                                                className: "min-w-[1rem] text-center text-sm",
                                                children: A
                                            }), s.jsx("button", {
                                                disabled: i,
                                                onClick: () => k(a == null ? void 0 : a.variantId, A + 1),
                                                className: `${i?"text-gray-light":"text-coal-dark"}`,
                                                children: s.jsx(pe, {
                                                    className: "h-4 w-4"
                                                })
                                            })]
                                        }) : s.jsx("button", {
                                            className: "rounded-md bg-primary-dark px-4 py-1 text-btnPrimaryText",
                                            onClick: () => k(a == null ? void 0 : a.variantId, 1),
                                            children: g("add")
                                        })
                                    })]
                                })
                            }, `variant-${D+1}`)
                        })
                    })
                }), s.jsx(hs, {
                    "data-sentry-element": "DialogFooter",
                    "data-sentry-source-file": "UpSellVariantsSelectorDialog.tsx",
                    children: s.jsx(fs, {
                        buttonText: g("confirm"),
                        id: "flo_upsell_variant_select",
                        onClick: v,
                        height: "h-14",
                        isCheckout: !1,
                        "data-sentry-element": "PrimaryButton",
                        "data-sentry-source-file": "UpSellVariantsSelectorDialog.tsx"
                    })
                })]
            }), P && s.jsx(Me, {})]
        }) : null
    },
    Bs = Ge.memo(({
        parent: t,
        customTabs: e,
        onUpsellDataParsed: o
    }) => {
        var A;
        const [p] = Ae(), g = p.get("is_background_load") === "true", {
            t: _
        } = je(), {
            state: {
                isAuthenticated: L
            }
        } = Ee(), {
            state: {
                checkoutId: b,
                checkoutUIMetadata: d,
                wishlistConfig: m,
                checkoutItems: V
            }
        } = Ne(), {
            state: {
                cartMetadata: {
                    ui_attributes: z
                }
            }
        } = as(), {
            sendAnalyticsEvent: C
        } = ke(), {
            state: {
                count: Q,
                wishlistedItems: H
            }
        } = Be(), {
            upsell: Y
        } = z || {}, [J, W] = E.useState(!1), [ie, re] = E.useState(), U = p.get("tokenId"), B = ve({
            isAuthenticated: L,
            checkoutId: b,
            tokenId: U
        }), {
            data: P,
            isValidating: F,
            error: I
        } = Ke(() => B || null, ([i, f]) => ns(i, f), ls);
        E.useEffect(() => {
            var i, f, y;
            if (I) {
                const j = (y = (f = (i = I == null ? void 0 : I.response) == null ? void 0 : i.data) == null ? void 0 : f.error) == null ? void 0 : y.message;
                G(j != null ? j : _("failed_to_fetch_upsells"));
                return
            }
            if (!F)
                if (!P) o == null || o({
                    discountedUpsells: [],
                    nonDiscountedUpsells: []
                });
                else {
                    const j = we(P);
                    o == null || o(j)
                }
        }, [P, F, o, I]);
        const {
            discountedUpsells: O,
            nonDiscountedUpsells: k
        } = E.useMemo(() => P ? we(P) : {
            discountedUpsells: [],
            nonDiscountedUpsells: []
        }, [P]), Z = E.useMemo(() => {
            var i, f, y, j;
            return m != null && m.isEnabled ? !(t === "CART" && !((f = (i = m == null ? void 0 : m.config) == null ? void 0 : i.cart) != null && f.enabled) || t === "PAYMENT_PAGE" && !((j = (y = m == null ? void 0 : m.config) == null ? void 0 : y.checkout) != null && j.enabled)) : !1
        }, [t, m]), v = E.useMemo(() => {
            const i = V == null ? void 0 : V.map(f => f.variant_id);
            return H == null ? void 0 : H.filter(f => !i.some(y => y === f.variantId))
        }, [V, H]);
        E.useEffect(() => {
            const i = is(P);
            g || i.length && C({
                eventName: X.UPSELL_WIDGET_LOADED,
                eventType: "load",
                eventFor: [ne.SF_ANALYTICS],
                context: t === "CART" ? "cart" : "checkout",
                metaData: {
                    upsellData: {
                        position: t === "CART" ? "cart" : "payment_page",
                        groupData: rs(P)
                    }
                }
            })
        }, [P]);
        const w = i => {
                re(i), W(!0)
            },
            a = () => {
                W(!1)
            },
            D = () => {
                var K, q, l;
                let i = [];
                const f = ["EMPTY_CART", "CART"].includes(t != null ? t : ""),
                    y = f ? Y == null ? void 0 : Y.discounted_upsell_title : (K = d == null ? void 0 : d.upsellConfig) == null ? void 0 : K.discountedTitle,
                    j = f ? Y == null ? void 0 : Y.upsell_title : (q = d == null ? void 0 : d.upsellConfig) == null ? void 0 : q.title;
                return O.length && i.push({
                    value: he.DISCOUNTED,
                    title: y || _("best_offers"),
                    content: s.jsx("div", {
                        className: "flex w-full flex-row items-center",
                        children: s.jsx("div", {
                            className: "flex w-full flex-col items-start justify-start space-y-2",
                            children: s.jsx(fe, {
                                count: O == null ? void 0 : O.length,
                                customCSS: "pr-3",
                                shouldRenderDots: !1,
                                children: O == null ? void 0 : O.map((n, r) => {
                                    var h;
                                    return s.jsx(ye, {
                                        isDiscounted: !((h = d == null ? void 0 : d.upsellConfig) != null && h.shouldOverrideDiscountedUpsell),
                                        product: n,
                                        openVariantSelector: w,
                                        position: t || "PAYMENT_PAGE"
                                    }, `upsell-product${r+1}`)
                                })
                            })
                        })
                    })
                }), k.length && i.push({
                    value: he.NON_DISCOUNTED,
                    title: j || _("you_might_also_like"),
                    content: s.jsx("div", {
                        className: "flex w-full flex-row items-center",
                        children: s.jsx("div", {
                            className: "flex w-full flex-col items-start justify-start space-y-2",
                            children: s.jsx(fe, {
                                count: k == null ? void 0 : k.length,
                                customCSS: "pr-3",
                                shouldRenderDots: !1,
                                children: k == null ? void 0 : k.map((n, r) => s.jsx(ye, {
                                    isDiscounted: !1,
                                    product: n,
                                    openVariantSelector: w,
                                    position: t || "PAYMENT_PAGE"
                                }, `upsell-product${r+1}`))
                            })
                        })
                    })
                }), Z && t === "CART" && Q > 0 && (v != null && v.length) && i.push({
                    value: he.WISHLIST,
                    title: t === "CART" ? (m == null ? void 0 : m.config.cart.header) || _("your_wishlist") : (m == null ? void 0 : m.config.checkout.header) || _("your_wishlist"),
                    content: s.jsx("div", {
                        className: "flex w-full flex-row items-center",
                        children: s.jsx("div", {
                            className: "flex w-full flex-col items-start justify-start space-y-2",
                            children: s.jsx(fe, {
                                count: v == null ? void 0 : v.length,
                                customCSS: "pr-3",
                                shouldRenderDots: !1,
                                children: v == null ? void 0 : v.map((n, r) => s.jsx(Is, {
                                    index: r,
                                    item: n,
                                    parent: "UPSELL_STRIP"
                                }, `item-${r+1}`))
                            })
                        })
                    })
                }), e != null && e.length && e.forEach(n => {
                    var r, h;
                    i.push({
                        value: n.value,
                        title: n.title,
                        content: s.jsx("div", {
                            className: "flex w-full flex-row items-center",
                            children: s.jsx("div", {
                                className: "flex w-full flex-col items-start justify-start space-y-2",
                                children: s.jsx(fe, {
                                    count: (r = n.products) == null ? void 0 : r.length,
                                    customCSS: "pr-3",
                                    shouldRenderDots: !1,
                                    children: (h = n.products) == null ? void 0 : h.map((S, T) => s.jsx(ye, {
                                        isDiscounted: !1,
                                        product: S,
                                        openVariantSelector: w,
                                        position: t || "PAYMENT_PAGE"
                                    }, `upsell-product${T+1}`))
                                })
                            })
                        })
                    })
                }), (l = d == null ? void 0 : d.upsellConfig) != null && l.shouldOverrideDiscountedUpsell && (i = i.reverse()), i
            };
        return !F && !D().length ? null : s.jsx("div", {
            className: "mt-3",
            children: s.jsxs(_e, {
                loading: F,
                children: [s.jsx(_e.Skeleton, {
                    children: s.jsx(xs, {})
                }), s.jsx(_e.Content, {
                    children: s.jsxs("div", {
                        className: "flex flex-col",
                        children: [s.jsx("div", {
                            className: "flex w-full flex-col gap-3 rounded-2xl border-[2px] border-gray-light bg-white p-3 pb-0 pr-0",
                            children: s.jsxs(us, {
                                defaultValue: ((A = D()[0]) == null ? void 0 : A.value) || he.DISCOUNTED,
                                children: [s.jsx(gs, {
                                    className: "spacex-2 mb-2 flex items-start space-x-4 text-sm",
                                    children: D().map(i => s.jsx(_s, {
                                        value: i.value,
                                        renderTrigger: ({
                                            isSelected: f,
                                            onClick: y
                                        }) => s.jsxs("button", {
                                            onClick: y,
                                            className: os("relative", f ? "font-semibold text-yay-dark" : "font-medium text-coal-light"),
                                            children: [i.title, !!f && s.jsx("span", {
                                                className: "absolute -bottom-2 left-0 w-full border border-coal-dark"
                                            })]
                                        })
                                    }, i.value))
                                }), D().map(i => s.jsx(ys, {
                                    value: i.value,
                                    children: i.content
                                }, i.value))]
                            })
                        }), s.jsx(As, {
                            upsellProduct: ie,
                            isVariantSelectorOpen: J,
                            closeVariantSelector: a,
                            position: t || "PAYMENT_PAGE"
                        })]
                    })
                })]
            })
        })
    });
export {
    Bs as U
};
//# sourceMappingURL=upsell-components-CqnOSKal.js.map