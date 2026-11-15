import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { A as n, F as r, I as i, R as a } from "./doc.DoLlUurT.js";
import { t as o } from "./Link.BGmkI4cs.js";
import { n as s } from "./Dialog.C8eIUYfG.js";
import { t as c } from "./ToggleButton.DdDl1WJr.js";
import { r as l } from "./useTextField.yppvIDGl.js";
import { n as u, t as d } from "./Modal.BZjPATu-.js";
import { t as f } from "./SearchField.BwQA3KlU.js";
import { i as p, n as m } from "./storage.DycSY7Q5.js";
import { t as h } from "./SkipLink.BjszRMaZ.js";
import { t as g } from "./useScrollFocus.BUUl9mGA.js";
import { a as _, i as v, r as y, t as b } from "./Tip.CI9tWrn-.js";
import { a as x, i as S, n as ee, o as C, r as w, s as te, t as ne } from "./railTree.hfpCRG-L.js";
var T = e(t(), 1), E = r(), D = 48;
function O({ children: e, skipLinkLabel: t, skipToNavLabel: n, sidebar: r, topbar: a, titlebar: o, activityBar: s, statusBar: c, embedded: l = !1, mainId: u, className: d }) {
	let f = (0, T.useId)(), p = u ?? `${f}-main`, m = `${f}-nav`, [g, _] = (0, T.useState)(null), [v, b] = (0, T.useState)(!1), [x, S] = (0, T.useState)(!1);
	(0, T.useEffect)(() => {
		if (!g || typeof ResizeObserver > `u`) return;
		let e = new ResizeObserver(([e]) => {
			if (!e) return;
			let t = Number.parseFloat(getComputedStyle(document.documentElement).fontSize) || 16, n = e.contentRect.width < D * t;
			b(n), n || S(!1);
		});
		return e.observe(g), () => e.disconnect();
	}, [g]);
	let ee = (0, T.useMemo)(() => ({
		mainId: p,
		navId: m,
		isCompact: v,
		isNavOpen: x,
		setNavOpen: S,
		landmarks: !l,
		root: g
	}), [
		p,
		m,
		v,
		x,
		l,
		g
	]), C = (0, T.useCallback)((e) => {
		let t = document.getElementById(m);
		t && t.getClientRects().length > 0 || (e.preventDefault(), S(!0));
	}, [m]);
	return (0, E.jsx)(y.Provider, {
		value: ee,
		children: (0, E.jsxs)(`div`, {
			ref: _,
			className: i(`@container/shell relative flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden bg-bg text-body text-fg`, l && `isolate`, d),
			children: [
				(0, E.jsx)(h, {
					targetId: p,
					children: t
				}),
				r && n ? (0, E.jsx)(h, {
					targetId: m,
					onClick: C,
					children: n
				}) : null,
				o,
				(0, E.jsxs)(`div`, {
					className: `flex min-h-0 min-w-0 flex-1`,
					children: [
						s,
						r,
						(0, E.jsxs)(`div`, {
							className: `flex min-h-0 min-w-0 flex-1 flex-col`,
							children: [a, (0, E.jsx)(`div`, {
								className: `flex min-h-0 min-w-0 flex-1`,
								children: e
							})]
						})
					]
				}),
				c
			]
		})
	});
}
function k() {
	let e = _();
	return (0, T.useMemo)(() => e ? {
		mainId: e.mainId,
		isCompact: e.isCompact,
		isNavOpen: e.isNavOpen,
		setNavOpen: e.setNavOpen
	} : null, [e]);
}
var A = (0, T.createContext)({ current: void 0 });
function j() {
	return (0, T.useContext)(A);
}
function M(e, t) {
	return typeof e.isCurrent == `boolean` ? e.isCurrent : t !== void 0 && e.href === t;
}
var N = {
	nav: {
		link: `min-h-9 text-nav-fg data-hovered:bg-nav-hover data-pressed:bg-nav-active aria-[current=page]:bg-nav-active`,
		icon: `text-nav-muted group-data-hovered/nav:text-nav-fg group-aria-[current=page]/nav:text-nav-accent`,
		count: `bg-nav-active text-nav-fg`
	},
	plain: {
		link: `min-h-11 rounded-lg text-fg data-hovered:bg-hover data-pressed:bg-selected aria-[current=page]:bg-accent-soft aria-[current=page]:text-accent-text`,
		icon: `text-muted group-data-hovered/nav:text-fg group-aria-[current=page]/nav:text-accent`,
		count: `bg-sunken text-muted group-aria-[current=page]/nav:bg-surface group-aria-[current=page]/nav:text-accent-text`
	}
};
function P({ href: e, children: t, icon: n, end: r, count: a, countLabel: s, isCurrent: c, className: l, onPress: u, ...d }) {
	let f = j(), p = _(), m = M({
		href: e,
		isCurrent: c
	}, f.current), h = f.surface ?? `nav`, g = N[h], v = m ? `brand` : `mono`, y = (0, T.useCallback)((e) => {
		p?.setNavOpen(!1), u?.(e);
	}, [p, u]);
	return (0, E.jsx)(`li`, {
		className: `relative`,
		children: (0, E.jsxs)(o, {
			...d,
			href: e,
			onPress: y,
			...m ? { "aria-current": `page` } : {},
			className: i(`group/nav relative flex items-center gap-3 rounded-md px-3 py-1.5 text-body no-underline transition-colors`, g.link, `aria-[current=page]:font-medium`, `forced-colors:aria-[current=page]:underline data-disabled:cursor-not-allowed data-disabled:opacity-50`, l),
			children: [
				m && h === `nav` ? (0, E.jsx)(`span`, {
					"aria-hidden": !0,
					className: `absolute inset-y-1 start-0 w-[3px] rounded-e-sm bg-nav-accent forced-color-adjust-none forced-colors:bg-[Highlight]`
				}) : null,
				n ? (0, E.jsx)(`span`, {
					"aria-hidden": !0,
					"data-tone": v,
					className: i(`sk-tone-${v} flex size-[1.125rem] shrink-0 items-center justify-center transition-colors [&>svg]:size-full`, g.icon),
					children: n
				}) : null,
				(0, E.jsx)(`span`, {
					className: `min-w-0 flex-1 [overflow-wrap:anywhere]`,
					children: t
				}),
				a === void 0 ? null : (0, E.jsxs)(`span`, {
					className: i(`inline-flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full px-1.5 text-label font-semibold tabular-nums`, g.count),
					children: [(0, E.jsx)(`span`, {
						"aria-hidden": s ? !0 : void 0,
						children: a
					}), s ? (0, E.jsx)(`span`, {
						className: `sr-only`,
						children: `, ${s}`
					}) : null]
				}),
				r ? (0, E.jsxs)(E.Fragment, { children: [` `, r] }) : null
			]
		})
	});
}
function F({ menuLabel: e, className: t, children: r, ...o }) {
	let s = _(), c = s && !s.landmarks ? `div` : `header`, l = (0, T.useCallback)(() => s?.setNavOpen(!s.isNavOpen), [s]);
	return (0, E.jsxs)(c, {
		...o,
		className: i(`flex min-h-14 shrink-0 flex-wrap items-center gap-2 border-b border-border bg-surface px-3 py-2 @2xl/shell:px-5`, t),
		children: [s && e ? (0, E.jsx)(a, {
			"aria-label": e,
			"aria-expanded": s.isNavOpen,
			onPress: l,
			className: `inline-flex size-control-md shrink-0 items-center justify-center rounded-md text-muted transition-colors data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-selected @3xl/shell:hidden`,
			children: (0, E.jsx)(n, {
				name: `nav.menu`,
				"aria-hidden": !0,
				className: `size-5`
			})
		}) : null, r]
	});
}
var I = {
	default: `max-w-7xl`,
	wide: `max-w-[120rem]`,
	full: `max-w-none`
};
function L({ width: e = `default`, label: t, id: n, className: r, children: a, ...o }) {
	let s = _(), c = (0, T.useId)(), l = n ?? s?.mainId ?? c, u = s !== null && !s.landmarks, d = u ? `div` : `main`, f = u && t ? `region` : void 0, [p, m] = (0, T.useState)(null), h = g(p);
	return (0, E.jsx)(d, {
		...o,
		ref: m,
		id: l,
		role: f,
		"aria-label": t,
		tabIndex: h ? 0 : -1,
		className: i(`min-h-0 min-w-0 flex-1 overflow-y-auto px-4 py-6 [scrollbar-gutter:stable] focus:outline-none focus-visible:outline-solid focus-visible:[outline-offset:calc(var(--sk-focus-width)*-1)] @2xl/shell:px-6 @5xl/shell:px-8`, r),
		children: (0, E.jsx)(`div`, {
			className: i(`mx-auto w-full`, I[e]),
			children: a
		})
	});
}
var R = {
	back: `chevron.left`,
	next: `chevron.right`,
	close: `action.close`,
	pin: `layout.panel`,
	search: `action.search`
};
function z({ name: e, className: t }) {
	return (0, E.jsx)(n, {
		name: R[e],
		size: `sm`,
		className: i(`size-4 shrink-0`, t)
	});
}
var B = `outline-none data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus data-focus-visible:outline-solid`, V = i(`inline-flex shrink-0 cursor-pointer items-center justify-center rounded-md text-muted data-hovered:bg-hover data-hovered:text-fg`, B);
function H(e) {
	return e.normalize(`NFD`).replace(/\p{Diacritic}/gu, ``).replaceAll(`ł`, `l`).toLowerCase();
}
function re(e, t) {
	return e ? [...e.querySelectorAll(t)].filter((e) => !e.closest(`[inert]`)) : [];
}
function U(e, t, n) {
	return re(e, `[${t}]`).find((e) => e.getAttribute(t) === n) ?? null;
}
var W = `a[href], [data-rail="parent"]`;
function ie(e) {
	let t = re(e, W);
	(t.find((e) => e.getAttribute(`aria-current`) === `page`) ?? t.find((e) => e.hasAttribute(`data-current-path`)) ?? t[0])?.focus();
}
function ae(e, t) {
	if (![
		`ArrowDown`,
		`ArrowUp`,
		`Home`,
		`End`
	].includes(e.key)) return !1;
	let n = e.target;
	if (n.tagName === `INPUT` && e.key !== `ArrowDown`) return !1;
	let r = re(t, W);
	if (r.length === 0) return !1;
	let i = r.indexOf(n), a = e.key === `ArrowDown` ? Math.min(r.length - 1, i + 1) : Math.max(0, i - 1);
	return e.key === `Home` && (a = 0), e.key === `End` && (a = r.length - 1), r[a]?.focus(), e.preventDefault(), !0;
}
var G = (0, T.createContext)(null), K = i(`group/nav relative flex min-h-11 w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-1.5 text-start text-body transition-colors data-hovered:bg-hover data-pressed:bg-selected aria-expanded:bg-hover data-focus-visible:-outline-offset-2`, B);
function q({ link: e, itemKey: t, level: n }) {
	let r = (0, T.useContext)(G), o = r?.path.includes(t) ?? !1, s = r?.mode === `flyout` && r.open[n - 1] === t, c = r?.onParent, l = r?.onHover, u = (0, T.useCallback)((e) => c?.(n, t, e), [
		c,
		n,
		t
	]), d = (0, T.useCallback)((e) => {
		e.pointerType === `mouse` && l?.(n, t);
	}, [
		l,
		n,
		t
	]), f = o ? `brand` : `mono`;
	return (0, E.jsx)(`li`, { children: (0, E.jsxs)(a, {
		"data-rail": `parent`,
		"data-rail-key": t,
		"data-current-path": o || void 0,
		...r?.mode === `flyout` ? {
			"aria-expanded": s,
			"aria-controls": r.controls(n + 1),
			"aria-haspopup": `true`
		} : {},
		onPress: u,
		onHoverStart: d,
		className: i(K, o ? `font-medium text-accent-text` : `text-fg`),
		children: [
			e.icon ? (0, E.jsx)(`span`, {
				"aria-hidden": !0,
				"data-tone": f,
				className: i(`sk-tone-${f} flex size-[1.125rem] shrink-0 items-center justify-center [&>svg]:size-full`, o ? `text-accent` : `text-muted group-data-hovered/nav:text-fg`),
				children: e.icon
			}) : null,
			(0, E.jsx)(`span`, {
				className: `min-w-0 flex-1 [overflow-wrap:anywhere]`,
				children: e.label
			}),
			e.count === void 0 ? null : (0, E.jsxs)(`span`, {
				className: `inline-flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-sunken px-1.5 text-label font-semibold text-muted tabular-nums`,
				children: [(0, E.jsx)(`span`, {
					"aria-hidden": e.countLabel ? !0 : void 0,
					children: e.count
				}), e.countLabel ? (0, E.jsx)(`span`, {
					className: `sr-only`,
					children: `, ${e.countLabel}`
				}) : null]
			}),
			(0, E.jsx)(`span`, {
				"data-rail": `chevron`,
				"aria-hidden": !0,
				className: `flex shrink-0 text-muted rtl:-scale-x-100`,
				children: (0, E.jsx)(z, { name: `next` })
			})
		]
	}) });
}
function oe({ link: e, level: t, label: n }) {
	let r = (0, T.useContext)(G)?.onHover, i = (0, T.useCallback)((e) => {
		e.pointerType === `mouse` && r?.(t, null);
	}, [r, t]);
	return e.href === void 0 ? null : (0, E.jsx)(P, {
		href: e.href,
		icon: e.icon,
		onHoverStart: i,
		...e.count === void 0 ? {} : { count: e.count },
		...e.countLabel === void 0 ? {} : { countLabel: e.countLabel },
		children: n ?? e.label
	});
}
function J({ links: e, parentKey: t, level: n, className: r, rail: a }) {
	return (0, E.jsx)(`ul`, {
		"data-rail": a,
		className: i(`flex flex-col gap-0.5`, r),
		children: e.map((e) => {
			let r = C(e, t);
			return e.children?.length ? (0, E.jsx)(q, {
				link: e,
				itemKey: r,
				level: n
			}, r) : (0, E.jsx)(oe, {
				link: e,
				level: n
			}, r);
		})
	});
}
function Y({ section: e, query: t, noMatches: n, current: r }) {
	let a = H(t.trim());
	if (a) {
		let t = w(e).filter(({ link: e }) => H([e.label, ...e.keywords ?? []].join(` `)).includes(a));
		return t.length === 0 ? (0, E.jsx)(`p`, {
			className: `px-3 py-2 text-body text-muted`,
			children: n
		}) : (0, E.jsx)(`ul`, {
			className: `flex flex-col gap-0.5`,
			children: t.map(({ link: e, trail: t }) => (0, E.jsx)(oe, {
				link: e,
				level: 1,
				label: t.length > 0 ? (0, E.jsxs)(E.Fragment, { children: [e.label, (0, E.jsx)(`span`, {
					className: `ms-1.5 text-caption text-muted`,
					children: `· ${t.join(` › `)}`
				})] }) : void 0
			}, e.href))
		});
	}
	let o = e.groups ?? [];
	return o.length === 0 ? (0, E.jsx)(`p`, {
		className: `px-3 py-2 text-body text-muted`,
		children: n
	}) : (0, E.jsx)(`div`, {
		className: `flex flex-col gap-3`,
		children: o.map((t, n) => {
			let a = t.links.some((e) => S(e, r));
			return (0, E.jsxs)(`div`, { children: [t.label ? (0, E.jsxs)(`p`, {
				"data-rail": `heading`,
				className: i(`m-0 flex items-center gap-1.5 px-3 pb-1 text-label font-semibold tracking-[0.09em] uppercase`, a ? `text-accent-text` : `text-muted`),
				children: [a ? (0, E.jsx)(`span`, {
					"aria-hidden": !0,
					className: `size-1.5 rounded-full bg-accent`
				}) : null, t.label]
			}) : null, (0, E.jsx)(J, {
				links: t.links,
				parentKey: e.id,
				level: 1
			})] }, t.label ?? n);
		})
	});
}
function se({ section: e, current: t, labels: n, query: r, onQueryChange: a, titleId: o, pin: s, large: u = !1 }) {
	let d = (0, T.useMemo)(() => ({
		current: t,
		surface: `plain`
	}), [t]);
	return (0, E.jsxs)(E.Fragment, { children: [
		(0, E.jsxs)(`div`, {
			className: i(`flex items-center gap-2 px-3 pb-2`, u ? `pt-1` : `pt-3`),
			children: [(0, E.jsx)(`p`, {
				id: o,
				"data-rail": `title`,
				className: `min-w-0 flex-1 ps-1 text-title font-semibold text-fg [overflow-wrap:anywhere]`,
				children: e.label
			}), s ? (0, E.jsx)(c, {
				"data-rail": `pin`,
				"aria-label": n.pin,
				isSelected: s.isSelected,
				onChange: s.onChange,
				className: i(V, `size-8 border border-transparent data-selected:border-border data-selected:bg-selected data-selected:text-accent-text forced-colors:data-selected:border-[Highlight]`),
				children: (0, E.jsx)(z, { name: `pin` })
			}) : null]
		}),
		(0, E.jsxs)(f, {
			"data-rail": `filter`,
			"aria-label": n.filterLabel(e.label),
			value: r,
			onChange: a,
			className: i(`mx-3 mb-2 flex items-center gap-1.5 rounded-md border border-border bg-input px-2 text-fg has-[input:focus-visible]:outline-(length:--sk-focus-width) has-[input:focus-visible]:outline-focus has-[input:focus-visible]:outline-solid`, u ? `h-11` : `h-control-sm`),
			children: [(0, E.jsx)(z, {
				name: `search`,
				className: `size-3.5 text-muted`
			}), (0, E.jsx)(l, {
				...n.filterPlaceholder ? { placeholder: n.filterPlaceholder } : {},
				className: `h-full min-w-0 flex-1 bg-transparent text-body text-fg outline-none placeholder:text-muted [&::-webkit-search-cancel-button]:hidden`
			})]
		}),
		(0, E.jsx)(A.Provider, {
			value: d,
			children: (0, E.jsx)(`nav`, {
				"data-rail": `links`,
				"aria-labelledby": o,
				className: `sk-focus-inset min-h-0 flex-1 overflow-y-auto overscroll-contain px-2 pb-3`,
				children: (0, E.jsx)(Y, {
					section: e,
					query: r,
					noMatches: n.noMatches,
					current: t
				})
			})
		})
	] });
}
var X = new Set(), Z = new Map();
function Q(e) {
	return X.add(e), () => {
		X.delete(e);
	};
}
function $(e) {
	if (!e) return {};
	try {
		let t = JSON.parse(e);
		if (typeof t != `object` || !t) return {};
		let { docked: n, section: r } = t;
		return {
			...typeof n == `boolean` ? { docked: n } : {},
			...typeof r == `string` || r === null ? { section: r } : {}
		};
	} catch {
		return {};
	}
}
var ce = () => null;
function le(e) {
	let t = (0, T.useCallback)(() => e === null ? null : m(e) ?? Z.get(e) ?? null, [e]), n = (0, T.useSyncExternalStore)(Q, t, ce);
	return [(0, T.useMemo)(() => $(n), [n]), (0, T.useCallback)((n) => {
		if (e === null) return;
		let r = JSON.stringify({
			...$(t()),
			...n
		});
		p(e, r) || Z.set(e, r);
		for (let e of X) e();
	}, [e, t])];
}
function ue(e, t, n, r = !1) {
	(0, T.useEffect)(() => {
		let i = e.current;
		if (i) return i.addEventListener(t, n, r), () => i.removeEventListener(t, n, r);
	}, [
		e,
		t,
		n,
		r
	]);
}
var de = [], fe = i(`flex min-h-11 w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-start text-body text-fg no-underline data-hovered:bg-hover data-focus-visible:-outline-offset-2`, B), pe = i(`absolute inset-0 flex min-h-0 flex-col bg-surface`, `transition-[translate] duration-(--sk-duration-hover) ease-out starting:translate-x-full motion-reduce:transition-none rtl:starting:-translate-x-full`);
function me({ section: e, isCurrent: t, isPage: n, currentLabel: r, onEnter: s, onLeave: c }) {
	let l = (0, T.useCallback)(() => s(e.id), [s, e.id]), u = t ? `duo` : `brand`, d = (0, E.jsxs)(E.Fragment, { children: [
		(0, E.jsx)(`span`, {
			"aria-hidden": !0,
			"data-rail": `icon`,
			"data-tone": u,
			className: i(`sk-tone-${u} flex size-8 shrink-0 items-center justify-center rounded-lg text-accent-text [&>svg]:size-5`, t && `bg-accent-soft text-accent`),
			children: e.icon
		}),
		(0, E.jsx)(`span`, {
			"data-rail": `label`,
			className: i(`min-w-0 flex-1 [overflow-wrap:anywhere]`, t && `font-semibold`),
			children: e.label
		}),
		e.count === void 0 ? null : (0, E.jsxs)(`span`, {
			"data-rail": `count`,
			className: `inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-label font-semibold text-accent-fg tabular-nums`,
			children: [(0, E.jsx)(`span`, {
				"aria-hidden": e.countLabel ? !0 : void 0,
				children: e.count
			}), e.countLabel ? (0, E.jsx)(`span`, {
				className: `sr-only`,
				children: e.countLabel
			}) : null]
		}),
		t && r ? (0, E.jsx)(`span`, {
			className: `sr-only`,
			children: `, ${r}`
		}) : null,
		e.groups ? (0, E.jsx)(`span`, {
			"data-rail": `chevron`,
			"aria-hidden": !0,
			className: `flex text-muted rtl:-scale-x-100`,
			children: (0, E.jsx)(z, { name: `next` })
		}) : null
	] });
	return (0, E.jsx)(`li`, { children: e.groups ? (0, E.jsx)(a, {
		"data-drawer-item": e.id,
		onPress: l,
		className: fe,
		children: d
	}) : (0, E.jsx)(o, {
		"data-drawer-item": e.id,
		href: e.href ?? `#`,
		...n ? { "aria-current": `page` } : {},
		onPress: c,
		className: i(fe, `aria-[current=page]:bg-accent-soft aria-[current=page]:text-accent-text`),
		children: d
	}) });
}
function he({ back: e, label: t, onBack: n, onClose: r }) {
	return (0, E.jsxs)(`div`, {
		className: `flex shrink-0 items-center gap-1 px-1 py-2`,
		children: [
			(0, E.jsxs)(a, {
				"data-rail": `back`,
				onPress: n,
				className: i(V, `min-h-11 min-w-0 gap-1 px-2 text-body`),
				children: [(0, E.jsx)(`span`, {
					"aria-hidden": !0,
					className: `flex rtl:-scale-x-100`,
					children: (0, E.jsx)(z, { name: `back` })
				}), (0, E.jsx)(`span`, {
					className: `truncate`,
					children: e
				})]
			}),
			(0, E.jsx)(`span`, { className: `flex-1` }),
			(0, E.jsx)(a, {
				"data-rail": `close`,
				"aria-label": t,
				onPress: r,
				className: i(V, `size-11`),
				children: (0, E.jsx)(z, {
					name: `close`,
					className: `size-5`
				})
			})
		]
	});
}
function ge({ sections: e, current: t, currentSection: n, labels: r, top: s, bottom: c }) {
	let l = _(), [u, d] = (0, T.useState)(() => {
		let r = e.find((e) => e.id === n && e.groups);
		return r ? [r.id, ...ne(r, t)] : [];
	}), [f, p] = (0, T.useState)(``), m = (0, T.useRef)(null), h = (0, T.useId)(), g = (0, T.useMemo)(() => ({
		current: t,
		surface: `plain`
	}), [t]), v = e.find((e) => e.id === u[0] && e.groups) ?? null, y = (0, T.useMemo)(() => ne(v, t), [v, t]), b = (0, T.useCallback)(() => l?.setNavOpen(!1), [l]), x = (0, T.useCallback)(() => m.current?.querySelector(`[data-rail="drawer-screen"][data-level="${u.length}"]`) ?? null, [u.length]), S = (0, T.useCallback)((e, t) => {
		d((n) => [...n.slice(0, e), t]), p(``), requestAnimationFrame(() => {
			(m.current?.querySelector(`[data-rail="drawer-screen"][data-level="${e + 1}"]`))?.querySelector(`[data-rail="back"]`)?.focus();
		});
	}, []), C = (0, T.useCallback)(() => {
		let e = u.at(-1) ?? null, t = u.length - 1;
		d((e) => e.slice(0, -1)), requestAnimationFrame(() => {
			let n = m.current?.querySelector(`[data-rail="drawer-screen"][data-level="${t}"]`) ?? null;
			(t === 0 ? U(n, `data-drawer-item`, e) : U(n, `data-rail-key`, e))?.focus();
		});
	}, [u]), w = (0, T.useCallback)((e) => S(0, e), [S]), te = (0, T.useCallback)((e, t) => S(e, t), [S]), D = (0, T.useMemo)(() => ({
		mode: `screen`,
		current: t,
		path: y,
		open: u.slice(1),
		controls: () => ``,
		onParent: te,
		onHover: () => {}
	}), [
		t,
		y,
		u,
		te
	]);
	ue(m, `keydown`, (0, T.useCallback)((e) => {
		let t = x();
		if (!t || !t.contains(e.target) || ae(e, t)) return;
		let n = e.target.tagName === `INPUT`;
		u.length > 0 && e.key === `ArrowLeft` && !n ? (e.preventDefault(), C()) : e.key === `ArrowRight` && e.target.getAttribute(`data-rail`) === `parent` && (e.preventDefault(), e.target.click());
	}, [
		C,
		u.length,
		x
	]));
	let O = (e) => {
		if (e <= 1) return r.back;
		let t = u[e - 2], n = e === 2 ? v?.label : t ? ee(v, t)?.label : void 0;
		return n && r.backTo ? r.backTo(n) : r.back;
	};
	return (0, E.jsxs)(`div`, {
		ref: m,
		className: `relative flex h-full min-h-0 flex-col`,
		children: [(0, E.jsxs)(`div`, {
			"data-rail": `drawer-screen`,
			"data-level": 0,
			inert: u.length > 0 || void 0,
			className: `flex h-full min-h-0 flex-col`,
			children: [
				(0, E.jsxs)(`div`, {
					className: `flex shrink-0 items-center gap-2 px-3 py-2`,
					children: [(0, E.jsx)(`div`, {
						className: `min-w-0 flex-1`,
						children: s
					}), (0, E.jsx)(a, {
						"data-rail": `close`,
						"aria-label": r.close,
						onPress: b,
						className: i(V, `size-11`),
						children: (0, E.jsx)(z, {
							name: `close`,
							className: `size-5`
						})
					})]
				}),
				(0, E.jsx)(`nav`, {
					"aria-label": r.rail,
					className: `sk-focus-inset min-h-0 flex-1 overflow-y-auto overscroll-contain px-2 py-1`,
					children: (0, E.jsx)(`ul`, {
						className: `flex flex-col gap-0.5`,
						children: e.map((e) => (0, E.jsx)(me, {
							section: e,
							isCurrent: e.id === n,
							isPage: t !== void 0 && e.href === t,
							currentLabel: r.currentSection,
							onEnter: w,
							onLeave: b
						}, e.id))
					})
				}),
				c ? (0, E.jsx)(`div`, {
					className: `flex shrink-0 items-center gap-2 border-t border-border px-3 py-2`,
					children: c
				}) : null
			]
		}), (0, E.jsx)(G.Provider, {
			value: D,
			children: v ? u.map((e, n) => {
				let a = n + 1, s = a === u.length, c = a === 1 ? null : ee(v, e);
				if (a > 1 && !c) return null;
				let l = `${h}-screen-${a}`;
				return (0, E.jsxs)(`div`, {
					"data-rail": `drawer-screen`,
					"data-level": a,
					inert: !s || void 0,
					className: pe,
					children: [(0, E.jsx)(he, {
						back: O(a),
						label: r.close,
						onBack: C,
						onClose: b
					}), a === 1 ? (0, E.jsx)(se, {
						section: v,
						current: t,
						labels: r,
						query: f,
						onQueryChange: p,
						titleId: l,
						large: !0
					}) : (0, E.jsxs)(E.Fragment, { children: [c?.href === void 0 ? (0, E.jsx)(`p`, {
						id: l,
						className: `m-0 px-4 pb-2 text-title font-semibold text-fg`,
						children: c?.label
					}) : (0, E.jsx)(`div`, {
						className: `px-2 pb-1`,
						children: (0, E.jsx)(o, {
							id: l,
							"data-rail": `flyout-title`,
							href: c.href,
							onPress: b,
							...c.href === t ? { "aria-current": `page` } : {},
							className: i(fe, `text-title font-semibold aria-[current=page]:bg-accent-soft aria-[current=page]:text-accent-text`),
							children: c.label
						})
					}), (0, E.jsx)(A.Provider, {
						value: g,
						children: (0, E.jsx)(`nav`, {
							"aria-labelledby": l,
							className: `sk-focus-inset min-h-0 flex-1 overflow-y-auto overscroll-contain px-2 pb-3`,
							children: (0, E.jsx)(J, {
								links: c?.children ?? de,
								parentKey: e,
								level: a
							})
						})
					})] })]
				}, `${a}-${e}`);
			}) : null
		})]
	});
}
function _e({ container: e, className: t, ...n }) {
	let r = _();
	return r ? (0, E.jsx)(u, {
		...v(e, r),
		isOpen: r.isNavOpen,
		onOpenChange: r.setNavOpen,
		isDismissable: !0,
		className: `fixed inset-0 z-(--sk-z-modal) bg-scrim transition-opacity duration-(--sk-duration-base) starting:opacity-0 data-exiting:opacity-0 motion-reduce:transition-none`,
		children: (0, E.jsx)(d, {
			className: i(`fixed inset-y-0 start-0 flex w-80 max-w-[calc(100%-3rem)] flex-col overflow-hidden border-e border-border bg-sunken text-fg shadow-lg outline-none`, `transition-transform duration-(--sk-duration-base) ease-out starting:-translate-x-full data-exiting:-translate-x-full motion-reduce:transition-none rtl:starting:translate-x-full rtl:data-exiting:translate-x-full`, t),
			children: (0, E.jsx)(s, {
				"data-rail": `drawer`,
				"aria-label": n.labels.rail,
				className: `relative flex h-full min-h-0 flex-col outline-none`,
				children: (0, E.jsx)(ge, { ...n })
			})
		})
	}) : null;
}
var ve = {
	2: `start-[calc(4.5rem+15rem-2px)]`,
	3: `start-[calc(4.5rem+30rem-3px)]`,
	4: `start-[calc(4.5rem+45rem-4px)]`
}, ye = 8, be = [];
function xe({ id: e, titleId: t, level: n, link: r, itemKey: a, current: s, root: c, onPointerEnter: l }) {
	let u = (0, T.useRef)(null), d = (0, T.useMemo)(() => ({
		current: s,
		surface: `plain`
	}), [s]);
	(0, T.useLayoutEffect)(() => {
		let e = u.current, t = c.current, n = U(t, `data-rail-key`, a);
		if (!e || !t || !n) return;
		let r = t.getBoundingClientRect(), i = n.getBoundingClientRect().top - r.top - 4, o = r.height - e.offsetHeight - ye;
		e.style.top = `${Math.max(ye, Math.min(i, o))}px`;
	}, [a, c]);
	let f = r.href !== void 0 && r.href === s;
	return (0, E.jsxs)(`nav`, {
		ref: u,
		id: e,
		"data-rail": `flyout`,
		"data-level": n,
		"aria-labelledby": t,
		onPointerEnter: l,
		className: i(`absolute top-2 z-1 flex max-h-[calc(100%-1rem)] w-60 flex-col overflow-y-auto overscroll-contain rounded-e-xl border border-border bg-surface pb-2 shadow-lg [scrollbar-width:thin]`, `transition-[opacity,translate] duration-(--sk-duration-hover) ease-out starting:-translate-x-2 starting:opacity-0 motion-reduce:transition-none rtl:starting:translate-x-2`, ve[n] ?? ve[4]),
		children: [(0, E.jsx)(`div`, {
			className: `px-2 pt-2 pb-1`,
			children: r.href === void 0 ? (0, E.jsx)(`p`, {
				"data-rail": `flyout-title`,
				id: t,
				className: `m-0 px-3 py-2 text-body font-semibold text-fg`,
				children: r.label
			}) : (0, E.jsx)(o, {
				"data-rail": `flyout-title`,
				id: t,
				href: r.href,
				...f ? { "aria-current": `page` } : {},
				className: i(`flex min-h-11 items-center rounded-lg px-3 text-body font-semibold text-fg no-underline data-hovered:bg-hover aria-[current=page]:bg-accent-soft aria-[current=page]:text-accent-text data-focus-visible:-outline-offset-2`, B),
				children: r.label
			})
		}), (0, E.jsx)(A.Provider, {
			value: d,
			children: (0, E.jsx)(J, {
				links: r.children ?? be,
				parentKey: a,
				level: n,
				rail: `flyout-links`,
				className: `px-2`
			})
		})]
	});
}
var Se = {
	mac: 52,
	windows: 32,
	linux: 32
}, Ce = `shrink-0 [-webkit-app-region:drag] [app-region:drag] h-(--sk-title-bar)`, we = 150;
function Te({ label: e, toggleKey: t, isExpanded: n, isOutside: r, controls: o, container: s, onToggle: c }) {
	let l = (0, T.useMemo)(() => (0, E.jsxs)(`span`, {
		className: `flex items-center gap-2`,
		children: [e, t ? (0, E.jsx)(`kbd`, {
			className: `rounded border border-border px-1.5 font-mono text-caption leading-5`,
			children: t
		}) : null]
	}), [e, t]);
	return (0, E.jsx)(b, {
		content: l,
		placement: `end`,
		container: s,
		children: (0, E.jsx)(a, {
			"data-rail": `edge`,
			"aria-label": e,
			"aria-expanded": n,
			"aria-controls": o,
			onPress: c,
			className: i(`absolute top-4 z-2 flex size-6 cursor-pointer items-center justify-center rounded-full border border-border bg-surface text-muted shadow-sm transition-[inset-inline-start,color] duration-(--sk-duration-hover) ease-out before:absolute before:-inset-2.5 before:content-[""] data-hovered:text-fg motion-reduce:transition-none [.a11y-reduce-motion_&]:transition-none`, r ? `start-[calc(4.5rem+15rem-0.75rem)]` : `start-[calc(4.5rem-0.75rem)]`),
			children: (0, E.jsx)(`span`, {
				"aria-hidden": !0,
				className: i(`flex`, n ? `rotate-180 rtl:rotate-0` : `rtl:rotate-180`),
				children: (0, E.jsx)(z, {
					name: `next`,
					className: `size-3.5`
				})
			})
		})
	});
}
var Ee = [], De = (e, t) => e.x >= t.left && e.x <= t.right && e.y >= t.top && e.y <= t.bottom, Oe = `transition-[opacity,translate,visibility,box-shadow,top,bottom,border-radius] duration-(--sk-duration-hover) ease-out motion-reduce:transition-none [.a11y-reduce-motion_&]:transition-none`, ke = i(`group/rail flex min-h-11 w-full cursor-pointer flex-col items-center justify-center gap-0.5 rounded-lg px-0.5 py-1 no-underline data-focus-visible:-outline-offset-2`, B);
function Ae({ section: e, isCurrent: t, isOpen: n, isPage: r, panelId: s, hideLabels: c, currentLabel: l, container: u, onPress: d, onKeys: f, onIntent: p, onLink: m }) {
	let h = (0, T.useCallback)((t) => d(e, t), [d, e]), g = (0, T.useCallback)((t) => f(t, e), [f, e]), _ = (0, T.useCallback)((t) => {
		t.pointerType === `mouse` && p(e.groups ? e.id : null);
	}, [p, e]), v = t ? `duo` : `brand`, y = (0, E.jsxs)(E.Fragment, { children: [
		(0, E.jsxs)(`span`, {
			"aria-hidden": !0,
			"data-rail": `icon`,
			"data-tone": v,
			className: i(`sk-tone-${v} relative flex size-9 items-center justify-center rounded-lg text-accent-text transition-colors [&>svg]:size-5`, t && `bg-accent-soft text-accent ring-1 ring-accent forced-colors:ring-[Highlight]`, !t && (n ? `bg-hover` : `group-data-hovered/rail:bg-hover`)),
			children: [e.icon, e.count === void 0 ? null : (0, E.jsx)(`span`, {
				"data-rail": `count`,
				className: `absolute -end-1.5 -top-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[0.625rem] leading-none font-semibold text-accent-fg tabular-nums ring-2 ring-sunken forced-colors:border forced-colors:border-[CanvasText]`,
				children: e.count
			})]
		}),
		(0, E.jsx)(`span`, {
			"data-rail": `label`,
			className: i(`max-w-full text-center text-[0.6875rem] leading-tight hyphens-auto [overflow-wrap:break-word]`, c && `sr-only`, t ? `font-semibold text-fg` : `font-medium text-muted group-data-hovered/rail:text-fg`),
			children: e.label
		}),
		e.countLabel ? (0, E.jsx)(`span`, {
			className: `sr-only`,
			children: `, ${e.countLabel}`
		}) : null,
		t && l ? (0, E.jsx)(`span`, {
			className: `sr-only`,
			children: `, ${l}`
		}) : null
	] }), x = e.groups ? (0, E.jsx)(a, {
		"data-rail-item": e.id,
		"data-current": t || void 0,
		"aria-haspopup": `true`,
		"aria-expanded": n,
		"aria-controls": s,
		onPress: h,
		onKeyDown: g,
		onHoverStart: _,
		className: ke,
		children: y
	}) : (0, E.jsx)(o, {
		"data-rail-item": e.id,
		"data-current": t || void 0,
		href: e.href ?? `#`,
		...r ? { "aria-current": `page` } : {},
		onPress: m,
		onKeyDown: g,
		onHoverStart: _,
		className: ke,
		children: y
	});
	return (0, E.jsx)(`li`, { children: c ? (0, E.jsx)(b, {
		content: e.label,
		placement: `end`,
		container: u,
		children: x
	}) : x });
}
function je({ sections: e, current: t, labels: n, top: r, bottom: a, storageKey: o = `sk-sidebar-rail`, defaultDocked: s = !1, hideLabels: c = !1, desktop: l, titleBarHeight: u, toggleKey: d = `[`, container: f, className: p }) {
	let m = _(), h = (0, T.useId)(), g = `${h}-panel`, v = `${h}-title`, y = te(e, t), [b, S] = le(o), [C, w] = (0, T.useState)(null), [D, O] = (0, T.useState)(null), [k, A] = (0, T.useState)(``), j = (0, T.useRef)(null), M = (0, T.useRef)(null), N = (0, T.useRef)(void 0), P = (0, T.useRef)(void 0), F = (0, T.useRef)({
		prev: null,
		now: null
	}), [I, L] = (0, T.useState)({
		section: null,
		keys: [],
		hover: !1
	}), R = C ?? b.docked ?? s, z = (t) => e.some((e) => e.id === t && e.groups), B = D !== null && D.route === y, V = z(y) ? y : b.section ?? null, H = B ? D.id : R ? V : null, W = e.find((e) => e.id === H && e.groups) ?? null, K = B && D.hover, q = !R && W !== null, oe = e.find((e) => e.id === D?.last && e.groups) ?? null, J = W ?? oe, Y = (0, T.useMemo)(() => W && I.section === W.id && !k ? I.keys : Ee, [
		W,
		I,
		k
	]), X = (0, T.useMemo)(() => ne(W, t), [W, t]), Z = (0, T.useCallback)((e) => e === 1 ? g : `${h}-level-${e}`, [h, g]), Q = (0, T.useCallback)((e, t, n = `press`) => {
		clearTimeout(P.current), L((r) => {
			let i = [...(r.section === H ? r.keys : []).slice(0, e - 1), ...t ? [t] : []];
			return {
				section: H,
				keys: i,
				hover: n === `hover` && i.length > 0
			};
		});
	}, [H, L]), $ = (0, T.useCallback)((e, t = `press`) => {
		clearTimeout(N.current), clearTimeout(P.current);
		let n = document.activeElement, r = j.current;
		e !== H && r && n && r.contains(n) && !n.closest(`[data-rail="bar"]`) && U(r, `data-rail-item`, H)?.focus(), O({
			id: e,
			route: y,
			hover: t === `hover`,
			last: e ?? H
		}), L({
			section: e,
			keys: [],
			hover: !1
		}), A(``), e && t === `press` && S({ section: e });
	}, [
		y,
		H,
		S,
		O,
		A,
		L
	]), ce = (0, T.useCallback)((e) => {
		H !== e && $(e), requestAnimationFrame(() => ie(M.current));
	}, [H, $]), de = (0, T.useCallback)(() => {
		let e = U(j.current, `data-rail-item`, H);
		R || $(null), e?.focus();
	}, [
		R,
		H,
		$
	]), fe = Y.length > 0;
	(0, T.useEffect)(() => {
		if (!q && !fe) return;
		let e = (e) => {
			j.current && !j.current.contains(e.target) && (q ? $(null) : Q(1, null));
		};
		return document.addEventListener(`pointerdown`, e), () => document.removeEventListener(`pointerdown`, e);
	}, [
		q,
		fe,
		$,
		Q
	]), (0, T.useEffect)(() => () => {
		clearTimeout(N.current), clearTimeout(P.current);
	}, []);
	let pe = (0, T.useCallback)((e, t) => {
		Q(e, t), requestAnimationFrame(() => {
			let t = document.getElementById(Z(e + 1));
			ie(t?.querySelector(`[data-rail="flyout-links"]`) ?? t);
		});
	}, [Z, Q]), me = (0, T.useCallback)((e, t, n) => {
		n.pointerType === `keyboard` || n.pointerType === `virtual` ? pe(e, t) : Q(e, Y[e - 1] === t && !I.hover ? null : t);
	}, [
		Y,
		pe,
		Q,
		I.hover
	]), he = (0, T.useCallback)((e, t) => {
		clearTimeout(P.current);
		let n = Y[e - 1];
		if (n === t || n === void 0 && t === null) return;
		let r = n === void 0 || I.hover ? `hover` : `press`, i = n === void 0 ? null : document.getElementById(Z(e + 1)), a = j.current ? getComputedStyle(j.current).direction === `rtl` : !1, o = (e, t) => i !== null && t !== null && x(e, t, i.getBoundingClientRect(), a), s = (n) => {
			P.current = setTimeout(() => {
				let { prev: i, now: a } = F.current;
				a && (a.x !== n.x || a.y !== n.y) && o(i, a) ? s(a) : Q(e, t, r);
			}, 300);
		}, { prev: c, now: l } = F.current;
		l && o(c, l) ? s(l) : P.current = setTimeout(() => Q(e, t, r), we);
	}, [
		Y,
		Z,
		Q,
		I.hover
	]), ge = (0, T.useCallback)((e) => {
		e.pointerType === `mouse` && (F.current = {
			prev: F.current.now,
			now: {
				x: e.clientX,
				y: e.clientY
			}
		});
	}, []), ve = (0, T.useMemo)(() => ({
		mode: `flyout`,
		current: t,
		path: X,
		open: Y,
		controls: Z,
		onParent: me,
		onHover: he
	}), [
		t,
		X,
		Y,
		Z,
		me,
		he
	]), ye = (0, T.useCallback)((e, t) => {
		t.pointerType === `keyboard` || t.pointerType === `virtual` ? ce(e.id) : H === e.id && !K ? (R && (w(!1), S({ docked: !1 })), $(null)) : $(e.id);
	}, [
		R,
		ce,
		K,
		H,
		S,
		w,
		$
	]), be = (0, T.useCallback)((e) => {
		if (R) return;
		clearTimeout(N.current);
		let t = () => {
			e === null ? K && $(null) : e !== H && $(e, H === null || K ? `hover` : `press`);
		}, n = H !== null && e !== null ? M.current : null, r = j.current ? getComputedStyle(j.current).direction === `rtl` : !1, i = (e, t) => n !== null && t !== null && x(e, t, n.getBoundingClientRect(), r), a = (e) => {
			N.current = setTimeout(() => {
				let { prev: r, now: o } = F.current;
				o && n && De(o, n.getBoundingClientRect()) || (o && (o.x !== e.x || o.y !== e.y) && i(r, o) ? a(o) : t());
			}, 300);
		}, { prev: o, now: s } = F.current;
		s && i(o, s) ? a(s) : N.current = setTimeout(t, we);
	}, [
		R,
		K,
		H,
		$
	]), ke = (0, T.useCallback)((e, t) => {
		let n = re(j.current, `[data-rail-item]`), r = n.indexOf(e.currentTarget), i = (t) => {
			n[(t + n.length) % n.length]?.focus(), e.preventDefault();
		};
		e.key === `ArrowDown` ? i(r + 1) : e.key === `ArrowUp` ? i(r - 1) : e.key === `Home` ? i(0) : e.key === `End` ? i(n.length - 1) : e.key === `ArrowRight` && t.groups ? (e.preventDefault(), ce(t.id)) : e.key === `Escape` && q ? (e.preventDefault(), $(null)) : e.continuePropagation();
	}, [
		ce,
		q,
		$
	]), je = (0, T.useCallback)((e) => {
		let t = e.target, n = t.closest(`[data-level]`);
		if (!n) return;
		let r = Number(n.getAttribute(`data-level`));
		if (ae(e, n)) return;
		let i = t.tagName === `INPUT`;
		if (e.key === `Escape` && i && k) return;
		let a = t.getAttribute(`data-rail`) === `parent` ? t.getAttribute(`data-rail-key`) : null;
		if (a && e.key === `ArrowRight`) e.preventDefault(), pe(r, a);
		else if (a && e.key === `Escape` && Y[r - 1] === a) e.preventDefault(), Q(r, null);
		else if (e.key === `Escape` || e.key === `ArrowLeft` && !i) {
			if (e.preventDefault(), r > 1) {
				let e = Y[r - 2] ?? null;
				Q(r - 1, null), U(j.current, `data-rail-key`, e)?.focus();
			} else de();
		}
	}, [
		de,
		Y,
		pe,
		k,
		Q
	]), Me = (0, T.useCallback)((e) => {
		e.target?.closest(`a[href]`) && (R ? Q(1, null) : $(null));
	}, [
		R,
		Q,
		$
	]), Ne = (0, T.useCallback)(() => {
		R || $(null);
	}, [R, $]), Pe = (0, T.useCallback)((e) => {
		w(e), S({ docked: e }), W && O({
			id: W.id,
			route: y,
			hover: !1,
			last: W.id
		});
	}, [
		y,
		W,
		S,
		O,
		w
	]), Fe = e.find((e) => e.groups)?.id ?? null, Ie = (0, T.useCallback)(() => {
		if (R && W) w(!1), S({ docked: !1 }), $(null);
		else {
			let e = W?.id ?? V ?? Fe;
			w(!0), S({ docked: !0 }), e && $(e);
		}
	}, [
		R,
		V,
		Fe,
		W,
		S,
		w,
		$
	]);
	(0, T.useEffect)(() => {
		if (!d) return;
		let e = (e) => {
			if (e.key !== d || e.ctrlKey || e.metaKey || e.altKey || e.defaultPrevented || e.target?.closest(`input, textarea, select, [contenteditable]:not([contenteditable="false"])`)) return;
			let t = [...document.querySelectorAll(`[data-rail="root"]`)].find((e) => e.offsetParent !== null);
			(document.activeElement?.closest(`[data-rail="root"]`) ?? t ?? null) === j.current && (e.preventDefault(), Ie());
		};
		return document.addEventListener(`keydown`, e), () => document.removeEventListener(`keydown`, e);
	}, [d, Ie]);
	let Le = (0, T.useCallback)((e) => {
		e.pointerType === `mouse` && (clearTimeout(P.current), be(null), I.hover && (P.current = setTimeout(() => Q(1, null), we)));
	}, [
		be,
		Q,
		I.hover
	]), Re = (0, T.useCallback)(() => {
		clearTimeout(N.current), clearTimeout(P.current);
	}, []), ze = (0, T.useCallback)((e) => {
		j.current = e;
	}, []), Be = m && !m.landmarks ? `div` : `aside`, Ve = l ? u ?? Se[l] : 0, He = (0, T.useMemo)(() => l ? { "--sk-title-bar": `${Ve}px` } : void 0, [l, Ve]), Ue = l ? (0, E.jsx)(`div`, {
		"aria-hidden": !0,
		"data-rail": `drag`,
		className: Ce
	}) : null, We = (0, T.useMemo)(() => ({
		isSelected: R,
		onChange: Pe
	}), [R, Pe]);
	return ue(j, `keydown`, je), ue(j, `click`, Me, !0), (0, E.jsxs)(E.Fragment, { children: [(0, E.jsxs)(Be, {
		ref: ze,
		"aria-label": n.rail,
		...Be === `div` ? { role: `group` } : {},
		"data-rail": `root`,
		"data-docked": R,
		"data-open": W?.id ?? ``,
		"data-desktop": l,
		style: He,
		onPointerLeave: Le,
		onPointerEnter: Re,
		onPointerMove: ge,
		className: i(`relative z-(--sk-z-sidebar) h-full shrink-0`, m ? `hidden @3xl/shell:flex` : `flex`, p),
		children: [
			(0, E.jsxs)(`div`, {
				"data-rail": `bar`,
				className: i(`flex h-full w-18 flex-col border-e border-border bg-sunken pb-2`, !l && `pt-2`),
				children: [
					Ue,
					r ? (0, E.jsx)(`div`, {
						"data-rail": `top`,
						className: `flex shrink-0 justify-center px-1.5 pb-2`,
						children: r
					}) : null,
					(0, E.jsx)(`nav`, {
						"data-rail": `nav`,
						id: m?.navId,
						tabIndex: m ? -1 : void 0,
						"aria-label": n.rail,
						className: `sk-focus-inset min-h-0 flex-1 overflow-y-auto overscroll-contain py-1 [scrollbar-width:thin]`,
						children: (0, E.jsx)(`ul`, {
							className: `flex flex-col items-stretch gap-0.5 px-1`,
							children: e.map((e) => (0, E.jsx)(Ae, {
								section: e,
								isCurrent: e.id === y,
								isOpen: W?.id === e.id,
								isPage: t !== void 0 && e.href === t,
								panelId: g,
								hideLabels: c,
								currentLabel: n.currentSection,
								container: f,
								onPress: ye,
								onKeys: ke,
								onIntent: be,
								onLink: Ne
							}, e.id))
						})
					}),
					a ? (0, E.jsx)(`div`, {
						"data-rail": `bottom`,
						className: `flex shrink-0 flex-col items-center gap-1 border-t border-border px-1.5 pt-2`,
						children: a
					}) : null
				]
			}),
			(0, E.jsx)(`div`, {
				"aria-hidden": !0,
				"data-rail": `dock`,
				className: i(`h-full shrink-0 transition-[width] duration-(--sk-duration-hover) ease-out motion-reduce:transition-none [.a11y-reduce-motion_&]:transition-none`, R && W ? `w-60` : `w-0`)
			}),
			(0, E.jsxs)(`div`, {
				ref: M,
				id: g,
				"data-rail": `panel`,
				"data-level": `1`,
				"data-docked": R || void 0,
				inert: !W || void 0,
				onPointerEnter: Re,
				className: i(`absolute start-[calc(4.5rem-1px)] flex min-h-0 w-60 flex-col border-border bg-surface`, Oe, R ? `inset-y-0 rounded-none border-e` : `inset-y-2 rounded-e-xl border shadow-lg`, W ? `visible translate-x-0 opacity-100` : `invisible -translate-x-2 opacity-0 rtl:translate-x-2`),
				children: [Ue, J ? (0, E.jsx)(G.Provider, {
					value: ve,
					children: (0, E.jsx)(se, {
						section: J,
						current: t,
						labels: n,
						query: k,
						onQueryChange: A,
						titleId: v,
						pin: We
					})
				}) : null]
			}),
			W ? (0, E.jsx)(G.Provider, {
				value: ve,
				children: Y.map((e, n) => {
					let r = ee(W, e);
					if (!r?.children?.length) return null;
					let i = n + 2;
					return (0, E.jsx)(xe, {
						id: Z(i),
						titleId: `${Z(i)}-title`,
						level: i,
						link: r,
						itemKey: e,
						current: t,
						root: j,
						onPointerEnter: Re
					}, e);
				})
			}) : null,
			n.collapse && n.expand ? (0, E.jsx)(Te, {
				label: R && W ? n.collapse : n.expand,
				toggleKey: d,
				isExpanded: R && W !== null,
				isOutside: W !== null,
				controls: g,
				container: f,
				onToggle: Ie
			}) : null
		]
	}), m ? (0, E.jsx)(_e, {
		sections: e,
		current: t,
		currentSection: y,
		labels: n,
		top: r,
		bottom: a,
		container: f,
		className: p
	}) : null] });
}
export { M as a, O as c, P as i, k as l, L as n, A as o, F as r, j as s, je as t };
