import { F as e, I as t } from "./doc.DoLlUurT.js";
import { m as n } from "./styles.DljYEAZo.js";
var r = e(), i = {
	end: `sm:justify-end`,
	start: `sm:justify-start`,
	between: `sm:justify-between`
};
function a({ status: e, align: a = `end`, sticky: o = !1, className: s, children: c, ...l }) {
	let u = e?.tone === `danger`;
	return (0, r.jsxs)(`div`, {
		...l,
		className: t(`flex min-w-0 flex-col border-t border-border pt-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3`, i[a], o && `sticky bottom-0 z-(--sk-z-sticky) bg-surface pb-4`, s),
		children: [(0, r.jsxs)(`div`, {
			className: t(`min-w-0 text-caption`, a === `end` && `sm:mr-auto`),
			children: [(0, r.jsx)(`output`, {
				className: `block not-empty:mb-3 sm:not-empty:mb-0`,
				children: e && !u ? (0, r.jsx)(n, { status: e }) : null
			}), (0, r.jsx)(`div`, {
				role: `alert`,
				className: `not-empty:mb-3 sm:not-empty:mb-0`,
				children: e && u ? (0, r.jsx)(n, { status: e }) : null
			})]
		}), (0, r.jsx)(`div`, {
			className: `flex flex-col-reverse gap-2 sm:flex-row sm:flex-wrap sm:items-center [&>*]:w-full sm:[&>*]:w-auto`,
			children: c
		})]
	});
}
export { a as t };
