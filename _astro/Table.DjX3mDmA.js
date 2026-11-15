import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { F as n, I as r, R as i, j as a } from "./doc.DoLlUurT.js";
import { a as o, t as s } from "./internal.CsNp8ZIU.js";
var c = e(t(), 1), l = n(), u = a(`arrow.up`), d = a(`arrow.down`), f = a(`sort.none`);
function p({ children: e, direction: t, sortable: n = !0, onSort: a, align: o = `start`, className: s }) {
	let c = n || t ? (0, l.jsx)(t === `ascending` ? u : t === `descending` ? d : f, {
		"aria-hidden": `true`,
		className: r(`size-3.5 shrink-0`, t ? `text-fg` : `text-muted opacity-70`)
	}) : null, p = r(`inline-flex min-w-0 items-center gap-1`, o === `end` && `flex-row-reverse text-end`, s);
	return a ? (0, l.jsxs)(i, {
		onPress: a,
		className: r(p, `-mx-1 min-h-6 cursor-default rounded-sm px-1 outline-hidden data-focus-visible:outline-solid data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-selected`),
		children: [(0, l.jsx)(`span`, {
			className: `min-w-0 [overflow-wrap:anywhere]`,
			children: e
		}), c]
	}) : (0, l.jsxs)(`span`, {
		className: p,
		children: [(0, l.jsx)(`span`, {
			className: `min-w-0 [overflow-wrap:anywhere]`,
			children: e
		}), c]
	});
}
function m(e) {
	let [t, n] = (0, c.useState)(!1);
	return (0, c.useEffect)(() => {
		let t = e.current;
		if (!t || typeof ResizeObserver > `u`) return;
		let r = () => n(t.scrollWidth > t.clientWidth + 1), i = new ResizeObserver(r);
		return i.observe(t), t.firstElementChild && i.observe(t.firstElementChild), r(), () => i.disconnect();
	}, [e]), t;
}
var h = {
	text: `text-start`,
	numeric: `text-end tabular-nums`,
	actions: `w-px whitespace-nowrap text-end`
};
function g({ caption: e, captionHidden: t = !1, columns: n, rows: i, rowKey: a, layout: u = `scroll`, sort: d, onSortChange: f, emptyState: g, isLoading: _, loadingLabel: v, error: y, className: b, tableClassName: x }) {
	let S = (0, c.useId)(), C = (0, c.useRef)(null), w = m(C), T = u === `stack`, E = o({
		emptyState: i.length === 0 ? g : void 0,
		isLoading: _,
		loadingLabel: v,
		error: y
	}), D = T ? {
		table: `table`,
		group: `rowgroup`,
		row: `row`,
		column: `columnheader`,
		rowHeader: `rowheader`,
		cell: `cell`
	} : void 0, O = (0, c.useCallback)((e) => {
		f && f({
			column: e,
			direction: d?.column === e && d.direction === `ascending` ? `descending` : `ascending`
		});
	}, [f, d]);
	return (0, l.jsx)(`div`, {
		className: r(`@container min-w-0`, b),
		children: (0, l.jsx)(`div`, {
			ref: C,
			...w ? {
				role: `region`,
				"aria-labelledby": S,
				tabIndex: 0
			} : {},
			className: r(`relative max-w-full overflow-x-auto rounded-lg border border-border bg-surface`, T && `@max-xl:overflow-visible @max-xl:border-0 @max-xl:bg-transparent`),
			children: (0, l.jsxs)(`table`, {
				role: D?.table,
				"aria-busy": _ ? !0 : void 0,
				className: r(`w-full border-separate border-spacing-0 text-start text-body text-fg`, T && `@max-xl:block`, x),
				children: [
					(0, l.jsx)(`caption`, {
						id: S,
						className: r(t ? `sr-only` : `border-b border-border px-4 py-3 text-start text-title font-semibold`, !t && T && `@max-xl:block @max-xl:border-0 @max-xl:px-0 @max-xl:pt-0`),
						children: e
					}),
					(0, l.jsx)(`thead`, {
						role: D?.group,
						className: r(T && `@max-xl:block`),
						children: (0, l.jsx)(`tr`, {
							role: D?.row,
							className: r(T && `@max-xl:flex @max-xl:flex-wrap @max-xl:gap-x-4 @max-xl:gap-y-1 @max-xl:pb-2`),
							children: n.map((e) => {
								let t = d?.column === e.id ? d.direction : void 0, n = e.kind ?? `text`;
								return (0, l.jsx)(`th`, {
									role: D?.column,
									scope: `col`,
									"aria-sort": e.allowsSorting ? t ?? `none` : void 0,
									className: r(`border-b border-border bg-sunken px-4 py-2.5 align-bottom text-label font-semibold text-muted uppercase`, h[n], e.hideHeader && `sr-only`, T && (e.allowsSorting && f ? `@max-xl:border-0 @max-xl:bg-transparent @max-xl:p-0` : `@max-xl:sr-only`)),
									children: e.allowsSorting ? (0, l.jsx)(p, {
										direction: t,
										align: n === `numeric` ? `end` : `start`,
										...f ? { onSort: () => O(e.id) } : {},
										children: e.header
									}) : e.header
								}, e.id);
							})
						})
					}),
					(0, l.jsx)(`tbody`, {
						role: D?.group,
						className: r(T && `@max-xl:flex @max-xl:flex-col @max-xl:gap-2`),
						children: E ? (0, l.jsx)(`tr`, {
							role: D?.row,
							className: r(T && `@max-xl:block @max-xl:rounded-lg @max-xl:border @max-xl:border-border @max-xl:bg-surface`),
							children: (0, l.jsx)(`td`, {
								role: D?.cell,
								colSpan: n.length,
								className: r(T && `@max-xl:block`),
								children: (0, l.jsx)(s, {
									kind: E.kind,
									children: E.content
								})
							})
						}) : i.map((e) => (0, l.jsx)(`tr`, {
							role: D?.row,
							className: r(`transition-colors hover:bg-hover [&:last-child>*]:border-b-0`, T && `@max-xl:flex @max-xl:flex-col @max-xl:rounded-lg @max-xl:border @max-xl:border-border @max-xl:bg-surface @max-xl:px-3 @max-xl:py-2 @max-xl:[&>*]:border-b-0`),
							children: n.map((t) => {
								let n = t.isRowHeader ? `th` : `td`, i = t.kind ?? `text`;
								return (0, l.jsxs)(n, {
									role: t.isRowHeader ? D?.rowHeader : D?.cell,
									...t.isRowHeader ? { scope: `row` } : {},
									className: r(`border-b border-border px-4 py-3 align-middle [overflow-wrap:anywhere]`, t.isRowHeader && `font-medium`, h[i], T && (i === `actions` || t.hideHeader ? `@max-xl:flex @max-xl:w-auto @max-xl:justify-end @max-xl:px-0 @max-xl:pt-2 @max-xl:pb-1` : `@max-xl:grid @max-xl:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] @max-xl:gap-3 @max-xl:px-0 @max-xl:py-1.5 @max-xl:text-start`)),
									children: [T && i !== `actions` && !t.hideHeader ? (0, l.jsx)(`span`, {
										"aria-hidden": `true`,
										className: `hidden text-caption font-medium text-muted @max-xl:block`,
										children: t.header
									}) : null, T ? (0, l.jsx)(`span`, {
										className: `min-w-0`,
										children: t.cell(e)
									}) : t.cell(e)]
								}, t.id);
							})
						}, a(e)))
					})
				]
			})
		})
	});
}
export { p as n, g as t };
