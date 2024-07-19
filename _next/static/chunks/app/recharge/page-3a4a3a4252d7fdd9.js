(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1307], {
        2480: function() {},
        8174: function(e, t, r) {
            Promise.resolve().then(r.bind(r, 7561))
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
        7561: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return x
                }
            });
            var a = r(7437),
                s = r(2265),
                n = r(7661);

            function i(e) {
                let {
                    ratio_atm: t,
                    generateRandomIV: r,
                    encryptData: i,
                    userId: l,
                    username: c,
                    decryptData: o
                } = (0, n.a)(), [d, m] = (0, s.useState)(""), [u, x] = (0, s.useState)(""), [g, h] = (0, s.useState)(!1), [p, y] = (0, s.useState)(""), [f, b] = (0, s.useState)(""), v = t => {
                    e.Money(t.target.value)
                };
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("form", {
                        children: [(0, a.jsxs)("div", {
                            className: "mb-4",
                            children: [(0, a.jsx)("div", {
                                className: "flex content-center items-center justify-between text-sm",
                                children: (0, a.jsx)("label", {
                                    htmlFor: "ratio",
                                    className: "block font-medium text-gray-700 dark:text-gray-200",
                                    children: "Tỉ lệ nạp"
                                })
                            }), (0, a.jsx)("div", {
                                className: "relative mt-1",
                                children: (0, a.jsx)("input", {
                                    id: "ratio",
                                    type: "text",
                                    placeholder: "Tỉ lệ nạp",
                                    className: "block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-3.5 py-2.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-1.5 focus:ring-primary-500 dark:focus:ring-primary-400",
                                    value: "".concat(t, "%"),
                                    name: "ratio",
                                    readOnly: !0
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "mb-4",
                            children: [(0, a.jsx)("div", {
                                className: "flex content-center items-center justify-between text-sm",
                                children: (0, a.jsx)("label", {
                                    className: "block font-medium text-gray-700 dark:text-gray-200",
                                    children: "Số tiền"
                                })
                            }), (0, a.jsxs)("div", {
                                className: "relative mt-1",
                                children: [(0, a.jsx)("div", {
                                    className: "relative",
                                    children: (0, a.jsx)("input", {
                                        placeholder: "Nhập Số Tiền",
                                        type: "text",
                                        value: d ? parseInt(d.replace(/\D/g, "")).toLocaleString("vi-VN") : "",
                                        onBlur: () => {
                                            let e = parseInt(d.replace(/\D/g, ""));
                                            e ? e < 1e4 ? x("Y\xeau cầu tối thiểu 10.000") : e > 2e7 ? x("Y\xeau cầu tối đa 20.000.000") : (x(""), m(d)) : x("Kh\xf4ng được bỏ trống")
                                        },
                                        onChange: e => {
                                            m(e.target.value), v(e)
                                        },
                                        name: "amount",
                                        className: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-3.5 py-2.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ".concat(u ? "ring-red-500" : "ring-gray-300 dark:ring-gray-700", " focus:ring-1.5 focus:ring-primary-500 dark:focus:ring-primary-400")
                                    })
                                }), u && (0, a.jsx)("p", {
                                    className: "mt-2 text-red-500 dark:text-red-400 text-sm",
                                    children: u
                                })]
                            })]
                        })]
                    })
                })
            }

            function l() {
                let [e, t] = (0, s.useState)("Chọn Nh\xe0 Mạng"), [r, n] = (0, s.useState)(!1), i = (0, s.useRef)(null), l = e => {
                    t(e), n(!1)
                }, c = () => {
                    n(!1)
                }, o = e => {
                    i.current && !i.current.contains(e.target) && e instanceof MouseEvent && 0 === e.button && c(), e instanceof KeyboardEvent && "Escape" === e.key && c()
                };
                return (0, s.useEffect)(() => (r ? (document.addEventListener("mousedown", o), document.addEventListener("keydown", o)) : (document.removeEventListener("mousedown", o), document.removeEventListener("keydown", o)), () => {
                    document.removeEventListener("mousedown", o), document.removeEventListener("keydown", o)
                }), [r]), (0, a.jsxs)("form", {
                    children: [(0, a.jsxs)("div", {
                        className: "mb-4",
                        children: [(0, a.jsx)("div", {
                            className: "flex content-center items-center justify-between text-sm",
                            children: (0, a.jsx)("label", {
                                className: "block font-medium text-gray-700 dark:text-gray-200",
                                children: "Tỉ lệ nạp"
                            })
                        }), (0, a.jsx)("div", {
                            className: "relative mt-1",
                            children: (0, a.jsx)("input", {
                                type: "text",
                                placeholder: "Tỉ lệ nạp",
                                className: "block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-3.5 py-2.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-1.5 focus:ring-primary-500 dark:focus:ring-primary-400",
                                value: "80%",
                                readOnly: !0
                            })
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "mb-4",
                        children: [(0, a.jsx)("div", {
                            className: "flex content-center items-center justify-between text-sm",
                            children: (0, a.jsx)("label", {
                                htmlFor: "network",
                                className: "block font-medium text-gray-700 dark:text-gray-200",
                                children: "Nh\xe0 Mạng"
                            })
                        }), (0, a.jsx)("div", {
                            className: "relative mt-1",
                            children: (0, a.jsxs)("div", {
                                className: "relative",
                                children: [(0, a.jsx)("div", {
                                    className: "inline-flex w-full",
                                    children: (0, a.jsxs)("button", {
                                        type: "button",
                                        onClick: () => n(!r),
                                        className: "z-10 relative w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 inline-flex items-center text-left cursor-default rounded-md text-sm gap-x-2.5 px-3.5 py-2.5 pe-11 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-1.5 focus:ring-primary-500 dark:focus:ring-primary-400",
                                        children: [(0, a.jsx)("p", {
                                            className: "break-words truncate",
                                            children: e
                                        }), (0, a.jsx)("span", {
                                            className: "absolute inset-y-0 end-0 flex items-center pointer-events-none px-3.5",
                                            children: (0, a.jsx)("span", {
                                                className: "icon-[bx--chevron-down] flex-shrink-0 text-gray-400 dark:text-gray-500 text-gray-500 dark:text-gray-400 h-5 w-5"
                                            })
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "absolute z-20 w-full py-1 mt-1 menu-dropdown ".concat(r ? "transition-opacity duration-200 ease-in-out show" : ""),
                                    children: (0, a.jsxs)("ul", {
                                        className: "relative focus:outline-none overflow-y-auto scroll-py-1 ring-1 ring-gray-200 dark:ring-gray-700 rounded-md shadow-lg bg-white dark:bg-gray-800 p-1 max-h-60",
                                        children: [(0, a.jsx)("li", {
                                            className: "cursor-pointer select-none relative flex items-center justify-between gap-1 rounded-md px-2 py-1.5 text-sm text-gray-900 dark:text-white",
                                            onClick: () => l("Viettel"),
                                            children: (0, a.jsx)("div", {
                                                className: "flex items-center gap-2 min-w-0",
                                                children: (0, a.jsx)("span", {
                                                    className: "truncate",
                                                    children: "Viettel"
                                                })
                                            })
                                        }), (0, a.jsx)("li", {
                                            className: "cursor-pointer select-none relative flex items-center justify-between gap-1 rounded-md px-2 py-1.5 text-sm text-gray-900 dark:text-white",
                                            onClick: () => l("Vinaphone"),
                                            children: (0, a.jsx)("div", {
                                                className: "flex items-center gap-2 min-w-0",
                                                children: (0, a.jsx)("span", {
                                                    className: "truncate",
                                                    children: "Vinaphone"
                                                })
                                            })
                                        }), (0, a.jsx)("li", {
                                            className: "cursor-pointer select-none relative flex items-center justify-between gap-1 rounded-md px-2 py-1.5 text-sm text-gray-900 dark:text-white",
                                            onClick: () => l("Mobifone"),
                                            children: (0, a.jsx)("div", {
                                                className: "flex items-center gap-2 min-w-0",
                                                children: (0, a.jsx)("span", {
                                                    className: "truncate",
                                                    children: "Mobifone"
                                                })
                                            })
                                        })]
                                    })
                                })]
                            })
                        })]
                    })]
                })
            }

            function c(e) {
                let {
                    ratio_momo: t,
                    generateRandomIV: r,
                    encryptData: i,
                    userId: l,
                    username: c,
                    decryptData: o
                } = (0, n.a)(), [d, m] = (0, s.useState)(""), [u, x] = (0, s.useState)(""), [g, h] = (0, s.useState)(!1), [p, y] = (0, s.useState)(""), [f, b] = (0, s.useState)(""), v = t => {
                    e.MoneyMomo(t.target.value)
                };
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("form", {
                        children: [(0, a.jsxs)("div", {
                            className: "mb-4",
                            children: [(0, a.jsx)("div", {
                                className: "flex content-center items-center justify-between text-sm",
                                children: (0, a.jsx)("label", {
                                    htmlFor: "ratio",
                                    className: "block font-medium text-gray-700 dark:text-gray-200",
                                    children: "Tỉ lệ nạp"
                                })
                            }), (0, a.jsx)("div", {
                                className: "relative mt-1",
                                children: (0, a.jsx)("input", {
                                    id: "ratio",
                                    type: "text",
                                    placeholder: "Tỉ lệ nạp",
                                    className: "block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-3.5 py-2.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-1.5 focus:ring-primary-500 dark:focus:ring-primary-400",
                                    value: "".concat(t, "%"),
                                    name: "ratio",
                                    readOnly: !0
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "mb-4",
                            children: [(0, a.jsx)("div", {
                                className: "flex content-center items-center justify-between text-sm",
                                children: (0, a.jsx)("label", {
                                    className: "block font-medium text-gray-700 dark:text-gray-200",
                                    children: "Số tiền"
                                })
                            }), (0, a.jsxs)("div", {
                                className: "relative mt-1",
                                children: [(0, a.jsx)("div", {
                                    className: "relative",
                                    children: (0, a.jsx)("input", {
                                        placeholder: "Nhập Số Tiền",
                                        type: "text",
                                        value: d ? parseInt(d.replace(/\D/g, "")).toLocaleString("vi-VN") : "",
                                        onBlur: () => {
                                            let e = parseInt(d.replace(/\D/g, ""));
                                            e ? e < 1e4 ? x("Y\xeau cầu tối thiểu 10.000") : e > 2e7 ? x("Y\xeau cầu tối đa 20.000.000") : (x(""), m(d)) : x("Kh\xf4ng được bỏ trống")
                                        },
                                        onChange: e => {
                                            m(e.target.value), v(e)
                                        },
                                        name: "amount",
                                        className: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-3.5 py-2.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ".concat(u ? "ring-red-500" : "ring-gray-300 dark:ring-gray-700", " focus:ring-1.5 focus:ring-primary-500 dark:focus:ring-primary-400")
                                    })
                                }), u && (0, a.jsx)("p", {
                                    className: "mt-2 text-red-500 dark:text-red-400 text-sm",
                                    children: u
                                })]
                            })]
                        })]
                    })
                })
            }

            function o(e) {
                let {
                    closeModal: t,
                    dataFromDataEnd: r
                } = e, [n, i] = (0, s.useState)(!1), [l, c] = (0, s.useState)([]), o = async e => {
                    try {
                        await navigator.clipboard.writeText(e), c(t => [...t, e]), i(!0), setTimeout(() => {
                            i(!1), c(t => t.filter(t => t !== e))
                        }, 2e3)
                    } catch (e) {}
                };
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        className: "p-4",
                        children: (0, a.jsx)("div", {
                            className: "relative overflow-visible rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900",
                            children: (0, a.jsxs)("div", {
                                className: "px-4 py-5 sm:p-6",
                                children: [(0, a.jsxs)("div", {
                                    className: "flex justify-between items-center mb-6",
                                    children: [(0, a.jsx)("p", {
                                        className: "break-words text-sm text-gray-500 dark:text-gray-400 font-semibold",
                                        children: "Cổng nạp"
                                    }), (0, a.jsxs)("p", {
                                        className: "break-words text-sm font-semibold",
                                        children: [" ", r.value]
                                    })]
                                }), (0, a.jsx)("div", {
                                    children: (0, a.jsxs)("div", {
                                        className: "flex justify-between items-center mb-6",
                                        children: [(0, a.jsx)("p", {
                                            className: "break-words text-sm text-gray-500 dark:text-gray-400 font-semibold truncate",
                                            children: "Người hưởng thụ"
                                        }), (0, a.jsx)("p", {
                                            className: "break-words text-sm font-semibold text-right ml-4",
                                            children: r.name
                                        })]
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "flex justify-between items-center mb-6",
                                    children: [(0, a.jsx)("p", {
                                        className: "break-words text-sm text-gray-500 dark:text-gray-400 font-semibold truncate",
                                        children: "Số t\xe0i khoản"
                                    }), (0, a.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [(0, a.jsx)("p", {
                                            className: "break-words text-sm font-semibold text-right cursor-pointer ml-4",
                                            children: r.info
                                        }), (0, a.jsx)("span", {
                                            onClick: () => o(r.info),
                                            className: "icon-[bx--copy-alt] text-primary-500 dark:text-primary-400 cursor-pointer ml-2"
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "flex justify-between items-center mb-6",
                                    children: [(0, a.jsx)("p", {
                                        className: "break-words text-sm text-gray-500 dark:text-gray-400 font-semibold truncate",
                                        children: "Số tiền"
                                    }), (0, a.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [(0, a.jsx)("p", {
                                            className: "break-words text-sm font-semibold text-right cursor-pointer ml-4",
                                            children: r.Money.toLocaleString()
                                        }), (0, a.jsx)("span", {
                                            onClick: () => o(r.Money),
                                            className: "icon-[bx--copy-alt] text-primary-500 dark:text-primary-400 cursor-pointer ml-2"
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "flex justify-between items-center",
                                    children: [(0, a.jsx)("p", {
                                        className: "break-words text-sm text-gray-500 dark:text-gray-400 font-semibold truncate",
                                        children: "Nội dung"
                                    }), (0, a.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [(0, a.jsxs)("p", {
                                            className: "break-words text-sm font-semibold text-right cursor-pointer ml-4",
                                            children: ["nt ", r.username]
                                        }), (0, a.jsx)("span", {
                                            onClick: () => o("nt ".concat(r.username)),
                                            className: "icon-[bx--copy-alt] text-primary-500 dark:text-primary-400 cursor-pointer ml-2",
                                            children: n ? "Copied!" : "Copy"
                                        })]
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "flex justify-center items-center mt-12",
                                    children: (0, a.jsx)("div", {
                                        className: "relative select-none w-[250px] md:max-w-[300px]",
                                        children: (0, a.jsx)("img", {
                                            width: "300",
                                            height: "300",
                                            className: "object-cover w-full h-full select-none",
                                            src: "https://api.vietqr.io/970416/970436/".concat(r.Money, "/nt ").concat(r.username, "/qr_only.jpg"),
                                            style: {
                                                color: "transparent",
                                                borderRadius: "inherit"
                                            }
                                        })
                                    })
                                })]
                            })
                        })
                    }), (0, a.jsx)("div", {
                        className: "flex justify-end items-center px-4 pb-4",
                        children: (0, a.jsx)("button", {
                            onClick: t,
                            type: "button",
                            className: "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center",
                            children: "Đ\xf3ng"
                        })
                    }), (0, a.jsx)("div", {
                        className: "fixed top-4 right-8 flex flex-col items-end justify-center z-50 space-y-2",
                        children: l.map((e, t) => (0, a.jsxs)("div", {
                            className: "bg-white dark:bg-gray-900 p-2 shadow-lg border-solid border-2 border-green-500 flex justify-center items-center",
                            children: [(0, a.jsx)("svg", {
                                className: "m-auto fill-green-500 dark:fill-green-400 nx-message-icon",
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "35",
                                height: "35",
                                viewBox: "0 0 40 40",
                                children: (0, a.jsx)("g", {
                                    children: (0, a.jsx)("path", {
                                        d: "M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"
                                    })
                                })
                            }), (0, a.jsxs)("p", {
                                className: "ml-2.5 text-green-500 dark:text-green-400",
                                children: ["Đ\xe3 sao ch\xe9p ", e]
                            })]
                        }, t))
                    })]
                })
            }
            r(3436);
            var d = r(9555),
                m = r(8472),
                u = r(3984);

            function x() {
                let {
                    decryptData: e,
                    generateRandomIV: t,
                    encryptData: r,
                    userId: x,
                    username: g
                } = (0, n.a)(), [h, p] = (0, s.useState)("Chọn Cổng Nạp"), [y, f] = (0, s.useState)(!0), [b, v] = (0, s.useState)(!1), [k, j] = (0, s.useState)(!1), [w, N] = (0, s.useState)(!1), [S, C] = (0, s.useState)(!1), _ = (0, s.useRef)(null), [E, T] = (0, s.useState)(""), [L, Z] = (0, s.useState)(!1), [M, O] = (0, s.useState)(null), [z, D] = (0, s.useState)(!1), F = () => {
                    v(!1)
                }, R = e => {
                    p(e), v(!1), f(!1), "Thẻ C\xe0o" === e ? (j(!0), N(!1), C(!1)) : "Momo" === e ? (j(!1), N(!0), C(!1)) : "Ng\xe2n H\xe0ng" === e && (j(!1), N(!1), C(!0))
                }, I = e => {
                    _.current && !_.current.contains(e.target) && e instanceof MouseEvent && 0 === e.button && F(), e instanceof KeyboardEvent && "Escape" === e.key && F()
                };
                (0, s.useEffect)(() => (b ? (document.addEventListener("mousedown", I), document.addEventListener("keydown", I)) : (document.removeEventListener("mousedown", I), document.removeEventListener("keydown", I)), () => {
                    document.removeEventListener("mousedown", I), document.removeEventListener("keydown", I)
                }), [b]);
                let J = async () => {
                        try {
                            let {
                                data: t
                            } = await m.Z.post("".concat(u.Z, "/api/recharge/status")), {
                                ct: r,
                                iv: a
                            } = t, s = e(r, a);
                            return JSON.parse(s)
                        } catch (e) {
                            throw Error("Error fetching posts")
                        }
                    },
                    {
                        data: P,
                        error: B,
                        isLoading: U,
                        refetch: A
                    } = (0, d.useQuery)("status", J);
                (0, s.useEffect)(() => {
                    A()
                }, []);
                let K = async () => {
                        try {
                            D(!0);
                            let a = t(),
                                s = r(E, a),
                                n = r(JSON.stringify({
                                    userId: x,
                                    username: g
                                }), a),
                                i = await fetch("".concat(u.Z, "/api/recharge/create"), {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        ct: s,
                                        s: n,
                                        iv: a
                                    })
                                });
                            if (i.ok) {
                                let t = await i.json(),
                                    r = e(t.ct, t.iv),
                                    a = JSON.parse(r);
                                V(), O(a)
                            }
                        } catch (e) {}
                        D(!1)
                    },
                    V = () => {
                        Z(!0)
                    };
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        ref: _,
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
                                        children: "Nạp coin"
                                    })]
                                }), (0, a.jsx)("p", {
                                    className: "break-words text-gray-500 dark:text-gray-400 md:text-lg text-sm md:mt-1",
                                    children: "Tạo giao dịch nạp coin"
                                })]
                            })
                        }), (0, a.jsxs)("div", {
                            children: [(0, a.jsx)("div", {
                                className: "mb-4",
                                children: (0, a.jsx)("div", {
                                    className: "relative mt-2",
                                    children: (0, a.jsx)("div", {
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
                                                                className: "ml-20 text-left rtl:text-right whitespace-nowrap px-3 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                                                                children: "Cổng Nạp Tiền"
                                                            }), (0, a.jsx)("th", {
                                                                className: "text-left rtl:text-right whitespace-nowrap px-3 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                                                                children: "Trạng Th\xe1i"
                                                            }), (0, a.jsx)("th", {
                                                                className: "text-left rtl:text-right whitespace-nowrap px-3 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                                                                children: "Nạp Tối Đa"
                                                            })]
                                                        })
                                                    }), (0, a.jsx)("tbody", {
                                                        className: "divide-y divide-gray-200 dark:divide-gray-800",
                                                        children: U ? (0, a.jsx)("tr", {
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
                                                        }) : B ? (0, a.jsx)("tr", {
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
                                                        }) : (null == P ? void 0 : P.length) === 0 ? (0, a.jsx)("tr", {
                                                            className: "text-gray-500 dark:text-gray-400",
                                                            children: (0, a.jsx)("td", {
                                                                colSpan: 3,
                                                                className: "px-4 py-4 text-sm text-center",
                                                                children: "Chưa c\xf3 dữ liệu"
                                                            })
                                                        }) : null == P ? void 0 : P.map((e, t) => (0, a.jsxs)("tr", {
                                                            children: [(0, a.jsx)("td", {
                                                                className: "whitespace-nowrap px-3 py-4 text-gray-500 dark:text-gray-400 text-sm font-medium",
                                                                children: e.bank_name
                                                            }), (0, a.jsx)("td", {
                                                                className: "whitespace-nowrap px-3 py-4 text-gray-500 dark:text-gray-400 text-sm font-medium",
                                                                children: (0, a.jsx)("span", {
                                                                    className: "text-green-500 dark:text-green-400",
                                                                    children: 1 === e.status ? (0, a.jsxs)(a.Fragment, {
                                                                        children: [(0, a.jsx)("span", {
                                                                            className: "icon-[bxs--circle] w-2.5 h-2.5",
                                                                            children: " "
                                                                        }), (0, a.jsx)("span", {
                                                                            className: "text-green-500 dark:text-green-400",
                                                                            children: " Hoạt Động"
                                                                        })]
                                                                    }) : (0, a.jsxs)(a.Fragment, {
                                                                        children: [(0, a.jsx)("span", {
                                                                            className: "icon-[bxs--circle] bg-red-500 w-2.5 h-2.5",
                                                                            children: " "
                                                                        }), (0, a.jsx)("span", {
                                                                            className: "text-red-500 dark:text-red-400",
                                                                            children: " Bảo Tr\xec"
                                                                        })]
                                                                    })
                                                                })
                                                            }), (0, a.jsx)("td", {
                                                                className: "whitespace-nowrap px-3 py-4 text-gray-500 dark:text-gray-400 text-sm font-medium",
                                                                children: (0, a.jsx)("span", {
                                                                    children: 0 === e.max_money ? "Kh\xf4ng giới hạn" : e.max_money.toLocaleString()
                                                                })
                                                            })]
                                                        }, t))
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })
                            }), (0, a.jsxs)("div", {
                                className: "mb-4",
                                children: [(0, a.jsx)("div", {
                                    className: "flex content-center items-center justify-between text-sm",
                                    children: (0, a.jsx)("label", {
                                        className: "block font-medium text-gray-700 dark:text-gray-200",
                                        children: "Cổng nạp"
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "relative mt-1",
                                    children: (0, a.jsx)("div", {
                                        className: "relative",
                                        children: (0, a.jsxs)("div", {
                                            className: "inline-flex w-full",
                                            children: [(0, a.jsxs)("button", {
                                                onClick: () => {
                                                    v(!b)
                                                },
                                                className: "z-10 relative w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 inline-flex items-center text-left cursor-default rounded-md text-sm gap-x-2.5 px-3.5 py-2.5 pe-11 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:ring-gray-400 dark:hover:ring-gray-600",
                                                children: [(0, a.jsx)("span", {
                                                    className: "flex items-center gap-2 truncate",
                                                    children: (0, a.jsxs)("span", {
                                                        className: "flex items-center gap-2 truncate",
                                                        children: ["Chọn Cổng Nạp" === h && (0, a.jsx)("p", {
                                                            className: "break-words truncate",
                                                            children: h
                                                        }), "Thẻ C\xe0o" === h && (0, a.jsx)("span", {
                                                            className: "break-words truncate dark:text-gray-100 dark:bg-gray-900  text-gray-900 font-semibold",
                                                            children: h
                                                        }), "Momo" === h && (0, a.jsx)("span", {
                                                            className: "break-words truncate dark:text-gray-100 dark:bg-gray-900  text-gray-900 font-semibold",
                                                            children: h
                                                        }), "Ng\xe2n H\xe0ng" === h && (0, a.jsx)("span", {
                                                            className: "break-words truncate dark:text-gray-100 dark:bg-gray-900  text-gray-900 font-semibold",
                                                            children: h
                                                        })]
                                                    })
                                                }), (0, a.jsx)("span", {
                                                    className: "pointer-events-none absolute inset-y-0 end-0 flex items-center pe-2",
                                                    children: (0, a.jsx)("span", {
                                                        className: "icon-[bx--chevron-down] w-5 h-5 text-gray-500 dark:text-gray-400"
                                                    })
                                                })]
                                            }), b && (0, a.jsx)("div", {
                                                className: "absolute z-20 w-full py-1 mt-1 menu-dropdown transition-opacity duration-200 ease-in-out show"
                                            }), b && (0, a.jsx)("div", {
                                                className: "absolute z-20 w-full py-1 mt-1 menu-dropdown transition-opacity duration-200 ease-in-out show",
                                                children: (0, a.jsx)("ul", {
                                                    className: "relative focus:outline-none overflow-y-auto scroll-py-1 ring-1 ring-gray-200 dark:ring-gray-700 rounded-md shadow-lg bg-white dark:bg-gray-800 p-1 max-h-60",
                                                    children: null == P ? void 0 : P.filter(e => 1 === e.status).map((e, t) => (0, a.jsxs)("li", {
                                                        className: "hover:bg-gray-200 hover:dark:bg-gray-900 cursor-default select-none relative flex items-center justify-between gap-1 rounded-md px-2 py-1.5 text-sm text-gray-900 dark:text-white ".concat(h === e.bank_name ? "cursor-default select-none relative flex items-center justify-between gap-1 rounded-md px-2 py-1.5 text-sm text-gray-900 dark:text-white hover:bg-gray-200 hover:text-gray-900 dark:hover:text-gray-100 dark:hover:bg-gray-900 hover:font-semibold bg-gray-200 text-gray-900 font-semibold dark:hover:text-gray-100 dark:hover:bg-gray-900 dark:text-gray-100 dark:bg-gray-900" : ""),
                                                        onClick: () => R(e.bank_name),
                                                        children: [(0, a.jsxs)("div", {
                                                            className: "flex items-center gap-2 min-w-0",
                                                            children: ["Thẻ C\xe0o" === e.bank_name && (0, a.jsx)("span", {
                                                                className: "truncate ",
                                                                children: e.bank_name
                                                            }), "Momo" === e.bank_name && (0, a.jsx)("span", {
                                                                className: "truncate ",
                                                                children: e.bank_name
                                                            }), "Ng\xe2n H\xe0ng" === e.bank_name && (0, a.jsx)("span", {
                                                                className: "truncate ",
                                                                children: e.bank_name
                                                            })]
                                                        }), h === e.bank_name && (0, a.jsx)("span", {
                                                            className: "absolute inset-y-0 end-0 flex items-center pe-4 text-primary-600 dark:text-primary-500",
                                                            children: (0, a.jsx)("span", {
                                                                className: "icon-[bx--check] w-5 h-5",
                                                                children: " hiii"
                                                            })
                                                        })]
                                                    }, t))
                                                })
                                            })]
                                        })
                                    })
                                })]
                            }), !y && (0, a.jsxs)(a.Fragment, {
                                children: [k && (0, a.jsx)(l, {}), w && (0, a.jsx)(c, {
                                    MoneyMomo: e => {
                                        T(e)
                                    }
                                }), S && (0, a.jsx)(i, {
                                    Money: e => {
                                        T(e)
                                    }
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex justify-between items-center mt-4",
                                children: [(0, a.jsx)("button", {
                                    className: "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center",
                                    children: "Lịch sử"
                                }), (0, a.jsxs)("button", {
                                    onClick: K,
                                    className: "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 inline-flex items-center",
                                    children: [z && (0, a.jsx)("svg", {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 100 100",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                                        children: (0, a.jsxs)("circle", {
                                            cx: "50",
                                            cy: "50",
                                            r: "40",
                                            className: "stroke-gray-100 dark:stroke-gray-600",
                                            fill: "none",
                                            strokeWidth: "10",
                                            strokeLinecap: "round",
                                            children: [(0, a.jsx)("animate", {
                                                attributeName: "stroke-dasharray",
                                                values: "0 251.2;  151.2 100.4;  251.2 0;  251.2 0",
                                                keyTimes: "0; 0.5; 0.75; 1",
                                                dur: "1.5s",
                                                repeatCount: "indefinite"
                                            }), (0, a.jsx)("animate", {
                                                attributeName: "stroke-dashoffset",
                                                values: "0; 0; -251.2; -251.2",
                                                keyTimes: "0; 0.5; 0.75; 1",
                                                dur: "1.5s",
                                                repeatCount: "indefinite"
                                            })]
                                        })
                                    }), z ? "Đang x\xe1c nhận..." : "X\xe1c nhận"]
                                })]
                            })]
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "fixed inset-0 flex z-50 ".concat(L ? "showhiden ease-in-out duration-300" : "hiden ease-in duration-300"),
                        children: [(0, a.jsx)("div", {
                            className: "fixed inset-0 transition-opacity bg-white/25 dark:bg-black/50 backdrop-blur"
                        }), (0, a.jsx)("div", {
                            className: "fixed inset-0 overflow-y-auto z-50",
                            children: (0, a.jsx)("div", {
                                className: "flex min-h-full sm:items-center justify-center text-center items-center p-4 sm:p-0 ".concat(L ? "showhidenn ease-in-out duration-300" : "hidenn ease-in duration-300"),
                                children: (0, a.jsx)("div", {
                                    className: "relative text-left rtl:text-right flex flex-col overflow-visible bg-white dark:bg-gray-900 shadow-xl w-full rounded-lg sm:my-8 sm:max-w-lg",
                                    children: M && (0, a.jsx)(o, {
                                        closeModal: () => {
                                            Z(!1)
                                        },
                                        dataFromDataEnd: M
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
                    return x
                },
                a: function() {
                    return g
                }
            });
            var a = r(7437),
                s = r(2265),
                n = r(8110),
                i = r.n(n),
                l = r(2649),
                c = r(6463),
                o = r(8472),
                d = r(9555),
                m = r(3984);
            let u = (0, s.createContext)({
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

            function x(e) {
                let {
                    children: t
                } = e, [r, n] = (0, s.useState)(""), [x, g] = (0, s.useState)(""), [h, p] = (0, s.useState)(0), [y, f] = (0, s.useState)(""), [b, v] = (0, s.useState)(0), [k, j] = (0, s.useState)(""), [w, N] = (0, s.useState)(""), [S, C] = (0, s.useState)(""), [_, E] = (0, s.useState)(""), [T, L] = (0, s.useState)(!1), [Z, M] = (0, s.useState)(new Date), [O, z] = (0, s.useState)(""), [D, F] = (0, s.useState)(""), [R, I] = (0, s.useState)(""), [J, P] = (0, s.useState)(""), [B, U] = (0, s.useState)(""), [A, K] = (0, s.useState)(""), [V, H] = (0, s.useState)(""), [Y, Q] = (0, s.useState)(""), [q, W] = (0, s.useState)(""), [X, $] = (0, s.useState)(""), [G, ee] = (0, s.useState)(""), et = (0, c.useRouter)();

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
                    let t = await o.Z.get("".concat(m.Z, "/api/user/profile"), {
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
                    isError: ec,
                    refetch: eo
                } = (0, d.useQuery)("profile", en, {
                    enabled: !!l.Z.get("access_token"),
                    onSuccess: e => {
                        p(e.kh), v(e.online), j(e.user_id), n(e.username), g(e.name), f(e.balance), $(e.phone), ee(e.email), C(e.tongnap), I(e.role), P(e.countvxmm), E(e.tongnapthang), z(e.last_login_time), F(e.last_logout_time), L(!0)
                    },
                    onError: e => {}
                });
                async function ed() {
                    try {
                        let {
                            data: e
                        } = await o.Z.post("".concat(m.Z, "/api/settings")), {
                            ct: t,
                            iv: r
                        } = e, a = er(t, r);
                        return JSON.parse(a) || null
                    } catch (e) {
                        throw Error("Error fetching posts")
                    }
                }(0, s.useEffect)(() => {
                    eo()
                }, []);
                let {
                    data: em,
                    error: eu,
                    isLoading: ex,
                    refetch: eg
                } = (0, d.useQuery)("settings", ed, {
                    onSuccess: e => {
                        let t = e.find(e => "link_zalo" === e.key),
                            r = e.find(e => "link_page" === e.key),
                            a = e.find(e => "ratio_atm" === e.key),
                            s = e.find(e => "ratio_atm" === e.key),
                            n = e.find(e => "ratio_atm" === e.key),
                            i = t ? t.value : null,
                            l = r ? r.value : null,
                            c = a ? a.value : null,
                            o = s ? s.value : null,
                            d = n ? n.value : null;
                        U(i), K(l), H(c), Q(o), W(d)
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
                            n = await o.Z.post("".concat(m.Z, "/api/user/login"), {
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
                                c = r.token;
                            return l.Z.set("access_token", c), L(!0), eo(), {
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
                            i = await o.Z.post("".concat(m.Z, "/api/user/register"), {
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
                                c = r.token;
                            return l.Z.set("access_token", c), L(!0), eo(), {
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
                    eg()
                }, [eg]), (0, s.useEffect)(() => {
                    M(new Date(new Date().toLocaleString("en-US", {
                        timeZone: "Asia/Ho_Chi_Minh"
                    })))
                }, []), (0, a.jsx)(u.Provider, {
                    value: {
                        refetch: eo,
                        loginUser: eh,
                        registerUser: ep,
                        username: r,
                        namePlayer: x,
                        logout: function() {
                            localStorage.removeItem("next-secure-v1.j.user"), l.Z.remove("access_token"), l.Z.remove("authToken"), n(""), g(""), p(0), et.push("/home"), L(!1)
                        },
                        activated: h,
                        checkLoginStatus: T,
                        balance: y,
                        online: b,
                        userId: k,
                        VietNameTime: Z,
                        decryptData: er,
                        encryptData: es,
                        generateRandomIV: ea,
                        KeyMa: w,
                        TimeLogin: O,
                        TimeLogOut: D,
                        tongnap: S,
                        tongnapthang: _,
                        role: R,
                        countvxmm: J,
                        Zalo: B,
                        PageNso: A,
                        ratio_atm: V,
                        ratio_card: q,
                        ratio_momo: Y,
                        phone: X,
                        email: G
                    },
                    children: t
                })
            }

            function g() {
                return (0, s.useContext)(u)
            }
        },
        3436: function() {},
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
                    return s
                }
            });
            var s = function e(t, r) {
                function s(e, s, n) {
                    if ("undefined" != typeof document) {
                        "number" == typeof(n = a({}, r, n)).expires && (n.expires = new Date(Date.now() + 864e5 * n.expires)), n.expires && (n.expires = n.expires.toUTCString()), e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                        var i = "";
                        for (var l in n) n[l] && (i += "; " + l, !0 !== n[l] && (i += "=" + n[l].split(";")[0]));
                        return document.cookie = e + "=" + t.write(s, e) + i
                    }
                }
                return Object.create({
                    set: s,
                    get: function(e) {
                        if ("undefined" != typeof document && (!arguments.length || e)) {
                            for (var r = document.cookie ? document.cookie.split("; ") : [], a = {}, s = 0; s < r.length; s++) {
                                var n = r[s].split("="),
                                    i = n.slice(1).join("=");
                                try {
                                    var l = decodeURIComponent(n[0]);
                                    if (a[l] = t.read(i, l), e === l) break
                                } catch (e) {}
                            }
                            return e ? a[e] : a
                        }
                    },
                    remove: function(e, t) {
                        s(e, "", a({}, t, {
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
        e.O(0, [1141, 8472, 4728, 7478, 7023, 1744], function() {
            return e(e.s = 8174)
        }), _N_E = e.O()
    }
]);