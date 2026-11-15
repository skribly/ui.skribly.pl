import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
var n = e(t(), 1);
function r(e, t = !0) {
	let [r, i] = (0, n.useState)(null);
	return (0, n.useEffect)(() => {
		if (!e) return;
		let t = () => i(e.scrollHeight > e.clientHeight + 1 || e.scrollWidth > e.clientWidth + 1);
		if (typeof ResizeObserver > `u`) {
			t();
			return;
		}
		let n = 0, r = () => {
			cancelAnimationFrame(n), n = requestAnimationFrame(t);
		}, a = new ResizeObserver(r);
		a.observe(e);
		for (let t of e.children) a.observe(t);
		let o = e.ownerDocument.defaultView;
		o?.addEventListener(`resize`, r), e.ownerDocument.fonts?.ready.then(r);
		let s = new MutationObserver(r);
		return s.observe(e, {
			childList: !0,
			subtree: !0,
			characterData: !0
		}), r(), () => {
			cancelAnimationFrame(n), a.disconnect(), s.disconnect(), o?.removeEventListener(`resize`, r);
		};
	}, [e]), t && (r ?? !0);
}
export { r as t };
