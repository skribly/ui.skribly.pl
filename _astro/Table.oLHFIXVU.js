import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { I as n, L as r, M as i, y as a, z as o } from "./doc.C_PtMNUB.js";
import { a as s, t as c } from "./internal.Dqpu7HFr.js";
var l = e(t(), 1), u = n(), d = i(`arrow.up`), f = i(`arrow.down`), p = i(`sort.none`);
function m({ children: e, direction: t, sortable: n = !0, onSort: i, align: a = `start`, className: s }) {
	let c = n || t ? (0, u.jsx)(t === `ascending` ? d : t === `descending` ? f : p, {
		"aria-hidden": `true`,
		className: r(`size-3.5 shrink-0`, t ? `text-fg` : `text-muted opacity-70`)
	}) : null, l = r(`inline-flex min-w-0 items-center gap-1`, a === `end` && `flex-row-reverse text-end`, s);
	return i ? (0, u.jsxs)(o, {
		onPress: i,
		className: r(l, `-mx-1 min-h-6 cursor-default rounded-sm px-1 outline-hidden data-focus-visible:outline-solid data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-selected`),
		children: [(0, u.jsx)(`span`, {
			className: `min-w-0 [overflow-wrap:anywhere]`,
			children: e
		}), c]
	}) : (0, u.jsxs)(`span`, {
		className: l,
		children: [(0, u.jsx)(`span`, {
			className: `min-w-0 [overflow-wrap:anywhere]`,
			children: e
		}), c]
	});
}
var h = {
	text: `text-start`,
	numeric: `text-end tabular-nums`,
	actions: `w-px whitespace-nowrap text-end`
};
function g({ caption: e, captionHidden: t = !1, columns: n, rows: i, rowKey: o, layout: d = `scroll`, sort: f, onSortChange: p, emptyState: g, isLoading: _, loadingLabel: v, error: y, className: b, scrollHint: x, tableClassName: S }) {
	let C = (0, l.useId)(), { attachBox: w, frameProps: T, boxProps: E, hintProps: D } = a(), O = d === `stack`, k = s({
		emptyState: i.length === 0 ? g : void 0,
		isLoading: _,
		loadingLabel: v,
		error: y
	}), A = O ? {
		table: `table`,
		group: `rowgroup`,
		row: `row`,
		column: `columnheader`,
		rowHeader: `rowheader`,
		cell: `cell`
	} : void 0, j = (0, l.useCallback)((e) => {
		p && p({
			column: e,
			direction: f?.column === e && f.direction === `ascending` ? `descending` : `ascending`
		});
	}, [p, f]);
	return (0, u.jsxs)(`div`, {
		className: r(`@container min-w-0`, b),
		children: [!O && x && D ? (0, u.jsx)(`p`, {
			...D,
			children: x
		}) : null, (0, u.jsx)(`div`, {
			className: O ? `contents` : `sk-table-scroll`,
			...O ? {} : T,
			children: (0, u.jsx)(`div`, {
				ref: w,
				...O ? {} : E({ labelledBy: C }),
				className: r(O ? `relative max-w-full overflow-x-auto rounded-lg border border-border bg-surface @max-xl:overflow-visible @max-xl:border-0 @max-xl:bg-transparent` : `sk-table-scroll__box`),
				children: (0, u.jsxs)(`table`, {
					role: A?.table,
					"aria-busy": _ ? !0 : void 0,
					className: r(`w-full border-separate border-spacing-0 text-start text-body text-fg`, O && `@max-xl:block`, S),
					...!O && n[0]?.isRowHeader ? { "data-sk-table-sticky": `` } : {},
					children: [
						(0, u.jsx)(`caption`, {
							id: C,
							className: r(t ? `sr-only` : `border-b border-border px-4 py-3 text-start text-title font-semibold`, !t && O && `@max-xl:block @max-xl:border-0 @max-xl:px-0 @max-xl:pt-0`),
							children: e
						}),
						(0, u.jsx)(`thead`, {
							role: A?.group,
							className: r(O && `@max-xl:block`),
							children: (0, u.jsx)(`tr`, {
								role: A?.row,
								className: r(O && `@max-xl:flex @max-xl:flex-wrap @max-xl:gap-x-4 @max-xl:gap-y-1 @max-xl:pb-2`),
								children: n.map((e) => {
									let t = f?.column === e.id ? f.direction : void 0, n = e.kind ?? `text`;
									return (0, u.jsx)(`th`, {
										role: A?.column,
										scope: `col`,
										"aria-sort": e.allowsSorting ? t ?? `none` : void 0,
										className: r(`border-b border-border bg-sunken px-4 py-2.5 align-bottom text-label font-semibold text-muted uppercase`, h[n], e.hideHeader && `sr-only`, O && (e.allowsSorting && p ? `@max-xl:border-0 @max-xl:bg-transparent @max-xl:p-0` : `@max-xl:sr-only`)),
										children: e.allowsSorting ? (0, u.jsx)(m, {
											direction: t,
											align: n === `numeric` ? `end` : `start`,
											...p ? { onSort: () => j(e.id) } : {},
											children: e.header
										}) : e.header
									}, e.id);
								})
							})
						}),
						(0, u.jsx)(`tbody`, {
							role: A?.group,
							className: r(O && `@max-xl:flex @max-xl:flex-col @max-xl:gap-2`),
							children: k ? (0, u.jsx)(`tr`, {
								role: A?.row,
								className: r(O && `@max-xl:block @max-xl:rounded-lg @max-xl:border @max-xl:border-border @max-xl:bg-surface`),
								children: (0, u.jsx)(`td`, {
									role: A?.cell,
									colSpan: n.length,
									className: r(O && `@max-xl:block`),
									children: (0, u.jsx)(c, {
										kind: k.kind,
										children: k.content
									})
								})
							}) : i.map((e) => (0, u.jsx)(`tr`, {
								role: A?.row,
								className: r(`transition-colors hover:bg-hover [&:last-child>*]:border-b-0`, O && `@max-xl:flex @max-xl:flex-col @max-xl:rounded-lg @max-xl:border @max-xl:border-border @max-xl:bg-surface @max-xl:px-3 @max-xl:py-2 @max-xl:[&>*]:border-b-0`),
								children: n.map((t) => {
									let n = t.isRowHeader ? `th` : `td`, i = t.kind ?? `text`;
									return (0, u.jsxs)(n, {
										role: t.isRowHeader ? A?.rowHeader : A?.cell,
										...t.isRowHeader ? { scope: `row` } : {},
										className: r(`border-b border-border px-4 py-3 align-middle [overflow-wrap:anywhere]`, t.isRowHeader && `font-medium`, h[i], O && (i === `actions` || t.hideHeader ? `@max-xl:flex @max-xl:w-auto @max-xl:justify-end @max-xl:px-0 @max-xl:pt-2 @max-xl:pb-1` : `@max-xl:grid @max-xl:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] @max-xl:gap-3 @max-xl:px-0 @max-xl:py-1.5 @max-xl:text-start`)),
										children: [O && i !== `actions` && !t.hideHeader ? (0, u.jsx)(`span`, {
											"aria-hidden": `true`,
											className: `hidden text-caption font-medium text-muted @max-xl:block`,
											children: t.header
										}) : null, O ? (0, u.jsx)(`span`, {
											className: `min-w-0`,
											children: t.cell(e)
										}) : t.cell(e)]
									}, t.id);
								})
							}, o(e)))
						})
					]
				})
			})
		})]
	});
}
export { m as n, g as t };
