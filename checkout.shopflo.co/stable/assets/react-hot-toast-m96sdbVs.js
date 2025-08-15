var N = Object.defineProperty,
    T = Object.defineProperties;
var M = Object.getOwnPropertyDescriptors;
var z = Object.getOwnPropertySymbols;
var _ = Object.prototype.hasOwnProperty,
    S = Object.prototype.propertyIsEnumerable;
var A = (e, t, a) => t in e ? N(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : e[t] = a,
    s = (e, t) => {
        for (var a in t || (t = {})) _.call(t, a) && A(e, a, t[a]);
        if (z)
            for (var a of z(t)) S.call(t, a) && A(e, a, t[a]);
        return e
    },
    m = (e, t) => T(e, M(t));
import {
    r as o
} from "./react-core-C02-NrKc.js";
import {
    M as y,
    N as j,
    O as b,
    R as H
} from "./vendor-DWBJvUkq.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "11bc189d-cd28-4ff1-b078-0a1046c77d61", e._sentryDebugIdIdentifier = "sentry-dbid-11bc189d-cd28-4ff1-b078-0a1046c77d61")
    } catch (a) {}
})();
var R = e => typeof e == "function",
    k = (e, t) => R(e) ? e(t) : e,
    U = (() => {
        let e = 0;
        return () => (++e).toString()
    })(),
    P = (() => {
        let e;
        return () => {
            if (e === void 0 && typeof window < "u") {
                let t = matchMedia("(prefers-reduced-motion: reduce)");
                e = !t || t.matches
            }
            return e
        }
    })(),
    V = 20,
    C = (e, t) => {
        switch (t.type) {
            case 0:
                return m(s({}, e), {
                    toasts: [t.toast, ...e.toasts].slice(0, V)
                });
            case 1:
                return m(s({}, e), {
                    toasts: e.toasts.map(r => r.id === t.toast.id ? s(s({}, r), t.toast) : r)
                });
            case 2:
                let {
                    toast: a
                } = t;
                return C(e, {
                    type: e.toasts.find(r => r.id === a.id) ? 1 : 0,
                    toast: a
                });
            case 3:
                let {
                    toastId: i
                } = t;
                return m(s({}, e), {
                    toasts: e.toasts.map(r => r.id === i || i === void 0 ? m(s({}, r), {
                        dismissed: !0,
                        visible: !1
                    }) : r)
                });
            case 4:
                return t.toastId === void 0 ? m(s({}, e), {
                    toasts: []
                }) : m(s({}, e), {
                    toasts: e.toasts.filter(r => r.id !== t.toastId)
                });
            case 5:
                return m(s({}, e), {
                    pausedAt: t.time
                });
            case 6:
                let n = t.time - (e.pausedAt || 0);
                return m(s({}, e), {
                    pausedAt: void 0,
                    toasts: e.toasts.map(r => m(s({}, r), {
                        pauseDuration: r.pauseDuration + n
                    }))
                })
        }
    },
    $ = [],
    h = {
        toasts: [],
        pausedAt: void 0
    },
    g = e => {
        h = C(h, e), $.forEach(t => {
            t(h)
        })
    },
    F = {
        blank: 4e3,
        error: 4e3,
        success: 2e3,
        loading: 1 / 0,
        custom: 4e3
    },
    L = (e = {}) => {
        let [t, a] = o.useState(h), i = o.useRef(h);
        o.useEffect(() => (i.current !== h && a(h), $.push(a), () => {
            let r = $.indexOf(a);
            r > -1 && $.splice(r, 1)
        }), []);
        let n = t.toasts.map(r => {
            var d, l, p;
            return m(s(s(s({}, e), e[r.type]), r), {
                removeDelay: r.removeDelay || ((d = e[r.type]) == null ? void 0 : d.removeDelay) || (e == null ? void 0 : e.removeDelay),
                duration: r.duration || ((l = e[r.type]) == null ? void 0 : l.duration) || (e == null ? void 0 : e.duration) || F[r.type],
                style: s(s(s({}, e.style), (p = e[r.type]) == null ? void 0 : p.style), r.style)
            })
        });
        return m(s({}, t), {
            toasts: n
        })
    },
    Y = (e, t = "blank", a) => m(s({
        createdAt: Date.now(),
        visible: !0,
        dismissed: !1,
        type: t,
        ariaProps: {
            role: "status",
            "aria-live": "polite"
        },
        message: e,
        pauseDuration: 0
    }, a), {
        id: (a == null ? void 0 : a.id) || U()
    }),
    w = e => (t, a) => {
        let i = Y(t, e, a);
        return g({
            type: 2,
            toast: i
        }), i.id
    },
    c = (e, t) => w("blank")(e, t);
c.error = w("error");
c.success = w("success");
c.loading = w("loading");
c.custom = w("custom");
c.dismiss = e => {
    g({
        type: 3,
        toastId: e
    })
};
c.remove = e => g({
    type: 4,
    toastId: e
});
c.promise = (e, t, a) => {
    let i = c.loading(t.loading, s(s({}, a), a == null ? void 0 : a.loading));
    return typeof e == "function" && (e = e()), e.then(n => {
        let r = t.success ? k(t.success, n) : void 0;
        return r ? c.success(r, s(s({
            id: i
        }, a), a == null ? void 0 : a.success)) : c.dismiss(i), n
    }).catch(n => {
        let r = t.error ? k(t.error, n) : void 0;
        r ? c.error(r, s(s({
            id: i
        }, a), a == null ? void 0 : a.error)) : c.dismiss(i)
    }), e
};
var q = (e, t) => {
        g({
            type: 1,
            toast: {
                id: e,
                height: t
            }
        })
    },
    B = () => {
        g({
            type: 5,
            time: Date.now()
        })
    },
    x = new Map,
    J = 1e3,
    K = (e, t = J) => {
        if (x.has(e)) return;
        let a = setTimeout(() => {
            x.delete(e), g({
                type: 4,
                toastId: e
            })
        }, t);
        x.set(e, a)
    },
    W = e => {
        let {
            toasts: t,
            pausedAt: a
        } = L(e);
        o.useEffect(() => {
            if (a) return;
            let r = Date.now(),
                d = t.map(l => {
                    if (l.duration === 1 / 0) return;
                    let p = (l.duration || 0) + l.pauseDuration - (r - l.createdAt);
                    if (p < 0) {
                        l.visible && c.dismiss(l.id);
                        return
                    }
                    return setTimeout(() => c.dismiss(l.id), p)
                });
            return () => {
                d.forEach(l => l && clearTimeout(l))
            }
        }, [t, a]);
        let i = o.useCallback(() => {
                a && g({
                    type: 6,
                    time: Date.now()
                })
            }, [a]),
            n = o.useCallback((r, d) => {
                let {
                    reverseOrder: l = !1,
                    gutter: p = 8,
                    defaultPosition: u
                } = d || {}, v = t.filter(f => (f.position || u) === (r.position || u) && f.height), I = v.findIndex(f => f.id === r.id), E = v.filter((f, O) => O < I && f.visible).length;
                return v.filter(f => f.visible).slice(...l ? [E + 1] : [0, E]).reduce((f, O) => f + (O.height || 0) + p, 0)
            }, [t]);
        return o.useEffect(() => {
            t.forEach(r => {
                if (r.dismissed) K(r.id, r.removeDelay);
                else {
                    let d = x.get(r.id);
                    d && (clearTimeout(d), x.delete(r.id))
                }
            })
        }, [t]), {
            toasts: t,
            handlers: {
                updateHeight: q,
                startPause: B,
                endPause: i,
                calculateOffset: n
            }
        }
    },
    X = y `
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
    Z = y `
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
    G = y `
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
    Q = b("div")
`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${X} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Z} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${G} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, ee = y `
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, te = b("div")
`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ee} 1s linear infinite;
`, ae = y `
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, re = y `
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`, se = b("div")
`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ae} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${re} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`, ie = b("div")
`
  position: absolute;
`, oe = b("div")
`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, ne = y `
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, le = b("div")
`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ne} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, de = ({
    toast: e
}) => {
    let {
        icon: t,
        type: a,
        iconTheme: i
    } = e;
    return t !== void 0 ? typeof t == "string" ? o.createElement(le, null, t) : t : a === "blank" ? null : o.createElement(oe, null, o.createElement(te, s({}, i)), a !== "loading" && o.createElement(ie, null, a === "error" ? o.createElement(Q, s({}, i)) : o.createElement(se, s({}, i))))
}, ce = e => `
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, pe = e => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`, ue = "0%{opacity:0;} 100%{opacity:1;}", me = "0%{opacity:1;} 100%{opacity:0;}", fe = b("div")
`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, ye = b("div")
`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, be = (e, t) => {
    let a = e.includes("top") ? 1 : -1,
        [i, n] = P() ? [ue, me] : [ce(a), pe(a)];
    return {
        animation: t ? `${y(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${y(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
    }
}, he = o.memo(({
    toast: e,
    position: t,
    style: a,
    children: i
}) => {
    let n = e.height ? be(e.position || t || "top-center", e.visible) : {
            opacity: 0
        },
        r = o.createElement(de, {
            toast: e
        }),
        d = o.createElement(ye, s({}, e.ariaProps), k(e.message, e));
    return o.createElement(fe, {
        className: e.className,
        style: s(s(s({}, n), a), e.style)
    }, typeof i == "function" ? i({
        icon: r,
        message: d
    }) : o.createElement(o.Fragment, null, r, d))
});
H(o.createElement);
var ge = ({
        id: e,
        className: t,
        style: a,
        onHeightUpdate: i,
        children: n
    }) => {
        let r = o.useCallback(d => {
            if (d) {
                let l = () => {
                    let p = d.getBoundingClientRect().height;
                    i(e, p)
                };
                l(), new MutationObserver(l).observe(d, {
                    subtree: !0,
                    childList: !0,
                    characterData: !0
                })
            }
        }, [e, i]);
        return o.createElement("div", {
            ref: r,
            className: t,
            style: a
        }, n)
    },
    ve = (e, t) => {
        let a = e.includes("top"),
            i = a ? {
                top: 0
            } : {
                bottom: 0
            },
            n = e.includes("center") ? {
                justifyContent: "center"
            } : e.includes("right") ? {
                justifyContent: "flex-end"
            } : {};
        return s(s({
            left: 0,
            right: 0,
            display: "flex",
            position: "absolute",
            transition: P() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
            transform: `translateY(${t*(a?1:-1)}px)`
        }, i), n)
    },
    xe = j `
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
    D = 16,
    $e = ({
        reverseOrder: e,
        position: t = "top-center",
        toastOptions: a,
        gutter: i,
        children: n,
        containerStyle: r,
        containerClassName: d
    }) => {
        let {
            toasts: l,
            handlers: p
        } = W(a);
        return o.createElement("div", {
            id: "_rht_toaster",
            style: s({
                position: "fixed",
                zIndex: 9999,
                top: D,
                left: D,
                right: D,
                bottom: D,
                pointerEvents: "none"
            }, r),
            className: d,
            onMouseEnter: p.startPause,
            onMouseLeave: p.endPause
        }, l.map(u => {
            let v = u.position || t,
                I = p.calculateOffset(u, {
                    reverseOrder: e,
                    gutter: i,
                    defaultPosition: t
                }),
                E = ve(v, I);
            return o.createElement(ge, {
                id: u.id,
                key: u.id,
                onHeightUpdate: p.updateHeight,
                className: u.visible ? xe : "",
                style: E
            }, u.type === "custom" ? k(u.message, u) : n ? n(u) : o.createElement(he, {
                toast: u,
                position: v
            }))
        }))
    },
    ke = c;
export {
    $e as O, ke as V
};
//# sourceMappingURL=react-hot-toast-m96sdbVs.js.map