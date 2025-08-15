var We = Object.defineProperty,
    Je = Object.defineProperties;
var Xe = Object.getOwnPropertyDescriptors;
var Ue = Object.getOwnPropertySymbols;
var Ye = Object.prototype.hasOwnProperty,
    Qe = Object.prototype.propertyIsEnumerable;
var Fe = (s, a, n) => a in s ? We(s, a, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : s[a] = n,
    xe = (s, a) => {
        for (var n in a || (a = {})) Ye.call(a, n) && Fe(s, n, a[n]);
        if (Ue)
            for (var n of Ue(a)) Qe.call(a, n) && Fe(s, n, a[n]);
        return s
    },
    fe = (s, a) => Je(s, Xe(a));
var B = (s, a, n) => new Promise((r, h) => {
    var t = i => {
            try {
                p(n.next(i))
            } catch (c) {
                h(c)
            }
        },
        y = i => {
            try {
                p(n.throw(i))
            } catch (c) {
                h(c)
            }
        },
        p = i => i.done ? r(i.value) : Promise.resolve(i.value).then(t, y);
    p((n = n.apply(s, a)).next())
});
import {
    j as e,
    r as m
} from "./react-core-C02-NrKc.js";
import {
    c as _e,
    a as Ne,
    P as He,
    D as Ze,
    M as et,
    A as tt
} from "./common-components-DhcySBak.js";
import {
    u as ne,
    i as Ce,
    f as ie,
    b as Ve,
    a as ve,
    B as at,
    C as z,
    d as u,
    x as Me,
    D as st,
    p as ae,
    q as se,
    E as ce,
    e as qe,
    g as nt,
    h as $e,
    m as ot,
    o as rt,
    F as Re,
    t as lt,
    w as ye,
    y as ct,
    z as it,
    s as dt,
    A as ut,
    n as ht,
    v as mt,
    G as pt,
    H as xt,
    r as ft,
    I as gt,
    J as yt,
    c as _t
} from "./lib-D7WRmHWF.js";
import {
    T as Te
} from "./assests-8-RYiWy6.js";
import "./sentry-1CVSdSoY.js";
import {
    F as Nt,
    C as Ct,
    E as ze,
    S as vt,
    X as Tt,
    b as bt,
    T as jt,
    A as kt,
    G as Ot,
    P as Et
} from "./react-ui-CLI46-or.js";
import {
    P as St,
    i as It,
    a as wt
} from "./react-phone-input-BECxSqfY.js";
import {
    u as Ke
} from "./react-router-dom-C_20INan.js";
import {
    _ as Lt
} from "./headless-BLCsrzy4.js";
import {
    O as At
} from "./auth-components-5PgZSU3s.js";
(function() {
    try {
        var s = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {},
            a = new s.Error().stack;
        a && (s._sentryDebugIds = s._sentryDebugIds || {}, s._sentryDebugIds[a] = "1b798e78-449e-48a0-95a8-5bed9eecaee1", s._sentryDebugIdIdentifier = "sentry-dbid-1b798e78-449e-48a0-95a8-5bed9eecaee1")
    } catch (n) {}
})();
const $t = ({
    open: s,
    setDialog: a,
    isLoading: n = !1
}) => {
    var v, w;
    const {
        t: r
    } = ne(), {
        state: {
            isAuthenticated: h
        }
    } = Ce(), {
        state: {
            billing: t,
            checkoutId: y,
            checkoutItems: p,
            appliedCoupons: i
        }
    } = ie(), {
        state: {
            merchant: c
        }
    } = Ve(), d = ve(), {
        cartPermissions: C
    } = at(), I = () => B(void 0, null, function*() {
        yield ce(`/checkout/v1/cart/${y}/checkout`, {}), ae(se.CART_TO_CHECKOUT, {
            checkoutId: y,
            lineItems: p,
            cartTotal: t.total_payable,
            coupons: i
        })
    }), f = () => {
        if (h) {
            d.sendAnalyticsEvent({
                eventName: u.FLO_CHECKOUT_CLICKED,
                eventType: "click"
            }), I(), a(null);
            return
        }
        if (Me() && !st()) {
            d.sendAnalyticsEvent({
                eventName: u.FLO_CHECKOUT_CLICKED,
                eventType: "click"
            });
            let L = new URL(document.location.href),
                k = new URLSearchParams(L.search);
            k.delete("page"), k.append("checkoutId", y), k.append("referrer", "cart"), L.search = k.toString(), ae(se.PARENT_REDIRECT, {
                redirectUrl: L.href,
                clearCart: !1
            });
            return
        }
        a("authentication")
    };
    return e.jsx(_e, {
        isOpen: s,
        setIsOpen: () => {
            a(null)
        },
        translateAxis: "y",
        customClass: "overflow-scroll md:!top-auto md:absolute rounded-t-2xl max-h-[81vh]",
        dialogOverlay: !0,
        closeOnOverlayClick: !0,
        "data-sentry-element": "GenericDialog",
        "data-sentry-component": "BillingSummaryDialog",
        "data-sentry-source-file": "BillingDialog.tsx",
        children: e.jsxs(Ne, {
            className: "flex flex-col gap-3 !p-3 !pb-14",
            "data-sentry-element": "DialogBody",
            "data-sentry-source-file": "BillingDialog.tsx",
            children: [e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [e.jsxs("h3", {
                    className: "flex gap-2 text-sm font-medium text-coal-dark",
                    children: [e.jsx(Nt, {
                        className: "h-4 w-4",
                        "data-sentry-element": "FileText",
                        "data-sentry-source-file": "BillingDialog.tsx"
                    }), r("bill_summary")]
                }), e.jsx("button", {
                    onClick: () => a(null),
                    children: e.jsx(Ct, {
                        className: "h-4 w-4 text-coal-dark",
                        strokeWidth: 2,
                        "data-sentry-element": "ChevronDown",
                        "data-sentry-source-file": "BillingDialog.tsx"
                    })
                })]
            }), e.jsxs("div", {
                className: "space-y-1",
                children: [e.jsxs("div", {
                    className: "flex w-full justify-between text-xs text-coal-light",
                    children: [e.jsx("span", {
                        children: r("cart_total")
                    }), e.jsx("span", {
                        className: "text-coal-dark",
                        children: z(c != null && c.showOriginalPrice ? t == null ? void 0 : t.original_sub_total : (t == null ? void 0 : t.sub_total) + (t == null ? void 0 : t.addon_total))
                    })]
                }), e.jsxs("div", {
                    className: "flex w-full justify-between text-xs text-coal-light",
                    children: [e.jsx("span", {
                        children: r("delivery_fee")
                    }), e.jsx("span", {
                        className: "text-coal-dark",
                        children: t.shipping && t.shipping >= 0 ? z(t == null ? void 0 : t.shipping) : r("to_be_calculated")
                    })]
                }), !!(c != null && c.showOriginalPrice) && !!((t == null ? void 0 : t.original_sub_total) - (t == null ? void 0 : t.sub_total)) && (t == null ? void 0 : t.original_sub_total) - (t == null ? void 0 : t.sub_total) > 0 && e.jsxs("div", {
                    className: "flex w-full justify-between text-xs text-coal-light",
                    children: [e.jsx("span", {
                        children: r("discount_on_mrp")
                    }), e.jsx("span", {
                        className: "font-medium text-yay-dark",
                        children: z((t == null ? void 0 : t.original_sub_total) - (t == null ? void 0 : t.sub_total))
                    })]
                }), !!(t != null && t.discount) && e.jsxs("div", {
                    className: "flex w-full justify-between text-xs text-coal-light",
                    children: [e.jsx("span", {
                        children: r("discount")
                    }), e.jsx("span", {
                        className: "font-medium text-yay-dark",
                        children: z((v = t == null ? void 0 : t.discount) != null ? v : "")
                    })]
                }), e.jsxs("div", {
                    className: "flex w-full justify-between text-sm font-semibold text-carbon-dark",
                    children: [e.jsx("div", {
                        children: r("grand_total")
                    }), e.jsx("div", {
                        children: z(t.total_payable)
                    })]
                })]
            }), e.jsx(He, {
                buttonText: "Checkout",
                onClick: f,
                isLoading: n,
                isDisabled: ((w = C == null ? void 0 : C.checkoutBtnStatus) == null ? void 0 : w.length) > 0,
                "data-sentry-element": "PrimaryButton",
                "data-sentry-source-file": "BillingDialog.tsx"
            }), e.jsx("img", {
                src: Te,
                className: "h-4",
                alt: "shopflo-logo"
            })]
        })
    })
};
let Be = !1,
    ge = 1;
const zt = ({
        open: s,
        setDialog: a,
        context: n = "SSO"
    }) => {
        var V, M, q, ke, Oe, Ee, Se, Ie, we, Le, Ae, De, Pe;
        const {
            t: r
        } = ne(), {
            actions: {
                login: h
            },
            state: {
                thirdPartyAuth: t
            }
        } = Ce(), [y, p] = m.useState(!1), {
            actions: {
                setUserLoginType: i,
                updateUser: c
            },
            state: {
                user: d
            }
        } = qe(), {
            state: {
                originUrl: C,
                checkoutId: I,
                checkoutValidations: f,
                cartDialog: v,
                checkoutItems: w,
                appliedCoupons: L,
                billing: k
            },
            actions: {
                setCheckoutValidations: K
            }
        } = ie(), {
            state: {
                merchant: O
            }
        } = Ve(), {
            sendAnalyticsEvent: l
        } = ve(), {
            generateReCaptchaToken: T
        } = nt(), [_, de] = Ke(), U = _.get("phoneNumber"), [be, oe] = m.useState(!1), [je, re] = m.useState(!1), [F, G] = m.useState(""), {
            handleSubmit: ue,
            inputProps: R,
            setValueOf: E,
            setErrors: H,
            handleFieldChange: he,
            state: {
                values: S,
                errors: N
            }
        } = $e({
            initialState: {
                phoneNumber: U != null ? U : ""
            },
            validationSchema: {
                phoneNumber: {
                    required: r("invalid_phone_number"),
                    phone: r("invalid_phone_number"),
                    formatters: ["PHONE"]
                }
            }
        });
        m.useEffect(() => {
            d != null && d.phone && E("phoneNumber", d == null ? void 0 : d.phone)
        }, [d]);
        const g = me => B(void 0, [me], function*({
                phoneNumber: o
            }) {
                var A, W, J, X, Y, Q;
                if (!(It(o) && wt(o))) {
                    ye(r("invalid_phone"));
                    return
                }
                try {
                    p(!0), H({
                        phoneNumber: {
                            status: !1
                        },
                        otp: {
                            status: !1,
                            showAlert: !1
                        }
                    }), E("otp", "");
                    let D = {
                            identifier: it(o),
                            merchantId: (A = O == null ? void 0 : O.merchantId) != null ? A : "",
                            domain: Me() ? C : (W = ct) == null ? void 0 : W.CHECKOUT_HOST
                        },
                        $, Z = {
                            context: "AUTH"
                        };
                    n === "SSO" && ($ = _.get("request-id"), $ && (Z = {
                        context: "SSO",
                        requestId: $
                    }));
                    const ee = yield T("login"), P = yield dt(D, Z, ee);
                    if (p(!1), !P) return;
                    const le = (J = P.otp_required) != null ? J : P.existing_customer;
                    if (_.set("ctxId", P.context_id), _.set("phoneNumber", o), de(_), l({
                            eventName: u.FLO_AUTH_PHONE_ENTERED,
                            eventType: "click",
                            metaData: {
                                userType: le ? "repeat" : "guest"
                            },
                            context: "cart"
                        }), !le) {
                        const pe = (X = P.token) == null ? void 0 : X.access_token,
                            te = (Y = P.token) == null ? void 0 : Y.access_token_expires_at;
                        h(pe, "", te), yield ce(`/checkout/v1/cart/${I}/checkout`, {}), c(), ae(se.CART_TO_CHECKOUT, {
                            checkoutId: I,
                            lineItems: w,
                            cartTotal: k.total_payable,
                            coupons: L
                        }), a(null), i(u.FLO_GUEST_LOGIN), l({
                            eventName: u.FLO_GUEST_LOGIN,
                            eventFor: [ut.SF_ANALYTICS],
                            eventType: "flo_action",
                            metaData: {
                                userData: {
                                    type: u.FLO_GUEST_LOGIN
                                },
                                authSource: "SHOPFLO"
                            },
                            context: "cart"
                        });
                        return
                    }
                    a(v === "cartAuthentication" ? "cartOtpVerification" : "otpVerification"), l({
                        eventName: u.FLO_AUTH_OTP_LOADED,
                        eventType: "load",
                        context: "cart"
                    })
                } catch (D) {
                    p(!1), ((Q = D == null ? void 0 : D.response) == null ? void 0 : Q.status) === 400 ? H({
                        phoneNumber: {
                            status: !0,
                            message: r("invalid_phone_number")
                        }
                    }) : ye(r("otp_fetch_failed"))
                }
            }),
            b = () => {
                var A;
                if (oe(!0), (A = S == null ? void 0 : S.phoneNumber) != null && A.length || !(t != null && t.length) || Be) return;
                const o = t[0];
                if (!o) return;
                switch (o.provider) {
                    case "TRUECALLER":
                        {
                            G(o.requestId),
                            Be = !0,
                            lt(o.redirectUrl),
                            re(!0);
                            break
                        }
                }
            },
            x = m.useCallback(() => B(void 0, null, function*() {
                var me, A, W, J, X, Y, Q, D, $, Z;
                if (!F) {
                    j();
                    return
                }
                let o;
                try {
                    if (o = yield ot(`/auth-callback/${F}/status`, "AUTH"), o.status === "VERIFIED") {
                        j();
                        const ee = (A = (me = o == null ? void 0 : o.metadata) == null ? void 0 : me.token_response) == null ? void 0 : A.access_token,
                            P = (J = (W = o == null ? void 0 : o.metadata) == null ? void 0 : W.token_response) == null ? void 0 : J.access_token_expires_at,
                            le = (Y = (X = o == null ? void 0 : o.metadata) == null ? void 0 : X.token_response) == null ? void 0 : Y.refresh_token,
                            pe = (D = (Q = o == null ? void 0 : o.metadata) == null ? void 0 : Q.token_response) == null ? void 0 : D.refresh_token_expires_at,
                            te = (Z = ($ = o == null ? void 0 : o.metadata) == null ? void 0 : $.token_response) == null ? void 0 : Z.existing_user;
                        h(ee, le, P, pe), c(), i(te ? u.FLO_RETURN_USER_LOGIN : u.FLO_GUEST_LOGIN), l({
                            eventName: te ? u.FLO_RETURN_USER_LOGIN : u.FLO_GUEST_LOGIN,
                            eventType: "flo_action",
                            metaData: {
                                userData: {
                                    type: te ? u.FLO_RETURN_USER_LOGIN : u.FLO_GUEST_LOGIN
                                },
                                authSource: "TRUECALLER"
                            },
                            context: "cart"
                        });
                        return
                    }
                    if (o.status === "FAILED" || o.status === "USER_REJECTED") {
                        j();
                        return
                    }
                    if (ge >= 30) {
                        j();
                        return
                    }
                    ge++
                } catch (ee) {
                    console.error(ee), j()
                } finally {
                    l({
                        eventName: u.FLO_TRUECALLER_ACTION,
                        eventType: "flo_action",
                        metaData: {
                            action: {
                                type: o.status
                            }
                        },
                        context: "cart"
                    })
                }
            }), [F]),
            j = () => {
                ge = 1, re(!1)
            };
        return rt(x, je ? 1500 : null), e.jsxs(_e, {
            isOpen: s,
            setIsOpen: () => {
                K(fe(xe({}, f), {
                    cartLoginPopup: {
                        isValid: !0
                    }
                })), a(null)
            },
            translateAxis: "y",
            customClass: "overflow-scroll md:!top-auto md:absolute rounded-t-2xl max-h-[81vh]",
            dialogOverlay: !0,
            closeOnOverlayClick: !0,
            "data-sentry-element": "GenericDialog",
            "data-sentry-component": "CartAuthenticationDialog",
            "data-sentry-source-file": "CartAuthenticationDialog.tsx",
            children: [e.jsx(Ze, {
                className: "px-4",
                "data-sentry-element": "DialogHeader",
                "data-sentry-source-file": "CartAuthenticationDialog.tsx",
                children: e.jsxs(Lt.Title, {
                    as: "div",
                    className: "flex h-full space-y-0.5 w-full flex-col bg-white py-4",
                    "data-sentry-element": "unknown",
                    "data-sentry-source-file": "CartAuthenticationDialog.tsx",
                    children: [e.jsx("h2", {
                        className: "inline-flex gap-2 text-lg font-semibold text-carbon-dark",
                        children: r("almost_there")
                    }), e.jsx("p", {
                        className: "text-sm font-normal text-coal-light",
                        children: (V = f == null ? void 0 : f.cartLoginPopup) != null && V.isValid ? r("verify_phone_number_to_place_order") : (q = (M = f == null ? void 0 : f.cartLoginPopup) == null ? void 0 : M.metadata) == null ? void 0 : q.message
                    })]
                })
            }), e.jsx(Ne, {
                className: "flex h-96 flex-col",
                "data-sentry-element": "DialogBody",
                "data-sentry-source-file": "CartAuthenticationDialog.tsx",
                children: e.jsx("div", {
                    className: "flex w-full flex-row items-center justify-center p-3",
                    children: e.jsxs("form", {
                        onSubmit: ue(g),
                        className: "flex w-full flex-col items-center gap-3",
                        children: [e.jsx(St, fe(xe({
                            defaultCountry: "IN"
                        }, R(Re.phoneNumber, {
                            onChange: o => {
                                he(Re.phoneNumber, o)
                            },
                            onFocus: () => b(),
                            onBlur: () => {
                                oe(!1)
                            }
                        })), {
                            value: (ke = d == null ? void 0 : d.phone) != null ? ke : "",
                            countries: (Oe = O == null ? void 0 : O.addressConfig) == null ? void 0 : Oe.enabledCountries,
                            id: "flo__auth__phoneInput",
                            smartCaret: !1,
                            className: `placeholder-sm peer flex h-[3.25rem] w-full appearance-none rounded-xl border border-gray-light px-3 text-base placeholder-transparent
                ${((Ee=N.phoneNumber)==null?void 0:Ee.status)&&"border-ouch"}
                ${(Se=S==null?void 0:S.phoneNumber)!=null&&Se.length&&!((Ie=N==null?void 0:N.phoneNumber)!=null&&Ie.status)?"border-[#D5E7DB]":""} ${be&&"border-[1px] !border-primary-dark px-[12px] outline-none ring-[2px] ring-primary-light"}`,
                            placeholder: r("phone_number"),
                            international: !0,
                            countryCallingCodeEditable: !1,
                            autoFocus: !1,
                            limitMaxLength: !0,
                            error: (we = N.phoneNumber) == null ? void 0 : we.message,
                            "data-sentry-element": "PhoneInput",
                            "data-sentry-source-file": "CartAuthenticationDialog.tsx"
                        })), ((Le = N.phoneNumber) == null ? void 0 : Le.status) && e.jsx("p", {
                            className: `mt-1 w-full px-3 text-center font-normal ${(Ae=N.phoneNumber)!=null&&Ae.status?"self-start text-sm text-ouch":"text-xs text-coal-light"}`,
                            children: ((De = N.phoneNumber) == null ? void 0 : De.status) && ((Pe = N.phoneNumber) == null ? void 0 : Pe.message)
                        }), e.jsx(He, {
                            buttonText: r("verify_otp"),
                            isLoading: y,
                            id: "flo__auth__loginButton",
                            type: "submit",
                            "data-sentry-element": "PrimaryButton",
                            "data-sentry-source-file": "CartAuthenticationDialog.tsx"
                        }), e.jsx(et, {
                            "data-sentry-element": "MarketingConsent",
                            "data-sentry-source-file": "CartAuthenticationDialog.tsx"
                        }), e.jsx("img", {
                            src: Te,
                            className: "h-4",
                            alt: "shopflo-logo"
                        })]
                    })
                })
            })]
        })
    },
    Kt = ({
        open: s,
        setDialog: a,
        context: n = "AUTH",
        showLoginConsent: r = !0
    }) => {
        var S, N;
        const {
            t: h
        } = ne(), [t, y] = Ke(), p = t.get("phoneNumber"), i = t.get("ctxId"), {
            state: {
                checkoutId: c,
                checkoutItems: d,
                appliedCoupons: C,
                billing: I,
                cartDialog: f
            }
        } = ie(), {
            sendAnalyticsEvent: v
        } = ve(), {
            actions: {
                login: w
            }
        } = Ce(), {
            state: {
                user: L
            },
            actions: {
                setUserLoginType: k,
                updateUser: K
            }
        } = qe(), [O, l] = m.useState(!1), [T, _] = m.useState(30), [de, U] = m.useState(!1), [be, oe] = m.useState(0), [je, re] = m.useState(0), {
            setValueOf: F,
            setErrors: G,
            handleSubmit: ue,
            state: {
                values: R,
                errors: E
            }
        } = $e({
            initialState: {
                otp: ""
            },
            validationSchema: {
                otp: {
                    required: h("enter_your_otp"),
                    numeric: h("otp_incorrect"),
                    length: {
                        limit: 4,
                        message: h("otp_incorrect")
                    },
                    formatters: ["NUMERIC"]
                }
            }
        });
        m.useEffect(() => {
            s && (_(30), U(!1))
        }, [s]), m.useEffect(() => {
            T === 0 && U(!0);
            const g = T > 0 && setInterval(() => _(T - 1), 1e3);
            return () => clearInterval(g)
        }, [T]);
        const H = g => B(void 0, null, function*() {
                var b;
                if (!(g && (g == null ? void 0 : g.length) !== 4)) {
                    G({
                        otp: {
                            status: !1
                        }
                    }), l(!0);
                    try {
                        if (v({
                                eventName: u.FLO_AUTH_OTP_ENTERED,
                                eventType: "click",
                                context: "cart"
                            }), !i) return;
                        const x = yield mt(i, g, void 0, {
                            bureau_event_id: (b = t.get("bureau_event_id")) != null ? b : ""
                        }), j = x == null ? void 0 : x.access_token, V = x == null ? void 0 : x.access_token_expires_at, M = x == null ? void 0 : x.refresh_token, q = x == null ? void 0 : x.refresh_token_expires_at;
                        if (pt(j, M, V, q), xt(j, M, V, q), yield ce(`/checkout/v1/cart/${c}/checkout`, {}), l(!1), w(j, M, V, q), yield ce(`/checkout/v1/cart/${c}/checkout`, {}), K(), f !== "cartOtpVerification" && ae(se.CART_TO_CHECKOUT, {
                                checkoutId: c,
                                lineItems: d,
                                cartTotal: I.total_payable,
                                coupons: C
                            }), a(null), F("otp", ""), n === "SSO") return;
                        k(u.FLO_RETURN_USER_LOGIN), v({
                            eventName: u.FLO_RETURN_USER_LOGIN,
                            eventType: "flo_action",
                            metaData: {
                                userData: {
                                    type: u.FLO_RETURN_USER_LOGIN
                                },
                                authSource: "SHOPFLO"
                            },
                            context: "cart"
                        })
                    } catch (x) {
                        l(!1), G({
                            otp: {
                                status: !0,
                                message: h("otp_incorrect")
                            }
                        }), re(j => j + 1)
                    }
                }
            }),
            he = g => B(void 0, null, function*() {
                l(!0), v({
                    eventName: u.FLO_AUTH_OTP_RESEND,
                    eventType: "click"
                }), F("otp", "");
                try {
                    if (!i) return;
                    yield ft(i, g), _(30), U(!1), oe(b => b + 1)
                } catch (b) {
                    console.error(b)
                }
                G({
                    otp: {
                        status: !1
                    }
                }), l(!1)
            });
        return m.useEffect(() => {
            R.otp && R.otp.length === 4 && H(R.otp)
        }, [R.otp]), e.jsx(_e, {
            isOpen: s,
            setIsOpen: () => {
                a(null)
            },
            translateAxis: "y",
            customClass: "overflow-scroll md:!top-auto md:absolute rounded-t-2xl max-h-[81vh]",
            dialogOverlay: !0,
            closeOnOverlayClick: !0,
            "data-sentry-element": "GenericDialog",
            "data-sentry-component": "CartOtpVerficationDialog",
            "data-sentry-source-file": "CartAuthenticationOtpVerificationDialog.tsx",
            children: e.jsxs(Ne, {
                className: "flex flex-col space-y-3 !p-3 !pb-14",
                "data-sentry-element": "DialogBody",
                "data-sentry-source-file": "CartAuthenticationOtpVerificationDialog.tsx",
                children: [e.jsxs("div", {
                    className: "flex flex-col space-y-1",
                    children: [e.jsx("h2", {
                        className: "inline-flex text-lg font-semibold text-coal-dark",
                        children: "Welcome back!"
                    }), e.jsx("p", {
                        className: "text-sm font-normal text-coal-light",
                        children: "Use your saved addresses on Shopflo’s checkout network by entering the OTP"
                    })]
                }), p && e.jsxs("div", {
                    className: "flex items-center text-sm text-coal-light",
                    children: [e.jsx("span", {
                        children: h("enter_otp_to_verify")
                    }), e.jsx("span", {
                        className: "pl-1 font-medium",
                        children: ht(p)
                    }), e.jsx("button", {
                        className: "ml-2 rounded-lg bg-gray-lighter p-2",
                        onClick: () => a("authentication"),
                        children: e.jsx(ze, {
                            className: "h-4 w-4"
                        })
                    })]
                }), e.jsxs(e.Fragment, {
                    children: [e.jsx(At, {
                        isLoading: !!O,
                        otpLength: 4,
                        otpValue: (S = R.otp) != null ? S : "",
                        handleSubmit: ue(H),
                        handleChange: g => {
                            var b;
                            F("otp", g), (b = E == null ? void 0 : E.otp) != null && b.status && G({
                                otp: {
                                    status: !1
                                }
                            })
                        },
                        validateOtp: H,
                        handleResendOtp: he,
                        error: ((N = E == null ? void 0 : E.otp) == null ? void 0 : N.status) || !1,
                        errorMessage: h("otp_incorrect_login") || "",
                        autoFocus: !0,
                        otpCounter: T,
                        otpCounterExpired: de,
                        emailValidation: !1,
                        showLoginConsent: !0,
                        context: "cart",
                        "data-sentry-element": "OTPForm",
                        "data-sentry-source-file": "CartAuthenticationOtpVerificationDialog.tsx"
                    }), e.jsx("img", {
                        src: Te,
                        className: "h-4",
                        alt: "shopflo-logo"
                    })]
                })]
            })
        })
    },
    Wt = ({
        totalItems: s
    }) => {
        const {
            t: a
        } = ne(), {
            actions: {
                setCheckoutModal: n
            }
        } = ie();
        return e.jsxs("div", {
            className: "flex w-full items-center justify-between px-6 pb-4 pt-6",
            "data-sentry-component": "CartHeader",
            "data-sentry-source-file": "CartHeader.tsx",
            children: [e.jsxs("div", {
                className: "flex h-6 items-center gap-2 font-medium text-coal-dark",
                children: [e.jsx(vt, {
                    className: "h-4 w-4",
                    "data-sentry-element": "ShoppingCart",
                    "data-sentry-source-file": "CartHeader.tsx"
                }), e.jsxs("div", {
                    className: "flex gap-1",
                    children: [e.jsx("span", {
                        children: a("your_cart")
                    }), !!s && e.jsxs(e.Fragment, {
                        children: [e.jsx("span", {
                            children: "·"
                        }), e.jsx("span", {
                            className: "font-normal text-coal-light",
                            children: a("n_items", {
                                items: s
                            })
                        })]
                    })]
                })]
            }), e.jsx("button", {
                onClick: () => {
                    n("NONE"), ae(se.CLOSE_CART_IFRAME, {})
                },
                children: e.jsx(Tt, {
                    className: "h-6 w-6 text-coal-dark",
                    "data-sentry-element": "X",
                    "data-sentry-source-file": "CartHeader.tsx"
                })
            })]
        })
    },
    Ge = s => {
        switch (s) {
            case "ATTACH":
                return e.jsx(Et, {
                    size: 16,
                    className: "min-w-4 min-h-4"
                });
            case "EDIT":
                return e.jsx(ze, {
                    size: 16,
                    className: "min-w-4 min-h-4"
                });
            case "GIFT":
                return e.jsx(Ot, {
                    size: 16,
                    className: "min-w-4 min-h-4"
                });
            default:
                return null
        }
    },
    Jt = () => {
        const s = m.useRef(null),
            {
                t: a
            } = ne(),
            {
                state: {
                    cartNoteAttributes: n,
                    appliedCartNote: r,
                    isCartNoteTileLoading: h,
                    isEditMode: t,
                    inputValue: y,
                    showError: p
                },
                actions: {
                    handleSaveNote: i,
                    setIsEditMode: c,
                    setInputValue: d,
                    setShowError: C
                }
            } = gt();
        m.useEffect(() => {
            var l;
            t && ((l = s == null ? void 0 : s.current) == null || l.openAccordion())
        }, [t]);
        const I = () => {
                var l;
                t ? (c(!1), d(r.note)) : d(""), C(!1), (l = s == null ? void 0 : s.current) == null || l.closeAccordion()
            },
            f = (l = "ADD") => B(void 0, null, function*() {
                if (!y.trim()) {
                    C(!0);
                    return
                }
                try {
                    i({
                        inputValue: y,
                        action: l
                    })
                } catch (T) {
                    console.error("Error saving note"), ye(a("error_saving_note"))
                }
            }),
            v = () => c(!0),
            w = () => i({
                inputValue: "",
                action: "DELETE"
            }),
            L = m.useMemo(() => t ? !0 : !r.hasCartNoteAdded, [r.hasCartNoteAdded, t]);
        if (!n.hasCartNote) return e.jsx(e.Fragment, {});
        const k = () => e.jsx("div", {
                className: "flex flex-col gap-2 p-4 border border-gray-light rounded-xl",
                onClick: v,
                "data-sentry-component": "renderAppliedCartNote",
                "data-sentry-source-file": "CartNotes.tsx",
                children: e.jsxs("div", {
                    className: "flex justify-between items-center",
                    children: [e.jsxs("div", {
                        className: "flex gap-2 items-center",
                        children: [Ge(n.cartNoteConfig.icon), e.jsx("p", {
                            className: "text-sm text-coal-light text-ellipsis ",
                            children: yt(r.note, 50)
                        })]
                    }), e.jsxs("div", {
                        className: "flex gap-2",
                        children: [e.jsx("button", {
                            onClick: v,
                            className: "text-coal-dark hover:underline text-sm flex items-center gap-1",
                            children: e.jsx(bt, {
                                size: 18,
                                "data-sentry-element": "Edit2",
                                "data-sentry-source-file": "CartNotes.tsx"
                            })
                        }), e.jsx("button", {
                            onClick: w,
                            className: "text-red-500 hover:underline text-sm flex items-center gap-1",
                            children: e.jsx(jt, {
                                size: 18,
                                "data-sentry-element": "Trash2",
                                "data-sentry-source-file": "CartNotes.tsx"
                            })
                        })]
                    })]
                })
            }),
            K = () => e.jsxs("div", {
                className: "border-base rounded-md h-[70px] w-full px-2 py-3 space-y-2",
                "data-sentry-component": "cartNoteSkeleton",
                "data-sentry-source-file": "CartNotes.tsx",
                children: [e.jsx("div", {
                    className: "skeleton-loader h-[16px] rounded-md w-2/5"
                }), e.jsx("div", {
                    className: "skeleton-loader h-[14px] rounded-md w-full"
                })]
            }),
            O = () => {
                var l, T;
                return e.jsx(tt, {
                    id: "cart_notes",
                    ref: s,
                    defaultOpen: !1,
                    titleIcon: e.jsx("div", {
                        className: " text-base"
                    }),
                    titleText: e.jsxs("div", {
                        className: " text-base flex gap-2 items-center",
                        children: [Ge(n.cartNoteConfig.icon), e.jsx("h3", {
                            className: "text-sm font-medium",
                            children: n.cartNoteConfig.title
                        }), n.type === "PAID" && e.jsxs("p", {
                            className: "text-xs text-gray-dark",
                            children: ["(", z((T = (l = n == null ? void 0 : n.cartNoteAddOnData) == null ? void 0 : l.price) == null ? void 0 : T.toString()), ")"]
                        })]
                    }),
                    callbackOnToggle: _ => {
                        c(!1)
                    },
                    buttonClass: "!h-auto !py-3 !rounded-lg",
                    customClass: "!mx-0 !mt-0",
                    accordionIcon: "PLUS",
                    content: e.jsxs("div", {
                        className: "flex flex-col px-3 pb-3 gap-2",
                        children: [e.jsxs("div", {
                            className: "flex w-full flex-col gap-2",
                            children: [e.jsx("textarea", {
                                className: _t("resize-none p-2 border-[1px] border-gray-light rounded-lg text-sm scrollbar-hide", p ? "!border-2 border-ouch" : ""),
                                rows: 5,
                                maxLength: 200,
                                name: "",
                                id: "",
                                value: y,
                                onChange: _ => {
                                    C(!1), d(_.target.value)
                                },
                                placeholder: n.cartNoteConfig.suggestionText
                            }), p && e.jsxs("p", {
                                className: "text-sm text-ouch flex flex-row items-center gap-1",
                                children: [e.jsx(kt, {
                                    size: 14
                                }), a("cart_note_error")]
                            })]
                        }), e.jsxs("div", {
                            className: "flex gap-2",
                            children: [e.jsx("button", {
                                className: "p-2 text-carbon rounded-lg px-3 text-sm",
                                onClick: I,
                                children: a("cancel")
                            }), e.jsx("button", {
                                className: "bg-primary-dark p-2 text-white rounded-lg px-3 text-sm",
                                onClick: () => f("ADD"),
                                children: a("save")
                            })]
                        })]
                    }),
                    "data-sentry-element": "Accordion",
                    "data-sentry-component": "renderCartNoteTile",
                    "data-sentry-source-file": "CartNotes.tsx"
                })
            };
        return e.jsxs("div", {
            "data-sentry-component": "CartNotes",
            "data-sentry-source-file": "CartNotes.tsx",
            children: [r.hasCartNoteAdded && !t && !h && k(), h && K(), L && !h && O()]
        })
    };
export {
    $t as B, Wt as C, Jt as a, zt as b, Kt as c
};
//# sourceMappingURL=cart-components-CVEXMqvK.js.map