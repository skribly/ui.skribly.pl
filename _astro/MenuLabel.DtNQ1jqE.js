import { s as e } from "./useLoadMoreSentinel.CCe53T__.js";
import { s as t } from "./Dialog.RIvfrakQ.js";
import { _ as n, g as r } from "./useOverflow.Dq483xd0.js";
var i = r();
function a({ label: r, children: a, className: o, ...s }) {
	return (0, i.jsxs)(t, {
		...s,
		className: n(`flex flex-col [&:not(:first-child)]:mt-1 [&:not(:first-child)]:border-t [&:not(:first-child)]:border-border [&:not(:first-child)]:pt-1`, o),
		children: [(0, i.jsx)(e, {
			className: `px-2.5 pt-1.5 pb-1 text-label font-semibold text-muted uppercase`,
			children: r
		}), a]
	});
}
export { a as t };
