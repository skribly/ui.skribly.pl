import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { Pt as t, y as n } from "./createLucideIcon.npgQlVHx.js";
import { n as r } from "./react-dom.B9zIfLd2.js";
var i = e(r(), 1), a = {
	border: 0,
	clip: `rect(0 0 0 0)`,
	clipPath: `inset(50%)`,
	height: `1px`,
	margin: `-1px`,
	overflow: `hidden`,
	padding: 0,
	position: `absolute`,
	width: `1px`,
	whiteSpace: `nowrap`
};
function o(e = {}) {
	let { style: t, isFocusable: r } = e, [o, s] = (0, i.useState)(!1), { focusWithinProps: c } = n({
		isDisabled: !r,
		onFocusWithinChange: (e) => s(e)
	}), l = (0, i.useMemo)(() => o ? t : t ? {
		...a,
		...t
	} : a, [o]);
	return { visuallyHiddenProps: {
		...c,
		style: l
	} };
}
function s(e) {
	let { children: n, elementType: r = `div`, isFocusable: a, style: s, ...c } = e, { visuallyHiddenProps: l } = o(e);
	return i.createElement(r, t(c, l), n);
}
export { o as n, s as t };
