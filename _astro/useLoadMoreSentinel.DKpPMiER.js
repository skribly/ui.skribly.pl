import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { At as n, L as r, Tt as i, z as a, zt as o } from "./createLucideIcon.npgQlVHx.js";
import { c as s, t as c } from "./CollectionBuilder.Bxdh8Jqj.js";
import { h as l, p as u, s as d, v as f } from "./animation.BhtQe7Yj.js";
var p = e(t(), 1);
function m(e, t) {
	let n = e;
	for (f(n, t) && (n = n.parentElement); n && !f(n, t);) n = n.parentElement;
	return n || document.scrollingElement || document.documentElement;
}
var h = (0, p.createContext)({}), g = c(s, function(e, t) {
	return [e, t] = i(e, t, h), p.createElement(n.header, {
		className: `react-aria-Header`,
		...e,
		ref: t
	}, e.children);
}), _ = class {
	constructor(e) {
		this.ref = e;
	}
	getItemRect(e) {
		let t = this.ref.current;
		if (!t) return null;
		let n = e == null ? null : l(this.ref, e);
		if (!n) return null;
		let r = t.getBoundingClientRect(), i = n.getBoundingClientRect();
		return {
			x: i.left - r.left - t.clientLeft + t.scrollLeft,
			y: i.top - r.top - t.clientTop + t.scrollTop,
			width: i.width,
			height: i.height
		};
	}
	getContentSize() {
		let e = this.ref.current;
		return {
			width: e?.scrollWidth ?? 0,
			height: e?.scrollHeight ?? 0
		};
	}
	getVisibleRect() {
		let e = this.ref.current;
		return {
			x: e?.scrollLeft ?? 0,
			y: e?.scrollTop ?? 0,
			width: e?.clientWidth ?? 0,
			height: e?.clientHeight ?? 0
		};
	}
}, v = class {
	constructor(...e) {
		if (e.length === 1) {
			let t = e[0];
			this.collection = t.collection, this.ref = t.ref, this.collator = t.collator, this.disabledKeys = t.disabledKeys || new Set(), this.disabledBehavior = t.disabledBehavior || `all`, this.orientation = t.orientation || `vertical`, this.direction = t.direction, this.layout = t.layout || `stack`, this.layoutDelegate = t.layoutDelegate || new _(t.ref);
		} else this.collection = e[0], this.disabledKeys = e[1], this.ref = e[2], this.collator = e[3], this.layout = `stack`, this.orientation = `vertical`, this.disabledBehavior = `all`, this.layoutDelegate = new _(this.ref);
		this.layout === `stack` && this.orientation === `vertical` && (this.getKeyLeftOf = void 0, this.getKeyRightOf = void 0);
	}
	isDisabled(e) {
		return this.disabledBehavior === `all` && (e.props?.isDisabled || this.disabledKeys.has(e.key)) && e.props?.disabledBehavior !== `selection`;
	}
	findNextNonDisabled(e, t, n = !1) {
		let r = e;
		for (; r != null;) {
			let e = this.collection.getItem(r);
			if (e?.type === `item` && (n || !this.isDisabled(e))) return r;
			r = t(r);
		}
		return null;
	}
	getNextKey(e, t) {
		let n = e;
		return n = this.collection.getKeyAfter(n), this.findNextNonDisabled(n, (e) => this.collection.getKeyAfter(e), t?.includeDisabled);
	}
	getPreviousKey(e, t) {
		let n = e;
		return n = this.collection.getKeyBefore(n), this.findNextNonDisabled(n, (e) => this.collection.getKeyBefore(e), t?.includeDisabled);
	}
	findKey(e, t, n) {
		let r = e, i = this.layoutDelegate.getItemRect(r);
		if (!i || r == null) return null;
		let a = i;
		do {
			if (r = t(r), r == null) break;
			i = this.layoutDelegate.getItemRect(r);
		} while (i && n(a, i) && r != null);
		return r;
	}
	isSameRow(e, t) {
		return e.y === t.y || e.x !== t.x;
	}
	isSameColumn(e, t) {
		return e.x === t.x || e.y !== t.y;
	}
	isReversed(e) {
		let t = this.getNextKey(e), n = l(this.ref, e);
		if (t != null) {
			let e = l(this.ref, t);
			return !n || !e ? !1 : n.getBoundingClientRect().top > e.getBoundingClientRect().top;
		}
		let r = this.getPreviousKey(e);
		if (r != null) {
			let e = l(this.ref, r);
			return !n || !e ? !1 : e.getBoundingClientRect().top > n.getBoundingClientRect().top;
		}
		return !1;
	}
	getKeyBelow(e, t) {
		return this.layout === `grid` && this.orientation === `vertical` ? this.findKey(e, (e) => this.getNextKey(e, t), this.isSameRow) : this.orientation === `vertical` && this.isReversed(e) ? this.getPreviousKey(e, t) : this.getNextKey(e, t);
	}
	getKeyAbove(e, t) {
		return this.layout === `grid` && this.orientation === `vertical` ? this.findKey(e, (e) => this.getPreviousKey(e, t), this.isSameRow) : this.orientation === `vertical` && this.isReversed(e) ? this.getNextKey(e, t) : this.getPreviousKey(e, t);
	}
	getNextColumn(e, t, n) {
		return t ? this.getPreviousKey(e, n) : this.getNextKey(e, n);
	}
	getKeyRightOf(e, t) {
		let n = this.direction === `ltr` ? `getKeyRightOf` : `getKeyLeftOf`;
		return this.layoutDelegate[n] ? (e = this.layoutDelegate[n](e), this.findNextNonDisabled(e, (e) => this.layoutDelegate[n](e), t?.includeDisabled)) : this.layout === `grid` ? this.orientation === `vertical` ? this.getNextColumn(e, this.direction === `rtl`, t) : this.findKey(e, (e) => this.getNextColumn(e, this.direction === `rtl`, t), this.isSameColumn) : this.orientation === `horizontal` ? this.getNextColumn(e, this.direction === `rtl`, t) : null;
	}
	getKeyLeftOf(e, t) {
		let n = this.direction === `ltr` ? `getKeyLeftOf` : `getKeyRightOf`;
		return this.layoutDelegate[n] ? (e = this.layoutDelegate[n](e), this.findNextNonDisabled(e, (e) => this.layoutDelegate[n](e), t?.includeDisabled)) : this.layout === `grid` ? this.orientation === `vertical` ? this.getNextColumn(e, this.direction === `ltr`, t) : this.findKey(e, (e) => this.getNextColumn(e, this.direction === `ltr`, t), this.isSameColumn) : this.orientation === `horizontal` ? this.getNextColumn(e, this.direction === `ltr`, t) : null;
	}
	getFirstKey() {
		let e = this.collection.getFirstKey();
		return this.findNextNonDisabled(e, (e) => this.collection.getKeyAfter(e));
	}
	getLastKey() {
		let e = this.collection.getLastKey();
		return this.findNextNonDisabled(e, (e) => this.collection.getKeyBefore(e));
	}
	getKeyPageAbove(e) {
		let t = this.ref.current, n = this.layoutDelegate.getItemRect(e);
		if (!n) return null;
		let r = this.isReversed(e);
		if (t && !f(t)) return this.getFirstKey();
		let i = e;
		if (this.orientation === `horizontal`) {
			let e = Math.max(0, n.x + n.width - this.layoutDelegate.getVisibleRect().width);
			for (; n && n.x > e && i != null;) i = this.getKeyAbove(i), n = i == null ? null : this.layoutDelegate.getItemRect(i);
		} else {
			let e = this.layoutDelegate.getVisibleRect(), t = r ? n.y - e.height : Math.max(0, n.y + n.height - e.height);
			for (; n && n.y > t && i != null;) i = this.getKeyAbove(i), n = i == null ? null : this.layoutDelegate.getItemRect(i);
		}
		return i ?? (r ? this.getLastKey() : this.getFirstKey());
	}
	getKeyPageBelow(e) {
		let t = this.ref.current, n = this.layoutDelegate.getItemRect(e);
		if (!n) return null;
		let r = this.isReversed(e);
		if (t && !f(t)) return this.getLastKey();
		let i = e;
		if (this.orientation === `horizontal`) {
			let e = Math.min(this.layoutDelegate.getContentSize().width, n.x - n.width + this.layoutDelegate.getVisibleRect().width);
			for (; n && n.x < e && i != null;) i = this.getKeyBelow(i), n = i == null ? null : this.layoutDelegate.getItemRect(i);
		} else {
			let e = Math.min(this.layoutDelegate.getContentSize().height, n.y - n.height + this.layoutDelegate.getVisibleRect().height);
			for (; n && n.y < e && i != null;) i = this.getKeyBelow(i), n = i == null ? null : this.layoutDelegate.getItemRect(i);
		}
		return i ?? (r ? this.getFirstKey() : this.getLastKey());
	}
	getKeyForSearch(e, t) {
		if (!this.collator) return null;
		let n = this.collection, r = t || this.getFirstKey();
		for (; r != null;) {
			let t = n.getItem(r);
			if (!t) return null;
			let i = t.textValue.slice(0, e.length);
			if (t.textValue && this.collator.compare(i, e) === 0) return r;
			r = this.getNextKey(r);
		}
		return null;
	}
}, y = new Map();
function b(e) {
	let { locale: t } = r(), n = t + (e ? Object.entries(e).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : ``);
	if (y.has(n)) return y.get(n);
	let i = new Intl.Collator(t, e);
	return y.set(n, i), i;
}
function x(e) {
	let { selectionManager: t, collection: n, disabledKeys: r, ref: i, keyboardDelegate: a, layoutDelegate: o, orientation: s } = e, c = b({
		usage: `search`,
		sensitivity: `base`
	}), l = t.disabledBehavior, d = (0, p.useMemo)(() => a || new v({
		collection: n,
		disabledKeys: r,
		disabledBehavior: l,
		ref: i,
		collator: c,
		layoutDelegate: o,
		orientation: s
	}), [
		a,
		o,
		n,
		r,
		i,
		c,
		l,
		s
	]), { collectionProps: f } = u({
		...e,
		ref: i,
		selectionManager: t,
		keyboardDelegate: d
	});
	return { listProps: f };
}
var S = new WeakMap();
function C(e) {
	let t = S.get(e);
	if (t != null) return t;
	let n = 0, r = (t) => {
		for (let i of t) i.type === `section` ? r(d(i, e)) : i.type === `item` && n++;
	};
	return r(e), S.set(e, n), n;
}
function w(e, t) {
	let { collection: n, onLoadMore: r, scrollOffset: i = 1, direction: s = `end` } = e, c = (0, p.useRef)(null), l = a((e) => {
		for (let t of e) t.isIntersecting && r && r();
	});
	o(() => {
		if (t.current) {
			let e = 100 * i, n = s === `start` ? `${e}% 0px 0px 0px` : `0px ${e}% ${e}% ${e}%`;
			c.current = new IntersectionObserver(l, {
				root: m(t?.current),
				rootMargin: n
			}), c.current.observe(t.current);
		}
		return () => {
			c.current && c.current.disconnect();
		};
	}, [
		n,
		t,
		i,
		s
	]);
}
export { v as a, h as c, b as i, m as l, C as n, _ as o, x as r, g as s, w as t };
