import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { bt as n, sn as r, st as i } from "./doc.DoLlUurT.js";
import { t as a } from "./Text.CWB1nGTv.js";
var o = e(t(), 1), s = (0, o.createContext)(null), c = (0, o.forwardRef)(function(e, t) {
	return (0, o.useContext)(s)?.isInvalid ? o.createElement(l, {
		...e,
		ref: t
	}) : null;
}), l = (0, o.forwardRef)((e, t) => {
	let n = (0, o.useContext)(s), { elementType: c, ...l } = e, u = i(l, { global: !0 }), d = r({
		...l,
		defaultClassName: `react-aria-FieldError`,
		defaultChildren: n.validationErrors.length === 0 ? void 0 : n.validationErrors.join(` `),
		values: n
	});
	return d.children == null ? null : o.createElement(a, {
		slot: `errorMessage`,
		elementType: c,
		...u,
		...d,
		ref: t
	});
});
function u(e, t, r) {
	let i = n((e) => {
		r && !e.defaultPrevented && r(t);
	});
	(0, o.useEffect)(() => {
		let t = e?.current?.form;
		return t?.addEventListener(`reset`, i), () => {
			t?.removeEventListener(`reset`, i);
		};
	}, [e]);
}
export { c as n, s as r, u as t };
