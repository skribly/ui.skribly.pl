import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { n } from "./react-dom.B9zIfLd2.js";
import { t as r } from "./Group.FJVraJu6.js";
import { A as i, F as a, I as o, R as s, Z as c, j as l, vt as u } from "./doc.DoLlUurT.js";
import { n as d, t as f } from "./Disclosure.BXwlE_tK.js";
import { t as p } from "./Table.B8rvTNC_.js";
import { t as m } from "./Meter.B6zJXFNS.js";
var h = t(n(), 1), g = [
	1,
	2,
	3,
	4
];
function _(e) {
	return g[e % g.length] ?? 1;
}
var v = {
	1: `stroke-accent`,
	2: `stroke-info`,
	3: `stroke-tool-skills`,
	4: `stroke-tool-tracker`,
	muted: `stroke-muted`,
	ok: `stroke-ok`,
	warn: `stroke-warn`,
	danger: `stroke-danger`
}, y = {
	1: `fill-accent`,
	2: `fill-info`,
	3: `fill-tool-skills`,
	4: `fill-tool-tracker`,
	muted: `fill-muted`,
	ok: `fill-ok`,
	warn: `fill-warn`,
	danger: `fill-danger`
}, b = {
	1: `bg-accent`,
	2: `bg-info`,
	3: `bg-tool-skills`,
	4: `bg-tool-tracker`,
	muted: `bg-muted`,
	ok: `bg-ok`,
	warn: `bg-warn`,
	danger: `bg-danger`
}, x = {
	solid: void 0,
	dashed: `6 4`,
	dotted: `1.5 3.5`,
	dashdot: `8 3 2 3`,
	short: `3 3`
}, S = {
	1: `solid`,
	2: `dashed`,
	3: `dotted`,
	4: `dashdot`,
	muted: `short`,
	ok: `solid`,
	warn: `solid`,
	danger: `solid`
}, C = `forced-colors:stroke-[CanvasText]`, w = `forced-colors:fill-[CanvasText]`, T = `forced-colors:fill-[Highlight]`, E = `forced-colors:bg-[Highlight] forced-colors:forced-color-adjust-none`, D = {
	1: `forced-colors:bg-[CanvasText]`,
	2: `forced-colors:bg-[repeating-linear-gradient(45deg,CanvasText_0_2px,Canvas_2px_5px)]`,
	3: `forced-colors:bg-[radial-gradient(circle,CanvasText_1.2px,Canvas_1.6px)] forced-colors:bg-size-[4px_4px]`,
	4: `forced-colors:bg-[repeating-linear-gradient(90deg,CanvasText_0_2px,Canvas_2px_5px)]`,
	muted: `forced-colors:bg-[repeating-linear-gradient(0deg,CanvasText_0_1px,Canvas_1px_4px)]`,
	ok: `forced-colors:bg-[repeating-linear-gradient(-45deg,CanvasText_0_2px,Canvas_2px_5px)]`,
	warn: `forced-colors:bg-[repeating-conic-gradient(CanvasText_0_25%,Canvas_0_50%)] forced-colors:bg-size-[6px_6px]`,
	danger: `forced-colors:bg-[linear-gradient(CanvasText_1px,transparent_1px),linear-gradient(90deg,CanvasText_1px,Canvas_1px)] forced-colors:bg-size-[5px_5px]`
}, O = `forced-colors:forced-color-adjust-none`;
function k(e, t) {
	return `${e}-pattern-${t}`;
}
var A = `forced-colors:stroke-[GrayText]`, j = `forced-colors:fill-[CanvasText]`, M = `motion-reduce:transition-none in-[.a11y-reduce-motion]:transition-none`, N = a();
function P({ color: e = 1, shape: t = `line`, pattern: n, className: r }) {
	if (t === `line`) {
		let t = x[n ?? S[e]];
		return (0, N.jsx)(`svg`, {
			"data-sk-drawn": `chart`,
			"aria-hidden": `true`,
			focusable: `false`,
			width: `18`,
			height: `8`,
			viewBox: `0 0 18 8`,
			className: o(`shrink-0 overflow-visible`, r),
			children: (0, N.jsx)(`line`, {
				x1: `1`,
				x2: `17`,
				y1: `4`,
				y2: `4`,
				strokeWidth: `2.5`,
				strokeLinecap: `round`,
				...t ? { strokeDasharray: t } : {},
				className: o(v[e], C)
			})
		});
	}
	return t === `marker` ? (0, N.jsx)(`svg`, {
		"data-sk-drawn": `chart`,
		"aria-hidden": `true`,
		focusable: `false`,
		width: `10`,
		height: `9`,
		viewBox: `0 0 10 9`,
		className: o(`shrink-0`, r),
		children: (0, N.jsx)(`path`, {
			d: `M5 9 0 0h10z`,
			className: o(`stroke-none`, y[e], w)
		})
	}) : (0, N.jsx)(`span`, {
		"aria-hidden": `true`,
		className: o(`inline-block shrink-0 border border-transparent forced-colors:size-3.5 forced-colors:border-[CanvasText]`, t === `dot` ? `size-2.5 rounded-full` : `size-2.5 rounded-xs`, b[e], D[e], O, r)
	});
}
var F = 96, I = [];
function ee({ title: e, items: t = I, note: n, x: r, y: i = 0, boundary: a, placement: s = `top`, id: c, className: l, ...u }) {
	let d = r !== void 0, f = {
		start: `-12px`,
		center: `-50%`,
		end: `calc(-100% + 12px)`
	}[!d || a === void 0 ? `center` : r < F ? `start` : r > a - F ? `end` : `center`], p = s === `top` ? `calc(-100% - 10px)` : `10px`, m = (0, h.useMemo)(() => d ? {
		left: r,
		top: i,
		transform: `translate(${f}, ${p})`
	} : void 0, [
		d,
		r,
		i,
		f,
		p
	]);
	return (0, N.jsxs)(`div`, {
		...c ? { id: c } : {},
		...u[`aria-hidden`] ? { "aria-hidden": !0 } : {},
		style: m,
		className: o(`pointer-events-none z-(--sk-z-sticky) w-max max-w-[min(18rem,calc(100vw-2rem))] rounded-md border border-border bg-surface px-2.5 py-2 text-caption text-fg shadow-md`, d ? `absolute` : `relative inline-block`, l),
		children: [
			e === void 0 ? null : (0, N.jsx)(`div`, {
				className: `font-semibold [overflow-wrap:anywhere]`,
				children: e
			}),
			n === void 0 ? null : (0, N.jsx)(`div`, {
				className: `mt-0.5 text-muted [overflow-wrap:anywhere]`,
				children: n
			}),
			t.length > 0 ? (0, N.jsx)(`ul`, {
				className: o(`m-0 flex list-none flex-col gap-0.5 p-0`, (e !== void 0 || n !== void 0) && `mt-1 border-t border-border pt-1`),
				children: t.map((e) => (0, N.jsxs)(`li`, {
					className: `flex min-w-0 items-center gap-2`,
					children: [
						e.color === void 0 ? null : (0, N.jsx)(P, {
							color: e.color,
							shape: e.shape ?? `block`,
							...e.pattern ? { pattern: e.pattern } : {}
						}),
						(0, N.jsx)(`span`, {
							className: `min-w-0 flex-1 text-muted [overflow-wrap:anywhere]`,
							children: e.label
						}),
						(0, N.jsx)(`strong`, {
							className: `ms-3 font-semibold tabular-nums`,
							children: e.value
						})
					]
				}, e.id))
			}) : null
		]
	});
}
function te(e, t) {
	let { locale: n } = u();
	return (0, h.useMemo)(() => {
		let r = new Intl.NumberFormat(n, { maximumFractionDigits: 1 }), i = new Intl.NumberFormat(n, {
			notation: `compact`,
			maximumFractionDigits: 1
		});
		return {
			value: e ?? ((e) => r.format(e)),
			tick: t ?? e ?? ((e) => i.format(e))
		};
	}, [
		n,
		e,
		t
	]);
}
function L(e) {
	return Math.ceil(e.length * 7 + 2);
}
function ne({ label: e, labelId: t, showLabel: n, busy: r = !1, className: i, children: a }) {
	return (0, N.jsxs)(`figure`, {
		"aria-labelledby": t,
		...r ? { "aria-busy": !0 } : {},
		className: o(`m-0 flex min-w-0 flex-col gap-2 text-body text-fg`, i),
		children: [(0, N.jsx)(`span`, {
			id: t,
			className: n ? `text-title font-semibold [overflow-wrap:anywhere]` : `sr-only`,
			children: e
		}), a]
	});
}
function re({ description: e, descriptionId: t, children: n }) {
	let r = e != null && e !== !1;
	return !r && (n == null || n === !1) ? null : (0, N.jsxs)(`figcaption`, {
		className: `flex min-w-0 flex-col gap-1.5`,
		children: [r ? (0, N.jsx)(`span`, {
			id: t,
			className: `text-caption text-muted [overflow-wrap:anywhere]`,
			children: e
		}) : null, n]
	});
}
function ie({ isLoading: e, error: t, emptyState: n, isEmpty: r }) {
	return t != null && t !== !1 ? `error` : e ? `loading` : r && n != null ? `empty` : null;
}
function ae({ kind: e, height: t, children: n }) {
	let r = (0, h.useMemo)(() => ({ minHeight: t }), [t]);
	return e === `loading` ? (0, N.jsx)(`div`, {
		style: r,
		className: `relative flex items-center justify-center overflow-hidden rounded-md border border-dashed border-border bg-sunken px-4 py-6`,
		children: (0, N.jsxs)(`output`, {
			className: `flex items-center gap-2 text-body text-muted`,
			children: [(0, N.jsx)(i, {
				name: `status.loading`,
				"aria-hidden": `true`,
				className: `size-4 shrink-0 animate-spin motion-reduce:animate-none in-[.a11y-reduce-motion]:animate-none`
			}), (0, N.jsx)(`span`, {
				className: `[overflow-wrap:anywhere]`,
				children: n
			})]
		})
	}) : e === `error` ? (0, N.jsx)(`div`, {
		style: r,
		className: `flex items-center justify-center rounded-md border border-danger bg-danger-soft px-4 py-6`,
		children: (0, N.jsxs)(`div`, {
			role: `alert`,
			className: `flex max-w-full items-start gap-2 text-body font-medium text-fg`,
			children: [(0, N.jsx)(i, {
				name: `status.danger`,
				"aria-hidden": `true`,
				className: `mt-0.5 size-4 shrink-0 text-danger`
			}), (0, N.jsx)(`span`, {
				className: `min-w-0 [overflow-wrap:anywhere]`,
				children: n
			})]
		})
	}) : (0, N.jsxs)(`div`, {
		style: r,
		className: `flex flex-col items-center justify-center gap-2 rounded-md border border-dashed border-border px-4 py-6 text-center text-body text-muted`,
		children: [(0, N.jsx)(i, {
			name: `nav.analytics`,
			"aria-hidden": `true`,
			className: `size-5 shrink-0`
		}), (0, N.jsx)(`div`, {
			className: `min-w-0 [overflow-wrap:anywhere]`,
			children: n
		})]
	});
}
function oe({ children: e }) {
	return (0, N.jsx)(`span`, {
		"aria-live": `polite`,
		"aria-atomic": `true`,
		className: `sr-only`,
		children: e
	});
}
function se({ trigger: e, caption: t, columns: n, rows: r, rowKey: a }) {
	return (0, N.jsxs)(f, {
		className: `group min-w-0`,
		children: [(0, N.jsxs)(s, {
			slot: `trigger`,
			className: `inline-flex min-h-6 cursor-default items-center gap-1 rounded-sm px-0.5 text-caption font-medium text-muted transition-colors data-hovered:text-fg data-pressed:text-fg`,
			children: [(0, N.jsx)(i, {
				name: `chevron.right`,
				"aria-hidden": `true`,
				className: `size-3.5 shrink-0 transition-transform duration-(--sk-duration-fast) group-data-expanded:rotate-90 motion-reduce:transition-none in-[.a11y-reduce-motion]:transition-none rtl:-scale-x-100`
			}), e]
		}), (0, N.jsx)(d, {
			className: `min-w-0 pt-2`,
			children: (0, N.jsx)(p, {
				caption: t,
				captionHidden: !0,
				columns: n,
				rows: r,
				rowKey: a,
				layout: `scroll`
			})
		})]
	});
}
function R(e, t) {
	let [n, r] = (0, h.useState)(t);
	return (0, h.useLayoutEffect)(() => {
		let t = e.current;
		if (!t) return;
		let n = () => {
			let e = Math.floor(t.clientWidth);
			e > 0 && r(e);
		};
		if (n(), typeof ResizeObserver > `u`) return;
		let i = new ResizeObserver(n);
		return i.observe(t), () => i.disconnect();
	}, [e]), n;
}
function ce({ count: e, across: t = 1, along: n = 1, describe: r, start: i = `last` }) {
	let [a, o] = (0, h.useState)(null), [s, c] = (0, h.useState)(!1), [l, u] = (0, h.useState)(``), d = e - 1, f = (0, h.useCallback)((t) => {
		if (e <= 0) return;
		let n = Math.min(d, Math.max(0, t));
		o(n), u(r(n));
	}, [
		e,
		r,
		d
	]), p = (0, h.useCallback)((r) => {
		if (e <= 0) return;
		let s = a ?? (i === `last` ? d : 0), c = {
			ArrowRight: s + t,
			ArrowLeft: s - t,
			ArrowDown: s + n,
			ArrowUp: s - n,
			Home: 0,
			End: d
		}[r.key];
		c === void 0 ? r.key === `Escape` && a !== null && (r.preventDefault(), r.stopPropagation(), o(null)) : (r.preventDefault(), f(a === null && r.key.startsWith(`Arrow`) ? s : c));
	}, [
		a,
		t,
		n,
		e,
		d,
		f,
		i
	]), m = (0, h.useCallback)((e) => {
		e.target === e.currentTarget && c(!0);
	}, []), g = (0, h.useCallback)((e) => {
		e.target === e.currentTarget && (c(!1), o(null));
	}, []), _ = (0, h.useCallback)((e) => {
		e === null ? s || o(null) : o(Math.min(d, Math.max(0, e)));
	}, [s, d]);
	(0, h.useEffect)(() => {
		if (a === null || s) return;
		let e = (e) => {
			e.key === `Escape` && o(null);
		};
		return document.addEventListener(`keydown`, e), () => document.removeEventListener(`keydown`, e);
	}, [a, s]);
	let v = (0, h.useMemo)(() => ({
		tabIndex: 0,
		onKeyDown: p,
		onFocus: m,
		onBlur: g
	}), [
		p,
		m,
		g
	]);
	return {
		active: a !== null && a <= d ? a : null,
		focused: s,
		announcement: l,
		setPointer: _,
		focusProps: v
	};
}
var le = 3, z = 28, B = 18, V = [
	0,
	.3,
	.52,
	.76,
	1
], H = [
	0,
	1,
	2,
	3,
	4
];
function U(e) {
	let t = /^(\d{4})-(\d{2})-(\d{2})/.exec(e);
	return t ? new Date(Date.UTC(Number(t[1]), Number(t[2]) - 1, Number(t[3]))) : null;
}
function W(e) {
	return e.toISOString().slice(0, 10);
}
function G(e, t) {
	if (e <= 0 || t <= 0) return 0;
	let n = e / t;
	return n > .75 ? 4 : n > .5 ? 3 : n > .25 ? 2 : 1;
}
function K({ label: e, showLabel: t = !1, description: n, keyboardHint: i, isLoading: a, loadingLabel: s, error: c, emptyState: l, className: d, days: f, formatValue: p, formatDate: m, weekStartsOn: g = 1, lessLabel: _, moreLabel: v, table: y }) {
	let b = (0, h.useId)(), x = (0, h.useId)(), S = (0, h.useId)(), { locale: C } = u(), w = te(p), T = (0, h.useMemo)(() => {
		if (m) return m;
		let e = new Intl.DateTimeFormat(C, {
			weekday: `long`,
			day: `numeric`,
			month: `long`,
			year: `numeric`,
			timeZone: `UTC`
		});
		return (t) => e.format(t);
	}, [m, C]), E = (0, h.useMemo)(() => {
		let e = f.map((e) => ({
			day: e,
			date: U(e.date)
		})).filter((e) => e.date !== null).toSorted((e, t) => e.date.getTime() - t.date.getTime()), t = e[0], n = e.at(-1);
		if (!t || !n) return [];
		let r = new Map(e.map((e) => [W(e.date), e.day])), i = Math.max(0, ...e.map((e) => e.day.value)), a = (t.date.getUTCDay() - g + 7) % 7, o = [], s = 864e5, c = Math.round((n.date.getTime() - t.date.getTime()) / s);
		for (let e = 0; e <= c; e += 1) {
			let n = new Date(t.date.getTime() + e * s), c = W(n), l = r.get(c) ?? {
				date: c,
				value: 0
			}, u = a + e;
			o.push({
				day: l,
				date: n,
				column: Math.floor(u / 7),
				row: u % 7,
				level: G(l.value, i)
			});
		}
		return o;
	}, [f, g]), D = E.length ? (E.at(-1)?.column ?? 0) + 1 : 0, O = (0, h.useRef)(null), k = R(O, 770), A = Math.max(10, Math.min(18, Math.floor((k - z) / Math.max(1, D)) - le)), j = A + le, M = D * j + z, P = B + 7 * j, F = (0, h.useMemo)(() => {
		let e = new Intl.DateTimeFormat(C, {
			month: `short`,
			timeZone: `UTC`
		}), t = [], n = ``;
		for (let r of E) {
			if (r.row !== 0 && r !== E[0]) continue;
			let i = `${r.date.getUTCFullYear()}-${r.date.getUTCMonth()}`;
			i !== n && t.push({
				column: r.column,
				text: e.format(r.date)
			}), n = i;
		}
		let r = t[1];
		return r && t[0] && r.column - t[0].column < 3 ? t.slice(1) : t;
	}, [E, C]), I = (0, h.useMemo)(() => {
		let e = new Intl.DateTimeFormat(C, {
			weekday: `short`,
			timeZone: `UTC`
		}), t = Date.UTC(2023, 11, 31);
		return [
			1,
			3,
			5
		].map((n) => ({
			row: (n - g + 7) % 7,
			text: e.format(new Date(t + n * 864e5))
		}));
	}, [C, g]), K = Math.max(...I.map((e) => L(e.text))) + 8, ue = (0, h.useCallback)((e) => {
		let t = E[e];
		if (!t) return ``;
		let n = t.day.details?.length ? `. ${t.day.details.map((e) => `${String(e.label)} ${String(e.value)}`).join(`, `)}` : ``;
		return `${T(t.date)}: ${w.value(t.day.value)}${n}`;
	}, [
		E,
		T,
		w
	]), de = ce({
		count: E.length,
		across: 7,
		along: 1,
		describe: ue
	}), { setPointer: fe } = de, q = de.active, [pe, J] = (0, h.useState)(0), Y = (0, h.useRef)(!1);
	(0, h.useLayoutEffect)(() => {
		let e = O.current;
		e && !Y.current && E.length !== 0 && (Y.current = !0, e.scrollLeft = e.scrollWidth, J(e.scrollLeft));
	}, [E.length, O]), (0, h.useLayoutEffect)(() => {
		let e = O.current, t = q === null ? void 0 : E[q];
		if (!e || !t) return;
		let n = t.column * j;
		n < e.scrollLeft ? e.scrollLeft = Math.max(0, n - le) : n + j > e.scrollLeft + e.clientWidth && (e.scrollLeft = n + j - e.clientWidth);
	}, [
		q,
		E,
		O,
		j
	]);
	let X = (0, h.useCallback)(() => J(O.current?.scrollLeft ?? 0), [O]), me = (0, h.useCallback)((e) => {
		let t = e.target.closest(`[data-index]`);
		fe(t ? Number(t.dataset.index) : null);
	}, [fe]), he = (0, h.useCallback)(() => fe(null), [fe]), Z = q === null ? void 0 : E[q], ge = (0, h.useMemo)(() => [...Z?.day.details ?? []], [Z]), _e = (0, h.useMemo)(() => E.filter((e) => e.day.value > 0), [E]), Q = (0, h.useMemo)(() => y ? [{
		id: `date`,
		header: y.dateHeader,
		isRowHeader: !0,
		cell: (e) => T(e.date)
	}, {
		id: `value`,
		header: y.valueHeader,
		kind: `numeric`,
		cell: (e) => w.value(e.day.value)
	}] : [], [
		T,
		w,
		y
	]), ve = (0, h.useCallback)((e) => e.day.date, []), ye = ie({
		isLoading: a,
		error: c,
		emptyState: l,
		isEmpty: E.every((e) => e.day.value <= 0)
	}), be = [i ? S : null, n == null ? null : x].filter(Boolean).join(` `), xe = (0, h.useMemo)(() => ({
		width: 11,
		height: 11
	}), []);
	return (0, N.jsx)(ne, {
		label: e,
		labelId: b,
		showLabel: t,
		busy: !!a,
		className: d,
		children: ye ? (0, N.jsx)(ae, {
			kind: ye,
			height: 116,
			children: ye === `loading` ? s : ye === `error` ? c : l
		}) : (0, N.jsxs)(N.Fragment, { children: [
			(0, N.jsxs)(`div`, {
				className: `relative flex min-w-0`,
				children: [
					(0, N.jsx)(`svg`, {
						"data-sk-drawn": `chart`,
						"aria-hidden": `true`,
						focusable: `false`,
						width: K,
						height: P,
						className: `block shrink-0 select-none`,
						children: I.map((e) => (0, N.jsx)(`text`, {
							x: 0,
							y: B + e.row * j + A - 1,
							className: `fill-muted text-caption forced-colors:fill-[CanvasText]`,
							children: e.text
						}, e.row))
					}),
					(0, N.jsxs)(r, {
						ref: O,
						"aria-labelledby": b,
						...be ? { "aria-describedby": be } : {},
						...de.focusProps,
						onScroll: X,
						className: `min-w-0 flex-1 overflow-x-auto overscroll-x-contain rounded-sm pb-1`,
						children: [i ? (0, N.jsx)(`span`, {
							id: S,
							className: `sr-only`,
							children: i
						}) : null, (0, N.jsxs)(`svg`, {
							"data-sk-drawn": `chart`,
							"aria-hidden": `true`,
							focusable: `false`,
							width: M,
							height: P,
							viewBox: `0 0 ${M} ${P}`,
							onPointerOver: me,
							onPointerDown: me,
							onPointerLeave: he,
							className: `block select-none`,
							children: [F.map((e) => (0, N.jsx)(`text`, {
								x: e.column * j,
								y: 11,
								className: `fill-muted text-caption forced-colors:fill-[CanvasText]`,
								children: e.text
							}, `${e.column}-${e.text}`)), E.map((e, t) => (0, N.jsx)(`rect`, {
								"data-index": t,
								x: e.column * j,
								y: B + e.row * j,
								width: A,
								height: A,
								rx: 2.5,
								fillOpacity: e.level === 0 ? .08 : V[e.level],
								strokeWidth: q === t ? 2 : 1,
								strokeOpacity: q === t ? 1 : .1,
								className: o(e.level === 0 ? `fill-fg forced-colors:fill-[Canvas]` : `fill-accent forced-colors:fill-[Highlight]`, `stroke-fg forced-colors:stroke-[CanvasText]`)
							}, e.day.date))]
						})]
					}),
					Z ? (0, N.jsx)(ee, {
						"aria-hidden": !0,
						x: K + Z.column * j + A / 2 - pe,
						y: Z.row < 3 ? B + (Z.row + 1) * j : B + Z.row * j,
						placement: Z.row < 3 ? `bottom` : `top`,
						boundary: K + k,
						title: T(Z.date),
						note: w.value(Z.day.value),
						items: ge
					}) : null
				]
			}),
			_ && v ? (0, N.jsxs)(`div`, {
				"aria-hidden": `true`,
				className: `flex items-center justify-end gap-1 text-caption text-muted`,
				children: [
					(0, N.jsx)(`span`, {
						className: `me-1`,
						children: _
					}),
					H.map((e) => (0, N.jsx)(`svg`, {
						"data-sk-drawn": `chart`,
						width: `11`,
						height: `11`,
						viewBox: `0 0 11 11`,
						focusable: `false`,
						style: xe,
						children: (0, N.jsx)(`rect`, {
							width: `11`,
							height: `11`,
							rx: `2.5`,
							fillOpacity: e === 0 ? .08 : V[e],
							strokeOpacity: .1,
							className: o(e === 0 ? `fill-fg forced-colors:fill-[Canvas]` : `fill-accent forced-colors:fill-[Highlight]`, `stroke-fg forced-colors:stroke-[CanvasText]`)
						})
					}, e)),
					(0, N.jsx)(`span`, {
						className: `ms-1`,
						children: v
					})
				]
			}) : null,
			(0, N.jsx)(oe, { children: de.announcement }),
			(0, N.jsx)(re, {
				description: n,
				descriptionId: x,
				children: y ? (0, N.jsx)(se, {
					trigger: y.trigger,
					caption: e,
					columns: Q,
					rows: _e,
					rowKey: ve
				}) : null
			})
		] })
	});
}
function ue({ items: e, orientation: t = `horizontal`, label: n, activeId: r = null, onHoverChange: i, className: a }) {
	let s = (0, h.useCallback)((e) => {
		i && i(e.target.closest(`[data-legend-id]`)?.dataset.legendId ?? null);
	}, [i]), c = (0, h.useCallback)(() => i?.(null), [i]);
	if (e.length === 0) return null;
	let l = t === `vertical`;
	return (0, N.jsx)(`ul`, {
		...n ? { "aria-label": n } : {},
		onPointerOver: i ? s : void 0,
		onPointerLeave: i ? c : void 0,
		className: o(`m-0 flex min-w-0 list-none p-0 text-caption text-muted`, l ? `flex-col gap-1.5` : `flex-wrap gap-x-4 gap-y-1`, a),
		children: e.map((e) => {
			let t = r !== null && r !== e.id;
			return (0, N.jsxs)(`li`, {
				"data-legend-id": e.id,
				className: o(`flex min-w-0 items-center gap-1.5 transition-opacity duration-(--sk-duration-fast)`, `motion-reduce:transition-none in-[.a11y-reduce-motion]:transition-none`, t && `opacity-55`, r === e.id && `text-fg`),
				children: [
					(0, N.jsx)(P, {
						color: e.color ?? 1,
						shape: e.shape ?? `block`,
						...e.pattern ? { pattern: e.pattern } : {}
					}),
					e.value === void 0 ? null : (0, N.jsx)(`strong`, {
						className: `font-semibold text-fg tabular-nums`,
						children: e.value
					}),
					(0, N.jsx)(`span`, {
						className: `min-w-0 [overflow-wrap:anywhere]`,
						children: e.label
					}),
					e.detail === void 0 ? null : (0, N.jsx)(`span`, {
						className: `text-muted tabular-nums`,
						children: e.detail
					})
				]
			}, e.id);
		})
	});
}
function de(e, t, n = 4) {
	let r = Number.isFinite(e) ? e : 0, i = Number.isFinite(t) ? Math.max(t, r) : r, a = Math.max(i - r, 1e-9) / Math.max(1, n), o = 10 ** Math.floor(Math.log10(a)), s = [
		1,
		2,
		2.5,
		5,
		10
	].map((e) => e * o).find((e) => e >= a) ?? a, c = Math.floor(r / s) * s, l = Math.ceil(i / s) * s;
	l === c && (l = c + s);
	let u = [];
	for (let e = c; e <= l + s / 2; e += s) u.push(Number(e.toPrecision(12)));
	return {
		min: c,
		max: l,
		step: s,
		ticks: u
	};
}
function fe(e, t) {
	if (e <= 0) return [];
	let n = Math.max(1, Math.ceil(e / Math.max(1, t))), r = [];
	for (let t = 0; t < e; t += n) r.push(t);
	let i = e - 1, a = r.at(-1) ?? 0;
	return a === i || (i - a >= n ? r.push(i) : r.length > 1 && (r[r.length - 1] = i)), r;
}
function q(e) {
	let t = ``, n = !1;
	for (let r of e) r ? (t += `${n ? `L` : `M`}${X(r.x)} ${X(r.y)}`, n = !0) : n = !1;
	return t;
}
function pe(e, t) {
	let n = ``, r = [], i = () => {
		let e = r[0], i = r.at(-1);
		if (e && i && r.length > 1) {
			n += `M${X(e.x)} ${X(t)}`;
			for (let e of r) n += `L${X(e.x)} ${X(e.y)}`;
			n += `L${X(i.x)} ${X(t)}Z`;
		}
		r = [];
	};
	for (let t of e) t ? r.push(t) : i();
	return i(), n;
}
function J(e, t, n, r, i) {
	if (r <= 0 || n <= 0) return ``;
	let a = Math.min(i, r, n / 2), o = t + r;
	return `M${X(e)} ${X(o)}V${X(t + a)}Q${X(e)} ${X(t)} ${X(e + a)} ${X(t)}H${X(e + n - a)}Q${X(e + n)} ${X(t)} ${X(e + n)} ${X(t + a)}V${X(o)}Z`;
}
function Y(e, t, n, r, i) {
	let a = Math.min(i - r, Math.PI * 2 - 1e-4), o = r + a, s = +(a > Math.PI), c = (t, n) => `${X(e + t * Math.sin(n))} ${X(e - t * Math.cos(n))}`;
	return `M${c(t, r)}A${t} ${t} 0 ${s} 1 ${c(t, o)}L${c(n, o)}A${n} ${n} 0 ${s} 0 ${c(n, r)}Z`;
}
function X(e) {
	return Math.round(e * 100) / 100;
}
var me = 10, he = 26;
function Z(e) {
	return e.orientation === `rows` ? (0, N.jsx)(ve, { ...e }) : (0, N.jsx)(Q, { ...e });
}
function ge({ data: e, formatValue: t, formatTick: n, valueLabel: r, highlightLabel: i }) {
	let a = te(t, n), o = (0, h.useCallback)((e) => e === null || !Number.isFinite(e) ? `—` : a.value(e), [a]);
	return {
		format: a,
		valueText: o,
		isEmpty: e.every((e) => e.value === null || !Number.isFinite(e.value)),
		max: Math.max(0, ...e.map((e) => e.value !== null && Number.isFinite(e.value) ? e.value : 0)),
		describe: (0, h.useCallback)((t) => {
			let n = e[t];
			if (!n) return ``;
			let a = n.highlight && i ? `, ${i}` : ``, s = n.details?.length ? `. ${n.details.map((e) => `${String(e.label)} ${String(e.value)}`).join(`, `)}` : ``;
			return `${n.label}: ${r} ${o(n.value)}${a}${s}`;
		}, [
			e,
			i,
			r,
			o
		])
	};
}
function _e({ table: e, valueLabel: t }, n) {
	return {
		columns: (0, h.useMemo)(() => e ? [{
			id: `category`,
			header: e.categoryHeader,
			isRowHeader: !0,
			cell: (e) => e.label
		}, {
			id: `value`,
			header: t,
			kind: `numeric`,
			cell: (e) => n(e.value)
		}] : [], [
			e,
			t,
			n
		]),
		rowKey: (0, h.useCallback)((e) => e.id, [])
	};
}
function Q(e) {
	let { data: t, label: n, showLabel: i = !1, description: a, keyboardHint: s, isLoading: c, loadingLabel: l, error: u, emptyState: d, className: f, valueLabel: p, color: m = 1, highlightColor: g = `danger`, highlightLabel: _, height: v = 200, table: b } = e, x = (0, h.useId)(), S = (0, h.useId)(), w = (0, h.useId)(), E = (0, h.useRef)(null), D = R(E, 640), { format: O, valueText: k, isEmpty: P, max: F, describe: I } = ge(e), { columns: te, rowKey: le } = _e(e, k), z = t.length, B = (0, h.useMemo)(() => {
		let e = de(0, Math.max(1, F)), n = e.ticks.map((e) => O.tick(e)), r = Math.max(24, ...n.map(L)) + 8, i = Math.max(20, D - r - me), a = Math.max(20, v - 14 - he), o = i / Math.max(1, z), s = Math.max(2, Math.min(32, o * .72, o - 2)), c = (t) => 14 + a * (1 - t / (e.max || 1)), l = (e) => r + o * e + o / 2, u = t.map((e, t) => {
			let n = e.value !== null && Number.isFinite(e.value) ? Math.max(0, e.value) : 0, r = 14 + a - c(n), i = l(t) - s / 2;
			return {
				datum: e,
				index: t,
				x: i,
				top: c(n),
				path: J(i, c(n), s, r, Math.min(4, s / 2))
			};
		}), d = t.map((e) => e.axisLabel ?? e.label), f = Math.max(20, ...d.map(L));
		return {
			scale: e,
			tickTexts: n,
			left: r,
			top: 14,
			plotWidth: i,
			plotHeight: a,
			slot: o,
			y: c,
			center: l,
			bars: u,
			xLabels: fe(z, Math.max(2, Math.floor(i / (f + 14)))).map((e) => ({
				index: e,
				x: l(e),
				text: d[e] ?? ``
			})),
			baseline: 14 + a
		};
	}, [
		z,
		t,
		O,
		v,
		F,
		D
	]), V = ce({
		count: z,
		describe: I
	}), { setPointer: H } = V, U = (0, h.useCallback)((e) => {
		let t = e.currentTarget.getBoundingClientRect(), n = t.width > 0 ? D / t.width : 1, r = (e.clientX - t.left) * n, i = Math.floor((r - B.left) / B.slot);
		H(!Number.isFinite(i) || i < 0 || i >= z ? null : i);
	}, [
		z,
		B.left,
		B.slot,
		H,
		D
	]), W = (0, h.useCallback)(() => H(null), [H]), G = V.active, K = G === null ? void 0 : t[G], q = (0, h.useMemo)(() => {
		if (!K) return [];
		let e = K.highlight ? g : m;
		return [{
			id: `value`,
			label: p,
			value: k(K.value),
			color: e,
			shape: `block`
		}, ...K.details ?? []];
	}, [
		K,
		m,
		g,
		p,
		k
	]), pe = t.some((e) => e.highlight), Y = (0, h.useMemo)(() => {
		let e = [{
			id: `value`,
			label: p,
			color: m,
			shape: `block`
		}];
		return pe && _ && e.push({
			id: `highlight`,
			label: _,
			color: g,
			shape: `marker`
		}), e;
	}, [
		m,
		pe,
		g,
		_,
		p
	]), X = ie({
		isLoading: c,
		error: u,
		emptyState: d,
		isEmpty: P
	}), Z = [s ? w : null, a == null ? null : S].filter(Boolean).join(` `);
	return (0, N.jsx)(ne, {
		label: n,
		labelId: x,
		showLabel: i,
		busy: !!c,
		className: f,
		children: X ? (0, N.jsx)(ae, {
			kind: X,
			height: v,
			children: X === `loading` ? l : X === `error` ? u : d
		}) : (0, N.jsxs)(N.Fragment, { children: [
			pe && _ ? (0, N.jsx)(ue, { items: Y }) : null,
			(0, N.jsxs)(`div`, {
				ref: E,
				className: `relative min-w-0`,
				children: [(0, N.jsxs)(r, {
					"aria-labelledby": x,
					...Z ? { "aria-describedby": Z } : {},
					...V.focusProps,
					className: `rounded-sm`,
					children: [s ? (0, N.jsx)(`span`, {
						id: w,
						className: `sr-only`,
						children: s
					}) : null, (0, N.jsxs)(`svg`, {
						"data-sk-drawn": `chart`,
						"aria-hidden": `true`,
						focusable: `false`,
						width: `100%`,
						height: v,
						viewBox: `0 0 ${D} ${v}`,
						preserveAspectRatio: `none`,
						onPointerMove: U,
						onPointerDown: U,
						onPointerLeave: W,
						className: `block touch-pan-y overflow-visible select-none`,
						children: [
							G === null ? null : (0, N.jsx)(`rect`, {
								x: B.left + B.slot * G,
								y: B.top,
								width: B.slot,
								height: B.plotHeight,
								rx: `3`,
								className: `fill-hover forced-colors:fill-none`
							}),
							B.scale.ticks.map((e, t) => (0, N.jsxs)(`g`, { children: [(0, N.jsx)(`line`, {
								x1: B.left,
								x2: D - me,
								y1: B.y(e),
								y2: B.y(e),
								strokeWidth: `1`,
								className: o(`stroke-border`, A)
							}), (0, N.jsx)(`text`, {
								x: B.left - 8,
								y: B.y(e) + 4,
								textAnchor: `end`,
								className: o(`fill-muted text-caption tabular-nums`, j),
								children: B.tickTexts[t]
							})] }, e)),
							B.bars.map(({ datum: e, index: t, path: n, top: r }) => n || e.highlight ? (0, N.jsxs)(`g`, { children: [n ? (0, N.jsx)(`path`, {
								d: n,
								className: o(y[e.highlight ? g : m], e.highlight ? `forced-colors:fill-[Highlight]` : T, `transition-opacity duration-(--sk-duration-fast)`, M, G !== null && G !== t && `opacity-60`)
							}) : null, e.highlight ? (0, N.jsx)(`path`, {
								d: `M${B.center(t) - 5} ${r - 11}h10l-5 7z`,
								className: o(y[g], `forced-colors:fill-[CanvasText]`)
							}) : null] }, e.id) : null),
							(0, N.jsx)(`line`, {
								x1: B.left,
								x2: D - me,
								y1: B.baseline,
								y2: B.baseline,
								strokeWidth: `1`,
								className: o(`stroke-border-strong`, C)
							}),
							B.xLabels.map((e, t) => {
								let n = L(e.text) / 2, r = t === 0 && e.x - n < 0 ? `start` : e.x + n > D ? `end` : `middle`;
								return (0, N.jsx)(`text`, {
									x: e.x,
									y: v - 6,
									textAnchor: r,
									className: o(`fill-muted text-caption`, j),
									children: e.text
								}, e.index);
							})
						]
					})]
				}), K && G !== null ? (0, N.jsx)(ee, {
					"aria-hidden": !0,
					x: B.center(G),
					y: Math.max(B.top, (B.bars[G]?.top ?? B.top) - (K.highlight ? 12 : 0)),
					boundary: D,
					title: K.label,
					...K.highlight && _ ? { note: _ } : {},
					items: q
				}) : null]
			}),
			(0, N.jsx)(oe, { children: V.announcement }),
			(0, N.jsx)(re, {
				description: a,
				descriptionId: S,
				children: b ? (0, N.jsx)(se, {
					trigger: b.trigger,
					caption: n,
					columns: te,
					rows: t,
					rowKey: le
				}) : null
			})
		] })
	});
}
function ve(e) {
	let { data: t, label: n, showLabel: r = !1, description: i, isLoading: a, loadingLabel: o, error: s, emptyState: c, className: l, color: u = 1, highlightColor: d = `danger`, highlightLabel: f, height: p = 160, ordered: m = !1, table: g } = e, _ = (0, h.useId)(), v = (0, h.useId)(), { valueText: y, isEmpty: b, max: x } = ge(e), { columns: S, rowKey: C } = _e(e, y), w = ie({
		isLoading: a,
		error: s,
		emptyState: c,
		isEmpty: b
	});
	return (0, N.jsx)(ne, {
		label: n,
		labelId: _,
		showLabel: r,
		busy: !!a,
		className: l,
		children: w ? (0, N.jsx)(ae, {
			kind: w,
			height: p,
			children: w === `loading` ? o : w === `error` ? s : c
		}) : (0, N.jsxs)(N.Fragment, { children: [(0, N.jsx)(m ? `ol` : `ul`, {
			"aria-labelledby": _,
			className: `@container m-0 flex min-w-0 list-none flex-col gap-2.5 p-0`,
			children: t.map((e, t) => (0, N.jsx)(ye, {
				datum: e,
				rank: m ? t + 1 : void 0,
				share: x > 0 && e.value !== null ? Math.max(0, e.value) / x : 0,
				valueText: y(e.value),
				color: e.highlight ? d : u,
				highlightLabel: e.highlight ? f : void 0
			}, e.id))
		}), (0, N.jsx)(re, {
			description: i,
			descriptionId: v,
			children: g ? (0, N.jsx)(se, {
				trigger: g.trigger,
				caption: n,
				columns: S,
				rows: t,
				rowKey: C
			}) : null
		})] })
	});
}
function ye({ datum: e, rank: t, share: n, valueText: r, color: i, highlightLabel: a }) {
	let s = (0, h.useMemo)(() => ({ width: `${Math.max(n * 100, +(n > 0))}%` }), [n]);
	return (0, N.jsxs)(`li`, {
		className: `grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-1 text-body @lg:grid-cols-[minmax(6rem,14rem)_minmax(0,1fr)_auto]`,
		children: [
			(0, N.jsxs)(`span`, {
				className: `flex min-w-0 items-center gap-1.5`,
				children: [
					t === void 0 ? null : (0, N.jsx)(`span`, {
						className: `w-5 shrink-0 text-caption text-muted tabular-nums`,
						children: t
					}),
					(0, N.jsx)(`span`, {
						className: `min-w-0 [overflow-wrap:anywhere]`,
						children: e.label
					}),
					a ? (0, N.jsxs)(`span`, {
						className: `inline-flex shrink-0 items-center gap-1 text-caption font-medium text-fg`,
						children: [(0, N.jsx)(P, {
							color: i,
							shape: `marker`
						}), a]
					}) : null
				]
			}),
			(0, N.jsx)(`span`, {
				"aria-hidden": `true`,
				className: `col-span-2 row-start-2 block h-2 min-w-0 overflow-hidden rounded-full border border-transparent bg-hover @lg:col-span-1 @lg:col-start-2 @lg:row-start-1`,
				children: (0, N.jsx)(`span`, {
					style: s,
					className: o(`block h-full rounded-full transition-[width] duration-(--sk-duration-slow) ease-out`, b[i], E, M)
				})
			}),
			(0, N.jsx)(`span`, {
				className: `col-start-2 row-start-1 text-end font-semibold tabular-nums @lg:col-start-3`,
				children: r
			})
		]
	});
}
var be = l(`trend.up`), xe = l(`trend.down`), Se = l(`arrow.right`), Ce = {
	good: {
		plain: `text-ok`,
		pill: `border-ok bg-ok-soft text-ok`
	},
	bad: {
		plain: `text-danger`,
		pill: `border-danger bg-danger-soft text-danger`
	},
	neutral: {
		plain: `text-muted`,
		pill: `border-border bg-sunken text-muted`
	}
}, we = {
	up: be,
	down: xe,
	flat: Se
};
function Te({ value: e, directionLabels: t, goodWhen: n = `up`, assessmentLabels: r, comparison: i, emptyLabel: a = `—`, flatWithin: s = 5e-4, formatValue: c, variant: l = `plain`, className: d }) {
	let { locale: f } = u(), p = (0, h.useMemo)(() => {
		if (c) return c;
		let e = new Intl.NumberFormat(f, {
			style: `percent`,
			minimumFractionDigits: 1,
			maximumFractionDigits: 1
		}), t = new Intl.NumberFormat(f, {
			style: `percent`,
			maximumFractionDigits: 0
		});
		return (n) => {
			let r = Math.abs(n);
			return r >= 10 ? `>${t.format(9.99)}` : (r < .1 ? e : t).format(r);
		};
	}, [c, f]), m = o(`inline-flex max-w-full items-center gap-1 text-caption font-medium tabular-nums`, l === `pill` && `rounded-full border px-2 py-0.5`);
	if (e === null || !Number.isFinite(e)) return (0, N.jsx)(`span`, {
		className: o(m, l === `pill` ? Ce.neutral.pill : `text-muted`, d),
		children: (0, N.jsx)(`span`, {
			className: `[overflow-wrap:anywhere]`,
			children: a
		})
	});
	let g = Math.abs(e) < s ? `flat` : e > 0 ? `up` : `down`, _ = g === `flat` || n === `neither` ? `neutral` : g === n ? `good` : `bad`, v = we[g], y = _ === `neutral` || !r ? null : r[_];
	return (0, N.jsxs)(`span`, {
		className: o(`inline-flex max-w-full flex-wrap items-center gap-x-1.5 gap-y-0.5`, d),
		children: [(0, N.jsxs)(`span`, {
			"data-direction": g,
			"data-verdict": _,
			className: o(m, Ce[_][l]),
			children: [
				(0, N.jsx)(v, {
					"aria-hidden": `true`,
					focusable: `false`,
					className: `size-3.5 shrink-0`,
					strokeWidth: 2.5
				}),
				(0, N.jsx)(`span`, {
					className: `sr-only`,
					children: t[g]
				}),
				(0, N.jsx)(`span`, { children: p(g === `flat` ? 0 : e) }),
				y ? (0, N.jsx)(`span`, {
					className: `sr-only`,
					children: `, ${y}`
				}) : null
			]
		}), i == null ? null : (0, N.jsx)(`span`, {
			className: `min-w-0 text-caption text-muted [overflow-wrap:anywhere]`,
			children: i
		})]
	});
}
function Ee({ prefix: e, colors: t }) {
	let n = [...new Set(t)];
	return (0, N.jsx)(`defs`, { children: n.map((t) => (0, N.jsxs)(`pattern`, {
		id: k(e, t),
		patternUnits: `userSpaceOnUse`,
		...De[t].frame,
		children: [(0, N.jsx)(`rect`, {
			width: `100%`,
			height: `100%`,
			fill: `Canvas`
		}), De[t].marks]
	}, t)) });
}
var De = {
	1: {
		frame: {
			width: 4,
			height: 4
		},
		marks: (0, N.jsx)(`rect`, {
			width: `4`,
			height: `4`,
			fill: `CanvasText`
		})
	},
	2: {
		frame: {
			width: 5,
			height: 5,
			patternTransform: `rotate(-45)`
		},
		marks: (0, N.jsx)(`rect`, {
			width: `2`,
			height: `5`,
			fill: `CanvasText`
		})
	},
	3: {
		frame: {
			width: 4,
			height: 4
		},
		marks: (0, N.jsx)(`circle`, {
			cx: `2`,
			cy: `2`,
			r: `1.3`,
			fill: `CanvasText`
		})
	},
	4: {
		frame: {
			width: 5,
			height: 5
		},
		marks: (0, N.jsx)(`rect`, {
			width: `2`,
			height: `5`,
			fill: `CanvasText`
		})
	},
	muted: {
		frame: {
			width: 4,
			height: 4
		},
		marks: (0, N.jsx)(`rect`, {
			width: `4`,
			height: `1`,
			fill: `CanvasText`
		})
	},
	ok: {
		frame: {
			width: 5,
			height: 5,
			patternTransform: `rotate(45)`
		},
		marks: (0, N.jsx)(`rect`, {
			width: `2`,
			height: `5`,
			fill: `CanvasText`
		})
	},
	warn: {
		frame: {
			width: 6,
			height: 6
		},
		marks: (0, N.jsxs)(N.Fragment, { children: [(0, N.jsx)(`rect`, {
			width: `3`,
			height: `3`,
			fill: `CanvasText`
		}), (0, N.jsx)(`rect`, {
			x: `3`,
			y: `3`,
			width: `3`,
			height: `3`,
			fill: `CanvasText`
		})] })
	},
	danger: {
		frame: {
			width: 5,
			height: 5
		},
		marks: (0, N.jsxs)(N.Fragment, { children: [(0, N.jsx)(`rect`, {
			width: `5`,
			height: `1`,
			fill: `CanvasText`
		}), (0, N.jsx)(`rect`, {
			width: `1`,
			height: `5`,
			fill: `CanvasText`
		})] })
	}
}, Oe = {
	sm: {
		box: 96,
		center: `text-body`
	},
	md: {
		box: 128,
		center: `text-title`
	},
	lg: {
		box: 168,
		center: `text-heading`
	}
};
function ke({ label: e, showLabel: t = !1, description: n, slices: r, size: i = `md`, maxSlices: a = 5, otherLabel: s, sort: c = !0, formatValue: l, formatShare: d, centerValue: f, centerLabel: p, legendLabel: m, isLoading: g, loadingLabel: v, error: b, emptyState: x, className: S }) {
	let C = (0, h.useId)(), w = (0, h.useId)(), T = (0, h.useId)(), { locale: E } = u(), D = te(l), A = (0, h.useMemo)(() => {
		if (d) return d;
		let e = new Intl.NumberFormat(E, {
			style: `percent`,
			maximumFractionDigits: 0
		});
		return (t) => t > 0 && t < .005 ? `<${e.format(.01)}` : e.format(t);
	}, [d, E]), [j, P] = (0, h.useState)(null), { box: F, center: I } = Oe[i], ee = (0, h.useMemo)(() => {
		let e = r.filter((e) => Number.isFinite(e.value) && e.value > 0), t = c ? e.toSorted((e, t) => t.value - e.value) : e;
		if (s === void 0 || t.length <= a) return t;
		let n = t.slice(0, Math.max(1, a - 1)), i = t.slice(n.length).reduce((e, t) => e + t.value, 0);
		return [...n, {
			id: `other`,
			label: s,
			value: i,
			color: `muted`
		}];
	}, [
		a,
		s,
		r,
		c
	]), L = ee.reduce((e, t) => e + t.value, 0), oe = (0, h.useMemo)(() => {
		let e = F / 2, t = e * .64, n = 0, r = 0, i = [];
		for (let a of ee) {
			let o = L > 0 ? a.value / L : 0, s = n + o * Math.PI * 2, c = a.color ?? _(r);
			a.color || (r += 1), i.push({
				slice: a,
				color: c,
				share: o,
				path: Y(e, e, t, n, s),
				pattern: { "--sk-chart-pattern": `url("#${k(T, c)}")` }
			}), n = s;
		}
		return i;
	}, [
		F,
		T,
		ee,
		L
	]), se = (0, h.useMemo)(() => oe.map((e) => e.color), [oe]), R = (0, h.useMemo)(() => oe.map((e) => ({
		id: e.slice.id,
		label: e.slice.label,
		color: e.color,
		shape: `block`,
		value: A(e.share),
		detail: `(${D.value(e.slice.value)})`
	})), [
		oe,
		D,
		A
	]), ce = (0, h.useCallback)((e) => {
		let t = e.target.closest(`[data-slice]`);
		P(t?.dataset.slice ?? null);
	}, []), le = (0, h.useCallback)(() => P(null), []), z = (0, h.useMemo)(() => ({
		width: F,
		height: F
	}), [F]), B = ie({
		isLoading: g,
		error: b,
		emptyState: x,
		isEmpty: L === 0
	}), V = f === void 0 ? D.value(L) : f;
	return (0, N.jsx)(ne, {
		label: e,
		labelId: C,
		showLabel: t,
		busy: !!g,
		className: S,
		children: B ? (0, N.jsx)(ae, {
			kind: B,
			height: F,
			children: B === `loading` ? v : B === `error` ? b : x
		}) : (0, N.jsxs)(N.Fragment, { children: [(0, N.jsxs)(`div`, {
			className: `flex min-w-0 flex-wrap items-center gap-x-6 gap-y-4`,
			children: [(0, N.jsxs)(`div`, {
				style: z,
				className: `relative shrink-0`,
				children: [(0, N.jsxs)(`svg`, {
					"data-sk-drawn": `chart`,
					"aria-hidden": `true`,
					focusable: `false`,
					width: F,
					height: F,
					viewBox: `0 0 ${F} ${F}`,
					onPointerOver: ce,
					onPointerLeave: le,
					className: `block overflow-visible`,
					children: [(0, N.jsx)(Ee, {
						prefix: T,
						colors: se
					}), L === 0 ? (0, N.jsx)(`circle`, {
						cx: F / 2,
						cy: F / 2,
						r: F * .41,
						fill: `none`,
						strokeWidth: F * .18,
						className: `stroke-hover forced-colors:stroke-[GrayText]`
					}) : oe.map((e) => (0, N.jsx)(`path`, {
						"data-slice": e.slice.id,
						d: e.path,
						strokeWidth: `2`,
						style: e.pattern,
						className: o(y[e.color], `stroke-surface transition-opacity duration-(--sk-duration-fast) forced-colors:fill-(--sk-chart-pattern) forced-colors:stroke-[CanvasText]`, O, M, j !== null && j !== e.slice.id && `opacity-35`)
					}, e.slice.id))]
				}), V === null ? null : (0, N.jsxs)(`div`, {
					className: `pointer-events-none absolute inset-[22%] flex flex-col items-center justify-center overflow-hidden text-center leading-tight`,
					children: [(0, N.jsx)(`span`, {
						className: o(`max-w-full font-semibold tabular-nums [overflow-wrap:anywhere]`, I),
						children: V
					}), p !== void 0 && i !== `sm` ? (0, N.jsx)(`span`, {
						className: `max-w-full text-caption text-muted [overflow-wrap:anywhere]`,
						children: p
					}) : null]
				})]
			}), (0, N.jsx)(ue, {
				items: R,
				orientation: `vertical`,
				activeId: j,
				onHoverChange: P,
				...m ? { label: m } : {},
				className: `min-w-[10rem] flex-1 text-body`
			})]
		}), (0, N.jsx)(re, {
			description: n,
			descriptionId: w
		})] })
	});
}
var Ae = 14, je = [], Me = 26;
function Ne({ label: e, showLabel: t = !1, description: n, keyboardHint: i, isLoading: a, loadingLabel: s, error: c, emptyState: l, className: u, categories: d, axisLabels: f, series: p, height: m = 220, area: g = !1, yMin: b = 0, yMax: w, invert: T = !1, formatValue: E, formatTick: D, annotations: O = je, annotationsLabel: k, legendLabel: M, showLegend: P, table: F }) {
	let I = (0, h.useId)(), le = (0, h.useId)(), z = (0, h.useId)(), B = (0, h.useRef)(null), V = R(B, 640), H = te(E, D), U = d.length, W = (0, h.useMemo)(() => {
		let e = p.filter((e) => !e.ghost);
		return p.map((t) => {
			let n = t.color ?? (t.ghost ? `muted` : _(e.indexOf(t))), r = t.pattern ?? (t.ghost ? `short` : S[n]);
			return {
				...t,
				color: n,
				pattern: r
			};
		});
	}, [p]), G = (0, h.useMemo)(() => p.flatMap((e) => e.values.filter((e) => e !== null && Number.isFinite(e))), [p]), K = G.length === 0 || U === 0, J = (0, h.useMemo)(() => {
		let e = b ?? (G.length ? Math.floor(Math.min(...G)) : 0), t = w ?? (G.length ? Math.max(...G) : 1), n = de(Math.min(e, t), Math.max(t, e + 1e-9)), r = n.ticks.map((e) => H.tick(e)), i = Math.max(28, ...r.map(L)) + 8, a = O.length ? 18 : 10, o = Math.max(20, V - i - Ae), s = Math.max(20, m - a - Me), c = (e) => U <= 1 ? i + o / 2 : i + o * e / (U - 1), l = (e) => {
			let t = (e - n.min) / (n.max - n.min || 1);
			return T ? a + s * t : a + s * (1 - t);
		}, u = f ?? d, p = Math.max(24, ...u.map((e) => L(e))), h = Math.max(2, Math.floor(o / (p + 16)));
		return {
			scale: n,
			tickTexts: r,
			left: i,
			top: a,
			plotWidth: o,
			plotHeight: s,
			x: c,
			y: l,
			xLabels: fe(U, h).map((e) => ({
				index: e,
				x: c(e),
				text: u[e] ?? ``
			})),
			lines: W.map((e) => {
				let t = d.map((t, n) => {
					let r = e.values[n];
					return r == null || !Number.isFinite(r) ? null : {
						x: c(n),
						y: l(r)
					};
				}), n = t.findLast((e) => e !== null) ?? null;
				return {
					line: e,
					points: t,
					path: q(t),
					area: g && !e.ghost ? pe(t, T ? a : a + s) : ``,
					last: n
				};
			}),
			baseline: T ? a : a + s
		};
	}, [
		O.length,
		g,
		f,
		d,
		U,
		W,
		H,
		m,
		T,
		G,
		V,
		w,
		b
	]), Y = (0, h.useMemo)(() => {
		let e = new Map();
		for (let t of O) t.index < 0 || t.index >= U || e.set(t.index, [...e.get(t.index) ?? [], t.label]);
		return e;
	}, [O, U]), X = (0, h.useCallback)((e) => e == null ? `—` : H.value(e), [H]), me = ce({
		count: U,
		describe: (0, h.useCallback)((e) => {
			let t = W.map((t) => `${t.label} ${X(t.values[e])}`), n = Y.get(e);
			return `${d[e] ?? ``}: ${t.join(`, `)}${n ? `. ${n.join(`, `)}` : ``}`;
		}, [
			d,
			W,
			Y,
			X
		])
	}), { setPointer: he } = me, Z = (0, h.useCallback)((e) => {
		if (U === 0) return;
		let t = e.currentTarget.getBoundingClientRect(), n = t.width > 0 ? V / t.width : 1, r = ((e.clientX - t.left) * n - J.left) / J.plotWidth, i = U <= 1 ? 0 : Math.round(r * (U - 1));
		Number.isFinite(i) && he(i);
	}, [
		U,
		J.left,
		J.plotWidth,
		he,
		V
	]), ge = (0, h.useCallback)(() => he(null), [he]), _e = (0, h.useMemo)(() => {
		let e = W.map((e) => ({
			id: e.id,
			label: e.label,
			color: e.color,
			shape: `line`,
			pattern: e.pattern
		}));
		return O.length && k && e.push({
			id: `annotations`,
			label: k,
			color: `muted`,
			shape: `marker`
		}), e;
	}, [
		O.length,
		k,
		W
	]), Q = me.active, ve = (0, h.useMemo)(() => Q === null ? [] : W.map((e) => ({
		id: e.id,
		label: e.label,
		value: X(e.values[Q]),
		color: e.color,
		shape: `line`,
		pattern: e.pattern
	})), [
		Q,
		W,
		X
	]), ye = (0, h.useMemo)(() => {
		if (!F) return [];
		let e = [{
			id: `category`,
			header: F.categoryHeader,
			isRowHeader: !0,
			cell: (e) => d[e.index] ?? ``
		}];
		for (let t of W) e.push({
			id: t.id,
			header: t.label,
			kind: `numeric`,
			cell: (e) => X(t.values[e.index])
		});
		return O.length && F.annotationHeader && e.push({
			id: `annotations`,
			header: F.annotationHeader,
			cell: (e) => Y.get(e.index)?.join(`, `) ?? ``
		}), e;
	}, [
		O.length,
		d,
		W,
		Y,
		F,
		X
	]), be = (0, h.useMemo)(() => d.map((e, t) => ({ index: t })), [d]), xe = (0, h.useCallback)((e) => String(e.index), []), Se = ie({
		isLoading: a,
		error: c,
		emptyState: l,
		isEmpty: K
	}), Ce = [i ? z : null, n == null ? null : le].filter(Boolean).join(` `), we = P ?? (W.length > 1 || O.length > 0 && k !== void 0);
	return (0, N.jsx)(ne, {
		label: e,
		labelId: I,
		showLabel: t,
		busy: !!a,
		className: u,
		children: Se ? (0, N.jsx)(ae, {
			kind: Se,
			height: m,
			children: Se === `loading` ? s : Se === `error` ? c : l
		}) : (0, N.jsxs)(N.Fragment, { children: [
			we ? (0, N.jsx)(ue, {
				items: _e,
				...M ? { label: M } : {},
				activeId: null
			}) : null,
			(0, N.jsxs)(`div`, {
				ref: B,
				className: `relative min-w-0`,
				children: [(0, N.jsxs)(r, {
					"aria-labelledby": I,
					...Ce ? { "aria-describedby": Ce } : {},
					...me.focusProps,
					className: `rounded-sm`,
					children: [i ? (0, N.jsx)(`span`, {
						id: z,
						className: `sr-only`,
						children: i
					}) : null, (0, N.jsxs)(`svg`, {
						"data-sk-drawn": `chart`,
						"aria-hidden": `true`,
						focusable: `false`,
						width: `100%`,
						height: m,
						viewBox: `0 0 ${V} ${m}`,
						preserveAspectRatio: `none`,
						onPointerMove: Z,
						onPointerDown: Z,
						onPointerLeave: ge,
						className: `block touch-pan-y overflow-visible select-none`,
						children: [
							J.scale.ticks.map((e, t) => (0, N.jsxs)(`g`, { children: [(0, N.jsx)(`line`, {
								x1: J.left,
								x2: V - Ae,
								y1: J.y(e),
								y2: J.y(e),
								className: o(`stroke-border`, A),
								strokeWidth: `1`
							}), (0, N.jsx)(`text`, {
								x: J.left - 8,
								y: J.y(e) + 4,
								textAnchor: `end`,
								className: o(`fill-muted text-caption tabular-nums`, j),
								children: J.tickTexts[t]
							})] }, e)),
							(0, N.jsx)(`line`, {
								x1: J.left,
								x2: V - Ae,
								y1: J.baseline,
								y2: J.baseline,
								className: o(`stroke-border-strong`, C),
								strokeWidth: `1`
							}),
							J.xLabels.map((e, t) => {
								let n = L(e.text) / 2, r = t === 0 && e.x - n < 0 ? `start` : e.x + n > V ? `end` : `middle`;
								return (0, N.jsx)(`text`, {
									x: e.x,
									y: m - 6,
									textAnchor: r,
									className: o(`fill-muted text-caption`, j),
									children: e.text
								}, e.index);
							}),
							[...Y.keys()].map((e) => (0, N.jsxs)(`g`, { children: [(0, N.jsx)(`line`, {
								x1: J.x(e),
								x2: J.x(e),
								y1: J.top,
								y2: J.top + J.plotHeight,
								strokeDasharray: `2 3`,
								className: o(`stroke-muted`, A)
							}), (0, N.jsx)(`path`, {
								d: `M${J.x(e) - 5} ${J.top - 12}h10l-5 7z`,
								className: o(`fill-muted`, j)
							})] }, `note-${e}`)),
							J.lines.map(({ line: e, area: t }) => t ? (0, N.jsx)(`path`, {
								d: t,
								fillOpacity: .14,
								className: o(y[e.color], `stroke-none forced-colors:hidden`)
							}, `area-${e.id}`) : null),
							Q === null ? null : (0, N.jsx)(`line`, {
								x1: J.x(Q),
								x2: J.x(Q),
								y1: J.top,
								y2: J.top + J.plotHeight,
								className: o(`stroke-border-strong`, C),
								strokeWidth: `1`
							}),
							J.lines.map(({ line: e, path: t, last: n }) => {
								let r = x[e.pattern];
								return (0, N.jsxs)(`g`, { children: [t ? (0, N.jsx)(`path`, {
									d: t,
									fill: `none`,
									strokeWidth: e.ghost ? 1.5 : 2.25,
									strokeLinejoin: `round`,
									strokeLinecap: `round`,
									...r ? { strokeDasharray: r } : {},
									className: o(v[e.color], e.ghost ? `forced-colors:stroke-[GrayText]` : C)
								}) : null, n && !e.ghost && Q === null ? (0, N.jsx)(`circle`, {
									cx: n.x,
									cy: n.y,
									r: `4`,
									strokeWidth: `2`,
									className: o(y[e.color], `stroke-surface forced-colors:fill-[CanvasText] forced-colors:stroke-[Canvas]`)
								}) : null] }, e.id);
							}),
							Q === null ? null : J.lines.map(({ line: e, points: t }) => {
								let n = t[Q];
								return n ? (0, N.jsx)(`circle`, {
									cx: n.x,
									cy: n.y,
									r: e.ghost ? 3 : 4.5,
									strokeWidth: `2`,
									className: o(e.ghost ? `fill-surface` : y[e.color], v[e.ghost ? `muted` : e.color], `stroke-surface forced-colors:fill-[Highlight] forced-colors:stroke-[Canvas]`)
								}, `active-${e.id}`) : null;
							})
						]
					})]
				}), Q === null ? null : (0, N.jsx)(ee, {
					"aria-hidden": !0,
					x: J.x(Q),
					y: J.top,
					boundary: V,
					title: d[Q],
					...Y.get(Q) ? { note: Y.get(Q)?.join(`, `) } : {},
					items: ve
				})]
			}),
			(0, N.jsx)(oe, { children: me.announcement }),
			(0, N.jsx)(re, {
				description: n,
				descriptionId: le,
				children: F ? (0, N.jsx)(se, {
					trigger: F.trigger,
					caption: e,
					columns: ye,
					rows: be,
					rowKey: xe
				}) : null
			})
		] })
	});
}
var Pe = { role: `img` };
function Fe({ values: e, label: t, color: n = 1, width: r, height: i = 32, area: a = !1, showLast: s = !0, min: c, max: l, className: u }) {
	let d = (0, h.useRef)(null), f = R(d, r ?? 120), p = r ?? f, m = (0, h.useMemo)(() => {
		let t = e.filter((e) => e !== null && Number.isFinite(e));
		if (t.length < 2) return null;
		let n = c ?? Math.min(...t), r = l ?? Math.max(...t), o = r - n || 1, s = Math.max(1, e.length - 1), u = e.map((e, t) => e === null || !Number.isFinite(e) ? null : {
			x: 3 + (p - 6) * t / s,
			y: 3 + (i - 6) * (1 - (Math.min(r, Math.max(n, e)) - n) / o)
		}), d = u.findLast((e) => e !== null) ?? null;
		return {
			line: q(u),
			fill: a ? pe(u, i) : ``,
			last: d
		};
	}, [
		a,
		p,
		i,
		l,
		c,
		e
	]), g = (0, h.useMemo)(() => r === void 0 ? void 0 : { width: r }, [r]);
	return (0, N.jsx)(`span`, {
		ref: d,
		style: g,
		className: o(`inline-block max-w-full align-middle`, r === void 0 && `w-full`, u),
		children: (0, N.jsx)(`svg`, {
			"data-sk-drawn": `chart`,
			...Pe,
			"aria-label": t,
			width: `100%`,
			height: i,
			viewBox: `0 0 ${p} ${i}`,
			preserveAspectRatio: `none`,
			className: `block overflow-visible`,
			children: m ? (0, N.jsxs)(N.Fragment, { children: [
				m.fill ? (0, N.jsx)(`path`, {
					d: m.fill,
					fillOpacity: .14,
					className: o(y[n], `stroke-none forced-colors:hidden`)
				}) : null,
				(0, N.jsx)(`path`, {
					d: m.line,
					fill: `none`,
					strokeWidth: `2`,
					strokeLinejoin: `round`,
					strokeLinecap: `round`,
					className: o(v[n], C)
				}),
				s && m.last ? (0, N.jsx)(`circle`, {
					cx: m.last.x,
					cy: m.last.y,
					r: `3`,
					className: o(y[n], `forced-colors:fill-[CanvasText]`)
				}) : null
			] }) : (0, N.jsx)(`line`, {
				x1: `2`,
				x2: p - 2,
				y1: i / 2,
				y2: i / 2,
				strokeWidth: `1.5`,
				strokeDasharray: `3 4`,
				className: `stroke-border-strong forced-colors:stroke-[GrayText]`
			})
		})
	});
}
function Ie({ label: e, value: t, delta: n, hint: r, sparkline: a, sparklineLabel: s, sparklineColor: c = 1, loading: l = !1, loadingLabel: u, error: d, as: f = `div`, className: p }) {
	let m = d != null && d !== !1;
	return (0, N.jsxs)(f, {
		...l ? { "aria-busy": !0 } : {},
		className: o(`@container flex min-w-0 flex-col gap-1 rounded-lg border border-border bg-surface p-3 text-fg shadow-sm @min-[14rem]:p-4`, p),
		children: [
			(0, N.jsx)(`span`, {
				className: `min-w-0 text-body text-muted [overflow-wrap:anywhere]`,
				children: e
			}),
			l ? (0, N.jsxs)(N.Fragment, { children: [(0, N.jsx)(`span`, {
				"aria-hidden": `true`,
				className: `my-1 block h-7 w-20 max-w-full rounded-md bg-hover motion-safe:animate-pulse forced-colors:border forced-colors:border-[GrayText]`
			}), u ? (0, N.jsx)(`output`, {
				className: `sr-only`,
				children: u
			}) : null] }) : m ? (0, N.jsxs)(`p`, {
				className: `m-0 flex items-start gap-1.5 text-body font-medium text-danger`,
				children: [(0, N.jsx)(i, {
					name: `status.error`,
					"aria-hidden": `true`,
					className: `mt-0.5 size-4 shrink-0`
				}), (0, N.jsx)(`span`, {
					className: `min-w-0 [overflow-wrap:anywhere]`,
					children: d
				})]
			}) : (0, N.jsxs)(N.Fragment, { children: [
				(0, N.jsx)(`span`, {
					className: `min-w-0 text-heading leading-tight font-semibold tracking-tight tabular-nums [overflow-wrap:anywhere] @min-[12rem]:text-display`,
					children: t
				}),
				n == null ? null : (0, N.jsx)(`span`, {
					className: `min-w-0`,
					children: n
				}),
				a && s ? (0, N.jsx)(Fe, {
					values: a,
					label: s,
					color: c,
					height: 28,
					className: `mt-1`
				}) : null
			] }),
			r == null ? null : (0, N.jsx)(`span`, {
				className: `min-w-0 text-caption text-muted [overflow-wrap:anywhere]`,
				children: r
			})
		]
	});
}
var Le = l(`status.ok`), Re = l(`status.warning`), ze = l(`status.danger`), Be = {
	sm: {
		box: 48,
		stroke: 5,
		text: `text-body`
	},
	md: {
		box: 80,
		stroke: 7,
		text: `text-heading`
	},
	lg: {
		box: 112,
		stroke: 9,
		text: `text-page`
	}
}, Ve = {
	accent: `stroke-accent`,
	ok: `stroke-ok`,
	warn: `stroke-warn`,
	danger: `stroke-danger`
}, He = {
	good: `text-ok`,
	fair: `text-warn`,
	poor: `text-danger`
}, Ue = {
	good: Le,
	fair: Re,
	poor: ze
}, We = {
	good: `ok`,
	fair: `warn`,
	poor: `danger`
}, Ge = {
	good: 90,
	fair: 60
};
function Ke({ value: e, minValue: t = 0, maxValue: n = 100, label: r, showLabel: i = !1, size: a = `md`, tone: s = `auto`, thresholds: l = Ge, ratingLabels: u, valueLabel: d, emptyLabel: f, className: p }) {
	let g = (0, h.useId)(), { box: _, stroke: v, text: y } = Be[a], b = (_ - v) / 2, x = 2 * Math.PI * b, S = e === null || !Number.isFinite(e), C = S ? t : Math.min(n, Math.max(t, e)), w = C >= l.good ? `good` : C >= l.fair ? `fair` : `poor`, T = s === `auto` ? We[w] : s, E = Ue[w], D = !S && u !== void 0, O = (e) => (0, N.jsxs)(`span`, {
		className: `relative inline-grid shrink-0 place-items-center`,
		children: [(0, N.jsxs)(`svg`, {
			"data-sk-drawn": `chart`,
			"aria-hidden": `true`,
			focusable: `false`,
			width: _,
			height: _,
			viewBox: `0 0 ${_} ${_}`,
			className: `block -rotate-90`,
			children: [(0, N.jsx)(`circle`, {
				cx: _ / 2,
				cy: _ / 2,
				r: b,
				fill: `none`,
				strokeWidth: v,
				className: `stroke-hover forced-colors:stroke-[GrayText]`
			}), !S && e > 0 ? (0, N.jsx)(`circle`, {
				cx: _ / 2,
				cy: _ / 2,
				r: b,
				fill: `none`,
				strokeWidth: v,
				strokeLinecap: `round`,
				strokeDasharray: `${e / 100 * x} ${x}`,
				className: o(Ve[T], `transition-[stroke-dasharray] duration-(--sk-duration-slow) ease-out forced-colors:stroke-[Highlight]`, M)
			}) : null]
		}), (0, N.jsx)(`span`, {
			"aria-hidden": `true`,
			className: o(`absolute inset-0 grid place-items-center font-bold text-fg tabular-nums`, y),
			children: S ? `—` : Math.round(C)
		})]
	}), k = (0, N.jsxs)(N.Fragment, { children: [
		i ? (0, N.jsx)(c, {
			className: `max-w-full text-center text-caption font-medium text-fg [overflow-wrap:anywhere]`,
			children: r
		}) : null,
		D ? (0, N.jsxs)(`span`, {
			id: g,
			className: o(`inline-flex items-center gap-1 text-caption font-semibold`, He[w]),
			children: [(0, N.jsx)(E, {
				"aria-hidden": `true`,
				focusable: `false`,
				className: `size-3.5 shrink-0`
			}), u[w]]
		}) : null,
		S && f ? (0, N.jsx)(`span`, {
			className: `max-w-full text-center text-caption text-muted [overflow-wrap:anywhere]`,
			children: f
		}) : null
	] });
	return (0, N.jsx)(m, {
		value: C,
		minValue: t,
		maxValue: n,
		...i ? {} : { "aria-label": r },
		...S ? { valueLabel: f ?? `—` } : d ? { valueLabel: d } : {},
		...D ? { "aria-describedby": g } : {},
		className: o(`inline-flex max-w-full flex-col items-center gap-1.5 text-fg`, p),
		children: ({ percentage: e }) => (0, N.jsxs)(N.Fragment, { children: [O(e), k] })
	});
}
function qe({ label: e, showLabel: t = !1, description: n, keyboardHint: i, isLoading: a, loadingLabel: o, error: s, emptyState: c, className: l, segments: d, rows: f, mode: p = `value`, formatValue: m, formatShare: g, showValues: v = !1, showTotal: y, legendLabel: b, table: x }) {
	let S = (0, h.useId)(), C = (0, h.useId)(), w = (0, h.useId)(), { locale: T } = u(), E = te(m), D = (0, h.useMemo)(() => {
		if (g) return g;
		let e = new Intl.NumberFormat(T, {
			style: `percent`,
			maximumFractionDigits: 1
		});
		return (t) => e.format(t);
	}, [g, T]), O = (0, h.useMemo)(() => d.map((e, t) => ({
		segment: e,
		color: e.color ?? _(t)
	})), [d]), k = (0, h.useMemo)(() => f.map((e) => {
		let t = O.map(({ segment: t, color: n }) => {
			let r = e.values[t.id];
			return {
				segment: t,
				color: n,
				value: r != null && Number.isFinite(r) ? Math.max(0, r) : 0
			};
		}), n = t.reduce((e, t) => e + t.value, 0);
		return {
			row: e,
			parts: t.map((e) => ({
				segment: e.segment,
				color: e.color,
				value: e.value,
				share: n > 0 ? e.value / n : 0
			})),
			total: n
		};
	}), [O, f]), A = Math.max(0, ...k.map((e) => e.total)), j = k.every((e) => e.total === 0), M = y ?? p === `value`, P = (0, h.useCallback)((e) => p === `share` ? `${D(e.share)} (${E.value(e.value)})` : E.value(e.value), [
		E,
		p,
		D
	]), F = (0, h.useCallback)((e) => {
		let t = k[e];
		if (!t) return ``;
		let n = t.parts.map((e) => `${e.segment.label} ${P(e)}`).join(`, `);
		return `${t.row.label}${M ? ` ${E.value(t.total)}` : ``}: ${n}`;
	}, [
		k,
		E,
		P,
		M
	]), I = ce({
		count: f.length,
		describe: F,
		start: `first`
	}), { setPointer: L } = I, R = I.active, le = (0, h.useRef)(null), [z, B] = (0, h.useState)(null);
	(0, h.useLayoutEffect)(() => {
		let e = le.current, t = R === null ? null : e?.querySelector(`[data-index="${R}"]`);
		B(!e || !t ? null : {
			x: e.clientWidth / 2,
			y: t.offsetTop,
			width: e.clientWidth
		});
	}, [R]);
	let V = (0, h.useCallback)((e) => {
		let t = e.target.closest(`[data-index]`);
		t && L(Number(t.dataset.index));
	}, [L]), H = (0, h.useCallback)(() => L(null), [L]), U = (0, h.useMemo)(() => O.map(({ segment: e, color: t }) => ({
		id: e.id,
		label: e.label,
		color: t,
		shape: `block`
	})), [O]), W = R === null ? void 0 : k[R], G = (0, h.useMemo)(() => W?.parts.map((e) => ({
		id: e.segment.id,
		label: e.segment.label,
		value: P(e),
		color: e.color,
		shape: `block`
	})) ?? [], [W, P]), K = (0, h.useMemo)(() => {
		if (!x) return [];
		let e = [{
			id: `category`,
			header: x.categoryHeader,
			isRowHeader: !0,
			cell: (e) => e.row.label
		}];
		return O.forEach(({ segment: t }, n) => e.push({
			id: `segment-${t.id}`,
			header: t.label,
			kind: `numeric`,
			cell: (e) => {
				let t = e.parts[n];
				return t ? P(t) : ``;
			}
		})), x.totalHeader && e.push({
			id: `total`,
			header: x.totalHeader,
			kind: `numeric`,
			cell: (e) => E.value(e.total)
		}), e;
	}, [
		O,
		E,
		P,
		x
	]), de = (0, h.useCallback)((e) => e.row.id, []), fe = ie({
		isLoading: a,
		error: s,
		emptyState: c,
		isEmpty: j
	}), q = [i ? w : null, n == null ? null : C].filter(Boolean).join(` `);
	return (0, N.jsx)(ne, {
		label: e,
		labelId: S,
		showLabel: t,
		busy: !!a,
		className: l,
		children: fe ? (0, N.jsx)(ae, {
			kind: fe,
			height: Math.max(96, f.length * 44),
			children: fe === `loading` ? o : fe === `error` ? s : c
		}) : (0, N.jsxs)(N.Fragment, { children: [
			(0, N.jsx)(ue, {
				items: U,
				...b ? { label: b } : {}
			}),
			(0, N.jsxs)(`div`, {
				className: `relative min-w-0`,
				children: [(0, N.jsxs)(r, {
					"aria-labelledby": S,
					...q ? { "aria-describedby": q } : {},
					...I.focusProps,
					className: `rounded-sm`,
					children: [i ? (0, N.jsx)(`span`, {
						id: w,
						className: `sr-only`,
						children: i
					}) : null, (0, N.jsx)(`ul`, {
						ref: le,
						onPointerOver: V,
						onPointerLeave: H,
						className: `relative m-0 flex min-w-0 list-none flex-col gap-1 p-0`,
						children: k.map((e, t) => (0, N.jsx)(Je, {
							index: t,
							label: e.row.label,
							total: M ? E.value(e.total) : void 0,
							parts: e.parts,
							width: p === `share` ? +(e.total > 0) : A > 0 ? e.total / A : 0,
							active: R === t,
							showValues: v,
							partText: P
						}, e.row.id))
					})]
				}), W && z ? (0, N.jsx)(ee, {
					"aria-hidden": !0,
					x: z.x,
					y: z.y,
					boundary: z.width,
					title: W.row.label,
					items: G
				}) : null]
			}),
			(0, N.jsx)(oe, { children: I.announcement }),
			(0, N.jsx)(re, {
				description: n,
				descriptionId: C,
				children: x ? (0, N.jsx)(se, {
					trigger: x.trigger,
					caption: e,
					columns: K,
					rows: k,
					rowKey: de
				}) : null
			})
		] })
	});
}
function Je({ index: e, label: t, total: n, parts: r, width: i, active: a, showValues: s, partText: c }) {
	let l = (0, h.useMemo)(() => ({ width: `${i * 100}%` }), [i]), u = r.filter((e) => e.value > 0);
	return (0, N.jsxs)(`li`, {
		"data-index": e,
		className: o(`flex min-w-0 flex-col gap-1.5 rounded-md px-2 py-1.5 transition-colors`, M, a && `bg-hover`),
		children: [
			(0, N.jsxs)(`span`, {
				className: `flex min-w-0 flex-wrap items-baseline justify-between gap-x-3 text-body`,
				children: [(0, N.jsx)(`span`, {
					className: `min-w-0 [overflow-wrap:anywhere]`,
					children: t
				}), n === void 0 ? null : (0, N.jsx)(`span`, {
					className: `font-semibold tabular-nums`,
					children: n
				})]
			}),
			(0, N.jsx)(`span`, {
				"aria-hidden": `true`,
				className: `block h-3 min-w-0 rounded-full bg-hover forced-colors:outline-1 forced-colors:outline-[CanvasText] forced-colors:outline-solid`,
				children: (0, N.jsx)(`span`, {
					style: l,
					className: `flex h-full min-w-0 overflow-hidden rounded-full`,
					children: u.map((e) => (0, N.jsx)(Ye, { part: e }, e.segment.id))
				})
			}),
			s ? (0, N.jsx)(`span`, {
				className: `flex min-w-0 flex-wrap gap-x-3 gap-y-0.5 text-caption text-muted`,
				children: r.map((e) => (0, N.jsxs)(`span`, {
					className: `inline-flex items-center gap-1`,
					children: [
						(0, N.jsx)(P, {
							color: e.color,
							shape: `block`
						}),
						(0, N.jsx)(`span`, { children: e.segment.label }),
						(0, N.jsx)(`span`, {
							className: `font-semibold text-fg tabular-nums`,
							children: c(e)
						})
					]
				}, e.segment.id))
			}) : (0, N.jsx)(`span`, {
				className: `sr-only`,
				children: r.map((e) => `${e.segment.label} ${c(e)}`).join(`, `)
			})
		]
	});
}
function Ye({ part: e }) {
	let t = (0, h.useMemo)(() => ({
		flexGrow: e.value,
		flexBasis: 0
	}), [e.value]);
	return (0, N.jsx)(`span`, {
		"data-color": e.color,
		style: t,
		className: o(`block h-full min-w-0.5 border-e-2 border-surface last:border-e-0 forced-colors:border-[Canvas]`, b[e.color], D[e.color], O)
	});
}
var Xe = e({ default: () => xt });
function Ze(e) {
	let t = e;
	return () => (t = (t * 1103515245 + 12345) % 2147483648, t / 2147483648);
}
var Qe = 864e5, $e = Date.UTC(2026, 9, 11), et = new Intl.DateTimeFormat(`en-GB`, {
	day: `numeric`,
	month: `long`,
	year: `numeric`,
	timeZone: `UTC`
}), tt = new Intl.DateTimeFormat(`en-GB`, {
	day: `numeric`,
	month: `short`,
	timeZone: `UTC`
}), nt = Array.from({ length: 28 }, (e, t) => new Date($e + t * Qe)), rt = nt.map((e) => et.format(e)), it = nt.map((e) => tt.format(e)), at = Ze(7), $ = nt.map((e, t) => {
	let n = [0, 6].includes(e.getUTCDay());
	return Math.round((n ? 820 : 1240) + t * 14 + at() * 260);
}), ot = $.map((e) => Math.round(e * (.035 + at() * .02))), st = $.map((e) => Math.round(e * (.82 + at() * .12))), ct = [{
	id: `visits`,
	label: `Visits`,
	values: $
}, {
	id: `previous`,
	label: `Previous 28 days`,
	values: st,
	ghost: !0
}], lt = [
	{
		id: `desktop`,
		label: `Desktop`,
		values: $.map((e) => Math.round(e * .62))
	},
	{
		id: `mobile`,
		label: `Mobile`,
		values: $.map((e, t) => t === 9 || t === 10 ? null : Math.round(e * .33))
	},
	{
		id: `tablet`,
		label: `Tablet`,
		values: $.map((e) => Math.round(e * .05))
	}
], ut = nt.slice(-14).map((e, t) => {
	let n = t === 6 ? 41 : t === 11 ? 33 : Math.round(3 + at() * 9);
	return {
		id: e.toISOString(),
		label: et.format(e),
		axisLabel: tt.format(e),
		value: n,
		highlight: n > 30,
		details: [{
			id: `server`,
			label: `Server errors`,
			value: String(Math.round(n * .7))
		}, {
			id: `client`,
			label: `Client errors`,
			value: String(n - Math.round(n * .7))
		}]
	};
}), dt = [
	{
		id: `home`,
		label: `Home`,
		value: 4210
	},
	{
		id: `changelog`,
		label: `Changelog`,
		value: 2380
	},
	{
		id: `docs-start`,
		label: `Docs: getting started with the command line tools on a new machine`,
		value: 1904
	},
	{
		id: `blog`,
		label: `Blog`,
		value: 1250
	},
	{
		id: `changelog`,
		label: `Changelog`,
		value: 610,
		highlight: !0
	},
	{
		id: `contact`,
		label: `Contact`,
		value: 188
	}
], ft = Ze(42), pt = Array.from({ length: 365 }, (e, t) => {
	let n = new Date(Date.UTC(2025, 10, 8) + t * Qe), r = [0, 6].includes(n.getUTCDay()), i = ft(), a = r ? i > .8 ? Math.round(i * 4) : 0 : i > .25 ? Math.round(i * 14) : 0, o = Math.round(a * .6);
	return {
		date: n.toISOString().slice(0, 10),
		value: a,
		...a > 0 ? { details: [{
			id: `local`,
			label: `This computer`,
			value: String(o),
			color: 1,
			shape: `dot`
		}, {
			id: `remote`,
			label: `Connected accounts`,
			value: String(a - o),
			color: 2,
			shape: `dot`
		}] } : {}
	};
}), mt = pt.reduce((e, t) => e + t.value, 0), ht = pt.reduce((e, t) => {
	let n = t.value > 0 ? e.run + 1 : 0;
	return {
		run: n,
		best: Math.max(e.best, n)
	};
}, {
	run: 0,
	best: 0
}).best, gt = `Visits, last 28 days: from ${$[0] ?? 0} to ${$.at(-1) ?? 0}`, _t = `Sign-ups, last 28 days: between ${Math.min(...ot)} and ${Math.max(...ot)} a day`, vt = (e) => `${e} ${e === 1 ? `commit` : `commits`}`, yt = new Intl.NumberFormat(`en-GB`), bt = {
	up: `Up`,
	down: `Down`,
	flat: `No change`
}, xt = {
	title: `Charts`,
	description: `Plain SVG charts and figures for reports and dashboards, built to WCAG 2.2 AA as a target. Each chart is a named figure with a written summary; the arrow keys step through the data points and read each one; every value is also in a table behind a disclosure. Series differ by colour and by line pattern, and marks switch to system colours in forced colours. Charts draw at the width of their box, so labels keep their size at any zoom and thin out on narrow screens.`,
	pl: {
		title: `Wykresy`,
		description: `Zwykłe wykresy SVG i liczby do raportów i pulpitów, budowane z celem WCAG 2.2 AA. Każdy wykres jest nazwaną figurą z napisanym podsumowaniem; klawisze strzałek przechodzą po punktach danych i odczytują każdy z nich; każda wartość jest też w tabeli za rozwijanym blokiem. Serie różnią się kolorem i wzorem linii, a znaczniki w trybie wymuszonych kolorów przełączają się na kolory systemowe. Wykresy rysują się w szerokości swojego pola, więc etykiety zachowują rozmiar przy każdym powiększeniu, a na wąskich ekranach jest ich mniej.`
	},
	demos: [
		{
			name: `LineChart`,
			components: [`LineChart`],
			description: `A trend over time for one or more measures on one axis. Pick it for daily or weekly series; add the previous period as a ghost line to compare, and annotations for releases or incidents.`,
			usage: `<LineChart
  label="Visits, last 28 days"
  description="1,602 visits yesterday, 22 % more than the period before."
  keyboardHint="Use the arrow keys to read each day."
  categories={days.map(longDate)}
  axisLabels={days.map(shortDate)}
  series={[
    { id: 'visits', label: 'Visits', values },
    { id: 'previous', label: 'Previous 28 days', values: before, ghost: true }
  ]}
  annotations={[{ index: 14, label: 'Version 2.4 released' }]}
  annotationsLabel="Releases"
  table={{ trigger: 'Show as table', categoryHeader: 'Date', annotationHeader: 'Note' }}
/>`,
			accessibility: `A figure named by label and described by the summary. The plot is one tab stop: Left and Right (or Up and Down) move between points, Home and End jump to the ends, and each move is read through a polite live region with the date, every series and any note. Escape hides the tooltip, which also opens on hover and stays while the pointer is over the chart. Series differ by line pattern as well as colour, and the legend names them. The table lists every value. Gridlines, lines and labels use system colours in forced colours. The SVG redraws at the width of its box, so it reflows at 320 px and 400 % zoom.`,
			pl: {
				description: `Trend w czasie dla jednej lub kilku miar na jednej osi. Wybierz go dla serii dziennych albo tygodniowych; dodaj poprzedni okres jako linię-cień do porównania oraz adnotacje dla wydań albo incydentów.`,
				accessibility: `Figura nazwana przez label i opisana podsumowaniem. Wykres jest jednym przystankiem w kolejności Tab: strzałka w lewo i w prawo (albo w górę i w dół) przechodzi między punktami, Home i End skaczą na końce, a każdy ruch jest odczytywany przez region na żywo typu polite z datą, każdą serią i ewentualną notatką. Escape ukrywa dymek, który otwiera się też po najechaniu i zostaje, gdy wskaźnik jest nad wykresem. Serie różnią się wzorem linii, a nie tylko kolorem, a legenda je nazywa. Tabela zawiera każdą wartość. Linie siatki, linie i etykiety używają kolorów systemowych w trybie wymuszonych kolorów. SVG rysuje się w szerokości swojego pola, więc układa się przy 320 px i powiększeniu 400%.`
			},
			render: () => (0, N.jsxs)(`div`, {
				className: `flex flex-col gap-8`,
				children: [
					(0, N.jsx)(Ne, {
						label: `Visits, last 28 days`,
						showLabel: !0,
						description: `${yt.format($.at(-1) ?? 0)} visits on the last day; lowest ${yt.format(Math.min(...$))}, highest ${yt.format(Math.max(...$))}.`,
						keyboardHint: `Use the arrow keys to read each day.`,
						categories: rt,
						axisLabels: it,
						series: ct,
						area: !0,
						annotations: [{
							index: 7,
							label: `Version 2.4 released`
						}, {
							index: 19,
							label: `Newsletter sent`
						}],
						annotationsLabel: `Events`,
						legendLabel: `Series`,
						table: {
							trigger: `Show as table`,
							categoryHeader: `Date`,
							annotationHeader: `Event`
						}
					}),
					(0, N.jsx)(Ne, {
						label: `Visits by device`,
						showLabel: !0,
						description: `Mobile has no data for two days while tracking was paused.`,
						keyboardHint: `Use the arrow keys to read each day.`,
						categories: rt,
						axisLabels: it,
						series: lt,
						height: 180,
						legendLabel: `Devices`,
						table: {
							trigger: `Show as table`,
							categoryHeader: `Date`
						}
					}),
					(0, N.jsx)(Ne, {
						label: `Sign-ups per day`,
						showLabel: !0,
						categories: rt,
						axisLabels: it,
						series: [{
							id: `signups`,
							label: `Sign-ups`,
							values: ot
						}],
						yMin: null,
						height: 140,
						keyboardHint: `Use the arrow keys to read each day.`
					})
				]
			})
		},
		{
			name: `Chart states`,
			components: [`LineChart`, `BarChart`],
			description: `What a chart shows before and instead of its data: loading, an error and nothing to draw. Each keeps the height of the chart, so the page does not jump when data arrives.`,
			usage: `<LineChart {...props} isLoading loadingLabel="Loading visits" />
<LineChart {...props} error="The report could not be loaded. Try again in a minute." />
<BarChart {...props} data={[]} emptyState="No errors in this period." />`,
			accessibility: `Loading is a status that is read politely and marks the figure busy. An error is an alert with an icon and words, read at once. The empty state is plain text with an icon. None of them relies on colour, and the spinner stops under reduced motion.`,
			pl: {
				description: `To, co wykres pokazuje przed danymi i zamiast nich: ładowanie, błąd i brak czego rysować. Każdy zachowuje wysokość wykresu, więc strona nie skacze, gdy dane przychodzą.`,
				accessibility: `Ładowanie jest statusem odczytywanym w trybie polite i oznacza figurę jako zajętą. Błąd jest komunikatem typu alert z ikoną i słowami, odczytywanym od razu. Pusty stan to zwykły tekst z ikoną. Żaden nie opiera się na kolorze, a wskaźnik ładowania zatrzymuje się przy ograniczonym ruchu.`
			},
			render: () => (0, N.jsxs)(`div`, {
				className: `flex flex-col gap-4`,
				children: [
					(0, N.jsx)(Ne, {
						label: `Visits`,
						categories: rt,
						series: ct,
						height: 120,
						isLoading: !0,
						loadingLabel: `Loading visits`
					}),
					(0, N.jsx)(Ne, {
						label: `Visits`,
						categories: rt,
						series: ct,
						height: 120,
						error: `The report could not be loaded. Try again in a minute.`
					}),
					(0, N.jsx)(Z, {
						label: `Errors per day`,
						valueLabel: `Errors`,
						data: [],
						height: 120,
						emptyState: `No errors in this period.`
					})
				]
			})
		},
		{
			name: `BarChart`,
			components: [`BarChart`],
			description: `Counts per day as columns, or a ranking as rows. Pick columns for a count over time and flag the days that need a look; pick rows for top lists, where names can be long and the screen narrow.`,
			usage: `<BarChart
  label="Errors per day"
  valueLabel="Errors"
  data={days.map((day) => ({ id: day.iso, label: day.long, axisLabel: day.short, value: day.errors, highlight: day.errors > 30 }))}
  highlightLabel="Spike"
  keyboardHint="Use the arrow keys to read each day."
  table={{ trigger: 'Show as table', categoryHeader: 'Date' }}
/>

<BarChart orientation="rows" ordered label="Top pages" valueLabel="Visits" data={pages} />`,
			accessibility: `Columns work like the line chart: one tab stop, arrow keys, Home and End, a polite live region, Escape to hide the tooltip, and a table of every value. A highlighted column has a marker above it and its meaning in the legend, the tooltip and what is read, so the flag does not rest on the colour. Rows are a plain list with every name and value in text; the bars are hidden from screen readers. Rows wrap their names and put the bar on its own line in a narrow box.`,
			pl: {
				description: `Liczby na dzień jako kolumny albo ranking jako wiersze. Wybierz kolumny dla liczby w czasie i oznacz dni, które wymagają spojrzenia; wybierz wiersze dla list najlepszych, gdzie nazwy mogą być długie, a ekran wąski.`,
				accessibility: `Kolumny działają jak wykres liniowy: jeden przystanek w kolejności Tab, klawisze strzałek, Home i End, region na żywo typu polite, Escape ukrywa dymek i tabela każdej wartości. Wyróżniona kolumna ma znacznik nad sobą, a jej znaczenie jest w legendzie, dymku i tym, co jest odczytywane, więc oznaczenie nie opiera się na kolorze. Wiersze to zwykła lista z każdą nazwą i wartością w tekście; słupki są ukryte przed czytnikami ekranu. Wiersze zawijają nazwy i w wąskim polu umieszczają słupek w osobnej linii.`
			},
			render: () => (0, N.jsxs)(`div`, {
				className: `flex flex-col gap-8`,
				children: [(0, N.jsx)(Z, {
					label: `Errors per day, last 14 days`,
					showLabel: !0,
					description: `Two spikes: 41 errors and 33 errors.`,
					valueLabel: `Errors`,
					data: ut,
					highlightLabel: `Spike`,
					keyboardHint: `Use the arrow keys to read each day.`,
					table: {
						trigger: `Show as table`,
						categoryHeader: `Date`
					}
				}), (0, N.jsx)(Z, {
					orientation: `rows`,
					ordered: !0,
					label: `Top pages this month`,
					showLabel: !0,
					valueLabel: `Visits`,
					data: dt,
					highlightLabel: `New`,
					highlightColor: `ok`,
					color: 2
				})]
			})
		},
		{
			name: `StackedBars`,
			components: [`StackedBars`],
			description: `The parts of a whole for each row, such as page loads rated good, needs work and poor. Pick share to compare the mix between rows, and value to compare the totals as well.`,
			usage: `<StackedBars
  label="Page load ratings"
  mode="share"
  segments={[
    { id: 'good', label: 'Good', color: 'ok' },
    { id: 'fair', label: 'Needs work', color: 'warn' },
    { id: 'poor', label: 'Poor', color: 'danger' }
  ]}
  rows={pages.map((page) => ({ id: page.id, label: page.title, values: page.ratings }))}
  keyboardHint="Use the up and down arrow keys to read each page."
  table={{ trigger: 'Show as table', categoryHeader: 'Page' }}
/>`,
			accessibility: `Every row name and total is text. The parts are written after each bar, on screen with showValues and for screen readers otherwise. The list is one tab stop: the arrow keys move between rows, show a tooltip with every part and read it politely. Parts are split by a gap that stays in forced colours, and the legend names every colour.`,
			pl: {
				description: `Części całości dla każdego wiersza, na przykład ładowania stron ocenione jako dobre, wymagające poprawy i słabe. Wybierz share, aby porównać proporcje między wierszami, a value, aby porównać także sumy.`,
				accessibility: `Każda nazwa wiersza i suma jest tekstem. Części są zapisane po każdym słupku, na ekranie przy showValues, a w przeciwnym razie dla czytników ekranu. Lista jest jednym przystankiem w kolejności Tab: klawisze strzałek przechodzą między wierszami, pokazują dymek z każdą częścią i odczytują go w trybie polite. Części są rozdzielone przerwą, która zostaje w trybie wymuszonych kolorów, a legenda nazywa każdy kolor.`
			},
			render: () => (0, N.jsxs)(`div`, {
				className: `flex flex-col gap-8`,
				children: [(0, N.jsx)(qe, {
					label: `Page load ratings`,
					showLabel: !0,
					mode: `share`,
					showValues: !0,
					segments: [
						{
							id: `good`,
							label: `Good`,
							color: `ok`
						},
						{
							id: `fair`,
							label: `Needs work`,
							color: `warn`
						},
						{
							id: `poor`,
							label: `Poor`,
							color: `danger`
						}
					],
					rows: [
						{
							id: `home`,
							label: `Home`,
							values: {
								good: 812,
								fair: 96,
								poor: 22
							}
						},
						{
							id: `changelog`,
							label: `Changelog`,
							values: {
								good: 402,
								fair: 140,
								poor: 61
							}
						},
						{
							id: `docs`,
							label: `Documentation for the command line tools`,
							values: {
								good: 233,
								fair: 41,
								poor: null
							}
						}
					],
					keyboardHint: `Use the up and down arrow keys to read each page.`,
					legendLabel: `Ratings`,
					table: {
						trigger: `Show as table`,
						categoryHeader: `Page`
					}
				}), (0, N.jsx)(qe, {
					label: `Contributions by source`,
					showLabel: !0,
					segments: [
						{
							id: `local`,
							label: `This computer`
						},
						{
							id: `github`,
							label: `GitHub`
						},
						{
							id: `gitlab`,
							label: `GitLab`
						}
					],
					rows: [
						{
							id: `w1`,
							label: `Week 43`,
							values: {
								local: 31,
								github: 12,
								gitlab: 4
							}
						},
						{
							id: `w2`,
							label: `Week 44`,
							values: {
								local: 18,
								github: 20,
								gitlab: 0
							}
						},
						{
							id: `w3`,
							label: `Week 45`,
							values: {
								local: 42,
								github: 9,
								gitlab: 11
							}
						}
					],
					keyboardHint: `Use the up and down arrow keys to read each week.`,
					legendLabel: `Sources`,
					table: {
						trigger: `Show as table`,
						categoryHeader: `Week`,
						totalHeader: `Total`
					}
				})]
			})
		},
		{
			name: `DonutChart`,
			components: [`DonutChart`],
			description: `The share of a whole across a few parts, such as visits by device. Pick it for up to five parts; past that, the smallest fold into one "other" slice, and a bar chart may read better.`,
			usage: `<DonutChart
  label="Visits by device"
  slices={[
    { id: 'desktop', label: 'Desktop', value: 18_204 },
    { id: 'mobile', label: 'Mobile', value: 9_871 },
    { id: 'tablet', label: 'Tablet', value: 1_204 }
  ]}
  centerLabel="visits"
  otherLabel="Other"
/>`,
			accessibility: `The ring is decoration. The legend beside it is a list with every share, name and value in text, and the total sits in the hole as text. Pointing at a slice or an entry lights up both, as an extra; nothing is only on hover. Slices are split by a gap that stays in forced colours. In a narrow box the legend wraps under the ring.`,
			pl: {
				description: `Udział w całości dla kilku części, na przykład wizyty według urządzenia. Wybierz go dla co najwyżej pięciu części; powyżej tego najmniejsze łączą się w jeden wycinek „inne”, a wykres słupkowy może być czytelniejszy.`,
				accessibility: `Pierścień jest dekoracją. Legenda obok to lista z każdym udziałem, nazwą i wartością w tekście, a suma jest w otworze jako tekst. Wskazanie wycinka albo pozycji podświetla oba jako dodatek; nic nie jest tylko po najechaniu. Wycinki są rozdzielone przerwą, która zostaje w trybie wymuszonych kolorów. W wąskim polu legenda zawija się pod pierścień.`
			},
			render: () => (0, N.jsxs)(`div`, {
				className: `flex flex-col gap-8`,
				children: [
					(0, N.jsx)(ke, {
						label: `Visits by device`,
						showLabel: !0,
						slices: [
							{
								id: `desktop`,
								label: `Desktop`,
								value: 18204
							},
							{
								id: `mobile`,
								label: `Mobile`,
								value: 9871
							},
							{
								id: `tablet`,
								label: `Tablet`,
								value: 1204
							},
							{
								id: `tv`,
								label: `TV`,
								value: 140
							},
							{
								id: `console`,
								label: `Game console`,
								value: 61
							},
							{
								id: `watch`,
								label: `Watch`,
								value: 12
							}
						],
						centerLabel: `visits`,
						otherLabel: `Other`,
						legendLabel: `Devices`
					}),
					(0, N.jsx)(ke, {
						label: `Storage by type`,
						showLabel: !0,
						size: `sm`,
						slices: [
							{
								id: `images`,
								label: `Images`,
								value: 6.2
							},
							{
								id: `video`,
								label: `Video`,
								value: 3.1
							},
							{
								id: `docs`,
								label: `Documents`,
								value: .8
							}
						],
						formatValue: (e) => `${e.toFixed(1)} GB`
					}),
					(0, N.jsx)(ke, {
						label: `Visits by country`,
						showLabel: !0,
						slices: [],
						emptyState: `No visits yet.`
					})
				]
			})
		},
		{
			name: `Sparkline`,
			components: [`Sparkline`],
			description: `A tiny trend with no axes, for a tile, a table cell or a line of text. Pick it when the shape matters more than the numbers.`,
			usage: `<Sparkline values={last28} label="Visits, last 28 days: rising from 1,204 to 1,530" />`,
			accessibility: `One image with one name: the label has to say what the shape shows, in words. With fewer than two values it draws a dashed rule, and the label should say there is no trend yet. The line uses a system colour in forced colours.`,
			pl: {
				description: `Maleńki trend bez osi, do kafelka, komórki tabeli albo linii tekstu. Wybierz go, gdy kształt ma większe znaczenie niż liczby.`,
				accessibility: `Jeden obraz z jedną nazwą: label musi słowami powiedzieć, co pokazuje kształt. Przy mniej niż dwóch wartościach rysuje przerywaną linię, a label powinien powiedzieć, że trendu jeszcze nie ma. Linia używa koloru systemowego w trybie wymuszonych kolorów.`
			},
			render: () => (0, N.jsxs)(`div`, {
				className: `flex flex-col gap-4`,
				children: [(0, N.jsxs)(`div`, {
					className: `grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-3 text-body`,
					children: [
						(0, N.jsx)(`span`, { children: `Visits` }),
						(0, N.jsx)(Fe, {
							values: $,
							label: gt,
							width: 120
						}),
						(0, N.jsx)(`span`, { children: `Sign-ups` }),
						(0, N.jsx)(Fe, {
							values: ot,
							label: _t,
							width: 120,
							color: 2,
							area: !0
						}),
						(0, N.jsx)(`span`, { children: `Load time` }),
						(0, N.jsx)(Fe, {
							values: [
								2.1,
								2,
								2.3,
								1.8,
								1.6,
								null,
								1.5,
								1.4
							],
							label: `Load time, last 8 builds: falling from 2.1 to 1.4 seconds`,
							width: 120,
							color: `ok`
						}),
						(0, N.jsx)(`span`, { children: `Retries` }),
						(0, N.jsx)(Fe, {
							values: [4],
							label: `Retries: not enough data for a trend`,
							width: 120
						})
					]
				}), (0, N.jsx)(Fe, {
					values: $,
					label: gt,
					height: 40,
					area: !0
				})]
			})
		},
		{
			name: `ActivityHeatmap`,
			components: [`ActivityHeatmap`],
			description: `Daily activity over months as a calendar, one column per week, such as commits over a year. Pick it to show rhythm and streaks; pick a bar chart for exact daily counts over a few weeks.`,
			usage: `<ActivityHeatmap
  label="Contributions, last 12 months"
  days={days}
  formatValue={(count) => t('commits', { count })}
  keyboardHint="Arrow keys move by day and by week."
  lessLabel="Less"
  moreLabel="More"
  table={{ trigger: 'Show days with activity', dateHeader: 'Date', valueHeader: 'Commits' }}
/>`,
			accessibility: `One tab stop over the whole calendar. Up and Down move a day, Left and Right a week, Home and End to the ends; each day is read with its full date, its count and its sources through a polite live region, and Escape hides the tooltip. The box scrolls on its own on a narrow screen, opens at the latest week and follows the focus. Shades are steps of one colour, and the count is always in words in the tooltip, the reading and the table. Cells keep an outline and use system colours in forced colours.`,
			pl: {
				description: `Dzienna aktywność przez miesiące jako kalendarz, jedna kolumna na tydzień, na przykład commity w ciągu roku. Wybierz go, aby pokazać rytm i serie; do dokładnych liczb dziennych z kilku tygodni wybierz wykres słupkowy.`,
				accessibility: `Jeden przystanek w kolejności Tab na cały kalendarz. Strzałka w górę i w dół przesuwa o dzień, w lewo i w prawo o tydzień, Home i End na końce; każdy dzień jest odczytywany z pełną datą, liczbą i źródłami przez region na żywo typu polite, a Escape ukrywa dymek. Na wąskim ekranie pole przewija się samo, otwiera się na ostatnim tygodniu i podąża za fokusem. Odcienie są stopniami jednego koloru, a liczba jest zawsze słowami w dymku, w odczycie i w tabeli. Komórki zachowują obrys i używają kolorów systemowych w trybie wymuszonych kolorów.`
			},
			render: () => (0, N.jsx)(K, {
				label: `Contributions, last 12 months`,
				showLabel: !0,
				description: `${mt} commits; the longest streak was ${ht} days.`,
				days: pt,
				formatValue: vt,
				keyboardHint: `Arrow keys move by day and by week. Home and End go to the first and last day.`,
				lessLabel: `Less`,
				moreLabel: `More`,
				table: {
					trigger: `Show days with activity`,
					dateHeader: `Date`,
					valueHeader: `Commits`
				}
			})
		},
		{
			name: `ScoreRing`,
			components: [`ScoreRing`],
			description: `A score out of a known maximum, such as an audit result out of 100. Pick it for one to four headline scores; use Meter of the feedback group for levels in a list.`,
			usage: `<ScoreRing value={92} label="Accessibility" showLabel ratingLabels={{ good: 'Good', fair: 'Needs work', poor: 'Poor' }} />`,
			accessibility: `A meter named by label, with its value and range. The rating is a word with its own icon shape, linked as the description, so the colour is never the only sign. Without a score the ring is empty, shows a dash and reads emptyLabel. The ring animates only without reduced motion, and uses Highlight in forced colours.`,
			pl: {
				description: `Wynik względem znanego maksimum, na przykład wynik audytu na 100 punktów. Wybierz go dla od jednego do czterech głównych wyników; dla poziomów na liście użyj Meter z grupy feedback.`,
				accessibility: `Miernik nazwany przez label, z wartością i zakresem. Ocena jest słowem z własnym kształtem ikony, powiązanym jako opis, więc kolor nigdy nie jest jedynym sygnałem. Bez wyniku pierścień jest pusty, pokazuje kreskę i odczytuje emptyLabel. Pierścień animuje się tylko wtedy, gdy ruch nie jest ograniczony, a w trybie wymuszonych kolorów używa Highlight.`
			},
			render: () => (0, N.jsxs)(`div`, {
				className: `flex flex-wrap items-start gap-6`,
				children: [
					(0, N.jsx)(Ke, {
						value: 96,
						label: `Performance`,
						showLabel: !0,
						size: `lg`,
						ratingLabels: {
							good: `Good`,
							fair: `Needs work`,
							poor: `Poor`
						}
					}),
					(0, N.jsx)(Ke, {
						value: 72,
						label: `Accessibility`,
						showLabel: !0,
						ratingLabels: {
							good: `Good`,
							fair: `Needs work`,
							poor: `Poor`
						}
					}),
					(0, N.jsx)(Ke, {
						value: 38,
						label: `Best practices`,
						showLabel: !0,
						ratingLabels: {
							good: `Good`,
							fair: `Needs work`,
							poor: `Poor`
						}
					}),
					(0, N.jsx)(Ke, {
						value: null,
						label: `Search`,
						showLabel: !0,
						emptyLabel: `Not measured yet`
					}),
					(0, N.jsx)(Ke, {
						value: 14,
						maxValue: 20,
						label: `Checklist`,
						showLabel: !0,
						size: `sm`,
						tone: `accent`,
						valueLabel: `14 of 20`
					})
				]
			})
		},
		{
			name: `Delta`,
			components: [`Delta`],
			description: `The change of a figure against an earlier period, with its direction and whether that is good news. Pick it beside a headline number, in a tile or a table.`,
			usage: `<Delta
  value={0.224}
  directionLabels={{ up: 'Up', down: 'Down', flat: 'No change' }}
  assessmentLabels={{ good: 'better', bad: 'worse' }}
  comparison="vs previous 28 days"
/>`,
			accessibility: `The arrow is hidden and the direction is read as a word before the number. Good and bad are a colour and, with assessmentLabels, a word for screen readers, so nothing rests on colour alone; the text colours meet 4.5:1 in every theme. The comparison wraps under the number in a narrow box.`,
			pl: {
				description: `Zmiana liczby względem wcześniejszego okresu, z kierunkiem i informacją, czy to dobra wiadomość. Wybierz ją obok głównej liczby, w kafelku albo w tabeli.`,
				accessibility: `Strzałka jest ukryta, a kierunek jest odczytywany jako słowo przed liczbą. Dobre i złe to kolor, a z assessmentLabels także słowo dla czytników ekranu, więc nic nie opiera się na samym kolorze; kolory tekstu spełniają 4,5:1 w każdym motywie. Porównanie zawija się pod liczbę w wąskim polu.`
			},
			render: () => (0, N.jsxs)(`div`, {
				className: `flex flex-col gap-3`,
				children: [
					(0, N.jsx)(Te, {
						value: .224,
						directionLabels: bt,
						assessmentLabels: {
							good: `better`,
							bad: `worse`
						},
						comparison: `vs previous 28 days`
					}),
					(0, N.jsx)(Te, {
						value: .081,
						goodWhen: `down`,
						directionLabels: bt,
						assessmentLabels: {
							good: `better`,
							bad: `worse`
						},
						comparison: `load time vs last week`
					}),
					(0, N.jsx)(Te, {
						value: -.034,
						directionLabels: bt,
						assessmentLabels: {
							good: `better`,
							bad: `worse`
						},
						variant: `pill`
					}),
					(0, N.jsx)(Te, {
						value: 0,
						directionLabels: bt,
						comparison: `vs yesterday`
					}),
					(0, N.jsx)(Te, {
						value: -.42,
						goodWhen: `neither`,
						directionLabels: bt,
						variant: `pill`,
						comparison: `share of mobile visits`
					}),
					(0, N.jsx)(Te, {
						value: null,
						directionLabels: bt,
						emptyLabel: `No earlier data to compare`
					})
				]
			})
		},
		{
			name: `MetricTile`,
			components: [`MetricTile`],
			description: `One key figure with its change and recent trend, for a row of tiles at the top of a report. Pick StatCard of the surfaces group when the tile links to a full view.`,
			usage: `<MetricTile
  label="Visits"
  value="38,412"
  delta={<Delta value={0.22} directionLabels={directions} comparison="vs previous 28 days" />}
  sparkline={last28}
  sparklineLabel="Visits, last 28 days: rising"
  hint="Last 28 days"
/>`,
			accessibility: `Plain text in reading order: label, value, change, trend, hint. The sparkline is one image named by sparklineLabel. Loading marks the tile busy and reads loadingLabel; an error shows an icon and words. The value shrinks in a narrow tile and long text wraps, so four tiles fit two by two on a phone.`,
			pl: {
				description: `Jedna kluczowa liczba ze zmianą i niedawnym trendem, do rzędu kafelków na górze raportu. Wybierz StatCard z grupy surfaces, gdy kafelek prowadzi do pełnego widoku.`,
				accessibility: `Zwykły tekst w kolejności czytania: etykieta, wartość, zmiana, trend, podpowiedź. Sparkline jest jednym obrazem nazwanym przez sparklineLabel. Ładowanie oznacza kafelek jako zajęty i odczytuje loadingLabel; błąd pokazuje ikonę i słowa. Wartość zmniejsza się w wąskim kafelku, a długi tekst się zawija, więc cztery kafelki mieszczą się po dwa w rzędzie na telefonie.`
			},
			render: () => (0, N.jsxs)(`ul`, {
				className: `m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,10rem),1fr))] gap-3 p-0`,
				children: [
					(0, N.jsx)(Ie, {
						as: `li`,
						label: `Visits`,
						value: `38,412`,
						delta: (0, N.jsx)(Te, {
							value: .224,
							directionLabels: bt,
							assessmentLabels: {
								good: `better`,
								bad: `worse`
							},
							comparison: `vs previous 28 days`
						}),
						sparkline: $,
						sparklineLabel: gt,
						hint: `Last 28 days`
					}),
					(0, N.jsx)(Ie, {
						as: `li`,
						label: `Median load time`,
						value: `1.4 s`,
						delta: (0, N.jsx)(Te, {
							value: -.12,
							goodWhen: `down`,
							directionLabels: bt,
							assessmentLabels: {
								good: `better`,
								bad: `worse`
							}
						}),
						sparkline: [
							2.1,
							2,
							2.3,
							1.8,
							1.6,
							1.5,
							1.4
						],
						sparklineLabel: `Load time, last 7 builds: falling from 2.1 to 1.4 seconds`,
						sparklineColor: `ok`
					}),
					(0, N.jsx)(Ie, {
						as: `li`,
						label: `Sign-ups`,
						value: ``,
						loading: !0,
						loadingLabel: `Loading sign-ups`
					}),
					(0, N.jsx)(Ie, {
						as: `li`,
						label: `Build minutes`,
						value: ``,
						error: `Could not load build minutes.`,
						hint: `Check the build connection`
					})
				]
			})
		},
		{
			name: `ChartLegend and ChartTooltip`,
			components: [`ChartLegend`, `ChartTooltip`],
			description: `The key and the point readout every chart here uses, for a custom chart that should look the same. Pick ChartLegend whenever colour stands for more than one thing.`,
			usage: `<ChartLegend
  label="Series"
  items={[
    { id: 'visits', label: 'Visits', color: 1, shape: 'line' },
    { id: 'previous', label: 'Previous period', color: 'muted', shape: 'line', pattern: 'short' }
  ]}
/>
<ChartTooltip title="14 March 2026" items={[{ id: 'visits', label: 'Visits', value: '1,602', color: 1, shape: 'line' }]} />`,
			accessibility: `The legend is a list named by label; each swatch is hidden and the name is text. Line swatches carry the same dash pattern as their line, so they match without colour. The tooltip never takes the pointer, keeps to the box near its edges and wraps long text. Inside a chart it is hidden from screen readers, because the same words are read through the live region; on its own it is plain text.`,
			pl: {
				description: `Legenda i odczyt punktu, których używa każdy wykres tutaj, dla własnego wykresu, który ma wyglądać tak samo. Wybierz ChartLegend zawsze, gdy kolor oznacza więcej niż jedną rzecz.`,
				accessibility: `Legenda jest listą nazwaną przez label; każda próbka koloru jest ukryta, a nazwa jest tekstem. Próbki linii mają ten sam wzór kreski co ich linia, więc pasują bez koloru. Dymek nigdy nie przejmuje wskaźnika, zostaje w polu przy jego krawędziach i zawija długi tekst. Wewnątrz wykresu jest ukryty przed czytnikami ekranu, bo te same słowa są odczytywane przez region na żywo; samodzielnie jest zwykłym tekstem.`
			},
			render: () => (0, N.jsxs)(`div`, {
				className: `flex flex-col gap-4`,
				children: [
					(0, N.jsx)(ue, {
						label: `Series`,
						items: [
							{
								id: `one`,
								label: `Visits`,
								color: 1,
								shape: `line`
							},
							{
								id: `two`,
								label: `Sign-ups`,
								color: 2,
								shape: `line`
							},
							{
								id: `three`,
								label: `Returns`,
								color: 3,
								shape: `line`
							},
							{
								id: `four`,
								label: `Referrals`,
								color: 4,
								shape: `line`
							},
							{
								id: `ghost`,
								label: `Previous period`,
								color: `muted`,
								shape: `line`,
								pattern: `short`
							},
							{
								id: `flag`,
								label: `Spike`,
								color: `danger`,
								shape: `marker`
							}
						]
					}),
					(0, N.jsx)(ue, {
						orientation: `vertical`,
						label: `Devices`,
						items: [
							{
								id: `desktop`,
								label: `Desktop`,
								color: 1,
								value: `62%`,
								detail: `(18,204)`
							},
							{
								id: `mobile`,
								label: `Mobile`,
								color: 2,
								value: `33%`,
								detail: `(9,871)`
							},
							{
								id: `other`,
								label: `Other`,
								color: `muted`,
								value: `5%`,
								detail: `(1,417)`
							}
						]
					}),
					(0, N.jsx)(ee, {
						title: `14 March 2026`,
						note: `Version 2.4 released`,
						items: [{
							id: `visits`,
							label: `Visits`,
							value: `1,602`,
							color: 1,
							shape: `line`
						}, {
							id: `previous`,
							label: `Previous 28 days`,
							value: `1,311`,
							color: `muted`,
							shape: `line`,
							pattern: `short`
						}]
					})
				]
			})
		}
	]
};
export { Xe as t };
