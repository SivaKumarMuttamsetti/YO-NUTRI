var ys = Object.defineProperty,
    ps = Object.defineProperties;
var js = Object.getOwnPropertyDescriptors;
var Wt = Object.getOwnPropertySymbols;
var bs = Object.prototype.hasOwnProperty,
    Ns = Object.prototype.propertyIsEnumerable;
var qt = (r, l, s) => l in r ? ys(r, l, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : r[l] = s,
    Ae = (r, l) => {
        for (var s in l || (l = {})) bs.call(l, s) && qt(r, s, l[s]);
        if (Wt)
            for (var s of Wt(l)) Ns.call(l, s) && qt(r, s, l[s]);
        return r
    },
    Pe = (r, l) => ps(r, js(l));
var pe = (r, l, s) => new Promise((i, p) => {
    var a = x => {
            try {
                n(s.next(x))
            } catch (o) {
                p(o)
            }
        },
        c = x => {
            try {
                n(s.throw(x))
            } catch (o) {
                p(o)
            }
        },
        n = x => x.done ? i(x.value) : Promise.resolve(x.value).then(a, c);
    n((s = s.apply(r, l)).next())
});
import {
    R as Ke,
    r as f,
    j as e,
    S as ws,
    u as Ss,
    m as ve
} from "./react-core-C02-NrKc.js";
import {
    u as oe,
    f as xe,
    b as Ye,
    i as dt,
    K as Cs,
    a as Je,
    k as ns,
    L as gt,
    M as bt,
    N as os,
    O as vs,
    P as ks,
    Q as Es,
    c as Ve,
    R as Ds,
    S as vt,
    d as he,
    w as ke,
    x as Ts,
    D as Is,
    p as cs,
    q as ds,
    T as Bs,
    U as Os,
    J as zt,
    C as st,
    V as As,
    W as kt,
    X as Nt,
    m as it,
    Y as Ps,
    Z as Rs,
    _ as Ls,
    $ as Xt,
    a0 as xs,
    a1 as Qt,
    a2 as ct,
    a3 as _t,
    a4 as pt,
    a5 as Fs,
    a6 as Us,
    a7 as $s,
    a8 as Ms,
    a9 as yt,
    aa as ot,
    ab as Hs,
    e as Tt,
    ac as Vs,
    ad as Ks,
    ae as Gs,
    E as Ys,
    af as le,
    ag as Re,
    ah as ms,
    ai as Ws,
    aj as qs
} from "./lib-D7WRmHWF.js";
import {
    D as Fe,
    a as Ee,
    P as Le,
    d as je,
    L as Jt,
    e as us,
    c as at,
    O as xt,
    f as zs,
    G as Ge,
    I as hs,
    C as Et,
    g as Xs,
    h as Qs,
    S as Js,
    i as wt,
    A as Zs
} from "./common-components-DhcySBak.js";
import {
    _ as ea
} from "./index-BpOda8Pq.js";
import {
    C as Zt,
    A as es,
    a as ts,
    F as ta,
    L as sa,
    O as aa
} from "./components-DLiBXlgf.js";
import {
    d as ss,
    c as as,
    t as la,
    P as ra,
    e as ia,
    N as na
} from "./assests-8-RYiWy6.js";
import "./sentry-1CVSdSoY.js";
import {
    X as We,
    H as ls,
    c as jt,
    G as fs,
    T as rs,
    b as oa,
    M as ca,
    d as da,
    e as xa,
    f as nt,
    g as Dt,
    h as ma,
    A as ua,
    i as ha,
    j as fa
} from "./react-ui-CLI46-or.js";
import {
    _ as ga,
    q as _a
} from "./headless-BLCsrzy4.js";
import {
    u as It
} from "./react-router-dom-C_20INan.js";
import {
    T as ya
} from "./react-i18next-_5H4tnk_.js";
import {
    j as pa
} from "./vendor-DWBJvUkq.js";
(function() {
    try {
        var r = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {},
            l = new r.Error().stack;
        l && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[l] = "9f9e26f1-109e-40e5-999e-183304e536ee", r._sentryDebugIdIdentifier = "sentry-dbid-9f9e26f1-109e-40e5-999e-183304e536ee")
    } catch (s) {}
})();
const ja = Ke.memo(({
        itemName: r,
        setIsOpen: l,
        onConfirm: s,
        isCartItem: i = !1,
        itemProps: p
    }) => {
        const {
            t: a
        } = oe(), {
            state: {
                checkoutItems: c
            }
        } = xe(), n = f.useCallback(() => {
            if ((c == null ? void 0 : c.length) <= 1) return !0;
            let o = 0;
            return c.forEach(b => {
                b.is_freebie || o++
            }), o === 1
        }, [c]);
        return e.jsxs(e.Fragment, {
            children: [e.jsx(Fe, {
                children: e.jsxs("div", {
                    className: "flex h-full w-full flex-row items-center justify-between",
                    children: [e.jsx("h1", {
                        className: "text-base font-medium text-carbon-dark",
                        children: a("remove_items", {
                            item_count: (p == null ? void 0 : p.quantity) === 1 ? "1 item" : `${p.quantity} items`
                        })
                    }), e.jsx("button", {
                        className: "outline-none",
                        children: e.jsx(We, {
                            className: "h-6 w-6 cursor-pointer text-coal-dark",
                            onClick: () => l()
                        })
                    })]
                })
            }), e.jsx(Ee, {
                children: e.jsxs("div", {
                    className: "relative flex w-full flex-col space-y-6 px-6",
                    children: [e.jsx(gs, Pe(Ae({}, p), {
                        checkoutItemsMutable: !1,
                        disableOOSItems: !0,
                        isMutable: !1,
                        isCartItem: !1
                    })), e.jsx(Le, {
                        buttonText: n() ? a("remove_last_item_dialog_cta") : a("remove_item_dialog_cta"),
                        onClick: () => s(n()),
                        height: "h-14",
                        isLoading: !1,
                        isDisabled: !1
                    })]
                })
            })]
        })
    }),
    ba = 1,
    Bt = Ke.memo(({
        items: r,
        disableOOSItems: l = !1,
        checkoutItemsMutable: s = !1,
        cartLevelAddOns: i,
        availableAddOns: p,
        enableAddOnActions: a = !0,
        isUnservicable: c = !1
    }) => {
        const {
            handleAddOnEdit: n,
            showFullScreenLoader: x
        } = bt();
        return e.jsxs(e.Fragment, {
            children: [e.jsxs("ul", {
                className: `flex w-full flex-col ${c?"space-y-0":"space-y-3"}`,
                children: [i == null ? void 0 : i.map(o => e.jsx("li", {
                    className: "py-1.5 px-3",
                    children: e.jsx(us, {
                        variant: "CHECKOUT",
                        addOnData: p[o == null ? void 0 : o.addon_id],
                        allowDelete: a,
                        handleAddOnDelete: () => n({
                            action: "DELETE",
                            addOnLevel: "CART",
                            addOnId: o == null ? void 0 : o.addon_id,
                            showFullScreenLoader: !0
                        })
                    })
                }, o == null ? void 0 : o.addon_id)), r == null ? void 0 : r.map((o, b) => e.jsx("li", {
                    className: `py-1.5 ${o.is_freebie?"px-1.5":"px-3"} ${c?"!px-0":""}`,
                    children: e.jsx(gs, Pe(Ae({}, o), {
                        disableOOSItems: l,
                        checkoutItemsMutable: s,
                        isUnservicable: c
                    }))
                }, `${o.item_id}_${b}`))]
            }), x && e.jsx(xt, {})]
        })
    }),
    gs = r => {
        var we;
        const {
            t: l
        } = oe(), {
            state: {
                merchant: s
            }
        } = Ye(), {
            state: {
                isAuthenticated: i
            }
        } = dt(), {
            state: {
                checkoutId: p,
                billing: a,
                checkoutItems: c,
                wishlistConfig: n,
                checkoutValidations: x,
                availableAddOns: o
            },
            actions: {
                setCartDialog: b,
                setCheckoutValidations: v,
                setDiscountProductSelectorModal: H,
                setCheckoutModal: C
            }
        } = xe(), {
            item_title: S,
            quantity: h,
            price: N,
            originalPrice: T,
            markupPrice: A,
            image: P,
            variant_title: Q,
            is_freebie: W,
            is_available: re,
            disableOOSItems: q,
            hasProductSelector: J,
            item_properties: d,
            availableQuantity: B,
            item_id: g,
            variant_id: z,
            isMutable: ee,
            checkoutItemsMutable: te,
            isCartItem: k = !1,
            isUpdating: De = !1,
            setIsUpdating: _e,
            item_url: t,
            is_discount_alteration: E,
            is_platform_fee: V,
            appliedItemAddOns: I,
            itemLevelAddons: K,
            isUnservicable: G = !1,
            rawItem: Z
        } = r, {
            state: {
                wishlistedItems: X
            },
            actions: {
                isWishlisted: $,
                refreshWishlist: me
            }
        } = Cs(), {
            sendAnalyticsEvent: ce
        } = Je(), {
            state: {
                cartMetadata: ae
            }
        } = ns(), F = f.useMemo(() => {
            var _, D;
            return pa.apply((D = (_ = ae == null ? void 0 : ae.ui_attributes) == null ? void 0 : _.item_modification_rule) != null ? D : "", Z)
        }, [(we = ae == null ? void 0 : ae.ui_attributes) == null ? void 0 : we.item_modification_rule, Z]), {
            showDelete: se,
            showIncrement: be,
            showDecrement: Te
        } = f.useMemo(() => !F || gt(F) ? {
            showDelete: !0,
            showIncrement: !0,
            showDecrement: !0
        } : {
            showDelete: !!(F != null && F.delete),
            showIncrement: !!(F != null && F.increase),
            showDecrement: !!(F != null && F.decrease)
        }, [F]), Ie = parseFloat(N) * h, qe = parseFloat(s != null && s.showOriginalPrice ? T : A) * h, [Be, Y] = f.useState(!1), [Ne] = It(), M = Ne.get("page") === "cart" || Ne.get("page") === "CART", {
            handleItemEdit: Me,
            isLoading: de,
            showFullScreenLoader: ze,
            openRemoveItemDialog: Ze,
            setOpenRemoveItemDialog: Xe,
            handleItemDeleteSubmit: St,
            handleAddOnEdit: mt
        } = bt({
            item_id: g,
            quantity: h,
            availableQuantity: B,
            isCartItem: k,
            variant_id: z,
            billing: a,
            setIsUpdating: _e
        }), {
            unservicableItems: lt
        } = os(), Oe = f.useMemo(() => {
            var _, D, U, L;
            return n != null && n.isEnabled ? !(k && !((D = (_ = n == null ? void 0 : n.config) == null ? void 0 : _.cart) != null && D.enabled) || !k && !((L = (U = n == null ? void 0 : n.config) == null ? void 0 : U.checkout) != null && L.enabled)) : !1
        }, [k, n]), He = f.useMemo(() => $(z), [X, z]), et = f.useCallback(() => e.jsx(e.Fragment, {
            children: e.jsx("p", {
                className: "pt-1 text-sm font-medium text-coal-dark",
                children: e.jsx(je, {
                    total: Ie != null ? Ie : "",
                    compareAt: qe,
                    orientation: k ? "horizontal" : "vertical"
                })
            })
        }), [qe, Ie, k]), ut = f.useCallback(() => {
            var _, D, U;
            if (Q !== "Default Title" && gt(d)) return e.jsx("li", {
                className: "w-full overflow-hidden text-ellipsis text-xs font-normal text-coal-light",
                children: Q
            });
            if (gt(d)) return e.jsx(e.Fragment, {});
            if (Q === "Default Title" && !(s != null && s.showAllItemProperties) && !((_ = s == null ? void 0 : s.itemProperties) != null && _.length)) return e.jsx(e.Fragment, {});
            try {
                const L = vs(d, (D = s == null ? void 0 : s.itemProperties) != null ? D : [], (U = s == null ? void 0 : s.showAllItemProperties) != null ? U : !1);
                if (Q === "Default Title" && gt(L)) return e.jsx(e.Fragment, {});
                if (s != null && s.showItemPropertyKey) {
                    const Se = [];
                    Q !== "Default Title" && Se.push(e.jsx("li", {
                        className: "w-full overflow-hidden text-ellipsis text-xs font-normal text-coal-light",
                        children: Q
                    }));
                    for (let $e in L) L.hasOwnProperty($e) && Se.push(e.jsx("li", {
                        className: "w-full overflow-hidden text-ellipsis text-xs font-normal text-coal-light",
                        children: `${$e}: ${L[$e]}`
                    }));
                    return Se
                }
                const Ue = [];
                Q !== "Default Title" && Ue.push(e.jsx("li", {
                    className: "w-full overflow-hidden text-ellipsis text-xs font-normal text-coal-light",
                    children: Q
                }));
                for (let Se in L) L.hasOwnProperty(Se) && Ue.push(e.jsx("li", {
                    className: "w-full overflow-hidden text-ellipsis text-xs font-normal text-coal-light",
                    children: `${L[Se]}`
                }));
                return Ue
            } catch (L) {
                return console.error(L), e.jsx(e.Fragment, {})
            }
        }, [d, s, Q]), ht = _ => {
            const D = I == null ? void 0 : I.map(U => {
                const L = o[U == null ? void 0 : U.addon_id];
                return `${zt(L==null?void 0:L.product_name,40)} added for ${st((L==null?void 0:L.price)*_)}`
            });
            return (D == null ? void 0 : D.length) === 0 ? e.jsx(e.Fragment, {}) : e.jsx("li", {
                className: "w-full overflow-hidden text-ellipsis text-xs font-normal text-coal-light",
                "data-sentry-component": "getAddonDetailsForCheckoutItem",
                "data-sentry-source-file": "CheckoutItems.tsx",
                children: D.join(" / ")
            })
        }, m = () => {
            lt.length > 0 && !M ? C("UNSERVICEABLE_PRODUCTS") : Oe ? Y(!0) : Xe(!0)
        }, R = () => e.jsxs("li", {
            className: "flex w-full flex-row items-start justify-between space-x-3",
            "data-sentry-component": "getItemHeader",
            "data-sentry-source-file": "CheckoutItems.tsx",
            children: [e.jsx(Jt, {
                href: k ? t : "",
                "data-sentry-element": "LinkButton",
                "data-sentry-source-file": "CheckoutItems.tsx",
                children: e.jsx("p", {
                    className: "overflow-hidden text-ellipsis  pt-0.5 text-sm font-medium text-coal-dark",
                    children: zt(S, 44)
                })
            }), !J && se && (!!te && !!ee || k && !W && !E && !V) && e.jsx("button", {
                className: Ve("cursor-pointer rounded-lg border border-gray-light p-1", k || G ? "bg-white" : ""),
                disabled: De || de,
                onClick: m,
                children: e.jsx(rs, {
                    className: "h-3.5 w-3.5 text-coal-light outline-none",
                    strokeWidth: 2.5
                })
            }), !!J && ee && !G && e.jsx("button", {
                className: Ve("cursor-pointer rounded-lg border border-gray-light p-1 bg-white"),
                onClick: () => H("DISCOUNTED_PRODUCT_SELECTOR"),
                children: e.jsx(oa, {
                    className: "h-3.5 w-3.5 text-coal-light outline-none",
                    strokeWidth: 2.5
                })
            })]
        }), y = f.useCallback(() => e.jsx(e.Fragment, {
            children: q ? re ? e.jsx(e.Fragment, {
                children: et()
            }) : e.jsx(e.Fragment, {
                children: e.jsx("p", {
                    className: "whitespace-nowrap pt-0.5 text-sm font-medium text-ouch",
                    children: l("oos_item")
                })
            }) : et()
        }), [q, et, re, l]), u = () => {
            const _ = De || de || !Te || h === ba;
            return e.jsxs("li", {
                className: "flex w-full flex-row items-end justify-between pt-1",
                "data-sentry-component": "getItemActions",
                "data-sentry-source-file": "CheckoutItems.tsx",
                children: [(be || Te) && Ie && !G && !As(A, s) && (ee || k && !W && !E && !V) ? e.jsx(e.Fragment, {
                    children: e.jsxs("div", {
                        className: Ve("flex h-6 w-[4.25rem] flex-row items-center rounded border", k ? "border-carbon-lighter bg-white" : "border-gray-light"),
                        children: [e.jsx("button", {
                            className: Ve("flex h-full w-full grow basis-1/3 items-center justify-center", _ ? "cursor-not-allowed text-carbon-lighter" : "cursor-pointer bg-gray-light text-coal-light", "rounded-l", k ? "bg-[#F8F8F8]" : "", "disabled:cursor-not-allowed disabled:opacity-50"),
                            disabled: _,
                            onClick: () => Me("decrement"),
                            children: e.jsx(ca, {
                                className: "h-3.5 w-3.5 outline-none",
                                strokeWidth: 2.5
                            })
                        }), e.jsx("p", {
                            className: "grow basis-1/3 text-center text-xs font-medium text-coal-dark",
                            children: h
                        }), e.jsx("button", {
                            className: Ve("flex h-full w-full grow basis-1/3 items-center justify-center rounded-r", h + 1 > B || s != null && s.maxQuantityPerItem && (s != null && s.maxQuantityPerItem) && h + 1 > (s == null ? void 0 : s.maxQuantityPerItem) || De || de ? "cursor-not-allowed text-carbon-lighter" : "cursor-pointer bg-gray-light text-coal-light", k ? "bg-[#F8F8F8]" : "", "disabled:cursor-not-allowed disabled:opacity-50"),
                            disabled: De || de || !be,
                            onClick: () => Me("increment"),
                            children: e.jsx(da, {
                                className: "h-3.5 w-3.5 outline-none",
                                strokeWidth: 2.5
                            })
                        })]
                    })
                }) : e.jsx("div", {
                    className: "flex h-6 w-6 items-center justify-center rounded border border-gray-light bg-white",
                    children: e.jsx("p", {
                        className: "text-xs font-medium text-coal-dark",
                        children: h
                    })
                }), y()]
            })
        }, O = f.useCallback(() => {
            (c == null ? void 0 : c.length) > 1 && Oe ? lt.length > 0 ? C("UNSERVICEABLE_PRODUCTS") : Me("delete") : Xe(!0), Y(!1)
        }, [c, Oe]), w = _ => pe(void 0, null, function*() {
            var D;
            if (!i && k) {
                if (Ts() && !Is()) {
                    let U = new URL(document.location.href),
                        L = new URLSearchParams(U.search);
                    L.delete("page"), L.append("checkoutId", p), U.search = L.toString(), cs(ds.PARENT_REDIRECT, {
                        redirectUrl: U.href,
                        clearCart: !1
                    });
                    return
                }
                b("cartAuthentication"), v(Pe(Ae({}, x), {
                    cartLoginPopup: {
                        isValid: !1,
                        metadata: {
                            message: "Verify your phone number to wishlist the item"
                        }
                    }
                }));
                return
            }
            if (!i) {
                Bs(l("login_to_add_to_wishlist"), 3e3);
                return
            }
            try {
                const U = yield Os((D = s == null ? void 0 : s.merchantId) != null ? D : "", z);
                if (U != null && U.error) throw _ && (ke(l("error_adding_to_wishlist"), 3e3), Me("delete")), U == null ? void 0 : U.error;
                U && (_ ? (vt(l("added_to_wishlist"), 3e3), Me("delete")) : vt(l("added_to_wishlist"), 3e3), ce({
                    eventName: he.ADDED_TO_WISHLIST,
                    eventType: "flo_action",
                    metaData: {
                        wishlistData: {
                            variantId: z,
                            variantName: Q,
                            productId: g,
                            productName: S,
                            parent: k ? "CART" : "CHECKOUT"
                        }
                    }
                }))
            } catch (U) {
                console.error(U), ke(l("error_adding_to_wishlist"), 3e3)
            } finally {
                me(), Y(!1)
            }
        }), ue = () => pe(void 0, null, function*() {
            var _;
            try {
                const D = yield Ds((_ = s == null ? void 0 : s.merchantId) != null ? _ : "", z);
                if (D != null && D.error) throw D == null ? void 0 : D.error;
                D && (vt(l("removed_from_wishlist"), 3e3), ce({
                    eventName: he.REMOVED_FROM_WISHLIST,
                    eventType: "flo_action",
                    metaData: {
                        wishlistData: {
                            variantId: z,
                            variantName: Q,
                            productId: g,
                            productName: S,
                            parent: k ? "CART" : "CHECKOUT"
                        }
                    }
                }))
            } catch (D) {
                console.error(D), ke(l("error_removing_from_wishlist"), 3e3)
            } finally {
                me(), Y(!1)
            }
        }), ye = () => K == null ? void 0 : K.map((_, D) => {
            const U = I.some(L => (L == null ? void 0 : L.addon_id) === (_ == null ? void 0 : _.addon_id));
            return e.jsx("div", {
                className: D === (K == null ? void 0 : K.length) - 1 ? "rounded-b-xl overflow-hidden" : "",
                children: e.jsx(zs, {
                    apiActionLoading: de,
                    disableOnClick: !0,
                    variant: "ITEM",
                    addOnData: _,
                    isChecked: U,
                    handleCheckBoxClick: L => {
                        mt({
                            action: L ? "ADD" : "DELETE",
                            addOnLevel: "ITEM",
                            addOnId: _ == null ? void 0 : _.addon_id
                        })
                    }
                })
            }, _ == null ? void 0 : _.addon_id)
        }), fe = ks(o, I), ge = f.useMemo(() => Es(P, ss), [P]);
        return e.jsxs(e.Fragment, {
            children: [e.jsxs("div", {
                className: `relative flex ${Oe?"overflow-x-hidden":""} scrollbar-hide select-none`,
                children: [e.jsxs("div", {
                    className: Ve("flex w-full min-w-full flex-row justify-between transition-all duration-300 relative", W && !G ? "rounded-2xl bg-gradient-to-r from-yay-light to-yay-lighter p-1.5 pr-2" : "", G ? "bg-gray-light rounded-2xl p-1.5 pr-2" : "", k ? `${K.length>0?"rounded-t-xl":"rounded-xl"} bg-gray-lightest p-2` : "gap-1", Be ? "opacity-50 -translate-x-[14rem]" : ""),
                    children: [Oe && e.jsx("div", {
                        className: `absolute border-b ${k?"top-[1px]":"top-0"} left-[1px] border-r h-6 w-6 z-10 bg-white border-gray-light ${He?"text-primary-dark":"text-gray-dark"} p-1 rounded-tl-md rounded-br-lg cursor-pointer`,
                        onClick: () => He ? ue() : w(),
                        children: e.jsx(ls, {
                            className: `h-4 w-4 ${He?"fill-primary-dark":""}`,
                            strokeWidth: 2.5
                        })
                    }), Be && e.jsxs("div", {
                        className: "absolute flex items-center justify-end top-0 left-0 w-full h-full bg-white opacity-80 pr-8 cursor-pointer",
                        onClick: () => Y(!1),
                        onTouchStart: () => Y(!1),
                        children: [e.jsx(jt, {
                            className: "h-10 w-10"
                        }), e.jsx(jt, {
                            className: "-ml-8 h-10 w-10"
                        })]
                    }), e.jsxs("div", {
                        className: "flex w-full space-x-4",
                        children: [e.jsxs("div", {
                            className: Ve("relative flex items-center justify-center ", k ? "min-h-[75px] min-w-[75px]" : "h-16 min-h-[4rem] w-16 min-w-[4rem]"),
                            children: [W ? e.jsx("div", {
                                className: "absolute bottom-[1px] right-[1px] flex h-6 w-6 items-center justify-center rounded-md rounded-bl-none rounded-tr-none bg-white shadow-sm",
                                children: e.jsx(fs, {
                                    className: "h-4 w-4 text-yay-dark",
                                    strokeWidth: 2.5
                                })
                            }) : e.jsx(e.Fragment, {}), e.jsx(Jt, {
                                href: k ? t : "",
                                "data-sentry-element": "LinkButton",
                                "data-sentry-source-file": "CheckoutItems.tsx",
                                children: e.jsx("img", {
                                    src: ge,
                                    alt: "Cart Item",
                                    className: Ve("border border-gray-light object-cover", q && !re ? "grayscale" : "", k ? "h-[75px] w-[75px]" : "h-[4.188rem] w-16", G ? "rounded-2xl grayscale" : "rounded-lg"),
                                    onError: ({
                                        currentTarget: _
                                    }) => {
                                        _.onerror = null, _.src = ss
                                    }
                                })
                            }), !te && h > 1 && e.jsx("div", {
                                className: `absolute flex h-6 w-6 items-center justify-center rounded-full border border-gray-light bg-[#F8F8F8] ${Oe?"-right-3 -bottom-1":"-right-3 -top-3"}`,
                                children: e.jsx("span", {
                                    className: "text-xs font-medium text-coal-dark",
                                    children: h
                                })
                            })]
                        }), e.jsxs("ul", {
                            className: "flex grow flex-col items-start justify-between space-y-0.5",
                            children: [R(), ut(), !k && !fe && ht(h), !!J && ee && e.jsxs("li", {
                                className: "flex w-full flex-row items-end justify-between",
                                children: [e.jsx("div", {
                                    className: "flex px-2 py-1 border space-x-1 border-gray-light rounded-md bg-white cursor-pointer",
                                    onClick: () => H("DISCOUNTED_PRODUCT_SELECTOR"),
                                    children: e.jsx("p", {
                                        className: "text-xs font-medium text-coal-dark",
                                        children: h
                                    })
                                }), y()]
                            }), !!te && !q && !J && u()]
                        })]
                    }), !te && !J && y()]
                }), Oe && e.jsxs("div", {
                    className: `flex min-w-[14rem] transition-all duration-300 rounded-r-xl overflow-hidden ${Be?"-translate-x-[14rem]":""}`,
                    children: [!He && e.jsxs("button", {
                        className: "flex flex-col items-center space-y-2 justify-center w-1/2 py-1 text-primary-dark cursor-pointer bg-primary-lighter",
                        onClick: () => w(!0),
                        children: [e.jsx(ls, {
                            className: "h-4 w-4"
                        }), e.jsx("p", {
                            className: "text-xs font-medium",
                            children: l("save_for_later")
                        })]
                    }), !!se && e.jsxs("button", {
                        className: `flex flex-col items-center justify-center ${Oe&&!He?"w-1/2":"w-full"} space-y-2 py-1 text-ouch cursor-pointer bg-[#cb271140]`,
                        onClick: O,
                        children: [e.jsx(rs, {
                            className: "h-4 w-4"
                        }), e.jsx("p", {
                            className: "text-xs font-medium",
                            children: l("remove")
                        })]
                    })]
                })]
            }), k && !E && ye(), fe && (I == null ? void 0 : I.map((_, D) => e.jsx("div", {
                className: `${D===0?"mt-4":"mt-3"}`,
                children: e.jsx(us, {
                    allowDelete: k,
                    itemQuantity: h,
                    variant: k ? "CART" : "CHECKOUT",
                    addOnData: o[_ == null ? void 0 : _.addon_id],
                    parentTitle: S,
                    disableActions: de,
                    handleAddOnDelete: () => mt({
                        action: "DELETE",
                        addOnLevel: "ITEM",
                        addOnId: _ == null ? void 0 : _.addon_id
                    })
                }, _ == null ? void 0 : _.addon_id)
            }, _ == null ? void 0 : _.addon_id))), e.jsx(at, {
                isOpen: Ze,
                setIsOpen: () => Xe(!1),
                translateAxis: "y",
                customClass: "overflow-scroll md:!top-auto md:absolute",
                dialogOverlay: !0,
                modalType: "REMOVE_ITEM",
                "data-sentry-element": "GenericDialog",
                "data-sentry-source-file": "CheckoutItems.tsx",
                children: e.jsx(ja, {
                    setIsOpen: () => Xe(!1),
                    itemName: S,
                    onConfirm: St,
                    isCartItem: k,
                    itemProps: r,
                    "data-sentry-element": "RemoveItemDialog",
                    "data-sentry-source-file": "CheckoutItems.tsx"
                })
            }), (!k && de || ze) && e.jsx(xt, {})]
        })
    },
    Na = Ke.lazy(() => ea(() => Promise.resolve().then(() => Ia), void 0)),
    wa = ({
        setOpenDialog: r,
        handleDiscountApply: l,
        handleDeleteCoupon: s,
        savingItems: i,
        couponDisplayType: p,
        isCouponsLoading: a,
        couponApplyError: c,
        setCouponApplyError: n
    }) => {
        const {
            t: x
        } = oe(), {
            state: {
                coupons: o,
                appliedCoupons: b,
                billing: v
            },
            actions: {
                setCheckoutModal: H,
                setDiscountProductSelectorModal: C
            }
        } = xe(), {
            sendAnalyticsEvent: S
        } = Je(), {
            state: {
                merchant: h
            }
        } = Ye(), N = f.useMemo(() => b.filter(t => !t.isReward), [b]), T = f.useMemo(() => b == null ? void 0 : b.filter(t => t.isReward), [b]), A = f.useMemo(() => b == null ? void 0 : b.filter(t => t.isProductSelector), [b]), [P, Q] = f.useState(""), [W, re] = f.useState(!1), [q, J] = f.useState("");
        f.useEffect(() => (S({
            eventName: he.FLO_COUPON_LOADED,
            eventType: "load",
            metaData: {
                couponData: {
                    coupons_list: o
                }
            }
        }), () => {
            n({
                status: !1,
                message: ""
            })
        }), []), f.useCallback(() => N.every(t => t == null ? void 0 : t.isFreebie), [N]);
        const d = f.useCallback(() => {
                r(), S({
                    eventName: he.FLO_BACK_CLICK,
                    eventType: "click"
                })
            }, [S, r]),
            B = (t, E, V) => {
                if (J(V), E) {
                    re(!0);
                    return
                }
                l(t, !1, !1, V), re(!1)
            },
            g = t => {
                switch (t) {
                    case "CRED":
                        return as;
                    case "TICKERTAPE":
                        return la;
                    default:
                        return as
                }
            },
            z = t => {
                switch (t) {
                    case "CRED":
                        return x("cred_reward_header");
                    case "TICKERTAPE":
                        return x("ticker_tape_reward_header");
                    default:
                        return x("cred_reward_header")
                }
            },
            ee = (t, E) => {
                switch (t) {
                    case "CRED":
                        return x("cashback_amount", {
                            amount: E
                        });
                    case "TICKERTAPE":
                        return x("ticker_tape_gold_amount", {
                            amount: E
                        });
                    default:
                        return x("cashback_amount", {
                            amount: E
                        })
                }
            },
            te = t => {
                switch (t) {
                    case "CRED":
                        return x("claim_cred_cashback");
                    case "TICKERTAPE":
                        return x("claim_ticker_tape_cashback");
                    default:
                        return x("claim_cred_cashback")
                }
            },
            k = Ke.memo(({
                couponCode: t,
                couponHeader: E,
                couponTitle: V,
                couponDesc: I,
                moreInfo: K,
                isApplicable: G,
                unApplicabilityReason: Z,
                isStackable: X,
                totalDiscount: $,
                isAutoApplicable: me
            }) => {
                const [ce, ae] = f.useState(!1), F = !G && !X;
                return e.jsxs("div", {
                    className: "group relative box-border flex h-full min-h-[10rem] w-full flex-col items-start overflow-hidden rounded-2xl border-[1px] border-gray-light",
                    children: [e.jsxs("div", {
                        className: `flex w-full flex-row items-center justify-between rounded-lg bg-gradient-to-b py-2 pl-3 pr-2 ${F?"from-gray-lighter to-white":"from-primary-lighter to-white"}`,
                        children: [e.jsxs("div", {
                            className: `flex flex-row items-center ${F?"w-full":"w-3/4"}`,
                            children: [e.jsx("div", {
                                className: "flex h-8 w-8 items-center justify-start",
                                children: e.jsx(ws, {
                                    className: `mr-2 h-6 w-6 text-coal-light ${F?"fill-gray-dark":"fill-primary-dark"}`
                                })
                            }), e.jsx("h3", {
                                className: "truncate pr-2 text-base font-semibold uppercase text-coal-dark",
                                children: V || t
                            })]
                        }), !F && e.jsx(Ge, {
                            customClass: `flex items-center justify-center object-contain rounded-lg
              text-base font-medium text-btnPrimaryText bg-primary-dark`,
                            width: "w-24",
                            height: "h-10",
                            onClick: () => {
                                !F && B(t, X, V)
                            },
                            buttonText: x("apply_btn")
                        })]
                    }), e.jsxs("div", {
                        className: "group relative flex min-h-[6.5rem] w-full flex-col items-start justify-between gap-2 overflow-x-hidden px-3 pb-4",
                        children: [e.jsx("div", {
                            className: "flex flex-col",
                            children: e.jsxs("div", {
                                className: "flex flex-col space-y-1",
                                children: [e.jsx("h3", {
                                    className: "text-base font-semibold text-coal-dark",
                                    children: E
                                }), I && I.title && e.jsx("p", {
                                    className: "text-sm font-normal text-coal-light",
                                    children: I.title
                                })]
                            })
                        }), !F && $ > 0 && e.jsx("p", {
                            className: "text-xs font-medium text-yay-dark",
                            children: (N == null ? void 0 : N.filter(se => !(se != null && se.isFreebie && (se != null && se.autoApplied))).length) > 0 ? x("save_x_more", {
                                price: $
                            }) : x("save_x", {
                                price: $
                            })
                        }), F && e.jsx("p", {
                            className: "text-xs font-medium text-ouch",
                            children: Z
                        }), ce ? e.jsx("ul", {
                            className: "flex w-full flex-col space-y-1 rounded-lg bg-gray-lighter px-2 py-3",
                            children: K == null ? void 0 : K.map((se, be) => e.jsx("li", {
                                className: "ml-4 list-disc text-xs font-normal text-coal-light",
                                children: e.jsx("p", {
                                    children: se
                                })
                            }, `${t}--${be}`))
                        }) : e.jsx("button", {
                            onClick: () => ae(!0),
                            className: "w-fit text-sm font-medium text-coal-dark outline-none",
                            children: x("more")
                        })]
                    })]
                })
            }),
            De = Ke.memo(({
                coupon: t
            }) => {
                var I, K, G, Z;
                const [E, V] = f.useState(!1);
                return e.jsxs("div", {
                    className: "group relative box-border flex h-full min-h-[10rem] w-full flex-col items-start overflow-hidden rounded-2xl border-[1px] border-gray-light",
                    children: [e.jsxs("div", {
                        className: "flex w-full flex-row items-center justify-between rounded-lg bg-gradient-to-b py-2 pl-3 pr-2 from-primary-lighter to-white",
                        children: [e.jsxs("div", {
                            className: "flex flex-row items-center w-3/4",
                            children: [e.jsx("div", {
                                className: "flex h-8 w-8 items-center justify-start",
                                children: e.jsx(fs, {
                                    className: "mr-2 h-6 w-6 text-primary-dark"
                                })
                            }), e.jsx("h3", {
                                className: "truncate pr-2 text-base font-semibold uppercase text-coal-dark",
                                children: t.title ? t.title : t.code
                            })]
                        }), e.jsx("p", {
                            className: "text-sm font-semibold text-coal-dark py-2 px-4 cursor-pointer",
                            onClick: () => C("DISCOUNTED_PRODUCT_SELECTOR"),
                            children: x("view")
                        })]
                    }), e.jsxs("div", {
                        className: "group relative flex min-h-[6.5rem] w-full flex-col items-start justify-between gap-2 overflow-x-hidden px-3 pb-4",
                        children: [e.jsx("div", {
                            className: "flex flex-col",
                            children: e.jsxs("div", {
                                className: "flex flex-col space-y-1",
                                children: [e.jsx("h3", {
                                    className: "overflow-x-hidden text-base font-semibold text-coal-dark",
                                    children: (I = t.rewardData) == null ? void 0 : I.header
                                }), e.jsx("p", {
                                    className: "text-sm font-normal text-coal-light",
                                    children: (K = t.rewardData) == null ? void 0 : K.description
                                })]
                            })
                        }), E ? e.jsx("ul", {
                            className: "flex w-full flex-col space-y-1 rounded-lg bg-gray-lighter px-2 py-3",
                            children: (Z = (G = t.rewardData) == null ? void 0 : G.longDescription) == null ? void 0 : Z.map((X, $) => e.jsx("li", {
                                className: "ml-4 list-disc text-xs font-normal text-coal-light",
                                children: e.jsx("p", {
                                    children: X
                                })
                            }, `${t.code}--${$}`))
                        }) : e.jsx("button", {
                            onClick: () => V(!0),
                            className: "w-fit text-sm font-medium text-coal-dark outline-none",
                            children: x("more")
                        })]
                    })]
                })
            }),
            _e = (o == null ? void 0 : o.filter(t => {
                var E, V, I;
                return ((E = t == null ? void 0 : t.coupon_details) == null ? void 0 : E.coupon_type) !== "CALLOUT_CARD" && !(t != null && t.applicable) && ((V = t == null ? void 0 : t.un_applicability_reason) == null ? void 0 : V.reason) !== "UARC_002" && ((I = t == null ? void 0 : t.un_applicability_reason) == null ? void 0 : I.reason) !== "UARC_007"
            }).length) > 0;
        return e.jsxs(Ke.Fragment, {
            children: [e.jsx(Fe, {
                className: "!px-3",
                "data-sentry-element": "DialogHeader",
                "data-sentry-source-file": "CouponDialog.tsx",
                children: e.jsxs("div", {
                    className: "flex w-full flex-col rounded-t-inherit pb-4",
                    children: [e.jsxs(ga.Title, {
                        as: "div",
                        className: "flex h-16 w-full flex-row items-center rounded-t-inherit bg-white px-3",
                        "data-sentry-element": "unknown",
                        "data-sentry-source-file": "CouponDialog.tsx",
                        children: [e.jsx("div", {
                            className: "-ml-3 flex h-12 w-12 cursor-pointer items-center justify-center",
                            onClick: d,
                            children: e.jsx(xa, {
                                className: "h-6 w-6 text-coal-dark",
                                "data-sentry-element": "ArrowLeft",
                                "data-sentry-source-file": "CouponDialog.tsx"
                            })
                        }), e.jsxs("div", {
                            className: "jutify-center flex flex-col gap-0.5",
                            children: [e.jsx("h1", {
                                className: "text-base font-medium text-coal-dark",
                                children: x("coupons")
                            }), e.jsxs("p", {
                                className: "text-xs font-normal text-gray-dark",
                                children: [x("cart_value"), " · ", st(v.sub_total)]
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "border-box relative !mb-3 flex w-full gap-1.5 ",
                        children: [e.jsx(nt, {
                            className: `absolute left-4 top-[1.3rem] z-10 h-4 w-4 text-coal-dark ${!(o!=null&&o.length)&&(N!=null&&N.length)?"top-5":"top-[1.3rem]"}`,
                            strokeWidth: 2.5,
                            "data-sentry-element": "Tag",
                            "data-sentry-source-file": "CouponDialog.tsx"
                        }), e.jsx(hs, {
                            type: "text",
                            placeholder: x("enter_coupon_code"),
                            name: "coupon-code",
                            id: "coupon-code",
                            maxLength: 50,
                            autoComplete: "off",
                            autoFocus: !1,
                            value: P,
                            onChange: t => Q(t.target.value.trim()),
                            onKeyDown: t => t.key === "Enter" && l(P, !0),
                            customClass: `h-[3.25rem] border border-gray-light !rounded-2xl  placeholder-gray-dark text-sm font-normal text-coal-light w-full !pl-[2.4rem]  ${P!=null&&P.length?"!rounded-r-lg":""}`,
                            showLabel: !1,
                            tabIndex: -1,
                            error: c,
                            "data-sentry-element": "InputField",
                            "data-sentry-source-file": "CouponDialog.tsx"
                        }), !!(P != null && P.length) && e.jsx(Ge, {
                            buttonText: "",
                            height: "h-12",
                            width: "",
                            customClass: "flex items-center justify-center rounded-l-lg w-14 rounded-2xl bg-primary-dark",
                            iconComponent: e.jsx(Dt, {
                                className: "h-4 w-4 text-btnPrimaryText"
                            }),
                            onClick: () => l(P, !0)
                        })]
                    })]
                })
            }), e.jsx(Ee, {
                className: "scrollbar-hide",
                "data-sentry-element": "DialogBody",
                "data-sentry-source-file": "CouponDialog.tsx",
                children: e.jsxs("div", {
                    className: c != null && c.status ? "pt-[92px]" : "pt-[72px]",
                    children: [!!(N != null && N.length) && e.jsx("div", {
                        className: "mx-3 mb-3 rounded-2xl bg-yay-lighter",
                        children: !kt(N) && e.jsx("div", {
                            className: c != null && c.status ? "mt-3" : "mt-0",
                            children: e.jsx(Et, {
                                showAppliedCount: !0,
                                showRewards: !1,
                                showSavings: !0,
                                showAppliedCoupons: !0,
                                savingItems: i,
                                couponDisplayType: p,
                                handleDeleteCoupon: s,
                                defaultOpen: !0,
                                parent: "DIALOG"
                            })
                        })
                    }), T == null ? void 0 : T.map(t => {
                        var E, V, I, K, G, Z, X, $, me, ce, ae, F, se, be, Te, Ie;
                        return e.jsx("div", {
                            className: "mx-3 mb-3 overflow-hidden rounded-2xl border border-gray-light",
                            children: e.jsxs("div", {
                                className: "rounded-[14px] ",
                                children: [e.jsx("div", {
                                    className: "to-[#94949400)] bg-gradient-to-b from-[#9494941A] from-0% to-100%",
                                    children: e.jsxs("div", {
                                        className: "flex items-center justify-between px-3 py-5 text-sm font-medium text-yay-dark",
                                        children: [e.jsxs("div", {
                                            className: "flex items-center space-x-2 text-coal-dark",
                                            children: [e.jsx("img", {
                                                src: g((V = (E = t.couponRewardConfig) == null ? void 0 : E.walletType) != null ? V : "CRED"),
                                                alt: `${(K=(I=t.couponRewardConfig)==null?void 0:I.walletType)!=null?K:"CRED"}-logo`,
                                                className: "rounded-[2px]"
                                            }), e.jsx("span", {
                                                className: "text-base font-semibold",
                                                children: z((Z = (G = t.couponRewardConfig) == null ? void 0 : G.walletType) != null ? Z : "CRED")
                                            })]
                                        }), ((X = t.couponRewardConfig) == null ? void 0 : X.walletType) === "TICKERTAPE" ? e.jsx("span", {
                                            className: "text-xs text-coal-dark font-semibold underline cursor-pointer",
                                            onClick: () => s(t.code),
                                            children: x("remove")
                                        }) : e.jsx("span", {
                                            className: "text-xs font-semibold",
                                            children: x("unlocked")
                                        })]
                                    })
                                }), e.jsxs("div", {
                                    className: "flex flex-col gap-2 px-3 pb-2 text-sm font-medium text-coal-dark",
                                    children: [e.jsx("div", {
                                        className: "text-base font-semibold text-yay-dark",
                                        children: ee((me = ($ = t.couponRewardConfig) == null ? void 0 : $.walletType) != null ? me : "CRED", (ae = (ce = t.couponRewardConfig) == null ? void 0 : ce.amount) != null ? ae : 0)
                                    }), e.jsx("div", {
                                        className: "text-xs font-medium text-coal-dark",
                                        children: te((se = (F = t.couponRewardConfig) == null ? void 0 : F.walletType) != null ? se : "CRED")
                                    })]
                                }), (Te = (be = t == null ? void 0 : t.rewardData) == null ? void 0 : be.longDescription) != null && Te.length ? e.jsx("div", {
                                    className: "px-3",
                                    children: e.jsxs("details", {
                                        className: "group pb-3 text-[#4d4d4d]",
                                        children: [e.jsx("summary", {
                                            className: "flex select-none list-none items-center text-xs font-semibold group-open:hidden",
                                            children: x("more")
                                        }), e.jsx("ul", {
                                            className: "flex w-full flex-col space-y-1 rounded-lg bg-gray-lighter px-2 py-3",
                                            children: (Ie = t == null ? void 0 : t.rewardData) == null ? void 0 : Ie.longDescription.map((qe, Be) => e.jsx("li", {
                                                className: "ml-4 list-disc text-xs font-normal text-coal-light",
                                                children: qe
                                            }, `${qe}--${Be}`))
                                        })]
                                    })
                                }) : null]
                            })
                        })
                    }), e.jsxs("div", {
                        className: "overflow-x-hidden px-3",
                        children: [!!a && e.jsxs("ul", {
                            className: "flex flex-col space-y-4",
                            children: [e.jsx("li", {
                                children: e.jsx(is, {})
                            }, "coupon-loader-1"), e.jsx("li", {
                                children: e.jsx(is, {})
                            }, "coupon-loader-2")]
                        }), !!A.length && e.jsxs("div", {
                            className: "flex flex-col space-y-4",
                            children: [e.jsx("ul", {
                                className: "flex flex-col space-y-4",
                                children: A == null ? void 0 : A.map(t => e.jsx(De, {
                                    coupon: t
                                }))
                            }), e.jsx("p", {
                                className: "pb-3 text-xs font-semibold uppercase text-coal-light",
                                children: x("available_coupons")
                            })]
                        }), !!(o != null && o.length) && !a && e.jsxs(e.Fragment, {
                            children: [e.jsx("ul", {
                                className: "flex flex-col space-y-4",
                                children: o == null ? void 0 : o.map(t => {
                                    var E, V, I, K, G, Z, X, $, me, ce, ae, F, se, be, Te;
                                    return ((E = t == null ? void 0 : t.coupon_details) == null ? void 0 : E.coupon_type) !== "CALLOUT_CARD" && (t.applicable || ((V = t == null ? void 0 : t.un_applicability_reason) == null ? void 0 : V.reason) === "UARC_002" || ((I = t == null ? void 0 : t.un_applicability_reason) == null ? void 0 : I.reason) === "UARC_007") ? e.jsx("li", {
                                        children: e.jsx(k, {
                                            isApplicable: t.applicable || ((K = t == null ? void 0 : t.un_applicability_reason) == null ? void 0 : K.reason) === "UARC_007" || ((G = t == null ? void 0 : t.un_applicability_reason) == null ? void 0 : G.reason) === "UARC_007",
                                            couponCode: (Z = t.coupon_details) == null ? void 0 : Z.coupon_code,
                                            couponHeader: (X = t.coupon_details) == null ? void 0 : X.header,
                                            couponTitle: ($ = t.coupon_details) == null ? void 0 : $.title,
                                            couponDesc: (me = t.coupon_details) == null ? void 0 : me.description,
                                            moreInfo: (ce = t.coupon_details) == null ? void 0 : ce.long_description,
                                            unApplicabilityReason: (ae = t.un_applicability_reason) == null ? void 0 : ae.description,
                                            isStackable: ((F = t == null ? void 0 : t.un_applicability_reason) == null ? void 0 : F.reason) === "UARC_002",
                                            totalDiscount: (se = t == null ? void 0 : t.discount_attribution) == null ? void 0 : se.total_discount,
                                            isAutoApplicable: (be = t == null ? void 0 : t.coupon_details) == null ? void 0 : be.auto_applicable
                                        })
                                    }, (Te = t.coupon_details) == null ? void 0 : Te.coupon_code) : ""
                                })
                            }), o != null && o.some(t => {
                                var E;
                                return ((E = t == null ? void 0 : t.coupon_details) == null ? void 0 : E.coupon_type) === "CALLOUT_CARD"
                            }) ? e.jsx("p", {
                                className: "pb-3 pt-5 text-xs font-semibold uppercase text-coal-light",
                                children: x("additional_offers")
                            }) : "", e.jsxs("div", {
                                className: "flex flex-col space-y-4",
                                children: [e.jsx("ul", {
                                    className: "flex flex-col space-y-4",
                                    children: o == null ? void 0 : o.map(t => {
                                        var E, V, I, K, G, Z, X;
                                        return t != null && t.applicable && ((E = t == null ? void 0 : t.coupon_details) == null ? void 0 : E.coupon_type) === "CALLOUT_CARD" ? e.jsx("li", {
                                            children: e.jsx(Zt, {
                                                isApplicable: t == null ? void 0 : t.applicable,
                                                couponTitle: (V = t.coupon_details) == null ? void 0 : V.title,
                                                couponHeader: (I = t.coupon_details) == null ? void 0 : I.header,
                                                couponDescription: (K = t.coupon_details) == null ? void 0 : K.description,
                                                couponLongDescription: (G = t.coupon_details) == null ? void 0 : G.long_description,
                                                unApplicabilityReason: (Z = t.un_applicability_reason) == null ? void 0 : Z.description
                                            })
                                        }, (X = t.coupon_details) == null ? void 0 : X.coupon_code) : ""
                                    })
                                }), e.jsx("ul", {
                                    className: "flex flex-col space-y-4",
                                    children: o == null ? void 0 : o.map(t => {
                                        var E, V, I, K, G, Z, X;
                                        return !(t != null && t.applicable) && ((E = t == null ? void 0 : t.coupon_details) == null ? void 0 : E.coupon_type) === "CALLOUT_CARD" ? e.jsx("li", {
                                            children: e.jsx(Zt, {
                                                isApplicable: t == null ? void 0 : t.applicable,
                                                couponTitle: (V = t.coupon_details) == null ? void 0 : V.title,
                                                couponHeader: (I = t.coupon_details) == null ? void 0 : I.header,
                                                couponDescription: (K = t.coupon_details) == null ? void 0 : K.description,
                                                couponLongDescription: (G = t.coupon_details) == null ? void 0 : G.long_description,
                                                unApplicabilityReason: (Z = t.un_applicability_reason) == null ? void 0 : Z.description
                                            })
                                        }, (X = t.coupon_details) == null ? void 0 : X.coupon_code) : ""
                                    })
                                })]
                            }), _e ? e.jsx("p", {
                                className: "pb-3 pt-5 text-xs font-semibold uppercase text-coal-light",
                                children: x("unavailable_coupons")
                            }) : "", e.jsx("ul", {
                                className: "flex flex-col space-y-4",
                                children: o == null ? void 0 : o.map(t => {
                                    var E, V, I, K, G, Z, X, $, me, ce, ae, F, se;
                                    return ((E = t == null ? void 0 : t.coupon_details) == null ? void 0 : E.coupon_type) !== "CALLOUT_CARD" && !(t != null && t.applicable) && ((V = t == null ? void 0 : t.un_applicability_reason) == null ? void 0 : V.reason) !== "UARC_002" && ((I = t == null ? void 0 : t.un_applicability_reason) == null ? void 0 : I.reason) !== "UARC_007" ? e.jsx("li", {
                                        children: e.jsx(k, {
                                            isApplicable: t.applicable,
                                            couponCode: (K = t.coupon_details) == null ? void 0 : K.coupon_code,
                                            couponHeader: (G = t.coupon_details) == null ? void 0 : G.header,
                                            couponTitle: (Z = t.coupon_details) == null ? void 0 : Z.title,
                                            couponDesc: (X = t.coupon_details) == null ? void 0 : X.description,
                                            moreInfo: ($ = t.coupon_details) == null ? void 0 : $.long_description,
                                            unApplicabilityReason: (me = t.un_applicability_reason) == null ? void 0 : me.description,
                                            isStackable: ((ce = t == null ? void 0 : t.un_applicability_reason) == null ? void 0 : ce.reason) === "UARC_002",
                                            totalDiscount: (ae = t == null ? void 0 : t.discount_attribution) == null ? void 0 : ae.total_discount,
                                            isAutoApplicable: (F = t == null ? void 0 : t.coupon_details) == null ? void 0 : F.auto_applicable
                                        })
                                    }, (se = t.coupon_details) == null ? void 0 : se.coupon_code) : ""
                                })
                            })]
                        })]
                    })]
                })
            }), e.jsx(at, {
                isOpen: W,
                setIsOpen: t => re(t),
                translateAxis: "y",
                customClass: "overflow-scroll md:!top-auto md:absolute",
                dialogOverlay: !0,
                modalType: "REPLACE_COUPON",
                "data-sentry-element": "GenericDialog",
                "data-sentry-source-file": "CouponDialog.tsx",
                children: e.jsx(Na, {
                    setIsOpen: () => re(!1),
                    applyCoupon: () => pe(void 0, null, function*() {
                        yield l(q, !1), re(!1)
                    }),
                    "data-sentry-element": "ReplaceCouponDialog",
                    "data-sentry-source-file": "CouponDialog.tsx"
                })
            })]
        })
    },
    is = () => e.jsx(e.Fragment, {
        children: e.jsx("div", {
            className: "group relative box-border flex min-h-[10rem] w-full flex-col items-start rounded-2xl border-[1px] border-gray-light py-2 pl-3 pr-2",
            children: e.jsxs("div", {
                className: "flex w-full flex-col space-y-2",
                children: [e.jsx("div", {
                    className: "skeleton-loader h-4 w-3/4 rounded"
                }), e.jsx("div", {
                    className: "skeleton-loader h-4 w-1/2 rounded"
                }), e.jsx("div", {
                    className: "skeleton-loader h-4 w-1/2 rounded"
                })]
            })
        })
    }),
    Sa = ({
        closePopup: r,
        applyCoupon: l,
        appliedDiscountCode: s,
        invalidDiscountCodes: i,
        invalidReason: p,
        isReward: a = !1
    }) => {
        const {
            t: c
        } = oe(), {
            state: {
                appliedCoupons: n,
                appliedWalletData: x
            }
        } = xe(), o = () => {
            if ((i == null ? void 0 : i.length) === 1) return i[0];
            if ((i == null ? void 0 : i.length) === 2) return `${i[0]} and ${i[1]}`;
            if ((i == null ? void 0 : i.length) > 2) return `${i.slice(0,-1).join(",")} and ${i[i.length-1]}`
        }, b = a ? c("replace_reward_header") : c("replace_coupon_header", {
            count: n == null ? void 0 : n.length
        });
        return a ? c("cannot_combine_rewards", {
            invalid_items: o(),
            applied_item: s
        }) : p === "DISCOUNTS_NOT_COMBINABLE" ? c("cannot_combine_coupons", {
            invalid_coupons: o(),
            applied_coupon: s
        }) : c("will_be_replaced_by", {
            invalid_coupons: o(),
            applied_coupon: s
        }), e.jsxs(e.Fragment, {
            children: [e.jsx(Fe, {
                "data-sentry-element": "DialogHeader",
                "data-sentry-source-file": "SwitchCouponDialog.tsx",
                children: e.jsxs("div", {
                    className: "flex h-full w-full flex-row items-center justify-between",
                    children: [e.jsx("h1", {
                        className: `text-base font-medium ${a?"pt-4":""}`,
                        children: b
                    }), e.jsx("button", {
                        className: "outline-none",
                        children: e.jsx(We, {
                            className: "h-6 w-6 cursor-pointer text-coal-dark",
                            onClick: () => r(),
                            "data-sentry-element": "X",
                            "data-sentry-source-file": "SwitchCouponDialog.tsx"
                        })
                    })]
                })
            }), e.jsx(Ee, {
                className: "!pb-4 !pt-12",
                "data-sentry-element": "DialogBody",
                "data-sentry-source-file": "SwitchCouponDialog.tsx",
                children: e.jsxs("div", {
                    className: "relative flex w-full flex-col space-y-4 px-6 pb-8 pt-4",
                    children: [e.jsx("p", {
                        className: "text-sm text-coal-dark",
                        children: e.jsxs(ya, {
                            i18nKey: b,
                            "data-sentry-element": "Trans",
                            "data-sentry-source-file": "SwitchCouponDialog.tsx",
                            children: [e.jsx("strong", {
                                children: o()
                            }), " cannot be combined with", " ", e.jsx("strong", {
                                children: s
                            })]
                        })
                    }), e.jsx(Le, {
                        buttonText: c("Yes, replace"),
                        onClick: l,
                        onTouchStart: l,
                        height: "h-14",
                        isLoading: !1,
                        isDisabled: !1,
                        "data-sentry-element": "PrimaryButton",
                        "data-sentry-source-file": "SwitchCouponDialog.tsx"
                    }), e.jsx(Ge, {
                        buttonText: c(a ? "keep_existing_rewards" : "keep_existing_discounts"),
                        height: "h-14",
                        customClass: "border-primary-dark border rounded-[12px] text-primary-dark font-semibold",
                        onClick: r,
                        onTouchStart: r,
                        "data-sentry-element": "GenericButton",
                        "data-sentry-source-file": "SwitchCouponDialog.tsx"
                    })]
                })
            })]
        })
    },
    Ca = ({
        title: r
    }) => {
        const {
            state: {
                checkoutModal: l
            }
        } = xe();
        return e.jsxs(at, {
            isOpen: l === "LOADER",
            translateAxis: "y",
            customClass: "overflow-scroll md:!top-auto md:absolute",
            dialogOverlay: !0,
            modalType: "PROCESSING",
            "data-sentry-element": "GenericDialog",
            "data-sentry-component": "LoaderDialog",
            "data-sentry-source-file": "LoaderDialog.tsx",
            children: [e.jsx(Fe, {
                "data-sentry-element": "DialogHeader",
                "data-sentry-source-file": "LoaderDialog.tsx",
                children: e.jsx("div", {
                    className: "flex h-full w-full flex-row items-center justify-between",
                    children: e.jsxs("h1", {
                        className: "text-base font-medium",
                        children: [" ", r]
                    })
                })
            }), e.jsx(Ee, {
                "data-sentry-element": "DialogBody",
                "data-sentry-source-file": "LoaderDialog.tsx",
                children: e.jsx("div", {
                    className: "h-[5px] w-full overflow-hidden bg-carbon-lighter",
                    children: e.jsx("div", {
                        className: "progress left-right h-full w-full bg-primary-dark"
                    })
                })
            })]
        })
    },
    va = ["shopflo", "platform", "ai_generated"],
    Wa = ({
        context: r = "checkout",
        loading: l = !1
    }) => {
        var He, et, ut, ht;
        const {
            t: s
        } = oe(), [i] = It(), p = (He = i.get("page")) == null ? void 0 : He.toLowerCase(), {
            state: {
                appliedCoupons: a,
                checkoutId: c,
                coupons: n,
                isC2P: x,
                checkoutModal: o,
                checkoutView: b,
                initialCheckoutStep: v,
                checkoutUIMetadata: H,
                discountedProductSelectorData: C,
                checkoutItems: S,
                discountProductSelectorModal: h,
                hiddenElements: N
            },
            actions: {
                setDiscountProductSelectorModal: T,
                updateCheckoutBasedOnCheckoutResponse: A,
                setCoupons: P,
                setCheckoutItems: Q,
                setCheckoutModal: W,
                setCheckoutView: re,
                setShippingHandles: q,
                setRawCheckoutObject: J
            }
        } = xe(), {
            state: {
                isAuthenticated: d,
                lockDiscounts: B
            }
        } = dt(), {
            state: {
                merchant: g
            }
        } = Ye(), {
            actions: {
                mutatePayment: z
            }
        } = Nt(), [ee, te] = f.useState(""), {
            sendAnalyticsEvent: k
        } = Je(), [De, _e] = f.useState(!1), [t, E] = f.useState(!1), [V, I] = f.useState(""), [K, G] = f.useState(""), [Z, X] = f.useState({
            status: !1,
            message: ""
        }), [$, me] = f.useState({
            showPopup: !1,
            appliedDiscountCode: "",
            invalidDiscountCodes: [],
            invalidityReason: "NONE",
            appliedCouponTitle: ""
        });
        let ce = !1;
        const {
            data: ae,
            isValidating: F
        } = Ss(!B && !x && c ? d ? [`/checkout/${c}/discount`, "KRATOS_PRIVATE"] : [`/checkout/${c}/discount`, "KRATOS_PUBLIC"] : null, ([m, R]) => d ? it(m, R) : Ps(m), Rs);
        f.useEffect(() => {
            !ae || F || P(ae)
        }, [ae, F]), f.useEffect(() => {
            var u, O;
            const m = a == null ? void 0 : a.find(w => w.autoApplied);
            if (!m || ce) return;
            const R = !!((u = C == null ? void 0 : C.items) != null && u.length && (C == null ? void 0 : C.totalItems) > (C == null ? void 0 : C.totalSelectedItems)),
                y = S == null ? void 0 : S.some(w => w.hasProductSelector);
            m && !ce && (G((O = m == null ? void 0 : m.code) != null ? O : ""), I(""), R && !y ? T("FREE_GIFTS") : Te(), ce = !0)
        }, []);
        const se = (m, R) => m.find(y => !(R != null && R.includes(y))),
            be = m => {
                G(m), h === "NONE" && Te()
            },
            Te = () => {
                setTimeout(() => {
                    E(!0)
                }, r === "cart" ? 1e3 : 1500)
            },
            Ie = a.filter(m => m.autoApplied).map(m => m.code),
            qe = Ls(Ie);
        f.useEffect(() => {
            const m = se(Ie, qe);
            m && be(m)
        }, [a]);
        const Be = f.useMemo(() => {
                let m = 0,
                    R = 0;
                return {
                    savings: a == null ? void 0 : a.reduce((u, {
                        discountValue: O,
                        isFreebie: w,
                        autoApplied: ue,
                        discountPercentage: ye,
                        isReward: fe,
                        couponRewardConfig: ge,
                        isRemovable: we
                    }) => {
                        var _;
                        if (fe) return u;
                        if (w || m++, w && (ye !== 100 ? m++ : (!ue || we) && (R++, m++)), fe) {
                            const D = (_ = ge == null ? void 0 : ge.amount) != null ? _ : 0;
                            return u + D
                        }
                        return u + O
                    }, 0),
                    count: m,
                    manualFreebieCount: R
                }
            }, [a, n, b]),
            Y = f.useMemo(() => {
                let m = {
                    shopflo: 0,
                    shopify: 0
                };
                if (!n) return m;
                let R = n.filter(y => {
                    var u;
                    return (y == null ? void 0 : y.applicable) || ((u = y == null ? void 0 : y.un_applicability_reason) == null ? void 0 : u.reason) === "UARC_002"
                });
                return m.shopify = R.filter(y => {
                    var u, O;
                    return (O = (u = y == null ? void 0 : y.coupon_details) == null ? void 0 : u.tags) == null ? void 0 : O.includes("SHOPIFY")
                }).length, m.shopflo = R.filter(y => {
                    var u, O;
                    return (O = (u = y == null ? void 0 : y.coupon_details) == null ? void 0 : u.tags) == null ? void 0 : O.some(w => va.includes(w.toLowerCase()))
                }).length, m
            }, [n]),
            Ne = f.useMemo(() => {
                var R;
                if (!((R = g == null ? void 0 : g.discountSettings) != null && R.showMaxDiscount) || a.length < 1) return null;
                const m = a.filter(y => !(y != null && y.isFreebie) && !(y != null && y.isPrepaid)).sort((y, u) => (y == null ? void 0 : y.discountValue) < (u == null ? void 0 : u.discountValue) ? 1 : -1).sort((y, u) => y != null && y.isRemovable ? -1 : u != null && u.isRemovable ? 1 : 0);
                return m == null ? void 0 : m[0]
            }, [a]),
            M = f.useMemo(() => {
                var R, y;
                if (!((R = g == null ? void 0 : g.discountSettings) != null && R.showMaxDiscount) || Y.shopflo < 1) return null;
                const m = n.filter(u => {
                    var O, w, ue, ye, fe, ge, we, _, D, U;
                    return !!((w = (O = u == null ? void 0 : u.coupon_details) == null ? void 0 : O.tags) != null && w.includes("SHOPFLO") || (ye = (ue = u == null ? void 0 : u.coupon_details) == null ? void 0 : ue.tags) != null && ye.includes("PLATFORM") || (ge = (fe = u == null ? void 0 : u.coupon_details) == null ? void 0 : fe.tags) != null && ge.includes("AI_GENERATED")) && !!(u != null && u.applicable) && !((we = u == null ? void 0 : u.coupon_details) != null && we.already_applied) && ((_ = u == null ? void 0 : u.coupon_details) == null ? void 0 : _.coupon_type) !== "PREPAID" && ((D = u == null ? void 0 : u.coupon_details) == null ? void 0 : D.coupon_type) !== "BXGY" && ((U = u == null ? void 0 : u.coupon_details) == null ? void 0 : U.coupon_type) !== "CALLOUT_CARD"
                });
                return m.length < 1 ? null : (y = m == null ? void 0 : m.sort((u, O) => (u == null ? void 0 : u.total_discount) < (O == null ? void 0 : O.total_discount) ? 1 : -1)) == null ? void 0 : y[0]
            }, [n, a]),
            Me = f.useCallback(() => {
                const {
                    shopflo: m,
                    shopify: R
                } = Y;
                if (m === 0 && R === 0) return !1;
                const y = () => a.every(u => u == null ? void 0 : u.isFreebie) && !!(a != null && a.length);
                return kt(a) || !(a != null && a.length) || y()
            }, [a, Y]),
            de = f.useCallback(() => {
                var O;
                const m = (O = H == null ? void 0 : H.couponDisplayConfig) == null ? void 0 : O.find(w => b === "ADDRESS_LIST" ? w.type === "ORDER_SUMMARY" : p === "cart" ? w.type === "CART" : w.type === b);
                if (!!!(m != null && m.isDisplayEnabled) || (g == null ? void 0 : g.couponStackLength) === 0) return null;
                const y = m == null ? void 0 : m.displayType;
                return g != null && g.isDiscountEnabled ? y : null
            }, [n, g, b, p, H]),
            ze = (m, R = !1, y = !1, u) => pe(void 0, null, function*() {
                var ue, ye, fe, ge, we, _, D, U, L, Ue, Se, $e, rt, ie, Ot, At, Pt, Rt, Lt, Ft, Ut, $t, Mt, Ht;
                if (!(m != null && m.trim())) return;
                const O = Qt(n, m);
                k({
                    eventName: R ? he.FLO_COUPON_ENTERED : he.FLO_COUPON_SELECTED,
                    eventType: "click",
                    metaData: {
                        couponData: {
                            coupon_code: m,
                            coupon_id: O || "NA"
                        }
                    }
                });
                const w = {
                    discount_code: m == null ? void 0 : m.trim()
                };
                try {
                    y ? W("LOADER") : _e(!0);
                    let j;
                    if (d) {
                        j = yield pt(`/checkout/${c}/discount${y?"?raise_on_removal=false":""}`, w, "KRATOS_PRIVATE");
                        const ne = yield it(`/checkout/${c}/discount`, "KRATOS_PRIVATE");
                        P(ne)
                    } else {
                        j = yield pt(`/checkout/${c}/discount${y?"?raise_on_removal=false":""}`, w, "KRATOS_PUBLIC");
                        const ne = yield it(`/checkout/${c}/discount`, "KRATOS_PUBLIC");
                        P(ne)
                    }
                    if (!j) {
                        ke(s("coupon_not_found"));
                        return
                    }
                    if ((ue = j == null ? void 0 : j.metadata) != null && ue.show_discount_warning) {
                        me({
                            appliedCouponTitle: u,
                            showPopup: !!((ye = j == null ? void 0 : j.metadata) != null && ye.show_discount_warning),
                            appliedDiscountCode: m == null ? void 0 : m.trim(),
                            invalidDiscountCodes: (fe = j == null ? void 0 : j.metadata) != null && fe.invalid_discount_code && ((we = (ge = j == null ? void 0 : j.metadata) == null ? void 0 : ge.invalid_discount_code) != null && we.length) ? (_ = j == null ? void 0 : j.metadata) == null ? void 0 : _.invalid_discount_code : [],
                            invalidityReason: Fs((U = (D = j == null ? void 0 : j.metadata) == null ? void 0 : D.invalid_discount_reasons) != null && U.length ? (L = j == null ? void 0 : j.metadata) == null ? void 0 : L.invalid_discount_reasons : [])
                        }), y ? W("NONE") : _e(!1);
                        return
                    }
                    r === "checkout" && cs(ds.COUPONS_UPDATED, {}), I(m), G(""), te(""), X(ne => Pe(Ae({}, ne), {
                        status: !1,
                        message: ""
                    })), A(j), J(j), y ? W("NONE") : _e(!1);
                    const Ce = Us(j == null ? void 0 : j.discounts),
                        Ct = (Ue = j == null ? void 0 : j.discounts) == null ? void 0 : Ue.some(ne => {
                            var Vt, Kt, Gt;
                            return ((Vt = ne == null ? void 0 : ne.coupon_metadata) == null ? void 0 : Vt.coupon_type) === _t.BXGY && ((Kt = ne == null ? void 0 : ne.cart_alterations) == null ? void 0 : Kt.some(tt => {
                                var Yt;
                                return (tt == null ? void 0 : tt.type) === "SHOW_PRODUCT_SELECTOR" && ((Yt = tt == null ? void 0 : tt.product_details) == null ? void 0 : Yt.length) > 0
                            })) && !!(ne != null && ne.selected_items) && ((Gt = ne == null ? void 0 : ne.selected_items) == null ? void 0 : Gt.length) === 0
                        });
                    (Se = Ce == null ? void 0 : Ce.items) != null && Se.length && (Ce == null ? void 0 : Ce.totalItems) > (Ce == null ? void 0 : Ce.totalSelectedItems) && Ct ? T("FREE_GIFTS") : (T("NONE"), W("NONE"), E(!0));
                    const Qe = (rt = ($e = j == null ? void 0 : j.pricing) == null ? void 0 : $e.serviceable) != null ? rt : !1;
                    if (d && !Qe && r !== "cart") {
                        b === "PAYMENTS" && v !== "PAYMENTS" && re("ADDRESS_LIST"), b === "PAYMENTS" && v === "PAYMENTS" && W("ADDRESS_LIST"), ke(s("serviceability_error"), 5e3);
                        return
                    }
                    const ft = (ie = j == null ? void 0 : j.metadata) == null ? void 0 : ie.available_shipping_handles,
                        _s = (At = (Ot = j == null ? void 0 : j.metadata) == null ? void 0 : Ot.show_shipping_handle_selector) != null ? At : !1;
                    q(ft), ft.length > 0 && _s && b === "PAYMENTS" && v !== "PAYMENTS" ? W("SHIPPING_HANDLES") : (z(), ve([`/checkout/${c}/rewards`, ct.KRATOS_PRIVATE]), ve("UPI_INTENT")), k({
                        eventName: he.FLO_COUPON_SUCCESS,
                        eventType: "flo_action",
                        metaData: {
                            couponData: {
                                coupon_code: m,
                                coupon_id: O || "NA"
                            }
                        }
                    })
                } catch (j) {
                    y ? W("NONE") : _e(!1);
                    const Ce = ((Rt = (Pt = j == null ? void 0 : j.response) == null ? void 0 : Pt.data) == null ? void 0 : Rt.error.code) === $s,
                        Ct = ($t = (Ut = (Ft = (Lt = j == null ? void 0 : j.response) == null ? void 0 : Lt.data) == null ? void 0 : Ft.error) == null ? void 0 : Ut.data) == null ? void 0 : $t.invalid_discount_codes;
                    Ce && me({
                        showPopup: !0,
                        appliedDiscountCode: m,
                        invalidDiscountCodes: Ct,
                        invalidityReason: "DISCOUNTS_NOT_COMBINABLE"
                    });
                    const Qe = (Ht = (Mt = j == null ? void 0 : j.response) == null ? void 0 : Mt.data) == null ? void 0 : Ht.error.message;
                    R ? X(ft => Pe(Ae({}, ft), {
                        status: !0,
                        message: Qe
                    })) : Ce || ke(Qe != null ? Qe : s("coupon_not_found")), k({
                        eventName: he.FLO_COUPON_FAILED,
                        eventType: "flo_action",
                        metaData: {
                            couponData: {
                                coupon_code: m,
                                coupon_id: O || "NA",
                                failed_reason: Qe
                            }
                        }
                    }), console.error(j)
                }
            }),
            Ze = m => pe(void 0, null, function*() {
                var y, u, O;
                if (!(a != null && a.find(w => (w == null ? void 0 : w.code) === m))) return;
                const R = {
                    discount_code: m
                };
                try {
                    _e(!0);
                    let w, ue;
                    d ? (w = yield Xt(`/checkout/${c}/discount`, R, "KRATOS_PRIVATE"), ue = yield it(`/checkout/${c}/discount`, "KRATOS_PRIVATE"), P(ue)) : (w = yield Xt(`/checkout/${c}/discount`, R, "KRATOS_PUBLIC"), ue = yield it(`/checkout/${c}/discount`, "KRATOS_PUBLIC"), P(ue)), A(w), J(w), _e(!1), w != null && w.discounts || te(""), w != null && w.items && Q(xs(w == null ? void 0 : w.items));
                    const ye = Qt(n, m);
                    k({
                        eventName: he.FLO_COUPON_REMOVED,
                        eventType: "flo_action",
                        metaData: {
                            couponData: {
                                coupon_code: m,
                                coupon_id: ye || "NA"
                            }
                        }
                    });
                    const fe = (y = w == null ? void 0 : w.metadata) == null ? void 0 : y.available_shipping_handles,
                        ge = (O = (u = w == null ? void 0 : w.metadata) == null ? void 0 : u.show_shipping_handle_selector) != null ? O : !1;
                    q(fe), fe.length > 0 && ge && b === "PAYMENTS" && v !== "PAYMENTS" ? W("SHIPPING_HANDLES") : (z(), ve([`/checkout/${c}/rewards`, ct.KRATOS_PRIVATE]), ve("UPI_INTENT"))
                } catch (w) {
                    _e(!1), ke(s("delete_discount_error")), console.error(w)
                }
            }),
            Xe = () => {
                me({
                    showPopup: !1,
                    appliedDiscountCode: "",
                    invalidDiscountCodes: [],
                    invalidityReason: "NONE"
                })
            };
        if (x && !(a != null && a.length)) return e.jsx(e.Fragment, {});
        if (N != null && N.includes("COUPON_INPUT") || !(g != null && g.isDiscountEnabled) && (a != null && a.length)) return e.jsx("div", {
            className: "rounded-2xl bg-yay-lighter",
            children: e.jsx(Et, {
                showAppliedCount: !0,
                showRewards: !0,
                savingItems: Be,
                couponDisplayType: (et = de()) != null ? et : "NONE",
                handleDeleteCoupon: Ze,
                parent: "CHECKOUT"
            })
        });
        const St = () => {
                var _, D, U, L, Ue, Se, $e, rt;
                const m = de() === "STRIP" && !!(n != null && n.length),
                    R = a == null ? void 0 : a.some(ie => ie.couponType === _t.PAYMENT_OFFER),
                    {
                        isReward: y,
                        couponRewardConfig: u,
                        rewardData: O,
                        discountValue: w,
                        title: ue,
                        code: ye
                    } = Ne || {},
                    ge = y && (u == null ? void 0 : u.walletType) === "TICKERTAPE" ? O == null ? void 0 : O.header : `${st(w)} ${s("savings")}`,
                    we = ((_ = M == null ? void 0 : M.coupon_details) == null ? void 0 : _.coupon_type) === _t.PAYMENT_OFFER ? s("save") : `${s("save")+" "+st(M==null?void 0:M.total_discount)}`;
                return m ? e.jsx("div", {
                    className: `isolate flex w-full flex-col !overflow-hidden rounded-2xl border-[2px] border-yay-light ${Me()?"text-yay-dark":"text-coal-dark"}`,
                    children: M && M ? e.jsxs("div", {
                        className: "relative flex h-[4.5rem] w-full flex-row space-x-1 items-center justify-between rounded-2xl bg-white cursor-pointer",
                        id: "flo_coupons_applied",
                        children: [e.jsx("div", {
                            className: `absolute z-10 left-0 top-0 h-full w-full animate-slide
              bg-gradient-to-l from-[#2b874a03] from-0% via-[#2c874a12] via-[#2c874a12] via-[#2c874a21] via-[#2c874a21] via-20% via-40% via-60% via-80% to-[#2c874a03] to-100% !bg-[length:30%_100%] !bg-no-repeat`
                        }), e.jsxs("div", {
                            className: "w-full z-20 flex space-x-1 py-3 pl-3",
                            onClick: () => {
                                W("DISCOUNT_LIST"), X(ie => Pe(Ae({}, ie), {
                                    status: !1,
                                    message: ""
                                }))
                            },
                            children: [e.jsx("div", {
                                className: "flex justify-start h-full text-yay-dark items-start py-0.5",
                                children: e.jsx(nt, {
                                    className: "h-4 min-h-4 w-4 min-w-4"
                                })
                            }), e.jsxs("div", {
                                className: "flex flex-col h-full space-y-[3px] justify-start items-start w-full",
                                children: [e.jsx("p", {
                                    className: "text-sm font-medium text-yay-dark",
                                    children: ((D = M == null ? void 0 : M.coupon_details) == null ? void 0 : D.coupon_type) === _t.REWARD_AS_DISCOUNT && ((L = (U = M == null ? void 0 : M.coupon_details) == null ? void 0 : U.coupon_reward_config) == null ? void 0 : L.wallet_type) === "TICKERTAPE" ? (Ue = M == null ? void 0 : M.coupon_details) == null ? void 0 : Ue.header : we
                                }), e.jsxs("p", {
                                    className: "pl-1 text-xs font-medium text-coal-dark",
                                    children: [e.jsx("span", {
                                        className: "text-coal-light font-normal",
                                        children: s("with")
                                    }), " '" + ((Se = M == null ? void 0 : M.coupon_details) != null && Se.title ? ($e = M == null ? void 0 : M.coupon_details) == null ? void 0 : $e.title : (rt = M == null ? void 0 : M.coupon_details) == null ? void 0 : rt.coupon_code) + "'"]
                                }), e.jsxs("div", {
                                    className: "pl-1 text-xs text-coal-dark font-medium flex items-end cursor-pointer",
                                    children: [e.jsx("span", {
                                        children: (Y == null ? void 0 : Y.shopflo) + (Y == null ? void 0 : Y.shopify) ? s("view_other_coupons") : s("enter_a_coupon_code")
                                    }), e.jsx(jt, {
                                        className: "w-3 h-3"
                                    })]
                                })]
                            })]
                        }), e.jsx("div", {
                            onClick: () => {
                                var ie;
                                return ze((ie = M == null ? void 0 : M.coupon_details) == null ? void 0 : ie.coupon_code)
                            },
                            className: "flex z-20 justify-start py-3 pr-3 items-start h-full w-[4.5rem]",
                            children: e.jsx("span", {
                                className: "text-xs font-medium text-yay-dark cursor-pointer rounded-lg px-3 py-2 border border-yay-dark bg-yay-lighter",
                                children: s("apply")
                            })
                        })]
                    }) : Ne && Ne ? e.jsxs("div", {
                        className: "relative flex h-[4.5rem] w-full flex-row space-x-1 items-center justify-between rounded-2xl bg-white cursor-pointer",
                        id: "flo_coupons_applied",
                        children: [e.jsxs("div", {
                            className: "w-full flex space-x-1 py-3 pl-3",
                            onClick: () => {
                                W("DISCOUNT_LIST"), X(ie => Pe(Ae({}, ie), {
                                    status: !1,
                                    message: ""
                                }))
                            },
                            children: [e.jsx("div", {
                                className: "flex justify-start h-full text-yay-dark items-start py-0.5",
                                children: e.jsx(nt, {
                                    className: "h-4 min-h-4 w-4 min-w-4"
                                })
                            }), e.jsxs("div", {
                                className: "flex flex-col h-full space-y-[3px] justify-start items-start w-full",
                                children: [R ? e.jsx("p", {
                                    className: "text-sm font-medium text-yay-dark",
                                    children: s("bank_offer_applied")
                                }) : e.jsxs(e.Fragment, {
                                    children: [e.jsx("p", {
                                        className: "text-sm font-medium text-yay-dark",
                                        children: ge
                                    }), e.jsxs("p", {
                                        className: "pl-1 text-xs font-medium text-yay-dark inline-flex gap-1 items-center",
                                        children: [e.jsx("span", {
                                            className: "text-coal-light font-normal",
                                            children: s("with")
                                        }), " '" + (ue || ye) + "'", e.jsx(ma, {
                                            className: "-ml-[3px] h-3.5 w-3.5",
                                            strokeWidth: 2.75
                                        })]
                                    })]
                                }), e.jsxs("div", {
                                    className: "pl-1 text-xs text-coal-dark font-medium flex items-end cursor-pointer",
                                    children: [e.jsx("span", {
                                        children: (Y == null ? void 0 : Y.shopflo) + (Y == null ? void 0 : Y.shopify) ? s("view_other_coupons") : s("enter_a_coupon_code")
                                    }), e.jsx(jt, {
                                        className: "w-3 h-3"
                                    })]
                                })]
                            })]
                        }), Ne != null && Ne.isRemovable ? e.jsx("div", {
                            onClick: () => Ze(Ne == null ? void 0 : Ne.code),
                            className: "flex justify-start py-3 pr-3 items-start h-full w-[4.5rem]",
                            children: e.jsx("span", {
                                className: "text-sm font-semibold text-yay-dark cursor-pointer rounded-lg py-2",
                                children: s("remove")
                            })
                        }) : e.jsx("div", {
                            className: "flex justify-start py-3 pr-3 items-start h-full w-[4.5rem]",
                            onClick: () => {
                                W("DISCOUNT_LIST"), X(ie => Pe(Ae({}, ie), {
                                    status: !1,
                                    message: ""
                                }))
                            },
                            children: e.jsx("span", {
                                className: "text-sm font-semibold text-yay-dark cursor-pointer rounded-lg py-2",
                                children: s("coupon_applied")
                            })
                        })]
                    }) : e.jsxs("div", {
                        className: "relative flex h-[3.25rem] w-full	cursor-pointer flex-row items-center justify-between  rounded-2xl bg-white px-3 py-4",
                        id: "flo_coupons_select",
                        onClick: () => {
                            W("DISCOUNT_LIST"), X(ie => Pe(Ae({}, ie), {
                                status: !1,
                                message: ""
                            }))
                        },
                        children: [Me() && e.jsx("div", {
                            className: `absolute left-0 top-0 h-full w-full animate-slide
              bg-gradient-to-l from-[#2b874a03] from-0% via-[#2c874a12] via-[#2c874a12] via-[#2c874a21] via-[#2c874a21] via-20% via-40% via-60% via-80% to-[#2c874a03] to-100% !bg-[length:30%_100%] !bg-no-repeat`
                        }), e.jsxs(e.Fragment, {
                            children: [e.jsxs("div", {
                                className: "flex w-3/5 items-start space-x-2 ",
                                children: [e.jsx(nt, {
                                    className: "h-4 w-4",
                                    strokeWidth: 2.5
                                }), e.jsx("div", {
                                    className: "flex flex-col ",
                                    children: e.jsx("h3", {
                                        className: "text-sm font-medium",
                                        children: s("coupons")
                                    })
                                })]
                            }), (Y == null ? void 0 : Y.shopflo) > 0 && e.jsx("div", {
                                className: "ml-auto pr-1 text-sm font-normal text-yay-dark",
                                children: s("x_symbol_available", {
                                    count: Y == null ? void 0 : Y.shopflo,
                                    symbol: (Y == null ? void 0 : Y.shopify) > 0 ? "+" : ""
                                })
                            }), e.jsx(Dt, {
                                className: "h-4 w-4"
                            })]
                        })]
                    })
                }) : e.jsxs("div", {
                    className: `border-box relative flex w-full gap-1.5 px-0 ${!(n!=null&&n.length)&&(a!=null&&a.length),""}`,
                    "data-sentry-component": "renderCoupons",
                    "data-sentry-source-file": "Coupons.tsx",
                    children: [e.jsx(nt, {
                        className: "absolute top-[18px] left-4 z-10 h-4 w-4 text-coal-dark",
                        strokeWidth: 2.5,
                        "data-sentry-element": "Tag",
                        "data-sentry-source-file": "Coupons.tsx"
                    }), e.jsx(hs, {
                        type: "text",
                        placeholder: s("enter_coupon_code"),
                        name: "coupon-code",
                        id: "coupon-code",
                        maxLength: 50,
                        autoComplete: "off",
                        autoFocus: !1,
                        value: ee,
                        onChange: ie => te(ie.target.value.trim()),
                        onKeyDown: ie => ie.key === "Enter" && ze(ee, !0),
                        customClass: `h-[3.25rem] border border-gray-light !rounded-2xl  placeholder-gray-dark text-sm font-normal text-coal-light w-full !pl-[2.4rem]  ${ee!=null&&ee.length?"!rounded-r-lg":""}`,
                        showLabel: !1,
                        tabIndex: -1,
                        error: Z,
                        "data-sentry-element": "InputField",
                        "data-sentry-source-file": "Coupons.tsx"
                    }), !!(ee != null && ee.length) && e.jsx(Ge, {
                        buttonText: "",
                        height: "h-12",
                        width: "",
                        customClass: "flex items-center justify-center rounded-l-lg  w-14 rounded-2xl bg-primary-dark",
                        iconComponent: e.jsx(Dt, {
                            className: "h-4 w-4 text-btnPrimaryText"
                        }),
                        onClick: () => ze(ee, !0)
                    })]
                })
            },
            mt = () => {
                var m, R;
                return e.jsx(Et, {
                    showAppliedCount: !0,
                    showRewards: !0,
                    showSavings: de() === "STRIP" && !(n != null && n.length) || de() !== "STRIP" || !((m = g == null ? void 0 : g.discountSettings) != null && m.showMaxDiscount) || !!(de() === "STRIP" && (a != null && a.length) && (M || (a == null ? void 0 : a.length) > 1 || Be.manualFreebieCount)),
                    showAppliedCoupons: !!(de() === "STRIP" && (a != null && a.length) && (!(n != null && n.length) && (a == null ? void 0 : a.length) > 0 || M || (a == null ? void 0 : a.length) > 1 || Be.manualFreebieCount)),
                    savingItems: Be,
                    couponDisplayType: (R = de()) != null ? R : "NONE",
                    handleDeleteCoupon: Ze,
                    showIcon: !0,
                    "data-sentry-element": "CouponSummaryStrip",
                    "data-sentry-component": "renderCouponSummaryStrip",
                    "data-sentry-source-file": "Coupons.tsx"
                })
            },
            lt = !!de() && !x,
            Oe = !!(a != null && a.length) && !kt(a);
        return e.jsxs(e.Fragment, {
            children: [e.jsx(es, {
                loading: F,
                "data-sentry-element": "AnimateLoading",
                "data-sentry-source-file": "Coupons.tsx",
                children: e.jsx(es.Content, {
                    "data-sentry-element": "unknown",
                    "data-sentry-source-file": "Coupons.tsx",
                    children: e.jsxs(e.Fragment, {
                        children: [(lt || Oe) && e.jsx("div", {
                            className: "flex w-full flex-row  items-center justify-between text-xs mt-3 mb-3",
                            children: e.jsx("h2", {
                                className: "text-sm font-medium text-coal-light",
                                children: s("offers_and_rewards")
                            })
                        }), lt && St(), Oe && mt()]
                    })
                })
            }), !!t && e.jsx(Xs, {
                isOpen: !0,
                closePopup: () => {
                    E(!1), I(""), G("")
                },
                appliedCouponCode: V,
                incomingCouponCode: K
            }), e.jsx(at, {
                isOpen: $ == null ? void 0 : $.showPopup,
                translateAxis: "y",
                customClass: "overflow-scroll md:!top-auto md:absolute",
                dialogOverlay: !0,
                modalType: "REPLACE_COUPON",
                "data-sentry-element": "GenericDialog",
                "data-sentry-source-file": "Coupons.tsx",
                children: e.jsx(Sa, {
                    appliedDiscountCode: (ut = $ == null ? void 0 : $.appliedCouponTitle) != null ? ut : $.appliedDiscountCode,
                    invalidDiscountCodes: $ == null ? void 0 : $.invalidDiscountCodes,
                    closePopup: Xe,
                    applyCoupon: () => pe(void 0, null, function*() {
                        Xe(), yield ze($ == null ? void 0 : $.appliedDiscountCode, !1, !0)
                    }),
                    invalidReason: $ == null ? void 0 : $.invalidityReason,
                    "data-sentry-element": "SwitchCouponDialog",
                    "data-sentry-source-file": "Coupons.tsx"
                })
            }), e.jsx(Ca, {
                title: s("replacing_coupons"),
                "data-sentry-element": "LoaderDialog",
                "data-sentry-source-file": "Coupons.tsx"
            }), De && e.jsx(xt, {}), e.jsx(at, {
                isOpen: o === "DISCOUNT_LIST",
                setIsOpen: m => {
                    W(m ? "DISCOUNT_LIST" : "NONE")
                },
                translateAxis: "x",
                modalType: "DISCOUNT_LIST",
                "data-sentry-element": "GenericDialog",
                "data-sentry-source-file": "Coupons.tsx",
                children: e.jsx(wa, {
                    setOpenDialog: () => {
                        W("NONE")
                    },
                    handleDiscountApply: ze,
                    handleDeleteCoupon: Ze,
                    isCouponsLoading: F,
                    couponApplyError: Z,
                    setCouponApplyError: X,
                    savingItems: Be,
                    couponDisplayType: (ht = de()) != null ? ht : "NONE",
                    "data-sentry-element": "CouponDialog",
                    "data-sentry-source-file": "Coupons.tsx"
                })
            }), e.jsx(Qs, {
                position: r,
                "data-sentry-element": "DiscountedProductSelectorPopup",
                "data-sentry-source-file": "Coupons.tsx"
            })]
        })
    },
    qa = ({
        selectedEmail: r,
        setSelectedEmail: l,
        emails: s,
        onSubmit: i,
        setIsOpen: p,
        title: a,
        error: c,
        setError: n,
        loyaltyData: x
    }) => {
        const {
            t: o
        } = oe(), [b, v] = f.useState(""), H = () => {
            p(!1), l(x == null ? void 0 : x.email), n(!1)
        }, C = h => {
            v(h.target.value), l(h.target.value), n(!1)
        }, S = h => {
            l(h != null ? h : ""), n(!1)
        };
        return e.jsxs(e.Fragment, {
            children: [e.jsx(Fe, {
                "data-sentry-element": "DialogHeader",
                "data-sentry-source-file": "EmailSelector.tsx",
                children: e.jsxs("div", {
                    className: "flex h-full w-full flex-row items-center justify-between ",
                    children: [e.jsx("div", {
                        className: "items-left flex flex-col justify-center gap-1",
                        children: e.jsx("h1", {
                            className: "text-carbon -mx-3",
                            children: a != null ? a : o("change_email")
                        })
                    }), e.jsx("button", {
                        className: "-mx-3 outline-none",
                        children: e.jsx(We, {
                            className: "h-6 w-6 cursor-pointer text-coal-dark",
                            onClick: H,
                            "data-sentry-element": "X",
                            "data-sentry-source-file": "EmailSelector.tsx"
                        })
                    })]
                })
            }), e.jsxs(Ee, {
                className: "overflow-x-hidden",
                "data-sentry-element": "DialogBody",
                "data-sentry-source-file": "EmailSelector.tsx",
                children: [e.jsx("ul", {
                    className: "-mx-3 flex flex-col gap-2 ",
                    children: s == null ? void 0 : s.map(h => e.jsx("li", {
                        className: `mx-5 flex cursor-pointer items-center justify-between rounded-2xl border px-3 py-4 text-sm ${r===h?"border-2 border-primary-dark px-[11px] py-[15px] text-coal-dark":"text-coal-light"}`,
                        onClick: () => S(h != null ? h : ""),
                        children: h
                    }, h))
                }), e.jsx("div", {
                    className: "my-2",
                    children: e.jsx(Js, {
                        title: "OR",
                        "data-sentry-element": "Seperator",
                        "data-sentry-source-file": "EmailSelector.tsx"
                    })
                }), e.jsxs("div", {
                    className: "mx-3",
                    children: [e.jsx("input", {
                        type: "email",
                        id: "email",
                        value: b,
                        onChange: C,
                        onFocus: () => {
                            l("")
                        },
                        placeholder: o("enter_new_email"),
                        className: `flex w-full cursor-pointer items-center justify-between rounded-2xl border px-3 py-4 text-sm outline-0 focus:border-[1px] focus:border-primary-dark focus:px-[12px] focus:py-[16px] focus:text-coal-dark focus:ring-[2px] focus:ring-primary-light ${c?"border-ouch":""}`
                    }), c ? e.jsxs("div", {
                        className: "mt-1 flex items-center gap-1",
                        children: [e.jsx(ua, {
                            className: "-mt-[1px] h-3 w-3 shrink-0 text-ouch"
                        }), e.jsx("label", {
                            htmlFor: "email",
                            className: "bg-transparent text-xs font-normal text-ouch transition-all peer-focus:hidden",
                            children: o("valid_email")
                        })]
                    }) : e.jsx("div", {
                        className: "mt-1 h-4"
                    })]
                })]
            }), e.jsx(wt, {
                className: "pb-16",
                "data-sentry-element": "DialogFooter",
                "data-sentry-source-file": "EmailSelector.tsx",
                children: e.jsx(Le, {
                    buttonText: o("use_this_email"),
                    type: "submit",
                    onClick: i,
                    height: "h-14",
                    isLoading: !1,
                    isDisabled: !1,
                    "data-sentry-element": "PrimaryButton",
                    "data-sentry-source-file": "EmailSelector.tsx"
                })
            })]
        })
    },
    za = ({
        context: r = "checkout"
    }) => {
        const {
            state: {
                isC2P: l,
                checkoutLoading: s
            }
        } = xe(), {
            state: {
                mode: i,
                isTileLoading: p
            }
        } = Ms(), a = () => {
            switch (i) {
                case yt.LOYALTY:
                    return e.jsx(sa, {
                        context: r
                    });
                case yt.REWARDS_WALLET:
                    return e.jsx(ta, {
                        context: r
                    });
                default:
                    return e.jsx(e.Fragment, {})
            }
        };
        return e.jsx(ts, {
            isChildVisible: i !== yt.NONE && !l,
            loading: r === "cart" ? p : p || s,
            "data-sentry-element": "AnimateExit",
            "data-sentry-component": "Rewards",
            "data-sentry-source-file": "Rewards.tsx",
            children: e.jsx(ts.Content, {
                motionProps: {
                    className: i === yt.NONE ? "!mt-0 hidden" : ""
                },
                "data-sentry-element": "unknown",
                "data-sentry-source-file": "Rewards.tsx",
                children: a()
            })
        })
    },
    Xa = () => {
        var S;
        const {
            t: r
        } = oe(), {
            state: {
                checkoutItems: l,
                combinedProductRemovalItems: s,
                billing: i
            },
            actions: {
                setCheckoutModal: p
            }
        } = xe(), [a] = It(), c = ((S = a.get("page")) == null ? void 0 : S.toLowerCase()) === "cart", n = f.useMemo(() => l == null ? void 0 : l.find(h => {
            var N;
            return h.item_id === ((N = s == null ? void 0 : s.selectedItem) == null ? void 0 : N.id)
        }), [l, s]), x = f.useMemo(() => l == null ? void 0 : l.filter(h => {
            var N;
            return (N = s == null ? void 0 : s.removableVariantIds) == null ? void 0 : N.some(T => (T == null ? void 0 : T.variant_id) === (h == null ? void 0 : h.variant_id))
        }), [l, s]), {
            handleItemDeleteSubmit: o,
            isLoading: b
        } = bt({
            item_id: n == null ? void 0 : n.item_id,
            quantity: n == null ? void 0 : n.quantity,
            availableQuantity: n == null ? void 0 : n.availableQuantity,
            isCartItem: c,
            variant_id: n == null ? void 0 : n.variant_id,
            billing: i
        }), v = f.useMemo(() => {
            const h = l == null ? void 0 : l.filter(N => !N.is_freebie);
            return l.length <= 1 || h.length - (x == null ? void 0 : x.length) === 1
        }, [l, x]), H = () => pe(void 0, null, function*() {
            try {
                yield o(v, !0)
            } catch (h) {
                console.error(h), ke(r("combined_products_removal_dialog_error"))
            } finally {
                p("NONE")
            }
        }), C = (x == null ? void 0 : x.length) || 0;
        return e.jsxs("div", {
            "data-sentry-component": "CombinedProductsRemovalDialog",
            "data-sentry-source-file": "CombinedProductsRemovalDialog.tsx",
            children: [e.jsx(Fe, {
                "data-sentry-element": "DialogHeader",
                "data-sentry-source-file": "CombinedProductsRemovalDialog.tsx",
                children: e.jsxs("div", {
                    className: "flex h-full w-full flex-row items-center justify-between",
                    children: [e.jsx("h1", {
                        className: "text-base font-semibold mt-1 text-carbon-dark",
                        children: r("combined_products_removal_dialog_header")
                    }), e.jsx("button", {
                        className: "outline-none",
                        children: e.jsx(We, {
                            className: "h-6 w-6 cursor-pointer text-coal-dark",
                            onClick: () => p("NONE"),
                            "data-sentry-element": "X",
                            "data-sentry-source-file": "CombinedProductsRemovalDialog.tsx"
                        })
                    })]
                })
            }), e.jsx(Ee, {
                "data-sentry-element": "DialogBody",
                "data-sentry-source-file": "CombinedProductsRemovalDialog.tsx",
                children: e.jsxs("div", {
                    className: "relative flex w-full flex-col space-y-6 px-6",
                    children: [e.jsxs("div", {
                        className: "flex items-start space-x-3",
                        children: [e.jsx("span", {
                            className: "mt-0.5 rounded-full bg-orange-100 p-1",
                            children: e.jsx(ha, {
                                className: "h-5 w-5 cursor-pointer text-orange-600",
                                "data-sentry-element": "AlertTriangle",
                                "data-sentry-source-file": "CombinedProductsRemovalDialog.tsx"
                            })
                        }), e.jsxs("div", {
                            className: "text-sm text-carbon-dark",
                            children: [e.jsx("span", {
                                className: "font-semibold",
                                children: r(C === 1 ? "combined_products_removal_dialog_items_cannot_be_purchased_one" : "combined_products_removal_dialog_items_cannot_be_purchased_other")
                            }), " ", e.jsx("span", {
                                className: "font-semibold",
                                children: n == null ? void 0 : n.item_title
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "rounded-lg bg-red-50 p-4 text-sm",
                        children: [e.jsx("span", {
                            className: "font-semibold text-red-700",
                            children: r(C === 1 ? "combined_products_removal_dialog_items_will_be_removed_one" : "combined_products_removal_dialog_items_will_be_removed_other")
                        }), " ", e.jsx("span", {
                            className: "text-red-700",
                            children: r("combined_products_removal_dialog_maintain_offer_integrity")
                        })]
                    }), e.jsx("div", {
                        className: "max-h-[300px] overflow-y-auto",
                        children: e.jsx(Bt, {
                            items: x,
                            checkoutItemsMutable: !1,
                            "data-sentry-element": "CheckoutItems",
                            "data-sentry-source-file": "CombinedProductsRemovalDialog.tsx"
                        })
                    }), e.jsxs("div", {
                        className: "flex flex-col gap-3",
                        children: [e.jsx(Le, {
                            buttonText: r(v ? "remove_last_item_dialog_cta" : "remove_item_dialog_cta"),
                            onClick: H,
                            height: "h-14",
                            isLoading: b,
                            isDisabled: !1,
                            "data-sentry-element": "PrimaryButton",
                            "data-sentry-source-file": "CombinedProductsRemovalDialog.tsx"
                        }), e.jsx(Le, {
                            buttonText: r("keep_existing"),
                            onClick: () => p("NONE"),
                            height: "h-14",
                            className: "bg-white text-coal-dark border-2 border-coal-dark",
                            isLoading: !1,
                            isDisabled: !1,
                            "data-sentry-element": "PrimaryButton",
                            "data-sentry-source-file": "CombinedProductsRemovalDialog.tsx"
                        })]
                    })]
                })
            })]
        })
    },
    Qa = ({
        sub_total: r,
        total_payable: l,
        discount: s,
        shipping: i,
        tax: p,
        taxes_included: a,
        serviceable: c,
        prepaid_discount: n,
        prepaid_total: x,
        original_sub_total: o,
        addon_total: b
    }) => {
        const {
            t: v
        } = oe(), {
            state: {
                merchant: H
            }
        } = Ye(), {
            state: {
                shippingHandles: C,
                appliedGiftCards: S,
                appliedWalletData: h,
                appliedLoyalty: N,
                initialCheckoutStep: T,
                billing: A
            },
            actions: {
                setCheckoutModal: P
            }
        } = xe(), [Q, W] = f.useState("");
        f.useEffect(() => {
            var J;
            const q = ot(C);
            q && W((J = q == null ? void 0 : q.handle_name) != null ? J : "")
        }, [C]);
        const re = () => {
            P("SHIPPING_HANDLES")
        };
        return e.jsx(e.Fragment, {
            children: e.jsxs("ul", {
                className: "flex w-full flex-col space-y-1 px-4 pb-4",
                children: [e.jsxs("li", {
                    className: "flex flex-row justify-between text-xs",
                    children: [e.jsx("p", {
                        className: "font-semibold text-coal-light",
                        children: v("subtotal")
                    }), e.jsx("p", {
                        className: "font-medium text-coal-dark",
                        children: e.jsx(je, {
                            total: H != null && H.showOriginalPrice ? o + b : r + b,
                            "data-sentry-element": "Price",
                            "data-sentry-source-file": "BillingDetails.tsx"
                        })
                    })]
                }), !!(H != null && H.showOriginalPrice) && !!(o - r) && o - r > 0 && e.jsxs("li", {
                    className: "flex flex-row justify-between text-xs",
                    children: [e.jsx("p", {
                        className: "font-semibold text-coal-light",
                        children: v("discount_on_mrp")
                    }), e.jsx("p", {
                        className: "inline-flex font-medium text-yay-dark",
                        children: e.jsx(je, {
                            total: o - r,
                            isDiscounted: !0
                        })
                    })]
                }), e.jsxs(e.Fragment, {
                    children: [e.jsxs("li", {
                        className: "flex flex-row justify-between text-xs",
                        children: [e.jsx("p", {
                            className: "font-semibold text-coal-light",
                            children: v("shipping")
                        }), e.jsx("p", {
                            className: `font-regular text-gray-dark ${i!==-1&&"font-normal uppercase"}`,
                            children: i === -1 ? v("calculated_at_next_step") : i === 0 ? v("free_shipping") : e.jsx(je, {
                                total: i != null ? i : ""
                            })
                        })]
                    }), i !== -1 && (C == null ? void 0 : C.length) > 1 && T !== "PAYMENTS" && e.jsxs("p", {
                        className: "text-xs text-coal-light",
                        children: [Q, " ", e.jsx("button", {
                            className: "font-semibold text-coal-dark underline",
                            onClick: re,
                            children: "Change"
                        })]
                    })]
                }), !a && !!p && e.jsxs("li", {
                    className: "flex flex-row justify-between text-xs",
                    children: [e.jsx("p", {
                        className: "font-semibold text-coal-light",
                        children: v("tax")
                    }), e.jsx("p", {
                        className: "font-medium text-coal-dark",
                        children: e.jsx(je, {
                            total: p != null ? p : ""
                        })
                    })]
                }), !!s && e.jsxs("li", {
                    className: "flex flex-row justify-between text-xs",
                    children: [e.jsx("p", {
                        className: "font-semibold text-coal-light",
                        children: v("discount")
                    }), e.jsx("p", {
                        className: "inline-flex font-medium text-yay-dark",
                        children: e.jsx(je, {
                            total: s != null ? s : "",
                            isDiscounted: !0
                        })
                    })]
                }), !!(S != null && S.length) && e.jsx(e.Fragment, {
                    children: S.map(q => {
                        var J;
                        return e.jsxs("li", {
                            className: "flex flex-row justify-between text-xs",
                            children: [e.jsx("p", {
                                className: "font-normal text-coal-light",
                                children: `${v("gift_card")} ${Hs(q==null?void 0:q.displayName,9,5,"•")}`
                            }), e.jsx("p", {
                                className: "font inline-flex font-medium text-yay-dark",
                                children: e.jsx(je, {
                                    total: (J = q.cardValue) != null ? J : "",
                                    isDiscounted: !0
                                })
                            })]
                        }, q == null ? void 0 : q.cardId)
                    })
                }), !!N && N.totalPoints > 0 && e.jsx(e.Fragment, {
                    children: e.jsxs("li", {
                        className: "flex flex-row justify-between text-xs",
                        children: [e.jsxs("p", {
                            className: "inline-flex items-center font-medium text-coal-light",
                            children: [v("redeem_x_coins", {
                                total: st(N == null ? void 0 : N.totalPoints, !1),
                                brand: N.provider === "POP_COINS" ? " " : v("default_wallet_currency")
                            }), N.provider === "POP_COINS" && e.jsxs("span", {
                                className: "inline-flex ml-0.5 items-center space-x-1",
                                children: [e.jsx("img", {
                                    src: ra,
                                    alt: "pop-coin",
                                    className: "w-4 h-4 rounded-full"
                                }), v("popcoins")]
                            })]
                        }), e.jsx("p", {
                            className: "font inline-flex font-medium text-yay-dark",
                            children: e.jsx(je, {
                                total: N == null ? void 0 : N.totalPrice,
                                isDiscounted: !0
                            })
                        })]
                    }, "applied_wallet")
                }), !!h && h.totalReducedPoints > 0 && e.jsxs("li", {
                    className: "flex flex-row justify-between text-xs",
                    children: [e.jsx("p", {
                        className: "font-medium text-coal-light",
                        children: v("redeem_x_coins", {
                            total: st(h == null ? void 0 : h.totalReducedPoints, !1),
                            brand: v("default_wallet_currency")
                        })
                    }), e.jsx("p", {
                        className: "font inline-flex font-medium text-yay-dark",
                        children: e.jsx(je, {
                            total: h == null ? void 0 : h.totalReductionAmount,
                            isDiscounted: !0
                        })
                    })]
                }, "applied_wallet"), !!(A != null && A.gift_card) && e.jsxs("li", {
                    className: "flex flex-row justify-between text-xs",
                    children: [e.jsx("p", {
                        className: "font-medium text-coal-light flex items-center",
                        children: v("epay_balance_applied")
                    }), e.jsx("p", {
                        className: "font inline-flex font-medium text-yay-dark",
                        children: e.jsx(je, {
                            customCSS: "",
                            total: A == null ? void 0 : A.gift_card,
                            isDiscounted: !0
                        })
                    })]
                }, "gift_card"), e.jsxs("li", {
                    className: "flex flex-row justify-between pt-4 text-base font-medium text-coal-dark",
                    children: [e.jsx("p", {
                        className: "text-sm",
                        children: v("total")
                    }), e.jsx("p", {
                        children: e.jsx(je, {
                            total: l != null ? l : "",
                            "data-sentry-element": "Price",
                            "data-sentry-source-file": "BillingDetails.tsx"
                        })
                    })]
                })]
            })
        })
    },
    ka = ({
        setIsOpen: r,
        handleLogout: l,
        setShowLogoutConfirmation: s
    }) => {
        const {
            t: i
        } = oe(), {
            state: {
                user: p
            }
        } = Tt(), {
            sendAnalyticsEvent: a
        } = Je();
        return e.jsxs(e.Fragment, {
            children: [e.jsx(Fe, {
                "data-sentry-element": "DialogHeader",
                "data-sentry-source-file": "Logout.tsx",
                children: e.jsxs("div", {
                    className: "flex w-full items-center justify-between text-base",
                    children: [e.jsx("h1", {
                        className: "font-medium text-carbon-dark",
                        children: i("logout_dialog_header")
                    }), e.jsx("button", {
                        className: "outline-none",
                        children: e.jsx(We, {
                            className: "h-6 w-6 cursor-pointer text-coal-dark",
                            onClick: () => r(!1),
                            "data-sentry-element": "X",
                            "data-sentry-source-file": "Logout.tsx"
                        })
                    })]
                })
            }), e.jsx(Ee, {
                "data-sentry-element": "DialogBody",
                "data-sentry-source-file": "Logout.tsx",
                children: e.jsxs("div", {
                    className: "mx-6 flex flex-col items-center gap-6 ",
                    children: [e.jsx("p", {
                        className: "text-sm text-gray-dark ",
                        children: i("logout_dialog_info", {
                            phone: p == null ? void 0 : p.phone
                        })
                    }), e.jsxs("div", {
                        className: "flex w-full flex-col gap-3",
                        children: [e.jsx(Ge, {
                            buttonText: i("yes_logout"),
                            height: "h-14",
                            customClass: "bg-primary-dark rounded-[12px] text-btnPrimaryText font-semibold",
                            onClick: l,
                            "data-sentry-element": "GenericButton",
                            "data-sentry-source-file": "Logout.tsx"
                        }), e.jsx(Ge, {
                            buttonText: i("no"),
                            height: "h-14",
                            customClass: "border-primary-dark border rounded-[12px] text-primary-dark font-semibold",
                            onClick: () => {
                                r(!1)
                            },
                            "data-sentry-element": "GenericButton",
                            "data-sentry-source-file": "Logout.tsx"
                        })]
                    }), e.jsx("p", {
                        className: "cursor-pointer text-sm font-medium text-coal-light underline",
                        onClick: () => {
                            s(!0), a({
                                eventName: he.FLO_ADDRESS_PRIVACY_CLICKED,
                                eventType: "click"
                            })
                        },
                        children: i("logout_dialog_footer")
                    })]
                })
            })]
        })
    },
    Ea = ({
        setIsOpen: r,
        handleLogout: l
    }) => {
        const {
            t: s
        } = oe(), {
            sendAnalyticsEvent: i
        } = Je();
        return e.jsxs(e.Fragment, {
            children: [e.jsx(Fe, {
                "data-sentry-element": "DialogHeader",
                "data-sentry-source-file": "LogoutConfirmtaion.tsx",
                children: e.jsxs("div", {
                    className: "flex w-full items-center justify-between text-base",
                    children: [e.jsx("h1", {
                        className: "font-medium text-carbon-dark",
                        children: s("logout_confirmation_dialog_header")
                    }), e.jsx("button", {
                        className: "outline-none",
                        children: e.jsx(We, {
                            className: "h-6 w-6 cursor-pointer text-coal-dark",
                            onClick: () => r(!1),
                            "data-sentry-element": "X",
                            "data-sentry-source-file": "LogoutConfirmtaion.tsx"
                        })
                    })]
                })
            }), e.jsx(Ee, {
                "data-sentry-element": "DialogBody",
                "data-sentry-source-file": "LogoutConfirmtaion.tsx",
                children: e.jsxs("div", {
                    className: "mx-6 flex flex-col items-center gap-6 ",
                    children: [e.jsxs("div", {
                        className: "flex flex-col gap-4 text-sm font-normal text-gray-dark",
                        children: [e.jsx("p", {
                            children: s("logout_confirmation_dialog_info1")
                        }), e.jsx("p", {
                            children: s("logout_confirmation_dialog_info2")
                        })]
                    }), e.jsxs("div", {
                        className: "flex w-full flex-col gap-3",
                        children: [e.jsx(Ge, {
                            buttonText: s("okay"),
                            height: "h-14",
                            customClass: "bg-primary-dark rounded-[12px] text-btnPrimaryText font-semibold",
                            onClick: () => {
                                i({
                                    eventName: he.FLO_EXIT_LOGOUT_CLICKED,
                                    eventType: "click"
                                }), r(!1)
                            },
                            "data-sentry-element": "GenericButton",
                            "data-sentry-source-file": "LogoutConfirmtaion.tsx"
                        }), e.jsx(Ge, {
                            buttonText: s("logout"),
                            height: "h-14",
                            customClass: "border-primary-dark  border rounded-[12px] text-primary-dark font-semibold",
                            onClick: l,
                            "data-sentry-element": "GenericButton",
                            "data-sentry-source-file": "LogoutConfirmtaion.tsx"
                        })]
                    }), e.jsx("a", {
                        className: "cursor-pointer text-sm font-medium text-coal-light underline",
                        href: "https://shopflo.com/privacy-policy?utm_source=shopflo-checkout&utm_medium=shopflo-checkout&utm_campaign=shopflo-checkout",
                        target: "_blank",
                        rel: "noreferrer",
                        onClick: () => i({
                            eventName: he.FLO_PRIVACY_POLICY,
                            eventType: "click"
                        }),
                        children: s("logout_confirmation_dialog_footer")
                    })]
                })
            })]
        })
    },
    Ja = ({
        setIsOpen: r,
        handleLogout: l
    }) => {
        const [s, i] = f.useState(!1);
        return e.jsx(e.Fragment, {
            children: s ? e.jsx(Ea, {
                setIsOpen: r,
                handleLogout: l
            }) : e.jsx(ka, {
                setIsOpen: r,
                handleLogout: l,
                setShowLogoutConfirmation: i
            })
        })
    },
    Za = ({
        showOrderSummaryTotalTxt: r
    }) => {
        const {
            state: {
                checkoutItems: l,
                billing: s
            }
        } = xe(), [i, p] = f.useState(""), [a, c] = f.useState(0), [n, x] = f.useState(!1);
        return f.useEffect(() => {
            if (!s) return;
            const o = Vs(l, s.total_payable, r),
                b = Ks(l) - Gs(i);
            typeof i == "string" && b && (c(b), x(!0)), setTimeout(() => x(!1), 1700), setTimeout(() => c(0), 2e3), p(o)
        }, [s, l]), e.jsxs("div", {
            className: "relative",
            "data-sentry-component": "CheckoutItemsCount",
            "data-sentry-source-file": "CheckoutItemsCount.tsx",
            children: [e.jsx(_a, {
                show: n,
                enter: "transition ease-out duration-700 transform",
                enterFrom: "opacity-0 -translate-y-2",
                enterTo: "opacity-100 translate-y-0",
                leave: "transition ease-in duration-300 transform",
                leaveFrom: "opacity-100 translate-y-0",
                leaveTo: "opacity-0 translate-y-2",
                className: "absolute w-max",
                "data-sentry-element": "Transition",
                "data-sentry-source-file": "CheckoutItemsCount.tsx",
                children: e.jsx("span", {
                    className: `rounded-[4px] ${a>0?"bg-yay-lighter px-1 text-yay-dark":"bg-white"}`,
                    children: `${a>0?"+":""}${a} ${a>1||a<-1?"items":"item"}`
                })
            }), e.jsx("span", {
                className: `${n?"opacity-0":"opacity-100"}`,
                children: i
            })]
        })
    },
    el = ({
        isInvalidUser: r
    }) => {
        const {
            t: l
        } = oe(), {
            actions: {
                logout: s
            }
        } = dt();
        return e.jsx("div", {
            className: "flex h-full w-full flex-col justify-center",
            "data-sentry-component": "CheckoutExpired",
            "data-sentry-source-file": "CheckoutExpired.tsx",
            children: e.jsxs("div", {
                className: "flex flex-col items-center space-y-3 rounded-xl border border-[#EFD080] bg-[#FDFBF6] py-4 px-2",
                children: [e.jsx("img", {
                    src: ia,
                    alt: "expire",
                    className: "h-8 w-8"
                }), e.jsxs("div", {
                    className: "w-full space-y-2 text-center",
                    children: [e.jsx("h2", {
                        className: "text-medium font-semibold text-carbon-dark",
                        children: l(r ? "invalid_user" : "link_expired")
                    }), e.jsx("p", {
                        className: "text-sm text-coal-light",
                        children: l(r ? "invalid_user_description" : "link_expired_description")
                    }), r && e.jsx("div", {
                        className: "",
                        children: e.jsx(Le, {
                            buttonText: "Logout",
                            className: "w-full mt-4",
                            onClick: () => {
                                s(), window.location.href = window.location.href
                            }
                        })
                    })]
                })]
            })
        })
    },
    tl = () => {
        const {
            t: r
        } = oe(), {
            state: {
                merchant: l
            }
        } = Ye(), {
            state: {
                oosItems: s,
                checkoutId: i,
                isC2P: p,
                actionUrls: a
            },
            actions: {
                setShippingHandles: c,
                setCheckoutView: n,
                setCheckoutModal: x,
                setCheckoutItems: o,
                updateCheckoutBasedOnCheckoutResponse: b
            }
        } = xe(), {
            state: {
                isAuthenticated: v
            }
        } = dt(), {
            actions: {
                mutatePayment: H
            }
        } = Nt(), [C, S] = f.useState(!1), h = () => pe(void 0, null, function*() {
            var T, A, P, Q, W, re, q, J, d, B;
            try {
                S(!0);
                const g = yield Ys(`/checkout/v2/checkout/${i}/checkout-items`, {});
                ve(p ? null : i && v ? [`/checkout/${i}/discount`, "KRATOS_PRIVATE"] : [`/checkout/${i}/discount`, "KRATOS_PUBLIC"]), ve([`/checkout/${i}/rewards`, ct.KRATOS_PRIVATE]), H();
                const z = xs(g.items);
                if (o(z), N(g), !((T = g == null ? void 0 : g.pricing) != null && T.serviceable)) {
                    ke(r("serviceability_error"), 5e3), n("ADDRESS_LIST");
                    return
                }
                if (S(!1), !((P = (A = g == null ? void 0 : g.pricing) == null ? void 0 : A.serviceable) != null ? P : !1)) {
                    ke(r("serviceability_error"), 5e3);
                    return
                }
                const te = (W = (Q = g == null ? void 0 : g.metadata) == null ? void 0 : Q.show_shipping_handle_selector) != null ? W : !1,
                    k = (q = (re = g == null ? void 0 : g.metadata) == null ? void 0 : re.available_shipping_handles) != null ? q : [];
                if (c(k), k.length > 0 && te) {
                    x("SHIPPING_HANDLES");
                    return
                }
                if ((B = (d = (J = g == null ? void 0 : g.metadata) == null ? void 0 : J.action_urls) == null ? void 0 : d[le.ADDRESS_SELECT]) != null && B.success_url) {
                    Re(g.metadata.action_urls[le.ADDRESS_SELECT].success_url);
                    return
                }
                if (a && a[le.ADDRESS_SELECT] && a[le.ADDRESS_SELECT].success_url) {
                    Re(a[le.ADDRESS_SELECT].success_url);
                    return
                }
                x("NONE"), n("PAYMENTS")
            } catch (g) {
                console.error(g), S(!1), x("NONE"), l && Re(`${l.brandUrl}/?floRedirectStatus=oos`)
            }
        }), N = T => {
            b(T)
        };
        return s != null && s.length ? e.jsxs(e.Fragment, {
            children: [e.jsx(Ee, {
                className: "!px-3 !pt-9",
                "data-sentry-element": "DialogBody",
                "data-sentry-source-file": "OOSDialog.tsx",
                children: e.jsxs("div", {
                    className: "flex flex-col items-center",
                    children: [e.jsx("img", {
                        src: na,
                        alt: "oos_leaf",
                        className: "h-10 w-10"
                    }), e.jsx("h1", {
                        className: "pt-6 text-xl font-medium text-carbon-dark",
                        children: r("oos_body_header")
                    }), e.jsx("p", {
                        className: "pt-2 pb-3 text-sm text-coal-dark",
                        children: r("oos_body_subheader")
                    }), !!s && e.jsx(Bt, {
                        items: s != null ? s : [],
                        disableOOSItems: !0
                    })]
                })
            }), e.jsx(wt, {
                "data-sentry-element": "DialogFooter",
                "data-sentry-source-file": "OOSDialog.tsx",
                children: e.jsx(Le, {
                    buttonText: r("oos_cta"),
                    onClick: h,
                    height: "h-14 mb-12",
                    isCheckout: !1,
                    "data-sentry-element": "PrimaryButton",
                    "data-sentry-source-file": "OOSDialog.tsx"
                })
            }), C && e.jsx(xt, {})]
        }) : e.jsx(e.Fragment, {})
    },
    sl = ({
        loadPayments: r
    }) => {
        var q, J;
        const {
            t: l
        } = oe(), {
            state: {
                shippingHandles: s,
                checkoutId: i,
                checkoutView: p,
                actionUrls: a,
                checkoutUIMetadata: c,
                activeComponent: n,
                hiddenElements: x,
                initialCheckoutStep: o
            },
            actions: {
                updateCheckoutBasedOnCheckoutResponse: b,
                setShippingHandles: v,
                setActiveComponent: H
            }
        } = xe(), {
            state: {
                user: C
            }
        } = Tt(), {
            sendAnalyticsEvent: S
        } = Je(), {
            actions: {
                mutatePayment: h
            }
        } = Nt(), {
            state: {
                checkoutMetadata: N
            }
        } = ns(), [T, A] = f.useState({
            id: "",
            handle_name: "",
            price: "",
            selected_handle: !1,
            cod_enabled: !1,
            cod_extra_price: "0",
            online_enabled: !0
        }), P = f.useRef(null);
        f.useEffect(() => {
            var B;
            S({
                eventName: he.FLO_SHIPPING_HANDLES_LOADED,
                eventType: "load",
                metaData: {
                    shippingData: {
                        availableHandles: s
                    }
                }
            });
            const d = (B = ot(s)) != null ? B : null;
            d ? d.selected_handle ? r() : Q(d, !0) : r()
        }, []), f.useEffect(() => (n === "SHIPPING_SECTION" && (P.current.openAccordion(), P.current.scrollIntoView()), () => {
            H("NONE")
        }), [n]), f.useEffect(() => {
            if (!s.length) return;
            const d = ot(s);
            d && A(d)
        }, [s]);
        const Q = (d, B = !1) => pe(void 0, null, function*() {
                d.id && (S({
                    eventName: he.FLO_SHIPPING_HANDLE_SELECTED,
                    eventType: "click",
                    metaData: {
                        shippingData: {
                            availableHandles: s,
                            selectedHandle: d,
                            isCod: !1
                        }
                    }
                }), yield W(d, B), B && r())
            }),
            W = (d, B = !1) => pe(void 0, null, function*() {
                var ee, te, k, De, _e;
                const g = {
                        shipping_handle: d.id
                    },
                    z = T;
                try {
                    A(d);
                    const t = yield pt(`/checkout/${i}/shipping-handle`, g, "KRATOS_PRIVATE");
                    re(t);
                    const E = ot((ee = t == null ? void 0 : t.metadata) == null ? void 0 : ee.available_shipping_handles);
                    if (E ? A(E) : (A(z), ke(l("something_went_wrong"))), p === "PAYMENTS" && !B) {
                        h(), ve([`/checkout/${i}/rewards`, ct.KRATOS_PRIVATE]), (te = c == null ? void 0 : c.upsellConfig) != null && te.isEnabled && ve(`/v1/checkout/${i}/upsell`), ve("UPI_INTENT");
                        return
                    }
                    if ((_e = (De = (k = t == null ? void 0 : t.metadata) == null ? void 0 : k.action_urls) == null ? void 0 : De[le.ADDRESS_SELECT]) != null && _e.success_url) {
                        Re(t.metadata.action_urls[le.ADDRESS_SELECT].success_url);
                        return
                    }
                    if (a && a[le.ADDRESS_SELECT] && a[le.ADDRESS_SELECT].success_url) {
                        Re(a[le.ADDRESS_SELECT].success_url);
                        return
                    }
                } catch (t) {
                    console.error(t), A(z), ke(l("something_went_wrong")), a && a[le.ADDRESS_SELECT] && a[le.ADDRESS_SELECT].failure_url && Re(a[le.ADDRESS_SELECT].failure_url)
                }
            }),
            re = d => {
                var g, z;
                b(d, !0);
                const B = (z = (g = d == null ? void 0 : d.metadata) == null ? void 0 : g.available_shipping_handles) != null ? z : [];
                B != null && B.length && v(B)
            };
        return !((q = C == null ? void 0 : C.addresses) != null && q.length) || !s.length || x != null && x.includes("SHIPPING_HANDLES_SECTION") ? e.jsx(e.Fragment, {}) : e.jsx(e.Fragment, {
            children: e.jsx(Zs, {
                id: "shipping-handles-section",
                ref: P,
                defaultOpen: ((J = N == null ? void 0 : N.ui_attributes) == null ? void 0 : J.shipping_list_expansion) && o === "PAYMENTS",
                titleIcon: e.jsx(fa, {
                    className: "h-4 w-4 text-coal-dark",
                    strokeWidth: 2.5
                }),
                titleText: e.jsx("div", {
                    className: "flex items-center space-x-2",
                    children: e.jsx("h2", {
                        className: "text-sm font-medium text-coal-dark",
                        children: l("shipping")
                    })
                }),
                subTitleText: Number(T == null ? void 0 : T.price) < 1 ? e.jsx("p", {
                    className: "text-sm font-normal uppercase text-yay-dark",
                    children: l("free_shipping")
                }) : e.jsx("p", {
                    className: "text-sm font-medium uppercase text-coal-dark",
                    children: "+ ₹" + (T == null ? void 0 : T.price)
                }),
                customClass: "!mt-0 !mx-0",
                content: e.jsx("div", {
                    className: "pb-4",
                    children: e.jsx("ul", {
                        className: "flex flex-col gap-3",
                        children: s.map(d => {
                            var B;
                            return e.jsx("li", {
                                onClick: g => {
                                    var z;
                                    g.preventDefault(), Q(d), (z = P == null ? void 0 : P.current) == null || z.closeAccordion()
                                },
                                children: e.jsx(Da, {
                                    id: d == null ? void 0 : d.id,
                                    name: `${d.handle_name}`,
                                    charge: d.price,
                                    isChecked: T.id === (d == null ? void 0 : d.id),
                                    etdText: d.etd_text,
                                    minDays: d.min_days_to_deliver,
                                    maxDays: d.max_days_to_deliver,
                                    codEnabled: d.cod_enabled,
                                    codExtraPrice: parseInt((B = d.cod_extra_price) != null ? B : "0"),
                                    onlineEnabled: d.online_enabled
                                })
                            }, d == null ? void 0 : d.id)
                        })
                    })
                }),
                "data-sentry-element": "Accordion",
                "data-sentry-source-file": "ShippingHandlesSection.tsx"
            })
        })
    },
    Da = Ke.memo(({
        id: r,
        name: l,
        charge: s,
        isChecked: i,
        codEnabled: p,
        codExtraPrice: a,
        etdText: c,
        onlineEnabled: n,
        minDays: x,
        maxDays: o
    }) => {
        var T, A;
        const {
            t: b
        } = oe(), {
            state: {
                checkoutView: v,
                isC2P: H,
                hasCODMode: C
            }
        } = xe(), {
            state: {
                merchant: S
            }
        } = Ye(), h = f.useMemo(() => {
            var P;
            return ms(x != null ? x : 0, o != null ? o : 0, c != null ? c : "Delivery information: ", (P = S == null ? void 0 : S.hideShippingMaxDays) != null ? P : !1)
        }, [x, o, c, S == null ? void 0 : S.hideShippingMaxDays]);
        s = (T = parseFloat(s)) == null ? void 0 : T.toFixed(2);
        const N = () => p ? n ? v === "PAYMENTS" && !H ? e.jsx(e.Fragment, {
            children: e.jsx("div", {
                className: "mt-2 flex w-fit items-center rounded-2xl bg-yay-light px-2 py-1 text-xs font-medium text-yay-dark",
                children: e.jsxs("p", {
                    children: ["COD available", !!a && e.jsx("span", {
                        children: " (with additional charges)"
                    })]
                })
            })
        }) : e.jsx(e.Fragment, {}) : e.jsx(e.Fragment, {
            children: e.jsx("div", {
                className: "mt-2 flex w-fit items-center rounded-2xl bg-gray-lighter  px-2 py-1 text-xs font-medium text-gray-dark",
                children: e.jsx("p", {
                    children: "COD only"
                })
            })
        }) : e.jsx(e.Fragment, {});
        return e.jsx(e.Fragment, {
            children: e.jsxs("label", {
                className: `${i?"border-[1.5px] border-primary-dark px-[11.5px] py-[11.5px]":"border-gray-light"} relative mx-3 flex h-full min-h-[4rem] cursor-pointer flex-row items-start justify-between rounded-2xl border px-3 py-3`,
                children: [e.jsx("span", {
                    className: `flex h-4 w-4 min-w-[1rem] !items-center !justify-center rounded-full border-2 ${i?"border-primary-dark":"border-gray-light"}`,
                    children: e.jsx("span", {
                        className: `h-2 w-2 ${i?"bg-primary-dark":"bg-none"} rounded-full`
                    })
                }), e.jsxs("div", {
                    className: "flex w-full flex-col justify-center pl-3",
                    children: [e.jsxs("div", {
                        className: "flex w-full flex-row",
                        children: [e.jsx("p", {
                            className: "grow text-sm text-coal-dark",
                            children: l
                        }), s === "0.00" ? e.jsx("p", {
                            className: "text-sm font-medium uppercase text-coal-dark",
                            children: b("free_shipping")
                        }) : e.jsxs("p", {
                            className: "flex items-center justify-center gap-1 text-sm font-medium text-coal-dark",
                            children: ["+ ", e.jsx(je, {
                                total: (A = parseFloat(s)) != null ? A : ""
                            })]
                        })]
                    }), !!h && e.jsx("p", {
                        className: "pt-1 text-xs text-coal-light",
                        children: h
                    }), C && N()]
                })]
            })
        })
    }),
    al = () => {
        const {
            t: r
        } = oe(), {
            state: {
                checkoutModal: l
            },
            actions: {
                setCheckoutModal: s,
                setCheckoutView: i
            }
        } = xe(), {
            state: {
                user: p
            }
        } = Tt(), {
            state: {
                merchant: a
            }
        } = Ye(), {
            unservicableItems: c,
            servicableItems: n
        } = os(), {
            handleItemEdit: x,
            isLoading: o
        } = bt(), b = n.length === 0, v = f.useMemo(() => {
            var S, h;
            return c.length === 1 ? r("item_unservicable_on_pincode_one", {
                count: c.length,
                pincode: (S = p == null ? void 0 : p.default_shipping_address) == null ? void 0 : S.zip
            }) : r("item_unservicable_on_pincode_other", {
                count: c.length,
                pincode: (h = p == null ? void 0 : p.default_shipping_address) == null ? void 0 : h.zip
            })
        }, [c]), H = () => pe(void 0, null, function*() {
            b ? C() : yield x("delete", {
                itemIds: c.map(S => S.item_id)
            })
        }), C = () => {
            a != null && a.brandUrl && Re(a.brandUrl), s("NONE"), i("ADDRESS_LIST")
        };
        return c.length ? e.jsxs(at, {
            isOpen: l === "UNSERVICEABLE_PRODUCTS",
            setIsOpen: () => s("NONE"),
            translateAxis: "y",
            dialogOverlay: !0,
            customClass: "overflow-scroll md:!top-auto md:absolute rounded-t-2xl max-h-fit",
            closeOnOverlayClick: !0,
            modalType: "UNSERVICEABLE_PRODUCTS",
            "data-sentry-element": "GenericDialog",
            "data-sentry-component": "UnservicableProductDialog",
            "data-sentry-source-file": "UnservicableProductDialog.tsx",
            children: [e.jsx(Ee, {
                className: "!px-3 !pt-4 h-fit",
                "data-sentry-element": "DialogBody",
                "data-sentry-source-file": "UnservicableProductDialog.tsx",
                children: e.jsxs("div", {
                    className: "flex flex-col",
                    children: [e.jsx("h1", {
                        className: "text-base font-medium text-carbon-dark mb-3",
                        children: r("item_in_cannot_be_delivered")
                    }), e.jsxs("div", {
                        className: "flex flex-col gap-2",
                        children: [e.jsx(aa, {
                            customErrorMessage: v,
                            "data-sentry-element": "OrderSummaryErrorCustom",
                            "data-sentry-source-file": "UnservicableProductDialog.tsx"
                        }), e.jsx(Bt, {
                            items: c,
                            isUnservicable: !0,
                            checkoutItemsMutable: !1,
                            "data-sentry-element": "CheckoutItems",
                            "data-sentry-source-file": "UnservicableProductDialog.tsx"
                        })]
                    })]
                })
            }), e.jsx(wt, {
                "data-sentry-element": "DialogFooter",
                "data-sentry-source-file": "UnservicableProductDialog.tsx",
                children: e.jsx(Le, {
                    isLoading: o,
                    buttonText: r(b ? "go_back_to_store" : "remove_unservicable_items"),
                    onClick: H,
                    height: "h-14",
                    isCheckout: !1,
                    "data-sentry-element": "PrimaryButton",
                    "data-sentry-source-file": "UnservicableProductDialog.tsx"
                })
            })]
        }) : null
    },
    Ta = ({
        setIsOpen: r,
        applyCoupon: l
    }) => {
        const {
            t: s
        } = oe(), {
            state: {
                appliedCoupons: i
            }
        } = xe();
        return e.jsxs(e.Fragment, {
            children: [e.jsx(Fe, {
                "data-sentry-element": "DialogHeader",
                "data-sentry-source-file": "ReplaceCouponDialog.tsx",
                children: e.jsxs("div", {
                    className: "flex h-full w-full flex-row items-center justify-between",
                    children: [e.jsxs("h1", {
                        className: "text-base font-medium",
                        children: [" ", s("replace_coupon_header", {
                            count: i == null ? void 0 : i.length
                        })]
                    }), e.jsx("button", {
                        className: "outline-none",
                        children: e.jsx(We, {
                            className: "h-6 w-6 cursor-pointer text-coal-dark",
                            onClick: () => r(),
                            "data-sentry-element": "X",
                            "data-sentry-source-file": "ReplaceCouponDialog.tsx"
                        })
                    })]
                })
            }), e.jsx(Ee, {
                "data-sentry-element": "DialogBody",
                "data-sentry-source-file": "ReplaceCouponDialog.tsx",
                children: e.jsxs("div", {
                    className: "relative flex w-full flex-col space-y-6 px-6 pt-4 pb-8",
                    children: [e.jsx("p", {
                        className: "text-sm text-coal-dark",
                        children: s("replace_coupon_body", {
                            count: i == null ? void 0 : i.length
                        })
                    }), e.jsx(Le, {
                        buttonText: s("continue"),
                        onClick: l,
                        height: "h-14",
                        isLoading: !1,
                        isDisabled: !1,
                        "data-sentry-element": "PrimaryButton",
                        "data-sentry-source-file": "ReplaceCouponDialog.tsx"
                    })]
                })
            })]
        })
    },
    Ia = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ta
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ba = ({}) => {
        const {
            t: r
        } = oe(), {
            state: {
                isAuthenticated: l
            }
        } = dt(), {
            state: {
                shippingHandles: s,
                checkoutId: i,
                isC2P: p,
                checkoutView: a,
                actionUrls: c,
                checkoutUIMetadata: n
            },
            actions: {
                updateCheckoutBasedOnCheckoutResponse: x,
                setShippingHandles: o,
                setCheckoutModal: b,
                setCheckoutView: v
            }
        } = xe(), {
            sendAnalyticsEvent: H
        } = Je(), {
            isNotServicable: C
        } = Ws(), {
            actions: {
                mutatePayment: S
            }
        } = Nt(), [h, N] = f.useState({
            id: "",
            handle_name: "",
            price: "",
            selected_handle: !1,
            cod_enabled: !1,
            cod_extra_price: "0",
            online_enabled: !0
        }), [T, A] = f.useState(!1), [P, Q] = f.useState(!1);
        f.useEffect(() => {
            H({
                eventName: he.FLO_SHIPPING_HANDLES_LOADED,
                eventType: "load",
                metaData: {
                    shippingData: {
                        availableHandles: s
                    }
                }
            })
        }, []), f.useEffect(() => {
            if (!s) {
                Q(!1);
                return
            }
            Q(!0);
            const d = ot(s);
            d && N(d)
        }, [s]);
        const W = () => pe(void 0, null, function*() {
                h.id && (H({
                    eventName: he.FLO_SHIPPING_HANDLE_SELECTED,
                    eventType: "click",
                    metaData: {
                        shippingData: {
                            availableHandles: s,
                            selectedHandle: h,
                            isCod: !1
                        }
                    }
                }), yield re())
            }),
            re = () => pe(void 0, null, function*() {
                var B, g, z, ee;
                const d = {
                    shipping_handle: h.id
                };
                try {
                    A(!0);
                    const te = yield pt(`/checkout/${i}/shipping-handle`, d, "KRATOS_PRIVATE");
                    if (q(te), J(), a === "PAYMENTS") {
                        S(), ve([`/checkout/${i}/rewards`, ct.KRATOS_PRIVATE]), (B = n == null ? void 0 : n.upsellConfig) != null && B.isEnabled && ve(qs({
                            isAuthenticated: l,
                            checkoutId: i
                        })), ve("UPI_INTENT");
                        return
                    }
                    if ((ee = (z = (g = te == null ? void 0 : te.metadata) == null ? void 0 : g.action_urls) == null ? void 0 : z[le.ADDRESS_SELECT]) != null && ee.success_url) {
                        Re(te.metadata.action_urls[le.ADDRESS_SELECT].success_url);
                        return
                    }
                    if (c && c[le.ADDRESS_SELECT] && c[le.ADDRESS_SELECT].success_url) {
                        Re(c[le.ADDRESS_SELECT].success_url);
                        return
                    }
                    v("PAYMENTS")
                } catch (te) {
                    console.error(te), c && c[le.ADDRESS_SELECT] && c[le.ADDRESS_SELECT].failure_url && Re(c[le.ADDRESS_SELECT].failure_url)
                } finally {
                    A(!1)
                }
            }),
            q = d => {
                var g, z;
                x(d, !0);
                const B = (z = (g = d == null ? void 0 : d.metadata) == null ? void 0 : g.available_shipping_handles) != null ? z : [];
                B != null && B.length && o(B)
            },
            J = () => {
                b("NONE")
            };
        return s ? C ? e.jsx(e.Fragment, {}) : e.jsxs(e.Fragment, {
            children: [!!P && e.jsxs(e.Fragment, {
                children: [e.jsx(Fe, {
                    children: e.jsxs("div", {
                        className: "flex h-full w-full flex-row items-center justify-between",
                        children: [e.jsxs("h1", {
                            className: "text-base font-medium",
                            children: [" ", r("shipping_handles_dialog_header")]
                        }), !p && e.jsx("button", {
                            className: "outline-none",
                            children: e.jsx(We, {
                                className: "h-6 w-6 cursor-pointer text-coal-dark",
                                onClick: J
                            })
                        })]
                    })
                }), e.jsx(Ee, {
                    children: e.jsx("ul", {
                        className: "flex flex-col gap-3",
                        children: s.map(d => {
                            var B;
                            return e.jsx("li", {
                                onClick: g => {
                                    g.preventDefault(), N(d)
                                },
                                children: e.jsx(Oa, {
                                    id: d == null ? void 0 : d.id,
                                    name: `${d.handle_name}`,
                                    etdText: d.etd_text,
                                    minDays: d.min_days_to_deliver,
                                    maxDays: d.max_days_to_deliver,
                                    charge: d.price,
                                    isChecked: h.id === (d == null ? void 0 : d.id),
                                    codEnabled: d.cod_enabled,
                                    codExtraPrice: parseInt((B = d.cod_extra_price) != null ? B : "0"),
                                    onlineEnabled: d.online_enabled
                                })
                            }, d == null ? void 0 : d.id)
                        })
                    })
                }), e.jsx(wt, {
                    children: e.jsx(Le, {
                        buttonText: r("proceed_to_pay"),
                        id: "flo_shipping_handles_select",
                        onClick: W,
                        height: "h-14",
                        isCheckout: !0
                    })
                })]
            }), T && e.jsx(xt, {})]
        }) : e.jsx(e.Fragment, {})
    },
    Oa = Ke.memo(({
        id: r,
        name: l,
        charge: s,
        isChecked: i,
        codEnabled: p,
        codExtraPrice: a,
        onlineEnabled: c,
        minDays: n,
        maxDays: x,
        etdText: o
    }) => {
        var N, T;
        const {
            t: b
        } = oe(), {
            state: {
                checkoutView: v,
                isC2P: H
            }
        } = xe(), {
            state: {
                merchant: C
            }
        } = Ye();
        s = (N = parseFloat(s)) == null ? void 0 : N.toFixed(2);
        const S = f.useMemo(() => {
                var A;
                return ms(n != null ? n : 0, x != null ? x : 0, o != null ? o : "Delivery information: ", (A = C == null ? void 0 : C.hideShippingMaxDays) != null ? A : !1)
            }, [n, x, o, C == null ? void 0 : C.hideShippingMaxDays]),
            h = () => p ? c ? v === "PAYMENTS" && !H ? e.jsx(e.Fragment, {
                children: e.jsx("div", {
                    className: "mt-2 flex w-fit items-center rounded-2xl bg-yay-light px-2 py-1 text-xs font-medium text-yay-dark",
                    children: e.jsxs("p", {
                        children: ["COD available", !!a && e.jsx("span", {
                            children: " (with additional charges)"
                        })]
                    })
                })
            }) : e.jsx(e.Fragment, {}) : e.jsx(e.Fragment, {
                children: e.jsx("div", {
                    className: "mt-2 flex w-fit items-center rounded-2xl bg-gray-lighter  px-2 py-1 text-xs font-medium text-gray-dark",
                    children: e.jsx("p", {
                        children: "COD only"
                    })
                })
            }) : e.jsx(e.Fragment, {});
        return e.jsx(e.Fragment, {
            children: e.jsxs("label", {
                className: `${i?"border-[1.5px] border-primary-dark px-[11.5px] py-[11.5px]":"border-gray-light"} relative mx-3 flex h-full min-h-[4rem] cursor-pointer flex-row items-start justify-between rounded-2xl border px-3 py-3`,
                children: [e.jsx("span", {
                    className: `flex h-4 w-4 min-w-[1rem] !items-center !justify-center rounded-full border-2 ${i?"border-primary-dark":"border-gray-light"}`,
                    children: e.jsx("span", {
                        className: `h-2 w-2 ${i?"bg-primary-dark":"bg-none"} rounded-full`
                    })
                }), e.jsxs("div", {
                    className: "flex w-full flex-col justify-center pl-3",
                    children: [e.jsxs("div", {
                        className: "flex w-full flex-row",
                        children: [e.jsx("p", {
                            className: "grow text-sm text-coal-dark",
                            children: l
                        }), s === "0.00" ? e.jsx("p", {
                            className: "text-sm font-normal uppercase text-gray-dark",
                            children: b("free_shipping")
                        }) : e.jsxs("p", {
                            className: "flex items-center justify-center gap-1 text-sm font-medium text-coal-dark",
                            children: ["+ ", e.jsx(je, {
                                total: (T = parseFloat(s)) != null ? T : ""
                            })]
                        })]
                    }), !!S && e.jsx("p", {
                        className: "pt-1 text-xs text-coal-light",
                        children: S
                    }), h()]
                })]
            })
        })
    }),
    ll = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ba
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    Qa as B, Wa as C, qa as E, gs as I, Ca as L, tl as O, za as R, Sa as S, al as U, sl as a, ja as b, Xa as c, el as d, Ja as e, Bt as f, Za as g, ll as h
};
//# sourceMappingURL=checkout-components-CDs-GsFA.js.map