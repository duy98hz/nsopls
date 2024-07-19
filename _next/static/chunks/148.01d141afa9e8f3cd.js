"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [148], {
        8143: function(e, t, n) {
            n.d(t, {
                Me: function() {
                    return x
                },
                oo: function() {
                    return L
                },
                US: function() {
                    return P
                },
                RR: function() {
                    return F
                },
                cv: function() {
                    return T
                },
                uY: function() {
                    return S
                },
                dp: function() {
                    return R
                }
            });
            var r = n(7848);

            function o(e, t, n) {
                let o, {
                        reference: l,
                        floating: i
                    } = e,
                    u = (0, r.Qq)(t),
                    a = (0, r.Wh)(t),
                    s = (0, r.I4)(a),
                    c = (0, r.k3)(t),
                    d = "y" === u,
                    f = l.x + l.width / 2 - i.width / 2,
                    p = l.y + l.height / 2 - i.height / 2,
                    v = l[s] / 2 - i[s] / 2;
                switch (c) {
                    case "top":
                        o = {
                            x: f,
                            y: l.y - i.height
                        };
                        break;
                    case "bottom":
                        o = {
                            x: f,
                            y: l.y + l.height
                        };
                        break;
                    case "right":
                        o = {
                            x: l.x + l.width,
                            y: p
                        };
                        break;
                    case "left":
                        o = {
                            x: l.x - i.width,
                            y: p
                        };
                        break;
                    default:
                        o = {
                            x: l.x,
                            y: l.y
                        }
                }
                switch ((0, r.hp)(t)) {
                    case "start":
                        o[a] -= v * (n && d ? -1 : 1);
                        break;
                    case "end":
                        o[a] += v * (n && d ? -1 : 1)
                }
                return o
            }
            let l = async (e, t, n) => {
                let {
                    placement: r = "bottom",
                    strategy: l = "absolute",
                    middleware: i = [],
                    platform: u
                } = n, a = i.filter(Boolean), s = await (null == u.isRTL ? void 0 : u.isRTL(t)), c = await u.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: l
                }), {
                    x: d,
                    y: f
                } = o(c, r, s), p = r, v = {}, m = 0;
                for (let n = 0; n < a.length; n++) {
                    let {
                        name: i,
                        fn: h
                    } = a[n], {
                        x: g,
                        y: y,
                        data: b,
                        reset: E
                    } = await h({
                        x: d,
                        y: f,
                        initialPlacement: r,
                        placement: p,
                        strategy: l,
                        middlewareData: v,
                        rects: c,
                        platform: u,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    d = null != g ? g : d, f = null != y ? y : f, v = { ...v,
                        [i]: { ...v[i],
                            ...b
                        }
                    }, E && m <= 50 && (m++, "object" == typeof E && (E.placement && (p = E.placement), E.rects && (c = !0 === E.rects ? await u.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: l
                    }) : E.rects), {
                        x: d,
                        y: f
                    } = o(c, p, s)), n = -1)
                }
                return {
                    x: d,
                    y: f,
                    placement: p,
                    strategy: l,
                    middlewareData: v
                }
            };
            async function i(e, t) {
                var n;
                void 0 === t && (t = {});
                let {
                    x: o,
                    y: l,
                    platform: i,
                    rects: u,
                    elements: a,
                    strategy: s
                } = e, {
                    boundary: c = "clippingAncestors",
                    rootBoundary: d = "viewport",
                    elementContext: f = "floating",
                    altBoundary: p = !1,
                    padding: v = 0
                } = (0, r.ku)(t, e), m = (0, r.yd)(v), h = a[p ? "floating" === f ? "reference" : "floating" : f], g = (0, r.JB)(await i.getClippingRect({
                    element: null == (n = await (null == i.isElement ? void 0 : i.isElement(h))) || n ? h : h.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(a.floating)),
                    boundary: c,
                    rootBoundary: d,
                    strategy: s
                })), y = "floating" === f ? {
                    x: o,
                    y: l,
                    width: u.floating.width,
                    height: u.floating.height
                } : u.reference, b = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating)), E = await (null == i.isElement ? void 0 : i.isElement(b)) && await (null == i.getScale ? void 0 : i.getScale(b)) || {
                    x: 1,
                    y: 1
                }, w = (0, r.JB)(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                    elements: a,
                    rect: y,
                    offsetParent: b,
                    strategy: s
                }) : y);
                return {
                    top: (g.top - w.top + m.top) / E.y,
                    bottom: (w.bottom - g.bottom + m.bottom) / E.y,
                    left: (g.left - w.left + m.left) / E.x,
                    right: (w.right - g.right + m.right) / E.x
                }
            }
            async function u(e, t) {
                let {
                    placement: n,
                    platform: o,
                    elements: l
                } = e, i = await (null == o.isRTL ? void 0 : o.isRTL(l.floating)), u = (0, r.k3)(n), a = (0, r.hp)(n), s = "y" === (0, r.Qq)(n), c = ["left", "top"].includes(u) ? -1 : 1, d = i && s ? -1 : 1, f = (0, r.ku)(t, e), {
                    mainAxis: p,
                    crossAxis: v,
                    alignmentAxis: m
                } = "number" == typeof f ? {
                    mainAxis: f,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: 0,
                    crossAxis: 0,
                    alignmentAxis: null,
                    ...f
                };
                return a && "number" == typeof m && (v = "end" === a ? -1 * m : m), s ? {
                    x: v * d,
                    y: p * c
                } : {
                    x: p * c,
                    y: v * d
                }
            }
            var a = n(5224);

            function s(e) {
                let t = (0, a.Dx)(e),
                    n = parseFloat(t.width) || 0,
                    o = parseFloat(t.height) || 0,
                    l = (0, a.Re)(e),
                    i = l ? e.offsetWidth : n,
                    u = l ? e.offsetHeight : o,
                    s = (0, r.NM)(n) !== i || (0, r.NM)(o) !== u;
                return s && (n = i, o = u), {
                    width: n,
                    height: o,
                    $: s
                }
            }

            function c(e) {
                return (0, a.kK)(e) ? e : e.contextElement
            }

            function d(e) {
                let t = c(e);
                if (!(0, a.Re)(t)) return (0, r.ze)(1);
                let n = t.getBoundingClientRect(),
                    {
                        width: o,
                        height: l,
                        $: i
                    } = s(t),
                    u = (i ? (0, r.NM)(n.width) : n.width) / o,
                    d = (i ? (0, r.NM)(n.height) : n.height) / l;
                return u && Number.isFinite(u) || (u = 1), d && Number.isFinite(d) || (d = 1), {
                    x: u,
                    y: d
                }
            }
            let f = (0, r.ze)(0);

            function p(e) {
                let t = (0, a.Jj)(e);
                return (0, a.Pf)() && t.visualViewport ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop
                } : f
            }

            function v(e, t, n, o) {
                var l;
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                let i = e.getBoundingClientRect(),
                    u = c(e),
                    s = (0, r.ze)(1);
                t && (o ? (0, a.kK)(o) && (s = d(o)) : s = d(e));
                let f = (void 0 === (l = n) && (l = !1), o && (!l || o === (0, a.Jj)(u)) && l) ? p(u) : (0, r.ze)(0),
                    v = (i.left + f.x) / s.x,
                    m = (i.top + f.y) / s.y,
                    h = i.width / s.x,
                    g = i.height / s.y;
                if (u) {
                    let e = (0, a.Jj)(u),
                        t = o && (0, a.kK)(o) ? (0, a.Jj)(o) : o,
                        n = e,
                        r = n.frameElement;
                    for (; r && o && t !== n;) {
                        let e = d(r),
                            t = r.getBoundingClientRect(),
                            o = (0, a.Dx)(r),
                            l = t.left + (r.clientLeft + parseFloat(o.paddingLeft)) * e.x,
                            i = t.top + (r.clientTop + parseFloat(o.paddingTop)) * e.y;
                        v *= e.x, m *= e.y, h *= e.x, g *= e.y, v += l, m += i, r = (n = (0, a.Jj)(r)).frameElement
                    }
                }
                return (0, r.JB)({
                    width: h,
                    height: g,
                    x: v,
                    y: m
                })
            }

            function m(e) {
                return v((0, a.tF)(e)).left + (0, a.Lw)(e).scrollLeft
            }

            function h(e, t, n) {
                let o;
                if ("viewport" === t) o = function(e, t) {
                    let n = (0, a.Jj)(e),
                        r = (0, a.tF)(e),
                        o = n.visualViewport,
                        l = r.clientWidth,
                        i = r.clientHeight,
                        u = 0,
                        s = 0;
                    if (o) {
                        l = o.width, i = o.height;
                        let e = (0, a.Pf)();
                        (!e || e && "fixed" === t) && (u = o.offsetLeft, s = o.offsetTop)
                    }
                    return {
                        width: l,
                        height: i,
                        x: u,
                        y: s
                    }
                }(e, n);
                else if ("document" === t) o = function(e) {
                    let t = (0, a.tF)(e),
                        n = (0, a.Lw)(e),
                        o = e.ownerDocument.body,
                        l = (0, r.Fp)(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
                        i = (0, r.Fp)(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight),
                        u = -n.scrollLeft + m(e),
                        s = -n.scrollTop;
                    return "rtl" === (0, a.Dx)(o).direction && (u += (0, r.Fp)(t.clientWidth, o.clientWidth) - l), {
                        width: l,
                        height: i,
                        x: u,
                        y: s
                    }
                }((0, a.tF)(e));
                else if ((0, a.kK)(t)) o = function(e, t) {
                    let n = v(e, !0, "fixed" === t),
                        o = n.top + e.clientTop,
                        l = n.left + e.clientLeft,
                        i = (0, a.Re)(e) ? d(e) : (0, r.ze)(1),
                        u = e.clientWidth * i.x;
                    return {
                        width: u,
                        height: e.clientHeight * i.y,
                        x: l * i.x,
                        y: o * i.y
                    }
                }(t, n);
                else {
                    let n = p(e);
                    o = { ...t,
                        x: t.x - n.x,
                        y: t.y - n.y
                    }
                }
                return (0, r.JB)(o)
            }

            function g(e) {
                return "static" === (0, a.Dx)(e).position
            }

            function y(e, t) {
                return (0, a.Re)(e) && "fixed" !== (0, a.Dx)(e).position ? t ? t(e) : e.offsetParent : null
            }

            function b(e, t) {
                let n = (0, a.Jj)(e);
                if ((0, a.tR)(e)) return n;
                if (!(0, a.Re)(e)) {
                    let t = (0, a.Ow)(e);
                    for (; t && !(0, a.Py)(t);) {
                        if ((0, a.kK)(t) && !g(t)) return t;
                        t = (0, a.Ow)(t)
                    }
                    return n
                }
                let r = y(e, t);
                for (; r && (0, a.Ze)(r) && g(r);) r = y(r, t);
                return r && (0, a.Py)(r) && g(r) && !(0, a.hT)(r) ? n : r || (0, a.gQ)(e) || n
            }
            let E = async function(e) {
                    let t = this.getOffsetParent || b,
                        n = this.getDimensions,
                        o = await n(e.floating);
                    return {
                        reference: function(e, t, n) {
                            let o = (0, a.Re)(t),
                                l = (0, a.tF)(t),
                                i = "fixed" === n,
                                u = v(e, !0, i, t),
                                s = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                c = (0, r.ze)(0);
                            if (o || !o && !i) {
                                if (("body" !== (0, a.wk)(t) || (0, a.ao)(l)) && (s = (0, a.Lw)(t)), o) {
                                    let e = v(t, !0, i, t);
                                    c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop
                                } else l && (c.x = m(l))
                            }
                            return {
                                x: u.left + s.scrollLeft - c.x,
                                y: u.top + s.scrollTop - c.y,
                                width: u.width,
                                height: u.height
                            }
                        }(e.reference, await t(e.floating), e.strategy),
                        floating: {
                            x: 0,
                            y: 0,
                            width: o.width,
                            height: o.height
                        }
                    }
                },
                w = {
                    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                        let {
                            elements: t,
                            rect: n,
                            offsetParent: o,
                            strategy: l
                        } = e, i = "fixed" === l, u = (0, a.tF)(o), s = !!t && (0, a.tR)(t.floating);
                        if (o === u || s && i) return n;
                        let c = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            f = (0, r.ze)(1),
                            p = (0, r.ze)(0),
                            m = (0, a.Re)(o);
                        if ((m || !m && !i) && (("body" !== (0, a.wk)(o) || (0, a.ao)(u)) && (c = (0, a.Lw)(o)), (0, a.Re)(o))) {
                            let e = v(o);
                            f = d(o), p.x = e.x + o.clientLeft, p.y = e.y + o.clientTop
                        }
                        return {
                            width: n.width * f.x,
                            height: n.height * f.y,
                            x: n.x * f.x - c.scrollLeft * f.x + p.x,
                            y: n.y * f.y - c.scrollTop * f.y + p.y
                        }
                    },
                    getDocumentElement: a.tF,
                    getClippingRect: function(e) {
                        let {
                            element: t,
                            boundary: n,
                            rootBoundary: o,
                            strategy: l
                        } = e, i = [..."clippingAncestors" === n ? (0, a.tR)(t) ? [] : function(e, t) {
                            let n = t.get(e);
                            if (n) return n;
                            let r = (0, a.Kx)(e, [], !1).filter(e => (0, a.kK)(e) && "body" !== (0, a.wk)(e)),
                                o = null,
                                l = "fixed" === (0, a.Dx)(e).position,
                                i = l ? (0, a.Ow)(e) : e;
                            for (;
                                (0, a.kK)(i) && !(0, a.Py)(i);) {
                                let t = (0, a.Dx)(i),
                                    n = (0, a.hT)(i);
                                n || "fixed" !== t.position || (o = null), (l ? !n && !o : !n && "static" === t.position && !!o && ["absolute", "fixed"].includes(o.position) || (0, a.ao)(i) && !n && function e(t, n) {
                                    let r = (0, a.Ow)(t);
                                    return !(r === n || !(0, a.kK)(r) || (0, a.Py)(r)) && ("fixed" === (0, a.Dx)(r).position || e(r, n))
                                }(e, i)) ? r = r.filter(e => e !== i) : o = t, i = (0, a.Ow)(i)
                            }
                            return t.set(e, r), r
                        }(t, this._c) : [].concat(n), o], u = i[0], s = i.reduce((e, n) => {
                            let o = h(t, n, l);
                            return e.top = (0, r.Fp)(o.top, e.top), e.right = (0, r.VV)(o.right, e.right), e.bottom = (0, r.VV)(o.bottom, e.bottom), e.left = (0, r.Fp)(o.left, e.left), e
                        }, h(t, u, l));
                        return {
                            width: s.right - s.left,
                            height: s.bottom - s.top,
                            x: s.left,
                            y: s.top
                        }
                    },
                    getOffsetParent: b,
                    getElementRects: E,
                    getClientRects: function(e) {
                        return Array.from(e.getClientRects())
                    },
                    getDimensions: function(e) {
                        let {
                            width: t,
                            height: n
                        } = s(e);
                        return {
                            width: t,
                            height: n
                        }
                    },
                    getScale: d,
                    isElement: a.kK,
                    isRTL: function(e) {
                        return "rtl" === (0, a.Dx)(e).direction
                    }
                };

            function x(e, t, n, o) {
                let l;
                void 0 === o && (o = {});
                let {
                    ancestorScroll: i = !0,
                    ancestorResize: u = !0,
                    elementResize: s = "function" == typeof ResizeObserver,
                    layoutShift: d = "function" == typeof IntersectionObserver,
                    animationFrame: f = !1
                } = o, p = c(e), m = i || u ? [...p ? (0, a.Kx)(p) : [], ...(0, a.Kx)(t)] : [];
                m.forEach(e => {
                    i && e.addEventListener("scroll", n, {
                        passive: !0
                    }), u && e.addEventListener("resize", n)
                });
                let h = p && d ? function(e, t) {
                        let n, o = null,
                            l = (0, a.tF)(e);

                        function i() {
                            var e;
                            clearTimeout(n), null == (e = o) || e.disconnect(), o = null
                        }
                        return ! function u(a, s) {
                            void 0 === a && (a = !1), void 0 === s && (s = 1), i();
                            let {
                                left: c,
                                top: d,
                                width: f,
                                height: p
                            } = e.getBoundingClientRect();
                            if (a || t(), !f || !p) return;
                            let v = (0, r.GW)(d),
                                m = (0, r.GW)(l.clientWidth - (c + f)),
                                h = {
                                    rootMargin: -v + "px " + -m + "px " + -(0, r.GW)(l.clientHeight - (d + p)) + "px " + -(0, r.GW)(c) + "px",
                                    threshold: (0, r.Fp)(0, (0, r.VV)(1, s)) || 1
                                },
                                g = !0;

                            function y(e) {
                                let t = e[0].intersectionRatio;
                                if (t !== s) {
                                    if (!g) return u();
                                    t ? u(!1, t) : n = setTimeout(() => {
                                        u(!1, 1e-7)
                                    }, 1e3)
                                }
                                g = !1
                            }
                            try {
                                o = new IntersectionObserver(y, { ...h,
                                    root: l.ownerDocument
                                })
                            } catch (e) {
                                o = new IntersectionObserver(y, h)
                            }
                            o.observe(e)
                        }(!0), i
                    }(p, n) : null,
                    g = -1,
                    y = null;
                s && (y = new ResizeObserver(e => {
                    let [r] = e;
                    r && r.target === p && y && (y.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
                        var e;
                        null == (e = y) || e.observe(t)
                    })), n()
                }), p && !f && y.observe(p), y.observe(t));
                let b = f ? v(e) : null;
                return f && function t() {
                    let r = v(e);
                    b && (r.x !== b.x || r.y !== b.y || r.width !== b.width || r.height !== b.height) && n(), b = r, l = requestAnimationFrame(t)
                }(), n(), () => {
                    var e;
                    m.forEach(e => {
                        i && e.removeEventListener("scroll", n), u && e.removeEventListener("resize", n)
                    }), null == h || h(), null == (e = y) || e.disconnect(), y = null, f && cancelAnimationFrame(l)
                }
            }
            let P = i,
                T = function(e) {
                    return void 0 === e && (e = 0), {
                        name: "offset",
                        options: e,
                        async fn(t) {
                            var n, r;
                            let {
                                x: o,
                                y: l,
                                placement: i,
                                middlewareData: a
                            } = t, s = await u(t, e);
                            return i === (null == (n = a.offset) ? void 0 : n.placement) && null != (r = a.arrow) && r.alignmentOffset ? {} : {
                                x: o + s.x,
                                y: l + s.y,
                                data: { ...s,
                                    placement: i
                                }
                            }
                        }
                    }
                },
                S = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "shift",
                        options: e,
                        async fn(t) {
                            let {
                                x: n,
                                y: o,
                                placement: l
                            } = t, {
                                mainAxis: u = !0,
                                crossAxis: a = !1,
                                limiter: s = {
                                    fn: e => {
                                        let {
                                            x: t,
                                            y: n
                                        } = e;
                                        return {
                                            x: t,
                                            y: n
                                        }
                                    }
                                },
                                ...c
                            } = (0, r.ku)(e, t), d = {
                                x: n,
                                y: o
                            }, f = await i(t, c), p = (0, r.Qq)((0, r.k3)(l)), v = (0, r.Rn)(p), m = d[v], h = d[p];
                            if (u) {
                                let e = "y" === v ? "top" : "left",
                                    t = "y" === v ? "bottom" : "right",
                                    n = m + f[e],
                                    o = m - f[t];
                                m = (0, r.uZ)(n, m, o)
                            }
                            if (a) {
                                let e = "y" === p ? "top" : "left",
                                    t = "y" === p ? "bottom" : "right",
                                    n = h + f[e],
                                    o = h - f[t];
                                h = (0, r.uZ)(n, h, o)
                            }
                            let g = s.fn({ ...t,
                                [v]: m,
                                [p]: h
                            });
                            return { ...g,
                                data: {
                                    x: g.x - n,
                                    y: g.y - o
                                }
                            }
                        }
                    }
                },
                F = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "flip",
                        options: e,
                        async fn(t) {
                            var n, o, l, u, a;
                            let {
                                placement: s,
                                middlewareData: c,
                                rects: d,
                                initialPlacement: f,
                                platform: p,
                                elements: v
                            } = t, {
                                mainAxis: m = !0,
                                crossAxis: h = !0,
                                fallbackPlacements: g,
                                fallbackStrategy: y = "bestFit",
                                fallbackAxisSideDirection: b = "none",
                                flipAlignment: E = !0,
                                ...w
                            } = (0, r.ku)(e, t);
                            if (null != (n = c.arrow) && n.alignmentOffset) return {};
                            let x = (0, r.k3)(s),
                                P = (0, r.Qq)(f),
                                T = (0, r.k3)(f) === f,
                                S = await (null == p.isRTL ? void 0 : p.isRTL(v.floating)),
                                F = g || (T || !E ? [(0, r.pw)(f)] : (0, r.gy)(f)),
                                R = "none" !== b;
                            !g && R && F.push(...(0, r.KX)(f, E, b, S));
                            let L = [f, ...F],
                                k = await i(t, w),
                                O = [],
                                C = (null == (o = c.flip) ? void 0 : o.overflows) || [];
                            if (m && O.push(k[x]), h) {
                                let e = (0, r.i8)(s, d, S);
                                O.push(k[e[0]], k[e[1]])
                            }
                            if (C = [...C, {
                                    placement: s,
                                    overflows: O
                                }], !O.every(e => e <= 0)) {
                                let e = ((null == (l = c.flip) ? void 0 : l.index) || 0) + 1,
                                    t = L[e];
                                if (t) return {
                                    data: {
                                        index: e,
                                        overflows: C
                                    },
                                    reset: {
                                        placement: t
                                    }
                                };
                                let n = null == (u = C.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : u.placement;
                                if (!n) switch (y) {
                                    case "bestFit":
                                        {
                                            let e = null == (a = C.filter(e => {
                                                if (R) {
                                                    let t = (0, r.Qq)(e.placement);
                                                    return t === P || "y" === t
                                                }
                                                return !0
                                            }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : a[0];e && (n = e);
                                            break
                                        }
                                    case "initialPlacement":
                                        n = f
                                }
                                if (s !== n) return {
                                    reset: {
                                        placement: n
                                    }
                                }
                            }
                            return {}
                        }
                    }
                },
                R = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "size",
                        options: e,
                        async fn(t) {
                            let n, o;
                            let {
                                placement: l,
                                rects: u,
                                platform: a,
                                elements: s
                            } = t, {
                                apply: c = () => {},
                                ...d
                            } = (0, r.ku)(e, t), f = await i(t, d), p = (0, r.k3)(l), v = (0, r.hp)(l), m = "y" === (0, r.Qq)(l), {
                                width: h,
                                height: g
                            } = u.floating;
                            "top" === p || "bottom" === p ? (n = p, o = v === (await (null == a.isRTL ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (o = p, n = "end" === v ? "top" : "bottom");
                            let y = g - f.top - f.bottom,
                                b = h - f.left - f.right,
                                E = (0, r.VV)(g - f[n], y),
                                w = (0, r.VV)(h - f[o], b),
                                x = !t.middlewareData.shift,
                                P = E,
                                T = w;
                            if (m ? T = v || x ? (0, r.VV)(w, b) : b : P = v || x ? (0, r.VV)(E, y) : y, x && !v) {
                                let e = (0, r.Fp)(f.left, 0),
                                    t = (0, r.Fp)(f.right, 0),
                                    n = (0, r.Fp)(f.top, 0),
                                    o = (0, r.Fp)(f.bottom, 0);
                                m ? T = h - 2 * (0 !== e || 0 !== t ? e + t : (0, r.Fp)(f.left, f.right)) : P = g - 2 * (0 !== n || 0 !== o ? n + o : (0, r.Fp)(f.top, f.bottom))
                            }
                            await c({ ...t,
                                availableWidth: T,
                                availableHeight: P
                            });
                            let S = await a.getDimensions(s.floating);
                            return h !== S.width || g !== S.height ? {
                                reset: {
                                    rects: !0
                                }
                            } : {}
                        }
                    }
                },
                L = (e, t, n) => {
                    let r = new Map,
                        o = {
                            platform: w,
                            ...n
                        },
                        i = { ...o.platform,
                            _c: r
                        };
                    return l(e, t, { ...o,
                        platform: i
                    })
                }
        },
        4674: function(e, t, n) {
            n.d(t, {
                RR: function() {
                    return v
                },
                YF: function() {
                    return d
                },
                cv: function() {
                    return f
                },
                dp: function() {
                    return m
                },
                uY: function() {
                    return p
                }
            });
            var r = n(8143),
                o = n(2265),
                l = n(4887),
                i = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;

            function u(e, t) {
                let n, r, o;
                if (e === t) return !0;
                if (typeof e != typeof t) return !1;
                if ("function" == typeof e && e.toString() === t.toString()) return !0;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if ((n = e.length) !== t.length) return !1;
                        for (r = n; 0 != r--;)
                            if (!u(e[r], t[r])) return !1;
                        return !0
                    }
                    if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
                    for (r = n; 0 != r--;)
                        if (!({}).hasOwnProperty.call(t, o[r])) return !1;
                    for (r = n; 0 != r--;) {
                        let n = o[r];
                        if (("_owner" !== n || !e.$$typeof) && !u(e[n], t[n])) return !1
                    }
                    return !0
                }
                return e != e && t != t
            }

            function a(e) {
                return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
            }

            function s(e, t) {
                let n = a(e);
                return Math.round(t * n) / n
            }

            function c(e) {
                let t = o.useRef(e);
                return i(() => {
                    t.current = e
                }), t
            }

            function d(e) {
                void 0 === e && (e = {});
                let {
                    placement: t = "bottom",
                    strategy: n = "absolute",
                    middleware: d = [],
                    platform: f,
                    elements: {
                        reference: p,
                        floating: v
                    } = {},
                    transform: m = !0,
                    whileElementsMounted: h,
                    open: g
                } = e, [y, b] = o.useState({
                    x: 0,
                    y: 0,
                    strategy: n,
                    placement: t,
                    middlewareData: {},
                    isPositioned: !1
                }), [E, w] = o.useState(d);
                u(E, d) || w(d);
                let [x, P] = o.useState(null), [T, S] = o.useState(null), F = o.useCallback(e => {
                    e !== O.current && (O.current = e, P(e))
                }, []), R = o.useCallback(e => {
                    e !== C.current && (C.current = e, S(e))
                }, []), L = p || x, k = v || T, O = o.useRef(null), C = o.useRef(null), M = o.useRef(y), A = null != h, I = c(h), N = c(f), D = o.useCallback(() => {
                    if (!O.current || !C.current) return;
                    let e = {
                        placement: t,
                        strategy: n,
                        middleware: E
                    };
                    N.current && (e.platform = N.current), (0, r.oo)(O.current, C.current, e).then(e => {
                        let t = { ...e,
                            isPositioned: !0
                        };
                        H.current && !u(M.current, t) && (M.current = t, l.flushSync(() => {
                            b(t)
                        }))
                    })
                }, [E, t, n, N]);
                i(() => {
                    !1 === g && M.current.isPositioned && (M.current.isPositioned = !1, b(e => ({ ...e,
                        isPositioned: !1
                    })))
                }, [g]);
                let H = o.useRef(!1);
                i(() => (H.current = !0, () => {
                    H.current = !1
                }), []), i(() => {
                    if (L && (O.current = L), k && (C.current = k), L && k) {
                        if (I.current) return I.current(L, k, D);
                        D()
                    }
                }, [L, k, D, I, A]);
                let V = o.useMemo(() => ({
                        reference: O,
                        floating: C,
                        setReference: F,
                        setFloating: R
                    }), [F, R]),
                    j = o.useMemo(() => ({
                        reference: L,
                        floating: k
                    }), [L, k]),
                    z = o.useMemo(() => {
                        let e = {
                            position: n,
                            left: 0,
                            top: 0
                        };
                        if (!j.floating) return e;
                        let t = s(j.floating, y.x),
                            r = s(j.floating, y.y);
                        return m ? { ...e,
                            transform: "translate(" + t + "px, " + r + "px)",
                            ...a(j.floating) >= 1.5 && {
                                willChange: "transform"
                            }
                        } : {
                            position: n,
                            left: t,
                            top: r
                        }
                    }, [n, m, j.floating, y.x, y.y]);
                return o.useMemo(() => ({ ...y,
                    update: D,
                    refs: V,
                    elements: j,
                    floatingStyles: z
                }), [y, D, V, j, z])
            }
            let f = (e, t) => ({ ...(0, r.cv)(e),
                    options: [e, t]
                }),
                p = (e, t) => ({ ...(0, r.uY)(e),
                    options: [e, t]
                }),
                v = (e, t) => ({ ...(0, r.RR)(e),
                    options: [e, t]
                }),
                m = (e, t) => ({ ...(0, r.dp)(e),
                    options: [e, t]
                })
        },
        600: function(e, t, n) {
            n.d(t, {
                ij: function() {
                    return r
                }
            });

            function r() {
                let e = navigator.userAgentData;
                return e && Array.isArray(e.brands) ? e.brands.map(e => {
                    let {
                        brand: t,
                        version: n
                    } = e;
                    return t + "/" + n
                }).join(" ") : navigator.userAgent
            }
        },
        5224: function(e, t, n) {
            function r(e) {
                return i(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }

            function o(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function l(e) {
                var t;
                return null == (t = (i(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }

            function i(e) {
                return e instanceof Node || e instanceof o(e).Node
            }

            function u(e) {
                return e instanceof Element || e instanceof o(e).Element
            }

            function a(e) {
                return e instanceof HTMLElement || e instanceof o(e).HTMLElement
            }

            function s(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof o(e).ShadowRoot)
            }

            function c(e) {
                let {
                    overflow: t,
                    overflowX: n,
                    overflowY: r,
                    display: o
                } = g(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
            }

            function d(e) {
                return ["table", "td", "th"].includes(r(e))
            }

            function f(e) {
                return [":popover-open", ":modal"].some(t => {
                    try {
                        return e.matches(t)
                    } catch (e) {
                        return !1
                    }
                })
            }

            function p(e) {
                let t = m(),
                    n = g(e);
                return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some(e => (n.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (n.contain || "").includes(e))
            }

            function v(e) {
                let t = b(e);
                for (; a(t) && !h(t) && !f(t);) {
                    if (p(t)) return t;
                    t = b(t)
                }
                return null
            }

            function m() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function h(e) {
                return ["html", "body", "#document"].includes(r(e))
            }

            function g(e) {
                return o(e).getComputedStyle(e)
            }

            function y(e) {
                return u(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.scrollX,
                    scrollTop: e.scrollY
                }
            }

            function b(e) {
                if ("html" === r(e)) return e;
                let t = e.assignedSlot || e.parentNode || s(e) && e.host || l(e);
                return s(t) ? t.host : t
            }
            n.d(t, {
                Dx: function() {
                    return g
                },
                Jj: function() {
                    return o
                },
                Kx: function() {
                    return function e(t, n, r) {
                        var l;
                        void 0 === n && (n = []), void 0 === r && (r = !0);
                        let i = function e(t) {
                                let n = b(t);
                                return h(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : a(n) && c(n) ? n : e(n)
                            }(t),
                            u = i === (null == (l = t.ownerDocument) ? void 0 : l.body),
                            s = o(i);
                        return u ? n.concat(s, s.visualViewport || [], c(i) ? i : [], s.frameElement && r ? e(s.frameElement) : []) : n.concat(i, e(i, [], r))
                    }
                },
                Lw: function() {
                    return y
                },
                Ow: function() {
                    return b
                },
                Pf: function() {
                    return m
                },
                Py: function() {
                    return h
                },
                Re: function() {
                    return a
                },
                Ze: function() {
                    return d
                },
                ao: function() {
                    return c
                },
                gQ: function() {
                    return v
                },
                hT: function() {
                    return p
                },
                kK: function() {
                    return u
                },
                tF: function() {
                    return l
                },
                tR: function() {
                    return f
                },
                wk: function() {
                    return r
                }
            })
        },
        7848: function(e, t, n) {
            n.d(t, {
                Fp: function() {
                    return o
                },
                GW: function() {
                    return i
                },
                I4: function() {
                    return m
                },
                JB: function() {
                    return T
                },
                KX: function() {
                    return w
                },
                NM: function() {
                    return l
                },
                Qq: function() {
                    return h
                },
                Rn: function() {
                    return v
                },
                VV: function() {
                    return r
                },
                Wh: function() {
                    return g
                },
                gy: function() {
                    return b
                },
                hp: function() {
                    return p
                },
                i8: function() {
                    return y
                },
                k3: function() {
                    return f
                },
                ku: function() {
                    return d
                },
                pw: function() {
                    return x
                },
                uZ: function() {
                    return c
                },
                yd: function() {
                    return P
                },
                ze: function() {
                    return u
                }
            });
            let r = Math.min,
                o = Math.max,
                l = Math.round,
                i = Math.floor,
                u = e => ({
                    x: e,
                    y: e
                }),
                a = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                s = {
                    start: "end",
                    end: "start"
                };

            function c(e, t, n) {
                return o(e, r(t, n))
            }

            function d(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function f(e) {
                return e.split("-")[0]
            }

            function p(e) {
                return e.split("-")[1]
            }

            function v(e) {
                return "x" === e ? "y" : "x"
            }

            function m(e) {
                return "y" === e ? "height" : "width"
            }

            function h(e) {
                return ["top", "bottom"].includes(f(e)) ? "y" : "x"
            }

            function g(e) {
                return v(h(e))
            }

            function y(e, t, n) {
                void 0 === n && (n = !1);
                let r = p(e),
                    o = g(e),
                    l = m(o),
                    i = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                return t.reference[l] > t.floating[l] && (i = x(i)), [i, x(i)]
            }

            function b(e) {
                let t = x(e);
                return [E(e), t, E(t)]
            }

            function E(e) {
                return e.replace(/start|end/g, e => s[e])
            }

            function w(e, t, n, r) {
                let o = p(e),
                    l = function(e, t, n) {
                        let r = ["left", "right"],
                            o = ["right", "left"];
                        switch (e) {
                            case "top":
                            case "bottom":
                                if (n) return t ? o : r;
                                return t ? r : o;
                            case "left":
                            case "right":
                                return t ? ["top", "bottom"] : ["bottom", "top"];
                            default:
                                return []
                        }
                    }(f(e), "start" === n, r);
                return o && (l = l.map(e => e + "-" + o), t && (l = l.concat(l.map(E)))), l
            }

            function x(e) {
                return e.replace(/left|right|bottom|top/g, e => a[e])
            }

            function P(e) {
                return "number" != typeof e ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...e
                } : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function T(e) {
                let {
                    x: t,
                    y: n,
                    width: r,
                    height: o
                } = e;
                return {
                    width: r,
                    height: o,
                    top: n,
                    left: t,
                    right: t + r,
                    bottom: n + o,
                    x: t,
                    y: n
                }
            }
        },
        7551: function(e, t, n) {
            let r;
            n.d(t, {
                R: function() {
                    return o
                }
            });
            var o = ((r = o || {}).Space = " ", r.Enter = "Enter", r.Escape = "Escape", r.Backspace = "Backspace", r.Delete = "Delete", r.ArrowLeft = "ArrowLeft", r.ArrowUp = "ArrowUp", r.ArrowRight = "ArrowRight", r.ArrowDown = "ArrowDown", r.Home = "Home", r.End = "End", r.PageUp = "PageUp", r.PageDown = "PageDown", r.Tab = "Tab", r)
        },
        1221: function(e, t, n) {
            let r, o, l, i, u;
            n.d(t, {
                J2: function() {
                    return eA
                }
            });
            var a = n(6117),
                s = n(3892),
                c = n(2265),
                d = n.t(c, 2),
                f = n(4079),
                p = n(1463),
                v = n(6584),
                m = n(8703),
                h = n(777),
                g = n(9309);

            function y() {
                return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
            }

            function b(e, t, n, r) {
                let o = (0, m.E)(n);
                (0, c.useEffect)(() => {
                    if (e) return document.addEventListener(t, n, r), () => document.removeEventListener(t, n, r);

                    function n(e) {
                        o.current(e)
                    }
                }, [e, t, r])
            }
            class E extends Map {
                get(e) {
                    let t = super.get(e);
                    return void 0 === t && (t = this.factory(e), this.set(e, t)), t
                }
                constructor(e) {
                    super(), this.factory = e
                }
            }

            function w(e, t) {
                let n = e(),
                    r = new Set;
                return {
                    getSnapshot: () => n,
                    subscribe: e => (r.add(e), () => r.delete(e)),
                    dispatch(e) {
                        for (var o = arguments.length, l = Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++) l[i - 1] = arguments[i];
                        let u = t[e].call(n, ...l);
                        u && (n = u, r.forEach(e => e()))
                    }
                }
            }

            function x(e) {
                return (0, c.useSyncExternalStore)(e.subscribe, e.getSnapshot, e.getSnapshot)
            }
            let P = new E(() => w(() => [], {
                ADD(e) {
                    return this.includes(e) ? this : [...this, e]
                },
                REMOVE(e) {
                    let t = this.indexOf(e);
                    if (-1 === t) return this;
                    let n = this.slice();
                    return n.splice(t, 1), n
                }
            }));

            function T(e, t) {
                let n = P.get(t),
                    r = (0, c.useId)(),
                    o = x(n);
                if ((0, p.e)(() => {
                        if (e) return n.dispatch("ADD", r), () => n.dispatch("REMOVE", r)
                    }, [n, e]), !e) return !1;
                let l = o.indexOf(r),
                    i = o.length;
                return -1 === l && (l = i, i += 1), l === i - 1
            }

            function S(e, t, n, r) {
                let o = (0, m.E)(n);
                (0, c.useEffect)(() => {
                    if (e) return window.addEventListener(t, n, r), () => window.removeEventListener(t, n, r);

                    function n(e) {
                        o.current(e)
                    }
                }, [e, t, r])
            }
            var F = n(1498);

            function R() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return (0, c.useMemo)(() => (0, F.r)(...t), [...t])
            }
            var L = n(5180),
                k = n(9080);
            let O = (0, c.createContext)(null);

            function C(e) {
                let {
                    children: t,
                    node: n
                } = e, [r, o] = (0, c.useState)(null), l = M(null != n ? n : r);
                return c.createElement(O.Provider, {
                    value: l
                }, t, null === l && c.createElement(k._, {
                    features: k.x.Hidden,
                    ref: e => {
                        var t, n;
                        if (e) {
                            for (let r of null != (n = null == (t = (0, F.r)(e)) ? void 0 : t.querySelectorAll("html > *, body > *")) ? n : [])
                                if (r !== document.body && r !== document.head && r instanceof HTMLElement && null != r && r.contains(e)) {
                                    o(r);
                                    break
                                }
                        }
                    }
                }))
            }

            function M() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return null != (e = (0, c.useContext)(O)) ? e : t
            }
            let A = w(() => new Map, {
                PUSH(e, t) {
                    var n;
                    let r = null != (n = this.get(e)) ? n : {
                        doc: e,
                        count: 0,
                        d: (0, h.k)(),
                        meta: new Set
                    };
                    return r.count++, r.meta.add(t), this.set(e, r), this
                },
                POP(e, t) {
                    let n = this.get(e);
                    return n && (n.count--, n.meta.delete(t)), this
                },
                SCROLL_PREVENT(e) {
                    let t, {
                            doc: n,
                            d: r,
                            meta: o
                        } = e,
                        l = {
                            doc: n,
                            d: r,
                            meta: function(e) {
                                let t = {};
                                for (let n of e) Object.assign(t, n(t));
                                return t
                            }(o)
                        },
                        i = [y() ? {
                            before(e) {
                                let {
                                    doc: t,
                                    d: n,
                                    meta: r
                                } = e;

                                function o(e) {
                                    return r.containers.flatMap(e => e()).some(t => t.contains(e))
                                }
                                n.microTask(() => {
                                    var e;
                                    if ("auto" !== window.getComputedStyle(t.documentElement).scrollBehavior) {
                                        let e = (0, h.k)();
                                        e.style(t.documentElement, "scrollBehavior", "auto"), n.add(() => n.microTask(() => e.dispose()))
                                    }
                                    let r = null != (e = window.scrollY) ? e : window.pageYOffset,
                                        l = null;
                                    n.addEventListener(t, "click", e => {
                                        if (e.target instanceof HTMLElement) try {
                                            let n = e.target.closest("a");
                                            if (!n) return;
                                            let {
                                                hash: r
                                            } = new URL(n.href), i = t.querySelector(r);
                                            i && !o(i) && (l = i)
                                        } catch (e) {}
                                    }, !0), n.addEventListener(t, "touchstart", e => {
                                        if (e.target instanceof HTMLElement) {
                                            if (o(e.target)) {
                                                let t = e.target;
                                                for (; t.parentElement && o(t.parentElement);) t = t.parentElement;
                                                n.style(t, "overscrollBehavior", "contain")
                                            } else n.style(e.target, "touchAction", "none")
                                        }
                                    }), n.addEventListener(t, "touchmove", e => {
                                        if (e.target instanceof HTMLElement && "INPUT" !== e.target.tagName) {
                                            if (o(e.target)) {
                                                let t = e.target;
                                                for (; t.parentElement && "" !== t.dataset.headlessuiPortal && !(t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth);) t = t.parentElement;
                                                "" === t.dataset.headlessuiPortal && e.preventDefault()
                                            } else e.preventDefault()
                                        }
                                    }, {
                                        passive: !1
                                    }), n.add(() => {
                                        var e;
                                        r !== (null != (e = window.scrollY) ? e : window.pageYOffset) && window.scrollTo(0, r), l && l.isConnected && (l.scrollIntoView({
                                            block: "nearest"
                                        }), l = null)
                                    })
                                })
                            }
                        } : {}, {
                            before(e) {
                                var n;
                                let {
                                    doc: r
                                } = e, o = r.documentElement;
                                t = Math.max(0, (null != (n = r.defaultView) ? n : window).innerWidth - o.clientWidth)
                            },
                            after(e) {
                                let {
                                    doc: n,
                                    d: r
                                } = e, o = n.documentElement, l = Math.max(0, o.clientWidth - o.offsetWidth), i = Math.max(0, t - l);
                                r.style(o, "paddingRight", "".concat(i, "px"))
                            }
                        }, {
                            before(e) {
                                let {
                                    doc: t,
                                    d: n
                                } = e;
                                n.style(t.documentElement, "overflow", "hidden")
                            }
                        }];
                    i.forEach(e => {
                        let {
                            before: t
                        } = e;
                        return null == t ? void 0 : t(l)
                    }), i.forEach(e => {
                        let {
                            after: t
                        } = e;
                        return null == t ? void 0 : t(l)
                    })
                },
                SCROLL_ALLOW(e) {
                    let {
                        d: t
                    } = e;
                    t.dispose()
                },
                TEARDOWN(e) {
                    let {
                        doc: t
                    } = e;
                    this.delete(t)
                }
            });
            A.subscribe(() => {
                let e = A.getSnapshot(),
                    t = new Map;
                for (let [n] of e) t.set(n, n.documentElement.style.overflow);
                for (let n of e.values()) {
                    let e = "hidden" === t.get(n.doc),
                        r = 0 !== n.count;
                    (r && !e || !r && e) && A.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), 0 === n.count && A.dispatch("TEARDOWN", n)
                }
            });
            var I = n(1469),
                N = ((r = N || {})[r.Forwards = 0] = "Forwards", r[r.Backwards = 1] = "Backwards", r);

            function D() {
                let e = (0, c.useRef)(0);
                return S(!0, "keydown", t => {
                    "Tab" === t.key && (e.current = t.shiftKey ? 1 : 0)
                }, !0), e
            }
            var H = n(9299),
                V = ((o = V || {})[o.None = 0] = "None", o[o.Closed = 1] = "Closed", o[o.Enter = 2] = "Enter", o[o.Leave = 4] = "Leave", o);

            function j(e) {
                let t = {};
                for (let n in e) !0 === e[n] && (t["data-".concat(n)] = "");
                return t
            }

            function z(e, t, n, r) {
                let [o, l] = (0, c.useState)(n), {
                    hasFlag: i,
                    addFlag: u,
                    removeFlag: a
                } = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        [t, n] = (0, c.useState)(e),
                        r = (0, c.useCallback)(e => n(e), [t]),
                        o = (0, c.useCallback)(e => n(t => t | e), [t]),
                        l = (0, c.useCallback)(e => (t & e) === e, [t]);
                    return {
                        flags: t,
                        setFlag: r,
                        addFlag: o,
                        hasFlag: l,
                        removeFlag: (0, c.useCallback)(e => n(t => t & ~e), [n]),
                        toggleFlag: (0, c.useCallback)(e => n(t => t ^ e), [n])
                    }
                }(e && o ? 3 : 0), s = (0, c.useRef)(!1), d = (0, c.useRef)(!1), f = (0, H.G)();
                return (0, p.e)(function o() {
                    var i;
                    if (!e) return;
                    n && l(!0);
                    let c = t.current;
                    return c ? (null == (i = null == r ? void 0 : r.start) || i.call(r, n), function(e, t) {
                        let {
                            prepare: n,
                            run: r,
                            done: o,
                            inFlight: l
                        } = t, i = (0, h.k)();
                        return function(e, t) {
                            let {
                                inFlight: n,
                                prepare: r
                            } = t;
                            if (null != n && n.current) {
                                r();
                                return
                            }
                            let o = e.style.transition;
                            e.style.transition = "none", r(), e.offsetHeight, e.style.transition = o
                        }(e, {
                            prepare: n,
                            inFlight: l
                        }), i.nextFrame(() => {
                            i.add(function(e, t) {
                                let n;
                                let r = (n = {
                                        called: !1
                                    }, function() {
                                        for (var e = arguments.length, r = Array(e), o = 0; o < e; o++) r[o] = arguments[o];
                                        if (!n.called) return n.called = !0, t(...r)
                                    }),
                                    o = (0, h.k)();
                                if (!e) return o.dispose;
                                let {
                                    transitionDuration: l,
                                    transitionDelay: i
                                } = getComputedStyle(e), [u, a] = [l, i].map(e => {
                                    let [t = 0] = e.split(",").filter(Boolean).map(e => e.includes("ms") ? parseFloat(e) : 1e3 * parseFloat(e)).sort((e, t) => t - e);
                                    return t
                                }), s = u + a;
                                if (0 !== s) {
                                    let t = o.group(n => {
                                        let o = n.setTimeout(() => {
                                            r(), n.dispose()
                                        }, s);
                                        n.addEventListener(e, "transitionrun", l => {
                                            l.target === l.currentTarget && (o(), n.addEventListener(e, "transitioncancel", e => {
                                                e.target === e.currentTarget && (r(), t())
                                            }))
                                        })
                                    });
                                    o.addEventListener(e, "transitionend", e => {
                                        e.target === e.currentTarget && (r(), o.dispose())
                                    })
                                } else r();
                                return o.dispose
                            }(e, o)), r()
                        }), i.dispose
                    }(c, {
                        inFlight: s,
                        prepare() {
                            d.current ? d.current = !1 : d.current = s.current, s.current = !0, d.current || (n ? (u(3), a(4)) : (u(4), a(2)))
                        },
                        run() {
                            d.current ? n ? (a(3), u(4)) : (a(4), u(3)) : n ? a(1) : u(1)
                        },
                        done() {
                            var e;
                            d.current && "function" == typeof c.getAnimations && c.getAnimations().length > 0 || (s.current = !1, a(7), n || l(!1), null == (e = null == r ? void 0 : r.end) || e.call(r, n))
                        }
                    })) : n ? (u(3), f.nextFrame(() => o())) : void 0
                }, [e, n, t, f]), e ? [o, {
                    closed: i(1),
                    enter: i(2),
                    leave: i(4),
                    transition: i(2) || i(4)
                }] : [n, {
                    closed: void 0,
                    enter: void 0,
                    leave: void 0,
                    transition: void 0
                }]
            }
            let B = (0, c.createContext)(() => {});

            function W(e) {
                let {
                    value: t,
                    children: n
                } = e;
                return c.createElement(B.Provider, {
                    value: t
                }, n)
            }
            var _ = n(913),
                G = n(4674),
                Y = n(8143);
            let K = (0, c.createContext)({
                styles: void 0,
                setReference: () => {},
                setFloating: () => {},
                getReferenceProps: () => ({}),
                getFloatingProps: () => ({}),
                slot: {}
            });
            K.displayName = "FloatingContext";
            let q = (0, c.createContext)(null);

            function U(e) {
                var t, n, r;
                let o, l, i, {
                        children: u,
                        enabled: a = !0
                    } = e,
                    [s, d] = (0, c.useState)(null),
                    [f, m] = (0, c.useState)(0),
                    h = (0, c.useRef)(null),
                    [g, y] = (0, c.useState)(null);
                (0, p.e)(() => {
                    if (!g) return;
                    let e = new MutationObserver(() => {
                        let e = window.getComputedStyle(g).maxHeight,
                            t = parseFloat(e);
                        if (isNaN(t)) return;
                        let n = parseInt(e);
                        isNaN(n) || t !== n && (g.style.maxHeight = "".concat(Math.ceil(t), "px"))
                    });
                    return e.observe(g, {
                        attributes: !0,
                        attributeFilter: ["style"]
                    }), () => {
                        e.disconnect()
                    }
                }, [g]);
                let b = a && null !== s && null !== g,
                    {
                        to: E = "bottom",
                        gap: w = 0,
                        offset: x = 0,
                        padding: P = 0,
                        inner: T
                    } = (o = J(null != (t = null == s ? void 0 : s.gap) ? t : "var(--anchor-gap, 0)", g), l = J(null != (n = null == s ? void 0 : s.offset) ? n : "var(--anchor-offset, 0)", g), i = J(null != (r = null == s ? void 0 : s.padding) ? r : "var(--anchor-padding, 0)", g), { ...s,
                        gap: o,
                        offset: l,
                        padding: i
                    }),
                    [S, F = "center"] = E.split(" ");
                (0, p.e)(() => {
                    b && m(0)
                }, [b]);
                let {
                    refs: R,
                    floatingStyles: L,
                    context: k
                } = (0, _.YF)({
                    open: b,
                    placement: "selection" === S ? "center" === F ? "bottom" : "bottom-".concat(F) : "center" === F ? "".concat(S) : "".concat(S, "-").concat(F),
                    strategy: "absolute",
                    transform: !1,
                    middleware: [(0, G.cv)({
                        mainAxis: "selection" === S ? 0 : w,
                        crossAxis: x
                    }), (0, G.uY)({
                        padding: P
                    }), "selection" !== S && (0, G.RR)({
                        padding: P
                    }), "selection" === S && T ? (0, _.aN)({ ...T,
                        padding: P,
                        overflowRef: h,
                        offset: f,
                        minItemsVisible: 4,
                        referenceOverflowThreshold: P,
                        onFallbackChange(e) {
                            var t, n;
                            if (!e) return;
                            let r = k.elements.floating;
                            if (!r) return;
                            let o = parseFloat(getComputedStyle(r).scrollPaddingBottom) || 0,
                                l = Math.min(4, r.childElementCount),
                                i = 0,
                                u = 0;
                            for (let e of null != (n = null == (t = k.elements.floating) ? void 0 : t.childNodes) ? n : [])
                                if (e instanceof HTMLElement) {
                                    let t = e.offsetTop,
                                        n = t + e.clientHeight + o,
                                        a = r.scrollTop,
                                        s = a + r.clientHeight;
                                    if (t >= a && n <= s) l--;
                                    else {
                                        u = Math.max(0, Math.min(n, s) - Math.max(t, a)), i = e.clientHeight;
                                        break
                                    }
                                }
                            l >= 1 && m(e => {
                                let t = i * l - u + o;
                                return e >= t ? e : t
                            })
                        }
                    }) : null, (0, G.dp)({
                        padding: P,
                        apply(e) {
                            let {
                                availableWidth: t,
                                availableHeight: n,
                                elements: r
                            } = e;
                            Object.assign(r.floating.style, {
                                overflow: "auto",
                                maxWidth: "".concat(t, "px"),
                                maxHeight: "min(var(--anchor-max-height, 100vh), ".concat(n, "px)")
                            })
                        }
                    })].filter(Boolean),
                    whileElementsMounted: Y.Me
                }), [O = S, C = F] = k.placement.split("-");
                "selection" === S && (O = "selection");
                let M = (0, c.useMemo)(() => ({
                        anchor: [O, C].filter(Boolean).join(" ")
                    }), [O, C]),
                    A = (0, _.Rz)(k, {
                        overflowRef: h,
                        onChange: m
                    }),
                    {
                        getReferenceProps: I,
                        getFloatingProps: N
                    } = (0, _.NI)([A]),
                    D = (0, v.z)(e => {
                        y(e), R.setFloating(e)
                    });
                return c.createElement(q.Provider, {
                    value: d
                }, c.createElement(K.Provider, {
                    value: {
                        setFloating: D,
                        setReference: R.setReference,
                        styles: L,
                        getReferenceProps: I,
                        getFloatingProps: N,
                        slot: M
                    }
                }, u))
            }

            function J(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                    r = (0, H.G)(),
                    o = (0, v.z)((e, t) => {
                        if (null == e) return [n, null];
                        if ("number" == typeof e) return [e, null];
                        if ("string" == typeof e) {
                            if (!t) return [n, null];
                            let o = X(e, t);
                            return [o, n => {
                                let l = function e(t) {
                                    let n = /var\((.*)\)/.exec(t);
                                    if (n) {
                                        let t = n[1].indexOf(",");
                                        if (-1 === t) return [n[1]];
                                        let r = n[1].slice(0, t).trim(),
                                            o = n[1].slice(t + 1).trim();
                                        return o ? [r, ...e(o)] : [r]
                                    }
                                    return []
                                }(e); {
                                    let i = l.map(e => window.getComputedStyle(t).getPropertyValue(e));
                                    r.requestAnimationFrame(function u() {
                                        r.nextFrame(u);
                                        let a = !1;
                                        for (let [e, n] of l.entries()) {
                                            let r = window.getComputedStyle(t).getPropertyValue(n);
                                            if (i[e] !== r) {
                                                i[e] = r, a = !0;
                                                break
                                            }
                                        }
                                        if (!a) return;
                                        let s = X(e, t);
                                        o !== s && (n(s), o = s)
                                    })
                                }
                                return r.dispose
                            }]
                        }
                        return [n, null]
                    }),
                    l = (0, c.useMemo)(() => o(e, t)[0], [e, t]),
                    [i = l, u] = (0, c.useState)();
                return (0, p.e)(() => {
                    let [n, r] = o(e, t);
                    if (u(n), r) return r(u)
                }, [e, t]), i
            }

            function X(e, t) {
                let n = document.createElement("div");
                t.appendChild(n), n.style.setProperty("margin-top", "0px", "important"), n.style.setProperty("margin-top", e, "important");
                let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
                return t.removeChild(n), r
            }
            q.displayName = "PlacementContext";
            let Q = (0, c.createContext)(null);
            Q.displayName = "OpenClosedContext";
            var Z = ((l = Z || {})[l.Open = 1] = "Open", l[l.Closed = 2] = "Closed", l[l.Closing = 4] = "Closing", l[l.Opening = 8] = "Opening", l);

            function $() {
                return (0, c.useContext)(Q)
            }

            function ee(e) {
                let {
                    value: t,
                    children: n
                } = e;
                return c.createElement(Q.Provider, {
                    value: t
                }, n)
            }

            function et(e) {
                let {
                    children: t
                } = e;
                return c.createElement(Q.Provider, {
                    value: null
                }, t)
            }

            function en(e) {
                let t = e.parentElement,
                    n = null;
                for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
                let r = (null == t ? void 0 : t.getAttribute("disabled")) === "";
                return !(r && function(e) {
                    if (!e) return !1;
                    let t = e.previousElementSibling;
                    for (; null !== t;) {
                        if (t instanceof HTMLLegendElement) return !1;
                        t = t.previousElementSibling
                    }
                    return !0
                }(n)) && r
            }
            var er = n(5583),
                eo = n(2642),
                el = n(7551),
                ei = n(4887),
                eu = n(8043),
                ea = n(4462);
            let es = (0, c.createContext)(!1),
                ec = c.Fragment,
                ed = (0, eo.yV)(function(e, t) {
                    var n;
                    let r, o, l = (0, c.useRef)(null),
                        i = (0, I.T)((0, I.h)(e => {
                            l.current = e
                        }), t),
                        u = R(l),
                        a = function(e) {
                            let t = (0, c.useContext)(es),
                                n = (0, c.useContext)(ep),
                                r = R(e),
                                [o, l] = (0, c.useState)(() => {
                                    var e;
                                    if (!t && null !== n) return null != (e = n.current) ? e : null;
                                    if (ea.O.isServer) return null;
                                    let o = null == r ? void 0 : r.getElementById("headlessui-portal-root");
                                    if (o) return o;
                                    if (null === r) return null;
                                    let l = r.createElement("div");
                                    return l.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(l)
                                });
                            return (0, c.useEffect)(() => {
                                null !== o && (null != r && r.body.contains(o) || null == r || r.body.appendChild(o))
                            }, [o, r]), (0, c.useEffect)(() => {
                                t || null !== n && l(n.current)
                            }, [n, l, t]), o
                        }(l),
                        [s] = (0, c.useState)(() => {
                            var e;
                            return ea.O.isServer ? null : null != (e = null == u ? void 0 : u.createElement("div")) ? e : null
                        }),
                        f = (0, c.useContext)(ev),
                        m = function() {
                            let e;
                            let t = (e = "undefined" == typeof document, (0, d.useSyncExternalStore)(() => () => {}, () => !1, () => !e)),
                                [n, r] = c.useState(ea.O.isHandoffComplete);
                            return n && !1 === ea.O.isHandoffComplete && r(!1), c.useEffect(() => {
                                !0 !== n && r(!0)
                            }, [n]), c.useEffect(() => ea.O.handoff(), []), !t && n
                        }();
                    return (0, p.e)(() => {
                        !a || !s || a.contains(s) || (s.setAttribute("data-headlessui-portal", ""), a.appendChild(s))
                    }, [a, s]), (0, p.e)(() => {
                        if (s && f) return f.register(s)
                    }, [f, s]), n = () => {
                        var e;
                        a && s && (s instanceof Node && a.contains(s) && a.removeChild(s), a.childNodes.length <= 0 && (null == (e = a.parentElement) || e.removeChild(a)))
                    }, r = (0, v.z)(n), o = (0, c.useRef)(!1), (0, c.useEffect)(() => (o.current = !1, () => {
                        o.current = !0, (0, eu.Y)(() => {
                            o.current && r()
                        })
                    }), [r]), m && a && s ? (0, ei.createPortal)((0, eo.sY)({
                        ourProps: {
                            ref: i
                        },
                        theirProps: e,
                        slot: {},
                        defaultTag: ec,
                        name: "Portal"
                    }), s) : null
                }),
                ef = c.Fragment,
                ep = (0, c.createContext)(null),
                ev = (0, c.createContext)(null),
                em = Object.assign((0, eo.yV)(function(e, t) {
                    let n = (0, I.T)(t),
                        {
                            enabled: r = !0,
                            ...o
                        } = e;
                    return r ? c.createElement(ed, { ...o,
                        ref: n
                    }) : (0, eo.sY)({
                        ourProps: {
                            ref: n
                        },
                        theirProps: o,
                        slot: {},
                        defaultTag: ec,
                        name: "Portal"
                    })
                }), {
                    Group: (0, eo.yV)(function(e, t) {
                        let {
                            target: n,
                            ...r
                        } = e, o = {
                            ref: (0, I.T)(t)
                        };
                        return c.createElement(ep.Provider, {
                            value: n
                        }, (0, eo.sY)({
                            ourProps: o,
                            theirProps: r,
                            defaultTag: ef,
                            name: "Popover.Group"
                        }))
                    })
                });
            var eh = ((i = eh || {})[i.Open = 0] = "Open", i[i.Closed = 1] = "Closed", i),
                eg = ((u = eg || {})[u.TogglePopover = 0] = "TogglePopover", u[u.ClosePopover = 1] = "ClosePopover", u[u.SetButton = 2] = "SetButton", u[u.SetButtonId = 3] = "SetButtonId", u[u.SetPanel = 4] = "SetPanel", u[u.SetPanelId = 5] = "SetPanelId", u);
            let ey = {
                    0: e => ({ ...e,
                        popoverState: (0, er.E)(e.popoverState, {
                            0: 1,
                            1: 0
                        }),
                        __demoMode: !1
                    }),
                    1: e => 1 === e.popoverState ? e : { ...e,
                        popoverState: 1,
                        __demoMode: !1
                    },
                    2: (e, t) => e.button === t.button ? e : { ...e,
                        button: t.button
                    },
                    3: (e, t) => e.buttonId === t.buttonId ? e : { ...e,
                        buttonId: t.buttonId
                    },
                    4: (e, t) => e.panel === t.panel ? e : { ...e,
                        panel: t.panel
                    },
                    5: (e, t) => e.panelId === t.panelId ? e : { ...e,
                        panelId: t.panelId
                    }
                },
                eb = (0, c.createContext)(null);

            function eE(e) {
                let t = (0, c.useContext)(eb);
                if (null === t) {
                    let t = Error("<".concat(e, " /> is missing a parent <Popover /> component."));
                    throw Error.captureStackTrace && Error.captureStackTrace(t, eE), t
                }
                return t
            }
            eb.displayName = "PopoverContext";
            let ew = (0, c.createContext)(null);

            function ex(e) {
                let t = (0, c.useContext)(ew);
                if (null === t) {
                    let t = Error("<".concat(e, " /> is missing a parent <Popover /> component."));
                    throw Error.captureStackTrace && Error.captureStackTrace(t, ex), t
                }
                return t
            }
            ew.displayName = "PopoverAPIContext";
            let eP = (0, c.createContext)(null);

            function eT() {
                return (0, c.useContext)(eP)
            }
            eP.displayName = "PopoverGroupContext";
            let eS = (0, c.createContext)(null);

            function eF(e, t) {
                return (0, er.E)(t.type, ey, e, t)
            }
            eS.displayName = "PopoverPanelContext";
            let eR = eo.VN.RenderStrategy | eo.VN.Static;

            function eL(e, t) {
                let n = (0, c.useId)(),
                    {
                        id: r = "headlessui-popover-backdrop-".concat(n),
                        transition: o = !1,
                        ...l
                    } = e,
                    [{
                        popoverState: i
                    }, u] = eE("Popover.Backdrop"),
                    a = (0, c.useRef)(null),
                    s = (0, I.T)(t, a),
                    d = $(),
                    [f, p] = z(o, a, null !== d ? (d & Z.Open) === Z.Open : 0 === i),
                    m = (0, v.z)(e => {
                        if (en(e.currentTarget)) return e.preventDefault();
                        u({
                            type: 1
                        })
                    }),
                    h = (0, c.useMemo)(() => ({
                        open: 0 === i
                    }), [i]),
                    g = {
                        ref: s,
                        id: r,
                        "aria-hidden": !0,
                        onClick: m,
                        ...j(p)
                    };
                return (0, eo.sY)({
                    ourProps: g,
                    theirProps: l,
                    slot: h,
                    defaultTag: "div",
                    features: eR,
                    visible: f,
                    name: "Popover.Backdrop"
                })
            }
            let ek = eo.VN.RenderStrategy | eo.VN.Static,
                eO = (0, eo.yV)(function(e, t) {
                    var n, r, o, l, i, u, a;
                    let s, d, f, p, h, E, w, x, P, F, L;
                    let {
                        __demoMode: k = !1,
                        ...O
                    } = e, A = (0, c.useRef)(null), N = (0, I.T)(t, (0, I.h)(e => {
                        A.current = e
                    })), D = (0, c.useRef)([]), H = (0, c.useReducer)(eF, {
                        __demoMode: k,
                        popoverState: k ? 0 : 1,
                        buttons: D,
                        button: null,
                        buttonId: null,
                        panel: null,
                        panelId: null,
                        beforePanelSentinel: (0, c.createRef)(),
                        afterPanelSentinel: (0, c.createRef)(),
                        afterButtonSentinel: (0, c.createRef)()
                    }), [{
                        popoverState: V,
                        button: j,
                        buttonId: z,
                        panel: B,
                        panelId: _,
                        beforePanelSentinel: G,
                        afterPanelSentinel: Y,
                        afterButtonSentinel: K
                    }, q] = H, J = R(null != (n = A.current) ? n : j), X = (0, c.useMemo)(() => {
                        if (!j || !B) return !1;
                        for (let e of document.querySelectorAll("body > *"))
                            if (Number(null == e ? void 0 : e.contains(j)) ^ Number(null == e ? void 0 : e.contains(B))) return !0;
                        let e = (0, g.GO)(),
                            t = e.indexOf(j),
                            n = (t + e.length - 1) % e.length,
                            r = (t + 1) % e.length,
                            o = e[n],
                            l = e[r];
                        return !B.contains(o) && !B.contains(l)
                    }, [j, B]), Q = (0, m.E)(z), $ = (0, m.E)(_), et = (0, c.useMemo)(() => ({
                        buttonId: Q,
                        panelId: $,
                        close: () => q({
                            type: 1
                        })
                    }), [Q, $, q]), en = eT(), el = null == en ? void 0 : en.registerPopover, ei = (0, v.z)(() => {
                        var e;
                        return null != (e = null == en ? void 0 : en.isFocusWithinPopoverGroup()) ? e : (null == J ? void 0 : J.activeElement) && ((null == j ? void 0 : j.contains(J.activeElement)) || (null == B ? void 0 : B.contains(J.activeElement)))
                    });
                    (0, c.useEffect)(() => null == el ? void 0 : el(et), [el, et]);
                    let [eu, ea] = (s = (0, c.useContext)(ev), d = (0, c.useRef)([]), f = (0, v.z)(e => (d.current.push(e), s && s.register(e), () => p(e))), p = (0, v.z)(e => {
                        let t = d.current.indexOf(e); - 1 !== t && d.current.splice(t, 1), s && s.unregister(e)
                    }), h = (0, c.useMemo)(() => ({
                        register: f,
                        unregister: p,
                        portals: d
                    }), [f, p, d]), [d, (0, c.useMemo)(() => function(e) {
                        let {
                            children: t
                        } = e;
                        return c.createElement(ev.Provider, {
                            value: h
                        }, t)
                    }, [h])]), es = M(j), ec = function() {
                        let {
                            defaultContainers: e = [],
                            portals: t,
                            mainTreeNode: n
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = R(n), o = (0, v.z)(() => {
                            var o, l;
                            let i = [];
                            for (let t of e) null !== t && (t instanceof HTMLElement ? i.push(t) : "current" in t && t.current instanceof HTMLElement && i.push(t.current));
                            if (null != t && t.current)
                                for (let e of t.current) i.push(e);
                            for (let e of null != (o = null == r ? void 0 : r.querySelectorAll("html > *, body > *")) ? o : []) e !== document.body && e !== document.head && e instanceof HTMLElement && "headlessui-portal-root" !== e.id && (n && (e.contains(n) || e.contains(null == (l = null == n ? void 0 : n.getRootNode()) ? void 0 : l.host)) || i.some(t => e.contains(t)) || i.push(e));
                            return i
                        });
                        return {
                            resolveContainers: o,
                            contains: (0, v.z)(e => o().some(t => t.contains(e)))
                        }
                    }({
                        mainTreeNode: es,
                        portals: eu,
                        defaultContainers: [j, B]
                    });
                    r = null == J ? void 0 : J.defaultView, o = "focus", l = e => {
                        var t, n, r, o, l, i;
                        e.target !== window && e.target instanceof HTMLElement && 0 === V && (ei() || j && B && (ec.contains(e.target) || null != (n = null == (t = G.current) ? void 0 : t.contains) && n.call(t, e.target) || null != (o = null == (r = Y.current) ? void 0 : r.contains) && o.call(r, e.target) || null != (i = null == (l = K.current) ? void 0 : l.contains) && i.call(l, e.target) || q({
                            type: 1
                        })))
                    }, E = (0, m.E)(l), (0, c.useEffect)(() => {
                        function e(e) {
                            E.current(e)
                        }
                        return (r = null != r ? r : window).addEventListener(o, e, !0), () => r.removeEventListener(o, e, !0)
                    }, [r, o, !0]), i = 0 === V, u = ec.resolveContainers, a = (e, t) => {
                        q({
                            type: 1
                        }), (0, g.sP)(t, g.tJ.Loose) || (e.preventDefault(), null == j || j.focus())
                    }, w = T(i, "outside-click"), x = (0, m.E)(a), P = (0, c.useCallback)(function(e, t) {
                        if (e.defaultPrevented) return;
                        let n = t(e);
                        if (null !== n && n.getRootNode().contains(n) && n.isConnected) {
                            for (let t of function e(t) {
                                    return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
                                }(u)) {
                                if (null === t) continue;
                                let r = t instanceof HTMLElement ? t : t.current;
                                if (null != r && r.contains(n) || e.composed && e.composedPath().includes(r)) return
                            }
                            return (0, g.sP)(n, g.tJ.Loose) || -1 === n.tabIndex || e.preventDefault(), x.current(e, n)
                        }
                    }, [x]), F = (0, c.useRef)(null), b(w, "pointerdown", e => {
                        var t, n;
                        F.current = (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target
                    }, !0), b(w, "mousedown", e => {
                        var t, n;
                        F.current = (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target
                    }, !0), b(w, "click", e => {
                        y() || /Android/gi.test(window.navigator.userAgent) || F.current && (P(e, () => F.current), F.current = null)
                    }, !0), L = (0, c.useRef)({
                        x: 0,
                        y: 0
                    }), b(w, "touchstart", e => {
                        L.current.x = e.touches[0].clientX, L.current.y = e.touches[0].clientY
                    }, !0), b(w, "touchend", e => {
                        let t = {
                            x: e.changedTouches[0].clientX,
                            y: e.changedTouches[0].clientY
                        };
                        if (!(Math.abs(t.x - L.current.x) >= 30 || Math.abs(t.y - L.current.y) >= 30)) return P(e, () => e.target instanceof HTMLElement ? e.target : null)
                    }, !0), S(w, "blur", e => P(e, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
                    let ed = (0, v.z)(e => {
                            q({
                                type: 1
                            });
                            let t = e ? e instanceof HTMLElement ? e : "current" in e && e.current instanceof HTMLElement ? e.current : j : j;
                            null == t || t.focus()
                        }),
                        ef = (0, c.useMemo)(() => ({
                            close: ed,
                            isPortalled: X
                        }), [ed, X]),
                        ep = (0, c.useMemo)(() => ({
                            open: 0 === V,
                            close: ed
                        }), [V, ed]);
                    return c.createElement(C, {
                        node: es
                    }, c.createElement(U, null, c.createElement(eS.Provider, {
                        value: null
                    }, c.createElement(eb.Provider, {
                        value: H
                    }, c.createElement(ew.Provider, {
                        value: ef
                    }, c.createElement(W, {
                        value: ed
                    }, c.createElement(ee, {
                        value: (0, er.E)(V, {
                            0: Z.Open,
                            1: Z.Closed
                        })
                    }, c.createElement(ea, null, (0, eo.sY)({
                        ourProps: {
                            ref: N
                        },
                        theirProps: O,
                        slot: ep,
                        defaultTag: "div",
                        name: "Popover"
                    })))))))))
                }),
                eC = (0, eo.yV)(function(e, t) {
                    let n = (0, c.useId)(),
                        {
                            id: r = "headlessui-popover-button-".concat(n),
                            disabled: o = !1,
                            autoFocus: l = !1,
                            ...i
                        } = e,
                        [u, d] = eE("Popover.Button"),
                        {
                            isPortalled: p
                        } = ex("Popover.Button"),
                        m = (0, c.useRef)(null),
                        h = "headlessui-focus-sentinel-".concat((0, c.useId)()),
                        y = eT(),
                        b = null == y ? void 0 : y.closeOthers,
                        E = null !== (0, c.useContext)(eS);
                    (0, c.useEffect)(() => {
                        if (!E) return d({
                            type: 3,
                            buttonId: r
                        }), () => {
                            d({
                                type: 3,
                                buttonId: null
                            })
                        }
                    }, [E, r, d]);
                    let [w] = (0, c.useState)(() => Symbol()), x = (0, I.T)(m, t, (0, c.useContext)(K).setReference, E ? null : e => {
                        if (e) u.buttons.current.push(w);
                        else {
                            let e = u.buttons.current.indexOf(w); - 1 !== e && u.buttons.current.splice(e, 1)
                        }
                        u.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), e && d({
                            type: 2,
                            button: e
                        })
                    }), P = (0, I.T)(m, t), T = R(m), S = (0, v.z)(e => {
                        var t, n, r;
                        if (E) {
                            if (1 === u.popoverState) return;
                            switch (e.key) {
                                case el.R.Space:
                                case el.R.Enter:
                                    e.preventDefault(), null == (n = (t = e.target).click) || n.call(t), d({
                                        type: 1
                                    }), null == (r = u.button) || r.focus()
                            }
                        } else switch (e.key) {
                            case el.R.Space:
                            case el.R.Enter:
                                e.preventDefault(), e.stopPropagation(), 1 === u.popoverState && (null == b || b(u.buttonId)), d({
                                    type: 0
                                });
                                break;
                            case el.R.Escape:
                                if (0 !== u.popoverState) return null == b ? void 0 : b(u.buttonId);
                                if (!m.current || null != T && T.activeElement && !m.current.contains(T.activeElement)) return;
                                e.preventDefault(), e.stopPropagation(), d({
                                    type: 1
                                })
                        }
                    }), F = (0, v.z)(e => {
                        E || e.key === el.R.Space && e.preventDefault()
                    }), O = (0, v.z)(e => {
                        var t, n;
                        en(e.currentTarget) || o || (E ? (d({
                            type: 1
                        }), null == (t = u.button) || t.focus()) : (e.preventDefault(), e.stopPropagation(), 1 === u.popoverState && (null == b || b(u.buttonId)), d({
                            type: 0
                        }), null == (n = u.button) || n.focus()))
                    }), C = (0, v.z)(e => {
                        e.preventDefault(), e.stopPropagation()
                    }), {
                        isFocusVisible: M,
                        focusProps: A
                    } = (0, a.F)({
                        autoFocus: l
                    }), {
                        isHovered: H,
                        hoverProps: V
                    } = (0, s.X)({
                        isDisabled: o
                    }), {
                        pressed: j,
                        pressProps: z
                    } = (0, f.x)({
                        disabled: o
                    }), B = 0 === u.popoverState, W = (0, c.useMemo)(() => ({
                        open: B,
                        active: j || B,
                        disabled: o,
                        hover: H,
                        focus: M,
                        autofocus: l
                    }), [B, H, M, j, o, l]), _ = (0, L.f)(e, m), G = E ? (0, eo.dG)({
                        ref: P,
                        type: _,
                        onKeyDown: S,
                        onClick: O,
                        disabled: o || void 0,
                        autoFocus: l
                    }, A, V, z) : (0, eo.dG)({
                        ref: x,
                        id: u.buttonId,
                        type: _,
                        "aria-expanded": 0 === u.popoverState,
                        "aria-controls": u.panel ? u.panelId : void 0,
                        disabled: o || void 0,
                        autoFocus: l,
                        onKeyDown: S,
                        onKeyUp: F,
                        onClick: O,
                        onMouseDown: C
                    }, A, V, z), Y = D(), q = (0, v.z)(() => {
                        let e = u.panel;
                        e && (0, er.E)(Y.current, {
                            [N.Forwards]: () => (0, g.jA)(e, g.TO.First),
                            [N.Backwards]: () => (0, g.jA)(e, g.TO.Last)
                        }) === g.fE.Error && (0, g.jA)((0, g.GO)().filter(e => "true" !== e.dataset.headlessuiFocusGuard), (0, er.E)(Y.current, {
                            [N.Forwards]: g.TO.Next,
                            [N.Backwards]: g.TO.Previous
                        }), {
                            relativeTo: u.button
                        })
                    });
                    return c.createElement(c.Fragment, null, (0, eo.sY)({
                        ourProps: G,
                        theirProps: i,
                        slot: W,
                        defaultTag: "button",
                        name: "Popover.Button"
                    }), B && !E && p && c.createElement(k._, {
                        id: h,
                        ref: u.afterButtonSentinel,
                        features: k.x.Focusable,
                        "data-headlessui-focus-guard": !0,
                        as: "button",
                        type: "button",
                        onFocus: q
                    }))
                }),
                eM = (0, eo.yV)(eL),
                eA = Object.assign(eO, {
                    Button: eC,
                    Backdrop: (0, eo.yV)(eL),
                    Overlay: eM,
                    Panel: (0, eo.yV)(function(e, t) {
                        var n, r;
                        let o;
                        let l = (0, c.useId)(),
                            {
                                id: i = "headlessui-popover-panel-".concat(l),
                                focus: u = !1,
                                anchor: a,
                                portal: s = !1,
                                modal: d = !1,
                                transition: f = !1,
                                ...y
                            } = e,
                            [b, E] = eE("Popover.Panel"),
                            {
                                close: w,
                                isPortalled: P
                            } = ex("Popover.Panel"),
                            S = "headlessui-focus-sentinel-before-".concat(l),
                            F = "headlessui-focus-sentinel-after-".concat(l),
                            L = (0, c.useRef)(null),
                            O = (0, c.useMemo)(() => a ? "string" == typeof a ? {
                                to: a
                            } : a : null, [a]),
                            [C, M] = function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                                !1 === e && (e = null), "string" == typeof e && (e = {
                                    to: e
                                });
                                let t = (0, c.useContext)(q),
                                    n = (0, c.useMemo)(() => e, [JSON.stringify(e, "undefined" != typeof HTMLElement ? (e, t) => t instanceof HTMLElement ? t.outerHTML : t : void 0)]);
                                (0, p.e)(() => {
                                    null == t || t(null != n ? n : null)
                                }, [t, n]);
                                let r = (0, c.useContext)(K);
                                return (0, c.useMemo)(() => [r.setFloating, e ? r.styles : {}], [r.setFloating, e, r.styles])
                            }(O),
                            H = function() {
                                let {
                                    getFloatingProps: e,
                                    slot: t
                                } = (0, c.useContext)(K);
                                return (0, c.useCallback)(function() {
                                    for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                                    return Object.assign({}, e(...r), {
                                        "data-anchor": t.anchor
                                    })
                                }, [e, t])
                            }();
                        O && (s = !0);
                        let V = (0, I.T)(L, t, O ? C : null, e => {
                                E({
                                    type: 4,
                                    panel: e
                                })
                            }),
                            B = R(L),
                            W = (0, eo.Y2)();
                        (0, p.e)(() => (E({
                            type: 5,
                            panelId: i
                        }), () => {
                            E({
                                type: 5,
                                panelId: null
                            })
                        }), [i, E]);
                        let _ = $(),
                            [G, Y] = z(f, L, null !== _ ? (_ & Z.Open) === Z.Open : 0 === b.popoverState);
                        n = b.button, r = () => {
                                E({
                                    type: 1
                                })
                            }, o = (0, m.E)(e => {
                                let t = e.getBoundingClientRect();
                                0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && r()
                            }), (0, c.useEffect)(() => {
                                if (!G) return;
                                let e = null === n ? null : n instanceof HTMLElement ? n : n.current;
                                if (!e) return;
                                let t = (0, h.k)();
                                if ("undefined" != typeof ResizeObserver) {
                                    let n = new ResizeObserver(() => o.current(e));
                                    n.observe(e), t.add(() => n.disconnect())
                                }
                                if ("undefined" != typeof IntersectionObserver) {
                                    let n = new IntersectionObserver(() => o.current(e));
                                    n.observe(e), t.add(() => n.disconnect())
                                }
                                return () => t.dispose()
                            }, [n, o, G]),
                            function(e, t) {
                                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => [document.body];
                                ! function(e, t) {
                                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => ({
                                            containers: []
                                        }),
                                        r = x(A),
                                        o = t ? r.get(t) : void 0;
                                    o && o.count, (0, p.e)(() => {
                                        if (!(!t || !e)) return A.dispatch("PUSH", t, n), () => A.dispatch("POP", t, n)
                                    }, [e, t])
                                }(T(e, "scroll-lock"), t, e => {
                                    var t;
                                    return {
                                        containers: [...null != (t = e.containers) ? t : [], n]
                                    }
                                })
                            }(!b.__demoMode && d && G, B);
                        let U = (0, v.z)(e => {
                            var t;
                            if (e.key === el.R.Escape) {
                                if (0 !== b.popoverState || !L.current || null != B && B.activeElement && !L.current.contains(B.activeElement)) return;
                                e.preventDefault(), e.stopPropagation(), E({
                                    type: 1
                                }), null == (t = b.button) || t.focus()
                            }
                        });
                        (0, c.useEffect)(() => {
                            var t;
                            e.static || 1 === b.popoverState && (null == (t = e.unmount) || t) && E({
                                type: 4,
                                panel: null
                            })
                        }, [b.popoverState, e.unmount, e.static, E]), (0, c.useEffect)(() => {
                            if (b.__demoMode || !u || 0 !== b.popoverState || !L.current) return;
                            let e = null == B ? void 0 : B.activeElement;
                            L.current.contains(e) || (0, g.jA)(L.current, g.TO.First)
                        }, [b.__demoMode, u, L.current, b.popoverState]);
                        let J = (0, c.useMemo)(() => ({
                                open: 0 === b.popoverState,
                                close: w
                            }), [b.popoverState, w]),
                            X = (0, eo.dG)(O ? H() : {}, {
                                ref: V,
                                id: i,
                                onKeyDown: U,
                                onBlur: u && 0 === b.popoverState ? e => {
                                    var t, n, r, o, l;
                                    let i = e.relatedTarget;
                                    i && L.current && (null != (t = L.current) && t.contains(i) || (E({
                                        type: 1
                                    }), (null != (r = null == (n = b.beforePanelSentinel.current) ? void 0 : n.contains) && r.call(n, i) || null != (l = null == (o = b.afterPanelSentinel.current) ? void 0 : o.contains) && l.call(o, i)) && i.focus({
                                        preventScroll: !0
                                    })))
                                } : void 0,
                                tabIndex: -1,
                                style: { ...y.style,
                                    ...M,
                                    "--button-width": function(e) {
                                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                            n = null === e ? null : "current" in e ? e.current : e,
                                            [r, o] = (0, c.useReducer)(() => ({}), {}),
                                            l = (0, c.useMemo)(() => (function(e) {
                                                if (null === e) return {
                                                    width: 0,
                                                    height: 0
                                                };
                                                let {
                                                    width: t,
                                                    height: n
                                                } = e.getBoundingClientRect();
                                                return {
                                                    width: t,
                                                    height: n
                                                }
                                            })(n), [n, r]);
                                        return (0, p.e)(() => {
                                            if (!n) return;
                                            let e = new ResizeObserver(o);
                                            return e.observe(n), () => {
                                                e.disconnect()
                                            }
                                        }, [n]), t ? {
                                            width: "".concat(l.width, "px"),
                                            height: "".concat(l.height, "px")
                                        } : l
                                    }(b.button, !0).width
                                },
                                ...j(Y)
                            }),
                            Q = D(),
                            ee = (0, v.z)(() => {
                                let e = L.current;
                                e && (0, er.E)(Q.current, {
                                    [N.Forwards]: () => {
                                        var t;
                                        (0, g.jA)(e, g.TO.First) === g.fE.Error && (null == (t = b.afterPanelSentinel.current) || t.focus())
                                    },
                                    [N.Backwards]: () => {
                                        var e;
                                        null == (e = b.button) || e.focus({
                                            preventScroll: !0
                                        })
                                    }
                                })
                            }),
                            en = (0, v.z)(() => {
                                let e = L.current;
                                e && (0, er.E)(Q.current, {
                                    [N.Forwards]: () => {
                                        var e;
                                        if (!b.button) return;
                                        let t = (0, g.GO)(),
                                            n = t.indexOf(b.button),
                                            r = t.slice(0, n + 1),
                                            o = [...t.slice(n + 1), ...r];
                                        for (let t of o.slice())
                                            if ("true" === t.dataset.headlessuiFocusGuard || null != (e = b.panel) && e.contains(t)) {
                                                let e = o.indexOf(t); - 1 !== e && o.splice(e, 1)
                                            }(0, g.jA)(o, g.TO.First, {
                                                sorted: !1
                                            })
                                    },
                                    [N.Backwards]: () => {
                                        var t;
                                        (0, g.jA)(e, g.TO.Previous) === g.fE.Error && (null == (t = b.button) || t.focus())
                                    }
                                })
                            });
                        return c.createElement(et, null, c.createElement(eS.Provider, {
                            value: i
                        }, c.createElement(ew.Provider, {
                            value: {
                                close: w,
                                isPortalled: P
                            }
                        }, c.createElement(em, {
                            enabled: !!s && (e.static || G)
                        }, G && P && c.createElement(k._, {
                            id: S,
                            ref: b.beforePanelSentinel,
                            features: k.x.Focusable,
                            "data-headlessui-focus-guard": !0,
                            as: "button",
                            type: "button",
                            onFocus: ee
                        }), (0, eo.sY)({
                            mergeRefs: W,
                            ourProps: X,
                            theirProps: y,
                            slot: J,
                            defaultTag: "div",
                            features: ek,
                            visible: G,
                            name: "Popover.Panel"
                        }), G && P && c.createElement(k._, {
                            id: F,
                            ref: b.afterPanelSentinel,
                            features: k.x.Focusable,
                            "data-headlessui-focus-guard": !0,
                            as: "button",
                            type: "button",
                            onFocus: en
                        })))))
                    }),
                    Group: (0, eo.yV)(function(e, t) {
                        let n = (0, c.useRef)(null),
                            r = (0, I.T)(n, t),
                            [o, l] = (0, c.useState)([]),
                            i = (0, v.z)(e => {
                                l(t => {
                                    let n = t.indexOf(e);
                                    if (-1 !== n) {
                                        let e = t.slice();
                                        return e.splice(n, 1), e
                                    }
                                    return t
                                })
                            }),
                            u = (0, v.z)(e => (l(t => [...t, e]), () => i(e))),
                            a = (0, v.z)(() => {
                                var e;
                                let t = (0, F.r)(n);
                                if (!t) return !1;
                                let r = t.activeElement;
                                return !!(null != (e = n.current) && e.contains(r)) || o.some(e => {
                                    var n, o;
                                    return (null == (n = t.getElementById(e.buttonId.current)) ? void 0 : n.contains(r)) || (null == (o = t.getElementById(e.panelId.current)) ? void 0 : o.contains(r))
                                })
                            }),
                            s = (0, v.z)(e => {
                                for (let t of o) t.buttonId.current !== e && t.close()
                            }),
                            d = (0, c.useMemo)(() => ({
                                registerPopover: u,
                                unregisterPopover: i,
                                isFocusWithinPopoverGroup: a,
                                closeOthers: s
                            }), [u, i, a, s]),
                            f = (0, c.useMemo)(() => ({}), []);
                        return c.createElement(C, null, c.createElement(eP.Provider, {
                            value: d
                        }, (0, eo.sY)({
                            ourProps: {
                                ref: r
                            },
                            theirProps: e,
                            slot: f,
                            defaultTag: "div",
                            name: "Popover.Group"
                        })))
                    })
                })
        },
        6447: function(e, t, n) {
            let r, o, l;
            n.d(t, {
                OK: function() {
                    return D
                }
            });
            var i = n(6117),
                u = n(3892),
                a = n(2265),
                s = n(4079),
                c = n(6584),
                d = n(1463),
                f = n(8703),
                p = n(5180),
                v = n(1469),
                m = n(9080);

            function h(e) {
                let t, {
                        onFocus: n
                    } = e,
                    [r, o] = (0, a.useState)(!0),
                    l = (t = (0, a.useRef)(!1), (0, d.e)(() => (t.current = !0, () => {
                        t.current = !1
                    }), []), t);
                return r ? a.createElement(m._, {
                    as: "button",
                    type: "button",
                    features: m.x.Focusable,
                    onFocus: e => {
                        e.preventDefault();
                        let t, r = 50;
                        t = requestAnimationFrame(function e() {
                            if (r-- <= 0) {
                                t && cancelAnimationFrame(t);
                                return
                            }
                            if (n()) {
                                if (cancelAnimationFrame(t), !l.current) return;
                                o(!1);
                                return
                            }
                            t = requestAnimationFrame(e)
                        })
                    }
                }) : null
            }
            var g = n(9309),
                y = n(5583),
                b = n(8043),
                E = n(1498),
                w = n(2642);
            let x = a.createContext(null);

            function P(e) {
                let {
                    children: t
                } = e, n = a.useRef({
                    groups: new Map,
                    get(e, t) {
                        var n;
                        let r = this.groups.get(e);
                        r || (r = new Map, this.groups.set(e, r));
                        let o = null != (n = r.get(t)) ? n : 0;
                        return r.set(t, o + 1), [Array.from(r.keys()).indexOf(t), function() {
                            let e = r.get(t);
                            e > 1 ? r.set(t, e - 1) : r.delete(t)
                        }]
                    }
                });
                return a.createElement(x.Provider, {
                    value: n
                }, t)
            }

            function T(e) {
                let t = a.useContext(x);
                if (!t) throw Error("You must wrap your component in a <StableCollection>");
                let n = a.useId(),
                    [r, o] = t.current.get(e, n);
                return a.useEffect(() => o, []), r
            }
            var S = n(7551),
                F = ((r = F || {})[r.Forwards = 0] = "Forwards", r[r.Backwards = 1] = "Backwards", r),
                R = ((o = R || {})[o.Less = -1] = "Less", o[o.Equal = 0] = "Equal", o[o.Greater = 1] = "Greater", o),
                L = ((l = L || {})[l.SetSelectedIndex = 0] = "SetSelectedIndex", l[l.RegisterTab = 1] = "RegisterTab", l[l.UnregisterTab = 2] = "UnregisterTab", l[l.RegisterPanel = 3] = "RegisterPanel", l[l.UnregisterPanel = 4] = "UnregisterPanel", l);
            let k = {
                    0(e, t) {
                        var n;
                        let r = (0, g.z2)(e.tabs, e => e.current),
                            o = (0, g.z2)(e.panels, e => e.current),
                            l = r.filter(e => {
                                var t;
                                return !(null != (t = e.current) && t.hasAttribute("disabled"))
                            }),
                            i = { ...e,
                                tabs: r,
                                panels: o
                            };
                        if (t.index < 0 || t.index > r.length - 1) {
                            let n = (0, y.E)(Math.sign(t.index - e.selectedIndex), {
                                [-1]: () => 1,
                                0: () => (0, y.E)(Math.sign(t.index), {
                                    [-1]: () => 0,
                                    0: () => 0,
                                    1: () => 1
                                }),
                                1: () => 0
                            });
                            if (0 === l.length) return i;
                            let o = (0, y.E)(n, {
                                0: () => r.indexOf(l[0]),
                                1: () => r.indexOf(l[l.length - 1])
                            });
                            return { ...i,
                                selectedIndex: -1 === o ? e.selectedIndex : o
                            }
                        }
                        let u = r.slice(0, t.index),
                            a = [...r.slice(t.index), ...u].find(e => l.includes(e));
                        if (!a) return i;
                        let s = null != (n = r.indexOf(a)) ? n : e.selectedIndex;
                        return -1 === s && (s = e.selectedIndex), { ...i,
                            selectedIndex: s
                        }
                    },
                    1(e, t) {
                        if (e.tabs.includes(t.tab)) return e;
                        let n = e.tabs[e.selectedIndex],
                            r = (0, g.z2)([...e.tabs, t.tab], e => e.current),
                            o = e.selectedIndex;
                        return e.info.current.isControlled || -1 === (o = r.indexOf(n)) && (o = e.selectedIndex), { ...e,
                            tabs: r,
                            selectedIndex: o
                        }
                    },
                    2: (e, t) => ({ ...e,
                        tabs: e.tabs.filter(e => e !== t.tab)
                    }),
                    3: (e, t) => e.panels.includes(t.panel) ? e : { ...e,
                        panels: (0, g.z2)([...e.panels, t.panel], e => e.current)
                    },
                    4: (e, t) => ({ ...e,
                        panels: e.panels.filter(e => e !== t.panel)
                    })
                },
                O = (0, a.createContext)(null);

            function C(e) {
                let t = (0, a.useContext)(O);
                if (null === t) {
                    let t = Error("<".concat(e, " /> is missing a parent <Tab.Group /> component."));
                    throw Error.captureStackTrace && Error.captureStackTrace(t, C), t
                }
                return t
            }
            O.displayName = "TabsDataContext";
            let M = (0, a.createContext)(null);

            function A(e) {
                let t = (0, a.useContext)(M);
                if (null === t) {
                    let t = Error("<".concat(e, " /> is missing a parent <Tab.Group /> component."));
                    throw Error.captureStackTrace && Error.captureStackTrace(t, A), t
                }
                return t
            }

            function I(e, t) {
                return (0, y.E)(t.type, k, e, t)
            }
            M.displayName = "TabsActionsContext";
            let N = w.VN.RenderStrategy | w.VN.Static,
                D = Object.assign((0, w.yV)(function(e, t) {
                    var n, r;
                    let o = (0, a.useId)(),
                        {
                            id: l = "headlessui-tabs-tab-".concat(o),
                            disabled: f = !1,
                            autoFocus: m = !1,
                            ...h
                        } = e,
                        {
                            orientation: x,
                            activation: P,
                            selectedIndex: F,
                            tabs: R,
                            panels: L
                        } = C("Tab"),
                        k = A("Tab"),
                        O = C("Tab"),
                        M = (0, a.useRef)(null),
                        I = (0, v.T)(M, t);
                    (0, d.e)(() => k.registerTab(M), [k, M]);
                    let N = T("tabs"),
                        D = R.indexOf(M); - 1 === D && (D = N);
                    let H = D === F,
                        V = (0, c.z)(e => {
                            var t;
                            let n = e();
                            if (n === g.fE.Success && "auto" === P) {
                                let e = null == (t = (0, E.r)(M)) ? void 0 : t.activeElement,
                                    n = O.tabs.findIndex(t => t.current === e); - 1 !== n && k.change(n)
                            }
                            return n
                        }),
                        j = (0, c.z)(e => {
                            let t = R.map(e => e.current).filter(Boolean);
                            if (e.key === S.R.Space || e.key === S.R.Enter) {
                                e.preventDefault(), e.stopPropagation(), k.change(D);
                                return
                            }
                            switch (e.key) {
                                case S.R.Home:
                                case S.R.PageUp:
                                    return e.preventDefault(), e.stopPropagation(), V(() => (0, g.jA)(t, g.TO.First));
                                case S.R.End:
                                case S.R.PageDown:
                                    return e.preventDefault(), e.stopPropagation(), V(() => (0, g.jA)(t, g.TO.Last))
                            }
                            if (V(() => (0, y.E)(x, {
                                    vertical: () => e.key === S.R.ArrowUp ? (0, g.jA)(t, g.TO.Previous | g.TO.WrapAround) : e.key === S.R.ArrowDown ? (0, g.jA)(t, g.TO.Next | g.TO.WrapAround) : g.fE.Error,
                                    horizontal: () => e.key === S.R.ArrowLeft ? (0, g.jA)(t, g.TO.Previous | g.TO.WrapAround) : e.key === S.R.ArrowRight ? (0, g.jA)(t, g.TO.Next | g.TO.WrapAround) : g.fE.Error
                                })) === g.fE.Success) return e.preventDefault()
                        }),
                        z = (0, a.useRef)(!1),
                        B = (0, c.z)(() => {
                            var e;
                            z.current || (z.current = !0, null == (e = M.current) || e.focus({
                                preventScroll: !0
                            }), k.change(D), (0, b.Y)(() => {
                                z.current = !1
                            }))
                        }),
                        W = (0, c.z)(e => {
                            e.preventDefault()
                        }),
                        {
                            isFocusVisible: _,
                            focusProps: G
                        } = (0, i.F)({
                            autoFocus: m
                        }),
                        {
                            isHovered: Y,
                            hoverProps: K
                        } = (0, u.X)({
                            isDisabled: f
                        }),
                        {
                            pressed: q,
                            pressProps: U
                        } = (0, s.x)({
                            disabled: f
                        }),
                        J = (0, a.useMemo)(() => ({
                            selected: H,
                            hover: Y,
                            active: q,
                            focus: _,
                            autofocus: m,
                            disabled: f
                        }), [H, Y, _, q, m, f]),
                        X = (0, w.dG)({
                            ref: I,
                            onKeyDown: j,
                            onMouseDown: W,
                            onClick: B,
                            id: l,
                            role: "tab",
                            type: (0, p.f)(e, M),
                            "aria-controls": null == (r = null == (n = L[D]) ? void 0 : n.current) ? void 0 : r.id,
                            "aria-selected": H,
                            tabIndex: H ? 0 : -1,
                            disabled: f || void 0,
                            autoFocus: m
                        }, G, K, U);
                    return (0, w.sY)({
                        ourProps: X,
                        theirProps: h,
                        slot: J,
                        defaultTag: "button",
                        name: "Tabs.Tab"
                    })
                }), {
                    Group: (0, w.yV)(function(e, t) {
                        let {
                            defaultIndex: n = 0,
                            vertical: r = !1,
                            manual: o = !1,
                            onChange: l,
                            selectedIndex: i = null,
                            ...u
                        } = e, s = r ? "vertical" : "horizontal", p = o ? "manual" : "auto", m = null !== i, y = (0, f.E)({
                            isControlled: m
                        }), b = (0, v.T)(t), [E, x] = (0, a.useReducer)(I, {
                            info: y,
                            selectedIndex: null != i ? i : n,
                            tabs: [],
                            panels: []
                        }), T = (0, a.useMemo)(() => ({
                            selectedIndex: E.selectedIndex
                        }), [E.selectedIndex]), S = (0, f.E)(l || (() => {})), F = (0, f.E)(E.tabs), R = (0, a.useMemo)(() => ({
                            orientation: s,
                            activation: p,
                            ...E
                        }), [s, p, E]), L = (0, c.z)(e => (x({
                            type: 1,
                            tab: e
                        }), () => x({
                            type: 2,
                            tab: e
                        }))), k = (0, c.z)(e => (x({
                            type: 3,
                            panel: e
                        }), () => x({
                            type: 4,
                            panel: e
                        }))), C = (0, c.z)(e => {
                            A.current !== e && S.current(e), m || x({
                                type: 0,
                                index: e
                            })
                        }), A = (0, f.E)(m ? e.selectedIndex : E.selectedIndex), N = (0, a.useMemo)(() => ({
                            registerTab: L,
                            registerPanel: k,
                            change: C
                        }), []);
                        return (0, d.e)(() => {
                            x({
                                type: 0,
                                index: null != i ? i : n
                            })
                        }, [i]), (0, d.e)(() => {
                            if (void 0 === A.current || E.tabs.length <= 0) return;
                            let e = (0, g.z2)(E.tabs, e => e.current);
                            e.some((e, t) => E.tabs[t] !== e) && C(e.indexOf(E.tabs[A.current]))
                        }), a.createElement(P, null, a.createElement(M.Provider, {
                            value: N
                        }, a.createElement(O.Provider, {
                            value: R
                        }, R.tabs.length <= 0 && a.createElement(h, {
                            onFocus: () => {
                                var e, t;
                                for (let n of F.current)
                                    if ((null == (e = n.current) ? void 0 : e.tabIndex) === 0) return null == (t = n.current) || t.focus(), !0;
                                return !1
                            }
                        }), (0, w.sY)({
                            ourProps: {
                                ref: b
                            },
                            theirProps: u,
                            slot: T,
                            defaultTag: "div",
                            name: "Tabs"
                        }))))
                    }),
                    List: (0, w.yV)(function(e, t) {
                        let {
                            orientation: n,
                            selectedIndex: r
                        } = C("Tab.List"), o = (0, v.T)(t), l = (0, a.useMemo)(() => ({
                            selectedIndex: r
                        }), [r]);
                        return (0, w.sY)({
                            ourProps: {
                                ref: o,
                                role: "tablist",
                                "aria-orientation": n
                            },
                            theirProps: e,
                            slot: l,
                            defaultTag: "div",
                            name: "Tabs.List"
                        })
                    }),
                    Panels: (0, w.yV)(function(e, t) {
                        let {
                            selectedIndex: n
                        } = C("Tab.Panels"), r = (0, v.T)(t), o = (0, a.useMemo)(() => ({
                            selectedIndex: n
                        }), [n]);
                        return (0, w.sY)({
                            ourProps: {
                                ref: r
                            },
                            theirProps: e,
                            slot: o,
                            defaultTag: "div",
                            name: "Tabs.Panels"
                        })
                    }),
                    Panel: (0, w.yV)(function(e, t) {
                        var n, r, o, l;
                        let u = (0, a.useId)(),
                            {
                                id: s = "headlessui-tabs-panel-".concat(u),
                                tabIndex: c = 0,
                                ...f
                            } = e,
                            {
                                selectedIndex: p,
                                tabs: h,
                                panels: g
                            } = C("Tab.Panel"),
                            y = A("Tab.Panel"),
                            b = (0, a.useRef)(null),
                            E = (0, v.T)(b, t);
                        (0, d.e)(() => y.registerPanel(b), [y, b]);
                        let x = T("panels"),
                            P = g.indexOf(b); - 1 === P && (P = x);
                        let S = P === p,
                            {
                                isFocusVisible: F,
                                focusProps: R
                            } = (0, i.F)(),
                            L = (0, a.useMemo)(() => ({
                                selected: S,
                                focus: F
                            }), [S, F]),
                            k = (0, w.dG)({
                                ref: E,
                                id: s,
                                role: "tabpanel",
                                "aria-labelledby": null == (r = null == (n = h[P]) ? void 0 : n.current) ? void 0 : r.id,
                                tabIndex: S ? c : -1
                            }, R);
                        return S || null != (o = f.unmount) && !o || null != (l = f.static) && l ? (0, w.sY)({
                            ourProps: k,
                            theirProps: f,
                            slot: L,
                            defaultTag: "div",
                            features: N,
                            visible: S,
                            name: "Tabs.Panel"
                        }) : a.createElement(m._, {
                            "aria-hidden": "true",
                            ...k
                        })
                    })
                })
        },
        4079: function(e, t, n) {
            n.d(t, {
                x: function() {
                    return u
                }
            });
            var r = n(2265),
                o = n(1498),
                l = n(9299),
                i = n(6584);

            function u() {
                let {
                    disabled: e = !1
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = (0, r.useRef)(null), [n, u] = (0, r.useState)(!1), a = (0, l.G)(), s = (0, i.z)(() => {
                    t.current = null, u(!1), a.dispose()
                }), c = (0, i.z)(e => {
                    if (a.dispose(), null === t.current) {
                        t.current = e.currentTarget, u(!0); {
                            let n = (0, o.r)(e.currentTarget);
                            a.addEventListener(n, "pointerup", s, !1), a.addEventListener(n, "pointermove", e => {
                                if (t.current) {
                                    var n, r;
                                    let o, l;
                                    u((o = e.width / 2, l = e.height / 2, n = {
                                        top: e.clientY - l,
                                        right: e.clientX + o,
                                        bottom: e.clientY + l,
                                        left: e.clientX - o
                                    }, r = t.current.getBoundingClientRect(), !(!n || !r || n.right < r.left || n.left > r.right || n.bottom < r.top || n.top > r.bottom)))
                                }
                            }, !1), a.addEventListener(n, "pointercancel", s, !1)
                        }
                    }
                });
                return {
                    pressed: n,
                    pressProps: e ? {} : {
                        onPointerDown: c,
                        onPointerUp: s,
                        onClick: s
                    }
                }
            }
        },
        9299: function(e, t, n) {
            n.d(t, {
                G: function() {
                    return l
                }
            });
            var r = n(2265),
                o = n(777);

            function l() {
                let [e] = (0, r.useState)(o.k);
                return (0, r.useEffect)(() => () => e.dispose(), [e]), e
            }
        },
        6584: function(e, t, n) {
            n.d(t, {
                z: function() {
                    return l
                }
            });
            var r = n(2265),
                o = n(8703);
            let l = function(e) {
                let t = (0, o.E)(e);
                return r.useCallback(function() {
                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    return t.current(...n)
                }, [t])
            }
        },
        1463: function(e, t, n) {
            n.d(t, {
                e: function() {
                    return l
                }
            });
            var r = n(2265),
                o = n(4462);
            let l = (e, t) => {
                o.O.isServer ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t)
            }
        },
        8703: function(e, t, n) {
            n.d(t, {
                E: function() {
                    return l
                }
            });
            var r = n(2265),
                o = n(1463);

            function l(e) {
                let t = (0, r.useRef)(e);
                return (0, o.e)(() => {
                    t.current = e
                }, [e]), t
            }
        },
        5180: function(e, t, n) {
            n.d(t, {
                f: function() {
                    return i
                }
            });
            var r = n(2265),
                o = n(1463);

            function l(e) {
                var t;
                if (e.type) return e.type;
                let n = null != (t = e.as) ? t : "button";
                if ("string" == typeof n && "button" === n.toLowerCase()) return "button"
            }

            function i(e, t) {
                let [n, i] = (0, r.useState)(() => l(e));
                return (0, o.e)(() => {
                    i(l(e))
                }, [e.type, e.as]), (0, o.e)(() => {
                    n || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && i("button")
                }, [n, t]), n
            }
        },
        1469: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return u
                },
                h: function() {
                    return i
                }
            });
            var r = n(2265),
                o = n(6584);
            let l = Symbol();

            function i(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return Object.assign(e, {
                    [l]: t
                })
            }

            function u() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let i = (0, r.useRef)(t);
                (0, r.useEffect)(() => {
                    i.current = t
                }, [t]);
                let u = (0, o.z)(e => {
                    for (let t of i.current) null != t && ("function" == typeof t ? t(e) : t.current = e)
                });
                return t.every(e => null == e || (null == e ? void 0 : e[l])) ? void 0 : u
            }
        },
        9080: function(e, t, n) {
            let r;
            n.d(t, {
                _: function() {
                    return i
                },
                x: function() {
                    return l
                }
            });
            var o = n(2642),
                l = ((r = l || {})[r.None = 1] = "None", r[r.Focusable = 2] = "Focusable", r[r.Hidden = 4] = "Hidden", r);
            let i = (0, o.yV)(function(e, t) {
                var n;
                let {
                    features: r = 1,
                    ...l
                } = e, i = {
                    ref: t,
                    "aria-hidden": (2 & r) == 2 || (null != (n = l["aria-hidden"]) ? n : void 0),
                    hidden: (4 & r) == 4 || void 0,
                    style: {
                        position: "fixed",
                        top: 1,
                        left: 1,
                        width: 1,
                        height: 0,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        borderWidth: "0",
                        ...(4 & r) == 4 && (2 & r) != 2 && {
                            display: "none"
                        }
                    }
                };
                return (0, o.sY)({
                    ourProps: i,
                    theirProps: l,
                    slot: {},
                    defaultTag: "span",
                    name: "Hidden"
                })
            })
        },
        777: function(e, t, n) {
            n.d(t, {
                k: function() {
                    return function e() {
                        let t = [],
                            n = {
                                addEventListener: (e, t, r, o) => (e.addEventListener(t, r, o), n.add(() => e.removeEventListener(t, r, o))),
                                requestAnimationFrame() {
                                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                    let o = requestAnimationFrame(...t);
                                    return n.add(() => cancelAnimationFrame(o))
                                },
                                nextFrame() {
                                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                    return n.requestAnimationFrame(() => n.requestAnimationFrame(...t))
                                },
                                setTimeout() {
                                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                    let o = setTimeout(...t);
                                    return n.add(() => clearTimeout(o))
                                },
                                microTask() {
                                    for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                                    let l = {
                                        current: !0
                                    };
                                    return (0, r.Y)(() => {
                                        l.current && t[0]()
                                    }), n.add(() => {
                                        l.current = !1
                                    })
                                },
                                style(e, t, n) {
                                    let r = e.style.getPropertyValue(t);
                                    return Object.assign(e.style, {
                                        [t]: n
                                    }), this.add(() => {
                                        Object.assign(e.style, {
                                            [t]: r
                                        })
                                    })
                                },
                                group(t) {
                                    let n = e();
                                    return t(n), this.add(() => n.dispose())
                                },
                                add: e => (t.includes(e) || t.push(e), () => {
                                    let n = t.indexOf(e);
                                    if (n >= 0)
                                        for (let e of t.splice(n, 1)) e()
                                }),
                                dispose() {
                                    for (let e of t.splice(0)) e()
                                }
                            };
                        return n
                    }
                }
            });
            var r = n(8043)
        },
        4462: function(e, t, n) {
            n.d(t, {
                O: function() {
                    return u
                }
            });
            var r = Object.defineProperty,
                o = (e, t, n) => t in e ? r(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                l = (e, t, n) => (o(e, "symbol" != typeof t ? t + "" : t, n), n);
            class i {
                set(e) {
                    this.current !== e && (this.handoffState = "pending", this.currentId = 0, this.current = e)
                }
                reset() {
                    this.set(this.detect())
                }
                nextId() {
                    return ++this.currentId
                }
                get isServer() {
                    return "server" === this.current
                }
                get isClient() {
                    return "client" === this.current
                }
                detect() {
                    return "undefined" == typeof window || "undefined" == typeof document ? "server" : "client"
                }
                handoff() {
                    "pending" === this.handoffState && (this.handoffState = "complete")
                }
                get isHandoffComplete() {
                    return "complete" === this.handoffState
                }
                constructor() {
                    l(this, "current", this.detect()), l(this, "handoffState", "pending"), l(this, "currentId", 0)
                }
            }
            let u = new i
        },
        9309: function(e, t, n) {
            let r, o, l, i, u;
            n.d(t, {
                GO: function() {
                    return m
                },
                TO: function() {
                    return f
                },
                fE: function() {
                    return p
                },
                jA: function() {
                    return E
                },
                sP: function() {
                    return g
                },
                tJ: function() {
                    return h
                },
                z2: function() {
                    return b
                }
            });
            var a = n(5583),
                s = n(1498);
            let c = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => "".concat(e, ":not([tabindex='-1'])")).join(","),
                d = ["[data-autofocus]"].map(e => "".concat(e, ":not([tabindex='-1'])")).join(",");
            var f = ((r = f || {})[r.First = 1] = "First", r[r.Previous = 2] = "Previous", r[r.Next = 4] = "Next", r[r.Last = 8] = "Last", r[r.WrapAround = 16] = "WrapAround", r[r.NoScroll = 32] = "NoScroll", r[r.AutoFocus = 64] = "AutoFocus", r),
                p = ((o = p || {})[o.Error = 0] = "Error", o[o.Overflow = 1] = "Overflow", o[o.Success = 2] = "Success", o[o.Underflow = 3] = "Underflow", o),
                v = ((l = v || {})[l.Previous = -1] = "Previous", l[l.Next = 1] = "Next", l);

            function m() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body;
                return null == e ? [] : Array.from(e.querySelectorAll(c)).sort((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)))
            }
            var h = ((i = h || {})[i.Strict = 0] = "Strict", i[i.Loose = 1] = "Loose", i);

            function g(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return e !== (null == (t = (0, s.r)(e)) ? void 0 : t.body) && (0, a.E)(n, {
                    0: () => e.matches(c),
                    1() {
                        let t = e;
                        for (; null !== t;) {
                            if (t.matches(c)) return !0;
                            t = t.parentElement
                        }
                        return !1
                    }
                })
            }
            var y = ((u = y || {})[u.Keyboard = 0] = "Keyboard", u[u.Mouse = 1] = "Mouse", u);

            function b(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e => e;
                return e.slice().sort((e, n) => {
                    let r = t(e),
                        o = t(n);
                    if (null === r || null === o) return 0;
                    let l = r.compareDocumentPosition(o);
                    return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
                })
            }

            function E(e, t) {
                var n, r, o;
                let {
                    sorted: l = !0,
                    relativeTo: i = null,
                    skipElements: u = []
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, s = Array.isArray(e) ? l ? b(e) : e : 64 & t ? function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body;
                    return null == e ? [] : Array.from(e.querySelectorAll(d)).sort((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)))
                }(e) : m(e);
                u.length > 0 && s.length > 1 && (s = s.filter(e => !u.some(t => null != t && "current" in t ? (null == t ? void 0 : t.current) === e : t === e))), i = null != i ? i : a.activeElement;
                let c = (() => {
                        if (5 & t) return 1;
                        if (10 & t) return -1;
                        throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    f = (() => {
                        if (1 & t) return 0;
                        if (2 & t) return Math.max(0, s.indexOf(i)) - 1;
                        if (4 & t) return Math.max(0, s.indexOf(i)) + 1;
                        if (8 & t) return s.length - 1;
                        throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    p = 32 & t ? {
                        preventScroll: !0
                    } : {},
                    v = 0,
                    h = s.length,
                    g;
                do {
                    if (v >= h || v + h <= 0) return 0;
                    let e = f + v;
                    if (16 & t) e = (e + h) % h;
                    else {
                        if (e < 0) return 3;
                        if (e >= h) return 1
                    }
                    null == (g = s[e]) || g.focus(p), v += c
                } while (g !== a.activeElement);
                return 6 & t && null != (o = null == (r = null == (n = g) ? void 0 : n.matches) ? void 0 : r.call(n, "textarea,input")) && o && g.select(), 2
            }
            "undefined" != typeof window && "undefined" != typeof document && (document.addEventListener("keydown", e => {
                e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
            }, !0), document.addEventListener("click", e => {
                1 === e.detail ? delete document.documentElement.dataset.headlessuiFocusVisible : 0 === e.detail && (document.documentElement.dataset.headlessuiFocusVisible = "")
            }, !0))
        },
        5583: function(e, t, n) {
            n.d(t, {
                E: function() {
                    return r
                }
            });

            function r(e, t) {
                for (var n = arguments.length, o = Array(n > 2 ? n - 2 : 0), l = 2; l < n; l++) o[l - 2] = arguments[l];
                if (e in t) {
                    let n = t[e];
                    return "function" == typeof n ? n(...o) : n
                }
                let i = Error('Tried to handle "'.concat(e, '" but there is no handler defined. Only defined handlers are: ').concat(Object.keys(t).map(e => '"'.concat(e, '"')).join(", "), "."));
                throw Error.captureStackTrace && Error.captureStackTrace(i, r), i
            }
        },
        8043: function(e, t, n) {
            n.d(t, {
                Y: function() {
                    return r
                }
            });

            function r(e) {
                "function" == typeof queueMicrotask ? queueMicrotask(e) : Promise.resolve().then(e).catch(e => setTimeout(() => {
                    throw e
                }))
            }
        },
        1498: function(e, t, n) {
            n.d(t, {
                r: function() {
                    return o
                }
            });
            var r = n(4462);

            function o(e) {
                return r.O.isServer ? null : e instanceof Node ? e.ownerDocument : null != e && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
            }
        },
        2642: function(e, t, n) {
            let r, o;
            n.d(t, {
                VN: function() {
                    return a
                },
                yV: function() {
                    return h
                },
                dG: function() {
                    return m
                },
                sY: function() {
                    return c
                },
                Y2: function() {
                    return f
                }
            });
            var l = n(2265);

            function i() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return Array.from(new Set(t.flatMap(e => "string" == typeof e ? e.split(" ") : []))).filter(Boolean).join(" ")
            }
            var u = n(5583),
                a = ((r = a || {})[r.None = 0] = "None", r[r.RenderStrategy = 1] = "RenderStrategy", r[r.Static = 2] = "Static", r),
                s = ((o = s || {})[o.Unmount = 0] = "Unmount", o[o.Hidden = 1] = "Hidden", o);

            function c(e) {
                let {
                    ourProps: t,
                    theirProps: n,
                    slot: r,
                    defaultTag: o,
                    features: l,
                    visible: i = !0,
                    name: a,
                    mergeRefs: s
                } = e;
                s = null != s ? s : p;
                let c = v(n, t);
                if (i) return d(c, r, o, a, s);
                let f = null != l ? l : 0;
                if (2 & f) {
                    let {
                        static: e = !1,
                        ...t
                    } = c;
                    if (e) return d(t, r, o, a, s)
                }
                if (1 & f) {
                    let {
                        unmount: e = !0,
                        ...t
                    } = c;
                    return (0, u.E)(e ? 0 : 1, {
                        0: () => null,
                        1: () => d({ ...t,
                            hidden: !0,
                            style: {
                                display: "none"
                            }
                        }, r, o, a, s)
                    })
                }
                return d(c, r, o, a, s)
            }

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    o = arguments.length > 4 ? arguments[4] : void 0,
                    {
                        as: u = n,
                        children: a,
                        refName: s = "ref",
                        ...c
                    } = y(e, ["unmount", "static"]),
                    d = void 0 !== e.ref ? {
                        [s]: e.ref
                    } : {},
                    f = "function" == typeof a ? a(t) : a;
                "className" in c && c.className && "function" == typeof c.className && (c.className = c.className(t)), c["aria-labelledby"] && c["aria-labelledby"] === c.id && (c["aria-labelledby"] = void 0);
                let p = {};
                if (t) {
                    let e = !1,
                        n = [];
                    for (let [r, o] of Object.entries(t)) "boolean" == typeof o && (e = !0), !0 === o && n.push(r.replace(/([A-Z])/g, e => "-".concat(e.toLowerCase())));
                    if (e)
                        for (let e of (p["data-headlessui-state"] = n.join(" "), n)) p["data-".concat(e)] = ""
                }
                if (u === l.Fragment && (Object.keys(g(c)).length > 0 || Object.keys(g(p)).length > 0)) {
                    if (!(0, l.isValidElement)(f) || Array.isArray(f) && f.length > 1) {
                        if (Object.keys(g(c)).length > 0) throw Error(['Passing props on "Fragment"!', "", "The current component <".concat(r, ' /> is rendering a "Fragment".'), "However we need to passthrough the following props:", Object.keys(g(c)).concat(Object.keys(g(p))).map(e => "  - ".concat(e)).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(e => "  - ".concat(e)).join("\n")].join("\n"))
                    } else {
                        let e = f.props,
                            t = null == e ? void 0 : e.className,
                            n = "function" == typeof t ? function() {
                                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                return i(t(...n), c.className)
                            } : i(t, c.className),
                            r = v(f.props, g(y(c, ["ref"])));
                        for (let e in p) e in r && delete p[e];
                        return (0, l.cloneElement)(f, Object.assign({}, r, p, d, {
                            ref: o(f.ref, d.ref)
                        }, n ? {
                            className: n
                        } : {}))
                    }
                }
                return (0, l.createElement)(u, Object.assign({}, y(c, ["ref"]), u !== l.Fragment && d, u !== l.Fragment && p), f)
            }

            function f() {
                let e = (0, l.useRef)([]),
                    t = (0, l.useCallback)(t => {
                        for (let n of e.current) null != n && ("function" == typeof n ? n(t) : n.current = t)
                    }, []);
                return function() {
                    for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    if (!r.every(e => null == e)) return e.current = r, t
                }
            }

            function p() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return t.every(e => null == e) ? void 0 : e => {
                    for (let n of t) null != n && ("function" == typeof n ? n(e) : n.current = e)
                }
            }

            function v() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (0 === t.length) return {};
                if (1 === t.length) return t[0];
                let r = {},
                    o = {};
                for (let e of t)
                    for (let t in e) t.startsWith("on") && "function" == typeof e[t] ? (null != o[t] || (o[t] = []), o[t].push(e[t])) : r[t] = e[t];
                if (r.disabled || r["aria-disabled"])
                    for (let e in o) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(e) && (o[e] = [e => {
                        var t;
                        return null == (t = null == e ? void 0 : e.preventDefault) ? void 0 : t.call(e)
                    }]);
                for (let e in o) Object.assign(r, {
                    [e](t) {
                        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++) r[l - 1] = arguments[l];
                        for (let n of o[e]) {
                            if ((t instanceof Event || (null == t ? void 0 : t.nativeEvent) instanceof Event) && t.defaultPrevented) return;
                            n(t, ...r)
                        }
                    }
                });
                return r
            }

            function m() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (0 === t.length) return {};
                if (1 === t.length) return t[0];
                let r = {},
                    o = {};
                for (let e of t)
                    for (let t in e) t.startsWith("on") && "function" == typeof e[t] ? (null != o[t] || (o[t] = []), o[t].push(e[t])) : r[t] = e[t];
                for (let e in o) Object.assign(r, {
                    [e]() {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        for (let t of o[e]) null == t || t(...n)
                    }
                });
                return r
            }

            function h(e) {
                var t;
                return Object.assign((0, l.forwardRef)(e), {
                    displayName: null != (t = e.displayName) ? t : e.name
                })
            }

            function g(e) {
                let t = Object.assign({}, e);
                for (let e in t) void 0 === t[e] && delete t[e];
                return t
            }

            function y(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = Object.assign({}, e);
                for (let e of t) e in n && delete n[e];
                return n
            }
        },
        6117: function(e, t, n) {
            n.d(t, {
                F: function() {
                    return S
                }
            });
            let r = e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
                },
                o = e => e && "window" in e && e.window === e ? e : r(e).defaultView || window;
            var l = n(2265);
            let i = null,
                u = new Set,
                a = new Map,
                s = !1,
                c = !1,
                d = {
                    Tab: !0,
                    Escape: !0
                };

            function f(e, t) {
                for (let n of u) n(e, t)
            }

            function p(e) {
                var t, n;
                s = !0, e.metaKey || (t = /^Mac/i, !("undefined" != typeof window && null != window.navigator && t.test((null === (n = window.navigator.userAgentData) || void 0 === n ? void 0 : n.platform) || window.navigator.platform)) && e.altKey) || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key || (i = "keyboard", f("keyboard", e))
            }

            function v(e) {
                i = "pointer", ("mousedown" === e.type || "pointerdown" === e.type) && (s = !0, f("pointer", e))
            }

            function m(e) {
                var t, n;
                (0 === e.mozInputSource && e.isTrusted ? 0 : (t = /Android/i, "undefined" != typeof window && null != window.navigator && ((null === (n = window.navigator.userAgentData) || void 0 === n ? void 0 : n.brands.some(e => t.test(e.brand))) || t.test(window.navigator.userAgent)) && e.pointerType) ? "click" !== e.type || 1 !== e.buttons : 0 !== e.detail || e.pointerType) || (s = !0, i = "virtual")
            }

            function h(e) {
                e.target !== window && e.target !== document && (s || c || (i = "virtual", f("virtual", e)), s = !1, c = !1)
            }

            function g() {
                s = !1, c = !0
            }

            function y(e) {
                if ("undefined" == typeof window || a.get(o(e))) return;
                let t = o(e),
                    n = r(e),
                    l = t.HTMLElement.prototype.focus;
                t.HTMLElement.prototype.focus = function() {
                    s = !0, l.apply(this, arguments)
                }, n.addEventListener("keydown", p, !0), n.addEventListener("keyup", p, !0), n.addEventListener("click", m, !0), t.addEventListener("focus", h, !0), t.addEventListener("blur", g, !1), "undefined" != typeof PointerEvent ? (n.addEventListener("pointerdown", v, !0), n.addEventListener("pointermove", v, !0), n.addEventListener("pointerup", v, !0)) : (n.addEventListener("mousedown", v, !0), n.addEventListener("mousemove", v, !0), n.addEventListener("mouseup", v, !0)), t.addEventListener("beforeunload", () => {
                    b(e)
                }, {
                    once: !0
                }), a.set(t, {
                    focus: l
                })
            }
            let b = (e, t) => {
                let n = o(e),
                    l = r(e);
                t && l.removeEventListener("DOMContentLoaded", t), a.has(n) && (n.HTMLElement.prototype.focus = a.get(n).focus, l.removeEventListener("keydown", p, !0), l.removeEventListener("keyup", p, !0), l.removeEventListener("click", m, !0), n.removeEventListener("focus", h, !0), n.removeEventListener("blur", g, !1), "undefined" != typeof PointerEvent ? (l.removeEventListener("pointerdown", v, !0), l.removeEventListener("pointermove", v, !0), l.removeEventListener("pointerup", v, !0)) : (l.removeEventListener("mousedown", v, !0), l.removeEventListener("mousemove", v, !0), l.removeEventListener("mouseup", v, !0)), a.delete(n))
            };

            function E() {
                return "pointer" !== i
            }
            "undefined" != typeof document && function(e) {
                let t;
                let n = r(void 0);
                "loading" !== n.readyState ? y(void 0) : (t = () => {
                    y(void 0)
                }, n.addEventListener("DOMContentLoaded", t)), () => b(e, t)
            }();
            let w = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]),
                x = "undefined" != typeof document ? l.useLayoutEffect : () => {};
            class P {
                isDefaultPrevented() {
                    return this.nativeEvent.defaultPrevented
                }
                preventDefault() {
                    this.defaultPrevented = !0, this.nativeEvent.preventDefault()
                }
                stopPropagation() {
                    this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0
                }
                isPropagationStopped() {
                    return !1
                }
                persist() {}
                constructor(e, t) {
                    this.nativeEvent = t, this.target = t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget, this.bubbles = t.bubbles, this.cancelable = t.cancelable, this.defaultPrevented = t.defaultPrevented, this.eventPhase = t.eventPhase, this.isTrusted = t.isTrusted, this.timeStamp = t.timeStamp, this.type = e
                }
            }

            function T(e) {
                let t = (0, l.useRef)({
                    isFocused: !1,
                    observer: null
                });
                x(() => {
                    let e = t.current;
                    return () => {
                        e.observer && (e.observer.disconnect(), e.observer = null)
                    }
                }, []);
                let n = function(e) {
                    let t = (0, l.useRef)(null);
                    return x(() => {
                        t.current = e
                    }, [e]), (0, l.useCallback)((...e) => {
                        let n = t.current;
                        return null == n ? void 0 : n(...e)
                    }, [])
                }(t => {
                    null == e || e(t)
                });
                return (0, l.useCallback)(e => {
                    if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                        t.current.isFocused = !0;
                        let r = e.target;
                        r.addEventListener("focusout", e => {
                            t.current.isFocused = !1, r.disabled && n(new P("blur", e)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
                        }, {
                            once: !0
                        }), t.current.observer = new MutationObserver(() => {
                            if (t.current.isFocused && r.disabled) {
                                var e;
                                null === (e = t.current.observer) || void 0 === e || e.disconnect();
                                let n = r === document.activeElement ? null : document.activeElement;
                                r.dispatchEvent(new FocusEvent("blur", {
                                    relatedTarget: n
                                })), r.dispatchEvent(new FocusEvent("focusout", {
                                    bubbles: !0,
                                    relatedTarget: n
                                }))
                            }
                        }), t.current.observer.observe(r, {
                            attributes: !0,
                            attributeFilter: ["disabled"]
                        })
                    }
                }, [n])
            }

            function S(e = {}) {
                var t, n, i;
                let {
                    autoFocus: a = !1,
                    isTextInput: s,
                    within: c
                } = e, f = (0, l.useRef)({
                    isFocused: !1,
                    isFocusVisible: a || E()
                }), [p, v] = (0, l.useState)(!1), [m, h] = (0, l.useState)(() => f.current.isFocused && f.current.isFocusVisible), g = (0, l.useCallback)(() => h(f.current.isFocused && f.current.isFocusVisible), []), b = (0, l.useCallback)(e => {
                    f.current.isFocused = e, v(e), g()
                }, [g]);
                t = e => {
                    f.current.isFocusVisible = e, g()
                }, n = [], i = {
                    isTextInput: s
                }, y(), (0, l.useEffect)(() => {
                    let e = (e, n) => {
                        (function(e, t, n) {
                            var r;
                            let l = "undefined" != typeof window ? o(null == n ? void 0 : n.target).HTMLInputElement : HTMLInputElement,
                                i = "undefined" != typeof window ? o(null == n ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement,
                                u = "undefined" != typeof window ? o(null == n ? void 0 : n.target).HTMLElement : HTMLElement,
                                a = "undefined" != typeof window ? o(null == n ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
                            return !((e = e || (null == n ? void 0 : n.target) instanceof l && !w.has(null == n ? void 0 : null === (r = n.target) || void 0 === r ? void 0 : r.type) || (null == n ? void 0 : n.target) instanceof i || (null == n ? void 0 : n.target) instanceof u && (null == n ? void 0 : n.target.isContentEditable)) && "keyboard" === t && n instanceof a && !d[n.key])
                        })(!!(null == i ? void 0 : i.isTextInput), e, n) && t(E())
                    };
                    return u.add(e), () => {
                        u.delete(e)
                    }
                }, n);
                let {
                    focusProps: x
                } = function(e) {
                    let {
                        isDisabled: t,
                        onFocus: n,
                        onBlur: o,
                        onFocusChange: i
                    } = e, u = (0, l.useCallback)(e => {
                        if (e.target === e.currentTarget) return o && o(e), i && i(!1), !0
                    }, [o, i]), a = T(u), s = (0, l.useCallback)(e => {
                        let t = r(e.target);
                        e.target === e.currentTarget && t.activeElement === e.target && (n && n(e), i && i(!0), a(e))
                    }, [i, n, a]);
                    return {
                        focusProps: {
                            onFocus: !t && (n || i || o) ? s : void 0,
                            onBlur: !t && (o || i) ? u : void 0
                        }
                    }
                }({
                    isDisabled: c,
                    onFocusChange: b
                }), {
                    focusWithinProps: P
                } = function(e) {
                    let {
                        isDisabled: t,
                        onBlurWithin: n,
                        onFocusWithin: r,
                        onFocusWithinChange: o
                    } = e, i = (0, l.useRef)({
                        isFocusWithin: !1
                    }), u = (0, l.useCallback)(e => {
                        i.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (i.current.isFocusWithin = !1, n && n(e), o && o(!1))
                    }, [n, o, i]), a = T(u), s = (0, l.useCallback)(e => {
                        i.current.isFocusWithin || document.activeElement !== e.target || (r && r(e), o && o(!0), i.current.isFocusWithin = !0, a(e))
                    }, [r, o, a]);
                    return t ? {
                        focusWithinProps: {
                            onFocus: void 0,
                            onBlur: void 0
                        }
                    } : {
                        focusWithinProps: {
                            onFocus: s,
                            onBlur: u
                        }
                    }
                }({
                    isDisabled: !c,
                    onFocusWithinChange: b
                });
                return {
                    isFocused: p,
                    isFocusVisible: m,
                    focusProps: c ? P : x
                }
            }
        },
        3892: function(e, t, n) {
            n.d(t, {
                X: function() {
                    return s
                }
            });
            var r = n(2265);
            let o = !1,
                l = 0;

            function i() {
                o = !0, setTimeout(() => {
                    o = !1
                }, 50)
            }

            function u(e) {
                "touch" === e.pointerType && i()
            }

            function a() {
                if ("undefined" != typeof document) return "undefined" != typeof PointerEvent ? document.addEventListener("pointerup", u) : document.addEventListener("touchend", i), l++, () => {
                    --l > 0 || ("undefined" != typeof PointerEvent ? document.removeEventListener("pointerup", u) : document.removeEventListener("touchend", i))
                }
            }

            function s(e) {
                let {
                    onHoverStart: t,
                    onHoverChange: n,
                    onHoverEnd: l,
                    isDisabled: i
                } = e, [u, s] = (0, r.useState)(!1), c = (0, r.useRef)({
                    isHovered: !1,
                    ignoreEmulatedMouseEvents: !1,
                    pointerType: "",
                    target: null
                }).current;
                (0, r.useEffect)(a, []);
                let {
                    hoverProps: d,
                    triggerHoverEnd: f
                } = (0, r.useMemo)(() => {
                    let e = (e, r) => {
                            if (c.pointerType = r, i || "touch" === r || c.isHovered || !e.currentTarget.contains(e.target)) return;
                            c.isHovered = !0;
                            let o = e.currentTarget;
                            c.target = o, t && t({
                                type: "hoverstart",
                                target: o,
                                pointerType: r
                            }), n && n(!0), s(!0)
                        },
                        r = (e, t) => {
                            if (c.pointerType = "", c.target = null, "touch" === t || !c.isHovered) return;
                            c.isHovered = !1;
                            let r = e.currentTarget;
                            l && l({
                                type: "hoverend",
                                target: r,
                                pointerType: t
                            }), n && n(!1), s(!1)
                        },
                        u = {};
                    return "undefined" != typeof PointerEvent ? (u.onPointerEnter = t => {
                        o && "mouse" === t.pointerType || e(t, t.pointerType)
                    }, u.onPointerLeave = e => {
                        !i && e.currentTarget.contains(e.target) && r(e, e.pointerType)
                    }) : (u.onTouchStart = () => {
                        c.ignoreEmulatedMouseEvents = !0
                    }, u.onMouseEnter = t => {
                        c.ignoreEmulatedMouseEvents || o || e(t, "mouse"), c.ignoreEmulatedMouseEvents = !1
                    }, u.onMouseLeave = e => {
                        !i && e.currentTarget.contains(e.target) && r(e, "mouse")
                    }), {
                        hoverProps: u,
                        triggerHoverEnd: r
                    }
                }, [t, n, l, i, c]);
                return (0, r.useEffect)(() => {
                    i && f({
                        currentTarget: c.target
                    }, c.pointerType)
                }, [i]), {
                    hoverProps: d,
                    isHovered: u
                }
            }
        }
    }
]);