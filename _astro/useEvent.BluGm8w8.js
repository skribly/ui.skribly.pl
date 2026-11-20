import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { tt as t, zt as n } from "./useOverflow.Dq483xd0.js";
import { n as r } from "./react-dom.B9zIfLd2.js";
var i = e(r(), 1);
function a(e, r, a, o) {
	let s = t(a), c = a == null;
	(0, i.useEffect)(() => {
		if (!(c || e.current == null)) return n(e.current, r, s, o);
	}, [
		e,
		r,
		o,
		c
	]);
}
export { a as t };
