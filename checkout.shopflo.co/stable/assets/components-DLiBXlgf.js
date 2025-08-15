const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/assests-8-RYiWy6.js", "assets/i18next-BW2i0xjm.js", "assets/vendor-DWBJvUkq.js", "assets/sentry-1CVSdSoY.js", "assets/react-core-C02-NrKc.js", "assets/index-BpOda8Pq.js", "assets/common-components-DhcySBak.js", "assets/lib-D7WRmHWF.js", "assets/react-phone-input-BECxSqfY.js", "assets/vendor-styling-BudEvoL3.js", "assets/react-phone-input-BqJ5I0DP.css", "assets/react-router-dom-C_20INan.js", "assets/js-cookie-CQriODbm.js", "assets/axios-b0nqz2WE.js", "assets/bowser-BIXXHWb5.js", "assets/ui-BLvhcVBj.js", "assets/react-ui-CLI46-or.js", "assets/ui-caN0dIsm.css", "assets/react-i18next-_5H4tnk_.js", "assets/react-hot-toast-m96sdbVs.js", "assets/jwt-decode-Dpc-sDrx.js", "assets/nanoid-DGvJWMFP.js", "assets/headless-BLCsrzy4.js", "assets/checkout-components-CDs-GsFA.js", "assets/auth-components-5PgZSU3s.js", "assets/framer-wRdAwo6I.js", "assets/upsell-components-CqnOSKal.js", "assets/page-cart-DP1yjkIR.js", "assets/cart-components-CVEXMqvK.js", "assets/page-main-checkout-D3bPWflK.js", "assets/assests-D_r7UeVI.css", "assets/page-payment-status-BC3kxJK9.js", "assets/page-login-sso-BU8vkMM6.js", "assets/page-login-check-CC-1EXpG.js", "assets/page-ghost-Ck6akrrN.js", "assets/page-marketing-popup-B8A4Cew7.js", "assets/page-empty-cart-Do46F4BO.js", "assets/page-experiment-widget-BEunb07a.js", "assets/page-mock-checkout-DymUfAIm.js", "assets/page-wishlist-CvoIam5g.js"]))) => i.map(i => d[i]);
var Kn = Object.defineProperty,
    Qn = Object.defineProperties;
var Xn = Object.getOwnPropertyDescriptors;
var za = Object.getOwnPropertySymbols;
var Wn = Object.prototype.hasOwnProperty,
    Zn = Object.prototype.propertyIsEnumerable;
var Ka = (s, t, n) => t in s ? Kn(s, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : s[t] = n,
    P = (s, t) => {
        for (var n in t || (t = {})) Wn.call(t, n) && Ka(s, n, t[n]);
        if (za)
            for (var n of za(t)) Zn.call(t, n) && Ka(s, n, t[n]);
        return s
    },
    R = (s, t) => Qn(s, Xn(t));
var ee = (s, t, n) => new Promise((r, a) => {
    var o = m => {
            try {
                l(n.next(m))
            } catch (h) {
                a(h)
            }
        },
        x = m => {
            try {
                l(n.throw(m))
            } catch (h) {
                a(h)
            }
        },
        l = m => m.done ? r(m.value) : Promise.resolve(m.value).then(o, x);
    l((n = n.apply(s, t)).next())
});
import {
    R as Ie,
    j as e,
    r as d,
    b as Jn,
    m as Be,
    _ as er,
    u as us,
    c as xn,
    d as tr,
    e as Qa,
    f as sr
} from "./react-core-C02-NrKc.js";
import {
    u as te,
    f as ge,
    am as is,
    J as qt,
    C as Ee,
    as as Vt,
    X as Re,
    a8 as $s,
    a9 as Ps,
    at as ma,
    c as Fe,
    aa as Ys,
    $ as cs,
    w as De,
    a4 as wt,
    au as ds,
    a2 as vt,
    b as Ye,
    e as mt,
    av as Hs,
    T as Js,
    aw as ar,
    a as qe,
    p as jt,
    q as lt,
    d as q,
    R as fn,
    S as bs,
    ai as ss,
    L as Jt,
    n as ms,
    ax as Ss,
    ay as Et,
    az as nr,
    A as Ke,
    m as ot,
    aA as rr,
    k as or,
    aB as hn,
    aC as xa,
    aD as pn,
    E as Kt,
    aE as lr,
    a0 as vs,
    aF as ea,
    aG as ir,
    af as dt,
    ag as gt,
    g as _n,
    aH as cr,
    h as as,
    aI as dr,
    aJ as ur,
    F as be,
    x as Vs,
    y as ta,
    z as gn,
    s as yn,
    aK as Nn,
    aL as mr,
    ah as jn,
    ap as xr,
    aM as fr,
    aN as sa,
    aO as hr,
    aP as pr,
    aQ as bn,
    aR as _r,
    aS as os,
    aT as Ut,
    aU as gr,
    al as ls,
    aV as Ls,
    aW as En,
    ab as Cn,
    Z as xs,
    aX as yr,
    aY as wn,
    aZ as Nr,
    a_ as jr,
    a$ as br,
    b0 as Er,
    b1 as Cr,
    b2 as wr,
    M as vr,
    b3 as Sr,
    b4 as kr,
    b5 as Tr,
    i as qs,
    b6 as Bs,
    o as vn,
    j as fa,
    l as Ar,
    v as Or,
    r as Ir,
    t as Pr,
    K as Lr,
    O as Br,
    b7 as Rr,
    b8 as Fr,
    b9 as Xa,
    aj as Wa,
    ba as Dr,
    V as Ur,
    D as Mr,
    U as Gr
} from "./lib-D7WRmHWF.js";
import "./sentry-1CVSdSoY.js";
import {
    C as ha,
    M as pa,
    d as es,
    X as st,
    m as $r,
    E as fs,
    g as Rs,
    c as Ct,
    H as aa,
    A as Is,
    i as Sn,
    n as Yr,
    T as na,
    j as kn,
    o as Hr,
    p as Vr,
    U as qr,
    B as zr,
    q as _a,
    I as Tn,
    r as An,
    s as On,
    t as In,
    F as Kr,
    k as Qr,
    G as Pn,
    e as Xr,
    a as Wr,
    b as Zr
} from "./react-ui-CLI46-or.js";
import {
    j as ra,
    k as Jr,
    l as Za,
    P as Ln,
    R as eo,
    E as to,
    b as Ja,
    d as Bn,
    n as so,
    p as ao,
    o as no,
    q as ro,
    x as oo,
    y as Rn,
    B as lo,
    G as oa,
    z as io,
    N as co,
    A as uo,
    I as mo,
    T as xo,
    i as ga,
    W as fo
} from "./assests-8-RYiWy6.js";
import {
    d as tt,
    j as ho,
    D as Ze,
    a as Je,
    I as Qe,
    i as hs,
    P as ut,
    c as Pe,
    O as St,
    k as Fn,
    l as Dn,
    m as la,
    n as Fs,
    G as ts,
    o as Es,
    p as po,
    q as _o,
    r as Cs,
    s as go,
    t as yo,
    R as No,
    u as Ds,
    M as ya,
    U as en,
    b as Un,
    L as tn
} from "./common-components-DhcySBak.js";
import {
    A as Qs,
    _ as Qt
} from "./headless-BLCsrzy4.js";
import {
    S as Na,
    E as jo,
    L as bo,
    a as sn,
    R as an,
    C as Eo,
    O as Co,
    b as wo
} from "./checkout-components-CDs-GsFA.js";
import {
    a as vo,
    O as Mn,
    M as So,
    L as ko
} from "./auth-components-5PgZSU3s.js";
import {
    u as Mt
} from "./react-router-dom-C_20INan.js";
import {
    _ as kt
} from "./index-BpOda8Pq.js";
import {
    P as To,
    b as Ao,
    c as Oo,
    d as Io,
    e as Po,
    f as Lo
} from "./ui-BLvhcVBj.js";
import {
    m as zs,
    A as Gn,
    u as ja
} from "./framer-wRdAwo6I.js";
import {
    P as ia,
    i as Bo,
    a as Ro
} from "./react-phone-input-BECxSqfY.js";
import {
    a as Fo
} from "./js-cookie-CQriODbm.js";
import {
    i as js
} from "./i18next-BW2i0xjm.js";
import {
    U as nn
} from "./upsell-components-CqnOSKal.js";
import {
    C as Do
} from "./page-cart-DP1yjkIR.js";
import {
    M as Uo
} from "./page-main-checkout-D3bPWflK.js";
(function() {
    try {
        var s = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {},
            t = new s.Error().stack;
        t && (s._sentryDebugIds = s._sentryDebugIds || {}, s._sentryDebugIds[t] = "495c2b6a-f673-4a9e-9006-e227c2e9f8a8", s._sentryDebugIdIdentifier = "sentry-dbid-495c2b6a-f673-4a9e-9006-e227c2e9f8a8")
    } catch (n) {}
})();
const _e = ({
        children: s,
        loading: t,
        size: n = "md"
    }) => {
        const [r, a] = d.useState("auto"), o = d.useRef(null);
        d.useEffect(() => {
            o.current && a(o.current.offsetHeight)
        }, [t]);
        const x = d.Children.toArray(s).find(m => Ie.isValidElement(m) && m.type === ba);
        let l = d.Children.toArray(s).find(m => Ie.isValidElement(m) && m.type === Us);
        return l || (l = e.jsx(Us, {
            children: e.jsxs("div", {
                className: "border-base px-3 py-4 bg-white space-y-2",
                children: [n === "md" && e.jsx("div", {
                    className: "skeleton-loader h-4 rounded-md w-2/5"
                }), e.jsx("div", {
                    className: "skeleton-loader h-4 rounded-md w-full"
                })]
            })
        })), e.jsx(Gn, {
            mode: "wait",
            custom: r,
            "data-sentry-element": "AnimatePresence",
            "data-sentry-component": "AnimateLoading",
            "data-sentry-source-file": "AnimateLoading.tsx",
            children: t ? Ie.cloneElement(l, {
                ref: o
            }) : e.jsx(e.Fragment, {
                children: x
            })
        })
    },
    Us = Ie.forwardRef(({
        children: s,
        motionProps: t = {}
    }, n) => e.jsx(zs.div, R(P({
        ref: n,
        initial: {
            opacity: 1,
            height: "auto"
        },
        exit: {
            opacity: 0,
            height: "auto"
        },
        transition: {
            duration: .4
        }
    }, t), {
        children: s
    }), "loading-skeleton"));
Us.displayName = "AnimateLoadingSkeleton";
const ba = ({
    children: s,
    motionProps: t = {}
}) => {
    const n = ja();
    return e.jsx(zs.div, R(P({
        initial: {
            opacity: 0,
            height: n
        },
        animate: {
            opacity: 1,
            height: "auto"
        },
        transition: {
            duration: .4
        }
    }, t), {
        "data-sentry-element": "unknown",
        "data-sentry-component": "Content",
        "data-sentry-source-file": "AnimateLoading.tsx",
        children: s
    }), "loaded-content")
};
ba.displayName = "AnimateLoadingContent";
_e.Skeleton = Us;
_e.Content = ba;
const pi = Ie.memo(({
        isApplicable: s,
        couponTitle: t,
        couponHeader: n,
        couponDescription: r,
        couponLongDescription: a,
        unApplicabilityReason: o
    }) => {
        const {
            t: x
        } = te(), [l, m] = d.useState(!1), h = !s;
        return e.jsxs("div", {
            className: "group relative box-border flex h-full min-h-[10rem] w-full flex-col items-start overflow-hidden rounded-2xl border-[1px] border-gray-light",
            children: [e.jsxs("div", {
                className: `relative flex w-full flex-row items-center justify-between overflow-hidden rounded-t-lg bg-gradient-to-b ${h?"from-gray-lighter to-white":"from-primary-lighter to-white"}`,
                children: [e.jsxs("div", {
                    className: "flex w-full flex-row items-center py-2 pl-3 pr-2",
                    children: [e.jsx("div", {
                        className: "flex h-8 w-8 items-center justify-start",
                        children: e.jsx(Jn, {
                            className: `mr-2 h-6 w-6 ${h?"stroke-gray-dark":"stroke-primary-dark"} text-coal-light`
                        })
                    }), e.jsx("h3", {
                        className: "truncate pr-2 text-base font-semibold text-coal-dark",
                        children: t
                    })]
                }), e.jsx("div", {
                    className: `absolute -bottom-1 w-full border-b-[6px] border-dashed border-primary-lighter ${h?"border-gray-lighter":"border-primary-lighter border-opacity-20"}`
                })]
            }), e.jsxs("div", {
                className: "group relative flex min-h-[6.5rem] w-full flex-col items-start justify-between space-y-2 overflow-x-hidden p-3",
                children: [e.jsx("div", {
                    className: "flex flex-col",
                    children: e.jsxs("div", {
                        className: "flex flex-col space-y-1",
                        children: [e.jsx("h3", {
                            className: "overflow-x-hidden text-base font-semibold text-coal-dark",
                            children: n
                        }), e.jsx("p", {
                            className: "text-sm font-normal text-coal-light",
                            children: r
                        })]
                    })
                }), h && !!o && e.jsx("p", {
                    className: "text-xs font-medium text-ouch",
                    children: o
                }), l ? e.jsx("ul", {
                    className: "flex w-full flex-col space-y-1 rounded-lg bg-gray-lighter px-2 py-3",
                    children: a == null ? void 0 : a.map((c, u) => e.jsx("li", {
                        className: "ml-4 list-disc text-xs font-normal text-coal-light",
                        children: e.jsx("p", {
                            children: c
                        })
                    }, `Callout-Card-${u}`))
                }) : e.jsxs("button", {
                    onClick: () => m(!0),
                    className: "inline-flex w-fit items-center justify-center space-x-2 text-sm font-medium text-coal-dark outline-none",
                    children: [x("show_details"), e.jsx(ha, {
                        className: "h-4 w-4"
                    })]
                })]
            })]
        })
    }),
    Mo = ({
        productVariant: s,
        groupIndex: t,
        productIndex: n,
        variantIndex: r
    }) => {
        var m;
        te();
        const {
            state: {
                discountedProductSelectorData: a
            },
            actions: {
                setDiscountedProductSelectorData: o
            }
        } = ge(), x = (a == null ? void 0 : a.items[t].selectedQuantity) === (a == null ? void 0 : a.items[t].quantity) || (s == null ? void 0 : s.inventoryPolicy) === "DENY" && (s == null ? void 0 : s.inventoryQuantity) <= (s == null ? void 0 : s.selectedQuantity), l = h => {
            var p, E, _;
            const c = (p = a.items) == null ? void 0 : p[t],
                u = (E = c == null ? void 0 : c.products) == null ? void 0 : E[n],
                C = (_ = u == null ? void 0 : u.variants) == null ? void 0 : _[r],
                y = [...u == null ? void 0 : u.variants];
            y[r] = R(P({}, C), {
                selectedQuantity: (C == null ? void 0 : C.selectedQuantity) + h
            });
            const g = [...c == null ? void 0 : c.products];
            g[n] = R(P({}, u), {
                variants: y
            });
            const i = [...a.items];
            i[t] = R(P({}, c), {
                products: g,
                selectedQuantity: (c == null ? void 0 : c.selectedQuantity) + h
            });
            const j = R(P({}, a), {
                totalSelectedItems: a.totalSelectedItems + h,
                items: i
            });
            o(j)
        };
        return e.jsx(e.Fragment, {
            children: e.jsx("li", {
                className: "relative flex max-h-36 min-w-[16rem] max-w-[16rem] bg-white snap-start flex-col gap-3 overflow-hidden rounded-xl border border-carbon-lighter p-2 select-none",
                children: e.jsxs("div", {
                    className: "flex flex-row gap-2",
                    children: [e.jsx("img", {
                        src: is(s != null && s.imageUrl ? s == null ? void 0 : s.imageUrl : ra, ".jpg", "_small"),
                        alt: "Cart Item",
                        className: "h-[4.875rem] w-[4.875rem] min-w-[4.875rem] rounded-lg border border-gray-light object-cover",
                        draggable: !1
                    }), e.jsxs("div", {
                        className: "flex flex-col w-full justify-between space-y-2",
                        children: [e.jsx("p", {
                            className: "mt-1 text-wrap text-xs font-medium text-coal-dark",
                            children: qt(s == null ? void 0 : s.name, 32)
                        }), e.jsxs("div", {
                            className: "flex w-full items-center justify-between",
                            children: [e.jsx("div", {
                                className: "pr-6",
                                children: e.jsx(tt, {
                                    total: (m = s == null ? void 0 : s.discountedPrice) != null ? m : 0,
                                    compareAt: s == null ? void 0 : s.currentPrice,
                                    orientation: "vertical",
                                    customCSS: "!text-sm",
                                    "data-sentry-element": "Price",
                                    "data-sentry-source-file": "DiscountedVariantCard.tsx"
                                })
                            }), s.selectedQuantity ? e.jsxs("div", {
                                className: "flex flex-row items-center justify-between space-x-1.5 rounded-md border-2 border-primary-dark px-2.5 py-1",
                                children: [e.jsx("button", {
                                    onClick: () => l(-1),
                                    children: e.jsx(pa, {
                                        className: "h-4 w-4"
                                    })
                                }), e.jsx("label", {
                                    className: "min-w-[1rem] text-center text-sm",
                                    children: s.selectedQuantity
                                }), e.jsx("button", {
                                    disabled: x,
                                    onClick: () => l(1),
                                    className: `${x?"text-coal-light":"text-coal-dark"}`,
                                    children: e.jsx(es, {
                                        className: "h-4 w-4"
                                    })
                                })]
                            }) : e.jsx("button", {
                                disabled: x,
                                className: "flex items-center justify-center space-x-1 rounded-lg border-2 border-primary-dark py-2 px-5 text-sm font-medium text-primary-dark disabled:text-opacity-50 disabled:cursor-not-allowed disabled:opacity-50",
                                onClick: () => l(1),
                                children: e.jsx(es, {
                                    size: 16
                                })
                            })]
                        })]
                    })]
                })
            }, "product-card-1")
        })
    },
    Go = ({
        key: s,
        selectedProduct: t,
        groupIndex: n,
        productIndex: r
    }) => {
        var h, c, u, C, y, g, i, j, p, E, _, A, N, b, f, w, L;
        te();
        const {
            state: {
                discountedProductSelectorData: a
            },
            actions: {
                setDiscountedProductSelectorData: o
            }
        } = ge(), x = ((h = t == null ? void 0 : t.variants) == null ? void 0 : h.length) > 1, l = (a == null ? void 0 : a.items[n].selectedQuantity) === (a == null ? void 0 : a.items[n].quantity) || ((u = (c = t == null ? void 0 : t.variants) == null ? void 0 : c[0]) == null ? void 0 : u.inventoryPolicy) === "DENY" && ((y = (C = t == null ? void 0 : t.variants) == null ? void 0 : C[0]) == null ? void 0 : y.inventoryQuantity) <= ((i = (g = t == null ? void 0 : t.variants) == null ? void 0 : g[0]) == null ? void 0 : i.selectedQuantity), m = (k, v) => {
            var V, oe, xe;
            const T = (V = a.items) == null ? void 0 : V[n],
                F = (oe = T == null ? void 0 : T.products) == null ? void 0 : oe[r],
                $ = (xe = F == null ? void 0 : F.variants) == null ? void 0 : xe[k],
                Q = [...F == null ? void 0 : F.variants];
            Q[k] = R(P({}, $), {
                selectedQuantity: ($ == null ? void 0 : $.selectedQuantity) + v
            });
            const Y = [...T == null ? void 0 : T.products];
            Y[r] = R(P({}, F), {
                variants: Q
            });
            const S = [...a.items];
            S[n] = R(P({}, T), {
                products: Y,
                selectedQuantity: (T == null ? void 0 : T.selectedQuantity) + v
            });
            const K = R(P({}, a), {
                totalSelectedItems: a.totalSelectedItems + v,
                items: S
            });
            o(K)
        };
        return e.jsxs("li", {
            className: "relative flex max-h-[9.75rem] w-full flex-col gap-3 overflow-hidden bg-gray-lightest rounded-xl border border-carbon-lighter p-2 select-none",
            "data-sentry-component": "DiscountedProductCard",
            "data-sentry-source-file": "DiscountedProductCard.tsx",
            children: [!x && e.jsxs("div", {
                className: "flex flex-row gap-2",
                children: [e.jsx("img", {
                    src: is(t != null && t.primaryImageUrl ? t.primaryImageUrl : ra, ".jpg", "_small"),
                    alt: "Cart Item",
                    className: "h-[4.875rem] w-[4.875rem] min-w-[4.875rem] rounded-lg border border-gray-light object-cover",
                    draggable: !1
                }), e.jsxs("div", {
                    className: "flex flex-col w-full space-y-2 justify-between",
                    children: [e.jsxs("div", {
                        className: "flex flex-col w-full space-y-2",
                        children: [e.jsx("p", {
                            className: "mt-1 text-wrap text-xs font-medium text-coal-dark",
                            children: qt(t.name, 32)
                        }), e.jsx("span", {
                            className: "text-sm font-medium text-coal-dark",
                            children: (j = t == null ? void 0 : t.variants[0]) == null ? void 0 : j.name
                        })]
                    }), e.jsxs("div", {
                        className: "flex w-full items-end justify-between",
                        children: [e.jsx("div", {
                            className: "pr-6",
                            children: e.jsx(tt, {
                                total: (E = (p = t == null ? void 0 : t.variants[0]) == null ? void 0 : p.discountedPrice) != null ? E : 0,
                                compareAt: (_ = t == null ? void 0 : t.variants[0]) == null ? void 0 : _.currentPrice,
                                orientation: "vertical",
                                customCSS: "!flex-row !items-center !space-x-1 !text-sm"
                            })
                        }), (N = (A = t == null ? void 0 : t.variants) == null ? void 0 : A[0]) != null && N.selectedQuantity ? e.jsxs("div", {
                            className: "flex flex-row items-center justify-between space-x-1.5 rounded-md border-2 border-primary-dark px-2.5 py-1.5",
                            children: [e.jsx("button", {
                                onClick: () => m(0, -1),
                                children: e.jsx(pa, {
                                    className: "h-4 w-4"
                                })
                            }), e.jsx("label", {
                                className: "min-w-[1rem] text-center text-sm",
                                children: (f = (b = t == null ? void 0 : t.variants) == null ? void 0 : b[0]) == null ? void 0 : f.selectedQuantity
                            }), e.jsx("button", {
                                disabled: l,
                                onClick: () => m(0, 1),
                                className: `${l?"text-coal-light":"text-coal-dark"}`,
                                children: e.jsx(es, {
                                    className: "h-4 w-4"
                                })
                            })]
                        }) : e.jsx("button", {
                            disabled: l,
                            className: "flex items-center justify-center space-x-1 rounded-lg border-2 border-primary-dark py-2 px-5 text-sm font-medium text-primary-dark disabled:text-opacity-50 disabled:cursor-not-allowed disabled:opacity-50",
                            onClick: () => m(0, 1),
                            children: e.jsx(es, {
                                size: 16
                            })
                        })]
                    })]
                })]
            }), x && e.jsxs("div", {
                className: "flex flex-col gap-2",
                children: [e.jsxs("div", {
                    className: "flex flex-row gap-2 items-center",
                    children: [e.jsx("img", {
                        src: is(t != null && t.primaryImageUrl ? t.primaryImageUrl : ra, ".jpg", "_small"),
                        alt: "Cart Item",
                        className: "h-[2rem] w-[2rem] min-w-[2rem] rounded-lg border border-gray-light object-cover",
                        draggable: !1
                    }), e.jsx("span", {
                        className: "text-sm font-medium text-coal-dark",
                        children: qt(t.name, 32)
                    })]
                }), e.jsx("div", {
                    className: "flex w-full flex-col items-start justify-start space-y-2",
                    children: e.jsx(ho, {
                        count: ((w = t == null ? void 0 : t.variants) == null ? void 0 : w.length) + 1.5,
                        customCSS: "pr-3",
                        shouldRenderDots: !1,
                        children: (L = t == null ? void 0 : t.variants) == null ? void 0 : L.map((k, v) => e.jsx(Mo, {
                            productVariant: k,
                            variantIndex: v,
                            groupIndex: n,
                            productIndex: r
                        }))
                    })
                })]
            })]
        }, s)
    },
    _i = ({
        key: s,
        productGroup: t,
        groupIndex: n,
        openState: r,
        setOpenState: a
    }) => {
        const {
            t: o
        } = te();
        return e.jsxs(e.Fragment, {
            children: [e.jsx(Qs, {
                defaultOpen: r[n],
                refName: `discounted-product-group-${n}`,
                as: Ie.Fragment,
                "data-sentry-element": "Disclosure",
                "data-sentry-source-file": "DiscountedProductGroup.tsx",
                children: ({
                    open: x,
                    close: l
                }) => {
                    var m, h;
                    return e.jsxs(e.Fragment, {
                        children: [e.jsxs(Qs.Button, {
                            className: "flex justify-between p-3 items-center w-full text-coal-dark font-medium text-base",
                            children: [e.jsx("p", {
                                children: x ? o("select_any_x", {
                                    x: t.quantity
                                }) : o("select_any_x_from_below_y_items", {
                                    x: t.quantity,
                                    y: (m = t == null ? void 0 : t.products) == null ? void 0 : m.length
                                })
                            }), e.jsxs("div", {
                                className: "flex justify-center items-center space-x-2",
                                children: [x && e.jsx("span", {
                                    className: "text-sm font-normal text-coal-dark",
                                    children: o("x_out_of_y_selected", {
                                        x: t.selectedQuantity,
                                        y: t.quantity
                                    })
                                }), e.jsx(ha, {
                                    className: `${x?"-rotate-180 transform":""} h-5 w-5 transition duration-200`
                                })]
                            })]
                        }), e.jsx(Qs.Panel, {
                            className: "w-full p-3 flex flex-col space-y-3",
                            children: (h = t == null ? void 0 : t.products) == null ? void 0 : h.map((c, u) => e.jsx(Go, {
                                selectedProduct: c,
                                groupIndex: n,
                                productIndex: u
                            }, `discounted-product-card-${u+1}`))
                        })]
                    })
                }
            }, s), e.jsx("div", {
                className: "w-full border-b border-gray-light"
            })]
        })
    },
    $o = ({
        setIsOpen: s,
        floWalletData: t,
        updateWalletData: n
    }) => {
        const {
            t: r
        } = te(), {
            state: {
                appliedWalletData: a
            }
        } = ge(), [o, x] = d.useState((a == null ? void 0 : a.totalReducedPoints) > 0 ? a == null ? void 0 : a.totalReducedPoints : t == null ? void 0 : t.maxBurnablePoints), l = h => {
            h.preventDefault(), s(!1), n(o)
        }, m = h => {
            const c = h.target.valueAsNumber;
            if (c > (t == null ? void 0 : t.maxBurnablePoints)) {
                x(t == null ? void 0 : t.maxBurnablePoints);
                return
            }
            x(c)
        };
        return e.jsxs(e.Fragment, {
            children: [e.jsxs(Ze, {
                className: "relative flex justify-between pl-4 pr-6",
                "data-sentry-element": "DialogHeader",
                "data-sentry-source-file": "FloWalletPointsSelector.tsx",
                children: [e.jsxs("div", {
                    className: "flex flex-col gap-1 py-[18px]",
                    children: [e.jsx("h3", {
                        className: "font-medium text-carbon-dark",
                        children: "Enter amount"
                    }), e.jsxs("p", {
                        className: "text-xs font-medium text-coal-dark",
                        children: [r("max_usable_x_coins", {
                            total: Ee(t == null ? void 0 : t.maxBurnablePoints, !1)
                        }), t == null ? void 0 : t.coinNamePlural, (t == null ? void 0 : t.maxBurnablePoints) === Number(o) ? " 🔥" : ""]
                    }), e.jsxs("p", {
                        className: "text-xs text-coal-dark",
                        children: [r("you_have"), e.jsx("span", {
                            className: "font-medium text-yay-dark",
                            children: r("x_coins", {
                                total: Ee(t == null ? void 0 : t.totalPointsBalance, !1),
                                brand: (t == null ? void 0 : t.totalPointsBalance) > 1 ? t == null ? void 0 : t.coinNamePlural : t == null ? void 0 : t.coinName
                            })
                        }), r("in_your_wallet")]
                    })]
                }), e.jsx("div", {
                    className: "absolute right-0 flex h-full items-center pr-6",
                    children: e.jsx("button", {
                        onClick: () => s(!1),
                        children: e.jsx(st, {
                            className: "h-6 w-6 cursor-pointer text-coal-dark",
                            "data-sentry-element": "X",
                            "data-sentry-source-file": "FloWalletPointsSelector.tsx"
                        })
                    })
                })]
            }), e.jsxs(Je, {
                className: "relative !py-0 px-3",
                "data-sentry-element": "DialogBody",
                "data-sentry-source-file": "FloWalletPointsSelector.tsx",
                children: [e.jsx(Qe, {
                    type: "number",
                    placeholder: r("enter_coupon_code"),
                    name: "coupon-code",
                    id: "coupon-code",
                    maxLength: 50,
                    autoComplete: "off",
                    autoFocus: !1,
                    value: `${o}`,
                    onChange: m,
                    onKeyDown: h => {
                        h.key === "Enter" && l(h)
                    },
                    customClass: "h-[3.25rem] border text-base border-gray-light !rounded-2xl  placeholder-gray-dark text-sm font-normal text-coal-light w-full mb-16",
                    showLabel: !1,
                    tabIndex: -1,
                    "data-sentry-element": "InputField",
                    "data-sentry-source-file": "FloWalletPointsSelector.tsx"
                }), e.jsx("span", {
                    className: "text-normal absolute right-7 -top-8 flex h-full items-center text-coal-light",
                    children: !!(o * (t == null ? void 0 : t.coinConversionRate)) && e.jsxs("span", {
                        children: [t == null ? void 0 : t.coinNamePlural, " =", " ", e.jsx("span", {
                            className: "font-medium text-yay-dark",
                            children: Ee(Vt(o * (t == null ? void 0 : t.coinConversionRate)))
                        })]
                    })
                })]
            }), e.jsx(hs, {
                className: "relative md:relative",
                "data-sentry-element": "DialogFooter",
                "data-sentry-source-file": "FloWalletPointsSelector.tsx",
                children: e.jsx(ut, {
                    buttonText: r("redeem"),
                    id: "flo_wallet_redeem_button",
                    type: "submit",
                    onClick: l,
                    height: "h-14",
                    isLoading: !1,
                    isDisabled: !o || Number(o) === 0,
                    "data-sentry-element": "PrimaryButton",
                    "data-sentry-source-file": "FloWalletPointsSelector.tsx"
                })
            })]
        })
    },
    gi = ({
        context: s = "checkout"
    }) => {
        var Te, le, he, ie, fe, Oe, z, I, He;
        const {
            t
        } = te(), {
            state: {
                checkoutModal: n,
                checkoutId: r,
                appliedCoupons: a,
                appliedWalletData: o,
                hasDefaultShippingHandleSelected: x,
                shippingHandles: l,
                initialCheckoutStep: m,
                billing: h
            },
            actions: {
                setCheckoutModal: c,
                updateCheckoutBasedOnCheckoutResponse: u
            }
        } = ge(), {
            actions: {
                mutatePayment: C
            }
        } = Re(), {
            state: {
                mode: y,
                rewardsConfig: g,
                isTileLoading: i,
                error: j
            },
            actions: {
                removeRewards: p,
                updateRewards: E
            }
        } = $s(), [_, A] = d.useState(!0), [N, b] = d.useState(!1), [f, w] = d.useState(), [L, k] = d.useState(!1), [v, T] = d.useState(!1);
        d.useEffect(() => {
            if (y === Ps.REWARDS_WALLET && g.mode === Ps.REWARDS_WALLET) {
                const ce = g.data;
                w(ce.floWalletData), A(!!ce.isWalletCreated)
            }
        }, [a, o, i, g]);
        const {
            invalidDiscountCodeTitles: F,
            invalidDiscountCodes: $
        } = ma((Te = f == null ? void 0 : f.unavailabilityReasons) != null ? Te : []), Q = !!(f != null && f.burnEnabled), Y = !!(f != null && f.earnEnabled), S = f == null ? void 0 : f.maxBurnableAmount, K = Q ? h.rewards >= 0 : h.rewards > 0, V = d.useMemo(() => {
            let ce = _ && K;
            return (S === 0 || s === "cart") && (ce = !1), ce
        }, [S, _, K, s]), oe = d.useMemo(() => !!(!(o != null && o.totalReducedPoints) && f && !f.isAvailable && !f.unavailabilityReasons.length), [f, o]), xe = d.useMemo(() => !!(o != null && o.totalReducedPoints && f && !f.isAvailable && !f.unavailabilityReasons.length), [f, o]), X = f != null && f.totalPointsBalance && (f != null && f.maxBurnablePoints) ? (f == null ? void 0 : f.totalPointsBalance) > (f == null ? void 0 : f.maxBurnablePoints) : !1, ne = f != null && f.currencyBurnedTemplate ? (I = (fe = (ie = f == null ? void 0 : f.currencyBurnedTemplate) == null ? void 0 : ie.replace("<rewards_value>", (o == null ? void 0 : o.totalReducedPoints) > 0 ? (le = o == null ? void 0 : o.totalReducedPoints) == null ? void 0 : le.toString() : (he = f == null ? void 0 : f.maxBurnablePoints) == null ? void 0 : he.toString())) == null ? void 0 : fe.replace("<coin_name>", f.coinNamePlural)) == null ? void 0 : I.replace("<currency_value>", (o == null ? void 0 : o.totalReductionAmount) > 0 ? (Oe = o == null ? void 0 : o.totalReductionAmount) == null ? void 0 : Oe.toString() : (z = f == null ? void 0 : f.maxBurnableAmount) == null ? void 0 : z.toString()) : "", Z = () => ee(void 0, null, function*() {
            var W;
            const ce = Ys(l),
                pe = $ == null ? void 0 : $.map(re => cs(`/checkout/v1/checkout/${r}/discounts`, {
                    discount_code: re
                }));
            if ((yield Promise.allSettled(pe)).some(re => re.status !== "fulfilled")) {
                De(t("failed_to_replace_coupons"));
                return
            }
            if (me((W = f == null ? void 0 : f.maxBurnablePoints) != null ? W : 0), ce) {
                const re = {
                        shipping_handle: ce.id
                    },
                    D = yield wt(`/checkout/${r}/shipping-handle`, re, "KRATOS_PRIVATE");
                u(D)
            }
        }), me = ce => ee(void 0, null, function*() {
            var ye;
            const pe = {
                amount: f != null && f.coinConversionRate ? parseFloat(Vt(ce * (f == null ? void 0 : f.coinConversionRate)).toFixed(2)) : f == null ? void 0 : f.maxBurnableAmount,
                rewards_type: ds.REWARDS_WALLET,
                redemption_id: r
            };
            try {
                b(!0);
                const G = yield E(pe);
                u(G), C(), (ye = $[0]) != null && ye.length && (Be([`/checkout/${r}/rewards`, vt.KRATOS_PRIVATE]), Be([`/checkout/${r}/discount`, "KRATOS_PRIVATE"]))
            } catch (G) {
                console.error(G)
            } finally {
                b(!1)
            }
        }), B = () => ee(void 0, null, function*() {
            try {
                b(!0);
                const ce = yield p({
                    rewards_type: ds.REWARDS_WALLET
                });
                u(ce), C()
            } catch (ce) {
                console.error(ce)
            } finally {
                b(!1)
            }
        }), M = ce => {
            var ye;
            if (ce == null || ce.stopPropagation(), !(f != null && f.isAvailable) && !xe) {
                c("REWARD_WALLET_CONFIRMATION");
                return
            }
            if (!x && m !== "PAYMENTS") {
                c("SHIPPING_HANDLES");
                return
            }
            o != null && o.totalReducedPoints ? B() : me((ye = f == null ? void 0 : f.maxBurnablePoints) != null ? ye : 0)
        }, se = () => f ? e.jsxs("div", {
            className: "rounded-2xl border-2 border-yay-light bg-white px-3 py-4",
            "data-sentry-component": "renderFloWallet",
            "data-sentry-source-file": "FloWallet.tsx",
            children: [e.jsx("div", {
                className: "flex justify-between",
                children: e.jsxs("div", {
                    className: "flex items-center space-x-2 text-coal-dark",
                    children: [e.jsx($r, {
                        className: "h-4 w-4 stroke-[2.7px]",
                        "data-sentry-element": "Star",
                        "data-sentry-source-file": "FloWallet.tsx"
                    }), e.jsx("span", {
                        className: "text-sm font-medium",
                        children: t("rewards_tile_header")
                    })]
                })
            }), e.jsxs("div", {
                className: "mt-2 flex items-center justify-between space-x-3",
                children: [e.jsxs("div", {
                    className: "relative flex flex-1 items-center space-x-1.5 rounded-lg border border-[#2C874A33] bg-[#2C874A0D] p-2",
                    children: [e.jsxs("span", {
                        className: "flex items-center justify-center",
                        onClick: M,
                        children: [e.jsx("input", {
                            type: "checkbox",
                            checked: !!(o != null && o.totalReducedPoints),
                            className: "peer relative h-3 w-3 shrink-0 cursor-pointer appearance-none rounded-sm border-[1.5px] border-yay-dark bg-[#2C874A0D] checked:border-0 checked:bg-yay-dark focus:outline-none ",
                            id: "flo-reward-redeem",
                            readOnly: !0
                        }), e.jsx("svg", {
                            className: "pointer-events-none absolute hidden h-2.5 w-2.5 stroke-white outline-none peer-checked:block",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "4",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            "data-sentry-element": "svg",
                            "data-sentry-source-file": "FloWallet.tsx",
                            children: e.jsx("polyline", {
                                points: "20 6 9 17 4 12",
                                "data-sentry-element": "polyline",
                                "data-sentry-source-file": "FloWallet.tsx"
                            })
                        })]
                    }), e.jsx("label", {
                        htmlFor: "flo-reward-redeem",
                        className: "text-sm font-medium text-yay-dark",
                        children: ne || t("use_x_coins_worth_amount", {
                            coins: (o == null ? void 0 : o.totalReducedPoints) > 0 ? o == null ? void 0 : o.totalReducedPoints : f == null ? void 0 : f.maxBurnablePoints,
                            coin_name: f.coinNamePlural,
                            amount: Ee((o == null ? void 0 : o.totalReductionAmount) > 0 ? o == null ? void 0 : o.totalReductionAmount : f == null ? void 0 : f.maxBurnableAmount)
                        })
                    })]
                }), e.jsx("button", {
                    className: "rounded-lg border border-gray-light bg-gray-lightest px-3 py-2",
                    onClick: () => {
                        if (!f.isAvailable && !xe) {
                            c("REWARD_WALLET_CONFIRMATION");
                            return
                        }
                        if (!x && m !== "PAYMENTS") {
                            c("SHIPPING_HANDLES");
                            return
                        }
                        k(!0)
                    },
                    children: e.jsx("img", {
                        src: Jr,
                        alt: "edit"
                    })
                })]
            }), e.jsxs("div", {
                className: "mt-1.5 flex space-x-1 text-xs font-normal",
                children: [X ? e.jsxs(e.Fragment, {
                    children: [e.jsxs("span", {
                        className: "text-gray-dark",
                        children: [t("wallet_balance"), " ", e.jsx("span", {
                            className: "font-medium text-coal-light",
                            children: f.totalPointsBalance
                        })]
                    }), e.jsx("span", {
                        className: "text-coal-light",
                        children: "·"
                    })]
                }) : null, e.jsxs("span", {
                    className: "text-gray-dark",
                    children: [t("max_usable"), " ", e.jsxs("span", {
                        className: "font-medium text-coal-light",
                        children: [f.maxBurnablePoints, " ", f.coinNamePlural]
                    })]
                })]
            })]
        }) : e.jsx(e.Fragment, {}), ue = () => {
            var ce, pe, ye, G, W, re, D, O, de, H, Ce, Ae;
            return f ? e.jsx("div", {
                className: Fe("rounded-lg border mb-2 border-dashed  border-[#2C874A4D] bg-white font-normal  text-yay-dark"),
                style: P(P(P({}, (ce = f.earnTileCustomization) != null && ce.outline_color ? {
                    borderColor: (pe = f.earnTileCustomization) == null ? void 0 : pe.outline_color
                } : {}), (ye = f.earnTileCustomization) != null && ye.text_color ? {
                    color: (G = f.earnTileCustomization) == null ? void 0 : G.text_color
                } : {}), ((W = f.earnTileCustomization) == null ? void 0 : W.outline) === "dashed" ? {
                    borderStyle: (re = f.earnTileCustomization) == null ? void 0 : re.outline
                } : {
                    borderStyle: "solid"
                }),
                "data-sentry-component": "renderEarnTile",
                "data-sentry-source-file": "FloWallet.tsx",
                children: e.jsxs("div", {
                    className: Fe("flex items-center space-x-2.5 rounded-[7px]  p-2"),
                    style: {
                        background: (D = f.earnTileCustomization) != null && D.background_color ? (O = f.earnTileCustomization) == null ? void 0 : O.background_color : "#2C874A1A"
                    },
                    children: [((de = f.earnTileCustomization) == null ? void 0 : de.is_credit_name_visible) !== "none" ? e.jsx("span", {
                        className: "text-xs font-medium ",
                        children: f.coinNamePlural
                    }) : null, e.jsxs("div", {
                        className: Fe("border-yay-dark text-sm", ((H = f.earnTileCustomization) == null ? void 0 : H.is_credit_name_visible) !== "none" ? "border-l px-2" : ""),
                        style: P({}, (Ce = f.earnTileCustomization) != null && Ce.outline_color ? {
                            borderColor: (Ae = f.earnTileCustomization) == null ? void 0 : Ae.outline_color
                        } : {}),
                        children: [f.rewardsEarnedMessage ? f.rewardsEarnedMessage : e.jsx(e.Fragment, {
                            children: e.jsx("span", {
                                className: "",
                                children: t("earn_x_cashback_with_purchase", {
                                    amount: Ee(`${f.maxEarnablePoints}`, !1)
                                })
                            })
                        }), e.jsx("div", {
                            className: "text-xs",
                            children: f.currencyEarnedMessage || ""
                        })]
                    })]
                })
            }) : e.jsx(e.Fragment, {})
        };
        return j ? e.jsx(e.Fragment, {}) : e.jsxs(e.Fragment, {
            children: [e.jsx(_e, {
                loading: !!i || !!N,
                "data-sentry-element": "AnimateLoading",
                "data-sentry-source-file": "FloWallet.tsx",
                children: e.jsx(_e.Content, {
                    "data-sentry-element": "unknown",
                    "data-sentry-source-file": "FloWallet.tsx",
                    children: e.jsxs("div", {
                        className: "space-y-3",
                        children: [V && !oe && se(), Y && !!(f != null && f.earnMultiplier) && ue()]
                    })
                })
            }), e.jsx(Pe, {
                isOpen: n === "REWARD_WALLET_CONFIRMATION",
                translateAxis: "y",
                dialogOverlay: !0,
                modalType: "REWARD_WALLET_CONFIRMATION",
                customClass: "overflow-scroll md:!top-auto md:absolute",
                "data-sentry-element": "GenericDialog",
                "data-sentry-source-file": "FloWallet.tsx",
                children: e.jsx(Na, {
                    closePopup: () => c("NONE"),
                    applyCoupon: () => ee(void 0, null, function*() {
                        try {
                            c("NONE"), T(!0), yield Z()
                        } catch (ce) {
                            console.error(ce)
                        } finally {
                            T(!1)
                        }
                    }),
                    appliedDiscountCode: (He = f == null ? void 0 : f.coinName) != null ? He : "",
                    invalidDiscountCodes: F,
                    invalidReason: "REWARDS_NOT_COMBINABLE",
                    isReward: !0,
                    "data-sentry-element": "SwitchCouponDialog",
                    "data-sentry-source-file": "FloWallet.tsx"
                })
            }), e.jsxs(Pe, {
                isOpen: v,
                translateAxis: "y",
                customClass: "overflow-scroll md:!top-auto md:absolute",
                dialogOverlay: !0,
                modalType: "PROCESSING",
                "data-sentry-element": "GenericDialog",
                "data-sentry-source-file": "FloWallet.tsx",
                children: [e.jsx(Ze, {
                    "data-sentry-element": "DialogHeader",
                    "data-sentry-source-file": "FloWallet.tsx",
                    children: e.jsx("div", {
                        className: "flex h-full w-full flex-row items-center justify-between",
                        children: e.jsxs("h1", {
                            className: "text-base font-medium",
                            children: [" ", t("replacing_coupons")]
                        })
                    })
                }), e.jsx(Je, {
                    "data-sentry-element": "DialogBody",
                    "data-sentry-source-file": "FloWallet.tsx",
                    children: e.jsx("div", {
                        className: "h-[5px] w-full overflow-hidden bg-carbon-lighter",
                        children: e.jsx("div", {
                            className: "progress left-right h-full w-full bg-primary-dark"
                        })
                    })
                })]
            }), f && e.jsx(Pe, {
                isOpen: L,
                translateAxis: "y",
                dialogOverlay: !0,
                modalType: "NONE",
                customClass: "overflow-scroll md:!top-auto md:absolute",
                children: e.jsx($o, {
                    setIsOpen: ce => k(ce),
                    floWalletData: f,
                    updateWalletData: me
                })
            })]
        })
    },
    Yo = ({
        setIsOpen: s,
        loyaltyData: t,
        updateLoyaltyDetails: n,
        appliedLoyaltyHandle: r
    }) => {
        var m, h;
        const {
            t: a
        } = te(), {
            state: {
                merchant: o
            }
        } = Ye(), [x, l] = d.useState((m = r == null ? void 0 : r.id) != null && m.length ? r == null ? void 0 : r.id : "ALL");
        return e.jsxs(e.Fragment, {
            children: [e.jsx(Ze, {
                className: "mt-2",
                "data-sentry-element": "DialogHeader",
                "data-sentry-source-file": "LoyaltyCoinsSelecor.tsx",
                children: e.jsxs("div", {
                    className: "flex h-full w-full flex-row items-center justify-between ",
                    children: [e.jsxs("div", {
                        className: "items-left flex flex-col justify-center gap-1",
                        children: [e.jsx("h1", {
                            className: "-mx-3 text-sm text-carbon-dark",
                            children: a("loyalty_payment_header", {
                                brand: t == null ? void 0 : t.coinNamePlural
                            })
                        }), e.jsx("h2", {
                            className: "-mx-3 text-xs text-gray-dark",
                            children: a("you_have_x_coins", {
                                total: Ee(t == null ? void 0 : t.totalPointsBalance, !1),
                                brand: t == null ? void 0 : t.coinNamePlural
                            })
                        })]
                    }), e.jsx("button", {
                        className: "-mx-3 outline-none",
                        children: e.jsx(st, {
                            className: "h-6 w-6 cursor-pointer text-coal-dark",
                            onClick: () => s(!1),
                            "data-sentry-element": "X",
                            "data-sentry-source-file": "LoyaltyCoinsSelecor.tsx"
                        })
                    })]
                })
            }), e.jsx(Je, {
                className: "!overflow-x-hidden !pb-28",
                "data-sentry-element": "DialogBody",
                "data-sentry-source-file": "LoyaltyCoinsSelecor.tsx",
                children: e.jsx("ul", {
                    className: "-mx-3 flex flex-col gap-4",
                    children: (h = t == null ? void 0 : t.redemptionOptions) == null ? void 0 : h.map(c => e.jsxs("li", {
                        className: `mx-5 flex cursor-pointer items-center justify-between rounded-2xl border px-3 py-4 text-sm ${x===(c==null?void 0:c.id)?"border-2 border-primary-dark px-[11px] py-[15px] text-coal-dark":"text-coal-light"}`,
                        onClick: () => {
                            l(c == null ? void 0 : c.id)
                        },
                        children: [e.jsxs("h2", {
                            children: [a("x_coins", {
                                total: Ee(c == null ? void 0 : c.totalPoints, !1),
                                brand: t == null ? void 0 : t.coinNamePlural
                            }), " ", (c == null ? void 0 : c.id) === "ALL" ? a("maximum_coins") : ""]
                        }), e.jsx(tt, {
                            total: Ee(c == null ? void 0 : c.totalPrice)
                        })]
                    }, c == null ? void 0 : c.id))
                })
            }), e.jsx(hs, {
                className: "pb-16",
                "data-sentry-element": "DialogFooter",
                "data-sentry-source-file": "LoyaltyCoinsSelecor.tsx",
                children: e.jsx(ut, {
                    buttonText: a("redeem"),
                    onClick: () => {
                        if ((r == null ? void 0 : r.id) === x) {
                            s(!1);
                            return
                        }
                        n(x), s(!1)
                    },
                    height: "h-14",
                    isLoading: !1,
                    isDisabled: !1,
                    isCheckout: !0,
                    showCustomTerms: (o == null ? void 0 : o.merchantId) === "39e49c34-1261-4205-aed7-bd87f9eee7b8",
                    customTermsLink: (o == null ? void 0 : o.merchantId) === "39e49c34-1261-4205-aed7-bd87f9eee7b8" ? "https://blissclub.com/pages/faq" : "",
                    "data-sentry-element": "PrimaryButton",
                    "data-sentry-source-file": "LoyaltyCoinsSelecor.tsx"
                })
            })]
        })
    },
    Ho = ({
        context: s = "checkout",
        loyaltyDetails: t,
        selectedEmail: n,
        setSelectedEmail: r,
        isUnusable: a,
        isVerified: o,
        setIsVerified: x
    }) => {
        var Q, Y;
        const {
            t: l
        } = te(), {
            state: {
                checkoutId: m,
                appliedLoyalty: h
            },
            actions: {
                updateCheckoutBasedOnCheckoutResponse: c
            }
        } = ge(), {
            state: {
                user: u
            }
        } = mt(), {
            actions: {
                handleUnapplicablePaymentMethod: C,
                mutatePayment: y
            }
        } = Re(), {
            actions: {
                removeRewards: g,
                updateRewards: i
            }
        } = $s(), [j, p] = d.useState(!1), [E, _] = d.useState(!1), [A, N] = d.useState(!1), [b, f] = d.useState(!1), w = () => {
            p(!0)
        }, L = S => {
            c(S, !0)
        }, k = d.useCallback(() => {
            var K;
            const S = (K = u == null ? void 0 : u.addresses) == null ? void 0 : K.map(V => V == null ? void 0 : V.email).filter(V => V);
            return S && S.length ? Array.from(new Set(S)) : []
        }, [u]), v = () => {
            if (a) {
                Js(l("create_loyalty_account"));
                return
            }
            _(!0)
        }, T = () => ee(void 0, null, function*() {
            try {
                N(!0);
                const S = yield g({
                    rewards_type: ds.LOYALTY
                });
                L(S), y(), N(!1)
            } catch (S) {
                N(!1), console.error(S)
            }
        }), F = S => ee(void 0, null, function*() {
            const K = {
                redemption_id: S,
                email: n,
                rewards_type: ds.LOYALTY
            };
            try {
                N(!0);
                const V = yield i(K);
                L(V), y(), N(!1)
            } catch (V) {
                console.error(V), N(!1)
            }
        }), $ = () => ee(void 0, null, function*() {
            try {
                if (N(!0), !ar(n)) {
                    f(!0), N(!1);
                    return
                }
                if (p(!1), h.totalPoints > 0) {
                    yield T();
                    return
                }
                n ? Be(`/checkout/v2/checkout/${m}/rewards?email=${n}`) : Be(`/checkout/v2/checkout/${m}/rewards`)
            } catch (S) {
                console.error(S)
            } finally {
                N(!1)
            }
        });
        return e.jsxs("div", {
            className: "border-base bg-white p-3",
            "data-sentry-component": "YotpoLoyalty",
            "data-sentry-source-file": "YotpoLoyalty.tsx",
            children: [e.jsx("h2", {
                className: "mb-3 text-xs uppercase text-gray-dark",
                children: l("rewards_tile_header")
            }), e.jsx("div", {
                className: " mb-3 flex w-full flex-row gap-2 overflow-hidden rounded-lg border border-gray-light px-1.5 py-1.5",
                children: e.jsxs("button", {
                    onClick: w,
                    className: "items-left flex w-full flex-col justify-between gap-1.5 px-1.5 py-1.5 font-normal text-coal-dark",
                    children: [e.jsxs("div", {
                        className: "flex w-full items-center ",
                        children: [e.jsx("h1", {
                            className: "text-sm text-coal-dark",
                            children: a ? n || ((Q = u == null ? void 0 : u.default_shipping_address) == null ? void 0 : Q.email) : t == null ? void 0 : t.email
                        }), e.jsx(fs, {
                            className: "ml-auto h-4 w-4 text-coal-dark",
                            "data-sentry-element": "Edit",
                            "data-sentry-source-file": "YotpoLoyalty.tsx"
                        })]
                    }), e.jsx("div", {
                        className: "mr-6 text-left text-xs text-gray-dark",
                        children: e.jsx("h2", {
                            children: l(a ? "create_loyalty_account" : "loyalty_line1")
                        })
                    })]
                })
            }), o ? e.jsx(e.Fragment, {
                children: t && e.jsx(e.Fragment, {
                    children: (Y = t == null ? void 0 : t.redemptionOptions) != null && Y.length ? e.jsx(Vo, {
                        appliedLoyaltyHandle: h,
                        loyaltyData: t,
                        updateLoyaltyDetails: F,
                        removeLoyaltyDetails: T,
                        disabled: !(t != null && t.isAvailable),
                        handleUnapplicability: () => C("LOYALTY", t == null ? void 0 : t.unavailabilityReasons),
                        unapplicabilityReason: Hs(t == null ? void 0 : t.unavailabilityReasons, "Loyalty points")
                    }) : e.jsxs("div", {
                        className: " flex min-h-[64px] w-full cursor-pointer flex-row items-center justify-between space-x-6 rounded-lg border border-gray-light bg-[#fafafa] py-3 pl-2 pr-4 opacity-75 hover:bg-gray-lighter",
                        onClick: () => Js(l("not_enough_coins", {
                            brand: t == null ? void 0 : t.coinNamePlural
                        })),
                        children: [e.jsxs("div", {
                            className: "flex flex-row space-x-3",
                            children: [e.jsx("div", {
                                className: "flex h-9 w-9 flex-row items-center justify-center rounded-lg border border-gray-light p-1",
                                children: e.jsx("img", {
                                    src: Za,
                                    alt: "Loyalty",
                                    className: "h-7 min-h-[1.75rem] w-7 min-w-[1.75rem] object-contain"
                                })
                            }), e.jsxs("div", {
                                className: "flex flex-col justify-center space-y-1",
                                children: [e.jsx("h3", {
                                    className: "text-sm font-medium text-coal-dark",
                                    children: `${l("redeem")} ${t==null?void 0:t.coinNamePlural}`
                                }), e.jsx("p", {
                                    className: "text-xs font-normal text-coal-light",
                                    children: l("loyalty_points_credited")
                                })]
                            })]
                        }), e.jsx(Rs, {
                            className: "!-ml-2 h-4 w-4 text-coal-dark"
                        })]
                    })
                })
            }) : e.jsx("div", {
                onClick: v,
                className: "rounded-lg border-gray-light",
                children: e.jsxs("div", {
                    className: `flex min-h-[64px] w-full cursor-pointer flex-row items-center justify-between space-x-6 rounded-lg border border-gray-light  py-3 pl-2 pr-4 hover:bg-gray-lighter ${a?"bg-[#fafafa] opacity-75":""} `,
                    children: [e.jsxs("div", {
                        className: "flex flex-row space-x-3",
                        children: [e.jsx("div", {
                            className: "flex h-9 w-9 flex-row items-center justify-center rounded-lg border border-gray-light p-1",
                            children: e.jsx("img", {
                                src: Za,
                                alt: "Loyalty",
                                className: "h-7 min-h-[1.75rem] w-7 min-w-[1.75rem] object-contain"
                            })
                        }), e.jsxs("div", {
                            className: "flex flex-col justify-center space-y-1",
                            children: [e.jsx("h3", {
                                className: "text-sm font-medium text-coal-dark",
                                children: `${l("redeem")} ${t==null?void 0:t.coinNamePlural}`
                            }), " ", e.jsx("p", {
                                className: "text-xs font-normal text-coal-light",
                                children: l("loyalty_payment_subheader")
                            })]
                        })]
                    }), e.jsx(Rs, {
                        className: "!-ml-2 h-4 w-4 text-coal-dark"
                    })]
                })
            }), t && e.jsx(Pe, {
                isOpen: E,
                translateAxis: "y",
                dialogOverlay: !0,
                modalType: "AUTH",
                customClass: "overflow-scroll md:!top-auto md:absolute",
                children: e.jsx(vo, {
                    setIsOpen: S => _(S),
                    setIsVerified: S => x(S),
                    refreshLoyalty: () => ee(void 0, null, function*() {
                        Be(`/checkout/v2/checkout/${m}/rewards`)
                    }),
                    loyaltyData: t
                })
            }), t && e.jsx(Pe, {
                isOpen: j,
                translateAxis: "y",
                dialogOverlay: !0,
                modalType: "AUTH",
                customClass: "overflow-scroll md:!top-auto md:absolute",
                children: e.jsx(jo, {
                    selectedEmail: n,
                    setSelectedEmail: r,
                    setIsOpen: S => p(S),
                    emails: k(),
                    onSubmit: $,
                    error: b,
                    setError: S => f(S),
                    loyaltyData: t
                })
            }), A && e.jsx(St, {})]
        })
    },
    Vo = ({
        loyaltyData: s,
        updateLoyaltyDetails: t,
        removeLoyaltyDetails: n,
        appliedLoyaltyHandle: r,
        disabled: a,
        handleUnapplicability: o,
        unapplicabilityReason: x
    }) => {
        const {
            t: l
        } = te(), {
            state: {
                hasDefaultShippingHandleSelected: m,
                initialCheckoutStep: h
            },
            actions: {
                setCheckoutModal: c
            }
        } = ge(), [u, C] = d.useState(!1), y = () => {
            var i;
            if (a) {
                o();
                return
            }
            if (!m && h !== "PAYMENTS") {
                c("SHIPPING_HANDLES");
                return
            }
            r.totalPoints ? n() : t((i = s == null ? void 0 : s.redemptionOptions[0]) == null ? void 0 : i.id)
        };
        return e.jsxs(e.Fragment, {
            children: [e.jsxs("div", {
                className: "mb-3 flex w-full flex-col rounded-lg border",
                children: [e.jsxs("div", {
                    className: `flex w-full flex-col items-start justify-between gap-2 rounded-t-2xl p-3 text-sm transition-[background] duration-300 ${r!=null&&r.totalPoints||!a?"bg-yay-lighter text-yay-dark":"bg-none text-gray-dark"}`,
                    children: [e.jsxs("div", {
                        className: "flex w-full cursor-pointer items-center justify-between gap-1",
                        onClick: y,
                        children: [e.jsxs("div", {
                            className: "flex w-full items-center gap-2 font-normal",
                            children: [e.jsx("input", {
                                type: "checkbox",
                                className: "cursor-pointer accent-yay-dark",
                                checked: !!(r != null && r.totalPoints),
                                readOnly: !0
                            }), e.jsx("h1", {
                                className: r != null && r.totalPoints ? "" : "text-coal-dark",
                                children: l("redeem_x_coins", {
                                    total: Ee(r.totalPoints > 0 ? r.totalPoints : s == null ? void 0 : s.totalReducedPoints, !1),
                                    brand: s == null ? void 0 : s.coinNamePlural
                                })
                            })]
                        }), e.jsx(tt, {
                            total: r.totalPoints > 0 ? r.totalPrice : s == null ? void 0 : s.totalReductionAmount,
                            isDiscounted: !0,
                            "data-sentry-element": "Price",
                            "data-sentry-source-file": "YotpoLoyalty.tsx"
                        })]
                    }), !!a && !!x && e.jsx("p", {
                        className: "text-xs font-normal text-gray-dark",
                        children: x
                    })]
                }), e.jsxs("div", {
                    onClick: () => {
                        if (a) {
                            o();
                            return
                        }
                        if (!m && h !== "PAYMENTS") {
                            c("SHIPPING_HANDLES");
                            return
                        }
                        C(!0)
                    },
                    className: "flex cursor-pointer items-center justify-between rounded-b-2xl border-t bg-[#fafafa] px-3 py-3",
                    children: [e.jsx("h2", {
                        className: "text-sm font-semibold text-coal-dark",
                        children: l("change_amount")
                    }), e.jsx(Rs, {
                        className: "h-4 w-4 text-coal-dark",
                        "data-sentry-element": "ArrowRight",
                        "data-sentry-source-file": "YotpoLoyalty.tsx"
                    })]
                })]
            }), e.jsx(Pe, {
                isOpen: u,
                translateAxis: "y",
                dialogOverlay: !0,
                modalType: "NONE",
                customClass: "overflow-scroll md:!top-auto md:absolute rounded-t-2xl max-h-[81vh]",
                "data-sentry-element": "GenericDialog",
                "data-sentry-source-file": "YotpoLoyalty.tsx",
                children: e.jsx(Yo, {
                    setIsOpen: g => C(g),
                    loyaltyData: s,
                    updateLoyaltyDetails: t,
                    removeLoyaltyDetails: n,
                    appliedLoyaltyHandle: r,
                    "data-sentry-element": "LoyaltyCoinsSelector",
                    "data-sentry-source-file": "YotpoLoyalty.tsx"
                })
            })]
        })
    },
    qo = ({
        loyaltyDetails: s,
        isUnusable: t,
        context: n = "checkout"
    }) => {
        var k, v, T, F, $, Q, Y, S, K, V, oe, xe, X, ne, Z, me;
        const {
            t: r
        } = te(), {
            state: {
                checkoutId: a,
                appliedLoyalty: o,
                checkoutModal: x
            },
            actions: {
                updateCheckoutBasedOnCheckoutResponse: l,
                setCheckoutModal: m
            }
        } = ge(), {
            actions: {
                mutatePayment: h
            }
        } = Re(), {
            actions: {
                updateRewards: c,
                removeRewards: u
            }
        } = $s(), [C, y] = d.useState(!1), [g, i] = d.useState(!1);
        d.useEffect(() => {
            ((o == null ? void 0 : o.totalPoints) > 0 || (o == null ? void 0 : o.totalPrice) > 0) && y(!0)
        }, [o]);
        const j = ((k = s == null ? void 0 : s.earnValue) == null ? void 0 : k.isEnabled) && !!((v = s == null ? void 0 : s.earnValue) != null && v.value),
            p = !!((T = s == null ? void 0 : s.userDetails) != null && T.maxApplicablePoints),
            {
                invalidDiscountCodeTitles: E,
                invalidDiscountCodes: _
            } = ma((F = s == null ? void 0 : s.unavailabilityReasons) != null ? F : []),
            A = d.useMemo(() => {
                var B;
                return !!(!C && s && !s.isAvailable && !((B = s == null ? void 0 : s.unavailabilityReasons) != null && B.length))
            }, [s, C]),
            N = ($ = s == null ? void 0 : s.unavailabilityReasons) == null ? void 0 : $.some(B => (B == null ? void 0 : B.type) === "INVALID_DISCOUNTS"),
            b = () => ee(void 0, null, function*() {
                try {
                    i(!0);
                    const B = yield u({
                        rewards_type: ds.LOYALTY
                    });
                    l(B, !0), h(), y(!1)
                } catch (B) {
                    console.error(B)
                } finally {
                    i(!1)
                }
            }),
            f = B => ee(void 0, null, function*() {
                var se;
                const M = {
                    redemption_id: B,
                    amount: (se = s == null ? void 0 : s.userDetails) == null ? void 0 : se.reductionAmount,
                    rewards_type: ds.LOYALTY
                };
                try {
                    i(!0);
                    const ue = yield c(M);
                    (ue == null ? void 0 : ue.status) === "FAILED" && Be(`/checkout/v2/checkout/${a}/rewards`), l(ue, !0), h(), N && (Be([`/checkout/${a}/discount`, "KRATOS_PRIVATE"]), Be([`/checkout/${a}/rewards`, vt.KRATOS_PRIVATE])), y(!0)
                } catch (ue) {
                    console.error(ue)
                } finally {
                    i(!1)
                }
            }),
            w = () => {
                if (C) {
                    b();
                    return
                }
                if (!(s != null && s.isAvailable) && N) {
                    m("LOYALTY_CONFIRMATION");
                    return
                }
                f(s == null ? void 0 : s.redemptionId)
            },
            L = d.useCallback(() => (s == null ? void 0 : s.provider) === "POP_COINS" ? e.jsx("img", {
                src: Ln,
                alt: "pop-coin",
                className: "w-[20px] h-[20px] rounded-full"
            }) : e.jsx(eo, {
                fill: C ? "#2c874a" : "#4d4d4d"
            }), [s, C]);
        return t || !j && !p ? e.jsx(e.Fragment, {}) : e.jsxs("div", {
            className: `border-2 ${C?"border-yay-light":"border-gray-light"} rounded-xl flex flex-col bg-white delay-[100ms]`,
            "data-sentry-component": "NetworkLoyalty",
            "data-sentry-source-file": "NetworkLoyalty.tsx",
            children: [e.jsx(_e, {
                loading: g,
                "data-sentry-element": "AnimateLoading",
                "data-sentry-source-file": "NetworkLoyalty.tsx",
                children: e.jsxs(_e.Content, {
                    "data-sentry-element": "unknown",
                    "data-sentry-source-file": "NetworkLoyalty.tsx",
                    children: [p && n === "checkout" && !A && e.jsx("div", {
                        className: "relative p-3 rounded-xl flex space-x-3 cursor-pointer",
                        children: e.jsx("div", {
                            className: "flex justify-between items-center w-full",
                            children: e.jsxs("div", {
                                className: "flex flex-row justify-start items-start space-x-2 w-full",
                                children: [e.jsx("div", {
                                    className: "flex justify-start w-7 items-start",
                                    children: L()
                                }), e.jsxs("div", {
                                    className: "flex flex-col space-y-1 w-full justify-between text-sm font-medium",
                                    children: [e.jsx("p", {
                                        className: `${C?"text-yay-dark":"text-coal-dark"}`,
                                        children: C ? r("rupees_redeemed", {
                                            amount: o == null ? void 0 : o.totalPrice
                                        }) : r("rupees_redeemable", {
                                            amount: (Q = s == null ? void 0 : s.userDetails) == null ? void 0 : Q.reductionAmount
                                        })
                                    }), e.jsxs("span", {
                                        onClick: () => m("LOYALTY_INFORMATION"),
                                        className: "flex justify-start space-x-0.5 items-end text-sm font-normal text-gray-dark",
                                        children: [e.jsx("span", {
                                            children: s == null ? void 0 : s.coinNamePlural
                                        }), e.jsx(Ct, {
                                            className: "w-4 h-4"
                                        })]
                                    })]
                                }), C ? e.jsx("div", {
                                    onClick: w,
                                    className: "flex justify-start items-start h-full w-[4.5rem]",
                                    children: e.jsx("span", {
                                        className: "text-sm font-semibold text-coal-dark cursor-pointer rounded-lg py-2",
                                        children: r("remove")
                                    })
                                }) : e.jsx("div", {
                                    onClick: w,
                                    className: "flex justify-start items-start h-full w-[4.5rem]",
                                    children: e.jsx("span", {
                                        className: "text-xs font-medium text-yay-dark cursor-pointer rounded-lg px-3 py-2 border border-yay-dark bg-yay-lighter",
                                        children: r("redeem")
                                    })
                                })]
                            })
                        })
                    }), j ? n === "checkout" ? e.jsx("div", {
                        className: `${p?"rounded-b-xl border-t-2 border-dashed":"rounded-xl"} p-3 bg-gray-lightest flex space-x-3`,
                        children: e.jsxs("div", {
                            className: "flex flex-col space-y-1",
                            children: [e.jsx("p", {
                                className: "text-sm font-normal text-coal-dark",
                                children: r("earn_x_coins_worth_y_on_this_order", {
                                    x: (Y = s == null ? void 0 : s.earnValue) == null ? void 0 : Y.value,
                                    y: (S = s == null ? void 0 : s.earnValue) == null ? void 0 : S.normalizedValue,
                                    coin: s == null ? void 0 : s.coinNamePlural
                                })
                            }), e.jsx("p", {
                                className: "text-xs font-normal text-gray-dark",
                                children: r("redeem_on_next_purchase")
                            })]
                        })
                    }) : e.jsxs("div", {
                        className: "rounded-xl p-3 bg-gray-lightest flex space-x-3",
                        children: [L(), e.jsxs("div", {
                            className: "flex flex-col space-y-1",
                            children: [e.jsx("p", {
                                className: "text-sm font-normal text-coal-dark",
                                children: r("earn_x_coins_worth_y_on_this_order", {
                                    x: (K = s == null ? void 0 : s.earnValue) == null ? void 0 : K.value,
                                    y: (V = s == null ? void 0 : s.earnValue) == null ? void 0 : V.normalizedValue,
                                    coin: s == null ? void 0 : s.coinNamePlural
                                })
                            }), e.jsx("p", {
                                className: "text-xs font-normal text-gray-dark",
                                children: r("redeem_on_next_purchase")
                            })]
                        })]
                    }) : e.jsx(e.Fragment, {})]
                })
            }), e.jsx(bo, {
                title: r("replacing_coupons"),
                "data-sentry-element": "LoaderDialog",
                "data-sentry-source-file": "NetworkLoyalty.tsx"
            }), e.jsxs(Pe, {
                isOpen: x === "LOYALTY_INFORMATION",
                translateAxis: "y",
                dialogOverlay: !0,
                modalType: "LOYALTY_INFORMATION",
                customClass: "overflow-scroll md:!top-auto md:absolute",
                setIsOpen: () => m("NONE"),
                "data-sentry-element": "GenericDialog",
                "data-sentry-source-file": "NetworkLoyalty.tsx",
                children: [e.jsx(Ze, {
                    "data-sentry-element": "DialogHeader",
                    "data-sentry-source-file": "NetworkLoyalty.tsx",
                    children: e.jsxs("div", {
                        className: "flex pt-4 pb-6 h-full w-full flex-row items-center justify-between border-b border-gray-light border-dashed",
                        children: [e.jsxs("div", {
                            className: "flex flex-col space-y-1",
                            children: [e.jsx("h1", {
                                className: "text-base font-medium",
                                children: r("your_coin_name_points_balance", {
                                    coinName: s == null ? void 0 : s.coinNamePlural
                                })
                            }), e.jsx("p", {
                                className: "text-xs font-normal text-gray-dark",
                                children: Vt(((oe = s == null ? void 0 : s.userDetails) == null ? void 0 : oe.maxApplicablePoints) / ((xe = s == null ? void 0 : s.userDetails) == null ? void 0 : xe.reductionAmount)) + " " + (Number(((X = s == null ? void 0 : s.userDetails) == null ? void 0 : X.maxApplicablePoints) / ((ne = s == null ? void 0 : s.userDetails) == null ? void 0 : ne.reductionAmount)) === 1 ? s.coinName : s == null ? void 0 : s.coinNamePlural) + " = ₹1"
                            })]
                        }), e.jsx("button", {
                            className: "outline-none",
                            children: e.jsx(st, {
                                className: "h-6 w-6 cursor-pointer text-coal-dark",
                                onClick: () => m("NONE"),
                                "data-sentry-element": "X",
                                "data-sentry-source-file": "NetworkLoyalty.tsx"
                            })
                        })]
                    })
                }), e.jsx(Je, {
                    className: "!pb-10 !pt-24 px-4",
                    "data-sentry-element": "DialogBody",
                    "data-sentry-source-file": "NetworkLoyalty.tsx",
                    children: e.jsxs("div", {
                        className: "flex text-xs text-coal-light flex-col space-y-2",
                        children: [e.jsxs("div", {
                            className: "flex flex-row space-x-2 justify-between",
                            children: [e.jsx("p", {
                                className: "font-normal ",
                                children: r("balance_label", {
                                    coins: s == null ? void 0 : s.coinNamePlural
                                })
                            }), e.jsxs("p", {
                                className: "font-medium",
                                children: [(Z = s == null ? void 0 : s.userDetails) == null ? void 0 : Z.pointBalance, " ", s == null ? void 0 : s.coinNamePlural]
                            })]
                        }), e.jsxs("div", {
                            className: "flex flex-row space-x-2 justify-between",
                            children: [e.jsx("p", {
                                className: "font-normal",
                                children: r("max_usable_label", {
                                    coins: s == null ? void 0 : s.coinNamePlural
                                })
                            }), e.jsxs("p", {
                                className: "font-medium",
                                children: [(me = s == null ? void 0 : s.userDetails) == null ? void 0 : me.maxApplicablePoints, " ", s == null ? void 0 : s.coinNamePlural]
                            })]
                        })]
                    })
                })]
            }), e.jsx(Pe, {
                isOpen: x === "LOYALTY_CONFIRMATION",
                translateAxis: "y",
                dialogOverlay: !0,
                modalType: "LOYALTY_CONFIRMATION",
                customClass: "overflow-scroll md:!top-auto md:absolute",
                "data-sentry-element": "GenericDialog",
                "data-sentry-source-file": "NetworkLoyalty.tsx",
                children: e.jsx(Na, {
                    closePopup: () => m("NONE"),
                    applyCoupon: () => ee(void 0, null, function*() {
                        try {
                            m("LOADER");
                            const B = _ == null ? void 0 : _.map(ue => cs(`/checkout/v1/checkout/${a}/discounts`, {
                                    discount_code: ue
                                })),
                                M = yield Promise.allSettled(B);
                            let se = !0;
                            if (M.forEach(ue => {
                                    (ue == null ? void 0 : ue.status) !== "fulfilled" && (se = !1)
                                }), !se) {
                                De(r("failed_to_replace_coupons"));
                                return
                            }
                            f(s == null ? void 0 : s.redemptionId)
                        } catch (B) {
                            console.error(B), De(r("failed_to_replace_coupons"))
                        } finally {
                            m("NONE")
                        }
                    }),
                    appliedDiscountCode: s == null ? void 0 : s.coinNamePlural,
                    invalidDiscountCodes: E,
                    invalidReason: "REWARDS_NOT_COMBINABLE",
                    isReward: !0,
                    "data-sentry-element": "SwitchCouponDialog",
                    "data-sentry-source-file": "NetworkLoyalty.tsx"
                })
            })]
        })
    },
    zo = ["POP_COINS", "NECTOR", "DAEIOU_JEWELS"],
    yi = ({
        context: s = "checkout"
    }) => {
        te();
        const {
            state: {
                appliedGiftCards: t,
                appliedCoupons: n
            }
        } = ge(), {
            state: {
                mode: r,
                rewardsConfig: a,
                isTileLoading: o,
                error: x
            }
        } = $s(), [l, m] = d.useState(!0), [h, c] = d.useState(!1), [u, C] = d.useState(), [y, g] = d.useState("");
        d.useEffect(() => {
            var p;
            if (r !== Ps.LOYALTY || a.mode !== Ps.LOYALTY) return;
            const j = a.data;
            j != null && j.provider && (j.provider === "YOTPO" ? (C({
                provider: j.provider,
                value: j.value,
                isVerified: j.isVerified,
                accountExists: j.accountExists
            }), g((p = j.value) == null ? void 0 : p.email), c(j.isVerified), m(!j.accountExists)) : zo.includes(j.provider) && (C({
                provider: j.provider,
                value: j.value
            }), m(!1)))
        }, [n, t, a]);
        const i = () => {
            switch (u == null ? void 0 : u.provider) {
                case "YOTPO":
                    return e.jsx(Ho, {
                        context: s,
                        loyaltyDetails: u.value,
                        selectedEmail: y,
                        setSelectedEmail: g,
                        isUnusable: l,
                        isVerified: h,
                        setIsVerified: c
                    });
                case "POP_COINS":
                case "NECTOR":
                case "DAEIOU_JEWELS":
                    return e.jsx(qo, {
                        context: s,
                        isUnusable: l,
                        loyaltyDetails: u == null ? void 0 : u.value
                    });
                default:
                    return e.jsx(e.Fragment, {})
            }
        };
        return x ? e.jsx(e.Fragment, {}) : !u || !u ? e.jsx(e.Fragment, {}) : e.jsx(_e, {
            loading: o,
            "data-sentry-element": "AnimateLoading",
            "data-sentry-component": "LoyaltyPoints",
            "data-sentry-source-file": "LoyaltyPoints.tsx",
            children: e.jsx(_e.Content, {
                "data-sentry-element": "unknown",
                "data-sentry-source-file": "LoyaltyPoints.tsx",
                children: i()
            })
        })
    },
    Dt = ({
        children: s,
        loading: t,
        isChildVisible: n,
        size: r = "md"
    }) => {
        const a = d.Children.toArray(s).find(x => Ie.isValidElement(x) && x.type === Ea);
        let o = d.Children.toArray(s).find(x => Ie.isValidElement(x) && x.type === Ms);
        return o || (o = e.jsx(Ms, {
            children: e.jsxs("div", {
                className: "border-base px-3 py-4 bg-white space-y-2",
                children: [r === "md" && e.jsx("div", {
                    className: "skeleton-loader h-4 rounded-md w-2/5"
                }), e.jsx("div", {
                    className: "skeleton-loader h-4 rounded-md w-full"
                })]
            })
        })), e.jsx(Gn, {
            mode: "wait",
            custom: n,
            "data-sentry-element": "AnimatePresence",
            "data-sentry-component": "AnimateExit",
            "data-sentry-source-file": "AnimateExit.tsx",
            children: t ? Ie.cloneElement(o) : Ie.cloneElement(a, {
                isChildVisible: n
            })
        })
    },
    Ms = Ie.forwardRef(({
        children: s,
        motionProps: t = {}
    }, n) => {
        var x;
        const r = ja(),
            a = r ? {
                opacity: 0,
                height: "auto"
            } : {
                opacity: 0,
                height: 0
            },
            o = r ? (x = t == null ? void 0 : t.transition) != null ? x : {
                duration: 0
            } : {
                duration: .4
            };
        return e.jsx(zs.div, R(P({
            ref: n,
            initial: {
                opacity: 1,
                height: "auto"
            },
            exit: a,
            transition: o
        }, t), {
            children: s
        }), "loading-skeleton")
    });
Ms.displayName = "AnimateExitSkeleton";
const Ea = ({
    children: s,
    motionProps: t = {}
}) => {
    const n = ja();
    return e.jsx(zs.div, R(P({
        initial: {
            opacity: 0,
            height: "auto"
        },
        animate: {
            opacity: 1,
            height: "auto"
        },
        transition: {
            duration: 0
        }
    }, t), {
        "data-sentry-element": "unknown",
        "data-sentry-component": "Content",
        "data-sentry-source-file": "AnimateExit.tsx",
        children: n ? s : e.jsx(e.Fragment, {})
    }), "loaded-content")
};
Ea.displayName = "AnimateExitContent";
Dt.Skeleton = Ms;
Dt.Content = Ea;
const Ni = ({
        index: s,
        item: t,
        parent: n
    }) => {
        const {
            t: r
        } = te(), {
            state: {
                user: a
            }
        } = mt(), {
            state: {
                merchant: o
            }
        } = Ye(), [x] = Mt(), {
            sendAnalyticsEvent: l
        } = qe(), m = () => ee(void 0, null, function*() {
            var y, g;
            const c = (y = x.get("mid")) == null ? void 0 : y.toLowerCase(),
                u = (g = x.get("uid")) == null ? void 0 : g.toLowerCase(),
                C = c && c ? c : o != null && o.merchantId && (o != null && o.merchantId) ? o == null ? void 0 : o.merchantId : "";
            u && u || a != null && a.uid && (a == null || a.uid);
            try {
                const i = yield fn(C, t == null ? void 0 : t.variantId);
                if (i != null && i.error) throw i == null ? void 0 : i.error;
                i && (bs(r("removed_from_wishlist"), 3e3), l({
                    eventName: q.REMOVED_FROM_WISHLIST,
                    eventType: "flo_action",
                    metaData: {
                        wishlistData: {
                            variantId: t == null ? void 0 : t.variantId,
                            variantName: t == null ? void 0 : t.variantName,
                            productId: t == null ? void 0 : t.productId,
                            productName: t == null ? void 0 : t.productName,
                            parent: n === "UPSELL_STRIP" ? "WISHLIST_STRIP" : "STORE_PAGE"
                        }
                    }
                }))
            } catch (i) {
                console.error(i)
            } finally {
                Be(`/santa/v1/wishlists?merchant_id=${C}`)
            }
        }), h = () => {
            jt(lt.ADD_TO_CART, {
                item: {
                    id: t == null ? void 0 : t.variantId,
                    quantity: 1
                }
            }), l({
                eventName: q.ADDED_FROM_WISHLIST,
                eventType: "flo_action",
                metaData: {
                    wishlistData: {
                        variantId: t == null ? void 0 : t.variantId,
                        variantName: t == null ? void 0 : t.variantName,
                        productId: t == null ? void 0 : t.productId,
                        productName: t == null ? void 0 : t.productName,
                        parent: n === "UPSELL_STRIP" ? "WISHLIST_STRIP" : "STORE_PAGE"
                    }
                }
            })
        };
        return n === "UPSELL_STRIP" ? e.jsxs("li", {
            className: "relative flex max-h-36 min-w-[180px] max-w-[180px] snap-start flex-col gap-3 overflow-hidden rounded-xl border border-carbon-lighter p-2",
            children: [e.jsxs("div", {
                className: "flex flex-row gap-2 cursor-pointer",
                onClick: () => jt(lt.OPEN_WISHLIST_PRODUCT, {
                    url: t == null ? void 0 : t.link
                }),
                children: [e.jsx("img", {
                    src: is(t == null ? void 0 : t.image, ".jpg", "_small"),
                    alt: "Cart Item",
                    className: "h-[4.875rem] w-[4.875rem] min-w-[4.875rem] rounded-lg border border-gray-light object-cover",
                    draggable: !1
                }), e.jsxs("div", {
                    className: "flex flex-col space-y-2",
                    children: [e.jsx("p", {
                        className: "mt-1 w-[76px] text-wrap text-xs font-medium text-coal-dark",
                        children: qt(t == null ? void 0 : t.productName, 32)
                    }), e.jsx("div", {
                        className: "flex flex-row space-x-0.5 text-xxs font-medium text-coal-light",
                        children: e.jsx("span", {
                            children: t == null ? void 0 : t.variantName
                        })
                    })]
                })]
            }), e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [e.jsx("div", {
                    className: "",
                    children: e.jsx(tt, {
                        total: t == null ? void 0 : t.currentPrice,
                        compareAt: t == null ? void 0 : t.originalPrice,
                        orientation: "vertical",
                        customCSS: "!flex-row !items-center !space-x-1 !text-sm"
                    })
                }), e.jsxs("button", {
                    onClick: h,
                    className: "flex items-center justify-center space-x-1 rounded-lg border-2 border-yay-dark p-2 text-sm font-medium text-yay-dark",
                    children: [e.jsx(es, {
                        size: 16
                    }), e.jsx("span", {
                        children: r("add").toUpperCase()
                    })]
                })]
            }), e.jsx("div", {
                className: "absolute border-b top-0 left-[1px] border-r h-6 w-6 z-10 bg-white text-primary-dark border-primary-light p-1 rounded-tl-md rounded-br-lg cursor-pointer",
                onClick: m,
                children: e.jsx(aa, {
                    className: "h-4 w-4 fill-primary-dark",
                    strokeWidth: 2.5
                })
            })]
        }, s) : e.jsxs("li", {
            className: "relative flex flex-col snap-start gap-3 max-h-[11rem] min-w-[19rem] md:max-w-[19rem] p-3 overflow-hidden rounded-xl border border-carbon-lighter",
            "data-sentry-component": "WishListItemCard",
            "data-sentry-source-file": "WishlistItemCard.tsx",
            children: [e.jsxs("div", {
                className: "flex flex-row space-x-3 cursor-pointer",
                onClick: () => jt(lt.OPEN_WISHLIST_PRODUCT, {
                    url: t == null ? void 0 : t.link
                }),
                children: [e.jsx("img", {
                    src: is(t == null ? void 0 : t.image, ".jpg", "_small"),
                    alt: "Cart Item",
                    className: "h-[6rem] w-[6rem] min-w-[6rem] rounded-lg border border-gray-light object-cover",
                    draggable: !1
                }), e.jsxs("div", {
                    className: "flex flex-col space-y-2",
                    children: [e.jsx("p", {
                        className: "mt-1 w-[8rem] text-wrap text-sm font-medium text-coal-dark",
                        children: qt(t == null ? void 0 : t.productName, 44)
                    }), e.jsx("div", {
                        className: "flex flex-row space-x-0.5 text-xs font-medium text-coal-light",
                        children: e.jsx("span", {
                            children: t == null ? void 0 : t.variantName
                        })
                    })]
                })]
            }), e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [e.jsx("div", {
                    className: "pr-6",
                    children: e.jsx(tt, R(P({
                        total: t == null ? void 0 : t.currentPrice,
                        compareAt: t == null ? void 0 : t.originalPrice,
                        orientation: "vertical",
                        customCSS: "!flex-row !items-center !space-x-1 !text-sm"
                    }, (t == null ? void 0 : t.originalPrice) > (t == null ? void 0 : t.currentPrice) ? {
                        discountPercentage: Vt(((t == null ? void 0 : t.originalPrice) - (t == null ? void 0 : t.currentPrice)) / (t == null ? void 0 : t.originalPrice) * 100)
                    } : {}), {
                        "data-sentry-element": "Price",
                        "data-sentry-source-file": "WishlistItemCard.tsx"
                    }))
                }), e.jsxs("button", {
                    onClick: h,
                    className: "flex items-center justify-center space-x-1 rounded-lg border-2 border-yay-dark p-2 text-sm font-medium text-yay-dark",
                    children: [e.jsx(es, {
                        size: 16,
                        "data-sentry-element": "Plus",
                        "data-sentry-source-file": "WishlistItemCard.tsx"
                    }), e.jsx("span", {
                        children: r("add").toUpperCase()
                    })]
                })]
            }), e.jsx("div", {
                className: "flex flex-row justify-between",
                children: e.jsx("button", {
                    onClick: m,
                    className: "absolute top-0 right-0 p-2 text-coal-light",
                    children: e.jsx(st, {
                        className: "w-5 h-5",
                        "data-sentry-element": "X",
                        "data-sentry-source-file": "WishlistItemCard.tsx"
                    })
                })
            })]
        }, s)
    },
    ji = () => {
        const {
            t: s
        } = te();
        return e.jsx("div", {
            className: "flex h-full w-full flex-col justify-center items-center",
            "data-sentry-component": "ErrorScreen",
            "data-sentry-source-file": "ErrorScreen.tsx",
            children: e.jsxs("div", {
                className: "px-5 flex flex-col items-center",
                children: [e.jsx("img", {
                    src: to,
                    alt: "error-image",
                    height: "300",
                    width: "300"
                }), e.jsx("h1", {
                    className: "text-[1.5rem] font-semibold text-coal-dark mt-2",
                    children: s("error_screen_title")
                }), e.jsx("p", {
                    className: "text-center font-normal text-sm leading-relaxed text-coal-dark mt-2",
                    children: s("error_screen_description")
                }), e.jsx("button", {
                    className: "flex cursor-pointer items-center justify-center mt-4 px-10 py-4 bg-carbon-dark text-white rounded-2xl text-base font-semibold",
                    onClick: () => window.location.reload(),
                    children: s("error_screen_btn_title")
                })]
            })
        })
    },
    bi = () => {
        const {
            state: {
                checkoutLoading: s
            }
        } = ge(), {
            state: {
                user: t
            }
        } = mt(), {
            errorMessage: n,
            isAddItemsWorthDelivery: r,
            isWeightBasedShipping: a,
            isItemNotServicable: o
        } = ss();
        return !n || s || Jt(t) || !(a || r || o) ? null : e.jsx("div", {
            className: "relative z-10 px-3 py-2 text-ouch",
            "data-sentry-component": "OrderSummaryErrorHeader",
            "data-sentry-source-file": "OrderSummaryError.tsx",
            children: e.jsx(Sn, {
                className: "h-4 w-4 text-ouch",
                "data-sentry-element": "AlertTriangle",
                "data-sentry-source-file": "OrderSummaryError.tsx"
            })
        })
    },
    Ca = ({
        customErrorMessage: s,
        rounded: t = "center"
    }) => {
        const {
            state: {
                checkoutLoading: n
            }
        } = ge(), {
            state: {
                user: r
            }
        } = mt(), {
            errorMessage: a
        } = ss();
        return !s && !a || n || Jt(r) ? null : e.jsxs("div", {
            className: "relative text-xs text-coal-dark overflow-hidden w-full",
            "data-sentry-component": "OrderSummaryErrorCustom",
            "data-sentry-source-file": "OrderSummaryError.tsx",
            children: [e.jsx("div", {
                className: Fe("absolute w-full h-full bg-ouch opacity-10", t === "bottom" ? "rounded-b-lg" : "rounded-lg")
            }), e.jsxs("div", {
                className: "flex items-center",
                children: [e.jsx(Is, {
                    className: "ml-2 text-ouch",
                    size: 16,
                    "data-sentry-element": "AlertCircle",
                    "data-sentry-source-file": "OrderSummaryError.tsx"
                }), e.jsx("div", {
                    className: "relative z-10 px-2 py-2 text-ouch text-left",
                    children: s != null ? s : a
                })]
            })]
        })
    },
    Ko = ({
        id: s,
        type: t,
        name: n,
        address: r,
        phone: a,
        email: o,
        isChecked: x = !1,
        selectedAddrId: l,
        handleEditAddress: m
    }) => {
        var Q, Y;
        const {
            state: {
                checkoutId: h
            }
        } = ge(), {
            state: {
                user: c
            },
            actions: {
                setUserData: u
            }
        } = mt(), {
            state: {
                merchant: C
            }
        } = Ye(), {
            etdLoading: y,
            isETDEnabled: g,
            fetchEstimatedTimeDelivery: i,
            ETD_COLOR: j,
            ETD_SHIMMER_COLOR: p,
            etdText: E
        } = Ss(s != null ? s : ""), {
            isNotServicable: _
        } = ss(), {
            t: A
        } = te(), [N, b] = d.useState(!1), [f, w] = d.useState(!1), {
            sendAnalyticsEvent: L
        } = qe(), k = S => {
            S.preventDefault(), S.stopPropagation(), b(!0)
        }, v = S => {
            S.preventDefault(), S.stopPropagation(), m && m(s != null ? s : "")
        }, T = S => ee(void 0, null, function*() {
            S == null || S.preventDefault(), S == null || S.stopPropagation(), F();
            try {
                w(!0), yield cs(`/checkout/${h}/address/${s}`, {}, "KRATOS_PRIVATE");
                const K = yield ot("/attributes/v1/account/addresses");
                w(!1);
                const V = rr(K, "");
                if (l === s) {
                    const oe = V != null && V.length ? V == null ? void 0 : V.find(xe => (xe == null ? void 0 : xe.source) === "SHIPPING_ADDRESS") : {};
                    u({
                        addresses: V,
                        default_shipping_address: oe,
                        default_billing_address: oe
                    })
                } else u({
                    addresses: V
                });
                bs(A("address_delete_success"))
            } catch (K) {
                console.error(K, "error while deleting address"), w(!1), De(A("address_delete_failed"))
            }
        }), F = () => {
            b(!1)
        };
        d.useEffect(() => {
            x && g && i()
        }, [x]);
        const $ = x && ((Q = c == null ? void 0 : c.default_shipping_address) == null ? void 0 : Q.id) === s;
        return e.jsxs(e.Fragment, {
            children: [e.jsxs("div", {
                className: `relative flex cursor-pointer flex-col justify-center gap-2 rounded-2xl border p-3 hover:ring-[2px] ${x?"border-transparent shadow-[0_0_10px_rgba(0,0,0,0.1)] ring-[2px] ring-primary-dark  hover:ring-primary-dark":"border-gray-light hover:ring-gray-light"}`,
                children: [e.jsxs("div", {
                    className: "flex items-center",
                    children: [e.jsx("div", {
                        className: `flex h-4 w-4 min-w-[1rem] items-center justify-center rounded-full border-2 ${x?"border-primary-dark":"border-flo-coal-light"}`,
                        children: e.jsx("span", {
                            className: `h-2 w-2 rounded-full ${x?"bg-primary-dark":"bg-none"}`
                        })
                    }), e.jsx("span", {
                        className: "ml-1.5 w-fit rounded-md bg-gray-lighter p-[4.5px] px-2 text-xs font-medium text-coal-dark",
                        children: Et(t != null ? t : "")
                    }), e.jsxs(To, {
                        "data-sentry-element": "Popover",
                        "data-sentry-source-file": "AddressCard.tsx",
                        children: [e.jsx(Ao, {
                            asChild: !0,
                            "data-sentry-element": "PopoverTrigger",
                            "data-sentry-source-file": "AddressCard.tsx",
                            children: e.jsx("button", {
                                className: "ml-auto flex justify-self-end rounded-[4px] p-[2px] hover:bg-gray-lighter",
                                children: e.jsx(Yr, {
                                    className: "h-4 w-4 outline-none",
                                    "data-sentry-element": "MoreVertical",
                                    "data-sentry-source-file": "AddressCard.tsx"
                                })
                            })
                        }), e.jsx(Oo, {
                            className: "w-[180px] bg-white p-0",
                            align: "end",
                            "data-sentry-element": "PopoverContent",
                            "data-sentry-source-file": "AddressCard.tsx",
                            children: e.jsxs("div", {
                                className: "flex flex-col",
                                children: [e.jsxs("button", {
                                    className: "flex items-center space-x-2 rounded-t p-4 text-sm font-medium text-coal-dark hover:bg-gray-lighter",
                                    onClick: v,
                                    children: [e.jsx(fs, {
                                        className: "h-4 w-4 text-coal-dark ",
                                        "data-sentry-element": "Edit",
                                        "data-sentry-source-file": "AddressCard.tsx"
                                    }), e.jsx("span", {
                                        children: "Edit"
                                    })]
                                }), e.jsxs("button", {
                                    className: "flex items-center space-x-2 rounded-b p-4 text-sm font-medium text-coal-dark hover:bg-gray-lighter",
                                    onClick: k,
                                    children: [e.jsx(na, {
                                        className: "h-4 w-4 text-coal-dark",
                                        "data-sentry-element": "Trash2",
                                        "data-sentry-source-file": "AddressCard.tsx"
                                    }), e.jsx("span", {
                                        children: "Delete"
                                    })]
                                }), e.jsxs("button", {
                                    className: "flex items-center space-x-2 rounded-b p-4 text-sm font-medium text-coal-dark hover:bg-gray-lighter",
                                    onClick: () => {
                                        L({
                                            eventName: q.FLO_CHECKOUT_ISSUE_REPORTED,
                                            eventFor: [Ke.SF_ANALYTICS],
                                            eventType: "click",
                                            metaData: {
                                                issueReason: nr.ADDRESS_ISSUE,
                                                addressData: {
                                                    addressId: s,
                                                    name: n,
                                                    address: r,
                                                    phone: a,
                                                    email: o,
                                                    type: t
                                                }
                                            }
                                        }), window.open("mailto:siddhant.jagtap@shopflo.com?subject=Issue%20with%20shopflo%20checkout&body=I%20want%20to%20report%20an%20issue", "_blank")
                                    },
                                    children: [e.jsx(Sn, {
                                        className: "h-4 w-4 text-coal-dark",
                                        "data-sentry-element": "AlertTriangle",
                                        "data-sentry-source-file": "AddressCard.tsx"
                                    }), e.jsx("span", {
                                        children: "Report an issue"
                                    })]
                                })]
                            })
                        })]
                    })]
                }), e.jsx("div", {
                    children: e.jsx(Qo, {
                        name: n,
                        address: r,
                        phone: a,
                        email: o,
                        isChecked: x,
                        "data-sentry-element": "AddressCardDetails",
                        "data-sentry-source-file": "AddressCard.tsx"
                    })
                }), g && !_ && (y ? e.jsx("div", {
                    className: "mt-2 p-3 rounded-lg",
                    style: {
                        backgroundImage: `linear-gradient(90deg, ${j} 0px, ${p} 40px, ${j} 80px)`,
                        backgroundSize: "275px",
                        animation: "shine 1s infinite linear",
                        height: "38px"
                    }
                }) : E ? e.jsxs("div", {
                    className: "flex items-center mt-2 p-3 rounded-lg gap-2 w-full",
                    style: {
                        backgroundColor: j
                    },
                    children: [e.jsx(kn, {
                        size: 16,
                        color: (Y = C == null ? void 0 : C.colorPallet) == null ? void 0 : Y.primaryColor
                    }), e.jsx("span", {
                        className: "text-xs font-medium text-coal-dark",
                        children: E
                    })]
                }) : null), $ && e.jsx(Ca, {})]
            }), f && e.jsx(St, {}), e.jsx(Fn, {
                popupTitle: A("confirm_address_delete_header"),
                popupBody: A("confirm_address_delete_desc"),
                onClickPrimaryBtn: S => {
                    T(S)
                },
                isOpen: N,
                closePopup: F,
                modalType: "DELETE_ADDRESS_CONFIRMATION",
                "data-sentry-element": "ConfirmationPopup",
                "data-sentry-source-file": "AddressCard.tsx"
            })]
        })
    },
    Qo = Ie.memo(({
        name: s,
        address: t,
        phone: n,
        email: r
    }) => e.jsxs("div", {
        className: "flex flex-col space-y-1.5 text-sm",
        children: [e.jsx("div", {
            className: "font-medium text-coal-dark",
            children: s
        }), e.jsx("div", {
            className: "font-normal text-coal-dark",
            children: t
        }), e.jsx("div", {
            className: "pt-1 text-xs font-normal text-gray-dark",
            children: `${n?ms(n):""}${r?`, ${r}`:""}`
        })]
    })),
    Xo = ({
        setIsOpen: s,
        isPrimaryBtnLoading: t = !1,
        handleEditAddress: n,
        defaultShowAllAddresses: r = !1
    }) => {
        const {
            actions: {
                mutatePayment: a
            }
        } = Re(), [o, x] = d.useState(!1), [l, m] = d.useState(!1), [h, c] = d.useState(""), {
            state: {
                addressConfig: u,
                merchant: C
            }
        } = Ye(), {
            state: {
                isValidating: y
            }
        } = or(), {
            t: g
        } = te(), {
            state: {
                user: i
            },
            actions: {
                setUserAddress: j
            }
        } = mt(), {
            state: {
                checkoutId: p,
                isC2P: E,
                actionUrls: _,
                initialCheckoutStep: A,
                checkoutValidations: N,
                checkoutLoading: b
            },
            actions: {
                setCheckoutModal: f,
                setCheckoutView: w,
                setShippingHandles: L,
                setOOSItems: k,
                updateCheckoutBasedOnCheckoutResponse: v,
                setCheckoutValidations: T
            }
        } = ge(), {
            sendAnalyticsEvent: F
        } = qe(), [$, Q] = d.useState({}), {
            triggerCheckoutErrorInfoToast: Y
        } = ss(), S = d.useMemo(() => {
            var M;
            return (M = i == null ? void 0 : i.addresses) == null ? void 0 : M.filter(se => (se == null ? void 0 : se.source) === "SHIPPING_ADDRESS")
        }, [i == null ? void 0 : i.addresses, l]);
        d.useEffect(() => {
            E || !(i != null && i.uid) || !p || F({
                eventName: q.FLO_ADDRESSES_LIST_LOADED,
                eventType: "load"
            })
        }, [i == null ? void 0 : i.uid, E, p]), d.useEffect(() => {
            var B, M;
            c((M = (B = i == null ? void 0 : i.default_shipping_address) == null ? void 0 : B.id) != null ? M : "")
        }, [i]);
        const K = () => ee(void 0, null, function*() {
                var ue, Te, le, he, ie, fe, Oe, z, I, He, ce, pe, ye, G, W, re, D;
                const B = (ue = i == null ? void 0 : i.addresses) == null ? void 0 : ue.find(O => (O == null ? void 0 : O.id) === h);
                if (!B) {
                    c("ADDRESS_NEW"), f("ADDRESS_NEW");
                    return
                }
                const M = hn(B, u, p);
                if (!M.available) {
                    T(R(P({}, N), {
                        address: {
                            isValid: !1,
                            metadata: {
                                addressId: h,
                                fieldData: M == null ? void 0 : M.errorFieldData
                            }
                        }
                    })), n(h);
                    return
                }
                if (T(R(P({}, N), {
                        address: {
                            isValid: !0
                        }
                    })), !(i != null && i.addresses) && A !== "PAYMENTS") {
                    f("ADDRESS_NEW");
                    return
                }
                if (!h) {
                    De(g("address_not_selected"));
                    return
                }
                let se = {};
                if (!(B != null && B.state_code)) try {
                    const O = yield xa((Te = B == null ? void 0 : B.zip) != null ? Te : ""), de = {
                        account_id: i == null ? void 0 : i.uid,
                        source: pn.SHIPPING_ADDRESS,
                        address_type: (B == null ? void 0 : B.type) || "OTHER",
                        data: {
                            state_code: O == null ? void 0 : O.state_code
                        }
                    };
                    se = P({}, de)
                } catch (O) {
                    console.error(O)
                }
                try {
                    x(!0);
                    const O = yield Kt(`/checkout/${p}/address/${h}`, se, "KRATOS_PRIVATE"), de = yield ot("/gatekeeper/v1/accounts?include=address");
                    V(O, de), x(!1);
                    const H = (he = (le = O == null ? void 0 : O.metadata) == null ? void 0 : le.show_shipping_handle_selector) != null ? he : !1,
                        Ce = (fe = (ie = O == null ? void 0 : O.metadata) == null ? void 0 : ie.available_shipping_handles) != null ? fe : [],
                        Ae = lr((Oe = O == null ? void 0 : O.metadata) == null ? void 0 : Oe.error_responses) || Ce.length === 0;
                    if (((I = (z = O == null ? void 0 : O.metadata) == null ? void 0 : z.error_response) == null ? void 0 : I.code) === "OUT_OF_STOCK") {
                        const ze = (pe = (ce = (He = O == null ? void 0 : O.metadata) == null ? void 0 : He.error_response) == null ? void 0 : ce.metadata) == null ? void 0 : pe.items;
                        k((ye = vs(ze, !0)) != null ? ye : []), f("OOS");
                        return
                    }
                    if (Ae && A !== "PAYMENTS") {
                        ea("flo_add__address");
                        const ze = ir((G = O == null ? void 0 : O.metadata) == null ? void 0 : G.error_responses, {
                            user: i
                        });
                        Y(ze);
                        return
                    }
                    if (Ae && A === "PAYMENTS") {
                        const ze = P({}, $);
                        ze[h] = {
                            hasError: !0,
                            errorMessage: g("pincode_not_serviceable_item_in_cart")
                        }, Q(ze), Y(g("serviceability_error")), ea("flo_add__address")
                    }
                    if (L(Ce), Ce.length > 0 && H && A !== "PAYMENTS") {
                        f("SHIPPING_HANDLES");
                        return
                    }
                    if (A === "PAYMENTS" && (F({
                            eventName: q.FLO_SHIPPING_HANDLES_LOADED,
                            eventType: "load",
                            metaData: {
                                shippingData: {
                                    availableHandles: Ce
                                }
                            }
                        }), a(), Be([`/checkout/${p}/rewards`, vt.KRATOS_PRIVATE]), Be("UPI_INTENT")), (D = (re = (W = O == null ? void 0 : O.metadata) == null ? void 0 : W.action_urls) == null ? void 0 : re[dt.ADDRESS_SELECT]) != null && D.success_url) {
                        gt(O.metadata.action_urls[dt.ADDRESS_SELECT].success_url);
                        return
                    }
                    if (_ && _[dt.ADDRESS_SELECT] && _[dt.ADDRESS_SELECT].success_url) {
                        gt(_[dt.ADDRESS_SELECT].success_url);
                        return
                    }
                    Ae || f("NONE"), w("PAYMENTS")
                } catch (O) {
                    console.error(O), x(!1), _ && _[dt.ADDRESS_SELECT] && _[dt.ADDRESS_SELECT].failure_url && gt(_[dt.ADDRESS_SELECT].failure_url)
                }
            }),
            V = (B, M) => {
                oe(B), xe(M, B), F({
                    eventName: q.FLO_ADDRESS_SELECTED,
                    eventType: "click"
                })
            },
            oe = B => {
                v(B)
            },
            xe = (B, M) => {
                j(M == null ? void 0 : M.addresses, B == null ? void 0 : B.addresses)
            },
            X = () => {
                var M, se;
                return t ? "" : i != null && i.uid && !(i != null && i.addresses) ? g("add_new_address_button") : (se = (M = C == null ? void 0 : C.primaryCtaConfig) == null ? void 0 : M.find(ue => ue.type === "ORDER_SUMMARY")) == null ? void 0 : se.ctaText
            },
            ne = e.jsx("div", {
                className: "space-y-3",
                children: new Array(3).fill(null).map((B, M) => e.jsxs("div", {
                    className: "border-base px-3 py-4 bg-white space-y-2",
                    children: [e.jsx("div", {
                        className: "skeleton-loader h-[16px] rounded-md w-2/5"
                    }), e.jsx("div", {
                        className: "skeleton-loader h-[16px] rounded-md w-full"
                    })]
                }, M))
            }),
            Z = () => {
                const B = l ? "View less" : "View more",
                    M = l ? e.jsx(Hr, {
                        size: 18
                    }) : e.jsx(ha, {
                        size: 18
                    });
                return e.jsx("div", {
                    className: "flex justify-end items-center mt-2",
                    onClick: () => m(se => !se),
                    "data-sentry-component": "getExpandedWidget",
                    "data-sentry-source-file": "AddressModify.tsx",
                    children: e.jsxs("div", {
                        className: "flex justify-center items-center hover:bg-gray-lighter p-2 rounded-md cursor-pointer w-fit space-x-1",
                        children: [e.jsx("span", {
                            className: "text-sm font-medium text-coal-dark",
                            children: B
                        }), M]
                    })
                })
            },
            me = () => {
                const B = l || r ? S : S == null ? void 0 : S.slice(0, 2);
                return B != null && B.length ? e.jsx("ul", {
                    className: Fe("flex flex-col space-y-4"),
                    "data-sentry-component": "getAddressList",
                    "data-sentry-source-file": "AddressModify.tsx",
                    children: B == null ? void 0 : B.map((M, se) => {
                        var ue, Te, le, he, ie;
                        return e.jsx("li", {
                            id: `flo__address__address${se+1}`,
                            onClick: fe => {
                                var Oe;
                                fe.preventDefault(), c((Oe = M == null ? void 0 : M.id) != null ? Oe : "")
                            },
                            children: e.jsx(Ko, R(P({}, M), {
                                setAddress: () => {
                                    var fe;
                                    return c((fe = M == null ? void 0 : M.id) != null ? fe : "")
                                },
                                isChecked: h === (M == null ? void 0 : M.id),
                                selectedAddrId: h,
                                handleEditAddress: n,
                                defaultShippingAddress: (Te = (ue = i == null ? void 0 : i.default_shipping_address) == null ? void 0 : ue.id) != null ? Te : "",
                                defaultBillingAddress: (he = (le = i == null ? void 0 : i.default_billing_address) == null ? void 0 : le.id) != null ? he : "",
                                errorMessage: M != null && M.id && (ie = $[M == null ? void 0 : M.id]) != null && ie.hasError ? $[M == null ? void 0 : M.id].errorMessage : ""
                            }))
                        }, M == null ? void 0 : M.id)
                    })
                }) : e.jsx("div", {
                    className: "flex justify-center items-center w-full py-2 bg-gray-lighter rounded-xl",
                    children: e.jsx("span", {
                        className: "text-sm font-medium text-gray-dark",
                        children: g("no_saved_addresses")
                    })
                })
            };
        return e.jsxs(e.Fragment, {
            children: [e.jsxs(_e, {
                loading: b,
                "data-sentry-element": "AnimateLoading",
                "data-sentry-source-file": "AddressModify.tsx",
                children: [e.jsx(_e.Skeleton, {
                    "data-sentry-element": "unknown",
                    "data-sentry-source-file": "AddressModify.tsx",
                    children: ne
                }), e.jsxs(_e.Content, {
                    "data-sentry-element": "unknown",
                    "data-sentry-source-file": "AddressModify.tsx",
                    children: [me(), !r && S && S.length > 2 && Z()]
                })]
            }), e.jsx(hs, {
                "data-sentry-element": "DialogFooter",
                "data-sentry-source-file": "AddressModify.tsx",
                children: e.jsx(ut, {
                    isDisabled: y,
                    buttonText: X(),
                    onClick: K,
                    height: "h-14",
                    isCheckout: !0,
                    isLoading: t,
                    id: "flo_address__btn",
                    "data-sentry-element": "PrimaryButton",
                    "data-sentry-source-file": "AddressModify.tsx"
                })
            }), o && e.jsx(St, {})]
        })
    },
    $n = Ie.memo(Xo);
var ca = (s => (s.HOME = "HOME", s.WORK = "WORK", s.OTHER = "OTHER", s.FRIENDS_AND_FAMILY = "FRIENDS/FAMILY", s))(ca || {});
const Yn = ({
        addressId: s,
        initialFormErrors: t
    }) => {
        var zt, Tt, ns, Ge, Ks, ks, Ts, bt, wa, va, Sa, ka, Ta, Aa, Oa, Ia, Pa, La, Ba, Ra, Fa, Da, Ua, Ma, Ga, $a, Ya, Ha, Va;
        const [n] = Mt(), {
            t: r
        } = te(), {
            state: {
                user: a
            },
            actions: {
                setUserData: o,
                setUserAddress: x
            }
        } = mt(), {
            state: {
                checkoutId: l,
                isTwoStepCheckout: m,
                checkoutToken: h,
                shopifySessionId: c,
                originUrl: u,
                checkoutUIMetadata: C,
                actionUrls: y,
                initialCheckoutStep: g,
                checkoutValidations: i,
                uid: j
            },
            actions: {
                setShippingHandles: p,
                setCheckoutView: E,
                updateCheckoutBasedOnCheckoutResponse: _,
                setCheckoutModal: A,
                setOOSItems: N,
                setCheckoutValidations: b,
                setEtdText: f
            }
        } = ge(), {
            state: {
                merchant: w
            }
        } = Ye(), {
            actions: {
                mutatePayment: L
            }
        } = Re(), {
            generateReCaptchaToken: k
        } = _n(), {
            isETDEnabled: v
        } = Ss(s), {
            sendAnalyticsEvent: T
        } = qe(), [F, $] = d.useState(!0), [Q, Y] = d.useState(!1), [S, K] = d.useState(!1), [V, oe] = d.useState([]), [xe, X] = d.useState(!1), [ne, Z] = d.useState(!1), [me, B] = d.useState(!1), [M, se] = d.useState([]), [ue, Te] = d.useState([]), [le, he] = d.useState({
            status: !1,
            message: ""
        }), [ie, fe] = d.useState([]), [Oe, z] = d.useState(!1), I = d.useMemo(() => w ? cr(ie, ue, V, Oe) : {}, [ie, V, w, ue, Oe]), He = m ? {
            zip: (Tt = (zt = a == null ? void 0 : a.default_shipping_address) == null ? void 0 : zt.zip) != null ? Tt : "",
            address1: (Ge = (ns = a == null ? void 0 : a.default_shipping_address) == null ? void 0 : ns.address1) != null ? Ge : "",
            address2: (ks = (Ks = a == null ? void 0 : a.default_shipping_address) == null ? void 0 : Ks.address2) != null ? ks : "",
            name: Et((bt = (Ts = a == null ? void 0 : a.default_shipping_address) == null ? void 0 : Ts.name) != null ? bt : ""),
            phone: (va = (wa = a == null ? void 0 : a.default_shipping_address) == null ? void 0 : wa.phone) != null ? va : "",
            city: (ka = (Sa = a == null ? void 0 : a.default_shipping_address) == null ? void 0 : Sa.city) != null ? ka : "",
            state: (Aa = (Ta = a == null ? void 0 : a.default_shipping_address) == null ? void 0 : Ta.state) != null ? Aa : "",
            state_code: (Ia = (Oa = a == null ? void 0 : a.default_shipping_address) == null ? void 0 : Oa.state_code) != null ? Ia : "",
            country: (La = (Pa = a == null ? void 0 : a.default_shipping_address) == null ? void 0 : Pa.country) != null ? La : "India",
            country_code: (Ra = (Ba = a == null ? void 0 : a.default_shipping_address) == null ? void 0 : Ba.country_code) != null ? Ra : "IN",
            type: "Home",
            email: (Ua = (Da = (Fa = a == null ? void 0 : a.default_shipping_address) == null ? void 0 : Fa.email) == null ? void 0 : Da.trim()) != null ? Ua : "",
            alternate_number: (Ga = (Ma = a == null ? void 0 : a.default_shipping_address) == null ? void 0 : Ma.alternate_number) != null ? Ga : ""
        } : {
            zip: "",
            address1: "",
            address2: "",
            name: Et(($a = a == null ? void 0 : a.name) != null ? $a : ""),
            phone: (Ya = a == null ? void 0 : a.phone) != null ? Ya : "",
            city: "",
            state: "",
            state_code: "",
            country: "India",
            country_code: "IN",
            type: "Home",
            email: (Va = (Ha = a == null ? void 0 : a.email) == null ? void 0 : Ha.trim()) != null ? Va : "",
            alternate_number: ""
        }, {
            handleSubmit: ce,
            inputProps: pe,
            setValues: ye,
            setErrors: G,
            setValueOf: W,
            handleFieldChange: re,
            state: {
                values: D,
                errors: O,
                validations: de
            }
        } = as({
            initialState: He,
            validationSchema: I,
            initialErrorState: t
        }), H = [{
            value: "HOME",
            id: "home_opt",
            label: r("home"),
            isDisabled: !!(a != null && a.hasHomeAddr),
            icon: e.jsx(Vr, {
                size: 18
            })
        }, {
            value: "FRIENDS/FAMILY",
            id: "friends_and_family_opt",
            label: r("friends_slash_family"),
            icon: e.jsx(qr, {
                size: 18
            })
        }, {
            value: "WORK",
            id: "work_opt",
            label: r("work"),
            isDisabled: !!(a != null && a.hasWorkAddr),
            icon: e.jsx(zr, {
                size: 18
            })
        }, {
            value: "OTHER",
            id: "other_opt",
            label: r("other"),
            isDisabled: !1,
            icon: e.jsx(_a, {
                size: 18
            })
        }];
        d.useEffect(() => {
            T({
                eventName: !s || s === "ADDRESS_NEW" ? q.FLO_ADDRESS_NEW_FORM_LOADED : q.FLO_ADDRESS_EDIT_FORM_LOADED,
                eventType: "load"
            }), F && !m && (Me(), xt("IN"))
        }, []), d.useEffect(() => {
            if (!s || s === "ADDRESS_NEW") {
                $(!0);
                return
            }
            $(!1), Ae(s)
        }, [s]), d.useEffect(() => {
            var ae;
            if ((D == null ? void 0 : D.country_code) === "IN" && (D == null ? void 0 : D.phone) !== "" && ((ae = D == null ? void 0 : D.phone) == null ? void 0 : ae.substring(0, 3)) !== "+91") {
                z(!0);
                return
            }
            z(!1)
        }, [D == null ? void 0 : D.country_code, D == null ? void 0 : D.phone]);
        const Ce = d.useCallback(() => {
                var Ue;
                const ae = (Ue = C == null ? void 0 : C.bannerConfig) == null ? void 0 : Ue.filter(ke => ke.type === "ORDER_SUMMARY" && (ke == null ? void 0 : ke.enabled));
                return !!(ae != null && ae.length)
            }, [C]),
            Ae = ae => ee(void 0, null, function*() {
                var Ue, ke, rt, Ve, it, Nt, Xe, We, $e, At, Ot, It, Pt, Lt, Bt, Rt, Ft, ft, ht, pt, Gt, ct, $t, Yt, we, et, _t, rs, Xt, Ht, ps, _s;
                if (ae) try {
                    Y(!0);
                    const U = yield ot(`/attributes/v1/address/${ae}`), gs = [xt((ke = (Ue = U == null ? void 0 : U.data) == null ? void 0 : Ue.country_code) != null ? ke : "IN", !!t)];
                    !((rt = U == null ? void 0 : U.data) != null && rt.country_code) && ((it = (Ve = U == null ? void 0 : U.data) == null ? void 0 : Ve.country) == null ? void 0 : it.toUpperCase()) === "INDIA" && (U.data.country_code = "IN"), ((Nt = U == null ? void 0 : U.data) == null ? void 0 : Nt.country_code) !== "IN" && gs.push(Me()), ((Xe = U == null ? void 0 : U.data) == null ? void 0 : Xe.country_code) === "IN" && !(($e = (We = U == null ? void 0 : U.data) == null ? void 0 : We.phone) != null && $e.startsWith("+")) && ((At = U == null ? void 0 : U.data) != null && At.phone) && (U.data.phone = `+91${(Ot=U==null?void 0:U.data)==null?void 0:Ot.phone}`), yield Promise.all(gs);
                    const As = Object.keys(U.data).filter(Os => !!U.data[Os]);
                    oe(As);
                    let Wt = (It = U == null ? void 0 : U.data) != null && It.phone ? (Pt = U == null ? void 0 : U.data) == null ? void 0 : Pt.phone : a == null ? void 0 : a.phone;
                    Wt = Wt == null ? void 0 : Wt.replaceAll(" ", ""), ye({
                        zip: (Lt = U == null ? void 0 : U.data) == null ? void 0 : Lt.zip,
                        address1: (Bt = U == null ? void 0 : U.data) == null ? void 0 : Bt.address1,
                        address2: (Rt = U == null ? void 0 : U.data) == null ? void 0 : Rt.address2,
                        name: Et((ft = (Ft = U == null ? void 0 : U.data) == null ? void 0 : Ft.name) != null ? ft : ""),
                        phone: Wt,
                        city: (ht = U == null ? void 0 : U.data) == null ? void 0 : ht.city,
                        state: Et((Gt = (pt = U == null ? void 0 : U.data) == null ? void 0 : pt.state) != null ? Gt : ""),
                        state_code: (ct = U == null ? void 0 : U.data) == null ? void 0 : ct.state_code,
                        country: ($t = U == null ? void 0 : U.data) == null ? void 0 : $t.country,
                        country_code: (Yt = U == null ? void 0 : U.data) == null ? void 0 : Yt.country_code,
                        type: ((we = U == null ? void 0 : U.address_type) == null ? void 0 : we.trim()) || "Other",
                        email: (et = U == null ? void 0 : U.data) != null && et.email ? (rs = (_t = U == null ? void 0 : U.data) == null ? void 0 : _t.email) == null ? void 0 : rs.trim() : (Xt = a == null ? void 0 : a.email) == null ? void 0 : Xt.trim(),
                        alternate_number: (ps = (Ht = U == null ? void 0 : U.data) == null ? void 0 : Ht.alternate_number) == null ? void 0 : ps.replaceAll(" ", "")
                    }), Y(!1), Object.values(ca).includes((_s = U == null ? void 0 : U.address_type) == null ? void 0 : _s.toUpperCase()) || X(!0)
                } catch (U) {
                    Y(!1), console.error(U)
                }
            }),
            ze = ae => ee(void 0, null, function*() {
                var rt;
                const Ue = D == null ? void 0 : D.country_code;
                if (Ue === "IN" && /\D/.test(ae)) return;
                re(be.zip, ae);
                let ke = {};
                try {
                    ae && Ue === "IN" && (ae == null ? void 0 : ae.length) === 6 && (ke = yield xa(ae), he({
                        status: !1,
                        message: r("valid_pincode")
                    }), ye(Ve => R(P({}, Ve), {
                        city: Et(ke.district),
                        state: Et(ke.state),
                        state_code: ke.state_code,
                        country: Et(ke.country)
                    })), K(!0)), G(Ve => R(P({}, Ve), {
                        city: R(P({}, Ve.city), {
                            status: !1
                        }),
                        state: R(P({}, Ve.state), {
                            status: !1
                        }),
                        country: R(P({}, Ve.country), {
                            status: !1
                        }),
                        state_code: R(P({}, Ve.state_code), {
                            status: !1
                        })
                    }))
                } catch (Ve) {
                    if ((rt = w == null ? void 0 : w.addressConfig) != null && rt.disable_unavailable_pincode) {
                        he({
                            status: !0,
                            message: r("valid_pincode")
                        });
                        return
                    }
                    if (Jt(ke)) {
                        K(!1), ye(it => R(P({}, it), {
                            state: "",
                            state_code: ""
                        }));
                        return
                    }
                }
            }),
            Le = () => ee(void 0, null, function*() {
                var Ue, ke, rt, Ve, it, Nt, Xe, We, $e, At, Ot, It, Pt, Lt, Bt, Rt, Ft, ft, ht, pt, Gt, ct, $t, Yt;
                if (le != null && le.status) return;
                const ae = {
                    source: pn.SHIPPING_ADDRESS,
                    address_type: ((Ue = D.type) == null ? void 0 : Ue.trim()) || "OTHER",
                    address_data: R(P({}, D), {
                        address1: (rt = (ke = D.address1) == null ? void 0 : ke.replace(/<[^>]*>?/gm, "")) == null ? void 0 : rt.trim(),
                        address2: (it = (Ve = D.address2) == null ? void 0 : Ve.replace(/<[^>]*>?/gm, "")) == null ? void 0 : it.trim(),
                        name: D.name.trim(),
                        city: D.city.trim(),
                        email: (Nt = D.email) == null ? void 0 : Nt.trim(),
                        zip: (Xe = D.zip) == null ? void 0 : Xe.trim()
                    })
                };
                try {
                    Y(!0);
                    let we;
                    F ? we = yield wt(`/checkout/${l}/address`, ae, "KRATOS_PRIVATE"): s ? we = yield Kt(`/checkout/${l}/address/${s}`, ae, "KRATOS_PRIVATE"): (E("ADDRESS_LIST"), Y(!1));
                    const et = (We = we == null ? void 0 : we.addresses) == null ? void 0 : We.shipping_address_id;
                    if (v && et) try {
                        const Ht = yield ot(`/checkout/${j}/address/${et}/etd`, "KRATOS_PRIVATE");
                        f({
                            addressId: et,
                            text: Nn(Ht)
                        })
                    } catch (Ht) {
                        console.error("Etd fetch failed")
                    }
                    const _t = yield ot("/gatekeeper/v1/accounts?include=address");
                    if (Se(we, _t), Y(!1), ((At = ($e = we == null ? void 0 : we.metadata) == null ? void 0 : $e.error_response) == null ? void 0 : At.code) === "OUT_OF_STOCK") {
                        const Ht = (Pt = (It = (Ot = we == null ? void 0 : we.metadata) == null ? void 0 : Ot.error_response) == null ? void 0 : It.metadata) == null ? void 0 : Pt.items;
                        N((Lt = vs(Ht, !0)) != null ? Lt : []), A("OOS");
                        return
                    }
                    const rs = (Rt = (Bt = we == null ? void 0 : we.metadata) == null ? void 0 : Bt.show_shipping_handle_selector) != null ? Rt : !1,
                        Xt = (ft = (Ft = we == null ? void 0 : we.metadata) == null ? void 0 : Ft.available_shipping_handles) != null ? ft : [];
                    if (p(Xt), Xt.length > 0 && rs && g !== "PAYMENTS") {
                        A("SHIPPING_HANDLES");
                        return
                    }
                    if ((Gt = (pt = (ht = we == null ? void 0 : we.metadata) == null ? void 0 : ht.action_urls) == null ? void 0 : pt[dt.ADDRESS_SELECT]) != null && Gt.success_url) {
                        gt(we.metadata.action_urls[dt.ADDRESS_SELECT].success_url);
                        return
                    }
                    if (y && y[dt.ADDRESS_SELECT] && y[dt.ADDRESS_SELECT].success_url) {
                        gt(y[dt.ADDRESS_SELECT].success_url);
                        return
                    }
                    g === "PAYMENTS" && (A("NONE"), b(R(P({}, i), {
                        address: {
                            isValid: !0
                        }
                    })), L(), Be([`/checkout/${l}/rewards`, vt.KRATOS_PRIVATE])), A("NONE"), E("PAYMENTS")
                } catch (we) {
                    const et = (Yt = ($t = (ct = we == null ? void 0 : we.response) == null ? void 0 : ct.data) == null ? void 0 : $t.error) == null ? void 0 : Yt.message;
                    if (et === "Invalid phone number" || et === "Please enter a valid phone number to proceed") {
                        G(_t => R(P({}, _t), {
                            phone: {
                                status: !0,
                                message: r("invalid_phone")
                            }
                        })), Y(!1);
                        return
                    }
                    if (et === "Please enter a valid E-mail to proceed") {
                        G(_t => R(P({}, _t), {
                            email: {
                                status: !0,
                                message: r("valid_email")
                            }
                        })), Y(!1);
                        return
                    }
                    De(et != null ? et : r("add_address_failed")), E("ADDRESS_LIST"), Y(!1), y && y[dt.ADDRESS_SELECT] && y[dt.ADDRESS_SELECT].failure_url && gt(y[dt.ADDRESS_SELECT].failure_url)
                }
            }),
            J = () => ee(void 0, null, function*() {
                var rt, Ve, it, Nt, Xe, We, $e, At, Ot, It, Pt, Lt, Bt, Rt, Ft;
                let ae, Ue, ke;
                try {
                    Y(!0);
                    let ft = {
                        identifier: gn(D == null ? void 0 : D.phone),
                        merchantId: (rt = w == null ? void 0 : w.merchantId) != null ? rt : "",
                        skipVerification: !0,
                        domain: Vs() ? u : (Ve = ta) == null ? void 0 : Ve.CHECKOUT_HOST
                    };
                    const ht = yield k("login"), pt = yield yn(ft, {
                        context: "AUTH"
                    }, ht);
                    if (ae = (it = pt.token) == null ? void 0 : it.access_token, Ue = pt == null ? void 0 : pt.access_token_expires_at, Fo.set(ta.TWO_STEP_AUTH_COOKIE_CLIENT, ae, {
                            expires: Ue,
                            sameSite: "none",
                            secure: !0
                        }), T({
                            eventName: q.FLO_GUEST_LOGIN,
                            eventFor: [Ke.SF_ANALYTICS],
                            eventType: "flo_action",
                            metaData: {
                                merchantId: w == null ? void 0 : w.merchantId,
                                checkoutToken: h,
                                checkoutId: l,
                                shopifySessionId: c,
                                userData: {
                                    type: q.FLO_GUEST_LOGIN
                                }
                            }
                        }), a != null && a.uid) {
                        const et = n.get("tokenId"),
                            _t = yield wt(`/checkout/v2/checkout-tokens/${et}/checkout`, {});
                        ke = yield Kt("/checkout/v2/checkout", {
                            uid: (Nt = _t == null ? void 0 : _t.checkout) == null ? void 0 : Nt.uid
                        })
                    } else ke = yield Kt("/checkout/v2/checkout", {
                        uid: l
                    });
                    const Gt = {
                            account_id: (Xe = ke == null ? void 0 : ke.checkout) == null ? void 0 : Xe.customer_id,
                            address_type: ((We = D.type) == null ? void 0 : We.trim()) || "OTHERS",
                            data: R(P({}, D), {
                                address1: ($e = D.address1) == null ? void 0 : $e.trim(),
                                address2: (At = D.address2) == null ? void 0 : At.trim(),
                                name: D.name.trim(),
                                city: D.city.trim(),
                                email: (Ot = D.email) == null ? void 0 : Ot.trim()
                            })
                        },
                        ct = yield wt(`/checkout/${l}/address`, Gt, "KRATOS_PRIVATE"), $t = yield ot("/gatekeeper/v1/accounts?include=address");
                    Se(ct, $t), Y(!1), T({
                        eventName: q.FLO_AUTH_PHONE_ENTERED,
                        eventType: "click",
                        metaData: {
                            userType: "guest"
                        }
                    });
                    const Yt = (Pt = (It = ct == null ? void 0 : ct.metadata) == null ? void 0 : It.show_shipping_handle_selector) != null ? Pt : !1,
                        we = (Bt = (Lt = ct == null ? void 0 : ct.metadata) == null ? void 0 : Lt.available_shipping_handles) != null ? Bt : [];
                    if (p(we), we.length > 0 && Yt && g !== "PAYMENTS") {
                        A("SHIPPING_HANDLES");
                        return
                    }
                    g === "PAYMENTS" && A("NONE"), E("PAYMENTS")
                } catch (ft) {
                    const ht = (Ft = (Rt = ft == null ? void 0 : ft.response) == null ? void 0 : Rt.data) == null ? void 0 : Ft.error;
                    if (ht === "Please enter a valid E-mail to proceed") {
                        G(pt => R(P({}, pt), {
                            email: {
                                status: !0,
                                message: r("valid_email")
                            }
                        })), Y(!1);
                        return
                    }
                    De(ht != null ? ht : r("add_address_failed")), Y(!1), console.error(ft)
                }
            }),
            Se = (ae, Ue) => {
                Ne(ae), je(Ue, ae), T({
                    eventName: F ? q.FLO_ADDRESS_NEW_FORM_SUBMITTED : q.FLO_ADDRESS_EDIT_FORM_SUBMITTED,
                    eventType: "click"
                })
            },
            Ne = ae => {
                _(ae)
            },
            je = (ae, Ue) => {
                var ke;
                x(Ue == null ? void 0 : Ue.addresses, ae == null ? void 0 : ae.addresses), mr(a == null ? void 0 : a.uid, (ke = w == null ? void 0 : w.merchantId) != null ? ke : "", l)
            },
            Me = () => ee(void 0, null, function*() {
                try {
                    Y(!0);
                    const ae = yield ot("/v1/countries", "CHECKOUT_PUBLIC");
                    if (!(ae != null && ae.length)) return;
                    se(ae)
                } catch (ae) {
                    console.error(ae)
                } finally {
                    Y(!1)
                }
            }),
            xt = (ae, Ue) => ee(void 0, null, function*() {
                var ke, rt, Ve, it, Nt;
                if (ae) try {
                    Y(!0);
                    const Xe = yield Promise.allSettled([dr(ae), ur(ae, (ke = w == null ? void 0 : w.merchantId) != null ? ke : "")]);
                    if (!Xe.length) return;
                    if (((rt = Xe[1]) == null ? void 0 : rt.status) === "fulfilled") {
                        const We = (it = (Ve = Xe[1].value) == null ? void 0 : Ve.config) == null ? void 0 : it.fields;
                        fe(We)
                    }
                    if (((Nt = Xe[0]) == null ? void 0 : Nt.status) === "fulfilled") {
                        const We = Xe[0].value;
                        if (ye($e => R(P({}, $e), {
                                zip: "",
                                address1: "",
                                address2: "",
                                city: "",
                                state: "",
                                state_code: ""
                            })), G($e => P(P({}, $e), Ue ? t : {
                                zip: R(P({}, $e.zip), {
                                    status: !1
                                }),
                                address1: R(P({}, $e.address1), {
                                    status: !1
                                }),
                                address2: R(P({}, $e.address2), {
                                    status: !1
                                }),
                                city: R(P({}, $e.city), {
                                    status: !1
                                }),
                                state: R(P({}, $e.state), {
                                    status: !1
                                }),
                                country: R(P({}, $e.country), {
                                    status: !1
                                }),
                                state_code: R(P({}, $e.state_code), {
                                    status: !1
                                })
                            })), K(!1), !(We != null && We.length)) {
                            Te([]), ye($e => R(P({}, $e), {
                                state_code: " "
                            })), Y(!1);
                            return
                        }
                        We.unshift({
                            code: "",
                            name: ""
                        }), Te(We)
                    }
                } catch (Xe) {
                    console.error(Xe)
                } finally {
                    Y(!1)
                }
            }),
            at = d.useCallback(() => {
                var ae;
                return le.status ? le : (ae = O.zip) != null && ae.status ? O.zip : {
                    status: !1
                }
            }, [le, O]),
            nt = ({
                title: ae
            }) => e.jsx("div", {
                className: "flex items-center justify-start w-full bg-gray-lightest px-4 min-h-[30px] py-2 text-xs text-coal-light font-medium leading-[8px]",
                "data-sentry-component": "addressTitle",
                "data-sentry-source-file": "AddressForm.tsx",
                children: ae.toUpperCase()
            }),
            yt = () => {
                var ae, Ue, ke, rt, Ve, it, Nt, Xe, We, $e, At, Ot, It, Pt, Lt, Bt, Rt, Ft, ft, ht, pt, Gt, ct, $t, Yt, we, et, _t, rs, Xt, Ht, ps, _s, U, gs, As, Wt, Os;
                return e.jsxs("form", {
                    className: "flex flex-col space-y-4 pt-4",
                    id: "address-form",
                    onSubmit: ce(m ? J : Le),
                    "data-sentry-component": "renderAddressForm",
                    "data-sentry-source-file": "AddressForm.tsx",
                    children: [nt({
                        title: r("delivery_address")
                    }), e.jsxs("fieldset", {
                        className: "flex flex-col space-y-2 px-4",
                        children: [((ae = w == null ? void 0 : w.addressConfig) == null ? void 0 : ae.isInternationalAddressEnabled) && e.jsx(la, R(P({
                            label: r("country_region")
                        }, pe(be.country_code, {
                            onChange: ve => {
                                var Zt, ys, Ns, qa;
                                W("country_code", (Zt = ve == null ? void 0 : ve.target) == null ? void 0 : Zt.value), W("country", (Ns = (ys = ve == null ? void 0 : ve.target) == null ? void 0 : ys.selectedOptions[0]) == null ? void 0 : Ns.text), xt((qa = ve == null ? void 0 : ve.target) == null ? void 0 : qa.value)
                            }
                        })), {
                            autoComplete: "shipping country",
                            options: M,
                            optionKey: "code",
                            optionValue: "name",
                            required: !!((Ue = I == null ? void 0 : I.country) != null && Ue.required),
                            error: O.country_code
                        })), !!(I != null && I.address1) && e.jsx(Fs, R(P({
                            label: (ke = I == null ? void 0 : I.address1) == null ? void 0 : ke.label,
                            placeholder: r("address1")
                        }, pe(be.address1)), {
                            filled: !!((rt = D.address1) != null && rt.length),
                            autoComplete: I != null && I.address1 ? "address-line1" : "shipping street-address",
                            error: O.address1,
                            required: !!((Ve = I == null ? void 0 : I.address1) != null && Ve.required),
                            showSuccessIcon: de == null ? void 0 : de.address1
                        })), !!(I != null && I.address2) && e.jsx(Fs, R(P({
                            label: (it = I == null ? void 0 : I.address2) == null ? void 0 : it.label
                        }, pe(be.address2)), {
                            filled: !!((Nt = D.address2) != null && Nt.length),
                            autoComplete: I != null && I.address2 ? "address-line2" : "shipping street-address",
                            error: O.address2,
                            required: !!((Xe = I == null ? void 0 : I.address2) != null && Xe.required),
                            showSuccessIcon: de == null ? void 0 : de.address2
                        })), !!(I != null && I.zip) && e.jsx(Qe, R(P({
                            type: D.country_code === "IN" ? "tel" : "text",
                            label: r("address_pincode"),
                            maxLength: D.country_code === "IN" ? 6 : 25,
                            filled: !!((We = D.zip) != null && We.length),
                            autoComplete: "none"
                        }, pe(be.zip, {
                            onChange: ve => {
                                ze(ve.target.value)
                            }
                        })), {
                            error: at(),
                            required: !!(($e = I == null ? void 0 : I.zip) != null && $e.required),
                            showSuccessIcon: de == null ? void 0 : de.zip
                        })), e.jsxs("div", {
                            className: "flex w-full flex-row items-start space-x-2",
                            children: [!!(I != null && I.city) && e.jsx(Qe, R(P({
                                type: "text",
                                label: r("address_city")
                            }, pe(be.city)), {
                                filled: !!((At = D.city) != null && At.length),
                                autoComplete: "shipping address-level2",
                                error: O.city,
                                required: !!((Ot = I == null ? void 0 : I.city) != null && Ot.required),
                                showSuccessIcon: de == null ? void 0 : de.city
                            })), !!(I != null && I.state) && (ue != null && ue.length ? e.jsx(la, R(P({
                                label: r("address_state")
                            }, pe(be.state_code, {
                                onChange: ve => {
                                    var Zt, ys, Ns;
                                    W("state_code", (Zt = ve == null ? void 0 : ve.target) == null ? void 0 : Zt.value), W("state", (Ns = (ys = ve == null ? void 0 : ve.target) == null ? void 0 : ys.selectedOptions[0]) == null ? void 0 : Ns.text), O.state && delete O.state
                                }
                            })), {
                                autoComplete: "shipping address-level1",
                                disabled: S,
                                options: ue,
                                optionKey: "code",
                                optionValue: "name",
                                required: !!((It = I == null ? void 0 : I.state) != null && It.required),
                                error: O.state
                            })) : e.jsx(Qe, R(P({
                                type: "text",
                                label: r("address_state")
                            }, pe(be.state)), {
                                filled: !!((Pt = D.state) != null && Pt.length),
                                autoComplete: "shipping address-level1",
                                error: O.state,
                                required: !!((Lt = I == null ? void 0 : I.state) != null && Lt.required),
                                showSuccessIcon: de == null ? void 0 : de.state
                            })))]
                        }), !!(I != null && I.alternate_number && Oe) && e.jsxs("div", {
                            id: `flo-field-${be.alternate_number}`,
                            className: "relative flex flex-col",
                            children: [e.jsx("label", {
                                htmlFor: "alternate_number",
                                className: "required-field mb-0.5 text-xxs uppercase text-gray-dark",
                                children: (Bt = I == null ? void 0 : I.alternate_number) == null ? void 0 : Bt.label
                            }), e.jsx(ia, R(P({
                                international: !0,
                                countryCallingCodeEditable: !1,
                                defaultCountry: "IN",
                                country: "IN",
                                countries: ["IN"],
                                className: `placeholder-sm peer h-14 w-full appearance-none rounded-xl border px-3 text-base placeholder-transparent focus:border-0 focus:outline-none focus:ring-1 focus-visible:outline-none ${O.alternate_number?"border-ouch":"border-gray-light"} ${(Rt=D.alternate_number)!=null&&Rt.length&&!((Ft=O==null?void 0:O.alternate_number)!=null&&Ft.status)?"border-[#D5E7DB]":""} ${me&&"border-[1px] !border-primary-dark px-[12px] outline-none ring-[2px] ring-primary-light"}`,
                                placeholder: r("phone_number")
                            }, pe(be.alternate_number, {
                                onChange: ve => {
                                    re(be.alternate_number, ve)
                                },
                                onBlur: ve => B(!1)
                            })), {
                                onFocus: ve => B(!0),
                                error: (ft = O.alternate_number) == null ? void 0 : ft.status,
                                limitMaxLength: !0
                            })), e.jsx("div", {
                                className: "absolute right-3 top-9",
                                children: (de == null ? void 0 : de.phone) && e.jsx("img", {
                                    src: Ja,
                                    className: "h-4 w-4",
                                    alt: "Check Icon"
                                })
                            }), ((ht = O.alternate_number) == null ? void 0 : ht.status) && O.alternate_number.message && e.jsxs("div", {
                                className: "mt-1 flex items-center gap-0.5 ",
                                children: [e.jsx(Is, {
                                    className: "-mt-[1px] h-3 w-3 cursor-pointer text-ouch"
                                }), e.jsx("label", {
                                    htmlFor: "alternate_number",
                                    className: "bg-transparent text-xs font-normal text-ouch transition-all peer-focus:hidden",
                                    children: (pt = O.alternate_number) == null ? void 0 : pt.message
                                })]
                            })]
                        })]
                    }), nt({
                        title: r("recipient")
                    }), e.jsx("fieldset", {
                        className: "px-4 mt-2",
                        children: e.jsxs("div", {
                            className: "flex flex-col space-y-2",
                            children: [!!(I != null && I.phone) && e.jsxs("div", {
                                id: `flo-field-${be.phone}`,
                                className: "relative flex flex-col",
                                children: [e.jsx("label", {
                                    htmlFor: be.phone,
                                    className: "required-field mb-0.5 text-xxs uppercase text-gray-dark",
                                    children: r("phone_number")
                                }), e.jsx(ia, R(P({
                                    international: !0,
                                    countryCallingCodeEditable: !1,
                                    defaultCountry: "IN",
                                    country: D == null ? void 0 : D.country_code,
                                    countries: (Gt = w == null ? void 0 : w.addressConfig) == null ? void 0 : Gt.enabledCountries,
                                    className: `placeholder-sm peer h-14 w-full appearance-none rounded-xl border px-3 text-base placeholder-transparent focus:border-0 focus:outline-none focus:ring-1 focus-visible:outline-none ${O.phone?"border-ouch":"border-gray-light"} ${(ct=D.phone)!=null&&ct.length&&!(($t=O==null?void 0:O.phone)!=null&&$t.status)?"border-[#D5E7DB]":""} ${ne&&"border-[1px] !border-primary-dark px-[12px] outline-none ring-[2px] ring-primary-light"}`,
                                    placeholder: r("phone_number")
                                }, pe(be.phone, {
                                    onChange: ve => {
                                        re(be.phone, ve)
                                    },
                                    onBlur: ve => Z(!1)
                                })), {
                                    onFocus: ve => Z(!0),
                                    error: (Yt = O.phone) == null ? void 0 : Yt.status,
                                    limitMaxLength: !0
                                })), e.jsx("div", {
                                    className: "absolute right-3 top-9",
                                    children: (de == null ? void 0 : de.phone) && e.jsx("img", {
                                        src: Ja,
                                        className: "h-4 w-4",
                                        alt: "Check Icon"
                                    })
                                }), ((we = O.phone) == null ? void 0 : we.status) && O.phone.message && e.jsxs("div", {
                                    className: "mt-1 flex items-center gap-0.5 ",
                                    children: [e.jsx(Is, {
                                        className: "-mt-[1px] h-3 w-3 cursor-pointer text-ouch"
                                    }), e.jsx("label", {
                                        htmlFor: "phone",
                                        className: "bg-transparent text-xs font-normal text-ouch transition-all peer-focus:hidden",
                                        children: (et = O.phone) == null ? void 0 : et.message
                                    })]
                                })]
                            }), !!(I != null && I.name) && e.jsx(Qe, R(P({
                                type: "text",
                                label: r("full_name"),
                                filled: !!((_t = D.name) != null && _t.length),
                                autoComplete: "name"
                            }, pe(be.name)), {
                                error: O.name,
                                required: !!((rs = I == null ? void 0 : I.name) != null && rs.required),
                                showSuccessIcon: de == null ? void 0 : de.name
                            })), !!(I != null && I.email) && e.jsx(Qe, R(P({
                                type: "text",
                                label: r("email")
                            }, pe(be.email)), {
                                filled: !!((Xt = D.email) != null && Xt.length),
                                autoComplete: "email",
                                error: O.email,
                                required: !!((Ht = I == null ? void 0 : I.email) != null && Ht.required),
                                showSuccessIcon: de == null ? void 0 : de.email
                            }))]
                        })
                    }), !m && e.jsx("fieldset", {
                        className: "mx-4",
                        children: e.jsx("div", {
                            className: "flex flex-col space-y-4",
                            children: xe ? e.jsxs("div", {
                                className: "relative w-full",
                                children: [F ? e.jsx("input", R(P({
                                    className: `placeholder-sm peer h-12 w-full appearance-none rounded-xl border bg-white px-3 text-base focus:border focus:border-primary-dark focus:px-4 focus:outline-none focus:ring-2 focus:ring-primary-light ${O!=null&&O.type&&((ps=O==null?void 0:O.type)!=null&&ps.status)&&((_s=O==null?void 0:O.type)!=null&&_s.message)?"border-ouch":""}`,
                                    type: "text",
                                    maxLength: 25,
                                    autoFocus: F
                                }, pe(be.type)), {
                                    placeholder: "ex: Simpson's Home"
                                })) : e.jsx("input", R(P({
                                    className: `placeholder-sm peer h-12 w-full appearance-none rounded-xl border bg-white px-3 text-base focus:border focus:border-primary-dark focus:px-4 focus:outline-none focus:ring-2 focus:ring-primary-light ${O!=null&&O.type&&((U=O==null?void 0:O.type)!=null&&U.status)&&((gs=O==null?void 0:O.type)!=null&&gs.message)?"border-ouch":""}`,
                                    type: "text",
                                    maxLength: 25,
                                    autoFocus: !1
                                }, pe(be.type)), {
                                    placeholder: "ex: Simpson's Home"
                                })), e.jsx(st, {
                                    className: "absolute right-4 top-3 h-6 w-6 cursor-pointer text-coal-dark",
                                    onClick: () => {
                                        D != null && D.type || W("type", "Other"), X(!1)
                                    }
                                }), (O == null ? void 0 : O.type) && !!((As = O == null ? void 0 : O.type) != null && As.status) && !!((Wt = O == null ? void 0 : O.type) != null && Wt.message) && e.jsxs("div", {
                                    className: "mt-1 flex items-center gap-1 ",
                                    children: [e.jsx(Is, {
                                        className: "-mt-[1px] h-3 w-3 shrink-0 text-ouch"
                                    }), e.jsx("span", {
                                        className: "bg-transparent text-xs font-normal text-ouch transition-all peer-focus:hidden",
                                        children: (Os = O == null ? void 0 : O.type) == null ? void 0 : Os.message
                                    })]
                                })]
                            }) : e.jsxs(e.Fragment, {
                                children: [e.jsx("label", {
                                    className: "text-xxs uppercase text-gray-dark",
                                    children: r("save_as")
                                }), e.jsx("ul", {
                                    className: "flex flex-row gap-2 flex-wrap !mt-2",
                                    children: H.map(ve => e.jsx("li", {
                                        onClick: () => {
                                            var Zt;
                                            if ((ve == null ? void 0 : ve.value) === "OTHER") {
                                                X(!0), Object.values(ca).includes((Zt = D == null ? void 0 : D.type) == null ? void 0 : Zt.toUpperCase()) && W("type", "");
                                                return
                                            }
                                            W("type", ve == null ? void 0 : ve.value)
                                        },
                                        children: e.jsx(Wo, R(P({}, ve), {
                                            selectedValue: D == null ? void 0 : D.type
                                        }))
                                    }, ve.id))
                                })]
                            })
                        })
                    }), e.jsxs("div", {
                        className: "flex flex-row gap-1 mt-2 mx-4",
                        children: [e.jsx("span", {
                            children: e.jsx(Tn, {
                                className: "h-4 w-4",
                                "data-sentry-element": "Info",
                                "data-sentry-source-file": "AddressForm.tsx"
                            })
                        }), e.jsxs("span", {
                            className: "text-xs font-normal text-gray-dark",
                            children: ["This address will be secured with OTP on Shopflo checkouts. View", " ", e.jsx("a", {
                                target: "_blank",
                                href: "https://www.shopflo.com/terms-conditions",
                                className: "text-violet-dark",
                                children: "Terms and conditions"
                            }), " ", "and", " ", e.jsx("a", {
                                target: "_blank",
                                href: "https://www.shopflo.com/privacy-policy",
                                className: "text-violet-dark",
                                children: "Privacy Policy"
                            })]
                        })]
                    }), m ? e.jsx(hs, {
                        children: e.jsx(ut, {
                            type: "submit",
                            buttonText: r("proceed_to_pay"),
                            height: "h-14",
                            isCheckout: !0
                        })
                    }) : e.jsx("div", {
                        className: "mx-4 mt-4",
                        children: e.jsx(ut, {
                            type: "submit",
                            id: "flo_address_submit",
                            buttonText: r("save_and_continue"),
                            height: "h-14",
                            isCheckout: !0
                        })
                    })]
                })
            };
        return e.jsxs(Ie.Fragment, {
            children: [m ? e.jsx(e.Fragment, {
                children: yt()
            }) : e.jsxs(e.Fragment, {
                children: [e.jsx(Ze, {
                    className: `${Ce()?"!bg-white":""}`,
                    children: e.jsxs(Qt.Title, {
                        as: "div",
                        className: "flex h-full w-full flex-row items-center justify-between",
                        children: [e.jsx("h1", {
                            className: "text-base font-medium text-coal-light",
                            children: r(F ? "add_new_address_header" : "edit_address")
                        }), e.jsx("button", {
                            className: "outline-none",
                            children: e.jsx(st, {
                                className: "h-6 w-6 cursor-pointer text-coal-light",
                                onClick: () => {
                                    T({
                                        eventName: q.FLO_BACK_CLICK,
                                        eventType: "click"
                                    }), A("NONE"), g !== "PAYMENTS" && E("ADDRESS_LIST")
                                }
                            })
                        })]
                    })
                }), e.jsxs(Je, {
                    className: "!pt-12",
                    children: [e.jsx(Dn, {
                        bannerType: "ORDER_SUMMARY"
                    }), e.jsx("div", {
                        children: yt()
                    })]
                })]
            }), Q && e.jsx(St, {})]
        })
    },
    Wo = ({
        value: s,
        id: t,
        label: n,
        isDisabled: r,
        icon: a,
        selectedValue: o
    }) => {
        const x = (o == null ? void 0 : o.toUpperCase()) === (s == null ? void 0 : s.toUpperCase()),
            l = "flex max-h-12 p-3 space-x-2 min-w-max max-w-full items-center justify-center rounded-xl bg-gray-lightest text-base font-normal text-coal-dark",
            m = r ? "cursor-not-allowed opacity-40" : "cursor-pointer",
            h = x ? "border-transparent font-medium ring-1 ring-primary-dark shadow-[0_0_4px_2px] shadow-primary-light" : "ring-1 ring-transparent font-mediu",
            c = !x && !r ? "hover:bg-gray-lighter" : "";
        return e.jsx("div", {
            className: "relative",
            "data-sentry-component": "AddressType",
            "data-sentry-source-file": "AddressForm.tsx",
            children: e.jsxs("div", {
                id: t,
                className: Fe(l, m, h, c),
                children: [a, e.jsx("span", {
                    className: "text-sm font-medium",
                    children: n
                })]
            })
        })
    },
    Zo = ({
        setIsOpen: s,
        isPrimaryBtnLoading: t
    }) => {
        const {
            t: n
        } = te(), {
            sendAnalyticsEvent: r
        } = qe(), [a, o] = d.useState("ADDRESS_NEW"), [x, l] = d.useState(!1), m = h => {
            o(h), l(!0)
        };
        return e.jsxs(e.Fragment, {
            children: [e.jsx(Ze, {
                className: "!bg-white",
                "data-sentry-element": "DialogHeader",
                "data-sentry-source-file": "AddressListDialog.tsx",
                children: e.jsxs(Qt.Title, {
                    as: "div",
                    className: "flex h-full w-full flex-row items-center justify-between",
                    "data-sentry-element": "unknown",
                    "data-sentry-source-file": "AddressListDialog.tsx",
                    children: [e.jsx("h1", {
                        className: "text-base font-medium text-carbon-dark",
                        children: n("delivery")
                    }), e.jsx("button", {
                        className: "outline-none",
                        children: e.jsx(st, {
                            className: "h-6 w-6 cursor-pointer text-carbon-dark",
                            onClick: () => {
                                r({
                                    eventName: q.FLO_BACK_CLICK,
                                    eventType: "click"
                                }), s && s()
                            },
                            "data-sentry-element": "X",
                            "data-sentry-source-file": "AddressListDialog.tsx"
                        })
                    })]
                })
            }), e.jsxs(Je, {
                className: "scrollbar-hide !pt-12",
                "data-sentry-element": "DialogBody",
                "data-sentry-source-file": "AddressListDialog.tsx",
                children: [e.jsx(Dn, {
                    bannerType: "ORDER_SUMMARY",
                    "data-sentry-element": "GenericBannerStrip",
                    "data-sentry-source-file": "AddressListDialog.tsx"
                }), e.jsxs("div", {
                    className: "flex flex-col space-y-4 px-4 pb-12 pt-4",
                    children: [e.jsx(ts, {
                        height: "h-12",
                        width: "w-full",
                        id: "flo_add__address",
                        customClass: "text-sm font-medium text-coal-dark space-x-2 font-medium border-[1px] border-gray-light rounded-2xl px-3 flex items-center justify-center hover:ring-gray-light hover:ring-[2px]",
                        buttonText: n("add_new_address_button"),
                        iconComponent: e.jsx(An, {
                            className: "h-5 w-5 text-yay-dark outline-none"
                        }),
                        onClick: () => {
                            o("ADDRESS_NEW"), l(!0)
                        },
                        "data-sentry-element": "GenericButton",
                        "data-sentry-source-file": "AddressListDialog.tsx"
                    }), e.jsx($n, {
                        handleEditAddress: m,
                        isPrimaryBtnLoading: t,
                        defaultShowAllAddresses: !0,
                        "data-sentry-element": "AddressModify",
                        "data-sentry-source-file": "AddressListDialog.tsx"
                    })]
                })]
            }), e.jsx(Pe, {
                isOpen: x,
                setIsOpen: l,
                translateAxis: "y",
                dialogOverlay: !0,
                customClass: "h-[92%] md:h-[77vh] md:top-[8vh]",
                modalType: "ADDRESS_NEW",
                "data-sentry-element": "GenericDialog",
                "data-sentry-source-file": "AddressListDialog.tsx",
                children: e.jsx(Yn, {
                    addressId: a,
                    "data-sentry-element": "AddressForm",
                    "data-sentry-source-file": "AddressListDialog.tsx"
                })
            })]
        })
    },
    Gs = ({
        icon: s,
        etdText: t
    }) => {
        var o, x;
        const {
            state: {
                merchant: n
            }
        } = Ye(), r = (x = (o = n == null ? void 0 : n.colorPallet) == null ? void 0 : o.primaryColor) == null ? void 0 : x.substring(0, 7), a = xr(r != null ? r : "#000000", .2);
        return e.jsxs("div", {
            className: "flex items-center p-2 rounded-lg gap-2 w-full ",
            style: {
                backgroundColor: a
            },
            "data-sentry-component": "AddressETD",
            "data-sentry-source-file": "AddressETD.tsx",
            children: [e.jsx(po, {
                icon: s,
                color: r != null ? r : "#000000",
                "data-sentry-element": "ShippingDeliveryIcon",
                "data-sentry-source-file": "AddressETD.tsx"
            }), e.jsx("span", {
                className: "text-xs font-medium text-coal-dark",
                children: t
            })]
        })
    },
    Jo = s => {
        const t = s.split(",").map(n => n.trim());
        return t.length > 1 && t.pop(), t.join(", ")
    },
    Hn = () => {
        var t, n, r, a, o, x;
        const {
            state: {
                user: s
            }
        } = mt();
        return e.jsxs("div", {
            className: "flex w-full flex-col space-y-2 p-2 bg-gray-lightest rounded-lg",
            "data-sentry-component": "UserAddressDisplay",
            "data-sentry-source-file": "AddressETD.tsx",
            children: [e.jsxs("p", {
                className: "w-full px-[3px] text-left text-xs font-normal text-coal-light leading-5 line-clamp-2",
                children: [e.jsx("span", {
                    className: "font-medium text-coal-dark",
                    children: ((t = s == null ? void 0 : s.default_shipping_address) == null ? void 0 : t.name) + ", "
                }), e.jsx("span", {
                    className: "font-normal text-coal-light",
                    children: qt(Jo((r = (n = s == null ? void 0 : s.default_shipping_address) == null ? void 0 : n.address) != null ? r : ""), 75)
                }), e.jsx("span", {
                    className: "text-coal-dark font-medium ml-2",
                    children: (a = s == null ? void 0 : s.default_shipping_address) == null ? void 0 : a.zip
                })]
            }), e.jsxs("div", {
                className: "flex flex-row space-x-3 px-[3px] text-gray-dark truncate",
                children: [e.jsxs("div", {
                    className: "flex flex-row space-x-1 items-center",
                    children: [e.jsx(On, {
                        size: 14,
                        color: "#6E6E6E",
                        strokeWidth: 2.5,
                        "data-sentry-element": "Phone",
                        "data-sentry-source-file": "AddressETD.tsx"
                    }), e.jsx("span", {
                        className: "text-xs font-normal",
                        children: (o = s == null ? void 0 : s.default_shipping_address) == null ? void 0 : o.phone
                    })]
                }), e.jsxs("div", {
                    className: "flex flex-row space-x-1 items-center min-w-0",
                    children: [e.jsx(In, {
                        className: "flex-shrink-0",
                        size: 14,
                        color: "#6E6E6E",
                        strokeWidth: 2.5,
                        "data-sentry-element": "Mail",
                        "data-sentry-source-file": "AddressETD.tsx"
                    }), e.jsx("span", {
                        className: "text-xs font-normal truncate",
                        children: (x = s == null ? void 0 : s.default_shipping_address) == null ? void 0 : x.email
                    })]
                })]
            })]
        })
    },
    el = ({
        handleDeliveryAddressBtnClick: s
    }) => {
        var i, j, p;
        const {
            state: {
                merchant: t
            }
        } = Ye(), {
            state: {
                isC2P: n,
                shippingHandles: r,
                checkoutLoading: a
            }
        } = ge(), {
            state: {
                user: o
            }
        } = mt(), {
            t: x
        } = te(), l = (i = o == null ? void 0 : o.default_shipping_address) != null && i.id ? (j = o == null ? void 0 : o.default_shipping_address) == null ? void 0 : j.id : "", {
            isETDEnabled: m,
            etdText: h
        } = Ss(l), {
            isNotServicable: c
        } = ss(), [u, C] = d.useState({
            etd: "",
            icon: Es.Truck,
            etd_text: "Delivery information: ",
            min_days_to_deliver: 0,
            max_days_to_deliver: 0
        }), y = d.useMemo(() => {
            var E, _, A, N;
            return jn((E = u == null ? void 0 : u.min_days_to_deliver) != null ? E : 0, (_ = u == null ? void 0 : u.max_days_to_deliver) != null ? _ : 0, (A = u == null ? void 0 : u.etd_text) != null ? A : "", (N = t == null ? void 0 : t.hideShippingMaxDays) != null ? N : !1)
        }, [u]);
        d.useEffect(() => {
            var _, A, N, b, f;
            if (!(r != null && r.length)) return;
            const E = Ys(r);
            E && C({
                etd: (_ = E == null ? void 0 : E.etd) != null ? _ : "",
                icon: (A = E == null ? void 0 : E.icon) != null ? A : Es.Truck,
                etd_text: (N = E == null ? void 0 : E.etd_text) != null ? N : "Delivery information: ",
                min_days_to_deliver: (b = E == null ? void 0 : E.min_days_to_deliver) != null ? b : 0,
                max_days_to_deliver: (f = E == null ? void 0 : E.max_days_to_deliver) != null ? f : 0
            })
        }, [r]);
        const g = e.jsxs("div", {
            className: "border-base px-3 py-4 bg-white space-y-2",
            children: [e.jsx("div", {
                className: "skeleton-loader h-[16px] rounded-md w-full"
            }), e.jsx("div", {
                className: "skeleton-loader h-[16px] rounded-md w-2/5"
            })]
        });
        return e.jsxs(_e, {
            loading: a,
            "data-sentry-element": "AnimateLoading",
            "data-sentry-component": "DeliveryCard",
            "data-sentry-source-file": "AddressETD.tsx",
            children: [e.jsx(_e.Skeleton, {
                "data-sentry-element": "unknown",
                "data-sentry-source-file": "AddressETD.tsx",
                children: g
            }), e.jsx(_e.Content, {
                "data-sentry-element": "unknown",
                "data-sentry-source-file": "AddressETD.tsx",
                children: e.jsx("div", {
                    className: "flex flex-col",
                    children: e.jsxs("button", {
                        className: `border-base flex w-full flex-col items-center gap-3 bg-white p-3 pt-4 ${n&&"cursor-default"}`,
                        onClick: s,
                        children: [e.jsxs("div", {
                            className: "flex w-full flex-row items-center",
                            children: [e.jsx("div", {
                                className: "flex w-full items-center justify-between space-x-2",
                                children: e.jsxs("div", {
                                    className: "flex space-x-2",
                                    children: [e.jsx(_a, {
                                        className: "h-4 w-4 text-coal-dark outline-none",
                                        strokeWidth: 2.5,
                                        "data-sentry-element": "MapPin",
                                        "data-sentry-source-file": "AddressETD.tsx"
                                    }), e.jsx("h2", {
                                        className: "text-sm font-medium text-coal-dark",
                                        children: x("delivering_to_address")
                                    })]
                                })
                            }), !n && e.jsxs("span", {
                                className: "inline-flex cursor-pointer space-x-1 text-coal-dark",
                                children: [e.jsx("span", {
                                    className: "text-sm font-medium",
                                    children: (p = o == null ? void 0 : o.addresses) != null && p.length ? x("edit") : x("add_address")
                                }), e.jsx(Ct, {
                                    strokeWidth: 2.5,
                                    size: 16
                                })]
                            })]
                        }), e.jsx(Hn, {
                            "data-sentry-element": "UserAddressDisplay",
                            "data-sentry-source-file": "AddressETD.tsx"
                        }), !c && !m && !!y && e.jsx(Gs, {
                            icon: u == null ? void 0 : u.icon,
                            etdText: y != null ? y : ""
                        }), !c && !!m && !!h && e.jsx(Gs, {
                            icon: Es.Truck,
                            etdText: h
                        }), e.jsx(Ca, {
                            "data-sentry-element": "OrderSummaryErrorCustom",
                            "data-sentry-source-file": "AddressETD.tsx"
                        })]
                    })
                })
            })]
        })
    },
    tl = () => {
        var i, j, p, E, _, A, N, b, f;
        const {
            t: s
        } = te(), {
            state: {
                user: t
            }
        } = mt(), {
            state: {
                isC2P: n,
                shippingHandles: r,
                activeComponent: a,
                checkoutId: o
            },
            actions: {
                setCheckoutModal: x
            }
        } = ge(), {
            state: {
                merchant: l
            }
        } = Ye(), {
            isNotServicable: m
        } = ss(), {
            sendAnalyticsEvent: h
        } = qe();
        (i = l == null ? void 0 : l.addressConfig) == null || i.isBillingAddressEnabled;
        const c = (j = t == null ? void 0 : t.default_shipping_address) != null && j.id ? (p = t == null ? void 0 : t.default_shipping_address) == null ? void 0 : p.id : "",
            {
                isETDEnabled: u,
                etdText: C
            } = Ss(c),
            y = d.useMemo(() => {
                var L, k, v, T, F;
                const w = Ys(r);
                return {
                    etd: (L = w == null ? void 0 : w.etd) != null ? L : "",
                    icon: (k = w == null ? void 0 : w.icon) != null ? k : Es.Truck,
                    etd_text: (v = w == null ? void 0 : w.etd_text) != null ? v : "Delivery information: ",
                    min_days_to_deliver: (T = w == null ? void 0 : w.min_days_to_deliver) != null ? T : 0,
                    max_days_to_deliver: (F = w == null ? void 0 : w.max_days_to_deliver) != null ? F : 0
                }
            }, [r]),
            g = d.useMemo(() => {
                var w, L;
                return jn(y == null ? void 0 : y.min_days_to_deliver, y == null ? void 0 : y.max_days_to_deliver, (w = y == null ? void 0 : y.etd_text) != null ? w : "Delivery information: ", (L = l == null ? void 0 : l.hideShippingMaxDays) != null ? L : !1)
            }, [y]);
        return d.useEffect(() => {
            a === "ADDRESS_SECTION" && ea("address-section")
        }, [a]), e.jsx("div", {
            id: "address-section",
            className: "flex flex-col",
            onClick: () => {
                var w;
                if (!n) {
                    if (h({
                            eventName: q.FLO_DELIVERY_ADDRESS_CHANGE_CLICKED,
                            eventType: "click"
                        }), (w = t == null ? void 0 : t.addresses) != null && w.length) {
                        x("ADDRESS_LIST");
                        return
                    }
                    x("ADDRESS_NEW")
                }
            },
            "data-sentry-component": "AddressSection",
            "data-sentry-source-file": "AddressSection.tsx",
            children: e.jsxs("div", {
                className: "border-base flex w-full flex-col items-center gap-2 bg-white p-3",
                children: [e.jsxs("div", {
                    className: "flex w-full flex-row items-center justify-between",
                    children: [e.jsx("div", {
                        className: "flex items-center justify-between space-x-2",
                        children: e.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [e.jsx(_a, {
                                className: "h-4 w-4 text-coal-dark outline-none",
                                strokeWidth: 2.5,
                                "data-sentry-element": "MapPin",
                                "data-sentry-source-file": "AddressSection.tsx"
                            }), e.jsx("h2", {
                                className: "text-sm font-medium text-coal-dark",
                                children: s("deliver_to")
                            }), !!((E = t == null ? void 0 : t.default_shipping_address) != null && E.type) && e.jsx("div", {
                                className: "flex w-fit rounded-xl bg-gray-lighter px-2 py-0.5",
                                children: e.jsx("p", {
                                    className: "w-full px-[3px] text-left text-sm font-medium text-coal-light",
                                    children: qt(Et((_ = t == null ? void 0 : t.default_shipping_address) != null && _.type ? (A = t == null ? void 0 : t.default_shipping_address) == null ? void 0 : A.type : ""), 12)
                                })
                            })]
                        })
                    }), !n && e.jsxs("span", {
                        className: "inline-flex cursor-pointer space-x-1 text-coal-dark",
                        children: [e.jsx("span", {
                            className: "text-sm font-medium",
                            children: (N = t == null ? void 0 : t.addresses) != null && N.length ? s("edit") : s("add_address")
                        }), e.jsx(Ct, {
                            strokeWidth: 2.5,
                            size: 16
                        })]
                    })]
                }), (b = t == null ? void 0 : t.addresses) != null && b.length && ((f = t == null ? void 0 : t.default_shipping_address) != null && f.id) ? e.jsx(Hn, {}) : e.jsx("div", {
                    className: "flex justify-center items-center w-full py-2 bg-gray-lighter rounded-xl mt-1",
                    children: e.jsx("span", {
                        className: "text-sm font-medium text-gray-dark",
                        children: s("no_saved_addresses")
                    })
                }), m && e.jsx("div", {
                    className: "flex w-full justify-start",
                    children: e.jsx(Ca, {})
                }), !m && !u && !!g && e.jsx(Gs, {
                    icon: y == null ? void 0 : y.icon,
                    etdText: g != null ? g : ""
                }), !m && !!u && !!C && e.jsx(Gs, {
                    icon: Es.Truck,
                    etdText: C
                })]
            })
        })
    },
    rn = ({
        addOnData: s,
        isApplied: t,
        handleAction: n
    }) => {
        var a, o, x, l, m;
        const {
            t: r
        } = te();
        return e.jsxs("div", {
            className: Fe("bg-white flex justify-between items-center gap-2 p-[10px] rounded-xl border border-gray-light"),
            "data-sentry-component": "AddOnCard",
            "data-sentry-source-file": "AddOnCard.tsx",
            children: [e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [(s == null ? void 0 : s.show_image) && e.jsx("img", {
                    src: (a = s == null ? void 0 : s.image) != null ? a : "",
                    alt: "add-on-image",
                    className: "h-10 w-10 rounded-md",
                    onError: ({
                        currentTarget: h
                    }) => {
                        h.onerror = null, h.src = Bn
                    }
                }), e.jsx("p", {
                    className: "text-sm font-normal text-coal-dark flex space-x-1 items-center",
                    children: t ? e.jsx("span", {
                        children: `${qt(s==null?void 0:s.product_name,40)} added`
                    }) : e.jsx("span", {
                        dangerouslySetInnerHTML: {
                            __html: (m = (l = (o = s == null ? void 0 : s.description) == null ? void 0 : o.replaceAll("{{product_title}}", qt(s == null ? void 0 : s.product_name, 40))) == null ? void 0 : l.replaceAll("{{price}}", Ee((x = s == null ? void 0 : s.price) == null ? void 0 : x.toString()))) != null ? m : ""
                        }
                    })
                })]
            }), t ? e.jsx("div", {
                onClick: () => n == null ? void 0 : n(!1),
                className: "flex justify-start py-3 pr-3 items-start h-full w-[4.5rem]",
                children: e.jsx("span", {
                    className: "text-sm font-semibold text-coal-dark cursor-pointer rounded-lg py-2",
                    children: r("remove")
                })
            }) : e.jsx("div", {
                onClick: () => n == null ? void 0 : n(!0),
                className: "flexjustify-start p-3 items-start w-[4.5rem]",
                children: e.jsx("span", {
                    className: "text-xs font-medium text-yay-dark cursor-pointer rounded-lg px-3 py-2 border border-yay-dark bg-yay-lighter",
                    children: r("add")
                })
            })]
        })
    },
    sl = ({
        setIsOpen: s
    }) => {
        var xe, X, ne, Z, me, B, M, se, ue, Te, le, he, ie, fe, Oe, z, I, He, ce, pe, ye;
        const {
            t
        } = te(), {
            state: {
                addressConfig: n
            }
        } = Ye(), {
            state: {
                checkoutId: r
            },
            actions: {
                updateCheckoutBasedOnCheckoutResponse: a,
                setCheckoutView: o
            }
        } = ge(), {
            sendAnalyticsEvent: x
        } = qe(), {
            state: {
                user: l
            },
            actions: {
                setUserAddress: m
            }
        } = mt(), [h, c] = d.useState(!1), [u, C] = d.useState([]), [y, g] = d.useState(!1), [i, j] = d.useState(!1), [p, E] = d.useState(!1), _ = d.useMemo(() => fr(n, p), [n, p]), A = {
            zip: "",
            address1: "",
            address2: "",
            name: Et((xe = l == null ? void 0 : l.name) != null ? xe : ""),
            phone: (X = l == null ? void 0 : l.phone) != null ? X : "",
            city: "",
            state: "",
            state_code: "",
            country: "India",
            country_code: "IN",
            type: "Home",
            email: (Z = (ne = l == null ? void 0 : l.email) == null ? void 0 : ne.trim()) != null ? Z : "",
            gstin: "",
            gst_business_name: ""
        }, {
            handleSubmit: N,
            inputProps: b,
            setValues: f,
            setErrors: w,
            setValueOf: L,
            handleFieldChange: k,
            state: {
                values: v,
                errors: T,
                validations: F
            }
        } = as({
            initialState: A,
            validationSchema: _
        });
        d.useEffect(() => {
            x({
                eventName: q.FLO_BILLING_ADDRESS_EDIT_FORM_LOADED,
                eventType: "load"
            })
        }, []), d.useEffect(() => {
            if (v == null ? void 0 : v.gstin) {
                E(!0);
                return
            }
            E(!1), w(W => R(P({}, W), {
                gst_business_name: R(P({}, W.gst_business_name), {
                    status: !1
                })
            }))
        }, [v]), d.useEffect(() => {
            var D, O, de;
            const G = (D = l == null ? void 0 : l.default_shipping_address) == null ? void 0 : D.id,
                W = (de = (O = l == null ? void 0 : l.default_billing_address) == null ? void 0 : O.id) != null ? de : "",
                re = sa(W, l == null ? void 0 : l.addresses);
            if (G === W || Jt(re)) {
                $(G != null ? G : ""), j(!0);
                return
            }
            $(W != null ? W : "")
        }, [l]);
        const $ = G => ee(void 0, null, function*() {
                var W, re, D, O, de, H, Ce, Ae, ze, Le;
                try {
                    if (!G) return;
                    c(!0);
                    const J = sa(G, l == null ? void 0 : l.addresses);
                    f({
                        type: (W = J.type) != null ? W : "Other",
                        zip: (re = J == null ? void 0 : J.zip) != null ? re : "",
                        address1: J == null ? void 0 : J.address1,
                        address2: (D = J == null ? void 0 : J.address2) != null ? D : "",
                        name: (O = J == null ? void 0 : J.name) != null ? O : "",
                        phone: (de = J == null ? void 0 : J.phone) != null ? de : "",
                        city: (H = J == null ? void 0 : J.city) != null ? H : "",
                        state: (Ce = J == null ? void 0 : J.state) != null ? Ce : "",
                        country: (Ae = J == null ? void 0 : J.country) != null ? Ae : "",
                        email: J == null ? void 0 : J.email,
                        country_code: (ze = J == null ? void 0 : J.country_code) != null ? ze : "IN",
                        state_code: (Le = J == null ? void 0 : J.state_code) != null ? Le : "",
                        gst_business_name: J == null ? void 0 : J.gst_business_name,
                        gstin: J == null ? void 0 : J.gstin
                    }), c(!1)
                } catch (J) {
                    c(!1), console.error(J)
                }
            }),
            Q = G => ee(void 0, null, function*() {
                const W = v == null ? void 0 : v.country_code;
                if (/\W/.test(G) || W === "IN" && /\D/.test(G)) return;
                k(be.zip, G);
                let re = {};
                if (G && W === "IN" && (G == null ? void 0 : G.length) === 6 && (re = yield xa(G)), Jt(re)) {
                    g(!1);
                    return
                }
                f(D => R(P({}, D), {
                    city: Et(re.district),
                    state: Et(re.state),
                    state_code: re.state_code,
                    country: Et(re.country)
                })), w(D => R(P({}, D), {
                    city: R(P({}, D.city), {
                        status: !1
                    }),
                    state: R(P({}, D.state), {
                        status: !1
                    }),
                    country: R(P({}, D.country), {
                        status: !1
                    }),
                    state_code: R(P({}, D.state_code), {
                        status: !1
                    })
                })), g(!0)
            }),
            Y = () => ee(void 0, null, function*() {
                var W, re, D, O, de;
                let G;
                try {
                    c(!0);
                    let H = {
                        source: "BILLING_ADDRESS",
                        address_data: R(P({}, v), {
                            gst: (W = v.gstin) == null ? void 0 : W.trim(),
                            gst_business_name: (re = v.gst_business_name) == null ? void 0 : re.trim()
                        })
                    };
                    H = R(P({}, H), {
                        account_id: l == null ? void 0 : l.uid,
                        address_type: "Other"
                    }), G = yield wt(`/checkout/${r}/address`, H, "KRATOS_PRIVATE");
                    const Ce = yield ot("/gatekeeper/v1/accounts?include=address");
                    S(G, Ce), x({
                        eventName: q.FLO_BILLING_ADDRESS_EDIT_FORM_LOADED,
                        eventType: "load"
                    }), s()
                } catch (H) {
                    ((de = (O = (D = H == null ? void 0 : H.response) == null ? void 0 : D.data) == null ? void 0 : O.error) == null ? void 0 : de.code) === pr && w(Ce => R(P({}, Ce), {
                        gstin: R(P({}, Ce.gstin), {
                            status: !0,
                            message: t("invalid_gstin")
                        })
                    }))
                } finally {
                    c(!1)
                }
            }),
            S = (G, W) => {
                K(G), V(W, G), x({
                    eventName: q.FLO_ADDRESS_SELECTED,
                    eventType: "click"
                })
            },
            K = G => {
                a(G, !0)
            },
            V = (G, W) => {
                m(W == null ? void 0 : W.addresses, G == null ? void 0 : G.addresses)
            },
            oe = () => {
                var W;
                const G = hr("clone-shipping--checkbox");
                if (j(G), G) {
                    const re = (W = l == null ? void 0 : l.default_shipping_address) == null ? void 0 : W.id;
                    $(re != null ? re : "")
                }
            };
        return e.jsxs(e.Fragment, {
            children: [e.jsx(Ze, {
                "data-sentry-element": "DialogHeader",
                "data-sentry-source-file": "BillingAddressForm.tsx",
                children: e.jsxs(Qt.Title, {
                    as: "div",
                    className: "flex h-full w-full flex-row items-center justify-between bg-white",
                    "data-sentry-element": "unknown",
                    "data-sentry-source-file": "BillingAddressForm.tsx",
                    children: [e.jsx("h1", {
                        className: "text-base font-medium text-carbon-dark",
                        children: t("billing_address_gst")
                    }), e.jsx("button", {
                        className: "outline-none",
                        children: e.jsx(st, {
                            className: "h-6 w-6 cursor-pointer text-coal-light",
                            onClick: () => {
                                s()
                            },
                            "data-sentry-element": "X",
                            "data-sentry-source-file": "BillingAddressForm.tsx"
                        })
                    })]
                })
            }), e.jsx(Je, {
                className: "!pt-12",
                "data-sentry-element": "DialogBody",
                "data-sentry-source-file": "BillingAddressForm.tsx",
                children: e.jsxs("form", {
                    className: "flex flex-col space-y-4 px-6 pt-4",
                    onSubmit: N(Y),
                    id: "billing-form",
                    children: [e.jsx("fieldset", {
                        children: e.jsxs("div", {
                            className: "flex flex-col space-y-2",
                            children: [e.jsx(Qe, R(P({
                                type: "text",
                                maxLength: 15,
                                label: `${t("gstin")} (${t("optional_text")})`
                            }, b(be.gstin)), {
                                filled: !!((me = v == null ? void 0 : v.gstin) != null && me.length),
                                autoComplete: "gstin",
                                error: T.gstin,
                                required: !!((B = _ == null ? void 0 : _.gstin) != null && B.required),
                                showSuccessIcon: (F == null ? void 0 : F.gstin) && !!((M = v == null ? void 0 : v.gstin) != null && M.length),
                                "data-sentry-element": "InputField",
                                "data-sentry-source-file": "BillingAddressForm.tsx"
                            })), e.jsx("p", {
                                className: "pb-2 text-xs text-gray-dark",
                                children: t("gst_form_note")
                            }), e.jsx(Qe, R(P({
                                type: "text",
                                label: t("gst_business_name")
                            }, b(be.gst_business_name)), {
                                filled: !!((se = v == null ? void 0 : v.gst_business_name) != null && se.length),
                                autoComplete: "company",
                                error: T.gst_business_name,
                                required: !!((ue = _ == null ? void 0 : _.gst_business_name) != null && ue.required) || !!((Te = v == null ? void 0 : v.gstin) != null && Te.length),
                                showSuccessIcon: F == null ? void 0 : F.gst_business_name,
                                "data-sentry-element": "InputField",
                                "data-sentry-source-file": "BillingAddressForm.tsx"
                            })), e.jsx(_o, {
                                title: t("billing_address_header"),
                                customClass: "mb-3 -mx-4 text-xs uppercase !text-coal-dark pt-3 pb-4 font-medium",
                                "data-sentry-element": "SectionTitle",
                                "data-sentry-source-file": "BillingAddressForm.tsx"
                            }), e.jsxs("div", {
                                className: "flex items-center gap-2 pb-2",
                                children: [e.jsx("input", {
                                    type: "checkbox",
                                    checked: i,
                                    className: "cursor-pointer accent-coal-dark",
                                    id: "clone-shipping--checkbox",
                                    onChange: oe
                                }), e.jsx("p", {
                                    className: "text-sm font-normal text-coal-dark",
                                    children: "Same as delivery address"
                                })]
                            }), !!(_ != null && _.address1) && e.jsx(Fs, R(P({
                                label: t("address1")
                            }, b(be.address1)), {
                                filled: !!((le = v.address1) != null && le.length),
                                autoComplete: _ != null && _.address1 ? "address-line1" : "shipping street-address",
                                error: T.address1,
                                required: !!((he = _ == null ? void 0 : _.address1) != null && he.required),
                                showSuccessIcon: F == null ? void 0 : F.address1
                            })), !!(_ != null && _.address2) && e.jsx(Fs, R(P({
                                label: t("address2")
                            }, b(be.address2)), {
                                filled: !!((ie = v.address2) != null && ie.length),
                                autoComplete: _ != null && _.address2 ? "address-line2" : "shipping street-address",
                                error: T.address2,
                                required: !!((fe = _ == null ? void 0 : _.address2) != null && fe.required),
                                showSuccessIcon: F == null ? void 0 : F.address2
                            })), !!(_ != null && _.zip) && e.jsx(Qe, R(P({
                                type: "tel",
                                label: t("address_pincode"),
                                maxLength: v.country_code === "IN" ? 6 : 25,
                                filled: !!((Oe = v.zip) != null && Oe.length),
                                autoComplete: "shipping postal-code"
                            }, b(be.zip, {
                                onChange: G => {
                                    Q(G.target.value)
                                }
                            })), {
                                error: T.zip,
                                required: !!((z = _ == null ? void 0 : _.zip) != null && z.required),
                                showSuccessIcon: F == null ? void 0 : F.zip
                            })), e.jsxs("div", {
                                className: "flex w-full flex-row items-start space-x-2",
                                children: [!!(_ != null && _.city) && e.jsx(Qe, R(P({
                                    type: "text",
                                    label: t("address_city")
                                }, b(be.city)), {
                                    filled: !!((I = v.city) != null && I.length),
                                    autoComplete: "shipping address-level2",
                                    error: T.city,
                                    required: !!((He = _ == null ? void 0 : _.city) != null && He.required),
                                    showSuccessIcon: F == null ? void 0 : F.city
                                })), !!(_ != null && _.state) && (u != null && u.length ? e.jsx(la, R(P({
                                    placeholder: t("address_state")
                                }, b(be.state_code, {
                                    onChange: G => {
                                        var W, re, D;
                                        L("state_code", (W = G == null ? void 0 : G.target) == null ? void 0 : W.value), L("state", (D = (re = G == null ? void 0 : G.target) == null ? void 0 : re.selectedOptions[0]) == null ? void 0 : D.text), T.state && delete T.state
                                    }
                                })), {
                                    autoComplete: "shipping address-level1",
                                    disabled: y,
                                    options: u,
                                    optionKey: "code",
                                    optionValue: "name",
                                    required: !!((ce = _ == null ? void 0 : _.state) != null && ce.required),
                                    error: T.state,
                                    customContainerClass: "!mt-3"
                                })) : e.jsx(Qe, R(P({
                                    type: "text",
                                    label: t("address_state")
                                }, b(be.state)), {
                                    filled: !!((pe = v.state) != null && pe.length),
                                    autoComplete: "shipping address-level1",
                                    error: T.state,
                                    required: !!((ye = _ == null ? void 0 : _.state) != null && ye.required),
                                    showSuccessIcon: F == null ? void 0 : F.state
                                })))]
                            })]
                        })
                    }), e.jsx("div", {
                        className: "mt-4",
                        children: e.jsx(ut, {
                            id: "billing_submit_button",
                            type: "submit",
                            buttonText: t("submit"),
                            height: "h-14",
                            "data-sentry-element": "PrimaryButton",
                            "data-sentry-source-file": "BillingAddressForm.tsx"
                        })
                    })]
                })
            }), h && e.jsx(St, {})]
        })
    },
    on = Ie.memo(({}) => {
        var c;
        const {
            state: {
                merchant: s
            }
        } = Ye(), {
            state: {
                isC2P: t
            }
        } = ge(), {
            sendAnalyticsEvent: n
        } = qe(), {
            t: r
        } = te(), {
            state: {
                user: a
            }
        } = mt(), [o, x] = d.useState(!1), l = d.useMemo(() => {
            var C, y;
            const u = (y = (C = a == null ? void 0 : a.default_billing_address) == null ? void 0 : C.id) != null ? y : "";
            return sa(u, a == null ? void 0 : a.addresses)
        }, [a]), m = () => {
            t || (n({
                eventName: q.FLO_BILLING_ADDRESS_CHANGE_CLICKED,
                eventType: "click"
            }), x(!0))
        }, h = d.useCallback(() => {
            var g, i, j;
            const u = (g = a == null ? void 0 : a.default_shipping_address) == null ? void 0 : g.id,
                C = (i = a == null ? void 0 : a.default_billing_address) == null ? void 0 : i.id;
            if (!C) return e.jsx(e.Fragment, {});
            if (!(l != null && l.gstin) || !(l != null && l.gst_business_name)) return e.jsx(e.Fragment, {});
            const y = u === C;
            return e.jsx(e.Fragment, {
                children: e.jsxs("div", {
                    className: "flex w-full items-baseline justify-start rounded-md bg-gray-lighter px-1.5 py-2 text-left text-xs font-normal text-coal-light",
                    children: [e.jsx("p", {
                        className: "truncate",
                        children: y ? r("same_as_delivery_address") : `${(j=a==null?void 0:a.default_billing_address)==null?void 0:j.address}`
                    }), e.jsx("span", {
                        className: "px-1",
                        children: "·"
                    }), e.jsx("p", {
                        className: "grow whitespace-nowrap",
                        children: `GST: ${l==null?void 0:l.gstin}`
                    })]
                })
            })
        }, [a, l, r]);
        return (c = s == null ? void 0 : s.addressConfig) != null && c.isBillingAddressEnabled ? t && (!(l != null && l.gstin) || !(l != null && l.gst_business_name)) ? e.jsx(e.Fragment, {}) : e.jsxs(e.Fragment, {
            children: [e.jsx("div", {
                className: "border-base flex cursor-pointer flex-col bg-white mt-3",
                onClick: m,
                children: e.jsxs("div", {
                    className: "flex w-full flex-col items-center gap-3 p-3",
                    children: [e.jsxs("div", {
                        className: "flex w-full flex-row items-center",
                        children: [e.jsx("div", {
                            className: "flex w-full items-center justify-between space-x-2",
                            children: e.jsxs("div", {
                                className: "flex space-x-2",
                                children: [e.jsx(Kr, {
                                    className: "h-4 w-4 text-coal-dark outline-none",
                                    strokeWidth: 2.5
                                }), e.jsxs("h2", {
                                    className: "text-sm font-medium text-coal-dark",
                                    children: [r("billing_gst"), " ", e.jsx("span", {
                                        className: "font-normal text-gray-dark",
                                        children: `(${r("optional_text")})`
                                    })]
                                })]
                            })
                        }), !t && e.jsx(fs, {
                            className: "h-4 w-4 cursor-pointer text-coal-dark"
                        })]
                    }), h()]
                })
            }), e.jsx(Pe, {
                isOpen: o,
                setIsOpen: x,
                translateAxis: "y",
                dialogOverlay: !0,
                customClass: "overflow-scroll md:!top-auto md:absolute h-[95%] md:h-[81vh] md:top-[4vh]",
                modalType: "BILLING_ADDRESS_NEW",
                children: e.jsx(sl, {
                    setIsOpen: () => x(!1)
                })
            })]
        }) : e.jsx(e.Fragment, {})
    }),
    al = ({
        isOpen: s,
        handleClose: t,
        unavailabilityReasons: n,
        mode: r
    }) => {
        var l, m;
        const {
            actions: {
                handleUnapplicablePaymentMethod: a
            }
        } = Re(), {
            t: o
        } = te(), x = () => {
            t(), a(r == null ? void 0 : r.mode, n)
        };
        return e.jsxs(Pe, {
            isOpen: s,
            setIsOpen: t,
            translateAxis: "y",
            customClass: "overflow-scroll md:!top-auto md:absolute rounded-t-2xl max-h-[81vh]",
            modalType: "REMOVE_OFFERS",
            dialogOverlay: !0,
            "data-sentry-element": "GenericDialog",
            "data-sentry-component": "InvalidOffersDialog",
            "data-sentry-source-file": "InvalidOffers.tsx",
            children: [e.jsx(Ze, {
                className: "px-4",
                "data-sentry-element": "DialogHeader",
                "data-sentry-source-file": "InvalidOffers.tsx",
                children: e.jsxs(Qt.Title, {
                    as: "h3",
                    className: "flex h-full w-full flex-row items-center justify-between bg-white py-4 text-base font-medium text-carbon-dark",
                    "data-sentry-element": "unknown",
                    "data-sentry-source-file": "InvalidOffers.tsx",
                    children: [e.jsx("div", {
                        className: "flex items-center",
                        children: e.jsx("h2", {
                            className: "inline-flex gap-2 font-medium text-carbon-dark",
                            children: o("order_total_will_be_increased")
                        })
                    }), e.jsx("button", {
                        className: "outline-none",
                        onClick: t,
                        children: e.jsx(st, {
                            className: "h-6 w-6 cursor-pointer text-coal-dark",
                            "data-sentry-element": "X",
                            "data-sentry-source-file": "InvalidOffers.tsx"
                        })
                    })]
                })
            }), e.jsxs(Je, {
                className: "flex flex-col gap-2 px-3 pb-[11.25rem]",
                "data-sentry-element": "DialogBody",
                "data-sentry-source-file": "InvalidOffers.tsx",
                children: [e.jsx("p", {
                    className: "text-sm font-normal text-coal-dark",
                    children: o("payment_method_unavailable_for_offers")
                }), e.jsx("div", {
                    className: "flex flex-wrap gap-2",
                    children: (m = (l = n == null ? void 0 : n.find(h => h.type === "INVALID_DISCOUNTS")) == null ? void 0 : l.values) == null ? void 0 : m.map((h, c) => e.jsx(Cs, {
                        className: "px-2 py-1 text-xs font-medium text-gray-dark",
                        children: h
                    }, c))
                })]
            }), e.jsx(hs, {
                className: "max-h-[none] bg-white px-3 pb-11 pt-0",
                "data-sentry-element": "DialogFooter",
                "data-sentry-source-file": "InvalidOffers.tsx",
                children: e.jsxs("div", {
                    className: "flex w-full flex-col gap-2",
                    children: [e.jsx("button", {
                        className: "h-14 w-full rounded-xl bg-carbon-dark py-3 font-medium text-white",
                        onClick: t,
                        type: "button",
                        children: o("pay_with_offers")
                    }), e.jsx("button", {
                        onClick: x,
                        className: "h-14 w-full rounded-xl py-3 font-medium text-coal-dark",
                        children: o("remove_offers")
                    })]
                })
            })]
        })
    },
    Vn = ({
        modeData: s,
        inFocus: t
    }) => {
        var me, B, M;
        const {
            t: n
        } = te(), {
            state: {
                billing: r,
                shippingHandles: a,
                initialCheckoutStep: o,
                checkoutValidations: x,
                hasDefaultShippingHandleSelected: l
            },
            actions: {
                setCheckoutView: m,
                setCheckoutModal: h,
                setActiveComponent: c,
                setIsOrderSummaryOpen: u
            }
        } = ge(), {
            state: {
                paymentMethods: C
            },
            actions: {
                handlePaymentMethodSelected: y,
                handleUnapplicablePaymentMethod: g,
                setPaymentMethodDialog: i
            }
        } = Re(), {
            state: {
                user: j
            }
        } = mt(), {
            sendAnalyticsEvent: p
        } = qe(), {
            triggerCheckoutErrorInfoToast: E,
            isItemNotServicable: _
        } = ss(), {
            verifyDefaultAddress: A
        } = bn(), {
            mode: N,
            discount: b,
            metadata: f,
            context: w,
            discount_metadata: L,
            is_available: k,
            unavailability_reasons: v
        } = s, {
            title: T
        } = f || {}, {
            coupon_metadata: F
        } = L || {}, $ = (me = _r(F == null ? void 0 : F.concession_amount, F == null ? void 0 : F.deduction_type)) != null ? me : "", [Q, Y] = d.useCallback(() => !Jt(L) && L.is_prepaid && L.is_freebie ? [!0, L != null && L.mode_freebies ? L == null ? void 0 : L.mode_freebies : 0] : [!1, 0], [L])(), [S, K] = Ie.useState(!1), V = () => {
            K(!1)
        };
        d.useEffect(() => {
            var se;
            t && p({
                eventName: q.FLO_PAYMENT_TILE_SELECTED,
                eventType: "click",
                metaData: {
                    methodName: T || ((se = os[N]) == null ? void 0 : se.header),
                    methodType: s == null ? void 0 : s.mode
                }
            })
        }, [t, N, s == null ? void 0 : s.mode, p, T]);
        const oe = () => {
                var le, he;
                const se = A();
                if (k) {
                    if (!((le = j == null ? void 0 : j.addresses) != null && le.length) && o === "PAYMENTS") {
                        h("ADDRESS_NEW");
                        return
                    }
                    if (o === "PAYMENTS" && !se) {
                        if (!((he = x == null ? void 0 : x.address) != null && he.metadata)) {
                            h("ADDRESS_LIST"), De(n("serviceability_error"));
                            return
                        }
                        h("ADDRESS_EDIT");
                        return
                    }
                    if (_) {
                        h("UNSERVICEABLE_PRODUCTS");
                        return
                    }
                    if (!(a != null && a.length) && o !== "PAYMENTS") {
                        E(n("serviceability_error")), g(N, v), m("ADDRESS_LIST");
                        return
                    }
                    if (!(a != null && a.length) && o === "PAYMENTS") {
                        E(n("serviceability_error")), g(N, v), c("ADDRESS_SECTION");
                        return
                    }
                    const ie = C.find(fe => fe.mode === "SPLIT_COD");
                    if (N === "COD" && !ie) {
                        const fe = C == null ? void 0 : C.find(Oe => Oe.mode === "COD");
                        if (p({
                                eventName: q.FLO_PAYMENT_METHOD_SELECTED,
                                eventFor: [Ke.SF_ANALYTICS, Ke.FACEBOOK_PIXEL],
                                eventType: "click",
                                metaData: {
                                    methodType: N,
                                    automationData: Ut(fe)
                                }
                            }), !l) {
                            h("SHIPPING_HANDLES");
                            return
                        }
                        return i("COD_ORDER_PLACING")
                    }
                    if (N === "UPI_INTENT") {
                        i("UPI_INTENT");
                        return
                    }
                    return y(N, w)
                }
                return v.some(ie => ie.type === "SHIPPING_HANDLES") ? g(N, v) : v.some(ie => ie.type === "INVALID_DISCOUNTS") ? K(!0) : g(N, v)
            },
            X = !(w === "SPLIT_COD") && (!!b || Q),
            ne = Vt(Q ? Y : (M = (B = s == null ? void 0 : s.discount_metadata) == null ? void 0 : B.coupon_metadata) == null ? void 0 : M.concession_amount),
            Z = d.useMemo(() => {
                var se, ue, Te, le, he, ie, fe, Oe, z, I, He, ce, pe, ye, G;
                return (ue = (se = s == null ? void 0 : s.discount_metadata) == null ? void 0 : se.coupon_metadata) != null && ue.is_custom_header && ((le = (Te = s == null ? void 0 : s.discount_metadata) == null ? void 0 : Te.coupon_metadata) == null ? void 0 : le.is_custom_header) === "CUSTOM" ? (z = (ie = (he = s == null ? void 0 : s.discount_metadata) == null ? void 0 : he.coupon_metadata) == null ? void 0 : ie.header) == null ? void 0 : z.replaceAll("<value>", (Oe = (fe = s == null ? void 0 : s.discount_metadata) == null ? void 0 : fe.coupon_metadata) != null && Oe.maximum_concession_amount ? Vt(s == null ? void 0 : s.discount) : ne) : Q ? ((He = (I = s == null ? void 0 : s.discount_metadata) == null ? void 0 : I.mode_specific_cart_alteration) == null ? void 0 : He.length) > 1 ? `Get items worth ₹${ne}` : `Get an item worth ₹${ne}` : ((pe = (ce = s == null ? void 0 : s.discount_metadata) == null ? void 0 : ce.coupon_metadata) == null ? void 0 : pe.deduction_type) === "FLAT" ? `Get ₹${ne} off` : (G = (ye = s == null ? void 0 : s.discount_metadata) == null ? void 0 : ye.coupon_metadata) != null && G.maximum_concession_amount ? `Get ₹${Vt(s==null?void 0:s.discount)} off` : `Extra ${ne}% off`
            }, [s, ne, Q]);
        return {
            billing: r,
            invalidOfferDialogOpen: S,
            setInvalidOfferDialogOpen: K,
            handleInvalidOfferDialogClose: V,
            freebiePrice: Y,
            hasPrepaidFreebie: Q,
            discountCondition: $,
            hasDiscountOrFreebie: X,
            handleMethodClick: oe,
            offerText: Z
        }
    },
    nl = ({
        customClass: s = "",
        modeData: t,
        inFocus: n
    }) => {
        var Z, me, B, M, se, ue, Te;
        const {
            t: r
        } = te(), {
            mode: a,
            discount: o,
            amount: x,
            metadata: l,
            is_available: m,
            unavailability_reasons: h,
            emi_details: c
        } = t, {
            title: u,
            description: C,
            hideDescription: y,
            logo: g,
            additional_charge_type: i = "FLAT",
            additional_charge_value: j = 0
        } = l || {}, {
            state: {
                merchant: p
            }
        } = Ye(), {
            hasDiscountOrFreebie: E,
            handleMethodClick: _,
            invalidOfferDialogOpen: A,
            handleInvalidOfferDialogClose: N,
            freebiePrice: b,
            hasPrepaidFreebie: f,
            billing: w,
            offerText: L
        } = Vn({
            modeData: t,
            inFocus: n
        }), {
            state: {
                paymentMethods: k
            }
        } = Re();
        gr(), Vt(f ? b : (me = (Z = t == null ? void 0 : t.discount_metadata) == null ? void 0 : Z.coupon_metadata) == null ? void 0 : me.concession_amount);
        const v = ({
                color: le,
                size: he
            }) => {
                var fe;
                let ie = (fe = os[a]) == null ? void 0 : fe.logo;
                return a === "UPI" && (p != null && p.upiTileWithIcons) && (ie = so), e.jsx(ie, {
                    color: le,
                    size: he,
                    fill: "none",
                    shouldUpdateOnHover: E && m,
                    "data-sentry-element": "LogoComponent",
                    "data-sentry-component": "MethodLogo",
                    "data-sentry-source-file": "MethodCard.tsx"
                })
            },
            T = d.useMemo(() => c ? c.map(le => ({
                tenure: le.tenure,
                remainingAmount: le.remaining_amount,
                downPayment: le.down_payment
            })) : [], [c]),
            F = d.useCallback(() => h != null && h.length ? h.some(he => he.type === "SHIPPING_HANDLES") ? e.jsxs("p", {
                className: "flex items-center gap-1 space-x-1 text-sm font-medium text-carbon-dark",
                children: [e.jsx("span", {
                    children: r("select_shipping")
                }), " ", e.jsx(Ct, {
                    className: "h-4 w-4 text-coal-dark"
                })]
            }) : e.jsxs("p", {
                className: "flex items-center gap-1 space-x-1 text-sm font-medium text-carbon-dark",
                children: [e.jsx("span", {
                    children: r("remove_offers")
                }), " ", e.jsx(Ct, {
                    className: "h-4 w-4"
                })]
            }) : e.jsx(e.Fragment, {}), [h, r]),
            $ = d.useCallback(() => {
                var he, ie;
                const le = T.map(fe => fe.tenure).join("/");
                return e.jsxs("div", {
                    className: `flex items-center space-x-2 ${E?"pt-3":""}`,
                    children: [e.jsxs("div", {
                        className: "flex flex-col items-end justify-end space-y-1 ",
                        children: [e.jsxs("span", {
                            children: [Ee((he = T[0]) == null ? void 0 : he.downPayment), " ", T != null && T.length ? r("now") : ""]
                        }), !!(T != null && T.length) && e.jsxs("span", {
                            className: "text-xs font-normal text-coal-dark",
                            children: [Ee((ie = T[0]) == null ? void 0 : ie.remainingAmount), e.jsxs("span", {
                                className: "text-xs font-normal text-gray-dark",
                                children: [" ", r("in_x_months", {
                                    months: le
                                })]
                            })]
                        })]
                    }), e.jsx(Ct, {
                        className: "h-4 w-4 text-coal-dark"
                    })]
                })
            }, [a, T]),
            Q = d.useCallback(() => {
                var he, ie;
                const le = T.map(fe => fe.tenure).join("/");
                return e.jsxs("div", {
                    className: `flex items-center space-x-2 ${E?"pt-3":""}`,
                    children: [e.jsxs("div", {
                        className: "flex flex-col items-end justify-end space-y-1 ",
                        children: [e.jsxs("span", {
                            children: [Ee((he = T[0]) == null ? void 0 : he.downPayment), " ", T != null && T.length ? r("now") : ""]
                        }), !!(T != null && T.length) && e.jsxs("span", {
                            className: "text-xs font-normal text-coal-dark",
                            children: [Ee((ie = T[0]) == null ? void 0 : ie.remainingAmount), e.jsxs("span", {
                                className: "text-xs font-normal text-gray-dark",
                                children: [" ", r("in_x_months", {
                                    months: le
                                })]
                            })]
                        })]
                    }), e.jsx(Ct, {
                        className: "h-4 w-4 text-coal-dark"
                    })]
                })
            }, [a, T]),
            Y = d.useCallback(() => e.jsx("div", {
                className: "flex items-center space-x-2 ",
                children: e.jsx("div", {
                    className: "flex flex-col items-end justify-end space-y-1",
                    children: e.jsx(Cs, {
                        className: Fe(m ? "!bg-coal-dark !text-white" : "!text-gray-dark", "px-2 py-0.5 text-xs font-medium "),
                        children: r("pay_x_now_and_y_on_delivery_tag", {
                            amount: Ee(x),
                            cod_amount: Ee(l.cod_amount)
                        })
                    })
                })
            }), [a]),
            S = !["SPLIT_COD", "COD"].includes(a) && j > 0,
            K = a === "SPLIT_COD",
            V = ["SPLIT_COD", "COD"].includes(a),
            oe = () => {
                var ie;
                const le = Number((ie = w == null ? void 0 : w.cod) != null ? ie : 0),
                    he = a === "SPLIT_COD" ? 0 : Number(j != null ? j : 0);
                return le + he > 0
            },
            xe = (M = (B = p == null ? void 0 : p.splitCod) == null ? void 0 : B.excludeCodCharges) != null ? M : !1,
            X = V && oe() && !(K && xe),
            ne = d.useMemo(() => {
                var le;
                if (a === "SIMPL" || a === "SIMPL_PL") return r("includes_charges");
                if (a === "SPLIT_COD" && X) return r("include_cod_fee", {
                    amount: Ee((le = w == null ? void 0 : w.cod) != null ? le : 0, !1)
                });
                if (i === "FLAT" && S) return r("include_additional_charges", {
                    amount: Ee(j)
                });
                if (i === "FLAT" && X) return r("include_cod_fee", {
                    amount: Ee(((w == null ? void 0 : w.cod) || 0) + j, !1)
                });
                if (i === "PERCENTAGE" && S) return r("include_additional_charges_in_percentage", {
                    amount: j
                });
                if (i === "PERCENTAGE" && X) return r("include_cod_fee_in_percentage", {
                    amount: j
                })
            }, [i, j, w]);
        return e.jsxs(e.Fragment, {
            children: [e.jsxs("div", {
                className: `group flex flex-row items-center justify-between ${s} relative min-h-[72px] w-full cursor-pointer ${E||m?"hover:payment-method-focus":""}`,
                onClick: _,
                children: [e.jsxs("div", {
                    className: "flex h-full flex-[2] items-center gap-3 p-3",
                    children: [e.jsx("div", {
                        className: "self-start",
                        children: g ? e.jsx("img", {
                            src: g,
                            alt: (se = os[a]) == null ? void 0 : se.header,
                            className: "h-9 w-9 object-contain"
                        }) : e.jsx(v, {
                            color: m ? "#4D4D4D" : "#949494"
                        })
                    }), e.jsxs("div", {
                        className: "flex w-full flex-1 flex-col items-start justify-start space-y-1",
                        children: [e.jsx("div", {
                            className: "flex w-full flex-row items-center justify-start space-x-3",
                            children: e.jsxs("div", {
                                className: "flex flex-1 flex-col justify-center space-y-1",
                                children: [e.jsx("h3", {
                                    className: `text-sm font-medium ${m?"text-coal-dark":"text-gray-dark"}`,
                                    children: u || ((ue = os[a]) == null ? void 0 : ue.header)
                                }), !y && e.jsx("p", {
                                    className: "method-card-description-clamp overflow-hidden text-ellipsis text-xs font-normal text-gray-dark",
                                    children: C || ((Te = os[a]) == null ? void 0 : Te.subheader)
                                })]
                            })
                        }), K && Y(), X && e.jsx(Cs, {
                            className: `${m?"text-coal-dark":"text-gray-dark"}`,
                            children: ne
                        }), S && e.jsx(Cs, {
                            className: `${m?"text-coal-dark":"text-gray-dark"}`,
                            children: ne
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "flex justify-end px-3",
                    children: [E && e.jsx("div", {
                        className: "payment-method-rewards-banner absolute right-0 top-0 flex flex-col items-center justify-center space-y-1 px-3 py-1 text-yay-dark",
                        children: e.jsx("p", {
                            className: " flex items-center space-x-1 text-xs font-medium",
                            children: L
                        })
                    }), !m && F(), m && e.jsx("p", {
                        className: "flex items-center gap-1 space-x-1 text-sm font-medium text-carbon-dark",
                        children: a === "SNPM" && (T != null && T.length) ? $() : a === "SIMPL" && (T != null && T.length) ? Q() : x && e.jsxs(e.Fragment, {
                            children: [e.jsx("span", {
                                children: Ee(x)
                            }), e.jsx(Ct, {
                                className: "h-4 w-4 text-coal-dark"
                            })]
                        })
                    })]
                })]
            }), e.jsx(al, {
                isOpen: A,
                handleClose: N,
                unavailabilityReasons: h,
                mode: t,
                "data-sentry-element": "InvalidOffersDialog",
                "data-sentry-source-file": "MethodCard.tsx"
            })]
        })
    },
    rl = Ie.memo(nl),
    ws = [{
        logo: ao,
        name: js.t("phone_pe"),
        id: "phonepe"
    }, {
        logo: no,
        name: js.t("gpay"),
        id: "gpay"
    }, {
        logo: ro,
        name: js.t("paytm"),
        id: "paytm"
    }, {
        logo: oo,
        name: js.t("cred"),
        id: "cred"
    }, {
        logo: Rn,
        name: js.t("upi_others"),
        id: "others"
    }],
    qn = ({
        logo: s,
        name: t,
        isLoading: n = !1
    }) => e.jsxs("div", {
        className: "flex cursor-pointer flex-col items-center space-y-4",
        "data-sentry-component": "MethodLogo",
        "data-sentry-source-file": "MethodLogo.tsx",
        children: [e.jsx("div", {
            className: `rounded-lg ${n&&"upiLogo-loader cursor-not-allowed"} h-8 w-8`,
            children: e.jsx("img", {
                src: s,
                alt: t,
                className: `h-10 w-10 rounded object-contain ${n&&"upiLogoLoader-img"}`
            })
        }), e.jsx("p", {
            className: "text-xs font-medium text-coal-dark",
            children: t
        })]
    }),
    da = ({
        modeData: s
    }) => {
        var $, Q, Y;
        const {
            t
        } = te(), {
            sendAnalyticsEvent: n
        } = qe(), [r, a] = d.useState(!1), [o, x] = d.useState(null), l = d.useRef(null), {
            state: {
                paymentMethods: m,
                isPolling: h
            },
            actions: {
                setPaymentState: c
            }
        } = Re(), {
            state: {
                checkoutId: u
            },
            actions: {
                setCheckoutExpired: C
            }
        } = ge(), {
            hasDiscountOrFreebie: y,
            offerText: g
        } = Vn({
            modeData: s,
            inFocus: !1
        }), [i, j] = d.useState(15 * 60), p = d.useMemo(() => {
            var K, V;
            const S = (V = (K = m == null ? void 0 : m.find(oe => oe.mode === "UPI_INTENT")) == null ? void 0 : K.metadata) == null ? void 0 : V.available_apps;
            return S ? ws.filter(xe => S.includes(xe.id)) : ws
        }, [t, m]), E = m == null ? void 0 : m.find(S => S.mode === "UPI_INTENT"), _ = E == null ? void 0 : E.is_available, A = d.useMemo(() => s == null ? void 0 : s.amount, [s]), {
            handleSubmit: N,
            setErrors: b,
            inputProps: f,
            state: {
                values: w,
                errors: L
            }
        } = as({
            initialState: {
                id: "",
                save: !1
            },
            validationSchema: {
                id: {
                    required: t("invalid_upi"),
                    type: "string",
                    when: S => {
                        if (!/[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}/.test(S)) return {
                            status: !0,
                            message: t("invalid_upi")
                        }
                    }
                }
            }
        }), k = (S, K = !1) => ee(void 0, null, function*() {
            var V, oe;
            try {
                if (!ls() && !K) {
                    De(t("invalid_upi"));
                    return
                }
                a(!0);
                const xe = yield Ls("UPI_INTENT", u, s == null ? void 0 : s.context, void 0, C);
                if (!xe) return;
                const X = (oe = (V = xe == null ? void 0 : xe.next_steps) == null ? void 0 : V.pg_action) == null ? void 0 : oe.action_url,
                    ne = En(K ? "NA" : S, X != null ? X : "");
                if (!ne) {
                    De(t("something_went_wrong"));
                    return
                }
                const Z = m == null ? void 0 : m.find(me => me.mode === "UPI_INTENT");
                K ? (n({
                    eventName: q.FLO_PAYMENT_METHOD_SELECTED,
                    eventFor: [Ke.SF_ANALYTICS, Ke.FACEBOOK_PIXEL],
                    eventType: "click",
                    metaData: {
                        methodType: "upi_qr",
                        automationData: Ut(Z)
                    }
                }), n({
                    eventName: q.FLO_PAYMENT_MODE_SELECTED,
                    eventType: "click",
                    metaData: {
                        modeType: S,
                        methodType: "upi_qr",
                        automationData: Ut(Z)
                    }
                }), x(ne), c({
                    isProcessingDialogVisible: !1,
                    paymentStatus: "PROCESSING",
                    isPolling: !0,
                    isQRCode: !0
                })) : (n({
                    eventName: q.FLO_PAYMENT_METHOD_SELECTED,
                    eventFor: [Ke.SF_ANALYTICS, Ke.FACEBOOK_PIXEL],
                    eventType: "click",
                    metaData: {
                        methodType: "upi_intent",
                        automationData: Ut(Z)
                    }
                }), n({
                    eventName: q.FLO_PAYMENT_MODE_SELECTED,
                    eventType: "click",
                    metaData: {
                        modeType: S,
                        methodType: "upi_intent",
                        automationData: Ut(Z)
                    }
                }), c({
                    isProcessingDialogVisible: !0,
                    paymentStatus: "PROCESSING",
                    isPolling: !0
                }), gt(ne))
            } catch (xe) {
                De(t("invalid_upi"))
            } finally {
                a(!1)
            }
        }), v = S => ee(void 0, null, function*() {
            try {
                const K = m == null ? void 0 : m.find(V => V.mode === "UPI_COLLECT");
                n({
                    eventName: q.FLO_PAYMENT_METHOD_SELECTED,
                    eventFor: [Ke.SF_ANALYTICS, Ke.FACEBOOK_PIXEL],
                    eventType: "click",
                    metaData: {
                        methodType: "UPI_COLLECT",
                        automationData: Ut(K)
                    }
                }), n({
                    eventName: q.FLO_PAYMENT_MODE_SELECTED,
                    eventType: "click",
                    metaData: {
                        modeType: "UPI_COLLECT",
                        methodType: "UPI_COLLECT",
                        automationData: Ut(K)
                    }
                }), c({
                    isProcessingDialogVisible: !0,
                    paymentStatus: "PROCESSING",
                    isPolling: !0
                }), yield Ls("UPI_COLLECT", u, s == null ? void 0 : s.context, {
                    vpa: S == null ? void 0 : S.id
                }, C)
            } catch (K) {
                throw c({
                    isProcessingDialogVisible: !1
                }), b({
                    id: {
                        status: !0,
                        message: t("invalid_upi")
                    }
                }), De(t("invalid_upi")), new Error(K)
            }
        }), T = d.useCallback(() => e.jsx("div", {
            className: "h-32 w-32 relative -top-1",
            children: o ? e.jsxs("div", {
                className: "w-full h-full relative",
                children: [e.jsx(er, {
                    value: o,
                    size: 128
                }), e.jsxs("p", {
                    className: "relative  text-xxs font-normal text-coal-light pt-1 text-nowrap",
                    children: ["QR code expires in ", e.jsx("span", {
                        className: "font-medium text-red-500",
                        children: F(i)
                    }), " mins"]
                })]
            }) : e.jsxs(e.Fragment, {
                children: [e.jsx("img", {
                    src: lo,
                    width: 128,
                    height: 128,
                    className: "absolute top-0 left-0"
                }), e.jsx("button", {
                    onClick: () => k(p[0].id, !0),
                    className: "w-full h-full z-1 absolute flex items-center justify-center",
                    disabled: r || h,
                    children: e.jsx("span", {
                        className: "text-xs rounded-full font-medium text-white p-2 bg-primary-dark flex items-center justify-center w-fit h-fit",
                        children: r ? e.jsx(go, {}) : "Click to show QR"
                    })
                })]
            })
        }), [o, r, i]);
        d.useEffect(() => (o && i > 0 && (l.current = setInterval(() => {
            j(S => S <= 1 ? (x(null), 15 * 60) : S - 1)
        }, 1e3)), () => {
            l.current && clearInterval(l.current)
        }), [o]);
        const F = S => {
            const K = Math.floor(S / 60),
                V = S % 60;
            return `${K}:${V.toString().padStart(2,"0")}`
        };
        return e.jsxs("div", {
            className: `relative rounded-xl border-[2px] border-[#f0f0f0] bg-white ${y?"pt-4":""}`,
            "data-sentry-component": "UPICollect",
            "data-sentry-source-file": "CollectAndIntent.tsx",
            children: [y && e.jsx("div", {
                className: "payment-method-rewards-banner absolute right-0 top-0 flex flex-col items-center justify-center space-y-1 px-3 py-1 text-yay-dark",
                children: e.jsx("p", {
                    className: " flex items-center space-x-1 text-xs font-medium",
                    children: g
                })
            }), e.jsxs("div", {
                className: "flex flex-row items-center justify-between px-4 pt-2",
                children: [e.jsxs("div", {
                    className: "flex flex-row items-center gap-2",
                    children: [e.jsx("img", {
                        src: Rn,
                        alt: "upi_logo",
                        className: `h-7 w-7 rounded object-contain ${r&&"upiLogoLoader-img"}`
                    }), e.jsx("div", {
                        className: "text-sm font-medium text-coal-dark",
                        children: ls() ? "UPI" : "Open any UPI App to scan and pay"
                    })]
                }), e.jsx("div", {
                    className: "text-sm font-medium text-coal-dark",
                    children: A && Ee(A)
                })]
            }), ls() ? e.jsx(e.Fragment, {
                children: e.jsx("div", {
                    className: "flex w-full flex-col rounded-2xl",
                    children: e.jsx("ul", {
                        className: "grid w-full auto-cols-fr grid-flow-col gap-2 px-4 pt-4",
                        children: p == null ? void 0 : p.map(S => e.jsx("li", {
                            onClick: () => _ && k(S.id),
                            className: "flex cursor-pointer items-center justify-center rounded-lg border border-gray-200 p-2 hover:bg-gray-50",
                            children: e.jsx(qn, {
                                logo: S.logo,
                                name: S.name,
                                id: S.id,
                                isLoading: r
                            })
                        }, S.id))
                    })
                })
            }) : e.jsx(e.Fragment, {
                children: e.jsxs("div", {
                    className: "flex w-full gap-4 px-4 pt-4",
                    children: [e.jsx("ul", {
                        className: "grid grid-cols-2 gap-1 flex-1",
                        children: ($ = ws.slice(0, 4)) == null ? void 0 : $.map((S, K) => e.jsxs("li", {
                            className: "flex flex-col items-center justify-center gap-2 rounded-lg p-2 hover:bg-gray-50",
                            children: [e.jsx("img", {
                                src: S == null ? void 0 : S.logo,
                                alt: S == null ? void 0 : S.name,
                                className: "w-8 h-8 rounded-full"
                            }), e.jsx("span", {
                                className: "text-xs font-normal text-coal-light",
                                children: S == null ? void 0 : S.name
                            })]
                        }, K))
                    }), e.jsx("div", {
                        className: "flex items-center justify-center w-1/2",
                        children: T()
                    })]
                })
            }), e.jsx("div", {
                className: "flex flex-col space-y-3 rounded-2xl pt-3",
                children: e.jsxs("div", {
                    className: "flex flex-row items-center justify-center gap-2",
                    children: [e.jsx("div", {
                        className: "h-px w-full bg-gray-light"
                    }), e.jsx("p", {
                        className: "text-sm font-medium text-coal-light",
                        children: "or"
                    }), e.jsx("div", {
                        className: "h-px w-full bg-gray-light"
                    })]
                })
            }), e.jsx("form", {
                onSubmit: N(v),
                className: "flex flex-col space-y-3 rounded-2xl p-3",
                id: "card-form",
                children: e.jsxs("div", {
                    className: "relative flex items-center space-x-2",
                    children: [e.jsx("div", {
                        className: "w-full",
                        children: e.jsx(Qe, R(P({
                            disabled: !_,
                            type: "text",
                            placeholder: t("upi_placeholder")
                        }, f(be.id)), {
                            autoComplete: "off",
                            error: L.id,
                            height: "h-10",
                            "data-sentry-element": "InputField",
                            "data-sentry-source-file": "CollectAndIntent.tsx"
                        }))
                    }), e.jsx("span", {
                        className: "self-start relative top-[2px]",
                        children: e.jsx(ut, {
                            height: "h-10",
                            width: "w-16",
                            type: "submit",
                            borderRadius: "rounded-xl",
                            buttonText: t("pay"),
                            isCheckout: !1,
                            isDisabled: !((Q = w == null ? void 0 : w.id) != null && Q.length) || ((Y = L == null ? void 0 : L.id) == null ? void 0 : Y.status) || !_,
                            className: "whitespace-nowrap",
                            "data-sentry-element": "PrimaryButton",
                            "data-sentry-source-file": "CollectAndIntent.tsx"
                        })
                    })]
                })
            })]
        })
    },
    ol = ["UPI_COLLECT"],
    ll = ["SIMPL_PL", "SNPM", "SIMPL"],
    ua = ({
        renderMethods: s
    }) => {
        const {
            state: {
                merchant: t
            }
        } = Ye(), {
            state: {
                openPaymentMethodDialog: n
            }
        } = Re();
        if (!s.length) return null;
        const r = s.find(l => l.mode === "UPI_INTENT"),
            a = d.useMemo(() => (t == null ? void 0 : t.upiTileWithIcons) && r, [t, r]),
            o = (l, m) => {
                const h = m.some(C => C.mode === "UPI_INTENT"),
                    c = m.some(C => C.mode === "UPI"),
                    u = ls();
                return l.mode === "UPI_INTENT" && a && n === "SPLIT_COD" ? !0 : !(l.mode === "UPI" && h && u || l.mode === "UPI_INTENT" && c && !u)
            },
            x = s.filter(l => l.mode in os && !ol.includes(l.mode) && o(l, s) && (n !== "SPLIT_COD" || !ll.includes(l.mode))).sort(l => l.mode === "UPI_INTENT" ? -1 : 1);
        return e.jsx(e.Fragment, {
            children: x.map((l, m) => e.jsx("div", {
                className: `overflow-hidden rounded-xl  border-[#f0f0f0] ${l.mode==="UPI_INTENT"?"":"border-[2px]"}`,
                id: `flo__payments__${l.mode}`,
                children: a && l.mode === "UPI_INTENT" ? e.jsx(da, {
                    modeData: l
                }) : e.jsx(rl, {
                    modeData: l,
                    customClass: "bg-white"
                })
            }, `${l.mode}-${m}`))
        })
    },
    il = ({
        setIsOpen: s
    }) => {
        const {
            t
        } = te(), {
            state: {
                appliedGiftCards: n,
                checkoutId: r,
                appliedCoupons: a,
                billing: o
            },
            actions: {
                updateCheckoutBasedOnCheckoutResponse: x
            }
        } = ge(), {
            actions: {
                mutatePayment: l
            }
        } = Re(), [m, h] = d.useState(""), [c, u] = d.useState(""), [C, y] = d.useState({
            status: !1,
            message: t("gift_card_redeem_error")
        }), [g, i] = d.useState(!1), j = () => ee(void 0, null, function*() {
            if (!m || !c) {
                y(E => R(P({}, E), {
                    status: !0,
                    message: t("gift_card_redeem_error")
                }));
                return
            }
            try {
                y(A => R(P({}, A), {
                    status: !1
                })), i(!0);
                const E = {
                        card: m,
                        pin: c
                    },
                    _ = yield wt(`/checkout/v1/checkout/${r}/rewards/gc/apply`, E);
                if (_ != null && _.status && (_ == null ? void 0 : _.status) === "FAILED") {
                    u(""), y(A => {
                        var N;
                        return R(P({}, A), {
                            status: !0,
                            message: (N = _ == null ? void 0 : _.error) != null ? N : t("gift_card_redeem_error")
                        })
                    }), i(!1);
                    return
                }
                p(_), l(), Be([`/checkout/${r}/rewards`, vt.KRATOS_PRIVATE]), s(!1), i(!1)
            } catch (E) {
                i(!1), De(t("gift_card_error")), console.error(E)
            }
        }), p = E => {
            x(E, !0)
        };
        return e.jsxs(e.Fragment, {
            children: [e.jsx(Ze, {
                className: "pt-[1.25rem]",
                "data-sentry-element": "DialogHeader",
                "data-sentry-source-file": "GiftCardDialog.tsx",
                children: e.jsxs("div", {
                    className: "flex h-full w-full flex-row items-center justify-between ",
                    children: [e.jsx("h1", {
                        className: "text-base font-medium",
                        children: n.length > 0 ? t("use_another_gift_card") : t("use_gift_card")
                    }), e.jsx("button", {
                        className: "outline-none",
                        children: e.jsx(st, {
                            className: "h-6 w-6 cursor-pointer text-coal-dark",
                            onClick: () => s(!1),
                            "data-sentry-element": "X",
                            "data-sentry-source-file": "GiftCardDialog.tsx"
                        })
                    })]
                })
            }), e.jsx(Je, {
                "data-sentry-element": "DialogBody",
                "data-sentry-source-file": "GiftCardDialog.tsx",
                children: e.jsxs("div", {
                    className: "relative flex w-full flex-col space-y-4 px-6 pt-4 pb-8",
                    children: [e.jsx(Qe, {
                        type: "text",
                        id: "gcNumber",
                        name: "gcNumber",
                        value: m,
                        placeholder: "Gift card number",
                        onChange: E => {
                            h(E.target.value)
                        },
                        error: C,
                        disabled: g,
                        maxLength: 16,
                        "data-sentry-element": "InputField",
                        "data-sentry-source-file": "GiftCardDialog.tsx"
                    }), e.jsx(Qe, {
                        type: "password",
                        id: "gcPin",
                        name: "gcPin",
                        value: c,
                        placeholder: "Gift card pin",
                        onChange: E => {
                            u(E.target.value)
                        },
                        disabled: g,
                        maxLength: 6,
                        "data-sentry-element": "InputField",
                        "data-sentry-source-file": "GiftCardDialog.tsx"
                    }), e.jsx(ut, {
                        height: "h-14",
                        isLoading: g,
                        buttonText: g ? "" : t("redeem"),
                        onClick: j,
                        "data-sentry-element": "PrimaryButton",
                        "data-sentry-source-file": "GiftCardDialog.tsx"
                    })]
                })
            }), g && e.jsx(St, {})]
        })
    },
    cl = Ie.lazy(() => kt(() =>
        import ("./assests-8-RYiWy6.js").then(s => s.a4), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]))),
    dl = ({}) => {
        var A, N, b, f, w, L;
        const {
            t: s
        } = te(), {
            state: {
                appliedGiftCards: t,
                checkoutId: n,
                isC2P: r,
                hasDefaultShippingHandleSelected: a,
                initialCheckoutStep: o
            },
            actions: {
                updateCheckoutBasedOnCheckoutResponse: x,
                setCheckoutModal: l
            }
        } = ge(), {
            state: {
                paymentMethods: m
            },
            actions: {
                handleUnapplicablePaymentMethod: h,
                mutatePayment: c
            }
        } = Re(), u = m == null ? void 0 : m.find(k => k.mode === "GC"), C = Hs(u == null ? void 0 : u.unavailability_reasons, (A = u == null ? void 0 : u.metadata) == null ? void 0 : A.title), [y, g] = d.useState(!1), [i, j] = d.useState(!1), p = k => ee(void 0, null, function*() {
            if (t != null && t.find(v => (v == null ? void 0 : v.cardId) === k)) try {
                j(!0);
                const v = {
                        src_reference_id: k
                    },
                    T = yield cs(`/checkout/v1/checkout/${n}/rewards/gc/remove`, v);
                E(T), c(), Be([`/checkout/${n}/rewards`, vt.KRATOS_PRIVATE])
            } catch (v) {
                De(s("delete_gift_card_error")), console.error(v)
            } finally {
                j(!1)
            }
        }), E = k => {
            x(k, !0)
        }, _ = () => {
            if (!u.is_available) {
                h(u.mode, u.unavailability_reasons);
                return
            }
            if (!(a && o !== "PAYMENTS")) {
                l("SHIPPING_HANDLES");
                return
            }
            g(!0)
        };
        return e.jsxs("div", {
            className: "border-base overflow-hidden bg-white",
            "data-sentry-component": "GiftCard",
            "data-sentry-source-file": "GiftCard.tsx",
            children: [e.jsxs("div", {
                onClick: () => {
                    _()
                },
                children: [e.jsxs("div", {
                    className: "bg-red flex w-full cursor-pointer flex-row items-center justify-center space-x-3 p-3",
                    children: [e.jsx("div", {
                        className: "flex h-9 w-9 items-center justify-center",
                        children: e.jsx(cl, {
                            "data-sentry-element": "GiftCardIcon",
                            "data-sentry-source-file": "GiftCard.tsx"
                        })
                    }), e.jsxs("div", {
                        className: "flex w-full flex-1 flex-col items-start justify-start space-y-1",
                        children: [e.jsx("h3", {
                            className: "text-sm font-medium text-coal-dark",
                            children: (b = (N = u == null ? void 0 : u.metadata) == null ? void 0 : N.title) != null ? b : ""
                        }), !((f = u == null ? void 0 : u.metadata) != null && f.hideDescription) && e.jsx("p", {
                            className: "text-xs font-normal text-gray-dark",
                            children: (L = (w = u == null ? void 0 : u.metadata) == null ? void 0 : w.description) != null ? L : ""
                        })]
                    }), e.jsx(Rs, {
                        className: "text-gray-dark",
                        strokeWidth: 2,
                        size: 16,
                        "data-sentry-element": "ArrowRight",
                        "data-sentry-source-file": "GiftCard.tsx"
                    })]
                }), !u.is_available && !!C && e.jsx("div", {
                    className: "bg-[#FAFAFA]",
                    children: e.jsx("p", {
                        className: "px-3 py-2 text-xs font-normal text-gray-dark",
                        children: C
                    })
                })]
            }), !!(t != null && t.length) && e.jsx("div", {
                className: "flex w-full flex-col bg-yay-lighter",
                children: t.map(k => e.jsxs("div", {
                    className: "border-box flex w-full flex-row px-3 py-3",
                    children: [e.jsxs("div", {
                        className: "flex w-full flex-row items-center justify-between overflow-hidden pr-2",
                        children: [e.jsx("h3", {
                            className: "flex w-full items-center space-x-1 truncate pr-2 text-sm font-normal text-coal-light",
                            children: e.jsx("p", {
                                className: "truncate text-sm font-medium uppercase text-coal-dark",
                                children: Cn(k == null ? void 0 : k.displayName, 9, 5, "•")
                            })
                        }), e.jsx("p", {
                            className: "inline-flex w-1/2 justify-end overflow-hidden text-sm font-medium text-yay-dark",
                            children: e.jsx(tt, {
                                total: k == null ? void 0 : k.cardValue,
                                isDiscounted: !0
                            })
                        })]
                    }), !r && e.jsx("button", {
                        className: "flex h-4 w-4 items-center justify-center",
                        onClick: () => p(k == null ? void 0 : k.cardId),
                        children: e.jsx(Qr, {
                            className: "h-4 w-4 text-coal-dark",
                            strokeWidth: 2.5
                        })
                    })]
                }, k == null ? void 0 : k.cardId))
            }), e.jsx(Pe, {
                isOpen: y,
                translateAxis: "y",
                modalType: "GIFT_CARDS",
                dialogOverlay: !0,
                customClass: "overflow-scroll md:!top-auto md:absolute",
                "data-sentry-element": "GenericDialog",
                "data-sentry-source-file": "GiftCard.tsx",
                children: e.jsx(il, {
                    setIsOpen: k => g(k),
                    "data-sentry-element": "GiftCardDialog",
                    "data-sentry-source-file": "GiftCard.tsx"
                })
            }), i && e.jsx(St, {})]
        })
    },
    ul = Ie.lazy(() => kt(() =>
        import ("./assests-8-RYiWy6.js").then(s => s.a4), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]))),
    ln = ({}) => {
        var _, A, N, b, f, w;
        const {
            t: s
        } = te(), {
            state: {
                checkoutId: t,
                hasDefaultShippingHandleSelected: n,
                initialCheckoutStep: r,
                checkoutValidations: a,
                shippingHandles: o,
                activeComponent: x
            },
            actions: {
                setCheckoutModal: l,
                setActiveComponent: m
            }
        } = ge(), {
            verifyDefaultAddress: h
        } = bn(), {
            triggerCheckoutErrorInfoToast: c
        } = ss(), {
            state: {
                user: u
            }
        } = mt(), {
            state: {
                paymentMethods: C
            }
        } = Re(), {
            sendAnalyticsEvent: y
        } = qe(), g = C == null ? void 0 : C.find(L => L.mode === "SHOPIFY_GC"), i = Hs(g == null ? void 0 : g.unavailability_reasons, (_ = g == null ? void 0 : g.metadata) == null ? void 0 : _.title), [j, p] = d.useState(!1), E = () => ee(void 0, null, function*() {
            var k, v, T, F, $;
            const L = h();
            if (r === "PAYMENTS") {
                if (!((k = u == null ? void 0 : u.addresses) != null && k.length)) {
                    l("ADDRESS_NEW");
                    return
                }
                if (!L) {
                    if (!((v = a == null ? void 0 : a.address) != null && v.metadata)) {
                        l("ADDRESS_LIST"), De(s("serviceability_error"));
                        return
                    }
                    l("ADDRESS_EDIT");
                    return
                }
                if (!(o != null && o.length)) {
                    c(s("serviceability_error")), m("ADDRESS_SECTION");
                    return
                }
            }
            if (!n) {
                l("SHIPPING_HANDLES");
                return
            }
            try {
                y({
                    eventName: q.FLO_PAYMENT_METHOD_SELECTED,
                    eventFor: [Ke.SF_ANALYTICS, Ke.FACEBOOK_PIXEL],
                    eventType: "click",
                    metaData: {
                        methodType: "SHOPIFY_GC"
                    }
                }), p(!0);
                const Q = yield ot(`/checkout/v1/checkout/${t}/draft-order`), Y = ($ = (F = (T = Q == null ? void 0 : Q.metadata) == null ? void 0 : T.action_urls) == null ? void 0 : F.GIFT_CARD_TILE) == null ? void 0 : $.success_url;
                if (Y) gt(Y);
                else throw new Error("Error while applying gift cards")
            } catch (Q) {
                De(s("shopify_gift_card_error")), console.error(Q)
            } finally {
                p(!1)
            }
        });
        return e.jsxs("div", {
            className: "border-base overflow-hidden bg-white",
            "data-sentry-component": "ShopifyGiftCard",
            "data-sentry-source-file": "ShopifyGiftCard.tsx",
            children: [e.jsxs("button", {
                className: `w-full ${g!=null&&g.is_available?"cursor-pointer":"cursor-not-allowed"}`,
                disabled: !(g != null && g.is_available),
                onClick: () => {
                    E()
                },
                children: [e.jsxs("div", {
                    className: `flex w-full  flex-row items-center justify-center space-x-2 p-3 ${g!=null&&g.is_available?"text-coal-dark":"text-gray-dark"}`,
                    children: [e.jsx("div", {
                        className: "flex h-9 w-9 items-center justify-center",
                        children: e.jsx(ul, {
                            color: g != null && g.is_available ? "#4D4D4D" : "#949494",
                            "data-sentry-element": "GiftCardIcon",
                            "data-sentry-source-file": "ShopifyGiftCard.tsx"
                        })
                    }), e.jsxs("div", {
                        className: "flex w-full flex-1 flex-col items-start justify-start space-y-1",
                        children: [e.jsx("h3", {
                            className: "text-sm font-medium",
                            children: (N = (A = g == null ? void 0 : g.metadata) == null ? void 0 : A.title) != null ? N : ""
                        }), !((b = g == null ? void 0 : g.metadata) != null && b.hideDescription) && e.jsx("p", {
                            className: "text-left text-xs font-normal text-gray-dark",
                            children: (w = (f = g == null ? void 0 : g.metadata) == null ? void 0 : f.description) != null ? w : ""
                        })]
                    }), e.jsx(Ct, {
                        className: "h-4 w-4 text-coal-dark",
                        "data-sentry-element": "ChevronRight",
                        "data-sentry-source-file": "ShopifyGiftCard.tsx"
                    })]
                }), !g.is_available && !!i && e.jsx("div", {
                    className: "bg-[#FAFAFA]",
                    children: e.jsx("p", {
                        className: "px-3 py-2 text-left text-xs font-normal text-gray-dark",
                        children: i
                    })
                })]
            }), j && e.jsx(St, {})]
        })
    },
    ml = () => {
        var l;
        const {
            t: s
        } = te(), {
            state: {
                checkoutModal: t,
                checkoutId: n
            },
            actions: {
                setCheckoutModal: r
            }
        } = ge(), [a, o] = d.useState({
            code: "",
            error: "",
            isLoading: !1
        }), x = () => ee(void 0, null, function*() {
            o(m => R(P({}, m), {
                isLoading: !0
            }));
            try {
                const m = yield wt(`/checkout/v2/checkout/${n}/gc/voucher/recharge`, {
                    voucher_payment_mode: "GYFTR",
                    voucher_code: a.code
                });
                m.status === "SUCCESS" ? (Be([`/checkout/v2/checkout/${n}/gc/voucher?voucher_payment_mode=GYFTR`, "CHECKOUT"]), r("GYFTR_REDEEM_VOUCHER_DIALOG")) : o(h => R(P({}, h), {
                    error: m.message
                }))
            } catch (m) {
                o(h => R(P({}, h), {
                    error: "Unable to process voucher. Please try again."
                }))
            } finally {
                o(m => R(P({}, m), {
                    isLoading: !1
                }))
            }
        });
        return e.jsxs(e.Fragment, {
            children: [e.jsx(Ze, {
                "data-sentry-element": "DialogHeader",
                "data-sentry-source-file": "AddGyftrVoucherDialog.tsx",
                children: e.jsxs("div", {
                    className: "flex h-full w-full flex-row items-center justify-between border-b border-dashed border-carbon-lighter py-4 mt-2",
                    children: [e.jsxs("div", {
                        className: "flex flex-row items-center gap-2",
                        children: [e.jsx("img", {
                            src: oa,
                            alt: "Gyftr",
                            className: "w-6 h-6"
                        }), e.jsx("h1", {
                            className: "text-base font-medium",
                            children: s("gift_voucher_or_epay")
                        })]
                    }), e.jsx("button", {
                        className: "outline-none",
                        children: e.jsx(st, {
                            className: "h-6 w-6 cursor-pointer text-coal-dark",
                            onClick: () => {
                                r("NONE")
                            },
                            "data-sentry-element": "X",
                            "data-sentry-source-file": "AddGyftrVoucherDialog.tsx"
                        })
                    })]
                })
            }), e.jsx(Je, {
                className: "!pb-4 !pt-12",
                "data-sentry-element": "DialogBody",
                "data-sentry-source-file": "AddGyftrVoucherDialog.tsx",
                children: e.jsxs("div", {
                    className: "relative flex w-full flex-col space-y-3 px-6 pb-8 pt-4 mt-4",
                    children: [e.jsxs("div", {
                        className: "flex flex-col gap-2",
                        children: [e.jsx(Qe, {
                            type: "text",
                            label: "",
                            id: "voucher_code",
                            name: "voucherCode",
                            value: a.code,
                            onChange: m => o(h => R(P({}, h), {
                                code: m.target.value,
                                error: ""
                            })),
                            filled: !!((l = a.code) != null && l.length),
                            placeholder: "Enter gift voucher code",
                            autoComplete: "off",
                            required: !1,
                            "data-sentry-element": "InputField",
                            "data-sentry-source-file": "AddGyftrVoucherDialog.tsx"
                        }), a.error && e.jsx("p", {
                            className: "text-xs px-2 pb-2 text-red-dark",
                            children: a.error
                        })]
                    }), e.jsx(ut, {
                        buttonText: s("add_gift_voucher_to_epay"),
                        onClick: () => x(),
                        onTouchStart: () => x(),
                        height: "h-14",
                        isLoading: a.isLoading,
                        isDisabled: !1,
                        "data-sentry-element": "PrimaryButton",
                        "data-sentry-source-file": "AddGyftrVoucherDialog.tsx"
                    })]
                })
            })]
        })
    },
    xl = ({
        gyftrBalance: s
    }) => {
        const {
            t
        } = te(), {
            state: {
                checkoutId: n,
                billing: r
            },
            actions: {
                setCheckoutModal: a,
                updateCheckoutBasedOnCheckoutResponse: o
            }
        } = ge(), {
            state: {
                paymentMethods: x
            },
            actions: {
                mutatePayment: l
            }
        } = Re(), m = x == null ? void 0 : x.find(y => y.mode === "GYFTR"), [h, c] = d.useState({
            redeemAmount: Math.min(r.total_payable, s).toString(),
            error: "",
            loading: !1
        });
        d.useEffect(() => {
            c(y => R(P({}, y), {
                redeemAmount: Math.min(r.total_payable, s).toString()
            }))
        }, [r.total_payable, s]);
        const u = () => ee(void 0, null, function*() {
                if (!m.is_available && (m != null && m.unapplicability_reasons.length)) {
                    a("GYFTR_SWITCH_COUPON_DIALOG");
                    return
                }
                c(y => R(P({}, y), {
                    loading: !0
                }));
                try {
                    const y = yield wt(`/checkout/v2/checkout/${n}/gc/voucher`, {
                        redemption_amount: Number(h.redeemAmount),
                        voucher_payment_mode: "GYFTR"
                    });
                    if (y.status && y.status === "FAILED") {
                        c(g => R(P({}, g), {
                            error: y.error
                        }));
                        return
                    }
                    o(y), Be([`/checkout/${n}/discount`, "KRATOS_PRIVATE"]), l(), Be([`/checkout/${n}/rewards`, vt.KRATOS_PRIVATE]), Be(`/checkout/v2/checkout/${n}/gc/voucher?voucher_payment_mode=GYFTR`), a("NONE")
                } catch (y) {
                    console.error("error", y), c(g => R(P({}, g), {
                        error: y.response.data.error
                    }))
                } finally {
                    c(y => R(P({}, y), {
                        loading: !1
                    }))
                }
            }),
            C = y => {
                const g = y.target.value;
                if (g === "") {
                    c(R(P({}, h), {
                        redeemAmount: "0"
                    }));
                    return
                }
                const i = Number(g);
                if (isNaN(i)) return;
                const j = Math.max(0, Math.min(i, r.total_payable, s));
                c(R(P({}, h), {
                    redeemAmount: g.includes(".") ? (i > j ? j : g).toString().slice(0, 15) : j.toString()
                }))
            };
        return e.jsxs(e.Fragment, {
            children: [e.jsx(Ze, {
                "data-sentry-element": "DialogHeader",
                "data-sentry-source-file": "GyftrRedeemDialog.tsx",
                children: e.jsxs("div", {
                    className: "flex h-full w-full flex-row items-center justify-between border-b border-dashed border-carbon-lighter py-3 mt-2",
                    children: [e.jsx("h1", {
                        className: "text-base font-medium",
                        children: t("gift_voucher_or_epay")
                    }), e.jsx("button", {
                        className: "outline-none",
                        children: e.jsx(st, {
                            className: "h-6 w-6 cursor-pointer text-coal-dark",
                            onClick: () => {
                                a("NONE")
                            },
                            "data-sentry-element": "X",
                            "data-sentry-source-file": "GyftrRedeemDialog.tsx"
                        })
                    })]
                })
            }), e.jsx(Je, {
                className: "!pb-4 !pt-12",
                "data-sentry-element": "DialogBody",
                "data-sentry-source-file": "GyftrRedeemDialog.tsx",
                children: e.jsxs("div", {
                    className: "relative flex w-full flex-col space-y-16 px-5 pb-8 pt-4 mt-4",
                    children: [e.jsxs("div", {
                        className: "flex items-center justify-between bg-gray-lightest p-3 rounded-xl border border-gray-light",
                        children: [e.jsxs("div", {
                            className: " flex flex-col  rounded-xl gap-2 ",
                            children: [e.jsxs("div", {
                                className: "text-base text-carbon font-medium",
                                children: ["₹", s]
                            }), e.jsx("div", {
                                className: "text-sm text-coal-light",
                                children: t("gift_voucher_balance")
                            })]
                        }), e.jsxs("div", {
                            className: "flex items-center gap-1 justify-center rounded-xl cursor-pointer ",
                            onClick: () => {
                                a("GYFTR_ADD_COUPON_DIALOG")
                            },
                            children: [e.jsx(es, {
                                size: 14,
                                color: "#4D4D4D",
                                "data-sentry-element": "Plus",
                                "data-sentry-source-file": "GyftrRedeemDialog.tsx"
                            }), e.jsx("span", {
                                className: "text-sm text-coal-dark font-medium",
                                children: t("add_more")
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "mt-8",
                        children: [e.jsx("div", {
                            className: "text-base mb-2",
                            children: t("enter_amount_to_redeem")
                        }), e.jsxs("div", {
                            className: "relative",
                            children: [e.jsx(Qe, {
                                type: "number",
                                label: "",
                                id: "redeem_amount",
                                name: "redeemAmount",
                                value: h.redeemAmount.toString(),
                                onChange: C,
                                filled: !!h.redeemAmount,
                                autoComplete: "off",
                                required: !1,
                                startIcon: e.jsx("span", {
                                    className: "text-coal-dark",
                                    children: "₹"
                                }),
                                "data-sentry-element": "InputField",
                                "data-sentry-source-file": "GyftrRedeemDialog.tsx"
                            }), e.jsx("div", {
                                className: "absolute right-2 top-1/2 -translate-y-1/2",
                                children: e.jsx("button", {
                                    className: "text-primary-dark font-medium min-w-[80px]",
                                    onClick: u,
                                    disabled: h.loading,
                                    children: h.loading ? e.jsx("div", {
                                        className: "flex justify-end items-center pr-4",
                                        children: e.jsx("div", {
                                            className: "w-5 h-5 border-2 border-primary-dark border-t-transparent rounded-full animate-spin"
                                        })
                                    }) : t("redeem")
                                })
                            })]
                        }), h.error && e.jsx("p", {
                            className: "text-xs text-red-dark px-1 mt-1",
                            children: h.error
                        })]
                    })]
                })
            })]
        })
    },
    fl = () => {
        var p;
        const {
            state: {
                checkoutModal: s,
                checkoutId: t,
                billing: n
            },
            actions: {
                setCheckoutModal: r,
                updateCheckoutBasedOnCheckoutResponse: a
            }
        } = ge(), {
            state: {
                paymentMethods: o
            },
            actions: {
                mutatePayment: x
            }
        } = Re(), {
            data: l,
            isValidating: m,
            error: h
        } = us(t ? [`/checkout/v2/checkout/${t}/gc/voucher?voucher_payment_mode=GYFTR`, "CHECKOUT"] : null, ([E, _]) => ot(E, _), xs), {
            t: c
        } = te(), u = o == null ? void 0 : o.find(E => E.mode === "GYFTR"), C = l ? yr(l) : 0, y = () => ee(void 0, null, function*() {
            try {
                const E = yield cs(`/checkout/v2/checkout/${t}/gc/voucher`, {
                    voucher_payment_mode: "GYFTR",
                    redemption_amount: n.gift_card
                });
                a(E), Be([`/checkout/${t}/discount`, "KRATOS_PRIVATE"]), x(), Be([`/checkout/${t}/rewards`, vt.KRATOS_PRIVATE]), Be(`/checkout/v2/checkout/${t}/gc/voucher?voucher_payment_mode=GYFTR`)
            } catch (E) {}
        }), {
            invalidDiscountCodeTitles: g,
            invalidDiscountCodes: i
        } = ma((p = u == null ? void 0 : u.unapplicability_reasons) != null ? p : []), j = () => {
            if (!u.is_available && (u != null && u.unapplicability_reasons.length)) {
                r("GYFTR_SWITCH_COUPON_DIALOG");
                return
            }
            r("GYFTR_REDEEM_VOUCHER_DIALOG")
        };
        return h ? e.jsx(e.Fragment, {}) : e.jsxs(e.Fragment, {
            children: [e.jsx(_e, {
                loading: m,
                "data-sentry-element": "AnimateLoading",
                "data-sentry-source-file": "Gyftr.tsx",
                children: e.jsx(_e.Content, {
                    "data-sentry-element": "unknown",
                    "data-sentry-source-file": "Gyftr.tsx",
                    children: n.gift_card <= 0 && C <= 0 ? e.jsxs("div", {
                        className: "flex items-center justify-between p-4 bg-white rounded-xl shadow-sm mt-2",
                        children: [e.jsxs("div", {
                            className: "flex items-center justify gap-3",
                            children: [e.jsx("img", {
                                src: oa,
                                alt: "Gyftr",
                                className: "w-6 h-6"
                            }), e.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [e.jsx("span", {
                                    className: "text-coal-dark text-sm ",
                                    children: c("have_a_gift_voucher_or_epay")
                                }), e.jsx("span", {
                                    className: "text-gray-dark text-xs ",
                                    children: c("powered_by_gyftr")
                                })]
                            })]
                        }), e.jsx("div", {
                            onClick: () => r("GYFTR_ADD_COUPON_DIALOG"),
                            className: "flex justify-end items-end h-full w-[4.5rem] pr-1",
                            children: e.jsx("span", {
                                className: "text-xs font-medium text-yay-dark cursor-pointer rounded-lg px-3 py-2 border border-yay-dark bg-yay-lighter",
                                children: c("add")
                            })
                        })]
                    }) : e.jsxs("div", {
                        className: "bg-white rounded-xl shadow-sm p-4 flex flex-col mt-2",
                        children: [n.gift_card > 0 ? e.jsxs(e.Fragment, {
                            children: [e.jsxs("div", {
                                className: "flex items-center justify-between mb-3",
                                children: [e.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [e.jsx(Pn, {
                                        size: 16,
                                        color: "#2C874A"
                                    }), e.jsx("div", {
                                        className: "text-yay-dark font-semibold text-sm",
                                        children: c("rupees_applied", {
                                            amount: Number(n.gift_card).toFixed(2)
                                        })
                                    })]
                                }), e.jsx("button", {
                                    className: "text-coal-dark text-sm font-semibold",
                                    onClick: () => y(),
                                    children: c("remove")
                                })]
                            }), e.jsx("div", {
                                className: "text-sm text-coal-light mb-3",
                                children: c("remaining_balance", {
                                    amount: Number((C - n.gift_card).toFixed(2))
                                })
                            })]
                        }) : e.jsxs("div", {
                            className: "flex items-center justify-between pb-3 gap-3",
                            children: [e.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [e.jsx("img", {
                                    src: oa,
                                    alt: "Gyftr",
                                    className: "w-6 h-6",
                                    loading: "lazy"
                                }), e.jsx("span", {
                                    className: "text-coal-dark text-sm font-medium",
                                    children: c("gv_or_epay_balance", {
                                        amount: Number(C).toFixed(2)
                                    })
                                })]
                            }), e.jsx("div", {
                                onClick: () => j(),
                                className: "flex justify-start items-start h-full w-[4.5rem]",
                                children: e.jsx("span", {
                                    className: "text-xs font-medium text-yay-dark cursor-pointer rounded-lg px-3 py-2 border border-yay-dark bg-yay-lighter",
                                    children: c("redeem")
                                })
                            })]
                        }), e.jsx("div", {
                            className: "border-t border-dashed pt-3",
                            children: e.jsxs("div", {
                                onClick: () => r("GYFTR_ADD_COUPON_DIALOG"),
                                className: "text-sm text-coal-dark flex flex-col gap-1 cursor-pointer",
                                children: [e.jsx("span", {
                                    className: "text-sm",
                                    children: c("have_more_gift_vouchers")
                                }), e.jsxs("div", {
                                    className: "font-medium text-xs flex items-center gap-1",
                                    children: [c("add"), " ", e.jsx(Ct, {
                                        size: 14
                                    })]
                                })]
                            })
                        })]
                    })
                })
            }), e.jsx(Pe, {
                isOpen: s === "GYFTR_ADD_COUPON_DIALOG",
                translateAxis: "y",
                dialogOverlay: !0,
                modalType: "GYFTR_ADD_COUPON_DIALOG",
                customClass: "overflow-scroll md:!top-auto md:absolute",
                "data-sentry-element": "GenericDialog",
                "data-sentry-source-file": "Gyftr.tsx",
                children: e.jsx(ml, {
                    "data-sentry-element": "AddCouponDialog",
                    "data-sentry-source-file": "Gyftr.tsx"
                })
            }), e.jsx(Pe, {
                isOpen: s === "GYFTR_REDEEM_VOUCHER_DIALOG",
                translateAxis: "y",
                dialogOverlay: !0,
                modalType: "GYFTR_REDEEM_VOUCHER_DIALOG",
                customClass: "overflow-scroll md:!top-auto md:absolute",
                "data-sentry-element": "GenericDialog",
                "data-sentry-source-file": "Gyftr.tsx",
                children: e.jsx(xl, {
                    gyftrBalance: C,
                    "data-sentry-element": "RedeemVoucherDialog",
                    "data-sentry-source-file": "Gyftr.tsx"
                })
            }), e.jsx(Pe, {
                isOpen: s === "GYFTR_SWITCH_COUPON_DIALOG",
                translateAxis: "y",
                dialogOverlay: !0,
                modalType: "GYFTR_SWITCH_COUPON_DIALOG",
                customClass: "overflow-scroll md:!top-auto md:absolute",
                "data-sentry-element": "GenericDialog",
                "data-sentry-source-file": "Gyftr.tsx",
                children: e.jsx(Na, {
                    closePopup: () => r("NONE"),
                    applyCoupon: () => ee(void 0, null, function*() {
                        try {
                            r("LOADER");
                            const E = i == null ? void 0 : i.map(b => cs(`/checkout/v1/checkout/${t}/discounts`, {
                                    discount_code: b
                                })),
                                _ = yield Promise.allSettled(E);
                            let A = !0,
                                N;
                            if (_.forEach(b => {
                                    (b == null ? void 0 : b.status) !== "fulfilled" ? A = !1: N = b.value
                                }), !A) {
                                De(c("failed_to_replace_coupons"));
                                return
                            }
                            a(N), Be([`/checkout/${t}/discount`, "KRATOS_PRIVATE"]), x(), Be([`/checkout/${t}/rewards`, vt.KRATOS_PRIVATE])
                        } catch (E) {
                            console.error(E), De(c("failed_to_replace_coupons"))
                        } finally {
                            r("GYFTR_REDEEM_VOUCHER_DIALOG")
                        }
                    }),
                    appliedDiscountCode: "GYFTR",
                    invalidDiscountCodes: g != null ? g : [],
                    invalidReason: "REWARDS_NOT_COMBINABLE",
                    "data-sentry-element": "SwitchCouponDialog",
                    "data-sentry-source-file": "Gyftr.tsx"
                })
            })]
        })
    },
    cn = ({}) => {
        var u, C, y, g, i, j;
        const {
            t: s
        } = te(), {
            state: {
                checkoutId: t,
                hasDefaultShippingHandleSelected: n
            },
            actions: {
                setCheckoutModal: r
            }
        } = ge(), {
            state: {
                paymentMethods: a
            }
        } = Re(), {
            sendAnalyticsEvent: o
        } = qe(), x = a == null ? void 0 : a.find(p => p.mode === "CUSTOM_PAYMENT"), l = Hs(x == null ? void 0 : x.unavailability_reasons, (u = x == null ? void 0 : x.metadata) == null ? void 0 : u.title), [m, h] = d.useState(!1), c = () => ee(void 0, null, function*() {
            var p, E, _;
            if (!n) {
                r("SHIPPING_HANDLES");
                return
            }
            try {
                o({
                    eventName: q.FLO_PAYMENT_METHOD_SELECTED,
                    eventFor: [Ke.SF_ANALYTICS, Ke.FACEBOOK_PIXEL],
                    eventType: "click",
                    metaData: {
                        methodType: "CUSTOM_PAYMENT"
                    }
                }), h(!0);
                const A = yield ot(`/checkout/${t}/custom-payment/initiate`, "KRATOS_PRIVATE"), N = (_ = (E = (p = A == null ? void 0 : A.metadata) == null ? void 0 : p.action_urls) == null ? void 0 : E.CUSTOM_PAYMENT_TILE) == null ? void 0 : _.success_url;
                if (N) gt(N);
                else throw new Error("Error while applying gift cards")
            } catch (A) {
                De(s("payment_error_generic")), console.error(A)
            } finally {
                h(!1)
            }
        });
        return e.jsxs("div", {
            className: "border-base overflow-hidden bg-white",
            "data-sentry-component": "CustomPaymentCard",
            "data-sentry-source-file": "CustomPayment.tsx",
            children: [e.jsxs("button", {
                className: `w-full ${x!=null&&x.is_available?"cursor-pointer":"cursor-not-allowed"}`,
                disabled: !(x != null && x.is_available),
                onClick: () => {
                    c()
                },
                children: [e.jsxs("div", {
                    className: `flex w-full  flex-row items-center justify-center space-x-2 p-3 ${x!=null&&x.is_available?"text-coal-dark":"text-gray-dark"}`,
                    children: [e.jsx("div", {
                        className: "flex h-9 w-9 items-center justify-center",
                        children: e.jsx("img", {
                            src: io,
                            alt: "Bajaj",
                            width: 36,
                            height: 36
                        })
                    }), e.jsxs("div", {
                        className: "flex w-full flex-1 flex-col items-start justify-start space-y-1",
                        children: [e.jsx("h3", {
                            className: "text-sm font-medium",
                            children: (y = (C = x == null ? void 0 : x.metadata) == null ? void 0 : C.title) != null ? y : ""
                        }), !((g = x == null ? void 0 : x.metadata) != null && g.hideDescription) && e.jsx("p", {
                            className: "text-left text-xs font-normal text-gray-dark",
                            children: (j = (i = x == null ? void 0 : x.metadata) == null ? void 0 : i.description) != null ? j : ""
                        })]
                    }), e.jsx(Ct, {
                        className: "h-4 w-4 text-coal-dark",
                        "data-sentry-element": "ChevronRight",
                        "data-sentry-source-file": "CustomPayment.tsx"
                    })]
                }), !x.is_available && !!l && e.jsx("div", {
                    className: "bg-[#FAFAFA]",
                    children: e.jsx("p", {
                        className: "px-3 py-2 text-left text-xs font-normal text-gray-dark",
                        children: l
                    })
                })]
            }), m && e.jsx(St, {})]
        })
    },
    hl = ({}) => {
        var A;
        const {
            t: s
        } = te(), {
            state: {
                paymentMethods: t
            },
            actions: {
                handleNonPaymentOrderPlacement: n
            }
        } = Re(), {
            state: {
                merchant: r
            }
        } = Ye(), [a, o] = d.useState([]), [x, l] = d.useState([]);
        d.useEffect(() => {
            if (!t) return;
            const {
                available: N,
                unavailable: b
            } = t.reduce((f, w) => (w.mode === "GC" || w.mode === "LOYALTY" || w.mode === "REWARDS_WALLET" || w.mode === "FREE" || w.mode === "SHOPIFY_GC" || w.mode === "GYFTR" || (w.is_available ? f.available.push(w) : f.unavailable.push(w)), f), {
                available: [],
                unavailable: []
            });
            o(N), l(b)
        }, [t]);
        const m = t == null ? void 0 : t.some(N => N.mode === "FREE"),
            h = (A = t == null ? void 0 : t.find(N => N.mode === "FREE")) == null ? void 0 : A.is_available,
            c = t == null ? void 0 : t.find(N => N.mode === "GC"),
            u = t == null ? void 0 : t.find(N => N.mode === "SHOPIFY_GC"),
            C = t == null ? void 0 : t.find(N => N.mode === "CUSTOM_PAYMENT"),
            y = t == null ? void 0 : t.find(N => N.mode === "GYFTR"),
            g = t == null ? void 0 : t.find(N => N.mode === "UPI_INTENT"),
            i = g == null ? void 0 : g.is_available,
            j = d.useMemo(() => (r == null ? void 0 : r.upiTileWithIcons) && i, [r, i]),
            p = d.useMemo(() => j ? a.filter(N => N.mode !== "UPI_INTENT") : a, [a, j]),
            E = d.useMemo(() => j ? x.filter(N => N.mode !== "UPI_INTENT") : x, [x, j]),
            _ = d.useMemo(() => {
                var N;
                return y ? y != null && y.is_available ? !0 : (N = y == null ? void 0 : y.unapplicability_reasons) == null ? void 0 : N.some(b => (b == null ? void 0 : b.type) === "INVALID_DISCOUNTS") : !1
            }, [y]);
        return t ? e.jsxs("section", {
            className: "space-y-3",
            "data-sentry-component": "PaymentMethods",
            "data-sentry-source-file": "index.tsx",
            children: [y && _ && e.jsx(fl, {}), !!a.length && e.jsxs(e.Fragment, {
                children: [e.jsx("div", {
                    className: "flex w-full flex-row  items-center justify-between px-2 pt-2 text-xs",
                    children: e.jsx("h2", {
                        className: "text-sm font-medium text-coal-light",
                        children: s("all_payment_methods")
                    })
                }), e.jsxs("div", {
                    className: "overflow-clip-margin-2 flex flex-col space-y-4 overflow-clip ",
                    children: [j && e.jsx(da, {
                        modeData: g
                    }), e.jsx(ua, {
                        renderMethods: p
                    })]
                })]
            }), u && (u == null ? void 0 : u.is_available) && e.jsx(ln, {}), C && (C == null ? void 0 : C.is_available) && e.jsx(cn, {}), !!x.length && e.jsxs(e.Fragment, {
                children: [e.jsx("div", {
                    className: "flex w-full flex-row items-center justify-between gap-1 py-3 text-xs",
                    children: e.jsx("div", {
                        className: "flex w-full flex-col items-start justify-between gap-1",
                        children: e.jsx(yo, {
                            className: "text-xs uppercase",
                            label: s("unavailable_methods")
                        })
                    })
                }), e.jsxs("div", {
                    className: "overflow-clip-margin-2 flex flex-col space-y-4 overflow-clip",
                    children: [g && !i && e.jsx(da, {
                        modeData: g
                    }), e.jsx(ua, {
                        renderMethods: E
                    })]
                })]
            }), u && !(u != null && u.is_available) && e.jsx(ln, {}), C && !(C != null && C.is_available) && e.jsx(cn, {}), m && e.jsx(e.Fragment, {
                children: e.jsx("div", {
                    className: "mt-3 w-full",
                    children: e.jsx(ut, {
                        isDisabled: !h,
                        buttonText: s("place_order"),
                        height: "h-14",
                        onClick: () => n("FREE")
                    })
                })
            }), c && e.jsx(dl, {})]
        }) : e.jsx(e.Fragment, {})
    },
    pl = Ie.memo(hl),
    _l = () => {
        var a;
        const {
            state: {
                billing: s
            }
        } = ge(), {
            t
        } = te(), {
            actions: {
                setPaymentMethodDialog: n
            },
            state: {
                openPaymentMethodDialog: r
            }
        } = Re();
        return e.jsx(e.Fragment, {
            children: e.jsxs(Pe, {
                isOpen: r === "CF",
                setIsOpen: () => n("NONE"),
                translateAxis: "z",
                modalType: "PAYMENT_METHOD",
                "data-sentry-element": "GenericDialog",
                "data-sentry-source-file": "CashfreePaymentForm.tsx",
                children: [e.jsx(Ze, {
                    "data-sentry-element": "DialogHeader",
                    "data-sentry-source-file": "CashfreePaymentForm.tsx",
                    children: e.jsxs(Qt.Title, {
                        as: "div",
                        className: "flex h-full w-full flex-row items-center justify-between bg-white text-coal-dark",
                        "data-sentry-element": "unknown",
                        "data-sentry-source-file": "CashfreePaymentForm.tsx",
                        children: [e.jsxs("div", {
                            className: "flex h-full flex-row items-center",
                            children: [e.jsx("div", {
                                className: "-ml-3 flex h-12 w-12 cursor-pointer items-center justify-center",
                                onClick: () => n("NONE"),
                                children: e.jsx(Xr, {
                                    className: "h-6 w-6 ",
                                    "data-sentry-element": "ArrowLeft",
                                    "data-sentry-source-file": "CashfreePaymentForm.tsx"
                                })
                            }), e.jsx("h1", {
                                className: "text-base font-medium",
                                children: t("payment_methods")
                            })]
                        }), e.jsx("h1", {
                            className: "text-base font-medium text-coal-dark",
                            children: `₹${parseFloat((a=s==null?void 0:s.prepaid_total)==null?void 0:a.toFixed(2)).toLocaleString("en-IN")}`
                        })]
                    })
                }), e.jsx(Je, {
                    "data-sentry-element": "DialogBody",
                    "data-sentry-source-file": "CashfreePaymentForm.tsx",
                    children: e.jsx("div", {
                        className: "h-full w-full",
                        id: "payment-form"
                    })
                })]
            })
        })
    },
    gl = Ie.memo(_l),
    yl = () => {
        const {
            actions: {
                setPaymentMethodDialog: s,
                handlePaymentMethodSelected: t
            },
            state: {
                paymentMethods: n,
                openPaymentMethodDialog: r
            }
        } = Re(), {
            t: a
        } = te(), {
            state: {
                billing: o
            }
        } = ge(), x = d.useMemo(() => n.find(p => (p == null ? void 0 : p.mode) === "SPLIT_COD" && !!(p != null && p.is_available)), [n]), l = d.useMemo(() => n.find(p => (p == null ? void 0 : p.mode) === "COD"), [n]), [m, h] = d.useState("");
        d.useEffect(() => {
            l && h("COD"), x && h("SPLIT_COD")
        }, [l, x]);
        const c = wn(n),
            u = !!(c != null && c.maxDiscountCoupon),
            C = d.useCallback(p => ["COD", "SPLIT_COD"].includes(p == null ? void 0 : p.mode) ? (p == null ? void 0 : p.mode) === "COD" && (o != null && o.cod) ? a("include_cod_fee", {
                amount: o.cod
            }) : (p == null ? void 0 : p.mode) === "SPLIT_COD" ? a("split_payment_online_and_cod") : "" : a("pay_using_online"), [o.cod, a]),
            y = d.useCallback(p => {
                var E, _;
                return (p == null ? void 0 : p.mode) === "SPLIT_COD" ? a("split_cod_pay_amount", {
                    current_amount: Ee(p == null ? void 0 : p.amount),
                    cod_amount: Ee((E = p == null ? void 0 : p.metadata) == null ? void 0 : E.cod_amount)
                }) : (p == null ? void 0 : p.mode) === "COD" ? a("pay_x_amount_on_delivery", {
                    amount: Ee(p == null ? void 0 : p.amount)
                }) : a("pay_x_amount_online", {
                    amount: Ee((_ = p == null ? void 0 : p.amount) != null ? _ : 0)
                })
            }, []),
            g = d.useCallback(p => {
                var E, _, A, N;
                return (p == null ? void 0 : p.mode) === "SPLIT_COD" ? p.amount + ((_ = (E = p == null ? void 0 : p.metadata) == null ? void 0 : E.cod_amount) != null ? _ : 0) : (p == null ? void 0 : p.mode) === "COD" ? (A = p == null ? void 0 : p.amount) != null ? A : 0 : (N = p == null ? void 0 : p.amount) != null ? N : 0
            }, []),
            i = d.useCallback(p => {
                var E, _, A, N, b;
                return ["COD", "SPLIT_COD"].includes(p.mode) ? (o == null ? void 0 : o.cod) === 0 ? a("free_cod") : null : c != null && c.hasFreebie ? a("freebie_gift", {
                    amount: (_ = (E = c == null ? void 0 : c.freebieMethod) == null ? void 0 : E.discount_metadata) != null && _.mode_freebies ? (N = (A = c == null ? void 0 : c.freebieMethod) == null ? void 0 : A.discount_metadata) == null ? void 0 : N.mode_freebies : 0
                }) : (b = c == null ? void 0 : c.maxPrepaidDiscountText) != null ? b : null
            }, [c, o]),
            j = () => m === "SPLIT_COD" ? t("SPLIT_COD", x == null ? void 0 : x.context) : s(m === "COD" ? "COD_ORDER_PLACING" : "NONE");
        return e.jsx(e.Fragment, {
            children: e.jsxs(Pe, {
                isOpen: r === "COD",
                setIsOpen: () => s("NONE"),
                translateAxis: "y",
                customClass: "overflow-scroll md:!top-auto md:absolute rounded-t-2xl max-h-[81vh]",
                modalType: "COD_CONFIRMATION",
                dialogOverlay: !0,
                "data-sentry-element": "GenericDialog",
                "data-sentry-source-file": "CODConfirmation.tsx",
                children: [e.jsx(Ze, {
                    "data-sentry-element": "DialogHeader",
                    "data-sentry-source-file": "CODConfirmation.tsx",
                    children: e.jsxs(Qt.Title, {
                        as: "h3",
                        className: "flex h-full w-full flex-row items-center justify-between bg-white py-4 text-base font-medium text-carbon-dark",
                        "data-sentry-element": "unknown",
                        "data-sentry-source-file": "CODConfirmation.tsx",
                        children: [e.jsx("div", {
                            className: "flex items-center",
                            children: e.jsx("h2", {
                                className: "inline-flex gap-2 font-medium text-carbon-dark",
                                children: a(u ? "confirm_payment_method" : "select_cod_option")
                            })
                        }), e.jsx("button", {
                            className: "outline-none",
                            children: e.jsx(st, {
                                className: "h-6 w-6 cursor-pointer text-coal-dark",
                                onClick: () => s("NONE"),
                                "data-sentry-element": "X",
                                "data-sentry-source-file": "CODConfirmation.tsx"
                            })
                        })]
                    })
                }), e.jsx(Je, {
                    className: "flex flex-col gap-4 px-3 pb-36",
                    "data-sentry-element": "DialogBody",
                    "data-sentry-source-file": "CODConfirmation.tsx",
                    children: e.jsx("ul", {
                        className: "space-y-4",
                        children: [l, x, ...u ? [c.maxDiscountMethod] : []].map(p => p ? e.jsx("li", {
                            onClick: E => {
                                E.preventDefault(), h(p.mode)
                            },
                            children: e.jsx(Nl, {
                                id: p.id,
                                isChecked: m === p.mode,
                                name: p.mode,
                                title: y(p),
                                description: C(p),
                                total: g(p),
                                tag: i(p)
                            })
                        }, p.id) : null)
                    })
                }), e.jsx(hs, {
                    className: "bg-white p-3 pb-14",
                    "data-sentry-element": "DialogFooter",
                    "data-sentry-source-file": "CODConfirmation.tsx",
                    children: e.jsx("button", {
                        className: "h-14 w-full rounded-xl bg-primary-dark py-3 font-medium text-white",
                        onClick: j,
                        disabled: m === "",
                        type: "button",
                        children: a("Continue")
                    })
                })]
            })
        })
    },
    Nl = Ie.memo(({
        isChecked: s,
        total: t,
        tag: n,
        title: r,
        description: a
    }) => e.jsx(e.Fragment, {
        children: e.jsxs("label", {
            className: Fe(s ? "z-10 border-[1.5px] border-primary-dark bg-white" : "border border-gray-light", "relative flex cursor-pointer border-[1.5px] p-4 focus:outline-none", "relative flex cursor-pointer rounded-2xl bg-white px-6 py-4 shadow-sm focus:outline-none"),
            children: [e.jsx("span", {
                className: Fe(s ? "border-2 border-primary-dark " : "border-[1.5px] border-gray-light ", "mt-0.5 flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded-full border bg-white"),
                "aria-hidden": "true",
                children: e.jsx("span", {
                    className: Fe(s ? "bg-primary-dark" : "bg-white", "h-1.5 w-1.5 rounded-full ")
                })
            }), e.jsxs("span", {
                className: "ml-3 flex flex-[2] flex-col gap-1",
                children: [e.jsx("span", {
                    className: Fe("block text-sm font-medium text-coal-dark"),
                    children: r
                }), e.jsx("span", {
                    className: Fe("block text-xs text-coal-light"),
                    children: a
                }), n && e.jsx(Cs, {
                    className: "rounded-2xl bg-yay-light px-2 text-xs text-yay-dark",
                    children: n
                })]
            }), e.jsxs("span", {
                className: "flex flex-col gap-[2px]",
                children: [e.jsx("span", {
                    className: "text-xs text-coal-light",
                    children: "Order total"
                }), e.jsx("span", {
                    className: "text-sm font-medium text-carbon-dark",
                    children: Ee(t)
                })]
            })]
        })
    })),
    jl = Ie.memo(yl),
    bl = ({}) => {
        var x, l, m, h, c;
        const {
            state: {
                paymentMethods: s,
                openPaymentMethodDialog: t
            },
            actions: {
                setPaymentMethodDialog: n,
                handleNonPaymentOrderPlacement: r
            }
        } = Re(), {
            t: a
        } = te(), o = s == null ? void 0 : s.find(u => u.mode === "OFFLINE_PAYMENT");
        return o ? e.jsx(e.Fragment, {
            children: e.jsx(Fn, {
                popupTitle: (m = (l = (x = o == null ? void 0 : o.metadata) == null ? void 0 : x.prompt_metadata) == null ? void 0 : l.title) != null ? m : a("cod_confirmation_popup_header"),
                popupBody: (c = (h = o == null ? void 0 : o.metadata) == null ? void 0 : h.prompt_metadata) == null ? void 0 : c.description,
                onClickPrimaryBtn: u => {
                    u == null || u.preventDefault(), r("OFFLINE_PAYMENT")
                },
                id: "flo__payments__offlinePaymentModal",
                isOpen: t === "OFFLINE_PAYMENT",
                closePopup: () => n("NONE"),
                btnsFlexDirection: "flex-col",
                modalType: "OFFLINE_PAYMENT_CONFIRMATION",
                showSecondaryBtn: !1,
                "data-sentry-element": "ConfirmationPopup",
                "data-sentry-source-file": "OfflinePayment.tsx"
            })
        }) : e.jsx(e.Fragment, {})
    },
    El = () => {
        const {
            state: {
                paymentMethods: s,
                openPaymentMethodDialog: t
            },
            actions: {
                getSplittedPaymentMethods: n,
                setPaymentMethodDialog: r
            }
        } = Re(), {
            t: a
        } = te(), o = Ie.memo(() => {
            var h, c;
            const x = s.find(u => u.mode === "SPLIT_COD"),
                l = Vt(x.amount),
                m = Vt(x.metadata.cod_amount);
            return e.jsxs("div", {
                className: "flex flex-col gap-1 ",
                children: [e.jsx("h1", {
                    className: "flex space-x-1 font-medium text-carbon-dark",
                    children: a("pay_x_now_and_y_on_delivery_header", {
                        amount: Ee(l),
                        cod_amount: Ee(m)
                    })
                }), e.jsx("p", {
                    className: "text-coal-light text-xs font-normal",
                    children: (c = (h = x == null ? void 0 : x.metadata) == null ? void 0 : h.description) != null ? c : a("split_cod_payment_subheader")
                })]
            })
        });
        return e.jsx(e.Fragment, {
            children: e.jsxs(Pe, {
                isOpen: t === "SPLIT_COD",
                setIsOpen: () => r("NONE"),
                translateAxis: "y",
                dialogOverlay: !0,
                customClass: "overflow-scroll md:!top-auto md:absolute rounded-t-2xl max-h-[81vh]",
                modalType: "PAYMENT_GROUP",
                "data-sentry-element": "GenericDialog",
                "data-sentry-source-file": "SplitCOD.tsx",
                children: [e.jsx(Ze, {
                    className: "border-b",
                    "data-sentry-element": "DialogHeader",
                    "data-sentry-source-file": "SplitCOD.tsx",
                    children: e.jsxs(Qt.Title, {
                        as: "div",
                        className: "flex h-full w-full flex-row items-center justify-between bg-white py-4 text-base font-medium text-carbon-dark",
                        "data-sentry-element": "unknown",
                        "data-sentry-source-file": "SplitCOD.tsx",
                        children: [e.jsx(o, {}), e.jsx("button", {
                            className: "outline-none",
                            children: e.jsx(st, {
                                className: "h-6 w-6 cursor-pointer text-coal-dark",
                                onClick: () => r("NONE"),
                                "data-sentry-element": "X",
                                "data-sentry-source-file": "SplitCOD.tsx"
                            })
                        })]
                    })
                }), e.jsx(Je, {
                    "data-sentry-element": "DialogBody",
                    "data-sentry-source-file": "SplitCOD.tsx",
                    children: e.jsx("div", {
                        className: "mx-3 flex flex-col gap-4 py-9",
                        children: e.jsx(ua, {
                            renderMethods: n()
                        })
                    })
                })]
            })
        })
    },
    Cl = () => {
        var A, N;
        const {
            t: s
        } = te(), {
            sendAnalyticsEvent: t
        } = qe(), {
            actions: {
                setPaymentMethodDialog: n,
                setPaymentState: r
            },
            state: {
                openPaymentMethodDialog: a,
                paymentMethods: o
            }
        } = Re(), {
            state: {
                checkoutId: x
            },
            actions: {
                setCheckoutExpired: l
            }
        } = ge(), m = d.useMemo(() => {
            var f, w;
            const b = (w = (f = o == null ? void 0 : o.find(L => L.mode === "UPI_INTENT")) == null ? void 0 : f.metadata) == null ? void 0 : w.available_apps;
            return b ? ws.filter(k => b.includes(k.id)) : ws
        }, [s, o]), {
            data: h,
            error: c,
            isValidating: u
        } = us(a === "UPI_INTENT" && ls() ? "UPI_INTENT" : null, b => Ls(b, x, void 0, void 0, l), xs), C = b => {
            var k, v;
            if (!h || u) return;
            const f = (v = (k = h == null ? void 0 : h.next_steps) == null ? void 0 : k.pg_action) == null ? void 0 : v.action_url,
                w = En(b, f != null ? f : "");
            if (!w) return;
            const L = o == null ? void 0 : o.find(T => T.mode === "UPI_INTENT");
            t({
                eventName: q.FLO_PAYMENT_METHOD_SELECTED,
                eventFor: [Ke.SF_ANALYTICS, Ke.FACEBOOK_PIXEL],
                eventType: "click",
                metaData: {
                    methodType: "upi_intent",
                    automationData: Ut(L)
                }
            }), t({
                eventName: q.FLO_PAYMENT_MODE_SELECTED,
                eventType: "click",
                metaData: {
                    modeType: b,
                    methodType: "upi_intent",
                    automationData: Ut(L)
                }
            }), r({
                isProcessingDialogVisible: !0,
                paymentStatus: "PROCESSING",
                isPolling: !0
            }), gt(w)
        }, {
            handleSubmit: y,
            setErrors: g,
            inputProps: i,
            state: {
                values: j,
                errors: p
            }
        } = as({
            initialState: {
                id: "",
                save: !1
            },
            validationSchema: {
                id: {
                    required: s("invalid_upi"),
                    type: "string",
                    when: b => {
                        if (!/[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}/.test(b)) return {
                            status: !0,
                            message: s("invalid_upi")
                        }
                    }
                }
            }
        }), E = b => ee(void 0, null, function*() {
            try {
                const f = o == null ? void 0 : o.find(w => w.mode === "UPI_COLLECT");
                t({
                    eventName: q.FLO_PAYMENT_METHOD_SELECTED,
                    eventFor: [Ke.SF_ANALYTICS, Ke.FACEBOOK_PIXEL],
                    eventType: "click",
                    metaData: {
                        methodType: "UPI_COLLECT",
                        automationData: Ut(f)
                    }
                }), t({
                    eventName: q.FLO_PAYMENT_MODE_SELECTED,
                    eventType: "click",
                    metaData: {
                        modeType: "UPI_COLLECT",
                        methodType: "UPI_COLLECT",
                        automationData: Ut(f)
                    }
                }), r({
                    isProcessingDialogVisible: !0,
                    paymentStatus: "PROCESSING",
                    isPolling: !0
                }), yield Ls("UPI_COLLECT", x, void 0, {
                    vpa: b == null ? void 0 : b.id
                }, l)
            } catch (f) {
                throw r({
                    isProcessingDialogVisible: !1
                }), g({
                    id: {
                        status: !0,
                        message: s("invalid_upi")
                    }
                }), De(s("invalid_upi")), new Error(f)
            }
        }), _ = d.useMemo(() => {
            var f, w;
            const b = o.find(L => (L == null ? void 0 : L.mode) === "UPI_INTENT");
            return (w = (f = b == null ? void 0 : b.metadata) == null ? void 0 : f.title) != null ? w : "Pay using UPI"
        }, [o]);
        return e.jsxs(Pe, {
            isOpen: a === "UPI_INTENT",
            setIsOpen: () => n("NONE"),
            translateAxis: "y",
            customClass: "overflow-scroll md:!top-auto md:absolute rounded-t-2xl max-h-[81vh]",
            modalType: "UPI_INTENT",
            dialogOverlay: !0,
            "data-sentry-element": "GenericDialog",
            "data-sentry-component": "UPIIntent",
            "data-sentry-source-file": "UPIIntent.tsx",
            children: [e.jsx(Ze, {
                "data-sentry-element": "DialogHeader",
                "data-sentry-source-file": "UPIIntent.tsx",
                children: e.jsxs(Qt.Title, {
                    as: "h3",
                    className: "flex h-full w-full flex-row items-center justify-between bg-white py-4 text-base font-medium text-carbon-dark",
                    "data-sentry-element": "unknown",
                    "data-sentry-source-file": "UPIIntent.tsx",
                    children: [e.jsx("div", {
                        className: "flex items-center",
                        children: e.jsx("h2", {
                            className: "inline-flex gap-2 font-medium text-carbon-dark",
                            children: _
                        })
                    }), e.jsx("button", {
                        className: "outline-none",
                        children: e.jsx(st, {
                            className: "h-6 w-6 cursor-pointer text-coal-dark",
                            onClick: () => n("NONE"),
                            "data-sentry-element": "X",
                            "data-sentry-source-file": "UPIIntent.tsx"
                        })
                    })]
                })
            }), e.jsx(Je, {
                className: "flex flex-col px-3 pb-36",
                "data-sentry-element": "DialogBody",
                "data-sentry-source-file": "UPIIntent.tsx",
                children: e.jsxs(e.Fragment, {
                    children: [ls() && !c && h && e.jsx("div", {
                        className: "box-border w-full",
                        children: e.jsx("div", {
                            className: "flex w-full flex-col rounded-2xl border border-[#F0F0F0]",
                            children: e.jsx("ul", {
                                className: "flex w-full flex-row items-center justify-around py-4",
                                children: m == null ? void 0 : m.map(b => e.jsx("li", {
                                    onClick: () => C(b.id),
                                    children: e.jsx(qn, {
                                        logo: b.logo,
                                        name: b.name,
                                        id: b.id,
                                        isLoading: u
                                    })
                                }, b.id))
                            })
                        })
                    }), e.jsx("div", {
                        className: "mt-3",
                        children: e.jsxs("form", {
                            onSubmit: y(E),
                            className: "flex flex-col space-y-6 rounded-2xl border border-[#F0F0F0] p-3 ",
                            id: "card-form",
                            children: [e.jsx(Qe, R(P({
                                type: "text",
                                placeholder: s("upi_placeholder")
                            }, i(be.id)), {
                                autoComplete: "off",
                                error: p.id,
                                "data-sentry-element": "InputField",
                                "data-sentry-source-file": "UPIIntent.tsx"
                            })), e.jsx(ut, {
                                type: "submit",
                                buttonText: s("proceed_to_pay"),
                                isCheckout: !1,
                                isDisabled: !((A = j == null ? void 0 : j.id) != null && A.length) || ((N = p == null ? void 0 : p.id) == null ? void 0 : N.status),
                                "data-sentry-element": "PrimaryButton",
                                "data-sentry-source-file": "UPIIntent.tsx"
                            })]
                        })
                    })]
                })
            })]
        })
    },
    wl = () => {
        const {
            state: {
                paymentMethods: s,
                openPaymentMethodDialog: t
            },
            actions: {
                setPaymentMethodDialog: n,
                handleNonPaymentOrderPlacement: r
            }
        } = Re(), {
            t: a
        } = te(), {
            state: {
                billing: o,
                checkoutId: x
            }
        } = ge(), {
            state: {
                merchant: l
            }
        } = Ye(), [m, h] = d.useState(!1), {
            data: c,
            isValidating: u,
            error: C
        } = us(m ? `/checkout/v1/checkout/${x}/cod-otp/send` : null, _ => wt(_, {}), xs), y = s.find(_ => (_ == null ? void 0 : _.mode) === "COD");
        s.find(_ => (_ == null ? void 0 : _.mode) === "SPLIT_COD"), d.useEffect(() => {
            t === "COD_ORDER_PLACING" && (l != null && l.hideCODpopup) && g()
        }, [t]);
        const g = () => {
            if ((l == null ? void 0 : l.codVerification) === "PRE_COD") return h(!0);
            r("COD"), n("NONE")
        };
        d.useEffect(() => {
            if (m && !u) {
                if (c && !(c != null && c.cod_verification_required) && !C) {
                    n("NONE"), r("COD"), h(!1);
                    return
                }
                n("COD_OTP"), h(!1)
            }
        }, [c, m, u]);
        const {
            maxDiscountMethod: i
        } = wn(s), j = !!(o != null && o.cod), p = () => j ? a("pay_online_x_save_y", {
            payment: Ee(i != null && i.amount ? i == null ? void 0 : i.amount : o.total_payable),
            off: Ee(o.cod + (i != null && i.discount ? i == null ? void 0 : i.discount : 0))
        }) : (i == null ? void 0 : i.discount) + o.cod ? a("pay_online_x_save_y", {
            payment: Ee(i == null ? void 0 : i.amount),
            off: Ee(i == null ? void 0 : i.discount)
        }) : a("pay_online"), E = d.useMemo(() => i != null && i.discount ? a("pay_online_and_save_more") : a(j ? "pay_online_and_skip_cod_charge" : "confirm_your_payment_method"), [j, i]);
        return y ? e.jsxs(Pe, {
            isOpen: t === "COD_ORDER_PLACING" && !(l != null && l.hideCODpopup),
            setIsOpen: () => n("NONE"),
            translateAxis: "y",
            customClass: "overflow-scroll md:!top-auto md:absolute rounded-t-2xl max-h-[81vh]",
            modalType: "COD_ORDER_PLACING",
            dialogOverlay: !0,
            closeOnOverlayClick: !0,
            "data-sentry-element": "GenericDialog",
            "data-sentry-component": "PlaceCODOrderDialog",
            "data-sentry-source-file": "PlaceCODOrder.tsx",
            children: [e.jsx(Ze, {
                className: "px-4",
                "data-sentry-element": "DialogHeader",
                "data-sentry-source-file": "PlaceCODOrder.tsx",
                children: e.jsxs("h3", {
                    className: "flex h-full w-full flex-row items-center justify-between bg-white py-4 text-base font-medium text-carbon-dark",
                    children: [e.jsx("div", {
                        className: "flex items-center",
                        children: e.jsx("h2", {
                            className: "inline-flex gap-2 font-medium text-carbon-dark",
                            children: E
                        })
                    }), e.jsx("button", {
                        className: "outline-none",
                        children: e.jsx(st, {
                            className: "h-6 w-6 cursor-pointer text-coal-dark",
                            onClick: () => n("NONE"),
                            "data-sentry-element": "X",
                            "data-sentry-source-file": "PlaceCODOrder.tsx"
                        })
                    })]
                })
            }), e.jsx(Je, {
                "data-sentry-element": "DialogBody",
                "data-sentry-source-file": "PlaceCODOrder.tsx",
                children: e.jsxs("div", {
                    className: "flex w-full flex-col gap-2 px-4",
                    children: [e.jsx("button", {
                        className: "h-14 w-full rounded-xl bg-primary-dark py-3 font-medium text-btnPrimaryText",
                        onClick: g,
                        type: "button",
                        children: a("confirm_cod_order_of_x", {
                            amount: Ee(y == null ? void 0 : y.amount)
                        })
                    }), e.jsx("button", {
                        onClick: () => {
                            n("NONE")
                        },
                        className: "h-14 w-full rounded-xl py-3 font-medium text-coal-dark border-2 border-gray-light",
                        children: p()
                    })]
                })
            })]
        }) : null
    },
    vl = () => {
        var K, V, oe, xe;
        const {
            t: s
        } = te(), {
            state: {
                openPaymentMethodDialog: t,
                paymentMethods: n
            },
            actions: {
                handleNonPaymentOrderPlacement: r,
                setPaymentMethodDialog: a
            }
        } = Re(), {
            state: {
                checkoutId: o
            }
        } = ge(), x = t === "COD_OTP", [l, m] = d.useState(30), [h, c] = d.useState(""), [u, C] = d.useState(""), [y, g] = d.useState(""), [i, j] = d.useState(!1), [p, E] = d.useState(!1), [_, A] = d.useState("idle"), {
            setValueOf: N,
            setErrors: b,
            handleSubmit: f,
            state: {
                values: w,
                errors: L
            }
        } = as({
            initialState: {
                otp: ""
            },
            validationSchema: {
                otp: {
                    required: s("enter_your_otp"),
                    numeric: s("otp_incorrect"),
                    length: {
                        limit: 4,
                        message: s("otp_incorrect")
                    },
                    formatters: ["NUMERIC"]
                }
            }
        }), {
            data: k,
            error: v
        } = us(x ? `/checkout/v1/checkout/${o}/cod-otp/send` : null, X => wt(X, {}), xs), T = () => ee(void 0, null, function*() {
            var X;
            A("loading"), N("otp", "");
            try {
                yield jr(h, y, u), m(30), E(!1)
            } catch (ne) {
                if (console.error(ne), ((X = ne == null ? void 0 : ne.response) == null ? void 0 : X.status) === 400) {
                    A("failed"), j(!0), b({
                        otp: {
                            status: !0,
                            message: s("otp_limit_exceeded")
                        }
                    });
                    return
                }
            }
            b({
                otp: {
                    status: !1
                }
            }), A("input")
        }), F = n.find(X => (X == null ? void 0 : X.mode) === "COD"), $ = d.useCallback(() => {
            r("COD")
        }, []);
        d.useEffect(() => {
            x && k && ee(void 0, null, function*() {
                var ne, Z, me, B;
                try {
                    if (N("otp", ""), b({
                            otp: {
                                status: !1,
                                showAlert: !1
                            }
                        }), m(30), E(!1), A("input"), !k) return;
                    k.cod_verification_required ? (c((ne = k.cod_otp) == null ? void 0 : ne.context_id), C((Z = k.cod_otp) == null ? void 0 : Z.checkout_id), g((me = k.cod_otp) == null ? void 0 : me.phone)) : (A("verified"), a("NONE"), $())
                } catch (M) {
                    A("failed"), ((B = M == null ? void 0 : M.response) == null ? void 0 : B.status) === 400 && (j(!0), b({
                        otp: {
                            status: !0,
                            message: s("otp_limit_exceeded")
                        }
                    }))
                }
            })
        }, [o, x, k]), d.useEffect(() => {
            var X;
            v && (A("failed"), console.error(v), ((X = v == null ? void 0 : v.response) == null ? void 0 : X.status) === 400 && (j(!0), b({
                otp: {
                    status: !0,
                    message: s("otp_limit_exceeded")
                }
            })))
        }, [v, b, s]), d.useEffect(() => {
            l === 0 && E(!0);
            const X = l > 0 && setInterval(() => m(l - 1), 1e3);
            return () => clearInterval(X)
        }, [l]);
        const Q = d.useCallback(X => ee(void 0, null, function*() {
                if (!(X && (X == null ? void 0 : X.length) !== 4)) {
                    b({
                        otp: {
                            status: !1
                        }
                    }), A("loading");
                    try {
                        yield Nr(h, X, u), A("verified"), a("NONE"), $()
                    } catch (ne) {
                        A("failed"), b({
                            otp: {
                                status: !0,
                                message: s("otp_incorrect")
                            }
                        })
                    }
                }
            }), [h, $, u, b, s]),
            Y = _ === "loading",
            S = ((K = L == null ? void 0 : L.otp) == null ? void 0 : K.status) === !0;
        return d.useEffect(() => {
            w.otp && w.otp.length === 4 && Q(w.otp)
        }, [w.otp]), e.jsxs(Pe, {
            isOpen: t === "COD_OTP",
            setIsOpen: () => {
                a("COD")
            },
            translateAxis: "y",
            customClass: "overflow-scroll md:!top-auto md:absolute rounded-t-2xl max-h-[81vh]",
            modalType: "COD_OTP",
            dialogOverlay: !0,
            "data-sentry-element": "GenericDialog",
            "data-sentry-component": "ConfirmOtpForCOD",
            "data-sentry-source-file": "ConfirmOtpForCOD.tsx",
            children: [e.jsx(Ze, {
                "data-sentry-element": "DialogHeader",
                "data-sentry-source-file": "ConfirmOtpForCOD.tsx",
                children: e.jsxs(Qt.Title, {
                    as: "h3",
                    className: "flex h-full w-full flex-row items-center justify-between bg-white py-4 text-base font-medium text-carbon-dark",
                    "data-sentry-element": "unknown",
                    "data-sentry-source-file": "ConfirmOtpForCOD.tsx",
                    children: [e.jsx("div", {
                        className: "flex items-center",
                        children: e.jsx("h2", {
                            className: "inline-flex gap-2 font-medium text-carbon-dark",
                            children: s("confirm_cod_order_for_x", {
                                amount: Ee(F == null ? void 0 : F.amount)
                            })
                        })
                    }), e.jsx("button", {
                        className: "outline-none",
                        children: e.jsx(st, {
                            className: "h-6 w-6 cursor-pointer text-coal-dark",
                            onClick: () => {
                                a("NONE")
                            },
                            "data-sentry-element": "X",
                            "data-sentry-source-file": "ConfirmOtpForCOD.tsx"
                        })
                    })]
                })
            }), e.jsxs(Je, {
                className: "flex flex-col items-center gap-2 px-3 pb-56",
                "data-sentry-element": "DialogBody",
                "data-sentry-source-file": "ConfirmOtpForCOD.tsx",
                children: [y ? e.jsxs("h2", {
                    className: "text-sm font-medium text-coal-light",
                    children: [`${s("enter_otp_to_verify")} `, " ", e.jsx("span", {
                        className: "text-coal-dark",
                        children: ms(y)
                    })]
                }) : null, e.jsx("div", {
                    className: "px-4 py-3",
                    children: e.jsx(Mn, {
                        isLoading: Y,
                        otpLength: 4,
                        context: "cod",
                        otpValue: (V = w.otp) != null ? V : "",
                        handleSubmit: f(Q),
                        handleChange: X => {
                            var ne;
                            N("otp", X), (ne = L == null ? void 0 : L.otp) != null && ne.status && b({
                                otp: {
                                    status: !1
                                }
                            })
                        },
                        validateOtp: Q,
                        disableResend: S && i,
                        handleResendOtp: T,
                        error: ((oe = L == null ? void 0 : L.otp) == null ? void 0 : oe.status) || !1,
                        errorMessage: ((xe = L == null ? void 0 : L.otp) == null ? void 0 : xe.message) || "",
                        autoFocus: !0,
                        otpCounter: l,
                        otpCounterExpired: p,
                        emailValidation: !1,
                        showSecuredByShopflo: !0,
                        "data-sentry-element": "OTPForm",
                        "data-sentry-source-file": "ConfirmOtpForCOD.tsx"
                    })
                })]
            })]
        })
    },
    Sl = d.memo(() => e.jsxs(e.Fragment, {
        children: [e.jsx(jl, {}), e.jsx(bl, {}), e.jsx(gl, {}), e.jsx(El, {}), e.jsx(Cl, {}), e.jsx(wl, {}), e.jsx(vl, {})]
    }));

function kl({
    primaryMessage: s = "Some items in your cart seem to have gone out of stock",
    secondaryMessage: t = "Any amount deducted will be refunded to you within 5-7 business days.",
    refundId: n,
    buttonText: r = "Back to store"
}) {
    const {
        state: {
            merchant: a
        }
    } = Ye(), o = () => {
        a && gt(`${a.brandUrl}/?floRedirectStatus=oos`)
    };
    return e.jsxs("div", {
        className: "flex h-full flex-col px-10 py-14",
        "data-sentry-component": "NotPlaced",
        "data-sentry-source-file": "NotPlaced.tsx",
        children: [e.jsxs("div", {
            className: "flex h-full flex-col items-center justify-center text-center",
            children: [e.jsx("img", {
                src: co,
                alt: "fallen leaf",
                className: ""
            }), e.jsx("h2", {
                className: "py-3 text-xl font-medium",
                children: "Uh oh"
            }), e.jsx("p", {
                className: "text-coal-dark",
                children: "Your order was not placed."
            }), e.jsx("hr", {
                className: "my-8 w-3/4"
            }), e.jsxs("div", {
                className: "flex flex-col items-center space-y-5",
                children: [s ? e.jsx("h3", {
                    className: "text-sm font-medium text-coal-dark",
                    children: s
                }) : null, t ? e.jsx("p", {
                    className: "text-sm text-coal-dark",
                    children: t
                }) : null, n ? e.jsxs("p", {
                    className: "text-sm text-coal-light",
                    children: ["Refund ID: ", n]
                }) : null]
            })]
        }), e.jsx(ts, {
            height: "h-14",
            width: "w-full",
            customClass: "flex items-center justify-center text-base font-medium rounded-lg text-btnPrimaryText bg-primary-dark px-4",
            buttonText: r,
            onClick: o,
            "data-sentry-element": "GenericButton",
            "data-sentry-source-file": "NotPlaced.tsx"
        })]
    })
}
const Tl = ({}) => {
        const {
            t: s
        } = te(), {
            state: {
                isProcessingDialogVisible: t,
                paymentStatus: n,
                isCancellable: r
            },
            actions: {
                hidePaymentProcessingDialog: a,
                handleCancelPayment: o
            }
        } = Re(), x = d.useCallback(() => s(n === "PROCESSING" && !r ? "placing_order" : n === "PROCESSING" ? "payment_processing" : n === "PLACING_ORDER" ? "placing_order" : n === "PROCESSING_UPI" ? "payment_processing_upi" : "payment_processing"), [n]);
        return e.jsx(Pe, {
            isOpen: t,
            setIsOpen: l => a(),
            translateAxis: "y",
            dialogOverlay: !0,
            customClass: `bottom-0 overflow-scroll ${n==="ORDER_FAILED"?"h-screen md:h-[85vh]":"h-fit !top-auto md:absolute !rounded-t-2xl"}`,
            modalType: "PROCESSING",
            "data-sentry-element": "GenericDialog",
            "data-sentry-component": "PaymentProcessing",
            "data-sentry-source-file": "PaymentProcessing.tsx",
            children: e.jsx(e.Fragment, {
                children: e.jsx("div", {
                    className: `flex flex-col items-center justify-center space-y-6 px-4 pt-6 pb-12 ${n==="ORDER_FAILED"&&"h-full"}`,
                    children: n === "ORDER_FAILED" ? e.jsx(kl, {}) : e.jsxs(e.Fragment, {
                        children: [e.jsx("p", {
                            className: "text-center font-light",
                            children: x()
                        }), e.jsx("div", {
                            className: "mb-6",
                            children: e.jsx(No, {})
                        }), r && o && e.jsx(ts, {
                            buttonText: s("cancel_payment"),
                            customClass: "opacity-70 underline underline-offset-4 decoration-primary-dark decoration-1 rounded-lg text-xs tracking-wider space-x-2",
                            onClick: () => {
                                a(), o()
                            }
                        })]
                    })
                })
            })
        })
    },
    Al = Ie.memo(Tl),
    dn = Ie.memo(() => {
        te();
        const {
            state: {
                checkoutId: s,
                billing: t,
                shippingHandles: n,
                checkoutItems: r,
                appliedCoupons: a
            },
            actions: {
                setCheckoutItems: o,
                setBilling: x,
                setHasCODMode: l
            }
        } = ge(), {
            sendAnalyticsEvent: m
        } = qe(), {
            state: {
                paymentMethods: h
            },
            actions: {
                setPaymentMethods: c,
                handlePaymentMethodSelected: u,
                setPaymentMethodDialog: C
            }
        } = Re(), {
            setIsLoading: y
        } = br(), {
            hash: g
        } = xn(), {
            data: i,
            isValidating: j
        } = us(s ? `/checkout/v2/checkout/${s}/payments` : null, Er, xs), p = d.useRef(!1);
        return d.useEffect(() => {
            s && m({
                eventName: q.FLO_PAYMENT_LOADED,
                eventType: "load",
                metaData: {
                    checkoutId: s
                }
            })
        }, [s]), d.useEffect(() => {
            var _, A, N;
            if (j || !((_ = i == null ? void 0 : i.modes) != null && _.length)) return;
            const E = [];
            (A = i == null ? void 0 : i.modes) == null || A.forEach(b => {
                var f, w, L;
                (L = (w = (f = b == null ? void 0 : b.rule_group_mapping) == null ? void 0 : f.rule_groups) == null ? void 0 : w.AUTOMATION) == null || L.forEach(k => {
                    E.find(v => v.id === k) || E.push({
                        id: k,
                        blockedModes: [],
                        allowedModes: []
                    })
                })
            }), (N = i == null ? void 0 : i.modes) == null || N.forEach(b => {
                var f, w, L, k;
                (w = (f = b == null ? void 0 : b.metadata) == null ? void 0 : f.rule_groups) != null && w.length && ((k = (L = b == null ? void 0 : b.metadata) == null ? void 0 : L.rule_groups) == null || k.forEach(v => {
                    var T, F;
                    (v == null ? void 0 : v.source) === "AUTOMATION" && ((T = v == null ? void 0 : v.failed_rule_groups) == null || T.forEach($ => {
                        var Q, Y;
                        (Y = (Q = E == null ? void 0 : E.find(S => S.id === $)) == null ? void 0 : Q.blockedModes) == null || Y.push(b == null ? void 0 : b.mode)
                    }), (F = v == null ? void 0 : v.successful_rule_groups) == null || F.forEach($ => {
                        var Q, Y;
                        (Y = (Q = E == null ? void 0 : E.find(S => S.id === $)) == null ? void 0 : Q.allowedModes) == null || Y.push(b == null ? void 0 : b.mode)
                    }))
                }))
            }), m({
                eventName: q.FLO_PAYMENT_REFRESHED,
                eventFor: [Ke.SF_ANALYTICS],
                eventType: "load",
                metaData: {
                    automationData: E
                }
            })
        }, [i, j]), d.useEffect(() => {
            var f, w, L, k;
            if (j && p.current) {
                p.current = !1;
                return
            }
            if (!i || j || p.current) return;
            p.current = !0;
            const E = (f = i == null ? void 0 : i.modes) == null ? void 0 : f.some(v => v.mode === "COD");
            l(E), Cr(i == null ? void 0 : i.modes) && o(vs(i == null ? void 0 : i.items));
            const A = (w = i == null ? void 0 : i.modes[0]) == null ? void 0 : w.amount;
            x(R(P({}, t), {
                prepaid_total: A
            })), c(i == null ? void 0 : i.modes);
            const N = (L = i == null ? void 0 : i.modes) == null ? void 0 : L.some(v => v.mode === "CASHFREE"),
                b = (k = i == null ? void 0 : i.modes) == null ? void 0 : k.some(v => v.mode === "COD");
            if (N && !b) {
                u("CASHFREE");
                return
            }
            y(!1)
        }, [i, j, a]), d.useEffect(() => {
            var E;
            g != null && g.length && g === "#COD" && !(((E = wr(n)) == null ? void 0 : E.length) > 1) && C("COD")
        }, [n, g]), !j && !h ? e.jsx(e.Fragment, {}) : e.jsx(e.Fragment, {
            children: e.jsxs(_e, {
                loading: j,
                children: [e.jsx(_e.Skeleton, {
                    children: e.jsx(Ds, {})
                }), e.jsxs(_e.Content, {
                    children: [e.jsx(d.Suspense, {
                        fallback: e.jsx(Ds, {}),
                        children: e.jsx(pl, {})
                    }), e.jsx(Sl, {}), e.jsx(Al, {}), e.jsx(ya, {})]
                })]
            })
        })
    }),
    Ol = Ie.lazy(() => kt(() =>
        import ("./checkout-components-CDs-GsFA.js").then(s => s.h), __vite__mapDeps([23, 4, 3, 2, 5, 6, 7, 8, 9, 10, 11, 1, 12, 13, 0, 18, 30, 14, 15, 16, 17, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29]))),
    Ei = ({
        isPrimaryBtnLoading: s = !1
    }) => {
        var ue, Te, le, he, ie, fe, Oe;
        const {
            t
        } = te(), [n] = Mt(), {
            state: {
                isC2P: r,
                checkoutView: a,
                checkoutModal: o,
                isTwoStepCheckout: x,
                checkoutUIMetadata: l,
                initialCheckoutStep: m,
                appliedCoupons: h,
                checkoutValidations: c,
                uid: u,
                availableAddOns: C,
                appliedCartAddOns: y,
                checkoutId: g,
                checkoutLoading: i
            },
            actions: {
                setCheckoutModal: j,
                setCheckoutView: p,
                setCheckoutValidations: E,
                setEtdText: _,
                setInitialCheckoutStep: A
            }
        } = ge(), {
            state: {
                user: N,
                isAddressLoading: b
            }
        } = mt(), {
            state: {
                merchant: f,
                addressConfig: w
            }
        } = Ye(), {
            sendAnalyticsEvent: L
        } = qe(), {
            handleAddOnEdit: k,
            showFullScreenLoader: v
        } = vr(), T = (ue = N == null ? void 0 : N.default_shipping_address) != null && ue.id ? (Te = N == null ? void 0 : N.default_shipping_address) == null ? void 0 : Te.id : "", {
            hash: F
        } = xn(), {
            isETDEnabled: $
        } = Ss(T), [Q, Y] = d.useState("ADDRESS_NEW"), [S, K] = d.useState(!1), V = (le = f == null ? void 0 : f.addressConfig) == null ? void 0 : le.deliveryConfig, oe = d.useMemo(() => {
            var z;
            return (z = Object.values(C)) == null ? void 0 : z.filter(I => (I == null ? void 0 : I.addon_level) === "CART" && ["CHECKOUT", "DEFAULT"].includes(I == null ? void 0 : I.ui_asset) && I.addon_type !== "CART_NOTE")
        }, [C]);
        d.useEffect(() => {
            if (F != null && F.length) {
                xe();
                return
            }
            n.get("default_view") === "PAYMENTS" ? (A("PAYMENTS"), p("PAYMENTS")) : p("ADDRESS_LIST")
        }, []), d.useEffect(() => {
            var z;
            (r || m === "PAYMENTS") && (N != null && N.uid) && (p("PAYMENTS"), X(), (z = N == null ? void 0 : N.addresses) != null && z.length && L({
                eventName: q.FLO_ADDRESS_SELECTED,
                eventType: "click"
            }))
        }, [r, m, N == null ? void 0 : N.uid, N == null ? void 0 : N.addresses]), d.useEffect(() => {
            x || o !== "ADDRESS_NEW" && Sr(a)
        }, [a]), d.useEffect(() => {
            var z;
            if (!x) {
                if (!b && !((z = N == null ? void 0 : N.addresses) != null && z.length)) {
                    j("ADDRESS_NEW");
                    return
                }
                o === "ADDRESS_NEW" && (N != null && N.addresses) && j("NONE")
            }
        }, [N, b]);
        const xe = () => {
                switch (F.slice(1)) {
                    case "PAYMENTS":
                    case "COD":
                        p("PAYMENTS");
                        return;
                    default:
                        return
                }
            },
            X = () => ee(void 0, null, function*() {
                var ce, pe, ye;
                const z = (ce = N == null ? void 0 : N.default_shipping_address) != null && ce.id ? (pe = N == null ? void 0 : N.default_shipping_address) == null ? void 0 : pe.id : "",
                    I = (ye = N == null ? void 0 : N.addresses) == null ? void 0 : ye.find(G => (G == null ? void 0 : G.id) === z);
                if ($ && z) {
                    const G = yield ot(`/checkout/${u}/address/${z}/etd`, "KRATOS_PRIVATE");
                    _({
                        addressId: z,
                        text: Nn(G)
                    })
                }
                if (!I) return;
                const He = hn(I, w, g);
                if (!He.available) {
                    ne(z), E(R(P({}, c), {
                        address: {
                            isValid: !1,
                            metadata: {
                                addressId: z,
                                fieldData: He == null ? void 0 : He.errorFieldData
                            }
                        }
                    }));
                    return
                }
                E(R(P({}, c), {
                    address: {
                        isValid: !0
                    }
                }))
            }),
            ne = z => {
                Y(z), j("ADDRESS_EDIT")
            },
            Z = () => {
                r || (L({
                    eventName: q.FLO_DELIVERY_ADDRESS_CHANGE_CLICKED,
                    eventType: "click"
                }), p("ADDRESS_LIST"))
            },
            me = e.jsxs("div", {
                className: "bg-white space-y-2",
                children: [e.jsx("div", {
                    className: "skeleton-loader h-[16px] rounded-md w-2/5"
                }), e.jsx("div", {
                    className: "skeleton-loader h-[16px] rounded-md w-full"
                })]
            }),
            B = e.jsxs("div", {
                className: "border-base px-3 py-4 bg-white space-y-2",
                children: [e.jsx("div", {
                    className: "skeleton-loader h-[16px] rounded-md w-2/5"
                }), e.jsx("div", {
                    className: "skeleton-loader h-[16px] rounded-md w-full"
                })]
            }),
            M = e.jsx("div", {
                className: "border-base px-3 py-4 bg-white",
                children: e.jsx("div", {
                    className: "skeleton-loader h-[16px] rounded-md w-full"
                })
            }),
            se = () => e.jsx(e.Fragment, {
                children: e.jsx("div", {
                    className: "border-base mx-3 mt-3 flex flex-col bg-white",
                    children: e.jsxs("div", {
                        className: `flex w-full flex-col gap-4 overflow-x-hidden rounded-b-[1.75rem] px-3 pt-4 ${x?"pb-4":"pb-3"}`,
                        children: [e.jsxs(_e, {
                            loading: i,
                            "data-sentry-element": "AnimateLoading",
                            "data-sentry-source-file": "AuthenticatedViews.tsx",
                            children: [e.jsx(_e.Skeleton, {
                                "data-sentry-element": "unknown",
                                "data-sentry-source-file": "AuthenticatedViews.tsx",
                                children: me
                            }), e.jsxs(_e.Content, {
                                "data-sentry-element": "unknown",
                                "data-sentry-source-file": "AuthenticatedViews.tsx",
                                children: [e.jsxs("div", {
                                    className: "flex w-full items-center justify-between space-x-2",
                                    children: [e.jsxs("div", {
                                        className: "flex space-x-2",
                                        children: [e.jsx(kn, {
                                            className: "h-4 w-4 text-coal-dark outline-none",
                                            strokeWidth: 2.5,
                                            "data-sentry-element": "Truck",
                                            "data-sentry-source-file": "AuthenticatedViews.tsx"
                                        }), e.jsx("h2", {
                                            className: "text-sm font-medium text-coal-dark",
                                            children: t("delivering_to_address")
                                        })]
                                    }), e.jsxs("div", {
                                        id: "flo_add__address",
                                        className: "flex items-center space-x-2 hover:bg-gray-lighter p-2 rounded-md cursor-pointer",
                                        onClick: () => {
                                            Y("ADDRESS_NEW"), j("ADDRESS_NEW")
                                        },
                                        children: [e.jsx("span", {
                                            className: "text-sm font-semibold text-coal-dark",
                                            children: "Add new"
                                        }), e.jsx(An, {
                                            size: 20,
                                            "data-sentry-element": "PlusCircle",
                                            "data-sentry-source-file": "AuthenticatedViews.tsx"
                                        })]
                                    })]
                                }), (V == null ? void 0 : V.isEnabled) && e.jsx("div", {
                                    className: "flex justify-center items-center bg-primary-alpha05 rounded-xl p-2 mt-2",
                                    children: e.jsx("span", {
                                        className: "truncate text-coal-dark font-medium text-xs",
                                        children: V == null ? void 0 : V.deliveryText
                                    })
                                })]
                            })]
                        }), e.jsx("div", {
                            children: e.jsx("div", {
                                className: "flex flex-col gap-4",
                                children: e.jsx($n, {
                                    handleEditAddress: ne,
                                    isPrimaryBtnLoading: s,
                                    "data-sentry-element": "AddressModify",
                                    "data-sentry-source-file": "AuthenticatedViews.tsx"
                                })
                            })
                        })]
                    })
                })
            });
        return e.jsxs(e.Fragment, {
            children: [a === "ADDRESS_LIST" && se(), a === "PAYMENTS" && m !== "PAYMENTS" && e.jsx(e.Fragment, {
                children: e.jsxs("div", {
                    className: "flex flex-col space-y-3 mx-3 mt-3",
                    children: [e.jsx(el, {
                        handleDeliveryAddressBtnClick: Z
                    }), e.jsxs(_e, {
                        loading: i,
                        children: [e.jsx(_e.Skeleton, {
                            children: M
                        }), e.jsx(_e.Content, {
                            motionProps: {
                                className: "!mt-0"
                            },
                            children: e.jsx(on, {})
                        })]
                    }), (f == null ? void 0 : f.showShippingOnPayments) && e.jsx("div", {
                        className: "w-full",
                        children: e.jsx(sn, {
                            loadPayments: () => K(!0)
                        })
                    }), e.jsx(an, {}), e.jsxs(Dt, {
                        isChildVisible: !!((he = l == null ? void 0 : l.upsellConfig) != null && he.isEnabled) && !r,
                        loading: i,
                        children: [e.jsx(Dt.Skeleton, {
                            children: e.jsx(en, {})
                        }), e.jsx(Dt.Content, {
                            motionProps: {
                                className: "!mt-0"
                            },
                            children: e.jsx(nn, {})
                        })]
                    }), e.jsx(_e, {
                        loading: i,
                        size: "sm",
                        children: e.jsx(_e.Content, {
                            motionProps: {
                                className: "!mt-0"
                            },
                            children: !r && e.jsx("div", {
                                className: Fe("space-y-3", (oe == null ? void 0 : oe.length) > 0 ? "mt-3" : ""),
                                children: oe == null ? void 0 : oe.map(z => e.jsx(rn, {
                                    addOnData: z,
                                    isApplied: y == null ? void 0 : y.some(I => (I == null ? void 0 : I.addon_id) === (z == null ? void 0 : z.addon_id)),
                                    handleAction: I => k({
                                        action: I ? "ADD" : "DELETE",
                                        addOnLevel: "CART",
                                        addOnId: z == null ? void 0 : z.addon_id,
                                        showFullScreenLoader: !0
                                    })
                                }, z == null ? void 0 : z.addon_id))
                            })
                        })
                    }), e.jsx(d.Suspense, {
                        fallback: e.jsx(Ds, {
                            showGyftrLoading: !0
                        }),
                        children: e.jsx(dn, {})
                    })]
                })
            }), a === "PAYMENTS" && m === "PAYMENTS" && e.jsx(e.Fragment, {
                children: e.jsxs("div", {
                    className: "flex flex-col space-y-3 mx-3 mt-3",
                    children: [e.jsxs(_e, {
                        loading: i,
                        children: [e.jsx(_e.Skeleton, {
                            children: B
                        }), e.jsx(_e.Content, {
                            children: e.jsx(tl, {})
                        })]
                    }), e.jsxs(_e, {
                        loading: i,
                        children: [e.jsx(_e.Skeleton, {
                            children: M
                        }), e.jsx(_e.Content, {
                            motionProps: {
                                className: "!mt-0"
                            },
                            children: e.jsx(on, {})
                        })]
                    }), e.jsxs(_e, {
                        loading: i,
                        children: [e.jsx(_e.Skeleton, {
                            children: B
                        }), e.jsx(_e.Content, {
                            children: e.jsx(sn, {
                                loadPayments: () => K(!0)
                            })
                        })]
                    }), e.jsxs(Dt, {
                        isChildVisible: !!(kr(h) || f != null && f.isDiscountEnabled),
                        loading: i,
                        children: [e.jsx(Dt.Skeleton, {
                            children: B
                        }), e.jsx(Dt.Content, {
                            motionProps: {
                                className: "!mt-0"
                            },
                            children: e.jsx(Eo, {})
                        })]
                    }), S ? e.jsx(an, {}) : B, e.jsxs(Dt, {
                        isChildVisible: m === "PAYMENTS" && !!((ie = l == null ? void 0 : l.upsellConfig) != null && ie.isEnabled) && !r,
                        loading: !S,
                        children: [e.jsx(Dt.Skeleton, {
                            children: e.jsx(en, {})
                        }), e.jsx(Dt.Content, {
                            motionProps: {
                                className: "!mt-0"
                            },
                            children: e.jsx(nn, {})
                        })]
                    }), e.jsx(_e, {
                        loading: i,
                        size: "sm",
                        children: e.jsx(_e.Content, {
                            motionProps: {
                                className: "!mt-0"
                            },
                            children: !r && e.jsx("div", {
                                className: Fe("space-y-3", (oe == null ? void 0 : oe.length) > 0 ? "mt-3" : ""),
                                children: oe == null ? void 0 : oe.map(z => e.jsx(rn, {
                                    addOnData: z,
                                    isApplied: y == null ? void 0 : y.some(I => (I == null ? void 0 : I.addon_id) === (z == null ? void 0 : z.addon_id)),
                                    handleAction: I => k({
                                        action: I ? "ADD" : "DELETE",
                                        addOnLevel: "CART",
                                        addOnId: z == null ? void 0 : z.addon_id,
                                        showFullScreenLoader: !0
                                    })
                                }, z == null ? void 0 : z.addon_id))
                            })
                        })
                    }), S ? e.jsx(dn, {}) : e.jsx(Ds, {
                        showGyftrLoading: !0
                    })]
                })
            }), e.jsx(Pe, {
                isOpen: o === "ADDRESS_LIST",
                setIsOpen: () => {
                    j("NONE")
                },
                translateAxis: "y",
                dialogOverlay: !0,
                customClass: "h-[92%] md:h-[77vh] md:top-[8vh]",
                modalType: "ADDRESS_LIST",
                "data-sentry-element": "GenericDialog",
                "data-sentry-source-file": "AuthenticatedViews.tsx",
                children: e.jsx(Zo, {
                    setIsOpen: () => j("NONE"),
                    isPrimaryBtnLoading: s,
                    "data-sentry-element": "AddressListDialog",
                    "data-sentry-source-file": "AuthenticatedViews.tsx"
                })
            }), e.jsx(Pe, {
                isOpen: o === "ADDRESS_NEW" || o === "ADDRESS_EDIT",
                setIsOpen: () => {
                    j("NONE"), K(!0)
                },
                translateAxis: "y",
                dialogOverlay: !0,
                customClass: "h-[92%] md:h-[77vh] md:top-[8vh]",
                modalType: "ADDRESS_NEW",
                "data-sentry-element": "GenericDialog",
                "data-sentry-source-file": "AuthenticatedViews.tsx",
                children: e.jsx(Yn, {
                    addressId: Q,
                    initialFormErrors: (Oe = (fe = c.address) == null ? void 0 : fe.metadata) == null ? void 0 : Oe.fieldData,
                    "data-sentry-element": "AddressForm",
                    "data-sentry-source-file": "AuthenticatedViews.tsx"
                })
            }), e.jsx(Pe, {
                isOpen: o === "SHIPPING_HANDLES",
                setIsOpen: () => j("NONE"),
                translateAxis: "y",
                customClass: "overflow-scroll md:!top-auto md:absolute rounded-t-2xl max-h-[81vh]",
                dialogOverlay: !0,
                modalType: "SHIPPING_HANDLES",
                "data-sentry-element": "GenericDialog",
                "data-sentry-source-file": "AuthenticatedViews.tsx",
                children: e.jsx(Ol, {
                    "data-sentry-element": "ShippingHandlesDialog",
                    "data-sentry-source-file": "AuthenticatedViews.tsx"
                })
            }), e.jsx(Pe, {
                isOpen: o === "OOS",
                setIsOpen: () => j("NONE"),
                translateAxis: "y",
                dialogOverlay: !0,
                customClass: "overflow-scroll md:!top-auto md:absolute rounded-t-2xl max-h-[81vh]",
                modalType: "OOS",
                "data-sentry-element": "GenericDialog",
                "data-sentry-source-file": "AuthenticatedViews.tsx",
                children: e.jsx(Co, {
                    "data-sentry-element": "OOSDialog",
                    "data-sentry-source-file": "AuthenticatedViews.tsx"
                })
            }), v && e.jsx(St, {})]
        })
    },
    Ci = ({}) => {
        const {
            actions: {
                setCheckoutView: s
            }
        } = ge(), {
            state: {
                merchant: t
            }
        } = Ye();
        return d.useEffect(() => {
            s("AUTH")
        }, []), e.jsx("div", {
            className: "flex w-full flex-col items-center space-y-4 px-3 pt-3 pb-4",
            "data-sentry-component": "UnauthenticatedViews",
            "data-sentry-source-file": "UnauthenticatedViews.tsx",
            children: e.jsx(So, {
                "data-sentry-element": "MultiFactorAuthentication",
                "data-sentry-source-file": "UnauthenticatedViews.tsx"
            })
        })
    },
    zn = d.lazy(() => kt(() =>
        import ("./page-payment-status-BC3kxJK9.js"), __vite__mapDeps([31, 4, 3, 2, 5, 6, 7, 8, 9, 10, 11, 1, 12, 13, 0, 18, 30, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]))),
    Il = d.lazy(() => kt(() =>
        import ("./page-login-sso-BU8vkMM6.js"), __vite__mapDeps([32, 4, 3, 2, 5, 6, 7, 8, 9, 10, 11, 1, 12, 13, 0, 18, 30, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]))),
    Pl = d.lazy(() => kt(() =>
        import ("./page-login-check-CC-1EXpG.js"), __vite__mapDeps([33, 7, 4, 3, 2, 5, 6, 22, 16, 0, 1, 18, 30, 15, 9, 17, 19, 11, 23, 24, 8, 10, 25, 12, 26, 27, 28, 29, 13, 14, 20, 21]))),
    Ll = d.lazy(() => kt(() =>
        import ("./page-ghost-Ck6akrrN.js"), __vite__mapDeps([34, 7, 4, 3, 2, 5, 6, 22, 16, 0, 1, 18, 30, 15, 9, 17, 19, 11, 23, 24, 8, 10, 25, 12, 26, 27, 28, 29, 13, 14, 20, 21]))),
    Bl = d.lazy(() => kt(() =>
        import ("./page-marketing-popup-B8A4Cew7.js"), __vite__mapDeps([35, 4, 3, 2, 5, 6, 7, 8, 9, 10, 11, 1, 12, 13, 0, 18, 30, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]))),
    Rl = d.lazy(() => kt(() =>
        import ("./page-empty-cart-Do46F4BO.js"), __vite__mapDeps([36, 4, 3, 2, 5, 6, 7, 8, 9, 10, 11, 1, 12, 13, 0, 18, 30, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]))),
    Fl = d.lazy(() => kt(() =>
        import ("./page-experiment-widget-BEunb07a.js"), __vite__mapDeps([37, 4, 3, 2, 5, 6, 7, 8, 9, 10, 11, 1, 12, 13, 0, 18, 30, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]))),
    Dl = d.lazy(() => kt(() =>
        import ("./page-mock-checkout-DymUfAIm.js"), __vite__mapDeps([38, 4, 3, 2, 5, 6, 7, 8, 9, 10, 11, 1, 12, 13, 0, 18, 30, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]))),
    Ul = d.lazy(() => kt(() =>
        import ("./page-wishlist-CvoIam5g.js"), __vite__mapDeps([39, 4, 3, 2, 5, 6, 7, 8, 9, 10, 11, 1, 12, 13, 0, 18, 30, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]))),
    wi = ({}) => e.jsx(e.Fragment, {
        children: e.jsxs(tr, {
            "data-sentry-element": "Routes",
            "data-sentry-source-file": "AppRouter.tsx",
            children: [e.jsx(Qa, {
                path: "/payment-status",
                element: e.jsx(zn, {}),
                "data-sentry-element": "Route",
                "data-sentry-source-file": "AppRouter.tsx"
            }), e.jsx(Qa, {
                path: "/",
                element: e.jsx(Ml, {}),
                "data-sentry-element": "Route",
                "data-sentry-source-file": "AppRouter.tsx"
            })]
        })
    }),
    Ml = ({}) => {
        const [s] = Mt();
        switch (s.get("page")) {
            case "payment-status":
                return e.jsx(zn, {});
            case "login-sso":
                return e.jsx(Il, {});
            case "cart":
            case "CART":
                return e.jsx(Do, {});
            case "login-status-check":
                return e.jsx(Pl, {});
            case "ghost-modal":
                return e.jsx(Ll, {});
            case "marketing-popup":
                return e.jsx(Bl, {});
            case "wishlist":
                return e.jsx(Ul, {});
            case "mock-checkout":
                return e.jsx(Dl, {});
            case "experiments-widget":
                return e.jsx(Fl, {});
            case "empty-cart":
                return e.jsx(Rl, {});
            default:
                return e.jsx(Uo, {})
        }
    },
    Gl = ({
        setIsOpen: s,
        handleExitPayment: t
    }) => {
        const {
            t: n
        } = te();
        return e.jsxs(e.Fragment, {
            children: [e.jsx(Ze, {
                "data-sentry-element": "DialogHeader",
                "data-sentry-source-file": "ExitPayment.tsx",
                children: e.jsxs("div", {
                    className: "flex flex-col space-y-4 py-4 text-base ",
                    children: [e.jsx("h1", {
                        className: "font-medium text-carbon-dark",
                        children: n("exit_checkout_header")
                    }), e.jsx("h2", {
                        className: "font-normal text-coal-dark",
                        children: n("exit_checkout_subheader")
                    })]
                })
            }), e.jsx(Je, {
                "data-sentry-element": "DialogBody",
                "data-sentry-source-file": "ExitPayment.tsx",
                children: e.jsxs("div", {
                    className: "relative flex w-full gap-4 px-6 pb-4 pt-14",
                    children: [e.jsx(ts, {
                        buttonText: n("yes_exit"),
                        height: "h-14",
                        customClass: "bg-[#E06F39] rounded-2xl text-white",
                        onClick: t,
                        "data-sentry-element": "GenericButton",
                        "data-sentry-source-file": "ExitPayment.tsx"
                    }), e.jsx(ts, {
                        buttonText: n("no"),
                        height: "h-14",
                        customClass: "border-2 rounded-2xl text-coal-dark",
                        onClick: () => s(!1),
                        "data-sentry-element": "GenericButton",
                        "data-sentry-source-file": "ExitPayment.tsx"
                    })]
                })
            })]
        })
    },
    vi = ({
        paymentDetails: s,
        status: t
    }) => {
        var p, E;
        const {
            state: {
                merchant: n
            }
        } = Ye(), {
            state: {
                checkoutToken: r,
                redirectUrl: a
            }
        } = ge(), {
            t: o
        } = te(), x = sr(), [l] = Mt(), m = l.get("checkoutId"), {
            sendAnalyticsEvent: h
        } = qe(), [c, u] = d.useState(!1), C = d.useRef(!1);
        d.useEffect(() => {
            t === "PAYMENT_CANCELLED" && !C.current && (h({
                eventName: q.FLO_PAYMENT_CANCELLED_PAGE_LOADED,
                eventType: "load"
            }), C.current = !0)
        }, [t, h]);
        const y = {
                CHANGE_PAYMENT_METHOD: "PAYMENTS",
                RETRY_PAYMENT: "PAYMENTS",
                CONVERT_TO_COD: "COD",
                PLACE_ORDER_AGAIN: "PAYMENTS"
            },
            g = _ => {
                if (_ !== "SEND_WHATSAPP_LINK") {
                    if (_ === "CLOSE_PAYMENT") {
                        x(`/?tokenId=${r}`);
                        return
                    }
                    _ === "CHANGE_PAYMENT_METHOD" && t === "PAYMENT_CANCELLED" && h({
                        eventName: q.FLO_TRY_OTHER_METHOD_CLICKED,
                        eventType: "click"
                    }), x(`/?tokenId=${r}&old_checkout_id=${m}#${y[_]}`)
                }
            },
            i = () => {
                n && Tr(a != null ? a : n == null ? void 0 : n.brandUrl, !1)
            },
            j = () => {
                switch (t) {
                    case "PAYMENT_CANCELLED":
                        return o("payment_cancelled");
                    case "PAYMENT_FAILED":
                        return o("payment_x_failed");
                    default:
                        return o("polling_ended_message")
                }
            };
        return e.jsxs(e.Fragment, {
            children: [e.jsx("div", {
                className: "h-full px-6 py-2",
                children: e.jsxs("div", {
                    className: "border-box flex h-full flex-col items-center",
                    children: [e.jsx("div", {
                        className: "justify-self-top mb-auto pt-12",
                        children: e.jsx("img", {
                            src: n == null ? void 0 : n.logoUrl,
                            alt: "Brand Logo",
                            onError: _ => {
                                _.currentTarget.style.display = "none"
                            },
                            className: "h-10 max-w-[9.375rem] bg-transparent object-contain"
                        })
                    }), e.jsxs("div", {
                        className: "my-auto flex flex-col gap-6 justify-self-center",
                        children: [e.jsxs("div", {
                            className: "flex flex-col items-center gap-6 ",
                            children: [e.jsx("img", {
                                src: t === "PAYMENT_CANCELLED" ? uo : mo,
                                alt: "Info Error Icon",
                                className: "h-12 w-12 bg-transparent object-contain"
                            }), e.jsx("h1", {
                                className: "text-center text-lg font-medium ",
                                children: j()
                            })]
                        }), e.jsxs("div", {
                            className: `flex gap-2 rounded-lg p-4 text-coal-dark ${t==="PAYMENT_CANCELLED"?"border border-gray-light bg-[#FAFAFA]":"bg-primary-light"}`,
                            children: [e.jsx("div", {
                                className: "mb-auto",
                                children: e.jsx(Tn, {
                                    className: `h-3.5 w-3.5 ${t==="PAYMENT_CANCELLED"?"text-coal-dark":"text-primary-dark"}`,
                                    "data-sentry-element": "Info",
                                    "data-sentry-source-file": "PaymentFailed.tsx"
                                })
                            }), e.jsx("p", {
                                className: "text-sm font-normal",
                                children: o(t === "PAYMENT_CANCELLED" ? "amount_deducted_cancelled_warning" : "amount_deducted_failed_warning")
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "mt-auto flex w-full flex-col items-center gap-4 justify-self-end",
                        children: [e.jsx(ts, {
                            buttonText: (E = o(`${(p=s==null?void 0:s.primaryCTA)==null?void 0:p.toLowerCase()}`)) != null ? E : o("place_order_again"),
                            height: "h-14",
                            customClass: "bg-primary-dark text-btnPrimaryText rounded-2xl",
                            onClick: () => {
                                var _;
                                return g((_ = s == null ? void 0 : s.primaryCTA) != null ? _ : "PLACE_ORDER_AGAIN")
                            },
                            "data-sentry-element": "GenericButton",
                            "data-sentry-source-file": "PaymentFailed.tsx"
                        }), t === "PAYMENT_CANCELLED" && e.jsxs("div", {
                            className: "flex text-sm",
                            children: [e.jsx("p", {
                                className: "text-coal-light",
                                children: "Forgot something? "
                            }), e.jsx("p", {
                                className: "cursor-pointer text-coal-dark underline decoration-coal-dark",
                                onClick: () => u(!0),
                                children: "Back to store"
                            })]
                        }), e.jsx("div", {
                            className: "flex justify-center pb-2 pt-12",
                            children: e.jsx("img", {
                                src: xo,
                                className: "h-4",
                                alt: "shopflo-logo"
                            })
                        })]
                    })]
                })
            }), e.jsx(Pe, {
                isOpen: c,
                translateAxis: "y",
                modalType: "NONE",
                dialogOverlay: !0,
                customClass: "overflow-scroll md:!top-auto md:absolute",
                "data-sentry-element": "GenericDialog",
                "data-sentry-source-file": "PaymentFailed.tsx",
                children: e.jsx(Gl, {
                    setIsOpen: _ => u(_),
                    handleExitPayment: i,
                    "data-sentry-element": "ExitPayment",
                    "data-sentry-source-file": "PaymentFailed.tsx"
                })
            })]
        })
    },
    Si = ({
        setIsOpen: s,
        handlePaymentCancel: t
    }) => {
        const [n, r] = d.useState(!1), {
            t: a
        } = te(), {
            sendAnalyticsEvent: o
        } = qe(), x = () => ee(void 0, null, function*() {
            try {
                r(!0), o({
                    eventName: q.FLO_PAYMENT_CANCEL_CONFIRMATION,
                    eventType: "click"
                }), yield t("PAYMENT_CANCELLED", {
                    status: "PAYMENT_CANCELLED"
                })
            } catch (l) {
                console.error(l)
            } finally {
                r(!1)
            }
        });
        return e.jsxs(e.Fragment, {
            children: [e.jsx(Ze, {
                "data-sentry-element": "DialogHeader",
                "data-sentry-source-file": "PaymentCancel.tsx",
                children: e.jsxs("div", {
                    className: "flex h-full w-full flex-row items-center justify-between py-4",
                    children: [e.jsx("h1", {
                        className: "text-base font-medium",
                        children: a("cancel_payment_header")
                    }), e.jsx("button", {
                        className: "outline-none",
                        children: e.jsx(st, {
                            className: "h-6 w-6 cursor-pointer text-coal-dark",
                            onClick: () => s(!1),
                            "data-sentry-element": "X",
                            "data-sentry-source-file": "PaymentCancel.tsx"
                        })
                    })]
                })
            }), e.jsx(Je, {
                "data-sentry-element": "DialogBody",
                "data-sentry-source-file": "PaymentCancel.tsx",
                children: e.jsxs("div", {
                    className: "relative flex w-full flex-col space-y-4 px-6 pt-8 pb-4",
                    children: [e.jsx(ts, {
                        buttonText: a("yes"),
                        height: "h-14",
                        customClass: "bg-[#E06F39] rounded-2xl text-white",
                        onClick: x,
                        "data-sentry-element": "GenericButton",
                        "data-sentry-source-file": "PaymentCancel.tsx"
                    }), e.jsx(ts, {
                        buttonText: a("no"),
                        height: "h-14",
                        customClass: "border-2 rounded-2xl text-coal-dark",
                        onClick: () => s(!1),
                        "data-sentry-element": "GenericButton",
                        "data-sentry-source-file": "PaymentCancel.tsx"
                    })]
                })
            }), n && e.jsx(St, {})]
        })
    },
    ki = ({
        openSecuredDialog: s
    }) => e.jsxs("div", {
        className: "flex w-full flex-col items-center space-y-4",
        "data-sentry-component": "Login",
        "data-sentry-source-file": "Login.tsx",
        children: [e.jsx(ko, {
            context: "SSO",
            "data-sentry-element": "AuthLogin",
            "data-sentry-source-file": "Login.tsx"
        }), e.jsx("div", {
            className: "!mt-[60px] flex",
            children: e.jsx(Un, {
                showSecuredLogo: !1,
                "data-sentry-element": "TermsConditions",
                "data-sentry-source-file": "Login.tsx"
            })
        }), e.jsx("button", {
            className: "!mt-4 rounded-md border border-[#a6a6a6] p-1 shadow-[0_1px_2px_0px_rgba(0,0,0,0.15)]",
            onClick: () => s(!0),
            children: e.jsx("img", {
                src: ga,
                alt: "shopflo-logo",
                className: "h-3.5"
            })
        })]
    }),
    $l = ({
        userDetails: s,
        setScreen: t,
        setUserDetails: n
    }) => {
        var b, f, w, L, k, v;
        const {
            t: r
        } = te(), [a, o] = Mt(), x = a.get("auth-request-id"), l = a.get("request-id"), {
            sendAnalyticsEvent: m
        } = qe(), {
            actions: {
                logout: h
            }
        } = qs(), {
            state: {
                merchant: c
            }
        } = Ye(), [u, C] = d.useState(!1), y = d.useMemo(() => ({
            name: Bs("name", !0),
            email: Bs("email", !0)
        }), []), g = {
            name: (b = s.fullName) != null ? b : "",
            email: (f = s.email) != null ? f : ""
        }, {
            handleSubmit: i,
            inputProps: j,
            state: {
                values: p,
                errors: E,
                validations: _
            }
        } = as({
            initialState: g,
            validationSchema: y
        }), A = () => ee(void 0, null, function*() {
            var F, $, Q;
            const T = {
                name: p.name,
                email: p.email
            };
            try {
                C(!0);
                const S = (yield Kt(`/sso/user-details?request-id=${l}`, T, "AUTH_PRIVATE", 0, !0)).data.data,
                    K = {
                        fullName: (F = S.name) != null ? F : "",
                        name: ($ = S.first_name) != null ? $ : "",
                        email: S.email,
                        phone: S.phone_number
                    };
                n(K), jt(lt.FLO_USER_DETAILS, K), m({
                    eventName: q.FLO_SSO_FORM_SUBMITTED,
                    eventType: "load",
                    metaData: {
                        userData: {
                            name: (Q = S.name) != null ? Q : "",
                            email: S.email,
                            phone: S.phone_number
                        }
                    }
                }), t()
            } catch (Y) {
                console.error(Y)
            } finally {
                C(!1)
            }
        }), N = () => ee(void 0, null, function*() {
            var T;
            try {
                h();
                const $ = yield wt("/v1/sso/login", {
                    scopes: [{
                        scope: "ADDRESS",
                        action: "READ"
                    }],
                    metadata: {}
                }, "CHECKOUT_PUBLIC", {
                    "X-SHOPFLO-SHOP-DOMAIN": (T = c == null ? void 0 : c.domain) != null ? T : ""
                });
                if (!$.login_url) throw new Error("failed regenerating SSO link");
                if (!x) {
                    let Y = new URL($.login_url);
                    Y.searchParams.delete("auth-request-id"), $.login_url = Y.toString()
                }
                jt(lt.LOGIN_RE_INIT, $);
                const Q = new URL($.login_url);
                o(Q.searchParams)
            } catch (F) {
                console.error(F)
            }
        });
        return d.useEffect(() => {
            var T;
            m({
                eventName: q.FLO_SSO_FORM_LOADED,
                eventType: "load",
                metaData: {
                    userData: {
                        name: (T = s.fullName) != null ? T : "",
                        email: s.email,
                        phone: s.phone
                    }
                }
            })
        }, []), e.jsxs("div", {
            className: "flex w-full flex-col items-center rounded-xl border border-gray-light p-3",
            "data-sentry-component": "UserDetails",
            "data-sentry-source-file": "UserDetails.tsx",
            children: [e.jsxs("div", {
                className: "flex w-full items-center justify-center space-x-1",
                children: [e.jsx("h1", {
                    className: "text-sm font-medium text-coal-light",
                    children: r("sso_personal_data_collect")
                }), e.jsxs("button", {
                    className: "flex items-center space-x-1 text-sm text-coal-dark",
                    onClick: N,
                    children: [e.jsx("span", {
                        className: "font-medium",
                        children: ms(s == null ? void 0 : s.phone)
                    }), e.jsx(fs, {
                        className: "h-4 w-4 ",
                        "data-sentry-element": "Edit",
                        "data-sentry-source-file": "UserDetails.tsx"
                    })]
                })]
            }), e.jsx("div", {
                className: "w-full",
                children: e.jsxs("form", {
                    className: "flex flex-col space-y-4 pt-4",
                    id: "address-form",
                    onSubmit: i(A),
                    children: [e.jsx(Qe, R(P({
                        type: "text",
                        label: r("full_name"),
                        filled: !!((w = p.name) != null && w.length),
                        autoComplete: "name"
                    }, j(be.name)), {
                        error: E.name,
                        required: !!((L = y == null ? void 0 : y.name) != null && L.required),
                        showSuccessIcon: _ == null ? void 0 : _.name,
                        disabletheme: !0,
                        labelClassName: "font-semibold !text-coal-dark !text-xs after:content-['*'] after:text-carbon-dark after:p-[2px] mb-2 capitalize",
                        "data-sentry-element": "InputField",
                        "data-sentry-source-file": "UserDetails.tsx"
                    })), e.jsx(Qe, R(P({
                        type: "text",
                        label: r("email")
                    }, j(be.email)), {
                        filled: !!((k = p.email) != null && k.length),
                        autoComplete: "email",
                        error: E.email,
                        required: !!((v = y == null ? void 0 : y.email) != null && v.required),
                        showSuccessIcon: _ == null ? void 0 : _.email,
                        disabletheme: !0,
                        labelClassName: "font-semibold !text-coal-dark !text-xs after:content-['*'] after:text-carbon-dark after:p-[2px] mb-2 capitalize",
                        "data-sentry-element": "InputField",
                        "data-sentry-source-file": "UserDetails.tsx"
                    })), e.jsx("div", {
                        className: "mt-4",
                        children: e.jsx(ut, {
                            type: "submit",
                            id: "user_details_submit",
                            buttonText: r("continue"),
                            height: "h-14",
                            className: "!bg-black !text-white",
                            isCheckout: !1,
                            isLoading: u,
                            "data-sentry-element": "PrimaryButton",
                            "data-sentry-source-file": "UserDetails.tsx"
                        })
                    })]
                })
            })]
        })
    },
    Yl = ({
        userPhone: s,
        setScreen: t
    }) => {
        const {
            t: n
        } = te(), [r, a] = Mt(), {
            sendAnalyticsEvent: o
        } = qe(), {
            actions: {
                logout: x
            }
        } = qs(), {
            state: {
                merchant: l
            }
        } = Ye(), m = r.get("auth-request-id"), h = () => ee(void 0, null, function*() {
            var c;
            try {
                x();
                const C = yield wt("/v1/sso/login", {
                    scopes: [{
                        scope: "ADDRESS",
                        action: "READ"
                    }],
                    metadata: {}
                }, "CHECKOUT_PUBLIC", {
                    "X-SHOPFLO-SHOP-DOMAIN": (c = l == null ? void 0 : l.domain) != null ? c : ""
                });
                if (!C.login_url) throw new Error("failed regenerating SSO link");
                if (!m) {
                    let g = new URL(C.login_url);
                    g.searchParams.delete("auth-request-id"), C.login_url = g.toString()
                }
                jt(lt.LOGIN_RE_INIT, C);
                const y = new URL(C.login_url);
                a(y.searchParams)
            } catch (u) {
                console.error(u)
            }
        });
        return d.useEffect(() => {
            o({
                eventName: q.FLO_SSO_FORM_LOADED,
                eventType: "load"
            })
        }, []), e.jsxs("div", {
            className: "flex w-full flex-col items-center space-y-4 rounded-xl border border-gray-light px-3 py-4",
            "data-sentry-component": "NotYou",
            "data-sentry-source-file": "NotYou.tsx",
            children: [e.jsxs("div", {
                className: "flex w-full flex-col items-center space-y-3",
                children: [e.jsx("h3", {
                    className: "text-center text-base font-medium text-coal-dark",
                    children: n("sso_not_user_header", {
                        phone: ms(s)
                    })
                }), e.jsx("p", {
                    className: "text-xs text-coal-light",
                    children: n("sso_not_user_desc")
                })]
            }), e.jsxs("div", {
                className: "flex w-full flex-col items-center space-y-3",
                children: [e.jsx(ut, {
                    type: "submit",
                    id: "user-consent-sso",
                    buttonText: n("logout"),
                    height: "h-14",
                    className: "!bg-black !text-white",
                    isCheckout: !1,
                    onClick: h,
                    "data-sentry-element": "PrimaryButton",
                    "data-sentry-source-file": "NotYou.tsx"
                }), e.jsx("div", {
                    className: "py-4 leading-4",
                    children: e.jsx("button", {
                        className: "h-4 p-0 text-sm font-semibold text-carbon-dark",
                        onClick: () => t("USER_DETAILS"),
                        children: n("sso_edit_account")
                    })
                })]
            })]
        })
    },
    Hl = s => {
        let [t, n] = s.split("@");
        return t.length < 3 ? s : `${t.slice(0,3)+"···"}@${n}`
    },
    Vl = s => {
        const t = s.split(" ");
        return t.length === 3 ? `${t[0]} ${t[1]} ·····` : s
    },
    ql = ({
        userDetails: s,
        handleEdit: t
    }) => e.jsxs("div", {
        className: "border-[##E0E0E080] relative w-full space-y-2 rounded-lg border bg-[#F7F7F7] p-2 text-sm text-coal-dark",
        "data-sentry-component": "UserInfoBtn",
        "data-sentry-source-file": "UserInfoBtn.tsx",
        children: [e.jsxs("div", {
            className: "flex items-center space-x-3",
            children: [e.jsx(In, {
                className: "h-3.5 w-3.5 text-gray-dark",
                "data-sentry-element": "Mail",
                "data-sentry-source-file": "UserInfoBtn.tsx"
            }), s.email !== "" && e.jsx("span", {
                children: Hl(s.email)
            })]
        }), e.jsxs("div", {
            className: "flex items-center space-x-3",
            children: [e.jsx(On, {
                className: "h-3.5 w-3.5 text-gray-dark",
                "data-sentry-element": "Phone",
                "data-sentry-source-file": "UserInfoBtn.tsx"
            }), s.phone !== "" && e.jsx("span", {
                children: Vl(ms(s.phone))
            })]
        }), e.jsx("button", {
            className: "absolute top-2 right-2 !m-0",
            onClick: t,
            children: e.jsx(fs, {
                className: "h-4 w-4 ",
                "data-sentry-element": "Edit",
                "data-sentry-source-file": "UserInfoBtn.tsx"
            })
        })]
    });
let Xs = 1;
const Ti = ({
        onSuccessRedirectUrl: s,
        openSecuredDialog: t,
        originUrl: n
    }) => {
        const [r] = Mt(), {
            sendAnalyticsEvent: a
        } = qe(), {
            state: {
                merchant: o
            }
        } = Ye(), {
            t: x
        } = te(), l = r.get("request-id"), m = r.get("auth-request-id"), [h, c] = d.useState(), [u, C] = d.useState({
            fullName: "",
            name: "",
            email: "",
            phone: ""
        }), [y, g] = d.useState(!1), [i, j] = d.useState("loading"), p = i === "loading", E = i === "polling", _ = i === "settingConsent", A = i === "loggingIn";
        d.useEffect(() => {
            N()
        }, []);
        const N = () => ee(void 0, null, function*() {
                var k, v;
                try {
                    j("loading");
                    const T = yield ot(`/sso/user-details?request-id=${l}`, "AUTH_PRIVATE"), F = {
                        fullName: (k = T.name) != null ? k : "",
                        name: (v = T.first_name) != null ? v : "",
                        email: T.email,
                        phone: T.phone_number
                    };
                    C(F);
                    const {
                        consent: $
                    } = T;
                    if ($) {
                        const {
                            consents_required: Q
                        } = $;
                        Q != null && Q.length && g(!0)
                    }
                    if (!F.name || !F.email) {
                        c("USER_DETAILS");
                        return
                    }
                    jt(lt.FLO_USER_DETAILS, F), c("CONSENT")
                } catch (T) {
                    console.error(T)
                } finally {
                    j("idle")
                }
            }),
            b = () => {
                Xs = 1
            },
            f = d.useCallback(() => ee(void 0, null, function*() {
                if (!m) {
                    b(), j("idle");
                    return
                }
                let k;
                try {
                    if (k = yield ot(`/sso/v1/sso/user-details?auth-request-id=${m}`), k.status === "VERIFIED") {
                        b();
                        const v = {
                            email: k.email,
                            password: k.temp_password
                        };
                        if (s) {
                            gt(s);
                            return
                        }
                        if (a({
                                eventName: q.FLO_SSO_LOGIN_COMPLETED,
                                eventType: "load",
                                metaData: {
                                    userData: {
                                        email: u.email,
                                        phone: u.phone
                                    }
                                }
                            }), !Vs()) {
                            gt(`${n!=null?n:o==null?void 0:o.brandUrl}/?ctx=flo_sso&email=${encodeURIComponent(v.email)}&pw=${encodeURIComponent(v.password)}`);
                            return
                        }
                        j("loggingIn"), jt(lt.SSO_LOGIN_CREDENTIALS, v);
                        return
                    }
                    if (k.status === "FAILED" || k.status === "USER_REJECTED") {
                        b(), j("idle");
                        return
                    }
                    if (Xs >= 30) {
                        b(), j("idle");
                        return
                    }
                    Xs++
                } catch (v) {
                    console.error(v), b(), j("idle")
                }
            }), [m, u]);
        d.useEffect(() => {
            function k(v) {
                var T;
                ((T = v == null ? void 0 : v.data) == null ? void 0 : T.type) === lt.SSO_LOGIN_SUCCESS && j("loggingIn")
            }
            return window.addEventListener("message", k), () => {
                window.removeEventListener("message", k)
            }
        }, []), d.useEffect(() => {
            h === "CONSENT" && a({
                eventName: q.FLO_SSO_AUTH_LOADED,
                eventType: "load",
                metaData: {
                    userData: {
                        email: u.email,
                        phone: u.phone
                    }
                }
            })
        }, [h, u]);
        const w = () => ee(void 0, null, function*() {
            var k, v, T, F;
            try {
                if (j("settingConsent"), h === "CONSENT") {
                    yield Kt(`/sso/user-consent?request-id=${l}`, {
                        consent: {
                            ADDRESS: "READ"
                        }
                    }, "AUTH_PRIVATE");
                    const $ = yield Kt("/sso/status", {
                        request_id: l,
                        status: "VERIFIED"
                    }, "AUTH_PRIVATE", 0, !0);
                    if ((v = (k = $ == null ? void 0 : $.data) == null ? void 0 : k.data) != null && v.redirect_url && !m) {
                        gt((F = (T = $ == null ? void 0 : $.data) == null ? void 0 : T.data) == null ? void 0 : F.redirect_url);
                        return
                    }
                    j("polling")
                }
            } catch ($) {
                console.error($)
            }
        });
        if (vn(f, E && h === "CONSENT" ? 1500 : null), p) return e.jsx(zl, {});
        if (h === "USER_DETAILS") return e.jsxs(e.Fragment, {
            children: [e.jsx($l, {
                userDetails: u,
                setUserDetails: C,
                setScreen: () => {
                    c("CONSENT")
                }
            }), e.jsx("div", {
                className: "mt-4 flex flex-col items-center text-center",
                children: e.jsx(Ws, {
                    openSecuredDialog: t
                })
            })]
        });
        if (h === "NOT_YOU") return e.jsxs(e.Fragment, {
            children: [e.jsx(Yl, {
                userPhone: u.phone,
                setScreen: c
            }), e.jsx("div", {
                className: "mt-9 flex flex-col items-center text-center",
                children: e.jsx(Ws, {
                    openSecuredDialog: t
                })
            })]
        });
        const L = p || A || _ || E;
        return e.jsxs(e.Fragment, {
            children: [e.jsx("div", {
                className: Fe("flex w-full flex-col items-center rounded-xl border px-3 py-4 "),
                children: e.jsxs("div", {
                    className: "flex w-full flex-col items-center space-y-4",
                    children: [e.jsxs("div", {
                        className: "space-y-2",
                        children: [e.jsxs("div", {
                            className: "flex items-center justify-center space-x-2 ",
                            children: [e.jsx("h2", {
                                className: "text-center text-xl font-medium text-carbon-dark",
                                children: x("sso_user_greeting", {
                                    user: u == null ? void 0 : u.name
                                })
                            }), e.jsx("img", {
                                src: fo,
                                alt: "waving hand",
                                className: "h-7"
                            })]
                        }), e.jsx("h3", {
                            className: "text-center text-base font-medium text-coal-dark",
                            children: x("sign_in_to_merchant", {
                                merchant: o == null ? void 0 : o.displayName
                            })
                        })]
                    }), e.jsxs("div", {
                        className: "relative w-full overflow-hidden rounded-lg",
                        children: [L && e.jsx("span", {
                            className: "skeleton-pulse-loader"
                        }), e.jsx(ql, {
                            userDetails: u,
                            handleEdit: () => {
                                L || (c("USER_DETAILS"), j("idle"))
                            },
                            "data-sentry-element": "UserInfoBtn",
                            "data-sentry-source-file": "Consent.tsx"
                        })]
                    }), e.jsxs("div", {
                        className: "flex w-full flex-col justify-center space-y-3",
                        children: [e.jsx(ut, {
                            type: "submit",
                            id: "user-consent-sso",
                            buttonText: x("continue"),
                            height: "h-14",
                            className: "!bg-black !text-white",
                            isCheckout: !1,
                            onClick: () => {
                                w()
                            },
                            isLoading: _ || E,
                            isDisabled: L,
                            "data-sentry-element": "PrimaryButton",
                            "data-sentry-source-file": "Consent.tsx"
                        }), e.jsx("button", {
                            className: "text-sm font-medium text-coal-dark underline",
                            onClick: () => c("NOT_YOU"),
                            disabled: L,
                            children: "Not you?"
                        })]
                    })]
                })
            }), e.jsx("div", {
                className: "!mt-5 flex flex-col items-center",
                children: e.jsx(Ws, {
                    openSecuredDialog: t,
                    "data-sentry-element": "SsoFooter",
                    "data-sentry-source-file": "Consent.tsx"
                })
            })]
        })
    },
    zl = () => e.jsx("div", {
        className: "h-screen w-full touch-none bg-white",
        "data-sentry-component": "ConsentSkeleton",
        "data-sentry-source-file": "Consent.tsx",
        children: e.jsxs("main", {
            className: "flex flex-col items-center space-y-6",
            children: [e.jsx("div", {
                className: "skeleton-loader h-48 w-full rounded-xl"
            }), e.jsx("div", {
                className: "skeleton-loader h-12 w-full rounded-xl"
            }), e.jsx("div", {
                className: "skeleton-loader !mt-10 h-7 w-1/4 rounded-xl"
            })]
        })
    }),
    Ws = ({
        openSecuredDialog: s
    }) => e.jsxs(e.Fragment, {
        children: [e.jsx("div", {
            className: "flex",
            children: e.jsx(Un, {
                showSecuredLogo: !1,
                "data-sentry-element": "TermsConditions",
                "data-sentry-source-file": "Consent.tsx"
            })
        }), e.jsx("button", {
            className: "!mt-4 rounded-md border border-[#a6a6a6] p-1 shadow-[0_1px_2px_0px_rgba(0,0,0,0.15)]",
            onClick: () => s(!0),
            children: e.jsx("img", {
                src: ga,
                alt: "shopflo-logo",
                className: "h-3.5"
            })
        })]
    });
let Zs = 1,
    un = !1;
const Kl = ({
        setCurrentWindow: s
    }) => {
        var z, I, He, ce, pe, ye, G, W, re, D, O, de;
        const {
            t
        } = te(), {
            state: {
                thirdPartyAuth: n
            },
            actions: {
                login: r
            }
        } = qs(), {
            state: {
                user: a
            },
            actions: {
                setUserLoginType: o,
                updateUser: x
            }
        } = mt(), {
            state: {
                checkoutView: l,
                originUrl: m
            }
        } = ge(), {
            state: {
                merchant: h
            }
        } = Ye(), {
            state: {
                popup: c
            }
        } = fa(), {
            sendAnalyticsEvent: u
        } = qe(), {
            generateReCaptchaToken: C
        } = _n(), [y] = Mt(), g = !!y.get("fromCart"), i = !!y.get("shouldLoginToShopify"), [j, p] = d.useState(!1), [E, _] = d.useState(!1), [A, N] = d.useState(-1), [b, f] = d.useState(!1), [w, L] = d.useState(!1), [k, v] = d.useState(""), [T, F] = d.useState(!1), [$, Q] = d.useState(""), [Y, S] = d.useState(!1), {
            currentText: K
        } = Ar([t("logging you in"), t("fetching best offers"), t("almost there")]), {
            handleSubmit: V,
            inputProps: oe,
            setValueOf: xe,
            setErrors: X,
            handleFieldChange: ne,
            state: {
                values: Z,
                errors: me
            }
        } = as({
            initialState: j ? {
                otp: ""
            } : {
                phoneNumber: ""
            },
            validationSchema: j ? {
                otp: {
                    required: t("enter_your_otp"),
                    numeric: t("otp_incorrect"),
                    length: {
                        limit: 4,
                        message: t("otp_incorrect")
                    },
                    formatters: ["NUMERIC"]
                }
            } : {
                phoneNumber: {
                    required: t("invalid_phone_number"),
                    phone: t("invalid_phone_number"),
                    formatters: ["PHONE"]
                }
            }
        });
        d.useEffect(() => {
            A === 0 && f(!0);
            const H = A > 0 && setInterval(() => N(A - 1), 1e3);
            return () => clearInterval(H)
        }, [A]), d.useEffect(() => {
            a != null && a.phone && xe("phoneNumber", a == null ? void 0 : a.phone)
        }, [a]);
        const B = !!(c != null && c.postLogin),
            M = H => ee(void 0, null, function*() {
                var ze;
                if (H && (H == null ? void 0 : H.length) !== 4) return;
                X({
                    otp: {
                        status: !1
                    }
                }), _(!0);
                let Ce = new Date().getTime(),
                    Ae;
                try {
                    S(!0), u({
                        eventName: q.FLO_SSO_OTP_ENTERED,
                        eventType: "load"
                    });
                    const Le = yield Or(k, H, void 0, {
                        bureau_event_id: (ze = y.get("bureau_event_id")) != null ? ze : ""
                    });
                    u({
                        eventName: q.FLO_SSO_OTP_VERIFIED,
                        eventType: "load"
                    }), Ae = new Date().getTime();
                    const J = Le == null ? void 0 : Le.access_token,
                        Se = Le == null ? void 0 : Le.access_token_expires_at,
                        Ne = Le == null ? void 0 : Le.refresh_token,
                        je = Le == null ? void 0 : Le.refresh_token_expires_at;
                    if (_(!1), r(J, Ne, Se, je, !0), x(), u({
                            eventName: q.FLO_SSO_LOGIN_COMPLETED,
                            eventType: "load"
                        }), jt(lt.FLO_SSO_TOKEN_RECEIVED, {
                            accessToken: J,
                            refreshToken: Ne,
                            accessTokenExpiry: Se,
                            refreshTokenExpiry: je,
                            phoneNumber: Z == null ? void 0 : Z.phoneNumber,
                            shouldLoginToShopify: i
                        }), B) s(Io.POST_LOGIN);
                    else {
                        const Me = Ae - Ce;
                        setTimeout(() => {
                            jt(lt.FLO_MARKETING_POPUP_CLOSED, {
                                shouldLoginToShopify: i
                            }), S(!1)
                        }, Math.min(2e3, 5e3 - Me))
                    }
                } catch (Le) {
                    _(!1), S(!1), X({
                        otp: {
                            status: !0,
                            message: t("otp_incorrect")
                        }
                    })
                }
            }),
            se = Ce => ee(void 0, [Ce], function*({
                phoneNumber: H
            }) {
                var Ae, ze, Le, J, Se, Ne;
                if (!(Bo(H) && Ro(H))) {
                    De(t("invalid_phone"));
                    return
                }
                try {
                    _(!0), X({
                        phoneNumber: {
                            status: !1
                        },
                        otp: {
                            status: !1,
                            showAlert: !1
                        }
                    }), xe("otp", "");
                    let je = {
                            identifier: gn(H),
                            merchantId: (Ae = h == null ? void 0 : h.merchantId) != null ? Ae : "",
                            domain: Vs() ? m : (ze = ta) == null ? void 0 : ze.CHECKOUT_HOST
                        },
                        Me, xt = {
                            context: "AUTH"
                        };
                    Me = y.get("request-id"), Me && (xt = {
                        context: "SSO",
                        requestId: Me
                    });
                    const at = yield C("login"), nt = yield yn(je, xt, at);
                    if (N(30), f(!1), _(!1), !nt) return;
                    const yt = (Le = nt.otp_required) != null ? Le : nt.existing_customer;
                    if (v(nt.context_id), u({
                            eventName: q.FLO_SSO_PHONE_ADDED,
                            eventType: "load",
                            metaData: {
                                userType: yt ? "repeat" : "guest"
                            }
                        }), !yt) {
                        const zt = (J = nt.token) == null ? void 0 : J.access_token,
                            Tt = (Se = nt.token) == null ? void 0 : Se.access_token_expires_at;
                        r(zt, "", Tt, void 0, g), x(), o(q.FLO_GUEST_LOGIN), u({
                            eventName: q.FLO_GUEST_LOGIN,
                            eventFor: [Ke.SF_ANALYTICS],
                            eventType: "flo_action",
                            metaData: {
                                userData: {
                                    type: q.FLO_GUEST_LOGIN
                                },
                                authSource: "SHOPFLO"
                            }
                        });
                        return
                    }
                    y.set("phone", H), p(!0), u({
                        eventName: q.FLO_SSO_OTP_LOADED,
                        eventType: "load"
                    })
                } catch (je) {
                    _(!1), ((Ne = je == null ? void 0 : je.response) == null ? void 0 : Ne.status) === 400 ? X({
                        phoneNumber: {
                            status: !0,
                            message: t("invalid_phone_number")
                        }
                    }) : De(t("otp_fetch_failed"))
                }
            }),
            ue = H => ee(void 0, null, function*() {
                _(!0), u({
                    eventName: q.FLO_SSO_OTP_RESEND,
                    eventType: "click"
                }), xe("otp", "");
                try {
                    yield Ir(k, H), N(30), f(!1)
                } catch (Ce) {
                    console.error(Ce)
                }
                X({
                    otp: {
                        status: !1
                    }
                }), _(!1)
            }),
            Te = () => {
                var Ce, Ae;
                return (Ae = (Ce = c == null ? void 0 : c.primaryCTA) == null ? void 0 : Ce.text) != null ? Ae : t("verify_otp")
            },
            le = d.useCallback(() => ee(void 0, null, function*() {
                var Ce, Ae, ze, Le, J, Se, Ne, je, Me, xt;
                if (!$) {
                    ie();
                    return
                }
                let H;
                try {
                    if (H = yield ot(`/auth-callback/${$}/status`, "AUTH"), H.status === "VERIFIED") {
                        ie();
                        const at = (Ae = (Ce = H == null ? void 0 : H.metadata) == null ? void 0 : Ce.token_response) == null ? void 0 : Ae.access_token,
                            nt = (Le = (ze = H == null ? void 0 : H.metadata) == null ? void 0 : ze.token_response) == null ? void 0 : Le.access_token_expires_at,
                            yt = (Se = (J = H == null ? void 0 : H.metadata) == null ? void 0 : J.token_response) == null ? void 0 : Se.refresh_token,
                            zt = (je = (Ne = H == null ? void 0 : H.metadata) == null ? void 0 : Ne.token_response) == null ? void 0 : je.refresh_token_expires_at,
                            Tt = (xt = (Me = H == null ? void 0 : H.metadata) == null ? void 0 : Me.token_response) == null ? void 0 : xt.existing_user;
                        r(at, yt, nt, zt, g), x(), o(Tt ? q.FLO_RETURN_USER_LOGIN : q.FLO_GUEST_LOGIN), u({
                            eventName: Tt ? q.FLO_RETURN_USER_LOGIN : q.FLO_GUEST_LOGIN,
                            eventType: "flo_action",
                            metaData: {
                                userData: {
                                    type: Tt ? q.FLO_RETURN_USER_LOGIN : q.FLO_GUEST_LOGIN
                                },
                                authSource: "TRUECALLER"
                            }
                        });
                        return
                    }
                    if (H.status === "FAILED" || H.status === "USER_REJECTED") {
                        ie();
                        return
                    }
                    if (Zs >= 30) {
                        ie();
                        return
                    }
                    Zs++
                } catch (at) {
                    console.error(at), ie()
                } finally {
                    u({
                        eventName: q.FLO_TRUECALLER_ACTION,
                        eventType: "flo_action",
                        metaData: {
                            action: {
                                type: H == null ? void 0 : H.status
                            }
                        }
                    })
                }
            }), [$]),
            he = () => {
                var Ae;
                if (L(!0), (Ae = Z == null ? void 0 : Z.phoneNumber) != null && Ae.length || !(n != null && n.length) || un) return;
                const H = n[0];
                if (!H) return;
                switch (H.provider) {
                    case "TRUECALLER":
                        {
                            Q(H.requestId),
                            un = !0,
                            Pr(H.redirectUrl),
                            F(!0);
                            break
                        }
                }
            },
            ie = () => {
                Zs = 1, F(!1)
            },
            fe = d.useMemo(() => j ? e.jsx("h2", {
                className: "text-center text-base font-medium text-coal-dark",
                children: t("sso_login_header", {
                    merchant_name: h == null ? void 0 : h.displayName
                })
            }) : null, [j, h == null ? void 0 : h.displayName, t]),
            Oe = d.useMemo(() => e.jsxs("div", {
                className: "flex w-full flex-row items-center justify-center space-x-2",
                children: [e.jsxs("h1", {
                    className: "space-x-2 text-sm font-normal text-coal-light",
                    children: [e.jsx("span", {
                        children: t("verify_otp_header")
                    }), e.jsx("span", {
                        className: "font-medium text-coal-dark",
                        children: ms(Z.phoneNumber)
                    })]
                }), e.jsx("button", {
                    onClick: () => p(!1),
                    children: e.jsx(fs, {
                        className: "h-4 w-4 text-coal-dark"
                    })
                })]
            }), [j, Z.phoneNumber, t]);
        return d.useEffect(() => {
            Z.otp && Z.otp.length === 4 && M(Z.otp)
        }, [Z.otp]), vn(le, T ? 1500 : null), d.useEffect(() => {
            j && u({
                eventName: q.FLO_SSO_OTP_PAGE_LOADED,
                eventType: "load"
            })
        }, [j]), e.jsxs(e.Fragment, {
            children: [fe, j ? e.jsx(e.Fragment, {
                children: e.jsx("div", {
                    className: Fe("flex flex-col gap-5 rounded-xl p-0"),
                    children: Y ? e.jsxs("div", {
                        className: "flex h-full w-full items-center justify-center flex-col space-y-4",
                        children: [e.jsx(Wr, {
                            className: "spin-fast"
                        }), e.jsx("span", {
                            className: "text-xs",
                            children: K
                        })]
                    }) : e.jsxs(e.Fragment, {
                        children: [Oe, e.jsx(Mn, {
                            isLoading: E,
                            otpLength: 4,
                            otpValue: (z = Z.otp) != null ? z : "",
                            handleSubmit: V(M),
                            handleChange: H => {
                                var Ce;
                                xe("otp", H), (Ce = me == null ? void 0 : me.otp) != null && Ce.status && X({
                                    otp: {
                                        status: !1
                                    }
                                })
                            },
                            validateOtp: M,
                            handleResendOtp: ue,
                            error: ((I = me == null ? void 0 : me.otp) == null ? void 0 : I.status) || !1,
                            errorMessage: t("otp_incorrect_login_sso"),
                            autoFocus: !0,
                            otpCounter: A,
                            otpCounterExpired: b,
                            emailValidation: !1,
                            showLoginConsent: !1,
                            context: "sso"
                        })]
                    })
                })
            }) : e.jsx(e.Fragment, {
                children: e.jsxs("form", {
                    onSubmit: V(se),
                    className: "flex w-full flex-col items-center",
                    children: [e.jsx(ia, R(P({
                        defaultCountry: "IN"
                    }, oe(be.phoneNumber, {
                        onChange: H => {
                            ne(be.phoneNumber, H)
                        },
                        onFocus: () => he(),
                        onBlur: () => {
                            L(!1)
                        }
                    })), {
                        value: (ce = (He = Z == null ? void 0 : Z.phoneNumber) != null ? He : a == null ? void 0 : a.phone) != null ? ce : "",
                        countries: (pe = h == null ? void 0 : h.addressConfig) == null ? void 0 : pe.enabledCountries,
                        id: "flo__auth__phoneInput",
                        smartCaret: !1,
                        className: Fe("placeholder-sm peer w-full appearance-none  border border-gray-light px-3 text-base placeholder-transparent bg-white rounded-xl h-12 !font-medium", (ye = me.phoneNumber) != null && ye.status ? "border-ouch" : "", (G = Z == null ? void 0 : Z.phoneNumber) != null && G.length && !((W = me == null ? void 0 : me.phoneNumber) != null && W.status) ? "border-[#D5E7DB]" : "", w ? "border-primary-dark border px-[12px] shadow-[0px_0px_4px_0px_#00000040] outline-none ring-[1px] ring-primary-dark" : ""),
                        placeholder: t("phone_number"),
                        international: !0,
                        countryCallingCodeEditable: !1,
                        autoFocus: !0,
                        limitMaxLength: !0,
                        error: (re = me.phoneNumber) == null ? void 0 : re.message
                    })), e.jsx("p", {
                        className: `mt-1 w-full px-3 text-center font-normal ${(D=me.phoneNumber)!=null&&D.status?"self-start text-sm text-ouch":"text-xs text-coal-light"}`,
                        children: ((O = me.phoneNumber) == null ? void 0 : O.status) && ((de = me.phoneNumber) == null ? void 0 : de.message)
                    }), e.jsx("div", {
                        className: "mt-3 w-full",
                        children: e.jsx(ut, {
                            type: "submit",
                            buttonText: Te(),
                            height: "h-10",
                            isLoading: E,
                            isDisabled: !1,
                            isCheckout: !1,
                            showTerms: !1,
                            borderRadius: "rounded-xl",
                            id: "flo__auth__loginButton"
                        })
                    }), e.jsx("div", {
                        children: e.jsx(ya, {})
                    })]
                })
            })]
        })
    },
    Ai = ({
        openSecuredDialog: s,
        setCurrentWindow: t
    }) => e.jsxs("div", {
        className: "flex w-full flex-col items-center space-y-4",
        "data-sentry-component": "Login",
        "data-sentry-source-file": "Login.tsx",
        children: [e.jsx(Kl, {
            setCurrentWindow: t,
            "data-sentry-element": "AuthLogin",
            "data-sentry-source-file": "Login.tsx"
        }), e.jsx("div", {
            className: "mt-[60px] flex"
        }), e.jsx("button", {
            className: "!mt-2 rounded-md border border-[#a6a6a6] p-1 shadow-[0_1px_2px_0px_rgba(0,0,0,0.15)]",
            onClick: () => s(!0),
            children: e.jsx("img", {
                src: ga,
                alt: "shopflo-logo",
                className: "h-3.5"
            })
        })]
    }),
    Oi = () => {
        var p, E, _, A;
        const {
            t: s
        } = te(), [t] = Mt(), n = t.get("name"), r = t.get("email"), {
            sendAnalyticsEvent: a
        } = qe(), o = {
            name: n != null ? n : "",
            email: r != null ? r : ""
        }, [x, l] = d.useState(!1), [m, h] = d.useState(o), c = d.useMemo(() => ({
            name: Bs("name", !0),
            email: Bs("email", !0)
        }), []), {
            handleSubmit: u,
            inputProps: C,
            state: {
                values: y,
                errors: g,
                validations: i
            }
        } = as({
            initialState: o,
            validationSchema: c
        }), j = () => ee(void 0, null, function*() {
            const N = {
                name: y.name,
                email: y.email
            };
            l(!0), jt(lt.FLO_NAME_EMAIL_FORM_SUBMITTED, N)
        });
        return d.useEffect(() => {
            a({
                eventName: q.FLO_SSO_FORM_LOADED,
                eventType: "load",
                metaData: {
                    userData: {
                        name: "",
                        email: "",
                        phone: ""
                    }
                }
            });
            const N = b => {
                var f, w, L;
                if (((f = b == null ? void 0 : b.data) == null ? void 0 : f.type) === lt.FLO_NAME_EMAIL_FORM_SUBMITTED_SUCCESS) {
                    h((w = b == null ? void 0 : b.data) == null ? void 0 : w.payload), l(!1);
                    return
                }
                if (((L = b == null ? void 0 : b.data) == null ? void 0 : L.type) === lt.FLO_NAME_EMAIL_FORM_SUBMITTED_FAILED) {
                    l(!1);
                    return
                }
            };
            window.addEventListener("message", N)
        }, []), e.jsxs("div", {
            className: "flex h-full w-full flex-col items-center justify-start",
            "data-sentry-component": "UserDetails",
            "data-sentry-source-file": "UserDetails.tsx",
            children: [e.jsx("div", {
                className: "flex w-full items-center justify-center space-x-1",
                children: e.jsx("h1", {
                    className: "text-sm font-medium",
                    children: s("sso_personal_data_email_consent")
                })
            }), e.jsx("div", {
                className: "w-full",
                children: e.jsxs("form", {
                    className: "flex flex-col space-y-2 pt-4",
                    id: "address-form",
                    onSubmit: u(j),
                    children: [e.jsx(Qe, R(P({
                        type: "text",
                        label: s("full_name"),
                        filled: !!((p = y.name) != null && p.length),
                        autoComplete: "name"
                    }, C(be.name)), {
                        error: g.name,
                        required: !!((E = c == null ? void 0 : c.name) != null && E.required),
                        showSuccessIcon: i == null ? void 0 : i.name,
                        disabletheme: !0,
                        customClass: "!h-12",
                        labelClassName: "font-semibold !text-coal-dark !text-xs after:content-['*'] after:text-carbon-dark after:p-[2px] mb-2 capitalize",
                        "data-sentry-element": "InputField",
                        "data-sentry-source-file": "UserDetails.tsx"
                    })), e.jsx(Qe, R(P({
                        type: "text",
                        label: s("email")
                    }, C(be.email)), {
                        filled: !!((_ = y.email) != null && _.length),
                        autoComplete: "email",
                        error: g.email,
                        required: !!((A = c == null ? void 0 : c.email) != null && A.required),
                        showSuccessIcon: i == null ? void 0 : i.email,
                        disabletheme: !0,
                        customClass: "!h-12",
                        labelClassName: "font-semibold !text-coal-dark !text-xs after:content-['*'] after:text-carbon-dark after:p-[2px] mb-2 capitalize",
                        "data-sentry-element": "InputField",
                        "data-sentry-source-file": "UserDetails.tsx"
                    })), e.jsx("div", {
                        className: "!mt-4",
                        children: e.jsx(ut, {
                            type: "submit",
                            id: "user_details_submit",
                            buttonText: s("continue"),
                            height: "h-10",
                            isCheckout: !1,
                            borderRadius: "rounded-xl",
                            isLoading: x,
                            "data-sentry-element": "PrimaryButton",
                            "data-sentry-source-file": "UserDetails.tsx"
                        })
                    })]
                })
            }), e.jsx("div", {
                children: e.jsx(ya, {
                    "data-sentry-element": "MarketingConsent",
                    "data-sentry-source-file": "UserDetails.tsx"
                })
            })]
        })
    },
    Ii = () => {
        const [s] = Mt(), {
            state: {
                popup: t
            }
        } = fa(), n = s.get("request-id"), {
            data: r,
            error: a,
            isValidating: o
        } = us("/sso/v1/sso/discounts", m => wt(m, {
            request_id: n,
            extra: {
                utm: {
                    source: ""
                }
            }
        }), xs), x = d.useMemo(() => {
            var m, h, c, u, C, y;
            if (r && r.length > 0) {
                const g = r[r.length - 1],
                    {
                        coupon_details: i
                    } = g,
                    j = {
                        code: "",
                        title: "",
                        description: "",
                        tagBackgroundColor: t == null ? void 0 : t.backgroundColor,
                        tagTextColor: t == null ? void 0 : t.primaryCTA.color,
                        tagText: ""
                    };
                if (i.metadata) {
                    const p = ((m = i.metadata) == null ? void 0 : m.code) || "",
                        E = ((h = i.metadata) == null ? void 0 : h.title) || "",
                        _ = ((c = i.metadata) == null ? void 0 : c.description) || "",
                        A = ((u = i.metadata) == null ? void 0 : u.tag_background_color) || (t == null ? void 0 : t.backgroundColor),
                        N = ((C = i.metadata) == null ? void 0 : C.tag_text_color) || (t == null ? void 0 : t.primaryCTA.color),
                        b = (y = i.metadata) == null ? void 0 : y.tag_text;
                    j.code = p, j.title = E, j.description = _, j.tagBackgroundColor = A, j.tagTextColor = N, j.tagText = b
                }
                return j
            }
            return {
                code: "",
                title: "",
                description: "",
                tagText: "",
                tagBackgroundColor: t == null ? void 0 : t.backgroundColor,
                tagTextColor: t == null ? void 0 : t.primaryCTA.color
            }
        }, [r]), l = m => {
            jt(lt.FLO_SSO_COUPON_CODE_COPIED, {
                code: m
            })
        };
        return a ? e.jsx(e.Fragment, {}) : o ? e.jsx(Po, {}) : e.jsx(Lo, R(P({}, x), {
            handleCopyCouponCode: l,
            "data-sentry-element": "PopupCoupon",
            "data-sentry-component": "PopupDiscountCard",
            "data-sentry-source-file": "PopupDiscountCard.tsx"
        }))
    },
    Pi = ({
        onClick: s
    }) => {
        var n, r, a;
        const {
            state: {
                popup: t
            }
        } = fa();
        return e.jsx("button", {
            style: {
                backgroundColor: (n = t == null ? void 0 : t.postLogin) == null ? void 0 : n.primaryCTA.backgroundColor,
                color: (r = t == null ? void 0 : t.postLogin) == null ? void 0 : r.primaryCTA.color
            },
            className: "w-full min-h-[40px] text-center font-medium text-base rounded-xl mt-8 mb-4",
            onClick: s,
            "data-sentry-component": "PostLoginButton",
            "data-sentry-source-file": "PostLoginButton.tsx",
            children: (a = t == null ? void 0 : t.postLogin) == null ? void 0 : a.primaryCTA.text
        })
    },
    Li = ({
        sub_total: s,
        total_payable: t,
        discount: n,
        shipping: r,
        tax: a,
        taxes_included: o,
        serviceable: x,
        prepaid_discount: l,
        prepaid_total: m,
        original_sub_total: h
    }) => {
        const {
            t: c
        } = te(), {
            state: {
                merchant: u
            }
        } = Ye(), {
            state: {
                shippingHandles: C,
                appliedGiftCards: y,
                appliedWalletData: g,
                appliedLoyalty: i,
                initialCheckoutStep: j,
                billing: p
            },
            actions: {
                setCheckoutModal: E
            }
        } = ge(), [_, A] = d.useState("");
        d.useEffect(() => {
            var f;
            const b = Ys(C);
            b && A((f = b == null ? void 0 : b.handle_name) != null ? f : "")
        }, [C]);
        const N = () => {
            E("SHIPPING_HANDLES")
        };
        return e.jsx(e.Fragment, {
            children: e.jsxs("ul", {
                className: "flex w-full flex-col space-y-2 px-6 pb-6",
                children: [e.jsxs("li", {
                    className: "flex flex-row justify-between text-base",
                    children: [e.jsx("p", {
                        className: "font-semibold text-coal-light",
                        children: c("subtotal")
                    }), e.jsx("p", {
                        className: "font-medium text-coal-dark",
                        children: e.jsx(tt, {
                            customCSS: "!text-base",
                            total: u != null && u.showOriginalPrice ? h : s,
                            "data-sentry-element": "Price",
                            "data-sentry-source-file": "BillingDetails.tsx"
                        })
                    })]
                }), !!(u != null && u.showOriginalPrice) && !!(h - s) && h - s > 0 && e.jsxs("li", {
                    className: "flex flex-row justify-between text-base",
                    children: [e.jsx("p", {
                        className: "font-semibold text-coal-light",
                        children: c("discount_on_mrp")
                    }), e.jsx("p", {
                        className: "inline-flex font-medium text-yay-dark",
                        children: e.jsx(tt, {
                            customCSS: "!text-base",
                            total: h - s,
                            isDiscounted: !0
                        })
                    })]
                }), e.jsxs(e.Fragment, {
                    children: [e.jsxs("li", {
                        className: "flex flex-row justify-between text-base",
                        children: [e.jsx("p", {
                            className: "font-semibold text-coal-light",
                            children: c("shipping")
                        }), e.jsx("p", {
                            className: `font-regular text-gray-dark ${r!==-1&&"font-normal uppercase"}`,
                            children: r === -1 ? c("calculated_at_next_step") : r === 0 ? c("free_shipping") : e.jsx(tt, {
                                customCSS: "!text-base",
                                total: r != null ? r : ""
                            })
                        })]
                    }), r !== -1 && (C == null ? void 0 : C.length) > 1 && j !== "PAYMENTS" && e.jsxs("p", {
                        className: "text-base text-coal-light",
                        children: [_, " ", e.jsx("button", {
                            className: "font-semibold text-coal-dark underline",
                            onClick: N,
                            children: "Change"
                        })]
                    })]
                }), !o && !!a && e.jsxs("li", {
                    className: "flex flex-row justify-between text-base",
                    children: [e.jsx("p", {
                        className: "font-semibold text-coal-light",
                        children: c("tax")
                    }), e.jsx("p", {
                        className: "font-medium text-coal-dark",
                        children: e.jsx(tt, {
                            customCSS: "!text-base",
                            total: a != null ? a : ""
                        })
                    })]
                }), !!n && e.jsxs("li", {
                    className: "flex flex-row justify-between text-base",
                    children: [e.jsx("p", {
                        className: "font-semibold text-coal-light",
                        children: c("discount")
                    }), e.jsx("p", {
                        className: "inline-flex font-medium text-yay-dark",
                        children: e.jsx(tt, {
                            customCSS: "!text-base",
                            total: n != null ? n : "",
                            isDiscounted: !0
                        })
                    })]
                }), !!(y != null && y.length) && e.jsx(e.Fragment, {
                    children: y.map(b => {
                        var f;
                        return e.jsxs("li", {
                            className: "flex flex-row justify-between text-base",
                            children: [e.jsx("p", {
                                className: "font-normal text-coal-light",
                                children: `${c("gift_card")} ${Cn(b==null?void 0:b.displayName,9,5,"•")}`
                            }), e.jsx("p", {
                                className: "font inline-flex font-medium text-yay-dark",
                                children: e.jsx(tt, {
                                    customCSS: "!text-base",
                                    total: (f = b.cardValue) != null ? f : "",
                                    isDiscounted: !0
                                })
                            })]
                        }, b == null ? void 0 : b.cardId)
                    })
                }), !!i && i.totalPoints > 0 && e.jsx(e.Fragment, {
                    children: e.jsxs("li", {
                        className: "flex flex-row justify-between text-base",
                        children: [e.jsxs("p", {
                            className: "inline-flex items-center font-medium text-coal-light",
                            children: [c("redeem_x_coins", {
                                total: Ee(i == null ? void 0 : i.totalPoints, !1),
                                brand: i.provider === "POP_COINS" ? " " : c("default_wallet_currency")
                            }), i.provider === "POP_COINS" && e.jsxs("span", {
                                className: "inline-flex ml-0.5 items-center space-x-1",
                                children: [e.jsx("img", {
                                    src: Ln,
                                    alt: "pop-coin",
                                    className: "w-4 h-4 rounded-full"
                                }), c("popcoins")]
                            })]
                        }), e.jsx("p", {
                            className: "font inline-flex font-medium text-yay-dark",
                            children: e.jsx(tt, {
                                customCSS: "!text-base",
                                total: i == null ? void 0 : i.totalPrice,
                                isDiscounted: !0
                            })
                        })]
                    }, "applied_wallet")
                }), !!g && g.totalReducedPoints > 0 && e.jsxs("li", {
                    className: "flex flex-row justify-between text-base",
                    children: [e.jsx("p", {
                        className: "font-medium text-coal-light",
                        children: c("redeem_x_coins", {
                            total: Ee(g == null ? void 0 : g.totalReducedPoints, !1),
                            brand: c("default_wallet_currency")
                        })
                    }), e.jsx("p", {
                        className: "font inline-flex font-medium text-yay-dark",
                        children: e.jsx(tt, {
                            customCSS: "!text-base",
                            total: g == null ? void 0 : g.totalReductionAmount,
                            isDiscounted: !0
                        })
                    })]
                }, "applied_wallet"), !!(p != null && p.gift_card) && e.jsxs("li", {
                    className: "flex flex-row justify-between text-xs",
                    children: [e.jsx("p", {
                        className: "font-medium text-coal-light flex items-center",
                        children: c("epay_balance_applied")
                    }), e.jsx("p", {
                        className: "font inline-flex font-medium text-yay-dark",
                        children: e.jsx(tt, {
                            customCSS: "",
                            total: p == null ? void 0 : p.gift_card,
                            isDiscounted: !0
                        })
                    })]
                }, "gift_card"), e.jsxs("li", {
                    className: "flex flex-row justify-between pt-4 text-base font-medium text-coal-dark",
                    children: [e.jsx("p", {
                        className: "text-lg",
                        children: c("total")
                    }), e.jsx("p", {
                        children: e.jsx(tt, {
                            customCSS: "!text-lg",
                            total: t != null ? t : "",
                            "data-sentry-element": "Price",
                            "data-sentry-source-file": "BillingDetails.tsx"
                        })
                    })]
                })]
            })
        })
    },
    mn = 1,
    Bi = Ie.memo(({
        items: s,
        disableOOSItems: t = !1,
        checkoutItemsMutable: n = !1
    }) => e.jsx(e.Fragment, {
        children: e.jsx("ul", {
            className: "flex w-full flex-col space-y-3",
            children: s == null ? void 0 : s.map((r, a) => e.jsx("li", {
                className: `py-3 ${r.is_freebie?"px-3":"px-6"}`,
                children: e.jsx(Ql, R(P({}, r), {
                    disableOOSItems: t,
                    checkoutItemsMutable: n
                }))
            }, `${r.item_id}_${a}`))
        })
    })),
    Ql = s => {
        const {
            t
        } = te(), {
            state: {
                merchant: n
            }
        } = Ye(), {
            state: {
                isAuthenticated: r
            }
        } = qs(), {
            state: {
                checkoutId: a,
                checkoutView: o,
                billing: x,
                checkoutItems: l,
                checkoutUIMetadata: m,
                redirectUrl: h,
                initialCheckoutStep: c,
                wishlistConfig: u,
                checkoutValidations: C
            },
            actions: {
                updateCheckoutBasedOnCheckoutResponse: y,
                setShippingHandles: g,
                setCheckoutModal: i,
                setCheckoutItems: j,
                setCoupons: p,
                setCartDialog: E,
                setCheckoutValidations: _,
                setDiscountProductSelectorModal: A
            }
        } = ge(), {
            state: {
                wishlistedItems: N
            },
            actions: {
                isWishlisted: b,
                refreshWishlist: f
            }
        } = Lr(), {
            actions: {
                mutatePayment: w
            }
        } = Re(), {
            item_title: L,
            quantity: k,
            price: v,
            originalPrice: T,
            markupPrice: F,
            image: $,
            variant_title: Q,
            is_freebie: Y,
            is_available: S,
            disableOOSItems: K,
            hasProductSelector: V,
            item_properties: oe,
            availableQuantity: xe,
            item_id: X,
            variant_id: ne,
            isMutable: Z,
            checkoutItemsMutable: me,
            isCartItem: B = !1,
            isUpdating: M = !1,
            setIsUpdating: se,
            item_url: ue,
            is_discount_alteration: Te,
            is_platform_fee: le,
            appliedItemAddOns: he
        } = s, {
            sendAnalyticsEvent: ie
        } = qe(), fe = parseFloat(v) * k, Oe = parseFloat(n != null && n.showOriginalPrice ? T : F) * k, [z, I] = d.useState(!1), [He, ce] = d.useState(!1), [pe, ye] = d.useState(!1), [G, W] = d.useState(!1), re = d.useMemo(() => {
            var Se, Ne, je, Me;
            return u != null && u.isEnabled ? !(B && !((Ne = (Se = u == null ? void 0 : u.config) == null ? void 0 : Se.cart) != null && Ne.enabled) || !B && !((Me = (je = u == null ? void 0 : u.config) == null ? void 0 : je.checkout) != null && Me.enabled)) : !1
        }, [B, u]), D = d.useMemo(() => b(ne), [N, ne]), O = d.useCallback(() => e.jsx(e.Fragment, {
            children: e.jsx("p", {
                className: "pt-1 text-lg font-medium text-coal-dark",
                children: e.jsx(tt, {
                    customCSS: "!text-lg",
                    total: fe != null ? fe : "",
                    compareAt: Oe,
                    orientation: B ? "horizontal" : "vertical"
                })
            })
        }), [Oe, fe, B]), de = d.useCallback(() => {
            var Se, Ne, je, Me, xt;
            if (Jt(oe)) return e.jsx(e.Fragment, {});
            if (!(n != null && n.showAllItemProperties) && !((Se = n == null ? void 0 : n.itemProperties) != null && Se.length)) return e.jsx(e.Fragment, {});
            try {
                if (n != null && n.showItemPropertyKey) {
                    const at = Br(oe, (Ne = n == null ? void 0 : n.itemProperties) != null ? Ne : [], (je = n == null ? void 0 : n.showAllItemProperties) != null ? je : !1);
                    if (Jt(at)) return e.jsx(e.Fragment, {});
                    const nt = [];
                    for (let yt in at) at.hasOwnProperty(yt) && nt.push(e.jsx("li", {
                        className: "w-full overflow-hidden text-ellipsis text-base font-normal text-coal-light",
                        children: `${yt}: ${at[yt]}`
                    }));
                    return nt
                }
                return e.jsx("li", {
                    className: "w-full overflow-hidden text-ellipsis text-base font-normal text-coal-light",
                    children: Rr(oe, (Me = n == null ? void 0 : n.itemProperties) != null ? Me : [], (xt = n == null ? void 0 : n.showAllItemProperties) != null ? xt : !1)
                })
            } catch (at) {
                return console.error(at), e.jsx(e.Fragment, {})
            }
        }, [oe, n]), H = d.useCallback(Se => ee(void 0, null, function*() {
            var je, Me, xt, at, nt, yt, zt, Tt;
            let Ne = k;
            switch (Se) {
                case "increment":
                    {
                        if (k + 1 > xe || n != null && n.maxQuantityPerItem && (n != null && n.maxQuantityPerItem) && k + 1 > (n == null ? void 0 : n.maxQuantityPerItem)) return;Ne++;
                        break
                    }
                case "decrement":
                    {
                        if (k === mn) return;Ne--;
                        break
                    }
                case "delete":
                    {
                        Ne = 0,
                        ce(!0);
                        break
                    }
            }
            try {
                I(!0), se == null || se(!0);
                const ns = {
                    items: [{
                        id: X,
                        quantity: Ne
                    }]
                };
                let Ge;
                if (r) {
                    Ge = yield Kt(`/checkout/${a}/items`, ns, vt.KRATOS_PRIVATE);
                    const bt = yield ot(`/checkout/${a}/discount`, "KRATOS_PRIVATE");
                    p(bt)
                } else {
                    Ge = yield Kt(`/checkout/${a}/items`, ns, vt.KRATOS_PUBLIC);
                    const bt = yield ot(`/checkout/${a}/discount`, "KRATOS_PUBLIC");
                    p(bt)
                }
                if (Ge != null && Ge.items) {
                    const bt = vs(Ge == null ? void 0 : Ge.items);
                    if (Fr(X, Se === "delete" ? l : bt, Se, B), j(bt), !bt || (bt == null ? void 0 : bt.length) === 0) {
                        Xa([]), Ae(!0);
                        return
                    }
                }
                if (B && Se === "increment" && ie({
                        eventName: q.FLO_ADDED_TO_CART_UI,
                        eventType: "click",
                        eventFor: [Ke.FACEBOOK_PIXEL, Ke.SF_ANALYTICS],
                        metaData: {
                            checkoutItems: vs(Ge == null ? void 0 : Ge.items)
                        }
                    }), I(!1), se == null || se(!1), ce(!1), !((Me = (je = Ge == null ? void 0 : Ge.pricing) == null ? void 0 : je.serviceable) != null ? Me : !1) && !B) {
                    De(t("serviceability_error"), 5e3);
                    return
                }
                y(Ge);
                const ks = (at = (xt = Ge == null ? void 0 : Ge.metadata) == null ? void 0 : xt.show_shipping_handle_selector) != null ? at : !1,
                    Ts = (yt = (nt = Ge == null ? void 0 : Ge.metadata) == null ? void 0 : nt.available_shipping_handles) != null ? yt : [];
                if (g(Ts), o === "PAYMENTS" && ((zt = m == null ? void 0 : m.upsellConfig) != null && zt.isEnabled && Be(Wa({
                        isAuthenticated: r,
                        checkoutId: a
                    })), w(), Be([`/checkout/${a}/rewards`, vt.KRATOS_PRIVATE])), B && ((Tt = m == null ? void 0 : m.upsellConfig) != null && Tt.isEnabled) && Be(Wa({
                        isAuthenticated: r,
                        checkoutId: a
                    })), ks && o === "PAYMENTS" && c !== "PAYMENTS") {
                    i("SHIPPING_HANDLES");
                    return
                }
                Be("UPI_INTENT")
            } catch (ns) {
                console.error(ns), I(!1), se == null || se(!1), ce(!1)
            }
        }), [xe, x.shipping, a, o, r, X, k, l, ne]), Ce = d.useCallback(() => e.jsx(e.Fragment, {
            children: K ? S ? e.jsx(e.Fragment, {
                children: O()
            }) : e.jsx(e.Fragment, {
                children: e.jsx("p", {
                    className: "whitespace-nowrap pt-0.5 text-lg font-medium text-ouch",
                    children: t("oos_item")
                })
            }) : O()
        }), [K, O, S, t]), Ae = Se => ee(void 0, null, function*() {
            if (Se) {
                Xa([]), yield Dr(50), B ? jt(lt.CLEAR_CART_AND_CLOSE, {}) : gt(`${h}/?floRedirectStatus=oos`), ye(!1);
                return
            }
            try {
                yield H("delete")
            } catch (Ne) {
                console.error(Ne)
            } finally {
                ye(!1)
            }
        }), ze = d.useCallback(() => {
            (l == null ? void 0 : l.length) > 1 && re ? H("delete") : ye(!0), W(!1)
        }, [l, re]), Le = Se => ee(void 0, null, function*() {
            var Ne;
            if (!r && B) {
                if (Vs() && !Mr()) {
                    let je = new URL(document.location.href),
                        Me = new URLSearchParams(je.search);
                    Me.delete("page"), Me.append("checkoutId", a), je.search = Me.toString(), jt(lt.PARENT_REDIRECT, {
                        redirectUrl: je.href,
                        clearCart: !1
                    });
                    return
                }
                E("cartAuthentication"), _(R(P({}, C), {
                    cartLoginPopup: {
                        isValid: !1,
                        metadata: {
                            message: "Verify your phone number to wishlist the item"
                        }
                    }
                }));
                return
            }
            if (!r) {
                Js(t("login_to_add_to_wishlist"), 3e3);
                return
            }
            try {
                const je = yield Gr((Ne = n == null ? void 0 : n.merchantId) != null ? Ne : "", ne);
                if (je != null && je.error) throw Se && (De(t("error_adding_to_wishlist"), 3e3), H("delete")), je == null ? void 0 : je.error;
                je && (Se ? (bs(t("added_to_wishlist"), 3e3), H("delete")) : bs(t("added_to_wishlist"), 3e3), ie({
                    eventName: q.ADDED_TO_WISHLIST,
                    eventType: "flo_action",
                    metaData: {
                        wishlistData: {
                            variantId: ne,
                            variantName: Q,
                            productId: X,
                            productName: L,
                            parent: B ? "CART" : "CHECKOUT"
                        }
                    }
                }))
            } catch (je) {
                console.error(je), De(t("error_adding_to_wishlist"), 3e3)
            } finally {
                f(), W(!1)
            }
        }), J = () => ee(void 0, null, function*() {
            var Se;
            try {
                const Ne = yield fn((Se = n == null ? void 0 : n.merchantId) != null ? Se : "", ne);
                if (Ne != null && Ne.error) throw Ne == null ? void 0 : Ne.error;
                Ne && (bs(t("removed_from_wishlist"), 3e3), ie({
                    eventName: q.REMOVED_FROM_WISHLIST,
                    eventType: "flo_action",
                    metaData: {
                        wishlistData: {
                            variantId: ne,
                            variantName: Q,
                            productId: X,
                            productName: L,
                            parent: B ? "CART" : "CHECKOUT"
                        }
                    }
                }))
            } catch (Ne) {
                console.error(Ne), De(t("error_removing_from_wishlist"), 3e3)
            } finally {
                f(), W(!1)
            }
        });
        return e.jsxs("div", {
            className: `relative flex ${re?"overflow-x-hidden":""} scrollbar-hide select-none`,
            "data-sentry-component": "ItemCard",
            "data-sentry-source-file": "CheckoutItems.tsx",
            children: [e.jsxs("div", {
                className: Fe("flex w-full min-w-full flex-row justify-between transition-all duration-300 relative", Y ? "rounded-2xl bg-gradient-to-r from-yay-light to-yay-lighter p-1.5 pr-2" : "", B ? "rounded-xl bg-[#F8F8F8] p-2" : "gap-1", G ? "opacity-50 -translate-x-[14rem]" : ""),
                children: [re && e.jsx("div", {
                    className: `absolute border-b ${B?"top-[1px]":"top-0"} left-[1px] border-r h-6 w-6 z-10 bg-white border-gray-light ${D?"text-primary-dark":"text-gray-dark"} p-1 rounded-tl-md rounded-br-lg cursor-pointer`,
                    onClick: () => D ? J() : Le(),
                    children: e.jsx(aa, {
                        className: `h-4 w-4 ${D?"fill-primary-dark":""}`,
                        strokeWidth: 2.5
                    })
                }), G && e.jsxs("div", {
                    className: "absolute flex items-center justify-end top-0 left-0 w-full h-full bg-white opacity-80 pr-8 cursor-pointer",
                    onClick: () => W(!1),
                    onTouchStart: () => W(!1),
                    children: [e.jsx(Ct, {
                        className: "h-10 w-10"
                    }), e.jsx(Ct, {
                        className: "-ml-8 h-10 w-10"
                    })]
                }), e.jsxs("div", {
                    className: "flex w-full space-x-4",
                    children: [e.jsxs("div", {
                        className: Fe("relative flex items-center justify-center ", B ? "min-h-[120px] min-w-[120px]" : "h-24 min-h-[6rem] w-24 min-w-[6rem]"),
                        children: [Y ? e.jsx("div", {
                            className: "absolute bottom-[1px] right-[1px] flex h-6 w-6 items-center justify-center rounded-md rounded-bl-none rounded-tr-none bg-white shadow-sm",
                            children: e.jsx(Pn, {
                                className: "h-4 w-4 text-yay-dark",
                                strokeWidth: 2.5
                            })
                        }) : e.jsx(e.Fragment, {}), e.jsx(tn, {
                            href: B ? ue : "",
                            "data-sentry-element": "LinkButton",
                            "data-sentry-source-file": "CheckoutItems.tsx",
                            children: e.jsx("img", {
                                src: is($, ".jpg", "_small"),
                                alt: "Cart Item",
                                className: Fe("rounded-lg border border-gray-light object-cover", K && !S ? "grayscale" : "", B ? "h-[120px] w-[120px]" : "h-[6.282rem] w-24"),
                                onError: ({
                                    currentTarget: Se
                                }) => {
                                    Se.onerror = null, Se.src = Bn
                                }
                            })
                        }), !me && k > 1 && e.jsx("div", {
                            className: `absolute flex h-6 w-6 items-center justify-center rounded-full border border-gray-light bg-[#F8F8F8] ${re?"-right-3 -bottom-1":"-right-3 -top-3"}`,
                            children: e.jsx("span", {
                                className: "text-base font-medium text-coal-dark",
                                children: k
                            })
                        })]
                    }), e.jsxs("ul", {
                        className: `flex grow flex-col items-start ${V&&Z?"justify-between":"justify-start"} space-y-0.5`,
                        children: [e.jsxs("li", {
                            className: "flex w-full flex-row items-start justify-between space-x-3",
                            children: [e.jsx(tn, {
                                href: B ? ue : "",
                                "data-sentry-element": "LinkButton",
                                "data-sentry-source-file": "CheckoutItems.tsx",
                                children: e.jsx("p", {
                                    className: "overflow-hidden text-ellipsis  pt-0.5 text-lg font-medium text-coal-dark",
                                    children: qt(L, 64)
                                })
                            }), !V && Z && (!!me && !!Z || B && !Y && !Te && !le) && e.jsx("button", {
                                className: Fe("cursor-pointer rounded-lg border border-gray-light p-1", B ? "bg-white" : ""),
                                disabled: M || z,
                                onClick: () => re ? W(!0) : ye(!0),
                                children: e.jsx(na, {
                                    className: "h-3.5 w-3.5 text-coal-light outline-none",
                                    strokeWidth: 2.5
                                })
                            }), !!V && Z && e.jsx("button", {
                                className: Fe("cursor-pointer rounded-lg border border-gray-light p-1 bg-white"),
                                onClick: () => A("DISCOUNTED_PRODUCT_SELECTOR"),
                                children: e.jsx(Zr, {
                                    className: "h-3.5 w-3.5 text-coal-light outline-none",
                                    strokeWidth: 2.5
                                })
                            })]
                        }), Q !== "Default Title" && e.jsx("li", {
                            className: "w-full overflow-hidden text-ellipsis text-base font-normal text-coal-light",
                            children: Q
                        }), de(), !!V && Z && e.jsxs("li", {
                            className: "flex w-full flex-row items-end justify-between",
                            children: [e.jsx("div", {
                                className: "flex px-2 py-1 border space-x-1 border-gray-light rounded-md bg-white cursor-pointer",
                                onClick: () => A("DISCOUNTED_PRODUCT_SELECTOR"),
                                children: e.jsx("p", {
                                    className: "text-base font-medium text-coal-dark",
                                    children: k
                                })
                            }), Ce()]
                        }), !!me && !K && !V && Z && e.jsxs("li", {
                            className: "flex w-full flex-row items-end justify-between pt-1",
                            children: [fe && !Ur(F, n) && (Z || B && !Y && !Te && !le) ? e.jsx(e.Fragment, {
                                children: e.jsxs("div", {
                                    className: Fe("flex h-6 w-[4.25rem] flex-row items-center rounded border", B ? "border-carbon-lighter bg-white" : "border-gray-light"),
                                    children: [e.jsx("button", {
                                        className: Fe("flex h-full w-full grow basis-1/3 items-center justify-center", k === mn || M || z ? "cursor-not-allowed text-carbon-lighter" : "cursor-pointer bg-gray-light text-coal-light", "rounded-l", B ? "bg-[#F8F8F8]" : ""),
                                        disabled: M || z,
                                        onClick: () => H("decrement"),
                                        children: e.jsx(pa, {
                                            className: "h-3.5 w-3.5 outline-none",
                                            strokeWidth: 2.5
                                        })
                                    }), e.jsx("p", {
                                        className: "grow basis-1/3 text-center text-base font-medium text-coal-dark",
                                        children: k
                                    }), e.jsx("button", {
                                        className: Fe("flex h-full w-full grow basis-1/3 items-center justify-center rounded-r", k + 1 > xe || n != null && n.maxQuantityPerItem && (n != null && n.maxQuantityPerItem) && k + 1 > (n == null ? void 0 : n.maxQuantityPerItem) || M || z ? "cursor-not-allowed text-carbon-lighter" : "cursor-pointer bg-gray-light text-coal-light", B ? "bg-[#F8F8F8]" : ""),
                                        disabled: M || z,
                                        onClick: () => H("increment"),
                                        children: e.jsx(es, {
                                            className: "h-3.5 w-3.5 outline-none",
                                            strokeWidth: 2.5
                                        })
                                    })]
                                })
                            }) : e.jsx("div", {
                                className: "flex h-6 w-6 items-center justify-center rounded border border-gray-light bg-white",
                                children: e.jsx("p", {
                                    className: "text-base font-medium text-coal-dark",
                                    children: k
                                })
                            }), Ce()]
                        })]
                    })]
                }), !me && Ce()]
            }), re && e.jsxs("div", {
                className: `flex min-w-[14rem] transition-all duration-300 rounded-r-xl overflow-hidden ${G?"-translate-x-[14rem]":""}`,
                children: [re && !D && e.jsxs("button", {
                    className: "flex flex-col items-center space-y-2 justify-center w-1/2 py-1 text-primary-dark cursor-pointer bg-primary-lighter",
                    onClick: () => Le(!0),
                    children: [e.jsx(aa, {
                        className: "h-4 w-4"
                    }), e.jsx("p", {
                        className: "text-base font-medium",
                        children: t("save_for_later")
                    })]
                }), e.jsxs("button", {
                    className: `flex flex-col items-center justify-center ${re&&!D?"w-1/2":"w-full"} space-y-2 py-1 text-ouch cursor-pointer bg-[#cb271140]`,
                    onClick: ze,
                    children: [e.jsx(na, {
                        className: "h-4 w-4"
                    }), e.jsx("p", {
                        className: "text-base font-medium",
                        children: t("remove")
                    })]
                })]
            }), e.jsx(Pe, {
                isOpen: pe,
                setIsOpen: () => ye(!1),
                translateAxis: "y",
                customClass: "overflow-scroll md:!top-auto md:absolute",
                dialogOverlay: !0,
                modalType: "REMOVE_ITEM",
                "data-sentry-element": "GenericDialog",
                "data-sentry-source-file": "CheckoutItems.tsx",
                children: e.jsx(wo, {
                    setIsOpen: () => ye(!1),
                    itemName: L,
                    onConfirm: Ae,
                    isCartItem: B,
                    itemProps: s,
                    "data-sentry-element": "RemoveItemDialog",
                    "data-sentry-source-file": "CheckoutItems.tsx"
                })
            }), (!B && z || He) && e.jsx(St, {})]
        })
    };
export {
    _e as A, Li as B, pi as C, _i as D, ji as E, gi as F, yi as L, kl as N, Ca as O, Ii as P, Ci as U, Ni as W, Dt as a, Go as b, wi as c, Ti as d, ki as e, Ei as f, bi as g, Oi as h, Ai as i, Pi as j, Bi as k, vi as l, Si as m
};
//# sourceMappingURL=components-DLiBXlgf.js.map