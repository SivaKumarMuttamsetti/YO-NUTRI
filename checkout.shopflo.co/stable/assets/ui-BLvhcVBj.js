var De = Object.defineProperty,
    Fe = Object.defineProperties;
var Ue = Object.getOwnPropertyDescriptors;
var q = Object.getOwnPropertySymbols;
var _e = Object.prototype.hasOwnProperty,
    Pe = Object.prototype.propertyIsEnumerable;
var be = (e, r, t) => r in e ? De(e, r, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[r] = t,
    S = (e, r) => {
        for (var t in r || (r = {})) _e.call(r, t) && be(e, t, r[t]);
        if (q)
            for (var t of q(r)) Pe.call(r, t) && be(e, t, r[t]);
        return e
    },
    E = (e, r) => Fe(e, Ue(r));
var F = (e, r) => {
    var t = {};
    for (var a in e) _e.call(e, a) && r.indexOf(a) < 0 && (t[a] = e[a]);
    if (e != null && q)
        for (var a of q(e)) r.indexOf(a) < 0 && Pe.call(e, a) && (t[a] = e[a]);
    return t
};
var W = (e, r, t) => new Promise((a, n) => {
    var s = u => {
            try {
                l(t.next(u))
            } catch (c) {
                n(c)
            }
        },
        i = u => {
            try {
                l(t.throw(u))
            } catch (c) {
                n(c)
            }
        },
        l = u => u.done ? a(u.value) : Promise.resolve(u.value).then(s, i);
    l((t = t.apply(e, r)).next())
});
import {
    r as d,
    j as o,
    R as Ce,
    Y as $e,
    Z as je,
    $ as Ae,
    a0 as Ge,
    a1 as Te
} from "./react-core-C02-NrKc.js";
import "./sentry-1CVSdSoY.js";
import {
    G as we,
    y as ze,
    j as Re,
    l as He,
    c as Ye,
    X as qe,
    h as We,
    v as Xe
} from "./react-ui-CLI46-or.js";
import {
    t as J,
    a as Ke
} from "./vendor-styling-BudEvoL3.js";
import {
    a8 as Ze,
    a9 as Je
} from "./vendor-DWBJvUkq.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {},
            r = new e.Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "ac7216e3-8fe2-4d24-96bc-c75e07e43a0f", e._sentryDebugIdIdentifier = "sentry-dbid-ac7216e3-8fe2-4d24-96bc-c75e07e43a0f")
    } catch (t) {}
})();
var $ = (e => (e.REGULAR = "REGULAR", e.MEDIUM = "MEDIUM", e.LARGE = "LARGE", e))($ || {}),
    L = (e => (e.COUNT_BASED = "COUNT_BASED", e.PRICE_BASED = "PRICE_BASED", e))(L || {}),
    U = (e => (e.STATIC = "STATIC", e.DYNAMIC = "DYNAMIC", e))(U || {});
const X = {
        FREEBIE: "FREEBIE",
        FREE_SHIPPING: "FREE_SHIPPING",
        PERCENT_OFF: "PERCENT_OFF",
        FLAT_OFF: "FLAT_OFF"
    },
    ke = d.createContext({
        milestones: [],
        total: 0,
        achievedMilestoneIdx: 0,
        totalMilestones: 0,
        currentProgress: 0,
        customizations: {
            type: U.DYNAMIC,
            category: L.PRICE_BASED,
            completedMessage: "",
            completedMessage_enabled: !1,
            textonProgressBar_header: !1,
            textonProgressBar_amount: !1,
            textonProgressBar_title: !1,
            textonProgressBar_headerColor: "#2c874a",
            textonProgressBar_amountColor: "#2c874a",
            textonProgressBar_titleColor: "#2c874a",
            width: $.REGULAR,
            filledColor: "#2c874a",
            emptyColor: "#ffffff"
        }
    }),
    Qe = ({
        children: e,
        milestones: r,
        achievedMilestoneIdx: t = 1,
        totalMilestones: a,
        currentProgress: n,
        total: s,
        customizations: i,
        onMilestoneReached: l
    }) => o.jsx(ke.Provider, {
        value: {
            achievedMilestoneIdx: t,
            totalMilestones: a,
            currentProgress: n,
            milestones: r,
            total: s,
            customizations: i,
            onMilestoneReached: l
        },
        "data-sentry-element": "unknown",
        "data-sentry-component": "ProgressBarProvider",
        "data-sentry-source-file": "ProgressBarContext.tsx",
        children: e
    }),
    A = () => {
        const e = d.useContext(ke);
        if (!e) throw new Error("useProgressBar must be used within a ProgressBarProvider");
        return e
    },
    Ve = e => function(t) {
        return e.replace(/{{([^{}]*)}}/g, function(n, s) {
            const i = t[s];
            return typeof i == "string" || typeof i == "number" ? i : n
        })
    },
    K = {
        isEnabled: !1,
        milestones: [],
        customizations: {
            type: U.STATIC,
            category: L.PRICE_BASED,
            completedMessage: "You have successfully reached the milestone",
            completedMessage_enabled: !0,
            textonProgressBar_header: !0,
            textonProgressBar_headerColor: "#2c874a",
            textonProgressBar_amount: !0,
            textonProgressBar_amountColor: "#2c874a",
            textonProgressBar_title: !0,
            textonProgressBar_titleColor: "#2c874a",
            width: $.MEDIUM,
            filledColor: "#2c874a",
            emptyColor: "#ffffff"
        }
    },
    et = E(S({}, K), {
        customizations: E(S({}, K.customizations), {
            category: L.COUNT_BASED
        })
    }),
    tt = E(S({}, K), {
        customizations: E(S({}, K.customizations), {
            category: L.PRICE_BASED
        })
    }),
    Ne = e => {
        const {
            enable: r,
            category: t,
            milestones: a,
            complete_message: n,
            text_title_color: s,
            progress_bar_type: i,
            text_amount_color: l,
            text_header_color: u,
            text_title_enable: c,
            text_amount_enable: m,
            text_header_enable: h,
            milestone_empty_color: g,
            milestone_filled_color: C,
            progress_bar_width: P,
            complete_message_enable: _
        } = e, k = a.map((f, y) => E(S({}, f), {
            milestone: y
        }));
        return {
            isEnabled: r,
            milestones: k,
            customizations: {
                type: i,
                category: t,
                completedMessage: n,
                completedMessage_enabled: _,
                textonProgressBar_header: h,
                textonProgressBar_headerColor: u,
                textonProgressBar_amount: m,
                textonProgressBar_amountColor: l,
                textonProgressBar_title: c,
                textonProgressBar_titleColor: s,
                filledColor: C,
                emptyColor: g,
                width: P
            }
        }
    },
    Kt = e => {
        const r = e,
            t = r.filter(s => s.category === L.COUNT_BASED),
            a = r.filter(s => s.category === L.PRICE_BASED),
            n = {
                countBased: et,
                amountBased: tt
            };
        return t.length > 0 && t[0] && (n.countBased = Ne(t[0])), a.length > 0 && a[0] && (n.amountBased = Ne(a[0])), n
    };

function rt(e, r = 90) {
    e = e.replace(/^#/, ""), e.length === 3 && (e = e.split("").map(i => i + i).join(""));
    const t = parseInt(e.slice(0, 2), 16),
        a = parseInt(e.slice(2, 4), 16),
        n = parseInt(e.slice(4, 6), 16);
    return .299 * t + .587 * a + .114 * n > r
}

function ot(e, r) {
    const t = parseInt(e.slice(1, 3), 16),
        a = parseInt(e.slice(3, 5), 16),
        n = parseInt(e.slice(5, 7), 16);
    return "rgba(" + t + ", " + a + ", " + n + ", " + r + ")"
}
const V = {
        width: {
            [$.LARGE]: 10,
            [$.MEDIUM]: 6,
            [$.REGULAR]: 4
        },
        partPercentageOfMilestones: {
            1: [100],
            2: [50, 50],
            3: [20, 80 / 2, 80 / 2],
            4: [10, 90 / 3, 90 / 3, 90 / 3],
            5: [10, 90 / 4, 90 / 4, 90 / 4, 90 / 4]
        }
    },
    st = (e, r) => {
        var a;
        const t = (a = V.partPercentageOfMilestones[e]) == null ? void 0 : a[r];
        if (!t) throw new Error("Invalid milestone length or index");
        return t
    },
    Be = (e, r) => {
        var a;
        const t = (a = V.partPercentageOfMilestones[e]) == null ? void 0 : a.slice(0, r + 1).reduce((n, s) => n + s, 0);
        if (!t) throw new Error("Invalid milestone length or index");
        return t
    },
    nt = (e, r, t) => {
        var i, l;
        let a = 0,
            n = 0;
        const s = r.findIndex(u => u.milestone_amount > e);
        if (s === -1) a = r.length - 1, n = 100, r.length === 1 && (n = 100);
        else {
            const u = r[s];
            a = s - 1;
            const c = u == null ? void 0 : u.milestone_amount;
            let m = 0;
            if (s > 0 && (m = (l = (i = r[s - 1]) == null ? void 0 : i.milestone_amount) != null ? l : 0), t === U.DYNAMIC) return n = e / (c != null ? c : 0) * 100, {
                achievedMilestoneIdx: a,
                currentProgress: n
            };
            const h = (e - m) / ((c != null ? c : 0) - m),
                g = st(r.length, s);
            s === 0 ? n = g * h : n = Be(r.length, a) + g * h
        }
        return {
            achievedMilestoneIdx: a,
            currentProgress: n
        }
    },
    at = e => o.jsx("div", E(S({}, e), {
        className: `ui-flex ui-items-center ui-justify-center ${e.className}`,
        "data-sentry-component": "RupeeIcon",
        "data-sentry-source-file": "RupeeIcon.tsx",
        children: "₹"
    })),
    Ie = {
        [X.FLAT_OFF]: at,
        [X.FREE_SHIPPING]: Re,
        [X.PERCENT_OFF]: ze,
        [X.FREEBIE]: we
    },
    it = d.memo(({
        children: e,
        milestones: r,
        total: t,
        customizations: a,
        onMilestoneReached: n
    }) => {
        const s = d.useRef(),
            {
                achievedMilestoneIdx: i,
                currentProgress: l
            } = d.useMemo(() => nt(t, r, a.type), [t, r, a.type]);
        return d.useEffect(() => {
            n && s.current !== r[i] && n(r[i]), s.current = r[i]
        }, [i]), o.jsx(Qe, {
            total: t,
            milestones: r,
            achievedMilestoneIdx: i,
            totalMilestones: r.length,
            currentProgress: l,
            customizations: a,
            onMilestoneReached: n,
            children: e
        })
    }),
    lt = d.memo(({
        children: e
    }) => {
        const {
            currentProgress: r,
            totalMilestones: t,
            customizations: a
        } = A(), n = V.width[a.width], i = rt(a.filledColor) ? "#ffffff40" : "#00000040";
        return o.jsx("div", {
            className: "ui-flex ui-flex-col ui-w-full ui-justify-center ui-items-center",
            children: o.jsxs("ul", {
                className: "ui-z-10 ui-flex ui-w-full ui-items-center ui-relative",
                children: [o.jsx("div", {
                    style: {
                        "--progress-bar-filled-color": a.filledColor,
                        "--progress-bar-shadow-color": i,
                        "--progress-width": `${r}%`,
                        "--progress-height": `${n}px`
                    },
                    className: "ui-progress-bar-rail ui-absolute"
                }), e]
            })
        })
    }),
    ut = d.memo(({
        index: e
    }) => {
        const {
            achievedMilestoneIdx: r,
            milestones: t,
            total: a,
            customizations: n
        } = A(), s = t[e], i = d.useMemo(() => {
            const c = s.milestone_amount - a;
            return Number.isInteger(c) ? c.toString() : c.toFixed(2)
        }, [a, s]), l = n.category === L.COUNT_BASED, u = d.useMemo(() => Ve(s.milestone_header)({
            price: l ? `${i}` : `₹${i}`,
            value: `${i}`
        }), [i, s]);
        return r === e - 1 && n.textonProgressBar_header ? o.jsx("p", {
            className: "ui-p-3 ui-pt-0 ui-text-center ui-text-sm ui-font-semibold ui-text-yay-dark",
            style: {
                color: n.textonProgressBar_headerColor
            },
            children: u
        }) : r === t.length - 1 && r === e && n.completedMessage_enabled ? o.jsx("p", {
            className: "ui-p-3 ui-pt-0 ui-text-center ui-text-sm ui-font-semibold ui-text-yay-dark",
            style: {
                color: n.textonProgressBar_headerColor
            },
            children: n.completedMessage
        }) : o.jsx(o.Fragment, {})
    }),
    ct = d.memo(() => {
        const {
            milestones: e
        } = A();
        return o.jsx(o.Fragment, {
            children: e.map((r, t) => o.jsx(ut, {
                index: t
            }, r.milestone))
        })
    }),
    Ee = d.memo(({
        index: e
    }) => {
        var P;
        const {
            achievedMilestoneIdx: r,
            totalMilestones: t,
            milestones: a,
            customizations: n
        } = A(), {
            milestone_type: s,
            milestone_amount: i,
            milestone_text: l
        } = (P = a[e]) != null ? P : {}, u = r >= e, c = n.category === L.COUNT_BASED, m = d.useMemo(() => c ? i : `₹${i}`, [c, i]);
        let h = we;
        s && Ie[s] && (h = Ie[s]);
        let g = `${Be(t,e)}%`;
        n.type === U.DYNAMIC && (g = "100%");
        const C = d.useMemo(() => n.textonProgressBar_amount && n.textonProgressBar_title || n.textonProgressBar_amount ? "72px" : "60px", [n]);
        return o.jsx("li", {
            style: {
                left: g,
                height: C
            },
            className: `ui-relative ui-flex ui-flex-col ui-items-center ui-text-xxs ui-font-medium ${u?"ui-text-yay-dark":"ui-text-gray-dark"}`,
            children: o.jsxs("div", {
                style: {
                    height: C
                },
                className: "ui-absolute ui-flex ui-w-[100px] ui-flex-col ui-items-center ui-justify-between",
                children: [o.jsx("p", {
                    style: {
                        color: n.textonProgressBar_amountColor
                    },
                    className: "ui-h-3",
                    children: n.textonProgressBar_amount && m
                }), o.jsx(h, {
                    size: "48",
                    viewBox: "-12 -12 48 48",
                    style: {
                        backgroundColor: u ? n.filledColor : n.emptyColor,
                        boxShadow: "0px 2px 2px 0px #0000001A"
                    },
                    className: `ui-h-5 ui-w-5 ui-rounded-full ui-bg-white 
            ${u?"ui-bg-yay-dark ui-text-white ui-shadow-sm ui-border-[1px] ui-border-[#ffffff] ":"ui-border-[1px] ui-border-calabon-lighter ui-text-[#c1c1c1]"}`
                }), o.jsx("p", {
                    className: "ui-w-full ui-truncate ui-text-center ui-h-3",
                    style: {
                        color: n.textonProgressBar_titleColor
                    },
                    children: n.textonProgressBar_title && l
                })]
            })
        })
    }),
    dt = d.memo(() => {
        const {
            milestones: e
        } = A();
        return o.jsx(o.Fragment, {
            children: e.map((r, t) => o.jsx(Ee, {
                index: t
            }, r.milestone))
        })
    }),
    xt = d.memo(() => {
        const {
            achievedMilestoneIdx: e,
            milestones: r
        } = A();
        let t = e + 1;
        return t === r.length && (t = e), o.jsx(Ee, {
            index: t
        })
    }),
    Zt = ({
        total: e,
        milestones: r,
        customizations: t,
        onMilestoneReached: a
    }) => {
        const n = d.useMemo(() => {
                switch (t.type) {
                    case U.DYNAMIC:
                        return o.jsx(xt, {});
                    case U.STATIC:
                        return o.jsx(dt, {})
                }
            }, [t.type]),
            s = ot(t.filledColor, .1);
        return r.length === 0 ? o.jsx(o.Fragment, {}) : o.jsx(it, {
            milestones: r,
            total: e,
            customizations: t,
            onMilestoneReached: a,
            "data-sentry-element": "ProgressBarContainer",
            "data-sentry-component": "ProgressBar",
            "data-sentry-source-file": "ProgressBar.tsx",
            children: o.jsxs("div", {
                style: {
                    background: `linear-gradient(0deg, ${s} 0%, transparent 100%)`
                },
                className: "ui-px-3 ui-py-3 ui-border-t ui-border-t-gray-lighter",
                children: [(t.textonProgressBar_header || t.completedMessage_enabled) && o.jsx(ct, {}), o.jsx("div", {
                    className: "ui-w-[90%]",
                    children: o.jsx(lt, {
                        "data-sentry-element": "ProgressBarSteps",
                        "data-sentry-source-file": "ProgressBar.tsx",
                        children: n
                    })
                })]
            })
        })
    },
    mt = {
        sm: "ui-w-4 ui-h-4",
        md: "ui-w-5 ui-h-5",
        lg: "ui-w-6 ui-h-6"
    },
    gt = {
        sm: "ui-mt-[2px] ui-ml-[1px]",
        md: "ui-mt-[3px] ui-ml-[2px]",
        lg: "ui-mt-[4px] ui-ml-[3px]"
    },
    ft = {
        sm: "0 0 28 28",
        md: "0 0 24 24",
        lg: "0 0 22 22"
    },
    pt = {
        primary: "checkbox-primary",
        secondary: "checkbox-secondary"
    },
    ht = Ce.forwardRef((u, l) => {
        var c = u,
            {
                checked: e,
                onChange: r,
                size: t = "md",
                disabled: a,
                defaultChecked: n = !1,
                variant: s = "primary"
            } = c,
            i = F(c, ["checked", "onChange", "size", "disabled", "defaultChecked", "variant"]);
        const [m, h] = Ce.useState(n != null ? n : !1), g = e !== void 0, C = g ? e : m, P = _ => {
            a || (g || h(_.target.checked), r == null || r(_.target.checked))
        };
        return o.jsxs("div", {
            className: "ui-size-fit ui-relative ui-flex ui-gap-2",
            children: [o.jsx("input", S({
                ref: l,
                checked: C,
                onChange: P,
                className: J("ui-relative ui-shrink-0 ui-appearance-none ui-rounded-sm peer cursor-pointer", "ui-border-2", "checked:ui-border-0", "disabled:ui-border-gray-dark", "disabled:checked:ui-bg-gray-dark", mt[t], a && "ui-opacity-40", pt[s]),
                type: "checkbox",
                disabled: a
            }, i)), o.jsx("svg", {
                className: J("ui-pointer-events-none ui-absolute ui-hidden ui-h-4 ui-w-4 ui-stroke-white ui-outline-none peer-checked:block", gt[t], a && "ui-opacity-80"),
                viewBox: ft[t],
                fill: "none",
                strokeWidth: "4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: o.jsx("polyline", {
                    points: "20 6 9 17 4 12"
                })
            })]
        })
    });
ht.displayName = "Checkbox";
const Jt = ({
    size: e = 10,
    x: r = [-1, 1],
    y: t = [.25, 1],
    duration: a = 2e3,
    infinite: n = !1,
    delay: s = [0, 50],
    colorRange: i = [0, 360],
    colorArray: l = [],
    amount: u = 50,
    iterationCount: c = 1,
    fallDistance: m = "100px",
    rounded: h = !1,
    cone: g = !1,
    noGravity: C = !1,
    xSpread: P = 0,
    destroyOnComplete: _ = !0,
    disableForReducedMotion: k = !1
}) => {
    const [f, y] = d.useState(!1);
    d.useEffect(() => {
        if (!_ || n || c === "infinite") return;
        const I = setTimeout(() => y(!0), (a + s[1]) * c);
        return () => clearTimeout(I)
    }, [a, s, c, n, _]);
    const x = (I, w) => Math.random() * (w - I) + I,
        T = () => l.length ? l[Math.floor(Math.random() * l.length)] : `hsl(${Math.floor(x(i[0],i[1]))}, 75%, 50%)`;
    return f ? null : o.jsxs("div", {
        className: `ui-confetti-holder ${h?"ui-rounded":""} ${C?"no-gravity":""}`,
        "data-sentry-component": "Confetti",
        "data-sentry-source-file": "Confetti.tsx",
        children: [o.jsx("div", {
            className: "confetti-gradient",
            style: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
                pointerEvents: "none",
                zIndex: 1
            }
        }), Array.from({
            length: u
        }).map((I, w) => o.jsx("div", {
            className: "ui-confetti",
            style: {
                "--fall-distance": m,
                "--size": `${e}px`,
                "--color": T(),
                "--skew": `${x(-45,45)}deg,${x(-45,45)}deg`,
                "--rotation-xyz": `${x(-10,10)}, ${x(-10,10)}, ${x(-10,10)}`,
                "--rotation-deg": `${x(0,360)}deg`,
                "--translate-y-multiplier": x(t[0], t[1]),
                "--translate-x-multiplier": x(r[0], r[1]),
                "--scale": .1 * x(2, 10),
                "--transition-duration": n ? `calc(${a}ms * var(--scale))` : `${a}ms`,
                "--transition-delay": `${x(s[0],s[1])}ms`,
                "--transition-iteration-count": n ? "infinite" : c,
                "--x-spread": 1 - P,
                borderRadius: h ? "50%" : "0"
            }
        }, w))]
    })
};

function yt(...e) {
    return J(Ke(e))
}
const Qt = Ae,
    Vt = Ge,
    bt = d.forwardRef((s, n) => {
        var i = s,
            {
                className: e,
                align: r = "center",
                sideOffset: t = 4
            } = i,
            a = F(i, ["className", "align", "sideOffset"]);
        return o.jsx($e, {
            children: o.jsx(je, S({
                ref: n,
                align: r,
                sideOffset: t,
                className: yt("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-popover-content-transform-origin]", e)
            }, a))
        })
    });
bt.displayName = je.displayName;
var Q = (e => (e.PRE_LOGIN = "pre_login", e.POST_LOGIN = "post_login", e))(Q || {}),
    Oe = (e => (e.MOBILE = "mobile", e.DESKTOP = "desktop", e))(Oe || {}),
    j = (e => (e.SSO = "SSO", e.PRIMARY_BUTTON = "PRIMARY_BUTTON", e.BANNER = "BANNER", e.TITLE_AND_SUBTITLE = "TITLE_AND_SUBTITLE", e.NONE = "NONE", e.CARD = "CARD", e.CARDS = "CARDS", e.POST_LOGIN_SSO = "POST_LOGIN_SSO", e.POST_LOGIN_PRIMARY_BUTTON = "POST_LOGIN_PRIMARY_BUTTON", e.POST_LOGIN_TITLE_AND_SUBTITLE = "POST_LOGIN_TITLE_AND_SUBTITLE", e.POST_LOGIN_DISCOUNT_CODE = "POST_LOGIN_DISCOUNT_CODE", e))(j || {}),
    H = (e => (e.POPUP = "POPUP", e.CONFIG = "CONFIG", e.NONE = "NONE", e))(H || {});
const Me = "ShopfloPopupFont";

function _t(e) {
    return W(this, null, function*() {
        const t = yield new FontFace(Me, `url(${e.src})`, {
            display: "swap",
            style: e.style,
            weight: e.weight.toString(),
            unicodeRange: e.unicodeRange
        }).load();
        document.fonts.add(t)
    })
}

function Pt(e) {
    return W(this, null, function*() {
        const t = yield new FontFace(Me, `url(${e})`, {
            display: "swap"
        }).load();
        document.fonts.add(t)
    })
}

function er(e) {
    return W(this, null, function*() {
        var r, t;
        switch (e.fontType.toLowerCase()) {
            case "google":
                (r = e.googleFontFaces) == null || r.forEach(a => {
                    _t(a)
                });
                break;
            case "custom":
                (t = e.customFontFaces) == null || t.forEach(a => {
                    Pt(a)
                });
                break
        }
    })
}

function O(...e) {
    return e.filter(Boolean).join(" ")
}
const Z = (e, r) => {
        const t = e.replace("#", ""),
            a = parseInt(t.substring(0, 2), 16),
            n = parseInt(t.substring(2, 4), 16),
            s = parseInt(t.substring(4, 6), 16);
        return `rgba(${a}, ${n}, ${s}, ${r})`
    },
    Ct = e => {
        const [r, t] = d.useState(!0), [a, n] = d.useState(!0), s = d.useCallback(() => {
            e && e.scrollPrev()
        }, [e]), i = d.useCallback(() => {
            e && e.scrollNext()
        }, [e]), l = d.useCallback(u => {
            t(!u.canScrollPrev()), n(!u.canScrollNext())
        }, []);
        return d.useEffect(() => {
            e && (l(e), e.on("reInit", l).on("select", l))
        }, [e, l]), {
            prevBtnDisabled: r,
            nextBtnDisabled: a,
            onPrevButtonClick: s,
            onNextButtonClick: i
        }
    },
    Nt = e => {
        var u, c;
        const l = e,
            {
                children: r,
                styles: t
            } = l,
            a = F(l, ["children", "styles"]),
            n = (t == null ? void 0 : t.backgroundColor) || "#000000";
        let s = Z(n, 1),
            i = Z(n, 0);
        return n.includes("#") || (s = n, i = "#00000000"), o.jsxs("button", E(S({
            className: "ui-w-14 ui-h-full ui-flex ui-items-center ui-justify-center",
            style: {
                backgroundImage: `linear-gradient(to right, ${s}, ${i})`
            },
            type: "button"
        }, a), {
            "data-sentry-component": "PrevButton",
            "data-sentry-source-file": "carousel-buttons.tsx",
            children: [((u = e.customizeUI) == null ? void 0 : u.iconRequired) && o.jsx("div", {
                className: O("ui-p-2 ui-rounded-full ui-bg-gray-light ui-mb-4 ", (c = e.customizeUI) != null && c.isMobilePreview ? "ui-scale-50 ui-mr-6" : ""),
                children: o.jsx(He, {})
            }), r]
        }))
    },
    It = e => {
        var u, c;
        const l = e,
            {
                children: r,
                styles: t
            } = l,
            a = F(l, ["children", "styles"]),
            n = (t == null ? void 0 : t.backgroundColor) || "#000000";
        let s = Z(n, 1),
            i = Z(n, 0);
        return n.includes("#") || (s = n, i = "#00000000"), o.jsxs("button", E(S({
            className: "ui-w-14 ui-h-full ui-flex ui-items-center ui-justify-center",
            style: {
                backgroundImage: `linear-gradient(to left, ${s}, ${i})`
            },
            type: "button"
        }, a), {
            "data-sentry-component": "NextButton",
            "data-sentry-source-file": "carousel-buttons.tsx",
            children: [((u = e.customizeUI) == null ? void 0 : u.iconRequired) && o.jsx("div", {
                className: O("ui-p-2 ui-rounded-full ui-bg-gray-light ui-mb-4 ", (c = e.customizeUI) != null && c.isMobilePreview ? "ui-scale-50 ui-ml-6" : ""),
                children: o.jsx(Ye, {})
            }), r]
        }))
    },
    St = e => {
        const [r, t] = d.useState(!1), a = d.useCallback(() => {
            var i;
            const s = (i = e == null ? void 0 : e.plugins()) == null ? void 0 : i.autoplay;
            s && s.stop()
        }, [e]), n = d.useCallback(() => {
            var i;
            const s = (i = e == null ? void 0 : e.plugins()) == null ? void 0 : i.autoplay;
            s && s.play()
        }, [e]);
        return d.useEffect(() => {
            var i;
            const s = (i = e == null ? void 0 : e.plugins()) == null ? void 0 : i.autoplay;
            s && (t(s.isPlaying()), e.on("autoplay:play", () => t(!0)).on("autoplay:stop", () => t(!1)).on("reInit", () => t(s.isPlaying())))
        }, [e]), {
            autoplayIsPlaying: r,
            stopAutoPlay: a,
            resumeAutoPlay: n
        }
    },
    tr = e => {
        var r, t, a, n, s, i, l, u, c, m, h, g, C, P, _, k, f, y, x, T, I, w, b, N, v, B, Y, G, z, ee, te, re, oe, se, ne, ae, ie, le, ue, ce, de, xe, me, ge, fe, pe, he;
        return S({
            shouldLoadFontFaces: e.should_load_font_faces,
            fontType: e.font_type,
            googleFontFaces: (t = (r = e.google_font_faces) == null ? void 0 : r.map(p => ({
                familyName: p.family_name,
                src: p.src,
                style: p.style,
                weight: p.weight,
                display: p.display,
                unicodeRange: p.unicode_range
            }))) != null ? t : [],
            customFontFaces: (a = e == null ? void 0 : e.custom_font_faces) != null ? a : [],
            logoUrl: e.logo_url,
            backgroundColor: e.background_color,
            popTriggerTime: e.pop_trigger_time,
            borderRadius: e.border_radius,
            primaryCTA: {
                text: e.primary_cta.text,
                color: e.primary_cta.color,
                backgroundColor: e.primary_cta.background_color
            },
            title: {
                text: (n = e.title) == null ? void 0 : n.text,
                color: (s = e.title) == null ? void 0 : s.color
            },
            subTitle: e.sub_title ? {
                text: (i = e.sub_title) == null ? void 0 : i.text,
                color: (l = e.sub_title) == null ? void 0 : l.color
            } : void 0,
            banner: {
                enabled: e.banner.enabled,
                backgroundColor: e.banner.background_color,
                textColor: e.banner.text_color,
                items: e.banner.items.map(p => {
                    var ye;
                    return {
                        type: p.type,
                        enabled: p.enabled,
                        textColor: p.text_color,
                        backgroundColor: (ye = p.background_color) != null ? ye : e.banner.background_color,
                        htmlTextString: p.html_text_string
                    }
                })
            },
            card: {
                enabled: e.card.enabled,
                backgroundColor: e.card.background_color,
                backgroundImage: e.card.background_image,
                textColor: e.card.text_color,
                borderColor: e.card.border_color,
                borderWidth: e.card.border_width,
                borderRadius: e.card.border_radius,
                items: e.card.items.map(p => ({
                    isTopIconTextOrImage: p.is_top_icon_text_or_image,
                    backgroundColor: p.background_color,
                    backgroundImage: p.background_image,
                    topIconText: p.top_icon_text,
                    topIconTextColor: p.top_icon_text_color,
                    topIconImage: p.top_icon_image,
                    title: p.title,
                    titleColor: p.title_color,
                    description: p.description,
                    descriptionColor: p.description_color,
                    borderColor: p.border_color,
                    borderWidth: p.border_width,
                    borderRadius: p.border_radius
                }))
            }
        }, e.post_login && {
            postLogin: {
                backgroundColor: (m = (c = (u = e.post_login) == null ? void 0 : u.background_color) != null ? c : e.background_color) != null ? m : "",
                primaryCTA: {
                    text: (_ = (P = (g = (h = e.post_login) == null ? void 0 : h.primary_cta) == null ? void 0 : g.text) != null ? P : (C = e.primary_cta) == null ? void 0 : C.text) != null ? _ : "",
                    color: (T = (x = (f = (k = e.post_login) == null ? void 0 : k.primary_cta) == null ? void 0 : f.color) != null ? x : (y = e.primary_cta) == null ? void 0 : y.color) != null ? T : "",
                    backgroundColor: (v = (N = (w = (I = e.post_login) == null ? void 0 : I.primary_cta) == null ? void 0 : w.background_color) != null ? N : (b = e.primary_cta) == null ? void 0 : b.background_color) != null ? v : ""
                },
                title: {
                    text: (ee = (z = (Y = (B = e.post_login) == null ? void 0 : B.title) == null ? void 0 : Y.text) != null ? z : (G = e.title) == null ? void 0 : G.text) != null ? ee : "",
                    color: (ne = (se = (re = (te = e.post_login) == null ? void 0 : te.title) == null ? void 0 : re.color) != null ? se : (oe = e.title) == null ? void 0 : oe.color) != null ? ne : ""
                },
                subtitle: {
                    text: (ce = (ue = (ie = (ae = e.post_login) == null ? void 0 : ae.sub_title) == null ? void 0 : ie.text) != null ? ue : (le = e.sub_title) == null ? void 0 : le.text) != null ? ce : "",
                    color: (fe = (ge = (xe = (de = e.post_login) == null ? void 0 : de.sub_title) == null ? void 0 : xe.color) != null ? ge : (me = e.sub_title) == null ? void 0 : me.color) != null ? fe : ""
                },
                discountCardEnabled: (he = (pe = e.post_login) == null ? void 0 : pe.discount_card_enabled) != null ? he : !1
            }
        })
    },
    D = e => e ? (e == null ? void 0 : e.isPreview) && (e == null ? void 0 : e.device) === Oe.MOBILE : !1,
    Se = (e, r) => e ? e.replace(/(\d+)px/, (t, a) => `${Number(a)+r}px`) : "0px",
    ve = e => e.replace(/<[^>]*>/g, "").trim().length,
    R = (e, r, t) => ve(e) === 0 && (r != null && r.isPreview) ? jt(t) : e,
    jt = e => {
        switch (e) {
            case "title":
                return "";
            case "subTitle":
                return "";
            case "banner":
                return "• Add banner text •"
        }
    },
    Tt = e => {
        var _, k;
        const r = d.useRef([]),
            {
                slides: t,
                options: a,
                styles: n,
                overRides: s
            } = e,
            [i, l] = Te(a, [Ze({
                playOnInit: !(s != null && s.isPreview),
                delay: 5e3,
                stopOnInteraction: !0,
                stopOnFocusIn: !0,
                stopOnMouseEnter: !0
            })]),
            {
                stopAutoPlay: u,
                resumeAutoPlay: c
            } = St(l),
            {
                prevBtnDisabled: m,
                nextBtnDisabled: h,
                onPrevButtonClick: g,
                onNextButtonClick: C
            } = Ct(l);
        d.useEffect(() => {
            var f, y, x, T, I, w;
            if (s && l && ((f = s == null ? void 0 : s.focusedComponent) == null ? void 0 : f.type) === j.CARD && ((x = (y = s == null ? void 0 : s.focusedComponent) == null ? void 0 : y.cardIndex) != null ? x : -1) >= 0 ? (l.scrollTo((I = (T = s == null ? void 0 : s.focusedComponent) == null ? void 0 : T.cardIndex) != null ? I : 0), r.current.forEach((b, N) => {
                    var v, B;
                    N === ((v = s == null ? void 0 : s.focusedComponent) == null ? void 0 : v.cardIndex) ? (b == null || b.classList.add("ui-border-2", "ui-border-primary-dark", "ui-shadow-lg", "ui-rounded-[inherit]"), b && (b.style.borderRadius = Se(((B = n == null ? void 0 : n.card) == null ? void 0 : B.borderRadius) || "0px", 2))) : (b == null || b.classList.remove("ui-border-2", "ui-border-primary-dark"), b && (b.style.borderRadius = "0px"))
                })) : r.current.forEach(b => {
                    b == null || b.classList.remove("ui-border-2", "ui-border-primary-dark"), b && (b.style.borderRadius = "0px")
                }), ((w = s == null ? void 0 : s.focusedComponent) == null ? void 0 : w.type) === j.CARDS && (s != null && s.focusedComponent.cardStyleType) && l) {
                const b = l == null ? void 0 : l.selectedScrollSnap();
                r.current.forEach((N, v) => {
                    var B;
                    v === b ? (N == null || N.classList.add("ui-border-2", "ui-border-primary-dark", "ui-shadow-lg", "ui-rounded-[inherit]"), N && (N.style.borderRadius = Se(((B = n == null ? void 0 : n.card) == null ? void 0 : B.borderRadius) || "0px", 2))) : (N == null || N.classList.remove("ui-border-2", "ui-border-primary-dark"), N && (N.style.borderRadius = "0px"))
                })
            }
        }, [s == null ? void 0 : s.focusedComponent]), d.useEffect(() => {
            l == null || l.on("select", f => {
                const y = f.selectedScrollSnap();
                r.current.forEach((x, T) => {
                    T === y ? (x == null || x.classList.add("ui-scale-100"), x == null || x.classList.remove("ui-scale-90")) : (x == null || x.classList.remove("ui-scale-100"), x == null || x.classList.add("ui-scale-90"))
                })
            })
        }, [l]);
        const P = (f, y) => {
            y && (r.current[f] = y)
        };
        return d.useEffect(() => {
            r.current.forEach((f, y) => {
                y !== 0 && (f == null || f.classList.add("ui-scale-90"))
            })
        }, []), o.jsxs("section", {
            className: "embla ui-relative ui-mx-auto ui-border-red ui-border-5",
            onMouseEnter: () => {
                t.length > 1 && u()
            },
            onMouseLeave: () => {
                t.length > 1 && !(s != null && s.isPreview) && c()
            },
            onClick: () => {
                var f, y;
                if (s != null && s.isPreview) {
                    const x = (f = l == null ? void 0 : l.selectedScrollSnap()) != null ? f : 0;
                    (y = s == null ? void 0 : s.setScrollToCard) == null || y.call(s, x)
                }
            },
            "data-sentry-component": "Carousel",
            "data-sentry-source-file": "carousel.tsx",
            children: [o.jsxs("div", {
                className: "embla_viewport ui-overflow-x-hidden ui-relative ui-z-100",
                ref: i,
                children: [o.jsx("div", {
                    className: O("embla_container ui-flex ui-touch-pan-y ui-border-green ui-border-5", t.length === 1 ? "ui-justify-center" : ""),
                    children: t.map((f, y) => o.jsx("div", {
                        className: O("embla_slide ui-transform ui-translate-x-0 ui-translate-y-0 ui-translate-z-0", D(s) ? "ui-flex-[0_0_100%] ui-px-8" : "ui-flex-[0_0_50%]"),
                        children: o.jsx("div", {
                            className: "ui-transition-transform ui-duration-300 ui-border-red ui-border-5",
                            ref: x => P(y, x),
                            children: f
                        })
                    }, y))
                }), o.jsx("div", {
                    className: "ui-h-4 ui-w-full"
                })]
            }), o.jsxs("div", {
                className: "ui-absolute ui-top-0 ui-left-0 ui-w-full ui-h-full ui-flex ui-items-center ui-justify-between",
                children: [o.jsx(Nt, {
                    onClick: f => {
                        f.stopPropagation(), g()
                    },
                    disabled: m,
                    styles: n == null ? void 0 : n.button,
                    customizeUI: {
                        iconRequired: (_ = s == null ? void 0 : s.isPreview) != null ? _ : !1,
                        isMobilePreview: D(s)
                    },
                    "data-sentry-element": "PrevButton",
                    "data-sentry-source-file": "carousel.tsx"
                }), o.jsx(It, {
                    onClick: f => {
                        f.stopPropagation(), C()
                    },
                    disabled: h,
                    styles: n == null ? void 0 : n.button,
                    customizeUI: {
                        iconRequired: (k = s == null ? void 0 : s.isPreview) != null ? k : !1,
                        isMobilePreview: D(s)
                    },
                    "data-sentry-element": "NextButton",
                    "data-sentry-source-file": "carousel.tsx"
                })]
            })]
        })
    },
    Le = d.createContext(null),
    wt = t => {
        var a = t,
            {
                children: e
            } = a,
            r = F(a, ["children"]);
        return o.jsx(Le.Provider, {
            value: r,
            "data-sentry-element": "unknown",
            "data-sentry-component": "SSOMarketingPopupProvider",
            "data-sentry-source-file": "PopupProvider.tsx",
            children: e
        })
    },
    M = () => {
        const e = d.useContext(Le);
        if (!e) throw new Error("useSSOMarketingPopupContext must be used within a SSOMarketingPopupProvider");
        return e
    },
    kt = {
        loop: !0,
        align: "center"
    },
    Bt = () => {
        const {
            overRides: e,
            popup: {
                card: r,
                backgroundColor: t
            }
        } = M();
        if (!r.enabled) return null;
        const {
            backgroundColor: n,
            backgroundImage: s,
            textColor: i,
            borderColor: l,
            borderWidth: u,
            borderRadius: c
        } = r, m = d.useMemo(() => {
            const h = r.items.map((g, C) => {
                var z;
                const {
                    isTopIconTextOrImage: P,
                    topIconText: _,
                    topIconImage: k,
                    topIconTextColor: f,
                    title: y,
                    titleColor: x,
                    description: T,
                    descriptionColor: I
                } = g, w = P === "text" && _, b = P === "image", N = g.borderColor || l, v = g.borderWidth || u, B = g.borderRadius || c, Y = g.backgroundColor || n, G = g.backgroundImage || s;
                return o.jsxs("div", {
                    style: {
                        backgroundColor: Y,
                        color: i,
                        borderColor: N,
                        borderWidth: v,
                        borderRadius: B
                    },
                    className: O("ui-flex ui-flex-col ui-items-center xxs:ui-h-[140px] xxs:ui-w-[254px] ui-justify-center ui-relative ui-z-10 ui-shadow-[0px_2px_4px_0px_#00000040] ui-text-center ui-px-6 ui-py-8", g.topIconText ? "ui-space-y-2" : "", D(e) ? "!ui-w-full ui-h-[110px]" : "ui-w-[240px] ui-h-[140px]"),
                    children: [G && o.jsx("div", {
                        style: {
                            backgroundImage: `url(${G})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                        },
                        className: "ui-h-full ui-w-full ui-absolute ui-top-0 ui-left-0 -ui-z-10"
                    }), w && o.jsx("p", {
                        className: O("ui-font-semibold", D(e) ? "ui-text-[20px]" : "ui-text-[30px]"),
                        style: {
                            color: f || i
                        },
                        children: _
                    }), b && o.jsx("img", {
                        src: k,
                        alt: _,
                        className: "ui-max-w-14 ui-max-h-14 ui-pb-1"
                    }), o.jsx("h3", {
                        className: "ui-text-sm ui-font-semibold",
                        style: {
                            color: x || i
                        },
                        children: y
                    }), T && o.jsx("p", {
                        className: "ui-text-xs ui-font-medium ui-pt-2",
                        style: {
                            color: I || i
                        },
                        dangerouslySetInnerHTML: {
                            __html: (z = g.description) != null ? z : ""
                        }
                    })]
                }, C)
            });
            return h.length === 2 ? [...h, ...h] : h
        }, [r]);
        return o.jsx(Tt, {
            slides: m,
            options: kt,
            styles: {
                button: {
                    backgroundColor: t
                },
                card: {
                    borderRadius: c
                }
            },
            overRides: e,
            "data-sentry-element": "Carousel",
            "data-sentry-component": "PopupCarousel",
            "data-sentry-source-file": "PopupCarousel.tsx"
        })
    },
    Et = e => {
        const [r, t] = d.useState(!1), a = d.useCallback(() => {
            var i;
            const s = (i = e == null ? void 0 : e.plugins()) == null ? void 0 : i.autoScroll;
            s && s.stop()
        }, [e]), n = d.useCallback(() => {
            var i;
            const s = (i = e == null ? void 0 : e.plugins()) == null ? void 0 : i.autoScroll;
            s && s.play()
        }, [e]);
        return d.useEffect(() => {
            var i;
            const s = (i = e == null ? void 0 : e.plugins()) == null ? void 0 : i.autoScroll;
            s && (t(s.isPlaying()), e.on("autoScroll:play", () => t(!0)).on("autoScroll:stop", () => t(!1)).on("reInit", () => t(s.isPlaying())))
        }, [e]), {
            stopAutoScroll: a,
            resumeAutoScroll: n,
            autoScrollIsPlaying: r
        }
    },
    Ot = e => {
        const {
            slides: r
        } = e, [t, a] = Te({
            loop: !0
        }, [Je({
            playOnInit: !0,
            speed: 1
        })]), {
            resumeAutoScroll: n,
            stopAutoScroll: s
        } = Et(a);
        d.useEffect(() => (n(), () => {
            s()
        }), []);
        const i = d.useMemo(() => r.length > 4 ? r : [...r, ...r, ...r, ...r], [r]);
        return o.jsx("section", {
            className: "embla ui-relative ui-mx-auto",
            "data-sentry-component": "Marquee",
            "data-sentry-source-file": "marquee.tsx",
            children: o.jsx("div", {
                className: "embla_viewport ui-overflow-x-hidden ui-relative ui-z-100 -ui-",
                ref: t,
                children: o.jsx("div", {
                    className: "embla_container ui-flex ui-touch-pan-y",
                    children: i.map((l, u) => o.jsx("div", {
                        className: "embla_slide ui-flex-[0_0_auto] min-w-0 ui-transform ui-translate-x-0 ui-translate-y-0 ui-translate-z-0",
                        children: o.jsx("div", {
                            className: "",
                            children: l
                        })
                    }, u))
                })
            })
        })
    },
    Mt = {
        loop: !0
    },
    vt = () => {
        var i;
        const {
            popup: {
                banner: {
                    enabled: e,
                    items: r,
                    backgroundColor: t,
                    textColor: a
                }
            },
            overRides: n
        } = M();
        if (!e) return o.jsx(o.Fragment, {});
        if (r.length === 1) {
            const l = r[0],
                u = (l == null ? void 0 : l.backgroundColor) || t,
                c = (l == null ? void 0 : l.textColor) || a;
            return o.jsx("div", {
                className: "ui-w-full ui-text-center ui-pt-4",
                onClick: () => {
                    var m;
                    return (m = n == null ? void 0 : n.setFocusedComponent) == null ? void 0 : m.call(n, {
                        type: j.BANNER,
                        via: H.POPUP
                    })
                },
                children: o.jsx("p", {
                    style: {
                        backgroundColor: u,
                        color: c
                    },
                    className: O("ui-w-full ui-text-xs ui-py-2 ui-px-2 ui-text-center ", ((i = n == null ? void 0 : n.focusedComponent) == null ? void 0 : i.type) === j.BANNER ? "ui-border ui-border-primary-dark ui-shadow-xl" : "", ve((l == null ? void 0 : l.htmlTextString) || "") === 0 ? "h-[35px]" : ""),
                    dangerouslySetInnerHTML: {
                        __html: R((l == null ? void 0 : l.htmlTextString) || "", n, "banner")
                    }
                })
            })
        }
        const s = d.useMemo(() => r.map((l, u) => {
            const c = l.backgroundColor || t,
                m = l.textColor || a;
            return o.jsx("p", {
                style: {
                    backgroundColor: c,
                    color: m
                },
                className: "ui-w-full ui-text-xs ui-py-2 ui-px-2 ui-border-none",
                dangerouslySetInnerHTML: {
                    __html: (l == null ? void 0 : l.htmlTextString) || ""
                }
            }, u)
        }), [r]);
        return o.jsx("div", {
            className: "ui-w-full ui-text-center ui-pt-4 ",
            "data-sentry-component": "PopupTopBanner",
            "data-sentry-source-file": "PopupMarquee.tsx",
            children: o.jsx(Ot, {
                slides: s,
                options: Mt,
                "data-sentry-element": "Marquee",
                "data-sentry-source-file": "PopupMarquee.tsx"
            })
        })
    },
    Lt = t => {
        var a = t,
            {
                children: e
            } = a,
            r = F(a, ["children"]);
        return o.jsx(wt, E(S({}, r), {
            "data-sentry-element": "SSOMarketingPopupProvider",
            "data-sentry-component": "Popup",
            "data-sentry-source-file": "Popup.tsx",
            children: o.jsx(Dt, {
                "data-sentry-element": "PopupComponent",
                "data-sentry-source-file": "Popup.tsx",
                children: e
            })
        }))
    };
Lt.displayName = "Banner";
const Dt = ({
        children: e
    }) => {
        var l;
        const {
            popup: {
                backgroundColor: r,
                borderRadius: t,
                postLogin: a
            },
            currentWindow: n,
            overRides: s
        } = M(), i = () => n === Q.POST_LOGIN && a ? o.jsx(o.Fragment, {
            children: o.jsx(zt, {
                children: e
            })
        }) : o.jsxs(o.Fragment, {
            children: [o.jsx(Bt, {
                "data-sentry-element": "PopupCarousel",
                "data-sentry-source-file": "Popup.tsx"
            }), o.jsx(Gt, {
                "data-sentry-element": "PopupBody",
                "data-sentry-source-file": "Popup.tsx"
            }), e]
        });
        return o.jsxs("div", {
            style: {
                backgroundColor: n === Q.POST_LOGIN ? a == null ? void 0 : a.backgroundColor : r,
                borderRadius: t,
                fontFamily: '"ShopfloPopupFont", "Inter", Arial, Helvetica, sans-serif',
                boxShadow: "0px 2px 4px 0px #00000040"
            },
            className: O("ui-w-full ui-h-full ui-overflow-x-hidden", ((l = s == null ? void 0 : s.focusedComponent) == null ? void 0 : l.type) === j.SSO ? "ui-border ui-border-primary-dark" : ""),
            "data-sentry-component": "PopupComponent",
            "data-sentry-source-file": "Popup.tsx",
            children: [o.jsx(vt, {
                "data-sentry-element": "PopupTopBanner",
                "data-sentry-source-file": "Popup.tsx"
            }), o.jsxs("div", {
                className: "ui-w-full ui-h-full ui-pt-3",
                children: [o.jsx(At, {
                    "data-sentry-element": "PopupHeader",
                    "data-sentry-source-file": "Popup.tsx"
                }), i()]
            })]
        })
    },
    Ft = () => {
        const {
            onClose: e
        } = M();
        return o.jsx("button", {
            onClick: e,
            "data-sentry-component": "CloseButton",
            "data-sentry-source-file": "Popup.tsx",
            children: o.jsx(qe, {
                size: 24,
                color: "#4D4D4D",
                "data-sentry-element": "X",
                "data-sentry-source-file": "Popup.tsx"
            })
        })
    },
    Ut = () => {
        const {
            overRides: e
        } = M();
        return o.jsx("h3", {
            className: `ui-text-coal-lighter ui-font-bold ui-border-2 ui-border-dashed ui-text-sm ui-rounded-md ui-border-gray-light ui-px-4 ui-py-2 ${D(e)?"100px":"150px"}`,
            "data-sentry-component": "PreviewModeDefaultLogo",
            "data-sentry-source-file": "Popup.tsx",
            children: "Logo"
        })
    },
    $t = () => {
        const {
            overRides: e,
            popup: {
                logoUrl: r
            }
        } = M();
        return !r && (e != null && e.isPreview) ? o.jsx(Ut, {}) : o.jsx("picture", {
            "data-sentry-element": "picture",
            "data-sentry-component": "PopupMerchantLogo",
            "data-sentry-source-file": "Popup.tsx",
            children: o.jsx("img", {
                src: r,
                alt: "merchant logo",
                className: "ui-float-left ui-h-[55px] ui-max-w-[200px] ui-bg-transparent ui-object-contain"
            })
        })
    },
    At = () => {
        const {
            overRides: e
        } = M();
        return o.jsxs("div", {
            className: "ui-relative ui-flex ui-items-center ui-justify-center ui-w-full ui-pb-4",
            "data-sentry-component": "PopupHeader",
            "data-sentry-source-file": "Popup.tsx",
            children: [o.jsx($t, {
                "data-sentry-element": "PopupMerchantLogo",
                "data-sentry-source-file": "Popup.tsx"
            }), o.jsx("span", {
                className: "ui-absolute ui-right-0 ui-pr-2 ui-top-0",
                children: e != null && e.isPreview ? o.jsx(o.Fragment, {}) : o.jsx(Ft, {})
            })]
        })
    },
    Gt = () => {
        var n;
        const {
            popup: {
                title: {
                    text: e,
                    color: r
                },
                subTitle: t
            },
            overRides: a
        } = M();
        return o.jsx("div", {
            className: O(" ui-px-4 ui-pt-4 ui-flex ui-items-center ui-justify-center"),
            onClick: s => {
                var i;
                (i = a == null ? void 0 : a.setFocusedComponent) == null || i.call(a, {
                    type: j.TITLE_AND_SUBTITLE,
                    via: H.POPUP
                })
            },
            "data-sentry-component": "PopupBody",
            "data-sentry-source-file": "Popup.tsx",
            children: o.jsxs("div", {
                className: O("ui-flex ui-flex-col w-fit", ((n = a == null ? void 0 : a.focusedComponent) == null ? void 0 : n.type) === j.TITLE_AND_SUBTITLE ? "ui-border ui-border-primary-dark ui-shadow-xl" : ""),
                children: [o.jsx("p", {
                    className: "ui-text-center ui-font-bold ui-text-lg xxs:ui-text-[24px]",
                    style: {
                        color: r
                    },
                    dangerouslySetInnerHTML: {
                        __html: R(e || "", a, "title")
                    }
                }), t && o.jsx("p", {
                    className: "ui-text-center ui-font-medium",
                    style: {
                        color: t.color,
                        fontSize: D(a) ? "12px" : "16px"
                    },
                    dangerouslySetInnerHTML: {
                        __html: R(t.text || "", a, "subTitle")
                    }
                })]
            })
        })
    },
    zt = ({
        children: e
    }) => {
        var s;
        const {
            popup: {
                postLogin: r
            },
            overRides: t
        } = M();
        if (!r) return o.jsx(o.Fragment, {});
        const {
            title: a,
            subtitle: n
        } = r;
        return o.jsxs(o.Fragment, {
            children: [o.jsxs("div", {
                className: `ui-flex ui-flex-col ui-items-center ui-px-4 ui-space-y-4 ${((s=t==null?void 0:t.focusedComponent)==null?void 0:s.type)===j.POST_LOGIN_TITLE_AND_SUBTITLE?"ui-border ui-border-primary-dark ui-shadow-xl":""}`,
                onClick: i => {
                    var l;
                    (l = t == null ? void 0 : t.setFocusedComponent) == null || l.call(t, {
                        type: j.POST_LOGIN_TITLE_AND_SUBTITLE,
                        via: H.POPUP
                    })
                },
                children: [o.jsx("p", {
                    className: "ui-text-center ui-font-bold ui-text-lg xxs:ui-text-[24px]",
                    style: {
                        color: a.color
                    },
                    dangerouslySetInnerHTML: {
                        __html: R(a.text || "", t, "title")
                    }
                }), o.jsx("p", {
                    className: "ui-text-center ui-font-medium",
                    style: {
                        color: n.color,
                        fontSize: D(t) ? "12px" : "16px"
                    },
                    dangerouslySetInnerHTML: {
                        __html: R(n.text || "", t, "subTitle")
                    }
                })]
            }), e]
        })
    },
    rr = ({
        code: e,
        title: r,
        description: t,
        tagText: a,
        tagBackgroundColor: n,
        tagTextColor: s,
        handleCopyCouponCode: i
    }) => {
        var P;
        const {
            popup: {
                postLogin: l,
                backgroundColor: u,
                primaryCTA: {
                    backgroundColor: c
                }
            },
            overRides: m
        } = M();
        if (!l) return o.jsx(o.Fragment, {});
        const [h, g] = d.useState(!1), C = () => {
            e && (i == null || i(e), navigator.clipboard.writeText(e), g(!0), setTimeout(() => {
                g(!1)
            }, 3e3))
        };
        return o.jsxs("div", {
            onClick: () => {
                var _;
                (_ = m == null ? void 0 : m.setFocusedComponent) == null || _.call(m, {
                    type: j.POST_LOGIN_DISCOUNT_CODE,
                    via: H.POPUP
                })
            },
            className: `ui-flex ui-flex-col ui-p-4 ui-pt-6 ui-rounded-lg ui-shadow-md ui-relative ui-w-full ui-bg-white ${((P=m==null?void 0:m.focusedComponent)==null?void 0:P.type)===j.POST_LOGIN_DISCOUNT_CODE&&"border-2 border-primary-dark"}`,
            "data-sentry-component": "PopupCoupon",
            "data-sentry-source-file": "PopupCoupon.tsx",
            children: [o.jsx("div", {
                className: "ui-absolute ui-top-0 ui-right-3",
                children: o.jsx("div", {
                    className: "ui-rounded-b-lg ui-text-white ui-border-[1px] ui-border-t-0",
                    style: {
                        backgroundColor: n
                    },
                    children: o.jsx("p", {
                        className: "ui-text-[8px] ui-py-[4px] ui-px-[8px] ",
                        style: {
                            color: s
                        },
                        children: a
                    })
                })
            }), o.jsx("p", {
                className: "ui-font-bold ui-text-lg",
                children: r
            }), o.jsx("p", {
                className: "ui-text-xs ui-mt-1",
                children: t
            }), o.jsxs("div", {
                className: "ui-flex ui-flex-col ui-gap-1 ui-justify-center ui-items-center",
                children: [o.jsx("div", {
                    className: "ui-text-primary-dark ui-border-dashed ui-border-1 ui-border-primary-dark ui-rounded-lg ui-p-2 ui-mt-4 ui-w-full",
                    style: {
                        backgroundColor: `${n}1A`,
                        borderColor: n
                    },
                    children: o.jsx("p", {
                        className: "ui-text-xs ui-w-full ui-text-center",
                        style: {
                            color: n
                        },
                        children: e
                    })
                }), o.jsx("button", {
                    className: "ui-flex ui-flex-row ui-items-center ui-space-x-1 ui-mt-2 ui-text-xxs",
                    onClick: C,
                    children: h ? o.jsxs(o.Fragment, {
                        children: [o.jsx(We, {
                            size: 10,
                            color: "#2c874a"
                        }), o.jsx("p", {
                            className: "ui-text-yay-dark",
                            children: "COPIED"
                        })]
                    }) : o.jsxs(o.Fragment, {
                        children: [o.jsx(Xe, {
                            size: 10,
                            color: "#949494"
                        }), o.jsx("p", {
                            className: "ui-text-gray-dark",
                            children: "TAP TO COPY CODE"
                        })]
                    })
                })]
            })]
        })
    },
    or = () => o.jsxs("div", {
        className: "ui-flex ui-flex-col ui-p-4 ui-rounded-lg ui-shadow-md ui-relative ui-w-full ui-bg-white",
        "data-sentry-component": "PopupDiscountCardSkeleton",
        "data-sentry-source-file": "PopupCoupon.tsx",
        children: [o.jsx("div", {
            className: "ui-absolute ui-top-0 ui-right-3",
            children: o.jsx("div", {
                className: "ui-rounded-b-lg ui-text-white ui-border-[1px] ui-border-t-0",
                children: o.jsx("div", {
                    className: "skeleton-loader ui-text-[8px] ui-py-2 ui-px-2 ui-w-24"
                })
            })
        }), o.jsx("div", {
            className: "skeleton-loader ui-font-bold ui-text-lg ui-w-3/4 ui-h-6 ui-rounded ui-mt-2"
        }), o.jsx("div", {
            className: "skeleton-loader ui-text-xs ui-mt-1 ui-w-full ui-h-4 ui-rounded"
        }), o.jsxs("div", {
            className: "ui-flex ui-flex-col ui-gap-1 ui-justify-center ui-items-center",
            children: [o.jsx("div", {
                className: "ui-border-dashed ui-border-1 ui-rounded-lg ui-p-2 ui-mt-4 ui-w-full",
                children: o.jsx("div", {
                    className: "skeleton-loader ui-text-xs ui-w-full ui-h-4 ui-text-center ui-rounded"
                })
            }), o.jsxs("div", {
                className: "ui-flex ui-flex-row ui-items-center ui-space-x-1 ui-mt-2 ui-text-xxs",
                children: [o.jsx("div", {
                    className: "skeleton-loader ui-h-3 ui-w-3 ui-rounded"
                }), o.jsx("div", {
                    className: "skeleton-loader ui-h-3 ui-w-24 ui-rounded"
                })]
            })]
        })]
    });
export {
    ht as C, K as D, L as M, Qt as P, Jt as a, Vt as b, bt as c, Q as d, or as e, rr as f, Zt as g, Lt as h, tr as i, er as l, Kt as p
};
//# sourceMappingURL=ui-BLvhcVBj.js.map