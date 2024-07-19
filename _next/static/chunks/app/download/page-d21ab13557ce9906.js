(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6040], {
        2480: function() {},
        1299: function(e, t, a) {
            Promise.resolve().then(a.bind(a, 8702))
        },
        7138: function(e, t, a) {
            "use strict";
            a.d(t, {
                default: function() {
                    return n.a
                }
            });
            var r = a(231),
                n = a.n(r)
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
        8702: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return x
                }
            });
            var r = a(7437),
                n = a(7138),
                s = a(2265),
                i = a(8472),
                l = a(9555),
                c = a(7661),
                o = a(6393);
            a(3436);
            var m = a(3984);

            function x() {
                let {
                    decryptData: e
                } = (0, c.a)(), [t, a] = (0, s.useState)(!1), x = async () => {
                    try {
                        let {
                            data: t
                        } = await i.Z.post("".concat(m.Z, "/api/settings")), {
                            ct: a,
                            iv: r
                        } = t, n = e(a, r);
                        return JSON.parse(n)
                    } catch (e) {
                        throw Error("Error fetching posts")
                    }
                }, {
                    data: d,
                    error: u,
                    isLoading: g,
                    refetch: h
                } = (0, l.useQuery)("posts", x);
                if ((0, s.useEffect)(() => {
                        document.title = "Tải Game - Ninja School Online"
                    }, []), g) return (0, r.jsx)(r.Fragment, {
                    children: [void 0, void 0].map((e, t) => (0, r.jsx)("div", {
                        className: "mx-auto mt-5 max-w-2xl rounded-lg ring-1 ring-gray-200 sm:mt-5 lg:mx-0 lg:flex lg:max-w-none",
                        children: (0, r.jsxs)("div", {
                            className: "p-5 sm:p-10 lg:flex-auto",
                            children: [(0, r.jsx)("h4", {
                                className: "text-xl sm:text-2xl font-bold tracking-tight text-gray-700 dark:text-gray-300",
                                children: (0, r.jsx)(o.Z, {
                                    count: 3
                                })
                            }), (0, r.jsx)("p", {
                                className: "mt-2 text-base leading-7 text-gray-500 dark:text-gray-300",
                                children: (0, r.jsx)(o.Z, {})
                            }), (0, r.jsxs)("div", {
                                className: "mt-4 flex items-center gap-x-4",
                                children: [(0, r.jsx)("h4", {
                                    className: "flex-none text-sm font-semibold leading-6 text-primary-500 dark:text-primary-400",
                                    children: (0, r.jsx)(o.Z, {})
                                }), (0, r.jsx)("div", {
                                    className: "h-px flex-auto bg-gray-100"
                                })]
                            }), (0, r.jsx)("ul", {
                                role: "list",
                                className: "mt-4 grid grid-cols-2 gap-4 text-sm sm:text-base leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6",
                                children: (0, r.jsxs)("li", {
                                    className: "flex gap-x-2",
                                    children: [(0, r.jsx)("span", {
                                        className: "icon-[bx--download] h-6 w-5 flex-none text-primary-500",
                                        children: (0, r.jsx)(o.Z, {})
                                    }), (0, r.jsx)(o.Z, {})]
                                })
                            })]
                        })
                    }, t))
                });
                if (u) return (0, r.jsx)("div", {
                    className: "mx-auto mt-5 max-w-2xl rounded-lg ring-1 ring-gray-200 sm:mt-5 lg:mx-0 lg:flex lg:max-w-none",
                    children: (0, r.jsx)("div", {
                        className: "p-5 sm:p-10 lg:flex-auto",
                        children: (0, r.jsx)("h4", {
                            className: "text-xl sm:text-2xl font-bold tracking-tight text-gray-700 dark:text-gray-300",
                            children: "Lỗi Dữ Liệu"
                        })
                    })
                });
                if (!d) return (0, r.jsx)("div", {
                    className: "mx-auto mt-5 max-w-2xl rounded-lg ring-1 ring-gray-200 sm:mt-5 lg:mx-0 lg:flex lg:max-w-none",
                    children: (0, r.jsx)("div", {
                        className: "p-5 sm:p-10 lg:flex-auto",
                        children: (0, r.jsx)("h4", {
                            className: "text-xl sm:text-2xl font-bold tracking-tight text-gray-700 dark:text-gray-300",
                            children: "Chưa C\xf3 Dữ Liệu"
                        })
                    })
                });
                let p = d.filter(e => "java" === e.key),
                    f = d.filter(e => "apk" === e.key),
                    y = d.filter(e => "ios" === e.key),
                    v = d.filter(e => "pc" === e.key);
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)("div", {
                        className: "relative mb-7",
                        children: [(0, r.jsx)("div", {
                            className: "flex justify-between items-center capitalize mb-4",
                            children: (0, r.jsxs)("div", {
                                children: [(0, r.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [(0, r.jsx)("span", {
                                        className: "icon-[bxs--circle] w-4 h-4 text-primary-500 dark:text-primary-400 md:mr-4 mr-2"
                                    }), (0, r.jsx)("p", {
                                        className: "md:text-2xl text-xl font-bold text-gray-700 dark:text-gray-300",
                                        children: "Tải game cho PC"
                                    })]
                                }), (0, r.jsx)("p", {
                                    className: "break-words text-gray-500 dark:text-gray-400 md:text-lg text-sm md:mt-1",
                                    children: "Phi\xean bản game d\xe0nh cho PC"
                                })]
                            })
                        }), (0, r.jsx)("div", {
                            className: "mx-auto mt-5 max-w-2xl rounded-lg ring-1 ring-gray-200 sm:mt-5 lg:mx-0 lg:flex lg:max-w-none",
                            children: (0, r.jsxs)("div", {
                                className: "p-5 sm:p-10 lg:flex-auto",
                                children: [(0, r.jsx)("h4", {
                                    className: "text-xl sm:text-2xl font-bold tracking-tight text-gray-700 dark:text-gray-300",
                                    children: "Phi\xean bản .EXE"
                                }), (0, r.jsx)("p", {
                                    className: "mt-2 text-base leading-7 text-gray-500 dark:text-gray-300",
                                    children: "Phi\xean bản thuần PC, tải về chơi ngay m\xe0 kh\xf4ng cần c\xe0i đặt th\xeam bất kỳ phần mềm n\xe0o kh\xe1c, độ ổn định kh\xf4ng bằng giả lập Java"
                                }), (0, r.jsxs)("div", {
                                    className: "mt-4 flex items-center gap-x-4",
                                    children: [(0, r.jsx)("h4", {
                                        className: "flex-none text-sm font-semibold leading-6 text-primary-500 dark:text-primary-400",
                                        children: "Link tải game"
                                    }), (0, r.jsx)("div", {
                                        className: "h-px flex-auto bg-gray-100"
                                    })]
                                }), (0, r.jsx)("ul", {
                                    role: "list",
                                    className: "mt-4 grid grid-cols-2 gap-4 text-sm sm:text-base leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6",
                                    children: v.map((e, t) => (0, r.jsxs)("li", {
                                        className: "flex gap-x-2",
                                        children: [(0, r.jsx)("span", {
                                            className: "icon-[bx--download] h-6 w-5 flex-none text-primary-500"
                                        }), (0, r.jsx)(n.default, {
                                            target: "_blank",
                                            className: "text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500",
                                            href: e.value,
                                            children: (0, r.jsx)("span", {
                                                className: "truncate relative font-medium",
                                                children: e.name
                                            })
                                        })]
                                    }, "".concat(e.key, "-").concat(t)))
                                })]
                            })
                        }), (0, r.jsx)("div", {
                            className: "mx-auto mt-5 max-w-2xl rounded-lg ring-1 ring-gray-200 sm:mt-5 lg:mx-0 lg:flex lg:max-w-none",
                            children: (0, r.jsxs)("div", {
                                className: "p-5 sm:p-10 lg:flex-auto",
                                children: [(0, r.jsx)("h4", {
                                    className: "text-xl sm:text-2xl font-bold tracking-tight text-gray-700 dark:text-gray-300",
                                    children: "Phi\xean bản giả lập Java"
                                }), (0, r.jsxs)("p", {
                                    className: "mt-2 text-base leading-7 text-gray-500 dark:text-gray-300",
                                    children: ["Phi\xean bản d\xe0nh cho giả lập Java tr\xean m\xe1y t\xednh, xem hướng dẫn c\xe0i đặt", " ", (0, r.jsx)(n.default, {
                                        className: "text-blue-500 dark:text-blue-400",
                                        href: "/tin-tuc/cai-dat-microemulator-de-dang-de-choi-ninja-school-tren-may-tinh:-huong-dan-nhanh-va-hieu-qua",
                                        children: "tại đ\xe2y"
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "mt-4 flex items-center gap-x-4",
                                    children: [(0, r.jsx)("h4", {
                                        className: "flex-none text-sm font-semibold leading-6 text-primary-500 dark:text-primary-400",
                                        children: "Link tải game"
                                    }), (0, r.jsx)("div", {
                                        className: "h-px flex-auto bg-gray-100"
                                    })]
                                }), (0, r.jsx)("ul", {
                                    role: "list",
                                    className: "mt-4 grid grid-cols-2 gap-4 text-sm sm:text-base leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6",
                                    children: p.map((e, t) => (0, r.jsxs)("li", {
                                        className: "flex gap-x-2",
                                        children: [(0, r.jsx)("span", {
                                            className: "icon-[bx--download] h-6 w-5 flex-none text-primary-500"
                                        }), (0, r.jsx)(n.default, {
                                            target: "_blank",
                                            className: "text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500",
                                            href: e.value,
                                            children: (0, r.jsx)("span", {
                                                className: "truncate relative font-medium",
                                                children: e.name
                                            })
                                        })]
                                    }, "".concat(e.key, "-").concat(t)))
                                })]
                            })
                        }), t && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("div", {
                                className: "mx-auto mt-5 max-w-2xl rounded-lg ring-1 ring-gray-200 sm:mt-5 lg:mx-0 lg:flex lg:max-w-none",
                                children: (0, r.jsxs)("div", {
                                    className: "p-5 sm:p-10 lg:flex-auto",
                                    children: [(0, r.jsx)("h4", {
                                        className: "text-xl sm:text-2xl font-bold tracking-tight text-gray-700 dark:text-gray-300",
                                        children: "Phi\xean bản .APK"
                                    }), (0, r.jsx)("p", {
                                        className: "mt-2 text-base leading-7 text-gray-500 dark:text-gray-300",
                                        children: "File tải .APK, tải về c\xe0i đặt chơi ngay, độ ổn định kh\xf4ng bằng giả lập Java"
                                    }), (0, r.jsxs)("div", {
                                        className: "mt-4 flex items-center gap-x-4",
                                        children: [(0, r.jsx)("h4", {
                                            className: "flex-none text-sm font-semibold leading-6 text-primary-500 dark:text-primary-400",
                                            children: "Link tải game"
                                        }), (0, r.jsx)("div", {
                                            className: "h-px flex-auto bg-gray-100"
                                        })]
                                    }), (0, r.jsx)("ul", {
                                        role: "list",
                                        className: "mt-4 grid grid-cols-1 gap-4 text-sm sm:text-base leading-6 text-gray-600 sm:grid-cols-1 sm:gap-6",
                                        children: f.map(e => (0, r.jsxs)("li", {
                                            className: "flex gap-x-2",
                                            children: [(0, r.jsx)("span", {
                                                className: "icon-[bx--download] h-6 w-5 flex-none text-primary-500"
                                            }), (0, r.jsx)(n.default, {
                                                target: "_blank",
                                                className: "text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500",
                                                href: e.value,
                                                children: (0, r.jsx)("span", {
                                                    className: "truncate relative font-medium",
                                                    children: e.name
                                                })
                                            })]
                                        }, e.key))
                                    })]
                                })
                            }), (0, r.jsx)("div", {
                                className: "mx-auto mt-5 max-w-2xl rounded-lg ring-1 ring-gray-200 sm:mt-5 lg:mx-0 lg:flex lg:max-w-none",
                                children: (0, r.jsxs)("div", {
                                    className: "p-5 sm:p-10 lg:flex-auto",
                                    children: [(0, r.jsx)("h4", {
                                        className: "text-xl sm:text-2xl font-bold tracking-tight text-gray-700 dark:text-gray-300",
                                        children: "C\xe0i đặt qua Test Flight"
                                    }), (0, r.jsx)("p", {
                                        className: "mt-2 text-base leading-7 text-gray-500 dark:text-gray-300",
                                        children: "Phi\xean bản c\xe0i đặt qua Test Flight, cần tải Test Flight tr\xean App Store trước để c\xe0i đặt game."
                                    }), (0, r.jsxs)("div", {
                                        className: "mt-4 flex items-center gap-x-4",
                                        children: [(0, r.jsx)("h4", {
                                            className: "flex-none text-sm font-semibold leading-6 text-primary-500 dark:text-primary-400",
                                            children: "Link tải game"
                                        }), (0, r.jsx)("div", {
                                            className: "h-px flex-auto bg-gray-100"
                                        })]
                                    }), (0, r.jsx)("ul", {
                                        role: "list",
                                        className: "mt-4 grid grid-cols-2 gap-4 text-sm sm:text-base leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6",
                                        children: y.map(e => (0, r.jsxs)("li", {
                                            className: "flex gap-x-2",
                                            children: [(0, r.jsx)("span", {
                                                className: "icon-[bx--download] h-6 w-5 flex-none text-primary-500"
                                            }), (0, r.jsx)(n.default, {
                                                target: "_blank",
                                                className: "text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500",
                                                href: e.value,
                                                children: (0, r.jsx)("span", {
                                                    className: "truncate relative font-medium",
                                                    children: e.name
                                                })
                                            })]
                                        }, e.key))
                                    })]
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: "flex justify-center items-center mt-6",
                            children: (0, r.jsx)("button", {
                                onClick: () => a(!t),
                                className: "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 text-primary-500 dark:text-primary-400 bg-primary-50 hover:bg-primary-100 disabled:bg-primary-50 dark:bg-primary-950 dark:hover:bg-primary-900 dark:disabled:bg-primary-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center",
                                children: t ? (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("span", {
                                        className: "icon-[bx--chevron-up-circle] flex-shrink-0 h-5 w-5"
                                    }), "Ẩn Bớt Phi\xean Bản"]
                                }) : (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("span", {
                                        className: "icon-[bx--chevron-down-circle] flex-shrink-0 h-5 w-5"
                                    }), "Xem Tất Cả Phi\xean Bản"]
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
                    return u
                },
                a: function() {
                    return g
                }
            });
            var r = a(7437),
                n = a(2265),
                s = a(8110),
                i = a.n(s),
                l = a(2649),
                c = a(6463),
                o = a(8472),
                m = a(9555),
                x = a(3984);
            let d = (0, n.createContext)({
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

            function u(e) {
                let {
                    children: t
                } = e, [a, s] = (0, n.useState)(""), [u, g] = (0, n.useState)(""), [h, p] = (0, n.useState)(0), [f, y] = (0, n.useState)(""), [v, k] = (0, n.useState)(0), [j, b] = (0, n.useState)(""), [N, w] = (0, n.useState)(""), [S, _] = (0, n.useState)(""), [C, Z] = (0, n.useState)(""), [E, P] = (0, n.useState)(!1), [O, T] = (0, n.useState)(new Date), [F, A] = (0, n.useState)(""), [J, R] = (0, n.useState)(""), [D, L] = (0, n.useState)(""), [U, B] = (0, n.useState)(""), [I, z] = (0, n.useState)(""), [K, q] = (0, n.useState)(""), [H, M] = (0, n.useState)(""), [Q, V] = (0, n.useState)(""), [X, $] = (0, n.useState)(""), [G, W] = (0, n.useState)(""), [Y, ee] = (0, n.useState)(""), et = (0, c.useRouter)();

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
                    let e = l.Z.get("access_token");
                    if (!e) throw Error("Access token not found");
                    let t = await o.Z.get("".concat(x.Z, "/api/user/profile"), {
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
                    isLoading: el,
                    isError: ec,
                    refetch: eo
                } = (0, m.useQuery)("profile", es, {
                    enabled: !!l.Z.get("access_token"),
                    onSuccess: e => {
                        p(e.kh), k(e.online), b(e.user_id), s(e.username), g(e.name), y(e.balance), W(e.phone), ee(e.email), _(e.tongnap), L(e.role), B(e.countvxmm), Z(e.tongnapthang), A(e.last_login_time), R(e.last_logout_time), P(!0)
                    },
                    onError: e => {}
                });
                async function em() {
                    try {
                        let {
                            data: e
                        } = await o.Z.post("".concat(x.Z, "/api/settings")), {
                            ct: t,
                            iv: a
                        } = e, r = ea(t, a);
                        return JSON.parse(r) || null
                    } catch (e) {
                        throw Error("Error fetching posts")
                    }
                }(0, n.useEffect)(() => {
                    eo()
                }, []);
                let {
                    data: ex,
                    error: ed,
                    isLoading: eu,
                    refetch: eg
                } = (0, m.useQuery)("settings", em, {
                    onSuccess: e => {
                        let t = e.find(e => "link_zalo" === e.key),
                            a = e.find(e => "link_page" === e.key),
                            r = e.find(e => "ratio_atm" === e.key),
                            n = e.find(e => "ratio_atm" === e.key),
                            s = e.find(e => "ratio_atm" === e.key),
                            i = t ? t.value : null,
                            l = a ? a.value : null,
                            c = r ? r.value : null,
                            o = n ? n.value : null,
                            m = s ? s.value : null;
                        z(i), q(l), M(c), V(o), $(m)
                    },
                    onError: e => {}
                });
                async function eh(e, t) {
                    try {
                        if (l.Z.get("access_token")) return {
                            success: !1,
                            error: "Bạn đ\xe3 đăng nhập rồi."
                        };
                        let a = er(),
                            r = en(e, a),
                            n = en(t, a),
                            s = await o.Z.post("".concat(x.Z, "/api/user/login"), {
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
                                c = a.token;
                            return l.Z.set("access_token", c), P(!0), eo(), {
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
                async function ep(e, t, a) {
                    try {
                        if (l.Z.get("access_token")) return {
                            success: !1,
                            error: "Đăng Đăng Nhập Kh\xf4ng Thể Đăng K\xfd."
                        };
                        let r = er(),
                            n = en(e, r),
                            s = en(JSON.stringify({
                                password: t,
                                confirmPassword: a
                            }), r),
                            i = await o.Z.post("".concat(x.Z, "/api/user/register"), {
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
                                c = a.token;
                            return l.Z.set("access_token", c), P(!0), eo(), {
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
                    eg()
                }, [eg]), (0, n.useEffect)(() => {
                    T(new Date(new Date().toLocaleString("en-US", {
                        timeZone: "Asia/Ho_Chi_Minh"
                    })))
                }, []), (0, r.jsx)(d.Provider, {
                    value: {
                        refetch: eo,
                        loginUser: eh,
                        registerUser: ep,
                        username: a,
                        namePlayer: u,
                        logout: function() {
                            localStorage.removeItem("next-secure-v1.j.user"), l.Z.remove("access_token"), l.Z.remove("authToken"), s(""), g(""), p(0), et.push("/home"), P(!1)
                        },
                        activated: h,
                        checkLoginStatus: E,
                        balance: f,
                        online: v,
                        userId: j,
                        VietNameTime: O,
                        decryptData: ea,
                        encryptData: en,
                        generateRandomIV: er,
                        KeyMa: N,
                        TimeLogin: F,
                        TimeLogOut: J,
                        tongnap: S,
                        tongnapthang: C,
                        role: D,
                        countvxmm: U,
                        Zalo: I,
                        PageNso: K,
                        ratio_atm: H,
                        ratio_card: X,
                        ratio_momo: Q,
                        phone: G,
                        email: Y
                    },
                    children: t
                })
            }

            function g() {
                return (0, n.useContext)(d)
            }
        },
        3436: function() {},
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
                        for (var l in s) s[l] && (i += "; " + l, !0 !== s[l] && (i += "=" + s[l].split(";")[0]));
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
                                    var l = decodeURIComponent(s[0]);
                                    if (r[l] = t.read(i, l), e === l) break
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
        },
        6393: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return s
                }
            });
            var r = a(2265);
            let n = r.createContext({});

            function s(e) {
                var t, a, s;
                let {
                    count: i = 1,
                    wrapper: l,
                    className: c,
                    containerClassName: o,
                    containerTestId: m,
                    circle: x = !1,
                    style: d,
                    ...u
                } = e, g = r.useContext(n), h = { ...u
                };
                for (let [e, t] of Object.entries(u)) void 0 === t && delete h[e];
                let p = { ...g,
                        ...h,
                        circle: x
                    },
                    f = { ...d,
                        ... function(e) {
                            let {
                                baseColor: t,
                                highlightColor: a,
                                width: r,
                                height: n,
                                borderRadius: s,
                                circle: i,
                                direction: l,
                                duration: c,
                                enableAnimation: o = !0
                            } = e, m = {};
                            return "rtl" === l && (m["--animation-direction"] = "reverse"), "number" == typeof c && (m["--animation-duration"] = "".concat(c, "s")), o || (m["--pseudo-element-display"] = "none"), ("string" == typeof r || "number" == typeof r) && (m.width = r), ("string" == typeof n || "number" == typeof n) && (m.height = n), ("string" == typeof s || "number" == typeof s) && (m.borderRadius = s), i && (m.borderRadius = "50%"), void 0 !== t && (m["--base-color"] = t), void 0 !== a && (m["--highlight-color"] = a), m
                        }(p)
                    },
                    y = "react-loading-skeleton";
                c && (y += " ".concat(c));
                let v = null !== (t = p.inline) && void 0 !== t && t,
                    k = [],
                    j = Math.ceil(i);
                for (let e = 0; e < j; e++) {
                    let t = f;
                    if (j > i && e === j - 1) {
                        let e = null !== (a = t.width) && void 0 !== a ? a : "100%",
                            r = i % 1,
                            n = "number" == typeof e ? e * r : "calc(".concat(e, " * ").concat(r, ")");
                        t = { ...t,
                            width: n
                        }
                    }
                    let n = r.createElement("span", {
                        className: y,
                        style: t,
                        key: e
                    }, "‌");
                    v ? k.push(n) : k.push(r.createElement(r.Fragment, {
                        key: e
                    }, n, r.createElement("br", null)))
                }
                return r.createElement("span", {
                    className: o,
                    "data-testid": m,
                    "aria-live": "polite",
                    "aria-busy": null === (s = p.enableAnimation) || void 0 === s || s
                }, l ? k.map((e, t) => r.createElement(l, {
                    key: t
                }, e)) : k)
            }
        }
    },
    function(e) {
        e.O(0, [1141, 8472, 4728, 231, 7478, 7023, 1744], function() {
            return e(e.s = 1299)
        }), _N_E = e.O()
    }
]);