import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { hn as t, mn as n, mt as r, rt as i } from "./doc.DoLlUurT.js";
import { n as a } from "./react-dom.B9zIfLd2.js";
var o = e(a(), 1), s = o.forwardRef(({ children: e, ...a }, s) => {
	let c = (0, o.useRef)(!1), l = (0, o.useContext)(i), u = t(l || {}, {
		...a,
		register() {
			c.current = !0, l && l.register();
		}
	});
	return u.ref = n(s || l?.ref), r(l, u.ref), (0, o.useEffect)(() => {
		c.current ||= !0;
	}, []), o.createElement(i.Provider, { value: u }, e);
});
function c({ children: e }) {
	let t = (0, o.useMemo)(() => ({ register: () => {} }), []);
	return o.createElement(i.Provider, { value: t }, e);
}
export { c as n, s as t };
