import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { I as t, j as n } from "./doc.C_PtMNUB.js";
import { n as r } from "./react-dom.B9zIfLd2.js";
import { t as i } from "./Link.DGRKZkR4.js";
import { n as a } from "./Button.df3csLrB.js";
var o = e(r(), 1), s = t(), c = (0, o.forwardRef)(function({ variant: e = `outline`, size: t = `md`, newTabLabel: r, className: o, children: c, target: l, rel: u, ...d }, f) {
	let p = l === `_blank`;
	return (0, s.jsxs)(i, {
		...d,
		...l === void 0 ? {} : { target: l },
		...u === void 0 ? p ? { rel: `noopener noreferrer` } : {} : { rel: u },
		ref: f,
		className: a(e, t, o),
		children: [
			c,
			p ? (0, s.jsx)(n, {
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
