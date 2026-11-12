import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { n } from "./react-dom.B9zIfLd2.js";
import { t as r } from "./Group.CbcnDyoG.js";
import { L as i, g as a, r as o, t as s } from "./createLucideIcon.npgQlVHx.js";
import { n as c, t as l } from "./jsx-runtime.yrTYNGQT.js";
import { t as u } from "./chevron-right.CXba3y89.js";
import { t as d } from "./loader-circle.ja8phR5Y.js";
import { t as f } from "./octagon-exclamation-point.B9Zlzk60.js";
import { n as p, t as m } from "./Disclosure.CRRgwvmC.js";
import { t as h } from "./Table.De6dgZQE.js";
import { O as g } from "./doc.D2PtmWN6.js";
import { t as _ } from "./circle-exclamation-point.DRCkYbzg.js";
import { t as v } from "./circle-check.CWwdJPsz.js";
import { t as y } from "./triangle-exclamation-point.BJJ-nXau.js";
import { t as b } from "./Meter.CLIsaQgQ.js";
var x = {
	name: `arrow-down-right`,
	size: 24,
	node: [[`path`, {
		d: `m7 7 10 10`,
		key: `1fmybs`
	}], [`path`, {
		d: `M17 7v10H7`,
		key: `6fjiku`
	}]]
};
x.node;
var S = s(x), C = {
	name: `arrow-up-right`,
	size: 24,
	node: [[`path`, {
		d: `M7 7h10v10`,
		key: `1tivn9`
	}], [`path`, {
		d: `M7 17 17 7`,
		key: `1vkiza`
	}]]
};
C.node;
var w = s(C), T = {
	name: `chart-no-axes-column`,
	size: 24,
	node: [
		[`path`, {
			d: `M5 21v-6`,
			key: `1hz6c0`
		}],
		[`path`, {
			d: `M12 21V3`,
			key: `1lcnhd`
		}],
		[`path`, {
			d: `M19 21V9`,
			key: `unv183`
		}]
	],
	aliases: [`bar-chart-2`]
};
T.node;
var E = s(T), D = t(n(), 1), O = [
	1,
	2,
	3,
	4
];
function ee(e) {
	return O[e % O.length] ?? 1;
}
var k = {
	1: `stroke-accent`,
	2: `stroke-info`,
	3: `stroke-tool-skills`,
	4: `stroke-tool-tracker`,
	muted: `stroke-muted`,
	ok: `stroke-ok`,
	warn: `stroke-warn`,
	danger: `stroke-danger`
}, A = {
	1: `fill-accent`,
	2: `fill-info`,
	3: `fill-tool-skills`,
	4: `fill-tool-tracker`,
	muted: `fill-muted`,
	ok: `fill-ok`,
	warn: `fill-warn`,
	danger: `fill-danger`
}, j = {
	1: `bg-accent`,
	2: `bg-info`,
	3: `bg-tool-skills`,
	4: `bg-tool-tracker`,
	muted: `bg-muted`,
	ok: `bg-ok`,
	warn: `bg-warn`,
	danger: `bg-danger`
}, M = {
	solid: void 0,
	dashed: `6 4`,
	dotted: `1.5 3.5`,
	dashdot: `8 3 2 3`,
	short: `3 3`
}, N = {
	1: `solid`,
	2: `dashed`,
	3: `dotted`,
	4: `dashdot`,
	muted: `short`,
	ok: `solid`,
	warn: `solid`,
	danger: `solid`
}, P = `forced-colors:stroke-[CanvasText]`, F = `forced-colors:fill-[CanvasText]`, I = `forced-colors:fill-[Highlight]`, L = `forced-colors:bg-[Highlight] forced-colors:forced-color-adjust-none`, R = {
	1: `forced-colors:bg-[CanvasText]`,
	2: `forced-colors:bg-[repeating-linear-gradient(45deg,CanvasText_0_2px,Canvas_2px_5px)]`,
	3: `forced-colors:bg-[radial-gradient(circle,CanvasText_1.2px,Canvas_1.6px)] forced-colors:bg-size-[4px_4px]`,
	4: `forced-colors:bg-[repeating-linear-gradient(90deg,CanvasText_0_2px,Canvas_2px_5px)]`,
	muted: `forced-colors:bg-[repeating-linear-gradient(0deg,CanvasText_0_1px,Canvas_1px_4px)]`,
	ok: `forced-colors:bg-[repeating-linear-gradient(-45deg,CanvasText_0_2px,Canvas_2px_5px)]`,
	warn: `forced-colors:bg-[repeating-conic-gradient(CanvasText_0_25%,Canvas_0_50%)] forced-colors:bg-size-[6px_6px]`,
	danger: `forced-colors:bg-[linear-gradient(CanvasText_1px,transparent_1px),linear-gradient(90deg,CanvasText_1px,Canvas_1px)] forced-colors:bg-size-[5px_5px]`
}, z = `forced-colors:forced-color-adjust-none`;
function B(e, t) {
	return `${e}-pattern-${t}`;
}
var te = `forced-colors:stroke-[GrayText]`, V = `forced-colors:fill-[CanvasText]`, H = `motion-reduce:transition-none in-[.a11y-reduce-motion]:transition-none`, U = l();
function W({ color: e = 1, shape: t = `line`, pattern: n, className: r }) {
	if (t === `line`) {
		let t = M[n ?? N[e]];
		return (0, U.jsx)(`svg`, {
			"aria-hidden": `true`,
			focusable: `false`,
			width: `18`,
			height: `8`,
			viewBox: `0 0 18 8`,
			className: c(`shrink-0 overflow-visible`, r),
			children: (0, U.jsx)(`line`, {
				x1: `1`,
				x2: `17`,
				y1: `4`,
				y2: `4`,
				strokeWidth: `2.5`,
				strokeLinecap: `round`,
				...t ? { strokeDasharray: t } : {},
				className: c(k[e], P)
			})
		});
	}
	return t === `marker` ? (0, U.jsx)(`svg`, {
		"aria-hidden": `true`,
		focusable: `false`,
		width: `10`,
		height: `9`,
		viewBox: `0 0 10 9`,
		className: c(`shrink-0`, r),
		children: (0, U.jsx)(`path`, {
			d: `M5 9 0 0h10z`,
			className: c(`stroke-none`, A[e], F)
		})
	}) : (0, U.jsx)(`span`, {
		"aria-hidden": `true`,
		className: c(`inline-block shrink-0 border border-transparent forced-colors:size-3.5 forced-colors:border-[CanvasText]`, t === `dot` ? `size-2.5 rounded-full` : `size-2.5 rounded-xs`, j[e], R[e], z, r)
	});
}
var G = 96, K = [];
function ne({ title: e, items: t = K, note: n, x: r, y: i = 0, boundary: a, placement: o = `top`, id: s, className: l, ...u }) {
	let d = r !== void 0, f = {
		start: `-12px`,
		center: `-50%`,
		end: `calc(-100% + 12px)`
	}[!d || a === void 0 ? `center` : r < G ? `start` : r > a - G ? `end` : `center`], p = o === `top` ? `calc(-100% - 10px)` : `10px`, m = (0, D.useMemo)(() => d ? {
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
	return (0, U.jsxs)(`div`, {
		...s ? { id: s } : {},
		...u[`aria-hidden`] ? { "aria-hidden": !0 } : {},
		style: m,
		className: c(`pointer-events-none z-(--sk-z-sticky) w-max max-w-[min(18rem,calc(100vw-2rem))] rounded-md border border-border bg-surface px-2.5 py-2 text-caption text-fg shadow-md`, d ? `absolute` : `relative inline-block`, l),
		children: [
			e === void 0 ? null : (0, U.jsx)(`div`, {
				className: `font-semibold [overflow-wrap:anywhere]`,
				children: e
			}),
			n === void 0 ? null : (0, U.jsx)(`div`, {
				className: `mt-0.5 text-muted [overflow-wrap:anywhere]`,
				children: n
			}),
			t.length > 0 ? (0, U.jsx)(`ul`, {
				className: c(`m-0 flex list-none flex-col gap-0.5 p-0`, (e !== void 0 || n !== void 0) && `mt-1 border-t border-border pt-1`),
				children: t.map((e) => (0, U.jsxs)(`li`, {
					className: `flex min-w-0 items-center gap-2`,
					children: [
						e.color === void 0 ? null : (0, U.jsx)(W, {
							color: e.color,
							shape: e.shape ?? `block`,
							...e.pattern ? { pattern: e.pattern } : {}
						}),
						(0, U.jsx)(`span`, {
							className: `min-w-0 flex-1 text-muted [overflow-wrap:anywhere]`,
							children: e.label
						}),
						(0, U.jsx)(`strong`, {
							className: `ms-3 font-semibold tabular-nums`,
							children: e.value
						})
					]
				}, e.id))
			}) : null
		]
	});
}
function re(e, t) {
	let { locale: n } = i();
	return (0, D.useMemo)(() => {
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
function q(e) {
	return Math.ceil(e.length * 7 + 2);
}
function ie({ label: e, labelId: t, showLabel: n, busy: r = !1, className: i, children: a }) {
	return (0, U.jsxs)(`figure`, {
		"aria-labelledby": t,
		...r ? { "aria-busy": !0 } : {},
		className: c(`m-0 flex min-w-0 flex-col gap-2 text-body text-fg`, i),
		children: [(0, U.jsx)(`span`, {
			id: t,
			className: n ? `text-title font-semibold [overflow-wrap:anywhere]` : `sr-only`,
			children: e
		}), a]
	});
}
function ae({ description: e, descriptionId: t, children: n }) {
	let r = e != null && e !== !1;
	return !r && (n == null || n === !1) ? null : (0, U.jsxs)(`figcaption`, {
		className: `flex min-w-0 flex-col gap-1.5`,
		children: [r ? (0, U.jsx)(`span`, {
			id: t,
			className: `text-caption text-muted [overflow-wrap:anywhere]`,
			children: e
		}) : null, n]
	});
}
function oe({ isLoading: e, error: t, emptyState: n, isEmpty: r }) {
	return t != null && t !== !1 ? `error` : e ? `loading` : r && n != null ? `empty` : null;
}
function se({ kind: e, height: t, children: n }) {
	let r = (0, D.useMemo)(() => ({ minHeight: t }), [t]);
	return e === `loading` ? (0, U.jsx)(`div`, {
		style: r,
		className: `relative flex items-center justify-center overflow-hidden rounded-md border border-dashed border-border bg-sunken px-4 py-6`,
		children: (0, U.jsxs)(`output`, {
			className: `flex items-center gap-2 text-body text-muted`,
			children: [(0, U.jsx)(d, {
				"aria-hidden": `true`,
				className: `size-4 shrink-0 animate-spin motion-reduce:animate-none in-[.a11y-reduce-motion]:animate-none`
			}), (0, U.jsx)(`span`, {
				className: `[overflow-wrap:anywhere]`,
				children: n
			})]
		})
	}) : e === `error` ? (0, U.jsx)(`div`, {
		style: r,
		className: `flex items-center justify-center rounded-md border border-danger bg-danger-soft px-4 py-6`,
		children: (0, U.jsxs)(`div`, {
			role: `alert`,
			className: `flex max-w-full items-start gap-2 text-body font-medium text-fg`,
			children: [(0, U.jsx)(f, {
				"aria-hidden": `true`,
				className: `mt-0.5 size-4 shrink-0 text-danger`
			}), (0, U.jsx)(`span`, {
				className: `min-w-0 [overflow-wrap:anywhere]`,
				children: n
			})]
		})
	}) : (0, U.jsxs)(`div`, {
		style: r,
		className: `flex flex-col items-center justify-center gap-2 rounded-md border border-dashed border-border px-4 py-6 text-center text-body text-muted`,
		children: [(0, U.jsx)(E, {
			"aria-hidden": `true`,
			className: `size-5 shrink-0`
		}), (0, U.jsx)(`div`, {
			className: `min-w-0 [overflow-wrap:anywhere]`,
			children: n
		})]
	});
}
function ce({ children: e }) {
	return (0, U.jsx)(`span`, {
		"aria-live": `polite`,
		"aria-atomic": `true`,
		className: `sr-only`,
		children: e
	});
}
function le({ trigger: e, caption: t, columns: n, rows: r, rowKey: i }) {
	return (0, U.jsxs)(m, {
		className: `group min-w-0`,
		children: [(0, U.jsxs)(o, {
			slot: `trigger`,
			className: `inline-flex min-h-6 cursor-default items-center gap-1 rounded-sm px-0.5 text-caption font-medium text-muted transition-colors data-hovered:text-fg data-pressed:text-fg`,
			children: [(0, U.jsx)(u, {
				"aria-hidden": `true`,
				className: `size-3.5 shrink-0 transition-transform duration-(--sk-duration-fast) group-data-expanded:rotate-90 motion-reduce:transition-none in-[.a11y-reduce-motion]:transition-none rtl:-scale-x-100`
			}), e]
		}), (0, U.jsx)(p, {
			className: `min-w-0 pt-2`,
			children: (0, U.jsx)(h, {
				caption: t,
				captionHidden: !0,
				columns: n,
				rows: r,
				rowKey: i,
				layout: `scroll`
			})
		})]
	});
}
function ue(e, t) {
	let [n, r] = (0, D.useState)(t);
	return (0, D.useLayoutEffect)(() => {
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
function de({ count: e, across: t = 1, along: n = 1, describe: r, start: i = `last` }) {
	let [a, o] = (0, D.useState)(null), [s, c] = (0, D.useState)(!1), [l, u] = (0, D.useState)(``), d = e - 1, f = (0, D.useCallback)((t) => {
		if (e <= 0) return;
		let n = Math.min(d, Math.max(0, t));
		o(n), u(r(n));
	}, [
		e,
		r,
		d
	]), p = (0, D.useCallback)((r) => {
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
	]), m = (0, D.useCallback)((e) => {
		e.target === e.currentTarget && c(!0);
	}, []), h = (0, D.useCallback)((e) => {
		e.target === e.currentTarget && (c(!1), o(null));
	}, []), g = (0, D.useCallback)((e) => {
		e === null ? s || o(null) : o(Math.min(d, Math.max(0, e)));
	}, [s, d]);
	(0, D.useEffect)(() => {
		if (a === null || s) return;
		let e = (e) => {
			e.key === `Escape` && o(null);
		};
		return document.addEventListener(`keydown`, e), () => document.removeEventListener(`keydown`, e);
	}, [a, s]);
	let _ = (0, D.useMemo)(() => ({
		tabIndex: 0,
		onKeyDown: p,
		onFocus: m,
		onBlur: h
	}), [
		p,
		m,
		h
	]);
	return {
		active: a !== null && a <= d ? a : null,
		focused: s,
		announcement: l,
		setPointer: g,
		focusProps: _
	};
}
var J = 3, Y = 28, fe = 18, pe = [
	0,
	.3,
	.52,
	.76,
	1
], me = [
	0,
	1,
	2,
	3,
	4
];
function X(e) {
	let t = /^(\d{4})-(\d{2})-(\d{2})/.exec(e);
	return t ? new Date(Date.UTC(Number(t[1]), Number(t[2]) - 1, Number(t[3]))) : null;
}
function he(e) {
	return e.toISOString().slice(0, 10);
}
function ge(e, t) {
	if (e <= 0 || t <= 0) return 0;
	let n = e / t;
	return n > .75 ? 4 : n > .5 ? 3 : n > .25 ? 2 : 1;
}
function _e({ label: e, showLabel: t = !1, description: n, keyboardHint: a, isLoading: o, loadingLabel: s, error: l, emptyState: u, className: d, days: f, formatValue: p, formatDate: m, weekStartsOn: h = 1, lessLabel: g, moreLabel: _, table: v }) {
	let y = (0, D.useId)(), b = (0, D.useId)(), x = (0, D.useId)(), { locale: S } = i(), C = re(p), w = (0, D.useMemo)(() => {
		if (m) return m;
		let e = new Intl.DateTimeFormat(S, {
			weekday: `long`,
			day: `numeric`,
			month: `long`,
			year: `numeric`,
			timeZone: `UTC`
		});
		return (t) => e.format(t);
	}, [m, S]), T = (0, D.useMemo)(() => {
		let e = f.map((e) => ({
			day: e,
			date: X(e.date)
		})).filter((e) => e.date !== null).toSorted((e, t) => e.date.getTime() - t.date.getTime()), t = e[0], n = e.at(-1);
		if (!t || !n) return [];
		let r = new Map(e.map((e) => [he(e.date), e.day])), i = Math.max(0, ...e.map((e) => e.day.value)), a = (t.date.getUTCDay() - h + 7) % 7, o = [], s = 864e5, c = Math.round((n.date.getTime() - t.date.getTime()) / s);
		for (let e = 0; e <= c; e += 1) {
			let n = new Date(t.date.getTime() + e * s), c = he(n), l = r.get(c) ?? {
				date: c,
				value: 0
			}, u = a + e;
			o.push({
				day: l,
				date: n,
				column: Math.floor(u / 7),
				row: u % 7,
				level: ge(l.value, i)
			});
		}
		return o;
	}, [f, h]), E = T.length ? (T.at(-1)?.column ?? 0) + 1 : 0, O = (0, D.useRef)(null), ee = ue(O, 770), k = Math.max(10, Math.min(18, Math.floor((ee - Y) / Math.max(1, E)) - J)), A = k + J, j = E * A + Y, M = fe + 7 * A, N = (0, D.useMemo)(() => {
		let e = new Intl.DateTimeFormat(S, {
			month: `short`,
			timeZone: `UTC`
		}), t = [], n = ``;
		for (let r of T) {
			if (r.row !== 0 && r !== T[0]) continue;
			let i = `${r.date.getUTCFullYear()}-${r.date.getUTCMonth()}`;
			i !== n && t.push({
				column: r.column,
				text: e.format(r.date)
			}), n = i;
		}
		let r = t[1];
		return r && t[0] && r.column - t[0].column < 3 ? t.slice(1) : t;
	}, [T, S]), P = (0, D.useMemo)(() => {
		let e = new Intl.DateTimeFormat(S, {
			weekday: `short`,
			timeZone: `UTC`
		}), t = Date.UTC(2023, 11, 31);
		return [
			1,
			3,
			5
		].map((n) => ({
			row: (n - h + 7) % 7,
			text: e.format(new Date(t + n * 864e5))
		}));
	}, [S, h]), F = Math.max(...P.map((e) => q(e.text))) + 8, I = (0, D.useCallback)((e) => {
		let t = T[e];
		if (!t) return ``;
		let n = t.day.details?.length ? `. ${t.day.details.map((e) => `${String(e.label)} ${String(e.value)}`).join(`, `)}` : ``;
		return `${w(t.date)}: ${C.value(t.day.value)}${n}`;
	}, [
		T,
		w,
		C
	]), L = de({
		count: T.length,
		across: 7,
		along: 1,
		describe: I
	}), { setPointer: R } = L, z = L.active, [B, te] = (0, D.useState)(0), V = (0, D.useRef)(!1);
	(0, D.useLayoutEffect)(() => {
		let e = O.current;
		e && !V.current && T.length !== 0 && (V.current = !0, e.scrollLeft = e.scrollWidth, te(e.scrollLeft));
	}, [T.length, O]), (0, D.useLayoutEffect)(() => {
		let e = O.current, t = z === null ? void 0 : T[z];
		if (!e || !t) return;
		let n = t.column * A;
		n < e.scrollLeft ? e.scrollLeft = Math.max(0, n - J) : n + A > e.scrollLeft + e.clientWidth && (e.scrollLeft = n + A - e.clientWidth);
	}, [
		z,
		T,
		O,
		A
	]);
	let H = (0, D.useCallback)(() => te(O.current?.scrollLeft ?? 0), [O]), W = (0, D.useCallback)((e) => {
		let t = e.target.closest(`[data-index]`);
		R(t ? Number(t.dataset.index) : null);
	}, [R]), G = (0, D.useCallback)(() => R(null), [R]), K = z === null ? void 0 : T[z], _e = (0, D.useMemo)(() => [...K?.day.details ?? []], [K]), ve = (0, D.useMemo)(() => T.filter((e) => e.day.value > 0), [T]), ye = (0, D.useMemo)(() => v ? [{
		id: `date`,
		header: v.dateHeader,
		isRowHeader: !0,
		cell: (e) => w(e.date)
	}, {
		id: `value`,
		header: v.valueHeader,
		kind: `numeric`,
		cell: (e) => C.value(e.day.value)
	}] : [], [
		w,
		C,
		v
	]), be = (0, D.useCallback)((e) => e.day.date, []), xe = oe({
		isLoading: o,
		error: l,
		emptyState: u,
		isEmpty: T.every((e) => e.day.value <= 0)
	}), Se = [a ? x : null, n == null ? null : b].filter(Boolean).join(` `), Ce = (0, D.useMemo)(() => ({
		width: 11,
		height: 11
	}), []);
	return (0, U.jsx)(ie, {
		label: e,
		labelId: y,
		showLabel: t,
		busy: !!o,
		className: d,
		children: xe ? (0, U.jsx)(se, {
			kind: xe,
			height: 116,
			children: xe === `loading` ? s : xe === `error` ? l : u
		}) : (0, U.jsxs)(U.Fragment, { children: [
			(0, U.jsxs)(`div`, {
				className: `relative flex min-w-0`,
				children: [
					(0, U.jsx)(`svg`, {
						"aria-hidden": `true`,
						focusable: `false`,
						width: F,
						height: M,
						className: `block shrink-0 select-none`,
						children: P.map((e) => (0, U.jsx)(`text`, {
							x: 0,
							y: fe + e.row * A + k - 1,
							className: `fill-muted text-caption forced-colors:fill-[CanvasText]`,
							children: e.text
						}, e.row))
					}),
					(0, U.jsxs)(r, {
						ref: O,
						"aria-labelledby": y,
						...Se ? { "aria-describedby": Se } : {},
						...L.focusProps,
						onScroll: H,
						className: `min-w-0 flex-1 overflow-x-auto overscroll-x-contain rounded-sm pb-1`,
						children: [a ? (0, U.jsx)(`span`, {
							id: x,
							className: `sr-only`,
							children: a
						}) : null, (0, U.jsxs)(`svg`, {
							"aria-hidden": `true`,
							focusable: `false`,
							width: j,
							height: M,
							viewBox: `0 0 ${j} ${M}`,
							onPointerOver: W,
							onPointerDown: W,
							onPointerLeave: G,
							className: `block select-none`,
							children: [N.map((e) => (0, U.jsx)(`text`, {
								x: e.column * A,
								y: 11,
								className: `fill-muted text-caption forced-colors:fill-[CanvasText]`,
								children: e.text
							}, `${e.column}-${e.text}`)), T.map((e, t) => (0, U.jsx)(`rect`, {
								"data-index": t,
								x: e.column * A,
								y: fe + e.row * A,
								width: k,
								height: k,
								rx: 2.5,
								fillOpacity: e.level === 0 ? .08 : pe[e.level],
								strokeWidth: z === t ? 2 : 1,
								strokeOpacity: z === t ? 1 : .1,
								className: c(e.level === 0 ? `fill-fg forced-colors:fill-[Canvas]` : `fill-accent forced-colors:fill-[Highlight]`, `stroke-fg forced-colors:stroke-[CanvasText]`)
							}, e.day.date))]
						})]
					}),
					K ? (0, U.jsx)(ne, {
						"aria-hidden": !0,
						x: F + K.column * A + k / 2 - B,
						y: K.row < 3 ? fe + (K.row + 1) * A : fe + K.row * A,
						placement: K.row < 3 ? `bottom` : `top`,
						boundary: F + ee,
						title: w(K.date),
						note: C.value(K.day.value),
						items: _e
					}) : null
				]
			}),
			g && _ ? (0, U.jsxs)(`div`, {
				"aria-hidden": `true`,
				className: `flex items-center justify-end gap-1 text-caption text-muted`,
				children: [
					(0, U.jsx)(`span`, {
						className: `me-1`,
						children: g
					}),
					me.map((e) => (0, U.jsx)(`svg`, {
						width: `11`,
						height: `11`,
						viewBox: `0 0 11 11`,
						focusable: `false`,
						style: Ce,
						children: (0, U.jsx)(`rect`, {
							width: `11`,
							height: `11`,
							rx: `2.5`,
							fillOpacity: e === 0 ? .08 : pe[e],
							strokeOpacity: .1,
							className: c(e === 0 ? `fill-fg forced-colors:fill-[Canvas]` : `fill-accent forced-colors:fill-[Highlight]`, `stroke-fg forced-colors:stroke-[CanvasText]`)
						})
					}, e)),
					(0, U.jsx)(`span`, {
						className: `ms-1`,
						children: _
					})
				]
			}) : null,
			(0, U.jsx)(ce, { children: L.announcement }),
			(0, U.jsx)(ae, {
				description: n,
				descriptionId: b,
				children: v ? (0, U.jsx)(le, {
					trigger: v.trigger,
					caption: e,
					columns: ye,
					rows: ve,
					rowKey: be
				}) : null
			})
		] })
	});
}
function ve({ items: e, orientation: t = `horizontal`, label: n, activeId: r = null, onHoverChange: i, className: a }) {
	let o = (0, D.useCallback)((e) => {
		i && i(e.target.closest(`[data-legend-id]`)?.dataset.legendId ?? null);
	}, [i]), s = (0, D.useCallback)(() => i?.(null), [i]);
	if (e.length === 0) return null;
	let l = t === `vertical`;
	return (0, U.jsx)(`ul`, {
		...n ? { "aria-label": n } : {},
		onPointerOver: i ? o : void 0,
		onPointerLeave: i ? s : void 0,
		className: c(`m-0 flex min-w-0 list-none p-0 text-caption text-muted`, l ? `flex-col gap-1.5` : `flex-wrap gap-x-4 gap-y-1`, a),
		children: e.map((e) => {
			let t = r !== null && r !== e.id;
			return (0, U.jsxs)(`li`, {
				"data-legend-id": e.id,
				className: c(`flex min-w-0 items-center gap-1.5 transition-opacity duration-(--sk-duration-fast)`, `motion-reduce:transition-none in-[.a11y-reduce-motion]:transition-none`, t && `opacity-55`, r === e.id && `text-fg`),
				children: [
					(0, U.jsx)(W, {
						color: e.color ?? 1,
						shape: e.shape ?? `block`,
						...e.pattern ? { pattern: e.pattern } : {}
					}),
					e.value === void 0 ? null : (0, U.jsx)(`strong`, {
						className: `font-semibold text-fg tabular-nums`,
						children: e.value
					}),
					(0, U.jsx)(`span`, {
						className: `min-w-0 [overflow-wrap:anywhere]`,
						children: e.label
					}),
					e.detail === void 0 ? null : (0, U.jsx)(`span`, {
						className: `text-muted tabular-nums`,
						children: e.detail
					})
				]
			}, e.id);
		})
	});
}
function ye(e, t, n = 4) {
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
function be(e, t) {
	if (e <= 0) return [];
	let n = Math.max(1, Math.ceil(e / Math.max(1, t))), r = [];
	for (let t = 0; t < e; t += n) r.push(t);
	let i = e - 1, a = r.at(-1) ?? 0;
	return a === i || (i - a >= n ? r.push(i) : r.length > 1 && (r[r.length - 1] = i)), r;
}
function xe(e) {
	let t = ``, n = !1;
	for (let r of e) r ? (t += `${n ? `L` : `M`}${Z(r.x)} ${Z(r.y)}`, n = !0) : n = !1;
	return t;
}
function Se(e, t) {
	let n = ``, r = [], i = () => {
		let e = r[0], i = r.at(-1);
		if (e && i && r.length > 1) {
			n += `M${Z(e.x)} ${Z(t)}`;
			for (let e of r) n += `L${Z(e.x)} ${Z(e.y)}`;
			n += `L${Z(i.x)} ${Z(t)}Z`;
		}
		r = [];
	};
	for (let t of e) t ? r.push(t) : i();
	return i(), n;
}
function Ce(e, t, n, r, i) {
	if (r <= 0 || n <= 0) return ``;
	let a = Math.min(i, r, n / 2), o = t + r;
	return `M${Z(e)} ${Z(o)}V${Z(t + a)}Q${Z(e)} ${Z(t)} ${Z(e + a)} ${Z(t)}H${Z(e + n - a)}Q${Z(e + n)} ${Z(t)} ${Z(e + n)} ${Z(t + a)}V${Z(o)}Z`;
}
function we(e, t, n, r, i) {
	let a = Math.min(i - r, Math.PI * 2 - 1e-4), o = r + a, s = +(a > Math.PI), c = (t, n) => `${Z(e + t * Math.sin(n))} ${Z(e - t * Math.cos(n))}`;
	return `M${c(t, r)}A${t} ${t} 0 ${s} 1 ${c(t, o)}L${c(n, o)}A${n} ${n} 0 ${s} 0 ${c(n, r)}Z`;
}
function Z(e) {
	return Math.round(e * 100) / 100;
}
var Te = 10, Ee = 26;
function De(e) {
	return e.orientation === `rows` ? (0, U.jsx)(je, { ...e }) : (0, U.jsx)(Ae, { ...e });
}
function Oe({ data: e, formatValue: t, formatTick: n, valueLabel: r, highlightLabel: i }) {
	let a = re(t, n), o = (0, D.useCallback)((e) => e === null || !Number.isFinite(e) ? `—` : a.value(e), [a]);
	return {
		format: a,
		valueText: o,
		isEmpty: e.every((e) => e.value === null || !Number.isFinite(e.value)),
		max: Math.max(0, ...e.map((e) => e.value !== null && Number.isFinite(e.value) ? e.value : 0)),
		describe: (0, D.useCallback)((t) => {
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
function ke({ table: e, valueLabel: t }, n) {
	return {
		columns: (0, D.useMemo)(() => e ? [{
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
		rowKey: (0, D.useCallback)((e) => e.id, [])
	};
}
function Ae(e) {
	let { data: t, label: n, showLabel: i = !1, description: a, keyboardHint: o, isLoading: s, loadingLabel: l, error: u, emptyState: d, className: f, valueLabel: p, color: m = 1, highlightColor: h = `danger`, highlightLabel: g, height: _ = 200, table: v } = e, y = (0, D.useId)(), b = (0, D.useId)(), x = (0, D.useId)(), S = (0, D.useRef)(null), C = ue(S, 640), { format: w, valueText: T, isEmpty: E, max: O, describe: ee } = Oe(e), { columns: k, rowKey: j } = ke(e, T), M = t.length, N = (0, D.useMemo)(() => {
		let e = ye(0, Math.max(1, O)), n = e.ticks.map((e) => w.tick(e)), r = Math.max(24, ...n.map(q)) + 8, i = Math.max(20, C - r - Te), a = Math.max(20, _ - 14 - Ee), o = i / Math.max(1, M), s = Math.max(2, Math.min(32, o * .72, o - 2)), c = (t) => 14 + a * (1 - t / (e.max || 1)), l = (e) => r + o * e + o / 2, u = t.map((e, t) => {
			let n = e.value !== null && Number.isFinite(e.value) ? Math.max(0, e.value) : 0, r = 14 + a - c(n), i = l(t) - s / 2;
			return {
				datum: e,
				index: t,
				x: i,
				top: c(n),
				path: Ce(i, c(n), s, r, Math.min(4, s / 2))
			};
		}), d = t.map((e) => e.axisLabel ?? e.label), f = Math.max(20, ...d.map(q));
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
			xLabels: be(M, Math.max(2, Math.floor(i / (f + 14)))).map((e) => ({
				index: e,
				x: l(e),
				text: d[e] ?? ``
			})),
			baseline: 14 + a
		};
	}, [
		M,
		t,
		w,
		_,
		O,
		C
	]), F = de({
		count: M,
		describe: ee
	}), { setPointer: L } = F, R = (0, D.useCallback)((e) => {
		let t = e.currentTarget.getBoundingClientRect(), n = t.width > 0 ? C / t.width : 1, r = (e.clientX - t.left) * n, i = Math.floor((r - N.left) / N.slot);
		L(!Number.isFinite(i) || i < 0 || i >= M ? null : i);
	}, [
		M,
		N.left,
		N.slot,
		L,
		C
	]), z = (0, D.useCallback)(() => L(null), [L]), B = F.active, W = B === null ? void 0 : t[B], G = (0, D.useMemo)(() => {
		if (!W) return [];
		let e = W.highlight ? h : m;
		return [{
			id: `value`,
			label: p,
			value: T(W.value),
			color: e,
			shape: `block`
		}, ...W.details ?? []];
	}, [
		W,
		m,
		h,
		p,
		T
	]), K = t.some((e) => e.highlight), re = (0, D.useMemo)(() => {
		let e = [{
			id: `value`,
			label: p,
			color: m,
			shape: `block`
		}];
		return K && g && e.push({
			id: `highlight`,
			label: g,
			color: h,
			shape: `marker`
		}), e;
	}, [
		m,
		K,
		h,
		g,
		p
	]), J = oe({
		isLoading: s,
		error: u,
		emptyState: d,
		isEmpty: E
	}), Y = [o ? x : null, a == null ? null : b].filter(Boolean).join(` `);
	return (0, U.jsx)(ie, {
		label: n,
		labelId: y,
		showLabel: i,
		busy: !!s,
		className: f,
		children: J ? (0, U.jsx)(se, {
			kind: J,
			height: _,
			children: J === `loading` ? l : J === `error` ? u : d
		}) : (0, U.jsxs)(U.Fragment, { children: [
			K && g ? (0, U.jsx)(ve, { items: re }) : null,
			(0, U.jsxs)(`div`, {
				ref: S,
				className: `relative min-w-0`,
				children: [(0, U.jsxs)(r, {
					"aria-labelledby": y,
					...Y ? { "aria-describedby": Y } : {},
					...F.focusProps,
					className: `rounded-sm`,
					children: [o ? (0, U.jsx)(`span`, {
						id: x,
						className: `sr-only`,
						children: o
					}) : null, (0, U.jsxs)(`svg`, {
						"aria-hidden": `true`,
						focusable: `false`,
						width: `100%`,
						height: _,
						viewBox: `0 0 ${C} ${_}`,
						preserveAspectRatio: `none`,
						onPointerMove: R,
						onPointerDown: R,
						onPointerLeave: z,
						className: `block touch-pan-y overflow-visible select-none`,
						children: [
							B === null ? null : (0, U.jsx)(`rect`, {
								x: N.left + N.slot * B,
								y: N.top,
								width: N.slot,
								height: N.plotHeight,
								rx: `3`,
								className: `fill-hover forced-colors:fill-none`
							}),
							N.scale.ticks.map((e, t) => (0, U.jsxs)(`g`, { children: [(0, U.jsx)(`line`, {
								x1: N.left,
								x2: C - Te,
								y1: N.y(e),
								y2: N.y(e),
								strokeWidth: `1`,
								className: c(`stroke-border`, te)
							}), (0, U.jsx)(`text`, {
								x: N.left - 8,
								y: N.y(e) + 4,
								textAnchor: `end`,
								className: c(`fill-muted text-caption tabular-nums`, V),
								children: N.tickTexts[t]
							})] }, e)),
							N.bars.map(({ datum: e, index: t, path: n, top: r }) => n || e.highlight ? (0, U.jsxs)(`g`, { children: [n ? (0, U.jsx)(`path`, {
								d: n,
								className: c(A[e.highlight ? h : m], e.highlight ? `forced-colors:fill-[Highlight]` : I, `transition-opacity duration-(--sk-duration-fast)`, H, B !== null && B !== t && `opacity-60`)
							}) : null, e.highlight ? (0, U.jsx)(`path`, {
								d: `M${N.center(t) - 5} ${r - 11}h10l-5 7z`,
								className: c(A[h], `forced-colors:fill-[CanvasText]`)
							}) : null] }, e.id) : null),
							(0, U.jsx)(`line`, {
								x1: N.left,
								x2: C - Te,
								y1: N.baseline,
								y2: N.baseline,
								strokeWidth: `1`,
								className: c(`stroke-border-strong`, P)
							}),
							N.xLabels.map((e, t) => {
								let n = q(e.text) / 2, r = t === 0 && e.x - n < 0 ? `start` : e.x + n > C ? `end` : `middle`;
								return (0, U.jsx)(`text`, {
									x: e.x,
									y: _ - 6,
									textAnchor: r,
									className: c(`fill-muted text-caption`, V),
									children: e.text
								}, e.index);
							})
						]
					})]
				}), W && B !== null ? (0, U.jsx)(ne, {
					"aria-hidden": !0,
					x: N.center(B),
					y: Math.max(N.top, (N.bars[B]?.top ?? N.top) - (W.highlight ? 12 : 0)),
					boundary: C,
					title: W.label,
					...W.highlight && g ? { note: g } : {},
					items: G
				}) : null]
			}),
			(0, U.jsx)(ce, { children: F.announcement }),
			(0, U.jsx)(ae, {
				description: a,
				descriptionId: b,
				children: v ? (0, U.jsx)(le, {
					trigger: v.trigger,
					caption: n,
					columns: k,
					rows: t,
					rowKey: j
				}) : null
			})
		] })
	});
}
function je(e) {
	let { data: t, label: n, showLabel: r = !1, description: i, isLoading: a, loadingLabel: o, error: s, emptyState: c, className: l, color: u = 1, highlightColor: d = `danger`, highlightLabel: f, height: p = 160, ordered: m = !1, table: h } = e, g = (0, D.useId)(), _ = (0, D.useId)(), { valueText: v, isEmpty: y, max: b } = Oe(e), { columns: x, rowKey: S } = ke(e, v), C = oe({
		isLoading: a,
		error: s,
		emptyState: c,
		isEmpty: y
	});
	return (0, U.jsx)(ie, {
		label: n,
		labelId: g,
		showLabel: r,
		busy: !!a,
		className: l,
		children: C ? (0, U.jsx)(se, {
			kind: C,
			height: p,
			children: C === `loading` ? o : C === `error` ? s : c
		}) : (0, U.jsxs)(U.Fragment, { children: [(0, U.jsx)(m ? `ol` : `ul`, {
			"aria-labelledby": g,
			className: `@container m-0 flex min-w-0 list-none flex-col gap-2.5 p-0`,
			children: t.map((e, t) => (0, U.jsx)(Me, {
				datum: e,
				rank: m ? t + 1 : void 0,
				share: b > 0 && e.value !== null ? Math.max(0, e.value) / b : 0,
				valueText: v(e.value),
				color: e.highlight ? d : u,
				highlightLabel: e.highlight ? f : void 0
			}, e.id))
		}), (0, U.jsx)(ae, {
			description: i,
			descriptionId: _,
			children: h ? (0, U.jsx)(le, {
				trigger: h.trigger,
				caption: n,
				columns: x,
				rows: t,
				rowKey: S
			}) : null
		})] })
	});
}
function Me({ datum: e, rank: t, share: n, valueText: r, color: i, highlightLabel: a }) {
	let o = (0, D.useMemo)(() => ({ width: `${Math.max(n * 100, +(n > 0))}%` }), [n]);
	return (0, U.jsxs)(`li`, {
		className: `grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-1 text-body @lg:grid-cols-[minmax(6rem,14rem)_minmax(0,1fr)_auto]`,
		children: [
			(0, U.jsxs)(`span`, {
				className: `flex min-w-0 items-center gap-1.5`,
				children: [
					t === void 0 ? null : (0, U.jsx)(`span`, {
						className: `w-5 shrink-0 text-caption text-muted tabular-nums`,
						children: t
					}),
					(0, U.jsx)(`span`, {
						className: `min-w-0 [overflow-wrap:anywhere]`,
						children: e.label
					}),
					a ? (0, U.jsxs)(`span`, {
						className: `inline-flex shrink-0 items-center gap-1 text-caption font-medium text-fg`,
						children: [(0, U.jsx)(W, {
							color: i,
							shape: `marker`
						}), a]
					}) : null
				]
			}),
			(0, U.jsx)(`span`, {
				"aria-hidden": `true`,
				className: `col-span-2 row-start-2 block h-2 min-w-0 overflow-hidden rounded-full border border-transparent bg-hover @lg:col-span-1 @lg:col-start-2 @lg:row-start-1`,
				children: (0, U.jsx)(`span`, {
					style: o,
					className: c(`block h-full rounded-full transition-[width] duration-(--sk-duration-slow) ease-out`, j[i], L, H)
				})
			}),
			(0, U.jsx)(`span`, {
				className: `col-start-2 row-start-1 text-end font-semibold tabular-nums @lg:col-start-3`,
				children: r
			})
		]
	});
}
var Ne = {
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
}, Pe = {
	up: w,
	down: S,
	flat: g
};
function Q({ value: e, directionLabels: t, goodWhen: n = `up`, assessmentLabels: r, comparison: a, emptyLabel: o = `—`, flatWithin: s = 5e-4, formatValue: l, variant: u = `plain`, className: d }) {
	let { locale: f } = i(), p = (0, D.useMemo)(() => {
		if (l) return l;
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
	}, [l, f]), m = c(`inline-flex max-w-full items-center gap-1 text-caption font-medium tabular-nums`, u === `pill` && `rounded-full border px-2 py-0.5`);
	if (e === null || !Number.isFinite(e)) return (0, U.jsx)(`span`, {
		className: c(m, u === `pill` ? Ne.neutral.pill : `text-muted`, d),
		children: (0, U.jsx)(`span`, {
			className: `[overflow-wrap:anywhere]`,
			children: o
		})
	});
	let h = Math.abs(e) < s ? `flat` : e > 0 ? `up` : `down`, g = h === `flat` || n === `neither` ? `neutral` : h === n ? `good` : `bad`, _ = Pe[h], v = g === `neutral` || !r ? null : r[g];
	return (0, U.jsxs)(`span`, {
		className: c(`inline-flex max-w-full flex-wrap items-center gap-x-1.5 gap-y-0.5`, d),
		children: [(0, U.jsxs)(`span`, {
			"data-direction": h,
			"data-verdict": g,
			className: c(m, Ne[g][u]),
			children: [
				(0, U.jsx)(_, {
					"aria-hidden": `true`,
					focusable: `false`,
					className: `size-3.5 shrink-0`,
					strokeWidth: 2.5
				}),
				(0, U.jsx)(`span`, {
					className: `sr-only`,
					children: t[h]
				}),
				(0, U.jsx)(`span`, { children: p(h === `flat` ? 0 : e) }),
				v ? (0, U.jsx)(`span`, {
					className: `sr-only`,
					children: `, ${v}`
				}) : null
			]
		}), a == null ? null : (0, U.jsx)(`span`, {
			className: `min-w-0 text-caption text-muted [overflow-wrap:anywhere]`,
			children: a
		})]
	});
}
function Fe({ prefix: e, colors: t }) {
	let n = [...new Set(t)];
	return (0, U.jsx)(`defs`, { children: n.map((t) => (0, U.jsxs)(`pattern`, {
		id: B(e, t),
		patternUnits: `userSpaceOnUse`,
		...Ie[t].frame,
		children: [(0, U.jsx)(`rect`, {
			width: `100%`,
			height: `100%`,
			fill: `Canvas`
		}), Ie[t].marks]
	}, t)) });
}
var Ie = {
	1: {
		frame: {
			width: 4,
			height: 4
		},
		marks: (0, U.jsx)(`rect`, {
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
		marks: (0, U.jsx)(`rect`, {
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
		marks: (0, U.jsx)(`circle`, {
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
		marks: (0, U.jsx)(`rect`, {
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
		marks: (0, U.jsx)(`rect`, {
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
		marks: (0, U.jsx)(`rect`, {
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
		marks: (0, U.jsxs)(U.Fragment, { children: [(0, U.jsx)(`rect`, {
			width: `3`,
			height: `3`,
			fill: `CanvasText`
		}), (0, U.jsx)(`rect`, {
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
		marks: (0, U.jsxs)(U.Fragment, { children: [(0, U.jsx)(`rect`, {
			width: `5`,
			height: `1`,
			fill: `CanvasText`
		}), (0, U.jsx)(`rect`, {
			width: `1`,
			height: `5`,
			fill: `CanvasText`
		})] })
	}
}, Le = {
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
function Re({ label: e, showLabel: t = !1, description: n, slices: r, size: a = `md`, maxSlices: o = 5, otherLabel: s, sort: l = !0, formatValue: u, formatShare: d, centerValue: f, centerLabel: p, legendLabel: m, isLoading: h, loadingLabel: g, error: _, emptyState: v, className: y }) {
	let b = (0, D.useId)(), x = (0, D.useId)(), S = (0, D.useId)(), { locale: C } = i(), w = re(u), T = (0, D.useMemo)(() => {
		if (d) return d;
		let e = new Intl.NumberFormat(C, {
			style: `percent`,
			maximumFractionDigits: 0
		});
		return (t) => t > 0 && t < .005 ? `<${e.format(.01)}` : e.format(t);
	}, [d, C]), [E, O] = (0, D.useState)(null), { box: k, center: j } = Le[a], M = (0, D.useMemo)(() => {
		let e = r.filter((e) => Number.isFinite(e.value) && e.value > 0), t = l ? e.toSorted((e, t) => t.value - e.value) : e;
		if (s === void 0 || t.length <= o) return t;
		let n = t.slice(0, Math.max(1, o - 1)), i = t.slice(n.length).reduce((e, t) => e + t.value, 0);
		return [...n, {
			id: `other`,
			label: s,
			value: i,
			color: `muted`
		}];
	}, [
		o,
		s,
		r,
		l
	]), N = M.reduce((e, t) => e + t.value, 0), P = (0, D.useMemo)(() => {
		let e = k / 2, t = e * .64, n = 0, r = 0, i = [];
		for (let a of M) {
			let o = N > 0 ? a.value / N : 0, s = n + o * Math.PI * 2, c = a.color ?? ee(r);
			a.color || (r += 1), i.push({
				slice: a,
				color: c,
				share: o,
				path: we(e, e, t, n, s),
				pattern: { "--sk-chart-pattern": `url("#${B(S, c)}")` }
			}), n = s;
		}
		return i;
	}, [
		k,
		S,
		M,
		N
	]), F = (0, D.useMemo)(() => P.map((e) => e.color), [P]), I = (0, D.useMemo)(() => P.map((e) => ({
		id: e.slice.id,
		label: e.slice.label,
		color: e.color,
		shape: `block`,
		value: T(e.share),
		detail: `(${w.value(e.slice.value)})`
	})), [
		P,
		w,
		T
	]), L = (0, D.useCallback)((e) => {
		let t = e.target.closest(`[data-slice]`);
		O(t?.dataset.slice ?? null);
	}, []), R = (0, D.useCallback)(() => O(null), []), te = (0, D.useMemo)(() => ({
		width: k,
		height: k
	}), [k]), V = oe({
		isLoading: h,
		error: _,
		emptyState: v,
		isEmpty: N === 0
	}), W = f === void 0 ? w.value(N) : f;
	return (0, U.jsx)(ie, {
		label: e,
		labelId: b,
		showLabel: t,
		busy: !!h,
		className: y,
		children: V ? (0, U.jsx)(se, {
			kind: V,
			height: k,
			children: V === `loading` ? g : V === `error` ? _ : v
		}) : (0, U.jsxs)(U.Fragment, { children: [(0, U.jsxs)(`div`, {
			className: `flex min-w-0 flex-wrap items-center gap-x-6 gap-y-4`,
			children: [(0, U.jsxs)(`div`, {
				style: te,
				className: `relative shrink-0`,
				children: [(0, U.jsxs)(`svg`, {
					"aria-hidden": `true`,
					focusable: `false`,
					width: k,
					height: k,
					viewBox: `0 0 ${k} ${k}`,
					onPointerOver: L,
					onPointerLeave: R,
					className: `block overflow-visible`,
					children: [(0, U.jsx)(Fe, {
						prefix: S,
						colors: F
					}), N === 0 ? (0, U.jsx)(`circle`, {
						cx: k / 2,
						cy: k / 2,
						r: k * .41,
						fill: `none`,
						strokeWidth: k * .18,
						className: `stroke-hover forced-colors:stroke-[GrayText]`
					}) : P.map((e) => (0, U.jsx)(`path`, {
						"data-slice": e.slice.id,
						d: e.path,
						strokeWidth: `2`,
						style: e.pattern,
						className: c(A[e.color], `stroke-surface transition-opacity duration-(--sk-duration-fast) forced-colors:fill-(--sk-chart-pattern) forced-colors:stroke-[CanvasText]`, z, H, E !== null && E !== e.slice.id && `opacity-35`)
					}, e.slice.id))]
				}), W === null ? null : (0, U.jsxs)(`div`, {
					className: `pointer-events-none absolute inset-[22%] flex flex-col items-center justify-center overflow-hidden text-center leading-tight`,
					children: [(0, U.jsx)(`span`, {
						className: c(`max-w-full font-semibold tabular-nums [overflow-wrap:anywhere]`, j),
						children: W
					}), p !== void 0 && a !== `sm` ? (0, U.jsx)(`span`, {
						className: `max-w-full text-caption text-muted [overflow-wrap:anywhere]`,
						children: p
					}) : null]
				})]
			}), (0, U.jsx)(ve, {
				items: I,
				orientation: `vertical`,
				activeId: E,
				onHoverChange: O,
				...m ? { label: m } : {},
				className: `min-w-[10rem] flex-1 text-body`
			})]
		}), (0, U.jsx)(ae, {
			description: n,
			descriptionId: x
		})] })
	});
}
var ze = 14, Be = [], Ve = 26;
function He({ label: e, showLabel: t = !1, description: n, keyboardHint: i, isLoading: a, loadingLabel: o, error: s, emptyState: l, className: u, categories: d, axisLabels: f, series: p, height: m = 220, area: h = !1, yMin: g = 0, yMax: _, invert: v = !1, formatValue: y, formatTick: b, annotations: x = Be, annotationsLabel: S, legendLabel: C, showLegend: w, table: T }) {
	let E = (0, D.useId)(), O = (0, D.useId)(), j = (0, D.useId)(), F = (0, D.useRef)(null), I = ue(F, 640), L = re(y, b), R = d.length, z = (0, D.useMemo)(() => {
		let e = p.filter((e) => !e.ghost);
		return p.map((t) => {
			let n = t.color ?? (t.ghost ? `muted` : ee(e.indexOf(t))), r = t.pattern ?? (t.ghost ? `short` : N[n]);
			return {
				...t,
				color: n,
				pattern: r
			};
		});
	}, [p]), B = (0, D.useMemo)(() => p.flatMap((e) => e.values.filter((e) => e !== null && Number.isFinite(e))), [p]), H = B.length === 0 || R === 0, W = (0, D.useMemo)(() => {
		let e = g ?? (B.length ? Math.floor(Math.min(...B)) : 0), t = _ ?? (B.length ? Math.max(...B) : 1), n = ye(Math.min(e, t), Math.max(t, e + 1e-9)), r = n.ticks.map((e) => L.tick(e)), i = Math.max(28, ...r.map(q)) + 8, a = x.length ? 18 : 10, o = Math.max(20, I - i - ze), s = Math.max(20, m - a - Ve), c = (e) => R <= 1 ? i + o / 2 : i + o * e / (R - 1), l = (e) => {
			let t = (e - n.min) / (n.max - n.min || 1);
			return v ? a + s * t : a + s * (1 - t);
		}, u = f ?? d, p = Math.max(24, ...u.map((e) => q(e))), y = Math.max(2, Math.floor(o / (p + 16)));
		return {
			scale: n,
			tickTexts: r,
			left: i,
			top: a,
			plotWidth: o,
			plotHeight: s,
			x: c,
			y: l,
			xLabels: be(R, y).map((e) => ({
				index: e,
				x: c(e),
				text: u[e] ?? ``
			})),
			lines: z.map((e) => {
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
					path: xe(t),
					area: h && !e.ghost ? Se(t, v ? a : a + s) : ``,
					last: n
				};
			}),
			baseline: v ? a : a + s
		};
	}, [
		x.length,
		h,
		f,
		d,
		R,
		z,
		L,
		m,
		v,
		B,
		I,
		_,
		g
	]), G = (0, D.useMemo)(() => {
		let e = new Map();
		for (let t of x) t.index < 0 || t.index >= R || e.set(t.index, [...e.get(t.index) ?? [], t.label]);
		return e;
	}, [x, R]), K = (0, D.useCallback)((e) => e == null ? `—` : L.value(e), [L]), J = de({
		count: R,
		describe: (0, D.useCallback)((e) => {
			let t = z.map((t) => `${t.label} ${K(t.values[e])}`), n = G.get(e);
			return `${d[e] ?? ``}: ${t.join(`, `)}${n ? `. ${n.join(`, `)}` : ``}`;
		}, [
			d,
			z,
			G,
			K
		])
	}), { setPointer: Y } = J, fe = (0, D.useCallback)((e) => {
		if (R === 0) return;
		let t = e.currentTarget.getBoundingClientRect(), n = t.width > 0 ? I / t.width : 1, r = ((e.clientX - t.left) * n - W.left) / W.plotWidth, i = R <= 1 ? 0 : Math.round(r * (R - 1));
		Number.isFinite(i) && Y(i);
	}, [
		R,
		W.left,
		W.plotWidth,
		Y,
		I
	]), pe = (0, D.useCallback)(() => Y(null), [Y]), me = (0, D.useMemo)(() => {
		let e = z.map((e) => ({
			id: e.id,
			label: e.label,
			color: e.color,
			shape: `line`,
			pattern: e.pattern
		}));
		return x.length && S && e.push({
			id: `annotations`,
			label: S,
			color: `muted`,
			shape: `marker`
		}), e;
	}, [
		x.length,
		S,
		z
	]), X = J.active, he = (0, D.useMemo)(() => X === null ? [] : z.map((e) => ({
		id: e.id,
		label: e.label,
		value: K(e.values[X]),
		color: e.color,
		shape: `line`,
		pattern: e.pattern
	})), [
		X,
		z,
		K
	]), ge = (0, D.useMemo)(() => {
		if (!T) return [];
		let e = [{
			id: `category`,
			header: T.categoryHeader,
			isRowHeader: !0,
			cell: (e) => d[e.index] ?? ``
		}];
		for (let t of z) e.push({
			id: t.id,
			header: t.label,
			kind: `numeric`,
			cell: (e) => K(t.values[e.index])
		});
		return x.length && T.annotationHeader && e.push({
			id: `annotations`,
			header: T.annotationHeader,
			cell: (e) => G.get(e.index)?.join(`, `) ?? ``
		}), e;
	}, [
		x.length,
		d,
		z,
		G,
		T,
		K
	]), _e = (0, D.useMemo)(() => d.map((e, t) => ({ index: t })), [d]), Ce = (0, D.useCallback)((e) => String(e.index), []), we = oe({
		isLoading: a,
		error: s,
		emptyState: l,
		isEmpty: H
	}), Z = [i ? j : null, n == null ? null : O].filter(Boolean).join(` `), Te = w ?? (z.length > 1 || x.length > 0 && S !== void 0);
	return (0, U.jsx)(ie, {
		label: e,
		labelId: E,
		showLabel: t,
		busy: !!a,
		className: u,
		children: we ? (0, U.jsx)(se, {
			kind: we,
			height: m,
			children: we === `loading` ? o : we === `error` ? s : l
		}) : (0, U.jsxs)(U.Fragment, { children: [
			Te ? (0, U.jsx)(ve, {
				items: me,
				...C ? { label: C } : {},
				activeId: null
			}) : null,
			(0, U.jsxs)(`div`, {
				ref: F,
				className: `relative min-w-0`,
				children: [(0, U.jsxs)(r, {
					"aria-labelledby": E,
					...Z ? { "aria-describedby": Z } : {},
					...J.focusProps,
					className: `rounded-sm`,
					children: [i ? (0, U.jsx)(`span`, {
						id: j,
						className: `sr-only`,
						children: i
					}) : null, (0, U.jsxs)(`svg`, {
						"aria-hidden": `true`,
						focusable: `false`,
						width: `100%`,
						height: m,
						viewBox: `0 0 ${I} ${m}`,
						preserveAspectRatio: `none`,
						onPointerMove: fe,
						onPointerDown: fe,
						onPointerLeave: pe,
						className: `block touch-pan-y overflow-visible select-none`,
						children: [
							W.scale.ticks.map((e, t) => (0, U.jsxs)(`g`, { children: [(0, U.jsx)(`line`, {
								x1: W.left,
								x2: I - ze,
								y1: W.y(e),
								y2: W.y(e),
								className: c(`stroke-border`, te),
								strokeWidth: `1`
							}), (0, U.jsx)(`text`, {
								x: W.left - 8,
								y: W.y(e) + 4,
								textAnchor: `end`,
								className: c(`fill-muted text-caption tabular-nums`, V),
								children: W.tickTexts[t]
							})] }, e)),
							(0, U.jsx)(`line`, {
								x1: W.left,
								x2: I - ze,
								y1: W.baseline,
								y2: W.baseline,
								className: c(`stroke-border-strong`, P),
								strokeWidth: `1`
							}),
							W.xLabels.map((e, t) => {
								let n = q(e.text) / 2, r = t === 0 && e.x - n < 0 ? `start` : e.x + n > I ? `end` : `middle`;
								return (0, U.jsx)(`text`, {
									x: e.x,
									y: m - 6,
									textAnchor: r,
									className: c(`fill-muted text-caption`, V),
									children: e.text
								}, e.index);
							}),
							[...G.keys()].map((e) => (0, U.jsxs)(`g`, { children: [(0, U.jsx)(`line`, {
								x1: W.x(e),
								x2: W.x(e),
								y1: W.top,
								y2: W.top + W.plotHeight,
								strokeDasharray: `2 3`,
								className: c(`stroke-muted`, te)
							}), (0, U.jsx)(`path`, {
								d: `M${W.x(e) - 5} ${W.top - 12}h10l-5 7z`,
								className: c(`fill-muted`, V)
							})] }, `note-${e}`)),
							W.lines.map(({ line: e, area: t }) => t ? (0, U.jsx)(`path`, {
								d: t,
								fillOpacity: .14,
								className: c(A[e.color], `stroke-none forced-colors:hidden`)
							}, `area-${e.id}`) : null),
							X === null ? null : (0, U.jsx)(`line`, {
								x1: W.x(X),
								x2: W.x(X),
								y1: W.top,
								y2: W.top + W.plotHeight,
								className: c(`stroke-border-strong`, P),
								strokeWidth: `1`
							}),
							W.lines.map(({ line: e, path: t, last: n }) => {
								let r = M[e.pattern];
								return (0, U.jsxs)(`g`, { children: [t ? (0, U.jsx)(`path`, {
									d: t,
									fill: `none`,
									strokeWidth: e.ghost ? 1.5 : 2.25,
									strokeLinejoin: `round`,
									strokeLinecap: `round`,
									...r ? { strokeDasharray: r } : {},
									className: c(k[e.color], e.ghost ? `forced-colors:stroke-[GrayText]` : P)
								}) : null, n && !e.ghost && X === null ? (0, U.jsx)(`circle`, {
									cx: n.x,
									cy: n.y,
									r: `4`,
									strokeWidth: `2`,
									className: c(A[e.color], `stroke-surface forced-colors:fill-[CanvasText] forced-colors:stroke-[Canvas]`)
								}) : null] }, e.id);
							}),
							X === null ? null : W.lines.map(({ line: e, points: t }) => {
								let n = t[X];
								return n ? (0, U.jsx)(`circle`, {
									cx: n.x,
									cy: n.y,
									r: e.ghost ? 3 : 4.5,
									strokeWidth: `2`,
									className: c(e.ghost ? `fill-surface` : A[e.color], k[e.ghost ? `muted` : e.color], `stroke-surface forced-colors:fill-[Highlight] forced-colors:stroke-[Canvas]`)
								}, `active-${e.id}`) : null;
							})
						]
					})]
				}), X === null ? null : (0, U.jsx)(ne, {
					"aria-hidden": !0,
					x: W.x(X),
					y: W.top,
					boundary: I,
					title: d[X],
					...G.get(X) ? { note: G.get(X)?.join(`, `) } : {},
					items: he
				})]
			}),
			(0, U.jsx)(ce, { children: J.announcement }),
			(0, U.jsx)(ae, {
				description: n,
				descriptionId: O,
				children: T ? (0, U.jsx)(le, {
					trigger: T.trigger,
					caption: e,
					columns: ge,
					rows: _e,
					rowKey: Ce
				}) : null
			})
		] })
	});
}
var Ue = { role: `img` };
function We({ values: e, label: t, color: n = 1, width: r, height: i = 32, area: a = !1, showLast: o = !0, min: s, max: l, className: u }) {
	let d = (0, D.useRef)(null), f = ue(d, r ?? 120), p = r ?? f, m = (0, D.useMemo)(() => {
		let t = e.filter((e) => e !== null && Number.isFinite(e));
		if (t.length < 2) return null;
		let n = s ?? Math.min(...t), r = l ?? Math.max(...t), o = r - n || 1, c = Math.max(1, e.length - 1), u = e.map((e, t) => e === null || !Number.isFinite(e) ? null : {
			x: 3 + (p - 6) * t / c,
			y: 3 + (i - 6) * (1 - (Math.min(r, Math.max(n, e)) - n) / o)
		}), d = u.findLast((e) => e !== null) ?? null;
		return {
			line: xe(u),
			fill: a ? Se(u, i) : ``,
			last: d
		};
	}, [
		a,
		p,
		i,
		l,
		s,
		e
	]), h = (0, D.useMemo)(() => r === void 0 ? void 0 : { width: r }, [r]);
	return (0, U.jsx)(`span`, {
		ref: d,
		style: h,
		className: c(`inline-block max-w-full align-middle`, r === void 0 && `w-full`, u),
		children: (0, U.jsx)(`svg`, {
			...Ue,
			"aria-label": t,
			width: `100%`,
			height: i,
			viewBox: `0 0 ${p} ${i}`,
			preserveAspectRatio: `none`,
			className: `block overflow-visible`,
			children: m ? (0, U.jsxs)(U.Fragment, { children: [
				m.fill ? (0, U.jsx)(`path`, {
					d: m.fill,
					fillOpacity: .14,
					className: c(A[n], `stroke-none forced-colors:hidden`)
				}) : null,
				(0, U.jsx)(`path`, {
					d: m.line,
					fill: `none`,
					strokeWidth: `2`,
					strokeLinejoin: `round`,
					strokeLinecap: `round`,
					className: c(k[n], P)
				}),
				o && m.last ? (0, U.jsx)(`circle`, {
					cx: m.last.x,
					cy: m.last.y,
					r: `3`,
					className: c(A[n], `forced-colors:fill-[CanvasText]`)
				}) : null
			] }) : (0, U.jsx)(`line`, {
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
function Ge({ label: e, value: t, delta: n, hint: r, sparkline: i, sparklineLabel: a, sparklineColor: o = 1, loading: s = !1, loadingLabel: l, error: u, as: d = `div`, className: f }) {
	let p = u != null && u !== !1;
	return (0, U.jsxs)(d, {
		...s ? { "aria-busy": !0 } : {},
		className: c(`@container flex min-w-0 flex-col gap-1 rounded-lg border border-border bg-surface p-3 text-fg shadow-sm @min-[14rem]:p-4`, f),
		children: [
			(0, U.jsx)(`span`, {
				className: `min-w-0 text-body text-muted [overflow-wrap:anywhere]`,
				children: e
			}),
			s ? (0, U.jsxs)(U.Fragment, { children: [(0, U.jsx)(`span`, {
				"aria-hidden": `true`,
				className: `my-1 block h-7 w-20 max-w-full rounded-md bg-hover motion-safe:animate-pulse forced-colors:border forced-colors:border-[GrayText]`
			}), l ? (0, U.jsx)(`output`, {
				className: `sr-only`,
				children: l
			}) : null] }) : p ? (0, U.jsxs)(`p`, {
				className: `m-0 flex items-start gap-1.5 text-body font-medium text-danger`,
				children: [(0, U.jsx)(_, {
					"aria-hidden": `true`,
					className: `mt-0.5 size-4 shrink-0`
				}), (0, U.jsx)(`span`, {
					className: `min-w-0 [overflow-wrap:anywhere]`,
					children: u
				})]
			}) : (0, U.jsxs)(U.Fragment, { children: [
				(0, U.jsx)(`span`, {
					className: `min-w-0 text-heading leading-tight font-semibold tracking-tight tabular-nums [overflow-wrap:anywhere] @min-[12rem]:text-display`,
					children: t
				}),
				n == null ? null : (0, U.jsx)(`span`, {
					className: `min-w-0`,
					children: n
				}),
				i && a ? (0, U.jsx)(We, {
					values: i,
					label: a,
					color: o,
					height: 28,
					className: `mt-1`
				}) : null
			] }),
			r == null ? null : (0, U.jsx)(`span`, {
				className: `min-w-0 text-caption text-muted [overflow-wrap:anywhere]`,
				children: r
			})
		]
	});
}
var Ke = {
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
}, qe = {
	accent: `stroke-accent`,
	ok: `stroke-ok`,
	warn: `stroke-warn`,
	danger: `stroke-danger`
}, Je = {
	good: `text-ok`,
	fair: `text-warn`,
	poor: `text-danger`
}, Ye = {
	good: v,
	fair: y,
	poor: f
}, Xe = {
	good: `ok`,
	fair: `warn`,
	poor: `danger`
}, Ze = {
	good: 90,
	fair: 60
};
function Qe({ value: e, minValue: t = 0, maxValue: n = 100, label: r, showLabel: i = !1, size: o = `md`, tone: s = `auto`, thresholds: l = Ze, ratingLabels: u, valueLabel: d, emptyLabel: f, className: p }) {
	let m = (0, D.useId)(), { box: h, stroke: g, text: _ } = Ke[o], v = (h - g) / 2, y = 2 * Math.PI * v, x = e === null || !Number.isFinite(e), S = x ? t : Math.min(n, Math.max(t, e)), C = S >= l.good ? `good` : S >= l.fair ? `fair` : `poor`, w = s === `auto` ? Xe[C] : s, T = Ye[C], E = !x && u !== void 0, O = (e) => (0, U.jsxs)(`span`, {
		className: `relative inline-grid shrink-0 place-items-center`,
		children: [(0, U.jsxs)(`svg`, {
			"aria-hidden": `true`,
			focusable: `false`,
			width: h,
			height: h,
			viewBox: `0 0 ${h} ${h}`,
			className: `block -rotate-90`,
			children: [(0, U.jsx)(`circle`, {
				cx: h / 2,
				cy: h / 2,
				r: v,
				fill: `none`,
				strokeWidth: g,
				className: `stroke-hover forced-colors:stroke-[GrayText]`
			}), !x && e > 0 ? (0, U.jsx)(`circle`, {
				cx: h / 2,
				cy: h / 2,
				r: v,
				fill: `none`,
				strokeWidth: g,
				strokeLinecap: `round`,
				strokeDasharray: `${e / 100 * y} ${y}`,
				className: c(qe[w], `transition-[stroke-dasharray] duration-(--sk-duration-slow) ease-out forced-colors:stroke-[Highlight]`, H)
			}) : null]
		}), (0, U.jsx)(`span`, {
			"aria-hidden": `true`,
			className: c(`absolute inset-0 grid place-items-center font-bold text-fg tabular-nums`, _),
			children: x ? `—` : Math.round(S)
		})]
	}), ee = (0, U.jsxs)(U.Fragment, { children: [
		i ? (0, U.jsx)(a, {
			className: `max-w-full text-center text-caption font-medium text-fg [overflow-wrap:anywhere]`,
			children: r
		}) : null,
		E ? (0, U.jsxs)(`span`, {
			id: m,
			className: c(`inline-flex items-center gap-1 text-caption font-semibold`, Je[C]),
			children: [(0, U.jsx)(T, {
				"aria-hidden": `true`,
				focusable: `false`,
				className: `size-3.5 shrink-0`
			}), u[C]]
		}) : null,
		x && f ? (0, U.jsx)(`span`, {
			className: `max-w-full text-center text-caption text-muted [overflow-wrap:anywhere]`,
			children: f
		}) : null
	] });
	return (0, U.jsx)(b, {
		value: S,
		minValue: t,
		maxValue: n,
		...i ? {} : { "aria-label": r },
		...x ? { valueLabel: f ?? `—` } : d ? { valueLabel: d } : {},
		...E ? { "aria-describedby": m } : {},
		className: c(`inline-flex max-w-full flex-col items-center gap-1.5 text-fg`, p),
		children: ({ percentage: e }) => (0, U.jsxs)(U.Fragment, { children: [O(e), ee] })
	});
}
function $e({ label: e, showLabel: t = !1, description: n, keyboardHint: a, isLoading: o, loadingLabel: s, error: c, emptyState: l, className: u, segments: d, rows: f, mode: p = `value`, formatValue: m, formatShare: h, showValues: g = !1, showTotal: _, legendLabel: v, table: y }) {
	let b = (0, D.useId)(), x = (0, D.useId)(), S = (0, D.useId)(), { locale: C } = i(), w = re(m), T = (0, D.useMemo)(() => {
		if (h) return h;
		let e = new Intl.NumberFormat(C, {
			style: `percent`,
			maximumFractionDigits: 1
		});
		return (t) => e.format(t);
	}, [h, C]), E = (0, D.useMemo)(() => d.map((e, t) => ({
		segment: e,
		color: e.color ?? ee(t)
	})), [d]), O = (0, D.useMemo)(() => f.map((e) => {
		let t = E.map(({ segment: t, color: n }) => {
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
	}), [E, f]), k = Math.max(0, ...O.map((e) => e.total)), A = O.every((e) => e.total === 0), j = _ ?? p === `value`, M = (0, D.useCallback)((e) => p === `share` ? `${T(e.share)} (${w.value(e.value)})` : w.value(e.value), [
		w,
		p,
		T
	]), N = (0, D.useCallback)((e) => {
		let t = O[e];
		if (!t) return ``;
		let n = t.parts.map((e) => `${e.segment.label} ${M(e)}`).join(`, `);
		return `${t.row.label}${j ? ` ${w.value(t.total)}` : ``}: ${n}`;
	}, [
		O,
		w,
		M,
		j
	]), P = de({
		count: f.length,
		describe: N,
		start: `first`
	}), { setPointer: F } = P, I = P.active, L = (0, D.useRef)(null), [R, z] = (0, D.useState)(null);
	(0, D.useLayoutEffect)(() => {
		let e = L.current, t = I === null ? null : e?.querySelector(`[data-index="${I}"]`);
		z(!e || !t ? null : {
			x: e.clientWidth / 2,
			y: t.offsetTop,
			width: e.clientWidth
		});
	}, [I]);
	let B = (0, D.useCallback)((e) => {
		let t = e.target.closest(`[data-index]`);
		t && F(Number(t.dataset.index));
	}, [F]), te = (0, D.useCallback)(() => F(null), [F]), V = (0, D.useMemo)(() => E.map(({ segment: e, color: t }) => ({
		id: e.id,
		label: e.label,
		color: t,
		shape: `block`
	})), [E]), H = I === null ? void 0 : O[I], W = (0, D.useMemo)(() => H?.parts.map((e) => ({
		id: e.segment.id,
		label: e.segment.label,
		value: M(e),
		color: e.color,
		shape: `block`
	})) ?? [], [H, M]), G = (0, D.useMemo)(() => {
		if (!y) return [];
		let e = [{
			id: `category`,
			header: y.categoryHeader,
			isRowHeader: !0,
			cell: (e) => e.row.label
		}];
		return E.forEach(({ segment: t }, n) => e.push({
			id: `segment-${t.id}`,
			header: t.label,
			kind: `numeric`,
			cell: (e) => {
				let t = e.parts[n];
				return t ? M(t) : ``;
			}
		})), y.totalHeader && e.push({
			id: `total`,
			header: y.totalHeader,
			kind: `numeric`,
			cell: (e) => w.value(e.total)
		}), e;
	}, [
		E,
		w,
		M,
		y
	]), K = (0, D.useCallback)((e) => e.row.id, []), q = oe({
		isLoading: o,
		error: c,
		emptyState: l,
		isEmpty: A
	}), ue = [a ? S : null, n == null ? null : x].filter(Boolean).join(` `);
	return (0, U.jsx)(ie, {
		label: e,
		labelId: b,
		showLabel: t,
		busy: !!o,
		className: u,
		children: q ? (0, U.jsx)(se, {
			kind: q,
			height: Math.max(96, f.length * 44),
			children: q === `loading` ? s : q === `error` ? c : l
		}) : (0, U.jsxs)(U.Fragment, { children: [
			(0, U.jsx)(ve, {
				items: V,
				...v ? { label: v } : {}
			}),
			(0, U.jsxs)(`div`, {
				className: `relative min-w-0`,
				children: [(0, U.jsxs)(r, {
					"aria-labelledby": b,
					...ue ? { "aria-describedby": ue } : {},
					...P.focusProps,
					className: `rounded-sm`,
					children: [a ? (0, U.jsx)(`span`, {
						id: S,
						className: `sr-only`,
						children: a
					}) : null, (0, U.jsx)(`ul`, {
						ref: L,
						onPointerOver: B,
						onPointerLeave: te,
						className: `relative m-0 flex min-w-0 list-none flex-col gap-1 p-0`,
						children: O.map((e, t) => (0, U.jsx)(et, {
							index: t,
							label: e.row.label,
							total: j ? w.value(e.total) : void 0,
							parts: e.parts,
							width: p === `share` ? +(e.total > 0) : k > 0 ? e.total / k : 0,
							active: I === t,
							showValues: g,
							partText: M
						}, e.row.id))
					})]
				}), H && R ? (0, U.jsx)(ne, {
					"aria-hidden": !0,
					x: R.x,
					y: R.y,
					boundary: R.width,
					title: H.row.label,
					items: W
				}) : null]
			}),
			(0, U.jsx)(ce, { children: P.announcement }),
			(0, U.jsx)(ae, {
				description: n,
				descriptionId: x,
				children: y ? (0, U.jsx)(le, {
					trigger: y.trigger,
					caption: e,
					columns: G,
					rows: O,
					rowKey: K
				}) : null
			})
		] })
	});
}
function et({ index: e, label: t, total: n, parts: r, width: i, active: a, showValues: o, partText: s }) {
	let l = (0, D.useMemo)(() => ({ width: `${i * 100}%` }), [i]), u = r.filter((e) => e.value > 0);
	return (0, U.jsxs)(`li`, {
		"data-index": e,
		className: c(`flex min-w-0 flex-col gap-1.5 rounded-md px-2 py-1.5 transition-colors`, H, a && `bg-hover`),
		children: [
			(0, U.jsxs)(`span`, {
				className: `flex min-w-0 flex-wrap items-baseline justify-between gap-x-3 text-body`,
				children: [(0, U.jsx)(`span`, {
					className: `min-w-0 [overflow-wrap:anywhere]`,
					children: t
				}), n === void 0 ? null : (0, U.jsx)(`span`, {
					className: `font-semibold tabular-nums`,
					children: n
				})]
			}),
			(0, U.jsx)(`span`, {
				"aria-hidden": `true`,
				className: `block h-3 min-w-0 rounded-full bg-hover forced-colors:outline-1 forced-colors:outline-[CanvasText] forced-colors:outline-solid`,
				children: (0, U.jsx)(`span`, {
					style: l,
					className: `flex h-full min-w-0 overflow-hidden rounded-full`,
					children: u.map((e) => (0, U.jsx)(tt, { part: e }, e.segment.id))
				})
			}),
			o ? (0, U.jsx)(`span`, {
				className: `flex min-w-0 flex-wrap gap-x-3 gap-y-0.5 text-caption text-muted`,
				children: r.map((e) => (0, U.jsxs)(`span`, {
					className: `inline-flex items-center gap-1`,
					children: [
						(0, U.jsx)(W, {
							color: e.color,
							shape: `block`
						}),
						(0, U.jsx)(`span`, { children: e.segment.label }),
						(0, U.jsx)(`span`, {
							className: `font-semibold text-fg tabular-nums`,
							children: s(e)
						})
					]
				}, e.segment.id))
			}) : (0, U.jsx)(`span`, {
				className: `sr-only`,
				children: r.map((e) => `${e.segment.label} ${s(e)}`).join(`, `)
			})
		]
	});
}
function tt({ part: e }) {
	let t = (0, D.useMemo)(() => ({
		flexGrow: e.value,
		flexBasis: 0
	}), [e.value]);
	return (0, U.jsx)(`span`, {
		"data-color": e.color,
		style: t,
		className: c(`block h-full min-w-0.5 border-e-2 border-surface last:border-e-0 forced-colors:border-[Canvas]`, j[e.color], R[e.color], z)
	});
}
var nt = e({ default: () => Dt });
function rt(e) {
	let t = e;
	return () => (t = (t * 1103515245 + 12345) % 2147483648, t / 2147483648);
}
var it = 864e5, at = Date.UTC(2026, 9, 11), ot = new Intl.DateTimeFormat(`en-GB`, {
	day: `numeric`,
	month: `long`,
	year: `numeric`,
	timeZone: `UTC`
}), st = new Intl.DateTimeFormat(`en-GB`, {
	day: `numeric`,
	month: `short`,
	timeZone: `UTC`
}), ct = Array.from({ length: 28 }, (e, t) => new Date(at + t * it)), lt = ct.map((e) => ot.format(e)), ut = ct.map((e) => st.format(e)), dt = rt(7), $ = ct.map((e, t) => {
	let n = [0, 6].includes(e.getUTCDay());
	return Math.round((n ? 820 : 1240) + t * 14 + dt() * 260);
}), ft = $.map((e) => Math.round(e * (.035 + dt() * .02))), pt = $.map((e) => Math.round(e * (.82 + dt() * .12))), mt = [{
	id: `visits`,
	label: `Visits`,
	values: $
}, {
	id: `previous`,
	label: `Previous 28 days`,
	values: pt,
	ghost: !0
}], ht = [
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
], gt = ct.slice(-14).map((e, t) => {
	let n = t === 6 ? 41 : t === 11 ? 33 : Math.round(3 + dt() * 9);
	return {
		id: e.toISOString(),
		label: ot.format(e),
		axisLabel: st.format(e),
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
}), _t = [
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
], vt = rt(42), yt = Array.from({ length: 365 }, (e, t) => {
	let n = new Date(Date.UTC(2025, 10, 8) + t * it), r = [0, 6].includes(n.getUTCDay()), i = vt(), a = r ? i > .8 ? Math.round(i * 4) : 0 : i > .25 ? Math.round(i * 14) : 0, o = Math.round(a * .6);
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
}), bt = yt.reduce((e, t) => e + t.value, 0), xt = yt.reduce((e, t) => {
	let n = t.value > 0 ? e.run + 1 : 0;
	return {
		run: n,
		best: Math.max(e.best, n)
	};
}, {
	run: 0,
	best: 0
}).best, St = `Visits, last 28 days: from ${$[0] ?? 0} to ${$.at(-1) ?? 0}`, Ct = `Sign-ups, last 28 days: between ${Math.min(...ft)} and ${Math.max(...ft)} a day`, wt = (e) => `${e} ${e === 1 ? `commit` : `commits`}`, Tt = new Intl.NumberFormat(`en-GB`), Et = {
	up: `Up`,
	down: `Down`,
	flat: `No change`
}, Dt = {
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
			render: () => (0, U.jsxs)(`div`, {
				className: `flex flex-col gap-8`,
				children: [
					(0, U.jsx)(He, {
						label: `Visits, last 28 days`,
						showLabel: !0,
						description: `${Tt.format($.at(-1) ?? 0)} visits on the last day; lowest ${Tt.format(Math.min(...$))}, highest ${Tt.format(Math.max(...$))}.`,
						keyboardHint: `Use the arrow keys to read each day.`,
						categories: lt,
						axisLabels: ut,
						series: mt,
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
					(0, U.jsx)(He, {
						label: `Visits by device`,
						showLabel: !0,
						description: `Mobile has no data for two days while tracking was paused.`,
						keyboardHint: `Use the arrow keys to read each day.`,
						categories: lt,
						axisLabels: ut,
						series: ht,
						height: 180,
						legendLabel: `Devices`,
						table: {
							trigger: `Show as table`,
							categoryHeader: `Date`
						}
					}),
					(0, U.jsx)(He, {
						label: `Sign-ups per day`,
						showLabel: !0,
						categories: lt,
						axisLabels: ut,
						series: [{
							id: `signups`,
							label: `Sign-ups`,
							values: ft
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
			render: () => (0, U.jsxs)(`div`, {
				className: `flex flex-col gap-4`,
				children: [
					(0, U.jsx)(He, {
						label: `Visits`,
						categories: lt,
						series: mt,
						height: 120,
						isLoading: !0,
						loadingLabel: `Loading visits`
					}),
					(0, U.jsx)(He, {
						label: `Visits`,
						categories: lt,
						series: mt,
						height: 120,
						error: `The report could not be loaded. Try again in a minute.`
					}),
					(0, U.jsx)(De, {
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
			render: () => (0, U.jsxs)(`div`, {
				className: `flex flex-col gap-8`,
				children: [(0, U.jsx)(De, {
					label: `Errors per day, last 14 days`,
					showLabel: !0,
					description: `Two spikes: 41 errors and 33 errors.`,
					valueLabel: `Errors`,
					data: gt,
					highlightLabel: `Spike`,
					keyboardHint: `Use the arrow keys to read each day.`,
					table: {
						trigger: `Show as table`,
						categoryHeader: `Date`
					}
				}), (0, U.jsx)(De, {
					orientation: `rows`,
					ordered: !0,
					label: `Top pages this month`,
					showLabel: !0,
					valueLabel: `Visits`,
					data: _t,
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
			render: () => (0, U.jsxs)(`div`, {
				className: `flex flex-col gap-8`,
				children: [(0, U.jsx)($e, {
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
				}), (0, U.jsx)($e, {
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
			render: () => (0, U.jsxs)(`div`, {
				className: `flex flex-col gap-8`,
				children: [
					(0, U.jsx)(Re, {
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
					(0, U.jsx)(Re, {
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
					(0, U.jsx)(Re, {
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
			render: () => (0, U.jsxs)(`div`, {
				className: `flex flex-col gap-4`,
				children: [(0, U.jsxs)(`div`, {
					className: `grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-3 text-body`,
					children: [
						(0, U.jsx)(`span`, { children: `Visits` }),
						(0, U.jsx)(We, {
							values: $,
							label: St,
							width: 120
						}),
						(0, U.jsx)(`span`, { children: `Sign-ups` }),
						(0, U.jsx)(We, {
							values: ft,
							label: Ct,
							width: 120,
							color: 2,
							area: !0
						}),
						(0, U.jsx)(`span`, { children: `Load time` }),
						(0, U.jsx)(We, {
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
						(0, U.jsx)(`span`, { children: `Retries` }),
						(0, U.jsx)(We, {
							values: [4],
							label: `Retries: not enough data for a trend`,
							width: 120
						})
					]
				}), (0, U.jsx)(We, {
					values: $,
					label: St,
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
			render: () => (0, U.jsx)(_e, {
				label: `Contributions, last 12 months`,
				showLabel: !0,
				description: `${bt} commits; the longest streak was ${xt} days.`,
				days: yt,
				formatValue: wt,
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
			render: () => (0, U.jsxs)(`div`, {
				className: `flex flex-wrap items-start gap-6`,
				children: [
					(0, U.jsx)(Qe, {
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
					(0, U.jsx)(Qe, {
						value: 72,
						label: `Accessibility`,
						showLabel: !0,
						ratingLabels: {
							good: `Good`,
							fair: `Needs work`,
							poor: `Poor`
						}
					}),
					(0, U.jsx)(Qe, {
						value: 38,
						label: `Best practices`,
						showLabel: !0,
						ratingLabels: {
							good: `Good`,
							fair: `Needs work`,
							poor: `Poor`
						}
					}),
					(0, U.jsx)(Qe, {
						value: null,
						label: `Search`,
						showLabel: !0,
						emptyLabel: `Not measured yet`
					}),
					(0, U.jsx)(Qe, {
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
			render: () => (0, U.jsxs)(`div`, {
				className: `flex flex-col gap-3`,
				children: [
					(0, U.jsx)(Q, {
						value: .224,
						directionLabels: Et,
						assessmentLabels: {
							good: `better`,
							bad: `worse`
						},
						comparison: `vs previous 28 days`
					}),
					(0, U.jsx)(Q, {
						value: .081,
						goodWhen: `down`,
						directionLabels: Et,
						assessmentLabels: {
							good: `better`,
							bad: `worse`
						},
						comparison: `load time vs last week`
					}),
					(0, U.jsx)(Q, {
						value: -.034,
						directionLabels: Et,
						assessmentLabels: {
							good: `better`,
							bad: `worse`
						},
						variant: `pill`
					}),
					(0, U.jsx)(Q, {
						value: 0,
						directionLabels: Et,
						comparison: `vs yesterday`
					}),
					(0, U.jsx)(Q, {
						value: -.42,
						goodWhen: `neither`,
						directionLabels: Et,
						variant: `pill`,
						comparison: `share of mobile visits`
					}),
					(0, U.jsx)(Q, {
						value: null,
						directionLabels: Et,
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
			render: () => (0, U.jsxs)(`ul`, {
				className: `m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,10rem),1fr))] gap-3 p-0`,
				children: [
					(0, U.jsx)(Ge, {
						as: `li`,
						label: `Visits`,
						value: `38,412`,
						delta: (0, U.jsx)(Q, {
							value: .224,
							directionLabels: Et,
							assessmentLabels: {
								good: `better`,
								bad: `worse`
							},
							comparison: `vs previous 28 days`
						}),
						sparkline: $,
						sparklineLabel: St,
						hint: `Last 28 days`
					}),
					(0, U.jsx)(Ge, {
						as: `li`,
						label: `Median load time`,
						value: `1.4 s`,
						delta: (0, U.jsx)(Q, {
							value: -.12,
							goodWhen: `down`,
							directionLabels: Et,
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
					(0, U.jsx)(Ge, {
						as: `li`,
						label: `Sign-ups`,
						value: ``,
						loading: !0,
						loadingLabel: `Loading sign-ups`
					}),
					(0, U.jsx)(Ge, {
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
			render: () => (0, U.jsxs)(`div`, {
				className: `flex flex-col gap-4`,
				children: [
					(0, U.jsx)(ve, {
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
					(0, U.jsx)(ve, {
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
					(0, U.jsx)(ne, {
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
export { nt as t };
