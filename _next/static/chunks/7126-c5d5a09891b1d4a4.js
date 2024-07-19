"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7126], {
        7126: function(e, r, a) {
            a.d(r, {
                default: function() {
                    return y
                }
            });
            var s = a(7437),
                i = a(7661),
                t = a(8472),
                n = a(6648),
                d = a(7138),
                l = a(2265),
                c = a(9555),
                o = a(3831),
                m = a(5955),
                g = a.n(m),
                x = a(6393);
            a(3436);
            var p = a(3984);
            let h = e => {
                switch (e) {
                    case 1:
                        return {
                            label: "Sự kiện",
                            className: "bg-pink-500 dark:bg-pink-400"
                        };
                    case 2:
                        return {
                            label: "T\xednh năng",
                            className: "bg-primary-500 dark:bg-primary-400"
                        };
                    case 3:
                        return {
                            label: "Hướng dẫn",
                            className: "bg-amber-500 dark:bg-amber-400"
                        };
                    default:
                        return {
                            label: "HOT",
                            className: "bg-red-500 dark:bg-red-400"
                        }
                }
            };

            function y() {
                let {
                    decryptData: e,
                    VietNameTime: r
                } = (0, i.a)(), [a, m] = (0, l.useState)(1), y = async () => {
                    try {
                        let {
                            data: r
                        } = await t.Z.post("".concat(p.Z, "/api/categories/post")), {
                            ct: a,
                            iv: s
                        } = r, i = e(a, s);
                        return JSON.parse(i)
                    } catch (e) {
                        throw Error("Error fetching posts")
                    }
                }, {
                    data: b,
                    error: u,
                    isLoading: k,
                    refetch: v
                } = (0, c.useQuery)("posts", y);
                (0, l.useEffect)(() => {
                    v()
                }, []);
                let j = e => {
                        let a = new Date(e),
                            s = (0, o.j)(r, a);
                        return "".concat(s, " ng\xe0y trước")
                    },
                    f = {
                        lower: !0,
                        locale: "vi"
                    },
                    w = b ? Math.ceil(b.length / 6) : 1;
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)("div", {
                        children: (0, s.jsx)("div", {
                            className: "grid grid-cols-12 gap-4",
                            children: k ? [...Array(6)].map((e, r) => (0, s.jsx)("div", {
                                className: "xl:col-span-4 md:col-span-6 col-span-12",
                                children: (0, s.jsxs)("div", {
                                    className: "relative transition-all overflow-hidden rounded-xl ring-gray-200 dark:ring-gray-800 dark:ring-1 ring-0 hover:ring-2 dark:hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 shadow-md hover:shadow-lg bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800",
                                    children: [(0, s.jsx)("div", {
                                        className: "p-0 sm:p-0",
                                        children: (0, s.jsx)("div", {
                                            className: "relative select-none",
                                            style: {
                                                aspectRatio: 16 / 9
                                            },
                                            children: (0, s.jsx)(x.Z, {
                                                height: 200
                                            })
                                        })
                                    }), (0, s.jsxs)("div", {
                                        className: "px-4 py-5 sm:p-6",
                                        children: [(0, s.jsx)("p", {
                                            className: "break-words text-primary-500 dark:text-primary-400 font-bold truncate-2 mb-2",
                                            children: (0, s.jsx)(x.Z, {})
                                        }), (0, s.jsx)("p", {
                                            className: "break-words text-gray-500 dark:text-gray-400 line-clamp-2 truncate-2",
                                            children: (0, s.jsx)(x.Z, {})
                                        })]
                                    }), (0, s.jsx)("div", {
                                        className: "px-4 py-4 sm:px-6 pt-0 sm:pt-0",
                                        children: (0, s.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [(0, s.jsx)("p", {
                                                className: "break-words text-gray-500 dark:text-gray-400 font-semibold md:text-sm text-xs mr-auto",
                                                children: (0, s.jsx)(x.Z, {})
                                            }), (0, s.jsx)("span", {
                                                className: "inline-flex items-center font-medium rounded-md text-xs px-2 py-1 text-white dark:text-gray-900",
                                                children: (0, s.jsx)(x.Z, {})
                                            })]
                                        })
                                    })]
                                })
                            }, r)) : u ? [...Array(6)].map((e, r) => (0, s.jsx)("div", {
                                className: "xl:col-span-4 md:col-span-6 col-span-12",
                                children: (0, s.jsxs)("div", {
                                    className: "relative transition-all overflow-hidden rounded-xl ring-gray-200 dark:ring-gray-800 dark:ring-1 ring-0 hover:ring-2 dark:hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 shadow-md hover:shadow-lg bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800",
                                    children: [(0, s.jsx)("div", {
                                        className: "p-0 sm:p-0",
                                        children: (0, s.jsx)("div", {
                                            className: "relative select-none",
                                            style: {
                                                aspectRatio: 16 / 9
                                            },
                                            children: (0, s.jsx)(x.Z, {
                                                height: 200
                                            })
                                        })
                                    }), (0, s.jsxs)("div", {
                                        className: "px-4 py-5 sm:p-6",
                                        children: [(0, s.jsx)("p", {
                                            className: "break-words text-primary-500 dark:text-primary-400 font-bold truncate-2 mb-2",
                                            children: "Lỗi Dữ Liệu"
                                        }), (0, s.jsx)("p", {
                                            className: "break-words text-gray-500 dark:text-gray-400 line-clamp-2 truncate-2",
                                            children: (0, s.jsx)(x.Z, {})
                                        })]
                                    }), (0, s.jsx)("div", {
                                        className: "px-4 py-4 sm:px-6 pt-0 sm:pt-0",
                                        children: (0, s.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [(0, s.jsx)("p", {
                                                className: "break-words text-gray-500 dark:text-gray-400 font-semibold md:text-sm text-xs mr-auto",
                                                children: (0, s.jsx)(x.Z, {})
                                            }), (0, s.jsx)("span", {
                                                className: "inline-flex items-center font-medium rounded-md text-xs px-2 py-1 text-white dark:text-gray-900",
                                                children: (0, s.jsx)(x.Z, {})
                                            })]
                                        })
                                    })]
                                })
                            }, r)) : b ? (0, s.jsx)(s.Fragment, {
                                children: b.slice((a - 1) * 6, 6 * a).map(e => (0, s.jsx)(d.default, {
                                    className: "xl:col-span-4 md:col-span-6 col-span-12",
                                    href: "/tin-tuc/".concat(g()(e.title || "", f)),
                                    children: (0, s.jsxs)("div", {
                                        className: "relative transition-all overflow-hidden rounded-xl ring-gray-200 dark:ring-gray-800 dark:ring-1 ring-0 hover:ring-2 dark:hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 shadow-md hover:shadow-lg bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800",
                                        children: [(0, s.jsx)("div", {
                                            className: "p-0 sm:p-0",
                                            children: (0, s.jsx)("div", {
                                                className: "relative select-none",
                                                style: {
                                                    aspectRatio: 16 / 9
                                                },
                                                children: (0, s.jsx)(n.default, {
                                                    alt: "tin tức",
                                                    src: "/images/tin.webp",
                                                    width: 2048,
                                                    height: 2048
                                                })
                                            })
                                        }), (0, s.jsxs)("div", {
                                            className: "px-4 py-5 sm:p-6",
                                            children: [(0, s.jsx)("p", {
                                                className: "break-words text-primary-500 dark:text-primary-400 font-bold truncate-2 mb-2",
                                                children: e.title
                                            }), (0, s.jsx)("p", {
                                                className: "break-words text-gray-500 dark:text-gray-400 line-clamp-2 truncate-2",
                                                children: e.sub_title
                                            })]
                                        }), (0, s.jsx)("div", {
                                            className: "px-4 py-4 sm:px-6 pt-0 sm:pt-0",
                                            children: (0, s.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [(0, s.jsx)("span", {
                                                    className: "icon-[bxs--pin] w-4 h-4 text-primary-500 dark:text-primary-400 mr-2"
                                                }), (0, s.jsx)("p", {
                                                    className: "break-words text-gray-500 dark:text-gray-400 font-semibold md:text-sm text-xs mr-auto",
                                                    children: j(e.created_at)
                                                }), (0, s.jsx)("span", {
                                                    className: "inline-flex items-center font-medium rounded-md text-xs px-2 py-1 text-white dark:text-gray-900 ".concat(h(e.published).className),
                                                    children: h(e.published).label
                                                })]
                                            })
                                        })]
                                    })
                                }, e.id))
                            }) : [...Array(6)].map((e, r) => (0, s.jsx)("div", {
                                className: "xl:col-span-4 md:col-span-6 col-span-12",
                                children: (0, s.jsxs)("div", {
                                    className: "relative transition-all overflow-hidden rounded-xl ring-gray-200 dark:ring-gray-800 dark:ring-1 ring-0 hover:ring-2 dark:hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 shadow-md hover:shadow-lg bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800",
                                    children: [(0, s.jsx)("div", {
                                        className: "p-0 sm:p-0",
                                        children: (0, s.jsx)("div", {
                                            className: "relative select-none",
                                            style: {
                                                aspectRatio: 16 / 9
                                            },
                                            children: (0, s.jsx)(x.Z, {
                                                height: 200
                                            })
                                        })
                                    }), (0, s.jsxs)("div", {
                                        className: "px-4 py-5 sm:p-6",
                                        children: [(0, s.jsx)("p", {
                                            className: "break-words text-primary-500 dark:text-primary-400 font-bold truncate-2 mb-2",
                                            children: "Dữ Liệu Trống"
                                        }), (0, s.jsx)("p", {
                                            className: "break-words text-gray-500 dark:text-gray-400 line-clamp-2 truncate-2",
                                            children: (0, s.jsx)(x.Z, {})
                                        })]
                                    }), (0, s.jsx)("div", {
                                        className: "px-4 py-4 sm:px-6 pt-0 sm:pt-0",
                                        children: (0, s.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [(0, s.jsx)("p", {
                                                className: "break-words text-gray-500 dark:text-gray-400 font-semibold md:text-sm text-xs mr-auto",
                                                children: (0, s.jsx)(x.Z, {})
                                            }), (0, s.jsx)("span", {
                                                className: "inline-flex items-center font-medium rounded-md text-xs px-2 py-1 text-white dark:text-gray-900",
                                                children: (0, s.jsx)(x.Z, {})
                                            })]
                                        })
                                    })]
                                })
                            }, r))
                        })
                    }), b && b.length > 6 && (0, s.jsx)("div", {
                        className: "p-2 sm:p-2",
                        children: (0, s.jsx)("div", {
                            className: "flex justify-between items-center",
                            children: (0, s.jsxs)("div", {
                                className: "-space-x-px flex items-center gap-1 ml-auto",
                                children: [(0, s.jsx)("button", {
                                    onClick: () => {
                                        a > 1 && m(a - 1)
                                    },
                                    type: "button",
                                    className: "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center first:rounded-s-md last:rounded-e-md !rounded-full min-w-[32px] justify-center rtl:[&_span:last-child]:rotate-180",
                                    children: (0, s.jsx)("span", {
                                        className: "icon-[bx--chevron-left] flex-shrink-0 h-5 w-5"
                                    })
                                }), [...Array(Math.ceil(b.length / 6))].map((e, r) => (0, s.jsx)("button", {
                                    onClick: () => m(r + 1),
                                    className: "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium text-sm gap-x-1.5 p-1.5 shadow-sm ".concat(a === r + 1 ? "ring-0 text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400" : "ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400", " inline-flex items-center first:rounded-s-md last:rounded-e-md !rounded-full min-w-[32px] justify-center rtl:[&_span:last-child]:rotate-180"),
                                    children: (0, s.jsx)("span", {
                                        children: r + 1
                                    })
                                }, r)), (0, s.jsx)("button", {
                                    onClick: () => {
                                        a < w && m(a + 1)
                                    },
                                    type: "button",
                                    className: "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center first:rounded-s-md last:rounded-e-md !rounded-full min-w-[32px] justify-center rtl:[&_span:last-child]:rotate-180",
                                    "aria-label": "pagination.next",
                                    children: (0, s.jsx)("span", {
                                        className: "icon-[bx--chevron-right] flex-shrink-0 h-5 w-5"
                                    })
                                })]
                            })
                        })
                    })]
                })
            }
        }
    }
]);