import { t as e } from "./TextField.BfX3kCsO.js";
import { n as t, t as n } from "./jsx-runtime.yrTYNGQT.js";
import { r } from "./useTextField.D1QWrtYY.js";
import { d as i, f as a, l as o, t as s, u as c } from "./styles.MHrEldHY.js";
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
