const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/assests-8-RYiWy6.js", "assets/i18next-BW2i0xjm.js", "assets/vendor-DWBJvUkq.js", "assets/sentry-1CVSdSoY.js", "assets/react-core-C02-NrKc.js", "assets/index-BpOda8Pq.js", "assets/common-components-DhcySBak.js", "assets/headless-BLCsrzy4.js", "assets/react-ui-CLI46-or.js", "assets/ui-BLvhcVBj.js", "assets/vendor-styling-BudEvoL3.js", "assets/ui-caN0dIsm.css", "assets/components-DLiBXlgf.js", "assets/checkout-components-CDs-GsFA.js", "assets/react-router-dom-C_20INan.js", "assets/react-i18next-_5H4tnk_.js", "assets/auth-components-5PgZSU3s.js", "assets/react-phone-input-BECxSqfY.js", "assets/react-phone-input-BqJ5I0DP.css", "assets/framer-wRdAwo6I.js", "assets/js-cookie-CQriODbm.js", "assets/upsell-components-CqnOSKal.js", "assets/page-cart-DP1yjkIR.js", "assets/cart-components-CVEXMqvK.js", "assets/page-main-checkout-D3bPWflK.js", "assets/react-hot-toast-m96sdbVs.js", "assets/axios-b0nqz2WE.js", "assets/bowser-BIXXHWb5.js", "assets/jwt-decode-Dpc-sDrx.js", "assets/nanoid-DGvJWMFP.js", "assets/assests-D_r7UeVI.css"]))) => i.map(i => d[i]);
var Vs = Object.defineProperty,
    Gs = Object.defineProperties;
var Ys = Object.getOwnPropertyDescriptors;
var Go = Object.getOwnPropertySymbols;
var $s = Object.prototype.hasOwnProperty,
    Ws = Object.prototype.propertyIsEnumerable;
var yn = (e, t, n) => t in e ? Vs(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    _ = (e, t) => {
        for (var n in t || (t = {})) $s.call(t, n) && yn(e, n, t[n]);
        if (Go)
            for (var n of Go(t)) Ws.call(t, n) && yn(e, n, t[n]);
        return e
    },
    m = (e, t) => Gs(e, Ys(t));
var jt = (e, t, n) => yn(e, typeof t != "symbol" ? t + "" : t, n);
var K = (e, t, n) => new Promise((r, o) => {
    var s = l => {
            try {
                a(n.next(l))
            } catch (E) {
                o(E)
            }
        },
        i = l => {
            try {
                a(n.throw(l))
            } catch (E) {
                o(E)
            }
        },
        a = l => l.done ? r(l.value) : Promise.resolve(l.value).then(s, i);
    a((n = n.apply(e, t)).next())
});
import {
    m as Ne,
    r as y,
    u as ct,
    j as Je,
    R as ut
} from "./react-core-C02-NrKc.js";
import {
    j as qs
} from "./vendor-DWBJvUkq.js";
import {
    w as cn,
    i as zs,
    b as js
} from "./sentry-1CVSdSoY.js";
import {
    i as Xs,
    a as Qs
} from "./react-phone-input-BECxSqfY.js";
import {
    u as Tt
} from "./react-router-dom-C_20INan.js";
import {
    t as D,
    i as tn
} from "./i18next-BW2i0xjm.js";
import {
    a as ue
} from "./js-cookie-CQriODbm.js";
import {
    A as Zs,
    _ as Ct
} from "./index-BpOda8Pq.js";
import {
    a as Ye
} from "./axios-b0nqz2WE.js";
import {
    D as Js,
    H as ei,
    J as ti,
    K as ni,
    L as ri,
    M as oi,
    O as si,
    Q as ii,
    V as Yo
} from "./assests-8-RYiWy6.js";
import {
    B as ai
} from "./bowser-BIXXHWb5.js";
import {
    D as Es,
    p as ci
} from "./ui-BLvhcVBj.js";
import {
    u as _i
} from "./react-i18next-_5H4tnk_.js";
import {
    V as lt
} from "./react-hot-toast-m96sdbVs.js";
import {
    A as li
} from "./react-ui-CLI46-or.js";
import {
    j as ui
} from "./jwt-decode-Dpc-sDrx.js";
import {
    n as di
} from "./nanoid-DGvJWMFP.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "50b6ce11-09e7-4454-8883-ffc0608b9f47", e._sentryDebugIdIdentifier = "sentry-dbid-50b6ce11-09e7-4454-8883-ffc0608b9f47")
    } catch (n) {}
})();
const _n = () => {
        const {
            t: e,
            i18n: t
        } = _i();
        return {
            t: e,
            i18n: t
        }
    },
    X = {
        AUTH_COOKIE_CLIENT: "flo_auth",
        REFRESH_TOKEN_COOKIE_CLIENT: "flo_refresh",
        AUTH_LOGGED_OUT: "flo_auth_logged_out",
        AUTH_TOKEN_HEADER_SERVER: "Authorization",
        AUTH_COOKIE_CLIENT_EXPIRY: 1 / 32,
        REFRESH_TOKEN_COOKIE_CLIENT_EXPIRY: 365,
        LOCAL_STORAGE_AUTH_COOKIE_CLIENT_EXPIRY: "flo_auth_expiry",
        LOCAL_STORAGE_REFRESH_TOKEN_COOKIE_CLIENT_EXPIRY: "flo_refresh_expiry",
        ENV_PROD: "production",
        ENV_DEV: "development",
        ENV_TEST: "staging",
        PAYMENT_FAILURE_THRESHOLD: 5,
        FLO_SESSION_ID_XHR_HEADER: "x-shopflo-session",
        FLO_SESSION_ID_COOKIE: "flo_session_id",
        TWO_STEP_AUTH_COOKIE_CLIENT: "flo_two_step_auth",
        ORDER_HISTORY_COOKIE_CLIENT: "flo_order_history",
        CHECKOUT_HOST: "checkout.shopflo.co",
        EXPERIMENT_SELECTED_TEST_GROUP: "flo_experiment_selected_group_id",
        FLO_BUREAU_USER_ID: "FLO_BUREAU_USER_ID"
    },
    De = {
        ANALYTICS: "analytics",
        CLOSE_IFRAME: "CLOSE_IFRAME",
        CLOSE_CART_IFRAME: "CLOSE_CART_IFRAME",
        CLOSE_IFRAME_BUYNOW: "CLOSE_IFRAME_BUYNOW",
        SET_COOKIE: "SET_COOKIE",
        GET_COOKIE: "GET_COOKIE",
        PARENT_REDIRECT: "PARENT_REDIRECT",
        CART_OPEN: "FLO_CART_OPEN",
        CART_UPDATE: "FLO_CART_UPDATE",
        ITEM_UPDATE: "FLO_ITEM_UPDATE",
        COUPONS_UPDATED: "FLO_COUPONS_UPDATED",
        EXIT_CHECKOUT: "FLO_EXIT_CHECKOUT",
        CART_TO_CHECKOUT: "FLO_CART_TO_CHECKOUT",
        CLEAR_CART_AND_CLOSE: "CLEAR_CART_AND_CLOSE",
        LOGOUT_FROM_CHECKOUT: "LOGOUT_FROM_CHECKOUT",
        LOGIN_FROM_CHECKOUT: "LOGIN_FROM_CHECKOUT",
        SSO_LOGIN_CREDENTIALS: "SSO_LOGIN_CREDENTIALS",
        SSO_LOGIN_SUCCESS: "SSO_LOGIN_SUCCESS",
        LOGIN_RE_INIT: "LOGIN_RE_INIT",
        FLO_USER_DETAILS: "FLO_USER_DETAILS",
        FLO_GHOST_USER: "FLO_GHOST_USER",
        FLO_GHOST_USER_ORDER_DATA: "FLO_GHOST_USER_ORDER_DATA",
        GET_ANALYTICS_CONFIG: "GET_ANALYTICS_CONFIG",
        SSO_LOGIN_CHECK: "SSO_LOGIN_CHECK",
        FLO_MARKETING_POPUP_CLOSED: "FLO_MARKETING_POPUP_CLOSED",
        FLO_MARKETING_POPUP_CLOSED_LOGGED_IN: "FLO_MARKETING_POPUP_CLOSED_LOGGED_IN",
        FLO_SSO_TOKEN_RECEIVED: "FLO_SSO_TOKEN_RECEIVED",
        FLO_SSO_TOKEN_RECEIVED_GHOST: "FLO_SSO_TOKEN_RECEIVED_GHOST",
        FLO_SSO_TOKEN_NOT_RECEIVED: "FLO_SSO_TOKEN_NOT_RECEIVED",
        FLO_SSO_LOGIN_ERROR: "FLO_SSO_LOGIN_ERROR",
        FLO_NAME_EMAIL_FORM_SUBMITTED: "FLO_NAME_EMAIL_FORM_SUBMITTED",
        FLO_NAME_EMAIL_FORM_SUBMITTED_SUCCESS: "FLO_NAME_EMAIL_FORM_SUBMITTED_SUCCESS",
        FLO_NAME_EMAIL_FORM_SUBMITTED_FAILED: "FLO_NAME_EMAIL_FORM_SUBMITTED_FAILED",
        OPEN_SSO_LOGIN: "OPEN_SSO_LOGIN",
        OPEN_WISHLIST_PRODUCT: "OPEN_WISHLIST_PRODUCT",
        ADD_TO_CART: "ADD_TO_CART",
        SET_CART_ITEM_COUNT: "SET_CART_ITEM_COUNT",
        REMOVE_CART_LOADING_STATE: "REMOVE_CART_LOADING_STATE",
        CLOSE_ALL_MODALS: "CLOSE_ALL_MODALS",
        FLO_SSO_COUPON_CODE_COPIED: "FLO_SSO_COUPON_CODE_COPIED",
        FLO_CHECKOUT_RUOK_FAILED: "FLO_CHECKOUT_RUOK_FAILED",
        MERCHANT_ATTRIBUTES: "MERCHANT_ATTRIBUTES",
        CLOSE_MERCHANT_SUBSCRIPTION: "CLOSE_MERCHANT_SUBSCRIPTION",
        SET_SEGMENT_ID: "SET_SEGMENT_ID",
        CLOSE_EXPERIMENTS_PREVIEW: "CLOSE_EXPERIMENTS_PREVIEW",
        COPY_TEXT: "COPY_TEXT",
        RECENT_VISITED_VARIANTS: "RECENT_VISITED_VARIANTS",
        CLOSE_RECENT_VISITED_VARIANTS: "CLOSE_RECENT_VISITED_VARIANTS",
        GET_WEBENGAGE_DATA: "GET_WEBENGAGE_DATA",
        SET_WEBENGAGE_DATA: "SET_WEBENGAGE_DATA",
        CART_TO_CUSTOM_CHECKOUT: "CART_TO_CUSTOM_CHECKOUT",
        GET_CLEVERTAP_DATA: "GET_CLEVERTAP_DATA",
        SET_CLEVERTAP_DATA: "SET_CLEVERTAP_DATA",
        FLO_SSO_TOKEN_NOT_RECEIVED_GHOST: "FLO_SSO_TOKEN_NOT_RECEIVED_GHOST",
        FLO_SET_BUREAU_USER_ID: "FLO_SET_BUREAU_USER_ID"
    },
    te = {
        FLO_CHECKOUT_UI_LOADED: "checkout_ui_loaded",
        FLO_ORDER_SUMMARY_BTN_CLICKED: "order_summary_clicked",
        FLO_AUTH_PHONE_LOADED: "login_page_loaded",
        FLO_AUTH_PHONE_ENTERED: "phone_entered",
        FLO_AUTH_OTP_LOADED: "otp_page_loaded",
        FLO_AUTH_OTP_ENTERED: "otp_entered",
        FLO_AUTH_OTP_RESEND: "otp_resend",
        FLO_AUTH_LOGIN_COMPLETED: "login_completed",
        FLO_LOGOUT_BTN_CLICKED: "logged_out",
        FLO_BACK_CLICK: "back_button_clicked",
        FLO_USER_FLOW_INIT: "user_flow_initialized",
        FLO_EXIT_LOGOUT_CLICKED: "exit_logout_clicked",
        FLO_LOGOUT_CLICKED: "logout_clicked",
        FLO_COOKIE_LOGIN_ENABLED: "cookie_login_enabled",
        FLO_COOKIE_LOGIN_DISABLED: "cookie_login_disabled",
        FLO_COUPON_LOADED: "coupons_loaded",
        FLO_COUPON_ENTERED: "coupon_entered",
        FLO_COUPON_SELECTED: "coupon_selected",
        FLO_COUPON_SUCCESS: "coupon_success",
        FLO_COUPON_FAILED: "coupon_failed",
        FLO_COUPON_REMOVED: "coupon_removed",
        FLO_ADDRESSES_LIST_LOADED: "address_list_loaded",
        FLO_ADDRESS_SELECTED: "address_selected",
        FLO_ADDRESS_NEW_FORM_LOADED: "address_new_form_loaded",
        FLO_ADDRESS_NEW_FORM_SUBMITTED: "address_new_form_submitted",
        FLO_ADDRESS_EDIT_FORM_LOADED: "address_edit_form_loaded",
        FLO_ADDRESS_EDIT_FORM_SUBMITTED: "address_edit_form_submitted",
        FLO_DELIVERY_ADDRESS_CHANGE_CLICKED: "delivery_address_button_clicked",
        FLO_ADDRESS_PRIVACY_CLICKED: "adress_privacy_clicked",
        FLO_ADDRESS_CONSENT_ENABLED: "address_consent_enabled",
        FLO_ADDRESS_CONSENT_DISABLED: "address_consent_disabled",
        FLO_BILLING_ADDRESS_EDIT_FORM_LOADED: "billing_address_edit_form_loaded",
        FLO_BILLING_ADDRESS_SUBMITTED: "billing_address_submitted",
        FLO_BILLING_ADDRESS_CHANGE_CLICKED: "billing_address_button_clicked",
        FLO_PAYMENT_LOADED: "payment_page_loaded",
        FLO_PAYMENT_REFRESHED: "payment_page_refreshed",
        FLO_PAYMENT_METHOD_SELECTED: "payment_method_selected",
        FLO_PAYMENT_MODE_SELECTED: "payment_mode_selected",
        FLO_PAYMENT_PG_PAGE_LOADED: "payment_pg_page_loaded",
        FLO_PAYMENT_COMPLETED: "payment_completed_ui",
        FLO_PAYMENT_TILE_SELECTED: "payment_tile_selected",
        FLO_CANCEL_PAYMENT_CLICKED: "cancel_payment_clicked",
        FLO_PAYMENT_CANCEL_CONFIRMATION: "payment_cancel_confirmation",
        FLO_PAYMENT_CANCELLED: "payment_cancelled",
        FLO_PAYMENT_CANCELLED_PAGE_LOADED: "payment_cancelled_page_loaded",
        FLO_TRY_OTHER_METHOD_CLICKED: "try_other_method_clicked",
        FLO_GUEST_LOGIN: "guest_login",
        FLO_RETURN_USER_LOGIN: "return_user_login",
        FLO_COOKIE_LOGIN: "cookie_login",
        FLO_COD_OTP_LOADED: "cod_otp_confirm_loaded",
        FLO_COD_OTP_SENT: "cod_otp_sent",
        FLO_COD_OTP_ENTERED: "cod_otp_entered",
        FLO_COD_OTP_VERIFIED: "cod_otp_verified",
        FLO_COD_OTP_SKIP: "cod_otp_skipped",
        FLO_COD_OTP_RESEND: "cod_otp_resend",
        FLO_COD_CONFIRMATION_LOADED: "cod_confirmation_loaded",
        FLO_COD_CONFIRMED: "cod_confirmed",
        FLO_COD_PREPAID_CLICKED: "cod_prepaid_clicked",
        FLO_TERMS_AND_CONDITIONS: "terms_and_conditions_clicked",
        FLO_PRIVACY_POLICY: "privacy_policy_clicked",
        FLO_SHIPPING_HANDLES_LOADED: "shipping_handles_loaded",
        FLO_SHIPPING_HANDLE_SELECTED: "shipping_handle_selected",
        FLO_EXIT_BANNER_ACTION: "exit_banner_action",
        FLO_TRUECALLER_ACTION: "truecaller_action",
        FLO_TRUST_BADGE_CLICKED: "trust_badge_clicked",
        FLO_STORE_PAGE_VIEW: "store_page_view",
        FLO_SURVEY_FORM_LOADED: "survey_form_loaded",
        FLO_SURVEY_FORM_ANSWERED: "survey_form_answered",
        FLO_SURVEY_FORM_SKIPPED: "survey_form_skipped",
        FLO_CONFIRMATION_NUDGE_LOADED: "confirmation_nudge_loaded",
        FLO_SSO_PAGE_LOADED: "sso_page_loaded",
        FLO_SSO_PHONE_ADDED: "sso_phone_added",
        FLO_SSO_OTP_LOADED: "sso_otp_loaded",
        FLO_SSO_OTP_RESEND: "sso_otp_resend",
        FLO_SSO_OTP_ENTERED: "sso_otp_entered",
        FLO_SSO_OTP_PAGE_LOADED: "sso_otp_page_loaded",
        FLO_SSO_OTP_VERIFIED: "sso_otp_verified",
        FLO_SSO_FORM_LOADED: "sso_form_loaded",
        FLO_SSO_FORM_SUBMITTED: "sso_form_submitted",
        FLO_SSO_POP_CLOSED: "sso_pop_closed",
        FLO_SSO_LOGIN_COMPLETED: "sso_login_completed",
        FLO_SSO_AUTH_LOADED: "sso_auth_loaded",
        FLO_CHECKOUT_CLICKED: "checkout_clicked",
        FLO_ADDED_TO_CART_UI: "added_to_cart_ui",
        FLO_ADDON_ADDED: "addon_added",
        FLO_ADDON_LOADED: "addon_loaded",
        UPSELL_WIDGET_LOADED: "upsell_widget_loaded",
        UPSELL_PRODUCT_ADDED: "upsell_product_added",
        FLO_CHECKOUT_ISSUE_REPORTED: "checkout_issue_reported",
        FLO_CHECKOUT_MILESTONE_REACHED: "checkout_milestone_reached",
        ADDED_TO_WISHLIST: "added_to_wishlist",
        ADDED_FROM_WISHLIST: "added_from_wishlist",
        REMOVED_FROM_WISHLIST: "removed_from_wishlist",
        FLO_ITEMS_SELECTOR_LOADED: "items_selector_loaded",
        FLO_ITEMS_SELECTOR_SUBMITTED: "item_selector_submitted",
        SHIPPING_RATE_FAILURE: "shipping_rate_failure",
        FLO_CART_LOADING_TIME_REACT: "cart_load_time_react"
    },
    I_ = {
        ADDRESS_ISSUE: "address_issue"
    },
    Ue = {
        SF_ANALYTICS: "SHOPFLO_ANALYTICS",
        GOOGLE_ANALYTICS: "GOOGLE_ANALYTICS",
        FACEBOOK_PIXEL: "FACEBOOK_PIXEL"
    },
    p_ = {
        change_payment: "CHANGE_PAYMENT_METHOD"
    },
    Et = {
        CLOCK: "clock",
        GLOBE: "globe",
        LOCK: "lock",
        RETURN: "return",
        SMILE: "smile",
        STAR: "star",
        TRUCK: "truck"
    },
    ot = {
        PAGE_VISITED: "page_visited",
        MERCHANT_ID: "merchant_id",
        SHOP_NAME: "shop_name",
        CHANNEL: "channel"
    };
var Ei = (e => (e.BILLING_ADDRESS = "BILLING_ADDRESS", e.SHIPPING_ADDRESS = "SHIPPING_ADDRESS", e))(Ei || {});
const fi = ["C2P flow timedout", "C2P is already completed", "C2P flow inaccessible due to user change"],
    b_ = ["Checkout completed for this token..."],
    at = {
        KRATOS_PRIVATE: "KRATOS_PRIVATE",
        KRATOS_PUBLIC: "KRATOS_PUBLIC"
    },
    g_ = "KR_023",
    A_ = "GE_001",
    Oi = e => we.validEmail.test(e) && we.emailOrEmptyString.test(e),
    Ti = e => !we.hasEmoji.test(e),
    $o = e => e.startsWith("+91"),
    fs = e => !isNaN(e),
    we = {
        hasEmoji: new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}+|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}+|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)+|\\p{EPres}(\\p{EMod}+|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?|\\p{Emoji}(\\p{EMod}+|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})", "gu"),
        validEmail: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        alphaNumeric: /[^A-Za-z0-9]/g,
        alphaNumericWithSpace: /[^A-Za-z0-9 ]/g,
        numeric: /[^\d.]$/g,
        lettersOnly: /[^A-Za-z\s]/g,
        specialCharactersAndNumbersOnly: /^[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\d]*$/g,
        hasTouchScreen: /\b(BlackBerry|webOS|iPhone|IEMobile|Android|Windows Phone|iPad|iPod)\b/i,
        lettersAndPeriod: /[^A-Za-z.\s]/g,
        space: /[\s]/g,
        emailOrEmptyString: /^$|^[\w.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    Wo = "eylisjmk8v";

function ln() {
    var e = Array.prototype.slice.call(arguments);
    if (!window.clarity) throw new Error("Clarity is not initialized");
    window.clarity.apply(void 0, e)
}
const L_ = () => K(void 0, null, function*() {
    Wo && function(e, t, n, r, o, s, i) {
        e[n] = e[n] || function() {
            (e[n].q = e[n].q || []).push(arguments)
        }, s = t.createElement(r), s.async = 1, s.src = "https://www.clarity.ms/tag/" + o, i = t.getElementsByTagName(r)[0], i.parentNode.insertBefore(s, i)
    }(window, document, "clarity", "script", Wo)
});

function Ci() {
    return typeof window.clarity == "function"
}

function Si(e, t) {
    ln("identify", e, t)
}

function yi() {
    ln("consent")
}

function hi(e, t) {
    ln("set", e, t)
}

function Ii(e) {
    ln("upgrade", e)
}
const It = {
        hasStarted: Ci,
        identify: Si,
        consent: yi,
        setTag: hi,
        upgrade: Ii
    },
    pi = (e = 0, t = !0, n = {
        locale: "en-IN",
        currency: "INR"
    }) => {
        const o = new Intl.NumberFormat(n.locale, {
                style: "currency",
                currency: n.currency
            }).format(+e),
            s = Number.isInteger(Number(e)) ? o.slice(0, o.length - 3) : o;
        return t ? s : s.slice(1)
    },
    bi = (e, t) => (t == null ? void 0 : t.country_code) !== "IN" ? e.replace(we.alphaNumericWithSpace, "") : we.numeric.test(e) ? e.replace(we.numeric, "") : e,
    qo = (e, t) => {
        var r, o, s, i, a, l, E, f, T, h, S, I, p, C, R, B, L, g, H, w, c, V, q, z, k, d, b, P, Q, v, Z, O, $, re, Y, u, ee, ie, ae, oe, G, F, j, J;
        let n = {};
        for (let U = 0; U < (t == null ? void 0 : t.length); U++)
            if (e === ((r = t[U]) == null ? void 0 : r.uid)) {
                n = {
                    type: ((s = (o = t[U]) == null ? void 0 : o.address_type) == null ? void 0 : s.trim()) || "Other",
                    id: (i = t[U]) == null ? void 0 : i.uid,
                    name: (l = (a = t[U]) == null ? void 0 : a.data) == null ? void 0 : l.name,
                    phone: (f = (E = t[U]) == null ? void 0 : E.data) == null ? void 0 : f.phone,
                    email: (h = (T = t[U]) == null ? void 0 : T.data) == null ? void 0 : h.email,
                    address1: (p = (I = (S = t[U]) == null ? void 0 : S.data) == null ? void 0 : I.address1) != null ? p : "",
                    address2: (B = (R = (C = t[U]) == null ? void 0 : C.data) == null ? void 0 : R.address2) != null ? B : "",
                    address: Yn((g = (L = t[U]) == null ? void 0 : L.data) == null ? void 0 : g.address1, (w = (H = t[U]) == null ? void 0 : H.data) == null ? void 0 : w.address2, ve((V = (c = t[U]) == null ? void 0 : c.data) == null ? void 0 : V.city), ve((z = (q = t[U]) == null ? void 0 : q.data) == null ? void 0 : z.state), ve((d = (k = t[U]) == null ? void 0 : k.data) == null ? void 0 : d.country), (P = (b = t[U]) == null ? void 0 : b.data) == null ? void 0 : P.zip),
                    zip: (Z = (v = (Q = t[U]) == null ? void 0 : Q.data) == null ? void 0 : v.zip) != null ? Z : "",
                    city: (re = ($ = (O = t[U]) == null ? void 0 : O.data) == null ? void 0 : $.city) != null ? re : "",
                    state: (ee = (u = (Y = t[U]) == null ? void 0 : Y.data) == null ? void 0 : u.state) != null ? ee : "",
                    country: (oe = (ae = (ie = t[U]) == null ? void 0 : ie.data) == null ? void 0 : ae.country) != null ? oe : "",
                    country_code: (j = (F = (G = t[U]) == null ? void 0 : G.data) == null ? void 0 : F.country_code) != null ? j : "",
                    source: (J = t[U]) == null ? void 0 : J.source_type
                };
                break
            }
        return n
    },
    m_ = (e, t) => {
        var r, o, s, i, a, l, E, f, T, h, S, I, p, C, R, B, L, g, H, w, c, V, q, z, k, d;
        let n = {};
        for (let b = 0; b < (t == null ? void 0 : t.length); b++)
            if (e === ((r = t[b]) == null ? void 0 : r.id)) {
                n = {
                    type: ((s = (o = t[b]) == null ? void 0 : o.address_type) == null ? void 0 : s.trim()) || "Others",
                    id: (i = t[b]) == null ? void 0 : i.id,
                    name: (a = t[b]) == null ? void 0 : a.name,
                    phone: (l = t[b]) == null ? void 0 : l.phone,
                    email: (E = t[b]) == null ? void 0 : E.email,
                    city: (f = t[b]) == null ? void 0 : f.city,
                    state: (T = t[b]) == null ? void 0 : T.state,
                    country: (h = t[b]) == null ? void 0 : h.country,
                    zip: (S = t[b]) == null ? void 0 : S.zip,
                    address1: (p = (I = t[b]) == null ? void 0 : I.address1) != null ? p : "",
                    address2: (R = (C = t[b]) == null ? void 0 : C.address2) != null ? R : "",
                    address: Yn((B = t[b]) == null ? void 0 : B.address1, (L = t[b]) == null ? void 0 : L.address2, ve((g = t[b]) == null ? void 0 : g.city), ve((H = t[b]) == null ? void 0 : H.state), ve((w = t[b]) == null ? void 0 : w.country), (c = t[b]) == null ? void 0 : c.zip),
                    state_code: (V = t[b]) == null ? void 0 : V.state_code,
                    country_code: (q = t[b]) == null ? void 0 : q.country_code,
                    gst_business_name: (z = t[b]) == null ? void 0 : z.gst_business_name,
                    gstin: (k = t[b]) == null ? void 0 : k.gstin,
                    alternate_number: (d = t[b]) == null ? void 0 : d.alternate_number
                };
                break
            }
        return n
    },
    gi = (e, t) => {
        if (!(e != null && e.length)) return;
        let n = [],
            r = -1;
        return e.forEach(o => {
            var i, a, l, E, f, T, h, S, I, p, C, R, B, L, g, H, w, c, V, q, z, k, d, b, P, Q, v, Z, O, $, re, Y, u, ee, ie, ae, oe, G, F;
            const s = m(_(_(_(_(m(_(_(_(_(_(_(_(_(_(_(_(_(_(_({}, !!o.uid && {
                id: o.uid
            }), !!((i = o.data) != null && i.name) && {
                name: (a = o.data) == null ? void 0 : a.name
            }), !!((l = o.data) != null && l.firstname) && {
                firstname: (E = o.data) == null ? void 0 : E.firstname
            }), !!((f = o.data) != null && f.lastname) && {
                lastname: (T = o.data) == null ? void 0 : T.lastname
            }), !!((h = o.data) != null && h.phone) && {
                phone: (S = o.data) == null ? void 0 : S.phone
            }), !!((I = o.data) != null && I.email) && {
                email: (p = o.data) == null ? void 0 : p.email
            }), !!((C = o.data) != null && C.address1) && {
                address1: (R = o.data) == null ? void 0 : R.address1
            }), !!((B = o.data) != null && B.address2) && {
                address2: (L = o.data) == null ? void 0 : L.address2
            }), !!((g = o.data) != null && g.zip) && {
                zip: (H = o.data) == null ? void 0 : H.zip
            }), !!((w = o.data) != null && w.city) && {
                city: (c = o.data) == null ? void 0 : c.city
            }), !!((V = o.data) != null && V.state) && {
                state: (q = o.data) == null ? void 0 : q.state
            }), !!((z = o.data) != null && z.gstin) && {
                gstin: (k = o.data) == null ? void 0 : k.gstin
            }), !!((d = o.data) != null && d.gst_business_name) && {
                gst_business_name: (b = o.data) == null ? void 0 : b.gst_business_name
            }), !!o.source_type && {
                source: o.source_type
            }), {
                state_code: (Q = (P = o.data) == null ? void 0 : P.state_code) != null ? Q : ""
            }), !!((v = o.data) != null && v.country) && {
                country: (Z = o.data) == null ? void 0 : Z.country
            }), !!((O = o.data) != null && O.country_code) && {
                country_code: ($ = o.data) == null ? void 0 : $.country_code
            }), !!o.address_type && {
                type: ((re = o.address_type) == null ? void 0 : re.trim()) || "Other"
            }), !!((Y = o.data) != null && Y.alternate_number) && {
                alternate_number: (u = o.data) == null ? void 0 : u.alternate_number
            }), {
                address: Yn((ee = o.data) == null ? void 0 : ee.address1, (ie = o.data) == null ? void 0 : ie.address2, ve((ae = o.data) == null ? void 0 : ae.city), ve((oe = o.data) == null ? void 0 : oe.state), ve((G = o.data) == null ? void 0 : G.country), (F = o.data) == null ? void 0 : F.zip)
            });
            n.push(s)
        }), n.sort((o, s) => (o == null ? void 0 : o.type) > (s == null ? void 0 : s.type) ? 1 : -1), n.forEach((o, s) => {
            t === o.id && (r = s)
        }), r > 0 && Hi(n, r, 0), n
    },
    Yn = (e, t, n, r, o, s) => {
        let i = "";
        return e && (i += e + ", "), t && (i += t + ", "), n && (i += ve(n) + ", "), r && (i += ve(r) + ", "), o && (i += ve(o) + ", "), s && (i += s), i
    },
    bt = (e, t, n, r, o) => {
        var i, a, l;
        let s = {};
        switch (e) {
            case "phone":
                {
                    s = {
                        type: "string",
                        required: D("invalid_phone_number"),
                        phone: D("invalid_phone_number"),
                        formatters: ["PHONE"]
                    };
                    break
                }
            case "zip":
                {
                    s = m(_({}, !!t && {
                        required: D("pincode_required")
                    }), {
                        type: "string",
                        when: (E, f) => {
                            if (f.country_code === "IN" && (E.length !== 6 || !fs(E))) return {
                                status: !0,
                                message: D("valid_pincode")
                            }
                        },
                        formatters: [bi]
                    });
                    break
                }
            case "name":
                {
                    s = {
                        type: "string",
                        required: D("name_required"),
                        min: {
                            limit: 3,
                            message: D("valid_name")
                        },
                        max: {
                            limit: 450,
                            message: D("valid_name")
                        },
                        onlyLettersAndPeriod: D("valid_name"),
                        formatters: ["LETTERS_AND_PERIOD"]
                    };
                    break
                }
            case "city":
                {
                    s = m(_({
                        type: "string"
                    }, !!t && {
                        required: D("city_required")
                    }), {
                        formatters: ["CAPITALIZE", "LETTERS_ONLY"],
                        onlyLetters: D("valid_city")
                    });
                    break
                }
            case "state":
                {
                    s = m(_({
                        type: "string"
                    }, !!t && {
                        required: D("state_required")
                    }), {
                        formatters: ["CAPITALIZE", "LETTERS_ONLY"]
                    });
                    break
                }
            case "state_code":
                {
                    s = m(_({
                        type: "string"
                    }, !!t && {
                        required: D("state_required")
                    }), {
                        notSpecialCharactersOrNumbersOnly: D("valid_state"),
                        formatters: ["CAPITALIZE", "LETTERS_ONLY"]
                    });
                    break
                }
            case "country":
                {
                    s = m(_({}, !!t && {
                        required: D("valid_country")
                    }), {
                        type: "string",
                        onlyLetters: D("valid_country"),
                        formatters: ["CAPITALIZE"]
                    });
                    break
                }
            case "country_code":
                {
                    s = m(_({}, !!t && {
                        required: D("country_code_required")
                    }), {
                        type: "string"
                    });
                    break
                }
            case "type":
                {
                    s = {
                        required: D("address_type_required")
                    };
                    break
                }
            case "email":
                {
                    s = m(_({
                        type: "string"
                    }, t ? {
                        required: D("email_required"),
                        email: D("valid_email")
                    } : {
                        emailOrEmptyString: D("valid_email")
                    }), {
                        formatters: ["FIRST_CHAR_LOWERCASE", "LETTERS_WITH_NO_SPACE"]
                    });
                    break
                }
            case "gstin":
                {
                    s = {
                        type: "string",
                        formatters: ["UPPERCASE", "ALPHA_NUMERIC"],
                        when: (E, f) => {
                            if (E && E.length >= 2) {
                                const T = E.slice(0, 2),
                                    h = Js[T];
                                if (!h) return {
                                    status: !0,
                                    message: D("invalid_gstin")
                                };
                                const S = f.state_code;
                                if (S && h.state_code !== S) return {
                                    status: !0,
                                    message: D("invalid_gstin_state_code")
                                }
                            }
                        }
                    };
                    break
                }
            case "gst_business_name":
                {
                    s = _({
                        type: "string"
                    }, !!t && {
                        required: D("gst_business_name_required")
                    });
                    break
                }
            case "address1":
                {
                    s = _({
                        type: "string",
                        label: (i = n == null ? void 0 : n.label) != null ? i : D("address1")
                    }, !!t && {
                        required: D("full_address"),
                        notSpecialCharactersOrNumbersOnly: D("valid_address"),
                        min: {
                            limit: o != null ? o : 5,
                            message: D("full_address")
                        }
                    });
                    break
                }
            case "address2":
                {
                    s = _({
                        type: "string",
                        label: (a = n == null ? void 0 : n.label) != null ? a : D("address2")
                    }, !!t && {
                        required: D("full_address"),
                        notSpecialCharactersOrNumbersOnly: D("valid_address"),
                        min: {
                            limit: o != null ? o : 5,
                            message: D("full_address")
                        }
                    });
                    break
                }
            case "alternate_number":
                {
                    s = _({
                        type: "string",
                        label: (l = n == null ? void 0 : n.label) != null ? l : D("local_delivery_phone_number")
                    }, !!r && {
                        required: D("invalid_phone_number"),
                        phone: D("invalid_phone_number"),
                        formatters: ["PHONE"]
                    });
                    break
                }
        }
        return s
    },
    P_ = (e, t, n, r) => {
        let o = {};
        return e && e.forEach(s => {
            s.isEnabled && s.key !== "gstin" ? o[s.key] = bt(s.key, s.isMandatory, s, r, s.minCharacterLimit) : s.key !== "gstin" && s.key !== "alternate_number" && (n != null && n.includes(s.key)) && s.isEnabled && (o[s.key] = bt(s.key, !1, s, r)), s.key === "state_code" && !(t != null && t.length) && delete o[s.key]
        }), o
    },
    N_ = (e, t) => {
        const n = e.filter(o => (o == null ? void 0 : o.key) === "address1" || (o == null ? void 0 : o.key) === "address2" || (o == null ? void 0 : o.key) === "zip" || (o == null ? void 0 : o.key) === "city" || (o == null ? void 0 : o.key) === "state");
        let r = {};
        return n.forEach(o => {
            o.isEnabled && (r[o.key] = bt(o.key, o.isMandatory))
        }), r = m(_({}, r), {
            gstin: bt("gstin", !1),
            gst_business_name: bt("gst_business_name", t != null ? t : !1)
        }), r
    },
    Os = (e, t) => {
        var s, i, a, l;
        const {
            err: n,
            url: r,
            payload: o
        } = e.extraData;
        return ((s = n == null ? void 0 : n.response) == null ? void 0 : s.status) === 403 || ((i = n == null ? void 0 : n.response) == null ? void 0 : i.status) === 400 && fi.includes((l = (a = n == null ? void 0 : n.response) == null ? void 0 : a.data) == null ? void 0 : l.error) ? !1 : (cn(E => {
            var f, T, h;
            E.setTag("error_type", t), E.setExtra("url", r), E.setExtra("payload", o), E.setExtra("errStatus", (f = n == null ? void 0 : n.response) == null ? void 0 : f.status), E.setExtra("errMessage", (h = (T = n == null ? void 0 : n.response) == null ? void 0 : T.data) == null ? void 0 : h.error), E.captureException(n)
        }), !0)
    },
    Ai = ({
        errorType: e,
        extraData: t,
        errMessage: n
    }) => {
        cn(r => {
            r.setTag("error_type", e), r.setExtra("payload", t), r.captureException(new Error(n))
        })
    };
var At = (e => (e.CHECKOUT_ERROR = "CHECKOUT_ERROR", e.HEALTH_CHECK_ERROR = "HEALTH_CHECK_ERROR", e.PIXEL_ERROR = "PIXEL_ERROR", e.PARENT_REDIRECT_ERROR = "PARENT_REDIRECT_ERROR", e.CART_ERROR = "CART_ERROR", e.LOG_EVENT_MISMATCH = "LOG_EVENT_MISMATCH", e.USER_ID_MISSING = "USER_ID_MISSING", e))(At || {});
const je = "FLO_ANALYTICS_EVENTS",
    Li = 5,
    mi = 100,
    Pi = 5e3;
let zo, en, hn = !1;
const Ni = [te.FLO_AUTH_LOGIN_COMPLETED, te.FLO_PAYMENT_METHOD_SELECTED, te.FLO_PAYMENT_COMPLETED, te.FLO_CHECKOUT_CLICKED, te.FLO_SSO_PAGE_LOADED, te.FLO_SSO_PHONE_ADDED, te.FLO_SSO_OTP_PAGE_LOADED, te.FLO_SSO_OTP_LOADED, te.FLO_SSO_OTP_RESEND, te.FLO_SSO_OTP_VERIFIED, te.FLO_SSO_OTP_ENTERED, te.FLO_SSO_LOGIN_COMPLETED, te.FLO_PAYMENT_LOADED],
    Ri = [te.FLO_AUTH_LOGIN_COMPLETED, te.FLO_PAYMENT_METHOD_SELECTED, te.FLO_PAYMENT_COMPLETED, te.FLO_PAYMENT_LOADED],
    $n = () => K(void 0, null, function*() {
        if (hn) return;
        let e = JSON.parse(localStorage.getItem(je) || "[]"),
            t = 0;
        if (e.length === 0) return;
        const n = () => {
                t++, t <= Li ? zo = setTimeout(() => {
                    r(e)
                }, 1e3) : (console.error("Max retry limit reached. Discarding events."), t = 0, clearTimeout(zo))
            },
            r = o => K(void 0, null, function*() {
                try {
                    if (hn = !0, yield As(o)) localStorage.removeItem(je), t = 0;
                    else throw new Error("Failed to send batch analytics events")
                } catch (s) {
                    console.error("SendBeacon Error", s);
                    let i = JSON.parse(localStorage.getItem(je) || "[]");
                    e = [...o, ...i], localStorage.setItem(je, JSON.stringify(e)), n()
                } finally {
                    hn = !1
                }
            });
        localStorage.setItem(je, JSON.stringify([])), yield r(e)
    }),
    ki = e => K(void 0, null, function*() {
        yield As([e])
    }),
    wi = e => {
        if (Ni.includes(e.eventName)) {
            Di(e), ki(e);
            return
        }
        let t = JSON.parse(localStorage.getItem(je) || "[]");
        return t.push(e), t.length > mi && t.shift(), localStorage.setItem(je, JSON.stringify(t)), en || (en = setTimeout(() => {
            $n(), clearTimeout(en), en = void 0
        }, Pi)), Promise.resolve()
    },
    Ui = e => e != null && e.length ? e.map(t => m(_({}, t), {
        payload: t.eventPayload
    })) : [];
let Xt = [];
const Di = e => {
    Ri.includes(e.eventName) && (Xt.push(e), Xt.length >= 2 && (Xt.some(n => n.eventName === te.FLO_AUTH_LOGIN_COMPLETED) || (Ai({
        errorType: At.LOG_EVENT_MISMATCH,
        extraData: JSON.stringify(Xt),
        errMessage: "Login_completed mismatch"
    }), Xt = [])))
};
window.addEventListener("load", () => {
    JSON.parse(localStorage.getItem(je) || "[]").length > 0 && $n()
});
document.addEventListener("visibilitychange", function() {
    let t = JSON.parse(localStorage.getItem(je) || "[]");
    document.visibilityState === "hidden" && t.length > 0 && $n()
});
const R_ = e => {
        const t = document == null ? void 0 : document.getElementById(e);
        return !!(t != null && t.checked)
    },
    St = e => typeof e == "object" && e !== null ? Object.keys(e).length === 0 : !0,
    Ts = () => {
        let e = !1;
        if ("maxTouchPoints" in navigator) e = navigator.maxTouchPoints > 0;
        else if ("msMaxTouchPoints" in navigator) e = navigator.msMaxTouchPoints > 0;
        else {
            const n = window.matchMedia && matchMedia("(pointer:coarse)");
            if (n && n.media === "(pointer:coarse)") e = !!n.matches;
            else if ("orientation" in window) e = !0;
            else {
                var t = navigator.userAgent;
                e = we.hasTouchScreen.test(t)
            }
        }
        return !!e
    },
    Cs = () => {
        var e = navigator.userAgent || navigator.vendor || window.opera;
        return /windows phone/i.test(e) ? "Windows Phone" : /android/i.test(e) ? "Android" : /iPad|iPhone|iPod/.test(e) && !window.MSStream ? "iOS" : "unknown"
    },
    He = (e, t) => {
        window.parent.postMessage({
            type: e,
            payload: t,
            source: "SHOPFLO"
        }, "*"), Bi(e, t)
    },
    Bi = (e, t) => {
        try {
            window.ReactNativeWebView && window.ReactNativeWebView.postMessage(JSON.stringify({
                type: e,
                payload: t,
                source: "SHOPFLO"
            }))
        } catch (n) {
            console.error("Error publishing postMessage:", n)
        }
    },
    Mi = (e = !1, {
        origin: t
    } = {}) => {
        let n = JSON.parse(localStorage.getItem(je) || "[]");
        const r = Ui(n);
        Lt() && (He(e ? De.CLOSE_IFRAME_BUYNOW : De.CLOSE_IFRAME, {
            origin: t,
            eventPayload: {
                eventQueue: r
            }
        }), localStorage.removeItem(je))
    },
    Fi = () => (ue.set("flo-thirdparty-cookie", "thirdparty_cookie", {
        expires: 1 / 24,
        sameSite: "none",
        secure: !0
    }), !!ue.get("flo-thirdparty-cookie")),
    Lt = () => {
        try {
            return window.self !== window.top
        } catch (e) {
            return !0
        }
    },
    nt = (e, t = !0) => {
        if (e) {
            if (Lt()) {
                He(De.PARENT_REDIRECT, {
                    redirectUrl: e,
                    clearCart: t
                });
                return
            }
            if (window.top) {
                window.top.location.href = e;
                return
            }
            window.location.href = e;
            return
        }
    },
    Hi = (e, t, n) => {
        const r = e[t];
        e.splice(t, 1), e.splice(n, 0, r)
    },
    Ss = () => navigator.userAgent.indexOf("Instagram") > -1,
    xi = e => {
        const t = window.location.href;
        e = e.replace(/[\[\]]/g, "\\$&");
        var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
            r = n.exec(t);
        return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null
    },
    ve = e => {
        var t, n;
        return e && `${(t=e.substring(0,1))==null?void 0:t.toUpperCase()}${(n=e.substring(1,e.length))==null?void 0:n.toLowerCase()}`
    },
    vi = () => di(),
    k_ = () => {
        if (ue.get(X.FLO_SESSION_ID_COOKIE)) return;
        const t = vi(),
            n = new Date(new Date().getTime() + 15 * 60 * 1e3);
        ue.set(X.FLO_SESSION_ID_COOKIE, t, {
            expires: n,
            sameSite: "none",
            secure: !0
        })
    },
    jo = (e, t) => {
        const n = Math.round(Math.min(Math.max(t || 1, 0), 1) * 255);
        return e + n.toString(16).toUpperCase()
    },
    yt = (e, t) => new Promise((n, r) => {
        const o = document.createElement("script");
        o.async = !1, o.src = e;
        try {
            o.onload = () => K(void 0, null, function*() {
                const i = yield t();
                return n(i)
            })
        } catch (i) {
            return r(i)
        }
        document.getElementsByTagName("head")[0].appendChild(o)
    }),
    mt = e => new Promise(t => setTimeout(t, e)),
    w_ = e => e == null ? void 0 : e.replace(/(\d{2})(\d{5})(\d{5})/, "$1 $2 $3"),
    Ki = e => e ? parseInt(e.replace("#", ""), 16) > 4294967295 / 1.2 ? "#1a1a1a" : "#ffffff" : "",
    Vi = (e, t, n) => {
        var r = e == null ? void 0 : e.lastIndexOf(t);
        return r < 0 ? e : (e == null ? void 0 : e.substring(0, r)) + n + (e == null ? void 0 : e.substring(r))
    },
    U_ = e => e[0] !== "+" ? `+91${e}` : e,
    ys = e => {
        if (e) {
            if (Lt()) {
                try {
                    window.top.location.href = e
                } catch (t) {
                    He(De.PARENT_REDIRECT, {
                        redirectUrl: e
                    })
                }
                return
            }
            window.location.href = e
        }
    },
    D_ = (e, t, n, r) => {
        try {
            return n > e.length ? e : e.slice(e.length - n).padStart(t, r)
        } catch (o) {
            return console.error(o), e
        }
    },
    hs = (e, t) => {
        const n = Object.keys(e),
            r = Object.keys(t);

        function o(s) {
            return s != null && typeof s == "object"
        }
        if (n.length !== r.length) return !1;
        for (const s of n) {
            const i = e[s],
                a = t[s],
                l = o(i) && o(a);
            if (l && !hs(i, a) || !l && i !== a) return !1
        }
        return !0
    },
    Qt = ["utm_medium", "utm_source", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid"],
    Gi = e => {
        try {
            if (!e) return [];
            e = e.replace(/%([^\d].)/, "%25$1"), e = decodeURIComponent(e);
            let t = e.indexOf("?"),
                n = e.indexOf("#");
            if (n === -1 && t === -1) return [];
            n === -1 && (n = e.length);
            let r = t === -1 || n === t + 1 ? e.substring(n) : e.substring(t + 1, n),
                o = [];
            return r.split("&").forEach(function(s) {
                var T;
                if (!s) return;
                let i = s.indexOf("="),
                    a;
                if (i === -1 && o.length > 0) {
                    if (Qt.includes(s)) {
                        a = {
                            name: s,
                            value: ""
                        }, o.push(a);
                        return
                    }
                    let h = o[o.length - 1].value;
                    o[o.length - 1].value = h + "&" + s;
                    return
                }
                let l = i > -1 ? s.substr(0, i) : s,
                    E = i > -1 ? decodeURIComponent((T = s.substr(i + 1)) == null ? void 0 : T.replace(/%([^\d].)/, "%25$1")) : "NA",
                    f = l.indexOf("[");
                if (f === -1) a = {
                    name: decodeURIComponent(l),
                    value: E
                };
                else {
                    let h = l.indexOf("]", f),
                        S = decodeURIComponent(l.substring(f + 1, h));
                    l = decodeURIComponent(l.substring(0, f)), a != null && a[l] || (a.name = l, a.value = []), S ? a.value[S] = E : a.value.push(E)
                }
                o.push(a)
            }), o
        } catch (t) {
            return console.error(t), []
        }
    };

function on(e, t) {
    if (!e) return "#000000";
    try {
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(e)) {
            let n = e.substring(1).split("");
            return n.length === 3 && (n = [n[0], n[0], n[1], n[1], n[2], n[2]]), `rgba(${[parseInt(n.slice(0,2).join(""),16),parseInt(n.slice(2,4).join(""),16),parseInt(n.slice(4,6).join(""),16)].join(",")},${t})`
        } else throw new Error(`Invalid Hexadecimal Color: ${e}`)
    } catch (n) {
        return console.error(n), "#000000"
    }
}

function B_(e, t) {
    return !e || !t ? null : t === "PERCENTAGE" ? `${e}% off` : t === "FLAT" ? `${e}₹ off` : null
}
const M_ = (e, t = !1) => {
        if (He(De.EXIT_CHECKOUT, {}), Lt()) {
            Mi(t);
            return
        }
        if (e) {
            window.location.href = e;
            return
        }
    },
    Wn = () => {
        let e = [];
        try {
            const t = window.location.search;
            Qt != null && Qt.some(function(n) {
                return t.indexOf(n) >= 0
            }) && (e = Gi(t), e = e == null ? void 0 : e.filter(n => Qt.includes(n.name)))
        } catch (t) {
            console.error(t)
        } finally {
            return e
        }
    };

function F_(...e) {
    return e.filter(Boolean).join(" ")
}
const H_ = (e, t, n) => {
        const r = e.scrollLeft,
            o = e.scrollWidth - e.clientWidth;
        return r === 0 && n(0), r > o && n(t), n(r / o * 100)
    },
    x_ = e => {
        var n;
        const t = (n = e.match(/\d+/)) == null ? void 0 : n[0];
        return Number(t)
    },
    v_ = (e, t) => e ? e.length <= t ? e : e.substring(0, t) + "..." : "",
    kn = e => e.startsWith("http://") || e.startsWith("https://") ? e : "http://" + e,
    Yi = () => K(void 0, null, function*() {
        return navigator.brave && (yield navigator.brave.isBrave()) || !1
    }),
    K_ = e => Math.floor(e * 100) / 100,
    $i = e => K(void 0, null, function*() {
        var n;
        return (n = (yield Re("/v1/countries", "CHECKOUT_PUBLIC")).find(r => r.name === e).code) != null ? n : null
    }),
    Wi = (e, t, n) => K(void 0, null, function*() {
        const r = yield Re(`/attributes/v1/address/${e}`), o = yield $i(n);
        yield xe(`/checkout/${t}/address/${e}`, m(_({}, r), {
            data: m(_({}, r.data), {
                country_code: o
            })
        }), "KRATOS_PRIVATE")
    }),
    qi = (e, t, n) => {
        var i, a, l;
        const r = e == null ? void 0 : e.country_code;
        !r && (e != null && e.id) && (e != null && e.country) && n && Wi(e.id, n, e == null ? void 0 : e.country);
        let o = {};
        if (r !== "IN") {
            const E = e == null ? void 0 : e.phone,
                f = e == null ? void 0 : e.email,
                T = e == null ? void 0 : e.name;
            return {
                available: !!E && !!f && !!T,
                errorFieldData: o
            }
        }
        return (i = e == null ? void 0 : e.name) != null && i.length ? (e == null ? void 0 : e.country_code) === "IN" && (e == null ? void 0 : e.phone) !== "" && ((a = e == null ? void 0 : e.phone) == null ? void 0 : a.substring(0, 3)) !== "+91" ? {
            available: !!(e != null && e.alternate_number && ((l = e == null ? void 0 : e.alternate_number) == null ? void 0 : l.length) > 10),
            errorFieldData: o
        } : {
            available: t.every(E => {
                if (E.isEnabled && E.isMandatory) {
                    if (E.key in (e != null ? e : {})) return !0;
                    const f = bt(E.key, E.isMandatory);
                    return o[E.key] = {
                        status: !0,
                        message: f == null ? void 0 : f.required
                    }, !1
                }
                return !0
            }),
            errorFieldData: o
        } : (o.name = {
            status: !0,
            message: "Please enter your name"
        }, {
            available: !1,
            errorFieldData: o
        })
    },
    V_ = e => {
        const t = document.querySelector(`#${e}`);
        t && t.scrollIntoView({
            behavior: "smooth",
            block: "center"
        })
    },
    G_ = e => {
        const t = typeof e == "string" ? parseFloat(e) : e;
        return Math.round(t)
    },
    Y_ = e => e.length ? e != null && e.some(t => t === "DISCOUNTS_NOT_COMBINABLE") ? "DISCOUNTS_NOT_COMBINABLE" : e != null && e.some(t => t === "NO_MORE_STACK_LENGTH") ? "NO_MORE_STACK_LENGTH" : "NONE" : "NONE",
    $_ = e => {
        if (It.hasStarted()) switch (e) {
            case "ADDRESS_LIST":
                It.setTag(ot.PAGE_VISITED, "ADDRESS");
                return;
            case "AUTH":
                It.setTag(ot.PAGE_VISITED, "LOGIN");
                return;
            case "PAYMENTS":
                It.setTag(ot.PAGE_VISITED, "PAYMENTS");
                return;
            default:
                return
        }
    },
    gt = (e, t) => {
        !It.hasStarted() || !e || !t || It.setTag(e, t)
    },
    zi = e => {
        var n, r, o, s, i;
        const t = [];
        return (o = (r = (n = e == null ? void 0 : e.rule_group_mapping) == null ? void 0 : n.rule_groups) == null ? void 0 : r.AUTOMATION) == null || o.forEach(a => {
            t.find(l => l.id === a) || t.push({
                id: a,
                blockedModes: [],
                allowedModes: []
            })
        }), (i = (s = e == null ? void 0 : e.metadata) == null ? void 0 : s.rule_groups) == null || i.forEach(a => {
            var l, E;
            (a == null ? void 0 : a.source) === "AUTOMATION" && ((l = a == null ? void 0 : a.failed_rule_groups) == null || l.forEach(f => {
                var T, h;
                (h = (T = t == null ? void 0 : t.find(S => S.id === f)) == null ? void 0 : T.blockedModes) == null || h.push(e == null ? void 0 : e.mode)
            }), (E = a == null ? void 0 : a.successful_rule_groups) == null || E.forEach(f => {
                var T, h;
                (h = (T = t == null ? void 0 : t.find(S => S.id === f)) == null ? void 0 : T.allowedModes) == null || h.push(e == null ? void 0 : e.mode)
            }))
        }), t
    },
    W_ = (e, t) => e ? new URL(e).hostname === "cdn.shopify.com" ? Vi(e, ".jpg", "_small") : e : t,
    q_ = (e, t, n = "") => K(void 0, null, function*() {
        var r, o, s;
        if (!(!(e != null && e.identifier) || !(e != null && e.merchantId))) try {
            const i = _(_(_({
                oid: e == null ? void 0 : e.identifier,
                merchant_id: e == null ? void 0 : e.merchantId
            }, t.context === "AUTH" && {
                skip_verification: (r = e == null ? void 0 : e.skipVerification) != null ? r : !1,
                linked_user_id: (o = e.userId) != null ? o : null,
                is_force_verification: (s = e.forceVerification) != null ? s : !1
            }), t.context === "SSO" && {
                context: "SSO",
                sso_request_id: t.requestId
            }), !!n && {
                captcha_token: n
            });
            return yield ye("/otp/send", i, "AUTH")
        } catch (i) {
            throw console.error(i), new Error(i)
        }
    }),
    z_ = (e, t, n, r) => K(void 0, null, function*() {
        if (!(!e || !t)) try {
            const o = _({
                context_id: e,
                otp: t,
                skip_token_generation: n
            }, r && _({}, r));
            return yield ye("/otp/verify", o, "AUTH")
        } catch (o) {
            throw console.error(o), new Error(o)
        }
    }),
    j_ = (e, t) => K(void 0, null, function*() {
        if (e) try {
            return yield ye("/otp/resend", {
                context_id: e,
                preferred_channel: t
            }, "AUTH")
        } catch (n) {
            throw console.error(n), new Error(n)
        }
    }),
    ji = () => {
        const e = un();
        try {
            if (!e) return !0;
            const t = ui(e),
                n = t.exp ? t.exp : 0,
                r = Date.now() / 1e3;
            return !(n - r > 5 * 60)
        } catch (t) {
            return console.error("Error decoding token: ", t), !0
        }
    },
    Pt = (e, t) => K(void 0, null, function*() {
        const n = e != null ? e : ps(),
            r = ji();
        if (!t && !r) return {
            isLoggedIn: !0
        };
        if (!n && r) return {
            isLoggedIn: !1
        };
        try {
            const s = yield ye("/user-token/refresh", {
                refresh_token: n
            }, "AUTH");
            if (!s) return {
                isLoggedIn: !1
            };
            const i = s.access_token,
                a = s.refresh_token,
                l = s.access_token_expires_at,
                E = s == null ? void 0 : s.refresh_token_expires_at;
            return Is(i, a, l, E), Xi(i, a, l, E), {
                isLoggedIn: !0,
                newTokensGenerated: !0
            }
        } catch (o) {
            return ue.remove(X.AUTH_COOKIE_CLIENT, {
                path: "/"
            }), ue.remove(X.REFRESH_TOKEN_COOKIE_CLIENT, {
                path: "/"
            }), localStorage.removeItem(X.ORDER_HISTORY_COOKIE_CLIENT), console.error(o), {
                isLoggedIn: !1
            }
        }
    }),
    Is = (e, t, n, r) => {
        const o = n && new Date(n),
            s = r && new Date(r);
        try {
            ue.set(X.AUTH_COOKIE_CLIENT, e, {
                expires: o != null ? o : X.AUTH_COOKIE_CLIENT_EXPIRY,
                sameSite: "none",
                secure: !0
            }), ue.remove(X.AUTH_LOGGED_OUT), t ? ue.set(X.REFRESH_TOKEN_COOKIE_CLIENT, t, {
                expires: s != null ? s : X.REFRESH_TOKEN_COOKIE_CLIENT_EXPIRY,
                sameSite: "none",
                secure: !0
            }) : (ue.set(X.REFRESH_TOKEN_COOKIE_CLIENT, t, {
                expires: new Date(0),
                sameSite: "none",
                secure: !0
            }), ue.remove(X.REFRESH_TOKEN_COOKIE_CLIENT))
        } catch (i) {
            throw console.error(i), new Error(i)
        }
    },
    Xi = (e, t, n, r) => {
        var i, a;
        const o = n && new Date(n),
            s = r && new Date(r);
        localStorage.setItem(X.AUTH_COOKIE_CLIENT, e), localStorage.setItem(X.REFRESH_TOKEN_COOKIE_CLIENT, t), localStorage.setItem(X.LOCAL_STORAGE_AUTH_COOKIE_CLIENT_EXPIRY, (i = o == null ? void 0 : o.toString()) != null ? i : ""), localStorage.setItem(X.LOCAL_STORAGE_REFRESH_TOKEN_COOKIE_CLIENT_EXPIRY, (a = s == null ? void 0 : s.toString()) != null ? a : "")
    },
    un = () => {
        if (ue.get(X.AUTH_COOKIE_CLIENT)) return ue.get(X.AUTH_COOKIE_CLIENT);
        const e = localStorage.getItem(X.AUTH_COOKIE_CLIENT),
            t = localStorage.getItem(X.LOCAL_STORAGE_AUTH_COOKIE_CLIENT_EXPIRY);
        if (e && t) {
            const n = Date.now(),
                r = new Date(t).getTime();
            if (n < r) return e
        }
        return ue.get(X.TWO_STEP_AUTH_COOKIE_CLIENT) ? ue.get(X.TWO_STEP_AUTH_COOKIE_CLIENT) : ""
    },
    ps = () => {
        if (ue.get(X.REFRESH_TOKEN_COOKIE_CLIENT)) return ue.get(X.REFRESH_TOKEN_COOKIE_CLIENT);
        const e = localStorage.getItem(X.REFRESH_TOKEN_COOKIE_CLIENT),
            t = localStorage.getItem(X.LOCAL_STORAGE_REFRESH_TOKEN_COOKIE_CLIENT_EXPIRY);
        if (e && t) {
            const n = new Date(t).getTime();
            if (Date.now() < n) return e
        }
        return ""
    };

function nn() {
    if (!Fi()) return;
    const e = un(),
        t = localStorage.getItem(X.LOCAL_STORAGE_AUTH_COOKIE_CLIENT_EXPIRY),
        n = ps(),
        r = localStorage.getItem(X.LOCAL_STORAGE_REFRESH_TOKEN_COOKIE_CLIENT_EXPIRY);
    if (e) return {
        authCookie: e,
        authCookieExpiry: t,
        refreshCookie: n,
        refreshCookieExpiry: r
    }
}
class dn extends Error {
    constructor(n, r) {
        super(n);
        jt(this, "extraData");
        this.extraData = r
    }
}
const bs = "https://api.shopflo.co/flo-checkout/api",
    gs = "https://api.shopflo.co/public/api",
    Xo = "https://alpenliebe20250305050635.shopflo.com/api/v1/spark",
    Qo = "https://api.shopflo.co/heimdall/api/v1",
    Qi = "https://api.shopflo.co/kratos/public",
    qn = "https://api.shopflo.co/kratos/public/api/v1",
    Zi = "https://api.shopflo.co/kratos/api/v1",
    Ji = "https://api.shopflo.co/ce/api/v1",
    ea = "https://api.shopflo.co/ce/public/api/v1",
    ta = "https://api.shopflo.co/shorts/api/v1",
    na = "checkout.shopflo.co",
    ra = !1,
    Ot = window.location.hostname === "localhost" ? "latest" : window.location.pathname.split("/")[1];
const oa = () => {
    let e = !1,
        t = [],
        n = 0;
    const r = 3,
        o = (s, i = null) => {
            t.forEach(a => {
                s ? a.reject(s) : a.resolve(i)
            }), t = []
        };
    Ye.interceptors.response.use(s => s, s => K(void 0, null, function*() {
        var a, l;
        const i = s.config;
        if ((((a = s.response) == null ? void 0 : a.status) === 401 || ((l = s.response) == null ? void 0 : l.status) === 403) && !i._retry && n < r) {
            if (n++, e) return new Promise((E, f) => {
                t.push({
                    resolve: E,
                    reject: f
                })
            }).then(E => (i.headers.Authorization = E, Ye(i))).catch(E => Promise.reject(E));
            i._retry = !0, e = !0;
            try {
                const {
                    isLoggedIn: E
                } = yield Pt(void 0, !0);
                if (E) {
                    const f = ue.get(X.AUTH_COOKIE_CLIENT);
                    return Ye.defaults.headers.common.Authorization = f, i.headers.Authorization = f, o(null, f), Ye(i)
                } else throw new Error("Token refresh failed")
            } catch (E) {
                return o(E, null), Promise.reject(E)
            } finally {
                e = !1
            }
        }
        return n = 0, Promise.reject(s)
    }))
};
oa();
const sa = e => K(void 0, null, function*() {
        var r, o;
        yield Pt();
        const t = ue.get(X.FLO_SESSION_ID_COOKIE),
            n = {
                headers: _(_({
                    Authorization: ue.get(X.AUTH_COOKIE_CLIENT) ? (r = ue.get(X.AUTH_COOKIE_CLIENT)) != null ? r : "" : ue.get(X.TWO_STEP_AUTH_COOKIE_CLIENT) && (o = ue.get(X.TWO_STEP_AUTH_COOKIE_CLIENT)) != null ? o : ""
                }, t && {
                    "x-shopflo-session": t
                }), Ot && {
                    "X-SHOPFLO-VERSION": Ot
                })
            };
        return Ye.get(`${bs}${e}`, n).then(s => {
            var i;
            return (i = s == null ? void 0 : s.data) == null ? void 0 : i.response
        }).catch(s => {
            throw s
        })
    }),
    X_ = (e, t = "CHECKOUT") => {
        const n = ue.get(X.FLO_SESSION_ID_COOKIE),
            r = t === "CHECKOUT" ? gs : qn,
            o = {
                headers: _(_({}, n && {
                    "x-shopflo-session": n
                }), Ot && {
                    "X-SHOPFLO-VERSION": Ot
                })
            };
        return Ye.get(`${r}${e}`, o).then(s => {
            var i;
            return (i = s == null ? void 0 : s.data) == null ? void 0 : i.response
        }).catch(s => {
            throw s
        })
    },
    In = e => {
        const t = ue.get(X.FLO_SESSION_ID_COOKIE),
            n = {
                headers: _(_({}, t && {
                    "x-shopflo-session": t
                }), Ot && {
                    "X-SHOPFLO-VERSION": Ot
                })
            };
        return Ye.get(`${qn}${e}`, n).then(r => {
            var o;
            return (o = r == null ? void 0 : r.data) == null ? void 0 : o.data
        }).catch(r => {
            throw r
        })
    },
    _t = {
        revalidateOnMount: !0,
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1,
        shouldRetryOnError: !1,
        errorRetryInterval: 5e3,
        errorRetryCount: 1
    },
    ia = (e = "CHECKOUT") => {
        var o;
        let t = {
                [X.FLO_SESSION_ID_XHR_HEADER]: (o = ue.get(X.FLO_SESSION_ID_COOKIE)) != null ? o : "NA",
                "X-SHOPFLO-VERSION": Ot
            },
            n = "",
            r = un();
        switch (e) {
            case "CHECKOUT_HOST":
                {
                    n = `https://${na}`;
                    break
                }
            case "CHECKOUT":
                {
                    t = m(_({}, t), {
                        Authorization: r != null ? r : ""
                    }),
                    n = bs;
                    break
                }
            case "CHECKOUT_PUBLIC":
                {
                    n = gs;
                    break
                }
            case "AUTH":
                {
                    n = Qo;
                    break
                }
            case "AUTH_PRIVATE":
                {
                    t = m(_({}, t), {
                        Authorization: r != null ? r : ""
                    }),
                    n = Qo;
                    break
                }
            case "KRATOS":
                {
                    n = Qi,
                    t = m(_({}, t), {
                        Authorization: r != null ? r : ""
                    });
                    break
                }
            case "KRATOS_PUBLIC":
                {
                    n = qn,
                    t = m(_({}, t), {
                        Authorization: r != null ? r : ""
                    });
                    break
                }
            case "KRATOS_PRIVATE":
                {
                    t = m(_({}, t), {
                        Authorization: r != null ? r : ""
                    }),
                    n = Zi;
                    break
                }
            case "CE":
                {
                    t = m(_({}, t), {
                        Authorization: r != null ? r : ""
                    }),
                    n = Ji;
                    break
                }
            case "CE_PUBLIC":
                {
                    t = m(_({}, t), {
                        Authorization: r != null ? r : ""
                    }),
                    n = ea;
                    break
                }
            case "SEGMENTS":
                {
                    n = ta,
                    t = m(_({}, t), {
                        Authorization: r != null ? r : ""
                    });
                    break
                }
        }
        return {
            headers: t,
            base: n
        }
    },
    En = (e = "CHECKOUT", t) => {
        var r, o, s, i, a, l, E, f, T, h;
        let n = {};
        switch (e) {
            case "CHECKOUT":
                {
                    n = (r = t == null ? void 0 : t.data) == null ? void 0 : r.response;
                    break
                }
            case "CHECKOUT_PUBLIC":
                {
                    n = (o = t == null ? void 0 : t.data) == null ? void 0 : o.response;
                    break
                }
            case "AUTH":
                {
                    n = (s = t == null ? void 0 : t.data) == null ? void 0 : s.data;
                    break
                }
            case "AUTH_PRIVATE":
                {
                    n = (i = t == null ? void 0 : t.data) == null ? void 0 : i.data;
                    break
                }
            case "KRATOS":
                {
                    n = (a = t == null ? void 0 : t.data) == null ? void 0 : a.data;
                    break
                }
            case "KRATOS_PUBLIC":
                {
                    n = (l = t == null ? void 0 : t.data) == null ? void 0 : l.data;
                    break
                }
            case "KRATOS_PRIVATE":
                {
                    n = (E = t == null ? void 0 : t.data) == null ? void 0 : E.data;
                    break
                }
            case "CE":
                {
                    n = (f = t == null ? void 0 : t.data) == null ? void 0 : f.data;
                    break
                }
            case "CE_PUBLIC":
                {
                    n = (T = t == null ? void 0 : t.data) == null ? void 0 : T.data;
                    break
                }
            case "SEGMENTS":
                {
                    n = (h = t == null ? void 0 : t.data) == null ? void 0 : h.data;
                    break
                }
        }
        return n
    },
    ye = (e, t, n = "CHECKOUT", r) => K(void 0, null, function*() {
        n === "CHECKOUT" && (yield Pt());
        const {
            headers: o,
            base: s
        } = fn(n, e);
        try {
            const i = yield Ye.post(`${s}${e}`, t, {
                headers: r ? _(_({}, r), o) : o
            });
            return En(n, i)
        } catch (i) {
            throw /\/(checkout|cart)$/.test(e) ? new dn("Checkout API Error", {
                err: i,
                url: e,
                payload: t
            }) : i
        }
    }),
    xe = (e, t, n = "CHECKOUT", r = 0, o = !1) => K(void 0, null, function*() {
        n === "CHECKOUT" && (yield Pt());
        const {
            headers: s,
            base: i
        } = fn(n, e);
        try {
            const a = yield Ye.put(`${i}${e}`, t, {
                headers: s
            });
            return o ? a : En(n, a)
        } catch (a) {
            throw /\/checkout$/.test(e) ? new dn("Checkout API Error", {
                err: a,
                url: e,
                payload: t
            }) : a
        }
    }),
    Re = (e, t = "CHECKOUT") => K(void 0, null, function*() {
        t === "CHECKOUT" && (yield Pt());
        const {
            headers: n,
            base: r
        } = fn(t, e);
        try {
            const o = yield Ye.get(`${r}${e}`, {
                headers: n
            });
            return En(t, o)
        } catch (o) {
            throw o
        }
    }),
    sn = (e, t, n = "CHECKOUT") => K(void 0, null, function*() {
        n === "CHECKOUT" && (yield Pt());
        const {
            headers: r,
            base: o
        } = fn(n, e);
        try {
            const s = yield Ye.delete(`${o}${e}`, {
                data: t,
                headers: r
            });
            return En(n, s)
        } catch (s) {
            throw s
        }
    }),
    As = e => K(void 0, null, function*() {
        try {
            const t = yield Yi();
            if (navigator != null && navigator.sendBeacon && Blob && !t) {
                const n = new Blob([JSON.stringify(e)]);
                return navigator.sendBeacon(`${Xo}`, n), !0
            } else return yield Ye.post(`${Xo}`, e), !0
        } catch (t) {
            throw t
        }
    }),
    Q_ = (e, t) => K(void 0, null, function*() {
        try {
            yield ye(`/checkout/v1/checkout/${t}/survey`, e)
        } catch (n) {
            throw n
        }
    });

function aa(e) {
    const n = new URL(window.location.href).hostname;
    return Zs.some(o => o instanceof RegExp ? o.test(e) : e.includes(o)) && n !== "localhost" && ra
}

function fn(e = "CHECKOUT", t) {
    const {
        headers: n,
        base: r
    } = ia(e), o = `${r}${t}`;
    return aa(o), {
        headers: n,
        base: r
    }
}
class ca {
    constructor(t) {
        jt(this, "channel", null);
        jt(this, "channelName");
        jt(this, "senderId");
        this.channelName = t;
        const n = xi("page");
        this.senderId = n || "checkout", this.init()
    }
    init() {
        typeof BroadcastChannel != "undefined" ? this.channel = new BroadcastChannel(this.channelName) : console.warn("BroadcastChannel not supported")
    }
    broadcast(t, n) {
        if (!this.channel) return;
        const r = {
            type: t,
            payload: n,
            senderId: this.senderId
        };
        this.channel.postMessage(r)
    }
    onMessage(t, n = !0) {
        this.channel && this.channel.addEventListener("message", r => {
            const o = r.data;
            n && o.senderId === this.senderId || t(o)
        })
    }
    close() {
        this.channel && (this.channel.close(), this.channel = null)
    }
}
const wn = e => new ca(e),
    Zo = {
        USER_LOGGED_OUT: "USER_LOGGED_OUT",
        USER_LOGGED_IN: "USER_LOGGED_IN"
    },
    Un = {
        SHOPFLO_CHANNEL: "shopflo-channel"
    };
wn(Un.SHOPFLO_CHANNEL);
var _a = (e => (e.ADDRESS_SELECT = "ADDRESS_SELECT", e))(_a || {}),
    Xe = (e => (e.CUSTOM_DISCOUNT = "CUSTOM_DISCOUNT", e.CART_DISCOUNT = "CART_DISCOUNT", e.PREPAID = "PREPAID", e.REWARD_AS_DISCOUNT = "REWARD_AS_DISCOUNT", e.PAYMENT_OFFER = "PAYMENT_OFFER", e.BXGY = "BXGY", e))(Xe || {}),
    an = (e => (e.HEADER = "HEADER", e.FOOTER = "FOOTER", e))(an || {}),
    Pe = (e => (e.UARC_001 = "UARC_001", e.UARC_002 = "UARC_002", e.UARC_003 = "UARC_003", e.UARC_004 = "UARC_004", e.UARC_005 = "UARC_005", e.UARC_006 = "UARC_006", e.UARC_007 = "UARC_007", e.UARC_008 = "UARC_008", e.UARC_009 = "UARC_009", e.UARC_010 = "UARC_010", e))(Pe || {});
const Z_ = e => {
        if (e && Lt()) try {
            ys(e)
        } catch (t) {
            console.error("Error while invoking truecaller", t)
        }
    },
    Ls = () => Ts() ? Cs() === "Android" : !1,
    la = e => {
        var n, r, o, s, i, a, l, E, f, T, h, S, I, p, C, R, B, L, g, H, w, c, V, q, z, k, d, b, P, Q, v, Z, O, $, re, Y, u, ee, ie, ae, oe, G, F, j, J, U, x, Oe, M, ne, Ee, _e, de, he, pe, Ie, ge, Ce, Le, le, be, W, ce, Ae, Te, Se, ke, Fe, Be, me, A, N, fe, Ve, Ge, $e, Qe, et, se, We, qe, ze, Me, it, Rt, dt, kt, wt, Ut, Dt, Bt, Mt, Ft, Ht, xt, vt, Kt, Vt, Gt, Yt, $t, Wt, qt, zt, Zn, Jn, er, tr, nr, rr, or, sr, ir, ar, cr, _r, lr, ur, dr, Er, fr, Or, Tr, Cr, Sr, yr, hr, Ir, pr, br, gr, Ar, Lr, mr, Pr, Nr, Rr, kr, wr, Ur, Dr, Br, Mr, Fr, Hr, xr, vr, Kr, Vr, Gr, Yr, $r, Wr, qr, zr, jr, Xr, Qr, Zr, Jr, eo, to, no, ro, oo, so, io, ao, co, _o, lo, uo, Eo, fo, Oo, To, Co, So, yo, ho, Io, po, bo, go, Ao, Lo, mo, Po, No, Ro, ko, wo, Uo, Do, Bo, Mo, Fo, Ho, xo, vo, Ko, Vo;
        return m(_(m(_({
            merchantId: e == null ? void 0 : e.uid,
            displayName: (s = (o = (r = (n = e == null ? void 0 : e.account_attributes) == null ? void 0 : n.attributes) == null ? void 0 : r.shop_data) == null ? void 0 : o.name) != null ? s : "Shopflo Technologies",
            colorPallet: {
                primaryColor: (E = (l = (a = (i = e == null ? void 0 : e.account_attributes) == null ? void 0 : i.attributes) == null ? void 0 : a.ui) == null ? void 0 : l.color_pallet) == null ? void 0 : E.primary_color,
                secondaryColor: (S = (h = (T = (f = e == null ? void 0 : e.account_attributes) == null ? void 0 : f.attributes) == null ? void 0 : T.ui) == null ? void 0 : h.color_pallet) == null ? void 0 : S.secondary_color
            },
            primaryCtaConfig: ua(e),
            couponDisplayConfig: da(e),
            trustBadgeConfig: Ea(e),
            couponStackLength: (C = (p = (I = e == null ? void 0 : e.account_attributes) == null ? void 0 : I.attributes) == null ? void 0 : p.max_discount_stack_length) != null ? C : 2,
            logoUrl: (g = (L = (B = (R = e == null ? void 0 : e.account_attributes) == null ? void 0 : R.attributes) == null ? void 0 : B.ui) == null ? void 0 : L.logo_url) != null && g.length ? (c = (w = (H = e == null ? void 0 : e.account_attributes) == null ? void 0 : H.attributes) == null ? void 0 : w.ui) == null ? void 0 : c.logo_url : (q = (V = e == null ? void 0 : e.account_attributes) == null ? void 0 : V.attributes) == null ? void 0 : q.logo_url,
            isDiscountEnabled: (b = (d = (k = (z = e == null ? void 0 : e.account_attributes) == null ? void 0 : z.attributes) == null ? void 0 : k.ui) == null ? void 0 : d.is_discounts_enabled) != null ? b : !0,
            prepaidDiscounts: {
                type: (v = (Q = (P = e == null ? void 0 : e.account_attributes) == null ? void 0 : P.attributes) == null ? void 0 : Q.prepaid_discounts) == null ? void 0 : v.type,
                value: ($ = (O = (Z = e == null ? void 0 : e.account_attributes) == null ? void 0 : Z.attributes) == null ? void 0 : O.prepaid_discounts) == null ? void 0 : $.value,
                limit: (u = (Y = (re = e == null ? void 0 : e.account_attributes) == null ? void 0 : re.attributes) == null ? void 0 : Y.prepaid_discounts) == null ? void 0 : u.limit,
                enabled: (ae = (ie = (ee = e == null ? void 0 : e.account_attributes) == null ? void 0 : ee.attributes) == null ? void 0 : ie.prepaid_discounts) == null ? void 0 : ae.enabled
            },
            addressConfig: {
                isGSTInputEnabled: (F = (G = (oe = e == null ? void 0 : e.account_attributes) == null ? void 0 : oe.attributes) == null ? void 0 : G.address_config) == null ? void 0 : F.gst_input_enabled,
                isBillingAddressEnabled: (x = (U = (J = (j = e == null ? void 0 : e.account_attributes) == null ? void 0 : j.attributes) == null ? void 0 : J.address_config) == null ? void 0 : U.billing_address_enabled) != null ? x : !1,
                isInternationalAddressEnabled: (ne = (M = (Oe = e == null ? void 0 : e.account_attributes) == null ? void 0 : Oe.attributes) == null ? void 0 : M.address_config) == null ? void 0 : ne.international_address_enabled,
                deliveryConfig: {
                    isEnabled: (he = (de = (_e = (Ee = e == null ? void 0 : e.account_attributes) == null ? void 0 : Ee.attributes) == null ? void 0 : _e.address_config) == null ? void 0 : de.delivery_config) == null ? void 0 : he.enabled,
                    deliveryText: (Ce = (ge = (Ie = (pe = e == null ? void 0 : e.account_attributes) == null ? void 0 : pe.attributes) == null ? void 0 : Ie.address_config) == null ? void 0 : ge.delivery_config) == null ? void 0 : Ce.delivery_text,
                    isETDEnabled: (ce = (W = (be = (le = (Le = e == null ? void 0 : e.account_attributes) == null ? void 0 : Le.attributes) == null ? void 0 : le.address_config) == null ? void 0 : be.delivery_config) == null ? void 0 : W.is_etd_enabled) != null ? ce : !1
                },
                codConfig: {
                    verifyCod: (ke = (Se = (Te = (Ae = e == null ? void 0 : e.account_attributes) == null ? void 0 : Ae.attributes) == null ? void 0 : Te.address_config) == null ? void 0 : Se.cod_config) == null ? void 0 : ke.verify_cod
                },
                disable_unavailable_pincode: (A = (me = (Be = (Fe = e == null ? void 0 : e.account_attributes) == null ? void 0 : Fe.attributes) == null ? void 0 : Be.address_config) == null ? void 0 : me.disable_unavailable_pincode) != null ? A : !1,
                enabledCountries: (Ge = (Ve = (fe = (N = e == null ? void 0 : e.account_attributes) == null ? void 0 : N.attributes) == null ? void 0 : fe.address_config) == null ? void 0 : Ve.enabled_countries) != null ? Ge : []
            },
            discountSettings: {
                showMaxDiscount: (se = (et = (Qe = ($e = e == null ? void 0 : e.account_attributes) == null ? void 0 : $e.attributes) == null ? void 0 : Qe.discounts) == null ? void 0 : et.max_discount_enabled) != null ? se : !0
            },
            brandUrl: (qe = (We = e == null ? void 0 : e.account_attributes) == null ? void 0 : We.attributes) == null ? void 0 : qe.website_url
        }, !!((it = (Me = (ze = e == null ? void 0 : e.account_attributes) == null ? void 0 : ze.attributes) == null ? void 0 : Me.ui) != null && it.custom_auth_banner) && {
            customBanners: {
                auth: (kt = (dt = (Rt = e == null ? void 0 : e.account_attributes) == null ? void 0 : Rt.attributes) == null ? void 0 : dt.ui) == null ? void 0 : kt.custom_auth_banner
            }
        }), {
            isTwoStepCheckout: (Bt = (Dt = (Ut = (wt = e == null ? void 0 : e.account_attributes) == null ? void 0 : wt.attributes) == null ? void 0 : Ut.metadata) == null ? void 0 : Dt.is_two_step_checkout) != null ? Bt : !1,
            showAllItemProperties: (xt = (Ht = (Ft = (Mt = e == null ? void 0 : e.account_attributes) == null ? void 0 : Mt.attributes) == null ? void 0 : Ft.metadata) == null ? void 0 : Ht.show_all_item_properties) != null ? xt : !1,
            showOriginalPrice: (Gt = (Vt = (Kt = (vt = e == null ? void 0 : e.account_attributes) == null ? void 0 : vt.attributes) == null ? void 0 : Kt.metadata) == null ? void 0 : Vt.show_original_price) != null ? Gt : !1,
            showItemPropertyKey: (qt = (Wt = ($t = (Yt = e == null ? void 0 : e.account_attributes) == null ? void 0 : Yt.attributes) == null ? void 0 : $t.metadata) == null ? void 0 : Wt.show_item_property_key) != null ? qt : !1
        }), !!((Jn = (Zn = (zt = e == null ? void 0 : e.account_attributes) == null ? void 0 : zt.attributes) == null ? void 0 : Zn.ui) != null && Jn.item_properties) && {
            itemProperties: (nr = (tr = (er = e == null ? void 0 : e.account_attributes) == null ? void 0 : er.attributes) == null ? void 0 : tr.ui) == null ? void 0 : nr.item_properties
        }), {
            analytics: (rr = e == null ? void 0 : e.analytics) != null ? rr : {},
            showCheckoutExitConfirmation: (ar = (ir = (sr = (or = e == null ? void 0 : e.account_attributes) == null ? void 0 : or.attributes) == null ? void 0 : sr.ui) == null ? void 0 : ir.show_exit_confirmation) != null ? ar : !0,
            exitCheckoutAction: (ur = (lr = (_r = (cr = e == null ? void 0 : e.account_attributes) == null ? void 0 : cr.attributes) == null ? void 0 : _r.ui) == null ? void 0 : lr.exit_checkout_action) != null ? ur : "none",
            marketingContextText: (fr = (Er = (dr = e == null ? void 0 : e.account_attributes) == null ? void 0 : dr.attributes) == null ? void 0 : Er.marketing_consent_text) != null ? fr : "",
            salesCommsContext: (Cr = (Tr = (Or = e == null ? void 0 : e.account_attributes) == null ? void 0 : Or.attributes) == null ? void 0 : Tr.sales_comms_context) != null ? Cr : 1,
            codVerification: (hr = (yr = (Sr = e == null ? void 0 : e.account_attributes) == null ? void 0 : Sr.attributes) == null ? void 0 : yr.cod_verification) != null ? hr : "POST_COD",
            domain: (br = (pr = (Ir = e == null ? void 0 : e.account_attributes) == null ? void 0 : Ir.attributes) == null ? void 0 : pr.shop_data) == null ? void 0 : br.domain,
            celebrationPopupConfig: {
                celebrationsTotalSavingsBtnText: (mr = (Lr = (Ar = (gr = e == null ? void 0 : e.account_attributes) == null ? void 0 : gr.attributes) == null ? void 0 : Ar.ui) == null ? void 0 : Lr.celebration_popup_config) == null ? void 0 : mr.total_savings_btn_text,
                freebieAppliedCelebrationsText: (kr = (Rr = (Nr = (Pr = e == null ? void 0 : e.account_attributes) == null ? void 0 : Pr.attributes) == null ? void 0 : Nr.ui) == null ? void 0 : Rr.celebration_popup_config) == null ? void 0 : kr.freebie_applied_celebrations_text,
                freeGiftsText: (Br = (Dr = (Ur = (wr = e == null ? void 0 : e.account_attributes) == null ? void 0 : wr.attributes) == null ? void 0 : Ur.ui) == null ? void 0 : Dr.celebration_popup_config) == null ? void 0 : Br.free_gifts_text
            },
            forceCustomThankYouPage: (Hr = (Fr = (Mr = e == null ? void 0 : e.account_attributes) == null ? void 0 : Mr.attributes) == null ? void 0 : Fr.force_custom_thank_you_page) != null ? Hr : !1,
            upiTileWithIcons: (Kr = (vr = (xr = e == null ? void 0 : e.account_attributes) == null ? void 0 : xr.attributes) == null ? void 0 : vr.upi_tile_with_icons) != null ? Kr : !1,
            hideCODpopup: (Yr = (Gr = (Vr = e == null ? void 0 : e.account_attributes) == null ? void 0 : Vr.attributes) == null ? void 0 : Gr.hide_cod_popup) != null ? Yr : !1,
            showShippingOnPayments: (qr = (Wr = ($r = e == null ? void 0 : e.account_attributes) == null ? void 0 : $r.attributes) == null ? void 0 : Wr.show_shipping_on_popup) != null ? qr : !1,
            maxQuantityPerItem: (jr = (zr = e == null ? void 0 : e.account_attributes) == null ? void 0 : zr.attributes) == null ? void 0 : jr.max_quantity_per_item,
            isMarketingPopupEnabled: (Zr = (Qr = (Xr = e == null ? void 0 : e.account_attributes) == null ? void 0 : Xr.attributes) == null ? void 0 : Qr.new_sso_popup_enabled) != null ? Zr : !1,
            immutablePriceBand: {
                minPrice: (to = (eo = (Jr = e == null ? void 0 : e.account_attributes) == null ? void 0 : Jr.attributes) == null ? void 0 : eo.immutable_price_band) == null ? void 0 : to.min_price,
                maxPrice: (oo = (ro = (no = e == null ? void 0 : e.account_attributes) == null ? void 0 : no.attributes) == null ? void 0 : ro.immutable_price_band) == null ? void 0 : oo.max_price
            },
            splitCod: {
                excludeCodCharges: (co = (ao = (io = (so = e == null ? void 0 : e.account_attributes) == null ? void 0 : so.attributes) == null ? void 0 : io.split_cod) == null ? void 0 : ao.exclude_cod_charges) != null ? co : !1
            },
            hideShippingMaxDays: (uo = (lo = (_o = e == null ? void 0 : e.account_attributes) == null ? void 0 : _o.attributes) == null ? void 0 : lo.hide_shipping_max_days) != null ? uo : !1,
            customCartCheckoutEnabled: (Oo = (fo = (Eo = e == null ? void 0 : e.account_attributes) == null ? void 0 : Eo.attributes) == null ? void 0 : fo.custom_cart_checkout_enabled) != null ? Oo : !1,
            hideCartTotal: (So = (Co = (To = e == null ? void 0 : e.account_attributes) == null ? void 0 : To.attributes) == null ? void 0 : Co.hide_cart_total) != null ? So : !1,
            cartNote: {
                enabled: (po = (Io = (ho = (yo = e == null ? void 0 : e.account_attributes) == null ? void 0 : yo.attributes) == null ? void 0 : ho.cart_note) == null ? void 0 : Io.enabled) != null ? po : !1,
                title: (mo = (Lo = (Ao = (go = (bo = e == null ? void 0 : e.account_attributes) == null ? void 0 : bo.attributes) == null ? void 0 : go.cart_note) == null ? void 0 : Ao.metadata) == null ? void 0 : Lo.title) != null ? mo : "",
                suggestionText: (wo = (ko = (Ro = (No = (Po = e == null ? void 0 : e.account_attributes) == null ? void 0 : Po.attributes) == null ? void 0 : No.cart_note) == null ? void 0 : Ro.metadata) == null ? void 0 : ko.suggestion_text) != null ? wo : "",
                icon: (Fo = (Mo = (Bo = (Do = (Uo = e == null ? void 0 : e.account_attributes) == null ? void 0 : Uo.attributes) == null ? void 0 : Do.cart_note) == null ? void 0 : Bo.metadata) == null ? void 0 : Mo.icon) != null ? Fo : "EDIT"
            },
            disableMarketingConsent: !!((xo = (Ho = e == null ? void 0 : e.account_attributes) == null ? void 0 : Ho.attributes) != null && xo.disable_marketing_consent),
            showUpiIconsOnCartButton: (Vo = (Ko = (vo = e == null ? void 0 : e.account_attributes) == null ? void 0 : vo.attributes) == null ? void 0 : Ko.show_upi_icons_on_cart_button) != null ? Vo : !1
        })
    },
    ms = e => {
        var n, r, o;
        const t = !!((o = (r = (n = e == null ? void 0 : e.account_attributes) == null ? void 0 : n.attributes) == null ? void 0 : r.metadata) != null && o.is_two_step_checkout);
        return !ue.get(X.REFRESH_TOKEN_COOKIE_CLIENT) && t
    },
    ua = e => {
        var o, s, i;
        const t = [{
                type: "AUTH",
                ctaText: D("add_address")
            }, {
                type: "ORDER_SUMMARY",
                ctaText: D("proceed_to_pay")
            }, {
                type: "PAYMENTS",
                ctaText: ""
            }],
            n = (i = (s = (o = e == null ? void 0 : e.account_attributes) == null ? void 0 : o.attributes) == null ? void 0 : s.ui) == null ? void 0 : i.primary_cta_config;
        if (!Array.isArray(n) || !n) return t;
        let r = [];
        return n.forEach(a => {
            var E;
            const l = {
                type: a == null ? void 0 : a.type,
                ctaText: a != null && a.cta_text ? a == null ? void 0 : a.cta_text : (E = t.find(f => f === (a == null ? void 0 : a.type))) == null ? void 0 : E.ctaText
            };
            r.push(l)
        }), r
    },
    da = e => {
        var o, s, i;
        const t = [{
                type: "AUTH",
                isDisplayEnabled: !0,
                displayType: "INPUT"
            }, {
                type: "ORDER_SUMMARY",
                isDisplayEnabled: !0,
                displayType: "INPUT"
            }, {
                type: "PAYMENTS",
                isDisplayEnabled: !0,
                displayType: "INPUT"
            }],
            n = (i = (s = (o = e == null ? void 0 : e.account_attributes) == null ? void 0 : o.attributes) == null ? void 0 : s.ui) == null ? void 0 : i.coupon_visibility_config;
        if (!Array.isArray(n) || !n) return t;
        let r = [];
        return n.forEach(a => {
            const l = {
                type: a == null ? void 0 : a.type,
                isDisplayEnabled: a == null ? void 0 : a.visibile,
                displayType: (a == null ? void 0 : a.visibility_extent) === "codeEntry" ? "INPUT" : "STRIP"
            };
            r.push(l)
        }), r
    },
    Ea = e => {
        var s, i, a, l, E;
        const t = {
                type: "AUTH",
                showBadges: !1,
                badges: []
            },
            n = (a = (i = (s = e == null ? void 0 : e.account_attributes) == null ? void 0 : s.attributes) == null ? void 0 : i.ui) == null ? void 0 : a.trust_badges;
        if (!n) return t;
        const r = (l = n.badges) == null ? void 0 : l.filter(f => f.isActive);
        return {
            type: (E = n == null ? void 0 : n.type) != null ? E : "AUTH",
            showBadges: !!(n != null && n.showBadges),
            badges: r != null ? r : []
        }
    },
    Ps = e => {
        const t = new Date;
        t.setDate(t.getDate() + e);
        const n = t.toLocaleDateString("en-US", {
                weekday: "short"
            }),
            r = t.getDate(),
            o = t.toLocaleDateString("en-US", {
                month: "short"
            });
        return `Earliest delivery by ${n}, ${r} ${o}`
    },
    fa = e => {
        const t = e != null && e.min_days_to_deliver ? parseInt(e == null ? void 0 : e.min_days_to_deliver) : 4;
        return Ps(t)
    },
    J_ = (e, t, n, r) => {
        if (!e && !t) return null;
        const o = i => i === 1 ? "day" : "days";
        if (r && e) return Ps(e);
        const s = `${e} - ${t} ${o(t)}`;
        return `${n} ${e?s:`${t} ${o(t)}`}`
    },
    On = (e, t, n) => {
        var s, i, a, l, E, f, T, h, S, I, p, C, R, B, L, g;
        const o = new URLSearchParams(window.location.search).get("page") === "marketing-popup";
        if (e && typeof e != "undefined") {
            (i = (s = document == null ? void 0 : document.documentElement) == null ? void 0 : s.style) == null || i.setProperty("--flo-primary-dark-color", `${e}`), (l = (a = document == null ? void 0 : document.documentElement) == null ? void 0 : a.style) == null || l.setProperty("--flo-primary-light-color", `${jo(e.substring(0,7),.3)}`), (f = (E = document == null ? void 0 : document.documentElement) == null ? void 0 : E.style) == null || f.setProperty("--flo-primary-lighter-color", `${jo(e.substring(0,7),.1)}`), (h = (T = document == null ? void 0 : document.documentElement) == null ? void 0 : T.style) == null || h.setProperty("--flo-primary-with-alpha-05", `${on(e.substring(0,7),.05)}`), (I = (S = document == null ? void 0 : document.documentElement) == null ? void 0 : S.style) == null || I.setProperty("--flo-primary-with-alpha-2", `${on(e.substring(0,7),.2)}`), o ? (C = (p = document == null ? void 0 : document.documentElement) == null ? void 0 : p.style) == null || C.setProperty("--popup-font-family", '"ShopfloPopupFont"') : document.body.style.backgroundColor = "var(--flo-primary-lighter-color)";
            const H = n != null ? n : Ki(e);
            (B = (R = document == null ? void 0 : document.documentElement) == null ? void 0 : R.style) == null || B.setProperty("--flo-primary-btn-text-color", H)
        }
        t && ((g = (L = document == null ? void 0 : document.documentElement) == null ? void 0 : L.style) == null || g.setProperty("--brand-secondary-color", t != null ? t : ""))
    },
    el = {
        [Et.CLOCK]: ii,
        [Et.RETURN]: si,
        [Et.GLOBE]: oi,
        [Et.LOCK]: ri,
        [Et.STAR]: ni,
        [Et.TRUCK]: ti,
        [Et.SMILE]: ei
    };
var Ze = (e => (e.LOYALTY = "LOYALTY", e.REWARDS_WALLET = "REWARDS_WALLET", e.NONE = "NONE", e))(Ze || {}),
    Ns = (e => (e.LOYALTY = "LOYALTY", e.REWARDS_WALLET = "WALLET", e))(Ns || {});
const Oa = e => {
        if (!e || !e) return {
            discountedUpsells: [],
            nonDiscountedUpsells: []
        };
        const t = [],
            n = [];
        try {
            e == null || e.forEach(r => {
                var a, l, E, f, T, h, S, I, p;
                const o = {},
                    s = (a = r == null ? void 0 : r.images) != null && a.find(C => C == null ? void 0 : C.is_primary) ? (E = (l = r == null ? void 0 : r.images) == null ? void 0 : l.find(C => C == null ? void 0 : C.is_primary)) == null ? void 0 : E.src : (T = (f = r == null ? void 0 : r.images) == null ? void 0 : f[0]) == null ? void 0 : T.src;
                (h = r == null ? void 0 : r.images) == null || h.forEach((C, R) => {
                    var B;
                    (B = C == null ? void 0 : C.linked_variant_ids) == null || B.forEach((L, g) => {
                        o[L] = C == null ? void 0 : C.src
                    })
                });
                const i = (I = (S = r == null ? void 0 : r.variants) == null ? void 0 : S.filter(C => !(C != null && C.out_of_stock))) == null ? void 0 : I.map((C, R) => {
                    var B, L;
                    return {
                        variantId: C == null ? void 0 : C.variant_id,
                        name: C == null ? void 0 : C.name,
                        inventoryQuantity: C == null ? void 0 : C.inventory_quantity,
                        inventoryPolicy: (B = C == null ? void 0 : C.inventory_policy) != null ? B : "DENY",
                        currentPrice: C == null ? void 0 : C.current_price,
                        originalPrice: C == null ? void 0 : C.original_price,
                        imageLink: (L = o[C == null ? void 0 : C.variant_id]) != null ? L : s,
                        outOfStock: !!(C != null && C.out_of_stock),
                        currency: C == null ? void 0 : C.currency,
                        taxable: !!(C != null && C.taxable),
                        requiresShipping: !!(C != null && C.requires_shipping),
                        createdAt: C == null ? void 0 : C.created_at,
                        updatedAt: C == null ? void 0 : C.updated_at,
                        isDiscountedUpsell: !!(C != null && C.upsell_discount_applied),
                        discountedPrice: C == null ? void 0 : C.upsell_discounted_price
                    }
                });
                if (!(r != null && r.all_variants_out_of_stock)) {
                    const C = {
                        productId: r == null ? void 0 : r.product_id,
                        name: r == null ? void 0 : r.name,
                        variants: i,
                        allVariantOutOfStock: !!(r != null && r.all_variants_out_of_stock),
                        upsellIds: (p = r == null ? void 0 : r.upsell_ids) != null && p.length ? r == null ? void 0 : r.upsell_ids : [],
                        createdAt: r == null ? void 0 : r.created_at,
                        updatedAt: r == null ? void 0 : r.updated_at
                    };
                    r != null && r.discounted_upsell_present ? n == null || n.push(C) : t == null || t.push(C)
                }
            })
        } catch (r) {
            console.error(r)
        }
        return {
            discountedUpsells: n,
            nonDiscountedUpsells: t
        }
    },
    Ta = e => {
        const t = [];
        return e == null || e.forEach(n => {
            var r, o;
            (r = n == null ? void 0 : n.upsell_ids) != null && r.length && ((o = n == null ? void 0 : n.upsell_ids) == null || o.forEach(s => {
                t.some(i => i === s) || t.push(s)
            }))
        }), t
    },
    tl = e => {
        const t = Ta(e),
            n = [];
        return t.forEach(r => {
            var o;
            n.push({
                upsellId: r,
                products: (o = e == null ? void 0 : e.filter(s => {
                    var i;
                    return (i = s == null ? void 0 : s.upsell_ids) == null ? void 0 : i.includes(r)
                })) == null ? void 0 : o.map(s => s == null ? void 0 : s.product_id)
            })
        }), n
    },
    Dn = ({
        isAuthenticated: e,
        checkoutId: t = null,
        tokenId: n = null
    }) => !t && n ? [`/api/v1/upsell?tokenId=${n}`, "KRATOS"] : [`${e?"/checkout":"/api/v1/checkout"}/${t}/upsell`, e ? "KRATOS_PRIVATE" : "KRATOS"],
    rt = (e, t = !1) => {
        if (!(e != null && e.length)) return [];
        let n = [];
        return e.forEach(r => {
            var l, E, f, T, h, S, I, p, C, R, B, L, g, H, w, c, V, q, z, k;
            let o = r.quantity;
            const s = r.status === "AVAILABLE";
            !s && t && (o = r.inventory_quantity >= 0 ? r.quantity - r.inventory_quantity : r.quantity);
            const i = {
                    item_id: r.id,
                    variant_id: r.item_id,
                    price: (E = (l = r.line_price) == null ? void 0 : l.total) != null ? E : r.price,
                    quantity: o,
                    item_title: (T = (f = r.item_data) == null ? void 0 : f.product_name) != null ? T : r == null ? void 0 : r.name,
                    originalPrice: (S = (h = r.item_data) == null ? void 0 : h.original_price) != null ? S : r.price,
                    markupPrice: r.price,
                    image: (p = (I = r.item_data) == null ? void 0 : I.image) != null ? p : r == null ? void 0 : r.image,
                    is_freebie: r.is_freebie,
                    variant_title: (C = r.item_data) == null ? void 0 : C.variant_name,
                    is_available: s != null ? s : !1,
                    item_properties: St(r.properties) ? (R = r.item_data) == null ? void 0 : R.properties : r.properties,
                    availableQuantity: (B = r.inventory_quantity) != null ? B : 0,
                    isMutable: (g = (L = r.item_data) == null ? void 0 : L.is_mutable) != null ? g : !0,
                    product_id: (H = r.product_id) != null ? H : "",
                    item_url: (c = (w = r.item_data) == null ? void 0 : w.url) != null ? c : "",
                    is_discount_alteration: (V = r.is_discount_alteration) != null ? V : !1,
                    is_platform_fee: (q = r.is_platform_fee) != null ? q : !1,
                    hasProductSelector: r.is_selected ? !!r.is_selected : !1,
                    appliedItemAddOns: (k = (z = r.item_addons) == null ? void 0 : z.filter(d => !(d != null && d.removed))) != null ? k : [],
                    rawItem: r
                },
                a = n.findIndex(d => (d == null ? void 0 : d.price) === (i == null ? void 0 : i.price) && (d == null ? void 0 : d.variant_id) === (i == null ? void 0 : i.variant_id));
            if (a > -1 && r.is_freebie) {
                n[a].quantity = n[a].quantity + o;
                return
            }
            n.push(i)
        }), n
    },
    zn = e => {
        var n, r, o, s;
        return e ? {
            total_payable: e.total_payable,
            sub_total: e.sub_total,
            discount: e.discount,
            tax: e.tax,
            rewards: e == null ? void 0 : e.rewards,
            shipping: e.shipping,
            total: e.total,
            cod: e.cod,
            taxes_included: e.taxes_included,
            cod_enabled: e.cod_enabled,
            serviceable: e.serviceable,
            prepaid_total: e.total,
            prepaid_discount: (n = e.prepaid_discount) != null ? n : e.total,
            original_sub_total: (r = e.original_sub_total) != null ? r : e.sub_total,
            addon_total: (o = e.addon_total) != null ? o : 0,
            gift_card: (s = e.gift_card) != null ? s : 0
        } : {
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
            original_sub_total: 0,
            addon_total: 0,
            gift_card: 0
        }
    },
    pn = e => !e || !(e != null && e.length) ? [] : e == null ? void 0 : e.filter(n => {
        var r, o, s, i, a, l;
        return !(n != null && n.is_prepaid) && (((r = n == null ? void 0 : n.coupon_metadata) == null ? void 0 : r.coupon_type) !== Xe.REWARD_AS_DISCOUNT || ((o = n == null ? void 0 : n.coupon_metadata) == null ? void 0 : o.coupon_type) === Xe.REWARD_AS_DISCOUNT && (((i = (s = n == null ? void 0 : n.coupon_metadata) == null ? void 0 : s.coupon_reward_config) == null ? void 0 : i.wallet_type) === "CRED" || ((l = (a = n == null ? void 0 : n.coupon_metadata) == null ? void 0 : a.coupon_reward_config) == null ? void 0 : l.wallet_type) === "TICKERTAPE"))
    }).map((n, r) => {
        var i, a, l, E, f, T, h, S, I, p, C, R, B, L, g, H, w, c, V, q, z, k, d, b, P, Q, v;
        const o = (i = n == null ? void 0 : n.coupon_metadata) == null ? void 0 : i.concession_amount;
        return {
            code: n == null ? void 0 : n.discount_code,
            title: (l = (a = n == null ? void 0 : n.coupon_metadata) == null ? void 0 : a.title) != null ? l : "",
            autoApplied: (E = n == null ? void 0 : n.auto_applied) != null ? E : !1,
            isManualCode: !1,
            isFreebie: (f = n == null ? void 0 : n.is_freebie) != null ? f : !1,
            discountValue: n == null ? void 0 : n.discount,
            isRemovable: (T = n == null ? void 0 : n.is_removable) != null ? T : !1,
            freebieItemCount: (S = (h = n == null ? void 0 : n.coupon_metadata) == null ? void 0 : h.item_count) != null ? S : 0,
            isPrepaid: (I = n == null ? void 0 : n.is_prepaid) != null ? I : !1,
            prepaidValue: (C = (p = n == null ? void 0 : n.coupon_metadata) == null ? void 0 : p.max_discount) != null ? C : 0,
            discountPercentage: o,
            isReward: ((R = n == null ? void 0 : n.coupon_metadata) == null ? void 0 : R.coupon_type) === Xe.REWARD_AS_DISCOUNT,
            couponType: (B = n == null ? void 0 : n.coupon_metadata) == null ? void 0 : B.coupon_type,
            couponRewardConfig: {
                amount: (g = (L = n == null ? void 0 : n.coupon_metadata) == null ? void 0 : L.coupon_reward_config) == null ? void 0 : g.amount,
                walletType: (w = (H = n == null ? void 0 : n.coupon_metadata) == null ? void 0 : H.coupon_reward_config) == null ? void 0 : w.wallet_type,
                expiryConfig: (V = (c = n == null ? void 0 : n.coupon_metadata) == null ? void 0 : c.coupon_reward_config) == null ? void 0 : V.expiry_config,
                couponId: (z = (q = n == null ? void 0 : n.coupon_metadata) == null ? void 0 : q.coupon_reward_config) == null ? void 0 : z.coupon_id
            },
            rewardData: {
                header: (k = n == null ? void 0 : n.coupon_metadata) == null ? void 0 : k.header,
                description: (d = n == null ? void 0 : n.coupon_metadata) == null ? void 0 : d.description,
                longDescription: (b = n == null ? void 0 : n.coupon_metadata) == null ? void 0 : b.long_description
            },
            isProductSelector: ((n == null ? void 0 : n.show_selector) === void 0 || (n == null ? void 0 : n.show_selector) === null || (n == null ? void 0 : n.show_selector) === !0) && !!((P = n == null ? void 0 : n.selected_items) != null && P.length || ((Q = n == null ? void 0 : n.coupon_metadata) == null ? void 0 : Q.coupon_code) === "COD2PREPAID" && ((v = n == null ? void 0 : n.cart_alterations) != null && v.some(Z => (Z == null ? void 0 : Z.type) === "SHOW_PRODUCT_SELECTOR")))
        }
    }),
    bn = e => !e || !(e != null && e.length) ? [] : e == null ? void 0 : e.filter(n => n.type === "GC").map(n => {
        var o;
        return {
            cardId: n == null ? void 0 : n.src_reference_id,
            cardValue: n == null ? void 0 : n.amount,
            displayName: (o = n == null ? void 0 : n.metadata) == null ? void 0 : o.code
        }
    }),
    gn = e => {
        var r, o;
        if (!e || !(e != null && e.length)) return {
            id: "",
            title: "",
            desc: "",
            totalPoints: 0,
            totalPrice: 0,
            provider: "NONE"
        };
        const t = e == null ? void 0 : e.filter(s => s.type === "LOYALTY")[0];
        return {
            id: (r = t == null ? void 0 : t.metadata) == null ? void 0 : r.redemption_id,
            title: "",
            desc: "",
            totalPoints: (o = t == null ? void 0 : t.metadata) == null ? void 0 : o.points,
            totalPrice: t == null ? void 0 : t.amount,
            provider: t == null ? void 0 : t.provider
        }
    },
    An = e => {
        var r, o, s, i;
        if (!e || !(e != null && e.length)) return {
            earnMultiplier: 1,
            totalReducedPoints: 0,
            totalReductionAmount: 0
        };
        const t = (r = e == null ? void 0 : e.filter(a => a.type === Ns.REWARDS_WALLET)) == null ? void 0 : r[0];
        return {
            earnMultiplier: 1,
            totalReducedPoints: (s = (o = t == null ? void 0 : t.metadata) == null ? void 0 : o.points) != null ? s : 0,
            totalReductionAmount: (i = t == null ? void 0 : t.amount) != null ? i : 0
        }
    },
    nl = e => !!(e != null && e.find(t => (t == null ? void 0 : t.autoApplied) === !0)),
    rl = (e, t) => {
        var r;
        if (!(e != null && e.length) || !t) return;
        const n = e.find(o => {
            var s;
            return ((s = o.coupon_details) == null ? void 0 : s.coupon_code) === t
        });
        if (n) return (r = n == null ? void 0 : n.coupon_details) == null ? void 0 : r.coupon_id
    },
    ol = e => {
        if (!e || !e.length) return;
        let t = _({}, e[0]);
        return e.forEach(n => {
            n.selected_handle && (t = _({}, n))
        }), t
    },
    sl = e => !e || !e.length ? [] : e.filter(t => t == null ? void 0 : t.cod_enabled),
    il = e => {
        let t = 0,
            n = "";
        return e != null && e.length ? (e.forEach(r => {
            var o, s, i, a;
            (r.applicable || ((o = r == null ? void 0 : r.un_applicability_reason) == null ? void 0 : o.reason) === "UARC_002") && ((i = (s = r.coupon_details) == null ? void 0 : s.tags) != null && i.includes("SHOPFLO")) && t < r.total_discount && (t = r.total_discount, n = (a = r.coupon_details) == null ? void 0 : a.coupon_code)
        }), {
            maxCouponDiscountAmount: t,
            maxCouponDiscountCode: n
        }) : {
            maxCouponDiscountAmount: t,
            maxCouponDiscountCode: n
        }
    },
    Ca = e => {
        if (!e) return 0;
        let t = 0;
        return e == null || e.forEach(n => t += n.quantity), t
    },
    al = (e, t, n) => {
        if (St(e)) return "";
        let r = "";
        const o = Sa(e, t, n);
        for (let s in o) o.hasOwnProperty(s) && (r += `${o[s]} / `);
        return r = r.trim(), r.charAt(r.length - 1) === "/" && (r = r.slice(0, -2)), r
    },
    Sa = (e, t, n) => {
        const r = Object.fromEntries(Object.entries(e).filter(([s]) => !s.startsWith("_")));
        if (n) return r;
        const o = {};
        return t == null || t.forEach(s => {
            const i = r[s];
            i && (o[s] = i)
        }), o
    },
    Rs = e => {
        var r;
        return (e == null ? void 0 : e.external_auth_enabled) ? [{
            provider: e == null ? void 0 : e.auth_provider,
            redirectUrl: (r = e == null ? void 0 : e.metadata) == null ? void 0 : r.deep_link_url,
            requestId: e == null ? void 0 : e.request_id
        }] : []
    },
    Jo = e => {
        try {
            if (!e || !Array.isArray(e)) return;
            const t = [];
            e.forEach(n => {
                var o;
                const r = {
                    id: n.variant_id,
                    quantity: n.quantity,
                    productId: n.product_id,
                    price: n.price,
                    isFreebie: (o = n.is_freebie) != null ? o : !1
                };
                t.push(r)
            }), He(De.CART_UPDATE, {
                items: t
            })
        } catch (t) {
            console.error(t)
        }
    },
    ya = (e, t, n, r = !1) => {
        var o, s, i;
        try {
            if (e < 0 || !t) return;
            const a = t.find(E => parseInt(E.item_id) === parseInt(e));
            if (!a) return;
            const l = {
                id: a.variant_id,
                quantity: n === "delete" ? 0 : a.quantity,
                productId: a.product_id,
                price: a.price,
                isFreebie: (o = a.is_freebie) != null ? o : !1,
                shopfloId: (i = (s = a.item_properties) == null ? void 0 : s.shopflo_id) != null ? i : null
            };
            He(De.ITEM_UPDATE, {
                item: l,
                isCartItem: r
            })
        } catch (a) {
            console.error(a)
        }
    },
    es = (e, t) => {
        const n = t === an.HEADER ? e == null ? void 0 : e.banner_config : e == null ? void 0 : e.bottom_banner_config;
        if (!Array.isArray(n) || !n) return;
        let r = [];
        return n.forEach(o => {
            const s = {
                type: o.type,
                bagroundColor: o.background_color,
                enabled: o.enabled,
                htmlString: o.html_text_string,
                textColor: o.text_color
            };
            r.push(s)
        }), r
    },
    ha = e => {
        if (!e || St(e)) return Es;
        const {
            amountBased: t,
            countBased: n
        } = ci(e);
        return t.isEnabled ? t : n
    },
    Ia = e => {
        const t = e == null ? void 0 : e.primary_cta_config;
        if (!Array.isArray(t) || !t) return;
        let n = [];
        return t.forEach(r => {
            const o = {
                type: r.type,
                ctaText: r.cta_text
            };
            n.push(o)
        }), n
    },
    ks = (e, t) => {
        const n = e == null ? void 0 : e.coupon_visibility_config;
        return !Array.isArray(n) || !n ? t : n.reduce((o, s) => {
            const i = {
                type: s == null ? void 0 : s.type,
                isDisplayEnabled: (s == null ? void 0 : s.visible) || (s == null ? void 0 : s.visibile),
                displayType: (s == null ? void 0 : s.visibility_extent) === "codeEntry" ? "INPUT" : "STRIP"
            };
            return o.push(i), o
        }, [])
    },
    pa = e => ks(e, [{
        type: "AUTH",
        isDisplayEnabled: !0,
        displayType: "INPUT"
    }, {
        type: "ORDER_SUMMARY",
        isDisplayEnabled: !0,
        displayType: "INPUT"
    }, {
        type: "PAYMENTS",
        isDisplayEnabled: !0,
        displayType: "INPUT"
    }]),
    ba = e => {
        const t = [{
                type: "CART",
                isDisplayEnabled: !0,
                displayType: "STRIP"
            }],
            n = ks(e, t);
        return n.find(r => r.type === "CART") || n.push(t[0]), n
    },
    ga = e => {
        if (!e || St(e)) return;
        const t = ws(e),
            n = {
                couponDisplayConfig: pa(e)
            };
        return _(_({}, t), n)
    },
    Aa = e => {
        if (!e || St(e)) return;
        const t = ws(e),
            n = {
                couponDisplayConfig: ba(e)
            };
        return _(_({}, t), n)
    },
    ws = e => {
        var n, r, o, s, i, a, l, E, f, T, h, S, I, p, C, R;
        return {
            bannerConfig: es(e, an.HEADER),
            bottomBannerConfig: es(e, an.FOOTER),
            upsellConfig: {
                isEnabled: (r = (n = e == null ? void 0 : e.upsell) == null ? void 0 : n.is_enabled) != null ? r : !1,
                title: (s = (o = e == null ? void 0 : e.upsell) == null ? void 0 : o.upsell_title) != null ? s : "",
                discountedTitle: (a = (i = e == null ? void 0 : e.upsell) == null ? void 0 : i.discounted_upsell_title) != null ? a : "",
                shouldOverrideDiscountedUpsell: (E = (l = e == null ? void 0 : e.upsell) == null ? void 0 : l.should_override_discounted_upsell) != null ? E : !1
            },
            layout: {
                available_elements: (T = (f = e == null ? void 0 : e.layout) == null ? void 0 : f.available_elements) != null ? T : void 0,
                allowLogout: (S = (h = e == null ? void 0 : e.layout) == null ? void 0 : h.allow_logout) != null ? S : !0,
                items_mutable: (p = (I = e == null ? void 0 : e.layout) == null ? void 0 : I.items_mutable) != null ? p : !1,
                enableMarketingFlag: (R = (C = e == null ? void 0 : e.layout) == null ? void 0 : C.enable_marketing_flag) != null ? R : !0
            },
            progressBarConfig: e != null && e.progress_bar_attributes ? ha(e.progress_bar_attributes) : Es,
            primaryCTAConfig: Ia(e)
        }
    },
    La = ({
        orderStatusUrl: e,
        originUrl: t,
        tokenId: n
    }) => {
        const r = e || kn(`${t}/pages/order-status?tokenId=${n}`);
        r && nt(r)
    },
    cl = t => K(void 0, [t], function*({
        tokenId: e
    }) {
        var n, r, o;
        if (e) {
            const s = yield ye(`/v2/checkout-tokens/${e}/checkout`, {}, "CHECKOUT_PUBLIC"), {
                token: i
            } = s;
            if ((n = i == null ? void 0 : i.order) != null && n.id) {
                La({
                    originUrl: (r = i == null ? void 0 : i.data) == null ? void 0 : r.origin_url,
                    orderStatusUrl: (o = i == null ? void 0 : i.order) == null ? void 0 : o.order_status_url,
                    tokenId: i == null ? void 0 : i.uid
                });
                return
            }
        }
    }),
    _l = S => K(void 0, [S], function*({
        tokenId: e,
        checkoutIdParam: t,
        oldCheckoutIdParam: n,
        hashParam: r,
        checkoutType: o,
        authContext: s,
        userContext: i,
        checkoutContext: a,
        merchantContext: l,
        analytics: E,
        isCheckoutInteractive: f,
        referrer: T,
        merchantUiConfigContext: h
    }) {
        var P, Q, v, Z, O, $, re, Y, u, ee, ie, ae, oe, G, F, j, J, U, x, Oe;
        if (!e) return;
        const {
            actions: {
                setUserData: I,
                setUserLoginType: p
            }
        } = i, {
            state: {
                isAuthenticated: C
            },
            actions: {
                setThirdPartyAuth: R,
                setLockDiscounts: B
            }
        } = s, {
            actions: {
                checkoutInit: L,
                setCheckoutLoading: g
            },
            state: {
                checkoutId: H
            }
        } = a, {
            actions: {
                setMerchantData: w,
                setAddressConfig: c
            }
        } = l, {
            actions: {
                setFallbackMerchantData: V
            }
        } = h, {
            setThirdPartyAnalyticsData: q,
            setCheckoutChannel: z,
            setClientMetadata: k,
            setLongSessionId: d
        } = E, b = Wn();
        try {
            g(!0);
            let M;
            if (C && T !== "cart") M = H || t ? yield xe("/checkout/v2/checkout", _({
                uid: H || t
            }, (b == null ? void 0 : b.length) && {
                note_attributes: b
            })): yield ye(`/checkout/v2/checkout-tokens/${e}/checkout`, _(_(_({}, (b == null ? void 0 : b.length) && {
                note_attributes: b
            }), n && {
                old_checkout_id: n
            }), o && {
                checkout_type: o
            }));
            else if (C && T === "cart")(H || t) && (yield xe(`/checkout/v1/cart/${H||t}/checkout`, _({}, (b == null ? void 0 : b.length) && {
                note_attributes: b
            }))), M = H || t ? yield xe("/checkout/v2/checkout", _({
                uid: H || t
            }, (b == null ? void 0 : b.length) && {
                note_attributes: b
            })): yield ye(`/checkout/v2/checkout-tokens/${e}/checkout`, _(_({}, (b == null ? void 0 : b.length) && {
                note_attributes: b
            }), o && {
                checkout_type: o
            }));
            else {
                const ge = [t ? xe(`/v1/cart/${H||t}/checkout`, {}, "CHECKOUT_PUBLIC") : ye(`/v2/checkout-tokens/${e}/checkout`, _(_({}, (b == null ? void 0 : b.length) && {
                    note_attributes: b
                }), o && {
                    checkout_type: o
                }), "CHECKOUT_PUBLIC")];
                Ls() && ge.push(ye("/auth-callback/initiate", {
                    token_id: e
                }, "AUTH"));
                const Ce = yield Promise.allSettled(ge);
                if (((P = Ce[0]) == null ? void 0 : P.status) === "rejected") throw (Q = Ce[0]) == null ? void 0 : Q.reason;
                M = Ce[0].value;
                const Le = ms(M == null ? void 0 : M.merchant_attributes) && !!ue.get(X == null ? void 0 : X.TWO_STEP_AUTH_COOKIE_CLIENT),
                    le = !!((O = (Z = (v = M == null ? void 0 : M.checkout) == null ? void 0 : v.metadata) == null ? void 0 : Z.c2p) != null && O.enabled);
                if ((r != null && r.length && (r === "#COD" || r === "#PAYMENTS") || Le && le) && (M = yield ye(`/checkout/v2/checkout-tokens/${e}/checkout`, _({}, o && {
                        checkout_type: o
                    }))), Ce[1] && (($ = Ce[1]) == null ? void 0 : $.status) === "fulfilled") {
                    const W = Rs(Ce[1].value);
                    R(W)
                }
                const be = (u = (Y = (re = M == null ? void 0 : M.checkout) == null ? void 0 : re.metadata) == null ? void 0 : Y.user_details) == null ? void 0 : u.phone;
                be && I({
                    phone: be
                })
            }
            if (!M) return;
            L(M);
            const ne = M == null ? void 0 : M.checkout;
            gt(ot.MERCHANT_ID, ne == null ? void 0 : ne.merchant_id), gt(ot.CHANNEL, (ee = ne == null ? void 0 : ne.metadata) == null ? void 0 : ee.application_id);
            const Ee = M == null ? void 0 : M.merchant_attributes;
            w(Ee), V(Ee == null ? void 0 : Ee.account_attributes);
            const _e = (ie = Ee == null ? void 0 : Ee.account_attributes) == null ? void 0 : ie.attributes;
            gt(ot.SHOP_NAME, _e == null ? void 0 : _e.shop_name);
            const de = _e == null ? void 0 : _e.ui;
            de && On((ae = de == null ? void 0 : de.color_pallet) == null ? void 0 : ae.primary_color, (oe = de == null ? void 0 : de.color_pallet) == null ? void 0 : oe.secondary_color, (G = de == null ? void 0 : de.color_pallet) == null ? void 0 : G.primary_text_color);
            const he = (j = (F = M == null ? void 0 : M.merchant_address_config) == null ? void 0 : F.config) == null ? void 0 : j.fields;
            c(he);
            const pe = M == null ? void 0 : M.token,
                Ie = (J = ne == null ? void 0 : ne.metadata) == null ? void 0 : J.analytics;
            return q(Ie), z((U = ne == null ? void 0 : ne.metadata) == null ? void 0 : U.application_id), k((x = ne == null ? void 0 : ne.metadata) == null ? void 0 : x.client_meta), d((Oe = ne == null ? void 0 : ne.metadata) == null ? void 0 : Oe.long_session_id), {
                checkoutResponse: ne,
                tokenData: pe,
                isCheckoutInteractive: f
            }
        } catch (M) {
            throw M instanceof dn && Os(M, At.CHECKOUT_ERROR), M
        } finally {
            B(!1), g(!1)
        }
    }),
    ll = E => K(void 0, [E], function*({
        tokenId: e,
        hashParam: t,
        authContext: n,
        userContext: r,
        checkoutContext: o,
        merchantContext: s,
        analytics: i,
        isCheckoutInteractive: a,
        isUpdate: l
    }) {
        var V, q, z, k, d, b, P, Q, v, Z, O, $, re, Y, u, ee, ie, ae, oe, G;
        if (!e) return;
        const {
            actions: {
                setUserData: f
            }
        } = r, {
            state: {
                isAuthenticated: T
            },
            actions: {
                setThirdPartyAuth: h,
                setLockDiscounts: S
            }
        } = n, {
            actions: {
                checkoutInit: I,
                setCoupons: p,
                setRawCheckoutObject: C
            }
        } = o, {
            actions: {
                setMerchantData: R,
                setAddressConfig: B
            }
        } = s, {
            setThirdPartyAnalyticsData: L,
            setCheckoutChannel: g,
            setClientMetadata: H,
            setLongSessionId: w
        } = i, c = Wn();
        try {
            let F;
            if (T) {
                F = yield ye(`/checkout/v1/checkout-tokens/${e}/cart`, {});
                const Ee = (V = F == null ? void 0 : F.checkout) == null ? void 0 : V.uid;
                if (l) {
                    const de = yield Re(`/checkout/${Ee}/discount`, "KRATOS_PRIVATE");
                    p(de)
                }
                const {
                    checkoutUIMetadata: _e
                } = o.state;
                (q = _e == null ? void 0 : _e.upsellConfig) != null && q.isEnabled && Ne(Dn({
                    isAuthenticated: T,
                    checkoutId: Ee
                }))
            } else {
                const Ee = [ye(`/v1/checkout-tokens/${e}/cart`, _({}, (c == null ? void 0 : c.length) && {
                    note_attributes: c
                }), "CHECKOUT_PUBLIC")];
                Ls() && Ee.push(ye("/auth-callback/initiate", {
                    token_id: e
                }, "AUTH"));
                const _e = yield Promise.allSettled(Ee);
                if (((z = _e[0]) == null ? void 0 : z.status) === "rejected") return;
                if (F = _e[0].value, _e[1] && ((k = _e[1]) == null ? void 0 : k.status) === "fulfilled") {
                    const Ie = Rs(_e[1].value);
                    h(Ie)
                }
                const de = (d = F == null ? void 0 : F.checkout) == null ? void 0 : d.uid;
                if (l) {
                    const Ie = yield Re(`/checkout/${de}/discount`, "KRATOS_PUBLIC");
                    p(Ie)
                }
                const {
                    checkoutUIMetadata: he
                } = o.state;
                (b = he == null ? void 0 : he.upsellConfig) != null && b.isEnabled && Ne(Dn({
                    isAuthenticated: T,
                    checkoutId: de
                }));
                const pe = (v = (Q = (P = F == null ? void 0 : F.checkout) == null ? void 0 : P.metadata) == null ? void 0 : Q.user_details) == null ? void 0 : v.phone;
                pe && f({
                    phone: pe
                })
            }
            if (!F) return;
            I(F);
            const j = F == null ? void 0 : F.checkout;
            gt(ot.MERCHANT_ID, j == null ? void 0 : j.merchant_id), gt(ot.CHANNEL, (Z = j == null ? void 0 : j.metadata) == null ? void 0 : Z.application_id);
            const J = F == null ? void 0 : F.merchant_attributes;
            R(J);
            const U = (O = J == null ? void 0 : J.account_attributes) == null ? void 0 : O.attributes;
            gt(ot.SHOP_NAME, U == null ? void 0 : U.shop_name);
            const x = U == null ? void 0 : U.ui;
            x && On(($ = x == null ? void 0 : x.color_pallet) == null ? void 0 : $.primary_color, (re = x == null ? void 0 : x.color_pallet) == null ? void 0 : re.secondary_color, (Y = x == null ? void 0 : x.color_pallet) == null ? void 0 : Y.primary_text_color);
            const Oe = (ee = (u = F == null ? void 0 : F.merchant_address_config) == null ? void 0 : u.config) == null ? void 0 : ee.fields;
            B(Oe);
            const M = F == null ? void 0 : F.token,
                ne = (ie = j == null ? void 0 : j.metadata) == null ? void 0 : ie.analytics;
            return L(ne), g((ae = j == null ? void 0 : j.metadata) == null ? void 0 : ae.application_id), H((oe = j == null ? void 0 : j.metadata) == null ? void 0 : oe.client_meta), w((G = j == null ? void 0 : j.metadata) == null ? void 0 : G.long_session_id), C(j), {
                checkoutResponse: j,
                tokenData: M,
                isCheckoutInteractive: a
            }
        } catch (F) {
            throw F instanceof dn && Os(F, At.CART_ERROR), F
        } finally {
            S(!1)
        }
    }),
    ul = (e, t, n) => {
        const r = Ca(e);
        let o = "";
        return o = D("total_items", {
            count: r
        }), n && (o = `${o} • ${pi(t)}`), o
    },
    dl = e => !!e.every(t => (t == null ? void 0 : t.isFreebie) && (t == null ? void 0 : t.autoApplied) && !(t != null && t.isRemovable) && (t == null ? void 0 : t.discountPercentage) === 100),
    ma = (e, t) => e || (t === "fa2fd878-be4e-4466-aad4-7906b6543422" ? "null" : ""),
    Pa = (e, t) => !(e === -1 && t === 0) && !(e === 0 && t === -1) && e !== t,
    Na = e => ({
        expired: !0,
        isInvalidUser: e === "C2P flow inaccessible due to user change"
    }),
    rn = e => {
        const t = [];
        let n = 0,
            r = 0;
        const o = e == null ? void 0 : e.filter(i => {
            var a;
            return ((a = i == null ? void 0 : i.coupon_metadata) == null ? void 0 : a.coupon_type) === Xe.BXGY && ((i == null ? void 0 : i.show_selector) === void 0 || (i == null ? void 0 : i.show_selector) === null || (i == null ? void 0 : i.show_selector) === !0)
        });
        return o == null || o.forEach(i => {
            var E, f;
            const a = (E = i == null ? void 0 : i.coupon_metadata) == null ? void 0 : E.concession_amount,
                l = i == null ? void 0 : i.selected_items;
            (f = i == null ? void 0 : i.cart_alterations) == null || f.forEach(T => {
                var p;
                let h = 0;
                if ((T == null ? void 0 : T.type) !== "SHOW_PRODUCT_SELECTOR") return;
                const S = [];
                (p = T == null ? void 0 : T.product_details) == null || p.forEach(C => {
                    var H, w, c, V, q, z, k;
                    const R = (w = (H = C == null ? void 0 : C.images) == null ? void 0 : H.find(d => d == null ? void 0 : d.is_primary)) == null ? void 0 : w.src,
                        B = R || ((V = (c = C == null ? void 0 : C.images) == null ? void 0 : c[0]) != null && V.src ? (z = (q = C == null ? void 0 : C.images) == null ? void 0 : q[0]) == null ? void 0 : z.src : ""),
                        L = [];
                    (k = C == null ? void 0 : C.variants) == null || k.forEach(d => {
                        var v, Z, O;
                        const b = (Z = (v = C == null ? void 0 : C.images) == null ? void 0 : v.find($ => {
                                var re;
                                return (re = $ == null ? void 0 : $.linked_variant_ids) == null ? void 0 : re.includes(d == null ? void 0 : d.variant_id)
                            })) == null ? void 0 : Z.src,
                            P = l == null ? void 0 : l.find($ => ($ == null ? void 0 : $.variant_id) === (d == null ? void 0 : d.variant_id));
                        let Q = 0;
                        P && (Q = P == null ? void 0 : P.quantity, h += P == null ? void 0 : P.quantity, r += P == null ? void 0 : P.quantity), L.push({
                            id: d == null ? void 0 : d.variant_id,
                            name: (d == null ? void 0 : d.name) === "Default Title" ? "" : d == null ? void 0 : d.name,
                            inventoryPolicy: (O = d == null ? void 0 : d.inventory_policy) != null ? O : "DENY",
                            selectedQuantity: Q,
                            isOutOfStock: d == null ? void 0 : d.out_of_stock,
                            inventoryQuantity: d == null ? void 0 : d.inventory_quantity,
                            originalPrice: d == null ? void 0 : d.original_price,
                            currentPrice: d == null ? void 0 : d.current_price,
                            discountedPrice: d == null ? void 0 : d.discounted_price,
                            imageUrl: b || B
                        })
                    });
                    const g = L.sort((d, b) => b.selectedQuantity - d.selectedQuantity).filter(d => !d.isOutOfStock);
                    S.push({
                        id: C == null ? void 0 : C.product_id,
                        name: C == null ? void 0 : C.name,
                        primaryImageUrl: B,
                        variants: g
                    })
                });
                const I = S.sort((C, R) => R.variants.filter(B => !!B.selectedQuantity).length - C.variants.filter(B => !!B.selectedQuantity).length);
                t.push({
                    couponCode: i == null ? void 0 : i.discount_code,
                    quantity: T == null ? void 0 : T.quantity,
                    selectedQuantity: h,
                    concessionAmount: a,
                    products: I
                }), n += T == null ? void 0 : T.quantity
            })
        }), {
            items: t.sort((i, a) => a.selectedQuantity - i.selectedQuantity),
            totalItems: n,
            totalSelectedItems: r
        }
    },
    Ln = e => {
        const t = e == null ? void 0 : e.filter(r => {
            var o;
            return ((o = r == null ? void 0 : r.coupon_metadata) == null ? void 0 : o.coupon_type) === Xe.BXGY && !!(r != null && r.selected_items)
        });
        return {
            selection: t == null ? void 0 : t.map(r => {
                var o;
                return {
                    discount_code: r == null ? void 0 : r.discount_code,
                    items: (o = r == null ? void 0 : r.selected_items) == null ? void 0 : o.map(s => ({
                        variant_id: s == null ? void 0 : s.variant_id,
                        quantity: s == null ? void 0 : s.quantity
                    }))
                }
            })
        }
    },
    El = (e, t) => {
        var n, r, o, s, i, a;
        return ((n = t == null ? void 0 : t.immutablePriceBand) == null ? void 0 : n.maxPrice) === null || ((r = t == null ? void 0 : t.immutablePriceBand) == null ? void 0 : r.maxPrice) === void 0 || ((o = t == null ? void 0 : t.immutablePriceBand) == null ? void 0 : o.minPrice) === null || ((s = t == null ? void 0 : t.immutablePriceBand) == null ? void 0 : s.minPrice) === void 0 ? !1 : parseFloat(e) >= ((i = t == null ? void 0 : t.immutablePriceBand) == null ? void 0 : i.minPrice) && parseFloat(e) <= ((a = t == null ? void 0 : t.immutablePriceBand) == null ? void 0 : a.maxPrice)
    },
    mn = e => {
        var t, n, r;
        return {
            enabled: (t = e == null ? void 0 : e.enabled) != null ? t : !1,
            header: (n = e == null ? void 0 : e.header) != null ? n : "",
            emptyHeader: (r = e == null ? void 0 : e.empty_header) != null ? r : ""
        }
    },
    Ra = e => {
        var n, r, o;
        const t = {
            enabled: !1,
            header: "",
            emptyHeader: ""
        };
        return e ? {
            isEnabled: e == null ? void 0 : e.enabled,
            config: {
                checkout: mn((n = e == null ? void 0 : e.config) == null ? void 0 : n.checkout),
                cart: mn((r = e == null ? void 0 : e.config) == null ? void 0 : r.cart),
                store: mn((o = e == null ? void 0 : e.config) == null ? void 0 : o.store)
            }
        } : {
            isEnabled: !1,
            config: {
                checkout: t,
                cart: t,
                store: t
            }
        }
    },
    ts = (e, t) => K(void 0, null, function*() {
        try {
            const n = yield xe("/checkout/v2/checkout", {
                uid: e,
                note_attributes: [{
                    name: "customer_type",
                    value: t
                }]
            });
            if (n != null && n.error) throw new Error("unauthorized")
        } catch (n) {
            console.error(n)
        }
    }),
    fl = (e, t) => !e || !t ? !1 : t == null ? void 0 : t.some(r => {
        const o = e[r == null ? void 0 : r.addon_id];
        return (o == null ? void 0 : o.add_line_item) === !0
    }),
    ka = (e, t, n) => {
        var o, s, i;
        const r = (i = (s = (o = e == null ? void 0 : e.error) == null ? void 0 : o.data) == null ? void 0 : s.map(a => ({
            quantity: a == null ? void 0 : a.quantity,
            variant_id: a == null ? void 0 : a.variant_id
        }))) != null ? i : [];
        return {
            selectedItem: {
                id: t != null ? t : "",
                variantId: n != null ? n : ""
            },
            removableVariantIds: r
        }
    },
    ns = (e, t) => {
        const n = Object.entries(t).map(([o, s]) => s),
            r = e.includes("?") ? "&" : "?";
        return e.concat(r, n.join("&"))
    },
    rs = (e, t) => {
        var s, i, a, l;
        const n = (e == null ? void 0 : e.shipping_address_id) === (e == null ? void 0 : e.billing_address_id);
        let r, o;
        return r = qo((s = e == null ? void 0 : e.shipping_address_id) != null ? s : "", t), n || (o = qo((i = e == null ? void 0 : e.billing_address_id) != null ? i : "", t)), {
            addresses: (l = gi(t, (a = r == null ? void 0 : r.id) != null ? a : "")) != null ? l : [],
            default_billing_address: n ? r : o != null ? o : {},
            default_shipping_address: r != null ? r : {}
        }
    },
    wa = e => {
        var n, r, o, s, i;
        return {
            uid: e == null ? void 0 : e.id,
            email: (n = e == null ? void 0 : e.customer_config) == null ? void 0 : n.email,
            phone: e == null ? void 0 : e.phone_number,
            name: (o = (r = e == null ? void 0 : e.customer_config) == null ? void 0 : r.attributes) == null ? void 0 : o.name,
            marketing_consent: (i = (s = e == null ? void 0 : e.customer_config) == null ? void 0 : s.attributes) == null ? void 0 : i.marketing_consent,
            metadata: {
                first_name: e == null ? void 0 : e.first_name,
                last_name: e == null ? void 0 : e.last_name
            }
        }
    },
    Bn = e => {
        const t = localStorage.getItem(X.ORDER_HISTORY_COOKIE_CLIENT);
        if (!t || !t) return "NA";
        const n = JSON.parse(t)[e];
        return !n || !n ? "NA" : (n == null ? void 0 : n.orders_count) > 0 ? "OLD" : "NEW"
    },
    Ua = (e, t, n) => K(void 0, null, function*() {
        const r = Bn(t);
        if (r === "OLD") {
            ts(n, r);
            return
        }
        try {
            const o = yield Re(`/oms/merchant/${t}/customer/${e}/order-context?status=COMPLETED`, "KRATOS_PRIVATE");
            if ((o == null ? void 0 : o.status) === 401 || (o == null ? void 0 : o.status) === 403) throw new Error("unauthorized");
            const s = localStorage.getItem(X.ORDER_HISTORY_COOKIE_CLIENT),
                i = s ? JSON.parse(s) : {};
            i[t] = o, localStorage.setItem(X.ORDER_HISTORY_COOKIE_CLIENT, JSON.stringify(i)), ts(n, o != null && o.orders_count ? "OLD" : "NEW")
        } catch (o) {
            console.error(o)
        }
    }),
    Mn = y.createContext({
        state: {},
        actions: {}
    });

function Da(e, t) {
    var n;
    switch (t.type) {
        case 0:
            return m(_({}, e), {
                user: _(_(_({}, e.user), t.payload.userData), t.payload.addressData),
                isAddressLoading: (n = t.payload.isAddressLoading) != null ? n : Us.isAddressLoading
            });
        case 1:
            return m(_({}, e), {
                userLoginType: t.payload
            });
        case 2:
            return m(_({}, e), {
                user: m(_({}, e.user), {
                    marketing_consent: t.payload
                })
            });
        case 3:
            return m(_({}, e), {
                user: _(_({}, e.user), t.payload)
            })
    }
    return e
}
const Us = {
        user: {
            uid: "",
            email: "",
            phone: "",
            name: "",
            hasHomeAddr: !1,
            hasWorkAddr: !1
        },
        userLoginType: "na",
        isAddressLoading: !0
    },
    Ol = ({
        initialState: e = Us,
        children: t
    }) => {
        var H;
        const [n, r] = y.useReducer(Da, e), {
            state: {
                checkoutId: o,
                merchantId: s,
                addresses: i
            }
        } = Ke(), [a] = Tt(), l = (H = a.get("page")) == null ? void 0 : H.toLowerCase(), {
            data: E
        } = ct("/gatekeeper/v1/accounts?include=address", w => !nn() || l && l !== "payment-status" ? null : Re(w), _t), {
            data: f,
            isValidating: T
        } = ct("/authenticate/me?required_identifiers=true&populate_external_data=true&populate_account_attributes=true", w => nn() ? Re(w, "AUTH_PRIVATE") : null, _t), h = () => nn() ? (Ne("/gatekeeper/v1/accounts?include=address"), Ne("/authenticate/me?required_identifiers=true&populate_external_data=true&populate_account_attributes=true"), !0) : !1;
        y.useEffect(() => {
            const w = wn(Un.SHOPFLO_CHANNEL);
            return w == null || w.onMessage(c => {
                if (c.type === Zo.USER_LOGGED_IN) {
                    let V = 0;
                    const q = 3,
                        z = setInterval(() => {
                            V++;
                            const d = h();
                            (d || V >= q) && (clearInterval(z), !d && V >= q && console.warn("Failed to get auth cookies after", q, "attempts"))
                        }, 1e3);
                    h() && clearInterval(z)
                }
            }), () => {
                w == null || w.close()
            }
        }, []), y.useEffect(() => {
            if (!(f != null && f.id)) return;
            const w = wa(f);
            r({
                type: 0,
                payload: {
                    userData: w
                }
            })
        }, [f == null ? void 0 : f.id, T]), y.useEffect(() => {
            if (o && (E != null && E.uid)) {
                const {
                    addresses: w,
                    default_billing_address: c,
                    default_shipping_address: V
                } = rs(i, E == null ? void 0 : E.addresses);
                r({
                    type: 0,
                    payload: {
                        addressData: {
                            addresses: w,
                            default_billing_address: c,
                            default_shipping_address: V
                        },
                        isAddressLoading: !1
                    }
                })
            }
        }, [o, E == null ? void 0 : E.uid, i == null ? void 0 : i.shipping_address_id, i == null ? void 0 : i.billing_address_id]), y.useEffect(() => {
            !s || !o || !n.user.uid || n.user.uid && Ua(n.user.uid, s, o).catch(w => {
                console.error("Failed to set user order history:", w)
            })
        }, [s, o, n.user.uid]);
        const S = y.useCallback(w => {
                r({
                    type: 0,
                    payload: {
                        userData: w
                    }
                })
            }, []),
            I = y.useCallback(w => {
                r({
                    type: 1,
                    payload: w
                })
            }, []),
            p = y.useCallback(w => {
                r({
                    type: 2,
                    payload: w
                })
            }, []),
            C = y.useCallback(() => {
                Ne("/authenticate/me?required_identifiers=true&populate_external_data=true&populate_account_attributes=true"), Ne("/gatekeeper/v1/accounts?include=address"), wn(Un.SHOPFLO_CHANNEL).broadcast(Zo.USER_LOGGED_IN, {})
            }, []),
            R = y.useCallback((w, c) => {
                const {
                    addresses: V,
                    default_billing_address: q,
                    default_shipping_address: z
                } = rs(w, c);
                r({
                    type: 3,
                    payload: {
                        addresses: V,
                        default_billing_address: q,
                        default_shipping_address: z
                    }
                })
            }, []),
            B = y.useCallback(() => {
                Ne(() => ["/gatekeeper/v1/accounts?include=address", "/authenticate/me?required_identifiers=true&populate_external_data=true&populate_account_attributes=true"], void 0, !1)
            }, []),
            L = y.useMemo(() => ({
                setUserData: S,
                setUserLoginType: I,
                setMarketingConsent: p,
                setUserAddress: R,
                deleteAddressCache: B,
                updateUser: C
            }), [S, I, p, R, B, C]),
            g = y.useRef(n.user);
        return y.useEffect(() => {
            n.user.uid && n.user.uid !== g.current.uid && He(De.FLO_GHOST_USER, {
                userId: n.user.uid
            }), g.current = n.user
        }, [n.user]), Je.jsx(Mn.Provider, {
            value: {
                state: n,
                actions: L
            },
            "data-sentry-element": "unknown",
            "data-sentry-component": "UserProvider",
            "data-sentry-source-file": "UserProvider.tsx",
            children: t
        })
    };

function Nt() {
    if (!Mn) throw new Error("useUserContext must be used within a UserProvider");
    return y.useContext(Mn)
}
const Ba = (e, t = 3e3) => {
        lt.dismiss(), lt.success(e, {
            duration: t,
            position: "bottom-center",
            style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff"
            }
        })
    },
    ft = (e = "Error. Please try later.", t = 3e3) => {
        lt.dismiss(), lt.error(e, {
            duration: t,
            position: "bottom-center",
            style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff"
            }
        })
    },
    Ma = (e, t = 3e3) => {
        lt.dismiss(), lt(e, {
            icon: "ⓘ",
            duration: t,
            position: "bottom-center",
            style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
                fontSize: "12px"
            }
        })
    },
    os = (e, t = 3e3) => {
        lt.dismiss(), lt(e, {
            icon: Je.jsx(li, {
                size: 16,
                className: "text-white"
            }),
            duration: t,
            position: "bottom-center",
            style: {
                borderRadius: "10px",
                background: "#444",
                color: "#fff",
                fontSize: "12px"
            }
        })
    },
    Fa = () => {
        const {
            state: {
                checkoutItems: e,
                errorResponses: t
            }
        } = Ke(), n = y.useMemo(() => t == null ? void 0 : t.find(i => [Pe.UARC_008, Pe.UARC_009].includes(i.code)), [t]), r = n == null ? void 0 : n.metadata, {
            servicableItems: o,
            unservicableItems: s
        } = y.useMemo(() => r ? e.reduce((a, l) => {
            var E;
            return (E = r == null ? void 0 : r.items) != null && E.some(f => f.item_id === l.variant_id) ? a.unservicableItems.push(l) : a.servicableItems.push(l), a
        }, {
            servicableItems: [],
            unservicableItems: []
        }) : {
            servicableItems: e,
            unservicableItems: []
        }, [e, r]);
        return {
            servicableItems: o,
            unservicableItems: s
        }
    };

function Ha() {
    const {
        state: e
    } = Ke();
    _n();
    const {
        state: {
            user: t
        }
    } = Nt(), {
        unservicableItems: n
    } = Fa(), r = e.errorResponses, o = e.shippingHandles, s = e.checkoutLoading, i = y.useMemo(() => Ds(r), [r]), {
        isAddItemsWorthDeliveryError: a,
        isWeightBasedShippingError: l,
        isSingleItemServicibilityError: E,
        isMultipleItemServicibilityError: f,
        isSelectedAddressNotServiceableError: T
    } = i, h = y.useMemo(() => {
        if (s || St(t)) return "";
        const I = xa(r, {
            user: t,
            count: n.length
        });
        return I || (r.length === 0 && o.length === 0, "")
    }, [r, o, s]), S = y.useCallback(I => {
        I ? os(I) : h && os(h)
    }, [h]);
    return {
        errorMessage: h,
        isItemNotServicable: E || f,
        isAddressNotServicable: T,
        isNotServicable: jn(r) || o.length === 0,
        isAddItemsWorthDelivery: a,
        isWeightBasedShipping: l,
        triggerCheckoutErrorInfoToast: S
    }
}
const Ds = e => {
        const t = {
            isAddItemsWorthDeliveryError: !1,
            isWeightBasedShippingError: !1,
            isSingleItemServicibilityError: !1,
            isMultipleItemServicibilityError: !1,
            isSelectedAddressNotServiceableError: !1
        };
        return e ? e.reduce((n, r) => {
            switch (r.code) {
                case Pe.UARC_006:
                    n.isAddItemsWorthDeliveryError = !0;
                    break;
                case Pe.UARC_007:
                    n.isWeightBasedShippingError = !0;
                    break;
                case Pe.UARC_008:
                    n.isSingleItemServicibilityError = !0;
                    break;
                case Pe.UARC_009:
                    n.isMultipleItemServicibilityError = !0;
                    break;
                case Pe.UARC_010:
                case Pe.UARC_005:
                    n.isSelectedAddressNotServiceableError = !0;
                    break
            }
            return n
        }, t) : t
    },
    xa = (e, {
        user: t,
        count: n
    }) => {
        var l, E, f, T, h;
        if (!e) return "";
        const {
            isAddItemsWorthDeliveryError: r,
            isWeightBasedShippingError: o,
            isSingleItemServicibilityError: s,
            isMultipleItemServicibilityError: i,
            isSelectedAddressNotServiceableError: a
        } = Ds(e);
        if (s || i) return tn.t(n === 1 ? "item_unservicable_on_pincode_one" : "item_unservicable_on_pincode_other", {
            count: n,
            pincode: (l = t == null ? void 0 : t.default_shipping_address) == null ? void 0 : l.zip
        });
        if (r) return (E = e.find(S => S.code === Pe.UARC_006)) == null ? void 0 : E.message;
        if (o) return (f = e.find(S => S.code === Pe.UARC_007)) == null ? void 0 : f.message;
        if (a) {
            const S = (T = e.find(p => p.code === Pe.UARC_005)) == null ? void 0 : T.message,
                I = (h = e.find(p => p.code === Pe.UARC_010)) == null ? void 0 : h.message;
            return S || I
        }
    },
    jn = e => {
        if (!e) return !1;
        const t = [Pe.UARC_006, Pe.UARC_007, Pe.UARC_008, Pe.UARC_009, Pe.UARC_010, Pe.UARC_005];
        return e.some(n => t.includes(n.code))
    };
var ds;
const Bs = ((ds = new URLSearchParams(window.location.search).get("page")) == null ? void 0 : ds.toLowerCase()) === "cart",
    Fn = y.createContext({
        state: {},
        actions: {}
    }),
    Xn = {
        total_payable: 0,
        sub_total: 0,
        total: 0,
        tax: 0,
        rewards: 0,
        discount: 0,
        shipping: -1,
        cod: 0,
        cod_enabled: !1,
        taxes_included: !0,
        serviceable: !0,
        prepaid_total: 0,
        prepaid_discount: 0,
        original_sub_total: 0,
        addon_total: 0,
        gift_card: 0
    };

function va(e, t) {
    var n, r, o, s, i, a, l, E, f, T, h, S, I, p, C, R, B, L, g, H, w, c, V, q, z, k, d, b, P, Q, v, Z, O, $, re, Y, u, ee, ie, ae, oe, G, F, j, J, U, x, Oe, M, ne, Ee, _e, de, he, pe, Ie, ge, Ce, Le, le, be, W, ce, Ae, Te, Se, ke, Fe, Be, me;
    switch (t.type) {
        case "INITIALIZE":
            return t.payload;
        case "SET_LOADING":
            return m(_({}, e), {
                isLoading: t.payload
            });
        case "CHECKOUT_RESPONSE":
            {
                const {
                    billingDetails: A,
                    checkoutId: N,
                    discounts: fe,
                    rewards: Ve,
                    shippingHandles: Ge,
                    checkoutToken: $e,
                    actionUrls: Qe,
                    checkoutItems: et,
                    segmentId: se,
                    checkoutModal: We,
                    discountProductSelectorModal: qe,
                    errorResponses: ze,
                    noteAttributes: Me
                } = t.payload;
                return _(_(m(_(_(_(_(_(_(_(_({}, e), N ? {
                    checkoutId: N
                } : {}), Ge != null && Ge.length ? {
                    shippingHandles: Ge
                } : {}), $e ? {
                    checkoutToken: $e
                } : {}), Qe ? {
                    actionUrls: Qe
                } : {}), We ? {
                    checkoutModal: We
                } : {}), qe ? {
                    discountProductSelectorModal: qe
                } : {}), ze ? {
                    errorResponses: ze
                } : {}), {
                    billing: A,
                    appliedCoupons: pn(fe),
                    discountedProductSelectorData: rn(fe),
                    discountProductSelectorPayload: Ln(fe),
                    appliedGiftCards: bn(Ve),
                    appliedLoyalty: gn(Ve),
                    appliedWalletData: An(Ve),
                    checkoutItems: et
                }), Me && {
                    noteAttributes: Me
                }), se && {
                    segmentId: se
                })
            }
        case "SET_CHECKOUT":
            {
                const {
                    checkoutId: A,
                    orderId: N,
                    billing: fe,
                    appliedCoupons: Ve,
                    appliedGiftCards: Ge,
                    appliedLoyalty: $e,
                    appliedWalletData: Qe,
                    redirectUrl: et,
                    originUrl: se,
                    pgOrderId: We,
                    isBuyNow: qe,
                    shopifySessionId: ze,
                    checkoutToken: Me,
                    coupons: it,
                    isC2P: Rt,
                    shippingHandles: dt,
                    checkoutView: kt,
                    checkoutModal: wt,
                    isTwoStepCheckout: Ut,
                    oosItems: Dt,
                    checkoutItems: Bt,
                    exitSurveyOptions: Mt,
                    checkoutUIMetadata: Ft,
                    actionUrls: Ht,
                    isOrderSummaryOpen: xt,
                    initialCheckoutStep: vt,
                    checkoutItemsMutable: Kt,
                    orderSummaryStyle: Vt,
                    activeComponent: Gt,
                    checkoutValidations: Yt,
                    availableAddOns: $t,
                    appliedCartAddOns: Wt,
                    noteAttributes: qt,
                    segmentId: zt
                } = t.payload;
                return _(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_({}, e), A ? {
                    checkoutId: A
                } : {}), A ? {
                    checkoutId: A
                } : {}), N ? {
                    orderId: N
                } : {}), et ? {
                    redirectUrl: et
                } : {}), se ? {
                    originUrl: se
                } : {}), We ? {
                    pgOrderId: We
                } : {}), typeof qe == "boolean" ? {
                    isBuyNow: qe
                } : {}), ze ? {
                    shopifySessionId: ze
                } : {}), it ? {
                    coupons: it
                } : {}), typeof Rt == "boolean" ? {
                    isC2P: Rt
                } : {}), kt ? {
                    checkoutView: kt
                } : {}), dt != null && dt.length ? {
                    shippingHandles: dt
                } : {}), Me ? {
                    checkoutToken: Me
                } : {}), fe ? {
                    billing: fe
                } : {}), Ve ? {
                    appliedCoupons: Ve
                } : {}), Ge ? {
                    appliedGiftCards: Ge
                } : {}), $e ? {
                    appliedLoyalty: $e
                } : {}), Qe ? {
                    appliedWalletData: Qe
                } : {}), wt ? {
                    checkoutModal: wt
                } : {}), typeof Ut == "boolean" ? {
                    isTwoStepCheckout: Ut
                } : {}), Dt ? {
                    oosItems: Dt
                } : {}), Bt ? {
                    checkoutItems: Bt
                } : {}), Mt ? {
                    exitSurveyOptions: Mt
                } : {}), Ft ? {
                    checkoutUIMetadata: Ft
                } : {}), Ht ? {
                    actionUrls: Ht
                } : {}), xt ? {
                    isOrderSummaryOpen: xt
                } : {}), vt ? {
                    initialCheckoutStep: vt
                } : {}), Kt ? {
                    checkoutItemsMutable: Kt
                } : {}), Vt ? {
                    orderSummaryStyle: Vt
                } : {}), Gt ? {
                    activeComponent: Gt
                } : {}), Yt ? {
                    checkoutValidations: Yt
                } : {}), $t ? {
                    availableAddOns: $t
                } : {}), Wt ? {
                    appliedCartAddOns: Wt
                } : {}), qt ? {
                    noteAttributes: qt
                } : {}), zt ? {
                    segmentId: zt
                } : {})
            }
        case "CHECKOUT_INIT":
            {
                const A = t.payload,
                    N = A == null ? void 0 : A.checkout,
                    fe = A == null ? void 0 : A.merchant_attributes,
                    Ve = !!((r = (n = N == null ? void 0 : N.metadata) == null ? void 0 : n.c2p) != null && r.enabled),
                    Ge = (s = (o = N == null ? void 0 : N.metadata) == null ? void 0 : o.show_shipping_handle_selector) != null ? s : !0;
                let $e = {};Ve && Ge && ($e = {
                    checkoutView: "PAYMENTS",
                    checkoutModal: "SHIPPING_HANDLES"
                });
                const Qe = (l = (a = (i = N == null ? void 0 : N.metadata) == null ? void 0 : i.ui_config) == null ? void 0 : a.survey_options) == null ? void 0 : l.map(se => ({
                        optionId: se == null ? void 0 : se.key,
                        optionLabel: se == null ? void 0 : se.label
                    })),
                    et = (E = N == null ? void 0 : N.discounts) == null ? void 0 : E.some(se => {
                        var We, qe, ze;
                        return ((We = se == null ? void 0 : se.coupon_metadata) == null ? void 0 : We.coupon_type) === Xe.BXGY && ((qe = se == null ? void 0 : se.cart_alterations) == null ? void 0 : qe.some(Me => {
                            var it;
                            return (Me == null ? void 0 : Me.type) === "SHOW_PRODUCT_SELECTOR" && ((it = Me == null ? void 0 : Me.product_details) == null ? void 0 : it.length) > 0
                        })) && !!(se != null && se.selected_items) && ((ze = se == null ? void 0 : se.selected_items) == null ? void 0 : ze.length) === 0 && ((se == null ? void 0 : se.show_selector) === void 0 || (se == null ? void 0 : se.show_selector) === null || (se == null ? void 0 : se.show_selector) === !0)
                    });
                return m(_(m(_({}, e), {
                    checkoutUIMetadata: Bs ? Aa((f = N == null ? void 0 : N.metadata) == null ? void 0 : f.ui_config) : ga((T = N == null ? void 0 : N.metadata) == null ? void 0 : T.ui_config),
                    actionUrls: (h = N == null ? void 0 : N.metadata) == null ? void 0 : h.action_urls,
                    isTwoStepCheckout: ms(fe),
                    redirectUrl: ma(((I = (S = A == null ? void 0 : A.token) == null ? void 0 : S.data) == null ? void 0 : I.redirect_url) || ((C = (p = A == null ? void 0 : A.token) == null ? void 0 : p.data) == null ? void 0 : C.back_url), fe == null ? void 0 : fe.uid),
                    originUrl: (w = (B = (R = A == null ? void 0 : A.token) == null ? void 0 : R.data) == null ? void 0 : B.origin_url) != null ? w : (H = (g = (L = A == null ? void 0 : A.merchant_attributes) == null ? void 0 : L.account_attributes) == null ? void 0 : g.attributes) == null ? void 0 : H.website_url,
                    isBuyNow: !!((V = (c = A == null ? void 0 : A.token) == null ? void 0 : c.data) != null && V.is_buy_now),
                    shopifySessionId: (q = A == null ? void 0 : A.token) == null ? void 0 : q.sf_session_id,
                    checkoutItems: rt(N == null ? void 0 : N.items),
                    appliedCoupons: pn(N == null ? void 0 : N.discounts),
                    discountedProductSelectorData: rn(N == null ? void 0 : N.discounts),
                    discountProductSelectorModal: et ? "FREE_GIFTS" : "NONE",
                    discountProductSelectorPayload: Ln(N == null ? void 0 : N.discounts),
                    appliedGiftCards: bn(N == null ? void 0 : N.rewards),
                    appliedLoyalty: gn(N == null ? void 0 : N.rewards),
                    appliedWalletData: An(N == null ? void 0 : N.rewards),
                    isC2P: Ve,
                    shippingHandles: (k = (z = N == null ? void 0 : N.metadata) == null ? void 0 : z.available_shipping_handles) != null ? k : [],
                    exitSurveyOptions: Qe,
                    checkoutToken: (d = A == null ? void 0 : A.token) == null ? void 0 : d.uid,
                    initialCheckoutStep: ((P = (b = N == null ? void 0 : N.metadata) == null ? void 0 : b.ui_config) == null ? void 0 : P.default_view) === "PAYMENTS" ? "PAYMENTS" : "NONE",
                    isOrderSummaryOpen: ($ = (O = (Z = (v = (Q = N == null ? void 0 : N.metadata) == null ? void 0 : Q.ui_config) == null ? void 0 : v.layout) == null ? void 0 : Z.metadata) == null ? void 0 : O.is_order_summary_open) != null ? $ : !1,
                    checkoutItemsMutable: (ee = (u = (Y = (re = N == null ? void 0 : N.metadata) == null ? void 0 : re.ui_config) == null ? void 0 : Y.layout) == null ? void 0 : u.items_mutable) != null ? ee : !1,
                    orderSummaryStyle: ((ae = (ie = N == null ? void 0 : N.metadata) == null ? void 0 : ie.ui_config) == null ? void 0 : ae.default_view) === "PAYMENTS" && ((G = (oe = fe == null ? void 0 : fe.account_attributes) == null ? void 0 : oe.attributes) != null && G.is_one_page_checkout) ? "HEADER" : (U = (J = (j = (F = N == null ? void 0 : N.metadata) == null ? void 0 : F.ui_config) == null ? void 0 : j.layout) == null ? void 0 : J.order_summary_style) != null ? U : "TILE"
                }), $e), {
                    uid: N == null ? void 0 : N.uid,
                    wishlistConfig: Ra((Oe = (x = fe == null ? void 0 : fe.account_attributes) == null ? void 0 : x.attributes) == null ? void 0 : Oe.wishlist),
                    appliedCartAddOns: (Ee = (ne = (M = A == null ? void 0 : A.checkout) == null ? void 0 : M.cart_addons) == null ? void 0 : ne.filter(se => !(se != null && se.removed))) != null ? Ee : [],
                    availableAddOns: (de = (_e = A == null ? void 0 : A.checkout) == null ? void 0 : _e.available_addons) != null ? de : {},
                    errorResponses: (pe = (he = N == null ? void 0 : N.metadata) == null ? void 0 : he.error_responses) != null ? pe : [],
                    hiddenElements: (Le = (Ce = (ge = (Ie = N == null ? void 0 : N.metadata) == null ? void 0 : Ie.ui_config) == null ? void 0 : ge.layout) == null ? void 0 : Ce.hidden_elements) != null ? Le : [],
                    noteAttributes: (be = (le = N == null ? void 0 : N.metadata) == null ? void 0 : le.note_attributes) != null ? be : [],
                    addresses: {
                        shipping_address_id: (W = N == null ? void 0 : N.addresses) == null ? void 0 : W.shipping_address_id,
                        billing_address_id: (ce = N == null ? void 0 : N.addresses) == null ? void 0 : ce.billing_address_id
                    },
                    merchantId: N == null ? void 0 : N.merchant_id
                })
            }
        case "SET_DISCOUNTS_AND_REWARDS":
            return m(_({}, e), {
                appliedCoupons: pn((Ae = t.payload) == null ? void 0 : Ae.discounts),
                discountedProductSelectorData: rn((Te = t.payload) == null ? void 0 : Te.discounts),
                discountProductSelectorPayload: Ln((Se = t.payload) == null ? void 0 : Se.discounts),
                appliedGiftCards: bn((ke = t.payload) == null ? void 0 : ke.rewards),
                appliedLoyalty: gn((Fe = t.payload) == null ? void 0 : Fe.rewards),
                appliedWalletData: An((Be = t.payload) == null ? void 0 : Be.rewards)
            });
        case "SET_BILLING":
            return m(_({}, e), {
                billing: (me = t.payload) != null ? me : Xn
            });
        case "SET_REDIRECT_URL":
            return m(_({}, e), {
                redirectUrl: t.payload
            });
        case "SET_ORIGIN_URL":
            return m(_({}, e), {
                originUrl: t.payload
            });
        case "SET_COUPONS":
            return m(_({}, e), {
                coupons: t.payload
            });
        case "SET_SHIPPING_HANDLES":
            return m(_({}, e), {
                shippingHandles: t.payload
            });
        case "SET_CHECKOUT_TOKEN":
            return m(_({}, e), {
                checkoutToken: t.payload
            });
        case "SET_CHECKOUT_ID":
            return m(_({}, e), {
                checkoutId: t.payload
            });
        case "SET_CHECKOUT_VIEW":
            return m(_({}, e), {
                checkoutView: t.payload
            });
        case "SET_CHECKOUT_MODAL":
            return m(_({}, e), {
                checkoutModal: t.payload
            });
        case "SET_OOS_ITEMS":
            return m(_({}, e), {
                oosItems: t.payload
            });
        case "SET_CHECKOUT_ITEMS":
            return m(_({}, e), {
                checkoutItems: t.payload
            });
        case "SET_CHECKOUT_EXPIRED":
            return m(_({}, e), {
                checkoutExpired: t.payload
            });
        case "SET_SHOW_ERROR_SCREEN":
            return m(_({}, e), {
                showErrorScreen: t.payload
            });
        case "SET_ACTIVE_COMPONENT":
            return m(_({}, e), {
                activeComponent: t.payload
            });
        case "SET_CHECKOUT_VALIDATIONS":
            return m(_({}, e), {
                checkoutValidations: t.payload
            });
        case "SET_IS_ORDER_SUMMARY_OPEN":
            return m(_({}, e), {
                isOrderSummaryOpen: t.payload
            });
        case "SET_ETD_TEXT":
            return m(_({}, e), {
                etdText: m(_({}, e.etdText), {
                    [t.payload.addressId]: t.payload.text
                })
            });
        case "SET_DISCOUNTED_PRODUCT_SELECTOR":
            return m(_({}, e), {
                discountedProductSelectorData: t.payload
            });
        case "SET_DISCOUNT_PRODUCT_SELECTOR_PAYLOAD":
            return m(_({}, e), {
                discountProductSelectorPayload: t.payload
            });
        case "SET_CART_DIALOG":
            return m(_({}, e), {
                cartDialog: t.payload
            });
        case "SET_DISCOUNT_PRODUCT_SELECTOR_MODAL":
            return m(_({}, e), {
                discountProductSelectorModal: t.payload
            });
        case "SET_HAS_COD_MODE":
            return m(_({}, e), {
                hasCODMode: t.payload
            });
        case "SET_CHECKOUT_LOADING":
            return m(_({}, e), {
                checkoutLoading: t.payload
            });
        case "SET_INITIAL_CHECKOUT_STEP":
            return m(_({}, e), {
                initialCheckoutStep: t.payload
            });
        case "SET_RAW_CHECKOUT_OBJECT":
            return m(_({}, e), {
                rawCheckoutObject: t.payload
            });
        case "SET_COMBINED_PRODUCT_REMOVAL_ITEMS":
            return m(_({}, e), {
                combinedProductRemovalItems: t.payload
            })
    }
    return e
}
const Ka = {
        showErrorScreen: !1,
        isLoading: !0,
        checkoutId: "",
        orderId: "",
        billing: Xn,
        appliedCoupons: [],
        appliedGiftCards: [],
        appliedLoyalty: {
            id: "",
            title: "",
            desc: "",
            totalPoints: 0,
            totalPrice: 0,
            provider: "NONE"
        },
        appliedWalletData: {
            earnMultiplier: 1,
            totalReducedPoints: 0,
            totalReductionAmount: 0
        },
        redirectUrl: "",
        originUrl: "",
        pgOrderId: "",
        isBuyNow: !1,
        shopifySessionId: "",
        checkoutToken: "",
        coupons: [],
        isC2P: !1,
        shippingHandles: [],
        checkoutView: "NA",
        checkoutModal: "NONE",
        isTwoStepCheckout: !1,
        oosItems: [],
        checkoutItems: [],
        exitSurveyOptions: [],
        initialCheckoutStep: "NONE",
        isOrderSummaryOpen: !1,
        checkoutItemsMutable: !1,
        orderSummaryStyle: "HEADER",
        activeComponent: "NONE",
        checkoutValidations: {
            address: {
                isValid: !0
            },
            shipping: {
                isValid: !0
            },
            cartLoginPopup: {
                isValid: !0
            }
        },
        etdText: {},
        uid: "",
        discountedProductSelectorData: {
            items: [],
            totalItems: 0,
            totalSelectedItems: 0
        },
        discountProductSelectorPayload: {
            selection: []
        },
        discountProductSelectorModal: "NONE",
        cartDialog: null,
        wishlistConfig: {
            isEnabled: !1,
            config: {
                checkout: {
                    enabled: !1,
                    header: "",
                    emptyHeader: ""
                },
                cart: {
                    enabled: !1,
                    header: "",
                    emptyHeader: ""
                },
                store: {
                    enabled: !1,
                    header: "",
                    emptyHeader: ""
                }
            }
        },
        segmentId: "",
        hasCODMode: !0,
        appliedCartAddOns: [],
        availableAddOns: {},
        errorResponses: [],
        hiddenElements: [],
        checkoutLoading: !0,
        rawCheckoutObject: {},
        noteAttributes: [],
        combinedProductRemovalItems: {
            selectedItem: {
                id: "",
                variantId: ""
            },
            removableVariantIds: []
        },
        addresses: {},
        merchantId: ""
    },
    Tl = ({
        initialState: e = Ka,
        children: t
    }) => {
        const [n, r] = y.useReducer(va, e), o = y.useCallback((O, $ = !1, re = !1) => {
            var oe, G, F, j, J, U, x, Oe, M, ne, Ee, _e, de, he, pe, Ie, ge, Ce, Le, le, be;
            if (!O) return;
            let Y = {};
            if (O.pricing) {
                const W = (oe = zn(O.pricing)) != null ? oe : Xn;
                Y = m(_({}, Y), {
                    billingDetails: W
                }), !re && Pa(n.billing.shipping, W.shipping) && !jn((G = O == null ? void 0 : O.metadata) == null ? void 0 : G.error_responses) && Ba(tn.t("shipping_fee_updated"))
            }
            if ($) {
                const W = (F = O == null ? void 0 : O.discounts) == null ? void 0 : F.filter(ce => {
                    var Ae, Te, Se, ke, Fe, Be;
                    return !(ce != null && ce.is_prepaid) && (((Ae = ce == null ? void 0 : ce.coupon_metadata) == null ? void 0 : Ae.coupon_type) !== Xe.REWARD_AS_DISCOUNT || ((Te = ce == null ? void 0 : ce.coupon_metadata) == null ? void 0 : Te.coupon_type) === Xe.REWARD_AS_DISCOUNT && (((ke = (Se = ce == null ? void 0 : ce.coupon_metadata) == null ? void 0 : Se.coupon_reward_config) == null ? void 0 : ke.wallet_type) === "CRED" || ((Be = (Fe = ce == null ? void 0 : ce.coupon_metadata) == null ? void 0 : Fe.coupon_reward_config) == null ? void 0 : Be.wallet_type) === "TICKERTAPE"))
                });
                W != null && W.length && (W == null ? void 0 : W.length) !== ((j = n.appliedCoupons) == null ? void 0 : j.length) && ft(tn.t("coupon_not_found"))
            }
            O.checkout_token_id && (Y = m(_({}, Y), {
                tokenId: O.checkout_token_id
            })), O.uid && (Y = m(_({}, Y), {
                checkoutId: O.uid
            })), O.rewards && (Y = m(_({}, Y), {
                rewards: O.rewards
            })), O != null && O.items && (Y = m(_({}, Y), {
                checkoutItems: rt(O == null ? void 0 : O.items)
            })), (J = O == null ? void 0 : O.metadata) != null && J.action_urls && (Y = m(_({}, Y), {
                actionUrls: O.metadata.action_urls
            })), rn(O.discounts);
            const u = (U = n == null ? void 0 : n.discountedProductSelectorData) == null ? void 0 : U.totalItems;
            let ee = 0;
            (x = O == null ? void 0 : O.discounts) == null || x.forEach(W => {
                var ce, Ae;
                ((ce = W == null ? void 0 : W.coupon_metadata) == null ? void 0 : ce.coupon_type) === Xe.BXGY && ((Ae = W == null ? void 0 : W.cart_alterations) == null || Ae.some(Te => {
                    var Se;
                    (Te == null ? void 0 : Te.type) === "SHOW_PRODUCT_SELECTOR" && ((Se = Te == null ? void 0 : Te.product_details) == null ? void 0 : Se.length) > 0 && (ee += Te == null ? void 0 : Te.quantity)
                }))
            });
            const ie = ee > u && !!u,
                ae = ((Oe = O == null ? void 0 : O.discounts) == null ? void 0 : Oe.some(W => {
                    var ce, Ae, Te;
                    return ((ce = W == null ? void 0 : W.coupon_metadata) == null ? void 0 : ce.coupon_type) === Xe.BXGY && ((Ae = W == null ? void 0 : W.cart_alterations) == null ? void 0 : Ae.some(Se => {
                        var ke;
                        return (Se == null ? void 0 : Se.type) === "SHOW_PRODUCT_SELECTOR" && ((ke = Se == null ? void 0 : Se.product_details) == null ? void 0 : ke.length) > 0
                    })) && !!(W != null && W.selected_items) && ((Te = W == null ? void 0 : W.selected_items) == null ? void 0 : Te.length) === 0 && ((W == null ? void 0 : W.show_selector) === void 0 || (W == null ? void 0 : W.show_selector) === null || (W == null ? void 0 : W.show_selector) === !0)
                })) || ie;
            Y = m(_({}, Y), {
                discountProductSelectorModal: ae ? "FREE_GIFTS" : "NONE"
            }), Y = _(m(_({}, Y), {
                discounts: O.discounts,
                shippingHandles: O.metadata.available_shipping_handles
            }), (O == null ? void 0 : O.segment_id) && {
                segmentId: O == null ? void 0 : O.segment_id
            }), (M = O == null ? void 0 : O.checkout) != null && M.cart_addons && ((ne = O == null ? void 0 : O.checkout) != null && ne.available_addons) && (Y = m(_({}, Y), {
                appliedCartAddOns: (de = (_e = (Ee = O == null ? void 0 : O.checkout) == null ? void 0 : Ee.cart_addons) == null ? void 0 : _e.filter(W => !(W != null && W.removed))) != null ? de : [],
                availableCartAddOns: (he = O == null ? void 0 : O.checkout) == null ? void 0 : he.available_addons
            })), (pe = O == null ? void 0 : O.metadata) != null && pe.error_responses && (Y = m(_({}, Y), {
                errorResponses: (Ie = O == null ? void 0 : O.metadata) == null ? void 0 : Ie.error_responses
            })), (ge = O == null ? void 0 : O.metadata) != null && ge.error_responses && (Y = m(_({}, Y), {
                errorResponses: (Ce = O == null ? void 0 : O.metadata) == null ? void 0 : Ce.error_responses
            })), (Le = O == null ? void 0 : O.metadata) != null && Le.note_attributes && (Y = m(_({}, Y), {
                noteAttributes: (be = (le = O == null ? void 0 : O.metadata) == null ? void 0 : le.note_attributes) != null ? be : []
            })), r({
                type: "CHECKOUT_RESPONSE",
                payload: Y
            })
        }, [n]), s = y.useCallback(O => {
            var ee, ie, ae, oe, G, F;
            o(O);
            let $ = {};
            O != null && O.items && ($ = m(_({}, $), {
                checkoutItems: rt(O == null ? void 0 : O.items)
            })), !((ie = (ee = O == null ? void 0 : O.pricing) == null ? void 0 : ee.serviceable) != null ? ie : !1) && n.checkoutView === "PAYMENTS" && ($ = m(_(_({}, $), n.initialCheckoutStep === "PAYMENTS" ? {
                activeComponent: "ADDRESS_SECTION"
            } : {
                checkoutView: "ADDRESS_LIST"
            }), {
                checkoutToken: (ae = O == null ? void 0 : O.checkout_token_id) != null ? ae : ""
            }), ft(tn.t("serviceability_error"), 5e3));
            const Y = (oe = O == null ? void 0 : O.metadata) == null ? void 0 : oe.available_shipping_handles,
                u = (F = (G = O == null ? void 0 : O.metadata) == null ? void 0 : G.show_shipping_handle_selector) != null ? F : !1;
            $ = m(_({}, $), {
                shippingHandles: Y
            }), u && n.checkoutView === "PAYMENTS" ? $ = _(m(_({}, $), {
                shippingHandles: n.shippingHandles
            }), n.initialCheckoutStep === "PAYMENTS" ? {
                activeComponent: "SHIPPING_SECTION"
            } : {
                checkoutModal: "SHIPPING_HANDLES"
            }) : (Ne(`/checkout/v2/checkout/${n.checkoutId}/payments`), Ne([`/checkout/${n.checkoutId}/rewards`, at.KRATOS_PRIVATE]), Ne("UPI_INTENT")), r({
                type: "SET_CHECKOUT",
                payload: $
            })
        }, [n, o]), i = y.useCallback(O => {
            r({
                type: "CHECKOUT_INIT",
                payload: O
            })
        }, []), a = y.useCallback(O => {
            r({
                type: "SET_SHIPPING_HANDLES",
                payload: O
            })
        }, []), l = O => {
            r({
                type: "SET_CHECKOUT_VIEW",
                payload: O
            })
        }, E = O => {
            r({
                type: "SET_CHECKOUT_MODAL",
                payload: O
            })
        }, f = y.useCallback(O => {
            r({
                type: "SET_OOS_ITEMS",
                payload: O
            })
        }, []), T = y.useCallback(O => {
            r({
                type: "SET_CHECKOUT_ITEMS",
                payload: O
            })
        }, []), h = y.useCallback(O => {
            r({
                type: "SET_CHECKOUT_ID",
                payload: O
            })
        }, []), S = y.useCallback(O => {
            r({
                type: "SET_COUPONS",
                payload: O
            })
        }, []), I = y.useCallback(O => {
            r({
                type: "SET_BILLING",
                payload: O
            })
        }, []), p = y.useCallback((O, $) => {
            r({
                type: "SET_CHECKOUT_EXPIRED",
                payload: {
                    expired: O,
                    isInvalidUser: $
                }
            })
        }, []), C = y.useCallback(O => {
            r({
                type: "SET_SHOW_ERROR_SCREEN",
                payload: O
            })
        }, []), R = y.useCallback(O => {
            r({
                type: "SET_CHECKOUT",
                payload: O
            })
        }, []), B = y.useCallback(O => {
            r({
                type: "SET_ETD_TEXT",
                payload: O
            })
        }, []), L = y.useCallback(O => {
            r({
                type: "SET_ACTIVE_COMPONENT",
                payload: O
            })
        }, []), g = y.useCallback(O => {
            r({
                type: "SET_CHECKOUT_VALIDATIONS",
                payload: O
            })
        }, []), H = y.useCallback(O => {
            r({
                type: "SET_IS_ORDER_SUMMARY_OPEN",
                payload: O
            })
        }, []), w = y.useCallback(O => {
            r({
                type: "SET_DISCOUNTED_PRODUCT_SELECTOR",
                payload: O
            })
        }, []), c = y.useCallback(O => {
            r({
                type: "SET_DISCOUNT_PRODUCT_SELECTOR_PAYLOAD",
                payload: O
            })
        }, []), V = y.useCallback(O => {
            r({
                type: "SET_DISCOUNT_PRODUCT_SELECTOR_MODAL",
                payload: O
            })
        }, []), q = y.useCallback(O => {
            r({
                type: "SET_CART_DIALOG",
                payload: O
            })
        }, []), z = y.useCallback(O => {
            r({
                type: "SET_HAS_COD_MODE",
                payload: O
            })
        }, []), k = y.useCallback(O => {
            r({
                type: "SET_CHECKOUT_LOADING",
                payload: O
            })
        }, []), d = y.useCallback(O => {
            r({
                type: "SET_INITIAL_CHECKOUT_STEP",
                payload: O
            })
        }, []), b = y.useCallback(O => {
            r({
                type: "SET_RAW_CHECKOUT_OBJECT",
                payload: O
            })
        }, []), P = y.useMemo(() => !n.shippingHandles || !n.shippingHandles.length ? !0 : n.shippingHandles.some($ => $.selected_handle), [n]), Q = y.useMemo(() => m(_({}, n), {
            hasDefaultShippingHandleSelected: P
        }), [n, P, Bs]), v = y.useCallback(O => {
            r({
                type: "SET_COMBINED_PRODUCT_REMOVAL_ITEMS",
                payload: O
            })
        }, []), Z = y.useMemo(() => ({
            updateCheckoutBasedOnCheckoutResponse: o,
            updateCheckoutFromPayments: s,
            setShippingHandles: a,
            checkoutInit: i,
            setCheckoutView: l,
            setCheckoutModal: E,
            setOOSItems: f,
            setCheckoutItems: T,
            setCoupons: S,
            setBilling: I,
            setCheckout: R,
            setCheckoutExpired: p,
            setShowErrorScreen: C,
            setActiveComponent: L,
            setCheckoutValidations: g,
            setIsOrderSummaryOpen: H,
            setEtdText: B,
            setDiscountedProductSelectorData: w,
            setDiscountProductSelectorPayload: c,
            setCartDialog: q,
            setDiscountProductSelectorModal: V,
            setHasCODMode: z,
            setCheckoutLoading: k,
            setInitialCheckoutStep: d,
            setRawCheckoutObject: b,
            setCheckoutId: h,
            setCombinedProductRemovalItems: v
        }), [o, s, a, i, l, E, f, T, S, I, R, p, C, L, g, H, B, w, c, q, V, z, k, d, b, h, v]);
        return Je.jsx(Fn.Provider, {
            value: {
                state: Q,
                actions: Z
            },
            "data-sentry-element": "unknown",
            "data-sentry-component": "CheckoutProvider",
            "data-sentry-source-file": "CheckoutProvider.tsx",
            children: t
        })
    };

function Ke() {
    if (!Fn) throw new Error("useCheckoutContext must be used within a CheckoutProvider");
    return y.useContext(Fn)
}
const Hn = y.createContext({
    state: {},
    actions: {}
});

function Va(e, t) {
    switch (t.type) {
        case 0:
            return m(_({}, e), {
                isAuthenticated: t.payload
            });
        case 1:
            return m(_({}, e), {
                lockDiscounts: t.payload
            });
        case 2:
            return m(_({}, e), {
                thirdPartyAuth: t.payload
            });
        case 3:
            return m(_({}, e), {
                isLoggedOut: t.payload
            });
        case 6:
            return m(_({}, e), {
                isAuthenticating: t.payload
            })
    }
    return e
}
const Ga = {
        isAuthenticated: !!un(),
        lockDiscounts: !1,
        thirdPartyAuth: [],
        isLoggedOut: !1,
        isAuthenticating: !0
    },
    Cl = ({
        initialState: e = Ga,
        children: t
    }) => {
        const [n, r] = y.useReducer(Va, e), [o, s] = Tt(), i = y.useCallback(I => {
            r({
                type: 0,
                payload: I
            })
        }, []), a = y.useCallback(I => {
            r({
                type: 1,
                payload: I
            })
        }, []), l = y.useCallback(I => {
            r({
                type: 2,
                payload: I
            })
        }, []), E = y.useCallback(I => {
            r({
                type: 3,
                payload: I
            })
        }, []), f = y.useCallback((I, p, C, R, B) => {
            try {
                Is(I, p, C, R), a(!0), i(!0), B && He(De.LOGIN_FROM_CHECKOUT, {
                    idToken: I,
                    refreshToken: p,
                    authExpiry: C,
                    refreshExpiry: R
                })
            } catch (L) {
                i(!1), console.error(L)
            }
        }, [a, i]), T = y.useCallback(I => {
            ue.remove(X.AUTH_COOKIE_CLIENT, {
                path: "/"
            }), ue.remove(X.REFRESH_TOKEN_COOKIE_CLIENT, {
                path: "/"
            }), localStorage.removeItem(X.ORDER_HISTORY_COOKIE_CLIENT), ue.set(X.AUTH_COOKIE_CLIENT, "", {
                expires: new Date(Date.now() - 1)
            }), ue.set(X.AUTH_LOGGED_OUT, "true", {
                path: "/"
            }), localStorage.removeItem(X.AUTH_COOKIE_CLIENT), localStorage.removeItem(X.REFRESH_TOKEN_COOKIE_CLIENT), localStorage.removeItem(X.LOCAL_STORAGE_AUTH_COOKIE_CLIENT_EXPIRY), localStorage.removeItem(X.LOCAL_STORAGE_REFRESH_TOKEN_COOKIE_CLIENT_EXPIRY), E(!0), a(!0), i(!1), !I && o.has("checkoutId") && !o.has("fromCart") && (He(De.LOGOUT_FROM_CHECKOUT, {}), o == null || o.delete("checkoutId"), o == null || o.append("fromCart", "true"), s(o.toString()))
        }, [a, i, o, s]), h = y.useCallback(I => {
            r({
                type: 6,
                payload: I
            })
        }, []), S = y.useMemo(() => ({
            setLoggedIn: i,
            setLockDiscounts: a,
            setThirdPartyAuth: l,
            setLoggedOut: E,
            login: f,
            logout: T,
            setIsAuthenticating: h
        }), [f, T, a, i, l, h]);
        return Je.jsx(Hn.Provider, {
            value: {
                state: n,
                actions: S
            },
            "data-sentry-element": "unknown",
            "data-sentry-component": "AuthProvider",
            "data-sentry-source-file": "AuthProvider.tsx",
            children: t
        })
    };

function Tn() {
    if (!Hn) throw new Error("useAuthContext must be used within a AuthProvider");
    return y.useContext(Hn)
}
const xn = y.createContext({
    state: {},
    actions: {}
});

function Ya(e, t) {
    switch (t.type) {
        case 0:
            return m(_({}, e), {
                merchant: t.payload
            });
        case 1:
            return m(_({}, e), {
                addressConfig: t.payload
            });
        default:
            return e
    }
}
const $a = {
        addressConfig: []
    },
    Sl = ({
        initialState: e = $a,
        children: t
    }) => {
        const [n, r] = y.useReducer(Ya, e), o = y.useCallback(a => {
            r({
                type: 0,
                payload: la(a)
            })
        }, []), s = y.useCallback(a => {
            r({
                type: 1,
                payload: a
            })
        }, []), i = y.useMemo(() => ({
            setMerchantData: o,
            setAddressConfig: s
        }), [s, o]);
        return Je.jsx(xn.Provider, {
            value: {
                state: n,
                actions: i
            },
            "data-sentry-element": "unknown",
            "data-sentry-component": "MerchantProvider",
            "data-sentry-source-file": "MerchantProvider.tsx",
            children: t
        })
    };

function st() {
    if (!xn) throw new Error("useMerchantContext must be used within a MerchantProvider");
    return y.useContext(xn)
}
const Cn = (e, t, n, r, o) => {
        t && (window.fbq || (() => {
            const s = _(_(_({}, !!n && {
                em: n
            }), !!r && {
                fn: r
            }), !!o && {
                ph: o
            });
            try {
                if (function(i, a, l, E, f, T, h) {
                        i.fbq || (f = i.fbq = function() {
                            f.callMethod ? f.callMethod.apply(f, arguments) : f.queue.push(arguments)
                        }, i._fbq || (i._fbq = f), f.push = f, f.loaded = !0, f.version = "2.0", f.queue = [], T = a.createElement(l), T.async = !0, T.src = E, h = a.getElementsByTagName(l)[0], h.parentNode.insertBefore(T, h))
                    }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"), Array.isArray(t)) {
                    t.forEach(i => {
                        var a;
                        (a = i.channels) != null && a.includes(e) && fbq("init", i.id, s)
                    });
                    return
                }
                fbq("init", t, s)
            } catch (i) {
                console.error("Error while initializing FB Pixel", i)
            }
        })())
    },
    Wa = E => K(void 0, [E], function*({
        orderTotal: e,
        lineItems: t,
        currency: n = "INR",
        sessionId: r,
        pixelId: o,
        userName: s,
        userEmail: i,
        userPhone: a,
        checkoutChannel: l
    }) {
        if (window.fbq || (Cn(l, o, i, s, a), yield mt(100)), !!window.fbq) try {
            const f = {
                content_type: "product_group",
                value: (+e).toFixed(2),
                content_ids: t == null ? void 0 : t.map(T => T.product_id),
                num_items: t == null ? void 0 : t.reduce((T, h) => T + (h.quantity || 0), 0),
                currency: n
            };
            window.fbq("track", "AddPaymentInfo", f, {
                eventID: `payment_initiated-${r}`
            })
        } catch (f) {
            console.error("Error while sending fbq Payment Event", f)
        }
    }),
    qa = E => K(void 0, [E], function*({
        orderTotal: e,
        lineItems: t,
        currency: n = "INR",
        sessionId: r,
        pixelId: o,
        userName: s,
        userEmail: i,
        userPhone: a,
        checkoutChannel: l
    }) {
        if (window.fbq || (Cn(l, o, i, s, a), yield mt(100)), !!window.fbq) try {
            if (!(t != null && t.length)) throw new Error("Facebook Pixel: No line items found");
            const f = {
                content_type: "product_group",
                value: (+e).toFixed(2),
                content_ids: t == null ? void 0 : t.map(T => T.product_id),
                num_items: t == null ? void 0 : t.reduce((T, h) => T + (h.quantity || 0), 0),
                currency: n
            };
            window.fbq("track", "InitiateCheckout", f, {
                eventID: `checkout_initiated-${r}`
            })
        } catch (f) {
            cn(T => {
                T.setTag("error_type", At.PIXEL_ERROR), T.setExtra("lineItems", t), T.setExtra("eventType", "InitiateCheckout"), T.captureException(f)
            })
        }
    }),
    za = E => K(void 0, [E], function*({
        orderTotal: e,
        lineItems: t,
        currency: n = "INR",
        sessionId: r,
        pixelId: o,
        userName: s,
        userEmail: i,
        userPhone: a,
        checkoutChannel: l
    }) {
        if (window.fbq || (Cn(l, o, i, s, a), yield mt(100)), !!window.fbq) try {
            const f = {
                content_type: "product_group",
                value: (+e).toFixed(2),
                content_ids: t == null ? void 0 : t.map(T => T.product_id),
                num_items: t == null ? void 0 : t.reduce((T, h) => T + (h.quantity || 0), 0),
                currency: n
            };
            window.fbq("track", "Purchase", f, {
                eventID: `order_completed-${r}`
            })
        } catch (f) {
            console.error("Error while sending fbq Payment Completed Event", f)
        }
    }),
    ja = E => K(void 0, [E], function*({
        orderTotal: e,
        lineItems: t,
        currency: n = "INR",
        sessionId: r,
        pixelId: o,
        userName: s,
        userEmail: i,
        userPhone: a,
        checkoutChannel: l
    }) {
        if (window.fbq || (Cn(l, o, i, s, a), yield mt(100)), !!window.fbq) try {
            if (!(t != null && t.length)) throw new Error("Facebook Pixel: No line items found");
            const f = {
                content_type: "product_group",
                value: (+e).toFixed(2),
                content_ids: t == null ? void 0 : t.map(T => T.product_id),
                num_items: t == null ? void 0 : t.reduce((T, h) => T + (h.quantity || 0), 0),
                currency: n
            };
            window.fbq("track", "AddToCart", f, {
                eventID: `${te.FLO_ADDED_TO_CART_UI}-${r}`
            })
        } catch (f) {
            cn(T => {
                T.setTag("error_type", At.PIXEL_ERROR), T.setExtra("lineItems", t), T.setExtra("eventType", "AddToCart"), T.captureException(f)
            })
        }
    }),
    Xa = (e, t) => {
        var o;
        const n = [];
        return e == null || e.forEach(s => n.push({
            item_id: s.variant_id,
            price: s.price,
            product_id: s.product_id,
            quantity: s.quantity,
            title: s.item_title,
            variant_id: s.variant_id
        })), {
            currency: "INR",
            line_items: n,
            total_price: (o = t == null ? void 0 : t.total_payable) != null ? o : 0
        }
    };
var Zt = (e => (e.SHOPFLO = "SHOPFLO", e.CUSTOM = "CUSTOM", e))(Zt || {});
let ss = {},
    ht = "",
    is = {},
    as = "";
const Sn = () => {
    var L;
    const {
        state: {
            merchant: e
        }
    } = st(), {
        state: t
    } = Ke(), {
        checkoutId: n,
        shopifySessionId: r,
        checkoutToken: o,
        checkoutView: s,
        billing: i,
        checkoutItems: a,
        segmentId: l
    } = t, {
        state: {
            userLoginType: E,
            user: f
        }
    } = Nt(), [T] = Tt(), h = T.get("page") === "cart" || T.get("page") === "CART", S = ai.parse((L = window == null ? void 0 : window.navigator) == null ? void 0 : L.userAgent);
    return {
        sendAnalyticsEvent: ({
            eventName: g,
            eventFor: H = [Ue.SF_ANALYTICS],
            eventType: w,
            metaData: c,
            context: V = "checkout"
        }) => {
            var q, z, k, d, b, P, Q, v, Z, O, $, re, Y, u, ee, ie, ae, oe, G, F, j, J, U, x, Oe, M, ne, Ee, _e, de, he, pe, Ie, ge, Ce, Le, le, be, W, ce, Ae, Te, Se, ke, Fe;
            if (H.indexOf(Ue.SF_ANALYTICS) > -1) {
                const Be = (q = c == null ? void 0 : c.segmentId) != null ? q : l,
                    me = localStorage.getItem(X.FLO_BUREAU_USER_ID),
                    A = {
                        checkoutId: (z = c == null ? void 0 : c.checkoutId) != null ? z : n,
                        tokenId: (k = c == null ? void 0 : c.checkoutToken) != null ? k : o,
                        uiData: _(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_(_({
                            pageName: h ? "CART" : s,
                            longSessionId: c != null && c.longSessionId ? c.longSessionId : as
                        }, (c == null ? void 0 : c.methodType) && {
                            paymentMethod: (b = (d = c == null ? void 0 : c.methodType) == null ? void 0 : d.toString()) == null ? void 0 : b.toLowerCase()
                        }), (c == null ? void 0 : c.modeType) && {
                            paymentMode: (Q = (P = c == null ? void 0 : c.modeType) == null ? void 0 : P.toString()) == null ? void 0 : Q.toLowerCase()
                        }), (c == null ? void 0 : c.couponData) && {
                            coupon_data: c == null ? void 0 : c.couponData
                        }), (c == null ? void 0 : c.shippingData) && {
                            shippingData: c == null ? void 0 : c.shippingData
                        }), (c == null ? void 0 : c.paymentData) && {
                            paymentData: c == null ? void 0 : c.paymentData
                        }), (c == null ? void 0 : c.bannerData) && {
                            bannerData: c == null ? void 0 : c.bannerData
                        }), (c == null ? void 0 : c.metadata) && {
                            metadata: c == null ? void 0 : c.metadata
                        }), (c == null ? void 0 : c.action) && {
                            action: c == null ? void 0 : c.action
                        }), (c == null ? void 0 : c.authSource) && {
                            authSource: c == null ? void 0 : c.authSource
                        }), (c == null ? void 0 : c.badgesData) && {
                            badgesData: c == null ? void 0 : c.badgesData
                        }), (c == null ? void 0 : c.storeDetails) && _({}, c == null ? void 0 : c.storeDetails)), (c == null ? void 0 : c.methodName) && {
                            methodName: c == null ? void 0 : c.methodName
                        }), (c == null ? void 0 : c.upsellData) && {
                            upsellData: c == null ? void 0 : c.upsellData
                        }), (c == null ? void 0 : c.addressData) && {
                            addressData: c == null ? void 0 : c.addressData
                        }), (c == null ? void 0 : c.issueReason) && {
                            issueReason: c == null ? void 0 : c.issueReason
                        }), (c == null ? void 0 : c.milestone) && {
                            milestone: c == null ? void 0 : c.milestone
                        }), (c == null ? void 0 : c.milestones) && {
                            milestones: c == null ? void 0 : c.milestones
                        }), (c == null ? void 0 : c.progressBarCategory) && {
                            progressBarCategory: c == null ? void 0 : c.progressBarCategory
                        }), (c == null ? void 0 : c.progressBarType) && {
                            progressBarType: c == null ? void 0 : c.progressBarType
                        }), (c == null ? void 0 : c.wishlistData) && {
                            wishlistData: c == null ? void 0 : c.wishlistData
                        }), (c == null ? void 0 : c.itemSelectorData) && {
                            itemSelectorData: c == null ? void 0 : c.itemSelectorData
                        }), (c == null ? void 0 : c.addOnData) && {
                            addOnData: c == null ? void 0 : c.addOnData
                        }), (c == null ? void 0 : c.automationData) && {
                            automationData: c == null ? void 0 : c.automationData
                        }), (c == null ? void 0 : c.errorResponses) && {
                            errorResponses: c == null ? void 0 : c.errorResponses
                        }), (c == null ? void 0 : c.errorSource) && {
                            errorSource: c == null ? void 0 : c.errorSource
                        }), Be && {
                            segmentId: Be
                        }), (c == null ? void 0 : c.loadDuration) && {
                            loadDuration: c == null ? void 0 : c.loadDuration
                        }),
                        clientData: _({
                            browserName: (v = S == null ? void 0 : S.browser) == null ? void 0 : v.name,
                            browserVersion: (Z = S == null ? void 0 : S.browser) == null ? void 0 : Z.version,
                            osName: (O = S == null ? void 0 : S.os) == null ? void 0 : O.name,
                            osVersion: ($ = S == null ? void 0 : S.os) == null ? void 0 : $.version,
                            osVersionName: (re = S == null ? void 0 : S.os) == null ? void 0 : re.versionName,
                            platformModel: (Y = S == null ? void 0 : S.platform) == null ? void 0 : Y.model,
                            platformType: (u = S == null ? void 0 : S.platform) == null ? void 0 : u.type,
                            engineName: (ee = S == null ? void 0 : S.engine) == null ? void 0 : ee.name,
                            engineVersion: (ie = S == null ? void 0 : S.engine) == null ? void 0 : ie.version,
                            isIFrame: Lt(),
                            analytics: ss,
                            brandUrl: (ae = e == null ? void 0 : e.brandUrl) != null ? ae : c == null ? void 0 : c.brandUrl
                        }, is),
                        userData: c != null && c.userData ? _(_({
                            authSource: T.get("auth") ? Zt.CUSTOM : Zt.SHOPFLO,
                            customerType: Bn((oe = e == null ? void 0 : e.merchantId) != null ? oe : "")
                        }, c == null ? void 0 : c.userData), me && {
                            bureauUserId: me
                        }) : _({
                            type: E,
                            userId: f == null ? void 0 : f.uid,
                            authSource: T.get("auth") ? Zt.CUSTOM : Zt.SHOPFLO,
                            customerType: Bn((G = e == null ? void 0 : e.merchantId) != null ? G : "")
                        }, me && {
                            bureauUserId: me
                        }),
                        cart: Xa((F = c == null ? void 0 : c.checkoutItems) != null ? F : a, i)
                    },
                    N = {
                        eventName: g,
                        merchantId: (j = e == null ? void 0 : e.merchantId) != null ? j : c == null ? void 0 : c.merchantId,
                        sessionId: (J = c == null ? void 0 : c.shopifySessionId) != null ? J : r,
                        timestamp: Date.now(),
                        eventPayload: A,
                        eventType: w,
                        channel: (U = c == null ? void 0 : c.channel) != null ? U : ht
                    };
                try {
                    wi(N)
                } catch (fe) {
                    console.error(fe)
                }
                if ([te.FLO_AUTH_LOGIN_COMPLETED, te.FLO_PAYMENT_LOADED, te.FLO_PAYMENT_METHOD_SELECTED].includes(g)) try {
                    const fe = {
                        state: g,
                        merchant_id: (x = e == null ? void 0 : e.merchantId) != null ? x : c == null ? void 0 : c.merchantId
                    };
                    xe(`/checkout/${(Oe=c==null?void 0:c.checkoutId)!=null?Oe:n}/state`, fe, "KRATOS_PRIVATE")
                } catch (fe) {
                    console.error(fe)
                }
            }
            if (H.includes(Ue.FACEBOOK_PIXEL)) {
                const Be = (Ee = c == null ? void 0 : c.isFbqEnabled) != null ? Ee : (ne = (M = e == null ? void 0 : e.analytics) == null ? void 0 : M.facebook) == null ? void 0 : ne.enabled,
                    me = (he = c == null ? void 0 : c.fbqPixelId) != null ? he : (de = (_e = e == null ? void 0 : e.analytics) == null ? void 0 : _e.facebook) == null ? void 0 : de.pixel_id;
                if (!Be || !me) return;
                const A = {
                    userName: (pe = c == null ? void 0 : c.userData) == null ? void 0 : pe.name,
                    userEmail: (Ie = c == null ? void 0 : c.userData) == null ? void 0 : Ie.email,
                    userPhone: (ge = c == null ? void 0 : c.userData) == null ? void 0 : ge.phone
                };
                (g === te.FLO_COOKIE_LOGIN || g === te.FLO_AUTH_PHONE_LOADED) && V === "checkout" && qa({
                    orderTotal: (Le = (Ce = c == null ? void 0 : c.totalPayable) != null ? Ce : i.total_payable) != null ? Le : 0,
                    lineItems: (le = c == null ? void 0 : c.checkoutItems) != null ? le : a,
                    currency: "INR",
                    sessionId: (be = c == null ? void 0 : c.shopifySessionId) != null ? be : r,
                    pixelId: me,
                    checkoutChannel: ht,
                    userDetails: A
                }), g === te.FLO_PAYMENT_METHOD_SELECTED && Wa({
                    orderTotal: (W = i.total_payable) != null ? W : 0,
                    lineItems: a,
                    currency: "INR",
                    sessionId: (ce = c == null ? void 0 : c.shopifySessionId) != null ? ce : r,
                    pixelId: me,
                    checkoutChannel: ht,
                    userDetails: A
                }), g === te.FLO_PAYMENT_COMPLETED && za({
                    orderTotal: (Te = (Ae = c == null ? void 0 : c.orderAmount) != null ? Ae : i.total_payable) != null ? Te : 0,
                    lineItems: a,
                    currency: "INR",
                    sessionId: (Se = c == null ? void 0 : c.shopifySessionId) != null ? Se : r,
                    pixelId: me,
                    checkoutChannel: ht,
                    userDetails: A
                }), g === te.FLO_ADDED_TO_CART_UI && ja({
                    orderTotal: (ke = i.total_payable) != null ? ke : 0,
                    lineItems: a,
                    currency: "INR",
                    sessionId: (Fe = c == null ? void 0 : c.shopifySessionId) != null ? Fe : r,
                    pixelId: me,
                    checkoutChannel: ht,
                    userDetails: A
                })
            }
        },
        setThirdPartyAnalyticsData: g => {
            ss = g
        },
        setCheckoutChannel: g => {
            ht = g
        },
        setClientMetadata: g => {
            var H, w, c;
            is = {
                brandUrl: (H = g == null ? void 0 : g.brand_url) != null ? H : "",
                clientIp: (w = g == null ? void 0 : g.client_ip) != null ? w : "",
                userAgent: (c = g == null ? void 0 : g.user_agent) != null ? c : ""
            }
        },
        setLongSessionId: g => {
            as = g
        }
    }
};
var vn = (e => (e.COD = "COD_ORDER_PLACING", e.OFFLINE_PAYMENT = "OFFLINE_PAYMENT", e))(vn || {});
const Ms = y.createContext({}),
    yl = e => {
        const [t, n] = y.useState(!1), o = {
            isLoading: t,
            setIsLoading: s => {
                n(s)
            }
        };
        return Je.jsx(Ms.Provider, m(_({
            value: o
        }, e), {
            "data-sentry-element": "unknown",
            "data-sentry-component": "LoaderProvider",
            "data-sentry-source-file": "LoaderContext.tsx"
        }))
    },
    Qa = () => ut.useContext(Ms),
    Za = (e, t, n = !0) => K(void 0, null, function*() {
        try {
            return yield yt("https://checkout.razorpay.com/v1/razorpay.js", () => K(void 0, null, function*() {
                window.RzpCustomSdk = window.Razorpay, n && (yield Ja(e, t))
            }))
        } catch (r) {
            throw console.error(r), r
        }
    }),
    Ja = (e, t) => new Promise((n, r) => {
        try {
            window.RzpCustomImpl = new window.Razorpay(_({
                key: e
            }, !!t && {
                account_id: t
            })), window.RzpCustomImpl.once("ready", s => (window.RazorpayPaymentMethods = s == null ? void 0 : s.methods, n(s)))
        } catch (o) {
            throw r(o)
        }
    }),
    ec = () => K(void 0, null, function*() {
        if (window.RzpDefaultImpl) return {};
        try {
            return yield yt("https://checkout.razorpay.com/v1/checkout.js", () => new Promise((t, n) => {
                try {
                    return window.RzpDefaultImpl = window.Razorpay, t({})
                } catch (r) {
                    throw n(r)
                }
            }))
        } catch (e) {
            throw console.error(e), e
        }
    });
const tc = h => K(void 0, [h], function*({
        amount: e,
        currency: t = "INR",
        rzpId: n,
        merchantName: r,
        brandLogoUrl: o,
        brandThemeColor: s = "#5a31f4",
        userName: i,
        userPhone: a,
        userEmail: l,
        method: E,
        onSuccessHandler: f,
        redirectUrl: T
    }) {
        return new Promise((S, I) => {
            try {
                let p = {
                    amount: Math.round(parseInt((e * 100).toFixed(2))),
                    currency: t,
                    name: r,
                    image: o,
                    order_id: n,
                    handler: function(R) {
                        return f(E, R), S({})
                    },
                    prefill: {
                        name: i,
                        email: l,
                        contact: a,
                        method: E
                    },
                    theme: {
                        color: s,
                        hide_topbar: !0
                    }
                };
                T && (p.callback_url = T, p.redirect = !0);
                const C = new window.RzpDefaultImpl(p);
                C.open(), C.on("payment.failed", function(R) {
                    return I(R)
                })
            } catch (p) {
                return console.error(p), I(p)
            }
        })
    }),
    pt = {
        DEFAULT_DEV: "https://sdk.cashfree.com/js/ui/1.0.26/dropinClient.sandbox.js",
        DEFAULT_PROD: "https://sdk.cashfree.com/js/ui/1.0.26/dropinClient.prod.js",
        CUSTOM_DEV: "https://sdk.cashfree.com/js/core/1.0.26/bundle.sandbox.js",
        CUSTOM_PROD: "https://sdk.cashfree.com/js/core/1.0.26/bundle.prod.js",
        PAY_API_DEV: "https://sandbox.cashfree.com/pg/orders/pay",
        PAY_API_PROD: "https://api.cashfree.com/pg/orders/pay",
        DEFAULT_DEV_V3: "https://sdk.cashfree.com/js/ui/2.0.0/cashfree.sandbox.js",
        DEFAULT_PROD_V3: "https://sdk.cashfree.com/js/ui/2.0.0/cashfree.prod.js"
    },
    nc = e => K(void 0, null, function*() {
        let t = e === "v3" ? pt.DEFAULT_DEV_V3 : pt.DEFAULT_DEV;
        t = e === "v3" ? pt.DEFAULT_PROD_V3 : pt.DEFAULT_PROD;
        try {
            return yield yt(t, () => rc())
        } catch (n) {
            throw console.error(n), n
        }
    }),
    rc = () => new Promise((e, t) => {
        try {
            return window.CfDefaultSdk = new window.Cashfree, e({})
        } catch (n) {
            throw t(n)
        }
    }),
    oc = () => K(void 0, null, function*() {
        let e = pt.CUSTOM_DEV;
        e = pt.CUSTOM_PROD;
        try {
            return yield yt(e, () => sc())
        } catch (t) {
            throw console.error(t), t
        }
    }),
    sc = () => new Promise((e, t) => {
        try {
            return window.CfCustomSdk = window.Cashfree, e({})
        } catch (n) {
            throw t(n)
        }
    });
const ic = i => K(void 0, [i], function*({
        orderToken: e,
        paymentMode: t,
        brandThemeColor: n = "#5a31f4",
        onSuccessHandler: r,
        onFailureHandler: o,
        pgVersion: s
    }) {
        const a = {
            components: [t],
            orderToken: e,
            onSuccess: function(l) {
                r(t, l)
            },
            onFailure: function(l) {
                o(t, l)
            },
            style: {
                backgroundColor: "#FFFFFF",
                color: n == null ? void 0 : n.substring(0, 7),
                fontSize: "14px",
                errorColor: "#CB2711",
                theme: "light"
            }
        };
        try {
            if (s === "v3") {
                new window.Cashfree(e).redirect();
                return
            }
            const l = window.CfDefaultSdk,
                E = document.getElementById("payment-form");
            l.initialiseDropin(E, a)
        } catch (l) {
            throw l
        }
    }),
    ac = "https://secure.paytmpayments.com/merchantpgpui/checkoutjs/merchants",
    cc = e => K(void 0, null, function*() {
        try {
            return yield yt(`${ac}/${e}.js`, () => K(void 0, null, function*() {
                yield _c()
            }))
        } catch (t) {
            throw console.error(t), t
        }
    }),
    _c = () => new Promise((e, t) => {
        try {
            window.Paytm.CheckoutJS.onLoad(() => e({}))
        } catch (n) {
            throw t(n)
        }
    }),
    lc = r => K(void 0, [r], function*({
        orderId: e,
        token: t,
        amount: n
    }) {
        const o = {
            root: "",
            flow: "DEFAULT",
            data: {
                orderId: e,
                token: t,
                tokenType: "TXN_TOKEN",
                amount: n
            },
            handler: {
                notifyMerchant: function(s, i) {
                    console.log("notifyMerchant handler function called"), console.log("eventName => ", s), console.log("data => ", i)
                }
            }
        };
        window.Paytm && window.Paytm.CheckoutJS && window.Paytm.CheckoutJS.init(o).then(function() {
            window.Paytm.CheckoutJS.invoke()
        }).catch(function(i) {
            console.log("Error => ", i)
        })
    }),
    uc = "https://ebz-static.s3.ap-south-1.amazonaws.com/easecheckout/v2.0.0/easebuzz-checkout-v2.min.js",
    dc = "https://ebz-static.s3.ap-south-1.amazonaws.com/easecheckout/v2.0.0/easebuzz-checkout-v2.sandbox.min.js",
    Ec = e => K(void 0, null, function*() {
        let t = dc;
        t = uc;
        try {
            return yield yt(`${t}`, () => K(void 0, null, function*() {
                yield fc(e)
            }))
        } catch (n) {
            throw console.error(n), n
        }
    }),
    fc = e => {
        const t = "production";
        return new Promise((n, r) => {
            try {
                window.easebuzzDefaultSdk = new window.EasebuzzCheckout(e, t === X.ENV_PROD ? "prod" : "test"), n({})
            } catch (o) {
                throw r(o)
            }
        })
    },
    Oc = r => K(void 0, [r], function*({
        accessKey: e,
        onSuccessHandler: t,
        onFailureHandler: n
    }) {
        const o = {
            access_key: e,
            onResponse: s => {
                s.status === "success" && t(), s.status === "failure" && n()
            }
        };
        window.easebuzzDefaultSdk && window.easebuzzDefaultSdk.initiatePayment(o)
    }),
    Tc = "https://jssdk.payu.in/bolt/bolt.min.js";
const Cc = () => K(void 0, null, function*() {
        try {
            return yield yt(Tc, () => {
                window.payu = window.bolt
            })
        } catch (e) {
            throw console.error(e), e
        }
    }),
    Sc = o => K(void 0, [o], function*({
        data: e,
        onSuccessHandler: t,
        onFailureHandler: n,
        onCancelHandler: r
    }) {
        const s = {
            responseHandler: function(i) {
                i.response.txnStatus == "SUCCESS" && t(), i.response.txnStatus == "FAILED" && n(), i.response.txnStatus == "CANCEL" && r()
            },
            catchException: function(i) {
                n()
            }
        };
        window.payu.launch(e, s)
    }),
    tt = ut.lazy(() => Ct(() =>
        import ("./assests-8-RYiWy6.js").then(e => e.Z), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]))),
    yc = ut.lazy(() => Ct(() =>
        import ("./assests-8-RYiWy6.js").then(e => e._), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]))),
    cs = ut.lazy(() => Ct(() =>
        import ("./assests-8-RYiWy6.js").then(e => e.$), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]))),
    hc = ut.lazy(() => Ct(() =>
        import ("./assests-8-RYiWy6.js").then(e => e.a0), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]))),
    Ic = ut.lazy(() => Ct(() =>
        import ("./assests-8-RYiWy6.js").then(e => e.a1), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]))),
    _s = ut.lazy(() => Ct(() =>
        import ("./assests-8-RYiWy6.js").then(e => e.a2), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]))),
    Pn = ut.lazy(() => Ct(() =>
        import ("./assests-8-RYiWy6.js").then(e => e.a3), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]))),
    hl = (e, t) => {
        switch (e) {
            case "phonepe":
                return t.replace("upi", "phonepe");
            case "gpay":
                return t.replace("upi://", "tez://upi/");
            case "cred":
                return t.replace("upi://", "credpay://upi/");
            case "paytm":
                return Cs() === "iOS" ? t.replace("upi://", "paytm://upi/") : t.replace("upi", "paytmmp");
            default:
                return t
        }
    },
    pc = (e, t, n, r, o, s) => K(void 0, null, function*() {
        let i;
        switch (n = n != null ? n : "rzp_live_6ayPGNjG0LUcNX", e) {
            case "RP":
                {
                    i = yield t === "CUSTOM" ? Za(n, o, s) : ec();
                    break
                }
            case "CF":
                {
                    i = yield t === "CUSTOM" ? oc() : nc(r);
                    break
                }
            case "PAYTM":
                {
                    i = yield cc(n);
                    break
                }
            case "EASEBUZZ":
                {
                    i = yield Ec(n);
                    break
                }
            case "PAYU":
                {
                    i = yield Cc();
                    break
                }
        }
        return i
    }),
    Fs = {
        UPI_COLLECT: {
            logo: Pn,
            header: D("upi_payment_header"),
            subheader: Ts() ? D("upi_payment_subheader_apps_collect") : D("upi_payment_subheader"),
            mappers: {
                RP: "upi",
                CF: "upi"
            }
        },
        UPI: {
            logo: Pn,
            header: D("upi_payment_header"),
            subheader: D("upi_payment_subheader"),
            mappers: {
                RP: "upi",
                CF: "upi"
            }
        },
        UPI_INTENT: {
            logo: Pn,
            header: D("upi_payment_header"),
            subheader: D("upi_payment_subheader"),
            mappers: {
                RP: "upi",
                CF: "upi"
            }
        },
        CARD: {
            logo: tt,
            header: D("card_payment_header"),
            subheader: D("card_payment_subheader"),
            mappers: {
                RP: "card",
                CF: "card"
            }
        },
        COD: {
            logo: cs,
            header: D("cod_payment_header"),
            subheader: D("cod_payment_subheader")
        },
        WALLET: {
            logo: yc,
            header: D("wallets_payment_header"),
            subheader: D("wallets_payment_subheader"),
            mappers: {
                RP: "wallet",
                CF: "app"
            }
        },
        NETBANKING: {
            logo: hc,
            header: D("netbanking_payment_header"),
            subheader: D("netbanking_payment_subheader"),
            mappers: {
                RP: "netbanking",
                CF: "netbanking"
            }
        },
        EMI: {
            logo: _s,
            header: D("emi_payment_header"),
            subheader: D("emi_payment_subheader"),
            mappers: {
                RP: "emi",
                CF: "cardlessemi"
            }
        },
        PAY_LATER: {
            logo: Ic,
            header: D("pay_later_payment_header"),
            subheader: D("pay_later_payment_subheader"),
            mappers: {
                RP: "paylater",
                CF: "paylater"
            }
        },
        SNPM: {
            logo: _s,
            header: D("snapmint_payment_header"),
            subheader: D("snapmint_payment_subheader")
        },
        SIMPL: {
            logo: Yo,
            header: D("simpl_payment_header"),
            subheader: D("simpl_payment_subheader")
        },
        SIMPL_PL: {
            logo: Yo,
            header: "",
            subheader: ""
        },
        BHARATX: {
            logo: tt,
            header: D("bharatx_payment_header"),
            subheader: D("snapmint_payment_subheader")
        },
        CRED: {
            logo: tt,
            header: D("cred_payment_header"),
            subheader: D("cred_payment_subheader"),
            mappers: {
                RP: "cred"
            }
        },
        CASHFREE: {
            logo: tt,
            header: D("online_payment_header"),
            subheader: D("online_payment_subheader")
        },
        GC: {
            logo: tt,
            header: D("gift_card_payment_header"),
            subheader: D("gift_card_payment_subheader")
        },
        PL: {
            logo: tt,
            header: D("payment_link_header"),
            subheader: D("payment_link_subheader")
        },
        LOYALTY: {
            logo: tt,
            header: D("loyalty_payment_header"),
            subheader: D("loyalty_payment_subheader")
        },
        PAYPAL: {
            logo: tt,
            header: D("paypal"),
            subheader: D("paypal_payment_subheader"),
            mappers: {
                RP: "paypal"
            }
        },
        OFFLINE_PAYMENT: {
            logo: tt,
            header: D("online_payment_header"),
            subheader: D("online_payment_subheader")
        },
        SPLIT_COD: {
            logo: cs,
            header: D("split_cod_payment_header"),
            subheader: D("split_cod_payment_subheader")
        }
    },
    bc = k => K(void 0, [k], function*({
        amount: e,
        pgOrderId: t,
        pg: n,
        pgImpl: r,
        pgRedirectUrl: o,
        pgAction: s,
        pgAccountId: i,
        paymentMode: a,
        userId: l,
        userName: E,
        userPhone: f,
        userEmail: T,
        checkoutId: h,
        merchantId: S,
        merchantName: I,
        currency: p = "INR",
        brandLogoUrl: C,
        brandThemeColor: R = "#5a31f4",
        onSuccessHandler: B,
        onFailureHandler: L,
        onCancelHandler: g,
        redirectUrl: H,
        methodPayload: w,
        floOrderReference: c,
        pgVersion: V,
        pgData: q,
        shouldRenderIframe: z
    }) {
        if (n) try {
            if (s === "redirect" && o) {
                nt(o != null ? o : "", !1);
                return
            }
            switch (n) {
                case "RP":
                    {
                        const d = _({
                            amount: e,
                            rzpId: t,
                            merchantId: S,
                            merchantName: I,
                            method: gc(a),
                            checkoutId: h,
                            userPhone: f,
                            userEmail: T,
                            redirectUrl: H
                        }, !!i && {
                            accountId: i
                        });
                        return yield tc(m(_({}, d), {
                            brandLogoUrl: C,
                            brandThemeColor: R,
                            userName: E,
                            onSuccessHandler: B
                        }))
                    }
                case "SNPM":
                    {
                        document.location.href = o;
                        return
                    }
                case "CF":
                    {
                        if (s === "redirect" && o) {
                            nt(o != null ? o : "", !1);
                            return
                        }
                        ic({
                            orderToken: t,
                            paymentMode: Ac(a),
                            brandThemeColor: R,
                            onSuccessHandler: B,
                            onFailureHandler: L,
                            pgVersion: V
                        });
                        break
                    }
                case "PAYU":
                    {
                        if (z && q) {
                            Sc({
                                data: q,
                                onSuccessHandler: B,
                                onFailureHandler: L,
                                onCancelHandler: g
                            });
                            return
                        }
                        if (!o) return;nt(o != null ? o : "", !1);
                        return
                    }
                case "PHONEPE":
                    {
                        if (!o) return;nt(o != null ? o : "", !1);
                        return
                    }
                case "PAYTM":
                    {
                        lc({
                            orderId: c != null ? c : "",
                            token: t,
                            amount: e
                        });
                        return
                    }
                case "BHARATX":
                    {
                        nt(o != null ? o : "", !1);
                        return
                    }
                case "EASEBUZZ":
                    {
                        Oc({
                            accessKey: t,
                            onSuccessHandler: B,
                            onFailureHandler: L
                        });
                        return
                    }
                case "SIMPL":
                    {
                        nt(o != null ? o : "", !1);
                        return
                    }
            }
        } catch (d) {
            throw new Error(d)
        }
    }),
    gc = e => {
        var n;
        return ((n = Fs[e]) == null ? void 0 : n.mappers).RP
    },
    Ac = e => {
        var n;
        return ((n = Fs[e]) == null ? void 0 : n.mappers).CF
    },
    Lc = e => e === "PL" || e === "CASHFREE" || window.ReactNativeWebView || Ss() || e === "SNPM" || e === "SIMPL" ? "redirect" : "new_tab",
    mc = e => !!(e === "CASHFREE" || Ss() || e === "PAY_LATER" || e === "EMI"),
    Il = (e, t) => !e || e.length === 0 ? D("payment_mode_not_available") : e.find(o => o.type === "INVALID_DISCOUNTS") ? D("payment_mode_not_available_discount_blocker") : e.some(o => o.type === "SHIPPING_HANDLES") ? D("payment_mode_not_available_shipping_blocker", {
        mode_title: t
    }) : D("payment_mode_not_available"),
    ls = () => {
        typeof window != "undefined" && !window.localStorage.getItem("payment_success_flag") && localStorage.setItem("payment_success_flag", "true")
    };

function pl(e) {
    var t, n;
    if (!e || !Array.isArray(e) || !(e != null && e.length)) return null;
    for (const r of e)
        if ((t = r.discount_metadata) != null && t.is_freebie && ((n = r.discount_metadata) != null && n.is_prepaid)) return !0;
    return null
}
const bl = e => {
        var t, n;
        try {
            let r = 0,
                o = null,
                s = null,
                i = (t = e == null ? void 0 : e.filter(h => {
                    var S;
                    return (S = h.discount_metadata) == null ? void 0 : S.is_prepaid
                })) == null ? void 0 : t.map(h => {
                    var S, I, p;
                    return (p = (I = (S = h.discount_metadata) == null ? void 0 : S.coupon_metadata) == null ? void 0 : I.concession_amount) != null ? p : 0
                });
            e.forEach(h => {
                var S, I, p, C, R;
                ((I = (S = h.discount_metadata) == null ? void 0 : S.coupon_metadata) == null ? void 0 : I.concession_amount) > r && (r = (C = (p = h.discount_metadata) == null ? void 0 : p.coupon_metadata) == null ? void 0 : C.concession_amount, o = h), (R = h.discount_metadata) != null && R.is_freebie && !s && (s = h)
            });
            const a = (n = o == null ? void 0 : o.discount_metadata) == null ? void 0 : n.coupon_metadata,
                l = a == null ? void 0 : a.deduction_type,
                E = a == null ? void 0 : a.concession_amount,
                f = l === "FLAT" ? `₹${E}` : `${E}%`,
                T = Math.max(...i) === Math.min(...i) ? D("x_prepaid_discount", {
                    amount: f
                }) : D("upto_x_discount", {
                    amount: f
                });
            return {
                maxDiscountMethod: o,
                maxDiscountCoupon: a,
                maxPrepaidDiscountText: E ? T : null,
                hasFreebie: !!s,
                freebieMethod: s
            }
        } catch (r) {
            return {
                maxDiscountMethod: null
            }
        }
    },
    Pc = e => new Promise((t, n) => {
        try {
            Re(`/checkout/v1/checkout/${e}/payments/status`).then(r => t(r))
        } catch (r) {
            console.error(r), n(r)
        }
    }),
    gl = e => K(void 0, null, function*() {
        if (!e) return {};
        try {
            return yield Re(`/v1/pincodes/${e}`, "CHECKOUT_PUBLIC")
        } catch (t) {
            throw console.error(t), t
        }
    }),
    Al = e => K(void 0, null, function*() {
        try {
            return yield xe(`/checkout/v1/checkout/${e}/sync-prices`, {}, "CHECKOUT", 3)
        } catch (t) {
            throw console.error(t), t
        }
    }),
    Ll = (e, t) => K(void 0, null, function*() {
        if (!e || !t) return {};
        try {
            return yield Re(`/v1/merchants/${t}/address-config?country_code=${e}`, "CHECKOUT_PUBLIC")
        } catch (n) {
            return console.error(n), {}
        }
    }),
    ml = e => K(void 0, null, function*() {
        if (!e) return [];
        try {
            return yield Re(`/v1/countries/${e}/provinces`, "CHECKOUT_PUBLIC")
        } catch (t) {
            return console.error(t), []
        }
    }),
    us = (e, t, n, r, o) => K(void 0, null, function*() {
        var i, a, l, E, f, T, h, S, I;
        if (!t || !e) return;
        if (e === "SPLIT_COD") {
            let p;
            try {
                p = yield Re(`/checkout/v2/checkout/${t}/payments?mode_context=SPLIT_COD`)
            } catch (C) {
                console.error(C)
            } finally {
                return p
            }
        }
        const s = _(_(_({
            payment_mode: e,
            action: Lc(e)
        }, mc(e) && {
            implementation: "DEFAULT"
        }), n && {
            payment_context: n
        }), r);
        try {
            return yield ye(`/checkout/v2/checkout/${t}/payments/initiate`, s)
        } catch (p) {
            if (((i = p == null ? void 0 : p.response) == null ? void 0 : i.status) === 400 && (((l = (a = p == null ? void 0 : p.response) == null ? void 0 : a.data) == null ? void 0 : l.error) === "C2P flow timedout" || ((f = (E = p == null ? void 0 : p.response) == null ? void 0 : E.data) == null ? void 0 : f.error) === "C2P is already completed" || ((h = (T = p == null ? void 0 : p.response) == null ? void 0 : T.data) == null ? void 0 : h.error) === "C2P flow inaccessible due to user change")) {
                const {
                    expired: C,
                    isInvalidUser: R
                } = Na((I = (S = p == null ? void 0 : p.response) == null ? void 0 : S.data) == null ? void 0 : I.error);
                o == null || o(C, R)
            }
            throw console.error("Error while getting Payment Method details: ", p), p
        }
    }),
    Pl = (e, t) => K(void 0, null, function*() {
        const n = {
            merchant_id: e,
            variant_id: t
        };
        try {
            return yield ye("/santa/v1/wishlists", n)
        } catch (r) {
            throw console.error(r), r
        }
    }),
    Nl = (e, t) => K(void 0, null, function*() {
        const n = {
            merchant_id: e,
            variant_id: t
        };
        try {
            return yield sn("/santa/v1/wishlists", n)
        } catch (r) {
            throw console.error(r), r
        }
    }),
    Nc = (e, t) => {
        const n = y.useRef(),
            r = y.useRef(null);
        y.useEffect(() => {
            n.current = e
        }, [e]), y.useEffect(() => {
            const s = (...i) => n.current(...i);
            if (t !== null) return r.current = setInterval(s, t), () => o()
        }, [t]);
        const o = () => {
            r.current && (clearInterval(r.current), r.current = null)
        };
        return {
            clearIntervalTimer: o
        }
    };

function Rc() {
    const {
        state: {
            checkoutId: e
        }
    } = Ke(), {
        state: {
            addressConfig: t
        }
    } = st(), {
        state: {
            user: n
        }
    } = Nt();
    return {
        verifyDefaultAddress: () => {
            var a, l, E;
            const o = (a = n == null ? void 0 : n.default_shipping_address) != null && a.id ? (l = n == null ? void 0 : n.default_shipping_address) == null ? void 0 : l.id : "",
                s = (E = n == null ? void 0 : n.addresses) == null ? void 0 : E.find(f => (f == null ? void 0 : f.id) === o);
            return s ? !!qi(s, t, e).available : !1
        }
    }
}
const Kn = y.createContext({
    state: {},
    actions: {}
});

function kc(e, t) {
    switch (t.type) {
        case 0:
            return m(_({}, e), {
                paymentMethods: t.payload
            });
        case 1:
            return m(_({}, e), {
                openPaymentMethodDialog: t.payload
            });
        case 2:
            return _(_({}, e), t.payload)
    }
    return e
}
const wc = {
        paymentMethods: [],
        openPaymentMethodDialog: "NONE",
        isProcessingDialogVisible: !1,
        paymentStatus: "DRAFT",
        isPolling: !1,
        splittedPaymentMethods: [],
        isQRCode: !1,
        isCancellable: !0
    },
    Rl = ({
        initialState: e = wc,
        children: t
    }) => {
        var oe;
        const [n, r] = y.useReducer(kc, e), {
            state: {
                hasDefaultShippingHandleSelected: o,
                checkoutId: s,
                billing: i,
                isC2P: a,
                originUrl: l,
                checkoutToken: E,
                initialCheckoutStep: f,
                checkoutValidations: T,
                shippingHandles: h
            },
            actions: {
                setCheckoutModal: S,
                setOOSItems: I,
                setCoupons: p,
                updateCheckoutFromPayments: C,
                setCheckoutExpired: R,
                setActiveComponent: B
            }
        } = Ke(), {
            state: {
                merchant: L
            }
        } = st(), {
            state: {
                user: g
            }
        } = Nt(), {
            sendAnalyticsEvent: H
        } = Sn(), {
            setIsLoading: w
        } = Qa(), {
            t: c
        } = _n(), {
            verifyDefaultAddress: V
        } = Rc(), {
            triggerCheckoutErrorInfoToast: q
        } = Ha(), z = y.useCallback(G => {
            r({
                type: 0,
                payload: G
            })
        }, []), k = y.useCallback((G = "NONE") => {
            r({
                type: 1,
                payload: G
            })
        }, []), d = y.useCallback(G => {
            r({
                type: 2,
                payload: G
            })
        }, []), b = y.useCallback(({
            paymentStatus: G
        }) => {
            d({
                isProcessingDialogVisible: !0,
                paymentStatus: G
            })
        }, [d]), P = y.useCallback(() => {
            d({
                isProcessingDialogVisible: !1,
                paymentStatus: "DRAFT"
            })
        }, [d]), Q = y.useCallback(() => {
            d({
                paymentStatus: "PROCESSING",
                isPolling: !0,
                isProcessingDialogVisible: !0
            })
        }, [d]), v = y.useCallback(() => K(void 0, null, function*() {
            d({
                isPolling: !1
            }), P(), ft(c("payment_failed_retry"))
        }), [P, d, c]), Z = y.useCallback(() => {
            P(), d({
                isPolling: !1
            })
        }, [P, d]), O = y.useCallback((G, F) => K(void 0, null, function*() {
            var x, Oe, M, ne, Ee, _e, de, he, pe, Ie, ge, Ce, Le, le, be, W, ce, Ae, Te, Se, ke, Fe, Be, me;
            if (!G) return;
            if (!o) {
                S("SHIPPING_HANDLES");
                return
            }
            const J = (x = n.paymentMethods) == null ? void 0 : x.find(A => A.mode === G);
            if (!J || St(J) || !J.is_mode) return;
            if (G !== "UPI_INTENT" && G !== "UPI_COLLECT" && H({
                    eventName: te.FLO_PAYMENT_METHOD_SELECTED,
                    eventFor: [Ue.SF_ANALYTICS, Ue.FACEBOOK_PIXEL],
                    eventType: "click",
                    metaData: {
                        methodType: G,
                        automationData: zi(J)
                    }
                }), Object.keys(vn).includes(G)) {
                const A = vn[G];
                k(A);
                return
            }
            if (G === "SPLIT_COD") {
                try {
                    w(!0);
                    const A = yield us(G, s, void 0, void 0, R);
                    (Oe = A == null ? void 0 : A.modes) == null || Oe.forEach(N => N.context = "SPLIT_COD"), d({
                        splittedPaymentMethods: (M = A == null ? void 0 : A.modes) == null ? void 0 : M.filter(N => N.is_available),
                        openPaymentMethodDialog: "SPLIT_COD"
                    })
                } catch (A) {
                    console.error(A)
                } finally {
                    w(!1)
                }
                return
            }
            try {
                w(!0);
                const A = yield us(G, s, F, void 0, R);
                if ((A == null ? void 0 : A.implementation) === "DEFAULT") {
                    yield pc(A == null ? void 0 : A.pg, A == null ? void 0 : A.implementation, A == null ? void 0 : A.pg_key, A == null ? void 0 : A.gateway_version, A == null ? void 0 : A.pg_account_id);
                    const fe = ((Ee = (ne = A == null ? void 0 : A.next_steps) == null ? void 0 : ne.pg_action) == null ? void 0 : Ee.action) === "redirect" ? A == null ? void 0 : A.ui_callback_url : "";
                    A.pg === "CF" && (k("CF"), yield mt(50)), w(!1), yield bc({
                        amount: (_e = i.prepaid_total) != null ? _e : 0,
                        pgOrderId: A.pg_order_reference,
                        pg: A.pg,
                        pgImpl: "DEFAULT",
                        pgRedirectUrl: (he = (de = A.next_steps) == null ? void 0 : de.pg_action) == null ? void 0 : he.action_url,
                        pgAction: (Ie = (pe = A.next_steps) == null ? void 0 : pe.pg_action) == null ? void 0 : Ie.action,
                        paymentMode: A.mode,
                        pgAccountId: A.pg_account_id,
                        onSuccessHandler: Q,
                        onFailureHandler: v,
                        onCancelHandler: Z,
                        checkoutId: s,
                        merchantId: L == null ? void 0 : L.merchantId,
                        merchantName: L == null ? void 0 : L.displayName,
                        brandLogoUrl: L == null ? void 0 : L.logoUrl,
                        brandThemeColor: (ge = L == null ? void 0 : L.colorPallet) == null ? void 0 : ge.primaryColor,
                        userName: (Ce = g == null ? void 0 : g.name) != null ? Ce : "",
                        userPhone: (Le = g == null ? void 0 : g.phone) != null ? Le : "",
                        userEmail: (le = g == null ? void 0 : g.email) != null ? le : "",
                        userId: (be = A == null ? void 0 : A.pg_customer_id) != null ? be : "",
                        redirectUrl: fe,
                        floOrderReference: A == null ? void 0 : A.flo_order_reference,
                        pgVersion: A == null ? void 0 : A.gateway_version,
                        pgData: A == null ? void 0 : A.pg_data,
                        shouldRenderIframe: A == null ? void 0 : A.iframe
                    });
                    return
                }
                w(!1), k(G)
            } catch (A) {
                if (console.error(A), w(!1), ((ce = (W = A == null ? void 0 : A.response) == null ? void 0 : W.data) == null ? void 0 : ce.error) === "OUT_OF_STOCK") {
                    const fe = (Be = (Fe = (ke = (Se = (Te = (Ae = A == null ? void 0 : A.response) == null ? void 0 : Ae.data) == null ? void 0 : Te.error_info) == null ? void 0 : Se.metadata) == null ? void 0 : ke.error_response) == null ? void 0 : Fe.metadata) == null ? void 0 : Be.items;
                    I((me = rt(fe, !0)) != null ? me : []), S("OOS");
                    return
                }
            }
            return {}
        }), [i.prepaid_total, s, v, Q, o, (oe = L == null ? void 0 : L.colorPallet) == null ? void 0 : oe.primaryColor, L == null ? void 0 : L.displayName, L == null ? void 0 : L.logoUrl, L == null ? void 0 : L.merchantId, n.paymentMethods, H, S, w, I, k, d, g == null ? void 0 : g.email, g == null ? void 0 : g.name, g == null ? void 0 : g.phone]), $ = y.useCallback(() => n.splittedPaymentMethods, [n.splittedPaymentMethods]), re = y.useCallback(G => K(void 0, null, function*() {
            var J, U, x, Oe, M, ne, Ee, _e, de, he, pe, Ie, ge, Ce, Le;
            let F = "free-online";
            const j = V();
            if (!((J = g == null ? void 0 : g.addresses) != null && J.length) && f === "PAYMENTS") {
                S("ADDRESS_NEW");
                return
            }
            if (f === "PAYMENTS" && !j) {
                if (!((U = T == null ? void 0 : T.address) != null && U.metadata)) {
                    S("ADDRESS_LIST"), ft(c("serviceability_error"));
                    return
                }
                S("ADDRESS_EDIT");
                return
            }
            if (!(h != null && h.length) && f === "PAYMENTS") {
                q(c("serviceability_error")), B("ADDRESS_SECTION");
                return
            }
            if (!o) {
                S("SHIPPING_HANDLES");
                return
            }
            if (!(g != null && g.addresses) || ((x = g == null ? void 0 : g.addresses) == null ? void 0 : x.length) === 0) {
                S("ADDRESS_NEW");
                return
            }
            G === "COD" && (F = "cod", k("NONE")), G === "OFFLINE_PAYMENT" && (F = "offline-payment", k("NONE"));
            try {
                H({
                    eventName: te.FLO_PAYMENT_MODE_SELECTED,
                    eventType: "click",
                    metaData: {
                        modeType: G,
                        methodType: G
                    }
                }), d({
                    paymentStatus: "PROCESSING",
                    isProcessingDialogVisible: !0,
                    isCancellable: !["cod", "offline-payment", "free-online"].includes(F)
                });
                const le = yield ye(`/checkout/v1/checkout/${s}/${F}`, {}), be = le == null ? void 0 : le.status, W = (M = (Oe = le == null ? void 0 : le.order) == null ? void 0 : Oe.platform_order) == null ? void 0 : M.data, ce = W != null && W.order_status_url && !(L != null && L.forceCustomThankYouPage) ? W == null ? void 0 : W.order_status_url : kn(`${l}/pages/order-status?tokenId=${E}`);
                if (ce && be === "COMPLETED") {
                    H({
                        eventName: te.FLO_PAYMENT_COMPLETED,
                        eventFor: [Ue.SF_ANALYTICS, ...a ? [] : [Ue.FACEBOOK_PIXEL]],
                        eventType: "click",
                        metaData: {
                            orderAmount: Number((ne = le == null ? void 0 : le.order) == null ? void 0 : ne.amount)
                        }
                    }), nt(ce);
                    return
                }
                if (be === "ORDER_FAILED") {
                    d({
                        paymentStatus: "ORDER_FAILED"
                    });
                    return
                }
                d({
                    isProcessingDialogVisible: !1
                })
            } catch (le) {
                if (console.error(le), d({
                        isProcessingDialogVisible: !1
                    }), ((_e = (Ee = le == null ? void 0 : le.response) == null ? void 0 : Ee.data) == null ? void 0 : _e.error) === "OUT_OF_STOCK") {
                    const W = (Ce = (ge = (Ie = (pe = (he = (de = le == null ? void 0 : le.response) == null ? void 0 : de.data) == null ? void 0 : he.error_info) == null ? void 0 : pe.metadata) == null ? void 0 : Ie.error_response) == null ? void 0 : ge.metadata) == null ? void 0 : Ce.items;
                    I((Le = rt(W, !0)) != null ? Le : []), S("OOS");
                    return
                }
                ft(c("order_place_failed"))
            }
        }), [s, a, H, S, I, k, d, c]), Y = y.useCallback((G, F) => K(void 0, null, function*() {
            var j;
            if (!(!G || !(F != null && F.length))) try {
                w(!0);
                const J = yield xe(`/checkout/v1/checkout/${s}/payment-modes/${G}/enable`, {}), U = yield Re(`/checkout/${s}/discount`, "KRATOS_PRIVATE");
                p(U), C(J), ee(), Ne([`/checkout/${s}/rewards`, at.KRATOS_PRIVATE]), f === "PAYMENTS" && ((j = J == null ? void 0 : J.metadata) != null && j.show_shipping_handle_selector) && B("SHIPPING_SECTION"), Ma(c("order_updated_toaster"))
            } catch (J) {
                console.error(J)
            } finally {
                w(!1)
            }
        }), [s, p, w, c, C]), u = y.useCallback(() => K(void 0, null, function*() {
            var G, F, j, J, U, x, Oe;
            try {
                const M = yield Pc(s);
                if ((M == null ? void 0 : M.status) === "ABANDONED") {
                    d({
                        isPolling: !1
                    });
                    return
                }
                if ((M == null ? void 0 : M.status) === "PAYMENT_FAILED") {
                    d({
                        isPolling: !1,
                        paymentStatus: "PAYMENT_FAILED"
                    });
                    return
                }
                if ((M == null ? void 0 : M.status) === "PAYMENT_COMPLETED") {
                    d({
                        paymentStatus: "PLACING_ORDER",
                        isProcessingDialogVisible: n.isQRCode
                    }), ls();
                    return
                }
                if ((M == null ? void 0 : M.status) === "COMPLETED") {
                    d({
                        isPolling: !1
                    });
                    const ne = (j = (F = (G = M == null ? void 0 : M.order) == null ? void 0 : G.platform_order) == null ? void 0 : F.data) != null && j.order_status_url && !(L != null && L.forceCustomThankYouPage) ? (x = (U = (J = M == null ? void 0 : M.order) == null ? void 0 : J.platform_order) == null ? void 0 : U.data) == null ? void 0 : x.order_status_url : kn(`${l}/pages/order-status?tokenId=${E}`);
                    ls(), typeof window != "undefined" && window.localStorage.getItem("payment_success_flag") && localStorage.removeItem("payment_success_flag"), H({
                        eventName: te.FLO_PAYMENT_COMPLETED,
                        eventFor: [Ue.SF_ANALYTICS, ...a ? [] : [Ue.FACEBOOK_PIXEL]],
                        eventType: "click",
                        metaData: {
                            orderAmount: Number((Oe = M == null ? void 0 : M.order) == null ? void 0 : Oe.amount)
                        }
                    }), ne && nt(ne);
                    return
                }
                if ((M == null ? void 0 : M.status) === "ORDER_FAILED") {
                    d({
                        isPolling: !1,
                        paymentStatus: "ORDER_FAILED"
                    });
                    return
                }
            } catch (M) {
                console.error(M)
            }
        }), [s, a, H, d]), ee = y.useCallback(() => {
            Ne(`/checkout/v2/checkout/${s}/payments`), d({
                isPolling: !1
            }), ie()
        }, [s, d]), {
            clearIntervalTimer: ie
        } = Nc(u, n.isPolling ? 3e3 : null), ae = y.useMemo(() => ({
            setPaymentMethods: z,
            setPaymentMethodDialog: k,
            setPaymentState: d,
            handlePaymentMethodSelected: O,
            getSplittedPaymentMethods: $,
            showPaymentProcessingDialog: b,
            hidePaymentProcessingDialog: P,
            handleNonPaymentOrderPlacement: re,
            handleUnapplicablePaymentMethod: Y,
            handleCancelPayment: Z,
            mutatePayment: ee
        }), [$, Z, re, O, Y, P, k, z, d, b, ee]);
        return Je.jsx(Kn.Provider, {
            value: {
                state: n,
                actions: ae
            },
            "data-sentry-element": "unknown",
            "data-sentry-component": "PaymentProvider",
            "data-sentry-source-file": "PaymentProvider.tsx",
            children: t
        })
    };

function Hs() {
    if (!Kn) throw new Error("usePaymentContext must be used within a PaymentProvider");
    return y.useContext(Kn)
}
const Jt = {
        accountId: null,
        isValidating: !0,
        attributes: {
            is_one_page_checkout: !1
        },
        checkoutMetadata: {
            metadataLoading: !0,
            ui_attributes: {
                logo_url: "",
                banner_config: []
            }
        },
        cartMetadata: {
            metadataLoading: !0,
            ui_attributes: {
                banner_config: [],
                primary_cta_disability_rule: "",
                item_modification_rule: {}
            }
        }
    },
    xs = y.createContext({
        state: Jt,
        actions: {
            setFallbackMerchantData: () => {}
        }
    });

function Uc(e, t) {
    var n, r, o, s, i, a, l, E, f, T, h, S;
    switch (t.type) {
        case "SET_MERCHANT_ATTRIBUTES":
            {
                const I = (r = (n = t.payload) == null ? void 0 : n.attributes) == null ? void 0 : r.ui;
                return I && On((o = I == null ? void 0 : I.color_pallet) == null ? void 0 : o.primary_color, (s = I == null ? void 0 : I.color_pallet) == null ? void 0 : s.secondary_color, (i = I == null ? void 0 : I.color_pallet) == null ? void 0 : i.primary_text_color),
                m(_({}, e), {
                    accountId: (a = t.payload) == null ? void 0 : a.account_id,
                    attributes: (E = (l = t.payload) == null ? void 0 : l.attributes) != null ? E : Jt.attributes,
                    isValidating: !1
                })
            }
        case "SET_CHECKOUT_METADATA":
            {
                const I = ((f = t.payload) == null ? void 0 : f.default_view) === null ? "ADDRESS" : (T = t.payload) == null ? void 0 : T.default_view;
                return m(_({}, e), {
                    checkoutMetadata: m(_({}, (h = t.payload) != null ? h : Jt.checkoutMetadata), {
                        default_view: I,
                        metadataLoading: !1
                    })
                })
            }
        case "SET_CART_METADATA":
            return m(_({}, e), {
                cartMetadata: m(_({}, (S = t.payload) != null ? S : Jt.checkoutMetadata), {
                    metadataLoading: !1
                })
            });
        case "SET_VALIDATING":
            return m(_({}, e), {
                isValidating: t.payload
            });
        default:
            return e
    }
}
const kl = ({
        children: e
    }) => {
        var I, p, C;
        const [t, n] = y.useReducer(Uc, Jt), [r] = Tt(), o = (I = r.get("shop_url")) != null ? I : "", s = r.get("tokenId"), i = (C = (p = r.get("page")) == null ? void 0 : p.toLowerCase()) != null ? C : "", {
            data: a,
            error: l
        } = ct(o ? `/merchant-apps?shop-url=${o}` : null, In, _t), {
            data: E
        } = ct(["cart", "empty-cart"].includes(i) ? `/attributes/ui-attributes?tokenId=${s}&context=CART` : null, In, _t), {
            data: f
        } = ct(i === "" ? `/attributes/ui-attributes?tokenId=${s}&context=CHECKOUT` : null, In, _t), T = R => {
            var B, L;
            if (R.data.type === De.MERCHANT_ATTRIBUTES) {
                const g = (L = (B = R == null ? void 0 : R.data) == null ? void 0 : B.payload) == null ? void 0 : L.merchantAttributes;
                g && n({
                    type: "SET_MERCHANT_ATTRIBUTES",
                    payload: g
                }), He(De.CLOSE_MERCHANT_SUBSCRIPTION, {})
            }
        };
        y.useEffect(() => (window.addEventListener("message", T), () => {
            window.removeEventListener("message", T)
        }), []), y.useEffect(() => {
            a && n({
                type: "SET_MERCHANT_ATTRIBUTES",
                payload: a
            }), E && n({
                type: "SET_CART_METADATA",
                payload: _({}, E != null ? E : {})
            }), f && n({
                type: "SET_CHECKOUT_METADATA",
                payload: _({}, f != null ? f : {})
            })
        }, [a, E, f]);
        const S = {
            setFallbackMerchantData: R => {
                n({
                    type: "SET_MERCHANT_ATTRIBUTES",
                    payload: R
                })
            }
        };
        return Je.jsx(xs.Provider, {
            value: {
                state: t,
                actions: S
            },
            "data-sentry-element": "unknown",
            "data-sentry-component": "MerchantUIConfigProvider",
            "data-sentry-source-file": "MerchantUIConfigProvider.tsx",
            children: e
        })
    },
    vs = () => y.useContext(xs),
    wl = () => {
        const {
            state: {
                rawCheckoutObject: e
            }
        } = Ke(), {
            state: {
                cartMetadata: t
            }
        } = vs();
        return {
            cartPermissions: y.useMemo(() => {
                var o, s;
                const r = qs.apply((s = (o = t == null ? void 0 : t.ui_attributes) == null ? void 0 : o.primary_cta_disability_rule) != null ? s : "", e);
                return {
                    checkoutBtnStatus: Object.keys(r).length === 0 ? "" : r
                }
            }, [e, t])
        }
    },
    Dc = e => {
        const t = y.useRef();
        return y.useEffect(() => {
            t.current = e
        }), t.current
    };
var Ks = (e => (e.phoneNumber = "phoneNumber", e.otp = "otp", e.phone = "phone", e.alternate_number = "alternate_number", e.id = "id", e.email = "email", e.name = "name", e.address1 = "address1", e.address2 = "address2", e.zip = "zip", e.city = "city", e.state = "state", e.state_code = "state_code", e.country = "country", e.country_code = "country_code", e.type = "type", e.gstin = "gstin", e.gst_business_name = "gst_business_name", e.cardName = "cardName", e.cardNumber = "cardNumber", e.expiry = "expiry", e.cvv = "cvv", e))(Ks || {});

function Ul({
    initialState: e,
    validationSchema: t,
    skipValidation: n = !1,
    initialErrorState: r
}) {
    const [o, s] = y.useState(e), [i, a] = y.useState(r || {}), [l, E] = y.useState({}), [f, T] = y.useState({}), [h, S] = y.useState(!1), [I, p] = y.useState(!0), {
        t: C
    } = _n();
    y.useEffect(() => {
        !h && !hs(o, e) && (S(!0), R())
    }, [o]), y.useEffect(() => {
        R()
    }, []);
    const R = () => {
            Object == null || Object.keys(o).map(k => {
                o[k] && T(d => m(_({}, d), {
                    [k]: !0
                }))
            })
        },
        B = (k, d) => {
            s(b => m(_({}, b), {
                [k]: d
            }))
        },
        L = (k = "", d) => d.reduce((P, Q) => {
            switch (Q) {
                case "UPPERCASE":
                    return P.toUpperCase();
                case "FIRST_CHAR_LOWERCASE":
                    return P.charAt(0).toLowerCase() + P.slice(1);
                case "CAPITALIZE":
                    return ve(P);
                case "PHONE":
                    return $o(P) && P[3] === "0" ? P.slice(0, 3) + P.slice(4) : P;
                case "CLEAN_EMOJIS":
                    return P.replace(we.hasEmoji, "");
                case "NUMERIC":
                    return P.replace(we.numeric, "");
                case "LETTERS_WITH_NO_SPACE":
                    return P.replaceAll(we.space, "");
                case "LETTERS_ONLY":
                    return P.replace(we.lettersOnly, "");
                case "LETTERS_AND_PERIOD":
                    return P.replace(we.lettersAndPeriod, "");
                case "ALPHA_NUMERIC":
                    return P.replace(we.alphaNumeric, "");
                default:
                    return typeof Q == "function" ? Q(P, o) : P
            }
        }, k),
        g = (k, d) => {
            d = d == null ? void 0 : d.trim();
            const b = t[k];
            if (b) {
                const P = Object.keys(b);
                for (let Q of P) {
                    const v = b[Q];
                    switch (Ti(d) || (d = L(d, ["CLEAN_EMOJIS"])), Q) {
                        case "formatters":
                            {
                                L(d, v);
                                break
                            }
                        case "type":
                            {
                                if (v === "number" && typeof d == "number" && !isNaN(d)) return {
                                    status: !0,
                                    message: "Please enter a valid number"
                                };
                                break
                            }
                        case "required":
                            {
                                if (!d) return {
                                    status: !0,
                                    message: v
                                };
                                break
                            }
                        case "min":
                            {
                                if (d.length < (v == null ? void 0 : v.limit)) return {
                                    status: !0,
                                    message: v.message
                                };
                                break
                            }
                        case "max":
                            {
                                if (d.length > v.limit) return {
                                    status: !0,
                                    message: v.message
                                };
                                break
                            }
                        case "length":
                            {
                                if (d.length !== v.limit) return {
                                    status: !0,
                                    message: v.message
                                };
                                break
                            }
                        case "numeric":
                            {
                                if (!fs(d)) return {
                                    status: !0,
                                    message: v
                                };
                                break
                            }
                        case "onlyLetters":
                            {
                                if (we.lettersOnly.test(d)) return {
                                    status: !0,
                                    message: v
                                };
                                break
                            }
                        case "onlyLettersAndPeriod":
                            {
                                if (we.lettersAndPeriod.test(d)) return {
                                    status: !0,
                                    message: v
                                };
                                break
                            }
                        case "notSpecialCharactersOrNumbersOnly":
                            {
                                if (we.specialCharactersAndNumbersOnly.test(d)) return {
                                    status: !0,
                                    message: v
                                };
                                break
                            }
                        case "emailOrEmptyString":
                            {
                                if (!we.emailOrEmptyString.test(d)) return {
                                    status: !0,
                                    message: v
                                };
                                break
                            }
                        case "email":
                            {
                                if (!Oi(d)) return {
                                    status: !0,
                                    message: v
                                };
                                break
                            }
                        case "phone":
                            {
                                if ($o(d)) {
                                    if (d.length !== 13) return {
                                        status: !0,
                                        message: C("indian_phone_number_digits_limit")
                                    };
                                    if (d[3] < 6) return {
                                        status: !0,
                                        message: v
                                    }
                                }
                                if (!Xs(d) && !Qs(d)) return {
                                    status: !0,
                                    message: v
                                };
                                break
                            }
                        case "when":
                            {
                                if (typeof v == "function") return v(d, o);
                                break
                            }
                        case "label":
                            break;
                        default:
                            throw new Error("unexpected schema key, " + Q)
                    }
                }
            }
        },
        H = k => {
            const d = Object.keys(t);
            let b = !1;
            for (let P of d) {
                if (n && (P === "state" || P === "state_code" || P === "zip")) continue;
                const Q = g(P, k[P]);
                Q && (a(v => m(_({}, v), {
                    [P]: Q
                })), b = !0)
            }
            return !b
        };

    function w() {
        var d, b;
        let k = "";
        for (let P of Object.values(Ks))
            if (i[P] && ((d = i[P]) != null && d.status)) {
                k = P;
                break
            }(b = document.getElementById(`flo-field-${k}`)) == null || b.scrollIntoView({
            behavior: "smooth",
            block: "center"
        }), p(!1)
    }
    const c = Dc(i);
    y.useEffect(() => {
        c !== i && I && w()
    }, [i]);

    function V(k, d = {
        shouldScrollErrorsIntoView: !0
    }) {
        return function(b) {
            b.preventDefault();
            const P = H(o);
            p(!0), P && k(o)
        }
    }
    const q = (k, d) => {
        E(P => m(_({}, P), {
            [k]: !0
        })), T(P => m(_({}, P), {
            [k]: !1
        }));
        const b = t[k];
        d = L(d, ["CLEAN_EMOJIS"]), b != null && b.formatters && (d = L(d, b.formatters)), i[k] && !g(k, d) && a(P => m(_({}, P), {
            [k]: void 0
        })), B(k, d)
    };
    return {
        handleSubmit: V,
        setValues: s,
        setErrors: a,
        setValueOf: B,
        handleFieldChange: q,
        state: {
            values: o,
            errors: i,
            validations: f
        },
        inputProps: (k, d) => {
            const b = (d == null ? void 0 : d.onChange) != null,
                P = Z => {
                    let O = Z.target.value;
                    q(k, O)
                },
                Q = Z => {
                    if ((d == null ? void 0 : d.onBlur) != null && d.onBlur(Z), !l[k]) return;
                    const O = g(k, o[k]);
                    O ? a($ => m(_({}, $), {
                        [k]: O
                    })) : i[k] ? a($ => m(_({}, $), {
                        [k]: void 0
                    })) : T($ => m(_({}, $), {
                        [k]: !0
                    }))
                },
                v = Z => {
                    (d == null ? void 0 : d.onFocus) != null && d.onFocus(Z)
                };
            return {
                name: k,
                id: k,
                onChange: b ? d.onChange : P,
                onBlur: Q,
                onFocus: v,
                value: o[k]
            }
        }
    }
}
const Nn = "6LdJ7hkqAAAAADyz4sqCgyYXZDK5Jp0E08NeT8tR",
    Rn = () => {
        window.grecaptcha && window.grecaptcha.ready(() => {
            const e = document.getElementsByClassName("grecaptcha-badge")[0];
            e && (e.style.display = "block", e.style.zIndex = "1")
        })
    },
    Bc = () => {
        window.grecaptcha && window.grecaptcha.ready(() => {
            const e = document.getElementsByClassName("grecaptcha-badge")[0];
            e && (e.style.display = "none")
        })
    },
    Dl = () => {
        const [e, t] = y.useState(!1);
        return y.useEffect(() => {
            if (typeof window == "undefined" || e) return;
            if (window.grecaptcha) {
                Rn(), t(!0);
                return
            }
            const r = document.createElement("script");
            return r.async = !0, r.src = `https://www.google.com/recaptcha/api.js?render=${Nn}`, r.addEventListener("load", () => {
                t(!0), Rn()
            }), document.body.appendChild(r), () => {
                r.removeEventListener("load", () => {
                    t(!0), Rn()
                })
            }
        }, [e]), y.useEffect(() => Bc, []), {
            reCaptchaLoaded: e,
            generateReCaptchaToken: r => new Promise((o, s) => {
                if (!e) return s(new Error("ReCaptcha not loaded"));
                if (typeof window == "undefined" || !window.grecaptcha) return t(!1), s(new Error("ReCaptcha not loaded"));
                window.grecaptcha.ready(() => {
                    window.grecaptcha.execute(Nn, {
                        action: r
                    }).then(i => {
                        localStorage.setItem(Nn, i), o(i)
                    })
                })
            })
        }
    };
var Qn = (e => (e[e.SET_WISHLISTED_PRODUCTS = 0] = "SET_WISHLISTED_PRODUCTS", e))(Qn || {});
const Mc = e => {
        var n, r;
        if (!e || !e) return {
            count: 0,
            wishlistedItems: []
        };
        const t = e != null && e.results && ((n = e == null ? void 0 : e.results) != null && n.length) ? (r = e == null ? void 0 : e.results) == null ? void 0 : r.map(o => {
            var a, l, E, f, T, h, S, I, p, C, R, B, L, g, H, w, c, V, q, z, k, d, b, P, Q, v, Z, O, $, re;
            const s = (f = (E = (l = (a = o == null ? void 0 : o.item) == null ? void 0 : a.product) == null ? void 0 : l.images) == null ? void 0 : E.find(Y => Y == null ? void 0 : Y.is_primary)) == null ? void 0 : f.src,
                i = (p = (I = (S = (h = (T = o == null ? void 0 : o.item) == null ? void 0 : T.product) == null ? void 0 : h.images) == null ? void 0 : S.find(Y => {
                    var u, ee;
                    return (ee = Y == null ? void 0 : Y.linked_variant_ids) == null ? void 0 : ee.includes((u = o == null ? void 0 : o.item) == null ? void 0 : u.variant_id)
                })) == null ? void 0 : I.src) != null ? p : s;
            return {
                variantId: (C = o == null ? void 0 : o.item) == null ? void 0 : C.variant_id,
                variantName: (R = o == null ? void 0 : o.item) != null && R.name && ((B = o == null ? void 0 : o.item) == null ? void 0 : B.name) !== "Default Title" ? (L = o == null ? void 0 : o.item) == null ? void 0 : L.name : "",
                sku: (H = (g = o == null ? void 0 : o.item) == null ? void 0 : g.sku) != null ? H : "",
                link: (c = (w = o == null ? void 0 : o.item) == null ? void 0 : w.product) != null && c.description ? "/products/" + ((q = (V = o == null ? void 0 : o.item) == null ? void 0 : V.product) == null ? void 0 : q.description) + "?variant=" + ((z = o == null ? void 0 : o.item) == null ? void 0 : z.variant_id) : "",
                image: i,
                productId: (b = (d = (k = o == null ? void 0 : o.item) == null ? void 0 : k.product) == null ? void 0 : d.product_id) != null ? b : "",
                productName: (v = (Q = (P = o == null ? void 0 : o.item) == null ? void 0 : P.product) == null ? void 0 : Q.name) != null ? v : "",
                originalPrice: (O = (Z = o == null ? void 0 : o.item) == null ? void 0 : Z.original_price) != null ? O : 0,
                currentPrice: (re = ($ = o == null ? void 0 : o.item) == null ? void 0 : $.current_price) != null ? re : 0
            }
        }) : [];
        return {
            count: e == null ? void 0 : e.count,
            wishlistedItems: t
        }
    },
    Vn = y.createContext({
        state: {},
        actions: {}
    });

function Fc(e, t) {
    switch (t.type) {
        case Qn.SET_WISHLISTED_PRODUCTS:
            return t.payload
    }
    return e
}
const Hc = {
        count: 0,
        wishlistedItems: []
    },
    Bl = ({
        children: e
    }) => {
        const {
            state: {
                isAuthenticated: t
            }
        } = Tn(), {
            state: {
                merchant: n
            }
        } = st(), [r, o] = y.useReducer(Fc, Hc), {
            data: s,
            isValidating: i
        } = ct(t && (n != null && n.merchantId) ? `/santa/v1/wishlists?merchant_id=${n==null?void 0:n.merchantId}` : null, sa, _t);
        y.useEffect(() => {
            if (i || !s) return;
            const T = Mc(s);
            a(T)
        }, [s, i]);
        const a = y.useCallback(T => {
                o({
                    type: Qn.SET_WISHLISTED_PRODUCTS,
                    payload: T
                })
            }, []),
            l = y.useCallback(() => {
                t && (n != null && n.merchantId) && Ne(`/santa/v1/wishlists?merchant_id=${n==null?void 0:n.merchantId}`)
            }, [t, n]),
            E = y.useCallback(T => (r == null ? void 0 : r.wishlistedItems.findIndex(S => (S == null ? void 0 : S.variantId) === T)) > -1, [r]),
            f = y.useMemo(() => ({
                setWishlist: a,
                refreshWishlist: l,
                isWishlisted: E
            }), [a, l, E]);
        return Je.jsx(Vn.Provider, {
            value: {
                state: r,
                actions: f
            },
            "data-sentry-element": "unknown",
            "data-sentry-component": "WishlistProvider",
            "data-sentry-source-file": "WishlistProvider.tsx",
            children: e
        })
    };

function Ml() {
    if (!Vn) throw new Error("useWishlistContext must be used within a WishlistProvider");
    return y.useContext(Vn)
}
const xc = 1,
    vc = ({
        item_id: e,
        quantity: t,
        availableQuantity: n,
        isCartItem: r,
        variant_id: o,
        billing: s,
        setIsUpdating: i
    } = {}) => {
        const {
            t: a
        } = _n(), {
            state: {
                checkoutId: l,
                checkoutView: E,
                checkoutUIMetadata: f,
                initialCheckoutStep: T,
                redirectUrl: h,
                checkoutItems: S
            },
            actions: {
                updateCheckoutBasedOnCheckoutResponse: I,
                setShippingHandles: p,
                setCheckoutModal: C,
                setCheckoutItems: R,
                setCoupons: B,
                setCheckout: L,
                setBilling: g,
                setRawCheckoutObject: H,
                setCombinedProductRemovalItems: w
            }
        } = Ke(), {
            state: {
                isAuthenticated: c
            }
        } = Tn(), {
            state: {
                merchant: V
            }
        } = st(), {
            sendAnalyticsEvent: q
        } = Sn(), {
            actions: {
                mutatePayment: z
            }
        } = Hs(), [k, d] = y.useState(!1), [b, P] = y.useState(!1), [Q, v] = y.useState(!1), Z = u => {
            H(u)
        }, O = (u, ee = !1) => K(void 0, null, function*() {
            if (u) {
                Jo([]), yield mt(50), r ? He(De.CLEAR_CART_AND_CLOSE, {}) : ys(`${h}/?floRedirectStatus=oos`), v(!1);
                return
            }
            try {
                yield re("delete", {
                    itemIds: []
                }, ee)
            } catch (ie) {
                console.error(ie)
            } finally {
                v(!1)
            }
        }), $ = (u, {
            addType: ee
        }) => {
            var F, j, J, U, x;
            Z(u), I(u);
            const ie = (j = (F = u == null ? void 0 : u.metadata) == null ? void 0 : F.show_shipping_handle_selector) != null ? j : !1,
                ae = (U = (J = u == null ? void 0 : u.metadata) == null ? void 0 : J.available_shipping_handles) != null ? U : [];
            p(ae), ee === "ITEM" && !!((x = f == null ? void 0 : f.upsellConfig) != null && x.isEnabled) && (E === "PAYMENTS" || r) && Ne(Dn({
                isAuthenticated: c,
                checkoutId: l
            })), E === "PAYMENTS" && (z(), Ne([`/checkout/${l}/rewards`, at.KRATOS_PRIVATE]));
            const G = jn(u.metadata.error_responses);
            if (ae.length > 0 && ie && E === "PAYMENTS" && T !== "PAYMENTS" && !G) {
                C("SHIPPING_HANDLES");
                return
            }
            Ne("UPI_INTENT")
        }, re = y.useCallback((u, ee, ie = !1) => K(void 0, null, function*() {
            var F, j, J;
            const oe = (() => {
                    switch (u) {
                        case "increment":
                            {
                                if (!t || !n) throw new Error("Quantity or available quantity is not defined");
                                let U = t;
                                return t + 1 > n || V != null && V.maxQuantityPerItem && (V != null && V.maxQuantityPerItem) && t + 1 > (V == null ? void 0 : V.maxQuantityPerItem) ? void 0 : (U++, U)
                            }
                        case "decrement":
                            {
                                if (!t || !n) throw new Error("Quantity or available quantity is not defined");
                                let U = t;
                                return t === xc ? void 0 : (U--, U)
                            }
                        case "delete":
                            return v(!1), P(!0), 0
                    }
                })(),
                G = {
                    items: [{
                        id: e,
                        quantity: oe
                    }]
                };
            (F = ee == null ? void 0 : ee.itemIds) != null && F.length && (G.items = ee.itemIds.map(U => ({
                id: U,
                quantity: oe
            })));
            try {
                d(!0), i == null || i(!0);
                let U;
                if (c) {
                    U = yield xe(ns(`/checkout/${l}/items`, {
                        raiseOnRemoval: ie ? "raise_on_removal=false" : ""
                    }), G, at.KRATOS_PRIVATE);
                    const x = yield Re(`/checkout/${l}/discount`, "KRATOS_PRIVATE");
                    Ne([`/checkout/${l}/rewards`, at.KRATOS_PRIVATE]), B(x)
                } else {
                    U = yield xe(ns(`/checkout/${l}/items`, {
                        raiseOnRemoval: ie ? "raise_on_removal=false" : ""
                    }), G, at.KRATOS_PUBLIC);
                    const x = yield Re(`/checkout/${l}/discount`, "KRATOS_PUBLIC");
                    B(x)
                }
                if (U != null && U.items) {
                    const x = rt(U == null ? void 0 : U.items);
                    if (ya(e, u === "delete" ? S : x, u, r), R(x), !x || (x == null ? void 0 : x.length) === 0) {
                        Jo([]), O(!0);
                        return
                    }
                }
                r && u === "increment" && q({
                    eventName: te.FLO_ADDED_TO_CART_UI,
                    eventType: "click",
                    eventFor: [Ue.FACEBOOK_PIXEL, Ue.SF_ANALYTICS],
                    metaData: {
                        checkoutItems: rt(U == null ? void 0 : U.items)
                    }
                }), d(!1), i == null || i(!1), P(!1), $(U, {
                    addType: "ITEM"
                })
            } catch (U) {
                if (((j = U == null ? void 0 : U.response) == null ? void 0 : j.status) === 409) {
                    const x = ka((J = U == null ? void 0 : U.response) == null ? void 0 : J.data, e != null ? e : "", o != null ? o : "");
                    w(x), C("COMBINED_PRODUCT_REMOVE"), d(!1), i == null || i(!1), P(!1);
                    return
                }
                console.error(U), d(!1), i == null || i(!1), P(!1)
            }
        }), [n, s == null ? void 0 : s.shipping, l, E, c, e, t, S, o]);
        return {
            handleItemEdit: re,
            isLoading: k,
            showFullScreenLoader: b,
            openRemoveItemDialog: Q,
            setOpenRemoveItemDialog: v,
            handleItemDeleteSubmit: O,
            handleAddOnEdit: u => K(void 0, null, function*() {
                var ee, ie;
                try {
                    const {
                        action: ae,
                        addOnLevel: oe,
                        addOnId: G,
                        showFullScreenLoader: F,
                        isCartNote: j,
                        cartNotePayload: J
                    } = u;
                    d(!0), i == null || i(!0);
                    const U = {
                        addon_id: G,
                        item_id: e != null ? e : null,
                        addon_level: oe
                    };
                    let x;
                    switch (ae) {
                        case "ADD":
                            {
                                P(F != null ? F : !1),
                                c ? x = yield ye(`/checkout/${l}/addon`, j ? J : U, "KRATOS_PRIVATE"): x = yield ye(`/checkout/${l}/addon`, j ? J : U, "KRATOS");
                                break
                            }
                        case "DELETE":
                            {
                                P(F != null ? F : !1),
                                c ? x = yield sn(`/checkout/${l}/addon`, U, "KRATOS_PRIVATE"): x = yield sn(`/checkout/${l}/addon`, U, "KRATOS");
                                break
                            }
                    }
                    if (x != null && x.items) {
                        if (oe === "ITEM") {
                            const M = rt(x == null ? void 0 : x.items);
                            R(M)
                        } else oe === "CART" && L({
                            appliedCartAddOns: (ie = (ee = x == null ? void 0 : x.cart_addons) == null ? void 0 : ee.filter(M => !(M != null && M.removed))) != null ? ie : [],
                            availableAddOns: x == null ? void 0 : x.available_add_ons
                        });
                        const Oe = zn(x == null ? void 0 : x.pricing);
                        g(Oe)
                    }
                    ae === "ADD" && q({
                        eventName: te.FLO_ADDON_ADDED,
                        eventType: "click",
                        eventFor: [Ue.FACEBOOK_PIXEL, Ue.SF_ANALYTICS],
                        metaData: {
                            checkoutItems: rt(x == null ? void 0 : x.items),
                            addOnData: {
                                addOnType: oe,
                                addOnId: G,
                                itemId: e
                            }
                        }
                    }), d(!1), i == null || i(!1), P(!1), $(x, {
                        addType: "ADDON"
                    })
                } catch (ae) {
                    ft(a("something_went_wrong")), R([...S]), d(!1), i == null || i(!1), P(!1)
                }
            })
        }
    },
    Fl = ({
        isLoadingComplete: e,
        checkElementInForeground: t = !1,
        eventName: n = te.FLO_CART_LOADING_TIME_REACT,
        additionalMetadata: r = {}
    }) => {
        const [o] = Tt(), s = y.useRef(null), i = y.useRef(!1), a = Sn(), l = o.get("is_background_load") === "false";
        return y.useLayoutEffect(() => {
            s.current || (s.current = performance.now())
        }, []), y.useLayoutEffect(() => {
            if (e && s.current && !i.current) {
                const f = performance.now() - s.current;
                (t ? l : !0) && (i.current = !0, a.sendAnalyticsEvent({
                    eventName: n,
                    eventFor: [Ue.SF_ANALYTICS],
                    eventType: "load",
                    metaData: _({
                        loadDuration: Math.round(f)
                    }, r)
                }))
            }
        }, [e, t, n, r, a, l]), {
            loadingDuration: i.current && s.current ? performance.now() - s.current : null,
            isTrackingComplete: i.current
        }
    },
    Kc = (e, t, n) => {
        var r, o;
        return n.type === "FREE" ? {
            note_attributes: [{
                name: "sf_cart_note",
                value: t === "DELETE" ? null : e
            }]
        } : n.type === "PAID" ? {
            addon_id: (o = (r = n == null ? void 0 : n.cartNoteAddOnData) == null ? void 0 : r.addonId) != null ? o : "",
            note: e,
            addon_level: "CART"
        } : {}
    },
    Vc = (e, t) => {
        var o, s, i, a;
        const n = Object.values(e).find(l => l.addon_type === "CART_NOTE"),
            r = t == null ? void 0 : t.enabled;
        return n ? {
            hasCartNote: !0,
            type: "PAID",
            cartNoteConfig: {
                enabled: !0,
                title: ((o = n == null ? void 0 : n.metadata) == null ? void 0 : o.title) || "Add a note",
                suggestionText: ((s = n == null ? void 0 : n.metadata) == null ? void 0 : s.suggestion_text) || "Add any specific instructions or requests...",
                icon: ((i = n == null ? void 0 : n.metadata) == null ? void 0 : i.icon) || "EDIT"
            },
            cartNoteAddOnData: {
                addonId: n == null ? void 0 : n.addon_id,
                addonType: n == null ? void 0 : n.addon_type,
                price: n == null ? void 0 : n.price
            }
        } : r ? {
            hasCartNote: (a = t == null ? void 0 : t.enabled) != null ? a : !1,
            type: "FREE",
            cartNoteConfig: {
                enabled: !0,
                title: (t == null ? void 0 : t.title) || "Add a note",
                suggestionText: (t == null ? void 0 : t.suggestionText) || "Add any specific instructions or requests...",
                icon: (t == null ? void 0 : t.icon) || "EDIT"
            }
        } : {
            hasCartNote: !1,
            type: "NONE",
            cartNoteConfig: {
                enabled: !1,
                title: "",
                suggestionText: "",
                icon: "EDIT"
            }
        }
    },
    Gc = (e, t) => {
        var o, s;
        const n = t.find(i => i.addon_type === "CART_NOTE"),
            r = e.find(i => i.name === "sf_cart_note");
        return n ? {
            hasCartNoteAdded: !0,
            type: "PAID",
            note: (o = n == null ? void 0 : n.note) != null ? o : ""
        } : r ? {
            hasCartNoteAdded: !!(r != null && r.value),
            type: "FREE",
            note: (s = r == null ? void 0 : r.value) != null ? s : ""
        } : {
            hasCartNoteAdded: !1,
            type: "NONE",
            note: ""
        }
    },
    Yc = {
        enabled: !1,
        icon: "EDIT",
        title: "",
        suggestionText: ""
    },
    Hl = () => {
        var g;
        const {
            state: {
                merchant: e
            }
        } = st(), {
            state: {
                isAuthenticated: t
            }
        } = Tn(), {
            state: {
                checkoutId: n,
                availableAddOns: r,
                noteAttributes: o,
                appliedCartAddOns: s
            },
            actions: {
                updateCheckoutBasedOnCheckoutResponse: i
            }
        } = Ke(), {
            handleAddOnEdit: a,
            isLoading: l
        } = vc(), [E, f] = y.useState(!1), [T, h] = y.useState(!1), [S, I] = y.useState(!1), p = Vc(r, (g = e == null ? void 0 : e.cartNote) != null ? g : Yc), C = Gc(o, s), [R, B] = y.useState(C.note);
        return {
            state: {
                cartNoteAttributes: p,
                isCartNoteTileLoading: E || l,
                appliedCartNote: C,
                isEditMode: T,
                inputValue: R,
                showError: S
            },
            actions: {
                handleSaveNote: c => K(void 0, [c], function*({
                    inputValue: H,
                    action: w
                }) {
                    var q, z, k, d;
                    f(!0);
                    const V = Kc(H, w, p);
                    try {
                        if (p.type === "FREE") {
                            let b;
                            t ? (b = yield xe(`/checkout/${n}`, V, "KRATOS_PRIVATE"), i(b)) : (b = yield xe(`/api/v1/checkout/${n}`, V, "KRATOS"), i(b)), w === "DELETE" && B("")
                        } else p.type === "PAID" && (w === "ADD" || w === "EDIT" ? a({
                            action: "ADD",
                            addOnId: (z = (q = p == null ? void 0 : p.cartNoteAddOnData) == null ? void 0 : q.addonId) != null ? z : "",
                            addOnLevel: "CART",
                            showFullScreenLoader: !1,
                            cartNotePayload: V,
                            isCartNote: !0
                        }) : (a({
                            action: "DELETE",
                            addOnId: (d = (k = p == null ? void 0 : p.cartNoteAddOnData) == null ? void 0 : k.addonId) != null ? d : "",
                            addOnLevel: "CART",
                            showFullScreenLoader: !1,
                            cartNotePayload: V,
                            isCartNote: !0
                        }), B("")))
                    } catch (b) {
                        console.error("Error saving note:", b), ft(D("error_saving_note"))
                    } finally {
                        f(!1), h(!1)
                    }
                }),
                setIsEditMode: h,
                setInputValue: B,
                setShowError: I
            }
        }
    },
    $c = e => e != null && e.wallet_config ? Ze.REWARDS_WALLET : e != null && e.loyalty_config ? Ze.LOYALTY : Ze.NONE,
    Wc = e => !e || !(e != null && e.length) ? [] : e == null ? void 0 : e.map((n, r) => {
        var s, i;
        return {
            provider: (s = n == null ? void 0 : n.provider) != null ? s : "NONE",
            id: n == null ? void 0 : n.id,
            title: n == null ? void 0 : n.name,
            desc: (i = n == null ? void 0 : n.desc) != null ? i : "",
            totalPoints: n == null ? void 0 : n.point_amount,
            totalPrice: n == null ? void 0 : n.reduction_amount
        }
    }),
    qc = (e, t) => {
        var r, o, s, i, a, l, E, f, T, h, S, I, p, C, R, B, L, g, H, w, c, V, q, z, k, d, b, P, Q, v, Z, O, $, re, Y;
        switch ($c(e)) {
            case Ze.LOYALTY:
                {
                    const u = e == null ? void 0 : e.loyalty_config;
                    return (u == null ? void 0 : u.provider) === "YOTPO" ? {
                        mode: Ze.LOYALTY,
                        data: {
                            provider: u == null ? void 0 : u.provider,
                            value: {
                                email: (r = u == null ? void 0 : u.user_details) == null ? void 0 : r.customer_id,
                                totalPointsBalance: (o = u == null ? void 0 : u.user_details) == null ? void 0 : o.point_balance,
                                totalReducedPoints: (s = u == null ? void 0 : u.user_details) == null ? void 0 : s.max_applicable_points,
                                redemptionOptions: Wc(u == null ? void 0 : u.redemption_options),
                                totalReductionAmount: (i = u == null ? void 0 : u.user_details) == null ? void 0 : i.reduction_amount,
                                coinName: u == null ? void 0 : u.coin_name,
                                coinNamePlural: u == null ? void 0 : u.coin_name_in_plural,
                                unavailabilityReasons: (a = u == null ? void 0 : u.unavailability_reason) != null ? a : [],
                                isAvailable: (l = u == null ? void 0 : u.is_available) != null ? l : !1
                            },
                            accountExists: u == null ? void 0 : u.account_exists,
                            isVerified: (E = u == null ? void 0 : u.user_details) == null ? void 0 : E.verification_required
                        }
                    } : {
                        mode: Ze.LOYALTY,
                        data: {
                            provider: (f = u == null ? void 0 : u.provider) != null ? f : "NONE",
                            value: {
                                provider: (T = u == null ? void 0 : u.provider) != null ? T : "NONE",
                                earnValue: {
                                    isEnabled: (h = u == null ? void 0 : u.earn_response) == null ? void 0 : h.enabled,
                                    issuanceRate: (S = u == null ? void 0 : u.earn_response) == null ? void 0 : S.issuance_rate,
                                    normalizedValue: (I = u == null ? void 0 : u.earn_response) == null ? void 0 : I.normalized_value,
                                    value: Math.floor((C = (p = u == null ? void 0 : u.earn_response) == null ? void 0 : p.value) != null ? C : 0)
                                },
                                coinName: (R = u == null ? void 0 : u.coin_name) != null ? R : "Coin",
                                coinNamePlural: (B = u == null ? void 0 : u.coin_name_in_plural) != null ? B : "Coins",
                                redemptionId: (g = (L = u == null ? void 0 : u.redemption_options) == null ? void 0 : L[0]) == null ? void 0 : g.id,
                                userDetails: {
                                    customerId: (H = u == null ? void 0 : u.user_details) == null ? void 0 : H.customer_id,
                                    pointBalance: (w = u == null ? void 0 : u.user_details) == null ? void 0 : w.point_balance,
                                    maxApplicablePoints: (c = u == null ? void 0 : u.user_details) == null ? void 0 : c.max_applicable_points,
                                    reductionAmount: t != null && t.totalPrice ? t == null ? void 0 : t.totalPrice : (V = u == null ? void 0 : u.user_details) == null ? void 0 : V.reduction_amount
                                },
                                unavailabilityReasons: (q = u == null ? void 0 : u.unavailability_reason) != null ? q : [],
                                isAvailable: (z = u == null ? void 0 : u.is_available) != null ? z : !1
                            }
                        }
                    }
                }
            case Ze.REWARDS_WALLET:
                {
                    const u = (k = e == null ? void 0 : e.wallet_config) != null ? k : {};
                    return {
                        mode: Ze.REWARDS_WALLET,
                        data: {
                            floWalletData: {
                                totalPointsBalance: (d = u == null ? void 0 : u.total_points) != null ? d : 0,
                                totalAmount: (b = u == null ? void 0 : u.total_balance) != null ? b : 0,
                                maxBurnablePoints: (P = u == null ? void 0 : u.max_burnable_points) != null ? P : 0,
                                maxBurnableAmount: (Q = u == null ? void 0 : u.max_burnable_amount) != null ? Q : 0,
                                maxEarnablePoints: (v = u == null ? void 0 : u.max_earnable_points) != null ? v : 0,
                                maxEarnableAmount: (Z = u == null ? void 0 : u.max_earnable_amount) != null ? Z : 0,
                                earnMultiplier: (O = u == null ? void 0 : u.earn_multiplier) != null ? O : 0,
                                burnMultiplier: ($ = u == null ? void 0 : u.burn_multiplier) != null ? $ : 0,
                                coinName: u == null ? void 0 : u.coin_name,
                                coinNamePlural: u == null ? void 0 : u.coin_name_plural,
                                earnEnabled: !!(u != null && u.earn_enabled),
                                burnEnabled: !!(u != null && u.burn_enabled),
                                walletDisabledMessage: (u == null ? void 0 : u.wallet_disabled_message) || "",
                                coinConversionRate: u != null && u.coin_conversion_rate ? u == null ? void 0 : u.coin_conversion_rate : 1,
                                insufficientBalanceMessage: (u == null ? void 0 : u.insufficient_balance_message) || "",
                                personalizedWalletMessageEnabled: u == null ? void 0 : u.personalized_wallet_display_message_enabled,
                                rewardsEarnedMessage: u == null ? void 0 : u.rewards_earned_message,
                                currencyEarnedMessage: u == null ? void 0 : u.currency_earned_message,
                                currencyBurnedMessage: u == null ? void 0 : u.currency_burned_message,
                                currencyBurnedTemplate: u == null ? void 0 : u.currency_burned_template,
                                earnTileCustomization: u == null ? void 0 : u.earn_tile_customise_ui,
                                unavailabilityReasons: (re = u == null ? void 0 : u.unavailability_reason) != null ? re : [],
                                isAvailable: (Y = u == null ? void 0 : u.is_available) != null ? Y : !1
                            },
                            isWalletCreated: !!(u != null && u.wallet_exists)
                        }
                    }
                }
            default:
                return {
                    mode: Ze.NONE,
                    data: {}
                }
        }
    },
    xl = e => {
        var t;
        return (t = e == null ? void 0 : e.balance) != null ? t : 0
    },
    vl = e => {
        var r, o, s, i;
        const t = e == null ? void 0 : e.filter(a => (a == null ? void 0 : a.type) === "INVALID_DISCOUNTS");
        if (!(t != null && t.length)) return {
            invalidDiscountCodeTitles: [],
            invalidDiscountCodes: []
        };
        const n = zc((r = t == null ? void 0 : t[0]) == null ? void 0 : r.values, (o = t == null ? void 0 : t[0]) == null ? void 0 : o.title_code_mapping);
        return {
            invalidDiscountCodeTitles: (i = (s = t == null ? void 0 : t[0]) == null ? void 0 : s.values) != null ? i : [],
            invalidDiscountCodes: n != null ? n : []
        }
    },
    zc = (e, t) => t ? e.map(n => t[n] || n) : e,
    Kl = () => {
        const {
            state: {
                checkoutId: e,
                appliedLoyalty: t
            }
        } = Ke(), {
            state: {
                isAuthenticated: n
            }
        } = Tn(), [r, o] = y.useState(""), {
            data: s,
            isValidating: i,
            error: a,
            mutate: l
        } = ct(e && n ? [`/checkout/${e}/rewards${r?`?email=${r}`:""}`, "KRATOS_PRIVATE"] : null, ([S, I]) => Re(S, I), _t), E = y.useCallback(S => K(void 0, null, function*() {
            try {
                const I = yield sn(`/checkout/${e}/rewards`, S, "KRATOS_PRIVATE");
                return Ne([`/checkout/${e}/rewards`, at.KRATOS_PRIVATE]), I
            } catch (I) {
                console.error(I)
            }
        }), [e]), f = y.useCallback(S => K(void 0, null, function*() {
            try {
                const I = yield ye(`/checkout/${e}/rewards`, S, "KRATOS_PRIVATE");
                return Ne([`/checkout/${e}/rewards`, at.KRATOS_PRIVATE]), I
            } catch (I) {
                console.error(I)
            }
        }), [e]), T = y.useMemo(() => qc(s, t), [s, t]);
        return {
            state: {
                mode: T.mode,
                rewardsConfig: T,
                isTileLoading: i,
                error: a
            },
            actions: {
                updateRewards: f,
                removeRewards: E,
                setSelectedEmail: o
            }
        }
    };
var jc = (e => (e.DISCOUNTED = "DISCOUNTED", e.NON_DISCOUNTED = "NON_DISCOUNTED", e.WISHLIST = "WISHLIST", e.RECENTLY_VIEWED = "RECENTLY_VIEWED", e))(jc || {}),
    Xc = (e => (e.CART = "CART", e))(Xc || {});
const Vl = e => {
        var h, S, I, p, C;
        const [t, n] = y.useState(!1), {
            state: {
                merchant: r
            }
        } = st(), {
            state: {
                etdText: o,
                uid: s
            },
            actions: {
                setEtdText: i
            }
        } = Ke(), a = (S = (h = r == null ? void 0 : r.colorPallet) == null ? void 0 : h.primaryColor) == null ? void 0 : S.substring(0, 7), l = on(a != null ? a : "#000000", .2), E = on(a != null ? a : "#000000", .23), f = (p = (I = r == null ? void 0 : r.addressConfig) == null ? void 0 : I.deliveryConfig) == null ? void 0 : p.isETDEnabled, T = () => K(void 0, null, function*() {
            if (!(o[e] || !e)) {
                n(!0);
                try {
                    const R = yield Re(`/checkout/${s}/address/${e}/etd`, "KRATOS_PRIVATE");
                    i({
                        addressId: e,
                        text: fa(R)
                    })
                } catch (R) {
                    console.error(R)
                } finally {
                    n(!1)
                }
            }
        });
        return {
            etdLoading: t,
            etdText: o[e],
            ETD_COLOR: l,
            ETD_SHIMMER_COLOR: E,
            isETDEnabled: f,
            fetchEstimatedTimeDelivery: T,
            primaryColor: (C = r == null ? void 0 : r.colorPallet) == null ? void 0 : C.primaryColor
        }
    },
    Gl = () => {
        const [e, t] = y.useState(!1), {
            state: {
                merchant: n
            }
        } = st(), {
            state: {
                checkoutId: r
            }
        } = Ke(), {
            data: o,
            isValidating: s,
            error: i
        } = ct(e ? `/checkout/v1/checkout/${r}/cod-otp/send` : null, f => ye(f, {}), _t), {
            actions: {
                setPaymentMethodDialog: a,
                handleNonPaymentOrderPlacement: l
            }
        } = Hs();
        return y.useEffect(() => {
            if (e && !s) {
                if (o && !(o != null && o.cod_verification_required) && !i) {
                    a("NONE"), l("COD"), t(!1);
                    return
                }
                a("COD_OTP"), t(!1)
            }
        }, [o, e, s]), {
            placeCODOrder: () => {
                if ((n == null ? void 0 : n.codVerification) === "PRE_COD") return t(!0);
                l("COD"), a("NONE")
            }
        }
    },
    Yl = (e, t, n) => K(void 0, null, function*() {
        if (!(!e || !t)) try {
            const r = {
                context_id: e,
                otp: t,
                checkout_id: n
            };
            return yield ye(`/checkout/v1/checkout/${n}/cod-otp/verify`, r)
        } catch (r) {
            throw console.error(r), new Error(r)
        }
    }),
    $l = (e, t, n) => K(void 0, null, function*() {
        if (e) try {
            const r = {
                context_id: e,
                phone: t,
                checkout_id: n
            };
            return yield ye(`/checkout/v1/checkout/${n}/cod-otp/resend`, r)
        } catch (r) {
            throw console.error(r), r
        }
    }),
    Wl = e => {
        const t = y.useRef(null),
            [n, r] = y.useState(0),
            o = e[n];
        return y.useEffect(() => (t.current = setInterval(() => {
            r(s => (s + 1) % e.length)
        }, 2e3), () => {
            t.current && clearTimeout(t.current)
        }), []), {
            currentText: o
        }
    },
    Gn = y.createContext({
        state: {},
        actions: {}
    });

function Qc(e, t) {
    switch (t.type) {
        case 0:
            return m(_({}, e), {
                popup: t.payload
            });
        default:
            return e
    }
}
const Zc = {
        popup: void 0
    },
    ql = ({
        initialState: e = Zc,
        children: t
    }) => {
        const [n, r] = y.useReducer(Qc, e), o = y.useCallback(i => {
            r({
                type: 0,
                payload: i
            })
        }, []), s = y.useMemo(() => ({
            setPopup: o
        }), [o]);
        return Je.jsx(Gn.Provider, {
            value: {
                state: n,
                actions: s
            },
            "data-sentry-element": "unknown",
            "data-sentry-component": "SSOProvider",
            "data-sentry-source-file": "SSOProvider.tsx",
            children: t
        })
    };

function zl() {
    if (!Gn) throw new Error("useSSOContext must be used within a SSOProvider");
    return y.useContext(Gn)
}
const jl = () => {
        var h;
        const {
            state: {
                checkoutId: e,
                shopifySessionId: t,
                checkoutItems: n,
                billing: r
            }
        } = Ke(), {
            state: {
                merchant: o
            }
        } = st(), {
            state: {
                user: s
            },
            actions: {
                setUserLoginType: i
            }
        } = Nt(), {
            sendAnalyticsEvent: a
        } = Sn(), [l] = Tt(), E = (h = l.get("page")) == null ? void 0 : h.toLowerCase();
        y.useEffect(() => {
            (!E || (E == null ? void 0 : E.toLowerCase()) === "checkout") && e && (o == null ? void 0 : o.merchantId) && (s == null ? void 0 : s.uid) && T()
        }, [E, e, o == null ? void 0 : o.merchantId, s == null ? void 0 : s.uid]), y.useEffect(() => {
            (!E || (E == null ? void 0 : E.toLowerCase()) === "checkout") && e && (o == null ? void 0 : o.merchantId) && f()
        }, [E, e, o == null ? void 0 : o.merchantId]);
        const f = () => {
                const S = l.get("tokenId");
                a({
                    eventName: te.FLO_CHECKOUT_UI_LOADED,
                    eventType: "load",
                    metaData: {
                        brandUrl: o == null ? void 0 : o.brandUrl,
                        merchantId: o == null ? void 0 : o.merchantId,
                        checkoutId: e,
                        checkoutToken: S,
                        shopifySessionId: t,
                        checkoutItems: n
                    }
                })
            },
            T = () => {
                var C, R, B, L, g, H;
                const S = l.get("tokenId");
                let I = te.FLO_COOKIE_LOGIN;
                ue.get(X.REFRESH_TOKEN_COOKIE_CLIENT) ? (i(te.FLO_COOKIE_LOGIN), a({
                    eventName: te.FLO_COOKIE_LOGIN,
                    eventFor: [Ue.SF_ANALYTICS, Ue.FACEBOOK_PIXEL],
                    eventType: "flo_action",
                    metaData: {
                        brandUrl: o == null ? void 0 : o.brandUrl,
                        merchantId: o == null ? void 0 : o.merchantId,
                        checkoutToken: S,
                        checkoutId: e,
                        shopifySessionId: t,
                        userType: te.FLO_COOKIE_LOGIN,
                        userData: {
                            type: te.FLO_COOKIE_LOGIN,
                            uid: s == null ? void 0 : s.uid,
                            userId: s == null ? void 0 : s.uid
                        },
                        isFbqEnabled: (B = (R = (C = o == null ? void 0 : o.analytics) == null ? void 0 : C.facebook) == null ? void 0 : R.enabled) != null ? B : !1,
                        fbqPixelId: (H = (g = (L = o == null ? void 0 : o.analytics) == null ? void 0 : L.facebook) == null ? void 0 : g.pixel_id) != null ? H : [],
                        checkoutItems: n,
                        totalPayable: r == null ? void 0 : r.total_payable
                    }
                })) : ue.get(X.AUTH_COOKIE_CLIENT) && (I = te.FLO_GUEST_LOGIN, i(te.FLO_GUEST_LOGIN), a({
                    eventName: te.FLO_GUEST_LOGIN,
                    eventFor: [Ue.SF_ANALYTICS],
                    eventType: "flo_action",
                    metaData: {
                        brandUrl: o == null ? void 0 : o.brandUrl,
                        merchantId: o == null ? void 0 : o.merchantId,
                        checkoutToken: S,
                        checkoutId: e,
                        shopifySessionId: t,
                        userData: {
                            type: te.FLO_GUEST_LOGIN
                        },
                        checkoutItems: n
                    }
                }));
                const p = Wn();
                p != null && p.length && a({
                    eventName: te.FLO_STORE_PAGE_VIEW,
                    eventType: "load",
                    metaData: {
                        storeDetails: {
                            utmParams: p
                        },
                        merchantId: o == null ? void 0 : o.merchantId,
                        checkoutId: e,
                        checkoutToken: S,
                        shopifySessionId: t,
                        userData: {
                            type: te.FLO_GUEST_LOGIN
                        }
                    }
                }), a({
                    eventName: te.FLO_AUTH_LOGIN_COMPLETED,
                    eventType: "load",
                    metaData: {
                        checkoutId: e,
                        checkoutToken: S,
                        shopifySessionId: t,
                        merchantId: o == null ? void 0 : o.merchantId,
                        userData: {
                            type: I,
                            userId: s == null ? void 0 : s.uid
                        },
                        checkoutItems: n,
                        segmentId: e
                    }
                })
            }
    },
    Xl = () => {
        Promise.allSettled || Jc(), e_()
    },
    Jc = () => {
        const e = n => ({
                status: "rejected",
                reason: n
            }),
            t = n => ({
                status: "fulfilled",
                value: n
            });
        Promise.allSettled = function(n) {
            const r = n.map(o => Promise.resolve(o).then(t, e));
            return Promise.all(r)
        }
    },
    e_ = () => {
        if (!String.prototype.replaceAll) try {
            String.prototype.replaceAll = function(e, t) {
                return Object.prototype.toString.call(e).toLowerCase() === "[object regexp]" ? this.replace(e, t) : this.replace(new RegExp(e, "g"), t)
            }
        } catch (e) {
            console.error("polyfill not added", e)
        }
    },
    Ql = () => {
        const [e, t] = y.useState(!1);
        y.useEffect(() => {
            const n = "https://d97a825a449bcf2e640608e705016d56@o4508131579002880.ingest.us.sentry.io/4508131592241152";
            let r = 1,
                o = !1;
            ["production"].includes("production") && (r = .1, o = !0), !e && o && (zs({
                dsn: n,
                enabled: o,
                environment: "production",
                integrations: [js()],
                tracesSampler(s) {
                    return s.parentSampled !== void 0 ? s.parentSampled : .1
                },
                replaysSessionSampleRate: r,
                replaysOnErrorSampleRate: 1,
                ignoreErrors: [/^Clarity/, /TypeError: Network request failed/, /TypeError: Load failed/, /TypeError: Failed to fetch dynamically imported module/, /TypeError: Importing a module script failed/, /TypeError: error loading dynamically imported module/, /TypeError: cancelled/, /The string did not match the expected pattern/],
                beforeSend(s) {
                    var i, a;
                    return (a = (i = s == null ? void 0 : s.exception) == null ? void 0 : i.values) != null && a.some(l => {
                        var E, f;
                        return (f = (E = l == null ? void 0 : l.stacktrace) == null ? void 0 : E.frames) == null ? void 0 : f.some(T => {
                            var h, S;
                            return ((h = T == null ? void 0 : T.filename) == null ? void 0 : h.includes("clarity.ms")) || ((S = T == null ? void 0 : T.filename) == null ? void 0 : S.includes("clarity.js"))
                        })
                    }) ? null : s
                },
                denyUrls: [/extensions\//i, /^chrome:\/\//i, /clarity\.ms/, /www\.clarity\.ms/, /https:\/\/www\.clarity\.ms\//]
            }), t(!0))
        }, [e, t])
    };

function Zl(e, t) {
    return K(this, null, function*() {
        var T, h, S, I, p, C, R, B, L, g, H, w, c, V, q, z, k, d, b, P, Q, v, Z, O, $, re, Y, u, ee, ie, ae, oe, G, F, j;
        const n = [Re(`/v1/accounts?merchant_id=${e}&include=attributes,analytics`, "CHECKOUT_PUBLIC"), Re(`/checkout/v1/checkout/${t}?include=token`)],
            r = yield Promise.allSettled(n), o = ((T = r[0]) == null ? void 0 : T.status) === "fulfilled" ? (h = r[0]) == null ? void 0 : h.value : {}, s = ((S = r[1]) == null ? void 0 : S.status) === "fulfilled" ? (I = r[1]) == null ? void 0 : I.value : {}, i = (C = (p = o == null ? void 0 : o.account_attributes) == null ? void 0 : p.attributes) != null ? C : {}, a = (R = i == null ? void 0 : i.ui) == null ? void 0 : R.color_pallet, l = (B = i == null ? void 0 : i.website_url) != null ? B : "";
        a && On(a == null ? void 0 : a.primary_color, a == null ? void 0 : a.secondary_color);
        const E = (V = (c = (g = (L = s == null ? void 0 : s.token) == null ? void 0 : L.data) == null ? void 0 : g.redirect_url) != null ? c : (w = (H = s == null ? void 0 : s.token) == null ? void 0 : H.data) == null ? void 0 : w.back_url) != null ? V : "",
            f = (q = zn(s == null ? void 0 : s.pricing)) != null ? q : {
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
                original_sub_total: 0,
                addon_total: 0,
                gift_card: 0
            };
        return {
            attributes: {
                merchantAttributes: o,
                originUrl: l
            },
            checkout: {
                checkoutResponse: s,
                brandUrl: (d = (k = (z = s == null ? void 0 : s.token) == null ? void 0 : z.data) == null ? void 0 : k.origin_url) != null ? d : l,
                analyticsMeta: (P = (b = s == null ? void 0 : s.metadata) == null ? void 0 : b.analytics) != null ? P : {},
                redirectUrl: E,
                checkoutToken: (Q = s == null ? void 0 : s.checkout_token_id) != null ? Q : "",
                isCheckoutC2P: (O = (Z = (v = s == null ? void 0 : s.metadata) == null ? void 0 : v.c2p) == null ? void 0 : Z.enabled) != null ? O : !1,
                sessionId: (re = ($ = s == null ? void 0 : s.token) == null ? void 0 : $.sf_session_id) != null ? re : "",
                parsedBilling: f,
                longSessionId: (u = (Y = s == null ? void 0 : s.metadata) == null ? void 0 : Y.long_session_id) != null ? u : "",
                thirdPartyAnalyticsData: (ie = (ee = s == null ? void 0 : s.metadata) == null ? void 0 : ee.analytics) != null ? ie : {},
                clientMetadata: (oe = (ae = s == null ? void 0 : s.metadata) == null ? void 0 : ae.client_meta) != null ? oe : {},
                checkoutChannel: (F = (G = s == null ? void 0 : s.metadata) == null ? void 0 : G.application_id) != null ? F : "",
                segmentId: (j = s == null ? void 0 : s.segment_id) != null ? j : ""
            }
        }
    })
}
const Jl = () => {
        const e = y.useRef({
                isLoaded: !1
            }),
            {
                state: {
                    user: t
                }
            } = Nt(),
            n = y.useCallback(() => K(void 0, null, function*() {
                var i, a;
                if (!nn()) return null;
                try {
                    return {
                        accountId: t == null ? void 0 : t.uid,
                        email: t == null ? void 0 : t.email,
                        phone: t == null ? void 0 : t.phone,
                        firstName: (i = t == null ? void 0 : t.metadata) == null ? void 0 : i.first_name,
                        lastName: (a = t == null ? void 0 : t.metadata) == null ? void 0 : a.last_name,
                        isLoaded: !0
                    }
                } catch (l) {
                    return console.error("error", l), null
                }
            }), [t == null ? void 0 : t.uid]),
            r = y.useCallback((s, i) => {
                switch (s.thirdParty) {
                    case "webengage":
                        (s.type === "email" || s.type === "phone") && He(De.SET_WEBENGAGE_DATA, {
                            firstName: i == null ? void 0 : i.firstName,
                            lastName: i == null ? void 0 : i.lastName,
                            email: i == null ? void 0 : i.email,
                            phone: i == null ? void 0 : i.phone,
                            type: s.type
                        });
                        break;
                    case "clevertap":
                        He(De.SET_CLEVERTAP_DATA, {
                            name: `${(i==null?void 0:i.firstName)||""} ${(i==null?void 0:i.lastName)||""}`.trim(),
                            email: i == null ? void 0 : i.email,
                            phone: i == null ? void 0 : i.phone
                        });
                        break
                }
            }, []),
            o = y.useCallback(a => K(void 0, [a], function*({
                thirdParty: s,
                type: i
            }) {
                try {
                    const l = yield n();
                    if (!l) return;
                    e.current = l, r({
                        thirdParty: s,
                        type: i
                    }, l)
                } catch (l) {
                    console.error("Error sending third party data:", l)
                }
            }), [n, r]);
        return y.useMemo(() => ({
            user: e.current,
            sendThirdPartyData: o,
            userData: t
        }), [o, t])
    },
    t_ = "8d593cf0-99a5-4c0b-8988-0069fff0c197",
    eu = () => {
        const [e, t] = y.useState([]), [n, r] = y.useState(!0), [o] = Tt(), {
            state: {
                cartMetadata: {
                    metadataLoading: s,
                    ui_attributes: i
                }
            }
        } = vs(), a = l => K(void 0, null, function*() {
            var f, T, h, S;
            if (o.get("is_background_load") === "false") try {
                if (l.data.type === De.RECENT_VISITED_VARIANTS) {
                    He(De.CLOSE_RECENT_VISITED_VARIANTS, {});
                    const I = (T = (f = l == null ? void 0 : l.data) == null ? void 0 : f.payload) == null ? void 0 : T.data,
                        p = (S = (h = l == null ? void 0 : l.data) == null ? void 0 : h.payload) == null ? void 0 : S.merchantId;
                    r(!0);
                    const C = yield ye(`/issuer/${t_}/merchant/${p}/variant`, {
                        variant_ids: I
                    }, "CE_PUBLIC"), R = C == null ? void 0 : C.map(g => g.product), {
                        discountedUpsells: B,
                        nonDiscountedUpsells: L
                    } = Oa(R);
                    t([...B, ...L]), r(!1)
                }
            } catch (I) {
                r(!1)
            }
        });
        return y.useEffect(() => {
            if (!s) return window.addEventListener("message", a), () => {
                window.removeEventListener("message", a)
            }
        }, [o, s]), {
            upsellData: e,
            isLoading: n
        }
    },
    tu = e => {
        var t;
        return {
            id: e == null ? void 0 : e.id,
            name: e == null ? void 0 : e.name,
            description: e == null ? void 0 : e.description,
            status: e == null ? void 0 : e.status,
            module: e == null ? void 0 : e.module,
            testGroups: (t = e == null ? void 0 : e.test_group_configs) == null ? void 0 : t.map(n => ({
                segmentId: n == null ? void 0 : n.segment_id,
                name: n == null ? void 0 : n.name,
                description: n == null ? void 0 : n.description,
                trafficPercentage: n == null ? void 0 : n.percent_share,
                isControlGroup: n == null ? void 0 : n.is_control_group
            }))
        }
    };
export {
    sn as $, Ue as A, wl as B, pi as C, Fi as D, xe as E, Ks as F, Is as G, Xi as H, Hl as I, v_ as J, Ml as K, St as L, vc as M, Fa as N, Sa as O, fl as P, W_ as Q, Nl as R, Ba as S, Ma as T, Pl as U, El as V, dl as W, Hs as X, In as Y, _t as Z, Dc as _, Sn as a, Qa as a$, rt as a0, rl as a1, at as a2, Xe as a3, ye as a4, Y_ as a5, rn as a6, g_ as a7, Kl as a8, Ze as a9, gi as aA, qi as aB, gl as aC, Ei as aD, jn as aE, V_ as aF, xa as aG, P_ as aH, ml as aI, Ll as aJ, fa as aK, Ua as aL, N_ as aM, m_ as aN, R_ as aO, A_ as aP, Rc as aQ, B_ as aR, Fs as aS, zi as aT, Gl as aU, us as aV, hl as aW, xl as aX, bl as aY, Yl as aZ, $l as a_, ol as aa, D_ as ab, ul as ac, Ca as ad, x_ as ae, _a as af, ys as ag, J_ as ah, Ha as ai, Dn as aj, il as ak, Ts as al, Vi as am, H_ as an, an as ao, on as ap, Q_ as aq, el as ar, K_ as as, vl as at, Ns as au, Il as av, Oi as aw, Vl as ax, ve as ay, I_ as az, st as b, sa as b0, pl as b1, sl as b2, $_ as b3, nl as b4, M_ as b5, bt as b6, al as b7, ya as b8, Jo as b9, Jl as bA, nn as bB, On as bC, jl as bD, X_ as bE, _l as bF, La as bG, b_ as bH, cl as bI, fi as bJ, Na as bK, Al as bL, G_ as bM, ql as bN, un as bO, ps as bP, Zl as bQ, kn as bR, nt as bS, p_ as bT, Pc as bU, Mc as bV, zn as bW, Oa as bX, Ta as bY, tl as bZ, mt as ba, L_ as bb, k_ as bc, wn as bd, Un as be, Zo as bf, Pt as bg, Xl as bh, yl as bi, Cl as bj, Tl as bk, Sl as bl, Ol as bm, kl as bn, Bl as bo, Rl as bp, Ql as bq, At as br, Fl as bs, Mi as bt, Xc as bu, ll as bv, dn as bw, eu as bx, jc as by, tu as bz, F_ as c, te as d, Nt as e, Ke as f, Dl as g, Ul as h, Tn as i, zl as j, vs as k, Wl as l, Re as m, w_ as n, Nc as o, He as p, De as q, j_ as r, q_ as s, Z_ as t, _n as u, z_ as v, ft as w, Lt as x, X as y, U_ as z
};
//# sourceMappingURL=lib-D7WRmHWF.js.map