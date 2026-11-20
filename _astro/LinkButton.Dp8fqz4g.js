import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { d as t, g as n } from "./useOverflow.Dq483xd0.js";
import { n as r } from "./react-dom.B9zIfLd2.js";
import { t as i } from "./Link.B8StT9b2.js";
import { n as a } from "./Button.reJVLFTj.js";
var o = e(r(), 1), s = n(), c = (0, o.forwardRef)(function({ variant: e = `outline`, size: n = `md`, newTabLabel: r, className: o, children: c, target: l, rel: u, ...d }, f) {
	let p = l === `_blank`;
	return (0, s.jsxs)(i, {
		...d,
		...l === void 0 ? {} : { target: l },
		...u === void 0 ? p ? { rel: `noopener noreferrer` } : {} : { rel: u },
		ref: f,
		className: a(e, n, o),
		children: [
			c,
			p ? (0, s.jsx)(t, {
				name: `action.external`,
				"aria-hidden": !0
			}) : null,
			p && r ? (0, s.jsx)(`span`, {
				className: `sr-only`,
				children: ` (${r})`
			}) : null
		]
	});
});
export { c as t };
