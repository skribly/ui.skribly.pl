import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { xn as t, yn as n } from "./doc.C_PtMNUB.js";
import { n as r } from "./react-dom.B9zIfLd2.js";
var i = e(r(), 1);
function a(e = !0) {
	let [n, r] = (0, i.useState)(e), a = (0, i.useRef)(!1), o = (0, i.useCallback)((e) => {
		a.current = !0, r(!!e);
	}, []);
	return t(() => {
		a.current || r(!1);
	}, []), [o, n];
}
function o(e = !0) {
	let t = n(), [r, i] = a(e);
	return {
		id: i ? t : void 0,
		ref: r
	};
}
export { o as t };
