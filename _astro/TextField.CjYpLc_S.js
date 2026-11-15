import { t as e } from "./TextField.B-FkpKii.js";
import { F as t, I as n } from "./doc.DoLlUurT.js";
import { r } from "./useTextField.yppvIDGl.js";
import { d as i, f as a, l as o, t as s, u as c } from "./styles.DljYEAZo.js";
var l = t();
function u({ className: e, ...t }) {
	return (0, l.jsx)(r, {
		...t,
		className: n(o, e)
	});
}
function d({ label: t, description: r, errorMessage: o, status: d, requiredLabel: f, optionalLabel: p, placeholder: m, className: h, inputClassName: g, ..._ }) {
	return (0, l.jsxs)(e, {
		..._,
		className: n(s, h),
		children: [
			(0, l.jsx)(a, {
				isRequired: _.isRequired,
				requiredLabel: f,
				optionalLabel: p,
				children: t
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
