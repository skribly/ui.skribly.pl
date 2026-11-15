import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { dn as t, hn as n, on as r, sn as i, st as a } from "./doc.DoLlUurT.js";
import { r as o } from "./ToggleButton.DdDl1WJr.js";
import { n as s } from "./react-dom.B9zIfLd2.js";
var c = e(s(), 1), l = (0, c.createContext)({}), u = (0, c.forwardRef)(function(e, s) {
	[e, s] = r(e, s, l);
	let { toolbarProps: u } = o(e, s), d = i({
		...e,
		values: { orientation: e.orientation || `horizontal` },
		defaultClassName: `react-aria-Toolbar`
	}), f = a(e, { global: !0 });
	return delete f.id, c.createElement(t.div, {
		...n(f, d, u),
		ref: s,
		slot: e.slot || void 0,
		"data-orientation": e.orientation || `horizontal`
	}, d.children);
});
export { u as t };
