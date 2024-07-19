(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3185], {
        2480: function() {},
        57: function(e, t, n) {
            Promise.resolve().then(n.bind(n, 4949))
        },
        6463: function(e, t, n) {
            "use strict";
            var r = n(1169);
            n.o(r, "useParams") && n.d(t, {
                useParams: function() {
                    return r.useParams
                }
            }), n.o(r, "usePathname") && n.d(t, {
                usePathname: function() {
                    return r.usePathname
                }
            }), n.o(r, "useRouter") && n.d(t, {
                useRouter: function() {
                    return r.useRouter
                }
            })
        },
        3984: function(e, t) {
            "use strict";
            t.Z = "https://api.nsoace2.com"
        },
        4949: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var r = n(7437),
                a = n(4671),
                s = n.n(a),
                o = n(9555),
                i = n(7661),
                c = n(2265);
            n(3054), n(1537);
            let u = new o.QueryClient,
                l = c.lazy(() => Promise.all([n.e(5501), n.e(231), n.e(4974), n.e(148), n.e(2170), n.e(5344)]).then(n.bind(n, 5344))),
                f = c.lazy(() => n.e(9312).then(n.bind(n, 4084))),
                d = c.lazy(() => Promise.all([n.e(231), n.e(2170), n.e(3859)]).then(n.bind(n, 3859)));

            function p(e) {
                let {
                    children: t
                } = e;
                return (0, r.jsxs)("html", {
                    lang: "en",
                    children: [(0, r.jsxs)("head", {
                        children: [(0, r.jsx)("title", {
                            children: "Nso Online - Ninja School Online"
                        }), (0, r.jsx)("link", {
                            rel: "icon",
                            href: "/images/logo.gif"
                        }), (0, r.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1.0"
                        }), (0, r.jsx)("link", {
                            rel: "apple-touch-icon",
                            href: "/images/logo.gif"
                        })]
                    }), (0, r.jsx)("body", {
                        className: s().className,
                        children: (0, r.jsx)(o.QueryClientProvider, {
                            client: u,
                            children: (0, r.jsx)(i.H, {
                                children: (0, r.jsxs)("div", {
                                    className: "relative h-full min-h-full",
                                    children: [(0, r.jsx)(c.Suspense, {
                                        children: (0, r.jsx)(l, {})
                                    }), (0, r.jsxs)("div", {
                                        className: "mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl grid grid-cols-12 gap-0 min-h-[calc(100%-var(--header-size)-var(--footer-size))]",
                                        children: [(0, r.jsx)(c.Suspense, {
                                            children: (0, r.jsx)(d, {
                                                closeModalNavbar: function() {}
                                            })
                                        }), (0, r.jsx)("div", {
                                            className: "xl:col-span-10 md:col-span-9 col-span-12 lg:pl-12 md:pl-8",
                                            children: (0, r.jsx)("main", {
                                                className: "py-4",
                                                children: (0, r.jsx)("div", {
                                                    className: "transition-opacity duration-300 opacity-100",
                                                    children: t
                                                })
                                            })
                                        })]
                                    }), (0, r.jsx)(c.Suspense, {
                                        children: (0, r.jsx)(f, {})
                                    })]
                                })
                            })
                        })
                    })]
                })
            }
        },
        7661: function(e, t, n) {
            "use strict";
            n.d(t, {
                H: function() {
                    return p
                },
                a: function() {
                    return h
                }
            });
            var r = n(7437),
                a = n(2265),
                s = n(8110),
                o = n.n(s),
                i = n(2649),
                c = n(6463),
                u = n(8472),
                l = n(9555),
                f = n(3984);
            let d = (0, a.createContext)({
                refetch: () => {},
                loginUser: async () => ({
                    success: !1
                }),
                registerUser: async () => ({
                    success: !1
                }),
                username: "",
                namePlayer: "",
                logout: () => {},
                activated: 0,
                balance: "",
                tongnap: "",
                tongnapthang: "",
                online: 0,
                userId: "",
                checkLoginStatus: !1,
                VietNameTime: new Date,
                decryptData: () => "",
                encryptData: () => "",
                generateRandomIV: () => "",
                KeyMa: "",
                TimeLogin: "",
                TimeLogOut: "",
                role: "",
                countvxmm: "",
                Zalo: "",
                PageNso: "",
                ratio_atm: "",
                ratio_momo: "",
                ratio_card: "",
                phone: "",
                email: ""
            });

            function p(e) {
                let {
                    children: t
                } = e, [n, s] = (0, a.useState)(""), [p, h] = (0, a.useState)(""), [m, g] = (0, a.useState)(0), [v, S] = (0, a.useState)(""), [y, x] = (0, a.useState)(0), [_, k] = (0, a.useState)(""), [j, w] = (0, a.useState)(""), [N, b] = (0, a.useState)(""), [C, Z] = (0, a.useState)(""), [E, O] = (0, a.useState)(!1), [P, I] = (0, a.useState)(new Date), [R, U] = (0, a.useState)(""), [D, z] = (0, a.useState)(""), [A, T] = (0, a.useState)(""), [J, B] = (0, a.useState)(""), [F, L] = (0, a.useState)(""), [H, Q] = (0, a.useState)(""), [K, M] = (0, a.useState)(""), [V, $] = (0, a.useState)(""), [W, q] = (0, a.useState)(""), [G, X] = (0, a.useState)(""), [Y, ee] = (0, a.useState)(""), et = (0, c.useRouter)();

                function en(e, t) {
                    return o().AES.decrypt(e, t).toString(o().enc.Utf8).replace(/^"(.*)"$/, "$1")
                }

                function er() {
                    return o().lib.WordArray.random(16).toString(o().enc.Hex)
                }

                function ea(e, t) {
                    return o().AES.encrypt(JSON.stringify(e), t).toString()
                }
                async function es() {
                    let e = i.Z.get("access_token");
                    if (!e) throw Error("Access token not found");
                    let t = await u.Z.get("".concat(f.Z, "/api/user/profile"), {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer ".concat(e)
                        }
                    });
                    if (!t || !t.data) throw Error("Failed to fetch user profile");
                    let n = t.data;
                    return JSON.parse(en(n.ct, n.iv))
                }
                let {
                    data: eo,
                    isLoading: ei,
                    isError: ec,
                    refetch: eu
                } = (0, l.useQuery)("profile", es, {
                    enabled: !!i.Z.get("access_token"),
                    onSuccess: e => {
                        g(e.kh), x(e.online), k(e.user_id), s(e.username), h(e.name), S(e.balance), X(e.phone), ee(e.email), b(e.tongnap), T(e.role), B(e.countvxmm), Z(e.tongnapthang), U(e.last_login_time), z(e.last_logout_time), O(!0)
                    },
                    onError: e => {}
                });
                async function el() {
                    try {
                        let {
                            data: e
                        } = await u.Z.post("".concat(f.Z, "/api/settings")), {
                            ct: t,
                            iv: n
                        } = e, r = en(t, n);
                        return JSON.parse(r) || null
                    } catch (e) {
                        throw Error("Error fetching posts")
                    }
                }(0, a.useEffect)(() => {
                    eu()
                }, []);
                let {
                    data: ef,
                    error: ed,
                    isLoading: ep,
                    refetch: eh
                } = (0, l.useQuery)("settings", el, {
                    onSuccess: e => {
                        let t = e.find(e => "link_zalo" === e.key),
                            n = e.find(e => "link_page" === e.key),
                            r = e.find(e => "ratio_atm" === e.key),
                            a = e.find(e => "ratio_atm" === e.key),
                            s = e.find(e => "ratio_atm" === e.key),
                            o = t ? t.value : null,
                            i = n ? n.value : null,
                            c = r ? r.value : null,
                            u = a ? a.value : null,
                            l = s ? s.value : null;
                        L(o), Q(i), M(c), $(u), q(l)
                    },
                    onError: e => {}
                });
                async function em(e, t) {
                    try {
                        if (i.Z.get("access_token")) return {
                            success: !1,
                            error: "Bạn đ\xe3 đăng nhập rồi."
                        };
                        let n = er(),
                            r = ea(e, n),
                            a = ea(t, n),
                            s = await u.Z.post("".concat(f.Z, "/api/user/login"), {
                                ct: r,
                                s: a,
                                iv: n
                            }, {
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            });
                        if (200 === s.status) {
                            let e = s.data,
                                t = en(e.ct, e.iv),
                                n = JSON.parse(t),
                                {
                                    success: r,
                                    error: a,
                                    message: o
                                } = n,
                                c = n.token;
                            return i.Z.set("access_token", c), O(!0), eu(), {
                                success: !0,
                                message: o
                            }
                        } {
                            let e = s.data,
                                t = en(e.ct, e.iv),
                                {
                                    error: n,
                                    message: r
                                } = JSON.parse(t);
                            return {
                                success: !1,
                                error: n,
                                message: r
                            }
                        }
                    } catch (e) {
                        return {
                            success: !1,
                            error: "Thông tin tài khoản hoặc mật khẩu không chính xác"
                        }
                    }
                }
                async function eg(e, t, n) {
                    try {
                        if (i.Z.get("access_token")) return {
                            success: !1,
                            error: "Đăng Đăng Nhập Kh\xf4ng Thể Đăng K\xfd."
                        };
                        let r = er(),
                            a = ea(e, r),
                            s = ea(JSON.stringify({
                                password: t,
                                confirmPassword: n
                            }), r),
                            o = await u.Z.post("".concat(f.Z, "/api/user/register"), {
                                ct: a,
                                s: s,
                                iv: r
                            }, {
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            });
                        if (200 === o.status) {
                            let e = await o.data,
                                t = en(e.ct, e.iv),
                                n = JSON.parse(t),
                                {
                                    success: r,
                                    error: a,
                                    message: s
                                } = n,
                                c = n.token;
                            return i.Z.set("access_token", c), O(!0), eu(), {
                                success: !0,
                                message: s
                            }
                        } {
                            let e = await o.data,
                                t = en(e.ct, e.iv),
                                {
                                    error: n,
                                    message: r
                                } = JSON.parse(t);
                            return {
                                success: !1,
                                error: n,
                                message: r
                            }
                        }
                    } catch (e) {
                        return {
                            success: !1,
                            error: "Đ\xe3 xảy ra lỗi khi đăng k\xfd"
                        }
                    }
                }
                return (0, a.useEffect)(() => {
                    eh()
                }, [eh]), (0, a.useEffect)(() => {
                    I(new Date(new Date().toLocaleString("en-US", {
                        timeZone: "Asia/Ho_Chi_Minh"
                    })))
                }, []), (0, r.jsx)(d.Provider, {
                    value: {
                        refetch: eu,
                        loginUser: em,
                        registerUser: eg,
                        username: n,
                        namePlayer: p,
                        logout: function() {
                            localStorage.removeItem("next-secure-v1.j.user"), i.Z.remove("access_token"), i.Z.remove("authToken"), s(""), h(""), g(0), et.push("/home"), O(!1)
                        },
                        activated: m,
                        checkLoginStatus: E,
                        balance: v,
                        online: y,
                        userId: _,
                        VietNameTime: P,
                        decryptData: en,
                        encryptData: ea,
                        generateRandomIV: er,
                        KeyMa: j,
                        TimeLogin: R,
                        TimeLogOut: D,
                        tongnap: N,
                        tongnapthang: C,
                        role: A,
                        countvxmm: J,
                        Zalo: F,
                        PageNso: H,
                        ratio_atm: K,
                        ratio_card: W,
                        ratio_momo: V,
                        phone: G,
                        email: Y
                    },
                    children: t
                })
            }

            function h() {
                return (0, a.useContext)(d)
            }
        },
        3054: function() {},
        1537: function() {},
        4671: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__Inter_aaf875', '__Inter_Fallback_aaf875'",
                    fontStyle: "normal"
                },
                className: "__className_aaf875"
            }
        },
        2649: function(e, t, n) {
            "use strict"; /*! js-cookie v3.0.5 | MIT */
            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) e[r] = n[r]
                }
                return e
            }
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var a = function e(t, n) {
                function a(e, a, s) {
                    if ("undefined" != typeof document) {
                        "number" == typeof(s = r({}, n, s)).expires && (s.expires = new Date(Date.now() + 864e5 * s.expires)), s.expires && (s.expires = s.expires.toUTCString()), e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                        var o = "";
                        for (var i in s) s[i] && (o += "; " + i, !0 !== s[i] && (o += "=" + s[i].split(";")[0]));
                        return document.cookie = e + "=" + t.write(a, e) + o
                    }
                }
                return Object.create({
                    set: a,
                    get: function(e) {
                        if ("undefined" != typeof document && (!arguments.length || e)) {
                            for (var n = document.cookie ? document.cookie.split("; ") : [], r = {}, a = 0; a < n.length; a++) {
                                var s = n[a].split("="),
                                    o = s.slice(1).join("=");
                                try {
                                    var i = decodeURIComponent(s[0]);
                                    if (r[i] = t.read(o, i), e === i) break
                                } catch (e) {}
                            }
                            return e ? r[e] : r
                        }
                    },
                    remove: function(e, t) {
                        a(e, "", r({}, t, {
                            expires: -1
                        }))
                    },
                    withAttributes: function(t) {
                        return e(this.converter, r({}, this.attributes, t))
                    },
                    withConverter: function(t) {
                        return e(r({}, this.converter, t), this.attributes)
                    }
                }, {
                    attributes: {
                        value: Object.freeze(n)
                    },
                    converter: {
                        value: Object.freeze(t)
                    }
                })
            }({
                read: function(e) {
                    return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
                },
                write: function(e) {
                    return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
                }
            }, {
                path: "/"
            })
        }
    },
    function(e) {
        e.O(0, [9141, 454, 3959, 8472, 4728, 7478, 7023, 1744], function() {
            return e(e.s = 57)
        }), _N_E = e.O()
    }
]);