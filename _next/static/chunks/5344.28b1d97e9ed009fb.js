"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5344], {
        5344: function(e, r, t) {
            t.r(r), t.d(r, {
                default: function() {
                    return h
                }
            });
            var a = t(7437),
                i = t(7138),
                s = t(2265),
                n = t(1221),
                o = t(6447),
                l = () => {
                    let [e, r] = (0, s.useState)("light");
                    (0, s.useEffect)(() => {
                        let e = localStorage.getItem("theme") || "light";
                        r(e), document.documentElement.classList.add(e)
                    }, []);
                    let t = t => {
                        document.documentElement.classList.remove(e), document.documentElement.classList.add(t), r(t), localStorage.setItem("theme", t)
                    };
                    return (0, a.jsxs)(n.J2, {
                        className: "relative mr-5",
                        children: [(0, a.jsx)(n.J2.Button, {
                            className: "ring-inset ring-gray-300 ring-1 dark:ring-gray-700 dark:bg-gray-800  bg-gray-100 hover:bg-gray-100 focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white dark:hover:bg-gray-700 focus-visible:ring-inset focus-visible:ring-2 inline-flex items-center",
                            "aria-label": "Theme",
                            children: (0, a.jsx)("span", {
                                className: "icon-[bxs--brush] flexshrink-0 h-5 w-5",
                                children: (0, a.jsxs)("svg", {
                                    width: "20px",
                                    height: "20px",
                                    viewBox: "0 -0.5 17 17",
                                    version: "1.1",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "si-glyph si-glyph-brush-1",
                                    fill: "light" === e ? "#94a3b8" : "#ffffff",
                                    stroke: "light" === e ? "#94a3b8" : "#ffffff",
                                    children: [(0, a.jsx)("g", {
                                        id: "SVGRepo_bgCarrier",
                                        strokeWidth: "0"
                                    }), (0, a.jsx)("g", {
                                        id: "SVGRepo_tracerCarrier",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }), (0, a.jsxs)("g", {
                                        id: "SVGRepo_iconCarrier",
                                        children: [(0, a.jsx)("title", {
                                            children: "880"
                                        }), (0, a.jsx)("defs", {}), (0, a.jsx)("g", {
                                            stroke: "none",
                                            strokeWidth: "1",
                                            fill: "none",
                                            fillRule: "evenodd",
                                            children: (0, a.jsxs)("g", {
                                                transform: "translate(1.000000, 0.000000)",
                                                fill: "light" === e ? "#1e293b" : "#ffffff",
                                                children: [(0, a.jsx)("path", {
                                                    d: "M0.056,8.306 L4.364,4.955 L11.067,11.66 L7.717,15.968 C7.717,15.968 7.761,14.914 6.28,14.531 C4.89,14.172 4.648,12.243 3.437,11.843 C2.226,11.443 2.011,10.601 1.451,9.698 C0.891,8.795 0.056,8.306 0.056,8.306 L0.056,8.306 Z",
                                                    className: "si-glyph-fill"
                                                }), (0, a.jsx)("path", {
                                                    d: "M12.981,7.83 L11.835,6.684 C13.676,5.081 15.114,3.782 15.372,3.522 C16.167,2.729 16.165,1.444 15.372,0.651 C14.579,-0.143 13.292,-0.143 12.499,0.649 C12.241,0.909 10.94,2.346 9.339,4.189 L8.193,3.043 C7.664,2.514 6.806,2.513 6.277,3.042 L5.32,3.999 L12.024,10.704 L12.982,9.745 C13.51,9.217 13.51,8.358 12.981,7.83 Z M13.246,2.777 C12.863,2.394 12.863,1.775 13.246,1.393 C13.627,1.011 14.246,1.012 14.629,1.394 C15.012,1.777 15.012,2.396 14.629,2.777 C14.247,3.16 13.629,3.16 13.246,2.777 L13.246,2.777 Z",
                                                    className: "si-glyph-fill"
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            })
                        }), (0, a.jsx)(n.J2.Panel, {
                            className: "absolute z-10 left-1/2 transform -translate-x-1/2 mt-2 bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800 rounded-md shadow-lg w-56",
                            children: (0, a.jsx)("div", {
                                className: "p-2 w-56",
                                children: (0, a.jsx)(o.OK.Group, {
                                    selectedIndex: "light" === e ? 1 : "dark" === e ? 0 : 2,
                                    children: (0, a.jsxs)(o.OK.List, {
                                        className: "relative bg-gray-100 dark:bg-gray-800 rounded-lg p-1 grid grid-cols-2 gap-1",
                                        children: [(0, a.jsx)(o.OK, {
                                            className: e => {
                                                let {
                                                    selected: r
                                                } = e;
                                                return r ? "py-1.5	relative inline-flex items-center justify-center flex-shrink-0 w-full text-sm font-medium rounded-md text-gray-900 dark:text-white bg-white dark:bg-gray-900" : "py-1.5 relative inline-flex items-center justify-center flex-shrink-0 w-full text-sm font-medium rounded-md text-gray-900 dark:text-white"
                                            },
                                            onClick: () => t("dark"),
                                            children: "Dark"
                                        }), (0, a.jsx)(o.OK, {
                                            className: e => {
                                                let {
                                                    selected: r
                                                } = e;
                                                return r ? "py-1.5 relative inline-flex items-center justify-center flex-shrink-0 w-full text-sm font-medium rounded-md text-gray-900 dark:text-white bg-white dark:bg-gray-900" : "py-1.5 relative inline-flex items-center justify-center flex-shrink-0 w-full text-sm font-medium rounded-md text-gray-900 dark:text-white"
                                            },
                                            onClick: () => t("light"),
                                            children: "Light"
                                        })]
                                    })
                                })
                            })
                        })]
                    })
                },
                d = t(6648),
                c = t(2170),
                m = t(7661),
                g = t(6463),
                x = e => {
                    let {
                        closeModalNavbar: r
                    } = e, [t, n] = (0, s.useState)(!0), [o, l] = (0, s.useState)(!0), [d, x] = (0, s.useState)(!0), [h, u] = (0, s.useState)(!0), [f, b] = (0, s.useState)(!0), {
                        checkLoginStatus: y,
                        Zalo: p,
                        PageNso: v
                    } = (0, m.a)(), [k, w] = (0, s.useState)(!1), j = (0, s.useRef)(null), N = (0, g.useRouter)(), C = [{
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
                        path: "".concat(p),
                        right: "5"
                    }, {
                        name: "Fanpage",
                        path: "".concat(v),
                        right: "5"
                    }], L = (0, g.usePathname)(), E = e => L === e, S = () => {
                        w(!1)
                    }, T = () => {
                        w(!0)
                    }, z = e => {
                        j.current && !j.current.contains(e.target) && e instanceof MouseEvent && 0 === e.button && S(), e instanceof KeyboardEvent && "Escape" === e.key && S()
                    };
                    (0, s.useEffect)(() => (k ? (document.addEventListener("mousedown", z), document.addEventListener("keydown", z)) : (document.removeEventListener("mousedown", z), document.removeEventListener("keydown", z)), () => {
                        document.removeEventListener("mousedown", z), document.removeEventListener("keydown", z)
                    }), [k]);
                    let R = (e, t) => {
                        t.preventDefault(), y || "/recharge" !== e && "/exchange" !== e ? (N.push(e), "function" == typeof r && r()) : (w(!0), T(), localStorage.setItem("redirectTo", e))
                    };
                    return (0, s.useEffect)(() => {
                        y && ("/exchange" === L || "/recharge" === L) ? N.push(L) : y || "/exchange" !== L && "/recharge" !== L || N.push("/home")
                    }, [N, L]), (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)("div", {
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
                                    href: p,
                                    passHref: !0,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 w-full flex justify-center items-center",
                                    children: "Cộng Đồng - Box Zalo"
                                })
                            }), (0, a.jsxs)("div", {
                                className: "w-full flex flex-col",
                                children: [(0, a.jsxs)("button", {
                                    onClick: () => n(!t),
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
                                                            "/recharge" === e.path || "/exchange" === e.path ? R(e.path, t) : (N.push(e.path), "function" == typeof r && r())
                                                        },
                                                        href: e.path,
                                                        "aria-label": e.name,
                                                        className: "group relative flex items-center gap-2 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75 px-3 py-1.5 w-full focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 rounded-md font-medium text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-200 dark:hover:before:bg-gray-800/50 ".concat(E(e.path) ? "transition duration-700 ease-in-out opacity-100 dark:hover:text-white dark:hover:before:bg-gray-800/50 bg-gray-200 dark:bg-gray-800 dark:text-white text-gray-900" : ""),
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
                                    onClick: () => l(!o),
                                    className: "flex items-center py-2 cursor-pointer overflow-hidden select-none w-full text-left",
                                    children: [(0, a.jsx)("span", {
                                        className: "icon-[bx--calendar] w-5 h-5 ".concat(o ? "text-primary-500 dark:text-primary-400" : " text-gray-500 dark:text-gray-400")
                                    }), (0, a.jsx)("p", {
                                        className: "break-words text-sm ".concat(o ? "text-primary-500 dark:text-primary-400" : "text-gray-500 dark:text-gray-400", " font-semibold mx-4"),
                                        children: "Sự Kiện"
                                    }), o ? (0, a.jsx)("span", {
                                        className: "rotate-90 icon-[bx--chevron-right] w-5 h-5 text-primary-500 dark:text-primary-400 ms-auto transform transition-transform"
                                    }) : (0, a.jsx)("span", {
                                        className: "rotate-0 icon-[bx--chevron-right] w-5 h-5 text-gray-500 dark:text-gray-400 ms-auto transform transition-transform"
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "menu-dropdown ".concat(o ? "transition-opacity duration-500 ease-in-out show" : ""),
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
                                                        className: "group relative flex items-center gap-2 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75 px-3 py-1.5 w-full focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 rounded-md font-medium text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-200 dark:hover:before:bg-gray-800/50 ".concat(E(e.path) ? "transition duration-700 ease-in-out opacity-100 dark:hover:text-white dark:hover:before:bg-gray-800/50 bg-gray-200 dark:bg-gray-800 dark:text-white text-gray-900" : ""),
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
                                    onClick: () => x(!d),
                                    className: "flex items-center py-2 cursor-pointer overflow-hidden select-none w-full text-left",
                                    children: [(0, a.jsx)("span", {
                                        className: "icon-[bx--bar-chart-alt-2] w-5 h-5 ".concat(d ? "text-primary-500 dark:text-primary-400" : " text-gray-500 dark:text-gray-400")
                                    }), (0, a.jsx)("p", {
                                        className: "break-words text-sm ".concat(d ? "text-primary-500 dark:text-primary-400" : "text-gray-500 dark:text-gray-400", " font-semibold mx-4"),
                                        children: "Xếp Hạng"
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
                                                children: C.filter(e => "3" === e.right).map((e, t) => (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(i.default, {
                                                        onClick: r,
                                                        href: e.path,
                                                        "aria-label": e.name,
                                                        className: "group relative flex items-center gap-2 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75 px-3 py-1.5 w-full focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 rounded-md font-medium text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-200 dark:hover:before:bg-gray-800/50 ".concat(E(e.path) ? "transition duration-700 ease-in-out opacity-100 dark:hover:text-white dark:hover:before:bg-gray-800/50 bg-gray-200 dark:bg-gray-800 dark:text-white text-gray-900" : ""),
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
                                    onClick: () => u(!h),
                                    className: "flex items-center py-2 cursor-pointer overflow-hidden select-none w-full text-left",
                                    children: [(0, a.jsx)("span", {
                                        className: "icon-[bx--news] w-5 h-5 ".concat(h ? "text-primary-500 dark:text-primary-400" : " text-gray-500 dark:text-gray-400")
                                    }), (0, a.jsx)("p", {
                                        className: "break-words text-sm ".concat(h ? "text-primary-500 dark:text-primary-400" : "text-gray-500 dark:text-gray-400", " font-semibold mx-4"),
                                        children: "B\xe0i Viết"
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
                                                children: C.filter(e => "4" === e.right).map((e, t) => (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(i.default, {
                                                        onClick: r,
                                                        href: e.path,
                                                        "aria-label": e.name,
                                                        className: "group relative flex items-center gap-2 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75 px-3 py-1.5 w-full focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 rounded-md font-medium text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-200 dark:hover:before:bg-gray-800/50 ".concat(E(e.path) ? "transition duration-700 ease-in-out opacity-100 dark:hover:text-white dark:hover:before:bg-gray-800/50 bg-gray-200 dark:bg-gray-800 dark:text-white text-gray-900" : ""),
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
                                    onClick: () => b(!f),
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
                                                        className: "group relative flex items-center gap-2 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75 px-3 py-1.5 w-full focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 rounded-md font-medium text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-200 dark:hover:before:bg-gray-800/50 ".concat(E(e.path) ? "transition duration-700 ease-in-out opacity-100 dark:hover:text-white dark:hover:before:bg-gray-800/50 bg-gray-200 dark:bg-gray-800 dark:text-white text-gray-900" : ""),
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
                                        children: (0, a.jsx)(c.Z, {
                                            closeModal: S
                                        })
                                    })
                                })
                            })]
                        })]
                    })
                };

            function h() {
                let [e, r] = (0, s.useState)(!1), [t, n] = (0, s.useState)(!1), [o, h] = (0, s.useState)(!1), u = (0, s.useRef)(null), f = (0, s.useRef)(null), [b, y] = (0, s.useState)(!1), p = (0, s.useRef)(null), {
                    username: v,
                    logout: k,
                    checkLoginStatus: w,
                    balance: j
                } = (0, m.a)();
                (0, g.useRouter)();
                let N = () => {
                        r(!0)
                    },
                    C = () => {
                        n(!0)
                    },
                    L = () => {
                        r(!1)
                    },
                    E = () => {
                        n(!1)
                    },
                    S = () => {
                        y(!1)
                    },
                    T = e => {
                        u.current && !u.current.contains(e.target) && L(), p.current && !p.current.contains(e.target) && E(), f.current && !f.current.contains(e.target) && S(), "Escape" === e.key && (L(), S(), E(), h(!1))
                    };
                return (0, s.useEffect)(() => (e || o || b || t ? (document.addEventListener("mousedown", T), document.addEventListener("keydown", T)) : (document.removeEventListener("mousedown", T), document.removeEventListener("keydown", T)), () => {
                    document.removeEventListener("mousedown", T), document.removeEventListener("keydown", T)
                }), [e, o, b, t]), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("header", {
                        ref: f,
                        className: "sticky top-0 z-50 bg-white/75 dark:bg-transparent backdrop-blur-xl",
                        children: (0, a.jsxs)("div", {
                            className: "mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center h-[var(--header-size)] max-h-[var(--header-size)]",
                            children: [(0, a.jsx)("div", {
                                className: "flex items-center md:hidden mr-2",
                                children: (0, a.jsx)("span", {
                                    className: "icon-[bx--menu-alt-left] w-27 h-27 cursor-pointer",
                                    onClick: () => C()
                                })
                            }), (0, a.jsx)("div", {
                                className: "flex items-center mr-auto",
                                children: (0, a.jsx)(i.default, {
                                    href: "/",
                                    className: "router-link-active router-link-exact-active",
                                    children: (0, a.jsx)("div", {
                                        className: "flex items-center",
                                        children: (0, a.jsx)(d.default, {
                                            className: "w-40 h-[calc(var(--header-size)*0.9)] mr-2",
                                            alt: "Nso ninja school",
                                            src: "/images/logo.gif",
                                            width: 300,
                                            height: 331,
                                            priority: !0
                                        })
                                    })
                                })
                            }), (0, a.jsx)("div", {}), (0, a.jsx)("div", {
                                className: "flex justify-end items-center",
                                children: (0, a.jsx)("div", {
                                    className: "relative",
                                    children: (0, a.jsxs)("div", {
                                        className: "flex items-center ml-1",
                                        children: [(0, a.jsx)(l, {}), w ? (0, a.jsxs)("div", {
                                            className: "relative",
                                            onClick: () => y(!b),
                                            children: [(0, a.jsxs)("button", {
                                                onClick: () => {
                                                    h(!o)
                                                },
                                                className: "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 w-full flex justify-center items-center",
                                                children: [(0, a.jsx)("span", {
                                                    className: "icon-[bxs--user] flex-shrink-0 h-5 w-5"
                                                }), "Hi, ", (0, a.jsx)("span", {
                                                    className: "font-semibold",
                                                    children: v
                                                })]
                                            }), (0, a.jsx)("div", {
                                                className: "absolute z-20 w-full py-1 mt-1 y-800 rounded-xl  menu-dropdown ".concat(b ? "ransition-opacity duration-200 ease-in-out show" : ""),
                                                children: (0, a.jsxs)("div", {
                                                    className: "relative focus:outline-none overflow-y-auto scroll-py-1 ring-1 ring-gray-200 dark:ring-gray-700 rounded-md shadow-lg bg-white dark:bg-gray-800 p-1 max-h-60",
                                                    children: [(0, a.jsx)(i.default, {
                                                        href: "/profile",
                                                        className: "hover:bg-gray-200 hover:dark:bg-gray-900 cursor-default select-none relative flex items-center justify-between gap-1 rounded-md px-2 py-1.5 text-sm text-gray-900 dark:text-white",
                                                        children: "Th\xf4ng Tin"
                                                    }), (0, a.jsx)("div", {
                                                        onClick: k,
                                                        className: "hover:bg-gray-200 hover:dark:bg-gray-900 cursor-default select-none relative flex items-center justify-between gap-1 rounded-md px-2 py-1.5 text-sm text-gray-900 dark:text-white",
                                                        children: "Đăng Xuất"
                                                    })]
                                                })
                                            })]
                                        }) : (0, a.jsx)("button", {
                                            onClick: () => N(),
                                            className: "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center",
                                            children: "Đăng Nhập"
                                        })]
                                    })
                                })
                            })]
                        })
                    }), (0, a.jsxs)("div", {
                        className: "fixed inset-0 flex z-50 ".concat(e ? "showhiden ease-in-out duration-300" : "hiden ease-in duration-300"),
                        children: [(0, a.jsx)("div", {
                            className: "fixed inset-0 transition-opacity bg-white/25 dark:bg-black/50 backdrop-blur"
                        }), (0, a.jsx)("div", {
                            className: "fixed inset-0 overflow-y-auto",
                            children: (0, a.jsx)("div", {
                                className: "flex min-h-full sm:items-center justify-center text-center items-center p-4 sm:p-0 ".concat(e ? "showhidenn ease-in-out duration-300" : "hidenn ease-in duration-300"),
                                children: (0, a.jsx)("div", {
                                    ref: u,
                                    className: "relative text-left rtl:text-right flex flex-col overflow-visible bg-white dark:bg-gray-900 shadow-xl w-full rounded-lg sm:my-8 sm:max-w-lg",
                                    children: (0, a.jsx)(c.Z, {
                                        closeModal: L
                                    })
                                })
                            })
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "fixed inset-0 flex z-50 ".concat(t ? "showhiden" : "hiden"),
                        children: [(0, a.jsx)("div", {
                            className: "fixed inset-0 transition-opacity bg-white/25 dark:bg-black/50 backdrop-blur"
                        }), (0, a.jsx)("div", {
                            className: "relative flex-1 flex flex-col w-full focus:outline-none w-screen max-w-xs bg-white dark:bg-gray-900 menu-dropdown-ar ".concat(t ? "show" : "hide"),
                            children: (0, a.jsx)("div", {
                                ref: p,
                                className: "relative overflow-visible overflow-y-auto rounded-lg divide-y divide-gray-100 dark:divide-gray-800 shadow bg-white dark:bg-gray-900 flex flex-col flex-1 w-full",
                                children: (0, a.jsxs)("div", {
                                    className: "grow overflow-y-auto px-4 py-3 sm:p-6",
                                    children: [(0, a.jsx)("div", {
                                        className: "flex justify-center items-center w-full mb-3",
                                        children: (0, a.jsx)("a", {
                                            className: "focus:outline-none",
                                            href: "/",
                                            children: (0, a.jsx)("div", {
                                                className: "flex items-center",
                                                children: (0, a.jsx)("img", {
                                                    alt: "NsoPlus",
                                                    loading: "lazy",
                                                    width: "500",
                                                    height: "331",
                                                    className: "w-auto h-[calc(var(--header-size)*1.5)] mr-2",
                                                    src: "/images/logo.gif",
                                                    style: {
                                                        color: "transparent"
                                                    }
                                                })
                                            })
                                        })
                                    }), (0, a.jsx)(x, {
                                        closeModalNavbar: E
                                    })]
                                })
                            })
                        })]
                    })]
                })
            }
        }
    }
]);