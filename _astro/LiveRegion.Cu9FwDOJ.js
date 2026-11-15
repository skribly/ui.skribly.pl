import { I as e, L as t } from "./doc.C_PtMNUB.js";
var n = e();
function r({ politeness: e = `polite`, visible: r = !1, atomic: i = !0, className: a, children: o, ...s }) {
	return (0, n.jsx)(`div`, {
		...s,
		role: e === `assertive` ? `alert` : `status`,
		"aria-live": e,
		"aria-atomic": i,
		className: t(r ? `text-body text-fg` : `sr-only`, a),
		children: o
	});
}
export { r as t };
