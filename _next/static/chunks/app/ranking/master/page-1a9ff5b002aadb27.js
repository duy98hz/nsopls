(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [599], {
        2480: function() {},
        4586: function(e, t, a) {
            Promise.resolve().then(a.bind(a, 1462))
        },
        6463: function(e, t, a) {
            "use strict";
            var r = a(1169);
            a.o(r, "useParams") && a.d(t, {
                useParams: function() {
                    return r.useParams
                }
            }), a.o(r, "usePathname") && a.d(t, {
                usePathname: function() {
                    return r.usePathname
                }
            }), a.o(r, "useRouter") && a.d(t, {
                useRouter: function() {
                    return r.useRouter
                }
            })
        },
        3984: function(e, t) {
            "use strict";
            t.Z = "https://api.nsoace2.com"
        },
        1462: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return x
                }
            });
            var r = a(7437),
                n = a(2265),
                s = a(7661),
                i = a(9555),
                c = a(8110),
                o = a.n(c),
                l = a(3984),
                d = a(8472);
            let u = async e => {
                try {
                    var t, a;
                    let r = (await d.Z.post("".concat(l.Z, "/api/ranking/master"), {
                            server_id: e
                        }, {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })).data,
                        n = (t = r.ct, a = r.iv, o().AES.decrypt(t, a).toString(o().enc.Utf8).replace(/^"(.*)"$/, "$1"));
                    return JSON.parse(n)
                } catch (e) {
                    return
                }
            };

            function x() {
                let {
                    username: e
                } = (0, s.a)(), t = [{
                    id: 1,
                    name: "Nso Ace 1+"
                }, {
                    id: 2,
                    name: "Nso Sky+"
                }];
                (0, n.useEffect)(() => {
                    document.title = "Xếp Hạng Cao Thủ - Ninja School Online"
                }, []);
                let a = t[0].name,
                    [c, o] = (0, n.useState)(t[0].id),
                    [l, d] = (0, n.useState)(a),
                    [x, p] = (0, n.useState)(!1),
                    m = e => {
                        d(e.name), o(e.id), p(!1)
                    },
                    {
                        data: h,
                        isLoading: g,
                        isError: f
                    } = (0, i.useQuery)(["masterData", c], () => u(c), {
                        keepPreviousData: !0,
                        staleTime: 3e5
                    }),
                    y = (null == h ? void 0 : h.map(e => e.name)) || [],
                    v = (null == h ? void 0 : h.map(e => e.level)) || [],
                    k = (null == h ? void 0 : h.map(e => e.levelUpTime)) || [];
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)("div", {
                        className: "max-w-[700px] mx-auto",
                        children: [(0, r.jsx)("div", {
                            className: "flex justify-between items-center capitalize mb-4",
                            children: (0, r.jsxs)("div", {
                                children: [(0, r.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [(0, r.jsx)("span", {
                                        className: "icon-[bxs--circle] w-4 h-4 text-primary-500 dark:text-primary-400 md:mr-4 mr-2"
                                    }), (0, r.jsx)("p", {
                                        className: "md:text-2xl text-xl font-bold text-gray-700 dark:text-gray-300",
                                        children: "TOP Cao Thủ"
                                    })]
                                }), (0, r.jsx)("p", {
                                    className: "break-words text-gray-500 dark:text-gray-400 md:text-lg text-sm md:mt-1",
                                    children: "Xếp Hạng Cao Thủ"
                                })]
                            })
                        }), (0, r.jsx)("div", {
                            children: (0, r.jsx)("div", {
                                className: "relative",
                                children: (0, r.jsxs)("div", {
                                    className: "relative",
                                    children: [(0, r.jsx)("div", {
                                        className: "inline-flex w-full",
                                        children: (0, r.jsxs)("button", {
                                            onClick: () => p(!x),
                                            type: "button",
                                            className: "z-10 relative w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 inline-flex items-center text-left cursor-default rounded-md text-sm gap-x-2.5 px-3.5 py-2.5 pe-11 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-1.5 focus:ring-primary-500 dark:focus:ring-primary-400",
                                            children: [(0, r.jsx)("p", {
                                                className: "break-words truncate dark:text-gray-100 dark:bg-gray-900 ".concat("text-gray-900 font-semibold"),
                                                children: l
                                            }), (0, r.jsx)("span", {
                                                className: "absolute inset-y-0 end-0 flex items-center pointer-events-none px-3.5",
                                                children: (0, r.jsx)("span", {
                                                    className: "icon-[bx--chevron-down] flex-shrink-0 text-gray-400 dark:text-gray-500 text-gray-500 dark:text-gray-400 h-5 w-5"
                                                })
                                            })]
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "absolute z-20 w-full py-1 mt-1 menu-dropdown ".concat(x ? "transition-opacity duration-200 ease-in-out show" : ""),
                                        children: (0, r.jsx)("ul", {
                                            className: "relative focus:outline-none overflow-y-auto scroll-py-1 ring-1 ring-gray-200 dark:ring-gray-700 rounded-md shadow-lg bg-white dark:bg-gray-800 p-1 max-h-60",
                                            children: t.map(e => (0, r.jsxs)("li", {
                                                onClick: () => m(e),
                                                className: "cursor-default select-none relative flex items-center justify-between gap-1 rounded-md px-2 py-1.5 text-sm text-gray-900 dark:text-white hover:bg-gray-200 hover:text-gray-900 dark:hover:text-gray-100 dark:hover:bg-gray-900 hover:font-semibold ".concat(e.id === c ? "bg-gray-200 text-gray-900 font-semibold dark:hover:text-gray-100 dark:hover:bg-gray-900 dark:text-gray-100 dark:bg-gray-900" : ""),
                                                children: [(0, r.jsx)("div", {
                                                    className: "flex items-center gap-2 min-w-0",
                                                    children: (0, r.jsx)("span", {
                                                        className: "truncate",
                                                        children: e.name
                                                    })
                                                }), e.id === c && (0, r.jsx)("span", {
                                                    className: "absolute inset-y-0 right-0 flex items-center pr-4",
                                                    children: (0, r.jsx)("span", {
                                                        className: "icon-[bx--check] h-5 w-5 text-gray-900 dark:text-white"
                                                    })
                                                })]
                                            }, e.id))
                                        })
                                    })]
                                })
                            })
                        }), (0, r.jsx)("div", {
                            className: "relative overflow-visible rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900 mt-4",
                            children: (0, r.jsx)("div", {
                                className: "p-0 sm:p-0",
                                children: (0, r.jsx)("div", {
                                    className: "relative overflow-x-auto",
                                    children: (0, r.jsxs)("table", {
                                        className: "min-w-full table-fixed divide-y divide-gray-300 dark:divide-gray-700",
                                        children: [(0, r.jsx)("thead", {
                                            className: "relative",
                                            children: (0, r.jsxs)("tr", {
                                                className: "",
                                                children: [(0, r.jsx)("th", {
                                                    scope: "col",
                                                    className: "text-left rtl:text-right whitespace-nowrap px-4 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                                                    children: (0, r.jsx)("span", {
                                                        children: "Xếp hạng"
                                                    })
                                                }), (0, r.jsx)("th", {
                                                    scope: "col",
                                                    className: "text-left rtl:text-right whitespace-nowrap px-4 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                                                    children: (0, r.jsx)("span", {
                                                        children: "Nh\xe2n vật"
                                                    })
                                                }), (0, r.jsx)("th", {
                                                    scope: "col",
                                                    className: "text-left rtl:text-right whitespace-nowrap px-4 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                                                    children: (0, r.jsx)("span", {
                                                        children: "Tr\xecnh độ"
                                                    })
                                                }), (0, r.jsx)("th", {
                                                    scope: "col",
                                                    className: "text-left rtl:text-right whitespace-nowrap px-4 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                                                    children: (0, r.jsx)("span", {
                                                        children: "Thời gian"
                                                    })
                                                })]
                                            })
                                        }), (0, r.jsx)("tbody", {
                                            className: "divide-y divide-gray-200 dark:divide-gray-800",
                                            children: g ? (0, r.jsx)("tr", {
                                                children: (0, r.jsx)("td", {
                                                    colSpan: 4,
                                                    className: "px-4 py-4",
                                                    children: (0, r.jsxs)("div", {
                                                        className: "flex justify-center items-center absolute top-0 left-0 min-w-full min-h-full bg-white/75 dark:bg-gray-800/90 z-10 rounded-lg",
                                                        children: [(0, r.jsx)("span", {
                                                            className: "icon-[bx--loader-alt] w-6 h-6 text-primary-500 dark:text-primary-400 animate-spin mr-2"
                                                        }), (0, r.jsx)("p", {
                                                            className: "break-words text-sm text-gray-500 dark:text-gray-400 font-semibold",
                                                            children: "Đang tải..."
                                                        })]
                                                    })
                                                })
                                            }) : f ? (0, r.jsx)("tr", {
                                                children: (0, r.jsx)("td", {
                                                    colSpan: 4,
                                                    className: "px-4 py-4",
                                                    children: (0, r.jsxs)("div", {
                                                        className: "flex justify-center items-center absolute top-0 left-0 min-w-full min-h-full bg-red-100 dark:bg-red-900/90 z-10 rounded-lg",
                                                        children: [(0, r.jsx)("span", {
                                                            className: "icon-[bx--error] w-6 h-6 text-red-500 dark:text-red-400 mr-2"
                                                        }), (0, r.jsx)("p", {
                                                            className: "break-words text-sm text-red-500 dark:text-red-400 font-semibold",
                                                            children: "C\xf3 lỗi xảy ra"
                                                        })]
                                                    })
                                                })
                                            }) : 0 === y.length ? (0, r.jsx)("tr", {
                                                className: "text-gray-500 dark:text-gray-400",
                                                children: (0, r.jsx)("td", {
                                                    colSpan: 4,
                                                    className: "px-4 py-4 text-sm text-center",
                                                    children: "Chưa c\xf3 dữ liệu"
                                                })
                                            }) : y.map((e, t) => (0, r.jsxs)("tr", {
                                                className: "",
                                                children: [(0, r.jsx)("td", {
                                                    className: "whitespace-nowrap px-4 py-4 text-gray-500 dark:text-gray-400 text-sm",
                                                    children: t + 1
                                                }), (0, r.jsx)("td", {
                                                    className: "whitespace-nowrap px-4 py-4 text-primary-500 dark:text-primary-400 text-sm font-medium",
                                                    children: e
                                                }), (0, r.jsxs)("td", {
                                                    className: "whitespace-nowrap px-4 py-4 text-gray-500 dark:text-gray-400 text-sm",
                                                    children: ["Level ", v[t]]
                                                }), (0, r.jsx)("td", {
                                                    className: "whitespace-nowrap px-4 py-4 text-gray-500 dark:text-gray-400 text-sm",
                                                    children: k[t]
                                                })]
                                            }, t))
                                        })]
                                    })
                                })
                            })
                        })]
                    })
                })
            }
        },
        7661: function(e, t, a) {
            "use strict";
            a.d(t, {
                H: function() {
                    return p
                },
                a: function() {
                    return m
                }
            });
            var r = a(7437),
                n = a(2265),
                s = a(8110),
                i = a.n(s),
                c = a(2649),
                o = a(6463),
                l = a(8472),
                d = a(9555),
                u = a(3984);
            let x = (0, n.createContext)({
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
                } = e, [a, s] = (0, n.useState)(""), [p, m] = (0, n.useState)(""), [h, g] = (0, n.useState)(0), [f, y] = (0, n.useState)(""), [v, k] = (0, n.useState)(0), [w, j] = (0, n.useState)(""), [b, N] = (0, n.useState)(""), [S, _] = (0, n.useState)(""), [C, Z] = (0, n.useState)(""), [E, T] = (0, n.useState)(!1), [O, P] = (0, n.useState)(new Date), [U, A] = (0, n.useState)(""), [D, R] = (0, n.useState)(""), [z, I] = (0, n.useState)(""), [J, B] = (0, n.useState)(""), [L, F] = (0, n.useState)(""), [H, $] = (0, n.useState)(""), [K, Q] = (0, n.useState)(""), [X, M] = (0, n.useState)(""), [V, W] = (0, n.useState)(""), [q, G] = (0, n.useState)(""), [Y, ee] = (0, n.useState)(""), et = (0, o.useRouter)();

                function ea(e, t) {
                    return i().AES.decrypt(e, t).toString(i().enc.Utf8).replace(/^"(.*)"$/, "$1")
                }

                function er() {
                    return i().lib.WordArray.random(16).toString(i().enc.Hex)
                }

                function en(e, t) {
                    return i().AES.encrypt(JSON.stringify(e), t).toString()
                }
                async function es() {
                    let e = c.Z.get("access_token");
                    if (!e) throw Error("Access token not found");
                    let t = await l.Z.get("".concat(u.Z, "/api/user/profile"), {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer ".concat(e)
                        }
                    });
                    if (!t || !t.data) throw Error("Failed to fetch user profile");
                    let a = t.data;
                    return JSON.parse(ea(a.ct, a.iv))
                }
                let {
                    data: ei,
                    isLoading: ec,
                    isError: eo,
                    refetch: el
                } = (0, d.useQuery)("profile", es, {
                    enabled: !!c.Z.get("access_token"),
                    onSuccess: e => {
                        g(e.kh), k(e.online), j(e.user_id), s(e.username), m(e.name), y(e.balance), G(e.phone), ee(e.email), _(e.tongnap), I(e.role), B(e.countvxmm), Z(e.tongnapthang), A(e.last_login_time), R(e.last_logout_time), T(!0)
                    },
                    onError: e => {}
                });
                async function ed() {
                    try {
                        let {
                            data: e
                        } = await l.Z.post("".concat(u.Z, "/api/settings")), {
                            ct: t,
                            iv: a
                        } = e, r = ea(t, a);
                        return JSON.parse(r) || null
                    } catch (e) {
                        throw Error("Error fetching posts")
                    }
                }(0, n.useEffect)(() => {
                    el()
                }, []);
                let {
                    data: eu,
                    error: ex,
                    isLoading: ep,
                    refetch: em
                } = (0, d.useQuery)("settings", ed, {
                    onSuccess: e => {
                        let t = e.find(e => "link_zalo" === e.key),
                            a = e.find(e => "link_page" === e.key),
                            r = e.find(e => "ratio_atm" === e.key),
                            n = e.find(e => "ratio_atm" === e.key),
                            s = e.find(e => "ratio_atm" === e.key),
                            i = t ? t.value : null,
                            c = a ? a.value : null,
                            o = r ? r.value : null,
                            l = n ? n.value : null,
                            d = s ? s.value : null;
                        F(i), $(c), Q(o), M(l), W(d)
                    },
                    onError: e => {}
                });
                async function eh(e, t) {
                    try {
                        if (c.Z.get("access_token")) return {
                            success: !1,
                            error: "Bạn đ\xe3 đăng nhập rồi."
                        };
                        let a = er(),
                            r = en(e, a),
                            n = en(t, a),
                            s = await l.Z.post("".concat(u.Z, "/api/user/login"), {
                                ct: r,
                                s: n,
                                iv: a
                            }, {
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            });
                        if (200 === s.status) {
                            let e = s.data,
                                t = ea(e.ct, e.iv),
                                a = JSON.parse(t),
                                {
                                    success: r,
                                    error: n,
                                    message: i
                                } = a,
                                o = a.token;
                            return c.Z.set("access_token", o), T(!0), el(), {
                                success: !0,
                                message: i
                            }
                        } {
                            let e = s.data,
                                t = ea(e.ct, e.iv),
                                {
                                    error: a,
                                    message: r
                                } = JSON.parse(t);
                            return {
                                success: !1,
                                error: a,
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
                async function eg(e, t, a) {
                    try {
                        if (c.Z.get("access_token")) return {
                            success: !1,
                            error: "Đăng Đăng Nhập Kh\xf4ng Thể Đăng K\xfd."
                        };
                        let r = er(),
                            n = en(e, r),
                            s = en(JSON.stringify({
                                password: t,
                                confirmPassword: a
                            }), r),
                            i = await l.Z.post("".concat(u.Z, "/api/user/register"), {
                                ct: n,
                                s: s,
                                iv: r
                            }, {
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            });
                        if (200 === i.status) {
                            let e = await i.data,
                                t = ea(e.ct, e.iv),
                                a = JSON.parse(t),
                                {
                                    success: r,
                                    error: n,
                                    message: s
                                } = a,
                                o = a.token;
                            return c.Z.set("access_token", o), T(!0), el(), {
                                success: !0,
                                message: s
                            }
                        } {
                            let e = await i.data,
                                t = ea(e.ct, e.iv),
                                {
                                    error: a,
                                    message: r
                                } = JSON.parse(t);
                            return {
                                success: !1,
                                error: a,
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
                return (0, n.useEffect)(() => {
                    em()
                }, [em]), (0, n.useEffect)(() => {
                    P(new Date(new Date().toLocaleString("en-US", {
                        timeZone: "Asia/Ho_Chi_Minh"
                    })))
                }, []), (0, r.jsx)(x.Provider, {
                    value: {
                        refetch: el,
                        loginUser: eh,
                        registerUser: eg,
                        username: a,
                        namePlayer: p,
                        logout: function() {
                            localStorage.removeItem("next-secure-v1.j.user"), c.Z.remove("access_token"), c.Z.remove("authToken"), s(""), m(""), g(0), et.push("/home"), T(!1)
                        },
                        activated: h,
                        checkLoginStatus: E,
                        balance: f,
                        online: v,
                        userId: w,
                        VietNameTime: O,
                        decryptData: ea,
                        encryptData: en,
                        generateRandomIV: er,
                        KeyMa: b,
                        TimeLogin: U,
                        TimeLogOut: D,
                        tongnap: S,
                        tongnapthang: C,
                        role: z,
                        countvxmm: J,
                        Zalo: L,
                        PageNso: H,
                        ratio_atm: K,
                        ratio_card: V,
                        ratio_momo: X,
                        phone: q,
                        email: Y
                    },
                    children: t
                })
            }

            function m() {
                return (0, n.useContext)(x)
            }
        },
        2649: function(e, t, a) {
            "use strict"; /*! js-cookie v3.0.5 | MIT */
            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a) e[r] = a[r]
                }
                return e
            }
            a.d(t, {
                Z: function() {
                    return n
                }
            });
            var n = function e(t, a) {
                function n(e, n, s) {
                    if ("undefined" != typeof document) {
                        "number" == typeof(s = r({}, a, s)).expires && (s.expires = new Date(Date.now() + 864e5 * s.expires)), s.expires && (s.expires = s.expires.toUTCString()), e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                        var i = "";
                        for (var c in s) s[c] && (i += "; " + c, !0 !== s[c] && (i += "=" + s[c].split(";")[0]));
                        return document.cookie = e + "=" + t.write(n, e) + i
                    }
                }
                return Object.create({
                    set: n,
                    get: function(e) {
                        if ("undefined" != typeof document && (!arguments.length || e)) {
                            for (var a = document.cookie ? document.cookie.split("; ") : [], r = {}, n = 0; n < a.length; n++) {
                                var s = a[n].split("="),
                                    i = s.slice(1).join("=");
                                try {
                                    var c = decodeURIComponent(s[0]);
                                    if (r[c] = t.read(i, c), e === c) break
                                } catch (e) {}
                            }
                            return e ? r[e] : r
                        }
                    },
                    remove: function(e, t) {
                        n(e, "", r({}, t, {
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
                        value: Object.freeze(a)
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
        e.O(0, [8472, 4728, 7478, 7023, 1744], function() {
            return e(e.s = 4586)
        }), _N_E = e.O()
    }
]);