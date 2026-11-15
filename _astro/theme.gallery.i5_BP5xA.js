import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { n, t as r } from "./react-dom.B9zIfLd2.js";
import { t as i } from "./Button.D4_9kLv-.js";
import { t as a } from "./Card.36mcHvX5.js";
import { A as o, F as s, I as c, R as l, Z as u, j as d } from "./doc.DoLlUurT.js";
import { i as f, n as p, r as m, t as h } from "./storage.DycSY7Q5.js";
import { t as g } from "./Group.FJVraJu6.js";
import { r as _ } from "./useTextField.yppvIDGl.js";
import { t as v } from "./NumberField.Dt2l0mLm.js";
import { n as ee, t as te } from "./Switch.DAVfi4P3.js";
import { t as y } from "./Text.CWB1nGTv.js";
import { t as ne } from "./LiveRegion.4HAU7tEY.js";
import { t as re } from "./SkipLink.BjszRMaZ.js";
import { a as ie, c as ae, o as oe, u as se } from "./Dialog.C8eIUYfG.js";
import { n as ce, t as le } from "./ToggleButton.DdDl1WJr.js";
import { t as ue } from "./IconButton.CO9JIdQj.js";
import { t as de } from "./VisuallyHidden.CxLnoxgx.js";
var b = t(n(), 1), x = s(), S = [
	100,
	110,
	120,
	130,
	140
], C = `skribly-a11y`, w = {
	reduceMotion: !1,
	strongFocus: !1,
	underlineLinks: !1,
	textScale: 100
}, fe = `[&_a]:underline`, pe = `(prefers-reduced-motion: reduce)`;
function T(e) {
	let t = e && typeof e == `object` ? e : {}, n = S.includes(t.textScale) ? t.textScale : w.textScale;
	return {
		reduceMotion: t.reduceMotion === !0,
		strongFocus: t.strongFocus === !0,
		underlineLinks: t.underlineLinks === !0,
		textScale: n
	};
}
function me(e, t) {
	return {
		"a11y-reduce-motion": e.reduceMotion || t,
		"a11y-strong-focus": e.strongFocus,
		"a11y-underline-links": e.underlineLinks,
		[fe]: e.underlineLinks
	};
}
var E = (0, b.createContext)(null);
function he(e) {
	if (e === null) return w;
	try {
		return T(JSON.parse(e));
	} catch {
		return w;
	}
}
var ge = () => h(pe), _e = () => !1, ve = (e) => m(pe, e), D = new Map(), O = new Map(), k = new Set();
function ye(e) {
	let t = (t) => {
		t.key === null ? D.clear() : D.delete(t.key), e();
	};
	return k.add(e), window.addEventListener(`storage`, t), () => {
		k.delete(e), window.removeEventListener(`storage`, t);
	};
}
function A(e) {
	let t = D.has(e) ? D.get(e) ?? null : p(e), n = O.get(e);
	if (n && n.text === t) return n.value;
	let r = he(t);
	return O.set(e, {
		text: t,
		value: r
	}), r;
}
function j(e, t) {
	let n = t === null ? null : JSON.stringify(t);
	f(e, n) ? D.delete(e) : D.set(e, n);
	for (let e of k) e();
}
var be = () => w;
function xe({ children: e, storageKey: t = C, scoped: n = !1, className: r }) {
	let [i, a] = (0, b.useState)(w), o = (0, b.useCallback)(() => t === null ? w : A(t), [t]), s = (0, b.useSyncExternalStore)(ye, o, be), l = (0, b.useSyncExternalStore)(ve, ge, _e), u = t === null ? i : s, d = me(u, l), { textScale: f } = u;
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
		t === null ? a((t) => T({
			...t,
			...e
		})) : j(t, T({
			...A(t),
			...e
		}));
	}, [t]), m = (0, b.useCallback)(() => {
		t === null ? a(w) : j(t, null);
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
	return (0, x.jsx)(E.Provider, {
		value: h,
		children: n ? (0, x.jsx)(`div`, {
			style: g,
			className: c(...Object.entries(d).map(([e, t]) => t && e), r),
			children: e
		}) : e
	});
}
function Se() {
	let e = (0, b.useContext)(E);
	if (!e) throw Error(`useAccessibility must be called inside an AccessibilityProvider.`);
	return e;
}
var Ce = 7e3, we = 100, Te = {
	position: `absolute`,
	width: `1px`,
	height: `1px`,
	padding: `0`,
	margin: `-1px`,
	overflow: `hidden`,
	clipPath: `inset(50%)`,
	whiteSpace: `nowrap`,
	border: `0`
}, Ee = new Map(), M = new Map();
function De(e) {
	let t = Ee.get(e);
	if (t?.isConnected) return t;
	let n = document.createElement(`div`);
	return n.setAttribute(`aria-live`, e), n.setAttribute(`aria-atomic`, `true`), n.setAttribute(`role`, e === `assertive` ? `alert` : `status`), n.dataset.liveAnnouncer = `true`, n.dataset.skAnnouncer = e, Object.assign(n.style, Te), document.body.append(n), Ee.set(e, n), n;
}
function Oe(e, t = `polite`) {
	if (typeof document > `u` || !e) return;
	let n = De(t);
	n.textContent = ``, clearTimeout(M.get(t)), M.set(t, setTimeout(() => {
		n.textContent = e, M.set(t, setTimeout(() => {
			n.textContent = ``;
		}, Ce));
	}, we));
}
function ke() {
	return (0, b.useCallback)((e, t = `polite`) => Oe(e, t), []);
}
var N = `flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-border py-3 last:border-b-0`, P = `flex min-w-[min(100%,14rem)] flex-1 flex-col gap-0.5`, F = `inline-flex h-full w-control-lg shrink-0 items-center justify-center text-fg outline-none transition-colors data-hovered:bg-hover data-pressed:bg-selected data-disabled:cursor-not-allowed data-disabled:text-muted data-disabled:opacity-60 data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-solid data-focus-visible:outline-focus data-focus-visible:-outline-offset-2`;
function I({ title: e, hint: t, isSelected: n, isReadOnly: r = !1, onChange: i }) {
	return (0, x.jsxs)(te, {
		isSelected: n,
		isReadOnly: r,
		onChange: i,
		className: c(N, `flex-col items-stretch gap-y-0.5`),
		children: [(0, x.jsx)(ee, {
			className: `group flex min-h-control-md w-full cursor-pointer items-center justify-between gap-6 data-readonly:cursor-default`,
			children: ({ isSelected: t }) => (0, x.jsxs)(x.Fragment, { children: [(0, x.jsx)(`span`, {
				className: `min-w-0 text-body font-medium text-fg`,
				children: e
			}), (0, x.jsx)(`span`, {
				"aria-hidden": !0,
				className: c(`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border-2 transition-colors duration-(--sk-duration-fast)`, `group-data-focus-visible:outline-(length:--sk-focus-width) group-data-focus-visible:outline-offset-2 group-data-focus-visible:outline-solid group-data-focus-visible:outline-focus`, `group-data-readonly:opacity-70 forced-colors:border-[ButtonText]`, t ? `border-accent bg-accent forced-colors:bg-[Highlight]` : `border-border-strong bg-sunken group-data-hovered:bg-hover forced-colors:bg-[Canvas]`),
				children: (0, x.jsx)(`span`, {
					className: c(`inline-flex size-4 items-center justify-center rounded-full shadow-sm transition-transform duration-(--sk-duration-fast)`, t ? `translate-x-[1.375rem] bg-accent-fg text-accent-text forced-colors:bg-[HighlightText]` : `translate-x-0.5 bg-muted forced-colors:bg-[ButtonText]`),
					children: t ? (0, x.jsx)(o, {
						name: `action.check`,
						size: 12,
						strokeWidth: 3
					}) : null
				})
			})] })
		}), t ? (0, x.jsx)(y, {
			slot: `description`,
			className: `max-w-prose text-caption text-muted`,
			children: t
		}) : null]
	});
}
var Ae = {
	style: `unit`,
	unit: `percent`
}, je = S[0], Me = S[S.length - 1] ?? S[0];
function Ne({ labels: e, children: t, className: n }) {
	let r = Se(), a = ke(), { update: s, reset: d } = r, f = e.resetDone, p = (0, b.useCallback)((e) => (t) => s({ [e]: t }), [s]), m = (0, b.useCallback)((e) => {
		Number.isFinite(e) && s({ textScale: e });
	}, [s]), h = (0, b.useCallback)(() => {
		d(), f && a(f);
	}, [
		a,
		d,
		f
	]);
	return (0, x.jsxs)(`div`, {
		className: c(`flex flex-col text-fg`, n),
		children: [
			t,
			(0, x.jsxs)(v, {
				value: r.textScale,
				minValue: je,
				maxValue: Me,
				step: 10,
				formatOptions: Ae,
				onChange: m,
				decrementAriaLabel: e.smaller,
				incrementAriaLabel: e.larger,
				className: N,
				children: [(0, x.jsxs)(`div`, {
					className: P,
					children: [(0, x.jsx)(u, {
						className: `text-body font-medium text-fg`,
						children: e.textScale
					}), e.textScaleHint ? (0, x.jsx)(y, {
						slot: `description`,
						className: `max-w-prose text-caption text-muted`,
						children: e.textScaleHint
					}) : null]
				}), (0, x.jsxs)(g, {
					className: `inline-flex h-control-lg shrink-0 items-stretch overflow-hidden rounded-md border border-border-strong bg-input forced-colors:border-[ButtonText]`,
					children: [
						(0, x.jsx)(l, {
							slot: `decrement`,
							className: c(F, `border-r border-border`),
							children: (0, x.jsx)(o, {
								name: `action.remove`,
								size: 16,
								"aria-hidden": !0
							})
						}),
						(0, x.jsx)(_, { className: `w-16 min-w-0 bg-transparent text-center text-body text-fg tabular-nums outline-none focus-visible:outline-(length:--sk-focus-width) focus-visible:-outline-offset-2 focus-visible:outline-solid focus-visible:outline-focus` }),
						(0, x.jsx)(l, {
							slot: `increment`,
							className: c(F, `border-l border-border`),
							children: (0, x.jsx)(o, {
								name: `action.add`,
								size: 16,
								"aria-hidden": !0
							})
						})
					]
				})]
			}),
			(0, x.jsx)(I, {
				title: e.reduceMotion,
				hint: r.systemReducedMotion && e.reduceMotionSystem ? e.reduceMotionSystem : e.reduceMotionHint,
				isSelected: r.motionReduced,
				isReadOnly: r.systemReducedMotion,
				onChange: p(`reduceMotion`)
			}),
			(0, x.jsx)(I, {
				title: e.strongFocus,
				hint: e.strongFocusHint,
				isSelected: r.strongFocus,
				onChange: p(`strongFocus`)
			}),
			(0, x.jsx)(I, {
				title: e.underlineLinks,
				hint: e.underlineLinksHint,
				isSelected: r.underlineLinks,
				onChange: p(`underlineLinks`)
			}),
			(0, x.jsxs)(`div`, {
				className: N,
				children: [e.resetHint ? (0, x.jsx)(`p`, {
					className: c(P, `text-caption text-muted`),
					children: e.resetHint
				}) : null, (0, x.jsxs)(i, {
					variant: `outline`,
					onPress: h,
					className: `shrink-0`,
					children: [(0, x.jsx)(o, {
						name: `action.reset`,
						size: 16,
						"aria-hidden": !0
					}), e.reset]
				})]
			})
		]
	});
}
var Pe = t(r(), 1), L = [
	`light`,
	`dark`,
	`contrast`,
	`system`
], R = `skribly-theme`, z = (0, b.createContext)(null), B = `(prefers-color-scheme: dark)`, V = `(prefers-contrast: more)`, Fe = `(prefers-reduced-motion: reduce)`, Ie = 450;
function H(e) {
	return typeof e == `string` && L.includes(e);
}
function Le() {
	return h(V) ? `contrast` : h(B) ? `dark` : `light`;
}
function U(e) {
	let t = m(B, e), n = m(V, e);
	return () => {
		t(), n();
	};
}
var Re = () => `light`, W = new Map(), G = new Set();
function ze(e) {
	return G.add(e), window.addEventListener(`storage`, e), () => {
		G.delete(e), window.removeEventListener(`storage`, e);
	};
}
function Be(e, t) {
	f(e, t) ? W.delete(e) : W.set(e, t);
	for (let e of G) e();
}
function Ve() {
	return h(Fe) || document.documentElement.classList.contains(`a11y-reduce-motion`);
}
function K() {
	let e = getComputedStyle(document.documentElement).getPropertyValue(`--sk-bg`).trim();
	if (e) for (let t of document.querySelectorAll(`meta[name="theme-color"]`)) t.content = e;
}
function q(e) {
	let t = document.documentElement;
	e === `system` ? t.removeAttribute(`data-theme`) : t.setAttribute(`data-theme`, e), K();
}
function He(e, t) {
	let n = document.startViewTransition(t), { x: r, y: i } = e, a = Math.hypot(Math.max(r, window.innerWidth - r), Math.max(i, window.innerHeight - i));
	n.ready.then(() => {
		let e = document.documentElement, t = {
			duration: Ie,
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
function J({ children: e, defaultMode: t = `system`, mode: n, onModeChange: r, storageKey: i = R, scoped: a = !1, className: o }) {
	let [s, l] = (0, b.useState)(t), u = (0, b.useCallback)(() => {
		if (i === null) return t;
		let e = p(i) ?? W.get(i) ?? null;
		return H(e) ? e : t;
	}, [i, t]), d = (0, b.useCallback)(() => t, [t]), f = (0, b.useSyncExternalStore)(ze, u, d), m = (0, b.useSyncExternalStore)(U, Le, Re), h = n ?? (i === null ? s : f), g = h === `system` ? m : h;
	(0, b.useLayoutEffect)(() => {
		if (!a) return q(h), h === `system` ? U(K) : void 0;
	}, [h, a]);
	let _ = (0, b.useCallback)((e, t) => {
		let o = () => {
			n === void 0 && (i === null ? l(e) : Be(i, e)), r?.(e);
		}, s = t?.origin;
		a || !s || typeof document.startViewTransition != `function` || Ve() ? o() : He(s, () => {
			(0, Pe.flushSync)(o), n === void 0 && q(e);
		});
	}, [
		n,
		r,
		a,
		i
	]), v = (0, b.useMemo)(() => ({
		mode: h,
		resolvedTheme: g,
		setMode: _
	}), [
		h,
		g,
		_
	]);
	return (0, x.jsx)(z.Provider, {
		value: v,
		children: a ? (0, x.jsx)(`div`, {
			"data-theme": g,
			className: c(`bg-bg text-fg`, o),
			children: e
		}) : e
	});
}
function Y() {
	let e = (0, b.useContext)(z);
	if (!e) throw Error(`useTheme must be called inside a ThemeProvider.`);
	return e;
}
var X = (e) => JSON.stringify(e).replaceAll(`<`, `\\u003c`);
function Ue({ storageKey: e = R, accessibilityKey: t = C } = {}) {
	return `(function(){var r=document.documentElement;${`try{var t=localStorage.getItem(${X(e)});if(t==="light"||t==="dark"||t==="contrast")r.setAttribute("data-theme",t)}catch(e){}`}${t === null ? `` : `try{var a=JSON.parse(localStorage.getItem(${X(t)})||"null")||{},c=r.classList;if(a.reduceMotion===true)c.add("a11y-reduce-motion");if(a.strongFocus===true)c.add("a11y-strong-focus");if(a.underlineLinks===true){c.add("a11y-underline-links");c.add("[&_a]:underline")}if(${X(S.slice(1))}.indexOf(a.textScale)>-1)r.style.fontSize=a.textScale+"%"}catch(e){}`}})();`;
}
var Z = {
	light: d(`theme.light`),
	dark: d(`theme.dark`),
	contrast: d(`theme.contrast`),
	system: d(`theme.system`)
};
function We(e) {
	if (!e) return;
	let t = e.getBoundingClientRect();
	return {
		x: t.left + t.width / 2,
		y: t.top + t.height / 2
	};
}
function Ge(e) {
	return e === `all` ? void 0 : e.values().next().value;
}
function Q({ label: e, options: t, descriptions: n, modes: r = L, variant: i = `segmented`, size: a = `md`, showLabels: s = `auto`, container: l, className: u }) {
	let { mode: d, resolvedTheme: f, setMode: p } = Y(), m = (0, b.useMemo)(() => [d], [d]), h = (0, b.useCallback)((e) => {
		let t = Ge(e);
		H(t) && t !== d && p(t, { origin: We(document.activeElement) ?? {
			x: 0,
			y: 0
		} });
	}, [d, p]);
	if (i === `menu`) {
		let i = d === `system` ? Z.system : Z[f];
		return (0, x.jsxs)(ie, { children: [(0, x.jsx)(ue, {
			label: e,
			size: a,
			...l === void 0 ? {} : { container: l },
			...u === void 0 ? {} : { className: u },
			children: (0, x.jsx)(i, {
				size: a === `sm` ? 16 : 18,
				"aria-hidden": !0
			})
		}), (0, x.jsx)(se, {
			...l === void 0 ? {} : { UNSTABLE_portalContainer: l },
			placement: `bottom end`,
			className: `min-w-56 max-w-[calc(100vw-2rem)] overflow-auto rounded-lg border border-border bg-surface p-1 text-fg shadow-lg outline-none data-entering:animate-rise data-exiting:animate-fade data-exiting:[animation-direction:reverse] forced-colors:border-[CanvasText]`,
			children: (0, x.jsx)(ae, {
				"aria-label": e,
				selectionMode: `single`,
				disallowEmptySelection: !0,
				selectedKeys: m,
				onSelectionChange: h,
				className: `outline-none`,
				children: r.map((e) => {
					let r = Z[e], i = n?.[e];
					return (0, x.jsx)(oe, {
						id: e,
						textValue: t[e],
						className: `flex min-h-control-md cursor-default items-center gap-3 rounded-md px-2 py-1.5 text-body text-fg outline-none data-focused:bg-hover data-pressed:bg-selected data-selected:font-medium forced-colors:data-focused:bg-[Highlight] forced-colors:data-focused:text-[HighlightText]`,
						children: ({ isSelected: n }) => (0, x.jsxs)(x.Fragment, { children: [
							(0, x.jsx)(r, {
								size: 16,
								"aria-hidden": !0,
								className: `shrink-0 text-muted`
							}),
							(0, x.jsxs)(`span`, {
								className: `flex min-w-0 grow flex-col`,
								children: [(0, x.jsx)(`span`, {
									className: `break-words`,
									children: t[e]
								}), i ? (0, x.jsxs)(x.Fragment, { children: [` `, (0, x.jsx)(`span`, {
									className: `text-caption text-muted`,
									children: i
								})] }) : null]
							}),
							(0, x.jsx)(o, {
								name: `action.check`,
								size: 16,
								"aria-hidden": !0,
								className: c(`shrink-0 text-accent-text`, !n && `invisible`)
							})
						] })
					}, e);
				})
			})
		})] });
	}
	return (0, x.jsx)(`div`, {
		className: c(s === `auto` ? `@container w-full` : `max-w-full`, u),
		children: (0, x.jsx)(ce, {
			"aria-label": e,
			selectionMode: `single`,
			disallowEmptySelection: !0,
			selectedKeys: m,
			onSelectionChange: h,
			className: `inline-flex max-w-full gap-0.5 rounded-lg border border-border-strong bg-sunken p-0.5 forced-colors:border-[CanvasText]`,
			children: r.map((e) => {
				let n = Z[e];
				return (0, x.jsxs)(le, {
					id: e,
					className: c(`inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent font-medium text-muted outline-offset-1 transition-colors duration-(--sk-duration-fast)`, `data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-selected`, `data-selected:border-border-strong data-selected:bg-surface data-selected:text-fg data-selected:shadow-sm`, `data-disabled:cursor-not-allowed data-disabled:opacity-50`, `forced-colors:data-selected:border-[Highlight] forced-colors:data-selected:bg-[Highlight] forced-colors:data-selected:text-[HighlightText]`, a === `sm` ? `h-control-sm min-w-control-sm px-2 text-caption` : `h-control-md min-w-control-md px-3 text-body`),
					children: [(0, x.jsx)(n, {
						size: a === `sm` ? 14 : 16,
						"aria-hidden": !0,
						className: `shrink-0`
					}), (0, x.jsx)(`span`, {
						className: c(`truncate`, s === `never` && `sr-only`, s === `auto` && `@max-[24rem]:sr-only`),
						children: t[e]
					})]
				}, e);
			})
		})
	});
}
var Ke = e({ default: () => rt }), $ = {
	light: `Light`,
	dark: `Dark`,
	contrast: `High contrast`,
	system: `Same as system`
}, qe = {
	light: `Always light`,
	dark: `Always dark`,
	contrast: `Strongest text and borders`,
	system: `Follows the device`
}, Je = {
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
function Ye() {
	let { mode: e, resolvedTheme: t } = Y();
	return (0, x.jsxs)(`p`, {
		className: `text-caption text-muted`,
		children: [
			`Chosen: `,
			(0, x.jsx)(`strong`, {
				className: `text-fg`,
				children: $[e]
			}),
			`. On screen: `,
			(0, x.jsx)(`strong`, {
				className: `text-fg`,
				children: $[t]
			}),
			`.`
		]
	});
}
function Xe() {
	return (0, x.jsx)(J, {
		scoped: !0,
		storageKey: null,
		className: `rounded-lg border border-border p-4`,
		children: (0, x.jsxs)(`div`, {
			className: `flex flex-col gap-3`,
			children: [(0, x.jsx)(Q, {
				label: `Theme`,
				options: $
			}), (0, x.jsx)(Ye, {})]
		})
	});
}
function Ze() {
	let [e, t] = (0, b.useState)(null);
	return (0, x.jsx)(J, {
		scoped: !0,
		storageKey: null,
		defaultMode: `light`,
		className: `rounded-lg border border-border p-4`,
		children: (0, x.jsxs)(`div`, {
			ref: t,
			className: `flex flex-col gap-4`,
			children: [
				(0, x.jsx)(Q, {
					label: `Theme`,
					options: $,
					modes: [
						`light`,
						`dark`,
						`system`
					],
					size: `sm`
				}),
				(0, x.jsxs)(`div`, {
					className: `flex items-center gap-2 rounded-md bg-bar px-2 py-1`,
					children: [(0, x.jsx)(`span`, {
						className: `grow truncate text-caption font-medium`,
						children: `Top bar`
					}), (0, x.jsx)(Q, {
						variant: `menu`,
						label: `Theme`,
						options: $,
						descriptions: qe,
						size: `sm`,
						...e ? { container: e } : {}
					})]
				}),
				(0, x.jsxs)(`div`, {
					className: `flex items-center gap-2`,
					children: [(0, x.jsx)(`span`, {
						className: `grow text-caption text-muted`,
						children: `Icons only:`
					}), (0, x.jsx)(Q, {
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
function Qe() {
	let { motionReduced: e } = Se();
	return (0, x.jsxs)(`div`, {
		className: `flex flex-col gap-2 rounded-md border border-border bg-sunken p-3 text-body`,
		children: [
			(0, x.jsxs)(`p`, { children: [
				`Sample text with `,
				(0, x.jsx)(`a`, {
					href: `#accessibility-sample`,
					className: `font-medium text-accent-text underline decoration-dotted underline-offset-2 hover:decoration-solid in-[.a11y-underline-links]:decoration-solid in-[.a11y-underline-links]:decoration-2`,
					children: `a link`
				}),
				` in it.`
			] }),
			(0, x.jsx)(`p`, {
				className: `text-caption text-muted`,
				children: `Motion: ${e ? `reduced` : `full`}.`
			}),
			(0, x.jsx)(i, {
				variant: `outline`,
				size: `sm`,
				className: `self-start`,
				children: `Tab to me`
			})
		]
	});
}
function $e() {
	return (0, x.jsx)(J, {
		scoped: !0,
		storageKey: null,
		className: `rounded-lg p-3`,
		children: (0, x.jsxs)(xe, {
			scoped: !0,
			storageKey: null,
			className: `flex flex-col gap-3`,
			children: [(0, x.jsx)(a, {
				className: `p-0 px-4`,
				children: (0, x.jsx)(Ne, {
					labels: Je,
					children: (0, x.jsxs)(`div`, {
						className: `flex flex-col gap-2 border-b border-border py-3`,
						children: [(0, x.jsx)(`span`, {
							"aria-hidden": !0,
							className: `text-body font-medium`,
							children: `Theme`
						}), (0, x.jsx)(Q, {
							label: `Theme`,
							options: $,
							size: `sm`
						})]
					})
				})
			}), (0, x.jsx)(Qe, {})]
		})
	});
}
function et() {
	return (0, x.jsxs)(`div`, {
		className: `flex flex-col gap-2`,
		children: [(0, x.jsxs)(`p`, {
			className: `text-caption text-muted`,
			children: [
				`Rendered on the server as `,
				(0, x.jsx)(`code`, { children: `<ThemeScript />` }),
				`, it writes this into the head:`
			]
		}), (0, x.jsx)(`pre`, {
			className: `rounded-md border border-border bg-sunken p-3 font-mono text-caption break-all whitespace-pre-wrap`,
			children: Ue()
		})]
	});
}
function tt() {
	let e = (0, b.useId)();
	return (0, x.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [
			(0, x.jsx)(re, {
				targetId: `${e}-content`,
				children: `Skip to content`
			}),
			(0, x.jsx)(`p`, {
				className: `text-caption text-muted`,
				children: `Tab into this panel: the first stop is a link that appears in the top corner of the window.`
			}),
			(0, x.jsxs)(`nav`, {
				"aria-label": `Sample`,
				className: `flex flex-wrap gap-2`,
				children: [(0, x.jsx)(i, {
					variant: `ghost`,
					size: `sm`,
					children: `Projects`
				}), (0, x.jsx)(i, {
					variant: `ghost`,
					size: `sm`,
					children: `Reports`
				})]
			}),
			(0, x.jsxs)(`section`, {
				id: `${e}-content`,
				"aria-labelledby": `${e}-title`,
				className: `rounded-md border border-border p-3`,
				children: [(0, x.jsx)(`h4`, {
					id: `${e}-title`,
					className: `text-title font-semibold`,
					children: `Content`
				}), (0, x.jsxs)(`p`, {
					className: `text-body`,
					children: [
						`Size: 40 `,
						(0, x.jsx)(`abbr`, {
							title: `megabytes`,
							children: `MB`
						}),
						(0, x.jsx)(de, { children: ` per file` }),
						(0, x.jsx)(`span`, {
							"aria-hidden": !0,
							children: `/file`
						})
					]
				})]
			})
		]
	});
}
function nt() {
	let e = ke(), [t, n] = (0, b.useState)(0);
	return (0, x.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [(0, x.jsxs)(`div`, {
			className: `flex flex-wrap gap-2`,
			children: [
				(0, x.jsx)(i, {
					variant: `outline`,
					onPress: () => n((e) => e + 1),
					children: `Add a result`
				}),
				(0, x.jsx)(i, {
					variant: `outline`,
					onPress: () => e(`Draft saved`),
					children: `Save draft`
				}),
				(0, x.jsx)(i, {
					variant: `danger`,
					onPress: () => e(`Could not reach the server. Your changes are kept.`, `assertive`),
					children: `Simulate an error`
				})
			]
		}), (0, x.jsx)(ne, {
			visible: !0,
			className: `text-caption text-muted`,
			children: t === 0 ? `No results yet.` : `${t} ${t === 1 ? `result` : `results`} found.`
		})]
	});
}
var rt = {
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
			render: () => (0, x.jsx)(Xe, {})
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
			render: () => (0, x.jsx)(Ze, {})
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
			render: () => (0, x.jsx)(et, {})
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
			render: () => (0, x.jsx)($e, {})
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
			render: () => (0, x.jsx)(tt, {})
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
			render: () => (0, x.jsx)(nt, {})
		}
	]
};
export { Ke as t };
