var Ke = Object.defineProperty,
    Xe = Object.defineProperties;
var Ze = Object.getOwnPropertyDescriptors;
var ie = Object.getOwnPropertySymbols;
var Se = Object.prototype.hasOwnProperty,
    Te = Object.prototype.propertyIsEnumerable;
var ke = (t, s, a) => s in t ? Ke(t, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : t[s] = a,
    W = (t, s) => {
        for (var a in s || (s = {})) Se.call(s, a) && ke(t, a, s[a]);
        if (ie)
            for (var a of ie(s)) Te.call(s, a) && ke(t, a, s[a]);
        return t
    },
    K = (t, s) => Xe(t, Ze(s));
var J = (t, s) => {
    var a = {};
    for (var n in t) Se.call(t, n) && s.indexOf(n) < 0 && (a[n] = t[n]);
    if (t != null && ie)
        for (var n of ie(t)) s.indexOf(n) < 0 && Te.call(t, n) && (a[n] = t[n]);
    return a
};
var Q = (t, s, a) => new Promise((n, l) => {
    var r = x => {
            try {
                d(a.next(x))
            } catch (u) {
                l(u)
            }
        },
        o = x => {
            try {
                d(a.throw(x))
            } catch (u) {
                l(u)
            }
        },
        d = x => x.done ? n(x.value) : Promise.resolve(x.value).then(r, o);
    d((a = a.apply(t, s)).next())
});
import {
    j as e,
    r as c,
    a as Je,
    R as oe,
    m as te
} from "./react-core-C02-NrKc.js";
import "./sentry-1CVSdSoY.js";
import {
    f as V,
    u as z,
    c as M,
    C as se,
    i as be,
    a as ae,
    X as Ae,
    ak as Qe,
    d as D,
    a1 as et,
    a4 as de,
    m as Ce,
    w as Z,
    a0 as tt,
    a2 as Le,
    al as De,
    x as Re,
    e as st,
    b as je,
    E as at,
    p as rt,
    q as nt,
    am as lt,
    J as fe,
    a3 as ue,
    an as Pe,
    A as Ee,
    aj as ot,
    k as $e,
    B as it,
    ao as X,
    ap as ct,
    aq as dt,
    ar as ut
} from "./lib-D7WRmHWF.js";
import {
    q as H,
    _ as G
} from "./headless-BLCsrzy4.js";
import {
    X as Oe,
    f as Fe,
    T as xt,
    M as mt,
    d as Me,
    C as _e,
    A as we,
    k as ft,
    l as ht,
    c as pt,
    i as gt,
    e as yt,
    j as me,
    Z as bt,
    W as jt
} from "./react-ui-CLI46-or.js";
import {
    f as _t,
    C as wt,
    v as Nt,
    u as vt,
    r as kt,
    m as St,
    a as Tt,
    U as Ct,
    T as Pt,
    d as Ue,
    b as Ge,
    g as Et,
    h as Ft,
    F as It,
    i as Bt
} from "./assests-8-RYiWy6.js";
import {
    C as At,
    a as Lt
} from "./ui-BLvhcVBj.js";
import {
    A as Ie,
    D as Dt,
    b as Rt
} from "./components-DLiBXlgf.js";
(function() {
    try {
        var t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {},
            s = new t.Error().stack;
        s && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[s] = "e42a6c7a-63d1-401d-849b-07d8a95aced5", t._sentryDebugIdIdentifier = "sentry-dbid-e42a6c7a-63d1-401d-849b-07d8a95aced5")
    } catch (a) {}
})();
const $t = ({}) => e.jsx(e.Fragment, {
        children: e.jsx("div", {
            className: "flex h-full w-full flex-col items-center justify-center",
            children: e.jsx("span", {
                className: "flo-loader__rippleSpan",
                children: e.jsx("img", {
                    src: _t,
                    alt: "flo-logo-mono"
                })
            })
        })
    }),
    Ne = ({
        spinnerComponent: t = "FLO_LOGO"
    }) => e.jsx(Ot, {
        "data-sentry-element": "OverlayPortal",
        "data-sentry-component": "OverlaySpinner",
        "data-sentry-source-file": "OverlaySpinner.tsx",
        children: e.jsxs("div", {
            className: "fixed inset-0 z-[100] h-screen w-full",
            children: [e.jsx("div", {
                className: "h-full w-full bg-black opacity-40"
            }), e.jsx("div", {
                className: "fixed inset-0",
                children: e.jsx($t, {
                    "data-sentry-element": "FloRipple",
                    "data-sentry-source-file": "OverlaySpinner.tsx"
                })
            })]
        })
    }),
    Ot = ({
        children: t
    }) => {
        let [s, a] = c.useState(!1);
        c.useEffect(() => a(!0), []);
        const n = document.getElementById("flo-overlay-portal");
        return !s || !n ? null : Je.createPortal(t, n)
    },
    ns = () => new URLSearchParams(window.location.search).get("page") === "login-sso" ? e.jsx("div", {
        className: "h-screen w-full touch-none bg-white",
        children: e.jsxs("main", {
            className: "flex flex-col items-center space-y-4 px-3 pt-4",
            children: [e.jsx("div", {
                className: "skeleton-loader h-6 w-full rounded-xl"
            }), e.jsx("div", {
                className: "skeleton-loader h-40 w-full rounded-xl"
            }), e.jsx("div", {
                className: "skeleton-loader h-4 w-2/3 rounded-xl"
            })]
        })
    }) : e.jsx(e.Fragment, {
        children: e.jsx("div", {
            className: "h-screen w-full touch-none bg-white",
            children: e.jsxs("main", {
                className: "px-6 pt-6 ",
                children: [e.jsxs("section", {
                    className: "flex flex-row space-x-2",
                    children: [e.jsx("div", {
                        className: "skeleton-loader h-4 w-4 rounded"
                    }), e.jsx("div", {
                        className: "skeleton-loader h-4 w-1/2 rounded"
                    })]
                }), e.jsx("section", {
                    className: "pt-8",
                    children: e.jsx("ul", {
                        className: "flex flex-col space-y-6",
                        children: [1, 2, 3].map(a => e.jsxs("li", {
                            className: "flex flex-row space-x-4",
                            children: [e.jsx("div", {
                                className: "skeleton-loader h-16 w-16 rounded"
                            }), e.jsxs("div", {
                                className: "flex grow flex-col space-y-4",
                                children: [e.jsx("div", {
                                    className: "skeleton-loader h-4 w-3/4 rounded"
                                }), e.jsx("div", {
                                    className: "skeleton-loader h-4 w-1/2 rounded"
                                })]
                            })]
                        }, a))
                    })
                })]
            })
        })
    }),
    he = x => {
        var u = x,
            {
                iconComponent: t,
                buttonText: s,
                height: a = "h-12",
                width: n = "w-full",
                customClass: l,
                type: r = "button",
                isDisabled: o = !1
            } = u,
            d = J(u, ["iconComponent", "buttonText", "height", "width", "customClass", "type", "isDisabled"]);
        return e.jsxs("button", K(W({
            className: `${a} ${n} ${o&&"cursor-not-allowed bg-gray-light text-coal-light"} outline-none ${l||"flex flex-row items-center justify-center"}`,
            disabled: o
        }, d), {
            "data-sentry-component": "GenericButton",
            "data-sentry-source-file": "GenericButton.tsx",
            children: [t, e.jsx("span", {
                children: s
            })]
        }))
    },
    Mt = ({
        popupTitle: t,
        popupBody: s,
        primaryBtnText: a = "Confirm",
        onClickPrimaryBtn: n,
        isOpen: l = !1,
        closePopup: r,
        cancelBtnText: o = "Cancel",
        onClickSecondaryBtn: d = r,
        btnsFlexDirection: x = "flex-row",
        modalType: u,
        showSecondaryBtn: i = !0,
        id: b
    }) => {
        const {
            state: {
                checkoutModal: m
            },
            actions: {
                setCheckoutModal: p
            }
        } = V();
        return c.useEffect(() => {
            if (l && u && m === "NONE") return p(u), () => {
                p("NONE")
            }
        }, [l]), e.jsx(e.Fragment, {
            children: e.jsx(H, {
                appear: !0,
                show: l,
                as: c.Fragment,
                "data-sentry-element": "Transition",
                "data-sentry-source-file": "ConfirmationPopup.tsx",
                children: e.jsxs(G, {
                    as: "div",
                    className: "fixed inset-0 z-50 overflow-y-auto",
                    onClose: () => {},
                    "data-sentry-element": "Dialog",
                    "data-sentry-source-file": "ConfirmationPopup.tsx",
                    children: [e.jsx(G.Overlay, {
                        className: "fixed inset-0 bg-black opacity-40",
                        "data-sentry-element": "unknown",
                        "data-sentry-source-file": "ConfirmationPopup.tsx"
                    }), e.jsxs("div", {
                        className: "min-h-screen px-4 text-center",
                        children: [e.jsx(H.Child, {
                            as: c.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-300",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            "data-sentry-element": "unknown",
                            "data-sentry-source-file": "ConfirmationPopup.tsx",
                            children: e.jsx(G.Overlay, {
                                className: "fixed inset-0",
                                "data-sentry-element": "unknown",
                                "data-sentry-source-file": "ConfirmationPopup.tsx"
                            })
                        }), e.jsx("span", {
                            className: "inline-block h-screen align-middle",
                            "aria-hidden": "true",
                            children: "​"
                        }), e.jsx(H.Child, {
                            as: c.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-300",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            "data-sentry-element": "unknown",
                            "data-sentry-source-file": "ConfirmationPopup.tsx",
                            children: e.jsxs("div", {
                                className: "inline-block max-h-80 w-full max-w-[23rem] transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all",
                                id: b,
                                children: [e.jsxs("div", {
                                    className: "border-b p-4",
                                    children: [e.jsxs(G.Title, {
                                        as: "div",
                                        className: "flex w-full justify-between ",
                                        "data-sentry-element": "unknown",
                                        "data-sentry-source-file": "ConfirmationPopup.tsx",
                                        children: [!!t && (typeof t == "string" ? e.jsx("h1", {
                                            className: "text-base font-medium text-carbon-dark",
                                            children: t
                                        }) : e.jsx(e.Fragment, {
                                            children: t
                                        })), e.jsx(Oe, {
                                            className: "h-6 w-6 cursor-pointer text-coal-dark",
                                            onClick: r,
                                            "data-sentry-element": "X",
                                            "data-sentry-source-file": "ConfirmationPopup.tsx"
                                        })]
                                    }), e.jsx("div", {
                                        className: "pt-3.5",
                                        children: !!s && (typeof s == "string" ? e.jsx("p", {
                                            className: "text-sm font-normal text-coal-dark",
                                            children: s
                                        }) : e.jsx(e.Fragment, {
                                            children: s
                                        }))
                                    })]
                                }), e.jsxs("div", {
                                    className: `flex ${x} items-end justify-evenly ${x==="flex-col"?"space-y-4":""} ${x==="flex-row"?"space-x-4":""} p-4`,
                                    children: [e.jsx(he, {
                                        id: m === "COD_CONFIRMATION" ? "flo__payments__confirmCOD" : "",
                                        height: "h-14",
                                        width: "w-full",
                                        customClass: "flex items-center justify-center text-base font-medium rounded-lg text-btnPrimaryText bg-primary-dark",
                                        buttonText: a,
                                        onClick: y => n(y),
                                        "data-sentry-element": "GenericButton",
                                        "data-sentry-source-file": "ConfirmationPopup.tsx"
                                    }), i && e.jsx(he, {
                                        height: "h-14",
                                        width: "w-full",
                                        customClass: "flex items-center justify-center text-base font-medium rounded-lg text-coal-dark border-2 border-gray-light",
                                        buttonText: o,
                                        onClick: d
                                    })]
                                })]
                            })
                        })]
                    })]
                })
            })
        })
    },
    He = t => {
        const s = c.useMemo(() => t === 0 ? "0" : se(t), [t]);
        return typeof t == "string" ? {
            formattedPrice: t
        } : {
            formattedPrice: s
        }
    },
    q = ({
        total: t,
        compareAt: s = 0,
        isDiscounted: a,
        customCSS: n,
        discountPercentage: l,
        orientation: r = "vertical",
        isSplitCod: o = !1,
        customText: d
    }) => {
        var i, b, m;
        const {
            t: x
        } = z(), {
            formattedPrice: u
        } = He(t);
        return typeof t == "string" ? e.jsx(e.Fragment, {
            children: t
        }) : e.jsxs("span", {
            className: "flex flex-row items-end space-x-1",
            "data-sentry-component": "Price",
            "data-sentry-source-file": "Price.tsx",
            children: [e.jsxs("span", {
                className: M(`flex ${o?"text-md":"text-sm"}`, s ? "items-end" : "", r === "vertical" ? "flex-col" : "flex-row items-center gap-1", n || ""),
                children: [!!s && parseInt((i = s == null ? void 0 : s.toString()) != null ? i : "0") !== 0 && parseInt((b = s == null ? void 0 : s.toString()) != null ? b : "0") >= parseInt((m = t == null ? void 0 : t.toString()) != null ? m : "0") && s !== t && e.jsx("span", {
                    className: M("font-normal text-gray-dark line-through", r === "vertical" ? "text-xxs" : " text-[10px] leading-3"),
                    children: se(s)
                }), e.jsx("span", {
                    children: parseInt(u != null ? u : "0") === 0 ? e.jsx("span", {
                        className: "text-yay-dark whitespace-nowrap",
                        children: d || x("automatic_freebies_free_text")
                    }) : e.jsxs(e.Fragment, {
                        children: [a && e.jsx("span", {
                            children: "– "
                        }), e.jsx("span", {
                            children: u == null ? void 0 : u.substring(0, u.indexOf("."))
                        }), e.jsx("span", {
                            className: `${Number.isInteger(t)?"":"text-xs font-normal"}`,
                            children: u == null ? void 0 : u.substring(u.indexOf("."), u == null ? void 0 : u.length)
                        })]
                    })
                })]
            }), !!l && e.jsxs("span", {
                className: "text-sm font-medium text-yay-dark",
                children: [l, "% off"]
            })]
        })
    };
let ce = "generic",
    ee = 0;
const ls = oe.memo(({
        isOpen: t = !1,
        closeCheckout: s,
        closePopup: a
    }) => {
        const {
            state: {
                appliedCoupons: n,
                checkoutId: l,
                coupons: r,
                billing: o
            },
            actions: {
                updateCheckoutBasedOnCheckoutResponse: d,
                setCoupons: x,
                setCheckoutItems: u,
                setShippingHandles: i,
                setCheckoutModal: b
            }
        } = V(), {
            t: m
        } = z(), {
            state: {
                isAuthenticated: p
            }
        } = be(), {
            sendAnalyticsEvent: y
        } = ae(), {
            actions: {
                mutatePayment: f
            }
        } = Ae(), [g, _] = c.useState(""), [S, C] = c.useState(""), [v, F] = c.useState(m("stay")), [I, R] = c.useState(m("exit_anyway")), [N, B] = c.useState(!1), {
            maxCouponDiscountAmount: $,
            maxCouponDiscountCode: k
        } = Qe(r);
        c.useEffect(() => {
            t && y({
                eventName: D.FLO_CONFIRMATION_NUDGE_LOADED,
                eventType: "load",
                metaData: {
                    coupons: n,
                    cart_value: o == null ? void 0 : o.total_payable,
                    savings: o == null ? void 0 : o.discount
                }
            })
        }, [t]), c.useEffect(() => {
            Y()
        }, [n, r, o, a]);
        const Y = () => {
                var A, O, U;
                const h = o == null ? void 0 : o.discount;
                let w = e.jsx(e.Fragment, {});
                const j = n == null ? void 0 : n.filter(E => !E.isPrepaid);
                if (h) {
                    const E = e.jsxs("h1", {
                        className: "flex gap-1 text-base font-medium text-carbon-dark",
                        children: [m("cancel_checkout_header_with_savings"), " ", e.jsx("span", {
                            className: "text-yay-dark",
                            children: e.jsx(q, {
                                total: h != null ? h : ""
                            })
                        })]
                    });
                    _(E), j ? ((j == null ? void 0 : j.length) > 1 ? w = e.jsx(e.Fragment, {
                        children: e.jsxs("div", {
                            className: "flex flex-row items-start gap-2 rounded-lg bg-gradient-to-r from-yay-light px-2 py-3",
                            children: [e.jsx("div", {
                                children: e.jsx("img", {
                                    src: wt,
                                    alt: "flo-coupons-savings"
                                })
                            }), e.jsxs("p", {
                                className: "break-words text-sm font-normal text-coal-light",
                                children: [e.jsxs("span", {
                                    className: "text-sm font-semibold text-coal-dark",
                                    children: [j == null ? void 0 : j.length, " discount coupons "]
                                }), m("cancel_checkout_body_with_savings", {
                                    count: j == null ? void 0 : j.length
                                })]
                            })]
                        })
                    }) : w = e.jsx(e.Fragment, {
                        children: e.jsxs("div", {
                            className: "flex flex-row items-start gap-2 rounded-lg bg-gray-lighter px-2 py-3",
                            children: [e.jsx("div", {
                                children: e.jsx(Fe, {
                                    className: "h-4 w-4 text-coal-dark",
                                    strokeWidth: 2
                                })
                            }), e.jsxs("p", {
                                className: "break-words text-sm font-normal text-coal-light",
                                children: [e.jsxs("span", {
                                    className: "text-sm font-medium uppercase text-coal-dark",
                                    children: [(A = j[0]) != null && A.title ? (O = j[0]) == null ? void 0 : O.title : (U = j[0]) == null ? void 0 : U.code, " "]
                                }), m("cancel_checkout_body_with_savings", {
                                    count: j == null ? void 0 : j.length
                                })]
                            })]
                        })
                    }), C(w), ce = "coupons_applied") : C(m("cancel_checkout")), F(m("stay"))
                } else {
                    const E = o.sub_total;
                    if (ee = E - $, ee < E) {
                        const re = e.jsxs("h1", {
                            className: "flex gap-1 text-base font-medium text-carbon-dark",
                            children: [m("cancel_checkout_header_possible_savings"), " ", e.jsx("span", {
                                className: "text-[#61B643]",
                                children: e.jsx(q, {
                                    total: ee != null ? ee : ""
                                })
                            })]
                        });
                        w = e.jsx(e.Fragment, {
                            children: e.jsxs("div", {
                                className: "flex flex-row items-start gap-2 rounded-lg bg-gray-lighter px-2 py-3",
                                children: [e.jsx("div", {
                                    children: e.jsx(Fe, {
                                        className: "h-4 w-4 text-coal-dark",
                                        strokeWidth: 2
                                    })
                                }), e.jsxs("p", {
                                    className: "break-words text-sm font-normal text-coal-light",
                                    children: [e.jsxs("span", {
                                        className: "text-sm font-medium uppercase text-coal-dark",
                                        children: [k, " "]
                                    }), m("cancel_checkout_body_possible_savings")]
                                })]
                            })
                        }), _(re), C(w), F(m("apply_coupons")), ce = "coupons_available";
                        return
                    }
                    _(m("cancel_checkout_header")), C(m("cancel_checkout")), F(m("stay")), ce = "generic"
                }
            },
            P = c.useCallback(h => {
                let w = {};
                switch (ce) {
                    case "coupons_applied":
                        {
                            w = {
                                banner_type: "coupons_applied",
                                coupons: n,
                                cart_value: o == null ? void 0 : o.total_payable,
                                savings: o == null ? void 0 : o.discount
                            };
                            break
                        }
                    case "coupons_available":
                        {
                            w = {
                                banner_type: "coupons_available",
                                coupons: r,
                                cart_value: o == null ? void 0 : o.total_payable,
                                savings: (o == null ? void 0 : o.sub_total) - ee
                            };
                            break
                        }
                    default:
                        w = {
                            banner_type: "generic",
                            coupons: [],
                            cart_value: o == null ? void 0 : o.total_payable,
                            savings: 0
                        }
                }
                y({
                    eventName: D.FLO_EXIT_BANNER_ACTION,
                    eventType: "flo_action",
                    metaData: {
                        bannerData: K(W({}, w), {
                            actionType: h
                        })
                    }
                })
            }, [n, o, r]),
            L = () => Q(void 0, null, function*() {
                var j, A, O, U, E, re, ne;
                if (!(k != null && k.trim())) return;
                const h = et(r, k);
                y({
                    eventName: D.FLO_COUPON_SELECTED,
                    eventType: "click",
                    metaData: {
                        couponData: {
                            coupon_code: k,
                            coupon_id: h || "NA"
                        }
                    }
                });
                const w = {
                    discount_code: k == null ? void 0 : k.trim()
                };
                try {
                    B(!0);
                    let T;
                    if (p) {
                        T = yield de(`/checkout/${l}/discount`, w, "KRATOS_PRIVATE");
                        const xe = yield Ce(`/checkout/${l}/discount`, "KRATOS_PRIVATE");
                        x(xe)
                    } else {
                        T = yield de(`/checkout/${l}/discount`, w, "KRATOS_PUBLIC");
                        const xe = yield Ce(`/checkout/${l}/discount`, "KRATOS_PUBLIC");
                        x(xe)
                    }
                    if (!T) {
                        Z(m("coupon_not_found"));
                        return
                    }
                    if (d(T), B(!1), T != null && T.items && u(tt(T == null ? void 0 : T.items)), y({
                            eventName: D.FLO_COUPON_SUCCESS,
                            eventType: "flo_action",
                            metaData: {
                                couponData: {
                                    coupon_code: k,
                                    coupon_id: h || "NA"
                                }
                            }
                        }), !((A = (j = T == null ? void 0 : T.pricing) == null ? void 0 : j.serviceable) != null ? A : !1)) {
                        Z(m("serviceability_error"), 5e3);
                        return
                    }
                    const ve = (O = T == null ? void 0 : T.metadata) == null ? void 0 : O.available_shipping_handles,
                        We = (E = (U = T == null ? void 0 : T.metadata) == null ? void 0 : U.show_shipping_handle_selector) != null ? E : !1;
                    i(ve), ve.length > 0 && We ? b("SHIPPING_HANDLES") : (f(), te([`/checkout/${l}/rewards`, Le.KRATOS_PRIVATE]), te("UPI_INTENT"))
                } catch (T) {
                    B(!1);
                    const le = (ne = (re = T == null ? void 0 : T.response) == null ? void 0 : re.data) == null ? void 0 : ne.error;
                    Z(le != null ? le : m("coupon_not_found")), y({
                        eventName: D.FLO_COUPON_FAILED,
                        eventType: "flo_action",
                        metaData: {
                            couponData: {
                                coupon_code: k,
                                coupon_id: h || "NA",
                                failed_reason: le
                            }
                        }
                    }), console.error(T)
                }
            });
        return e.jsxs(e.Fragment, {
            children: [e.jsx(Mt, {
                popupTitle: g,
                popupBody: S,
                primaryBtnText: v,
                cancelBtnText: I,
                onClickPrimaryBtn: () => {
                    a(), v === m("apply_coupons") && L(), P(v === m("apply_coupons") ? "APPLY_COUPON" : "STAY")
                },
                onClickSecondaryBtn: () => {
                    P("EXIT_CHECKOUT"), s()
                },
                isOpen: t,
                closePopup: () => {
                    a(), P("CLOSE_BANNER")
                },
                modalType: "EXIT_CONFIRMATION"
            }), N && e.jsx(Ne, {})]
        })
    }),
    pe = oe.memo(({
        isOpen: t,
        setIsOpen: s,
        translateAxis: a = "z",
        dialogOverlay: n = !1,
        customClass: l = "h-full md:h-[85vh]",
        children: r,
        modalType: o,
        redirectURL: d,
        closeOnOverlayClick: x = !1
    }) => {
        const {
            state: {
                checkoutModal: u
            },
            actions: {
                setCheckoutModal: i
            }
        } = V();
        return c.useEffect(() => {
            if (t && u === "NONE" && o) return i(o), () => {
                i("NONE")
            }
        }, [t]), e.jsx(e.Fragment, {
            children: e.jsx(H, {
                appear: !0,
                show: t,
                as: c.Fragment,
                children: e.jsxs(G, {
                    as: "div",
                    className: "fixed inset-0 z-50 m-auto h-full w-full overflow-y-auto rounded-[28px] md:flex md:h-[85vh] md:w-[25rem] md:items-center",
                    onClose: () => {
                        x && (s == null || s(!1))
                    },
                    children: [n && e.jsx(G.Overlay, {
                        className: "fixed inset-0 bg-black opacity-40"
                    }), e.jsxs("div", {
                        className: "absolute h-screen text-center md:relative md:h-[85vh]",
                        children: [e.jsx(H.Child, {
                            as: c.Fragment,
                            enter: "ease-out duration-100",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-100",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: e.jsx(G.Overlay, {
                                className: "fixed inset-0"
                            })
                        }), e.jsx("span", {
                            className: "inline-block h-screen align-middle",
                            "aria-hidden": "true",
                            children: "​"
                        }), e.jsx(H.Child, {
                            as: c.Fragment,
                            enter: "ease-out duration-300 transform",
                            enterFrom: `${a}` == "z" ? "opacity-0" : `opacity-0 ${a==="x"?"translate-x-full":"translate-y-full"}`,
                            enterTo: `${a}` == "z" ? "opacity-100" : `opacity-100 ${a==="x"?"translate-x-0":"translate-y-0"}`,
                            leave: "ease-in duration-150 transform",
                            leaveFrom: `${a}` == "z" ? "opacity-100" : `opacity-100 ${a==="x"?"translate-x-0":"translate-y-0"} `,
                            leaveTo: `${a}` == "z" ? "opacity-0" : `opacity-0 ${a==="x"?"translate-x-full":"translate-y-full"}`,
                            children: e.jsx("div", {
                                className: `scrollbar-hide fixed inset-x-0 bottom-0 m-auto inline-block w-full overflow-hidden rounded-3xl bg-white text-left align-middle md:top-0 md:w-[25rem] ${l} ${De()?"rounded-b-none":""}`,
                                children: r
                            })
                        })]
                    })]
                })
            })
        })
    }),
    ze = ({
        className: t,
        children: s
    }) => e.jsx("header", {
        className: `fixed z-20 flex min-h-[48px] w-full items-center overflow-hidden rounded-t-3xl border-r-inherit bg-gradient-to-b from-white via-white to-transparent px-6  md:w-[25rem] ${t} ${!Re()&&"md:w-[25rem]"}`,
        "data-sentry-component": "DialogHeader",
        "data-sentry-source-file": "GenericDialog.tsx",
        children: s
    }),
    ge = ({
        className: t,
        children: s
    }) => {
        const a = Math.random().toString(36).substr(2),
            [n, l] = c.useState(!1);
        return c.useEffect(() => {
            var o;
            ((o = document.getElementById(a)) == null ? void 0 : o.nextElementSibling) && l(!0)
        }, []), e.jsx("section", {
            id: a,
            className: `h-full w-full pt-16 ${n?"pb-40":"pb-16"} !overflow-y-auto scrollbar-hide ${t}`,
            "data-sentry-component": "DialogBody",
            "data-sentry-source-file": "GenericDialog.tsx",
            children: s
        })
    },
    ye = ({
        children: t,
        className: s
    }) => e.jsx("footer", {
        className: `fixed inset-x-0 bottom-0 z-20 m-auto max-h-36 rounded-b-[28px] bg-gradient-to-b from-transparent via-white to-white px-3 py-4 md:bottom-[64px] ${s} ${De()?"rounded-b-none":""} ${!Re()&&"md:w-[25rem]"}`,
        "data-sentry-component": "DialogFooter",
        "data-sentry-source-file": "GenericDialog.tsx",
        children: t
    }),
    Ut = ({
        height: t = "h-6",
        width: s = "w-6",
        color: a = "text-white",
        customClass: n
    }) => e.jsxs("svg", {
        className: `${t} ${s} ${a} ${n} animate-spin`,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "data-sentry-element": "svg",
        "data-sentry-component": "CircularSpinner",
        "data-sentry-source-file": "CircularSpinner.tsx",
        children: [e.jsx("circle", {
            className: "opacity-30",
            cx: "12",
            cy: "12",
            r: "10",
            stroke: "currentColor",
            strokeWidth: "4",
            "data-sentry-element": "circle",
            "data-sentry-source-file": "CircularSpinner.tsx"
        }), e.jsx("path", {
            className: "opacity-90",
            fill: "currentColor",
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
            "data-sentry-element": "path",
            "data-sentry-source-file": "CircularSpinner.tsx"
        })]
    }),
    Gt = ({}) => {
        const t = [{
            id: "visa",
            logo: Nt
        }, {
            id: "upi",
            logo: vt
        }, {
            id: "rupay",
            logo: kt
        }, {
            id: "mastercard",
            logo: St
        }, {
            id: "amex",
            logo: Tt
        }];
        return e.jsx("div", {
            className: "flex flex-row space-x-1",
            "data-sentry-component": "PaymentGateways",
            "data-sentry-source-file": "PaymentGateways.tsx",
            children: t.map(s => e.jsx(Ht, {
                id: s.id,
                logo: s.logo
            }, s.id))
        })
    },
    Ht = ({
        id: t,
        logo: s
    }) => e.jsx("img", {
        src: s,
        alt: t,
        className: "h-8 w-10 object-contain",
        "data-sentry-component": "LogoComponent",
        "data-sentry-source-file": "PaymentGateways.tsx"
    }),
    Ve = S => {
        var C = S,
            {
                type: t = "button",
                buttonText: s = "Confirm",
                height: a = "h-14",
                width: n = "w-full",
                isDisabled: l = !1,
                isLoading: r = !1,
                appearance: o = "solid",
                borderRadius: d = "rounded-2xl",
                paymentGateways: x = !1,
                isCheckout: u = !1,
                showTerms: i = !1,
                hideButton: b = !1,
                showCustomTerms: m = !1,
                customTermsLink: p,
                className: y,
                containerClassName: f,
                showUpiIcon: g = !1
            } = C,
            _ = J(C, ["type", "buttonText", "height", "width", "isDisabled", "isLoading", "appearance", "borderRadius", "paymentGateways", "isCheckout", "showTerms", "hideButton", "showCustomTerms", "customTermsLink", "className", "containerClassName", "showUpiIcon"]);
        const {
            t: v
        } = z(), {
            sendAnalyticsEvent: F
        } = ae();
        return e.jsxs("div", {
            className: M("flex w-full flex-col items-center space-y-2", f != null ? f : ""),
            "data-sentry-component": "PrimaryButton",
            "data-sentry-source-file": "PrimaryButton.tsx",
            children: [m && e.jsx("div", {
                children: e.jsx("a", {
                    href: p,
                    className: "text-xxs font-normal text-coal-light underline",
                    target: "_blank",
                    rel: "noreferrer",
                    children: v("terms_and_conditions_loyalty")
                })
            }), e.jsxs("button", K(W({
                className: M("flex min-h-[40px] flex-row items-center justify-center gap-2 space-x-4 whitespace-nowrap cursor-pointer bg-primary-dark text-btnPrimaryText px-4 text-base font-medium", l ? "cursor-not-allowed opacity-50" : "", d, o === "outline" ? "border-2 border-primary-dark bg-white" : "", b ? "hidden" : "", a, n, y != null ? y : ""),
                type: t,
                disabled: r || l
            }, _), {
                children: [r && e.jsx(Ut, {
                    color: `${l?"text-white":"text-btnPrimaryText"}`
                }), s, g && e.jsx("img", {
                    className: "h-10 w-auto",
                    src: Ct,
                    alt: ""
                })]
            })), u && x && e.jsx(Gt, {}), i && e.jsx(e.Fragment, {
                children: e.jsxs("p", {
                    className: "pt-1 text-[12px] font-normal text-coal-light",
                    children: [v("by_proceeding_text"), " ", e.jsx("a", {
                        href: "https://shopflo.com/terms-conditions?utm_source=shopflo-checkout&utm_medium=shopflo-checkout&utm_campaign=shopflo-checkout",
                        className: "font-bold",
                        target: "_blank",
                        rel: "noreferrer",
                        onClick: () => {
                            F({
                                eventName: D.FLO_TERMS_AND_CONDITIONS,
                                eventType: "click"
                            })
                        },
                        children: v("terms_and_conditions")
                    }), " ", "and", " ", e.jsx("a", {
                        href: "https://shopflo.com/privacy-policy?utm_source=shopflo-checkout&utm_medium=shopflo-checkout&utm_campaign=shopflo-checkout",
                        className: "font-bold",
                        target: "_blank",
                        rel: "noreferrer",
                        onClick: () => {
                            F({
                                eventName: D.FLO_PRIVACY_POLICY,
                                eventType: "click"
                            })
                        },
                        children: v("privacy_policy")
                    })]
                })
            }), u && e.jsx("div", {
                className: "flex w-full flex-row items-center justify-center space-x-1",
                children: e.jsx("img", {
                    src: Pt,
                    className: "h-4",
                    alt: "shopflo-logo"
                })
            })]
        })
    },
    zt = ({
        customClass: t
    }) => {
        var b;
        const {
            state: {
                checkoutUIMetadata: s
            }
        } = V(), {
            t: a
        } = z(), {
            state: {
                user: n
            },
            actions: {
                setMarketingConsent: l
            }
        } = st(), {
            state: {
                merchant: r
            }
        } = je(), o = c.useRef(!1), d = c.useRef(null), x = c.useMemo(() => r == null ? void 0 : r.isMarketingPopupEnabled, [r == null ? void 0 : r.isMarketingPopupEnabled]);
        c.useEffect(() => {
            if (!o.current) {
                if (r != null && r.disableMarketingConsent) {
                    l(!1);
                    return
                }
                n != null && n.marketing_consent || u(!0)
            }
        }, [n == null ? void 0 : n.marketing_consent, r == null ? void 0 : r.disableMarketingConsent]);
        const u = m => Q(void 0, null, function*() {
                o.current = !0, l(m), n != null && n.uid && (d.current && clearTimeout(d.current), d.current = setTimeout(() => Q(void 0, null, function*() {
                    yield at("/attributes/v1/account-attributes", {
                        attributes: {
                            marketing_consent: m
                        }
                    })
                }), 1e3))
            }),
            i = c.useCallback(() => {
                if (r != null && r.marketingContextText) return r == null ? void 0 : r.marketingContextText;
                switch (r == null ? void 0 : r.salesCommsContext) {
                    case 1:
                        return a("marketing_user_consent");
                    case 2:
                        return a("marketing_user_consent_v2");
                    case 3:
                        return a("marketing_user_consent_v3");
                    default:
                        return a("marketing_user_consent")
                }
            }, [r == null ? void 0 : r.salesCommsContext, a]);
        return x || (b = s == null ? void 0 : s.layout) != null && b.enableMarketingFlag ? e.jsx(e.Fragment, {
            children: e.jsxs("div", {
                className: `flex h-12 w-full flex-row items-center justify-center space-x-2 px-6 xxs:px-4 pt-7 ${t}`,
                children: [e.jsx("input", {
                    type: "checkbox",
                    id: "marketing_user_consent",
                    name: "marketing_user_consent",
                    className: "h-[14px] w-[14px] cursor-pointer rounded-sm accent-coal-dark",
                    checked: n == null ? void 0 : n.marketing_consent,
                    onClick: () => {
                        u(!(n != null && n.marketing_consent))
                    }
                }), e.jsx("label", {
                    htmlFor: "marketing_user_consent",
                    className: "select-none text-xs font-normal text-coal-light cursor-pointer",
                    children: i()
                })]
            })
        }) : e.jsx(e.Fragment, {})
    },
    os = oe.memo(zt);

function is(n) {
    var l = n,
        {
            children: t,
            href: s
        } = l,
        a = J(l, ["children", "href"]);
    if (!s) return t;
    const r = () => {
        rt(nt.PARENT_REDIRECT, {
            redirectUrl: s
        })
    };
    return e.jsx("button", K(W({
        onClick: r,
        className: "text-left"
    }, a), {
        "data-sentry-component": "LinkButton",
        "data-sentry-source-file": "LinkButton.tsx",
        children: t
    }))
}
const Vt = t => e.jsx(e.Fragment, {
        children: e.jsxs("div", {
            className: M("flex h-6 w-[4.25rem] flex-row items-center rounded border", "border-carbon-lighter bg-white"),
            children: [e.jsx("button", {
                className: "flex h-full w-full grow basis-1/3 items-center justify-center cursor-pointer bg-gray-light rounded-l bg-[#F8F8F8] text-carbon-lighter",
                disabled: !0,
                children: e.jsx(mt, {
                    className: "h-3.5 w-3.5 outline-none",
                    strokeWidth: 2.5,
                    "data-sentry-element": "Minus",
                    "data-sentry-source-file": "AddOnItem.tsx"
                })
            }), e.jsx("p", {
                className: "grow basis-1/3 text-center text-xs font-medium text-coal-dark",
                children: t
            }), e.jsx("button", {
                className: "flex h-full w-full grow basis-1/3 items-center justify-center cursor-pointer bg-gray-light rounded-r bg-[#F8F8F8] text-carbon-lighter",
                disabled: !0,
                children: e.jsx(Me, {
                    className: "h-3.5 w-3.5 outline-none",
                    strokeWidth: 2.5,
                    "data-sentry-element": "Plus",
                    "data-sentry-source-file": "AddOnItem.tsx"
                })
            })]
        })
    }),
    cs = ({
        variant: t,
        addOnData: s,
        parentTitle: a,
        handleAddOnDelete: n,
        disableActions: l = !1,
        allowDelete: r = !0,
        itemQuantity: o = 1
    }) => {
        var u;
        const d = {
                CART: "h-[75px] w-[75px]",
                CHECKOUT: "h-[4.188rem] w-16"
            },
            x = {
                CART: "mt-3 flex w-full min-w-full flex-row justify-between bg-gray-lightest p-2 rounded-xl items-start",
                CHECKOUT: "flex w-full min-w-full flex-row justify-between"
            };
        return e.jsxs("div", {
            className: M(x[t]),
            "data-sentry-component": "AddOnItem",
            "data-sentry-source-file": "AddOnItem.tsx",
            children: [e.jsx("div", {
                children: e.jsx("img", {
                    src: lt((u = s == null ? void 0 : s.image) != null ? u : "", ".jpg", "_small"),
                    alt: "add-on-image",
                    className: M("rounded-lg border border-gray-light object-cover", d[t]),
                    onError: ({
                        currentTarget: i
                    }) => {
                        i.onerror = null, i.src = Ue
                    }
                })
            }), e.jsxs("div", {
                className: "flex flex-col flex-1 ml-4 justify-between",
                children: [e.jsxs("div", {
                    className: "flex flex-row justify-between items-start space-x-1",
                    children: [e.jsxs("div", {
                        children: [e.jsx("p", {
                            className: "overflow-hidden text-ellipsis  pt-0.5 text-sm font-medium text-coal-dark",
                            children: fe(s == null ? void 0 : s.product_name, 40)
                        }), a && e.jsxs("h4", {
                            className: "mt-1 w-full overflow-hidden text-ellipsis text-xs font-normal text-coal-light",
                            children: ["For ", fe(a, 40)]
                        })]
                    }), r && e.jsx("button", {
                        className: "cursor-pointer rounded-lg border border-gray-light p-1 bg-white max-h-fit",
                        onClick: l ? () => {} : n,
                        children: e.jsx(xt, {
                            className: "h-3.5 w-3.5 text-coal-light outline-none",
                            strokeWidth: 2.5
                        })
                    })]
                }), e.jsxs("div", {
                    className: "mt-2 flex flex-row justify-between align-center",
                    children: [Vt(o), e.jsx("p", {
                        className: "pt-1 text-sm font-medium text-coal-dark flex justify-end",
                        children: e.jsx(q, {
                            total: se((s == null ? void 0 : s.price) * o),
                            orientation: "horizontal",
                            "data-sentry-element": "Price",
                            "data-sentry-source-file": "AddOnItem.tsx"
                        })
                    })]
                })]
            })]
        })
    },
    ds = ({
        apiActionLoading: t,
        addOnData: s,
        variant: a,
        isChecked: n,
        handleCheckBoxClick: l,
        disableOnClick: r = !1
    }) => {
        var m, p, y, f, g;
        const o = {
                ITEM: {
                    imageStyle: "h-8 w-8 rounded-md",
                    containerStyle: "add-on-list-item flex justify-between items-center gap-2 p-[10px] bg-gradient-to-r from-gray-lighter to-gray-light border-t-[1px] border-t-gray-light cursor-pointer min-h-[53px]"
                },
                CART: {
                    imageStyle: "h-6 w-6 rounded-md",
                    containerStyle: "flex justify-between items-center gap-2 p-[10px] cursor-pointer"
                }
            },
            [d, x] = c.useState(n),
            [u, i] = c.useState(!1);
        c.useEffect(() => {
            t || (i(!1), x(n))
        }, [t]);
        const b = () => {
            u || (r && i(!0), l == null || l(!d), x(_ => !_))
        };
        return e.jsxs("div", {
            className: o[a].containerStyle,
            onClick: b,
            "data-sentry-component": "AddOnCheckboxTile",
            "data-sentry-source-file": "AddOnCheckboxTile.tsx",
            children: [e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [e.jsx("span", {
                    children: e.jsx(At, {
                        size: "sm",
                        variant: a === "ITEM" ? "secondary" : "primary",
                        checked: d,
                        disabled: u,
                        "data-sentry-element": "Checkbox",
                        "data-sentry-source-file": "AddOnCheckboxTile.tsx"
                    })
                }), e.jsx("p", {
                    dangerouslySetInnerHTML: {
                        __html: (f = (y = (m = s == null ? void 0 : s.description) == null ? void 0 : m.replaceAll("{{product_title}}", fe(s == null ? void 0 : s.product_name, 40))) == null ? void 0 : y.replaceAll("{{price}}", se((p = s == null ? void 0 : s.price) == null ? void 0 : p.toString()))) != null ? f : ""
                    },
                    className: "text-sm font-medium text-coal-dark"
                })]
            }), (s == null ? void 0 : s.show_image) && e.jsx("img", {
                src: (g = s == null ? void 0 : s.image) != null ? g : "",
                alt: "add-on-image",
                className: o[a].imageStyle,
                onError: ({
                    currentTarget: _
                }) => {
                    _.onerror = null, _.src = Ue
                }
            })]
        })
    },
    us = c.forwardRef(({
        id: t,
        titleIcon: s,
        titleText: a,
        content: n,
        defaultOpen: l = !1,
        subTitleText: r,
        callbackOnToggle: o,
        customClass: d,
        buttonClass: x,
        insideClass: u,
        loading: i = !1,
        accordionIcon: b = "DEFAULT"
    }, m) => {
        const [p, y] = c.useState(l);
        c.useEffect(() => {
            !l && p && y(!1)
        }, [l]);

        function f() {
            y(S => !S), o && o(!p)
        }
        c.useImperativeHandle(m, () => ({
            openAccordion() {
                y(!0)
            },
            closeAccordion() {
                y(!1)
            },
            scrollIntoView() {
                const S = document.querySelector(`#${t}`);
                S && S.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                })
            }
        }));
        const g = () => {
                switch (b) {
                    case "PLUS":
                        return e.jsx(Me, {
                            className: M("h-4 w-4 text-coal-dark ", p ? "rotate-45 transform duration-5 00 ease-in-out" : "rotate-0 transform duration-500 ease-in-out")
                        });
                    default:
                        return e.jsx(_e, {
                            className: M("h-4 w-4 text-coal-dark ", p ? "rotate-180 transform duration-700 ease-in-out" : "rotate-0 transform duration-700 ease-in-out")
                        })
                }
            },
            _ = () => e.jsxs("div", {
                className: `flex w-full flex-row items-center justify-between ${u}`,
                "data-sentry-component": "renderContent",
                "data-sentry-source-file": "Accordian.tsx",
                children: [!!a && e.jsxs("div", {
                    className: "flex flex-row items-center space-x-2",
                    children: [s, e.jsx("p", {
                        className: "text-sm font-medium text-coal-dark",
                        children: a
                    })]
                }), e.jsxs("div", {
                    className: "flex flex-row items-center gap-2",
                    children: [!!r && e.jsx("p", {
                        className: "text-sm text-coal-light",
                        children: r
                    }), g()]
                })]
            });
        return e.jsxs("div", {
            id: t,
            className: `border-base mx-3 mt-3 flex flex-col bg-white ${p?"shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)] duration-200 ease-in-out":"delay-[100ms]"} ${d}`,
            children: [e.jsx(Ie, {
                size: "sm",
                loading: i,
                children: e.jsx(Ie.Content, {
                    children: e.jsx("button", {
                        className: M("flex h-[3.25rem] w-full cursor-pointer flex-row items-center rounded-[inherit] px-3 py-4 focus:outline-none", x != null ? x : ""),
                        onClick: f,
                        children: _()
                    })
                })
            }), e.jsx("div", {
                className: `overflow-hidden transition-[max-height] ${!p&&"hidden"} ${p?"duration-700 ease-in":"duration-500 ease-out"} ${p?"max-h-[9999px]":" max-h-0"} `,
                children: n
            })]
        })
    }),
    xs = ({
        type: t,
        label: s,
        placeholder: a,
        id: n,
        name: l,
        autoComplete: r,
        value: o = "",
        required: d = !1,
        maxLength: x = 200,
        onChange: u,
        iconComponent: i,
        autoCapitalize: b = "off",
        customClass: m,
        error: p = {
            status: !1,
            message: "",
            showAlert: !0
        },
        disabled: y = !1,
        tabIndex: f = 0,
        filled: g = !1,
        autoFocus: _ = !1,
        inputMode: S = "text",
        height: C = "h-14",
        width: v = "w-full",
        showLabel: F = !0,
        placeholderPadding: I = "",
        showSuccessIcon: R = !1,
        labelClassName: N,
        onBlur: B,
        onFocus: $,
        onKeyDown: k,
        disabletheme: Y = !1,
        startIcon: P
    }) => e.jsxs("div", {
        id: `flo-field-${n}`,
        className: "relative flex w-full flex-col",
        "data-sentry-component": "InputField",
        "data-sentry-source-file": "InputField.tsx",
        children: [F && e.jsx("label", {
            htmlFor: n,
            className: M(d ? "required-field" : "", "mb-0.5  text-xxs uppercase text-gray-dark", N || ""),
            children: s
        }), e.jsxs("div", {
            className: "relative",
            children: [P && e.jsx("div", {
                className: "absolute left-3 top-1/2 -translate-y-1/2",
                children: P
            }), e.jsx("input", {
                id: n,
                name: l,
                type: t,
                placeholder: a,
                autoFocus: _,
                className: M(`peer ${C} ${v} transition-inputLabel appearance-none rounded-xl border font-normal text-charcoal placeholder:tracking-normal placeholder-shown:pt-0 focus:border-[1px] focus:outline-none focus:ring-[2px]`, P ? "pl-6" : "px-3", Y ? "focus:right-black focus:border-black focus:ring-0" : "focus:border-primary-dark focus:ring-primary-light", p.status ? " border-ouch" : " border-gray-light", m != null ? m : "", o != null && o.length && !(p != null && p.status) ? "border-[#D5E7DB]" : "", y ? "border !border-gray-light bg-gray-lighter text-gray-dark" : ""),
                autoComplete: r,
                "aria-label": a,
                maxLength: x,
                onChange: u,
                onFocus: $,
                onBlur: B,
                onKeyDown: k,
                value: o,
                autoCapitalize: b,
                disabled: y,
                tabIndex: f,
                inputMode: S,
                "data-gramm": "false",
                "data-gramm_editor": "false",
                "data-enable-grammarly": "false"
            }), R && e.jsx("div", {
                className: "absolute right-3 top-5",
                children: e.jsx("img", {
                    src: Ge,
                    className: "h-4 w-4"
                })
            })]
        }), (p == null ? void 0 : p.status) && p.message && e.jsxs("div", {
            className: "mt-1 flex items-center gap-1",
            children: [e.jsx(we, {
                className: "-mt-[1px] h-3 w-3 shrink-0 text-ouch"
            }), e.jsx("label", {
                htmlFor: n,
                className: "bg-transparent text-xs font-normal text-ouch transition-all peer-focus:hidden",
                children: p == null ? void 0 : p.message
            })]
        }), i]
    }),
    Yt = ({
        coupon: t,
        handleDeleteItem: s
    }) => {
        var l;
        const {
            t: a
        } = z(), {
            actions: {
                setDiscountProductSelectorModal: n
            }
        } = V();
        return e.jsx("div", {
            className: "flex w-full flex-col py-2.5 pr-4 pl-4",
            "data-sentry-component": "AppliedItem",
            "data-sentry-source-file": "AppliedItem.tsx",
            children: e.jsxs("div", {
                className: "border-box flex w-full flex-row",
                children: [e.jsxs("div", {
                    className: "flex w-full flex-row items-center justify-between overflow-hidden pr-2",
                    children: [e.jsx("h3", {
                        className: "flex w-full items-center space-x-1 truncate pr-2 text-sm font-normal text-coal-light",
                        children: e.jsx("p", {
                            className: "text-md truncate font-medium uppercase text-coal-dark",
                            children: `${t!=null&&t.title?t==null?void 0:t.title:t==null?void 0:t.code}`
                        })
                    }), t != null && t.isProductSelector ? e.jsx("p", {
                        className: "inline-flex w-1/2 space-x-1 justify-end overflow-hidden text-sm font-medium text-yay-dark underline cursor-pointer",
                        onClick: () => n("DISCOUNTED_PRODUCT_SELECTOR"),
                        children: a("view")
                    }) : e.jsx("p", {
                        className: "inline-flex w-1/2 justify-end text-sm font-medium text-yay-dark",
                        children: e.jsx(q, {
                            total: (l = t == null ? void 0 : t.discountValue) != null ? l : "",
                            isDiscounted: !0,
                            customText: (t == null ? void 0 : t.couponType) === ue.PAYMENT_OFFER ? a("bank_offer_applied") : ""
                        })
                    })]
                }), !!(t != null && t.code) && !!(t != null && t.isRemovable) && !(t != null && t.isProductSelector) && e.jsx("button", {
                    className: "flex h-4 w-4 items-center justify-center",
                    onClick: () => s(t == null ? void 0 : t.code),
                    tabIndex: -1,
                    children: e.jsx(ft, {
                        className: "h-4 w-4 text-coal-dark",
                        strokeWidth: 2.5
                    })
                })]
            })
        })
    },
    ms = ({
        showAppliedCount: t,
        showRewards: s = !1,
        showSavings: a = !0,
        showAppliedCoupons: n = !1,
        savingItems: l,
        couponDisplayType: r,
        handleDeleteCoupon: o,
        defaultOpen: d = !1,
        showIcon: x = !0,
        parent: u = "CHECKOUT"
    }) => {
        const {
            t: i
        } = z(), {
            state: {
                appliedCoupons: b,
                checkoutView: m
            }
        } = V(), [p, y] = c.useState(d), {
            count: f,
            manualFreebieCount: g,
            savings: _
        } = l, {
            formattedPrice: S
        } = He(_), C = b == null ? void 0 : b.some(N => N.couponType === ue.PAYMENT_OFFER), v = (b == null ? void 0 : b.filter(N => N.isReward)) || [], F = C || n || r !== "STRIP", I = c.useMemo(() => b == null ? void 0 : b.filter(N => !(N != null && N.isFreebie && (N != null && N.autoApplied) && !(N != null && N.isRemovable)) && !(N != null && N.isReward) && (u === "DIALOG" ? !(N != null && N.isProductSelector) : !0)), [b, u]), R = () => {
            y(!p)
        };
        return _ === 0 && r === "STRIP" && !s && g === 0 && !C ? e.jsx(e.Fragment, {}) : e.jsxs("div", {
            className: "flex w-full flex-col",
            "data-sentry-component": "CouponSummaryStrip",
            "data-sentry-source-file": "CouponSummaryStrip.tsx",
            children: [e.jsxs("div", {
                className: "flex w-full flex-col cursor-pointer divide-y divide-[#2C874A1A]",
                onClick: () => {
                    F && R()
                },
                children: [s && v.map(N => {
                    var B;
                    return e.jsxs("div", {
                        className: "flex items-center space-x-2 px-4 py-3 text-sm font-medium text-yay-dark",
                        children: [e.jsx("span", {
                            className: "flex h-4 w-4 items-center justify-center rounded-full border border-[#2C874A80] text-xxs",
                            children: "₹"
                        }), e.jsx("span", {
                            children: (B = N == null ? void 0 : N.rewardData) == null ? void 0 : B.header
                        })]
                    }, N.code)
                }), a && f > 0 && e.jsxs("div", {
                    className: `justify-left relative flex items-center overflow-hidden min-h-10 py-0.5  ${p&&I.length?"border-b border-yay-light ease-in-out":"border-b-0 delay-[650ms] ease-in"}`,
                    children: [x && e.jsx("img", {
                        className: "spin-slow absolute left-4 top-3 h-4 min-h-4 w-4 min-w-4",
                        src: Et,
                        alt: "%"
                    }), e.jsx("div", {
                        className: `flex flex-col py-2.5 ${x?"pl-10":"pl-3"} pr-3`,
                        children: e.jsx("div", {
                            className: "flex w-full flex-row",
                            children: e.jsx("div", {
                                className: "flex w-full flex-row items-center justify-between overflow-hidden pr-2",
                                children: e.jsxs("p", {
                                    className: "flex items-center space-x-1 truncate pr-2 text-sm font-normal text-yay-dark",
                                    children: [g !== f && e.jsxs(e.Fragment, {
                                        children: [e.jsx(q, {
                                            total: _,
                                            customText: C ? i("bank_offer_applied") : ""
                                        }), " ", parseInt(S != null ? S : "0") !== 0 && i("total_savings").toLowerCase()]
                                    }), t && g !== f && e.jsx(e.Fragment, {
                                        children: " · "
                                    }), t && i("x_coupons_applied", {
                                        count: f
                                    })]
                                })
                            })
                        })
                    }), F && !!(I != null && I.length) && e.jsx(_e, {
                        className: `!ml-auto !mr-4 h-4 w-4 text-coal-dark ${p?"rotate-180 transform duration-700 ease-in-out":"rotate-0 transform duration-700 ease-in-out"}`
                    })]
                })]
            }), e.jsx("div", {
                className: `relative overflow-hidden transition-[max-height] ${p?"duration-1000 ease-in":"duration-700 ease-out"} ${p?"max-h-[9999px]":" max-h-0"} `,
                children: I == null ? void 0 : I.map((N, B) => e.jsx(Yt, {
                    coupon: N,
                    handleDeleteItem: o
                }, `${N==null?void 0:N.code}_${B}`))
            })]
        })
    },
    fs = ({
        isOpen: t,
        closePopup: s,
        appliedCouponCode: a,
        incomingCouponCode: n
    }) => {
        var I, R, N, B, $, k, Y;
        const {
            t: l
        } = z(), {
            state: {
                billing: r,
                appliedCoupons: o
            }
        } = V(), {
            state: {
                merchant: d
            }
        } = je(), [x, u] = c.useState(!0), [i, b] = c.useState(), [m, p] = c.useState("INCOMING"), y = (I = d == null ? void 0 : d.celebrationPopupConfig) != null && I.freebieAppliedCelebrationsText ? (R = d == null ? void 0 : d.celebrationPopupConfig) == null ? void 0 : R.freebieAppliedCelebrationsText : l("freebie_applied_celebrations_txt"), f = (N = d == null ? void 0 : d.celebrationPopupConfig) != null && N.freeGiftsText ? (B = d == null ? void 0 : d.celebrationPopupConfig) == null ? void 0 : B.freeGiftsText : l("free_gifts");
        c.useEffect(() => {
            var P;
            if (!((!a || !n) && !(o != null && o.length))) {
                if (a) {
                    const L = o.find(h => h.code.toLowerCase() === a.toLowerCase());
                    L && b(L), p("APPLIED");
                    return
                }
                if (n) {
                    const L = (P = o.filter(w => w.autoApplied && w.isPrepaid)) == null ? void 0 : P.length;
                    if ((o == null ? void 0 : o.length) - L > 1) {
                        p("MULTIPLE");
                        return
                    }
                    const h = o.find(w => w.code.toLowerCase() === n.toLowerCase());
                    h && b(h), p("INCOMING");
                    return
                }
            }
        }, [o, a, n]), c.useEffect(() => {
            u(t), setTimeout(() => F(), 3e3)
        }, []);
        const g = c.useCallback(() => {
                var P;
                return (P = o == null ? void 0 : o.filter(L => L == null ? void 0 : L.isFreebie)) == null ? void 0 : P.reduce((L, h) => (h == null ? void 0 : h.freebieItemCount) + L, 0)
            }, [o]),
            _ = c.useMemo(() => {
                var P, L;
                return (L = (P = o == null ? void 0 : o.filter(h => h.isReward)) == null ? void 0 : P.reduce((h, w) => {
                    var j, A;
                    return ((A = (j = w == null ? void 0 : w.couponRewardConfig) == null ? void 0 : j.amount) != null ? A : 0) + h
                }, 0)) != null ? L : 0
            }, [o]),
            S = c.useCallback(() => m === "MULTIPLE" ? e.jsx(e.Fragment, {
                children: g() ? y : l("multiple_automatic_discounts_applied")
            }) : g() && (r != null && r.discount) ? e.jsx(e.Fragment, {
                children: y
            }) : r != null && r.discount || i != null && i.isPrepaid ? e.jsxs(e.Fragment, {
                children: [i != null && i.title ? i == null ? void 0 : i.title : i == null ? void 0 : i.code, e.jsxs("span", {
                    className: "font-normal text-coal-light",
                    children: [" ", l("applied")]
                })]
            }) : e.jsx(e.Fragment, {
                children: y
            }), [m, i, o]),
            C = c.useCallback(() => {
                var P;
                if (m === "APPLIED") return r != null && r.discount ? i != null && i.isFreebie ? e.jsx(e.Fragment, {}) : e.jsxs(e.Fragment, {
                    children: [l("offer_applied_desc"), " ", e.jsx("span", {
                        className: "px-0.5"
                    }), e.jsx(q, {
                        total: (P = i == null ? void 0 : i.discountValue) != null ? P : ""
                    })]
                }) : e.jsx(e.Fragment, {})
            }, [i, m]),
            v = c.useCallback(() => {
                var P;
                return m === "APPLIED" ? e.jsx("p", {
                    className: "celebrations-savings_strip flex h-full w-full flex-row items-center justify-center gap-1.5 rounded-2xl text-sm font-medium",
                    children: i != null && i.isPrepaid ? e.jsx(e.Fragment, {
                        children: l("prepaid_discount_text", {
                            discount: se(i == null ? void 0 : i.prepaidValue)
                        })
                    }) : i != null && i.isFreebie ? e.jsx(e.Fragment, {
                        children: g() > 1 ? l("x_free_gifts", {
                            count: g()
                        }) : f
                    }) : e.jsxs(e.Fragment, {
                        children: [(i == null ? void 0 : i.couponType) !== ue.PAYMENT_OFFER && l("celebrations_total_discounts_strip"), e.jsx(q, {
                            total: (r == null ? void 0 : r.discount) + _,
                            customText: (i == null ? void 0 : i.couponType) === ue.PAYMENT_OFFER ? l("bank_offer_applied") : ""
                        })]
                    })
                }) : e.jsx("p", {
                    className: "celebrations-savings_strip flex h-full w-full flex-row items-center justify-center gap-1.5 rounded-2xl text-sm font-medium",
                    children: r != null && r.discount && g() ? e.jsxs(e.Fragment, {
                        children: [l("free_gifts_and_savings"), e.jsx(q, {
                            total: (P = r.discount) != null ? P : ""
                        })]
                    }) : i != null && i.isPrepaid ? e.jsx(e.Fragment, {
                        children: l("prepaid_discount_text", {
                            discount: se(i == null ? void 0 : i.prepaidValue)
                        })
                    }) : g() ? e.jsx(e.Fragment, {
                        children: g() > 1 ? l("x_free_gifts", {
                            count: g()
                        }) : f
                    }) : e.jsxs(e.Fragment, {
                        children: [l("celebrations_total_discounts_strip"), e.jsx(q, {
                            total: r.discount + _
                        })]
                    })
                })
            }, [i, m]),
            F = () => {
                u(!1), setTimeout(() => s(), 400)
            };
        return !a && !n ? e.jsx(e.Fragment, {}) : e.jsx(e.Fragment, {
            children: e.jsx(H, {
                appear: !0,
                show: x,
                as: c.Fragment,
                "data-sentry-element": "Transition",
                "data-sentry-source-file": "CelebrationPopup.tsx",
                children: e.jsx(G, {
                    as: "div",
                    className: "fixed inset-0 z-40 overflow-y-auto",
                    onClose: () => {},
                    "data-sentry-element": "Dialog",
                    "data-sentry-source-file": "CelebrationPopup.tsx",
                    children: e.jsxs("div", {
                        className: "relative min-h-screen text-center",
                        children: [e.jsx("span", {
                            className: "inline-block h-screen align-middle",
                            "aria-hidden": "true",
                            children: "​"
                        }), e.jsx(H.Child, {
                            as: c.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 translate-y-full",
                            enterTo: "opacity-100 translate-y-0",
                            leave: "ease-in duration-300",
                            leaveFrom: "opacity-100 translate-y-0",
                            leaveTo: "opacity-0 translate-y-full",
                            "data-sentry-element": "unknown",
                            "data-sentry-source-file": "CelebrationPopup.tsx",
                            children: e.jsx("div", {
                                id: "celebrations-wrapper",
                                className: "celebrations-wrapper fixed inset-x-0 bottom-0 z-30 m-auto inline-block h-full w-full  text-left align-middle md:top-0 md:h-[85vh] md:w-[25rem] md:rounded-b-2xl",
                                onClick: F,
                                children: e.jsx("div", {
                                    className: "celebrations-text_bg absolute bottom-0 z-40 w-full rounded-b-inherit opacity-90",
                                    children: e.jsxs("div", {
                                        className: "flex w-full flex-col items-center pb-12 pt-4",
                                        children: [e.jsx("img", {
                                            src: Ft,
                                            alt: "flo-logo-mono"
                                        }), e.jsx("p", {
                                            className: "w-[95%] break-words pt-4 text-center text-lg font-semibold text-carbon-dark",
                                            children: S()
                                        }), e.jsx("p", {
                                            className: "flex pb-5 pt-1 text-sm text-coal-light",
                                            children: C()
                                        }), e.jsx("div", {
                                            className: "flex h-11 w-full flex-col items-center justify-center px-5",
                                            children: v()
                                        }), e.jsx("div", {
                                            className: "pt-6",
                                            children: e.jsx(he, {
                                                buttonText: ($ = d == null ? void 0 : d.celebrationPopupConfig) != null && $.celebrationsTotalSavingsBtnText && ((k = d == null ? void 0 : d.celebrationPopupConfig) != null && k.celebrationsTotalSavingsBtnText) ? (Y = d == null ? void 0 : d.celebrationPopupConfig) == null ? void 0 : Y.celebrationsTotalSavingsBtnText : l("celebrations_total_savings_btn_text"),
                                                customClass: "text-yay-dark font-semibold",
                                                onClick: F,
                                                "data-sentry-element": "GenericButton",
                                                "data-sentry-source-file": "CelebrationPopup.tsx"
                                            })
                                        })]
                                    })
                                })
                            })
                        })]
                    })
                })
            })
        })
    },
    Be = 220,
    qt = ({
        count: t,
        children: s,
        customCSS: a,
        shouldRenderDots: n = !0
    }) => {
        const l = c.useRef(null),
            [r, o] = c.useState(0),
            [d, x] = c.useState(!1),
            u = c.useRef({
                startX: 0,
                scrollLeft: 0
            }),
            i = f => {
                if (!l.current) return;
                const g = l.current,
                    _ = f.pageX - g.offsetLeft,
                    S = g.scrollLeft;
                u.current = {
                    startX: _,
                    scrollLeft: S
                }, x(!0), document.body.style.cursor = "grabbing"
            },
            b = () => {
                x(!1), l.current && (document.body.style.cursor = "default")
            },
            m = f => {
                if (!d || !l.current) return;
                f.preventDefault();
                const g = l.current,
                    S = (f.pageX - g.offsetLeft - u.current.startX) * 1.2;
                g.scrollLeft = u.current.scrollLeft - S
            },
            p = f => {
                l.current && (l.current.scrollLeft = l.current.scrollLeft + f)
            };
        c.useEffect(() => {
            if (!(l != null && l.current)) return;
            const f = l == null ? void 0 : l.current;
            return f.addEventListener("scroll", () => Pe(f, 100, o), {
                passive: !0
            }), () => f.removeEventListener("scroll", () => Pe(f, 100, o))
        }, []);
        const y = c.useMemo(() => {
            const f = [],
                g = Math.floor(r * (t - 1) / 110);
            for (let _ = 0; _ < t - 1; _++) f.push(e.jsx("div", {
                onClick: () => l.current ? l.current.scrollLeft = Be * _ : null,
                className: `h-2 w-2 cursor-pointer snap-center rounded-full ${_===g?"bg-primary-dark":"bg-gray-light"}`
            }, `Item-${_}`));
            return f
        }, [t, r]);
        return e.jsxs("div", {
            className: "w-full",
            "data-sentry-component": "Carousel",
            "data-sentry-source-file": "Carousel.tsx",
            children: [e.jsxs("div", {
                className: M("relative", "mb-3"),
                children: [l.current && l.current.scrollLeft > 100 && e.jsx("button", {
                    onClick: () => p(-220),
                    className: "absolute z-1 -left-4 top-[calc(50%-6px)] flex h-6 w-6 items-center justify-center rounded-full border-[1px] border-carbon-lighter bg-white text-coal-dark",
                    children: e.jsx(ht, {
                        className: "h-4 w-4"
                    })
                }), e.jsx("ul", {
                    ref: l,
                    onMouseDown: i,
                    onMouseUp: b,
                    onMouseMove: m,
                    onMouseLeave: b,
                    className: `scrollbar-hide flex w-full snap-x snap-mandatory items-center space-x-3 overflow-x-scroll ${!!a&&a}`,
                    children: s
                }), t > 1 && e.jsx("button", {
                    onClick: () => p(Be),
                    className: `absolute z-1 -right-2 top-[calc(50%-6px)] flex h-6 w-6 items-center justify-center rounded-full border-[1px] border-carbon-lighter bg-white text-coal-dark ${l.current&&!(l.current.scrollLeft<228*(t-2)-260)?"hidden":"block"}`,
                    children: e.jsx(pt, {
                        className: "h-4 w-4"
                    })
                })]
            }), n ? e.jsx("div", {
                className: "flex snap-x snap-mandatory items-center justify-center space-x-1 p-4 pt-[10px]",
                children: y
            }) : e.jsx(e.Fragment, {})]
        })
    },
    hs = oe.memo(qt),
    ps = ({
        position: t = "checkout"
    }) => {
        var Y, P, L;
        const {
            t: s
        } = z(), {
            sendAnalyticsEvent: a
        } = ae(), {
            state: {
                checkoutId: n,
                discountProductSelectorModal: l,
                discountedProductSelectorData: r,
                checkoutView: o,
                initialCheckoutStep: d,
                discountProductSelectorPayload: x,
                checkoutModal: u
            },
            actions: {
                setCheckoutModal: i,
                setDiscountProductSelectorModal: b,
                setCheckoutView: m,
                setShippingHandles: p,
                updateCheckoutBasedOnCheckoutResponse: y,
                setDiscountProductSelectorPayload: f
            }
        } = V(), {
            state: {
                isAuthenticated: g
            }
        } = be(), [_, S] = c.useState([]), [C, v] = c.useState(!1), {
            actions: {
                mutatePayment: F
            }
        } = Ae(), I = c.useMemo(() => r.items.length > 1, [r]);
        c.useEffect(() => {
            _.length === 0 && S(r.items.map((h, w) => w === 0))
        }, [r]), c.useEffect(() => {
            l !== "NONE" && i("NONE")
        }, [l, u]), c.useEffect(() => {
            l === "DISCOUNTED_PRODUCT_SELECTOR" && a({
                eventName: D.FLO_ITEMS_SELECTOR_LOADED,
                eventFor: [Ee.SF_ANALYTICS],
                eventType: "load",
                metaData: {
                    itemSelectorData: {
                        discountCodes: N
                    }
                }
            })
        }, [l]);
        const R = c.useMemo(() => {
                const h = {};
                return r.items.forEach(j => {
                    h[j.couponCode] || (h[j.couponCode] = []), j.products.forEach(A => {
                        var O;
                        (O = A.variants) == null || O.forEach(U => {
                            U.selectedQuantity && (h[j.couponCode] ? h[j.couponCode].push(U) : h[j.couponCode] = [U])
                        })
                    })
                }), {
                    selection: Object.entries(h).map(([j, A]) => ({
                        discount_code: j,
                        items: A == null ? void 0 : A.map(O => ({
                            variant_id: O.id,
                            quantity: O.selectedQuantity
                        }))
                    }))
                }
            }, [r]),
            N = c.useMemo(() => {
                var w;
                const h = [];
                return (w = r == null ? void 0 : r.items) == null || w.forEach(j => {
                    h != null && h.includes(j == null ? void 0 : j.couponCode) || h.push(j == null ? void 0 : j.couponCode)
                }), h
            }, [r]),
            B = c.useMemo(() => ({
                selection: N.map(w => {
                    const j = x.selection.findIndex(A => A.discount_code === w);
                    return j !== -1 ? {
                        discount_code: w,
                        items: x.selection[j].items
                    } : {
                        discount_code: w,
                        items: []
                    }
                })
            }), [x, N, r]),
            $ = h => Q(void 0, null, function*() {
                var w, j, A, O, U;
                v(!0);
                try {
                    let E;
                    if (g ? E = yield de(`/checkout/${n}/discount-items`, h, "KRATOS_PRIVATE"): E = yield de(`/checkout/${n}/discount-items`, h, "KRATOS_PUBLIC"), !E) {
                        Z(s("unable_to_add"));
                        return
                    }
                    if (a({
                            eventName: D.FLO_ITEMS_SELECTOR_SUBMITTED,
                            eventFor: [Ee.SF_ANALYTICS],
                            eventType: "click",
                            metaData: {
                                itemSelectorData: {
                                    selection: h.selection
                                }
                            }
                        }), f(h), y(E), te(ot({
                            isAuthenticated: g,
                            checkoutId: n
                        })), te(g ? [`/checkout/${n}/discount`, "KRATOS_PRIVATE"] : [`/checkout/${n}/discount`, "KRATOS_PUBLIC"]), !((j = (w = E == null ? void 0 : E.pricing) == null ? void 0 : w.serviceable) != null ? j : !1) && t !== "cart") {
                        o === "PAYMENTS" && d !== "PAYMENTS" && (m("ADDRESS_LIST"), Z(s("serviceability_error"), 5e3)), o === "PAYMENTS" && d === "PAYMENTS" && (i("ADDRESS_LIST"), Z(s("serviceability_error"), 5e3));
                        return
                    }
                    const ne = (A = E == null ? void 0 : E.metadata) == null ? void 0 : A.available_shipping_handles,
                        T = (U = (O = E == null ? void 0 : E.metadata) == null ? void 0 : O.show_shipping_handle_selector) != null ? U : !1;
                    p(ne), ne.length > 0 && T && o === "PAYMENTS" && d !== "PAYMENTS" ? i("SHIPPING_HANDLES") : (F(), te([`/checkout/${n}/rewards`, Le.KRATOS_PRIVATE]), te("UPI_INTENT"))
                } catch (E) {
                    console.error(E)
                } finally {
                    v(!1), b("NONE")
                }
            }),
            k = c.useMemo(() => {
                let h = 0,
                    w = 0;
                return r.items.forEach(j => {
                    j.concessionAmount === 100 ? h += j.quantity : w += j.quantity
                }), {
                    freebies: h,
                    discountedProducts: w,
                    onlyFreebies: h === r.totalItems,
                    onlyDiscountedProducts: w === r.totalItems,
                    freebiesAndDiscountedProducts: h > 0 && w > 0
                }
            }, [r]);
        return e.jsxs(e.Fragment, {
            children: [e.jsxs(pe, {
                isOpen: l === "DISCOUNTED_PRODUCT_SELECTOR",
                setIsOpen: () => $(B),
                translateAxis: "y",
                customClass: "overflow-scroll md:!top-auto md:absolute !scrollbar-hide h-full rounded-t-2xl min-h-[20rem] h-auto max-h-[40rem]",
                dialogOverlay: !0,
                closeOnOverlayClick: !0,
                "data-sentry-element": "GenericDialog",
                "data-sentry-source-file": "DiscountedProductSelectorPopup.tsx",
                children: [e.jsxs(ze, {
                    className: "!p-[18px] flex justify-between !from-white !rounded-t-2xl !via-white !to-white border-b border-gray-light",
                    "data-sentry-element": "DialogHeader",
                    "data-sentry-source-file": "DiscountedProductSelectorPopup.tsx",
                    children: [e.jsxs("div", {
                        className: "flex flex-col items-start justify-between",
                        children: [e.jsx("p", {
                            className: "text-base font-medium text-coal-dark",
                            children: s("select_items")
                        }), e.jsx("span", {
                            className: "text-sm font-normal text-coal-dark",
                            children: `${r.totalSelectedItems}/${r.totalItems}`
                        })]
                    }), e.jsx("div", {
                        className: "cursor-pointer flex text-coal-dark justify-start items-start",
                        children: e.jsx(Oe, {
                            className: "w-6 h-6",
                            onClick: () => $(B),
                            "data-sentry-element": "X",
                            "data-sentry-source-file": "DiscountedProductSelectorPopup.tsx"
                        })
                    })]
                }), e.jsx(ge, {
                    className: "scrollbar-hide max-h-[36rem]",
                    "data-sentry-element": "DialogBody",
                    "data-sentry-source-file": "DiscountedProductSelectorPopup.tsx",
                    children: e.jsx("div", {
                        className: "flex flex-col !scrollbar-hide items-start justify-between border-t border-gray-light pt-2",
                        children: I ? r.items.map((h, w) => e.jsx(Dt, {
                            productGroup: h,
                            groupIndex: w,
                            openState: _,
                            setOpenState: S
                        }, `discounted-product-group-${w+1}`)) : e.jsx("div", {
                            className: "flex flex-col w-full space-y-2 py-2 px-3",
                            children: (L = (P = (Y = r.items) == null ? void 0 : Y[0]) == null ? void 0 : P.products) == null ? void 0 : L.map((h, w) => e.jsx(Rt, {
                                selectedProduct: h,
                                groupIndex: 0,
                                productIndex: w
                            }, `discounted-product-card-${w+1}`))
                        })
                    })
                }), e.jsx(ye, {
                    "data-sentry-element": "DialogFooter",
                    "data-sentry-source-file": "DiscountedProductSelectorPopup.tsx",
                    children: e.jsx(Ve, {
                        buttonText: s("confirm"),
                        onClick: () => $(R),
                        height: "h-14",
                        isCheckout: !0,
                        id: "flo_address__btn",
                        "data-sentry-element": "PrimaryButton",
                        "data-sentry-source-file": "DiscountedProductSelectorPopup.tsx"
                    })
                })]
            }), e.jsxs(pe, {
                isOpen: l === "FREE_GIFTS",
                translateAxis: "y",
                customClass: "overflow-scroll md:!top-auto md:absolute !scrollbar-hide h-full !rounded-t-none h-[36rem] max-h-[60vh] !bg-transparent bg-gradient-to-b from-transparent via-[#fffffff2] to-[#fffffff2]",
                dialogOverlay: !0,
                closeOnOverlayClick: !0,
                "data-sentry-element": "GenericDialog",
                "data-sentry-source-file": "DiscountedProductSelectorPopup.tsx",
                children: [e.jsx(ge, {
                    className: "!p-0",
                    "data-sentry-element": "DialogBody",
                    "data-sentry-source-file": "DiscountedProductSelectorPopup.tsx",
                    children: e.jsxs("div", {
                        className: "flex flex-col items-center justify-end pb-[7rem] h-full space-y-16",
                        children: [e.jsxs("div", {
                            className: "flex flex-col items-center justify-center space-y-4",
                            children: [e.jsx("img", {
                                src: It,
                                alt: "free-gifts",
                                className: "w-10 h-10"
                            }), e.jsxs("div", {
                                className: "flex flex-col items-center justify-center space-y-1",
                                children: [e.jsxs("p", {
                                    className: "text-base font-medium text-coal-dark text-center px-4",
                                    children: [k.onlyFreebies && e.jsx(e.Fragment, {
                                        children: k.freebies > 1 ? s("get_x_freebies_on_purchase", {
                                            x: k.freebies
                                        }) : s("get_a_freebie_on_purchase")
                                    }), k.onlyDiscountedProducts && e.jsx(e.Fragment, {
                                        children: k.discountedProducts > 1 ? s("get_x_discounted_products_on_purchase", {
                                            x: k.discountedProducts
                                        }) : s("get_a_discounted_product_on_purchase")
                                    }), k.freebiesAndDiscountedProducts && e.jsx(e.Fragment, {
                                        children: k.freebies > 1 && k.discountedProducts > 1 ? s("get_x_freebies_and_y_discounted_products_on_purchase", {
                                            x: k.freebies,
                                            y: k.discountedProducts
                                        }) : k.freebies > 1 && k.discountedProducts === 1 ? s("get_x_freebies_and_a_discounted_product_on_purchase", {
                                            x: k.freebies
                                        }) : k.freebies === 1 && k.discountedProducts > 1 ? s("get_a_freebie_and_x_discounted_products_on_purchase", {
                                            x: k.discountedProducts
                                        }) : s("get_a_freebie_and_a_discounted_product_on_purchase")
                                    })]
                                }), e.jsx("span", {
                                    className: "text-sm font-normal text-coal-dark",
                                    children: k.freebies ? k.freebies > 1 ? s("free_gifts_unlocked") : s("free_gift_unlocked") : k.discountedProducts > 1 ? s("discounted_products_unlocked") : s("discounted_product_unlocked")
                                })]
                            })]
                        }), e.jsxs("div", {
                            className: "flex flex-col items-center justify-center space-y-4",
                            children: [e.jsx("button", {
                                onClick: () => b("DISCOUNTED_PRODUCT_SELECTOR"),
                                className: "text-sm font-medium text-btnPrimaryText bg-primary-dark px-8 py-3 rounded-lg",
                                children: s("select_items")
                            }), e.jsx("span", {
                                onClick: () => $(B),
                                className: "text-sm font-medium cursor-pointer text-carbon-dark",
                                children: s("skip")
                            })]
                        })]
                    })
                }), e.jsx(ye, {
                    "data-sentry-element": "DialogFooter",
                    "data-sentry-source-file": "DiscountedProductSelectorPopup.tsx",
                    children: e.jsx("div", {
                        className: "h-16 bg-gradient-to-b from-transparent via-[#fffffff2] to-[#fffffff2]"
                    })
                })]
            }), C && e.jsx(Ne, {})]
        })
    },
    gs = ({
        title: t
    }) => e.jsxs("div", {
        className: "flex w-full items-center justify-center",
        "data-sentry-component": "Seperator",
        "data-sentry-source-file": "Seperator.tsx",
        children: [e.jsx("div", {
            className: "w-6 border-[0.25px]"
        }), e.jsx("div", {
            className: "px-2 text-xxs font-medium text-coal-light",
            children: t
        }), e.jsx("div", {
            className: "w-6 border-[0.25px]"
        })]
    }),
    ys = ({
        total: t,
        mileStonesAmount: s,
        previousTotal: a,
        isCountBased: n
    }) => {
        const [l, r] = c.useState(!1), o = n ? s.some(d => t === d && a < t) : s.some(d => t >= d && a <= d);
        return c.useEffect(() => {
            o && (r(!0), setTimeout(() => {
                r(!1)
            }, 4e3))
        }, [o]), e.jsx(e.Fragment, {
            children: l && e.jsx("div", {
                className: "fixed h-[100vh] w-[400px] flex justify-center overflow-hidden pointer-events-none z-50",
                children: Array.from({
                    length: 50
                }).map((d, x) => e.jsx("div", {
                    className: "absolute top-[-50px]",
                    style: {
                        left: `${x*2}%`
                    },
                    children: e.jsx(Lt, {
                        x: [-1, 1],
                        y: [0, .2],
                        delay: [500, 2e3],
                        duration: 2e3,
                        amount: 10,
                        fallDistance: "50vh"
                    })
                }, x))
            })
        })
    },
    bs = ({
        bannerPosition: t = X.HEADER
    }) => {
        const {
            state: {
                cartMetadata: s
            }
        } = $e(), {
            cartPermissions: a
        } = it(), n = c.useMemo(() => {
            var x, u, i;
            const r = s == null ? void 0 : s.ui_attributes,
                o = t === X.HEADER ? r == null ? void 0 : r.banner_config : r == null ? void 0 : r.bottom_banner_config;
            if (!o) return null;
            let d = o.find(b => b.type === "CART");
            return !d || !d.enabled ? null : {
                htmlString: (x = d.html_text_string) != null ? x : "",
                backgroundColor: (u = d.background_color) != null ? u : "black",
                textColor: (i = d.text_color) != null ? i : "white"
            }
        }, [t, s]), l = c.useCallback(r => {
            var o;
            return ct((o = r.substring(0, 7)) != null ? o : "#000000", .5)
        }, []);
        return e.jsxs("div", {
            className: "sticky top-0 z-20",
            "data-sentry-component": "CartBannerStrip",
            "data-sentry-source-file": "CartBannerStrip.tsx",
            children: [n && e.jsx("div", {
                className: `flex min-h-[33px] w-full items-center justify-center px-3 py-2 text-center text-sm ${t===X.HEADER?"rounded-b-xl":"rounded-t-xl"}`,
                style: {
                    backgroundColor: n.backgroundColor,
                    color: n.textColor,
                    boxShadow: `0px ${t===X.HEADER?"1":"-1"}px 5px 0px rgba(0, 0, 0, 0.2)`,
                    borderBottom: t === X.HEADER ? `1px solid ${l(n.backgroundColor)}` : "",
                    borderTop: t === X.FOOTER ? `1px solid ${l(n.backgroundColor)}` : ""
                },
                dangerouslySetInnerHTML: {
                    __html: n.htmlString
                }
            }), t === X.FOOTER && (a == null ? void 0 : a.checkoutBtnStatus) && e.jsxs("div", {
                className: "flex items-start gap-2 min-h-[33px] w-full justify-center px-3 py-2 text-center text-sm bg-coal-dark",
                children: [e.jsx("div", {
                    children: e.jsx(gt, {
                        className: "h-4 w-4 text-yellow-light"
                    })
                }), e.jsx("span", {
                    className: "text-white",
                    children: a == null ? void 0 : a.checkoutBtnStatus
                })]
            })]
        })
    },
    Ye = c.createContext({
        defaultValue: "",
        currentValue: "",
        setCurrentValue() {}
    }),
    qe = () => {
        const t = c.useContext(Ye);
        if (!t) throw new Error("useTabContext must be used within a Tabs Component");
        return t
    },
    js = c.memo(({
        children: t,
        defaultValue: s
    }) => {
        const [a, n] = c.useState(s);
        return e.jsx(Ye.Provider, {
            value: {
                currentValue: a,
                defaultValue: s,
                setCurrentValue: n
            },
            children: t
        })
    }),
    _s = c.memo(({
        children: t,
        value: s
    }) => {
        const {
            currentValue: a
        } = qe();
        return s !== a ? e.jsx(e.Fragment, {}) : e.jsx(e.Fragment, {
            children: t
        })
    }),
    ws = c.memo(l => {
        var r = l,
            {
                value: t,
                children: s,
                renderTrigger: a
            } = r,
            n = J(r, ["value", "children", "renderTrigger"]);
        const {
            setCurrentValue: o,
            currentValue: d
        } = qe(), x = d === t;
        return a ? a({
            value: t,
            isSelected: x,
            onClick: () => o(t)
        }) : e.jsx("button", K(W({
            onClick: () => o(t)
        }, n), {
            children: s
        }))
    }),
    Ns = c.memo(a => {
        var n = a,
            {
                children: t
            } = n,
            s = J(n, ["children"]);
        return e.jsx("div", K(W({}, s), {
            children: t
        }))
    }),
    vs = () => e.jsxs("div", {
        className: "border-base px-3 py-4 bg-white space-y-2",
        "data-sentry-component": "UpsellSkeleton",
        "data-sentry-source-file": "UpsellSkeleton.tsx",
        children: [e.jsx("div", {
            className: "skeleton-loader h-[16px] rounded-md w-2/5"
        }), e.jsx("div", {
            className: "skeleton-loader h-[14px] rounded-md w-4/5"
        }), e.jsxs("div", {
            className: "flex flex-row gap-2 mt-2",
            children: [e.jsxs("div", {
                className: "border-base rounded-md h-[100px] w-[100px] px-3 py-4 space-y-2",
                children: [e.jsx("div", {
                    className: "skeleton-loader h-[16px] rounded-md w-2/5"
                }), e.jsx("div", {
                    className: "skeleton-loader h-[14px] rounded-md w-full"
                })]
            }), e.jsxs("div", {
                className: "border-base rounded-md h-[100px] w-[100px] px-2 py-3 space-y-2",
                children: [e.jsx("div", {
                    className: "skeleton-loader h-[16px] rounded-md w-2/5"
                }), e.jsx("div", {
                    className: "skeleton-loader h-[14px] rounded-md w-full"
                })]
            })]
        })]
    }),
    ks = ({
        content: t,
        isOpen: s = !1,
        closePopup: a,
        height: n,
        width: l,
        duration: r = 2e3
    }) => (c.useEffect(() => {
        s && setTimeout(() => {
            a()
        }, r)
    }, [s]), e.jsx(e.Fragment, {
        children: e.jsx(H, {
            appear: !0,
            show: s,
            as: c.Fragment,
            "data-sentry-element": "Transition",
            "data-sentry-source-file": "GenricPopup.tsx",
            children: e.jsxs(G, {
                as: "div",
                className: "fixed inset-0 z-40 overflow-y-auto",
                onClose: a,
                "data-sentry-element": "Dialog",
                "data-sentry-source-file": "GenricPopup.tsx",
                children: [e.jsx(G.Overlay, {
                    className: "fixed inset-0 bg-black opacity-40",
                    "data-sentry-element": "unknown",
                    "data-sentry-source-file": "GenricPopup.tsx"
                }), e.jsxs("div", {
                    className: "min-h-screen px-4 text-center",
                    children: [e.jsx(H.Child, {
                        as: c.Fragment,
                        enter: "ease-out duration-300",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "ease-in duration-300",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        "data-sentry-element": "unknown",
                        "data-sentry-source-file": "GenricPopup.tsx",
                        children: e.jsx(G.Overlay, {
                            className: "fixed inset-0",
                            "data-sentry-element": "unknown",
                            "data-sentry-source-file": "GenricPopup.tsx"
                        })
                    }), e.jsx("span", {
                        className: "inline-block h-screen align-middle",
                        "aria-hidden": "true",
                        children: "​"
                    }), e.jsx(H.Child, {
                        as: c.Fragment,
                        enter: "ease-out duration-300",
                        enterFrom: "opacity-0 scale-95",
                        enterTo: "opacity-100 scale-100",
                        leave: "ease-in duration-300",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-95",
                        "data-sentry-element": "unknown",
                        "data-sentry-source-file": "GenricPopup.tsx",
                        children: e.jsx("div", {
                            className: `inline-block transform overflow-auto rounded-lg bg-white p-6 align-middle shadow-xl transition-all ${n} ${l}`,
                            children: t
                        })
                    })]
                })]
            })
        })
    })),
    Ss = oe.memo(({
        bannerType: t
    }) => {
        var y;
        const {
            state: {
                checkoutView: s
            }
        } = V(), {
            state: {
                checkoutMetadata: a,
                attributes: n
            }
        } = $e(), {
            state: {
                isAuthenticated: l
            }
        } = be(), [r, o] = c.useState(!0), [d, x] = c.useState(""), [u, i] = c.useState(""), [b, m] = c.useState("");
        c.useEffect(() => {
            a && p()
        }, [a, s]);
        const p = () => {
            var F, I, R, N, B;
            let f = "",
                g = "",
                _ = "",
                S = !1,
                C = t;
            t || (n.is_one_page_checkout ? C = "PAYMENTS" : C = s === "NA" ? "ORDER_SUMMARY" : s), s === "ADDRESS_LIST" && (C = "ORDER_SUMMARY"), l || (C = "AUTH");
            let v = (F = a == null ? void 0 : a.ui_attributes) == null ? void 0 : F.banner_config.find($ => $.type === C);
            v && (f = (I = v == null ? void 0 : v.html_text_string) != null ? I : "", g = `${(R=v==null?void 0:v.background_color)!=null?R:"black"}`, _ = `${(N=v==null?void 0:v.text_color)!=null?N:"white"}`, S = (B = v == null ? void 0 : v.enabled) != null ? B : !1), x(f), i(g), m(_), o(S)
        };
        return c.useEffect(() => {
            var f, g, _, S;
            (g = (f = document == null ? void 0 : document.documentElement) == null ? void 0 : f.style) == null || g.setProperty("--flo-bannerstrip-bg-color", `${u}`), (S = (_ = document == null ? void 0 : document.documentElement) == null ? void 0 : _.style) == null || S.setProperty("--flo-bannerstrip-txt-color", `${b}`)
        }, [u, b]), !r || !((y = a == null ? void 0 : a.ui_attributes) != null && y.banner_config) ? e.jsx(e.Fragment, {}) : e.jsx("div", {
            className: "bannerStripClass sticky top-0 z-20 flex  min-h-[1.875rem]  w-full items-center justify-center px-3 py-2 text-center text-sm",
            dangerouslySetInnerHTML: {
                __html: d
            }
        })
    }),
    Ts = ({
        isOpen: t,
        closePopup: s,
        closeCheckout: a
    }) => {
        const {
            t: n
        } = z(), {
            state: {
                checkoutId: l,
                exitSurveyOptions: r
            }
        } = V(), {
            sendAnalyticsEvent: o
        } = ae(), [d, x] = c.useState(), [u, i] = c.useState(), [b, m] = c.useState(!1);
        c.useEffect(() => {
            t && o({
                eventName: D.FLO_SURVEY_FORM_LOADED,
                eventType: "load"
            })
        }, [t]);
        const p = () => Q(void 0, null, function*() {
                if (d === void 0) {
                    Z(n("select_reason"));
                    return
                }
                m(!0);
                const f = {
                    rank: d + 1,
                    drop_off_reason: r[d].optionId,
                    drop_off_answer: d === r.length - 1 ? u : r[d].optionLabel
                };
                try {
                    yield dt(f, l), o({
                        eventName: D.FLO_SURVEY_FORM_ANSWERED,
                        eventType: "click"
                    })
                } catch (g) {
                    console.error(g)
                } finally {
                    m(!1), a()
                }
            }),
            y = () => {
                o({
                    eventName: D.FLO_SURVEY_FORM_SKIPPED,
                    eventType: "click"
                }), a()
            };
        return e.jsx(e.Fragment, {
            children: e.jsxs(pe, {
                isOpen: t,
                setIsOpen: () => s(),
                translateAxis: "y",
                customClass: `overflow-scroll md:!top-auto md:absolute h-full rounded-t-2xl ${d===r.length-1?"max-h-[80vh]":"max-h-[72vh]"}`,
                dialogOverlay: !0,
                modalType: "EXIT_SURVEY",
                "data-sentry-element": "GenericDialog",
                "data-sentry-source-file": "SurveyPopUp.tsx",
                children: [e.jsx(ze, {
                    "data-sentry-element": "DialogHeader",
                    "data-sentry-source-file": "SurveyPopUp.tsx",
                    children: e.jsxs("div", {
                        className: "flex h-full w-full flex-row items-center justify-between",
                        children: [e.jsxs("div", {
                            className: "flex flex-row items-center justify-start gap-2",
                            children: [e.jsx(yt, {
                                className: "h-5 w-5 cursor-pointer",
                                onClick: s,
                                "data-sentry-element": "ArrowLeft",
                                "data-sentry-source-file": "SurveyPopUp.tsx"
                            }), e.jsxs("h1", {
                                className: "text-base font-medium",
                                children: [" ", n("why_cancel_question"), " "]
                            })]
                        }), e.jsx("button", {
                            className: "text-carbon text-sm font-medium",
                            onClick: y,
                            children: n("skip")
                        })]
                    })
                }), e.jsx(ge, {
                    "data-sentry-element": "DialogBody",
                    "data-sentry-source-file": "SurveyPopUp.tsx",
                    children: e.jsx("ul", {
                        className: "flex flex-col gap-2 px-3",
                        children: r.map((f, g) => f.optionId === "others" ? e.jsxs("li", {
                            className: `border-1 cursor-pointer rounded-xl border border-gray-light bg-white ${d===g?"border-transparent shadow-[0_0_10px_rgba(0,0,0,0.1)] ring-[2px] ring-primary-dark  hover:ring-primary-dark":"border-gray-light hover:ring-gray-light"}`,
                            onClick: () => x(g),
                            children: [e.jsxs("p", {
                                className: "p-3 text-coal-dark",
                                children: [f.optionLabel, " ", d === g && " (Type Below)"]
                            }), d === g && e.jsx("div", {
                                className: "border-t border-gray-light p-3",
                                children: e.jsx("input", {
                                    type: "text",
                                    placeholder: "Type your response",
                                    value: u,
                                    onChange: _ => i(_.target.value),
                                    className: "w-full outline-none"
                                })
                            })]
                        }, f.optionId) : e.jsx("li", {
                            className: `border-1 cursor-pointer rounded-xl border border-gray-light bg-white p-3 ${d===g?"border-transparent shadow-[0_0_10px_rgba(0,0,0,0.1)] ring-[2px] ring-primary-dark  hover:ring-primary-dark":"border-gray-light hover:ring-gray-light"}`,
                            onClick: () => x(g),
                            children: e.jsx("p", {
                                className: "text-coal-dark",
                                children: f.optionLabel
                            })
                        }, f.optionId))
                    })
                }), e.jsx(ye, {
                    "data-sentry-element": "DialogFooter",
                    "data-sentry-source-file": "SurveyPopUp.tsx",
                    children: e.jsx(Ve, {
                        buttonText: n("submit"),
                        id: "flo_survey_submit",
                        onClick: p,
                        height: "h-14",
                        isCheckout: !1,
                        "data-sentry-element": "PrimaryButton",
                        "data-sentry-source-file": "SurveyPopUp.tsx"
                    })
                }), b && e.jsx(Ne, {})]
            })
        })
    },
    Cs = ({
        label: t,
        placeholder: s,
        id: a,
        name: n,
        autoComplete: l,
        value: r = "",
        required: o = !1,
        onChange: d,
        customClass: x,
        customContainerClass: u,
        error: i = {
            status: !1,
            message: "",
            showAlert: !0
        },
        disabled: b = !1,
        options: m = [],
        optionKey: p = "key",
        optionValue: y = "value",
        onBlur: f,
        onFocus: g
    }) => e.jsxs("div", {
        id: `flo-field-${a}`,
        className: `flex w-full flex-col ${u}`,
        "data-sentry-component": "DropDown",
        "data-sentry-source-file": "DropDown.tsx",
        children: [!!t && e.jsx("label", {
            htmlFor: a,
            className: `${o?"required-field":""} mb-0.5  text-xxs uppercase text-gray-dark`,
            children: t
        }), e.jsxs("div", {
            className: "relative flex h-14 w-full flex-col",
            children: [e.jsx("div", {
                children: e.jsx("select", {
                    id: a,
                    name: n,
                    className: `placeholder-sm absolute inset-0 z-10 h-14 w-full appearance-none truncate rounded-xl border !bg-transparent px-3 pr-10 text-base text-charcoal placeholder-transparent transition-none focus:border-[1px] focus:border-primary-dark focus:px-[12px] focus:outline-none focus:ring-[2px] focus:ring-primary-light ${x} peer text-sm ${i.status?" border-ouch":""} ${b?"border !border-gray-light bg-gray-lighter text-gray-dark":""} ${r!=null&&r.length&&!(i!=null&&i.status)?"border-[#D5E7DB]":""}`,
                    autoComplete: l,
                    "aria-label": s,
                    onChange: d,
                    onFocus: g,
                    onBlur: f,
                    value: r,
                    disabled: b,
                    children: m.map(_ => e.jsx("option", {
                        value: _[p],
                        children: _[y]
                    }, _[p]))
                })
            }), e.jsx(_e, {
                className: "pointer-events-none absolute right-4 top-5 h-4 w-4 text-coal-dark",
                "data-sentry-element": "ChevronDown",
                "data-sentry-source-file": "DropDown.tsx"
            })]
        }), (i == null ? void 0 : i.status) && !!(i != null && i.message) && e.jsxs("div", {
            className: "mt-1 flex items-center gap-1 ",
            children: [e.jsx(we, {
                className: "-mt-[1px] h-3 w-3 shrink-0 text-ouch"
            }), e.jsx("label", {
                htmlFor: a,
                className: "bg-transparent text-xs font-normal text-ouch transition-all peer-focus:hidden",
                children: i.message
            })]
        })]
    }),
    Ps = ({
        label: t,
        placeholder: s,
        id: a,
        name: n,
        autoComplete: l,
        value: r = "",
        required: o = !1,
        maxLength: d = 200,
        onChange: x,
        onBlur: u,
        onFocus: i,
        iconComponent: b,
        autoCapitalize: m = "off",
        customClass: p,
        error: y = {
            status: !1,
            message: ""
        },
        disabled: f = !1,
        tabIndex: g = 0,
        filled: _ = !1,
        autoFocus: S = !1,
        showSuccessIcon: C = !1
    }) => {
        const v = c.useRef(null),
            F = 56;
        c.useEffect(() => {
            I()
        }, [r]);
        const I = () => {
            if (v.current) {
                if (!r) {
                    v.current.style.height = `${F}px`;
                    return
                }
                v.current.style.minHeight = `${F}px`, v.current.style.height = v.current.scrollHeight + "px"
            }
        };
        return e.jsxs("div", {
            id: `flo-field-${a}`,
            className: `w-full ${y.status} flex flex-col`,
            "data-sentry-component": "TextArea",
            "data-sentry-source-file": "TextArea.tsx",
            children: [!!t && e.jsx("label", {
                htmlFor: a,
                className: `${o?"required-field":""} mb-0.5  text-xxs uppercase text-gray-dark`,
                children: t
            }), e.jsxs("div", {
                className: "relative flex",
                children: [C && e.jsx("div", {
                    className: "absolute right-3 top-5",
                    children: e.jsx("img", {
                        src: Ge,
                        className: "h-4 w-4"
                    })
                }), e.jsx("textarea", {
                    id: a,
                    name: n,
                    placeholder: s,
                    autoFocus: S,
                    className: `transition-inputLabel peer w-full resize-none appearance-none overflow-hidden break-words break-all rounded-xl border px-4 py-4 pr-8 font-normal leading-6 text-charcoal placeholder-transparent focus:border-[1px] focus:border-primary-dark focus:outline-none focus:ring-[2px] focus:ring-primary-light  
          ${y.status?" border-ouch":" border-gray-light"} 
          ${f?"border !border-gray-light bg-gray-lighter text-gray-dark":""} 
          ${r!=null&&r.length&&!(y!=null&&y.status)?"border-[#D5E7DB]":""} ${p}`,
                    autoComplete: l,
                    "aria-label": s,
                    maxLength: d,
                    onChange: R => {
                        x && x(R)
                    },
                    onBlur: u,
                    onFocus: i,
                    value: r,
                    autoCapitalize: m,
                    disabled: f,
                    tabIndex: g,
                    "data-gramm": "false",
                    "data-gramm_editor": "false",
                    "data-enable-grammarly": "false",
                    rows: 1,
                    ref: v
                })]
            }), (y == null ? void 0 : y.status) && y.message && e.jsxs("div", {
                className: "mt-1 flex items-center gap-1 ",
                children: [e.jsx(we, {
                    className: "-mt-[1px] h-3 w-3 shrink-0 text-ouch"
                }), e.jsx("label", {
                    htmlFor: a,
                    className: "bg-transparent text-xs font-normal text-ouch transition-all peer-focus:hidden",
                    children: y.message
                })]
            }), b]
        })
    };
var Wt = (t => (t.Truck = "truck", t.WindTruck = "windTruck", t.Zap = "zap", t))(Wt || {});
const Es = ({
        icon: t,
        color: s
    }) => {
        switch (t) {
            case "truck":
                return e.jsx(me, {
                    size: 16,
                    "aria-label": "Truck Icon",
                    color: s
                });
            case "windTruck":
                return e.jsxs("div", {
                    className: "flex",
                    "aria-label": "Wind and Truck Icons",
                    children: [e.jsx(jt, {
                        size: 16,
                        color: s
                    }), e.jsx(me, {
                        size: 16,
                        color: s
                    })]
                });
            case "zap":
                return e.jsx(bt, {
                    size: 16,
                    "aria-label": "Zap Icon",
                    color: s
                });
            default:
                return e.jsx(me, {
                    size: 16,
                    "aria-label": "Truck Icon",
                    color: s
                })
        }
    },
    Fs = ({
        showGyftrLoading: t = !1
    }) => {
        const {
            t: s
        } = z();
        return e.jsxs(e.Fragment, {
            children: [e.jsxs("div", {
                className: "border-base px-3 py-4 bg-white space-y-2",
                children: [e.jsx("div", {
                    className: "skeleton-loader h-[16px] rounded-md w-2/5"
                }), e.jsx("div", {
                    className: "skeleton-loader h-[16px] rounded-md w-full"
                })]
            }), e.jsx("div", {
                className: "flex w-full flex-row  items-center justify-between p-2 text-xs mt-3",
                children: e.jsx("h2", {
                    className: "text-sm font-medium text-coal-light",
                    children: s("all_payment_methods")
                })
            }), e.jsx("div", {
                className: "space-y-4",
                children: new Array(4).fill(null).map((a, n) => e.jsx(Kt, {}, n))
            })]
        })
    },
    Kt = () => e.jsxs("div", {
        className: "bg-white flex p-3 gap-2 rounded-md border-base",
        "data-sentry-component": "PaymentBlockSkeleton",
        "data-sentry-source-file": "PaymentSkeleton.tsx",
        children: [e.jsx("div", {
            className: "skeleton-loader h-[42px] w-[42px] rounded-md"
        }), e.jsxs("div", {
            className: "flex flex-col gap-2 flex-1",
            children: [e.jsx("div", {
                className: "skeleton-loader h-[16px] w-2/5 rounded-md"
            }), e.jsx("div", {
                className: "skeleton-loader h-[16px] w-full rounded-md"
            })]
        })]
    }),
    Is = ({
        title: t,
        customClass: s,
        align: a = "left"
    }) => e.jsxs("div", {
        className: `flex items-center ${s!=null?s:""} ${a==="left"?"justify-start":a==="right"?"justify-end":"justify-center"}`,
        "data-sentry-component": "SectionTitle",
        "data-sentry-source-file": "SectionTitle.tsx",
        children: [e.jsx("div", {
            className: `h-[1px]  w-3.5 bg-gray-light ${a==="right"?"flex-grow":""}`
        }), e.jsx("p", {
            className: "mx-2 flex-grow-0",
            children: t.toUpperCase()
        }), e.jsx("div", {
            className: `h-[1px] w-3.5 bg-gray-light ${a==="left"?"flex-grow":""}`
        })]
    }),
    Bs = ({
        children: t,
        className: s
    }) => e.jsx("div", {
        className: `${s} inline-flex w-fit items-center rounded-lg bg-gray-light p-1 text-xs font-medium text-coal-dark transition-colors`,
        "data-sentry-component": "Tag",
        "data-sentry-source-file": "Tag.tsx",
        children: t
    }),
    As = ({
        label: t,
        className: s = ""
    }) => e.jsxs("div", {
        className: "relative w-full",
        "data-sentry-component": "DividerWithLabel",
        "data-sentry-source-file": "DividerWithLabel.tsx",
        children: [e.jsx("div", {
            className: "absolute inset-0 flex items-center",
            "aria-hidden": "true",
            children: e.jsx("div", {
                className: "w-full border-t border-gray-light"
            })
        }), e.jsx("div", {
            className: "relative flex justify-start",
            children: e.jsx("span", {
                className: ` ${s} ml-4 bg-gray-lightest px-2 text-gray-dark`,
                children: t
            })
        })]
    }),
    Ls = ({}) => e.jsxs("div", {
        className: "ripple-loader",
        "data-sentry-component": "RipplePulse",
        "data-sentry-source-file": "RipplePulse.tsx",
        children: [e.jsx("span", {}), e.jsx("span", {})]
    }),
    Ds = () => {
        var a, n;
        const {
            state: {
                merchant: t
            }
        } = je(), {
            sendAnalyticsEvent: s
        } = ae();
        return (a = t == null ? void 0 : t.trustBadgeConfig) != null && a.showBadges ? e.jsx("div", {
            className: "!m-0 flex w-full items-center justify-center gap-4 py-3",
            "data-sentry-component": "TrustBadges",
            "data-sentry-source-file": "TrustBadges.tsx",
            children: (n = t == null ? void 0 : t.trustBadgeConfig) == null ? void 0 : n.badges.map((l, r) => e.jsxs("div", {
                className: "justify-top flex h-20 w-20 flex-col items-center gap-[5.5px]",
                onClick: () => {
                    s({
                        eventName: D.FLO_TRUST_BADGE_CLICKED,
                        eventType: "click",
                        metaData: {
                            badgesData: {
                                badge: l.label
                            }
                        }
                    })
                },
                children: [e.jsx("div", {
                    children: e.jsx("img", {
                        src: ut[l == null ? void 0 : l.label],
                        alt: l == null ? void 0 : l.label
                    })
                }), e.jsx("div", {
                    className: "w-full text-center text-xxs text-gray-dark",
                    children: l.text
                })]
            }))
        }) : e.jsx(e.Fragment, {})
    },
    Rs = ({
        showSecuredLogo: t = !0
    }) => {
        const {
            t: s
        } = z(), {
            sendAnalyticsEvent: a
        } = ae();
        return e.jsxs("div", {
            className: "flex flex-col items-center gap-3",
            "data-sentry-component": "TermsConditions",
            "data-sentry-source-file": "TermsConditions.tsx",
            children: [e.jsx(e.Fragment, {
                children: e.jsxs("p", {
                    className: "pt-1 text-[10px] font-normal text-coal-light",
                    children: [s("by_proceeding_text"), " ", e.jsx("a", {
                        href: "https://shopflo.com/terms-conditions?utm_source=shopflo-checkout&utm_medium=shopflo-checkout&utm_campaign=shopflo-checkout",
                        className: "font-bold",
                        target: "_blank",
                        rel: "noreferrer",
                        onClick: () => {
                            a({
                                eventName: D.FLO_TERMS_AND_CONDITIONS,
                                eventType: "click"
                            })
                        },
                        children: s("terms_and_conditions")
                    }), " ", s("and"), " ", e.jsx("a", {
                        href: "https://shopflo.com/privacy-policy?utm_source=shopflo-checkout&utm_medium=shopflo-checkout&utm_campaign=shopflo-checkout",
                        className: "font-bold",
                        target: "_blank",
                        rel: "noreferrer",
                        onClick: () => {
                            a({
                                eventName: D.FLO_PRIVACY_POLICY,
                                eventType: "click"
                            })
                        },
                        children: s("privacy_policy")
                    })]
                })
            }), !!t && e.jsx("img", {
                src: Bt,
                alt: "shopflo-logo",
                className: "h-3.5"
            })]
        })
    };
export {
    us as A, Ts as B, ms as C, ze as D, js as E, Ns as F, he as G, ws as H, xs as I, _s as J, is as L, os as M, Ne as O, Ve as P, Ls as R, gs as S, Ds as T, vs as U, ge as a, Rs as b, pe as c, q as d, cs as e, ds as f, fs as g, ps as h, ye as i, hs as j, Mt as k, Ss as l, Cs as m, Ps as n, Wt as o, Es as p, Is as q, Bs as r, Ut as s, As as t, Fs as u, ns as v, ls as w, ys as x, bs as y, ks as z
};
//# sourceMappingURL=common-components-DhcySBak.js.map