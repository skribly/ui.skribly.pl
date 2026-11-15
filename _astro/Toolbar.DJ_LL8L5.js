import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { cn as t, ct as n, fn as r, gn as i, sn as a } from "./doc.C_PtMNUB.js";
import { r as o } from "./ToggleButton.D3fOu9dM.js";
import { n as s } from "./react-dom.B9zIfLd2.js";
var c = e(s(), 1), l = (0, c.createContext)({}), u = (0, c.forwardRef)(function(e, s) {
	[e, s] = a(e, s, l);
	let { toolbarProps: u } = o(e, s), d = t({
		...e,
		values: { orientation: e.orientation || `horizontal` },
		defaultClassName: `react-aria-Toolbar`
	}), f = n(e, { global: !0 });
	return delete f.id, c.createElement(r.div, {
		...i(f, d, u),
		ref: s,
		slot: e.slot || void 0,
		"data-orientation": e.orientation || `horizontal`
	}, d.children);
});
export { u as t };
