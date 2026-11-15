import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { A as n, F as r, I as i, Z as a, a as o } from "./doc.DoLlUurT.js";
import { n as s } from "./react-dom.B9zIfLd2.js";
import { t as c } from "./Button.D4_9kLv-.js";
import { t as l } from "./Badge.CXZBI9XV.js";
import { t as u } from "./TextField.ByRd6MqS.js";
import { t as d } from "./Link.BGmkI4cs.js";
import { a as f, i as p, n as m, r as h, t as g } from "./Card.36mcHvX5.js";
import { t as _ } from "./Separator.BPVilYPy.js";
import { i as v, n as y, r as b } from "./Checkbox.64MvRCxA.js";
import { n as x } from "./useFormReset.ClC-r4N4.js";
import { n as S, r as C, t as w } from "./RadioGroup.CqdEDeh_.js";
import { t as T } from "./Text.CWB1nGTv.js";
import { t as E } from "./SwipeRow.CNoYxMpw.js";
var D = t(s(), 1), O = `outline-none after:absolute after:inset-0 after:rounded-[inherit]`, k = r();
function A({ empty: e, className: t, children: n, ...r }) {
	return D.Children.toArray(n).length === 0 ? e ? (0, k.jsx)(`div`, {
		...r,
		className: i(`min-w-0`, t),
		children: e
	}) : null : (0, k.jsx)(`ul`, {
		...r,
		className: i(`@container min-w-0 divide-y divide-border`, t),
		children: n
	});
}
function j({ count: e, label: t, note: r, href: a, onPress: o, urgent: s = !1, urgentLabel: c, actionLabel: l, className: u }) {
	let f = (0, D.useId)(), p = (0, D.useId)(), m = (0, D.useId)(), h = (0, D.useId)(), g = [s && c ? h : null, r ? m : null].filter(Boolean).join(` `), _ = a !== void 0 || o !== void 0, v = (0, k.jsx)(`span`, {
		id: p,
		className: `font-medium break-words text-fg`,
		children: t
	});
	return (0, k.jsxs)(`li`, {
		className: i(`relative flex min-w-0 items-center gap-3 px-4 py-3`, _ && i(`transition-colors duration-(--sk-duration-fast) has-[[data-hovered]]:bg-hover has-[[data-pressed]]:bg-selected`, `has-[[data-focus-visible]]:outline-solid has-[[data-focus-visible]]:outline-(length:--sk-focus-width) has-[[data-focus-visible]]:outline-focus has-[[data-focus-visible]]:-outline-offset-(--sk-focus-width)`), u),
		children: [
			(0, k.jsxs)(`span`, {
				id: f,
				className: i(`inline-flex h-9 min-w-12 shrink-0 items-center justify-center gap-1 rounded-md px-2 text-body font-semibold tabular-nums ring-1 ring-inset forced-colors:border forced-colors:border-border`, s ? `bg-danger-soft text-danger ring-danger` : `bg-accent-soft text-accent-text ring-accent-ring`),
				children: [s ? (0, k.jsx)(n, {
					name: `status.warning`,
					"aria-hidden": `true`,
					className: `size-3.5 shrink-0`
				}) : null, e]
			}),
			(0, k.jsxs)(`span`, {
				className: `flex min-w-0 flex-1 flex-col gap-0.5 text-body`,
				children: [(0, k.jsxs)(`span`, {
					className: `flex min-w-0 flex-wrap items-baseline gap-x-2`,
					children: [_ ? (0, k.jsx)(d, {
						...a === void 0 ? {} : { href: a },
						...o === void 0 ? {} : { onPress: o },
						"aria-labelledby": `${f} ${p}`,
						...g ? { "aria-describedby": g } : {},
						className: i(`min-w-0 underline-offset-2 data-hovered:underline`, O),
						children: v
					}) : v, s && c ? (0, k.jsx)(`span`, {
						id: h,
						className: `text-caption font-semibold text-danger`,
						children: c
					}) : null]
				}), r ? (0, k.jsx)(`span`, {
					id: m,
					className: `text-caption break-words text-muted`,
					children: r
				}) : null]
			}),
			_ && l ? (0, k.jsxs)(`span`, {
				"aria-hidden": `true`,
				className: `hidden shrink-0 items-center gap-1 text-caption font-medium text-accent-text @sm:inline-flex`,
				children: [l, (0, k.jsx)(n, {
					name: `arrow.right`,
					className: `size-3.5`
				})]
			}) : null
		]
	});
}
function M({ orientation: e = `horizontal`, label: t, className: n }) {
	return t && e === `horizontal` ? (0, k.jsxs)(`div`, {
		className: i(`flex min-w-0 items-center gap-3 text-label font-semibold text-muted uppercase`, n),
		children: [
			(0, k.jsx)(`span`, {
				"aria-hidden": `true`,
				className: `min-w-4 flex-1 border-t border-border`
			}),
			(0, k.jsx)(`span`, {
				className: `max-w-[80%] text-center break-words`,
				children: t
			}),
			(0, k.jsx)(`span`, {
				"aria-hidden": `true`,
				className: `min-w-4 flex-1 border-t border-border`
			})
		]
	}) : (0, k.jsx)(_, {
		orientation: e,
		className: i(`shrink-0 border-0 border-border`, e === `vertical` ? `mx-1 w-0 self-stretch border-s` : `my-0 h-0 w-full border-t`, n)
	});
}
var N = {
	1: `h1`,
	2: `h2`,
	3: `h3`
};
function P({ title: e, eyebrow: t, lead: n, actions: r, aside: a, art: o, level: s = 1, className: c, ...l }) {
	let u = (0, D.useId)(), d = N[s];
	return (0, k.jsx)(`section`, {
		"aria-labelledby": u,
		...l,
		className: i(`@container relative min-w-0 overflow-hidden rounded-xl border border-border bg-linear-135 from-accent-soft to-side to-60% text-fg`, c),
		children: (0, k.jsxs)(`div`, {
			className: `grid gap-6 p-5 @md:p-7 @3xl:grid-cols-[minmax(0,1fr)_auto] @3xl:items-center`,
			children: [(0, k.jsxs)(`div`, {
				className: `min-w-0`,
				children: [
					t ? (0, k.jsx)(`p`, {
						className: `mb-1 text-caption font-medium break-words text-muted`,
						children: t
					}) : null,
					(0, k.jsx)(d, {
						id: u,
						className: `text-page font-semibold break-words text-fg @lg:text-display`,
						children: e
					}),
					n ? (0, k.jsx)(`div`, {
						className: `mt-2 max-w-[65ch] text-body break-words text-muted`,
						children: n
					}) : null,
					r || a ? (0, k.jsxs)(`div`, {
						className: `mt-5 flex flex-wrap items-center gap-x-4 gap-y-3`,
						children: [r ? (0, k.jsx)(`div`, {
							className: `flex flex-wrap items-center gap-2`,
							children: r
						}) : null, a ? (0, k.jsx)(`div`, {
							className: `flex min-w-0 flex-wrap items-center gap-1.5 @3xl:ms-auto`,
							children: a
						}) : null]
					}) : null
				]
			}), o ? (0, k.jsx)(`div`, {
				"aria-hidden": `true`,
				className: `hidden @3xl:block`,
				children: o
			}) : null]
		})
	});
}
var F = (0, D.createContext)(`single`), I = {
	sm: `grid-cols-[repeat(auto-fill,minmax(min(100%,8.5rem),1fr))]`,
	md: `grid-cols-[repeat(auto-fill,minmax(min(100%,12rem),1fr))]`,
	lg: `grid-cols-[repeat(auto-fill,minmax(min(100%,16rem),1fr))]`
}, L = `flex min-w-0 flex-col gap-2`;
function R({ label: e, description: t, errorMessage: r, size: o, children: s }) {
	let c = (0, D.useCallback)((e) => (0, k.jsxs)(k.Fragment, { children: [(0, k.jsx)(n, {
		name: `status.error`,
		"aria-hidden": `true`,
		className: `mt-px size-3.5 shrink-0`
	}), (0, k.jsx)(`span`, {
		className: `min-w-0 break-words`,
		children: r ?? e.validationErrors.join(` `)
	})] }), [r]);
	return (0, k.jsxs)(k.Fragment, { children: [
		(0, k.jsx)(a, {
			className: `text-body font-semibold text-fg`,
			children: e
		}),
		t ? (0, k.jsx)(T, {
			slot: `description`,
			className: `-mt-1 text-caption text-muted`,
			children: t
		}) : null,
		(0, k.jsx)(`div`, {
			className: i(`grid gap-3`, I[o]),
			children: s
		}),
		(0, k.jsx)(x, {
			className: `flex items-start gap-1.5 text-caption font-medium text-danger`,
			children: c
		})
	] });
}
function z(e) {
	let { label: t, description: n, errorMessage: r, isInvalid: a, isDisabled: o, isRequired: s, name: c, size: l, className: u, children: d } = e, f = {
		...a === void 0 ? {} : { isInvalid: a },
		...o === void 0 ? {} : { isDisabled: o },
		...s === void 0 ? {} : { isRequired: s },
		...c === void 0 ? {} : { name: c },
		className: i(L, u)
	}, p = (0, k.jsx)(R, {
		label: t,
		description: n,
		errorMessage: r,
		size: l ?? `md`,
		children: d
	});
	return e.selectionMode === `multiple` ? (0, k.jsx)(F.Provider, {
		value: `multiple`,
		children: (0, k.jsx)(y, {
			...f,
			...e.value === void 0 ? {} : { value: e.value },
			...e.defaultValue === void 0 ? {} : { defaultValue: e.defaultValue },
			...e.onChange === void 0 ? {} : { onChange: e.onChange },
			children: p
		})
	}) : (0, k.jsx)(F.Provider, {
		value: `single`,
		children: (0, k.jsx)(S, {
			...f,
			orientation: `horizontal`,
			...e.value === void 0 ? {} : { value: e.value },
			...e.defaultValue === void 0 ? {} : { defaultValue: e.defaultValue },
			...e.onChange === void 0 ? {} : { onChange: e.onChange },
			children: p
		})
	});
}
var B = i(`group/tile relative flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-surface text-fg`, `transition-[border-color,box-shadow,transform] duration-(--sk-duration-fast)`, `has-[[data-hovered]]:border-border-strong has-[[data-hovered]]:shadow-md motion-safe:has-[[data-hovered]]:-translate-y-0.5`, `motion-safe:has-[[data-pressed]]:translate-y-0`, `data-selected:border-accent data-selected:ring-2 data-selected:ring-accent-ring forced-colors:data-selected:border-[Highlight]`, `data-invalid:border-danger`, `data-disabled:cursor-not-allowed data-disabled:opacity-60 data-disabled:has-[[data-hovered]]:translate-y-0 data-disabled:has-[[data-hovered]]:shadow-none`, `has-[[data-focus-visible]]:outline-solid has-[[data-focus-visible]]:outline-(length:--sk-focus-width) has-[[data-focus-visible]]:outline-focus has-[[data-focus-visible]]:outline-offset-(--sk-focus-offset)`), V = `flex min-w-0 cursor-pointer items-start gap-2 font-medium outline-none after:absolute after:inset-0 after:rounded-[inherit] data-disabled:cursor-not-allowed`, H = {
	single: `mt-0.5 grid size-4 shrink-0 place-items-center rounded-full border border-border-strong bg-input group-data-selected/tile:border-accent group-data-selected/tile:bg-accent`,
	multiple: `mt-0.5 grid size-4 shrink-0 place-items-center rounded-sm border border-border-strong bg-input group-data-selected/tile:border-accent group-data-selected/tile:bg-accent`
};
function U({ label: e, description: t, badge: r, selectedLabel: a, mode: o }) {
	return (0, k.jsxs)(`div`, {
		className: `flex min-w-0 flex-1 flex-col gap-1 p-3`,
		children: [
			(0, k.jsxs)(`div`, {
				className: `flex min-w-0 flex-wrap items-start gap-x-2 gap-y-1`,
				children: [(0, k.jsxs)(o === `multiple` ? b : C, {
					className: i(V, `flex-1 text-body`),
					children: [(0, k.jsx)(`span`, {
						"aria-hidden": `true`,
						className: H[o],
						children: (0, k.jsx)(n, {
							name: `action.check`,
							className: `size-3 text-accent-fg opacity-0 group-data-selected/tile:opacity-100`,
							strokeWidth: 3
						})
					}), (0, k.jsx)(`span`, {
						className: `min-w-0 break-words`,
						children: e
					})]
				}), r ? (0, k.jsx)(`span`, {
					className: `shrink-0`,
					children: r
				}) : null]
			}),
			t ? (0, k.jsx)(T, {
				slot: `description`,
				className: `ps-6 text-caption break-words text-muted`,
				children: t
			}) : null,
			a ? (0, k.jsxs)(`span`, {
				"aria-hidden": `true`,
				className: `hidden items-center gap-1 ps-6 text-caption font-semibold text-accent-text group-data-selected/tile:flex`,
				children: [(0, k.jsx)(n, {
					name: `action.check`,
					className: `size-3.5`
				}), a]
			}) : null
		]
	});
}
function W({ value: e, label: t, description: n, preview: r, badge: a, selectedLabel: o, isDisabled: s, className: c }) {
	let l = (0, D.useContext)(F);
	return (0, k.jsxs)(l === `multiple` ? v : w, {
		value: e,
		...s === void 0 ? {} : { isDisabled: s },
		className: i(B, c),
		children: [r ? (0, k.jsx)(`div`, {
			"aria-hidden": `true`,
			className: `min-w-0 overflow-hidden border-b border-border bg-sunken`,
			children: r
		}) : null, (0, k.jsx)(U, {
			label: t,
			description: n,
			badge: a,
			selectedLabel: o,
			mode: l
		})]
	});
}
var G = {
	2: `h2`,
	3: `h3`,
	4: `h4`
};
function K({ title: e, description: t, actions: n, level: r = 2, framed: a = !0, className: o, children: s, ...c }) {
	let l = (0, D.useId)(), u = (0, D.useId)(), d = G[r];
	return (0, k.jsxs)(`section`, {
		"aria-labelledby": l,
		...t ? { "aria-describedby": u } : {},
		...c,
		className: i(`flex min-w-0 flex-col gap-3`, o),
		children: [(0, k.jsxs)(`div`, {
			className: `flex flex-wrap items-end gap-x-4 gap-y-2`,
			children: [(0, k.jsxs)(`div`, {
				className: `min-w-0 flex-[1_1_16rem]`,
				children: [(0, k.jsx)(d, {
					id: l,
					className: `text-title font-semibold break-words text-fg`,
					children: e
				}), t ? (0, k.jsx)(`p`, {
					id: u,
					className: `mt-0.5 max-w-[70ch] text-caption break-words text-muted`,
					children: t
				}) : null]
			}), n ? (0, k.jsx)(`div`, {
				className: `flex flex-wrap items-center gap-2`,
				children: n
			}) : null]
		}), a ? (0, k.jsx)(`div`, {
			className: `@container min-w-0 divide-y divide-border rounded-lg border border-border bg-surface px-4 text-body text-fg`,
			children: s
		}) : (0, k.jsx)(`div`, {
			className: `@container flex min-w-0 flex-col gap-3`,
			children: s
		})]
	});
}
var q = {
	neutral: `bg-sunken text-muted`,
	accent: `bg-accent-soft text-accent-text`,
	ok: `bg-ok-soft text-ok`,
	warn: `bg-warn-soft text-warn`,
	danger: `bg-danger-soft text-danger`,
	info: `bg-info-soft text-info`
};
function J({ label: e, value: t, icon: r, tone: a = `accent`, hint: o, trend: s, href: c, onPress: l, loading: u = !1, loadingLabel: f, error: p, as: m = `div`, className: h }) {
	let g = (0, D.useId)(), _ = c !== void 0 || l !== void 0;
	return (0, k.jsxs)(m, {
		...u ? { "aria-busy": !0 } : {},
		className: i(`relative flex min-w-0 flex-col gap-1 rounded-lg border border-border bg-surface p-4 text-fg shadow-sm`, _ && i(`transition-[border-color,box-shadow] duration-(--sk-duration-fast) has-[[data-hovered]]:border-border-strong has-[[data-hovered]]:shadow-md has-[[data-pressed]]:bg-hover`, `has-[[data-focus-visible]]:outline-solid has-[[data-focus-visible]]:outline-(length:--sk-focus-width) has-[[data-focus-visible]]:outline-focus has-[[data-focus-visible]]:outline-offset-(--sk-focus-offset)`), h),
		children: [
			(0, k.jsxs)(`div`, {
				className: `flex items-start gap-3`,
				children: [(0, k.jsx)(`p`, {
					className: `min-w-0 flex-1 text-body break-words text-muted`,
					children: _ ? (0, k.jsx)(d, {
						...c === void 0 ? {} : { href: c },
						...l === void 0 ? {} : { onPress: l },
						"aria-describedby": g,
						className: i(`text-muted underline-offset-2 data-hovered:text-fg data-hovered:underline`, O),
						children: e
					}) : e
				}), r ? (0, k.jsx)(`span`, {
					"aria-hidden": `true`,
					className: i(`grid size-8 shrink-0 place-items-center rounded-md [&_svg]:size-4`, q[a]),
					children: r
				}) : null]
			}),
			(0, k.jsx)(`div`, {
				id: g,
				className: `min-w-0`,
				children: u ? (0, k.jsxs)(k.Fragment, { children: [(0, k.jsx)(`span`, {
					"aria-hidden": `true`,
					className: `my-1 block h-7 w-20 rounded-md bg-hover motion-safe:animate-pulse forced-colors:border forced-colors:border-border`
				}), f ? (0, k.jsx)(`span`, {
					className: `sr-only`,
					children: f
				}) : null] }) : p ? (0, k.jsxs)(`p`, {
					className: `flex items-start gap-1.5 text-body font-medium text-danger`,
					children: [(0, k.jsx)(n, {
						name: `status.error`,
						"aria-hidden": `true`,
						className: `mt-0.5 size-4 shrink-0`
					}), (0, k.jsx)(`span`, {
						className: `min-w-0 break-words`,
						children: p
					})]
				}) : (0, k.jsx)(`p`, {
					className: `text-display leading-tight font-bold break-words text-fg tabular-nums`,
					children: t
				})
			}),
			s || o ? (0, k.jsxs)(`div`, {
				className: `flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-caption text-muted`,
				children: [s, o ? (0, k.jsx)(`span`, {
					className: `min-w-0 break-words`,
					children: o
				}) : null]
			}) : null
		]
	});
}
var Y = e({ default: () => ne }), X = {
	en: {
		label: `Plans`,
		previous: `Previous plan`,
		next: `Next plan`,
		hint: `Swipe for more`,
		position: (e, t) => `${e} / ${t}`,
		plans: [
			`Free`,
			`Starter`,
			`Team`,
			`Business`,
			`Scale`,
			`Enterprise`
		],
		note: `The switch follows the width of the window: narrower than 48rem this is a swipe row, so view the gallery at 390 px to see the arrows.`,
		body: `Includes the basics and email support.`
	},
	pl: {
		label: `Plany`,
		previous: `Poprzedni plan`,
		next: `Następny plan`,
		hint: `Przesuń, aby zobaczyć więcej`,
		position: (e, t) => `${e} / ${t}`,
		plans: [
			`Darmowy`,
			`Start`,
			`Zespół`,
			`Firma`,
			`Skala`,
			`Enterprise`
		],
		note: `Przełączenie zależy od szerokości okna: węższe niż 48 rem to rząd do przesuwania, więc oglądaj galerię przy 390 px, aby zobaczyć strzałki.`,
		body: `Zawiera podstawy i pomoc e-mailem.`
	}
};
function Z() {
	let e = X[(0, D.useContext)(o) === `pl` ? `pl` : `en`];
	return (0, k.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [(0, k.jsx)(`p`, {
			className: `text-caption text-muted`,
			children: e.note
		}), (0, k.jsx)(E, {
			label: e.label,
			previousLabel: e.previous,
			nextLabel: e.next,
			hint: e.hint,
			positionLabel: e.position,
			columns: 3,
			children: e.plans.map((t) => (0, k.jsxs)(g, {
				padding: `md`,
				className: `h-full`,
				children: [(0, k.jsx)(f, {
					level: 3,
					children: t
				}), (0, k.jsx)(`p`, {
					className: `mt-1 text-body text-muted`,
					children: e.body
				})]
			}, t))
		})]
	});
}
function Q({ theme: e }) {
	return (0, k.jsxs)(`div`, {
		"data-theme": e,
		className: `grid h-20 grid-cols-[1.5rem_1fr]`,
		children: [(0, k.jsxs)(`div`, {
			className: `flex flex-col gap-1 bg-side px-1 py-2`,
			children: [
				(0, k.jsx)(`span`, { className: `h-1.5 rounded-sm bg-accent` }),
				(0, k.jsx)(`span`, { className: `h-1.5 rounded-sm bg-border-strong` }),
				(0, k.jsx)(`span`, { className: `h-1.5 rounded-sm bg-border-strong` })
			]
		}), (0, k.jsxs)(`div`, {
			className: `flex flex-col gap-1.5 bg-bg p-2`,
			children: [
				(0, k.jsx)(`span`, { className: `h-1.5 w-2/3 rounded-sm bg-fg` }),
				(0, k.jsx)(`span`, { className: `h-1.5 w-1/2 rounded-sm bg-muted` }),
				(0, k.jsx)(`span`, { className: `h-1.5 w-1/3 rounded-sm bg-accent` })
			]
		})]
	});
}
function $() {
	let [e, t] = (0, D.useState)(`light`);
	return (0, k.jsxs)(z, {
		label: `Theme`,
		description: `Applies to every window.`,
		value: e,
		onChange: t,
		children: [
			(0, k.jsx)(W, {
				value: `light`,
				label: `Light`,
				description: `Warm paper`,
				preview: (0, k.jsx)(Q, { theme: `light` }),
				selectedLabel: `Selected`
			}),
			(0, k.jsx)(W, {
				value: `dark`,
				label: `Dark`,
				description: `Easy at night`,
				preview: (0, k.jsx)(Q, { theme: `dark` }),
				selectedLabel: `Selected`
			}),
			(0, k.jsx)(W, {
				value: `contrast`,
				label: `High contrast`,
				description: `Strongest edges and text`,
				badge: (0, k.jsx)(l, {
					tone: `info`,
					children: `AAA`
				}),
				preview: (0, k.jsx)(Q, { theme: `contrast` }),
				selectedLabel: `Selected`
			})
		]
	});
}
function ee() {
	let [e, t] = (0, D.useState)(!0);
	return (0, k.jsxs)(z, {
		label: `Interface font`,
		size: `sm`,
		isRequired: !0,
		isInvalid: e,
		errorMessage: `Choose a font to continue.`,
		onChange: () => t(!1),
		children: [
			(0, k.jsx)(W, {
				value: `sans`,
				label: `Inter`,
				preview: (0, k.jsx)(`p`, {
					className: `p-3 font-sans text-heading`,
					children: `Aa`
				}),
				selectedLabel: `Selected`
			}),
			(0, k.jsx)(W, {
				value: `mono`,
				label: `JetBrains Mono`,
				preview: (0, k.jsx)(`p`, {
					className: `p-3 font-mono text-heading`,
					children: `Aa`
				}),
				selectedLabel: `Selected`
			}),
			(0, k.jsx)(W, {
				value: `display`,
				label: `Bricolage Grotesque`,
				preview: (0, k.jsx)(`p`, {
					className: `p-3 font-display text-heading`,
					children: `Aa`
				}),
				selectedLabel: `Selected`
			}),
			(0, k.jsx)(W, {
				value: `system`,
				label: `System font (not installed)`,
				isDisabled: !0,
				preview: (0, k.jsx)(`p`, {
					className: `p-3 text-heading`,
					children: `Aa`
				})
			})
		]
	});
}
function te() {
	return (0, k.jsxs)(z, {
		label: `Animations`,
		description: `Each one stops when the system asks for reduced motion.`,
		selectionMode: `multiple`,
		defaultValue: [`fade`],
		size: `sm`,
		children: [
			(0, k.jsx)(W, {
				value: `fade`,
				label: `Fade`,
				preview: (0, k.jsx)(`div`, {
					className: `grid h-14 place-items-center`,
					children: (0, k.jsx)(`span`, { className: `size-6 rounded-md bg-accent motion-safe:animate-pulse` })
				})
			}),
			(0, k.jsx)(W, {
				value: `rise`,
				label: `Rise`,
				preview: (0, k.jsx)(`div`, {
					className: `grid h-14 place-items-center`,
					children: (0, k.jsx)(`span`, { className: `size-6 rounded-md bg-accent motion-safe:animate-rise` })
				})
			}),
			(0, k.jsx)(W, {
				value: `spin`,
				label: `Spinner`,
				preview: (0, k.jsx)(`div`, {
					className: `grid h-14 place-items-center`,
					children: (0, k.jsx)(`span`, { className: `size-6 rounded-full border-2 border-accent border-t-transparent motion-safe:animate-spin` })
				})
			})
		]
	});
}
var ne = {
	title: `Surfaces`,
	description: `The boxes a screen is built from: cards, stat tiles, the welcome banner, settings sections, the list of things that need attention, dividers and selectable tiles. Each one reflows from 320px up and keeps its edges in Windows high contrast.`,
	pl: {
		title: `Powierzchnie`,
		description: `Pudełka, z których składa się ekran: karty, kafelki ze statystykami, baner powitalny, sekcje ustawień, lista rzeczy wymagających uwagi, separatory i kafelki do wyboru. Każdy układa się od 320 px i zachowuje krawędzie w trybie wysokiego kontrastu systemu Windows.`
	},
	demos: [
		{
			name: `Card`,
			components: [
				`Card`,
				`CardHeader`,
				`CardTitle`,
				`CardBody`,
				`CardFooter`
			],
			description: `A bordered surface for one block of content. Use the header, body and footer parts for a titled panel with actions; use the card alone with padding for a simple box.`,
			usage: `<Card as="section" padding="none">
  <CardHeader actions={<Button size="sm" variant="outline">Add</Button>}>
    <CardTitle icon={<Icon name="vcs.repository" />}>Projects</CardTitle>
  </CardHeader>
  <CardBody>…</CardBody>
  <CardFooter><Button variant="ghost">Open all</Button></CardFooter>
</Card>`,
			accessibility: `As a section, article or aside the card becomes a region named by its CardTitle. Pick the heading level that fits the page outline with level. The title icon is hidden from screen readers. Header actions wrap under the title on narrow screens, and long titles break instead of overflowing.`,
			pl: {
				description: `Obramowana powierzchnia dla jednego bloku treści. Użyj części nagłówka, treści i stopki dla panelu z tytułem i akcjami; użyj samej karty z wypełnieniem dla prostego pudełka.`,
				accessibility: `Jako section, article lub aside karta staje się regionem nazwanym przez CardTitle. Poziom nagłówka dobierz do struktury strony przez level. Ikona tytułu jest ukryta przed czytnikami ekranu. Akcje nagłówka zawijają się pod tytuł na wąskich ekranach, a długie tytuły się łamią zamiast wychodzić poza kartę.`
			},
			render: () => (0, k.jsxs)(`div`, {
				className: `flex flex-col gap-4`,
				children: [(0, k.jsxs)(g, {
					as: `section`,
					padding: `none`,
					children: [
						(0, k.jsx)(p, {
							actions: (0, k.jsx)(c, {
								size: `sm`,
								variant: `outline`,
								children: `Add`
							}),
							children: (0, k.jsx)(f, {
								icon: (0, k.jsx)(n, { name: `vcs.repository` }),
								children: `Projects`
							})
						}),
						(0, k.jsx)(m, { children: (0, k.jsx)(`p`, {
							className: `text-muted`,
							children: `Three repositories, two with agents running. A very long name such as skribly-agent-skills-experimental-branch-preview wraps here.`
						}) }),
						(0, k.jsx)(h, { children: (0, k.jsx)(c, {
							variant: `ghost`,
							size: `sm`,
							children: `Open all`
						}) })
					]
				}), (0, k.jsx)(g, {
					variant: `sunken`,
					className: `text-body text-muted`,
					children: `A sunken card for quiet notes.`
				})]
			})
		},
		{
			name: `StatCard`,
			components: [`StatCard`],
			description: `One number with its label, for the row of figures at the top of a dashboard. Give it href or onPress when the number leads to the full list.`,
			usage: `<StatCard
  label="Open tasks"
  value={12}
  icon={<Icon name="nav.tasks" />}
  hint="Across 3 projects"
  href="/tasks"
/>`,
			accessibility: `The label is read before the value. With href or onPress the label becomes the link and the whole card is the target; the value is read as its description, and the focus ring surrounds the card. The icon is hidden and its tone colours only its tile. loading marks the card busy and reads loadingLabel; error shows a glyph and text in place of the value.`,
			pl: {
				description: `Jedna liczba z etykietą, do rzędu wartości na górze pulpitu. Dodaj href albo onPress, gdy liczba prowadzi do pełnej listy.`,
				accessibility: `Etykieta jest odczytywana przed wartością. Z href lub onPress etykieta staje się linkiem, a celem jest cała karta; wartość jest odczytywana jako jej opis, a obwódka fokusa otacza kartę. Ikona jest ukryta, a jej ton koloruje tylko jej kafelek. loading oznacza kartę jako zajętą i odczytuje loadingLabel; error pokazuje znak i tekst zamiast wartości.`
			},
			render: () => (0, k.jsxs)(`ul`, {
				className: `grid grid-cols-[repeat(auto-fill,minmax(min(100%,11rem),1fr))] gap-3`,
				children: [
					(0, k.jsx)(J, {
						as: `li`,
						label: `Agents working now`,
						value: 2,
						icon: (0, k.jsx)(n, { name: `agent.bot` })
					}),
					(0, k.jsx)(J, {
						as: `li`,
						label: `Waiting for your decision`,
						value: 1,
						tone: `warn`,
						icon: (0, k.jsx)(n, { name: `time.clock` }),
						onPress: () => void 0
					}),
					(0, k.jsx)(J, {
						as: `li`,
						label: `Open tasks`,
						value: 12,
						icon: (0, k.jsx)(n, { name: `nav.tasks` }),
						href: `#tasks`,
						trend: (0, k.jsxs)(`span`, {
							className: `inline-flex items-center gap-1 font-medium text-ok`,
							children: [(0, k.jsx)(n, {
								name: `trend.rising`,
								"aria-hidden": `true`,
								className: `size-3.5`
							}), `Up 4%`]
						}),
						hint: `vs last week`
					}),
					(0, k.jsx)(J, {
						as: `li`,
						label: `Your commits in 7 days`,
						value: 0,
						icon: (0, k.jsx)(n, { name: `vcs.commit` }),
						loading: !0,
						loadingLabel: `Loading`
					}),
					(0, k.jsx)(J, {
						as: `li`,
						label: `Agent tokens`,
						value: 0,
						icon: (0, k.jsx)(n, { name: `ai.sparkles` }),
						tone: `danger`,
						error: `Could not load the usage.`
					})
				]
			})
		},
		{
			name: `Hero`,
			components: [`Hero`],
			description: `The welcome banner at the top of a home screen, with a greeting, one paragraph and the first actions. Use it once per page.`,
			usage: `<Hero
  eyebrow="Monday, 9 November"
  title="Good morning. Your agents are ready."
  lead="One window for every coding agent."
  actions={<Button>Start an agent</Button>}
  aside={<AgentChip … />}
/>`,
			accessibility: `A region named by its heading, which is an h1 unless level says otherwise. The art is hidden from screen readers and dropped on narrow containers so the text keeps the width. Actions and the aside wrap; the lead keeps a readable line length.`,
			pl: {
				description: `Baner powitalny na górze ekranu głównego, z powitaniem, jednym akapitem i pierwszymi akcjami. Użyj go raz na stronę.`,
				accessibility: `Region nazwany swoim nagłówkiem, który jest h1, chyba że level mówi inaczej. Grafika jest ukryta przed czytnikami ekranu i pomijana w wąskich kontenerach, aby tekst zachował szerokość. Akcje i element boczny się zawijają; wstęp zachowuje czytelną długość linii.`
			},
			render: () => (0, k.jsx)(P, {
				eyebrow: `Monday, 9 November`,
				title: `Good morning. Your agents are ready.`,
				lead: `One window for every coding agent: tasks from your trackers, skills, pipelines and commits in the style of the project.`,
				actions: (0, k.jsxs)(k.Fragment, { children: [(0, k.jsx)(c, { children: `Start an agent` }), (0, k.jsx)(c, {
					variant: `outline`,
					children: `My tasks`
				})] }),
				aside: (0, k.jsx)(l, {
					tone: `ok`,
					children: `2 agents ready`
				}),
				art: (0, k.jsxs)(`svg`, {
					"data-sk-drawn": `sample`,
					viewBox: `0 0 120 90`,
					className: `h-24 w-32 text-accent`,
					children: [(0, k.jsx)(`rect`, {
						x: `6`,
						y: `10`,
						width: `70`,
						height: `52`,
						rx: `8`,
						fill: `currentColor`,
						opacity: `0.18`
					}), (0, k.jsx)(`rect`, {
						x: `40`,
						y: `28`,
						width: `74`,
						height: `54`,
						rx: `8`,
						fill: `currentColor`,
						opacity: `0.35`
					})]
				})
			})
		},
		{
			name: `SettingsSection`,
			components: [`SettingsSection`],
			description: `A titled block of a settings screen. The rows inside get a line between each; turn framed off to place cards of your own under the heading.`,
			usage: `<SettingsSection
  title="Git accounts"
  description="Hosts the agents push to."
  actions={<Button size="sm">Connect</Button>}
>
  <SettingRow … />
</SettingsSection>`,
			accessibility: `A region named by its heading and described by its description. Pick the heading level with level. Rows keep their own labels: the section never takes the name of a control.`,
			pl: {
				description: `Blok ekranu ustawień z tytułem. Wiersze w środku są rozdzielone linią; wyłącz framed, aby pod nagłówkiem umieścić własne karty.`,
				accessibility: `Region nazwany swoim nagłówkiem i opisany swoim opisem. Poziom nagłówka wybierz przez level. Wiersze zachowują własne etykiety: sekcja nigdy nie przejmuje nazwy kontrolki.`
			},
			render: () => (0, k.jsxs)(K, {
				title: `Git accounts`,
				description: `Hosts the agents push to and read activity from.`,
				actions: (0, k.jsx)(c, {
					size: `sm`,
					variant: `outline`,
					children: `Connect`
				}),
				children: [(0, k.jsxs)(`div`, {
					className: `flex flex-wrap items-center gap-3 py-3`,
					children: [(0, k.jsxs)(`div`, {
						className: `min-w-0 flex-[1_1_12rem]`,
						children: [(0, k.jsx)(`p`, {
							className: `font-medium`,
							children: `Default branch`
						}), (0, k.jsx)(`p`, {
							className: `text-caption text-muted`,
							children: `Used when a project has none.`
						})]
					}), (0, k.jsx)(u, {
						label: `Branch name`,
						defaultValue: `main`,
						className: `w-full max-w-48`
					})]
				}), (0, k.jsxs)(`div`, {
					className: `flex flex-wrap items-center gap-3 py-3`,
					children: [(0, k.jsxs)(`div`, {
						className: `min-w-0 flex-[1_1_12rem]`,
						children: [(0, k.jsx)(`p`, {
							className: `font-medium`,
							children: `Remove all accounts`
						}), (0, k.jsx)(`p`, {
							className: `text-caption text-muted`,
							children: `Tokens are deleted from this device.`
						})]
					}), (0, k.jsx)(c, {
						variant: `danger`,
						size: `sm`,
						children: `Remove`
					})]
				})]
			})
		},
		{
			name: `AttentionItem`,
			components: [`AttentionItem`, `AttentionList`],
			description: `A short list of what needs the reader today: a count, what it is, why, and the way there. Mark blocking items urgent. When the list is empty, pass an empty state with the next step.`,
			usage: `<AttentionList aria-label="Needs you">
  <AttentionItem count={3} label="Drafts" note="Waiting for review" href="/drafts" actionLabel="Review" />
  <AttentionItem count={1} label="Failed sync" urgent urgentLabel="Urgent" href="/sync" />
</AttentionList>`,
			accessibility: `Each row is one link named by its count and label and described by the note, so a links list still makes sense. The whole row is the target and shows the focus ring. Urgent rows add a warning glyph and the urgentLabel word, never red alone. The action hint is hidden from screen readers.`,
			pl: {
				description: `Krótka lista tego, czego czytelnik potrzebuje dzisiaj: liczba, czego dotyczy, dlaczego i droga do celu. Pozycje blokujące oznacz jako urgent. Gdy lista jest pusta, przekaż pusty stan z następnym krokiem.`,
				accessibility: `Każdy wiersz jest jednym linkiem nazwanym przez liczbę i etykietę i opisanym przez notatkę, więc lista linków nadal ma sens. Celem jest cały wiersz, który pokazuje obwódkę fokusa. Pilne wiersze dodają znak ostrzeżenia i słowo z urgentLabel, nigdy samą czerwień. Podpowiedź akcji jest ukryta przed czytnikami ekranu.`
			},
			render: () => (0, k.jsxs)(g, {
				padding: `none`,
				children: [
					(0, k.jsxs)(A, {
						"aria-label": `Needs you`,
						children: [
							(0, k.jsx)(j, {
								count: 3,
								label: `Drafts`,
								note: `Written but not published.`,
								href: `#drafts`,
								actionLabel: `Review`
							}),
							(0, k.jsx)(j, {
								count: 1,
								label: `Tracker sync failed`,
								note: `The token expired yesterday.`,
								urgent: !0,
								urgentLabel: `Urgent`,
								href: `#sync`,
								actionLabel: `Review`
							}),
							(0, k.jsx)(j, {
								count: 12,
								label: `Comments waiting for a reply on pull requests across three repositories`,
								onPress: () => void 0,
								actionLabel: `Review`
							})
						]
					}),
					(0, k.jsx)(M, {}),
					(0, k.jsx)(A, { empty: (0, k.jsx)(`p`, {
						className: `p-4 text-body text-muted`,
						children: `Nothing needs you today.`
					}) })
				]
			})
		},
		{
			name: `SwipeRow`,
			components: [`SwipeRow`],
			description: `A collection of cards that becomes one swipe row on phones, with previous and next buttons, a position counter and a hint, and a plain grid from the md breakpoint up. Use it for cards that would otherwise stack into a long column.`,
			usage: `<SwipeRow
  label="Plans"
  previousLabel="Previous plan"
  nextLabel="Next plan"
  hint="Swipe for more"
  positionLabel={(current, total) => current + ' / ' + total}
  columns={3}
>
  <Card>…</Card>
  <Card>…</Card>
</SwipeRow>`,
			accessibility: `On phones the row is a focusable region named by label: Arrow Left and Right move one card, Home and End go to the ends. The buttons disable at each end and scroll one card; motion is smooth unless the system or the accessibility panel asks for less. The counter is decoration. From md up there is no region, tabindex, buttons or hint. Built to WCAG 2.2 AA as a target.`,
			pl: {
				description: `Zbiór kart, który na telefonach staje się jednym rzędem do przesuwania, z przyciskami poprzedni i następny, licznikiem pozycji i podpowiedzią, a od breakpointu md zwykłą siatką. Użyj go dla kart, które inaczej ułożyłyby się w długą kolumnę.`,
				accessibility: `Na telefonach rząd jest fokusowalnym regionem nazwanym przez label: strzałki w lewo i w prawo przesuwają o jedną kartę, Home i End prowadzą na końce. Przyciski wyłączają się na krańcach i przesuwają o jedną kartę; ruch jest płynny, chyba że system lub panel dostępności prosi o mniej. Licznik jest dekoracją. Od md nie ma regionu, tabindex, przycisków ani podpowiedzi. Zbudowane z celem zgodności z WCAG 2.2 AA.`
			},
			render: () => (0, k.jsx)(Z, {})
		},
		{
			name: `Divider`,
			components: [`Divider`],
			description: `A line between groups of content, across or upright, with an optional word such as Or in the middle.`,
			usage: `<Divider />
<Divider label="Or" />
<Divider orientation="vertical" />`,
			accessibility: `A plain divider is a separator with its orientation. A labelled one reads its word as text and hides the lines. Lines are borders, so they stay visible in Windows high contrast.`,
			pl: {
				description: `Linia między grupami treści, pozioma lub pionowa, z opcjonalnym słowem w środku, na przykład Or.`,
				accessibility: `Zwykły separator jest elementem separator z orientacją. Separator z etykietą odczytuje swoje słowo jako tekst i ukrywa linie. Linie są ramkami, więc pozostają widoczne w trybie wysokiego kontrastu systemu Windows.`
			},
			render: () => (0, k.jsxs)(`div`, {
				className: `flex flex-col gap-4 text-body`,
				children: [
					(0, k.jsx)(`p`, { children: `Above` }),
					(0, k.jsx)(M, {}),
					(0, k.jsx)(M, { label: `Or` }),
					(0, k.jsxs)(`div`, {
						className: `flex h-8 items-center gap-2`,
						children: [
							(0, k.jsx)(`span`, { children: `Left` }),
							(0, k.jsx)(M, { orientation: `vertical` }),
							(0, k.jsx)(`span`, { children: `Right` })
						]
					})
				]
			})
		},
		{
			name: `OptionCard`,
			components: [`OptionCard`, `OptionCardGroup`],
			description: `Selectable tiles with a preview, for choices people judge by eye: themes, fonts, animations. One choice makes a radio group, selectionMode="multiple" a checkbox group.`,
			usage: `<OptionCardGroup label="Theme" value={theme} onChange={setTheme}>
  <OptionCard value="light" label="Light" preview={<ThemeSwatch />} selectedLabel="Selected" />
  <OptionCard value="dark" label="Dark" preview={<ThemeSwatch />} selectedLabel="Selected" />
</OptionCardGroup>`,
			accessibility: `Built on React Aria radio and checkbox groups: Tab enters the group, arrow keys move, Space selects, and disabled tiles are skipped. The label names the group and each tile is named by its label and described by its description; previews are hidden. The chosen tile gets a check mark, an accent border and the selectedLabel word, and Highlight in Windows high contrast. Errors show under the grid and are linked to the group.`,
			pl: {
				description: `Kafelki do wyboru z podglądem, dla wyborów ocenianych na oko: motywy, fonty, animacje. Jeden wybór tworzy grupę przycisków opcji, a selectionMode="multiple" grupę pól wyboru.`,
				accessibility: `Zbudowane na grupach przycisków opcji i pól wyboru z React Aria: Tab wchodzi do grupy, klawisze strzałek przesuwają, Spacja zaznacza, a wyłączone kafelki są pomijane. Etykieta nazywa grupę, a każdy kafelek jest nazwany swoją etykietą i opisany swoim opisem; podglądy są ukryte. Wybrany kafelek dostaje znacznik, ramkę w kolorze akcentu i słowo z selectedLabel, a w trybie wysokiego kontrastu systemu Windows kolor Highlight. Błędy pokazują się pod siatką i są powiązane z grupą.`
			},
			render: () => (0, k.jsxs)(`div`, {
				className: `flex flex-col gap-6`,
				children: [
					(0, k.jsx)($, {}),
					(0, k.jsx)(ee, {}),
					(0, k.jsx)(te, {})
				]
			})
		}
	]
};
export { Y as t };
