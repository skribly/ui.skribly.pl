import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { r as n, t as r } from "./createLucideIcon.npgQlVHx.js";
import { t as i } from "./Link.DyGbagCu.js";
import { n as a, t as o } from "./jsx-runtime.yrTYNGQT.js";
import { t as s } from "./circle-check.CWwdJPsz.js";
import { t as c } from "./circle-x.DVYCYU5D.js";
import { t as l } from "./info.D9DvH9cK.js";
import { t as u } from "./triangle-exclamation-point.BJJ-nXau.js";
import { t as d } from "./Tooltip.Dktf-jPz.js";
var f = {
	name: `circle-dot`,
	size: 24,
	node: [[`circle`, {
		cx: `12`,
		cy: `12`,
		r: `1`,
		key: `41hilf`
	}], [`circle`, {
		cx: `12`,
		cy: `12`,
		r: `10`,
		key: `1mglay`
	}]]
};
f.node;
var p = r(f), m = e(t(), 1), h = (0, m.createContext)(null);
function g() {
	return (0, m.useContext)(h);
}
var _ = (0, m.createContext)(!1);
function v(e, t) {
	let n = e ?? t?.root ?? null;
	return n ? { UNSTABLE_portalContainer: n } : {};
}
var y = o();
function b({ content: e, children: t, placement: n = `bottom`, container: r }) {
	let i = g();
	return (0, y.jsx)(d, {
		content: e,
		placement: n,
		delay: 500,
		container: r ?? i?.root ?? null,
		children: t
	});
}
function x(e) {
	switch (e) {
		case `ok`: return (0, y.jsx)(s, { "aria-hidden": !0 });
		case `warn`: return (0, y.jsx)(u, { "aria-hidden": !0 });
		case `danger`: return (0, y.jsx)(c, { "aria-hidden": !0 });
		case `info`: return (0, y.jsx)(l, { "aria-hidden": !0 });
		default: return null;
	}
}
var S = {
	neutral: ``,
	accent: `text-accent-text`,
	ok: `text-ok`,
	warn: `text-warn`,
	danger: `text-danger`,
	info: `text-info`
}, C = `inline-flex min-h-6 max-w-full items-center gap-1.5 [&_svg]:size-3.5 [&_svg]:shrink-0`, w = `rounded-sm px-1 -mx-1 transition-colors data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-selected data-disabled:cursor-not-allowed data-disabled:opacity-50`;
function T({ children: e, icon: t, tone: r = `neutral`, onPress: o, href: s, tip: c, isLive: l = !1, isDisabled: u, container: d, className: f }) {
	let p = t ?? x(r), m = (0, y.jsxs)(y.Fragment, { children: [p ? (0, y.jsx)(`span`, {
		"aria-hidden": !0,
		className: `inline-flex`,
		children: p
	}) : null, (0, y.jsx)(`span`, {
		className: `min-w-0 truncate`,
		children: e
	})] }), h = a(C, S[r], f), g = u === void 0 ? {} : { isDisabled: u }, _;
	return _ = s ? (0, y.jsx)(i, {
		...g,
		href: s,
		className: a(h, w, `no-underline data-hovered:underline`),
		children: m
	}) : o ? (0, y.jsx)(n, {
		...g,
		onPress: o,
		className: a(h, w),
		children: m
	}) : (0, y.jsx)(`span`, {
		className: h,
		children: m
	}), c && (s || o) && (_ = (0, y.jsx)(b, {
		content: c,
		placement: `top`,
		container: d,
		children: _
	})), l ? (0, y.jsx)(`output`, {
		className: `inline-flex max-w-full`,
		children: _
	}) : _;
}
export { _ as a, g as c, b as i, p as l, x as n, h as o, S as r, v as s, T as t };
