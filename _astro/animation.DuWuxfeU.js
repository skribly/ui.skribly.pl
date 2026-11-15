import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { Sn as t, tn as n, xn as r, xt as i } from "./doc.C_PtMNUB.js";
import { n as a, t as o } from "./react-dom.B9zIfLd2.js";
var s = e(o(), 1), c = e(a(), 1);
function l(e, i = !0, a) {
	let [o, s] = (0, c.useState)(!0), l = o && i;
	return r(() => {
		if (!i && e.current) return t(n(e.current, `opacity`, `0`), n(e.current, `clip`, `rect(0 0 0 0)`), n(e.current, `clip-path`, `inset(50%)`), n(e.current, `mask-image`, `linear-gradient(#0000, #0000)`));
	}, [e, i]), r(() => {
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
function d(e, t, n, a) {
	let o = (0, c.useRef)(null), l = i(n);
	r(() => {
		if (t && e.current && o.current !== t) {
			if (o.current = t, !(`getAnimations` in e.current)) {
				a();
				return;
			}
			let n = l?.(e.current), r = e.current.getAnimations().filter((e) => (typeof DocumentTimeline > `u` || e.timeline instanceof DocumentTimeline) && e.playState === `running`);
			if (r.length === 0 && !n) {
				a();
				return;
			}
			Promise.all([n, ...r.map((e) => e.finished)]).then(() => {
				(0, s.flushSync)(() => {
					a();
				});
			}).catch(() => {});
		}
		o.current = t;
	}, [
		e,
		t,
		a
	]);
}
export { l as n, u as t };
