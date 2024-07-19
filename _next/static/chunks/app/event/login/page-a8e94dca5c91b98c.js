(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7702], {
        2480: function() {},
        8294: function(e, t, a) {
            Promise.resolve().then(a.bind(a, 7870))
        },
        3984: function(e, t) {
            "use strict";
            t.Z = "https://api.nsoace2.com"
        },
        7870: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return S
                }
            });
            var r = a(7437),
                n = a(2265),
                i = a(7661),
                s = a(8472),
                l = a(8110),
                o = a.n(l),
                c = a(3984);
            let d = async () => {
                try {
                    var e, t;
                    let a = await s.Z.post("".concat(c.Z, "/api/event/giftsLogin"), {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }),
                        r = await a.data,
                        n = (e = r.ct, t = r.iv, o().AES.decrypt(e, t).toString(o().enc.Utf8).replace(/^"(.*)"$/, "$1"));
                    return JSON.parse(n)
                } catch (e) {
                    return
                }
            };
            var u = a(7283);

            function m(e, t) {
                var a;
                let r, n;
                let i = null !== (a = null == t ? void 0 : t.additionalDigits) && void 0 !== a ? a : 2,
                    s = function(e) {
                        let t;
                        let a = {},
                            r = e.split(g.dateTimeDelimiter);
                        if (r.length > 2) return a;
                        if (/:/.test(r[0]) ? t = r[0] : (a.date = r[0], t = r[1], g.timeZoneDelimiter.test(a.date) && (a.date = e.split(g.timeZoneDelimiter)[0], t = e.substr(a.date.length, e.length))), t) {
                            let e = g.timezone.exec(t);
                            e ? (a.time = t.replace(e[1], ""), a.timezone = e[1]) : a.time = t
                        }
                        return a
                    }(e);
                if (s.date) {
                    let e = function(e, t) {
                        let a = RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"),
                            r = e.match(a);
                        if (!r) return {
                            year: NaN,
                            restDateString: ""
                        };
                        let n = r[1] ? parseInt(r[1]) : null,
                            i = r[2] ? parseInt(r[2]) : null;
                        return {
                            year: null === i ? n : 100 * i,
                            restDateString: e.slice((r[1] || r[2]).length)
                        }
                    }(s.date, i);
                    r = function(e, t) {
                        if (null === t) return new Date(NaN);
                        let a = e.match(x);
                        if (!a) return new Date(NaN);
                        let r = !!a[4],
                            n = p(a[1]),
                            i = p(a[2]) - 1,
                            s = p(a[3]),
                            l = p(a[4]),
                            o = p(a[5]) - 1;
                        if (r) return l >= 1 && l <= 53 && o >= 0 && o <= 6 ? function(e, t, a) {
                            let r = new Date(0);
                            r.setUTCFullYear(e, 0, 4);
                            let n = r.getUTCDay() || 7;
                            return r.setUTCDate(r.getUTCDate() + ((t - 1) * 7 + a + 1 - n)), r
                        }(t, l, o) : new Date(NaN); {
                            let e = new Date(0);
                            return i >= 0 && i <= 11 && s >= 1 && s <= (b[i] || (v(t) ? 29 : 28)) && n >= 1 && n <= (v(t) ? 366 : 365) ? (e.setUTCFullYear(t, i, Math.max(n, s)), e) : new Date(NaN)
                        }
                    }(e.restDateString, e.year)
                }
                if (!r || isNaN(r.getTime())) return new Date(NaN);
                let l = r.getTime(),
                    o = 0;
                if (s.time && isNaN(o = function(e) {
                        let t = e.match(h);
                        if (!t) return NaN;
                        let a = f(t[1]),
                            r = f(t[2]),
                            n = f(t[3]);
                        return (24 === a ? 0 === r && 0 === n : n >= 0 && n < 60 && r >= 0 && r < 60 && a >= 0 && a < 25) ? a * u.vh + r * u.yJ + 1e3 * n : NaN
                    }(s.time))) return new Date(NaN);
                if (s.timezone) {
                    if (isNaN(n = function(e) {
                            if ("Z" === e) return 0;
                            let t = e.match(y);
                            if (!t) return 0;
                            let a = "+" === t[1] ? -1 : 1,
                                r = parseInt(t[2]),
                                n = t[3] && parseInt(t[3]) || 0;
                            return n >= 0 && n <= 59 ? a * (r * u.vh + n * u.yJ) : NaN
                        }(s.timezone))) return new Date(NaN)
                } else {
                    let e = new Date(l + o),
                        t = new Date(0);
                    return t.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()), t.setHours(e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()), t
                }
                return new Date(l + o + n)
            }
            let g = {
                    dateTimeDelimiter: /[T ]/,
                    timeZoneDelimiter: /[Z ]/i,
                    timezone: /([Z+-].*)$/
                },
                x = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
                h = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
                y = /^([+-])(\d{2})(?::?(\d{2}))?$/;

            function p(e) {
                return e ? parseInt(e) : 1
            }

            function f(e) {
                return e && parseFloat(e.replace(",", ".")) || 0
            }
            let b = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

            function v(e) {
                return e % 400 == 0 || e % 4 == 0 && e % 100 != 0
            }
            var k = a(6469),
                N = a(9555),
                w = a(1553);
            let j = "Asia/Ho_Chi_Minh";

            function S() {
                let [e, t] = (0, n.useState)(!1), [a, l] = (0, n.useState)(!1), o = (0, n.useRef)(null), u = (0, n.useRef)(null), [g, x] = (0, n.useState)(null), {
                    online: h,
                    userId: y,
                    checkLoginStatus: p,
                    VietNameTime: f,
                    decryptData: b,
                    encryptData: v,
                    generateRandomIV: S,
                    username: C,
                    namePlayer: D
                } = (0, i.a)(), [E, T] = (0, n.useState)([]), [M, Z] = (0, n.useState)([]), [_, U] = (0, n.useState)([]), [z, H] = (0, n.useState)({}), [O, F] = (0, n.useState)(""), [W, J] = (0, n.useState)([]), [L, A] = (0, n.useState)([]), [I, K] = (0, n.useState)([]), [Y, $] = (0, n.useState)([]), [q, P] = (0, n.useState)([]), [R, V] = (0, n.useState)(0), [B, Q] = (0, n.useState)([{
                    id: "",
                    name: "",
                    quantity: 0
                }]), [G, X] = (0, n.useState)(0), [ee, et] = (0, n.useState)("Chọn Nh\xe2n Vật"), [ea, er] = (0, n.useState)(!1), [en, ei] = (0, n.useState)(""), es = (e, a) => {
                    let r = e.currentTarget,
                        n = null,
                        i = null;
                    if (n = r.querySelector(".object-cover"), i = r.querySelector(".flex .font-bold"), n && i) {
                        var s;
                        x({
                            name: n.getAttribute("alt") || "",
                            imageSrc: n.getAttribute("src") || "",
                            quantity: (null === (s = i.textContent) || void 0 === s ? void 0 : s.trim()) || ""
                        }), t(!0)
                    }
                }, el = (e, t, a, r, n) => {
                    A(e => [...e, a]), P(e => e.includes(n) ? e : [...e, n]), K(e => [...e, t]), $(e => [...e, r]), l(!0)
                };
                (0, n.useEffect)(() => {
                    document.title = "Sự Kiện Đăng Nhập - Ninja School Online"
                }, []);
                let eo = () => {
                        t(!1)
                    },
                    ec = () => {
                        et("Chọn Nh\xe2n Vật"), l(!1), A([]), P([]), K([]), $([]), ei("")
                    },
                    ed = t => {
                        let r = o.current,
                            n = u.current;
                        if (!(t instanceof MouseEvent && 0 !== t.button || t instanceof KeyboardEvent && "Escape" !== t.key)) {
                            if (e && a) {
                                if (r && !r.contains(t.target)) {
                                    eo();
                                    return
                                }
                                if (n && !n.contains(t.target)) {
                                    ec();
                                    return
                                }
                            }
                            if (e && r && !r.contains(t.target)) {
                                eo();
                                return
                            }
                            if (a && n && !n.contains(t.target)) {
                                ec();
                                return
                            }
                            "Escape" === t.key && (e && eo(), a && ec())
                        }
                    };
                (0, n.useEffect)(() => (e || a ? (document.addEventListener("mousedown", ed), document.addEventListener("keydown", ed)) : (document.removeEventListener("mousedown", ed), document.removeEventListener("keydown", ed)), () => {
                    document.removeEventListener("mousedown", ed), document.removeEventListener("keydown", ed)
                }), [e, a]);
                let {
                    data: eu,
                    isError: em,
                    isLoading: eg
                } = (0, N.useQuery)("giftcodes", d);

                function ex(e) {
                    return e >= 1e9 ? (e / 1e9).toFixed(1).replace(".0", "") + "b" : e >= 1e8 ? (e / 1e6).toFixed(0) + "m" : e >= 1e6 ? (e / 1e6).toFixed(1).replace(".0", "") + "m" : e >= 1e5 ? (e / 1e3).toFixed(0) + "k" : e >= 1e4 ? (e / 1e3).toFixed(1).replace(".0", "") + "k" : e.toString()
                }(0, n.useEffect)(() => {
                    if (eu) {
                        let e = eu.map(e => e),
                            t = eu.map(e => e.day),
                            a = eu.map(e => e.gift_name);
                        T(t), Z(a), U(e)
                    }
                }, [eu]), (0, n.useEffect)(() => {
                    p && (async () => {
                        try {
                            let e = (0, w.WU)(f, "yyyy-MM-dd HH:mm:ss", {
                                    timeZone: j
                                }),
                                t = S(),
                                a = v(y, t),
                                r = v(e, t),
                                {
                                    ct: n,
                                    iv: i
                                } = (await s.Z.post("".concat(c.Z, "/api/event/login"), {
                                    ct: a,
                                    iv: t,
                                    s: r
                                })).data;
                            if (n && i) {
                                let e = b(n, i),
                                    t = JSON.parse(e);
                                Object.keys(t.attendanceData).forEach(e => {
                                    let a = t.attendanceData[e],
                                        r = JSON.parse(a.day);
                                    J(e => e.concat(r))
                                })
                            }
                        } catch (e) {}
                    })()
                }, [h, y, f, J]), (0, n.useEffect)(() => {
                    eh()
                }, [y]);
                let eh = async () => {
                        if (p) try {
                            let e = f.getFullYear(),
                                t = f.getMonth() + 1,
                                a = S(),
                                r = v(y, a),
                                n = v({
                                    Year: e,
                                    Month: t
                                }, a),
                                i = await s.Z.get("".concat(c.Z, "/api/event/claim"), {
                                    params: {
                                        ct: r,
                                        s: n,
                                        iv: a
                                    }
                                });
                            if (200 !== i.status) throw Error("Network response was not ok");
                            let l = i.data,
                                o = b(l.ct, l.iv),
                                d = JSON.parse(o),
                                u = ey(d);
                            for (let e in d) {
                                let {
                                    timestamp: t
                                } = d[e], a = m(t), r = (0, k.WU)(a, "yyyy-MM-dd HH:mm:ss");
                                F(r)
                            }
                            H(u)
                        } catch (e) {}
                    },
                    ey = e => {
                        let t = {};
                        for (let a in e) {
                            let r = (0, k.WU)(new Date(a), "yyyy-MM-dd");
                            t[r] = {
                                date: r,
                                status: e[a]
                            }
                        }
                        return t
                    },
                    ep = async (e, t, a) => {
                        if (p) try {
                            let r = f.getFullYear(),
                                n = f.getMonth(),
                                i = (0, k.WU)(new Date(r, n, e), "yyyy-MM-dd"),
                                l = (0, w.WU)(f, "yyyy-MM-dd HH:mm:ss", {
                                    timeZone: j
                                }),
                                o = S(),
                                d = v(JSON.stringify({
                                    userId: y,
                                    luong: a,
                                    yen: "0",
                                    giftName: t,
                                    status: "present",
                                    events: "login"
                                }), o),
                                u = v(JSON.stringify({
                                    Date: i,
                                    Timestamp: l,
                                    key: o
                                }), o),
                                g = await s.Z.post("".concat(c.Z, "/api/event/claim"), {
                                    ct: d,
                                    s: u,
                                    iv: o
                                });
                            if (200 === g.status) {
                                let e = g.data,
                                    t = b(e.ct, e.iv),
                                    a = JSON.parse(t);
                                for (let e in a) {
                                    let {
                                        timestamp: t
                                    } = a[e], r = m(t), n = (0, k.WU)(r, "yyyy-MM-dd HH:mm:ss");
                                    F(n)
                                }
                                eh(), ec()
                            }
                        } catch (e) {}
                    },
                    ef = e => {
                        var t;
                        let a = (0, w.zW)(f, j),
                            r = a.getFullYear(),
                            n = a.getMonth() + 1;
                        return "present" === (null === (t = z[(0, k.WU)(new Date(r, n - 1, e), "yyyy-MM-dd")]) || void 0 === t ? void 0 : t.status)
                    },
                    eb = e => {
                        var t;
                        let a = (0, w.zW)(f, j),
                            r = a.getFullYear(),
                            n = a.getMonth() + 1,
                            i = null === (t = z[(0, k.WU)(new Date(r, n - 1, e), "yyyy-MM-dd")]) || void 0 === t ? void 0 : t.status;
                        if ("Điểm danh" === ev(e)) {
                            if (p) return "focus:outline-none flex-shrink-0 font-medium rounded-md text-xs gap-x-1.5 px-2.5 py-1.5 shadow-sm inline-flex items-center text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400";
                            if (!p) return "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-xs gap-x-1.5 px-2.5 py-1.5 shadow-sm inline-flex items-center focus-visible:outline-0 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
                        }
                        return i && "object" == typeof i && "present" === i ? "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-xs gap-x-1.5 px-2.5 py-1.5 shadow-sm inline-flex items-center text-gray-500 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 dark:disabled:bg-gray-600" : "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-xs gap-x-1.5 px-2.5 py-1.5 shadow-sm inline-flex items-center focus-visible:outline-0 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
                    },
                    ev = e => {
                        var t;
                        let a = (0, w.zW)(f, j),
                            r = a.getFullYear(),
                            n = a.getMonth() + 1,
                            i = null === (t = z[(0, k.WU)(new Date(r, n - 1, e), "yyyy-MM-dd")]) || void 0 === t ? void 0 : t.status,
                            s = W.map(Number);
                        return i ? "present" === i.status ? "Đ\xe3 Nhận" : "Chưa Đạt" : s.includes(e) && p ? "Điểm danh" : p ? "Chưa Đạt" : "Chưa đăng nhập"
                    },
                    ek = e => {
                        et(e), er(!1)
                    },
                    eN = () => !!D || (ei("Chưa tạo nh\xe2n vật"), !1);
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
                                        children: "Đăng nhập"
                                    })]
                                }), (0, r.jsx)("p", {
                                    className: "break-words text-gray-500 dark:text-gray-400 md:text-lg text-sm md:mt-1",
                                    children: "Đăng nhập mỗi ng\xe0y nhận qu\xe0"
                                })]
                            })
                        }), (0, r.jsx)("div", {
                            children: (0, r.jsx)("div", {
                                className: "relative min-h-[200px]",
                                children: (0, r.jsx)("div", {
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
                                                }), eg ? (0, r.jsx)("tbody", {
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
                                                }) : em ? (0, r.jsx)("tbody", {
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
                                                }) : (null == _ ? void 0 : _.length) === 0 ? (0, r.jsx)("tbody", {
                                                    children: (0, r.jsx)("tr", {
                                                        className: "text-gray-500 dark:text-gray-400",
                                                        children: (0, r.jsx)("td", {
                                                            colSpan: 3,
                                                            className: "px-4 py-4 text-sm text-center",
                                                            children: "Chưa c\xf3 dữ liệu"
                                                        })
                                                    })
                                                }) : _.map((e, a) => (0, r.jsx)("tbody", {
                                                    className: "divide-y divide-gray-200 dark:divide-gray-800",
                                                    children: (0, r.jsxs)("tr", {
                                                        children: [(0, r.jsx)("td", {
                                                            className: "whitespace-nowrap px-3 py-4 text-gray-500 dark:text-gray-400 text-sm",
                                                            children: (0, r.jsxs)("p", {
                                                                className: "break-words font-semibold",
                                                                children: ["Ng\xe0y ", e.day]
                                                            })
                                                        }), M[a] && M[a].length > 0 ? (0, r.jsx)("td", {
                                                            className: "whitespace-nowrap px-3 py-4 text-gray-500 dark:text-gray-400 text-sm",
                                                            children: (0, r.jsx)("div", {
                                                                className: "flex items-center flex-wrap gap-2 sm:min-w-[auto] min-w-[250px]",
                                                                children: M[a].map((i, s) => (0, r.jsxs)(n.Fragment, {
                                                                    children: [0 === s && void 0 !== e.luong && 0 !== e.luong && (0, r.jsx)("div", {
                                                                        onClick: e => {
                                                                            t(!0), es(e)
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
                                                                                    children: ex(e.luong)
                                                                                })
                                                                            })]
                                                                        })
                                                                    }, "luong-".concat(a, "-").concat(s)), (0, r.jsxs)("div", {
                                                                        onClick: e => {
                                                                            t(!0), es(e)
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
                                                                                children: ["x", ex(i.quantity)]
                                                                            })
                                                                        })]
                                                                    }, "item-".concat(s))]
                                                                }, "".concat(a, "-").concat(s)))
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
                                                                className: eb(e.day),
                                                                type: "button",
                                                                disabled: "Điểm danh" !== ev(e.day) && (!ef(e.day) || !p),
                                                                onClick: t => {
                                                                    V(e.day), Q(M[a]), X(e.luong), l(!0), M[a].forEach(a => {
                                                                        el(t, a.quantity, a.id, a.name, e.luong)
                                                                    })
                                                                },
                                                                children: ev(e.day)
                                                            })
                                                        })]
                                                    })
                                                }, a))]
                                            })
                                        })
                                    })
                                })
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
                                    ref: u,
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
                                                            onClick: () => eN() && er(!ea),
                                                            className: "z-10 relative w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 inline-flex items-center text-left cursor-default rounded-md text-sm gap-x-2.5 px-3.5 py-2.5 pe-11 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-1.5  dark:focus:ring-primary-400 ".concat(en ? "ring-red-500" : "focus:ring-primary-500", " "),
                                                            type: "button",
                                                            children: [(0, r.jsx)("p", {
                                                                className: "break-words truncate dark:text-gray-100 dark:bg-gray-900 ".concat(ee === "T\xe0i Khoản: ".concat(D) ? " text-gray-900 font-semibold" : ""),
                                                                children: ee
                                                            }), (0, r.jsx)("span", {
                                                                className: "absolute inset-y-0 end-0 flex items-center pointer-events-none px-3.5",
                                                                children: (0, r.jsx)("span", {
                                                                    className: "icon-[bx--chevron-down] flex-shrink-0 text-gray-400 dark:text-gray-500 text-gray-500 dark:text-gray-400 h-5 w-5"
                                                                })
                                                            })]
                                                        })
                                                    }), en && (0, r.jsx)("p", {
                                                        className: "text-red-500 text-sm mt-2",
                                                        children: en
                                                    }), (0, r.jsx)("div", {
                                                        className: "absolute z-20 w-full py-1 mt-1 menu-dropdown ".concat(ea ? "transition-opacity duration-200 ease-in-out show" : ""),
                                                        children: (0, r.jsx)("ul", {
                                                            className: "relative focus:outline-none overflow-y-auto scroll-py-1 ring-1 ring-gray-200 dark:ring-gray-700 rounded-md shadow-lg bg-white dark:bg-gray-800 p-1 max-h-60",
                                                            children: (0, r.jsxs)("li", {
                                                                onClick: () => ek("T\xe0i Khoản: ".concat(D)),
                                                                className: "cursor-default select-none relative flex items-center justify-between gap-1 rounded-md px-2 py-1.5 text-sm text-gray-900 dark:text-white hover:bg-gray-200 hover:text-gray-900 dark:hover:text-gray-100 dark:hover:bg-gray-900 hover:font-semibold ".concat(ee === "T\xe0i Khoản: ".concat(C) ? "bg-gray-200 text-gray-900 font-semibold dark:hover:text-gray-100 dark:hover:bg-gray-900 dark:text-gray-100 dark:bg-gray-900" : ""),
                                                                children: [(0, r.jsx)("div", {
                                                                    className: "flex items-center gap-2 min-w-0",
                                                                    children: (0, r.jsxs)("span", {
                                                                        className: "truncate",
                                                                        children: ["T\xe0i Khoản: ", D]
                                                                    })
                                                                }), ee === "T\xe0i Khoản: ".concat(D) && (0, r.jsx)("span", {
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
                                                            children: [q.map((e, t) => (0, r.jsxs)("div", {
                                                                onClick: e => es(e, "luongItem"),
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
                                                            }, "luong-".concat(t))), L.map((e, t) => (0, r.jsxs)("div", {
                                                                onClick: e => es(e, "IdItem"),
                                                                className: "relative inline-block hover:ring-primary-500 dark:hover:ring-primary-400 cursor-pointer rounded-xl",
                                                                children: [(0, r.jsx)("div", {
                                                                    className: "relative select-none transition-all rounded-xl p-1",
                                                                    style: {
                                                                        maxWidth: "55px",
                                                                        maxHeight: "55px"
                                                                    },
                                                                    children: (0, r.jsx)("img", {
                                                                        alt: Y[t],
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
                                                                        children: ["x", I[t]]
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
                                                onClick: () => ep(R, B, G),
                                                type: "button",
                                                disabled: "Chọn Nh\xe2n Vật" === ee,
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
                                                maxWidth: "60px",
                                                maxHeight: "60px"
                                            },
                                            children: (0, r.jsx)("img", {
                                                alt: "image",
                                                loading: "lazy",
                                                width: "240",
                                                height: "240",
                                                decoding: "async",
                                                className: "object-cover select-none",
                                                src: g ? g.imageSrc : "",
                                                style: {
                                                    color: "transparent",
                                                    maxHeight: "60px"
                                                }
                                            })
                                        }), (0, r.jsxs)("div", {
                                            className: "flex flex-col items-center mt-4",
                                            children: [(0, r.jsx)("p", {
                                                className: "break-words text-gray-500 dark:text-gray-400 font-bold text-center leading-5",
                                                children: g ? g.name : ""
                                            }), (0, r.jsxs)("span", {
                                                className: "inline-flex items-center rounded-md text-sm py-1 bg-primary-500 dark:bg-primary-400 text-white dark:text-gray-900 mt-4 px-3 font-semibold",
                                                children: ["x", " ", g ? function(e) {
                                                    let t = e.charAt(e.length - 1),
                                                        a = e.replace(/[^\d.]/g, ""),
                                                        r = 1;
                                                    return "k" === t ? r = 1e3 : "m" === t ? r = 1e6 : "b" === t && (r = 1e9), (parseFloat(a) * r).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                                                }(g.quantity) : ""]
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
                    return x
                }
            });
            var r = a(7437),
                n = a(2265),
                i = a(8110),
                s = a.n(i),
                l = a(2649),
                o = a(6463),
                c = a(8472),
                d = a(9555),
                u = a(3984);
            let m = (0, n.createContext)({
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
                } = e, [a, i] = (0, n.useState)(""), [g, x] = (0, n.useState)(""), [h, y] = (0, n.useState)(0), [p, f] = (0, n.useState)(""), [b, v] = (0, n.useState)(0), [k, N] = (0, n.useState)(""), [w, j] = (0, n.useState)(""), [S, C] = (0, n.useState)(""), [D, E] = (0, n.useState)(""), [T, M] = (0, n.useState)(!1), [Z, _] = (0, n.useState)(new Date), [U, z] = (0, n.useState)(""), [H, O] = (0, n.useState)(""), [F, W] = (0, n.useState)(""), [J, L] = (0, n.useState)(""), [A, I] = (0, n.useState)(""), [K, Y] = (0, n.useState)(""), [$, q] = (0, n.useState)(""), [P, R] = (0, n.useState)(""), [V, B] = (0, n.useState)(""), [Q, G] = (0, n.useState)(""), [X, ee] = (0, n.useState)(""), et = (0, o.useRouter)();

                function ea(e, t) {
                    return s().AES.decrypt(e, t).toString(s().enc.Utf8).replace(/^"(.*)"$/, "$1")
                }

                function er() {
                    return s().lib.WordArray.random(16).toString(s().enc.Hex)
                }

                function en(e, t) {
                    return s().AES.encrypt(JSON.stringify(e), t).toString()
                }
                async function ei() {
                    let e = l.Z.get("access_token");
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
                    isLoading: el,
                    isError: eo,
                    refetch: ec
                } = (0, d.useQuery)("profile", ei, {
                    enabled: !!l.Z.get("access_token"),
                    onSuccess: e => {
                        y(e.kh), v(e.online), N(e.user_id), i(e.username), x(e.name), f(e.balance), G(e.phone), ee(e.email), C(e.tongnap), W(e.role), L(e.countvxmm), E(e.tongnapthang), z(e.last_login_time), O(e.last_logout_time), M(!0)
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
                        } = e, r = ea(t, a);
                        return JSON.parse(r) || null
                    } catch (e) {
                        throw Error("Error fetching posts")
                    }
                }(0, n.useEffect)(() => {
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
                            a = e.find(e => "link_page" === e.key),
                            r = e.find(e => "ratio_atm" === e.key),
                            n = e.find(e => "ratio_atm" === e.key),
                            i = e.find(e => "ratio_atm" === e.key),
                            s = t ? t.value : null,
                            l = a ? a.value : null,
                            o = r ? r.value : null,
                            c = n ? n.value : null,
                            d = i ? i.value : null;
                        I(s), Y(l), q(o), R(c), B(d)
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
                            r = en(e, a),
                            n = en(t, a),
                            i = await c.Z.post("".concat(u.Z, "/api/user/login"), {
                                ct: r,
                                s: n,
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
                                    error: n,
                                    message: s
                                } = a,
                                o = a.token;
                            return l.Z.set("access_token", o), M(!0), ec(), {
                                success: !0,
                                message: s
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
                async function ey(e, t, a) {
                    try {
                        if (l.Z.get("access_token")) return {
                            success: !1,
                            error: "Đăng Đăng Nhập Kh\xf4ng Thể Đăng K\xfd."
                        };
                        let r = er(),
                            n = en(e, r),
                            i = en(JSON.stringify({
                                password: t,
                                confirmPassword: a
                            }), r),
                            s = await c.Z.post("".concat(u.Z, "/api/user/register"), {
                                ct: n,
                                s: i,
                                iv: r
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
                                    success: r,
                                    error: n,
                                    message: i
                                } = a,
                                o = a.token;
                            return l.Z.set("access_token", o), M(!0), ec(), {
                                success: !0,
                                message: i
                            }
                        } {
                            let e = await s.data,
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
                return (0, n.useEffect)(() => {
                    ex()
                }, [ex]), (0, n.useEffect)(() => {
                    _(new Date(new Date().toLocaleString("en-US", {
                        timeZone: "Asia/Ho_Chi_Minh"
                    })))
                }, []), (0, r.jsx)(m.Provider, {
                    value: {
                        refetch: ec,
                        loginUser: eh,
                        registerUser: ey,
                        username: a,
                        namePlayer: g,
                        logout: function() {
                            localStorage.removeItem("next-secure-v1.j.user"), l.Z.remove("access_token"), l.Z.remove("authToken"), i(""), x(""), y(0), et.push("/home"), M(!1)
                        },
                        activated: h,
                        checkLoginStatus: T,
                        balance: p,
                        online: b,
                        userId: k,
                        VietNameTime: Z,
                        decryptData: ea,
                        encryptData: en,
                        generateRandomIV: er,
                        KeyMa: w,
                        TimeLogin: U,
                        TimeLogOut: H,
                        tongnap: S,
                        tongnapthang: D,
                        role: F,
                        countvxmm: J,
                        Zalo: A,
                        PageNso: K,
                        ratio_atm: $,
                        ratio_card: V,
                        ratio_momo: P,
                        phone: Q,
                        email: X
                    },
                    children: t
                })
            }

            function x() {
                return (0, n.useContext)(m)
            }
        }
    },
    function(e) {
        e.O(0, [8472, 4728, 2228, 7478, 7023, 1744], function() {
            return e(e.s = 8294)
        }), _N_E = e.O()
    }
]);