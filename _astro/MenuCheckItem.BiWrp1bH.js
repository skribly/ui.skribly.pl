import { A as e, F as t, I as n } from "./doc.DoLlUurT.js";
import { o as r } from "./Dialog.C8eIUYfG.js";
import { i, n as a, r as o } from "./MenuItem.Ch6LeyRa.js";
var s = t();
function c({ children: t, description: c, shortcut: l, className: u, textValue: d, ...f }) {
	return (0, s.jsx)(r, {
		...f,
		...d === void 0 ? typeof t == `string` ? { textValue: t } : {} : { textValue: d },
		className: n(o, i.default, `data-selected:font-medium`, u),
		children: ({ isSelected: n, selectionMode: r }) => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(`span`, {
			"aria-hidden": !0,
			className: `flex size-4 shrink-0 items-center justify-center text-accent-text group-data-[focused]/item:text-current`,
			children: n ? r === `single` ? (0, s.jsx)(e, {
				name: `status.todo`,
				size: 8,
				fill: `currentColor`
			}) : (0, s.jsx)(e, {
				name: `action.check`,
				size: 14,
				strokeWidth: 2.5
			}) : null
		}), (0, s.jsx)(a, {
			...c === void 0 ? {} : { description: c },
			...l === void 0 ? {} : { shortcut: l },
			children: t
		})] })
	});
}
export { c as t };
