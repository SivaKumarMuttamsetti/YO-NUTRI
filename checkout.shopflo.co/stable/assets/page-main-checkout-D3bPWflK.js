var Nt = Object.defineProperty;
var ke = Object.getOwnPropertySymbols;
var wt = Object.prototype.hasOwnProperty,
    Ot = Object.prototype.propertyIsEnumerable;
var Te = (o, i, n) => i in o ? Nt(o, i, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : o[i] = n,
    pe = (o, i) => {
        for (var n in i || (i = {})) wt.call(i, n) && Te(o, n, i[n]);
        if (ke)
            for (var n of ke(i)) Ot.call(i, n) && Te(o, n, i[n]);
        return o
    };
var ne = (o, i, n) => new Promise((a, h) => {
    var b = l => {
            try {
                N(n.next(l))
            } catch (L) {
                h(L)
            }
        },
        U = l => {
            try {
                N(n.throw(l))
            } catch (L) {
                h(L)
            }
        },
        N = l => l.done ? a(l.value) : Promise.resolve(l.value).then(b, U);
    N((n = n.apply(o, i)).next())
});
import {
    r as c,
    c as Et,
    j as e
} from "./react-core-C02-NrKc.js";
import {
    u as At
} from "./react-router-dom-C_20INan.js";
import {
    u as kt,
    i as Tt,
    e as Lt,
    k as Ke,
    f as Re,
    b as $e,
    ai as Ge,
    a as Ve,
    ad as It,
    N as Ye,
    bD as Dt,
    b3 as Bt,
    x as re,
    p as Le,
    q as Ie,
    A as De,
    d as _,
    bE as Pt,
    br as Ut,
    bF as Mt,
    bG as Ft,
    bw as Ht,
    bH as Kt,
    bI as Rt,
    bJ as $t,
    bK as Gt,
    bL as Vt,
    al as G,
    b4 as Yt,
    n as Wt,
    bd as zt,
    be as qt,
    bf as Jt,
    b5 as We,
    bM as Be
} from "./lib-D7WRmHWF.js";
import {
    d as Qt,
    C as Xt,
    e as Zt,
    c as es,
    U as ts,
    f as ie,
    B as ze,
    g as ss
} from "./checkout-components-CDs-GsFA.js";
import {
    M as as,
    z as os,
    d as le,
    c as Pe,
    w as ns,
    B as rs,
    l as qe,
    A as Je
} from "./common-components-DhcySBak.js";
import {
    Y as ls
} from "./assests-8-RYiWy6.js";
import {
    E as is,
    a as $,
    f as ds,
    U as cs,
    O as Qe,
    g as us
} from "./components-DLiBXlgf.js";
import {
    t as Ue
} from "./i18next-BW2i0xjm.js";
import {
    w as ms
} from "./sentry-1CVSdSoY.js";
import {
    e as Me,
    S as xs,
    i as Fe,
    C as hs
} from "./react-ui-CLI46-or.js";
(function() {
    try {
        var o = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {},
            i = new o.Error().stack;
        i && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[i] = "98e16739-dd75-4558-9e53-c823da2280a8", o._sentryDebugIdIdentifier = "sentry-dbid-98e16739-dd75-4558-9e53-c823da2280a8")
    } catch (n) {}
})();
let fs = !1,
    He = !1;
const As = () => {
        var Ne, we, Oe, Ee, Ae;
        const [o] = At(), i = o.get("referrer") || void 0, {
            t: n
        } = kt(), a = Tt(), {
            state: {
                isAuthenticated: h,
                isAuthenticating: b
            },
            actions: {
                logout: U
            }
        } = a, N = Lt(), {
            state: {
                user: l,
                userLoginType: L
            },
            actions: {
                setUserData: X,
                deleteAddressCache: de
            }
        } = N, f = Ke(), {
            state: {
                checkoutMetadata: Z
            }
        } = f, V = Re(), {
            state: {
                billing: w,
                appliedCoupons: M,
                checkoutView: g,
                isTwoStepCheckout: ce,
                exitSurveyOptions: F,
                checkoutItems: ee,
                isC2P: v,
                redirectUrl: O,
                isBuyNow: E,
                checkoutUIMetadata: y,
                checkoutExpired: A,
                isOrderSummaryOpen: x,
                checkoutItemsMutable: I,
                initialCheckoutStep: H,
                orderSummaryStyle: te,
                checkoutModal: k,
                showErrorScreen: Y,
                checkoutLoading: K,
                availableAddOns: S,
                appliedCartAddOns: W,
                errorResponses: C,
                shippingHandles: se
            },
            actions: {
                updateCheckoutBasedOnCheckoutResponse: ae,
                setCheckoutView: oe,
                setCheckoutExpired: R,
                setCheckoutModal: ge,
                setIsOrderSummaryOpen: ye,
                setShowErrorScreen: Ce,
                setCheckoutId: Xe
            }
        } = V, be = $e(), {
            state: {
                merchant: d
            }
        } = be, {
            isAddItemsWorthDelivery: ue,
            isWeightBasedShipping: me,
            isItemNotServicable: Ze,
            triggerCheckoutErrorInfoToast: et
        } = Ge(), je = Ve(), {
            sendAnalyticsEvent: D
        } = je, [tt, st] = c.useState(!0), [at, ot] = c.useState(!1), [xe, nt] = c.useState(!0), [rt, lt] = c.useState(!0), [it, gs] = c.useState(!1), [dt, he] = c.useState(!1), [ct, fe] = c.useState(!1), {
            hash: ut
        } = Et(), z = c.useRef(null), _e = It(ee), {
            servicableItems: B,
            unservicableItems: q
        } = Ye(), ve = () => {
            D({
                eventName: _.FLO_BACK_CLICK,
                eventType: "click"
            }), We(O, E)
        };
        Dt(), c.useEffect(() => {
            var t;
            g === "PAYMENTS" && (t = z == null ? void 0 : z.current) != null && t.closeAccordion && z.current.closeAccordion(), Bt(g)
        }, [g]), c.useEffect(() => {
            re() && Le(Ie.SET_CART_ITEM_COUNT, {
                totalItems: _e
            })
        }, [_e]), c.useEffect(() => {
            history.pushState({
                checkout: "ongoing"
            }, "")
        }, []), c.useEffect(() => {
            const t = Object.values(S != null ? S : {});
            if (!t.length) return;
            const s = t.some(r => (r == null ? void 0 : r.addon_level) === "CART" && ["CHECKOUT", "DEFAULT"].includes(r == null ? void 0 : r.ui_asset)),
                u = t.some(r => (r == null ? void 0 : r.addon_level) === "ITEM" && ["CHECKOUT", "DEFAULT"].includes(r == null ? void 0 : r.ui_asset));
            d != null && d.merchantId && g === "PAYMENTS" && D({
                eventName: _.FLO_ADDON_LOADED,
                eventFor: [De.SF_ANALYTICS],
                eventType: "load",
                metaData: {
                    merchantId: d == null ? void 0 : d.merchantId,
                    addOnData: {
                        view: "CHECKOUT",
                        isCartLevelAddOn: s,
                        isItemLevelAddOn: u
                    }
                }
            })
        }, [S, d == null ? void 0 : d.merchantId, g]), c.useEffect(() => {
            const t = s => {
                const u = (d == null ? void 0 : d.exitCheckoutAction) === "none" || (d == null ? void 0 : d.exitCheckoutAction) === "survey" && !((F == null ? void 0 : F.length) > 0);
                if (D({
                        eventName: _.FLO_BACK_CLICK,
                        eventType: "click",
                        metaData: {
                            bannerData: {
                                source: "BROWSER_BACK_BTN"
                            }
                        }
                    }), x) {
                    ye(!1), history.pushState({
                        checkout: "ongoing"
                    }, "");
                    return
                }
                if (k !== "NONE") {
                    ge("NONE"), history.pushState({
                        checkout: "ongoing"
                    }, "");
                    return
                }
                if (H === "PAYMENTS") {
                    u ? ve() : fe(!0);
                    return
                }
                switch (g) {
                    case "PAYMENTS":
                        v || oe("ADDRESS_LIST");
                        break;
                    default:
                        u ? ve() : fe(!0);
                        return
                }
                history.pushState({
                    checkout: "ongoing"
                }, "")
            };
            return window.addEventListener("popstate", t), () => {
                window.removeEventListener("popstate", t)
            }
        }, [d, g, k, F, v, x]), c.useEffect(() => {
            mt(), b || xt()
        }, [h, b]), c.useEffect(() => {
            (ue || me) && et()
        }, [ue, me]), c.useEffect(() => {
            var t;
            (C == null ? void 0 : C.length) > 0 && D({
                eventName: _.SHIPPING_RATE_FAILURE,
                eventFor: [De.SF_ANALYTICS],
                eventType: "load",
                metaData: {
                    errorSource: "shopflo",
                    shippingData: se,
                    addressData: (t = l == null ? void 0 : l.default_shipping_address) == null ? void 0 : t.id,
                    errorResponses: C
                }
            })
        }, C);
        const mt = () => ne(void 0, null, function*() {
                try {
                    if ((yield Pt("/ruok")).message !== "imok") throw new Error("Health check failed")
                } catch (t) {
                    if (ms(s => {
                            var u, r, j, m;
                            s.setTag("error_type", Ut.HEALTH_CHECK_ERROR), s.setExtra("errStatus", (u = t == null ? void 0 : t.response) == null ? void 0 : u.status), s.setExtra("errMessage", (m = (j = (r = t == null ? void 0 : t.response) == null ? void 0 : r.data) == null ? void 0 : j.error) != null ? m : t == null ? void 0 : t.message), s.captureException(t)
                        }), (t == null ? void 0 : t.code) === "ERR_NETWORK") {
                        Le(Ie.FLO_CHECKOUT_RUOK_FAILED, {
                            errorCode: "ERR_NETWORK"
                        });
                        return
                    }
                    Ce(!0)
                }
            }),
            xt = () => ne(void 0, null, function*() {
                var t, s, u, r, j, m, J, Q;
                try {
                    const T = yield Mt({
                        tokenId: o.get("tokenId"),
                        checkoutIdParam: o.get("checkoutId"),
                        oldCheckoutIdParam: o.get("old_checkout_id"),
                        checkoutType: o.get("checkout_type"),
                        analytics: je,
                        userContext: N,
                        authContext: a,
                        checkoutContext: V,
                        merchantContext: be,
                        merchantUiConfigContext: f,
                        isCheckoutInteractive: fs,
                        hashParam: ut,
                        referrer: i
                    });
                    if (T !== void 0) {
                        const {
                            checkoutResponse: P,
                            tokenData: p
                        } = T;
                        if ((t = p == null ? void 0 : p.order) != null && t.id) {
                            Ft({
                                originUrl: (s = p == null ? void 0 : p.data) == null ? void 0 : s.origin_url,
                                orderStatusUrl: (u = p == null ? void 0 : p.order) == null ? void 0 : u.order_status_url,
                                tokenId: p == null ? void 0 : p.uid
                            });
                            return
                        }
                        He = (Q = (J = (m = (j = (r = P == null ? void 0 : P.metadata) == null ? void 0 : r.ui_config) == null ? void 0 : j.layout) == null ? void 0 : m.metadata) == null ? void 0 : J.show_order_summary_total) != null ? Q : !1, ft(P)
                    }
                } catch (T) {
                    T instanceof Ht && ht(T)
                }
            }),
            ht = t => {
                var u, r, j, m, J, Q, T, P;
                const {
                    err: s
                } = t.extraData;
                if (((u = s == null ? void 0 : s.response) == null ? void 0 : u.status) === 403) U();
                else if (Kt.includes((j = (r = s == null ? void 0 : s.response) == null ? void 0 : r.data) == null ? void 0 : j.error)) {
                    Rt({
                        tokenId: o.get("tokenId")
                    });
                    return
                } else if (((m = s == null ? void 0 : s.response) == null ? void 0 : m.status) === 400 && $t.includes((Q = (J = s == null ? void 0 : s.response) == null ? void 0 : J.data) == null ? void 0 : Q.error)) {
                    const {
                        expired: p,
                        isInvalidUser: St
                    } = Gt((P = (T = s == null ? void 0 : s.response) == null ? void 0 : T.data) == null ? void 0 : P.error);
                    R(p, St)
                } else Ce(!0)
            },
            ft = t => ne(void 0, null, function*() {
                Se(t), t != null && t.sync_needed && (t != null && t.addresses) && (t = yield Vt(t == null ? void 0 : t.uid), Se(t)), st(!1)
            }),
            Se = t => {
                var s, u, r, j;
                if ((s = t == null ? void 0 : t.metadata) != null && s.ui_config) {
                    const m = (j = (r = (u = t == null ? void 0 : t.metadata) == null ? void 0 : u.ui_config) == null ? void 0 : r.layout) == null ? void 0 : j.available_elements;
                    m && (nt(!!(m != null && m.includes("HEADER"))), lt(!!(m != null && m.includes("ORDER_SUMMARY"))))
                }
                ae(t)
            },
            pt = () => {
                ot(!1)
            },
            gt = () => {
                D({
                    eventName: _.FLO_LOGOUT_BTN_CLICKED,
                    eventType: "click"
                }), Xe(""), X({
                    uid: "",
                    email: "",
                    phone: "",
                    name: "",
                    default_billing_address: void 0,
                    default_shipping_address: void 0,
                    addresses: void 0,
                    hasHomeAddr: !1,
                    hasWorkAddr: !1
                }), de(), he(!1), U(), zt(qt.SHOPFLO_CHANNEL).broadcast(Jt.USER_LOGGED_OUT, {})
            },
            yt = t => {
                D({
                    eventName: _.FLO_ORDER_SUMMARY_BTN_CLICKED,
                    eventType: "click",
                    metaData: {
                        metadata: {
                            isOpen: t
                        }
                    }
                })
            };
        if (Y) return e.jsx(is, {});
        if (A) return e.jsx("div", {
            className: `relative w-full ${G()?"":"rounded-[28px]"} h-full px-5`,
            children: e.jsx(Qt, {
                isInvalidUser: A == null ? void 0 : A.isInvalidUser
            })
        });
        const Ct = () => Z != null && Z.metadataLoading ? e.jsx("div", {
                className: "skeleton-loader sticky top-0 z-20 flex  min-h-[1.875rem]  w-full",
                "data-sentry-component": "getBannerStrip",
                "data-sentry-source-file": "main-checkout.tsx"
            }) : e.jsx(qe, {
                "data-sentry-element": "GenericBannerStrip",
                "data-sentry-component": "getBannerStrip",
                "data-sentry-source-file": "main-checkout.tsx"
            }),
            bt = () => e.jsx(Je, {
                id: "order-summary-section",
                loading: K,
                ref: z,
                defaultOpen: x,
                titleIcon: e.jsx(xs, {
                    className: "h-4 w-4 text-coal-dark",
                    strokeWidth: 2.5
                }),
                titleText: e.jsxs("div", {
                    className: "flex flex-row items-center",
                    children: [e.jsx("p", {
                        className: "text-sm font-medium text-coal-dark",
                        children: n("order_summary")
                    }), e.jsx(us, {})]
                }),
                subTitleText: e.jsx(ss, {
                    showOrderSummaryTotalTxt: He
                }),
                callbackOnToggle: t => {
                    yt(t), ye(t)
                },
                content: e.jsx(e.Fragment, {
                    children: e.jsxs("div", {
                        className: "flex w-full flex-col space-y-2",
                        children: [!!B && e.jsx(ie, {
                            items: B != null ? B : [],
                            disableOOSItems: !1,
                            checkoutItemsMutable: I,
                            availableAddOns: S,
                            cartLevelAddOns: W,
                            enableAddOnActions: !v
                        }), (ue || me || Ze) && e.jsx("div", {
                            className: `px-3 ${B.length===0?"!mt-0":"!mt-3"}`,
                            children: e.jsx(Qe, {})
                        }), !!q && q.length > 0 && e.jsx("div", {
                            className: "px-3 pb-2",
                            children: e.jsx(ie, {
                                items: q != null ? q : [],
                                disableOOSItems: !0,
                                checkoutItemsMutable: I,
                                availableAddOns: S,
                                cartLevelAddOns: W,
                                enableAddOnActions: !v,
                                isUnservicable: !0
                            })
                        }), !!w && B && B.length > 0 && e.jsx(ze, pe({}, w))]
                    })
                }),
                "data-sentry-element": "Accordion",
                "data-sentry-component": "getOrderSummary",
                "data-sentry-source-file": "main-checkout.tsx"
            }),
            jt = e.jsxs("div", {
                className: "border-base px-3 py-4 mx-3 mt-3 bg-white space-y-2",
                children: [e.jsx("div", {
                    className: "skeleton-loader h-[16px] rounded-md w-2/5"
                }), e.jsx("div", {
                    className: "skeleton-loader h-[16px] rounded-md w-full"
                })]
            }),
            _t = e.jsx("div", {
                className: "border-base px-3 py-4 mx-3 mt-3 bg-white space-y-2",
                children: e.jsx("div", {
                    className: "skeleton-loader h-[16px] rounded-md w-full"
                })
            }),
            vt = (Yt(M) || (d == null ? void 0 : d.isDiscountEnabled)) && (H !== "PAYMENTS" || !h);
        return e.jsxs("div", {
            className: `relative w-full ${G()?"":"rounded-[28px]"}`,
            "data-sentry-component": "MainCheckoutV2",
            "data-sentry-source-file": "main-checkout.tsx",
            children: [e.jsxs(e.Fragment, {
                children: [!!xe && e.jsx(ps, {
                    isCheckoutDataLoading: K,
                    openConfirmClose: ct,
                    setOpenConfirmClose: fe
                }), e.jsxs("section", {
                    className: `relative scrollbar-hide w-full overflow-y-auto overflow-x-hidden  ${xe?"top-16":"top-0"}  md:h-[85vh] ${g==="ADDRESS_LIST"&&xe?"h-[calc(100vh-9rem)]":"h-screen pb-28"}`,
                    children: [Ct(), e.jsxs($, {
                        isChildVisible: rt && te === "TILE",
                        loading: K,
                        "data-sentry-element": "AnimateExit",
                        "data-sentry-source-file": "main-checkout.tsx",
                        children: [e.jsx($.Skeleton, {
                            "data-sentry-element": "unknown",
                            "data-sentry-source-file": "main-checkout.tsx",
                            children: _t
                        }), e.jsx($.Content, {
                            "data-sentry-element": "unknown",
                            "data-sentry-source-file": "main-checkout.tsx",
                            children: bt()
                        })]
                    }), !it && e.jsxs($, {
                        isChildVisible: !!vt,
                        loading: K,
                        children: [e.jsx($.Skeleton, {
                            children: jt
                        }), e.jsx($.Content, {
                            children: e.jsx("div", {
                                className: "mt-3 px-3 ",
                                children: e.jsx(Xt, {})
                            })
                        })]
                    }), h ? e.jsx(ds, {
                        isPrimaryBtnLoading: tt
                    }) : e.jsx(cs, {}), g === "ADDRESS_LIST" && e.jsx(as, {}), (h || g !== "ADDRESS_LIST" && ce && !!((Ne = l == null ? void 0 : l.default_shipping_address) != null && Ne.phone)) && e.jsx(e.Fragment, {
                        children: e.jsx("div", {
                            className: `flex w-full flex-col items-start px-6 ${g==="ADDRESS_LIST"?"py-0 pb-[3.5rem] md:pb-[10.75rem]":"py-2"} w-full  space-y-2`,
                            children: e.jsxs("div", {
                                className: "flex w-full items-center justify-between",
                                children: [e.jsxs("p", {
                                    className: "cursor-pointer py-4 text-sm font-normal text-coal-light",
                                    children: [n("logged_in_as"), e.jsx("span", {
                                        className: "inline-block",
                                        children: Wt(ce ? (we = l == null ? void 0 : l.default_shipping_address) == null ? void 0 : we.phone : l == null ? void 0 : l.phone)
                                    })]
                                }), (((Oe = y == null ? void 0 : y.layout) == null ? void 0 : Oe.allowLogout) === void 0 || ((Ee = y == null ? void 0 : y.layout) == null ? void 0 : Ee.allowLogout)) && !v && e.jsx("button", {
                                    className: "rounded-lg border border-gray-light bg-gray-lighter p-2 text-xs font-semibold text-coal-dark hover:border-gray-light hover:bg-gray-light",
                                    id: "flo_logout_btn",
                                    onClick: () => {
                                        D({
                                            eventName: _.FLO_LOGOUT_CLICKED,
                                            eventType: "click"
                                        }), he(!0)
                                    },
                                    children: n("logout")
                                })]
                            })
                        })
                    })]
                })]
            }), e.jsx(os, {
                content: e.jsx(e.Fragment, {
                    children: e.jsxs("div", {
                        className: "flex w-full flex-col space-y-6",
                        children: [e.jsxs("div", {
                            className: "flex w-full flex-col items-center space-y-1",
                            children: [e.jsx("img", {
                                className: "h-12 w-12",
                                src: ls,
                                alt: "Celebration"
                            }), e.jsx("p", {
                                className: "text-lg font-medium text-coal-dark",
                                children: n("discount_hurray")
                            })]
                        }), e.jsxs("div", {
                            children: [e.jsx("p", {
                                className: "text-2xl font-medium text-charcoal",
                                children: e.jsx(le, {
                                    total: (Ae = w == null ? void 0 : w.discount) != null ? Ae : ""
                                })
                            }), e.jsx("p", {
                                className: "text-xs font-normal text-coal-light",
                                children: n("discount_saved_on_order")
                            })]
                        }), e.jsx("div", {
                            children: M == null ? void 0 : M.map((t, s) => e.jsxs("p", {
                                className: "text-sm font-medium uppercase text-coal-dark",
                                children: [t == null ? void 0 : t.code, " ", e.jsx("span", {
                                    className: "font-normal lowercase text-coal-light",
                                    children: n("discount_applied")
                                })]
                            }, `${t==null?void 0:t.code}_${s}`))
                        })]
                    })
                }),
                isOpen: at,
                closePopup: pt,
                height: "h-full",
                duration: 3e3,
                width: "w-3/4",
                "data-sentry-element": "GenericPopup",
                "data-sentry-source-file": "main-checkout.tsx"
            }), e.jsx(Pe, {
                isOpen: dt,
                translateAxis: "y",
                modalType: "NONE",
                dialogOverlay: !0,
                customClass: "overflow-scroll md:!top-auto md:absolute",
                "data-sentry-element": "GenericDialog",
                "data-sentry-source-file": "main-checkout.tsx",
                children: e.jsx(Zt, {
                    setIsOpen: he,
                    handleLogout: gt,
                    "data-sentry-element": "LogoutDialog",
                    "data-sentry-source-file": "main-checkout.tsx"
                })
            }), e.jsx(Pe, {
                isOpen: k === "COMBINED_PRODUCT_REMOVE",
                setIsOpen: () => ge("NONE"),
                translateAxis: "y",
                customClass: "overflow-scroll md:!top-auto md:absolute",
                dialogOverlay: !0,
                modalType: "COMBINED_PRODUCT_REMOVE",
                "data-sentry-element": "GenericDialog",
                "data-sentry-source-file": "main-checkout.tsx",
                children: e.jsx(es, {
                    "data-sentry-element": "CombinedProductsRemovalDialog",
                    "data-sentry-source-file": "main-checkout.tsx"
                })
            }), e.jsx(ts, {
                "data-sentry-element": "UnservicableProductDialog",
                "data-sentry-source-file": "main-checkout.tsx"
            })]
        })
    },
    ps = ({
        openConfirmClose: o,
        setOpenConfirmClose: i,
        isCheckoutDataLoading: n
    }) => {
        var S, W;
        const {
            state: {
                merchant: a
            }
        } = $e(), {
            state: {
                checkoutMetadata: h
            }
        } = Ke(), {
            state: {
                exitSurveyOptions: b,
                redirectUrl: U,
                isBuyNow: N,
                isC2P: l,
                availableAddOns: L,
                appliedCartAddOns: X,
                checkoutView: de,
                billing: f,
                checkoutItems: Z,
                checkoutItemsMutable: V,
                isOrderSummaryOpen: w,
                orderSummaryStyle: M,
                initialCheckoutStep: g,
                shippingHandles: ce
            },
            actions: {
                setCheckoutView: F,
                setIsOrderSummaryOpen: ee
            }
        } = Re(), {
            sendAnalyticsEvent: v
        } = Ve(), {
            isAddItemsWorthDelivery: O,
            isWeightBasedShipping: E,
            isItemNotServicable: y
        } = Ge(), A = c.useRef(null), {
            servicableItems: x,
            unservicableItems: I
        } = Ye(), H = () => {
            v({
                eventName: _.FLO_BACK_CLICK,
                eventType: "click"
            }), We(U, N)
        }, te = () => {
            i(!1)
        }, k = C => {
            if (v({
                    eventName: _.FLO_BACK_CLICK,
                    eventType: "click",
                    metaData: {
                        bannerData: {
                            source: C
                        }
                    }
                }), w) {
                ee(!1);
                return
            }
            if (de === "PAYMENTS" && g !== "PAYMENTS" && !l) {
                F("ADDRESS_LIST");
                return
            }
            if ((a == null ? void 0 : a.exitCheckoutAction) === "none" || (a == null ? void 0 : a.exitCheckoutAction) === "survey" && !((b == null ? void 0 : b.length) > 0)) {
                H();
                return
            }
            i(!0)
        }, Y = C => {
            v({
                eventName: _.FLO_ORDER_SUMMARY_BTN_CLICKED,
                eventType: "click",
                metaData: {
                    metadata: {
                        isOpen: C
                    }
                }
            })
        }, K = () => {
            var se, ae, oe;
            const C = M === "HEADER" ? e.jsxs("div", {
                className: "flex flex-col",
                children: [e.jsxs("div", {
                    className: "flex",
                    children: [(O || E || y) && e.jsx(Fe, {
                        className: "h-4 w-4 text-ouch mb-1 mr-2"
                    }), e.jsx("h2", {
                        className: "mb-1 text-sm font-medium text-coal-light",
                        children: Ue("order_total")
                    })]
                }), e.jsx(Je, {
                    id: "order-summary-header",
                    ref: A,
                    defaultOpen: w || O || E || y,
                    titleIcon: e.jsx(e.Fragment, {}),
                    titleText: "",
                    subTitleText: x && x.length > 0 && e.jsx("h1", {
                        className: "-mr-1 text-base font-medium text-coal-dark",
                        children: e.jsx(le, {
                            total: (se = Be(f.total_payable)) != null ? se : "",
                            compareAt: a != null && a.showOriginalPrice ? f.original_sub_total : f.sub_total,
                            orientation: "horizontal"
                        })
                    }),
                    callbackOnToggle: R => {
                        ee(R), Y(R)
                    },
                    content: e.jsxs(e.Fragment, {
                        children: [e.jsx("div", {
                            className: `absolute left-0 top-0 flex ${re()?"":"md:h-[85vh]"} h-screen w-full bg-black bg-opacity-50 md:w-[25rem]  ${G()?"md:rounded-b-[28px]":"md:rounded-[28px]"}`,
                            onClick: () => {
                                A.current.closeAccordion(), Y(!1)
                            }
                        }), e.jsxs("div", {
                            className: `absolute left-0 top-0 flex w-full flex-col overflow-hidden rounded-b-[28px] border-gray-light ${G()?"":"md:rounded-[28px]"} bg-white duration-200 ease-in-out`,
                            children: [e.jsxs("div", {
                                className: `flex h-16 w-full flex-row items-center justify-between bg-white px-4 shadow-sm ${!re()&&"md:w-[25rem] md:rounded-t-[28px]"} ${!G()&&"rounded-t-[28px]"}`,
                                children: [e.jsx("div", {
                                    className: "flex flex-row items-center",
                                    children: e.jsxs("button", {
                                        className: "flex cursor-pointer items-center justify-center",
                                        children: [e.jsx(Me, {
                                            className: "mr-2 h-6 w-6 text-coal-dark",
                                            onClick: () => k("BACK_BTN")
                                        }), e.jsx("img", {
                                            src: a == null ? void 0 : a.logoUrl,
                                            alt: "Brand Logo",
                                            onError: R => {
                                                R.currentTarget.style.display = "none"
                                            },
                                            className: "float-left h-10 max-w-[9.375rem]	bg-transparent object-contain",
                                            onClick: () => k("LOGO")
                                        })]
                                    })
                                }), e.jsxs("button", {
                                    className: `flex flex-col items-end justify-end cursor-pointer ${O||E||y?"relative -right-2":""}`,
                                    onClick: () => {
                                        A.current.closeAccordion(), Y(!1)
                                    },
                                    children: [e.jsxs("div", {
                                        className: "flex",
                                        children: [(O || E || y) && e.jsx(Fe, {
                                            className: "h-4 w-4 text-ouch mb-1 mr-2"
                                        }), e.jsx("h2", {
                                            className: "mb-1 mr-2 w-fit text-sm font-medium text-coal-light",
                                            children: Ue("order_total")
                                        })]
                                    }), e.jsxs("h1", {
                                        className: "inline-flex items-center space-x-1 text-base font-medium text-coal-dark",
                                        children: [e.jsx(le, {
                                            total: (ae = Be(f.total_payable)) != null ? ae : "",
                                            compareAt: a != null && a.showOriginalPrice ? f.original_sub_total : f.sub_total,
                                            orientation: "horizontal"
                                        }), e.jsx(hs, {
                                            className: "h-4 w-4 rotate-180 cursor-pointer"
                                        })]
                                    })]
                                })]
                            }), e.jsx(qe, {}), e.jsx("div", {
                                className: "max-h-[9999px] overflow-hidden pt-2.5 transition-[max-height] duration-700 ease-in",
                                children: e.jsxs("div", {
                                    className: "flex flex-col space-y-2 bg-white",
                                    children: [!!x && e.jsx("div", {
                                        className: "scrollbar-hide flex max-h-[20rem] overflow-scroll",
                                        children: e.jsx(ie, {
                                            items: x != null ? x : [],
                                            disableOOSItems: !1,
                                            checkoutItemsMutable: V,
                                            availableAddOns: L,
                                            cartLevelAddOns: X,
                                            enableAddOnActions: !l
                                        })
                                    }), (O || E || y) && e.jsx("div", {
                                        className: `px-3 ${x.length===0?"!mt-0":"!mt-3"}`,
                                        children: e.jsx(Qe, {})
                                    }), !!I.length && e.jsx("div", {
                                        className: "scrollbar-hide flex max-h-[20rem] overflow-scroll px-3",
                                        children: e.jsx(ie, {
                                            items: I != null ? I : [],
                                            disableOOSItems: !0,
                                            checkoutItemsMutable: V,
                                            availableAddOns: L,
                                            cartLevelAddOns: X,
                                            enableAddOnActions: !l,
                                            isUnservicable: !0
                                        })
                                    }), !!f && x && x.length > 0 && e.jsx(ze, pe({}, f))]
                                })
                            })]
                        })]
                    }),
                    customClass: "!border-[0px] !-mx-[18px] !mt-0 !w-[6rem] !justify-end",
                    buttonClass: `!p-0 !h-full !w-[6rem] !justify-end ${O||E||y?"relative -right-6":""}`,
                    insideClass: "!justify-end"
                })]
            }) : e.jsx("h1", {
                className: "text-base font-medium text-coal-dark",
                children: x && x.length > 0 && e.jsx(le, {
                    total: (oe = f.total_payable) != null ? oe : "",
                    compareAt: a != null && a.showOriginalPrice ? f.original_sub_total : f.sub_total
                })
            });
            return n ? e.jsx("div", {
                className: "rounded skeleton-loader h-9 w-16",
                "data-sentry-component": "getOrderSummary",
                "data-sentry-source-file": "main-checkout.tsx"
            }) : C
        };
        return e.jsxs("header", {
            className: `fixed z-30 flex h-16 w-full flex-row items-center justify-between bg-white px-6 shadow-sm ${!re()&&"md:w-[25rem] md:rounded-t-[28px]"} ${!G()&&"rounded-t-[28px]"}`,
            "data-sentry-component": "Header",
            "data-sentry-source-file": "main-checkout.tsx",
            children: [e.jsx("div", {
                className: "flex flex-row items-center",
                children: e.jsxs("button", {
                    className: "flex cursor-pointer items-center justify-center",
                    children: [e.jsx(Me, {
                        className: "mr-2 h-6 w-6 text-coal-dark",
                        onClick: () => k("BACK_BTN"),
                        "data-sentry-element": "ArrowLeft",
                        "data-sentry-source-file": "main-checkout.tsx"
                    }), h != null && h.metadataLoading ? e.jsx("div", {
                        className: "rounded skeleton-loader h-9 w-28"
                    }) : e.jsx("img", {
                        src: (W = (S = h == null ? void 0 : h.ui_attributes) == null ? void 0 : S.logo_url) != null ? W : "",
                        alt: "Brand Logo",
                        onError: C => {
                            C.currentTarget.style.display = "none"
                        },
                        className: "float-left h-10 max-w-[9.375rem]	bg-transparent object-contain",
                        onClick: () => k("LOGO")
                    })]
                })
            }), K(), (a == null ? void 0 : a.exitCheckoutAction) === "nudge" && e.jsx(ns, {
                closeCheckout: H,
                isOpen: o,
                closePopup: te
            }), (a == null ? void 0 : a.exitCheckoutAction) === "survey" && (b == null ? void 0 : b.length) > 0 && e.jsx(rs, {
                closeCheckout: H,
                isOpen: o,
                closePopup: te
            })]
        })
    };
export {
    As as M
};
//# sourceMappingURL=page-main-checkout-D3bPWflK.js.map