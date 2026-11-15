import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { r as n } from "./Tree.D3M-Ji0Z.js";
import { I as r, L as i } from "./doc.C_PtMNUB.js";
import { a, t as o } from "./internal.Dqpu7HFr.js";
var s = e(t(), 1), c = r(), l = [];
function u({ bordered: e = !0, emptyState: t, isLoading: r, loadingLabel: u, error: d, className: f, items: p, children: m, ...h }) {
	let g = (0, s.useMemo)(() => a({
		emptyState: t,
		isLoading: r,
		loadingLabel: u,
		error: d
	}), [
		t,
		r,
		u,
		d
	]), _ = !g || g.kind === `empty`, v = (0, s.useCallback)(() => g ? (0, c.jsx)(o, {
		kind: g.kind,
		children: g.content
	}) : null, [g]);
	return (0, c.jsx)(n, {
		...h,
		...p === void 0 ? {} : { items: _ ? p : l },
		renderEmptyState: v,
		className: i(`flex min-w-0 flex-col gap-px overflow-auto text-body text-fg outline-hidden`, e && `rounded-lg border border-border bg-surface p-1`, `data-focus-visible:outline-solid data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus`, `data-drop-target:outline-solid data-drop-target:outline-2 data-drop-target:outline-accent`, f),
		children: _ ? m : null
	});
}
export { u as t };
