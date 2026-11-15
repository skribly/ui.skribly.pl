import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { A as t, F as n, I as r, R as i } from "./doc.DoLlUurT.js";
import { n as a } from "./react-dom.B9zIfLd2.js";
import { t as o } from "./Autocomplete.D4ncqRMy.js";
import { c as s, n as c, o as l, s as u, v as d } from "./Dialog.B6qxF5fw.js";
import { s as f } from "./useLoadMoreSentinel.g4Y1QWZw.js";
import { r as p } from "./useTextField.CoryCHp2.js";
import { t as m } from "./Keyboard.0RpXrVDD.js";
import { n as h, t as g } from "./Modal.D5JxyBzm.js";
import { t as _ } from "./SearchField.Cv0WLBO4.js";
import { t as v } from "./Highlight.D_JDVaI7.js";
import { i as y, n as b } from "./storage.DycSY7Q5.js";
var x = e(a(), 1), S = -.005, C = -.005, w = -.01, T = 1, E = .9, D = .8, O = .7, k = .6;
function A(e) {
	let t = /^(.*?)(?::(\d+))?(?::(\d+))?\s*$/.exec(e.trim());
	return t ? {
		query: (t[1] ?? ``).trim(),
		...t[2] ? { line: Number(t[2]) } : {},
		...t[3] ? { column: Number(t[3]) } : {}
	} : { query: e.trim() };
}
function j(e) {
	let t = new Float64Array(e.length), n = `/`;
	for (let r = 0; r < e.length; r++) {
		let i = e[r] ?? ``;
		n === `/` || n === `\\` ? t[r] = E : n === `-` || n === `_` || n === ` ` ? t[r] = D : n === `.` ? t[r] = k : n >= `a` && n <= `z` && i >= `A` && i <= `Z` && (t[r] = O), n = i;
	}
	return t;
}
function M(e, t) {
	let n = 0;
	for (let r = 0; r < e.length && n < t.length; r++) e[r] === t[n] && n++;
	return n === t.length;
}
var N = (e, t, n) => e[t]?.[n] ?? -1 / 0;
function P(e, t, n = !1) {
	let r = t.length, i = e.length;
	if (!r) return {
		score: 0,
		positions: []
	};
	let a = e.toLowerCase(), o = t.toLowerCase();
	if (r > i || !M(a, o)) return null;
	if (r === i) return {
		score: 1e3,
		positions: n ? [...Array.from({ length: r }).keys()] : []
	};
	if (i > 1024) return {
		score: -1,
		positions: []
	};
	let s = j(e), c = [], l = [];
	for (let e = 0; e < r; e++) {
		let t = new Float64Array(i), n = new Float64Array(i), u = -1 / 0, d = e === r - 1 ? C : w;
		for (let r = 0; r < i; r++) if (o[e] === a[r]) {
			let i = -1 / 0;
			e === 0 ? i = r * S + (s[r] ?? 0) : r > 0 && (i = Math.max(N(c, e - 1, r - 1) + (s[r] ?? 0), N(l, e - 1, r - 1) + T)), t[r] = i, u = Math.max(i, u + d), n[r] = u;
		} else t[r] = -1 / 0, u += d, n[r] = u;
		l.push(t), c.push(n);
	}
	let u = N(c, r - 1, i - 1);
	if (!n) return {
		score: u,
		positions: []
	};
	let d = Array.from({ length: r }, () => 0), f = !1;
	for (let e = r - 1, t = i - 1; e >= 0; e--) for (; t >= 0; t--) {
		let n = N(l, e, t);
		if (n !== -1 / 0 && (f || n === N(c, e, t))) {
			f = e > 0 && t > 0 && N(c, e, t) === N(l, e - 1, t - 1) + T, d[e] = t, t--;
			break;
		}
	}
	return {
		score: u,
		positions: d
	};
}
function F(e, t, n = [], r = 50) {
	let i = t.replaceAll(/\s+/g, ``), a = new Map(n.map((e, t) => [e, t])), o = (e) => {
		let t = a.get(e);
		return t === void 0 ? 0 : 3 * (1 - t / Math.max(n.length, 1)) + .5;
	};
	if (!i) {
		let t = new Set(e), i = new Set(), a = [];
		for (let o of [...n.filter((e) => t.has(e)), ...e]) {
			if (a.length >= r) break;
			i.has(o) || (i.add(o), a.push({
				path: o,
				score: 0,
				positions: []
			}));
		}
		return a;
	}
	let s = i.toLowerCase(), c = [];
	for (let t of e) {
		let e = t.toLowerCase();
		if (!M(e, s)) continue;
		let n = t.lastIndexOf(`/`), r = t.slice(n + 1), a = e.slice(n + 1), l, u = M(a, s) ? P(r, i) : null;
		if (u) l = u.score + 2, a.startsWith(s) && (l += 2), (a === s || a.split(`.`)[0] === s) && (l += 3);
		else {
			let e = P(t, i);
			if (!e) continue;
			l = e.score;
		}
		c.push({
			path: t,
			score: l + o(t) - t.length * .002
		});
	}
	return c.sort((e, t) => t.score - e.score || e.path.length - t.path.length || e.path.localeCompare(t.path)), c.slice(0, r).map(({ path: e, score: t }) => {
		let n = e.lastIndexOf(`/`), r = P(e.slice(n + 1), i, !0);
		return {
			path: e,
			score: t,
			positions: r ? r.positions.map((e) => e + n + 1) : P(e, i, !0)?.positions ?? []
		};
	});
}
var I = `group flex min-h-control-md cursor-pointer items-center gap-3 rounded-md px-3 py-1.5 text-body text-fg outline-none data-hovered:bg-hover data-focused:bg-selected data-focus-visible:outline-2 data-focus-visible:-outline-offset-2 data-focus-visible:outline-focus data-disabled:cursor-not-allowed data-disabled:opacity-50 forced-colors:data-focused:outline-2 forced-colors:data-focused:-outline-offset-2 forced-colors:data-focused:outline-[Highlight] [&_svg]:size-4 [&_svg]:shrink-0`, L = `inline-flex shrink-0 text-muted group-data-focused:text-fg`, R = `flex items-center gap-2 px-3 pt-3 pb-1 text-label font-semibold text-muted uppercase`, z = `inline-flex h-5 shrink-0 items-center rounded-sm border border-border bg-sunken px-1.5 font-mono text-label text-muted`, B = `fixed inset-0 z-(--sk-z-modal) flex items-start justify-center bg-scrim data-entering:animate-fade sm:px-4 sm:pt-[12vh]`, V = `flex h-dvh w-full flex-col overflow-hidden bg-surface text-fg shadow-lg outline-none data-entering:animate-rise sm:h-auto sm:max-h-[min(36rem,76vh)] sm:max-w-[40rem] sm:rounded-xl sm:border sm:border-border forced-colors:border`, H = new Set(), U = new Map();
function W(e) {
	return H.add(e), () => {
		H.delete(e);
	};
}
var ee = () => null;
function te(e) {
	if (e === null) return null;
	try {
		let t = JSON.parse(e);
		return Array.isArray(t) ? t.filter((e) => typeof e == `string`) : null;
	} catch {
		return null;
	}
}
function ne({ recent: e, defaultRecent: t, onRecentChange: n, recentKey: r, limit: i }) {
	let [a, o] = (0, x.useState)(t ?? []), s = r ?? null, c = (0, x.useCallback)(() => s === null ? null : b(s) ?? U.get(s) ?? null, [s]), l = (0, x.useSyncExternalStore)(W, c, ee), u = (0, x.useMemo)(() => te(l), [l]), d = e ?? u ?? a;
	return [d, (0, x.useCallback)((t) => {
		let r = [t, ...d.filter((e) => e !== t)].slice(0, Math.max(0, i));
		if (n?.(r), e !== void 0 || (o(r), s === null)) return;
		let a = JSON.stringify(r);
		y(s, a) || U.set(s, a);
		for (let e of H) e();
	}, [
		d,
		i,
		n,
		e,
		s
	])];
}
var G = (e) => e instanceof HTMLElement && (e.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(e.tagName) || e.closest(`[contenteditable]:not([contenteditable="false"])`) !== null);
function K(e, t, { enabled: n, inFields: r = !1 }) {
	let i = (0, x.useRef)({
		matches: e,
		run: t
	});
	(0, x.useLayoutEffect)(() => {
		i.current = {
			matches: e,
			run: t
		};
	}), (0, x.useEffect)(() => {
		if (!n) return;
		let e = (e) => {
			e.defaultPrevented || e.isComposing || (r || !G(e.target) && !G(document.activeElement)) && i.current.matches(e) && (e.preventDefault(), i.current.run());
		};
		return document.addEventListener(`keydown`, e), () => document.removeEventListener(`keydown`, e);
	}, [n, r]);
}
var q = (e) => (t) => (t.metaKey || t.ctrlKey) && !t.altKey && !t.shiftKey && t.key.toLowerCase() === e, J = (e) => (t) => !t.metaKey && !t.ctrlKey && !t.altKey && t.key === e, Y = n(), re = J(`?`);
function ie({ group: e }) {
	let t = (0, x.useId)();
	return (0, Y.jsxs)(`section`, {
		"aria-labelledby": t,
		className: `not-first:mt-4`,
		children: [(0, Y.jsx)(`h3`, {
			id: t,
			className: `m-0 pb-1 text-label font-semibold text-muted uppercase`,
			children: e.label
		}), (0, Y.jsx)(`dl`, {
			className: `m-0 divide-y divide-border`,
			children: e.shortcuts.map((e) => (0, Y.jsxs)(`div`, {
				className: `flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-2`,
				children: [(0, Y.jsx)(`dt`, {
					className: `min-w-0 text-body text-fg`,
					children: e.label
				}), (0, Y.jsx)(`dd`, {
					className: `m-0 flex shrink-0 gap-1`,
					children: e.keys.map((e) => (0, Y.jsx)(m, {
						className: z,
						children: e
					}, e))
				})]
			}, e.id))
		})]
	});
}
function X({ isOpen: e, onOpenChange: n, groups: a, label: o, closeLabel: s, shortcut: l = !1, footer: u, container: f, className: p }) {
	let m = (0, x.useCallback)(() => {
		e || n(!0);
	}, [e, n]), _ = (0, x.useCallback)(() => n(!1), [n]);
	return K(re, m, { enabled: l }), (0, Y.jsx)(h, {
		isOpen: e,
		onOpenChange: n,
		isDismissable: !0,
		...f ? { UNSTABLE_portalContainer: f } : {},
		className: B,
		children: (0, Y.jsx)(g, {
			className: r(V, p),
			children: (0, Y.jsxs)(c, {
				"aria-label": o,
				className: `flex min-h-0 flex-1 flex-col outline-none`,
				children: [
					(0, Y.jsxs)(`div`, {
						className: `flex shrink-0 items-center gap-2 border-b border-border py-1 ps-4 pe-2`,
						children: [(0, Y.jsx)(d, {
							slot: `title`,
							className: `m-0 min-w-0 flex-1 text-title font-semibold text-fg`,
							children: o
						}), (0, Y.jsx)(i, {
							"aria-label": s,
							onPress: _,
							className: `inline-grid size-11 shrink-0 cursor-pointer place-items-center rounded-md text-muted data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-sunken`,
							children: (0, Y.jsx)(t, {
								name: `action.close`,
								"aria-hidden": `true`,
								className: `size-4`
							})
						})]
					}),
					(0, Y.jsx)(`div`, {
						className: `min-h-0 flex-1 overflow-y-auto overscroll-contain p-4`,
						children: a.map((e) => (0, Y.jsx)(ie, { group: e }, e.id))
					}),
					u ? (0, Y.jsx)(`div`, {
						className: `shrink-0 border-t border-border px-4 py-2 text-caption text-muted`,
						children: u
					}) : null
				]
			})
		})
	});
}
var Z = `recent:`, Q = (e) => [
	e.label,
	e.hint,
	...e.keywords ?? []
].filter(Boolean).join(` `), $ = (e, t) => {
	let n = t.replaceAll(/\s+/g, ``).toLowerCase();
	return !n || M(e.toLowerCase(), n);
}, ae = q(`k`);
function oe({ onOpenChange: e, commands: n, label: a, searchLabel: d, listLabel: h, placeholder: g, emptyLabel: y, closeLabel: b, resultsLabel: S, footer: C, recentLabel: w, recentIds: T, onChoose: E }) {
	let [D, O] = (0, x.useState)(``), k = (0, x.useRef)(null);
	(0, x.useEffect)(() => k.current?.focus(), []);
	let A = (0, x.useMemo)(() => {
		let e = new Map();
		for (let t of n) {
			let n = t.group ?? ``;
			e.set(n, [...e.get(n) ?? [], t]);
		}
		return [...e.entries()];
	}, [n]), j = (0, x.useMemo)(() => new Map(n.map((e) => [e.id, e])), [n]), M = D.replaceAll(/\s+/g, ``), N = (0, x.useMemo)(() => w && !M ? T.flatMap((e) => {
		let t = j.get(e);
		return t ? [t] : [];
	}) : [], [
		w,
		M,
		T,
		j
	]), F = (0, x.useMemo)(() => [...n.filter((e) => e.isDisabled).map((e) => e.id), ...N.filter((e) => e.isDisabled).map((e) => Z + e.id)], [n, N]), B = (0, x.useMemo)(() => n.filter((e) => $(Q(e), D)).length, [n, D]), V = (0, x.useCallback)(() => e(!1), [e]), H = (0, x.useCallback)((t) => {
		let n = String(t), r = n.startsWith(Z) && !j.has(n) ? n.slice(7) : n, i = j.get(r);
		i && (E(r), e(!1), i.onAction());
	}, [
		j,
		E,
		e
	]), U = (0, x.useCallback)(() => (0, Y.jsx)(`p`, {
		className: `m-0 px-3 py-6 text-center text-body text-muted`,
		children: y(D)
	}), [y, D]), W = N.length > 0 ? [[Z, N], ...A] : A;
	return (0, Y.jsxs)(c, {
		"aria-label": a,
		className: `flex min-h-0 flex-1 flex-col outline-none`,
		children: [
			(0, Y.jsxs)(o, {
				inputValue: D,
				onInputChange: O,
				filter: $,
				children: [(0, Y.jsxs)(_, {
					"aria-label": d,
					className: `flex shrink-0 items-center gap-2 border-b border-border px-3`,
					children: [
						(0, Y.jsx)(t, {
							name: `action.search`,
							"aria-hidden": `true`,
							className: `size-4 shrink-0 text-muted`
						}),
						(0, Y.jsx)(p, {
							ref: k,
							...g === void 0 ? {} : { placeholder: g },
							className: `h-12 min-w-0 flex-1 bg-transparent text-title text-fg outline-none placeholder:text-muted [&::-webkit-search-cancel-button]:hidden`
						}),
						(0, Y.jsx)(i, {
							"aria-label": b,
							onPress: V,
							className: `inline-grid size-8 shrink-0 cursor-pointer place-items-center rounded-md text-muted data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-sunken`,
							children: (0, Y.jsx)(t, {
								name: `action.close`,
								"aria-hidden": `true`,
								className: `size-4`
							})
						})
					]
				}), (0, Y.jsx)(s, {
					"aria-label": h,
					onAction: H,
					disabledKeys: F,
					renderEmptyState: U,
					className: `min-h-0 flex-1 overflow-y-auto overscroll-contain p-1.5 outline-none`,
					children: W.map(([e, t]) => {
						let n = e === Z && t === N, i = n ? w : e;
						return (0, Y.jsxs)(u, {
							id: n ? Z : e || `default`,
							className: `not-first:mt-1`,
							children: [i ? (0, Y.jsx)(f, {
								className: R,
								children: i
							}) : null, t.map((e) => {
								let t = n ? Z + e.id : e.id, i = M ? P(e.label, M, !0) : null;
								return (0, Y.jsxs)(l, {
									id: t,
									textValue: Q(e),
									className: I,
									children: [
										e.icon ? (0, Y.jsx)(`span`, {
											"aria-hidden": `true`,
											className: L,
											children: e.icon
										}) : null,
										(0, Y.jsxs)(`span`, {
											className: `flex min-w-0 flex-1 flex-wrap items-baseline gap-x-2`,
											children: [(0, Y.jsx)(`span`, {
												className: `min-w-0 break-words`,
												children: i ? (0, Y.jsx)(v, {
													text: e.label,
													positions: i.positions
												}) : e.label
											}), e.hint ? (0, Y.jsxs)(Y.Fragment, { children: [` `, (0, Y.jsx)(`span`, {
												className: `min-w-0 truncate text-caption text-muted`,
												children: e.hint
											})] }) : null]
										}),
										e.shortcut ? (0, Y.jsx)(m, {
											className: r(z, `max-sm:hidden`),
											children: e.shortcut
										}) : null
									]
								}, t);
							})]
						}, n ? Z : e || `default`);
					})
				})]
			}),
			C ? (0, Y.jsx)(`div`, {
				className: `hidden shrink-0 border-t border-border px-3 py-2 text-caption text-muted sm:block`,
				children: C
			}) : null,
			(0, Y.jsx)(`output`, {
				className: `sr-only`,
				children: S && D ? S(B) : ``
			})
		]
	});
}
function se({ isOpen: e, onOpenChange: t, shortcut: n = !1, container: i, className: a, recent: o, defaultRecent: s, onRecentChange: c, recentLimit: l = 5, recentKey: u, shortcutOverlay: d, ...f }) {
	K(ae, (0, x.useCallback)(() => t(!e), [e, t]), {
		enabled: n,
		inFields: !0
	});
	let [p, m] = ne({
		recent: o,
		defaultRecent: s,
		onRecentChange: c,
		recentKey: u,
		limit: l
	}), [_, v] = (0, x.useState)(!1);
	return (0, Y.jsxs)(Y.Fragment, { children: [(0, Y.jsx)(h, {
		isOpen: e,
		onOpenChange: t,
		isDismissable: !0,
		...i ? { UNSTABLE_portalContainer: i } : {},
		className: B,
		children: (0, Y.jsx)(g, {
			className: r(V, a),
			children: (0, Y.jsx)(oe, {
				...f,
				onOpenChange: t,
				recentIds: p,
				onChoose: m
			})
		})
	}), d ? (0, Y.jsx)(X, {
		...d,
		isOpen: _,
		onOpenChange: v,
		shortcut: !0,
		...i ? { container: i } : {}
	}) : null] });
}
export { K as a, B as c, V as d, P as f, J as i, L as l, F as m, X as n, R as o, A as p, q as r, z as s, se as t, I as u };
