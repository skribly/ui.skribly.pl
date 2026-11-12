import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { n, t as r } from "./jsx-runtime.yrTYNGQT.js";
import { t as i } from "./LetterMark.Cqw2_JUz.js";
var a = e(t(), 1), o = r(), s = {
	xs: 20,
	sm: 24,
	md: 32,
	lg: 40,
	xl: 56
};
function c(e) {
	let t = e.trim().split(/[\s._-]+/u).filter(Boolean), n = t[0] ?? ``, r = t.length > 1 ? t.at(-1) ?? `` : ``;
	return (Array.from(n)[0] ?? ``).concat(Array.from(r)[0] ?? ``).toLocaleUpperCase();
}
function l({ name: e, initials: t, src: r, unassignedLabel: l, decorative: u = !1, color: d, size: f = `sm`, className: p }) {
	let m = s[f], h = (0, a.useMemo)(() => ({
		width: `${m / 16}rem`,
		height: `${m / 16}rem`
	}), [m]);
	return e ? (0, o.jsx)(i, {
		letters: t ?? c(e),
		label: u ? void 0 : e,
		color: d,
		src: r,
		size: m,
		shape: `circle`,
		className: p
	}) : (0, o.jsx)(`span`, {
		...l && !u ? {
			role: `img`,
			"aria-label": l
		} : { "aria-hidden": !0 },
		style: h,
		className: n(`inline-block shrink-0 rounded-full border border-dashed border-border-strong`, p)
	});
}
export { l as t };
