var we = Object.defineProperty,
    Be = Object.defineProperties;
var ve = Object.getOwnPropertyDescriptors;
var le = Object.getOwnPropertySymbols;
var Ie = Object.prototype.hasOwnProperty,
    Le = Object.prototype.propertyIsEnumerable;
var G = (c, t, a) => t in c ? we(c, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : c[t] = a,
    ie = (c, t) => {
        for (var a in t || (t = {})) Ie.call(t, a) && G(c, a, t[a]);
        if (le)
            for (var a of le(t)) Le.call(t, a) && G(c, a, t[a]);
        return c
    },
    ue = (c, t) => Be(c, ve(t));
var $ = (c, t, a) => G(c, typeof t != "symbol" ? t + "" : t, a);
var F = (c, t, a) => new Promise((C, x) => {
    var h = g => {
            try {
                O(a.next(g))
            } catch (i) {
                x(i)
            }
        },
        y = g => {
            try {
                O(a.throw(g))
            } catch (i) {
                x(i)
            }
        },
        O = g => g.done ? C(g.value) : Promise.resolve(g.value).then(h, y);
    O((a = a.apply(c, t)).next())
});
import {
    r as d,
    j as s
} from "./react-core-C02-NrKc.js";
import {
    C as ke,
    a as Se,
    B as Pe,
    b as Fe,
    c as Me
} from "./cart-components-CVEXMqvK.js";
import {
    C as He,
    R as qe,
    c as Ue,
    I as ze
} from "./checkout-components-CDs-GsFA.js";
import {
    i as de,
    k as Ke,
    e as Ve,
    f as fe,
    b as pe,
    a as Ce,
    bs as Ge,
    u as xe,
    ad as $e,
    x as Q,
    p as L,
    q as j,
    bt as Qe,
    bu as Je,
    A as We,
    d as U,
    bv as Xe,
    bw as Ye,
    ao as he,
    b4 as Ze,
    M as ge,
    P as es,
    B as ss,
    C as ts,
    c as as,
    D as os,
    E as ns,
    w as rs
} from "./lib-D7WRmHWF.js";
import {
    M as cs,
    g as ls
} from "./ui-BLvhcVBj.js";
import "./sentry-1CVSdSoY.js";
import {
    X as is,
    T as Ee
} from "./assests-8-RYiWy6.js";
import {
    v as us,
    x as ds,
    y as Te,
    M as fs,
    c as ps,
    P as _e,
    e as Cs,
    f as xs
} from "./common-components-DhcySBak.js";
import {
    u as hs
} from "./react-router-dom-C_20INan.js";
import {
    U as gs
} from "./upsell-components-CqnOSKal.js";
(function() {
    try {
        var c = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {},
            t = new c.Error().stack;
        t && (c._sentryDebugIds = c._sentryDebugIds || {}, c._sentryDebugIds[t] = "2795e1c3-a182-4019-8782-c3ce01032c11", c._sentryDebugIdIdentifier = "sentry-dbid-2795e1c3-a182-4019-8782-c3ce01032c11")
    } catch (a) {}
})();
class Es {
    constructor(t, a, C, x) {
        $(this, "queue", []);
        $(this, "isProcessing", !1);
        this.initialize = t, this.logout = a, this.login = C, this.closeAllModals = x, this.initialize = t, this.logout = a, this.login = C
    }
    enqueue(t) {
        return new Promise((a, C) => {
            this.queue.push({
                event: t,
                resolve: a,
                reject: C
            }), this.processNext()
        })
    }
    processNext() {
        return F(this, null, function*() {
            if (this.isProcessing || this.queue.length === 0) return;
            this.isProcessing = !0;
            const {
                event: t,
                resolve: a,
                reject: C
            } = this.queue[0];
            try {
                yield this.processEvent(t), a()
            } catch (x) {
                C(x)
            } finally {
                this.queue.shift(), this.isProcessing = !1, this.processNext()
            }
        })
    }
    processEvent(t) {
        return F(this, null, function*() {
            var a;
            switch ((a = t == null ? void 0 : t.data) == null ? void 0 : a.type) {
                case j.CART_OPEN:
                    yield this.initialize(t);
                    break;
                case j.LOGOUT_FROM_CHECKOUT:
                    yield this.logout(t);
                    break;
                case j.LOGIN_FROM_CHECKOUT:
                    yield this.login(t);
                    break;
                case j.CLOSE_ALL_MODALS:
                    yield this.closeAllModals(t);
                    break
            }
        })
    }
    clear() {
        this.queue = [], this.isProcessing = !1
    }
    get length() {
        return this.queue.length
    }
}
const vs = () => {
    var Z, ee, se, te, ae, oe, ne, re, ce;
    const [c] = hs(), t = c.get("is_background_load") === "true", a = de(), {
        state: {
            accountId: C
        }
    } = Ke(), {
        state: {
            isAuthenticated: x
        },
        actions: {
            logout: h,
            login: y
        }
    } = a, O = Ve(), g = fe(), {
        state: {
            checkoutItems: i,
            billing: l,
            appliedCoupons: b,
            checkoutId: R,
            checkoutUIMetadata: e,
            checkoutModal: N,
            cartDialog: u,
            wishlistConfig: D,
            availableAddOns: B,
            appliedCartAddOns: k
        },
        actions: {
            updateCheckoutBasedOnCheckoutResponse: z,
            setCheckoutModal: v,
            setCartDialog: I
        }
    } = g, M = pe(), {
        state: {
            merchant: E
        }
    } = M, w = Ce();
    Ge({
        isLoadingComplete: !!R,
        checkElementInForeground: !0,
        eventName: U.FLO_CART_LOADING_TIME_REACT
    });
    const {
        t: S
    } = xe(), o = d.useRef(null), _ = d.useRef(null), [T, m] = d.useState(!1), H = d.useMemo(() => {
        var n, f;
        return ((f = (n = e == null ? void 0 : e.progressBarConfig) == null ? void 0 : n.customizations) == null ? void 0 : f.category) === cs.COUNT_BASED
    }, [(ee = (Z = e == null ? void 0 : e.progressBarConfig) == null ? void 0 : Z.customizations) == null ? void 0 : ee.category]), P = d.useMemo(() => i == null ? void 0 : i.filter(n => !n.is_freebie).reduce((n, f) => n + f.quantity, 0), [i]), J = d.useRef(P), W = d.useRef(l == null ? void 0 : l.sub_total), K = $e(i);
    d.useEffect(() => {
        Q() && L(j.SET_CART_ITEM_COUNT, {
            totalItems: K
        })
    }, [K]), d.useEffect(() => {
        J.current = P, W.current = l == null ? void 0 : l.sub_total
    }, [P, l == null ? void 0 : l.sub_total]), d.useEffect(() => {
        !T && (!i || (i == null ? void 0 : i.length) === 0) && Qe(!1, {
            origin: Je.CART
        })
    }, [i, T]), d.useEffect(() => {
        Q() && L(j.REMOVE_CART_LOADING_STATE, {}), setTimeout(() => {
            var n;
            (n = o.current) == null || n.openAccordion()
        }, 3e3)
    }, []), d.useEffect(() => {
        const n = Object.values(B != null ? B : {});
        if (!n.length) return;
        const f = n.some(r => (r == null ? void 0 : r.addon_level) === "CART" && ["CART", "DEFAULT"].includes(r == null ? void 0 : r.ui_asset)),
            p = n.some(r => (r == null ? void 0 : r.addon_level) === "ITEM" && ["CART", "DEFAULT"].includes(r == null ? void 0 : r.ui_asset));
        E != null && E.merchantId && !t && w.sendAnalyticsEvent({
            eventName: U.FLO_ADDON_LOADED,
            eventFor: [We.SF_ANALYTICS],
            eventType: "load",
            metaData: {
                merchantId: E == null ? void 0 : E.merchantId,
                addOnData: {
                    view: "CART",
                    isCartLevelAddOn: f,
                    isItemLevelAddOn: p
                }
            }
        })
    }, [B, E == null ? void 0 : E.merchantId, t]), d.useEffect(() => {
        C && Y()
    }, [C]), d.useEffect(() => {
        const n = new Es(() => Y(!!R), () => h(!0), p => {
                var r;
                if ((r = p == null ? void 0 : p.data) != null && r.payload) {
                    const {
                        idToken: A,
                        refreshToken: q,
                        authExpiry: Ne,
                        refreshExpiry: De
                    } = p.data.payload;
                    y(A, q, Ne, De)
                }
            }, () => {
                v("NONE")
            }),
            f = p => {
                n.enqueue(p).catch(r => {
                    console.error("error processing cart event:", r)
                })
            };
        return window.addEventListener("message", f), () => {
            window.removeEventListener("message", f), n.clear()
        }
    }, [T, x, R]), d.useEffect(() => {
        history.pushState({
            cart: "ongoing"
        }, "")
    }, []);
    const X = () => {
            v("NONE"), L(j.CLOSE_CART_IFRAME, {})
        },
        V = d.useCallback(() => {
            if (N !== "NONE") {
                v("NONE"), history.pushState({
                    cart: "close_modal"
                }, "");
                return
            }
            X()
        }, [N]);
    d.useEffect(() => (window.addEventListener("popstate", V), () => {
        window.removeEventListener("popstate", V)
    }), [V]);
    const Y = (n = !1) => F(void 0, null, function*() {
            var f, p;
            m(!0);
            try {
                const r = yield Xe({
                    tokenId: c.get("tokenId"),
                    analytics: w,
                    userContext: O,
                    authContext: a,
                    checkoutContext: g,
                    merchantContext: M,
                    isUpdate: n
                });
                if (r !== void 0) {
                    const {
                        checkoutResponse: A
                    } = r;
                    ye(A)
                }
            } catch (r) {
                if (r instanceof Ye) {
                    const {
                        err: A
                    } = r.extraData;
                    ((f = A == null ? void 0 : A.response) == null ? void 0 : f.status) === 403 && h()
                }((p = r == null ? void 0 : r.response) == null ? void 0 : p.status) === 403 && h(!0)
            } finally {
                m(!1)
            }
        }),
        ye = n => {
            me(n)
        },
        me = n => {
            z(n, !1, !0)
        },
        [Ae, je] = d.useState(!1);
    d.useEffect(() => {
        const n = _.current;
        if (!n) return;
        (() => {
            je(n.scrollHeight > n.clientHeight)
        })()
    });
    const Oe = () => {
            var n, f, p;
            return (p = (f = (n = e == null ? void 0 : e.primaryCTAConfig) == null ? void 0 : n.find(r => r.type === "CART")) == null ? void 0 : f.ctaText) != null ? p : "Checkout"
        },
        be = (ae = (te = (se = e == null ? void 0 : e.progressBarConfig) == null ? void 0 : se.milestones) == null ? void 0 : te.map(n => Number(n.milestone_amount))) != null ? ae : [],
        Re = n => {
            var f, p, r, A, q;
            t || w.sendAnalyticsEvent({
                eventName: U.FLO_CHECKOUT_MILESTONE_REACHED,
                eventType: "flo_action",
                metaData: {
                    milestone: n,
                    milestones: (f = e == null ? void 0 : e.progressBarConfig) == null ? void 0 : f.milestones,
                    progressBarCategory: (r = (p = e == null ? void 0 : e.progressBarConfig) == null ? void 0 : p.customizations) == null ? void 0 : r.category,
                    progressBarType: (q = (A = e == null ? void 0 : e.progressBarConfig) == null ? void 0 : A.customizations) == null ? void 0 : q.type
                }
            })
        };
    return R ? s.jsxs("div", {
        className: "items-between flex h-full flex-col bg-white relative",
        "data-sentry-component": "Cart",
        "data-sentry-source-file": "cart.tsx",
        children: [!!((oe = e == null ? void 0 : e.progressBarConfig) != null && oe.isEnabled) && s.jsx(ds, {
            total: H ? P : l == null ? void 0 : l.sub_total,
            mileStonesAmount: be,
            previousTotal: H ? J.current : W.current,
            isCountBased: H
        }), s.jsx(ke, {
            totalItems: K,
            "data-sentry-element": "CartHeader",
            "data-sentry-source-file": "cart.tsx"
        }), s.jsx(Te, {
            bannerPosition: he.HEADER,
            "data-sentry-element": "CartBannerStrip",
            "data-sentry-source-file": "cart.tsx"
        }), (i == null ? void 0 : i.length) > 0 ? s.jsxs(s.Fragment, {
            children: [s.jsxs("div", {
                className: "flex flex-1 flex-col gap-3 overflow-auto overflow-x-hidden pt-3 pb-5",
                ref: _,
                children: [e && e.progressBarConfig && e.progressBarConfig.isEnabled && s.jsx(s.Fragment, {
                    children: s.jsx(ls, {
                        total: H ? P : l == null ? void 0 : l.sub_total,
                        milestones: e.progressBarConfig.milestones,
                        customizations: e.progressBarConfig.customizations,
                        onMilestoneReached: Re
                    })
                }), s.jsxs("div", {
                    className: "flex flex-col gap-3  px-3 pb-5",
                    children: [s.jsx(Ts, {
                        items: i,
                        disableOOSItems: !1,
                        checkoutItemsMutable: !0,
                        isUpdating: T,
                        setIsUpdating: m,
                        availableAddOns: B,
                        cartLevelAddOns: k
                    }), (Ze(b) || !!(E != null && E.isDiscountEnabled)) && s.jsx(He, {
                        context: "cart"
                    }), (ne = e == null ? void 0 : e.upsellConfig) != null && ne.isEnabled || x && (D != null && D.isEnabled) && ((ce = (re = D == null ? void 0 : D.config) == null ? void 0 : re.cart) != null && ce.enabled) ? s.jsx(gs, {
                        parent: "CART"
                    }) : s.jsx(s.Fragment, {}), s.jsx(qe, {
                        context: "cart"
                    }), s.jsx(Se, {}), s.jsx(fs, {
                        customClass: "!pt-4 !p-0 !h-2 justify-start"
                    })]
                })]
            }), s.jsx(_s, {
                setDialog: I,
                price: l == null ? void 0 : l.total_payable,
                isLoading: T,
                showShadow: Ae,
                primaryCTAText: Oe(),
                setIsUpdating: m
            }), s.jsx(Pe, {
                open: u === "billingDetails",
                setDialog: I,
                isLoading: T
            }), s.jsx(Fe, {
                open: u === "authentication" || u === "cartAuthentication",
                setDialog: I
            }), s.jsx(Me, {
                open: u === "otpVerification" || u === "cartOtpVerification",
                setDialog: I
            }), s.jsx(ps, {
                isOpen: N === "COMBINED_PRODUCT_REMOVE",
                setIsOpen: () => v("NONE"),
                translateAxis: "y",
                customClass: "overflow-scroll md:!top-auto md:absolute",
                dialogOverlay: !0,
                modalType: "COMBINED_PRODUCT_REMOVE",
                children: s.jsx(Ue, {})
            })]
        }) : s.jsxs("div", {
            className: "flex h-full w-full flex-col",
            children: [s.jsxs("div", {
                className: "flex flex-1 flex-col items-center justify-center space-y-6",
                children: [s.jsxs("div", {
                    className: "flex flex-col items-center space-y-2",
                    children: [s.jsx("img", {
                        src: is,
                        className: "",
                        alt: "cart"
                    }), s.jsx("div", {
                        className: "text-sm font-medium text-coal-light ",
                        children: S("cart_is_empty")
                    })]
                }), s.jsx(_e, {
                    buttonText: S("continue_shopping"),
                    containerClassName: "p-4",
                    width: "w-[228px]",
                    isLoading: T,
                    onClick: X
                })]
            }), s.jsx("img", {
                src: Ee,
                className: "mb-14 h-4",
                alt: "shopflo-logo"
            })]
        })]
    }) : s.jsx(us, {})
};

function Ts({
    items: c,
    disableOOSItems: t,
    checkoutItemsMutable: a,
    isUpdating: C = !1,
    setIsUpdating: x,
    availableAddOns: h,
    cartLevelAddOns: y
}) {
    var R;
    const {
        handleAddOnEdit: O,
        isLoading: g
    } = ge({
        setIsUpdating: x,
        isCartItem: !0
    }), i = es(h, y), l = (R = Object.values(h)) == null ? void 0 : R.filter(e => (e == null ? void 0 : e.addon_level) === "ITEM"), b = y == null ? void 0 : y.filter(e => {
        var N, u;
        return ["CART", "DEFAULT"].includes((u = (N = h == null ? void 0 : h[e == null ? void 0 : e.addon_id]) == null ? void 0 : N.ui_asset) != null ? u : "")
    });
    return s.jsxs("ul", {
        className: "flex w-full flex-col space-y-3",
        "data-sentry-component": "CartItems",
        "data-sentry-source-file": "cart.tsx",
        children: [s.jsx("li", {
            children: i && (b == null ? void 0 : b.map(e => s.jsx(Cs, {
                disableActions: g,
                variant: "CART",
                addOnData: h[e == null ? void 0 : e.addon_id],
                handleAddOnDelete: () => O({
                    action: "DELETE",
                    addOnLevel: "CART",
                    addOnId: e == null ? void 0 : e.addon_id
                })
            }, e == null ? void 0 : e.addon_id)))
        }), c == null ? void 0 : c.map((e, N) => s.jsx("li", {
            children: s.jsx(ze, ue(ie({}, e), {
                disableOOSItems: t,
                checkoutItemsMutable: a,
                isCartItem: !0,
                isUpdating: C,
                setIsUpdating: x,
                itemLevelAddons: l != null ? l : []
            }))
        }, `${e.item_id}_${N}`))]
    })
}

function _s({
    setDialog: c,
    price: t,
    isLoading: a = !1,
    showShadow: C,
    primaryCTAText: x = "Checkout",
    setIsUpdating: h
}) {
    var S;
    const {
        state: {
            isAuthenticated: y
        }
    } = de(), {
        state: {
            checkoutItems: O,
            appliedCoupons: g,
            billing: i,
            checkoutId: l,
            availableAddOns: b,
            appliedCartAddOns: R,
            checkoutModal: e
        },
        actions: {
            setCheckoutModal: N
        }
    } = fe(), {
        state: {
            merchant: u
        }
    } = pe(), {
        sendAnalyticsEvent: D
    } = Ce(), {
        handleAddOnEdit: B
    } = ge({
        setIsUpdating: h,
        isCartItem: !0
    }), {
        cartPermissions: k
    } = ss(), {
        t: z
    } = xe(), v = u == null ? void 0 : u.hideCartTotal, I = () => F(this, null, function*() {
        try {
            yield ns(`/checkout/v1/cart/${l}/checkout`, {}), L(j.CART_TO_CHECKOUT, {
                checkoutId: l,
                lineItems: O,
                cartTotal: i.total_payable,
                coupons: g
            })
        } catch (o) {
            console.error("error in going to checkout", o), rs("Failed loading checkout")
        }
    }), M = () => {
        if (u != null && u.customCartCheckoutEnabled) {
            L(j.CART_TO_CUSTOM_CHECKOUT, {});
            return
        }
        if (D({
                eventName: U.FLO_CHECKOUT_CLICKED,
                eventType: "click"
            }), y) {
            I();
            return
        }
        if (Q() && !os()) {
            let o = new URL(document.location.href),
                _ = new URLSearchParams(o.search);
            _.delete("page"), _.delete("referrer"), _.append("checkoutId", l), _.append("referrer", "cart"), o.search = _.toString(), L(j.PARENT_REDIRECT, {
                redirectUrl: o.href,
                clearCart: !1
            });
            return
        }
        c("authentication")
    }, E = d.useMemo(() => {
        const o = ts(t),
            _ = o == null ? void 0 : o.split(".")[0],
            T = o == null ? void 0 : o.split(".")[1];
        return s.jsxs("div", {
            className: "text-[18px] font-semibold text-coal-dark",
            children: [s.jsx("span", {
                children: _
            }), !!T && s.jsxs(s.Fragment, {
                children: [s.jsx("span", {
                    children: "."
                }), s.jsx("span", {
                    className: "text-sm font-normal",
                    children: T
                })]
            })]
        })
    }, [t]), w = Object.values(b != null ? b : {}).filter(o => (o == null ? void 0 : o.addon_level) === "CART" && ["CART", "DEFAULT"].includes(o == null ? void 0 : o.ui_asset) && o.addon_type !== "CART_NOTE");
    return s.jsxs("div", {
        "data-sentry-component": "CartFooter",
        "data-sentry-source-file": "cart.tsx",
        children: [s.jsx(Te, {
            bannerPosition: he.FOOTER,
            "data-sentry-element": "CartBannerStrip",
            "data-sentry-source-file": "cart.tsx"
        }), w.map((o, _) => {
            var T;
            return s.jsx("div", {
                className: C && _ === 0 ? "shadow-[0px_-7px_8px_0px_#0000001A]" : "",
                children: s.jsx(xs, {
                    apiActionLoading: a,
                    disableOnClick: !0,
                    variant: "CART",
                    addOnData: o,
                    isChecked: (T = R.some(m => (m == null ? void 0 : m.addon_id) === (o == null ? void 0 : o.addon_id))) != null ? T : !1,
                    handleCheckBoxClick: m => {
                        B({
                            action: m ? "ADD" : "DELETE",
                            addOnLevel: "CART",
                            addOnId: o == null ? void 0 : o.addon_id
                        })
                    }
                }, o == null ? void 0 : o.addon_id)
            }, o.addon_id)
        }), s.jsxs("div", {
            className: as("flex flex-col space-y-3 px-3 pb-6 pt-4", C && !(w != null && w.length) ? "shadow-[0px_-1px_8px_0px_#0000001A]" : ""),
            children: [s.jsxs("div", {
                className: "item-center flex justify-between space-x-6",
                children: [!v && s.jsxs("div", {
                    className: "flex flex-col justify-center cursor-pointer",
                    onClick: () => {
                        c("billingDetails")
                    },
                    children: [E, s.jsx("button", {
                        className: "truncate text-left text-[12px] text-coal-dark underline decoration-underline underline-offset-2",
                        onClick: () => {
                            c("billingDetails")
                        },
                        children: z("estimated_total")
                    })]
                }), s.jsx(_e, {
                    containerClassName: "min-w-40",
                    buttonText: x,
                    onClick: M,
                    isLoading: a,
                    isDisabled: u != null && u.customCartCheckoutEnabled ? !1 : ((S = k == null ? void 0 : k.checkoutBtnStatus) == null ? void 0 : S.length) > 0,
                    showUpiIcon: u == null ? void 0 : u.showUpiIconsOnCartButton,
                    "data-sentry-element": "PrimaryButton",
                    "data-sentry-source-file": "cart.tsx"
                })]
            }), s.jsx("img", {
                src: Ee,
                className: "h-4",
                alt: "shopflo-logo"
            })]
        })]
    })
}
export {
    vs as C
};
//# sourceMappingURL=page-cart-DP1yjkIR.js.map