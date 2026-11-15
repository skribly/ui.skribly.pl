import { s as e } from "./useLoadMoreSentinel.g4Y1QWZw.js";
import { s as t } from "./Dialog.B6qxF5fw.js";
import { F as n, I as r } from "./doc.DoLlUurT.js";
var i = n();
function a({ label: n, children: a, className: o, ...s }) {
	return (0, i.jsxs)(t, {
		...s,
		className: r(`flex flex-col [&:not(:first-child)]:mt-1 [&:not(:first-child)]:border-t [&:not(:first-child)]:border-border [&:not(:first-child)]:pt-1`, o),
		children: [(0, i.jsx)(e, {
			className: `px-2.5 pt-1.5 pb-1 text-label font-semibold text-muted uppercase`,
			children: n
		}), a]
	});
}
export { a as t };
