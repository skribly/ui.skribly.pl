import { I as e, L as t, j as n, z as r } from "./doc.C_PtMNUB.js";
import { t as i } from "./Link.DGRKZkR4.js";
import { t as a } from "./Tip.LMUpzjld.js";
var o = e();
function s(e) {
	switch (e) {
		case `ok`: return (0, o.jsx)(n, {
			name: `status.ok`,
			"aria-hidden": !0
		});
		case `warn`: return (0, o.jsx)(n, {
			name: `status.warning`,
			"aria-hidden": !0
		});
		case `danger`: return (0, o.jsx)(n, {
			name: `status.failed`,
			"aria-hidden": !0
		});
		case `info`: return (0, o.jsx)(n, {
			name: `status.info`,
			"aria-hidden": !0
		});
		default: return null;
	}
}
var c = {
	neutral: ``,
	accent: `text-accent-text`,
	ok: `text-ok`,
	warn: `text-warn`,
	danger: `text-danger`,
	info: `text-info`
}, l = `inline-flex min-h-6 max-w-full items-center gap-1.5 [&_svg]:size-3.5 [&_svg]:shrink-0`, u = `rounded-sm px-1 -mx-1 transition-colors data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-selected data-disabled:cursor-not-allowed data-disabled:opacity-50`;
function d({ children: e, icon: n, tone: d = `neutral`, onPress: f, href: p, tip: m, isLive: h = !1, isDisabled: g, container: _, className: v }) {
	let y = n ?? s(d), b = (0, o.jsxs)(o.Fragment, { children: [y ? (0, o.jsx)(`span`, {
		"aria-hidden": !0,
		className: `inline-flex`,
		children: y
	}) : null, (0, o.jsx)(`span`, {
		className: `min-w-0 truncate`,
		children: e
	})] }), x = t(l, c[d], v), S = g === void 0 ? {} : { isDisabled: g }, C;
	return C = p ? (0, o.jsx)(i, {
		...S,
		href: p,
		className: t(x, u, `no-underline data-hovered:underline`),
		children: b
	}) : f ? (0, o.jsx)(r, {
		...S,
		onPress: f,
		className: t(x, u),
		children: b
	}) : (0, o.jsx)(`span`, {
		className: x,
		children: b
	}), m && (p || f) && (C = (0, o.jsx)(a, {
		content: m,
		placement: `top`,
		container: _,
		children: C
	})), h ? (0, o.jsx)(`output`, {
		className: `inline-flex max-w-full`,
		children: C
	}) : C;
}
export { s as n, c as r, d as t };
