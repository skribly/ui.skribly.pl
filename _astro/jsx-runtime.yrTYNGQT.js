import { t as e } from "./rolldown-runtime.XKyaHtl9.js";
function t(...e) {
	return e.filter(Boolean).join(` `);
}
var n = e(((e) => {
	var t = Symbol.for(`react.transitional.element`), n = Symbol.for(`react.fragment`);
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = `` + r), n.key !== void 0 && (i = `` + n.key), `key` in n) for (var a in r = {}, n) a !== `key` && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), r = e(((e, t) => {
	t.exports = n();
}));
export { t as n, r as t };
