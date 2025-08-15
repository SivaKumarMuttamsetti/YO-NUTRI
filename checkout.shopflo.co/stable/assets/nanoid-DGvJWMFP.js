(function() {
    try {
        var n = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {},
            e = new n.Error().stack;
        e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "a1249ead-ab81-4554-9f1a-a221565e7cc9", n._sentryDebugIdIdentifier = "sentry-dbid-a1249ead-ab81-4554-9f1a-a221565e7cc9")
    } catch (a) {}
})();
let r = (n = 21) => crypto.getRandomValues(new Uint8Array(n)).reduce((e, a) => (a &= 63, a < 36 ? e += a.toString(36) : a < 62 ? e += (a - 26).toString(36).toUpperCase() : a > 62 ? e += "-" : e += "_", e), "");
export {
    r as n
};
//# sourceMappingURL=nanoid-DGvJWMFP.js.map