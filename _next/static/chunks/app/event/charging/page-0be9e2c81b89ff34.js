(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9490], {
        2480: function() {},
        3505: function(e, t, r) {
            Promise.resolve().then(r.bind(r, 5312))
        },
        3984: function(e, t) {
            "use strict";
            t.Z = "https://api.nsoace2.com"
        },
        5312: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return g
                }
            });
            var a = r(7437),
                s = r(2265),
                n = r(8472),
                i = r(8110),
                l = r.n(i),
                o = r(3984);
            let c = async () => {
                try {
                    var e, t;
                    let r = await n.Z.post("".concat(o.Z, "/api/event/giftsAll"), {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }),
                        a = await r.data,
                        s = (e = a.ct, t = a.iv, l().AES.decrypt(e, t).toString(l().enc.Utf8).replace(/^"(.*)"$/, "$1"));
                    return JSON.parse(s)
                } catch (e) {
                    return
                }
            };
            var d = r(1553),
                m = r(7661),
                x = r(9555);

            function g() {
                let [e, t] = (0, s.useState)(!1), [r, i] = (0, s.useState)(!1), l = (0, s.useRef)(null), g = (0, s.useRef)(null), [u, h] = (0, s.useState)(null), {
                    online: p,
                    userId: y,
                    checkLoginStatus: b,
                    VietNameTime: v,
                    decryptData: f,
                    encryptData: k,
                    generateRandomIV: j,
                    username: N,
                    namePlayer: w,
                    TimeLogin: S,
                    TimeLogOut: _,
                    tongnap: C
                } = (0, m.a)(), [E, Z] = (0, s.useState)([]), [T, z] = (0, s.useState)([]), [H, L] = (0, s.useState)([]), [O, A] = (0, s.useState)({}), [J, K] = (0, s.useState)([]), [W, F] = (0, s.useState)([]), [I, D] = (0, s.useState)([]), [V, q] = (0, s.useState)([]), [M, P] = (0, s.useState)([]), [U, R] = (0, s.useState)(0), [Y, $] = (0, s.useState)([{
                    id: "",
                    name: "",
                    quantity: 0
                }]), [B, Q] = (0, s.useState)(0), [G, X] = (0, s.useState)(0), [ee, et] = (0, s.useState)("Chọn Nh\xe2n Vật"), [er, ea] = (0, s.useState)(!1), [es, en] = (0, s.useState)(""), [ei, el] = (0, s.useState)(""), eo = (e, r) => {
                    let a = e.currentTarget,
                        s = null,
                        n = null;
                    if (s = a.querySelector(".object-cover"), n = a.querySelector(".flex .font-bold"), s && n) {
                        var i;
                        h({
                            name: s.getAttribute("alt") || "",
                            imageSrc: s.getAttribute("src") || "",
                            quantity: (null === (i = n.textContent) || void 0 === i ? void 0 : i.trim()) || ""
                        }), t(!0)
                    }
                }, ec = (e, t, r, a, s, n) => {
                    null !== r && K(e => [...e, r]), null !== t && F(e => [...e, t]), null !== a && D(e => [...e, a]), q(e => e.includes(s) ? e : [...e, s]), P(e => e.includes(n) ? e : [...e, n]), i(!0)
                };
                (0, s.useEffect)(() => {
                    document.title = "Sự Kiện T\xedch Nạp - Ninja School Online"
                }, []);
                let ed = () => {
                        t(!1)
                    },
                    em = () => {
                        et("Chọn Nh\xe2n Vật"), i(!1), K([]), q([]), P([]), F([]), D([]), en("")
                    },
                    ex = t => {
                        let a = l.current,
                            s = g.current;
                        if (!(t instanceof MouseEvent && 0 !== t.button || t instanceof KeyboardEvent && "Escape" !== t.key)) {
                            if (e && r) {
                                if (a && !a.contains(t.target)) {
                                    ed();
                                    return
                                }
                                if (s && !s.contains(t.target)) {
                                    em();
                                    return
                                }
                            }
                            if (e && a && !a.contains(t.target)) {
                                ed();
                                return
                            }
                            if (r && s && !s.contains(t.target)) {
                                em();
                                return
                            }
                            "Escape" === t.key && (e && ed(), r && em())
                        }
                    };
                (0, s.useEffect)(() => (e || r ? (document.addEventListener("mousedown", ex), document.addEventListener("keydown", ex)) : (document.removeEventListener("mousedown", ex), document.removeEventListener("keydown", ex)), () => {
                    document.removeEventListener("mousedown", ex), document.removeEventListener("keydown", ex)
                }), [e, r]);
                let {
                    data: eg,
                    isError: eu,
                    isLoading: eh
                } = (0, x.useQuery)("giftcodes_all", c);

                function ep(e) {
                    return e >= 1e9 ? (e / 1e9).toFixed(1).replace(".0", "") + "b" : e >= 1e8 ? (e / 1e6).toFixed(0) + "m" : e >= 1e6 ? (e / 1e6).toFixed(1).replace(".0", "") + "m" : e >= 1e5 ? (e / 1e3).toFixed(0) + "k" : e >= 1e4 ? (e / 1e3).toFixed(1).replace(".0", "") + "k" : e.toString()
                }(0, s.useEffect)(() => {
                    if (eg) {
                        let e = eg.map(e => e),
                            t = eg.map(e => e.recharge_all),
                            r = eg.map(e => e.gift_name);
                        Z(t), z(r), L(e)
                    }
                }, [eg]), (0, s.useEffect)(() => {
                    eN()
                }, [y]);
                let ey = e => {
                        var t;
                        return "present" === (null === (t = O[e]) || void 0 === t ? void 0 : t.status)
                    },
                    eb = e => {
                        var t;
                        let r = null === (t = O[e]) || void 0 === t ? void 0 : t.status,
                            a = ev(e);
                        return "Nhận Thưởng" === a && b ? "focus:outline-none flex-shrink-0 font-medium rounded-md text-xs gap-x-1.5 px-2.5 py-1.5 shadow-sm inline-flex items-center text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400" : "Chưa đạt" === a ? "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-xs gap-x-1.5 px-2.5 py-1.5 shadow-sm inline-flex items-center focus-visible:outline-0 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400" : "present" === r ? "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-xs gap-x-1.5 px-2.5 py-1.5 shadow-sm inline-flex items-center text-gray-500 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 dark:disabled:bg-gray-600" : "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-xs gap-x-1.5 px-2.5 py-1.5 shadow-sm inline-flex items-center focus-visible:outline-0 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
                    },
                    ev = e => {
                        var t;
                        let r = null === (t = O[e]) || void 0 === t ? void 0 : t.status;
                        return r ? "present" === r ? "Đ\xe3 Nhận" : "Chưa Đạt" : b ? e <= C ? "Nhận Thưởng" : "Chưa đạt" : "Chưa đăng nhập"
                    },
                    ef = e => {
                        et(e), ea(!1)
                    },
                    ek = () => !!w || (en("Chưa tạo nh\xe2n vật"), !1),
                    ej = async (e, t, r, a) => {
                        if (b) try {
                            let s = (0, d.WU)(v, "yyyy-MM-dd HH:mm:ss", {
                                    timeZone: "Asia/Ho_Chi_Minh"
                                }),
                                i = j(),
                                l = k(JSON.stringify({
                                    userId: y,
                                    luong: r,
                                    yen: a,
                                    giftName: t,
                                    status: "present",
                                    events: "monthAll"
                                }), i),
                                c = k(JSON.stringify({
                                    recharge_all: e,
                                    Timestamp: s,
                                    key: i
                                }), i),
                                m = await n.Z.post("".concat(o.Z, "/api/event/claim"), {
                                    ct: l,
                                    s: c,
                                    iv: i
                                });
                            if (200 === m.status) {
                                let e = m.data,
                                    t = f(e.ct, e.iv);
                                JSON.parse(t), em()
                            }
                            eN()
                        } catch (e) {}
                    },
                    eN = async () => {
                        if (b) try {
                            let e = j(),
                                t = k(y, e),
                                r = k("monthAll", e),
                                a = await n.Z.get("".concat(o.Z, "/api/event/claim"), {
                                    params: {
                                        ct: t,
                                        iv: e,
                                        s: r
                                    }
                                });
                            if (200 !== a.status) throw Error("Network response was not ok");
                            let s = a.data,
                                i = f(s.ct, s.iv),
                                l = JSON.parse(i);
                            A(l)
                        } catch (e) {}
                    };
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: "relative mb-7",
                        children: [(0, a.jsx)("div", {
                            className: "flex justify-between items-center capitalize mb-4",
                            children: (0, a.jsxs)("div", {
                                children: [(0, a.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [(0, a.jsx)("span", {
                                        className: "icon-[bxs--circle] w-4 h-4 text-primary-500 dark:text-primary-400 md:mr-4 mr-2"
                                    }), (0, a.jsx)("p", {
                                        className: "md:text-2xl text-xl font-bold text-gray-700 dark:text-gray-300",
                                        children: "T\xedch Nạp Tổng"
                                    })]
                                }), (0, a.jsx)("p", {
                                    className: "break-words text-gray-500 dark:text-gray-400 md:text-lg text-sm md:mt-1",
                                    children: "Sự Kiện T\xedch Lũy Nạp"
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            children: (0, a.jsxs)("div", {
                                className: "relative min-h-[200px]",
                                children: [(0, a.jsx)("div", {
                                    className: "mb-2",
                                    children: b && (0, a.jsxs)("span", {
                                        className: "text-gray-500 dark:text-gray-400 break-words",
                                        children: [(0, a.jsx)("span", {
                                            className: "font-semibold",
                                            children: "T\xedch lũy: "
                                        }), C.toLocaleString(), " VND"]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "relative overflow-visible rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900",
                                    children: (0, a.jsx)("div", {
                                        className: "p-0 sm:p-0",
                                        children: (0, a.jsx)("div", {
                                            className: "relative overflow-x-auto",
                                            children: (0, a.jsxs)("table", {
                                                className: "min-w-full table-fixed divide-y divide-gray-300 dark:divide-gray-700",
                                                children: [(0, a.jsx)("thead", {
                                                    children: (0, a.jsxs)("tr", {
                                                        children: [(0, a.jsx)("th", {
                                                            scope: "col",
                                                            className: "text-left rtl:text-right whitespace-nowrap px-3 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                                                            children: (0, a.jsx)("span", {
                                                                children: "Mốc"
                                                            })
                                                        }), (0, a.jsx)("th", {
                                                            scope: "col",
                                                            className: "text-left rtl:text-right whitespace-nowrap px-3 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                                                            children: (0, a.jsx)("span", {
                                                                children: "Phần thưởng"
                                                            })
                                                        }), (0, a.jsx)("th", {
                                                            scope: "col",
                                                            className: "text-left rtl:text-right whitespace-nowrap px-3 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                                                            children: (0, a.jsx)("span", {
                                                                children: "Trạng th\xe1i"
                                                            })
                                                        })]
                                                    })
                                                }), eh ? (0, a.jsx)("tbody", {
                                                    children: (0, a.jsx)("tr", {
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
                                                    })
                                                }) : eu ? (0, a.jsx)("tbody", {
                                                    children: (0, a.jsx)("tr", {
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
                                                    })
                                                }) : (null == H ? void 0 : H.length) === 0 ? (0, a.jsx)("tbody", {
                                                    children: (0, a.jsx)("tr", {
                                                        className: "text-gray-500 dark:text-gray-400",
                                                        children: (0, a.jsx)("td", {
                                                            colSpan: 3,
                                                            className: "px-4 py-4 text-sm text-center",
                                                            children: "Chưa c\xf3 dữ liệu"
                                                        })
                                                    })
                                                }) : H.map((e, r) => (0, a.jsx)("tbody", {
                                                    className: "divide-y divide-gray-200 dark:divide-gray-800",
                                                    children: (0, a.jsxs)("tr", {
                                                        children: [(0, a.jsx)("td", {
                                                            className: "whitespace-nowrap px-3 py-4 text-gray-500 dark:text-gray-400 text-sm",
                                                            children: (0, a.jsxs)("p", {
                                                                className: "break-words font-semibold",
                                                                children: [e.recharge_all.toLocaleString("vi-VN"), " VND"]
                                                            })
                                                        }), T[r] && T[r].length > 0 ? (0, a.jsx)("td", {
                                                            className: "whitespace-nowrap px-3 py-4 text-gray-500 dark:text-gray-400 text-sm",
                                                            children: (0, a.jsx)("div", {
                                                                className: "flex items-center flex-wrap gap-2 sm:min-w-[auto] min-w-[250px]",
                                                                children: T[r].map((n, i) => (0, a.jsxs)(s.Fragment, {
                                                                    children: [0 === i && void 0 !== e.luong && 0 !== e.luong && (0, a.jsx)("div", {
                                                                        onClick: e => {
                                                                            t(!0), eo(e)
                                                                        },
                                                                        className: "relative inline-block hover:ring-primary-500 dark:hover:ring-primary-400 cursor-pointer rounded-xl",
                                                                        children: (0, a.jsxs)("div", {
                                                                            className: "relative select-none transition-all rounded-xl p-1 hover:ring-primary-500 dark:hover:ring-primary-400 cursor-pointer",
                                                                            style: {
                                                                                maxHeight: "55px",
                                                                                maxWidth: "55px"
                                                                            },
                                                                            children: [(0, a.jsx)("img", {
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
                                                                            }), (0, a.jsx)("div", {
                                                                                className: "flex items-center absolute bottom-1 right-1 rounded-md px-[5px] bg-gray-600 dark:bg-gray-700 cursor-pointer",
                                                                                children: (0, a.jsx)("p", {
                                                                                    className: "break-words font-bold text-center",
                                                                                    style: {
                                                                                        color: "rgb(255, 255, 255)",
                                                                                        fontSize: "10px"
                                                                                    },
                                                                                    children: ep(e.luong)
                                                                                })
                                                                            })]
                                                                        })
                                                                    }, "luong-".concat(r, "-").concat(i)), 0 === i && void 0 !== e.yen && 0 !== e.yen && (0, a.jsx)("div", {
                                                                        onClick: e => {
                                                                            t(!0), eo(e)
                                                                        },
                                                                        className: "relative inline-block hover:ring-primary-500 dark:hover:ring-primary-400 cursor-pointer rounded-xl",
                                                                        children: (0, a.jsxs)("div", {
                                                                            className: "relative select-none transition-all rounded-xl p-1 hover:ring-primary-500 dark:hover:ring-primary-400 cursor-pointer",
                                                                            style: {
                                                                                maxHeight: "55px",
                                                                                maxWidth: "36px"
                                                                            },
                                                                            children: [(0, a.jsx)("img", {
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
                                                                            }), (0, a.jsx)("div", {
                                                                                className: "flex items-center absolute bottom-1 right-1 rounded-md px-[5px] bg-gray-600 dark:bg-gray-700 cursor-pointer",
                                                                                children: (0, a.jsx)("p", {
                                                                                    className: "break-words font-bold text-center",
                                                                                    style: {
                                                                                        color: "rgb(255, 255, 255)",
                                                                                        fontSize: "10px"
                                                                                    },
                                                                                    children: ep(e.yen)
                                                                                })
                                                                            })]
                                                                        })
                                                                    }, "yen-".concat(r, "-").concat(i)), (0, a.jsxs)("div", {
                                                                        onClick: e => {
                                                                            t(!0), eo(e)
                                                                        },
                                                                        className: "relative inline-block hover:ring-primary-500 dark:hover:ring-primary-400 cursor-pointer rounded-xl",
                                                                        children: [(0, a.jsx)("div", {
                                                                            className: "relative select-none transition-all rounded-xl p-1",
                                                                            style: {
                                                                                maxHeight: "55px",
                                                                                maxWidth: "55px"
                                                                            },
                                                                            children: (0, a.jsx)("img", {
                                                                                alt: n.name,
                                                                                loading: "lazy",
                                                                                width: "110",
                                                                                height: "110",
                                                                                decoding: "async",
                                                                                "data-nimg": "1",
                                                                                className: "object-cover select-none",
                                                                                src: "/images/items/".concat(n.id, ".webp"),
                                                                                style: {
                                                                                    color: "transparent",
                                                                                    maxHeight: "50px"
                                                                                }
                                                                            })
                                                                        }), (0, a.jsx)("div", {
                                                                            className: "flex items-center absolute bottom-1 right-1 rounded-md px-[5px] bg-gray-600 dark:bg-gray-700 cursor-pointer",
                                                                            children: (0, a.jsxs)("p", {
                                                                                className: "break-words font-bold text-center",
                                                                                style: {
                                                                                    color: "rgb(255, 255, 255)",
                                                                                    fontSize: "10px"
                                                                                },
                                                                                children: ["x", ep(n.quantity)]
                                                                            })
                                                                        })]
                                                                    }, "item-".concat(i))]
                                                                }, "".concat(r, "-").concat(i)))
                                                            })
                                                        }) : (0, a.jsx)("td", {
                                                            className: "whitespace-nowrap px-3 py-4 text-gray-500 dark:text-gray-400 text-sm",
                                                            children: (0, a.jsxs)("div", {
                                                                className: "flex items-center flex-wrap gap-2 sm:min-w-[auto] min-w-[250px]",
                                                                children: [void 0 !== e.luong && 0 !== e.luong && (0, a.jsx)("div", {
                                                                    onClick: e => {
                                                                        t(!0), eo(e)
                                                                    },
                                                                    className: "relative inline-block hover:ring-primary-500 dark:hover:ring-primary-400 cursor-pointer rounded-xl",
                                                                    children: (0, a.jsxs)("div", {
                                                                        className: "relative select-none transition-all rounded-xl p-1 hover:ring-primary-500 dark:hover:ring-primary-400 cursor-pointer",
                                                                        style: {
                                                                            maxHeight: "55px",
                                                                            maxWidth: "55px"
                                                                        },
                                                                        children: [(0, a.jsx)("img", {
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
                                                                        }), (0, a.jsx)("div", {
                                                                            className: "flex items-center absolute bottom-1 right-1 rounded-md px-[5px] bg-gray-600 dark:bg-gray-700 cursor-pointer",
                                                                            children: (0, a.jsx)("p", {
                                                                                className: "break-words font-bold text-center",
                                                                                style: {
                                                                                    color: "rgb(255, 255, 255)",
                                                                                    fontSize: "10px"
                                                                                },
                                                                                children: ep(e.luong)
                                                                            })
                                                                        })]
                                                                    })
                                                                }, "luong-".concat(r)), void 0 !== e.yen && 0 !== e.yen && (0, a.jsx)("div", {
                                                                    onClick: e => {
                                                                        t(!0), eo(e)
                                                                    },
                                                                    className: "relative inline-block hover:ring-primary-500 dark:hover:ring-primary-400 cursor-pointer rounded-xl",
                                                                    children: (0, a.jsxs)("div", {
                                                                        className: "relative select-none transition-all rounded-xl p-1 hover:ring-primary-500 dark:hover:ring-primary-400 cursor-pointer",
                                                                        style: {
                                                                            maxHeight: "55px",
                                                                            maxWidth: "36px"
                                                                        },
                                                                        children: [(0, a.jsx)("img", {
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
                                                                        }), (0, a.jsx)("div", {
                                                                            className: "flex items-center absolute bottom-1 right-1 rounded-md px-[5px] bg-gray-600 dark:bg-gray-700 cursor-pointer",
                                                                            children: (0, a.jsx)("p", {
                                                                                className: "break-words font-bold text-center",
                                                                                style: {
                                                                                    color: "rgb(255, 255, 255)",
                                                                                    fontSize: "10px"
                                                                                },
                                                                                children: ep(e.yen)
                                                                            })
                                                                        })]
                                                                    })
                                                                }, "yen-".concat(r))]
                                                            })
                                                        }), (0, a.jsx)("td", {
                                                            className: "whitespace-nowrap px-3 py-4 text-sm",
                                                            children: (0, a.jsx)("button", {
                                                                className: eb(e.recharge_all),
                                                                type: "button",
                                                                disabled: "Nhận Thưởng" !== ev(e.recharge_all) && (!ey(e.recharge_all) || !b),
                                                                onClick: t => {
                                                                    R(e.recharge_all), $(T[r]), Q(e.luong), X(e.yen), i(!0), T[r] && T[r].length > 0 ? T[r].forEach(r => {
                                                                        ec(t, r.quantity, r.id, r.name, e.luong, e.yen)
                                                                    }) : ec(t, null, null, null, e.luong, e.yen)
                                                                },
                                                                children: ev(e.recharge_all)
                                                            })
                                                        })]
                                                    })
                                                }, r))]
                                            })
                                        })
                                    })
                                })]
                            })
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "fixed inset-0 flex z-10 ".concat(r ? "showhiden ease-in-out duration-300" : "hiden ease-in duration-500"),
                        children: [(0, a.jsx)("div", {
                            className: "fixed inset-0 transition-opacity bg-white/25 dark:bg-black/50 backdrop-blur"
                        }), (0, a.jsx)("div", {
                            className: "fixed inset-0 overflow-y-auto ",
                            children: (0, a.jsx)("div", {
                                className: "flex min-h-full sm:items-center justify-center text-center items-center p-4 sm:p-0 ".concat(r ? "showhidenn ease-in-out duration-300" : "hidenn ease-in duration-500"),
                                children: (0, a.jsx)("div", {
                                    ref: g,
                                    className: "relative text-left rtl:text-right flex flex-col overflow-visible bg-white dark:bg-gray-900 shadow-xl w-full rounded-lg sm:my-8 sm:max-w-lg",
                                    children: (0, a.jsxs)("form", {
                                        className: "p-4",
                                        children: [(0, a.jsxs)("div", {
                                            className: "mb-4",
                                            children: [(0, a.jsx)("div", {
                                                className: "flex content-center items-center justify-between text-sm",
                                                children: (0, a.jsx)("label", {
                                                    className: "block font-medium text-gray-700 dark:text-gray-200",
                                                    children: "Nh\xe2n vật"
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "relative mt-1",
                                                children: (0, a.jsxs)("div", {
                                                    className: "relative",
                                                    "data-headlessui-state": "",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "inline-flex w-full ",
                                                        id: "headlessui-listbox-button-:r8:",
                                                        children: (0, a.jsxs)("button", {
                                                            onClick: () => ek() && ea(!er),
                                                            className: "z-10 relative w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 inline-flex items-center text-left cursor-default rounded-md text-sm gap-x-2.5 px-3.5 py-2.5 pe-11 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-1.5  dark:focus:ring-primary-400 ".concat(es ? "ring-red-500" : "focus:ring-primary-500", " "),
                                                            type: "button",
                                                            children: [(0, a.jsx)("p", {
                                                                className: "break-words truncate dark:text-gray-100 dark:bg-gray-900 ".concat(ee === "T\xe0i Khoản: ".concat(w) ? " text-gray-900 font-semibold" : ""),
                                                                children: ee
                                                            }), (0, a.jsx)("span", {
                                                                className: "absolute inset-y-0 end-0 flex items-center pointer-events-none px-3.5",
                                                                children: (0, a.jsx)("span", {
                                                                    className: "icon-[bx--chevron-down] flex-shrink-0 text-gray-400 dark:text-gray-500 text-gray-500 dark:text-gray-400 h-5 w-5"
                                                                })
                                                            })]
                                                        })
                                                    }), es && (0, a.jsx)("p", {
                                                        className: "text-red-500 text-sm mt-2",
                                                        children: es
                                                    }), (0, a.jsx)("div", {
                                                        className: "absolute z-20 w-full py-1 mt-1 menu-dropdown ".concat(er ? "transition-opacity duration-200 ease-in-out show" : ""),
                                                        children: (0, a.jsx)("ul", {
                                                            className: "relative focus:outline-none overflow-y-auto scroll-py-1 ring-1 ring-gray-200 dark:ring-gray-700 rounded-md shadow-lg bg-white dark:bg-gray-800 p-1 max-h-60",
                                                            children: (0, a.jsxs)("li", {
                                                                onClick: () => ef("T\xe0i Khoản: ".concat(w)),
                                                                className: "cursor-default select-none relative flex items-center justify-between gap-1 rounded-md px-2 py-1.5 text-sm text-gray-900 dark:text-white hover:bg-gray-200 hover:text-gray-900 dark:hover:text-gray-100 dark:hover:bg-gray-900 hover:font-semibold ".concat(ee === "T\xe0i Khoản: ".concat(N) ? "bg-gray-200 text-gray-900 font-semibold dark:hover:text-gray-100 dark:hover:bg-gray-900 dark:text-gray-100 dark:bg-gray-900" : ""),
                                                                children: [(0, a.jsx)("div", {
                                                                    className: "flex items-center gap-2 min-w-0",
                                                                    children: (0, a.jsxs)("span", {
                                                                        className: "truncate",
                                                                        children: ["T\xe0i Khoản: ", w]
                                                                    })
                                                                }), ee === "T\xe0i Khoản: ".concat(w) && (0, a.jsx)("span", {
                                                                    className: "absolute inset-y-0 right-0 flex items-center pr-4",
                                                                    children: (0, a.jsx)("span", {
                                                                        className: "icon-[bx--check] h-5 w-5 text-gray-900 dark:text-white"
                                                                    })
                                                                })]
                                                            })
                                                        })
                                                    })]
                                                })
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "mb-4",
                                            children: [(0, a.jsx)("div", {
                                                className: "flex content-center items-center justify-between text-sm",
                                                children: (0, a.jsx)("label", {
                                                    className: "block font-medium text-gray-700 dark:text-gray-200",
                                                    children: "Phần thưởng"
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "relative mt-2",
                                                children: (0, a.jsx)("div", {
                                                    className: "relative overflow-visible rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900",
                                                    children: (0, a.jsx)("div", {
                                                        className: "p-2 sm:p-2",
                                                        children: (0, a.jsxs)("div", {
                                                            className: "flex items-center flex-wrap gap-2 justify-center",
                                                            children: [V.filter(e => parseInt(e, 10) >= 1).map((e, t) => (0, a.jsxs)("div", {
                                                                onClick: e => eo(e, "luongItem"),
                                                                className: "relative inline-block hover:ring-primary-500 dark:hover:ring-primary-400 cursor-pointer rounded-xl",
                                                                children: [(0, a.jsx)("div", {
                                                                    className: "relative select-none transition-all rounded-xl p-1",
                                                                    style: {
                                                                        maxWidth: "55px",
                                                                        maxHeight: "55px"
                                                                    },
                                                                    children: (0, a.jsx)("img", {
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
                                                                }), (0, a.jsx)("div", {
                                                                    className: "flex items-center absolute bottom-1 right-1 rounded-md px-[5px] bg-gray-600 dark:bg-gray-700 cursor-pointer",
                                                                    children: (0, a.jsxs)("p", {
                                                                        className: "break-words font-bold text-center",
                                                                        style: {
                                                                            color: "rgb(255, 255, 255)",
                                                                            fontSize: "10px"
                                                                        },
                                                                        children: ["x", e]
                                                                    })
                                                                })]
                                                            }, "luong-".concat(t))), M.filter(e => parseInt(e, 10) >= 1).map((e, t) => (0, a.jsxs)("div", {
                                                                onClick: e => eo(e, "yenItem"),
                                                                className: "relative inline-block hover:ring-primary-500 dark:hover:ring-primary-400 cursor-pointer rounded-xl",
                                                                children: [(0, a.jsx)("div", {
                                                                    className: "relative select-none transition-all rounded-xl p-1",
                                                                    style: {
                                                                        maxWidth: "36px",
                                                                        maxHeight: "55px"
                                                                    },
                                                                    children: (0, a.jsx)("img", {
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
                                                                }), (0, a.jsx)("div", {
                                                                    className: "flex items-center absolute bottom-1 right-1 rounded-md px-[5px] bg-gray-600 dark:bg-gray-700 cursor-pointer",
                                                                    children: (0, a.jsxs)("p", {
                                                                        className: "break-words font-bold text-center",
                                                                        style: {
                                                                            color: "rgb(255, 255, 255)",
                                                                            fontSize: "10px"
                                                                        },
                                                                        children: ["x", ep(e)]
                                                                    })
                                                                })]
                                                            }, "yen-".concat(t))), J.map((e, t) => (0, a.jsxs)("div", {
                                                                onClick: e => eo(e, "IdItem"),
                                                                className: "relative inline-block hover:ring-primary-500 dark:hover:ring-primary-400 cursor-pointer rounded-xl",
                                                                children: [(0, a.jsx)("div", {
                                                                    className: "relative select-none transition-all rounded-xl p-1",
                                                                    style: {
                                                                        maxWidth: "55px",
                                                                        maxHeight: "55px"
                                                                    },
                                                                    children: (0, a.jsx)("img", {
                                                                        alt: I[t],
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
                                                                }), (0, a.jsx)("div", {
                                                                    className: "flex items-center absolute bottom-1 right-1 rounded-md px-[5px] bg-gray-600 dark:bg-gray-700 cursor-pointer",
                                                                    children: (0, a.jsxs)("p", {
                                                                        className: "break-words font-bold text-center",
                                                                        style: {
                                                                            color: "rgb(255, 255, 255)",
                                                                            fontSize: "10px"
                                                                        },
                                                                        children: ["x", W[t]]
                                                                    })
                                                                })]
                                                            }, "item-".concat(t)))]
                                                        })
                                                    })
                                                })
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "flex justify-end items-center mt-4",
                                            children: [(0, a.jsx)("button", {
                                                onClick: () => ej(U, Y, B, G),
                                                type: "button",
                                                disabled: "Chọn Nh\xe2n Vật" === ee,
                                                className: "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 inline-flex items-center mr-1",
                                                children: "Nhận"
                                            }), (0, a.jsx)("button", {
                                                type: "button",
                                                className: "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center",
                                                children: "Đ\xf3ng"
                                            })]
                                        })]
                                    })
                                })
                            })
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "fixed inset-0 flex z-50 ".concat(e ? "showhiden ease-in-out duration-300" : "hiden ease-in duration-500"),
                        children: [(0, a.jsx)("div", {
                            className: "fixed inset-0 transition-opacity bg-white/25 dark:bg-black/50 backdrop-blur"
                        }), (0, a.jsx)("div", {
                            className: "fixed inset-0 overflow-y-auto",
                            children: (0, a.jsx)("div", {
                                className: "flex min-h-full sm:items-center justify-center text-center items-center p-4 sm:p-0 ".concat(e ? "showhidenn ease-in-out duration-300" : "hidenn ease-in duration-300"),
                                children: (0, a.jsx)("div", {
                                    ref: l,
                                    className: "relative text-left rtl:text-right flex flex-col overflow-visible bg-white dark:bg-gray-900 shadow-xl w-full rounded-lg sm:my-8 max-w-[220px] sm:max-w-[220px]",
                                    children: (0, a.jsxs)("div", {
                                        className: "p-4 sm:p-4",
                                        children: [(0, a.jsx)("div", {
                                            className: "relative select-none transition-all rounded-xl mx-auto",
                                            style: {
                                                maxWidth: u && "Y\xean" === u.name ? "36px" : "55px",
                                                maxHeight: "60px"
                                            },
                                            children: (0, a.jsx)("img", {
                                                alt: u ? u.name : "",
                                                loading: "lazy",
                                                width: "240",
                                                height: "240",
                                                decoding: "async",
                                                className: "object-cover select-none",
                                                src: u ? u.imageSrc : "",
                                                style: {
                                                    color: "transparent",
                                                    maxHeight: "60px"
                                                }
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "flex flex-col items-center mt-4",
                                            children: [(0, a.jsx)("p", {
                                                className: "break-words text-gray-500 dark:text-gray-400 font-bold text-center leading-5",
                                                children: u ? u.name : ""
                                            }), (0, a.jsxs)("span", {
                                                className: "inline-flex items-center rounded-md text-sm py-1 bg-primary-500 dark:bg-primary-400 text-white dark:text-gray-900 mt-4 px-3 font-semibold",
                                                children: ["x", " ", u ? function(e) {
                                                    let t = e.charAt(e.length - 1),
                                                        r = e.replace(/[^\d.]/g, ""),
                                                        a = 1;
                                                    return "k" === t ? a = 1e3 : "m" === t ? a = 1e6 : "b" === t && (a = 1e9), (parseFloat(r) * a).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                                                }(u.quantity) : ""]
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
        7661: function(e, t, r) {
            "use strict";
            r.d(t, {
                H: function() {
                    return g
                },
                a: function() {
                    return u
                }
            });
            var a = r(7437),
                s = r(2265),
                n = r(8110),
                i = r.n(n),
                l = r(2649),
                o = r(6463),
                c = r(8472),
                d = r(9555),
                m = r(3984);
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
                } = e, [r, n] = (0, s.useState)(""), [g, u] = (0, s.useState)(""), [h, p] = (0, s.useState)(0), [y, b] = (0, s.useState)(""), [v, f] = (0, s.useState)(0), [k, j] = (0, s.useState)(""), [N, w] = (0, s.useState)(""), [S, _] = (0, s.useState)(""), [C, E] = (0, s.useState)(""), [Z, T] = (0, s.useState)(!1), [z, H] = (0, s.useState)(new Date), [L, O] = (0, s.useState)(""), [A, J] = (0, s.useState)(""), [K, W] = (0, s.useState)(""), [F, I] = (0, s.useState)(""), [D, V] = (0, s.useState)(""), [q, M] = (0, s.useState)(""), [P, U] = (0, s.useState)(""), [R, Y] = (0, s.useState)(""), [$, B] = (0, s.useState)(""), [Q, G] = (0, s.useState)(""), [X, ee] = (0, s.useState)(""), et = (0, o.useRouter)();

                function er(e, t) {
                    return i().AES.decrypt(e, t).toString(i().enc.Utf8).replace(/^"(.*)"$/, "$1")
                }

                function ea() {
                    return i().lib.WordArray.random(16).toString(i().enc.Hex)
                }

                function es(e, t) {
                    return i().AES.encrypt(JSON.stringify(e), t).toString()
                }
                async function en() {
                    let e = l.Z.get("access_token");
                    if (!e) throw Error("Access token not found");
                    let t = await c.Z.get("".concat(m.Z, "/api/user/profile"), {
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
                    isLoading: el,
                    isError: eo,
                    refetch: ec
                } = (0, d.useQuery)("profile", en, {
                    enabled: !!l.Z.get("access_token"),
                    onSuccess: e => {
                        p(e.kh), f(e.online), j(e.user_id), n(e.username), u(e.name), b(e.balance), G(e.phone), ee(e.email), _(e.tongnap), W(e.role), I(e.countvxmm), E(e.tongnapthang), O(e.last_login_time), J(e.last_logout_time), T(!0)
                    },
                    onError: e => {}
                });
                async function ed() {
                    try {
                        let {
                            data: e
                        } = await c.Z.post("".concat(m.Z, "/api/settings")), {
                            ct: t,
                            iv: r
                        } = e, a = er(t, r);
                        return JSON.parse(a) || null
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
                            r = e.find(e => "link_page" === e.key),
                            a = e.find(e => "ratio_atm" === e.key),
                            s = e.find(e => "ratio_atm" === e.key),
                            n = e.find(e => "ratio_atm" === e.key),
                            i = t ? t.value : null,
                            l = r ? r.value : null,
                            o = a ? a.value : null,
                            c = s ? s.value : null,
                            d = n ? n.value : null;
                        V(i), M(l), U(o), Y(c), B(d)
                    },
                    onError: e => {}
                });
                async function eh(e, t) {
                    try {
                        if (l.Z.get("access_token")) return {
                            success: !1,
                            error: "Bạn đ\xe3 đăng nhập rồi."
                        };
                        let r = ea(),
                            a = es(e, r),
                            s = es(t, r),
                            n = await c.Z.post("".concat(m.Z, "/api/user/login"), {
                                ct: a,
                                s: s,
                                iv: r
                            }, {
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            });
                        if (200 === n.status) {
                            let e = n.data,
                                t = er(e.ct, e.iv),
                                r = JSON.parse(t),
                                {
                                    success: a,
                                    error: s,
                                    message: i
                                } = r,
                                o = r.token;
                            return l.Z.set("access_token", o), T(!0), ec(), {
                                success: !0,
                                message: i
                            }
                        } {
                            let e = n.data,
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
                async function ep(e, t, r) {
                    try {
                        if (l.Z.get("access_token")) return {
                            success: !1,
                            error: "Đăng Đăng Nhập Kh\xf4ng Thể Đăng K\xfd."
                        };
                        let a = ea(),
                            s = es(e, a),
                            n = es(JSON.stringify({
                                password: t,
                                confirmPassword: r
                            }), a),
                            i = await c.Z.post("".concat(m.Z, "/api/user/register"), {
                                ct: s,
                                s: n,
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
                                    error: s,
                                    message: n
                                } = r,
                                o = r.token;
                            return l.Z.set("access_token", o), T(!0), ec(), {
                                success: !0,
                                message: n
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
                return (0, s.useEffect)(() => {
                    eu()
                }, [eu]), (0, s.useEffect)(() => {
                    H(new Date(new Date().toLocaleString("en-US", {
                        timeZone: "Asia/Ho_Chi_Minh"
                    })))
                }, []), (0, a.jsx)(x.Provider, {
                    value: {
                        refetch: ec,
                        loginUser: eh,
                        registerUser: ep,
                        username: r,
                        namePlayer: g,
                        logout: function() {
                            localStorage.removeItem("next-secure-v1.j.user"), l.Z.remove("access_token"), l.Z.remove("authToken"), n(""), u(""), p(0), et.push("/home"), T(!1)
                        },
                        activated: h,
                        checkLoginStatus: Z,
                        balance: y,
                        online: v,
                        userId: k,
                        VietNameTime: z,
                        decryptData: er,
                        encryptData: es,
                        generateRandomIV: ea,
                        KeyMa: N,
                        TimeLogin: L,
                        TimeLogOut: A,
                        tongnap: S,
                        tongnapthang: C,
                        role: K,
                        countvxmm: F,
                        Zalo: D,
                        PageNso: q,
                        ratio_atm: P,
                        ratio_card: $,
                        ratio_momo: R,
                        phone: Q,
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
        e.O(0, [8472, 4728, 2228, 7478, 7023, 1744], function() {
            return e(e.s = 3505)
        }), _N_E = e.O()
    }
]);