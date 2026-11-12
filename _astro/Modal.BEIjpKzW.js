import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { n, t as r, v as i } from "./Dialog.BHaijp-q.js";
import { n as a, t as o } from "./Modal.DfTZZZKl.js";
import { t as s } from "./CloseButton.BcQwEaEQ.js";
import { n as c, t as l } from "./jsx-runtime.yrTYNGQT.js";
import { n as u, r as d } from "./portal.-REG5w-J.js";
var f = e(t(), 1), p = l(), m = {
	sm: `sm:w-[min(28rem,100%)]`,
	md: `sm:w-[min(40rem,100%)]`,
	lg: `sm:w-[min(56rem,100%)]`
};
function h(e, t) {
	return typeof e == `function` ? e(t) : e;
}
function g({ title: e, description: t, children: l, footer: g, closeLabel: _, icon: v, size: y = `md`, role: b = `dialog`, headingLevel: x = 2, trigger: S, isOpen: C, defaultOpen: w, onOpenChange: T, isDismissable: E = !0, isKeyboardDismissDisabled: D = !1, container: O, className: k }) {
	let A = (0, f.useId)(), j = u(C, w, T), M = (0, p.jsx)(a, {
		...S === void 0 ? j : {},
		...d(O),
		isDismissable: E,
		isKeyboardDismissDisabled: D,
		className: `fixed inset-0 z-(--sk-z-modal) flex items-end justify-center bg-scrim data-entering:animate-fade data-exiting:animate-fade data-exiting:[animation-direction:reverse] motion-reduce:animate-none sm:items-start sm:p-4 sm:pt-[10vh]`,
		children: (0, p.jsx)(o, {
			className: c(`flex max-h-[92dvh] w-full min-w-0 flex-col overflow-hidden rounded-t-xl border border-border bg-surface text-fg shadow-lg outline-none data-entering:animate-rise motion-reduce:animate-none sm:max-h-[80dvh] sm:rounded-xl`, m[y], k),
			children: (0, p.jsx)(n, {
				role: b,
				...t ? { "aria-describedby": A } : {},
				className: `flex min-h-0 flex-1 flex-col outline-none`,
				children: ({ close: n }) => (0, p.jsxs)(p.Fragment, { children: [
					(0, p.jsxs)(`div`, {
						className: `flex items-start gap-3 px-4 pt-4 pb-3 sm:px-5`,
						children: [
							v ? (0, p.jsx)(`span`, {
								"aria-hidden": !0,
								className: `mt-0.5 flex shrink-0`,
								children: v
							}) : null,
							(0, p.jsxs)(`div`, {
								className: `min-w-0 flex-1`,
								children: [(0, p.jsx)(i, {
									slot: `title`,
									level: x,
									className: `text-title font-semibold [overflow-wrap:anywhere]`,
									children: e
								}), t ? (0, p.jsx)(`p`, {
									id: A,
									className: `mt-1 text-body text-muted [overflow-wrap:anywhere]`,
									children: t
								}) : null]
							}),
							_ ? (0, p.jsx)(s, {
								label: _,
								onPress: n,
								container: O ?? null,
								className: `-mt-1 -mr-1 shrink-0`
							}) : null
						]
					}),
					l === void 0 ? null : (0, p.jsx)(`div`, {
						className: `flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-4 pb-4 text-body [overflow-wrap:anywhere] sm:px-5`,
						children: h(l, n)
					}),
					g === void 0 ? null : (0, p.jsx)(`div`, {
						className: `flex flex-col-reverse gap-2 border-t border-border bg-sunken px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:flex-row sm:flex-wrap sm:justify-end sm:px-5 sm:pb-3 [&>*]:w-full sm:[&>*]:w-auto`,
						children: h(g, n)
					})
				] })
			})
		})
	});
	return S === void 0 ? M : (0, p.jsxs)(r, {
		...j,
		children: [S, M]
	});
}
export { g as t };
