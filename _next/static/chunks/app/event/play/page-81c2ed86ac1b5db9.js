(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9811], {
        2480: function() {},
        2181: function(e, t, a) {
            Promise.resolve().then(a.bind(a, 3091))
        },
        3984: function(e, t) {
            "use strict";
            t.Z = "https://api.nsoace2.com"
        },
        3091: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return y
                }
            });
            var r = a(7437),
                s = a(2265),
                i = a(7661),
                n = a(8472),
                l = a(8110),
                o = a.n(l),
                c = a(3984);
            let d = async () => {
                try {
                    var e, t;
                    let a = await n.Z.post("".concat(c.Z, "/api/event/giftsPlay"), {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }),
                        r = await a.data,
                        s = (e = r.ct, t = r.iv, o().AES.decrypt(e, t).toString(o().enc.Utf8).replace(/^"(.*)"$/, "$1"));
                    return JSON.parse(s)
                } catch (e) {
                    return
                }
            };
            var m = a(6469),
                x = a(4461),
                g = a(4241),
                u = a(9555),
                h = a(1553);
            let p = "Asia/Ho_Chi_Minh";

            function y() {
                let [e, t] = (0, s.useState)(!1), [a, l] = (0, s.useState)(!1), o = (0, s.useRef)(null), y = (0, s.useRef)(null), [f, b] = (0, s.useState)(null), {
                    online: v,
                    userId: k,
                    checkLoginStatus: j,
                    VietNameTime: w,
                    decryptData: N,
                    encryptData: S,
                    generateRandomIV: E,
                    username: C,
                    namePlayer: _,
                    TimeLogin: T,
                    TimeLogOut: Z
                } = (0, i.a)(), [H, z] = (0, s.useState)([]), [O, L] = (0, s.useState)([]), [I, J] = (0, s.useState)([]), [M, A] = (0, s.useState)({}), [W, F] = (0, s.useState)([]), [K, q] = (0, s.useState)([]), [D, P] = (0, s.useState)([]), [U, Q] = (0, s.useState)([]), [V, R] = (0, s.useState)([]), [Y, $] = (0, s.useState)(0), [B, G] = (0, s.useState)([{
                    id: "",
                    name: "",
                    quantity: 0
                }]), [X, ee] = (0, s.useState)(0), [et, ea] = (0, s.useState)(0), [er, es] = (0, s.useState)("Chọn Nh\xe2n Vật"), [ei, en] = (0, s.useState)(!1), [el, eo] = (0, s.useState)(""), [ec, ed] = (0, s.useState)(""), em = (e, a) => {
                    let r = e.currentTarget,
                        s = null,
                        i = null;
                    if (s = r.querySelector(".object-cover"), i = r.querySelector(".flex .font-bold"), s && i) {
                        var n;
                        b({
                            name: s.getAttribute("alt") || "",
                            imageSrc: s.getAttribute("src") || "",
                            quantity: (null === (n = i.textContent) || void 0 === n ? void 0 : n.trim()) || ""
                        }), t(!0)
                    }
                }, ex = (e, t, a, r, s, i) => {
                    F(e => [...e, a]), Q(e => e.includes(s) ? e : [...e, s]), R(e => e.includes(i) ? e : [...e, i]), q(e => [...e, t]), P(e => [...e, r]), l(!0)
                };
                (0, s.useEffect)(() => {
                    document.title = "Sự Kiện T\xedch Lũy Giờ Chơi - Ninja School Online"
                }, []);
                let eg = () => {
                        t(!1)
                    },
                    eu = () => {
                        es("Chọn Nh\xe2n Vật"), l(!1), F([]), Q([]), R([]), q([]), P([]), eo("")
                    },
                    eh = t => {
                        let r = o.current,
                            s = y.current;
                        if (!(t instanceof MouseEvent && 0 !== t.button || t instanceof KeyboardEvent && "Escape" !== t.key)) {
                            if (e && a) {
                                if (r && !r.contains(t.target)) {
                                    eg();
                                    return
                                }
                                if (s && !s.contains(t.target)) {
                                    eu();
                                    return
                                }
                            }
                            if (e && r && !r.contains(t.target)) {
                                eg();
                                return
                            }
                            if (a && s && !s.contains(t.target)) {
                                eu();
                                return
                            }
                            "Escape" === t.key && (e && eg(), a && eu())
                        }
                    };
                (0, s.useEffect)(() => (e || a ? (document.addEventListener("mousedown", eh), document.addEventListener("keydown", eh)) : (document.removeEventListener("mousedown", eh), document.removeEventListener("keydown", eh)), () => {
                    document.removeEventListener("mousedown", eh), document.removeEventListener("keydown", eh)
                }), [e, a]);
                let {
                    data: ep,
                    isError: ey,
                    isLoading: ef
                } = (0, u.useQuery)("giftcodes_play", d);

                function eb(e) {
                    return e >= 1e9 ? (e / 1e9).toFixed(1).replace(".0", "") + "b" : e >= 1e8 ? (e / 1e6).toFixed(0) + "m" : e >= 1e6 ? (e / 1e6).toFixed(1).replace(".0", "") + "m" : e >= 1e5 ? (e / 1e3).toFixed(0) + "k" : e >= 1e4 ? (e / 1e3).toFixed(1).replace(".0", "") + "k" : e.toString()
                }(0, s.useEffect)(() => {
                    if (ep) {
                        let e = ep.map(e => e),
                            t = ep.map(e => e.house),
                            a = ep.map(e => e.gift_name);
                        z(t), L(a), J(e)
                    }
                }, [ep]), (0, s.useEffect)(() => {
                    eS(), eC()
                }, [k]);
                let ev = e => {
                        var t;
                        let a = (0, h.zW)(w, p),
                            r = a.getFullYear(),
                            s = a.getMonth() + 1;
                        return "present" === (null === (t = M[(0, m.WU)(new Date(r, s - 1, e), "yyyy-MM-dd")]) || void 0 === t ? void 0 : t.status)
                    },
                    ek = e => {
                        var t;
                        let a = null === (t = M[e]) || void 0 === t ? void 0 : t.status;
                        (e => {
                            let t = e.split(" ");
                            return parseInt(t[0]), parseInt(t[2]), parseInt(t[4])
                        })(ec);
                        let r = ej(e);
                        return "Điểm danh" === r && j ? "focus:outline-none flex-shrink-0 font-medium rounded-md text-xs gap-x-1.5 px-2.5 py-1.5 shadow-sm inline-flex items-center text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400" : "Chưa đạt" === r ? "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-xs gap-x-1.5 px-2.5 py-1.5 shadow-sm inline-flex items-center focus-visible:outline-0 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400" : "present" === a ? "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-xs gap-x-1.5 px-2.5 py-1.5 shadow-sm inline-flex items-center text-gray-500 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 dark:disabled:bg-gray-600" : "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-xs gap-x-1.5 px-2.5 py-1.5 shadow-sm inline-flex items-center focus-visible:outline-0 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
                    },
                    ej = e => {
                        var t;
                        let a = null === (t = M[e]) || void 0 === t ? void 0 : t.status,
                            r = (e => {
                                let t = e.split(" ");
                                return 3600 * (parseInt(t[0]) || 0) + 60 * (parseInt(t[2]) || 0) + (parseInt(t[4]) || 0)
                            })(ec);
                        return a ? "present" === a ? "Đ\xe3 Nhận" : "Chưa Đạt" : j ? 3600 * e <= r ? "Điểm danh" : "Chưa đạt" : "Chưa đăng nhập"
                    },
                    ew = e => {
                        es(e), en(!1)
                    },
                    eN = () => !!_ || (eo("Chưa tạo nh\xe2n vật"), !1),
                    eS = async () => {
                        if (0 === v && T && Z) try {
                            var e, t, a;
                            let r = E(),
                                s = (0, x.Qc)(T, "HH:mm:ss dd/MM/yyyy", new Date),
                                i = (0, x.Qc)(Z, "HH:mm:ss dd/MM/yyyy", new Date);
                            if (isNaN(s.getTime()) || isNaN(i.getTime())) throw Error("Invalid date format");
                            let l = (0, g.y)({
                                    start: s,
                                    end: i
                                }),
                                o = null !== (e = l.hours) && void 0 !== e ? e : 0,
                                d = null !== (t = l.minutes) && void 0 !== t ? t : 0,
                                m = null !== (a = l.seconds) && void 0 !== a ? a : 0,
                                u = "".concat(o.toString().padStart(2, "0"), ":").concat(d.toString().padStart(2, "0"), ":").concat(m.toString().padStart(2, "0")),
                                h = S(k, r),
                                p = S(JSON.stringify({
                                    TimeHost: u,
                                    TimeLogin: T,
                                    TimeLogOut: Z
                                }), r),
                                y = await n.Z.post("".concat(c.Z, "/api/event/plays"), {
                                    ct: h,
                                    s: p,
                                    iv: r
                                });
                            if (200 === y.status) {
                                let e = y.data,
                                    t = N(e.ct, e.iv);
                                JSON.parse(t)
                            }
                        } catch (e) {}
                    },
                    eE = async (e, t, a, r) => {
                        if (j) try {
                            let s = (0, h.WU)(w, "yyyy-MM-dd HH:mm:ss", {
                                    timeZone: p
                                }),
                                i = E(),
                                l = S(JSON.stringify({
                                    userId: k,
                                    luong: a,
                                    yen: r,
                                    giftName: t,
                                    status: "present",
                                    events: "play"
                                }), i),
                                o = S(JSON.stringify({
                                    house: e,
                                    Timestamp: s,
                                    key: i
                                }), i),
                                d = await n.Z.post("".concat(c.Z, "/api/event/claim"), {
                                    ct: l,
                                    s: o,
                                    iv: i
                                });
                            if (200 === d.status) {
                                let e = d.data,
                                    t = N(e.ct, e.iv);
                                JSON.parse(t), eu()
                            }
                            eC()
                        } catch (e) {}
                    },
                    eC = async () => {
                        if (j) try {
                            let e = E(),
                                t = S(k, e),
                                a = S("play", e),
                                r = await n.Z.get("".concat(c.Z, "/api/event/claim"), {
                                    params: {
                                        ct: t,
                                        iv: e,
                                        s: a
                                    }
                                });
                            if (200 !== r.status) throw Error("Network response was not ok");
                            let s = r.data,
                                i = N(s.ct, s.iv),
                                l = JSON.parse(i);
                            A(l)
                        } catch (e) {}
                    };
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
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
                                        children: "T\xedch lũy giờ chơi nhận qu\xe0"
                                    })]
                                }), (0, r.jsx)("p", {
                                    className: "break-words text-gray-500 dark:text-gray-400 md:text-lg text-sm md:mt-1",
                                    children: "T\xedch lũy giờ chơi nhận qu\xe0"
                                })]
                            })
                        }), (0, r.jsx)("div", {
                            children: (0, r.jsxs)("div", {
                                className: "relative min-h-[200px]",
                                children: [(0, r.jsx)("div", {
                                    className: "mb-2",
                                    children: j && (0, r.jsxs)("span", {
                                        className: "text-gray-500 dark:text-gray-400 break-words",
                                        children: [(0, r.jsx)("span", {
                                            className: "font-semibold",
                                            children: "T\xedch lũy: "
                                        }), ec]
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "relative overflow-visible rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900",
                                    children: (0, r.jsx)("div", {
                                        className: "p-0 sm:p-0",
                                        children: (0, r.jsx)("div", {
                                            className: "relative overflow-x-auto",
                                            children: (0, r.jsxs)("table", {
                                                className: "min-w-full table-fixed divide-y divide-gray-300 dark:divide-gray-700",
                                                children: [(0, r.jsx)("thead", {
                                                    children: (0, r.jsxs)("tr", {
                                                        children: [(0, r.jsx)("th", {
                                                            scope: "col",
                                                            className: "text-left rtl:text-right whitespace-nowrap px-3 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                                                            children: (0, r.jsx)("span", {
                                                                children: "Mốc"
                                                            })
                                                        }), (0, r.jsx)("th", {
                                                            scope: "col",
                                                            className: "text-left rtl:text-right whitespace-nowrap px-3 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                                                            children: (0, r.jsx)("span", {
                                                                children: "Phần thưởng"
                                                            })
                                                        }), (0, r.jsx)("th", {
                                                            scope: "col",
                                                            className: "text-left rtl:text-right whitespace-nowrap px-3 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                                                            children: (0, r.jsx)("span", {
                                                                children: "Trạng th\xe1i"
                                                            })
                                                        })]
                                                    })
                                                }), ef ? (0, r.jsx)("tbody", {
                                                    children: (0, r.jsx)("tr", {
                                                        children: (0, r.jsx)("td", {
                                                            colSpan: 3,
                                                            className: "px-4 py-4",
                                                            children: (0, r.jsxs)("div", {
                                                                className: "flex justify-center items-center",
                                                                children: [(0, r.jsx)("span", {
                                                                    className: "icon-[bx--loader-alt] w-6 h-6 text-primary-500 dark:text-primary-400 animate-spin mr-2"
                                                                }), (0, r.jsx)("p", {
                                                                    className: "break-words text-sm text-gray-500 dark:text-gray-400 font-semibold",
                                                                    children: "Đang tải..."
                                                                })]
                                                            })
                                                        })
                                                    })
                                                }) : ey ? (0, r.jsx)("tbody", {
                                                    children: (0, r.jsx)("tr", {
                                                        children: (0, r.jsx)("td", {
                                                            colSpan: 3,
                                                            className: "px-4 py-4",
                                                            children: (0, r.jsxs)("div", {
                                                                className: "flex justify-center items-center",
                                                                children: [(0, r.jsx)("span", {
                                                                    className: "icon-[bx--error] w-6 h-6 text-red-500 dark:text-red-400 mr-2"
                                                                }), (0, r.jsx)("p", {
                                                                    className: "break-words text-sm text-red-500 dark:text-red-400 font-semibold",
                                                                    children: "C\xf3 lỗi xảy ra"
                                                                })]
                                                            })
                                                        })
                                                    })
                                                }) : (null == I ? void 0 : I.length) === 0 ? (0, r.jsx)("tbody", {
                                                    children: (0, r.jsx)("tr", {
                                                        className: "text-gray-500 dark:text-gray-400",
                                                        children: (0, r.jsx)("td", {
                                                            colSpan: 3,
                                                            className: "px-4 py-4 text-sm text-center",
                                                            children: "Chưa c\xf3 dữ liệu"
                                                        })
                                                    })
                                                }) : I.map((e, a) => (0, r.jsx)("tbody", {
                                                    className: "divide-y divide-gray-200 dark:divide-gray-800",
                                                    children: (0, r.jsxs)("tr", {
                                                        children: [(0, r.jsx)("td", {
                                                            className: "whitespace-nowrap px-3 py-4 text-gray-500 dark:text-gray-400 text-sm",
                                                            children: (0, r.jsxs)("p", {
                                                                className: "break-words font-semibold",
                                                                children: [e.house, " Giờ"]
                                                            })
                                                        }), O[a] && O[a].length > 0 ? (0, r.jsx)("td", {
                                                            className: "whitespace-nowrap px-3 py-4 text-gray-500 dark:text-gray-400 text-sm",
                                                            children: (0, r.jsx)("div", {
                                                                className: "flex items-center flex-wrap gap-2 sm:min-w-[auto] min-w-[250px]",
                                                                children: O[a].map((i, n) => (0, r.jsxs)(s.Fragment, {
                                                                    children: [0 === n && void 0 !== e.luong && 0 !== e.luong && (0, r.jsx)("div", {
                                                                        onClick: e => {
                                                                            t(!0), em(e)
                                                                        },
                                                                        className: "relative inline-block hover:ring-primary-500 dark:hover:ring-primary-400 cursor-pointer rounded-xl",
                                                                        children: (0, r.jsxs)("div", {
                                                                            className: "relative select-none transition-all rounded-xl p-1 hover:ring-primary-500 dark:hover:ring-primary-400 cursor-pointer",
                                                                            style: {
                                                                                maxHeight: "55px",
                                                                                maxWidth: "55px"
                                                                            },
                                                                            children: [(0, r.jsx)("img", {
                                                                                alt: "Lượng",
                                                                                loading: "lazy",
                                                                                width: "110",
                                                                                height: "110",
                                                                                decoding: "async",
                                                                                "data-nimg": "1",
                                                                                className: "object-cover select-none",
                                                                                src: "/images/items/coin.webp",
                                                                                style: {
                                                                                    color: "transparent",
                                                                                    maxHeight: "50px"
                                                                                }
                                                                            }), (0, r.jsx)("div", {
                                                                                className: "flex items-center absolute bottom-1 right-1 rounded-md px-[5px] bg-gray-600 dark:bg-gray-700 cursor-pointer",
                                                                                children: (0, r.jsx)("p", {
                                                                                    className: "break-words font-bold text-center",
                                                                                    style: {
                                                                                        color: "rgb(255, 255, 255)",
                                                                                        fontSize: "10px"
                                                                                    },
                                                                                    children: eb(e.luong)
                                                                                })
                                                                            })]
                                                                        })
                                                                    }, "luong-".concat(a, "-").concat(n)), 0 === n && void 0 !== e.yen && 0 !== e.yen && (0, r.jsx)("div", {
                                                                        onClick: e => {
                                                                            t(!0), em(e)
                                                                        },
                                                                        className: "relative inline-block hover:ring-primary-500 dark:hover:ring-primary-400 cursor-pointer rounded-xl",
                                                                        children: (0, r.jsxs)("div", {
                                                                            className: "relative select-none transition-all rounded-xl p-1 hover:ring-primary-500 dark:hover:ring-primary-400 cursor-pointer",
                                                                            style: {
                                                                                maxHeight: "55px",
                                                                                maxWidth: "36px"
                                                                            },
                                                                            children: [(0, r.jsx)("img", {
                                                                                alt: "Y\xean",
                                                                                loading: "lazy",
                                                                                width: "110",
                                                                                height: "110",
                                                                                decoding: "async",
                                                                                "data-nimg": "1",
                                                                                className: "object-cover select-none",
                                                                                src: "/images/items/12.webp",
                                                                                style: {
                                                                                    color: "transparent",
                                                                                    maxHeight: "50px"
                                                                                }
                                                                            }), (0, r.jsx)("div", {
                                                                                className: "flex items-center absolute bottom-1 right-1 rounded-md px-[5px] bg-gray-600 dark:bg-gray-700 cursor-pointer",
                                                                                children: (0, r.jsx)("p", {
                                                                                    className: "break-words font-bold text-center",
                                                                                    style: {
                                                                                        color: "rgb(255, 255, 255)",
                                                                                        fontSize: "10px"
                                                                                    },
                                                                                    children: eb(e.yen)
                                                                                })
                                                                            })]
                                                                        })
                                                                    }, "yen-".concat(a, "-").concat(n)), (0, r.jsxs)("div", {
                                                                        onClick: e => {
                                                                            t(!0), em(e)
                                                                        },
                                                                        className: "relative inline-block hover:ring-primary-500 dark:hover:ring-primary-400 cursor-pointer rounded-xl",
                                                                        children: [(0, r.jsx)("div", {
                                                                            className: "relative select-none transition-all rounded-xl p-1",
                                                                            style: {
                                                                                maxHeight: "55px",
                                                                                maxWidth: "55px"
                                                                            },
                                                                            children: (0, r.jsx)("img", {
                                                                                alt: i.name,
                                                                                loading: "lazy",
                                                                                width: "110",
                                                                                height: "110",
                                                                                decoding: "async",
                                                                                "data-nimg": "1",
                                                                                className: "object-cover select-none",
                                                                                src: "/images/items/".concat(i.id, ".webp"),
                                                                                style: {
                                                                                    color: "transparent",
                                                                                    maxHeight: "50px"
                                                                                }
                                                                            })
                                                                        }), (0, r.jsx)("div", {
                                                                            className: "flex items-center absolute bottom-1 right-1 rounded-md px-[5px] bg-gray-600 dark:bg-gray-700 cursor-pointer",
                                                                            children: (0, r.jsxs)("p", {
                                                                                className: "break-words font-bold text-center",
                                                                                style: {
                                                                                    color: "rgb(255, 255, 255)",
                                                                                    fontSize: "10px"
                                                                                },
                                                                                children: ["x", eb(i.quantity)]
                                                                            })
                                                                        })]
                                                                    }, "item-".concat(n))]
                                                                }, "".concat(a, "-").concat(n)))
                                                            })
                                                        }) : (0, r.jsx)("td", {
                                                            className: "whitespace-nowrap px-3 py-4 text-gray-500 dark:text-gray-400 text-sm",
                                                            children: (0, r.jsx)("p", {
                                                                className: "break-words font-semibold uppercase",
                                                                children: "Trống"
                                                            })
                                                        }), (0, r.jsx)("td", {
                                                            className: "whitespace-nowrap px-3 py-4 text-sm",
                                                            children: (0, r.jsx)("button", {
                                                                className: ek(e.house),
                                                                type: "button",
                                                                disabled: "Điểm danh" !== ej(e.house) && (!ev(e.house) || !j),
                                                                onClick: t => {
                                                                    $(e.house), G(O[a]), ee(e.luong), ea(e.yen), l(!0), O[a].forEach(a => {
                                                                        ex(t, a.quantity, a.id, a.name, e.luong, e.yen)
                                                                    })
                                                                },
                                                                children: ej(e.house)
                                                            })
                                                        })]
                                                    })
                                                }, a))]
                                            })
                                        })
                                    })
                                })]
                            })
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "fixed inset-0 flex z-10 ".concat(a ? "showhiden ease-in-out duration-300" : "hiden ease-in duration-500"),
                        children: [(0, r.jsx)("div", {
                            className: "fixed inset-0 transition-opacity bg-white/25 dark:bg-black/50 backdrop-blur"
                        }), (0, r.jsx)("div", {
                            className: "fixed inset-0 overflow-y-auto ",
                            children: (0, r.jsx)("div", {
                                className: "flex min-h-full sm:items-center justify-center text-center items-center p-4 sm:p-0 ".concat(a ? "showhidenn ease-in-out duration-300" : "hidenn ease-in duration-500"),
                                children: (0, r.jsx)("div", {
                                    ref: y,
                                    className: "relative text-left rtl:text-right flex flex-col overflow-visible bg-white dark:bg-gray-900 shadow-xl w-full rounded-lg sm:my-8 sm:max-w-lg",
                                    children: (0, r.jsxs)("form", {
                                        className: "p-4",
                                        children: [(0, r.jsxs)("div", {
                                            className: "mb-4",
                                            children: [(0, r.jsx)("div", {
                                                className: "flex content-center items-center justify-between text-sm",
                                                children: (0, r.jsx)("label", {
                                                    className: "block font-medium text-gray-700 dark:text-gray-200",
                                                    children: "Nh\xe2n vật"
                                                })
                                            }), (0, r.jsx)("div", {
                                                className: "relative mt-1",
                                                children: (0, r.jsxs)("div", {
                                                    className: "relative",
                                                    "data-headlessui-state": "",
                                                    children: [(0, r.jsx)("div", {
                                                        className: "inline-flex w-full ",
                                                        id: "headlessui-listbox-button-:r8:",
                                                        children: (0, r.jsxs)("button", {
                                                            onClick: () => eN() && en(!ei),
                                                            className: "z-10 relative w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 inline-flex items-center text-left cursor-default rounded-md text-sm gap-x-2.5 px-3.5 py-2.5 pe-11 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-1.5  dark:focus:ring-primary-400 ".concat(el ? "ring-red-500" : "focus:ring-primary-500", " "),
                                                            type: "button",
                                                            children: [(0, r.jsx)("p", {
                                                                className: "break-words truncate dark:text-gray-100 dark:bg-gray-900 ".concat(er === "T\xe0i Khoản: ".concat(_) ? " text-gray-900 font-semibold" : ""),
                                                                children: er
                                                            }), (0, r.jsx)("span", {
                                                                className: "absolute inset-y-0 end-0 flex items-center pointer-events-none px-3.5",
                                                                children: (0, r.jsx)("span", {
                                                                    className: "icon-[bx--chevron-down] flex-shrink-0 text-gray-400 dark:text-gray-500 text-gray-500 dark:text-gray-400 h-5 w-5"
                                                                })
                                                            })]
                                                        })
                                                    }), el && (0, r.jsx)("p", {
                                                        className: "text-red-500 text-sm mt-2",
                                                        children: el
                                                    }), (0, r.jsx)("div", {
                                                        className: "absolute z-20 w-full py-1 mt-1 menu-dropdown ".concat(ei ? "transition-opacity duration-200 ease-in-out show" : ""),
                                                        children: (0, r.jsx)("ul", {
                                                            className: "relative focus:outline-none overflow-y-auto scroll-py-1 ring-1 ring-gray-200 dark:ring-gray-700 rounded-md shadow-lg bg-white dark:bg-gray-800 p-1 max-h-60",
                                                            children: (0, r.jsxs)("li", {
                                                                onClick: () => ew("T\xe0i Khoản: ".concat(_)),
                                                                className: "cursor-default select-none relative flex items-center justify-between gap-1 rounded-md px-2 py-1.5 text-sm text-gray-900 dark:text-white hover:bg-gray-200 hover:text-gray-900 dark:hover:text-gray-100 dark:hover:bg-gray-900 hover:font-semibold ".concat(er === "T\xe0i Khoản: ".concat(C) ? "bg-gray-200 text-gray-900 font-semibold dark:hover:text-gray-100 dark:hover:bg-gray-900 dark:text-gray-100 dark:bg-gray-900" : ""),
                                                                children: [(0, r.jsx)("div", {
                                                                    className: "flex items-center gap-2 min-w-0",
                                                                    children: (0, r.jsxs)("span", {
                                                                        className: "truncate",
                                                                        children: ["T\xe0i Khoản: ", _]
                                                                    })
                                                                }), er === "T\xe0i Khoản: ".concat(_) && (0, r.jsx)("span", {
                                                                    className: "absolute inset-y-0 right-0 flex items-center pr-4",
                                                                    children: (0, r.jsx)("span", {
                                                                        className: "icon-[bx--check] h-5 w-5 text-gray-900 dark:text-white"
                                                                    })
                                                                })]
                                                            })
                                                        })
                                                    })]
                                                })
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "mb-4",
                                            children: [(0, r.jsx)("div", {
                                                className: "flex content-center items-center justify-between text-sm",
                                                children: (0, r.jsx)("label", {
                                                    className: "block font-medium text-gray-700 dark:text-gray-200",
                                                    children: "Phần thưởng"
                                                })
                                            }), (0, r.jsx)("div", {
                                                className: "relative mt-2",
                                                children: (0, r.jsx)("div", {
                                                    className: "relative overflow-visible rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900",
                                                    children: (0, r.jsx)("div", {
                                                        className: "p-2 sm:p-2",
                                                        children: (0, r.jsxs)("div", {
                                                            className: "flex items-center flex-wrap gap-2 justify-center",
                                                            children: [U.filter(e => parseInt(e, 10) >= 1).map((e, t) => (0, r.jsxs)("div", {
                                                                onClick: e => em(e, "luongItem"),
                                                                className: "relative inline-block hover:ring-primary-500 dark:hover:ring-primary-400 cursor-pointer rounded-xl",
                                                                children: [(0, r.jsx)("div", {
                                                                    className: "relative select-none transition-all rounded-xl p-1",
                                                                    style: {
                                                                        maxWidth: "55px",
                                                                        maxHeight: "55px"
                                                                    },
                                                                    children: (0, r.jsx)("img", {
                                                                        alt: "Lượng",
                                                                        loading: "lazy",
                                                                        width: "240",
                                                                        height: "240",
                                                                        decoding: "async",
                                                                        className: "object-cover select-none",
                                                                        src: "/images/items/coin.webp",
                                                                        style: {
                                                                            color: "transparent",
                                                                            maxHeight: "60px"
                                                                        }
                                                                    })
                                                                }), (0, r.jsx)("div", {
                                                                    className: "flex items-center absolute bottom-1 right-1 rounded-md px-[5px] bg-gray-600 dark:bg-gray-700 cursor-pointer",
                                                                    children: (0, r.jsxs)("p", {
                                                                        className: "break-words font-bold text-center",
                                                                        style: {
                                                                            color: "rgb(255, 255, 255)",
                                                                            fontSize: "10px"
                                                                        },
                                                                        children: ["x", e]
                                                                    })
                                                                })]
                                                            }, "luong-".concat(t))), V.filter(e => parseInt(e, 10) >= 1).map((e, t) => (0, r.jsxs)("div", {
                                                                onClick: e => em(e, "yenItem"),
                                                                className: "relative inline-block hover:ring-primary-500 dark:hover:ring-primary-400 cursor-pointer rounded-xl",
                                                                children: [(0, r.jsx)("div", {
                                                                    className: "relative select-none transition-all rounded-xl p-1",
                                                                    style: {
                                                                        maxWidth: "36px",
                                                                        maxHeight: "55px"
                                                                    },
                                                                    children: (0, r.jsx)("img", {
                                                                        alt: "Y\xean",
                                                                        loading: "lazy",
                                                                        width: "240",
                                                                        height: "240",
                                                                        decoding: "async",
                                                                        className: "object-cover select-none",
                                                                        src: "/images/items/12.webp",
                                                                        style: {
                                                                            color: "transparent",
                                                                            maxHeight: "60px"
                                                                        }
                                                                    })
                                                                }), (0, r.jsx)("div", {
                                                                    className: "flex items-center absolute bottom-1 right-1 rounded-md px-[5px] bg-gray-600 dark:bg-gray-700 cursor-pointer",
                                                                    children: (0, r.jsxs)("p", {
                                                                        className: "break-words font-bold text-center",
                                                                        style: {
                                                                            color: "rgb(255, 255, 255)",
                                                                            fontSize: "10px"
                                                                        },
                                                                        children: ["x", eb(e)]
                                                                    })
                                                                })]
                                                            }, "yen-".concat(t))), W.map((e, t) => (0, r.jsxs)("div", {
                                                                onClick: e => em(e, "IdItem"),
                                                                className: "relative inline-block hover:ring-primary-500 dark:hover:ring-primary-400 cursor-pointer rounded-xl",
                                                                children: [(0, r.jsx)("div", {
                                                                    className: "relative select-none transition-all rounded-xl p-1",
                                                                    style: {
                                                                        maxWidth: "55px",
                                                                        maxHeight: "55px"
                                                                    },
                                                                    children: (0, r.jsx)("img", {
                                                                        alt: D[t],
                                                                        loading: "lazy",
                                                                        width: "240",
                                                                        height: "240",
                                                                        decoding: "async",
                                                                        className: "object-cover select-none",
                                                                        src: "/images/items/".concat(e, ".webp"),
                                                                        style: {
                                                                            color: "transparent",
                                                                            maxHeight: "60px"
                                                                        }
                                                                    })
                                                                }), (0, r.jsx)("div", {
                                                                    className: "flex items-center absolute bottom-1 right-1 rounded-md px-[5px] bg-gray-600 dark:bg-gray-700 cursor-pointer",
                                                                    children: (0, r.jsxs)("p", {
                                                                        className: "break-words font-bold text-center",
                                                                        style: {
                                                                            color: "rgb(255, 255, 255)",
                                                                            fontSize: "10px"
                                                                        },
                                                                        children: ["x", K[t]]
                                                                    })
                                                                })]
                                                            }, "item-".concat(t)))]
                                                        })
                                                    })
                                                })
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "flex justify-end items-center mt-4",
                                            children: [(0, r.jsx)("button", {
                                                onClick: () => eE(Y, B, X, et),
                                                type: "button",
                                                disabled: "Chọn Nh\xe2n Vật" === er,
                                                className: "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 inline-flex items-center mr-1",
                                                children: "Nhận"
                                            }), (0, r.jsx)("button", {
                                                type: "button",
                                                className: "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center",
                                                children: "Đ\xf3ng"
                                            })]
                                        })]
                                    })
                                })
                            })
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "fixed inset-0 flex z-50 ".concat(e ? "showhiden ease-in-out duration-300" : "hiden ease-in duration-500"),
                        children: [(0, r.jsx)("div", {
                            className: "fixed inset-0 transition-opacity bg-white/25 dark:bg-black/50 backdrop-blur"
                        }), (0, r.jsx)("div", {
                            className: "fixed inset-0 overflow-y-auto",
                            children: (0, r.jsx)("div", {
                                className: "flex min-h-full sm:items-center justify-center text-center items-center p-4 sm:p-0 ".concat(e ? "showhidenn ease-in-out duration-300" : "hidenn ease-in duration-300"),
                                children: (0, r.jsx)("div", {
                                    ref: o,
                                    className: "relative text-left rtl:text-right flex flex-col overflow-visible bg-white dark:bg-gray-900 shadow-xl w-full rounded-lg sm:my-8 max-w-[220px] sm:max-w-[220px]",
                                    children: (0, r.jsxs)("div", {
                                        className: "p-4 sm:p-4",
                                        children: [(0, r.jsx)("div", {
                                            className: "relative select-none transition-all rounded-xl mx-auto",
                                            style: {
                                                maxWidth: f && "Y\xean" === f.name ? "30px" : "55px",
                                                maxHeight: "60px"
                                            },
                                            children: (0, r.jsx)("img", {
                                                alt: f ? f.name : "",
                                                loading: "lazy",
                                                width: "240",
                                                height: "240",
                                                decoding: "async",
                                                className: "object-cover select-none",
                                                src: f ? f.imageSrc : "",
                                                style: {
                                                    color: "transparent",
                                                    maxHeight: "60px"
                                                }
                                            })
                                        }), (0, r.jsxs)("div", {
                                            className: "flex flex-col items-center mt-4",
                                            children: [(0, r.jsx)("p", {
                                                className: "break-words text-gray-500 dark:text-gray-400 font-bold text-center leading-5",
                                                children: f ? f.name : ""
                                            }), (0, r.jsxs)("span", {
                                                className: "inline-flex items-center rounded-md text-sm py-1 bg-primary-500 dark:bg-primary-400 text-white dark:text-gray-900 mt-4 px-3 font-semibold",
                                                children: ["x", " ", f ? function(e) {
                                                    let t = e.charAt(e.length - 1),
                                                        a = e.replace(/[^\d.]/g, ""),
                                                        r = 1;
                                                    return "k" === t ? r = 1e3 : "m" === t ? r = 1e6 : "b" === t && (r = 1e9), (parseFloat(a) * r).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                                                }(f.quantity) : ""]
                                            })]
                                        })]
                                    })
                                })
                            })
                        })]
                    })]
                })
            }
        },
        7661: function(e, t, a) {
            "use strict";
            a.d(t, {
                H: function() {
                    return g
                },
                a: function() {
                    return u
                }
            });
            var r = a(7437),
                s = a(2265),
                i = a(8110),
                n = a.n(i),
                l = a(2649),
                o = a(6463),
                c = a(8472),
                d = a(9555),
                m = a(3984);
            let x = (0, s.createContext)({
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

            function g(e) {
                let {
                    children: t
                } = e, [a, i] = (0, s.useState)(""), [g, u] = (0, s.useState)(""), [h, p] = (0, s.useState)(0), [y, f] = (0, s.useState)(""), [b, v] = (0, s.useState)(0), [k, j] = (0, s.useState)(""), [w, N] = (0, s.useState)(""), [S, E] = (0, s.useState)(""), [C, _] = (0, s.useState)(""), [T, Z] = (0, s.useState)(!1), [H, z] = (0, s.useState)(new Date), [O, L] = (0, s.useState)(""), [I, J] = (0, s.useState)(""), [M, A] = (0, s.useState)(""), [W, F] = (0, s.useState)(""), [K, q] = (0, s.useState)(""), [D, P] = (0, s.useState)(""), [U, Q] = (0, s.useState)(""), [V, R] = (0, s.useState)(""), [Y, $] = (0, s.useState)(""), [B, G] = (0, s.useState)(""), [X, ee] = (0, s.useState)(""), et = (0, o.useRouter)();

                function ea(e, t) {
                    return n().AES.decrypt(e, t).toString(n().enc.Utf8).replace(/^"(.*)"$/, "$1")
                }

                function er() {
                    return n().lib.WordArray.random(16).toString(n().enc.Hex)
                }

                function es(e, t) {
                    return n().AES.encrypt(JSON.stringify(e), t).toString()
                }
                async function ei() {
                    let e = l.Z.get("access_token");
                    if (!e) throw Error("Access token not found");
                    let t = await c.Z.get("".concat(m.Z, "/api/user/profile"), {
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
                    data: en,
                    isLoading: el,
                    isError: eo,
                    refetch: ec
                } = (0, d.useQuery)("profile", ei, {
                    enabled: !!l.Z.get("access_token"),
                    onSuccess: e => {
                        p(e.kh), v(e.online), j(e.user_id), i(e.username), u(e.name), f(e.balance), G(e.phone), ee(e.email), E(e.tongnap), A(e.role), F(e.countvxmm), _(e.tongnapthang), L(e.last_login_time), J(e.last_logout_time), Z(!0)
                    },
                    onError: e => {}
                });
                async function ed() {
                    try {
                        let {
                            data: e
                        } = await c.Z.post("".concat(m.Z, "/api/settings")), {
                            ct: t,
                            iv: a
                        } = e, r = ea(t, a);
                        return JSON.parse(r) || null
                    } catch (e) {
                        throw Error("Error fetching posts")
                    }
                }(0, s.useEffect)(() => {
                    ec()
                }, []);
                let {
                    data: em,
                    error: ex,
                    isLoading: eg,
                    refetch: eu
                } = (0, d.useQuery)("settings", ed, {
                    onSuccess: e => {
                        let t = e.find(e => "link_zalo" === e.key),
                            a = e.find(e => "link_page" === e.key),
                            r = e.find(e => "ratio_atm" === e.key),
                            s = e.find(e => "ratio_atm" === e.key),
                            i = e.find(e => "ratio_atm" === e.key),
                            n = t ? t.value : null,
                            l = a ? a.value : null,
                            o = r ? r.value : null,
                            c = s ? s.value : null,
                            d = i ? i.value : null;
                        q(n), P(l), Q(o), R(c), $(d)
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
                            r = es(e, a),
                            s = es(t, a),
                            i = await c.Z.post("".concat(m.Z, "/api/user/login"), {
                                ct: r,
                                s: s,
                                iv: a
                            }, {
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            });
                        if (200 === i.status) {
                            let e = i.data,
                                t = ea(e.ct, e.iv),
                                a = JSON.parse(t),
                                {
                                    success: r,
                                    error: s,
                                    message: n
                                } = a,
                                o = a.token;
                            return l.Z.set("access_token", o), Z(!0), ec(), {
                                success: !0,
                                message: n
                            }
                        } {
                            let e = i.data,
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
                            s = es(e, r),
                            i = es(JSON.stringify({
                                password: t,
                                confirmPassword: a
                            }), r),
                            n = await c.Z.post("".concat(m.Z, "/api/user/register"), {
                                ct: s,
                                s: i,
                                iv: r
                            }, {
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            });
                        if (200 === n.status) {
                            let e = await n.data,
                                t = ea(e.ct, e.iv),
                                a = JSON.parse(t),
                                {
                                    success: r,
                                    error: s,
                                    message: i
                                } = a,
                                o = a.token;
                            return l.Z.set("access_token", o), Z(!0), ec(), {
                                success: !0,
                                message: i
                            }
                        } {
                            let e = await n.data,
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
                return (0, s.useEffect)(() => {
                    eu()
                }, [eu]), (0, s.useEffect)(() => {
                    z(new Date(new Date().toLocaleString("en-US", {
                        timeZone: "Asia/Ho_Chi_Minh"
                    })))
                }, []), (0, r.jsx)(x.Provider, {
                    value: {
                        refetch: ec,
                        loginUser: eh,
                        registerUser: ep,
                        username: a,
                        namePlayer: g,
                        logout: function() {
                            localStorage.removeItem("next-secure-v1.j.user"), l.Z.remove("access_token"), l.Z.remove("authToken"), i(""), u(""), p(0), et.push("/home"), Z(!1)
                        },
                        activated: h,
                        checkLoginStatus: T,
                        balance: y,
                        online: b,
                        userId: k,
                        VietNameTime: H,
                        decryptData: ea,
                        encryptData: es,
                        generateRandomIV: er,
                        KeyMa: w,
                        TimeLogin: O,
                        TimeLogOut: I,
                        tongnap: S,
                        tongnapthang: C,
                        role: M,
                        countvxmm: W,
                        Zalo: K,
                        PageNso: D,
                        ratio_atm: U,
                        ratio_card: Y,
                        ratio_momo: V,
                        phone: B,
                        email: X
                    },
                    children: t
                })
            }

            function u() {
                return (0, s.useContext)(x)
            }
        }
    },
    function(e) {
        e.O(0, [8472, 4728, 2228, 3991, 7478, 7023, 1744], function() {
            return e(e.s = 2181)
        }), _N_E = e.O()
    }
]);