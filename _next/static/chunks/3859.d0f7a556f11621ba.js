"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3859], {
        7138: function(e, r, t) {
            t.d(r, {
                default: function() {
                    return i.a
                }
            });
            var a = t(231),
                i = t.n(a)
        },
        3859: function(e, r, t) {
            t.r(r);
            var a = t(7437),
                i = t(7138),
                s = t(2265),
                n = t(6463),
                o = t(7661),
                l = t(2170);
            r.default = e => {
                let {
                    closeModalNavbar: r
                } = e, [t, c] = (0, s.useState)(!0), [d, m] = (0, s.useState)(!0), [h, x] = (0, s.useState)(!0), [g, u] = (0, s.useState)(!0), [f, p] = (0, s.useState)(!0), {
                    checkLoginStatus: b,
                    Zalo: y,
                    PageNso: v
                } = (0, o.a)(), [k, w] = (0, s.useState)(!1), j = (0, s.useRef)(null), N = (0, n.useRouter)(), C = [{
                    name: "Nạp Tiền",
                    path: "/recharge",
                    right: "1"
                }, {
                    name: "Đổi Lượng",
                    path: "/exchange",
                    right: "1"
                }, {
                    name: "Giftcode",
                    path: "/giftcode",
                    right: "1"
                }, {
                    name: "Đăng Nhập",
                    path: "/event/login",
                    right: "2"
                }, {
                    name: "T\xedch Giờ Chơi",
                    path: "/event/play",
                    right: "2"
                }, {
                    name: "T\xedch Nạp Th\xe1ng",
                    path: "/event/charging/month",
                    right: "2"
                }, {
                    name: "T\xedch Nạp Tổng",
                    path: "/event/charging",
                    right: "2"
                }, {
                    name: "Cao Thủ",
                    path: "/ranking/master",
                    right: "3"
                }, {
                    name: "Gia Tộc",
                    path: "/ranking/clan",
                    right: "3"
                }, {
                    name: "T\xedch Lũy Vxmm",
                    path: "/ranking/wealth",
                    right: "3"
                }, {
                    name: "Tất Cả",
                    path: "/tin-tuc",
                    right: "4"
                }, {
                    name: "Hướng Dẫn",
                    path: "/danh-muc/huong-dan",
                    right: "4"
                }, {
                    name: "T\xednh Năng",
                    path: "/danh-muc/tinh-nang",
                    right: "4"
                }, {
                    name: "Sự Kiện",
                    path: "/danh-muc/su-kien",
                    right: "4"
                }, {
                    name: "Zalo",
                    path: "".concat(y),
                    right: "5"
                }, {
                    name: "Fanpage",
                    path: "".concat(v),
                    right: "5"
                }], E = (0, n.usePathname)(), T = e => E === e, S = () => {
                    w(!1)
                }, _ = () => {
                    w(!0)
                }, L = e => {
                    j.current && !j.current.contains(e.target) && e instanceof MouseEvent && 0 === e.button && S(), e instanceof KeyboardEvent && "Escape" === e.key && S()
                };
                (0, s.useEffect)(() => (k ? (document.addEventListener("mousedown", L), document.addEventListener("keydown", L)) : (document.removeEventListener("mousedown", L), document.removeEventListener("keydown", L)), () => {
                    document.removeEventListener("mousedown", L), document.removeEventListener("keydown", L)
                }), [k]);
                let G = (e, t) => {
                    t.preventDefault(), b || "/recharge" !== e && "/exchange" !== e ? (N.push(e), "function" == typeof r && r()) : (w(!0), _(), localStorage.setItem("redirectTo", e))
                };
                return (0, s.useEffect)(() => {
                    b && ("/exchange" === E || "/recharge" === E) ? N.push(E) : b || "/exchange" !== E && "/recharge" !== E || N.push("/home")
                }, [N, E]), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        className: "xl:col-span-2 md:col-span-3 col-span-12 md:block hidden md:sticky md:top-[var(--header-size)] md:max-h-[calc(100vh-var(--header-size)-var(--footer-size))] md:overflow-y-auto py-4",
                        children: (0, a.jsxs)("div", {
                            children: [(0, a.jsxs)(i.default, {
                                href: "/download",
                                className: "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-2 px-3 py-2 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 w-full flex justify-center items-center mb-2 font-semibold",
                                children: [(0, a.jsx)("span", {
                                    className: "icon-[material-symbols--download] flex-shrink-0 h-5 w-5",
                                    children: (0, a.jsxs)("svg", {
                                        className: "fill-white dark:fill-black",
                                        width: "20px",
                                        height: "20px",
                                        viewBox: "0 0 32 32",
                                        version: "1.1",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [(0, a.jsx)("g", {
                                            id: "SVGRepo_bgCarrier"
                                        }), (0, a.jsx)("g", {
                                            id: "SVGRepo_tracerCarrier"
                                        }), (0, a.jsxs)("g", {
                                            id: "SVGRepo_iconCarrier",
                                            children: [(0, a.jsx)("path", {
                                                d: "M18.313 13.625h-4.031v-6.594c0-0.563-0.469-1.031-1.031-1.031h-4.031c-0.594 0-1.063 0.469-1.063 1.031v6.594h-4.031c-0.531 0-0.719 0.344-0.313 0.75l6.688 6.656c0.188 0.188 0.438 0.281 0.719 0.281s0.563-0.094 0.75-0.281l6.656-6.656c0.375-0.406 0.25-0.75-0.313-0.75zM0 18.344v7.125c0 0.313 0.156 0.5 0.5 0.5h21.375c0.344 0 0.531-0.188 0.531-0.5v-7.125c0-0.313-0.25-0.531-0.531-0.531h-2.031c-0.281 0-0.531 0.25-0.531 0.531v4.531h-16.25v-4.531c0-0.313-0.219-0.531-0.5-0.531h-2.063c-0.281 0-0.5 0.25-0.5 0.531z"
                                            }), " "]
                                        })]
                                    })
                                }), "Tải Game"]
                            }), (0, a.jsx)("div", {
                                className: "mb-4",
                                children: (0, a.jsx)(i.default, {
                                    href: y,
                                    passHref: !0,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 w-full flex justify-center items-center",
                                    children: "Cộng Đồng - Box Zalo"
                                })
                            }), (0, a.jsxs)("div", {
                                className: "w-full flex flex-col",
                                children: [(0, a.jsxs)("button", {
                                    onClick: () => c(!t),
                                    className: "flex items-center py-2 cursor-pointer overflow-hidden select-none w-full text-left",
                                    children: [(0, a.jsx)("span", {
                                        className: "icon-[bx--cube-alt] w-5 h-5 ".concat(t ? "text-primary-500 dark:text-primary-400" : " text-gray-500 dark:text-gray-400")
                                    }), (0, a.jsx)("p", {
                                        className: "break-words text-sm ".concat(t ? "text-primary-500 dark:text-primary-400" : "text-gray-500 dark:text-gray-400", " font-semibold mx-4"),
                                        children: "Chức năng"
                                    }), t ? (0, a.jsx)("span", {
                                        className: "rotate-90 icon-[bx--chevron-right] w-5 h-5 text-primary-500 dark:text-primary-400 ms-auto transform transition-transform"
                                    }) : (0, a.jsx)("span", {
                                        className: "rotate-0 icon-[bx--chevron-right] w-5 h-5 text-gray-500 dark:text-gray-400 ms-auto transform transition-transform"
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "menu-dropdown ".concat(t ? "transition-opacity duration-500 ease-in-out show" : ""),
                                    children: (0, a.jsx)("div", {
                                        className: "text-sm text-gray-500 dark:text-gray-400 pt-0 pb-2 pl-6",
                                        children: (0, a.jsx)("nav", {
                                            className: "relative",
                                            children: (0, a.jsx)("ul", {
                                                children: C.filter(e => "1" === e.right).map((e, t) => (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(i.default, {
                                                        onClick: t => {
                                                            "/recharge" === e.path || "/exchange" === e.path ? G(e.path, t) : (N.push(e.path), "function" == typeof r && r())
                                                        },
                                                        href: e.path,
                                                        "aria-label": e.name,
                                                        className: "group relative flex items-center gap-2 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75 px-3 py-1.5 w-full focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 rounded-md font-medium text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-200 dark:hover:before:bg-gray-800/50 ".concat(T(e.path) ? "transition duration-700 ease-in-out opacity-100 dark:hover:text-white dark:hover:before:bg-gray-800/50 bg-gray-200 dark:bg-gray-800 dark:text-white text-gray-900" : ""),
                                                        children: (0, a.jsx)("span", {
                                                            className: "truncate relative",
                                                            children: e.name
                                                        })
                                                    })
                                                }, t))
                                            })
                                        })
                                    })
                                }), (0, a.jsxs)("button", {
                                    onClick: () => m(!d),
                                    className: "flex items-center py-2 cursor-pointer overflow-hidden select-none w-full text-left",
                                    children: [(0, a.jsx)("span", {
                                        className: "icon-[bx--calendar] w-5 h-5 ".concat(d ? "text-primary-500 dark:text-primary-400" : " text-gray-500 dark:text-gray-400")
                                    }), (0, a.jsx)("p", {
                                        className: "break-words text-sm ".concat(d ? "text-primary-500 dark:text-primary-400" : "text-gray-500 dark:text-gray-400", " font-semibold mx-4"),
                                        children: "Sự Kiện"
                                    }), d ? (0, a.jsx)("span", {
                                        className: "rotate-90 icon-[bx--chevron-right] w-5 h-5 text-primary-500 dark:text-primary-400 ms-auto transform transition-transform"
                                    }) : (0, a.jsx)("span", {
                                        className: "rotate-0 icon-[bx--chevron-right] w-5 h-5 text-gray-500 dark:text-gray-400 ms-auto transform transition-transform"
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "menu-dropdown ".concat(d ? "transition-opacity duration-500 ease-in-out show" : ""),
                                    children: (0, a.jsx)("div", {
                                        className: "text-sm text-gray-500 dark:text-gray-400 pt-0 pb-2 pl-6",
                                        children: (0, a.jsx)("nav", {
                                            className: "relative",
                                            children: (0, a.jsx)("ul", {
                                                children: C.filter(e => "2" === e.right).map((e, t) => (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(i.default, {
                                                        onClick: r,
                                                        href: e.path,
                                                        "aria-label": e.name,
                                                        className: "group relative flex items-center gap-2 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75 px-3 py-1.5 w-full focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 rounded-md font-medium text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-200 dark:hover:before:bg-gray-800/50 ".concat(T(e.path) ? "transition duration-700 ease-in-out opacity-100 dark:hover:text-white dark:hover:before:bg-gray-800/50 bg-gray-200 dark:bg-gray-800 dark:text-white text-gray-900" : ""),
                                                        children: (0, a.jsx)("span", {
                                                            className: "truncate relative",
                                                            children: e.name
                                                        })
                                                    })
                                                }, t))
                                            })
                                        })
                                    })
                                }), (0, a.jsxs)("button", {
                                    onClick: () => x(!h),
                                    className: "flex items-center py-2 cursor-pointer overflow-hidden select-none w-full text-left",
                                    children: [(0, a.jsx)("span", {
                                        className: "icon-[bx--bar-chart-alt-2] w-5 h-5 ".concat(h ? "text-primary-500 dark:text-primary-400" : " text-gray-500 dark:text-gray-400")
                                    }), (0, a.jsx)("p", {
                                        className: "break-words text-sm ".concat(h ? "text-primary-500 dark:text-primary-400" : "text-gray-500 dark:text-gray-400", " font-semibold mx-4"),
                                        children: "Xếp Hạng"
                                    }), h ? (0, a.jsx)("span", {
                                        className: "rotate-90 icon-[bx--chevron-right] w-5 h-5 text-primary-500 dark:text-primary-400 ms-auto transform transition-transform"
                                    }) : (0, a.jsx)("span", {
                                        className: "rotate-0 icon-[bx--chevron-right] w-5 h-5 text-gray-500 dark:text-gray-400 ms-auto transform transition-transform"
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "menu-dropdown ".concat(h ? "transition-opacity duration-500 ease-in-out show" : ""),
                                    children: (0, a.jsx)("div", {
                                        className: "text-sm text-gray-500 dark:text-gray-400 pt-0 pb-2 pl-6",
                                        children: (0, a.jsx)("nav", {
                                            className: "relative",
                                            children: (0, a.jsx)("ul", {
                                                children: C.filter(e => "3" === e.right).map((e, t) => (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(i.default, {
                                                        onClick: r,
                                                        href: e.path,
                                                        "aria-label": e.name,
                                                        className: "group relative flex items-center gap-2 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75 px-3 py-1.5 w-full focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 rounded-md font-medium text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-200 dark:hover:before:bg-gray-800/50 ".concat(T(e.path) ? "transition duration-700 ease-in-out opacity-100 dark:hover:text-white dark:hover:before:bg-gray-800/50 bg-gray-200 dark:bg-gray-800 dark:text-white text-gray-900" : ""),
                                                        children: (0, a.jsx)("span", {
                                                            className: "truncate relative",
                                                            children: e.name
                                                        })
                                                    })
                                                }, t))
                                            })
                                        })
                                    })
                                }), (0, a.jsxs)("button", {
                                    onClick: () => u(!g),
                                    className: "flex items-center py-2 cursor-pointer overflow-hidden select-none w-full text-left",
                                    children: [(0, a.jsx)("span", {
                                        className: "icon-[bx--news] w-5 h-5 ".concat(g ? "text-primary-500 dark:text-primary-400" : " text-gray-500 dark:text-gray-400")
                                    }), (0, a.jsx)("p", {
                                        className: "break-words text-sm ".concat(g ? "text-primary-500 dark:text-primary-400" : "text-gray-500 dark:text-gray-400", " font-semibold mx-4"),
                                        children: "B\xe0i Viết"
                                    }), g ? (0, a.jsx)("span", {
                                        className: "rotate-90 icon-[bx--chevron-right] w-5 h-5 text-primary-500 dark:text-primary-400 ms-auto transform transition-transform"
                                    }) : (0, a.jsx)("span", {
                                        className: "rotate-0 icon-[bx--chevron-right] w-5 h-5 text-gray-500 dark:text-gray-400 ms-auto transform transition-transform"
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "menu-dropdown ".concat(g ? "transition-opacity duration-500 ease-in-out show" : ""),
                                    children: (0, a.jsx)("div", {
                                        className: "text-sm text-gray-500 dark:text-gray-400 pt-0 pb-2 pl-6",
                                        children: (0, a.jsx)("nav", {
                                            className: "relative",
                                            children: (0, a.jsx)("ul", {
                                                children: C.filter(e => "4" === e.right).map((e, t) => (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(i.default, {
                                                        onClick: r,
                                                        href: e.path,
                                                        "aria-label": e.name,
                                                        className: "group relative flex items-center gap-2 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75 px-3 py-1.5 w-full focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 rounded-md font-medium text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-200 dark:hover:before:bg-gray-800/50 ".concat(T(e.path) ? "transition duration-700 ease-in-out opacity-100 dark:hover:text-white dark:hover:before:bg-gray-800/50 bg-gray-200 dark:bg-gray-800 dark:text-white text-gray-900" : ""),
                                                        children: (0, a.jsx)("span", {
                                                            className: "truncate relative",
                                                            children: e.name
                                                        })
                                                    })
                                                }, t))
                                            })
                                        })
                                    })
                                }), (0, a.jsxs)("button", {
                                    onClick: () => p(!f),
                                    className: "flex items-center py-2 cursor-pointer overflow-hidden select-none w-full text-left",
                                    children: [(0, a.jsx)("span", {
                                        className: "icon-[bx--book-reader] w-5 h-5 ".concat(f ? "text-primary-500 dark:text-primary-400" : " text-gray-500 dark:text-gray-400")
                                    }), (0, a.jsx)("p", {
                                        className: "break-words text-sm ".concat(f ? "text-primary-500 dark:text-primary-400" : "text-gray-500 dark:text-gray-400", " font-semibold mx-4"),
                                        children: "Mạng X\xe3 Hội"
                                    }), f ? (0, a.jsx)("span", {
                                        className: "rotate-90 icon-[bx--chevron-right] w-5 h-5 text-primary-500 dark:text-primary-400 ms-auto transform transition-transform"
                                    }) : (0, a.jsx)("span", {
                                        className: "rotate-0 icon-[bx--chevron-right] w-5 h-5 text-gray-500 dark:text-gray-400 ms-auto transform transition-transform"
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "menu-dropdown ".concat(f ? "transition-opacity duration-500 ease-in-out show" : ""),
                                    children: (0, a.jsx)("div", {
                                        className: "text-sm text-gray-500 dark:text-gray-400 pt-0 pb-2 pl-6",
                                        children: (0, a.jsx)("nav", {
                                            className: "relative",
                                            children: (0, a.jsx)("ul", {
                                                children: C.filter(e => "5" === e.right).map((e, t) => (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(i.default, {
                                                        onClick: r,
                                                        href: e.path,
                                                        passHref: !0,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "group relative flex items-center gap-2 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75 px-3 py-1.5 w-full focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 rounded-md font-medium text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-200 dark:hover:before:bg-gray-800/50 ".concat(T(e.path) ? "transition duration-700 ease-in-out opacity-100 dark:hover:text-white dark:hover:before:bg-gray-800/50 bg-gray-200 dark:bg-gray-800 dark:text-white text-gray-900" : ""),
                                                        children: (0, a.jsx)("span", {
                                                            className: "truncate relative",
                                                            children: e.name
                                                        })
                                                    })
                                                }, t))
                                            })
                                        })
                                    })
                                })]
                            })]
                        })
                    }), (0, a.jsxs)("div", {
                        className: "fixed inset-0 flex z-50 ".concat(k ? "showhiden ease-in-out duration-300" : "hiden ease-in duration-300"),
                        children: [(0, a.jsx)("div", {
                            className: "fixed inset-0 transition-opacity bg-white/25 dark:bg-black/50 backdrop-blur"
                        }), (0, a.jsx)("div", {
                            className: "fixed inset-0 overflow-y-auto",
                            children: (0, a.jsx)("div", {
                                className: "flex min-h-full sm:items-center justify-center text-center items-center p-4 sm:p-0 ".concat(k ? "showhidenn ease-in-out duration-300" : "hidenn ease-in duration-300"),
                                children: (0, a.jsx)("div", {
                                    ref: j,
                                    className: "relative text-left rtl:text-right flex flex-col overflow-visible bg-white dark:bg-gray-900 shadow-xl w-full rounded-lg sm:my-8 sm:max-w-lg",
                                    children: (0, a.jsx)(l.Z, {
                                        closeModal: S
                                    })
                                })
                            })
                        })]
                    })]
                })
            }
        }
    }
]);