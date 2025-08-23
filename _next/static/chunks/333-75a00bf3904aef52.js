"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [333], {
        182: (e, t, s) => {
            s.d(t, {
                default: () => u
            });
            var r = s(2432),
                a = s(364),
                n = s(7709),
                i = s(2317),
                l = s.n(i),
                c = s(2708),
                o = s(4652),
                d = s(4010),
                h = s(4260),
                F = s(1823),
                x = s(9894);
            let m = (0, s(6612).createClientComponentClient)();
            var v = s(871);

            function u() {
                let [e, t] = (0, a.useState)(!1), [s, i] = (0, a.useState)(null), [u, g] = (0, a.useState)("");
                (0, a.useEffect)(() => {
                    let e = async () => {
                        let {
                            data: {
                                user: e
                            }
                        } = await m.auth.getUser();
                        if (e) {
                            let {
                                data: t
                            } = await m.from("users").select("role").eq("id", e.id).single();
                            i(e), g((null == t ? void 0 : t.role) || "user")
                        }
                    };
                    e();
                    let {
                        data: {
                            subscription: t
                        }
                    } = m.auth.onAuthStateChange(e);
                    return () => t.unsubscribe()
                }, []);
                let f = async () => {
                    await (0, v.C)(), i(null), g("")
                };
                return (0, r.jsx)("header", {
                    className: "relative z-50 bg-[#1A1A1A]/90 backdrop-blur-sm border-b border-[#00FFFF]/20",
                    children: (0, r.jsxs)("div", {
                        className: "container mx-auto px-4 py-4",
                        children: [(0, r.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0, r.jsxs)(l(), {
                                href: "/",
                                className: "flex items-center space-x-2",
                                children: [(0, r.jsx)(n.default, {
                                    src: "/logo (3).jpg",
                                    alt: "TC TECH LOGO",
                                    width: 32,
                                    height: 32,
                                    className: "h-8 w-8",
                                    priority: !0
                                }), (0, r.jsx)("span", {
                                    className: "text-2xl font-bold text-[#F5F5F5]",
                                    children: "Nucho Tech"
                                })]
                            }), (0, r.jsxs)("nav", {
                                className: "hidden md:flex items-center space-x-8",
                                children: [(0, r.jsx)(l(), {
                                    href: "/",
                                    className: "text-[#F5F5F5] hover:text-[#00FFFF] transition-colors",
                                    children: "Home"
                                }), (0, r.jsx)(l(), {
                                    href: "/pricing",
                                    className: "text-[#F5F5F5] hover:text-[#00FFFF] transition-colors",
                                    children: "Pricing"
                                }), (0, r.jsx)(l(), {
                                    href: "/contact",
                                    className: "text-[#F5F5F5] hover:text-[#00FFFF] transition-colors",
                                    children: "Contacts"
                                })]
                            }), (0, r.jsx)("div", {
                                className: "hidden md:flex items-center space-x-4",
                                children: s ? (0, r.jsxs)("div", {
                                    className: "flex items-center space-x-4",
                                    children: ["admin" === u && (0, r.jsx)(l(), {
                                        href: "/admin",
                                        children: (0, r.jsx)(c.$, {
                                            variant: "ghost",
                                            className: "text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10",
                                            children: (0, r.jsx)(o.A, {
                                                className: "h-4 w-4"
                                            })
                                        })
                                    }), (0, r.jsx)(l(), {
                                        href: "/dashboard",
                                        children: (0, r.jsx)(c.$, {
                                            variant: "ghost",
                                            className: "text-[#F5F5F5] hover:text-[#00FFFF] hover:bg-[#00FFFF]/10",
                                            children: (0, r.jsx)(d.A, {
                                                className: "h-4 w-4"
                                            })
                                        })
                                    }), (0, r.jsx)(c.$, {
                                        onClick: f,
                                        variant: "ghost",
                                        className: "text-red-400 hover:text-red-300 hover:bg-red-400/10",
                                        children: (0, r.jsx)(h.A, {
                                            className: "h-4 w-4"
                                        })
                                    })]
                                }) : (0, r.jsx)(l(), {
                                    href: "/auth/login",
                                    children: (0, r.jsx)(c.$, {
                                        variant: "ghost",
                                        className: "text-[#F5F5F5] hover:text-[#00FFFF] hover:bg-[#00FFFF]/10",
                                        children: "Sign In"
                                    })
                                })
                            }), (0, r.jsx)("button", {
                                className: "md:hidden text-[#F5F5F5]",
                                onClick: () => t(!e),
                                children: e ? (0, r.jsx)(F.A, {
                                    className: "h-6 w-6"
                                }) : (0, r.jsx)(x.A, {
                                    className: "h-6 w-6"
                                })
                            })]
                        }), e && (0, r.jsx)("div", {
                            className: "md:hidden mt-4 pb-4 border-t border-[#00FFFF]/20",
                            children: (0, r.jsxs)("nav", {
                                className: "flex flex-col space-y-4 mt-4",
                                children: [(0, r.jsx)(l(), {
                                    href: "/",
                                    className: "text-[#F5F5F5] hover:text-[#00FFFF] transition-colors",
                                    children: "Home"
                                }), (0, r.jsx)(l(), {
                                    href: "/pricing",
                                    className: "text-[#F5F5F5] hover:text-[#00FFFF] transition-colors",
                                    children: "Pricing"
                                }), (0, r.jsx)(l(), {
                                    href: "contact",
                                    className: "text-[#F5F5F5] hover:text-[#00FFFF] transition-colors",
                                    children: "Contacts"
                                }), (0, r.jsx)("div", {
                                    className: "flex flex-col space-y-2 pt-4 border-t border-[#00FFFF]/20",
                                    children: s ? (0, r.jsxs)(r.Fragment, {
                                        children: ["admin" === u && (0, r.jsx)(l(), {
                                            href: "/admin",
                                            children: (0, r.jsxs)(c.$, {
                                                variant: "ghost",
                                                className: "w-full text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10",
                                                children: [(0, r.jsx)(o.A, {
                                                    className: "h-4 w-4 mr-2"
                                                }), "Admin"]
                                            })
                                        }), (0, r.jsx)(l(), {
                                            href: "/dashboard",
                                            children: (0, r.jsxs)(c.$, {
                                                variant: "ghost",
                                                className: "w-full text-[#F5F5F5] hover:text-[#00FFFF] hover:bg-[#00FFFF]/10",
                                                children: [(0, r.jsx)(d.A, {
                                                    className: "h-4 w-4 mr-2"
                                                }), "Dashboard"]
                                            })
                                        }), (0, r.jsxs)(c.$, {
                                            onClick: f,
                                            variant: "ghost",
                                            className: "w-full text-red-400 hover:text-red-300 hover:bg-red-400/10",
                                            children: [(0, r.jsx)(h.A, {
                                                className: "h-4 w-4 mr-2"
                                            }), "Sign Out"]
                                        })]
                                    }) : (0, r.jsx)(l(), {
                                        href: "/auth/login",
                                        children: (0, r.jsx)(c.$, {
                                            variant: "ghost",
                                            className: "w-full text-[#F5F5F5] hover:text-[#00FFFF] hover:bg-[#00FFFF]/10",
                                            children: "Sign In"
                                        })
                                    })
                                })]
                            })
                        })]
                    })
                })
            }
        },
        871: (e, t, s) => {
            s.d(t, {
                C: () => a
            });
            var r = s(6420);
            let a = (0, r.createServerReference)("0001578d01b7ab9e7f2b7e332cc48527a40d93844a", r.callServer, void 0, r.findSourceMapURL, "signOut")
        },
        2708: (e, t, s) => {
            s.d(t, {
                $: () => c
            });
            var r = s(2432);
            s(364);
            var a = s(9932),
                n = s(6992),
                i = s(4963);
            let l = (0, n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
                variants: {
                    variant: {
                        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
                        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
                        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
                        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                        link: "text-primary underline-offset-4 hover:underline"
                    },
                    size: {
                        default: "h-9 px-4 py-2 has-[>svg]:px-3",
                        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
                        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                        icon: "size-9"
                    }
                },
                defaultVariants: {
                    variant: "default",
                    size: "default"
                }
            });

            function c(e) {
                let {
                    className: t,
                    variant: s,
                    size: n,
                    asChild: c = !1,
                    ...o
                } = e, d = c ? a.DX : "button";
                return (0, r.jsx)(d, {
                    "data-slot": "button",
                    className: (0, i.cn)(l({
                        variant: s,
                        size: n,
                        className: t
                    })),
                    ...o
                })
            }
        },
        2830: (e, t, s) => {
            s.d(t, {
                default: () => d
            });
            var r = s(2432),
                a = s(2317),
                n = s.n(a),
                i = s(2384),
                l = s(4110),
                c = s(4311),
                o = s(364);

            function d() {
                let [e, t] = (0, o.useState)(!1);
                return (0, r.jsx)("footer", {
                    className: "bg-[#1A1A1A]/90 border-t border-[#00FFFF]/20 py-12 px-4 relative z-10",
                    children: (0, r.jsxs)("div", {
                        className: "container mx-auto",
                        children: [(0, r.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-4 gap-8",
                            children: [(0, r.jsxs)("div", {
                                className: "col-span-1 md:col-span-2",
                                children: [(0, r.jsxs)(n(), {
                                    href: "/",
                                    className: "flex items-center space-x-2 mb-4",
                                    children: [(0, r.jsx)(i.A, {
                                        className: "h-8 w-8 text-[#00FFFF]"
                                    }), (0, r.jsx)("span", {
                                        className: "text-2xl font-bold text-[#F5F5F5]",
                                        children: "Nucho Tech"
                                    })]
                                }), (0, r.jsx)("p", {
                                    className: "text-[#F5F5F5]/70 mb-6 max-w-md",
                                    children: "Leading provider of advanced VPN solutions. Secure your digital freedom with our cutting-edge applications and uncompromising privacy protection."
                                }), (0, r.jsxs)("div", {
                                    className: "flex space-x-4",
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex items-center text-[#F5F5F5]/70",
                                        children: [(0, r.jsx)(l.A, {
                                            className: "h-4 w-4 mr-2 text-[#00FFFF]"
                                        }), "nuchotech@gmail.com"]
                                    }), (0, r.jsxs)("div", {
                                        className: "relative",
                                        onMouseEnter: () => t(!0),
                                        onMouseLeave: () => t(!1),
                                        children: [(0, r.jsxs)("div", {
                                            className: "flex items-center text-[#F5F5F5]/70 cursor-pointer hover:text-[#00FFFF] transition-colors",
                                            children: [(0, r.jsx)(c.A, {
                                                className: "h-4 w-4 mr-2 text-green-500"
                                            }), "WhatsApp"]
                                        }), e && (0, r.jsxs)("div", {
                                            className: "absolute bottom-full left-0 mb-2 bg-[#1A1A1A] border border-[#00FFFF]/20 rounded-lg p-3 min-w-[200px] z-50",
                                            children: [(0, r.jsx)("p", {
                                                className: "text-[#F5F5F5] text-sm mb-2",
                                                children: "Contact us on WhatsApp:"
                                            }), (0, r.jsx)("a", {
                                                href: "https://wa.me/+254110554361",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "text-[#00FFFF] hover:text-[#00FFFF]/80 text-sm",
                                                children: "+254110554361"
                                            })]
                                        })]
                                    })]
                                })]
                            }), (0, r.jsxs)("div", {
                                children: [(0, r.jsx)("h3", {
                                    className: "text-lg font-semibold text-[#F5F5F5] mb-4",
                                    children: "Quick Links"
                                }), (0, r.jsxs)("ul", {
                                    className: "space-y-2",
                                    children: [(0, r.jsx)("li", {
                                        children: (0, r.jsx)(n(), {
                                            href: "/",
                                            className: "text-[#F5F5F5]/70 hover:text-[#00FFFF] transition-colors",
                                            children: "Home"
                                        })
                                    }), (0, r.jsx)("li", {
                                        children: (0, r.jsx)(n(), {
                                            href: "/pricing",
                                            className: "text-[#F5F5F5]/70 hover:text-[#00FFFF] transition-colors",
                                            children: "Pricing"
                                        })
                                    }), (0, r.jsx)("li", {
                                        children: (0, r.jsx)(n(), {
                                            href: "/tutorials",
                                            className: "text-[#F5F5F5]/70 hover:text-[#00FFFF] transition-colors",
                                            children: "Tutorials"
                                        })
                                    }), (0, r.jsx)("li", {
                                        children: (0, r.jsx)(n(), {
                                            href: "/contact",
                                            className: "text-[#F5F5F5]/70 hover:text-[#00FFFF] transition-colors",
                                            children: "Contact"
                                        })
                                    })]
                                })]
                            }), (0, r.jsxs)("div", {
                                children: [(0, r.jsx)("h3", {
                                    className: "text-lg font-semibold text-[#F5F5F5] mb-4",
                                    children: "Support"
                                }), (0, r.jsxs)("ul", {
                                    className: "space-y-2",
                                    children: [(0, r.jsx)("li", {
                                        children: (0, r.jsx)(n(), {
                                            href: "/auth/login",
                                            className: "text-[#F5F5F5]/70 hover:text-[#00FFFF] transition-colors",
                                            children: "Sign In"
                                        })
                                    }), (0, r.jsx)("li", {
                                        children: (0, r.jsx)(n(), {
                                            href: "/auth/sign-up",
                                            className: "text-[#F5F5F5]/70 hover:text-[#00FFFF] transition-colors",
                                            children: "Create Account"
                                        })
                                    }), (0, r.jsx)("li", {
                                        children: (0, r.jsx)(n(), {
                                            href: "/",
                                            className: "text-[#F5F5F5]/70 hover:text-[#00FFFF] transition-colors",
                                            children: "Dashboard"
                                        })
                                    }), (0, r.jsx)("li", {
                                        children: (0, r.jsx)(n(), {
                                            href: "/contact",
                                            className: "text-[#F5F5F5]/70 hover:text-[#00FFFF] transition-colors",
                                            children: "Help Center"
                                        })
                                    })]
                                })]
                            })]
                        }), (0, r.jsx)("div", {
                            className: "border-t border-[#00FFFF]/20 mt-8 pt-8 text-center",
                            children: (0, r.jsxs)("p", {
                                className: "text-[#F5F5F5]/70",
                                children: ["Powered by", " ", (0, r.jsx)("a", {
                                    href: "https://tctechdevelopers.com",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-[#00FFFF] hover:text-[#00FFFF]/80 transition-colors",
                                    children: "TC TECH DEVELOPERS"
                                })]
                            })
                        })]
                    })
                })
            }
        },
        4963: (e, t, s) => {
            s.d(t, {
                cn: () => n
            });
            var r = s(2126),
                a = s(8441);

            function n() {
                for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                return (0, a.QP)((0, r.$)(t))
            }
        },
        9493: (e, t, s) => {
            s.d(t, {
                default: () => n
            });
            var r = s(2432),
                a = s(364);

            function n() {
                let e = (0, a.useRef)(null);
                return (0, a.useEffect)(() => {
                    let t = e.current;
                    if (!t) return;
                    let s = t.getContext("2d");
                    if (!s) return;
                    let r = () => {
                        t.width = window.innerWidth, t.height = window.innerHeight
                    };
                    r(), window.addEventListener("resize", r);
                    let a = [];
                    for (let e = 0; e < 50; e++) a.push({
                        x: Math.random() * t.width,
                        y: Math.random() * t.height,
                        vx: (Math.random() - .5) * .5,
                        vy: (Math.random() - .5) * .5,
                        size: 2 * Math.random() + 1,
                        opacity: .5 * Math.random() + .2
                    });
                    let n = () => {
                        s.clearRect(0, 0, t.width, t.height), a.forEach((e, r) => {
                            e.x += e.vx, e.y += e.vy, e.x < 0 && (e.x = t.width), e.x > t.width && (e.x = 0), e.y < 0 && (e.y = t.height), e.y > t.height && (e.y = 0), s.beginPath(), s.arc(e.x, e.y, e.size, 0, 2 * Math.PI), s.fillStyle = "rgba(0, 255, 255, ".concat(e.opacity, ")"), s.fill(), a.forEach((t, a) => {
                                if (r !== a) {
                                    let r = e.x - t.x,
                                        a = e.y - t.y,
                                        n = Math.sqrt(r * r + a * a);
                                    n < 100 && (s.beginPath(), s.moveTo(e.x, e.y), s.lineTo(t.x, t.y), s.strokeStyle = "rgba(0, 255, 255, ".concat(.1 * (1 - n / 100), ")"), s.lineWidth = .5, s.stroke())
                                }
                            })
                        }), requestAnimationFrame(n)
                    };
                    return n(), () => {
                        window.removeEventListener("resize", r)
                    }
                }, []), (0, r.jsx)("canvas", {
                    ref: e,
                    className: "fixed inset-0 pointer-events-none z-0",
                    style: {
                        background: "transparent"
                    }
                })
            }
        }
    }
]);