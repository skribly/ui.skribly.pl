import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { At as t, E as n, Et as r, L as i, Lt as a, Nt as o, Pt as s, Tt as c, _ as l, kt as u, n as d, v as f, wt as p } from "./createLucideIcon.npgQlVHx.js";
import { a as m, o as h } from "./Checkbox.BCm1SjuK.js";
import { S as g, b as _, o as v } from "./animation.BhtQe7Yj.js";
import { d as y, f as b, l as x, n as S, u as C } from "./ListBox.B-5aHJx2.js";
import { n as w, r as ee } from "./Autocomplete.BUqxPt-N.js";
import { c as te, n as T, s as E } from "./FocusScope.Ba7RJw7M.js";
import { n as D } from "./Text.DxhsPAdy.js";
import { a as O, n as ne, o as k, t as A } from "./useGridListItem.QmQPCsZs.js";
import { n as j } from "./useLocalizedStringFormatter.CY4FHGAo.js";
import { f as M, i as N, l as P, n as F, t as I } from "./CollectionBuilder.Bxdh8Jqj.js";
import { a as re, i as L, t as R } from "./useLoadMoreSentinel.DKpPMiER.js";
import { n as z, t as B } from "./useListState.BvceJMy7.js";
import { n as V } from "./react-dom.B9zIfLd2.js";
import { n as H } from "./VisuallyHidden.DXeJgMmE.js";
function U(e) {
	return e && e.__esModule ? e.default : e;
}
function W(e, t) {
	let { key: n } = e, r = t.selectionManager, i = a(), o = !t.selectionManager.canSelectItem(n), s = t.selectionManager.isSelected(n);
	return { checkboxProps: {
		id: i,
		"aria-label": j(U(O), `@react-aria/grid`).format(`select`),
		isSelected: s,
		isDisabled: o,
		onChange: () => r.toggleSelection(n)
	} };
}
function G(e, t) {
	let { key: n } = e, { checkboxProps: r } = W(e, t);
	return { checkboxProps: {
		...r,
		"aria-labelledby": `${r.id} ${k(t, n)}`
	} };
}
var K = e(V(), 1), q = (0, K.createContext)(null), J = (0, K.forwardRef)(function(e, t) {
	return [e, t] = c(e, t, q), K.createElement(F, { content: K.createElement(N, e) }, (n) => K.createElement(Y, {
		props: e,
		collection: n,
		gridListRef: t
	}));
});
function Y({ props: e, collection: a, gridListRef: o }) {
	[e, o] = c(e, o, ee);
	let { shouldUseVirtualFocus: l, filter: u, disallowTypeAhead: d, UNSTABLE_focusOnEntry: m, ...h } = e, { dragAndDropHooks: g, keyboardNavigationBehavior: v = `arrow`, layout: w = `stack`, orientation: E = `vertical` } = e, { CollectionRoot: D, isVirtualized: O, layoutDelegate: k, dropTargetDelegate: A } = (0, K.useContext)(_), j = B({
		...h,
		collection: a,
		children: void 0,
		layoutDelegate: k
	}), M = z(j, u), N = L({
		usage: `search`,
		sensitivity: `base`
	}), { disabledBehavior: P, disabledKeys: F } = M.selectionManager, { direction: I } = i(), R = (0, K.useMemo)(() => new re({
		collection: M.collection,
		collator: N,
		ref: o,
		disabledKeys: F,
		disabledBehavior: P,
		layoutDelegate: k,
		layout: w,
		orientation: E,
		direction: I
	}), [
		M.collection,
		o,
		w,
		E,
		F,
		P,
		k,
		N,
		I
	]), { gridProps: V } = ne({
		...h,
		keyboardDelegate: R,
		keyboardNavigationBehavior: w === `grid` ? `tab` : v,
		isVirtualized: O,
		shouldSelectOnPressUp: e.shouldSelectOnPressUp,
		disallowTypeAhead: d,
		UNSTABLE_focusOnEntry: m
	}, M, o), H = M.selectionManager, U = !!g?.useDraggableCollectionState, W = !!g?.useDroppableCollectionState;
	(0, K.useRef)(U), (0, K.useRef)(W), (0, K.useEffect)(() => {}, [U, W]);
	let G, q, J, Y = !1, X = null, Z = (0, K.useRef)(null);
	if (U && g) {
		G = g.useDraggableCollectionState({
			collection: M.collection,
			selectionManager: H,
			preview: g.renderDragPreview ? Z : void 0
		}), g.useDraggableCollection({}, G, o);
		let e = g.DragPreview;
		X = g.renderDragPreview ? K.createElement(e, { ref: Z }, g.renderDragPreview) : null;
	}
	if (W && g) {
		q = g.useDroppableCollectionState({
			collection: M.collection,
			selectionManager: H
		});
		let e = g.dropTargetDelegate || A || new g.ListDropTargetDelegate(a, o, {
			layout: w,
			direction: I,
			orientation: E
		});
		J = g.useDroppableCollection({
			keyboardDelegate: R,
			dropTargetDelegate: e
		}, q, o), Y = q.isDropTarget({ type: `root` });
	}
	let { focusProps: ae, isFocused: Q, isFocusVisible: se } = f(), $ = M.collection.size === 0, ce = {
		isDropTarget: Y,
		orientation: E,
		isEmpty: $,
		isFocused: Q,
		isFocusVisible: se,
		layout: w,
		state: M
	}, le = r({
		...e,
		children: void 0,
		defaultClassName: `react-aria-GridList`,
		values: ce
	}), ue = null;
	if ($ && e.renderEmptyState) {
		let t = e.renderEmptyState(ce);
		ue = K.createElement(`div`, {
			role: `row`,
			"aria-rowindex": 1,
			style: { display: `contents` }
		}, K.createElement(`div`, {
			role: `gridcell`,
			style: { display: `contents` }
		}, t));
	}
	let de = n(e, { global: !0 });
	return K.createElement(T, null, K.createElement(t.div, {
		...s(de, le, V, ae, J?.collectionProps, null),
		ref: o,
		slot: e.slot || void 0,
		onScroll: e.onScroll,
		"data-drop-target": Y || void 0,
		"data-empty": $ || void 0,
		"data-focused": Q || void 0,
		"data-focus-visible": se || void 0,
		"data-layout": w,
		"data-orientation": E
	}, K.createElement(p, { values: [
		[S, M],
		[C, {
			dragAndDropHooks: g,
			dragState: G,
			dropState: q
		}],
		[b, { render: ie }]
	] }, W && K.createElement(oe, null), K.createElement(te, null, K.createElement(D, {
		collection: M.collection,
		scrollRef: o,
		persistedKeys: y(H, g, q),
		renderDropIndicator: x(g, q)
	}))), ue, X));
}
var X = I(M, function(e, i, a) {
	let c = (0, K.useContext)(S), { dragAndDropHooks: v, dragState: y, dropState: b } = (0, K.useContext)(C), x = o(i), { isVirtualized: te } = (0, K.useContext)(_), T = y && !(y.isDisabled || y.selectionManager.isDisabled(a.key)), { rowProps: O, gridCellProps: ne, descriptionProps: k, ...j } = A({
		node: a,
		shouldSelectOnPressUp: !!y,
		isVirtualized: te,
		focusMode: e.focusMode,
		allowsArrowNavigation: e.allowsArrowNavigation
	}, c, x), { hoverProps: M, isHovered: N } = l({
		isDisabled: !j.allowsSelection && !j.hasAction && !T,
		onHoverStart: a.props.onHoverStart,
		onHoverChange: a.props.onHoverChange,
		onHoverEnd: a.props.onHoverEnd
	}), { isFocusVisible: P, focusProps: F } = f(), { isFocusVisible: I, focusProps: re } = f({ within: !0 }), { checkboxProps: L } = G({ key: a.key }, c), R = c.selectionManager.disabledBehavior === `all` && j.isDisabled ? { isDisabled: !0 } : {}, z = null;
	y && v && (z = v.useDraggableItem({
		key: a.key,
		hasDragButton: !0
	}, y));
	let B = null, V = (0, K.useRef)(null), { visuallyHiddenProps: U } = H();
	b && v && (B = v.useDropIndicator({ target: {
		type: `item`,
		key: a.key,
		dropPosition: `on`
	} }, b, V));
	let W = y && y.isDragging(a.key), q = r({
		...e,
		id: void 0,
		children: a.rendered,
		defaultClassName: `react-aria-GridListItem`,
		values: {
			...j,
			isHovered: N,
			isFocusVisible: P,
			isFocusVisibleWithin: I,
			selectionMode: c.selectionManager.selectionMode,
			selectionBehavior: c.selectionManager.selectionBehavior,
			allowsDragging: !!y,
			isDragging: W,
			isDropTarget: B?.isDropTarget,
			id: a.key,
			state: c
		}
	}), J = (0, K.useRef)(null);
	(0, K.useEffect)(() => {
		y && !J.current && console.warn(`Draggable items in a GridList must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.`);
	}, []), (0, K.useEffect)(() => {
		a.textValue;
	}, [a.textValue]);
	let Y = n(e, { global: !0 });
	return delete Y.id, delete Y.onClick, K.createElement(K.Fragment, null, B && !B.isHidden && K.createElement(`div`, {
		role: `row`,
		style: { position: `absolute` }
	}, K.createElement(`div`, { role: `gridcell` }, K.createElement(`div`, {
		role: `button`,
		...U,
		...B?.dropIndicatorProps,
		ref: V
	}))), K.createElement(t.div, {
		...s(Y, q, O, F, re, M, z?.dragProps),
		ref: x,
		"data-selected": j.isSelected || void 0,
		"data-disabled": j.isDisabled || void 0,
		"data-hovered": N || void 0,
		"data-focused": j.isFocused || void 0,
		"data-focus-visible": P || void 0,
		"data-focus-visible-within": I || void 0,
		"data-pressed": j.isPressed || void 0,
		"data-allows-dragging": !!y || void 0,
		"data-dragging": W || void 0,
		"data-drop-target": B?.isDropTarget || void 0,
		"data-selection-mode": c.selectionManager.selectionMode === `none` ? void 0 : c.selectionManager.selectionMode
	}, K.createElement(`div`, {
		...ne,
		style: { display: `contents` }
	}, K.createElement(p, { values: [
		[m, { slots: {
			[u]: {},
			selection: L
		} }],
		[h, { slots: {
			[u]: {},
			selection: L
		} }],
		[d, { slots: {
			[u]: R,
			drag: {
				...z?.dragButtonProps,
				ref: J,
				style: { pointerEvents: `none` }
			}
		} }],
		[D, { slots: {
			[u]: {},
			description: k
		} }],
		[_, g],
		[S, null],
		[ee, null],
		[w, null],
		[E, { isSelected: j.isSelected }]
	] }, q.children))));
});
function ie(e, t) {
	t = o(t);
	let { dragAndDropHooks: n, dropState: r } = (0, K.useContext)(C), i = (0, K.useRef)(null), { dropIndicatorProps: a, isHidden: s, isDropTarget: c } = n.useDropIndicator(e, r, i);
	return s ? null : K.createElement(ae, {
		...e,
		dropIndicatorProps: a,
		isDropTarget: c,
		buttonRef: i,
		ref: t
	});
}
function Z(e, n) {
	let { dropIndicatorProps: i, isDropTarget: a, buttonRef: o, ...s } = e, { visuallyHiddenProps: c } = H(), l = r({
		...s,
		defaultClassName: `react-aria-DropIndicator`,
		values: { isDropTarget: a }
	});
	return K.createElement(t.div, {
		...l,
		role: `row`,
		ref: n,
		"data-drop-target": a || void 0
	}, K.createElement(`div`, { role: `gridcell` }, K.createElement(`div`, {
		...c,
		role: `button`,
		...i,
		ref: o
	}), l.children));
}
var ae = (0, K.forwardRef)(Z);
function oe() {
	let { dragAndDropHooks: e, dropState: t } = (0, K.useContext)(C), n = (0, K.useRef)(null), { dropIndicatorProps: r } = e.useDropIndicator({ target: { type: `root` } }, t, n), i = t.isDropTarget({ type: `root` }), { visuallyHiddenProps: a } = H();
	return !i && r[`aria-hidden`] ? null : K.createElement(`div`, {
		role: `row`,
		"aria-hidden": r[`aria-hidden`],
		style: { position: `absolute` }
	}, K.createElement(`div`, { role: `gridcell` }, K.createElement(`div`, {
		role: `button`,
		...a,
		...r,
		ref: n
	})));
}
var Q = I(P, function(e, i, a) {
	let o = (0, K.useContext)(S), { isVirtualized: s } = (0, K.useContext)(_), { isLoading: c, onLoadMore: l, scrollOffset: u, ...d } = e, f = (0, K.useRef)(null), p = (0, K.useMemo)(() => ({
		onLoadMore: l,
		collection: o?.collection,
		sentinelRef: f,
		scrollOffset: u
	}), [
		l,
		u,
		f,
		o?.collection
	]);
	R(p, f);
	let m = r({
		...d,
		id: void 0,
		children: a.rendered,
		defaultClassName: `react-aria-GridListLoadingIndicator`,
		values: void 0
	});
	return K.createElement(K.Fragment, null, K.createElement(`div`, {
		style: {
			position: `relative`,
			width: 0,
			height: 0
		},
		inert: v(!0)
	}, K.createElement(`div`, {
		"data-testid": `loadMoreSentinel`,
		ref: f,
		style: {
			position: `absolute`,
			height: 1,
			width: 1
		}
	})), c && m.children && K.createElement(t.div, {
		...m,
		...n(e, { global: !0 }),
		role: `row`,
		ref: i
	}, K.createElement(`div`, {
		"aria-colindex": s ? 1 : void 0,
		role: `gridcell`
	}, m.children)));
});
export { W as a, G as i, J as n, X as r, Q as t };
