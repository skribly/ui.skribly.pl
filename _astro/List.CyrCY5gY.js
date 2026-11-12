import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { i as n } from "./CollectionBuilder.Bxdh8Jqj.js";
import { n as r, t as i } from "./GridList.Dk2spOFs.js";
import { t as a } from "./loader-circle.ja8phR5Y.js";
import { n as o, t as s } from "./jsx-runtime.yrTYNGQT.js";
import { a as c, s as l, t as u } from "./internal.D6jB8413.js";
var d = e(t(), 1), f = s(), p = [], m = (e, t) => o(`min-w-0 text-body text-fg outline-hidden`, t ? `block overflow-auto overscroll-contain` : `flex flex-col gap-0.5`, e && `rounded-lg border border-border bg-surface`, e && !t && `p-1`, `data-focus-visible:outline-solid data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus`, `data-drop-target:outline-solid data-drop-target:outline-2 data-drop-target:outline-accent`);
function h(e) {
	return (0, f.jsx)(g, { ...e });
}
function g({ virtual: e = !1, bordered: t = !0, emptyState: s, isLoading: h, loadingLabel: g, error: _, onLoadMore: v, isLoadingMore: y = !1, loadingMoreLabel: b, className: x, items: S, children: C, dependencies: w, ...T }) {
	let E = (0, d.useMemo)(() => c({
		emptyState: s,
		isLoading: h,
		loadingLabel: g,
		error: _
	}), [
		s,
		h,
		g,
		_
	]), D = !E || E.kind === `empty`, O = (0, d.useCallback)(() => E ? (0, f.jsx)(u, {
		kind: E.kind,
		children: E.content
	}) : null, [E]);
	return (0, f.jsxs)(r, {
		...T,
		renderEmptyState: O,
		className: o(m(t, e), x),
		children: [S === void 0 ? D ? C : null : (0, f.jsx)(n, {
			items: D ? S : p,
			...w === void 0 ? {} : { dependencies: w },
			children: C
		}), v && D ? (0, f.jsx)(i, {
			onLoadMore: v,
			isLoading: y,
			children: (0, f.jsxs)(`output`, {
				className: `flex items-center justify-center gap-2 py-3 text-caption text-muted`,
				children: [(0, f.jsx)(a, {
					"aria-hidden": `true`,
					className: o(`size-4`, l)
				}), (0, f.jsx)(`span`, { children: b })]
			})
		}) : null]
	});
}
export { g as n, h as t };
