import { n as e, t } from "./jsx-runtime.yrTYNGQT.js";
var n = t();
function r({ politeness: t = `polite`, visible: r = !1, atomic: i = !0, className: a, children: o, ...s }) {
	return (0, n.jsx)(`div`, {
		...s,
		role: t === `assertive` ? `alert` : `status`,
		"aria-live": t,
		"aria-atomic": i,
		className: e(r ? `text-body text-fg` : `sr-only`, a),
		children: o
	});
}
export { r as t };
