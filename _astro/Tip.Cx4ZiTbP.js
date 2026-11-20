import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { t } from "./Tooltip.D_d-azCd.js";
import { n } from "./react-dom.B9zIfLd2.js";
import { g as r } from "./useOverflow.Dq483xd0.js";
var i = e(n(), 1), a = (0, i.createContext)(null);
function o() {
	return (0, i.useContext)(a);
}
var s = (0, i.createContext)(!1);
function c(e, t) {
	let n = e ?? t?.root ?? null;
	return n ? { UNSTABLE_portalContainer: n } : {};
}
var l = r();
function u({ content: e, children: n, placement: r = `bottom`, container: i }) {
	let a = o();
	return (0, l.jsx)(t, {
		content: e,
		placement: r,
		delay: 500,
		container: i ?? a?.root ?? null,
		children: n
	});
}
export { o as a, c as i, s as n, a as r, u as t };
