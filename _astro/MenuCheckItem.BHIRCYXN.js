import { I as e, L as t, j as n } from "./doc.C_PtMNUB.js";
import { o as r } from "./Dialog.1Jdfd_U0.js";
import { i, n as a, r as o } from "./MenuItem.BZK3TalX.js";
var s = e();
function c({ children: e, description: c, shortcut: l, className: u, textValue: d, ...f }) {
	return (0, s.jsx)(r, {
		...f,
		...d === void 0 ? typeof e == `string` ? { textValue: e } : {} : { textValue: d },
		className: t(o, i.default, `data-selected:font-medium`, u),
		children: ({ isSelected: t, selectionMode: r }) => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(`span`, {
			"aria-hidden": !0,
			className: `flex size-4 shrink-0 items-center justify-center text-accent-text group-data-[focused]/item:text-current`,
			children: t ? r === `single` ? (0, s.jsx)(n, {
				name: `status.todo`,
				size: 8,
				fill: `currentColor`
			}) : (0, s.jsx)(n, {
				name: `action.check`,
				size: 14,
				strokeWidth: 2.5
			}) : null
		}), (0, s.jsx)(a, {
			...c === void 0 ? {} : { description: c },
			...l === void 0 ? {} : { shortcut: l },
			children: e
		})] })
	});
}
export { c as t };
