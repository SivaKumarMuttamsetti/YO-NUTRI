import {
    r as n,
    c as y,
    f as p,
    T as w,
    W as R,
    X as g
} from "./react-core-C02-NrKc.js";
import {
    a7 as T
} from "./vendor-DWBJvUkq.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {},
            r = new e.Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "cb256ebe-9a8e-4cf2-9bb4-91c07dae37a2", e._sentryDebugIdIdentifier = "sentry-dbid-cb256ebe-9a8e-4cf2-9bb4-91c07dae37a2")
    } catch (t) {}
})();
/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function f(e) {
    return e === void 0 && (e = ""), new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((r, t) => {
        let a = e[t];
        return r.concat(Array.isArray(a) ? a.map(s => [t, s]) : [
            [t, a]
        ])
    }, []))
}

function v(e, r) {
    let t = f(e);
    return r && r.forEach((a, s) => {
        t.has(s) || r.getAll(s).forEach(c => {
            t.append(s, c)
        })
    }), t
}
const _ = "6";
try {
    window.__reactRouterVersion = _
} catch (e) {}
const E = "startTransition",
    b = w[E];

function P(e) {
    let {
        basename: r,
        children: t,
        future: a,
        window: s
    } = e, c = n.useRef();
    c.current == null && (c.current = T({
        window: s,
        v5Compat: !0
    }));
    let o = c.current,
        [i, u] = n.useState({
            action: o.action,
            location: o.location
        }),
        {
            v7_startTransition: l
        } = a || {},
        h = n.useCallback(d => {
            l && b ? b(() => u(d)) : u(d)
        }, [u, l]);
    return n.useLayoutEffect(() => o.listen(h), [o, h]), n.useEffect(() => R(a), [a]), n.createElement(g, {
        basename: r,
        children: t,
        location: i.location,
        navigationType: i.action,
        navigator: o,
        future: a
    })
}
var m;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(m || (m = {}));
var S;
(function(e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(S || (S = {}));

function A(e) {
    let r = n.useRef(f(e)),
        t = n.useRef(!1),
        a = y(),
        s = n.useMemo(() => v(a.search, t.current ? null : r.current), [a.search]),
        c = p(),
        o = n.useCallback((i, u) => {
            const l = f(typeof i == "function" ? i(s) : i);
            t.current = !0, c("?" + l, u)
        }, [c, s]);
    return [s, o]
}
export {
    P as B, A as u
};
//# sourceMappingURL=react-router-dom-C_20INan.js.map