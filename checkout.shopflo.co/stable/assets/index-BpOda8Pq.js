var E = (e, i, o) => new Promise((u, r) => {
    var a = s => {
            try {
                c(o.next(s))
            } catch (d) {
                r(d)
            }
        },
        n = s => {
            try {
                c(o.throw(s))
            } catch (d) {
                r(d)
            }
        },
        c = s => s.done ? u(s.value) : Promise.resolve(s.value).then(a, n);
    c((o = o.apply(e, i)).next())
});
import {
    w as F
} from "./sentry-1CVSdSoY.js";
import {
    r as w,
    j as t,
    U as W,
    R as A
} from "./react-core-C02-NrKc.js";
import {
    v as j,
    O as q,
    w as H
} from "./common-components-DhcySBak.js";
import {
    c as $
} from "./components-DLiBXlgf.js";
import {
    i as G,
    f as K,
    e as V,
    a$ as z,
    bb as J,
    bc as Q,
    bd as X,
    be as Y,
    bf as Z,
    bg as ee,
    a4 as te,
    b5 as re,
    bh as se,
    x as g,
    D as oe,
    bi as ne,
    bj as ae,
    bk as ie,
    bl as ce,
    bm as de,
    bn as le,
    bo as ue,
    bp as pe,
    bq as O,
    p as fe,
    q as me,
    br as he,
    c as b,
    al as _
} from "./lib-D7WRmHWF.js";
import {
    O as ge
} from "./react-hot-toast-m96sdbVs.js";
import {
    u as I,
    B as S
} from "./react-router-dom-C_20INan.js";
import "./assests-8-RYiWy6.js";
import "./ui-BLvhcVBj.js";
import "./vendor-DWBJvUkq.js";
import "./index-BpOda8Pq.js";
import "./headless-BLCsrzy4.js";
import "./react-ui-CLI46-or.js";
import "./checkout-components-CDs-GsFA.js";
import "./react-i18next-_5H4tnk_.js";
import "./auth-components-5PgZSU3s.js";
import "./react-phone-input-BECxSqfY.js";
import "./vendor-styling-BudEvoL3.js";
import "./framer-wRdAwo6I.js";
import "./js-cookie-CQriODbm.js";
import "./i18next-BW2i0xjm.js";
import "./upsell-components-CqnOSKal.js";
import "./page-cart-DP1yjkIR.js";
import "./cart-components-CVEXMqvK.js";
import "./page-main-checkout-D3bPWflK.js";
import "./axios-b0nqz2WE.js";
import "./bowser-BIXXHWb5.js";
import "./jwt-decode-Dpc-sDrx.js";
import "./nanoid-DGvJWMFP.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {},
            i = new e.Error().stack;
        i && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[i] = "f71b29b0-65e6-4bb3-b23d-6cb6c2807fb1", e._sentryDebugIdIdentifier = "sentry-dbid-f71b29b0-65e6-4bb3-b23d-6cb6c2807fb1")
    } catch (o) {}
})();
(function() {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) u(r);
    new MutationObserver(r => {
        for (const a of r)
            if (a.type === "childList")
                for (const n of a.addedNodes) n.tagName === "LINK" && n.rel === "modulepreload" && u(n)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function o(r) {
        const a = {};
        return r.integrity && (a.integrity = r.integrity), r.referrerPolicy && (a.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? a.credentials = "include" : r.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a
    }

    function u(r) {
        if (r.ep) return;
        r.ep = !0;
        const a = o(r);
        fetch(r.href, a)
    }
})();
var tt = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};

function rt(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
const st = ["/flo-checkout/api/attributes/v1/account-attributes", /\/kratos\/api\/v1\/checkout\/[^\/]+\/rewards/, /\/kratos\/api\/v1\/checkout\/[^\/]+\/upsell/, /\/kratos\/api\/v1\/checkout\/[^\/]+\/address\/[^\/]+\/etd/],
    xe = "modulepreload",
    be = function(e) {
        return "/stable/" + e
    },
    R = {},
    ot = function(i, o, u) {
        let r = Promise.resolve();
        if (o && o.length > 0) {
            document.getElementsByTagName("link");
            const n = document.querySelector("meta[property=csp-nonce]"),
                c = (n == null ? void 0 : n.nonce) || (n == null ? void 0 : n.getAttribute("nonce"));
            r = Promise.allSettled(o.map(s => {
                if (s = be(s), s in R) return;
                R[s] = !0;
                const d = s.endsWith(".css"),
                    h = d ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${s}"]${h}`)) return;
                const l = document.createElement("link");
                if (l.rel = d ? "stylesheet" : xe, d || (l.as = "script"), l.crossOrigin = "", l.href = s, c && l.setAttribute("nonce", c), document.head.appendChild(l), d) return new Promise((x, v) => {
                    l.addEventListener("load", x), l.addEventListener("error", () => v(new Error(`Unable to preload CSS for ${s}`)))
                })
            }))
        }

        function a(n) {
            const c = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (c.payload = n, window.dispatchEvent(c), !c.defaultPrevented) throw n
        }
        return r.then(n => {
            for (const c of n || []) c.status === "rejected" && a(c.reason);
            return i().catch(a)
        })
    };

function ye() {
    var k;
    const {
        state: {
            isAuthenticating: e
        },
        actions: {
            setLoggedIn: i,
            setIsAuthenticating: o
        }
    } = G(), {
        state: {
            redirectUrl: u
        },
        actions: {
            setCheckoutId: r
        }
    } = K(), {
        actions: {
            setUserData: a,
            deleteAddressCache: n,
            updateUser: c
        }
    } = V(), [s, d] = I(), h = (k = s.get("page")) == null ? void 0 : k.toLowerCase(), [l, x] = w.useState(!1), {
        isLoading: v
    } = z();
    w.useEffect(() => {
        J(), M(), Q(), N()
    }, [h]);
    const N = () => {
            const p = X(Y.SHOPFLO_CHANNEL);
            return p.onMessage(f => {
                f.type === Z.USER_LOGGED_OUT && (r(""), a({
                    uid: "",
                    email: "",
                    phone: "",
                    name: "",
                    default_billing_address: void 0,
                    default_shipping_address: void 0,
                    addresses: void 0,
                    hasHomeAddr: !1,
                    hasWorkAddr: !1
                }), n())
            }), () => {
                p.close()
            }
        },
        M = () => E(this, null, function*() {
            const p = s.get("auth"),
                f = s.get("forceRefresh"),
                {
                    isLoggedIn: P,
                    newTokensGenerated: C = !1
                } = yield ee(p != null ? p : void 0, f === "true");
            if (f === "true" && P && d(m => (m.delete("auth"), m.delete("forceRefresh"), m)), i(P), o(!1), C && c(), P && !C) {
                const m = s.get("bureau_event_id");
                m && (yield te("/customer-account/register-fingerprint", {
                    bureau_event_id: m
                }, "AUTH_PRIVATE"))
            }
        }),
        D = () => {
            window.history.pushState(null, "", null), x(!1), setTimeout(() => {
                var p, f;
                (f = (p = document == null ? void 0 : document.documentElement) == null ? void 0 : p.style) == null || f.removeProperty("overflow")
            }, 500)
        },
        B = () => E(this, null, function*() {
            x(!1), re(u)
        });
    return e && h && h !== "marketing-popup" ? t.jsx(j, {
        "data-sentry-element": "Skeleton",
        "data-sentry-component": "App",
        "data-sentry-source-file": "App.tsx"
    }) : t.jsxs(t.Fragment, {
        children: [t.jsx($, {
            "data-sentry-element": "AppRouter",
            "data-sentry-source-file": "App.tsx"
        }), t.jsx(ge, {
            "data-sentry-element": "Toaster",
            "data-sentry-source-file": "App.tsx"
        }), !!v && t.jsx(q, {}), t.jsx(H, {
            closeCheckout: B,
            isOpen: l,
            closePopup: D,
            "data-sentry-element": "CheckoutExitPopup",
            "data-sentry-source-file": "App.tsx"
        })]
    })
}
se();
const U = new URLSearchParams(window.location.search);
var T;
const y = (T = U.get("page")) == null ? void 0 : T.toLowerCase(),
    we = U.get("page") === "marketing-popup",
    ve = document.getElementById("root"),
    L = W(ve),
    Pe = g() && !oe() && !["cart", "empty-cart", "login-status-check", "ghost-modal", "marketing-popup", "experiments-widget"].includes(y != null ? y : "");
Pe ? L.render(t.jsx(A.StrictMode, {
    children: t.jsx(S, {
        basename: "/stable",
        children: t.jsx(Ee, {})
    })
})) : L.render(t.jsx(A.StrictMode, {
    children: t.jsx(S, {
        basename: "/stable",
        children: t.jsx(_e, {
            children: t.jsx(w.Suspense, {
                fallback: we ? t.jsx(t.Fragment, {}) : t.jsx(j, {}),
                children: t.jsx(ne, {
                    children: t.jsx(ae, {
                        children: t.jsx(ie, {
                            children: t.jsx(ce, {
                                children: t.jsx(de, {
                                    children: t.jsx(le, {
                                        children: t.jsx(ue, {
                                            children: t.jsx(pe, {
                                                children: t.jsx(ye, {})
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}));

function Ee() {
    return O(), w.useEffect(() => {
        try {
            const e = new URL(document.location.href);
            fe(me.PARENT_REDIRECT, {
                redirectUrl: e.href,
                clearCart: !1,
                isSso: y === "login-sso"
            })
        } catch (e) {
            F(i => {
                i.setTag("error_type", he.PARENT_REDIRECT_ERROR), e instanceof Error && (i.setExtra("errMessage", e == null ? void 0 : e.message), i.setExtra("errUrl", document.location.href)), i.captureException(e)
            })
        }
    }, []), t.jsx(j, {
        "data-sentry-element": "Skeleton",
        "data-sentry-component": "RedirectWrapper",
        "data-sentry-source-file": "index.tsx"
    })
}

function _e({
    children: e
}) {
    var d;
    const [i] = I(), o = i.get("page"), u = ["cart", "empty-cart"].includes((d = o == null ? void 0 : o.toLowerCase()) != null ? d : ""), r = o === "login-sso", a = o === "marketing-popup", n = o === "wishlist", c = o === "mock-checkout", s = o === "experiments-widget";
    return O(), a ? t.jsx("div", {
        className: b("overflow-hidden md:h-fit md:w-[25rem] w-full", "md:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]"),
        children: e
    }) : u ? t.jsx("div", {
        className: "h-screen w-full overflow-hidden bg-gray-lightest md:h-[85vh] md:w-[25rem] md:rounded-l-[28px] md:rounded-r-none  md:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]",
        children: e
    }) : r ? t.jsx("div", {
        className: `flex h-screen w-full overflow-hidden bg-gray-lighter ${g()?"justify-center":"flex-col items-center justify-center"}`,
        children: t.jsx("div", {
            className: b("h-[400px] w-[360px] border border-carbon-lighter bg-white md:h-[400px]", _() ? "rounded-xl" : "relative w-[360px] rounded-[20px] md:w-[360px]", g() ? "!w-full !rounded-xl" : ""),
            children: e
        })
    }) : n ? t.jsx("div", {
        className: "h-full w-full overflow-hidden bg-transparent",
        children: e
    }) : c ? t.jsx("div", {
        className: b("h-screen w-full bg-gray-lightest md:h-[85vh] md:w-[69rem]", _() ? "" : g() ? "rounded-[28px]" : "md:rounded-[28px]", "md:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]"),
        children: e
    }) : s ? t.jsx("div", {
        className: "h-full w-full overflow-hidden bg-transparent",
        children: e
    }) : t.jsx("div", {
        className: b("h-screen w-full overflow-hidden bg-gray-lightest md:h-[85vh] md:w-[25rem]", _() ? "" : g() ? "rounded-[28px]" : "md:rounded-[28px]", "md:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]"),
        "data-sentry-component": "AppShell",
        "data-sentry-source-file": "index.tsx",
        children: e
    })
}
window.addEventListener("vite:preloadError", () => {
    window.location.reload()
});
export {
    st as A, ot as _, tt as c, rt as g
};
//# sourceMappingURL=index-BpOda8Pq.js.map