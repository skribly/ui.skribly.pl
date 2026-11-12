import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { t as n } from "./createLucideIcon.npgQlVHx.js";
var r = {
	name: `square-terminal`,
	size: 24,
	node: [
		[`path`, {
			d: `m7 11 2-2-2-2`,
			key: `1lz0vl`
		}],
		[`path`, {
			d: `M11 13h4`,
			key: `1p7l4v`
		}],
		[`rect`, {
			width: `18`,
			height: `18`,
			x: `3`,
			y: `3`,
			rx: `2`,
			ry: `2`,
			key: `1m3agn`
		}]
	],
	aliases: [`terminal-square`]
};
r.node;
var i = n(r), a = e(t(), 1);
function o(e, t = !0) {
	let [n, r] = (0, a.useState)(null);
	return (0, a.useEffect)(() => {
		if (!e) return;
		let t = () => r(e.scrollHeight > e.clientHeight + 1 || e.scrollWidth > e.clientWidth + 1);
		if (typeof ResizeObserver > `u`) {
			t();
			return;
		}
		let n = 0, i = () => {
			cancelAnimationFrame(n), n = requestAnimationFrame(t);
		}, a = new ResizeObserver(i);
		a.observe(e);
		for (let t of e.children) a.observe(t);
		let o = e.ownerDocument.defaultView;
		o?.addEventListener(`resize`, i), e.ownerDocument.fonts?.ready.then(i);
		let s = new MutationObserver(i);
		return s.observe(e, {
			childList: !0,
			subtree: !0,
			characterData: !0
		}), i(), () => {
			cancelAnimationFrame(n), a.disconnect(), s.disconnect(), o?.removeEventListener(`resize`, i);
		};
	}, [e]), t && (n ?? !0);
}
export { i as n, o as t };
