import { t as e } from "./TextField.zLlx597q.js";
import { _ as t, g as n } from "./useOverflow.Dq483xd0.js";
import { r } from "./useTextField.BpC71hWm.js";
import { d as i, f as a, l as o, t as s, u as c } from "./styles.C2ztr1zV.js";
var l = n();
function u({ className: e, ...n }) {
	return (0, l.jsx)(r, {
		...n,
		className: t(o, e)
	});
}
function d({ label: n, description: r, errorMessage: o, status: d, requiredLabel: f, optionalLabel: p, placeholder: m, className: h, inputClassName: g, ..._ }) {
	return (0, l.jsxs)(e, {
		..._,
		className: t(s, h),
		children: [
			(0, l.jsx)(a, {
				isRequired: _.isRequired,
				requiredLabel: f,
				optionalLabel: p,
				children: n
			}),
			(0, l.jsx)(u, {
				...m === void 0 ? {} : { placeholder: m },
				...g === void 0 ? {} : { className: g }
			}),
			(0, l.jsx)(i, {
				description: r,
				status: d
			}),
			(0, l.jsx)(c, { children: o })
		]
	});
}
export { u as n, d as t };
