import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { At as t, E as n, Et as r, L as i, Lt as a, Nt as o, Pt as s, R as c, Tt as l, _ as u, kt as d, n as f, v as p, wt as m } from "./createLucideIcon.npgQlVHx.js";
import { a as h, o as g } from "./Checkbox.BCm1SjuK.js";
import { S as _, b as v, o as y } from "./animation.BhtQe7Yj.js";
import { d as b, f as x, l as S, u as C } from "./ListBox.B-5aHJx2.js";
import { c as ee, n as te, s as ne } from "./FocusScope.Ba7RJw7M.js";
import { n as w, t as T } from "./useGridListItem.QmQPCsZs.js";
import { n as E } from "./useLocalizedStringFormatter.CY4FHGAo.js";
import { a as re, d as D, i as ie, l as O, n as k, o as ae, r as A, t as j } from "./CollectionBuilder.Bxdh8Jqj.js";
import { a as M, i as N, t as P } from "./useLoadMoreSentinel.DKpPMiER.js";
import { n as F } from "./react-dom.B9zIfLd2.js";
import { t as I } from "./useTreeState.COniaqXp.js";
import { t as L } from "./useControlledState.DijOhE0s.js";
import { i as oe } from "./GridList.Dk2spOFs.js";
import { n as R } from "./VisuallyHidden.DXeJgMmE.js";
var z = 10, B = 5, V = class {
	setup(e, t, n) {
		this.delegate = e, this.state = t, this.direction = n;
	}
	getDropTargetFromPoint(e, t, n) {
		let r = this.delegate.getDropTargetFromPoint(e, t, n);
		return !r || r.type === `root` ? r : this.resolveDropTarget(r, e, t, n);
	}
	resolveDropTarget(e, t, n, r) {
		let i = this.pointerTracking, a = n - i.lastY, o = t - i.lastX, s = i.yDirection, c = i.xDirection;
		if (Math.abs(a) > B && (s = a > 0 ? `down` : `up`, i.yDirection = s, i.lastY = n), Math.abs(o) > z && (c = o > 0 ? `right` : `left`, i.xDirection = c, i.lastX = t), e.dropPosition === `before`) {
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
		if (Math.abs(r - c.lastSwitchY) > B && i) {
			let t = c.preferredTargetIndex || 0;
			i === `down` && t === 0 ? c.preferredTargetIndex = e.length - 1 : i === `up` && t === e.length - 1 && (c.preferredTargetIndex = 0), o.xDirection = null;
		}
		if (l > z && a) {
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
function se(e, t, n) {
	let { gridProps: r } = w(e, t, n);
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
	let { node: r } = e, i = T(e, t, n), a = i.rowProps[`aria-expanded`] === !0, o = E(Me(je), `@react-aria/tree`), s = {
		onPress: () => {
			i.isDisabled || (t.toggleKey(r.key), t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(r.key));
		},
		excludeFromTabOrder: !0,
		preventFocusOnPress: !0,
		"data-react-aria-prevent-focus": !0,
		...c({
			"aria-label": a ? o.format(`collapse`) : o.format(`expand`),
			"aria-labelledby": i.rowProps.id
		})
	};
	return {
		...i,
		expandButtonProps: s
	};
}
var $ = e(F(), 1), Pe = class e extends ae {
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
	return [e, t] = l(e, t, Fe), $.createElement(k, {
		content: $.createElement(ie, e),
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
function ze({ props: e, collection: a, treeRef: o }) {
	let { dragAndDropHooks: c } = e, { direction: l } = i(), u = N({
		usage: `search`,
		sensitivity: `base`
	}), d = !!c?.useDraggableCollectionState, f = !!c?.useDroppableCollectionState, h = (0, $.useRef)(d), g = (0, $.useRef)(f);
	(0, $.useEffect)(() => {
		h.current !== d && console.warn(`Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.`), g.current !== f && console.warn(`Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.`);
	}, [d, f]);
	let { selectionMode: _ = `none`, expandedKeys: y, defaultExpandedKeys: ne, onExpandedChange: w, disabledBehavior: T = `all` } = e, { CollectionRoot: E, isVirtualized: re, layoutDelegate: D, dropTargetDelegate: ie } = (0, $.useContext)(v), [O, k] = L(y ? new Set(y) : void 0, ne ? new Set(ne) : new Set(), w), [ae, A] = (0, $.useState)(a), [j, P] = (0, $.useState)(O), [F, oe] = (0, $.useState)(() => a.withExpandedKeys(j, O));
	Ye(j, O) && a === ae || (oe(a.withExpandedKeys(j, O)), A(a), P(O));
	let R = I({
		...e,
		selectionMode: _,
		expandedKeys: O,
		onExpandedChange: k,
		collection: F,
		children: void 0,
		disabledBehavior: T
	}), { gridProps: z } = se({
		...e,
		isVirtualized: re,
		layoutDelegate: D
	}, R, o), B, H, U, W = !1, G = null, K = (0, $.useRef)(null);
	if (d && c) {
		B = c.useDraggableCollectionState({
			collection: R.collection,
			selectionManager: R.selectionManager,
			preview: c.renderDragPreview ? K : void 0
		}), c.useDraggableCollection({}, B, o);
		let e = c.DragPreview;
		G = c.renderDragPreview ? $.createElement(e, { ref: K }, c.renderDragPreview) : null;
	}
	let [q] = (0, $.useState)(() => new V());
	if (f && c) {
		H = c.useDroppableCollectionState({
			collection: R.collection,
			selectionManager: R.selectionManager
		});
		let e = c.dropTargetDelegate || ie || new c.ListDropTargetDelegate(R.collection, o, { direction: l });
		q.setup(e, R, l);
		let t = new M({
			collection: R.collection,
			collator: u,
			ref: o,
			disabledKeys: R.selectionManager.disabledKeys,
			disabledBehavior: R.selectionManager.disabledBehavior,
			direction: l,
			layoutDelegate: D
		});
		U = c.useDroppableCollection({
			keyboardDelegate: t,
			dropTargetDelegate: q,
			onDropActivate: (e) => {
				if (e.target.type === `item`) {
					let t = e.target.key, n = R.collection.getItem(t), r = O.has(t);
					n && n.hasChildNodes && (!r || c?.isVirtualDragging?.()) && R.toggleKey(t);
				}
			},
			onKeyDown: (e) => {
				let t = H?.target;
				if (t && t.type === `item` && t.dropPosition === `on`) {
					let n = R.collection.getItem(t.key);
					(e.key === Re.expand[l] && n?.hasChildNodes && !R.expandedKeys.has(t.key) || e.key === Re.collapse[l] && n?.hasChildNodes && R.expandedKeys.has(t.key)) && R.toggleKey(t.key);
				}
			}
		}, H, o), W = H.isDropTarget({ type: `root` });
	}
	let J = !(!d || B?.isDisabled), { focusProps: ce, isFocused: Y, isFocusVisible: X } = p(), Z = {
		isEmpty: R.collection.size === 0,
		isFocused: Y,
		isFocusVisible: X,
		isDropTarget: W,
		selectionMode: R.selectionManager.selectionMode,
		allowsDragging: !!J,
		state: R
	}, le = r({
		...e,
		children: void 0,
		defaultClassName: `react-aria-Tree`,
		values: Z
	}), Q = null;
	if (R.collection.size === 0 && e.renderEmptyState) {
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
	let ue = n(e, { global: !0 });
	return $.createElement($.Fragment, null, $.createElement(te, null, $.createElement(t.div, {
		...s(ue, le, z, ce, U?.collectionProps),
		ref: o,
		slot: e.slot || void 0,
		"data-empty": R.collection.size === 0 || void 0,
		"data-focused": Y || void 0,
		"data-drop-target": W || void 0,
		"data-focus-visible": X || void 0,
		"data-selection-mode": R.selectionManager.selectionMode === `none` ? void 0 : R.selectionManager.selectionMode,
		"data-allows-dragging": !!J || void 0
	}, $.createElement(m, { values: [
		[Ie, R],
		[C, {
			dragAndDropHooks: c,
			dragState: B,
			dropState: H
		}],
		[x, { render: Ge }]
	] }, f && $.createElement(Je, null), $.createElement(ee, null, $.createElement(E, {
		collection: R.collection,
		persistedKeys: b(R.selectionManager, c, H),
		scrollRef: o,
		renderDropIndicator: S(c, H)
	}))), Q)), G);
}
var Be = class extends D {
	static {
		this.type = `content`;
	}
}, Ve = j(Be, function(e) {
	let t = (0, $.useContext)(He), n = r({
		children: e.children,
		values: t
	});
	return $.createElement(v.Provider, { value: _ }, n.children);
}), He = (0, $.createContext)(null), Ue = class extends D {
	static {
		this.type = `item`;
	}
}, We = A(Ue, (e, i, c) => {
	let l = (0, $.useContext)(Ie);
	i = o(i);
	let { dragAndDropHooks: _, dragState: v, dropState: y } = (0, $.useContext)(C), b = v && !(v.isDisabled || v.selectionManager.isDisabled(c.key)), { rowProps: x, gridCellProps: S, expandButtonProps: ee, descriptionProps: te, ...w } = Ne({
		node: c,
		shouldSelectOnPressUp: !!v,
		focusMode: e.focusMode,
		allowsArrowNavigation: e.allowsArrowNavigation
	}, l, i), T = x[`aria-expanded`] === !0, E = e.hasChildItems || [...l.collection.getChildren(c.key)].length > 1, D = x[`aria-level`] || 1, { hoverProps: ie, isHovered: O } = u({
		isDisabled: !w.allowsSelection && !w.hasAction && !b,
		onHoverStart: e.onHoverStart,
		onHoverChange: e.onHoverChange,
		onHoverEnd: e.onHoverEnd
	}), { isFocusVisible: k, focusProps: ae } = p(), { isFocusVisible: A, focusProps: j } = p({ within: !0 }), { checkboxProps: M } = oe({ key: c.key }, l), N = null;
	v && _ && (N = _.useDraggableItem({
		key: c.key,
		hasDragButton: !0
	}, v));
	let P = null, F = (0, $.useRef)(null), I = (0, $.useRef)(null), L = (0, $.useRef)(null), { visuallyHiddenProps: z } = R();
	y && _ && (P = _.useDropIndicator({
		target: {
			type: `item`,
			key: c.key,
			dropPosition: `on`
		},
		activateButtonRef: L
	}, y, I));
	let B = v && v.isDragging(c.key), V = P?.isDropTarget, se = l.selectionManager.selectionMode, H = l.selectionManager.selectionBehavior, U = $.useMemo(() => ({
		...w,
		isHovered: O,
		isFocusVisible: k,
		isExpanded: T,
		hasChildItems: E,
		level: D,
		selectionMode: se,
		selectionBehavior: H,
		isFocusVisibleWithin: A,
		state: l,
		id: c.key,
		allowsDragging: !!v,
		isDragging: B,
		isDropTarget: V
	}), [
		w,
		O,
		k,
		T,
		E,
		D,
		A,
		l,
		c.key,
		v,
		B,
		V,
		H,
		se
	]), W = r({
		...e,
		id: void 0,
		children: c.rendered,
		defaultClassName: `react-aria-TreeItem`,
		defaultStyle: { "--tree-item-level": D },
		values: U
	});
	(0, $.useEffect)(() => {
		c.textValue;
	}, [c.textValue]), (0, $.useEffect)(() => {
		E && F.current;
	}, []);
	let G = (0, $.useRef)(null);
	(0, $.useEffect)(() => {
		v && G.current;
	}, []);
	let K = re({
		items: l.collection.getChildren(c.key),
		children: (e) => {
			switch (e.type) {
				case `content`: return e.render(e);
				case `loader`:
				case `item`: return $.createElement($.Fragment, null);
				default: throw Error(`Unsupported element type in TreeRow: ` + e.type);
			}
		}
	}), q = a(), J = n(e, { global: !0 });
	return delete J.id, delete J.onClick, $.createElement($.Fragment, null, P && !P.isHidden && $.createElement(`div`, {
		role: `row`,
		"aria-level": x[`aria-level`],
		"aria-expanded": x[`aria-expanded`],
		"aria-label": P.dropIndicatorProps[`aria-label`]
	}, $.createElement(`div`, {
		role: `gridcell`,
		"aria-colindex": 1,
		style: { display: `contents` }
	}, $.createElement(`div`, {
		role: `button`,
		...z,
		...P.dropIndicatorProps,
		ref: I
	}), x[`aria-expanded`] == null ? null : $.createElement(`div`, {
		role: `button`,
		...z,
		id: q,
		"aria-label": ee[`aria-label`],
		"aria-labelledby": `${q} ${x.id}`,
		tabIndex: -1,
		ref: L
	}))), $.createElement(t.div, {
		...s(J, x, ae, ie, j, N?.dragProps),
		...W,
		ref: i,
		"data-expanded": E && T || void 0,
		"data-has-child-items": E || void 0,
		"data-level": D,
		"data-selected": w.isSelected || void 0,
		"data-disabled": w.isDisabled || void 0,
		"data-hovered": O || void 0,
		"data-focused": w.isFocused || void 0,
		"data-focus-visible": k || void 0,
		"data-pressed": w.isPressed || void 0,
		"data-selection-mode": l.selectionManager.selectionMode === `none` ? void 0 : l.selectionManager.selectionMode,
		"data-allows-dragging": !!v || void 0,
		"data-dragging": B || void 0,
		"data-drop-target": V || void 0
	}, $.createElement(`div`, {
		...S,
		style: { display: `contents` }
	}, $.createElement(m, { values: [
		[h, { slots: {
			[d]: {},
			selection: M
		} }],
		[g, { slots: {
			[d]: {},
			selection: M
		} }],
		[f, { slots: {
			[d]: {},
			chevron: {
				...ee,
				ref: F
			},
			drag: {
				...N?.dragButtonProps,
				ref: G,
				style: { pointerEvents: `none` }
			}
		} }],
		[He, { ...U }],
		[ne, { isSelected: w.isSelected }]
	] }, K))));
});
j(O, function(e, i, a) {
	let { isVirtualized: c } = (0, $.useContext)(v), l = (0, $.useContext)(Ie), { isLoading: u, onLoadMore: d, scrollOffset: f, ...p } = e, m = (0, $.useRef)(null), h = (0, $.useMemo)(() => ({
		onLoadMore: d,
		collection: l?.collection,
		sentinelRef: m,
		scrollOffset: f
	}), [
		d,
		f,
		l?.collection
	]);
	P(h, m), i = o(i);
	let { rowProps: g, gridCellProps: _ } = Ne({ node: a }, l, i), b = g[`aria-level`] || 1, x = {
		role: `row`,
		"aria-level": g[`aria-level`]
	}, S = r({
		...p,
		id: void 0,
		children: a.rendered,
		defaultClassName: `react-aria-TreeLoader`,
		values: { level: b }
	}), C = {};
	return c && (C = { display: `contents` }), $.createElement($.Fragment, null, $.createElement(`div`, {
		style: {
			position: `relative`,
			width: 0,
			height: 0
		},
		inert: y(!0)
	}, $.createElement(`div`, {
		"data-testid": `loadMoreSentinel`,
		ref: m,
		style: {
			position: `absolute`,
			height: 1,
			width: 1
		}
	})), u && S.children && $.createElement(t.div, {
		ref: i,
		...s(n(e), x),
		...S,
		"data-level": b
	}, $.createElement(`div`, {
		..._,
		style: C
	}, S.children)));
});
function Ge(e, t) {
	t = o(t);
	let { dragAndDropHooks: n, dropState: r } = (0, $.useContext)(C), i = (0, $.useRef)(null), { dropIndicatorProps: a, isHidden: s, isDropTarget: c } = n.useDropIndicator(e, r, i);
	if (s) return null;
	let l = r && e.target.type === `item` ? (r.collection.getItem(e.target.key)?.level || 0) + 1 : 1;
	return $.createElement(qe, {
		...e,
		dropIndicatorProps: a,
		isDropTarget: c,
		ref: t,
		buttonRef: i,
		level: l
	});
}
function Ke(e, n) {
	let { dropIndicatorProps: i, isDropTarget: a, buttonRef: o, level: s, ...c } = e, { visuallyHiddenProps: l } = R(), u = r({
		...c,
		defaultClassName: `react-aria-DropIndicator`,
		defaultStyle: {
			position: `relative`,
			"--tree-item-level": s
		},
		values: { isDropTarget: a }
	});
	return $.createElement(t.div, {
		...u,
		role: `row`,
		"aria-level": s,
		ref: n,
		"data-drop-target": a || void 0
	}, $.createElement(`div`, { role: `gridcell` }, $.createElement(`div`, {
		...l,
		role: `button`,
		...i,
		ref: o
	}), u.children));
}
var qe = (0, $.forwardRef)(Ke);
function Je() {
	let { dragAndDropHooks: e, dropState: t } = (0, $.useContext)(C), n = (0, $.useRef)(null), { dropIndicatorProps: r } = e.useDropIndicator({ target: { type: `root` } }, t, n), i = t.isDropTarget({ type: `root` }), { visuallyHiddenProps: a } = R();
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
export { V as i, We as n, Le as r, Ve as t };
