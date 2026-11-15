import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { dn as t, hn as n, on as r, st as i } from "./doc.DoLlUurT.js";
import { d as a, t as o } from "./CollectionBuilder.Dfbyz3n6.js";
import { n as s } from "./react-dom.B9zIfLd2.js";
function c(e) {
	let t = i(e, { labelable: !0 }), n;
	return e.orientation === `vertical` && (n = `vertical`), e.elementType === `hr` ? { separatorProps: t } : { separatorProps: {
		...t,
		role: `separator`,
		"aria-orientation": n
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
	let g = t[h], { separatorProps: _ } = c({
		...m,
		elementType: o,
		orientation: s
	}), v = i(e, { global: !0 });
	return l.createElement(g, {
		render: e.render,
		...n(v, _),
		style: d,
		className: f ?? `react-aria-Separator`,
		ref: a,
		slot: p || void 0
	});
});
export { u as n, f as t };
