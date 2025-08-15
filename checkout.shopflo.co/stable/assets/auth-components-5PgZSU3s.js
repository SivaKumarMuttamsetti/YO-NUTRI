var lt = Object.defineProperty,
    it = Object.defineProperties;
var ct = Object.getOwnPropertyDescriptors;
var De = Object.getOwnPropertySymbols;
var ut = Object.prototype.hasOwnProperty,
    dt = Object.prototype.propertyIsEnumerable;
var Pe = (l, s, n) => s in l ? lt(l, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : l[s] = n,
    we = (l, s) => {
        for (var n in s || (s = {})) ut.call(s, n) && Pe(l, n, s[n]);
        if (De)
            for (var n of De(s)) dt.call(s, n) && Pe(l, n, s[n]);
        return l
    },
    Ae = (l, s) => it(l, ct(s));
var Z = (l, s, n) => new Promise((k, d) => {
    var E = g => {
            try {
                j(n.next(g))
            } catch (m) {
                d(m)
            }
        },
        L = g => {
            try {
                j(n.throw(g))
            } catch (m) {
                d(m)
            }
        },
        j = g => g.done ? k(g.value) : Promise.resolve(g.value).then(E, L);
    j((n = n.apply(l, s)).next())
});
import {
    r as o,
    R as ft,
    j as e
} from "./react-core-C02-NrKc.js";
import {
    M as qe,
    G as ce,
    D as pt,
    a as mt,
    P as ht,
    T as xt,
    b as _t
} from "./common-components-DhcySBak.js";
import {
    c as _e,
    u as Te,
    a as ue,
    b as de,
    d as c,
    e as $e,
    f as be,
    g as Ke,
    h as We,
    s as Xe,
    v as Ye,
    r as ze,
    i as gt,
    j as Tt,
    k as bt,
    l as Nt,
    m as Et,
    n as Ue,
    o as yt,
    F as Re,
    p as Me,
    q as Be,
    t as Ot,
    w as He,
    x as St,
    y as vt,
    z as kt,
    A as ge
} from "./lib-D7WRmHWF.js";
import {
    u as Je
} from "./react-router-dom-C_20INan.js";
import "./sentry-1CVSdSoY.js";
import {
    L as Lt,
    X as jt,
    E as Ge,
    a as It
} from "./react-ui-CLI46-or.js";
import {
    P as Ft,
    i as Ct,
    a as Dt
} from "./react-phone-input-BECxSqfY.js";
import {
    s as Pt,
    w as wt,
    S as At
} from "./assests-8-RYiWy6.js";
(function() {
    try {
        var l = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {},
            s = new l.Error().stack;
        s && (l._sentryDebugIds = l._sentryDebugIds || {}, l._sentryDebugIds[s] = "fea2a5d3-13f4-4490-bb2d-17aa3b81a4e3", l._sentryDebugIdIdentifier = "sentry-dbid-fea2a5d3-13f4-4490-bb2d-17aa3b81a4e3")
    } catch (n) {}
})();
const Ut = ({
        value: l = "",
        OTPLength: s = 4,
        onChange: n,
        autoFocus: k = !1,
        inputType: d = "tel",
        hasError: E,
        inputClassName: L,
        disabled: j,
        disableTheme: g = !1
    }) => {
        const [m, i] = o.useState(0), f = ft.useRef([]), [C, x] = o.useState(!0), D = () => l ? l.toString().split("") : [], y = d === "number" || d === "tel", O = t => {
            const r = t.target;
            if (r && r.value && r.autocomplete === "one-time-code") {
                x(!0);
                const p = r.value.split("").slice(0, s);
                U(p)
            }
        };
        o.useEffect(() => (f.current = f.current.slice(0, s), f.current.forEach(t => {
            t == null || t.addEventListener("input", O)
        }), () => {
            f.current.forEach(t => {
                t == null || t.removeEventListener("input", O)
            })
        }), [s]), o.useEffect(() => {
            var t;
            k && ((t = f.current[0]) == null || t.focus())
        }, [k]);
        const W = t => (y ? !isNaN(Number(t)) : typeof t == "string") && t.trim().length === 1,
            T = t => {
                const {
                    value: r
                } = t.target, p = t.nativeEvent;
                W(r) ? (x(!1), G(r), S(m + 1)) : p.data === null && p.inputType === "deleteContentBackward" && (t.preventDefault(), G(""), S(m - 1))
            },
            N = t => r => {
                i(t), r.target.select()
            },
            H = () => {
                i(m - 1)
            },
            P = t => {
                const r = D();
                switch (t.key) {
                    case "Backspace":
                        t.preventDefault(), G(""), S(m - 1);
                        break;
                    case "Delete":
                        t.preventDefault(), G("");
                        break;
                    case "ArrowLeft":
                        t.preventDefault(), S(m - 1);
                        break;
                    case "ArrowRight":
                        t.preventDefault(), S(m + 1);
                        break;
                    case r[m]:
                        t.preventDefault(), S(m + 1);
                        break;
                    case "Spacebar":
                        t.preventDefault();
                        break;
                    case "Space":
                        t.preventDefault();
                        break;
                    case "ArrowUp":
                        t.preventDefault();
                        break;
                    case "ArrowDown":
                        t.preventDefault();
                        break
                }
            },
            S = t => {
                var p, R;
                const r = Math.max(Math.min(s - 1, t), 0);
                f.current[r] && ((p = f.current[r]) == null || p.focus(), (R = f.current[r]) == null || R.select(), i(r), x(!(r >= 1)))
            },
            G = t => {
                const r = D();
                r[m] = t[0], U(r)
            },
            U = t => {
                const r = t.join("");
                n(r)
            },
            v = t => {
                var X;
                t.preventDefault();
                const r = D();
                let p = m;
                const R = t.clipboardData.getData("text/plain").slice(0, s - m).split("");
                if (!(y && R.some(M => isNaN(Number(M))))) {
                    for (let M = 0; M < s; ++M) M >= m && R.length > 0 && (r[M] = (X = R.shift()) != null ? X : "", p++);
                    S(p + R.length), U(r)
                }
            },
            V = o.useMemo(() => {
                var r;
                const t = [];
                for (let p = 0; p < 4; p++) t.push(e.jsx("input", {
                    className: _e(`box-border	h-[3.8rem] w-full  rounded-2xl border-[1px] border-solid text-center text-[1.5rem] text-carbon-dark
           focus:w-[calc(65%)] focus:border-[1px] focus:px-[16px] focus:outline-none focus:ring-[2px] `, g ? "focus:border-black focus:ring-[1px] focus:ring-black" : "focus:border-primary-dark focus:ring-primary-light", E ? "border-ouch" : "border-gray-light", L != null ? L : ""),
                    id: `flo__auth__otpInputField${p+1}`,
                    value: (r = D()[p]) != null ? r : "",
                    ref: R => f.current[p] = R,
                    onChange: T,
                    onKeyDown: P,
                    onFocus: N(p),
                    onBlur: H,
                    type: "tel",
                    onPaste: v,
                    disabled: j,
                    autoFocus: p === 0 && k,
                    "data-testid": "input",
                    autoComplete: C ? "one-time-code" : "off"
                }, p));
                return t
            }, [D, s, L, m, T, P, v, N, j, k, E, d, C]);
        return e.jsx("div", {
            className: "flex w-full items-center justify-center gap-2",
            "data-testid": "otp-input-root",
            "data-sentry-component": "OTPInput",
            "data-sentry-source-file": "OTPInput.tsx",
            children: V
        })
    },
    Qe = ({
        handleSubmit: l,
        otpValue: s,
        handleChange: n,
        validateOtp: k,
        handleResendOtp: d,
        error: E,
        errorMessage: L,
        isLoading: j,
        otpLength: g,
        disabled: m = !1,
        autoFocus: i = !0,
        otpCounter: f,
        otpCounterExpired: C,
        headerComponent: x,
        emailValidation: D = !1,
        showLoginConsent: y = !1,
        context: O = "auth",
        showSecuredByShopflo: W = !1,
        disableResend: T = !1
    }) => {
        const {
            t: N
        } = Te(), {
            sendAnalyticsEvent: H
        } = ue(), {
            state: {
                merchant: P
            }
        } = de(), [S, G] = o.useState(!0), U = O === "auth" || O === "sso", v = O === "cart", V = O === "sso";
        return e.jsxs(e.Fragment, {
            children: [x, e.jsxs("form", {
                onSubmit: () => l(k),
                className: "flex w-full flex-col items-center ",
                children: [e.jsx(Ut, {
                    OTPLength: 4,
                    disabled: m || T,
                    value: s,
                    onChange: n,
                    hasError: E && !j || !1,
                    autoFocus: i,
                    inputType: "tel",
                    disableTheme: O === "sso",
                    "data-sentry-element": "OTPInput",
                    "data-sentry-source-file": "OTPForm.tsx"
                }), e.jsxs("p", {
                    className: `${y&&!v?"my-3":"mt-3"} text-xs font-normal ${E&&!j?"text-ouch":"text-coal-light"}`,
                    children: [E && !j ? L : null, !E && y && !v ? N("otp_incorrect_login") : null, !E && !y && U ? N("otp_incorrect") : null, !E && !y && O === "cod" ? N("enter_otp_to_place_order") : null]
                }), y && e.jsx("div", {
                    className: "flex cursor-pointer items-center gap-1 text-xs font-medium text-coal-light",
                    onClick: () => {
                        H({
                            eventName: S ? c.FLO_COOKIE_LOGIN_DISABLED : c.FLO_COOKIE_LOGIN_ENABLED,
                            eventType: "click"
                        }), G(!S)
                    },
                    children: e.jsx(qe, {})
                }), e.jsxs("div", {
                    className: `${O==="cod"?"mt-2":"mt-4"} mb-2 flex w-full flex-col items-center`,
                    children: [e.jsx("div", {
                        className: O !== "cod" ? "px-3 pb-3" : C ? "" : "py-3",
                        children: e.jsxs("p", {
                            className: "text-sm font-normal text-coal-light",
                            children: [f > 0 && !T ? `${N("resend_otp_timer")} 00:${f<10?`0${f}`:f}` : null, C && D ? "" : null, C && !D && (U || v) ? `${N("resend_otp_via")}` : null]
                        })
                    }), C && e.jsxs(e.Fragment, {
                        children: [D && e.jsx(e.Fragment, {
                            children: e.jsx(ce, {
                                buttonText: N("resend_otp"),
                                isDisabled: T,
                                className: "flex items-center justify-center gap-1 rounded-lg border p-2 text-sm font-normal text-coal-dark",
                                onClick: t => {
                                    t.preventDefault(), d("EMAIL")
                                }
                            })
                        }), !D && (U || v) && e.jsxs("div", {
                            className: "flex gap-2",
                            children: [e.jsx(ce, {
                                buttonText: N("send_via_sms"),
                                isDisabled: T,
                                className: "flex items-center justify-center gap-1 rounded-lg border p-2 text-sm font-normal",
                                iconComponent: e.jsx("img", {
                                    src: Pt,
                                    alt: "SMS Logo"
                                }),
                                onClick: t => {
                                    t.preventDefault(), d("SMS")
                                }
                            }), !V && e.jsx(ce, {
                                buttonText: N("send_via_whatsapp"),
                                isDisabled: T,
                                className: "flex items-center justify-center gap-1 rounded-lg border p-2 text-sm font-normal",
                                iconComponent: e.jsx("img", {
                                    src: wt,
                                    alt: "Whatsapp Logo"
                                }),
                                onClick: t => {
                                    t.preventDefault(), d("WHATSAPP")
                                }
                            })]
                        }), !D && O === "cod" && e.jsx("div", {
                            children: e.jsx(ce, {
                                buttonText: N("resend_otp"),
                                isDisabled: T,
                                className: "my-4 flex items-center justify-center gap-1 rounded-lg border p-2 text-sm font-normal text-coal-dark",
                                onClick: t => {
                                    t.preventDefault(), d("SMS")
                                }
                            })
                        })]
                    }), O === "cod" && e.jsx("p", {
                        className: "mb-4 mt-2 text-center text-xs text-coal-dark",
                        children: N("cod_otp_footer_message")
                    }), W && e.jsxs("div", {
                        className: "mt-2 flex flex-row items-center space-x-1",
                        children: [e.jsx(Lt, {
                            className: "h-3 w-3 text-coal-light",
                            strokeWidth: 3
                        }), e.jsx("span", {
                            className: "text-[10px] font-normal text-coal-light",
                            children: "Secured by "
                        }), e.jsx("a", {
                            href: "https://shopflo.com",
                            className: "font-bold",
                            target: "_blank",
                            rel: "noreferrer",
                            children: e.jsx("img", {
                                src: At,
                                className: "h-3",
                                alt: "shopflo-logo"
                            })
                        })]
                    })]
                })]
            })]
        })
    },
    Xt = ({
        setIsOpen: l,
        setIsVerified: s,
        loyaltyData: n,
        refreshLoyalty: k
    }) => {
        var X, M, re;
        const [d] = Je(), {
            sendAnalyticsEvent: E
        } = ue(), {
            state: {
                user: L
            }
        } = $e(), {
            state: {
                merchant: j
            }
        } = de(), {
            t: g
        } = Te(), {
            state: {
                shopifySessionId: m
            }
        } = be(), [i, f] = o.useState(!1), [C, x] = o.useState(-1), [D, y] = o.useState(!1), [O, W] = o.useState(0), [T, N] = o.useState(0), [H, P] = o.useState(""), {
            generateReCaptchaToken: S
        } = Ke(), {
            handleSubmit: G,
            setValueOf: U,
            setErrors: v,
            state: {
                values: V,
                errors: t
            }
        } = We({
            initialState: {
                otp: ""
            },
            validationSchema: {
                otp: {
                    required: g("enter_your_otp"),
                    numeric: g("otp_incorrect"),
                    length: {
                        limit: 4,
                        message: g("otp_incorrect")
                    },
                    formatters: ["NUMERIC"]
                }
            }
        });
        o.useEffect(() => {
            r()
        }, []), o.useEffect(() => {
            C === 0 && y(!0);
            const I = C > 0 && setInterval(() => x(C - 1), 1e3);
            return () => clearInterval(I)
        }, [C]);
        const r = () => Z(void 0, null, function*() {
                var I, F, u;
                try {
                    f(!0), v({
                        otp: {
                            status: !1,
                            showAlert: !1
                        }
                    }), U("otp", "");
                    let _ = {
                        identifier: (I = n == null ? void 0 : n.email) != null ? I : "",
                        merchantId: (F = j == null ? void 0 : j.merchantId) != null ? F : "",
                        userId: L == null ? void 0 : L.uid,
                        forceVerification: !0
                    };
                    const fe = yield S("login"), te = yield Xe(_, {
                        context: "AUTH"
                    }, fe);
                    if (x(30), y(!1), W(pe => pe + 1), f(!1), !te) return;
                    P(te.context_id)
                } catch (_) {
                    f(!1), ((u = _ == null ? void 0 : _.response) == null ? void 0 : u.status) === 400 && v({
                        phoneNumber: {
                            status: !0,
                            message: g("invalid_email")
                        }
                    })
                }
            }),
            p = I => Z(void 0, null, function*() {
                var F;
                if (!(I && (I == null ? void 0 : I.length) !== 4)) {
                    v({
                        otp: {
                            status: !1
                        }
                    }), f(!0);
                    try {
                        E({
                            eventName: c.FLO_AUTH_OTP_ENTERED,
                            eventType: "click"
                        }), yield Ye(H, I, !0, {
                            bureau_event_id: (F = d.get("bureau_event_id")) != null ? F : ""
                        }), s(!0), f(!1), k(), l(!1)
                    } catch (u) {
                        f(!1), v({
                            otp: {
                                status: !0,
                                message: g("otp_incorrect")
                            }
                        }), N(_ => _ + 1)
                    }
                }
            }),
            R = I => Z(void 0, null, function*() {
                f(!0), E({
                    eventName: c.FLO_AUTH_OTP_RESEND,
                    eventType: "click"
                }), U("otp", "");
                try {
                    yield ze(H, I), x(30), y(!1), W(F => F + 1)
                } catch (F) {
                    console.error(F)
                }
                v({
                    otp: {
                        status: !1
                    }
                }), f(!1)
            });
        return o.useEffect(() => {
            V.otp && V.otp.length === 4 && p(V.otp)
        }, [V.otp]), e.jsxs(e.Fragment, {
            children: [e.jsx(pt, {
                "data-sentry-element": "DialogHeader",
                "data-sentry-source-file": "OTPDialog.tsx",
                children: e.jsxs("div", {
                    className: "flex h-full w-full flex-row items-center justify-between ",
                    children: [e.jsxs("h1", {
                        className: "text-base font-medium",
                        children: [" ", g("confirm_email")]
                    }), e.jsx("button", {
                        className: "outline-none",
                        children: e.jsx(jt, {
                            className: "h-6 w-6 cursor-pointer text-coal-dark",
                            onClick: () => l(!1),
                            "data-sentry-element": "X",
                            "data-sentry-source-file": "OTPDialog.tsx"
                        })
                    })]
                })
            }), e.jsx(mt, {
                "data-sentry-element": "DialogBody",
                "data-sentry-source-file": "OTPDialog.tsx",
                children: e.jsx("div", {
                    className: "px-5",
                    children: e.jsx(Qe, {
                        isLoading: !!(i || i),
                        otpLength: 4,
                        otpValue: (X = V.otp) != null ? X : "",
                        handleSubmit: G(p),
                        handleChange: I => {
                            var F;
                            U("otp", I), (F = t == null ? void 0 : t.otp) != null && F.status && v({
                                otp: {
                                    status: !1
                                }
                            })
                        },
                        validateOtp: p,
                        handleResendOtp: R,
                        error: ((M = t == null ? void 0 : t.otp) == null ? void 0 : M.status) || !1,
                        errorMessage: ((re = t == null ? void 0 : t.otp) == null ? void 0 : re.message) || "",
                        autoFocus: !0,
                        otpCounter: C,
                        otpCounterExpired: D,
                        emailValidation: !0,
                        headerComponent: e.jsx("div", {
                            className: "flex w-full flex-row items-center justify-center pb-5",
                            children: e.jsxs("h1", {
                                className: "text-sm font-normal text-coal-dark",
                                children: [g("verify_otp_header"), " ", n == null ? void 0 : n.email]
                            })
                        }),
                        "data-sentry-element": "OTPForm",
                        "data-sentry-source-file": "OTPDialog.tsx"
                    })
                })
            })]
        })
    };
let xe = 1,
    Ve = !1;
const Rt = ({
        context: l
    }) => {
        var Ne, Ee, ye, Oe, Se, ve, ke, Le, je, Ie, Fe, Ce;
        const {
            t: s
        } = Te(), {
            state: {
                thirdPartyAuth: n
            },
            actions: {
                login: k
            }
        } = gt(), {
            state: {
                user: d
            },
            actions: {
                setUserLoginType: E,
                updateUser: L
            }
        } = $e(), {
            state: {
                checkoutView: j,
                originUrl: g,
                checkoutLoading: m
            }
        } = be(), {
            state: {
                merchant: i
            }
        } = de(), {
            state: {
                popup: f
            }
        } = Tt(), {
            state: {
                isValidating: C
            }
        } = bt(), {
            sendAnalyticsEvent: x
        } = ue(), {
            generateReCaptchaToken: D
        } = Ke(), [y] = Je(), O = !!y.get("fromCart"), W = !!y.get("shouldLoginToShopify"), [T, N] = o.useState(!1), [H, P] = o.useState(!1), [S, G] = o.useState(-1), [U, v] = o.useState(!1), [V, t] = o.useState(!1), [r, p] = o.useState(""), [R, X] = o.useState(!1), [M, re] = o.useState(""), [I, F] = o.useState(!1), u = l === "SSO", _ = o.useMemo(() => i == null ? void 0 : i.isMarketingPopupEnabled, [i == null ? void 0 : i.isMarketingPopupEnabled]), {
            currentText: fe
        } = Nt([s("logging you in"), s("fetching best offers"), s("almost there")]), {
            handleSubmit: te,
            inputProps: pe,
            setValueOf: le,
            setErrors: ee,
            handleFieldChange: Ze,
            state: {
                values: b,
                errors: w
            }
        } = We({
            initialState: T ? {
                otp: ""
            } : {
                phoneNumber: ""
            },
            validationSchema: T ? {
                otp: {
                    required: s("enter_your_otp"),
                    numeric: s("otp_incorrect"),
                    length: {
                        limit: 4,
                        message: s("otp_incorrect")
                    },
                    formatters: ["NUMERIC"]
                }
            } : {
                phoneNumber: {
                    required: s("invalid_phone_number"),
                    phone: s("invalid_phone_number"),
                    formatters: ["PHONE"]
                }
            }
        });
        o.useEffect(() => {
            S === 0 && v(!0);
            const a = S > 0 && setInterval(() => G(S - 1), 1e3);
            return () => clearInterval(a)
        }, [S]), o.useEffect(() => {
            d != null && d.phone && le("phoneNumber", d == null ? void 0 : d.phone)
        }, [d]);
        const me = a => Z(void 0, null, function*() {
                var q;
                if (a && (a == null ? void 0 : a.length) !== 4) return;
                ee({
                    otp: {
                        status: !1
                    }
                }), P(!0);
                let B = new Date().getTime(),
                    A;
                try {
                    u && _ && F(!0), x({
                        eventName: u ? c.FLO_SSO_OTP_ENTERED : c.FLO_AUTH_OTP_ENTERED,
                        eventType: "load"
                    });
                    const h = yield Ye(r, a, void 0, {
                        bureau_event_id: (q = y.get("bureau_event_id")) != null ? q : ""
                    });
                    u && _ && x({
                        eventName: c.FLO_SSO_OTP_VERIFIED,
                        eventType: "load"
                    }), A = new Date().getTime();
                    const $ = h == null ? void 0 : h.access_token,
                        Y = h == null ? void 0 : h.access_token_expires_at,
                        z = h == null ? void 0 : h.refresh_token,
                        K = h == null ? void 0 : h.refresh_token_expires_at;
                    if (P(!1), k($, z, Y, K, O || u && _), L(), u) {
                        if (_) {
                            x({
                                eventName: c.FLO_SSO_LOGIN_COMPLETED,
                                eventType: "load"
                            }), Me(Be.FLO_SSO_TOKEN_RECEIVED, {
                                accessToken: $,
                                refreshToken: z,
                                accessTokenExpiry: Y,
                                refreshTokenExpiry: K,
                                phoneNumber: b == null ? void 0 : b.phoneNumber,
                                shouldLoginToShopify: W
                            });
                            const J = A - B;
                            setTimeout(() => {
                                Me(Be.FLO_MARKETING_POPUP_CLOSED, {
                                    shouldLoginToShopify: W
                                }), F(!1)
                            }, Math.min(2e3, 5e3 - J))
                        }
                        return
                    }
                    E(c.FLO_RETURN_USER_LOGIN), x({
                        eventName: c.FLO_RETURN_USER_LOGIN,
                        eventType: "flo_action",
                        metaData: {
                            userData: {
                                type: c.FLO_RETURN_USER_LOGIN
                            },
                            authSource: "SHOPFLO"
                        }
                    })
                } catch (h) {
                    P(!1), F(!1), ee({
                        otp: {
                            status: !0,
                            message: s("otp_incorrect")
                        }
                    })
                }
            }),
            et = B => Z(void 0, [B], function*({
                phoneNumber: a
            }) {
                var A, q, h, $, Y, z;
                if (!(Ct(a) && Dt(a))) {
                    He(s("invalid_phone"));
                    return
                }
                try {
                    P(!0), ee({
                        phoneNumber: {
                            status: !1
                        },
                        otp: {
                            status: !1,
                            showAlert: !1
                        }
                    }), le("otp", "");
                    let K = {
                            identifier: kt(a),
                            merchantId: (A = i == null ? void 0 : i.merchantId) != null ? A : "",
                            domain: St() ? g : (q = vt) == null ? void 0 : q.CHECKOUT_HOST
                        },
                        J, ae = {
                            context: "AUTH"
                        };
                    u && (J = y.get("request-id"), J && (ae = {
                        context: "SSO",
                        requestId: J
                    }));
                    const ne = yield D("login"), Q = yield Xe(K, ae, ne);
                    if (G(30), v(!1), P(!1), !Q) return;
                    const ie = (h = Q.otp_required) != null ? h : Q.existing_customer;
                    if (p(Q.context_id), x({
                            eventName: u ? c.FLO_SSO_PHONE_ADDED : c.FLO_AUTH_PHONE_ENTERED,
                            eventType: u ? "load" : "click",
                            metaData: {
                                userType: ie ? "repeat" : "guest"
                            }
                        }), !ie) {
                        const he = ($ = Q.token) == null ? void 0 : $.access_token,
                            oe = (Y = Q.token) == null ? void 0 : Y.access_token_expires_at;
                        k(he, "", oe, void 0, O), L(), E(c.FLO_GUEST_LOGIN), x({
                            eventName: c.FLO_GUEST_LOGIN,
                            eventFor: [ge.SF_ANALYTICS],
                            eventType: "flo_action",
                            metaData: {
                                userData: {
                                    type: c.FLO_GUEST_LOGIN
                                },
                                authSource: "SHOPFLO"
                            }
                        });
                        return
                    }
                    y.set("phone", a), N(!0), x({
                        eventName: u ? c.FLO_SSO_OTP_LOADED : c.FLO_AUTH_OTP_LOADED,
                        eventType: "load"
                    })
                } catch (K) {
                    P(!1), ((z = K == null ? void 0 : K.response) == null ? void 0 : z.status) === 400 ? ee({
                        phoneNumber: {
                            status: !0,
                            message: s("invalid_phone_number")
                        }
                    }) : He(s("otp_fetch_failed"))
                }
            }),
            tt = a => Z(void 0, null, function*() {
                P(!0), x({
                    eventName: u ? c.FLO_SSO_OTP_RESEND : c.FLO_AUTH_OTP_RESEND,
                    eventType: "click"
                }), le("otp", "");
                try {
                    yield ze(r, a), G(30), v(!1)
                } catch (B) {
                    console.error(B)
                }
                ee({
                    otp: {
                        status: !1
                    }
                }), P(!1)
            }),
            st = () => {
                var B, A, q, h;
                return u ? _ && (A = (B = f == null ? void 0 : f.primaryCTA) == null ? void 0 : B.text) != null ? A : s("verify_otp") : m ? "" : (h = (q = i == null ? void 0 : i.primaryCtaConfig) == null ? void 0 : q.find($ => $.type === j)) == null ? void 0 : h.ctaText
            },
            at = o.useCallback(() => Z(void 0, null, function*() {
                var B, A, q, h, $, Y, z, K, J, ae;
                if (!M) {
                    se();
                    return
                }
                let a;
                try {
                    if (a = yield Et(`/auth-callback/${M}/status`, "AUTH"), a.status === "VERIFIED") {
                        se();
                        const ne = (A = (B = a == null ? void 0 : a.metadata) == null ? void 0 : B.token_response) == null ? void 0 : A.access_token,
                            Q = (h = (q = a == null ? void 0 : a.metadata) == null ? void 0 : q.token_response) == null ? void 0 : h.access_token_expires_at,
                            ie = (Y = ($ = a == null ? void 0 : a.metadata) == null ? void 0 : $.token_response) == null ? void 0 : Y.refresh_token,
                            he = (K = (z = a == null ? void 0 : a.metadata) == null ? void 0 : z.token_response) == null ? void 0 : K.refresh_token_expires_at,
                            oe = (ae = (J = a == null ? void 0 : a.metadata) == null ? void 0 : J.token_response) == null ? void 0 : ae.existing_user;
                        k(ne, ie, Q, he, O), L(), E(oe ? c.FLO_RETURN_USER_LOGIN : c.FLO_GUEST_LOGIN), x({
                            eventName: oe ? c.FLO_RETURN_USER_LOGIN : c.FLO_GUEST_LOGIN,
                            eventType: "flo_action",
                            metaData: {
                                userData: {
                                    type: oe ? c.FLO_RETURN_USER_LOGIN : c.FLO_GUEST_LOGIN
                                },
                                authSource: "TRUECALLER"
                            }
                        });
                        return
                    }
                    if (a.status === "FAILED" || a.status === "USER_REJECTED") {
                        se();
                        return
                    }
                    if (xe >= 30) {
                        se();
                        return
                    }
                    xe++
                } catch (ne) {
                    console.error(ne), se()
                } finally {
                    x({
                        eventName: c.FLO_TRUECALLER_ACTION,
                        eventType: "flo_action",
                        metaData: {
                            action: {
                                type: a == null ? void 0 : a.status
                            }
                        }
                    })
                }
            }), [M]),
            nt = () => {
                var A;
                if (t(!0), (A = b == null ? void 0 : b.phoneNumber) != null && A.length || !(n != null && n.length) || Ve) return;
                const a = n[0];
                if (!a) return;
                switch (a.provider) {
                    case "TRUECALLER":
                        {
                            re(a.requestId),
                            Ve = !0,
                            Ot(a.redirectUrl),
                            X(!0);
                            break
                        }
                }
            },
            se = () => {
                xe = 1, X(!1)
            },
            ot = o.useMemo(() => {
                if (u && !T && _) return null;
                if (u && !T) return e.jsx("h2", {
                    className: "text-center text-base font-medium text-coal-dark",
                    children: s("sso_login_header", {
                        merchant_name: i == null ? void 0 : i.displayName
                    })
                })
            }, [u, T, i == null ? void 0 : i.displayName, s]),
            rt = o.useMemo(() => {
                if (u) return e.jsxs("div", {
                    className: "flex w-full flex-row items-center justify-center space-x-2",
                    children: [e.jsxs("h1", {
                        className: "space-x-2 text-sm font-normal text-coal-light",
                        children: [e.jsx("span", {
                            children: s("verify_otp_header")
                        }), e.jsx("span", {
                            className: "font-medium text-coal-dark",
                            children: Ue(b.phoneNumber)
                        })]
                    }), e.jsx("button", {
                        onClick: () => N(!1),
                        children: e.jsx(Ge, {
                            className: "h-4 w-4 text-coal-dark"
                        })
                    })]
                })
            }, [u, T, b.phoneNumber, s]);
        return o.useMemo(() => u && _ && H, [u, _, H]), o.useEffect(() => {
            b.otp && b.otp.length === 4 && me(b.otp)
        }, [b.otp]), yt(at, R ? 1500 : null), o.useEffect(() => {
            T && u && _ && x({
                eventName: c.FLO_SSO_OTP_PAGE_LOADED,
                eventType: "load"
            })
        }, [T]), e.jsxs(e.Fragment, {
            children: [ot, T ? e.jsx(e.Fragment, {
                children: e.jsx("div", {
                    className: _e("flex flex-col gap-5 rounded-xl  p-3", u && !_ ? "border border-gray-light" : "pb-0"),
                    children: I ? e.jsxs("div", {
                        className: "flex h-full w-full items-center justify-center flex-col space-y-4",
                        children: [e.jsx(It, {
                            className: "spin-fast"
                        }), e.jsx("span", {
                            className: "text-xs",
                            children: fe
                        })]
                    }) : e.jsxs(e.Fragment, {
                        children: [rt, e.jsx(Qe, {
                            isLoading: H,
                            otpLength: 4,
                            otpValue: (Ne = b.otp) != null ? Ne : "",
                            handleSubmit: te(me),
                            handleChange: a => {
                                var B;
                                le("otp", a), (B = w == null ? void 0 : w.otp) != null && B.status && ee({
                                    otp: {
                                        status: !1
                                    }
                                })
                            },
                            validateOtp: me,
                            handleResendOtp: tt,
                            error: ((Ee = w == null ? void 0 : w.otp) == null ? void 0 : Ee.status) || !1,
                            errorMessage: s(u ? "otp_incorrect_login_sso" : "otp_incorrect_login"),
                            autoFocus: !0,
                            otpCounter: S,
                            otpCounterExpired: U,
                            emailValidation: !1,
                            showLoginConsent: l !== "SSO",
                            headerComponent: l === "AUTH" ? e.jsxs("div", {
                                className: "flex w-full flex-row items-center justify-between",
                                children: [e.jsxs("h1", {
                                    className: "text-sm font-normal text-coal-dark",
                                    children: [s("verify_otp_header"), e.jsx("span", {
                                        className: "pl-1 font-medium",
                                        children: Ue(b.phoneNumber)
                                    })]
                                }), e.jsx("button", {
                                    className: "rounded-lg p-2",
                                    onClick: () => N(!1),
                                    children: e.jsx(Ge, {
                                        className: "h-4 w-4 text-coal-dark"
                                    })
                                })]
                            }) : null,
                            context: u ? "sso" : "auth"
                        })]
                    })
                })
            }) : e.jsx(e.Fragment, {
                children: e.jsxs("form", {
                    onSubmit: te(et),
                    className: "flex w-full flex-col items-center",
                    children: [e.jsx(Ft, Ae(we({
                        defaultCountry: "IN"
                    }, pe(Re.phoneNumber, {
                        onChange: a => {
                            Ze(Re.phoneNumber, a)
                        },
                        onFocus: () => nt(),
                        onBlur: () => {
                            t(!1)
                        }
                    })), {
                        value: (Oe = (ye = b == null ? void 0 : b.phoneNumber) != null ? ye : d == null ? void 0 : d.phone) != null ? Oe : "",
                        countries: (Se = i == null ? void 0 : i.addressConfig) == null ? void 0 : Se.enabledCountries,
                        id: "flo__auth__phoneInput",
                        smartCaret: !1,
                        className: _e("placeholder-sm peer w-full appearance-none  border border-gray-light px-3 text-base placeholder-transparent bg-white", (ve = w.phoneNumber) != null && ve.status ? "border-ouch" : "", (ke = b == null ? void 0 : b.phoneNumber) != null && ke.length && !((Le = w == null ? void 0 : w.phoneNumber) != null && Le.status) ? "border-[#D5E7DB]" : "", V ? u ? "border-primary-dark border px-[12px] shadow-[0px_0px_4px_0px_#00000040] outline-none ring-[1px] ring-primary-dark" : "ring-primary-light` border-[1px] !border-primary-dark px-[12px] outline-none ring-[2px]" : "", _ ? "rounded-xl h-12 !font-medium" : "rounded-xl h-[3.5rem]"),
                        placeholder: s("phone_number"),
                        international: !0,
                        countryCallingCodeEditable: !1,
                        autoFocus: !0,
                        limitMaxLength: !0,
                        error: (je = w.phoneNumber) == null ? void 0 : je.message
                    })), e.jsx("p", {
                        className: `mt-1 w-full px-3 text-center font-normal ${(Ie=w.phoneNumber)!=null&&Ie.status?"self-start text-sm text-ouch":"text-xs text-coal-light"}`,
                        children: ((Fe = w.phoneNumber) == null ? void 0 : Fe.status) && ((Ce = w.phoneNumber) == null ? void 0 : Ce.message)
                    }), e.jsx("div", {
                        className: "mt-3 w-full",
                        children: e.jsx(ht, {
                            type: "submit",
                            buttonText: st(),
                            height: _ ? "h-10" : "h-14",
                            isLoading: u ? H : H || m,
                            isDisabled: C,
                            isCheckout: !1,
                            showTerms: !1,
                            borderRadius: _ ? "rounded-xl" : "rounded-2xl",
                            id: "flo__auth__loginButton"
                        })
                    }), e.jsx("div", {
                        children: e.jsx(qe, {})
                    })]
                })
            })]
        })
    },
    Yt = ({}) => {
        var k, d;
        o.useRef(!1);
        const {
            sendAnalyticsEvent: l
        } = ue(), {
            actions: {
                setCheckoutView: s
            }
        } = be(), {
            state: {
                merchant: n
            }
        } = de();
        return o.useEffect(() => {
            n != null && n.merchantId && l({
                eventName: c.FLO_AUTH_PHONE_LOADED,
                eventFor: [ge.SF_ANALYTICS, ge.FACEBOOK_PIXEL],
                eventType: "load"
            }), s("AUTH")
        }, [n == null ? void 0 : n.merchantId]), e.jsxs(e.Fragment, {
            children: [e.jsx(Rt, {
                context: "AUTH",
                "data-sentry-element": "Login",
                "data-sentry-source-file": "MultiFactorAuthentication.tsx"
            }), e.jsx(xt, {
                "data-sentry-element": "TrustBadges",
                "data-sentry-source-file": "MultiFactorAuthentication.tsx"
            }), e.jsx(_t, {
                "data-sentry-element": "TermsConditions",
                "data-sentry-source-file": "MultiFactorAuthentication.tsx"
            }), !!((k = n == null ? void 0 : n.customBanners) != null && k.auth) && e.jsx(e.Fragment, {
                children: e.jsx("img", {
                    src: (d = n == null ? void 0 : n.customBanners) == null ? void 0 : d.auth,
                    alt: "custom-banner-auth",
                    className: "mt-6 aspect-[33/10] max-h-[6.625rem] w-full max-w-[22rem]"
                })
            })]
        })
    };
export {
    Rt as L, Yt as M, Qe as O, Xt as a
};
//# sourceMappingURL=auth-components-5PgZSU3s.js.map