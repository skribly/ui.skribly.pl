import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { n, t as r } from "./jsx-runtime.yrTYNGQT.js";
var i = e(t(), 1), a = r(), o = (e) => e.normalize(`NFD`).replaceAll(/\p{Diacritic}/gu, ``).toLowerCase();
function s(e, t) {
	let n = Array.from({ length: e.length }, () => !1), r = o(t.trim());
	if (!r) return n;
	let i = Array.from({ length: e.length }, (t, n) => o(e[n] ?? ``));
	for (let e = 0; e < i.length; e++) {
		let t = e, a = ``;
		for (; t < i.length && a.length < r.length;) a += i[t], t++;
		if (a === r) {
			for (let r = e; r < t; r++) n[r] = !0;
			e = t - 1;
		}
	}
	return n;
}
function c({ text: e, query: t, positions: r, offset: o = 0, className: c, markClassName: l }) {
	let u = (0, i.useMemo)(() => {
		let n;
		if (r) {
			let t = new Set(r);
			n = Array.from({ length: e.length }, (e, n) => t.has(n + o));
		} else n = s(e, t ?? ``);
		let i = [];
		for (let t = 0; t < e.length; t++) {
			let r = n[t] ?? !1, a = i.at(-1);
			a && a.hit === r ? a.text += e[t] : i.push({
				start: t,
				text: e[t] ?? ``,
				hit: r
			});
		}
		return i;
	}, [
		e,
		t,
		r,
		o
	]).map((e) => e.hit ? (0, a.jsx)(`mark`, {
		className: n(`rounded-xs bg-accent-soft px-px font-semibold text-fg underline decoration-accent decoration-1 underline-offset-2`, l),
		children: e.text
	}, e.start) : e.text);
	return (0, a.jsx)(`span`, {
		className: c,
		children: u
	});
}
export { c as t };
