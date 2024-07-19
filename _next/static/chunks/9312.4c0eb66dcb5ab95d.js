(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9312], {
        4084: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return s
                }
            });
            var n = r(7437),
                i = r(5566);

            function s() {
                let e = i.env.NEXT_PUBLIC_TITLE;
                return (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)("footer", {
                        children: (0, n.jsxs)("div", {
                            className: "mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex justify-between items-center h-[var(--footer-size)]",
                            children: [(0, n.jsxs)("div", {
                                className: "text-xs font-semibold",
                                children: [(0, n.jsxs)("span", {
                                    className: "text-gray-500 dark:text-gray-400 mr-1",
                                    children: [" ", e]
                                }), (0, n.jsx)("span", {
                                    className: "text-primary mr-1",
                                    children: "2024"
                                }), (0, n.jsx)("span", {
                                    className: "text-gray-500 dark:text-gray-400",
                                    children: "CoppyRight"
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "text-xs font-semibold",
                                children: [(0, n.jsx)("span", {
                                    className: "text-gray-500 dark:text-gray-400 mr-1",
                                    children: "Make By"
                                }), (0, n.jsx)("span", {
                                    className: "text-primary",
                                    children: "Nso Bear"
                                })]
                            })]
                        })
                    })
                })
            }
        },
        5566: function(e) {
            var t, r, n, i = e.exports = {};

            function s() {
                throw Error("setTimeout has not been defined")
            }

            function o() {
                throw Error("clearTimeout has not been defined")
            }

            function a(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === s || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                try {
                    return t(e, 0)
                } catch (r) {
                    try {
                        return t.call(null, e, 0)
                    } catch (r) {
                        return t.call(this, e, 0)
                    }
                }
            }! function() {
                try {
                    t = "function" == typeof setTimeout ? setTimeout : s
                } catch (e) {
                    t = s
                }
                try {
                    r = "function" == typeof clearTimeout ? clearTimeout : o
                } catch (e) {
                    r = o
                }
            }();
            var c = [],
                u = !1,
                l = -1;

            function f() {
                u && n && (u = !1, n.length ? c = n.concat(c) : l = -1, c.length && h())
            }

            function h() {
                if (!u) {
                    var e = a(f);
                    u = !0;
                    for (var t = c.length; t;) {
                        for (n = c, c = []; ++l < t;) n && n[l].run();
                        l = -1, t = c.length
                    }
                    n = null, u = !1,
                        function(e) {
                            if (r === clearTimeout) return clearTimeout(e);
                            if ((r === o || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                            try {
                                r(e)
                            } catch (t) {
                                try {
                                    return r.call(null, e)
                                } catch (t) {
                                    return r.call(this, e)
                                }
                            }
                        }(e)
                }
            }

            function m(e, t) {
                this.fun = e, this.array = t
            }

            function d() {}
            i.nextTick = function(e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                c.push(new m(e, t)), 1 !== c.length || u || a(h)
            }, m.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = d, i.addListener = d, i.once = d, i.off = d, i.removeListener = d, i.removeAllListeners = d, i.emit = d, i.prependListener = d, i.prependOnceListener = d, i.listeners = function(e) {
                return []
            }, i.binding = function(e) {
                throw Error("process.binding is not supported")
            }, i.cwd = function() {
                return "/"
            }, i.chdir = function(e) {
                throw Error("process.chdir is not supported")
            }, i.umask = function() {
                return 0
            }
        }
    }
]);