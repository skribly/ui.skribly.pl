import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { t as n } from "./bot.Bh-ZxMwB.js";
import { t as r } from "./clock.BZU0zYJv.js";
import { t as i } from "./folder-git-2.s30c0NLA.js";
import { g as a, t as o } from "./createLucideIcon.npgQlVHx.js";
import { t as s } from "./list-todo.CcPW_XkD.js";
import { t as c } from "./sparkles.DwzFOMRA.js";
import { t as l } from "./trending-up.DDaXoX1G.js";
import { n as u } from "./react-dom.B9zIfLd2.js";
import { t as d } from "./Button.DRxd_7vr.js";
import { t as f } from "./Badge.Cwl75Dkx.js";
import { t as p } from "./TextField.BRNO9ptc.js";
import { O as m } from "./doc.D2PtmWN6.js";
import { t as ee } from "./triangle-exclamation-point.BJJ-nXau.js";
import { t as h } from "./Link.DyGbagCu.js";
import { n as g, t as _ } from "./jsx-runtime.yrTYNGQT.js";
import { a as v, i as y, n as b, r as te, t as x } from "./Card.BXBs30ob.js";
import { t as S } from "./Separator.BXwoAIpL.js";
import { t as C } from "./check.CUpC8LgP.js";
import { t as w } from "./circle-exclamation-point.DRCkYbzg.js";
import { i as T, n as E, r as D } from "./Checkbox.BCm1SjuK.js";
import { n as O } from "./useFormReset.B5f8O4ea.js";
import { n as k, r as ne, t as re } from "./RadioGroup.3hBt4gq8.js";
import { t as A } from "./Text.DxhsPAdy.js";
var j = {
	name: `git-commit-horizontal`,
	size: 24,
	node: [
		[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `3`,
			key: `1v7zrd`
		}],
		[`line`, {
			x1: `3`,
			x2: `9`,
			y1: `12`,
			y2: `12`,
			key: `1dyftd`
		}],
		[`line`, {
			x1: `15`,
			x2: `21`,
			y1: `12`,
			y2: `12`,
			key: `oup4p8`
		}]
	],
	aliases: [`git-commit`]
};
j.node;
var M = o(j), N = t(u(), 1), P = `outline-none after:absolute after:inset-0 after:rounded-[inherit]`, F = _();
function I({ empty: e, className: t, children: n, ...r }) {
	return N.Children.toArray(n).length === 0 ? e ? (0, F.jsx)(`div`, {
		...r,
		className: g(`min-w-0`, t),
		children: e
	}) : null : (0, F.jsx)(`ul`, {
		...r,
		className: g(`@container min-w-0 divide-y divide-border`, t),
		children: n
	});
}
function L({ count: e, label: t, note: n, href: r, onPress: i, urgent: a = !1, urgentLabel: o, actionLabel: s, className: c }) {
	let l = (0, N.useId)(), u = (0, N.useId)(), d = (0, N.useId)(), f = (0, N.useId)(), p = [a && o ? f : null, n ? d : null].filter(Boolean).join(` `), _ = r !== void 0 || i !== void 0, v = (0, F.jsx)(`span`, {
		id: u,
		className: `font-medium break-words text-fg`,
		children: t
	});
	return (0, F.jsxs)(`li`, {
		className: g(`relative flex min-w-0 items-center gap-3 px-4 py-3`, _ && g(`transition-colors duration-(--sk-duration-fast) has-[[data-hovered]]:bg-hover has-[[data-pressed]]:bg-selected`, `has-[[data-focus-visible]]:outline-solid has-[[data-focus-visible]]:outline-(length:--sk-focus-width) has-[[data-focus-visible]]:outline-focus has-[[data-focus-visible]]:-outline-offset-(--sk-focus-width)`), c),
		children: [
			(0, F.jsxs)(`span`, {
				id: l,
				className: g(`inline-flex h-9 min-w-9 shrink-0 items-center justify-center gap-1 rounded-md px-2 text-body font-semibold tabular-nums ring-1 ring-inset forced-colors:border forced-colors:border-border`, a ? `bg-danger-soft text-danger ring-danger` : `bg-accent-soft text-accent-text ring-accent-ring`),
				children: [a ? (0, F.jsx)(ee, {
					"aria-hidden": `true`,
					className: `size-3.5 shrink-0`
				}) : null, e]
			}),
			(0, F.jsxs)(`span`, {
				className: `flex min-w-0 flex-1 flex-col gap-0.5 text-body`,
				children: [(0, F.jsxs)(`span`, {
					className: `flex min-w-0 flex-wrap items-baseline gap-x-2`,
					children: [_ ? (0, F.jsx)(h, {
						...r === void 0 ? {} : { href: r },
						...i === void 0 ? {} : { onPress: i },
						"aria-labelledby": `${l} ${u}`,
						...p ? { "aria-describedby": p } : {},
						className: g(`min-w-0 underline-offset-2 data-hovered:underline`, P),
						children: v
					}) : v, a && o ? (0, F.jsx)(`span`, {
						id: f,
						className: `text-caption font-semibold text-danger`,
						children: o
					}) : null]
				}), n ? (0, F.jsx)(`span`, {
					id: d,
					className: `text-caption break-words text-muted`,
					children: n
				}) : null]
			}),
			_ && s ? (0, F.jsxs)(`span`, {
				"aria-hidden": `true`,
				className: `hidden shrink-0 items-center gap-1 text-caption font-medium text-accent-text @sm:inline-flex`,
				children: [s, (0, F.jsx)(m, { className: `size-3.5` })]
			}) : null
		]
	});
}
function R({ orientation: e = `horizontal`, label: t, className: n }) {
	return t && e === `horizontal` ? (0, F.jsxs)(`div`, {
		className: g(`flex min-w-0 items-center gap-3 text-label font-semibold text-muted uppercase`, n),
		children: [
			(0, F.jsx)(`span`, {
				"aria-hidden": `true`,
				className: `min-w-4 flex-1 border-t border-border`
			}),
			(0, F.jsx)(`span`, {
				className: `max-w-[80%] text-center break-words`,
				children: t
			}),
			(0, F.jsx)(`span`, {
				"aria-hidden": `true`,
				className: `min-w-4 flex-1 border-t border-border`
			})
		]
	}) : (0, F.jsx)(S, {
		orientation: e,
		className: g(`shrink-0 border-0 border-border`, e === `vertical` ? `mx-1 w-0 self-stretch border-s` : `my-0 h-0 w-full border-t`, n)
	});
}
var z = {
	1: `h1`,
	2: `h2`,
	3: `h3`
};
function B({ title: e, eyebrow: t, lead: n, actions: r, aside: i, art: a, level: o = 1, className: s, ...c }) {
	let l = (0, N.useId)(), u = z[o];
	return (0, F.jsx)(`section`, {
		"aria-labelledby": l,
		...c,
		className: g(`@container relative min-w-0 overflow-hidden rounded-xl border border-border bg-linear-135 from-accent-soft to-side to-60% text-fg`, s),
		children: (0, F.jsxs)(`div`, {
			className: `grid gap-6 p-5 @md:p-7 @3xl:grid-cols-[minmax(0,1fr)_auto] @3xl:items-center`,
			children: [(0, F.jsxs)(`div`, {
				className: `min-w-0`,
				children: [
					t ? (0, F.jsx)(`p`, {
						className: `mb-1 text-caption font-medium break-words text-muted`,
						children: t
					}) : null,
					(0, F.jsx)(u, {
						id: l,
						className: `text-page font-semibold break-words text-fg @lg:text-display`,
						children: e
					}),
					n ? (0, F.jsx)(`div`, {
						className: `mt-2 max-w-[65ch] text-body break-words text-muted`,
						children: n
					}) : null,
					r || i ? (0, F.jsxs)(`div`, {
						className: `mt-5 flex flex-wrap items-center gap-x-4 gap-y-3`,
						children: [r ? (0, F.jsx)(`div`, {
							className: `flex flex-wrap items-center gap-2`,
							children: r
						}) : null, i ? (0, F.jsx)(`div`, {
							className: `flex min-w-0 flex-wrap items-center gap-1.5 @3xl:ms-auto`,
							children: i
						}) : null]
					}) : null
				]
			}), a ? (0, F.jsx)(`div`, {
				"aria-hidden": `true`,
				className: `hidden @3xl:block`,
				children: a
			}) : null]
		})
	});
}
var V = (0, N.createContext)(`single`), H = {
	sm: `grid-cols-[repeat(auto-fill,minmax(min(100%,8.5rem),1fr))]`,
	md: `grid-cols-[repeat(auto-fill,minmax(min(100%,12rem),1fr))]`,
	lg: `grid-cols-[repeat(auto-fill,minmax(min(100%,16rem),1fr))]`
}, U = `flex min-w-0 flex-col gap-2`;
function W({ label: e, description: t, errorMessage: n, size: r, children: i }) {
	let o = (0, N.useCallback)((e) => (0, F.jsxs)(F.Fragment, { children: [(0, F.jsx)(w, {
		"aria-hidden": `true`,
		className: `mt-px size-3.5 shrink-0`
	}), (0, F.jsx)(`span`, {
		className: `min-w-0 break-words`,
		children: n ?? e.validationErrors.join(` `)
	})] }), [n]);
	return (0, F.jsxs)(F.Fragment, { children: [
		(0, F.jsx)(a, {
			className: `text-body font-semibold text-fg`,
			children: e
		}),
		t ? (0, F.jsx)(A, {
			slot: `description`,
			className: `-mt-1 text-caption text-muted`,
			children: t
		}) : null,
		(0, F.jsx)(`div`, {
			className: g(`grid gap-3`, H[r]),
			children: i
		}),
		(0, F.jsx)(O, {
			className: `flex items-start gap-1.5 text-caption font-medium text-danger`,
			children: o
		})
	] });
}
function G(e) {
	let { label: t, description: n, errorMessage: r, isInvalid: i, isDisabled: a, isRequired: o, name: s, size: c, className: l, children: u } = e, d = {
		...i === void 0 ? {} : { isInvalid: i },
		...a === void 0 ? {} : { isDisabled: a },
		...o === void 0 ? {} : { isRequired: o },
		...s === void 0 ? {} : { name: s },
		className: g(U, l)
	}, f = (0, F.jsx)(W, {
		label: t,
		description: n,
		errorMessage: r,
		size: c ?? `md`,
		children: u
	});
	return e.selectionMode === `multiple` ? (0, F.jsx)(V.Provider, {
		value: `multiple`,
		children: (0, F.jsx)(E, {
			...d,
			...e.value === void 0 ? {} : { value: e.value },
			...e.defaultValue === void 0 ? {} : { defaultValue: e.defaultValue },
			...e.onChange === void 0 ? {} : { onChange: e.onChange },
			children: f
		})
	}) : (0, F.jsx)(V.Provider, {
		value: `single`,
		children: (0, F.jsx)(k, {
			...d,
			orientation: `horizontal`,
			...e.value === void 0 ? {} : { value: e.value },
			...e.defaultValue === void 0 ? {} : { defaultValue: e.defaultValue },
			...e.onChange === void 0 ? {} : { onChange: e.onChange },
			children: f
		})
	});
}
var K = g(`group/tile relative flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-surface text-fg`, `transition-[border-color,box-shadow,transform] duration-(--sk-duration-fast)`, `has-[[data-hovered]]:border-border-strong has-[[data-hovered]]:shadow-md motion-safe:has-[[data-hovered]]:-translate-y-0.5`, `motion-safe:has-[[data-pressed]]:translate-y-0`, `data-selected:border-accent data-selected:ring-2 data-selected:ring-accent-ring forced-colors:data-selected:border-[Highlight]`, `data-invalid:border-danger`, `data-disabled:cursor-not-allowed data-disabled:opacity-60 data-disabled:has-[[data-hovered]]:translate-y-0 data-disabled:has-[[data-hovered]]:shadow-none`, `has-[[data-focus-visible]]:outline-solid has-[[data-focus-visible]]:outline-(length:--sk-focus-width) has-[[data-focus-visible]]:outline-focus has-[[data-focus-visible]]:outline-offset-(--sk-focus-offset)`), q = `flex min-w-0 cursor-pointer items-start gap-2 font-medium outline-none after:absolute after:inset-0 after:rounded-[inherit] data-disabled:cursor-not-allowed`, J = {
	single: `mt-0.5 grid size-4 shrink-0 place-items-center rounded-full border border-border-strong bg-input group-data-selected/tile:border-accent group-data-selected/tile:bg-accent`,
	multiple: `mt-0.5 grid size-4 shrink-0 place-items-center rounded-sm border border-border-strong bg-input group-data-selected/tile:border-accent group-data-selected/tile:bg-accent`
};
function Y({ label: e, description: t, badge: n, selectedLabel: r, mode: i }) {
	return (0, F.jsxs)(`div`, {
		className: `flex min-w-0 flex-1 flex-col gap-1 p-3`,
		children: [
			(0, F.jsxs)(`div`, {
				className: `flex min-w-0 flex-wrap items-start gap-x-2 gap-y-1`,
				children: [(0, F.jsxs)(i === `multiple` ? D : ne, {
					className: g(q, `flex-1 text-body`),
					children: [(0, F.jsx)(`span`, {
						"aria-hidden": `true`,
						className: J[i],
						children: (0, F.jsx)(C, {
							className: `size-3 text-accent-fg opacity-0 group-data-selected/tile:opacity-100`,
							strokeWidth: 3
						})
					}), (0, F.jsx)(`span`, {
						className: `min-w-0 break-words`,
						children: e
					})]
				}), n ? (0, F.jsx)(`span`, {
					className: `shrink-0`,
					children: n
				}) : null]
			}),
			t ? (0, F.jsx)(A, {
				slot: `description`,
				className: `ps-6 text-caption break-words text-muted`,
				children: t
			}) : null,
			r ? (0, F.jsxs)(`span`, {
				"aria-hidden": `true`,
				className: `hidden items-center gap-1 ps-6 text-caption font-semibold text-accent-text group-data-selected/tile:flex`,
				children: [(0, F.jsx)(C, { className: `size-3.5` }), r]
			}) : null
		]
	});
}
function X({ value: e, label: t, description: n, preview: r, badge: i, selectedLabel: a, isDisabled: o, className: s }) {
	let c = (0, N.useContext)(V);
	return (0, F.jsxs)(c === `multiple` ? T : re, {
		value: e,
		...o === void 0 ? {} : { isDisabled: o },
		className: g(K, s),
		children: [r ? (0, F.jsx)(`div`, {
			"aria-hidden": `true`,
			className: `min-w-0 overflow-hidden border-b border-border bg-sunken`,
			children: r
		}) : null, (0, F.jsx)(Y, {
			label: t,
			description: n,
			badge: i,
			selectedLabel: a,
			mode: c
		})]
	});
}
var ie = {
	2: `h2`,
	3: `h3`,
	4: `h4`
};
function ae({ title: e, description: t, actions: n, level: r = 2, framed: i = !0, className: a, children: o, ...s }) {
	let c = (0, N.useId)(), l = (0, N.useId)(), u = ie[r];
	return (0, F.jsxs)(`section`, {
		"aria-labelledby": c,
		...t ? { "aria-describedby": l } : {},
		...s,
		className: g(`flex min-w-0 flex-col gap-3`, a),
		children: [(0, F.jsxs)(`div`, {
			className: `flex flex-wrap items-end gap-x-4 gap-y-2`,
			children: [(0, F.jsxs)(`div`, {
				className: `min-w-0 flex-[1_1_16rem]`,
				children: [(0, F.jsx)(u, {
					id: c,
					className: `text-title font-semibold break-words text-fg`,
					children: e
				}), t ? (0, F.jsx)(`p`, {
					id: l,
					className: `mt-0.5 max-w-[70ch] text-caption break-words text-muted`,
					children: t
				}) : null]
			}), n ? (0, F.jsx)(`div`, {
				className: `flex flex-wrap items-center gap-2`,
				children: n
			}) : null]
		}), i ? (0, F.jsx)(`div`, {
			className: `@container min-w-0 divide-y divide-border rounded-lg border border-border bg-surface px-4 text-body text-fg`,
			children: o
		}) : (0, F.jsx)(`div`, {
			className: `@container flex min-w-0 flex-col gap-3`,
			children: o
		})]
	});
}
var oe = {
	neutral: `bg-sunken text-muted`,
	accent: `bg-accent-soft text-accent-text`,
	ok: `bg-ok-soft text-ok`,
	warn: `bg-warn-soft text-warn`,
	danger: `bg-danger-soft text-danger`,
	info: `bg-info-soft text-info`
};
function Z({ label: e, value: t, icon: n, tone: r = `accent`, hint: i, trend: a, href: o, onPress: s, loading: c = !1, loadingLabel: l, error: u, as: d = `div`, className: f }) {
	let p = (0, N.useId)(), m = o !== void 0 || s !== void 0;
	return (0, F.jsxs)(d, {
		...c ? { "aria-busy": !0 } : {},
		className: g(`relative flex min-w-0 flex-col gap-1 rounded-lg border border-border bg-surface p-4 text-fg shadow-sm`, m && g(`transition-[border-color,box-shadow] duration-(--sk-duration-fast) has-[[data-hovered]]:border-border-strong has-[[data-hovered]]:shadow-md has-[[data-pressed]]:bg-hover`, `has-[[data-focus-visible]]:outline-solid has-[[data-focus-visible]]:outline-(length:--sk-focus-width) has-[[data-focus-visible]]:outline-focus has-[[data-focus-visible]]:outline-offset-(--sk-focus-offset)`), f),
		children: [
			(0, F.jsxs)(`div`, {
				className: `flex items-start gap-3`,
				children: [(0, F.jsx)(`p`, {
					className: `min-w-0 flex-1 text-body break-words text-muted`,
					children: m ? (0, F.jsx)(h, {
						...o === void 0 ? {} : { href: o },
						...s === void 0 ? {} : { onPress: s },
						"aria-describedby": p,
						className: g(`text-muted underline-offset-2 data-hovered:text-fg data-hovered:underline`, P),
						children: e
					}) : e
				}), n ? (0, F.jsx)(`span`, {
					"aria-hidden": `true`,
					className: g(`grid size-8 shrink-0 place-items-center rounded-md [&_svg]:size-4`, oe[r]),
					children: n
				}) : null]
			}),
			(0, F.jsx)(`div`, {
				id: p,
				className: `min-w-0`,
				children: c ? (0, F.jsxs)(F.Fragment, { children: [(0, F.jsx)(`span`, {
					"aria-hidden": `true`,
					className: `my-1 block h-7 w-20 rounded-md bg-hover motion-safe:animate-pulse forced-colors:border forced-colors:border-border`
				}), l ? (0, F.jsx)(`span`, {
					className: `sr-only`,
					children: l
				}) : null] }) : u ? (0, F.jsxs)(`p`, {
					className: `flex items-start gap-1.5 text-body font-medium text-danger`,
					children: [(0, F.jsx)(w, {
						"aria-hidden": `true`,
						className: `mt-0.5 size-4 shrink-0`
					}), (0, F.jsx)(`span`, {
						className: `min-w-0 break-words`,
						children: u
					})]
				}) : (0, F.jsx)(`p`, {
					className: `text-display leading-tight font-bold break-words text-fg tabular-nums`,
					children: t
				})
			}),
			a || i ? (0, F.jsxs)(`div`, {
				className: `flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-caption text-muted`,
				children: [a, i ? (0, F.jsx)(`span`, {
					className: `min-w-0 break-words`,
					children: i
				}) : null]
			}) : null
		]
	});
}
var se = e({ default: () => ue });
function Q({ theme: e }) {
	return (0, F.jsxs)(`div`, {
		"data-theme": e,
		className: `grid h-20 grid-cols-[1.5rem_1fr]`,
		children: [(0, F.jsxs)(`div`, {
			className: `flex flex-col gap-1 bg-side px-1 py-2`,
			children: [
				(0, F.jsx)(`span`, { className: `h-1.5 rounded-sm bg-accent` }),
				(0, F.jsx)(`span`, { className: `h-1.5 rounded-sm bg-border-strong` }),
				(0, F.jsx)(`span`, { className: `h-1.5 rounded-sm bg-border-strong` })
			]
		}), (0, F.jsxs)(`div`, {
			className: `flex flex-col gap-1.5 bg-bg p-2`,
			children: [
				(0, F.jsx)(`span`, { className: `h-1.5 w-2/3 rounded-sm bg-fg` }),
				(0, F.jsx)(`span`, { className: `h-1.5 w-1/2 rounded-sm bg-muted` }),
				(0, F.jsx)(`span`, { className: `h-1.5 w-1/3 rounded-sm bg-accent` })
			]
		})]
	});
}
function ce() {
	let [e, t] = (0, N.useState)(`light`);
	return (0, F.jsxs)(G, {
		label: `Theme`,
		description: `Applies to every window.`,
		value: e,
		onChange: t,
		children: [
			(0, F.jsx)(X, {
				value: `light`,
				label: `Light`,
				description: `Warm paper`,
				preview: (0, F.jsx)(Q, { theme: `light` }),
				selectedLabel: `Selected`
			}),
			(0, F.jsx)(X, {
				value: `dark`,
				label: `Dark`,
				description: `Easy at night`,
				preview: (0, F.jsx)(Q, { theme: `dark` }),
				selectedLabel: `Selected`
			}),
			(0, F.jsx)(X, {
				value: `contrast`,
				label: `High contrast`,
				description: `Strongest edges and text`,
				badge: (0, F.jsx)(f, {
					tone: `info`,
					children: `AAA`
				}),
				preview: (0, F.jsx)(Q, { theme: `contrast` }),
				selectedLabel: `Selected`
			})
		]
	});
}
function le() {
	let [e, t] = (0, N.useState)(!0);
	return (0, F.jsxs)(G, {
		label: `Interface font`,
		size: `sm`,
		isRequired: !0,
		isInvalid: e,
		errorMessage: `Choose a font to continue.`,
		onChange: () => t(!1),
		children: [
			(0, F.jsx)(X, {
				value: `sans`,
				label: `Inter`,
				preview: (0, F.jsx)(`p`, {
					className: `p-3 font-sans text-heading`,
					children: `Aa`
				}),
				selectedLabel: `Selected`
			}),
			(0, F.jsx)(X, {
				value: `mono`,
				label: `JetBrains Mono`,
				preview: (0, F.jsx)(`p`, {
					className: `p-3 font-mono text-heading`,
					children: `Aa`
				}),
				selectedLabel: `Selected`
			}),
			(0, F.jsx)(X, {
				value: `display`,
				label: `Bricolage Grotesque`,
				preview: (0, F.jsx)(`p`, {
					className: `p-3 font-display text-heading`,
					children: `Aa`
				}),
				selectedLabel: `Selected`
			}),
			(0, F.jsx)(X, {
				value: `system`,
				label: `System font (not installed)`,
				isDisabled: !0,
				preview: (0, F.jsx)(`p`, {
					className: `p-3 text-heading`,
					children: `Aa`
				})
			})
		]
	});
}
function $() {
	return (0, F.jsxs)(G, {
		label: `Animations`,
		description: `Each one stops when the system asks for reduced motion.`,
		selectionMode: `multiple`,
		defaultValue: [`fade`],
		size: `sm`,
		children: [
			(0, F.jsx)(X, {
				value: `fade`,
				label: `Fade`,
				preview: (0, F.jsx)(`div`, {
					className: `grid h-14 place-items-center`,
					children: (0, F.jsx)(`span`, { className: `size-6 rounded-md bg-accent motion-safe:animate-pulse` })
				})
			}),
			(0, F.jsx)(X, {
				value: `rise`,
				label: `Rise`,
				preview: (0, F.jsx)(`div`, {
					className: `grid h-14 place-items-center`,
					children: (0, F.jsx)(`span`, { className: `size-6 rounded-md bg-accent motion-safe:animate-rise` })
				})
			}),
			(0, F.jsx)(X, {
				value: `spin`,
				label: `Spinner`,
				preview: (0, F.jsx)(`div`, {
					className: `grid h-14 place-items-center`,
					children: (0, F.jsx)(`span`, { className: `size-6 rounded-full border-2 border-accent border-t-transparent motion-safe:animate-spin` })
				})
			})
		]
	});
}
var ue = {
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
    <CardTitle icon={<FolderGit2 />}>Projects</CardTitle>
  </CardHeader>
  <CardBody>…</CardBody>
  <CardFooter><Button variant="ghost">Open all</Button></CardFooter>
</Card>`,
			accessibility: `As a section, article or aside the card becomes a region named by its CardTitle. Pick the heading level that fits the page outline with level. The title icon is hidden from screen readers. Header actions wrap under the title on narrow screens, and long titles break instead of overflowing.`,
			pl: {
				description: `Obramowana powierzchnia dla jednego bloku treści. Użyj części nagłówka, treści i stopki dla panelu z tytułem i akcjami; użyj samej karty z wypełnieniem dla prostego pudełka.`,
				accessibility: `Jako section, article lub aside karta staje się regionem nazwanym przez CardTitle. Poziom nagłówka dobierz do struktury strony przez level. Ikona tytułu jest ukryta przed czytnikami ekranu. Akcje nagłówka zawijają się pod tytuł na wąskich ekranach, a długie tytuły się łamią zamiast wychodzić poza kartę.`
			},
			render: () => (0, F.jsxs)(`div`, {
				className: `flex flex-col gap-4`,
				children: [(0, F.jsxs)(x, {
					as: `section`,
					padding: `none`,
					children: [
						(0, F.jsx)(y, {
							actions: (0, F.jsx)(d, {
								size: `sm`,
								variant: `outline`,
								children: `Add`
							}),
							children: (0, F.jsx)(v, {
								icon: (0, F.jsx)(i, {}),
								children: `Projects`
							})
						}),
						(0, F.jsx)(b, { children: (0, F.jsx)(`p`, {
							className: `text-muted`,
							children: `Three repositories, two with agents running. A very long name such as skribly-agent-skills-experimental-branch-preview wraps here.`
						}) }),
						(0, F.jsx)(te, { children: (0, F.jsx)(d, {
							variant: `ghost`,
							size: `sm`,
							children: `Open all`
						}) })
					]
				}), (0, F.jsx)(x, {
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
  icon={<ListTodo />}
  hint="Across 3 projects"
  href="/tasks"
/>`,
			accessibility: `The label is read before the value. With href or onPress the label becomes the link and the whole card is the target; the value is read as its description, and the focus ring surrounds the card. The icon is hidden and its tone colours only its tile. loading marks the card busy and reads loadingLabel; error shows a glyph and text in place of the value.`,
			pl: {
				description: `Jedna liczba z etykietą, do rzędu wartości na górze pulpitu. Dodaj href albo onPress, gdy liczba prowadzi do pełnej listy.`,
				accessibility: `Etykieta jest odczytywana przed wartością. Z href lub onPress etykieta staje się linkiem, a celem jest cała karta; wartość jest odczytywana jako jej opis, a obwódka fokusa otacza kartę. Ikona jest ukryta, a jej ton koloruje tylko jej kafelek. loading oznacza kartę jako zajętą i odczytuje loadingLabel; error pokazuje znak i tekst zamiast wartości.`
			},
			render: () => (0, F.jsxs)(`ul`, {
				className: `grid grid-cols-[repeat(auto-fill,minmax(min(100%,11rem),1fr))] gap-3`,
				children: [
					(0, F.jsx)(Z, {
						as: `li`,
						label: `Agents working now`,
						value: 2,
						icon: (0, F.jsx)(n, {})
					}),
					(0, F.jsx)(Z, {
						as: `li`,
						label: `Waiting for your decision`,
						value: 1,
						tone: `warn`,
						icon: (0, F.jsx)(r, {}),
						onPress: () => void 0
					}),
					(0, F.jsx)(Z, {
						as: `li`,
						label: `Open tasks`,
						value: 12,
						icon: (0, F.jsx)(s, {}),
						href: `#tasks`,
						trend: (0, F.jsxs)(`span`, {
							className: `inline-flex items-center gap-1 font-medium text-ok`,
							children: [(0, F.jsx)(l, {
								"aria-hidden": `true`,
								className: `size-3.5`
							}), `Up 4%`]
						}),
						hint: `vs last week`
					}),
					(0, F.jsx)(Z, {
						as: `li`,
						label: `Your commits in 7 days`,
						value: 0,
						icon: (0, F.jsx)(M, {}),
						loading: !0,
						loadingLabel: `Loading`
					}),
					(0, F.jsx)(Z, {
						as: `li`,
						label: `Agent tokens`,
						value: 0,
						icon: (0, F.jsx)(c, {}),
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
			render: () => (0, F.jsx)(B, {
				eyebrow: `Monday, 9 November`,
				title: `Good morning. Your agents are ready.`,
				lead: `One window for every coding agent: tasks from your trackers, skills, pipelines and commits in the style of the project.`,
				actions: (0, F.jsxs)(F.Fragment, { children: [(0, F.jsx)(d, { children: `Start an agent` }), (0, F.jsx)(d, {
					variant: `outline`,
					children: `My tasks`
				})] }),
				aside: (0, F.jsx)(f, {
					tone: `ok`,
					children: `2 agents ready`
				}),
				art: (0, F.jsxs)(`svg`, {
					viewBox: `0 0 120 90`,
					className: `h-24 w-32 text-accent`,
					children: [(0, F.jsx)(`rect`, {
						x: `6`,
						y: `10`,
						width: `70`,
						height: `52`,
						rx: `8`,
						fill: `currentColor`,
						opacity: `0.18`
					}), (0, F.jsx)(`rect`, {
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
			render: () => (0, F.jsxs)(ae, {
				title: `Git accounts`,
				description: `Hosts the agents push to and read activity from.`,
				actions: (0, F.jsx)(d, {
					size: `sm`,
					variant: `outline`,
					children: `Connect`
				}),
				children: [(0, F.jsxs)(`div`, {
					className: `flex flex-wrap items-center gap-3 py-3`,
					children: [(0, F.jsxs)(`div`, {
						className: `min-w-0 flex-[1_1_12rem]`,
						children: [(0, F.jsx)(`p`, {
							className: `font-medium`,
							children: `Default branch`
						}), (0, F.jsx)(`p`, {
							className: `text-caption text-muted`,
							children: `Used when a project has none.`
						})]
					}), (0, F.jsx)(p, {
						label: `Branch name`,
						defaultValue: `main`,
						className: `w-full max-w-48`
					})]
				}), (0, F.jsxs)(`div`, {
					className: `flex flex-wrap items-center gap-3 py-3`,
					children: [(0, F.jsxs)(`div`, {
						className: `min-w-0 flex-[1_1_12rem]`,
						children: [(0, F.jsx)(`p`, {
							className: `font-medium`,
							children: `Remove all accounts`
						}), (0, F.jsx)(`p`, {
							className: `text-caption text-muted`,
							children: `Tokens are deleted from this device.`
						})]
					}), (0, F.jsx)(d, {
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
			render: () => (0, F.jsxs)(x, {
				padding: `none`,
				children: [
					(0, F.jsxs)(I, {
						"aria-label": `Needs you`,
						children: [
							(0, F.jsx)(L, {
								count: 3,
								label: `Drafts`,
								note: `Written but not published.`,
								href: `#drafts`,
								actionLabel: `Review`
							}),
							(0, F.jsx)(L, {
								count: 1,
								label: `Tracker sync failed`,
								note: `The token expired yesterday.`,
								urgent: !0,
								urgentLabel: `Urgent`,
								href: `#sync`,
								actionLabel: `Review`
							}),
							(0, F.jsx)(L, {
								count: 12,
								label: `Comments waiting for a reply on pull requests across three repositories`,
								onPress: () => void 0,
								actionLabel: `Review`
							})
						]
					}),
					(0, F.jsx)(R, {}),
					(0, F.jsx)(I, { empty: (0, F.jsx)(`p`, {
						className: `p-4 text-body text-muted`,
						children: `Nothing needs you today.`
					}) })
				]
			})
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
			render: () => (0, F.jsxs)(`div`, {
				className: `flex flex-col gap-4 text-body`,
				children: [
					(0, F.jsx)(`p`, { children: `Above` }),
					(0, F.jsx)(R, {}),
					(0, F.jsx)(R, { label: `Or` }),
					(0, F.jsxs)(`div`, {
						className: `flex h-8 items-center gap-2`,
						children: [
							(0, F.jsx)(`span`, { children: `Left` }),
							(0, F.jsx)(R, { orientation: `vertical` }),
							(0, F.jsx)(`span`, { children: `Right` })
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
			render: () => (0, F.jsxs)(`div`, {
				className: `flex flex-col gap-6`,
				children: [
					(0, F.jsx)(ce, {}),
					(0, F.jsx)(le, {}),
					(0, F.jsx)($, {})
				]
			})
		}
	]
};
export { se as t };
