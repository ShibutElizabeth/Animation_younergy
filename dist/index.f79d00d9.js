/*!
 * ScrollToPlugin 3.6.1
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
    function k() {
        return "undefined" != typeof window;
    }
    function l1() {
        return i1 || k() && (i1 = window.gsap) && i1.registerPlugin && i1;
    }
    function m(t) {
        return "string" == typeof t;
    }
    function n1(t) {
        return "function" == typeof t;
    }
    function o1(t, e) {
        var o = "x" === e ? "Width" : "Height", n = "scroll" + o, r = "client" + o;
        return t === x || t === u1 || t === c1 ? Math.max(u1[n], c1[n]) - (x["inner" + o] || u1[r] || c1[r]) : t[n] - t["offset" + o];
    }
    function p1(t, e) {
        var o = "scroll" + ("x" === e ? "Left" : "Top");
        return t === x && (null != t.pageXOffset ? o = "page" + e.toUpperCase() + "Offset" : t = null != u1[o] ? u1 : c1), function() {
            return t[o];
        };
    }
    function r1(t, e) {
        if (!(t = a1(t)[0]) || !t.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
        };
        var o = t.getBoundingClientRect(), n = !e || e === x || e === c1, r = n ? {
            top: u1.clientTop - (x.pageYOffset || u1.scrollTop || c1.scrollTop || 0),
            left: u1.clientLeft - (x.pageXOffset || u1.scrollLeft || c1.scrollLeft || 0)
        } : e.getBoundingClientRect(), i = {
            x: o.left - r.left,
            y: o.top - r.top
        };
        return !n && e && (i.x += p1(e, "x")(), i.y += p1(e, "y")()), i;
    }
    function s1(t, e, n, i, l) {
        return isNaN(t) || "object" == typeof t ? m(t) && "=" === t.charAt(1) ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + i - l : "max" === t ? o1(e, n) - l : Math.min(o1(e, n), r1(t, e)[n] - l) : parseFloat(t) - l;
    }
    function t1() {
        i1 = l1(), k() && i1 && document.body && (x = window, c1 = document.body, u1 = document.documentElement, a1 = i1.utils.toArray, i1.config({
            autoKillThreshold: 7
        }), g = i1.config(), f1 = 1);
    }
    var i1, f1, x, u1, c1, a1, g, y1 = {
        version: "3.6.1",
        name: "scrollTo",
        rawVars: 1,
        register: function register(e) {
            i1 = e, t1();
        },
        init: function init(e2, o2, r2, i2, l2) {
            f1 || t1();
            var u = this;
            u.isWin = e2 === x, u.target = e2, u.tween = r2, o2 = function _clean(t, e, o, r) {
                if (n1(t) && (t = t(e, o, r)), "object" != typeof t) return m(t) && "max" !== t && "=" !== t.charAt(1) ? {
                    x: t,
                    y: t
                } : {
                    y: t
                };
                if (t.nodeType) return {
                    y: t,
                    x: t
                };
                var i, l = {};
                for(i in t)l[i] = "onAutoKill" !== i && n1(t[i]) ? t[i](e, o, r) : t[i];
                return l;
            }(o2, i2, e2, l2), u.vars = o2, u.autoKill = !!o2.autoKill, u.getX = p1(e2, "x"), u.getY = p1(e2, "y"), u.x = u.xPrev = u.getX(), u.y = u.yPrev = u.getY(), null != o2.x ? (u.add(u, "x", u.x, s1(o2.x, e2, "x", u.x, o2.offsetX || 0), i2, l2), u._props.push("scrollTo_x")) : u.skipX = 1, null != o2.y ? (u.add(u, "y", u.y, s1(o2.y, e2, "y", u.y, o2.offsetY || 0), i2, l2), u._props.push("scrollTo_y")) : u.skipY = 1;
        },
        render: function render(t, e) {
            for(var n, r, i, l, s, u = e._pt, f = e.target, p = e.tween, c = e.autoKill, a = e.xPrev, y = e.yPrev, d = e.isWin; u;)u.r(t, u.d), u = u._next;
            n = d || !e.skipX ? e.getX() : a, i = (r = d || !e.skipY ? e.getY() : y) - y, l = n - a, s = g.autoKillThreshold, e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), c && (!e.skipX && (s < l || l < -s) && n < o1(f, "x") && (e.skipX = 1), !e.skipY && (s < i || i < -s) && r < o1(f, "y") && (e.skipY = 1), e.skipX && e.skipY && (p.kill(), e.vars.onAutoKill && e.vars.onAutoKill.apply(p, e.vars.onAutoKillParams || []))), d ? x.scrollTo(e.skipX ? n : e.x, e.skipY ? r : e.y) : (e.skipY || (f.scrollTop = e.y), e.skipX || (f.scrollLeft = e.x)), e.xPrev = e.x, e.yPrev = e.y;
        },
        kill: function kill(t) {
            var e = "scrollTo" === t;
            !e && "scrollTo_x" !== t || (this.skipX = 1), !e && "scrollTo_y" !== t || (this.skipY = 1);
        }
    };
    y1.max = o1, y1.getOffset = r1, y1.buildGetter = p1, l1() && i1.registerPlugin(y1), e1.ScrollToPlugin = y1, e1.default = y1;
    if (typeof window === "undefined" || window !== e1) Object.defineProperty(e1, "__esModule", {
        value: !0
    });
    else delete e1.default;
});

//# sourceMappingURL=index.f79d00d9.js.map
