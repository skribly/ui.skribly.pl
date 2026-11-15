import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { r as t } from "./FocusScope.bOWhljI-.js";
import { bn as n } from "./doc.DoLlUurT.js";
import { n as r } from "./react-dom.B9zIfLd2.js";
var i = e(r(), 1);
function a(e, r) {
	let a = r?.isDisabled, [o, s] = (0, i.useState)(!1);
	return n(() => {
		if (e?.current && !a) {
			let n = () => {
				if (e.current) {
					let n = t(e.current, { tabbable: !0 });
					s(!!n.nextNode());
				}
			};
			n();
			let r = new MutationObserver(n);
			return r.observe(e.current, {
				subtree: !0,
				childList: !0,
				attributes: !0,
				attributeFilter: [`tabIndex`, `disabled`]
			}), () => {
				r.disconnect();
			};
		}
	}), !a && o;
}
export { a as t };
