import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { a as t, i as n, r } from "./animation.BhtQe7Yj.js";
import { t as i } from "./useControlledState.DijOhE0s.js";
import { n as a } from "./react-dom.B9zIfLd2.js";
var o = class {
	constructor(e, { expandedKeys: t } = {}) {
		this.keyMap = new Map(), this.firstKey = null, this.lastKey = null, this.iterable = e, t ||= new Set();
		let n = (e) => {
			if (this.keyMap.set(e.key, e), e.childNodes && (e.type === `section` || t.has(e.key))) for (let t of e.childNodes) n(t);
		};
		for (let t of e) n(t);
		let r = null, i = 0;
		for (let [e, t] of this.keyMap) r ? (r.nextKey = e, t.prevKey = r.key) : (this.firstKey = e, t.prevKey = void 0), t.type === `item` && (t.index = i++), r = t, r.nextKey = void 0;
		this.lastKey = r?.key ?? null;
	}
	*[Symbol.iterator]() {
		yield* this.iterable;
	}
	get size() {
		return this.keyMap.size;
	}
	getKeys() {
		return this.keyMap.keys();
	}
	getKeyBefore(e) {
		let t = this.keyMap.get(e);
		return t ? t.prevKey ?? null : null;
	}
	getKeyAfter(e) {
		let t = this.keyMap.get(e);
		return t ? t.nextKey ?? null : null;
	}
	getFirstKey() {
		return this.firstKey;
	}
	getLastKey() {
		return this.lastKey;
	}
	getItem(e) {
		return this.keyMap.get(e) ?? null;
	}
	at(e) {
		let t = [...this.getKeys()];
		return this.getItem(t[e]);
	}
}, s = e(a(), 1);
function c(e) {
	let { onExpandedChange: a } = e, [c, u] = i(e.expandedKeys ? new Set(e.expandedKeys) : void 0, e.defaultExpandedKeys ? new Set(e.defaultExpandedKeys) : new Set(), a), d = t(e), f = (0, s.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : new Set(), [e.disabledKeys]), p = r(e, (0, s.useCallback)((e) => new o(e, { expandedKeys: c }), [c]), null);
	return (0, s.useEffect)(() => {
		d.focusedKey != null && !p.getItem(d.focusedKey) && d.setFocusedKey(null);
	}, [p, d.focusedKey]), {
		collection: p,
		expandedKeys: c,
		disabledKeys: f,
		toggleKey: (e) => {
			u(l(c, e));
		},
		setExpandedKeys: u,
		selectionManager: new n(p, d)
	};
}
function l(e, t) {
	let n = new Set(e);
	return n.has(t) ? n.delete(t) : n.add(t), n;
}
export { c as t };
