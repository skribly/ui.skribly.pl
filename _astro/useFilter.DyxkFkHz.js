import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { i as t } from "./useLoadMoreSentinel.DKpPMiER.js";
import { n } from "./react-dom.B9zIfLd2.js";
var r = e(n(), 1);
function i(e) {
	let n = t({
		usage: `search`,
		...e
	}), i = (0, r.useCallback)((e, t) => t.length === 0 || (e = e.normalize(`NFC`), t = t.normalize(`NFC`), n.compare(e.slice(0, t.length), t) === 0), [n]), a = (0, r.useCallback)((e, t) => t.length === 0 || (e = e.normalize(`NFC`), t = t.normalize(`NFC`), n.compare(e.slice(-t.length), t) === 0), [n]), o = (0, r.useCallback)((e, t) => {
		if (t.length === 0) return !0;
		e = e.normalize(`NFC`), t = t.normalize(`NFC`);
		let r = 0, i = t.length;
		for (; r + i <= e.length; r++) {
			let a = e.slice(r, r + i);
			if (n.compare(t, a) === 0) return !0;
		}
		return !1;
	}, [n]);
	return (0, r.useMemo)(() => ({
		startsWith: i,
		endsWith: a,
		contains: o
	}), [
		i,
		a,
		o
	]);
}
export { i as t };
