import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { H as t, Kt as n, Vt as r, Xt as i } from "./useOverflow.Dq483xd0.js";
import { d as a, t as o } from "./CollectionBuilder.OeX_9-Zv.js";
import { n as s } from "./react-dom.B9zIfLd2.js";
function c(e) {
	let n = t(e, { labelable: !0 }), r;
	return e.orientation === `vertical` && (r = `vertical`), e.elementType === `hr` ? { separatorProps: n } : { separatorProps: {
		...n,
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
	[e, a] = r(e, a, u);
	let { elementType: o, orientation: s, style: d, className: f, slot: p, ...m } = e, h = o || `hr`;
	h === `hr` && s === `vertical` && (h = `div`);
	let g = n[h], { separatorProps: _ } = c({
		...m,
		elementType: o,
		orientation: s
	}), v = t(e, { global: !0 });
	return l.createElement(g, {
		render: e.render,
		...i(v, _),
		style: d,
		className: f ?? `react-aria-Separator`,
		ref: a,
		slot: p || void 0
	});
});
export { u as n, f as t };
