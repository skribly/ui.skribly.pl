import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { A as t, C as n, D as r, E as i, O as a, T as o, _ as s, a as c, b as l, c as u, d, f, g as p, h as m, i as h, k as g, l as _, m as v, n as y, o as ee, p as b, r as x, s as S, t as C, u as w, v as T, w as E } from "./useDrop.DKLTXZKp.js";
import { n as D, t as O } from "./react-dom.B9zIfLd2.js";
import { $ as k, H as A, L as j, Lt as M, Pt as te, _t as N, ct as P, et as F, rt as I, x as L, zt as R } from "./createLucideIcon.npgQlVHx.js";
import { l as z } from "./useLoadMoreSentinel.DKpPMiER.js";
import { g as B, v as ne } from "./animation.BhtQe7Yj.js";
import { n as V } from "./useLocalizedStringFormatter.CY4FHGAo.js";
function re(e, t, n, r, i = !1, a = !1) {
	switch (r) {
		case `left`: return i ? H(e, t, n, a, `left`) : U(e, t, n, a, `left`);
		case `right`: return i ? U(e, t, n, a, `right`) : H(e, t, n, a, `right`);
		case `up`: return U(e, t, n, a);
		case `down`: return H(e, t, n, a);
	}
}
function H(e, t, n, r = !1, i = null) {
	if (!n) return { type: `root` };
	if (n.type === `root`) {
		let t = e.getFirstKey?.() ?? null;
		return t == null ? null : {
			type: `item`,
			key: t,
			dropPosition: `before`
		};
	}
	if (n.type === `item`) {
		let r = null;
		r = i ? i === `right` ? e.getKeyRightOf?.(n.key, { includeDisabled: !0 }) : e.getKeyLeftOf?.(n.key, { includeDisabled: !0 }) : e.getKeyBelow?.(n.key, { includeDisabled: !0 });
		let a = G(t, n.key, (e) => t.getKeyAfter(e));
		if (r != null && r !== a) return {
			type: `item`,
			key: r,
			dropPosition: n.dropPosition
		};
		switch (n.dropPosition) {
			case `before`: return {
				type: `item`,
				key: n.key,
				dropPosition: `on`
			};
			case `on`: {
				let e = t.getItem(n.key), i = r == null ? null : t.getItem(r);
				return e && i && i.level >= e.level ? {
					type: `item`,
					key: i.key,
					dropPosition: `before`
				} : {
					type: `item`,
					key: n.key,
					dropPosition: `after`
				};
			}
			case `after`: {
				let e = t.getItem(n.key), r = e?.nextKey == null ? null : t.getItem(e.nextKey);
				for (; r != null && r.type !== `item`;) r = r.nextKey == null ? null : t.getItem(r.nextKey);
				if (e && r == null && e.parentKey != null) {
					let n = t.getItem(e.parentKey), r = n?.nextKey == null ? null : t.getItem(n.nextKey);
					if (r?.type === `item`) return {
						type: `item`,
						key: r.key,
						dropPosition: `before`
					};
					if (n?.type === `item`) return {
						type: `item`,
						key: n.key,
						dropPosition: `after`
					};
				}
				if (r) return {
					type: `item`,
					key: r.key,
					dropPosition: `on`
				};
			}
		}
	}
	return r ? { type: `root` } : null;
}
function U(e, t, n, r = !1, i = null) {
	if (!n || r && n.type === `root`) {
		let n = null, r = e.getLastKey?.();
		for (; r != null;) {
			let e = t.getItem(r);
			if (e?.type !== `item`) break;
			n = r, r = e?.parentKey;
		}
		return n == null ? null : {
			type: `item`,
			key: n,
			dropPosition: `after`
		};
	}
	if (n.type === `item`) {
		let r = null;
		r = i ? i === `left` ? e.getKeyLeftOf?.(n.key, { includeDisabled: !0 }) : e.getKeyRightOf?.(n.key, { includeDisabled: !0 }) : e.getKeyAbove?.(n.key, { includeDisabled: !0 });
		let a = G(t, n.key, (e) => t.getKeyBefore(e));
		if (r != null && r !== a) return {
			type: `item`,
			key: r,
			dropPosition: n.dropPosition
		};
		switch (n.dropPosition) {
			case `before`: {
				let e = t.getItem(n.key);
				if (e && e.prevKey != null) {
					let n = W(t, e.prevKey);
					if (n) return n;
				}
				return r == null ? { type: `root` } : {
					type: `item`,
					key: r,
					dropPosition: `on`
				};
			}
			case `on`: return {
				type: `item`,
				key: n.key,
				dropPosition: `before`
			};
			case `after`: return W(t, n.key) || {
				type: `item`,
				key: n.key,
				dropPosition: `on`
			};
		}
	}
	return n.type === `root` ? null : { type: `root` };
}
function W(e, t) {
	let n = e.getItem(t), r = G(e, t, (t) => e.getKeyAfter(t)), i = r == null ? null : e.getItem(r);
	if (n && i && i.level > n.level) {
		let t = null;
		if (`lastChildKey` in n) for (t = n.lastChildKey == null ? null : e.getItem(n.lastChildKey); t && t.type !== `item` && t.prevKey != null;) t = e.getItem(t.prevKey);
		else t = Array.from(n.childNodes).findLast((e) => e.type === `item`) || null;
		if (t) return {
			type: `item`,
			key: t.key,
			dropPosition: `after`
		};
	}
	return null;
}
function G(e, t, n) {
	let r = n(t), i = r == null ? null : e.getItem(r);
	for (; i && i.type !== `item`;) r = n(i.key), i = r == null ? null : e.getItem(r);
	return r;
}
var K = e(D(), 1), q = 20;
function J(e) {
	let t = (0, K.useRef)(null), n = (0, K.useRef)(!0), r = (0, K.useRef)(!0);
	(0, K.useEffect)(() => {
		if (e.current) {
			t.current = ne(e.current) ? e.current : z(e.current);
			let i = window.getComputedStyle(t.current);
			n.current = /(auto|scroll)/.test(i.overflowX), r.current = /(auto|scroll)/.test(i.overflowY);
		}
	}, [e]);
	let i = (0, K.useRef)({
		timer: void 0,
		dx: 0,
		dy: 0
	}).current;
	(0, K.useEffect)(() => () => {
		i.timer &&= (cancelAnimationFrame(i.timer), void 0);
	}, [i]);
	let a = (0, K.useCallback)(() => {
		n.current && t.current && (t.current.scrollLeft += i.dx), r.current && t.current && (t.current.scrollTop += i.dy), i.timer &&= requestAnimationFrame(a);
	}, [t, i]);
	return {
		move(e, n) {
			if (!I() || P() || !t.current) return;
			let r = t.current.getBoundingClientRect(), o = q, s = q, c = r.height - q, l = r.width - q;
			e < o || e > l || n < s || n > c ? (e < o ? i.dx = e - o : e > l && (i.dx = e - l), n < s ? i.dy = n - s : n > c && (i.dy = n - c), i.timer ||= requestAnimationFrame(a)) : this.stop();
		},
		stop() {
			i.timer &&= (cancelAnimationFrame(i.timer), void 0);
		}
	};
}
function Y(e, t, r) {
	let i = (0, K.useRef)({
		props: e,
		state: t,
		nextTarget: null,
		dropOperation: null
	}).current;
	i.props = e, i.state = t;
	let a = (0, K.useCallback)(async (e) => {
		let { onInsert: t, onRootDrop: n, onItemDrop: a, onReorder: o, onMove: s, acceptedDragTypes: c = `all`, shouldAcceptItemDrop: u } = i.props, { draggingKeys: d } = b, f = p(r), { target: m, dropOperation: h, items: g } = e, _ = g;
		(c !== `all` || u) && (_ = g.filter((e) => {
			let t;
			return t = e.kind === `directory` ? new Set([l]) : e.kind === `file` ? new Set([e.type]) : e.types, c === `all` || c.some((e) => t.has(e)) ? m.type === `item` && m.dropPosition === `on` && u ? u(m, t) : !0 : !1;
		})), _.length > 0 && (m.type === `root` && n && await n({
			items: _,
			dropOperation: h
		}), m.type === `item` && (m.dropPosition === `on` && a && await a({
			items: _,
			dropOperation: h,
			isInternal: f,
			target: m
		}), s && f && await s({
			keys: d,
			dropOperation: h,
			target: m
		}), m.dropPosition !== `on` && (!f && t && await t({
			items: _,
			dropOperation: h,
			target: m
		}), f && o && await o({
			keys: d,
			dropOperation: h,
			target: m
		}))));
	}, [i, r]), s = J(r), { dropProps: c } = C({
		ref: r,
		onDropEnter() {
			i.nextTarget != null && t.setTarget(i.nextTarget);
		},
		onDropMove(e) {
			i.nextTarget != null && t.setTarget(i.nextTarget), s.move(e.x, e.y);
		},
		getDropOperationForPoint(a, o, s, c) {
			let { draggingKeys: l, dropCollectionRef: u } = b, d = p(r), f = e.dropTargetDelegate.getDropTargetFromPoint(s, c, (e) => t.getDropOperation({
				target: e,
				types: a,
				allowedOperations: o,
				isInternal: d,
				draggingKeys: l
			}) !== `cancel`);
			if (!f) return i.dropOperation = `cancel`, i.nextTarget = null, `cancel`;
			if (i.dropOperation = t.getDropOperation({
				target: f,
				types: a,
				allowedOperations: o,
				isInternal: d,
				draggingKeys: l
			}), i.dropOperation === `cancel`) {
				let e = { type: `root` }, n = t.getDropOperation({
					target: e,
					types: a,
					allowedOperations: o,
					isInternal: d,
					draggingKeys: l
				});
				n !== `cancel` && (f = e, i.dropOperation = n);
			}
			return f && i.dropOperation !== `cancel` && r?.current !== u?.current && n(r), i.nextTarget = i.dropOperation === `cancel` ? null : f, i.dropOperation;
		},
		onDropExit() {
			n(void 0), t.setTarget(null), s.stop();
		},
		onDropActivate(n) {
			t.target?.type === `item` && typeof e.onDropActivate == `function` && e.onDropActivate({
				type: `dropactivate`,
				x: n.x,
				y: n.y,
				target: t.target
			});
		},
		onDrop(e) {
			n(r), t.target && m(e, t.target);
			let { draggingCollectionRef: i } = b;
			i ?? v();
		}
	}), d = (0, K.useRef)(null), f = (0, K.useCallback)(() => {
		let { state: e } = i;
		if (d.current) {
			let { target: t, collection: n, selectedKeys: r, focusedKey: i, isInternal: a, draggingKeys: o } = d.current;
			if (e.collection.size > n.size && e.selectionManager.isSelectionEqual(r)) {
				let t = new Set(), r = e.collection.getFirstKey();
				for (; r != null;) {
					let i = e.collection.getItem(r);
					i?.type === `item` && !n.getItem(i.key) && t.add(i.key), r = i?.hasChildNodes && e.collection.getItem(i.lastChildKey)?.type === `item` ? i.firstChildKey : e.collection.getKeyAfter(r);
				}
				if (e.selectionManager.setSelectedKeys(t), e.selectionManager.focusedKey === i) {
					let n = t.keys().next().value;
					if (n != null) {
						let t = e.collection.getItem(n), r = d.current.target, i = e.collection.expandedKeys ? e.collection.expandedKeys.has(t?.parentKey) : !1;
						t && (t?.type === `cell` || r.type === `item` && r.dropPosition === `on` && !i) && (n = t.parentKey), n != null && e.selectionManager.setFocusedKey(n), e.selectionManager.selectionMode === `none` && A(`keyboard`);
					}
				}
			} else i != null && e.selectionManager.focusedKey === i && a && t.type === `item` && t.dropPosition !== `on` && o.has(e.collection.getItem(i)?.parentKey) ? (e.selectionManager.setFocusedKey(e.collection.getItem(i)?.parentKey ?? null), A(`keyboard`)) : e.selectionManager.focusedKey === i && t.type === `item` && t.dropPosition === `on` && e.collection.getItem(t.key) != null ? (e.selectionManager.setFocusedKey(t.key), A(`keyboard`)) : e.selectionManager.focusedKey != null && !e.selectionManager.isSelected(e.selectionManager.focusedKey) && A(`keyboard`);
			e.selectionManager.setFocused(!0);
		}
	}, [i]), m = (0, K.useCallback)((e, t) => {
		let { state: n } = i;
		d.current = {
			timeout: void 0,
			focusedKey: n.selectionManager.focusedKey,
			collection: n.collection,
			selectedKeys: n.selectionManager.selectedKeys,
			draggingKeys: b.draggingKeys,
			isInternal: p(r),
			target: t
		}, (i.props.onDrop || a)({
			type: `drop`,
			x: e.x,
			y: e.y,
			target: t,
			items: e.items,
			dropOperation: e.dropOperation
		}), d.current.timeout = setTimeout(() => {
			f(), d.current = null;
		}, 50);
	}, [
		i,
		a,
		r,
		f
	]);
	(0, K.useEffect)(() => () => {
		d.current && clearTimeout(d.current.timeout);
	}, []), R(() => {
		d.current && t.collection !== d.current.collection && f();
	});
	let { direction: h } = j();
	(0, K.useEffect)(() => {
		if (!r.current) return;
		let e = (e, t = !0, n = `down`) => re(i.props.keyboardDelegate, i.state.collection, e, n, h === `rtl`, t), t = (t, n = !0) => e(t, n, `up`), a = (e, t, n, a, o = !0) => {
			let s = 0, c, { draggingKeys: l } = b, u = p(r);
			do {
				let r = a(e, o);
				if (!r) return null;
				e = r, c = i.state.getDropOperation({
					target: r,
					types: t,
					allowedOperations: n,
					isInternal: u,
					draggingKeys: l
				}), e.type === `root` && s++;
			} while (c === `cancel` && !i.state.isDropTarget(e) && s < 2);
			return c === `cancel` ? null : e;
		};
		return u({
			element: r.current,
			preventFocusOnDrop: !0,
			getDropOperation(t, n) {
				if (i.state.target) {
					let { draggingKeys: e } = b, a = p(r);
					return i.state.getDropOperation({
						target: i.state.target,
						types: t,
						allowedOperations: n,
						isInternal: a,
						draggingKeys: e
					});
				}
				return a(null, t, n, e) ? `move` : `cancel`;
			},
			onDropEnter(s, c) {
				let l = o(c.items), u = i.state.selectionManager, d = null;
				n(r);
				let f = u.focusedKey, m = `after`, h = f == null ? null : i.state.collection.getItem(f);
				if (h?.type === `cell` && (f = h.parentKey), f != null && u.isSelected(f) && (u.selectedKeys.size > 1 && u.firstSelectedKey === f ? m = `before` : f = u.lastSelectedKey), f != null) {
					d = {
						type: `item`,
						key: f,
						dropPosition: m
					};
					let { draggingKeys: n } = b, o = p(r);
					i.state.getDropOperation({
						target: d,
						types: l,
						allowedOperations: c.allowedDropOperations,
						isInternal: o,
						draggingKeys: n
					}) === `cancel` && (d = a(d, l, c.allowedDropOperations, e, !1) ?? a(d, l, c.allowedDropOperations, t, !1));
				}
				d ||= a(null, l, c.allowedDropOperations, e), i.state.setTarget(d);
			},
			onDropExit() {
				n(void 0), i.state.setTarget(null);
			},
			onDropTargetEnter(e) {
				i.state.setTarget(e);
			},
			onDropActivate(e, t) {
				t?.type === `item` && t?.dropPosition === `on` && typeof i.props.onDropActivate == `function` && i.props.onDropActivate({
					type: `dropactivate`,
					x: e.x,
					y: e.y,
					target: t
				});
			},
			onDrop(e, t) {
				n(r), i.state.target && m(e, t || i.state.target);
			},
			onKeyDown(n, s) {
				let { keyboardDelegate: c } = i.props, l = o(s.items);
				switch (n.key) {
					case `ArrowDown`:
						if (c.getKeyBelow) {
							let t = a(i.state.target, l, s.allowedDropOperations, (t, n) => e(t, n, `down`));
							i.state.setTarget(t);
						}
						break;
					case `ArrowUp`:
						if (c.getKeyAbove) {
							let t = a(i.state.target, l, s.allowedDropOperations, (t, n) => e(t, n, `up`));
							i.state.setTarget(t);
						}
						break;
					case `ArrowLeft`:
						if (c.getKeyLeftOf) {
							let t = a(i.state.target, l, s.allowedDropOperations, (t, n) => e(t, n, `left`));
							i.state.setTarget(t);
						}
						break;
					case `ArrowRight`:
						if (c.getKeyRightOf) {
							let t = a(i.state.target, l, s.allowedDropOperations, (t, n) => e(t, n, `right`));
							i.state.setTarget(t);
						}
						break;
					case `Home`:
						if (c.getFirstKey) {
							let t = a(null, l, s.allowedDropOperations, e);
							i.state.setTarget(t);
						}
						break;
					case `End`:
						if (c.getLastKey) {
							let e = a(null, l, s.allowedDropOperations, t);
							i.state.setTarget(e);
						}
						break;
					case `PageDown`:
						if (c.getKeyPageBelow) {
							let n = i.state.target;
							if (!n) n = a(null, l, s.allowedDropOperations, e);
							else {
								let o = c.getFirstKey?.();
								n.type === `item` && (o = n.key);
								let u = null;
								o != null && (u = c.getKeyPageBelow(o));
								let d = n.type === `item` ? n.dropPosition : `after`;
								if ((u == null || n.type === `item` && n.key === c.getLastKey?.()) && (u = c.getLastKey?.() ?? null, d = `after`), u == null) break;
								n = {
									type: `item`,
									key: u,
									dropPosition: d
								};
								let { draggingCollectionRef: f, draggingKeys: p } = b, m = f?.current === r?.current;
								i.state.getDropOperation({
									target: n,
									types: l,
									allowedOperations: s.allowedDropOperations,
									isInternal: m,
									draggingKeys: p
								}) === `cancel` && (n = a(n, l, s.allowedDropOperations, e, !1) ?? a(n, l, s.allowedDropOperations, t, !1));
							}
							i.state.setTarget(n ?? i.state.target);
						}
						break;
					case `PageUp`: {
						if (!c.getKeyPageAbove) break;
						let n = i.state.target;
						if (!n) n = a(null, l, s.allowedDropOperations, t);
						else if (n.type === `item`) {
							if (n.key === c.getFirstKey?.()) n = { type: `root` };
							else {
								let e = c.getKeyPageAbove(n.key), t = n.dropPosition;
								if (e ?? (e = c.getFirstKey?.(), t = `before`), e == null) break;
								n = {
									type: `item`,
									key: e,
									dropPosition: t
								};
							}
							let { draggingKeys: o } = b, u = p(r);
							i.state.getDropOperation({
								target: n,
								types: l,
								allowedOperations: s.allowedDropOperations,
								isInternal: u,
								draggingKeys: o
							}) === `cancel` && (n = a(n, l, s.allowedDropOperations, t, !1) ?? a(n, l, s.allowedDropOperations, e, !1));
						}
						i.state.setTarget(n ?? i.state.target);
						break;
					}
				}
				i.props.onKeyDown?.(n);
			}
		});
	}, [
		i,
		r,
		m,
		h
	]);
	let g = M();
	return E.set(t, {
		id: g,
		ref: r
	}), { collectionProps: te(c, {
		id: g,
		"aria-describedby": null
	}) };
}
function X(e, t, n) {
	let { dropProps: r } = y(), i = s(t);
	(0, K.useEffect)(() => {
		if (n.current) return S({
			element: n.current,
			target: e.target,
			getDropOperation(n, r) {
				let { draggingKeys: a } = b, o = p(i);
				return t.getDropOperation({
					target: e.target,
					types: n,
					allowedOperations: r,
					isInternal: o,
					draggingKeys: a
				});
			},
			activateButtonRef: e.activateButtonRef
		});
	}, [
		n,
		e.target,
		t,
		i,
		e.activateButtonRef
	]);
	let a = c(), { draggingKeys: l } = b, u = p(i), d = a && t.getDropOperation({
		target: e.target,
		types: o(a.dragTarget.items),
		allowedOperations: a.dragTarget.allowedDropOperations,
		isInternal: u,
		draggingKeys: l
	}) !== `cancel`, f = t.isDropTarget(e.target);
	return (0, K.useEffect)(() => {
		a && f && n.current && n.current.focus();
	}, [
		f,
		a,
		n
	]), {
		dropProps: {
			...r,
			"aria-hidden": !a || d ? void 0 : `true`
		},
		isDropTarget: f
	};
}
function ie(e) {
	return e && e.__esModule ? e.default : e;
}
function ae(e, t, n) {
	let { target: r } = e, { collection: i } = t, a = V(ie(x), `@react-aria/dnd`), o = c(), { dropProps: s } = X(e, t, n), l = M(), u = (e) => e == null ? `` : i.getTextValue?.(e) ?? i.getItem(e)?.textValue ?? ``, d = ``, f;
	if (r.type === `root`) d = a.format(`dropOnRoot`), f = `${l} ${_(t)}`;
	else if (r.dropPosition === `on`) d = a.format(`dropOnItem`, { itemText: u(r.key) });
	else {
		let e, t;
		if (r.dropPosition === `before`) {
			let t = i.getItem(r.key)?.prevKey, n = t == null ? null : i.getItem(t);
			e = n?.type === `item` ? n.key : null;
		} else e = r.key;
		if (r.dropPosition === `after`) {
			let e = i.getItem(r.key)?.nextKey, n = e == null ? null : i.getItem(e);
			t = n?.type === `item` ? n.key : null;
		} else t = r.key;
		e != null && t != null ? d = a.format(`insertBetween`, {
			beforeItemText: u(e),
			afterItemText: u(t)
		}) : e == null ? t != null && (d = a.format(`insertBefore`, { itemText: u(t) })) : d = a.format(`insertAfter`, { itemText: u(e) });
	}
	let p = t.isDropTarget(r), m = o ? s[`aria-hidden`] : `true`;
	return {
		dropIndicatorProps: {
			...s,
			id: l,
			"aria-roledescription": a.format(`dropIndicator`),
			"aria-label": d,
			"aria-labelledby": f,
			"aria-hidden": m,
			tabIndex: -1
		},
		isDropTarget: p,
		isHidden: !p && !!m
	};
}
function oe(e) {
	return e && e.__esModule ? e.default : e;
}
var Z = {
	keyboard: {
		start: `dragDescriptionKeyboard`,
		end: `endDragKeyboard`
	},
	touch: {
		start: `dragDescriptionTouch`,
		end: `endDragTouch`
	},
	virtual: {
		start: `dragDescriptionVirtual`,
		end: `endDragVirtual`
	}
};
function se(e) {
	let { hasDragButton: n, isDisabled: i } = e, o = V(oe(x), `@react-aria/dnd`), s = (0, K.useRef)({
		options: e,
		x: 0,
		y: 0
	}).current;
	s.options = e;
	let c = (0, K.useRef)(null), [l, u] = (0, K.useState)(!1), p = (e) => {
		c.current = e, u(!!e);
	}, { addGlobalListener: m, removeAllGlobalListeners: h } = L(), _ = (0, K.useRef)(null), v = (n) => {
		if (n.defaultPrevented) return;
		if (n.stopPropagation(), _.current === `virtual`) {
			n.preventDefault(), C(N(n)), _.current = null;
			return;
		}
		typeof e.onDragStart == `function` && e.onDragStart({
			type: `dragstart`,
			x: n.clientX,
			y: n.clientY
		});
		let i = e.getItems();
		n.dataTransfer.clearData?.(), r(n.dataTransfer, i);
		let a = g.all;
		if (typeof e.getAllowedDropOperations == `function`) {
			let t = e.getAllowedDropOperations();
			a = g.none;
			for (let e of t) a |= g[e] || g.none;
		}
		f(a);
		let o = t[a] || `none`;
		n.dataTransfer.effectAllowed = o === `cancel` ? `none` : o, typeof e.preview?.current == `function` && e.preview.current(i, (e, t, r) => {
			if (!e) return;
			let i = e.getBoundingClientRect(), a = n.currentTarget.getBoundingClientRect(), o = n.clientX - a.x, s = n.clientY - a.y;
			(o > i.width || s > i.height) && (o = i.width / 2, s = i.height / 2);
			let c = o, l = s;
			typeof t == `number` && typeof r == `number` && (c = t, l = r), c = Math.max(0, Math.min(c, i.width)), l = Math.max(0, Math.min(l, i.height));
			let u = 2 * Math.round(i.height / 2);
			e.style.height = `${u}px`, n.dataTransfer.setDragImage(e, c, l);
		}), m(window, `drop`, (e) => {
			e.preventDefault(), e.stopPropagation(), console.warn(`Drags initiated from the React Aria useDrag hook may only be dropped on a target created with useDrop. This ensures that a keyboard and screen reader accessible alternative is available.`);
		}, { once: !0 }), s.x = n.clientX, s.y = n.clientY;
		let c = N(n);
		requestAnimationFrame(() => {
			p(c);
		});
	}, y = (t) => {
		t.stopPropagation(), (t.clientX !== s.x || t.clientY !== s.y) && (typeof e.onDragMove == `function` && e.onDragMove({
			type: `dragmove`,
			x: t.clientX,
			y: t.clientY
		}), s.x = t.clientX, s.y = t.clientY);
	}, b = (t) => {
		if (t.stopPropagation(), typeof e.onDragEnd == `function`) {
			let n = {
				type: `dragend`,
				x: t.clientX,
				y: t.clientY,
				dropOperation: a[t.dataTransfer.dropEffect]
			};
			T && (n.dropOperation = a[T]), e.onDragEnd(n);
		}
		p(null), h(), f(g.none), d(void 0);
	};
	(0, K.useEffect)(() => () => {
		if (c.current && (!c.current.isConnected || parseInt(K.version, 10) < 17)) {
			if (typeof s.options.onDragEnd == `function`) {
				let e = {
					type: `dragend`,
					x: 0,
					y: 0,
					dropOperation: a[T || `none`]
				};
				s.options.onDragEnd(e);
			}
			p(null), f(g.none), d(void 0);
		}
	}, [s]);
	let S = (e) => {
		(e.pointerType === `keyboard` || e.pointerType === `virtual`) && C(e.target);
	}, C = (e) => {
		if (typeof s.options.onDragStart == `function`) {
			let t = e.getBoundingClientRect();
			s.options.onDragStart({
				type: `dragstart`,
				x: t.x + t.width / 2,
				y: t.y + t.height / 2
			});
		}
		ee({
			element: e,
			items: s.options.getItems(),
			allowedDropOperations: typeof s.options.getAllowedDropOperations == `function` ? s.options.getAllowedDropOperations() : [
				`move`,
				`copy`,
				`link`
			],
			onDragEnd(e) {
				p(null), typeof s.options.onDragEnd == `function` && s.options.onDragEnd(e);
			}
		}, o), p(e);
	}, E = w(), D = l ? Z[E].end : Z[E].start, O = B(o.format(D)), A = {};
	return n || (A = {
		...O,
		onPointerDown(e) {
			if (_.current = k(e.nativeEvent) ? `virtual` : e.pointerType, e.width < 1 && e.height < 1 && P() && I()) _.current = `virtual`;
			else {
				let t = e.currentTarget.getBoundingClientRect(), n = e.clientX - t.x, r = e.clientY - t.y, i = t.width / 2, a = t.height / 2;
				Math.abs(n - i) <= .5 && Math.abs(r - a) <= .5 ? _.current = `virtual` : _.current = e.pointerType;
			}
		},
		onKeyDownCapture(e) {
			N(e) === e.currentTarget && e.key === `Enter` && (e.preventDefault(), e.stopPropagation());
		},
		onKeyUpCapture(e) {
			N(e) === e.currentTarget && e.key === `Enter` && (e.preventDefault(), e.stopPropagation(), C(N(e)));
		},
		onClick(e) {
			(F(e.nativeEvent) || _.current === `virtual`) && (e.preventDefault(), e.stopPropagation(), C(N(e)));
		}
	}), i ? {
		dragProps: { draggable: `false` },
		dragButtonProps: {},
		isDragging: !1
	} : {
		dragProps: {
			...A,
			draggable: `true`,
			onDragStart: v,
			onDrag: y,
			onDragEnd: b
		},
		dragButtonProps: {
			...O,
			onPress: S
		},
		isDragging: l
	};
}
function ce(e) {
	return e && e.__esModule ? e.default : e;
}
var le = {
	keyboard: {
		selected: `dragSelectedKeyboard`,
		notSelected: `dragDescriptionKeyboard`
	},
	touch: {
		selected: `dragSelectedLongPress`,
		notSelected: `dragDescriptionLongPress`
	},
	virtual: {
		selected: `dragDescriptionVirtual`,
		notSelected: `dragDescriptionVirtual`
	}
};
function ue(e, t) {
	let n = V(ce(x), `@react-aria/dnd`), r = t.isDisabled || t.selectionManager.isDisabled(e.key), { dragProps: i, dragButtonProps: a } = se({
		getItems() {
			return t.getItems(e.key);
		},
		preview: t.preview,
		getAllowedDropOperations: t.getAllowedDropOperations,
		hasDragButton: e.hasDragButton,
		onDragStart(n) {
			t.startDrag(e.key, n), m(t.draggingKeys);
		},
		onDragMove(e) {
			t.moveDrag(e);
		},
		onDragEnd(e) {
			let { dropOperation: n } = e, r = n !== `cancel` && p();
			t.endDrag({
				...e,
				keys: t.draggingKeys,
				isInternal: r
			}), v();
		}
	}), o = t.collection.getItem(e.key), s = t.getKeysForDrag(e.key).size, c = s > 1 && t.selectionManager.isSelected(e.key), l, u, d = w();
	if (!e.hasDragButton && t.selectionManager.selectionMode !== `none`) {
		let t = le[d][c ? `selected` : `notSelected`];
		e.hasAction && d === `keyboard` && (t += `Alt`), u = c ? n.format(t, { count: s }) : n.format(t), delete i.onClick;
	} else if (c) l = n.format(`dragSelectedItems`, { count: s });
	else {
		let r = t.collection.getTextValue?.(e.key) ?? o?.textValue ?? ``;
		l = n.format(`dragItem`, { itemText: r });
	}
	let f = B(u);
	if (u && Object.assign(i, f), !e.hasDragButton && e.hasAction) {
		let { onKeyDownCapture: e, onKeyUpCapture: t } = i;
		d === `touch` && delete i[`aria-describedby`], i.onKeyDownCapture = (t) => {
			t.altKey && e?.(t);
		}, i.onKeyUpCapture = (e) => {
			e.altKey && t?.(e);
		};
	}
	return {
		dragProps: r ? {} : i,
		dragButtonProps: {
			...a,
			isDisabled: r,
			"aria-label": l
		}
	};
}
function de(e, t, n) {
	let { draggingCollectionRef: r } = b;
	t.draggingKeys.size > 0 && r?.current !== n.current && i(n);
}
var fe = e(O(), 1), pe = K.forwardRef(function(e, t) {
	let n = e.children, [r, i] = (0, K.useState)(null), a = (0, K.useRef)(null), o = (0, K.useRef)(void 0);
	return (0, K.useImperativeHandle)(t, () => (e, t) => {
		let r = n(e), s, c, l;
		r && typeof r == `object` && `element` in r ? (s = r.element, c = r.x, l = r.y) : s = r, (0, fe.flushSync)(() => {
			i(s);
		}), t(a.current, c, l), o.current = requestAnimationFrame(() => {
			i(null);
		});
	}, [n]), (0, K.useEffect)(() => () => {
		o.current && cancelAnimationFrame(o.current);
	}, []), r ? K.createElement(`div`, {
		style: {
			zIndex: -100,
			position: `fixed`,
			top: 0,
			left: -1e5
		},
		ref: a
	}, r) : null;
});
function me(e) {
	let { getItems: t, isDisabled: n, collection: r, selectionManager: i, onDragStart: a, onDragMove: o, onDragEnd: s, preview: c, getAllowedDropOperations: l } = e, [, u] = (0, K.useState)(!1), d = (0, K.useRef)(new Set()), f = (0, K.useRef)(null), p = (e) => {
		let t = new Set();
		if (i.isSelected(e)) for (let e of i.selectedKeys) {
			let n = r.getItem(e);
			if (n) {
				let a = !1, o = n.parentKey;
				for (; o != null;) {
					if (i.selectedKeys.has(o)) {
						a = !0;
						break;
					}
					let e = r.getItem(o);
					o = e ? e.parentKey : null;
				}
				a || t.add(e);
			}
		}
		else t.add(e);
		return t;
	};
	return {
		collection: r,
		selectionManager: i,
		get draggedKey() {
			return f.current;
		},
		get draggingKeys() {
			return d.current;
		},
		isDragging(e) {
			return d.current.has(e);
		},
		getKeysForDrag: p,
		getItems(e) {
			let n = p(e), i = [];
			for (let e of n) {
				let t = r.getItem(e)?.value;
				t != null && i.push(t);
			}
			return t(p(e), i);
		},
		isDisabled: n,
		preview: c,
		getAllowedDropOperations: l,
		startDrag(e, t) {
			let n = p(e);
			d.current = n, f.current = e, i.setFocused(!1), u(!0), typeof a == `function` && a({
				...t,
				keys: n
			});
		},
		moveDrag(e) {
			typeof o == `function` && o({
				...e,
				keys: d.current
			});
		},
		endDrag(e) {
			let { isInternal: t } = e;
			typeof s == `function` && s({
				...e,
				keys: d.current,
				isInternal: t
			}), d.current = new Set(), f.current = null, u(!1);
		}
	};
}
function Q(e) {
	let { acceptedDragTypes: t = `all`, isDisabled: n, onInsert: r, onRootDrop: i, onItemDrop: a, onReorder: o, onMove: s, shouldAcceptItemDrop: c, collection: l, selectionManager: u, onDropEnter: d, getDropOperation: f, onDrop: p } = e, [m, h] = (0, K.useState)(null), g = (0, K.useRef)(null), _ = (e) => {
		if (e.dropPosition === `before`) {
			let t = l.getItem(e.key);
			return t && t.prevKey != null ? {
				type: `item`,
				key: t.prevKey,
				dropPosition: `after`
			} : null;
		}
		if (e.dropPosition === `after`) {
			let t = l.getItem(e.key);
			return t && t.nextKey != null ? {
				type: `item`,
				key: t.nextKey,
				dropPosition: `before`
			} : null;
		}
		return null;
	}, v = (0, K.useCallback)((e) => {
		let { target: u, types: d, allowedOperations: m, isInternal: h, draggingKeys: g } = e;
		if (n || !u) return `cancel`;
		if (t === `all` || t.some((e) => d.has(e))) {
			let e = r && u.type === `item` && !h && (u.dropPosition === `before` || u.dropPosition === `after`), t = o && u.type === `item` && h && (u.dropPosition === `before` || u.dropPosition === `after`) && he(l, u, g), n = u.type !== `item` || u.dropPosition !== `on` || !c || c(u, d), _ = s && u.type === `item` && h && n, v = i && u.type === `root` && !h, y = a && u.type === `item` && u.dropPosition === `on` && !(h && u.key != null && g.has(u.key)) && n;
			if (p || e || t || _ || v || y) return f ? f(u, d, m) : m[0];
		}
		return `cancel`;
	}, [
		n,
		l,
		t,
		f,
		r,
		i,
		a,
		c,
		o,
		s,
		p
	]);
	return {
		collection: l,
		selectionManager: u,
		isDisabled: n,
		target: m,
		setTarget(t) {
			if (this.isDropTarget(t)) return;
			let n = g.current;
			n && typeof e.onDropExit == `function` && e.onDropExit({
				type: `dropexit`,
				x: 0,
				y: 0,
				target: n
			}), t && typeof d == `function` && d({
				type: `dropenter`,
				x: 0,
				y: 0,
				target: t
			}), g.current = t ?? null, h(t ?? null);
		},
		isDropTarget(e) {
			let t = g.current;
			return !t || !e ? !1 : $(e, t) ? !0 : e?.type === `item` && t?.type === `item` && e.key !== t.key && e.dropPosition !== t.dropPosition && e.dropPosition !== `on` && t.dropPosition !== `on` ? $(_(e), t) || $(e, _(t)) : !1;
		},
		getDropOperation(e) {
			let { target: t, isInternal: n, draggingKeys: r } = e;
			if (n && t.type === `item` && r.size > 0) {
				if (r.has(t.key) && t.dropPosition === `on`) return `cancel`;
				let e = t.key;
				for (; e != null;) {
					let t = l.getItem(e)?.parentKey;
					if (t != null && r.has(t)) return `cancel`;
					e = t ?? null;
				}
			}
			return v(e);
		}
	};
}
function $(e, t) {
	if (!e) return !t;
	switch (e.type) {
		case `root`: return t?.type === `root`;
		case `item`: return t?.type === `item` && t?.key === e.key && t?.dropPosition === e.dropPosition;
	}
}
function he(e, t, n) {
	let r = e.getItem(t.key);
	for (let t of n) if (e.getItem(t)?.parentKey !== r?.parentKey) return !1;
	return !0;
}
var ge = class {
	constructor(e, t, n) {
		this.collection = e, this.ref = t, this.layout = n?.layout || `stack`, this.orientation = n?.orientation || `vertical`, this.direction = n?.direction || `ltr`;
	}
	getPrimaryStart(e) {
		return this.orientation === `horizontal` ? e.left : e.top;
	}
	getPrimaryEnd(e) {
		return this.orientation === `horizontal` ? e.right : e.bottom;
	}
	getSecondaryStart(e) {
		return this.orientation === `horizontal` ? e.top : e.left;
	}
	getSecondaryEnd(e) {
		return this.orientation === `horizontal` ? e.bottom : e.right;
	}
	getFlowStart(e) {
		return this.layout === `stack` ? this.getPrimaryStart(e) : this.getSecondaryStart(e);
	}
	getFlowEnd(e) {
		return this.layout === `stack` ? this.getPrimaryEnd(e) : this.getSecondaryEnd(e);
	}
	getFlowSize(e) {
		return this.getFlowEnd(e) - this.getFlowStart(e);
	}
	getDropTargetFromPoint(e, t, n) {
		if (this.collection[Symbol.iterator]().next().done || !this.ref.current) return { type: `root` };
		let r = this.ref.current.getBoundingClientRect(), i = this.orientation === `horizontal` ? e : t, a = this.orientation === `horizontal` ? t : e;
		i += this.getPrimaryStart(r), a += this.getSecondaryStart(r);
		let o = this.layout === `stack` ? i : a, s = this.orientation === `horizontal` && this.direction === `rtl`, c = this.layout === `grid` && this.orientation === `vertical` && this.direction === `rtl`, l = this.layout === `stack` ? s : c, u = this.ref.current?.dataset.collection, d = this.ref.current.querySelectorAll(u ? `[data-collection="${CSS.escape(u)}"]` : `[data-key]`), f = new Map();
		for (let e of d) e instanceof HTMLElement && e.dataset.key != null && f.set(e.dataset.key, e);
		let p = [...this.collection].filter((e) => e.type === `item`);
		if (p.length < 1) return { type: `root` };
		let m = 0, h = p.length;
		for (; m < h;) {
			let e = Math.floor((m + h) / 2), t = p[e], r = f.get(String(t.key));
			if (!r) break;
			let u = r.getBoundingClientRect(), d = (t) => {
				t ? m = e + 1 : h = e;
			};
			if (i < this.getPrimaryStart(u)) d(s);
			else if (i > this.getPrimaryEnd(u)) d(!s);
			else if (a < this.getSecondaryStart(u)) d(c);
			else if (a > this.getSecondaryEnd(u)) d(!c);
			else {
				let e = {
					type: `item`,
					key: t.key,
					dropPosition: `on`
				};
				if (n(e)) o <= this.getFlowStart(u) + 5 && n({
					...e,
					dropPosition: `before`
				}) ? e.dropPosition = l ? `after` : `before` : o >= this.getFlowEnd(u) - 5 && n({
					...e,
					dropPosition: `after`
				}) && (e.dropPosition = l ? `before` : `after`);
				else {
					let t = this.getFlowStart(u) + this.getFlowSize(u) / 2;
					o <= t && n({
						...e,
						dropPosition: `before`
					}) ? e.dropPosition = l ? `after` : `before` : o >= t && n({
						...e,
						dropPosition: `after`
					}) && (e.dropPosition = l ? `before` : `after`);
				}
				return e;
			}
		}
		let g = p[Math.min(m, p.length - 1)];
		return r = f.get(String(g.key))?.getBoundingClientRect(), r && (i < this.getPrimaryStart(r) || Math.abs(o - this.getFlowStart(r)) < Math.abs(o - this.getFlowEnd(r))) ? {
			type: `item`,
			key: g.key,
			dropPosition: l ? `after` : `before`
		} : {
			type: `item`,
			key: g.key,
			dropPosition: l ? `before` : `after`
		};
	}
};
function _e(e) {
	return { dragAndDropHooks: (0, K.useMemo)(() => {
		let { onDrop: t, onInsert: n, onItemDrop: r, onReorder: i, onMove: a, onRootDrop: o, getItems: s, renderDragPreview: c, renderDropIndicator: l, dropTargetDelegate: u } = e, d = !!s, f = !!(t || n || r || i || a || o), p = {};
		return d && (p.useDraggableCollectionState = function(t) {
			return me({
				...t,
				...e
			});
		}, p.useDraggableCollection = de, p.useDraggableItem = ue, p.DragPreview = pe, p.renderDragPreview = c, p.isVirtualDragging = h), f && (p.useDroppableCollectionState = function(t) {
			return Q({
				...t,
				...e
			});
		}, p.useDroppableItem = X, p.useDroppableCollection = function(t, n, r) {
			return Y({
				...t,
				...e
			}, n, r);
		}, p.useDropIndicator = ae, p.renderDropIndicator = l, p.dropTargetDelegate = u, p.ListDropTargetDelegate = ge), p;
	}, [e]) };
}
export { _e as t };
