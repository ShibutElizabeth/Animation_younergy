/*!
 * ScrollTrigger 3.6.1
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ !function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define([
        "exports"
    ], t) : t((e = e || self).window = e.window || {});
}(this, function(e1) {
    "use strict";
    function J(e) {
        return e;
    }
    function K1(e) {
        return Math.round(100000 * e) / 100000 || 0;
    }
    function L1() {
        return "undefined" != typeof window;
    }
    function M1() {
        return Se || L1() && (Se = window.gsap) && Se.registerPlugin && Se;
    }
    function N(e) {
        return !!~o1.indexOf(e);
    }
    function O(e, t) {
        return ~Fe.indexOf(e) && Fe[Fe.indexOf(e) + 1][t];
    }
    function P(t, e2) {
        var r = e2.s, n = e2.sc, o = h1.indexOf(t), i = n === ot.sc ? 1 : 2;
        return ~o || (o = h1.push(t) - 1), h1[o + i] || (h1[o + i] = O(t, r) || (N(t) ? n : function(e) {
            return arguments.length ? t[r] = e : t[r];
        }));
    }
    function Q(e) {
        return O(e, "getBoundingClientRect") || (N(e) ? function() {
            return pt.width = Me.innerWidth, pt.height = Me.innerHeight, pt;
        } : function() {
            return it(e);
        });
    }
    function T(e, t) {
        var r = t.s, n = t.d2, o = t.d, i = t.a;
        return (r = "scroll" + n, i = O(e, r)) ? i() - Q(e)()[o] : N(e) ? Math.max(ke[r], Pe[r]) - (Me["inner" + n] || ke["client" + n] || Pe["client" + n]) : e[r] - e["offset" + n];
    }
    function U1(e, t) {
        for(var r = 0; r < d1.length; r += 3)t && !~t.indexOf(d1[r + 1]) || e(d1[r], d1[r + 1], d1[r + 2]);
    }
    function V(e) {
        return "string" == typeof e;
    }
    function W(e) {
        return "function" == typeof e;
    }
    function X(e) {
        return "number" == typeof e;
    }
    function Y(e) {
        return "object" == typeof e;
    }
    function Z1(e) {
        return W(e) && e();
    }
    function $1(r, n) {
        return function() {
            var e = Z1(r), t = Z1(n);
            return function() {
                Z1(e), Z1(t);
            };
        };
    }
    function ta(e) {
        return Me.getComputedStyle(e);
    }
    function va(e, t) {
        for(var r in t)r in e || (e[r] = t[r]);
        return e;
    }
    function xa(e, t) {
        var r = t.d2;
        return e["offset" + r] || e["client" + r] || 0;
    }
    function ya(e) {
        var t, r = [], n = e.labels, o = e.duration();
        for(t in n)r.push(n[t] / o);
        return r;
    }
    function Ba(t, r, e3, n) {
        return e3.split(",").forEach(function(e) {
            return t(r, e, n);
        });
    }
    function Ca(e, t, r) {
        return e.addEventListener(t, r, {
            passive: !0
        });
    }
    function Da(e, t, r) {
        return e.removeEventListener(t, r);
    }
    function Ha(e, t) {
        if (V(e)) {
            var r = e.indexOf("="), n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in w1 ? w1[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
        }
        return e;
    }
    function Ia(e, t, r, n, o, i, a) {
        var s = o.startColor, l = o.endColor, c = o.fontSize, f = o.indent, u = o.fontWeight, p = _e.createElement("div"), d = N(r) || "fixed" === O(r, "pinType"), g = -1 !== e.indexOf("scroller"), h = d ? Pe : r, v = -1 !== e.indexOf("start"), m = v ? s : l, b = "border-color:" + m + ";font-size:" + c + ";color:" + m + ";font-weight:" + u + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return b += "position:" + (g && d ? "fixed;" : "absolute;"), !g && d || (b += (n === ot ? x1 : y1) + ":" + (i + parseFloat(f)) + "px;"), a && (b += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = v, p.setAttribute("class", "gsap-marker-" + e), p.style.cssText = b, p.innerText = t || 0 === t ? e + "-" + t : e, h.children[0] ? h.insertBefore(p, h.children[0]) : h.appendChild(p), p._offset = p["offset" + n.op.d2], C1(p, 0, n, v), p;
    }
    function Ma() {
        return l1 = l1 || s1(D1);
    }
    function Na() {
        l1 || (l1 = s1(D1), Xe || E1("scrollStart"), Xe = He());
    }
    function Oa() {
        return !Le && !r1 && !_e.fullscreenElement && a1.restart(!0);
    }
    function Ua(e) {
        var t, r = Se.ticker.frame, n = [], o = 0;
        if (g1 !== r || De) {
            for(z1(); o < k1.length; o += 4)(t = Me.matchMedia(k1[o]).matches) !== k1[o + 3] && ((k1[o + 3] = t) ? n.push(o) : z1(1, k1[o]) || W(k1[o + 2]) && k1[o + 2]());
            for(A1(), o = 0; o < n.length; o++)t = n[o], Ve = k1[t], k1[t + 2] = k1[t + 1](e);
            Ve = 0, i1 && B1(0, 1), g1 = r, E1("matchMedia");
        }
    }
    function Va() {
        return Da(G1, "scrollEnd", Va) || B1(!0);
    }
    function fb(e, t, r, n) {
        if (e.parentNode !== t) {
            for(var o, i = F1.length, a = t.style, s = e.style; i--;)a[o = F1[i]] = r[o];
            a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), s[y1] = s[x1] = "auto", a.overflow = "visible", a.boxSizing = "border-box", a[Je] = xa(e, nt) + rt, a[qe] = xa(e, ot) + rt, a[Ge] = s[et] = s.top = s[m1] = "0", ut(n), s[Je] = s.maxWidth = r[Je], s[qe] = s.maxHeight = r[qe], s[Ge] = r[Ge], e.parentNode.insertBefore(t, e), t.appendChild(e);
        }
    }
    function ib(e) {
        for(var t = H1.length, r = e.style, n = [], o = 0; o < t; o++)n.push(H1[o], r[H1[o]]);
        return n.t = e, n;
    }
    function lb(e, t, r, n, o, i, a, s, l, c, f, u) {
        if (W(e) && (e = e(s)), V(e) && "max" === e.substr(0, 3) && (e = u + ("=" === e.charAt(4) ? Ha("0" + e.substr(3), r) : 0)), X(e)) a && C1(a, r, n, !0);
        else {
            W(t) && (t = t(s));
            var p, d, g, h = Ee(t)[0] || Pe, v = it(h) || {}, m = e.split(" ");
            v && (v.left || v.top) || "none" !== ta(h).display || (g = h.style.display, h.style.display = "block", v = it(h), g ? h.style.display = g : h.style.removeProperty("display")), p = Ha(m[0], v[n.d]), d = Ha(m[1] || "0", r), e = v[n.p] - l[n.p] - c + p + o - d, a && C1(a, d, n, r - d < 20 || a._isStart && 20 < d), r -= r - d;
        }
        if (i) {
            var b = e + r, x = i._isStart;
            u = "scroll" + n.d2, C1(i, b, n, x && 20 < b || !x && (f ? Math.max(Pe[u], ke[u]) : i.parentNode[u]) <= b + 1), f && (l = it(a), f && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + rt));
        }
        return Math.round(e);
    }
    function nb(e, t, r, n) {
        if (e.parentNode !== t) {
            var o, i, a = e.style;
            if (t === Pe) {
                for(o in e._stOrig = a.cssText, i = ta(e))+o || j1.test(o) || !i[o] || "string" != typeof a[o] || "0" === o || (a[o] = i[o]);
                a.top = r, a.left = n;
            } else a.cssText = e._stOrig;
            Se.core.getCache(e).uncache = 1, t.appendChild(e);
        }
    }
    function ob(l, e4) {
        function Ue(e5, t, r, n, o) {
            var i = Ue.tween, a = t.onComplete, s = {};
            return i && i.kill(), c = Math.round(r), t[p] = e5, (t.modifiers = s)[p] = function(e) {
                return (e = K1(u())) !== c && e !== f && 2 < Math.abs(e - c) ? (i.kill(), Ue.tween = 0) : e = r + n * i.ratio + o * i.ratio * i.ratio, f = c, c = K1(e);
            }, t.onComplete = function() {
                Ue.tween = 0, a && a.call(i);
            }, i = Ue.tween = Se.to(l, t);
        }
        var c, f, u = P(l, e4), p = "_scroll" + e4.p2;
        return l[p] = u, l.addEventListener("wheel", function() {
            return Ue.tween && Ue.tween.kill() && (Ue.tween = 0);
        }), Ue;
    }
    var Se, i1, Me, _e, ke, Pe, o1, a1, s1, l1, Ee, Ne, Ie, c1, Le, Ae, f1, ze, u1, p1, d1, We, Be, r1, Re, Ve, g1, De = 1, Fe = [], h1 = [], He = Date.now, v1 = He(), Xe = 0, Ye = 1, Ze = Math.abs, t1 = "scrollLeft", n1 = "scrollTop", m1 = "left", x1 = "right", y1 = "bottom", Je = "width", qe = "height", $e = "Right", je = "Left", Ke = "Top", Qe = "Bottom", Ge = "padding", et = "margin", tt = "Width", b1 = "Height", rt = "px", nt = {
        s: t1,
        p: m1,
        p2: je,
        os: x1,
        os2: $e,
        d: Je,
        d2: tt,
        a: "x",
        sc: function sc(e) {
            return arguments.length ? Me.scrollTo(e, ot.sc()) : Me.pageXOffset || _e[t1] || ke[t1] || Pe[t1] || 0;
        }
    }, ot = {
        s: n1,
        p: "top",
        p2: Ke,
        os: y1,
        os2: Qe,
        d: qe,
        d2: b1,
        a: "y",
        op: nt,
        sc: function sc(e) {
            return arguments.length ? Me.scrollTo(nt.sc(), e) : Me.pageYOffset || _e[n1] || ke[n1] || Pe[n1] || 0;
        }
    }, it = function _getBounds(e, t) {
        var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== ta(e)[f1] && Se.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
        }).progress(1), n = e.getBoundingClientRect();
        return r && r.progress(0).kill(), n;
    }, at = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    }, st = {
        toggleActions: "play",
        anticipatePin: 0
    }, w1 = {
        top: 0,
        left: 0,
        center: 0.5,
        bottom: 1,
        right: 1
    }, C1 = function _positionMarker(e, t, r, n) {
        var o = {
            display: "block"
        }, i = r[n ? "os2" : "p2"], a = r[n ? "p2" : "os2"];
        e._isFlipped = n, o[r.a + "Percent"] = n ? -100 : 0, o[r.a] = n ? "1px" : 0, o["border" + i + tt] = 1, o["border" + a + tt] = 0, o[r.p] = t + "px", Se.set(e, o);
    }, lt = [], ct = {}, S1 = {}, _1 = [], k1 = [], E1 = function _dispatch(e6) {
        return S1[e6] && S1[e6].map(function(e) {
            return e();
        }) || _1;
    }, I1 = [], A1 = function _revertRecorded(e) {
        for(var t = 0; t < I1.length; t += 4)e && I1[t + 3] !== e || (I1[t].style.cssText = I1[t + 1], I1[t + 2].uncache = 1);
    }, z1 = function _revertAll(e, t) {
        var r;
        for(ze = 0; ze < lt.length; ze++)r = lt[ze], t && r.media !== t || (e ? r.kill(1) : (r.scroll.rec || (r.scroll.rec = r.scroll()), r.revert()));
        A1(t), t || E1("revert");
    }, B1 = function _refreshAll(e7, t) {
        if (!Xe || e7) {
            var r = E1("refreshInit");
            for(We && G1.sort(), t || z1(), ze = 0; ze < lt.length; ze++)lt[ze].refresh();
            for(r.forEach(function(e) {
                return e && e.render && e.render(-1);
            }), ze = lt.length; ze--;)lt[ze].scroll.rec = 0;
            a1.pause(), E1("refresh");
        } else Ca(G1, "scrollEnd", Va);
    }, R1 = 0, ft = 1, D1 = function _updateAll() {
        var e = lt.length, t = He(), r = 50 <= t - v1, n = e && lt[0].scroll();
        if (ft = n < R1 ? -1 : 1, R1 = n, r && (Xe && !Ae && 200 < t - Xe && (Xe = 0, E1("scrollEnd")), Ie = v1, v1 = t), ft < 0) {
            for(ze = e; 0 < ze--;)lt[ze] && lt[ze].update(0, r);
            ft = 1;
        } else for(ze = 0; ze < e; ze++)lt[ze] && lt[ze].update(0, r);
        l1 = 0;
    }, F1 = [
        m1,
        "top",
        y1,
        x1,
        et + Qe,
        et + $e,
        et + Ke,
        et + je,
        "display",
        "flexShrink",
        "float",
        "zIndex"
    ], H1 = F1.concat([
        Je,
        qe,
        "boxSizing",
        "max" + tt,
        "max" + b1,
        "position",
        et,
        Ge,
        Ge + Ke,
        Ge + $e,
        Ge + Qe,
        Ge + je
    ]), q1 = /([A-Z])/g, ut = function _setState(e) {
        if (e) {
            var t, r, n = e.t.style, o = e.length, i = 0;
            for((e.t._gsap || Se.core.getCache(e.t)).uncache = 1; i < o; i += 2)r = e[i + 1], t = e[i], r ? n[t] = r : n[t] && n.removeProperty(t.replace(q1, "-$1").toLowerCase());
        }
    }, pt = {
        left: 0,
        top: 0
    }, j1 = /(?:webkit|moz|length|cssText|inset)/i;
    nt.op = ot;
    var G1 = (ScrollTrigger.prototype.init = function init(w, C) {
        if (this.progress = this.start = 0, this.vars && this.kill(1), Ye) {
            var d2, n2, u2, S, M, _, k, E, I, L, A, z, e8, U, B, R, D, F, t2, H, g2, Z, q, h2, $, v2, m2, r2, b2, x2, j, o2, p2, y2, K, G, ee, te = (w = va(V(w) || X(w) || w.nodeType ? {
                trigger: w
            } : w, st)).horizontal ? nt : ot, re = w.onUpdate, ne = w.toggleClass, i2 = w.id, oe = w.onToggle, ie = w.onRefresh, a2 = w.scrub, ae = w.trigger, se = w.pin, le = w.pinSpacing, ce = w.invalidateOnRefresh, fe = w.anticipatePin, s2 = w.onScrubComplete, ue = w.onSnapComplete, pe = w.once, de = w.snap, ge = w.pinReparent, he = !a2 && 0 !== a2, ve = Ee(w.scroller || Me)[0], l2 = Se.core.getCache(ve), me = N(ve), be = "pinType" in w ? "fixed" === w.pinType : me || "fixed" === O(ve, "pinType"), xe = [
                w.onEnter,
                w.onLeave,
                w.onEnterBack,
                w.onLeaveBack
            ], ye = he && w.toggleActions.split(" "), c2 = "markers" in w ? w.markers : st.markers, we = me ? 0 : parseFloat(ta(ve)["border" + te.p2 + tt]) || 0, Ce = this, f2 = w.onRefreshInit && function() {
                return w.onRefreshInit(Ce);
            }, Te = function _getSizeFunc(e, t, r) {
                var n = r.d, o = r.d2, i = r.a;
                return (i = O(e, "getBoundingClientRect")) ? function() {
                    return i()[n];
                } : function() {
                    return (t ? Me["inner" + o] : e["client" + o]) || 0;
                };
            }(ve, me, te), Oe = function _getOffsetsFunc(e, t) {
                return !t || ~Fe.indexOf(e) ? Q(e) : function() {
                    return pt;
                };
            }(ve, me);
            Ce.media = Ve, fe *= 45, lt.push(Ce), Ce.scroller = ve, Ce.scroll = P(ve, te), M = Ce.scroll(), Ce.vars = w, C = C || w.animation, "refreshPriority" in w && (We = 1), l2.tweenScroll = l2.tweenScroll || {
                top: ob(ve, ot),
                left: ob(ve, nt)
            }, Ce.tweenTo = d2 = l2.tweenScroll[te.p], C && (C.vars.lazy = !1, C._initted || !1 !== C.vars.immediateRender && !1 !== w.immediateRender && C.render(0, !0, !0), Ce.animation = C.pause(), C.scrollTrigger = Ce, (o2 = X(a2) && a2) && (j = Se.to(C, {
                ease: "power3",
                duration: o2,
                onComplete: function onComplete() {
                    return s2 && s2(Ce);
                }
            })), b2 = 0, i2 = i2 || C.vars.id), de && (Y(de) || (de = {
                snapTo: de
            }), "scrollBehavior" in Pe.style && Se.set(me ? [
                Pe,
                ke
            ] : ve, {
                scrollBehavior: "auto"
            }), u2 = W(de.snapTo) ? de.snapTo : "labels" === de.snapTo ? function _getClosestLabel(t) {
                return function(e) {
                    return Se.utils.snap(ya(t), e);
                };
            }(C) : "labelsDirectional" === de.snapTo ? function _getLabelAtDirection(o) {
                return function(e10, t4) {
                    var r, n = ya(o);
                    if (n.sort(function(e, t) {
                        return e - t;
                    }), 0 < t4.direction) {
                        for(e10 -= 0.0001, r = 0; r < n.length; r++)if (n[r] >= e10) return n[r];
                        return n.pop();
                    }
                    for(r = n.length, e10 += 0.0001; r--;)if (n[r] <= e10) return n[r];
                    return n[0];
                };
            }(C) : Se.utils.snap(de.snapTo), p2 = de.duration || {
                min: 0.1,
                max: 2
            }, p2 = Y(p2) ? Ne(p2.min, p2.max) : Ne(p2, p2), y2 = Se.delayedCall(de.delay || o2 / 2 || 0.1, function() {
                if (Math.abs(Ce.getVelocity()) < 10 && !Ae) {
                    var e = C && !he ? C.totalProgress() : Ce.progress, t = (e - x2) / (He() - Ie) * 1000 || 0, r = Ze(t / 2) * t / 0.185, n = e + (!1 === de.inertia ? 0 : r), o = Ne(0, 1, u2(n, Ce)), i = Ce.scroll(), a = Math.round(k + o * U), s = de.onStart, l = de.onInterrupt, c = de.onComplete, f = d2.tween;
                    if (i <= E && k <= i && a !== i) {
                        if (f && !f._initted && f.data <= Math.abs(a - i)) return;
                        d2(a, {
                            duration: p2(Ze(0.185 * Math.max(Ze(n - e), Ze(o - e)) / t / 0.05 || 0)),
                            ease: de.ease || "power3",
                            data: Math.abs(a - i),
                            onInterrupt: function onInterrupt() {
                                return y2.restart(!0) && l && l(Ce);
                            },
                            onComplete: function onComplete() {
                                b2 = x2 = C && !he ? C.totalProgress() : Ce.progress, ue && ue(Ce), c && c(Ce);
                            }
                        }, i, r * U, a - i - r * U), s && s(Ce, d2.tween);
                    }
                } else Ce.isActive && y2.restart(!0);
            }).pause()), i2 && (ct[i2] = Ce), ae = Ce.trigger = Ee(ae || se)[0], se = !0 === se ? ae : Ee(se)[0], V(ne) && (ne = {
                targets: ae,
                className: ne
            }), se && (!1 === le || le === et || (le = !(!le && "flex" === ta(se.parentNode).display) && Ge), Ce.pin = se, !1 !== w.force3D && Se.set(se, {
                force3D: !0
            }), (n2 = Se.core.getCache(se)).spacer ? B = n2.pinState : (n2.spacer = F = _e.createElement("div"), F.setAttribute("class", "pin-spacer" + (i2 ? " pin-spacer-" + i2 : "")), n2.pinState = B = ib(se)), Ce.spacer = F = n2.spacer, r2 = ta(se), h2 = r2[le + te.os2], H = Se.getProperty(se), g2 = Se.quickSetter(se, te.a, rt), fb(se, F, r2), D = ib(se)), c2 && (e8 = Y(c2) ? va(c2, at) : at, A = Ia("scroller-start", i2, ve, te, e8, 0), z = Ia("scroller-end", i2, ve, te, e8, 0, A), t2 = A["offset" + te.op.d2], I = Ia("start", i2, ve, te, e8, t2), L = Ia("end", i2, ve, te, e8, t2), be || (function _makePositionable(e) {
                e.style.position = "absolute" === ta(e).position ? "absolute" : "relative";
            }(me ? Pe : ve), Se.set([
                A,
                z
            ], {
                force3D: !0
            }), v2 = Se.quickSetter(A, te.a, rt), m2 = Se.quickSetter(z, te.a, rt))), Ce.revert = function(e11) {
                var t5 = !1 !== e11 || !Ce.enabled, r4 = Le;
                t5 !== S && (t5 && (G = Math.max(Ce.scroll(), Ce.scroll.rec || 0), K = Ce.progress, ee = C && C.progress()), I && [
                    I,
                    L,
                    A,
                    z
                ].forEach(function(e) {
                    return e.style.display = t5 ? "none" : "block";
                }), t5 && (Le = 1), Ce.update(t5), Le = r4, se && (t5 ? function _swapPinOut(e, t, r) {
                    if (ut(r), e.parentNode === t) {
                        var n = t.parentNode;
                        n && (n.insertBefore(e, t), n.removeChild(t));
                    }
                }(se, F, B) : ge && Ce.isActive || fb(se, F, ta(se), $)), S = t5);
            }, Ce.refresh = function(e12, t6) {
                if (!Le && Ce.enabled || t6) {
                    if (se && e12 && Xe) Ca(ScrollTrigger, "scrollEnd", Va);
                    else {
                        Le = 1, j && j.pause(), ce && C && C.progress(0).invalidate(), S || Ce.revert();
                        for(var r5, n4, o4, i4, a4, s, l, c, f, u = Te(), p = Oe(), d = T(ve, te), g = 0, h = 0, v = w.end, m = w.endTrigger || ae, b = w.start || (0 !== w.start && ae ? se ? "0 0" : "0 100%" : 0), x = ae && Math.max(0, lt.indexOf(Ce)) || 0, y = x; y--;)(s = lt[y]).end || s.refresh(0, 1) || (Le = 1), !(l = s.pin) || l !== ae && l !== se || s.revert();
                        for(k = lb(b, ae, u, te, Ce.scroll(), I, A, Ce, p, we, be, d) || (se ? -0.001 : 0), W(v) && (v = v(Ce)), V(v) && !v.indexOf("+=") && (~v.indexOf(" ") ? v = (V(b) ? b.split(" ")[0] : "") + v : (g = Ha(v.substr(2), u), v = V(b) ? b : k + g, m = ae)), E = Math.max(k, lb(v || (m ? "100% 0" : d), m, u, te, Ce.scroll() + g, L, z, Ce, p, we, be, d)) || -0.001, U = E - k || (k -= 0.01) && 0.001, g = 0, y = x; y--;)(l = (s = lt[y]).pin) && s.start - s._pinPush < k && (r5 = s.end - s.start, l === ae && (g += r5), l === se && (h += r5));
                        if (k += g, E += g, Ce._pinPush = h, I && g && ((r5 = {})[te.a] = "+=" + g, Se.set([
                            I,
                            L
                        ], r5)), se) r5 = ta(se), i4 = te === ot, o4 = Ce.scroll(), Z = parseFloat(H(te.a)) + h, !d && 1 < E && ((me ? Pe : ve).style["overflow-" + te.a] = "scroll"), fb(se, F, r5), D = ib(se), n4 = it(se, !0), c = be && P(ve, i4 ? nt : ot)(), le && (($ = [
                            le + te.os2,
                            U + h + rt
                        ]).t = F, (y = le === Ge ? xa(se, te) + U + h : 0) && $.push(te.d, y + rt), ut($), be && Ce.scroll(G)), be && ((a4 = {
                            top: n4.top + (i4 ? o4 - k : c) + rt,
                            left: n4.left + (i4 ? c : o4 - k) + rt,
                            boxSizing: "border-box",
                            position: "fixed"
                        })[Je] = a4.maxWidth = Math.ceil(n4.width) + rt, a4[qe] = a4.maxHeight = Math.ceil(n4.height) + rt, a4[et] = a4[et + Ke] = a4[et + $e] = a4[et + Qe] = a4[et + je] = "0", a4[Ge] = r5[Ge], a4[Ge + Ke] = r5[Ge + Ke], a4[Ge + $e] = r5[Ge + $e], a4[Ge + Qe] = r5[Ge + Qe], a4[Ge + je] = r5[Ge + je], R = function _copyState(e, t, r) {
                            for(var n, o = [], i = e.length, a = r ? 8 : 0; a < i; a += 2)n = e[a], o.push(n, n in t ? t[n] : e[a + 1]);
                            return o.t = e.t, o;
                        }(B, a4, ge)), C ? (f = C._initted, Be(1), C.progress(1, !0), q = H(te.a) - Z + U + h, U !== q && R.splice(R.length - 2, 2), C.progress(0, !0), f || C.invalidate(), Be(0)) : q = U;
                        else if (ae && Ce.scroll()) for(n4 = ae.parentNode; n4 && n4 !== Pe;)n4._pinOffset && (k -= n4._pinOffset, E -= n4._pinOffset), n4 = n4.parentNode;
                        for(y = 0; y < x; y++)!(s = lt[y].pin) || s !== ae && s !== se || lt[y].revert(!1);
                        Ce.start = k, Ce.end = E, (M = _ = Ce.scroll()) < G && Ce.scroll(G), Ce.revert(!1), Le = 0, C && he && C._initted && C.progress(ee, !0).render(C.time(), !0, !0), K !== Ce.progress && (j && C.totalProgress(K, !0), Ce.progress = K, Ce.update()), se && le && (F._pinOffset = Math.round(Ce.progress * q)), ie && ie(Ce);
                    }
                }
            }, Ce.getVelocity = function() {
                return (Ce.scroll() - _) / (He() - Ie) * 1000 || 0;
            }, Ce.update = function(e13, t) {
                var r, n, o, i, a, s = Ce.scroll(), l = e13 ? 0 : (s - k) / U, c = l < 0 ? 0 : 1 < l ? 1 : l || 0, f = Ce.progress;
                if (t && (_ = M, M = s, de && (x2 = b2, b2 = C && !he ? C.totalProgress() : c)), fe && !c && se && !Le && !De && Xe && k < s + (s - _) / (He() - Ie) * fe && (c = 0.0001), c !== f && Ce.enabled) {
                    if (i = (a = (r = Ce.isActive = !!c && c < 1) != (!!f && f < 1)) || !!c != !!f, Ce.direction = f < c ? 1 : -1, Ce.progress = c, he || (!j || Le || De ? C && C.totalProgress(c, !!Le) : (j.vars.totalProgress = c, j.invalidate().restart())), se) {
                        if (e13 && le && (F.style[le + te.os2] = h2), be) {
                            if (i) {
                                if (o = !e13 && f < c && s < E + 1 && s + 1 >= T(ve, te), ge) {
                                    if (e13 || !r && !o) nb(se, F);
                                    else {
                                        var u = it(se, !0), p = s - k;
                                        nb(se, Pe, u.top + (te === ot ? p : 0) + rt, u.left + (te === ot ? 0 : p) + rt);
                                    }
                                }
                                ut(r || o ? R : D), q !== U && c < 1 && r || g2(Z + (1 !== c || o ? 0 : q));
                            }
                        } else g2(Z + q * c);
                    }
                    !de || d2.tween || Le || De || y2.restart(!0), ne && (a || pe && c && (c < 1 || !Re)) && Ee(ne.targets).forEach(function(e) {
                        return e.classList[r || pe ? "add" : "remove"](ne.className);
                    }), !re || he || e13 || re(Ce), i && !Le ? (n = c && !f ? 0 : 1 === c ? 1 : 1 === f ? 2 : 3, he && (o = !a && "none" !== ye[n + 1] && ye[n + 1] || ye[n], C && ("complete" === o || "reset" === o || o in C) && ("complete" === o ? C.pause().totalProgress(1) : "reset" === o ? C.restart(!0).pause() : C[o]()), re && re(Ce)), !a && Re || (oe && a && oe(Ce), xe[n] && xe[n](Ce), pe && (1 === c ? Ce.kill(!1, 1) : xe[n] = 0), a || xe[n = 1 === c ? 1 : 3] && xe[n](Ce))) : he && re && !Le && re(Ce);
                }
                m2 && (v2(s + (A._isFlipped ? 1 : 0)), m2(s));
            }, Ce.enable = function() {
                Ce.enabled || (Ce.enabled = !0, Ca(ve, "resize", Oa), Ca(ve, "scroll", Na), f2 && Ca(ScrollTrigger, "refreshInit", f2), C && C.add ? Se.delayedCall(0.01, function() {
                    return k || E || Ce.refresh();
                }) && (U = 0.01) && (k = E = 0) : Ce.refresh());
            }, Ce.disable = function(e, t) {
                if (Ce.enabled && (!1 !== e && Ce.revert(), Ce.enabled = Ce.isActive = !1, t || j && j.pause(), G = 0, n2 && (n2.uncache = 1), f2 && Da(ScrollTrigger, "refreshInit", f2), y2 && (y2.pause(), d2.tween && d2.tween.kill() && (d2.tween = 0)), !me)) {
                    for(var r = lt.length; r--;)if (lt[r].scroller === ve && lt[r] !== Ce) return;
                    Da(ve, "resize", Oa), Da(ve, "scroll", Na);
                }
            }, Ce.kill = function(e14, t) {
                Ce.disable(e14, t), i2 && delete ct[i2];
                var r = lt.indexOf(Ce);
                lt.splice(r, 1), r === ze && 0 < ft && ze--, C && (C.scrollTrigger = null, e14 && C.render(-1), t || C.kill()), I && [
                    I,
                    L,
                    A,
                    z
                ].forEach(function(e) {
                    return e.parentNode.removeChild(e);
                }), se && (n2 && (n2.uncache = 1), r = 0, lt.forEach(function(e) {
                    return e.pin === se && r++;
                }), r || (n2.spacer = 0));
            }, Ce.enable();
        } else this.update = this.refresh = this.kill = J;
    }, ScrollTrigger.register = function register(e15) {
        if (!i1 && (Se = e15 || M1(), L1() && window.document && (Me = window, _e = document, ke = _e.documentElement, Pe = _e.body), Se && (Ee = Se.utils.toArray, Ne = Se.utils.clamp, Be = Se.core.suppressOverwrites || J, Se.core.globals("ScrollTrigger", ScrollTrigger), Pe))) {
            s1 = Me.requestAnimationFrame || function(e) {
                return setTimeout(e, 16);
            }, Ca(Me, "wheel", Na), o1 = [
                Me,
                _e,
                ke,
                Pe
            ], Ca(_e, "scroll", Na);
            var t7, r = Pe.style, n = r.borderTop;
            r.borderTop = "1px solid #000", t7 = it(Pe), ot.m = Math.round(t7.top + ot.sc()) || 0, nt.m = Math.round(t7.left + nt.sc()) || 0, n ? r.borderTop = n : r.removeProperty("border-top"), c1 = setInterval(Ma, 200), Se.delayedCall(0.5, function() {
                return De = 0;
            }), Ca(_e, "touchcancel", J), Ca(Pe, "touchstart", J), Ba(Ca, _e, "pointerdown,touchstart,mousedown", function() {
                return Ae = 1;
            }), Ba(Ca, _e, "pointerup,touchend,mouseup", function() {
                return Ae = 0;
            }), f1 = Se.utils.checkPrefix("transform"), H1.push(f1), i1 = He(), a1 = Se.delayedCall(0.2, B1).pause(), d1 = [
                _e,
                "visibilitychange",
                function() {
                    var e = Me.innerWidth, t = Me.innerHeight;
                    _e.hidden ? (u1 = e, p1 = t) : u1 === e && p1 === t || Oa();
                },
                _e,
                "DOMContentLoaded",
                B1,
                Me,
                "load",
                function() {
                    return Xe || B1();
                },
                Me,
                "resize",
                Oa
            ], U1(Ca);
        }
        return i1;
    }, ScrollTrigger.defaults = function defaults(e) {
        for(var t in e)st[t] = e[t];
    }, ScrollTrigger.kill = function kill() {
        Ye = 0, lt.slice(0).forEach(function(e) {
            return e.kill(1);
        });
    }, ScrollTrigger.config = function config(e) {
        "limitCallbacks" in e && (Re = !!e.limitCallbacks);
        var t = e.syncInterval;
        t && clearInterval(c1) || (c1 = t) && setInterval(Ma, t), "autoRefreshEvents" in e && (U1(Da) || U1(Ca, e.autoRefreshEvents || "none"), r1 = -1 === (e.autoRefreshEvents + "").indexOf("resize"));
    }, ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
        var r = Ee(e)[0], n = h1.indexOf(r), o = N(r);
        ~n && h1.splice(n, o ? 6 : 2), o ? Fe.unshift(Me, t, Pe, t, ke, t) : Fe.unshift(r, t);
    }, ScrollTrigger.matchMedia = function matchMedia(e) {
        var t, r, n, o, i;
        for(r in e)n = k1.indexOf(r), o = e[r], "all" === (Ve = r) ? o() : (t = Me.matchMedia(r)) && (t.matches && (i = o()), ~n ? (k1[n + 1] = $1(k1[n + 1], o), k1[n + 2] = $1(k1[n + 2], i)) : (n = k1.length, k1.push(r, o, i), t.addListener ? t.addListener(Ua) : t.addEventListener("change", Ua)), k1[n + 3] = t.matches), Ve = 0;
        return k1;
    }, ScrollTrigger.clearMatchMedia = function clearMatchMedia(e) {
        e || (k1.length = 0), 0 <= (e = k1.indexOf(e)) && k1.splice(e, 4);
    }, ScrollTrigger);
    function ScrollTrigger(e, t) {
        i1 || ScrollTrigger.register(Se) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, t);
    }
    G1.version = "3.6.1", G1.saveStyles = function(e16) {
        return e16 ? Ee(e16).forEach(function(e) {
            if (e && e.style) {
                var t = I1.indexOf(e);
                0 <= t && I1.splice(t, 4), I1.push(e, e.style.cssText, Se.core.getCache(e), Ve);
            }
        }) : I1;
    }, G1.revert = function(e, t) {
        return z1(!e, t);
    }, G1.create = function(e, t) {
        return new G1(e, t);
    }, G1.refresh = function(e) {
        return e ? Oa() : B1(!0);
    }, G1.update = D1, G1.maxScroll = function(e, t) {
        return T(e, t ? nt : ot);
    }, G1.getScrollFunc = function(e, t) {
        return P(Ee(e)[0], t ? nt : ot);
    }, G1.getById = function(e) {
        return ct[e];
    }, G1.getAll = function() {
        return lt.slice(0);
    }, G1.isScrolling = function() {
        return !!Xe;
    }, G1.addEventListener = function(e, t) {
        var r = S1[e] || (S1[e] = []);
        ~r.indexOf(t) || r.push(t);
    }, G1.removeEventListener = function(e, t) {
        var r = S1[e], n = r && r.indexOf(t);
        0 <= n && r.splice(n, 1);
    }, G1.batch = function(e17, t9) {
        function yi(e18, t) {
            var r = [], n = [], o = Se.delayedCall(i, function() {
                t(r, n), r = [], n = [];
            }).pause();
            return function(e) {
                r.length || o.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && o.progress(1);
            };
        }
        var r8, n7 = [], o7 = {}, i = t9.interval || 0.016, a = t9.batchMax || 1000000000;
        for(r8 in t9)o7[r8] = "on" === r8.substr(0, 2) && W(t9[r8]) && "onRefreshInit" !== r8 ? yi(0, t9[r8]) : t9[r8];
        return W(a) && (a = a(), Ca(G1, "refresh", function() {
            return a = t9.batchMax();
        })), Ee(e17).forEach(function(e) {
            var t = {};
            for(r8 in o7)t[r8] = o7[r8];
            t.trigger = e, n7.push(G1.create(t));
        }), n7;
    }, G1.sort = function(e19) {
        return lt.sort(e19 || function(e, t) {
            return -1000000 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1000000 * (t.vars.refreshPriority || 0));
        });
    }, M1() && Se.registerPlugin(G1), e1.ScrollTrigger = G1, e1.default = G1;
    if (typeof window === "undefined" || window !== e1) Object.defineProperty(e1, "__esModule", {
        value: !0
    });
    else delete e1.default;
});

//# sourceMappingURL=index.196fda65.js.map
