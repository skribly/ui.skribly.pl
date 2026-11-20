import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, $t as n, Bt as r, Gt as i, H as a, Ht as o, Kt as s, N as c, P as l, Vt as u, Xt as d, Yt as f, v as p } from "./useOverflow.Dq483xd0.js";
import { a as m, o as h } from "./Checkbox.5YNEJrfk.js";
import { b as g, i as _, v } from "./useCollection.DQc_Iacd.js";
import { d as y, f as b, l as x, n as S, u as C } from "./ListBox.8u6ak81Y.js";
import { n as w, r as ee } from "./Autocomplete.CGc8yklO.js";
import { c as T, n as E, s as D } from "./FocusScope.aBBixRPA.js";
import { n as te } from "./Text.DXbJB4jb.js";
import { a as O, n as ne, o as k, t as A } from "./useGridListItem.Daw7DFMj.js";
import { n as j } from "./useLocalizedStringFormatter.CDC-m-oP.js";
import { f as M, i as N, l as P, n as F, t as I } from "./CollectionBuilder.OeX_9-Zv.js";
import { a as re, i as L, t as R } from "./useLoadMoreSentinel.CCe53T__.js";
import { n as z, t as B } from "./useListState.PwXH_dUi.js";
import { n as V } from "./react-dom.B9zIfLd2.js";
import { n as H } from "./VisuallyHidden.CPLGlJAY.js";
function U(e) {
	return e && e.__esModule ? e.default : e;
}
function W(e, t) {
	let { key: r } = e, i = t.selectionManager, a = n(), o = !t.selectionManager.canSelectItem(r), s = t.selectionManager.isSelected(r);
	return { checkboxProps: {
		id: a,
		"aria-label": j(U(O), `@react-aria/grid`).format(`select`),
		isSelected: s,
		isDisabled: o,
		onChange: () => i.toggleSelection(r)
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
	return [e, t] = u(e, t, q), K.createElement(F, { content: K.createElement(N, e) }, (n) => K.createElement(Y, {
		props: e,
		collection: n,
		gridListRef: t
	}));
});
function Y({ props: e, collection: n, gridListRef: i }) {
	[e, i] = u(e, i, ee);
	let { shouldUseVirtualFocus: c, filter: f, disallowTypeAhead: p, UNSTABLE_focusOnEntry: m, ...h } = e, { dragAndDropHooks: g, keyboardNavigationBehavior: _ = `arrow`, layout: w = `stack`, orientation: D = `vertical` } = e, { CollectionRoot: te, isVirtualized: O, layoutDelegate: k, dropTargetDelegate: A } = (0, K.useContext)(v), j = B({
		...h,
		collection: n,
		children: void 0,
		layoutDelegate: k
	}), M = z(j, f), N = L({
		usage: `search`,
		sensitivity: `base`
	}), { disabledBehavior: P, disabledKeys: F } = M.selectionManager, { direction: I } = t(), R = (0, K.useMemo)(() => new re({
		collection: M.collection,
		collator: N,
		ref: i,
		disabledKeys: F,
		disabledBehavior: P,
		layoutDelegate: k,
		layout: w,
		orientation: D,
		direction: I
	}), [
		M.collection,
		i,
		w,
		D,
		F,
		P,
		k,
		N,
		I
	]), { gridProps: V } = ne({
		...h,
		keyboardDelegate: R,
		keyboardNavigationBehavior: w === `grid` ? `tab` : _,
		isVirtualized: O,
		shouldSelectOnPressUp: e.shouldSelectOnPressUp,
		disallowTypeAhead: p,
		UNSTABLE_focusOnEntry: m
	}, M, i), H = M.selectionManager, U = !!g?.useDraggableCollectionState, W = !!g?.useDroppableCollectionState;
	(0, K.useRef)(U), (0, K.useRef)(W), (0, K.useEffect)(() => {}, [U, W]);
	let G, q, J, Y = !1, X = null, Z = (0, K.useRef)(null);
	if (U && g) {
		G = g.useDraggableCollectionState({
			collection: M.collection,
			selectionManager: H,
			preview: g.renderDragPreview ? Z : void 0
		}), g.useDraggableCollection({}, G, i);
		let e = g.DragPreview;
		X = g.renderDragPreview ? K.createElement(e, { ref: Z }, g.renderDragPreview) : null;
	}
	if (W && g) {
		q = g.useDroppableCollectionState({
			collection: M.collection,
			selectionManager: H
		});
		let e = g.dropTargetDelegate || A || new g.ListDropTargetDelegate(n, i, {
			layout: w,
			direction: I,
			orientation: D
		});
		J = g.useDroppableCollection({
			keyboardDelegate: R,
			dropTargetDelegate: e
		}, q, i), Y = q.isDropTarget({ type: `root` });
	}
	let { focusProps: ae, isFocused: Q, isFocusVisible: se } = l(), $ = M.collection.size === 0, ce = {
		isDropTarget: Y,
		orientation: D,
		isEmpty: $,
		isFocused: Q,
		isFocusVisible: se,
		layout: w,
		state: M
	}, le = o({
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
	let de = a(e, { global: !0 });
	return K.createElement(E, null, K.createElement(s.div, {
		...d(de, le, V, ae, J?.collectionProps, null),
		ref: i,
		slot: e.slot || void 0,
		onScroll: e.onScroll,
		"data-drop-target": Y || void 0,
		"data-empty": $ || void 0,
		"data-focused": Q || void 0,
		"data-focus-visible": se || void 0,
		"data-layout": w,
		"data-orientation": D
	}, K.createElement(r, { values: [
		[S, M],
		[C, {
			dragAndDropHooks: g,
			dragState: G,
			dropState: q
		}],
		[b, { render: ie }]
	] }, W && K.createElement(oe, null), K.createElement(T, null, K.createElement(te, {
		collection: M.collection,
		scrollRef: i,
		persistedKeys: y(H, g, q),
		renderDropIndicator: x(g, q)
	}))), ue, X));
}
var X = I(M, function(e, t, n) {
	let u = (0, K.useContext)(S), { dragAndDropHooks: _, dragState: y, dropState: b } = (0, K.useContext)(C), x = f(t), { isVirtualized: T } = (0, K.useContext)(v), E = y && !(y.isDisabled || y.selectionManager.isDisabled(n.key)), { rowProps: O, gridCellProps: ne, descriptionProps: k, ...j } = A({
		node: n,
		shouldSelectOnPressUp: !!y,
		isVirtualized: T,
		focusMode: e.focusMode,
		allowsArrowNavigation: e.allowsArrowNavigation
	}, u, x), { hoverProps: M, isHovered: N } = c({
		isDisabled: !j.allowsSelection && !j.hasAction && !E,
		onHoverStart: n.props.onHoverStart,
		onHoverChange: n.props.onHoverChange,
		onHoverEnd: n.props.onHoverEnd
	}), { isFocusVisible: P, focusProps: F } = l(), { isFocusVisible: I, focusProps: re } = l({ within: !0 }), { checkboxProps: L } = G({ key: n.key }, u), R = u.selectionManager.disabledBehavior === `all` && j.isDisabled ? { isDisabled: !0 } : {}, z = null;
	y && _ && (z = _.useDraggableItem({
		key: n.key,
		hasDragButton: !0
	}, y));
	let B = null, V = (0, K.useRef)(null), { visuallyHiddenProps: U } = H();
	b && _ && (B = _.useDropIndicator({ target: {
		type: `item`,
		key: n.key,
		dropPosition: `on`
	} }, b, V));
	let W = y && y.isDragging(n.key), q = o({
		...e,
		id: void 0,
		children: n.rendered,
		defaultClassName: `react-aria-GridListItem`,
		values: {
			...j,
			isHovered: N,
			isFocusVisible: P,
			isFocusVisibleWithin: I,
			selectionMode: u.selectionManager.selectionMode,
			selectionBehavior: u.selectionManager.selectionBehavior,
			allowsDragging: !!y,
			isDragging: W,
			isDropTarget: B?.isDropTarget,
			id: n.key,
			state: u
		}
	}), J = (0, K.useRef)(null);
	(0, K.useEffect)(() => {
		y && !J.current && console.warn(`Draggable items in a GridList must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.`);
	}, []), (0, K.useEffect)(() => {
		n.textValue;
	}, [n.textValue]);
	let Y = a(e, { global: !0 });
	return delete Y.id, delete Y.onClick, K.createElement(K.Fragment, null, B && !B.isHidden && K.createElement(`div`, {
		role: `row`,
		style: { position: `absolute` }
	}, K.createElement(`div`, { role: `gridcell` }, K.createElement(`div`, {
		role: `button`,
		...U,
		...B?.dropIndicatorProps,
		ref: V
	}))), K.createElement(s.div, {
		...d(Y, q, O, F, re, M, z?.dragProps),
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
		"data-selection-mode": u.selectionManager.selectionMode === `none` ? void 0 : u.selectionManager.selectionMode
	}, K.createElement(`div`, {
		...ne,
		style: { display: `contents` }
	}, K.createElement(r, { values: [
		[m, { slots: {
			[i]: {},
			selection: L
		} }],
		[h, { slots: {
			[i]: {},
			selection: L
		} }],
		[p, { slots: {
			[i]: R,
			drag: {
				...z?.dragButtonProps,
				ref: J,
				style: { pointerEvents: `none` }
			}
		} }],
		[te, { slots: {
			[i]: {},
			description: k
		} }],
		[v, g],
		[S, null],
		[ee, null],
		[w, null],
		[D, { isSelected: j.isSelected }]
	] }, q.children))));
});
function ie(e, t) {
	t = f(t);
	let { dragAndDropHooks: n, dropState: r } = (0, K.useContext)(C), i = (0, K.useRef)(null), { dropIndicatorProps: a, isHidden: o, isDropTarget: s } = n.useDropIndicator(e, r, i);
	return o ? null : K.createElement(ae, {
		...e,
		dropIndicatorProps: a,
		isDropTarget: s,
		buttonRef: i,
		ref: t
	});
}
function Z(e, t) {
	let { dropIndicatorProps: n, isDropTarget: r, buttonRef: i, ...a } = e, { visuallyHiddenProps: c } = H(), l = o({
		...a,
		defaultClassName: `react-aria-DropIndicator`,
		values: { isDropTarget: r }
	});
	return K.createElement(s.div, {
		...l,
		role: `row`,
		ref: t,
		"data-drop-target": r || void 0
	}, K.createElement(`div`, { role: `gridcell` }, K.createElement(`div`, {
		...c,
		role: `button`,
		...n,
		ref: i
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
var Q = I(P, function(e, t, n) {
	let r = (0, K.useContext)(S), { isVirtualized: i } = (0, K.useContext)(v), { isLoading: c, onLoadMore: l, scrollOffset: u, ...d } = e, f = (0, K.useRef)(null), p = (0, K.useMemo)(() => ({
		onLoadMore: l,
		collection: r?.collection,
		sentinelRef: f,
		scrollOffset: u
	}), [
		l,
		u,
		f,
		r?.collection
	]);
	R(p, f);
	let m = o({
		...d,
		id: void 0,
		children: n.rendered,
		defaultClassName: `react-aria-GridListLoadingIndicator`,
		values: void 0
	});
	return K.createElement(K.Fragment, null, K.createElement(`div`, {
		style: {
			position: `relative`,
			width: 0,
			height: 0
		},
		inert: _(!0)
	}, K.createElement(`div`, {
		"data-testid": `loadMoreSentinel`,
		ref: f,
		style: {
			position: `absolute`,
			height: 1,
			width: 1
		}
	})), c && m.children && K.createElement(s.div, {
		...m,
		...a(e, { global: !0 }),
		role: `row`,
		ref: t
	}, K.createElement(`div`, {
		"aria-colindex": i ? 1 : void 0,
		role: `gridcell`
	}, m.children)));
});
export { W as a, G as i, J as n, X as r, Q as t };
