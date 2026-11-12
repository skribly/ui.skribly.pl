import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { n, t as r } from "./react-dom.B9zIfLd2.js";
import { t as i } from "./Button.DRxd_7vr.js";
import { t as a } from "./Card.BXBs30ob.js";
import { n as o, t as s } from "./jsx-runtime.yrTYNGQT.js";
import { t as c } from "./check.CUpC8LgP.js";
import { t as l } from "./minus.D36Muiio.js";
import { t as u } from "./plus.BBfKsH18.js";
import { n as d, t as f } from "./rotate-ccw.KeZ3xLst.js";
import { g as p, r as m } from "./createLucideIcon.npgQlVHx.js";
import { t as h } from "./Group.CbcnDyoG.js";
import { r as g } from "./useTextField.D1QWrtYY.js";
import { n as _, t as v } from "./Switch.7lHuWp2t.js";
import { t as ee } from "./Text.DxhsPAdy.js";
import { t as te } from "./LiveRegion.KIF_aJX7.js";
import { t as y } from "./SkipLink.KCD9jNZ-.js";
import { a as ne, c as re, i as ie, r as ae, s as oe } from "./slugs.CpBgIMWb.js";
import { t as se } from "./monitor.V7ofZsHd.js";
import { a as ce, c as le, o as ue, u as de } from "./Dialog.BHaijp-q.js";
import { t as fe } from "./IconButton.DlwxSF13.js";
import { t as pe } from "./VisuallyHidden.D58qh4Cq.js";
var b = t(n(), 1);
function me(e) {
	if (e === null || typeof window > `u`) return null;
	try {
		return window.localStorage.getItem(e);
	} catch {
		return null;
	}
}
function he(e, t) {
	if (e === null || typeof window > `u`) return !1;
	try {
		return t === null ? window.localStorage.removeItem(e) : window.localStorage.setItem(e, t), !0;
	} catch {
		return !1;
	}
}
function x(e) {
	return typeof window < `u` && typeof window.matchMedia == `function` && window.matchMedia(e).matches;
}
function S(e, t) {
	if (typeof window > `u` || typeof window.matchMedia != `function`) return () => {};
	let n = window.matchMedia(e);
	return n.addEventListener(`change`, t), () => n.removeEventListener(`change`, t);
}
var C = s(), w = [
	100,
	110,
	120,
	130,
	140
], T = `skribly-a11y`, E = {
	reduceMotion: !1,
	strongFocus: !1,
	underlineLinks: !1,
	textScale: 100
}, ge = `[&_a]:underline`, D = `(prefers-reduced-motion: reduce)`;
function O(e) {
	let t = e && typeof e == `object` ? e : {}, n = w.includes(t.textScale) ? t.textScale : E.textScale;
	return {
		reduceMotion: t.reduceMotion === !0,
		strongFocus: t.strongFocus === !0,
		underlineLinks: t.underlineLinks === !0,
		textScale: n
	};
}
function _e(e, t) {
	return {
		"a11y-reduce-motion": e.reduceMotion || t,
		"a11y-strong-focus": e.strongFocus,
		"a11y-underline-links": e.underlineLinks,
		[ge]: e.underlineLinks
	};
}
var k = (0, b.createContext)(null);
function ve(e) {
	if (e === null) return E;
	try {
		return O(JSON.parse(e));
	} catch {
		return E;
	}
}
var ye = () => x(D), be = () => !1, xe = (e) => S(D, e), A = new Map(), j = new Map(), M = new Set();
function Se(e) {
	let t = (t) => {
		t.key === null ? A.clear() : A.delete(t.key), e();
	};
	return M.add(e), window.addEventListener(`storage`, t), () => {
		M.delete(e), window.removeEventListener(`storage`, t);
	};
}
function N(e) {
	let t = A.has(e) ? A.get(e) ?? null : me(e), n = j.get(e);
	if (n && n.text === t) return n.value;
	let r = ve(t);
	return j.set(e, {
		text: t,
		value: r
	}), r;
}
function P(e, t) {
	let n = t === null ? null : JSON.stringify(t);
	he(e, n) ? A.delete(e) : A.set(e, n);
	for (let e of M) e();
}
var Ce = () => E;
function we({ children: e, storageKey: t = T, scoped: n = !1, className: r }) {
	let [i, a] = (0, b.useState)(E), s = (0, b.useCallback)(() => t === null ? E : N(t), [t]), c = (0, b.useSyncExternalStore)(Se, s, Ce), l = (0, b.useSyncExternalStore)(xe, ye, be), u = t === null ? i : c, d = _e(u, l), { textScale: f } = u;
	(0, b.useLayoutEffect)(() => {
		if (n) return;
		let e = document.documentElement;
		for (let [t, n] of Object.entries(d)) e.classList.toggle(t, n);
		return e.style.fontSize = f === 100 ? `` : `${f}%`, () => {
			for (let t of Object.keys(d)) e.classList.remove(t);
			e.style.fontSize = ``;
		};
	});
	let p = (0, b.useCallback)((e) => {
		t === null ? a((t) => O({
			...t,
			...e
		})) : P(t, O({
			...N(t),
			...e
		}));
	}, [t]), m = (0, b.useCallback)(() => {
		t === null ? a(E) : P(t, null);
	}, [t]), h = (0, b.useMemo)(() => ({
		...u,
		motionReduced: u.reduceMotion || l,
		systemReducedMotion: l,
		update: p,
		reset: m
	}), [
		u,
		l,
		p,
		m
	]), g = (0, b.useMemo)(() => f === 100 ? void 0 : { zoom: f / 100 }, [f]);
	return (0, C.jsx)(k.Provider, {
		value: h,
		children: n ? (0, C.jsx)(`div`, {
			style: g,
			className: o(...Object.entries(d).map(([e, t]) => t && e), r),
			children: e
		}) : e
	});
}
function F() {
	let e = (0, b.useContext)(k);
	if (!e) throw Error(`useAccessibility must be called inside an AccessibilityProvider.`);
	return e;
}
var Te = 7e3, Ee = 100, De = {
	position: `absolute`,
	width: `1px`,
	height: `1px`,
	padding: `0`,
	margin: `-1px`,
	overflow: `hidden`,
	clipPath: `inset(50%)`,
	whiteSpace: `nowrap`,
	border: `0`
}, I = new Map(), L = new Map();
function Oe(e) {
	let t = I.get(e);
	if (t?.isConnected) return t;
	let n = document.createElement(`div`);
	return n.setAttribute(`aria-live`, e), n.setAttribute(`aria-atomic`, `true`), n.setAttribute(`role`, e === `assertive` ? `alert` : `status`), n.dataset.liveAnnouncer = `true`, n.dataset.skAnnouncer = e, Object.assign(n.style, De), document.body.append(n), I.set(e, n), n;
}
function ke(e, t = `polite`) {
	if (typeof document > `u` || !e) return;
	let n = Oe(t);
	n.textContent = ``, clearTimeout(L.get(t)), L.set(t, setTimeout(() => {
		n.textContent = e, L.set(t, setTimeout(() => {
			n.textContent = ``;
		}, Te));
	}, Ee));
}
function R() {
	return (0, b.useCallback)((e, t = `polite`) => ke(e, t), []);
}
var z = `flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-border py-3 last:border-b-0`, B = `flex min-w-[min(100%,14rem)] flex-1 flex-col gap-0.5`, V = `inline-flex h-full w-control-lg shrink-0 items-center justify-center text-fg outline-none transition-colors data-hovered:bg-hover data-pressed:bg-selected data-disabled:cursor-not-allowed data-disabled:text-muted data-disabled:opacity-60 data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-solid data-focus-visible:outline-focus data-focus-visible:-outline-offset-2`;
function H({ title: e, hint: t, isSelected: n, isReadOnly: r = !1, onChange: i }) {
	return (0, C.jsxs)(v, {
		isSelected: n,
		isReadOnly: r,
		onChange: i,
		className: o(z, `flex-col items-stretch gap-y-0.5`),
		children: [(0, C.jsx)(_, {
			className: `group flex min-h-control-md w-full cursor-pointer items-center justify-between gap-6 data-readonly:cursor-default`,
			children: ({ isSelected: t }) => (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)(`span`, {
				className: `min-w-0 text-body font-medium text-fg`,
				children: e
			}), (0, C.jsx)(`span`, {
				"aria-hidden": !0,
				className: o(`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border-2 transition-colors duration-(--sk-duration-fast)`, `group-data-focus-visible:outline-(length:--sk-focus-width) group-data-focus-visible:outline-offset-2 group-data-focus-visible:outline-solid group-data-focus-visible:outline-focus`, `group-data-readonly:opacity-70 forced-colors:border-[ButtonText]`, t ? `border-accent bg-accent forced-colors:bg-[Highlight]` : `border-border-strong bg-sunken group-data-hovered:bg-hover forced-colors:bg-[Canvas]`),
				children: (0, C.jsx)(`span`, {
					className: o(`inline-flex size-4 items-center justify-center rounded-full shadow-sm transition-transform duration-(--sk-duration-fast)`, t ? `translate-x-[1.375rem] bg-accent-fg text-accent-text forced-colors:bg-[HighlightText]` : `translate-x-0.5 bg-muted forced-colors:bg-[ButtonText]`),
					children: t ? (0, C.jsx)(c, {
						size: 12,
						strokeWidth: 3
					}) : null
				})
			})] })
		}), t ? (0, C.jsx)(ee, {
			slot: `description`,
			className: `max-w-prose text-caption text-muted`,
			children: t
		}) : null]
	});
}
var Ae = {
	style: `unit`,
	unit: `percent`
}, je = w[0], Me = w[w.length - 1] ?? w[0];
function Ne({ labels: e, children: t, className: n }) {
	let r = F(), a = R(), { update: s, reset: c } = r, _ = e.resetDone, v = (0, b.useCallback)((e) => (t) => s({ [e]: t }), [s]), te = (0, b.useCallback)((e) => {
		Number.isFinite(e) && s({ textScale: e });
	}, [s]), y = (0, b.useCallback)(() => {
		c(), _ && a(_);
	}, [
		a,
		c,
		_
	]);
	return (0, C.jsxs)(`div`, {
		className: o(`flex flex-col text-fg`, n),
		children: [
			t,
			(0, C.jsxs)(d, {
				value: r.textScale,
				minValue: je,
				maxValue: Me,
				step: 10,
				formatOptions: Ae,
				onChange: te,
				decrementAriaLabel: e.smaller,
				incrementAriaLabel: e.larger,
				className: z,
				children: [(0, C.jsxs)(`div`, {
					className: B,
					children: [(0, C.jsx)(p, {
						className: `text-body font-medium text-fg`,
						children: e.textScale
					}), e.textScaleHint ? (0, C.jsx)(ee, {
						slot: `description`,
						className: `max-w-prose text-caption text-muted`,
						children: e.textScaleHint
					}) : null]
				}), (0, C.jsxs)(h, {
					className: `inline-flex h-control-lg shrink-0 items-stretch overflow-hidden rounded-md border border-border-strong bg-input forced-colors:border-[ButtonText]`,
					children: [
						(0, C.jsx)(m, {
							slot: `decrement`,
							className: o(V, `border-r border-border`),
							children: (0, C.jsx)(l, {
								size: 16,
								"aria-hidden": !0
							})
						}),
						(0, C.jsx)(g, { className: `w-16 min-w-0 bg-transparent text-center text-body text-fg tabular-nums outline-none focus-visible:outline-(length:--sk-focus-width) focus-visible:-outline-offset-2 focus-visible:outline-solid focus-visible:outline-focus` }),
						(0, C.jsx)(m, {
							slot: `increment`,
							className: o(V, `border-l border-border`),
							children: (0, C.jsx)(u, {
								size: 16,
								"aria-hidden": !0
							})
						})
					]
				})]
			}),
			(0, C.jsx)(H, {
				title: e.reduceMotion,
				hint: r.systemReducedMotion && e.reduceMotionSystem ? e.reduceMotionSystem : e.reduceMotionHint,
				isSelected: r.motionReduced,
				isReadOnly: r.systemReducedMotion,
				onChange: v(`reduceMotion`)
			}),
			(0, C.jsx)(H, {
				title: e.strongFocus,
				hint: e.strongFocusHint,
				isSelected: r.strongFocus,
				onChange: v(`strongFocus`)
			}),
			(0, C.jsx)(H, {
				title: e.underlineLinks,
				hint: e.underlineLinksHint,
				isSelected: r.underlineLinks,
				onChange: v(`underlineLinks`)
			}),
			(0, C.jsxs)(`div`, {
				className: z,
				children: [e.resetHint ? (0, C.jsx)(`p`, {
					className: o(B, `text-caption text-muted`),
					children: e.resetHint
				}) : null, (0, C.jsxs)(i, {
					variant: `outline`,
					onPress: y,
					className: `shrink-0`,
					children: [(0, C.jsx)(f, {
						size: 16,
						"aria-hidden": !0
					}), e.reset]
				})]
			})
		]
	});
}
var Pe = t(r(), 1), U = [
	`light`,
	`dark`,
	`contrast`,
	`system`
], W = `skribly-theme`, G = (0, b.createContext)(null), K = `(prefers-color-scheme: dark)`, Fe = `(prefers-contrast: more)`, Ie = `(prefers-reduced-motion: reduce)`, Le = 450;
function Re(e) {
	return typeof e == `string` && U.includes(e);
}
function ze() {
	return x(Fe) ? `contrast` : x(K) ? `dark` : `light`;
}
function Be(e) {
	let t = S(K, e), n = S(Fe, e);
	return () => {
		t(), n();
	};
}
var Ve = () => `light`, q = new Map(), J = new Set();
function He(e) {
	return J.add(e), window.addEventListener(`storage`, e), () => {
		J.delete(e), window.removeEventListener(`storage`, e);
	};
}
function Ue(e, t) {
	he(e, t) ? q.delete(e) : q.set(e, t);
	for (let e of J) e();
}
function We() {
	return x(Ie) || document.documentElement.classList.contains(`a11y-reduce-motion`);
}
function Ge() {
	let e = getComputedStyle(document.documentElement).getPropertyValue(`--sk-bg`).trim();
	if (e) for (let t of document.querySelectorAll(`meta[name="theme-color"]`)) t.content = e;
}
function Ke(e) {
	let t = document.documentElement;
	e === `system` ? t.removeAttribute(`data-theme`) : t.setAttribute(`data-theme`, e), Ge();
}
function qe(e, t) {
	let n = document.startViewTransition(t), { x: r, y: i } = e, a = Math.hypot(Math.max(r, window.innerWidth - r), Math.max(i, window.innerHeight - i));
	n.ready.then(() => {
		let e = document.documentElement, t = {
			duration: Le,
			easing: `ease-in-out`
		};
		e.animate({ opacity: [1, 1] }, {
			...t,
			pseudoElement: `::view-transition-old(root)`
		}), e.animate({
			opacity: [1, 1],
			clipPath: [`circle(0px at ${r}px ${i}px)`, `circle(${a}px at ${r}px ${i}px)`]
		}, {
			...t,
			pseudoElement: `::view-transition-new(root)`
		});
	}).catch(() => void 0);
}
function Y({ children: e, defaultMode: t = `system`, mode: n, onModeChange: r, storageKey: i = W, scoped: a = !1, className: s }) {
	let [c, l] = (0, b.useState)(t), u = (0, b.useCallback)(() => {
		if (i === null) return t;
		let e = me(i) ?? q.get(i) ?? null;
		return Re(e) ? e : t;
	}, [i, t]), d = (0, b.useCallback)(() => t, [t]), f = (0, b.useSyncExternalStore)(He, u, d), p = (0, b.useSyncExternalStore)(Be, ze, Ve), m = n ?? (i === null ? c : f), h = m === `system` ? p : m;
	(0, b.useLayoutEffect)(() => {
		if (!a) return Ke(m), m === `system` ? Be(Ge) : void 0;
	}, [m, a]);
	let g = (0, b.useCallback)((e, t) => {
		let o = () => {
			n === void 0 && (i === null ? l(e) : Ue(i, e)), r?.(e);
		}, s = t?.origin;
		a || !s || typeof document.startViewTransition != `function` || We() ? o() : qe(s, () => {
			(0, Pe.flushSync)(o), n === void 0 && Ke(e);
		});
	}, [
		n,
		r,
		a,
		i
	]), _ = (0, b.useMemo)(() => ({
		mode: m,
		resolvedTheme: h,
		setMode: g
	}), [
		m,
		h,
		g
	]);
	return (0, C.jsx)(G.Provider, {
		value: _,
		children: a ? (0, C.jsx)(`div`, {
			"data-theme": h,
			className: o(`bg-bg text-fg`, s),
			children: e
		}) : e
	});
}
function Je() {
	let e = (0, b.useContext)(G);
	if (!e) throw Error(`useTheme must be called inside a ThemeProvider.`);
	return e;
}
var X = (e) => JSON.stringify(e).replaceAll(`<`, `\\u003c`);
function Ye({ storageKey: e = W, accessibilityKey: t = T } = {}) {
	return `(function(){var r=document.documentElement;${`try{var t=localStorage.getItem(${X(e)});if(t==="light"||t==="dark"||t==="contrast")r.setAttribute("data-theme",t)}catch(e){}`}${t === null ? `` : `try{var a=JSON.parse(localStorage.getItem(${X(t)})||"null")||{},c=r.classList;if(a.reduceMotion===true)c.add("a11y-reduce-motion");if(a.strongFocus===true)c.add("a11y-strong-focus");if(a.underlineLinks===true){c.add("a11y-underline-links");c.add("[&_a]:underline")}if(${X(w.slice(1))}.indexOf(a.textScale)>-1)r.style.fontSize=a.textScale+"%"}catch(e){}`}})();`;
}
var Z = {
	light: ae,
	dark: ie,
	contrast: ne,
	system: se
};
function Xe(e) {
	if (!e) return;
	let t = e.getBoundingClientRect();
	return {
		x: t.left + t.width / 2,
		y: t.top + t.height / 2
	};
}
function Ze(e) {
	return e === `all` ? void 0 : e.values().next().value;
}
function Q({ label: e, options: t, descriptions: n, modes: r = U, variant: i = `segmented`, size: a = `md`, showLabels: s = `auto`, container: l, className: u }) {
	let { mode: d, resolvedTheme: f, setMode: p } = Je(), m = (0, b.useMemo)(() => [d], [d]), h = (0, b.useCallback)((e) => {
		let t = Ze(e);
		Re(t) && t !== d && p(t, { origin: Xe(document.activeElement) ?? {
			x: 0,
			y: 0
		} });
	}, [d, p]);
	if (i === `menu`) {
		let i = d === `system` ? Z.system : Z[f];
		return (0, C.jsxs)(ce, { children: [(0, C.jsx)(fe, {
			label: e,
			size: a,
			...l === void 0 ? {} : { container: l },
			...u === void 0 ? {} : { className: u },
			children: (0, C.jsx)(i, {
				size: a === `sm` ? 16 : 18,
				"aria-hidden": !0
			})
		}), (0, C.jsx)(de, {
			...l === void 0 ? {} : { UNSTABLE_portalContainer: l },
			placement: `bottom end`,
			className: `min-w-56 max-w-[calc(100vw-2rem)] overflow-auto rounded-lg border border-border bg-surface p-1 text-fg shadow-lg outline-none data-entering:animate-rise data-exiting:animate-fade data-exiting:[animation-direction:reverse] forced-colors:border-[CanvasText]`,
			children: (0, C.jsx)(le, {
				"aria-label": e,
				selectionMode: `single`,
				disallowEmptySelection: !0,
				selectedKeys: m,
				onSelectionChange: h,
				className: `outline-none`,
				children: r.map((e) => {
					let r = Z[e], i = n?.[e];
					return (0, C.jsx)(ue, {
						id: e,
						textValue: t[e],
						className: `flex min-h-control-md cursor-default items-center gap-3 rounded-md px-2 py-1.5 text-body text-fg outline-none data-focused:bg-hover data-pressed:bg-selected data-selected:font-medium forced-colors:data-focused:bg-[Highlight] forced-colors:data-focused:text-[HighlightText]`,
						children: ({ isSelected: n }) => (0, C.jsxs)(C.Fragment, { children: [
							(0, C.jsx)(r, {
								size: 16,
								"aria-hidden": !0,
								className: `shrink-0 text-muted`
							}),
							(0, C.jsxs)(`span`, {
								className: `flex min-w-0 grow flex-col`,
								children: [(0, C.jsx)(`span`, {
									className: `break-words`,
									children: t[e]
								}), i ? (0, C.jsxs)(C.Fragment, { children: [` `, (0, C.jsx)(`span`, {
									className: `text-caption text-muted`,
									children: i
								})] }) : null]
							}),
							(0, C.jsx)(c, {
								size: 16,
								"aria-hidden": !0,
								className: o(`shrink-0 text-accent-text`, !n && `invisible`)
							})
						] })
					}, e);
				})
			})
		})] });
	}
	return (0, C.jsx)(`div`, {
		className: o(s === `auto` ? `@container w-full` : `max-w-full`, u),
		children: (0, C.jsx)(re, {
			"aria-label": e,
			selectionMode: `single`,
			disallowEmptySelection: !0,
			selectedKeys: m,
			onSelectionChange: h,
			className: `inline-flex max-w-full gap-0.5 rounded-lg border border-border-strong bg-sunken p-0.5 forced-colors:border-[CanvasText]`,
			children: r.map((e) => {
				let n = Z[e];
				return (0, C.jsxs)(oe, {
					id: e,
					className: o(`inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent font-medium text-muted outline-offset-1 transition-colors duration-(--sk-duration-fast)`, `data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-selected`, `data-selected:border-border-strong data-selected:bg-surface data-selected:text-fg data-selected:shadow-sm`, `data-disabled:cursor-not-allowed data-disabled:opacity-50`, `forced-colors:data-selected:border-[Highlight] forced-colors:data-selected:bg-[Highlight] forced-colors:data-selected:text-[HighlightText]`, a === `sm` ? `h-control-sm min-w-control-sm px-2 text-caption` : `h-control-md min-w-control-md px-3 text-body`),
					children: [(0, C.jsx)(n, {
						size: a === `sm` ? 14 : 16,
						"aria-hidden": !0,
						className: `shrink-0`
					}), (0, C.jsx)(`span`, {
						className: o(`truncate`, s === `never` && `sr-only`, s === `auto` && `@max-[24rem]:sr-only`),
						children: t[e]
					})]
				}, e);
			})
		})
	});
}
var Qe = e({ default: () => lt }), $ = {
	light: `Light`,
	dark: `Dark`,
	contrast: `High contrast`,
	system: `Same as system`
}, $e = {
	light: `Always light`,
	dark: `Always dark`,
	contrast: `Strongest text and borders`,
	system: `Follows the device`
}, et = {
	textScale: `Text size`,
	textScaleHint: `Makes the whole interface larger, layout included.`,
	smaller: `Smaller text`,
	larger: `Larger text`,
	reduceMotion: `Reduce motion`,
	reduceMotionHint: `Stops transitions and animations.`,
	reduceMotionSystem: `Your device already asks for less motion, so this stays on.`,
	strongFocus: `Strong focus ring`,
	strongFocusHint: `A thicker outline around the element the keyboard is on.`,
	underlineLinks: `Underline links`,
	underlineLinksHint: `Links stand out by more than colour.`,
	reset: `Restore defaults`,
	resetHint: `Puts every setting in this section back.`,
	resetDone: `Accessibility settings restored`
};
function tt() {
	let { mode: e, resolvedTheme: t } = Je();
	return (0, C.jsxs)(`p`, {
		className: `text-caption text-muted`,
		children: [
			`Chosen: `,
			(0, C.jsx)(`strong`, {
				className: `text-fg`,
				children: $[e]
			}),
			`. On screen: `,
			(0, C.jsx)(`strong`, {
				className: `text-fg`,
				children: $[t]
			}),
			`.`
		]
	});
}
function nt() {
	return (0, C.jsx)(Y, {
		scoped: !0,
		storageKey: null,
		className: `rounded-lg border border-border p-4`,
		children: (0, C.jsxs)(`div`, {
			className: `flex flex-col gap-3`,
			children: [(0, C.jsx)(Q, {
				label: `Theme`,
				options: $
			}), (0, C.jsx)(tt, {})]
		})
	});
}
function rt() {
	let [e, t] = (0, b.useState)(null);
	return (0, C.jsx)(Y, {
		scoped: !0,
		storageKey: null,
		defaultMode: `light`,
		className: `rounded-lg border border-border p-4`,
		children: (0, C.jsxs)(`div`, {
			ref: t,
			className: `flex flex-col gap-4`,
			children: [
				(0, C.jsx)(Q, {
					label: `Theme`,
					options: $,
					modes: [
						`light`,
						`dark`,
						`system`
					],
					size: `sm`
				}),
				(0, C.jsxs)(`div`, {
					className: `flex items-center gap-2 rounded-md bg-bar px-2 py-1`,
					children: [(0, C.jsx)(`span`, {
						className: `grow truncate text-caption font-medium`,
						children: `Top bar`
					}), (0, C.jsx)(Q, {
						variant: `menu`,
						label: `Theme`,
						options: $,
						descriptions: $e,
						size: `sm`,
						...e ? { container: e } : {}
					})]
				}),
				(0, C.jsxs)(`div`, {
					className: `flex items-center gap-2`,
					children: [(0, C.jsx)(`span`, {
						className: `grow text-caption text-muted`,
						children: `Icons only:`
					}), (0, C.jsx)(Q, {
						label: `Theme`,
						options: $,
						showLabels: `never`,
						size: `sm`
					})]
				})
			]
		})
	});
}
function it() {
	let { motionReduced: e } = F();
	return (0, C.jsxs)(`div`, {
		className: `flex flex-col gap-2 rounded-md border border-border bg-sunken p-3 text-body`,
		children: [
			(0, C.jsxs)(`p`, { children: [
				`Sample text with `,
				(0, C.jsx)(`a`, {
					href: `#accessibility-sample`,
					className: `font-medium text-accent-text underline decoration-dotted underline-offset-2 hover:decoration-solid in-[.a11y-underline-links]:decoration-solid in-[.a11y-underline-links]:decoration-2`,
					children: `a link`
				}),
				` in it.`
			] }),
			(0, C.jsx)(`p`, {
				className: `text-caption text-muted`,
				children: `Motion: ${e ? `reduced` : `full`}.`
			}),
			(0, C.jsx)(i, {
				variant: `outline`,
				size: `sm`,
				className: `self-start`,
				children: `Tab to me`
			})
		]
	});
}
function at() {
	return (0, C.jsx)(Y, {
		scoped: !0,
		storageKey: null,
		className: `rounded-lg p-3`,
		children: (0, C.jsxs)(we, {
			scoped: !0,
			storageKey: null,
			className: `flex flex-col gap-3`,
			children: [(0, C.jsx)(a, {
				className: `p-0 px-4`,
				children: (0, C.jsx)(Ne, {
					labels: et,
					children: (0, C.jsxs)(`div`, {
						className: `flex flex-col gap-2 border-b border-border py-3`,
						children: [(0, C.jsx)(`span`, {
							"aria-hidden": !0,
							className: `text-body font-medium`,
							children: `Theme`
						}), (0, C.jsx)(Q, {
							label: `Theme`,
							options: $,
							size: `sm`
						})]
					})
				})
			}), (0, C.jsx)(it, {})]
		})
	});
}
function ot() {
	return (0, C.jsxs)(`div`, {
		className: `flex flex-col gap-2`,
		children: [(0, C.jsxs)(`p`, {
			className: `text-caption text-muted`,
			children: [
				`Rendered on the server as `,
				(0, C.jsx)(`code`, { children: `<ThemeScript />` }),
				`, it writes this into the head:`
			]
		}), (0, C.jsx)(`pre`, {
			className: `rounded-md border border-border bg-sunken p-3 font-mono text-caption break-all whitespace-pre-wrap`,
			children: Ye()
		})]
	});
}
function st() {
	let e = (0, b.useId)();
	return (0, C.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [
			(0, C.jsx)(y, {
				targetId: `${e}-content`,
				children: `Skip to content`
			}),
			(0, C.jsx)(`p`, {
				className: `text-caption text-muted`,
				children: `Tab into this panel: the first stop is a link that appears in the top corner of the window.`
			}),
			(0, C.jsxs)(`nav`, {
				"aria-label": `Sample`,
				className: `flex flex-wrap gap-2`,
				children: [(0, C.jsx)(i, {
					variant: `ghost`,
					size: `sm`,
					children: `Projects`
				}), (0, C.jsx)(i, {
					variant: `ghost`,
					size: `sm`,
					children: `Reports`
				})]
			}),
			(0, C.jsxs)(`section`, {
				id: `${e}-content`,
				"aria-labelledby": `${e}-title`,
				className: `rounded-md border border-border p-3 focus:outline-(length:--sk-focus-width) focus:outline-solid focus:outline-focus`,
				children: [(0, C.jsx)(`h4`, {
					id: `${e}-title`,
					className: `text-title font-semibold`,
					children: `Content`
				}), (0, C.jsxs)(`p`, {
					className: `text-body`,
					children: [
						`Size: 40 `,
						(0, C.jsx)(`abbr`, {
							title: `megabytes`,
							children: `MB`
						}),
						(0, C.jsx)(pe, { children: ` per file` }),
						(0, C.jsx)(`span`, {
							"aria-hidden": !0,
							children: `/file`
						})
					]
				})]
			})
		]
	});
}
function ct() {
	let e = R(), [t, n] = (0, b.useState)(0);
	return (0, C.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [(0, C.jsxs)(`div`, {
			className: `flex flex-wrap gap-2`,
			children: [
				(0, C.jsx)(i, {
					variant: `outline`,
					onPress: () => n((e) => e + 1),
					children: `Add a result`
				}),
				(0, C.jsx)(i, {
					variant: `outline`,
					onPress: () => e(`Draft saved`),
					children: `Save draft`
				}),
				(0, C.jsx)(i, {
					variant: `danger`,
					onPress: () => e(`Could not reach the server. Your changes are kept.`, `assertive`),
					children: `Simulate an error`
				})
			]
		}), (0, C.jsx)(te, {
			visible: !0,
			className: `text-caption text-muted`,
			children: t === 0 ? `No results yet.` : `${t} ${t === 1 ? `result` : `results`} found.`
		})]
	});
}
var lt = {
	title: `Theme and accessibility`,
	description: `Light, dark and high contrast themes with the reader settings of the Skribly apps: text size, reduced motion, a strong focus ring and underlined links. Also the small pieces every page needs: a skip link, hidden labels and live announcements. Built to WCAG 2.2 AA as a target.`,
	pl: {
		title: `Motyw i dostępność`,
		description: `Motyw dzienny, nocny i wysokiego kontrastu z ustawieniami czytelnika w aplikacjach Skribly: rozmiar tekstu, ograniczony ruch, wyraźna obwódka fokusa i podkreślone linki. Do tego drobne elementy potrzebne na każdej stronie: link pomijający, ukryte etykiety i ogłoszenia na żywo. Budowane z celem WCAG 2.2 AA.`
	},
	demos: [
		{
			name: `ThemeProvider`,
			components: [`ThemeProvider`],
			description: `Holds the theme mode, stores the choice and sets data-theme on the page. Put one at the root of an app; useTheme reads and changes the mode from any component below it. scoped themes a single panel, as here.`,
			usage: `<ThemeProvider>
  <App />
</ThemeProvider>

function Status() {
  const { mode, resolvedTheme, setMode } = useTheme()
  return <button onClick={() => setMode('dark')}>{resolvedTheme}</button>
}`,
			accessibility: `Same as system follows the device, including a request for more contrast. The theme change animates from the pressed button only when motion is allowed. Contrast of every text and control pairing is tested in all three themes.`,
			pl: {
				description: `Przechowuje tryb motywu, zapamiętuje wybór i ustawia data-theme na stronie. Umieść jeden w korzeniu aplikacji; useTheme odczytuje i zmienia tryb z dowolnego komponentu poniżej. scoped nadaje motyw pojedynczemu panelowi, tak jak tutaj.`,
				accessibility: `Tryb Jak w systemie podąża za urządzeniem, łącznie z prośbą o większy kontrast. Zmiana motywu animuje się od wciśniętego przycisku tylko wtedy, gdy ruch jest dozwolony. Kontrast każdej pary tekstu i kontrolki jest testowany we wszystkich trzech motywach.`
			},
			render: () => (0, C.jsx)(nt, {})
		},
		{
			name: `ThemeToggle`,
			components: [`ThemeToggle`],
			description: `Lets the reader pick light, dark, high contrast or the system setting. Use the segmented form in settings and the menu form in a crowded top bar.`,
			usage: `<ThemeToggle
  label="Theme"
  options={{ light: 'Light', dark: 'Dark', contrast: 'High contrast', system: 'Same as system' }}
/>
<ThemeToggle variant="menu" label="Theme" options={options} descriptions={hints} />`,
			accessibility: `The segmented form is a radio group: Tab enters it, arrow keys move, Space or Enter chooses. The menu form is a button that opens a menu of radio items; Escape closes it and returns focus. The selected option shows a raised tile or a check mark, never colour alone, and stays visible in Windows high contrast. In a narrow container the words hide visually but stay in the accessible name.`,
			pl: {
				description: `Pozwala czytelnikowi wybrać motyw dzienny, nocny, wysokiego kontrastu albo ustawienie systemu. W ustawieniach użyj formy segmentowej, a w zatłoczonym górnym pasku formy menu.`,
				accessibility: `Forma segmentowa jest grupą przycisków opcji: Tab wchodzi do niej, klawisze strzałek przesuwają, Spacja lub Enter wybiera. Forma menu to przycisk otwierający menu z pozycjami opcji; Escape zamyka menu i zwraca fokus. Wybrana opcja pokazuje uniesiony kafelek albo znacznik, nigdy tylko kolor, i pozostaje widoczna w trybie wysokiego kontrastu systemu Windows. W wąskim kontenerze słowa są ukryte wizualnie, ale zostają w nazwie dostępnej.`
			},
			render: () => (0, C.jsx)(rt, {})
		},
		{
			name: `ThemeScript`,
			components: [`ThemeScript`],
			description: `An inline script for the head that applies the stored theme and reader settings before the first paint, so a dark page never flashes light. themeScript() gives the same source as a string for heads that React does not render.`,
			usage: `<head>
  <ThemeScript nonce={nonce} />
</head>

<script is:inline set:html={themeScript()} />`,
			accessibility: `Prevents a flash of the wrong theme and a jump in text size, both of which disturb readers with light sensitivity or low vision. Accepts a nonce for a strict Content Security Policy.`,
			pl: {
				description: `Skrypt wbudowany w head, który stosuje zapisany motyw i ustawienia czytelnika przed pierwszym wyrenderowaniem, aby ciemna strona nigdy nie błysnęła jasnym tłem. themeScript() daje to samo źródło jako tekst dla sekcji head, której React nie renderuje.`,
				accessibility: `Zapobiega błyskowi niewłaściwego motywu i skokowi rozmiaru tekstu, które przeszkadzają osobom wrażliwym na światło lub słabowidzącym. Przyjmuje nonce dla ścisłej polityki Content Security Policy.`
			},
			render: () => (0, C.jsx)(ot, {})
		},
		{
			name: `AccessibilitySettings`,
			components: [`AccessibilityProvider`, `AccessibilitySettings`],
			description: `AccessibilityProvider applies the reader settings to the page and stores them on the device; useAccessibility reads them, for example to skip an animation. AccessibilitySettings is the ready settings section, and takes extra rows such as a ThemeToggle.`,
			usage: `<AccessibilityProvider>
  <AccessibilitySettings labels={labels}>
    <ThemeToggle label="Theme" options={options} />
  </AccessibilitySettings>
</AccessibilityProvider>

const { motionReduced } = useAccessibility()`,
			accessibility: `Text size is a spin button: arrow keys, Page Up, Page Down, Home and End step it, and the minus and plus buttons give pointer users 44px targets. Each setting is a switch named by its title and described by its hint. A system request for reduced motion always wins and locks that switch on. Restore defaults is confirmed through a polite live region.`,
			pl: {
				description: `AccessibilityProvider stosuje ustawienia czytelnika na stronie i zapisuje je na urządzeniu; useAccessibility je odczytuje, na przykład aby pominąć animację. AccessibilitySettings to gotowa sekcja ustawień, która przyjmuje dodatkowe wiersze, takie jak ThemeToggle.`,
				accessibility: `Rozmiar tekstu to pole z przyciskami zmiany wartości: klawisze strzałek, Page Up, Page Down, Home i End zmieniają go krokami, a przyciski minus i plus dają użytkownikom wskaźnika cele o rozmiarze 44 px. Każde ustawienie jest przełącznikiem nazwanym swoim tytułem i opisanym podpowiedzią. Systemowa prośba o ograniczony ruch zawsze wygrywa i blokuje ten przełącznik w pozycji włączonej. Przywrócenie domyślnych jest potwierdzane w regionie na żywo typu polite.`
			},
			render: () => (0, C.jsx)(at, {})
		},
		{
			name: `SkipLink and VisuallyHidden`,
			components: [`SkipLink`, `VisuallyHidden`],
			description: `SkipLink lets keyboard users jump past repeated navigation to the content. VisuallyHidden keeps text for screen readers only, such as the unit after a number or the name of an icon.`,
			usage: `<SkipLink targetId="content">Skip to content</SkipLink>
<main id="content">…</main>

<span aria-hidden>/file</span>
<VisuallyHidden> per file</VisuallyHidden>`,
			accessibility: `The skip link is hidden until it has focus, then appears in the top corner with a 44px target. Following it moves focus to the target as well as the scroll position, so the next Tab continues from the content. Prefer a visible label to hidden text wherever there is room.`,
			pl: {
				description: `SkipLink pozwala użytkownikom klawiatury ominąć powtarzaną nawigację i przejść do treści. VisuallyHidden zachowuje tekst tylko dla czytników ekranu, na przykład jednostkę po liczbie albo nazwę ikony.`,
				accessibility: `Link pomijający jest ukryty, dopóki nie dostanie fokusa, a potem pojawia się w górnym rogu z celem 44 px. Przejście za nim przenosi fokus na cel, a nie tylko pozycję przewijania, więc następny Tab kontynuuje od treści. Tam, gdzie jest miejsce, wybieraj widoczną etykietę zamiast ukrytego tekstu.`
			},
			render: () => (0, C.jsx)(st, {})
		},
		{
			name: `LiveRegion and useAnnounce`,
			components: [`LiveRegion`],
			description: `LiveRegion reads changes to its content aloud, such as a result count after filtering. useAnnounce speaks a one-off message without showing it, such as "Draft saved" after a shortcut.`,
			usage: `<LiveRegion>{count} results</LiveRegion>

const announce = useAnnounce()
announce('Draft saved')
announce('Could not reach the server', 'assertive')`,
			accessibility: `Polite messages wait for the screen reader to finish; assertive ones interrupt and are only for errors that block the reader. Render a LiveRegion empty from the start, because a region that appears with its text is often not read. Announcements stay readable while a modal dialog is open, and the same message twice is read twice.`,
			pl: {
				description: `LiveRegion odczytuje na głos zmiany swojej zawartości, na przykład liczbę wyników po filtrowaniu. useAnnounce wypowiada jednorazowy komunikat bez pokazywania go, na przykład „Draft saved” po skrócie klawiszowym.`,
				accessibility: `Komunikaty polite czekają, aż czytnik ekranu skończy; assertive przerywają i służą tylko błędom, które blokują czytelnika. Renderuj LiveRegion pusty od początku, bo region, który pojawia się razem z tekstem, często nie jest odczytywany. Ogłoszenia pozostają słyszalne, gdy otwarte jest modalne okno dialogowe, a ten sam komunikat dwa razy jest odczytany dwa razy.`
			},
			render: () => (0, C.jsx)(ct, {})
		}
	]
};
export { Qe as t };
