(() => {
    var Fr = Object.create;
    var He = Object.defineProperty;
    var Ur = Object.getOwnPropertyDescriptor;
    var Gr = Object.getOwnPropertyNames,
        Dt = Object.getOwnPropertySymbols,
        Hr = Object.getPrototypeOf,
        Nt = Object.prototype.hasOwnProperty,
        Kr = Object.prototype.propertyIsEnumerable;
    var Ue = (r, e) => (e = Symbol[r]) ? e : Symbol.for("Symbol." + r),
        Ke = r => {
            throw TypeError(r)
        };
    var Ge = (r, e, t) => e in r ? He(r, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
        }) : r[e] = t,
        De = (r, e) => {
            for (var t in e || (e = {})) Nt.call(e, t) && Ge(r, t, e[t]);
            if (Dt)
                for (var t of Dt(e)) Kr.call(e, t) && Ge(r, t, e[t]);
            return r
        };
    var b = (r, e) => () => (r && (e = r(r = 0)), e);
    var Pt = (r, e) => () => (e || r((e = {
        exports: {}
    }).exports, e), e.exports);
    var Xr = (r, e, t, n) => {
        if (e && typeof e == "object" || typeof e == "function")
            for (let i of Gr(e)) !Nt.call(r, i) && i !== t && He(r, i, {
                get: () => e[i],
                enumerable: !(n = Ur(e, i)) || n.enumerable
            });
        return r
    };
    var Ne = (r, e, t) => (t = r != null ? Fr(Hr(r)) : {}, Xr(e || !r || !r.__esModule ? He(t, "default", {
        value: r,
        enumerable: !0
    }) : t, r));
    var m = (r, e, t) => Ge(r, typeof e != "symbol" ? e + "" : e, t),
        Lt = (r, e, t) => e.has(r) || Ke("Cannot " + t);
    var g = (r, e, t) => (Lt(r, e, "read from private field"), t ? t.call(r) : e.get(r)),
        V = (r, e, t) => e.has(r) ? Ke("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, t),
        M = (r, e, t, n) => (Lt(r, e, "write to private field"), n ? n.call(r, t) : e.set(r, t), t);
    var x = (r, e, t) => new Promise((n, i) => {
            var s = l => {
                    try {
                        c(t.next(l))
                    } catch (u) {
                        i(u)
                    }
                },
                o = l => {
                    try {
                        c(t.throw(l))
                    } catch (u) {
                        i(u)
                    }
                },
                c = l => l.done ? n(l.value) : Promise.resolve(l.value).then(s, o);
            c((t = t.apply(r, e)).next())
        }),
        Wr = function(r, e) {
            this[0] = r, this[1] = e
        };
    var Rt = r => {
        var e = r[Ue("asyncIterator")],
            t = !1,
            n, i = {};
        return e == null ? (e = r[Ue("iterator")](), n = s => i[s] = o => e[s](o)) : (e = e.call(r), n = s => i[s] = o => {
            if (t) {
                if (t = !1, s === "throw") throw o;
                return o
            }
            return t = !0, {
                done: !1,
                value: new Wr(new Promise(c => {
                    var l = e[s](o);
                    l instanceof Object || Ke("Object expected"), c(l)
                }), 1)
            }
        }), i[Ue("iterator")] = () => i, n("next"), "throw" in e ? n("throw") : i.throw = s => {
            throw s
        }, "return" in e && n("return"), i
    };
    var Bt, qt = b(() => {
        Bt = "WebPixel::Render"
    });
    var Xe, jt = b(() => {
        qt();
        Xe = r => shopify.extend(Bt, r)
    });
    var $t = b(() => {
        jt()
    });
    var Mt = b(() => {
        $t()
    });

    function on(r) {
        return r === r.toLowerCase() && r !== r.toUpperCase()
    }
    var Jr, Zr, Yr, en, tn, rn, nn, sn, We, Pe, Je, Qt = b(() => {
        "use strict";
        Jr = ["lo-sensitive", "lo_sensitive", "losensitive", "loscramble", "lo_scramble"], Zr = ["lo-not-sensitive", "lonotsensitive"], Yr = "0123456789", en = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", tn = /\W/, rn = /[\u0590-\u05FF]/, nn = /[\u0600-\u06FF]/, sn = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", We = (r, e) => {
            var c, l, u;
            if (!((c = r.a) != null && c.class)) return "inherit";
            let t = r.a.class.toLowerCase(),
                n = [...(l = e.sensitiveClasses) != null ? l : [], ...Jr],
                s = [...(u = e.notSensitiveClasses) != null ? u : [], ...Zr].find(a => t.includes(a)),
                o = n.find(a => t.includes(a));
            return !s && !o ? "inherit" : o ? !0 : !(s && !o)
        };
        Pe = r => {
            let e = [];
            for (let t of r)
                if (tn.test(t) && !rn.test(t) && !nn.test(t)) e.push(t);
                else {
                    let n = isNaN(parseInt(t)),
                        i = Yr;
                    n && (i = en);
                    let s = i.charAt(Math.floor(Math.random() * i.length));
                    n ? e.push(on(t) ? s.toLowerCase() : s.toUpperCase()) : e.push(s)
                }
            return e.join("")
        }, Je = r => {
            var e, t, n;
            return ((e = r.g) == null ? void 0 : e.toLowerCase()) === "img" && ((t = r.a) != null && t.src) && (r.a.src = sn), (n = r.a) != null && n.title && (r.a.title = Pe(r.a.title)), r
        }
    });
    var Le = Pt((Gn, zt) => {
        "use strict";

        function un(r) {
            for (var e = 5381, t = r.length; t;) e = e * 33 ^ r.charCodeAt(--t);
            return e >>> 0
        }
        zt.exports = un
    });
    var Ze, Vt = b(() => {
        "use strict";
        Ze = r => new Promise(e => setTimeout(e, r))
    });
    var Re, an, Be, Ft, Se = b(() => {
        "use strict";
        Vt();
        te();
        Re = (r, e, t = 0, n = 50) => x(void 0, null, function*() {
            let i = new Date().getTime(),
                s = yield e.localStorage.getItem(r), o = yield an(e);
            for (;
                (!s || o) && new Date().getTime() - i < t;) yield Ze(n), s = yield e.localStorage.getItem(r);
            return s
        }), an = r => x(void 0, null, function*() {
            var o;
            let e = L.getInstance(),
                t = JSON.parse((o = yield r.localStorage.getItem("lo-session")) != null ? o : "{}"),
                n;
            try {
                n = e.getUrl()
            } catch (c) {
                n = void 0
            }
            let i = t.url,
                s = t && !i ? (n == null ? void 0 : n.href) === i : !0;
            return n != null && n.href.includes("/checkouts/") && (s = !0), s
        }), Be = (r, e, t = 0, n = 50) => x(void 0, null, function*() {
            let i = new Date().getTime(),
                s = yield e.sessionStorage.getItem(r);
            for (; !s && new Date().getTime() - i < t;) yield Ze(n), s = yield e.sessionStorage.getItem(r);
            return s
        }), Ft = (r, e, t) => x(void 0, null, function*() {
            let n = yield t.localStorage.getItem("lo-session");
            if (!n) throw new Error("No session found in local storage");
            let i = JSON.parse(n);
            return i[r] = e, yield t.localStorage.setItem("lo-session", JSON.stringify(i)), i
        })
    });
    var J, F, Ye, W, R, re = b(() => {
        "use strict";
        Se();
        F = class F {
            constructor(e = "error") {
                m(this, "logLevel");
                this.logLevel = e
            }
            static getInstance() {
                return g(F, J) || M(F, J, new F), g(F, J)
            }
            static updateInstance(e) {
                return x(this, null, function*() {
                    var n;
                    let t = (n = yield Re("lo-log-level", e.browser, 2e3, 100)) != null ? n : "error";
                    return g(F, J) ? g(F, J).logLevel = t : M(F, J, new F(t)), g(F, J)
                })
            }
            debug(...e) {
                W[this.logLevel] > W.debug || console.debug(e)
            }
            info(...e) {
                W[this.logLevel] > W.info || console.info(e)
            }
            warning(...e) {
                W[this.logLevel] > W.warning || console.warn(e)
            }
            error(...e) {
                W[this.logLevel] > W.error || console.error(e)
            }
            log(e, t = "info") {
                W[this.logLevel] > W[t] || console.log(e)
            }
        };
        J = new WeakMap, V(F, J);
        Ye = F, W = {
            debug: 0,
            info: 1,
            warning: 2,
            error: 3,
            critical: 4,
            fatal: 5
        }, R = Ye
    });
    var et, B, ne = b(() => {
        "use strict";
        re();
        et = class {
            constructor(e, t, n, i) {
                m(this, "logger");
                m(this, "name");
                m(this, "queue");
                m(this, "inFlight");
                m(this, "maxSize");
                m(this, "maxTime");
                m(this, "locked");
                m(this, "interval");
                m(this, "onFlush");
                m(this, "options");
                this.logger = R.getInstance(), this.queue = [], this.inFlight = [], this.maxSize = e, this.locked = !1, this.onFlush = n, this.options = i, this.name = i == null ? void 0 : i.name, t && t > 0 && (this.maxTime = t, this.resetInterval())
            }
            flush() {
                return x(this, null, function*() {
                    var e;
                    if (this.queue.length !== 0) {
                        if (this.locked) {
                            setTimeout(() => {
                                this.flush().catch(t => {
                                    this.logger.error("error flushing queue", t)
                                })
                            }, 50);
                            return
                        }
                        try {
                            this.locked = !0, this.inFlight = this.queue.splice(0, this.maxSize), yield this.onFlush(this.inFlight)
                        } catch (t) {
                            this.logger.error(`[${(e=this.name)!=null?e:"unnamed"}] error flushing queue`, t)
                        } finally {
                            this.inFlight = [], this.locked = !1, this.queue.length > 0 && this.flush().catch(t => {
                                this.logger.error("error flushing queue", t)
                            })
                        }
                    }
                })
            }
            push(e, t) {
                var i;
                let n = e;
                (i = this.options) != null && i.prePush && (n = this.options.prePush(n)), this.queue.push(n), (this.queue.length >= this.maxSize || t != null && t.flushImmediately) && this.flush().catch(s => {
                    this.logger.error("error flushing queue", s)
                })
            }
            getQueue() {
                return [...this.queue, ...this.inFlight]
            }
            clear() {
                this.queue = [], this.inFlight = []
            }
            resetInterval() {
                this.interval && clearInterval(this.interval), this.interval = setInterval(() => {
                    this.flush().catch(e => {
                        this.logger.error("error flushing queue", e)
                    })
                }, this.maxTime)
            }
        }, B = et
    });

    function Ut(r) {
        return Object.prototype.toString.call(r) === "[object Object]"
    }

    function Gt(r) {
        if (!Ut(r)) return !1;
        let e = r == null ? void 0 : r.constructor;
        if (e === void 0) return !0;
        let t = e.prototype;
        return !(!Ut(t) || !Object.hasOwn(t, "isPrototypeOf"))
    }
    var Ht = b(() => {
        "use strict"
    });
    var T, Kt, Xt = b(() => {
        "use strict";
        T = {
            ArraySegment: function() {
                function r(e, t, n) {
                    this.container = e, this.startPosition = t, this.length = n
                }
                return r.prototype.get = function(e) {
                    return this.container[this.startPosition + e]
                }, r.prototype.getInReversedOrder = function(e) {
                    return this.container[this.startPosition + this.length - 1 - e]
                }, r.prototype.set = function(e, t) {
                    this.container[this.startPosition + e] = t
                }, r
            }(),
            ArrayTools: {
                copyElements(r, e, t, n, i) {
                    for (; i--;) t[n++] = r[e++]
                },
                zeroElements(r, e, t) {
                    for (; t--;) r[e++] = 0
                },
                countNonzeroValuesInArray(r) {
                    let e = 0;
                    for (let t = 0; t < r.length; t++) r[t] && e++;
                    return e
                },
                truncateStartingElements(r, e) {
                    if (r.length <= e) throw new RangeError("truncateStartingElements: Requested length should be smaller than array length");
                    let t = r.length - e;
                    for (let n = 0; n < e; n++) r[n] = r[t + n];
                    r.length = e
                },
                concatUint8Arrays(r) {
                    let e = 0;
                    for (let s = 0, o = r; s < o.length; s++) {
                        var t = o[s];
                        e += t.length
                    }
                    let n = new Uint8Array(e),
                        i = 0;
                    for (let s = 0, o = r; s < o.length; s++) {
                        var t = o[s];
                        n.set(t, i), i += t.length
                    }
                    return n
                }
            },
            CompressionCommon: {
                getCroppedAndAppendedByteArray(r, e, t, n) {
                    return T.ArrayTools.concatUint8Arrays([r.subarray(e, e + t), n])
                },
                detectCompressionSourceEncoding(r) {
                    if (r == null) throw new TypeError("detectCompressionSourceEncoding: input is null or undefined");
                    if (typeof r == "string") return "String";
                    if (r instanceof Uint8Array || typeof Buffer == "function" && Buffer.isBuffer(r)) return "ByteArray";
                    throw new TypeError("detectCompressionSourceEncoding: input must be of type 'string', 'Uint8Array' or 'Buffer'")
                },
                encodeCompressedBytes(r, e) {
                    switch (e.toLowerCase()) {
                        case "bytearray":
                            return r;
                        case "base64":
                            return T.encodeBase64(r);
                        default:
                            throw new TypeError("encodeCompressedBytes: invalid output encoding requested")
                    }
                }
            },
            Compressor: function() {
                function r(e) {
                    e === void 0 && (e = !0), this.MinimumSequenceLength = 4, this.MaximumSequenceLength = 31, this.MaximumMatchDistance = 32767, this.PrefixHashTableSize = 65537, this.inputBufferStreamOffset = 1, e && typeof Uint32Array == "function" && (this.prefixHashTable = new T.CompressorCustomHashTable(this.PrefixHashTableSize))
                }
                return r.prototype.compressBlock = function(e) {
                    if (e == null) throw new TypeError("compressBlock: undefined or null input received");
                    return typeof e == "string" && (e = T.encodeUTF8(e)), this.compressUtf8Block(e)
                }, r.prototype.compressUtf8Block = function(e) {
                    if (!e || e.length === 0) return new Uint8Array(0);
                    let t = this.cropAndAddNewBytesToInputBuffer(e),
                        n = this.inputBuffer,
                        i = this.inputBuffer.length;
                    this.outputBuffer = new Uint8Array(e.length), this.outputBufferPosition = 0;
                    let s = 0;
                    for (let o = t; o < i; o++) {
                        let c = n[o],
                            l = o < s;
                        if (o > i - this.MinimumSequenceLength) {
                            l || this.outputRawByte(c);
                            continue
                        }
                        let u = this.getBucketIndexForPrefix(o);
                        if (!l) {
                            let f = this.findLongestMatch(o, u);
                            f != null && (this.outputPointerBytes(f.length, f.distance), s = o + f.length, l = !0)
                        }
                        l || this.outputRawByte(c);
                        let a = this.inputBufferStreamOffset + o;
                        this.prefixHashTable.addValueToBucket(u, a)
                    }
                    return this.outputBuffer.subarray(0, this.outputBufferPosition)
                }, r.prototype.findLongestMatch = function(e, t) {
                    let n = this.prefixHashTable.getArraySegmentForBucketIndex(t, this.reusableArraySegmentObject);
                    if (n == null) return null;
                    let i = this.inputBuffer,
                        s, o = 0;
                    for (let c = 0; c < n.length; c++) {
                        let l = n.getInReversedOrder(c) - this.inputBufferStreamOffset,
                            u = e - l,
                            a;
                        if (s === void 0 ? a = this.MinimumSequenceLength - 1 : s < 128 && u >= 128 ? a = o + (o >>> 1) : a = o, u > this.MaximumMatchDistance || a >= this.MaximumSequenceLength || e + a >= i.length) break;
                        if (i[l + a] === i[e + a]) {
                            for (let f = 0;; f++)
                                if (e + f === i.length || i[l + f] !== i[e + f]) {
                                    f > a && (s = u, o = f);
                                    break
                                } else if (f === this.MaximumSequenceLength) return {
                                distance: u,
                                length: this.MaximumSequenceLength
                            }
                        }
                    }
                    return s !== void 0 ? {
                        distance: s,
                        length: o
                    } : null
                }, r.prototype.getBucketIndexForPrefix = function(e) {
                    return (this.inputBuffer[e] * 7880599 + this.inputBuffer[e + 1] * 39601 + this.inputBuffer[e + 2] * 199 + this.inputBuffer[e + 3]) % this.PrefixHashTableSize
                }, r.prototype.outputPointerBytes = function(e, t) {
                    t < 128 ? (this.outputRawByte(192 | e), this.outputRawByte(t)) : (this.outputRawByte(224 | e), this.outputRawByte(t >>> 8), this.outputRawByte(t & 255))
                }, r.prototype.outputRawByte = function(e) {
                    this.outputBuffer[this.outputBufferPosition++] = e
                }, r.prototype.cropAndAddNewBytesToInputBuffer = function(e) {
                    if (this.inputBuffer === void 0) return this.inputBuffer = e, 0; {
                        let t = Math.min(this.inputBuffer.length, this.MaximumMatchDistance),
                            n = this.inputBuffer.length - t;
                        return this.inputBuffer = T.CompressionCommon.getCroppedAndAppendedByteArray(this.inputBuffer, n, t, e), this.inputBufferStreamOffset += n, t
                    }
                }, r
            }(),
            CompressorCustomHashTable: function() {
                function r(e) {
                    this.minimumBucketCapacity = 4, this.maximumBucketCapacity = 64, this.bucketLocators = new Uint32Array(e * 2), this.storage = new Uint32Array(e * 2), this.storageIndex = 1
                }
                return r.prototype.addValueToBucket = function(e, t) {
                    e <<= 1, this.storageIndex >= this.storage.length >>> 1 && this.compact();
                    let n = this.bucketLocators[e],
                        i;
                    if (n === 0) n = this.storageIndex, i = 1, this.storage[this.storageIndex] = t, this.storageIndex += this.minimumBucketCapacity;
                    else {
                        i = this.bucketLocators[e + 1], i === this.maximumBucketCapacity - 1 && (i = this.truncateBucketToNewerElements(n, i, this.maximumBucketCapacity / 2));
                        let s = n + i;
                        this.storage[s] === 0 ? (this.storage[s] = t, s === this.storageIndex && (this.storageIndex += i)) : (T.ArrayTools.copyElements(this.storage, n, this.storage, this.storageIndex, i), n = this.storageIndex, this.storageIndex += i, this.storage[this.storageIndex++] = t, this.storageIndex += i), i++
                    }
                    this.bucketLocators[e] = n, this.bucketLocators[e + 1] = i
                }, r.prototype.truncateBucketToNewerElements = function(e, t, n) {
                    let i = e + t - n;
                    return T.ArrayTools.copyElements(this.storage, i, this.storage, e, n), T.ArrayTools.zeroElements(this.storage, e + n, t - n), n
                }, r.prototype.compact = function() {
                    let e = this.bucketLocators,
                        t = this.storage;
                    this.bucketLocators = new Uint32Array(this.bucketLocators.length), this.storageIndex = 1;
                    for (var n = 0; n < e.length; n += 2) {
                        let i = e[n + 1];
                        i !== 0 && (this.bucketLocators[n] = this.storageIndex, this.bucketLocators[n + 1] = i, this.storageIndex += Math.max(Math.min(i * 2, this.maximumBucketCapacity), this.minimumBucketCapacity))
                    }
                    this.storage = new Uint32Array(this.storageIndex * 8);
                    for (var n = 0; n < e.length; n += 2) {
                        let s = e[n];
                        if (s === 0) continue;
                        let o = this.bucketLocators[n],
                            c = this.bucketLocators[n + 1];
                        T.ArrayTools.copyElements(t, s, this.storage, o, c)
                    }
                }, r.prototype.getArraySegmentForBucketIndex = function(e, t) {
                    e <<= 1;
                    let n = this.bucketLocators[e];
                    return n === 0 ? null : (t === void 0 && (t = new T.ArraySegment(this.storage, n, this.bucketLocators[e + 1])), t)
                }, r
            }(),
            compress(r, e) {
                if (e = e || {}, r == null) throw new TypeError("compress: undefined or null input received");
                let t = T.CompressionCommon.detectCompressionSourceEncoding(r);
                e = T.ObjectTools.override({
                    inputEncoding: t,
                    outputEncoding: "ByteArray"
                }, e);
                let i = new T.Compressor().compressBlock(r);
                return T.CompressionCommon.encodeCompressedBytes(i, e.outputEncoding)
            },
            encodeUTF8(r) {
                return T.Encoding.UTF8.encode(r)
            },
            encodeBase64(r) {
                return T.Encoding.Base64.encode(r)
            },
            Encoding: {
                Base64: {
                    charCodeMap: new Uint8Array([65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47]),
                    paddingCharCode: 61,
                    encode(r) {
                        return r ? T.Encoding.Base64.encodeWithJS(r) : ""
                    },
                    encodeWithJS(r, e) {
                        let t = T.Encoding.Base64;
                        if (e === void 0 && (e = !0), !r) return "";
                        let n = t.charCodeMap,
                            i = new T.StringBuilder,
                            s;
                        for (let o = 0, c = r.length; o < c; o += 3) o <= c - 3 ? (s = r[o] << 16 | r[o + 1] << 8 | r[o + 2], i.appendCharCode(n[s >>> 18 & 63]), i.appendCharCode(n[s >>> 12 & 63]), i.appendCharCode(n[s >>> 6 & 63]), i.appendCharCode(n[s & 63]), s = 0) : o === c - 2 ? (s = r[o] << 16 | r[o + 1] << 8, i.appendCharCode(n[s >>> 18 & 63]), i.appendCharCode(n[s >>> 12 & 63]), i.appendCharCode(n[s >>> 6 & 63]), e && i.appendCharCode(t.paddingCharCode)) : o === c - 1 && (s = r[o] << 16, i.appendCharCode(n[s >>> 18 & 63]), i.appendCharCode(n[s >>> 12 & 63]), e && (i.appendCharCode(t.paddingCharCode), i.appendCharCode(t.paddingCharCode)));
                        return i.getOutputString()
                    }
                },
                CodePoint: {
                    encodeFromString(r, e) {
                        let t = r.charCodeAt(e);
                        if (t < 55296 || t > 56319) return t; {
                            let n = r.charCodeAt(e + 1);
                            if (n >= 56320 && n <= 57343) return 65536 + ((t - 55296 << 10) + (n - 56320));
                            throw new Error("getUnicodeCodePoint: Received a lead surrogate character, char code " + t + ", followed by " + n + ", which is not a trailing surrogate character code.")
                        }
                    }
                },
                UTF8: {
                    nativeTextEncoder: null,
                    encode(r) {
                        return r ? T.Encoding.UTF8.createNativeTextEncoderAndDecoderIfAvailable() ? T.Encoding.UTF8.nativeTextEncoder.encode(r) : T.Encoding.UTF8.encodeWithJS(r) : new Uint8Array(0)
                    },
                    encodeWithJS(r, e) {
                        if (!r) return new Uint8Array(0);
                        e || (e = new Uint8Array(r.length * 4));
                        let t = 0;
                        for (let n = 0; n < r.length; n++) {
                            let i = T.Encoding.CodePoint.encodeFromString(r, n);
                            if (i <= 127) e[t++] = i;
                            else if (i <= 2047) e[t++] = 192 | i >>> 6, e[t++] = 128 | i & 63;
                            else if (i <= 65535) e[t++] = 224 | i >>> 12, e[t++] = 128 | i >>> 6 & 63, e[t++] = 128 | i & 63;
                            else if (i <= 1114111) e[t++] = 240 | i >>> 18, e[t++] = 128 | i >>> 12 & 63, e[t++] = 128 | i >>> 6 & 63, e[t++] = 128 | i & 63, n++;
                            else throw new Error("Invalid UTF-16 string: Encountered a character unsupported by UTF-8/16 (RFC 3629)")
                        }
                        return e.subarray(0, t)
                    },
                    createNativeTextEncoderAndDecoderIfAvailable() {
                        return T.Encoding.UTF8.nativeTextEncoder ? !0 : typeof TextEncoder == "function" ? (T.Encoding.UTF8.nativeTextEncoder = new TextEncoder("utf-8"), !0) : !1
                    }
                }
            },
            ObjectTools: {
                override(r, e) {
                    return T.ObjectTools.extend(r, e)
                },
                extend(r, e) {
                    if (r == null) throw new TypeError("obj is null or undefined");
                    if (typeof r != "object") throw new TypeError("obj is not an object");
                    if (e == null && (e = {}), typeof e != "object") throw new TypeError("newProperties is not an object");
                    if (e != null)
                        for (let t in e) r[t] = e[t];
                    return r
                }
            },
            StringBuilder: function() {
                function r(e) {
                    e === void 0 && (e = 1024), this.outputBufferCapacity = e, this.outputPosition = 0, this.outputString = "", this.outputBuffer = new Uint16Array(this.outputBufferCapacity)
                }
                return r.prototype.appendCharCode = function(e) {
                    this.outputBuffer[this.outputPosition++] = e, this.outputPosition === this.outputBufferCapacity && this.flushBufferToOutputString()
                }, r.prototype.getOutputString = function() {
                    return this.flushBufferToOutputString(), this.outputString
                }, r.prototype.flushBufferToOutputString = function() {
                    this.outputPosition === this.outputBufferCapacity ? this.outputString += String.fromCharCode.apply(null, this.outputBuffer) : this.outputString += String.fromCharCode.apply(null, this.outputBuffer.subarray(0, this.outputPosition)), this.outputPosition = 0
                }, r
            }()
        }, Kt = T
    });
    var Wt, xe, tt, Jt, Zt, Te = b(() => {
        "use strict";
        Ht();
        Xt();
        Wt = {
            createdAt: "d",
            customUserId: "cu",
            endpointKey: "k",
            hash: "h",
            masterId: "m",
            meta: "m",
            pageId: "p",
            payload: "py",
            siteId: "s",
            type: "t",
            uid: "u"
        }, xe = r => {
            let e = Object.assign({}, r);
            return Object.keys(e).forEach(t => {
                if (!(t in Wt)) return;
                let n = t;
                Gt(e[n]) && !Array.isArray(e[n]) && n !== "meta" && (e[n] = xe(e[n])), e[Wt[n]] = e[n], delete e[n]
            }), e
        }, tt = r => {
            let e = 0;
            try {
                e = new TextEncoder().encode(r).length
            } catch (t) {
                e = r.length
            }
            return e
        }, Jt = r => {
            let e = new Date().getTime(),
                t = JSON.stringify(r),
                n = Kt.compress(t, {
                    outputEncoding: "base64"
                }),
                i = new Date().getTime(),
                s = tt(n);
            return {
                encoding: "LZUTF8",
                time: i - e,
                output: n,
                originalSize: t.length,
                compressedSize: s,
                ratio: s / t.length
            }
        }, Zt = r => {
            try {
                let e = r.split(/\s+/),
                    t = r.split(/\S+/),
                    n = [];
                return t.forEach((s, o) => {
                    s.length > 0 && s.split(/(\n+|\t+|\r+)/).filter(u => u.length).forEach(u => {
                        let a = u.charAt(0),
                            f = "s";
                        a === " " ? f = "s" : a === `
` && (f = "n"), f === "s" && u.length < 2 || n.push(`${f}${u.length.toString()}`)
                    });
                    let c = e[o];
                    c != null && c.length && n.push(`c${c.length.toString()}`)
                }), {
                    ev: n.join("")
                }
            } catch (e) {
                throw console.error("error encoding text", e), e
            }
        }
    });
    var U, Q, rt, A, H = b(() => {
        "use strict";
        Se();
        re();
        Q = class Q {
            constructor(e) {
                m(this, "serverTime");
                m(this, "logger");
                m(this, "localTime");
                m(this, "siteId");
                m(this, "endpointKey");
                m(this, "namespace");
                m(this, "environment");
                m(this, "baseSettingsUrl");
                m(this, "baseApiUrl");
                m(this, "ingestionUrl");
                let t = e.settings;
                switch (this.logger = R.getInstance(), this.environment = t.environment, this.environment) {
                    case "staging":
                        this.baseSettingsUrl = "https://settings-staging.luckyorange.com", this.baseApiUrl = "https://api-staging.luckyorange.com", this.ingestionUrl = "https://in-staging.visitors.live";
                        break;
                    case "production":
                        this.baseSettingsUrl = "https://settings.luckyorange.com", this.baseApiUrl = "https://api-preview.luckyorange.com", this.ingestionUrl = "https://in.visitors.live";
                        break
                }
                this.namespace = "shopify", this.siteId = t.siteId, this.localTime = new Date().getTime()
            }
            static createInstance(e) {
                return x(this, null, function*() {
                    if (!g(Q, U)) {
                        M(Q, U, new Q(e));
                        let t = yield Be("es-endpoint-key", e.browser, 2e3, 100);
                        t || (t = (yield(yield fetch(`${g(Q,U).baseSettingsUrl}/${g(Q,U).siteId}`, {
                            method: "GET"
                        })).json()).site.endpointKey, yield e.browser.sessionStorage.setItem("es-endpoint-key", t)), g(Q, U).endpointKey = t;
                        try {
                            yield g(Q, U).fetchServerTime()
                        } catch (n) {
                            console.error("Error getting server time", n)
                        }
                    }
                    return g(Q, U)
                })
            }
            static getInstance() {
                if (!g(Q, U)) throw new Error("SettingsManager not initialized. Call createInstance first");
                return g(Q, U)
            }
            fetchServerTime() {
                return x(this, null, function*() {
                    let e = yield fetch(`${this.baseSettingsUrl}/server-time`);
                    if (!e.ok || e.status !== 200) throw new Error("Error fetching server time");
                    let t = yield e.json();
                    return this.serverTime = t.serverTime, this.localTime = new Date().getTime(), this.serverTime
                })
            }
            getServerTime() {
                if (!this.serverTime) throw new Error("Server time not set");
                return this.serverTime + this.getElapsedTime()
            }
            getElapsedTime() {
                return new Date().getTime() - this.localTime
            }
            getEndpointKey() {
                if (!this.endpointKey) throw new Error("Endpoint key not set");
                return this.endpointKey
            }
        };
        U = new WeakMap, V(Q, U);
        rt = Q, A = rt
    });
    var fe, ie, nt, pe, Ce = b(() => {
        "use strict";
        H();
        re();
        ie = class ie {
            constructor() {
                m(this, "logger");
                m(this, "waiting");
                m(this, "settingsManager");
                m(this, "isConnected");
                m(this, "messageId");
                this.isConnected = !1, this.waiting = {}, this.messageId = 0, this.settingsManager = A.getInstance(), this.logger = R.getInstance()
            }
            static getInstance() {
                if (!g(ie, fe)) throw new Error("RealtimeManager not initialized. Call createInstance first.");
                return g(ie, fe)
            }
            static createInstance() {
                return x(this, null, function*() {
                    return g(ie, fe) || M(ie, fe, new ie), g(ie, fe)
                })
            }
            formatPayloads(e) {
                return e.map(t => ({
                    data: t
                }))
            }
            send(e, t) {
                return x(this, null, function*() {
                    return e === "message" ? yield fetch(`${this.settingsManager.ingestionUrl}/ajax`, {
                        method: "POST",
                        body: JSON.stringify({
                            topic: t.topic,
                            siteId: t.siteId,
                            payloads: t.payloads
                        })
                    }): yield fetch(`${this.settingsManager.ingestionUrl}/exists`, {
                        method: "POST",
                        body: JSON.stringify({
                            siteId: t.siteId,
                            type: t.type,
                            hash: t.hash,
                            k: t.k
                        })
                    })
                })
            }
            publish(e, t) {
                let n = this.settingsManager.siteId;
                if (!n) throw new Error("Site ID not set");
                let i = this.formatPayloads(t);
                return this.send("message", {
                    topic: e,
                    siteId: n,
                    payloads: i
                })
            }
        };
        fe = new WeakMap, V(ie, fe);
        nt = ie, pe = nt
    });
    var cn, Yt, ln, er, tr = b(() => {
        "use strict";
        ne();
        Te();
        Ce();
        cn = r => x(void 0, null, function*() {
            let e = pe.getInstance(),
                t = "events",
                n = r.map(i => xe(i));
            try {
                let i = yield e.publish(t, n);
                if (i.status < 200 || i.status > 299) throw new Error("Error publishing recording-data: non-200 response")
            } catch (i) {
                throw console.error("error publishing recording-data", i), new Error("Error publishing recording-data")
            }
        }), Yt = new B(100, 1, cn), ln = () => {}, er = new B(100, 100, ln)
    });
    var fn, rr, nr = b(() => {
        "use strict";
        se();
        te();
        H();
        ne();
        fn = r => {
            let e = j.getInstance(),
                t = A.getInstance(),
                n = L.getInstance(),
                i = {
                    forms: r
                },
                s = e.getQueue("recording-data"),
                o = t.endpointKey;
            if (!o) throw new Error("Elasticsearch endpointKey not found");
            if (!n.recordingId || !n.sessionId || !n.urlHash) throw new Error("Recording ID or Session ID not set");
            s.push({
                createdAt: t.getServerTime(),
                payload: i,
                t: "r",
                endpointKey: o,
                siteId: t.siteId,
                bps: !0,
                rdc: !0,
                i: n.recordingId,
                seId: n.sessionId,
                uh: n.urlHash,
                swp: !0
            })
        }, rr = new B(10, 3e3, fn, {
            name: "form-interactions"
        })
    });

    function pn(r) {
        var e, t, n;
        return {
            lang: (e = r == null ? void 0 : r.lang) != null ? e : oe == null ? void 0 : oe.lang,
            message: r == null ? void 0 : r.message,
            abortEarly: (t = r == null ? void 0 : r.abortEarly) != null ? t : oe == null ? void 0 : oe.abortEarly,
            abortPipeEarly: (n = r == null ? void 0 : r.abortPipeEarly) != null ? n : oe == null ? void 0 : oe.abortPipeEarly
        }
    }

    function hn(r) {
        return it == null ? void 0 : it.get(r)
    }

    function dn(r) {
        return st == null ? void 0 : st.get(r)
    }

    function mn(r, e) {
        var t;
        return (t = ot == null ? void 0 : ot.get(r)) == null ? void 0 : t.get(e)
    }

    function sr(r) {
        var t, n, i;
        let e = typeof r;
        return e === "string" ? `"${r}"` : e === "number" || e === "bigint" || e === "boolean" ? `${r}` : e === "object" || e === "function" ? (i = r && ((n = (t = Object.getPrototypeOf(r)) == null ? void 0 : t.constructor) == null ? void 0 : n.name)) != null ? i : "null" : e
    }

    function ue(r, e, t, n, i) {
        var f, d, h, p, y, v, E, k;
        let s = i && "input" in i ? i.input : t.value,
            o = (d = (f = i == null ? void 0 : i.expected) != null ? f : r.expects) != null ? d : null,
            c = (h = i == null ? void 0 : i.received) != null ? h : sr(s),
            l = {
                kind: r.kind,
                type: r.type,
                input: s,
                expected: o,
                received: c,
                message: `Invalid ${e}: ${o?`Expected ${o} but r`:"R"}eceived ${c}`,
                requirement: r.requirement,
                path: i == null ? void 0 : i.path,
                issues: i == null ? void 0 : i.issues,
                lang: n.lang,
                abortEarly: n.abortEarly,
                abortPipeEarly: n.abortPipeEarly
            },
            u = r.kind === "schema",
            a = (k = (E = (v = (y = (p = i == null ? void 0 : i.message) != null ? p : r.message) != null ? y : mn(r.reference, l.lang)) != null ? v : u ? dn(l.lang) : null) != null ? E : n.message) != null ? k : hn(l.lang);
        a && (l.message = typeof a == "function" ? a(l) : a), u && (t.typed = !1), t.issues ? t.issues.push(l) : t.issues = [l]
    }

    function z(r) {
        return {
            version: 1,
            vendor: "valibot",
            validate(e) {
                return r["~run"]({
                    value: e
                }, pn())
            }
        }
    }

    function yn(r, e) {
        return Object.hasOwn(r, e) && e !== "__proto__" && e !== "prototype" && e !== "constructor"
    }

    function vn(r, e) {
        var n;
        let t = [...new Set(r)];
        return t.length > 1 ? `(${t.join(` ${e} `)})` : (n = t[0]) != null ? n : "never"
    }

    function or(r, e, t) {
        return typeof r.default == "function" ? r.default(e, t) : r.default
    }

    function _e(r, e) {
        return !r["~run"]({
            value: e
        }, {
            abortEarly: !0
        }).issues
    }

    function Oe() {
        return {
            kind: "schema",
            type: "any",
            reference: Oe,
            expects: "any",
            async: !1,
            get "~standard" () {
                return z(this)
            },
            "~run" (r) {
                return r.typed = !0, r
            }
        }
    }

    function qe(r, e) {
        return {
            kind: "schema",
            type: "array",
            reference: qe,
            expects: "Array",
            async: !1,
            item: r,
            message: e,
            get "~standard" () {
                return z(this)
            },
            "~run" (t, n) {
                var s;
                let i = t.value;
                if (Array.isArray(i)) {
                    t.typed = !0, t.value = [];
                    for (let o = 0; o < i.length; o++) {
                        let c = i[o],
                            l = this.item["~run"]({
                                value: c
                            }, n);
                        if (l.issues) {
                            let u = {
                                type: "array",
                                origin: "value",
                                input: i,
                                key: o,
                                value: c
                            };
                            for (let a of l.issues) a.path ? a.path.unshift(u) : a.path = [u], (s = t.issues) == null || s.push(a);
                            if (t.issues || (t.issues = l.issues), n.abortEarly) {
                                t.typed = !1;
                                break
                            }
                        }
                        l.typed || (t.typed = !1), t.value.push(l.value)
                    }
                } else ue(this, "type", t, n);
                return t
            }
        }
    }

    function ut(r) {
        return {
            kind: "schema",
            type: "boolean",
            reference: ut,
            expects: "boolean",
            async: !1,
            message: r,
            get "~standard" () {
                return z(this)
            },
            "~run" (e, t) {
                return typeof e.value == "boolean" ? e.typed = !0 : ue(this, "type", e, t), e
            }
        }
    }

    function je(r) {
        return {
            kind: "schema",
            type: "lazy",
            reference: je,
            expects: "unknown",
            async: !1,
            getter: r,
            get "~standard" () {
                return z(this)
            },
            "~run" (e, t) {
                return this.getter(e.value)["~run"](e, t)
            }
        }
    }

    function $(r, e) {
        return {
            kind: "schema",
            type: "literal",
            reference: $,
            expects: sr(r),
            async: !1,
            literal: r,
            message: e,
            get "~standard" () {
                return z(this)
            },
            "~run" (t, n) {
                return t.value === this.literal ? t.typed = !0 : ue(this, "type", t, n), t
            }
        }
    }

    function at(r, e) {
        return {
            kind: "schema",
            type: "nullable",
            reference: at,
            expects: `(${r.expects} | null)`,
            async: !1,
            wrapped: r,
            default: e,
            get "~standard" () {
                return z(this)
            },
            "~run" (t, n) {
                return t.value === null && (this.default !== void 0 && (t.value = or(this, t, n)), t.value === null) ? (t.typed = !0, t) : this.wrapped["~run"](t, n)
            }
        }
    }

    function D(r) {
        return {
            kind: "schema",
            type: "number",
            reference: D,
            expects: "number",
            async: !1,
            message: r,
            get "~standard" () {
                return z(this)
            },
            "~run" (e, t) {
                return typeof e.value == "number" && !isNaN(e.value) ? e.typed = !0 : ue(this, "type", e, t), e
            }
        }
    }

    function N(r, e) {
        return {
            kind: "schema",
            type: "object",
            reference: N,
            expects: "Object",
            async: !1,
            entries: r,
            message: e,
            get "~standard" () {
                return z(this)
            },
            "~run" (t, n) {
                var s;
                let i = t.value;
                if (i && typeof i == "object") {
                    t.typed = !0, t.value = {};
                    for (let o in this.entries) {
                        let c = i[o],
                            l = this.entries[o]["~run"]({
                                value: c
                            }, n);
                        if (l.issues) {
                            let u = {
                                type: "object",
                                origin: "value",
                                input: i,
                                key: o,
                                value: c
                            };
                            for (let a of l.issues) a.path ? a.path.unshift(u) : a.path = [u], (s = t.issues) == null || s.push(a);
                            if (t.issues || (t.issues = l.issues), n.abortEarly) {
                                t.typed = !1;
                                break
                            }
                        }
                        l.typed || (t.typed = !1), (l.value !== void 0 || o in i) && (t.value[o] = l.value)
                    }
                } else ue(this, "type", t, n);
                return t
            }
        }
    }

    function ae(r, e) {
        return {
            kind: "schema",
            type: "optional",
            reference: ae,
            expects: `(${r.expects} | undefined)`,
            async: !1,
            wrapped: r,
            default: e,
            get "~standard" () {
                return z(this)
            },
            "~run" (t, n) {
                return t.value === void 0 && (this.default !== void 0 && (t.value = or(this, t, n)), t.value === void 0) ? (t.typed = !0, t) : this.wrapped["~run"](t, n)
            }
        }
    }

    function $e(r, e, t) {
        return {
            kind: "schema",
            type: "record",
            reference: $e,
            expects: "Object",
            async: !1,
            key: r,
            value: e,
            message: t,
            get "~standard" () {
                return z(this)
            },
            "~run" (n, i) {
                var o, c;
                let s = n.value;
                if (s && typeof s == "object") {
                    n.typed = !0, n.value = {};
                    for (let l in s)
                        if (yn(s, l)) {
                            let u = s[l],
                                a = this.key["~run"]({
                                    value: l
                                }, i);
                            if (a.issues) {
                                let d = {
                                    type: "object",
                                    origin: "key",
                                    input: s,
                                    key: l,
                                    value: u
                                };
                                for (let h of a.issues) h.path = [d], (o = n.issues) == null || o.push(h);
                                if (n.issues || (n.issues = a.issues), i.abortEarly) {
                                    n.typed = !1;
                                    break
                                }
                            }
                            let f = this.value["~run"]({
                                value: u
                            }, i);
                            if (f.issues) {
                                let d = {
                                    type: "object",
                                    origin: "value",
                                    input: s,
                                    key: l,
                                    value: u
                                };
                                for (let h of f.issues) h.path ? h.path.unshift(d) : h.path = [d], (c = n.issues) == null || c.push(h);
                                if (n.issues || (n.issues = f.issues), i.abortEarly) {
                                    n.typed = !1;
                                    break
                                }
                            }(!a.typed || !f.typed) && (n.typed = !1), a.typed && (n.value[a.value] = f.value)
                        }
                } else ue(this, "type", n, i);
                return n
            }
        }
    }

    function C(r) {
        return {
            kind: "schema",
            type: "string",
            reference: C,
            expects: "string",
            async: !1,
            message: r,
            get "~standard" () {
                return z(this)
            },
            "~run" (e, t) {
                return typeof e.value == "string" ? e.typed = !0 : ue(this, "type", e, t), e
            }
        }
    }

    function ir(r) {
        let e;
        if (r)
            for (let t of r) e ? e.push(...t.issues) : e = t.issues;
        return e
    }

    function ct(r, e) {
        return {
            kind: "schema",
            type: "union",
            reference: ct,
            expects: vn(r.map(t => t.expects), "|"),
            async: !1,
            options: r,
            message: e,
            get "~standard" () {
                return z(this)
            },
            "~run" (t, n) {
                let i, s, o;
                for (let c of this.options) {
                    let l = c["~run"]({
                        value: t.value
                    }, n);
                    if (l.typed)
                        if (l.issues) s ? s.push(l) : s = [l];
                        else {
                            i = l;
                            break
                        }
                    else o ? o.push(l) : o = [l]
                }
                if (i) return i;
                if (s) {
                    if (s.length === 1) return s[0];
                    ue(this, "type", t, n, {
                        issues: ir(s)
                    }), t.typed = !0
                } else {
                    if ((o == null ? void 0 : o.length) === 1) return o[0];
                    ue(this, "type", t, n, {
                        issues: ir(o)
                    })
                }
                return t
            }
        }
    }

    function lt() {
        return {
            kind: "schema",
            type: "unknown",
            reference: lt,
            expects: "unknown",
            async: !1,
            get "~standard" () {
                return z(this)
            },
            "~run" (r) {
                return r.typed = !0, r
            }
        }
    }
    var oe, it, st, ot, _i, ft = b(() => {
        _i = new RegExp("^(?:[\\u{1F1E6}-\\u{1F1FF}]{2}|\\u{1F3F4}[\\u{E0061}-\\u{E007A}]{2}[\\u{E0030}-\\u{E0039}\\u{E0061}-\\u{E007A}]{1,3}\\u{E007F}|(?:\\p{Emoji}\\uFE0F\\u20E3?|\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}?|\\p{Emoji_Presentation})(?:\\u200D(?:\\p{Emoji}\\uFE0F\\u20E3?|\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}?|\\p{Emoji_Presentation}))*)+$", "u")
    });
    var ht, pt, gn, bn, dt, Ai, Di, Ni, Pi, Li, ar = b(() => {
        "use strict";
        ft();
        ht = N({
            createdAt: D(),
            endpointKey: C(),
            siteId: C(),
            t: $("r"),
            bps: $(!0),
            rdc: $(!0),
            i: C(),
            payload: $e(C(), lt()),
            seId: C(),
            uh: D(),
            swp: $(!0)
        }), pt = N({
            i: D(),
            n: D(),
            t: ae(C()),
            textContent: ae(C()),
            g: ae(C()),
            a: ae($e(C(), C())),
            c: ae(qe(Oe())),
            parentNode: ae(je(() => pt)),
            previouseSibling: ae(je(() => pt))
        }), gn = N({
            children: qe(pt)
        }), bn = N({
            c: C(),
            d: C()
        }), dt = N({
            createdAt: D(),
            endpointKey: C(),
            siteId: C(),
            payload: at(ct([gn, bn])),
            type: $("d"),
            hash: N({
                type: C(),
                hash: C()
            }),
            store: ut(),
            gcs: $(!0),
            bps: $(!0),
            b: C(),
            rdc: $(!0),
            i: C(),
            seId: C(),
            uh: D(),
            swp: $(!0)
        }), Ai = N({
            createdAt: D(),
            endpointKey: C(),
            payload: Oe(),
            siteId: C(),
            id: C(),
            name: C()
        }), Di = N({
            ts: D(),
            t: $("d"),
            a: Oe()
        }), Ni = N({
            t: $("m"),
            ts: D(),
            f: N({
                q: C()
            }),
            c: N({
                x: D(),
                y: D(),
                rx: D(),
                ry: D()
            })
        }), Pi = N({
            t: $("s"),
            ts: D(),
            f: N({
                q: C()
            }),
            st: D(),
            sl: D()
        }), Li = N({
            t: $("resize"),
            ts: D(),
            viewport: N({
                width: D(),
                height: D()
            }),
            browser: N({
                width: D(),
                height: D()
            })
        })
    });
    var wn, In, Me, mt = b(() => {
        "use strict";
        ar();
        Ce();
        Te();
        ft();
        ne();
        re();
        wn = r => x(void 0, null, function*() {
            let e = R.getInstance(),
                t = pe.getInstance(),
                n = "recording-data",
                i = r.map(s => xe(s));
            try {
                let s = yield t.publish(n, i);
                if (s.status < 200 || s.status > 299) throw new Error("Error publishing recording-data: non-200 response")
            } catch (s) {
                throw e.error("error publishing recording-data", s), new Error("Error publishing recording-data")
            }
        }), In = r => {
            let e;
            _e(ht, r) && (r.payload.others ? e = r.payload.others : r.payload.forms ? e = r.payload.forms : r.payload.clicks ? e = r.payload.clicks : r.payload.scrolls ? e = r.payload.scrolls : r.payload.moves && (e = r.payload.moves)), _e(dt, r) && (e = r.payload);
            let t = Jt(e),
                n = {
                    c: t.encoding,
                    d: t.output
                };
            if (_e(ht, r)) {
                let i = r;
                return r.payload.others ? i.payload.others = n : r.payload.forms ? i.payload.forms = n : r.payload.clicks ? i.payload.clicks = n : r.payload.scrolls ? i.payload.scrolls = n : r.payload.moves && (i.payload.moves = n), i
            }
            if (_e(dt, r)) {
                let i = r;
                return i.payload = n, i
            }
            throw new Error("Invalid item type")
        }, Me = new B(100, 100, wn, {
            prePush: In,
            name: "recording-data"
        })
    });
    var cr, lr = b(() => {
        "use strict";
        cr = r => {
            let e = {},
                t = 0,
                n = {
                    a: [],
                    c: [],
                    t: []
                };
            return r.filter(i => i.c.length).map(i => i.c).flat(1).forEach(i => {
                i.n.forEach(s => {
                    var l, u, a, f;
                    e[s.i] || (e[s.i] = {
                        i: s.i,
                        addRemove: !1,
                        childIds: [],
                        order: t += 1
                    });
                    let o = s.i;
                    if (i.t === "r" && ((u = (l = e[o]) == null ? void 0 : l.c) == null ? void 0 : u.t) === "a") {
                        e[o].c = void 0, e[o].addRemove = !0, e[o].childIds.forEach(d => {
                            e[d] && (e[d].c = void 0, e[d].addRemove = !0)
                        });
                        return
                    }
                    let c = (a = s.parentNode) == null ? void 0 : a.i;
                    i.t === "a" && c && ((f = e[c]) == null || f.childIds.push(s.i)), e[o] && (e[o].c = {
                        t: i.t,
                        n: [s]
                    })
                })
            }), r.filter(i => i.a.length).map(i => i.a).flat(1).forEach(i => {
                var s, o;
                e[i.i] || (e[i.i] = {
                    i: i.i,
                    addRemove: !1,
                    childIds: [],
                    order: t += 1
                }), e[i.i].a ? Object.assign((o = (s = e[i.i].a) == null ? void 0 : s.a) != null ? o : {}, i.a) : e[i.i].a = {
                    i: i.i,
                    a: Object.assign({}, i.a)
                }
            }), r.filter(i => i.t.length).map(i => i.t).flat(1).forEach(i => {
                e[i.i] || (e[i.i] = {
                    i: i.i,
                    addRemove: !1,
                    childIds: [],
                    order: t += 1
                }), e[i.i].t = i
            }), Object.values(e).sort((i, s) => i.order - s.order).forEach(({
                a: i,
                c: s,
                t: o,
                addRemove: c
            }) => {
                i && !c && n.a.push(i), s && n.c.push(s), o && n.t.push(o)
            }), n
        }
    });
    var kn, fr, pr = b(() => {
        "use strict";
        H();
        se();
        lr();
        ne();
        kn = r => {
            let e = A.getInstance(),
                t = j.getInstance(),
                n = cr(r),
                i = {
                    ts: e.getServerTime(),
                    t: "d",
                    a: n
                };
            t.getQueue("queueBatchQueue").push(i)
        }, fr = new B(100, 100, kn, {
            name: "mutations"
        })
    });
    var En, hr, dr = b(() => {
        "use strict";
        se();
        H();
        te();
        ne();
        En = r => {
            let e = j.getInstance(),
                t = L.getInstance(),
                n = A.getInstance(),
                i = e.getQueue("recording-data");
            if (!t.recordingId || !t.sessionId || !t.urlHash) throw new Error("Recording ID or Session ID not set");
            if (!n.endpointKey) throw new Error("Elasticsearch endpointKey not found");
            let s = {
                others: r
            };
            i.push({
                createdAt: n.getServerTime(),
                endpointKey: n.endpointKey,
                siteId: n.siteId,
                payload: s,
                t: "r",
                rdc: !0,
                bps: !0,
                i: t.recordingId,
                seId: t.sessionId,
                uh: t.urlHash,
                swp: !0
            })
        }, hr = new B(100, 3e3, En, {
            name: "queueBatchQueue"
        })
    });
    var Sn, mr, yr = b(() => {
        "use strict";
        se();
        te();
        H();
        ne();
        Sn = r => {
            let e = j.getInstance(),
                t = A.getInstance(),
                n = L.getInstance(),
                i = e.getQueue("recording-data"),
                s = t.endpointKey;
            if (!s) throw new Error("Elasticsearch endpointKey not found");
            if (!n.recordingId || !n.sessionId || !n.urlHash) throw new Error("Recording ID or Session ID not set");
            let o = {
                moves: r
            };
            i.push({
                createdAt: t.getServerTime(),
                payload: o,
                t: "r",
                endpointKey: s,
                siteId: t.siteId,
                rdc: !0,
                bps: !0,
                i: n.recordingId,
                seId: n.sessionId,
                uh: n.urlHash,
                swp: !0
            })
        }, mr = new B(10, 3e3, Sn, {
            name: "moves"
        })
    });
    var xn, vr, gr = b(() => {
        "use strict";
        se();
        te();
        H();
        ne();
        xn = r => {
            let e = j.getInstance(),
                t = A.getInstance(),
                n = L.getInstance(),
                i = e.getQueue("recording-data"),
                s = t.endpointKey;
            if (!s) throw new Error("Elasticsearch endpointKey not found");
            if (!n.recordingId || !n.sessionId || !n.urlHash) throw new Error("Recording ID or Session ID not set");
            let o = {
                scrolls: r
            };
            i.push({
                createdAt: t.getServerTime(),
                payload: o,
                t: "r",
                endpointKey: s,
                siteId: t.siteId,
                rdc: !0,
                bps: !0,
                i: n.recordingId,
                seId: n.sessionId,
                uh: n.urlHash,
                swp: !0
            })
        }, vr = new B(10, 3e3, xn, {
            name: "scrolls"
        })
    });
    var Tn, br, wr = b(() => {
        "use strict";
        H();
        se();
        ne();
        te();
        Tn = r => {
            let e = j.getInstance(),
                t = A.getInstance(),
                n = L.getInstance(),
                i = e.getQueue("recording-data"),
                s = {
                    others: r
                };
            i.push({
                createdAt: t.getServerTime(),
                payload: s,
                t: "r",
                endpointKey: t.getEndpointKey(),
                siteId: t.siteId,
                rdc: !0,
                bps: !0,
                i: n.getRecordingId(),
                seId: n.getSessionId(),
                uh: n.getUrlHash(),
                swp: !0
            })
        }, br = new B(10, 3e3, Tn, {
            name: "resizes"
        })
    });
    var ge, me, yt, j, se = b(() => {
        "use strict";
        tr();
        nr();
        mt();
        pr();
        dr();
        yr();
        gr();
        wr();
        me = class me {
            constructor() {
                m(this, "queues", {})
            }
            static getInstance() {
                return g(me, ge) || M(me, ge, new me), g(me, ge)
            }
            initializeQueues() {
                this.addQueue("queueBatchQueue", hr), this.addQueue("mutations", fr), this.addQueue("batched-summary", er), this.addQueue("recording-data", Me), this.addQueue("form-interactions", rr), this.addQueue("moves", mr), this.addQueue("events", Yt), this.addQueue("scrolls", vr), this.addQueue("resizes", br)
            }
            addQueue(e, t) {
                this.queues[e] = t
            }
            getQueue(e) {
                return this.queues[e]
            }
        };
        ge = new WeakMap, V(me, ge);
        yt = me, j = yt
    });

    function be(r, e, t, n) {
        function i(s) {
            return s instanceof t ? s : new t(function(o) {
                o(s)
            })
        }
        return new(t || (t = Promise))(function(s, o) {
            function c(a) {
                try {
                    u(n.next(a))
                } catch (f) {
                    o(f)
                }
            }

            function l(a) {
                try {
                    u(n.throw(a))
                } catch (f) {
                    o(f)
                }
            }

            function u(a) {
                a.done ? s(a.value) : i(a.value).then(c, l)
            }
            u((n = n.apply(r, e || [])).next())
        })
    }

    function Ir(r) {
        var e = typeof Symbol == "function" && Symbol.iterator,
            t = e && r[e],
            n = 0;
        if (t) return t.call(r);
        if (r && typeof r.length == "number") return {
            next: function() {
                return r && n >= r.length && (r = void 0), {
                    value: r && r[n++],
                    done: !r
                }
            }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function Z(r) {
        return this instanceof Z ? (this.v = r, this) : new Z(r)
    }

    function kr(r, e, t) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n = t.apply(r, e || []),
            i, s = [];
        return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), c("next"), c("throw"), c("return", o), i[Symbol.asyncIterator] = function() {
            return this
        }, i;

        function o(h) {
            return function(p) {
                return Promise.resolve(p).then(h, f)
            }
        }

        function c(h, p) {
            n[h] && (i[h] = function(y) {
                return new Promise(function(v, E) {
                    s.push([h, y, v, E]) > 1 || l(h, y)
                })
            }, p && (i[h] = p(i[h])))
        }

        function l(h, p) {
            try {
                u(n[h](p))
            } catch (y) {
                d(s[0][3], y)
            }
        }

        function u(h) {
            h.value instanceof Z ? Promise.resolve(h.value.v).then(a, f) : d(s[0][2], h)
        }

        function a(h) {
            l("next", h)
        }

        function f(h) {
            l("throw", h)
        }

        function d(h, p) {
            h(p), s.shift(), s.length && l(s[0][0], s[0][1])
        }
    }

    function _n(r) {
        var e, t;
        return e = {}, n("next"), n("throw", function(i) {
            throw i
        }), n("return"), e[Symbol.iterator] = function() {
            return this
        }, e;

        function n(i, s) {
            e[i] = r[i] ? function(o) {
                return (t = !t) ? {
                    value: Z(r[i](o)),
                    done: !1
                } : s ? s(o) : o
            } : s
        }
    }

    function On(r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var e = r[Symbol.asyncIterator],
            t;
        return e ? e.call(r) : (r = typeof Ir == "function" ? Ir(r) : r[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
            return this
        }, t);

        function n(s) {
            t[s] = r[s] && function(o) {
                return new Promise(function(c, l) {
                    o = r[s](o), i(c, l, o.done, o.value)
                })
            }
        }

        function i(s, o, c, l) {
            Promise.resolve(l).then(function(u) {
                s({
                    value: u,
                    done: c
                })
            }, o)
        }
    }

    function Y(r) {
        return new G(r)
    }
    var Cn, Er, ce, Qe, Cs, _s, Os, Sr, An, xr, Dn, vt, he, K, G, As, Tr = b(() => {
        Cn = {
            withStackTrace: !1
        }, Er = (r, e, t = Cn) => {
            let n = e.isOk() ? {
                    type: "Ok",
                    value: e.value
                } : {
                    type: "Err",
                    value: e.error
                },
                i = t.withStackTrace ? new Error().stack : void 0;
            return {
                data: n,
                message: r,
                stack: i
            }
        };
        ce = class r {
            constructor(e) {
                this._promise = e
            }
            static fromSafePromise(e) {
                let t = e.then(n => new K(n));
                return new r(t)
            }
            static fromPromise(e, t) {
                let n = e.then(i => new K(i)).catch(i => new G(t(i)));
                return new r(n)
            }
            static fromThrowable(e, t) {
                return (...n) => new r(be(this, void 0, void 0, function*() {
                    try {
                        return new K(yield e(...n))
                    } catch (i) {
                        return new G(t ? t(i) : i)
                    }
                }))
            }
            static combine(e) {
                return An(e)
            }
            static combineWithAllErrors(e) {
                return Dn(e)
            }
            map(e) {
                return new r(this._promise.then(t => be(this, void 0, void 0, function*() {
                    return t.isErr() ? new G(t.error) : new K(yield e(t.value))
                })))
            }
            andThrough(e) {
                return new r(this._promise.then(t => be(this, void 0, void 0, function*() {
                    if (t.isErr()) return new G(t.error);
                    let n = yield e(t.value);
                    return n.isErr() ? new G(n.error) : new K(t.value)
                })))
            }
            andTee(e) {
                return new r(this._promise.then(t => be(this, void 0, void 0, function*() {
                    if (t.isErr()) return new G(t.error);
                    try {
                        yield e(t.value)
                    } catch (n) {}
                    return new K(t.value)
                })))
            }
            mapErr(e) {
                return new r(this._promise.then(t => be(this, void 0, void 0, function*() {
                    return t.isOk() ? new K(t.value) : new G(yield e(t.error))
                })))
            }
            andThen(e) {
                return new r(this._promise.then(t => {
                    if (t.isErr()) return new G(t.error);
                    let n = e(t.value);
                    return n instanceof r ? n._promise : n
                }))
            }
            orElse(e) {
                return new r(this._promise.then(t => be(this, void 0, void 0, function*() {
                    return t.isErr() ? e(t.error) : new K(t.value)
                })))
            }
            match(e, t) {
                return this._promise.then(n => n.match(e, t))
            }
            unwrapOr(e) {
                return this._promise.then(t => t.unwrapOr(e))
            }
            safeUnwrap() {
                return kr(this, arguments, function*() {
                    return yield Z(yield Z(yield* Rt(_n(On(yield Z(this._promise.then(t => t.safeUnwrap())))))))
                })
            }
            then(e, t) {
                return this._promise.then(e, t)
            }[Symbol.asyncIterator]() {
                return kr(this, arguments, function*() {
                    let t = yield Z(this._promise);
                    return t.isErr() && (yield yield Z(Qe(t.error))), yield Z(t.value)
                })
            }
        }, Qe = r => new ce(Promise.resolve(new G(r))), Cs = ce.fromPromise, _s = ce.fromSafePromise, Os = ce.fromThrowable, Sr = r => {
            let e = he([]);
            for (let t of r)
                if (t.isErr()) {
                    e = Y(t.error);
                    break
                } else e.map(n => n.push(t.value));
            return e
        }, An = r => ce.fromSafePromise(Promise.all(r)).andThen(Sr), xr = r => {
            let e = he([]);
            for (let t of r) t.isErr() && e.isErr() ? e.error.push(t.error) : t.isErr() && e.isOk() ? e = Y([t.error]) : t.isOk() && e.isOk() && e.value.push(t.value);
            return e
        }, Dn = r => ce.fromSafePromise(Promise.all(r)).andThen(xr);
        (function(r) {
            function e(i, s) {
                return (...o) => {
                    try {
                        let c = i(...o);
                        return he(c)
                    } catch (c) {
                        return Y(s ? s(c) : c)
                    }
                }
            }
            r.fromThrowable = e;

            function t(i) {
                return Sr(i)
            }
            r.combine = t;

            function n(i) {
                return xr(i)
            }
            r.combineWithAllErrors = n
        })(vt || (vt = {}));
        he = r => new K(r);
        K = class {
            constructor(e) {
                this.value = e
            }
            isOk() {
                return !0
            }
            isErr() {
                return !this.isOk()
            }
            map(e) {
                return he(e(this.value))
            }
            mapErr(e) {
                return he(this.value)
            }
            andThen(e) {
                return e(this.value)
            }
            andThrough(e) {
                return e(this.value).map(t => this.value)
            }
            andTee(e) {
                try {
                    e(this.value)
                } catch (t) {}
                return he(this.value)
            }
            orElse(e) {
                return he(this.value)
            }
            asyncAndThen(e) {
                return e(this.value)
            }
            asyncAndThrough(e) {
                return e(this.value).map(() => this.value)
            }
            asyncMap(e) {
                return ce.fromSafePromise(e(this.value))
            }
            unwrapOr(e) {
                return this.value
            }
            match(e, t) {
                return e(this.value)
            }
            safeUnwrap() {
                let e = this.value;
                return function*() {
                    return e
                }()
            }
            _unsafeUnwrap(e) {
                return this.value
            }
            _unsafeUnwrapErr(e) {
                throw Er("Called `_unsafeUnwrapErr` on an Ok", this, e)
            }*[Symbol.iterator]() {
                return this.value
            }
        }, G = class {
            constructor(e) {
                this.error = e
            }
            isOk() {
                return !1
            }
            isErr() {
                return !this.isOk()
            }
            map(e) {
                return Y(this.error)
            }
            mapErr(e) {
                return Y(e(this.error))
            }
            andThrough(e) {
                return Y(this.error)
            }
            andTee(e) {
                return Y(this.error)
            }
            andThen(e) {
                return Y(this.error)
            }
            orElse(e) {
                return e(this.error)
            }
            asyncAndThen(e) {
                return Qe(this.error)
            }
            asyncAndThrough(e) {
                return Qe(this.error)
            }
            asyncMap(e) {
                return Qe(this.error)
            }
            unwrapOr(e) {
                return e
            }
            match(e, t) {
                return t(this.error)
            }
            safeUnwrap() {
                let e = this.error;
                return function*() {
                    throw yield Y(e), new Error("Do not use this generator out of `safeTry`")
                }()
            }
            _unsafeUnwrap(e) {
                throw Er("Called `_unsafeUnwrap` on an Err", this, e)
            }
            _unsafeUnwrapErr(e) {
                return this.error
            }*[Symbol.iterator]() {
                let e = this;
                return yield e, e
            }
        }, As = vt.fromThrowable
    });

    function ye(r, e = new Date) {
        return `${r}-${e.getTime()}-${Nn()}`
    }

    function Nn() {
        return `${Math.random().toString(16)}000000000`.substring(2, 8)
    }
    var gt = b(() => {
        Tr()
    });
    var we, ve, bt, wt, Ie, ze = b(() => {
        "use strict";
        H();
        ve = class ve {
            constructor() {
                m(this, "settingsManager");
                m(this, "events");
                this.settingsManager = A.getInstance(), this.events = new wt
            }
            static getInstance() {
                return g(ve, we) || M(ve, we, new ve), g(ve, we)
            }
        };
        we = new WeakMap, V(ve, we);
        bt = ve, wt = class {
            constructor() {
                m(this, "environemnt");
                m(this, "siteId");
                m(this, "apiBase");
                let e = A.getInstance();
                this.environemnt = e.environment, this.siteId = e.siteId, this.apiBase = e.baseApiUrl
            }
            track(e, t, n) {
                return x(this, null, function*() {
                    var s;
                    let i = {
                        name: e,
                        namespace: (s = n.namespace) != null ? s : "sessions",
                        id: n.id,
                        meta: t,
                        sessionId: n.sessionId,
                        userId: n.userId,
                        visitorId: n.visitorId,
                        mood: n.mood,
                        revenue: n.revenue,
                        pageId: n.pageId
                    };
                    return fetch(`${this.apiBase}/events/logs`, {
                        method: "POST",
                        body: JSON.stringify(i),
                        headers: {
                            "x-lucky-site-id": this.siteId,
                            origin: "lucky-orange-web-pixel"
                        },
                        mode: "cors",
                        keepalive: !0
                    })
                })
            }
        }, Ie = bt
    });
    var Cr, q, P, It, L, te = b(() => {
        "use strict";
        se();
        gt();
        Et();
        Cr = Ne(Le());
        Se();
        H();
        Ce();
        ze();
        Te();
        mt();
        re();
        P = class P {
            constructor() {
                m(this, "queueManager");
                m(this, "logger");
                m(this, "vTree");
                m(this, "rootNode");
                m(this, "shopifyNodes");
                m(this, "treeHash");
                m(this, "hashCachedTree");
                m(this, "viewport");
                m(this, "visitorId");
                m(this, "sessionId");
                m(this, "pageId");
                m(this, "tabId");
                m(this, "urlHash");
                m(this, "url");
                m(this, "recordingId");
                m(this, "debounceTracker");
                m(this, "formInteractions");
                m(this, "session");
                m(this, "startRecording", (e, t) => {
                    let n = Ie.getInstance(),
                        i = A.getInstance(),
                        s = i.getServerTime();
                    this.recordingId = ye(t, new Date(s)), this.rootNode = e;
                    let o = Object.assign({
                            recursive: !0
                        }, {}),
                        c = _r(e, o),
                        l = Or(c, t);
                    this.vTree = c, this.treeHash = l, this.shopifyNodes = kt(e), this.saveTree().then(() => {
                        Me.push({
                            createdAt: i.getServerTime(),
                            endpointKey: i.getEndpointKey(),
                            siteId: i.siteId,
                            payload: {
                                others: []
                            },
                            t: "r",
                            rdc: !0,
                            bps: !0,
                            i: this.getRecordingId(),
                            seId: this.getSessionId(),
                            uh: this.getUrlHash(),
                            swp: !0
                        })
                    }).catch(f => {
                        throw this.logger.error("error saving tree", f), new Error("Error saving tree")
                    });
                    let u = this.getUrl(),
                        a = {
                            shopifyWebPixelEvent: !0,
                            domHash: l,
                            screen: {
                                viewport: this.getViewport()
                            },
                            size: {
                                dom: tt(JSON.stringify(this.vTree)),
                                other: 0
                            },
                            tabId: this.getTabId(),
                            url: {
                                hash: u.hash,
                                host: u.host,
                                href: u.href,
                                path: u.pathname,
                                port: u.port,
                                protocol: u.protocol,
                                search: u.search
                            },
                            cv: 1,
                            bps: !0
                        };
                    n.events.track("Recording Started", a, {
                        id: this.recordingId,
                        sessionId: this.getSessionId(),
                        visitorId: this.getVisitorId(),
                        pageId: this.getPageId(),
                        namespace: "sessions"
                    }).catch(f => {
                        throw this.logger.error("Error tracking recording_started event:", f), new Error("Error tracking recording_started event")
                    })
                });
                this.queueManager = j.getInstance(), this.logger = R.getInstance(), this.hashCachedTree = !1, this.debounceTracker = {
                    click: -1,
                    scroll: -1,
                    mouseMove: -1
                }, this.formInteractions = []
            }
            static createInstance(e) {
                return x(this, null, function*() {
                    if (!g(P, q)) {
                        M(P, q, new P);
                        let n = (yield g(P, q).fetchBrowserData(e))[0];
                        if (!n) throw new Error("Error getting session info");
                        let i = JSON.parse(n),
                            s = new URL(e.init.context.window.location.href),
                            o = (0, Cr.default)(e.init.context.window.location.href),
                            c = {
                                width: e.init.context.window.innerWidth,
                                height: e.init.context.window.innerHeight
                            },
                            l = A.getInstance();
                        g(P, q).session = i, g(P, q).tabId = ye(e.settings.siteId, new Date(l.getServerTime())), g(P, q).pageId = i.pageId, g(P, q).sessionId = i.id, g(P, q).visitorId = i.visitorId, g(P, q).urlHash = o, g(P, q).url = s, g(P, q).viewport = c
                    }
                    return g(P, q)
                })
            }
            static getInstance() {
                if (!g(P, q)) throw new Error("RecordingManager not initialized. Call createInstance first.");
                return g(P, q)
            }
            fetchBrowserData(e) {
                return x(this, null, function*() {
                    let t = [Re("lo-session", e.browser, 2e3, 100), Be("lo_tabId", e.browser, 2e3, 100)];
                    return yield Promise.all(t)
                })
            }
            getVisitorId() {
                if (!this.visitorId) throw new Error("Visitor ID not set");
                return this.visitorId
            }
            getSessionId() {
                if (!this.sessionId) throw new Error("Session ID not set");
                return this.sessionId
            }
            getPageId() {
                if (!this.pageId) throw new Error("Page ID not set");
                return this.pageId
            }
            getTabId() {
                if (!this.tabId) throw new Error("Tab ID not set");
                return this.tabId
            }
            getRecordingId() {
                if (!this.recordingId) throw new Error("Recording ID not set");
                return this.recordingId
            }
            getUrlHash() {
                if (!this.urlHash) throw new Error("URL hash not set");
                return this.urlHash
            }
            getViewport() {
                if (!this.viewport) throw new Error("Viewport not set");
                return this.viewport
            }
            getUrl() {
                if (!this.url) throw new Error("URL not set");
                return this.url
            }
            getSession() {
                if (!this.session) throw new Error("Session not set");
                return this.session
            }
            saveTree() {
                return x(this, null, function*() {
                    let e = pe.getInstance(),
                        t = A.getInstance(),
                        n = t.siteId;
                    if (!t.endpointKey) throw new Error("No endpointKey provided");
                    if (!this.treeHash) throw new Error("Tree hash has not been calculated");
                    try {
                        (yield e.send("exists", {
                            k: t.endpointKey,
                            type: this.treeHash.type,
                            hash: this.treeHash.hash,
                            siteId: n
                        })).status === 200 && (this.hashCachedTree = !0)
                    } catch (s) {
                        throw this.logger.error("error saving tree", s), new Error("Error saving tree")
                    }
                    let i = this.queueManager.getQueue("recording-data");
                    if (!this.recordingId || !this.sessionId || !this.urlHash) throw new Error("Recording has not been started");
                    if (!this.vTree) throw new Error("Tree has not been built");
                    i.push({
                        createdAt: t.getServerTime(),
                        siteId: t.siteId,
                        endpointKey: t.endpointKey,
                        payload: this.vTree,
                        type: "d",
                        hash: this.treeHash,
                        store: !0,
                        gcs: !0,
                        bps: !0,
                        b: this.getUrl().host,
                        rdc: !0,
                        i: this.recordingId,
                        seId: this.sessionId,
                        uh: this.urlHash,
                        swp: !0
                    }, {
                        flushImmediately: !0
                    })
                })
            }
            addFragmentToLocalCache(e) {
                if (!this.shopifyNodes) throw new Error("Dom cache not yet created");
                this.shopifyNodes[e.node.serializationId] || (this.shopifyNodes[e.node.serializationId] = e, e.children.forEach(t => {
                    this.addFragmentToLocalCache(t)
                }))
            }
        };
        q = new WeakMap, V(P, q);
        It = P, L = It
    });
    var Ar, _r, kt, Ve, ee, Or, xt, St, Tt, Et = b(() => {
        "use strict";
        Qt();
        Ar = Ne(Le());
        te();
        _r = (r, e) => {
            let t = [];
            return r.children.forEach(n => {
                let i = ee(n, e);
                i && t.push(i)
            }), {
                children: t
            }
        }, kt = r => {
            let e = {
                [r.node.serializationId]: r
            };
            return r.children.forEach(t => {
                if (!e[t.node.serializationId]) {
                    let n = kt(t);
                    Object.assign(e, n)
                }
            }), e
        }, Ve = (r, e, t = {}) => {
            var s, o, c, l;
            if ((s = e == null ? void 0 : e.ignoreNodeTypes) != null && s.includes(r.nodeType) || r.tagName && ((o = e == null ? void 0 : e.ignoreTagNames) != null && o.includes(r.tagName))) return;
            e = Object.assign({
                allowCompact: !1,
                getParent: !1,
                getSibling: !1,
                recursive: !1,
                releaseNode: !1
            }, e);
            let i = {
                i: r.serializationId,
                n: r.nodeType
            };
            if (t = Object.assign({
                    parentVNode: null,
                    scramble: !1,
                    sensitive: (c = e.scrambleDefault) != null ? c : !1
                }, t), e.allowCompact) return i;
            switch (r.nodeType) {
                case 10:
                    break;
                case 8:
                    break;
                case 3:
                    {
                        let u = r.textContent;u && t.sensitive && (!t.parentVNode || ((l = t.parentVNode.g) == null ? void 0 : l.toLowerCase()) !== "style") && (u = Pe(u)),
                        i.t = u;
                        break
                    }
                case 1:
                    {
                        i.g = r.tagName,
                        i.a = r.attributes;
                        let u = We(i, {
                            notSensitiveClasses: e.notSensitiveClasses,
                            sensitiveClasses: e.sensitiveClasses
                        });u !== "inherit" && (t.sensitive = u),
                        t.sensitive && (i = Je(i));
                        break
                    }
            }
            return i
        }, ee = (r, e, t = {}) => {
            var o, c, l, u, a, f, d, h, p, y, v, E, k, O;
            let n = L.getInstance();
            if ((o = e == null ? void 0 : e.ignoreNodeTypes) != null && o.includes(r.node.nodeType) || r.node.tagName && ((c = e == null ? void 0 : e.ignoreTagNames) != null && c.includes(r.node.tagName))) return;
            e = Object.assign({
                allowCompact: !1,
                getParent: !1,
                getSibling: !1,
                recursive: !1,
                releaseNode: !1
            }, e);
            let s = {
                i: r.node.serializationId,
                n: r.node.nodeType
            };
            if (t = Object.assign({
                    parentVNode: null,
                    scramble: !1,
                    sensitive: (l = e.scrambleDefault) != null ? l : !1
                }, t), e.getParent && r.parentSerializationId !== -1) {
                let w = (u = n.shopifyNodes) == null ? void 0 : u[r.parentSerializationId];
                if (w) s.parentNode = ee(w, {
                    allowCompact: !0
                }, t);
                else {
                    let _ = n.rootNode;
                    if (!_) throw new Error(`Parent node not found in cache at: ${r.parentSerializationId.toString()}`);
                    St(r.parentSerializationId, _);
                    let S = (a = n.shopifyNodes) == null ? void 0 : a[r.parentSerializationId];
                    if (!S) throw new Error(`Parent node not found in cache at: ${r.parentSerializationId.toString()}`);
                    s.parentNode = ee(S, {
                        allowCompact: !0
                    }, t)
                }
            }
            if (e.getSibling && r.prevSiblingSerializationId !== -1) {
                let w = (f = n.shopifyNodes) == null ? void 0 : f[r.prevSiblingSerializationId];
                if (w) s.previousSibling = ee(w, {
                    allowCompact: !0
                }, t);
                else {
                    let _ = (h = (d = n.shopifyNodes) == null ? void 0 : d[r.parentSerializationId]) != null ? h : n.rootNode;
                    if (!_) throw new Error(`Sibling node not found in cache at: ${r.prevSiblingSerializationId.toString()}`);
                    St(r.prevSiblingSerializationId, _);
                    let S = (p = n.shopifyNodes) == null ? void 0 : p[r.prevSiblingSerializationId];
                    if (!S) throw new Error(`Sibling node not found in cache at: ${r.prevSiblingSerializationId.toString()}`);
                    s.previousSibling = ee(S, {
                        allowCompact: !0
                    }, t)
                }
            }
            if (e.allowCompact) return s;
            switch (r.node.nodeType) {
                case 10:
                    break;
                case 8:
                    break;
                case 3:
                    {
                        t.parentVNode;
                        let w = r.node.textContent;w && t.sensitive && (!t.parentVNode || ((y = t.parentVNode.g) == null ? void 0 : y.toLowerCase()) !== "style") && (w = Pe(w)),
                        s.t = w;
                        break
                    }
                case 1:
                    {
                        s.g = r.node.tagName,
                        s.a = r.node.attributes,
                        ((v = s.g) == null ? void 0 : v.toLowerCase()) === "style" && ((k = (E = r.node.textContent) == null ? void 0 : E.length) != null ? k : 0) < 5;
                        let w = We(s, {
                            notSensitiveClasses: e.notSensitiveClasses,
                            sensitiveClasses: e.sensitiveClasses
                        });
                        if (w !== "inherit" && (t.sensitive = w), t.sensitive && (s = Je(s)), e.recursive && r.children.length > 0) try {
                            t.parentVNode = s, s.c = [];
                            for (let _ of r.children) {
                                let S = ee(_, e, t);
                                S && s.c.push(S)
                            }
                        } catch (_) {
                            console.error("error recursing", _)
                        }
                        break
                    }
            }
            return (O = s.a) != null && O.id || (s.a || (s.a = {}), s.a.id = r.node.serializationId.toString()), s
        }, Or = (r, e) => ({
            type: "stringHash",
            hash: `${e}-${(0,Ar.default)(JSON.stringify(r)).toString()}-web-pixel`
        }), xt = (r, e, t, n = 10, i = 0) => {
            var l, u;
            let s = r.serializationId,
                o = (l = t[s]) == null ? void 0 : l.parentSerializationId;
            if (!o) return null;
            let c = t[o];
            return c ? ((u = c.node.tagName) == null ? void 0 : u.toLowerCase()) === e.toLowerCase() ? c : i < n ? xt(c.node, e, t, n, i + 1) : null : null
        }, St = (r, e) => {
            for (let t of e.children) return t.node.serializationId === r ? ee(t) : St(r, t)
        }, Tt = r => {
            var t;
            let e = L.getInstance();
            for (let n of r.children)(t = e.shopifyNodes) != null && t[n.node.serializationId] || ee(n), Tt(n)
        }
    });

    function Fe(r, e, t = {
        cyclesFix: !0
    }, n = []) {
        var c, l;
        let i = [],
            s = Array.isArray(r);
        for (let u in r) {
            let a = r[u],
                f = s ? +u : u;
            if (!(u in e)) {
                i.push({
                    type: "REMOVE",
                    path: [f],
                    oldValue: r[u]
                });
                continue
            }
            let d = e[u],
                h = typeof a == "object" && typeof d == "object" && Array.isArray(a) === Array.isArray(d);
            a && d && h && !Pn[(l = (c = Object.getPrototypeOf(a)) == null ? void 0 : c.constructor) == null ? void 0 : l.name] && (!t.cyclesFix || !n.includes(a)) ? i.push.apply(i, Fe(a, d, t, t.cyclesFix ? n.concat([a]) : []).map(p => (p.path.unshift(f), p))) : a !== d && !(Number.isNaN(a) && Number.isNaN(d)) && !(h && (isNaN(a) ? a + "" == d + "" : +a == +d)) && i.push({
                path: [f],
                type: "CHANGE",
                value: d,
                oldValue: a
            })
        }
        let o = Array.isArray(e);
        for (let u in e) u in r || i.push({
            type: "CREATE",
            path: [o ? +u : u],
            value: e[u]
        });
        return i
    }
    var Pn, Dr = b(() => {
        Pn = {
            Date: !0,
            RegExp: !0,
            String: !0,
            Number: !0
        }
    });
    var le, Nr = b(() => {
        "use strict";
        le = r => {
            var e;
            return (e = r.attributes) != null && e.id ? {
                q: `#${r.attributes.id}`
            } : {
                q: `#${r.serializationId.toString()}`
            }
        }
    });
    var Pr, Lr = b(() => {
        "use strict";
        Pr = r => {
            var t, n;
            let e = r.node.clientRect;
            return {
                x: Math.ceil(r.pageX),
                y: Math.ceil(r.pageY),
                rx: r.clientX - ((t = e == null ? void 0 : e.x) != null ? t : 0),
                ry: r.clientY - ((n = e == null ? void 0 : e.y) != null ? n : 0)
            }
        }
    });
    var Ln, Rr, Br = b(() => {
        "use strict";
        Et();
        Dr();
        ze();
        Nr();
        Te();
        Lr();
        re();
        Ln = (r, e, t, n) => {
            let {
                analytics: i
            } = r, s = Ie.getInstance(), o = R.getInstance();
            i.subscribe("advanced_dom_available", c => {
                o.debug("advanced_dom_available");
                let {
                    data: l
                } = c, u = l.root;
                t.startRecording(u, n.siteId)
            }), i.subscribe("advanced_dom_changed", c => {
                var d, h;
                if (o.debug("advanced_dom_changed"), !t.shopifyNodes || !t.rootNode) throw new Error("Error capturing dom nodes");
                Tt(t.rootNode);
                let l = e.getQueue("mutations"),
                    u = {
                        a: [],
                        c: [],
                        t: []
                    },
                    a = {},
                    f = [];
                if (c.data.addedFragments.length > 0) {
                    let p = [];
                    for (let y of c.data.addedFragments) {
                        t.addFragmentToLocalCache(y);
                        try {
                            let v = ee(y, {
                                recursive: !0,
                                getParent: !0,
                                getSibling: !0,
                                allowCompact: !1
                            });
                            v && p.push(v)
                        } catch (v) {
                            console.error(v.message)
                        }
                    }
                    p.length > 0 && u.c.push({
                        t: "a",
                        n: p
                    })
                }
                if (c.data.removedNodes.length > 0) {
                    let p = [];
                    for (let y of c.data.removedNodes) {
                        let v = Ve(y, {
                            recursive: !0,
                            getParent: !0,
                            getSibling: !0,
                            allowCompact: !0,
                            releaseNode: !0
                        });
                        v && (p.push(v), f.push(v.i))
                    }
                    p.length > 0 && u.c.push({
                        t: "r",
                        n: p
                    })
                }
                if (c.data.modifiedNodes.length > 0)
                    for (let p of c.data.modifiedNodes) {
                        let y = p.serializationId,
                            v = t.shopifyNodes[y];
                        if ((v == null ? void 0 : v.node.textContent) !== p.textContent) {
                            let w = Ve(p, {
                                getParent: !0,
                                getSibling: !0,
                                allowCompact: !1
                            });
                            w && (w.textContent = w.t, u.t.push(w), t.shopifyNodes[y] && (t.shopifyNodes[y].node = p))
                        }
                        let E = (d = v == null ? void 0 : v.node.attributes) != null ? d : {},
                            k = (h = p.attributes) != null ? h : {},
                            O = Fe(E, k);
                        O.length > 0 && O.forEach(w => {
                            var Ee;
                            let S = w.path[0],
                                X = (Ee = p.attributes) == null ? void 0 : Ee[S],
                                de = Ve(p, {
                                    recursive: S === "class",
                                    allowCompact: S !== "class"
                                });
                            de && (a[de.i] || (a[de.i] = {}), a[de.i][S] = X != null ? X : null)
                        })
                    }
                Object.keys(a).filter(p => !f.includes(parseInt(p))).forEach(p => {
                    u.a.push({
                        i: parseInt(p),
                        a: a[parseInt(p)]
                    })
                }), l.push(u)
            }), i.subscribe("advanced_dom_clicked", c => {
                var a, f, d, h;
                o.debug("advanced_dom_clicked");
                let {
                    data: l
                } = c, u = {
                    rid: t.getRecordingId(),
                    f: le(l.node),
                    e: {
                        text: (a = l.node.textContent) != null ? a : "",
                        tagName: (d = (f = l.node.tagName) == null ? void 0 : f.toLowerCase()) != null ? d : ""
                    },
                    c: {
                        x: l.pageX,
                        y: l.pageY,
                        rx: l.offsetX,
                        ry: l.offsetY
                    },
                    href: (h = l.node.attributes) == null ? void 0 : h.href,
                    ts: n.getServerTime(),
                    t: "c"
                };
                s.events.track("Element Clicked", u, {
                    namespace: "sessions",
                    sessionId: t.getSessionId(),
                    pageId: t.getPageId(),
                    visitorId: t.getVisitorId()
                }).catch(p => {
                    o.error("Error tracking advanced_dom_click event:", p)
                })
            }), i.subscribe("advanced_dom_clipboard", c => {}), i.subscribe("advanced_dom_form_submitted", c => {
                var f, d, h;
                o.debug("advanced_dom_form_submitted");
                let {
                    data: l
                } = c, u = {
                    f: l.node.serializationId,
                    e: {
                        text: l.node.textContent,
                        tag: (f = l.node.tagName) == null ? void 0 : f.toLowerCase()
                    },
                    ts: n.getServerTime(),
                    t: "su"
                }, a = (h = (d = l.node.attributes) == null ? void 0 : d.name) != null ? h : l.node.serializationId.toString();
                t.formInteractions.forEach(p => {
                    p.formName === a && (p.submitted = !0)
                }), s.events.track("Form Submitted", u, {
                    namespace: "sessions",
                    sessionId: t.getSessionId(),
                    pageId: t.getPageId(),
                    visitorId: t.getVisitorId()
                }).catch(p => {
                    o.error("Error tracking form_submitted event:", p)
                })
            }), i.subscribe("advanced_dom_input_blurred", c => {
                o.debug("advanced_dom_input_blurred");
                let {
                    data: l
                } = c;
                if (!l.node.textContent) return;
                let u = {
                    f: le(l.node),
                    t: "b",
                    ts: n.getServerTime()
                };
                e.getQueue("form-interactions").push(u)
            }), i.subscribe("advanced_dom_input_changed", c => {
                var d, h, p;
                o.debug("advanced_dom_input_changed");
                let {
                    data: l
                } = c, u;
                ((d = l.node.tagName) == null ? void 0 : d.toLowerCase()) === "select" ? u = "select": u = (h = l.node.attributes) == null ? void 0 : h.type;
                let a = {
                    f: le(l.node),
                    t: "i",
                    ts: n.getServerTime()
                };
                switch (u) {
                    case "radio":
                    case "checkbox":
                        a.ch = l.node.checked;
                        break;
                    default:
                        (p = l.node.attributes) != null && p.value && (a = De(De({}, a), Zt(l.node.attributes.value)));
                        break
                }
                e.getQueue("form-interactions").push(a)
            }), i.subscribe("advanced_dom_input_focused", c => {
                var d, h, p, y;
                o.debug("advanced_dom_input_focused");
                let {
                    data: l
                } = c, u = {
                    f: le(l.node),
                    t: "f",
                    ts: n.getServerTime()
                };
                if (e.getQueue("form-interactions").push(u), !t.shopifyNodes) throw new Error("Dom nodes not captured");
                let f = xt(l.node, "form", t.shopifyNodes);
                if (f) {
                    let v = (h = (d = f.node.attributes) == null ? void 0 : d.name) != null ? h : f.node.serializationId.toString(),
                        E = l.node.serializationId,
                        k = t.formInteractions.findIndex(O => O.formName === v);
                    k > -1 ? E === t.formInteractions[k].inputId && (t.formInteractions[k].inputId = E, t.formInteractions[k].f = le(l.node)) : t.formInteractions.push({
                        formName: v,
                        submitted: !1,
                        inputId: E,
                        f: le(l.node),
                        url: {
                            path: (y = (p = t.url) == null ? void 0 : p.pathname) != null ? y : ""
                        }
                    })
                }
            }), i.subscribe("advanced_dom_mouse_moved", c => {
                o.debug("advanced_dom_mouse_moved");
                let {
                    data: l
                } = c, u = e.getQueue("moves"), a = {
                    t: "m",
                    ts: n.getServerTime(),
                    c: Pr(l),
                    f: le(l.node)
                };
                u.push(a)
            }), i.subscribe("advanced_dom_scrolled", c => {
                var f, d, h, p;
                o.debug("advanced_dom_scrolled");
                let l = e.getQueue("scrolls"),
                    {
                        data: u
                    } = c,
                    a = {
                        st: (d = (f = u.node.scroll) == null ? void 0 : f.y) != null ? d : 0,
                        sl: (p = (h = u.node.scroll) == null ? void 0 : h.x) != null ? p : 0,
                        f: le(u.node),
                        t: "s",
                        ts: n.getServerTime()
                    };
                l.push(a)
            }), i.subscribe("advanced_dom_selection_changed", c => {}), i.subscribe("advanced_dom_window_resized", c => {
                o.debug("advanced_dom_window_resized");
                let l = c.context,
                    u = e.getQueue("resizes"),
                    a = {
                        t: "resize",
                        ts: n.getServerTime(),
                        viewport: {
                            width: l.window.innerWidth,
                            height: l.window.innerHeight
                        },
                        browser: {
                            width: l.window.innerWidth,
                            height: l.window.innerHeight
                        }
                    };
                u.push(a)
            })
        }, Rr = Ln
    });

    function ke(r, e, t) {
        var s, o, c, l, u, a, f, d, h, p, y, v, E, k, O, w, _, S, X, de, Ee, _t, Ot, At;
        let n = [],
            i;
        switch (r) {
            case "Cart Item Added":
                if (e = e, i = {
                        id: (s = e.merchandise.product.id) != null ? s : e.merchandise.product.title,
                        title: e.merchandise.product.title,
                        quantity: e.quantity,
                        price: e.merchandise.price.amount,
                        currencyCode: e.merchandise.price.currencyCode,
                        image: (o = e.merchandise.image) == null ? void 0 : o.src,
                        sku: (c = e.merchandise.sku) != null ? c : void 0
                    }, t)
                    for (let I of t) {
                        let Vr = {
                            id: (l = I.merchandise.product.id) != null ? l : I.merchandise.product.title,
                            title: I.merchandise.product.title,
                            quantity: I.quantity,
                            price: I.merchandise.price.amount,
                            currencyCode: I.merchandise.price.currencyCode,
                            image: (u = I.merchandise.image) == null ? void 0 : u.src,
                            sku: (a = I.merchandise.sku) != null ? a : void 0
                        };
                        n.push(Vr)
                    }
                n.push(i);
                break;
            case "Cart Item Removed":
                if (e = e, e.length === 0) return;
                for (let I of e) i = {
                    id: (f = I.merchandise.product.id) != null ? f : I.merchandise.product.title,
                    title: I.merchandise.product.title,
                    quantity: I.quantity,
                    price: I.merchandise.price.amount,
                    currencyCode: I.merchandise.price.currencyCode,
                    image: (d = I.merchandise.image) == null ? void 0 : d.src,
                    sku: (h = I.merchandise.sku) != null ? h : void 0
                }, n.push(i);
                break;
            case "Cart Viewed":
                e = e;
                for (let I of e) i = {
                    id: (p = I.merchandise.product.id) != null ? p : I.merchandise.product.title,
                    title: I.merchandise.product.title,
                    quantity: I.quantity,
                    price: I.merchandise.price.amount,
                    currencyCode: I.merchandise.price.currencyCode,
                    image: (y = I.merchandise.image) == null ? void 0 : y.src,
                    sku: (v = I.merchandise.sku) != null ? v : void 0
                }, n.push(i);
                break;
            case "Ordered":
                e = e;
                for (let I of e) i = {
                    id: (k = (E = I.variant) == null ? void 0 : E.product.id) != null ? k : "",
                    title: (w = (O = I.variant) == null ? void 0 : O.product.title) != null ? w : "",
                    quantity: I.quantity,
                    price: (S = (_ = I.variant) == null ? void 0 : _.price.amount) != null ? S : 0,
                    currencyCode: (de = (X = I.variant) == null ? void 0 : X.price.currencyCode) != null ? de : "",
                    image: (_t = (Ee = I.variant) == null ? void 0 : Ee.image) == null ? void 0 : _t.src,
                    sku: (At = (Ot = I.variant) == null ? void 0 : Ot.sku) != null ? At : void 0
                }, n.push(i)
        }
        return n
    }
    var qr = b(() => {
        "use strict"
    });
    var Ae, Ct = b(() => {
        "use strict";
        Ae = r => r.isPlusUser === "true" || r.environment === "staging"
    });
    var jr, Rn, $r, Mr = b(() => {
        "use strict";
        ze();
        gt();
        qr();
        jr = Ne(Le());
        Ct();
        Se();
        re();
        Rn = (r, e, t, n) => {
            let {
                analytics: i,
                init: s
            } = r, o = Ie.getInstance(), c = R.getInstance(), l = !1;
            i.subscribe("cart_viewed", ({
                data: {
                    cart: u
                }
            }) => {
                if (c.debug("cart_viewed", u), !u) return;
                let a = {
                    totalQuantity: u.totalQuantity,
                    cartTotal: {
                        amount: u.cost.totalAmount.amount,
                        currencyCode: u.cost.totalAmount.currencyCode
                    },
                    productLines: ke("Cart Viewed", u.lines)
                };
                o.events.track("Cart Viewed", a, {
                    namespace: n.namespace,
                    visitorId: t.getVisitorId(),
                    sessionId: t.getSessionId(),
                    pageId: t.getPageId()
                }).catch(f => {
                    c.error("Error tracking cart viewed event", f)
                })
            }), i.subscribe("checkout_address_info_submitted", ({
                data: {
                    checkout: u
                }
            }) => {
                var p, y;
                c.debug("checkout_address_info_submitted", u);
                let {
                    shippingAddress: a
                } = u, f = (p = a == null ? void 0 : a.countryCode) != null ? p : void 0, d = (y = a == null ? void 0 : a.provinceCode) != null ? y : void 0, h = {
                    countryCode: f,
                    territory: d
                };
                o.events.track("Checkout Address Info Submitted", h, {
                    namespace: n.namespace,
                    visitorId: t.getVisitorId(),
                    sessionId: t.getSessionId(),
                    pageId: t.getPageId()
                }).catch(v => {
                    c.error("Error tracking checkout address info submitted event", v)
                })
            }), i.subscribe("checkout_completed", ({
                data: {
                    checkout: u
                }
            }) => {
                var k, O, w, _, S;
                c.debug("checkout_completed", u);
                let {
                    currencyCode: a,
                    totalTax: {
                        amount: f
                    }
                } = u, d = (O = (k = u.subtotalPrice) == null ? void 0 : k.amount) != null ? O : 0, h = (_ = (w = u.totalPrice) == null ? void 0 : w.amount) != null ? _ : 0, {
                    shippingLine: p
                } = u, y = (S = p == null ? void 0 : p.price) != null ? S : void 0, v = 0;
                u.lineItems.forEach(X => {
                    v += X.quantity
                });
                let E = {
                    subtotalPrice: d,
                    totalTax: f,
                    shippingPrice: y,
                    totalQuantity: v,
                    cartTotal: {
                        amount: h,
                        currencyCode: a
                    },
                    productLines: ke("Ordered", u.lineItems)
                };
                o.events.track("Ordered", E, {
                    namespace: n.namespace,
                    visitorId: t.getVisitorId(),
                    sessionId: t.getSessionId(),
                    pageId: t.getPageId()
                }).catch(X => {
                    c.error("Error tracking checkout completed event", X)
                })
            }), i.subscribe("checkout_contact_info_submitted", ({
                data: {
                    checkout: u
                }
            }) => {
                c.debug("checkout_contact_info_submitted");
                let {
                    email: a
                } = u, f = {
                    email: a
                };
                o.events.track("Checkout Contact Info Submitted", f, {
                    namespace: n.namespace,
                    visitorId: t.getVisitorId(),
                    sessionId: t.getSessionId(),
                    pageId: t.getPageId()
                }).catch(d => {
                    c.error("Error tracking checkout contact info submitted event", d)
                })
            }), i.subscribe("checkout_shipping_info_submitted", ({
                data: {
                    checkout: u
                }
            }) => {
                var p, y;
                c.debug("checkout_shipping_info_submitted");
                let {
                    shippingAddress: a
                } = u, f = (p = a == null ? void 0 : a.countryCode) != null ? p : void 0, d = (y = a == null ? void 0 : a.provinceCode) != null ? y : void 0, h = {
                    countryCode: f,
                    territory: d
                };
                o.events.track("Checkout Shipping Info Submitted", h, {
                    namespace: n.namespace,
                    visitorId: t.getVisitorId(),
                    sessionId: t.getSessionId(),
                    pageId: t.getPageId()
                }).catch(v => {
                    c.error("Error tracking checkout shipping info submitted event", v)
                })
            }), i.subscribe("checkout_started", ({
                data: {
                    checkout: u
                }
            }) => {
                var y, v, E, k;
                c.debug("checkout_started", u);
                let {
                    currencyCode: a,
                    totalTax: {
                        amount: f
                    }
                } = u, d = (v = (y = u.subtotalPrice) == null ? void 0 : y.amount) != null ? v : 0, h = (k = (E = u.totalPrice) == null ? void 0 : E.amount) != null ? k : 0, p = {
                    currency: a,
                    subtotalPrice: d,
                    totalTax: f,
                    totalPrice: h
                };
                o.events.track("Checkout Started", p, {
                    namespace: n.namespace,
                    visitorId: t.getVisitorId(),
                    sessionId: t.getSessionId(),
                    pageId: t.getPageId()
                }).catch(O => {
                    c.error("Error tracking checkout started event", O)
                })
            }), i.subscribe("collection_viewed", ({
                data: {
                    collection: u
                }
            }) => {
                c.debug("collection_viewed", u);
                let {
                    title: a
                } = u, f = {
                    title: a
                };
                o.events.track("Collection Viewed", f, {
                    namespace: n.namespace,
                    visitorId: t.getVisitorId(),
                    sessionId: t.getSessionId(),
                    pageId: t.getPageId()
                }).catch(d => {
                    c.error("Error tracking collection viewed event", d)
                })
            }), i.subscribe("payment_info_submitted", ({
                data: {
                    checkout: u
                }
            }) => {
                var E, k, O, w, _;
                c.debug("payment_info_submitted");
                let {
                    currencyCode: a,
                    totalTax: {
                        amount: f
                    }
                } = u, d = (k = (E = u.subtotalPrice) == null ? void 0 : E.amount) != null ? k : 0, h = (w = (O = u.totalPrice) == null ? void 0 : O.amount) != null ? w : 0, {
                    shippingLine: p
                } = u, y = (_ = p == null ? void 0 : p.price) != null ? _ : void 0, v = {
                    currency: a,
                    subtotalPrice: d,
                    taxPrice: f,
                    shippingPrice: y,
                    totalPrice: h
                };
                o.events.track("Payment Information Submitted", v, {
                    namespace: n.namespace,
                    visitorId: t.getVisitorId(),
                    sessionId: t.getSessionId(),
                    pageId: t.getPageId()
                }).catch(S => {
                    c.error("Error tracking payment_info_submitted event:", S)
                })
            }), i.subscribe("page_viewed", ({
                context: u
            }) => {
                if (c.debug("page_viewed", u), !t.url) {
                    let f = new URL(u.window.location.href);
                    t.url = f, t.urlHash = (0, jr.default)(f.href)
                }
                let {
                    window: {
                        location: {
                            pathname: a
                        }
                    }
                } = u;
                if (Ae(r.settings) && a.includes("/checkouts/") && !a.includes("thank_you")) {
                    let f = ye(n.siteId, new Date(n.getServerTime()));
                    t.pageId = f;
                    let h = t.getSession().pageOrder + 1;
                    Ft("pageOrder", h, r.browser).then(p => {
                        t.session = p
                    }).catch(p => {
                        c.error("Error updating pageOrder", p)
                    }), o.events.track("Page Viewed", {
                        title: u.document.title,
                        url: {
                            hash: t.url.hash,
                            host: t.url.host,
                            href: t.url.href,
                            path: t.url.pathname,
                            port: t.url.port,
                            protocol: t.url.protocol,
                            search: t.url.search
                        },
                        screen: {
                            viewport: t.getViewport(),
                            browser: t.getViewport(),
                            scroll: {
                                top: 0,
                                left: 0
                            }
                        },
                        path: ye(n.siteId, new Date(n.getServerTime())),
                        pageOrder: h,
                        tabId: t.getTabId()
                    }, {
                        namespace: "sessions",
                        sessionId: t.getSessionId(),
                        visitorId: t.getVisitorId()
                    }).then(p => {
                        p.json().then(y => {
                            t.pageId = y.id
                        }).catch(y => {
                            c.error("Error tracking page_viewed event:", y)
                        })
                    }).catch(p => {
                        c.error("Error tracking page_viewed event:", p)
                    })
                }
                if (!Ae(r.settings) && a.includes("/checkouts/") && !a.includes("thank_you") && !l) {
                    l = !0;
                    let f = ye(n.siteId),
                        d = {
                            noRecordingInfoKey: "shopify",
                            tabId: t.getTabId().replace(/"/g, "")
                        };
                    o.events.track("Recording Started", d, {
                        id: f,
                        namespace: "sessions",
                        visitorId: t.getVisitorId(),
                        sessionId: t.getSessionId(),
                        pageId: t.getPageId()
                    }).catch(h => {
                        c.error("Error tracking recording_started event:", h)
                    })
                } else l && (l = !1)
            }), i.subscribe("product_added_to_cart", ({
                data: {
                    cartLine: u
                }
            }) => {
                var O, w;
                if (c.debug("product_added_to_cart", u), !u) return;
                let a = 0,
                    f, {
                        merchandise: {
                            product: {
                                id: d,
                                title: h
                            }
                        },
                        merchandise: {
                            price: {
                                amount: p,
                                currencyCode: y
                            }
                        },
                        merchandise: {
                            sku: v
                        },
                        quantity: E
                    } = u;
                s.data.cart === null ? (a = p * E, f = ke("Cart Item Added", u)) : (a = ((w = (O = s.data.cart.cost) == null ? void 0 : O.totalAmount.amount) != null ? w : 0) + p * E, f = ke("Cart Item Added", u, s.data.cart.lines));
                let k = {
                    id: d,
                    productName: h,
                    quantity: E,
                    productPrice: p,
                    sku: v,
                    cartTotal: {
                        amount: a.toFixed(2),
                        currencyCode: y
                    },
                    productLines: f
                };
                o.events.track("Cart Item Added", k, {
                    namespace: n.namespace,
                    visitorId: t.getVisitorId(),
                    sessionId: t.getSessionId(),
                    pageId: t.getPageId()
                }).catch(_ => {
                    c.error("Error tracking cart_item_added event:", _)
                })
            }), i.subscribe("product_removed_from_cart", ({
                data: {
                    cartLine: u
                }
            }) => {
                var w, _;
                if (c.debug("product_removed_from_cart", u), !u) return;
                let a = (_ = (w = s.data.cart) == null ? void 0 : w.lines) != null ? _ : [],
                    f = 0;
                for (let S of a) f += S.merchandise.price.amount * S.quantity;
                let {
                    merchandise: {
                        product: {
                            id: d,
                            title: h
                        }
                    },
                    merchandise: {
                        price: {
                            amount: p,
                            currencyCode: y
                        }
                    },
                    merchandise: {
                        sku: v
                    },
                    quantity: E
                } = u, k = a.findIndex(S => S.merchandise.product.id === d);
                k !== -1 && (a[k].quantity > 1 ? (a[k].quantity -= E, a[k].quantity < 1 && a.splice(k, 1)) : a.splice(k, 1)), f = f - p * E;
                let O = {
                    id: d,
                    productName: h,
                    quantity: E,
                    productPrice: p,
                    sku: v,
                    cartTotal: {
                        amount: f.toFixed(2),
                        currencyCode: y
                    },
                    productLines: a.length >= 1 ? ke("Cart Item Removed", a) : []
                };
                o.events.track("Cart Item Removed", O, {
                    namespace: n.namespace,
                    visitorId: t.getVisitorId(),
                    sessionId: t.getSessionId(),
                    pageId: t.getPageId()
                }).catch(S => {
                    c.error("Error tracking cart_item_removed event:", S)
                })
            }), i.subscribe("product_viewed", ({
                data: {
                    productVariant: u
                }
            }) => {
                c.debug("product_viewed", u);
                let {
                    product: {
                        id: a,
                        title: f
                    },
                    sku: d,
                    price: {
                        amount: h,
                        currencyCode: p
                    }
                } = u, y = {
                    id: a,
                    productName: f,
                    sku: d,
                    productPrice: h,
                    currencyCode: p
                };
                o.events.track("Product Viewed", y, {
                    namespace: n.namespace,
                    visitorId: t.getVisitorId(),
                    sessionId: t.getSessionId(),
                    pageId: t.getPageId()
                }).catch(v => {
                    c.error("Error tracking product_viewed event:", v)
                })
            }), i.subscribe("search_submitted", ({
                data: {
                    searchResult: u
                }
            }) => {
                c.debug("search_submitted", u);
                let {
                    query: a
                } = u, f = {
                    searchQuery: a
                };
                o.events.track("Searched", f, {
                    namespace: n.namespace,
                    visitorId: t.getVisitorId(),
                    sessionId: t.getSessionId(),
                    pageId: t.getPageId()
                }).catch(d => {
                    c.error("Error tracking search_submitted event:", d)
                })
            })
        }, $r = Rn
    });
    var zr = Pt(Qr => {
        "use strict";
        Mt();
        Br();
        Mr();
        se();
        te();
        H();
        Ce();
        re();
        Ct();
        var Bn = (r, e) => x(Qr, null, function*() {
            let t = yield A.createInstance(r), [n, i, s] = yield Promise.all([L.createInstance(r), pe.createInstance(), R.updateInstance(r)]);
            s.info("Setting up standardEvents"), $r(r, e, n, t), new URL(r.init.context.document.location.href).pathname.includes("/checkouts/") && Ae(r.settings) && (s.info("Setting up plus events"), Rr(r, e, n, t))
        });
        Xe(r => {
            let e = j.getInstance();
            e.initializeQueues(), Bn(r, e).then(() => {
                R.getInstance().debug("Web Pixel Initialized")
            }).catch(t => {
                console.error("Error initializing managers", t)
            })
        })
    });
    var Po = Ne(zr());
})();