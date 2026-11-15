import { t as e } from "./VisuallyHidden.BNHsLrt2.js";
import { I as t } from "./doc.C_PtMNUB.js";
var n = t();
function r({ elementType: t = `span`, isFocusable: r = !1, children: i, id: a, className: o }) {
	return (0, n.jsx)(e, {
		elementType: t,
		isFocusable: r,
		...a === void 0 ? {} : { id: a },
		...o === void 0 ? {} : { className: o },
		children: i
	});
}
export { r as t };
