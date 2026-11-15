import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { n, t as r } from "./TextField.BCFjhSRb.js";
import { I as i, L as a } from "./doc.C_PtMNUB.js";
import { d as o, f as s, t as c, u as l } from "./styles.Dduhw011.js";
var u = e(t(), 1), d = i();
function f({ label: e, description: t, errorMessage: i, status: f, requiredLabel: p, optionalLabel: m, placeholder: h, rows: g = 4, monospace: _ = !1, formatCount: v, className: y, onChange: b, ...x }) {
	let [S, C] = (0, u.useState)(() => (x.defaultValue ?? ``).length), w = x.value === void 0 ? S : x.value.length, T = x.maxLength, E = v && T !== void 0 ? v(w, T) : null, D = (0, u.useCallback)((e) => {
		C(e.length), b?.(e);
	}, [b]);
	return (0, d.jsxs)(r, {
		...x,
		onChange: D,
		className: a(c, y),
		children: [
			(0, d.jsx)(s, {
				isRequired: x.isRequired,
				requiredLabel: p,
				optionalLabel: m,
				children: e
			}),
			(0, d.jsx)(n, {
				rows: g,
				...h === void 0 ? {} : { placeholder: h },
				className: a(`min-h-20 w-full min-w-0 resize-y rounded-md border border-border-strong bg-input px-2.5 py-2 text-base/relaxed text-fg transition-colors placeholder:text-muted sm:text-body/relaxed data-hovered:border-muted data-invalid:border-danger data-disabled:cursor-not-allowed data-disabled:border-border data-disabled:bg-sunken data-disabled:text-muted read-only:bg-sunken`, _ && `font-mono`)
			}),
			(0, d.jsx)(o, {
				description: t,
				status: f,
				aside: E,
				asideIsOver: T !== void 0 && w > T
			}),
			(0, d.jsx)(l, { children: i })
		]
	});
}
export { f as t };
