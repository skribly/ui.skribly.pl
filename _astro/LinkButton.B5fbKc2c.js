import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { t } from "./external-link.DGx_G-nr.js";
import { n } from "./react-dom.B9zIfLd2.js";
import { t as r } from "./Link.DyGbagCu.js";
import { n as i } from "./Button.DRxd_7vr.js";
import { t as a } from "./jsx-runtime.yrTYNGQT.js";
var o = e(n(), 1), s = a(), c = (0, o.forwardRef)(function({ variant: e = `outline`, size: n = `md`, newTabLabel: a, className: o, children: c, target: l, rel: u, ...d }, f) {
	let p = l === `_blank`;
	return (0, s.jsxs)(r, {
		...d,
		...l === void 0 ? {} : { target: l },
		...u === void 0 ? p ? { rel: `noopener noreferrer` } : {} : { rel: u },
		ref: f,
		className: i(e, n, o),
		children: [
			c,
			p ? (0, s.jsx)(t, { "aria-hidden": !0 }) : null,
			p && a ? (0, s.jsx)(`span`, {
				className: `sr-only`,
				children: ` (${a})`
			}) : null
		]
	});
});
export { c as t };
