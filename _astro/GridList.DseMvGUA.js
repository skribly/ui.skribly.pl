import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, L as n, Q as r, an as i, dn as a, hn as o, mn as s, on as c, sn as l, st as u, un as d, vn as f, vt as p } from "./doc.DoLlUurT.js";
import { a as m, o as h } from "./Checkbox.64MvRCxA.js";
import { b as g, i as _, v } from "./useCollection.DWoaItNc.js";
import { d as y, f as b, l as x, n as S, u as C } from "./ListBox.DfVEZavp.js";
import { n as w, r as ee } from "./Autocomplete.D4ncqRMy.js";
import { c as T, n as E, s as D } from "./FocusScope.bOWhljI-.js";
import { n as te } from "./Text.CWB1nGTv.js";
import { a as O, n as k, o as A, t as ne } from "./useGridListItem.DafxZ7_N.js";
import { n as j } from "./useLocalizedStringFormatter.DOzdQqIj.js";
import { f as M, i as N, l as P, n as F, t as I } from "./CollectionBuilder.Dfbyz3n6.js";
import { a as re, i as L, t as R } from "./useLoadMoreSentinel.g4Y1QWZw.js";
import { n as z, t as B } from "./useListState.CZccHHkQ.js";
import { n as V } from "./react-dom.B9zIfLd2.js";
import { n as H } from "./VisuallyHidden.DNi0NmtP.js";
function U(e) {
	return e && e.__esModule ? e.default : e;
}
function W(e, t) {
	let { key: n } = e, r = t.selectionManager, i = f(), a = !t.selectionManager.canSelectItem(n), o = t.selectionManager.isSelected(n);
	return { checkboxProps: {
		id: i,
		"aria-label": j(U(O), `@react-aria/grid`).format(`select`),
		isSelected: o,
		isDisabled: a,
		onChange: () => r.toggleSelection(n)
	} };
}
function G(e, t) {
	let { key: n } = e, { checkboxProps: r } = W(e, t);
	return { checkboxProps: {
		...r,
		"aria-labelledby": `${r.id} ${A(t, n)}`
	} };
}
var K = e(V(), 1), q = (0, K.createContext)(null), J = (0, K.forwardRef)(function(e, t) {
	return [e, t] = c(e, t, q), K.createElement(F, { content: K.createElement(N, e) }, (n) => K.createElement(Y, {
		props: e,
		collection: n,
		gridListRef: t
	}));
});
function Y({ props: e, collection: n, gridListRef: r }) {
	[e, r] = c(e, r, ee);
	let { shouldUseVirtualFocus: s, filter: d, disallowTypeAhead: f, UNSTABLE_focusOnEntry: m, ...h } = e, { dragAndDropHooks: g, keyboardNavigationBehavior: _ = `arrow`, layout: w = `stack`, orientation: D = `vertical` } = e, { CollectionRoot: te, isVirtualized: O, layoutDelegate: A, dropTargetDelegate: ne } = (0, K.useContext)(v), j = B({
		...h,
		collection: n,
		children: void 0,
		layoutDelegate: A
	}), M = z(j, d), N = L({
		usage: `search`,
		sensitivity: `base`
	}), { disabledBehavior: P, disabledKeys: F } = M.selectionManager, { direction: I } = p(), R = (0, K.useMemo)(() => new re({
		collection: M.collection,
		collator: N,
		ref: r,
		disabledKeys: F,
		disabledBehavior: P,
		layoutDelegate: A,
		layout: w,
		orientation: D,
		direction: I
	}), [
		M.collection,
		r,
		w,
		D,
		F,
		P,
		A,
		N,
		I
	]), { gridProps: V } = k({
		...h,
		keyboardDelegate: R,
		keyboardNavigationBehavior: w === `grid` ? `tab` : _,
		isVirtualized: O,
		shouldSelectOnPressUp: e.shouldSelectOnPressUp,
		disallowTypeAhead: f,
		UNSTABLE_focusOnEntry: m
	}, M, r), H = M.selectionManager, U = !!g?.useDraggableCollectionState, W = !!g?.useDroppableCollectionState;
	(0, K.useRef)(U), (0, K.useRef)(W), (0, K.useEffect)(() => {}, [U, W]);
	let G, q, J, Y = !1, X = null, Z = (0, K.useRef)(null);
	if (U && g) {
		G = g.useDraggableCollectionState({
			collection: M.collection,
			selectionManager: H,
			preview: g.renderDragPreview ? Z : void 0
		}), g.useDraggableCollection({}, G, r);
		let e = g.DragPreview;
		X = g.renderDragPreview ? K.createElement(e, { ref: Z }, g.renderDragPreview) : null;
	}
	if (W && g) {
		q = g.useDroppableCollectionState({
			collection: M.collection,
			selectionManager: H
		});
		let e = g.dropTargetDelegate || ne || new g.ListDropTargetDelegate(n, r, {
			layout: w,
			direction: I,
			orientation: D
		});
		J = g.useDroppableCollection({
			keyboardDelegate: R,
			dropTargetDelegate: e
		}, q, r), Y = q.isDropTarget({ type: `root` });
	}
	let { focusProps: ae, isFocused: Q, isFocusVisible: se } = t(), $ = M.collection.size === 0, ce = {
		isDropTarget: Y,
		orientation: D,
		isEmpty: $,
		isFocused: Q,
		isFocusVisible: se,
		layout: w,
		state: M
	}, le = l({
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
	let de = u(e, { global: !0 });
	return K.createElement(E, null, K.createElement(a.div, {
		...o(de, le, V, ae, J?.collectionProps, null),
		ref: r,
		slot: e.slot || void 0,
		onScroll: e.onScroll,
		"data-drop-target": Y || void 0,
		"data-empty": $ || void 0,
		"data-focused": Q || void 0,
		"data-focus-visible": se || void 0,
		"data-layout": w,
		"data-orientation": D
	}, K.createElement(i, { values: [
		[S, M],
		[C, {
			dragAndDropHooks: g,
			dragState: G,
			dropState: q
		}],
		[b, { render: ie }]
	] }, W && K.createElement(oe, null), K.createElement(T, null, K.createElement(te, {
		collection: M.collection,
		scrollRef: r,
		persistedKeys: y(H, g, q),
		renderDropIndicator: x(g, q)
	}))), ue, X));
}
var X = I(M, function(e, c, f) {
	let p = (0, K.useContext)(S), { dragAndDropHooks: _, dragState: y, dropState: b } = (0, K.useContext)(C), x = s(c), { isVirtualized: T } = (0, K.useContext)(v), E = y && !(y.isDisabled || y.selectionManager.isDisabled(f.key)), { rowProps: O, gridCellProps: k, descriptionProps: A, ...j } = ne({
		node: f,
		shouldSelectOnPressUp: !!y,
		isVirtualized: T,
		focusMode: e.focusMode,
		allowsArrowNavigation: e.allowsArrowNavigation
	}, p, x), { hoverProps: M, isHovered: N } = r({
		isDisabled: !j.allowsSelection && !j.hasAction && !E,
		onHoverStart: f.props.onHoverStart,
		onHoverChange: f.props.onHoverChange,
		onHoverEnd: f.props.onHoverEnd
	}), { isFocusVisible: P, focusProps: F } = t(), { isFocusVisible: I, focusProps: re } = t({ within: !0 }), { checkboxProps: L } = G({ key: f.key }, p), R = p.selectionManager.disabledBehavior === `all` && j.isDisabled ? { isDisabled: !0 } : {}, z = null;
	y && _ && (z = _.useDraggableItem({
		key: f.key,
		hasDragButton: !0
	}, y));
	let B = null, V = (0, K.useRef)(null), { visuallyHiddenProps: U } = H();
	b && _ && (B = _.useDropIndicator({ target: {
		type: `item`,
		key: f.key,
		dropPosition: `on`
	} }, b, V));
	let W = y && y.isDragging(f.key), q = l({
		...e,
		id: void 0,
		children: f.rendered,
		defaultClassName: `react-aria-GridListItem`,
		values: {
			...j,
			isHovered: N,
			isFocusVisible: P,
			isFocusVisibleWithin: I,
			selectionMode: p.selectionManager.selectionMode,
			selectionBehavior: p.selectionManager.selectionBehavior,
			allowsDragging: !!y,
			isDragging: W,
			isDropTarget: B?.isDropTarget,
			id: f.key,
			state: p
		}
	}), J = (0, K.useRef)(null);
	(0, K.useEffect)(() => {
		y && !J.current && console.warn(`Draggable items in a GridList must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.`);
	}, []), (0, K.useEffect)(() => {
		f.textValue;
	}, [f.textValue]);
	let Y = u(e, { global: !0 });
	return delete Y.id, delete Y.onClick, K.createElement(K.Fragment, null, B && !B.isHidden && K.createElement(`div`, {
		role: `row`,
		style: { position: `absolute` }
	}, K.createElement(`div`, { role: `gridcell` }, K.createElement(`div`, {
		role: `button`,
		...U,
		...B?.dropIndicatorProps,
		ref: V
	}))), K.createElement(a.div, {
		...o(Y, q, O, F, re, M, z?.dragProps),
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
		"data-selection-mode": p.selectionManager.selectionMode === `none` ? void 0 : p.selectionManager.selectionMode
	}, K.createElement(`div`, {
		...k,
		style: { display: `contents` }
	}, K.createElement(i, { values: [
		[m, { slots: {
			[d]: {},
			selection: L
		} }],
		[h, { slots: {
			[d]: {},
			selection: L
		} }],
		[n, { slots: {
			[d]: R,
			drag: {
				...z?.dragButtonProps,
				ref: J,
				style: { pointerEvents: `none` }
			}
		} }],
		[te, { slots: {
			[d]: {},
			description: A
		} }],
		[v, g],
		[S, null],
		[ee, null],
		[w, null],
		[D, { isSelected: j.isSelected }]
	] }, q.children))));
});
function ie(e, t) {
	t = s(t);
	let { dragAndDropHooks: n, dropState: r } = (0, K.useContext)(C), i = (0, K.useRef)(null), { dropIndicatorProps: a, isHidden: o, isDropTarget: c } = n.useDropIndicator(e, r, i);
	return o ? null : K.createElement(ae, {
		...e,
		dropIndicatorProps: a,
		isDropTarget: c,
		buttonRef: i,
		ref: t
	});
}
function Z(e, t) {
	let { dropIndicatorProps: n, isDropTarget: r, buttonRef: i, ...o } = e, { visuallyHiddenProps: s } = H(), c = l({
		...o,
		defaultClassName: `react-aria-DropIndicator`,
		values: { isDropTarget: r }
	});
	return K.createElement(a.div, {
		...c,
		role: `row`,
		ref: t,
		"data-drop-target": r || void 0
	}, K.createElement(`div`, { role: `gridcell` }, K.createElement(`div`, {
		...s,
		role: `button`,
		...n,
		ref: i
	}), c.children));
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
	let r = (0, K.useContext)(S), { isVirtualized: i } = (0, K.useContext)(v), { isLoading: o, onLoadMore: s, scrollOffset: c, ...d } = e, f = (0, K.useRef)(null), p = (0, K.useMemo)(() => ({
		onLoadMore: s,
		collection: r?.collection,
		sentinelRef: f,
		scrollOffset: c
	}), [
		s,
		c,
		f,
		r?.collection
	]);
	R(p, f);
	let m = l({
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
	})), o && m.children && K.createElement(a.div, {
		...m,
		...u(e, { global: !0 }),
		role: `row`,
		ref: t
	}, K.createElement(`div`, {
		"aria-colindex": i ? 1 : void 0,
		role: `gridcell`
	}, m.children)));
});
export { W as a, G as i, J as n, X as r, Q as t };
