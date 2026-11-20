import { a as e } from "./FocusScope.aBBixRPA.js";
import { It as t, Lt as n, Pt as r, Rt as i, kt as a } from "./useOverflow.Dq483xd0.js";
var o = typeof HTMLElement < `u` && `inert` in HTMLElement.prototype;
function s(e) {
	return e.dataset.liveAnnouncer === `true` || e.dataset.reactAriaTopLayer !== void 0;
}
var c = new WeakMap(), l = [];
function u(u, d) {
	let f = i(u?.[0]), p = d instanceof f.Element ? { root: d } : d, m = p?.root ?? document.body, h = p?.shouldUseInert && o, g = new Set(u), _ = new Set(), v = (e) => h && e instanceof f.HTMLElement ? e.inert : e.getAttribute(`aria-hidden`) === `true`, y = (e, t) => {
		h && e instanceof f.HTMLElement ? e.inert = t : t ? e.setAttribute(`aria-hidden`, `true`) : (e.removeAttribute(`aria-hidden`), e instanceof f.HTMLElement && (e.inert = !1));
	}, b = new Set();
	if (r()) {
		let e = m.getRootNode();
		for (let n of u) {
			let r = n.getRootNode();
			for (; t(r) && r !== e;) b.add(r), r = r.host.getRootNode();
		}
	}
	let x = (t) => {
		for (let e of t.querySelectorAll(`[data-live-announcer], [data-react-aria-top-layer]`)) g.add(e);
		let r = (e) => {
			if (_.has(e) || g.has(e) || e.parentElement && _.has(e.parentElement) && e.parentElement.getAttribute(`role`) !== `row`) return NodeFilter.FILTER_REJECT;
			for (let t of g) if (a(e, t)) return NodeFilter.FILTER_SKIP;
			return NodeFilter.FILTER_ACCEPT;
		}, i = e(n(t), t, NodeFilter.SHOW_ELEMENT, { acceptNode: r }), o = r(t);
		if (o === NodeFilter.FILTER_ACCEPT && S(t), o !== NodeFilter.FILTER_REJECT) {
			let e = i.nextNode();
			for (; e != null;) S(e), e = i.nextNode();
		}
	}, S = (e) => {
		let t = c.get(e) ?? 0;
		v(e) && t === 0 || (t === 0 && y(e, !0), _.add(e), c.set(e, t + 1));
	};
	l.length && l[l.length - 1].disconnect(), x(m);
	let C = new MutationObserver((e) => {
		for (let t of e) if (t.type === `childList`) {
			if (t.target.isConnected && ![...g, ..._].some((e) => a(e, t.target))) for (let e of t.addedNodes) (e instanceof HTMLElement || e instanceof SVGElement) && s(e) ? g.add(e) : e instanceof Element && x(e);
			if (r()) {
				for (let e of b) if (!e.isConnected) {
					C.disconnect();
					break;
				}
			}
		}
	});
	C.observe(m, {
		childList: !0,
		subtree: !0
	});
	let w = new Set();
	if (r()) for (let e of b) {
		let t = new MutationObserver((e) => {
			for (let t of e) if (t.type === `childList`) {
				if (t.target.isConnected && ![...g, ..._].some((e) => a(e, t.target))) for (let e of t.addedNodes) (e instanceof HTMLElement || e instanceof SVGElement) && s(e) ? g.add(e) : e instanceof Element && x(e);
				if (r()) {
					for (let e of b) if (!e.isConnected) {
						C.disconnect();
						break;
					}
				}
			}
		});
		t.observe(e, {
			childList: !0,
			subtree: !0
		}), w.add(t);
	}
	let T = {
		visibleNodes: g,
		hiddenNodes: _,
		observe() {
			C.observe(m, {
				childList: !0,
				subtree: !0
			});
		},
		disconnect() {
			C.disconnect();
		}
	};
	return l.push(T), () => {
		if (C.disconnect(), r()) for (let e of w) e.disconnect();
		for (let e of _) {
			let t = c.get(e);
			t != null && (t === 1 ? (y(e, !1), c.delete(e)) : c.set(e, t - 1));
		}
		T === l[l.length - 1] ? (l.pop(), l.length && l[l.length - 1].observe()) : l.splice(l.indexOf(T), 1);
	};
}
function d(e) {
	let t = l[l.length - 1];
	if (t && !t.visibleNodes.has(e)) return t.visibleNodes.add(e), () => {
		t.visibleNodes.delete(e);
	};
}
export { u as n, d as t };
