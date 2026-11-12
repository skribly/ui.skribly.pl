import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { At as t, E as n, Et as r, Pt as i, Tt as a } from "./createLucideIcon.npgQlVHx.js";
import { l as o } from "./slugs.CpBgIMWb.js";
import { n as s } from "./react-dom.B9zIfLd2.js";
var c = e(s(), 1), l = (0, c.createContext)({}), u = (0, c.forwardRef)(function(e, s) {
	[e, s] = a(e, s, l);
	let { toolbarProps: u } = o(e, s), d = r({
		...e,
		values: { orientation: e.orientation || `horizontal` },
		defaultClassName: `react-aria-Toolbar`
	}), f = n(e, { global: !0 });
	return delete f.id, c.createElement(t.div, {
		...i(f, d, u),
		ref: s,
		slot: e.slot || void 0,
		"data-orientation": e.orientation || `horizontal`
	}, d.children);
});
export { u as t };
