import { _ as e, d as t, g as n } from "./useOverflow.Dq483xd0.js";
import { o as r } from "./Dialog.RIvfrakQ.js";
import { i, n as a, r as o } from "./MenuItem.BpnCl8UA.js";
var s = n();
function c({ children: n, description: c, shortcut: l, className: u, textValue: d, ...f }) {
	return (0, s.jsx)(r, {
		...f,
		...d === void 0 ? typeof n == `string` ? { textValue: n } : {} : { textValue: d },
		className: e(o, i.default, `data-selected:font-medium`, u),
		children: ({ isSelected: e, selectionMode: r }) => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(`span`, {
			"aria-hidden": !0,
			className: `flex size-4 shrink-0 items-center justify-center text-accent-text group-data-[focused]/item:text-current`,
			children: e ? r === `single` ? (0, s.jsx)(t, {
				name: `status.todo`,
				size: 8,
				fill: `currentColor`
			}) : (0, s.jsx)(t, {
				name: `action.check`,
				size: 14,
				strokeWidth: 2.5
			}) : null
		}), (0, s.jsx)(a, {
			...c === void 0 ? {} : { description: c },
			...l === void 0 ? {} : { shortcut: l },
			children: n
		})] })
	});
}
export { c as t };
