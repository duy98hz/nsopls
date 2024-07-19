(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5131], {
        2480: function() {},
        2939: function(e, t, r) {
            Promise.resolve().then(r.bind(r, 416))
        },
        6463: function(e, t, r) {
            "use strict";
            var a = r(1169);
            r.o(a, "useParams") && r.d(t, {
                useParams: function() {
                    return a.useParams
                }
            }), r.o(a, "usePathname") && r.d(t, {
                usePathname: function() {
                    return a.usePathname
                }
            }), r.o(a, "useRouter") && r.d(t, {
                useRouter: function() {
                    return a.useRouter
                }
            })
        },
        3984: function(e, t) {
            "use strict";
            t.Z = "https://api.nsoace2.com"
        },
        416: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return p
                }
            });
            var a = r(7437),
                n = r(2265),
                s = r(7661),
                i = r(9555),
                c = r(8110),
                o = r.n(c),
                l = r(3984),
                d = r(8472);
            let u = async e => {
                try {
                    var t, r;
                    let a = (await d.Z.post("".concat(l.Z, "/api/ranking/wealth"), {
                            server_id: e
                        }, {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })).data,
                        n = (t = a.ct, r = a.iv, o().AES.decrypt(t, r).toString(o().enc.Utf8).replace(/^"(.*)"$/, "$1"));
                    return JSON.parse(n)
                } catch (e) {
                    return
                }
            };

            function p() {
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
                    document.title = "Xếp Hạng T\xedch Lũy - Ninja School Online"
                }, []);
                let r = t[0].name,
                    [c, o] = (0, n.useState)(t[0].id),
                    [l, d] = (0, n.useState)(r),
                    [p, m] = (0, n.useState)(!1),
                    x = e => {
                        d(e.name), o(e.id), m(!1)
                    },
                    {
                        data: h,
                        isLoading: g,
                        isError: y
                    } = (0, i.useQuery)(["wealthData", c], () => u(c), {
                        keepPreviousData: !0,
                        staleTime: 3e5
                    }),
                    f = (null == h ? void 0 : h.map(e => e.name)) || [],
                    v = (null == h ? void 0 : h.map(e => e.countvxmm)) || [];
                return (0, a.jsxs)("div", {
                    className: "max-w-[700px] mx-auto",
                    children: [(0, a.jsx)("div", {
                        className: "flex justify-between items-center capitalize mb-4",
                        children: (0, a.jsxs)("div", {
                            children: [(0, a.jsxs)("div", {
                                className: "flex items-center",
                                children: [(0, a.jsx)("span", {
                                    className: "icon-[bxs--circle] w-4 h-4 text-primary-500 dark:text-primary-400 md:mr-4 mr-2"
                                }), (0, a.jsx)("p", {
                                    className: "md:text-2xl text-xl font-bold text-gray-700 dark:text-gray-300",
                                    children: "TOP T\xedch Lũy V\xf2ng Xoay May Mắn"
                                })]
                            }), (0, a.jsx)("p", {
                                className: "break-words text-gray-500 dark:text-gray-400 md:text-lg text-sm md:mt-1",
                                children: "Xếp Hạng T\xedch Lũy V\xf2ng Xoay May Mắn"
                            })]
                        })
                    }), (0, a.jsxs)("div", {
                        className: "relative",
                        children: [(0, a.jsx)("div", {
                            className: "inline-flex w-full",
                            children: (0, a.jsxs)("button", {
                                onClick: () => m(!p),
                                type: "button",
                                className: "relative w-full focus:outline-none border-0 inline-flex items-center text-left cursor-default rounded-md text-sm gap-x-2.5 px-3.5 py-2.5 pe-11 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-1.5 focus:ring-primary-500 dark:focus:ring-primary-400",
                                children: [(0, a.jsx)("p", {
                                    className: "truncate ".concat("text-gray-900 font-semibold"),
                                    children: l
                                }), (0, a.jsx)("span", {
                                    className: "absolute inset-y-0 end-0 flex items-center pointer-events-none px-3.5",
                                    children: (0, a.jsx)("span", {
                                        className: "icon-[bx--chevron-down] flex-shrink-0 text-gray-400 dark:text-gray-500 text-gray-500 dark:text-gray-400 h-5 w-5"
                                    })
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            className: "absolute z-20 w-full py-1 mt-1 menu-dropdown ".concat(p ? "transition-opacity duration-200 ease-in-out show" : ""),
                            children: (0, a.jsx)("ul", {
                                className: "relative focus:outline-none overflow-y-auto scroll-py-1 ring-1 ring-gray-200 dark:ring-gray-700 rounded-md shadow-lg bg-white dark:bg-gray-800 p-1 max-h-60",
                                children: t.map(e => (0, a.jsxs)("li", {
                                    onClick: () => x(e),
                                    className: "cursor-pointer select-none relative flex items-center justify-between gap-1 rounded-md px-2 py-1.5 text-sm text-gray-900 dark:text-white hover:bg-gray-200 hover:text-gray-900 dark:hover:text-gray-100 dark:hover:bg-gray-900 hover:font-semibold ".concat(e.id === c ? "bg-gray-200 text-gray-900 font-semibold dark:hover:text-gray-100 dark:hover:bg-gray-900 dark:text-gray-100 dark:bg-gray-900" : ""),
                                    children: [(0, a.jsx)("div", {
                                        className: "flex items-center gap-2 min-w-0",
                                        children: (0, a.jsx)("span", {
                                            className: "truncate",
                                            children: e.name
                                        })
                                    }), e.id === c && (0, a.jsx)("span", {
                                        className: "absolute inset-y-0 right-0 flex items-center pr-4",
                                        children: (0, a.jsx)("span", {
                                            className: "icon-[bx--check] h-5 w-5 text-gray-900 dark:text-white"
                                        })
                                    })]
                                }, e.id))
                            })
                        })]
                    }), (0, a.jsx)("div", {
                        className: "relative overflow-visible rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900 mt-4",
                        children: (0, a.jsx)("div", {
                            className: "p-0 sm:p-0",
                            children: (0, a.jsx)("div", {
                                className: "relative overflow-x-auto",
                                children: (0, a.jsxs)("table", {
                                    className: "min-w-full table-fixed divide-y divide-gray-300 dark:divide-gray-700",
                                    children: [(0, a.jsx)("thead", {
                                        className: "relative",
                                        children: (0, a.jsxs)("tr", {
                                            className: "",
                                            children: [(0, a.jsx)("th", {
                                                scope: "col",
                                                className: "text-left rtl:text-right whitespace-nowrap px-4 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                                                children: (0, a.jsx)("span", {
                                                    children: "Xếp hạng"
                                                })
                                            }), (0, a.jsx)("th", {
                                                scope: "col",
                                                className: "text-left rtl:text-right whitespace-nowrap px-4 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                                                children: (0, a.jsx)("span", {
                                                    children: "Nh\xe2n Vật"
                                                })
                                            }), (0, a.jsx)("th", {
                                                scope: "col",
                                                className: "text-left rtl:text-right whitespace-nowrap px-4 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                                                children: (0, a.jsx)("span", {
                                                    children: "T\xedch Lũy (VXMM)"
                                                })
                                            })]
                                        })
                                    }), (0, a.jsx)("tbody", {
                                        className: "divide-y divide-gray-200 dark:divide-gray-800",
                                        children: g ? (0, a.jsx)("tr", {
                                            children: (0, a.jsx)("td", {
                                                colSpan: 3,
                                                className: "px-4 py-4",
                                                children: (0, a.jsxs)("div", {
                                                    className: "flex justify-center items-center",
                                                    children: [(0, a.jsx)("span", {
                                                        className: "icon-[bx--loader-alt] w-6 h-6 text-primary-500 dark:text-primary-400 animate-spin mr-2"
                                                    }), (0, a.jsx)("p", {
                                                        className: "break-words text-sm text-gray-500 dark:text-gray-400 font-semibold",
                                                        children: "Đang tải..."
                                                    })]
                                                })
                                            })
                                        }) : y ? (0, a.jsx)("tr", {
                                            children: (0, a.jsx)("td", {
                                                colSpan: 3,
                                                className: "px-4 py-4",
                                                children: (0, a.jsxs)("div", {
                                                    className: "flex justify-center items-center",
                                                    children: [(0, a.jsx)("span", {
                                                        className: "icon-[bx--error] w-6 h-6 text-red-500 dark:text-red-400 mr-2"
                                                    }), (0, a.jsx)("p", {
                                                        className: "break-words text-sm text-red-500 dark:text-red-400 font-semibold",
                                                        children: "C\xf3 lỗi xảy ra"
                                                    })]
                                                })
                                            })
                                        }) : 0 === f.length ? (0, a.jsx)("tr", {
                                            className: "text-gray-500 dark:text-gray-400",
                                            children: (0, a.jsx)("td", {
                                                colSpan: 3,
                                                className: "px-4 py-4 text-sm text-center",
                                                children: "Chưa c\xf3 dữ liệu"
                                            })
                                        }) : f.map((e, t) => (0, a.jsxs)("tr", {
                                            children: [(0, a.jsx)("td", {
                                                className: "whitespace-nowrap px-4 py-4 text-gray-500 dark:text-gray-400 text-sm",
                                                children: t + 1
                                            }), (0, a.jsx)("td", {
                                                className: "whitespace-nowrap px-4 py-4 text-primary-500 dark:text-primary-400 text-sm font-medium",
                                                children: e
                                            }), (0, a.jsxs)("td", {
                                                className: "whitespace-nowrap px-4 py-4 text-gray-500 dark:text-gray-400 text-sm",
                                                children: [v[t].toLocaleString(), " đ"]
                                            })]
                                        }, t))
                                    })]
                                })
                            })
                        })
                    })]
                })
            }
        },
        7661: function(e, t, r) {
            "use strict";
            r.d(t, {
                H: function() {
                    return m
                },
                a: function() {
                    return x
                }
            });
            var a = r(7437),
                n = r(2265),
                s = r(8110),
                i = r.n(s),
                c = r(2649),
                o = r(6463),
                l = r(8472),
                d = r(9555),
                u = r(3984);
            let p = (0, n.createContext)({
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

            function m(e) {
                let {
                    children: t
                } = e, [r, s] = (0, n.useState)(""), [m, x] = (0, n.useState)(""), [h, g] = (0, n.useState)(0), [y, f] = (0, n.useState)(""), [v, k] = (0, n.useState)(0), [w, j] = (0, n.useState)(""), [N, b] = (0, n.useState)(""), [S, _] = (0, n.useState)(""), [C, Z] = (0, n.useState)(""), [E, O] = (0, n.useState)(!1), [T, P] = (0, n.useState)(new Date), [A, D] = (0, n.useState)(""), [U, R] = (0, n.useState)(""), [L, I] = (0, n.useState)(""), [J, M] = (0, n.useState)(""), [z, B] = (0, n.useState)(""), [V, X] = (0, n.useState)(""), [H, F] = (0, n.useState)(""), [$, K] = (0, n.useState)(""), [Q, W] = (0, n.useState)(""), [q, G] = (0, n.useState)(""), [Y, ee] = (0, n.useState)(""), et = (0, o.useRouter)();

                function er(e, t) {
                    return i().AES.decrypt(e, t).toString(i().enc.Utf8).replace(/^"(.*)"$/, "$1")
                }

                function ea() {
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
                    let r = t.data;
                    return JSON.parse(er(r.ct, r.iv))
                }
                let {
                    data: ei,
                    isLoading: ec,
                    isError: eo,
                    refetch: el
                } = (0, d.useQuery)("profile", es, {
                    enabled: !!c.Z.get("access_token"),
                    onSuccess: e => {
                        g(e.kh), k(e.online), j(e.user_id), s(e.username), x(e.name), f(e.balance), G(e.phone), ee(e.email), _(e.tongnap), I(e.role), M(e.countvxmm), Z(e.tongnapthang), D(e.last_login_time), R(e.last_logout_time), O(!0)
                    },
                    onError: e => {}
                });
                async function ed() {
                    try {
                        let {
                            data: e
                        } = await l.Z.post("".concat(u.Z, "/api/settings")), {
                            ct: t,
                            iv: r
                        } = e, a = er(t, r);
                        return JSON.parse(a) || null
                    } catch (e) {
                        throw Error("Error fetching posts")
                    }
                }(0, n.useEffect)(() => {
                    el()
                }, []);
                let {
                    data: eu,
                    error: ep,
                    isLoading: em,
                    refetch: ex
                } = (0, d.useQuery)("settings", ed, {
                    onSuccess: e => {
                        let t = e.find(e => "link_zalo" === e.key),
                            r = e.find(e => "link_page" === e.key),
                            a = e.find(e => "ratio_atm" === e.key),
                            n = e.find(e => "ratio_atm" === e.key),
                            s = e.find(e => "ratio_atm" === e.key),
                            i = t ? t.value : null,
                            c = r ? r.value : null,
                            o = a ? a.value : null,
                            l = n ? n.value : null,
                            d = s ? s.value : null;
                        B(i), X(c), F(o), K(l), W(d)
                    },
                    onError: e => {}
                });
                async function eh(e, t) {
                    try {
                        if (c.Z.get("access_token")) return {
                            success: !1,
                            error: "Bạn đ\xe3 đăng nhập rồi."
                        };
                        let r = ea(),
                            a = en(e, r),
                            n = en(t, r),
                            s = await l.Z.post("".concat(u.Z, "/api/user/login"), {
                                ct: a,
                                s: n,
                                iv: r
                            }, {
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            });
                        if (200 === s.status) {
                            let e = s.data,
                                t = er(e.ct, e.iv),
                                r = JSON.parse(t),
                                {
                                    success: a,
                                    error: n,
                                    message: i
                                } = r,
                                o = r.token;
                            return c.Z.set("access_token", o), O(!0), el(), {
                                success: !0,
                                message: i
                            }
                        } {
                            let e = s.data,
                                t = er(e.ct, e.iv),
                                {
                                    error: r,
                                    message: a
                                } = JSON.parse(t);
                            return {
                                success: !1,
                                error: r,
                                message: a
                            }
                        }
                    } catch (e) {
                        return {
                            success: !1,
                            error: "Thông tin tài khoản hoặc mật khẩu không chính xác"
                        }
                    }
                }
                async function eg(e, t, r) {
                    try {
                        if (c.Z.get("access_token")) return {
                            success: !1,
                            error: "Đăng Đăng Nhập Kh\xf4ng Thể Đăng K\xfd."
                        };
                        let a = ea(),
                            n = en(e, a),
                            s = en(JSON.stringify({
                                password: t,
                                confirmPassword: r
                            }), a),
                            i = await l.Z.post("".concat(u.Z, "/api/user/register"), {
                                ct: n,
                                s: s,
                                iv: a
                            }, {
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            });
                        if (200 === i.status) {
                            let e = await i.data,
                                t = er(e.ct, e.iv),
                                r = JSON.parse(t),
                                {
                                    success: a,
                                    error: n,
                                    message: s
                                } = r,
                                o = r.token;
                            return c.Z.set("access_token", o), O(!0), el(), {
                                success: !0,
                                message: s
                            }
                        } {
                            let e = await i.data,
                                t = er(e.ct, e.iv),
                                {
                                    error: r,
                                    message: a
                                } = JSON.parse(t);
                            return {
                                success: !1,
                                error: r,
                                message: a
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
                    ex()
                }, [ex]), (0, n.useEffect)(() => {
                    P(new Date(new Date().toLocaleString("en-US", {
                        timeZone: "Asia/Ho_Chi_Minh"
                    })))
                }, []), (0, a.jsx)(p.Provider, {
                    value: {
                        refetch: el,
                        loginUser: eh,
                        registerUser: eg,
                        username: r,
                        namePlayer: m,
                        logout: function() {
                            localStorage.removeItem("next-secure-v1.j.user"), c.Z.remove("access_token"), c.Z.remove("authToken"), s(""), x(""), g(0), et.push("/home"), O(!1)
                        },
                        activated: h,
                        checkLoginStatus: E,
                        balance: y,
                        online: v,
                        userId: w,
                        VietNameTime: T,
                        decryptData: er,
                        encryptData: en,
                        generateRandomIV: ea,
                        KeyMa: N,
                        TimeLogin: A,
                        TimeLogOut: U,
                        tongnap: S,
                        tongnapthang: C,
                        role: L,
                        countvxmm: J,
                        Zalo: z,
                        PageNso: V,
                        ratio_atm: H,
                        ratio_card: Q,
                        ratio_momo: $,
                        phone: q,
                        email: Y
                    },
                    children: t
                })
            }

            function x() {
                return (0, n.useContext)(p)
            }
        },
        2649: function(e, t, r) {
            "use strict"; /*! js-cookie v3.0.5 | MIT */
            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var a in r) e[a] = r[a]
                }
                return e
            }
            r.d(t, {
                Z: function() {
                    return n
                }
            });
            var n = function e(t, r) {
                function n(e, n, s) {
                    if ("undefined" != typeof document) {
                        "number" == typeof(s = a({}, r, s)).expires && (s.expires = new Date(Date.now() + 864e5 * s.expires)), s.expires && (s.expires = s.expires.toUTCString()), e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                        var i = "";
                        for (var c in s) s[c] && (i += "; " + c, !0 !== s[c] && (i += "=" + s[c].split(";")[0]));
                        return document.cookie = e + "=" + t.write(n, e) + i
                    }
                }
                return Object.create({
                    set: n,
                    get: function(e) {
                        if ("undefined" != typeof document && (!arguments.length || e)) {
                            for (var r = document.cookie ? document.cookie.split("; ") : [], a = {}, n = 0; n < r.length; n++) {
                                var s = r[n].split("="),
                                    i = s.slice(1).join("=");
                                try {
                                    var c = decodeURIComponent(s[0]);
                                    if (a[c] = t.read(i, c), e === c) break
                                } catch (e) {}
                            }
                            return e ? a[e] : a
                        }
                    },
                    remove: function(e, t) {
                        n(e, "", a({}, t, {
                            expires: -1
                        }))
                    },
                    withAttributes: function(t) {
                        return e(this.converter, a({}, this.attributes, t))
                    },
                    withConverter: function(t) {
                        return e(a({}, this.converter, t), this.attributes)
                    }
                }, {
                    attributes: {
                        value: Object.freeze(r)
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
            return e(e.s = 2939)
        }), _N_E = e.O()
    }
]);