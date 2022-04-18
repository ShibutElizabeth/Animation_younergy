/*!
 * GSAP 3.6.1
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ !function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define([
        "exports"
    ], e) : e((t = t || self).window = t.window || {});
}(this, function(e1) {
    "use strict";
    function _inheritsLoose(t, e) {
        t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e;
    }
    function _assertThisInitialized(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }
    function o1(t) {
        return "string" == typeof t;
    }
    function p1(t) {
        return "function" == typeof t;
    }
    function q(t) {
        return "number" == typeof t;
    }
    function r1(t) {
        return void 0 === t;
    }
    function s1(t) {
        return "object" == typeof t;
    }
    function t1(t) {
        return !1 !== t;
    }
    function u1() {
        return "undefined" != typeof window;
    }
    function v1(t) {
        return p1(t) || o1(t);
    }
    function M1(t) {
        return (h1 = mt(t, ot)) && ae;
    }
    function N(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
    }
    function O1(t, e) {
        return !e && console.warn(t);
    }
    function P1(t, e) {
        return t && (ot[t] = e) && h1 && (h1[t] = e) || ot;
    }
    function Q() {
        return 0;
    }
    function $(t) {
        var e, r, i = t[0];
        if (s1(i) || p1(i) || (t = [
            t
        ]), !(e = (i._gsap || {}).harness)) {
            for(r = pt.length; (r--) && !pt[r].targetTest(i););
            e = pt[r];
        }
        for(r = t.length; r--;)t[r] && (t[r]._gsap || (t[r]._gsap = new Rt(t[r], e))) || t.splice(r, 1);
        return t;
    }
    function _1(t) {
        return t._gsap || $(Tt(t))[0]._gsap;
    }
    function aa(t, e, i) {
        return (i = t[e]) && p1(i) ? t[e]() : r1(i) && t.getAttribute && t.getAttribute(e) || i;
    }
    function ba(t, e) {
        return (t = t.split(",")).forEach(e) || t;
    }
    function ca(t) {
        return Math.round(100000 * t) / 100000 || 0;
    }
    function da(t, e) {
        for(var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
        return i < r;
    }
    function ea(e, r, i) {
        var n, a = q(e[1]), s = (a ? 2 : 1) + (r < 2 ? 0 : 1), o = e[s];
        if (a && (o.duration = e[1]), o.parent = i, r) {
            for(n = o; i && !("immediateRender" in n);)n = i.vars.defaults || {}, i = t1(i.vars.inherit) && i.parent;
            o.immediateRender = t1(n.immediateRender), r < 2 ? o.runBackwards = 1 : o.startAt = e[s - 1];
        }
        return o;
    }
    function fa() {
        var t, e, r = ht.length, i = ht.slice(0);
        for(lt = {}, t = ht.length = 0; t < r; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
    }
    function ga(t, e, r, i) {
        ht.length && fa(), t.render(e, r, i), ht.length && fa();
    }
    function ha(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(at).length < 2 ? e : o1(t) ? t.trim() : t;
    }
    function ia(t) {
        return t;
    }
    function ja(t, e) {
        for(var r in e)r in t || (t[r] = e[r]);
        return t;
    }
    function ka(t, e) {
        for(var r in e)r in t || "duration" === r || "ease" === r || (t[r] = e[r]);
    }
    function ma(t, e) {
        for(var r in e)"__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = s1(e[r]) ? ma(t[r] || (t[r] = {}), e[r]) : e[r]);
        return t;
    }
    function na(t, e) {
        var r, i = {};
        for(r in t)r in e || (i[r] = t[r]);
        return i;
    }
    function oa(e) {
        var r = e.parent || F1, i = e.keyframes ? ka : ja;
        if (t1(e.inherit)) for(; r;)i(e, r.vars.defaults), r = r.parent || r._dp;
        return e;
    }
    function ra(t, e, r, i) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var n = e._prev, a = e._next;
        n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null;
    }
    function sa(t, e) {
        !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0;
    }
    function ta(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0)) for(var r = t; r;)r._dirty = 1, r = r.parent;
        return t;
    }
    function wa(t) {
        return t._repeat ? gt(t._tTime, t = t.duration() + t._rDelay) * t : 0;
    }
    function ya(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur);
    }
    function za(t) {
        return t._end = ca(t._start + (t._tDur / Math.abs(t._ts || t._rts || j) || 0));
    }
    function Aa(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = ca(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), za(t), r._dirty || ta(r, t)), t;
    }
    function Ba(t, e) {
        var r;
        if ((e._time || e._initted && !e._dur) && (r = ya(t.rawTime(), e), (!e._dur || yt(0, e.totalDuration(), r) - e._tTime > j) && e.render(r, !0)), ta(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration()) for(r = t; r._dp;)0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
            t._zTime = -j;
        }
    }
    function Ca(t2, e2, r2, i2) {
        return e2.parent && sa(e2), e2._start = ca(r2 + e2._delay), e2._end = ca(e2._start + (e2.totalDuration() / Math.abs(e2.timeScale()) || 0)), function _addLinkedListItem(t, e, r, i, n) {
            void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
            var a, s = t[i];
            if (n) for(a = e[n]; s && s[n] > a;)s = s._prev;
            s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t;
        }(t2, e2, "_first", "_last", t2._sort ? "_start" : 0), t2._recent = e2, i2 || Ba(t2, e2), t2;
    }
    function Da(t, e) {
        return (ot.ScrollTrigger || N("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t);
    }
    function Ea(t, e, r, i) {
        return Nt(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f1 !== Pt.frame ? (ht.push(t), t._lazy = [
            e,
            i
        ], 1) : void 0 : 1;
    }
    function Ia(t, e, r, i) {
        var n = t._repeat, a = ca(e) || 0, s = t._tTime / t._tDur;
        return s && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? n < 0 ? 10000000000 : ca(a * (n + 1) + t._rDelay * n) : a, s && !i ? Aa(t, t._tTime = t._tDur * s) : t.parent && za(t), r || ta(t.parent, t), t;
    }
    function Ja(t) {
        return t instanceof Bt ? ta(t) : Ia(t, t._dur);
    }
    function La(t, e) {
        var r, i, n = t.labels, a = t._recent || vt, s = t.duration() >= U ? a.endTime(!1) : t._dur;
        return o1(e) && (isNaN(e) || e in n) ? "<" === (r = e.charAt(0)) || ">" === r ? ("<" === r ? a._start : a.endTime(0 <= a._repeat)) + (parseFloat(e.substr(1)) || 0) : (r = e.indexOf("=")) < 0 ? (e in n || (n[e] = s), n[e]) : (i = +(e.charAt(r - 1) + e.substr(r + 1)), 1 < r ? La(t, e.substr(0, r - 1)) + i : s + i) : null == e ? s : +e;
    }
    function Ma(t, e) {
        return t || 0 === t ? e(t) : e;
    }
    function Oa(t) {
        if ("string" != typeof t) return "";
        var e = st.exec(t);
        return e ? t.substr(e.index + e[0].length) : "";
    }
    function Ra(t, e) {
        return t && s1(t) && "length" in t && (!e && !t.length || t.length - 1 in t && s1(t[0])) && !t.nodeType && t !== i1;
    }
    function Ua(t) {
        return t.sort(function() {
            return 0.5 - Math.random();
        });
    }
    function Va(t3) {
        if (p1(t3)) return t3;
        var _ = s1(t3) ? t3 : {
            each: t3
        }, m = Et(_.ease), g = _.from || 0, v = parseFloat(_.base) || 0, y = {}, e = 0 < g && g < 1, b = isNaN(g) || e, T = _.axis, w = g, x = g;
        return o1(g) ? w = x = ({
            center: 0.5,
            edges: 0.5,
            end: 1
        })[g] || 0 : !e && b && (w = g[0], x = g[1]), function(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d = (r || _).length, c = y[d];
            if (!c) {
                if (!(f = "auto" === _.grid ? 0 : (_.grid || [
                    1,
                    U
                ])[1])) {
                    for(h = -U; h < (h = r[f++].getBoundingClientRect().left) && f < d;);
                    f--;
                }
                for(c = y[d] = [], i = b ? Math.min(f, d) * w - 0.5 : g % f, n = b ? d * x / f - 0.5 : g / f | 0, l = U, u = h = 0; u < d; u++)a = u % f - i, s = n - (u / f | 0), c[u] = o = T ? Math.abs("y" === T ? s : a) : J(a * a + s * s), h < o && (h = o), o < l && (l = o);
                "random" === g && Ua(c), c.max = h - l, c.min = l, c.v = d = (parseFloat(_.amount) || parseFloat(_.each) * (d < f ? d - 1 : T ? "y" === T ? d / f : f : Math.max(f, d / f)) || 0) * ("edges" === g ? -1 : 1), c.b = d < 0 ? v - d : v, c.u = Oa(_.amount || _.each) || 0, m = m && d < 0 ? It(m) : m;
            }
            return d = (c[t] - c.min) / c.max || 0, ca(c.b + (m ? m(d) : d) * c.v) + c.u;
        };
    }
    function Wa(r) {
        var i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1;
        return function(t) {
            var e = Math.round(parseFloat(t) / r) * r * i;
            return (e - e % 1) / i + (q(t) ? 0 : Oa(t));
        };
    }
    function Xa(u, t4) {
        var h, l, e3 = K(u);
        return !e3 && s1(u) && (h = e3 = u.radius || U, u.values ? (u = Tt(u.values), (l = !q(u[0])) && (h *= h)) : u = Wa(u.increment)), Ma(t4, e3 ? p1(u) ? function(t) {
            return l = u(t), Math.abs(l - t) <= h ? l : t;
        } : function(t) {
            for(var e, r, i = parseFloat(l ? t.x : t), n = parseFloat(l ? t.y : 0), a = U, s = 0, o = u.length; o--;)(e = l ? (e = u[o].x - i) * e + (r = u[o].y - n) * r : Math.abs(u[o] - i)) < a && (a = e, s = o);
            return s = !h || a <= h ? u[s] : t, l || s === t || q(t) ? s : s + Oa(t);
        } : Wa(u));
    }
    function Ya(t, e, r, i) {
        return Ma(K(t) ? !e : !0 === r ? (r = 0, false) : !i, function() {
            return K(t) ? t[~~(Math.random() * t.length)] : (r = r || 0.00001, i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r) * r * i) / i;
        });
    }
    function ab(e, r, t5) {
        return Ma(t5, function(t) {
            return e[~~r(t)];
        });
    }
    function db(t) {
        for(var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));)i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? at : tt), s += t.substr(a, e - a) + Ya(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 0.00001), a = i + 1;
        return s + t.substr(a, t.length - a);
    }
    function gb(t, e, r) {
        var i, n, a, s = t.labels, o = U;
        for(i in s)(n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);
        return a;
    }
    function ib(t) {
        return sa(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && xt(t, "onInterrupt"), t;
    }
    function nb(t, e, r) {
        return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < 0.5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * Ot + 0.5 | 0;
    }
    function ob(t, e, r) {
        var i, n, a, s, o, u, h, l, f, d, c = t ? q(t) ? [
            t >> 16,
            t >> 8 & Ot,
            t & Ot
        ] : 0 : Mt.black;
        if (!c) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Mt[t]) c = Mt[t];
            else if ("#" === t.charAt(0)) {
                if (t.length < 6 && (t = "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (a = t.charAt(3)) + a + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [
                    (c = parseInt(t.substr(1, 6), 16)) >> 16,
                    c >> 8 & Ot,
                    c & Ot,
                    parseInt(t.substr(7), 16) / 255
                ];
                c = [
                    (t = parseInt(t.substr(1), 16)) >> 16,
                    t >> 8 & Ot,
                    t & Ot
                ];
            } else if ("hsl" === t.substr(0, 3)) {
                if (c = d = t.match(tt), e) {
                    if (~t.indexOf("=")) return c = t.match(et), r && c.length < 4 && (c[3] = 1), c;
                } else s = +c[0] % 360 / 360, o = c[1] / 100, i = 2 * (u = c[2] / 100) - (n = u <= 0.5 ? u * (o + 1) : u + o - u * o), 3 < c.length && (c[3] *= 1), c[0] = nb(s + 1 / 3, i, n), c[1] = nb(s, i, n), c[2] = nb(s - 1 / 3, i, n);
            } else c = t.match(tt) || Mt.transparent;
            c = c.map(Number);
        }
        return e && !d && (i = c[0] / Ot, n = c[1] / Ot, a = c[2] / Ot, u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2, h === l ? s = o = 0 : (f = h - l, o = 0.5 < u ? f / (2 - h - l) : f / (h + l), s = h === i ? (n - a) / f + (n < a ? 6 : 0) : h === n ? (a - i) / f + 2 : (i - n) / f + 4, s *= 60), c[0] = ~~(s + 0.5), c[1] = ~~(100 * o + 0.5), c[2] = ~~(100 * u + 0.5)), r && c.length < 4 && (c[3] = 1), c;
    }
    function pb(t6) {
        var r = [], i = [], n = -1;
        return t6.split(kt).forEach(function(t) {
            var e = t.match(rt) || [];
            r.push.apply(r, e), i.push(n += e.length + 1);
        }), r.c = i, r;
    }
    function qb(t7, e, r) {
        var i, n, a, s, o = "", u = (t7 + o).match(kt), h = e ? "hsla(" : "rgba(", l = 0;
        if (!u) return t7;
        if (u = u.map(function(t) {
            return (t = ob(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
        }), r && (a = pb(t7), (i = r.c).join(o) !== a.c.join(o))) for(s = (n = t7.replace(kt, "1").split(rt)).length - 1; l < s; l++)o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
        if (!n) for(s = (n = t7.split(kt)).length - 1; l < s; l++)o += n[l] + u[l];
        return o + n[s];
    }
    function tb(t) {
        var e, r = t.join(" ");
        if (kt.lastIndex = 0, kt.test(r)) return e = Ct.test(r), t[1] = qb(t[1], e), t[0] = qb(t[0], e, pb(t[1])), !0;
    }
    function Cb(t8) {
        var e4 = (t8 + "").split("("), r3 = Dt[e4[0]];
        return r3 && 1 < e4.length && r3.config ? r3.config.apply(null, ~t8.indexOf("{") ? [
            function _parseObjectInString(t) {
                for(var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++)r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(zt, "").trim() : +i, s = r.substr(e + 1).trim();
                return n;
            }(e4[1])
        ] : (function _valueInParentheses(t) {
            var e = t.indexOf("(") + 1, r = t.indexOf(")"), i = t.indexOf("(", e);
            return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
        })(t8).split(",").map(ha)) : Dt._CE && St.test(t8) ? Dt._CE("", t8) : r3;
    }
    function Eb(t, e) {
        for(var r, i = t._first; i;)i instanceof Bt ? Eb(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Eb(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next;
    }
    function Gb(t9, e5, r, i) {
        void 0 === r && (r = function easeOut(t) {
            return 1 - e5(1 - t);
        }), void 0 === i && (i = function easeInOut(t) {
            return t < 0.5 ? e5(2 * t) / 2 : 1 - e5(2 * (1 - t)) / 2;
        });
        var n, a = {
            easeIn: e5,
            easeOut: r,
            easeInOut: i
        };
        return ba(t9, function(t) {
            for(var e in Dt[t] = ot[t] = a, Dt[n = t.toLowerCase()] = r, a)Dt[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Dt[t + "." + e] = a[e];
        }), a;
    }
    function Hb(e) {
        return function(t) {
            return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
        };
    }
    function Ib(r, t10, e6) {
        function Dl(t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * H((t - a) * n) + 1;
        }
        var i = 1 <= t10 ? t10 : 1, n = (e6 || (r ? 0.3 : 0.45)) / (t10 < 1 ? t10 : 1), a = n / X * (Math.asin(1 / i) || 0), s = "out" === r ? Dl : "in" === r ? function(t) {
            return 1 - Dl(1 - t);
        } : Hb(Dl);
        return n = X / n, s.config = function(t, e) {
            return Ib(r, t, e);
        }, s;
    }
    function Jb(e, r) {
        function Ll(t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
        }
        void 0 === r && (r = 1.70158);
        var t11 = "out" === e ? Ll : "in" === e ? function(t) {
            return 1 - Ll(1 - t);
        } : Hb(Ll);
        return t11.config = function(t) {
            return Jb(e, t);
        }, t11;
    }
    var R1, F1, i1, n1, a1, h1, l1, f1, d1, c1, m1, g1, y1, b1, T1, w1, x1, k1, C1, A1, D1, S1, z1, I1, E1, L1, Y = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, B1 = {
        duration: 0.5,
        overwrite: !1,
        delay: 0
    }, U = 100000000, j = 1 / U, X = 2 * Math.PI, V = X / 4, G = 0, J = Math.sqrt, W = Math.cos, H = Math.sin, Z = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {}, K = Array.isArray, tt = /(?:-?\.?\d|\.)+/gi, et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, nt = /[+-]=-?[.\d]+/, at = /[#\-+.]*\b[a-z\d-=+%.]+/gi, st = /[\d.+\-=]+(?:e[-+]\d*)*/i, ot = {}, ut = {}, ht = [], lt = {}, ft = {}, dt = {}, ct = 30, pt = [], _t = "", mt = function _merge(t, e) {
        for(var r in e)t[r] = e[r];
        return t;
    }, gt = function _animationCycle(t, e) {
        var r = Math.floor(t /= e);
        return t && r === t ? r - 1 : r;
    }, vt = {
        _start: 0,
        endTime: Q
    }, yt = function _clamp(t, e, r) {
        return r < t ? t : e < r ? e : r;
    }, bt = [].slice, Tt = function toArray(t12, e7) {
        return !o1(t12) || e7 || !n1 && At() ? K(t12) ? function _flatten(t13, e, r) {
            return void 0 === r && (r = []), t13.forEach(function(t) {
                return o1(t) && !e || Ra(t, 1) ? r.push.apply(r, Tt(t)) : r.push(t);
            }) || r;
        }(t12, e7) : Ra(t12) ? bt.call(t12, 0) : t12 ? [
            t12
        ] : [] : bt.call(a1.querySelectorAll(t12), 0);
    }, wt = function mapRange(e, t14, r, i, n) {
        var a = t14 - e, s = i - r;
        return Ma(n, function(t) {
            return r + ((t - e) / a * s || 0);
        });
    }, xt = function _callback(t, e, r) {
        var i, n, a = t.vars, s = a[e];
        if (s) return i = a[e + "Params"], n = a.callbackScope || t, r && ht.length && fa(), i ? s.apply(n, i) : s.call(n);
    }, Ot = 255, Mt = {
        aqua: [
            0,
            Ot,
            Ot
        ],
        lime: [
            0,
            Ot,
            0
        ],
        silver: [
            192,
            192,
            192
        ],
        black: [
            0,
            0,
            0
        ],
        maroon: [
            128,
            0,
            0
        ],
        teal: [
            0,
            128,
            128
        ],
        blue: [
            0,
            0,
            Ot
        ],
        navy: [
            0,
            0,
            128
        ],
        white: [
            Ot,
            Ot,
            Ot
        ],
        olive: [
            128,
            128,
            0
        ],
        yellow: [
            Ot,
            Ot,
            0
        ],
        orange: [
            Ot,
            165,
            0
        ],
        gray: [
            128,
            128,
            128
        ],
        purple: [
            128,
            0,
            128
        ],
        green: [
            0,
            128,
            0
        ],
        red: [
            Ot,
            0,
            0
        ],
        pink: [
            Ot,
            192,
            203
        ],
        cyan: [
            0,
            Ot,
            Ot
        ],
        transparent: [
            Ot,
            Ot,
            Ot,
            0
        ]
    }, kt = function() {
        var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for(t in Mt)e += "|" + t + "\\b";
        return new RegExp(e + ")", "gi");
    }(), Ct = /hsl[a]?\(/, Pt = (x1 = Date.now, k1 = 500, C1 = 33, A1 = x1(), D1 = A1, z1 = S1 = 1000 / 240, b1 = {
        time: 0,
        frame: 0,
        tick: function tick() {
            zk(!0);
        },
        deltaRatio: function deltaRatio(t) {
            return T1 / (1000 / (t || 60));
        },
        wake: function wake() {
            l1 && (!n1 && u1() && (i1 = n1 = window, a1 = i1.document || {}, ot.gsap = ae, (i1.gsapVersions || (i1.gsapVersions = [])).push(ae.version), M1(h1 || i1.GreenSockGlobals || !i1.gsap && i1 || {}), y1 = i1.requestAnimationFrame), m1 && b1.sleep(), g1 = y1 || function(t) {
                return setTimeout(t, z1 - 1000 * b1.time + 1 | 0);
            }, c1 = 1, zk(2));
        },
        sleep: function sleep() {
            (y1 ? i1.cancelAnimationFrame : clearTimeout)(m1), c1 = 0, g1 = Q;
        },
        lagSmoothing: function lagSmoothing(t, e) {
            k1 = t || 100000000, C1 = Math.min(e, k1, 0);
        },
        fps: function fps(t) {
            S1 = 1000 / (t || 240), z1 = 1000 * b1.time + S1;
        },
        add: function add(t) {
            I1.indexOf(t) < 0 && I1.push(t), At();
        },
        remove: function remove(t) {
            var e;
            ~(e = I1.indexOf(t)) && I1.splice(e, 1) && e <= w1 && w1--;
        },
        _listeners: I1 = []
    }), At = function _wake() {
        return !c1 && Pt.wake();
    }, Dt = {}, St = /^[\d.\-M][\d.\-,\s]/, zt = /["']/g, It = function _invertEase(e) {
        return function(t) {
            return 1 - e(1 - t);
        };
    }, Et = function _parseEase(t, e) {
        return t && (p1(t) ? t : Dt[t] || Cb(t)) || e;
    };
    function zk(t) {
        var e, r, i, n, a = x1() - D1, s = !0 === t;
        if (k1 < a && (A1 += a - C1), (0 < (e = (i = (D1 += a) - A1) - z1) || s) && (n = ++b1.frame, T1 = i - 1000 * b1.time, b1.time = i /= 1000, z1 += e + (S1 <= e ? 4 : S1 - e), r = 1), s || (m1 = g1(zk)), r) for(w1 = 0; w1 < I1.length; w1++)I1[w1](i, T1, n, t);
    }
    function am(t) {
        return t < L1 ? E1 * t * t : t < 0.7272727272727273 ? E1 * Math.pow(t - 1.5 / 2.75, 2) + 0.75 : t < 0.9090909090909092 ? E1 * (t -= 2.25 / 2.75) * t + 0.9375 : E1 * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
    }
    ba("Linear,Quad,Cubic,Quart,Quint,Strong", function(t15, e) {
        var r = e < 5 ? e + 1 : e;
        Gb(t15 + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r);
        } : function(t) {
            return t;
        }, function(t) {
            return 1 - Math.pow(1 - t, r);
        }, function(t) {
            return t < 0.5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2;
        });
    }), Dt.Linear.easeNone = Dt.none = Dt.Linear.easeIn, Gb("Elastic", Ib("in"), Ib("out"), Ib()), E1 = 7.5625, L1 = 1 / 2.75, Gb("Bounce", function(t) {
        return 1 - am(1 - t);
    }, am), Gb("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }), Gb("Circ", function(t) {
        return -(J(1 - t * t) - 1);
    }), Gb("Sine", function(t) {
        return 1 === t ? 1 : 1 - W(t * V);
    }), Gb("Back", Jb("in"), Jb("out"), Jb()), Dt.SteppedEase = Dt.steps = ot.SteppedEase = {
        config: function config(t16, e) {
            void 0 === t16 && (t16 = 1);
            var r = 1 / t16, i = t16 + (e ? 0 : 1), n = e ? 1 : 0;
            return function(t) {
                return ((i * yt(0, 0.99999999, t) | 0) + n) * r;
            };
        }
    }, B1.ease = Dt["quad.out"], ba("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return _t += t + "," + t + "Params,";
    });
    var Lt, Rt = function GSCache(t, e) {
        this.id = G++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : aa, this.set = e ? e.getSetter : Wt;
    }, Ft = ((Lt = Animation.prototype).delay = function delay(t) {
        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay;
    }, Lt.duration = function duration(t) {
        return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
    }, Lt.totalDuration = function totalDuration(t) {
        return arguments.length ? (this._dirty = 0, Ia(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
    }, Lt.totalTime = function totalTime(t, e) {
        if (At(), !arguments.length) return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
            for(Aa(this, t), !r._dp || r.parent || Ba(r, this); r.parent;)r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
            !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Ca(this._dp, this, this._start - this._delay);
        }
        return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === j || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), ga(this, t, e)), this;
    }, Lt.time = function time(t, e) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + wa(this)) % this._dur || (t ? this._dur : 0), e) : this._time;
    }, Lt.totalProgress = function totalProgress(t, e) {
        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    }, Lt.progress = function progress(t, e) {
        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + wa(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    }, Lt.iteration = function iteration(t, e) {
        var r = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? gt(this._tTime, r) + 1 : 1;
    }, Lt.timeScale = function timeScale(t17) {
        if (!arguments.length) return this._rts === -j ? 0 : this._rts;
        if (this._rts === t17) return this;
        var e8 = this.parent && this._ts ? ya(this.parent._time, this) : this._tTime;
        return this._rts = +t17 || 0, this._ts = this._ps || t17 === -j ? 0 : this._rts, function _recacheAncestors(t) {
            for(var e = t.parent; e && e.parent;)e._dirty = 1, e.totalDuration(), e = e.parent;
            return t;
        }(this.totalTime(yt(-this._delay, this._tDur, e8), !0));
    }, Lt.paused = function paused(t) {
        return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (At(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= j) && Math.abs(this._zTime) !== j))), this) : this._ps;
    }, Lt.startTime = function startTime(t) {
        if (arguments.length) {
            this._start = t;
            var e = this.parent || this._dp;
            return !e || !e._sort && this.parent || Ca(e, this, t - this._delay), this;
        }
        return this._start;
    }, Lt.endTime = function endTime(e) {
        return this._start + (t1(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
    }, Lt.rawTime = function rawTime(t) {
        var e = this.parent || this._dp;
        return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ya(e.rawTime(t), this) : this._tTime : this._tTime;
    }, Lt.globalTime = function globalTime(t) {
        for(var e = this, r = arguments.length ? t : e.rawTime(); e;)r = e._start + r / (e._ts || 1), e = e._dp;
        return r;
    }, Lt.repeat = function repeat(t) {
        return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Ja(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
    }, Lt.repeatDelay = function repeatDelay(t) {
        return arguments.length ? (this._rDelay = t, Ja(this)) : this._rDelay;
    }, Lt.yoyo = function yoyo(t) {
        return arguments.length ? (this._yoyo = t, this) : this._yoyo;
    }, Lt.seek = function seek(e, r) {
        return this.totalTime(La(this, e), t1(r));
    }, Lt.restart = function restart(e, r) {
        return this.play().totalTime(e ? -this._delay : 0, t1(r));
    }, Lt.play = function play(t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
    }, Lt.reverse = function reverse(t, e) {
        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
    }, Lt.pause = function pause(t, e) {
        return null != t && this.seek(t, e), this.paused(!0);
    }, Lt.resume = function resume() {
        return this.paused(!1);
    }, Lt.reversed = function reversed(t) {
        return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -j : 0)), this) : this._rts < 0;
    }, Lt.invalidate = function invalidate() {
        return this._initted = this._act = 0, this._zTime = -j, this;
    }, Lt.isActive = function isActive() {
        var t, e = this.parent || this._dp, r = this._start;
        return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - j));
    }, Lt.eventCallback = function eventCallback(t, e, r) {
        var i = this.vars;
        return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t];
    }, Lt.then = function then(t18) {
        var i = this;
        return new Promise(function(e) {
            function sn() {
                var t = i.then;
                i.then = null, p1(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t;
            }
            var r = p1(t18) ? t18 : ia;
            i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? sn() : i._prom = sn;
        });
    }, Lt.kill = function kill() {
        ib(this);
    }, Animation);
    function Animation(t, e) {
        var r = t.parent || F1;
        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ia(this, +t.duration, 1, 1), this.data = t.data, c1 || Pt.wake(), r && Ca(r, this, e || 0 === e ? e : r._time, 1), t.reversed && this.reverse(), t.paused && this.paused(!0);
    }
    ja(Ft.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -j,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Bt = function(n2) {
        function Timeline(e, r) {
            var i;
            return void 0 === e && (e = {}), (i = n2.call(this, e, r) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = t1(e.sortChildren), i.parent && Ba(i.parent, _assertThisInitialized(i)), e.scrollTrigger && Da(_assertThisInitialized(i), e.scrollTrigger), i;
        }
        _inheritsLoose(Timeline, n2);
        var e9 = Timeline.prototype;
        return e9.to = function to(t, e, r, i) {
            return new Vt(t, ea(arguments, 0, this), La(this, q(e) ? i : r)), this;
        }, e9.from = function from(t, e, r, i) {
            return new Vt(t, ea(arguments, 1, this), La(this, q(e) ? i : r)), this;
        }, e9.fromTo = function fromTo(t, e, r, i, n) {
            return new Vt(t, ea(arguments, 2, this), La(this, q(e) ? n : i)), this;
        }, e9.set = function set(t, e, r) {
            return e.duration = 0, e.parent = this, oa(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Vt(t, e, La(this, r), 1), this;
        }, e9.call = function call(t, e, r) {
            return Ca(this, Vt.delayedCall(0, t, e), La(this, r));
        }, e9.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
            return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new Vt(t, r, La(this, n)), this;
        }, e9.staggerFrom = function staggerFrom(e, r, i, n, a, s, o) {
            return i.runBackwards = 1, oa(i).immediateRender = t1(i.immediateRender), this.staggerTo(e, r, i, n, a, s, o);
        }, e9.staggerFromTo = function staggerFromTo(e, r, i, n, a, s, o, u) {
            return n.startAt = i, oa(n).immediateRender = t1(n.immediateRender), this.staggerTo(e, r, n, a, s, o, u);
        }, e9.render = function render(t19, e10, r4) {
            var i3, n, a, s, o, u, h, l, f, d, c, p, _ = this._time, m = this._dirty ? this.totalDuration() : this._tDur, g = this._dur, v = this !== F1 && m - j < t19 && 0 <= t19 ? m : t19 < j ? 0 : t19, y = this._zTime < 0 != t19 < 0 && (this._initted || !g);
            if (v !== this._tTime || r4 || y) {
                if (_ !== this._time && g && (v += this._time - _, t19 += this._time - _), i3 = v, f = this._start, u = !(l = this._ts), y && (g || (_ = this._zTime), !t19 && e10 || (this._zTime = t19)), this._repeat) {
                    if (c = this._yoyo, o = g + this._rDelay, this._repeat < -1 && t19 < 0) return this.totalTime(100 * o + t19, e10, r4);
                    if (i3 = ca(v % o), v === m ? (s = this._repeat, i3 = g) : ((s = ~~(v / o)) && s === v / o && (i3 = g, s--), g < i3 && (i3 = g)), d = gt(this._tTime, o), !_ && this._tTime && d !== s && (d = s), c && 1 & s && (i3 = g - i3, p = 1), s !== d && !this._lock) {
                        var b = c && 1 & d, T = b === (c && 1 & s);
                        if (s < d && (b = !b), _ = b ? 0 : g, this._lock = 1, this.render(_ || (p ? 0 : ca(s * o)), e10, !g)._lock = 0, !e10 && this.parent && xt(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), _ && _ !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (g = this._dur, m = this._tDur, T && (this._lock = 2, _ = b ? g : -0.0001, this.render(_, !0)), this._lock = 0, !this._ts && !u) return this;
                        Eb(this, p);
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
                    var i;
                    if (e < r) for(i = t._first; i && i._start <= r;){
                        if (!i._dur && "isPause" === i.data && i._start > e) return i;
                        i = i._next;
                    }
                    else for(i = t._last; i && i._start >= r;){
                        if (!i._dur && "isPause" === i.data && i._start < e) return i;
                        i = i._prev;
                    }
                }(this, ca(_), ca(i3))) && (v -= i3 - (i3 = h._start)), this._tTime = v, this._time = i3, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t19, _ = 0), _ || !i3 || e10 || xt(this, "onStart"), _ <= i3 && 0 <= t19) for(n = this._first; n;){
                    if (a = n._next, (n._act || i3 >= n._start) && n._ts && h !== n) {
                        if (n.parent !== this) return this.render(t19, e10, r4);
                        if (n.render(0 < n._ts ? (i3 - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i3 - n._start) * n._ts, e10, r4), i3 !== this._time || !this._ts && !u) {
                            h = 0, a && (v += this._zTime = -j);
                            break;
                        }
                    }
                    n = a;
                }
                else {
                    n = this._last;
                    for(var w = t19 < 0 ? t19 : i3; n;){
                        if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
                            if (n.parent !== this) return this.render(t19, e10, r4);
                            if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e10, r4), i3 !== this._time || !this._ts && !u) {
                                h = 0, a && (v += this._zTime = w ? -j : j);
                                break;
                            }
                        }
                        n = a;
                    }
                }
                if (h && !e10 && (this.pause(), h.render(_ <= i3 ? 0 : -j)._zTime = _ <= i3 ? 1 : -1, this._ts)) return this._start = f, za(this), this.render(t19, e10, r4);
                this._onUpdate && !e10 && xt(this, "onUpdate", !0), (v === m && m >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t19 && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || sa(this, 1), e10 || t19 < 0 && !_ || !v && !_ || (xt(this, v === m ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom())));
            }
            return this;
        }, e9.add = function add(t20, e) {
            var r = this;
            if (q(e) || (e = La(this, e)), !(t20 instanceof Ft)) {
                if (K(t20)) return t20.forEach(function(t) {
                    return r.add(t, e);
                }), this;
                if (o1(t20)) return this.addLabel(t20, e);
                if (!p1(t20)) return this;
                t20 = Vt.delayedCall(0, t20);
            }
            return this !== t20 ? Ca(this, t20, e) : this;
        }, e9.getChildren = function getChildren(t, e, r, i) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -U);
            for(var n = [], a = this._first; a;)a._start >= i && (a instanceof Vt ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;
            return n;
        }, e9.getById = function getById(t) {
            for(var e = this.getChildren(1, 1, 1), r = e.length; r--;)if (e[r].vars.id === t) return e[r];
        }, e9.remove = function remove(t) {
            return o1(t) ? this.removeLabel(t) : p1(t) ? this.killTweensOf(t) : (ra(this, t), t === this._recent && (this._recent = this._last), ta(this));
        }, e9.totalTime = function totalTime(t, e) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ca(Pt.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), n2.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime;
        }, e9.addLabel = function addLabel(t, e) {
            return this.labels[t] = La(this, e), this;
        }, e9.removeLabel = function removeLabel(t) {
            return delete this.labels[t], this;
        }, e9.addPause = function addPause(t, e, r) {
            var i = Vt.delayedCall(0, e || Q, r);
            return i.data = "isPause", this._hasPause = 1, Ca(this, i, La(this, t));
        }, e9.removePause = function removePause(t) {
            var e = this._first;
            for(t = La(this, t); e;)e._start === t && "isPause" === e.data && sa(e), e = e._next;
        }, e9.killTweensOf = function killTweensOf(t, e, r) {
            for(var i = this.getTweensOf(t, r), n = i.length; n--;)qt !== i[n] && i[n].kill(t, e);
            return this;
        }, e9.getTweensOf = function getTweensOf(t, e) {
            for(var r, i = [], n = Tt(t), a = this._first, s = q(e); a;)a instanceof Vt ? da(a._targets, n) && (s ? (!qt || a._initted && a._ts) && a.globalTime(0) <= e && a.globalTime(a.totalDuration()) > e : !e || a.isActive()) && i.push(a) : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r), a = a._next;
            return i;
        }, e9.tweenTo = function tweenTo(t21, e) {
            e = e || {};
            var r = this, i = La(r, t21), n = e.startAt, a = e.onStart, s = e.onStartParams, o = e.immediateRender, u = Vt.to(r, ja({
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: i,
                overwrite: "auto",
                duration: e.duration || Math.abs((i - (n && "time" in n ? n.time : r._time)) / r.timeScale()) || j,
                onStart: function onStart() {
                    r.pause();
                    var t = e.duration || Math.abs((i - r._time) / r.timeScale());
                    u._dur !== t && Ia(u, t, 0, 1).render(u._time, !0, !0), a && a.apply(u, s || []);
                }
            }, e));
            return o ? u.render(0) : u;
        }, e9.tweenFromTo = function tweenFromTo(t, e, r) {
            return this.tweenTo(e, ja({
                startAt: {
                    time: La(this, t)
                }
            }, r));
        }, e9.recent = function recent() {
            return this._recent;
        }, e9.nextLabel = function nextLabel(t) {
            return void 0 === t && (t = this._time), gb(this, La(this, t));
        }, e9.previousLabel = function previousLabel(t) {
            return void 0 === t && (t = this._time), gb(this, La(this, t), 1);
        }, e9.currentLabel = function currentLabel(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + j);
        }, e9.shiftChildren = function shiftChildren(t, e, r) {
            void 0 === r && (r = 0);
            for(var i, n = this._first, a = this.labels; n;)n._start >= r && (n._start += t, n._end += t), n = n._next;
            if (e) for(i in a)a[i] >= r && (a[i] += t);
            return ta(this);
        }, e9.invalidate = function invalidate() {
            var t = this._first;
            for(this._lock = 0; t;)t.invalidate(), t = t._next;
            return n2.prototype.invalidate.call(this);
        }, e9.clear = function clear(t) {
            void 0 === t && (t = !0);
            for(var e, r = this._first; r;)e = r._next, this.remove(r), r = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), ta(this);
        }, e9.totalDuration = function totalDuration(t) {
            var e, r, i, n = 0, a = this, s = a._last, o = U;
            if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
            if (a._dirty) {
                for(i = a.parent; s;)e = s._prev, s._dirty && s.totalDuration(), o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1, Ca(a, s, r - s._delay, 1)._lock = 0) : o = r, r < 0 && s._ts && (n -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), o = 0), s._end > n && s._ts && (n = s._end), s = e;
                Ia(a, a === F1 && a._time > n ? a._time : n, 1, 1), a._dirty = 0;
            }
            return a._tDur;
        }, Timeline.updateRoot = function updateRoot(t) {
            if (F1._ts && (ga(F1, ya(t, F1)), f1 = Pt.frame), Pt.frame >= ct) {
                ct += Y.autoSleep || 120;
                var e = F1._first;
                if ((!e || !e._ts) && Y.autoSleep && Pt._listeners.length < 2) {
                    for(; e && !e._ts;)e = e._next;
                    e || Pt.sleep();
                }
            }
        }, Timeline;
    }(Ft);
    ja(Bt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    function Qb(t22, e11, r5, i4, n3, a2) {
        var u2, h, l, f;
        if (ft[t22] && !1 !== (u2 = new ft[t22]).init(n3, u2.rawVars ? e11[t22] : function _processVars(t, e, r, i, n) {
            if (p1(t) && (t = Ut(t, n, e, r, i)), !s1(t) || t.style && t.nodeType || K(t) || Z(t)) return o1(t) ? Ut(t, n, e, r, i) : t;
            var a, u = {};
            for(a in t)u[a] = Ut(t[a], n, e, r, i);
            return u;
        }(e11[t22], i4, n3, a2, r5), r5, i4, a2) && (r5._pt = h = new ie(r5._pt, n3, t22, 0, 1, u2.render, u2, 0, u2.priority), r5 !== d1)) for(l = r5._ptLookup[r5._targets.indexOf(n3)], f = u2._props.length; f--;)l[u2._props[f]] = h;
        return u2;
    }
    var qt, Yt = function _addPropTween(t23, e12, r6, i5, n4, a3, s2, u3, h2) {
        p1(i5) && (i5 = i5(n4 || 0, t23, a3));
        var l2, f2 = t23[e12], d2 = "get" !== r6 ? r6 : p1(f2) ? h2 ? t23[e12.indexOf("set") || !p1(t23["get" + e12.substr(3)]) ? e12 : "get" + e12.substr(3)](h2) : t23[e12]() : f2, c2 = p1(f2) ? h2 ? Jt : Qt : Gt;
        if (o1(i5) && (~i5.indexOf("random(") && (i5 = db(i5)), "=" === i5.charAt(1) && (i5 = parseFloat(d2) + parseFloat(i5.substr(2)) * ("-" === i5.charAt(0) ? -1 : 1) + (Oa(d2) || 0))), d2 !== i5) return isNaN(d2 * i5) ? (f2 || e12 in t23 || N(e12, i5), (function _addComplexStringPropTween(t, e, r, i, n, a, s) {
            var o, u, h, l, f, d, c, p, _ = new ie(this._pt, t, e, 0, 1, Zt, null, n), m = 0, g = 0;
            for(_.b = r, _.e = i, r += "", (c = ~(i += "").indexOf("random(")) && (i = db(i)), a && (a(p = [
                r,
                i
            ], t, e), r = p[0], i = p[1]), u = r.match(it) || []; o = it.exec(i);)l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (d = parseFloat(u[g - 1]) || 0, _._pt = {
                _next: _._pt,
                p: f || 1 === g ? f : ",",
                s: d,
                c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - d,
                m: h && h < 4 ? Math.round : 0
            }, m = it.lastIndex);
            return _.c = m < i.length ? i.substring(m, i.length) : "", _.fp = s, (nt.test(i) || c) && (_.e = 0), this._pt = _;
        }).call(this, t23, e12, d2, i5, c2, u3 || Y.stringFilter, h2)) : (l2 = new ie(this._pt, t23, e12, +d2 || 0, i5 - (d2 || 0), "boolean" == typeof f2 ? $t : Ht, 0, c2), h2 && (l2.fp = h2), s2 && l2.modifier(s2, this, t23), this._pt = l2);
    }, Nt = function _initTween(e, r) {
        var i, n, a, s, o, u, h, l, f, d, c, p, m, g = e.vars, v = g.ease, y = g.startAt, b = g.immediateRender, T = g.lazy, w = g.onUpdate, x = g.onUpdateParams, O = g.callbackScope, M = g.runBackwards, k = g.yoyoEase, C = g.keyframes, P = g.autoRevert, A = e._dur, D = e._startAt, S = e._targets, z = e.parent, I = z && "nested" === z.data ? z.parent._targets : S, E = "auto" === e._overwrite && !R1, L = e.timeline;
        if (!L || C && v || (v = "none"), e._ease = Et(v, B1.ease), e._yEase = k ? It(Et(!0 === k ? v : k, B1.ease)) : 0, k && e._yoyo && !e._repeat && (k = e._yEase, e._yEase = e._ease, e._ease = k), !L) {
            if (p = (l = S[0] ? _1(S[0]).harness : 0) && g[l.prop], i = na(g, ut), D && D.render(-1, !0).kill(), y) {
                if (sa(e._startAt = Vt.set(S, ja({
                    data: "isStart",
                    overwrite: !1,
                    parent: z,
                    immediateRender: !0,
                    lazy: t1(T),
                    startAt: null,
                    delay: 0,
                    onUpdate: w,
                    onUpdateParams: x,
                    callbackScope: O,
                    stagger: 0
                }, y))), b) {
                    if (0 < r) P || (e._startAt = 0);
                    else if (A && !(r < 0 && D)) return void (r && (e._zTime = r));
                } else !1 === P && (e._startAt = 0);
            } else if (M && A) {
                if (D) P || (e._startAt = 0);
                else if (r && (b = !1), a = ja({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: b && t1(T),
                    immediateRender: b,
                    stagger: 0,
                    parent: z
                }, i), p && (a[l.prop] = p), sa(e._startAt = Vt.set(S, a)), b) {
                    if (!r) return;
                } else _initTween(e._startAt, j);
            }
            for(e._pt = 0, T = A && t1(T) || T && !A, n = 0; n < S.length; n++){
                if (h = (o = S[n])._gsap || $(S)[n]._gsap, e._ptLookup[n] = d = {}, lt[h.id] && ht.length && fa(), c = I === S ? n : I.indexOf(o), l && !1 !== (f = new l).init(o, p || i, e, c, I) && (e._pt = s = new ie(e._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function(t) {
                    d[t] = s;
                }), f.priority && (u = 1)), !l || p) for(a in i)ft[a] && (f = Qb(a, i, e, c, o, I)) ? f.priority && (u = 1) : d[a] = s = Yt.call(e, o, a, "get", i[a], c, I, 0, g.stringFilter);
                e._op && e._op[n] && e.kill(o, e._op[n]), E && e._pt && (qt = e, F1.killTweensOf(o, d, e.globalTime(0)), m = !e.parent, qt = 0), e._pt && T && (lt[h.id] = 1);
            }
            u && re(e), e._onInit && e._onInit(e);
        }
        e._from = !L && !!g.runBackwards, e._onUpdate = w, e._initted = (!e._op || e._pt) && !m;
    }, Ut = function _parseFuncOrString(t, e, r, i, n) {
        return p1(t) ? t.call(e, r, i, n) : o1(t) && ~t.indexOf("random(") ? db(t) : t;
    }, jt = _t + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", Xt = (jt + ",id,stagger,delay,duration,paused,scrollTrigger").split(","), Vt = function(A) {
        function Tween(e, r, i, n) {
            var a;
            "number" == typeof r && (i.duration = r, r = i, i = null);
            var o, u, h, l, f, d, c, p, _ = (a = A.call(this, n ? r : oa(r), i) || this).vars, m = _.duration, g = _.delay, y = _.immediateRender, b = _.stagger, T = _.overwrite, w = _.keyframes, x = _.defaults, M = _.scrollTrigger, k = _.yoyoEase, C = a.parent, P = (K(e) || Z(e) ? q(e[0]) : "length" in r) ? [
                e
            ] : Tt(e);
            if (a._targets = P.length ? $(P) : O1("GSAP target " + e + " not found. https://greensock.com", !Y.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = T, w || b || v1(m) || v1(g)) {
                if (r = a.vars, (o = a.timeline = new Bt({
                    data: "nested",
                    defaults: x || {}
                })).kill(), o.parent = o._dp = _assertThisInitialized(a), o._start = 0, w) ja(o.vars.defaults, {
                    ease: "none"
                }), w.forEach(function(t) {
                    return o.to(P, t, ">");
                });
                else {
                    if (l = P.length, c = b ? Va(b) : Q, s1(b)) for(f in b)~jt.indexOf(f) && ((p = p || {})[f] = b[f]);
                    for(u = 0; u < l; u++){
                        for(f in h = {}, r)Xt.indexOf(f) < 0 && (h[f] = r[f]);
                        h.stagger = 0, k && (h.yoyoEase = k), p && mt(h, p), d = P[u], h.duration = +Ut(m, _assertThisInitialized(a), u, d, P), h.delay = (+Ut(g, _assertThisInitialized(a), u, d, P) || 0) - a._delay, !b && 1 === l && h.delay && (a._delay = g = h.delay, a._start += g, h.delay = 0), o.to(d, h, c(u, d, P));
                    }
                    o.duration() ? m = g = 0 : a.timeline = 0;
                }
                m || a.duration(m = o.duration());
            } else a.timeline = 0;
            return !0 !== T || R1 || (qt = _assertThisInitialized(a), F1.killTweensOf(P), qt = 0), C && Ba(C, _assertThisInitialized(a)), (y || !m && !w && a._start === ca(C._time) && t1(y) && function _hasNoPausedAncestors(t) {
                return !t || t._ts && _hasNoPausedAncestors(t.parent);
            }(_assertThisInitialized(a)) && "nested" !== C.data) && (a._tTime = -j, a.render(Math.max(0, -g))), M && Da(_assertThisInitialized(a), M), a;
        }
        _inheritsLoose(Tween, A);
        var e13 = Tween.prototype;
        return e13.render = function render(t24, e14, r7) {
            var i6, n5, a4, s3, o2, u4, h3, l3, f, d = this._time, c = this._tDur, p = this._dur, _ = c - j < t24 && 0 <= t24 ? c : t24 < j ? 0 : t24;
            if (p) {
                if (_ !== this._tTime || !t24 || r7 || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t24 < 0) {
                    if (i6 = _, l3 = this.timeline, this._repeat) {
                        if (s3 = p + this._rDelay, this._repeat < -1 && t24 < 0) return this.totalTime(100 * s3 + t24, e14, r7);
                        if (i6 = ca(_ % s3), _ === c ? (a4 = this._repeat, i6 = p) : ((a4 = ~~(_ / s3)) && a4 === _ / s3 && (i6 = p, a4--), p < i6 && (i6 = p)), (u4 = this._yoyo && 1 & a4) && (f = this._yEase, i6 = p - i6), o2 = gt(this._tTime, s3), i6 === d && !r7 && this._initted) return this;
                        a4 !== o2 && (l3 && this._yEase && Eb(l3, u4), !this.vars.repeatRefresh || u4 || this._lock || (this._lock = r7 = 1, this.render(ca(s3 * a4), !0).invalidate()._lock = 0));
                    }
                    if (!this._initted) {
                        if (Ea(this, t24 < 0 ? t24 : i6, r7, e14)) return this._tTime = 0, this;
                        if (p !== this._dur) return this.render(t24, e14, r7);
                    }
                    for(this._tTime = _, this._time = i6, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h3 = (f || this._ease)(i6 / p), this._from && (this.ratio = h3 = 1 - h3), !i6 || d || e14 || xt(this, "onStart"), n5 = this._pt; n5;)n5.r(h3, n5.d), n5 = n5._next;
                    l3 && l3.render(t24 < 0 ? t24 : !i6 && u4 ? -j : l3._dur * h3, e14, r7) || this._startAt && (this._zTime = t24), this._onUpdate && !e14 && (t24 < 0 && this._startAt && this._startAt.render(t24, !0, r7), xt(this, "onUpdate")), this._repeat && a4 !== o2 && this.vars.onRepeat && !e14 && this.parent && xt(this, "onRepeat"), _ !== this._tDur && _ || this._tTime !== _ || (t24 < 0 && this._startAt && !this._onUpdate && this._startAt.render(t24, !0, !0), !t24 && p || !(_ === this._tDur && 0 < this._ts || !_ && this._ts < 0) || sa(this, 1), e14 || t24 < 0 && !d || !_ && !d || (xt(this, _ === c ? "onComplete" : "onReverseComplete", !0), !this._prom || _ < c && 0 < this.timeScale() || this._prom()));
                }
            } else !function _renderZeroDurationTween(t25, e15, r, i) {
                var n, a, s, o = t25.ratio, u = e15 < 0 || !e15 && (!t25._start && function _parentPlayheadIsBeforeStart(t) {
                    var e = t.parent;
                    return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e));
                }(t25) || (t25._ts < 0 || t25._dp._ts < 0) && "isFromStart" !== t25.data && "isStart" !== t25.data) ? 0 : 1, h = t25._rDelay, l = 0;
                if (h && t25._repeat && (l = yt(0, t25._tDur, e15), a = gt(l, h), s = gt(t25._tTime, h), t25._yoyo && 1 & a && (u = 1 - u), a !== s && (o = 1 - u, t25.vars.repeatRefresh && t25._initted && t25.invalidate())), u !== o || i || t25._zTime === j || !e15 && t25._zTime) {
                    if (!t25._initted && Ea(t25, e15, i, r)) return;
                    for(s = t25._zTime, t25._zTime = e15 || (r ? j : 0), r = r || e15 && !s, t25.ratio = u, t25._from && (u = 1 - u), t25._time = 0, t25._tTime = l, n = t25._pt; n;)n.r(u, n.d), n = n._next;
                    t25._startAt && e15 < 0 && t25._startAt.render(e15, !0, !0), t25._onUpdate && !r && xt(t25, "onUpdate"), l && t25._repeat && !r && t25.parent && xt(t25, "onRepeat"), (e15 >= t25._tDur || e15 < 0) && t25.ratio === u && (u && sa(t25, 1), r || (xt(t25, u ? "onComplete" : "onReverseComplete", !0), t25._prom && t25._prom()));
                } else t25._zTime || (t25._zTime = e15);
            }(this, t24, e14, r7);
            return this;
        }, e13.targets = function targets() {
            return this._targets;
        }, e13.invalidate = function invalidate() {
            return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), A.prototype.invalidate.call(this);
        }, e13.kill = function kill(t26, e16) {
            if (void 0 === e16 && (e16 = "all"), !(t26 || e16 && "all" !== e16)) return this._lazy = this._pt = 0, this.parent ? ib(this) : this;
            if (this.timeline) {
                var r = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t26, e16, qt && !0 !== qt.vars.overwrite)._first || ib(this), this.parent && r !== this.timeline.totalDuration() && Ia(this, this._dur * this.timeline._tDur / r, 0, 1), this;
            }
            var i7, n6, a5, s4, u, h, l, f = this._targets, d = t26 ? Tt(t26) : f, c = this._ptLookup, p = this._pt;
            if ((!e16 || "all" === e16) && function _arraysMatch(t, e) {
                for(var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
                return r < 0;
            }(f, d)) return "all" === e16 && (this._pt = 0), ib(this);
            for(i7 = this._op = this._op || [], "all" !== e16 && (o1(e16) && (u = {}, ba(e16, function(t) {
                return u[t] = 1;
            }), e16 = u), e16 = function _addAliasesToVars(t, e) {
                var r, i, n, a, s = t[0] ? _1(t[0]).harness : 0, o = s && s.aliases;
                if (!o) return e;
                for(i in r = mt({}, e), o)if ((i in r)) for(n = (a = o[i].split(",")).length; n--;)r[a[n]] = r[i];
                return r;
            }(f, e16)), l = f.length; l--;)if (~d.indexOf(f[l])) for(u in n6 = c[l], "all" === e16 ? (i7[l] = e16, s4 = n6, a5 = {}) : (a5 = i7[l] = i7[l] || {}, s4 = e16), s4)(h = n6 && n6[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || ra(this, h, "_pt"), delete n6[u]), "all" !== a5 && (a5[u] = 1);
            return this._initted && !this._pt && p && ib(this), this;
        }, Tween.to = function to(t, e, r) {
            return new Tween(t, e, r);
        }, Tween.from = function from(t, e) {
            return new Tween(t, ea(arguments, 1));
        }, Tween.delayedCall = function delayedCall(t, e, r, i) {
            return new Tween(e, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: i
            });
        }, Tween.fromTo = function fromTo(t, e, r) {
            return new Tween(t, ea(arguments, 2));
        }, Tween.set = function set(t, e) {
            return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e);
        }, Tween.killTweensOf = function killTweensOf(t, e, r) {
            return F1.killTweensOf(t, e, r);
        }, Tween;
    }(Ft);
    ja(Vt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), ba("staggerTo,staggerFrom,staggerFromTo", function(r) {
        Vt[r] = function() {
            var t = new Bt, e = bt.call(arguments, 0);
            return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e);
        };
    });
    function _b(t, e, r) {
        return t.setAttribute(e, r);
    }
    function hc(t, e, r, i) {
        i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
    }
    var Gt = function _setterPlain(t, e, r) {
        return t[e] = r;
    }, Qt = function _setterFunc(t, e, r) {
        return t[e](r);
    }, Jt = function _setterFuncWithParam(t, e, r, i) {
        return t[e](i.fp, r);
    }, Wt = function _getSetter(t, e) {
        return p1(t[e]) ? Qt : r1(t[e]) && t.setAttribute ? _b : Gt;
    }, Ht = function _renderPlain(t, e) {
        return e.set(e.t, e.p, Math.round(10000 * (e.s + e.c * t)) / 10000, e);
    }, $t = function _renderBoolean(t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    }, Zt = function _renderComplexString(t, e) {
        var r = e._pt, i = "";
        if (!t && e.b) i = e.b;
        else if (1 === t && e.e) i = e.e;
        else {
            for(; r;)i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(10000 * (r.s + r.c * t)) / 10000) + i, r = r._next;
            i += e.c;
        }
        e.set(e.t, e.p, i, e);
    }, Kt = function _renderPropTweens(t, e) {
        for(var r = e._pt; r;)r.r(t, r.d), r = r._next;
    }, te = function _addPluginModifier(t, e, r, i) {
        for(var n, a = this._pt; a;)n = a._next, a.p === i && a.modifier(t, e, r), a = n;
    }, ee = function _killPropTweensOf(t) {
        for(var e, r, i = this._pt; i;)r = i._next, i.p === t && !i.op || i.op === t ? ra(this, i, "_pt") : i.dep || (e = 1), i = r;
        return !e;
    }, re = function _sortPropTweensByPriority(t) {
        for(var e, r, i, n, a = t._pt; a;){
            for(e = a._next, r = i; r && r.pr > a.pr;)r = r._next;
            (a._prev = r ? r._prev : n) ? a._prev._next = a : i = a, (a._next = r) ? r._prev = a : n = a, a = e;
        }
        t._pt = i;
    }, ie = (PropTween.prototype.modifier = function modifier(t, e, r) {
        this.mSet = this.mSet || this.set, this.set = hc, this.m = t, this.mt = r, this.tween = e;
    }, PropTween);
    function PropTween(t, e, r, i, n, a, s, o, u) {
        this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || Ht, this.d = s || this, this.set = o || Gt, this.pr = u || 0, (this._next = t) && (t._prev = this);
    }
    ba(_t + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return ut[t] = 1;
    }), ot.TweenMax = ot.TweenLite = Vt, ot.TimelineLite = ot.TimelineMax = Bt, F1 = new Bt({
        sortChildren: !1,
        defaults: B1,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), Y.stringFilter = tb;
    var ne = {
        registerPlugin: function registerPlugin() {
            for(var t27 = arguments.length, e17 = new Array(t27), r8 = 0; r8 < t27; r8++)e17[r8] = arguments[r8];
            e17.forEach(function(t28) {
                return function _createPlugin(t) {
                    var e = (t = !t.name && t.default || t).name, r = p1(t), i = e && !r && t.init ? function() {
                        this._props = [];
                    } : t, n = {
                        init: Q,
                        render: Kt,
                        add: Yt,
                        kill: ee,
                        modifier: te,
                        rawVars: 0
                    }, a = {
                        targetTest: 0,
                        get: 0,
                        getSetter: Wt,
                        aliases: {},
                        register: 0
                    };
                    if (At(), t !== i) {
                        if (ft[e]) return;
                        ja(i, ja(na(t, n), a)), mt(i.prototype, mt(n, na(t, a))), ft[i.prop = e] = i, t.targetTest && (pt.push(i), ut[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
                    }
                    P1(e, i), t.register && t.register(ae, i, ie);
                }(t28);
            });
        },
        timeline: function timeline(t) {
            return new Bt(t);
        },
        getTweensOf: function getTweensOf(t, e) {
            return F1.getTweensOf(t, e);
        },
        getProperty: function getProperty(i, t29, e18, r9) {
            o1(i) && (i = Tt(i)[0]);
            var n = _1(i || {}).get, a = e18 ? ia : ha;
            return "native" === e18 && (e18 = ""), i ? t29 ? a((ft[t29] && ft[t29].get || n)(i, t29, e18, r9)) : function(t, e, r) {
                return a((ft[t] && ft[t].get || n)(i, t, e, r));
            } : i;
        },
        quickSetter: function quickSetter(r, e19, i) {
            if (1 < (r = Tt(r)).length) {
                var n = r.map(function(t) {
                    return ae.quickSetter(t, e19, i);
                }), a = n.length;
                return function(t) {
                    for(var e = a; e--;)n[e](t);
                };
            }
            r = r[0] || {};
            var s = ft[e19], o = _1(r), u = o.harness && (o.harness.aliases || {})[e19] || e19, h = s ? function(t) {
                var e = new s;
                d1._pt = 0, e.init(r, i ? t + i : t, d1, 0, [
                    r
                ]), e.render(1, e), d1._pt && Kt(1, d1);
            } : o.set(r, u);
            return s ? h : function(t) {
                return h(r, u, i ? t + i : t, o, 1);
            };
        },
        isTweening: function isTweening(t) {
            return 0 < F1.getTweensOf(t, !0).length;
        },
        defaults: function defaults(t) {
            return t && t.ease && (t.ease = Et(t.ease, B1.ease)), ma(B1, t || {});
        },
        config: function config(t) {
            return ma(Y, t || {});
        },
        registerEffect: function registerEffect(t30) {
            var i = t30.name, n = t30.effect, e20 = t30.plugins, a = t30.defaults, r10 = t30.extendTimeline;
            (e20 || "").split(",").forEach(function(t) {
                return t && !ft[t] && !ot[t] && O1(i + " effect requires " + t + " plugin.");
            }), dt[i] = function(t, e, r) {
                return n(Tt(t), ja(e || {}, a), r);
            }, r10 && (Bt.prototype[i] = function(t, e, r) {
                return this.add(dt[i](t, s1(e) ? e : (r = e) && {}, this), r);
            });
        },
        registerEase: function registerEase(t, e) {
            Dt[t] = Et(e);
        },
        parseEase: function parseEase(t, e) {
            return arguments.length ? Et(t, e) : Dt;
        },
        getById: function getById(t) {
            return F1.getById(t);
        },
        exportRoot: function exportRoot(e, r) {
            void 0 === e && (e = {});
            var i, n, a = new Bt(e);
            for(a.smoothChildTiming = t1(e.smoothChildTiming), F1.remove(a), a._dp = 0, a._time = a._tTime = F1._time, i = F1._first; i;)n = i._next, !r && !i._dur && i instanceof Vt && i.vars.onComplete === i._targets[0] || Ca(a, i, i._start - i._delay), i = n;
            return Ca(F1, a, 0), a;
        },
        utils: {
            wrap: function wrap(e, t31, r) {
                var i = t31 - e;
                return K(e) ? ab(e, wrap(0, e.length), t31) : Ma(r, function(t) {
                    return (i + (t - e) % i) % i + e;
                });
            },
            wrapYoyo: function wrapYoyo(e, t32, r) {
                var i = t32 - e, n = 2 * i;
                return K(e) ? ab(e, wrapYoyo(0, e.length - 1), t32) : Ma(r, function(t) {
                    return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t);
                });
            },
            distribute: Va,
            random: Ya,
            snap: Xa,
            normalize: function normalize(t, e, r) {
                return wt(t, e, 0, 1, r);
            },
            getUnit: Oa,
            clamp: function clamp(e, r, t33) {
                return Ma(t33, function(t) {
                    return yt(e, r, t);
                });
            },
            splitColor: ob,
            toArray: Tt,
            mapRange: wt,
            pipe: function pipe() {
                for(var t34 = arguments.length, e21 = new Array(t34), r = 0; r < t34; r++)e21[r] = arguments[r];
                return function(t35) {
                    return e21.reduce(function(t, e) {
                        return e(t);
                    }, t35);
                };
            },
            unitize: function unitize(e, r) {
                return function(t) {
                    return e(parseFloat(t)) + (r || Oa(t));
                };
            },
            interpolate: function interpolate(e22, r, t36, i) {
                var n = isNaN(e22 + r) ? 0 : function(t) {
                    return (1 - t) * e22 + t * r;
                };
                if (!n) {
                    var a, s, u, h, l, f = o1(e22), d = {};
                    if (!0 === t36 && (i = 1) && (t36 = null), f) e22 = {
                        p: e22
                    }, r = {
                        p: r
                    };
                    else if (K(e22) && !K(r)) {
                        for(u = [], h = e22.length, l = h - 2, s = 1; s < h; s++)u.push(interpolate(e22[s - 1], e22[s]));
                        h--, n = function func(t) {
                            t *= h;
                            var e = Math.min(l, ~~t);
                            return u[e](t - e);
                        }, t36 = r;
                    } else i || (e22 = mt(K(e22) ? [] : {}, e22));
                    if (!u) {
                        for(a in r)Yt.call(d, e22, a, "get", r[a]);
                        n = function func(t) {
                            return Kt(t, d) || (f ? e22.p : e22);
                        };
                    }
                }
                return Ma(t36, n);
            },
            shuffle: Ua
        },
        install: M1,
        effects: dt,
        ticker: Pt,
        updateRoot: Bt.updateRoot,
        plugins: ft,
        globalTimeline: F1,
        core: {
            PropTween: ie,
            globals: P1,
            Tween: Vt,
            Timeline: Bt,
            Animation: Ft,
            getCache: _1,
            _removeLinkedListItem: ra,
            suppressOverwrites: function suppressOverwrites(t) {
                return R1 = t;
            }
        }
    };
    ba("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return ne[t] = Vt[t];
    }), Pt.add(Bt.updateRoot), d1 = ne.to({}, {
        duration: 0
    });
    function lc(t, e) {
        for(var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;)r = r._next;
        return r;
    }
    function nc(t37, n7) {
        return {
            name: t37,
            rawVars: 1,
            init: function init(t38, i8, e23) {
                e23._onInit = function(t39) {
                    var e24, r11;
                    if (o1(i8) && (e24 = {}, ba(i8, function(t) {
                        return e24[t] = 1;
                    }), i8 = e24), n7) {
                        for(r11 in e24 = {}, i8)e24[r11] = n7(i8[r11]);
                        i8 = e24;
                    }
                    !function _addModifiers(t, e) {
                        var r, i, n, a = t._targets;
                        for(r in e)for(i = a.length; i--;)(n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = lc(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r));
                    }(t39, i8);
                };
            }
        };
    }
    var ae = ne.registerPlugin({
        name: "attr",
        init: function init(t, e, r, i, n) {
            var a, s;
            for(a in e)(s = this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], i, n, 0, 0, a)) && (s.op = a), this._props.push(a);
        }
    }, {
        name: "endArray",
        init: function init(t, e) {
            for(var r = e.length; r--;)this.add(t, r, t[r] || 0, e[r]);
        }
    }, nc("roundProps", Wa), nc("modifiers"), nc("snap", Xa)) || ne;
    Vt.version = Bt.version = ae.version = "3.6.1", l1 = 1, u1() && At();
    function Yc(t, e) {
        return e.set(e.t, e.p, Math.round(10000 * (e.s + e.c * t)) / 10000 + e.u, e);
    }
    function Zc(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(10000 * (e.s + e.c * t)) / 10000 + e.u, e);
    }
    function $c(t, e) {
        return e.set(e.t, e.p, t ? Math.round(10000 * (e.s + e.c * t)) / 10000 + e.u : e.b, e);
    }
    function _c(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
    }
    function ad(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e);
    }
    function bd(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
    }
    function cd(t, e, r) {
        return t.style[e] = r;
    }
    function dd(t, e, r) {
        return t.style.setProperty(e, r);
    }
    function ed(t, e, r) {
        return t._gsap[e] = r;
    }
    function fd(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r;
    }
    function gd(t, e, r, i, n) {
        var a = t._gsap;
        a.scaleX = a.scaleY = r, a.renderTransform(n, a);
    }
    function hd(t, e, r, i, n) {
        var a = t._gsap;
        a[e] = r, a.renderTransform(n, a);
    }
    function ld(t, e) {
        var r = oe.createElementNS ? oe.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : oe.createElement(t);
        return r.style ? r : oe.createElement(t);
    }
    function md(t, e, r) {
        var i = getComputedStyle(t);
        return i[e] || i.getPropertyValue(e.replace(Le, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && md(t, Ue(e) || e, 1) || "";
    }
    function pd() {
        (function _windowExists() {
            return "undefined" != typeof window;
        })() && window.document && (se = window, oe = se.document, ue = oe.documentElement, le = ld("div") || {
            style: {}
        }, ld("div"), qe = Ue(qe), Ye = qe + "Origin", le.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", de = !!Ue("perspective"), he = 1);
    }
    function qd(t) {
        var e, r = ld("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, n = this.nextSibling, a = this.style.cssText;
        if (ue.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
            e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = qd;
        } catch (t40) {}
        else this._gsapBBox && (e = this._gsapBBox());
        return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), ue.removeChild(r), this.style.cssText = a, e;
    }
    function rd(t, e) {
        for(var r = e.length; r--;)if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
    }
    function sd(e) {
        var r;
        try {
            r = e.getBBox();
        } catch (t) {
            r = qd.call(e, !0);
        }
        return r && (r.width || r.height) || e.getBBox === qd || (r = qd.call(e, !0)), !r || r.width || r.x || r.y ? r : {
            x: +rd(e, [
                "x",
                "cx",
                "x1"
            ]) || 0,
            y: +rd(e, [
                "y",
                "cy",
                "y1"
            ]) || 0,
            width: 0,
            height: 0
        };
    }
    function td(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !sd(t));
    }
    function ud(t, e) {
        if (e) {
            var r = t.style;
            e in Se && e !== Ye && (e = qe), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(Le, "-$1").toLowerCase())) : r.removeAttribute(e);
        }
    }
    function vd(t, e, r, i, n, a) {
        var s = new ie(t._pt, e, r, 0, 1, a ? bd : ad);
        return (t._pt = s).b = i, s.e = n, t._props.push(r), s;
    }
    function xd(t, e, r, i) {
        var n, a, s, o, u = parseFloat(r) || 0, h = (r + "").trim().substr((u + "").length) || "px", l = le.style, f = Re.test(e), d = "svg" === t.tagName.toLowerCase(), c = (d ? "client" : "offset") + (f ? "Width" : "Height"), p = "px" === i, m = "%" === i;
        return i === h || !u || je[i] || je[h] ? u : ("px" === h || p || (u = xd(t, e, r, "px")), o = t.getCTM && td(t), !m && "%" !== h || !Se[e] && !~e.indexOf("adius") ? (l[f ? "width" : "height"] = 100 + (p ? h : i), a = ~e.indexOf("adius") || "em" === i && t.appendChild && !d ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== oe && a.appendChild || (a = oe.body), (s = a._gsap) && m && s.width && f && s.time === Pt.time ? ca(u / s.width * 100) : (!m && "%" !== h || (l.position = md(t, "position")), a === t && (l.position = "static"), a.appendChild(le), n = le[c], a.removeChild(le), l.position = "absolute", f && m && ((s = _1(a)).time = Pt.time, s.width = a[c]), ca(p ? n * u / 100 : n && u ? 100 / n * u : 0))) : (n = o ? t.getBBox()[f ? "width" : "height"] : t[c], ca(m ? u / n * 100 : u / 100 * n)));
    }
    function yd(t, e, r, i) {
        var n;
        return he || pd(), e in Be && "transform" !== e && ~(e = Be[e]).indexOf(",") && (e = e.split(",")[0]), Se[e] && "transform" !== e ? (n = Je(t, i), n = "transformOrigin" !== e ? n[e] : We(md(t, Ye)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = Ve[e] && Ve[e](t, e, r) || md(t, e) || aa(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? xd(t, e, n, r) + r : n;
    }
    function zd(t, e, r, i) {
        if (!r || "none" === r) {
            var n = Ue(e, t, 1), a = n && md(t, n, 1);
            a && a !== r ? (e = n, r = a) : "borderColor" === e && (r = md(t, "borderTopColor"));
        }
        var s, o, u, h, l, f, d, c, p, _, m, g, v = new ie(this._pt, t.style, e, 0, 1, Zt), y = 0, b = 0;
        if (v.b = r, v.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = md(t, e) || i, t.style[e] = r), tb(s = [
            r,
            i
        ]), i = s[1], u = (r = s[0]).match(rt) || [], (i.match(rt) || []).length) {
            for(; o = rt.exec(i);)d = o[0], p = i.substring(y, o.index), l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1), d !== (f = u[b++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), (g = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)), c = parseFloat(d), _ = d.substr((c + "").length), y = rt.lastIndex - _.length, _ || (_ = _ || Y.units[e] || m, y === i.length && (i += _, v.e += _)), m !== _ && (h = xd(t, e, f, _) || 0), v._pt = {
                _next: v._pt,
                p: p || 1 === b ? p : ",",
                s: h,
                c: g ? g * c : c - h,
                m: l && l < 4 || "zIndex" === e ? Math.round : 0
            });
            v.c = y < i.length ? i.substring(y, i.length) : "";
        } else v.r = "display" === e && "none" === i ? bd : ad;
        return nt.test(i) && (v.e = 0), this._pt = v;
    }
    function Bd(t) {
        var e = t.split(" "), r = e[0], i = e[1] || "50%";
        return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = Xe[r] || r, e[1] = Xe[i] || i, e.join(" ");
    }
    function Cd(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, i, n, a = e.t, s = a.style, o = e.u, u = a._gsap;
            if ("all" === o || !0 === o) s.cssText = "", i = 1;
            else for(n = (o = o.split(",")).length; -1 < --n;)r = o[n], Se[r] && (i = 1, r = "transformOrigin" === r ? Ye : qe), ud(a, r);
            i && (ud(a, qe), u && (u.svg && a.removeAttribute("transform"), Je(a, 1), u.uncache = 1));
        }
    }
    function Gd(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
    }
    function Hd(t) {
        var e = md(t, qe);
        return Gd(e) ? Ge : e.substr(7).match(et).map(ca);
    }
    function Id(t, e) {
        var r, i, n, a, s = t._gsap || _1(t), o = t.style, u = Hd(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [
            (n = t.transform.baseVal.consolidate().matrix).a,
            n.b,
            n.c,
            n.d,
            n.e,
            n.f
        ]).join(",") ? Ge : u : (u !== Ge || t.offsetParent || t === ue || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, i = t.nextSibling, ue.appendChild(t)), u = Hd(t), n ? o.display = n : ud(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : ue.removeChild(t))), e && 6 < u.length ? [
            u[0],
            u[1],
            u[4],
            u[5],
            u[12],
            u[13]
        ] : u);
    }
    function Jd(t, e, r, i, n, a) {
        var s, o, u, h = t._gsap, l = n || Id(t, !0), f = h.xOrigin || 0, d = h.yOrigin || 0, c = h.xOffset || 0, p = h.yOffset || 0, _ = l[0], m = l[1], g = l[2], v = l[3], y = l[4], b = l[5], T = e.split(" "), w = parseFloat(T[0]) || 0, x = parseFloat(T[1]) || 0;
        r ? l !== Ge && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * b - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * b - v * y) / o, x = u) : (w = (s = sd(t)).x + (~T[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(T[1] || T[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, b = x - d, h.xOffset = c + (y * _ + b * g) - y, h.yOffset = p + (y * m + b * v) - b) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[Ye] = "0px 0px", a && (vd(a, h, "xOrigin", f, w), vd(a, h, "yOrigin", d, x), vd(a, h, "xOffset", c, h.xOffset), vd(a, h, "yOffset", p, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x);
    }
    function Md(t, e, r) {
        var i = Oa(e);
        return ca(parseFloat(e) + parseFloat(xd(t, "x", r + "px", i))) + i;
    }
    function Td(t, e, r, i, n, a) {
        var s, u, h = 360, l = o1(n), f = parseFloat(n) * (l && ~n.indexOf("rad") ? ze : 1), d = a ? f * a : f - i, c = i + d + "deg";
        return l && ("short" === (s = n.split("_")[1]) && (d %= h) !== d % 180 && (d += d < 0 ? h : -h), "cw" === s && d < 0 ? d = (d + 36000000000) % h - ~~(d / h) * h : "ccw" === s && 0 < d && (d = (d - 36000000000) % h - ~~(d / h) * h)), t._pt = u = new ie(t._pt, e, r, i, d, Zc), u.e = c, u.u = "deg", t._props.push(r), u;
    }
    function Ud(t, e) {
        for(var r in e)t[r] = e[r];
        return t;
    }
    function Vd(t, e, r) {
        var i, n, a, s, o, u, h, l = Ud({}, r._gsap), f = r.style;
        for(n in l.svg ? (a = r.getAttribute("transform"), r.setAttribute("transform", ""), f[qe] = e, i = Je(r, 1), ud(r, qe), r.setAttribute("transform", a)) : (a = getComputedStyle(r)[qe], f[qe] = e, i = Je(r, 1), f[qe] = a), Se)(a = l[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Oa(a) !== (h = Oa(s)) ? xd(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new ie(t._pt, i, n, o, u - o, Yc), t._pt.u = h || 0, t._props.push(n));
        Ud(i, l);
    }
    var se, oe, ue, he, le, fe, de, ce = Dt.Power0, pe = Dt.Power1, _e = Dt.Power2, me = Dt.Power3, ge = Dt.Power4, ve = Dt.Linear, ye = Dt.Quad, be = Dt.Cubic, Te = Dt.Quart, we = Dt.Quint, xe = Dt.Strong, Oe = Dt.Elastic, Me = Dt.Back, ke = Dt.SteppedEase, Ce = Dt.Bounce, Pe = Dt.Sine, Ae = Dt.Expo, De = Dt.Circ, Se = {}, ze = 180 / Math.PI, Ie = Math.PI / 180, Ee = Math.atan2, Le = /([A-Z])/g, Re = /(?:left|right|width|margin|padding|x)/i, Fe = /[\s,\(]\S/, Be = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, qe = "transform", Ye = qe + "Origin", Ne = "O,Moz,ms,Ms,Webkit".split(","), Ue = function _checkPropPrefix(t, e, r) {
        var i = (e || le).style, n = 5;
        if (t in i && !r) return t;
        for(t = t.charAt(0).toUpperCase() + t.substr(1); (n--) && !(Ne[n] + t in i););
        return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? Ne[n] : "") + t;
    }, je = {
        deg: 1,
        rad: 1,
        turn: 1
    }, Xe = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, Ve = {
        clearProps: function clearProps(t, e, r, i, n) {
            if ("isFromStart" !== n.data) {
                var a = t._pt = new ie(t._pt, e, r, 0, 0, Cd);
                return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1;
            }
        }
    }, Ge = [
        1,
        0,
        0,
        1,
        0,
        0
    ], Qe = {}, Je = function _parseTransform(t, e) {
        var r = t._gsap || new Rt(t);
        if ("x" in r && !e && !r.uncache) return r;
        var i, n, a, s, o, u, h, l, f, d, c, p, _, m, g, v, y, b, T, w, x, O, M, k, C, P, A, D, S, z, I, E, L = t.style, R = r.scaleX < 0, F = "deg", B = md(t, Ye) || "0";
        return i = n = a = u = h = l = f = d = c = 0, s = o = 1, r.svg = !(!t.getCTM || !td(t)), m = Id(t, r.svg), r.svg && (k = !r.uncache && !e && t.getAttribute("data-svg-origin"), Jd(t, k || B, !!k || r.originIsAbsolute, !1 !== r.smooth, m)), p = r.xOrigin || 0, _ = r.yOrigin || 0, m !== Ge && (b = m[0], T = m[1], w = m[2], x = m[3], i = O = m[4], n = M = m[5], 6 === m.length ? (s = Math.sqrt(b * b + T * T), o = Math.sqrt(x * x + w * w), u = b || T ? Ee(T, b) * ze : 0, (f = w || x ? Ee(w, x) * ze + u : 0) && (o *= Math.abs(Math.cos(f * Ie))), r.svg && (i -= p - (p * b + _ * w), n -= _ - (p * T + _ * x))) : (E = m[6], z = m[7], A = m[8], D = m[9], S = m[10], I = m[11], i = m[12], n = m[13], a = m[14], h = (g = Ee(E, S)) * ze, g && (k = O * (v = Math.cos(-g)) + A * (y = Math.sin(-g)), C = M * v + D * y, P = E * v + S * y, A = O * -y + A * v, D = M * -y + D * v, S = E * -y + S * v, I = z * -y + I * v, O = k, M = C, E = P), l = (g = Ee(-w, S)) * ze, g && (v = Math.cos(-g), I = x * (y = Math.sin(-g)) + I * v, b = k = b * v - A * y, T = C = T * v - D * y, w = P = w * v - S * y), u = (g = Ee(T, b)) * ze, g && (k = b * (v = Math.cos(g)) + T * (y = Math.sin(g)), C = O * v + M * y, T = T * v - b * y, M = M * v - O * y, b = k, O = C), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = ca(Math.sqrt(b * b + T * T + w * w)), o = ca(Math.sqrt(M * M + E * E)), g = Ee(O, M), f = 0.0002 < Math.abs(g) ? g * ze : 0, c = I ? 1 / (I < 0 ? -I : I) : 0), r.svg && (k = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Gd(md(t, qe)), k && t.setAttribute("transform", k))), 90 < Math.abs(f) && Math.abs(f) < 270 && (R ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), r.x = i - ((r.xPercent = i && (r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = n - ((r.yPercent = n && (r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = a + "px", r.scaleX = ca(s), r.scaleY = ca(o), r.rotation = ca(u) + F, r.rotationX = ca(h) + F, r.rotationY = ca(l) + F, r.skewX = f + F, r.skewY = d + F, r.transformPerspective = c + "px", (r.zOrigin = parseFloat(B.split(" ")[2]) || 0) && (L[Ye] = We(B)), r.xOffset = r.yOffset = 0, r.force3D = Y.force3D, r.renderTransform = r.svg ? er : de ? tr : He, r.uncache = 0, r;
    }, We = function _firstTwoOnly(t) {
        return (t = t.split(" "))[0] + " " + t[1];
    }, He = function _renderNon3DTransforms(t, e) {
        e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, tr(t, e);
    }, $e = "0deg", Ze = "0px", Ke = ") ", tr = function _renderCSSTransforms(t, e) {
        var r = e || this, i = r.xPercent, n = r.yPercent, a = r.x, s = r.y, o = r.z, u = r.rotation, h = r.rotationY, l = r.rotationX, f = r.skewX, d = r.skewY, c = r.scaleX, p = r.scaleY, _ = r.transformPerspective, m = r.force3D, g = r.target, v = r.zOrigin, y = "", b = "auto" === m && t && 1 !== t || !0 === m;
        if (v && (l !== $e || h !== $e)) {
            var T, w = parseFloat(h) * Ie, x = Math.sin(w), O = Math.cos(w);
            w = parseFloat(l) * Ie, T = Math.cos(w), a = Md(g, a, x * T * -v), s = Md(g, s, -Math.sin(w) * -v), o = Md(g, o, O * T * -v + v);
        }
        _ !== Ze && (y += "perspective(" + _ + Ke), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !b && a === Ze && s === Ze && o === Ze || (y += o !== Ze || b ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + Ke), u !== $e && (y += "rotate(" + u + Ke), h !== $e && (y += "rotateY(" + h + Ke), l !== $e && (y += "rotateX(" + l + Ke), f === $e && d === $e || (y += "skew(" + f + ", " + d + Ke), 1 === c && 1 === p || (y += "scale(" + c + ", " + p + Ke), g.style[qe] = y || "translate(0, 0)";
    }, er = function _renderSVGTransforms(t, e) {
        var r, i, n, a, s, o = e || this, u = o.xPercent, h = o.yPercent, l = o.x, f = o.y, d = o.rotation, c = o.skewX, p = o.skewY, _ = o.scaleX, m = o.scaleY, g = o.target, v = o.xOrigin, y = o.yOrigin, b = o.xOffset, T = o.yOffset, w = o.forceCSS, x = parseFloat(l), O = parseFloat(f);
        d = parseFloat(d), c = parseFloat(c), (p = parseFloat(p)) && (c += p = parseFloat(p), d += p), d || c ? (d *= Ie, c *= Ie, r = Math.cos(d) * _, i = Math.sin(d) * _, n = Math.sin(d - c) * -m, a = Math.cos(d - c) * m, c && (p *= Ie, s = Math.tan(c - p), n *= s = Math.sqrt(1 + s * s), a *= s, p && (s = Math.tan(p), r *= s = Math.sqrt(1 + s * s), i *= s)), r = ca(r), i = ca(i), n = ca(n), a = ca(a)) : (r = _, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || O && !~(f + "").indexOf("px")) && (x = xd(g, "x", l, "px"), O = xd(g, "y", f, "px")), (v || y || b || T) && (x = ca(x + v - (v * r + y * n) + b), O = ca(O + y - (v * i + y * a) + T)), (u || h) && (s = g.getBBox(), x = ca(x + u / 100 * s.width), O = ca(O + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + O + ")", g.setAttribute("transform", s), w && (g.style[qe] = s);
    };
    ba("padding,margin,Width,Radius", function(e25, r12) {
        var t41 = "Right", i9 = "Bottom", n8 = "Left", o = (r12 < 3 ? [
            "Top",
            t41,
            i9,
            n8
        ] : [
            "Top" + n8,
            "Top" + t41,
            i9 + t41,
            i9 + n8
        ]).map(function(t) {
            return r12 < 2 ? e25 + t : "border" + t + e25;
        });
        Ve[1 < r12 ? "border" + e25 : e25] = function(e26, t42, r, i, n) {
            var a, s;
            if (arguments.length < 4) return a = o.map(function(t) {
                return yd(e26, t, r);
            }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
            a = (i + "").split(" "), s = {}, o.forEach(function(t, e) {
                return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0];
            }), e26.init(t42, s, n);
        };
    });
    var rr, ir, nr, ar = {
        name: "css",
        register: pd,
        targetTest: function targetTest(t) {
            return t.style && t.nodeType;
        },
        init: function init(t, e, r, i, n) {
            var a, s, o, u, h, l, f, d, c, p, _, m, g, v, y, b = this._props, T = t.style, w = r.vars.startAt;
            for(f in he || pd(), e)if ("autoRound" !== f && (s = e[f], !ft[f] || !Qb(f, e, r, i, t, n))) {
                if (h = typeof s, l = Ve[f], "function" === h && (h = typeof (s = s.call(r, i, t, n))), "string" === h && ~s.indexOf("random(") && (s = db(s)), l) l(this, t, f, s, r) && (y = 1);
                else if ("--" === f.substr(0, 2)) a = (getComputedStyle(t).getPropertyValue(f) + "").trim(), s += "", kt.lastIndex = 0, kt.test(a) || (d = Oa(a), c = Oa(s)), c ? d !== c && (a = xd(t, f, a, c) + c) : d && (s += d), this.add(T, "setProperty", a, s, i, n, 0, 0, f);
                else if ("undefined" !== h) {
                    if (w && f in w ? (a = "function" == typeof w[f] ? w[f].call(r, i, t, n) : w[f], f in Y.units && !Oa(a) && (a += Y.units[f]), "=" === (a + "").charAt(1) && (a = yd(t, f))) : a = yd(t, f), u = parseFloat(a), (p = "string" === h && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), o = parseFloat(s), f in Be && ("autoAlpha" === f && (1 === u && "hidden" === yd(t, "visibility") && o && (u = 0), vd(this, T, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== f && "transform" !== f && ~(f = Be[f]).indexOf(",") && (f = f.split(",")[0])), _ = f in Se) {
                        if (m || ((g = t._gsap).renderTransform && !e.parseTransform || Je(t, e.parseTransform), v = !1 !== e.smoothOrigin && g.smooth, (m = this._pt = new ie(this._pt, T, qe, 0, 1, g.renderTransform, g, 0, -1)).dep = 1), "scale" === f) this._pt = new ie(this._pt, g, "scaleY", g.scaleY, p ? p * o : o - g.scaleY), b.push("scaleY", f), f += "X";
                        else {
                            if ("transformOrigin" === f) {
                                s = Bd(s), g.svg ? Jd(t, s, 0, v, 0, this) : ((c = parseFloat(s.split(" ")[2]) || 0) !== g.zOrigin && vd(this, g, "zOrigin", g.zOrigin, c), vd(this, T, f, We(a), We(s)));
                                continue;
                            }
                            if ("svgOrigin" === f) {
                                Jd(t, s, 1, v, 0, this);
                                continue;
                            }
                            if (f in Qe) {
                                Td(this, g, f, u, s, p);
                                continue;
                            }
                            if ("smoothOrigin" === f) {
                                vd(this, g, "smooth", g.smooth, s);
                                continue;
                            }
                            if ("force3D" === f) {
                                g[f] = s;
                                continue;
                            }
                            if ("transform" === f) {
                                Vd(this, s, t);
                                continue;
                            }
                        }
                    } else f in T || (f = Ue(f) || f);
                    if (_ || (o || 0 === o) && (u || 0 === u) && !Fe.test(s) && f in T) o = o || 0, (d = (a + "").substr((u + "").length)) !== (c = Oa(s) || (f in Y.units ? Y.units[f] : d)) && (u = xd(t, f, a, c)), this._pt = new ie(this._pt, _ ? g : T, f, u, p ? p * o : o - u, _ || "px" !== c && "zIndex" !== f || !1 === e.autoRound ? Yc : _c), this._pt.u = c || 0, d !== c && (this._pt.b = a, this._pt.r = $c);
                    else if (f in T) zd.call(this, t, f, a, s);
                    else {
                        if (!(f in t)) {
                            N(f, s);
                            continue;
                        }
                        this.add(t, f, t[f], s, i, n);
                    }
                    b.push(f);
                }
            }
            y && re(this);
        },
        get: yd,
        aliases: Be,
        getSetter: function getSetter(t, e, i) {
            var n = Be[e];
            return n && n.indexOf(",") < 0 && (e = n), e in Se && e !== Ye && (t._gsap.x || yd(t, "x")) ? i && fe === i ? "scale" === e ? fd : ed : (fe = i || {}, "scale" === e ? gd : hd) : t.style && !r1(t.style[e]) ? cd : ~e.indexOf("-") ? dd : Wt(t, e);
        },
        core: {
            _removeProperty: ud,
            _getMatrix: Id
        }
    };
    ae.utils.checkPrefix = Ue, nr = ba((rr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (ir = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        Se[t] = 1;
    }), ba(ir, function(t) {
        Y.units[t] = "deg", Qe[t] = 1;
    }), Be[nr[13]] = rr + "," + ir, ba("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        Be[e[1]] = nr[e[0]];
    }), ba("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        Y.units[t] = "px";
    }), ae.registerPlugin(ar);
    var sr = ae.registerPlugin(ar) || ae, or = sr.core.Tween;
    e1.Back = Me, e1.Bounce = Ce, e1.CSSPlugin = ar, e1.Circ = De, e1.Cubic = be, e1.Elastic = Oe, e1.Expo = Ae, e1.Linear = ve, e1.Power0 = ce, e1.Power1 = pe, e1.Power2 = _e, e1.Power3 = me, e1.Power4 = ge, e1.Quad = ye, e1.Quart = Te, e1.Quint = we, e1.Sine = Pe, e1.SteppedEase = ke, e1.Strong = xe, e1.TimelineLite = Bt, e1.TimelineMax = Bt, e1.TweenLite = Vt, e1.TweenMax = or, e1.default = sr, e1.gsap = sr;
    if (typeof window === "undefined" || window !== e1) Object.defineProperty(e1, "__esModule", {
        value: !0
    });
    else delete e1.default;
});

//# sourceMappingURL=index.c1021de8.js.map
