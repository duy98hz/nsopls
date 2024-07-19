(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1931], {
        1724: function(e, s, t) {
            Promise.resolve().then(t.t.bind(t, 231, 23)), Promise.resolve().then(t.bind(t, 7126)), Promise.resolve().then(t.bind(t, 4369))
        },
        4369: function(e, s, t) {
            "use strict";
            t.d(s, {
                default: function() {
                    return x
                }
            });
            var i = t(7437),
                l = t(2265),
                n = t(7138),
                r = t(3153);
            t(9051), t(5291);
            var a = t(6648),
                d = t(4744),
                o = t(8504);

            function c() {
                let [e, s] = (0, l.useState)(!1), [t, n] = (0, l.useState)(!0), r = (0, l.useRef)(null), a = () => {
                    s(!1)
                }, d = e => {
                    r.current && !r.current.contains(e.target) && e instanceof MouseEvent && 0 === e.button && a(), e instanceof KeyboardEvent && "Escape" === e.key && a()
                };
                return (0, l.useEffect)(() => (e ? (document.addEventListener("mousedown", d), document.addEventListener("keydown", d)) : (document.removeEventListener("mousedown", d), document.removeEventListener("keydown", d)), () => {
                    document.removeEventListener("mousedown", d), document.removeEventListener("keydown", d)
                }), [e]), (0, i.jsx)(i.Fragment, {
                    children: t && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)("div", {
                            onClick: () => {
                                s(!0)
                            },
                            className: "flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800 cursor-pointer",
                            children: [(0, i.jsx)("span", {
                                className: "flex-shrink-0 inline w-4 h-4 me-3 icon-[bx--check]"
                            }), (0, i.jsxs)("div", {
                                children: [(0, i.jsx)("span", {
                                    className: "font-semibold",
                                    children: "Lưu \xfd!"
                                }), " T\xe0i khoản chưa c\xf3 số điện thoại,", (0, i.jsx)("span", {
                                    className: "font-medium",
                                    children: "th\xeam ngay"
                                }), " để bảo mật t\xe0i khoản của bạn"]
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "fixed inset-0 flex z-50 ".concat(e ? "showhiden ease-in-out duration-300" : "hiden ease-in duration-300"),
                            children: [(0, i.jsx)("div", {
                                className: "fixed inset-0 transition-opacity bg-white/25 dark:bg-black/50 backdrop-blur"
                            }), (0, i.jsx)("div", {
                                className: "fixed inset-0 overflow-y-auto",
                                children: (0, i.jsx)("div", {
                                    className: "flex min-h-full sm:items-center justify-center text-center items-center p-4 sm:p-0 ".concat(e ? "showhidenn ease-in-out duration-300" : "hidenn ease-in duration-300"),
                                    children: (0, i.jsx)("div", {
                                        ref: r,
                                        className: "relative text-left rtl:text-right flex flex-col overflow-visible bg-white dark:bg-gray-900 shadow-xl w-full rounded-lg sm:my-8 sm:max-w-lg",
                                        children: (0, i.jsx)(o.Z, {
                                            closeModal: a
                                        })
                                    })
                                })
                            })]
                        })]
                    })
                })
            }
            var m = t(7661);

            function x() {
                let e = (0, l.useRef)(null),
                    {
                        activated: s,
                        checkLoginStatus: t,
                        phone: o
                    } = (0, m.a)();
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("div", {
                        className: "relative mb-7",
                        children: [(0, i.jsxs)("div", {
                            className: "flex justify-between items-center capitalize mb-4",
                            children: [(0, i.jsxs)("div", {
                                children: [(0, i.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [(0, i.jsx)("span", {
                                        className: "icon-[bxs--circle] w-4 h-4 text-primary-500 dark:text-primary-400 md:mr-4 mr-2"
                                    }), (0, i.jsx)("p", {
                                        className: "md:text-2xl text-xl font-bold text-gray-700 dark:text-gray-300",
                                        children: "Nso Sky"
                                    })]
                                }), (0, i.jsx)("p", {
                                    className: "break-words text-gray-500 dark:text-gray-400 md:text-lg text-sm md:mt-1",
                                    children: "Ninja School Online"
                                })]
                            }), (0, i.jsx)("div", {
                                className: "flex items-center ml-4",
                                children: (0, i.jsxs)(n.default, {
                                    href: "/download",
                                    className: "transition duration-200 hover:bg-primary-700 focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm px-2.5 py-1.5 shadow-sm text-white dark:text-gray-900 bg-primary-500 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 inline-flex items-center",
                                    children: [(0, i.jsx)("span", {
                                        className: "icon-[bx--play] flex-shrink-0 h-5 w-5",
                                        "aria-hidden": "true"
                                    }), "Tải Game"]
                                })
                            })]
                        }), t && 0 === s && (0, i.jsx)(d.Z, {}), t && (!o || "" === o || null === o) && (0, i.jsx)(c, {}), (0, i.jsx)("div", {
                            className: "w-full max-w-5xl mx-auto text-center",
                            children: (0, i.jsx)("div", {
                                className: "carousel-root relative select-none transition-all overflow-hidden rounded-xl shadow-md hover:shadow-lg",
                                children: (0, i.jsxs)("div", {
                                    className: "carousel carousel-slider",
                                    children: [(0, i.jsx)("button", {
                                        className: "absolute top-1/2 left-0 z-10 p-1 -translate-y-1/2 text-white hover:backdrop-blur-xl hover:rounded-xl",
                                        onClick: () => {
                                            var s;
                                            null === (s = e.current) || void 0 === s || s.slickPrev()
                                        },
                                        children: (0, i.jsx)("span", {
                                            className: "icon-[bx--chevron-left] text-3xl lg:text-4xl mt-1"
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "slider-wrapper axis-horizontal",
                                        children: (0, i.jsxs)(r.Z, {
                                            dots: !1,
                                            infinite: !0,
                                            speed: 500,
                                            slidesToShow: 1,
                                            slidesToScroll: 1,
                                            autoplay: !0,
                                            autoplaySpeed: 3e3,
                                            pauseOnHover: !1,
                                            ref: e,
                                            children: [(0, i.jsx)("div", {
                                                className: "slick-slide slick-active slick-current",
                                                children: (0, i.jsx)(a.default, {
                                                    className: "object-cover w-full h-full select-none",
                                                    alt: "Banner 4",
                                                    src: "/images/slideshow/1.webp",
                                                    width: 1024,
                                                    height: 598
                                                })
                                            }), (0, i.jsx)("div", {
                                                className: "slick-slide slick-active slick-current",
                                                children: (0, i.jsx)(a.default, {
                                                    className: "object-cover w-full h-full select-none",
                                                    alt: "Banner 4",
                                                    src: "/images/slideshow/1.webp",
                                                    width: 1024,
                                                    height: 598
                                                })
                                            }), (0, i.jsx)("div", {
                                                className: "slick-slide slick-active slick-current",
                                                children: (0, i.jsx)(a.default, {
                                                    className: "object-cover w-full h-full select-none",
                                                    alt: "Banner 4",
                                                    src: "/images/slideshow/1.webp",
                                                    width: 1024,
                                                    height: 598
                                                })
                                            })]
                                        })
                                    }), (0, i.jsx)("button", {
                                        className: "absolute top-1/2 right-0 z-10 p-1 -translate-y-1/2 text-white hover:backdrop-blur-xl hover:rounded-xl rounded-xl transition ",
                                        onClick: () => {
                                            var s;
                                            null === (s = e.current) || void 0 === s || s.slickNext()
                                        },
                                        children: (0, i.jsx)("span", {
                                            className: "icon-[bx--chevron-right] text-3xl lg:text-4xl mt-1"
                                        })
                                    })]
                                })
                            })
                        })]
                    })
                })
            }
        }
    },
    function(e) {
        e.O(0, [1141, 8172, 8472, 4728, 231, 4974, 441, 1757, 9242, 7126, 7478, 7023, 1744], function() {
            return e(e.s = 1724)
        }), _N_E = e.O()
    }
]);