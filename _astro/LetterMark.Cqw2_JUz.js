import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { n, t as r } from "./jsx-runtime.yrTYNGQT.js";
var i = e(t(), 1), a = r(), o = {
	circle: `rounded-full`,
	square: `rounded-[28%]`,
	tile: `rounded-[22%]`
};
function s({ letters: e, label: t, color: r, src: s, size: c, shape: l, className: u }) {
	let [d, f] = (0, i.useState)(null), p = Array.from(e.trim()).slice(0, 2).join(``), m = (0, i.useMemo)(() => ({
		"--mark": r ?? `var(--sk-muted)`,
		backgroundColor: `color-mix(in srgb, var(--mark) 24%, var(--sk-surface))`,
		width: `${c / 16}rem`,
		height: `${c / 16}rem`,
		fontSize: `${c * (p.length > 1 ? .38 : .46) / 16}rem`
	}), [
		r,
		c,
		p.length
	]), h = s && d !== s, g = (0, i.useMemo)(() => s ? () => f(s) : void 0, [s]);
	return (0, a.jsx)(`span`, {
		...t ? {
			role: `img`,
			"aria-label": t
		} : { "aria-hidden": !0 },
		style: m,
		className: n(`inline-grid shrink-0 place-items-center overflow-hidden border border-(--mark) leading-none font-bold text-fg select-none`, o[l], u),
		children: h ? (0, a.jsx)(`img`, {
			src: s,
			alt: ``,
			className: `size-full object-cover`,
			onError: g
		}) : p
	});
}
export { s as t };
