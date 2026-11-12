import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { E as n, Et as r, z as i } from "./createLucideIcon.npgQlVHx.js";
import { t as a } from "./Text.DxhsPAdy.js";
var o = e(t(), 1), s = (0, o.createContext)(null), c = (0, o.forwardRef)(function(e, t) {
	return (0, o.useContext)(s)?.isInvalid ? o.createElement(l, {
		...e,
		ref: t
	}) : null;
}), l = (0, o.forwardRef)((e, t) => {
	let i = (0, o.useContext)(s), { elementType: c, ...l } = e, u = n(l, { global: !0 }), d = r({
		...l,
		defaultClassName: `react-aria-FieldError`,
		defaultChildren: i.validationErrors.length === 0 ? void 0 : i.validationErrors.join(` `),
		values: i
	});
	return d.children == null ? null : o.createElement(a, {
		slot: `errorMessage`,
		elementType: c,
		...u,
		...d,
		ref: t
	});
});
function u(e, t, n) {
	let r = i((e) => {
		n && !e.defaultPrevented && n(t);
	});
	(0, o.useEffect)(() => {
		let t = e?.current?.form;
		return t?.addEventListener(`reset`, r), () => {
			t?.removeEventListener(`reset`, r);
		};
	}, [e]);
}
export { c as n, s as r, u as t };
