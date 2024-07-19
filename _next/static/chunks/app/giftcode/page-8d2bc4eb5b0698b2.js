(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2971], {
        2480: function() {},
        6756: function(e, t, r) {
            Promise.resolve().then(r.bind(r, 6391))
        },
        3984: function(e, t) {
            "use strict";
            t.Z = "https://api.nsoace2.com"
        },
        6391: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return x
                }
            });
            var s = r(7437),
                a = r(2265),
                i = r(8110),
                n = r.n(i),
                l = r(3984),
                d = r(8472);
            let c = async () => {
                try {
                    var e, t;
                    let r = (await d.Z.post("".concat(l.Z, "/api/giftcode"), {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })).data,
                        s = (e = r.ct, t = r.iv, n().AES.decrypt(e, t).toString(n().enc.Utf8).replace(/^"(.*)"$/, "$1"));
                    return JSON.parse(s) || null
                } catch (e) {
                    return
                }
            };
            var o = r(9555);

            function x() {
                let [e, t] = (0, a.useState)(!1), r = (0, a.useRef)(null), i = (0, a.useRef)(null), [n, l] = (0, a.useState)(null), [d, x] = (0, a.useState)([]), [m, p] = (0, a.useState)([]), [h, g] = (0, a.useState)([]);
                (0, a.useEffect)(() => {
                    document.title = "Giftcode - Ninja School Online"
                }, []);
                let y = () => {
                        t(!1)
                    },
                    u = e => {
                        let r = e.currentTarget,
                            s = r.querySelector(".object-cover"),
                            a = r.querySelector(".flex");
                        s && a && (l({
                            name: s.getAttribute("alt") || "",
                            imageSrc: s.getAttribute("src") || "",
                            quantity: a.textContent || ""
                        }), t(!0))
                    },
                    b = e => {
                        r.current && !r.current.contains(e.target) && e instanceof MouseEvent && 0 === e.button && y(), e instanceof KeyboardEvent && "Escape" === e.key && y()
                    };

                function f(e) {
                    return e >= 1e9 ? (e / 1e9).toFixed(1).replace(".0", "") + "b" : e >= 1e8 ? (e / 1e6).toFixed(0) + "m" : e >= 1e6 ? (e / 1e6).toFixed(1).replace(".0", "") + "m" : e >= 1e5 ? (e / 1e3).toFixed(0) + "k" : e >= 1e4 ? (e / 1e3).toFixed(1).replace(".0", "") + "k" : e.toString()
                }(0, a.useEffect)(() => (e ? (document.addEventListener("mousedown", b), document.addEventListener("keydown", b)) : (document.removeEventListener("mousedown", b), document.removeEventListener("keydown", b)), () => {
                    document.removeEventListener("mousedown", b), document.removeEventListener("keydown", b)
                }), [e]);
                let {
                    data: v,
                    error: j,
                    isLoading: w
                } = (0, o.useQuery)("giftcodes", c);
                return console.log(v), (0, a.useEffect)(() => {
                    if (v) {
                        let e = v.map(e => e),
                            t = v.map(e => e.code),
                            r = v.map(e => e.items);
                        x(t), p(r), g(e)
                    }
                }, [v]), (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)("div", {
                        className: "relative mb-7",
                        children: [(0, s.jsx)("div", {
                            className: "flex justify-between items-center capitalize mb-4",
                            children: (0, s.jsxs)("div", {
                                children: [(0, s.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [(0, s.jsx)("span", {
                                        className: "icon-[bxs--circle] w-4 h-4 text-primary-500 dark:text-primary-400 md:mr-4 mr-2"
                                    }), (0, s.jsx)("p", {
                                        className: "md:text-2xl text-xl font-bold text-gray-700 dark:text-gray-300",
                                        children: "Gift Code"
                                    })]
                                }), (0, s.jsx)("p", {
                                    className: "break-words text-gray-500 dark:text-gray-400 md:text-lg text-sm md:mt-1",
                                    children: "M\xe3 qu\xe0 tặng c\xf4ng khai"
                                })]
                            })
                        }), (0, s.jsx)("div", {
                            children: (0, s.jsx)("div", {
                                children: (0, s.jsx)("div", {
                                    className: "mb-4",
                                    children: (0, s.jsx)("div", {
                                        className: "relative mt-2",
                                        children: (0, s.jsx)("div", {
                                            className: "relative overflow-visible rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900",
                                            children: (0, s.jsx)("div", {
                                                className: "p-0 sm:p-0",
                                                children: (0, s.jsx)("div", {
                                                    className: "relative overflow-x-auto",
                                                    children: (0, s.jsxs)("table", {
                                                        className: "min-w-full table-fixed divide-y divide-gray-300 dark:divide-gray-700",
                                                        children: [(0, s.jsx)("thead", {
                                                            children: (0, s.jsxs)("tr", {
                                                                children: [(0, s.jsx)("th", {
                                                                    scope: "col",
                                                                    className: "text-left rtl:text-right whitespace-nowrap px-3 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                                                                    children: (0, s.jsx)("span", {
                                                                        children: "M\xe1y chủ"
                                                                    })
                                                                }), (0, s.jsx)("th", {
                                                                    scope: "col",
                                                                    className: "text-left rtl:text-right whitespace-nowrap px-3 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                                                                    children: (0, s.jsx)("span", {
                                                                        children: "M\xe3"
                                                                    })
                                                                }), (0, s.jsx)("th", {
                                                                    scope: "col",
                                                                    className: "text-left rtl:text-right whitespace-nowrap px-3 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                                                                    children: (0, s.jsx)("span", {
                                                                        children: "Phần thưởng"
                                                                    })
                                                                })]
                                                            })
                                                        }), (0, s.jsx)("tbody", {
                                                            className: "divide-y divide-gray-200 dark:divide-gray-800",
                                                            children: w ? (0, s.jsx)("tr", {
                                                                children: (0, s.jsx)("td", {
                                                                    colSpan: 3,
                                                                    className: "px-4 py-4",
                                                                    children: (0, s.jsxs)("div", {
                                                                        className: "flex justify-center items-center",
                                                                        children: [(0, s.jsx)("span", {
                                                                            className: "icon-[bx--loader-alt] w-6 h-6 text-primary-500 dark:text-primary-400 animate-spin mr-2"
                                                                        }), (0, s.jsx)("p", {
                                                                            className: "break-words text-sm text-gray-500 dark:text-gray-400 font-semibold",
                                                                            children: "Đang tải..."
                                                                        })]
                                                                    })
                                                                })
                                                            }) : j ? (0, s.jsx)("tr", {
                                                                children: (0, s.jsx)("td", {
                                                                    colSpan: 3,
                                                                    className: "px-4 py-4",
                                                                    children: (0, s.jsxs)("div", {
                                                                        className: "flex justify-center items-center",
                                                                        children: [(0, s.jsx)("span", {
                                                                            className: "icon-[bx--error] w-6 h-6 text-red-500 dark:text-red-400 mr-2"
                                                                        }), (0, s.jsx)("p", {
                                                                            className: "break-words text-sm text-red-500 dark:text-red-400 font-semibold",
                                                                            children: "C\xf3 lỗi xảy ra"
                                                                        })]
                                                                    })
                                                                })
                                                            }) : 0 === h.length ? (0, s.jsx)("tr", {
                                                                className: "text-gray-500 dark:text-gray-400",
                                                                children: (0, s.jsx)("td", {
                                                                    colSpan: 3,
                                                                    className: "px-4 py-4 text-sm text-center",
                                                                    children: "Chưa c\xf3 dữ liệu"
                                                                })
                                                            }) : h.map((e, r) => (0, s.jsxs)("tr", {
                                                                children: [(0, s.jsxs)("td", {
                                                                    className: "whitespace-nowrap px-3 py-4 text-gray-500 dark:text-gray-400 text-sm",
                                                                    children: [0 === e.server_id && (0, s.jsx)("p", {
                                                                        className: "break-words font-semibold uppercase",
                                                                        children: "Tất Cả"
                                                                    }), 1 === e.server_id && (0, s.jsx)("p", {
                                                                        className: "break-words font-semibold uppercase",
                                                                        children: "Server 1"
                                                                    }), 2 === e.server_id && (0, s.jsx)("p", {
                                                                        className: "break-words font-semibold uppercase",
                                                                        children: "Server 2"
                                                                    })]
                                                                }), (0, s.jsx)("td", {
                                                                    className: "whitespace-nowrap px-3 py-4 text-gray-500 dark:text-gray-400 text-sm",
                                                                    children: (0, s.jsx)("p", {
                                                                        className: "break-words font-semibold uppercase",
                                                                        children: e.code
                                                                    })
                                                                }), m[r] && m[r].length > 0 ? (0, s.jsx)("td", {
                                                                    className: "whitespace-nowrap px-3 py-4 text-gray-500 dark:text-gray-400 text-sm",
                                                                    children: (0, s.jsx)("div", {
                                                                        className: "flex items-center flex-wrap gap-2 sm:min-w-[auto] min-w-[250px]",
                                                                        children: m[r].map((r, n) => (0, s.jsxs)(a.Fragment, {
                                                                            children: [0 === n && void 0 !== e.yen && 0 !== e.yen && (0, s.jsxs)("div", {
                                                                                onClick: e => {
                                                                                    t(!0), u(e)
                                                                                },
                                                                                className: "relative select-none transition-all rounded-xl p-1 hover:ring-primary-500 dark:hover:ring-primary-400 cursor-pointer",
                                                                                style: {
                                                                                    maxHeight: "50px",
                                                                                    maxWidth: "36px"
                                                                                },
                                                                                children: [(0, s.jsx)("img", {
                                                                                    alt: e.yen ? "Y\xean" : "",
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
                                                                                }), (0, s.jsx)("div", {
                                                                                    className: "flex items-center absolute bottom-1 right-1 rounded-md px-[5px] bg-gray-600 dark:bg-gray-700 cursor-pointer",
                                                                                    children: (0, s.jsxs)("p", {
                                                                                        ref: i,
                                                                                        className: "break-words font-bold text-center",
                                                                                        style: {
                                                                                            color: "rgb(255, 255, 255)",
                                                                                            fontSize: "10px"
                                                                                        },
                                                                                        children: ["x", f(e.yen)]
                                                                                    })
                                                                                })]
                                                                            }), 0 === n && void 0 !== e.coin && 0 !== e.coin && (0, s.jsxs)("div", {
                                                                                onClick: e => {
                                                                                    t(!0), u(e)
                                                                                },
                                                                                className: "relative select-none transition-all rounded-xl p-1 cursor-pointer rounded-xl",
                                                                                style: {
                                                                                    maxHeight: "50px",
                                                                                    maxWidth: "50px"
                                                                                },
                                                                                children: [(0, s.jsx)("img", {
                                                                                    alt: e.coin ? "Xu" : "",
                                                                                    loading: "lazy",
                                                                                    width: "110",
                                                                                    height: "110",
                                                                                    decoding: "async",
                                                                                    "data-nimg": "1",
                                                                                    className: "object-cover select-none",
                                                                                    src: "/images/items/xu.png",
                                                                                    style: {
                                                                                        color: "transparent"
                                                                                    }
                                                                                }), (0, s.jsx)("div", {
                                                                                    className: "flex items-center absolute bottom-1 right-1 rounded-md px-[5px] bg-gray-600 dark:bg-gray-700 cursor-pointer",
                                                                                    children: (0, s.jsxs)("p", {
                                                                                        ref: i,
                                                                                        className: "break-words font-bold text-center",
                                                                                        style: {
                                                                                            color: "rgb(255, 255, 255)",
                                                                                            fontSize: "10px"
                                                                                        },
                                                                                        children: ["x", f(e.coin)]
                                                                                    })
                                                                                })]
                                                                            }), 0 === n && void 0 !== e.gold && 0 !== e.gold && (0, s.jsxs)("div", {
                                                                                onClick: e => {
                                                                                    t(!0), u(e)
                                                                                },
                                                                                className: "relative select-none transition-all rounded-xl p-1 cursor-pointer rounded-xl",
                                                                                style: {
                                                                                    maxHeight: "55px",
                                                                                    maxWidth: "65px"
                                                                                },
                                                                                children: [(0, s.jsx)("img", {
                                                                                    alt: e.gold ? "Lượng" : "",
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
                                                                                }), (0, s.jsx)("div", {
                                                                                    className: "flex items-center absolute bottom-1 right-1 rounded-md px-[5px] bg-gray-600 dark:bg-gray-700 cursor-pointer",
                                                                                    children: (0, s.jsxs)("p", {
                                                                                        ref: i,
                                                                                        className: "break-words font-bold text-center",
                                                                                        style: {
                                                                                            color: "rgb(255, 255, 255)",
                                                                                            fontSize: "10px"
                                                                                        },
                                                                                        children: ["x", f(e.gold)]
                                                                                    })
                                                                                })]
                                                                            }), (0, s.jsxs)("div", {
                                                                                onClick: e => {
                                                                                    t(!0), u(e)
                                                                                },
                                                                                className: "relative inline-block hover:ring-primary-500 dark:hover:ring-primary-400 cursor-pointer rounded-xl",
                                                                                children: [(0, s.jsx)("div", {
                                                                                    className: "relative select-none transition-all rounded-xl p-1",
                                                                                    style: {
                                                                                        maxHeight: "55px",
                                                                                        maxWidth: "55px"
                                                                                    },
                                                                                    children: (0, s.jsx)("img", {
                                                                                        alt: r.name,
                                                                                        loading: "lazy",
                                                                                        width: "110",
                                                                                        height: "110",
                                                                                        decoding: "async",
                                                                                        "data-nimg": "1",
                                                                                        className: "object-cover select-none",
                                                                                        src: "/images/items/".concat(r.id, ".webp"),
                                                                                        style: {
                                                                                            color: "transparent",
                                                                                            maxHeight: "50px"
                                                                                        }
                                                                                    })
                                                                                }), (0, s.jsx)("div", {
                                                                                    className: "flex items-center absolute bottom-1 right-1 rounded-md px-[5px] bg-gray-600 dark:bg-gray-700 cursor-pointer",
                                                                                    children: (0, s.jsxs)("p", {
                                                                                        ref: i,
                                                                                        className: "break-words font-bold text-center",
                                                                                        style: {
                                                                                            color: "rgb(255, 255, 255)",
                                                                                            fontSize: "10px"
                                                                                        },
                                                                                        children: ["x", f(r.quantity)]
                                                                                    })
                                                                                })]
                                                                            }, n)]
                                                                        }, n))
                                                                    })
                                                                }) : (0, s.jsx)("td", {
                                                                    className: "whitespace-nowrap px-3 py-4 text-gray-500 dark:text-gray-400 text-sm",
                                                                    children: (0, s.jsx)("p", {
                                                                        className: "break-words font-semibold uppercase",
                                                                        children: "Trống"
                                                                    })
                                                                })]
                                                            }, r))
                                                        })]
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "fixed inset-0 flex z-50 ".concat(e ? "showhiden ease-in-out duration-300" : "hiden ease-in duration-300"),
                        children: [(0, s.jsx)("div", {
                            className: "fixed inset-0 transition-opacity bg-white/25 dark:bg-black/50 backdrop-blur"
                        }), (0, s.jsx)("div", {
                            className: "fixed inset-0 overflow-y-auto",
                            children: (0, s.jsx)("div", {
                                className: "flex min-h-full sm:items-center justify-center text-center items-center p-4 sm:p-0 ".concat(e ? "showhidenn ease-in-out duration-300" : "hidenn ease-in duration-300"),
                                children: (0, s.jsx)("div", {
                                    ref: r,
                                    className: "relative text-left rtl:text-right flex flex-col overflow-visible bg-white dark:bg-gray-900 shadow-xl w-full rounded-lg sm:my-8 max-w-[220px] sm:max-w-[220px]",
                                    children: (0, s.jsxs)("div", {
                                        className: "p-4 sm:p-4",
                                        children: [(0, s.jsx)("div", {
                                            className: "relative select-none transition-all rounded-xl mx-auto",
                                            style: {
                                                maxWidth: "50px",
                                                maxHeight: "80px"
                                            },
                                            children: (0, s.jsx)("img", {
                                                alt: "image",
                                                loading: "lazy",
                                                width: "100%",
                                                height: "auto",
                                                decoding: "async",
                                                "data-nimg": "1",
                                                className: "object-cover select-none",
                                                src: n ? n.imageSrc : "",
                                                style: {
                                                    color: "transparent",
                                                    maxHeight: "80px",
                                                    maxWidth: "80px"
                                                }
                                            })
                                        }), (0, s.jsxs)("div", {
                                            className: "flex flex-col items-center mt-4",
                                            children: [(0, s.jsx)("p", {
                                                className: "break-words text-gray-500 dark:text-gray-400 font-bold text-center leading-5",
                                                children: n ? n.name : ""
                                            }), (0, s.jsxs)("span", {
                                                className: "inline-flex items-center rounded-md text-sm py-1 bg-primary-500 dark:bg-primary-400 text-white dark:text-gray-900 mt-4 px-3 font-semibold",
                                                children: ["x ", n ? function(e) {
                                                    let t = e.charAt(e.length - 1),
                                                        r = e.replace(/[^\d.]/g, ""),
                                                        s = 1;
                                                    return "k" === t ? s = 1e3 : "m" === t ? s = 1e6 : "b" === t && (s = 1e9), (parseFloat(r) * s).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                                                }(n.quantity) : ""]
                                            })]
                                        })]
                                    })
                                })
                            })
                        })]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [8472, 4728, 7478, 7023, 1744], function() {
            return e(e.s = 6756)
        }), _N_E = e.O()
    }
]);