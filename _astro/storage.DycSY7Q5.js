function e(e) {
	if (e === null || typeof window > `u`) return null;
	try {
		return window.localStorage.getItem(e);
	} catch {
		return null;
	}
}
function t(e, t) {
	if (e === null || typeof window > `u`) return !1;
	try {
		return t === null ? window.localStorage.removeItem(e) : window.localStorage.setItem(e, t), !0;
	} catch {
		return !1;
	}
}
function n(e) {
	return typeof window < `u` && typeof window.matchMedia == `function` && window.matchMedia(e).matches;
}
function r(e, t) {
	if (typeof window > `u` || typeof window.matchMedia != `function`) return () => {};
	let n = window.matchMedia(e);
	return n.addEventListener(`change`, t), () => n.removeEventListener(`change`, t);
}
export { t as i, e as n, r, n as t };
