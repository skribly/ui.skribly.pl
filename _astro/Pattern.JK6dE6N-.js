import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { I as n, L as r } from "./doc.C_PtMNUB.js";
import { n as i } from "./marks.C2cuaS5v.js";
var a = e(t(), 1), o = n();
function s({ pattern: e, product: t, as: n = `div`, className: s, children: c }) {
	let l = (0, a.useMemo)(() => t ? { "--sk-product": `var(--sk-${i[t].colour})` } : void 0, [t]), u = c == null;
	return (0, o.jsx)(n, {
		className: r(`sk-pattern`, `sk-pattern--${e}`, s),
		style: l,
		...u ? { "aria-hidden": !0 } : {},
		children: c
	});
}
export { s as t };
