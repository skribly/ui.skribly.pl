import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { n, t as r } from "./jsx-runtime.yrTYNGQT.js";
import { a as i, t as a } from "./internal.D6jB8413.js";
import { r as o, t as s } from "./createLucideIcon.npgQlVHx.js";
import { t as c } from "./arrow-down.Bfv8ZYrH.js";
var l = {
	name: `arrow-up-down`,
	size: 24,
	node: [
		[`path`, {
			d: `m21 16-4 4-4-4`,
			key: `f6ql7i`
		}],
		[`path`, {
			d: `M17 20V4`,
			key: `1ejh1v`
		}],
		[`path`, {
			d: `m3 8 4-4 4 4`,
			key: `11wl7u`
		}],
		[`path`, {
			d: `M7 4v16`,
			key: `1glfcx`
		}]
	]
};
l.node;
var u = s(l), d = {
	name: `arrow-up`,
	size: 24,
	node: [[`path`, {
		d: `m5 12 7-7 7 7`,
		key: `hav0vg`
	}], [`path`, {
		d: `M12 19V5`,
		key: `x0mq9r`
	}]]
};
d.node;
var f = s(d), p = e(t(), 1), m = r();
function h({ children: e, direction: t, sortable: r = !0, onSort: i, align: a = `start`, className: s }) {
	let l = r || t ? (0, m.jsx)(t === `ascending` ? f : t === `descending` ? c : u, {
		"aria-hidden": `true`,
		className: n(`size-3.5 shrink-0`, t ? `text-fg` : `text-muted opacity-70`)
	}) : null, d = n(`inline-flex min-w-0 items-center gap-1`, a === `end` && `flex-row-reverse text-end`, s);
	return i ? (0, m.jsxs)(o, {
		onPress: i,
		className: n(d, `-mx-1 min-h-6 cursor-default rounded-sm px-1 outline-hidden data-focus-visible:outline-solid data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-selected`),
		children: [(0, m.jsx)(`span`, {
			className: `min-w-0 [overflow-wrap:anywhere]`,
			children: e
		}), l]
	}) : (0, m.jsxs)(`span`, {
		className: d,
		children: [(0, m.jsx)(`span`, {
			className: `min-w-0 [overflow-wrap:anywhere]`,
			children: e
		}), l]
	});
}
function g(e) {
	let [t, n] = (0, p.useState)(!1);
	return (0, p.useEffect)(() => {
		let t = e.current;
		if (!t || typeof ResizeObserver > `u`) return;
		let r = () => n(t.scrollWidth > t.clientWidth + 1), i = new ResizeObserver(r);
		return i.observe(t), t.firstElementChild && i.observe(t.firstElementChild), r(), () => i.disconnect();
	}, [e]), t;
}
var _ = {
	text: `text-start`,
	numeric: `text-end tabular-nums`,
	actions: `w-px whitespace-nowrap text-end`
};
function v({ caption: e, captionHidden: t = !1, columns: r, rows: o, rowKey: s, layout: c = `scroll`, sort: l, onSortChange: u, emptyState: d, isLoading: f, loadingLabel: v, error: y, className: b, tableClassName: x }) {
	let S = (0, p.useId)(), C = (0, p.useRef)(null), w = g(C), T = c === `stack`, E = i({
		emptyState: o.length === 0 ? d : void 0,
		isLoading: f,
		loadingLabel: v,
		error: y
	}), D = T ? {
		table: `table`,
		group: `rowgroup`,
		row: `row`,
		column: `columnheader`,
		rowHeader: `rowheader`,
		cell: `cell`
	} : void 0, O = (0, p.useCallback)((e) => {
		u && u({
			column: e,
			direction: l?.column === e && l.direction === `ascending` ? `descending` : `ascending`
		});
	}, [u, l]);
	return (0, m.jsx)(`div`, {
		className: n(`@container min-w-0`, b),
		children: (0, m.jsx)(`div`, {
			ref: C,
			...w ? {
				role: `region`,
				"aria-labelledby": S,
				tabIndex: 0
			} : {},
			className: n(`relative max-w-full overflow-x-auto rounded-lg border border-border bg-surface`, T && `@max-xl:overflow-visible @max-xl:border-0 @max-xl:bg-transparent`),
			children: (0, m.jsxs)(`table`, {
				role: D?.table,
				"aria-busy": f ? !0 : void 0,
				className: n(`w-full border-separate border-spacing-0 text-start text-body text-fg`, T && `@max-xl:block`, x),
				children: [
					(0, m.jsx)(`caption`, {
						id: S,
						className: n(t ? `sr-only` : `border-b border-border px-4 py-3 text-start text-title font-semibold`, !t && T && `@max-xl:block @max-xl:border-0 @max-xl:px-0 @max-xl:pt-0`),
						children: e
					}),
					(0, m.jsx)(`thead`, {
						role: D?.group,
						className: n(T && `@max-xl:block`),
						children: (0, m.jsx)(`tr`, {
							role: D?.row,
							className: n(T && `@max-xl:flex @max-xl:flex-wrap @max-xl:gap-x-4 @max-xl:gap-y-1 @max-xl:pb-2`),
							children: r.map((e) => {
								let t = l?.column === e.id ? l.direction : void 0, r = e.kind ?? `text`;
								return (0, m.jsx)(`th`, {
									role: D?.column,
									scope: `col`,
									"aria-sort": e.allowsSorting ? t ?? `none` : void 0,
									className: n(`border-b border-border bg-sunken px-4 py-2.5 align-bottom text-label font-semibold text-muted uppercase`, _[r], e.hideHeader && `sr-only`, T && (e.allowsSorting && u ? `@max-xl:border-0 @max-xl:bg-transparent @max-xl:p-0` : `@max-xl:sr-only`)),
									children: e.allowsSorting ? (0, m.jsx)(h, {
										direction: t,
										align: r === `numeric` ? `end` : `start`,
										...u ? { onSort: () => O(e.id) } : {},
										children: e.header
									}) : e.header
								}, e.id);
							})
						})
					}),
					(0, m.jsx)(`tbody`, {
						role: D?.group,
						className: n(T && `@max-xl:flex @max-xl:flex-col @max-xl:gap-2`),
						children: E ? (0, m.jsx)(`tr`, {
							role: D?.row,
							className: n(T && `@max-xl:block @max-xl:rounded-lg @max-xl:border @max-xl:border-border @max-xl:bg-surface`),
							children: (0, m.jsx)(`td`, {
								role: D?.cell,
								colSpan: r.length,
								className: n(T && `@max-xl:block`),
								children: (0, m.jsx)(a, {
									kind: E.kind,
									children: E.content
								})
							})
						}) : o.map((e) => (0, m.jsx)(`tr`, {
							role: D?.row,
							className: n(`transition-colors hover:bg-hover [&:last-child>*]:border-b-0`, T && `@max-xl:flex @max-xl:flex-col @max-xl:rounded-lg @max-xl:border @max-xl:border-border @max-xl:bg-surface @max-xl:px-3 @max-xl:py-2 @max-xl:[&>*]:border-b-0`),
							children: r.map((t) => {
								let r = t.isRowHeader ? `th` : `td`, i = t.kind ?? `text`;
								return (0, m.jsxs)(r, {
									role: t.isRowHeader ? D?.rowHeader : D?.cell,
									...t.isRowHeader ? { scope: `row` } : {},
									className: n(`border-b border-border px-4 py-3 align-middle [overflow-wrap:anywhere]`, t.isRowHeader && `font-medium`, _[i], T && (i === `actions` || t.hideHeader ? `@max-xl:flex @max-xl:w-auto @max-xl:justify-end @max-xl:px-0 @max-xl:pt-2 @max-xl:pb-1` : `@max-xl:grid @max-xl:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] @max-xl:gap-3 @max-xl:px-0 @max-xl:py-1.5 @max-xl:text-start`)),
									children: [T && i !== `actions` && !t.hideHeader ? (0, m.jsx)(`span`, {
										"aria-hidden": `true`,
										className: `hidden text-caption font-medium text-muted @max-xl:block`,
										children: t.header
									}) : null, T ? (0, m.jsx)(`span`, {
										className: `min-w-0`,
										children: t.cell(e)
									}) : t.cell(e)]
								}, t.id);
							})
						}, s(e)))
					})
				]
			})
		})
	});
}
export { h as n, f as r, v as t };
