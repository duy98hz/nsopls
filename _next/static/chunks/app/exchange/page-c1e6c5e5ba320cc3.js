(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2888], {
        2480: function() {},
        9740: function(e, t, r) {
            Promise.resolve().then(r.bind(r, 7444))
        },
        7138: function(e, t, r) {
            "use strict";
            r.d(t, {
                default: function() {
                    return s.a
                }
            });
            var a = r(231),
                s = r.n(a)
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
        7444: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return x
                }
            });
            var a = r(7437),
                s = r(2265),
                n = r(7661),
                i = r(7138),
                o = r(8472),
                l = r(3984);

            function c(e) {
                let {
                    closeModal: t,
                    selectedAmount: r,
                    selectedPoints: c
                } = e, [d, u] = (0, s.useState)("Chọn Nh\xe2n Vật"), [m, g] = (0, s.useState)(!1), {
                    balance: x,
                    username: h,
                    refetch: p,
                    encryptData: f,
                    decryptData: y,
                    userId: b,
                    generateRandomIV: v
                } = (0, n.a)(), [k, w] = (0, s.useState)(1), [j, N] = (0, s.useState)(r), [S, E] = (0, s.useState)(c), C = parseFloat(x), [Z, _] = (0, s.useState)(!0), [T, O] = (0, s.useState)(0), L = e => {
                    u(e), g(!1)
                };
                (0, s.useEffect)(() => {
                    E(c), N(r)
                }, [r, c]), (0, s.useEffect)(() => {
                    t && (w(1), u("Chọn Nh\xe2n Vật"))
                }, [t]);
                let R = e => null != e ? e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : "",
                    D = async () => {
                        if (Z) try {
                            let e = v(),
                                a = f(r, e),
                                s = f(JSON.stringify({
                                    userId: b,
                                    Amount: j,
                                    number: k,
                                    Points: S
                                }), e),
                                n = await o.Z.post("".concat(l.Z, "/api/exchange/change"), {
                                    ct: s,
                                    s: a,
                                    iv: e
                                });
                            if (200 === n.status) {
                                let e = n.data,
                                    r = y(e.ct, e.iv);
                                JSON.parse(r), p(), t(), _(!1), O(Date.now()), setTimeout(() => {
                                    _(!0)
                                }, 5e3)
                            }
                        } catch (e) {}
                    };
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("div", {
                        className: "p-4",
                        children: (0, a.jsxs)("form", {
                            action: "",
                            children: [(0, a.jsx)("div", {
                                className: "mb-4",
                                children: (0, a.jsxs)("div", {
                                    className: "flex justify-between items-center",
                                    children: [(0, a.jsx)("div", {
                                        className: "inline-flex",
                                        children: (0, a.jsx)("p", {
                                            className: "font-medium font-semibold text-gray-700 dark:text-gray-200",
                                            children: "Thanh to\xe1n"
                                        })
                                    }), (0, a.jsxs)("div", {
                                        className: "inline-flex -space-x-px rounded-md shadow-sm ml-2",
                                        children: [(0, a.jsx)("button", {
                                            type: "button",
                                            className: "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-s-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center",
                                            children: (0, a.jsx)("span", {
                                                children: R(x)
                                            })
                                        }), (0, a.jsx)("button", {
                                            type: "button",
                                            className: "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-e-md text-sm gap-x-1.5 p-1.5 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 inline-flex items-center",
                                            children: (0, a.jsx)("span", {
                                                className: "icon-[bxs--dollar-circle] flex-shrink-0 h-5 w-5",
                                                "aria-hidden": "true"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, a.jsxs)("div", {
                                children: [(0, a.jsxs)("div", {
                                    className: "mb-4",
                                    children: [(0, a.jsx)("div", {
                                        className: "flex content-center items-center justify-between text-sm",
                                        children: (0, a.jsx)("label", {
                                            className: "block font-medium text-gray-700 dark:text-gray-200",
                                            children: "Nh\xe2n Vật"
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "relative mt-1",
                                        children: (0, a.jsxs)("div", {
                                            className: "relative",
                                            children: [(0, a.jsx)("div", {
                                                className: "inline-flex w-full",
                                                children: (0, a.jsxs)("button", {
                                                    onClick: () => g(!m),
                                                    type: "button",
                                                    className: "z-10 relative w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 inline-flex items-center text-left cursor-default rounded-md text-sm gap-x-2.5 px-3.5 py-2.5 pe-11 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-1.5 focus:ring-primary-500 dark:focus:ring-primary-400",
                                                    children: [(0, a.jsx)("p", {
                                                        className: "break-words truncate dark:text-gray-100 dark:bg-gray-900 ".concat(d === "T\xe0i Khoản: ".concat(h) ? " text-gray-900 font-semibold" : ""),
                                                        children: d
                                                    }), (0, a.jsx)("span", {
                                                        className: "absolute inset-y-0 end-0 flex items-center pointer-events-none px-3.5",
                                                        children: (0, a.jsx)("span", {
                                                            className: "icon-[bx--chevron-down] flex-shrink-0 text-gray-400 dark:text-gray-500 text-gray-500 dark:text-gray-400 h-5 w-5"
                                                        })
                                                    })]
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "absolute z-20 w-full py-1 mt-1 menu-dropdown ".concat(m ? "transition-opacity duration-200 ease-in-out show" : ""),
                                                children: (0, a.jsx)("ul", {
                                                    className: "relative focus:outline-none overflow-y-auto scroll-py-1 ring-1 ring-gray-200 dark:ring-gray-700 rounded-md shadow-lg bg-white dark:bg-gray-800 p-1 max-h-60",
                                                    children: (0, a.jsxs)("li", {
                                                        onClick: () => L("T\xe0i Khoản: ".concat(h)),
                                                        className: "cursor-default select-none relative flex items-center justify-between gap-1 rounded-md px-2 py-1.5 text-sm text-gray-900 dark:text-white hover:bg-gray-200 hover:text-gray-900 dark:hover:text-gray-100 dark:hover:bg-gray-900 hover:font-semibold ".concat(d === "T\xe0i Khoản: ".concat(h) ? "bg-gray-200 text-gray-900 font-semibold dark:hover:text-gray-100 dark:hover:bg-gray-900 dark:text-gray-100 dark:bg-gray-900" : ""),
                                                        children: [(0, a.jsx)("div", {
                                                            className: "flex items-center gap-2 min-w-0",
                                                            children: (0, a.jsxs)("span", {
                                                                className: "truncate ",
                                                                children: ["T\xe0i Khoản 1: ", h]
                                                            })
                                                        }), d === "T\xe0i Khoản: ".concat(h) && (0, a.jsx)("span", {
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
                                            children: "Số lượng"
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "relative mt-1",
                                        children: (0, a.jsx)("div", {
                                            className: "relative",
                                            children: (0, a.jsx)("input", {
                                                onChange: e => {
                                                    let t = parseFloat(e.target.value);
                                                    w(t = Math.min(10, Math.max(1, t))), E(c * t), N(r * t)
                                                },
                                                inputMode: "numeric",
                                                min: "1",
                                                max: "10",
                                                autoComplete: "quantity",
                                                placeholder: "Nhập số lượng",
                                                className: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-3.5 py-2.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-1.5 undefined focus:ring-primary-500 dark:focus:ring-primary-400",
                                                type: "number",
                                                value: k,
                                                name: "quantity"
                                            })
                                        })
                                    })]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "mb-4",
                                children: [(0, a.jsx)("div", {
                                    className: "flex content-center items-center justify-between text-sm",
                                    children: (0, a.jsx)("label", {
                                        className: "block font-medium text-gray-700 dark:text-gray-200",
                                        children: "Th\xf4ng tin đơn h\xe0ng"
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "relative mt-2",
                                    children: (0, a.jsx)("div", {
                                        className: "relative overflow-visible rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900",
                                        children: (0, a.jsxs)("div", {
                                            className: "p-2 sm:p-2",
                                            children: [(0, a.jsxs)("div", {
                                                className: "flex justify-between items-center text-sm font-semibold p-2",
                                                children: [(0, a.jsx)("p", {
                                                    className: "break-words text-gray-500 dark:text-gray-400 mr-6",
                                                    children: "Mặt h\xe0ng"
                                                }), (0, a.jsxs)("p", {
                                                    className: "break-words text-right",
                                                    children: ["x", k, " G\xf3i ", R(S), " lượng"]
                                                })]
                                            }), (0, a.jsxs)("div", {
                                                className: "flex justify-between items-center text-sm font-semibold p-2",
                                                children: [(0, a.jsx)("p", {
                                                    className: "break-words text-gray-500 dark:text-gray-400 mr-6",
                                                    children: "Đơn gi\xe1"
                                                }), (0, a.jsxs)("p", {
                                                    className: "break-words text-right",
                                                    children: [R(r), "/1"]
                                                })]
                                            }), (0, a.jsxs)("div", {
                                                className: "flex justify-between items-center text-sm font-semibold p-2",
                                                children: [(0, a.jsx)("p", {
                                                    className: "break-words text-gray-500 dark:text-gray-400 mr-6",
                                                    children: "Số lượng"
                                                }), (0, a.jsxs)("p", {
                                                    className: "break-words text-right",
                                                    children: [" x", k]
                                                })]
                                            }), (0, a.jsxs)("div", {
                                                className: "flex justify-between items-center text-sm font-semibold p-2",
                                                children: [(0, a.jsx)("p", {
                                                    className: "break-words text-gray-500 dark:text-gray-400 mr-6",
                                                    children: "Giảm gi\xe1"
                                                }), (0, a.jsx)("p", {
                                                    className: "break-words text-right",
                                                    children: " 0%"
                                                })]
                                            }), (0, a.jsxs)("div", {
                                                className: "flex justify-between items-center text-sm font-semibold p-2",
                                                children: [(0, a.jsx)("p", {
                                                    className: "break-words text-gray-500 dark:text-gray-400 mr-6",
                                                    children: "Th\xe0nh tiền"
                                                }), (0, a.jsxs)("p", {
                                                    className: "break-words text-primary-500 dark:text-primary-400 font-bold text-right",
                                                    children: [R(j), " Coin"]
                                                })]
                                            })]
                                        })
                                    })
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex justify-end items-center mt-6",
                                children: [(0, a.jsx)("div", {
                                    className: "me-2",
                                    children: x >= j ? (0, a.jsx)("button", {
                                        disabled: d != "T\xe0i Khoản: ".concat(h),
                                        onClick: D,
                                        type: "button",
                                        className: "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 inline-flex items-center",
                                        children: "Đổi Lượng"
                                    }) : (0, a.jsxs)(i.default, {
                                        href: "/recharge",
                                        className: "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white dark:text-gray-900 bg-red-500 hover:bg-red-600 disabled:bg-red-500 dark:bg-red-400 dark:hover:bg-red-500 dark:disabled:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 dark:focus-visible:outline-red-400 inline-flex items-center",
                                        children: ["Nạp th\xeam: ", R(j - C), " đ"]
                                    })
                                }), (0, a.jsx)("button", {
                                    onClick: t,
                                    type: "button",
                                    className: "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center",
                                    children: "Đ\xf3ng"
                                })]
                            })]
                        })
                    })
                })
            }
            var d = r(6463),
                u = r(9555),
                m = r(6393);
            r(3436);
            var g = r(2649);

            function x() {
                let [e, t] = (0, s.useState)(!1), r = (0, s.useRef)(null), {
                    decryptData: i
                } = (0, n.a)(), x = (0, d.useRouter)(), [h, p] = (0, s.useState)(null), [f, y] = (0, s.useState)(null), b = () => {
                    t(!1)
                }, v = e => {
                    r.current && !r.current.contains(e.target) && e instanceof MouseEvent && 0 === e.button && b(), e instanceof KeyboardEvent && "Escape" === e.key && b()
                };
                (0, s.useEffect)(() => (e ? (document.addEventListener("mousedown", v), document.addEventListener("keydown", v)) : (document.removeEventListener("mousedown", v), document.removeEventListener("keydown", v)), () => {
                    document.removeEventListener("mousedown", v), document.removeEventListener("keydown", v)
                }), [e]), (0, s.useEffect)(() => {
                    if (!g.Z.get("access_token")) {
                        x.push("/home");
                        return
                    }
                }, []);
                let k = e => e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."),
                    w = (e, r) => {
                        e && r && (p(e), y(r), t(!0))
                    },
                    j = async () => {
                        try {
                            let {
                                data: e
                            } = await o.Z.post("".concat(l.Z, "/api/exchange/gold")), {
                                ct: t,
                                iv: r
                            } = e, a = i(t, r);
                            return JSON.parse(a) || null
                        } catch (e) {
                            throw Error("Error fetching posts")
                        }
                    },
                    {
                        data: N,
                        error: S,
                        isLoading: E,
                        refetch: C
                    } = (0, u.useQuery)("exchange", j);
                return (0, s.useEffect)(() => {
                    C()
                }, []), (0, a.jsxs)(a.Fragment, {
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
                                        children: "Đổi lượng"
                                    })]
                                }), (0, a.jsx)("p", {
                                    className: "break-words text-gray-500 dark:text-gray-400 md:text-lg text-sm md:mt-1",
                                    children: "C\xe1c g\xf3i quy đổi lượng"
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            children: (0, a.jsx)("div", {
                                onClick: () => t(!0),
                                className: "grid grid-cols-12 gap-2",
                                children: E ? [...Array(8)].map((e, t) => (0, a.jsx)("div", {
                                    className: "overflow-visible relative transition-all cursor-pointer rounded-xl ring-gray-200 dark:ring-gray-800 dark:ring-1 ring-0 hover:ring-2 dark:hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 shadow-md hover:shadow-lg bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 xl:col-span-3 sm:col-span-4 col-span-6 focus:outline-none",
                                    children: (0, a.jsxs)("div", {
                                        className: "sm:p-6 px-2 sm:px-2 py-6 sm:py-6",
                                        children: [(0, a.jsx)("div", {
                                            className: "relative select-none transition-all rounded-xl mt-4 mb-6 mx-auto",
                                            style: {
                                                maxWidth: "65px",
                                                maxHeight: "65px"
                                            },
                                            children: (0, a.jsx)(m.Z, {
                                                height: 70,
                                                width: 70
                                            })
                                        }), (0, a.jsx)("p", {
                                            className: "break-words text-primary-500 dark:text-primary-400 font-bold text-center truncate lg:text-base text-sm mb-1 px-2",
                                            children: (0, a.jsx)(m.Z, {})
                                        }), (0, a.jsx)("div", {
                                            className: "mb-3",
                                            children: (0, a.jsx)("p", {
                                                className: "break-words text-gray-500 dark:text-gray-400 font-semibold text-center truncate lg:text-xs text-[11px]",
                                                children: (0, a.jsx)(m.Z, {})
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "flex justify-center items-center",
                                            children: (0, a.jsx)("div", {
                                                className: "inline-flex -space-x-px rounded-md shadow-sm",
                                                children: (0, a.jsx)(m.Z, {})
                                            })
                                        })]
                                    })
                                }, t)) : S ? (0, a.jsx)("div", {
                                    className: "overflow-visible relative transition-all cursor-pointer rounded-xl ring-gray-200 dark:ring-gray-800 dark:ring-1 ring-0 hover:ring-2 dark:hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 shadow-md hover:shadow-lg bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 xl:col-span-3 sm:col-span-4 col-span-6 focus:outline-none",
                                    children: (0, a.jsx)("div", {
                                        className: "sm:p-6 px-2 sm:px-2 py-6 sm:py-6",
                                        children: "C\xf3 Lỗ Khi Tải Dữ Liệu"
                                    })
                                }) : (null == N ? void 0 : N.length) === 0 ? (0, a.jsx)("div", {
                                    className: "overflow-visible relative transition-all cursor-pointer rounded-xl ring-gray-200 dark:ring-gray-800 dark:ring-1 ring-0 hover:ring-2 dark:hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 shadow-md hover:shadow-lg bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 xl:col-span-3 sm:col-span-4 col-span-6 focus:outline-none",
                                    children: (0, a.jsx)("div", {
                                        className: "sm:p-6 px-2 sm:px-2 py-6 sm:py-6",
                                        children: "Chưa C\xf3 Dữ Liệu"
                                    })
                                }) : N && Object.entries(N).map(e => {
                                    let [t, r] = e;
                                    return (0, a.jsx)("div", {
                                        onClick: () => w(t, r),
                                        className: "overflow-visible relative transition-all cursor-pointer rounded-xl ring-gray-200 dark:ring-gray-800 dark:ring-1 ring-0 hover:ring-2 dark:hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 shadow-md hover:shadow-lg bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 xl:col-span-3 sm:col-span-4 col-span-6 focus:outline-none",
                                        children: (0, a.jsxs)("div", {
                                            className: "sm:p-6 px-2 sm:px-2 py-6 sm:py-6",
                                            children: [(0, a.jsx)("div", {
                                                className: "relative select-none transition-all rounded-xl mt-4 mb-6 mx-auto",
                                                style: {
                                                    maxWidth: "65px",
                                                    maxHeight: "65px"
                                                },
                                                children: (0, a.jsx)("img", {
                                                    alt: "image",
                                                    src: "/images/items/coin.webp",
                                                    width: 200,
                                                    height: 200
                                                })
                                            }), (0, a.jsxs)("p", {
                                                className: "break-words text-primary-500 dark:text-primary-400 font-bold text-center truncate lg:text-base text-sm mb-1 px-2",
                                                children: ["G\xf3i ", k(r), " lượng"]
                                            }), (0, a.jsx)("div", {
                                                className: "mb-3",
                                                children: (0, a.jsx)("p", {
                                                    className: "break-words text-gray-500 dark:text-gray-400 font-semibold text-center truncate lg:text-xs text-[11px]",
                                                    children: "Mua bằng số dư"
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "flex justify-center items-center",
                                                children: (0, a.jsxs)("div", {
                                                    className: "inline-flex -space-x-px rounded-md shadow-sm",
                                                    children: [(0, a.jsx)("button", {
                                                        type: "button",
                                                        className: "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-s-md text-xs gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center",
                                                        children: (0, a.jsx)("span", {
                                                            children: k(t)
                                                        })
                                                    }), (0, a.jsx)("button", {
                                                        type: "button",
                                                        className: "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-e-md text-xs gap-x-1.5 p-1.5 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 inline-flex items-center",
                                                        children: (0, a.jsx)("span", {
                                                            className: "icon-[bxs--dollar-circle] flex-shrink-0 h-4 w-4"
                                                        })
                                                    })]
                                                })
                                            })]
                                        })
                                    }, t)
                                })
                            })
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "fixed inset-0 flex z-50 ".concat(e ? "showhiden ease-in-out duration-300" : "hiden ease-in duration-300"),
                        children: [(0, a.jsx)("div", {
                            className: "fixed inset-0 transition-opacity bg-white/25 dark:bg-black/50 backdrop-blur"
                        }), (0, a.jsx)("div", {
                            className: "fixed inset-0 overflow-y-auto",
                            children: (0, a.jsx)("div", {
                                className: "flex min-h-full sm:items-center justify-center text-center items-center p-4 sm:p-0 ".concat(e ? "showhidenn ease-in-out duration-300" : "hidenn ease-in duration-500"),
                                children: (0, a.jsx)("div", {
                                    ref: r,
                                    className: "relative text-left rtl:text-right flex flex-col overflow-visible bg-white dark:bg-gray-900 shadow-xl w-full rounded-lg sm:my-8 sm:max-w-lg",
                                    children: (0, a.jsx)(c, {
                                        closeModal: b,
                                        selectedAmount: h,
                                        selectedPoints: f
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
                    return x
                }
            });
            var a = r(7437),
                s = r(2265),
                n = r(8110),
                i = r.n(n),
                o = r(2649),
                l = r(6463),
                c = r(8472),
                d = r(9555),
                u = r(3984);
            let m = (0, s.createContext)({
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
                } = e, [r, n] = (0, s.useState)(""), [g, x] = (0, s.useState)(""), [h, p] = (0, s.useState)(0), [f, y] = (0, s.useState)(""), [b, v] = (0, s.useState)(0), [k, w] = (0, s.useState)(""), [j, N] = (0, s.useState)(""), [S, E] = (0, s.useState)(""), [C, Z] = (0, s.useState)(""), [_, T] = (0, s.useState)(!1), [O, L] = (0, s.useState)(new Date), [R, D] = (0, s.useState)(""), [A, P] = (0, s.useState)(""), [J, K] = (0, s.useState)(""), [U, M] = (0, s.useState)(""), [F, I] = (0, s.useState)(""), [z, B] = (0, s.useState)(""), [H, V] = (0, s.useState)(""), [q, G] = (0, s.useState)(""), [Q, W] = (0, s.useState)(""), [$, X] = (0, s.useState)(""), [Y, ee] = (0, s.useState)(""), et = (0, l.useRouter)();

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
                    let e = o.Z.get("access_token");
                    if (!e) throw Error("Access token not found");
                    let t = await c.Z.get("".concat(u.Z, "/api/user/profile"), {
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
                    isLoading: eo,
                    isError: el,
                    refetch: ec
                } = (0, d.useQuery)("profile", en, {
                    enabled: !!o.Z.get("access_token"),
                    onSuccess: e => {
                        p(e.kh), v(e.online), w(e.user_id), n(e.username), x(e.name), y(e.balance), X(e.phone), ee(e.email), E(e.tongnap), K(e.role), M(e.countvxmm), Z(e.tongnapthang), D(e.last_login_time), P(e.last_logout_time), T(!0)
                    },
                    onError: e => {}
                });
                async function ed() {
                    try {
                        let {
                            data: e
                        } = await c.Z.post("".concat(u.Z, "/api/settings")), {
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
                    data: eu,
                    error: em,
                    isLoading: eg,
                    refetch: ex
                } = (0, d.useQuery)("settings", ed, {
                    onSuccess: e => {
                        let t = e.find(e => "link_zalo" === e.key),
                            r = e.find(e => "link_page" === e.key),
                            a = e.find(e => "ratio_atm" === e.key),
                            s = e.find(e => "ratio_atm" === e.key),
                            n = e.find(e => "ratio_atm" === e.key),
                            i = t ? t.value : null,
                            o = r ? r.value : null,
                            l = a ? a.value : null,
                            c = s ? s.value : null,
                            d = n ? n.value : null;
                        I(i), B(o), V(l), G(c), W(d)
                    },
                    onError: e => {}
                });
                async function eh(e, t) {
                    try {
                        if (o.Z.get("access_token")) return {
                            success: !1,
                            error: "Bạn đ\xe3 đăng nhập rồi."
                        };
                        let r = ea(),
                            a = es(e, r),
                            s = es(t, r),
                            n = await c.Z.post("".concat(u.Z, "/api/user/login"), {
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
                                l = r.token;
                            return o.Z.set("access_token", l), T(!0), ec(), {
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
                        if (o.Z.get("access_token")) return {
                            success: !1,
                            error: "Đăng Đăng Nhập Kh\xf4ng Thể Đăng K\xfd."
                        };
                        let a = ea(),
                            s = es(e, a),
                            n = es(JSON.stringify({
                                password: t,
                                confirmPassword: r
                            }), a),
                            i = await c.Z.post("".concat(u.Z, "/api/user/register"), {
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
                                l = r.token;
                            return o.Z.set("access_token", l), T(!0), ec(), {
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
                    ex()
                }, [ex]), (0, s.useEffect)(() => {
                    L(new Date(new Date().toLocaleString("en-US", {
                        timeZone: "Asia/Ho_Chi_Minh"
                    })))
                }, []), (0, a.jsx)(m.Provider, {
                    value: {
                        refetch: ec,
                        loginUser: eh,
                        registerUser: ep,
                        username: r,
                        namePlayer: g,
                        logout: function() {
                            localStorage.removeItem("next-secure-v1.j.user"), o.Z.remove("access_token"), o.Z.remove("authToken"), n(""), x(""), p(0), et.push("/home"), T(!1)
                        },
                        activated: h,
                        checkLoginStatus: _,
                        balance: f,
                        online: b,
                        userId: k,
                        VietNameTime: O,
                        decryptData: er,
                        encryptData: es,
                        generateRandomIV: ea,
                        KeyMa: j,
                        TimeLogin: R,
                        TimeLogOut: A,
                        tongnap: S,
                        tongnapthang: C,
                        role: J,
                        countvxmm: U,
                        Zalo: F,
                        PageNso: z,
                        ratio_atm: H,
                        ratio_card: Q,
                        ratio_momo: q,
                        phone: $,
                        email: Y
                    },
                    children: t
                })
            }

            function x() {
                return (0, s.useContext)(m)
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
                        for (var o in n) n[o] && (i += "; " + o, !0 !== n[o] && (i += "=" + n[o].split(";")[0]));
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
                                    var o = decodeURIComponent(n[0]);
                                    if (a[o] = t.read(i, o), e === o) break
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
        },
        6393: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return n
                }
            });
            var a = r(2265);
            let s = a.createContext({});

            function n(e) {
                var t, r, n;
                let {
                    count: i = 1,
                    wrapper: o,
                    className: l,
                    containerClassName: c,
                    containerTestId: d,
                    circle: u = !1,
                    style: m,
                    ...g
                } = e, x = a.useContext(s), h = { ...g
                };
                for (let [e, t] of Object.entries(g)) void 0 === t && delete h[e];
                let p = { ...x,
                        ...h,
                        circle: u
                    },
                    f = { ...m,
                        ... function(e) {
                            let {
                                baseColor: t,
                                highlightColor: r,
                                width: a,
                                height: s,
                                borderRadius: n,
                                circle: i,
                                direction: o,
                                duration: l,
                                enableAnimation: c = !0
                            } = e, d = {};
                            return "rtl" === o && (d["--animation-direction"] = "reverse"), "number" == typeof l && (d["--animation-duration"] = "".concat(l, "s")), c || (d["--pseudo-element-display"] = "none"), ("string" == typeof a || "number" == typeof a) && (d.width = a), ("string" == typeof s || "number" == typeof s) && (d.height = s), ("string" == typeof n || "number" == typeof n) && (d.borderRadius = n), i && (d.borderRadius = "50%"), void 0 !== t && (d["--base-color"] = t), void 0 !== r && (d["--highlight-color"] = r), d
                        }(p)
                    },
                    y = "react-loading-skeleton";
                l && (y += " ".concat(l));
                let b = null !== (t = p.inline) && void 0 !== t && t,
                    v = [],
                    k = Math.ceil(i);
                for (let e = 0; e < k; e++) {
                    let t = f;
                    if (k > i && e === k - 1) {
                        let e = null !== (r = t.width) && void 0 !== r ? r : "100%",
                            a = i % 1,
                            s = "number" == typeof e ? e * a : "calc(".concat(e, " * ").concat(a, ")");
                        t = { ...t,
                            width: s
                        }
                    }
                    let s = a.createElement("span", {
                        className: y,
                        style: t,
                        key: e
                    }, "‌");
                    b ? v.push(s) : v.push(a.createElement(a.Fragment, {
                        key: e
                    }, s, a.createElement("br", null)))
                }
                return a.createElement("span", {
                    className: c,
                    "data-testid": d,
                    "aria-live": "polite",
                    "aria-busy": null === (n = p.enableAnimation) || void 0 === n || n
                }, o ? v.map((e, t) => a.createElement(o, {
                    key: t
                }, e)) : v)
            }
        }
    },
    function(e) {
        e.O(0, [1141, 8472, 4728, 231, 7478, 7023, 1744], function() {
            return e(e.s = 9740)
        }), _N_E = e.O()
    }
]);