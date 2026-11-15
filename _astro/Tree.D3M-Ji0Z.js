import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, R as n, bt as r, cn as i, ct as a, dn as o, et as s, fn as c, gn as l, hn as u, on as d, sn as f, yn as p, yt as m } from "./doc.C_PtMNUB.js";
import { a as ee, o as h } from "./Checkbox.TwqnTrT7.js";
import { b as g, i as _, v } from "./useCollection.Cn_I2nJQ.js";
import { d as y, f as b, l as x, u as S } from "./ListBox.Bq8IE31A.js";
import { c as te, n as ne, s as re } from "./FocusScope.DSjTtRFm.js";
import { n as C, t as w } from "./useGridListItem.CURXYjVf.js";
import { n as T } from "./useLocalizedStringFormatter.whw0Qxu0.js";
import { a as ie, d as E, i as D, l as O, n as k, o as A, r as j, t as M } from "./CollectionBuilder.BW1Ria3_.js";
import { a as ae, i as N, t as P } from "./useLoadMoreSentinel.BhNRPrj4.js";
import { n as F } from "./react-dom.B9zIfLd2.js";
import { t as oe } from "./useTreeState.Br6cfIGF.js";
import { t as I } from "./useControlledState.DijOhE0s.js";
import { i as se } from "./GridList.Be-Qku2e.js";
import { n as L } from "./VisuallyHidden.BNHsLrt2.js";
var R = 10, z = 5, B = class {
	setup(e, t, n) {
		this.delegate = e, this.state = t, this.direction = n;
	}
	getDropTargetFromPoint(e, t, n) {
		let r = this.delegate.getDropTargetFromPoint(e, t, n);
		return !r || r.type === `root` ? r : this.resolveDropTarget(r, e, t, n);
	}
	resolveDropTarget(e, t, n, r) {
		let i = this.pointerTracking, a = n - i.lastY, o = t - i.lastX, s = i.yDirection, c = i.xDirection;
		if (Math.abs(a) > z && (s = a > 0 ? `down` : `up`, i.yDirection = s, i.lastY = n), Math.abs(o) > R && (c = o > 0 ? `right` : `left`, i.xDirection = c, i.lastX = t), e.dropPosition === `before`) {
			let t = this.state.collection.getKeyBefore(e.key);
			for (; t != null;) {
				let e = this.state.collection.getItem(t);
				if (e?.type === `item`) break;
				t = e?.parentKey ?? null;
			}
			if (t != null) {
				let n = {
					type: `item`,
					key: t,
					dropPosition: `after`
				};
				r(n) && (e = n);
			}
		}
		let l = this.getPotentialTargets(e, r);
		if (l.length === 0) return { type: `root` };
		let u;
		return l.length > 1 ? u = this.selectTarget(l, e, t, n, s, c) : (u = l[0], i.boundaryContext = null), u;
	}
	getPotentialTargets(e, t) {
		if (e.dropPosition === `on`) return [e];
		let n = e, r = this.state.collection, i = r.getItem(n.key);
		for (; i && i?.type !== `item` && i.nextKey != null;) n.key = i.nextKey, i = r.getItem(i.nextKey);
		let a = [n];
		if (i && i.hasChildNodes && this.state.expandedKeys.has(i.key) && r.getChildren && n.dropPosition === `after`) {
			let e = i.firstChildKey == null ? null : r.getItem(i.firstChildKey);
			for (; e && e.type !== `item`;) e = e.nextKey == null ? null : r.getItem(e.nextKey);
			if (e?.type === `item`) {
				let n = {
					type: `item`,
					key: e.key,
					dropPosition: `before`
				};
				return t(n) ? [n] : [];
			}
		}
		if (i?.nextKey != null) return [e];
		let o = i?.parentKey, s = [];
		for (; o != null;) {
			let e = r.getItem(o), n = e?.nextKey == null ? null : r.getItem(e.nextKey);
			if (!n || n.parentKey !== o) {
				if (e?.type === `item`) {
					let e = {
						type: `item`,
						key: o,
						dropPosition: `after`
					};
					t(e) && s.push(e);
				}
				if (n) break;
			}
			o = e?.parentKey;
		}
		if (s.length > 0 && a.push(...s), a.length === 1) {
			let e = r.getKeyAfter(n.key), a = e == null ? null : r.getItem(e);
			if (e != null && a && i && a.level != null && i.level != null && a.level > i.level) {
				let n = {
					type: `item`,
					key: e,
					dropPosition: `before`
				};
				if (t(n)) return [n];
			}
		}
		return a.filter(t);
	}
	selectTarget(e, t, n, r, i, a) {
		if (e.length < 2) return e[0];
		let o = this.pointerTracking, s = this.state.collection.getItem(t.key)?.parentKey;
		if (s == null) return e[0];
		o.boundaryContext && o.boundaryContext.parentKey === s || (o.boundaryContext = {
			parentKey: s,
			preferredTargetIndex: o.yDirection === `up` ? e.length - 1 : 0,
			lastSwitchY: r,
			lastSwitchX: n
		});
		let c = o.boundaryContext, l = Math.abs(n - c.lastSwitchX);
		if (Math.abs(r - c.lastSwitchY) > z && i) {
			let t = c.preferredTargetIndex || 0;
			i === `down` && t === 0 ? c.preferredTargetIndex = e.length - 1 : i === `up` && t === e.length - 1 && (c.preferredTargetIndex = 0), o.xDirection = null;
		}
		if (l > R && a) {
			let t = c.preferredTargetIndex || 0;
			a === `left` ? this.direction === `ltr` ? t < e.length - 1 && (c.preferredTargetIndex = t + 1, c.lastSwitchX = n) : t > 0 && (c.preferredTargetIndex = t - 1, c.lastSwitchX = n) : a === `right` && (this.direction === `ltr` ? t > 0 && (c.preferredTargetIndex = t - 1, c.lastSwitchX = n) : t < e.length - 1 && (c.preferredTargetIndex = t + 1, c.lastSwitchX = n)), o.yDirection = null;
		}
		return e[Math.max(0, Math.min(c.preferredTargetIndex || 0, e.length - 1))];
	}
	constructor() {
		this.delegate = null, this.state = null, this.direction = `ltr`, this.pointerTracking = {
			lastY: 0,
			lastX: 0,
			yDirection: null,
			xDirection: null,
			boundaryContext: null
		};
	}
};
function V(e, t, n) {
	let { gridProps: r } = C(e, t, n);
	return r.role = `treegrid`, { gridProps: r };
}
var H = {};
H = {
	collapse: `طي`,
	expand: `تمديد`
};
var U = {};
U = {
	collapse: `Свиване`,
	expand: `Разширяване`
};
var W = {};
W = {
	collapse: `Sbalit`,
	expand: `Roztáhnout`
};
var G = {};
G = {
	collapse: `Skjul`,
	expand: `Udvid`
};
var K = {};
K = {
	collapse: `Reduzieren`,
	expand: `Erweitern`
};
var q = {};
q = {
	collapse: `Σύμπτυξη`,
	expand: `Ανάπτυξη`
};
var J = {};
J = {
	expand: `Expand`,
	collapse: `Collapse`
};
var ce = {};
ce = {
	collapse: `Contraer`,
	expand: `Expandir`
};
var Y = {};
Y = {
	collapse: `Ahenda`,
	expand: `Laienda`
};
var X = {};
X = {
	collapse: `Pienennä`,
	expand: `Laajenna`
};
var Z = {};
Z = {
	collapse: `Réduire`,
	expand: `Développer`
};
var le = {};
le = {
	collapse: `כווץ`,
	expand: `הרחב`
};
var Q = {};
Q = {
	collapse: `Sažmi`,
	expand: `Proširi`
};
var ue = {};
ue = {
	collapse: `Összecsukás`,
	expand: `Kibontás`
};
var de = {};
de = {
	collapse: `Comprimi`,
	expand: `Espandi`
};
var fe = {};
fe = {
	collapse: `折りたたむ`,
	expand: `展開`
};
var pe = {};
pe = {
	collapse: `접기`,
	expand: `펼치기`
};
var me = {};
me = {
	collapse: `Sutraukti`,
	expand: `Išskleisti`
};
var he = {};
he = {
	collapse: `Sakļaut`,
	expand: `Izvērst`
};
var ge = {};
ge = {
	collapse: `Skjul`,
	expand: `Utvid`
};
var _e = {};
_e = {
	collapse: `Samenvouwen`,
	expand: `Uitvouwen`
};
var ve = {};
ve = {
	collapse: `Zwiń`,
	expand: `Rozwiń`
};
var ye = {};
ye = {
	collapse: `Recolher`,
	expand: `Expandir`
};
var be = {};
be = {
	collapse: `Colapsar`,
	expand: `Expandir`
};
var xe = {};
xe = {
	collapse: `Restrângeți`,
	expand: `Extindeți`
};
var Se = {};
Se = {
	collapse: `Свернуть`,
	expand: `Развернуть`
};
var Ce = {};
Ce = {
	collapse: `Zbaliť`,
	expand: `Rozbaliť`
};
var we = {};
we = {
	collapse: `Strni`,
	expand: `Razširi`
};
var Te = {};
Te = {
	collapse: ` Skupi`,
	expand: `Proširi`
};
var Ee = {};
Ee = {
	collapse: `Dölj`,
	expand: `Expandera`
};
var De = {};
De = {
	collapse: `Daralt`,
	expand: `Genişlet`
};
var Oe = {};
Oe = {
	collapse: `Згорнути`,
	expand: `Розгорнути`
};
var ke = {};
ke = {
	collapse: `折叠`,
	expand: `扩展`
};
var Ae = {};
Ae = {
	collapse: `收合`,
	expand: `展開`
};
var je = {};
je = {
	"ar-AE": H,
	"bg-BG": U,
	"cs-CZ": W,
	"da-DK": G,
	"de-DE": K,
	"el-GR": q,
	"en-US": J,
	"es-ES": ce,
	"et-EE": Y,
	"fi-FI": X,
	"fr-FR": Z,
	"he-IL": le,
	"hr-HR": Q,
	"hu-HU": ue,
	"it-IT": de,
	"ja-JP": fe,
	"ko-KR": pe,
	"lt-LT": me,
	"lv-LV": he,
	"nb-NO": ge,
	"nl-NL": _e,
	"pl-PL": ve,
	"pt-BR": ye,
	"pt-PT": be,
	"ro-RO": xe,
	"ru-RU": Se,
	"sk-SK": Ce,
	"sl-SI": we,
	"sr-SP": Te,
	"sv-SE": Ee,
	"tr-TR": De,
	"uk-UA": Oe,
	"zh-CN": ke,
	"zh-TW": Ae
};
function Me(e) {
	return e && e.__esModule ? e.default : e;
}
function Ne(e, t, n) {
	let { node: i } = e, a = w(e, t, n), o = a.rowProps[`aria-expanded`] === !0, s = T(Me(je), `@react-aria/tree`), c = {
		onPress: () => {
			a.isDisabled || (t.toggleKey(i.key), t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(i.key));
		},
		excludeFromTabOrder: !0,
		preventFocusOnPress: !0,
		"data-react-aria-prevent-focus": !0,
		...r({
			"aria-label": o ? s.format(`collapse`) : s.format(`expand`),
			"aria-labelledby": a.rowProps.id
		})
	};
	return {
		...a,
		expandButtonProps: c
	};
}
var $ = e(F(), 1), Pe = class e extends A {
	withExpandedKeys(t, n) {
		let r = this.clone();
		return r.expandedKeys = n, e.cloneAncestorSections(n, t, r), e.cloneAncestorSections(t, n, r), r.frozen = this.frozen, r;
	}
	static cloneAncestorSections(e, t, n) {
		for (let r of e) if (!t.has(r)) {
			let e = r;
			for (; e != null;) {
				let t = n.getItem(e);
				if (t?.type === `section`) {
					n.keyMap.set(e, t.clone());
					break;
				}
				e = t?.parentKey ?? null;
			}
		}
	}
	*[Symbol.iterator]() {
		let e = this.getFirstKey(), t = e == null ? null : this.getItem(e);
		for (; t;) if (yield t, t.type === `section`) t = t.nextKey == null ? null : this.getItem(t.nextKey);
		else {
			let e = this.getKeyAfter(t.key);
			t = e == null ? null : this.getItem(e);
		}
	}
	getLastKey() {
		let e = this.lastKey;
		if (e == null) return null;
		let t = this.getItem(e);
		for (; t?.lastChildKey != null && (t.type !== `item` || this.expandedKeys.has(t.key));) t = this.getItem(t.lastChildKey);
		return t?.key;
	}
	getKeyAfter(e) {
		let t = this.getItem(e);
		if (!t) return null;
		if ((this.expandedKeys.has(t.key) || t.type !== `item`) && t.firstChildKey != null) return t.firstChildKey;
		for (; t;) {
			if (t.nextKey != null) return t.nextKey;
			if (t.parentKey != null) t = this.getItem(t.parentKey);
			else return null;
		}
		return null;
	}
	getKeyBefore(e) {
		let t = this.getItem(e);
		if (!t) return null;
		if (t.prevKey != null) {
			for (t = this.getItem(t.prevKey); t && (t.type !== `item` || this.expandedKeys.has(t.key)) && t.lastChildKey != null;) t = this.getItem(t.lastChildKey);
			return t?.key ?? null;
		}
		return t.parentKey;
	}
	getChildren(e) {
		let t = this;
		return { *[Symbol.iterator]() {
			let n = t.getItem(e), r = n?.firstChildKey == null ? null : t.getItem(n.firstChildKey);
			if (n && n.type === `section` && r) for (; r && r.key !== n.nextKey;) {
				yield t.getItem(r.key);
				let e = t.getKeyAfter(r.key);
				r = e == null ? null : t.getItem(e);
			}
			else for (; r;) yield r, r = r.nextKey == null ? null : t.getItem(r.nextKey);
		} };
	}
	getTextValue(e) {
		let t = this.getItem(e);
		return t ? t.textValue : ``;
	}
	constructor(...e) {
		super(...e), this.expandedKeys = new Set();
	}
}, Fe = (0, $.createContext)(null), Ie = (0, $.createContext)(null), Le = (0, $.forwardRef)(function(e, t) {
	return [e, t] = f(e, t, Fe), $.createElement(k, {
		content: $.createElement(D, e),
		createCollection: () => new Pe()
	}, (n) => $.createElement(ze, {
		props: e,
		collection: n,
		treeRef: t
	}));
}), Re = {
	expand: {
		ltr: `ArrowRight`,
		rtl: `ArrowLeft`
	},
	collapse: {
		ltr: `ArrowLeft`,
		rtl: `ArrowRight`
	}
};
function ze({ props: e, collection: t, treeRef: n }) {
	let { dragAndDropHooks: r } = e, { direction: o } = m(), u = N({
		usage: `search`,
		sensitivity: `base`
	}), f = !!r?.useDraggableCollectionState, p = !!r?.useDroppableCollectionState, ee = (0, $.useRef)(f), h = (0, $.useRef)(p);
	(0, $.useEffect)(() => {
		ee.current !== f && console.warn(`Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.`), h.current !== p && console.warn(`Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.`);
	}, [f, p]);
	let { selectionMode: g = `none`, expandedKeys: _, defaultExpandedKeys: re, onExpandedChange: C, disabledBehavior: w = `all` } = e, { CollectionRoot: T, isVirtualized: ie, layoutDelegate: E, dropTargetDelegate: D } = (0, $.useContext)(v), [O, k] = I(_ ? new Set(_) : void 0, re ? new Set(re) : new Set(), C), [A, j] = (0, $.useState)(t), [M, P] = (0, $.useState)(O), [F, se] = (0, $.useState)(() => t.withExpandedKeys(M, O));
	Ye(M, O) && t === A || (se(t.withExpandedKeys(M, O)), j(t), P(O));
	let L = oe({
		...e,
		selectionMode: g,
		expandedKeys: O,
		onExpandedChange: k,
		collection: F,
		children: void 0,
		disabledBehavior: w
	}), { gridProps: R } = V({
		...e,
		isVirtualized: ie,
		layoutDelegate: E
	}, L, n), z, H, U, W = !1, G = null, K = (0, $.useRef)(null);
	if (f && r) {
		z = r.useDraggableCollectionState({
			collection: L.collection,
			selectionManager: L.selectionManager,
			preview: r.renderDragPreview ? K : void 0
		}), r.useDraggableCollection({}, z, n);
		let e = r.DragPreview;
		G = r.renderDragPreview ? $.createElement(e, { ref: K }, r.renderDragPreview) : null;
	}
	let [q] = (0, $.useState)(() => new B());
	if (p && r) {
		H = r.useDroppableCollectionState({
			collection: L.collection,
			selectionManager: L.selectionManager
		});
		let e = r.dropTargetDelegate || D || new r.ListDropTargetDelegate(L.collection, n, { direction: o });
		q.setup(e, L, o);
		let t = new ae({
			collection: L.collection,
			collator: u,
			ref: n,
			disabledKeys: L.selectionManager.disabledKeys,
			disabledBehavior: L.selectionManager.disabledBehavior,
			direction: o,
			layoutDelegate: E
		});
		U = r.useDroppableCollection({
			keyboardDelegate: t,
			dropTargetDelegate: q,
			onDropActivate: (e) => {
				if (e.target.type === `item`) {
					let t = e.target.key, n = L.collection.getItem(t), i = O.has(t);
					n && n.hasChildNodes && (!i || r?.isVirtualDragging?.()) && L.toggleKey(t);
				}
			},
			onKeyDown: (e) => {
				let t = H?.target;
				if (t && t.type === `item` && t.dropPosition === `on`) {
					let n = L.collection.getItem(t.key);
					(e.key === Re.expand[o] && n?.hasChildNodes && !L.expandedKeys.has(t.key) || e.key === Re.collapse[o] && n?.hasChildNodes && L.expandedKeys.has(t.key)) && L.toggleKey(t.key);
				}
			}
		}, H, n), W = H.isDropTarget({ type: `root` });
	}
	let J = !(!f || z?.isDisabled), { focusProps: ce, isFocused: Y, isFocusVisible: X } = s(), Z = {
		isEmpty: L.collection.size === 0,
		isFocused: Y,
		isFocusVisible: X,
		isDropTarget: W,
		selectionMode: L.selectionManager.selectionMode,
		allowsDragging: !!J,
		state: L
	}, le = i({
		...e,
		children: void 0,
		defaultClassName: `react-aria-Tree`,
		values: Z
	}), Q = null;
	if (L.collection.size === 0 && e.renderEmptyState) {
		let { isEmpty: t, ...n } = Z, r = e.renderEmptyState({ ...n });
		Q = $.createElement(`div`, {
			role: `row`,
			style: { display: `contents` },
			"aria-level": 1
		}, $.createElement(`div`, {
			role: `gridcell`,
			style: { display: `contents` }
		}, r));
	}
	let ue = a(e, { global: !0 });
	return $.createElement($.Fragment, null, $.createElement(ne, null, $.createElement(c.div, {
		...l(ue, le, R, ce, U?.collectionProps),
		ref: n,
		slot: e.slot || void 0,
		"data-empty": L.collection.size === 0 || void 0,
		"data-focused": Y || void 0,
		"data-drop-target": W || void 0,
		"data-focus-visible": X || void 0,
		"data-selection-mode": L.selectionManager.selectionMode === `none` ? void 0 : L.selectionManager.selectionMode,
		"data-allows-dragging": !!J || void 0
	}, $.createElement(d, { values: [
		[Ie, L],
		[S, {
			dragAndDropHooks: r,
			dragState: z,
			dropState: H
		}],
		[b, { render: Ge }]
	] }, p && $.createElement(Je, null), $.createElement(te, null, $.createElement(T, {
		collection: L.collection,
		persistedKeys: y(L.selectionManager, r, H),
		scrollRef: n,
		renderDropIndicator: x(r, H)
	}))), Q)), G);
}
var Be = class extends E {
	static {
		this.type = `content`;
	}
}, Ve = M(Be, function(e) {
	let t = (0, $.useContext)(He), n = i({
		children: e.children,
		values: t
	});
	return $.createElement(v.Provider, { value: g }, n.children);
}), He = (0, $.createContext)(null), Ue = class extends E {
	static {
		this.type = `item`;
	}
}, We = j(Ue, (e, r, f) => {
	let m = (0, $.useContext)(Ie);
	r = u(r);
	let { dragAndDropHooks: g, dragState: _, dropState: v } = (0, $.useContext)(S), y = _ && !(_.isDisabled || _.selectionManager.isDisabled(f.key)), { rowProps: b, gridCellProps: x, expandButtonProps: te, descriptionProps: ne, ...C } = Ne({
		node: f,
		shouldSelectOnPressUp: !!_,
		focusMode: e.focusMode,
		allowsArrowNavigation: e.allowsArrowNavigation
	}, m, r), w = b[`aria-expanded`] === !0, T = e.hasChildItems || [...m.collection.getChildren(f.key)].length > 1, E = b[`aria-level`] || 1, { hoverProps: D, isHovered: O } = t({
		isDisabled: !C.allowsSelection && !C.hasAction && !y,
		onHoverStart: e.onHoverStart,
		onHoverChange: e.onHoverChange,
		onHoverEnd: e.onHoverEnd
	}), { isFocusVisible: k, focusProps: A } = s(), { isFocusVisible: j, focusProps: M } = s({ within: !0 }), { checkboxProps: ae } = se({ key: f.key }, m), N = null;
	_ && g && (N = g.useDraggableItem({
		key: f.key,
		hasDragButton: !0
	}, _));
	let P = null, F = (0, $.useRef)(null), oe = (0, $.useRef)(null), I = (0, $.useRef)(null), { visuallyHiddenProps: R } = L();
	v && g && (P = g.useDropIndicator({
		target: {
			type: `item`,
			key: f.key,
			dropPosition: `on`
		},
		activateButtonRef: I
	}, v, oe));
	let z = _ && _.isDragging(f.key), B = P?.isDropTarget, V = m.selectionManager.selectionMode, H = m.selectionManager.selectionBehavior, U = $.useMemo(() => ({
		...C,
		isHovered: O,
		isFocusVisible: k,
		isExpanded: w,
		hasChildItems: T,
		level: E,
		selectionMode: V,
		selectionBehavior: H,
		isFocusVisibleWithin: j,
		state: m,
		id: f.key,
		allowsDragging: !!_,
		isDragging: z,
		isDropTarget: B
	}), [
		C,
		O,
		k,
		w,
		T,
		E,
		j,
		m,
		f.key,
		_,
		z,
		B,
		H,
		V
	]), W = i({
		...e,
		id: void 0,
		children: f.rendered,
		defaultClassName: `react-aria-TreeItem`,
		defaultStyle: { "--tree-item-level": E },
		values: U
	});
	(0, $.useEffect)(() => {
		f.textValue;
	}, [f.textValue]), (0, $.useEffect)(() => {
		T && F.current;
	}, []);
	let G = (0, $.useRef)(null);
	(0, $.useEffect)(() => {
		_ && G.current;
	}, []);
	let K = ie({
		items: m.collection.getChildren(f.key),
		children: (e) => {
			switch (e.type) {
				case `content`: return e.render(e);
				case `loader`:
				case `item`: return $.createElement($.Fragment, null);
				default: throw Error(`Unsupported element type in TreeRow: ` + e.type);
			}
		}
	}), q = p(), J = a(e, { global: !0 });
	return delete J.id, delete J.onClick, $.createElement($.Fragment, null, P && !P.isHidden && $.createElement(`div`, {
		role: `row`,
		"aria-level": b[`aria-level`],
		"aria-expanded": b[`aria-expanded`],
		"aria-label": P.dropIndicatorProps[`aria-label`]
	}, $.createElement(`div`, {
		role: `gridcell`,
		"aria-colindex": 1,
		style: { display: `contents` }
	}, $.createElement(`div`, {
		role: `button`,
		...R,
		...P.dropIndicatorProps,
		ref: oe
	}), b[`aria-expanded`] == null ? null : $.createElement(`div`, {
		role: `button`,
		...R,
		id: q,
		"aria-label": te[`aria-label`],
		"aria-labelledby": `${q} ${b.id}`,
		tabIndex: -1,
		ref: I
	}))), $.createElement(c.div, {
		...l(J, b, A, D, M, N?.dragProps),
		...W,
		ref: r,
		"data-expanded": T && w || void 0,
		"data-has-child-items": T || void 0,
		"data-level": E,
		"data-selected": C.isSelected || void 0,
		"data-disabled": C.isDisabled || void 0,
		"data-hovered": O || void 0,
		"data-focused": C.isFocused || void 0,
		"data-focus-visible": k || void 0,
		"data-pressed": C.isPressed || void 0,
		"data-selection-mode": m.selectionManager.selectionMode === `none` ? void 0 : m.selectionManager.selectionMode,
		"data-allows-dragging": !!_ || void 0,
		"data-dragging": z || void 0,
		"data-drop-target": B || void 0
	}, $.createElement(`div`, {
		...x,
		style: { display: `contents` }
	}, $.createElement(d, { values: [
		[ee, { slots: {
			[o]: {},
			selection: ae
		} }],
		[h, { slots: {
			[o]: {},
			selection: ae
		} }],
		[n, { slots: {
			[o]: {},
			chevron: {
				...te,
				ref: F
			},
			drag: {
				...N?.dragButtonProps,
				ref: G,
				style: { pointerEvents: `none` }
			}
		} }],
		[He, { ...U }],
		[re, { isSelected: C.isSelected }]
	] }, K))));
});
M(O, function(e, t, n) {
	let { isVirtualized: r } = (0, $.useContext)(v), o = (0, $.useContext)(Ie), { isLoading: s, onLoadMore: d, scrollOffset: f, ...p } = e, m = (0, $.useRef)(null), ee = (0, $.useMemo)(() => ({
		onLoadMore: d,
		collection: o?.collection,
		sentinelRef: m,
		scrollOffset: f
	}), [
		d,
		f,
		o?.collection
	]);
	P(ee, m), t = u(t);
	let { rowProps: h, gridCellProps: g } = Ne({ node: n }, o, t), y = h[`aria-level`] || 1, b = {
		role: `row`,
		"aria-level": h[`aria-level`]
	}, x = i({
		...p,
		id: void 0,
		children: n.rendered,
		defaultClassName: `react-aria-TreeLoader`,
		values: { level: y }
	}), S = {};
	return r && (S = { display: `contents` }), $.createElement($.Fragment, null, $.createElement(`div`, {
		style: {
			position: `relative`,
			width: 0,
			height: 0
		},
		inert: _(!0)
	}, $.createElement(`div`, {
		"data-testid": `loadMoreSentinel`,
		ref: m,
		style: {
			position: `absolute`,
			height: 1,
			width: 1
		}
	})), s && x.children && $.createElement(c.div, {
		ref: t,
		...l(a(e), b),
		...x,
		"data-level": y
	}, $.createElement(`div`, {
		...g,
		style: S
	}, x.children)));
});
function Ge(e, t) {
	t = u(t);
	let { dragAndDropHooks: n, dropState: r } = (0, $.useContext)(S), i = (0, $.useRef)(null), { dropIndicatorProps: a, isHidden: o, isDropTarget: s } = n.useDropIndicator(e, r, i);
	if (o) return null;
	let c = r && e.target.type === `item` ? (r.collection.getItem(e.target.key)?.level || 0) + 1 : 1;
	return $.createElement(qe, {
		...e,
		dropIndicatorProps: a,
		isDropTarget: s,
		ref: t,
		buttonRef: i,
		level: c
	});
}
function Ke(e, t) {
	let { dropIndicatorProps: n, isDropTarget: r, buttonRef: a, level: o, ...s } = e, { visuallyHiddenProps: l } = L(), u = i({
		...s,
		defaultClassName: `react-aria-DropIndicator`,
		defaultStyle: {
			position: `relative`,
			"--tree-item-level": o
		},
		values: { isDropTarget: r }
	});
	return $.createElement(c.div, {
		...u,
		role: `row`,
		"aria-level": o,
		ref: t,
		"data-drop-target": r || void 0
	}, $.createElement(`div`, { role: `gridcell` }, $.createElement(`div`, {
		...l,
		role: `button`,
		...n,
		ref: a
	}), u.children));
}
var qe = (0, $.forwardRef)(Ke);
function Je() {
	let { dragAndDropHooks: e, dropState: t } = (0, $.useContext)(S), n = (0, $.useRef)(null), { dropIndicatorProps: r } = e.useDropIndicator({ target: { type: `root` } }, t, n), i = t.isDropTarget({ type: `root` }), { visuallyHiddenProps: a } = L();
	return !i && r[`aria-hidden`] ? null : $.createElement(`div`, {
		role: `row`,
		"aria-hidden": r[`aria-hidden`],
		style: { position: `absolute` }
	}, $.createElement(`div`, { role: `gridcell` }, $.createElement(`div`, {
		role: `button`,
		...a,
		...r,
		ref: n
	})));
}
function Ye(e, t) {
	if (e.size !== t.size) return !1;
	for (let n of e) if (!t.has(n)) return !1;
	return !0;
}
export { B as i, We as n, Le as r, Ve as t };
