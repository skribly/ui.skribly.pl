import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { et as t, hn as n } from "./doc.DoLlUurT.js";
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
	let { style: n, isFocusable: r } = e, [o, s] = (0, i.useState)(!1), { focusWithinProps: c } = t({
		isDisabled: !r,
		onFocusWithinChange: (e) => s(e)
	}), l = (0, i.useMemo)(() => o ? n : n ? {
		...a,
		...n
	} : a, [o]);
	return { visuallyHiddenProps: {
		...c,
		style: l
	} };
}
function s(e) {
	let { children: t, elementType: r = `div`, isFocusable: a, style: s, ...c } = e, { visuallyHiddenProps: l } = o(e);
	return i.createElement(r, n(c, l), t);
}
export { o as n, s as t };
