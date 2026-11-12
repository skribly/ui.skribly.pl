import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { t } from "./search.zK5MY05u.js";
import { t as n } from "./x.CmkLFRDJ.js";
import { n as r } from "./react-dom.B9zIfLd2.js";
import { t as i } from "./Autocomplete.BUqxPt-N.js";
import { r as a } from "./createLucideIcon.npgQlVHx.js";
import { c as o, n as s, o as c, s as l } from "./Dialog.BHaijp-q.js";
import { s as u } from "./useLoadMoreSentinel.DKpPMiER.js";
import { r as d } from "./useTextField.D1QWrtYY.js";
import { t as f } from "./Keyboard.qx6AryGY.js";
import { n as p, t as m } from "./Modal.DfTZZZKl.js";
import { t as h } from "./SearchField.C-Q55Mrc.js";
import { n as g, t as _ } from "./jsx-runtime.yrTYNGQT.js";
import { t as v } from "./Highlight.sLf-RrLQ.js";
var y = e(r(), 1), b = -.005, x = -.005, S = -.01, C = 1, w = .9, T = .8, E = .7, D = .6;
function O(e) {
	let t = /^(.*?)(?::(\d+))?(?::(\d+))?\s*$/.exec(e.trim());
	return t ? {
		query: (t[1] ?? ``).trim(),
		...t[2] ? { line: Number(t[2]) } : {},
		...t[3] ? { column: Number(t[3]) } : {}
	} : { query: e.trim() };
}
function k(e) {
	let t = new Float64Array(e.length), n = `/`;
	for (let r = 0; r < e.length; r++) {
		let i = e[r] ?? ``;
		n === `/` || n === `\\` ? t[r] = w : n === `-` || n === `_` || n === ` ` ? t[r] = T : n === `.` ? t[r] = D : n >= `a` && n <= `z` && i >= `A` && i <= `Z` && (t[r] = E), n = i;
	}
	return t;
}
function A(e, t) {
	let n = 0;
	for (let r = 0; r < e.length && n < t.length; r++) e[r] === t[n] && n++;
	return n === t.length;
}
var j = (e, t, n) => e[t]?.[n] ?? -1 / 0;
function M(e, t, n = !1) {
	let r = t.length, i = e.length;
	if (!r) return {
		score: 0,
		positions: []
	};
	let a = e.toLowerCase(), o = t.toLowerCase();
	if (r > i || !A(a, o)) return null;
	if (r === i) return {
		score: 1e3,
		positions: n ? [...Array.from({ length: r }).keys()] : []
	};
	if (i > 1024) return {
		score: -1,
		positions: []
	};
	let s = k(e), c = [], l = [];
	for (let e = 0; e < r; e++) {
		let t = new Float64Array(i), n = new Float64Array(i), u = -1 / 0, d = e === r - 1 ? x : S;
		for (let r = 0; r < i; r++) if (o[e] === a[r]) {
			let i = -1 / 0;
			e === 0 ? i = r * b + (s[r] ?? 0) : r > 0 && (i = Math.max(j(c, e - 1, r - 1) + (s[r] ?? 0), j(l, e - 1, r - 1) + C)), t[r] = i, u = Math.max(i, u + d), n[r] = u;
		} else t[r] = -1 / 0, u += d, n[r] = u;
		l.push(t), c.push(n);
	}
	let u = j(c, r - 1, i - 1);
	if (!n) return {
		score: u,
		positions: []
	};
	let d = Array.from({ length: r }, () => 0), f = !1;
	for (let e = r - 1, t = i - 1; e >= 0; e--) for (; t >= 0; t--) {
		let n = j(l, e, t);
		if (n !== -1 / 0 && (f || n === j(c, e, t))) {
			f = e > 0 && t > 0 && j(c, e, t) === j(l, e - 1, t - 1) + C, d[e] = t, t--;
			break;
		}
	}
	return {
		score: u,
		positions: d
	};
}
function N(e, t, n = [], r = 50) {
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
		if (!A(e, s)) continue;
		let n = t.lastIndexOf(`/`), r = t.slice(n + 1), a = e.slice(n + 1), l, u = A(a, s) ? M(r, i) : null;
		if (u) l = u.score + 2, a.startsWith(s) && (l += 2), (a === s || a.split(`.`)[0] === s) && (l += 3);
		else {
			let e = M(t, i);
			if (!e) continue;
			l = e.score;
		}
		c.push({
			path: t,
			score: l + o(t) - t.length * .002
		});
	}
	return c.sort((e, t) => t.score - e.score || e.path.length - t.path.length || e.path.localeCompare(t.path)), c.slice(0, r).map(({ path: e, score: t }) => {
		let n = e.lastIndexOf(`/`), r = M(e.slice(n + 1), i, !0);
		return {
			path: e,
			score: t,
			positions: r ? r.positions.map((e) => e + n + 1) : M(e, i, !0)?.positions ?? []
		};
	});
}
var P = `group flex min-h-control-md cursor-pointer items-center gap-3 rounded-md px-3 py-1.5 text-body text-fg outline-none data-hovered:bg-hover data-focused:bg-selected data-focus-visible:outline-2 data-focus-visible:-outline-offset-2 data-focus-visible:outline-focus data-disabled:cursor-not-allowed data-disabled:opacity-50 forced-colors:data-focused:outline-2 forced-colors:data-focused:-outline-offset-2 forced-colors:data-focused:outline-[Highlight] [&_svg]:size-4 [&_svg]:shrink-0`, F = `inline-flex shrink-0 text-muted group-data-focused:text-fg`, I = `flex items-center gap-2 px-3 pt-3 pb-1 text-label font-semibold text-muted uppercase`, L = `inline-flex h-5 shrink-0 items-center rounded-sm border border-border bg-sunken px-1.5 font-mono text-label text-muted`, R = `fixed inset-0 z-(--sk-z-modal) flex items-start justify-center bg-scrim data-entering:animate-fade sm:px-4 sm:pt-[12vh]`, z = `flex h-dvh w-full flex-col overflow-hidden bg-surface text-fg shadow-lg outline-none data-entering:animate-rise sm:h-auto sm:max-h-[min(36rem,76vh)] sm:max-w-[40rem] sm:rounded-xl sm:border sm:border-border forced-colors:border`, B = (e) => e instanceof HTMLElement && (e.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(e.tagName));
function V(e, t, { enabled: n, inFields: r = !1 }) {
	let i = (0, y.useRef)({
		matches: e,
		run: t
	});
	(0, y.useLayoutEffect)(() => {
		i.current = {
			matches: e,
			run: t
		};
	}), (0, y.useEffect)(() => {
		if (!n) return;
		let e = (e) => {
			e.defaultPrevented || e.isComposing || (r || !B(e.target)) && i.current.matches(e) && (e.preventDefault(), i.current.run());
		};
		return document.addEventListener(`keydown`, e), () => document.removeEventListener(`keydown`, e);
	}, [n, r]);
}
var H = (e) => (t) => (t.metaKey || t.ctrlKey) && !t.altKey && !t.shiftKey && t.key.toLowerCase() === e, U = (e) => (t) => !t.metaKey && !t.ctrlKey && !t.altKey && t.key === e, W = _(), G = (e) => [
	e.label,
	e.hint,
	...e.keywords ?? []
].filter(Boolean).join(` `), K = (e, t) => {
	let n = t.replaceAll(/\s+/g, ``).toLowerCase();
	return !n || A(e.toLowerCase(), n);
}, q = H(`k`);
function J({ onOpenChange: e, commands: r, label: p, searchLabel: m, listLabel: _, placeholder: b, emptyLabel: x, closeLabel: S, resultsLabel: C, footer: w }) {
	let [T, E] = (0, y.useState)(``), D = (0, y.useRef)(null);
	(0, y.useEffect)(() => D.current?.focus(), []);
	let O = (0, y.useMemo)(() => {
		let e = new Map();
		for (let t of r) {
			let n = t.group ?? ``;
			e.set(n, [...e.get(n) ?? [], t]);
		}
		return [...e.entries()];
	}, [r]), k = (0, y.useMemo)(() => new Map(r.map((e) => [e.id, e])), [r]), A = (0, y.useMemo)(() => r.filter((e) => e.isDisabled).map((e) => e.id), [r]), j = (0, y.useMemo)(() => r.filter((e) => K(G(e), T)).length, [r, T]), N = (0, y.useCallback)(() => e(!1), [e]), R = (0, y.useCallback)((t) => {
		let n = k.get(String(t));
		n && (e(!1), n.onAction());
	}, [k, e]), z = (0, y.useCallback)(() => (0, W.jsx)(`p`, {
		className: `m-0 px-3 py-6 text-center text-body text-muted`,
		children: x(T)
	}), [x, T]), B = T.replaceAll(/\s+/g, ``);
	return (0, W.jsxs)(s, {
		"aria-label": p,
		className: `flex min-h-0 flex-1 flex-col outline-none`,
		children: [
			(0, W.jsxs)(i, {
				inputValue: T,
				onInputChange: E,
				filter: K,
				children: [(0, W.jsxs)(h, {
					"aria-label": m,
					className: `flex shrink-0 items-center gap-2 border-b border-border px-3`,
					children: [
						(0, W.jsx)(t, {
							"aria-hidden": `true`,
							className: `size-4 shrink-0 text-muted`
						}),
						(0, W.jsx)(d, {
							ref: D,
							...b === void 0 ? {} : { placeholder: b },
							className: `h-12 min-w-0 flex-1 bg-transparent text-title text-fg outline-none placeholder:text-muted [&::-webkit-search-cancel-button]:hidden`
						}),
						(0, W.jsx)(a, {
							"aria-label": S,
							onPress: N,
							className: `inline-grid size-8 shrink-0 cursor-pointer place-items-center rounded-md text-muted data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-sunken`,
							children: (0, W.jsx)(n, {
								"aria-hidden": `true`,
								className: `size-4`
							})
						})
					]
				}), (0, W.jsx)(o, {
					"aria-label": _,
					onAction: R,
					disabledKeys: A,
					renderEmptyState: z,
					className: `min-h-0 flex-1 overflow-y-auto overscroll-contain p-1.5 outline-none`,
					children: O.map(([e, t]) => (0, W.jsxs)(l, {
						id: e || `default`,
						className: `not-first:mt-1`,
						children: [e ? (0, W.jsx)(u, {
							className: I,
							children: e
						}) : null, t.map((e) => {
							let t = B ? M(e.label, B, !0) : null;
							return (0, W.jsxs)(c, {
								id: e.id,
								textValue: G(e),
								className: P,
								children: [
									e.icon ? (0, W.jsx)(`span`, {
										"aria-hidden": `true`,
										className: F,
										children: e.icon
									}) : null,
									(0, W.jsxs)(`span`, {
										className: `flex min-w-0 flex-1 flex-wrap items-baseline gap-x-2`,
										children: [(0, W.jsx)(`span`, {
											className: `min-w-0 break-words`,
											children: t ? (0, W.jsx)(v, {
												text: e.label,
												positions: t.positions
											}) : e.label
										}), e.hint ? (0, W.jsxs)(W.Fragment, { children: [` `, (0, W.jsx)(`span`, {
											className: `min-w-0 truncate text-caption text-muted`,
											children: e.hint
										})] }) : null]
									}),
									e.shortcut ? (0, W.jsx)(f, {
										className: g(L, `max-sm:hidden`),
										children: e.shortcut
									}) : null
								]
							}, e.id);
						})]
					}, e || `default`))
				})]
			}),
			w ? (0, W.jsx)(`div`, {
				className: `hidden shrink-0 border-t border-border px-3 py-2 text-caption text-muted sm:block`,
				children: w
			}) : null,
			(0, W.jsx)(`output`, {
				className: `sr-only`,
				children: C && T ? C(j) : ``
			})
		]
	});
}
function Y({ isOpen: e, onOpenChange: t, shortcut: n = !1, container: r, className: i, ...a }) {
	return V(q, (0, y.useCallback)(() => t(!e), [e, t]), {
		enabled: n,
		inFields: !0
	}), (0, W.jsx)(p, {
		isOpen: e,
		onOpenChange: t,
		isDismissable: !0,
		...r ? { UNSTABLE_portalContainer: r } : {},
		className: R,
		children: (0, W.jsx)(m, {
			className: g(z, i),
			children: (0, W.jsx)(J, {
				...a,
				onOpenChange: t
			})
		})
	});
}
export { I as a, F as c, M as d, O as f, V as i, P as l, H as n, L as o, N as p, U as r, R as s, Y as t, z as u };
