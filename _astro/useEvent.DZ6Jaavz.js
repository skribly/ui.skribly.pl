import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { an as t, xt as n } from "./doc.C_PtMNUB.js";
import { n as r } from "./react-dom.B9zIfLd2.js";
var i = e(r(), 1);
function a(e, r, a, o) {
	let s = n(a), c = a == null;
	(0, i.useEffect)(() => {
		if (!(c || e.current == null)) return t(e.current, r, s, o);
	}, [
		e,
		r,
		o,
		c
	]);
}
export { a as t };
