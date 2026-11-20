import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { R as t, Xt as n, Y as r, Yt as i } from "./useOverflow.Dq483xd0.js";
import { n as a } from "./react-dom.B9zIfLd2.js";
var o = e(a(), 1), s = o.forwardRef(({ children: e, ...a }, s) => {
	let c = (0, o.useRef)(!1), l = (0, o.useContext)(t), u = n(l || {}, {
		...a,
		register() {
			c.current = !0, l && l.register();
		}
	});
	return u.ref = i(s || l?.ref), r(l, u.ref), (0, o.useEffect)(() => {
		c.current ||= !0;
	}, []), o.createElement(t.Provider, { value: u }, e);
});
function c({ children: e }) {
	let n = (0, o.useMemo)(() => ({ register: () => {} }), []);
	return o.createElement(t.Provider, { value: n }, e);
}
export { c as n, s as t };
