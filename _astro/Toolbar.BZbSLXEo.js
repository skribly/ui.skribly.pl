import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { H as t, Ht as n, Kt as r, Vt as i, Xt as a } from "./useOverflow.Dq483xd0.js";
import { r as o } from "./ToggleButton.D_YySXWN.js";
import { n as s } from "./react-dom.B9zIfLd2.js";
var c = e(s(), 1), l = (0, c.createContext)({}), u = (0, c.forwardRef)(function(e, s) {
	[e, s] = i(e, s, l);
	let { toolbarProps: u } = o(e, s), d = n({
		...e,
		values: { orientation: e.orientation || `horizontal` },
		defaultClassName: `react-aria-Toolbar`
	}), f = t(e, { global: !0 });
	return delete f.id, c.createElement(r.div, {
		...a(f, d, u),
		ref: s,
		slot: e.slot || void 0,
		"data-orientation": e.orientation || `horizontal`
	}, d.children);
});
export { u as t };
