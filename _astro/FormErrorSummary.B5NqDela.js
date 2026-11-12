import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { t } from "./circle-exclamation-point.DRCkYbzg.js";
import { n } from "./react-dom.B9zIfLd2.js";
import { n as r, t as i } from "./jsx-runtime.yrTYNGQT.js";
var a = e(n(), 1), o = i(), s = `input:not([type=hidden]), select, textarea, button, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]`;
function c(e, t) {
	let n = t.getElementById(e);
	if (!n) return;
	let r = n.matches(s) ? n : n.querySelector(s) ?? n;
	r.scrollIntoView?.({ block: `center` }), r.focus({ preventScroll: !0 });
}
function l({ title: e, errors: n, autoFocus: i = !0, headingLevel: s = 2, className: l, ...u }) {
	let d = (0, a.useRef)(null), f = (0, a.useId)(), p = n.map((e) => e.fieldId).join(` `);
	(0, a.useEffect)(() => {
		i && p && d.current?.focus();
	}, [i, p]);
	let m = (0, a.useCallback)((e) => {
		let t = e.currentTarget.dataset.field;
		t && (e.preventDefault(), c(t, e.currentTarget.ownerDocument));
	}, []);
	if (n.length === 0) return null;
	let h = `h${s}`;
	return (0, o.jsxs)(`div`, {
		...u,
		ref: d,
		role: `alert`,
		"aria-labelledby": f,
		tabIndex: -1,
		className: r(`rounded-md border border-l-4 border-danger bg-danger-soft p-3 text-body text-fg sm:p-4`, l),
		children: [(0, o.jsxs)(h, {
			id: f,
			className: `flex items-start gap-2 text-body font-semibold`,
			children: [(0, o.jsx)(t, {
				"aria-hidden": `true`,
				className: `mt-0.5 size-4 shrink-0 text-danger`
			}), (0, o.jsx)(`span`, {
				className: `min-w-0 break-words`,
				children: e
			})]
		}), (0, o.jsx)(`ul`, {
			className: `mt-2 flex flex-col gap-1 pl-6`,
			children: n.map((e) => (0, o.jsx)(`li`, {
				className: `list-disc break-words marker:text-danger`,
				children: (0, o.jsx)(`a`, {
					href: `#${e.fieldId}`,
					"data-field": e.fieldId,
					onClick: m,
					className: `inline-block min-h-6 py-0.5 font-medium text-danger underline underline-offset-2 hover:decoration-2`,
					children: e.message
				})
			}, e.fieldId))
		})]
	});
}
export { l as t };
