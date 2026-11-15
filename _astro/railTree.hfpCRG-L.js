function e(e, t) {
	return e.href ?? `${t}>${e.label}`;
}
function t(e, n) {
	return n === void 0 ? !1 : e.href === n || (e.children ?? []).some((e) => t(e, n));
}
function n(e) {
	return (e.groups ?? []).flatMap((e) => e.links);
}
function r(e, r) {
	if (r === void 0) return null;
	for (let i of e) if (i.href === r || n(i).some((e) => t(e, r))) return i.id;
	return null;
}
function i(r, i) {
	if (!r || i === void 0) return [];
	let a = (n, r) => {
		for (let o of n) {
			if (!o.children?.length || !t(o, i)) continue;
			let n = e(o, r);
			return [n, ...a(o.children, n)];
		}
		return [];
	};
	return a(n(r), r.id);
}
function a(t, r) {
	if (!t) return null;
	let i = (t, n) => {
		for (let a of t) {
			let t = e(a, n);
			if (t === r) return a;
			let o = a.children ? i(a.children, t) : null;
			if (o) return o;
		}
		return null;
	};
	return i(n(t), t.id);
}
function o(e) {
	let t = [], r = (e, n) => {
		for (let i of e) i.href !== void 0 && t.push({
			link: i,
			trail: n
		}), i.children && r(i.children, [...n, i.label]);
	};
	return r(n(e), []), t;
}
function s(e, t, n) {
	return (e.x - n.x) * (t.y - n.y) - (t.x - n.x) * (e.y - n.y);
}
function c(e, t, n, r = !1) {
	if (!e || e.x === t.x && e.y === t.y) return !1;
	let i = r ? n.right : n.left, a = {
		x: i,
		y: n.top
	}, o = {
		x: i,
		y: n.bottom
	}, c = s(t, e, a), l = s(t, a, o), u = s(t, o, e);
	return !((c < 0 || l < 0 || u < 0) && (c > 0 || l > 0 || u > 0));
}
export { c as a, t as i, a as n, e as o, o as r, r as s, i as t };
