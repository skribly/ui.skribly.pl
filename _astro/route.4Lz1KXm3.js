function e(...e) {
	let t = e.filter(Boolean);
	return t.length === 0 ? `/` : `/${t.map(encodeURIComponent).join(`/`)}/`;
}
function t(e) {
	return e.replace(/^#\/?/, ``).split(`/`).filter(Boolean).map((e) => {
		try {
			return decodeURIComponent(e);
		} catch {
			return e;
		}
	});
}
function n(n) {
	if (!n.startsWith(`#/`)) return null;
	let r = t(n), [i] = r, a = i === `components` ? 3 : i === `patterns` ? 2 : 1, o = r.slice(0, a), s = r[a];
	return `${e(...o)}${s ? `#${encodeURIComponent(s)}` : ``}`;
}
export { e as n, n as t };
