(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9242], {
        2480: function() {},
        3984: function(e, t) {
            "use strict";
            t.Z = "https://api.nsoace2.com"
        },
        8504: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return l
                }
            });
            var n = a(7437),
                r = a(2265),
                i = a(7661),
                s = a(681),
                o = a(3984);

            function l(e) {
                let {
                    closeModal: t
                } = e, [a, l] = (0, r.useState)(""), [c, d] = (0, r.useState)(""), {
                    encryptData: u,
                    decryptData: m,
                    generateRandomIV: p,
                    checkLoginStatus: h,
                    userId: x,
                    refetch: g
                } = (0, i.a)(), [y, f] = (0, r.useState)(!1), [v, b] = (0, r.useState)(!1), [k, w] = (0, r.useState)(""), [N, j] = (0, r.useState)(""), S = async e => {
                    e.preventDefault();
                    try {
                        if (!h) return {
                            success: !1,
                            error: "Đăng nhập để th\xeam số điện thoại."
                        };
                        f(!0);
                        let e = p(),
                            n = u(x, e),
                            r = u(a, e),
                            i = await fetch("".concat(o.Z, "/api/phone/add"), {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    ct: n,
                                    s: r,
                                    iv: e
                                })
                            });
                        if (i.ok) {
                            let e = await i.json(),
                                a = m(e.ct, e.iv),
                                {
                                    success: n,
                                    error: r,
                                    message: s
                                } = JSON.parse(a),
                                o = s || r || n;
                            return n ? (f(!1), t(), j(o)) : w(o), b(!0), g(), f(!1), {
                                success: n,
                                message: s
                            }
                        } {
                            let e = await i.json(),
                                t = m(e.ct, e.iv),
                                {
                                    error: a,
                                    message: n
                                } = JSON.parse(t);
                            return w(n || "Đ\xe3 xảy ra lỗi khi th\xeam số điện thoại."), b(!0), f(!1), {
                                success: !1,
                                error: a,
                                message: n
                            }
                        }
                    } catch (e) {
                        return w("Đ\xe3 xảy ra lỗi khi th\xeam số điện thoại."), b(!0), f(!1), {
                            success: !1,
                            error: "Đ\xe3 xảy ra lỗi khi th\xeam số điện thoại."
                        }
                    }
                };
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("div", {
                        className: "relative overflow-visible rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900",
                        children: (0, n.jsxs)("div", {
                            children: [(0, n.jsxs)("div", {
                                className: "px-4 py-5 sm:px-6",
                                children: [(0, n.jsx)("p", {
                                    className: "break-words text-base font-semibold",
                                    children: "Th\xeam số điện thoại"
                                }), (0, n.jsx)("p", {
                                    className: "break-words text-sm text-gray-500 dark:text-gray-400",
                                    children: "Bảo mật t\xe0i khoản của bạn bằng c\xe1ch th\xeam số điện thoại"
                                })]
                            }), (0, n.jsx)("hr", {}), (0, n.jsx)("div", {
                                className: "px-4 py-5 sm:p-6",
                                children: (0, n.jsxs)("form", {
                                    action: "#",
                                    children: [(0, n.jsxs)("div", {
                                        className: "mb-4",
                                        children: [(0, n.jsx)("div", {
                                            className: "flex content-center items-center justify-between text-sm",
                                            children: (0, n.jsx)("label", {
                                                htmlFor: "phone",
                                                className: "block font-medium text-gray-700 dark:text-gray-200",
                                                children: "Số Điện Thoại"
                                            })
                                        }), (0, n.jsxs)("div", {
                                            className: "relative mt-1",
                                            children: [(0, n.jsxs)("div", {
                                                className: "relative",
                                                children: [(0, n.jsx)("input", {
                                                    type: "text",
                                                    placeholder: "Số Điện Thoại",
                                                    className: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-3.5 py-2.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ".concat(c ? "ring-red-500" : "ring-gray-300 dark:ring-gray-700", " focus:ring-1.5 ps-11 focus:ring-primary-500 dark:focus:ring-primary-400"),
                                                    value: a,
                                                    onBlur: () => {
                                                        a ? /^[0-9]+$/.test(a) ? a.length < 9 ? d("Số điện thoại kh\xf4ng hợp lệ") : d("") : d("Số điện thoại kh\xf4ng hợp lệ") : d("Số điện thoại kh\xf4ng được bỏ trống")
                                                    },
                                                    onChange: e => l(e.target.value),
                                                    autoComplete: "phone"
                                                }), (0, n.jsx)("span", {
                                                    className: "absolute inset-y-0 start-0 flex items-center pointer-events-none px-3.5",
                                                    children: (0, n.jsx)("span", {
                                                        className: "icon-[bxs--phone] flex-shrink-0 ".concat(c ? "text-red-500" : "text-gray-400 dark:text-gray-500", " h-5 w-5")
                                                    })
                                                })]
                                            }), c && (0, n.jsx)("p", {
                                                className: "mt-2 text-red-500 dark:text-red-400 text-sm",
                                                children: c
                                            })]
                                        })]
                                    }), (0, n.jsx)("div", {
                                        className: "flex justify-end items-center mt-6",
                                        children: (0, n.jsxs)("button", {
                                            type: "submit",
                                            disabled: !a,
                                            onClick: S,
                                            className: "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 inline-flex items-center",
                                            children: [y && (0, n.jsx)("svg", {
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 100 100",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                children: (0, n.jsxs)("circle", {
                                                    cx: "50",
                                                    cy: "50",
                                                    r: "40",
                                                    className: "stroke-gray-100 dark:stroke-gray-600",
                                                    fill: "none",
                                                    strokeWidth: "10",
                                                    strokeLinecap: "round",
                                                    children: [(0, n.jsx)("animate", {
                                                        attributeName: "stroke-dasharray",
                                                        values: "0 251.2;  151.2 100.4;  251.2 0;  251.2 0",
                                                        keyTimes: "0; 0.5; 0.75; 1",
                                                        dur: "1.5s",
                                                        repeatCount: "indefinite"
                                                    }), (0, n.jsx)("animate", {
                                                        attributeName: "stroke-dashoffset",
                                                        values: "0; 0; -251.2; -251.2",
                                                        keyTimes: "0; 0.5; 0.75; 1",
                                                        dur: "1.5s",
                                                        repeatCount: "indefinite"
                                                    })]
                                                })
                                            }), y ? "Đăng x\xe1c nhận..." : "X\xe1c nhận"]
                                        })
                                    })]
                                })
                            })]
                        })
                    }), v && (0, n.jsxs)("div", {
                        className: "absolute bottom-4 right-4 z-50",
                        children: [k && (0, n.jsx)(s.Z, {
                            message: k,
                            closeModall: () => b(!1),
                            messageType: "error"
                        }), N && (0, n.jsx)(s.Z, {
                            message: N,
                            closeModall: () => b(!1),
                            messageType: "success"
                        })]
                    })]
                })
            }
        },
        4744: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return d
                }
            });
            var n = a(7437),
                r = a(2265),
                i = a(8472),
                s = a(9555),
                o = a(7661),
                l = a(3984),
                c = e => {
                    let {
                        closeModalActive: t
                    } = e, {
                        refetch: a,
                        encryptData: c,
                        decryptData: d,
                        userId: u,
                        generateRandomIV: m
                    } = (0, o.a)(), [p, h] = (0, r.useState)(0), [x, g] = (0, r.useState)(!0), y = async () => {
                        try {
                            let {
                                data: e
                            } = await i.Z.post("".concat(l.Z, "/api/settings")), {
                                ct: t,
                                iv: a
                            } = e, n = d(t, a);
                            return JSON.parse(n).find(e => "active_fee" === e.key) || null
                        } catch (e) {
                            throw Error("Error fetching posts")
                        }
                    }, {
                        data: f,
                        error: v,
                        isLoading: b,
                        refetch: k
                    } = (0, s.useQuery)("active", y);
                    (0, r.useEffect)(() => {
                        k()
                    }, []);
                    let w = f ? parseInt(f.value, 10) : null,
                        N = async () => {
                            if (x) try {
                                let e = m(),
                                    n = c(u, e),
                                    r = c(w, e),
                                    s = await i.Z.post("".concat(l.Z, "/api/user/active"), {
                                        ct: n,
                                        s: r,
                                        iv: e
                                    });
                                if (200 === s.status) {
                                    let e = s.data,
                                        n = d(e.ct, e.iv);
                                    JSON.parse(n), a(), t(), g(!1), h(Date.now()), setTimeout(() => {
                                        g(!0)
                                    }, 5e3)
                                }
                            } catch (e) {}
                        };
                    return (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsxs)("div", {
                            className: "relative overflow-visible rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900",
                            children: [(0, n.jsxs)("div", {
                                className: "px-4 py-5 sm:px-6",
                                children: [(0, n.jsx)("p", {
                                    className: "break-words text-base font-semibold",
                                    children: "K\xedch hoạt t\xe0i khoản"
                                }), (0, n.jsxs)("div", {
                                    className: "break-words text-sm text-gray-500 dark:text-gray-400",
                                    children: ["K\xedch hoạt ngay để nhận được quyền lợi:", (0, n.jsxs)("ul", {
                                        className: "mt-1.5 list-disc list-inside",
                                        children: [(0, n.jsx)("li", {
                                            children: "Mở t\xednh năng giao dịch"
                                        }), (0, n.jsx)("li", {
                                            children: "Tham gia v\xf2ng xoay may mắn"
                                        }), (0, n.jsx)("li", {
                                            children: "Bu\xf4n b\xe1n vật phẩm tr\xean shinwa"
                                        }), (0, n.jsx)("li", {
                                            children: "Đ\xf3ng g\xf3p xu gia tộc"
                                        }), (0, n.jsx)("li", {
                                            children: "Chat k\xeanh thế giới"
                                        }), (0, n.jsx)("li", {
                                            children: "...v\xe0 một số t\xednh năng kh\xe1c"
                                        })]
                                    })]
                                })]
                            }), (0, n.jsx)("div", {
                                className: "px-4 py-5 sm:p-6",
                                children: (0, n.jsxs)("button", {
                                    onClick: N,
                                    type: "button",
                                    className: "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 inline-flex items-center",
                                    disabled: !f,
                                    children: ["K\xedch hoạt - Ph\xed ", null == w ? void 0 : w.toLocaleString(), " coin"]
                                })
                            })]
                        })
                    })
                };

            function d() {
                let [e, t] = (0, r.useState)(!1), [a, i] = (0, r.useState)(!0), s = (0, r.useRef)(null), o = () => {
                    t(!1)
                }, l = e => {
                    s.current && !s.current.contains(e.target) && e instanceof MouseEvent && 0 === e.button && o(), e instanceof KeyboardEvent && "Escape" === e.key && o()
                };
                return (0, r.useEffect)(() => (e ? (document.addEventListener("mousedown", l), document.addEventListener("keydown", l)) : (document.removeEventListener("mousedown", l), document.removeEventListener("keydown", l)), () => {
                    document.removeEventListener("mousedown", l), document.removeEventListener("keydown", l)
                }), [e]), (0, n.jsx)(n.Fragment, {
                    children: a && (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)("div", {
                            className: "p-4 mb-4 text-primary-800 border border-primary-300 rounded-lg bg-primary-50 dark:bg-gray-800 dark:text-primary-400 dark:border-primary-800",
                            children: [(0, n.jsxs)("div", {
                                className: "flex items-center",
                                children: [(0, n.jsx)("span", {
                                    className: "icon-[bx--error] flex-shrink-0 w-4 h-4 me-2"
                                }), (0, n.jsx)("span", {
                                    className: "sr-only",
                                    children: "Info"
                                }), (0, n.jsx)("h3", {
                                    className: "text-lg font-medium",
                                    children: "K\xedch hoạt t\xe0i khoản"
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "mb-2 text-sm",
                                children: ["K\xedch hoạt ngay để nhận được quyền lợi:", (0, n.jsxs)("ul", {
                                    className: "mt-1.5 list-disc list-inside",
                                    children: [(0, n.jsx)("li", {
                                        children: "Mở t\xednh năng giao dịch"
                                    }), (0, n.jsx)("li", {
                                        children: "Tham gia v\xf2ng xoay may mắn"
                                    }), (0, n.jsx)("li", {
                                        children: "Bu\xf4n b\xe1n vật phẩm tr\xean shinwa"
                                    })]
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "flex",
                                children: [(0, n.jsxs)("button", {
                                    onClick: () => {
                                        t(!0)
                                    },
                                    className: "text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
                                    children: [(0, n.jsx)("span", {
                                        className: "icon-[bx--check] me-1 h-5 w-5"
                                    }), "K\xedch hoạt ngay"]
                                }), (0, n.jsx)("button", {
                                    onClick: () => {
                                        i(!1)
                                    },
                                    type: "button",
                                    className: "text-primary-800 bg-transparent border border-primary-800 hover:bg-primary-900 hover:text-white focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-primary-600 dark:border-primary-600 dark:text-primary-400 dark:hover:text-white dark:focus:ring-primary-800",
                                    children: "Để sau"
                                })]
                            })]
                        }), (0, n.jsxs)("div", {
                            className: "fixed inset-0 flex z-50 ".concat(e ? "showhiden ease-in-out duration-300" : "hiden ease-in duration-300"),
                            children: [(0, n.jsx)("div", {
                                className: "fixed inset-0 transition-opacity bg-white/25 dark:bg-black/50 backdrop-blur"
                            }), (0, n.jsx)("div", {
                                className: "fixed inset-0 overflow-y-auto",
                                children: (0, n.jsx)("div", {
                                    className: "flex min-h-full sm:items-center justify-center text-center items-center p-4 sm:p-0 ".concat(e ? "showhidenn ease-in-out duration-300" : "hidenn ease-in duration-300"),
                                    children: (0, n.jsx)("div", {
                                        ref: s,
                                        className: "relative text-left rtl:text-right flex flex-col overflow-visible bg-white dark:bg-gray-900 shadow-xl w-full rounded-lg sm:my-8 sm:max-w-lg",
                                        children: (0, n.jsx)(c, {
                                            closeModalActive: o
                                        })
                                    })
                                })
                            })]
                        })]
                    })
                })
            }
        },
        681: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return i
                }
            });
            var n = a(7437),
                r = a(2265);

            function i(e) {
                let {
                    message: t,
                    closeModall: a,
                    messageType: i
                } = e, [s, o] = (0, r.useState)("error" === i);
                return (0, n.jsxs)("div", {
                    id: "NotiflixReportWrap",
                    className: "notiflix-report",
                    style: {
                        zIndex: 4002,
                        borderRadius: "25px",
                        fontFamily: 'Quicksand, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
                        display: "flex",
                        flexFlow: "column wrap",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    children: [(0, n.jsx)("div", {
                        className: "notiflix-report-overlay nx-with-animation nx-report-click-to-close",
                        style: {
                            animationDuration: "100ms"
                        },
                        onClick: () => {
                            o(!1), a()
                        }
                    }), (0, n.jsxs)("div", {
                        className: "border-10 border-primary-500 border-solid bg-gray-100 notiflix-report-content nx-with-animation nx-fade",
                        style: {
                            width: "320px",
                            animationDuration: "100ms"
                        },
                        children: [(0, n.jsx)("div", {
                            style: {
                                width: "50px",
                                height: "50px"
                            },
                            className: "notiflix-report-icon",
                            children: s ? (0, n.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "50px",
                                height: "50px",
                                fill: "#ff5549",
                                viewBox: "0 0 120 120",
                                children: [(0, n.jsx)("style", {
                                    children: "\n                            @keyframes NXReportFailure2-animation {\n                                0% { opacity: 0 }\n                                40%, to { opacity: 1 }\n                            }\n                            @keyframes NXReportFailure1-animation {\n                                0% {\n                                    transform: translate(60px, 60px) scale(.5, .5) translate(-60px, -60px);\n                                }\n                                40%, to {\n                                    transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);\n                                }\n                                60% {\n                                    transform: translate(60px, 60px) scale(.95, .95) translate(-60px, -60px);\n                                }\n                            }\n                            @keyframes NXReportFailure3-animation {\n                                0% {\n                                    transform: translate(60px, 60px) scale(.5, .5) translate(-60px, -60px);\n                                }\n                                50%, to {\n                                    transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);\n                                }\n                                60% {\n                                    transform: translate(60px, 60px) scale(.95, .95) translate(-60px, -60px);\n                                }\n                            }\n                            @keyframes NXReportFailure4-animation {\n                                0% { opacity: 0 }\n                                50%, to { opacity: 1 }\n                            }\n                            "
                                }), (0, n.jsx)("g", {
                                    style: {
                                        animationName: "NXReportFailure1-animation",
                                        animationTimingFunction: "cubic-bezier(.42, 0, .58, 1)",
                                        transform: "translate(60px, 60px) scale(1, 1) translate(-60px, -60px)"
                                    },
                                    children: (0, n.jsx)("path", {
                                        d: "M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z",
                                        style: {
                                            animationName: "NXReportFailure2-animation",
                                            animationTimingFunction: "cubic-bezier(.42, 0, .58, 1)"
                                        },
                                        fill: "inherit",
                                        "data-animator-group": "true",
                                        "data-animator-type": "2"
                                    })
                                }), (0, n.jsx)("g", {
                                    style: {
                                        animationName: "NXReportFailure3-animation",
                                        animationTimingFunction: "cubic-bezier(.42, 0, .58, 1)",
                                        transform: "translate(60px, 60px) scale(1, 1) translate(-60px, -60px)"
                                    },
                                    children: (0, n.jsx)("path", {
                                        d: "M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z",
                                        style: {
                                            animationName: "NXReportFailure4-animation",
                                            animationTimingFunction: "cubic-bezier(.42, 0, .58, 1)"
                                        },
                                        fill: "inherit",
                                        "data-animator-group": "true",
                                        "data-animator-type": "2"
                                    })
                                })]
                            }) : (0, n.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                id: "NXReportSuccess",
                                width: "50px",
                                height: "50px",
                                viewBox: "0 0 120 120",
                                className: "fill-primary-500",
                                children: [(0, n.jsx)("g", {
                                    style: {
                                        animationName: "NXReportSuccess2-animation",
                                        transform: "translate(60px,60px) scale(1,1) translate(-60px,-60px)"
                                    },
                                    children: (0, n.jsx)("path", {
                                        d: "M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z",
                                        style: {
                                            animationName: "NXReportSuccess3-animation"
                                        },
                                        fill: "inherit",
                                        "data-animator-group": "true",
                                        "data-animator-type": "2"
                                    })
                                }), (0, n.jsx)("g", {
                                    style: {
                                        animationName: "NXReportSuccess1-animation",
                                        transform: "translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)"
                                    },
                                    children: (0, n.jsx)("path", {
                                        d: "M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z",
                                        style: {
                                            animationName: "NXReportSuccess4-animation"
                                        },
                                        fill: "inherit",
                                        "data-animator-group": "true",
                                        "data-animator-type": "2"
                                    })
                                })]
                            })
                        }), (0, n.jsx)("h5", {
                            className: "notiflix-report-title",
                            style: {
                                fontWeight: 500,
                                fontSize: "16px",
                                color: "#1e1e1e"
                            },
                            children: s ? "Thất bại" : "Th\xe0nh c\xf4ng"
                        }), (0, n.jsx)("p", {
                            className: "notiflix-report-message",
                            style: {
                                fontSize: "14px",
                                color: "#242424"
                            },
                            children: t
                        }), (0, n.jsx)("a", {
                            id: "NXReportButton",
                            className: "notiflix-report-button bg-primary-500",
                            style: {
                                fontWeight: 500,
                                fontSize: "14px",
                                color: "#fff"
                            },
                            onClick: a,
                            children: "X\xe1c nhận"
                        })]
                    })]
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
                    return h
                }
            });
            var n = a(7437),
                r = a(2265),
                i = a(8110),
                s = a.n(i),
                o = a(2649),
                l = a(6463),
                c = a(8472),
                d = a(9555),
                u = a(3984);
            let m = (0, r.createContext)({
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
                } = e, [a, i] = (0, r.useState)(""), [p, h] = (0, r.useState)(""), [x, g] = (0, r.useState)(0), [y, f] = (0, r.useState)(""), [v, b] = (0, r.useState)(0), [k, w] = (0, r.useState)(""), [N, j] = (0, r.useState)(""), [S, Z] = (0, r.useState)(""), [_, C] = (0, r.useState)(""), [E, T] = (0, r.useState)(!1), [F, R] = (0, r.useState)(new Date), [z, L] = (0, r.useState)(""), [X, M] = (0, r.useState)(""), [O, J] = (0, r.useState)(""), [B, D] = (0, r.useState)(""), [K, A] = (0, r.useState)(""), [I, P] = (0, r.useState)(""), [U, W] = (0, r.useState)(""), [H, Q] = (0, r.useState)(""), [$, q] = (0, r.useState)(""), [V, G] = (0, r.useState)(""), [Y, ee] = (0, r.useState)(""), et = (0, l.useRouter)();

                function ea(e, t) {
                    return s().AES.decrypt(e, t).toString(s().enc.Utf8).replace(/^"(.*)"$/, "$1")
                }

                function en() {
                    return s().lib.WordArray.random(16).toString(s().enc.Hex)
                }

                function er(e, t) {
                    return s().AES.encrypt(JSON.stringify(e), t).toString()
                }
                async function ei() {
                    let e = o.Z.get("access_token");
                    if (!e) throw Error("Access token not found");
                    let t = await c.Z.get("".concat(u.Z, "/api/user/profile"), {
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
                    data: es,
                    isLoading: eo,
                    isError: el,
                    refetch: ec
                } = (0, d.useQuery)("profile", ei, {
                    enabled: !!o.Z.get("access_token"),
                    onSuccess: e => {
                        g(e.kh), b(e.online), w(e.user_id), i(e.username), h(e.name), f(e.balance), G(e.phone), ee(e.email), Z(e.tongnap), J(e.role), D(e.countvxmm), C(e.tongnapthang), L(e.last_login_time), M(e.last_logout_time), T(!0)
                    },
                    onError: e => {}
                });
                async function ed() {
                    try {
                        let {
                            data: e
                        } = await c.Z.post("".concat(u.Z, "/api/settings")), {
                            ct: t,
                            iv: a
                        } = e, n = ea(t, a);
                        return JSON.parse(n) || null
                    } catch (e) {
                        throw Error("Error fetching posts")
                    }
                }(0, r.useEffect)(() => {
                    ec()
                }, []);
                let {
                    data: eu,
                    error: em,
                    isLoading: ep,
                    refetch: eh
                } = (0, d.useQuery)("settings", ed, {
                    onSuccess: e => {
                        let t = e.find(e => "link_zalo" === e.key),
                            a = e.find(e => "link_page" === e.key),
                            n = e.find(e => "ratio_atm" === e.key),
                            r = e.find(e => "ratio_atm" === e.key),
                            i = e.find(e => "ratio_atm" === e.key),
                            s = t ? t.value : null,
                            o = a ? a.value : null,
                            l = n ? n.value : null,
                            c = r ? r.value : null,
                            d = i ? i.value : null;
                        A(s), P(o), W(l), Q(c), q(d)
                    },
                    onError: e => {}
                });
                async function ex(e, t) {
                    try {
                        if (o.Z.get("access_token")) return {
                            success: !1,
                            error: "Bạn đ\xe3 đăng nhập rồi."
                        };
                        let a = en(),
                            n = er(e, a),
                            r = er(t, a),
                            i = await c.Z.post("".concat(u.Z, "/api/user/login"), {
                                ct: n,
                                s: r,
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
                                    success: n,
                                    error: r,
                                    message: s
                                } = a,
                                l = a.token;
                            return o.Z.set("access_token", l), T(!0), ec(), {
                                success: !0,
                                message: s
                            }
                        } {
                            let e = i.data,
                                t = ea(e.ct, e.iv),
                                {
                                    error: a,
                                    message: n
                                } = JSON.parse(t);
                            return {
                                success: !1,
                                error: a,
                                message: n
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
                        if (o.Z.get("access_token")) return {
                            success: !1,
                            error: "Đăng Đăng Nhập Kh\xf4ng Thể Đăng K\xfd."
                        };
                        let n = en(),
                            r = er(e, n),
                            i = er(JSON.stringify({
                                password: t,
                                confirmPassword: a
                            }), n),
                            s = await c.Z.post("".concat(u.Z, "/api/user/register"), {
                                ct: r,
                                s: i,
                                iv: n
                            }, {
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            });
                        if (200 === s.status) {
                            let e = await s.data,
                                t = ea(e.ct, e.iv),
                                a = JSON.parse(t),
                                {
                                    success: n,
                                    error: r,
                                    message: i
                                } = a,
                                l = a.token;
                            return o.Z.set("access_token", l), T(!0), ec(), {
                                success: !0,
                                message: i
                            }
                        } {
                            let e = await s.data,
                                t = ea(e.ct, e.iv),
                                {
                                    error: a,
                                    message: n
                                } = JSON.parse(t);
                            return {
                                success: !1,
                                error: a,
                                message: n
                            }
                        }
                    } catch (e) {
                        return {
                            success: !1,
                            error: "Đ\xe3 xảy ra lỗi khi đăng k\xfd"
                        }
                    }
                }
                return (0, r.useEffect)(() => {
                    eh()
                }, [eh]), (0, r.useEffect)(() => {
                    R(new Date(new Date().toLocaleString("en-US", {
                        timeZone: "Asia/Ho_Chi_Minh"
                    })))
                }, []), (0, n.jsx)(m.Provider, {
                    value: {
                        refetch: ec,
                        loginUser: ex,
                        registerUser: eg,
                        username: a,
                        namePlayer: p,
                        logout: function() {
                            localStorage.removeItem("next-secure-v1.j.user"), o.Z.remove("access_token"), o.Z.remove("authToken"), i(""), h(""), g(0), et.push("/home"), T(!1)
                        },
                        activated: x,
                        checkLoginStatus: E,
                        balance: y,
                        online: v,
                        userId: k,
                        VietNameTime: F,
                        decryptData: ea,
                        encryptData: er,
                        generateRandomIV: en,
                        KeyMa: N,
                        TimeLogin: z,
                        TimeLogOut: X,
                        tongnap: S,
                        tongnapthang: _,
                        role: O,
                        countvxmm: B,
                        Zalo: K,
                        PageNso: I,
                        ratio_atm: U,
                        ratio_card: $,
                        ratio_momo: H,
                        phone: V,
                        email: Y
                    },
                    children: t
                })
            }

            function h() {
                return (0, r.useContext)(m)
            }
        }
    }
]);