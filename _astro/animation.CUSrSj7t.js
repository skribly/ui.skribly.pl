import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { bn as t, bt as n, en as r, xn as i } from "./doc.DoLlUurT.js";
import { n as a, t as o } from "./react-dom.B9zIfLd2.js";
var s = e(o(), 1), c = e(a(), 1);
function l(e, n = !0, a) {
	let [o, s] = (0, c.useState)(!0), l = o && n;
	return t(() => {
		if (!n && e.current) return i(r(e.current, `opacity`, `0`), r(e.current, `clip`, `rect(0 0 0 0)`), r(e.current, `clip-path`, `inset(50%)`), r(e.current, `mask-image`, `linear-gradient(#0000, #0000)`));
	}, [e, n]), t(() => {
		if (l && e.current && `getAnimations` in e.current) for (let t of e.current.getAnimations()) t instanceof CSSTransition && t.cancel();
	}, [e, l]), d(e, l, a, (0, c.useCallback)(() => s(!1), [])), l;
}
function u(e, t, n) {
	let [r, i] = (0, c.useState)(t ? `open` : `closed`);
	switch (r) {
		case `open`:
			t || i(`exiting`);
			break;
		case `closed`:
		case `exiting`: t && i(`open`);
	}
	let a = r === `exiting`;
	return d(e, a, n, (0, c.useCallback)(() => {
		i((e) => e === `exiting` ? `closed` : e);
	}, [])), a;
}
function d(e, r, i, a) {
	let o = (0, c.useRef)(null), l = n(i);
	t(() => {
		if (r && e.current && o.current !== r) {
			if (o.current = r, !(`getAnimations` in e.current)) {
				a();
				return;
			}
			let t = l?.(e.current), n = e.current.getAnimations().filter((e) => (typeof DocumentTimeline > `u` || e.timeline instanceof DocumentTimeline) && e.playState === `running`);
			if (n.length === 0 && !t) {
				a();
				return;
			}
			Promise.all([t, ...n.map((e) => e.finished)]).then(() => {
				(0, s.flushSync)(() => {
					a();
				});
			}).catch(() => {});
		}
		o.current = r;
	}, [
		e,
		r,
		a
	]);
}
export { l as n, u as t };
