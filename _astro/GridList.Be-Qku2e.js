import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, R as n, cn as r, ct as i, dn as a, et as o, fn as s, gn as c, hn as l, on as u, sn as d, yn as f, yt as p } from "./doc.C_PtMNUB.js";
import { a as m, o as h } from "./Checkbox.TwqnTrT7.js";
import { b as g, i as _, v } from "./useCollection.Cn_I2nJQ.js";
import { d as y, f as b, l as x, n as S, u as C } from "./ListBox.Bq8IE31A.js";
import { n as w, r as ee } from "./Autocomplete.BYGvWyUq.js";
import { c as T, n as E, s as D } from "./FocusScope.DSjTtRFm.js";
import { n as te } from "./Text.3KJW7jIs.js";
import { a as O, n as ne, o as k, t as re } from "./useGridListItem.CURXYjVf.js";
import { n as A } from "./useLocalizedStringFormatter.whw0Qxu0.js";
import { f as j, i as M, l as N, n as P, t as F } from "./CollectionBuilder.BW1Ria3_.js";
import { a as ie, i as I, t as L } from "./useLoadMoreSentinel.BhNRPrj4.js";
import { n as R, t as z } from "./useListState.B_9ND7CB.js";
import { n as B } from "./react-dom.B9zIfLd2.js";
import { n as V } from "./VisuallyHidden.BNHsLrt2.js";
function H(e) {
	return e && e.__esModule ? e.default : e;
}
function U(e, t) {
	let { key: n } = e, r = t.selectionManager, i = f(), a = !t.selectionManager.canSelectItem(n), o = t.selectionManager.isSelected(n);
	return { checkboxProps: {
		id: i,
		"aria-label": A(H(O), `@react-aria/grid`).format(`select`),
		isSelected: o,
		isDisabled: a,
		onChange: () => r.toggleSelection(n)
	} };
}
function W(e, t) {
	let { key: n } = e, { checkboxProps: r } = U(e, t);
	return { checkboxProps: {
		...r,
		"aria-labelledby": `${r.id} ${k(t, n)}`
	} };
}
var G = e(B(), 1), K = (0, G.createContext)(null), q = (0, G.forwardRef)(function(e, t) {
	return [e, t] = d(e, t, K), G.createElement(P, { content: G.createElement(M, e) }, (n) => G.createElement(J, {
		props: e,
		collection: n,
		gridListRef: t
	}));
});
function J({ props: e, collection: t, gridListRef: n }) {
	[e, n] = d(e, n, ee);
	let { shouldUseVirtualFocus: a, filter: l, disallowTypeAhead: f, UNSTABLE_focusOnEntry: m, ...h } = e, { dragAndDropHooks: g, keyboardNavigationBehavior: _ = `arrow`, layout: w = `stack`, orientation: D = `vertical` } = e, { CollectionRoot: te, isVirtualized: O, layoutDelegate: k, dropTargetDelegate: re } = (0, G.useContext)(v), A = z({
		...h,
		collection: t,
		children: void 0,
		layoutDelegate: k
	}), j = R(A, l), M = I({
		usage: `search`,
		sensitivity: `base`
	}), { disabledBehavior: N, disabledKeys: P } = j.selectionManager, { direction: F } = p(), L = (0, G.useMemo)(() => new ie({
		collection: j.collection,
		collator: M,
		ref: n,
		disabledKeys: P,
		disabledBehavior: N,
		layoutDelegate: k,
		layout: w,
		orientation: D,
		direction: F
	}), [
		j.collection,
		n,
		w,
		D,
		P,
		N,
		k,
		M,
		F
	]), { gridProps: B } = ne({
		...h,
		keyboardDelegate: L,
		keyboardNavigationBehavior: w === `grid` ? `tab` : _,
		isVirtualized: O,
		shouldSelectOnPressUp: e.shouldSelectOnPressUp,
		disallowTypeAhead: f,
		UNSTABLE_focusOnEntry: m
	}, j, n), V = j.selectionManager, H = !!g?.useDraggableCollectionState, U = !!g?.useDroppableCollectionState;
	(0, G.useRef)(H), (0, G.useRef)(U), (0, G.useEffect)(() => {}, [H, U]);
	let W, K, q, J = !1, Y = null, X = (0, G.useRef)(null);
	if (H && g) {
		W = g.useDraggableCollectionState({
			collection: j.collection,
			selectionManager: V,
			preview: g.renderDragPreview ? X : void 0
		}), g.useDraggableCollection({}, W, n);
		let e = g.DragPreview;
		Y = g.renderDragPreview ? G.createElement(e, { ref: X }, g.renderDragPreview) : null;
	}
	if (U && g) {
		K = g.useDroppableCollectionState({
			collection: j.collection,
			selectionManager: V
		});
		let e = g.dropTargetDelegate || re || new g.ListDropTargetDelegate(t, n, {
			layout: w,
			direction: F,
			orientation: D
		});
		q = g.useDroppableCollection({
			keyboardDelegate: L,
			dropTargetDelegate: e
		}, K, n), J = K.isDropTarget({ type: `root` });
	}
	let { focusProps: oe, isFocused: Z, isFocusVisible: Q } = o(), $ = j.collection.size === 0, ce = {
		isDropTarget: J,
		orientation: D,
		isEmpty: $,
		isFocused: Z,
		isFocusVisible: Q,
		layout: w,
		state: j
	}, le = r({
		...e,
		children: void 0,
		defaultClassName: `react-aria-GridList`,
		values: ce
	}), ue = null;
	if ($ && e.renderEmptyState) {
		let t = e.renderEmptyState(ce);
		ue = G.createElement(`div`, {
			role: `row`,
			"aria-rowindex": 1,
			style: { display: `contents` }
		}, G.createElement(`div`, {
			role: `gridcell`,
			style: { display: `contents` }
		}, t));
	}
	let de = i(e, { global: !0 });
	return G.createElement(E, null, G.createElement(s.div, {
		...c(de, le, B, oe, q?.collectionProps, null),
		ref: n,
		slot: e.slot || void 0,
		onScroll: e.onScroll,
		"data-drop-target": J || void 0,
		"data-empty": $ || void 0,
		"data-focused": Z || void 0,
		"data-focus-visible": Q || void 0,
		"data-layout": w,
		"data-orientation": D
	}, G.createElement(u, { values: [
		[S, j],
		[C, {
			dragAndDropHooks: g,
			dragState: W,
			dropState: K
		}],
		[b, { render: ae }]
	] }, U && G.createElement(se, null), G.createElement(T, null, G.createElement(te, {
		collection: j.collection,
		scrollRef: n,
		persistedKeys: y(V, g, K),
		renderDropIndicator: x(g, K)
	}))), ue, Y));
}
var Y = F(j, function(e, d, f) {
	let p = (0, G.useContext)(S), { dragAndDropHooks: _, dragState: y, dropState: b } = (0, G.useContext)(C), x = l(d), { isVirtualized: T } = (0, G.useContext)(v), E = y && !(y.isDisabled || y.selectionManager.isDisabled(f.key)), { rowProps: O, gridCellProps: ne, descriptionProps: k, ...A } = re({
		node: f,
		shouldSelectOnPressUp: !!y,
		isVirtualized: T,
		focusMode: e.focusMode,
		allowsArrowNavigation: e.allowsArrowNavigation
	}, p, x), { hoverProps: j, isHovered: M } = t({
		isDisabled: !A.allowsSelection && !A.hasAction && !E,
		onHoverStart: f.props.onHoverStart,
		onHoverChange: f.props.onHoverChange,
		onHoverEnd: f.props.onHoverEnd
	}), { isFocusVisible: N, focusProps: P } = o(), { isFocusVisible: F, focusProps: ie } = o({ within: !0 }), { checkboxProps: I } = W({ key: f.key }, p), L = p.selectionManager.disabledBehavior === `all` && A.isDisabled ? { isDisabled: !0 } : {}, R = null;
	y && _ && (R = _.useDraggableItem({
		key: f.key,
		hasDragButton: !0
	}, y));
	let z = null, B = (0, G.useRef)(null), { visuallyHiddenProps: H } = V();
	b && _ && (z = _.useDropIndicator({ target: {
		type: `item`,
		key: f.key,
		dropPosition: `on`
	} }, b, B));
	let U = y && y.isDragging(f.key), K = r({
		...e,
		id: void 0,
		children: f.rendered,
		defaultClassName: `react-aria-GridListItem`,
		values: {
			...A,
			isHovered: M,
			isFocusVisible: N,
			isFocusVisibleWithin: F,
			selectionMode: p.selectionManager.selectionMode,
			selectionBehavior: p.selectionManager.selectionBehavior,
			allowsDragging: !!y,
			isDragging: U,
			isDropTarget: z?.isDropTarget,
			id: f.key,
			state: p
		}
	}), q = (0, G.useRef)(null);
	(0, G.useEffect)(() => {
		y && !q.current && console.warn(`Draggable items in a GridList must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.`);
	}, []), (0, G.useEffect)(() => {
		f.textValue;
	}, [f.textValue]);
	let J = i(e, { global: !0 });
	return delete J.id, delete J.onClick, G.createElement(G.Fragment, null, z && !z.isHidden && G.createElement(`div`, {
		role: `row`,
		style: { position: `absolute` }
	}, G.createElement(`div`, { role: `gridcell` }, G.createElement(`div`, {
		role: `button`,
		...H,
		...z?.dropIndicatorProps,
		ref: B
	}))), G.createElement(s.div, {
		...c(J, K, O, P, ie, j, R?.dragProps),
		ref: x,
		"data-selected": A.isSelected || void 0,
		"data-disabled": A.isDisabled || void 0,
		"data-hovered": M || void 0,
		"data-focused": A.isFocused || void 0,
		"data-focus-visible": N || void 0,
		"data-focus-visible-within": F || void 0,
		"data-pressed": A.isPressed || void 0,
		"data-allows-dragging": !!y || void 0,
		"data-dragging": U || void 0,
		"data-drop-target": z?.isDropTarget || void 0,
		"data-selection-mode": p.selectionManager.selectionMode === `none` ? void 0 : p.selectionManager.selectionMode
	}, G.createElement(`div`, {
		...ne,
		style: { display: `contents` }
	}, G.createElement(u, { values: [
		[m, { slots: {
			[a]: {},
			selection: I
		} }],
		[h, { slots: {
			[a]: {},
			selection: I
		} }],
		[n, { slots: {
			[a]: L,
			drag: {
				...R?.dragButtonProps,
				ref: q,
				style: { pointerEvents: `none` }
			}
		} }],
		[te, { slots: {
			[a]: {},
			description: k
		} }],
		[v, g],
		[S, null],
		[ee, null],
		[w, null],
		[D, { isSelected: A.isSelected }]
	] }, K.children))));
});
function ae(e, t) {
	t = l(t);
	let { dragAndDropHooks: n, dropState: r } = (0, G.useContext)(C), i = (0, G.useRef)(null), { dropIndicatorProps: a, isHidden: o, isDropTarget: s } = n.useDropIndicator(e, r, i);
	return o ? null : G.createElement(oe, {
		...e,
		dropIndicatorProps: a,
		isDropTarget: s,
		buttonRef: i,
		ref: t
	});
}
function X(e, t) {
	let { dropIndicatorProps: n, isDropTarget: i, buttonRef: a, ...o } = e, { visuallyHiddenProps: c } = V(), l = r({
		...o,
		defaultClassName: `react-aria-DropIndicator`,
		values: { isDropTarget: i }
	});
	return G.createElement(s.div, {
		...l,
		role: `row`,
		ref: t,
		"data-drop-target": i || void 0
	}, G.createElement(`div`, { role: `gridcell` }, G.createElement(`div`, {
		...c,
		role: `button`,
		...n,
		ref: a
	}), l.children));
}
var oe = (0, G.forwardRef)(X);
function se() {
	let { dragAndDropHooks: e, dropState: t } = (0, G.useContext)(C), n = (0, G.useRef)(null), { dropIndicatorProps: r } = e.useDropIndicator({ target: { type: `root` } }, t, n), i = t.isDropTarget({ type: `root` }), { visuallyHiddenProps: a } = V();
	return !i && r[`aria-hidden`] ? null : G.createElement(`div`, {
		role: `row`,
		"aria-hidden": r[`aria-hidden`],
		style: { position: `absolute` }
	}, G.createElement(`div`, { role: `gridcell` }, G.createElement(`div`, {
		role: `button`,
		...a,
		...r,
		ref: n
	})));
}
var Z = F(N, function(e, t, n) {
	let a = (0, G.useContext)(S), { isVirtualized: o } = (0, G.useContext)(v), { isLoading: c, onLoadMore: l, scrollOffset: u, ...d } = e, f = (0, G.useRef)(null), p = (0, G.useMemo)(() => ({
		onLoadMore: l,
		collection: a?.collection,
		sentinelRef: f,
		scrollOffset: u
	}), [
		l,
		u,
		f,
		a?.collection
	]);
	L(p, f);
	let m = r({
		...d,
		id: void 0,
		children: n.rendered,
		defaultClassName: `react-aria-GridListLoadingIndicator`,
		values: void 0
	});
	return G.createElement(G.Fragment, null, G.createElement(`div`, {
		style: {
			position: `relative`,
			width: 0,
			height: 0
		},
		inert: _(!0)
	}, G.createElement(`div`, {
		"data-testid": `loadMoreSentinel`,
		ref: f,
		style: {
			position: `absolute`,
			height: 1,
			width: 1
		}
	})), c && m.children && G.createElement(s.div, {
		...m,
		...i(e, { global: !0 }),
		role: `row`,
		ref: t
	}, G.createElement(`div`, {
		"aria-colindex": o ? 1 : void 0,
		role: `gridcell`
	}, m.children)));
});
export { U as a, W as i, q as n, Y as r, Z as t };
