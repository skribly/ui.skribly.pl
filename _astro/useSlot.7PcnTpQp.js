import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { Lt as t, zt as n } from "./createLucideIcon.npgQlVHx.js";
import { n as r } from "./react-dom.B9zIfLd2.js";
var i = e(r(), 1);
function a(e = !0) {
	let [t, r] = (0, i.useState)(e), a = (0, i.useRef)(!1), o = (0, i.useCallback)((e) => {
		a.current = !0, r(!!e);
	}, []);
	return n(() => {
		a.current || r(!1);
	}, []), [o, t];
}
function o(e = !0) {
	let n = t(), [r, i] = a(e);
	return {
		id: i ? n : void 0,
		ref: r
	};
}
export { o as t };
