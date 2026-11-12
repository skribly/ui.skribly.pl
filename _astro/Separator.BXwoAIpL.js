import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { At as t, E as n, Pt as r, Tt as i } from "./createLucideIcon.npgQlVHx.js";
import { d as a, t as o } from "./CollectionBuilder.Bxdh8Jqj.js";
import { n as s } from "./react-dom.B9zIfLd2.js";
function c(e) {
	let t = n(e, { labelable: !0 }), r;
	return e.orientation === `vertical` && (r = `vertical`), e.elementType === `hr` ? { separatorProps: t } : { separatorProps: {
		...t,
		role: `separator`,
		"aria-orientation": r
	} };
}
var l = e(s(), 1), u = (0, l.createContext)({}), d = class extends a {
	static {
		this.type = `separator`;
	}
	filter(e, t) {
		let n = t.getItem(this.prevKey);
		if (n && n.type !== `separator`) {
			let n = this.clone();
			return t.addDescendants(n, e), n;
		}
		return null;
	}
}, f = o(d, function(e, a) {
	[e, a] = i(e, a, u);
	let { elementType: o, orientation: s, style: d, className: f, slot: p, ...m } = e, h = o || `hr`;
	h === `hr` && s === `vertical` && (h = `div`);
	let g = t[h], { separatorProps: _ } = c({
		...m,
		elementType: o,
		orientation: s
	}), v = n(e, { global: !0 });
	return l.createElement(g, {
		render: e.render,
		...r(v, _),
		style: d,
		className: f ?? `react-aria-Separator`,
		ref: a,
		slot: p || void 0
	});
});
export { u as n, f as t };
